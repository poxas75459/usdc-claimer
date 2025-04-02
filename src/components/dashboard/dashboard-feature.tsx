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
    "2iqBd2oqRNuVoEhpDVvJ6P4TysUYUWtoXZAURcxCV4FNydS4MFvXVJXVHj8PvwhoESf7eW5hJ1YgQjzoe22PkJkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cfT1sdm7yDBPB3JfN1aPfd538BvBj4LKm52gxYATZXcobYD7JvhQWTY4wurrC32QHVkh2byPxALFB8JyUhQMTs8",
  "key1": "4T9dSP54jfEW42m9sodzp4oGfELEj9bpSw8ekQN8f9GupwWPsTswApaLEB76cX4HGxKY2arzdmeXa5Af3aXxuDrx",
  "key2": "BXbsA7byURQ9CeV97roNk8BMrFQQ8Yuf23KuLBLzd6bKtRMzuCMS5vansYo5wGETHAHvkd4hphunBudAb1aa3ns",
  "key3": "2RozRxFwWnTmfQQnukL2a9PDQGwvRFEoRQpv7YgwZL2R6Ykxjo3MC4BLSDUKuomRZRZMz54vwSJZhjfXc8JESREe",
  "key4": "3MzDwnF4ER9CENFDuTsuw3k1ZSJi7Xdvkyt7LQmAzUNTC2mp2RQE8zTBahv5RyWLQiWZi4PYLAq733QaCYFsFrov",
  "key5": "36JmKFsozHAJ5PP4Pir625VfY3HDPF9XnpFCX8NPpfWtrSURWNw3NApLsJayYHqh5K9df3LUPLPwQnWbSByWWiPp",
  "key6": "XNaHfdWLoiHLr6QahpMbdw96HQmYFxjQy9mNBEuxVPRKGCjcjbAT7G12cnHUhve4Umq8j21DT18yXB9Tqu1K4Ve",
  "key7": "2ULtxhRCX9mXnC4C3oNXQ3RsKWwUyc3z7VHjCLqKU9xTcAziL4NFxgZ8CEhBhPn3XggYkPk5cMwriQNpLVWssinq",
  "key8": "57NV1EiexuViGBjttKEWL42NRapfh8ETtp6e5hzcGY6PCybCNvVisUnAmTZvYuaBnhqAri8iEwZKbW2fEt9XyFmZ",
  "key9": "38R6Svv8QGek1zZH1TSeEznHNZu96P9cBnHgFH9SEkRSovsr7DezegZiB6MgMDwtUNFL9Gsr21fmZ9De316Xy3RW",
  "key10": "44FWWkjz3WQzQJ6m6tmeLgcUpi7i2metSxArFfyQJBGnUQ5oGBdcm6ogcPRhLF543CyZicgzTbw6DNzQZzBbMxpa",
  "key11": "2Ge6XrkewYAU6CViiFMW2encU39HFdpAUk9kJcyMy1Vy9QZjf3MtuDsvhA1LUDJ9XgSvst38ojmC4n9SLWREVaj7",
  "key12": "44xrQU323vRdNatShTU66EEzmNChKzzkVjhJqq1fTZN8uU4tsBp3ynEVs46RVtcAq28FNJnHyCGnjXRdF9ffkwvs",
  "key13": "2cHBABkNMo4wNEyFYC5kuxHVVPTZAZyDiktDjjHWe7W1fCcr6oJdUZ6ubkq8JkaJoC6d9PfFKwSBuR5WhTN51hjs",
  "key14": "55AjC7Aftg8f26hSxyCM6P6mm8Ps89KiqL8qgmgfDw8rATKHphRPh7BYtbZmvQz8MomANjZLS4RyAiKVkCQtuNpY",
  "key15": "5YHcdWjUpnWNwBmXeqY1VPjooRTfRL9iksnVpaMmGAHtUwA4dtt5wdDiVePV5ULb7ELZ9hzUN7fequMfnFMSAPdw",
  "key16": "DYcCDxzD1d4rJNpc674z6CyWnfaAxHzUwYdDstoLtCdco6Vj2JXtY9KESG4GicPzbjBocn8ztSqnZA6Wvi4DURz",
  "key17": "64NujU5jda75WyRXFnWnLRCbSNZL47NViiQ7CsdcgvSo3fjoVfS26GQFoBtYFknJHBmW8TQP6KTuRduCZt89AjDJ",
  "key18": "4kJkCrkjgpR1YrVmgWnL75rYL7YSMfmH98TMM7nVT62U7QLuSWicZs9oGdnVy9cggr6NYU1YFu9pHU3pBpg16Hkk",
  "key19": "5YNg9Zt4KQQE7hoxqz4MVoCbqwmnpjChmL4LJGCjQ1Y8xdkdeEBWLDusRbrHwsWm27rLPq4Xf75YNhZKUukS6tVA",
  "key20": "5THHDsZv5iYVrN4iL8S9auu1rySpijydQAQUjrRE7AJ6uJyNtpaQc3Y9SmTWCVnFaaATQS6kxYtfMt3oKqGqYT9i",
  "key21": "5EUBovygH7n6zmWSg88Q1mVErNQwTZ2nVyYQZHvqRXkV4KMAnaWRSzVfWZUeytw8swCiH7yPm437yEWuZErH3JWw",
  "key22": "TydbM8eF2GPkoov14tCv61mCufFE7eMmPA2LD9ArR7XBBzshjGH2exWLV2kMhMZpLKis2xmV1tht7p6upBzuwWQ",
  "key23": "y5o11TVK82d4g5GieeLjz3eR832SMrQJ77bTLb8aQR1FoPJxWWPoCo3oE6Cu3TTquazSWL2UYtB2fYzmv7NntZu",
  "key24": "3tLHYdq7sc1kv7SMvjMVPLSJNFwQQaFzgjkMZMYs4hYWsSpf71AZ2HQemWDpxwVdRmMmfJU3K6ARGhwjTecfYuMM",
  "key25": "5MaKhBkNNv7wyiaNPK9f1dGtef5BdySLWWfvExySdtmpGr28BcDgduVsw3Mmte1ZP4a4BWamryqn1xqXHGoB82SN",
  "key26": "4j9BhXyDEGkqSZcvngVR16RoVXVHBcmAdfbNiMs1E5f97EfQ2Srq5N7caESbD4g8NGeMQw9AVtAzA1EDG62c6Feh",
  "key27": "2sppSyg9d3mpi74vUd9U5zBtHHn1AywDotjpEq2LuuWgDBdcThfecTj3EdWAMwhNr9uBJ5wTvCyNSQaSg6MpgcNG",
  "key28": "3dzdidJr9VTh2AFeQBunhuknWR1tbgUXWN4XgtmYTQnNGFcm4fXRoj5VfCQfmoBKw3VzFVAhdoGwnhbPWtTrjZHz",
  "key29": "mxuR51yyoaJZyriCrnV1vdENuQrkJ8ykFdpnTv9YWRKhX7wpwiLToaEThqav3tFe9j2QVU8hhR1AjeyTQu5A7B6",
  "key30": "41wwUXEwXq8QjoEVdycrcsVe6eauy4AdumRF5kgH61WyfDpshKTjMVNgYkGrfzXVfZJzw3mtDQ912TapFHYuwycF",
  "key31": "3N9P8F4wh6NtdBYZyUNgjqcPVuhc1NvBpvaDt8457uco55VA6UmtAe5DDhN4YJabd9ggMgupLDejR1c7TtrTFTuK",
  "key32": "a4yRWUjCwhu9Gc9KJAoseVyAywF9jqw2MxKkjfQKgS39VV97gjJMi1i7wBBarhNA9NYfetEvdXwsNLBhy8ptHYV",
  "key33": "3QbXwk5sfARu3KrVidgVdt1MPfJdjNJ1j8JRKrGyiZiq8SdkfZR64NnNfA1fWFvX2p1JL9S5ozrpbwkFAXJRybwF",
  "key34": "3BJucB9PrWYMJnUhznoP3tj8E9SJRguXtdZLZz2DdkXgHWQW3dGsfRDvFTim9u5afSP88X5tqyKcfcnqFTtdmHCx",
  "key35": "4bTV7Aq1XmsPebjCoUcbmCGUqAbMEo47RD8vDK1NZduANcBWY9q7UxArCuaMspqad3PMZ9p3AyyUAA6Q3tAQQM21"
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
