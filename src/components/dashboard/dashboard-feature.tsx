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
    "45qa2ZCVHZTMDEcrz1b7bse8b2SfjuZrF6pLuMza4zSgQus9HvrvNu94aZ3Jb3h58Rf7b3FUrR9zSQFzU9GAXc3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LxhWuFomHj76v7fUBJiYvqG7JMYTvuASAFMSwVWFnAwmhZ3LAVyUcpNwCHZCXMpsX7ovCGfUwPZpgnox9Zb5PSE",
  "key1": "4ABXQ8nuq2waSnW6mjeCPQ12FsMMMBhe9PLEyzgQ6CGV7sGAqTDQkuRtZwvyJnYoyhozKwAucUwnPMMewiLHnxyy",
  "key2": "37PHW9ZDigJthgciT9uMiR1qFBAaW7LLenDayg4QXrwfqq4UPG1YDFoSfsUuXTm3oxeuxbRMrHzL5e6iutKoTS7K",
  "key3": "mdiySa8qf4y9n487c4mXXVegatG6RGh7D1scST51wpcgJHiDTmffdU58zjU2FGwrtz37RVR3BwbAJ1uHLhahZxy",
  "key4": "58V687HaihA67JigTZdGzEtXZS4f4MeHVEADvvwDa8k9YixmoaBoKQSzmMxTSJpM4y9jXm5JCaTDfzQzboQLBbT6",
  "key5": "4Lhze1YCt6scigznM6W8DjRbR1ZNDjZdkxf35fQkV2LTrk64vWyBHLThS2MRYN5VUeJqMf6QxJibZjocJD7creBo",
  "key6": "43Q97eKTahtnm4npNaY4WJoteDLSnEkVfwHbRcX79eY4bP965yn4HqYUZE4p6Wh5fVbBbBeuqdsHPHFGVgP8ncrR",
  "key7": "3Eog9BdWe1owLFR4D3qwuYNb9RqfV7vbh38gSVsc95EVotVBqoPAZkoCo4eVYvMnXmGjgJNcLCeKb1zh9tBqzPjU",
  "key8": "3ZoNob25Uhv97X1Srr7WuS17uJr3c7oepd4eRfmwD5jyzJxdgKzbJLUVBMp4PfCZdBs7XxhUa8bwM6zZoJbr6vo1",
  "key9": "4z9y6TU3LnSa1gJe4fSWimC8bKDjvyDUwJto1Ub99Udw8Gr5XKNTnxQLTtQQjqatsghVjF6Vp9rPJN6twcWgdoor",
  "key10": "3KcyQPfetX6yHiHFcYC1UwFDX4gfHPyu5z4eBZTsrctDJprjDmND9mipRcdu4cpvMNZ9cdS9sDPqvupHj9uWcDWR",
  "key11": "3WBfV2hDp5kQT959vbJAXWpkvh3bEK8GCQ8TZwFyoKf8qAELghba6rm1RT4AKVjNvW4iF2hcAYhGWeVdMZCACicX",
  "key12": "5429bkv6RTM3RXTeLZmdAQmHAz3w6DG4y1u53JEe1dQUhHquRy17MCADuQvv2nEutSFMfioRa2GbvC2sShNfNEYb",
  "key13": "3nqTJL4XgZhMhpUQHtUF8XUcTNqc92QCtN8iAsqU2sZYneJmfbebyLVrB9h73V29XXuNNUPPEsKM3NmQsbg9zUTe",
  "key14": "48uvbKspG74yHbPJYvWDCgabpfRMHnDSw89giFDMw2FEv3sCfzhJXuyaeAXEjZTR5yLrHYNa4jjSYcYvaZenNFDB",
  "key15": "44JDLZ8Mvo9GgVhuNG31FvW5bRqwiwU7HUmZf1tb4HKp6p35bbrpyci4aQusj9Gpqb7eMnVJBhKyBf3juKhkgwvj",
  "key16": "2EwHcZybrwPjLLhzqqUezjihFAiX9h1AJN4S7i9W4jStFkUPhJiieuAKsnww9AaQuqAjLdwmyqY5McHQXM1asKE",
  "key17": "4QNzTcXEMn9wcTmGCNsYuUp72bHb7hv4Hzbq6TBcxXSLKznYvzokCAXAnnTsbmcjwoHdx8wBsNfGuaV53vpxBFmE",
  "key18": "31QdQ6WkVzHa2Gj4aASYwo6iZm13AbW7pPh2W6Y6wxD8zMHWyUsKGxxBeDWcEuVNr5Min998VLWU2fVsoiBbbwrq",
  "key19": "4gptYLo5xJ9sWdnm5GzAqDbHZYGxx6wrN9DgKwPDcLKH7nxpf61AAd6XYviLy29np9pQ45JN7uA3mfiqe7c7fArR",
  "key20": "3kFrXuoKZNaBU9MQhzUygWVE7h4X3ogxP9oQztVfRVbyGJvAbzthZCtdwQyBtJUnyvyQYJc3yP2VAjUYrXUZiqsn",
  "key21": "2niiwVp7cbrhv6qjqCQfk1D5tdnxiagZaxTiWnnxXgJMfaN5KWoXrAUyeCc3xAwgCVPjWkP7KeyAe9er5gJNHE45",
  "key22": "2GRbb8kCKfgyEwEngNPVavrtFaQqV2Vx68LaCCDoXww5WpCNTcUJTbjcJFmANgZVHDNbsWft4F9jYSmQjLrQ7yfU",
  "key23": "5mNgjx649amE7ibT1Puw4am1w75GtAUsc6znV9ybnZgvGjZxsRau3aFngZxz4cbckiVVVZZxeQpTS9mNpncoCsn6",
  "key24": "3AdwkZUBVx2bcGXWrGKFvqfiALfM72LLYX1k8YQBB5F1c1TVPxcyNaxgvyDfgvKcB3znBYo1GAdAxSsYtUKYmbzG",
  "key25": "zHZ3tpawHKCwAcMN5EoRfLE1ebhni4azkuA5Vava8bkpiqfbiaohncX47pDk6MkgcgWkRavgspuxvbeG3yoANX3",
  "key26": "4LXTbQUadsTzHHoS6ixnRcRLzfkqxiKXCTzzMBkW4QUSgUbw3DYJvhm2iCY2nKrZkF7zTEz2maikQu9rcBN5T6V2",
  "key27": "3NyinJbF9wJVbBiXfZfbtvuZLyj7efnwYt6eJQEN6Q8R7D6owzt8Q1Hs2vcBo8ezNm8BhtZvha4d2twJGQdSGLEX",
  "key28": "37BfVBWzC8PUm551oAq8wWsyd3Z2EZti6RFN3WxjbfrgwsGqQH9PEApmwt4jQkeJAVFbN7MEoJw4HzLxXEirqGCu",
  "key29": "4YewtqLDkfgt6JkdyuZw6RpogNXSuKex896caTkwcPH6wzvGdLK4et1JPvP6qW8L1mFWdhVL4UfwaHC6KxtMK11p",
  "key30": "45ou5zrK58fNnSuMkNLWLeAo8VrzEgKfXsTuXZ25J9WKfsfiWckXkycDqsFDN7LWhw6bFLza6Tdu7ZEHBF1tscH1",
  "key31": "2NX4mPx22486kaMunTYPXAQHw1aBH7zZ4EcqMKvs9iduTYzmne4G3hu3FfXboLaNQgSiUeF4cis347i2AAirnnka",
  "key32": "2PS632b2AjaynBxhZjUK3kQGmmkJFdM7BNyJFaQ6m2kL6zZzA31M5RkzXKFHvtXRbMq8rMVqj4DkrZa5PPpi852G",
  "key33": "4FTc1giLsydvaHpnj4chpUALcFkLWRXmTDdLmTXP2d9cMqgpX1T4YUE6qN8yNNHUBtHVaZcySk8LHa2zVyjXQe8R"
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
