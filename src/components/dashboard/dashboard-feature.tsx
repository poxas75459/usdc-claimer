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
    "sgpodFqmK538u9sNLHS5p2RaZQ5zAo3pLDgavys7xyeVToS8MLa5XfMYD7TrzK8spfuNzueWFgBgHyCFJpiybzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SiyidEMTWfYo2wcDzFZcjF5cj8iocj39MMUi45Uxqqb9x82uKq8tZPtSZAhyhuPPRqWXCirp9GQze3xTAK4rWRg",
  "key1": "2cUTuWDA78JyXDTVGrH6z4DXtxDBEbmKrevNQiZotPJuKa2SNUhQsRm8sWPk1o2FVLsYdWEKQiUy4LMjBTZwoBPz",
  "key2": "2g4WH1dSmXhYqonhLk435PMBrfTeDeqYWvKb1BLncXwPvVNgzFaMoKtY6C65pu4i2hd497mcx15YMTBzVh2Mgi2t",
  "key3": "3G4QtsgoiNZmN67bkNfnKeoGrYjqex63SLgLYMvU1diVzU18yxeKisrRkGs41dRmUbPqTLTG5z9R97ySFcaywLYo",
  "key4": "4tEWPCQaeEwbj7jLXFxvKxgS5B4w2nCxhoLRqDHqZYpZ9WNV4iAFweGi82LcXdukRJazrTQx3p7C7Ui1mBPyLP3d",
  "key5": "2qY4XyyRVNjwJVEzQg6MCmhTg8dy4TUD3HHuGWV11oKFoseMQ2SL4at1YUXmYLMXPXTGmdzD4fwgpePuDxnLiW9m",
  "key6": "X78FBnrN2tMaBR4UQcbeGVvUciHCPnff1MQnkEAMRKAf7AnQ6z1zjtCJFAFDRxsRB1G3VtruAXy6owswXn5Qvi6",
  "key7": "5gnFkEfEE8LjUhGYBHqMVe69kkb4JLvxZm1GJUedMEmMKiKWWTwigoQSWAuxsGmmC3RM2WExPZajd4pjeY31SdYB",
  "key8": "4n8W414QUHiWGz5vwcgsY5b89AKpXzcgnwcVbzfMQsjMhQu2xfcLKT2G7UX8T1BBju6cyrpMNku98CqDTLU5FVEr",
  "key9": "4eY3sLijMMUYD2Ydr1sBckLQ1ZvCm7GgXPeyctKvrk4GKET2huBLvoDBgANXgLBzVWugU6gA4rQdQf8uJ2NdPpqF",
  "key10": "38UgffGNoW2tipSNuzybCcLsAqGP5mXnzauVWSi3vr2oWsAfMqp7gByhdwFBT6i5FuvdcdfDZuDLuCC9qtRcmvWn",
  "key11": "3NDLgF2iNFptBXBMDHPmjTNBzRHimV4WQMMzNtZHdH911oG16Ynj7FaN95p2gjqTjhKe5nxSMQi1UoaWSdPXyixM",
  "key12": "4d5py5GZ38crKgRfPfzneMiqK6ideCR2W2seEQKmRZ3s9YZkkpjLzTGnuq5ZRAgC9ezaC2jNBd4qSd1GyRJ1RpCU",
  "key13": "66ym3vTruCjCXoQEDqmGp9jvtYPw8sUBCtPgnYPHc8NWF5jJtoUdrmYq6edt2wGtiYbSoPM8zcMe52ppyqBJwPwz",
  "key14": "3hpKHEsvDZ4iHpPxgLKCwe3aSXB7CD2i8SV3GNq8wBs73WJ9gWQ9BMJ8vSMgrAv1TM2n6utzkkUcxZqbDDZnTz2B",
  "key15": "391Bzd1T7kN31fuEofhC7AgxEaNfnr8dWg1aNEhixfiqB1ZLAkym264UPFGSjTqyvJ9kGNPs2KS4koECeM1BDSwD",
  "key16": "43a7jyHpxidrGRmqxG5ybf5Ky49edYD7evFjdFckHMCTz65iAtHEN8HRwntEgFM91Mrietv5ouCKCnpreB8RXEVM",
  "key17": "E38wjfpftex88eXMtBqZ4VdU5G5ZXAx7eFcuu5xfiAAK82VwtpcQ11tx4D7RDJPEPb16kB6KaCDe8Jb9pr48RhQ",
  "key18": "uthGRtnNnAPoVNpvABMsr2sJRaugnDZd6aAjJP8qkF73ADvDJyDdxf2gAdTo58TtxdQFGPyEtD87tgtnKMvvrXm",
  "key19": "49vyeJ4DhQVixExeePQokK6JaqyL3J9URwHRWifuS6ggjec6pxhVtbyoKhf7SzbL3NRRPGdXeSay5ifaPYj8E5SU",
  "key20": "4PpJmTFQDqHdgkWVibDbq35kKCFwkUXiXSsygQwdNvyy2EBBvVgFDtALqNzQcTXBxZkRbcBeW58aiaMUh7ZuW66q",
  "key21": "64yaJJisQZbRxuspD2sPZyiPceJjfLT67H6JZU1onN1agAjDjNgBr1qJJPMRzVV4LTuqYH55qjNTYPRowDiJLqes",
  "key22": "3LjSR1AFenqMNNARuLTbtPmxctenYsvvuXYCAQzN1Zg7JqDrUua7aEhs6ZafcJWMh9h9iGVbKG1qR2wRxK6AGR5d",
  "key23": "rRm5nZp9KYSvHiNf6ZdGVCPW5Q5KaMddKF5DuZD9wHdT5uPokCCPjhqzQfjWPyFK3FiXWPPH5LD4HiJKPn3Gy63",
  "key24": "5sm59gqLqeosTE6RTUX7VKd1fH9RsmNV9o6wmaiX7MR2JDyETmGPU3xetxKKZLu8A1WpHcMgYcgduxTPwz2yJhLB",
  "key25": "4C5tUZsWPRxNKs7aqWzpCaiVRTmJMznhBzRRgzCJFVuTkifEKtg2KnntctwnNfSD4yrjgQfxAUPNdemvrnPQDQKU",
  "key26": "j3w3mh7SQif9Jmaa2ggCBSvXtHBHnya9ZyxpM66TwbXk9P2L2iTUtXjRa5oxskobRUnKYgvWEZuhLKo2UuYER9k",
  "key27": "3qddNA7dabzGenQY25zH6du3EitTRMeW1JhQWcoogC4tDa9nSkffDbhCLihtVyyxqqN9BH4MaCsVXwAUNNiR9dDn",
  "key28": "334agxJJoxoXjpU2kv7wnCwdumPPo1yyj7upBQD1p9AKARf3pmffD6JaMUUDRY56YRzSoRgKrbdjCKmDMXcB5d2o",
  "key29": "3ezw68p4xHHfXw2qq9jQREArskNm8ub251T8JgCjsq5wRmbdgnTPtmk3yKNxpaRJtZJKBM9jiFbCgb6iQGvVX8Kf"
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
