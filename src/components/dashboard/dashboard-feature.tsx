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
    "44jsxzeXvdtTZmj3nz9nSZ2MYDAx1WLSy1bAaxm9uyEihY8Dac4tfc869Wacdk5Qoo4eXTRqeYaN3qwUAjbZ1brq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5faiao8nNyJcPXCftuqtL1fyhXYPJgED3JmQSf2r55ZhVb3GSGxLZWjrYtrdggYKfuAThANHk74pwYdAuWdCHUom",
  "key1": "4jPA93PiHLB8GVE6KpJ5H5VVGXEwwsEncUBaG3u8xjUN5XgTgQr6ET4CPNpkpAytS6MiQE9NrckkmCKAhtSHRGnr",
  "key2": "DKZrDre5K94SPSfeFkq6yAkJ2JKWRvA6uyWduyAVg6eJGtF7JKG6YDGYKzEnJ5yc4684a2EY1vhVomw133fYvmV",
  "key3": "3RWGGR3ghHbSV1jBhoZ4HAHezdJo3qsURuzN32fHC6y3eVvJ4Rss4ommDikj3ChFpnsgNaycmhodS7dyZX3WFxEZ",
  "key4": "5c6vJhpnLj8E8vCJTFrNZAzEVRRToRJLCz8i7Wi8g39rFow3cBWGYsrHpe8xZzi55Na3HijrPyDE1pFMP2R4S8U8",
  "key5": "35sRUHvYxbirDJoVebezAq5JLNnPijxnAyk7E2981ukeQdxNsbkuhxrhcdxVBTuyZCJrykBJvHAaCpALMRdZkQJT",
  "key6": "51GDytdHzJwGnjai65pi6iGpVshmfTm7F82ggaudzGiJyrjwUHXi8SYzX5ZtrjHsFSbe1N4TY3GJEwU9U6r7owyN",
  "key7": "4ceuNDVxq5YC5X7aqAGdPvtjtBgz65EpJjnfowNSeod6YJoof4nQeNndJuh6QjKAQJj6fFiPgU5NHhebunu7HDLn",
  "key8": "2Bcp6gTR8RZrTpjvZ7GZZDziiNAxPQZ3SBAyBHLAFmPmkMt6f7qkDyM2rCDxdsNidnGPu64ARGpF6AuWdAPwzpgD",
  "key9": "53Li6Aizf3MXkGzK4xdrC4ARbfcTVv7GKzTmYYB3BqqM6nMPzXUZrqvRnBLVmnAxgj5YEwbHRDVW9U3jdsHifLkx",
  "key10": "4LXGrvLrbx8BfJDhKnyyPfV1GhwtsPBXpBLPmzKQgqo4wdDZmY3CN7KRirhK94qaizyz6BeY8pMNSqpEysBh4TUo",
  "key11": "3qtotW9m9qi7JEGoPEEEVwM1MwY8GcMVhkL3hxhh2KeYbLihCB34G6kTtvCFNUAtszfNbh3EBnzqVqZ5fLopB3xu",
  "key12": "4Rbz3G7Ez2eSrNagsbGzAnKqXokFibYEJuZNMi6huU78vDYGqgNUZzJemzYGsotdEfPzJ59Ug4entwYkKTNKAgbW",
  "key13": "2DuptvmdiNEezmbSkKEQ85fSdWWDRkShQs5Xa2DMW25JCWWo3Y2YRqK2goASy4M24f732YymTia81LzPgJcD8wiY",
  "key14": "2HesHoHF9qTYk62NReQEcRULP4qGRovy8jGNG8TQn9RUq5qj35T4PJvKGJfXCkNN8cDmjVEoJ5BwQgey4AkyaxKx",
  "key15": "4ZNG8eiWsmnMr22DtFgwnvREtUJCVbb1ewHf1Rc5EjussBVu7ZWXiv4inkXCF7gBihPQgyHincZSY53EByKXWDrN",
  "key16": "41MuanT2YcSqFVUxMMgYQVuFyk7SqY84jibqLxLV6dSG5bnxvv3GgtUdeZEVyw713tsqU9iUfuc11U4e5k5mtn6Y",
  "key17": "4JTBGpk48y451WnK9ouhY2sQSyfePWQLeedAurQNEm8JZpGQGkuNfYSwzMijWrYHjxwCB9dtRkmcgzNKbGGq3hpu",
  "key18": "4H6xyAWnrBy3TMPzwqHcLggem9uYizgWPFmdb5K6uRRG2E2HVMxGuqpB98cxxDrUbUf6z42RhbM4BKNfv3nJyRax",
  "key19": "4FJxCuiAG5ZXLXRbGEzHt8J2PqsRaC4KJA5c8YtSAo7vvRzqb8WbZkQ1L9qrdu82qJH3hVZgvg1y26MaNJBLsP6w",
  "key20": "4aghm86Ss3MBrfCfz7T7GpVYGuS1TYCLicu3VPiW4Kcq7yac3GbLHog5Wr37VhPjPZVutRx9zm1WhbRXYvQsLcoo",
  "key21": "1DY3GNAvzsb29fFikJ6d4e9X1U99zqgPNfgmZBkwD8reWNU7e4rSKP3SnhGpJ3FZLVv9YFPSpyTK1koa96NuSzA",
  "key22": "CTkLsgvkU7QaHNs4p1b1JuEy23Qrx4cT4qKgjEdrKhdfgE3RXZFm73L6zd7grAC8aWv6Roc2WQAdNQAGa7Mz6g1",
  "key23": "4SCpTqhsNHJLNrExKaxRwpqdnB1z4HiGPh9aG7AbBfoR2g1HTtw6J2bbVSsWp9E1e8ZWvyS339oMSfjigUqpf634",
  "key24": "27Dr7diy7N5KqY3zMuc22hcT6FiE53UJwgWqwzeWKq573SXW7MEjDZmWxJVWp9yMATUQKw7NFc6HrzmAHYBnx3qc",
  "key25": "4Z3SbL63uirzAmp2roHQtFRyYR8ChWkdUyj29mttstJCjgYVN7v9wPR9u78pzEtidCpeuL5SzSw1rtERHNWQub6u",
  "key26": "5XmkmkofKPzx3N8jpQFNZFWTMUWf6vZpATps4sJMYMpVaYP8Cw5E5jxjNkE3ky7VJecKy5uB7BCJj9ZFSk9pgj3n",
  "key27": "39w3mNUsC8g1adiv2bCoMR3kf9hP7fZUuyH2DMci9E3XSaWT4jhf2TwFQysWe8oqEhv4cbgf6aHhhGto5WRWoQNr",
  "key28": "wzmRo3Z97ZKNsdZRZKTdALM2puwKNNt2JLFvXjUV1UafLQkCfA3GDGV9Bgzo4paDHjat1FoP2Zo1NW5YC8feNf2",
  "key29": "jr8NuYKR5SuMiHjNaNgCVt7JWsKDk5wYZcaAQiqcwMJr6xi6MscsgHBTksXSvAnmg4gDigZGHoVYynwqZCGUVRD",
  "key30": "3MCpzBaH4wWsRp5KmSa5a27U4UECUZ8sJKz8Wv4ngLvans35RBuzv7eZxAfrmTrMEKcDBnAn3DZ5WJMDrK4H6L2B",
  "key31": "52f3QXjbPiRvRGPdHeqM6sXbvTMqPittqYDyXkP2St3yQD9cKX3trXQRfmfH2qMsXSBFkfe1eTpTjojEBfcH6atA",
  "key32": "5QYmoGfBTSjHEZNwH1YTLpNjieZiH8UYkeV5GQ4iDec1zLibqytAadHMy7Mn3ZafJZidpitjm9SLvUGUqDo5t27q",
  "key33": "4P9AndY6U92EV91P6yMHUmjWEm2i8BRDbSVwYsaTLC9Tt3NVAWw5nXAXkwGw6i3zCxiwPBwUQZe2VWeteW3tXiZb",
  "key34": "3qh5AdGFi7NzPoUqVhPKAz9AL2xjghy7JQqvQ6WsRgF6iMfycRLptrhQsTTd69e1HefJyoAJiKzrznpGoQ9v33Tj",
  "key35": "2eMbeATtruB1hDdaoJMMRXH9tYaRtW5DwzZjtbzKpJg1Ds9T2ZuP8QABtjCQxdMC8AHE2GmbVdNNoNeVPs5soMsP",
  "key36": "2n7iyCf1dSEhqHgjAN9wFtL9zYjuprAt6hDBrzW1VJm1PdhUg8ofx7ABrz4pZQ9uADSsiEC7wc7sZTC865JGLfKk",
  "key37": "48hYrGWCKav4pNSHDSPH76Cg7QV1852QwZkb8NzxcxUqBcm5pPqADp7KUJsCNNui4UfFMne4pXZj7xTa4RW9LVJC",
  "key38": "44WEHmFrtgTsyzZQKPJc3if7iu7AfRjiPdDFAD6qSypEFoEtXZMVUT4vqc8KPJSehFGoLuA8RTfTxEC2MNbNjKNs",
  "key39": "5G1JDh4RHEh6gmhUweJUWkvQGKqcUm9F5FcePqADgmi5FrTNa3KBV2c1bYSeZ6t9nc4etVz1mXY9JZZoCATbJAMT",
  "key40": "25sH9nA1aDyqHC6EDpp9i4M2Tu7PUsGP99XaiMPfpCq8ePvvZTxcjeMJVeXRjAEhJU7pgi1RYbTUytyrHpzxtgRw"
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
