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
    "2s342Dpc6nc3boyT2bcVVV41x5DjfRFdhD9ig2X14z7ayZtB1EEtVUCSyi3iCLsqkSvm2CDpC7EpaEfGFXWAgh3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E84x9CpMZEu76D8AnHJDzU8shNxcayLvf2H1AP2sHHVj98oDheDXsWvgBhrHSifhMjr5um9iAPR3onq9DFX9N2N",
  "key1": "33UwSiUXoiqULhsdqvh3WDCNGV55DDhqRK1XWsQFX2h4Xq5yhH1hSEinb4fQtJDV9B67GDjCAk3mcF8DzZFsTeLr",
  "key2": "5bKzm2RGG9MP9KNM72NR19PSS9jTiNMmj1qeykyK1ydcfBRM2hRiivALjcBG1HwEVJFEp1SqNUQJ4bB5QceCKUb6",
  "key3": "3fjGmp47XkC9gujCgZvTLAZcKF7XkvJaHicPfrUKB14ZarU1BDd2ooc5exatqHJJbzaWDwuYsDWK7e4jTE7UEBHk",
  "key4": "56eYZpXsvPQ1K4U8iyiV9VhG3QaD4dLt2cJvS3GFuPAT6mQtWrVxdyjnJMoK6NA9Do477y3mKQ9n9ctEpM6i3xqM",
  "key5": "5sEEUjxwcaE6ycRpG3yVkNw1jNvJV237XTFR34wTt3nprjRSzbQ337Y9kmbSwwMnpuvfrjDW4EBZvuHmgW27rg3y",
  "key6": "52xuyUYiFyX7QdKFSDrSnxUC7ey38vwDMaPdDHpt1QxMUme9WsSEPeJVbnRrKy7wTVd1gjJKXLr1CBs7HV5bSvV9",
  "key7": "3Smu2k5Fio35cRtXiehhRkJqvMT8shHsU3pwRo5STvVSSSxdBQdnA1MfYeeyfGXds6ceWFdieiWKwG2K4P9JcSX",
  "key8": "Y5q6zFsgP4nza2r2JUUNYaDE2Ht6fMXiVxY9TAyU3rMWPSFYw374oSVjcET75VJVdsxpeY73tHNQgwNdoBdbspY",
  "key9": "5zacRwgbDBUDFiPLxtnyLNeNdKQW1LJpMUbyt9ToQdPhfRFRatdDYTkn1yBD7LXbv8WgVZ3xkwEzmstmd3HwG9KH",
  "key10": "VeJ5nED6cPgr9KUKcrgeRwr6hspwamb2PV2J3CYpB3K8uNtcGK8YSPUz8GnZy1fV3qwaiSnNYp4aqgpbmLhTKq1",
  "key11": "2HGo7EDBveQdMePXf1mGA9q93vW1n4mAfgbz4UaqW1iWfdtihQ6Kv2oETHjJGqhAMe7qvzhXQCW6T4t9yezx7cgW",
  "key12": "5zxWRSSJAvvj9js4dWm5q156rsfvL4L8xGJAg5H65oAgCjS9YRYdZ2LhP2BpRQtc4ixqEQpvKo63jiDZg4W7nzrJ",
  "key13": "4MESdBcq7yLwH3vN5qAsTsbvhykYjSWTUcsQrDppHaabKsLjohwWT4Vftt34EqRbiQVgaki45Dk1wb3uin2Zp43h",
  "key14": "2gs4fBGuCGb9WGpLL55LwWqr15x8S8ZDMBUcSnhhkbf1rcpUo6LCNGup2YDRnD2xY98aAFJMMQzsiyWqHxekV2Po",
  "key15": "g7H6jRoL3UkpMnsQsVniTeWYuHCk6XpbgATAe8yhq1P6Hs9G3nXq6u6QzfWtcZLajrwkhMrCA6nTdyYS5zbTLNM",
  "key16": "38fVvL5mvGXxbFgEdcZc1tRNqNeLmh39ovsngnJucdEdVm4Q7k8HEtSuZqsDX8QPJZhLhe1jAyLoCvrRZHGxEARc",
  "key17": "3e3BKDVw6HHXV5d9LAtz3DYQD88f2aUPcaxUzCFzHvX6pwoZ4NUFVuZY47ym66SfHYKr7zRgB5P5mGTqCUwuBntf",
  "key18": "2XDJbk2Kj8MAADWsfQSCNfLU8ttZ4tHY26Eb2WVMHs6gHg8sp2Yf4mmb2m4dqghNVcnANx28eu7cgYkZZ6qb1Yga",
  "key19": "wWAoAYikhCehq1kNRxZ9pmH9qRXNmhue449CBCRvbDNteL8qWQdB8k3hReEgeL2D4gEUZSp6swpPKPnJ48H8oaY",
  "key20": "2a4NbmGrZrC1KVohhJQpnFGt4UMcXyA8divAzzaPQYBJ5MqbzDmTb4PdSmyZQfvQjz2B9DWNvjpwMCuwdGE4YW9K",
  "key21": "8Z1X4qaE2dmmd4bhjqkQPXqpD1MGjF9kcfdEzojpbL1qPHsixk4xwDzjo3wYavRzvR5sRbmDajv3qYyJYViqdSd",
  "key22": "5fL1B59Pp7uCqJqL3dfv17PaGmD29DVu15eSDLHfcoHXPwvELcSgRgG3s63X6DMkK9RQSM6FeqSgXF84GRbahfdJ",
  "key23": "5wNP2JnGtghTX5jMbmMB7RBqQvY3MtHekcabKCB5PLMkEHnXZSEzCneSbziLpUcjfdnA8jQ5CkBxKvBJTWy5M7YB",
  "key24": "4fHBdPueeu9qDofwhthZBLBVXncLQv4vaczAwFyoEyHv1AFx6gWdhkAMW7AfEnKXbP29nnX4Fihu7VX3qxGcU57B",
  "key25": "zAEM9iAKfzohxmVxxpB9zDt1gPCcP34dGJaTpgt65HopNuX4Uyj2aVGoiXSFLbtmZxdjfgddSdT3ueBgm6mdg5K",
  "key26": "ZWVnUCXkBgVSHaAnK3B5y4RtzndacZBaRQ37TdAzyQMntiq4HrPRg9J7XdQS9AHTvHqPfETk62bnTStHY7P5Pmi",
  "key27": "5MmhoY9ckqj6fPB8UA256Q3BRk12ycB7SMnGC3zThUucbYNmkNSFdmvdYiYF3ehDX9MSzaxZMUZg96tkWNXqAw14",
  "key28": "5FcRiQ8o4djfhtJbmWvvwvd4Bz2rRJfwnuwyq9a7kuu7TvWUjsgi7g8idJvb2QNZqaCuT62E7LuL5u6Aa8rbNZJM",
  "key29": "26hwry3jvSLoLvHHAjEAjt3Ba2pVWAtrX53KmyAvt2yRuaoHkSrKfi8Acph4jVUBjBudmSNfdwQvzTp8BSo9eN72",
  "key30": "3Xd7AZeVPfERsPtk54wvNvzYUjgWWAKUjAUL3PeXxnJFsC3WTskECQg14jUq38ABJb3mwiZjjUQEz9bvMtqUZFbX",
  "key31": "2wau71wx3gymZ2YW2bYK1b7Z2MrrMTCSQscBzN5Q4riysoeYJXShimeW2VwqfXEPVahp9nynYjk9rdPgT5KnppGq",
  "key32": "2E4RD9SKW7upbmrSjcMTxAWMqAhNFvfC9yRLJ5S6Nm5pY3M65e4sfQKs2cRmEeyKkJWtZtamSfwWjg6KBztJL4qy"
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
