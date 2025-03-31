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
    "35pV29HM36n8qdnw2K2GuukRtQmSgtJNXzMPHP94qWL7bLLudJrVdLyBLg4uDj9PU3NyATpnDZgRobbacnPdohRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZvARAvX5Sj5FxKSK8z76uDgnUmm8WCLMW5eE7QsD8qCiYrX1DWe5qcxRgd4qj4491HF38ZV1FHG3dbEtyx7CHvJ",
  "key1": "5vchMYj2sjAV2VTLvjeyw9deMeJ7Q4Gsjuy1cmvjRDQTz6dKdrZoWpoaDzACr2t2K7dyqX5DCoWibZQU862Xspx2",
  "key2": "LgE5D5Wb6exsaBX7zhPQMQiP1aMSJPRrbB76PD9pzfxQ3si1PDZaCoTAw3PjhW5Qx2eQuGmMnDz63aT3je5J14A",
  "key3": "KfudNJGjGEZLs4yEJjB7mEnFvGiEk23ToASMBTVwAVn9sGHjXSz2Yaqz9XF6YhU3Yytx8BUvCUCN5Y8jsH7sEWb",
  "key4": "5j3etFFoFBayb1c6dMwjZUceoZrcjejyRin5e1LiwvVq231hrakQK8AWQouut7zipEhD1gyDH5Y5t6YDhvoUWAMR",
  "key5": "4xxN5JBBRKfr8xZbyiAb7R627Mm141LZMuVS6PH38UGz4dK399TpeGeZbZDDa5m3rr8dbtShWgH84cj7FJ171kkQ",
  "key6": "35nUKdoQ9QCzcTtQ7rNeMAsMcE1zKR5tSQceqiak2Wv9g1URtPkHpAD7P9uTkWUzH8LHxmX6AJcCvEiCVQk6WrcG",
  "key7": "MZkksS2zV86dpqkhHSckK9Tu2MrvwfMRSV45nQGVGXehBc43kbuht1uLN6afaH4xkiNw4y7okiQEJK51tdFUkKe",
  "key8": "4TCH9LJ9bb18JuT7o4rvXEKC2m85kXPJ2kj7VRvHG86BpHUwoPx7MBZkvF8p28haQmbBZGLJuUQv5nrrCgPxVgjg",
  "key9": "3JtxfQ2gtu1u5BzTEych7xvwySm4PFt6Kd2RqBs5hvk1JLpP2rDBcS5kWDD7KjZawJxN1CZiJVxPnkQuMxrH6i9a",
  "key10": "4WbmCZczmhhTCinSVBTCMp8UsW7jbQjg4YYvu4Vuy4ygVFJYiEQtj8RNQDpu1P9PKhZ46GRZVwp6XsnCcKgXHHFX",
  "key11": "VNvKFvkep5CBex6Znx4bFk2tCYFRsZnZp4rz8eer56TjkBuphDSrJaxxB8HRcA7EPYLv2zDRrVt1cubVUUFi8pA",
  "key12": "5ce8cxEmEPxJ75czJ4xCtbGo2eRpAy8iMNaBfAzdxCJpgn6sSUXcCnf3vKmzFgyoago98XokzaM2qzn1WFkQ2Rxs",
  "key13": "5komZYjPS4H4jn3jU35sENX7sT5emGkbt32x5PRdbfdMRdftcV8R75YN8CxA2mkn7FWY6V9uCGwKpZnwkChiiL4K",
  "key14": "JSbr9GQhrDuve1UAi7b68x4SGVTG6wxkHZCRQDTxLwATFkNkn4puyFGnxk4mCB1KBwH3spefMoSrTtBMP21rYaj",
  "key15": "42dbxFwoqQCQZ3H1g47AX1Kdf9sW8g5MwTPmcpksAL1VEBQYg8BfRYuZm4hLpSyCQXjh5s2R7zD49gctdUW27fgT",
  "key16": "MRb2VTrs532YFpLLQfzrCiwiWaKeauAbJ4KQdcNakS3vCcWGPiZVxgHXifgfFWKgrm1XLbqrfTabhPpJ43sNRhv",
  "key17": "HrJAstAfdSyTTkKjbFPWVp9gMMUVTtuUjX2BvwxjwSCp3KFcPqXZ7FJHv588XpsaBudMd4KGg22UebVRK25woy7",
  "key18": "4ua3pjoe9yLsLrQaX6Rbw7CMLHzBm3sW6rmzaeHiqaV9E7nJ36jRzNYxWb8kqcDYX4S7xshsu3cJ5NhhqLdgbWxt",
  "key19": "319dXGdo67xdip5su2Dx5qvcw6W9awHWqN6Txe8q5WSbtorTNn8rohrgEhve6CLk7uBXk3G4GGRGiJfyzSq8TTdB",
  "key20": "47MG71bQi24TJeEvTGoZzQMo1pksXFpxLd3PLYHMwgL9NpBEVExnVUBk1JZd6h5X8H3cCJwa67yTvTxaPe2gW2QB",
  "key21": "5rEJjcyeg7R7VRT5eWPhtZnuvzSYcT6ZzVZNvLTaUFyTpt9WUh9aDvoiezBtdq4ruffDsD1Dz9Jzffwxk1GADBQ4",
  "key22": "2qipiXLfu1XbwJrgRuo5TKqAex18uXLpKDnAXkjMHvyJVDgrUdBLs6CmM5Nmzo658ZUUsrtH1Du8YY8aJQE5WetQ",
  "key23": "2rmbtLrazeH9rRbEQnrDB3EVE82CMB8fMEMDz6PxRXA459cKJ9iNXULFFtLC3oEsRaj7dJnz6SEYNDr5DJtom57T",
  "key24": "3CLyK6b6tCLmgZALu1SUv6U7f7j9DW3iquyc3imjquhQWNjSYKi9E4JuRmmgtRnANvwmZcZMUjRcRRfJ1YrSr5Db",
  "key25": "61HdXNdFeHqGJde9YhmdB1QQtXezvpBV6Zntwop67RQDsJGVy3mz4aDEmDHQjgbyPkY2eScX8z17bJyMjj6nDbAt",
  "key26": "2TbRKAWtsuixvrnUvjXwAfmiSKHmjSiv3DViKsVtrGaNCjer797rvNz3Ruv3R5qPdKPnRFheQ8XdB6cYRaAH9MEB",
  "key27": "63gcW7tMgAT4gFKP6X1wFHyWuRnaqEWCEsmzuj2CLVdp2DvXLBnE4Gjsg79rYCWsgSoYhDQb18EUt5rGA59fbBtm",
  "key28": "5UEqUDPV1V45ur3Cv5UZroY8wi1NPM6vhoADLnbvZMc4e2nAubpwjcJkCmo2MpGEtRepfMgv8cuAYjVnEyNvg1Pf",
  "key29": "3kbY52qnXyruw2nxxR1t3qhR5CrLCrZdYVjh46h8pHFYTVFeCU3JuQk5Vhva8c24bwee2KRimXJ4YHjbQ5qmoiQt",
  "key30": "5piJXiZqUmbgxwHZgsPoohcTEyUcbM9Smw5zVo2bK8sjMDanTmn1zhMgf6wrCgRH35T2ceMBMoDM9zQ5X436WHNo",
  "key31": "5iDTmdzEscJHYajKatMyEdSvbGXJpLaSU9jh2tpDWiecCsaL4GhvHDM1tS6st1mbTCgJDMAT8DX1BzZfhUnod9mU",
  "key32": "3ZEVv6q28cefqpkaGuvNGjGV8i7tXK1QkvNKXKcHwEZjKRBi5Gbq1jSXdUhWdpHGKuG1XCqqqvqNWUs6v4Av3f1n",
  "key33": "2XkvtMmXgeMz7DhHhLZmXGhUSWhaEhHJ7Phu4rmFXd1ew6KHybpbC8NQqWLNH9shjGSs5a4N1Z9hQ1kWheoJ6jF9",
  "key34": "2ngxMpJ5PhWdNtgMGgBpMAicU6UwuhW1nnuUUf4svoyjVzgd9EkHkqNXvnJmHQkRv6F7jaBBP9xTKNxURotf4Zve",
  "key35": "5zXYWuCk3EKj9Y5hndbzgPssBzcJe86taV7m8BQo5Ci4ayRJdAXBAbwAWAYrECEZ37vvtJswdc3hPpUWm4rb2JJp",
  "key36": "4fcsBiSePA7yb5KjSeZCWFAdWPQZuJFpYMNchgjJ1JfaoUFojzW2DsCbbXdaQMmLwTvLFRhAm817zPj988hVyyC6",
  "key37": "3ZeVbmN43YaDYMMVSRXr4YJcHGJYgcEdY7JQv5k7gvMtZzAxooWmWn3x1pHiRrWCmgnWmh7RtSPn6hYoT5XNThKy",
  "key38": "5VKY34QefDpZBCzZ37HR2jMNvtHLmpegwvwKsg2YmqnqiKHiNjYcH5hNYMPUSMbYvs69TL7QWaZ7tFqRaEg7LNCr",
  "key39": "5FhjYBkVMrZqvbqH3Zw9oJYysgrWCHEicKAEjGiLAxSrsqBFu9JqFHpaprv8qEK2rWuCw4QCUbN5aJWhK6AK8Jmm"
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
