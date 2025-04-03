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
    "2fmn3r8HmLJMpMvZVXcyuFouyj6ByASJpWdgUkStLcDfmpV2JqL4snywgHaTM1FjxeYTs3t6mE142RfzxidGxZq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cDRHwDdANj9A2rHuY8NGYf4Qz8xwvXk6c5x2vDKjEJCZNqeaqtf2sreK4r3gCid8G2j3mDgzdUfc3c5YPmeCz1b",
  "key1": "Kj29vHTfedoaxizYHLejb2vKrktzfQgjtKtzz3sHXau6x7mR4PHyXhzqoEkSAdGcDAjjZt4iSAqewggWsBnFG7w",
  "key2": "57gxt6tfb9cBmWRCJxkzfnYBhSiMDbEErsZu52mL6xobDfT89z5FfNWdi4HccgugSKS2jDwU1qTR6MYdYqmYtMvf",
  "key3": "2MpSqHVBpHowgqwDS7RKwNDKdFQ3nCWx7Rh6A1pMkhxTnc5ExQxC52goNJ5vFc3oSUzDgmrMJ6kgDmXyEPM5FGSA",
  "key4": "3vmF15svGqerTJUH7KC3sNuC3i8Bg1rFwf3pemvCTqFufC8Cr68gZ98qX474bQ69uUL3nmFDyhqfEeTLfdry1kC",
  "key5": "2UVXcZqh83rUR4SS6oTVzpRB1pjbA3pyXu6XfJYYhhjgq3H5oeGWTsbcxhqfDWVZy2ZvXnfTW5ntLD27ejzeQ3A9",
  "key6": "5wLJuLHBdMEMSg29Xtgyj9b4eVcVXJrEGStbseeuYjATgnmAxccHHsEYpBqBK3XVtCVpPvLdZrvXABX9VosZrCPW",
  "key7": "2DyoBKoRiYANCqzAAYPuDUAYeJrdtwtY4BWXXpXMKSmzdufdeqDtEDBvWaWnN97HGwpTGeatTcyr3nzFyjiC8VG8",
  "key8": "2ptfQPiPYvBCFkYGn8P9NywvxrmJbHXVpEFsatVhgCgoURpzrHXd5eVKoxvzfkN9VNGTPsxReMkcP2pja8Pv6gGN",
  "key9": "Fckkv88HYDVJPCsapEMj7vdVNV9XcZQTYm1TcAECt4qCjVZGZC1kDhS1AGX61Ru6gnZhproPBsN5RUrGZvqxJn4",
  "key10": "29Zr86E2zngyu5hkiKBQnzBajZzV3KP4QvJwzrHzhQt2Qm3NeXwpwB442Cd1TFaLaphJCGUXsmKmLZnWLoGQ7ErS",
  "key11": "5NCwrpgVqx3aNy3kUnqpcQhoozWJwncBuGpwBmYu6GmRoULXpSgXUCp7zFxEvzFBduDZ2XY5aaYYvJDP5Qm48zK",
  "key12": "5DFtBjHXeNU4MUkD47hkFtFYNCN8PKTpZTWJ38g7AwKHKZp88etiZN8Ze6WShu7kkPxyqTgoDncX8Cj66ueLciJe",
  "key13": "3B9MhLowW1YR1A7meQUmDKYQrEwGZEUoxQomJ3igu9GwfYRskxVn3W73qfdZP3MMG14QY3oMsD8aM9UPiZmF4hwx",
  "key14": "2MQdcB67fXHgUZ6M677yjE98KFyF1YqbPU4b3NZHpJ1S5LxSJFtWnprZTosZLcBdppNZtAzx9M9Kc6BMKbL8B7rM",
  "key15": "2Gg3UewRXE3nqjoiQqkeqagF52271BwUGj7ApN88SJK8sqa5q5vCMffJWE4ehHS9K3wAGB9UgbZ8cfEADPbSWFBu",
  "key16": "3J6Ksskhh3fAcXiVH8BeLhWjC5gNRVvSKzUPvWAv5cFGhBvvVrA1iJpQrSW614nbZVT5h88YAZKpYNVoFN94qeL",
  "key17": "32r2jGbKEUhSXSkriET82YbKQDi6tar8zxSKNVp87DujtHW4QjLTQk33XbHGebJPArdr8ZhZCZu26U3StmacbRYu",
  "key18": "4okXVvA6LnzdxtmdBmxLXb6sBxAVB6o2dDanbxZN7Akdf6VCKCFC4nqPP3FGKtxuKAFJCAX1EJAmKDFjrsaq4J15",
  "key19": "35WL2tNdb4EkgRTvkEzHeW8NzdRDuhahNiGasC1No286xfQUZD6QsaQGYUYsFSZ88oNikmpmfcfkircdbEkBcoE9",
  "key20": "2CkzJWDwjbT5E1yyXd149KZyPKWSLDCyFYP2XyB6U1u9eVwxxzoGCBhzVKXjLrShGZUzepkXh8b2vAAC92V6ijoZ",
  "key21": "49oAPojHs5dKmv2h4tDJYWsa5qxbE1a621ujndhn7svmKYSPkYt3ZyBA5F1pw63ZvSCbmYSBd7VZNViC1GjFrJPg",
  "key22": "52DwYTgcUDtadi5QAcZUW8eqHwhfRD9YvpWW7a1yBcn35DEc32xxLHRNTgkeVszztutY1kfpzh7QUxouCXVDZx4t",
  "key23": "5QwgKqY31eVjqEL5CKrhxqod2WtYtKq1Ec1T4hH4aNQrgd9R8EiLY4NCNNo1Fj273GxqXRA2DXKJqMXiLCtkyzr9",
  "key24": "nF312rjKEvYa6WjFngGEUhPUn4sLJRdUVLzF7NV6CSNmKr7gcaRmpbNrpzboLRBvXNkrYDDTam26cL3PuB1KCZD",
  "key25": "Mq4EaKxdzxUtyVyGot7rLwAPyW33BynvSjxPQVtZWBo7fHhUkzY3mpw5gQU55brd5MYqNSQpZNtueP2U4M8cEpy",
  "key26": "5CW2KJVPvxWLi6yUhrqYNuqZWDhzPPoyNai4ZmPC23vE2Fpew63WTzqUBvXD3sgEHcaMKXgbn7S9v6nAKcGT2RV9",
  "key27": "zvFq6XbMTFgzDReqgCo1m8ovYJQpvFvDgMr4yAMextd8t4KxQu1kqmwAt2RWYxt8WTuZsLKN31eBS7gvS7VpBns",
  "key28": "59GSq71x68QZMqEZwHw7aB8DUCsPebyqBh66Yb4Qrc2CCXutZqGuKUNUxSa4zhbcBqC2BAFBq8v9C5DiYMEtHetF",
  "key29": "G3jjijFf8VugfC1x18M7zT77SiHd5GfjvVWL6AofVBMThrFbqsD2wKkCRRv2PxwQ1LsHChn3zZ9UJrt6Hw5asMk",
  "key30": "3EMUi4JNjujYh8rXudkXAUB1s9fU2NTbUk8d9HJaxMiwFoi9qdikrFQ3F2D1YWgJqS5WxZSvadbeWKH4vWmJGGL9",
  "key31": "2mg8eEQdh8odYkrGdBQQoS75PysPJ7mrruyYq92svJoDQnMBwYyDAjoiybKNc3JS4KonmAqcrupMF4SN9ZyX1ScH",
  "key32": "3qbKsRkrmXMGd8FhWTfntjkhdukxbLdeAe3YysM81SXkhzkpyvSdVDejTzWq1rXEYHDiaHsVsTHDRMmcXDb3cHXW",
  "key33": "4oUtfKnTYWpRC7RvsVKd83K4WcS8MzhNiQDFRr2CAzUTUELDxKAUdtCbM6KDxq5JETxxnUHZ49EVZTy8emeRcbRv",
  "key34": "3j1QdLDhFnCghSHs1oyHZzU5E1y8u1TYEPko8dZGJRd3rc3ChKFeUjLY5hDmxm9LiqUgQNxYbgNngfVAESS3baKu",
  "key35": "5sSbCTEX2uCAGzLkABRPAGLh7JEwbXxi6L1RyDSvgXbPMLB81HvfYEFBsxkTXJFEqxxSiEZAtZtV7qmvM555EWoD"
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
