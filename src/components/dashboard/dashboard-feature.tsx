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
    "45Dfo4Ch2UMVWjzFmgFGFKNhkaMU7yDjkeT2dhzyyeqnN1hx4PChCy4rJ1TWJHh1axtmr6wSHCi4zQSLGg73kaZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z7LZjW6hYTtEEmyyA4VFNCSjUUk3GvYPHW94saidWFnw7H1iexuom7S8W6FVaN5DjeuSbzS9M7YPK7iDpJg7a7V",
  "key1": "4UjauLR4Xti9awTa9EaUCoLcwHfFnCrMueCuhrhm3nSH73EX24ZH27Ejhe4jbFoYVTGaGnmc95PC3x4GB9xjQ1mr",
  "key2": "JbmZuM11gD3K8Mz4U8sBYuZadeTxgAYQiH863UVdJE3SWTUvo2NNToGGGXfxtYWBUvAgTQtr4aaZcfVF9aFNqFw",
  "key3": "5Qcr5Y6L3Hyf48rPgayqnp1z4VLYZ9bkYyeV9u14ELqZ2x3veg4Daxuw1NMfvexoDVriXst98KwrFeQMYPC2RTWe",
  "key4": "Hu3rNLT5KxQ4FNcrWfZ7YY2EvMim86redvfJBRPwEoNYk2KYVHkBE8D9pUd7axWktVSJKdfD8BzbCzKWcxBrgJw",
  "key5": "F5en1xT8qFqoGY6qZHQMB2Ba15VgJV7GwKNRGogbr5q2x5yWas6FPE9J6rkVknwYK16mEEkNokndDNoiANe1SZw",
  "key6": "5dKuMK3is5hfDXGLQUUabexSsFBycGycsNiKq2vj8Ejw9SHCjJnCJs22J3Xt4grqPBqVQo5KJW8VRaTTsFjnnUrz",
  "key7": "4Ko5cN7An8Nv7JTHj64oseoGFn7eS7XBeoGkyyxmrWwRnT4zTMmjXbriv1Rnh2MfQC2c2M8zcHmKdqLKzRn6efTm",
  "key8": "5s1WCMyNocWUBihvcqCGZQAeBZGrduJqrCy2MnLqM5KmNk8z2sWJfM23KxkuhEpRwkSREMBCVmbM1y4vW2hWe4at",
  "key9": "2Wpg4AAoDFfYktm8EbqYJde3pHg1euGyrUh2Ava8jjMvygyo6mhcBSXDG7VqqVTqAx5aXDff4y5Z7Ybh3g6311CG",
  "key10": "2vVeJATbswAoxDopNTNWVzKhPUgpJzezQtM4gkkRjr6ADRNDw8SNVoyLsCssNAHwrw1SdEzKKfT9Y9hui49VnaaY",
  "key11": "3Zh8DeETCKoNpXtVUEGWKSGfx5jANa3WSSa2Q38sGJPLv7iigfamsS6eTUDYghFaiRuHgJZX69RFz9HwBPRST3EW",
  "key12": "53eZkNCnN1fPSpi64tYhwZNuDea4W37a3SC7fuC9k6vgFSppvdFkXeqNsRUFwB41uviLWSsQeDY5D7e21UPi1iYF",
  "key13": "uo8Bm6vkucSEMHbJ2Wj9rh7tqGoK4hdhyQBYMEpsddDNYSqUY48AjfLZzVHGVVvXwo2LzEybrXEKo3BmWUGqLtw",
  "key14": "63Hg3TqbzD1KaBmQPvky9jGFgGVVFqiCYSpG8RdLpDupzHhvymvcKxT8L6B2cKxRqfusjF7DwwVFHXCczHwCuF2L",
  "key15": "4TYUKN5zmQ6nZXX52cM4bYncEHGVXd2Cq9JdnPxinzTojeqcGmrGANbiJ7sdvyBgf7kjEX16wrQRSrpicVASKJZk",
  "key16": "3Z2e4EkXChTNStNX7A9gtVxXSWuMiQZgDcgzQvy8mRC2VX6wtyeEtBcrnRHYUNijqSsuYYzkiWugoJYAaRyB6hWk",
  "key17": "2joB6xenUXeKENFNM7eDzY3DSURejScgPETRZWmrdBwHztNsLLtDtksrb2iWKxQZAyouFcBPyDMqWz7wxjWiTHzF",
  "key18": "5Pn7anZduqCWg1cLm9HENZLho96BEs7rPRdM5uQb1DH746MZ3paAHwZviZ5trdYRLnM73temvdj2xAkMzT3WgHaq",
  "key19": "3REiVQZTjeUGiqiZ7yDDQ6b6sbSfDfsXpmHxYk83xL7SRDfoo2KAgJuokxo7fuekCr8LvJoRxMsvT5yZVALPLANz",
  "key20": "5FpPQvmk1hdDZoFNZmFHFLZrfSToGCYboXr1aMhufxkC2Dj3hNh1RjPosaoSLejWJyhqwVbgMtjiLLz8kZiBTHbN",
  "key21": "5DdPQPtJn4oLPhk7XDmVaVu56ksiuLLxueTx3F7NS3PSFjFnPEcz3nc5cCMy8u1CBkjamm4CDhw7T8djZutvsEVt",
  "key22": "31ekzabnhCgsiTSdsfmGUKzDnsT2giyTfGA7Wagos4T5sjzuRsM98hDamwdVmUyeqSm65gAoqxu6m7hWzukD4U2z",
  "key23": "2cnXcYzDSWFFxjdj37y8fcV62X2DZKQJEoNP5gdCBWyjoaNwrpvgqtkSLWYCDE73jR9zwUAwcbX1FYDzDGnaxpmC",
  "key24": "2D9UoUqMiaDPAs1x92pD4vgB2oVkdUCL1qBbVGBTN62JfPXWiHoVFB7XgWeDDQ4ptbiRK9bq9TJ9HQa1SnFxnSeP",
  "key25": "3Ff2adf9hGjVBEvspxwQVXWwY1UvDAKksZmmUgAhuPGAYxhNZXwFUCB7AGp5Z6Rj7cxuQVyKRPisPqD3SMzddKax",
  "key26": "2RumH4qJoTrzcBso6eR2YPNxedKUS3VbnVaPeAiSAEqy1TdTX3kNMgUNqqN9RTjzUAunrwUe5oEzRuyEz3FTDwLw",
  "key27": "4vKLHx34h3d4WpYBKepwD7DzR7jqgi867mWvqYphqSBKj7re2m4wua72GwDdxzigWWDkSiUhqDv5kpRRNUkJ6s1X",
  "key28": "2DnRhqyMcRz3KkQE5EgadtrGhXxUjt5Cv2WW8mLFcBQgkHu92A451Rfp25o3KubAVdde4HwF9w6EmkTHQ86hLZmn",
  "key29": "2fS4unmtaoJJKCYMpeciBDdC2P6w6SHaUxZ68j6ekJF92BC59BNoMUAJotMmA2rCy1JiGRSosbzen4rWLxf3zC5N",
  "key30": "3h5WwR6BXghGunVJRhwDs6955kV5stqvzxMN8dGjbNzNvzv85WrosUAtwreCKjD9zauQgzceJZWSSXBtSs837ivP",
  "key31": "4k8dCr9iSdxUtuwCcr1jgFEWJjdziNWkg8TYnzvFcNQ1dZUg1e53f58Qqq7DNjmYxKXvQkrZXZ53DR5PUwzc8UgA",
  "key32": "4CjaQM3uJBv6n6RXYVwkHquTur49uBtZwQhVHPzbyARx7Kbp34HBLqksKZTGgnqwrCgTxiRuig3qRgtRNiXAQtJ2",
  "key33": "2pHvzYN6e9QVgrgsSTHnSp1KP7Dno3xCEzDUb5g4HZJ1cwvE4mEKUavLwUbE8XzkiitYobKn11gdkHkzi56hdymg",
  "key34": "2oXZ3NnR7cXEETfoBWuvxpV4YkKgS4L8GKHjBQjQzGZh9RX7HZoFHpcFN6khEtNGjtxVu64PdRLCcr3GN6hThcEh",
  "key35": "pjhnbNxuzaeEoZ5i21zWitta3gdbeBDsxPVZz19o2NV5qYvE6n29SK73Ef58bKcBhCgoVAKb1QsrFz4dZaAGxLT",
  "key36": "4irp41y4VFWs7GpmuSvhgWBbamcezWk6v8AWJ75LLEZ2iwYjkb5i8Tz1PpmJffULNKW6k85MZ84aUS7WPZew8ieR",
  "key37": "43Q3BCWH1wtKmWfc3hX6b5gRDizcMFfvGLwreYiqwHk36b7Cvc4xf55WukKNUib38ar9MN5HM9uAHTwuqkVmAnG7",
  "key38": "5Z5EZhZ4Qo1c8QSGn7JqUXTpB4sbYYLNptn49mKugSeF4yZBBLWyB3bT7FdtA5Zi3RBzETFTr1utea43i85zBaWW",
  "key39": "4b4Mgz7coehpz6KLxcPS76iEJz7zD9ANPGEBGB6yQxkxL7g8GdeyoRBYXi2jrbxxuwWJTuw53GdowCx9Lbv6fUDX",
  "key40": "9LPhoaRgsBEyp6D9TbAqrs5jSFB6WpMvGZmL3EK6BHCkS2m1a71oEPctL368MxehpUBV6y1eVHWEU4e6P7xjtqr",
  "key41": "2Qy1FGy4vCU5bNF12782VvzHqq63WhxwpdNZAve2Ny6QZn1oixH17Yee9FxMuHEGaMK8qdggtu1tkvjc73Zpt7tm",
  "key42": "2VYS4FJ21a91m89fiv8TdxPbhFYuEAJn4UzGtzUf119kk7HvMTSBNnPm2td2S9N3GoEyCTuye1xsHhzzZxxFwQRQ",
  "key43": "3HcCv6M33GE16itKNrGBVyr8ybbMhYXRm45oHuRPFN7pMyL3XCMcU1Qo1pf8hWU5jJTD8PFaLmsks2bxfjiFsyUi",
  "key44": "5wMzGz68fKG4iUqKv9DoP6vbUCG2nvVp5848oHvyp2QH7SStnHPEqyRXM32iGaPfLzs7kEuFf1VPsE2RGW4z1E6o"
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
