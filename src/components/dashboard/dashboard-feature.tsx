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
    "3ckrr2A7q7G3LrTes6WWjvmdjpbT85aQZ13FkV4Cp3q1a1XDYBtNSs7MAE7gDjKNJqxB7npvrcVExMN6opFfikMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fj9MEDZ4zd3jrSXzNzUUFjyCuGBAef8LmxBGxwoyjK7eUXc69ARZPfTLoeju1ssivV58h2qUR9qUE8L68y6ZvD9",
  "key1": "3Xah9YKMJqKbzWQn1T5qWnbqUKEbqgzrymaXoR3zXwGyYPwncLxwKE34U8hyjByC1yTZYXL8coDCyS7viPHHSLfn",
  "key2": "eY9f3JPPXqEefMe754F5NTunAhaMWbjvUUAwfEuQmptZ3mVBTyb5aJgWL8yDnd9idDMheXSrG1nV6u2xMjKikgz",
  "key3": "3X91ZZw3wHpHXtiGWFvF97Ews15rZS73nsHpEM19uiVDtKNGQCG68zYPSrSyjU26nR8EmvLJA6w5MgWh9LdkJq3N",
  "key4": "5h5mhaAZcvXrHNDRqBNcDGm4YcB6b54RmAtJZAXXjAuQDQB2MRQQ8syWpQVvZXzCGVEWWbk9MuyxRXBWyTyQciPS",
  "key5": "3W6VtuUEbY8ex2zdRJqrq5wbdaNh8taAZy98kywTVrfkUSt3ps2uqLb1YL67Casb8QALTgspLu5ykLHSHpTjZBAv",
  "key6": "3MhKu9S1vPMA83JSwpbJcic7Hxf9gy9okt3oMFqXFJndEWwu5D2sXqsJLmvj74QP1cW4416uxz5jeE5hLv5RuJpc",
  "key7": "3NP58u3kJKuim9zBVebVmat6pGMYxQVoya9wBQsyr4D4MovnETkaMrHbnaRnEDDVecmcDs5RwVfi5MZASVrQJ8VJ",
  "key8": "3q8rwAzhmahaH292TYied39HqbjPrE8QaH9JMVR2gwoB5SWuC5E2ebduruFhuKZVsYS7J9biXAjtNKHZG1DzYX3H",
  "key9": "4YRXLTC55MG81qcUtryHGutJePh9y3UpPZqoGm6V7trWxpckZr29jZG3ELe2ZXojb96YL9uQvaaRt8XHdjToXoqu",
  "key10": "3Xg8ihP8Ysa8GbVUBnc79cWZJNk9X5L3LHh8cmzcgks2sYk8seMTpe8CZ8yVNVGr1fZsYhuPkbv32B8eP9GgiWXx",
  "key11": "5ecNFVWUJNfXnhmD5Y2MsiGWrn7tDDYcH3AMraiERGP7W6v7S2qhVsMFBvSY6ydsvq7GaREiEfjiwi1SnMwaGXp7",
  "key12": "3B3xfoS1nmf9nFembQJuPNJJ9Hq4srcuHCYi1DcLEq61wU28Dd4T3V64DS6huk1PkiJjJNZsJRLabjAXDwAYA9hR",
  "key13": "4v7KoWWnWjrs6YWqs8pbVowpibjX4konvtiU9Jp7MoFZNM5QbhfW9uN3SsEQhgD7sY4KbHMqDNCdErUBeC1NQjFx",
  "key14": "474zLo17wPqPgkkhhF21AFRG4Q1gYo5HfFEEy1SRm24X44LUXatMpug3npt7fWhvv89QsxybF24pggNBez51w4aK",
  "key15": "2nY789nbFdduzCjRQjTJ8jyW37MF7Rc99MSzYbNnFzqHz6NYDwPfFWTazfZD3226Kih3EJ5dULNpjcY7YfwWPdEd",
  "key16": "RdEf1JvviwFcKxKn7ejz4MTmwXJsX1AhREum651oee8m4dxnHUGGPDTn34q6HxGf9a6niaFoXP9pR9zrZyRbEQh",
  "key17": "oT2UX84uSRhWaJtt4QoQikix9TUnSCcUkAyQ8er5ULpixQMrRNpK2XuRZJtnggpBmbANHdndwGXgW3MaaReXRRp",
  "key18": "3wbVqNUDidxbE7AJju1K4bbzefo8fb8MujdsDN4zx9QTCpXpPmh2jyWFKpnii8LmbX4e4YMKE7kP4jU4d8eUhsj3",
  "key19": "4dhbcGM7nBxkzSBpFvi88SJcGwmVtfrzS3xbn8J1FyMptJ87qhLAQPcMYfL7PChMnW7EgdwLDRWNCpHwGMpPbNtT",
  "key20": "5nFoZBwzqgbhbLuTszRx6HB4PQXHSoorKVHqJ6HQujoyC4yNneELDWMUaaTFpZnhy9fNwCpWKAzUFBUjAW8wyrZ5",
  "key21": "3EoXxYamgEHJqszCYxGaJx8ztVxmQC1Pctj25bqCUb99127HjmUWEHkmEQqS6ZLtyEw9cW2aTTk2CP9odoUJvh5M",
  "key22": "2VntMJD5yG9Yb5Hp4RVUdjq8GpdK72p2sHRSyYpY38AHhUBJ6f5y4DRcjAWwNQL46awUCCZcDmfhQKGrbTLTs2Kn",
  "key23": "39sDHwm6iYqZWs18Pit7dzA5fnjbH1vrHJHG9wk8hdVmk2XrKXpLbYEu8QvjvkgN93pDBuo4bVFNt26fjmcNGn6e",
  "key24": "5dyMCLMDeGLAN6mmyAY3r35jboCxjku43idVWjsVPR2PmcQZtefZsSWTfxWm6GheaxznX1R5uWpFsy2ZmZ6vu8ps",
  "key25": "3gL6Fg5Q3sasKaXRuMbUi7agjUiCKAmf8r92zfXTairfVVRwvTTN6JiuvmpAn9NT9ocnrQu1oUVtNWH9gFZ82cW",
  "key26": "66tvvU3hzepqa8rR7hdhnJSsv9eVeekNx5K2wQw3rhgLLHk5G24NDWnJr41BsKvrK5MtyogCRv8yS9FZ24bB5yz7",
  "key27": "3vbjoanBvySx7GonEFaJ2pRwV8bYrWDA12i1UYRU9QnR8QgkDfB6HsC9ZJRR7McQH8E1PNTdT3LPmBxPtj2Nexi7",
  "key28": "2Wo6tXZ8KfQRXM9JP5MLjtrXyAeX5QoUFNrdGNfZHVwBtC1j6egAzkiMcqw6rxRP1KVkMtPViUVkuqYsfAXJU2Js",
  "key29": "3BELjDW8vPgHcD3FufsQQqvyZoAmgYvgWKiFvpEFc96nupWFCfEfLNiHSNE3wMMBWZBKPozsyUARoyQ3SMbYysRF",
  "key30": "4PJm59LrjEvUkZuCyACYn4Aij5cbxTYeBTwdX2KRy8tUicsSJyqbLg98XjeT9duvfMf3AVKUQvpTiuHYj4K2MkjN",
  "key31": "3GsMry7xPjb4Zr5SQCZaDaZp1txMS51QcZjwi43VHvz4jLNB3jmhyU1pVWkAsPdD9MNjba8cq4vzm4xXWSGX91Lx",
  "key32": "4yRu6xPUNXVLfUP4sUQDpLbouwDm2iz8rnA2374nDJpo1oX59i8ECLEQau7yjMpxvdMDiDXXoaU7MYjejRSbRoGv",
  "key33": "3iqiPk7Qphn1UQkXYnrScgZYJN5zmZeZN6mozfAb2zjLGF49E8KFsDaMrb85cqjd2KcN3FBWTQx8XoS38iDebtB5",
  "key34": "5SZWBZ37zxfyx8tTYoA6JEu5KyrinDQ5FVyMJxShYGcEoyxP3pDQS2mtF9ZiHGiDvHKK9hAq8DcaH2nSai8ZyKoR",
  "key35": "3F2ZCL8RTaYpVWup6TQZeUCSksLPWQe6fJR59suc9VHBNX6RMxu85RVFW5h1fe143NKtBZbTNBgbkAudQHi15K1A",
  "key36": "4G45Qnmo4YL79MV8NStgoBSNBTo9v4Wc2tmYXm333Vn7YGY5NUGmcY7xoRr2dHMfPmSVfJMyM8qERqd4gbRXxFb9",
  "key37": "2tg3W4SnoRe7WpFx598q2ZE7CJDBFa36jJFusTyinehVEb1WiSfiwWNWRBTP8PRePhFbmL29x48GdadkYuKzKLbA",
  "key38": "41YW97xCja75xqv1U75WsS3yK4QSzybmiyuWfgAH6CQmEv6yocecuS34NMgqDoZBMRE68Ehf9T5PZXxYPbsn3Van",
  "key39": "2YtugeA96mk3pjJUe2BtkonEehTPznyhDyqCnoVrEfgKcw73KxdSS6BZcSHqnsTBoh6hE2pGRBAqfBgoiDn47gqs",
  "key40": "P2tvwSLRnt1DCRtr1JQwT6T71BdEPV9oJ5moh8aa6o47pxU8uttuu5kBHoVXZt6xg5fdA8wDfHRVS8kAYsug9HD"
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
