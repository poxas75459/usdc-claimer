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
    "qnvi3T3zC1DdPXJRyfp5cDDaDfN7CfkndYWmVVHVFsiiXJbfthykURFVFqFVxDy6pZj94a3EPC2dkAna849Uo31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PM2jnUKNKwqYAabJNY3WMDcEJymWMgh3cJ4LB3KkRvJXPmGWLYCDKWpPpruQ4Rfw67EyNoWfe2ZR5Le2XKe6GXQ",
  "key1": "4s9Jq2zRWr64P8rH913zpGxAR9xFvwm3TEvrLtT6CuShm1RCS43vvDUsELUdNu3mpTvGTPm8tYP26jQbiyHUqMVY",
  "key2": "3mYfDvC6hfMTT2LNiQYjV8YAZNdvDE3FK5ErBjE9hBe88n7YXtKvNKMUDPhPmbHDAspeGySaAxtQRm93SDSW1axj",
  "key3": "4JCPAZyxjwuS3vwKHd5WmV7fMN98q56DKpKjdJDzC1ppxS5WQH9aLmRwxqfMQ4q3NTf3gbXc9gRAQRoAqzGcWrKW",
  "key4": "49jzSaYrHFAcTb1FgVFoeqko5eWxE6Dm4RMWeRJu2Y4PEtonWnUAKUW9CX7zgDmcp5LYGMLejNjvpKNRGsutMEGM",
  "key5": "Q8baLTuvyWbrLqhZzmtzi3Wne6xeJHcsGfgCW39eJV7kGFE4GGGiWCrsMp9ukL4P2rsCpDALL657QyyKoD8iGXG",
  "key6": "4eSUunwCrQeR2f9SMawPNfvDoc4adBpckyimAFP2xU5X753YHjPMkTrSWpE6okW6BnsNPayAeTb2pg1ovhWvzY91",
  "key7": "yRsG2dmRRiTyr37RggnWHLXprKDcbK3jZeZ8a9cFBPysu1weFWcAAk76s1d5vqGDJPNXEDDvZw6YviM8ULqZ6nf",
  "key8": "49n5xHjmUV4z6ZCDBnxVVhdcKA4LJUqatUiCdNLh23wff8xrHgcWK5D1Ea1KamdFBN7uguxNgeaWnyeoUSWZUAdn",
  "key9": "2yCtmGZsUR3VPHCKJr4sUiKjmJgHV3RamwZD8VGrzP3jZ9tspLCJ9oVkk8h2T9Hkiq5FASHMGE5dJw4XkHx9dkDx",
  "key10": "5WT8RVbAkfSAyVbjTBHLHANBFgWA5TVT8u7qRo1jVRhgG7VTrf1snfxx86NbeADsx6PU9RQGrap4QZZVYGBHNVj7",
  "key11": "3JoUCyn5dagiRfke6U2g6K33459sYjq5Q7ukjMXWC9rLmdtw4WFWfH75r6ECRsFE7h45oYQXnBunZqCcCp2jZ1iA",
  "key12": "2jMHreUAug8ypBkYgC7c5qYSNh2YBGhWWZeQFvADz6yrWmpsL5r1RXGKGEuUUUFPSM9gdGr3Fa3diKS7NyZMi7aE",
  "key13": "3SJMgpDVTBuhRizXJ1sUffTu8TYcLXgYvNF2MAN1DSrx7N6X3PGwDFgku5oFSGrNQZVyVsF2JvSJDjn3M5AQdPxn",
  "key14": "axWhYLd2SGNYNzigVDJJfYwV34tCDBmY1mK825UCZTKrBgdRutfgNEa6ovMpU6hamg5ohuNSGkcoTzWp94b7bFU",
  "key15": "5LD312eCU1Jo5Y6yNeTGsB2gHrxqNcJuVxLeWMr7qvf3grajhKRmYDFTujLJovbMSrnX46tMhRa5xWf7GrmHuhYT",
  "key16": "3gDbdBpxutttcCyZvBgE4tRYSL4mbA12ibK6zgLhAjbNKrfbjeBbvqG6SFpEHVXKs9Pb4hsUz88z3EKwpT3P7nnQ",
  "key17": "2iK5rByQwdA4M4WswXvoyejH7gMXAfyKWH4zeHnaYEnQVyMp3g9tfFoerz7gdsWuBRLQRVnBLim4pfnsoo7LE7uf",
  "key18": "4UD6wV6gDiXFHi8YAgZm35vAWVw5ydz3ndMrcRjWRb1LyozCdAQvxUoEMwTHepS74dAxBaUN6uWmZMsEd8GbQxMA",
  "key19": "4PpnrPLBvyZ96csD7emh5A5SvHKLM5nhVoeCe5fRFZSmmwXfcC95Sd5AhxbcCjZkWcvygMDsZeWF7Wsy67ieB99s",
  "key20": "3LoyfefzWQRkYZigieirS4KfJFcBYaST8mJ8sPicebEzbvgBWLG5LS7HifuS11rJNvJQqEm5xKkTfZEbi841yVLS",
  "key21": "tnbjkLR1USqLjsG1Tunxg6WNwEyBeygXy4Ydyv8dG8bMJCQWCq26La9SKLHxstgAnAgCuQbwxrxxyBW6b5nL14H",
  "key22": "2ifzD4zv8eYKdzQTba2NuVsDtt6cuCmPDhwJzUB5K9Uc1TPatyDtsP7Mm1f8EQsp9Hnz3u3N89RF6QpjbcWfVcG6",
  "key23": "4Qe3bkmA948NToURhHYtoKqyf9LHgDJWnH6LCgmLm79tcMXUoAmvfj25rTtxL43WetU5VNKqb1rUeHBJXgJDcTSD",
  "key24": "2hjBtJA6axxN7VT5aRYp1HF92bJNRLv6iZqxCntUKjHBSpmLkpBuH4KP63FJa2vKTa7cnexWg79BEUyEyBXRnoxr",
  "key25": "3uJKWZi8tgd1zPizLx11C9TPWmVTGYhLeHkEAcPj9SwfudNJWnfQQq8MjmuRhBdHSsww6YnFbJPAkFqUBGY1b9yi",
  "key26": "5HUjuf9UnJcPx1D12MXDWpWu92LYQgaeFW2AFFXhtmib2x7j61bCSscj3VzPv72GNFJp88TER7f7KWW32mEKzFeT",
  "key27": "43qvpa4hWKMT2eq9NVXs7u7imdUDnoXXkJpEoxnu8gE2LXU5ey5B9whKc5XsGpD5oFiN4E8ypRheWqaEz2weLvM4",
  "key28": "skfUPkn35uE9tAyqh8gH8nHgB2WtBS6uW32SEoiNsd2dMuGs19UKV95wn6ixuhbcHRcVWKbVMZBaV9Y5WWzHboy",
  "key29": "3qENA1PHZpmQnjktmX8bmB69e23ViGLtqgkqnfrPvVf6mN2duMfg4vnZFq3WSQbjp24RwTqAapDNq5xXh911sTwV",
  "key30": "2JPLfTSJpA3vXnGKStXm5vKTf6t3H5x7DoKwMVRt3XsMPFRb38WHzKa8UbFw94sy7Z1SwYig21CpCX2E3NAUpRr9",
  "key31": "4YTRff1chCGscyGHTL1KY1fa5J8MMLJM1SZsQFxPTGPsMi4Xv25N6PzvJXeepDBks3mu3FMYXYqCZDrw1fqJtPg6",
  "key32": "4DWkB75dsZBao1bY4Q8xoRMa2psGroaXi1eZ3uHLgzvHDfgGvCSz4dxDkWJytcpmv9vdpQ3W5jJy3s3Hzs7BQyx6",
  "key33": "4CcrSZ6PDbXwRdX2GsvjxzB4hSD5DU3jK2BB8gU8mtisc71eAPTCYxfT3QRRX4yvHf6Fz6vfC1kFTXXapxLP4Mx",
  "key34": "JrrLAPbuAdx2TYpBxFo7UrTzzAZL1jKNGttisXDujQCvFtYdNLY8sk15BAJyEFZtxX22fnFgTR1mspWneKFb8vi",
  "key35": "5mtyPFu9X5871GzHyxrm9yyye4iWHafT1wEHN55YXwojEqtjUStAQmSVUnmEoR4ukeQApsuw6bwSdxHxu1UKZiJH",
  "key36": "5EtM7mwDCXZoEnqLsdMFirKS2PJ61snfqNQUV318WDNpSuwCpZEDWjrg2VRPuqxRhcZdzcqBv6prkGkrGFSAL9rn",
  "key37": "4wEGpgPVUzb27hnGiq3FDGa5muxn7eQ1Njt5SjnkhAyothzw2GER5ah6QrCAvqPZRmjvwtyGtVRiPtQJKP8WUYYX",
  "key38": "ZhnPQU1z9qwX9jWYjo3jUsCWH9tLQZFGYjfcCnnJuLCtfxBPtLJCgSxRpibK4AuZVJuxNbyDDP83H74kc4oLapK"
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
