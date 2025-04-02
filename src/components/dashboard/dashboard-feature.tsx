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
    "3ijg4fXqSQUTXK2HycE4jkRXUL1uUxQqz187TQDqzawYTNGDjJRSsLbmbEcx9nA7b5FnEkpdVd7rn1Pcx874NVgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XFX5qGhmVHVt8Ffbci6WRUM8FQ5tBgY3d29aoNmPUTsyKY5magbKBTbr5TDJB9UBt2Yz2pY7GbCVVFHxNV3BSum",
  "key1": "4pzB2244pQsZ2PS436eXXUTfPQE5FxaRkLeNkp9NEz4Jvw6GNTyhvRxxu7EvxzQEFnjRBFSbcvxiGMPtMdDR96NP",
  "key2": "2CVMw2V5LcPaSSBiVJ93TjajdnYLBDPRUAkUdvNwquRmNMzDxJVpvGpNdbWEozY7ddA7hKFDTYf8etqqjn52R1xV",
  "key3": "5XKvRrqxfVRi2K3r6SQxjWfCkqUNfQ9ZiXtH1C9EZumds5jvFcLMBrAKnZ2g8W95iE7B3fNF88wEAiD9Dnr9SPp2",
  "key4": "67318KpvR3znefcJfnA9QvEUkDyZ8zt5vSJkHwqeujgbpvAemqeL3qhqq3sKrnTjCLigWgCJGnkgKiUwujHo4BZq",
  "key5": "3VkTPVcYv8Yosi27wnj4MiMR6utQCUKzFBhsiMK7GaP9t4UVTsm1jMzAGqR3VCTiAdAr1p4at7vbgYDFQsZAXsaE",
  "key6": "55X3bei7sXZEdHR7miiGkKyGNG3M9wCXsFr9KkDSBj6uwpiGGwQdbM1jTnvg3Q8gNy1PikxnF65N4PFtkB6nkPyb",
  "key7": "kja6EidsribvjMQmdV58AWNAEgXZk4awovLC5cSSgezYNEhh1c2eTTE2nWDqv4a65ibsy2Khv43BPQXLyrLqR7n",
  "key8": "5QEmCaRUtXDmTqUVx3vWXuexpXX3vMVpasEdB32VY2C3CVpvwvfmGFqLaxAW9Qe8CwbmCX1uf1Dc9fMLy4CmCDPS",
  "key9": "5o3bEsuHD9NqBPdmXNQxACtqM8yzJxgHQcjQPX4VhZdUjeoXEfWHLMvxLY1b5dVRHM1aWxq3BDeiYaMbKXCxTizf",
  "key10": "2AHpFr9h8VFBQWA6cdi4zHwaASYGmqGHwPBTEsskyqpeLjrfhUUiewuoKSvyZJSuft2dHAbqqdFFHECctwNWnXPq",
  "key11": "2ZSMgsHJmYSTTDzX15qWVzjgu63ffTJaMs7Mf3Dw3LAvsQ8kfgW8CKdBZAas9zdERsg5QFT8wYAJ4YDPa981jtYW",
  "key12": "P86VyxptpM4ZPVBVHWVkbndohB7wPm4JcgmxZ8sDB982XdGZC6MNb13NegPJT3zvciS33xeGji3BF3TmF5ryENd",
  "key13": "32wyPVxiGxSYGu8vnLZfL6Q2zm36YW2DgsqZ9ezaDdbKikVGttB59AFgbV7QW2jk6cYMBnHX4MkqCzcxiGnhKTyv",
  "key14": "sbqPW1sqcDWHLbcYdATcmUeAEQseprYoMhM4kBCU1ADvfPwdTpQJhX7tLqKfzkVdNdgD7Mrh4kDBCtPfiu7LP4v",
  "key15": "2RqQobBVPS7P7QeazqfsFp4mc2pAWAdx11aARTUDM2rwS6nch1kZX5JJjjgURKvNxyhpeyzDfaRaBr74czrAW21J",
  "key16": "4KAqM4r4TmWse8K2rCkgP5RgXN6yHj5swd69RTGXn8d5jNUTS92VHvpGNCLVaWyiUXfvLkSoHqmxQ9ULwyVQP2Wr",
  "key17": "26q8tdikW3kd6th64oqhWhMdmGtiEKxRCvVjKxWdUi67kyBKncLgvkpwj4kEbF4GCDryCxuJ4sQfThTH3tj8Zq5v",
  "key18": "2yPtYPmLhaSiiyyLFBX28g8JsBqRP8kEupc5wGHygdADyqmgcP5JRiQiUC1jzbVKp4Dwugaw3S5pL1GQvQnUYnop",
  "key19": "5AfRWLrTh23qvW19yrwxLN5KxcBCfzXTL9VhVnZ3iqzzSPEaSNuq1GR48DGfETaVvdpJek95c3Qa6M9uCfGrJmms",
  "key20": "41G4d1CT2S3MavBKvChyLTTBN2DVFSBzKyTAW2JwNyH2BLk4ReXzfxim37dYT8cMYqoPUsXnxQiuQfQR8b26wpMC",
  "key21": "3ju2aFb9maZWK8TSRV8vCjyVWcz2pT7enQTw8JWrdKYwcqnaWKctk7gbDFjervhNE3fxcQa63VDLRmbHntQuwRrT",
  "key22": "2KK4YPojyQQ4WwdN7yBroQg2A6GfgpqwoHDHvkbEGGXYMZtyUR7EKQwhfkJZL8UbDRn9rTpgfqw9BACzwzCBtoC4",
  "key23": "63EQbSsWCrMQk1tXUAFRdPr7RDFMW8pfaJyETLbhWrz77FKeFVcG1QauYNHWZMP4N4NUW2PZz5d9APz2B5ramrVx",
  "key24": "61btHDNcbHWBVNAJHw56xFUGgYDsPggHSwnaFeuq4wKFe5aFv325Y4B1eaJNR8MeFUEBa2fdQAnSEY4He1Cn3vbg",
  "key25": "DtbEc5DymWNDtcDPVevvM31s8STbpRfKwjHfk51rR1eoxBiK4LtfWbLn6x8oXwxJbu1YGCmUqSzRUYFsp9co3GP",
  "key26": "4f8JuVocna1U1yWQiFXrEjC47tuiYSn1UrWVMZykJHj5gqKYm45TzTAnS8ZVb5CHE2juENaiwvJus4wscXEsKbne",
  "key27": "3yz4rbGk3TcHfebRBCpMakiJXzjzRnevyokXTigyf3idmGNFGkTb9dEJ6fQkMktL8mShvFUt8xN3TBCzNR9VQY4c",
  "key28": "4riuPRuN61syRZ4bp2zPo4xF9UX3SQPofsc5qNZAiEYg1W1X1b2ds4LaPa3y3RRPd5hvac5SbarTgNB9XhMY4xb",
  "key29": "5GL3mEPmZ3hNeLhrvpEmeJrRR2zNuatXDvFqZxwobhy4UaRLYmRDar3jwWNLcB3YNVnGEBMgz29Rvk5bRyW4bNmA",
  "key30": "48M2hfER7tK1CsjHTnCtpJ7bwB5KgcBsG7oyvYuvN2zhhS2Ax6TJFX1h5fDj3mgYKmjbgGZGPMnYuUr5BvVU1tth",
  "key31": "3cZEpSuxgxfjPPzCcRDFsNH8Vz27aMbK4Mv89UV6CNrkVNo7s3c1dRP7soX6eKtNCfB7gDcE1bfv47L6n7XjhNuK",
  "key32": "xz1RbyYtYebFdD5jZzY1aXxsPDBrBFHGkiWn8y1M9qd5RPsvEEhgpYuHjjuA8G3gJ2SqVFnkvTjRLWenA4pXL7z",
  "key33": "3euzksJpt4yJQwjk6hNrMr16as9C3wxtBJ5VBPn7pNZTdiEsVpVGQVtfoXyaJaBYPed8jjpgvsJGTeJ8JmKpEHX7",
  "key34": "5CDVM5mQdu5DsfvaE4wjo8oFwPp2LsK9jjV4Ld84HqgH9CsNwegUh7wYGNkzZT5wa2Sk8W87FyfpZ3mPyWnqbB7j",
  "key35": "ph2KtDG9C1SaBzwzfaRSJGE3RGZ18EEJ2Xkkoqo8yx1xX28A1A7KkFRzKr6u2dToLtZqi97AVjL9cgbxvBz3vdo",
  "key36": "4ns42Xv9ruvQFuorAEyQtWZX6pBrVPxQr6GKEFtFacoSCzRYxHKBFxp3E1LQHBjfp3wAS4Pb6rQZHVFmDqJhfZws",
  "key37": "5shcVbwY2QP5wsrgxdoyrsXD6ktpmon4vbihTV7gtCGWdVL2qpfC6zUNtfeG9L4s24RY4EyAy43KDMQXztXmknWY",
  "key38": "5dkiCCgF6NysmacGHjgLbiAvtFcBEAqp3q7DzSWL2VsmUupDFaUq2HgFauyufLKtiwNZNGTZNq4tqzqPnRVdnbyR",
  "key39": "5Eib4dYbNPu4SuUQF56ARVfG4Bqjvn46rZ1Hkim8Wu237kGDUfDCBUwCySza8JQCJcWTLqt9tK8edeZhPRFDzjAu",
  "key40": "bh2QkoS1QvdEcdoahZapBeLF2xvwDvLJUvbuhB6UPMrZn89EUuySqsmBey6GqEkaCJvbd2oNZuUn7w2tdrvesjD",
  "key41": "4C2MpRHnUWriHpX325oFDKb8bxQ8EmdM3ptPfkYQw3zXtFiJxaNfzTfeSJyr3PjnWKsJQvZvj7VZFGko1C8aw9Gh",
  "key42": "ncy32g8piTuKXEtLGpVSvrPQB3e2RCPU3vXjNUxpnLU37xGvHz2ZMnbAEZ73EQWwUaYGnSWCkCT3Fd3rrpAKX7C",
  "key43": "3bNKTjoTporX5EEckFfK8nCN7WCEKQAHgASmvwNDEDUAoQEQrrqYGCiw7x1NTmDTMuu7yakwHnM8wsYnjH5La8NH",
  "key44": "H8MJ7BnD1Bm3dUXkpMf4kymMVuMrkRm4LeL9rjXb38ppZB9JzuzM7mqdmcSuym4mTq1iDxVwJ6q3Q9qQErE5h5q",
  "key45": "5aGGTAdzmEy7YGtetKzDLoyPZS6RvDeR2i6EAsG4dBqU5Lb5BKDwXgxsRLTwkadBNHZnirr96a1j1gUrdibqWJZ1",
  "key46": "KMeKn9Y95R5xt9TQFKiEpH2PvmpYkz3mJBMUmVyrbikfj7Typx22ei7NcCNEUjn1GUEGbyTva1YJBEq2uhKLWzQ",
  "key47": "2YRpjbdLS5EiwfCxL4XkddBqoLrvwZ4djVVHKmXYutdxz8aUHqcd4axBjGsQhP4tmSf2aVKyAYBotXr7TipYyXyZ",
  "key48": "3WEq1pYbSPWniexYoNm3bFjuL3WWCpMXsrVA6fCXBcrgZL9hf6f1NrdAWDq7dJPESDSNCXYykABgbiJFZHvv5CuR",
  "key49": "351USaEwoNrdiRUkuGuzb3jZxdqDVmYDLXuBuvFxGzPQHn8EexQkRNumxVdEinXsSgPqZBarbWQSZLP6sFxsDAsD"
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
