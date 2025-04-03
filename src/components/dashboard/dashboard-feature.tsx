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
    "3nDp3GYzrbL9mCfRG9z8eb9xt221wfAN7EP2JLagd9kUBoFk9t6BFf8Am7P4aKwDn7rXR8QduJ39nYxGGSMZ2mAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jbkRffgxPfhvT1s9VS7zEpMuhzqXqMMXS6Q7MPW8R7z1tozkWPBXN1HMUv9dUGdEqwfokJBXXZoB7ens7JLazu5",
  "key1": "59u1wFLPjpgrkNpfEpDnfFGxhsATHvHnKykkZgtUFJDJpJkVkbuLD5exZEshzdXzjDAQthwTbE3EKp8wuYxkRmMe",
  "key2": "QYu8aLSgAjPH4XHBQsLwojH4qYbV2FoeMfnD2nPLC8CCeon8R4JyWfyRSka4tv6ioQFA6xKkrvUQiLi385cw51n",
  "key3": "5rgZ4AhtJJAw1Uukzj91Rbm5W15Mi1tpU7gr6Tgpyq8atGGGLUFBGTUgWZjZwbRxUF6MY8cMB2mWz73qSHDwjRh4",
  "key4": "5vRy7ZY2jiQQxGyVodH2YEoqb6LBQhMSK5cDGpn3WB3sQREy6zV8yD8yLQrKuzgKzJmN6BQtmGMnRrBkie8h7nBV",
  "key5": "4QMM3U2kYJ9CMczVchgDSqT6pC43J3mdTX4LVwvSwELZRAUxqs21REgc96sFtR92SZpFL5PJVkqQxGei3qsKd7wx",
  "key6": "64QhVEJf5R6jqSs51j9fiw5yZYLxs6FwMMNzg9Z7eZX6CtLWJfADWUHg4VPa1Y3o1bRRHiq2BFuF46mYhKJrcq2S",
  "key7": "oGHLTXmC1ad8xg6rY7eZP4RgWWWwyNQ61E6BVriGKFcpcCYRLw7US5xBbxUWEqi5WvpzampYWnKpEYYknEVzckc",
  "key8": "3HaaKTRptMuBqZQRi4CkbYQ1q5H85Vbe9TRfGLYV1NsB9zztd5yzLXdARhTpqCnYjXfNGFXXsjShthZRg3GYRM3V",
  "key9": "25Fi1VfvShHSjg6Rv7VhMYn28f5XAGsRkrS65knVs7faz1zE7m8Dru8iQq7k85CT9aR8r9hJYL28b3DkoU1zAypx",
  "key10": "4bjeZyDnF2JHkfpbLf42dQZAJisZFuj2Y1Fst47fZbM7EcFd61dxat27gLmnp4Bn9HpMuCiCWtGXzYSMo8NqnZdA",
  "key11": "26rTCqpWz4YRUFG7p3GJg9G1h9grJtoefu7WpNvgU4bFS4HZHwHGM2yih5jp11faq8g3qTMkuitodeYjpfMA6xkY",
  "key12": "NMynZpRqZPAx5RtzfT8ctJDQxtGzjqVeteLvUvXmMv1yNhCxeMYUvWrFkbkEPeLX8nWdp1iUxHobhZBK1xkxnWz",
  "key13": "3qYx4rasd7Qk9NAFY9pVVFGqNL7K5veRgvk7SoHB8E9SHywPbpLxy7LZHe6DkKHF6yVYx5WLXiCuS3Yct9mDpxrN",
  "key14": "35FwAWac8gQ5LJ3etR8HNUfrgFTkiwCFaC8gvKEt6BChy9aqgxWRwRPUGgN4TJuWvXQ9641PA1cLjXmDYzNvSJtV",
  "key15": "uEqRGiMgwh9tzPbcCYzfWJHa3opEfw6SyvzdjoDmLbeiD7Yi5rE6AxdTQ1GuTXNz6ehokCaCPFQCjRDX72exDWg",
  "key16": "5HYeyLYoBfZ73cjdk5VEyCXdzpBsgNuaM3Ein1XWtdf3cdJ7veZbXfX16qQdbzGZEqNveiX3vd6ZpSBgx5NnTJxa",
  "key17": "2xqhCmK4JThCitHmHKp9sc6hv58X7kF7X7GAUy6krvpknNCKu3zDd9nmjR5wcDrjxJrLifC5rjr6bKqQMg2JXrgK",
  "key18": "3vmk9e5KiAs5mukUdPMQHHmuzNL1N9Knc9tzF1JvCzwWfXZqMSAZsa3YEgvPQ3y6Tye4RtdFycMSmqfLUbMJ4hcK",
  "key19": "31M3by59D6haUmZ8RZ4Z5LAmatGystmsF8jRWSBu4mDhNvhMDiq7K9raXkkdSxeKdVobgbDPGEqwTPmuYhUw7k6K",
  "key20": "5qmVA1P2fvVrGj9s7AVQ2rabfAxCrAwS53QCAsabvoVnVcLNVcXeTS2wgaNfZ7osuDTCfA1LHT7cYW83i8ifow9E",
  "key21": "5ifLnL2zr59XejhqRRcKDN4z9ex4HxuxuUKWvv9F8prgxMCJxp2AtctZteR2o725cKncAEywdhCb7Z2yeeZ8zEMG",
  "key22": "eyt24V4up8k1QFaC8xGiFXR1rwZMv7Y6MrXBc3HxW75PeZXyy5nKiaH6iSdP1MgAhGDNNNHW25CjEqP3yLkz5oc",
  "key23": "3KizZozqReVQqye2HD2cAfazA1e6KDhzA6A2kkMUMc9J5qTuu7SxFC3uAz6PWGmcMGijaBqZfjFVWqnk8q4DTSVu",
  "key24": "5fCwk48VLf69JRXf9D8AsFFghfsS2wcwicgpxpJANaTTdGyxXvRrbGPKj43kc79kUpwjmCn7Nb7oHSWdPxMZrEFF",
  "key25": "2s67i65tQ5JHfzQEh9ZhcQcpznvWBUwKB8vzBAiJEmq3gNfgDWSCqP5nGyzgoUsimn6w3xBaVULp75gHCFMsXRiq",
  "key26": "4k8FP8hWvfwvQBLN2NGurt8xFBbW9wZZR3q4ddLh5aoXS5Mq4LqLJxroBMfntBfGJgD6mLvqspk9XpeUyqzczkRc",
  "key27": "QpGvwsuV48Wu7uwgc9w8u6kd1NjMC6fRG9tdZge6EnzYBMnwrzwLJWsZwa6rmGZwxMHw5da7usFYzoWnim2QbTF",
  "key28": "2nf5JmdPZyaSy9aUneAHmvex5svHbB7KJwd4Hrtxtz5hHDRxiRiNG7rjfWdC78pbbzxTLD3WVzPtnpYFamo6eNE9",
  "key29": "4htkqgdjQAEGF5YW6HfnvyGLWeK2CvYywxXnLC2wjNB7SzudyxZPDZNPnSrXrZsrkjgEsTUKWuzYmkrKqXrC3Ruc",
  "key30": "57FpKsFeYeKojyy7no3P343Nz4HdrveFxuvaC1Fx7kvo4V7Tp8Sfksst1gzxDN281vRRptBFtfaPEceMVX9uL1PP",
  "key31": "433sv8L2Twu5uxpJRuifVVMRDubnFpmvqBi3zZhwKgpGRNd8QTUJRQvJcegLh5iw41xJBhap7bZWV6g1XcL2R5qd",
  "key32": "Gk6HNaW33Uc3ZBfoMCCKUfVmfpT6HxsetCDxz2fSJR9ipCX7ChrnVpgfnQMYL8Rz7HrDHCsNEYjH5AjjJh8K5Rx"
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
