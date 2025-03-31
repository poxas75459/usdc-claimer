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
    "YnSSy8bEC6YwTmFU3wqN1RM16Z9gufg5mZ1nyCbbhDv4XG8R7GUW1ScQHv5nBtbvDyEAyoVSazJGJpbJjvkPoga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2janCgSWD1xMsBykmkWgoaFXps3UGdnaiFMpYZmYxk1NvLBeDnG8cUWoiiP36iU5mNUDG4Ax2VoHjNDjKhxWnZsG",
  "key1": "4N1TE2cC4YiMhBcF23vdB4L4Udar3mxLwmAN1HDP34puvRJNvHXvSx9HXZYQ9stH1mCaFKTiPorSb9LURsRhZRxC",
  "key2": "1sjGbssPEEnDidbQGz8DzE16ZFh4xi3R58LUPbgFwSTH7LHx6Bf6yuFgDo33s7vJadxDEZZenpvQqPaoqk293iB",
  "key3": "EZnmfwUUkrmuhjmZxUMZBQQgb6vJZm1wVDtshdXSmfboYUNqkw8HJjp6egFiNXGoHqT1szUbqSdJD4gnWJKvC5M",
  "key4": "2zRaajwas6iEhPhebdNM34PdwdBEafuLFupEFLF23QiJZ8GGdPtAzyyzY3RkARTV8pSZ1BLc2KtoSAiHEUiJcVFx",
  "key5": "5df6zbMPPZsR1UR5aT4wSiaMtLAg3QK5SmJ7tQv84xLj6pDY4f3NoT7xbBomv1CuZDqeXikEq7V51BXPfjMtMU2D",
  "key6": "32Yw9kXMeFbtKaJEdBSXRcq81atSnWWjaAqA3L4fHes5g1nGDZQx6hCjM2RChbBkwPxGmAUN8HQ8Li8NERPSSURN",
  "key7": "W9ScEU6aeoQU8eXgBvqsqjqs1q12Z8xMQ6seRXjVAZFpopNizsvjP8ppz3jG8a78Nb5GC4M7anQRYuQHG7ENAqm",
  "key8": "63MDrVbHNHfWVQoDpX3K8C2DazoHnRZ2Un64HWQ5FR9JMimkyjWv8CRpzcJp4z5fWYGRCVCeHMEZsFcuETUSsh87",
  "key9": "5Nb83RyHKk9pbqPqMVEoN6sqfKmzt13Ksmb9vcfNeva5jo6DcEYCP6Qp28TApv9TzoQRggjdsULgRGTQnhNZC8wK",
  "key10": "3aTBSpfhxRJhEXjULeHVKfpftfdnPHQLuDqsDFt3Aj6dgVkb5eDxgfwMCrVTKPiwJPCxxKeDtzjP6mF3us4wFKxA",
  "key11": "2DkycYszWRmrqZNnuSu9hZinTjHhmBtqZ4neH6GBpdcnwtGmxqjh4gnKh78N55WN7qYoNYwd5rWHHgBjTyoyV9dY",
  "key12": "5wo5cHveHnQiiSxpY48KHs2EcXoR7ch6KqhgABXq7jdjQDAra2ViVaYAxCXpLxWZ2TZ7uiSx9NjSv65DoFbWTfek",
  "key13": "pkeH7gymKEwhRcUh5NCwS94AhRWXKfPFTzf9ZuugKRWwz1hfxxBQ8pDRNwZnHT8vciAwa7T1tfgVLRRAdWAw8PT",
  "key14": "21xFxmW9yUVdKF89fyS7n5KdUiUa3kpqWvnGaoKT8XKup55FL6ZGeNBePY1H6i99Vri1kSbRJ8hmeXdeA6B3NMwa",
  "key15": "4sf3gX3zVp3eAkFMsboLeymZ5ZHBGad8WX7RQxf27bfKepJd2gVQfuUfmdxVBpjVEvZHj2KELQjzykdvUbiQ4BUX",
  "key16": "2qrFAo5Va6yvxA3DrYSLZFa4nNVmP3vJ1kgVoH5kzEJ4TFDP93xewiLNKgBUfwApzaoZBFrsMERTvEZETS1pEB23",
  "key17": "xCaehwEB6JrQiRxpDD5E1Kr6XzUwYXPWcenQFCJfjmft3P14GxkuW6HkM9e1QpA9ZmrixQZEE3EpB19pdZ63ZB2",
  "key18": "2Z7esjqNG6uQdY5inEEgVwUe5Btk164kjyCS5hKKzZQuhSEQYCx1qege4G5oNBdesyW2AVHPG73mboXNEGdN5odo",
  "key19": "3zUgaZG74TqSmNpKB79YoRvocjwrZW9aiZWN52bZkytYh9vzWtZ5QkySQMkJSE1jgPdkpqfL8kjUnGeJUXEzBtCU",
  "key20": "4TR9W3VirLvsbv4v4JhS2QVGXo7K4dm7SpNYaZ8S7TP49wfK6ZTkbVgcm732oBTGogPBiCiw278UXgPJ44gNnVLD",
  "key21": "5VcK4QkghLHqauRqyqbfZi67egW7md3AFmnvNfVTmjrJMRPYug8eRJckRowguMHPxBSSLBPCFwC2ESj8bzkhvopc",
  "key22": "5qUACeHYNaUQUfHwGFnXRRWCc2FN5B9wgLWuHcu9ueEfa2PAUjF1sMRQmPF1ZA4HL3ns7uM7CiC7ENSZBMpe16tt",
  "key23": "4HJBwUd52hcKTYm3JTXqzaLKkhvL8dezFup4RSXCBJzhnvx5wndd6PCzidhVdd6LXCTRT776fYwJvzj9sC4ABSga",
  "key24": "5a5dCULa1z1JqcwrR6hdo8xtySCNRzPB5AJ5P4AvjABgBFCuGeQWpDzceFGKDjzRJeTdpkry3We4xvNaCXByX8xx",
  "key25": "VuH4dbw8UnXNJAjQXKCyhtydhoscuXGLzhoNGb7UQ1cGmkMDTBjS7RoASFAUmhzV2JGfM3wkfyFF1shCUrqcCa1",
  "key26": "5xpqN1Mun2xXhseHMXxSNNTuphcKKNLsRnXa9pqyVAYeBjiaLW9crRc6LASNY3jbHyD44Wgm7pr8cM2BDCSrUGbj",
  "key27": "XwgCEvhhgJpLZaovKccZfE7qJY6s4eUm34uBN6Z5CMxXYe7YgDEFzdu8uGCS2QGxuGntGKtCPJTn8jQD8ius51Q",
  "key28": "2nBhbxhHARdcKnyxANuYv7PMQnwX36noH1KootGnnwPvcQZjvUByriiCWoiXFWaeJq71z4xsmdT65bcg8S6yKona",
  "key29": "3BuKEJqaKSRmc29ZViToBdDQQC9vhQZawNfS2e4WARqWH5AD6rT4UkRqox1mNKj8DAetxo7dS1VQ16z6DZTc9RXk",
  "key30": "3gynEPmkgfbbmRMiLXc2jbafkVuVPPHYBG8SSrGENq4RLbe19w5pYmKoqDEPo8rgcn53swSvoAn7dZWkFBkxGKjk",
  "key31": "gJ3w6F64TQjh5zZY2QmRvAy3537zqogzbmjeuxfATicSxecKwn6VTsnDNNjWZdyndteMLqg5ZrwfNrZbkAkCTcb"
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
