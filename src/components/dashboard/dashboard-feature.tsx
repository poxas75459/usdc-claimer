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
    "4YqEWMa92UR3ZvYxuQ64PKPHdmz3aUcfiF3o5AK8hZQ7j56vpNAbk23GQrFAfi8zxiDnnSoKoUvtHZSzNJeftAMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bGdaBzDzEAqKtTUwXD2Zr4tdcVVBjSxYJRYMiREjdGtxddBhvMpw28o3iPrh63tC68Vc8sF1rRWBWWEcmKD6grm",
  "key1": "RT2W7bfACWT8BardHWDojEnqo2xodn494TGcVVsgw7WUzdUuPgiLZFJidmPCchDrDiwNAHAqZyYHvVAzsS1QyFe",
  "key2": "5ymwEDnCtvDyHguwsEPSdYfoKJiBz9og5nZYaw5xa32ZgUKY5CLtRuzmPW2nRYPmTWpUTo7R8cqpeNuCvXsFtrxa",
  "key3": "5jc3vxtFFk1UXn1omHb2Cmwx366GaBzEWVVB5d1vcZ6H1doUzkMJjTwAHomHVLVuotwbDBhrb32EFks6uazqiW1U",
  "key4": "3azhz9tHmiWzrTXPDw1r9Tiwgg4CiNTCFsE6uWoXbHw2kZPSbH7NuQfnx3QCGCXbbmtoYZrkBTj2SNLLsjL5hwZ9",
  "key5": "67pHw4MPNXJc8VsRTt3sTTWvoxFG8envXHsFgQa4dGh4XmZ4Zd18bJjz4G1dc5rbhbpuMgXLMWFfyvnJo4hFa5uP",
  "key6": "4rt2u6BZLDuwNu4y4SRCNmobteHQgiZF3tnsb4YxTtbdwcrLJzfhk6JdBPMPbTKJDLnVkyYQ2UdFE2QisnZy4Zpj",
  "key7": "33sQvNEDQXTXbjkBGic6JBVApajP72KMKqoWXtgqrvPTaZ8mBszqbrHFdH9RyenUhejBNRYUovanSfud1z7ze4BX",
  "key8": "dj6EojLCxviLGpn2fUJXv6uKzumJdsXFfAMdofHYjZReqDEFn3MbHQmxa4irCECZ6BPB3To96iLPchqY4Vk5RtU",
  "key9": "4JNZUxZDR53CYuf4RkshKZT57KuJW7fQ9FsQwxgbMKYidb6STCvSdG1AAaiB7DqtiK3dTgga7NDfcSgxhaU3hFSA",
  "key10": "2s6D2eTfJ3q9K1wLbbpSUnP1CYKbwLRNZrzgEnhbE9xraebJspmTCw45UJqiSSC2h9bQWFPbXueLQ6VzdcdY4hJG",
  "key11": "3wFLzYTPbgUHytuhbSSh1F7ERzpa8eouGQfhjyJpnYDnYtGMGs6v6PgW8r61d1v6RMNzXftGq6NvHKNMpBjDNTum",
  "key12": "bEZz7CyWYbgTcv5eTBm5pfUcnpqkc7gAhELpYSnycZpDxiK3W3zed843YEjhXUyQe7Xo7W2Mvm9tZDYEG4E7QzL",
  "key13": "48ZeJpTBM6ybgXp17M5KS3AX7QLPfvZJ9i363ZomsieMPDDBH7Uwpy8j7o5ADDKvp9C2UqfEUqeefzKuJscPoAnK",
  "key14": "BeyC6mF5iifiHVhM8tfmYj1wpCHXWpDaBnE1M5hCKGotQJnkgCvokVmxUjeLpAY6KiD7Yo99QGvtnFznGDvjsSr",
  "key15": "4fdgA6dzx8M2ET6Ajyg8HLXs2KnffrZPf6JGgYkkUnXAuctVqZFEhm3NjTBXGMS92iNRyneo7EdLeuFTMz2cjYdy",
  "key16": "5ce2XWVpizftiNxYipxzHeaugcE7Xp91nz4bHfuE5pHQ9emirHEJVEmqehLwncDTPuuAp53CogyUaicheS5h5dMD",
  "key17": "3N9dKE1r5ZvDcMVozPQECYBeeKYjw68SzWw5HeUDfbcBnP4SuuzJJHdTpNc4yN5B2pQNB4FVcuEhp7G2tW4q58tC",
  "key18": "mzTcKLnyvf6sJ4DSfbHogVzfYBCCaoeEnTcAGKsmgnSnxQtfymZ2CdKqQbUBKAwkLjXSnsNNZPh5mZeMtydkVqe",
  "key19": "3gjdAPjbD4DwFX2WT3vNE32H89Rh1sy2YyiETJ4UaTBjfXSQnMAh6QVLdKFWvuBBSMkfdgFp8owNc3LzHFiZg36w",
  "key20": "5ueEd7EgBLFfL5fAzSHmdeQTgcPYsmen5AAERhkSJuCv4csrdX6bQE1HfAAEEW1bY9PDwtwVPJBu1yMYis2zqgkF",
  "key21": "2Bs17kaHcDNwrGCTzZhz6VQnkUhGfD6WLnAftk5npGup7CvgYwk5gM29z11Gm3XiuV9ZPPw5e8jm2k4kyEo3vkio",
  "key22": "5Da5JZqrbySpWoDi2U9dtVy4hv7eiWFxgigxN2dPN6E3hAkf9yPnW25faa6J6jT4YZYdjaYB7BVA5BtZK3o9dSQW",
  "key23": "3ZLMSZJUdse4epKGHUPDBwdX7UkeEkMmMsyEEBx5L8EoPPLBDBsRFBKEPQRVr43MEFFtgQQGP9UD9pfib775VwdP",
  "key24": "4bQm8xQ9c4ZYNpqv7SC58hXTHKAgyeURbte4Jvgon4Jh8jNatWinMfR6B1Dc9GjKA2XxMyqLoc6dN7nhJ7dPkvwj",
  "key25": "2Wz2YgAaiXigiMMYg2QdYvLrkJe2axzx5hm5EXLavwpCpvFfisRGKtaqhYtwPtPRoKgXfVDf9tT2V7wrcr2oNbQw",
  "key26": "5gsrFJTVaDjHiaLG4nk6uGZ6fPgnULUoqozJrMQyxqUVk6q7Y9PKQKExY4oF6jqCxR2QZMvCfUCVX8XV9oYiuAsh",
  "key27": "2zwy5gobLq5mzU2Ff1cUVjv6hLU8jRJdobEduBfVuACvJxG53EsimdzuymVv4hMzg3zaWfdfn2hiMNn3weBE1ic8",
  "key28": "4YkrYLE7sKrvk3kD17fyeVEeWW36pwTWRfQgtLbeBs8wdvUh2YsjNmfNnChQobzwuB7WXueifBW2a6yjU7yXMfuf",
  "key29": "435CwsdExYXnwsmdmjxT7ySAcKq1b9z9N4yrjBzyaSXihsLHewJ4BjY1PPUtMfmQSHjsYRnS9nutdZ27mWEpzw32",
  "key30": "E6eNjqca5TkwHJkHzcEzUPdm9424UYKNFER4w3DPjHmBHFLoKyhFasERut8FDA343uTas2WbmitKeZr9ABruXuo",
  "key31": "2FhKH92DE8SD3R2xiGjuPTnc4rEXYj5BB78WhdgPnX8VmehnYhNJnQCH8daNk1ZmzeWX9NpFz7rsCLZwgKQwNnmd",
  "key32": "t5ArZBWrbviXAg1GZDUWJ3qmbbuHRu3QpBdYw4GnfYQzoC9cuQvit9pKvNyWyjJ5v4DQR2n9jd2iYeK8MXha57n",
  "key33": "hpiU4qqTQysvgPiARFxFgDN9jcFjDkWN6zuEEQXdRG6uBhmB1yTkbfiLCagNSf2VD99cWMHkaPeKzcNdPJSkD5m",
  "key34": "CGhgv8GYFhJHfSkAK83u7FwpmiT1BHtnELyNQcnm94fDdrSxLzDUUjiUxAN4uFfMMkoh8KZfwFRDFmsf5GdBGqp",
  "key35": "4KvaWbUQsUYgx3Tqjtra9hXgSUxQeZRscZuM8k8oR73JZdjx3D5FQuqhnrjCMgevcUEcKVmdt7mW9enj1J7CZbzC",
  "key36": "5UrZsaPtEwspDRL3uPT1TrHbr6nawq9YrnD6Vhk8gGXL24hNoUTUgNv8eV6xeDGhG87VfQjqUtAHcU7zAn9dTAUJ",
  "key37": "8JUJgifLLrtkM92rooTndqxXgB35pMVUBj1zuMN6CU3JponTqVsF9gSCjim58mdx6xfDaUSturJ9WEaYWeEKArs",
  "key38": "5Km65aQ9KgXu3TCjYZArKRDfKYkNcANTMggqxZbcGcpGB5hc56Mdc8d7iyGyNJCu4vvBh68LPvuuXFuWmsVX3pT",
  "key39": "4PjobiYSg4HLMvhM61tZMYSJHVviNrjn3RmNCf8Nvwg98tvWpMZYVXb58GsJ97U2uksNnLn1NqfwCmQeBShrS38x",
  "key40": "oULYqSJmSfXKhtkZAYunqsq3gEVDQTGogjKNaQ8vC8HTeaxNG2qwUB1AhSapymGQNQVdCG6bEb24mhdc86adXCe",
  "key41": "gRX4Ha9zredfMtxhFVSoGmhtC8GQRe4NhFQk4zjxv1CkHA5z8HtwZQv3s6rdWaSMEBvd5ZKS9xGpekrapcxbx1Z"
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
