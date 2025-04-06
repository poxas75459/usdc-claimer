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
    "2o3uLah2amTNNBex8AR2HKzmjihqxpUWjxVYDK3Mpu874heoV8VFuJN68M5jsTmxjkY6LF9zV8PP4h9Nx42qSqfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eTcAHdpZdDxgigeKxH23KhZGrfM7bPrTkPLPoy4XStU5Kz3nNqGxS9GaikR38zL9K8Wbw9PsrQyUW5WL3B7Tg7w",
  "key1": "3ZyQEm32mVkaRtwSfvE1L1pubnr6An8YRann2EgkupMrZNLUZbNH7eJMPoiu1mAwvLsFcA8GvtBqczgnMWyfiy35",
  "key2": "4t8jn3XFH6GAojoC4UpUhfTNLvw92mnAchAkbp3n7yAVLe7PmHphTQVYNHu5GkU3FVdEnPAZPGjt4LKHztjkTw9B",
  "key3": "4SawSuSDckzmax6J9owMuNL1tkws81tJ3hzpCYzcKdXWonMWx8QVH92KzKv9s5cmtJi9hD1wBWdNs5yp7NZjdjT3",
  "key4": "3QNWZ1jPPfYf2G3yr3BVL276voF8J3Doa2rM5V7s5RnPuDz8XXRJaxVgUi8yjF2EV97Nw1FZvg9B1nXGG3mkamZc",
  "key5": "2NmKmhViKdB5omDUEMEYg4iTTUmG7nFNJikmb3RyYbg7Fy3LG3SeQCoK9EFSj7gSPhfhwry5yDW9W5oYDy8sVER6",
  "key6": "3uxbzPZXY1BU8JPWgkP46W4cuWJS7RwT4yrWgk3BFcuHTdHFk2aMu8jV5ma8HpnELMf3cyV3PVaQm7wx4KfGLKvM",
  "key7": "2TDNnKsTyx1ycbutyt7gnuu5mcLBPagyDT91PdSVLzk5WeUDCRyWXg1KhuNJV5mR7sNzoNbHETD2hBEqQxWULG5a",
  "key8": "sKrG5WQCCo7nPgNNCuRKei9rf7D8NvhWkjSvK2zKb7VdShMDATKygviPJ164ekprZYWe1mJmz9f5AHofAyik4fw",
  "key9": "SBvxPaQS1NBA8w2v8CTtMpiNUsvtPZbMjKgbgdE1DJzFqHpYQLstkgtkLjLugCcDCDMdSYiT8T43DzwfB4EpMS5",
  "key10": "2vmMJA3BQvCQJfam8s3NgX8DyB5DzocWaNQuRPG9tiNakR5442wjq4r6yuYizZSJ7AobteUfZtvp8XfdMyzq4Vy4",
  "key11": "2x82f7hJbM4ZbPUgNPKVg4ttTTNBe5QBLfBJsCM155ACXZbeLtoLDjem2HarGosmAMpfohcaHSeDvkiqK9CGrd5R",
  "key12": "5HGNyUjR2pQaic79BU4yiA1Tj65QRm6ydo1Vzn4vZZXVGHwFuq8eSoiEbgGSXfBc7CCdfJTeUArDe4z27JiohM4v",
  "key13": "3cdrpcYPxt3YrFtQeNK3wJ3ucJe743MpfsZJyhyD54Npq1SC3estLceXdEbJm85GYyp4D7eh1uiJ5qtGZwtWVZBb",
  "key14": "63Nud6KxRWaSEnSxWANoyxnkip2BGYyespsYSePJ9D17spbQxZWQ9nxSPY3b19E95hGPWU1Fsc8hDCjwMkLbLCU7",
  "key15": "4djstF3oeVNHP6ETbq8zJK461E3nA94ukVVE6SMYK2uTi8gy4zJpZX46Q8phdwWzLUNmRFWbqd24dF2uGzEBBMJt",
  "key16": "4KA1EYBgsuaPHoBJ9442jm3h1UTqXqzJRagzL1tBEWAddf5Rm63MAdYu8v45hNMxgxRHfnYH4TL3CnFoJdx2GmzP",
  "key17": "scDfjBV1sagCZVmZ8x9VzYCXWZpXDP2mZHHgrTr7j7kmRMcsmnhktgyVRFMZoGz8h1br1w6fcRPHfNVB6bFHUku",
  "key18": "34AChASREGWCBvYPn7PvVriSUjBnmYxRQYHXstfcqpQ39TtwXosuiA3g6kPkQKmQdJxEpU83JghYNrkv1QF2QKtA",
  "key19": "2WZvG5SPjVhAA62mMjE9stzwx1KSWxBHbApBzcaWkr54eAoTWTMyKev1nyqaHHL2KyCrGrAa7Yrm2SFJ7kwr7WCX",
  "key20": "9rjg7Z1xuQHuQfFaP64SSf9JWetYbjBhzsa94GsUFQtfzwhgP54UphmkgbY89bhy2ALEzUSmA1Di1snnZgcRNSE",
  "key21": "589Ad8opo9ZP5i33prVeNdyjUJBNdMRsPLbx193QDTypC85pQm2JGwoYs7b2zpDuRPbBEvWNZusLsUvV1jfJ7P5U",
  "key22": "3nm34xc4f2tK9jPLti8GYYDKfSZBoHLFrVHxY2Cdez7nTvhqJH1CgWzaRLoceUsxAm4CH9DrpVH3wMYVaCRxwmK6",
  "key23": "4t5WvuNxNMfeZzvdKq7rVYQjoRr97VShG43SanrEHdU1o9P82nWaAZNRzZEY7Gs2fQhVt5HUzHBCWrM5pBu4miUg",
  "key24": "78jznj2jeyCKRQVrhXnf47PgHsNPpW9LQ21o6EoPNaFSC4f2PX5S2R1xRYJ9KbqWkg5zsh2r2UEZnRweirSZdS9",
  "key25": "vhfAXAaE8okjFBAMdYRyabjCspe6NBiq7BGFpnC1K6zxCabQRrQHjF1tECB2xnPFkBugCkFm5WqUHVUovpwm3oy",
  "key26": "5E5jqaMVzzdPteJLQGqhc3STXbCskyq9D5fPCcCqVbEyyzpzxJcTv7Fbc1CSzVL4PUpxao2DY6PUUX5cbdyYZh1w",
  "key27": "2sCb97CSkEPaQoDB2ontuBSx5QS7ddg8rwkiQJYeAAd26s1oG7noz2Lk2fZmpoGvBDufkJCzXqveXYVTBZuUUAex",
  "key28": "4Yj283yicnoZS7Nt7aBMZkZ8LEwuXoUF9NXew2FPpn37fbHdtxNYFzVPk5sAhrnYWsyCM4vaDAZ8CxHbVhAjVrFA",
  "key29": "2wiGTutJfnW1uWCqzQfCN5oVgjy92UQVpxJfZzqnzdz4L1YrenvwdxwtEKCawA34FsbjR7i4tu1iU5hMdX5KfoRz",
  "key30": "3qRMXe8nxX2UhoaC5MUyVxmQ9E4ZAPQchhtuBgnaHNW1ytxpZAF3DKb6kgzAdxyk4zEyUTd1NjXE7SgP29UZ4w3n",
  "key31": "2JHos8qMCPwEF9VvWAST2ZH2QMqLVrN1qWkJ3qNxRjpW2Tzg5BAHEUxQZPTGair8B4C6vXRqfFG5kVQbynmEV6kP",
  "key32": "4uZHa5Yhnvv19zjXEGZjpGXzzeaK2joJBidpndsSFuvNSEcC4aqkMgvbZMtt1wguNXE8n4jeXLYo9qtTNQP6T39K",
  "key33": "2jb7TRriV57HS9XFwnFKsYwXfCwG28wgFurY3etD2sDA9xQ9QUeSpaGzBUbvA22Ah5hb6W8mdMffmc6i7YHJ9cGq",
  "key34": "5DmjcWRamTxNWMqjwBddWNgPk3mZrMeRji6nniCcW8F8UsW5DCkhhUyHNiFgPtZgiFZbXAe24uawLnknzuo7BaeD",
  "key35": "GfomndxUy53Sx8xmHqnGwoqmLd6npFRQvqhFXPpQRhRACxr7L1z5rhi2Kp41YNhxxkieJUFjTALxQqFdCG1KmuU",
  "key36": "47NM5dnwaffyQrEd54ZKZjPhbi6xA2cvZRbXsvC9gCHCFXvUNj1iAEGSYan7KZWmp24Z2zycd1WXv5b1HhAcAxWD",
  "key37": "txFEMg5iL9BvuV2cuw66zsd56pPxtnhkwVHbWXLoZtLD5UA4pBZGP6hcHmWdzjQ3y2M4DswY8dHFx9kGw845ZpG",
  "key38": "4Fber9mKNZi5RrYXbfXyjAjrqVzkbCYzV1e9aDWKBJ8NcpsDMj97AUVorDtYS8vFLWBSEuj7PM3ZhSxeazvsFz7r",
  "key39": "2gNewNBmdtTKHvCiQWSPFLo6M3e2h38AtEPntgjy1Px7mF9rz2Kdwn5UhT8JRLQ7r9cw6RhZGe6RJs4QePfcyVSd",
  "key40": "woNrFbzmFLt8CADubqFwD6Fzsh4tDmGgV2fjuGeJgsXsiV46CJtK68MEmTx4GXv98vzMm6UwVKTbywFRuB7itqZ",
  "key41": "42UPtuPuNfPk8b861Ce721YdMFwrgWAnJ6re2ES1ZCxXuvf8iZyLjUjdDhJNJ85aiveTmpqmtnHG5JM1HMMCqETL",
  "key42": "3WgEKJfnXm3wyitXZU9CS5hNeJNzATsNM4d5VvYcsxDgAnvVPSoXXBNnPami3L4wrddhZhSzywhjbXG29YuGEMb9",
  "key43": "2g3ZZAUcpeLkej5tZmGWjKSyWkGxDTh9N79FSZNmhSto4PsTYssXSLB1FgYTDrvEY8j1SadQ6DgYmShw1VvGFiMV",
  "key44": "64ukQ6GPeFvodu2WMzeomPpCJtQJ1vWxj8teVJgQBcxrDCH7hgzxMwCQCTifgRPaK8aiDnZ5CdsujDGG4H8YYkmc",
  "key45": "5H8wvB7KjMa2CnyX6oGMG5HMxCLy75gaELmza5hbXux4xNZmToHrPfqMHAiwKgvqnNuvoHKNAxyp9GKFhUvasNYr",
  "key46": "51NVyMfvEonYdrD5sZuimq2hgM4GR6YP4hKtemxWfp82SZVzjdedA2FMhJP4cR6Bn7cd3yRjJ5CrLM4Epe27VoGM",
  "key47": "5s7RBfWahzvTdad29KcDdwphMV1TtcQZQyw9UAF6sk1HaZE2iTr7VUDXU1YnHT6REQzbUmqo9MhLTXGPjoapkEhn",
  "key48": "2yB8xHa7Y3bc4gEvRTXBn5HR3uwMDHh4KK37Z62anCFLfdu4tk4vzA7VRQebAz3oGhkgagL3hCUs8NCm3cLZaDCJ",
  "key49": "5pk8s4g8ggf9dh4ZWutjv5fsy1jytp1wMtdqrfrB7eoRGungPTajQLa3HuzSptvkFuRnPJ2oUWLt3zyqx1LQGxFn"
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
