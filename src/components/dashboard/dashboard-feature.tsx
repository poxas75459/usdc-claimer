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
    "4sgvLyurBpnsLWUnfgbtzRrNtaRjYae5GaBxUkcrLoTyXtR9Uxv6rfmDx2Q3SomHNtAkLiEcp7Uz4k32dzTKb5wA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TA5nSQqDuXNjSHD8E3cHK8NQntf4ktkAeNMmDA2TLB1DXNxTHsSJSigwMFfTf98GoBMr4mPUmVfhxGV1TzMEdW5",
  "key1": "3V6RnPxHGv7bty8BKGevaFLaUAYuS4aKNya7npRKC3HEZrQkQPupwgz5uZJd9HcwiY3G7DvYHJ5dFD3i3MByfPix",
  "key2": "eSr5bdmBDwPDnaXYtrVZBXtmXy5DV5HULQ3TEgpC1rNAe8YasqnyJrYvkQiHU3BKGKzWmu9BoTrVcxUiWXeYbxG",
  "key3": "669J9bAL8LXBGEnWujcXYucNeAzmacULeMAbjq6UPbf3HpAVQywdEoEfPZuY3MKpMnhPbZNy3MrKChdfXGUvWaKq",
  "key4": "32SjDUJWNbGPukAmj7jhXfF3hFCsCspgFvmuykX1gVFvextcivk9dyoQ8LvJRpMrXimT7xFt17RGT1WnrMUEoNg3",
  "key5": "5bvTM4pTYJmoWuVfeRr3rnU2haCq5L9Zbh6RVNqsxpwf5W4L42cotGxfERtXLZVq14CKNUNQd6yLhzvdbnQA1Jtq",
  "key6": "3WoPX1HuDA1tGEWpZAdBXyRksY6Auj6ZkWcPeJxz49dYRn2HRDEq3EtXheL1MMkmfCDDAUfPpnr2MWacYx6FgGMK",
  "key7": "7eJniBm8GEsiNPrJExo9xxhzwE1tyLMw7wbKbzofVdGTps3sANhj7PpdZcV9AtZxrqmPzG1pb9QB9q8xwfvnYYJ",
  "key8": "43hsHR6mdrTtoenmjEmRp7PSG41A5Ga8E6JNfq8MqviQJyJ5rDVRS8mS121ZGtuLrffV3gQNudkWzP8zSaxMfQFU",
  "key9": "sDXepfYH1D2gf9Wq23rpWf5dBdDyEztMDd2DKjUv7ugYJJFaHjSFxJBUQVB9RUHjpVMw9DW5NghW9dvrVJjm1UG",
  "key10": "bHLkR4A9fwch2hFRJ54uo5cqe9avwnp2Skq6fhiZ743zcT3MsMCi8W6WH3aLwEMUFqSDCvXSssCkmWqUJPUKG5f",
  "key11": "3BwNMTQfeATC6qiA7ZoncaLk71HMbdXzP5Y8QJiLvy2U9uSi9SdNfygN2gxGaSW465QVVKC9q1wyJdkSFdFhqrU4",
  "key12": "5M6Hd9zwmiJmKFUwVP2crdkkEy1nwgBQpEeSu7QECoaUU1mi81qGu3CFgbnMQWYX3DYC4qLgkozpGivx6zc8z9Bi",
  "key13": "2XmMay1GFAf9i4oQHvVvoRvQntQN5JhByDw77c1WQshnCtcwuYga3VgDFk8p7Y3MhCFACrMNnRnszibKv9669oQx",
  "key14": "5MeN7xTnnxtKVKyrFYNZNwaHP7AsKUeCSVrwhFZVtreCzeU5iSChr52R4YMX3bqvgJ9eET9XCSbjz861Wsc1zX7C",
  "key15": "5ckhuoduzx8baXVTaZT7ouJtqkLCpY1WYgovRLrXyDXujbhaKwA1FPTkK2XfRkVRDtAoxYRzd3B77WwDA96zEEE4",
  "key16": "2NSkeqbGHFRvfTLDwqKZipYau4esdJG2inTxUrWahnxyyYfXhYenpoC32nYA7KKtYaiCLfUFhu1cQHe6eWLU1qHQ",
  "key17": "3T4VQuGs9CxjsmBmK9LUzAnWdbqu3scB43cDSs6BDDTUmxrTUPwhpGfwAPv1hWiUZ7yBd8mSNunYU66qsDzrkcC6",
  "key18": "5JeuN596kdDsQLyn32nniVLC3Rpw2HACRR6VDsabYfTUu9TprF2MEtAfnXda6g1LKwj8Zq42bhe462UkY32GjqSE",
  "key19": "2zqM8rarJpEhHKsa9EsCmNS8FJkRjSJY7EFYtJFEQ5pSm9XBeWVg6Yp3TUyqM7WJ2SW5n75HUSy2EcRFWh6ythoy",
  "key20": "E1KB92b8GtPcZLYiUKKznVxfQfhbY6FPZoSAHWhVWbi6Zu8iW2AajxCFQeCYxPt92JAYDj5CFD5YKkXsotNgWeo",
  "key21": "5izoSeWqoMq8ZCjpqPHD1cUwUHqV9FgAnCaCDowNTFJ8C3rUqMLHkJixWCbv4Zp9hyDEpJksBVXYRbY9SLUAKTuS",
  "key22": "aMpF8zgowB5vjLfPzzaNqTWtoZxwGkMXP1TstjygihKRkHcCCU6BJkNDsBotrwDGZLPZDuajqktSh7mwdKqC2S5",
  "key23": "BhEAKyVSWiddrcUob57Nyt9VJ5QfYsCzXzrgqtgPhNgdsg52cMjkzzu4ZaM5BzshAgQ8Qjpp4tyMYqPJnz1129t",
  "key24": "AZdyHWKwk8thTRGHrQKNF3ws1iNVuG4c9a1To7qXQiQVhx22F2FW68uSqt3L4ap3vH2zXqKiN6NyTBgUy9p6wQD",
  "key25": "3c5nAYWomata9cdQN5q8Ge9wFGnkHavQt8gPTMYF6o7oZ8h8CGiSLoC6UaHPBKy4hRDxkjSqdwepZ7q4N3VHfwzz",
  "key26": "2NbQNoXUr648N77keHXoezyqpeaTQT1sujf5gzYNb6YbpPLphUiXuk4YAemSBifiLbu19fkCkyi6vJd84FW7nZTg",
  "key27": "2WcbMNzDC8PYg8pserCBDdXjRghisn3yUnUo2X16GNYXYnsEidzkbzdo7tiqFNy2Mvk9aWcWHBVHzUjTmMbWrgh9",
  "key28": "2Qt5Sg1TjffSAKYrDCgL8YpvJSPM9Aoma7JJUw5yGgNRAY47M4mWYDVH8MhGkLq3jVSZEpqEedq4yGdmb1Rz6ExR",
  "key29": "4bmhi9KXD2JifpxQYguKWLuWjR8wfCCJ8Hx4KiChXAFgbMzyiG29k1MU4kBNUTBnJHBgvFu7Ey3iBhkPnc38zGtw",
  "key30": "i1vCf4hxJK7zBYucZzHNTvwSJwoEtX3s5H7xaiv5KaDGSbEiGsNQd3Qh4dGz6uC9jN4ZDfRiVaw8sGF3wjUJxAk",
  "key31": "4QuTMSGM6PAc47FZ8wGKZPb7GzKvd9qrdERRmUACErvSKaBjTDVwcqDZUE1djxsXfLuZ6GkbGbNDco6yCpwqMXm4",
  "key32": "6QtZNNcwAdoNVrdvpCGmjKLhgMSWC6gReZJnL4sFiACJf4UD95dBQCsiGV1eq4tWuTZ15gaC2pkyf1aqyeXZNnt",
  "key33": "65bmbHnW4TtyEmxJWF4nx6qrsk4FxAYDq2yhxRpFuydcobUxaUVDkos3zDNBKYrYikWxbLNtUFfWSayeYCPJ9uZ5",
  "key34": "TV9mDGa2Do44ZH61g1Gp5KgeoayZHAyFyg2s8hBK2UsrkrUMGXDDoKrzEq351sRpSFWfU3ma3Z2i2w9ExA2TY2V",
  "key35": "5LJF9p8ugSEzfG2DMNpkUK9wikNWwFkDBjLvdpiPvSSGR1kmyaXSoieHtssAB99HECtysriCdHC3CpzqwDxodLRD",
  "key36": "2Uf4BmB3LyMg3dnrC7zjQPC582EDASwcxhWQMLSn2FZeADA9q3ySsM6KcEafguBXDDkS5U6UTXdSdm5fQnoFGgzc",
  "key37": "5n2e8iFqBMw753j3SnwLWSpvTaTXsmJNWLseJhxqXFCVYxtRccZ2MK77qKNgZQaiZeDGz7PKnU2se6sMRviWnhWY",
  "key38": "JQZDbmoQDSbGtb5bprvzua9aXayBvz68tH42Bk99uCjmJawJo35v3Q6Bo8zP1f5ki9DwxzZp5BZ2JqAfJi7Bf3q",
  "key39": "2LpJYwfxPhyx4sYhzyXizZgUKmUC6rjEnWKPxyYDLhfAJYpzxP1EfZJnTTCnqbLvQRkfHKkLP6APPs6QsUz1jAAV",
  "key40": "5WpYB6Bc1X2Vwaf96W5mLpUACg3qokkkTo6yZ6wArgMiZLSBGUvKn96uojK8JwZZHxFHvdeAviRh8ph81vDD4MCg",
  "key41": "2qWphwCKbpeYJqLGo7wZooSeKixsBXGaZWcqBFDGTipdBp6w3YALDy6BETwhXMmLJ7dc7bJJCHDi5RMBMuCQU2jr",
  "key42": "4jhztQzvUfGJawuJbnyLsyJ2QfEgWFx4NWNyVdDK8BJ77V4QjKQqUBGpLRTKeU5aSZtSyUMiwqrZbffW22qzqQt6",
  "key43": "5yjNVqJaiJBuJcXHakHCZ9wwPmSVA6TDwLxSYHdipNq5APH9xiNFYninVQsrN8uLx1ary3Py9RZgmUGFuP6dEtwr",
  "key44": "yRDr3zH7JhFzQzAeVf2QJ1mzgmMa214goVAnAqmmNTKCbEMxEAJLakUXPgA2qSJkYzfbP3czwhyQDia6Bt3rHKJ",
  "key45": "rTqqDPQyVduSVCtBZY87XdYuURFkmo6tCxhHy8vdE2Vg8gp3z4DXVZVW5zJsES6bSrrRszMoTPtcKXC855F7iuE",
  "key46": "2qWnFyVnk5iGsHhqRcyddDCRzVk3aDJevTcD6ZxoMzyGXQdx2QVvY2UQdSeziwkYn4WnAHpsTKARC4r7CDgju77S",
  "key47": "aAHt8oi5nWsSYHr6xgGr3NV9FZ13Pk1iy1d8fwqZMZPLJvpLUC52HVC1UtLBgUA9wL4qDWrniQu5PN2UaybLiyw",
  "key48": "2ZoKvY5SCNdJ7qCYWzovHPWLmZZVyt4G61DeAeSon8EqK2jkvMczKx4h8fmECRJjLDaoqdCt1jaLWVMdvUPHCKoc"
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
