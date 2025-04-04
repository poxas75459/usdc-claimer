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
    "5Gbd3kcn3Ayrndu92AUAgpqjoB2FQSqn5zd3yittD44VMaTv8mDuNDP64s5LXc5b2bJAgThpmUGxcNVwGYRgcHF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4itERMpwExa733vskJg6ZMjr6DamBmHkH9sn38W9kVyXpGRv4KLA65mchnaBi3jof7WtVjpkbAuRzcReQJjpCUQZ",
  "key1": "2y7hzSpSXag4T29NTimBcZoXjD2TP89icyBnshwnehDVPzi5AMTgvpXBfqVKU4KFVic1N18emdumPuxkwcWQYQYW",
  "key2": "43JnfFHYZVwSZv8yRipoGZwAvAJVoBsFoSMNXNPd2gUypYhnPGGRMAtJ6NLm2djkBKT8S7KA9PT6jx3Bb4t6P75A",
  "key3": "2XPmzZHRBfqxQ1W3oicEJRqH3EHw4XkpBhGkgd1s94dska5kYeXQ2WaAkYsg1ScYSS8rBC89y6C6Q5nPCjnbySx",
  "key4": "55rdhcz6FFoVnspEwLZkN6W5hDNJ4UoPMkomegJm3cDrC9qS5FjTKrxcPExTCJHtwfBwhgaDh8ZHG6T4rjrDhNWf",
  "key5": "1VMyb88FqKiu3Am6cQWgpZybmqFESNQ4md6oE11rk4Vim6vpb1tzQgQ6ve3Sa8MCcAW83snWE9tk8YFKidnaj9x",
  "key6": "39xYEnxDmj18v6xxjSvrVDux7XQNPPGNNUozyAwSQfZDQUq2bxagbTaTZR5UqmH7nFPUZGgo8QtY5h8EaBuiE7Px",
  "key7": "5R9SceBs46iZDBL171SSjEMzBbRwTJT8D315BjeVzE4DVDzKca7zbDjmvToAZeJ2rHqL6HPkNG2giW2PRV3pVnr2",
  "key8": "3iQMBUoC2Df71EQeNPnW1YYHYwPMmiYv56caf5bjyNW4Fa7XWk9SUtxnAxZEBiAyGJofa84ANEbMXKddPRp8JHgU",
  "key9": "DedWhru8yKnZoso4cjDZtiLwufckuf1zZmWLz8WViWJW5gZgQATdH9ka2JwvmcX4Z1hKMhnDJCRfQPRMvy8vBDU",
  "key10": "4F3Me2g3W1daxKoAGQTUxxQniBLaUuwXTXkNucwRN1vbcq5qygRqGnMuZzeTLCgLVxym9Uorh9xFgRwgYJJW3J3m",
  "key11": "ub36rnysy6CBjxrpwF4zaDv1Q2pXhcYdnjxodUhBH4ADHqRzkQqDRLTYM1rYdAkbewoaGAdZpAhTAhD4ypHJ9YL",
  "key12": "3WNb1J1vZhG8PU7avqTcu7QEkYCWygNwJkofvmJjddwK6a39C8d3MSbWYeUw1yMgwEvuZx2YVsZoheL6nrEoovfF",
  "key13": "4dp5rTaqyR16SAXENhJtC6rzb8gE3xGLMo1Ktp1er2MuVqsFpYkTZpLnEC87vnPrHesmiEPyG952WZG8RpApsXYX",
  "key14": "BdWbffGGs9Ge1rBHjk8zk23rQr1ojLmy8pZwRsYLETD6nUcEcbDKna1mzMtn4mjzbyWmsdTnQkns95f8qKUfHt1",
  "key15": "3L1tfDL1t3ktLVwD3127SBSLMBZBXBPqU7wKJygDmNk8E8bHcYevRDDpg73XCs22imJjbjAbFUy8VkARWwpoCta4",
  "key16": "3CtfxVCK4vczFFYmh8zXgL34PQ7xzwGvQBvj8ejNTj3yr4M4KyLtUXAC3AJyKfgQiuWkc6Z7RLLAgTpTbnug7B7J",
  "key17": "4aoKkEXVvbhDcgEPXXHBWxeQ8VRqjUGz9DVfHxH3eGywkT6Xs6yZVAMDoSeWkb5ZeRuZvX3bkzGgRS32kA6DQVpG",
  "key18": "59e6T95UYAig5nutVndKD8UagdbxRyz1vsceP5b93wqFubM5yW26pdveKu5CZULUaJJ7b6FKDL4W7Zgxi8gpFFaN",
  "key19": "QDTV67RXDt1BTpvzHRmmak6EgysPbWzSjXJmRDJioMMb5wtWE57DvNW6FoT2ZHCUPhnaBCMWRUEnBkqdAE6WLdD",
  "key20": "55LWAf9pPrvR6V9a1mYDqFNcUW9S3zPGNR7MBBsrePK6evDwimPw3xd4p5qvfv6aBD9bo7BbjDJ88Y84v9s9ppJq",
  "key21": "43EAQXZzZc4mZmDEUF9EoYvgJukgS1W7k5kmo59GtBNi9ZcTmT7rGELwJnTF9xtLbE7oYBJEQPt93N26zN98G579",
  "key22": "4YSQXqVfY9bc4h8cDaxkcQXFk84YQU9CgwELpyPyzXCwSRatkk6ApDtYUCdWZY7oPdb4UAxP5brhaqfEK13Xdy6R",
  "key23": "JN3hC2cfwivTmCvDv3BYq9kkTUzvf4JtbC8mZnYi5GTu8n9b4FyQDSzyX2dNEY6YkqEL13pozz9Ya94qvXGVyqx",
  "key24": "3mCAxLECNrb5pPqqSG4gjpKbr7rPcUvWFAuKgh6CRAf4fsfhgLPDgBhNYNpz9kPQSJvH83VSA3D3bHMQxeoRD7V1",
  "key25": "4wdSe79gp3AMNceWwNiQmcHoZdjBdbdWwtKoAWqdm3Ft4jmFvRZ13YkEf1HVrAoQBV1iiCihdVYWxitBir35McEh",
  "key26": "2aL226CEhwkoFbC7mnnLQwgkEWAY56Fm298wqN1XfDdzHhBM7uJTdj731Vugj6TNePjzQVH78q3qjF2kDyDLzpwZ",
  "key27": "3XoLoXn7sqc46RHfVJTde4KhJxW8vZpY3fSGk6nTYCsUHmK22wVc1Psv7LJ87nfvyM7XH4htPKBzE1kSKvNhUqju",
  "key28": "4kK5djcrEs1qYhQ4iBPeJpcm854Kp6q39LdFyvNeegbWUid7EAXhu1gMLm44ACD8H5JdVKuu13WPdBAcJhGSHdgs",
  "key29": "2rFz8UfTcqKsFFU1piY5qcjS5AcLCWv8PByDof2GRGMB1gBeHZU7oz8H7BpQ41BGpLNQQCzGRXqWs9GdHcGn8z3W",
  "key30": "33h1xuTEeADR5Kz31xpTHceZpm5CKb2puXqygBrqp46Mg23p17GjAMHs5Ev15iJKfwi3NNqMkREGuYNRuRy4wpx5",
  "key31": "2gve2B67Jz4qzrzaAX2kMZo1T2ZcBFE1JzKpdgDgyUtQtJCvQ4R9favjKatsYQPdmV359qQsuHVU7dNvbiy35zzP",
  "key32": "wMWrXZHYLJA13sBNU8AQSLGtbKdXxQRGMpgGKPNoySYm38bkMK9y7btzY4gKjcxTBBSdnxP3FtbeNyKoRXy6BVc"
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
