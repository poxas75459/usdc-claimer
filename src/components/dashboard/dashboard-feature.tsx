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
    "4s8sVUU8CzgNMvhAnh4tRi33C549zTSdM5poBZp1T6phRrBEdShUWDjqUvZUaQtAqU3stLTEnXmBPxiVJHp4Mvza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SUEUPTbALS81vucGRWgxnmXqwZsoyonaZBW9CVqEG6aTKbfJk1fEVvtEZszKqJvnNREiYDmfLAPZjzndoM9r3zg",
  "key1": "2nDdrUSZ7sjogmR4BMYdg5vxSCoUXnKwtY7oa4BMJaYAvv2nv8yGKiTnVB5gbbqqMRGPahJ7tR2HRWD3HFZfpaxg",
  "key2": "5ciCZtoNZcSWboJNZRcpSJpUi1bwk9LWmrcXM6cPmwgvR4UmVhsz2NHCiYcapqwMFS21Z3j4pXSZmNkaxKTSzasv",
  "key3": "2SDac7hhoftHoEhGBKcHMs1XFpREEXFaMU9uuVLSmXjxXFUNUVqmebjNbLSGKZSEnvUQGKfg99xbAkQbhUz2S5jG",
  "key4": "4XaBFqr9c5FQW2xEXteNEmeaXwowNKX6nuk3ypecRDqwPQKngVYC4adHDWRBLWYLjkBCEiwJB4YTCefmKvT2CV1r",
  "key5": "52WtPvQ2rqJMxEHkUEx4yHnLxpBBQYJrQsVUEaigSbXx8jKfeqa5k9GKWezfmEkjUyUeGtAtfqutdF2UWicTUYNX",
  "key6": "2siuQJe7i3qycUB1u49y2FDgMNf612fqBoND8eCdHw2tXEpNqs9EQLSc4tk2YTnuy7bUHm6q8vFQgYJf7vzzEdCC",
  "key7": "4dkf8sgVhi5v7oB79nJu1cqfCJ1LJ9F4BkifRWe8KYRkuQdCfD2H6xnLsWqxgH8XZ3b4mmsdk8y6kSznmfcfvA7o",
  "key8": "3pHGyEduYAjPmxfKeEwgG5AJZeFbi3zkpmYBciUt5KyVhFJJE9uoexE3o73EkSx7PPXAxRyk4YkTTV9oFtnE1Tck",
  "key9": "2ZEXEiuy6rgrgXK5ekiS7Le9no4g1z2gDi5WuMDa1YjxYQJCq8iTEynMXyUsrQ4ZPEzbwZsNhhFEHyGsHQkedM82",
  "key10": "3AypnKFzCWhCE2TsAHNBKUiyW8Nt9PRVRBvaQSymZGaaCdq6kdnYRUjDR2f387wewQn4URyUQUtn7yw1EEHciiM6",
  "key11": "3Y872c6UYVuHAYTm8JPLex6HRfV6ETJcfagAkfEFqhBtQcZKRXiRR9EEuMfqArzu9pk2ZHyeExeYa7Y1pzndpkHu",
  "key12": "eEvxqgeQ7NuZDuVKfHT78N4eFaJkwZE5E3pdADT69HGftJvMhxBSveUHLF2avmscgVRBq31G4x3eUq1C6AmMcbV",
  "key13": "3skh5qgr1Wir5iBJSY1i1qTw4YCS9yB4suRhaA5c1JwycSSk297WgtVsrVb5zAcr3Nma7GB946YAr1yoCMqYMJ9J",
  "key14": "3F8HJJixwv7jauqfUHa8bnmsFdwU8CLGYpLXEiUc9KRn3Eakv78CdHkMs8WDn8eXWppnbsHMMg1sDVdB4fQFEXve",
  "key15": "42GJDzoxcXAMd728FeCUndxqqdEzA77eXDueyT5JkYZULwLou3gg4UrTspUcucS9FE493f7xe5Fij5hRx3aWuuHB",
  "key16": "MdKMVfjuaHLQuM4RAsURRiABhUDAutRk5eyG3GaTrwUR3M7TLo4QxGhisAGTcfzSejxiCFs59mVz7oB24Z2To7s",
  "key17": "3QPkB2owdUkP4csynKvtC98VB9DJGoLtmXxujeezyymMQv8F2ceFar6EhD6xqMjMpdjpad8fWjYtScA1zPzi3Xe8",
  "key18": "5QcPuudJpfTMwtKBdhYhHEE3HeKGXsgtjxq6aAwAAHvosQcdA7msBtPvFo3J1heK9imMz1qHTqzZAbShz85fNW2r",
  "key19": "NeUDJhPKKW6ZgmP6msHvMHmrcDVr3Uk1hPZghfqrR21eLsPwTEjYiMVsDKwN3pwggtwvMDKAEZETKjA8DDJHMPd",
  "key20": "2zixZWqiRnktdvbRnfGkcpkBwLQWtioc1Nm1dBTZMoNdAUZJvEESvNzfEE8zdW1s25X7kzBynNonjZecc5qji5Y9",
  "key21": "5rQKEM5hZAMaxsme8hMPa6RHHemUuomaiM3h56EjFAenDHRZKy2ahcv2M3j8FJfaUFjnV5zN2DwQFZnWoGeRYxrC",
  "key22": "6avNnykTzRs3AyFo5LQXJUniWzjbYygjshrb87bVotGL9qsqdRzs811ZefEGADYDmwX7w3wdnQN32V16PWYJhP1",
  "key23": "3ABo2UgXRTrRG6eq44GRZMYGrxPmFTkFtmEMdWp71akXcPVruhJuoK7RPQMEFkTboysLwtE8d5eoBGwkjc4o5C8c",
  "key24": "2qqbUzN7fZfpUkQebbudvjT5CQy7PXgL5wjafzbR3MqcqkPRJE41hVN2vagWYw8RaXtHvCMbnJz1m9GKBZjrqJhP",
  "key25": "5yFmcx2c758HKcJBe4HLznrvcVfKV8kpniPE6MKA8grrTYtnBupZBiTVhWhudkUDks2aBYbLvBeceyrA6NUsnhqy",
  "key26": "L4NQiYkNHqri582vouunLr5tPYyKemKmKdA3vgQNX8E9j8BpHRqD2BkaCvTyb5W8w7JbaMnQ97dhFioDXDbsLve",
  "key27": "4JyoZTP1NiU8e2YHDuFeQgkwd2ouKFZWbXRuUGaAVpfBwbkySyeZ4m6vgJxTn7zRc5M6vkF1JEx5tZgbtY8eBmpv",
  "key28": "5X9YmM1rSHBfd659rB5CL6DQdbBtnKnoBfePzxy7Rat3MNS6TCRysYTSccHFi2KWxDgMQiWJMSdEAUVV5W5U2Rob",
  "key29": "Ut6gpkzxpExGGVS96zQioYXFodBr63cGHQKBfSQXeieD1TPMDi76QTzXrrpZV58mCQeA5yWdi3tMVGRVuGR7Pmw",
  "key30": "5Tz9B5vqs96ynF5iPEtK3aKia9UgF3wFap7AGZn6WKfmUD1YiTGp9KGz8Du7cHdbNkefdwxSvweLQZ6tmwCzzYsS",
  "key31": "2dRMuuhh8ZXh8pvh5cLnPDMouzrhwvPwQiNyXgzYXQSTUb1j5uaWzq8aVQ5awLs5Nj3xsrUykeVjeZQwvMqdZAVN",
  "key32": "4ayU5kS4ve5kYZF3mugmE3cgoM3yaUcuKb7Wc9hha17L6kk9JzdHdkU5CJTH7YafabkkvzxXEfiWVs86Ff77vj7h",
  "key33": "3pgTx33BKFnUXLqvRxyUBzqnW3RBqcPH8HdH41AV1k8bQW5ZYhL4gsrWzvJNGK55J6HZCR8WjWJHvHV3sC84J1pD",
  "key34": "5WMtTEfmnCLFfqwHjbiXWptrgtqk1v9mBJYRpSF9kaJrtmQmUQuxhdcjKr5qJ8uEFud35uRWBkuJRvBGKk35dS3q",
  "key35": "5bgcax92HJULKXgDEth26qLJ9MHpQj23RuvEqXHMKHEbL2HdmAxxDvVzjJU6zgPKUKg2ovpxAqLdjoZR65mgWCJ6",
  "key36": "4NonaKKRB6EMgvAfDsi6nhvHAtf3hs3cPaqtJ4TLkAY4fW7QK3B1r7NUzKsXkuaTRimC9wPy4idBXL9Q2JgzyefD",
  "key37": "28J2K7SLwqhqoW61oCLLko8ZsfRMQbVCZVCn7XK9xmUqNCHarRoHDdLsP77b2pMq8HrQwLHpdsZcYXP74qmG1Jim",
  "key38": "4hNbE9oUtewoU4foL2E3P5YjizDMgdmosgPhSr9QhN5cAaHgZC8m5JR8Y8PiRrMEpeamVrcmqqmLcTnEcuQhEiM7",
  "key39": "2sBUghXaCBTuUK2HH7SoFJr1uya5SsdScYGwgqQgW1DU2yxa3PN7kfhoZ6dRXY7x5wJhrHuKBwxZDgM7Lv1eXtXh",
  "key40": "5TjWqFtgySqny7VSZii3tszLto9xR1XdUsLThPxuHoia456RLxGDGt21Ezjh75SDqp7JSEnAND2DiSmSzcMqxT2",
  "key41": "3AdNcxq9oKW6ksbSSQhxo9YxkPAd9VEdqvNfjunQ5iSC2vt5J57UjtMD8gFRyTxUGgPU4ZhZwZgsXZjUKfJxKWVa",
  "key42": "Zbj7mw54gpYnwiuUEHzcAwF2rby8k3GLDXW2kH3QWB59jePUtzYefiy9ESv2pxeiqfQXkEgCoPW1toGcNH31pCz",
  "key43": "48cUXPx6HGsruU7EZ3VLvPKZHzNPRvDADjBTNDyiaxUQGXhxXSwqzuHD3cJWErFnQYA7yUKHwwePqfncpGS7Xv1w",
  "key44": "2nUVKzdFK4yAm9sbnxPLSqqpa5NC7V46qJYrjxrXTFTQBBJF4BJ65eK8TnjFZB3iDfzZYSWtUdxrthZWX4HQE8b6",
  "key45": "5Lek5nA8uXcJfp5biuxWgXM4PgAC5ZpLZ4NzH5v4KZf91UdndMx5rWaMEKtiR9XFRsZGk5rfzcGVUJiEQhTbPAVC",
  "key46": "ama56xsKFKLUv99V3yNwQtvpH7Ta5P4aVF8gQSBeTkCnsSxnknuKaN1P4n9ZQqV4QEFv8K3ZnWAfX97hweMu3Kc",
  "key47": "2Fr6bX9VeF24KKrrWokkSsG3iKR4QfCunRVAQSUJxuUXTdfwaF95tBzxGo7kQJchSByWKzAYSBMKBQQroaoMpSHQ"
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
