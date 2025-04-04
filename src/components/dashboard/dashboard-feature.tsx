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
    "2qd3m47HEPunTQg3YiW6iuBfzDDQVLLXJMBCsLZhm7GQKsYi1WqbSj6e3fEdJ6zNCPrknoVap88hQJokvGzAnB5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hHxcHvqeUMioRnRuFi8LW5tCcwWRtpPTFE8NMfzjCZe9hkCMkoK1oNp8jn1Pht1v72fZMBiHiKgtnKGHQbhWRqU",
  "key1": "313pQWJUNyxdMmVrarpMk8fwSv4mrgiLEgBrwbo9TzFWVxqUrqxpYcDrdnn4TcwGmsgmEy7AUTACiZ2KfbhaPmQk",
  "key2": "oQBGdauszkCTGZEXajHbJD11Bq2g7Rxw9DpbjxoPS6uAoPEBwbQh5ZtbS3ZFBAzM96PfGBD33uM1nuraFgXzbEL",
  "key3": "3PKfqkKcoq5uFhQFCSTVF7RaZccJkxLWoa1caXU1NMtHqDyth28yENfDgaawgYJ6XwzwGYzpKErBk8fHU3QyizzL",
  "key4": "5NwQxwe2QrjGVy1pobGvDDoDHir7VLf1byjxy8Sh6K4imBewSNmsbJXW9eYMoqNdbDs2wB2U1HoWX67EexyHq9ar",
  "key5": "xe6bfiidqHzvHnRWWXdvBa3f36wk5wNRpJx7VGuBj3rZwqvjPSxD3C3h4tRW5AuzM6gE5rYPgxvAXqr2YkN62Va",
  "key6": "3TNexgRB49FFNMmLYAz7t7HKcaWuPEZcijALq1Et6HERp8x11rnTdij5jLxnsmuxvSvrSRadrTeFP8PNMDWXhEct",
  "key7": "3YkcHFHD5yaVRNkJ5uTZ8G8T2VtSUkpRoiocxDzeRr8RmEJeQKfzJ9MJa62TEZPAPi5k1JqZDTifu18WbYv3odq6",
  "key8": "59hGZxNCy3GMEEozw7FKRmx5AFDjQ1sejpQwYEyHVTStSCLkwE4HU9BXNgcdDBgbgp6s2MP8XPDEBoRnQV37kpWL",
  "key9": "4oktQxMBcCX4qQuhQt26tytUpyL3AUTx1FjBdR37jfB3nAh1WaMc7qDdSB6baXvpJsmSiB2cD9YsFWJgEqqFQWTF",
  "key10": "2pZifJetXnKQtLryKnTd7GXzStpCaL6zABZau61TrmfEk13aT6mh35Ejz9uoasB2ouTDuNsPDFSkWUDvemEna2RB",
  "key11": "4WwNeV7qdnbSBUTv7rzUpZKVwJuTYCHgyhK4vSyrTrCQvpzGevJUyYErPc5jKK27nz38bSg7QHN4UHTonzt8SJzc",
  "key12": "49DpbqWn8dBZC4o2akk94bNdWkHFaxkMaqFCYdJfumpVHNoyYoLysKeN2hYixHkNnyzcnYu3nt6yFxepfEjBP3ci",
  "key13": "4jEYArqyjgyj4AmJKSP3gSQjBLBF44UyaJdj1XfDqgGqTRLeZePHCBr2aa68jfoyG5tnEf7hRp14Ui7kgdQZmwaH",
  "key14": "2HZJmu5xAZZrZXNqyjEP3rj4eat14LBikrgUqqR7xrxRvD4BLpFQvc5ZLJ21CvQMjFvd4yxrZC236LxSH73XFPG3",
  "key15": "B7PGBZpbUdYUFyRLS63wweyZzFB1mHwxKZr5CHzGMyFe1BwczYCy6tZAU5DJR1ci9cjeF7mdib2xE7nEDR5xGht",
  "key16": "3rw31nJFu3mjknLaRrE8KRrFeA5PnGJDQcK1wz5Fsg1bHwsN9LQH5LYeir5z42efo27unSfEzWyZ8qbq9CzcQ8z1",
  "key17": "5S5LS22pPFAEmwACnFBCz3Ce3Y1qDcU4RE4qzL4XF1h7Ae7Psfw3WhvYBR3eZnRQvHRgWbsuMo6R2y8rGpaDhBQN",
  "key18": "3RhhzWK9ZFB8Hdh3R62fnv37EMdwn73C3Radht2Mp9HvLFuDQ2aEXbVuKxf32ub3Rmu2Vca3rUgdD6uXPqpk7uRQ",
  "key19": "2iAzJtQ23UZP8MLK2qVzAJodoCjjVkghFoV7iujM67sV1aT5GCv9ew6EHcmPrnLUh3Ciivh8PkXzeeeu4FGsj4Sg",
  "key20": "4xnPyeVbmgweSaWr3vv8XujTSeVZ13h8Wb6HbWttqYNdTaY5paXx4kSEXGMwVdWhnonMvEyd1HMpt6E9PNicmoer",
  "key21": "3patMUTDHKcR8u64nZEziKnrJkStwpXMW6XT9CV6cVM3RRmvJDC2vrxMBYbRpn5vPbZx3FLiZ6ugF1mjASMhpZhb",
  "key22": "2REBsZT8d4Eyq43EFgLmnUp9nY5VALYvP1qCx4j1Ay35rvDhJtG85hQZgjfh5vJnzaUAmusMSjhaium7RwAsmDj8",
  "key23": "2t8D857L7A33gXYdN6viiWqAtiE3r4f1hkGoswPHbKc2y37YTPmswGnKQsC7tKWie7QKPCeuf4BZX8mD5RViQe9g",
  "key24": "5Sr7iW1awUzdDZp2qWW154GVu99fmGgUyvkoNoRjq6aSazFCAhH1aQYTmr9Mk2D48wmK7UJcopASXMRUKuUdyMVR",
  "key25": "5mCcxjHMNhNtF2TraH31bbaAgfuSwqXQeu3WASn37TXQE2fC7WfGUqxfJtqPKCGz98cMnmUUXrUhth53UJX3Bia4"
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
