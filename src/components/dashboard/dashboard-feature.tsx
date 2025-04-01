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
    "4BG7Ag1DJjHSMov23TfKduTUNXFg3jr2j65rgJ7CdqBcxPUvzUzgFTYGhiud6qnUJcMkynTJhPsXrA8uLgN4Mdzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W4CXv4CaTo5N5AtGtYjrDAGR5X5J2CremWXocgfXw7PQtQ8By5RLo8FZqFp9uJWTqUR3exXpHztUa7Cz863VU3w",
  "key1": "52fF9WT8fCsgy6XWxG5GLZr6yNUhstF3ap8pmbhuk7s544qoPSVP2DwwJPRhqyCywu4i2zYttvvH6NgKPafP3RUt",
  "key2": "5pyMDSj6NwKU9THyKBZw9QpyTMtgYZGVRpA8jThZE1pWko3MqwGPr4CdMANsuETERmyZBrubwna4ncjBPvaeYS5Y",
  "key3": "2S6AszL6kCJFMrhva5zkeTQ8L3mtUVP4et9tNWEmvnfL9rzhBcyUohE9X5uP98DLVXD4FjMyn2xPjh9LjzEwb8gy",
  "key4": "4h9r3Qq7t5uMHvKWEJS7XA6RET9AWgmdjwDPM8VTobtxn6Q7JCcQ2GGrBLd35SrdJ3x5SyAfiuqFRBWFy9Y55tR4",
  "key5": "3B1u3vAFYDtoap9KNHkJkfPkmuy6UNmQ1HtoNNvZy9CH9jsrd7cfoJikB8o7h5CndoywPvgqCj5QyC3r3KjBRyn1",
  "key6": "2WvhzjDmqFYUY7rn9kdn8CWMGW6VbFxDGpDnoAqfXmfnJKysgfaWB3jqp3GESkGt9zb1TrTxvRKNAdeFexMaPwud",
  "key7": "3ZbF2er3rk4xhEudUGek2hAmBh8j7jkw5u8U2vfywUuHUszQEZrLkSJyB5Wy7iKuAGnX4CpmJZwd2Rj6CNAMDnir",
  "key8": "4e4zL8zbnAgy96UhufsebMnMrym8gyWuWqagfsm5fmhYcCkMuvY8qSgAZCGtWJbjp2KvYD3B8biEY5JjEjnRP7AU",
  "key9": "3UzABDtRdngJugyD58eeCjwsEi7aSBnfzkz2exthvE7zm7aoDgr37tXpq4CSqU14XtK9LA8iJiqtpeioKM2jdsJ2",
  "key10": "UUNNVit4nkZTWZUyyBtRALKwoFCX1hoBdS35FJNKP6fFfWhLhjatTn45duVm3m19PgNZbePEY1xDURuN5wSYahU",
  "key11": "2AKxUEPqTGcCSVWXY3fRLxP47mvdxQwq9q7JTik4aueiYj8Fe4PGhHWJtiQL5aYc9DMVe9vPr29iewAh8aejya83",
  "key12": "3kWJ695pinFKR95BL9CvKPbc7wPAGg6tDsexEcu5wJYtWqT6tDoxMzgWPiqfrGa3iACPZYz6ysR8pxkeDQzPD9ST",
  "key13": "3t3V9HV3HPmkJXG4BBvqEzybYHLj2G3Jzv1GAyWghL3CXCe5AMZbKAUrZWV6wQHez9HPDfCjMfhHcyVek6WKfj18",
  "key14": "5Rq3RqtkKybxY87EHQqt7fXfb85KazucJAu91WVaxyRYvH7nTirjKqmPtdQhxF1yTdCk5pGMLM1yZyMSzbsyCiRR",
  "key15": "uijmVrhzpt2GiFPfmEjc6m5nuzaFwP6tYsJ8mZ2dBsGLceyeMAo4zxubbTshU5b8T43niTXtkD8scDRLyFLybCs",
  "key16": "NYNZdwMQ9ud2aVGzjW2y6Ms29E7m9JPNqqQpwYUbAhWQ7stGbkrGQQV8bP6ziRaJ2yBPiobFvT4kMPva5rnZ3BP",
  "key17": "25cHgcaN9femyds6cMbtgqG1NFq3Dehu9PmikmCwLgAFJHRp8u5KpA9zQydtF6oKWjebYYGs9DHbnJW918pzHtGK",
  "key18": "2ZBegVyT18Eie1issvEN6CquZi7MYkMyTwj78sqPBdb9GUhSJUVugNytX5g9oB1HNU2u94NAsP2JAepK8YHAzCcb",
  "key19": "5KRNWy37C4bsDNn1m7BtXyDYCUEp6WKmbyT2BsJES5ooeLDAYaXBGTyKvhsF8CQVS9M26MQyRYGqNSkZHkGwTzof",
  "key20": "3wg7WjdxckUiLvMqbkWCMAfPLxbHbVuk4CJkVK4njArKb6hYwfCftvyscjdgCafKCFeuWzcpSoMdreBvSq1363B6",
  "key21": "3bWz9KzVtsjmPKuU6joSMk5zk3E41JghCqcojFE5ZSuxwZHwa7TxAoX297q7JVoTEh7Wd2rzAiNpTYgQ8xVLxK3r",
  "key22": "2DQFnTgywjCVY1hZS8fdEEnohX6cbErGD1rmJokboqJxX2Q3cfZfi3jqtR95AEGjRf68xMmdv86Y6UCZ7hvBdS4v",
  "key23": "4TiLTtzLuMvarUEYFSKbK9qh6pT3xzLPB2zqaSwRtznRamKbWxzAAht1mjFCARbuEo2ezXoEuPobJbv4vdzVvBMx",
  "key24": "5pdKs3G1GdVhEkspbDS3fNY9CnnLExgNo7qjNKGaPUquZTfXHuYd8PJES2hoz5NmFHt2fbHy1QkKVsDRjnHWnahe",
  "key25": "45ijZcr6RtJfiWBVc9ejJVnd3JbEwDypuDu55S9wTbPiSb5C6JNLiCtwyjSLHQ5sRNVwqdmW2jgt6TxYH8bPCvDj",
  "key26": "4tAWaxrBAD7MVojD9bcvnX9LgEwRSQCbKZ7JEDXGK4CyzoHMUNDHnrnv3pGSaRoCddTYRk1L2CDVxAiHn6RR3uFG",
  "key27": "4mTF14dUMMZ2tpbf9wpr3UEh65EqgucpKmAqHrRJ9Nq9Wbr7yKdLgrMBM2aQsG322hTiCbK4jNPmLogdTSmS6q2P"
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
