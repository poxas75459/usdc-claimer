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
    "61k35bR8NWfxqp2YmMFmv2ZwBA2N5WB3btNaCw4XqqAqYrGHvbNQc9G1Cd6LDp1TsbUV1dS6P4v6DFSnoVttobpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VXf6yjr2xFRg3NmCVsWkD2PpUWKPQanTyfT66ZrZ8NrBuWq8CsV4dQa3kzLoz9bfF2wxsepjFU9RVC9MdmgxVNW",
  "key1": "64mEJpNxn6w9Btx2aMUSZaNhj5UxL9pwj9eLoRhAdgMfGpWR25EjDskfamRg7eU5LEjPksg83Y5eHs8Suo2NhtZA",
  "key2": "3GvzrrHgquzqUqypmD6Vw5RGQMV5ZJucdDGikmET7ETvfhxwXLSy1foZ1DdYcm44q1FFDBWUYGytToGYBe5CBA7w",
  "key3": "4hAp9LEVVk8zLDAxnfnyAgSGYSikuJ3vNJQMnbqY8FVZoJJnTyDs3XtavWT2LCL4Fvj3RahUZbLJKtLreB1WDB7Z",
  "key4": "3qscM4EW2uo1hyP9xSX1E9ngBmcv95A32ngpjxgWwEAEbiTZNWAUUQhYuzagD9zMUkRxGR8mC81tPZtRSooZFdZ5",
  "key5": "4VW85W158fSLrn7CiHZS2omvrbUmsGUEYA7zPJGJ2mDcmbYhK5oi2UPv4qXP3PMeuRSjkr4Dqt1A5EraNqzpRfYk",
  "key6": "5GtFRGckU75BPVPzd6j1RtPCT7JzhADSGBhb7qkUVUPnT5GdWcWp2G2LYQ6hk7BAukwrJWYf6GgGK2L3argHcA5n",
  "key7": "2UjSCy4p2XTamCeUve5GEpwcgw3sn8xr1qY8iU9fyRtGTPni67XaoeH7cjdWLzL99qKAJj3CL7c3EZckuzfXKtg3",
  "key8": "SMw7v43yeJZ1mSL8FKSm2HLX8xaHR353jbFjTFAJKB8oPKULjrzVnBGaAb8efyaHZTfQpyrGaNMM3EgNzQy8G1t",
  "key9": "3aYJLZVF4YcaPDXa7dstNpmQLM43XVUnJdduHo42JdLRSgy2ZRiWr4eqEpKoMu7EDbgUrFxfCFRicohdbz3WfUGD",
  "key10": "4tzdixi3C4xPJ6UB95735XbVtQAnmaPj2VRz7XMhY94E72cJg1JUABjvVSCrUq5CncNGupWp5ny3ULcwL5c8hmrQ",
  "key11": "5SrHv5j5hQcozef5uomMpYzbwkk3ozKpqCnbkUsfkyKEftW4V48YzHJUGSyyYWLz6bwVHBEVi6WvCyHtzpth5VGj",
  "key12": "5vkmeeTYdVyFkX6M31LRZKx1KL5zBJSxnZUZXyqMmhAuhNh7dzxoQnZZyYLv8HtqqmsAHRsdK5NHe4LveLQgt7N4",
  "key13": "AoyeKNUEevx9ADhhDSc8HX2KY7cGcqpuCTV3aLDr7b3RiEWYCbuE761CgXwse9hgCw7x9gA6r4FmE5G4i7aCA6N",
  "key14": "5qGH1ydhKW5KFZg1xuvk4e5JAfgzi8BEHMg6ocSZNPLpLXbv1o3w4QJHBWpDs69hEeUd4f7214mxqCV2UrHFUoyL",
  "key15": "4srQZouv8rEHdQ4u5E8JvsabDB37q6reZ8htt9KdtVBucn4sjUdgSZJKWjRmSssvEKCr9AUjQM6KCjDrC39AsKDS",
  "key16": "2RHyg7H3djEPJgZXgFpREcs8j4tZHCRzEwTAMeaRWaahpXMtjdritNPQHes8e6zhFunP3RvAhhyVbmjMrvs3YbVF",
  "key17": "2JmcJgCNKTWcXrh7KrnKr4jLREWGKgsT9PBVU62BE5iE3XiEstSVx1bXVzJsPdMoWbY97h2i55zwhvDWxKpXgYb1",
  "key18": "3CcZhn1bRo8Kfr7DatVzdP4aetigGamZ5vavxrWnpuyXyizWbryvaBkxYBQk3xj6J4c3jBRgSj8TnRAv5LpwrkGd",
  "key19": "3cGzitGaPdCefRFBfGo2WRwWYrvPwFHDDnWZb8KbqBPuVvabafBJVFeYMuC3EdZ1Ak9qDucftXPeCF8aTtf9eZAv",
  "key20": "LkNn6jF6XbfVTiGiZxBFnMoSUU7CGuiqKHKb1YsqW8V2mXwhkgFRXpMk3aZpJndB5Z5zij2tK2MDoXcEmU6ah8q",
  "key21": "5bwmzedZQbQUdRGnzNCYreWNGEFnHbhRBXJPNok7A45jFU4z7yu7EYzhFsXKbASKstAkmVKSUxJQkinvk1fkrrnY",
  "key22": "4V3vsv5SEjL2pNR5GZJkKvmzbf1991HyMyPemAk1KcjzFCJk81QUkYQxJqQgYDe2nAyvWavthCJXL5ePp6sMH8Ck",
  "key23": "2XgM36RGrLsu5an8bJDy8cuyaaGTLU1FCMcAEZhVFySfgRtgSB5aSKcjbXgJcNpFv3f8CbSHg5NW8vWL61QtEKrm",
  "key24": "26fqAxBsi1eSqF74bxx4xGdfrvZdaexnxWsDWmbjuXS2t6Uc1QA3hHqY5op4ichJViqhwc6iQGPvoXio5CJqctW1",
  "key25": "2g5UkAx2QrqfQmMLy7X4wZNVCcYusxmvJ1aqt133PQfHBbLrspAWYffmNeTigyfrqSDxke3mggXQhMU8cp2ySHk4",
  "key26": "39qPNpoiY5mroiuCHK9h1uhwY1ChJnMhuS16doTxtv2dkB9FnDXdGnesdVqstRbDReqrV6pAyhXY3fCzLGWZ34m8",
  "key27": "3yLUwLfhCkZw9PUYor2C1kbJMFyf2zbhV1D6fkJ2MFt3gfpVxKu6FaQJyVEd3ywtFQAcDwnrtEGmWnti95HPtqZV",
  "key28": "23uJAE9B2qGJMUwCUmeJeqmLprhZvdEi8UXV6DmGDXDbk2qnT9EZ2ruD9CZe4BuCmG6eZDiPJD4WGvkxeinoJEwB",
  "key29": "EyGyMUrqNJ92Zb8dR4PrDPZKNbVqMPYQQLCd68kP52Dzj2t2rHQW6XYeuqFYcaEJuBGEzdr2HyaUNHKNt5rVDQ7"
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
