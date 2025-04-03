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
    "2thXpZSxAVZRckCywdgPUs698V4KGD9ToaTLHxhvHoUrdZysM2vaEy2MkietSmwnhkM3QQnoLECdKY7kiGCGN3gM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35fSr1DSZ8tHK8qA1TCfjWfALkSsyTefoeN1q6j4aq8WAb899mq7VuVTEdraHMo8GV9JUbbtKbbjVEJQGckYw1vu",
  "key1": "2arZJBC4dr3GLG9veL7MJhYg3oErVop5bLntt7MKiX4z6CzMdDgiZPVEDqJQHuhpjTScXnN6mA8VfJAHzZ91voN3",
  "key2": "417hpQyREWCPYzFVMzN3NPhyJVrRTPYT4zwvh7C3X1g15kegpCdJ4ejs9Puh5cwZ2jR6MfYwzpi6DZmR5vHZfRuY",
  "key3": "5whBbhQoShy7o5Fw9vW5uBXfL73W898ABo74ufUPqgr2qryk3f1jgk2QDTDWkEezWXmoLV9m2ouYKKtbb5jRh94b",
  "key4": "2yfRu1HENDznf8dfDvELr1ieLf8vVr6E7MuQshqTth4g8mEmQe1gnpXxQza6hBKKLjc3yt59hivKahZzNmsxvgo7",
  "key5": "os7xruRfbsf32kdsDC2hDhhVbGe32PaqJBtVzvJEti3KMPwxNEjTm1FD24bSt3VJzjMCAGa6rLa6cQqxJ3q5Bd8",
  "key6": "4kt3zS8QzPNiMEk9brpAerzVTgo1XsbSaNrZtGKxaWfKcwDa2EJadkmMxJ6AU8JEVZM7Pqps2VVAPNWV2ZzpX4y6",
  "key7": "3hEVazaxrCGTYag7U9icqth9Z2dMG56e1sNUA9441pBC5p9R8gbAnTNRYA5aEYNa7DhW2oWjW9TKMVt1Y3ttksKS",
  "key8": "UCsrn3hHxC8oYVBWKYwzkV5MskqoKDQH4NRUpzTqzzrgjjXWPjoGcSDkqeVX4wkgUuekQes13pj6B5p4V6bXDYk",
  "key9": "4YxmYpp8Ped8BUMpJkXBQygANPRAZegW92AJmw6oGtDRG1fMhxWeZwTy3s4ShdajrXoxsAHZBKXoCJkBbi3iKjqj",
  "key10": "4fqmKdUa3XY4b7A7vN23kasiZvLe93Ub5PDsEdV2XgeHEXYPvZUfN4fgJH4aNspmzVhkaU1SHaacytqc5tJf1EJY",
  "key11": "38omcqQeZA8Ap37MBHXnFfWDn6bDR6T2mHSy6PbA46AKpkM28EjJxEPuZ7CxbAdkPqpSe42ngLWN2p6PNDgvqHdv",
  "key12": "2aQXyKeSfb5r2KPtV2rYRdQ3ksB7bq5tkDxRhgRQqmD5bt3oZBeN6MHnEU6NZBqzgwsTvXS5Cne9VCgqTA1FJEyj",
  "key13": "4X1TuJeQL8my8zkMTRmycs4VBqaonzjL7R5nyN1aQ9Ua3XyX6CbU8Hrd3ZhNwf4GMPPxdEMrKrqGLRLCnAp6YNJj",
  "key14": "59DtGooR2AadakHpqBiM4TvbWgDsuQdhPUwEVSxyLWtEFVTRJKCyWezwfshntWpeVLpt6iDWtn65d73c2dByiL6s",
  "key15": "3gYMbcmbvSDuWw7wqvFvgoZhzwJvVpcE2hAPFxrT4zVFZRXRFHk58Ya7cmxAthBwSCbYYDEmDcUv7UTQmJszp6KZ",
  "key16": "5V6AEjGpkEGuqy3fUbhicQLCUL47ffo7xc8rznbXcYU3qXLdkFK8G37iRBu2nMb5CGcpe6BmDAsAGi5akC2g7yqN",
  "key17": "9ki6gvTLDFdDnSRZy3eyuqpyV4jidzE6UsBL57VAXiUhMJt5KLxFC3kpLW7VVW9mhYufGRJ662dwA7ZzDdnuWbH",
  "key18": "2F5QpK4c6URTSpbbkvoj6Kx9LNL7PQKYVLVakFqRvuF3wnCVis1WPGyBr5Xq53WZSDfLEksbsvSHtidsYa8D6Aur",
  "key19": "5iZUQGK9k8wWd5eX9MPvtDLfRdbhaJy5CRUXcTZD732CEVG54Jur1KXTM8wNdmKH58cCpMv4XyGXZU77att7mEUP",
  "key20": "Tp5JZ2EdehuFpDNk9KXiaHXU9psBP2P9Bz3MA9cyTafxWEvpdk1WQx4Dyp55eVNMare9utMtr4MGWQkWUrs5ts1",
  "key21": "itEPc6sKcai8N5c4CKb4Geg67jhgJBpnqUT5MoGrBsSTXKMSna3FuA26ak1w9MW5ZcoswgPuz2uG8heAvMXRvpy",
  "key22": "3qbDYJizbTy3FJJRrbvkjvq3S7KMke8xK1PoMRXtSSGzpStTgdY3KkkCk4UNmV6qGUU4PJZ5ZpWEvf9RrEe8PzWP",
  "key23": "3tbWx8ooXvVgLiWzdxCVXYZPoCnvAy1rb68rAhyJMtcEvyGUPebFLDCmSyrnaqf1a1jKnAE32TFN8irQXfWr7GNJ",
  "key24": "38QAhxT5rLSic7CqWvetTLV56wePZxHZTavbpzLeLZod8MrVbwJReDGiUrQSire7YdjPDUYzU3aeAMrLz9WEgUQg"
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
