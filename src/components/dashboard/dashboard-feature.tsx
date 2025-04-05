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
    "3YsAs7XvEjTveRLNVP8QNstumge7e9WxaJqNn7X6kxSahddiYj7QYopPEyNUSuYV4bXEd35rmUUuuPW77B5nrZC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pd9Z2TK1uY8JGVQ7yKvpDpPg83TMFQGZ89SRauFoJ87Rx98VcV1rPL3UtALsFujvDMNopf4iWLPC7NLcB2cXAq4",
  "key1": "2aZE9GpUF4etB19hSDY8PdvfQn3LCQTmSnX5k1DvwZC89QsVfs7xPjKAHVvyxidvvARJuV5nE1Tv9soaPmM7FweT",
  "key2": "3bAjYF6kQhB3gcxyW5faR7Nt5aE62BKQAhaos9yWW4N2dBGpPmdEuW3FW6G2YWuJeVBGRDJuv7vdYtvdVGVAb2hU",
  "key3": "38AtVcK2uyGK6u3DKY5idJ7H1CdD7TQB4sswJ3emfALciDjWsQPMe2seDMFpuXUVeu2DpSyb2hMV7PVtWDKdAYh8",
  "key4": "m4h7ebkbjPrEzjVmCccwrRGFr2vbFLCVVu9DLJK4SC3ANun9E8q3QpYwVZnynBuB1Y7h3MKpYZ7awLvNcjekMcd",
  "key5": "5bXbjFwoDiSpjGvsDJmuJ5PtS9xwWu8g4xaxixhcW5t5UVeGd41y6jQs7EC5h9vivcZCKi4ww2QojMpn27rugDrc",
  "key6": "3yHZJpJwtzavB5BV6jUa8RT7SaFkjinni2a3ipJbspyb5Q8wHQSPUcyMrLGG6S87co1oaa3PPV6N34gURFEuKiWH",
  "key7": "1d3qMqYz5KrwmzdJkd8NjXa9qB7nTy1NJgGfVcJhQuxz6MWVfXjtgsdAwH2DaVqzX95EwQJdTFcNLBPHJs8XVdA",
  "key8": "4nLM1H1Yhq8bxjYf1jtTzywbLUvi6R6mdrDtSNmTjNwL2yudRbZxgTr8tEjC1ErLme62ag2bv4xZDuPgUb4FunRx",
  "key9": "5hWJe5eGU58xuLeuyYcH6wQpHYRZWGHRavR4eZWRXmTc5sj2M7sFcNm4gZpZiLofSp5UK34LKUSw9WPjd6QXx1Kr",
  "key10": "4DEtGkh2N7Y35tF654MMW1RkMpBhHSwik8Fvj6h1c7YsUxkPvg2twcXDBxWXh6mo5iiKLEb4j84kTpxkyTtC3AyN",
  "key11": "zx66z5qbE1rigycZsA4V8q3xXyiiwXpc5uPFa3YyA7SdNNz7Z78MRwSoNyErLykCBUTF8zNHqW2nsh4xZzbrXSx",
  "key12": "2TzczfBwo4A7saY3QhYMbkPYHS4YmHkRGkZ2iDihj28omDse2MKotDg6TGLocfPCmV833qxYnL1mQYeFX96uqzQG",
  "key13": "ge4Gn2pcZyE69oY78xD8fQQeg4aDjrn11tnEP2BCciVHDECoSc8DuTrrB7jyT6gsj4qBqQkjKcbxYKJownSRg9f",
  "key14": "BUqdBkUNbcsJUKKw7dwRXzbJGwVtiQMs6LqbKjpE2u8obGVU9vYKDNzXSHmyab2nnrZmyPdNoWMKfuiR1LcmbaQ",
  "key15": "iwCg4YnSAUpyBpp1hFyg5XrTmoJ1KH6tv9LuEwC7K4KPcsWpXsYxBP6J8CiMxH6qQZcKBfpsQd4riGzLCt6HDL2",
  "key16": "4qez8BszkEPcqi8TWjeUpVv3pCqMky1F1oUZ546sbzQRCoqVzKpx18qFFf4j3R7jEtphUi5FqCDv9cnYHiTVTXF2",
  "key17": "dg1MzdsQNLbJ2q4JuUMHyESeEh8vUQVi3n6CrN3uBZEHhLnkDNkvWF79UpihDgEpspdoF13pjte3RxzMcFtASmd",
  "key18": "2o2jrvvUeUJRnionb2ov8st52QmMtoqQ9fPbHUQWh4oTiytuyNjQ9w5csZkTL3ZFwQVcj9mNUN8Bk3wNHxWT33Af",
  "key19": "3UPGF79GjajEQ2nbBJq5xB3aQxhTbL63MMxQn7iqjGKPrBYqtFEx4tGdZrirR5vJXKn71FyP1r39WFxU85AdsaM1",
  "key20": "kDJuy2t3FwQEJduidBgp8a799xP6hpeiYk69RaGXY2AhT9JZj6p4X7nBprUhNsmTXKZ3gPdmwQ1Lc87KRJ9EabQ",
  "key21": "3EWSo3PUAHxjTzXfqJ7ZstgTUBB6iSGHUTWGjCEH9sGHUSDpPDKU3hRs5CEVftETebxYaQjd7zfNDWEubjHbQ7tC",
  "key22": "ktMoh8GznsFCKTfGW3a2JoXSvkY1PsMJc5iLCpYeo3cNkom9kNKcFFruTAPDnXpiYYakmn2JXv5EkSEbRPeFjR8",
  "key23": "2XWW7WCENrCZViX2EP2ymojEm5FGpD7LLfuDu6As5FGtpy4mWXJaFpsX3DoucPxdtVNPV6NAajpmq29TPUD8Eb4g",
  "key24": "4o6nigrVUWG2K3WRz7xWc5x79t1FtzhJdTnj6qNFWVFZeEZYid6bfqHLMxq7qioMSVZDfXpyp16cD2ysQeHoPgZw",
  "key25": "2dkzqPSFJ6nQkNHfeMsWnnh5Nbzk73umKtyvqXGt29RLjWpenBSdPthT6kjE6Ubrb2TXER87n8iySyQn2HFgwPCA",
  "key26": "2Vk8cgtbgqihxX6gfBsssBiMtzsc69U1EdF2LJwwERp9qCQHRLYFbAAwrcK2huTffSioNC7pZXSsCGLcMnjxXuvf",
  "key27": "66yUe31QBu45RnC2bFoudSfGisBnZxhhgtkzqngW6kBL3VKwyVS9oBob7wji8ARrg9yF2gx1GRN4dUMKnRe2fAEp",
  "key28": "5Uk5USEvVYrS3UaGZg9BjUq3bqW1FFRzGELm4mx5dQZxs3XcT2jJ9JcaPMUgrSaqcAHFBpT8W2g3rBMmT8HUNPkW",
  "key29": "3z9Sjc1BbWudpE9cqmi1kXbhPeCkUkm4bCDBBrEgf8mdBzJMT5DzFFwEBvH4zJKD6KiGxyV413BPiFmMJRhdbz2M",
  "key30": "2z5sA2ZajxA9A3rGjCjfD5QFpYRWMM6P7KsMYjakASm5nDt2YZdH9kcE834BEUHp5WXBrFXo79zdQrSQhnqn94zk",
  "key31": "5u67SUsKLLdgeNa4E4dQE5CgwatZsrMzh41T4DU2rKMKnC8iM8Nc44Nq4J8CEiGwR4XNjiRH5bjidHEaUV6Zzk1c",
  "key32": "eD9xSse7YmSD8J8HciHcfMVcDiQ11QcptfuGSd5hxkHvzJtNt5RGhCx6A6dsty7YyC2jV7zr52h15stidoJJFaK"
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
