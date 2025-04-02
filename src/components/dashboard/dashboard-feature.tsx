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
    "61UY2jg3TtmiLZjZT7tuhoov5FjcTMjcGRjizK9WA9mLPBWngN5RbTzftRUByEwNPgZssBGh7RJM4jsnNTtqUUPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ohfArTVtqQd6BXAUJCRdsaimGBLRPt4Af8VGnR2gyiwdLjKpAoHxsFKstFLGj3K4KgBzWuHtv8ok4nxkqAP8L7T",
  "key1": "2jBJhqK3u8i8icuTy2QNXZzEzFUXM2q3zJT1rKtqh2kNpwXZcuvcnzFpA35DYqfW73PRytGNyNXrn4B7FzA5YZWD",
  "key2": "5VidfaLUpnfZRmALdQAjrd1LwvQmKjKZBrywwzdLgfgug1YduAxQAadZ36oQq5Xxv4NMRRENw4TDSskcbHR8tFGK",
  "key3": "3XjmvM4Z8vLMV8ma9ZtEoEtNMvHv81u66vHXjz1gvrtPHVe28rrMHKJ8jCsbWq8WkH7W2ifXEehPAjgqrY7kDtcp",
  "key4": "5j6CnmDLdrL9RtDSmH1qQe2kaSpAg7tDBKpumC8Fg4eDYoap8qhbNEHL2zZ6q9BJmCzPU9yqjyBq4KB8buSjaAhx",
  "key5": "5nBF5P193CYWpexspgtLbZAoPA4KBkiW9JGByGLRnnRrpkg57Bh1ax66Y9WcFEZMv8G7M3S4mGknjoVaGhM11K5Y",
  "key6": "4Nibr33TQGwQY5mJaA2jiKHyyuDV5dWeo5oGuo6vnXPmQm7DVrzYEUmZ2cTwXnHDuRPE3J5oZEDaLqs5NuipLR92",
  "key7": "2C2z84mvAGDzDt9gqc8jp4Z3FtcX5D7dm4iYSVoUoe1DzTM8TsiUWVxh6XnH8LXuG2ZcnnxUGyPYeU3aEgcxQeBg",
  "key8": "3P829aCYcwJtiktxz5gNgmndjmhXXcSyKqDU8dFXbr9YvARGXX1yrTv2K9nAT92CSxAjRErcaobXhBWaboF3izKA",
  "key9": "4VFE43QuM6TsxKRBwzYi5F3EnMzC332XwUAbupCTX7xwAewqmWHWc5qTT4ZmqaTaT5wP1w2g6jEBvWMLngtEjrVg",
  "key10": "5T2TbrTLTyvUtmtn8GSpzfT1XnnWQn23VycN93UpAfXoZur2Yjnn7nQhUr32o8QjTpBr59EzYECJbDnfP8wMZt87",
  "key11": "4PgNJEsQFzjZBNmpx1gsvGp8LUAuKr4L7u3UJwM2UuXhqiEVEyW7ZwJawvHNBxS1pHaqjREdy2itYQovMTYLsj5s",
  "key12": "2WYZCzNZKpCLjQyDHtZCymJmBBSwRN8MDCXPaDci8WXKwBZG5LAiULij8nzhkng9uupq2YVg9RvcBNsfTUh2mDg6",
  "key13": "573AEXBP2WaEWE15kNEVRpkvgQBS2NU4Y6YBbH5GFheeaVkNSfJyohEZYeGvcxU7MBhG4k9cM3aB95XqRgX3fSSy",
  "key14": "2b7FoXJJVyYEKSPzyRf669Rx6hSXEkge72KV5m6axcqLeezFgFdYixbywgmjb7BPo3APKXtLa9dNzG2ewqrzGnXC",
  "key15": "SVrxqYv1Zzf4s5wJVu6BC8oV9YjKrZa5swcsdLiVDH6RnLod12kFCvbir1HGsBom3PaZvNXYykweirvaWaR9Do4",
  "key16": "2bbp2hxudemgpvgVQRXAyh63ZytVCw493e1YgFTZAsZiWxWimtZSUpUwmNm5xm7KqhGcVvzLSgDJyy7LarX6b4Ce",
  "key17": "5fuhtXofcY1ZaPqiKoBQ8kRHUHd2c2zd4Y2nmEyhGt7E1w5aWB3TQmwBX3HeXesEScnM2MoC1raKv74JxKTw2xEq",
  "key18": "5EuNp6Tt4CgJpqqW7g3XcuoFMJL9P3iZJZzya8D6BCkCY6VRXMCJphJDGwRu8w91EM6QMNMNTgCWqM4DRasJPAK6",
  "key19": "5GEDw1jhkEoYRx4oHjpRJdc3isergnYq9T3oisDecUz2i42V6eqqCDXpJydvKp9VgjRxJA1EGKgHYjTCoEKnSosU",
  "key20": "2eWyMCbkmsNvs5KEMp4EfrHHL4sBZ5DKkTdCv1HC2BVBBch14NcukeCLAVVhcVvyp35tZACAMSb7XpwM92sRqLn2",
  "key21": "3YnMwHLjsjRAcNRLdNdezE8yFnujmuJbgsHusV5jpP8PBVkKkrKwVpc4mV4WUWzbGx9FnnGLuU1pP9F7kUQpzQD7",
  "key22": "Ei4iLf5qvnCeiHrLq4s9j17V8wJijiQKBh6wVRzwHq6SqryP1z1LbcMnypmTjJVNVRXCGJWU3iNxtpLiV7vP4Ld",
  "key23": "54z2oHq4EjCJE8X9jYRVdCLtuVVk7f7SQY7CKBtUy73wtwywnpdLqVozby2tP3iY5qRYGeHZWDvjBUgyMk5efJC",
  "key24": "2Z7W83tgk43b3rnE7GoU1Yz72wY9cKrFgiFmyW3c81S2szvfqSityWqCx4Bjdedtop1j8tjR8S63XmSAMEYqXkjh",
  "key25": "3piXouMv7UKiShkHkwQf788a2LnSyd5UMKAm5J5P7ECe6wfbGbDpM6WwJGSRNRczd8dAWHU3oCTPtfts9ArKszC8",
  "key26": "Myqv4FM5JUr3YGKhardmnfwq7evADuMSsYNd5AhmVUXtWJ1qDHxgEozDouJCRX7FNN13M5sCDVX4Ec7PRve92F7",
  "key27": "3SY7oTBjWApbeyA9P1Au4AJQkY1tEYpJcaA4st7yayyoNGEjFhCgVHESTSiT66YaTgQ9NGuPSSMeyYQ8e6bgYGM1",
  "key28": "Q7agnnKnq2PTjpCvELSaQfe5xHcqP7LUAzEfaGcyKCtXGbXbG2vTgCp7tvJ8wAk4DVgc2eg5CZsBx8J5wMrquck",
  "key29": "3goCTQjnYU6T83JMqRxmG1jupAm5YjzBNjACbKogiQkyb2g7BwAy95yi4yHm4knQJqC1uJtSHgYjRgKmbbFrPU9Z",
  "key30": "2Uzg4S9Zx3dNHYmmbXgzgfvQXzedpWbVMPmVFZHZ8gY3y55qvgUkBpAXmS7JAZod1RGM8Ueoms3j6MTQ4VhhmACc",
  "key31": "39K7fwpNbzdq8dUKmFyNCQzh2MEoFpXgoyQ9xTpeWBV9Zs3oqXLE1SE5MAZQftsttP7eTjtCHPukxTUsfn57xhci",
  "key32": "ij42LB9ZM35cSFEKHBtJe88begec7pY23ws8WiM3Aw4DwqZ4r7meDsnm3owRHRJ6nPmwYtuvK7NuSdk7WxfXvJp",
  "key33": "5y4imXsAyD59KpbEri2RF5ba76TwG37kS9L3X5cphbDtUZUnP9DvwD32pmckzNesQBDF64jcuUrekauEbFUjpYUC",
  "key34": "azaEim1XkHbPSijbYMCSYWk1tAaFgn2Nx1S5hsubJ7pT812ssHPLLfxdH7TCt4BZ72ZfRv6URdWRrSxwAPKgJi9",
  "key35": "BVNbNqfP9SaDEJpbAzz3tZVF4GwpzMw56Wan4CA1hFjGhCWJvuYYx5NYq9VwYPBQie5Z9aBjxjsmcGHmq78rsYY",
  "key36": "3o1gjNepVo2i1W3Xa3ABeMCrgbWSckhhV4zz2jAxKAcE6vxC9UMUj2yTyrYQqnzBfrhAuvQBbmepee89vhyBpbng",
  "key37": "pkWNcQHBp7FkVtFn6Br5wy9a6wwCnJAGxd4cyQ8JSuyiZYkFymoKRn5v1fkdmvEd9uQzHMATgpGypxustW59SLw",
  "key38": "2jCgAyt9sWjVWrimpTBnDQrKEQdovZ4KTFNQW8u6ji19QBGdrdjWYdJh71TsX2vynHoJuhciFFP3X3EX9bNizNpt",
  "key39": "4dNXTQaKWvmg4GViRmWZ9mC5yvzSHNyfvHgiSnnMUAKmNkWG4Py5qxdaARemBP88yVE3Z9VT3rHejxViFK2R7Rfm",
  "key40": "rP1fpKKHGB6gEEHuRZnWFQ6CD7k2jYTGnYeehkJSsV4Mh29AnCESEUPkSAiRwkR1y2DNpAJRai81Gu65NqEt6Bu",
  "key41": "2FQvX3wFs4EXJsFo9uVv1Aq7Bv4XAZa3EQEekhY4KV3nQKatdtKhF6ARaaLBvEfZZ2qazAqdRRUK9S4DH2xcj8zU",
  "key42": "39caVDf9DRhQWBvU6kH6DxVXGrZvJh2DVkTjv1bgxjsUA91MXjXh1J4TYso7tTaovM3y6QXWKRUauoVeA6bSoMxr",
  "key43": "AJ8FSPWqYyARMVZmrNgkXJ8bp9Ukt6vuB785S2EZPp9CEvwQpz7Eqt2ZHgYgovw7hSvAYGBeNk6xKRvXMoBZ2sR",
  "key44": "5ABXtf8XEwaEXuhgBySvDgAdsaJdiJb3N7QNbMUHvQBxzZmMbaFJ7XzBuDiz9SeWn3TgooLEUQ6vTR64mgEoiAjW",
  "key45": "4tBtiWBy43x9VRF47FbsHnsDh5RFKNeyoduatzBGcUjixfztTUcZyjnWv2iNABckRdvWrTni1fE1Y8GnNTFMpSYx",
  "key46": "4ExL5bZbCvsWFYRrx34JKwsfQ9mPwQm8tuQ5uPLv6oHZC88x7NBnSjRv9ZNYAiKFUA9HaFgahRA5XcTTRU6X9QvV",
  "key47": "3ahtJjBUACnFecvkW3of1PjaRiGtKfGNB971fjak9843K6MJsajd1SGrbLkiyheW4uxBDNgTibjMqPKERScMjogA",
  "key48": "66ND5qqWRSJccEdoqpQNMQEzg69YgLD2o1eDii47TvCF1Wm2hNyzAbrBuckRgDNEW4zFajXhCLr1zey1nBBzNry2",
  "key49": "4RccxNcYBQRFFcmHVARoNdfJb7j2zCGVzatXgf3X2NH2S9cxxPuYrGzHk1CB4zGNnjuKpCqSWvNTQkLkRL1XZwmv"
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
