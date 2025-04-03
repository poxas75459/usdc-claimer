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
    "4RRN9RJDgWAMGbxaWjQbC9XWmmShBcHcU66psVDzu53ETaq4NkhxWqgCJmRPN7tU2rsV8CbLV4Vu3Lb6fHB567rA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RqXkCZ7UgrkBpy1EAnaA4BZFmDfTc2eLMC2WeSYPciExFhhmfSunUZdAw8rH2jnUWWfuMbY2tBkKi5Y5UJ6kDRb",
  "key1": "JmkrAtoSEmugRzAzHze9NoWYh4dpP2e2ZX5CtxB1yog34idKPbhooF8zi7w4JKPkjrrzuJhJ34vVShjBf3uvZaw",
  "key2": "61coaqLynt7JS3Ehwh25Bd7DjASox86M8JVHGpKmAXCdvFSkb1X6CvGT7gBdHEywu3kuHxKdXam5dxd5FvgyAfA5",
  "key3": "2GvnKjhNR2x13mA2KCqHvGVbmh5iE8tqog9MqtZxcZcbNiywpLKaBAoAWNQP4fSyAkiYG7GMTKWRPx8ZVW6JxC8c",
  "key4": "3DAZVqpaYw6khQkWBW2ea4X1ExsdeD5N4mRDrbVrHdkuzkSzNUXTuiVpQYBpmTtGYYwqxxgtBgLvRbgF5w7SBq1J",
  "key5": "4PU7iN6mgMoUSNw2qNS71uJsxssj2vK2K1Tfn5S3ap2xnMBQuNYaPTgqU7WpyMVudcmowk4r5DjZMKdy4CyUtQYd",
  "key6": "2QttZUSNrRwZUxfDYVYsejJHtT8ta1r2ooUDoWUv47VQNztwmCegPayWzfBWhDVLmjpzQ92i6NLgGQjksT3hE7tT",
  "key7": "2cyL2BiA1k4vTEuBBvNKr9CYMGEMNVqUWzeNCfnJZbBetTcFRygnWHjQA3k7mycyCjXKJXmHNBHZH3k8NJfXxXeg",
  "key8": "2pBedvtYoai99q49nFjtoJfrk3xb7UasZz3FVjoQEqnoWbFeuQ1MgYWfca7L2bbboV9xHt117L5xM7qybsftcZHW",
  "key9": "23AaKkQQL2CcYWumaixSedoBuQ6P4Eg9nXGR9XEgR9KS1Mn2rE7qk1dLYXYQYUYLaskG7R9VvSiW5qLQ5CoWi1Pk",
  "key10": "2eCCuR8VyqDvGFeu8TGwXdCWEiJVJ7J6LQ87kvJwLQn2qhYvwtTg41eX3NnWYokUSB5qB67wk6yWuSsYyqcXgf2K",
  "key11": "4VkmYDseRZeoJ6w8iAjorsFztM5VVS1WGUuFHzvkUu42SyVwx1B27ieCbRHCXrahrxmubLpc6WrVmLh6YYE1pozJ",
  "key12": "4gunWeWQhTpt7jLmYCsHHwWfUroAuqxVvWhXvpdJjh3cJEUJdyDJmZyT9K8Z4ebkiD9tCWemxXHTWMetDgNxszwb",
  "key13": "WP5X9T5Q3mLsNTBX3zfYSwHh5HN2LLrxkvmTV3X4ic9v6fF7iEdkmtYZgmmmG9h1Pgtm3j3LiNRrafVKk24JMin",
  "key14": "Y6wBj6n6QcFvmWwQWbEXckj4Bs9mFw6X7wu7LHK4DNX87Q7STAyzxDA5PZTBY5bHUWaA8P1LYZ4rq4au4ccTFNG",
  "key15": "36NyUZ1qxWcqsQAi2stdDJfpArpT5yTb1WHg3ck6BYkBaJmQbMDBsdSpvHkhHBu2pSKQY9aa5A9JdzCCkG6i1KgF",
  "key16": "2SZKoujSYrHASghAKGv3umwXSnVCy2o6AEPwJoo87NjCfdXxj2GGSqr4q5BfZ74pwnQ46Z4ESbPVfG9g38T99qQN",
  "key17": "3Zc9Kr8YHAHYH7AMEBtfsEML9ymRL14fpivtMKbL7JycB1LXPQM8b4EqN9KNoxSUxpLogDv26qMKu2MF8mB6ZUB3",
  "key18": "23EXYHG4EAXuR5ok56nQw6LcPdzhMfGwP2RHTPBbENj7VUve4Hsee132u81d5zUokiXVLHafaAEWwfxg5EdDqEww",
  "key19": "3TGbvnSB2ZyEgz71fCxicXFseNCM2xWQA1VFBVczVhiRx1BbH4aoruwPqc6EtddcUKFtVzZKcgWwUoT1hPuG6PXB",
  "key20": "3b5svHYq9GvdAnNpXMMYpdjsYhX5GGVZ6FLzvbCSE6G9nq7QzunUd2VVKtiCE46SoM82SbAAY52Hy5uV1ErtqkDb",
  "key21": "4RRBRANyCwsaJQKY8RuYAsSmWvH99WzJv7goxmXLgJr9ihefK3wj8unqcUD3RmMVmdCykfwJwWrBsShDESwF6mRG",
  "key22": "NpvZ8D4Fv51chywMoxwy4jRvB9F72DxNSBMC3We3DHRqXhqr6bNAMBXgismWxi4mhaww8rKR2mTiENCHM9gCobi",
  "key23": "xQ7KnCuSZmegC73cmmoV9GMD944y6nqVqyeccDnB9mDLsBuWJGQzQv4Mq2ezTUGyB3VhKy1LprDb4JprmsthABz",
  "key24": "3ku3rLb4YohcvodBC65XLwJbWFeMsqX9x7Y3FHGSn7QC3h6B4DGBLxzEafyQeRUhRwp8ZH9ouw4LfhKqNEEjyRwV"
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
