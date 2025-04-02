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
    "4gYKLxSrmtpBcxrsswsGVC9UYwqTkuduHB6eAUyZ9aKmuakK4f3MENTS3x2z1kDRpDCEwFKgVwp2YZ1DvJSMyihD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aUXYB3pHhQFbTgwFCshgT9BunmFQFPWpaN6sHPtd5y8RPiFogw2KhjFGPFLCVSWnikVFhyqnpRCG9nDBWefjJZw",
  "key1": "4Sec3WLcqE1e9Uadj8r3Z83Pw4G3pU7CWT5WMatyFhPKvphoBk2mJpaQVxucKk9Ay9r6VCvx1ouWXdtFuZsYdjKU",
  "key2": "5Mb7puqoaDn8EgiXKEkKusqoToBjBoxxyYG417r8YnaKKqZxBMT8VkLLHDVPSmG2cBrYX3AN4i4JJ39tcr3kK3y3",
  "key3": "3Tgp34PKNJt3Gz1Ks72v5TRNPopb6vEsVBUxBQmXWEpvB4CjewwJg1XW2tuPyNjUJzDmzpFbmqaGzUJ7RWdzWvMg",
  "key4": "3qBHoJvsPVyN6eikZSSZ8S6oCBh8qxqQjpNEjRbnbtLgtZWn63ynsETZFiGJH5NBYs3LTNm2RkNepcVCRSD87tM4",
  "key5": "4qDqUFuopRdXBNAh9kAnY2Lf6UwmzqHkpsWRbxWHnjHeVG4utgFzxcA88nPpEA6wtW88v6GyJbFWUNuxWXvKTZ8s",
  "key6": "3YbtQSmL12eYb8t5heoSAtFasM9dpieSznunVXBfyQ8YrsbFHYgzNAC6xGVi8sr2hnYMY18XLop23TJvKmZVzDLt",
  "key7": "4jveFjrAJRCjXLu5YbqL8YD3FhiLCRFuAZ8EdkyEgJRuQDsrHJdiMzTggZxXCZWqgL7tYMxa8xsnUyjLvdKDXjJJ",
  "key8": "2xEnck939QsCeX2j9UQhwpsPTJcxyvG27S4r6RQAG82PgnSBrCh9Lcc1qepPsUEcu9mdmxnUC1wnBgkhyxtHpxXG",
  "key9": "5PRq8m97971wxUw7Za1c7U8i1MeHKNJHcwcpatLS3v5JvW4JqGXzkX2nTPYXKYabmaXfiSLozUPqasH661bt7ZrC",
  "key10": "VgvJ6UKwScsQiwPYgMggyzAyC1WTpoj8eVQMAidhuk4Zp8bCAMbCPPy5iPizhLpoBvSTSWE2AEGhNGHqou2Ao3Q",
  "key11": "2SJtTBQev756hTjCJvYM265EyZLVyxb8XqZcsRiq9DeQ9jmDyZc1k8dUfF7qzZJCN2GWgneCCiwAZ1Px63zcontM",
  "key12": "5ASzpJ1ASzRZ2KUmbTQUXV4gfCG7VN4jAEKEFfPVXxzNjNAeHpbQMCiJ4rZfrZ4L4pJ5NBLS177w7LDhbh8zeaia",
  "key13": "pHBeKrvHGGG8Ej77VXgognUyvY62Wc7s9bJGM47qgYYRnemq8bnRX3aHbJiNw7ctQEwNKdayLisho5BBjb1rsm8",
  "key14": "3krX22pEKX1MNHJgwa6G3NWxci1uWuYinGHNG3A2CfJNBovZpQFF7QjaPuNPTGtJ5y47SrNSCLsLQhdVqUptmFiA",
  "key15": "53znP4epmmJTu7hPMjcPe2f1wwzMprSnFjXN84sxqo3bXcPQUb2spUtVoHkoJ2mcTxNBRLZF2tfY3Hnutytop4F7",
  "key16": "5on9UkiuHqHcpTbcdonTi53gL98LfooQL7UPTsp9kwvA1LR4zHk7ZuBWALi1FPD5RdsihddQYotbrTMjZLDnqou6",
  "key17": "54PfxkZAmFDNDHE5uixZp2Xtaa7fv1fhgaE8pRbNPY79jkN2JZJwbrHTiUzuQDbrMkTJQcmwpCkz4K9Gje2ZygFP",
  "key18": "4rkMBicD6vrnin767uhaJm21x6jD76UKx5Z8LZyjg4kbXhQjqMY9GDGjPpcbH9jZoEBeroaU6EYtmLC6kwubFALU",
  "key19": "2s1rUW7z6xdp3Ec7P83Bbj7DpviwEvTkw3MHeeT2uTM4NXgtzreps7AadxK2X6pdo2tdhPEysKKB11vDZHDrshS2",
  "key20": "24VBwTGqxJs7aPh7cUWSdshmwvrJLv7FARTJvBzCgoH9ALeRJNFskYzG4EG7sbTQDoPXG6Ve4Cbyg5ZRXHJKWypZ",
  "key21": "3LvVJhM7aJBwbdQaQSyn4JhZkRuJ6ddee7XJtNqcbsVarF1joJ3S37SGBCLDACtKbguNRSUKUCz8Ckv1tdztiFKE",
  "key22": "3etMpQgBSttVegBG7wuvzMVNwHZqjFuspv5S5yQGHBvChUNdbWz9FfeGgSupwj3J7M9bi5KudeWBwA511XtKgB9t",
  "key23": "3j1dX3EBUm94jETmL6ft5ZXdFss1WdZYtahNp97w5LkYdd244okUeBRaa6sntVhRAoVKMBq3gSYWWT6jcot35L2",
  "key24": "3yYuTHLoCiUJvzRbadC9Z6jtteF4zySADVBoimzi53EUpNHc8nNYqq7giDu1dFt5PLr6Xu92BE1h5qbEL8uzh2ou",
  "key25": "5rrzc1AFc2CNTSCpHW9i1zo1Cbdnatn5yZPkAiNiHwEmmYxDfJKA7b6Gc6suJog72BuraiEq3HLA9fHgbhUAdQE3",
  "key26": "56xVbfXbLsRfBrjuWwU4WMbaNtKXPbpjZgoEEf2wiiT1gfoMJxUWD4oVohpLtC5ZJ5XpvHSTexZNLJAmfHerCYb3",
  "key27": "5hMU6fwGdr4RCwXrWLpo6NPJxyATDZAS9WB6VTg2htDzxRiw6VfNSsjbX29SucZTZwYsMaCcoJHHk5yACAypY1N7",
  "key28": "3Ceiw8E2t1HMdfPJvuwQz9aZ1Rr61fYqPmE8Ka9Ty2tLcStaWeNyMNCLV1KHY9mAvLhTvy64jgsZkztFYB1awTNy",
  "key29": "mFzxHXqBKmpStXXjQbY4KJJMGfgGpgSmYAxvZXnNnTS2BqBTVvefM855YLaY14JH8Hf4RtoT89pFBU6k2RXoH9a",
  "key30": "VG1qnwP9hYDvgMMBymTzRGC4EZUvJJMwYyAM2KRkHcxXDJaJUypJvR44CyHjmQkQ9U3thbXG9ZBNtp4i7QE4xtW",
  "key31": "5nUw2uUSwqcB9KMp4zq3tjTwvZ5cxAhj6omuhSL7K4TCZK27RPwq3woDVENq1aDHa53TJgpbbvbR34WFQShGEgdd",
  "key32": "4iZAR7fifcV2wkgVTBGjTQtE4p6omKpp98d7ktHZvyBxYT2WU2UQYmPwKSLNr9YV9nJ6hGbd5UfJgDPd6fefhAAX",
  "key33": "vvE69kJ61cFHq7HgicjBxVJbCPZf3sAN2CruScjnqNva8LMU3P3Cg2Hmvjvoiur593JxnGMnVkQr1FG8YuEFCyV"
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
