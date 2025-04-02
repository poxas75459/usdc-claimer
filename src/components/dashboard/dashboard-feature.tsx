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
    "4XQDzyA7VdDu3UJ3bxTSzFavhkQyzECh1qwoBBRxp8bnWnAVBuXfSm9Fv3jD6BkKiMSTTrzGC8YNch1TVaanbtnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ECfcrTX9KPqta8QrMXg1EvtP35oFediG2sWGtb9wxwR3zeRWAQsHC6QRUVayiQ9kf48GsbLXxVcDiS94spQgui6",
  "key1": "2fmxvVAX5GuS2rNe8cuGHE8zY8Ryv6xREj15weEX4maRzJQzkMAaaYBpVvnLpMfga2mLPrh3R4Q6oRACebUzv9QN",
  "key2": "3vmMnoyhEmqUpF47abTTBKVcqUy1cvC14BQdfiEqypPpuwn7KDj93NLvbwWiHqqgdGcydYYphAj1FR6rvcZHPEn8",
  "key3": "5cJtkzi9p8io8QHiojhWkZyZH6xQqoBr5N7ERdxktptUx5yPVg9UFBgjWSM1vttk3PaqVMb17GBWw2SDqGqGm7L8",
  "key4": "5dYzGuK4jFcfRzJeFU4jaP1Yr5DhQhAyZFgzN7LxNG4Ki7rwwAg3b5V2zp4eCYy1FW3d4UbiT7KWC6V6LZp5WrXP",
  "key5": "5J9ehMP9p4c8wNm3zY9zmwom8fUUf8HUnGXXcFNGoJJMWfFVtMySuF13tCK7iuT9JECH1uRecKAPfQtJTeqMnEWt",
  "key6": "5tU46TFB3Cz1VWX1oxut7hKEttve6qHbWWs6BwTJDnJWc5gxZRYn4Ev95pkFzajiWbfpkr4exEwDHrcYWvsjJfdB",
  "key7": "4Pq5iribt62W3datnvSMHLh6jQmyiSmJHywRCBUkRjBjPNVQFwk2VeXLS2AaUez8jPtRV7TRDMGKrNivqzgCf83N",
  "key8": "5q3VeAycLUegT3v4KFTkJRDzWHsAx3Zy4gXbfjzbUp51qEEDc9KVFy839VZz6SJgENTBNzpqFDsAtkLwAhSynze1",
  "key9": "56csCyj93ruory3L2LyGPxGc53q54NBGmLLRJD6eLiYYXH7wJAKGvzAb9qVdkzow23QDMFnPhYhLa321w43XdikM",
  "key10": "u3J3nnhj1CCRTK6NUqvrNvNMkYzfFj7s85b2MfpwSuTvFzSg6Bt6gdEJ7JNN6WMFGmNFBtGiJvmASrxR9wTavFU",
  "key11": "cLpZz9hQNshWkZCwZQWNj278t1vQ6rJKvjo5ot6eXBY9cigXFtqd1N5SsgF3ZDHodWGxgpcHp8p4rqtsoiFApWF",
  "key12": "2LJuQyf6mduStxXqyrM1wXhJc5eLC1Ff62FkHbZcKg2dtGxrfiYDwfSfY9QwnJDcYAUSvjf8P1s9DXFBpSxkPbXH",
  "key13": "5eVMBtWfnLQvZDosGpMLRoksW2W9S9Dma9FFqVt14hikjPepuxfxNnmQGkEMQZQ3XkcpprGaHEJe4ptkEAnHMgax",
  "key14": "4UDDUxV9yjJ7JUzfuTSixxYfo28vhojE1LBrpw83Z96HakYye3ALUDdwgkhLB3H4rKWHL879kH5NUiVNsGLcsmnx",
  "key15": "4m9MjpxJAjByYmH3V7EtNZ7YGmg1Gwteu9pjTAR3ZkqA3Exi8sqnMyxt1QDkJRvB8Zc5YWfYCSCv5DEvtiNJEQ6C",
  "key16": "29z7TEziJvdX5re2ipRuc3MsdhQ2HaS8xAu9agyzPc1BCWAxkNQM2uLp45t2q3251kqmghUu19HuZvetuBB1XiaV",
  "key17": "61Q8foaYptuNmsnyaoo2C4Qqp18h3S5D5wWJTbeP8ER11ECQKjS9H2xqURvcTygLc1BTZtJKf4736xVucGZkNdua",
  "key18": "2qqx7YYBhyWiaVeh5EjY3ZLL6s99rys5nSRF7pBPTSis2dm2abMvEj2Xmey3GEwDRD2zPNwdMA1HmppwmaeQauXU",
  "key19": "56bdCnXMmMGXyuHYc8Zw8o2bMtERDVLTFnsFs3prknFynQHWMcreuejfHKQuV3pVC6s9Qt7JjuMjwpb8LACoCbaj",
  "key20": "LRJepm2mJUSD24puc7JdpFeqQiUaUCxkopDMcWtrRcuRMzeedowJFjNvPDuuE5Dza6DgowwxnMeW8xCUWwnWMsP",
  "key21": "2y6NhgnMADYjj7sEJfAB8KnMdw3gPHjoUTNxrcdh9Rvj3PYxVDt2jFABSaJ2ATTiyHoDiMxJ7aQopR17XHUJFCj7",
  "key22": "4S7ZGHD8S6H9zjazBKnN8EEXy3riJwoeCui5XJ8ySx41J7FXyhQ9XSRcb74WnJEW1CRUEModXyU8T5937U1LXtq3",
  "key23": "5Rp7VbF3M61GeE6McVKuWBbPN1Uu15nnB3W6M22mpZpu5Zx9TDCyLYkc12cwjp3mzRHqEf62hr7VwLEdV6iJx7U9",
  "key24": "57b4mTuztvNzPLYGveUk5p93ujihXENv1eKrSKXipb2RLmYqgtDEvuSS7tQGwdEuC89BZCH3Qxxfasv4vuZADXhk",
  "key25": "4Qru6kYuSZEFQphRWCF64pVC7GTxXD9UuLXrXkJHPQoCyV9juw1fcFkfVsWbVYZkVV2RRVyHT89zBpGHL1hr6z8N",
  "key26": "4kmw52xvLyMLJotnQeEwzBphsPuv6P2zLiyQKmVwAGpNnRdbzBfd6uDSmvzBmtDnKZPbVLJN7eAcv9bgWXABDGbA",
  "key27": "2jxTbC1u7FBh5eH1JdeuDQ8TFZm9jQWGP12fmyKLfdFzdHAoL22ZyRM9mxnjy37vJhu9wLTMvTSUvtDK1dsQR9Lw",
  "key28": "3jyH67u1fC6hNFTBLDb3tL7xfnsQQ4ia2P4CxhAKRtMEj1az9qtRFtPzfZTAiFChbs1VkHnhk1mngiznpokG2bsD",
  "key29": "27HuhuUWCSd6sRTFek7j1hgE9bdtanDQb4V9f8yHgpNYJaSy7FdSKy2xJQ7qjMVJDihX8Cro377G5fYiw1qoGBNh",
  "key30": "7nxBoPypEDPnMnKMpZCEhLJUW8gEDQuh3DV5VYwG9siwBHB3Jv7VDrePahuWeubNnA1PtQSQHEenMgtTPoAhDYN",
  "key31": "55s5HnSQFwt45955GYLhhSePNDhAYiWBhG3pR1TCis4XUZUFpbfvVZiJvBcuTQit9bjw7ghckhAPMs1nWoUyExcL",
  "key32": "2M6QfkJT7nCBNEKAdgtZFpNfbSqiKy5Wp6s3P9xHmq9Kmiv43KduF2ZFwBwe2WKLWx9M1PweYB5ySCTk79WMuRVi",
  "key33": "5ijugNRkPJV54YWUzR2URbbQgM2tuurBGXQascuCnZ1kM6tJE3QD5RuiSFQHEdCWY8gVVhPo7rL8Qt5oF3GsUGKA",
  "key34": "3o2LtmySbHFatHXwRxunEGzx9YGDZqkEUaVNx5Pu1yaVpdNjo8Q8ATjgqssz9Vys6TFuTb9Qynj5gxRTuK4UXHfT",
  "key35": "32DMvfw9ssp4tVGWbTRMLCB2gVjF7bAwwUjRFiTUw6k8o1gci7hQBbPe483LgpEFbetwPXK3ZsvD15GzEkbfhqiV",
  "key36": "454NLmMWye2xEVPDcsP5VjzhQdGPzCizLX7mPCd7Cd2f5NW5HyWusXsi7GBrjF3gtucPB1hjGoF3YEjtD86ywWsR",
  "key37": "2t7EtJ3kV1oyRNicSEv7GZPppcscPYydyeiJ1mNWm1N7v9gDRCHFGd4bc1Vx545CdFrUQNmgg7bQagDCoq6nN7KZ",
  "key38": "3dki72ufRW3L5GaL1mFtuYSrRWQsAMrd7o5nQhd8rizPXS6ZqD2PaNBmKwGZmPeryFoAxQygm6wS3JXs39QhLHcY",
  "key39": "2WKHfafJ1o8ah9b6U7M8mMB4HKWpXVVxbYUoSxCxVm9smh8Y4p1LSMPHCeh1Jw4BWgHyznoGc7PpZhPQdp5N1FhN",
  "key40": "4xHEGN2daw5rh3N7uGPwtHAykjoSSv69GRjuP2TQShKvRZEY3T16RCTp69SJuycksf37MLQjRy8ptzunHG3FFZT9",
  "key41": "3iDzZhwcyWn4vBCpzJoiHyq8e6VkkKmofW8bReFpc2tuP5QHJXaB4Zk1VDUhHQXwqJXdDVgPgv11nNHQ7kwBm6u5"
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
