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
    "2nh1NfW9fJpbQjwb3EBbNN5aBCJPJTckyLVYdigr9nbtVEdh4JComtjSkgFfybSxQWAbX5kS8dt1Gx2mGuBn2Kv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JBZDtBUeyBXGiRNqCGRS3pbTTS8uLP5AwhAfAn9SWxeNaRph4CJYvuxGuUEHGeJnqHbHATySWCZuycZ2NhawpcB",
  "key1": "2XvFsKC1fctkATbG9AyPmGyitrLoCnTHjj5xPkKkjsWJr1QD62KDcsxqtiV2Ui6q6uSjYgsiPqjy1yCD4kQp9ahR",
  "key2": "59iWMHPdbiGZHLeyi2N8Nu6m3QJ74DPk56ux9RX6ZnPT5jTZC1Xh4vsbhYwKyBsGjJ6eG9ZTw2GsRqvubkxhY5v9",
  "key3": "rzPfFeRG6RrraVs9N6LKF1uzp44LN9uW32aL4D7rPX5RakMJrVot1rxWbB19AywnP8b8J8UnoQwruk7pQykBtFD",
  "key4": "4wAySgLRUidijbmbrAsQa4xvGUW9Z2Z7GQwx37YmqfnNmTaZCWD4VfjZbU8sySPp7acVdEUwWEvd3bZnLDHnuqzX",
  "key5": "3Tonr7UKmVr8qbqpMBULgH8a3fQv76EidwEQ4vSGLGMzci7NqzApaHt9mUns9TJTWJh4SHpcHuyXJVc8y4gP4evJ",
  "key6": "2W3XZLaLgbejqUHtBEAaMH1MjSE9L6x1CckEjHFtHQaJZi2MPWcuLgteBY6NZocRHhsnKkgMywPJpkpjHvukgoSX",
  "key7": "621yMpbdNSjqcb4sfnrxD14jvh17ZoUuK6WFNo77u5gMe8EEZMpwCH9VFu2nSNkUQkt8iQyviDLHRKrQEzJLubeN",
  "key8": "25RKqReD15ZcJmoSMeAWBGkBTM4NRPCuz1BtYRijH17ktwhyWfurpqHMLAQfkPFYiue2JHjVhvG1ux8N9gAtRuCE",
  "key9": "3oNC4cLCsHeJWjaohFVstEpiUQhhkV6q5P9kY3EANU16pyx5S4sVhPExQn6MJwf8sNBcDLJ2aMiUVatpjNt77rJW",
  "key10": "66CDEQxiBwbFXxwUc6AjS4WiDaqfPWA6xuYtFS9KNc2nmi6H8Zi1MuJVdXQTw2PcnvtgcrCxHfkk2rZGa5KjqQEH",
  "key11": "2c91GG2SkJPmLcKx4Zb7GNnt4miykpatMkw2KPBQRUpz1dLaAJeQKeB5P3pkoGuQYNfD6q4sMLFPfAgTqp3k5Qxv",
  "key12": "4Hjb8Zm6bjThNZwGWxZ6aVGn6D6FZP26NbMvrJhQ847dJbjp1J7mkmP64Byc7uu5WN1roBuaiJCzq6UmdYSxwAiz",
  "key13": "313gahrQ6iqBRDyGBKJ4EY2UbvS3jwfCfDYFBMR43SzSGfiopLFCQeW2B5GU6CMgsDN6gPcVS8CVaQpFafDkWftT",
  "key14": "5dTjGihrw89mpdobb2pvhnRJDvusN2nB4mGD24TYJZoYc6ub86CLy6xMYQPKqAnt9JLELqpTsyHVREGXHCKMLmnk",
  "key15": "3JM5YSEhjmDZjoaTLodqUUG9QYYtK1nkek1ZNK1JM5S9t4YinLR2M4NpA2pyTTUrfnYPLoTDBgFNu2DamdQkbwaj",
  "key16": "4uBafTTF8WyTtwfhPsK2zkFTTPCT33oSepnB4RoK25L8QLEeHwdYNW6Fxap6BUJhWEpS8zpxpbuHKAs2hVoJ1uUC",
  "key17": "27cJM6WQgNbicdQkExfQPFyATagspxbZoyxvi5aCLyYZDDtnajE9bGcBG7Ly8iZmhJZfXCgNXnhbSZmFLGFbowAK",
  "key18": "4R7Ate8gYAFnrmc6p3Kc1w3QAShttgL1fBx99LuyWtwM8eLaD98xaxMSmEaVuVnNREdcRe58QFqQz9p96bvAbPdM",
  "key19": "54huu5YPUGgty4YXr3bMsiumuFo5cfTzRhFwCVNnYXZCtodRKq4BqNxDk8WYsXtdYYPT63nue95AXNL6v1bHjUDz",
  "key20": "P5GDUJmnutbG1VPSRxde3ziWNL8FyRLEUxQgB6kRGPdqXFyve8h6tLgmcJDgUMkGS8oTDhEFpqFhk5wF7zZbdze",
  "key21": "2uejzCaEZBHtrEZAyXKtT6zbSc6EfXRMFbXnFUDA3NYoG3inY5WMFL12SEsjnEy8KMu4gXfZLGa7sxVXcYWrTsVw",
  "key22": "2CfTg6mn4mMcy4JATvbDW1iLQRj5LfM4uqQyEyGWSJwKmd9iD8QWmGaie8xEyYH1acuf95jpddMPDNFzj81gjU6a",
  "key23": "kcgrmxezfQuh3dJEaPXBbHDLxGVfHWH4USB9LLSdXBY9XELVn8WjM7bTxjXEQmjKDWXWb2XzNhiGCk2T4u2P4L1",
  "key24": "5Xog2pWGPZhiMggamGnQoX3FywzxCeM5z7bEFTcTL47wPVwMmswVHcucW3XfmmhazwxUhkoG4fmALv1iFFkAugq9",
  "key25": "5vrQ3AbwMAyeoU8JMJyMwEsY333347oBta87FaZmdfBGy9WaNCBTmSZojpvBwGeB3LjkckCq1HDWDC74o2HaWfZF",
  "key26": "4ph5RfmmQyPbFwAAGKveHEQwBuMvMkYk94XasMH5cMh6j2kGXLnqYk32S7YN2xM5tGixbiSMffvVZnyuqQjHXaBE",
  "key27": "q2HnFM2nJmx3UTkT5f1Huo4qbj2LVKhYLnR8KZNDjJBcUiVNcTBKPB9sDLq3nrp35gWgSaTmVKW9rWFSbbXjrZ9",
  "key28": "5PvawHeWyE5RtAmz1pk5kqYVNwN4qoikfpqTJ9qLRCc1HSHHW3dDPUGx8PfaGqnyM7w1JhTmj78BhdW7ptpZjy3X",
  "key29": "2dut4kpT82PRHx4i92fvpQVM3ftQSzhfXG75RdA94GueJYE3LNHE7rJNzrStN9mLLNZBUVNEfHcRQ3vwQX8XHLpf",
  "key30": "25ByCTDGdzhPJzC7bXbKd5FmTmnMnHkLzyS3pqFB8SeEpK9Sv9rTGV9tSXJmdJhfahjadmhG1dQQ4Enhd3DCpVj8",
  "key31": "DKHo16p6zcLPocw1S2KTp3YqXgmiDSCobw7gfzWVxxgDP4STkD6DEEA2xcbuDUQ4xWyopwWJW9JV3paJcvV31FD"
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
