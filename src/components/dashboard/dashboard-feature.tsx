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
    "63Zu5dbqqbhdd5EhG2NJyT9urLfnZPuNztS9xvuULsU74zrNsPz6ccewhxN1JNnniwtmoGWGxRwZzcxbHKsZmKaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3urwC8hnGQeHBvSUxUTjB5V1YzLRMJE6GZe9ifWjBPWwexCoaC5M4drRjf4sJYP4XRbCA7NTHdjvuUgoWw4h5RH3",
  "key1": "24jnyLhEVAY5ExAGBRED4hwuBc4G2vxzARVVAaXuiT7vvvBqpTgTYGWs3GG7tSrNpfimREJKGWAeRwZiCmW9ZjV4",
  "key2": "45eXgW5v6X8CstxXteKgpSoRxBJXko3fe9tUGgKuakeK8qNCiJTonSsB81n1Em7pManvqzxdBgDCSiBqpAxT4EdK",
  "key3": "4QpdVijuVDGdrxHtPrxzRFDPyx9GTXnqMBVnU1SFMWYW8KAegeVBangrHuFcHbVZuurrqgVzuah8B67tuqsPvoQZ",
  "key4": "2UPeumnQagrs32hHn1sGr3eSFT5RoJPaowiayicroZL3YniPXaF8dFMGyTc9ZqmCBCWFRrK6rtJFWzBwFrXRAX67",
  "key5": "2ZPy1UqVYDnGsWgbg3cUDZhA9CswK8eyhCXR3cCWvU87DKLhm3vmNhsjmFVgbnnobpYd7kjiaLHLHSRyBSM8J8wC",
  "key6": "3u2KeDKpVMEskUGPkgBFGi5yMUpHc1j4VsX3VwkNQK7eirKwEvq7tgJ7KdZ2mgaQrjms5rhZ6FG6PJ11asM4x9vs",
  "key7": "5G7K4sja5BQm5h1RNfWQPXjbfKQB2P8UdxsjzLgKFn5x2osmMuJXo5Gu1jo58ACiqyJQ6uKwox2J9tZgfkdYKLQy",
  "key8": "4KAv7AGEbFYcvH5gmJDtx1vifbTL38iXgNZHCsdZogJdBS5h7Q8B8Vk3TxcJa7YzMsBpvZ8VmaPXCEWcmh9Af73A",
  "key9": "4QeEwZAzMQspzcc4cW4939igoygv1meEiKLb8cXHKnjEdMYy6yG2ZXhTCE29p7SyasxXBKARMfhDoeLJBfnaq5oN",
  "key10": "4vN3TsuzjX3R72koFqUAesHNKGYcJShawXLTRvQKayS8kzCVKnzbNmuZ2p1PrmMXcirzRu647WncafXcKcr2TtDm",
  "key11": "56zEVR43yoEXoGs4NCJJoEZyGDrWmWvHFPXBLcj6LX213BzopEzoo8xGhTZUynKxvqxry3gHeLUaftW3FLn2EZcn",
  "key12": "3yJ5cAEumnrPidq46C8AGdNoShqf7tqVq5ECeHmF7sZJFtQ7eqAecYFNHvsovY6eErPwwY2KdTr8y8fGex9Cs97i",
  "key13": "4KjHXigL6DuE9x44x2x9ghB2VhvRcpvvH5TcS3j6RkMDbjeNFxnKyi1y1icpjpRyEAJRrRB1nugGUa1CS1pzDFxk",
  "key14": "3wX5aE4SrjTYgUbbPXG49tWtWaRPXhzWQjYz5XBfZbJNmEAwUNjHDYcBTTYUwfGXSPaq1u743YAQse63xKmN6h9X",
  "key15": "2iPE2PU2x3PdVEfBeqkrRR8aBNGyoXYjPp3XtDiouCaKVcEjRme2RBH8593m5KB9ox3xDHUk8L5YjuoCui79dzVy",
  "key16": "3RwXmqe8tDCVDRMEnUByWery14gLRhCcrViFjTdsBvmdraC22ZLuVMvHWH1BmHRokg53ujF9pDdsavvDW7gK3TPY",
  "key17": "4NqaQ6NJaBTxE2ejQMy7G8P4M9w3Tim3p11DFUpkPzMe97phyqZH4gEyAzDykn67SL49BHp9bRCWLp7KuBtCESHY",
  "key18": "2WHShJdasQqbiZ2Jr91HdnvQk5bvAFa2Uj3tJ62MWgWppdz8RqEeL8PHkTrf31Wrpx7i3vYRJo9yXJHShUCNBpYw",
  "key19": "43cw4a7yozknrWFZhepFjvXJHBNpHQQY4jAYsZJeM6CYJU2QphzURZDyezt5Zxd49ZyXwb3QJtSZ2BZuGdNEe9ZT",
  "key20": "5ns2MkBgh8T8B1WUDcsmGMPi7AWwi88r6C8sM99mMcubLwVS5KaoNRPYywfMLPS2pucgr2oWoysARmVTsEKC1U3s",
  "key21": "o1D238cP5HwBKKcet3XshkbRS29qqePeqnPp17wCkUqHYtAdPvYc3NRNzcYTRBXmWjT7jmAym92cK9HLHmBBTVh",
  "key22": "4D3ruWBaZVmLzn6F7bage5mq6211e9yEyn2co9jq4UHwMwyRZxec7VHTRR85izXiwRVVMSXVqwistGVkZYN84BJp",
  "key23": "3AQdZadYykc1nm2WLjrXhs74NisFRmtYw6NvssZyjcCet9NCJ316Efs14vUn7uUrjf6NN1XVay6jcurG8HGDwSCt",
  "key24": "42ovDYUo2Wk6eZnBtvHEk5qNamcjCY1S9GhXMzvESUwnfKhPz6P5Rtevgo6QWPZ6RDBTtfzF2jWkuJVPvUw2MZSE",
  "key25": "eQQHVEMfK4RYUzmecEixH682EZwcdA3t1pbgd3eZs3VNQgM1dq9EbqhFHwvkjV4bsNYC4XRd4Ud9ykrNhJ19BQ7",
  "key26": "2zF45h8BqyQ11BuFvfDVbDJuZtsCnBbY6c2MERHmunqRMnaSCSg1HF4Mb7cQNeZH6DiRECru3sqq55SMU2RYYcMD",
  "key27": "LGgH6x9tucuAhm2nks2Vj9z7UYb9LtvAn1dRTfcy4fXdSmBMWMFDRBzPeoAdt7FnqToYFvvk9sw6zbeJ3V2Te8p",
  "key28": "3s9tmLEmVPLASRkqAP3PPg7dWanRYkBgKicxSnjMvMeWg8zFAQjXsU8LYkhNKPUEYzA2GqYojrJvTffqLeH3jda4",
  "key29": "2z25FAHHYvHUrA4rdFXeugqNXoYkh1h1vHB1uAmqDehu11hmLgvfN1FFCwKBuntzP3xhTWrPArfkHuSfPH6NZeMj",
  "key30": "2VpuVqGkNfTRbb67sPaKwCirKceoLqFAZCAa3cmqdzUh6B6ibgRAqahVHi9wrJbAtqSM2YuiC9YWBwcWcecfMsmZ",
  "key31": "24hgqkaYjeCbc8mJPqPiSdQhaKVT17F2Khq36ZDt6hsedp5nrX8PEtUym8tJtKNkqZ4S9RDKx5XsvB9xKXDBfbX6",
  "key32": "Vavp4SpKQ1k1AUX9cDV2UkW3to1a25rmGBcjnhJFzsVBiL6SMtShTRR3GJuDAqcabBu1M4P8ui16nN5XBSJ7wFw",
  "key33": "3v2nVPD5WLejRgPfd4wvnumaDoWwxJ6ZvfVtBRv5EZW5rnFM7sBoGVwpLUYQYx1Ycf3puq8HaukE5VA6Nn5G9GtG",
  "key34": "3qX8X3nMxNX9LGig3kGKqogvg9wZTy61MuBsGcJQGVPkk55dgX9H43vPXDRPoiZJhyQcCQD3rGSkwdarU8akSmZf",
  "key35": "2ogfAeXszNDxH5sUf7sCcDorcWn72wDRwckeq9GLosUqT565rrhq9KwCWqEr44aXMmEbsABJb7HTjjaWWZ8d8cUP",
  "key36": "5rwbDDWTZexSSGyh8uiL4rgfcFCiRhGjAezKM3QQAVLTHWc4xj6Db5hMYHWuJrQ46wQA8bn1gEYBSsLXxuqdDNCM",
  "key37": "4e6Uu9DEMrQWpj59YJPaoyRaXGihPwuxLxyPoEGFRqHV9WtRTUrqdLiRoMxLUrUXprULAyXdissrEjquBRafB8dP",
  "key38": "KegvqG9Z59v4oyfemrfFJo9wzLE5txDMxT7hcefuU3SEXTh1EksVTz2VjwRYx69AVCyuVHaRz8wPaNhSieYLfFM",
  "key39": "1odGtGJG8GBTrU8Gu1CEmdesG9B6ZCJBUboefJqPpSQnawX11xq6CwphXMJHjLBLAmDHuPsX4N2jR3xS6Wv5oxb",
  "key40": "3YjQBs1oTf5bE433Kj2Z4uFGHMqq1JhDycgxGk5Uu3dLNKqsHp8X9A1ssw8hHwPVSSz3qMLAPsaYgDEgTcSMUCQK",
  "key41": "2cjQWrdeJfn5N5zLXLnAHzGwSh2tRZmb8pXGFh4ydpABn1V63JZyiF9CU8WGSkSVAAkn8b7eL31gauLFbtBJb3bp",
  "key42": "LPQ1ao5StbcvUYvdWoMnbz3pZH1v3NguCQcTwYiP5H883owm3gkC1zFsPv8C5CsnSTAcX9Z3V76swn298zxn59q",
  "key43": "2DpSzzXwHGXminHVvs8qbocyB997bYEqrjGR7z4JLeSt3XZCaSYn7p9DLdHVF1TzYW3nehMC8XDAodRAUAFEmXvR",
  "key44": "2D9zz7j6vo22u1YPwsAZ8v3w4VexsD2Ka5SqEhEha5FmK6iVN7W1W89TSdwmLyxoz8h6N9psG6J9v8D3wnMJaH1n",
  "key45": "3h1XCQG6zxJupuDLwoBYq5APEnwDD95HwXNNMkfpCBJ4J3TfBNWjjPbbJorPMJMMNku4o6nuB9shtExyxsjMvhw1",
  "key46": "5jbMZkscQGXiCgWzWHz9w87CCgzJwSSe8Dumv3gFMo8jDDVFHcYYCCFhStPGRikU2gRAQUmW9oEJ1DbKNmgfb5kf",
  "key47": "4ZcZxfNTjfiLQUK63xWrvZQS4UQLyGutCeKZ3KSrA1Toot7MJnKGLgqKuKmZ71ztZwTkd2kG5pPYzbJ6VdEMhvWB"
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
