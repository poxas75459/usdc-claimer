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
    "63mpwoen6K6d7ztMp2METKtnTYoBjKt7QtyoDDtV3sT6mjmnkbm8TAtqNQJ4TKkmyUjhSPtj9JQAQLue3EounxVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b9xRAnQkjceCgep22k2ZVkAXsGakLaEjxL3oy258Eoit5okUGxUmqLBJjVLR9XRzNk3c1MHp4pnQPF6J3hJA6XZ",
  "key1": "4wtBKQPGA6HMChYTHsVAr1FsA3Ptk4h3HXGyiYhwAqG2XiSzezKumzd871GMYgs3pZame4HK6bcn9shKCjStLyRG",
  "key2": "5WayaSH165C8ZcYnJJttK8ceJgo5BDyCQFT66rUHt7JMWXg4JS8U1oyuDDBj7xgMqSJmSgFEt9921kzGG5zffKHF",
  "key3": "62GumKYjAXTC8bbt6VtGmyzJPgcvsrSTSmPdPgVqoSrWqnRcdqomC8z4bwzABfxCoBiWcoDpAsKmv9UeDfWaiYWg",
  "key4": "3bv9MVZj79GiyZ6m7WqEecxhJMDofJDTk71jtVyTZfd1yTUHYMGC6KBy2DF2aeXYetPiJPYvGb6teL3Wb56MSDQT",
  "key5": "3pXYtqxCwuSNZpgcAz7ydqTSNAFz8KGLgmVi114Hz2QASVqGXrLv6fZqY1jqeoegrMjz45VLu39wSR7YS3WZkXwA",
  "key6": "2ovF8T9woC8L6MDvCDEcw8NuJKTHv9M8pLuLL21CbdvoJyjFVeVU9aFs3VDYQRZFkBV4DFxr8ynLPyiNXfH2QBn3",
  "key7": "28qQ2zLY9gUZtXNvyY5uSUeVBZtMZY53rGB1N3ahwh1S5iuaR4N5yxfuyZYWhCVu4bDCEJPMfLJVeqfcuLNWeaA1",
  "key8": "3qNWj6TX1rcJCvhvf8kbEZE8PfCfGHrfF6CUw67fG12HijdPB9vmLwrrZssMu6A266nmkcNuLiJti9NmtxdqUhCY",
  "key9": "5iZMNkTiYESpq9dbxfeCpwGWJcgWLDkNEVTYCkYMHP55bRvD4xPh6NVMY3ZEGdKTXGRbadanDZG6xjcygwE3bT9E",
  "key10": "2qApFn7qfrigyDWHpjN9neBLfyo3bEi8H1ZsVqm8s5k4JyhG5uEsWt1jGEgGPGjkgnNkFmYpurxMLw8EZPRFk1od",
  "key11": "4qEKH1e7YiXK9EPkB5Jy9kdDo7dYpe9cGKFQUy6BRLdLJ72kauSv6sTVrdJeFMZCg7xVit8AS76Am8bVmqErH8D7",
  "key12": "tBducoGiCBpHKHtTL5uyMzmE7nhGFAXDGQMk3hKG9wFmnrrW4r2TmpZFG61Vbu5grV4Ka5WX1vSePnz5393zyG9",
  "key13": "4JCnV2g2e5Yo8WsSUJQdJn84ep4HN2wEwLotLeVsqArWgKz8Go6K9WZY6KGLNU5B5FPF4hFdFyD4fpNkKysF41wZ",
  "key14": "4cjU9EU11SUweriaY4rbKTWmt7kGPEhM6PazX8iscC5k1EgW59JGjyx9YNcEWEoLAchtX6SAJCuBhtak2yYbS7yq",
  "key15": "3Azae9kJnjDs3HwH4ZAMyJpvxqsunPbzy7s6k4TsvJ9Y1Rgs2sMbpVCwHdLCKJQcieJP5sy168xKgbNJSe5JdMMu",
  "key16": "33a4JR2RXrshsmA5pXwLWCYbmVH9c7UEhK82mfekUTa8kMWKMEo7aEwr4PEVUmKv7NUB1iRBjBwTkZymrA6n9hqQ",
  "key17": "5yxXdnG4xWR7vMNgngGSiQP6tWmBKqyV3gY9nbgyiQ96KPeC12mz6QxdUXT4RChWGzKwTjJ3KEH95N9ToSakq6WS",
  "key18": "5Q2qxf7nBtykazF2KJuUmN8ojhJbKtnj5LorMx3cr7BcLP4H7ateUGQfFcPMwPChZcPd7RQxQLWFSteuhxXCHaXL",
  "key19": "27JYfvu5FeVqZUGYpjvSNAeYk8RBye6BsxKasPjst6WLWtWPzUUmQk3o1DCJ4pphnFhrfaQDnsiZFtUAKVCmQrsd",
  "key20": "7Uox6kVWePtkoVDQXoCcQqYGSJUENmVM81NBpond9LTNePn4gvMsxszKLqE5wXsHsGgZwkk4d62CxeZU8LRebkx",
  "key21": "5Kk6nwNYsGUnfvFDvNrSnHsWFS3t3Tp9dhZ5REj6hrbcBaHMRRT6A76Ntjr3BCxSSQ5C4d8vqTMcsaRaB6qdJU9L",
  "key22": "4k8NJJ9djkAnMJaRa3TwvGapPTecwcLNwcJtHzcZG62ZHjrgtBSwvmzt311AmLkpZ2Pz9XUQ4JcZETSAX4AmUJSi",
  "key23": "t3ecaYRGyPsPYdHQzVx7KxFD5RdTrueEb8GQwAZ2dkUtUeqGF12pbA6QULp3QNBtnNEuApfw1x3XLSebcRuq59t",
  "key24": "3Tk7YqpRePtvFd3zPY52cXRPkuPYp1xY7nY9E9ZiJZjdt4Ed3QbwX6ygDH59L6tmG2D63ggQfZvRF2y62XHt7yMX",
  "key25": "3nBKrFfDpzBgY1Pj3qg8sdSjymR4P4q7yxyb54gGAB3HzXqCGeYaVgVwcvv4j9k9UGBffVZZ45mzet5qPuou584W",
  "key26": "2nHPYe5kTZYyoJNZ4ftC12xGxbXsESDDk89znRnvA3zACzJnWjnPWzCoyWqzvtPeGUj4NsYsA5g4xVV77dSyvUWN",
  "key27": "zPkmJtRjoHaodca8dGo12Nebw4MGB7BPoMGBktM6ghrwmtpW38GmTAPAmRbh1cztx6R45Xat2jUGY42gz7pJ2k1",
  "key28": "63Mwko8Vp5XBm5XbeW7Ft3QGmscrAy3SqcYfYPCmtPXqiWMrBvxqJ9pdjDMZDd5yvR9pC3whSsYKkP4Qu8L26NUY",
  "key29": "3EG5nUDQw5mBzbonvVRM2LTARH37z91h9yRXPRHnkszpoWQoCQdLEYavnFJRRtBe5APm4VR43ivCRhkeNk6hgaut",
  "key30": "JAV2bAhcgQdR5bcQUWP6YvWyBXJ1iKTvS4de7DNkJnK7t3e3u86Axbn689mZpDyzXQqqxKs5j8HwetKDNQipSMm",
  "key31": "3yonpii5a5rZPgFimUic6RX5CVhpDjStRaFTRuKoWmH7BdS3MfYwJjdqXx4bnyGFHfmKrDsPSPSs8Y5ACvs1RptN",
  "key32": "3LMtWun2GUxtegmdxZ7EksJVxHJ3ZxrkUYviJhXP7HoTqjtP3TbuuGBPYGFm3LSgJUSffFyLZbfUeQtPQ2iFjrfH",
  "key33": "fGPUT8taXRhRTR3tYeX8GmGc4FoMxwTvTJqHVT78NT57jfXUXip4maTqQeqkWens356oU2GwZDLMisdyaUrDut5",
  "key34": "2kZGv6tBK4vMcSnZf76jbGc1tEKa19oPEtefUnJywkmbgaaCEvEZB9xWrNJEgfSnXWbL4deKbP2rgSeGDMPXiAaa",
  "key35": "4FYnfr2e4mJAE7dGLiGJbLxyUD7a1vCYcuvUav4YzexyAy7TkctWAtLzFf8yCjzYvBNYXuR5UDKJFzTarZRP5Ayu",
  "key36": "TViC1dPagQ9mfFkPEQiLB97f92qaEpwTHXLykBn6GrPZuuonaxAqvrUxZ4LCFbd2AEF3qF66L4pzpAE95x75w74",
  "key37": "4xD1Gf7BKSQKWsMFLjPA7p4TFT2N4xZCjrF3Rbr9HEBtDBpJ5heJowjdAvLVa66CPfQwerVaNG9xHP9t6BSHBA92"
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
