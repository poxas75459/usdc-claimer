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
    "25D9SPaAaigqaEHxjaFitUkf5p6bYrP2k4bBQcz7ySE1U8pJSoXeN2Akk6sYJeggfYfjLuc3QpwQahAZftwQRMjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kMCNZ5DpC3TJgCBuyprxMbms6xhiW5ss7mcT4znp53gm7rAi8YYGHfvUQrnP8qb9SnJEwxjHW5nWnBPh12e1zSD",
  "key1": "3uc5CvqDn9FYAeBDfLr2iYzpo3bK6xXrGXN4TfSsYLZcraDtYbFtjmR4uw1jpTTgJbCYxHE7QEekJ2yaZNEqqrEh",
  "key2": "3C7B7gnDNSfzkyZohD2F9pswFC2GZTmw1hAbryyZPit1emweB925kj2GGyhattdFFk8vUmytPMD4KGsJQFuSbBZ4",
  "key3": "2SdgAyXV3j5tcRTM3DGge8ZnapXtZfFpVniZrxKzEgEUUEUdaz9SowfDsB9QkjkSHUDvfTCc4yTyGHKdZ9ah98JT",
  "key4": "8oLMFCBVwxKMJ9wSNp4JxyCXkabjNponvFT1u5NbaXNM6fqSKfiKRyEj5Sd7iM9zMq6J6EjyJKpjBPUK5E2z8sB",
  "key5": "3MXz4KPnd4r8pHeiEzPMBda55VJqKgk5sLo4ZFbaBMMTj2baGxQ9QxrszowHmwr9u61jjEjyGehQJhpBfCgJSj3B",
  "key6": "5TLJMWqF7Z1tDcjfBP97Z8aCnDFjKTVNiPF9a68f2A9rYmEGGvGtfRGyqqP8LxcT1rMDLodhKUtTBauRLWLFEs1z",
  "key7": "38uvRgpisBxeKQsYtKU9ZsK2S6swbxMtsV4zfujT3DRxfDoFhAKBB8psTfywNRZUfGmB1PhvLy8VPUJFhpjH9KMv",
  "key8": "52XrK2Qcr9sV5w4Euc5jU4ZgKSkkKdHVwP6W4AzyFeRY1qpBgRbzJ1SmvB8HJPPA8pCyzWvkPjc5xZUorTeDDshN",
  "key9": "5eGfqt44tEUHZLS3uBR5SCGw29fHhGNpaSyPM9J7RcFY6PT4QmTUWCnza5PV8XQ67dixkNvfukJexfiaDraEpyQJ",
  "key10": "58H5s1Rxr3ext5KW2tv3JPJRWTCsNtwPqgBjKpRYwhHJJfcQjCDmFQPTvYABirTbHpiTYzHKDeAzmuiUJ85kCRFx",
  "key11": "ki2qz6gGVnzzKWJi9MiLZ63vu5G4qJVDseaMkWnNXLKjksyHrSeVFxmzGzs278wNj8p7LVwqcY7kYdyYdEEdhN8",
  "key12": "2JrdDd6dov3E9vGUcxpcjoiMNE86hebLF3ebAFwhZxT9nBNngRoJSJqmFngSR2Vj84J7XJ2CRDwQpoWctwnrAXNi",
  "key13": "3iNreN6z1TUkTwS5vZfZP2RmmSaAdpSUP13zh3NHrLqDbzxZgkiSSfj4KaHqm4U2C8PbVXT7jQnY9p53sGagoHzG",
  "key14": "24TeHf3eHcL5m4C2WqoaCzj89HsQBKm9yf11wpRB15qZ3GvUFr9UPdTD61rVhFfFYQptJUPd4sz9mjiszw7JUb9R",
  "key15": "2yVredAxWTHDyBi1K11DcLf3S2dkdgr9v4rhqpkxSB6fowBCPa1kAwisDj5cB3uKmfQKi42qiJjw71UpEPcWVbUP",
  "key16": "BPnP6FRmP9ixmDnTgNrbxwL8j2tLQJAtdtFH9DC47ikCaUemBdshfiruMPgNPxsE4jXYhQVuhcBcwUWDSFPcHSW",
  "key17": "58QwWzkKSD5yER5zKih2qatAf6KPmQ589FXBsD8ZJDse2t1URMdsMQ414ys1nTibhBMRjbbVoG9uR8eHQyoDtvQW",
  "key18": "4uTxhE4EviBg7nysdQA1YcCYR8iMVWcEZSP7WiykTUxJrdNBJFjrTHJtwqDxxkwxD6aFoKZ5RUyX2dZ75SfgiZ8v",
  "key19": "2nKanXySnJAv825rJDtUjpwocpoQ4W745o9TGqbZTSPDJJR8jxxDjSzA1ck6jN5TLHWFTkDqxfCWPGAWbvuExjFs",
  "key20": "5dKWBf3SHod3DPdnM58LBQaYbctF3TwrNncUkFCoVTa84MgM9W1oiPcVCu2mPVvnupNJTS2QmRS62S14k67R2j9h",
  "key21": "5VJs6RYXiTLjJwb3Nz8B6viSQJogcz7jQyu4oPKatiTh6BaRVpK8n4ivKoQhxb4EVBPtTgcptA3EcA5fAiNyhkG4",
  "key22": "45jaQkZfyLW6qiWKAT7HWeqTE5c1fsZJXKfVMnw3z5U6ETiepuBKTSiK5zfuZPDw3RNa2417KPrPZ1Ze62HnUtNN",
  "key23": "PfgnFgPWdWUncnsnt6yHZqn8MB2tjQ91y9FtGZ7Q3bAMLQdogfwkBGsRs4dKuJt12Xke7MawWsKMQZjsAbrAsuX",
  "key24": "3KMotPFWGHgPznE9GrGpuro11FK2tXiNr9JaiWEFbYvNiXMkABCgQMWe7tsLZL9H37Le5y8k1EuSrhxXJRn1XggG",
  "key25": "2P1D5DUGTSKm2koxCWuQ5crgRmkg6BFgKksqBvcYyAmzm31VR7nSum4YWPJwjFHx2UbQt6RPtgoLkRfT5wbrkJGd",
  "key26": "4w3tqDNPCGmwocAW2PX2dMNrFtEUHxDyXFnVVx1s3MYe7eSkjExnyrUWR51qRZYuBj64wNDg895k4rqaQ7SyLvaU",
  "key27": "4xase8TBazo24nYbrtJbDkofsXw8XbWrQ5AE5e1gYvKdcU8dkJwfb8R9owfztefec7yyea7Mcqrpzo3KVrdzm7qV",
  "key28": "pRVZHyWDNDyXq3Dus6VRyMyVxrxPLKg5SgSY4B3PcBQWrLRFn4DLdJjybGcGmbdjxkmMBgGkDAjPxm38TRGGvVs",
  "key29": "4ZgCPm8jUzZY9CHfFUHf3fHhUbyVShEpx7vsfGM1r35YofzBSDGmky1BevPYi5aeSWBeoPE3Uu16sRGEBsgjFBZV",
  "key30": "4BCcA6myqAaLQWMs3xFtdAQe7TSy8E19mZY5CP6XZLntWtr7tq8vyeRf9shy2KcgrKhyyGpKJvs73TJjZQFtsV5j",
  "key31": "5nCc2QEUbJHUohv9VnQdHyfQVogom4u38wihi6rDWdUgn8QshQ38TTsdNueMB95cp5uWpStZMdiWws2banvMsNQa",
  "key32": "5879B8pzQK4dfnzkYypqzRVyEMegydEnEB6EUdwoWjhYs9CV9dZUdhGjGG6LSpJM4Qi5kHHCkrAjBqPJt4ZY8jxs",
  "key33": "4PtSQXqmZA48rtdBU7MSPLkQekeezuYcqdz9Vc7ccwmtKckcvADs8HYjFJmj4xBpXZKkqvJPKJ8sZCEtvMiK1igL",
  "key34": "2m1XiixjN4a2uTeXab1oMKvQf3FucRNLBvKo1GDvkSTeudzxMJ4Ruc77tvgvK6oGGvs99jnSJiHwv37K3vheabP9",
  "key35": "5GmtXXSSGy1nFw3qxJPPx2yC1uMBSDC4Dwwnwjh7795x57P91zBauErLEry2apGsGgkCnvwaSP6BRZ5tG9oJUuX1",
  "key36": "2sqBZ88Y8ePoYUr2Fyu5iEn6UHYoaY1bie7WXA8cXj2VD1KkeN4MF11bZUzFpYZE9jNufJNALP1jLjTCW4pPdZHe",
  "key37": "5P4nUR6YdzeDKWMCJwFb9GCdpqA8HgJSfn1tXUSpiaWtrKu3S5VTEkGbryV2enHQ4kPXpSqCibVoAJbHfsCHduU9",
  "key38": "3FBzNtsQUGMvs98Hy4Dh2cQz77vDgGdwC7wDTp1tChkM2yfbbKRzWeNwFK9FDDJ9VLrPDKeeiWyRkyv3Pb6v7KCc",
  "key39": "39NDxhSQq1RQ57875iqFayKTt3EDapn6VaYEWEusRhgppQdsLFri3LsPjTQqcsiQFsLZwWi1X4qhR8TmsEV92jSS",
  "key40": "2tBw2vDotZ6uwtmJyArh2R5Jwdq6Q7E393DRujsLHJ6j9R8MMBTayA1xPcZAF9mEZRjWfcVM1VCbzFX5JcFfGhaN",
  "key41": "HZWmy3fBipdvkbeiVdXGidN1m4ndApoQCLJqZhwAK1ksZHvffVkyYyqhSa23L133v13fqPopqaTw7aorWYe8SEB",
  "key42": "4T6zjg5czbV8e6uYaYr2eTbdZ89RG6nyYy7h14c634sZ6aTWqegAQ9epy89xnRPahbFPKmtjQgxKBonaVm8aKJn7",
  "key43": "4rYc34vcNBesseif4CZpcpCV56mQ2byuWEeY4p1ipbvPHCpgSgypdFzHdLix4zJ9TtZ12eTytTzuq2Y1NWwvXEMe",
  "key44": "3WPzZFbaZ8edkhwTDtC73HdqqorgmLZeK2vrHsLnHcmFXNzdEg6QLpZfAKUujaHjsdNJ7zv1MxgKZ2uNqwztTsfx",
  "key45": "Y5PsfQL6q7bb3AUnVva91q7PhmNtHQGf6sTAPJvZnj2Vc4zQFQcztVwrcQmxPho4sEbVLmevvo7DTRkuhbq1AoW",
  "key46": "Uu62N8CZaZTh8BNhHVxVXZ2iDP7xMUvNJ5evjeP9xygan4tCUQmDkXjeULhjwoYh28wgRuu8uT1JMqANpAYBdZW",
  "key47": "3dXnrhbdPNQhiN3DvzSmdw9XFfNcU7rZV9Dcj5aVjw6qQuLKS3pkeKb1SajpgzYjfZoVfrMFo8dNsheY2FJvD2S"
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
