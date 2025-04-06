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
    "5k1D7zq19WWG9QjMn5HohdBd8hfY2hVJWNXSjpNz8D5NfGZUC8Nv3cs5LKJzDBy36icD8Cv9cjcgC9KX6uKT1wSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67g8hKSickkUCYYY6Td467neH15ttTVjUDVnR77FhKFrTm1WQzrGJaY583odMFinEFx4PaW5GJcfVoqz8neCQ8Fm",
  "key1": "Ly5tJ2Nm5iy4ywELSzgsRntWazahaKKtj3uyhHRvj7gGwn16ph4Y4siiNSWdP8jn3pt5j6wQACAFpXsjKWHChBd",
  "key2": "zDT6FXfCZnLNdvAYR6AfFrfTpVm9UbHdayMScRHovqgT35RbnEVDfiYo1YRS9LbaykNaxda75s2DvbJM75JB6vz",
  "key3": "2XRQos1vp2g3xm5NUGL3jKVjA1697tx4eVQenU6jLzHjM2UGCxY7DCyTcvHCsGotGCe78XjFKojWB52iyrijh3Cn",
  "key4": "4wfe7R3d9yjofcWMGctka42Y8nd4HE1Qn5XNQ15i3Q8smpeksSo6mgVaLQL1vCePEyBKSzTgdmFerV6UMYepKK2Z",
  "key5": "5yHKcRVEiFezCLQMwFtZpPxfPcpdnrbtbuMXohhm5bdjfr1USzyC5Tcy5qY4vUvyb24WmjEV3XSgQUvDtKUhfoxa",
  "key6": "3nzp7pWyYDJwniW4HX5KDd3ZRtmBr3C59K9AiqKyAABNtEHjKUFYSnvKRMjCZHLjzjWuWYXGbFfux5xgLJtnyJzP",
  "key7": "321ZmSMcRb5G9WFUUaiabddScPpmAQGsRgGe9fUSwRFTXHDC7v8uq2EMnDSfFw1EZbYmWTXjoqAPN37EqZjM6tsJ",
  "key8": "5e8BDmsJJhnoXv75EXxmhRf5B649v5SsvnJ9K7wq61xSnWMLwebTmHv5QzgAmmieqjTkEEnV3TwcHLf8kyKjBGie",
  "key9": "5vny4XDd3qF8UsAzV4XwfjFCtjQXDtWwB57UnP4UrTKTysVgNX61cyR8rEek4vEcoXDZqfrEYd9nSn8UG4x5THuZ",
  "key10": "4845pJqLEj1SrQRM3vUYJq41WJi9KrbNMnwT3EfMm9RSvnUBxUz3J2piwxGM9hFk9HAVi8iZXAp6DQEJJSkyDnBA",
  "key11": "61Fb78KedtK6VhwczDaLCB5iWbCCdKorU43ESG9HxEDw8FJHkzYdh8S99m69XKmiNiKNDugT3om5bge6zATyWCQ3",
  "key12": "43P1gFrUUZj4mXRtWrQTaEQHbYVDBPS32dujhWqi9nqCPRHUZJRL49UHUAN8cTm8yLTaeAcfsTvHGbGqh41NTdPm",
  "key13": "2wTtjL1Hvt6XH5YwJpNkqiMYHwQ43qr9SzDjRKQQRcVNBFKAoievuMCkSwc8zgD6C4daRkjxMxwTfzJ6t4MESXnK",
  "key14": "4b9wo1ihPa3wMTpVDsKghP6iQiM62rRrU7P6TVVLBgaEBQXvT9SxZyzJ7fkVrzpBd2xAgb2UhHo4iDXh2WEdYsHn",
  "key15": "5t84wB7rfVEML2fHiXQdhhjKqKHFUhVkhMzrmoqtMqiYqAMoY7c3jf9ZWRbd74SEVSuFX52ntFqUw2GF7U8SEfWj",
  "key16": "4Ftr1Cp9orwKzmKN9ngfi1CxrtQhGpTuGxaufWaTv1ykKdHdqGrsd3jcqtbWsG4DM2FKNbc6EqFGfsZbh2piCXnk",
  "key17": "58uLxG5JpPuYWvRUFhckFV1pWx9rUPZYYfXckpYhZBEvd4UGRBpjr9EJVCK6gY4s1DMfbuh8jpGsLJQqJ7qwuubt",
  "key18": "3XEEv3W62ekDqtw46SNHu6m9pawaFdktfeQ7aFs42DJceBoRH2ZMF9rMxqFESnyFBpkDef73uvL92tQLtFAUh5qw",
  "key19": "2FzD5PzzBNg7Lc5KwjM5sRpZ6pD1knkXFLPaSiUpfzuQx4L2yxUTgR4yuoY5yLSBHjz7cnPTrUSHqdB6iihLCH8g",
  "key20": "4GxNzDw1vv4eBHeFHnes9ZLskvXrSUDr5DBDCFVD3s2Zuk9Et6QyZNoUMhNYBHwSNxFRT8DCMQWTgmLeyVmCGkMD",
  "key21": "FtSd3vpKZTExgoAcbG1ZaxaMupzqMfJaHpQdK4AZ1zVX9mzmhyhDtzk9CJfZB69zZ9mqgNYPMXPSZhMXPLexnST",
  "key22": "2FCrwYenDmeLYzzXNkTErXX3ZMbkWoV462nii4woLqKpLv3ZVGqLvFDYV25kbJGjC8irYYBmDgUjAqP62dBxpJMw",
  "key23": "5A7bhaCtadvoBsQiSSpSi5rheSTsMcr6FshCs4dnvBQeY6PQ8etQU2t3rqKB4uBLdYZeqSp2RqrxJ2ZbwGTbMF7Z",
  "key24": "3pZLWHLejov1nHBd3AE8Fha2pDq8z8HN1oJvM6nJEJRaUMhdbT966iRk4UpmGyXDKFSrc1r2gqVGAdvdQ5sPnfUC",
  "key25": "4KXWMGq9ECD4EQEahQpfTYc34jd1Vqg3vZJbakGWhWgNpvQoNXhFohWidE4WDWz8WEkDay7YPS7B5jQJSQyUWSMg",
  "key26": "4M2KB1AMV9r8Nija92wW5cm1PLwrN9LtqH3TAkgNRehUx55czfH87Ny3TWtLYDTPKqgrH8LgJhQ5deTpFhBAUi2m",
  "key27": "2Vo34sbYFRBSy8Kn3eFTYb5oYChbSbbS91VpfYtcbTmwSJqfjNi4CDsQ4zexzToyhh3SLW7KpjewztSWbayfTdnE",
  "key28": "5x4JYjEoRJZZn4UfH2HogB194t7gBgWV5rpr6cTjC5TS8NeJ3kssHGqP78K6zCbs89GZP47edciPuZyH1juoji8z",
  "key29": "2zo3ftAzvXrascWAMHmcDphksRo3mDjzvMjYNq3RpHBJhpw8NdptKWTMdDGgMc6oefBHQtZSmSVKMt45sYYv9EKA",
  "key30": "5wirszPw2Pbzyv3eXLxuCpAD4H1F9Y6ZhdVDpFYJr2MgBy8xoRNjET9HwufRBgvEueSM4kwCHXvNSG3CZsAadq5X",
  "key31": "4LewnB481TeDVrEUTebAD3dE1FC5VVn4qEZKoBqsanUWZhNgTWkYSDpkwb7BR7L7h5XTrhztczkBuGfURdgNaYip",
  "key32": "2wACqEmTtwj93kA2MC1biMNDsvyyBmLDEjDxxpdLdWcAaDf2cJsC89aNGPv5fPmM3nbPzTCMAsGqzZJuJPtjVBSx",
  "key33": "38Uq5pBzCVWNZdAfUBVenmfG3a2C1UHEHzbVQEGMLu3E9fmCBNrn6b8qnZhwXGfinnBenqQvECzQJHggvphL2yWh",
  "key34": "2YfinYADSYuxwYc98v9JZJPRqV72rqRspGobStKhLTiQNBm228h1QX7hUDudusVmMLV6BKT7YfuakZ4oNV673oB4",
  "key35": "65XeUCau5AgP8YpM1GUDKvsApBUuA72iczcoH7cLKK5zu5Pk7ueyVqwnwHgFvV3nRNM9UAkEhMbhLHpbwAWg5CHf",
  "key36": "UibaAjbTrigBdmCoEyaaGzHaeRWhoJGvQPbKfP1gEQsHQEZ7mURRDUDXsYLrHdyJXnzf3eLMkbecG6bPPt2Nryb",
  "key37": "FkVWcaeWQhKuKPo8adyQCUqbMccYCGQesDV95RYjtbqewsozWnaExvkGykd3zsNss3tbHF7UqfYcV7ZXfoUqamW",
  "key38": "2dYcydLsZ6pSA3mXei8eaEs9Autmpmq69CKucpxKPuJyTYRpjb5hkypnp6DEmSg6AmwzZHCnJdiDMW2uAFnj3yH7",
  "key39": "3yfZy44gZGtsK1P9j5ieyJHfqzE2hh7SurkKFiLKvQUE64zv1GvcV2A8hdyz7v7jtFb6ujiZYx7PDEsycL6ykikP",
  "key40": "59TtdJ1WNpsMEnaRPrj8eRZ3diu3WWr2L5kvVszXTKXn5iEUC75Jqitp8AVy9eYhutyoAAmEMYoonz7eJT2QVewk",
  "key41": "3GLUEzS1sMss4cKxCwSVdzH2Gztrj3RPGvkN75zrSDcpuELr3JHkqpPazn7MLgxDw9mQxfcpqCViV34Lc9dczc9P",
  "key42": "5AjT7EUkQTEgLjxmQBSqQWCV3GrWgsA1R6CpsJanXuo5JQXLnHU9CYNBawVNksoQ3n5JxCSUuJxgUf1h4nzce8MW",
  "key43": "3TsSFrRrWNKsMx4HKxJCtcTrzC1pgVvPyNTRSCmvpQLBHL4ZfajULexXrQZeUBEu5NaaP4KGy8F1sHpyS5CR4eCg"
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
