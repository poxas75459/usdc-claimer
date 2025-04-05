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
    "2Z3czijsE1QcspEghE3pBTHcmEK9sFgNnYhGpsgHkFsHprsX6M44Q4YGSrL9iSh4KRqmq6ypyFfQBZEKJREqeJpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eb4zBRxKRqUqMDnzSuiweBbNC3Z2PHcf1iwAyjbdGcCmDrocsGxH4BHv8ZvDdZr6NaYJy7zFvFtVFpBs3xBGkFr",
  "key1": "57j1mgicc3XcVJp7DZSoZnjweeFm99eiKTrw8BRyYRmZWRvqEXvHky3YzKYXre6w5vTpCp3wH1hmxqdyZSGo9Rct",
  "key2": "3gSvQTvP2S9hS1dHmS925wQhJzSMVrw7Uqnd1oqmgrLenZUXVPdJHjHBqYeaBVivupAdk2hkciUaGULV4ovC9jVP",
  "key3": "3dsM9qgcb3FjQV58s9mwQbJGeH3cC1o369PXsH1QTJk7b5fT1xAuiFmgpASq9ekkMr6RDQwQJZKYE8V7ARwsz6hE",
  "key4": "3K3DLzE4Lu4tTwYhi7WAo3kgD1q6r4R3ySmQq3qFsMP63S65bfNYpmLUXAcJ9b2BT2zbx8PLrh5nCSBbPU9tUwsK",
  "key5": "5xbb4FEJ4onfBfH7qd5fMTFAwToXRYaWSuMYm7soDcUC5cELSxqsTu6GwpWUoaoJ5Euf49uav92BhELkwPk4jwTd",
  "key6": "56wqMo7zWiZE2NSnrQtbxy11ddNhRDvzieH4opxjfDCZMsyZCXPuCf6ndvZurBYQvaC75KvCgjj6mFoHVcGYKagK",
  "key7": "55W8YMWhmdU4rLKnLxZYDQ7CsvHgnFzKKbHTJZdwf3csAHCjeppvfutipfjkpVEDQ3EQDcFxhZL4Vu6nza74iE9g",
  "key8": "5KkAhxqYwFFUdc8njpY8A81SZn4gEsmMeMWpYEzRL775bYuYEG7wk6yncZQrXKshTCWU3NwrDL8baZbpwE3FNNQk",
  "key9": "5vKHocoPsqeuUcwR4PvP8txYLhwVuVgA8tMfadK89ema7ELUYpd7iyWEJqHwE62QLoq8bhHhHEcxd1E5RubZYMzh",
  "key10": "43s13hjTs2v1r7gbmwkzygLQ3FnUCDMABwoAtaCtRfRv4LpaowUe3SDKAtcvs1RjyWhUkZcuJYRr9qfAkzQjPbz2",
  "key11": "2q8VKC7RaKyufm7dE9z3uSc5X7jARMNCC3ZFBVXLWhj3Qv97LSZQS2KpFASTsbjAmKucDPZFEPgLa6vUg6kpCJ5N",
  "key12": "4DhX21GZ2TvKB6npS7ZPHLvKfj31ne6ze17JvqUjuG8kJYMZhopSbMH16Yzy5h7qtdrVsWEVjsYdcrf7jBLT1Bxc",
  "key13": "5nURUiDDwzB9saGjLn1kLBjHhocQBrSiZHxa3QmnYSrWRSpfXFGdwqSu9c3xTFzdAouoJuzf6gV1bo8pw6JoiD2J",
  "key14": "2YYEtVNKVETunQyc83fLqNMtC4ecWcNjDvLEXX4vMTKma1Ry6nwFC2o1MvXuTeF6igM34fGM5fYinmH3PniWv3bh",
  "key15": "3ZiZ4XPpLDjLgfspi6qA1WtscVLZZ2Fm4EBKLRN6nPeNwG5UyyVYfiXtTDughMVUhYfyi9DYeNxZGnk2YwifPMBX",
  "key16": "ugEusc7MfjeAm9HWmWceFWP9zCWE5bJ413pNrW7Jkb54c2M3U94e4JbqtmmLPDV1arw8irUsZ8BRxkhTTQjrB2W",
  "key17": "121TNdRNb9qAxt7nhmUvmAZ3ZsvWPqGau1EoT1MjA2KkagJUsfivbdmmxVaG92UZxin9EKWnPDUPji7yso5kdKdb",
  "key18": "Hx17M7vHj65b12mv5pUmYiQxGkjrqKMrBJ47ZvonZ8CUNaNvCJZRp8FgaJ4FAqnex24DQCh7hAEoGWx7QCsKHFK",
  "key19": "3reRAG2ECVHf6oqHVfq1nyvk7quXBjA3SERVyktcvQzgNEQ2YmQ3zqsuZeccJo6hVgpwrtCoBUiV3aDhDeW5SzMn",
  "key20": "2NjtahhRf212kPZR8Yohi9yDMX4KkhURkB95yct2d8gjNMbiqJJjeiazGJyzrVoKLcvgu32YV8HiyFc9DKzhk5jw",
  "key21": "4jgoP8kzXcLrvJ5RwCPCzf1TVJe5hMLSRXjppzq4drhgKu8AcX7aBPWXKyPn8oCyJTgdJJNn8C8dTiw9Fc4GJLRX",
  "key22": "3wCe3NP4wbEGFxLNzKLhc3dxWyd3jSXyRZhcNgDtNCYKaF5AUM3hNtGt9V3q7YcoXppSivLE3SdxiNTwARjQpTfx",
  "key23": "33JJ3JzB8uVMSARqJaSbQLGcEfSdQukZBNAbqjiraeVnkyvaCSzyHeWsVV5MUbkZLdu3ELZ2XLY1VAimxgvTVH47",
  "key24": "39uoDTa2PcUJTb24scDD845XG1M1GZUCuveH9g2rxD8HpH6C5nB8Yyi8ShmvETYuWhzsBZ3DVQdgzYsdxwLSdbAs",
  "key25": "5cC4Mzb6QoFp4dJmWdvYqu2MoqMrSXPQwDTfQdqXy66sCqpnUVQXX34sQhb1yatc6agm6Ctojv1RoUXzXxeg8A1R",
  "key26": "PSxiJi1b7bzEmcN2dX63bo2gRjvDKwVibijpVzjWKRDfey3NGE1nZc1y4Z753meZDzBqWG2fWEQt89UpP8cNHUy",
  "key27": "WH3EfHyHfvAJxznB5Mr82LsxgRnPRzn1EWJ9B1GhT1PshAGLBkiBBscxy8n1uS8n9Bx5h52b6nEx6WMs2YzjqVr",
  "key28": "3DvVEzc4yDSzbb76WJQ9y7fMV3KscxmTFp8dCH8ieUymek6V4mZaiPWqCrkTfUG4W6GevcLqUo5sfbb7FDaJgDWn",
  "key29": "3hXDEwncADwtbDgsFDuHnWSEF9RXXNCtzQKuxoq2UZ7u2bo2fy8tpdrNgrdHv5WeeE5jpt5pxiSsJvqteurxS2FZ"
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
