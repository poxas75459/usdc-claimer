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
    "4fRErppqKX5mpjJhifLiKRuLNTXpac2YTVkvh8v4sARLf9wud73qQbF1XWtNg7qSJ9gYwesCuFNtHsrRTyvSdeoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FkCpF5DqBDsCkUNbXYiJJNiXKa5c81US1C35zuQVnGpjR3brMvWDsu5wz6GkodkHMvRsgt3KEp8PpYdXHkkfpoJ",
  "key1": "2oDbUDLdiJpQqq9fbkRu5pGHkoMsqfqsBZWeAn4iVobzpSgXPSsXN78e1KscxHaZyR9pUyZFSTD58hnsBcFTxznm",
  "key2": "2XJAc15FrF3MXEBQmoz9azGRpn5w4HiHLEj2c8PoTHNoVk4F1szZ3vuXHcgMpVMatkd6zG9a1RDXS1PGBsnBX9od",
  "key3": "3sqV7SptJWfnr5ZvrwqWEnUimHb9N8Use9XXA5SA13yNQhuavjmQr2EaMHqWqH8bH7dMm1BE8Y3FQpktdZUyrao4",
  "key4": "4EerNWcVVfCCGLu936b6amzfLq8MtAK9DAtsPR6iLiK4mgn2bvbAD3aMeKdGjufEB389U7U9JA5ZH5ZQWf3k4WEP",
  "key5": "3Za9Ek3x9vgTjbmuopGiRfKfnP5xE2MVEkNacuiKDQ326TzrZvZxozscdKbVCbcEmBPuhoZtJCGJmqHeD1mphifZ",
  "key6": "34anN3JLag5479fiLyNrwQZUAZXjPYs5qg7BQ4P2VGncYUz9jUcequ4oAFEZaNrkMwb9gqzJJQT6DvB8kMSThpdD",
  "key7": "411UyR9FN5RmmvfAxup9soq7Rsmht7CMcm6VMfYvtGRCyFwzKYjrFBqWwMrYxDiFxDobrGC3nx7s4xLpMdfAoAHp",
  "key8": "27DBySawZHHnQZTNJeGfnxpDggJJ2MEeHd8jJXwWHQY5DJAnqpNvBQ9SAcyPxaJUAiwHRqMLnxv3fVLccPHYDrRU",
  "key9": "4inxNjy4MG7T524WJwXUPZjH8d9Km6k8gJhLQ252fwtEdsUz6yFQxteq7DntxA36GJkkaZ4VfjY1MetiDVuwtN8r",
  "key10": "KvojNQCrx84AizZetP9jGrcbXjMR1r7P6DBbKCpguBizuCAieLPFqv23RP6bD6pMq5KbRZp5U535AwQeBWvAXHz",
  "key11": "55GrmYbywJY2Z81oK9DXWyS5oDQiZA44EDK269v3kXHecK4N1zPg9pwXD5hJpbqUcU8kc6TbibQQ6VrzDviKu1Ae",
  "key12": "CYrjeBuDHAFfzAVXHc4B18vhwqgrs48vYsFqa7dwmWXuchwzMHSum4xcZd2bJBKtuXhD3CTatKeZdNp2qivnb1u",
  "key13": "ZJ4XETVxX8bTA5cQXvZVwwgj4Kf8gu6cphZPqZNbZrBLPkYLXKnK4rL4SFtYS7Vwvn2Fby4g3BNzRD74TtcHvRL",
  "key14": "3gX6naAV5BsqmYx6g2NuUuGaVvtX1qEWf5qsVDEfKxf13i3BmripPSEMwuscyStQkKEHLE9pKBwURoN2zA53DmCG",
  "key15": "53jvrYcPBV5rbsGLhMoRTEko4fYfmzPKfjynBFqi3JHbBArRVt3kcRBSrCwhqyMvDUh5aTbsRhL4JRh5Qw5eVmaM",
  "key16": "4TrDaBVCgn4xaN3BvhKhRPm5nFRkzJansLnMMHJfJCxryb4v2WL1SD5kGqP27YkJ6gdA9hChJwXrbbvF5ea5nSqm",
  "key17": "3piq9DvGqVcUSUT6ReDucmprx4Q4FWVSRwF2KLG7L54Rdu463sZsPa5qf29jcSFYXrhfpqFwAnyHkEZEzNnvLiQ4",
  "key18": "2TBWnrHqkjYq2SDmsFmZE3QNPKZAiyqKccXSowRDoRzEn7wybN86LsgqDaQo4LEVLywRw4r6WuwaYeLvz3x15vPq",
  "key19": "4Ee3xo8SvvhpjekhyKK33WvYUG3HUKTyuN2TUKRMS5bLqtPgMTJe4hfFq7sARTTPetAX2CCNKdsbT3so8HX1wWrA",
  "key20": "5ANttTfg6yrKucHxsTgCE5A238q7zzymqYrpZt4D2pciW9dNTScoLw7iCJRj4Jndn6GTpZR5111sEDHHVQL9dgnm",
  "key21": "4K3v27QLHJwBgwbZkn6PQVtAvBX3KDcjUsKsiK3DGBSY3CBUtF3itnQ95k5BcZqTy2BMnWxh32Na69oxJRHb4Tb8",
  "key22": "1tCPD7Gto5CV2gkDUXQGRVNcpqGJS4v4mpDWizsTrgP9vwqLVfMFNvbspfJzSFoAeYNxSGbYa4B8gbPuuZz7NJd",
  "key23": "5TD9YmjEyLQysUKbpK8adT97tfWyN92ThAiw3dMeX35o2obhsfXzLC19hSdubeh799b5qQeeRzj6VotUWL4oVVpW",
  "key24": "Eoq87YCJ5RQZWjNHL4uFHKCDYAq12tfMJrdEYYN7tJ88gfiF5sGhbyFdy1qpjJMUVHUe9HgjKmD7burCcjte5Nn",
  "key25": "3sEcdQYmEzMxTSD7GE1UUh85rJjnRCQmmvaDDaabsDrtMRDPgJ2eEr8exFqHsrvmrHR5yKcqwgXopZ9evkkN3uc9",
  "key26": "BSV8rn8NCiVQbFfieB7giMFmVCxfgH5jQKG2KgjQaxyrfWwkLS5ZHa8MSbeujqaNDQGXLhtuj6nk8VrZ4HVE9pL",
  "key27": "33Wm6Bc4i1mBVU3ij3ErCD3ywTVHoDwL5jQC8io8ggU5G1vuUgnU7452JiLZUyj2FpiY1if2Sh36UrVFv9KhSeZP",
  "key28": "4vXmo76ebPhxnt4kgDRtEyfu2rqxxC58SQe2qYo6nMwk9Q8V3RKYcwnjzqtPEE6hqGnE9qK6LKzYesi1a2cS9ZoP"
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
