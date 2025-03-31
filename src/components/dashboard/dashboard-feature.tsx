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
    "3B1N7poZyeJurEh7J5jfuei4QfyZNbhoQ7EVAHa19AJjLso4kJAoJSAw44GLFoMgSPGCuq12RsN4LWjapMimSXA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ah8Pwdjrf655EJueYkXiXKS5ZMzBgQLQirw5NKFM9vzEJ2uu1ssrjrgEXupUXqPAdGSayKEtdJ3CEx5KpSTsSyL",
  "key1": "4DMgrV6aReLA2XKpao1vGck1RAoZvg4VEZTmtxr2U3zQjk5E4aXBTrfnjzKrQ4DVqydgfWC7JjHXrTBxUsC2N6kf",
  "key2": "5poUsyUUcW4g96W78m8EPruWbV1GPJjeJKrRFC94bvYFcs3LPck4Dvn4ozpH3p633hKcVJa8GW9mwRdhkquXEVSb",
  "key3": "3fpjU8wdAXt7rVj8GFi3ztxkvcxa8rHa7ep4vKgHEH18e1uc5VkJEjB7xt7sB6KeRBXrbaWY8qv8rCs4392Y9BrF",
  "key4": "5wGK1qfit63kxrXrppyUzLZ9PHzzSGxEcgFC3JdSg5eNPJZuNBcMWMKhdtVkfNstXr9Wyyfg1FpVo2aiF1pNKAJc",
  "key5": "5AQXUCR4P2jpbVhYsZxmjxz1HesqyohVvoWMZkDD5yX71pDvDw68n1DgsjhQQGvBVhNhVznrZWCdxihFoKynsG1U",
  "key6": "5evCFrXWMfJ2aT4Y9gujSHEDcmNqsUUEK94UC3TSL2PvX21sLjue5qa9tGG5puTB8SdsSRvP5qxWsFuD6tNxeVcE",
  "key7": "4Ei7pwx6wBRMecG7jsATYRjKSFD71SdBid863UdQJWahH8fBEfdwKGtQx9pqYjJbo9ereSxkKExfFRaJGGCoEmEy",
  "key8": "5TiZ1CpKkGjMu88CxvEKo1wNZhjBfnXpJx1AsEBJRzmCw8QzEh53xvMq6XP2zR4vVDt5zT6Q6834ZY6w3MszWfPY",
  "key9": "2U7HPDoxj8RoWYeKdYghtTLhJYCh2hwa5PscyXt8u3ytK5Zi8sHdytii8QhS5RtCPnNDXipjwGxuyNDVKXcbDgrF",
  "key10": "5rvxTSSgCwS1pEVosXCdneYTDXHh3RZqG1yh6kKc7XWGqb5i4MRr9FcsQ2rjJ5MhWVGuGghv3423HSU7PWePuA67",
  "key11": "3UMqBRQSy74Dc2yL7fLv3uWd9VWNHhQvbgaLedoq72HAv47DGHXvq5YZzZoeJmGWGSiNMK1z4zjLHKvdkApcdBLx",
  "key12": "5ZcExtqimjkXBt8GE61emzCJEiQ9hczBwdiFjMPbH3N4n7ppE4mRMct113Jayp79ZwLVNnDL4j5NZbr19xmxHCuB",
  "key13": "4ZGzkNkEvBozQD1MorMLcRYf925i8NysZLyWh3eHL9p2NfSUJiynMmX6Sie3WwTsCunmh9QtbTg1cXxkGcXrryVn",
  "key14": "3QtgghCNg96kVRGZ3HQHdGRM4orNCpHmHvMYVeYrJ6K7tKksuLG1ZaRTdr1RNgZybHRF5dEk1dCBr3uDoybKwSfM",
  "key15": "5J2k5MopkJQVziKdmAQiyEhoEPzk7esdPeBpNG7njKTjhauBmgbvZ22NDTZBK1nDqxdbgGHWE1totRFvnFg4qXE4",
  "key16": "3LwEGu46XexJSEhsXKxDnmKeRtsRWWUi5ZGp3sVHtY9cQ8pEe2w9gL5p6HwhzU8DhtLZ8Ykp5QHoQbDztMw49NXJ",
  "key17": "2Ju2YeCzQ3fwxQN76djANwj1zsWvvHRijevFM8mCrGtxFpQ6KE35jYJ5ygF26j8PREVsLqbNd91KUvXT5fpH1huT",
  "key18": "e4VCSPJg1K3DQSfV5w4GSksKXmhC8TXmU8nbPrdpanNGekReaWsF4aMq6R5MEAPP2wX97KGztUTKKpXh1aYjtAX",
  "key19": "36X18fc8xZLxHhzSY1jrdtzWjL518yxpv6HZJomzEMQnWMPkvXPeTZLir9nDbSNh4tQ96WGrcWrwXDH8vsDijcER",
  "key20": "21uNqrEx34z6QeGmtB6vUnNFhvB393XX43mHtPsGWAPtyUS3W2paoZ3WFpyVsg6F6Yvbuf4VCUDC22TamgQd91zh",
  "key21": "2orsCj2yCxTDmug8B4T5JZQK96R7NNk39Pxp6Mu7qJrZFRopSpm1yW1E7FfZvsY4is4QgEWG6cvvELCNonKazgMb",
  "key22": "3ubBcTuinTcxLFALKhutddt59PYwS9nhVpULmy169rrzgHejQ8JmrHgHsRQs7UPBfGUDYvPzb9koybh7EFMvBd9N",
  "key23": "2DdcpiMBYUkw7nrDJFAeEKe5DpdXMszrYGVv2UVbCRkmNqWB22abdUTmRtgwwMMa86cvKGkLYNDKqPGyjVsFL9Wi",
  "key24": "4ZQguBLWoQSEt2mTTJhvneKADKj6mpAECWWRerT8CwDw5e6neXTnF1pKgpokwuDG6cVfnceGMAirNVUce3yhZVZF",
  "key25": "58VX2xP8iT6KA31qAniQ4hYh8S9f6Rf4A6Vfd9SsukhyDoinR6M9eH888QbYiNnmw7xnQDD5GNp4YPUvmmTeqHtu",
  "key26": "3FcZa1E9qap5ziJEyM3F3CLFD3cGogvjCRWCeB5abpr1JCyBkcmuQmxEnGnUyNWPKz2uYqgWreMWuGucEnJu3V6N",
  "key27": "59M6NNC3dvCHqKJcskmnG6SQ8FEfoMEPVJXMupnUtgFVCXhTz4bEhJpRFrHJ5PWrRPW5TKB49jGkGRfzL79GPVfK"
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
