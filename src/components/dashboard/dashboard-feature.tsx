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
    "24AKomsNPiHn9L3qtjVnjF5LhXZ9QPKvw4XQ7GBN7fFef9JGJQ59ik4GEgaWv9o9d75QgsKhhyY6f16Sx4z2i4nT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EsRew4mXeCLxn3S6MEzfyuFKRTWc4B65JAqzGyzo4tyt8CPPLHhNogjtJwrSX4xo5UrAyZas13HpK6SFTvJyEXh",
  "key1": "Vqd32TPUYAvn4Y9oMU4mXJcnx27Ly6dEYjSc5HY58a7bBUBPV5w9dTC66rwogVZWp6V3NU49tF5dkM51b7a7rqZ",
  "key2": "3a5HSGgow3UhgynUrkGuJ4nQ31aNSJvZphZcBYXJSusegEAZKu68Z7tPEkBSbqUgXaKBp9cEbzj8gqArXnCeaiiR",
  "key3": "4NYvcUujh5AtzyqkcU54o53ZjSCag9ErEHaUf7xvMaB5s3tm2hXG3v1KE2tdzYHJZ4haCdDPpWLcor6a3Ea9vDrD",
  "key4": "4wdxHACyMNJuYMuUb53EB51iS2vW12e8mtEtyRZiemqkWRjBeKh4TDUbzUCULdsCKu2a33xXtPBonFPsF4eknNnw",
  "key5": "dnwGCmNbFLvYnRB1bjkZjL9AfVns6EpMgrVFoPy5iBSVNWr42eqxbGCtyM8fJ4u9J1wFvkjcQJh985Y1tpFqTpv",
  "key6": "5JB1E4ifh4kpYR8uWSs8kyPiQS8SQBKbT5Mv4c3cb72vYU6ReJHNsoqFfTZ5HreDqzWSa9CZABFm63s8PJLPJ69k",
  "key7": "bRb3sedNMZ8WsdAW5zDGfnWTkeMnaogCgypdAq5jxsmEC3kHM9yNJ1VGveVprVzhHWKHHADbDuDvoNJCH2hjmTQ",
  "key8": "iKoNoJdyUsViiPywJcZgf2bBkaR6bYZRpCVP4HfDwzEAKNbJRLpkYVYd36MJo7mvkQDUEVjCLjpRXjhj9t1x6dx",
  "key9": "4wdyMaoz2ww4MAoqj6pAeWhoxWdwgp627xgPtEDQfU1fo6k3Q6f649K5QGQGPsigb9BSfX2HucMDk4P8ptwELW1n",
  "key10": "2AtDNFUqrMLWDMPw3yMCKcbhxsH66YEHsfQbC5vEWA91rAz6ASjWr9DgUunExTbJMa1kK7FGKzfSd3jYGYUHWebT",
  "key11": "5YsmV3CnmZZ4bhYApchdoAQ5N5S7DcMhBfuSMCovYgzQo5yudmpfcz4jzroPEy7Xo6NL5Z5E2h1r8K5jeSYoyeXB",
  "key12": "5HswzNamKooXgqJbaHG6tiCTvjrbZGUcKKBnYv5GTfUJrBfaWqzngrZLZpbLwjmWGkCBAnP7FSqRZ4sNH2XmwCbt",
  "key13": "5b9gzioNBHmYw6yeXh5KsjLPnvWLE8GVxhpAxijtdCgKXxyUXQZcQfya7oPQLLRjuL4Wahw4yyYpqw2xtiyc9dU2",
  "key14": "3bkcxHaziMPYscET8zDvEVygJJn3QZPLYjTv57c4se2hnwzqN1b8cVo5XY6ujdkBHafnNvZD2hcNRmyZD8nDLrC6",
  "key15": "47HXvsgxq2EYU3L7TQsRNp7yoKvqSRxPYCsuzgSebXiD4PHWgbGtzqXALXE5bZVfBDrBbwM18evpP4PXoYjHPKjW",
  "key16": "2a1Tw5rTyQ2vvUF6oDvCFmthRpFEMnpXjauHbkYZnqzRLKc8EK7X8XXdiNhvLQX9oYBnE3YiPnz6iF8hMFUFyAVM",
  "key17": "2D6D5WCrPzW5M4fBx4YuM8BHUzkYzrNhb2hhjv36JLibcg3G3RN38R8gke9J7w31HtNAbTGSJ2nyodAQfNt4Zviw",
  "key18": "5yRi2o3pFRSEre94Et8RbnPqEEAuaff3PC8dPN7jFkFWxD5VTm8su4W4dCni6goHWpaYmJAePE7DpDZj4mNbc2a4",
  "key19": "3mPvnsrb1fWMdtDRchtAV4hkiaCoagiD5hDJnd2dNosLCBNcyFfyTbxXff4nb2Y41CVRDtUZeGWWkVfoVZigU2f4",
  "key20": "KfrPH3ngo73PriQJZNg1nLFHTjyg7qyvAUiTEj31gDCsspzjndLhTN4H7YuonVVSEFMEAFZywzcr5v3Q3T6DNWz",
  "key21": "589Kft2ibbEVDF5wWMtRKCSZESnkUqjMa8kG8jqp7bdazNzVqctGWFXd1ijjAQ89FdsPFhJFk6UPCVsMLmoVTZqM",
  "key22": "5bWLxTZvP23u7qpSjk7sk7wCqLuwJjHCcJ3mfn3iR1cRRXbmPDVjeb68ZfEdsvin8iNG9hLHWUgTkhZh9K4fwi8y",
  "key23": "4U5qzhXRtkLJsdkhDz4FhedZMg9wj2EnBFoQpygabZ4obu7vYtjfj2bS1pvMjYN6icXd9QrhbsAE6bqhXe1mbCCR",
  "key24": "2vPq3CRRMMqd98VRp2aRai62F5qxCHMZQdrKuoyS4ZB1XB42KydzoG9pxvcvKiav9KhwBvYNAz7kzUbLTUTVtAa",
  "key25": "3TR3NnPY9PTToMxjCQKtYwWNS3cuty9NyQp5yHacAei4ptdujHzxpBKvhWYvCqFy1YG2PSe5YhqwmKy82DCQp1UU",
  "key26": "3KUKCEa8cBBXanrtoaz8ZXQEk7Hj1QZa8G7ZJGWXz3oD9q1nMfEqbzm2QNcHcBKK2te85wJsYPrFmkL6XuxbtscK",
  "key27": "3vb2MLjeqVcrbU9mUqgWsqTbLxpRBWXZZxpGidYni8zgg9T3Db49jNo63V6FYqkfFrfTbkbYs6kwVULnF6gkxaP8",
  "key28": "2meG36i3LLFduk2WfAnEFN3EB1WMN9Sj4rAEJGUTKkM9wSNJrkRHacUjpaEUN9w7yG1HrvrfSFa4KduRiRgdEeut",
  "key29": "2QmLwuEpxmokRTqCP8eN9UKi3ieu4MRPLL9R2YQ7bJ9Pf2th5voWqbxuhESjFRm6c4Z2P8nQHcAj1CCrgnFfPTSm",
  "key30": "5fXhfXHdjCtp73Cj1HJbfvPedoJueA4oLin8xVGigK2HF2kvv2MZA3run4nvF7iNMR7SuzsPTYmorsAWnSza95v5",
  "key31": "4XmC3THxgBsgx9pVexSpuDaMsRbZmXwB8vq5HousD4kLquFuiWt4xVNE4jpAPNUyXKgmR1FxZ3KiVDx8ftdua3TB",
  "key32": "5PPzmQKGCTaP5ZjHNjH3PuX4JXM1qjTZxofHFxts9iU9a7EsMSgcD6jqbyoKSDJwcrcpGWoZPHNXjxqo8MbiqYSW",
  "key33": "V3xYAKfrT9hRKQ56Vu3jqaqZw9cefFUd8bnETzDznN3Txf5GcKZSjU75NAR4VyLWyBHmaHa1y83KTvDx8faiDHN",
  "key34": "3Pn7oyAyasqqLomuURn4hdHQVya8caUf41piD6SQzUGmDLyXFqMvmdoQ67bfM4ZHpVo3uqa8rkm6J69qPi8aJNZi",
  "key35": "3dfhrkhBYHM2MxxxgSAmU8MCj2DsWhXzNuyr2vCyV5vCfeMtL7AGPe8hcSep53dT57fTaEdSk1e7FuPZ5zuUJ9V5",
  "key36": "5enSma67YmdCjXLELT37RbJZjtM85NMheyEuDnypYirs9GJ1Y78aoZZV9QnrMwhrffRTzcUQw3YA8gNW4aEh7GYt",
  "key37": "4po5zbSz2CiSWytvRnAwMNHvwmakGcHusYgqN5zS6FY5VnzGBPqWdR95eEAq8JyXE9LN6ADSh5tZL8sKwWFg8dME",
  "key38": "5pA9Ey1dKfFJQSywiQM5w5wsQeP6JfmUwSQoBNeNjNEUx319fYw8K3g8WcVPqcPmTW3E932eoFPbX32RtAsAEMSv",
  "key39": "3SjmmdJkyWySQRvdGvZVg5ThnSBXUY7TPniuUVayEpAeYsfERyGM13NiJvqPPmdfqXsbWhoxKhxTafASs2CWmi4G",
  "key40": "2nmnk4abdbzrgiLYjDV9tNNfqjrunL4iSzjZsykndwFwP2v6ags1tca11vEwNJCmAL6Qs2pMPxJf7tRD8UhzKKew",
  "key41": "42PX8c2f3Mn5suHfyMFWNLqCnRHe8Hh95bG4611p4SnMbMDhXfYtuVdkpaBdfssaqNwrYe6zRBBMYxMUcxvr4wS8",
  "key42": "5pUnUngoS5ayydKntqUdEigi8rqWiQKPgZn73qUd12etWN3bLJYkbqjKiYRd4hcerkTbQ9jamLTUzweEWhKL4PgV",
  "key43": "3anHsDUMnaYKbNu8K8zQZD91bRQQwwbEmWQCUcEq8F7xmQ7D6s6ox1MiFe9oXMST6KExqmG3CpBwdHAstdw2sewi",
  "key44": "24bMrabWgGJruJQY2cWSfM3RMmByKKNuBqjKcwfytWpu5sPX8wkw2KsJKLp3mN5nHsYEEU4jZwqUfrKkmkDnYrjX"
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
