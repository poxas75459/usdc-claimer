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
    "HaQNEgYCpzZLTSdEg3HUp7crgWQFjis5S1PwnHnFSJBRbZ56wDrmmGq3P1Pi5Q8PoLRbHwTrAsthS8u2d6CXGAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PBvFtHE8FzFAyoDApBXCVGz6GMk4nKb4Bbwi9G559n765TgjEFyh68P9vLk7MdKRYKKp5FCfcFDvdnsu7mN36kX",
  "key1": "2JRYTfi55kPgptbSVfnyFCT7y3zGdNuwmzwm7bsECAXTihmcBDYY5QBktrYzED8G8uci1rGyy4tZ5SHSwSEenonS",
  "key2": "spKJLmKhdaHXJsPChsso9tmHqP7QtLbxySFu1zgQETr6cijHKfs3LhimndHJ8ieayVvCWLY7Kxg3ciKyvcyvFy7",
  "key3": "2e7WcaNZmZqJVZyjGmNg2egPdyZRW3BkJ2LbnoPRJxS4jFhihaARZu5LhDbwrPRNJA8ibjZPBHUj3jttBgHhMBBv",
  "key4": "3LaeFQYX1i1zQ78tkZJ8awdNutV9mLoRjpA5eiBSr4NE2z6QfbBuqRtjgXKzpPne4wGyfbBLNf84iLBB8NvnDbWi",
  "key5": "35htxgRnPiHhcTjV2ZNiv2tUhGBwHfFpWDSSwD5m1mtqqT6XwFV2fPJj2TMcHeg1ktDp5cz3grtY1V4ns5wFsoRP",
  "key6": "4bZDYmDAhDkFGBpnZ3f6YSWdXvkKiRRX9dYVwaQbEDjYvA5Y3b9bgjKZkHEhKS8CvsrqUe4wfFBNLjkgUdXhjdHn",
  "key7": "5ZbCZ79ZoTi5sJdn4i7HSG66QZQAhDdeH5NKURPB59ey8BFSwhDtMD8qPwwdrELQa2A9yaLf9tdNEPjvtAmfQLQk",
  "key8": "5D8CWxPvb9wYjBireckU2UH22q7YyhjyTYAdPRGJFp4bJ33Hhhht7Wdf8RuZEghs4DJWLMhNrKrhuZVBQ4oELNYX",
  "key9": "2czMQJN1F43YZ2q3u1Z9FYegZhaQVkbfkp9n9yKnZMWnhwwLyrtnC95XQrxGwjC85T2V5GGToJzhJV2eJcBuSooo",
  "key10": "5Nio5yF1qTmh4zU6DV5FoDUhZiv7SA7kmoEiicMwHJdakiCyqhUoJUJSCw3e6Mt5BxvobWsebDqBytHubyNYqbr8",
  "key11": "4zdzCRt5mBh4EoDY8AX4dzR8ER5MVWi2ad8L1aAPw4h7GiufT1xSSLWsFNmzNkKmRyzZfGuwwL9hVBb2abF12jnF",
  "key12": "eupWy1TJY9iRozwrcht84ZDoe7FsWGoCx7fwDGsud2QzVNcMJZUDzZKtBwKZn5cx5pHc3KNRXE4zJPDDL4XN7QM",
  "key13": "2ZKiYQ9eVYvfY84z9ehcBnBwjVRSPAL1ueVW7RimX924UcsUkVJBu89GhyNopVMWYB7mSszcyAxwJnaQ9yjdWHvu",
  "key14": "5wQPht7scTMKmXxJuC6mN5KyEZvW6sTmWHbB4ovhcQsxJce5Zv8zvh6o8ZPnZSeTbHisnxXA1BfQ4K1jBGeKjB9f",
  "key15": "3gjf6qwZzhAZTBxAuKGzM58QHMzu4885NPa8E32FWcUobYFBtMK3Ybifxs5CUxvx4ZcTRvL18XyzRxGvkbvDQaC8",
  "key16": "5S3WvQNVyx2J1N1GWimZyPeK7k2EywUUpkiAQJ8ryp3M7Gh8tSgjcTgi7s5m3s3EyjBm26fPoVW3GyRaFPARthSC",
  "key17": "4u7U3N3N5MYHHbwaTB2JdsWhK73hGW5mRuwejCGLNh7uAof56687Hc9SzuW7eqRjvCtGa3NeSrJWJHAF3Fd5U87G",
  "key18": "62w1bSYsPnAoqoGW9qTg48zzMoPHsETHczJUEQnwZxMZjopMLLjbNB3UyMtTdW43QG5Y3teTkVZF3gCm4aRRxjqT",
  "key19": "P7WjcuknKr5HNzAboatyt2nFTM3yPU5jzKPLXFStThzKs39rMZ2fEgUnYY8USaHEmQd6rrx8eTjXmSAjd6oTvLn",
  "key20": "3kSHDrbsy8Aju4QdFYpybaawfUtbx3PrQ45nuGV6epVy8d6EJzQpf335xDbWxZjgS758YhaUU96LLngUZbHrUrHW",
  "key21": "5dipyL5rtDTm6uLxVj2APUa8ceVtzASqPoxpv1ZyUty21fqMR75j8DvoL6NHaUWbFZtmx8CL53uCgntD2fJhbNXv",
  "key22": "2XxuoFwr1YYmsoKLMyJr6iFUViCc6mrwpSjHJLAvqyMCdipWmrZsiD6zFhm5wB3bwmMB96swho6Xnc9nnSWRZzvy",
  "key23": "a6eJjpw3FemRViMMn81F3Pd2nVmLn2iwvZq7ubvkjRSUkGThr1BKUy4vgE3SC8ppQPGPA6GaV4562x4fgoW6BJF",
  "key24": "428gj3dbpXA3M9A3W4YqQLExxNZcUqbWZq8BsGiks7ng2FcXgcaZWDagxjidoiHb8VLh1Y7kYDLkddL2Xpdtg5d4",
  "key25": "4vrXq5zyLiwpvP6gJ7J23F6VwmHXXU6QkL7Pj8zr2E5dof3QRZzMwTS8mN6K9mAPMzvsaQkkjHhyHQimWwiJmJGo",
  "key26": "3XvnU1TXgQnLTqycjtG4c5icNW97Zxqk8LBM1uD3J9QH3rMgJCYXswckuU7rN59gsabs2HeYaFGmtP2A3SKSEKVJ",
  "key27": "4u4vpdHZhoXz2Tcn58avSmZauWs1a8K8XRbm1LqzLDk2besu59gVk17rqjLyArpccLaAtHMVJywXMJJ9HJ5c2Rk7",
  "key28": "5P8XyfdMscw5y3yNhY8wyT4wRJ3HLR9gSgY8oh6L8uuX24fJpGvMJTqYUuHVZMbtR7Rb4dqF5JYfpatLwEjriRch",
  "key29": "3g29A1tjkrPbqXgyRU8wAixPZavt8sxH2mgGVKh6WMpau3UFwyJxrSvapMJ6TnRvTPuuTo3JEok1tCwQ9cXZiBSn",
  "key30": "nrzeSthzWvL3JcvB2a3f75V98aJHJ3y2ZHAN3zJ2M3vNp7jSe6jV3CqXZgMbnGZE3uEMbMc89B7rH2WvoWehV8n",
  "key31": "2qozxgPMRYVQ5F9SZPQGAgPtYTdmfVYi9GfdhfmB6bDJwrCTeJJiLGtkHttLpkDkNhXp2AJ3irfrYaEPRBrAPfwY",
  "key32": "4bavwg6eCspQghFDcBx3ipQsjWw1tcygz264in9SAMGGYmSZxnYbJJjd8RRT5vA7NYmyZqA71vkH3E8b2SZ7kT58",
  "key33": "2UdgVHHJSVzcYo5CfoWPwXCDQYx7ZJcnNURwBBgf9RDvFAJwnZYGN1PoNyFvAmwS5trgo7VZ3mzrUsPphBiTKoQh",
  "key34": "gfTrTjUkAoLQvzJX64eQQWRg1TUuQe59CkdVE8HZ7MXRGUhJuF9xZUm8UMUYW7DHgCepcjmyLztyWLiLEeoKswY",
  "key35": "3PLtj9Qd8U3TKp5WdJ2ratdnJuoiwKQdx7AK2dz51PmLRZ9BEB8ctaRaZqhfmsmny8SwsDARE961QFLDw5JLw9JT",
  "key36": "25gNU3UAEk99uMtm6hhvSkssVqHxFEuwSpKj9fCKFRvWE5ZMkvwod5axw3AUvNAsvbjhsTDDvLX6Ym7zeLqcrcWR",
  "key37": "4XN9Xd76L9DJTQ44Qukchpw6u1rc4iy5aFUhoChSAbfgaNwT24iajYV4MnT9dGniKco87eDWszyDDJeJRFZXQZcm",
  "key38": "51JZgyTBRoPLsZW87Vt9NXjkuAVX5TVZTyU9hCqC6hXzcVXhWmxmHnbhm5huH1xtshaquyW8dpeGRmbhVdeCNLK8",
  "key39": "4upWpE6CiAW8bTpAuxnqpTB388NiDuXKSHQSVEKZoc2QFBCzm4GKXKzqaK5E5BJyH593yCZMFAyc23yTygbF4YAP",
  "key40": "3aVtqhqPNv5Tsh2vPt5kq3SkcBuW1KeQMeduyaoguQ6V16QvN4TFN9DbUG9CL1UKW3e8pfk85Hvk3E5nEWe7WtAA",
  "key41": "26KiGd1LGyssG8z6p5JN5zEuyYUeQE4w4ku8L6pis5ShyTrHeoVPRiJGmLe1iNqrvPNQ5SUTR3f5DKSigQwWKwvr",
  "key42": "32awJvGVU1wUTojzEobguSfLygYrg917efF9uALtnaq24yge4QUSfPExXkWsfffeYWDhasi7kZYAzFryE1EuNWZa",
  "key43": "RDchZAy8ge6D6ixEM7FV2gug7Fkge9epQJiodyiSNeB9DNKfQZcQRcTodkFcca8KfMy4PRu259S9FCVnwxfE2Ly"
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
