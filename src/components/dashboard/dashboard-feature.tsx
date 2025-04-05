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
    "3EHuDQM4UCmui6DPbvEaCwB1JLP43uijRcQT9tP1A97oX7J88eyzLnH25UsgVUv5U5gCE9r9tkMXyoiRzMgLXvUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hZoTNi1YDNsuPG1CGTNKcfioU9ex7CMh6Bhk1x7bGUFZoSL6xN1H4jS2BdJhZprkbwUrjCjzFif8FZThY7ktx8e",
  "key1": "2EG9cVCHguFSDshANEFGMNbGjtrqDSj2Jm2KfbXLkhEX2ikiYhdbGaYtR72hA6dwhNsHKV9CTeCDVDoUre1EZYx8",
  "key2": "2YtHUuiCx4tJGkdq5KvnZWoM7MaR4FeDYfsr6tDrnDFxYkN2bkbSeQZxNAfqfH8zJmQcE19KqYjDdpnijDUSbMbS",
  "key3": "5rkbMSKYprWJgLiNUsFVJPVsfrq7SgSyYEcSA1KTxCSYnnU8xBTK3XSsdMHUFPA5VET6N732xcv3s5dYoBbUSP6N",
  "key4": "u8U2RnKZkJNEDxEVGBiv8PwsJJeX59ZufaE8h3hXP4wnr2sTLq68PJ1wzSdycPMupgLK2fVwTj1HBZCaEd4Aosj",
  "key5": "5TZtc4tX3zRffRUMUPzVi7n7Dcdu5HVWiNiDdyhc9j6fhytxyAjrdwE1WKHf2yC5y7wGQ5jrumhfjCBe1R7qAgWS",
  "key6": "5H8HTAmF6REeSLrw2MoursPD6uEv2UDGnqngSLYH9nGr2CLjHkfvWGSvmTNfHXFJrkc2xMGUCPFuQ45wmzXT74B3",
  "key7": "3RK71Nebx9xzqMeoKntbbLp1ZcitEuGJTNDhwr9h4bqjr45EymLiycKT5CwtBxeCh6j8CdYcESnVamupLhkVmbe1",
  "key8": "59XDZxUK5vGckfDvZRewfZ86AEdcwF4pY6Tupzym84CZhmSbZzCdnwEPfbZfzzexuHB62NoXopjeQcj2iPgo8GSg",
  "key9": "3TsLVfG3ufNghcHgSDACdhm2sb1hKSYo5c4YP5bUHb1cQWSNirxQyCZ2d9MCDmGCLDBSsXJb6LBQ33vGpM7G2w5y",
  "key10": "PHGCgjRh7gKUz1cmABayfFxBHaE9fPLWq5RaQi16JM952czy1Jh51aPABg46phtaY6bod6v8iu17nUm8sG7aqJJ",
  "key11": "4uwXVAkEjEmxfXzTLZZpQwHwbSZBWhxK5pqARgMY58MCBBafBLqAicDA2uKG35XhoMBQF3dJgaVjKfay8wEMaJSS",
  "key12": "5z1diVQxod8RRwfMzVZ8hzKHiidvKnoENX7U7bamgJX3Wzwmj8Keb9Jyb8oeexAq1yvE3ehgaghXKiLFDFX77Axq",
  "key13": "5yzoJ1cutSfA1nLsm6FqJYjNwz9ndtuywmgFFnHCMEovrCR36H4XBzjamNMHT4PrY7zTcvYeTiJ6nbcjCz9TyYAJ",
  "key14": "5fZt2XW2KTXEQ2pxmNTF6FbupCzhZWV8URbmsJPe6JG2RkyJZkMrpqmhSzSYrsPf3P9eZtF1XGxYhbghtefSmbVq",
  "key15": "3KTtZRiCESr8vUqaTUpWW2M4oehHKFqYh97PYPXmkZsgL3CjnK88LggrL3EoZ9vSKAwUXxGn3AxMEJxPypBGD6x7",
  "key16": "4LSEJMQaW39s8W1o6F6DeNXHbn3nULepHzvddPtrRPZGLrogQKA4n8ZPVpnU8muJLUk1NwAeFrrH7SFtgpvf4fgg",
  "key17": "1C6DR9TjGMkbpvb9X6agPCVFcqLccrY9vmSTNwaia882nAnthHz1PYmNiA35YiURgcjJYieKwE9sBz8MuQH4cwb",
  "key18": "4qPwojQKBnvsZ3DFrvv8Zfk3WC2xzXWpPTcX51NkirdjCNvEtYL8KNazehkQB57Psqz9vyqrF9trkUZqJpWCf5Ng",
  "key19": "2WZoDfnXai9uRdyeoYY1zs38UnpzkLnJGniMDBuCPkiR1x9EUzVk2ojPh15gdpjdvVb5GxguXnEyrfk4y9Z28E94",
  "key20": "2wHgDVnwtY4KJ9U1M4467EkcCBJ5j2EbojmMSSBi8bD6ZMoqgXduCH9xdKFm2A62DpoUPeLFDNCiZxBMzDcwUouj",
  "key21": "3fQgbksAn9qVcq5m4YbcRUGYfBbG9VdKPsMPcaMSk5X9cSJqX6tiiayx582cLoJYFJTmuzdtSDAoQf9T2bv69vht",
  "key22": "5YwNpXUJN1zEsSm9fw6mopbLLx3tsx3ekhoBtpEDxYXEsSLdUCA9trFfqw4CghxSk4zEDavVaijFSUzYLEaoG2N9",
  "key23": "31hHppZYp5MZjg7V553ezEhQv4aFySV8VzshHSyibjJmdpQWkbUoiH8ZPmw67S9TZTHabJLCWUSm9AxzC6xiqidJ",
  "key24": "4B9ewxp92Kx6KN18qbccWL7Z37htBLvRNSyQ4wqFsCeg7X2RY6SGLYt5MEvGMEa94pf4jVSz7dx6L4TsYNb1KPeY",
  "key25": "67MyUmEXYqhRgSyeArc7hRzSYnApzafKtuNHeCZD1F2KRQ3yQ5uYbMdJ3AvWfZPvvDumwCq7qCGnwcJipbsCemGk",
  "key26": "4dLcbApBWwwqGtGstYLCPsu5j24HYDKtJXyeysgU3A8HDH5q5nUDWtctMKy8H5nwBm73kgERSscqC4Zhb2R7TsN6",
  "key27": "4SyuVpGSvUHgQ5vywznyxUQ29zjcP5MU4BXJD2PhNvV6KHTEjyTTqvG3veGksbjPJgGbt779Rh9qzD9KeNnV3wX4",
  "key28": "4SEhkq1Cah5dNhJMozQopVZQ2LB6UpQHegbtu62JsU81Yob7qTrKRfdyEtohCfnpZn58rYK15tdCEKdHMpNF9Ygb",
  "key29": "3kwRQkTm86sFbcEeDVy2CXdZzfhDxJbgc13KbhVPdfdwEc53vYb9cRfsHMXapUK44vbRRtgPAxfjKRRQQrKGJrWh",
  "key30": "26YXTzBfsreqwE1fPpD3TuFFGTtsKoWxW9nkuh8ZExRXzmC8oXv8AuTwGf5GZ5uF6t6a65DxLqFrfesCHJBMmkwa",
  "key31": "46Z5yMUkFTRwsbCyEiuVVfD4X6MfCspkYFCtQDrPz86JVRGaNWm3MKk3uNxhf83g17ADmjsVoNGtBfLZGzA4M5bL",
  "key32": "2zcbw1K9kWv2rcVwG1n42B912wAZ7WKBhmYpUzaZVoH2UuCPoANDLbW9NhCEdMjcEKkVQwoqy6mNWMxwKvQejpSm",
  "key33": "2UvQQDLK63nPa2vkBmhzigR8WfHhCf3okuGVZ73vBnutattdiFxxP3e887ScRFEH3ghRgo5AYtdsbqgv2J2hYvZw",
  "key34": "3WiNXg1bKe99Bu4M2pUQDCFpPdjt4FyxoynUXc58qgEScmZZgJ3rRQTjzpUEHKuFcPy5qNRSSanKsxFBYgHPziKT",
  "key35": "2BRzmtiBXp1XxRJhAt5ve9M4ksLHAhDvrK3EP4vvd4UB3aW2zC3yax3i3Sn1XadqDSJ7LdFuvtpv5LUC1eBu452p",
  "key36": "4P3ma5bzEjEsZywt2qtSWNgaBEamsmN8hAz3mEotXxKt7STpkQRCQSDmj999oaxooFNN41boxo4h97rmx8gxkhsk",
  "key37": "2LwYmEhVbWoQ7jDGWrKA4w14E72ie5VMCiambM5XSkGxtJnqmcc3MGqJ8iX4GP4XzDm8f4vanDk2NXdF1d6DdvPt",
  "key38": "2T61ocEMHB2FCmBNCkgTYPRPLybDUXw8PokEqVVpfe7wPURcwPF4AoBjGkAHrwNajbTy3eaUyxm3nRayLn44YWZp",
  "key39": "4xU7Zii9bWHCZWJYNeUyqZ2b8qHrQKpoyn8gPQkYjgvSXUYXXJA1rCHvo2FZDiftFuyz41zzL2bnEry3KJZcYPw2",
  "key40": "47u6SFFjfLqp9DaMk4Vp6MUbdrPFqr8wpiRLmufH8FqxeGQGpQPg2eEZhBNLAQBCn12QfVwFQRxZBsgqyeV5jrYr",
  "key41": "3pZs4fMF5YzoRZ5wbbdQvbiMz5FWLSNHTAU2iN911HmEPyqt7v4bdhKtWVwaYaqwxXdJSYEK1ETrAuDA2RZn6GNX",
  "key42": "5i3s18JHyc9Bmy6knbYtZyPoFcyUREuwV9KGxUQiTF21rQpLVNyMvdLPhHXQQjhWJYAmekqx4ePghFnu9t4ZdYW8",
  "key43": "4WERGDJf4QA92Bk4RNCrQ5fudqvg5sS8C79UR3vQCMHQ2sBVbQGAh3GsWvSFdAYCpisPVj8oRiCMmVx3gf3fkHqK",
  "key44": "Fjv8ZqKFat29aUR1wqHgBWwKLww5vvBxvaa2QaSB7z9MndLcG2W4N8xDtMfwoYqy1tuhpguMQWURskjnpF6GkMf",
  "key45": "4y6uGSKPk1qaxFMXhb3tSJrw4GfeBppRLsHHb49Fa38AAP7nNqxHAWsMukTmyDACuzrXCvc78px72RdqTwdmG1Jm",
  "key46": "2ejnMwpTUaePYHBe8KHP1LoabaUfvL68no6FvC5CDb7Gp6Gd5acbRa3q3RqhnEwtqfmDEuRacZK2vpjWL2Vy7jPt",
  "key47": "3qC9CGSn1DvLfHev3Ks9rhjERQoGEvvQjX1MUx8LVdFLmVwxpXqPJDitqxBFHjhGQB6umuCzsQNLYb8eHaA837K1",
  "key48": "5m3AgW2SECHshU4mB9kgGm67uSbm7RiEtNCWNJwoNMjm2tRAWMntt98PwkWGg733aTVfU2bTj7MNC23iYjVa4Yx7",
  "key49": "4k72EEeAq4aKoK9TxTu66nE9Sm95Yb5G8WoM6jRuVr1TqFEkgb3bWtSX9ERFbSP8kw32GuBemWZS1kbVS38CcXwD"
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
