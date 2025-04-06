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
    "3ZsbPmccETLMD3TPw1cpKJEiX7ymv8FxD66sV1hiX6pMWEP4No8wyBBsN9uyR7DxTqZaxVemn7eoQHUyD1RzFYd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jXdNoNQtaLCEWHZ8y4AU3zJnxvAGBNVbnHAMxAxYNJRS4a12rGHXgoqETArfN3SfypyHHH9YtvZ64ALaTSWRk3L",
  "key1": "Gandt15SevcfLJhtohSMqu9VJb7oVxZzkh9vsHNk7ZLQYCEUNiUEFPt1j8CKEUgtubke4qYBHWNs6juew6E4V7A",
  "key2": "2sJkjAukbxsq3pK84zr6CDpgMknd5ssunRzdcnYJDpRgsg2rHwv2isFzxM7MewD1zCHqaL9HJ7fdmEWxYGEYT9zw",
  "key3": "5MRz6o5HBshS2CNjDdmesGaiutvYEDYBJkiovmbfKjMiiYvGJbnXSuenXvXgkqZuon1ASoQapqxHjU14b3R9LHBq",
  "key4": "29bupdRCrkxgNMbup7RoKoorTbMw46juQvCZuHdKCD1hAQyJGW58613QrLWq7AgJiwwz5MSz1H8bNt4Now3sKo9c",
  "key5": "3CDSoA2Lt1AKNM3dwTQDvsoFT2uiUcXNZmnLbVHGgD1UpMgwdAV33o1EuFpWCdqrnSqmWMHSvKMuXaZwdSQKgXCc",
  "key6": "56nPF6fe5vwjER7XHbA8BMp8ZBjJ8pAFmMKHQwPv8Gx5UmQTPZLFPDd1iuSUWNZNrwswGMQfXH2v2zZJxJnekGUS",
  "key7": "4Nsma7HwhyyTGGZQb7QFk2MabWhBctS9tZsNqENRrjtzyL2BUwcxd9nRqXX2MW1CRqRtMsHzoKRmgn8MUxbePBRQ",
  "key8": "v3BfT2fxHB4ZnVLAMR6uCkDmC9qZMVFEw5CVQbUibqFMSmJKfWDXU2zzcSM5B43ZmNebxxFwGhAUZj7ntA1bJRU",
  "key9": "DuQ2fHbyDneEE1mq5Gz7joacfn5F9j82DbpLjyw79YPttuHpqGrACpHjKZyTj9MEUMpGox4vTzazFkjkpKq3EEc",
  "key10": "ej8JGQ98sxd9yWJ18yei1etoyLKYBCVcURN6T3QUiuavYD9o9AGY944RYubZLa9Hzqgn8FbJB8QvWucRRb3DtDq",
  "key11": "4ZusmqTeKVnwgxXBQC22ATP9rCYkETojSPx5K658tZq4vkkADpS2DU2mPuvFD3HZ7zGBAmtqxYAz8AFB8uvHoPUu",
  "key12": "2Mj1jfNNU8pTL6yFvaemobp5oGYSYQVvFjpuYuJ8CKmSqnShitC8Hqe2iazzxcFkamdxBfDXffh2gCCLkvV6sW3x",
  "key13": "3nuwmdNrzcfTFhFwao7PR1L6a4i7j4YV8FsA1BFgLDnX21VXeJnsYjfHpipbovf7XPBhKnqiPVMk77gybsJh5SXq",
  "key14": "3v3ivtqNbwJg36Ush87HYRKmP5Pxh43Mz133oRvDG1TY1zB7aZCndQnv1j2iMeFVSxSXhYsZpJtQNYw6CWHWF4p3",
  "key15": "471pVK5VRzu3Pyzjyg4xjT6sXEEF5o5i2MopPKbigpm1LYn6rGBbvGRekNjA4RdoUs3e3v4gN1tUvVDfPN8SiDYU",
  "key16": "2qaDD74fbatqSLPsFghycMitBPg6painEyohwoqTgwFBcQAsmRV1oRkVyVEn2vMYFRzVWRANbFuC2Kwdb9SMTXJa",
  "key17": "52CGrnPYdCxmkheNMUMsmSg5ea8FS3aKaRGiskLB4rMKSTcwscyJkuQdEqLwbz5YC6KhWmCLW6z4VK9eXUoJw4Vz",
  "key18": "65xq6W4LRP39A4pCRVaQdHEjUJ4V9suqe5oLXhVpEXhnEAbZzZmMrfmqfVg2vKXKzbkC7VCUct7o7jWw3UQ9hcud",
  "key19": "2cL1Rh1sWk3LESeavPgiLrrLEVnyc6dCpa2Pq1HxUXxcHAwu1ndaAybNVqrQhp2646D7skeWkqN8mjUNT2WXc8xU",
  "key20": "5sfpe3YbLKbNubrCbxW7en2Z2TXXvx4J5woCLRD9rz5FoLNpBUDHRJCoZfZ6waAm486hmwYqSTmXYPbfmCX9Wm1C",
  "key21": "4MvwMU8n44Ka1nNtFPffKCNhPDSsVDUmWwZFpCtscn2bu4dy8rEH2Dy7gMEWx64Kd5EGGfXQfxgjWaU8siZsr8Fz",
  "key22": "4F13Epw6nG2SrbAuwzohGuezzGRvkYXr43jBLybrND9L3XiE6ToKmp9C6VUpvryPRxvUnd5VWFBKYQTXz1XTGsfz",
  "key23": "2PfC8k4NGxAUBiRU7eKmVG8cJof5W2is8xASeNHap446CpjVMJu3wR9QgT9J321YHcxzR1RemNUFKpCDUt4mFyq7",
  "key24": "2Au9bmhCngVJtbqCdgnoqPHqYBPdgC8nGabCy5tn8Pd4tJm5Z3qjLn3onKqovap7UnZzPnVyJFmgEv1oon1cN53B",
  "key25": "3Ww4hjhjkaEUUZa5fffpjb19uyfwAxTghAthaGwG869HqndKEo8XhghibZM2b5rkL1KrT4T7v3VayzER2p68wJM4",
  "key26": "3QGwqzxZeVEepKHTgh9ZYfQWwGuXqRiJib6ijM1T5emVSpzDFgjJs8nRXk22zd2tH9TigeeFWnYmjDWjqwxySsn9",
  "key27": "2WVV2VZCeJQJeQqLn9qpKZjTtUfVrsUxzALCJajQ3ha8Ekb5Egn2aRLtK1EVhKH4oayr8eC4dLx6FZ1KP7nvuQEM",
  "key28": "42BfvKrm3JnULm2AfVGc2nm531XzuMV5mKJiny5wugLBpbJAasDF8XJWesz4kKXK8djQKpcn8ZvL54gF6ogyKqWR",
  "key29": "3QT5UiN8Red67LPLAkXDbZnuUPoWzLaoFytiMPHzcScgDdUxtQhD37B37xo7uwG1waLqszz7B6dxNLTs3XaGKxXr",
  "key30": "2H6UFLRfCvbwL9X9vPWaz8FzNYmQYjFB3QjjnYeomBc1SeN73nafL7xuJCvAptoUFHfd8W9kWZUatZVEtYU6vwk3",
  "key31": "2PGQ5NzrAaFWWRV3v3pt8o5TaU1EM36ajvopYHSwMv29wpbjJrcEvCxKLc5NhdEG56fw3y8JroEk2t7CPb4EHgDA",
  "key32": "FK2m5kNq4uL2CapzaSHBWHQvY7aTtubDrxSzMzWd3DkCpkEsmmACCcS5ish1xJR7MCUi7DRTycBhdBimCBGMGtG",
  "key33": "4DKRfZE2Dy5y6AnJbUiaNue3AJ6VfkQk3BCVEYeGtPviYEQRb4Y2zhwdB1fERmUiuASpaCkqherhvSpj59W6t7vw",
  "key34": "3yM2ichBNcLNxhVUwK1HW6f99HqhL6ATpPUawtQg6tn7z2cS6voFt2ZcUsxFJ199T298J5ysreeENovthWHxypcL",
  "key35": "3B95XSpY4G6eCM1kn3KUfk6oRScWjc9ZtXXLC6N5gNfrrEHrvVW4jWixQJp2Hx1QpvP3eagaTqfyjJ5hJExd1dSi",
  "key36": "NfacTETCRo7sffewA23n2VnpwR1pYSNV3QC1fM1C4V96Yc5nXoEjfduKQsJc4BbWtHmPLK2mh2wrS4HfYcgB8Pf",
  "key37": "4Q68YE5ZaiskKbzUE7bBxkQrwWr3n87ii6kqwDm5yHjY5h43ePWQZi8za4FdRVWtuJT3FWTR3LrQJKdhf9gFASB3",
  "key38": "32D5a63ybbqJxwe7arf4hiTC9mFJ7DqrDpNGHy2X9j3ivuwomBPUaJCvBQE965x9uPATGGPUxkSUYw97ZoePAmaE",
  "key39": "3MQUruhRBr3jZhmCA2R8suGyhG425yXMSZ6HMzYZnqLiKjgVjE6zY127M17692aGVRN26vbFeku4gaYduou62o9T",
  "key40": "aTXssFXpEwwBBHcbBbKgfesKHoSayFsDeEY5jcSRXMX4yk57JwXTqTyPJEi2x3J42uFuNWxW3qiPY2MzM1uEQmx",
  "key41": "31Se4bwUFHKE3RbhwtTpwGLSVowsVu9pnk6BPcD1DLFrMwmA9eXe3yLRyyhJtVwU92tNvd6VghS29WHJikdSY2DQ",
  "key42": "2rkHRgpDKRc5SB7dWGmbZa2aTHvgrgpzCVS5kEGU3vUPd3X5ZxhFvaUGgVVLVXQbp8YN8MrZdDB8GUQPjWpBYZLx",
  "key43": "57jUARwqUFwRbzqq5Esei61D78dxG89GYwG6P2eaS3htrX6QKnQdbuoczimGJq7DuKQw8wjGketCHggF88UKsTFQ",
  "key44": "3Hyju2edeQDhJejRaygwwHupR8L4eAVP23BG4NPqBfXXSdXUDpPqSLrGLJ2NouZCghYHNhNenYmqHLVGLngYhm4D",
  "key45": "57K8vvRtJVb916Li1pGjnpsahmvZ3KQn23MxSnqqTtQuedn1KpuJHNbxyswCxnxideFAGpJUgHdT7Uz8s1nMYE7n"
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
