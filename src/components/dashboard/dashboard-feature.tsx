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
    "5kJso6ebgeEFhAXBdRYNSPgTZqUJhJFkXvkyXRjpEUcFmF57drSLXAw1ntL5SCHd5vvEvqdU9URGmb2wD89oHPXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EenEQ1fYV2wN2GwBpUCU8Yw3ytN7QH81JJV7hngF1QMQv9WnP3mohjceuRQv27uPn3sfbvkbkwRZbYMWucj7vEC",
  "key1": "4CbyZi9WjfzkykREt9AphzYD7VCZqRnpGKc25upXaCC8A765PJdepmNbeBFw4EZqTUdaksSfBPfy5Q8UeAi6hnZu",
  "key2": "cwC2Z7TcXGqnSfSVJyyXBKKwuNedekV83FymtuGExpHaJueFXuySXVKv9QC1MZHxejxERKGwnL2TPazNjwBi5TV",
  "key3": "2s7sFJWQQb3hJFZG3xW8A9TL8cwRk8VCSsfyrby3iNGwV8Jf52PCm2kh1mtu17K5srEKJEj4xdNGpwdaPn3EqDoY",
  "key4": "2s33MRCpqUhWSTCpWAJju4bRuhMQjiFbnUM3WCNsi4ztvM6T8pB4bYdPaa2paKMGM2GMj1K1QDnyK8Cf6xGNSYfx",
  "key5": "4xv2pvrjBTu5xWWww8wkDSKzXGWu4cbGZfrskxnVc3BPLakMkw8tRPRD6L4ENLmjfWvMS7N14hvrfeTY9Nv8Vna3",
  "key6": "AeRQ3nW5hBx8Srwoe4WxEznWMxcGRbobcxVZmJrRsKbANG1t9d8mgmedDtyr4hiSJ3mMWnBBXEqr2CaqVHSo1FW",
  "key7": "36QxRA7JJTttCrjL1yu76y5TwyswtcgjH5cn5VH5Uwvfm4JPNENypGWtk4U3SUDgtCFqn89U8qcC6t5TXaAmnakj",
  "key8": "4BeL9Ayu9xKfJWmQRFop4bDY4mTN2WcC2Fz7HMtZr16JVTyoXooVPjtNdSfFUiKvVWt6NK1E4vq366wgHfuqftHh",
  "key9": "5Tcho9zjUj28Rv4SEfjEPB5sr2XqhxiQTLbDY9ZeocFom7atX6LudSYKZ5H9AtE5BVhG9h5ZiVPAiWhHEb35EW91",
  "key10": "5AxNE6zKv8eqZkE48amxXFZ7z9byLVSGaA9GZW7QHjKQvJgABAhw5Y7HngegG9PUyGBRwAVsWkVg3Q3Ngf8KTfhU",
  "key11": "2ByU3NcDr2Hqy5CzKwfqzzZiTMubruMVTvHfwxP3FDB5kfudxbFag6Bi5Udq3a646yQpqxa32YoDAruJD7RQuNTJ",
  "key12": "t44QBNeNVMFHM7rEpAuQmy9kfof85RGVPtMdZVdy86rg7LxshdJA631dnqCQg4zv1PthwQP1T8icCSxCzWDu37t",
  "key13": "3rReMDJyjZi7PbC14W2DfYuHRaubobcw1UTjRsrXrZuWrqn998tfPaSrG7YJuXYyx5Pg4oyTzWzAXRmxUB1oEPRr",
  "key14": "3Ze7ft2vz5RNXTNYu78zSnToQe6etD14tNYpe3k7vbfrJbewyS56UosN9RStEMNtpHGxmDmJLrWDVxv222N6bA3X",
  "key15": "2mBM7qVV4CKTEeJeifFn1XWBQjFc52HTmUyD8sNxvvPaEoZnDat9LmM2fD2SF43LSS7ZgdKFCEKs1qyvySfai51J",
  "key16": "58swcSsdbJk8yHi8RVfofdHj78GUxfdYnVvdUyQUESAzncqw2n5Bdg9hSpmBKN9zfwicVppzYZMrJHL9UDx23zci",
  "key17": "KWrdLaphYDVZuWaR4AFnWpNgZKpMNBrYHwTNPVrnXENSv2r34sZMHuqEKNkKHkP1uGLbE5CMhUE5tdwudgz5wqG",
  "key18": "5Mf1NsSQEkU1TeTcnWZf98UaZASXT7J2zdM8T39tFah7yEGcjE5hJZE6bJUnuRcofNHFVz2CqjUAMJ9M6dv7aJxA",
  "key19": "4nNNSoYRxUXWCNyGRmRuezAAkuFLNknr1xftmUSVRRnJB5knKVVDqvybVzXP8iuTcsfpGRAXTEjEDDmzax2u37P",
  "key20": "JjJMSWh5qdvU3U76xvA9Qy4wsi1fe94NYZRWbWcY8knCMr4GA4qPM6aCzpnwoBsa3LWXVRSn1CVE3D4F4vEMeGp",
  "key21": "2kGv2iMiY6xTBkX5fh6pktgHP2XiGgcRRjfY9GYQADbkQdM2hkcVVn2kB9Y3s6hmwdf79jW7w6oo3DvN1M8kjHS8",
  "key22": "2SE5LE2qZAb5kQWjMG11Vujj4BXWY5iwjeCS4gS38dV954aXaMJtsZW7SRA6e5vUsQJQzWiRHJxnKifYdQR81MwV",
  "key23": "KYhwZBoeF7xt9Y4kPzFXgf96vqJPBCfMfKCRPdzUtLUfsNtt4GMCnAtbtCukgkba5C4CNho9jVqqK2x1nqtCPog",
  "key24": "MMLds968Qw6UM12bd5pXhEUWBkBbLqttCckbZsZiUxVPEVQvLP8jLhVTnrG33qDaBFcju7r5xUaJVqU5dVNwSo6",
  "key25": "4mUCVQPgtAYG3C4avsTchD4x9juiitSq6scZz3F8wRUWXm5TECWGvctV7ZQuBS9JqCGM1fL5XqDPB2WLwed9MAgW",
  "key26": "5D2WpBb5aJd9GmXj3oxs4Dz6NmHXUDRENi8SjdWtCsW5SpZNQVY8AhWf47Bv33RvhNBn5h4kYCvKLr2wYxLTFRq4",
  "key27": "3AJLk1XpncuDC9M5zsoV87r52hr2EGRq9wW8so5WKR39J2fcGe3naLTNGCHBMsxP9ZZEBpoUCdvewxm1woztRnzV",
  "key28": "3UuBgGEwqVUgMyygEr18FuBTfvkLmPuuVaBgzaqbtrgHEuCwobz1yW4DaLbkjfa8UQ8xMNFJnsz7iGAzhn1ytRfS",
  "key29": "5DJWwp7m19qwAanLG8BA5BE4f8YUaWcqzvRGPBRR5nmS3Ee7daTuTzDBLhpPJeBv7XiL6HYZJyfaVjENAVbYFCk3",
  "key30": "2U2pyUdWhjXNH2qbFZFRiWkHiUYatzK2v21wy71CVdhPMQzMGCtxCDRD5RdDFwhKxVu5WbY3N9mgNqd2yDBqt4Nt"
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
