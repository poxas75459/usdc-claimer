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
    "ueqwGmjAnzHBxo6vjY1YxaKDCkTqqzXkhhPQMRKR5WjSErX8MLRmsn7WLKydZT2BijVvu61R2jMrX6TmQ5kDqMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wecT7bSZz9tUc5Az1BRLHUPVXi7wpY1a5DZh8k4Eq4jtMFBqNijRqecwQ47CYePb5J2ieE27rvn5c5sQHEouvY4",
  "key1": "4xsu4s5uzNVnZx2aG8ASpdUnZKHFZYuK8rPgxgDESDTzK7kr9yQubncS4yqtaqpbQUZmH3iNH9HqZosnuqWz4rtB",
  "key2": "3sqfnbgQAjRsn4Ez1SMf9v7UhNrtpyjKDi7QPdwfKK3eDS2YxKAH1j1PagJVFGetDPioKq2sxDVUACNSNUvZeDv7",
  "key3": "2XpSKA5cGofwjszw8wT6TbKyHCejH222HUFB8m6TVZxND6zpxTrwWuN9erLQBNrU5ZyXKBNdeLKU4yNL2Nogv68v",
  "key4": "AjqLMb3ZkYnoi1MNwcT59aEZ7GczeqDiW9chB5KL7J8Uu8qVaiyDUtXM84QQPDbBzRm7f1y3HSHrHggknUKaR1M",
  "key5": "5Jdr9Soa3REx8cHw7URDEjv8Zk3VHnJvtf1cN51MzReZHA8PvHsxe56iBYx8YKGJFb1G1n37twKmjZXcEAkayff6",
  "key6": "4HZLN6WCeCHZNcmf6Ko9RoKDVhjQUFBBsjnnqp3VjhAfGgVufYkR72cNWQy1iMGx7oEk8QJXkmakoJnCFgmyAKMK",
  "key7": "6T3A9sPBdD1iBa2JJMiFfD8B7Zm2X9PRMDbmFjCEdNwfM5DphsRKxNxEYEF5HSxv6WDuAW4xFYZUWDX7nYeceHK",
  "key8": "2BWRyGg5ek12GRrGLzzuc96PbidFHmCnHA4cyCALtQGUsP54DF2v1vM82P6dMe5pC8X8v5ZAgXJ7Ed5QkEwJmYyX",
  "key9": "5VwwMeNAJtQcx1a28adkK5dCQ6qKvUDUNogutzmPiZarwTtxb97NCSGaDATvaqwZL33bZaaBQxUJvFeTXgyfvDUq",
  "key10": "4gbgY3uQ8CzpRBESGtXtnYXCym9EovP1RCqEpRzJwAxDKQxx11c5JZLT5MyLznrwf8kmtuYNecLPJXRb3Be4sNnG",
  "key11": "42omMAV5Ej1QB82a1VKGkDHX3wTgVWjEZM82DCEv78GxwLkKmwsD5RsNoBL49w98am8R1RAqcK3oetk9TCSTsRsA",
  "key12": "3sSM4uULDM4qhXP2LucJJUhGZ4voJ4bQCq9H5m6ytrqk22UoadrVXWa6a7GjvW5a5vS3gQPHNTjsDFBpsfHuoD13",
  "key13": "2PWetc7QsDKrBX3nCswAufdA3dFaMxE9ysKsEuJwwxakQ76J6fAKmVMDmDKvXPpyhWRCmFsRZ8KNxg1xyqwWCtrk",
  "key14": "4E6jWztGdHsWexgrVFWRqTBrruqBPXFKshEcVB1eeS4gzZVwtQyPNcxumA3PQUEDdigfVhve23wmks62tFy5FHmf",
  "key15": "4vAa44FvMHkP3ibXphXHZ3et6E7qsBwfWA8ZVZYWMQsgxgZGM9347dVj5ysLFzrDjeWpqQnvEYnQec64LTnSwZL9",
  "key16": "3kQ52N71oPYCKJk5BpVZQYwqcyhK4NkyFHTscsaBcismtYgBP3srZiZMC3vC5ntQdc8pNkmyhTNzSkRGggZCYyCB",
  "key17": "5bon2FkZFGi32fae8KXJSgyCm7b655pGQFNCCBVBMGVFuv6ZtZSa2ZMHUjTTfuE6iHaudXxbtt5CRy1ohFZY6rwz",
  "key18": "3dn9GfmGjqmXUbFViCURhCn4obYp3mMrXAxdvEUHfLeAJRYfaJcCHaFv86cD9Y9wgqGUL7JMrG9r9d1k58ohC4nG",
  "key19": "4b1bBzSaERaawavF6Y1KFLm7eapzeR92Cs5uJkE1CuMogzg8pyZvvT2RzdojtSQcYjLVNsi6FR1SPZXwyKyMEspV",
  "key20": "3kf5UzKFemb3tqtLehj4ayVLFDLhonbxjosiJR9vaCHCf1eSmPKcWvesKjpqs3DU838imasGHaFZ1Df1Qme93sKE",
  "key21": "3Q9Q6KYJBRCBbSz4noqTEH982q5N8eEYpuVzEzdr12zg4MwRtN4L7ZsMvG4TqhweBDS4RX3f1aCwqAk4smm7S5C6",
  "key22": "2my9nQMpZWqC6J9mxnwgPS9hwNZzadCYtLhiDPgKqZVgSRkJZUVgvAQZpsvKiWnbaVbWrcLX9JXU6N4jMfU1XNbf",
  "key23": "3DqyFhAdYxfuvJM9VeRrAFNjxXjAhYSnFwBuMWkPdwKcBd1EPskpsj3aZwdRpjoMnagxHxE2GPSo9Thddqb2GPZ9",
  "key24": "5EtVmbNhxxLeLCDB1y48jJq5vQ29H1oCi2rxm56H84h4C8AdyPUDStHtHiohhiyATtCBCCAuekZsfgwESi9G27bR",
  "key25": "4HqhF1xVGRmDLo5EkjEX6eJzAge1kG81XGUFj9hkSq61jPNdcy4feeS8F5uXMcQzVWUTx6wHAqAfYBwCcHq9nvXp",
  "key26": "26SAFRipfqYra1iRgfLrKRCohtSB8TrNeUhZQXrfTzVyyeMQiP4YmHoVRWCCisXjcko659MF1TiC4c1JsPU4W8cL",
  "key27": "5vYEyL1RdjWF89USuq1BaNRWYGWxvAeqkA1nZ7t461d6pbGVps5a396PZJHYy1AMVdX8Gk4fnPCM7hXAGxsdVxMg",
  "key28": "4JXwqEjQLSi6QhzaFn2Ts96MELur9CXSkSnnhp8h9ptjYErwarW7A9HapJEGJNqfacuUHa8fz9oXnkZeYk393C6o"
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
