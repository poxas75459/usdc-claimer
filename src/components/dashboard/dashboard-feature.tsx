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
    "3fA5n575ANrZXKNJxmhfyqb1jb6P2946FLgRC1Y1d4k1xfztp8vsxVm4tbj3Xjz5AdiAEgEetVZBDqpZqVrU42X9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gtYr2yGhEB5RjEU9YV8rGexaxAh6e8cxzh2XEzQz6ZRj3pV2wB5xMSyui6juUqHp8SzMkmF3B7i4YGRq54CvqwX",
  "key1": "4ewqYGAUwq6vi4WSQoDVyTiohfyhRF4ak8dCFWhhgKtpUc4orSv32QEb4Vb48RwdEhdntkWtkZiJf2a8CthXuwF6",
  "key2": "4MB9F5Phzx4uowYFi3gZ5iCy5e7rYaihPc4HLxSZhn2sQXNR8wgV6DBb746W9xhWiyGQjECRQBVHLCNr1xfD8jMS",
  "key3": "4Ptu196YpJu9FpQsZD1Y9QfjGLBGyDeLkvM4sTDnS5EJrrk3w5t7uc76pn9HeRHBYjn9afJxmeAsU1b9r1F4JthM",
  "key4": "57D1K6utgJ9XHMcDHjafyxJCtAJiLaK2w39G2P7SXhqkfUwWWQjhgZ6wPbk7fjWgmpeT3RhLd8UuqW6hxvFcsBZx",
  "key5": "4KCK1poFzmAsB5kmYNjG9yeGLKG2EbXe7WEZp5cQkwCsYxThKiS31z1AaNc53S8cWZtcoQ2Qsh1gVV33d7As946e",
  "key6": "XnChZPFBDbSbZY3m5k6CCX5czXHhQsymXcNyc7ZvwoYvHmz23ugyHsoxLpApMv4QQq7mpumqTAWDqJbtUSFKNTB",
  "key7": "3XQ244sW6bfabxXepe7PWAsdNqTvPp6UY9idCdgpERc69XvMzoQuni3nbFBfwCcoPEFNLsU6LpUU4RAgh2Brpes6",
  "key8": "4WKWgqyFYYtPNXrHvYxcffERqpoNkcuQDgWQVMwNoTVcgHpxSt3F7iwxkWTxakkhnP3hgqMrjvkSCSic4zV35wSr",
  "key9": "6yqRw2jcSNvpF2rpdCvq4FVdqAmUXduToaYcKT3qSzwFRqgNs9PyYWv5XaXCKKaqy9XPk1TDFaDP6ajyyws6AJu",
  "key10": "4rAuKuTjY7ijqy68AF3PZjZTQA88Md5oK6MwcZJevf2wtb4NKL2y41uvpBzD4yTW3qmBBUT1zizT6TV2NqsUxwHn",
  "key11": "5Jp9cGXDXuD4cfLZb8e9EY3cTPN69JxsBWdLsYhN54nbmgiFjnAQah1XRmZxWrR6S5BQxQUkgu3dmpD3XrvVtanh",
  "key12": "5DLyjKcY6MrqrSUAetZJ2ifDXbCQhqLNuzFmxAANZfaX6TetD4WDrBXC7HYgpbycoFYiPoW9T4MEZ8rcP9L4bf9B",
  "key13": "2HxrGhV48EvsEU24cfiiR2peAx7MAhXdNkUFDRNVhSXK58EW2fziqDcbjKmrwKqeyRrbyAEeACnU8G1UGBDhFkB6",
  "key14": "2uoRMeH4ZavT24EQ34hKFE7AYWiLtKov4W3iebQ3GB6L2o3rX3w8a3aFVfAUzeAdiE1emcJqz6y7yBYXiUPbmfAf",
  "key15": "3ENxCrnrSDeVQYmYX73zQ5wTau15q1Fzy21ruoSB5ZAuy4j4JBa6THn4khK541UTNzMC4wMqr97buuRKCL2oRA4J",
  "key16": "4M9HFS4geAEkibDKovop4f5nx1jQTP6uQ7xb1QNN7eEzks29xsbuB4ecd36JwMtZx6hcbEL9MiLx7hvwVAbfsTD1",
  "key17": "5W4pwncRj8vXhCZa9EUcborBX9yqBcueonYoXq2sDRQZxAH9idf5vhvgf9ARE3WK6KW9ZT8uoQeyQB6PA6YHkLai",
  "key18": "r86dTokSQEwdWWGaB3y1JYtq6oUKKtESxN3fQuUDuLEoXJV39e8vX9tAiHmtrL9QMiukL5KGdKnH2nhMLHeBWC2",
  "key19": "2GfeQXYYGBcfGkNv3rhPZ6fJYziWyoxR1DDcUmNu8fB4MzsS52h91iF6jKsqD4ggjXDejjDwiQR3wMRb4yRE3kSU",
  "key20": "5DYPAovns44X6JZQ2wqaaS28xnUj7wkrxdepm2fd7FbkQQJBraqRcNJtx9BgQtCbDURfsANvuDJrbNRsgCNRtNLp",
  "key21": "ZdpqxLy36p3VNyueUJQkEz5bxttrbP9f4RgU4sR2dpB3PZJkPvwnLMStoBFcxYx6uDA6yytjkG8ZbR5WefnFjtr",
  "key22": "3PZEoQjq2hpUWGKARWtHbQt469QWpr8fxWTBqaYq2GfpAYmFgsDfEbxG8EwMXGwLNPwfnVZ78JGUHz1DbLZgKPVd",
  "key23": "2tGHmMhaVa9eJgeYAcKtdvH73r4fsZQ6Auhr1PMvKJrSKr4VHmCxuxKhpCxTsPTu2zcRdEXEW2ZnWdhXu3rAXaYQ",
  "key24": "5WuVZ5vptiEg9Whcw13WdooWTRidfzK5vgdkiVpTPQ94FZ9ML3msLcd7i8gDchwtBccrGKoVyzKM8Xa6ndJ5UiDq",
  "key25": "4u6t2DKW47iq8mmHexLL42Jm3kvN1Y6d3cUBpNTRVukz2Hnq9fKHkAwAfrkKteCbixsFwydqiQCR12CW8HYd5r4F",
  "key26": "3KoCZ6KCnHmWwXqN5tkJh2xLDxc5J5SVRXaA3yf98G1ScZw1ood4TALJ655wuUCJdFvBnzqFxyg3aPoTgyQanJrW",
  "key27": "4MHpxfkeq4p6WecEfbyN3CjbHjX3XUHMrbLeNAoMNFhSPmf3rGbvXCSgSNYS2C6aixiCUtNX69XDobs3uXJ81BYT",
  "key28": "5ttWAUjxSzVLd9qxhqwKyaY6ikvoW22CTDXMMqgeYzUszztUZrUDruecy9Nh7PihRU9fb5MzaunAu3UjArNAmqub",
  "key29": "3eatgfSdSJZVGUR9SMEnUzUMFh1jPHFoRgXxmopgU24336F6CCyCbYj51U1vh4YFkqNE7ky82EfgKnbtanM8L8LN",
  "key30": "3VGWrp4BPXrtv4kVccLDtywb3tXwRmEz7k54RM9RqJqPpxEwxNnt6M3obUYFBSmJi1XrNsttWPgpMeqUhxi9iqZM",
  "key31": "2BuN6sHoUxdp92HubbyEY8wDYCqNtHPQ8GnAbLYDe3aXb1QvYUeuuZVUL8aW8aKKUH9cJsmu8GADsbgbWSBLF7TK",
  "key32": "62fgFhZP29TAfe29L9WXjipf3sBz3Cbb7o1j4YDVekXogFmSqZqvFtdiP1PXdFLkQsVLay8mbBQMMH4CUP1Z7WTe",
  "key33": "4i63tgDtKSk9KduQWre2NpesEbYTcD9tbL9jTtfaZZj6d4fLSaevJWCBaXbwdEqNoQteoB21R8hyLk66oxG6aVdB",
  "key34": "3uUofum1hSanJk55dd6KLKJUUW2K8GNaQqzFSFBFdczngxj3CtzDVfXUV4fsEwtvRsUXx7oNhswdCNwjwVPtgsrN",
  "key35": "26eMkGRSybacZneLLw48YUVyYBehmJkccVtXSgtcSZnmSWjxaLmER1xQX7DC4c8N599CkTVYcjq3ra3yNHCVkSUg",
  "key36": "2Msktr5rJwtnonbsq5xndP6cBbJLoDW7Ta7Htdrw4HsN554Skxhb9xDK8FbujxiLzFK9muCQCJYKJmQ15TvoW1Pm",
  "key37": "yZUrF8Ui9g8i6bXEP5e8e3EjPxhjd95vzZrTdHHWpiexERFENSw7D5RDc2URm6wX8DHD4YAWkcHyRFKHKtWyYph",
  "key38": "2FYVg3Q9hNNyjbLWWroZ2e13XhsFE2VMMMTJgGt2d4oSRjgtmfwvSxg3fu7p1omEFuHdHZJG5JoDs6LP8avDWKP1",
  "key39": "3iKYvPEvoWCH3nYS8BQJRbasAXZb3BWLEx9U24NHMawmoXRVyCp2ZHUhfLu5a3T5HWsnKn5vip26qKQ9SHzqDRod",
  "key40": "5u2qoTfJHG6hAWsFfR3bCNmBGVj6mL9G1unmJruhBkXpKHUXoRMRNViaanqnnHmsGFtnF9h6Wh1aRCfsj2grLsc7",
  "key41": "27RtqxAwvfewHYpH4EaQKzUHrsXJrx2S415ANqGQhtdD1nGXBHueBUscccKVKZxFSwqrpakmRphXX32mPBsMuLU3",
  "key42": "565ubjTdGoVQK8D6XRKJbyndwxWeKJnoRhjk11EQjySbt33GWa2PUbwqKzxdM9BA4GFviz4tR9kwa9YrRkDkFS1L",
  "key43": "56jYpcBEp5s5TUioYtfWaW9U68xg1iVRyQkaTCBTEWcMiHXTfJX4rkfdEREU92dv7s5qCdAYK8p9RpRYeU7J8xmb",
  "key44": "3og3AnT5NMevB6GtVAM7Ja9siewLbyLrbvQitBNdmmaPUNJ3upnaYi6M3VX7HVe1fq5EgipvYeuS6ni34RzQwYzw",
  "key45": "2ZF3isC68QGfqTHHFZcJGRbTdNw4TeNUDNwXEayW4GG5uxtKAvrwM43ZdcsK2Lz5aK6gUZXSgYWVEKeM5NxNY1VR",
  "key46": "45g6Rhwxx1ur9SxU1ApuvRUXjib3T4s7X7HD6TrEyFUpVZEY3Xx7GC7q4E8UaQhCnb5HktPwzxj7k31DqnHW5iVR",
  "key47": "3MzJAGxEjEvJHu2cBibTzMfNGSQFN5WpQDR2La4ut3XUaq2AwUR3jR6T7F2zAXMi72XjaXGW8iWmTEka2rcXciZn",
  "key48": "3TRtoa149rmt46aZS4UainNuEyGJLfBrquiuqLdHLQ9MyCyXw4cAbQkBjtrRuKKrsPYarxB2J1DBkG5d9sygjhQr",
  "key49": "2Sc5YC3saM7uLMHs67umGUNe8Mvme4jvYbxdf6Nzi5DfzMsD3LBegBP4CVj626pC4rPBJ4UiwwNdPShoa1XknUk7"
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
