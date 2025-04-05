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
    "2HmZPVWnyvMWZmHzNk6wtEasJPc6NUsCXpAPte9uGML1QLyG9cHCPCWhm7xDLM9i3tGybDNUATH2jfHWmCKRqFce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lq6LA5i5ZjTjxBZHcTaJxE76YWTqsh2YmYEyhrGVs8LSk6kXM5fZVX5sTJWij2KsegFrNpjmzQLDqCqVLeZ1U6U",
  "key1": "3FyMj8BeJTuUEcRh618TUKRy1Xf3PQgHbu7VWAzJzGsNH4Ma1wMRD8ZTfMZJPdjhmoAUyoveGrH62TYAt3424cfJ",
  "key2": "5oU8KWZ1E4PkbcVuhFmgQuyc84iW21jiga5CHX5U6zBDeJziXyTUKVEF9Bfk82JTLRLo5PafWHF9JcVYG65VA6DW",
  "key3": "3cmEWMXbJHokfe8jiqvv9QJqN9ZK1vRVZScfVHtXe3X2eEXutefvtqRVAknidaSgFmEfWqNeeGFnbT8qb4tgUiXa",
  "key4": "4tbwRdstxtR4qF8FF3BEQf9Zr19wFwcsnfwdozE9cuUwGQY4hJYyBdUB6abMp7xrJMtpFHBV2RrrMZCRRRLLtYcQ",
  "key5": "4pSxPgYdX3TZVxzXaUVUrjh6hrQc3nzvYpb1cQ8uTwMQqMYyctN1fgLfLo63Tzx6SsjXzL4cwq6PT8rmRFEJ9aae",
  "key6": "YAKqEvCXomxsxNCMwQa6FgnU8D4Va591Maf81HqpuCxCSCHJFBTxu9TLJPVWsSqncip5zgsZFtQoP8agHbQur3c",
  "key7": "3gsx1wMMT4ui1uncwUaCwPDXrFPgnXijZNXfuoBavc23wANzMUV6kzC264pfBVkBng1LtTQcXMCT1j7h2jCssdGG",
  "key8": "3FRsAMe5ATHGYeCb9bqtG7GZ2CP45pYUD5mSpscL2NV5ph6wZYxce1g1wax3EmxRsk2yAjevp1kdawowS5bxugrF",
  "key9": "37pAbSPfikUWHKWwcLG3LmXwAfyGsULTFiQms2A1Q1uaTi6ntFSQ21Dydt4XfE74SW8G9dB3N7f3UEbt8aWeBwaG",
  "key10": "451C1RdoCGUBxm7bU6tXup6TyFHxQSw4wthNqEmrAGy4nmbS8vb76XGnD5XTDqBWKzQzoacqycQP299M6NgTk246",
  "key11": "nWvDDkGnQUukfqgqYMu6nusr8UA2z6d4D13pDjPFrJ5FSVmDE1LiSv4D8vD78BhfJ7GErXDByZJifJXqNRV1Tym",
  "key12": "4Cp6YB6QJ61ZP9LuVVbMRgdqdPxm9RmyDafzGDon1SXSrYRuhetZ9JpJGwSwCaTTBWzcdAPw7oqFaBQvDSh1thE3",
  "key13": "sJrmHFWr95KsTicd3NP2BLwKstpMqFA1fWXHa19szMBAwCPKu2kDNxLK8snwjAy6y4D8DhudQtmEns7ZiT3HDA8",
  "key14": "4skaQbr5VsE9tjsuPCVyJ4PGkYeo7Go6QicyZnRzaWjrHUEeBX8mZJH3wr6xU72M5ssC2kMR2ZYuKwhBP5TmFW6i",
  "key15": "647Tvg3W7gv4Kvk9QtSEpwx8ure6sjkm9hUNR3fqR5zJHZr1g4FNeRosn7zT9taL1X9jtLygPggCNsHEc4wvLFGB",
  "key16": "5vjr5gM8U8LyiHUBChzWXmUGV17GzaHskDoA5LiqxhPposCFwmN8cHmPRzjXctYk1rhN5mBHSuHzbfcoWR98XPYu",
  "key17": "5bVYGj9D7NiEE4LFUg1J3KqUXPzGN2qC6mhHYb3DazUMSUKX5QaFqsRhRbY9V4sHwEAWT6cxN3Bpa8cP5hztvo7L",
  "key18": "3Mm8HWQ41D5HJ4svyKot9NabVChv5hVhroDwFJxvxRVVcMS71GMTCXew9RHsWLWMC8n6DQwsb1ZDd4XpLhboqtQf",
  "key19": "2x4QDKRFk4nJab6NEXLpHoSQT1uVKZVRcKDhGk176uMjYGN78yp9jwc53jhDMJzzcXPiRzndZzUKyS8mPhNr3BFg",
  "key20": "2hkVt7jsyRVWwyAf5wc6F4SWhXjciyeqCEyr2vcFEMBTZomsLgDLYR4sYXY5hoWSkv46SV3CXM7Be47gxpXLRbNC",
  "key21": "2DPMZ1w6sxx5cQQfvDW9XUCVh794Wgqf2453mrhLDr8jKYk7RdNkCoKpVLNBbaVajPA42PdDNckjhhZtdwHV4nbv",
  "key22": "2usPuy5ekMcbGjryX3JSRt3HGGFBWYS1aLwzZ46EUW4ysEYNXtkrLGNG2GxMhMD3NeGFgUWPoa6QKWVyy5gXb5CB",
  "key23": "4M1AxLje2KRSrvSPfxFbCXa2oCGHZPYk1GhZt9SrwaXmX3yVLnEdE4JXzPH3A5wePEVrsHwzhUVLrQu1tL333jzP",
  "key24": "2oVzsSvZZSzVGUmeGk3MHFVYZiSFBJauJMNcS6uT5tCePxxfVciDKi3RRWQTCuEhctxPzumNsCBins5TQBnJ7uVn",
  "key25": "59pAyA7fSDtdr9kvnMVSfmqCWZJd65gxgRfUNFgGHJ6F4NNwiJWtytnmojLL3PUgDzaPiztAeJgkDoBrBjAJY6n7",
  "key26": "4fkUmC2FJ12Qx6e2yDNtwJibMF4cryuz7TEhY9SEYRwUB6nHy8bCaWgF25BuLLMLCYkJFztq1iaMevaE9itx421a",
  "key27": "2oNq8TpANRz5xAUsJJCVdWEvyDquuGtTWo13gyVHi2pVTzcwDDVLmW7Nb7q7f5ZzWXu1TP8uXThnwd9nbacCK9HL",
  "key28": "5FMGHXaUSPmCwGENC21xaGpjykw6k9EoTm76d2s9o8GPiK3LMgQxzZPW5A2Ek3snPVcPciAsuaPoGnod3zKd66hJ",
  "key29": "3YQ78v6CSVVfw4eJR12JxThkYtPZVPcdnExkWxVKMW92yh7cucg5t8i7n1SjEvistPW9TqZ4kkZmSYxqqkRGBVad",
  "key30": "4bWzeB8U49WacxsmhWLbmbN8ECvvoffroVfpyRurYmU98KCH46oSWZ832bp5G2Y8u8mYByJJ394e9ozVPgaZtUz6",
  "key31": "5YUVbit4ALVgjHE144HKdSV7WDT5hbMqhJkg7rRNxgW6EJryfSnKke5uuLJpRH2N9xUGHzZtvzP5M2U6tTnAdx4d",
  "key32": "2CCZqZb3dnnYKJjKx3nH4KEDxwQVAFadbNSF3J7rW7sS67bZU2ruGSazwzMwaCFK5SbUJiG31ASWSP9VwjJTwGrN",
  "key33": "4NDWQLLYtVAYwNeebsCJSSXWx78uHBLGrKnNuxjRpAs1TdiKdxAraqwgx3Qa2FZb2h5TCsHhfFwZ8CmGfUfk9sVq",
  "key34": "96nrujXGvW29K83brSTUyt3iVQBAEf6XQkSQseJeA5CA73ZTGewKHD5kZQSzdDZ97qLv1gNioqvMifzS29jn6FK",
  "key35": "3GoxuawxWWJmkZ8rZ22Ldipb5DMTzRFtjepkqaf95JKFzYWTzhtiQA4AtkwbuTyFw7KTwDmmTBX9dxP4nEMtbesi",
  "key36": "4pw1Y89ZNo6jMgZgZ6s7mJmgvS5Lpi2bSQmLpeGguQyxjvcdEt9WVbCAk73i45wSTXpYwZ92wFUgQjzecm3zSjD3",
  "key37": "3ffsfiypaVLYhH7TkxQmN2sFUC3T8y2DtcHrW7G2HudDB9nKLiBaMKZu3A8PMZ5Rhp5Mtss4f6LQnuVnfD3Q9FCN",
  "key38": "25wk9NS6tHt3nZ41BWCR37ut5B83NoNz1iMemGu39sq2seWp8YHajwKuZ5Dhif89vYJ38F2vuWEmg2CMHXSjAELq",
  "key39": "51jpnsnYnFqcixwiqTDTXR5ce8BGiysxdYSMzemft1yj28WiTRa7DGrr662VPwpVtRTYBdknmZgRfacckHpFfp2y",
  "key40": "65VAL8wTqCaYZi9dj8uPwHmFgycPQGLuf1JGgptRQcZTLBQWVNrhd9pHJMYbUn4CccU7HzztECmcDPqSXTfWi9M4",
  "key41": "29MA55EtGsaTcoZNpK14MSYrn2zcxc8951P2266HodgCKXEBLKVJk1UouNRoneWjNzBceUjKzATkiiswg2FvwcN4",
  "key42": "4PYv41xoXWGYjxuj5cbpCCSHHqSzM1AufC6jfzxH6tvE6gkmBWQwjNs2WEwF3s73mGZKHZPFTZvUtSabbzsXsi7c",
  "key43": "4oJfQcoWgBkthgBHukR7CTSPYAheG9jXaLFnHiVBDPPj2w931Un5JKZHTj9gDM1Jmc7ChjTGibMQYjiQKVonHQY4",
  "key44": "5gAANikgQa6hMR5cU4hhJHspmSrKo6Knpo1nJKRXedyQVeMBnqo37atAReW7umGZUnBZp9w4qpFmdNzfVs5WJhc9",
  "key45": "2BQeeyUZLoKRw2jHXsRQ2QsgZHN88PUwuDS4BD4cDcNdP3ucJes4DBYynktzcoMbTa9vhwy4GRf72xmnMgQ3Bs4y",
  "key46": "3nNMVgfvC6aE1ZhQsLbGD7dt8kYg1dPSauQU6CqCfcMi8JpL86piHpreF5iP5ULd2KF8mZvZzm7vQ5QBh37VrZZT",
  "key47": "47TpihRgyzkaBU1yGALXuGukM2G1KqHEv4SQfjWKdpPkTFtD2xwHHaMLeD1gcsJA3X74Mpv6Ni1sfB7ChqNtWYkY"
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
