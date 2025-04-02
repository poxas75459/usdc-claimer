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
    "5PtAAmakHdV1oNE6XFfVpGZkgYJGkCdAT3gcUK6eVmMdwwgKVdKsWc6u6RCJPHAjWAQBcE5RRo6zix4trKG8bY3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hmxwrBW3UdyvzCsDBoSr2uUG2SW7T2n8xwffQges3yeXMHx5ZNVTVat3pWe8C8jqDz6zTAtWay4HZc7V4nRBDoc",
  "key1": "5MVKpG57BwhrNYHPDyqZ7qVJ2dj65kG4tPfj3XcvRvwXQwDEVPzdLVDh8ecDqz87zoTBHr9KmPrS28j7fNSjtHtw",
  "key2": "2NyR7cV91nH1ESeD1PB3agYpn3ABuBvNuv3Cc5hbgDfqjmZ2WfpJL1Sd7MPWbWrj5aJ783JHiAmqfTa7uBEkMfHD",
  "key3": "63SY3YY6rPwAbRYZ5Twz7qi25TbjPPRxMmRKPJx5Zjuy7TYBTpgAW6hpWRrnPoptU4vtf4KLxYuphfqwyFGZrscm",
  "key4": "2VDvLvpptRGgAX996M6n5diXZ5RjNjy3KgU2pSk31e4LjBuwLGgHAjVbLarRzyKUkN9cKzq4Jv3rDqMigEi4R2EZ",
  "key5": "5opi5hpiV724z4oCCLsT9mEJhnwCYiMCnAYnZpr87S6GCf9CxB9H1td7k7BNx4NMyKBYj7syXh21Luq6DGAyK3KQ",
  "key6": "3LhXz3WYJwLqDgYQ2mzUQc9xQetZWmesDBmxy28tcEpy3j4NVT65CQDxUFteeAtDee3yhrDAaQegKvca7DgWVG94",
  "key7": "5YxrYnUkG4qDpYMwAnTUkw8h6YKQf4GDqSzb4YLJxyXwgGyLLBkqkPBnh2Z3CVCoHLnb1fpZqb4fTvLuDHZbwWzU",
  "key8": "2H99igScf3um1rX8qzKQ7nbFtXxb3ygCTfpPdZXNEDx1GiDi2hqH58uSDuKzmBesdzPdSD1KaCxj66w5TNxafA2H",
  "key9": "5HsSi1S8j31zo12nGQeVyf7pVDBnAAQAXXnMktiVVd66mfWX39WyBezNsSi6uMFeWJoMbPW1bQnqQXuSPNqNJ9gn",
  "key10": "25Bb9qZsGvLS4LY2ewR45Sz53kjrQHWCoE8w7JDJsGGErz44cQHBMhUZZc1j92aQ5DokAKU4GAzrqgpFBqDqPqe6",
  "key11": "5FqeSQexxvK46HMULyA5CpmL63ay3njp2xVdrP67BK5qGDcUYPVEe9bhVmomY8kv84gS89LiCBjeuJ3RXy9ii46x",
  "key12": "4pJqQ1pT1ToLZ1zPHt7DtyN7Ck1yAENRNgXyuFYvAunNYM31S6v7BiKJNDd8BddtuBJT1Qo7g49UAaTmkvmi7G4b",
  "key13": "kXWQQ2jh6wLiyzR7faBrMBuqSzXsHYKUWpAVNrNrbUCfBXxWbqRbfi29JRkV284LQEo3VSFWWDhbZAymUCcLCW2",
  "key14": "4WfC9ngocnJJAdxD96KQWNbR6rxF3eXMLMC8r2wzgHV6dQ1yckUZFCW8oMot6vssXhCK7dEKmL7vgPCty7XaWTQa",
  "key15": "5TWKHh7CkFGJDeybd2tRoD55beETe3ryugFzKzYPveCxsFaQuQ1sgqzo14di5xgBjJ6x3kca1KrcgyoArxAATkra",
  "key16": "9EFecGiMHLiYnXzRyZrrjdQpGks6dZE6kx5KFnz7Rb6LCKPtfJ4domxqBSnKm8KAhWeT2pxBNMs12uyDkYfF5xE",
  "key17": "56Nj5skqE5VwKz5NrjVuy7MqbtcdNCVC7yrVsTQfMJQANi8P1A5oZ2zbW8yBwSJkYXbbXGnSTLwvvB3uS1Jwaw1U",
  "key18": "mtaqKXda9tkDfTqHKw1u87xmjwA4mqirVxTVYZ68tMzRf8uvPa52iaSxANR4MEKy3mDBHScDnLfjGT4Ly1BNmCq",
  "key19": "3Dpw7YN64TSA16EgCgmjXzx1beBnccdhwxvZ67n26YJMUuKqdePkzrsnbQUqpMANDcykGtDSDFGieNY6rtYyJpvx",
  "key20": "2aYuKc8VHzRko9hxo31x5KPYs5itCE1wQ1Hy8LGYUKgcG3eDxtmywKwX7PkrSAuva2eehZV782U5xUuEBvbWsWxG",
  "key21": "4VyfXhqtnvpniSwjpCpNnzBpgbWmUnUV1hU24KSyt8a7z9Nk9bAF97B5F2bGLqRJ2iFFZSDTZsWVmMbGoh924Dn7",
  "key22": "5CSowyosW5J77jgZPGP3iYCgEYczv8esYViZMGBGqkxeWBCMq3cQuxVgho8Y9Z9ipmJksh6soqMKG4Q7VcsqSTd7",
  "key23": "2zFRywovJDXT56BfyentazK5RwuuZKH2cYW3EHafW67pXtLcuqV4Y1vp2eyvnDq3FQf8NE9PMDGqQaMvYqrFf5gh",
  "key24": "22btE6mMyM29EFiGHNzg6wKpvLh9UQ8fBFX5c8FG4P9GHwgHUbaQ6yKyFXVgyXFYQtTygvyuSAujH3ZbC44HNpNf",
  "key25": "4YgdGcz5MLuRL65mMDG4SakCj33ih5vTdAudVLzyg8GyuaR2cWYPt7gYQ9yX4w5uEJ5d8BztEK7cV7sb5VumapBU",
  "key26": "2em4naN2eFnWmY1GoMSWBABaGRW7ZTidrkWnT7QBjrdQfnSSE84sTZohEo3KdCawXJszaa3frNrQquYRcTEbeik4",
  "key27": "3BhPBLTxvz2zxDrLPUyyVH9vLcg7vZCymefvuwmm8yoc9cJRp2dwwXqsddjDFBe1x97WkdWXBmSoMpwaJGr7n2jo",
  "key28": "45xY5ifHGQhYsVPvyGzi2EPABxH3yvutuMtamSVXQd6jRCXrLuuKSxnZo4GD5GVRa2S344QxhtiUQEXBRJx4nmCV"
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
