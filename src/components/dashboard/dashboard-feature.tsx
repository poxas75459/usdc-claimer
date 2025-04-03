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
    "3ewCU9uQF23uSNzKjxdFK9BnwdwQHFgxyxRt36XajWj3maTJh4S4kDvqc4FLhChJFf7SjX1FovtT2dzKqwBKg4uy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h1jj8DiLc7JC6obwyyCAEG7gah7gLLiGVni3x3wyfi494aw7FM6vqZmLjvBbUHWKXXwwv5x4LJ9SLpukbPVgYQf",
  "key1": "5iYPqjYsYWHGhdKB7w4YJuGzB9WLkJHirVRWwz3cNwk7tEYR2yXkRvt5ehWfiaL5kpGSLZADgvS83PSEjh6zLzCg",
  "key2": "5R84CejckDr1sYaBRpCsBAqn6uHTG53vLqf4Qzp7MZ51UJ4LCNEkqRhnpjNK8QxeLKL6q2Mu9NJ9JdJEmL5746BM",
  "key3": "3bTrukr5w4j5VEeW3LFsCujZC9qotsWoJJXtSfnxKXvz6MtU55Lxuw4eWA4UuVK3wMszdP1nf7TfstDKAerCxvh6",
  "key4": "5HLFjFNbYGVcx2E4NwLHdBAXNWZ7MrxZgR1GjjzPo62FYQfHarKhVtkjLDVjGbRkjjrgsKi1PFK34nATfJw73Sxs",
  "key5": "12D2qtBx3kUeJ2KBG1VcxGfxzYdy398vQGoMygCCMRFbfjhCHqp6g6dEQAxBwT3ZEEdmqY1Q5p6SmkRD2LM3b1a",
  "key6": "4sRqf8UePeeFX2CGEcRZjzDa45dyptWaZ6iAcuheqdUEf1LZS1xXwUq9vWeAYxAX7nd9NiTgnWs9uHzWDNTgpkNT",
  "key7": "2Dg7cpw64wR8YugW1xZ5noUqnCY81mQE323fDA7bhi51JSdQJq3gErWxeEYb5xovPS2rTHmjAaKoiVSvA4cbyoLD",
  "key8": "bqz7Z8vcjAUsjTXL8WRk6T51xMerFZ5zfb7j4zqgbavdxjf3nGZjzReqzHwGuwXGMnqjJHFvUVQQn8rvcj3dfZq",
  "key9": "3yyV3rE5kGDAcLPTiRkHzWdEwnkh66Sqd32fZUFhsHTfwfjM4Bsm2XkFYe6kbZ1mVbwkkJonfGhjtWxKW6jqBAbo",
  "key10": "3aCUBSjgjqo97hk6qNAvUpGNMhKoJ96vAUDdrbkH4LMJhHqWrF9quGRf3gtama2n1nXLVuSv1QUCnzknj6nmhPk4",
  "key11": "48zxnxbCS6NvZ17xAS1Eh6U3PajwCqZbVwkLmz9RMxYCbziAe8cjYpVbaALgCGSUQd9bwwnZ5k3PgVMZGttctX9p",
  "key12": "4LP5tXAeE82ASeVYmrBHxE3HgXy37kDSe5UYPipkEejCz9u1Yg93TLVLb5jF1HBfrswoBvEbRPnPJwexidbnRnSo",
  "key13": "zwjcqbe3tuHPRK6J5ruN8TeTFKdjrdX8rc1HknrwG48s6V7wWp63qT3GGSpNd5MGVFdzr3rLmMJtxmuGSU4FUVG",
  "key14": "2917ZutRTFJeNmVdMY9irWbsHF8EvUna7mmjvZUsjz7KyrfDDJd39XUtuMmk8aBUVsoBbVj9jYTyJoQT1awnSJ1v",
  "key15": "5cWqyAPjErdjQc4kRRPNv7pBjWLZ1ywRY8gyJxHcBGab1cqm7LTi6UxGS7ty2VhNy1AuuQ6AzbFNTfVNzq21p9uZ",
  "key16": "cvp7gv6qBVMMiKD5e12XSduNf5UDfbrYpRj6yVtfwMScMMPa6oes6NUfMA4WfWqY91a9J48p4BmKcRxxWfR7mz9",
  "key17": "2xQNrk83DdUhXMEMGh2Nva8haKScquA5WRVF7CZeUUXXyD8kUJefknps7djVtyQ688Fhdcefag716aq25r9hc7ts",
  "key18": "4dQFKBokV8GJ3ER8vNRpiebAWn2b51p53MUYzpEzPX7VadjYxWFu8j4mW8DnmfN8vwizmhDujKzeqbs5LHcx48ma",
  "key19": "jNFRhUV8YqWQs3giwFnhtFvPLDyZxoi1sW5zfJYzVQvumcGTjsSTRM6gfdnnX2jqGyx8XMiWNEw4vSYV72zKKi1",
  "key20": "tPATDZEURDns37NKdGqs15xYWHQwhRcoqt2JDZYnK85RWc6t1NkhMYMq6p53WffAofQZfnSijTH8kcpmSaj7iaA",
  "key21": "5hDr26WTV84ymPrpBa2jyCBKB6Bi5wSfPtDEteoL4UNLKEDpN8tGZZNRvXTBPALv3xaida6w57YSo72yDNiAgSBn",
  "key22": "4xKNGD6TxzhWWjC3EfXPQootC1mumFRR2cGDz2r7eHeuHkypuYZeXSNKa4gANWAb2wdty6iq1YzoxCkrvo2zPv6u",
  "key23": "23YG9SX8Et4nKAHfjbQko4tM55ifHj6ExohFg5WA4WL53CoZRxYK16auGHhZ4kZ1VbdhKoeU8ueziycYDCtSD3vb",
  "key24": "v5EgViKWR5YNRLXnXay6dnfgkq56rd22F9WB6MVgrsTocM46doXyqdya13GyxE56E2RWHKos7n7aM7QCPyomJP5",
  "key25": "3S1dZWV9FHjJpBbacrM5iRywPmdd5UCaqFDceMRWz52nzZRGr3vKdBH1FTRuqjTCoa278CyLjasu111RGJ6Wxffv",
  "key26": "4Za5c3k6tTBted9R1aQkKuxDwCy6FYt6YzvStVnwsDKwV1LC7cMJgdQwUAQZuRFc2XPhWCcGq8BK8wndPhrTuMKH",
  "key27": "4k6FXkbVraooXLrrf1b7BpAzamksWTCMARySSbd7UoBwcPrzWZtvsSRRHrorLBWbiPN5ZrHrpqUw1fAdGRDZzXuH",
  "key28": "pta1qPqxE4TZTrqqf8vGuaTHCTC3chm4J6frBfJJUthqLnmtZtgxdQUAk4gNB6F6DhHap314Mh9cAAwywjMFqj4",
  "key29": "2YgapFBfvMQY9vAo1EfivkwZ67wkJwZZAkytytiGyDxHDwBtEdf8DT7xbEhC6vpywsZPLt1LktqtUMVixA4LHTWv",
  "key30": "3hKcLmwAYcqncNtBBmBVoQnJ9ipdEj4iojoK5345EmePL8skJh7nWvxtgZTBUKgXzyDssx9nUN2iVV5TrvJ8ZvNz",
  "key31": "32kyCC9NoTrwGLostDiypB5PrFP6FcvL63QPMXTubQ4ySTLawySiFrjqduJiUPZjf8wkMeo692iUH9KqpF8ytpA1",
  "key32": "FCLeZ4LV67x7bChEkYpsgHxukvctH76u6jA46gM9C918qthkumuX3141XmDcLJtwZp7xXDhaFE9rtTMLMgWQ3S7",
  "key33": "2dcEAgDfZV99bDj6pLLuzZwLZjehgsARUAg7KDaR1nbT5997jx5DYn81R5ksGyTQywpSg3kqMq5JQgz9dQiua6wM"
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
