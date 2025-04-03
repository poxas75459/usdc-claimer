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
    "371Yc2vdQHmX1K7bbRLzQTRK9iikQGsj624LyidGu4z53hKNoKvESN3jDm3k3ZG9Tvi6vt8gp4JwYRf6JfTz8izQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rbGVT4gTYB87Q5w8JGzNDuxypiYHpL1SY88PbwY32rYZ1WNJxk6DWGSxJDD1uzAqQy8fbehvfcggoMtchsWzkfV",
  "key1": "edZrFFi9iKm1KwHTn2RdDmSVqbF6f8xtbm45U5vH9jUKnZT16uJfSBhJWHZbeidHqPv2nCtwot3SCFAYNc5bCq2",
  "key2": "4CEQKrTwJM2gD2GA2E5Vsa3sHhhugWajL4VyyMC2vVGW2CuUNtvpN1TfW3ZvRdLwuYPQEttxvZhVyv3LRJyZAVgJ",
  "key3": "3PvXmgd9pgYCye7TZGFSUQeiBsGjFfAWWwAgcp5iZMoRXq9FGWa3mmzto315eHxPMst8w2eQA6rxUJ8sktYVcYBB",
  "key4": "4dUSb2awTVhZkLqvrKxZUTyUmx1GY688MuB2Svq8eVKEZaAMxqttZMbfiiaJoe77eVSFYzk64jfGLQSriCvCxpGL",
  "key5": "5azX9aC2c3vjpH4iE9PXc8XkUUFnEGWJRrDviKW7xxGYHs6JHE3PE8CwgP7d6n1GhvyZf3FGc5ZJJrCrtu9tjefB",
  "key6": "23YPcmGqPoZhxiJ1h33CXN6UbLsGSGMyBi61kEBV2phG86V6SeGh3NejQR9UDuRwrcRC89cwhr7PZUzmF6e8sxih",
  "key7": "63xv6UNwYQKhTqB49p2M42jjvhKPG6gBigUQiux8yrvCWcFAgybSVeznfgAK8cxQHUi33i7UqCFCepdh1FixYbKq",
  "key8": "5DnozbdTNxB56xhPdRGsyyCUUd8d2z8hJpUYiA1Hew1FaJDtq6XvKt4pDgjuAjLrh1c8R3EKeSCgDn2jvj8bLGjH",
  "key9": "3SQfyAUetMgADQhWh9D4vsn6wpCEzatusJkSh2z71kiFR5sCa5vscnUwJoVXuT48nM258GZwr8ju9tGWMvXG8qtU",
  "key10": "3eiTHu3ZKx3Ni8oAj4NhHWvBMEpTqPKmQVFYUcA1VgUnYMPL9rd4AcAKQGpQHNH27J8mNdruo74C5SGgXpMk6JKJ",
  "key11": "3b4AbHYi9mqeUZ2e32PSkcBDWF33zd1B1NmHpYoYniCXSBKinGhCJMkXe7LWeSc5vrJLAewSMUHkia4HvLNzB56N",
  "key12": "t1KQmLyxs9X2YBNLyEnZaHiqSLBFNZ6VSLrrkBzwbxAynjRm1gF8mkmnGkN6dzBQNMJZKRQvd2CtN9YRwmC9Qhf",
  "key13": "opYzMtrpSLWgLpSajiQmCHJstUeKdj3ePLypkhTKNaL1EfvDhhMFxEPHYKj4KrySv6dXP1gkDD1MsWu2vxBHKpr",
  "key14": "36L9f1L71fg6TG4s2y18ps3jwQewpahCZ2VkSj1G67WtWKDHaV5D4BaKjCHafEXN8T4NgmqEcdQTfEegbGtkYc8L",
  "key15": "2kffabuD6fDCgJMT3RZF5Mwr2qRxecHZBdsfb4TBGsWH4id9n4KpeBTHMphsf64cMPwnMLJS71VvLGspHzhwXEkr",
  "key16": "6fdxDjsg3JFCaoMPGyVM8SN7WXKwLVawDtZkLSim6gxGjFt99uN1g5jkyNJ1yscfKQp2CpCcavhxrDWYfv4Na54",
  "key17": "25YTHjgmZMoABPmhEsQLxKG5MYumGsh2Pj5K2PUbfNRr2xuxMhxF3erkugt8fAhcVKdiTXkxkuVfM3SypkH7cSys",
  "key18": "4FLuq7fXALg9rWFykwXZUw7qeLMi5cW7FipGoybtBPEW3x2Zu5kYCcqNhAXo4UUM7dXDYG9CmN9G9AedFBzQE7S6",
  "key19": "3cnkAQqNAwxZZbmWscAm9o1fS9xCFJCTd3eY9Jjb1UqmP5c2cCTuHxMf1a7pfaFeUHNWob5SvQ7AibZTe9pj5L1C",
  "key20": "4Nfc3H5pUEWAgv7KC2v5p6mZ6D1P3vwG5zWSfk7EoJ7eUXSSjWXsZ4fAhX3txy7o6vyq9PkKgJYUvsBoCof32wUi",
  "key21": "372y1UvW85uMesjjTNz4XpKTRfsYyodFhv45LRxZKGmxmcaapyzbiR1wmdFcuin6mqL2bMy1SQ84D4XK46wspBP3",
  "key22": "42S4YF8HAAEDtr9p4SvQnshBvpeLBqQXkRwzvC44fozVfFZdWPjurtwc7VuBDJ7YtJWmRbyyaDYugt7TWBME97Nd",
  "key23": "5fNZ1UXrztfk3vw5QT4asUwzNpYLJ6aUcLggAcDk8LCm1m3QTfM1ciofa1SLB6exCUE1zAFrwEav4KhKNreWKMvT",
  "key24": "4NVf4uPqi27VUXhnwj1i4biefSaLJUbEmnwBJXb3rGWoXusA7wHPwowNS79rG6C5uU3HuTSe7aq65y4FYhBtaYN8",
  "key25": "65bY98M5CbYvc7fGJLLnZ6q7SfYzMw8EBQE78P4FYKaLRtpKFN4A86Kq2VgZuD2br5yy1AscaSeKurnHsbcBqayL",
  "key26": "AHVAZ1ttd34c8n7JYhdGGc2ZktvW9eqoy6duPWRESPinLxfBZMZKzmp42wB3GcYRT7BBwrq85AchBtYmMvbirRX",
  "key27": "314ZxFdUURKHFjb3ZSQYgyrcrgQe1StACprh3rgWL2qHBabPRa9DzsZyduzHDgMNU5Mke4D56HCBbDUY73J4YGQp",
  "key28": "cB8uHMY3rUmNmZ8Hs6TG1HqcdkX2h211Y3grcmxyMLoQCCZaAuCQR8HxA2sdnnx17yvR62QLYr5Lrku7eSF8wDF",
  "key29": "KNEsmwBSnu7TiY6UPhHqV1LRddSH7RKXoZEiGfhX9riomqz8U4AjyAoQeX7hxwHn6uF2tNXhE2jrfVmhqJerz42"
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
