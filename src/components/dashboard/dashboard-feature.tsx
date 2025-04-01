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
    "jHRvqyyaTvdoouxdiJnPNUQQUdoQT4rsUDe3KLWBik1gBvHqGuCSevRzHxdHkGw6UbCMu9cxb1ri4arn9EJjRfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rccV438m2MGQSGjMm5wj3ubi7xwUBbAg1jcBgM4XMR2efupBykxwhyD5x93QzhUmtvLxQmERJB7g3xrW9J2eyUo",
  "key1": "5Gc21mRPKKdPafbsejD2pSYWFgaAqieJKDqJZPDdLHMkjpJ6rrhPCW743XpJLq5LS5QZYavVC1rTbzL959Pkum7x",
  "key2": "4pSxaTYYfMwfaNrNgDzekNgrPXooowatL7sRhnmaHS46emKtnYXvmRQANiHRR62yUv3cmhtshNS7NAEpPJBrcZ87",
  "key3": "3snRfym7Z9FKkiH3cvpEKSAMFtYhmoLEUmSTPCss1EfVdxyvfLVVGLhuQ9YgmCTJBGxmS66nPyqEQVNmyDNvLEe6",
  "key4": "5bW4h2qRn31CGYWDwLmb5xPhNx3oiEWwLqdnV9WpwydKTcruPW2SXWoxg6jN8v1RU3xeETdukSedQAJQFgqpQTWQ",
  "key5": "5Bqdz6QCPDeFuDjvhaJzbgyaYVhDidrS4577PzXJo4Ngs5DBDYeYqDssxzTUnsSh7PqtqATdqBYnVLXRAWGVpyMT",
  "key6": "998J8vf4k9xtuib7uJiinJTRoEL4irohz12g24dEGwACH6MVo65QHzFZwnEUKxzususNaP5ky5mZigRVCxRSBx4",
  "key7": "55p53KiXQSJwxM9asiDQDSYPVJiv9XDCfjqV1fETxSTrW2hA7ugfcthZwpGvBVa4oU2YEGpGZuCPLuN8NxKpLAcx",
  "key8": "3YKg7aqj8QWv7TVNWBii3sDEG4ZHkpHL9hVVQcnJFmC4ijBckEHKRVtnrEwj8eWQKcWAuqwcWBFZrfcyBR1WeMKk",
  "key9": "3oZvZwaq8qdYq8iWVDirZmEhfhiEqjdrERFyHg33BS96VPDqrJx42r5Am2iaQjiU6q4xTAxjWijWHArMJkj85tBy",
  "key10": "4KmxBzUsSuoNExuS9P9vD9HuwdvGuFCzqqBkasKHWF9uMg2e6rbjKiQGFkzdMTKRkBKKuSGLSLPyS974dvm1WRXQ",
  "key11": "34u1iiuCrKAAGZebVV9ipuTh7Fb5Dekj81adMjW1fQFG6TGNHyzHem1ZiTT8P6bzJmWKRSdY5MHCuCx4NKtcax6C",
  "key12": "KkaBTXsEJc6MagwTsqxXVE6HVXGd5vk7RGxJ8eyc1d6BSK2jPQnJGzqRKJ7X9mYVoT7tLmzwwnQnYULr82svv6c",
  "key13": "38BxqAopkR1rQpF492P59B3FNu9yVyFMnEZyBNXEpykwyXvZubdu8WPNKy9ipPPhfsXYjoMncbJ8BMfk92NFJ8pw",
  "key14": "33CRUBzEttuyWX2pesSC6t5ZDjtPvsjaAG3AXMNtrexJByRiAbCPmcQq4nBj2xvJymQ79eKuG8jysjdqa8MLs8YC",
  "key15": "63nvY8Zh3WtdzRDZg8EnuUQYbTETZc5nDz6nQRfJ7rjJyK6k4rdzgJ8BpJH3ZNY2ukoxd3Fz71oZ3mP1Nz22uw6C",
  "key16": "2yqee3FHYDCPNnwim1LgUHP9wrHzwbg7ToeYghEvFrkscAGZ8XpyNYGoguNFbsmKAgKWL7rDDy6dNQeWs9Nw9eJo",
  "key17": "2d8UejUNvGTh23GcZXPBgGWoP16u82YV9S1opdkTVLfBPsQWqH6x7UiQPYemAU6XWpBDZVty7E4ozMCRSuqLxAGE",
  "key18": "491sG7xYjD54CcQo3bqoRPnrmNJgpGeG9XqLnyGc39pTuykziHhGjrwNZp9UKyR1TnBQvpKjZqdz1xsn3vsSzWGr",
  "key19": "5puLeJPN4ZbeJpuJUEEqw7QKZ2xmh4YB7K34QYPjNS8zwz4njBQCAeD78rz3H6a5j9w8TVq8t1VghKiajst2LCMw",
  "key20": "4HdMAZiDJg6SaB4sDcGu3N8tod41QVGUNrFMFvaXRzTYZiQhbEoDma4yziRrU7gowDpaPyLNiW6XtNFvfjB9DvWT",
  "key21": "33AJYgt7tx5U1VnLKeEcDyNE9MKYxuUVgjbCAvSSX9PvRMxBKvC5vE2GhUq4ZFF65zT8PA1yr6G6uypdcA1hvNsb",
  "key22": "kFSHo6oZEJVCFfvTfhquEZgiMeb9HP6eBwDMtAtu9mXQfYy4kJY34NRfkdBY1Yf4xBb86q14iUJ1HXdq9AWNYek",
  "key23": "2kkiDtTrhr5eA1268Jd5LB8DkqVqmdHmaKWZbh56fEEfUBHYffzQ3bEKZPjmqpnRvSxqyaPYYTQi8XZeWSXLt6D8",
  "key24": "3u8Sch7L6c4jUymfgYC7iP2pJYQrUAvnHXoS9Aw67Dy2EPUJrkMqQNkeXf6FTwCWcD5Zwdb73xRgdvEo4fUo7Ywk",
  "key25": "5mmsy5Ku1WtJMQsqDPJmwjNabmqxQHqrc3zaoaWJVCdNApHPdaR5dwjQugxMtMzNTr6mErY9f3D3v1yS87tdnHdK",
  "key26": "Kt3j9MmC3SmbukYazzRVutJPyeDU19aiQzcYmZagYrZS1BHWJvPWpuW7wwyxHu8yV14tz4wDWntt3vgnupmHBp5",
  "key27": "4XQQCExXUyhpCL7ja2SGowSsrCmezMytVMybjvVqM2PmaqkgPJgQCAMsL7aJJNKyz6tkuuneAjqsggHiMtcja6LP",
  "key28": "2yR8YsjP6AxZSNhYHq2twdvwLdGyGxJN1b4Nn3b9A9X3SwE7q4TT8rN6JdPTFWzyGjbuiVDah77eB2mysh8azv55",
  "key29": "2Z3HTfbErM7TnxHkzLzJyeG5W13T6JQ6Rryj7XcMG91WRGgrAbWXNR19LBzGJxPh1FgEWibBp2NJtahJayhbVoHX",
  "key30": "2LkDAQKg9255ZSBz8bSMixdMgRkjpXLbGmGuztaAP1XNuR2xmTBp5oeEdGzd3uxE3jwjbEWRzKn8kcsd7mfiNqs1",
  "key31": "4f2UEpFWrKvwtpCsCyg8NnF9fMwt4a1kCsGeMPSEH2XeWGXzX2UDD3ecvYXGiGjSkuUEdYhAxXbMziKjJjqD9gVk",
  "key32": "rUQUsnuEcENpTXzuy95QFvqGRCxZ5n5QNLikvPjPipHZv97PKxB9FkXKchqmEjRx9pjxsMU287vRgAdVYFQxnz7",
  "key33": "4QwZUQiXwTLX5dWNbLhQaV2w1Kg85VMjU4FYCy1ELjgC8ghZCTepFxJPh4myWFwgDrwUjqh3U6srt23uMo5MviE5",
  "key34": "44Vz89zPRjT2eK2nXxwnw8LqbKnjqmzwkJE4AXbfq2AEQ9jTgY4wQKneCvyykU1YsWz35iQ8rNat7JRYvkqSbWUE",
  "key35": "39vsMFJ7hFwkfQT5NV1RupdkgiAMaw7cJs6FdgjQsSroELfryzP1GXKMinME9BDu3CNQYPZec4WQrVtirqqQvyys",
  "key36": "3W7aZiRVFckitFbVHdqtTyARpUJRMJyugaS7nYvqqpSqYdYv1p1JrgY4o6qezqmi5QBYpFQ8VBaRvEGBRpT59Fy4",
  "key37": "oRsuTiNjEEDdTMJHDQaVkUk6sj5VgSGJxyJSqz8Ti5xGk7tzmYkWzmDYk8tX2AqCWm67z3BVTdSTYVCztGHRetv",
  "key38": "57gXLP9XrrG3vxqkU5AUHBKAx2LyDKBJZ4EehUtBarPYG7z6935TojEBXP2uzPzWjfSB9FKpurT5e1iSGspoa6vq",
  "key39": "2ZK2RTxoU6rkmSXMjck3UR4EgctJM3hQVKhH3D7ea6nVcmXXf88G2KrHie9XZ6Fv1dimaFhGzWUMqTV87YFLcfN9",
  "key40": "3WNA7NM6XHPjJFmeiT6YhrknMFtQX6gWi81tpuwHVs3zyNoyxjvwNUHHyjSaNmM9uftJqXjijVKyaYg4Je1gMmSh",
  "key41": "4uY5twz84TQaMMAS9fEmKThyxSc1NEHn3FrnmMZFgi54U5ybmVuB4TCrSJR4wP2RPWL7m9fcECva7qWRZoK9Smc3",
  "key42": "J3HRSki5ouSr3xjwS9oV6z7frQ3GAL4RdfMo8MTYnWpP7gAajhEGqGg5xr8KgvWFuSyvcfk5y6Zf7s39eXg2x3x",
  "key43": "5q8W3ZBzhmVubNb6Q86N26Lj3Upyq3CVSgKM9qN2owTAuc9t9VPFYdAHr8mfG3QyJCbPuPc8gWPJadANzfbZVuQV",
  "key44": "CxiQgR9E4TXD2hYNVqPr5ozgnD88JoEWYdsZ8S83NwHpHwSwN8PsxY82MsjvoqwFbufWgakW5SUFFTU1apmGEgn",
  "key45": "kgtzt6cZZAy7BJAhQkDQEMjTuAX6cbAuiXs4KCGF49XEEkV5FNbHCCFE3nYcDfGBUseJAfpXT8nScsx3uZdpqMe",
  "key46": "4Gi6z5zARADBWwTRwySTjWSbbnx8AdGuh9J6jHbuKbr5nvaysMwYNodP68rXbTTpSuxEygMZzkkFqNCrqHQtpxEW",
  "key47": "24c1SSuHRBAWPntA6bp8tztWMabLgDeb8SuY7YevAiQNhnBFZerMXu9V3np3QLPA3dfzDQYBuqHFFNEezLAwhJM2"
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
