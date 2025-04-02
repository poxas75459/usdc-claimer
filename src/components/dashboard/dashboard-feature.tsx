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
    "2QZyxoRycCYmrfALTkUZL6g4U4DP36xoWAZhGJdabp8RaD9HmcjWEcUoWWMMFZXyB1LKuw1tDEW3Cu99wcTwmCsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zgrwkoTMqG7gjwyjUfMKbrePPuSRa6LwUUpmF48bX3QMxY3NE7oXQtbcMSwX7TuLCaZ7B5nFHqghhC38PXDdEvp",
  "key1": "VSudfEY4NTFw7wvvF7caqhfK3BmaRXdsJGwuTthkd6jPDgmdX2JFrCry6Zaydi6Pati7QihoziF7AxJn3Sya98d",
  "key2": "4SG7zmXLNYK1SKAsDCcrV8ivJwQse96xGEPdCptbGKMK9MUWB4H5cm68AabBbHReH7gFk9627QzpU5nhe6KShcUo",
  "key3": "3FsSkmpmZhWB2c263DW4H9tv2FqV8ygzWaSZiHHZshg3fCe7qC8u6Q6vm21G7dJG9YZ4UTmqZ4vf2hDDroStvQGR",
  "key4": "4dq4qokGfhNViCT7Km4mfAvVoZVEh3nPGoEW1CU26Dpr1C1DYXKvj6HS3Fs4d9wuX5jdLEkjfW6NjZsBUt3dS6xo",
  "key5": "5MjZNxjcSrqMywqyyzgUVhTwSTVp8C8Fx8saNt4PMoj8jB21S7473PvZ58rfLjf21fDrPqKwVLkQGQCmAXRmmcjp",
  "key6": "5SkEMotgBKdcCKk3p7FWktfAKDfMVe96tLMwGV41r2GsP2LDXFW1MLmJUD9Gfx91KCfqdMevA8vpfYWmYvxpndF2",
  "key7": "2KEY7TvFQdLYZKwW72jZTcr2wxocG8ZF5okPCLKt1G2ErhYQsLEGgaHL2h8t1Liv22c9m7aernFC3Vpyt5QjSz2g",
  "key8": "3yE39veSegcopux7u8fgA11FZ6iQB9j5PkcEsCUSBaT43YdQZzAZhsankkqFUaGYwzvjv1oFUW4rSBh1a7cr1TY3",
  "key9": "2Pcsve9sWLgmHcR6FntQ26YmKwgMQTiehjAHLGb1YAWW3BBJj9YJAvYrbDCPKNNRFogWnp2Z7aFydicnz3dkKMYK",
  "key10": "2iCSgZYnj7q9iZsGH75A3UTeTPzyUVbYNhE3kKQMPGYCd7rxdyaWbXcPWty2KP5av6hLwuh12rnT7Dj9mQLhanmH",
  "key11": "2itmnn8n6fXhLedMnMjZtarVgnUn11bsQs73bLKVL78XTYahtzwSKKBh4buzpuaxpogZgUpTR3PFKDqRtMv5JkMb",
  "key12": "PkMiswzbWhmE65rDLNysVY9gpq7WEG1ETMDCSWVfYWq9Qqjqn171fD4tZaW85nczrGAtUvxZaYnnjPaYSQocHsL",
  "key13": "2J8irXCRZGpLirWQ4u6wP9Kt7r2vy2ug6xFRHLmin1AfPtHUmSHe9Y1eL4ygXWQjRVVFHKXKjZhHPTXtqQ36Zd1h",
  "key14": "39nWjkJ8AG8p68zsBJ1ise9pCjmkuwjL7sLZfLemUNhKkWfgQDRBfHHhgnoYRrJoRY9Q9CkiF8DA6AuynqVdNps9",
  "key15": "4RKFqfQxuvqG85wiYXW5phdME2XjzCgMBr4qwXVjRwggqti6ZTWwAJLQPSnMskKi3osJ9AJRJYqXN4YDPiJzJ57k",
  "key16": "ogqLfe5kMqQZ3dfqihEEdew8d5KA6HXXhVirNFFAEPNMKDJCK6NJVs4FoPgv4XeC3cyWE4h5vKsY4MEDrj4gSHB",
  "key17": "5r1F89tc6cNY3f6QNVjb25MWzse9MJtEYaxgMoHNz4snwa15Zk4kFknBzUZPNkNsaehFT4kw3At6SkAEADWBHQNi",
  "key18": "4AcY25ToT2WLwaggqYCLybT7BHpq92ykWYCb4xzGHSGT1hKBY9nSvN3Umj3wuUsLYc16MiffnA66aDHebrtn1Fw8",
  "key19": "rjs1VUBy1ZjzEN7fxkx4j1Xd2hpq4h4cczwbg4LaGEtTXYVkMBkaXWKxWFxX74j2UHjWckDAdsrJZeKiwBJus3L",
  "key20": "2SbiAW3SQoe7KLzjJMDdNm7wdvwuYx5qx2UKgKhzeretdqR4XmRtrGe7HbskjENXuMGuNfAfKD6eJpv7hLkfP46a",
  "key21": "4DDtiYkS7E11Jq6kGRJfRPgQtFr1G2AqmUnv7gH5q2ygsyFDCVrhmDsYye1RS9vqfB9f4UQyYJHXkDiaD98cWYsH",
  "key22": "5MB8AWK1YdyqCrVpKWRHaGtCqHqVgQMzjaD9vqQp6mkzY5EHzcYEA5vKEMTxArECPzghpAWje231Sbctd1xenMz8",
  "key23": "4VbEAWPGn3JkLwYjJo2taL35aTo7rUU4njvP8s4G93xZG5drjnQMXtbLpS2Kgu6VJmgUJ4gXyPdUYsGAKNv7WjHj",
  "key24": "7Cd2K7fUF9HNQoHx61x44xrv4ta5wwhJhs1avKob43pKVA1UU8Mqr85nyGfAn3zMHaiw2R1J5u48PP2iXQLttGX",
  "key25": "4mjHqUqQ1q26vExe9w5rrKESEHVixXeeRnzoy2wMywpachLkaz5vcBvW7Jgh8ZuXqDNBVMq3JoW7G3Mu9cy82JTL",
  "key26": "3e2ukyYDWy1TXTeUfhtssboKQBha6nLMLS6YkNJDjDtAHqXG42gf8jqPLYVCR3WrAJibnFSiPq67g3kq8z4YVDSb",
  "key27": "Uet4ZPzx9bB3hKigkk8A4Aw9AZLEcd5xQEidaRkfaZ54aYr6su5HSx2inEakbdAcCoDNoN1Yi6S4XyGmaV7rQHR",
  "key28": "2tVg6Cm48x9Pq1ZdrvK6F5tbpdrhMB3dqFdcxe6XRVNePssysqcFew7izpbCAVvUXicm4zT4uBbRG1MXvG8QuAue",
  "key29": "5mQbnbUPqMpit5Y2qyCNNf5qsgLqpDhCEjv1nSQPwGJ2GWjKQTabeiEEBFBKYb7yPMoL5ssReJ5odQ9NYoDmAhqT",
  "key30": "44eVfrNTNty2KesA2fjUV9v1CUwFfWenJhMq7Bufuj3pCCpA1nyd14JdPFD6iaj8JHGEjsxTpB1Dh9wbSAc42G5w",
  "key31": "2eh8rZVj9WLc512Zgaa1nehZEZ9uLVbBz56KG6Pu9zG7f4JVqs7WYwVvgeBhAbw794CgBQ2HqNf3peCmMStQN5us",
  "key32": "3EwRHWEfUJZR9TEFgEKNKjBbLzX19Yv6ATcyLnTjpEu5u8fEYSk5kbiF3mm6QSQcpVwzqBbiuC5FxEWf4NBpU2aJ"
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
