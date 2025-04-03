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
    "2KDbVFt3dK5RSkN2qa7uuwoFcRvM8eoLaeECFk6k3Pha6gR1ksJU6PDD6L4UnXRRpNzRpTJAvfrsYN9ipSNdJejd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B69xnETGTfMbQj6wgZC7hQoLm7G5Sb78kSwrwCHsgzARsrAFdQdrLrNPJe5NiQuvZUPYw8f3nBThQeeWjSah4bP",
  "key1": "3CXaerfF2AX1WfheuuUD9WN5kv8jAx9hNEfScaNoSdmc3XuZhwaWBsKLbn9v9DyB4o263xD4xfcuKmUYR6aMXD3R",
  "key2": "272Nr2iquFHwooyVTbZ9Pceuo92j8vHSQ2GMsueEBFrs6ZA54QFrEHwrS9iWUeDxs6Hu2vxfvjon7rexGzpSBrhW",
  "key3": "EneeCZNsWabCPHYVn2mRh4FwxWHsKfk5SRMr8ip9G4weABWqU5LDczg2ph7Ca4cnbMV6F2RyBZSPWvfWQ2GPbZ4",
  "key4": "31Ded9c6kTdjLKjdwtch2nhqcFn1tDcyS5AdNVZgC32VNtLCweGuC6uA9Fs3KoUCvfKmPrr9DKVfvwh3iUxQkzvD",
  "key5": "2CSAZa5fj1sBiiBCKDoaYxdrVbrBrfdpAbk4uMRbtTseRuekC4Sskd9ZtXSaWKMYv3qwhmb4fY9P6mYDuMXGwi9z",
  "key6": "3dMr3RsDCMQDYhRUp93EqWFhC9whfDBib2DXKU49617W5um6z1wpvzoGYYsHNac2vfu2HtCFBwbvNEqEyWoy4ZMZ",
  "key7": "2dP5kFNTpUBVqJHq13k4dWZbcGewpKXooNm7PCuaCu1AvWajJYJZivt5R761mzfmybnTF5Z3fQXgjA8NT3MDUFgy",
  "key8": "5t3EqnGnuEurBsEbvfGmcB8swP63f1KECtcAtBecJNodxBBVkpwc4s8Q2rfWky3jNyPFghGvqYWN7yqEhuYfCjdN",
  "key9": "2pTP8sheMbacm6SoPtGBzMXRL6CzwTYc1UG94Mr1gwDAwb1yRMRqadbgN3z52j5GZoSfKVojcL9EQzvcHUwurtGa",
  "key10": "4NxhPiaTbAPkZPJfKvXM8AaaatAq83jymNNoG1USBeYZaJCaMqxKHpWCkZxN9wmUVNzHPJjNVjivhhnwD8wt2ohq",
  "key11": "eQMnTukqRGUEc7AWEMdbTTszBtSWqSCuWYWvqJrpnx8y4UaL54YL4GufBBSrB6Y4BrwaYYN8RxhGeY7Z8ZNswKJ",
  "key12": "2Dk5E91KBkQxNrDjUUa73HqY7HLuMLzDdyj7m8aoyWNScT6gSf5whLgUZeGsWJphQc8dz6V8ToXs7eRu7qUBEqVy",
  "key13": "2NDkH2zVv67y1tNUyugrkFSjjjMYBxZzrU7GGw2tQRAsYm2y4CMyj8Jo4YhdmUosNFiqPSvrpFfCRifT2etN6rnF",
  "key14": "L23cK3ZF68d2zLAtGEG7Em2TU6oS7ZrB7nXavkjMu9GCyda2hUHeAdHGVHQwH79VTeyQuDvCoumMneGfJnT4c7F",
  "key15": "E7PNkL88jAAFUsBzQZWskCBeub3D6137mVixd41fXiiHFALynK2gCaqyJFZYbSYAu3bHhNySHWf3LMg9v216fWh",
  "key16": "5XbboJT5yrDdKfTGBxdepbji21TfJ2rUc7hhhoawJmh33hMKsBacc7g7J9EQmbKwQ7VT5vSs6DEgSPqSxCKUgBYh",
  "key17": "2WduQzLdttoztQiN1YzR3rfu1aep6R7CKSZpxnmbq1f4TTwcMvBQq34GJW4EyYpDWQxpbvLJ5RViXtoiy2DEUP83",
  "key18": "47XLgWoxPf5hGwYWSv7PzPgj4HcyoZJMhsxstHpiMrPwzyjKp8dUYU6BiRKnqmhV4S59iqtUKBoTU9TLDyZdU7vP",
  "key19": "3VD8PL7DvyfpwgYXRFUqWWiJNwdL98K4Av6Zbn5P2DEgCbzcMAoxxJkxPgWbZPVsac4LMDQavQMMVp3sStgBD6pu",
  "key20": "4tGhdvrFZn64L4FrG27x56G6vMSVFHkraPUmPmn1Uza5r4fZ4KvEDVTbKQFA2HxTTZdB8SLRjYZinS2sep4XWvov",
  "key21": "58UkuQms22kJo3bZzEu1G5qwtKNJWbHePV6VSts2J3AqBxrwsKnWuhoL134wzZudHzGfsbdsseYnSd2tcTgfYaDx",
  "key22": "4W4esT4scDeL4qbYUUbUuf6LLPgJ7Kz91eZfmwUibJMSbv3SNmWSea5SBGoVEBdddr6G3GhWb6qZZS1F9qHVri9H",
  "key23": "4JXrAzT7pikFDGDuVZjekm881aW9u3jvAPJXmwiHXL7qxpAVHye49VWQ5LCgLGqq7fU6NdpzgwkfAtg7Tq5RHpWD",
  "key24": "sGRmUQD9jEGwzsR9Qj5piXuh6VknFwwRGEqe553EGa8bY8Sqt3R5rKxHerV69k39NdMwdibmPAZbfzgLCygi2UY",
  "key25": "5DZnnZ2uUdhkScG6sX1krZFwdUkVCGs2g3iqXMVibfGUj5C5JpFYyfQRAjKM9zMLafVJspBy9jGTKU3TSMxrQeza",
  "key26": "22PDZStqx66bEBD7i1n3AEsEhPiyxuCttw4UBCqJ6NduCuZRNaSZYHYSKisizwfT5xkQpqbHqzGTL6NxXdefMxDu",
  "key27": "3usDD3vFurEpyAbJjeLMC4DuedvvaDQCtZc1eMg9PDADqk3jbFStXKhjMpF6NfhXJ2cvorGQApgLmocF3LbDuNaa"
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
