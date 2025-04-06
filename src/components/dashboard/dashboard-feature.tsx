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
    "2xXEXDcCpfsSK1Z4LKtHpw3q5n7wVKX6RKSCEoj6BPesZ1wv9Tz5UuorC9Pd2knTfAS58cNSFABRVzVrMeyfhhFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Npscugo6h2hXL9Stox7kREuM2DKqD78VSEe1sL9qBcvvp9mLFEneePBCkTKBHbYaNp4wsKmVe712QefXs8kk9MN",
  "key1": "32cKajF2hpqERg7PSpFz7dNFMGJtRMXfvTserDJL4gyNveGogEwGadWwWU8AN5P6AnFyJWwNo3MUqDw1s8bRptpP",
  "key2": "3JPCoNFRusFcM6qmkxCgZNdJyqLVCkEXTYR3qAmmTuVCz2H95TQa8Z1Meccg3G9Vaf2oPog9RBoZwA3MbhpSHg6L",
  "key3": "3LVxubLz57YeSesTzfNxoBEDvkoE62XXcK9Q9EcNpSgWZT5wGWDUvSUFGX9o2Cdrt8pPDb4SLYhrJYJmKHXb9yze",
  "key4": "LF422zw17cHqBspaJRFvToERyUDrZgM1jQ7Lrqu1VGu7TMaixopeqiqR8e2c6cAsDAKJ76PK6A7JdvNCSdDJGwb",
  "key5": "3q7AB5UZDQwdLToLJhXgobFBkp9Z1vvfAJkUF3fYbS74pYC9zvgxqynVW1S5dQAaUXvLe262YxKoemXk239i4vPi",
  "key6": "4obuYNPXZDU3BRSFCs4mndkqsGngfxSsAV4YLP9mLYT1WEbp9txwQ3ccxtfrJCJghs7ke6TCgZCnwf85LDgCAukW",
  "key7": "2HweRTrwtKx3hqzVR4Xupk8iB5ENKPxDN6XsQdgenBW7itaaCeXzfsM3ycBEXyg5WvmeTrdP7xTDqwKkBuP47SJN",
  "key8": "cA5Nm3asRLpcuj1zA7X1jZVrhQYXsPRkQfkx1wvduGBMB4YpJQmkm9gizmkoCHPvF2JVgtGH5kKHcDPfE5gGEZN",
  "key9": "5uZfgAkb1MvPEXNWCLD2PBQH8NcQwWyELCu2WMTwWbd2RDAUAq11n6PFLy774qk2oFhwUhNVkau3exkwzA1GdvBz",
  "key10": "5ZAg9WCvz9LZtusEJPMrWm8RX7btsRvur5YwzwWjG6RxAqWAKrQyUZoL4VdvefPkU5ogwf3VTnkuv7uDpytVHDqo",
  "key11": "4NPR23QLjjhNj3MVxq6BLd5XxmVqEnDaXC83sTBos3Hy5BjcDEnGKX3b5jMwKLfUqJtzat9TGc8aFX9mnENEMMX8",
  "key12": "2rV9zWyRdrxYx1zbzvm1e7tcQJNHQrEudMfxXwYP6WH8cJKavwCdWaX8eapgAL2fY3JYPYGCXybeEWKVDgq55ud5",
  "key13": "F2pcFWuu4wLgq8FS9ZrnAG3me4cNvavJENGM3yoF5bC2LkuGH7HVdWCbYro4W4WdbK6eoxzNdxTDK2xMngv54zU",
  "key14": "42A5ZVkiTcjMdzzVrBa6fyxa1okyTYoNSCqRqAVSQUsr5un5GpPKA1LNDcXtFrKANRkVZim4scUBv8tGautZPLTX",
  "key15": "62VC2XuGoNUS7NoiVsTLLzxrTezEbH7BSEv2eou8R41ZW9hUFCyaj61qLSM9bggNi17FYSNtw6XXhE8AsnJUZsei",
  "key16": "2wsArEezBbWQ3fTE1yNtRwqHMuwGKkg9g8szB4dQvmWBxzWXW4yJ6hHu1JoWwYruTn8y8XG9SwxgH5G93CsAoW1b",
  "key17": "3L2tnZQ17geLnNUugGHS933nn2p44aZvThjCKYyC3p43Pig587ztbQj7gUWUwyGxg1BrPndAsNs6gTYiyUDk8xTy",
  "key18": "3vtazNRpTuBMXLUczEqDdMdk1RXmUekdGU1GdfykzEPK2AKPWpP9tt8qUrwASgGLe8WKXVYLHc3dLGvQ6DayKiQL",
  "key19": "43J2F4RDihi82ECpdnj5zk9hNtcxdWwoaHPYdtWfRUAeKWbhEuXeucoccoMSseEXA4zLHEPpaDosCiwK92Rc2GLs",
  "key20": "3PQUgBURPDW6CuXo73iLJkeoChy68qZZ3px9oD13km2xEnywuqQjxFnMjA16Fuc1a7qup9AdiVCQwQmukGZah5Gz",
  "key21": "4tmkFcWtcYDDmatWXpSgf19tmm8PAT7by4XduRTSaZjuZNTogUuQSPSNpYis2sL13Ji1UvNoArvkyjNr4M9wsVU7",
  "key22": "58hEMmxZnQBbzwhFq2cdmdpPftK9qheNXpYrYEbJpa6YKuy4U2ZQxR2t5wd4M6tLYdYjxL36NEypRTektmeURxP",
  "key23": "2fLR87HEZpARx6YfMcgemxwiBsHS6EvKrtXceDmYbhoR3DES3RciSh8mgCcXKXB4RCt3iwhtYX8my6XcVp6KVHGS",
  "key24": "2gWtZbU79fVsgEMCpPXi86R6U2s8N7ihfqUTBASqeLVRzKXCT1MhXDx9D4mxeAsXqL5Liv68rHRNya3ACjZyg8Tf",
  "key25": "3yi7bXV55zQ5tAbnFXfVeUBsXCp3pQ3gqhtcrtV8TZaQkg9EKxrguESYP4dCVwrcd9jesfaWFz3fXTt8UxGDYxPz",
  "key26": "3XrDLDLiw9wS5sPb47dhfYXSwQNWixXQuYxaPVNdA3JGoyGsE8hN1eUXDDpTyxLoucthGQ9FejxFCrgdy15QPkxg",
  "key27": "WtvGWKQjz9597GTn379L9LWBXTqyt1cf39qmPyLs4oBfLFhVbqwE9PwRhNQzqJ2LMiBBwcfSvk9gq6xFruBZEhJ",
  "key28": "3LXfnB7dnnLwjXNJQPkTgZshkudUeJAyYnfSpKTpnrUsBQwyH2oQbv9TJqgKsFt8VpKXFBJ44QMSaELdDeqRT9ED",
  "key29": "43ALnr4ojm6rjuGVhAArQHGwaVaB2mJJQcJubKfUtfzAsy1bu552n3x1seaUqP7xkywNm1QyK5z6YaFkh8kmqDjd",
  "key30": "23uzvGhCVFzLFMbdiLuwwQhWb2bqTV6owCqHeuFB5DrtN8difin5XBGbp396eWG6JR7yNQVNSd9QoNkQ4o6LeDRK",
  "key31": "5m9TYyJjrTL3YgN4oJ54aPD5ptsqWf5jHjfqYLNRFK6E37K8VCemgjpXCon9PdEV6H9ZwJ565Myr8DDT5CcR6rde",
  "key32": "J4YVc94XwbJ7NaAYkiTMqiPgkkiodHABv4HndYYCGvorCzsii68dT6TNwPJzVNs5FvdduzYfF5TBpN6Z5uTnFqB",
  "key33": "3ofK8TWWY1wn1SnUPw1jHJSdXg7R7yQdbg9Myb8bTmT1Zo1ixECdc9cmnngh4SqfytPviAdaKAb6ZpyNKpkYgweb",
  "key34": "2GRrUXEyYJkDzKX6LcgApTDjUt3Wd8eTNZ1pmtADfaZao6vZsREB4LPrzuzf5p3iwYEDhtKxCCpCLm4dgg3DAXq4",
  "key35": "4rCD6c8NEVJzZW5Sue7MNXqY3qRK6qqkrtRujbjxfeLDsW5rdkCsYH8Fs8gusctXc3izt4gg6G6VwAG2nrtAnE1"
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
