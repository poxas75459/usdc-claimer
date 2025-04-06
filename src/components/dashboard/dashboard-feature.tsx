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
    "4obvEBnZwXdri95ntAZRFqEPiBn1Pkt8As3grz2eukwJ9UaheagQNHBbj1dd1TJQJPhKcaqMerwaA6RwH4dJMYTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u1bHwYMMGpYbWZTETtpfsPYdhhz4y2jrZUfJXUfcbXPod6BNUvu3dHqKLrjR3TFcUdHZQVz5s8f3yw4shHfddZ4",
  "key1": "422cdaFPf83AGhQskBGkH2uFjUuPxsXkV4UQqdsfH91dQaNtjRikmzeUAXcQzEZcrotkf9oMzPRXJ1R9kevVcoR4",
  "key2": "5SCMv8QFTMPnMtHnsPSaxjfy1bE8P9QRE8QikXmZeFmrnkMkEjn21y722yFQv9jZbA6NSg6RGY267Hn7fMLqfLyv",
  "key3": "3b4dbCCw6ZycjcjdcDQox3FLyVcSV54fKRsQyoQP7akz1nKo2vjxNW2GU2x7Moiw1QEtLogRTunHfw4eHTRRLJwg",
  "key4": "5GqkQwqsXKJT9Leq4YRQWwRezHtBUmWB22t5R8vMZ7tFSz2vbo5RwsWfjuBFKQhQQAGBcTbtJGaKtWk1Wg1HiPwE",
  "key5": "qP1pWwDc3BRtCtdrQc2BJyDyPR4C5mYTUqATroB4QETExc7r7yaKBmNtMm7VQnKZFNrpooYCkRwpa1stEtRLCss",
  "key6": "4LnWAZnUbpCcfATry6hpMGAE3gY93a2HQ2FbKZgTJGgdgw5UgCqbchnztjmasiiXYVC7QrmSWoWXFSgbAnrExpg5",
  "key7": "2r6QtxwMYZ7GCpN8pLZQfvtwm4ijooZ68H2KRoZ4fSATVxWGUztyYuyJMx1bbGApKAnKCTjbwb9QozbAoqfXKqhP",
  "key8": "WwMYMLEFvS6Wa5nmjUzvuZ8ouZNdRiWfBbL233zadUWX4nSE8VKmtH2KkRXioKox4qTYdZJVxAEApkTwUdcvQ2r",
  "key9": "2Ja9u6Yi4pMmmSbUz5hsZmZsqc1CeYMzDYzx6EHY322YRRJXdLpgnV2ZfULPxLvQseYfthepbDGAPSg7apkFrKrn",
  "key10": "5yJ3oDkHyQu2jW65ictGrvGSzXqDG3vaGnYuZK6KX4sv8wV9a2wbdD7HwSxsJeiBq5a4TUhVrGJQPwFM7Hzszf7c",
  "key11": "3P8db4K79w9LnEUPkG6nd2augcpcUGsM6QiVWPz3daLg1tyw8MS2X3tXUpy3P8PPKJ5rsQLoXL1hfEaFo3TH9Y7r",
  "key12": "3XraLE7NVAQpVcj9CHQxSdd9ApLr7fic2ba1yRkrZKmFCzJjXnWocgqVszqokyFu8nepYe9aKdiE9epo9cs7c3A1",
  "key13": "YoQaDH7z54au9MsqZ6bbsvFFzy7vqfbMoRAaqSsxPeEfBfsFK7UoJD1wQXr6hpMowPE6MwWar984BTs7vq6Z4jQ",
  "key14": "3tA9ePMESHiTTazna1Enji5PtBZZXyXPRxZxKzNiDVwGSewhn5uT57TGdiZCx662VScyPus9RKtxAQQ6PfTpn9EH",
  "key15": "3tWEZGnjxytxTPzN1oysMRtScujditWUEHKXeDMuVCNiKwZztosCEZ74BGBKQqMxSGzmCAspz9txk2hiQwuag24a",
  "key16": "3NAWiGzsjRhLXQSKuJSmfRBdPdm1UwunQLCfnD8FiyctNS5AGWB7szSmu4u92YY3K54gjtAYjQwN64aVZPRCkLaG",
  "key17": "4RSf9SUdY5ecut4r952XXQG4yU5at5j34QWRiQBTE6PnVvM6BnNiyVfePmop8NVsoHsbkqdKK6Sak2LJSKFdcan6",
  "key18": "5UbyboFgnZiNvPkcboUGFU7Ak4BJxcYYFb6dLm5gnT8vsJqYCsWSfY33MYsz4XQtwRUcV1ma8KdZa3dhhs9qwTUv",
  "key19": "4fREyP2E3voPuptnZqjVuahzoZ2mPsrcy38qH8KDqpVF2zbc9GWYkm8nFdtdM37Tc8DPiy9Edq8tk26HT42hJgjz",
  "key20": "25rSZWcawpcMXQhCjSKfxgZCu5wnnpjRsnaPbo2DZANmNQQL4zKTYVYxn9k5LCKDE75zETvMh5bDdis7r36sHnX8",
  "key21": "GG51aVhaXk8QsCPuoHa9rmqJrvGiJCcVtMZBUg2zQCuvaH2j7buGu3oMh95MFynjKiQzV6STuq2CCfb8xDW2xDM",
  "key22": "4Y8n5A3VtzF9EftBCVbyUwSg8JFhegZgA9KFa6XZYsqZgvG57U83c9xjdniV5bqkiw2RR1sr5RQmm7fUgBSwqtBW",
  "key23": "3u5wLz4ow4b6L6z19L3YdayAW4mT55VqL1sZ3YxjK6a4Cmcz9mG2gPBUxkKRUYJRXkNrHDUHvMsvaNRTEvKLsPyT",
  "key24": "2L2FxWJxTXZwUBja9yYZScFKhVCQbvooFxgw74RAdwtW7Qpn2pUSje1Rcn4twGp8ijisaPMYMU8r2rgvnpACsbZR",
  "key25": "R1Wqb6YxQGuUppqC4P8oR9LSpoHXfdeJMxpgxrbYyGAw4g8a8adxnkx18XEYBpyHEHNpnDKJThPCHK8ptCoMh9S",
  "key26": "3zJHRf7BL9VKfaS7gKusAcKcDuu86k7fMB4A9RmC1wBrmBePKCj4oYQqCpDcWCfKqgtAigw7wYYHzDBvvigGpfRd",
  "key27": "5p1VMVJL5d1d9UdSxXtbeNyrC5DFo6oF2of8w3X9miMa9h9ZRJSpRHpzV5t57XStuvjA6RzuwiZtvALZxrenPLHm",
  "key28": "4QtH89nNreKVUdAMKiz6BpBEBk4fa2WBeZ4uutjgmmjXS8MYMzhEE7wL7upY1JEEtr18Y7UufMakM4bbtUiUGpzk",
  "key29": "5fdyiPZC7oQT5dUBARPshPN5NPYiWgPxm3QATBDmWcGHtDeK5PmrttLs2aHdHYDhvmdaFbFzMrnQj9PQovRqwXm7",
  "key30": "62PsfApeeRRzf11pJHr5qtzB75bXZoPbsUFpGjx4G4AKNMCnDbY5Yrshsm7hwYnvbeeE4sn9zq4vvXGL5hztRpGS",
  "key31": "55EcSr49th9zmB76RGF96bqRssnaxRf13ExWgHwEG6DFBByzSyJde8orM2rMMjdtUPpZbANG5B5CNPiWtLK1Z4fe",
  "key32": "555yA3JuwMbWgw1wcrnD9bj4MVE8umVGEyP96pX76SipxXL47rFg5HMo45P1HPeqfrBbJnJ1nybKFV8ckkaucwPZ",
  "key33": "4772kHqV9SMsJHRuS8QKhW4BLbXmYsB7BX5gmk4DNY5MJEtQzD8vVGYhoMvg2qjSQ48LDd8S4W96MXRZj8iENamA",
  "key34": "3SsTed9Rkhf7A2k8JrPvhmAAxAAjEL2sYrjcKXWWEoxANLdG3Z9igGVSKR1ytZp9CHBKApoLxKYAMnjKfjRj8Vdp",
  "key35": "2zV3NPDDgsTbsLszjL2j3nmx1zFVVXvPrfxbaayTBR2ChRxeJSS9uxaJXpMpaUTMWsimp5vuMQxaQLTkhh1MTXmn",
  "key36": "WucFMeMNpQ5NKgbZp6Adogtgg9c5tcWYVcc8cUibSeArKeDQBhEMTERgK8g7xyLGb6kTRMC4DviAr4871YXnTw5",
  "key37": "3hhDaFYXBsRr8b79QqMkroVKYvPJnHEVVXd5VSWgJq72Pxe2Ru52tePUymfx4r2BGkiaqfNzTNtL5qjfSQsdVr3m",
  "key38": "3Qqggsh2bWQpdNtorGLGbZxb6QKeybC3iFME24WNSTJp3BrYAEejit8riB4z2itGqXUhLuFBLmqH4t2876L6o38p",
  "key39": "2Cv78AgSxsPGD8YwVu4NkdHUNwVxDBhWQRmJK7CNNu1RMU41qegLjYfXnZiWPkKEcoauZDxd8LhikvoqyoAbbUWY",
  "key40": "5EPtD8Vw1nqt1eCjbj1p9j7uo1e58uYoHhi8QFTdqCm9s4s8qwqepYMypLCnZKMLXCEkcFqt5GmJa8L1JMmHtemS",
  "key41": "66h8uQ6jFVJxbFA2SuXaXEkGrqRAX13uauLvhwbwLApuj9G2GjF1jRVs32yNJmi2UwszYQ7Xdx6xDvUGg9sUWgpC",
  "key42": "2erGJBQovEADXZ6bKjUkBiX74P4UNejzCS1vPCmxVn9JzUuPUoM7ySodfNYQCduALxuAUD2hw3M9jB8Fh8XWYeWy",
  "key43": "4Q7e1Df58WDzy95hV1n2ZHbu4SESMRiE6Nb4UrkTFaoxvnqmc4FFZDPyErr86G4uUFExXjFNze42GDjwNqr9mk7c",
  "key44": "4R4o8rHFkbL4V4ym6UKAinomBrz8kdgE9xYciADgu8mT1KxkKhpyTy2ncgR4Y9MDYK5qi9iQs8igJZjgV5tzEqza",
  "key45": "5Aj3FN7JRYa7gHSGm6qwByaV2AsqYiS9XeLPWdSsxpzcZLaYLZJkYzGHiy9SWR4bmZfY9QmjPnXKV6K6TEgiHRgT",
  "key46": "4FKGPtpy3SdffR4T6dTDUrCwaqomFzPKi5BB8jEtyFY2eVDWuEhoEPvZstWH5LKXRbGgEKPX3qaP9PqFp96ho89b",
  "key47": "2F2jEJcyXga3Ecru1aVS8Axdh6wT73JzJZiQSp5UuW2kMNHeAJMhWdF4GTZ6CJY5DFd2ddS4MEXTZ3W56SGk1XFt",
  "key48": "3QKfG8pnJ8b3srPA6RTfeLymE6mWb475q86vJ7DS7rRFTUhCtoBStBhtWwi1owMnoGzqkynGo9VtsdMmczaK3AqG",
  "key49": "a6Q9Y6C7ZVHYNL93qa5tVinhjDXXQrG5dcHZzvpTdgVXtNHbcjw32astBSX5yt8irumeAq219VybQj5xuNbsQnw"
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
