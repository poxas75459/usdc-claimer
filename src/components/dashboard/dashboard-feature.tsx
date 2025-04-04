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
    "escz71qP5pUECcCCgLmJJjdHdrmGPmBzZV8gYD3h6KUo35szpFpHBfu5YfxQrVgnQwbqESbuu5zSzJ4NxLCwQ5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zqkKTdoQ3tvuqQN1AExiCSPMN4WRLBk3WEpYNWi752Zwu9GwBiha1DTUTxdB14bQfcabL453qACek71j34B6mUL",
  "key1": "5tG5HZxE4nTxoPhZQEUnuiMaubEPp1aGWvysmsTTc8Vexb544huMJ97wPaG6MNdHQvPWmUx4zJcw6XfYxMWF3245",
  "key2": "3ksA28iCiwAQpbgcNSTFM8TGM6RP4zb6BPG9Z6FdSQAqL8J86Z2xZ6cbbpzozN4obCFrYktWgK33KPXqtAAwWbM3",
  "key3": "5o5eBZsuG1nVZFeBgkrFPt8uS2bBQ2BfAE7r7NUpRy8xwrwasr4wM4BwzeEaPM5CJQyGdjXBcBwz3351v5uwqug4",
  "key4": "49bWgFJY2ppzV4rpmzSTCe5g9D4dbCH5paXQzQcasBJPNTY8iET7R9bco8zJagVNc9Zsb2o13YReWNoMoUDAs2xS",
  "key5": "49Y5g9Awbi6rCBt1HuuVb4noSb18H2VMAsKTwAhqA41U6bj5qhgti9KtoeCFAQy33nf4R2iLJEzmnuRGgyGGujL7",
  "key6": "3AZf2BHjhUspRRwYqst7M39tAmj5pT8Q6bZ6Bf1QnRrhjDhwUeDkMQxHs7DqiDvJDc4tRpJ2Uxt5NzCPDNzj4wQt",
  "key7": "3pseLiXTgY1P8Y9KWNeh81b6Q4yXKQQR1pafKmG2UoREuy9RGKUpUD7b3TmPyVVjxXLtZLcPvZVDfZpEthN9DyvA",
  "key8": "2jvrUVhaGTxsZ7DBt7vVLnE8Z73ZTTujw5kmJNXZyk7ULPiGjcQBU79z5DUQPkNTkWHtCAyQu5gSLnQ3bcgWYXQs",
  "key9": "4ZgurhWjZzMpWpR59h6wWhVsmp3QsEHiXD1b5iBZ9CtGDFLfPJUvLfw2dZ2WjJqC7pZ8U9cJ3YL6yxpd8vHkhK4p",
  "key10": "311vus75zcc2i7G9duoCYSev2PnqY3fBFNjjHnKNe8PK7vTuHFT9YU9XZZrGd8ZX6NDy7t8ajPCcCzWQWxK48Dmh",
  "key11": "4JiiuUoqwiMG9fUHiUbvs9wyRgYHVSibjUfMMT4xQi138Kb5VhvK7yHRkNAS9e51Tqy5yDQq49r8YNA6njCKU1it",
  "key12": "QEdU9KeAChWPEXFjexQdpK2yUkiUyKtCuZnXMPV8eW8aRLxs5beABdTNNVLuppxfGj6PgZjqaRuRftL9mmWaxjq",
  "key13": "5Wh5EVQvbyRUEgvJqfvccjSgg8qTZyugE89psaeGpu85Lj4MKynS8HftUP2dLybSxPATtGQ4GSYK1n18EdjF19za",
  "key14": "5fxRMteHJs7VLnnt8vXzfh8YeYvKNt6PXmoBEaEKVNnyDAbGKCvTc3PSPDs8nP67jZpDA2xtUQdHaALgT7NUSyt3",
  "key15": "5v59VeuqzuPSJSNhLKpAwLppZMQ3LiXxU3jv7wzRdsF8vBK42yFJGyM663mAzvujEAHTYw8vrzXEePmNdJF5z8UV",
  "key16": "3E8vUrzd4Y7rpxaj667ebMPNThyqThGgvJMJac29pi4nBWCa2fCNcAig2L5Y27MqEY5JicVr8e4p8MDx6PvYjd7P",
  "key17": "7PL4SW7doMzvbAge7NM5E7CATbYAbtDh2Yvfb6i4LiXLWjqJe9y29RBi6ngzSCjU8WP2mauRcRh2zWWT8nyks6n",
  "key18": "34DaoqSkR27CP6HYuWoSntEgTACicKBfMLjzfWnvU763RNs8UV3eNgR7c3NNVXB2MDHCnvFjvnM1hMyAb8RNV7j3",
  "key19": "3t4RkYUGete1EA6JRBsEBFgm99CgPeNrDCobCaJ5CJM2uuMm4vZXQhhJStuyGttmkVtM2eCuGmc47JutwN14Qx82",
  "key20": "5mdzUcvvfn58MobARMeSGwNChbsvEgZZEwq9hpnB4hHyDESk2zjJSZgeiJVPPEPH79RnCVpxa8ZGJFxCAhJNUddi",
  "key21": "4TrZLvgX35FzZhcK8EjSSQsVuxoesBezWS4VtHAmKFdnp68fZ8H1HowWL8FDrQgxyApaAwY4rsyJcMZvTLzqLuN",
  "key22": "bfFbDT5QjtzKACugDhm4yNLBgKE458PSX1hcFZe4NUHahkCJF6vJasKjNrzaKBJJJVKXfmja1TMzNfAypBbBptB",
  "key23": "5P1mfxkgAYmji8NeucAf4Yh6tR67LT8W4LyEohgYkVRCZDes32eMebcpzc9xQn3UPGbLSmTJ9icsH5ApfanrTxp1",
  "key24": "3SZUpw3orzjjakMW25pCZcPr2xcqkmP8tHKpFM1CPmDFCbtfFXUMLmYG7Y68DizYZrHAjqSsUp9GgRreY3tEQK94",
  "key25": "2NYGXkX9agJssvRW9ZGuwVxYNeHqxGscteHN3FRHqHg43qG7nQTbAkuwvbMxGN95TmC1vuLgJfQu33UzppeBi5Ut",
  "key26": "3ij6XJHNE4RqmBvUyJHnq8tLHTgTEAgXQqtESP6oTgNuiE4Qr2HAHVmyc9254xF7py3ZQnCSVX3sJHLwiiAhUBBD",
  "key27": "2rbQyK3RtqwFsc2BtBMEwwRuRqqVYgv4xVVSfBZzsZuVuw6vcwXfRMFjotzSu6rtMMPZsranmZmgxrpSiUtPd7mb",
  "key28": "37NLsQ8Zime9HjFNwuMmue2mJnfpCuEzPkEyMPSqtkZVWWx4i4DskuA8f62BjVbvQjcGUnWJevVD7ojXZwVqgpk2",
  "key29": "pisE4J14RqJKtG259pKVYPykydedMYXc6MmZyYmsz574YaJwBt1u9mH6ytECfrRyGN17rdgcMBynbP1iL8NwYxR",
  "key30": "JhuKvgdYAd2z4umF2QibDotGetBEqvmWE4jz2jSsvN2s7WR6dAPkc9epENdEUkp6663APv7uvWjXCnNTijd1nK3",
  "key31": "wjmXa6VvsA3rkFReN2abWbQhjNPz5b51QvqbDqs9Z9VfTUnbkdzFVLGy1X3YSUESCrhS8J2mY88RT4GFzWjETvz",
  "key32": "2ukiVAZZPBdqwmPYqxtvknkkC4WzLXMhD7WCPRUpEtE9GFoVQoboYnPiju9zRm4QLZXrZeVeDntqsZKVAtXKSLef",
  "key33": "2AwHpToC31ngc1zUuusnCKrLqEZcxzQCrD4SQ7Us6pBm8SJdAfM5xaBQ23QSpfadsWLghM3M4uR5SnVgaDeYPfPZ",
  "key34": "2TgBpcxSt5XfBnA77m7FMcwJCAj1UnJKvWnCfKY9f7vTgVM6m9dYQzTpghJdEhvmNZZsYETXzVM6QZCbVuLzXp4S",
  "key35": "4PTc5MB9ZYE7kn8yqeG8cCvKLhzf9DVvmAKwrhuQtjppGykBvhcyZDUuHLBDvBy3DdQkTHmDwtCA5h8Fxa3sUgf2",
  "key36": "5R7tty16XfZYuwYcUbkRdwG3k5ScPNXUWPLSaJZ2sSpGLTTxZZibSDfoN7mbT4cmfBToAw4UpsTWuPFQhmBNMoyp"
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
