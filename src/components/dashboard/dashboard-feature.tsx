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
    "2ULXt6iDkkYFP8goYYW2mMuyDSFzMWZz4Rc8AL8kCQVezj2rnEm4P4c9EAFZjXiP6qmdHGLA1nnihkvH8EVgyqJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ATAapXaWPCJBx9qkNoPSKT9juW8GX2Y8STRNYmDofTUsdg5L15FjWHzkJ4fAoZ1yi1YxgqMXi21yx5xGfLzuxe4",
  "key1": "2LwJu8jCqcyQSjmw25VU6mQVtmJShA4cFVmQHoaK9rruYKrFez6ijdN48wThkSxF5KrnP2jtKNw4PQxWGVtAV6uT",
  "key2": "52Nf9RL1ARgqz8MmmaULfPKWNkM5EULEkmcEbNp9Vu89p58qcjQ6xrDJSTUTKsZimo7AGmdzTwR6d1Yg2UhK2iKu",
  "key3": "4efWo7v2g1V4MXohytQMgaSjwAbSr8Xvwdbz7uEiUeeyQSpKfLZvsRntEHRzzSPZ3XWJYVofGNhNVk7nRv5gzNux",
  "key4": "qS3PgSpBsMwmCacjokuLMFb2nz2NwM1S8BpUt9ZHYu7GL3MfEnRyPs4QhqzHwF3Y23s4fAwdXQAzqPm6YmXUZuq",
  "key5": "3eRtsATvr9ypU3WEREfpWmq3zwjxZvTrgDnjVdZfbte4recwYBFAuDvCT4rxNi7AjFiSGCJUCWR5VN5ZBuui1Jis",
  "key6": "4CMnPsL58nPh9oqUzvegPk7hQBPwmQC7C15ijXt93MpVgLfgairBnVRaecEJTkFj1zxuRJTC4LTdnswqiuyAajSd",
  "key7": "3NwjXN6Mgpkj3ZSytCzdkUcD6uMrcBhp1U99UohTb4E2h9KAgEj2naJJ2iTQVtCMx5c6NpRrXDdQDXSG2gnqcsd6",
  "key8": "5rQFvBBP9RMparS4QUxEwGhxMasPqKSo3AE2Vm6EsBKAvshemUZMZNFEXPh9FtvBMhCdj1jnf58cRZ938jJbxiEf",
  "key9": "638wHWYk7EngUdjo1Bhav9fYRP7HoCR4bDBZjTgUQCsmhjnDEdaTuqMLHkodQZxoHVM99BncnzJZqHRJfTMSqYTf",
  "key10": "4ZwqJs8NnSN25idFKPsN6G1iCuu1NqZZw15hf9E4hkcUxHvKyHpc5DnxGbCq395hAmaTXRwp7VyUFAcTH4Pk65Fn",
  "key11": "27XZ9qDU3E7k62JxeC91HJ4V9fvMiKQj4srmxUBqa4oaDTzG17rQ7pXSVnZGKs8RD7tQzPgvUY2WSAL74t4cdVhn",
  "key12": "5ipfpQejgUwst3zqtZZWs7EYnQHYWJFXuXnifeWfkDYvELP35qEqyQ13bDudba14FotvXTdwDo8qPisDovRqqqS",
  "key13": "3bxmXUzFqAnVrkQHWYsaJJ6xffy82Cc6qXaz8sxXKuBkTWprUZg1VaenBZ5QqWBQkmtBFizKrCRV37rVjki5cJdu",
  "key14": "4W4wr7iDpyKgFEoAhA2DVgBj3gt1tCw1JuM4RX4kiAwMc71TjUFMeFwM4sToSrQZDYjRUqqLURqXLfZGUE8tWDWB",
  "key15": "4wWQwKfx3JZRWTazfpnWwSXievzowCK5jYoDyRucc3h4UeN2KyA6osJ77mZeqyUnboszEu2we3KoskQicxs47oEb",
  "key16": "3f18a2ZtduGTdhSrkWvH9g12JMNKGn7RpoeA8XHF2ZSWPjwNjvkNcCuYNSCMCT1pMTarNgNbkpwpkc45i42BSYyQ",
  "key17": "WVu2Wo3m6cFm8SSn3VD4vtXL2B1jRspvk71isSxzJS2qY4b19QnaLAnumxosUPBF2a6iR7SLHpLTSnWWJz8T3U9",
  "key18": "r4xzRiRSE2PtUFcFggogWhQfPz3XhzaEBfKWPQoThyTSCjqp5JjEjHTA6h7U8DL5BicSDGtdjFcezXSCS57iH6R",
  "key19": "2NQyhcJQYiVPy8BWaNJ9uVqSTXPpyFD9ZYdwnRz3BoT8qi8WUe3HasMG6D2iZAoePDFDzaJwrXYd1eCEuiMUxgXo",
  "key20": "3Cszyhst1oEwz2CsS97KhVSeERvMxPiwLHGCV6N6u7AH6ShoTbroiL35pfEyn1vUmrztzYCG1gFejRbq6hWqrBUz",
  "key21": "3jEjB1ynzJYQJjjfWEj6AXz5h5VM4oPzw9L4rje3uza8tJ4JNRy45h8H7yG16nVdVRw96NEoj8SPHrUB9ZqLvgQ4",
  "key22": "43B2gqKxraHmKrh5VmcTzfLcU41TXbEnViBeGrQXPTNNLs95gPUHAP9NTxjvsWovAnL16n4at3MJnnTLsybJiwdi",
  "key23": "4v7TCoZzmFsBXuipMa88m3RkayN8KXvd8oRXngV13DVtYZLmjCtdAHY8kx1pa8q27RNcx32y2jhVE9e4VmrMLmgg",
  "key24": "3QLjw1MqpxdxsxxREG5NDaxCBG8TnskkF5chpzrxkzty7hv3BakLzJ2LLgjn6bKFLp9zCyZpScbcLxatX2M6Z5Fk"
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
