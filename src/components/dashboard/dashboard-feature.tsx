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
    "4p4wxCHTqf6Yee4uNxwGMtz2gga2822ZR7Nfa68CuAjLkeub7Sw1fDW6DWhpF5E9ZdY7GVxa3toky71StghQvyGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zrzDYakA7xXsYqxhJK7SkDhyyYwesaCMGhLVgtsPK2gDQHbe9tp8EASm9pMho8TiwnMbZbJMSRNozEo9rNNx77z",
  "key1": "5si7EQD6nh9g6zn6KRMfSet9YZmCJGKHCB2aJZEvjmydgvHe3knp8mcpt8Qc8nupW3KuxbjGZHzJhnygz8b22Xpr",
  "key2": "2vkG4H43wicPtiqw7szdvnaM3PfD4t3ZokP1nxD5MfFshgjBt2LUXD5AQiP1pqfq33nQmkMZq24UKx44kP3LH6Fr",
  "key3": "eV8nMKG4ieH3wwAmddyB1TvajfKwYod1ihZVi7aaceWBUJWQivuWaf4AM16gnNTfYghg2CbXjp6MSieKjAg8znL",
  "key4": "5ohXtgtVaLGzGNSvsjA2dWYcnoRZY7c6UJUuLbHHjfDL1oKvjLHkhnTUKqRAxKhYXyFzSrS9JPvJvDKRzWHdyHwk",
  "key5": "5YazinmXQuYFiGtyLBuW72GawFXwVUYzRoYACkv381Kg7FvMb92vCDc75h74yGiGZdCTb2EV6T9CH5U248PdTTgj",
  "key6": "2cqU95ymhWsTbdZhLmTSM3Gkh9hbzoSDS1UAFSNdxcnvN2BxZFmH6vbbYxkkuy1Ly79s1BymuxEKcK2XFwxpF8pw",
  "key7": "4nNMczck6M2iB2PuA7QzZfEWQoMx4QQuAMkhsR7scmUpKHg3mzfd5mueZ5yyGsEsSynwWKLUmWGDnVKnV8uggpx8",
  "key8": "4ozEXPRUBdFTppG5YupAgRPwR9Nrv88DY5JSfpjp9BwSEGHVuRfCzB5GWbQQdbHq85wC8wp5rLFnGtrRfh7crgMu",
  "key9": "HoqMFxBU2uWH8WYoktikLZScxg2JdxpxoHh6UJv5pp1o5dPUJ1of396ko1QjdF6u4de3avXUM6yeoF8ZQUuqm4X",
  "key10": "3w97j36YJVQHxHDkJByYqX1ZRH6BpSwDyvC6HxtomxZkDizu1qXapA7Xssb5qvCHPDyxPSYxCgC9jGu83qApJJev",
  "key11": "bLZZnxEZKDh9Jtgo1gM4YHSPNqRwPXBuNVmLnUZWZ3T2eWa6MZxNatMQBzDcUycdi2aUk65tE2wFZgemkG9fASw",
  "key12": "649D9jMvVnv2TKx9H7mYuvs2FmjPJnSLM47JKeDFXp58r2VZvK3Gxr5XqExioNPdyFAUZRZuWAPeReuchmATtHZD",
  "key13": "3m5uEGk8TwhfnMyLihxBkdqFTBtjkETU1v96HBv5Gi33JGkXis4MXj3xdd57V5JMeKmTTc2UM1h84Lkmq3vkoosn",
  "key14": "4bgzKK3f1pMtPHusMoSAFywaiF2NgYxYY2KfbnskLGpWk3vSCa1uyEDJrmT1fYMaRxQwbedGRU3AnYu7oFnU3yeL",
  "key15": "5qetxeeE3qWV7jmMhRiywqiK6KhqxfntKGMYKDNCTzCZ2zzhAt3rBnERozBe5HhYxSsuyC6VhCDW5958kCqxEE8Y",
  "key16": "5QQgMvGzgG9BQieb11sVyW8En14dU2xqhPoGw9TB3hZE2R6hiikkwKFiGvh9cwhDHypz86VKKDVGKzeuaD8xXTdS",
  "key17": "xJRfCq3ochprKjWuSEdbmDnAH3RTDXzE4iPM86aeF5tkFvvd1prQvAPxz2YUnnsH4v1YtFrT83XuuP8MGT3jQYJ",
  "key18": "36ZL7TcadAYLMZGr1DJnrVHmPqvKq2CBfkP9N2wYVr6p4AT21J61Q6UooQcpphhUFCQt4Dm82pnUdC4ho7aJg89R",
  "key19": "24yPKpm7PT6Mic3oM1LqWjo1btrE59vmVWBPm4d99yqC7YWZffTaSrkAtxp7mGrotWSWoBduQUNj8wAFoPH53oMR",
  "key20": "4uxuce3oSPMoDcZKDZgbHUVJj6kTkrU8jcaWV36uYKYzsM7ARv4ktKd3dh5kxoti4FL65tARHa7ygbnYXQzA7wvq",
  "key21": "5PgPYw7VtvVEZo6WSQyJiYgR8U4mw1NgKB4EW1tNu5ohZve7N6H2ghquDvms14pUDdZPSvH6n68dKhVy72wu1DnZ",
  "key22": "28Z4UcbokBiq73iMAr59zn2a3Y3SZCzNTd928XZgnBzngBYRDjv6vU9TD1AKf8PCLQNgjd6Fw5ebeGnUd3uL5EFc",
  "key23": "449QsWw1x2egDACU8VWMhcbyenFidR71cNpFYXE3iQf4s9HiTxScheEp7QLZvqJnccXVCBVschiXqx27LgMnaBJb",
  "key24": "Vg48Pn9jM9xkkLyCv9gB9pCvRNJzJ4oVTnP4izMtfmCmHdYkaEuqDE8TSDTy1NSCrU3BPWSQ1RqfAdLMpy4jX27",
  "key25": "28Wk5Zq1mQwcpxsHy1EWNzAAeCuBpro9MYjH6hdVZSgk9wXNBjYNmHYhXMSrzqaQhd7iu1pGtXV4cNRezhzq1q4o",
  "key26": "3j4s6DhS9iJJfHXrAYLYkJ9E6xVnA889LDZewTbTNKEHRFvH5332Jd9pfVLXVChxBf49BnwGugsRfLQjfKAEtvS",
  "key27": "5ku9ZrYtTfgkoci3kXBEgwbpqHxkf33xf1orkV9VawweqsCA25NDd33tqMgMP273MhfFzzAvDpj38EU8jnyCbAEg",
  "key28": "3J2xpwEBDqaGeXgMV4wPWmK88R6aQw1aUtTboKSZVT6UogmnoVe5dDfVpW8sydXrMNdLMyX2YZRiwNSH6Z2ann4Y",
  "key29": "2j8JHjBbyB6tJLGt62oh2oSnS4ZU7bMzQjzRBuqUQaWHC49nBr86LcykqYkVnCuCY6XeeYNwoPvYSNacG53TS3Ck",
  "key30": "2RWKHA4wK41WDXmHse28qjEv1EL7PHtr7MKSAR7ouss9oN2tFYe41w7r4DQyJwjc3x483x3Dvuc1LmyTGBRHAnSu",
  "key31": "mXAH9D1k8JURZif4a71BKD49vWhPG7mF6i3KQHTvZRA57d4P7SqQpAkXcbahv1mb8Rj9CHEm2dRXmeG3isT1r28",
  "key32": "qYAQSrEfHMWpv1fzD77Y81EYLZSr6Vq7u76oT5t5djkyzRMFt1FESDPjJnRp5Jsgn7QdqbT1nCwUTqenxjiMfLR",
  "key33": "9QbvZe58SZfCKxvCsFAaUm5tJus8jcnAWBc6842AzsocPqdSnodqukuVFdrkRwMJuKvZQAoXbHUKb5MNwA9EZoo",
  "key34": "2FxSPsehwUe1NgHwu9U1qGqaRLHH9orLHkaendUG6UPUUjVN3BewAHFuoU1A6uvZUyfA1Dcc8NjUmdtfxNVoPWyw",
  "key35": "4VM5qXEcopL2JtgKwSwnetaiKCp9kRzcZ58vA9Qz72LshkjgeQRnG9rKKfYYBnpZt4QwxNj6hkUDRvJNYaY9h62G",
  "key36": "5RPJ4NGeSco9P9u1BzHkD4oHveFBrYJbYac4HaaxPP9u1iPzaSM4bqiMaVJ25hDSnn7ed1LhpcFEU9pX4aVRWDb4",
  "key37": "3B53Dk1GACyQqQAwKrtuJ2BKoTamWDuqTTzJW1ACBi7rbcuEkeXJdYnA2srSkkWTrdxwaMyjBo32Zv6TSxiUjhuf",
  "key38": "23dr2riFXHRU7MQ3puSqJ4oWKFF8s1NXChxFjeuv4Cyts8QjazHPxHfKcwBkiYV7JG5pSfGDNP58MmC7o9sKxrJX",
  "key39": "4WoLqQWUQo488ybpe8ws1rMXMAdPBt4yYzjvxDboMFh6EXZkvonSW8DZZfr9q2Eu4WjoyNV1Xqjgw44FcpBG3MXC",
  "key40": "7L8BHBxNLELuNsEf4HEHMbcfJ3t4ssqoNXZXQztMbGs6QzaLKp1mu6F41ZmgktzC2BHYPZYquZxQ1avq5ReWYKW",
  "key41": "5ShsJA5bmAdeZZA9JAGwA8tDuynQQBE4hgmotYg14XNsbX8UVFf6BRHewP51eocgEB163WzypJwku8qNuHrmTE4f",
  "key42": "4H3R2r1sD9eDU8XcVWKJc3qWiRKdi9z9Rv97uiSpPdB9tvTJJ9k8gxUBX6HyoAa8t2NVraj1Xpif9fBtCkN82F1X",
  "key43": "5aiMweBEcrxqrBQoYz56YaE8PYfpd3enthPqJTwqoBnmLpCZtp4biZhDXNYAvuCtWDgGe2iC61Up5qC9ejxp1bu4",
  "key44": "2tXcuVg5TLuXEPMQ53ZWr5hSZ4DRwWNCHpVngrKWxs26n5YsWhv9LAgkUk5xdXMKFUu1YJackGzuNgn3miUY5wRE",
  "key45": "yFdCmLXZsqX9D9SNomsf51CYh34zDqBK67iM8Z4Yv9yJMWLKnQFy3rj7sUDD4GJZJexvDkp8k9DNrtRzjPuyFaP",
  "key46": "2FkfwJEzv1u1PaJcEn5MNvHXhxsy9uNDbBAZKbnZbKw1Xhs6DjPaCiTwi9ZM74AMbecGgTmVDJCkPpnw11WZrLuR",
  "key47": "3CM3zxxPVxNzpY9Gb1X45EULbr1vhHo7wWf6CimfdwDsHmCYXzYvDdsGCTqXSnaudk4SNeF56dSoczGoUcH6LsBU",
  "key48": "FdSgEsoGXCs2hCdVSJkuFA7Cw8ybcNVneUaCmH2pT44vucLEcMdyQuegnsXY5VwhxfFKb52Xts4gAxTWgu71NXt"
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
