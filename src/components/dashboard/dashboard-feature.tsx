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
    "4o9cssxhvikoXEgu1KMjCXSBjn7exD1oFJxV7XsS3TwKZ7CSatSVBEoGgkeaQRHVHy1RjhbqkiVWzf9cgZ9nhRpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mSaxuDkDzw6xKp6fRTLGakBjrhFK6jbT4xBApuejLj2jtHVUHCvrnQyKjz9uK21WUH4k9hDyy64qfCVZjv6f2QD",
  "key1": "2SQQS7bwN7txiBfuAbADBBCw9YDXfU5m2bmVAa5z8ZtuZtvMdQv4bDhEXrMcW73iFVSzFAGAUCEtcANsRF6kk7M7",
  "key2": "4kTcRZqREpAxTFAT9nCibaSEkQ3WpfphbR8Jnztk7F9VFBHf7hJWKioV2PNEcgxt9cT5A8XpcxmL7Kzst1yg2UQf",
  "key3": "iCVuWFjmcgLfwh1CVvbSYvAMnFW7A3tD7knjbweG5UkAR5iSpEnr1XdJQKTHB7jGKbAxGgfYdRqvExPwk534XDL",
  "key4": "52fqSru4vEPwtjuLpwbbrj8GS5Vy19u8FPeYtVxSeEM8vQLdTqvJwP8aVY8SpQ9avbMMEsmpAtXoydB2cx6s2jE7",
  "key5": "5aYFxnqKRHfcpiKbGaRztgPKUERNuFaeB2ZiVid6cNTkDDiVue6pBsNxvjN1SfwnrdXX7tXGsJVB7MPYn3RtyNm5",
  "key6": "4YN6da1NSkDFKNsJ2NsWUtkM9PHnhENtSKrrfh13gNRpViDJCrrDoew5bwfUAgHrBfYn5T9q2dcs51GjUBVGXLJc",
  "key7": "yMiDjRZpQB5EsfyLknGYDMrYjJG3PFrhCK3YZgeuWQExqgK7iFgKRZJx4cqv4EqviuXs65NzevGeNR4sJEpfwJa",
  "key8": "kG3nibA5TsBBiH7twHJipBvNBEVrPcxawPvEgcHB2En6ibePBN6LwnZrSGMCASDAdQd5GxcRecpjLrtwUPqtLws",
  "key9": "2KmMFxsujJgQdtPsZhN2UkwMwqqXNJuAFhEXavuCB5zswM5UqeztdwGGSa4YHYjBhJurf6CKmpWtoPnbj9LyvuFE",
  "key10": "5gnYhAiX9XarqrrJCJeiZdBnQsU5fAK34keTizTJTkUF5VKJn84E3W1mFSTs9GtVy8Uau6sK8Y6qrxnCnsiV1GXh",
  "key11": "2b1BRZC3BzEUNdMp2YCmAz4S4jLWvUEPiQXqQn6jJ8mtWw1KygD1i9LvAG51WNDrtf7T8QR3KjW8u38Abf42CQZB",
  "key12": "5eBRUiYBCsXbspf37yJUeeUxUgBbsiz28QYVRvndPtj828c2ASnwMMGVBpqAVvFQzRtNarAJoNW86ZMbfoJjkt93",
  "key13": "5Eq6TJeTwo2rRNzDjtrfH2tpxNwFPVRox1SWqFxVdtYbz6aByLpt4KkJJpMhWLTb7XAoJy11Mu4jjMxeN92Q95Mn",
  "key14": "45JajoggeNEYj363aks9e5T9gRquEKsbLUAgqDqFjNpK7iqiY1zkkqzqqLFv6VJytTnyvahqicQnLEt2Dh7ftEn5",
  "key15": "645VAwfxfVppFHhEaEVBs4R2DDvJ1mxngpdHF56dSQ9xdcE9UAMjrsLVidapLeSFfhgdrV3DrEERPLmtePqDUsT8",
  "key16": "dMr7F1a9vwZaj2xNePUXYLYPrz6Ct7jB2TPsAP5ZM1fNTpuDwmDWuKAoBzCMPiLFRUMj5BGiAg7vBsnS9r8K1PL",
  "key17": "5NnaPp5kBzVqTGcEUjeiBkYftvtsDjuA9f1ioAUs2JsT7MwT7aUmDiy6MRsrzfFYQBZM31WiFtUa4AEPQY4YrrVE",
  "key18": "4r94QdJM9t4zU1HKWe4tZR46szPjm1xC4D5uw5jaauyPLik1CbivBSaSwDUcD6kF8PHnRoVKmLao7qS2S4WEPiDA",
  "key19": "4sYwYp6nRcSDRPmQYvzVfHEP6SEbBEkfm48MVHJ7TnRSS5rNTRt8BpMbbmFdmPy1Fw3UfYmNo5iQ94poqAQnjMmv",
  "key20": "GeKxeKADaEMX3Ra9YD8DTzC8UKvr8NsUUwqjx6mR3eMZuoZujTH6fuaFrcFKjM94JmvHmLhRiHwBi3xG92NbeZx",
  "key21": "65zzGCMF2yYf22t73vW5YoWmjUJvVdf9LL7gDQYMftUay4uW5EbCapJW7dCsbBAnsqwFWqEiQgsSVLaoWica6zAW",
  "key22": "2KG4jYw19xb8bHnS5chDJG91oWHxUjF87MLHnG6McWHygNmmB1txtAAKaaJajejanuw8DqsybhLFrxu4XFfEQNU7",
  "key23": "4RwnRW2QUVYc1oGkoTqBZnVjs1v5tGTAoCpu1HQnmU4aKNVAUUXK8ATMs7W3gJzCQm6SiK6LhmXPZKJdm5Ffa5Dj",
  "key24": "5qtyh39PgrD4iJidhduYsJPyVUTambYCgRPZDFMuaSZdBGdxpvwPYU7NecjR1CZkZSR8bF4zXmyhtx8snzQWKQZn",
  "key25": "3fZJEijsy91iK2N9iMXY67xjSe4TrrBznsJp9hiF8ywrdfbc7noD4UPuF4G26YDys2ZsZ1AA9xWD9cmqxYJ8QWwd",
  "key26": "2CZrUz3D8gzVrR9VbrTtDNeWFN32gHTBNmcrnVVUXzSvr7gjnb9swLk2K8kzCTLfDWCwQWLt1RzDPH6Gb1hNapUn",
  "key27": "5u7PfDVFVKr8RTsMNJhPzpf488itzDGMQgF7mXJqLFuwWA7n69k7ZUbz2DGNqjj9FYXzdQRJqoDb1j33B3s3o5oU",
  "key28": "KxirDirXD5Tj8RrF57zer3qJQyM9RJXtsU9vJsX6Vg83y974JCTAbvYVFbWKGxpcTygnaB2LFc4c34GenmFue4i",
  "key29": "2BPMTQNP6XCg5eQyYTCTG8Zu34uC3bFNq3oKAHbEwUqNyUBtk7LT7JhAHV6VHkYEB2dEDvRZL26Rw44xL8jUfcrn",
  "key30": "5aipsx5bG65kcijzkcnanBDd8475PAfD1o3dQJqnRybCXMvU297yJNGMvF5NdW6a5LyGAtkybDsyFuxSCBTYqGWJ"
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
