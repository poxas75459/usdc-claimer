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
    "23n8bwLk7arytHX9ty5Gape2kqGvQavZsRdbsVqPpKv7mRBH9c1q2iH3oyZrAxHZVtsqLbaxyKYWKMTJ9wRmubzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CaBg6isseV6Ky7Jzuobad8MgXCLSB3d5w3Wi27oiHCupw4Qptug1F7o1ZjC9fiWDHNrTrasZWhJcAgwzsYcsudd",
  "key1": "5g7uTqAhvu1c9HXwc7sHTwBtRJ4suaKR5pgBzUXMMvPEbcDDKZttvMByr9oGoyooYUr5bcN8hbBRT2pfxHpzAnzT",
  "key2": "4rLJC9DCfRa9EJunXwVJQAxA1zVqD1dGfgHq6Kk9qQGDxzgXCS4JGU4rgGb6t1h76xGDwDWztmvF6cthNZhezG5Y",
  "key3": "2sGYbkFPUhKvH4ZwzrTUgJq3cGooEMRWjt2huohtj9mfzBi9gnX8ZHonyrW2JtdyZnKFZMK88pYfkwLoMeTzydMt",
  "key4": "3veomSNyDttjiUxDLRbs82Dm8R5eZpuSGPEJKiebYqEeJz3b9XEMSFuBv3LAZ7vTyhxbJ4BRwBepQFrVcT23fSqC",
  "key5": "29X5spYaPo7BvLAX26Fq1oyg4QHCDwH6UB2wR1zZ57hkJGUUfTxQuTzDNRhsdftTaTpC4W4PugzdXf6kcy5rosSb",
  "key6": "3hMveyGf7VWYsc1uuDjQNckLaWjx5mqesdz9esniqZvGdEvLq3NuXDqtkMwc5vrjR3MqaGWyan6JTpNdez8gPyiV",
  "key7": "2mbTuA8WTh16n6fGzMiLFj5UDvD5VafXZDHUUAQL1py7z9a7twXs69GQng6dhrp7b1w6nXs96SXKr3991ZHrt6gN",
  "key8": "4sxGudPVeq7BDgNdQMA2eNPJWGJEhV7yUMgbYRWLSs7vXwr1fiw2SmUvPEyu2m2gjGYQKXxPVM5we4RPgjYC99KN",
  "key9": "4EeHci5dzoCBjGHeB5PRUbQ8wBbf7dA7tFn2fpo51XYcijstwPqKj9DMCP8HdBZmoxkpepi9baVRQBnPJHP8U1XP",
  "key10": "4ZB39B8zuXAWRTo9LTSvuWu9jQGrUfcot22FvPAJm4NH75faR1HkShHhsMnzGgHtceB5rQ4bQFEbvKUe1ruweZJa",
  "key11": "5nrPWs85JPv2AJfmd6PNkUxGMfUGiYuq5oQQPZvsbRrhpJrktBVHb1o23B2CF8TD5BbhxHbNzHBps7NRQNVeTmup",
  "key12": "4tT6Pgu77rcZzGGkkKYwcM75qjHAqnBfnKVMFxwNUBnWGTwAQxEERwz4XQvGwn6dSmxAhkNrksryeJHHD7XuC3zu",
  "key13": "3Mf1UkeZDDD12QFYHmxVfd4vMRTk2GNGkhojDb8uiy2ir127xomX2nNj8dUh2bs6bfnn3NNoogxuZCgC2VT5nJ8d",
  "key14": "3TD12cdw1nx3L1m8HPZVn8eE2P4kXy6W3FeQKo6fekxUhc7A1hRZ2am5xrFFBVQDQtv32ff8QSijfyPDG1nvcjXR",
  "key15": "r5ys7RTFETtnwpnKL8FvBsfRKs3Gh356tN9S8v1y47DsRNr1ndnLKR2bJ7NYutvi54V2tRgj9TkaU7FMdHvHuuh",
  "key16": "2jST6eiFYyHfNvpyVywbqbEWGmoe7hzbdPvSGdSyZ1wAWM9MthhFjETgasfXVz4uQP1mEe3bsUaGxmRaFVzAYqEY",
  "key17": "5Z8dWYFenF9YYLz9qPamQ2bmQU7LksgchGnW2L3craGQ8iN1zeob5j9JDQsbqPUR4zKnpJwANi9PpFJ5aPRcCkEj",
  "key18": "39senL3KtFTrNJz62XF3MmEWLcRKbxY5gFi6kjGFHGj7wRaubGchynHdnCR3TKgdhTzuqpBeSZt9CeHvPTvNVATP",
  "key19": "2mPrxJwoV5ehW3RADWnxHtMxo8B36uU1Cuc9FSgNf3PijZe8EE1Gj7zEjdfXoGj4nuA8gy6hRghTyLijTydu8dmn",
  "key20": "2TPdiBNJG9BrNzhssNh3aSoRCq92vFqM7maPFGHrvsyNJ4BZ18fs5r7UrU7TSVTNqA8JnTiiUE8ihmZZV67nYxDA",
  "key21": "3bvrY1LYN4eNhFcL3RJuZsrqu8SMwfj73c7hwKPHFZa4ob3LkzECtXokg5is5GNKMAVFFHtErZmcndUtQ3UqrfVn",
  "key22": "24wbTbWV93BbF5WPp7zVXStpGsEfbEm5sLi4wizQuLB3qwXAzJUannrXGRPDMTjHjDB1o1WWpD9TqbXqVmryGJBr",
  "key23": "5FeBtE6pnzWWeUyBFXHQdvrRfjLCVm4UPFxnaeT6nzdLvbwrnYnbQZDoCM3wrCRwpYHZBFGTT11MtbmLEqi6jdmq",
  "key24": "47aMfktv8RDnX7zoDeEUEGHmWcJYNbi8PjTEz2k1C72LmZqdyrR7Jx43mwLuXbAqGiA1PEV1GPW4wMwGeQMiMsJU",
  "key25": "4fF4dvhEcyeBr8LAQoihg8LpuCX1i8xiQcLbGiS5Rb4e4xYbU88c7ca9RmHA3eQr4rdr28Ayx8LmTdzPVKKyMBWL",
  "key26": "3kiSAdBG8HvqQxPmWyp6MsqVXxUhzxLpmFC4e7YKebdWNNBMY3zf8PS1DTBJ8Q4NLqbEFQtFozmbwYNNrwV4VikM"
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
