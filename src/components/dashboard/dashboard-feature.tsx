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
    "3XA2ZaXct7HdFjE2sfQo7qBbuEybyGh5JhTNAMmtvoHunJienZwoZB9VExL5kUYb8C9PfmVVaDJzGm9gq7Tk7FuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p6Dy1zfyYhyY4X5HMqagmLPzUUJ4wawjr3jyoh4mEFbiXYKKM7vSrFgYqp5C8hzt4SRARdrY9Ex5BatmoE32qjr",
  "key1": "4Vbwd7p8NZPr6wEQ3fkbAMrD1K8ffLwQGRpeoT3j2aVpqTM1YMQSzjYw7Yd78KXo34rmjxFwMMLZqva5NhiUFniN",
  "key2": "1ab2aTZ1HULRdAjbNmG32fVDJxChLicge2B9EaptBrviD3mcYWMmgGm8hdhVuFccfgPpCuZC5fuG4yDVgBLRDsX",
  "key3": "xQE7CBW1RvWL1eFF93Pn6LH59bJ8aSqoHx3zSFnRfdBKYsVa6thf33fZ1MyR4LU1fsNYf5ULEVeVNr5kt1ERE98",
  "key4": "2StUYbTbFDGP4gb7XzjwSf2EcQRwVZtRcGY9446a9L8WPrLLUvUh9j6oi3xxwG96MZjwyDfedSTxKn3s4DVvEbyU",
  "key5": "2tdPMAwueZq2D7zHXDq6dC8LWwXJBAPYyf8KryehDbXu96pDRSHBp418UwqJt2s5ADzXYeDJx9FepPWGbVNmyfEK",
  "key6": "2gZX3dRTXJc6bTpv3HcFBwKRomDqGo8qA883Ef6NFXw4KzAzTFdVNMh98FeJcsMsMBGKXQQH9WTHCwzTv34cDj8a",
  "key7": "ZjKULqw6kBVtZ9MtFQ54ReJaTMNQTkTwVTUHfNz3pVnjHVWfgbx78bCQMAX6bsHNJXSGUwEscDrg1VG51bsoLD7",
  "key8": "4AkvEF556FGDbbG48V2JE7CCPpTKsnHxGZhEFM2xJSbpZrms34wDPaosCwRwsbQY5uCgWv6T97P9vZzA7fByXB9S",
  "key9": "4x61VpcyFCQ98iPB5nGYdhpkf9qSzviKSwFcnTrdED4zjB4nVYUVRRkP1NXSBB24qmhDP6GZbB8wXz8K8roKBLVK",
  "key10": "2pjRTnZcGEuuKN3mjMuobuRXTrFE2Q1on3rSvFNpmmL8eshgqNf7UGoFkJBeCXXtbErw8sVooBhC7nt65xGSyrMG",
  "key11": "vmtrmWVzYHpHWJivQD7zDCsUKpTxdvPaJ1W43EJeBqZU4jU3tsYd19twLGRj1zod68Qcf2gVS2g3h4NBHf8eX1T",
  "key12": "5ss5tw6MQj6gi5gPCbzj1LFXEhYVqLM3jQn2hxLYKVBTcDsrsb6hPa24K7ZqHjvB6L92hUApWSHsWbW5qtuopyNP",
  "key13": "5vDKXhUVL9tZyjoLYR2u3pj9eNdQUriecCsf5ZHKEEQC29dq1yDNw1JnUR8t3LPEMEYCnZmQpt9PSvuTyefpCjYS",
  "key14": "43bUDv9CTsuDYLsdR485ki3sF2r3smxLjxxwp8rtaMauVT4MJ1PzGB824FRkP2j8oFD297e5QsyQ6pe9azn98cDi",
  "key15": "qbw7NjUp9Beak8MG4fNVfzFXtn4nRgEevvFNRUJwA9thrmJQT1cGbUuUQaRYTnpw3vK4MH4eyeLm1cDg1yjU6TE",
  "key16": "3S9WhxbvtobtYbsxqukr7fBhTku77XLooXq1x8BFr2ykdxjSMATavqURxfGGyVJ4bs3iXdaoqoLpmbUvNeYbpaBf",
  "key17": "3GbQZ4QfMUaQpzmXVuGdJF3LYruYRkMPZQG9mimWmQ3fSkLHTd3rVxYMMYTxVRwcjCqVrpMFeULar2EwwDVee2g3",
  "key18": "bDg7ji1mFQNjDTnbGeu8Kc55HmHmcmmGVWxrwdAeLEpsU7t489mCzdyjnNXkeZMv5tquhNQpQbCGJuvTc9rdsjA",
  "key19": "Q5ys1YmmGC961An2J46BVhinb8GKYC97a9oTyLtW5UJkxT7eJKDcEUEdF7gNQM3m4AHdTSBktswSveSyTihYqZn",
  "key20": "52iSXxgECPcYzuTdQWds7xwgiVcTcNuYY9K8bTL31zEqTnZNmmULgot8i5euynwPVKHcgynGciRqdYXdZqn5tfKX",
  "key21": "QeXYU7RrswfztRDCHSjkJYS56HgrsiKtuwyTDuXqvHwo3hCQeQ2TwFpvHZqDZZsqELaqh9tCGHSVcrj4fDL7GHP",
  "key22": "2ydgLKTapMR3LWrPAg3aZAE2XXZcFp7uiNsZKXhs1cduE6K6vNzJd9Zaz73K7rpGtcsZjdWDFzG2JEQJuQzsBNiY",
  "key23": "3rfPnVAV6ctifpZkqSar4Yz5tsWcJCZnixjpqeWrEezwYua3D5q1WqXqg1FGr534Dxv3Yh1NNBGZq6sa27Dz6iCz",
  "key24": "4CNDzSZwp5f52Uds4ms185ToHhvJy8G5AYuJnH1y1DYCzAVjjKmJTddnk3i9VsYMM8wWr5Q13pfF6b6BAfeU69AX",
  "key25": "f5JZsdppUPkt2syhtqFH53oXzQviAS2jhmWg7htRxYQ2sGMgFZFLvvKC7Ygr2XM8LoEbBHrR1sLHkfHJo4No9rr",
  "key26": "2CePmc75mJuZXF2upqmgbRNTLyQZpgNYLZzyAPkZ75pDaTsX6Z9iVsDQVAUN8yg2qFP6Hj553rduuLXtBp86zs3x",
  "key27": "65QfwVjAytq1sFKjhzu84NrTJDAG8gELRqUXTWsKoDZLJ3BVPgwQMLJDasxWdC7Ry2eUuUKCCSFAieMNFk7DTyDi",
  "key28": "65dhgVjxwTXSmsHdCbJ3zKF3kuLcZH1qckktHd6zeRMG6sv5e891HbjQ8kEoGo7bFS5VWC5AkYeD6cy79gbGMLjW",
  "key29": "XpgV9ZinTf6Cr9Uesn8A4bBv39iLJF9HaHU2gEQ6sp3Jf6drN8YSb6Xja7zu6Zq8FzYCpEwcALAG8Jj1d8qXZ2B",
  "key30": "33yMBWGH6Qp6JzjKvy8MFzHQ2nuZTzc4DW2JVZrW6R2SjmL1A2oonckswXvtyEnzEDoaDeJqgPdaortJkxQPhstB",
  "key31": "3ZeTex44uoP3fhr8nLg67Mt2SypdrNDdnDR7M9W8CiULTLDwN7Brw1BQV5GBDBnrWQtDyVCSCYJu9Y8xQfUMFg7V",
  "key32": "5qggVczXRfwDnvuxWbVojrCR1ZwfyL7Bk3dhQQbyweyyxohMS1VuCf3iKPn48sAbh7prJ1FdEj9UG4fhAMXa9a8E",
  "key33": "oAs3kthLefkCQ1hGfy2p8EgEURtK381Hi1GjxeYwXYUoWFADfXofJgaDSYkNca7248NnasSugvXHkPZhjv9NCAJ",
  "key34": "5su5mNyX4LYYL2amp1VLaZ19FSDG7kxDYtVYrVn6VYUHawY9FA34FmRDTGNfqbNAVEfLvVsA3H19VmeQKCQFRciL",
  "key35": "3uPqbFtAKCdRkM16WpPZ1bFbUFjEwPngG956W2UzoJJ8BU4aFyeRZtxWK4yZxCaXvJfdwoh4DXxJHDWaEcMdYUP7",
  "key36": "sAKy3p9pNnGXc6ExhDp4qtjuyzpBVSEsQ4F8XA3pKKe595ryCxR4fu7wX1aKn7XKNG1UR4vCuV6HYZ5XNq26xfo",
  "key37": "48C7GtgEn2HD9797bqpeBxTK7h8zPH4uJuxKqpEW92BNvNdWeH6KdPNCvNwedUk3TypU9wQhPZdAB3xujouqLmQj",
  "key38": "34td87iNix7WUZMu9ccHSz78e4NogS5pysb3yQbPiHdzgCLFQXhhRVcoEsgxDEPAQwABRDmJAPdkfo9ZxuwoSFnr",
  "key39": "2psD1kvBSFUMsazceaNGYS7hz1AsQJmEeZg3iMHrLARG23DvAoPzjXhjiYLM8ZHtRGRN2RzdtrXS37EGnL8By8kz",
  "key40": "upxPjkDLmrFyNJLLwP9MeBws4H3QQRQLTVwYihd6tZaSWnQzVK9P1nF8QxhNfs1s7NcHcytsbP4Nh9C6kF1KjvB",
  "key41": "4qdYnV9uXcXiSrU9p2xMrSKEQRyoGyRA2GsavCpP9DeRiQVs5iQMUAgLCXwWtnsUfX37A54pEvAUNDCZBLRyhiut",
  "key42": "5hKW9m6FP1B7EonLMZfH2WXaRFYrsyMBh387epoE4ijWwUHQpqZptkAkf2fwvsRrmZ9hyfcweNZg9UNXn6L7tTMm",
  "key43": "Uv5CmyPv6m7WcDRgAjzr35nF6dhDyRzk3BgrBAxYfhxpFk886X4Yek1ReNVigzYqmThGy4Qck8UMHoceKRmwrSj",
  "key44": "5jP7WH9zk2nKWNCbdiEQPjYTapPBYMkTn6itMSKZ8upAtCzgo5i37K8nQAaLRQsZ1m9nSqLqMiQUqtYpjUNaSbMS",
  "key45": "4fhCEvF769Bf9GmEe7AXLYmgCokB9jFtbvf8haXxut2qS1AXYWG3GD3i1qww6TashBjK4nonX8KikYybLfAc61Pm",
  "key46": "4JLhoAgNBahXpgJXQwpriHW1RzpDxCeszyVjnLicEqKVA7LtDm4T6SykztWQHuXEW23Gs9G2DrZ9QHVxtpPCSZGP",
  "key47": "3CWjmYY9KTgjNvyebAMU4UaupmRRVnDPVX5YXUN1xhMzarZsHJgw5CqExxqErahb7LPvofp5Nty2u4WYDFNUTD2v",
  "key48": "4mqhft2ofAhPBmoMuWrrnzggaDBHnKRyZZLz3RL7ivQUuUWPX8BmGPKtBZnrYHiHau1L94xrCYomioMyhndDrE38"
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
