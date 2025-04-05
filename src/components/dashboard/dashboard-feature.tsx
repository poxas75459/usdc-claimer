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
    "3hH188sk8Eu4U3ZVuGTZpSPySzFYm15hv7H6skooqC8HL85rxJ7V7JEggLfvMt1nJXd9K7UBZmA93csPHGNLY2g6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VVDh9hYmhFU3jnx32BVxxkFTXgFJ2WB8hTWnYwUB28TszBATx99Xh7h7euQFsua8yQJ8bSEbke77QGsZNvz7AJZ",
  "key1": "3tEQeie4HVGauAKMgioyrvr2EgCtgyRNggoTA4Ubz66XVQYJ4qWYHsjRChu6kkPhtsTWXoivNbrhJXYG12ZGvkAD",
  "key2": "4y9F7zq5TVhLD2RtkkvHNJTYMYDYAQ9YkvFYQpkMZDEGC6LmWpZAWnE6oDqSoZbS4yG5kw9pRsPGSBjpnKS2h3P3",
  "key3": "4CnoiCmRUQwinm4rLyehzKFj4rqzpfBV2PFZTi8ZVPz3w56hRbz4D6WSLvB8YuRcJTx7EqiAKnVaa8iJXnmv9AYr",
  "key4": "51GR7VjkmvPHuSdmpjRKeDEgiyxFKMxC7tX5LE1JoseuJpp8PGz4MuMqqPbGCKheM4LRYg7PYZcWEAF67A1cWDCB",
  "key5": "37HqYK5BvpoLRgLpheswKNhN4W6AcfgCs4hTgPEk9RafnHFkemhcZ1Na7AKupA2bLS9zhNAQs8T5oF5YUVMGTsNT",
  "key6": "43NEzDuMQYdkAquQDpJHhVpFfFDYyFLqWkqtPk2nM6LAHmtmhwTYMfEmD1hTm45uS946xkjK7EQVEFzXvG7AfDcu",
  "key7": "pbbrXzpAnS8XCfa7j26ktVFVUAfhfNVJ2Sx362NevLV2P1HkZwS5ehCmhNAJGT6FPLc4NM1deUFx36VSc9Ly5FG",
  "key8": "5CCawqs9twr9j2Lz5HPDmzZrD3feZJzuis2R1wyuY8ZLsVLemPjRs5P3DBvENkeoTVySKXT6iCwgjELk52VjuQSw",
  "key9": "2SJ2bXtVMobkwukcMrFwePCmE14G2kQCMuTXgELk9YWQD5CQiwZg8oP12RLef8J7Hy1xqRs8AM34hjv6794ZMGjY",
  "key10": "2fDb7faMSBAMy8vaXpUcKJH9APkaRpaggZ1cJrxhzuz9oURG7CkLqU65zfrPdMcQsfgetM8muDxp1ToJtMFRDqgX",
  "key11": "3QihNoPLyYoria3wUygHV5rAzYuoZWoboEvhVSCVQvg9fbEC77bER84w1VAbARuGji3PG8nLW6jtG2e3URB5kJo2",
  "key12": "TJEiR2RmYiYU2tWBtptK9eQ8igca3cNBEaFZ5xF7L4JADDUJ7QkUz356sLG3e5yVpdMv5fum27GxoSViKCzhK8p",
  "key13": "vQag2JwQhrrZjDs57tcMY4P6jMrnG5vSnCB9RWm4KzA8n3Z39CaWQjkbqux4jMvkyzEzA96CL8iYFyhaLYmwbxc",
  "key14": "YmEpsXNaY1rLiN4882XrSkxu828rP9bDP3NNzwW4crr3LYq8uX1EmuahmuFELYzJU2zM84WoDxZuqyUSngeCpDH",
  "key15": "3nYqa71PYMBuw7sQkWmGDVkY5jtt9QmDftztfv4GbtFqC7tj8FdiL9Xm8b4zxTUSFsBZfuqDBQvWkEKSj9swhWGX",
  "key16": "3qwJrxGATzWiT8hxAF9678EntM2DTZkrqf84rYVLNLbkPqvAbCYR8CCZMonooLGyGv7XZENN1rLB6GohkPcGTZ4V",
  "key17": "3fXzEFJFr6EzYsyKudDFhaMJBGAFw5adKGLdjphFhJz2vTRfAjqZkaM2AqSjtUq1GC63YvGE7VNp4BkVqNeHQLKn",
  "key18": "2K1UWCJVctGdWsJhVrXuX2Zbpe47mNaQEuzxjY7Ck7cyyFbQQL1TZGRbg58PJZ6RXeKjBxfcSLv42qBvLETsKbdW",
  "key19": "4BP3XnwAESdWoDFZPrTUtJpCAVVfYjzuykGpSPEtvgCf9jY3CohYD95FQtP6NQRsc8nvkM2uvJmLRkguYkhmLiGA",
  "key20": "3AGSv1fgczRYhoR4bLqZ22BAQ8o8PUzce4rxdsMeCxQEnj1vR4R5sQDnWnaCoUCVkaSusrnoaeB9QnbGvu2iksvK",
  "key21": "2TEe6fgdstx8ashchA1G7C6ZkuvkpoXnmtcYHMvZLHNHarfXZQrnsJErM7A2CgGGB1acqGWtwASZMNAENnRKr4Wr",
  "key22": "ho8SDGhRBBY92ijj9sXaSjqmpwTDdy6tgxRoJxXjEHdZCTokTtn7uBTpX1XBQ1yZWo57hKp5FGgvTPFS9jt2gkd",
  "key23": "4mbUBrK9cKdw246rAsz5DYt2XmdbC9HwKjhVsCgKhvpph1zPhbZ5zGqkZmzmwmG18F2NiEmPsBBNq5b9pAqVyG9e",
  "key24": "5DEo7hGhHjYtVGz5RwuwKJ2uxBEXgbQ5cRP1oroSZYseXx71xqwxiDDLRPF9RQeeU4RxGwAx3NjEM25MPhCjCJBT",
  "key25": "4rZrX3kC1xQFkQF97KNBuJNapbekKJr77nXbyf83hG2E7dB8QtKgnhxbiVoWXxSFCTUyM1bHMz13bcbYEShm7mg1",
  "key26": "5bZjDHi2NgX1USGZgMESLr23aj4Kf6sqdS7aLc5dicxNvcyPJCnLRVXnXUyqgLzbUQvYALHDbzzrynctS72wCGuR",
  "key27": "2Re1qvDx9N36iBdaEA56q8GSiyuwhLVXPxpJQSJ2Q61YmeiwMRs7KCeAmBXznuhxPHPZ3WpjeZxBpFLvrtJE43VG",
  "key28": "4pZEVzVvjnqPZAhj9E5BBP1EpZmdhdecgev1wGYXn4epFAb1Ms9AVEz5wJxdrJVyBCp8c8mfsoHqCPktcufMbMxa",
  "key29": "28svmca1z8yWUKKbxeXZCqt3kSVshMSuCEWgktJNHyYMLxP79TsPo8q4oYRDSSDjJiSGKMgQYkfvboV2Rjp4HANd"
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
