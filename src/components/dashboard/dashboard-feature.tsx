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
    "3MHh7yWpLrfifQfXr2CiBA1kY1FnyWg4PnoX6kCcrTKHQKk9sJvcW2apZM5Fn9MYyndJ8DCqSNpawUdmYkR1ewG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fSv7UgWQA7nf3fRkvEWv9VqR2fHP3Ztt3Fzbw4sa4fnAPLKPxJPS4BPWsSMSoAxp6uT2EE7vw2yLd6aS1vfYKwJ",
  "key1": "2g8VtZK45Z9ow7eY7RtXFLFnWKEZPTrztz5KX5Em9NRBSxaCaqeYCQdD5X5zVmkEWbNik7dYuGS73uTfQ8Gxpon4",
  "key2": "2NVyNPVZmBQg3LDq6i1waxWsmuYf3QKxLdf31j9mcSUKqkywxZRyy4fZJrKeNXkQEuKJ6stor7KvuJ8N3JXTr5WQ",
  "key3": "ryyGLmioEiyeQ2iw7kY815r31gcMXc6AEfDH9xpqzjEDz6UQ1gEYYvd6CAo9jYDuRaXBqfZAGCU4ykg11hKP5j5",
  "key4": "2YW7y4Ko8rFRzP4LEB1ynRK21i2T4Dhn2MRVoJNoyigcLAmMnefVdgHznXcTjnJrCGN1vF3eTAvs7cFxoGyEb3Z9",
  "key5": "5yYifFYdhnNcbiewtNnnZ6Rtb8TAht34N4Tbr387KdKoyKaUfCHckPaQmQu9wRAZyXndPG4G4ZSdkbkZHPesYNiN",
  "key6": "4oNoG6WpGwYWQdy5ZVZxrbBQHSAuVMGS4CfxAY6yDV71Pg4YxCERuhjmu8T58U2pEyDV5umChm3cEkQ4oaBdytjH",
  "key7": "2UW8AApP9pogFyJzkLQyxDvgQfWQeXzhPQtB5FWR4HFvxZvQGH4TftMe1JnaUe36JKpxJhZky2kB7gELLhBd2Pgs",
  "key8": "3a5TWftMJXEvpfX9xqNDbYpvBDXsMoqWHQ3qQRUmyW728yCvRrJihWDVZN5YGqq4JiNgwQwySV65mCbWAyBRuxRG",
  "key9": "51kH17e4Caep43q6giy5u3GVAp8syznHxjtycZznjzrG4V5AZAKKvZCyVPE94AgvNXQjahKWXvwhMhkuuhSWvrAU",
  "key10": "2QM6FPSURkAZrVSQPGcynLfvqm7PLHxZxfk9SGxdfLajPN1Bd6uPfXoreoL7DENCyzi66u9XXxrYLWtMs64xbeW2",
  "key11": "5PTiqg7qnpNMBiFLbcK2fjLkjpDouGABv1DZLVFgGM6QY1hc3hyXFUESBvJVg8yBVYkV9D7tu7N3HF5xo6PmoPwy",
  "key12": "65JtyD35BTLsLMFYT7ZFqRSFLmah8AkQ61uDpsKzKLESDCdJ6rdYowcwyfyBMGQKTWBQenMe7Vp2Rqm6PP9g35SB",
  "key13": "5ideaudPUR7jK9hZ5nStYv1rhQSpHogEH66kLc3RyHz9KZhtPmhHef3feXHu7AQePKUhRRPD1uPqwjfukYNVDkbu",
  "key14": "3hZNd3MN3jr1HPx5g3BzzauAP6GgnNToPi1F5rJwgEZGnygydTijmjwM25daYZmPnituNhbuUNnMoRVvu5q3W2n4",
  "key15": "3tdSSvADKHKWCrUzsYcVAuFTk3H2HDB5itke4WyXJQqf6F6YUW1zybjjbsfyiEQAmXHBVi47K8ZFRTYqKK6vWded",
  "key16": "4aV7Dhui9TycDpb56RomvCtHmfaG9pt3f8DTKNSw2MYirQxRbrSXwvXvQLA9VM2xUjCopM7sqWtjMxxTAWgUzhtm",
  "key17": "5NL7v3RudTutZXEKRH93HGPj62DpLjQWCiCtNNA9mX9tccAUNWvMXc92H5MB9dU5ehtsnTXYL1b9vWUNcQTWiGrW",
  "key18": "2Cb1rjVoeNmZ4xYZKm536pvuQS9r1eGy7BG7jNN5HZS4GzHRQc1J3TZbnatZPidwph4heFcScir8AccnLHB35xAA",
  "key19": "5qXLh7VWsZqv99nXMfY3Gw3Rv2RMBTD15UucyUAcm4JMcH7cyCJo6g5HgVGteEyMzFEvuRSvq4CtbhAzGEvNrhad",
  "key20": "4H5rEMKZBwxXEt6CYnBuSQJV15R8o8jQX4NXmx9pqNYQgmtAVFfVKWpPLxaXW5MGtvYtxGeU6C4hxCiWyBLAe56U",
  "key21": "4eZMLy32ZvndBbrHwaDshggAXGTwUqugF989YdZ3SGRuYsmLX2yYJrHFq1nVUGXt84jRjaAscUwMHoxXJTZkG9pa",
  "key22": "5p2QtY3ERk9n3hmJuyj1RtzK3V3UEQEzQBVRGY7yH2ZDuWxcALKwFPpYHFZLriRptyPFsBWbdCuXc18oqqSJWf7d",
  "key23": "5e1FXQTsqT2oavJtcKp1g8cPqQRRqrAYUAbxpw91Kc6d2R6LLcZSzG1P16auHdXVkbPpEhgWtpKrEDxCUzWeBe8E",
  "key24": "3CVheRK6oFe8YcSR462swtiKU7bp7y5dNF3cCvp2MQxtzQCELKC9qxxJZY8KsKqAsLhrumJvHtMfJvQHXrciwX1G",
  "key25": "2rN7TL1LXMrAtyHE5GFcsRGrMNMuJAFrxbbGgZTv8rvD4iyPUVCHdzKgXpntV3ELMj9bxbmsR1M3fNQoFXDC1KX8",
  "key26": "2dzacYQPjiECX2FHyHKpStaeU9d1tBbxGjkhQQgnjCAqJjur5okmFQuSMMMuHSNYVFeJQSUP64za4Tp9mUW6F85Y",
  "key27": "4pzjJFf4EVUi9ekKfHznKYtkhhg7NwGZfF84Dxu8dRVKYKo5hDn3wfKMPXm5y5h9Qo296dq46XzxM38hTnw7KaHd"
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
