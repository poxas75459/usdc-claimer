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
    "32yU4tKij3ASZTa4wRX7AswQqdDsBYJEAZifPcRBEe2qk7h1xzXaem19yr2uzQG2fJTTTLvZNDWjwMNy16zK3YpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YNGQgsg1a4B58qW6HFEcBBkT2pR7ECwrMHrLKHMHDznAJpnZqyKcHjaNazyaGFaBejhFXg6pBeG4qB1dakyPQsU",
  "key1": "5S5ULLbjxknDhPYvGnNUn8vvaEshmXQbu3PJimeiUsq31rQgixSTCsoexfC37eJzxNnFvoLx849b724VMj8oJWGj",
  "key2": "4drevNm7XH5YXZGamcnpXQUsxBrAJx7eFKyGicizvRm2TTFTS26LagdXkKyj2rUwwgRyAD8GHg2gWuwmCJTm5yWP",
  "key3": "MbhCjoQEA6BcW1XDvdimVDaPvo2GLWG8yJg9nTArVucwKThi874rqVC4oXaLtZUmHos5Pt3u2hgAMszKH2fRBNc",
  "key4": "2YduCSaDV8A3qV4EdBuMwPVfrJNQM9yxuWVRNb78PJVCEPaZzESksz7rtdy5mXGYJrKkrtQdDJTGJHAwyw5ZPv5q",
  "key5": "5HMDGhhtWFCRPrfRpwDGYG3NtVR8y1JJXoyxwVLFwiykH2SZsEFUcaAoFyfFeaGUtTt8mFsCwhdXKZqcdM3NFLti",
  "key6": "3hQFHARx5VnEpvsaCXGW6tWqvjExeyeWu1Ld68zbZPTK9hJVMjZ4BJf9Mjj82EppDqqUtsS3XG4QzDGMwXWdvTuQ",
  "key7": "2AjntRAjKjcRXHc3wFRAFVPRF1aeLXEi5oyLsiPkXsBZx4LTH5c1MvyxfV6fnYnWbNHTNAHDtS7hULk7Xo3Th8nY",
  "key8": "2jjBmAZUELJp1wwwKwfArP8io5cp8DksR4q7976QyJpqpqvaQqTwA7kfRhhmUaFwEknxhKFXHYwYc1LtTdseqxCG",
  "key9": "ofuXjyfpc5PVP9d7MZsj5BoySoDEkyXHyzxmPjzttFKkjHzVd44CG4Tc2aHkk7W3QieUZPPt2LkGxeGvJLEVuoB",
  "key10": "21oUzX9rbG5CQ5fATEeF9tXUTSatYpTkt41HTqixneuDE2A2qQ8ZFgFUZHuqCTDGY2bLxipU4XGmmMo4i27yMxSJ",
  "key11": "67AQyrwQgYLZbRfgpK4LFD9YPSTJ6a8p3J78Ggw4DrcfDbAabY3JvUCukXujSUMo4bLuqzxRZAUrX8QGZsPKur76",
  "key12": "5NLyhzRLZ62qSyirqBTg59MBL3rK4VqYpYeDMgjpavyLcxcnCDyaYbQCZNELiWiqfPLr85iJGPFW5hbZ89Np885B",
  "key13": "24qhXKTuBzbKZbKGaTUSiYh5Bgd3AZy1sA1dypcmSLiBZ3kBXZk2WbaZA2EGFyocVwYgg1bx2KWcqg87UTMtTmvA",
  "key14": "3xjjP2Cbzar2pLP3n6GVEzGGY9zK5wzezHR2X4AT3eQfgUddUTbopQjntg9dn7FFp1RuKt431C7mYXwHmAgjBc6W",
  "key15": "3GJzwkHycTD1j9qtLoGNvEeREY9kEZXJWrWkcTTrZK7dD1zNNaJYv1tT8kYtGktdC9mHyRYtUjJgiZhRZfdV1FVi",
  "key16": "wNNnk3DFbQnRDFEDAApZSbH3S2KEb2ixLkzdYwA1Si5Pg1PDY1Qu4cW1pdE16wM6euW42xy9ajS9G7zNez86uYF",
  "key17": "Kia9YtSrRsRXdaRvsNKZ8Xq4fuTx1mwjpe296EgXf2WWz5j76VK2c4iquoKY1rpLWPzVgbezk1cYYdxCzDA7BHt",
  "key18": "nVV3ErvGJv9zeR1GwHRo7tC2jReNkSf3zwX4bkA2XwBhYcCBk66WwebisWAec67JdaMgXoGpvWLSanTc2yvnJvg",
  "key19": "bnpmysK9inHzZqnX2UYcUcRCQDXcpdnHHiqHgsfurL2sfrohPP1V8fEadyFh1rjr94cQ3isASsakRKPdRmTTPYT",
  "key20": "32QCx6vJqw7sUjsdDX7PPSWAqvy339zXW5swzjB8BNLZ2kckdzFzPpUD1MKKBnaiinvFmsfbxzookwepssaQJN1H",
  "key21": "4XQTQqNN8CUAJKDJ58QNnhUTie4uTrG97UCcWwiL3tpTs4FcmKmXbkKYfXU2UeK8qxSDSyBb5okA9dBajpnVsbwz",
  "key22": "5w5kbQ8YCZUwmd33ET8FzUr6AxuK8WeLzQDhpgn3UrPRbMCHV7d5FPByiYPdZ6dhVZUhqog54dZGLio7rc4x7U9r",
  "key23": "5o5YBcnCB1dyY6WHMDL6z5gjEBCRYVm6EsEw8zbkL1k93FJpHFx7WBr1Z2W3Zz7j4LiStJU8CYmT1mJmgDxDFNp7",
  "key24": "qQ2s26YtNPT8Z6Yy6FePKJCWJermue1pvzqVgj2h7Rs5tQvHA5oaPFsMezkUGz1cnCcqu5FyFd9cDzMapp3ekuG",
  "key25": "5piX37fHNmV5oX9Hzfotn4QRgvjn7yms8NkAYdHstURgfaC83YagHWPmtAxdVh3PxpaxjPBd1DqWfDCBtmevjksA",
  "key26": "4efGaN7VvGotrCtNhcJvNWXfmcE2Ur1bG3jt2tY2R2u4KtyZiqTPspRUSwQ2rsEC4eQEBrmPEJE9Yb47y4nSrXXn",
  "key27": "4KHYT3KDt4UEHtQACpeUSBMukK7FPa4FQSvpPkM7D2vafmSgLp8WbSxE8p1tKQ3LZW325NNJRrN8Urzin99nXqUQ",
  "key28": "653PD7PhfrBiR9xBtpMBZye3zrrrePTsEisym9KVyaAouwaP4xRg1FAHZLnZBmh2VJY6yKKsNpyCFfJFw9eS1EME",
  "key29": "52qC4uDeBgs4kxaJa1BvPAdscizPKPi4AsND7Ew2LXnvdVgSWunirpBtq2dG4GqJj7boDbXoTpYfQYwp3b4xUK53",
  "key30": "4AsJPGkfcjVEt7YWLhj9FZQY8hHZfTLhdxiukww67PY4J13dJrWrKjwyzAAFS5Z6Nwp6nuFAY1T4AQqxv8JrcNfS",
  "key31": "47bZcQKWMbiNmyPoSt1Bi5snjkhDatDrNDGsZzk4WTfUUg6d4PNjN4ZKNR5ymo6CPPHY8VJ66C4dm5mu6rDgV6wS",
  "key32": "24uQVWmsUcBmpVSQDxAmH9MFWWpddD3RPLG81crtFfiPNdWEyij4eNf747z2uv9RJKXR2JCLcLdh9d6LEfAZX9dN",
  "key33": "5nRagedNez4Gmg1xxhnpME7U1JRMcKHr5LLHmkGUmMCUVG4Dt7nV2onHWiUMT95Za3udNowBxcCa81hZ2LL9NNbe",
  "key34": "5wb8EVE1yFyHWYDHxbrcTJ7wfaawF6iUZ4QYgjcBeNhjXr4p171oD1yG4vV2GagFV5t8kinASR96fZ5UjWXkcYQh",
  "key35": "2Fsf9cTePeWh9LXXQ7tCBYQ2s39Li4tLxc2odLHErAXau1akcSAPRubLgAC7Bvu8JhrurnU6QMg6D1oAxFahvhqX",
  "key36": "5GCphprnk7ccB1V2qnfcZEbVX18RrTnNximyi8kjK3Vq2UTLkSR7p2Yd5CpJUtkHoLgo1thjgtAd46HrFCiMXSU6",
  "key37": "4CK3n97gpvRVziajETD8EevdWnAUpmkxbu7VErKp6xDwu4aavby7nUNFECBXVpAujahLBrSZHnhpiR5BkzXi1aT8",
  "key38": "2DYTDBECvyHdyKRCmDqPeemmczsWxXZc7r4bVySTsgyQvypCd3rQRdcMPatzoi7j1WKpt9jY7QxTxCZ9o1EHVy3m",
  "key39": "uoP765vWB4rZyb9EZKqU5JnoKnZA2cSCKXeQXbMceQF5afyWP2UCs5VSCzZLPapmJLBhJFNTT3VXHnQPi5QKVAM",
  "key40": "2jXtM5x8AhAycV4iZg1owresKyS2RrdAj3aT6YYwFHxVee8VYf2XwniyCA1PHfCtL3jjxGtfjWmX6sprt96Ls59X",
  "key41": "2cgTezaBs6GnLKtVkVoMEdjiuN3cSGfRJF8LQPVhtm951u726VU4L8zYNqqgdsH2xJL4qMdiHoVBb9DDvH7Uaf7x"
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
