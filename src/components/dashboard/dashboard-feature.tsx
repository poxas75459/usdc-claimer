/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3jRv3D3B3p2VxXAqaoWdqXM9NcuoXvaPUicLpArcAESF4PQWkwZUNPk6bZBtQPZcwnGC8obrq1LfG72XSGHDBGge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YxFuR5MeREkaS2uZ21a6dDFfj73XGZk5H5ZNQNy255yrDQVM89BcXM2opcPHH2DAvShaXd5fasBAGLVoj9f41iZ",
  "key1": "DCnQhXN7gurWyzYC9amkYWdoaxc2aufcH5gJh8SovTFpWo1ee9WkcHLDYRSibf4ZH9RQ5PY8fmjQuuP2tMwpUSk",
  "key2": "2dZDRdfkLuLxVuaQT1UYMksRKPqsQdy8n2VqQaRJBMTGkhFx1481hrBtKJ14NMtUaTRFUM6REKrRU1FVfV8vJGLP",
  "key3": "38fZ4WQqB1s4rYqw1egdM6TNvuYK6KaMUjcWZ1ohwXW45p98pbiW8uySKf1E7boom2p2AjzcsXV5JfdtRjahCttF",
  "key4": "23QejcM1iexhsEh3FPjRJRSMSo7ZJTJehp6P9cZWRABQzJkNa9MA7UxgGwTLHRc81UEMDQSSvgkeRM9Mf8wWb1U4",
  "key5": "2yvCVGhV3M7roPvivszhB5CWtgKYwsXqXgyMq87FkkFebY48F9FvD4QAXGrwb2hbVwwkXEPDKBWCqzPp5oz7fmFv",
  "key6": "2fyhW9dDwFqfVREq76KcH88cPCKbKZx5aMbqo1AbufH1zfcS4qBbmikFk75T78F23QviRJEFWkvi4a5mkbacE3S8",
  "key7": "2FwcXcbqzMJSEDNzD55MAhhqG5kcF6NvJuzK4cFrvSixmMBnLe9zDkUPmGSUCT1SU5FL4hBiE1rzMbvQKsUjeprK",
  "key8": "4EVsZR6SvKBTZxafr7nNrR6AdjKjbkKvXKRGATFo8cWaLmJiYxfQuWYVQLcgseYMN4cCaowS7ktDzowP7gbggoQT",
  "key9": "5mNxkinn1Jtqq2koFR14JuH37Wfew5VzeGzCEySma6aFJU4tyDpVLGVaudGnUzzajP8uihUJStQtuPit3Gfqx3SM",
  "key10": "rNmHWn2Pm5WfmHK3xUao4tKHwZyMbfsi3vkGJU5ypvUMQ699mhixjgNqUJ33PTWvpa8shzeZehNXajFHk2iBbAS",
  "key11": "e5WuZEfFL1WfS1VZJZAi1SL5WwcJx2LDnaGWrrPoyuDzKcmMaaMM9QEjBZTVGwhs5hr6sZDoApB8ZyQDDrNc2mA",
  "key12": "2xAAf5bxFLdxzR6tavB72pjcX4LcJzHd8a7vrztbRB5JqvToiinyPrsV2vpBTdvrqa5YCM6ZuCgGnqK9is2zvEx3",
  "key13": "qxfefi7jBGc1a1Y6hDGpaZtZj9i1VnjpKCdti1SzFzf5x132Wjvo1DdHJjsoygEKmC71geuTV9gyJey4EocZW1w",
  "key14": "2F46uU6arCZitfApb7PUq1qtyiH2aEeYgWNcnnXPP1Y1u3AXuJ9oiRYBAiB3CCfMdpFtNeW1cP9ya9EXfbyE7c8n",
  "key15": "49iDDSexsuoQpZ7uGB22RGKWsiv9nc3U4HGrRH1xLugGikUa8DKiJovVWWwtrak2jZ42QCcMFbS8NfPyjMXBULqf",
  "key16": "5H48ZHs5vpcZz6mNWcY8SLoS7ud1Q2eWG3ubUSiUpryooBY8MqB6t1ERwMj9GiaCP4p9pGx9MBFnum2PVbGwgQcF",
  "key17": "671NPFt9a1ADvTUUgXEGzoSHyFmHMUcvDVqbernjTg3EXSqNyh1xDdMhD88ji7YGA9TDP9vDWUaotfngiUaeCSJi",
  "key18": "4jcQbMUvQB7To8oyTd7JGdnDdMAmRTxTX2V7rWGH4CMvwyqXGAqqmq9XnrtTqmdmNNiH6nAjtyHNEa6mCBFWjG2W",
  "key19": "2Y3hwVg7UEZy6bVJweCc7c9RwA4KHhogBBmqLASFgdnQZvfJwRPRAzHYccaWbjH2Cjg1yuJXDKpFPwfgzLSLxEM6",
  "key20": "2t42cTvor5xX7wGrbTH9Lj1ccUTY5E5vHaZYGCg6ML7U7gTUjcxTAhRBvzVC8Y5nf8ndafv3YLbtAw9cTshu1c81",
  "key21": "56yAhJb3yTF52B2JsznFYHgYMHRX2Q6wRBRiXoCCXPGaDeuYa3AsEp2Fiifh2tZXyoX1Q4DUynFR8GKEFbkhu6At",
  "key22": "65dAmZD6pSJpfD5KvKYG1LY1EZt95Sr9agUbSMrRV2U3NwBD85PPkK17E4oavSWPsU6sTZn3x5VLCv4osp1kQkpU",
  "key23": "W6PvCq7DHZCR6u837tRjmpaP8UbkADzSepZiCCxvph3DkDKLQGAuRWRm6HRJveZJwzW7HvSCvkCY5Ukv6hS57Eu",
  "key24": "5xvtaDoSzg5qoumxknDuqW7D7oMqw7fYzx26HpKEMRrsoawxyTxeyWLfn8tqtQZnhfYtyBuRVQkiR1bM3NR9ntmZ",
  "key25": "2RpGwiE1sw7njjqoKbPdyfvFxbYm7ZYR9bWYM6RXyts1eCgQdHkUnvYqVFRqXoqDSxfVK7eBzehEiq5fNToG4fG2",
  "key26": "2GFQGrUNbSeYq7FHZxQGpaRJLQmzZFjhzTD2Ua8NfqZfEg8Q7VpgVoV75N5ppbdzB2QHCCJ8ruFpkeM9LqA9Txdn",
  "key27": "4vL64wGAK1LNqG6kqesh6f6L8WZLHKahNjr252xeBKwDaujMEpZaxz5isSXNBRVgzrk76RP19X2AtnwSiyFNJ9xD",
  "key28": "3fcbogRzpYiodirC8YZLdTD2LhM8aJgAx8FKs9d3e9kydegD3YRKzch6NBkdvoz7SBSMWkVGB4tweYJMkQVoGaQX",
  "key29": "3ULB4RFpUTYmNBysvWpxR45uiMVksgDsjjRYNXNeqromSF8eZjovewzxrp8pkXUQUDdn38Gm82WwvcTsdXYv7ywV",
  "key30": "21jW3ahEM9AzwtimAVyv8KZBVLoXX2F3EFfd5kpmhTLtqTASFDUjA8fYvnCHTcNodVW2t5gtJfZ2ucSZXnzpQrV6",
  "key31": "4LkP8wQBtg9wvJe5MkDsJ1zvCNuYXuysiq1A2VLsNGfj3zhpN34kMLC3iTYcRjCQYAZnX8pkhJJQPz1GNqugnbBy",
  "key32": "upPwYZSAH6zmiey7PkiD411aTgtCJCvxUXz7ffxLj6tvLu7FJnHgtbijkQ7hibL8rhCqi74hpw1uDDPr22fWou2",
  "key33": "pra9co7mmHa63JVAEYxwnqQXM3wst36swrnFKkZ8dLKa89cHyiY8vW4ndsnz9EJTxppNqfdw9BcH1Nry8eqsiMd",
  "key34": "4QceYTnMkUKFNtU5WpszggR2pBwVTv4zUqF1B1Zc9TUCLePeKG2egAhoVd1wjycKbbCQPxGkLBN5JjQTQkrcBLeL",
  "key35": "2BZraGmTny95xtYEaKqX3U913qMDiT6rht3dVLDz44F7hHqXnLeaMuK7C9CaRVwxsyDZnH8HzSr4z1En4tyw5M26",
  "key36": "41C8PHL8c5Zjhq7w5YKwKuD1qxw7shLpKbcg67rDzptSy7cEM7ZHdUP7fuaz3QEmWRDdPVGUdATkF7J3ZrGi3SZc",
  "key37": "5ZrFpggzHfxoCxSLcdJ3oi3WhFRYpocj9x2Dwhe47B27Be1fBvGYcFyYchRH33Zh7NboDSusAVxLF6u6SjGDTHD9",
  "key38": "4f2Gfyv5MTFcyQAaGKfaZmZR9dNsnd5PHqP5oZrGW2z6r5soLDyTqzBGTor5qJvizKnBD5MwJMQ1MaQVLkybQZn3",
  "key39": "4ZYpZGDfDcsVsNqPVxj8nbcp7nqSDRhoQy7efKD6tZzwTKhHE1ndRATEv7wtfQqxESTLdcfhC4BP6EJ17NbFUWFy",
  "key40": "zo3gkwmGUWPb88DXgGcuuCfSZRJHYsrBu6FUt9MTk5E8MbFPwPxgjFTKhLAsyeYMVtABfyetN12f8VpBGyYGwqP",
  "key41": "42L1oUFv5ucHUwVfEaM3wm5BVx4fYnfHbeRVWybS9vVzv6NvFsCdmgXjyDVDtgnQ88dyqKokXNevy1fxFDEd35cL",
  "key42": "4zzmvHzmYLXgbaFQAARfTPkCJmtgG2gER1W4fJLMSoLdoAaSmjA9toKPcgUf91zf6SVE1R8YpjQuaQsnaYiojGDE",
  "key43": "3dzxLb2GXvTeAALxr9iYP4GxJ3RiLRBMEXqaaLfS7razm8cWyPN4s8ffqYcBDNPuWUPQJ5dPjquzdASU7UmpCFf6",
  "key44": "3vmEDiRLd3EwnFhVQZgXkQo73gu8o1S7EZov8w4TzdyzaUKMNfHuinfZdFirwYDT3wFXXQWxzCraCXE9HnHdeQTN",
  "key45": "3LBwyHJBToveBCkfV8SRy8aMV6mVKhs5B4h52vPsKWRqVimHBMDj7xMXn4jBr5JbXY8AJZkD5w4rJgzjPJh7kFY1",
  "key46": "5jcS11bfKpsuu9geAbSHeTXWWVwu1dm6poXfjseKCcaTdg276Auiu7FjGmgUvP8wygjHz5sXDiasmJjrFGC1Xqxj"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
