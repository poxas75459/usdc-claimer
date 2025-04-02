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
    "h3dUVmC2BpoYAdjgLrTyeKKAF9JTUn1BQcZ2UfH896XrQqFqYCuQkNk5pVwsD3PrbbrmUTCbyPS6ArENouFQkrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MpkpnEBbvuBbaLiGDLz46G9y5UeGPvov85wXtdG6AWjwzh4cUCjn5Xj3dPsixyhi1XVDkQauHCrKMUBfu8enTHQ",
  "key1": "335wE3tnYfgK1NN5D6LneZo3HwnyXcrShqHTZFiPAAedR4dAEbCnTpNe8Jrm3xA3aViaf9f5Zos6dxzMe2gXVbWe",
  "key2": "2TWWQsmKsozLmGpg1TeRLtpsdPDZ8HDqF3xmtjmGBBrMFYa6gYxMxf3qVeN7qz9CdfgBeGUVu7YY8LbHzzcmp7Zh",
  "key3": "3fQzxp2bFbifN6bRHCxrHFgsfcethC2oZkpHFCwRnxjizhFqJDgND2Nqn1xrPZspPWXJEXk3AFw6aSBuFQr74Cvj",
  "key4": "62QYq7k3K256FXRiDAeDNecx6o8tmgXUhtDqJXEZoaGPCKQRNWarDTS3xhHaWhWH1XCVT9zeZPf8DLSokjUEVSBN",
  "key5": "S6cZjng5d6aiNc7B1BxxSF6eEMXSMcRmW5Cgc1bMTCwvgR3p8r6yvWZJ9iMAqDtaGE7TeFemT1YjPSo5V8XChcx",
  "key6": "2NwFsnU6DutJ6dtep9MNJjGYxYwbdZUoGtZ9rR8CyncGayoT6U1KxJMwf9nH5qyRLEFM5zkofXZmmSjsGEcy3Tfc",
  "key7": "58xfPL1EhCMqLYsZAVuJ9MFRWfJUhZHyvHjWQmJ2SVmeRxdRufPyAyBR13dHXSddF823eD9JecUpV4uZdyiB2WuA",
  "key8": "9q8t5acnACTUe3oXygTBngT9C7hBUkh9hFVSR9DpDsfZtg857etGDN4udFddcPbe8DmRTRbB8YwFci3RedU3YNR",
  "key9": "5GqV3ArX5rSqXsLHYHoYuk5gpW1jr5W1YRHsXYeygHezHnESyvKwrGzZYe46YJWWVuMKyFTJVH5vvGCj49E9cmpK",
  "key10": "3dp9QusVvzNYnrGzbdw4x7UFVoczKjHdi4mwR7LZY8zbR5Mcp3TApf48x1PUzAw9N6Bye48eVe6M9EN8BXU2g7Pz",
  "key11": "4xjFVuPk8RgVyxxSxLJMtiATPBA9JEqZwVWbovmZiMSEHdF5tgQG117rgPfDcKiEQfudFVbtc56DGVyLeQCxeF4u",
  "key12": "22ch3i7ErWGGkwcc9fdUiQ9wM7TNwFQnBUE2AhbN3ZYQBExcb4TKWpE5QpfTNtMnKjN2iTdbdyAs4Fh9HPmU4h2m",
  "key13": "fLP5RRHWV1T1wG7KgBS9zX91g4rmx7W9ej7ZKKbCTLzah6FibhzYPnrgB5ppUnxAuvhCoov15TSmR6KQtkteTZ7",
  "key14": "4kMXxBWp7wuU26wQLAqE2zon2uTB89A871TBstifHKnYjxgcvyc7Vws9P8D2jLpWhtSvsC9oekGJS31yrK5Bf4Hj",
  "key15": "3JgVWGR7B6wk8dyeEZmfN2hqRfYsJ2F8jetU7aPShLwGqAdAF12AsxVTmGKWqiwbYZnLF5Yy5gRaoQoGTS5U6htU",
  "key16": "2K166AVuKAA7ykHzw5UQonZAYe9TMh7TYtcSy5w8nxEmWVpvU3rDJWqDh8ayB1EgYnDPmaWmZABAwty3UNzCyZMV",
  "key17": "2yW3hHSAju4gxVVhQocM2T4KH6vF1iojdi6eWdGJco4aaocCykpA3F3TYKVjRnNk7PXWiKwHgNdq54zHZ3xsZ5gU",
  "key18": "22Y3baqceqjrFqCHF922NeSvdzsPi9EQ5bgVaWPK3pfcbaZnx5eckmFyy5CkMmkxJzL68pcZsNusbZViBGDXH1FW",
  "key19": "5H3KmEG28R5PAFzNuYERQftQCDkPTMZPihjJSh8JosSWmv8A5HfiYLSXDJRnWxuxha14LsxVzxD6XdGCxdE13Ab4",
  "key20": "Ac4xuYRCoa6UMNo8zsj8ViumqDhfQennPeTbEJZQHJBrftRGo6RSCfMR5K2dDDD9qGjn4U1SxafRpqQboGfj4uG",
  "key21": "3kP8nquCbtzrPG9zLmYNTHq1w4iq9Sq8AERTvzsMGoU7VC3fyfvTCHC1YMioyn8uPv9dZdNUxEv2La5QuyFf5sEu",
  "key22": "3M69ks4cBUKj1cdxRafxeaeehCyhVRtg44ocnRohFXDn9KNfgL93SiaWay4CBXju3QAjKARcXfPe8hNGQypquG7P",
  "key23": "5A1weiRguyehhHSyUAYgNQc6tmo91e34J34eThgEYvT46GKDt8LgvxkUM6XmZVwuY5o3SziRXEVZmdRzst8FgSV1",
  "key24": "2xBuc3pKhsVF3W1niCmLBLx9rJxjrj9K8ff6nDTSnfAGb4rRzTXj8vkaXmCCzcPPV3wCrR3D3uN7FvWVVpRge4rF",
  "key25": "3JkkdW1QcFXXgPXQ5cGJRbD9wsoDT4Y73pM9g5iG6ffxWcXoxvvYzBPwzVeBhwdgQjG2UTVLdDshKNNncCdU6Xat",
  "key26": "44tVu2ha5hXuvRu93SMdDELwZr4TF2UrfzXcGUULUTzQJcKJZ935J8j7fxaJWwu3WeuVmF9iJ7uHG4JBAWmvgFeq",
  "key27": "4eYPVnGLfJgx8V3hFuqWSkCBccnZwz9Ndb931o7Q6bv3pHgfULfJdkyH13GAgQqRMpAHpN9trDHHqLcHoxEi5sZo",
  "key28": "2ZYrA2Dk48Kfb1p4BNocF5z57WxVgcESQZwp7cf9DtQ2HVEu3Ksw7TS1uy68S6MJSkoft8Ty79nGF4U7naYJk1qT",
  "key29": "XnLeiFbkM3gGrNFPatTqqtY6y3F5uR8hDCK4Zab88DsBcHcm5QqFaGHSWaK5j92GNEByXs2dv7Jt3Xv5fWLa6do",
  "key30": "3wbktZjQdDhJc652sKCZBV2HDw5B4nXHgZfHqAMGr7gU6fxpWVaVuygmzLYk3SyDCiWnXWGHdAti9qPobduqGhaW",
  "key31": "cjLyR5yTvceXCj8DGcTHe5ebEdZeQcY4sTxyqngRzJMZDVKkWgmit4hFb6U63VkCT86wbcZyy7f6Yt3RjxUweLf",
  "key32": "3Ksm9NZikWTVYan4qcN66JVd1DZNeL9FiQPhSnbGHiNqjAJjAVMVxxKMhvUGhxAeztrpinc6mDPRwZA8VaL8cjiK",
  "key33": "4tGY3m3rxwNPZPRqjB4HVWEojg648gBp8wciQHTdJ8ZJdhfV7e1N5LGCf5zvnDZedjsNcDbcUgxUqH1Cjgjt4PV",
  "key34": "5WQMne5C37khYw5PErPyy4F5XtW2YXzLFXErAyqfAhmMabq72Qg1FDTK4cNNCahCWTqSvbXhbXbR8DY88dTfPnkf",
  "key35": "4rDVbD7FVMppkFZPmBd7U4VAesxvTwai1VHqdaj8rFSaHJqoDnFHpfTHN2XNwdrkz1uXLbM8M8kSH29UNnttcVhY",
  "key36": "22FdRWtCJbFuZrHMgeFLeFgVipux9FtRHkWEhwTwUxzuc8WYixP191zSDG4axhqwYEP3mSNxYAC8R3F3zrncXVAF",
  "key37": "56U1TvjkCzYFjQyMonRFMFy46EiM4r3yrDxdNUGTzjU9eJqfLc7yCxdWvJCT3vLzFgxrbX7dtebqcimzB4wjk49v",
  "key38": "4tvrP3MR5Tm5QiytzpLzCuwbECJu6WwQALFqMH7frdWsiU5fnzieZW53qNkpQDw4DeLsuE9DtZj9KtLUsn2GFBqt",
  "key39": "5hHGXnnphwZVUJ4E6zHVdtv8nJPpmGgyLYBseYG1EQXvr82FaKk7gWwuK2h7fFy8cPfA3K52QFC2mzCbWvYJt1Tx",
  "key40": "4B8h4ToUawQykG1pnR4hknjnyoiR9biokeJ38zcgnYvbYKA8Erzn7Bivg5f6dRagSuVqzx2PqZbHrKQx9WBJiDUm",
  "key41": "4XQ4ZggMSXs5riCGMNorHzGbatLqduSVx9dAgUWssXRyAixBBbX9Zp7SWdytrLqyXvSDnzTWwnTm8NemdG7rK22z",
  "key42": "4kXxDHe3qUuaA4p3SUA9ge5CpEdDgM4xcZKdYM3hsXt1YK2RhERNpEEJ34sU4JAMcz3hM26YQM6ezeGm4CpcpPSs",
  "key43": "4bXYdohcZoxGTxT5Y1rXZ3v5GdBH36bRYFowT4zEjt8FEeoRMzPYMGCrkPXuLcHE14rc26XHfKX2D8Jga9yVfePE",
  "key44": "3ienM6fWDcEJijsTUYgyTcnMUXpVEoQypLvLHAgoUdsfy7JX4pTtAzDmajHvbNFpnfX3C7YCeEWxKYEitqGqLvPZ",
  "key45": "RxFAsqJcqMoGk6JoUS7ngmXHtFDn5Lnje3EBRktAoXVLTDehkwDZotT1oux93MjSoVWnia3fNUf76fARoLD5qZ8",
  "key46": "4ZhiBWKcKWbBAbSXDg9YqFwbrQkfrcSUZkF9K9mRaMa8KTSDn4RFY2dACr32Yqvj5aWEcSX1X6fJJjU6xSKbF2Tp"
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
