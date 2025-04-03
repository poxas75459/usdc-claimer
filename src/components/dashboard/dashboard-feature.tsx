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
    "42yjc2zTPZNj6S6rhRz3boedVcFzFFKbda8GbEspjRit7Jy3ct6cqyzoy8HXLKF3vT4eXMnbPbRhiQjWXfGHNZpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NWF8ZJk2V7wjMeAqEE77uwtV7idMr9xPRrVsq1UDUNBGa5conaYqWsacNSjKccHwK6C7ts4SC77z4JeiTVdHQJ6",
  "key1": "2k2kGGwyQpRwAJtqMfxnP79FP8pfpPX4sRCjMbb9tiRhR5rnAnsZ6rkS6oAdwCoGJKBHM9oKUNZatz9D2gvrZg8",
  "key2": "2on5TMHz7M1fTizACqumeaSVQuUV3gM8VR9dotKDr23Xemax5p4CKBTdCCFPcbG4DkKeqpJ5hWSz2QLNrNW7UPo4",
  "key3": "5wVPnAndZTg5mSaT5XX4QpT6ZzsfrDC7epzNtmWzNnsqmb5LehhaLR8yF4gVQKnBDGo6WdDd18rqYLZjEUbQfhU2",
  "key4": "8gGeFzr1SNMczDq7c7pEaUcsQbLfXiLCbHCi9BGecHKFnGQcjM2PvwccBZTNCymVeU4DYjFpSArfZUUooSBnPM6",
  "key5": "55HVnxbZK3VBXWMMJey6RgJZPHQ6GzYKNhRtSdbTjd6TfU3JutgM7V44Q2i5mMh6JhwjGKTFJEts6D8Ufr5Vb7Tp",
  "key6": "3vqLYHZxXhBNHbEc94mVBqiSBrFMhKthfGtsnXmtywbpMjXHikC1fXYTASNqupTjPHs8R8MEdaZ5N5s5jX5Y1tPk",
  "key7": "38NJ856sQ2ACULwFQYnWs7x5V3GqSMuvwoJx8XVTiuccV4XZsTwMHbcZUA7Aj9VT2kRTAZhxhYo1UELCMW1GCY2F",
  "key8": "2JkHwtgxWhNyqrb8FR3taaztgEi5j1yBqwTab6acJ42z7bTa5BypsiRVfq4pXQtiXrSM2e8J1UDYQwySuJZ1V1t7",
  "key9": "3RzityudB9sFcw8XxZEGeK9L56Bviuoq15YKUHd6FAdC8jN5utNA3GFjh4h5h61X9yZ16BThc4E9KdpvqEybWLvX",
  "key10": "4HYAZ4gLg7Moq4LErYNG1Rrvwrx2KxHFTRwQbwMrmJRFHrRgSugu2BS2aStTQMFhQyyEAUM9nrxqUCrNcBt84NKA",
  "key11": "SSQLfhrGTdkCC2GvtjitsESCeMqYKhphY783MRmX6tVVb8FZUrow2JoaHLCss1FHHWMjZ73WBvhuqf4kNH2YEiJ",
  "key12": "Ms6tGSMWwmMFAVVxgG5N72hFvM7BhpiyV1xuERdMkLgHmbhn2ryhUuqbgMzaWvaFQt1x58UdjgoBw7FsfH6BGvC",
  "key13": "5mWzhGsDgiD7QN6QF1gaCh9bhhwdBTHBBKNKdZfrhYTNU8A81Ho3Ze17urK2xzUovoo3j5tu981KnVnr6GPEn2Pp",
  "key14": "3ZesGRmXBmm53eXRgYtqJWhYRnRyqKr6zmJ6zsCgmVpHKkcZRKY49vyxTv4iyrvefbHFWAYNk4UXUM5HaPpUp3W5",
  "key15": "goHHoJqHkbtbjnpafHhKDQtj6x4Q1FXbNLJpRYXGvbXs4CHoijuzECBLQnDoxLPkz7vDSVGAgUPHf6G5YrkSbjM",
  "key16": "37U2nA8biTozFdJJcdoKgBdxDCupzwNjgNjggTN49mPxBUB4XmgbGk7rVyB3GuhnFjZH5cX1bbeT8UFt5gFwSd1A",
  "key17": "5zjFVP1txCHPaLLB9oRvqexoVWbKEmQkPDer9rMb3T7DKAsJt5UddSvsVBtAfy6vNiFMjpjZFQYj3cePEQV7oMNL",
  "key18": "61C9SYzLTDen63ApuKev88GaZKiHSweayE4ucMxM5KvpLombSVStyR3JUGnkfaXSg7B4N4t32XrpHfVwQW23z5i6",
  "key19": "2kHRX6baoQfq9ukDXVLXSZiJZiXVxiDpqecPiytVnKZceMQBavz4jckFxNw2EdN398y32jrnPLffHzieHmMCCxqx",
  "key20": "2CjHaMA5KthEz9SNVsFmaij8vUmxW4qaNKhhiRZPqKRxgSyxVhfzs7JoCsYKQ73zY97V3xgFwvZ8qMFvvVzjErjq",
  "key21": "64hVmFrZEeYYNc3puy4SrFxFW3R9qygzMy6ayFdibfCT4fx6NCuQagweUuSnD87BBComYAFz86WaE7pMv9YgqvVm",
  "key22": "3HkQoQMjSSZ4xsWDphg3ZtdMvn2e18L9P5QyDNWSj9cTjiMPsuaB8MPK7Nc7yGaW2CTkgqJwbBXTYfX66UqkRWTN",
  "key23": "4awsaYyefPrsLkaPFfraWwcDmYpX1Dv732GxZ5dJtp9mauKW3YHebENwsd1DM1Q5ZdnHQEus8fxkB1AvikfhouQs",
  "key24": "qC6da41XoZfgo2GXsgSmTtTNuLMdLo8dKZ12ry38c7a5cfsPEkm3CkkW1MJwRwuH915yzXnobacr13fNrLPsNg5",
  "key25": "2Chg49L1gvKNzdDRSUifAwbQfRP1xpsjmKXykqYMh7iEQ9bwPHdSNbym9vhfBua2w6aAHHeaMzTGazHpYFyTJFNx",
  "key26": "5gkdGLanTb7hqCys5Hc1U36bUTNqaZs1SgPrN7qb71XSm4nH4HhHzNjUujCeSteMSv7moBSQtkTBvtKCgUvL6fr8",
  "key27": "4URGijEt51V2ZqC1pMUovDvzayPXDTw4YGByKP1KsN6VCYFp2qPHH5y5rGTgvNY5moyiVUzTuPVoPAononUbVffK",
  "key28": "5XgaFyfph4zKp5Fj7qTUvoJGmthjrvYPp2J9qh8BgKHrzDrPaT6vuHcq7N4erBJiKqifYCubG1HyYNqPiEQX2i6g",
  "key29": "2Mex2g6K8PCXnvNhU59hK67RJasrvt7VAqnvu25PPnV77Z1winFfhBmjcbNo2NjDvkhPqyNTqw4VE8XnaZzM2A8E",
  "key30": "2kwBqt2mj655N5DgjyPpGtNML2yJQ4rXwmw5GSkfZFcbSKoAqY4wxJ1hY9vTNSJHanvozSU3amoZaWrWuHHWziHi",
  "key31": "5ABqjjCxcvN8BxBzMzqUyS1yUyi2fyEdCUmn3wMMW3tNGXuaBCRA2bfYgvQGKDygCRRrZjTcESQwzMBMPzLP6fiR",
  "key32": "5pjZa5SDdKmt39Jzd2QVc1DKskkyqpBY8qTVx4zaPRrFCV92kzGem5oixhKDp91eFAJg6uex5pYxWu6cmfQAFWkT",
  "key33": "35G6vGWQVfW1jvWN57cNHS6HPTi5UtfPWsMoTjUyQcqfefRHEWx1cPN5BkXzjLJAwtRSXT5MUr38iRSnwNzU8STT",
  "key34": "3c7dkwdwVaa1KPDEKUwPERb92jjbmUZTtayHkJ2z6jvwncwCcbKwT97p2LPG4FEbKoiCEeDHUL9r6PBgBLVTJ6LT",
  "key35": "5zMaS7hK1j9VjT8YSywpN2sehYhiex8iazSS63jwnfRwcKAPXWCutkNirhXESgxbqQTthH4BGk4G3ZNoj8qSipUx",
  "key36": "5eMZLktn8AEboSZ8DHNbV46PZAY5xzi6LCUtQzoHTBbSHh7WNWN5HVEL7rf4h9Bd4SSFiiu8zwKsD7qJS484nMaJ",
  "key37": "52HPEo3W116kEDjjTQaCovpFfyqpe6v6u2M746vMNu1JdqAATiii4Zw9TntUUdrvcaTcSaDQUsc3tGF82g1NSB6z",
  "key38": "3RBiScVr8Pkb1fJDBw7yt7ucUqfM6ASj7SAZ4dbsaPEG5z9Zdre2ScJgE9GL98G3hbwF7J86YPTj9EEss5Zu5dUJ"
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
