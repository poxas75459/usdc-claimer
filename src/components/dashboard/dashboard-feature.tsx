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
    "ALFY1rwLUvpe7oQshUsTyErb4XrMuK3s88RARPx71JuZQf1SyfPwcbzDvkffxnAgK4j6kcBRJM1Kz3kmp4j8Ns2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jHUp6BRsn3EgT1sZPxi51C6SPy9bidVFpayCLcA3u4DTzXrEP8hqYLBggT2M3S9TMfUzJNPPpbBMhKdmZMKK9oK",
  "key1": "n9crM4XAMWJFeFwfVEEae3GZzDdpsRf6wLvwhK1wf9VUxbuFCWuL2zPd3i8i2QvLKTAwLQ8RRXzkPPSPN353a35",
  "key2": "5Lz4KpFU2fVZ6s9evM1328dJvoCkc5GQAgKK9A9Ncrv7Gw26MT9VmySERaTDCxFoyzGU4ZVBjiMsSq88cw1tthdP",
  "key3": "4DUFGq3xV7DDsEwt7Fo8kUYBRbrM7m72CCgZoaFVbXWVRRiMxdwkTaTNkgqfNE1U5rNUdkaJUn92VWZ1iYM9CHBJ",
  "key4": "65G1W6R6hQggCEP5xf43U4BoGFoQb3nH7K1bjSpbE8gAeeDECxqdczV1k3b594wYya5gVv4PTza6DB4q1LXzQU9G",
  "key5": "27idZ42fuBxaP8xhQrEorLywMi7xJY8osekGECujGekkh8AZy3gpEAjvGnDM2xwQw8DF5jPo5wh86r5RYW9uxnef",
  "key6": "ygKqvcHS5yJiEHg5hpaLqTXbZzeradhfwxWaUnff1g1WuVgFA3fEAjz4S6FJYSvzuHQBrxrfMJtghRDzG66wxpz",
  "key7": "3s94Nzrkf1Gj1ZiyPdLWY7QjSvxyU21WRDQGbXirVXgZPttpsZDLpgwpeqGjRE33GjqjmHuRMDohXwNLbDr9aZob",
  "key8": "3vhZ86LGK95H3n83ttPtAehCowWK3XWjVq7Z3xYj5K2SapbMdX9b6QHHxywFQQNM2srD6yjVRBXMe4pjZ7PpU6RD",
  "key9": "2YDA4KXbARVmbn15k6WVNGHZDzFjJoMHE4GwFsfx8XVdJfpY59Lups8Au4GFZAzgTxoxnHN1khXSXL6T5QXNe4rk",
  "key10": "58YhTRgYNMuiyNv374M1MxRqr7q62EgWBobUxAcA5XQ4ocn8uh8FwrvDFEnGsqCKP13A5EhCg9VdbPa5Dk8EMStX",
  "key11": "5wDRWzZPrVK3SqK9byuQ55VKoQLiu6EH3UZctJ9jT7AcPwA8F244oeQW1ReLswBgs47iAX5ZEg29fMmgt3iY6uUx",
  "key12": "3tm2e9SMo7JuK9cYWmCMRYvd8AvkvAfDB92UmJnisY8kenfMTqCwgtwcXfBMEVyLipWjyfeSfQwhad1aCuaU5P7K",
  "key13": "5j7TLmQD7UQszamXgN26No2S5wygyc2MiC5FmTz5KvnNrTWCgocHofNYiL8yEYDq1ZC3S32GoX3fkfbiNMLhv7Ss",
  "key14": "4Zjoau91PBQ8GEz3cV18W3K1muofmaj86aumNcATw45mXVSdv1pKtL67khC5cP9qoa8DhTdmTnacQGmYcinp97Gu",
  "key15": "2MaK3epFcrctHtAa78nKx7ntC9RGDMrCPnCRm7B2xgQboSukA7vNud3iCsk4Zz9ErHeFsLwjdJ8uTBiUmcanvpee",
  "key16": "3thteHZw4etb4ZDoF3g5RTZjE7E6Qy5XzZbMdisFxzsnxb1syLbzjjRhQZcxqrbCqewP8KvSVCJJiVUzTPPJSo9Y",
  "key17": "2nWTo9UadFaqDLnWyDSbSWs6SnxhTv3ktAkaQbiCDiwWYKXCqGTZadb8Btok7HvcBYr4RPtv3ZmUedSMyPcXLbbi",
  "key18": "5XyX23BnK87f4o1ULcApZ2SZrtZ8v3xTvUVVoC2QwDFHe6btwnaGR4BwFj3JgKF7NLKvhZ4jSmgY8p4VTuepkJnF",
  "key19": "3GaAgEEM573QjPoVKoDX8fupVd1GACFSkHyZDvASuhUT5dLTvpqcTyVvkkUKimpZmtdQcaHLV1XYsdR5WCzcRyKR",
  "key20": "4jjHRXQDEgpSzVz5uDJA4jbsX22SLhMrTqpi7tXTPdumwSWkmkxy1Tt3xETsU7jE42r7pa3PwFwP3WDiAJdP5m1n",
  "key21": "5TSCh8r82favki4znnmiGY8e4nJ6RJnp42j8aVoH6dmomK4ymifaFT1zoASEamtL3x2XEH8Q1PDoHf6VYdyYwPdK",
  "key22": "5WXbv1RCUNg3rDE9JKoKwWXoNwHUXpkP9BdJW1BstRAMTsKmNuuQ1Lawwhh6cVCicugoN9m2z3YoT4tdWkaM6MXu",
  "key23": "5T9qupzqWHShibRWpoDws1zfPUe43oMk9xHAuQWxhVWyNnRnrju8XukCszJzHTHVrPTnLBg7okNkMqD4vFmxudxi",
  "key24": "2LfNTfspz756EzwPB2tnqmCerhnFzeQRyQKgk1cGumxqyjFvmqjbdyMZMSKnWhrZFdXq7MTGhThR4ds6dBpKtF1h",
  "key25": "66Myc8PUQgKidwBHvGSHhr8tmHb2vBT6n6bYKHkWr4LadduiMW7G6Hi3eifJRSkELuZd3C8eZRQyVsPvRiukYTG1",
  "key26": "25YeNeir73H8BJ5CEBEkXbVwvXychiRqDbGuFHTDFcBTVNQ7HsrcZUfnv29Y9T5pwiR8iqCH2xDzLd8H3WtTcqpR",
  "key27": "5RoJWwB7mK4LXJv7TWJx8YUPkMrP6DxZAW2DKvCnJdbVpfssAmymJfVhZE6RG9ZDfbMEchwJUg3UNdUeWz77rzop",
  "key28": "3TzWwYuNyt36Ez4pfCTpM8i6eFdR6D4zWvWRHWifmBMpj5esjaJwThBiYc8qfASdeqqsusdDu53h6TJWYDEvwzfF",
  "key29": "5xCcbAkUaEtq2gcYNdoBe5QxZD2eY3TTgf8DoMBDkFBoiyjx3u7Qs5r4BjKvvrRz3CATmrYz54W4Gx8NGe7SfXxn",
  "key30": "tSwYhPVRLp8zDTVMdYNUbv628zUtcE1jXoYbjxwfd6s263QtL6s1evNqrHSKspRDx21eeEVRRo5qmHHXugyHKaP",
  "key31": "3PGqn119ES8nAuPNvqWJq2iuCqFpvktKxPrX5LwT3gkKg9WgwP5rfWczx2UK9WDoydPnRRoQe8mneLACg7zQWpXe",
  "key32": "4xk3f93rRdas4ZV4bTuwSmZqx8vmHMHsQGtM98E88p7hNo5iDfWS8WgxQf4Kq5AyZ5QPv463TnqR1hE4idAMamvH",
  "key33": "3K3qV5SetLG4sRz95wAH8DVYyvaAEmtbTgRWR5Gxv6F5pfaH7ZWmRWokhqY11e61nTy8HuiBX79vCvW6jTXVmyXu",
  "key34": "62FbmYYSVJ4QsMt5k2giQ4XNUMiL8mpwqqjnNXLWXP1bgRcjtZZNkG6WAc2RMpsBJLZUZGShNF8Ej1cYtyhJU5cy",
  "key35": "667PdeUFe4CmNL5LyZ6fj3sPNNytyGXsRvCL9TA7G2zBqCFTKhdrYpYP6NDy1Cof3JPcvCffHZze3SmXC2QdELJB",
  "key36": "2vGmbN2zcsxvwdFdSUdbCZ1zoYjkKGupRMTKLzXR9mtBRL7EvszJjdiSzCAJnW7roDMjo8AQVjoRVC3FSns5q14c",
  "key37": "5uSEH429EWzvjY1h1DxJ3Vocba78jvBmsNLAa9ZV84xo7VgWGUQmPaSG5PrxGxCE4ki5ms9FmL8KbSF3axGohMk9",
  "key38": "5F2amGoaT3PpCfsy6pHDw8z4GpMgUWVXejanvKkmpYJtJdDS1P2QSLeZeknNnaNVQSL9tWzEDkwYP6tCxz6pw9o",
  "key39": "5oVBunSpQfzu263J1iq8p5PbBQqnffbAbn8No88XCKdEruZpDN6FcmaajQMqWyFHFc76MGtr79Jebi3p2WmS1whL",
  "key40": "GKFM5BejvVwHWCeyvvFgQp3AVeMjbe4dRd6f39H2sH2WDva1MPRnVMGxckBJkVnPeTAxatY6PuMcQizqCGXgonU",
  "key41": "5pGVWcbK2YrorSGMCCkn417MdfHuzm76jWcraA6QjUjNFX8vLg9PSzUnFkFza3jyeauLwzdE4yNY1Tx2xpi8X8GB",
  "key42": "4Nk1VwfYzBYLcQsFSPKoc72EgnWqyvXPxQ3aVVEEUHxfNEQzi82v8uHcKbiFKXAP8LrSkZoeMSpFkLC9GsBRRPpZ",
  "key43": "5BYij1vtDLrS16BkzTYg4AxE8Hw3YaE8vb1LM1WL2oaznkQv6c47uaFnpypFEWQ4sRUHMnm7Q7fCWyFDFSB2kC3i",
  "key44": "UCUc2xyAXu9f8CEjfAw3N7veVmz3QHDAnwbSNNQ7tPWDiVAvzwqERdFUGe2u1mvrd9N1k1YxBn656gKJwtRaFQb",
  "key45": "MzqLgdLiaFZeaX3aFb97Tyer2PsSkZMrVLw2aMZwFVgJJTRvQZ7tvoSMyrPKpb9wFE4mnPQzqcckfMdnPW3nBkM",
  "key46": "5RhcTAtAc7qRzX93hnhCzphXjtZ2Sr1yeZFtRXUNtpjgws3m6hZJtRBTq2uiNFs7krgfcuvbMZLutxqH8GcsbW3S",
  "key47": "3iLy5iXPTdpg4YmgDYNiVGZBSkrZFEGHF2TCxg6EKHBGEiB4rbqrGqA5FBPgHQD2SmGaZ451swvqt3umn6grL1kT",
  "key48": "2w22SdJpogQ5Cn6HjtWWUdKkc2bqXwtr36W2r5ppEgDJugqAKKRCRWZxu7grfzFRzYVpkvZJDmMXX2tJH4L4T4z2"
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
