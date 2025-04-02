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
    "5mDGaSEprYxk1EvXA1iamXfrZpZJGr4TBZmPxjFpYEdaKAcmFa9qf3FZvenryNiEVdov6f6yvAqsTavqkuM3SndS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TWtuZ8fyDLNy3ZxrEYX3zAftK8RGRQnNMP1MWPzeJF7RZttsJx9o46mWKKxWU6LDxacH4DP4eZ9udZjuqHjr2BX",
  "key1": "2EJ1gfMb33xMyM3BaLZ82pgQkP3vPfzuGqbAcuwLzowGyskQzEfGpfy9KP2ZCfnDZmkva5U6kkGDBrVqDjCuNkk",
  "key2": "Awm4pvZhz1yHfrvnbTNmRjicGi947JgJGrF8QudJkR9GQMuiMKDV94vduX1hh9GkSPn75hU7mhnRHf7hVv2GCEc",
  "key3": "5woRsZVQJUGe8UenVTh5AggSdzXQJuBG1nRHdL5Cz3bRFevJo5TU6qXnNxBf3UMQUxsPzrEPzStqe8YfTeMtKTg7",
  "key4": "3nffHsVu6WzejyHvBAsNgYRUSgpADe5tc5vFLrgBTEfXsq8LsGz1RUjvV9cyngF5jet4D2G4cqELzbekwxjyz1nV",
  "key5": "2sqcHgzS8WoN7k1xNHt44vMDpRJHUvRHZB34t2VUa8hGkhaPPw5XT8zRRVQq9okjd2iZhfXrSiarAcSMuXMSzisd",
  "key6": "4f19bpVRnGqhT3cpaEoc6yauF8jQc53sKahtwmdMi9PyUDLHcJhskeJ4Zpo9CuDUwfY5kYyWEtfzUkToH8F4Uoyt",
  "key7": "67SamQhbYYG3raQzaaYtZ9K1PstYidL4DGKJyzrSsxuXaBAn4F4ptecF9ZuyFFpG8DF3ZcMjJKtZy1wqjS7w1XJP",
  "key8": "363k4DVYquv6eSLXznXzAUrVajyz79FvfQghRafKevxGCBfXLAexHHFAaysRvGDnwcWoydxrqWu9UKDvn4YmCF9r",
  "key9": "2cnXrhkCqW4CcAVKfXKbBKQftEYejTKzEsdPRE7AYEVpRVvrN6foGX9GnEYUSBsyouJMpkaQ8pWCLzwjUJjUuzz7",
  "key10": "5uqwSWqC8oMhexvnhYdeRK1A1ZzdrLFYh3UBMbCVUCj2TZrZnoery73pKXZwgwXdWGadu5nCUdupNLTKWA5sV9xZ",
  "key11": "3DquXMpYvq1wK7sLiMc1GaBwBdmDoYEksvVuy6isbVhXJpLwqdne7kghLJcGo2sJxLcez2dgCeWX1iKACtCm4qNm",
  "key12": "3zNRLCVsQZSmyd9RzJ8qxC379NSFuxQM3FKHAc7smfSdZiBB3AYm6Jjnw2s9QufFebcQthoqwaQXHMRWaax6Q8yk",
  "key13": "2Nv3xfeagzGMZHTFKAtWbtMp5Dj83VJtCFr5UHp8BfDgv5g35rZYkye3XywgvFFuvrvbcbjU3VjsE9qtQFUY6AAp",
  "key14": "27zvu8SpjcQckKHKwsrqTq33BAuDd2HfvRMvcChpVJmxWn4tPA2T7TEkJEqfSZ9FaQmNgs4uHPdELskdoanE4yLa",
  "key15": "5HVeuQLqvJ6mu7HBVMsiaJSkuBz47NS1zdh5dQ3qquoSGcpVcbZdaTxn9nsk57BUBi95PQ6BYiVY4Ro3mKvHPvrm",
  "key16": "2icwy4TeHqRgzRB3NRfBs1nckcQ5AytDLUtCwdnwUkdwxGkup2KP4dDa6FREJBKfYw769Bb4izFA3qwSAgELL6F1",
  "key17": "5NURVZGUhaXbuK2L41ZweHN4K453GECTZNpTxQzCrE9rdfq5eHA3TgRbyx3vsS354L1De72i5RtXrgPKbnfKBgmo",
  "key18": "26FyhJapPqpaeLQNyTy7Ma9urDxVe99H4ZwHeysTSdX7BvTqM9eHbYKFwd3VooSzvxBpNCSbUuiguLhRf1MmyWmQ",
  "key19": "2uDgcn5tdvDM1v1ARebWXA6TL9csvaegK4xFSpT7hugiuzgscguvT51b3EcJHK53nZ2F6UXHdQM2grfPDVmf9ib7",
  "key20": "4WmLYiVr1fVfhb2TTU8VLTPu38LVNMDpZ3VE4Rc3uQEQuSeK1fTu9RQfxLjzDsQQA89zqq12RBeqSbZZSFY2uHDj",
  "key21": "2kXXjqnTuG3sWMzTeUQM8yeiYNezoWwkCVtjZGhf2HSgHqJdCpwYnEXWHBNdEx7KCeWfB5LFL9zGYtUoBbPD7M8q",
  "key22": "4ZJYBthCrg4couS2Ssj3Qp44zp1xiuWHZFZThmW1gZG81Xfv2PnFzQbxyLvSWNWNmHNWCYhyi1sZuifuVxbmPUm2",
  "key23": "4ZsdJKG8YP1QA1gCAC5ySXGakrTrFhoFvueNFQL9pkKEoEfXii77p4qhJ2pm84sWKuF3AtJ7G62EVFVmV8wY2jMb",
  "key24": "2a56iKaPxbLKKCMACaD4RKvcs4iM1rGNU2ec9ii4SuhoN5yDZDPJwBfwSnEEqdc3La3ws5gZv9ppdG8HgfMQKEAZ",
  "key25": "52tb5Rrbvoj7hJrhNw23n6SmEns1DQiWneK4wfqzCqHJWPrXSBMKwFCnfqaoN5woTz2G3Ru77QuRqz2S18kptCGX",
  "key26": "4GNTFaKkYQZT5Nf2MNRgjWdszVGQa4Am6kkXTBh8F4i3EZd5iwvV3TpcxHGbHzbzKzNdqkMnK7Z3Vduu1HdD2LHP",
  "key27": "BkxBD86WucLt5dGKKYkTL8sXBaQmvqEkDSYLZusfFEcUDki9fTZpjcTz2H1ZbZ4DCDngoDGnPKZgLCaYzDZytzd",
  "key28": "5nkFp6SP2KZfDyuK8tQLPsebB1yG97GbGx9GSRQTxrMJ4yi5EoAH7GBcM6WaN4K2SK8KkKDYBBeukDBSRN1azZ8a",
  "key29": "5t9vQEiYELWiAtHua16Fn7HdULCSZgxXYDAedAhR6MD8RGZrwsZVCLEZe8F3qkDxQekS4the4W3LvauB34cLzrYF",
  "key30": "sihfuptTtfhX9U1Q6hSN7TFarPeqUrDsPb1c5WLZeUjxHE1RgVjYTLwuQ58cPszvpr4etK9xhhjGW5Mhp2a7dpR",
  "key31": "4UhxgBqPz71kPoyKiVxCij7ydXh8dyPFpSoYaUVNB4aDqPgXZBfPq693eH72b1S29gnUGgUQ7pSk656HaVm5weHw",
  "key32": "5ikM7SbcWZUt1LbxZTPzyBCiYmzXCRMcvbojeQxzYHLFSuS8YgESRGaoE54jMM1G7DJuWEMtancAsSEbXXWqo6tt",
  "key33": "PHeVnFMfZLzJMsGxrtbHHJ9a7vnTeACRmCmg6PUyPtGpA6xgLVJQHppC2GMSL7NmZUfzGiBWM2FpDmUnSfejBao",
  "key34": "29pdPMaqkNZZiHnFKsXa2J8W6EYR8Lz4pydfxQh9K1FPczjvYXLKeoFf8XYd7nzLAh49qr9tBCMr9ZmSuSh4bBE2",
  "key35": "3FonmLaYPNEW2sshxqzCT6x8eALxrfEGVzM5LarDWwbPtPF1ugMfdnYkA91THx3KKPo8JV3M1JtxBRKiLmvVbeJY",
  "key36": "3KTjMfXEyXiFoT7YtdxmUbcR7rMrM2nQTehR1gQuE7cMiE11Pa1R4BSLqjLVLXisZN1A7TBoqU28EoKEuZgFMBtE",
  "key37": "2r7WfgYVtQKSm2SWg9prJhzofzGA3x2StJWUqiBxP4fPw4Ss6rFgST5ubhYJrczNL1k7SeVdGw8fzgNEGLm7tWpK",
  "key38": "5dmxvWDfnbMhhQ9fnr6EPT8SZ88BFW2nu3awEAPMVuSeD9a36do2jLb3r5zj4WQTh55BuqVHLXRPHSoUnc8e5v3R",
  "key39": "DiBzbhC7pFEy6gdWsKBpq6RckQ9k4ayfWoNmcWnJnF93DM7e4trnGqSb9i7HLdFUzqxFxZsdGi6J82Hcqe6ZToJ",
  "key40": "5t18hQeKoGwtwX7fzD4jEUTS7Eqads2Y5LoBJsroj19rKP4s1DiNfwGyzuVShcsVaRT9jVYx6PWcqYfWqxRmyWzs",
  "key41": "jmroSygH6CQfupDoKGNcsUjdKjpGsvhBFpqPj8PtWQ62NiEKkpjTZ1ML7JEX1RHtLRZPzngwvSoyAbDnDj4D1hv",
  "key42": "5JtMoQB4BZq3tbTph2xxv78kbH6wGbyHLD4szjy11ZpZhYjCWf52GqJroNiR54tKpZN8uEnirWrWpXdm4aesfK8h",
  "key43": "348BKLTkM7vL7ypf8JeBRUyiWUut1dd6tA9fnge5QxbkWYEh3kB6xwkjjhiFVkn6Vq57ectrjqJXVVvvtcymbrEE"
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
