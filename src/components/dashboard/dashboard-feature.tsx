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
    "2dRvCsynMEEa6xTQYPusFXDqhRMSvK1pcqv8kxbXyGJvWwmT57zV2BQPiVmv4ZrFVB5dpffXy5mCoWKQqd3b7GhP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PvF2DyVFtHy5akZvc2Hp5NPa498HdTwbpVsXJEgPPxHm2V7W3egekCP2RLZmNMznN6m3E34pBAm5TAoLu4Q75s6",
  "key1": "5MxYqj9HveMUViRDeHNpW9PqFEBq8CdMcTGs1kWY1MTDSQBNAid6wTvDvU9BXpJvMXdroF2gAKfpPo1ukWE71Y4h",
  "key2": "4ACrDNXZUVefZPThHGho2JmruvxBacm7P9UVwg26VPEozBYn4TsB8tbJkSUEqqYjkziNAnRHPashJFv8XdFKwdtE",
  "key3": "3P8yHJm2Jq6onEePvcWP3Bh93qG7gSsumyTN2jHRTj6MKtZa6deMdPRQ9ue5GvvPkVHAxn45mfTJTQE3E344keVd",
  "key4": "36Tqoa4NqHtXHNjgcagFUN9Qsu7A2ACFzwGFm4LWvMoicBWMfm7mRvDCsNzUVoEyXrgJQ6oy22EKXkmqcxguEqH9",
  "key5": "4utMMdYXQMDY1KwGyK9Pb9nMnEUkTt1TTyzrRJAAr6eAtvHXoXa5pikSYtw4jP194mMJ4d2qEVP5WkBAHXXWHcgE",
  "key6": "5vYCg1UsUApsY7iVgNdDLyAvLx5yjfh6DxEfTcYCfKi7Trn7YtADU7prCZFGoaWMNz17N6vQ6q5svnSZcHwewMw2",
  "key7": "23okKd1TR2mPNipizxoM2Yr1vwrXAEDNUeGmBznMzta2RJKMwx8wzFXM3u9nNuHKzcw4JiQpajHEqbE13FNksxM8",
  "key8": "4oGRcLCVYPs5XRN1Dm8nHok7e7vg4Fr4cMFUgJECZEFGFET2zguWXfdaQDhCJPJ6pw6vBHtZcQiBVKtiq6o8ZjLV",
  "key9": "3yRDJ8eVXuJrWyrtAc65FGjWXPF9f3hZnpLzMr5xLcwnzSZm4EQo9tNrqyKy8CXwD5EZTSvYs2ytbHRRT3yjJ2ab",
  "key10": "4kKqhzMb5ickE3W2yz94pH6qLVKNQB8Q6p5RJw98LPJ9ZFaYm8JT79fxRey31dgzvvKUD1NVzZGFYz1LWUJLMmhi",
  "key11": "49rG2QAK8dkLaHd12Utzg8khS2NEUWAAeyfcfh2rqkcH48eeWRD9cD3DqrnfppfgPEBVB2trQSvCYtp36Vv5GqvW",
  "key12": "5icyQ1ZRCDg1cD6bZ2V1EjrQuHrN2uxtmDoGp9Xpifagy6T8SB19GzDz6itfs2VX4h6S4bFUa7T6LXtoNNvQzZJS",
  "key13": "5q32VCcn4swxWdZQAKoX84MPtHpWjYuw8WhSxV83vSdsXAnoHS7h3C4AVQU9NzXPHitFW86pwAcFG6PjPTu9R2R6",
  "key14": "5shwiaA7yzZfDhseHu7rDXBKFbkS4JKxJ99oqgHAfsHUU9F76SUzM3KtH1B8x9Pt9uRvfu2bW2vH1b2yLwHxQHgg",
  "key15": "53PUfd61ny4uAJKFN59LDQZyCPB5TVjWrEfC5dmY2TUErEUbvMXaxuD4yzc34c7kBcEisiWdqbQeGo4JpfNXds21",
  "key16": "3b4166mm1EA9WtouHTtAmN3kUJVhtwyPiwNJFUUTu3jnVFrxcJsbEgDH2VR1DDzQiEQc7M9uM5Nbge4aPgehAcEo",
  "key17": "4y4gavpiQbyas414Q8Me9YDBJzLAR9xwepM4wWmsK66Tms4GVA5SzAyjhwpot7BAk8eotAs9kPvRR5NEA95gFR9P",
  "key18": "4RvPjeLeEfoMFu8KYzsQQ3SfHRNxygvEVyPAAhEEaoNWVEkRauYMM6jfeF6KwadGLzeMRYEoWqNru9gtKL9rLrzu",
  "key19": "4Xjn5jGTvWqpBiZ4pxBx2qhJBStZ1sGZQRDSmwPxFZKqnFCowuEBmCQsuk7U7U9Ys76nxK5QaEKfugtU7Jr3W8Zo",
  "key20": "62ME6cLcSHoB2qArqts4BGeEyvGtHWMqCxW2gZpW4eM4wbsG1VM2z7MLAXj7hFTu8Fu3pHoDCSazKFeE53MVWgqU",
  "key21": "WkUgmuB1mNCkCaLXwpKE2DsoYF46WcQVRpxt9wz6qSMPMsqBBoFbsk8NBgv53xD7CASyqAVe6oyxGXguYyLH3vX",
  "key22": "4npfoVJ3rjdiUrDmMJK5UEomKYx895W3VBrXyLZ4y4tU8WwUzN9FUUE4ascuU9arX5vEH3k2ZQnnCjkEawnQGraR",
  "key23": "vZs61cXV8GHLUrmtMy656CJ5AtNN4HYHJLkod1QrZS8s7vQY3bcXHaLhTxdTiGa2bKyDSMCjJZCyXEiJ6uMxfku",
  "key24": "3USvkp6sRBoa2HL8AEkfDEnDCKj1acBkuAKqHUNsRGc82H5hoNT4r71WWFeb7krJSAKB11NZWYkVTMwWzcJfWGxN",
  "key25": "5DKFy84ppm6aLSx5GQ9ndkBAuvU2QBHqkdcMNY3TasEJi8MAHFRf6YBzjXPAT1pEB1TC2dE9ZrhuzvdpoJ77dB12",
  "key26": "5anf61dAPQ1LeEPqtKhu4ipPNPRi7ZiY4A8zq1VBrS8A6o1SzmgxpGxqLhAWU7DR3LZ84Auts1w7FSGNA6tMVYhg",
  "key27": "3QpVNanmMNnghpdBzekYbR6TwdsX9ENTqJGHM3knS79VV1hYiTa6M6FvEP3dfKA26bjKeDfoDRXB1Wwawpnwc2Tv",
  "key28": "55ecMykT836546uvcutkUBuBhsgUqbqNe5VByPdxtEMCczPzteFCDWz1LhrNe5tJQGmpyUuWTyJiXbv294pBheWu",
  "key29": "aK94s9jNbJZ8c9Xbp2BTZ3Hr9ELaU1cMF9j7uMsgVRdH2ysWvLGDNgxmu5975UC8NekuVJzTd3BbXTcf2qggGBw",
  "key30": "2tPdJbi85npzGnQkZGqzruT21WqppEiHqYXdNubuLmkE5TDoBodKt25MhYtjcW1fqBiAJVZCmHfjpLofvyLxdAiu"
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
