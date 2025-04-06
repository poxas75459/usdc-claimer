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
    "5JZwcaWSjnX7B15jYuQQnhK6znuWEWHy5JXubiVXXPkxHH2zKtqoeVLN3adqjXYXuYTNxYqC6AtyVVWNjY61Tab5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46qxjdYR2TkwKD13enBBe4YuiE77y1hpVx3H84YjZakxJNcMXMC9oLUXA6TZ3nw7pw9UwFeSKnhgenB8Km3uq2Pj",
  "key1": "5xoaf1EbNiQKaDtoN2vWMtbrKxtpB6aH6Ygk9wci6Zt139EyiLSNBnxy5p81F6ASRrHYuPWWT13J1MwouRU1Ar9a",
  "key2": "54Ma7m6RPX3TjZfSsTS33JHB3MKi3xvJ57wBrri9kBZmrHhMrzQqEPzmGbBia6mZ7169zgAN5QAAcLi45wygceKi",
  "key3": "63MeaFEvUwWFXveYeVYcnxziHRqQKMp8h5PiW9jxU65CnbEqAhPUDCxc8qwLjHnaCPZUfJZxJiTLTbWG6L4R6kgv",
  "key4": "59JwNVdy2eT8dtv2xL8ovCE18aPbwahxzkr6P1Wu8zVNBDDJi85y1gWVJK578uqNoASVCZ93pntkcJZeYmAQpVQj",
  "key5": "GZRoZXfUdJ96FCF7q7MeZvQX1kCYSVPQdzxQqvC5DwxyPWmRT8EkL2zybwfwGr1YQ3cBNieqr1pXtfugLMn792b",
  "key6": "47RSTWrBE1aCx4xRcv1MLdre95qZN3WakdUwff9EffU9aTXwngPx3cWv1M1GQQHz5ukK9Ep9PZRh3ajrW12LNZno",
  "key7": "4QKD8KFWzFVU7jYYUhFf6Ds2E6RyJZyDmDqcPZUxPzigrHSJBL9mwP3fxvBqHx9skiDNszFzsh9DqaUKYMVVCe2U",
  "key8": "ZouoNk2h3FaSZKUbHH4yucnmpmJxouv7Tnqec4fiFup1ytEpRcQa7Qdi2Fc7S3KjxuZ4YeDvYWZmXwW4Z3dRxkj",
  "key9": "5MjVA3ia3yzSuzvc97XwapAmZ6QDFnBCvErE8vkbac3ed8Lu1AYShrbaktpWZxyWrg96bTNejEEnXaBPwekRkFmR",
  "key10": "QrxEaw8Sm6Cr34AbxWvvwF5fTVY2AsZGnHpgKLnoJhE8KowWpzE9WYBLGTwBZaKKp9xF5MQZyTCKfYhcCZiRVRv",
  "key11": "3emZQVdE45aAH6y917ckF447AeXA8kuM1GfAji6rhzqFDuELvkmbAzDgNuE1TCvSWTZ6vUhRSuCaZi1Mn9SSciRa",
  "key12": "64fcqopx8DPb9ZJrajFmgV4YyTXnxozRdhs73L9BSNRApsh25T4rVeksD18vApuiJRdEY8eatLknd6pvQv2WxSrM",
  "key13": "3c8fku1ZGr3mPn84hGHLEgbRc65zEQuDn2LJKDrqBWzeFSG16gfvxPuJZJ6iSZP6DsBUDKWuryyCPprxMuiUq21f",
  "key14": "5mA5cuLUNjcwByCqoBM6QxkkoPXpC3Bat5i2naoLYCNCeVzQLRPzWzwa62TYpifHtUa232hUdeRgbmRdSm2Kw7f",
  "key15": "2kfjQB5RJVQ3mG2qsnZVxPiXknAKM5BKtZtvNsRcxpetx9uAsHPifufu3C1c6NBoxsiZoLSDwSxPz9NN4Xmf9u7C",
  "key16": "5xE9G9d7eS6SXfPXMyu8RBP1UCkqGSqh3WJGs6ayoHzMyZS8YywrZBub3rJF1a1iHUPsAMbwtnbC2ju5GfRurUUD",
  "key17": "5kNJjCvmhBMh2jW31HSswuGgKriq3wmYr43Wm6QsA2z295iDuiL95vdkmFFRNRFxmmRdMRjdWoQN2qhofoodveGy",
  "key18": "2iLrAshfAtLGj6to5BijSHdnT2nTte16yrR95bir7rEzxViPdTqQeuZ8pzpy9hza1b5jN5AstdvFGUAiPwbgpvGS",
  "key19": "24Fw4JcJwAK66kFjhTkbffP4C9g3qTDN7vJqJuBZhVmWe2R7YJY5PqVb7VqJZQHGFsoPCv8ZbzMAkXVYCKbUcYY4",
  "key20": "4eNDV6hKAXYa6HJhEWNPT3KVDmrqR1Ay6wamxHytGFRRp83QrtPWozucE5H3oky7WRG83kpu59t3y9uK3FD4m6oi",
  "key21": "6B4kECczBnyVGfNJpfkxrhmiXYEh1Y3fMK671Ww4mahJufr5ca6a98kRRc8qGEBoFzamvkrLNHTn9VwdXaZpBY4",
  "key22": "59FuHAPHEaoqJioCjWffgTJnCNMeeCoFcyykgLLMeAQr3tgtdpGsFCwUjDSHGWCddaj5kPqZuVvEHBYxJVyn795b",
  "key23": "5RsYkn1LidSwc9qemUj2cV9MJKChGStGb1FwtVUyELzHbimQM88ujHLytxsdvzog95E4yGqdds5EoeCRu15GkE3C",
  "key24": "39mJUy4BM7961X7H5M89CctFqXiJz1jCfcap8jkTdToZZuiHiDHXXvf1v2xUZnBmKuQvhGKScPZWELMTBdJLK9Bk",
  "key25": "tygBhRHZAcg47w2JMLJHTbnqdNfbxPcLj44YdrEpjzpYnFG2sjRtNyhZa7vZM4Vk3BK9VNF4Y9X3nvtVp1KN11v",
  "key26": "4Q3U7z5ypY8Hgd67okQ3Wi9d1mXyDU43iEy2WfhHPUVMsLLvuobiN3gdTsi75FsrK9t7ZGiSKNzFaFbwXXay64X3",
  "key27": "62m2LFNmdHbCo7QrRv3EngTpFEm9NHonRKR7GKUexZLrDdgQqhrsCrZDQYr2RXfGR6nCacg7dp11paTVitNgDpUs",
  "key28": "5ndWEUbBM8Sm4sYkgC8scbbhaKSBN9tZQggUSr5G2sokXtRFjAnpJLgo4zsDnxLZUyzda9jPJNqLjVnuBEUwssk4",
  "key29": "4a2LYo6Ud78dXMeiroBiD2xaUGqYYRKoTM1bN93XuBmHH6Z3nc3rpw7USxjN4FfDaczPnJtmBCC2DPV5zZ5MVBPS",
  "key30": "aCyLLtCLP4wxjFZLjowZGp2eaTEuSjcitmycAbpM7fGmviys98nQ32VBLMa4pRu4axfM7maT8bagwYANnEYhD67",
  "key31": "3nxePHNseme5gLH4PedbPESAMTk1jr1eQaFfwakacvTazbaG92CHLiVk6t9kfsspbpGK949eT8HmtdZARSQKeuqk",
  "key32": "2Nh5hri4iEiKLrJsggXkJ8e4A3QbwWZRqojXgvTMbY8iHcG3cJfv4PHoaXgdiiJWzi5Dmvj32MaegiSvjRunuWFr",
  "key33": "56f9NangP6osVVzLJzAiQrjP7PKneGTS4gvhpBGzbUhapx5C1QRCvneXGCSqD8XDE4mN36F8mWWAj2kgdWwwzfyA",
  "key34": "2FcHYYJf7MVew1VYxAtdLKF4AM3RYbMSzzMBmGskzqDVp8ShPQFrTe97wEhWZaUCSAKEEY4xT3zBMt1Q7vtTwvGx"
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
