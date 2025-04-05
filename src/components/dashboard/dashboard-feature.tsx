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
    "2HDya5kAU4DTxSwzrPDdDwvsB11L6pW8YR9tESHcE1QpnFKVjLVYWyeeRqEN1Gp1LuGMJxaqK629Uyyfw3E9Pb8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5to2cr3AX8HpwdWfzVYuq84W7mcE1tuwaZQMk2zMpruVouUcR3D24A6uB3Fmyzju4tFy3tpijh3VjkLXzCvjjCbj",
  "key1": "r2fk1nGi7JAqqyZUduHuiD3bqzbniGzrcaRd1YksD5QeiRD3gqiR8AUuNWpdDJB39GaNx6HPuTecsDAHRufUntG",
  "key2": "4Aw8wdLt25iymKfpH38ojdckusjqHLmXBDNYdu3Xg5UmKrbUEE5RTmbwUsTrrjBJhwLzJ6uHhhPusC4dfbc1XPi8",
  "key3": "2bqDkvjE1iEAwHWvrQz4PmdorzJk9rB5VzcxseUxAH8Jy8LohsriS6vF2cJWrY4hZQr95K2RZUH5VRiuhmW1NbyU",
  "key4": "2AzeBTHfTEWK8napDJEgKAL6qZBMpvyH3XiK7S525ofFAFHPMueQ4t6QCTDRdJak7FqzpagkeV2eeTSM7ZzCmPy7",
  "key5": "5VNfwtDFCoP4f4qhK5QC895ibXJbMi32VyPa5UqxE7t3H2gVgckYEfxi11HqDQxBBD5zNKMKjrgRZFYEA7EyTzGH",
  "key6": "3j2H8FdfveJ7VnUwSsqeZx49KzifqMtoYGmSrAC2i7FPxi6oeqZWAdMgHq52TQHUG7HVEGMvg7LNN4FstdwPofkZ",
  "key7": "4pdmmrcD9uA32j8AaNKSc39TEPXS8AVbFnjU3ntKcSZg5uDYpcjwWGZmvSZhT1htDZQypkkh13UvGARVuhXkwCDD",
  "key8": "2XPxipC3mwemQUa64uLcsjU3rKE5fTRa6Amze5bN8EJzex38Tf7aYs2jWDksqkLrzRqDnX9TXMXgVs2pPuEAArsJ",
  "key9": "4BaFwzp8DAa8PGMjc8vu8aGouwhh4TV1DV6vnsqMrALPaa1MoFKD4d8qqGjJYwyhAq9TRKrfnJwo1M54smRrkNBq",
  "key10": "yyoKvKbDWzLx5xHQnVeRtqPPpxdiKa6Va1KKbjjLvDbbmMxmAFdWdnPoK8kMXy9cruLPKZBbThN2SAw9sYB2W4t",
  "key11": "hrLNZJzEDfa8EK9tgGxdbp6jkzgvwrWxPRMvckHf9HyuTSh9wq8oKctGtWQpTs8dkaPPNH4cCAFfjkYSWdNvxsa",
  "key12": "3FsTtaEfMej44u6XtbxAwRa4ErAaBcC4d5sQoKtwWP5a2T5hTQHCW1rHxaEAViNGDhsNsC6jHr4JbQndTSR9qeHe",
  "key13": "4UcW2g1xZC2fneqoryquYpDgEx6BJFykF33AtnoxsoaW3gDVd3c4GXaGCoeUDpCa16j7KjWmaxJoU8c3BSvpC6z",
  "key14": "SkrufDJ6VryZjMpaMpNzvhY9YgCwaGsRTbe4phv3P3pwTw26k6Gj8C9yKXv3R9Xt5PhLjXsF72TpCEPVckDkRtx",
  "key15": "5Z5HvKE9NFBANiKnXm9mxkBcgwDGTv1wJFZcSbRUv5zaQFM4TzqDWphudoz48UfkH4gyg7J9dPS1HuPxTademg8e",
  "key16": "5aYoTBLK65zejfN1K9H13dRAAm9H6QfrNWu41cLGVcN4BEAUXyaiY2QGmQKGH3ydnyrjDV8vgikKvsCbKUPmCvYj",
  "key17": "317n2Qz551766TSsH22VDHZ1JKwyr8vspfEdoc3dq5tEQs1c82VsS9KufCbKvcLQZ7zE3hxduxXauRxCuLg9PfFz",
  "key18": "tJMBQpJtbFqi7U3W3DBUJp3BoWKdFW79ZhqEonSH5DhRrFDR1yXKANZGTB9JLFn6wv3d7LZ6rfSiMnx2HybU7J6",
  "key19": "42DUyWAoRba3aBPUBqhTHAkgQZhnu7gdajAuvNnP1khzjL7CWuR7rfZeU85oSUe9mBCGs7D8gXaXQexAMdR49THW",
  "key20": "4RgX52ELsBxHMv5LZdgU5AQ5Twh83WbydxSwJGd84LmG1xuJUwu5opGQ15NCimMMbKmo6GnN5RcdefEDDqyxAx9y",
  "key21": "2Wf2Vbwk32RVFWMmm4MAvnBMk1pipvAkuyafWeF5htUJg23vbie3mMkNngHCx7CqF4gcTcNxZLA4gVnh6rmuFFzw",
  "key22": "4HVUQbQuCyBLF7hewtZo4Udr3EH6X9uiiQaFp5pnRQRgGdPSFzz9TRkvSZgEyPpUzA2RSuSMknqSU2DhLgEmLJQy",
  "key23": "58WgMjYsQLQCrTryku9ZeRx4cCTC1378SoBpoNRAJ1cSHsxyZFAFrgojobYjvMt4NHjULpjcK2Xfdgrjk5XnpAsu",
  "key24": "2M4Wetkyh5Pfa7UFVPMBDDJFU438hevVnUx6x2cnN8qtKwBZb4r7XhVzxjVNZzv4feFAeMvuFKY7VpEPrQSjFuHj",
  "key25": "4pQkvBmXpRpJvQHBYuhkoAGFdoSnKY2HYaMLmZKyU7u5SeZ14zBfxcp1E9dGrEvBEXYWLn2xweuxNKzkqn8coYaL",
  "key26": "ayzUD5Ac9aTwAQVxXJD1oxmHuGeFhPHqn2Wb5XYKUSBDH2ai4zX9rPD86Tqzf8rKEMTCGW5htGZwC6PRbYeCZRX",
  "key27": "3RwsmHGM8P6qgq9WaF2XDVdMcdqQbitspaJmH1KgXJy54oYaJPFvt7Ydo2dwhXRM9vVYfHwJ7tqeN1gtuhjkTdk8",
  "key28": "4GbK4m2o82dHv7cKMRN3qWFxZcGqbjoU1trLqDicATKgfZw8rKKgVX79p4T36BDAtQe9TLoxqgm8RTsenGnc9nYY",
  "key29": "5QqEcGVSAM8YzfyE7U8Uve7zTFRB72cmQr5pQAhS9yZ6dZpETipVSWd14ncgWYDMnVUZMmQCKkpTBXGXyTcqSUuS",
  "key30": "53y6SeTveNCxRuy7ZJfv6G2HB5vstjnNRkU9aL7Tanda5k6nm4yfZ4fEWPqdjpYy2GFCpaAsNkXHmkFMfn5wuZ3i"
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
