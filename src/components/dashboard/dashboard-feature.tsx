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
    "E5VLH3wLdzpwr891BwGXZAExK7iy4CfxCtV7dSYbuSsrPNTQT29FfzFVwDDge6b3pRHKhD9gAUZHDYZTt1d5VXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tyQD2WFn9wcgZVjk9k2og5e64WHQWkmhqDKZ5hvtgtfN45wU2JsDtkWbwbXhE7nKv1PVUgFUouRPPbTroB2RLfJ",
  "key1": "2rGcvmKa9DD6L6zZLukVfkBw2GSf3fksXynonqo3dL8h3HrfADZRVaL1AcxDJv98BihqzuPjM3jM59Lq3gUMRmx6",
  "key2": "41BwSeNbncxCSDUZ3pWs1rySJhySN2aTXaWX9US7bBCRSZC1HgvfLXCzT2MrhD98ZVN3KHz6wRa3nZ2622u3Lxt3",
  "key3": "uJeHYGKtuBRsxk8azRoLAumEKVBrMqE5UgqS27WHP9RHMsZ4FG4iWP694bzqHZfsCRGw4ov4A27wp6Gvdn7HXdr",
  "key4": "WekSTxnNXBkAu9c5wMNJ3oJiLXZC4qxAtd5zLvziYV6X1SCXJWZRxyZXcBCNGwDAduqWd7WxbYkgvVB8L5iN87a",
  "key5": "5zUjb81PC1vkQqtSjTgkmcUmyo3iozUkGoZ2gX3UAXK2MTtpo4fS6HfrqL8GVmakB5BCEfGkoiGjWjCjpJV7jwXd",
  "key6": "4vW2PTAauLhR9Qj2MPtTBJrVYDD1ZNBHGkpkqEjg5FM4gSD8pcSTnVFt5KGPfm1gGiT5ujXRXKjRL9LX5B29387t",
  "key7": "25engnazrRUPc245A2emVw7PDEK88ZVeuSvv6yXBKrWnWRTaefSX8R6QRBKWPFBFdCNP63LpXaJEGr3NfDv9t4xK",
  "key8": "67KLyvBW2ETzC1gLajV8ftMmvGXsDiSBhui7tM433oT9aUSGmd98tM6sQsBkr8MbwtDVq3irsFqRArV9tYdxjn1Z",
  "key9": "2W3GSLwUUYGc5asJ84atAznt1tm6nQNVxMFo7eaq4NXixP3W6gNJ6v7AVxu9eFdWRvVZiWgCNy5X2R4qyg7Q9N5h",
  "key10": "2QyABB3ctiAsUjqKD6vnPUDgcAE5DSQCfo2SJwdvH2RVQ3QPfruU8PHcpuSnN1rauG9255fDH1Qdds9JBQpUx5as",
  "key11": "3smTUt2tPMWLDuhmSJzgzc7tCsbJxo5TphBsMcoS9ckkKH8qxDhR5XnayJwiCDXd1qixN5Epyrhdn5M2aH4pWSbT",
  "key12": "2hgCH6SriALC4Qzjf5hCKzvHRkNyDjS4ouwCpHU7BB2AQm7SE46ydPFKtRoAcLg9DogKnmYzuGgx51VdHaVgfYkP",
  "key13": "2XJXbWK3a6EwENvT6SponsZuc5wohYvcKSCqTLfPyZLworXrfYzEWCTaXbo8bnShv6bo5K2njDn4USuZyu1Z9tf7",
  "key14": "3awZFBkCor27xe6zCogA44GBVqALSf1TSWLGLkMCYUHXhtkxsMfhsxZYaCXUD5BTeaP1wBjp8U3HCqhjCBPaaj5G",
  "key15": "5RNLt9b6RFJgNphXwnLY1NpcEFPHm1Xsjjf1tTYtaTPzLLkwDXWTEuJ5ApA3MeAQco9gj3iXmGCcpsJZTkGS44Dt",
  "key16": "3o6FcVPow66hiiaf1Xuf4VNgc3KzFMzP1stEJRWZpTLggvjhWoemeeMyTPuhbb477wsWNsZczDed3oLQ6EZm3kph",
  "key17": "5Cc8H5Dpw7ugGsFE8JgPDW6peLfCWR45443uPMS4o6yN2EApwijJSaq1rUUiudDDTwVdkei17TDRm5dYmFDGivcx",
  "key18": "2Ln5L4V8Q6zodzS3dRJ7EEzgNJNic32AdRzyrPY1ToQyVxs26udGmLsadKcZR39CVsB7Lv1g2a5DyqCjqt6BCbCc",
  "key19": "g6NQHEzEd5dh4HNDjJBCvqBeFi55qJKUvxrfKHvaDtwDurV5xuAXki9633p68u2ut5DsgWFC35tmpEYvTC65yFk",
  "key20": "fPSSsGFyEidyLP21Y9oamT5B3nHtr3u3qa8NZTDig38bECwXmE49Lpky3aTUjK1hYWfxswU61sktHxoKSoKEkA8",
  "key21": "EbV7ws4DqpXtASTCSZCXixAXNAEqpTRhqf5VwFbANrpdPNLN8HMLGZXvWdtN8MMjZmwGDNL1KNKppQjSt9qPjGH",
  "key22": "53RVsgCg6i9cYXEuVgBUgCfr3gpxcwfhgvSPdrWn1exDghzzBa9JBX6DsCR8SAzXMtqwS5CLSaAPvSoTYwwQb1N9",
  "key23": "q6UHtpWtQC7U8o8aLZDiNkUnLYAnFnNQLbfZcxfbPhGueJnnMhUy2s6SyHfVq8JLsbCq6ioeNfo11VrxgLF9cKz",
  "key24": "3n5kuwP5VK7Ud9fKGBt7D3jCvxAB86VDjrvk1uBBLbRceH4mHbAPjRBB75nugKuNcNY4YvwHarEj135zEawjgFng",
  "key25": "eMiipS3wEDQVHoktpzrtL12J2LggBksRaXiUXNftBJes49YeT9LcQQR2houRp2UG6YnNZwuh7fLXqZ9UDEGXwpM",
  "key26": "5kvhrgfMRoLSnCqezNs3bu5qTXbBzS5dQgm7mJttJFAJZrvyuC7Bq4XHWMoCfK6XJgVHG89MAnuAfQKiaoHPm4PV",
  "key27": "2aNXq2Do4tRLyKpQVuA2wJq5PBTyEucomwTveEWgi3cAV5Bn6CTntk9ogWeNRcfpX9ajzvB6Yjwig2rZt95X63XL"
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
