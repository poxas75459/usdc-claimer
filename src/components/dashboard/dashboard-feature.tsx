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
    "R8P1ByMCoCjC5R5Ukbvqhh5RfHxiwRjLdour8kJFKjdCoWt6DMTE5eJPpeuLde8JbZwsQyuNd77jZGUiT6QqSms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NY8pJJikHeRD2VVKQbdfZjUyf13pCNtkd4VCcWSpmxLSiDKhNCf4TyUXLaGEb9ZnxhLHa4s2LykqsSD8Ft5zSMa",
  "key1": "4wd95m1gFD3fM8G9HWvEx2xhw3fFriN4LpeystxCZcoYY4V9CnRYcNKWHUQQr6kyzj8suLAhdXMzMgyVm1ATpd5v",
  "key2": "5Gj1cY3P2wuH5HKCUS9MACMCwcsrMpB3vv1SG135mvPsjKnsajstk5LtKN8EoFQ1zEvxcaNRdH1kUTdhWpfoAMnp",
  "key3": "2gELchxJFmYNyL1ByqeREdFkBcj524ovVMofSoYA24EP1D3XhKQGpcs96TDGfGucQ18wESXZPryW9bf4Enquqoez",
  "key4": "5yWtgkGnNSXxKqcmnGh5JroxwhRmGJKgq7ydqs8zqQmWCnNJfKDZ64rzDK8JRoh2niH37oWcmWdDPhzdYsAbTSBb",
  "key5": "34kXy4EA9EbT2SVrEGnoQxkv8pFjgz2G2ZxeYZzNX1oJf7GTBVwCc2GshgD8dsL2qgRP3MkCFAZGLgY6KyhmvkaC",
  "key6": "3gdmNair52oMDT8zHjwV2tmp8C2yAZQ1MzbfGJbGwQzoAzbjRQcmJp6p9PijosyqtetVoeA1eznSyFhfJcLfuVk3",
  "key7": "4ntkauvsRspyg994jkEwMNKWwBaw6QcAXMBDdMSWDU8QJjztD6dcPGLbLxHtT1EB756f39ZKv6kFYp8KM9SPN7UW",
  "key8": "3XtFTxr5Vz1kfKrRxkRWhTNR7kDB4WvecDpRGT4MwzabuAwL5tT7Ra138X5YJT47DS2kfXAGe8NkdEWyNX3LXX1M",
  "key9": "5v8YZNxWsXxxvEcmGShrRKR4ruom5NCXqdtGM5MXuLzEfnogMpnedVBptwcuuEio6eewr6sZBLCzyahKFAYksaUx",
  "key10": "4euAfSBkf47ZJLJ4U3jeLmBS1dQ1X1rwBhxCdUo4udf1nM8xs93FNrKAZ2caHh2tq585HxiccVL1wHoHcXGSjLAz",
  "key11": "Tchc57dqkqkz9qkrZP7SbNAG8wDikvUYxRuN5L97Ahg3rpPPY3JyBnEpgLJnnEpMX3KeEaE3Ba9UPh8zDdEEHNM",
  "key12": "5cX11B5ufbRgKHw3KuZ7Jfc5q3Sndkg1omquQ2iKvDjphrSbu5snqKDECSNwYTDYZTteeLjvLTEkggPr7j288K4o",
  "key13": "3EwAb2TjjDPBJxB4zRQEdDfiXaJNY41Bo3pYXJNZXxXcQBVjRVgCKpRVvgRRsguKijTe3chg4nArWvNkAdLX4Ph1",
  "key14": "5unHQJBiFvT484QvR89ci1BKJvxronyJqTCVX8Wa3xCuCikPAfiDErRb7zTGT5KetaH5C3gKfSD7siZi7fUKf6Br",
  "key15": "4MASRubWTTaDSkdvkrMD4XBjrbypVfgFC4FkzJfsXNCy4Uw3vn1bQfjaK35VX2bf4HVGY2o9XDYt3oPzNz4H4JgY",
  "key16": "3ono7fUwiwd8qf63TpvdT6Da7tzCnFWypyq3qTnzq19yFEF3ubiAdQpoDSJ82Hcyv7gYBrDfpxJPWhePwjP8wUkd",
  "key17": "47K1WG8aLDjGWqdie1sQY8kHZhogVYj1WAaJ36Zp6WUZxEB9txYG5udBqA6JTjxWrGsXcKF7MkJcFMMHrxiwnkPt",
  "key18": "5aVWdoMSm9hXacZk3Aeh5NJKjmk7HkrmZZyUKmdsVDHK26cNXP7F1dsh8GDc94bqJf5WYeEhhPN4pwz7tZ9baAgf",
  "key19": "qZuFMxYCTKxLE6nBsS4gxpQivFNEGfPrjR9FPocgaH3vVr8kxkpwszxS2UuyxdF5W9EDxEkMbzsKUrChyushyUV",
  "key20": "246hSp5CeY41XsH1D8cZBhBfBq3rWU6nKiyQ5LrKD6XCXPiaYuxyqZnq4Mr4akxqPV7tiDhQE4M4SXEnmNcByPfD",
  "key21": "26hkL54k4YGDETQvNN4ntFfFRYxxaeFutrfgXZx7LPoLAuFwk2sZC75mKNeGSTa2FYS9GrPrbQejCceHApucRb7q",
  "key22": "CkpVMYKgLVyVYjrr2HMjnVWUHamXfGKjtup8qtaSFC5hTxTJuH6rF9K1B6RsGbhMN7F5DsxWVvUPaWeKiMwy3aQ",
  "key23": "2vkkkmyMXJEtSHtrbmLtFU31Us3A5zPt7Dc8j3wFrGa6SX1wtjjfiR1sHUXuJDh58LtQQYbjs9F8dRggqYNfiTwR",
  "key24": "5ihZhoxCjGrF5xsXhbuq3Ww5798pWd8AyBShdmvtPG3ntZ4eBRZcpn4rYJXnrS9yAnirx8aVavK23wssnkVSsNBi",
  "key25": "5mNKFcaSe93QShmMkjBzNKziHFRVSGy2xmPLZbtxW9qagoptPa8j96pvXM5ATQoZMVqyQGWXNBUfiZeqUmmKdFy4",
  "key26": "3GsaCwVPzzTDCKSYRD63fui1SqQPphWYTxEixp3fLYuDBpxkPYyw7z9yiWUe29P8JEeJH42ooFp8rUuWQHB76p4y",
  "key27": "5tz7mgTqN6gy9gbTrhUdrLqYapzQEVDLFatxK8BaUZ61FB4z98coZ6MKBsGBank67egsnX2nPycnUPK7rP85kmzr",
  "key28": "7BjnfxT4bQHp5fekvUE3R8vESFgeeT6A7v8D1qHMQc87S5Br5zVvDkPy8h3mp3ixPAjMuPBnMSBvdg84cVNLHfy",
  "key29": "5YHnGMMy2DEDSwBcf6mwaaMqXkcvPSHn1cbCZrhcpPus1C9ehD1v5HZRoWYQ8kHohsrs2B9YZKKNBeNSr13y4iPJ",
  "key30": "2smjPqukLfcy3kqvWMJ4FbTNynFqodATehzWyJeRYVzPyojbPkeMQb2ELMiq32yjgLTh7t27anUWNYWXEAVPzitG",
  "key31": "3WMMQZEY1MsuAXsGSwsiy9LjuuhgNWRUT7An6SXrxyPNewjNNAuv8dvYEiK8JvLkgreBzjtt9gxWvwhia6zaHUKh",
  "key32": "5WWx67N5EZm3bSKvKKWa96hX1qdmwMJ1vYNFWNs87jEjQ5Sw3WjwT5tHJHRTAGjFNmPhuWBrB7nCcLHK18sUbsmh",
  "key33": "5pKqjNkhh9LstHH8BVNoN9G4v5jJmZw5GXJUHCTiAkg7KL9oeLjKPBSjC3VaaRadtrBVf7aAT7Gzw4Qetew3Lwqc",
  "key34": "5wATakxPoaHexsdgjmWfkjdU1VjfZ4w95bGkQn5mj9Y7ybaes84BJkALmJk2CG14KDkwzEd5TxBz35QQfHN4kb8C",
  "key35": "2fyuaNptFjVnzokkSAc3ZXhsKNBQ7FmFaYzNJXjf86abhJNP1o9vexQo6PgmXy3zNMTPaXafQ9nAxYrYh2VpfDh7",
  "key36": "4cL8ZACL2VxX2vFSAZCHGp9hJrvqYMFixSABUBncdTVrjoshA1VxeBDXVmwwiQozzZ84voSNRuckvxdZkouuai97",
  "key37": "2hVY4kytxNXscDmRGf9pgqEp1NWuSCz2bsuSpX4f8s3wZNajAuYjFo465PUscWMGH2jyzvfeisa57eWGvpkmzi6U",
  "key38": "XPSmr8pSAM4jEXBRBsbP1LUF7NGzsZnJs6c3wZVLawYY3NRr4G3QQc1Wmnq6xmT59Jpm6d4FTtZ5FVoE7nmiSkb",
  "key39": "3WKW9bhM9iQg13Hgt1ViuuEGAxByp5NdHsjKWDRn9kedyX647PcXgjReRD7L2gNuU9HFJQE2eaPwt8H5Zto3zai8",
  "key40": "4VW61prfgMKn6qhzFW3tvhPkLmnve8VajKy6eGv9wk27fkkQadDjMnP7DRegjjpPr5Jspma34GK8Br8TNNsVoiLt",
  "key41": "29Ma3tt4MTmzJ16CEJ6ckVeoyEtR1SvxPs6F6NfkAXPfprHWvVT888EbVAUjYUoPubdNPvvDfk8hx5w13YCrXYNh",
  "key42": "yK2XRTWDfqwXbg6TZs1GXW55VxAyq748ptVgX7BDRLvgc8QorJBPdRNb32giHTuosHjsKV8PLicDPyv3jBni6SU",
  "key43": "3v1REx5776o7ZJPt5sHUam5aoTanYjtBX8RpKxfE1zyCERKEwf1qDhBxfUUATuLGCGkv3DY6qLQjvPnh8xxfUUcF",
  "key44": "3RD7ZMX9LTFZytX1REnLMiiw1KMycq3pbFAJqek8Z5V5R6Zyvv328JUp79pk3CgYbB8fknjH3ebcHnx9wNSmY5Je",
  "key45": "5brAKJQ78qQJcdTx32YtjudfVY3kqS1Wb3LzbZGCZ9bMByeA46M9ah9kP5V3oPjD1ZSKpq2ovCBxFH4zFCPTpR6j",
  "key46": "38oZCVajrdATTMVftz5iYQMyuBY3MQjVZM6UnG3EU3NbwJ4fYh2fUCPwHrTYYWA2gxW9tPcDXqNyxiQNeArjKLkq",
  "key47": "2ZE8sHMRJhUewvt561PxA6sU5voR4rYFyK3QEy97aRHK1Qxmk7QgZGvRh5QhoY8ddY9JDZidJaYH57X54mmdqDfV",
  "key48": "5ZEABxYAd6ingSK6hMhAqJPrYK85T7ye9p24mJSPjLzjyphhp4F5UmM4gaNzk9ttZ9jePmKsfHgprHRbWC7CbvaJ",
  "key49": "3iyesddkukS1Tr3oYyX6urZjEiQgTy2xWhvnN3QwXvS9DEwvc9AbzmtNbWbvrp9QzSpDT9Heiax61wEo89z9hybF"
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
