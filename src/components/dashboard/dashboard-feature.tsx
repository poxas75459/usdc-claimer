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
    "5qXoeBro9B751Akch1LZKAgHtH3xr49QcrFY5PtA54Bq6vHYirAEnNk8GTWDG3wFzHqn6vKD8Y9AVqCiVN6Hzg2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MeFNiZhA4PC3x3ZLzEPFKctLqzxAzCvpugKwUUbK7nMemXkiQFSJH29Cr5E3GkUm48Kuj4SrZwoFaC1QWqwaq4R",
  "key1": "64UJbWMmze1s4MBJKJZsWVKYoLoxta7RY5qaWnHrMp8MyXWxSRjwxyvKYfxrTz7d6bJLieuWEWbnUxMewKgVHgSg",
  "key2": "oyF6mq6Vquh7STxTAaCJZt1AyhpJEVkZY7QxUoX311V24EJSzSPpH3HPVra19b4MJYono69YfRhaXsSvU7Nij4Z",
  "key3": "5kMqXHfLKrTvuypdHQB6tkyt49XY93kA8VGozstsiFJ5VvHrWDFhyVFhKTPrw1pQcnzWXxHFvxazyjEJYavmTrJP",
  "key4": "SU9VwM6Tp4XXXMXGQDfd3oSKWGJUPhraeP2ZYzfrAbiuesrfwVbntvkKSK9tr2dJ76JXwm3Z4S8Xj6Ni465c2Yx",
  "key5": "d8oB1ofBPAAQdtRjf5oywQXpFJpTpLQCG1DiLHeqUjViVkt6chmhsUuFTuoH7VgvWA7BSyXn5trHnzpDCUM4m5c",
  "key6": "5LSSPZEUgjZRzLHS9fw78yddbHdZWDpmvUnsbD2rqAAnWKMRRMKdvvKGixvPL5Z51qUg6gedt2w7KupSu2r55gkr",
  "key7": "5Wt6mJXVbUdLKMKjb63HvmgoPTmjPdRHBXco2rtBMRp3kxVzDVdZtfjugTDNz6vKCxNDjizG39rZ1xgDUhptTopy",
  "key8": "AQtYWcmVUA7pGiu96TueNMJFhhfhV8fetYHrD8LKETb1F4T6oErFi2zoWV9kT13dT3ZZXECPT1QfE84KZvFKVso",
  "key9": "3aqoWhQYxqB7EFZ6bVNGRC1HDbEESH3LAx725c5RsLTcz94p4Gc9rMoY4wwWCmkfgx1MCPjBYQYZdokcenR8BkHR",
  "key10": "25to4g97pCPyCGeAFoFoXzwj6p9FNFoaDJNz6wfut3AwydPvtwawjfU5kSsVMJPFk1LyowQcLmX5B4mxbWftZ4EW",
  "key11": "4mNCzCWAriiPRqAT2LYTAyA9vWyXyVp11N6raA4iRN14qSUkSZ514oogMUJD5CXf735Kn6k56KnJexM6XwwZc9oM",
  "key12": "2QUDkanFKiYo6gCRVYNkDt8sTS9sNJoiRftTrUewRyHc2DxuRrS6hZGZ9yYBBKjVQ412nALa6oAMsLnYxYXdsQL8",
  "key13": "2j3jHz1i6ziibU7JghNTaqmUkJNyrVvgvEskXjYEf3XRywod15KXeDj7TDTi8JVdxDw6Cexi2ktAxmp4ALxRYUP7",
  "key14": "5GAU8XibbzRNzTRgggx1qeV3r1YeTh1cPJGMLRSNFLcoW7zzYHWt4d9peFGFw2iLvVN5x7g3U2DnG5KpJNTE4M85",
  "key15": "2cm4fmXV4Hx8sxZunkUrBEogabDqfT61MpKJRjBEFkf4bKLUJv72H3RB2Qa6fKgGhFCVFMsGMBg83TeTfoDWhjgv",
  "key16": "2j3bUraaqcSXcME5XQd9ZqCkynbQEj3nWi2n7tFZUg4aBf4xxQ4fuguvC8usJEovL2BsEt6XkK28qPGQaLb2Bhyn",
  "key17": "5gMnfvx2QNRB5UeTvRvmRZtSQC54hn3ytzNGemKLEdjw8o6mLFakAYwXuTrekoBCdBNWDnFgWzuGVMFMDWJZxWCD",
  "key18": "313R63siuVMcWQaaE9bMJXaYgMVFoyayBDX7mnVAActjcnLsKzVjBxwsFsZMgG7PE47y1DCeYxs3JuyMuwg5JdYK",
  "key19": "4pz9Bf4RXnHTRQKJBUFB3JnFEWiW1ZcnvquvYLBz2N4vkeH8Y63Qd5w3QBUVkrjLFYKM2yEYYPEwEA8RzMyfBWDW",
  "key20": "5trBLH7D2TgwnmXMgaxdtdXMZ97Kq5Yod5CB5vPmQ8JD8JFnqdXYHyrmFBrotBvnyEdQMPdJNR3Apwe8qUW9u1DR",
  "key21": "3WaHwS9jouyVGgUzuR7L7FCG1eRjbVKpUuNv5LxCfWUGrzcfFwEfbobqvaScpn9hz2HcTMfVX4zodamwKvyztNWG",
  "key22": "4AScptMiGD6Q33rJkheRtmBaxHEZGBFCk9uxvvBR5ABTtwSok69BHRwCHimn91NSZJ7q2r87ju8XrwLRz32HPm26",
  "key23": "iy6YSJrtxqrWoHB3pV3WcNCoQCDx3anjAPfxKRW3BR33pfCaU8NAdx2jvVTvz6snyMYnCCQnyAsmxkk7JjaQaXG",
  "key24": "4angZZ4DGzicnAfjk45fRLViEz9yW58N9FaUc9Fh2Tn1Qi6eZDuhrt5NZvuo1F6zzBBmUY6SswipyJgZCyXbFfNb",
  "key25": "4vSEQQ4CTga9vkLTzJGZk4NvFkyuK7zYBjc17KUjGm4TspzWL8qZfrXgwBPBCqANEo8LDXvNY4FANMQGKqD9RkZ9",
  "key26": "55rrCutPfieNsuPqxGVaW68sc36iNmbh6gdFqDmtB2HwRXFKtxMcLRKa9txxDV3pNt4AABPoEu1tX9V4U9g4pU6k",
  "key27": "5yQRRLrBnyZEGiKLyyWrDXQZGSeEqGzGwHqGE79C5HVy6F6CpKQ2yJe8WfyCoZKUPEBJtZvzQX3NqENnaqixxzQ5",
  "key28": "3eNjtAUq9gh8RV8tgD8d5LSxjVT78Hp4GhrAVvczrDhdms34Vcc1F45pCMb7q2GM3mgZSkWJAHxWYNfUef7Jc8Y",
  "key29": "27YSUZKAxu6UX8jaajDVdSL79t9ARp75GaLYcSiNEfmC3pMf8dzDxuPFJf5NAGkWx8zwKd5GA2t8tJXG3q7rTggr",
  "key30": "5owzNJHx3JmtJzLzSubkxhzkqbs8vgsfCpC3fhfaaNCxngug1yWEjNkLrsasTC6PzYfqpyJ3WrZCqjAR7MZqs4bQ",
  "key31": "3QzxBFRcDxLVeEmtjWmzbp6mddKMAT77LQye9PeVmeLPHhzx1f6nffET1yRE92JYtFFo43bKSwU57NTEHKiH7vRp",
  "key32": "21R7AtjFwFbsmbPzjSSX24w6LEiH5GjEvnDFPiJmsXNwLP1uwVrwy9bempxtEx6E8eN3eT8wk3svP21aY5yz8ffF",
  "key33": "3eF9vK4xX2zrX297BDmP51xpyGagCDVYNnaeP1RWeUEbPAZSpd8idwxcpdAadHjRTWLuA4jMaYGsEqXg6qUFZmT6",
  "key34": "aSaYpiKohV3j4K5YFW7wmYUmzh6bSWgtwPLBwLnqtvERsC85kQMNJbPcYEXiMxisDgoo6k1NaSG76aoVuJdgCGS"
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
