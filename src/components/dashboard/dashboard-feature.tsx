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
    "4JF923tzrMFKypKgRmyDA5LoV6WSPLMwCKQJiUrTELamjcHNkeKAnrQhurnM5QCwUb31mFVgH8EpJqpZyboXRaiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sr5UXvUJjjDx2mnJ7UgYpBLyd58ueerzh7nHo4oSi5gCQV3weUoN8K2ma91NeSWF9eKeoy1FHjseXEMjagNufYU",
  "key1": "5VKp2SXq6BLLR1WocLzfAbC3Wu18SPCqnpouJ4aEj6qbbwc43RhznuSDzTQRzZAoDqqucPXJVSTgLGfeEvYdKEuS",
  "key2": "3A6StTasjYznxsYvFcnfzVKo5V7gVuzu76EtoQoG27jkzF2LrjuB8qCRQBL8p7TZMp6StQ2owhmC9cz6oZhnPWLb",
  "key3": "4oLsvFzRhREp7yeGyPCZDeXPqooP5V83AJAeobwa3jbCodqiUiYMYmaCyZT5Fn35omjVuKCSHtnF2czAEav2erZr",
  "key4": "2P521A1KKvAGn4c9hFaoydFXujD19mEcFSFp8SfydWVxcLe4xWJC7ceScEuQ32ovP1M6tU4BtvRXreKuYaqE4CiM",
  "key5": "3NyTASZd7DM48Ap89ex4yjfpMJqahYAS6V71zuykDRsfgrRsDCcxikjwzaxiXbu4wrkmj9srXfyeQPgFDP86EMqr",
  "key6": "2aFswUztrdeGRcqkkGQtotfL5g97zCNNJXPqChJSZ1HVnrzt6eTXn65NSkzMpk6YJwKeDUT8BMKnQC5sGWMNhEQh",
  "key7": "65qi41iQ3pDfuw8dHbEdkVuF8PNvPmvNtNc6tCuT6XZDMJ1aqwnjCktpXXLvP2x7QrQWjMU5aUyh11EpSK8THa9G",
  "key8": "2dVLyxziJPTSaK92mhNW3NaZKce5kBenEGuw4RRazisT6iEpacL1zQDFrpNTwX8WZua4Ph4Vg2jjJ3WFDesfN2mw",
  "key9": "HAFfqXV29rYYog9AffQMk7tzu5WVvLKsmS49pwDpzgswbmN6xUaZpsW6skx3WrxhmLNrpmBtcQot3VVTnQQ1j96",
  "key10": "5Mb7y2BKetnCpfMNyvvBB9K5GoEQAsmtqjWpuMwSprKHqJTSnRMsuRvbqr5TkTVZ3HsMSL8k3gkUN7oFpDEKsdXN",
  "key11": "4NM7k7wNysB4N8jM33Y2M6YqkGCi826kQw3e9zFgw1EmsbcgPQGMZ1GNHonyTZ18CHuqnq5Q9qKDyRXc5zQR6f2R",
  "key12": "2qAu37yDGqAYzy8VCRNmrApL3q6c8kqa3iHdNcY6qS82HD5h9hJNmWtE18ihCQ8EUoiwwH6rrtQ2u9hshiz7yDFW",
  "key13": "3nvDQCZswUGF1KvLRCSc5wZrrmWGi3rgMkfnp1DpXXsE1xEvSWfFb2xPFmFBCK391ntanDSUHUJM4cxteQq8egg6",
  "key14": "2gSExdxnGn7gf1VakagtxTDXVLxQ4GD9WrJj8tVyNRWNRPvZu72f7D65AbkuiXf9841kuB5DXzQkhjPaiwrWsoQy",
  "key15": "2GUSwAz3pQRSgHoLSDeAFAWQVEnoCkUCaqvtUrMHwWUAKZau9fASqqF4Gv7vEJQmaY4povKJFp5Do3F4SwwmNa3z",
  "key16": "2LQURb6wg6ms1pXVXCnJFVSsBwN5hoyTEsPjaByTS5NwEspDw7WrBv9PVU651pquQGJPXHVhC3994ezcFCPHeWvL",
  "key17": "3zr5UB3XQZuHYECgaqFKjpoSpS9KddWBPuiRWvwbVR69ZqEsxe6HRNjZKuzYfNiVpXPNsVitw5YgJdmT41q8sWsd",
  "key18": "TD2k7QDRy3DLzxFbqz6ZJFN7GZ7qV9QMA2nda5VUbMWTvJxsiSZ61oh74USFcb9dHtmhYfnjWVfMvzc8hquiybF",
  "key19": "3NJAYaNMCo4ampxwFhyGpAsWzWku8Wtj38EyNNHBbVgeWy37GWH9iq2HUmrvYM2C1QtvcXGCNciKnpCNLjWxd9Ue",
  "key20": "adMrk8qrPfnKdfB41fdbhGJHHmcXVqErv43m6sU2Kpf6fnFzkDBPRHyh3qW72eVofe8ZtMngLS1Tr2YgiCJLGXD",
  "key21": "4sjLTCHiBgoRYhWtaHWh5NFMAFUyrSEo1mi9PeKXTiLPyjBFkzciW2FojZDDCrVowB9ajZ8kQvX7YnKGSj6o4m7g",
  "key22": "5iRpxJGjQTGyPFQZ7p7NShbTMAsqedphQPRej6fwRAyirTTtuP3d83E6QEW5KvVqdg3rng6JK2im8rSgxGpW4HpS",
  "key23": "42tjq587NoYKxpbHeUXpnsf12dyB9Lb3i7Y5phqtigRtaskFnCn4VeCjM1oDYWqUGKTH7nWxzkYXNNM9EytK92Tm",
  "key24": "5CmmKw9JaEoabwVZJAdsKgrxu3drcettX3QjSzgTK3Vrjf2LNU8o5jdDDuGJpH8ZEq5BFG7nqre9VgLBajf5Kkbx",
  "key25": "5voPjA2LEnXJhPZC92MvB156Y7tx8nFgsJUTiaaF5ekP1d58D9FUArCP8ufefQi6hGfbkNyKVoJQ2UgKApmZBKug",
  "key26": "TAnDUPm8Aprtw1Jpf3RWMrtB4naEdy3F4TBcYYfrdS5EaL2uGudRFdavJ5Nz3qpJpzDuund5sAyr1bMdcHS1fGz",
  "key27": "k4LcBcnHQiPTY721E1UuqpRFB2zt2mx1JBm4YgEHpSMFvsXpNtv4px3i3LovE7coosg5SRggNLuBv7sjJCSsNdr",
  "key28": "2n9CskogEJTCKoXyd17fwzHN5ePKXvTxMrtZ1ox378QNxjnFV51kXiB5TBrMM9ro7MaKgU2auT4vzA8SPj463SwK",
  "key29": "G3B1Gn79zYT7uMFsGSjcq1cH2zcUczjuDor7HPrZ5WdA23bK4RjhkmodvLrckYifQARxRaNuGsyVcnZiGza6eoF",
  "key30": "4FgbvJbuai5XPPcKe7ZYHBFt4NG5kb4DeQw68wDvzQ3SX9BgvbzFe1m76NUmwD2iGjdqNehfYC9cqtrRdstrNkQ8",
  "key31": "29LPhoRsbGXDxeAGBCFXkGss3RWw1Katr7Qa84t4Ue2buzA7RonP1CKYU3cETQoyEvJzobBMCZ4bZ2yJyxauC383",
  "key32": "5mYXfRn5Xq3WyyKmc8vTJPD5hz1wSqdYRekghqr24U6AcHCb9hGRDapXCsZby9UpegyNKSJuJvTMkrnYBAQnoms1",
  "key33": "5wpEp7KcXYXbqWB3jutJ4Wy3GMdWXQb98Lb4upG1FBfHxiqkRmc5vfGLBxnwtSBXz75HHeLRxbfmS9r4dnXm8m2f",
  "key34": "2pQ6Emf1nmTFrwSpYDExZ7fPBn8X5Ags4nFcQrzvyj3fvLMbm1UCtf11qcMrkAxB24Ky2eYzYVJabXeWfJEFDpFZ"
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
