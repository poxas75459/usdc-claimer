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
    "5zpPFBFwYmCf7q4PY9Ue3gxV9Um6Si3yVAQrmT5JUTbNrge2AZ7XUx8y41sAFUffc2K5dykWT7isPDuKd68mBxw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yoCVRekuhTo5gaWZuCbBRF779UjscwtRavy86GBh6srgkVh5nPUGDSrx9B9MgbZAZJwJ6pSQZ45SnayFcGsihy1",
  "key1": "2fsfbL5v8a8MnrPi7P2WHSypD4K4fDSudF9FbUbtfjGf9RQr55q3FcoxYz8Bs63razMs3GLyfMFo7mFMEzvZRDaT",
  "key2": "3puKy7t9d6JCaseTPLzUE9YQ1DeFC2UrfFh8pNSH3GsDCqDYdcye4pMUMJzPeExbM7xWyspUzFVNizXgsyqmiy4b",
  "key3": "2o9vEE1CwsGVmB3FkpsaUkig2zmVBTJE1zWtAZY2SXA94UDM4KMVzMSUi4usX79UQGkWHTWN7MMhj1QmJTzKRtCh",
  "key4": "3BAxZhPDTh7Mf7MqcX2dtCenMmbuostHrGVbk32VTtwRoP3XrBvYrrZ3Z16QmoQJMjxbMCKXMs5xMUshz8oRJM2g",
  "key5": "ayCXybWt3v53jZqfqgU9eH856GyM8N8xKGB9Q6a8sRGPvBArvs1uNmxZa14ybhkk21nRoNUGuWQQTvMJUrUqnaN",
  "key6": "5Qbea3D3mQ32pVePJcFwR9nE7kGz15mPq2z9quEdFH1sQDcCeDFBgu1TxV27MSHXs8E6SRk6L7Jnt53T4QtyxTSK",
  "key7": "62iKA1oHW9Mmpa5JS4PqTEmpRjG7JgutFYuK3KH67Xdh5JBP6P7LTtkN8LWxAwSKvw7yatgXuXK5XT5wcU9AKfCk",
  "key8": "3RQZ2CYWBSi5pXnGB7en4hCkocrfANaQvWnbfo8RLQiFLs7DyHw3emcsQyuHrTgxRviCQhswg2ZcDMcCoxUjNnfS",
  "key9": "ED7uNcrA61PFDepCUuKeYrFyWLxuVa2FyvUb2eh2ErbBXkEGwsZQLYNitdU5Hrnq7ptsmQtaqZUBFj95PKa779i",
  "key10": "57TyPKRRk6NRx6vcNxLE9PANnBeawmFPgDYxX83Ybez69uGQaeVim6x7MQYTzvx9HKvCTeW24ML76E3jVKtjwJPp",
  "key11": "39RcDFniaMnPCbULmX3aVJPPxPTQVceF3bLFmepfUA2zhyjmmMm7omQ2TaKV3bNwejZJ8iDYRmSxBRbvorjn5e1G",
  "key12": "4GafMkWEeoJ7vJc3yNiocCtKNEcUAA1BDFiNfpnr2ppUvbAFbt6r3ryVdcfnBZxJ9pquRXwxFfSq7ecMsVLHE22B",
  "key13": "4BGdbwGuEf8M571McpULQLdEtXSZJc6mCNfRPJBHRH99S6DL6oDgCyKJStLjWX8YGkdZpDBRusdK1EXR2kfsbChV",
  "key14": "2MELe3d5qvgaHQP8SCq2K1aCjvHk4QzSKfaH2RsYWMWzLXLSWFkHbfkcWy3DNXgmcd7DyK3hwNsdLkrKUtpXAyTZ",
  "key15": "62uKC2wxfTe7iWn8bamt9jpfSxGgunmWEf8K8YUx25UnebYJQWuyAHZJVVU1RLe9tLqp2JPx5Hn4uYTKVdHaawQR",
  "key16": "EGC5uqFhdz3k87A7fAcor6p4nQqP8KSZZcGRZ4k2VBWitujbPm9J6rSDXWNAcDdAoWyBPZznXMSUKb9ypTZwGrz",
  "key17": "4m72cWW24j4sgac3f7qiUDGnRwpywAfCzkRRhkjE8dgEhGnFjiv6kp8NjaK1FtTXSFrd3G6JzFjWFQ9SuVCu3jRw",
  "key18": "49PWdnmRGXsGuNt68aXgPrcjxsQHw3trUDPCgCYJAUsFQvPp7PifTrNRxdrQp3yk21wqT8LQZKHQnNQdxMrq8Men",
  "key19": "4cwGDwxfzSyrvqWZULYEUujZ2EfhdH6xorxN3meaNQtJ3NGT18KDqGYxmxTZ4a7JedPrYva6CLvrVkHZAe1YcAdg",
  "key20": "4Tf7ZsXDeUaYD3FCunkzhKqgWQBPsEJFs4Y3JeSquzansHmEYuLLBmMSqBbNaftpxsnTFvkkfgRqVmWQa9n4LKrV",
  "key21": "5QMJqSE18nT55uPcvksoMdc8G3149MopwAmEbRiJWTUpfoRjZiizjj8RZbD1cazxUqWpJY8GWRKGhpfggeWbCzTY",
  "key22": "5Xx2hSFakDZhE7pEziki4UaZJs3Yo14vpcjtC6pBLMdBepjhnwhfYUeAj9dbt6EiACAsayQX67wXCrKs5VcBVMtu",
  "key23": "h3cBZfeAVEmjRBNsKW24PHJXuiTdwvsxRLdh5JGopqfqJruK27LvGWD2APogsWxDDB3YNurkZngyA7Uj2q296bN",
  "key24": "5z7cZDqUAXSDx8mAyHjBwVvVChhpkPK9TxWLn7ZB99U1WQxD8gUXs7DJrAjjuwtAS32Kti7cFgzaaaWoaUrL1mA5",
  "key25": "5FN4tzkQUFTTySz3wmSNnYep5tS4SQSFancMc9q9a2zPkZDBHMdQP3Z8QQw6XUwvSg3EzmkAiy3PhF7Pz78S6jA",
  "key26": "3CAWY1WhwytbEbvbCWznqHUCk6RitPZEYznVgvjzMo81mDsiqYoYUwoBZPJnD6KCX68qqsRPKsAwcZUnVNuedgVC",
  "key27": "5kACd7NNG6HYSUki61mMVoFBaE128gMmVpCWaTH5bJRAxz74jPHCohSanuCAisoRxFF7xSGWJuEJMzaLbe4zF4SM",
  "key28": "263yKMrN17tg8eTJi1XFP8U5cLr3ZXeT2Bxk9sfjjgQpx8Le2bBMn8DGDhwDrXkR7tWJQwEWQrf3LLCKRTabHUg9",
  "key29": "4cBg5zrnMPPfBypvAhMzn1UXmYpRiwaCqZ1LN2HT1DRWSD9Ztyyc9WpFPuREnm7irjvTSsiw23GQqWiVf2LqyqVv",
  "key30": "3bFcJ1awTpGo3KYPeJ5bHBHXQB6wKZEVvqg8sQW7CwQUrJDdWDKc4gRXzdTgv5bnaixkoJTcESNC5jH1AR8jd4Fx"
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
