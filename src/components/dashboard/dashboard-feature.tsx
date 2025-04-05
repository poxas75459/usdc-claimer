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
    "5qAocFT2isW9M2W3Cr8zA9AMaCDBPPnngHLswFsJNkGfDgz5XJfzu6FJFiJsU8kc5zdnaCL7qDwYraqZQRYkXv6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3drPkdZ4KXQCgHezAPvUnZffUhLX5Uq5iERhoLMfNCGXiNMCXQbgyqiJ4UQN4SWVRqMUUo7QuaoucueUMcYnr2wn",
  "key1": "5qDMrHL6YdqPhdPPZQyy6ceFfv8qmFZ465fgdSGg2x4sZ5PDsezP5i5AUYRrJtS4s7HJHuzWdw9nCiN6QtUsmjJi",
  "key2": "4v8Ko3FBewRyjQf9Yb8tXB3roPyq5wRvWT5PumG9eqKEWpiydPYqbdEzzfkoeMKRhyxQytLnt1XALkJF43WbWkEJ",
  "key3": "synQkputxfHeBHeyorRwtFmr2LbAWohdL5W8h59FXGC6iGsUCAH8N4WUfEe8HANqCvLtFX4ahnozQtvxe5FXuFP",
  "key4": "2jTMeb2haqfUhr1nVvj8Ft6iY81YyksnzUEpkU8oKaEuSDMH78cfd4QCjBGAinWfR2FWVQJAggGXikfZAaBq2H7E",
  "key5": "4W5WS9KARCBZoUDSSofM9FieAsq7CYgTxieM7jcxkFt7DSb77SAPN3drmiy51ja5mFrSSGGC8zJ5QPHTiCuVn1w4",
  "key6": "3syhreWJ7jZcYhs494YZAViLJM2oWcvbXcBZYBRY2sjyCWoiGZUTw8mLNV3zG3FjxZ8zTbFQWYNPjyQQ2uXQCoVQ",
  "key7": "5Wd5rjZEXd6oQHpTVtbhXrFoeogdjyR7S8rWhWdA6QF1wzxiJGCh67PYrDEooi6LARFBsfDe6R5di5R54GTdqTa6",
  "key8": "SNUVmRPUfpnt7sCW84v5W5s28V64qFwEu5xWsgyUiHCZWPKYJfDKHv9Q3Ht9HbeFDccMmbrVhx1Ky571AZd7od9",
  "key9": "5DsBTfVczvniuSAhMxGPpZQtq15WYB28VcVKAAwvYfWXK3JN4toEmeEpRZHYmGHPMwXs48tKQQas1dPmrwc6toJg",
  "key10": "2o8S1Zn5Vigqa6Wxv8i9VpGYNCRZa5c5LfBZBQhy3FHNv8tSpCs9Q8jV7L4PvVxN8M21EtxYe1dHhSd5vMGXr3HF",
  "key11": "3dScuznsqdtm8q33VbbowAoctYVCDir4thHid7KjZ4QFpY2b96KsTWVHqKRVWx36JGH2tvm585qRTurdRJfgV7GH",
  "key12": "Ck1RB8TeC5jwKpNXCGFGNkRg65NmGZLmZt5CwFA4hkzk9A1X44HhDxrHV7dUDtvePet5GMevDDdUz6VbqbbGTEf",
  "key13": "3yvnD77tDCyGbhyttXXM5gs3588aZqM4RcjLbDDER2zQprM7Md5VE4sD5ZtTmvMTDtw9ZgexRwVdCHiygRaj9on6",
  "key14": "5uy8DmFBVN8oMkEerJjHFFFphspZayM2EC3aL3EboUtCb9SFcKg3uBFic1M4jzd3RXEBCUrQPKSssgpVfd5TXjtW",
  "key15": "3D9AANUMLXxF3j7BJyMgHgmeuQS3swTUGKXHdrkwSf1wg4BheCvtS2dRBXTTxCEzgQS3iWh4W51CaziaNiT7utgc",
  "key16": "4QJqAvLWvWSP8B1qT3hwdLsWrawP4q8zbucjd4Uws5ivcsBwoQbLyQ2ebEDnCiFxfcxXnz42ezbetjR9L4c5MuFE",
  "key17": "3nCY9oJT35GXK8DpgEH7J2m2rsZ6tHZ3FspytWVoLK8XTokofhxz94qxMRZwEBwx8GPPALpNhyH8BtUyxAAKtMMm",
  "key18": "2vjxBZhNmneTAKQkasg83Mpx8RxLeGnfDV2sCkgxVncLJgiPMr6bkHcAWMLKjKKWBN5oRT5MppgNrkhy8iEvXKeS",
  "key19": "4cwPu4Tn6i8DbGMgdTwgdGirinVwcDgTqqTGXhr177Nm9hzBxgDR24JbN8mg8Zns67ML5bSyjU38bMkzaVZtRB7q",
  "key20": "4iQ6hxjr8s1LBLHYziqh8o6C5XAQAuf3bEjMTU7HyhxodRaiQA63WdMwZc693pwyHSDQZppejMXmLry7weoEEC7W",
  "key21": "2HkQ3FjeUK2mzDMa8VzYmzMpy9WLVZFrRT5x9gyCjb9gmE3VwepdwXQW1YyHz4UeTYCFiMXTqp75EwSq8eaMmqso",
  "key22": "3FaxzXBf62tCLn2Ap1NPb1keE8WqNRk6gi3VbCQzoHKEPuQBFpr6oYHHVVK1CxTgsCBNNjsxEod9KND6hLa3F2EF",
  "key23": "2Dh1JFo4ptkLLGe1iKQz4CJyWJtMtRq5RjitRvqBQF8gXFYt6GAYVfbZboUx3VyyAPY6GGDET8ZfghaN8PLEpkAr",
  "key24": "F3onwi1irBvAjaJmnLPJxbsgDejaiSDK5j67bntecaNRU3ecvDaXxozZKUrTWnUNZAHs5FDaGZtGPUbK7B8ZYTp",
  "key25": "43DK12fSZSgPq5ynaBMDb2KrAsjwLr3YyCAD1QeH5yojMUYBbWipACNBf6jr4tBbC9Kft5mx6ZRAtxBMfttV3bq9",
  "key26": "bZiLrcjsGfP82rQJqRQs6TLhhPTWvpAKiBo8E47rWwcTDAszVdodHCMGoNUH6xZTxzdqNVPRz6pynrR5XvyPHYb",
  "key27": "NkuPnGV7NaumcBEfvHbPhSvYPqYvm8G14xgr3TdNy29cRTLZojGVx8GL95yXicbtigHx3Tj1bSDcQfjCqDr2Fk8",
  "key28": "3NnzniWLJszgXj5MJ2ZrqZhsKxvEaF77Tosan7w2R7nivzS4skoUunwSiba4KU6P2QJbxMg3NcjhaXY9bYdvpzxg",
  "key29": "3LwSkt9Gkp2SZ6AxBqNzPZzSsKBYUNqTaAn33JY6NNNxn7auzEXBuNtXYNcbsub5Y4HTurLHvGW4e5WXXxo4Q2KL"
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
