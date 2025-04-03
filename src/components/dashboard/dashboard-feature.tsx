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
    "7FdedJu7RmbLCKyxuQai9pK3r7zf3zYqitTTiojHAxVWt45bKjnukLCv6m7kj9QoA6jez38CMm9Coq3vB1XAp4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "513rBJCbaWeVJ2nnTDSDWRtDkzwUzUMXBS5Kz5MrvCQn1z3QbGWQ57qZJ7EGMh9L5VYFqUaF1sKmwf49ZwmRkUdx",
  "key1": "45p74LXZ1ccTVbkGq73z5yi5KbfsqHNYQEydFjXLsG7JjxzFgNSdxcQdijjNNq5wboV7fE1onTgcrVdERSnXug41",
  "key2": "5WVdFFuVpojUSrWqaFmhTzrKCiDMXAjRkC2G41KXnrfJdpNUhHf4AvWHNCMiz9XzXai42mZv97vWN2ZfJfaah174",
  "key3": "4mJiTSAfdkP8UGjqs3vrfFSswiYNRJp18N2JpvNP9U22WSB4Wf3qbFAb7dCuvsQQUbftQesQpZUWR57VNFPsSuaW",
  "key4": "45MEuiMrM2RrzeqApoxRrcGgaZzPSfsvC3ux3F7HzDC72GA39UnzUt8Hj9CCJxA8ge99DfwtFLA9ycGQVfgDYQxC",
  "key5": "26mbBztktvNbf4PDnmqAcXyfJfBgnnfJTcfquwPcd2Ewxerrp8cohckRQqFuGHavAb22mgf3QHcEWvQsnWxLpHs7",
  "key6": "2PyKDG1YN64bov4SXa8HRzJz5kxpn7XtULkU9X8q7KZoj6TRKje5ascm2FSKT7VYN5W6nCrtmndKtsHjfnz5z83m",
  "key7": "ipqworSpU8uwv8YUuguSZfLc9JUERmbMFXCHWmwqpXnG3xgSqatUf8viiXGbJhBvgzVmadomkNsHz9RLE1GoWF2",
  "key8": "LNfQDpt3oSTMb8eQeNs9nT1rPw9oBMsfdRjaCap8iwuHSuLwGaeMAK6GtUZK3c37pGj4EVLA8VDHhXty544tpwV",
  "key9": "fY3Mf5eZYQnHqry8UaoC3bppXo3QTsVp3JQrf3S4txo2yDPvejAyLp3viN3z6oXCdR7zQBWB2eBSGUs3ub7CsRB",
  "key10": "2hVgRCWhwbJaMQoQYASYMnW2HSHX9SJUUctvAf6JG9xvpFhRAehVLEjXVnf5ctwBXnJiQoRSsh54yLyJNWp1q17G",
  "key11": "3NLZCg4uVKHYe5UDtU9pnihgiZR5TSPvP2QXNEEfNG6T29VNERgZEf7Whuaxt7C9mnCsHJwjfumDRz3UgyTwpqrS",
  "key12": "5jVt6AiK3F5tAciggwWAkK9Qq2HBrMFazBoVxCYFa2JtM6LuFjsVphRRMnbdXTqSWqQBaNBzKaA9dUG1aG688sHg",
  "key13": "2UvVJdn5Y3ffGbmKiUMNjaHrHgVBTjxmUerUjWjy9JyqDd16GzM3McXRJ2HKJ6Q9vDD5fhhK57J9TX7uLf5UQncw",
  "key14": "5AoAnpEzgFwiSYjjZtJUuVQCyHhmSj4Zgad7fZwvKoxcx1L3F3bbsCearcveeKZFYZVtxRzh2Qt8jjmXPSJTybBf",
  "key15": "4RceVsYQ27WjYcvg5XT1BobrVKzdtrBaSEJRdH4UeF2HmHuUjWNhzC5zqpGu3EkkuoKDLSocP7AwvFiNQneUsbLK",
  "key16": "YMVuDpzrtzd3hsBMJBkjJyCBfAEShUxPg1W9vn9YCdCWgGzmEZZpMzvXbGthztv1UbZGaGa7w2Nww8zsPcRvUNp",
  "key17": "4Ej1MCYefcF97nteqvT3dq7BirnXxuAvfVkoiaVisqzLKR4TEWKenxtPHmZA6Rdeu36xzaDcyD6CDcGKPTrh2yTw",
  "key18": "3Cxm6E3MaAErVeLxFNayc2BBb6STXADHVC37EvCS8o77n38ZNCbmUbz879bsXXmkiEzYsDpzbFgNBJPMvWEsoeGw",
  "key19": "4hsqXZC4CyzsMbGhLqEboM89cpCWVzgSmRy6BrLw6R1cUhcGp9p4LJjQBoZeR7jJjJngBhaUsJnwE2Y4C2vZacon",
  "key20": "xQF2jMYjRz2jwJECp9hU2VRdL2FXn118JZSjQUhLycJfSzzJ7hU3XwYiUPeh6BWjZn2HsXx4Ek2cFaYi6tUZ6fu",
  "key21": "3wYJNQJxK1Wtf16Zuwqs6B5C7WWSx2hwT8A2Gu7YtUK6KZWXyiSiKJiD4FX59taH2Cfc6ngVo2e61FB9beAvbtqq",
  "key22": "WUn8jRYLuw8jwARuxtcmnJ2JqRcEs4aHzpVJ9LwRdhYniYLsPXJaKYcwd54oi68cEdX2cH5uPauNrUQ4wmtxpNp",
  "key23": "2YWqGP7h8E8m98aKAe5NN7avnvPabE8iU4vo4Buwh7YTEhVGkZaUojF77fmybo1N4e7P6kXWQ72rUPTSZXKg8dhf",
  "key24": "4HZkprCNKC62ENmDi7wh3dL7iTuhrjzXQYimHBHm6bWoNPRLVV4uohFgwwgh1GqtxL3ZDK6jScmc8JntRDxAEn6s",
  "key25": "NDRPHP6FPZkkFWjsMyFMJrH8uB5gUWFnphnU27LYigJfTRPoR8uvUS7Dnscxi7BDJYkvw3FV5ozbB1AnGLWPZ4E",
  "key26": "5Ui1EJFNTtjkDZDkZmb8rtoja2Cs49LYWTw5qiHHMte5jzVcjgKE1K8vcagQt5yX9YxfPWTbrokACLsmhsRdpUKu",
  "key27": "2CjYXzu4ukMcofNpAUh6tCYsCDmoD9xVJyAXLg2gVZeqPq2GJhVRZTuABtWhr46aqBUSXo4irwJ9x3oxkuKK19rL",
  "key28": "pbmhF2P8Go6QfRvyeHjDkZDboCScrTAsr3PmpBjnCh7K1ynACgHivXJxiw4UKNYD2TAzMVmVFf2r1DDJ7h1Z7Cz",
  "key29": "CdcSpC1NvocyQTxozWSke18VQjU1LZsDRsaamtGneRxMMz8yXEi6LqMG7BH96dKuL4Kxn6MxBCxc4uSFLfsvGxn",
  "key30": "5JZEDTxwpxMziyAzRV6nkEc8AZxNVySqGCoiAtzVY6dt4yoimyXYpE1aGJN15kPhLnZaq5dX6QVKH85KtsF8s7iU",
  "key31": "3bMYi2RezJbWkJCAHDFaAGxFuh4gucFzcBYdXRexhd7Rx4gUhg17t2PdDpZujBgxeRidkJGdPx3uEsdqcZkcFCat",
  "key32": "rJBSW7LHEz4kPTKyFs1DWi8LkqBFyWAbz2dk8NAfarWELjTut6Qhtr4WhvTKGwa4BezYERTXezjQfnTDuLX6RYs",
  "key33": "xbw3FtMMgSsF13Mr9KaViPGSeJiV5j4euCnL7H51hzdR6MtEsCBdfCCBTaz15cBi3Pia3FBvAYwRTjd3qyDkLYD",
  "key34": "3R3JDQzbEtoYnjGbaUJPFtX6QtbP2GDRwBudtC1UREGEUUjnmbeVRbrGxWjbjpBw8tyHam8N8fZFjQr3Jqcx6Xy2",
  "key35": "2scuFfRwh1peKZP2v5eLLPHKdYDzw4UoinxLo2Qq4Mk6x886PygnUQjapMSoFgcoHvXGxVBjeEncEvyp63vDGVWe",
  "key36": "4Y2p2EtzsNb37P5tgZm1bNHEHMetiPTgN2Uau1aLiTXLzt2zaLcbMEP6sBQNm2YcGmCgHiViGKNpH15B3G4RNujW",
  "key37": "RaYL2yFxTLgpz69eQJ7nf5iysXUQHARVt9TtBtRVdXTVuhy8S2SbqRFULxa2fWKdpGqB46o9pXhq1AispPLKT77",
  "key38": "4Ty3KZct6PoXTKWJGyENc5YKbabW8adG3UFy4D1CbFCQ2LBP4BKwFWrJijbv5de61SZQtxeT1aTEsA4qGxBJKSu",
  "key39": "4Rh1f3BwFm9VNBLeNvfXcGmB47BnxGmyDXjFr7gF46Sj85k8Wz15bqASbNSJ7YqHCnCChRLE2tLm4SNtdudm8f5W",
  "key40": "2MJ4zyrWobVhanYnmnjLs4QsedK6APYdTKmJijARyJR9imGoA9BgAANGsxfnMiNpGe2uoM4H2toy2h1k4q4y2ZAr",
  "key41": "2cYdpqQfhbSPQJxtk3vJkpcEYVQXwSQ8uvgL3zgRsYa6yXs676WWoPHqA5EY1xn3a4CwceA7qNxmm8Mo6NRT1BzY",
  "key42": "41YxmhNtsR9vDhBWH2QNADj2CF5sJnTbxJJYi7hr4mJNh59JmJVxygiX3tkdcouy7wpEGUqwwNJuETKjf5bs27B7",
  "key43": "2EiCfn1d7cDrmDTg5RhGowNff1tDXmjPFHhNuq99wWa951jmsDY4f6We7RYk9Khkp7Pd2r8a366rM3iqBxwnqczr"
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
