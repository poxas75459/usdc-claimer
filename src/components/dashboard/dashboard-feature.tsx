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
    "4GtabBZbNZytXGoacXDJRQPhDw4CXtbLmKRs6VLtSADnLcXm8SaQEePvKi2c5vs8s1RNthViVHBaXH3TLMziaYPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36sVUgwbxkjxLZCxU8sAZsDtXjLsJZK9wjXTNeXfyTSfJH8mN5DnrDgMMLbzrM3GTau1ghLYkGwmWF59xFaHbLyy",
  "key1": "5sAFhNcAtUnHX9MpvL2ESMyYKzDvW8LHa6CiqMYZUyMVBtXoT4pVYEWVxb5DQBr29rdTgYRJYijv62Eo73R56dgh",
  "key2": "5jJmH13W1vKzb436GA1H85AvbwsdL7uAkN8D1ub9fRKKkHnSMf5hcrj4PCd9mFfgBsByg9ecuxSqJTe2b3nBHpCj",
  "key3": "9LyYzzZ5Wi8d3L26ac9VjbXYifYrRxW9LJ3CEn5nvnT9Miiw3AsNzz27gx8Nj1VnNRPwKcBpnVchnV7dpgUiPjS",
  "key4": "a3CS9EufK3mQyGGWsgZUpqnDAZW8oiDEQSGHxNCPKtAYZ5YGPYqt2eNAp18s8sdjn7YRuaTb5PRcgt9EMJ344xQ",
  "key5": "5zmgNAt5MayszNHf865oiAmh6d5ncRU5WKKrR4Q9A6MqHk8nvGaM3bktqcZ7EVX9j2d1GAQJVt4LBfc2DhxNYFRu",
  "key6": "MrvQsVhwQn2tbGMF7nip6vKf2uPFMPrDwTu3PmpC8Yr9XhVA5J6czdJ6swAF5aUp4XMBfwK999pYf5ZRNJL9Kuw",
  "key7": "4BKDx19FAZnnU8F8QHNqyN6f5eRuX8F8DaQyX46kzLUU635yqHkGFHimjfAtcEjuA4cK6xbBVbgTCVGuNKq1tEgr",
  "key8": "3VeGcMxM6opeNpb7QZ75WT6z6RFKrZtpPNk4PELBuXuMqo6YnF9sHAjK812VJ4xQqvWjeWErXPSZMNGxAc5vC3Eh",
  "key9": "63o62SGJbdMPhsaXgS7skJXScsqrj4FNevs9cRfDguX5aNzXJMCmhtjQHg3mt66n49VMuaDnASWMLD2SSqAGAyQf",
  "key10": "45V9ew8rxkqAaMhNqPJ9ZCzujebLY8KYpPi1M82fRzr7qiLKNUg13GPjLDvtYLXatg2Sa5S2bfFzRsUgf3LwCEPF",
  "key11": "4jZs7dVbp6YquziJ2zFh8wM8JgrHHhzyBEWBMb7os2o77a1V5poyxPzDD5hd2fNNWbxahMrcQPL9Keef2VG63rhz",
  "key12": "5Uk1KvU2W57NxhmNi5mqeYsLfAagGfijQxdbbWz6Z5G33qa4Rcais98eZhDWZH1LduzbLihmw3sZP85WWixYhx6a",
  "key13": "5yXrS53iyEFCmroYPLVWJM2ipS4PJGzHbE72CUFW5UFrDrKCcavum2xZrGwTThfeXyKnQ9kk3jzscX9E4QWtX4JC",
  "key14": "RuYc9NS1iPiqkDc83JqkajtXKnUCHdE2Ak2voLPg7q9ie6tBhZ226Db8CzwJV7FjAnsvkJZubBmKgDvwu3uRxwX",
  "key15": "4CTHSSmyD86XDPCBTNAAXTLyZFnUTrsSdGkfSGihHAqKuQPL4QhAf2YnsV4R9k32UJCRK8Q1GsSqPfrphqhEt1PT",
  "key16": "2ckzY5a7h7GANp7PoSr47uuZHhB7Qby5Wf6k1MvEVZimSTHEUBSVsYh8KnT9bwCws11x2H7E79ouRZtCY9ypaygv",
  "key17": "66Yax6fThw48hhW1bV6rx11M8rde7ozEPrbwzRVUByeh3LmgKREe2bBcbgtTfhV1KKbsfM8WVK5DJjvySJj37tc4",
  "key18": "YQdsSXKUgD3ba8D1XaigExUdYCn3t4s7c7MPnfqKfJJD5ziSJfoMJEWPtT7PvEhVStRwoenXEGA5fcjKZiEFtkh",
  "key19": "2NmgC7JiLxMtF9hFt2XZMwTaPu9JiVP1UJLrG45TrNQPjcbdsnEXUxB7Dokz9Q2GmmrHBgohrdExmcKvdBVZ4fPb",
  "key20": "4GupM8iYQjuWpe1Dq8pcpS1EP8MNfTgR3XsX9CyWGHovYAR21pPThjaHiCmdobZXedrxumPFhQYZ6eithgGJeviv",
  "key21": "2kTxJhF663DyfD6hkSP2iASjJ3ZxcFtDeomQmo9iVrz1JGALnUJ7ZcxvUkC5h1EwrFerK3dLimofM2iHm2dtJwwu",
  "key22": "3umiPuBwsdx9TMqw6Ta8Vo5cseCGVxkx3TrN57twccyS25bDJoft8BNAwuvkbGVfBUTVpzGzPMxr74iwzNtASUGn",
  "key23": "4zGYK5VMTrZMzws7jJVbEta9iXurSjdBymXir8fSqARNdcHNWW3UHo4FQ5Rg9W9k3wK1jBbzKHsFE5nN8kxcshSk",
  "key24": "3CnXRzeZmCMSj5FGbBEbM5TTLUu7MCmws7SN291gPMLLfv9bBoLxmqqHTEZSX24daGCKPsvcujDT9Djg5ZQjE71",
  "key25": "4HrdueMxN1bXkrYZHcHzcbrp8aFY4ysPkHjSooj5DfJp77Ky5uVZKeZ3Yeuh2waRrbY3jbJ2saAP2VbZCRo2JTGm",
  "key26": "3YhXr1TGi4Zdo4ZspTnvysB4itYT7PeU1V6Uo57Ddb4dggScNQnLea3RuhWwM4fYzN8fjSxN167PXuuKscKrpUgR",
  "key27": "22BWtCQGxV9aq2Dj3vi8yAfjPSPsMsiY5eR9gYdsLAuRFHhHJuAboGovfU29kxCxtYWMfYy6FuGfMCS2uNkUX8cu",
  "key28": "4UoLQJ1czkn6Zn7wTpSyS22vxVZ7kRPntWXfyL2NqQL2sXFBU27sRD6RdWwk61XNRje46d5WSfvR9iCoSWKbRhCt",
  "key29": "5AWs1iPzD7nKoCeCJkWunMzSgSkz8vYMdQH8gGDaS2EsmLoDa5YGi43AubaSqSQkqyy5U9wHUEb8r3htg5XPTsFk",
  "key30": "JTk9Vwkm9PGsWp1a73sD75psPGW2Rpq2WrpYmnvStvGc3ZVUGdR9MR7ZCaLQeseryPq8WYGk9PvovvzeRX7NJoW",
  "key31": "26cG3vrQT5e7vLD9xKZKgjQKx6XgmnFmYBpiUpMk3gs5mUMYkYX5TwbDjtGAbZm9Cb1PY3YaaaFpLRadVCnF5Y8V",
  "key32": "4BPFRz7BUoTvrrAiZ2hiLEnzDjQL2HvstMjztvuJRevcuFvCBhENS64ZMZFLxqdLPYkAggaNjSzVmpTYdXYKhq5Z",
  "key33": "U88NDk8zoKnHWbzJAKr3BtdadGiLDQE2oppnuWTGgYVFT5drJ8TGdSeFLbfRSfjMusqxSspcdyuFbbwR8sNDohj",
  "key34": "4CGzymptTyDaC8xuadBaWA1kdAenn5TmPDxN98uoPnLifuJiUMrVuwDpk4BcoJKA4H1CTGidEnUCHWGQBJeS43N2",
  "key35": "MbPPUiLJRug8M6BkemdSBv3itbJyiUe5fXzdvTrKeaLVg1UMM2pqGgmQxGnLdhRmB5pTqdzwwucRf252mMD99Dj",
  "key36": "5tysuMYthBE33zaF1a2tisC47fW1AqF6bc7onWJAX5MoPkTwHLD5p6ZQmu8XEwxo7CE815jP34Dc1uYKk4i5VSJr",
  "key37": "2h4sWvK2bbd6nka9eMgxkqHKm4rqezASHbCRLbzfbdpJEf3s2Cfs5kXazYnSUa595QPrWnKvGUPBuYQHgEdXVSF1",
  "key38": "3DshyXCrLJMTpUAv6FUEHWCBW8ydkhNqwRwUrFXMB8Gdkdot3sHwFZ7jjTirkvzS9VnMFJnaH6reUV6muPGmgXnK",
  "key39": "4CvhrcfZ3Z2iT5GXUp9Co5GXoc9E64r7LdqjbVfaLnWj9v2rFYEYLUsdDBBifRnEM6bJ49fbUfAk4zmP31udphJw",
  "key40": "5yLGFtP6ghNfbfRyzZVpE8wLQ2q2sQbWbh6ePVC5sQeWEnqwy5Fc4snaNAmr2VnaTqfkgaL5qrRXaBTGP1HtoVJZ",
  "key41": "9ek769oShk3dqkjRfNZkPQ9qManHEAZ8sQitPt3o5wu5NSgWbDMRqNL9Wodfx611S8rSnjQHvH8okKHxREpxyEu",
  "key42": "4NVMDQfNdjB4x6zKVNqoH5CW3sMpcnkue5XLryQ18yLmnTZvnwLN5y6CXMm9PHRk3R5a5z8oRLK1Vwh8s2BKyow"
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
