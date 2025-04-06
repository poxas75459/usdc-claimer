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
    "4eTH37ewfbtbqpWF1Gce7eKdy8HZZyUizdGYN5CJA8ZfXBrqeGQbj4uosJSFie64QB62sWaUYrz94j78rCL8fvdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "grHB9Q4ZhJHxhzVokm4FgTaJCbm94zzThVh6AQLXYKdbWzg1ZDLrDg2qibYmtCVoiVNjDVH3r9iTAmHQK7srBwk",
  "key1": "59Sn69ESYuHXo4NsiPAVzCHVuWNGSk6JJQU3Nao16ezScu11N26d1h77T2TM4WopE7dmABfa12ff9U5XYotqnbVv",
  "key2": "3Dt8QDVBaJzkMyoaabLkPD8m9mUiM33nyqA6ZUuztDge8j8pXHvnd8XXQJifkoNEyx88TpjS6xP6xjp6g6QTud8W",
  "key3": "28L73Hiob1fKshUbBTeCefYRqNnaN74W9s4Bfi5cebMRDtzhW6oxNEhq1b6FoGvhXwjgf2aXSFX887in9M59R8Ug",
  "key4": "2xAvbtFgb3kErsjUMwM4888t3Hk8cqLbW96xa5fgXw8AfZ3yhjtqfuJxwzfdAha5VLcukLEUNbbvYKTRBy8hfV83",
  "key5": "DmgXrMh9PbeFbhc2fg3TJdnfrXt1dTaCsqWJmViTxPuFQ9ANAXxTANyB6nuPcrw4HJCQFqTNpouG3zNQcNqtxv7",
  "key6": "3hmPxnycKGudR2W6nHdWw4x1ikftcU1a8UyKxhfZ83CBXu4BDugfxSjtexN5UfYuQMUbp2pF4J452KJEEt6yhGDP",
  "key7": "tjvMWGWSkRAdH5KreSUhYqErwGNHYE4VxDBgJVZPFNtQcbWEg7LCVjksNriVecHQbp6JooCcyPoVYAaa8atkbKd",
  "key8": "3uR9AiputjXa7fjNAwmsBDFLnEmfepZ1Xmj1A5LCAbkpWgk6EvbBXHnMprvTcBKpTJQmUoV1XRvLo8HVMo2FKwsA",
  "key9": "5nF97GoyuRLVivZdm5Y9796NSaK9k1H993Ljc2FSoMem3bWtKHLcpk8r8hR6GnnNXLDDDhESk8j5zc4HnA6MQUs6",
  "key10": "4MEamfhqVYedoxMPRLpYebGeLJhopBWVchss7rrHYsMmoZSejr1mwpEGDSrJfXQZRRZLhXe7E9gpMdpJBJD5YmQN",
  "key11": "4qy4SnvUvGzAF3noD4CUJ3n8NQVCDYoNNKLHwuvwBABTwUmXmWfTE4L1RxJAUWbTNwLZsE8V7n9U2fUZmoCLhAnW",
  "key12": "h7bmBuqSnExjgBn3LbADhz6aCCAUZJc8QK3ktRujbwwo4V6zudexhC9C5Gw6NwWC7vU5U5bJ9remSHTjVN93yxS",
  "key13": "22wd5Uw6bscYs3phJXV97iiJEb1nAXYXBLGBA64RLSwio2DAo4cF5ufKxmMkKEBGymKoq4W2VcE22PHLcMU6tFsn",
  "key14": "3FJaH4Qny1aGniWscGx5VG26xRG9PVW97A7E7SaSEjnM1Fn68vHxhgiGKUQ59no1W9DcULECQdCE5FkmgofTd54w",
  "key15": "5QsXrvsvryMCqBjF2oDPNbvKdYdjhzSmSccAWoXMceawEoH887YsQqWEi1hPVhhM87gV1DBuXGdNh354auuFPS81",
  "key16": "5pGFBPW3TSqebfA8EPwUqF8humEAbSQt4mnAW6QJ9pULA1nTy9W6CSCW2q93VxvDcxxJ4nX8JFhChDTrhZrsM7Ei",
  "key17": "5YWJV4VcHejQhZpFWujALrJwCU1MpNme5rKxZT98y6uDgBuo4ivMaNsnyPcGD665XR4xxdUxP5NoPZYEv28G2NcR",
  "key18": "4RnxNoqq4UHu9pQVeacQJQsFWERuEhRjWdug8jQTEAXKoN4QKRTzauE4K2zqhmAuGc2zesP4uKhQZkoZjsbdPiE3",
  "key19": "3ugQoVhnwGqBXMeviZJuy6WuJugNLAtTKfdMT6anuxXbCbXHm21aBJexqNFjbWDcwrTZ61inxWrdSNpYe8BBJrWq",
  "key20": "3xsdfgS4yuLH914FFwwK7emUqZ3sCGXg4SCroGXtnbBzU6x9DBfStXtKbff6L16bmwE5CxPWcVVyJrkMMTGc1yyJ",
  "key21": "ibZ4L4h6juYxfQqN79fZuzCn6SN2LYM3VGbkYqDG4WePUGhy5WfPCtJ4NoaCTqftxAAabjL8kHMZYMVBKbFs9Z1",
  "key22": "diNXBeHnq21sJVYUL3rgUFgKB8mQHxZ9vt5KD5WQQLj79MWN175SScg1jsiq9wcR3bgSgu5rLf9sCKGQzzugBEa",
  "key23": "5udMK92cM5G8cjtFFae4ShPHz1gnHJD3kz1JPqkZt5XvXETLYusPuy6QzZDekGb5fsMy7wSLP9ZHoyNHKgGX4VWT",
  "key24": "EqgcxbfjtWmHAcYRSSypARxqRX9hfAWypQJKrcKhBhuvkCMMo8jzj7BGEdkFzgm5AhFif6szT9QHY9Cfta4PbBX",
  "key25": "3bZocAsACKuGcMQi5GS7pn4LRcsLUdVxMUvMbtWUEjA6zcgdU1qoayTiehf2E7wJJZudW9zJNv6gZbB8AsrhdT4N",
  "key26": "4a2YKVgNQLWjX8tJosJC489CKpKKikvdssrvM22k5gZd4iUmVBCYiXZ2dbKXWQRdheyP29u1y61RdMRJ26ngomae",
  "key27": "3VkVn1sBxcSnji678T8vQWJBkknUSA1r8DKYkARNWNNxQ956Zo9csXFAypswwB2zkprSGDbUJVLPieN9pwGfb65j",
  "key28": "545KcansuXNbMWrZ7Ewm8AjUsHQfNkf64SrT7k6Z4vLJWT87nEL19ZCbPkGCAMMtC22LqvhQKEV2tpcXu3yHyWGo",
  "key29": "4Y1VYXQDjKuUGt3QrJnb6VeAWbB1zqsXrYDuywA6jrpqrMvVcmXcCxt3jgXzYskE96i5Np3JnDfWGWrYhk6HVTNt",
  "key30": "37J9EHVjMSFNL1vcnSZDBe75DQJRyG3E6xaFFWQHbWXEJ7x42Sn5NtMJ4aztbhDzAc6H8fo2hJkFFPff8nfGRaeQ",
  "key31": "35kLd7t6mRAJUGoFYMfYEpBGqjsLdjTeXbem2t2wGWrKbJpbppQGkUcX1PAUQAVSgBzN9zZ9Pa8ACD1yyk8RAVod",
  "key32": "vK4KU2n5ai1DRNKfocjQVDSAw4QspA97wR8iixkhqVebLXzatYKtfSwWjLzrCbJ25ohv5BpQc1KP5Qgpd5HYTEg",
  "key33": "547u1hVkYHuRczpTqWQX6pN7aDBhQt7BtgAgrZuW8buBXtu39whMRk17BHShoYe18pF6rmyhrj9wT3BoeNtGVPwc",
  "key34": "4BuQkC7R1rPAB3kRpXgfMEXcZHnbZMFrWz7jv9T2FrzWXvit7Z95BffK4t9xWKjVRYkwi2u6Rt1o9o9Hh9BgTiWu",
  "key35": "vYGQYhcsCVYfqKWm6Ljww98HgxXiruiZQQBLy1YS2xGfuaiMRCGsrnTjWmeQzjGHCFnep7wKLe5Byh87aiRRpic",
  "key36": "3nyyVXH5qLTNnnmsyPktfkWYS5Li5Gy5s1GcxYRAd4g4yaFqGyEpbaFGxQHF7JYHhjCMvgHjPJtYvQkjh2KgPCn4",
  "key37": "3ZAffmedysdHud99mf2vwNTvyxgBtMc4Cp8mgf1MnfcpxJe17ybxayKST1FdiKyk9N9eiFw39nBEvkFZKBUgijrK",
  "key38": "5CrzNaYfvTkeCojVGMcz4dMfZfcU5gHkfiXVTC8PJJFmuHmmiRco2bUiG4yKoiuTXqcpY1kEFsuEngFiK6gzypDg",
  "key39": "gkCqyVDV7a9tv92UTcUdXRiv1y6dyQs8TahfEDrVLrH2wAYW7NXvToBbuGckHQ5pvxwX4mcDP2X5KgayUHQXFNa",
  "key40": "3mjHG6YyV1fd3mu9J6EqkXHHqbFDHTASwaELiDk1MvKPmHfCpGwe5GjLSDCcrHr8vqPLSoUKj7mt1N6jeh3bTjoM",
  "key41": "3dkSBSVJ2aUYbHBrNvL259LY8DKXysEvp2GsFHN5gvsgCy3eycghTemNtkNnqwUqgHVt1ccyAMYKUHWMcEGKRZiN"
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
