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
    "5dvdt22qb1bB1WC8gWHv1kdrzXj9V6KmvDtBtaM1X3hiJ3LDZ5pz11Zjksnxz5sD2AgiAuC9MvT45eHo4fTejwrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tqPc5TFmtGzqVrAYsUUgFDPvvLcNyVVuyg2sjU97zrQ9ri9WvG1Y5Ksa3VR5QYcTFVK3Na6DfJBAL3yQE57MF8y",
  "key1": "QSWiF2zkRnAGeTAfQLrTkdkRuaKnTjoR1oUE9ensMzSYTH1mCmzgnhLfbCntfCmsLb4tv7LYxxN7roKGaYeBNZE",
  "key2": "4x6My1iqeiDuWVEv8WZHsJaEo32dZtCpZ1jFPmeMpcduM6AKaHgnzhQk3TbeZaxVE1bWntkmeKXZSCGLfcY79Rsn",
  "key3": "4ZwWqsso1XmdymPZPnpmq98PZvVZkcS69onBsQbwzai72UBfv4YXHjGC2FNwotEHrtLhnV3cSSdRnrfbbYxMHAKk",
  "key4": "5CEzmEQhfJDnBDSt4wRtg2kTKJ3wjXEJVy8Fb1aagMfdoBYhcmZJZMo3PDxcyiqYpT7sUa6bGqWu5CASWj1DUEnw",
  "key5": "2ZJrTxkum113mAARXHhBXS4scU54W9RrgQsnkdbXwgLKx8xHSTSJJiMurCXJpvZ124ciLL2PBWGE2BEVB4xY32Y6",
  "key6": "2UqejLRJVouFJtmGVBpN9YLCcfFwmqtswQmtnspwhFocfSsAQKAkMS54inoSxnn2DrQ4scCVzMJDDt6BotXJnbTu",
  "key7": "46j5JoF6yrdpd49VBoXA5SFC6KENwPNr7psKrG3WvsTmoUfS6iWGVjVKeDYjEkJV9uw9ZJxtzf6s2JLAF7y2PtzR",
  "key8": "ZZPXehaYfhN6Q3F3PjPXDJ8fyJrhYHhH2d2dfU62abLJN7fDckRtFbTiwmSpfsjxh5kJZn3iLk23Jurpfj8WabG",
  "key9": "26cQDK3CPsUXx8bKikNrdBdfp6kD47GYNRiG24qJKTg2s54CqhowUjZeqikzkLvpAAzuAMR8V8NwPJq2GLhoVpWb",
  "key10": "31exeJGPbePHLzZWwc7AnuUJhjFXc7r9jcAa92DdXTSkV5q58ictpkBbWZgJB6VgCQSMRhRZ2FPpNzV8ZthN9Fx6",
  "key11": "5xLezazVjRWwRQxkrkaB8rN4kU3dguRtkabjxR8n5PYPWTcGYPvePybZ9bZHkvCrX8epo7svw71QWjUQhFuMgqED",
  "key12": "2ysqkVMtJ4cxFEVoyssQ8FbHHJQncm9pbi6xy7SjNMVbcuruSJkeRqWMonnzGhBJYXGbZ9iGc5ibZA9zRTG5SSAZ",
  "key13": "3iQio88NqX7hkcRvG1GT2DXrdrYKbkVfpNCG2hWXSoYa1RcpNhaQEX7inyDEmYKGccAK5SbYEEdc6pdENAYLkd6Y",
  "key14": "3jW1g7PoiY1fWA3tegDGyB33PcDpSAV5a363sWLCqC1UJxgt3xkktYMERNC4MzYNmtrmGxXWVQBnc25dRsBym8SW",
  "key15": "MCVR3CjERcLFg3fSEQstb4EyWh4Vp5Rc1Crpb3HmvuahKUcGjACjmwbD4f2uPRJWHJ5E7WejtJkccYgJMc47SLx",
  "key16": "35fDxzySbJovC8Gb13WtrFFgzoFUmdrZf5Cv2WkdBzKzAzAaBsaXPej27eXN8BRPeyGCAnkAe5TBoCuFCA1BBY8D",
  "key17": "2eUHw7j4Y8gn216rKVQqtZobcEm6f8kooP8k5CozF4NakVMZ2ZDFpJN4C5hDkSMoDpM2Gfi7nVfR7mCxAyQ11tdv",
  "key18": "ypbqhqpgpc96iuYVZwV8w2rk4jzMA2aAsa6vMp4XT327yZdwBpMNsUYkSuQzWkv5rhjpHVyXwKcMywiWL1yqkHo",
  "key19": "4kVwGZuXksPUQfg3ZftoqdXayQHtDH2Sxc2vcQgGbVKQCwarw1sCocZzJZxoTqHGtUtAfEEL9ZJmnJ8EX14XriLh",
  "key20": "58f9Y62wiyPDEsVS9xZsuVaRGfLVMYjozAveBrtApHM1ajcpgsRLdtSajDCqKKMFABku5yhdd9Ka1aAkJnWt2a7P",
  "key21": "43w4HXRfb5xoAsqRF9mrtDyKcfJsuC5TGo8Z4G8ff3AjZgSbYqYLZgCTJfqSyFQcbWXoC35ydJDM2DNrUPupihpe",
  "key22": "F3aFAon8SPKRiMeCrw6uBYLKHbKrBQubSokiNrwcUqifsw8L7rvPeh5jdRhTX3Q1YfkKXZmQQ67upPGdzcReuWC",
  "key23": "3Pswt3eqh1UeoKuW774V3kaixVC3Pmf5pRzjAZu3dzhL14998zkhtqXL6zTdaPuPsZaYZu1Xpgbh3eoVRwurs7ib",
  "key24": "42jB81nZzBVUcY38c4cg2nqYtv66KgtRSY8BqjznDyvCcXdzLJGErr7tubyFQKRDjp2U1KJHmVXuEoJreNND7Eiv",
  "key25": "3qh1pHdSLy3XK7bTCwkSoSzQZDmy8FyZxyEoiSkVNkvtkSyoDAWSSesF1taMnbrHksWhFwzU2aYqspX2GUetyZGp",
  "key26": "42M6MfFvED1fzTBFRoockSYiZ8d9dcjMcdhcbLWq9EVVCiECM1z51CusrvBwBybdqj7M3XFfNr6Zs5qTAnSxU4WV",
  "key27": "4NSWB1spHkvFrjCqadp5yZptgAm6Q3biSj9ckTDEYzGRGhxYB3LfbbrM1vZFL3VdntAFkhFSduFSkRqbYnMs3onU",
  "key28": "rEXQvt8iQR3CKbx39smsS3NaHMxqBm4meSgv9ihXpL3pzVQydcr3t52gd2pzHCQstNDWXrAuWR3UZhu4JXkCbCF"
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
