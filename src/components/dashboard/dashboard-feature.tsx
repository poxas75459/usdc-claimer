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
    "2aia3zU79xAsChu1PzkGJoM2VCh1cfhfq5jcc6QPcz9MCi6Gcbb3E7BoCW5GSEcykd95McVUu5eFhnHxfTGZZmTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nSayB2ojMJMk9bYtxZ1beUBKFiSKq76XUGcK13sv3wdyxMSDCgerGF2wM4AwdLLy1r3YFFGYUFWmJHeebbNizAy",
  "key1": "4io9vH2veyG9diDkcJWpNRm3cKJWzqHCDrgzM6kGhrUhCc4uxiAVuJ8zLQYG7fbDTh1iEgYBvdNZXovVzZnqKRCr",
  "key2": "4j2y7mWDTrgteE5Hzw4vjUgfCQk7iaLsNCffBiFLfGuqvvvLvUMXeJf5TFqAAU5UQog9ghbH8stDfKawoExtnjy9",
  "key3": "4ZrBTsu4fgyinVN3qbymM5JiXFcfJxTUWhaQjsfnHimHqiEYnp2QjPRhfeE36GoJP3ThLX4fDyL3GvLscamRq9gR",
  "key4": "3jHRR9n2dEDvRA2AZo5np1pWUzF7nFMEFreExKL6ZXG4TWKazhAW6DFD36rJLsnsTU2oTUS81Nt1KQ19j9uc5LMR",
  "key5": "3u83CLuVE97fsBGHRMeaqNbvsGvkjeeNDYvHs8foX8vMcGWMJRVD3dRVUQLGhmtNnD66U3LMuo9KypKQimkDNuXS",
  "key6": "4JaevcKmu1oJiJVgi67NBKzKcmSNuM8h9DZgr8HdwniSwvMXb4nyFKPxV2k6TqgdJPjbgsu5kA1jDCckRynuw7nV",
  "key7": "4kFVjY1DYm3sut4rN5voaWpzUtQ6dVxqG33z4zyuja9z7n6GNz4d1HzExvSKkgFx3bytr8KKM32orMMx6NAy5aJC",
  "key8": "5WaYT1Stg3cPGpViKapjc4zhz7ToHtAAr1VVYrGSgZNTUhfNex8k7vmGWyb1vttFPZUV1vEBv6ASCaTDCebGmvGp",
  "key9": "4QFyzrAYnkLnFeVH4irTHLW6hZN9YrYT57o2g27tkt7A4Eug5275kRTC2YqwVTbDotcRPFwK7D2DgwGStQb1q2Vs",
  "key10": "3UmUP54L5iy7Yi2HGDQ6fpS9jS3s8X9jykoV9KECRs2Yy2mxNGoid1aMXF3L1BjqFttfo89dcSB51FJTi2HEKgJH",
  "key11": "6eypcmGuQRFdbCdzqyFM7j4LhuqLpvz2qngbKz6TN2jMMWa2DXyea7fjUZMaEHsGZS3caVxJDqXC2bK5NqnkuGZ",
  "key12": "2n77bzwuvoUj8yENNsgtTvWsLaAc3TZdudikDQnh69pj3GvPUv9omAGs1HtRzNxsBrjwkbwH85AbRUgzHe4Vg4BS",
  "key13": "5uMKvjiH2jaMFbAXnN54TktCtBqk8HANiLKQjczSTkpcYddvP9h9d7FQuCMiajyRea5paYUCjA4SX7ypJHncgz6H",
  "key14": "56LQAz9UBSf77w57kJF7kJsGq2bsKwv7yBDXPhZBWdhL2dU8Hy7wNbJaQR6DBmTgAhc2jiZQf7pkDn8GuGsxtTKM",
  "key15": "2PvYeCqVodSgZYJW8wLNRbYqzLHAap9AFhieJCvvaaRdwMtPEiYzHP78F2gwyHEUxPBHBkoSC8oxRSXNjwKir8xF",
  "key16": "ywBMJSMswPC3cqVmsAhjvrm8YARDnfWNTKueCHwKN8fCJFd2Jhh1pUHEsLoCjTjE67Fi5ykyGx2mSFHvn5qWKqX",
  "key17": "2FMHMHRtEGyyRMpNraFPiv9TQ1pfcspkXddB1hd9dCLS8UTrjt8RDZ3vtqp9XrEjgPskaHREpkcKfPJM66fZSX9f",
  "key18": "41b3ncu1kBeYYBw8PEh4bmhNcQrxeBeh6fWGguF43ELKGCAkntFQZv716C96iH2XLTGjsUUquvoZ8Di3UnqLguJK",
  "key19": "4683gFtXgNpjqZ4B9UgbK7dZXXXB7AVHeYL5yHnqateSgyvaiLhRPhzRguP9he5VC9pn7B6ENMRN3wQPAQ382fGr",
  "key20": "2Us7Wr3mJsQLywmXwKTGdvgn3Z55SpJhN3CawYM2B2GcZtwMZABTNuBMn83uwfe2FYEqMWWKcmU55en8HFwfY3ns",
  "key21": "3VpuRV7CAYfXCXL2Dfizx7ZVZBmopsaxjoG4u5bR52KCueoHowx439oMXCqm7w5pwHFvN3AiG8eZeKxjByGW59Hq",
  "key22": "4QRr9yGHXYP21vXjf7bgDpi276xfH7Jb8CQhZHqFNoPKyij4ygye8qR7ZtrhBmhtQg29oJEPLxJjvDTBwjWnfZJu",
  "key23": "2ox29rMgs9u8wQfbv7bU58jY1sJHo9kQ4Lhe8je6pb66dRa3Urr1Qxhs9XeJidXQP4RF5GoF2sxLNifYjWaTriKQ",
  "key24": "3JmnP2gptMNNLpUN8Vs4WRyVEN6bPvRpLzqN8ZNooDFsiGnnE4ej2LpdMttXAgxt7QppS4Fj6SDW1awUe1EWzpiB",
  "key25": "2PytKW5SdnrNCQ8K3WkEREonowyuVdoVfH4eUw35EnUBmq48vzzWjte1hQQjvkfDiT9t3nsjkDREHGmWgcJt2NuZ"
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
