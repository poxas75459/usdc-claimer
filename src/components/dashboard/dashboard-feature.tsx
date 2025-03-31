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
    "4ydnJZqxzASNfar6UL1bKNmTVTMpKBQSWQrGijicTA9ZRBbBgPAuc2amVE4teocwwDZuk6j8huM4Nfp4rtTtG6Vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yJQp3ioop4tFq3Wb9T8V2BgGkNsGKDBt4GUMCjgcBxYeW2AaCBtPMjbmuHqC2LHDzb4aTCB4uyBDhQhsKgw97qk",
  "key1": "46eGRYNVdjuV89b1ULGH3xhGociAfEyBEKTyx4cDqPYbv6odSkmKgKPpce2DYqRVAyJnxhXeUnHBSocQWiAVvzT2",
  "key2": "2Fd4LRGc24K4bMcSzkazMm1SPsJm22GSpnqpT7aDgqmnUpEMGTj5vNdYVdvUTiGr7U6icf5vT4hQ9friF3FfgGTx",
  "key3": "4oFscQHcznN3dFT9NVyftq2Mx6tschjVzcHe7L3wMcj39WGUB6mZborQ1A5GsK2tzJ4Kc3nYko1GFt94L56oFvvt",
  "key4": "5g9NuSTpftySqogy2VB8TFJD7MVr7LCEsF1X6jA5HKmiHQh2Z3Y7ZnYkp8DDoFuu22g6YiAJNGeGvKxnnm16SMrZ",
  "key5": "38T9va3vNhbw6YwS4DfGzJvB7yevDdSNCssthtWWBGxTHsJXKnQXzsq8oZ9h889e8ghjnbeS9bVPDXwnyb1ezWLd",
  "key6": "2cCpX7KbyLPVy7PmVEwbJ3cnqQyd4FC93LLDgfJ2yMgf9Kr3xqoJmceoqCJmCt2yamigT28Asyoe6g1b4pPXYY4K",
  "key7": "2rvHR5Mh5nuYwzdCtbbxxzDAdqz2xX8T547yQZtwN9Kpeyv62EC9ZFzQTcxqZPsx3tfenT594Mm36P4KcFCwNrNa",
  "key8": "2p1CAm7beUJpo82jfXRZyhfHdbiS8VRF7VXVBaDcwXkizUMZvG8x8WYgMf5n9Pu2ErWUVV4oA4ess6prTo6D4WFh",
  "key9": "u8oCNRRrEvnCnUzpjbR6ToEDv9tQ7bz9gkoVJWKufmhKrGbNZWtnjGUFBxmYfCtrtMpvY8ghxYcdcVVijrM46vK",
  "key10": "23JQjxj1yvYQb7y7UChPMHvbzJTAQUFSymRGmaYWF24WmPMdD9xpkRupzcePPDLZvgCY21SXAeDZ7iXPgQW9ps2H",
  "key11": "5u4GprT3dafbFk8TFUUbhHTqDureRT2roqdgggHVj1tSxJgHeHj82VxTmRGeod3KXLsxSs21oTGTGUrRy4mnUZYc",
  "key12": "2roVFinRAeQKc8JTpxPJVuynUvZwqsBxZwD9CyEy731VnssbSYKuSsgWBD5jbFBdv4JLyh5QATGjZrV6LJnsg2aA",
  "key13": "2X82XDDYSfvyx7wMvHqi1SLWpFJP9S9xKA8xHUfbHRFyNZV9SQmbYj8doWJaTU7vVyHeGFFyNQLrxiWM4XBqTyJN",
  "key14": "4MoVP88Qk796aD6JJgb1hcpG1LV1U1ijBqNRPKpfeTSJku7yciphrwCgmwdkHU9EuqgUNL4VJjcAD626yLvYYqTV",
  "key15": "57Mg6cuC15oHK6QEyBW47XXRMWqFnmN2CqsUybXmkWjN1UiEfAvdU1eTEMW8QuKc5hYwrTAjD4kXnUcVDn9BKPHf",
  "key16": "5m8jpMCeHetYwbws7mCD6hK95ceqUm2s6KHS6uzPuFW2B2EDByPU75rpe9NrP3Daw72gjTmTPzhLJEhLwgFnRrVT",
  "key17": "2x1SPfJpRjxQZXK43eV7McySx6LqxbYQsvyLQxLPd189yBKtpWFNtyGakFTr2uR4iANNWaqUgJqbDuFzpXXRu4XT",
  "key18": "45cjHpd4kYsYwdFPi2GnnhiRiVTL5Z63Q9PvAasYzBRkdqsHRf83NW9z2NPNiWR1vmH56Pri1uxsv5Y1zZFbWgXJ",
  "key19": "558pWGBeGtz6t8FejWorGxuhm3Ea4Duj7MYq4ymKLZHnGyzCUMJsT22xx6uB75wiznvhfMYY5KnXfGut1fyUXR3a",
  "key20": "x88j5gngwGVG2SHEdACpZkfJLaGvR8rpE9gdXM1i9egaNnZpixrkLi2ou1Whsb1HSBPMG9vamwgYpBTnzV5WDGz",
  "key21": "3c6eSpyqjWXd3qPoUiRxcX6Fsqi8jDDV6UA1z7vsDMiTDzDUgmPAAo3MSwdMVqoVhAf8ho5Tq2DW6Qyqy84dCqyJ",
  "key22": "3t8yYVLZ9W1djGKthHYJ612K3UCk8PDQj98VKytdAexoZ6c8CvjTwAh3nzoALvwjd8TcboWswhSvqbKFfo3ndP21",
  "key23": "3DBshEupoojA6Ahwwb9px8gRfMEaBEQkMd1RtN3ErmX3Zo2pPttvXVeNHG5CjJ5zweYHTn3Gif4w3RdDybFtRsaa",
  "key24": "4AXpUYFrAj3HRsRQZpgqzvBsv7RVtBrpJ21RakG23A1aghporWTGAJccVtjdVtJjzo2f2eooRANFyrfAjiw3ijJL",
  "key25": "2dRWfJbnx7pAdMeFbKUTr8cLsTuRHUzd55Yps9SMrNmkqk6h8eZ8nprRwHWGkLJMVR4hoeC8eNnheeTGCuYXYsv",
  "key26": "3H2usReJMfCBEf5fcWNxCSJTY7LAkxYMfqtc5do5EFLR8n6Gm9hRMScNXCxqpCpR1SNAurGkJFmXmHD5wSPGArbH",
  "key27": "4MGe57muwE9WAyTXhraHyDThKzCNcBjJyFMRLGctdFpC3uBNsQsPntSHkzeG4oJEw9RNSVu1JZkAfVcyRzBGD69E",
  "key28": "33huQrxHHSqrocXqkFXy8WRU66ouFwdozyCqDuoELj9fadjsjUqzgyaMJ1E6zTcbMt6LhBvVRvNQRiLSuJuy4cqc",
  "key29": "E1X15cT9x5kmibpHvVMpEJvFAeeCjv4JujNZoFHMvYc6EdfDLxGFxqrL7AjvVq9kqXq9S4aWLEz48QEDeYDAq1T",
  "key30": "4CSoXJNKxRttrHMxGqJkvGW9E9NNhSxEGF5zRtomZYGgSmbSThB51BzAJAyQEqMJPKSHLPEuaMf7WeKLEPJQ4L9n",
  "key31": "3oEAENSSaBJfS4TLcb5tBaTs5ucJCu3cPGXo5UxvD3RdVxNDAwmDcP8NnmkDx4W3mX7iMvaLx5wDxicyfRAw5f9c",
  "key32": "56hyNCZJwURDYMXkdYmG8L13fyrxj1kYiSyBvahLvTZt3FQic2ZcRSxeGziCf7VFKDr9unqxV7UVEBcc8rzXRcx2",
  "key33": "3NbwwSQqw9yvqmpr4jusYes7acFCqvWGqPSnVsBVgmx5osEW2PUUv7WatnNKQ21KHZPBSjVR2EajKJmZdTMntEz1",
  "key34": "5RtwiyekTtpasj8wtEEF55UNQX2jBgzUv2u459xtM6EjEzgx63x7Drc1mYVoAsX63HAaMfxSzcsPQ1rYxF4yYoCA",
  "key35": "4oUQJomJgfvyUxC4tjLMtqUK7sWS8LHdeCJfKF5krGn4A7HNLVRCGU3GSaNJjzi5kSLasvLGMnURsJKDoBmJtXGU",
  "key36": "4ZKuvR1rxhUfFoXYnrPmWHrjUBfS3ujFsfF22PSxT4ULJj3qxfRhbmsuH5Gqr7orBKjnHxuJS48gqStXZioeWdbb",
  "key37": "583d9tgMiBRnWmi8A6iVaRVUWpVJHTP4xBAMnRGPp1mdNfDZtWrHgWcFiVpfVPfTdrthxA2BiryfXtKPQYN6u9Wv"
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
