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
    "24EZexiPfVmNyKEygtbbucFufwbpryBmiWV1APGyk42dmuqfJ869CqKHWah9Kv13uW7TtLxuXMycK7nw5RRgGYZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WnXfrSY2Wyiwuf7snPoygZ8qyUdKKj3uVECbDDdQ2fvV6ratfPZhqKbdz4jmZvjM2DbGLZuiBmPatBCEZo8kdGA",
  "key1": "5Z69Vi4pb6xnR4QaoCeWiZo9BkdKi2ufTzqzSYwbZ6EBY2MUWHyK2dM86yVJpHPBhjizfGur8jSA6nxWzvhJuRKK",
  "key2": "3ZwTuCDGgWmJnKmJGioyQqFqsRZBu6danMfNGUsk7sV6VYHfGFvJCBDss6hxAHQw2H6W9ZyN5FHDgSJLUD1gWVaq",
  "key3": "3KFH7EzAzykU8Guo75YPz7R1kaqZkVumwZcC2C7xQcDCd1v9VUzZqY55Nhrh6dUem7HipBue5tkfjNqRERgpQJZD",
  "key4": "cMDR32WRC9VmEuF5GGeUMpwJ9SY17xAz2g4H5XrazZdTzgmeyWDsoKPJJHv9o3ZRDoH8Fpqx8DeHaC78eWEhdJu",
  "key5": "4wiGAiFwmCaCsbZ6wY8Cs3DMtUCCiMsxTH5gAp9mqPUruaGyvnCVdA72W1dBA3esfK5SErLTXEn5VTBooN8FZ9VX",
  "key6": "66MbgxU1fYXxoBzytpLusLmL2SEjdGFUxdmTkttEAV2v1FSkqNzJDPPRkd86VUrqx2E6E7DsPm3PNesgt2aCCDFM",
  "key7": "5hT8cKuFU73CcDhiL4HTv9kj6zsxNwFBAt5siLyWRiGLVkWzijdUxq4tXpXZZoCKuiZGWFo7zRxufYhA5vK52im4",
  "key8": "3qK2VzqBgZkpJzeGrpKaYgjMQzAR3VxdDYM91SUFTsbb9gTr2riJ9hos1TrouUYYfwQkh7H5JEU3wgV6AFh5no57",
  "key9": "hQViKe3WbuLW63YvzbddgLpC3CndovvJoK6fsBkUjrypWnPCmQsAqX9ECR8f7GgwE1fUUXXnH4riFUPK2s3CSwx",
  "key10": "3GNo16UjnatSSSWeangBfDDDR9BJ6WiFe1Wic7MLKwpRPrnKW3kHbvDPiFDJTZXdVZrZC3qFPihCygJuYqxExbsu",
  "key11": "CzNEAiXpud5QRQU5EAi3vrWLWJVkxeUp5ML3YLYEFbZmaGsJjwM5dggnXqQVS2MYz4ifAepgUNjL7F7LSoRUc3d",
  "key12": "3ebnE3fEBiCE1tgWwYWLMBqEdiSm2rBEy5DkCTz4haVgHzDKZVqoX5caLtC7kVjCFdGV8iVbDRkpSHLbJGo5qDKQ",
  "key13": "4LLdtKvok3vV6xbJPiWvAnfqmtEnnz7kpcpbog8Cg68VuNiR4umc1SPEZNMCHCCf1LVU18a9KwogsVkowQC9mkC7",
  "key14": "2fz9d9uxye4NU97mv38yq6GJf7mNdKKsB6eTXHymw1DJfzYXqgZxmBtDgpX4j74GMMz62tZ8uPJ8ym33KsC4f2Qa",
  "key15": "2zdtLe9nef2WsDDnzdEF1iToxfERxKtRcKyoA8QgkW2sypLWtSTSP5WycB1wvi3jBvbkgS28p9FsXb5pMy9rYPqQ",
  "key16": "2VtA7zetDjjivCLsLYmGBrRqPMsDc9QDNUZZy8EyxgcDNoY6aXRMemgg3t8UizNnS2u7UfLaaqkV3DkWgvmaEsUq",
  "key17": "4tDXSnftvtfs2RWdZVbKEv4fDQK5zgk4W67JkxWZktcB1jh2i3Jjsdh1s9kbQCkG5QAEn4K9xZVcCazyChqhGwHN",
  "key18": "3vgZjsYY5qdmaFZuYZiePpkB7rQTA3QKj3dXDzeLzhGiaU2cirHxHMr4skLUBbt1SdVmLsrASyj4dyY3HRgXMen7",
  "key19": "wPJc45b3Qri4boyjfVXZTwS3t3U25vJu35qtY6LPN4R88Ed9DPibhnRWxrYBbs6AtfuTGNiutnfnTE1bVW6SKmf",
  "key20": "2pjBxeetZrADXHgx6DZ2xZ7gREvvvrFDG55yZH98QpfaDdvxhMEzGmvAQqFPWoUB2LqNyGzwV6pDjasSgHXZeGJ7",
  "key21": "5uNT9dtsLFrFYx3NW5LP2RgnCRDexoNB57jNyE5Qp59H4j2VcRtPugtLm9G4k3cgnkfBCWexx5wYNxNJYWrUjKs9",
  "key22": "29U3Z6j6cyR7kVPVmzoSeDwrUuF5dn6B6Zu5QNYBR33nqP8tgiBtBob5PHfbuw6QexG2NQvm8r1kCJSLd65a7YgH",
  "key23": "3UiWgQsfJTwMn4UE5n62AGbLs2PtdRoPDemvE4MvR4KCUcSU9Zj2BUEEDThAX35N2kNUroWfrkoQCMuKrGtFFem8",
  "key24": "ZLqmwWoLFRDgrWHJPLUZpMVBWuaUbKx1M2sHQ3QHXob8AsqaGmtwH5Qw6s4KHxj4rYq2Uy6Y3sAnNjg9P24nCDW",
  "key25": "5eukfGnJ1wqJQG3Z8rZx7Lv1AR5uaQrGwVZJ4b9jDKEb4fsJdj1f7HGAJHfPi1zGitT7ZyPYcSB4GHNrLDbS885T",
  "key26": "5wigupZP4KXsnqR4cgSvmiWo7qVVUuGb2iMzzCvCEb9beKQYYHBN7JPV9eZuW1oad9UnjbL7QswYhQvqDdJKy1WX",
  "key27": "4EXZkHQ3JCfQ1sxBWiP6sW5E6kaN3XA3QCVC6jHtTkfrhbeRdv1FHipFuWanR6SQx9sKZXWL2xuh2N24H91VyHyQ",
  "key28": "5igQacMQbwaY4V5PT64RXGY3kiWCp6kLXWv9NUgMxW3PYifXQTYyE3qRmxF2hvi4ZFpo3cBGHyTtP98PnYVACkWW",
  "key29": "5nP76WExrDmHYaEhVRwYRRQvExrKDXhrbdp96fKR6h4Jku9Uj1kcpTM1Kwzt5AVw8SV8LDHmrn5T62gXWyZxsieL",
  "key30": "3xgGFhYV5DU6RZTBpEtM4Gf5PxbBpNAgAFHWGjtGnB7bguRcx1XDemEwKVNK7L8Fd49ZC1Te5Dk1PLkycBF4CMjW",
  "key31": "3tgPEdhuWk3g6p6ZNPUoN1BB8PJTCVpob5FqHDP7E9kdvaGXKXp6goMyq9PiMsvjVgyyknCAAco6EHWC89BbPZ9L",
  "key32": "3v9vbxTKpH83W8gqFTfV4c3rk2j4pRgAVv9Un1KTnHomz5ZSUQK2qBu8dmXWCt1cYVW2fmgLsKKPUdxaviUs76Bh",
  "key33": "3eeKEJQJbSn5fUJcY3opoUgbv4kSky3jh9N2PmxUXanSmT9932WPXHyqDuKjm27pxDt7Es4ZQCGS8LA5xrkNP3Up",
  "key34": "3rpxixqZkMV3W82W9KQFWp7zA7vJru4UztBg7Ry7cUfDio5ehfKGyyodiWQdWvjuu6q3YonzkHdmR4SodmUkJwCb",
  "key35": "2kR2NDGhMLVPUgyymdjr4ssKLTBGeSPgPWiYMwRVerT2TUfUMiYFgsdm4M3HkCFbYXxGAfQgZetv4FZ8xBToEYbF",
  "key36": "4NCYWqWJN9e6LcDguvMbMfZhjMGRCLbVKWSPpZMzzQ14WPYkCVRNAkrYRpwoQS46dKgUqRVvd2njsv1mqTPkEiWs",
  "key37": "2iDGhpHm3sNrjm8ArBH8zqxwghjMSJiF74c3WvLVmaZQyUiCaKraBCM6WVFvsKwbZMmpfXdKXkbGfNYkEbhU9XSH",
  "key38": "2W2sCB85wv97jLgBsPFu3Cb7R7JRNFUfBAj52yihPtdp9nxbf4qpoV8JrKw6HkZ8uutmZ4TSCx3cFDi59xosyyEU",
  "key39": "5WcXDSVfUjkdde9TfYPV8ZmoKqf1Wu9KLf4VvG2S1hVQPDh3AwiE1HjXMTsjpsRB3EYaAPfZFPYFUhq3qoooPq79"
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
