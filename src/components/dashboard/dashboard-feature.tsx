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
    "2RPsrwGQfucUj2tFhzCEPUqa53tSXrvuXMGMm3dkVovABNbsrjA3pBsyoMo1jnaMNHV81yqFWhfTeEtbebwwXwAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bAEz9ZwC7WDDz5TP8EexkAmuMcAXdCbGvH1h47NhCpV2GWZxvxfzXXCcSuxXzsAyNGqmeDBF4dcGWVrpEDZijDr",
  "key1": "5JqcQTgqsXSG3SmWVTC8VWXX1KfbismYYKtEWgjsAsunPi7nDvRq1t6K7oeX5uo1HwvvANscRA3VWesSc74tgNpW",
  "key2": "3xqpDnkKQUQnfYUgqeEJviGaSsn53y7Ynhqwk23SWdiq8h6ZFDjqbkQ98d5HMUMXArhxABDYt8cqr6b4GTrT6PFJ",
  "key3": "5HMZBecJFjmUbFnpiaRTKDqegqaSGNM7gjauSg2uLgsjSwyt3UTuhNRh7MymUaLTmkWYfdAnzuvcsrANvw3uu6sP",
  "key4": "3kGJWKuq7snbbBKuWfJeBdmNJnsrMai4nQHtBHXhJKiwHy7MENbXTJ5FtPwsQte32TwsYFpPBofwAg8WTwzvqVSC",
  "key5": "2NzcYgvox2NbdiYJREXr5Ro1vhA7gmfc9PVrx3g7A36uEhbcXZurVW6oCdCWiiFWsCxNjiDvQqSKVFssKsT3WWrd",
  "key6": "2S3Zk3oy3pkX5yU3hrhT55StEsY1uurRwptoGYKLpC1tkdEkd4BoJm46b9L9XPuD8UkTxZcQTQPo7fKLrZVbYyzF",
  "key7": "V8oxRxryjSuFcRVpEMVo5YRcZNQGWuvJYt3Fz995TETNuATv4ccLdgTq7Q7jtXc3gfWpzR9EAv5eZRJwUNHXzZQ",
  "key8": "3ZZKuBsxpJ7BNKpNQcR2cvcTkZzmpRfriRiSB5R5PnqcTKqg9RxJfA8co3XEMGMiFGKkVyq2x329DFWfUoEGG3od",
  "key9": "4KJaq6X25Fuwq6oJcPNpg8zhnymWC91i9JiFfq6UyBxfcutkZHpCmTb2K2kQ5TQcD4y4hgpRBiL97TqzeiDSynsM",
  "key10": "2idmcpnTxDbMWwD5C11oG7FABmgLZCn8e96GGgb1hrj8bAxHGF6ULqpNDMjke9aLmNgkdXSh3gzbH3VA1BCdanm",
  "key11": "RJEoRcszsPnASFxTDxAH8WYQ3XBcj4XU87E1sXWdc9Gje57vcr6YRV7RE2DNgdypAtsLiwEGaCS67NqNYUR2YCr",
  "key12": "2z31inGFSDUPtLaExwu46mBevSb3NQ2j6fJZxf13CnppPe2oE8quJ4XqR8hYj2zZzEvGXXUbaY8HjvfaBBaY4oYT",
  "key13": "4i2wLNpWyCaExNFhGkxqVMtNcxjiWVGJDosBzbqKrbbH2Uy7gcb4d1wtYJSEiDZU2Au9jbrhoTaHWKr8ojKnsGxw",
  "key14": "4sxejX93hDeyDjUNjhdPUBTfUHRfiFNBnps7axvjpegeCivuswiU15D5qQtwCoEwa5Qst7p9LtGRfeUkhYvJT5ff",
  "key15": "oxAyou9m3ELpApSUJkpoc2A3j9ryJg4yQozRXjAD15ddAiRrDrsw9Ei7KCTJLZZuxjaHjjWh8FzDgTr7YP3YcE4",
  "key16": "2fCwiYtBEDTSpoF7KmmFVVSpz5kCMW8NwYHnmK9bwQrYq32cS8ETBB5RPwKYQwRWfpLYX4JJq9iSatztYr8VJPkB",
  "key17": "H6qSp67uc4ZoWJpZwZJKGR8c5EUKTXn2jMA4RDi1oTCW7RTh1vqJrFeonKen8cCUY1rNGD3aPdYRjfNdAw2E7Mf",
  "key18": "2ENaydTW4vyHummFkc1TjkNjrxpTSzSpyvhh4wCPQJtx8to6UNPBWoByBcRMYy4ZH6TMZhNP18sFzHw6nXdn2ewf",
  "key19": "3C5QAXQGgGp2wqY7edSWwRa6JAv1ZPsHQJqoKPiAAFSxnUJeHYiFDm5c2LUc3qPNwibdy7yxJCoLcaM7nDJXm4c4",
  "key20": "e6XwjFvFyyJVuMPKk6yEkjV2iPnvUQjXGik8NfgvEaqudh5YNo9iV2MnncZeDotr75oqKvh6i59zWz7Vn3bou2o",
  "key21": "3YmM6A1CsBSEdZDJdXidfxafAy6v8VkvKCMmyTAUBKS9CQMJCjMmJPaKfiKaUdWKgUmFGa4cvzcxg7GQyeUmiQwm",
  "key22": "5uXZUhpYUanws8WfoTpHtTaZj2cPofSFQLVDyzDisAvfKhNsJCgcJN3NpTnGhYhXtHpzk1DmBd3E1rcYXbVBcJPz",
  "key23": "krVBYae5cMNfBQwTt6n63fMaDsHMgLLjD57tu6oPQjNYdyRh5ooicJKNRMbUsH34sHYHw54qyNss696jFvKtqQk",
  "key24": "4MEgt2uKKqcKVR7vip8XJJ4zRnhnigJfQvr57TQfsim7973oqcSjM4b3pqo2ttV6oNmn8P9ABoWqjjXGEYXyiE3L",
  "key25": "2hsWb7j7bFkCwwDqq1r8nVzmRBFuYijNvaymCQNzHKrwbKqZoRFNi4Z5y1YKF6HG2V93dyAYQ4JGzHx39xSed3EJ",
  "key26": "23hC3XnD7CMFa12LrojEei91ZGkftnfyLX6Hs77d3EnbqqjKT5hHBSFEb2s6Xc2qJQKWf9Q3uvAeGgcKb8n87JvM",
  "key27": "2ErGHeGg6Q2qVopbA3Yvgxpja253osDUSZwzDPFRtmFPT17Ay2N6QepKuKcajDqfn82yzxhpV87BMUULEdbKgRjr",
  "key28": "2MoXrQzRMmLy3Yhb28LFmzuP39ZVtazLxfgeByzTwxNpRm2NKjGKJpMiozEjgHhqD9SrVk4AQsokxGfVeBBxnuVU",
  "key29": "2Mc54gy3sBWFKVzvCC7NURRweKYNubaE4SKyvknsBWLMfqFxAD4iYLV6LZ1Z6PrNre5jH3mzXvkRT9CZNodZodS7",
  "key30": "21dgfL5eUsnH7bZuL3oBwNpaD2gCeEb36DzqsYKEZWR6Bo568VPJyeozAVCQ63xU6fi7snq8hzyyL7p1XXovQ3o8",
  "key31": "3rbrq9BdP2o4v1axZStP3SJpvNY8cGAxwt5gUe598x68oXACaPtzDs9Hyq1KuYWJgncUkskbLzG1MBZAd2etr6xY",
  "key32": "2pG1Nw2q7FWA2fCLiNaYWxsAs8vnyagJL6vhYpWdoe2XjipsFbsfKhWZQbFTBeimby73FwCo3fKgRtYUmy4VPQVZ",
  "key33": "4wfXjbS2Hx7TEX4JdoKZijex4BNTvhh9sSV4nMf6DdybBBUkDynv2gFXaQXPfbnKYttcDvSinZG6yqxNjMuyHj7H",
  "key34": "3qvX93PHEKjTiJY7AfTVkqE7vAS7pvArvnsSCCL6aHo8pS318cnskHUc8FTnugbMrKJ61b9osV5umCgHDAbEj8fj",
  "key35": "5ofbifB8WHxZJ1fGnUmSVREvaDqr51uoMH6sAqotnPrSnbiM5S2pvtU5d6GfD6fGppNMFddAEkHHH6iPj5B6hSv",
  "key36": "3vsfrPUiTvts6ukfKMMup71egAmnPUK5vLBxf5oxJmK9Vg66kkj7ARJJMAJLHayzPVHZvsWco9X3RhD77wt1RFEF",
  "key37": "3mSCEgmbunaPYBt3Vjs6RdCCGvSaRUc4MX9TuZtvNTDNmL6a41KL6kNwvQtL3f5y91tUh9o9DkhkQfT1XCS8dRe5",
  "key38": "2QRoTD1oGvtu5ooQSqz3i8WPNe5GkXgssf7DzWHcnZ6PgJPTLZurEvvuyvRxCzWPR8PRTBWu9xFgcZEWLynAoZLH",
  "key39": "4pXcoygVyiAK1ibJnbJf2UuBS3e3wTcL7Hsbae217JLw9cfJX2RNP6f7SGRHvhCs8xVStKw21fvVkBRfNgXgkCz2",
  "key40": "HjHNzN2LGx7f1h8seGG7h5wk1mgWhxyzQ8uUL47VHkHUzMEetRRSRbZJ71DRd8FJys4qXBvxZYqCEMmDosM4YAG",
  "key41": "53aGTATrRJGgpMaw47ec7u3U2KgRzLfqz5ipLQ9jp32PJrEbjG8zHWZW3e4Au2ewSRWfeuyeT6axc4ZevAyftLQg",
  "key42": "5dY4FiLvm9LBK93WHYRnZjWVJVBYL8jhLwQUu8cuZmwaveEFwBABf3aTeMniSxcmGbuGfEAeEM1VqdVwaJa6mkur",
  "key43": "2cr9b4yuWbkZJh6RK3nZGCfEH6ZVy5VWQo9qySy9ryE58c2Y9pEfg97LFXycDJjXB5hv9uK225hFUBXF621ju8Jj",
  "key44": "4igp86bC8C39ucZzN18chcHcEXvc4gJ6BUG143m34pSqS2kC3hPCoDjJPBNEDbYbdX48CzPi6kaQ4evpNjqSt2c8"
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
