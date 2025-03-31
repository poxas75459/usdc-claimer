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
    "4hGkpJ7h1sthDbD81AhTce7NGbT2R3Qy71bStNCPxDBoruuLDpwLugbRjiB81GnHp6SmxPNt3soyCQrtTfZCm1pB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5obwjXRrfJcYUUbPC1uHKyDbYXDibd7aaSkRPVWmGRh6u8XNPEnreC33nUs43qb7pQ6MYXaANrezq2vQNcFvgi5W",
  "key1": "2cucAMcWg3nzXpnWevdJJty6a9iFg4tnEVKTpRkitvU1tWhtVtY8QHrqGM2pESbf4idBg4M1wqdNc4QX9CqhZnx1",
  "key2": "4T39Y8ki62ADkXSdMVJYyFg7ZWtAegRCw6P3efPibXTr54EGqNvG2kMGdDT7pEQmpYPL372sxhMwqfSDxuwSgcnH",
  "key3": "4AYU5Nf3DUCJAs2nzdNxPM28BvUJLf68BoRGd1f18dF73Y3PUxWNeoZVqrjrDrK1DWKcmaBpepD1eZ3sHLUAZnuX",
  "key4": "5qFBWZYNGxnLaaoXWgCN1evgJgtaaFt6kLeyHMDnADgmtVTDSwvLFjyoCqiVWUswiGa6DFK5YWTuydoiaJX9U3ij",
  "key5": "5E6qWPpvS5NG1a9KqCdUF7hsA4oiQwi9hGWYTiNyRDUnHzQVHccWjtAvr7m4CRPjRUTgRZjqg3QjBKAH4x6aKcSk",
  "key6": "4yejgzdjtmkz1YQ6si34GWNEnoXwLFx5h2FvbTxcnQ2QpUTSfNXNqRr6DoYpkUpmAJ2DqAAjqDd5W5xuZmGRXt9X",
  "key7": "3q2HT1wbJLPzBxra4tpQW5KzR5HrRLxYHVmg9JpbuT1Z5qhcckDsyZgmCnSRVYkGACefzoozJrPVw2npN5vkf7rj",
  "key8": "4PytgjdNSvvtEZPhseeX9SfQoWS72iBB4jyT8tDGbRGBcEGzHxbKJJFQEig4vv647mFLu1YLe1GMg7ZKc4C1J92i",
  "key9": "3qGkxKs3nDNv5KTNXdjrEGC6HLUS6evJBcpfgcsyc7s9SUZkCDa2Ng8YQok8DKnL8JzGzJHsfToojqekUUcKEFAA",
  "key10": "3iiSDQgbtZPaW9yFwuE1tgFZzeaj3LjbEpEpdbAQ73L5TKmQHtsofJm9JmhbBqLDcBjZisZk3mc2pRVax1c8hm7x",
  "key11": "2FuDSWXyVeoxiV7X4AkoftrMPdeboryuSVSBJmb7Sq5XUu4io4TqQASBXQwDkaMtxVCVYsWL4uW5WEi6zfXuiwt2",
  "key12": "41MdKWqYdrfSdqpBxHEeVsRrePp6XBpGeq2W8viNstz6DeghgGkQvgh8ZiF7CAv8yVeN7hpdRYKDiMDz9ZZhRAAf",
  "key13": "2TXM5evVg1dq8dZNAnr3v6KszHp7AJhiM8MEEDYNSeQyQESXo9pAJq2SrYSoguK4gmkUq24G5z7FYYSZhEdFUsSj",
  "key14": "29Aiw3FvEwUNjMsF1YGsp4LRCumw787gsKmeJeJKmiUucGHuRF2gaWPbMepnTueLgBoVEGcY9fyRF17Jgn15a6m1",
  "key15": "5SQfmCdb58erwY8HYX1Vx1mSjbzLP4a4Z1FuwyGbwVFtdCyK4UsrwvwEMU3m2NSkRBjmctnZJ2qng9Y4orwAJwc6",
  "key16": "79YNXaogYbXBByrzACAqWoXCfUSFesN39HBJ3Fpu6td6TTxQFdjFY9DCBR2rsZJBgCfjEW6C3dj1TEpojiMfGwF",
  "key17": "319VEzE2jbYLoC6tqWwvgHYVLNX4sn7zVYTXc7ZceJW6Pc7fux2zHw28VjGUBceP864YtTuRAJyWHhhUJfjxuW7Q",
  "key18": "5uiU6binp1SS97k5gi4gfnTZMUMUh8JK9w913vMMy4JDX4WUckvbnyicGin1mzKDLevCjXR74mW1QdrPbR9ZdNGP",
  "key19": "44YWdFTH55qUbzmKDjzFwwNKwKDXpk8oK6pStvwFpvYC1NFFRZmhfGTu6RKBKrZAE3LvxQfjjHDbgmbpBsugWaAb",
  "key20": "5XLv441qnknfwF5gHorvjiekzERASM12HR4wQGkxpUnXgr7our3FbSbVJMfsJbbM1Mbb4n2sDPpZaasuJeQuSigL",
  "key21": "4Eu4hTjJ8afSSKpA1Hmp9BKf61yNj8McQ3joCKLgkyhvjeoNVKQAwGMMsCvT9GYTv5pS9v6SEAx9vDvrtZE2yTYV",
  "key22": "2mAr6TeQ6h9PiQeDpYbJnp3Cf8mNPHJAKT8V8ugV3hxcRyo44mZm3L3UCqnJTU1YBiSQ21zzN9UvwPJn78f9UHro",
  "key23": "2TP8ohSbHTjVEoxQLRx2UPLgsHRmwKtXkV5dxiQLiNpUd4MjFkNbYMaK63mWSDy6LaSswCrN1RoaubLfibELDgts",
  "key24": "3zeCJwC8yXA3Rd8rqNuNqURRdtLVYUJ72GjCpqGE5uj6EwTZSDapE7HbFEyUX3w3qiBpjk9mJeJLyqF6Qxzb7Snk",
  "key25": "2E9iPQQWqKBbGuPx5ysJisFhg4hk1UxrkrPqgTdZanznbMEuo4kVTqkmSWuLVnZStGnDtWWRnhrtWSVQqVTQ8W2N",
  "key26": "tnagZqhTqvYgrV2DCXf4GTSVtj8RoWHsQF2FNAH83aTpwpGF9MS3xxNitSzxdvXTbyLcB6R6hs1E9baNcyEkhN8",
  "key27": "4RjiX4FvmDLDACsSsfg5rYcYx9MSqFPcbshKGknYvg3iFgNN1a5ewyos5Bihe31RmUDds9vcEEDPpcDgQ1wsKbad",
  "key28": "5NxsasdZaWoiVMqxrsERo39waNtvawZSuaVKL7TkfusXqLP8kmbskxyUTQpcGrXiKVLSNEtMyTP5jGhPaEvVtVWk",
  "key29": "4LEqeHnMBTM7AyHzhaawtUKwNH8L7cZbiqXYfJZkcxTJxc4JvkwdGtv3xdHCxZpgKxqoALS2BZuqqBuZM9wmWVp4",
  "key30": "5HeGyTX12QYj3P5fCdipTzN6GvTeE1RrB54tRDUqKf6WRkrev3MfJTfeCbfrVW2r7xbsKtg4jgJrQZbsxovLLRWJ"
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
