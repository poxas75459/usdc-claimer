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
    "m67USTSJEbB9Zh7LSbf5mHUXPYj1UQ5PzDeibBc9YR99BLjDJK2tq1Uaf37jFKNZ3xksWv31hDRHA7wRyBCTQ9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fCdQS4jcoLMZQ2uwZ4rWwpeGcmkPmD63EwdH8J1MEDxftWHeBiQbwa6PGHPDqan6doRRLGFHgPzYyWR441vVR1s",
  "key1": "2UR3ymYpySpRrhWew8aYNrYT242vXz3vswvcxa92dFJoiBMXmMYb1bj98YKAuRJiCrVwWuDVRAStDNcPUQLoF3xn",
  "key2": "24PvPUZEBkwYDiJVcrh2yFj7XugpdZtaHyK5uDPpvR4SNe7ShshXH4gm86oX8oanrhaMUD7MznirRAewrX5kq3Yg",
  "key3": "4uyJ5k3p4YZgWVgoUG73ytWzKxd56EBV54pMhTGexoEqRAvrCw8xBPvjY5AjJ5iL9pWUkSTqwYjJqrWnbpn7GdPc",
  "key4": "4sbsTcRKFgLnnWPnK2wVARAbFfqjrmfRXptH1s5ZaorcJMXr6dmqXtHBLhtpW3TM8nfVRPQ4HMuzgkFR8uoj7vEw",
  "key5": "59J2uLjDvYifEZURhHiLw9QZaaespSG4f11F6bzmqugh1Yd7Z2z5XH4PJ4jnZfbBavCc4RWcfZ7ms59VcEs1VtvR",
  "key6": "5aDZCyBXSYKqhrpaQZYyzPd4fY1ZqX6rF8WQ5CGMpY5wFfCv9djtXsVBaRdsh9XWaZ1MgAmS82iKxMFreUQ1G33u",
  "key7": "YEzTuN21fXYgs61Xh81CGjFAEA2SK8vTstv7YNwNy6jpmkk7Y1BJfctBCw5fHePBDM4KitMizoEjUqJEo1BwjKc",
  "key8": "33DQnMrDX96GhEuEoAq8cEhPRQHmCuHDzksQ3sRKxBuPyfFixHh3kr6sGwZLewPEQRwKqdEmYwuTdDjei5xWCgXN",
  "key9": "5t3to7JC9SyFwL2f1n76yrHYjY1Tde8nNN7AGLkriiWG9hLs7VGpT8jNqwCcMw99z3a7wRLeBRDVGMyi2Y9qPrBk",
  "key10": "2vQi5oXQAqtuKVYw6tZjuStXLZ6wtQc3CzJTH9VmqxmyLHmNSguf2nFT9iF2UYrtY8dWfZoDMFFWKvmG5DPSnniR",
  "key11": "49imyj1UPqRvV4fcykFY6AyJQadcwTNxFvBhu6iLygv5zZDzn8tzRPSK487bCgQA9JoRiPM64WVpAH4nA73CMrU4",
  "key12": "5RtnQiQyHBNhFoQiQjWiAuBfSzTm2M7ZrS1XvvNcHfyFyeqBc9HNzRtrDNr3V4s721XbT5gESHwT4WaQdXs5vqz2",
  "key13": "5Lf7ir5seebUzoTBo6hSf3WKwzwXTS4LeV2jkvVcRxDd4TvH6cnmDKaicqTXBiBoMY1GT84KqYY9nCZ6SDn3Xxc1",
  "key14": "KCjbAwkvWDnAnuNwAVuJbP8w7zJmizvXUh5eKZLCn2WCDNKZK14dznNVvDrrnC8tLgg262QV3s81qtfnvoLR6Wt",
  "key15": "2mdcQAzBSGtwBBuD8xw5qdEGQfnyePtpb5kCGzhK1tjxX4S2uBsLXpPukNSnCvAiAJXEvEHkANB3foxVKkb5QY86",
  "key16": "NeGNLTgdnFPiz9B131ETM5fsHo9tZuQUpZJ9aWR1xB2ppUTmT7NcZM2wQ9c95Tn2xaFMVKfBCZ524FHEczsZK8s",
  "key17": "5ajbXwjEAqapBx5J9qPkue1Vs3QGg15fFKrzd6aLsqME1Kv7FHvmntjFsT6S4MSRtQnqwLCUpQsJs5jMvXVz9U5v",
  "key18": "579mKMm5WuC6GnmXYkKfj4u7Jv2S1tqLZHRQLS53DFrSPXZSaLApGa5aJVVA54E2mNHuF7ELgJPSwqmqwq6v8GPH",
  "key19": "5hiMfFAYxUF7waVwheXgNCDijEmTeTAw3zUXxd3emKeEnJAZTEeaKJA2GQcaUout3X1dWHuxY2Q5FGiN4zwWndPd",
  "key20": "3dCsNAMJbfJcyv4kSUg1vJwUCJS1QUkmGCxPuNzZX4zPL7PbHvBVXkEr8MpyqQsbHgig1WKVFMmiTeZpr92fQPHT",
  "key21": "4ezdeSny5H4oosuh9pWsq3QtLmPibWhWhEs84VQSDiqteUF9esQPgrR7iLyGSEea2VjYuLdmRaTsAAeW2wjKSSAD",
  "key22": "57JGCYSafznQqUkdviYiuuMMnFjQRgTDJHfyKZwAoKArgF4i9AmVo9GzjfxFt4PYA13gSfm6zXiSMcvw4L2NGzrY",
  "key23": "2QSdwbDoEmXbBb4etB1tj6h2kgCFtrd4qhu3Fubkjpg9wSj4RqZAAAmd7gMHF9hrRh6GhbERUvpfiqdgxQVzFpGT",
  "key24": "2mF6LHYnsxb6euSZFGpcAnSP8kQuGiD6Unqn6XdmWVKbx3fsoSckdhaEHih3y7xnSkZSsUq553gsttcWJVxFPjac",
  "key25": "MYzzUutYJDTaWfkR4ACNFdPHQiMwwE7mgNetbNkvuxUqAYH4Kvxh452HYFGwYVmDLVsfUR6Tf33r1jZ3LLamJEx",
  "key26": "2e2Zo2jSEsiYpoNiEqSQkPAngLqrHQke44T4awjToGLtmed5pKQcMZDG4YDejHocFDREwuNYWu1TqREmY6Mq8vpJ",
  "key27": "3zhwC3B6KAjMTAMaYyhEw8moyF4uzZ95DTBnJiKY4uzgb4JphdEahBvehNTY4Y9m4SR7kFegPuXeJBctDrKgxjrS",
  "key28": "47NtYWEs2KL9VWAmEvjPaW7beXbG4kkHmyp91H2JEEFDi1aL9pDFC8gLzVir5KZXuWrUKUdKLSAsTksZZd8ajYiT",
  "key29": "WQr87AqFBCF8J3xMkBcHFYEMf4Zw7sVoeHFS5sTiV3V4PUmJZ6kBpnPWPhAPdTnK4iefSPk6bGCTy2cGvfNSYK3",
  "key30": "2ooEWJWVtw8aU8GaxembtRWfyrHxpWJj7eQ24dwpCEEhHsaohvaX3YDLyxZcbB9KosQ2fC5UtAxEET6MHixVVBaQ",
  "key31": "3hGyvDDdjyosvgJf4VVf47Vbv7Wwc8dCdC4CH4orBRw5PvhwKbNtU3ER5geGzVSZrGrzPYVfYeysp9srr4LH3Qam",
  "key32": "5UeFhf8w269VUki3uCKsyKmpxLTmYLFy8VgEpWZdkNLHDNiKxzWZtuiVicmCgiMto279QXFu2YRkAZ1G1iYH2Nqc",
  "key33": "4YDDvAWChzTCy2HND39dX9tHEhaNyUZqSWHshU8g4QNq2S8xTDjp12G1obJ2Dq64Xa8vEhBWujCehujM5NpoDwPj",
  "key34": "55pDnSQ8UWZDm9bMf47dLhqRG9NLhoXj8GhFvQjuscQjbvV9po7UoofTx263AzTHR1yz7rSUWwt1jzHV3sRkW9Ut",
  "key35": "4PgjyXUejpYw4U5H5SDehiiHWKjd52QqhcGtACgiwykXhftHenq1PM1Cr1GNRdmktGseDDdbYNcggS5Mw1o2vkYB",
  "key36": "3LcHhwjhraks5Z4cWUcKVr4DGHtdUs41CZGsf58Uv4qZ7LjWR6tNbhWWTrHCdaQr5PAY2H72Dm3YoSKMeusdgMT7",
  "key37": "3NzYUTFJGi6CqAbgCwFGiHBxfxhU32Zzrjq76M5RWTumzmRjk7jzTnPWek3nbxZCGuHFb333ra2s575i95zNhXgX",
  "key38": "4EVpuvWHRdGYATegz8uHXPQdUBVBLWecVk7SrD27VDztY7eMJ4pL7ndJEKrc4d3eskAGmgPvR6nazgidVS873Ab9",
  "key39": "5C4ZiNZbPX5eSMAps9ETNQXRFGgTYuLg17otQCdNXNeXdDgjXoSpwWmZoeH2QwuyteS2nktqUYhCiaYdqp13XBr1",
  "key40": "5D4AnStit8vPST7ynnd44yy9Tq2Rfp2iyar2nEKXx2bjiJ3efJdvAGvCs5WEofPazxuYe7nuYkk2ySbY7o2WtngM",
  "key41": "WHro8XgBbHQdmoBcGg7mvTsuRsjXzva5dCydstFZ7TmB25ZACAxq7DHWhGoHxSpUGMzegenRHRGJvLUGhd4XSQ9",
  "key42": "28FaQmmfqXoCyUNcsBWJVkBCCNUPtUsTvqhx7nvDMWVY6meAaQKBJ61sb58vUcuwqr7vWJSPh773BuVFx4qsk4Gw",
  "key43": "5LHz7fkAzCsB7QfjayXsh6MbGHxhexztMBqRLHni2zy5uz264xa8YwE8gfZaDXJvN2h2yQsb4hqm8wcxMLBYeXfy"
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
