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
    "4KGipYfpABhmP5oK2Cmg1nGUYMNr39crQqrtx29qvq8Ji3sbQV1mhZg16RmqxPtNYdzBgGN1gW5Earm6g4Sxb9n2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7nqVB2Fm2hoNr38a3ruuMpwfXYBoQeFtZc2dZm3gfb9w2qKtQbWkKcq3321jBQ9uBDFsaVcWtGzqHU6wcL39UCU",
  "key1": "uQbZbnvZBAg5zyx49GRxdJ5kAmdS9n7cVb9aev5kHtBiNUEynY66eX3dTPGcgMTE4a29JgVSYKEVm3BQTbLQYTT",
  "key2": "2KEEzWkQETBBmWYRqn5uiMdmJPkJHoYnxKUenyars3yuLvv2M5BY4akTsBTuCirrDy1trhzWMvFGyX4ES4DfSAc",
  "key3": "5YLsgnZ5DcjzC6HEtg1zSk4oTTgtCwC4QSKh6Vd5L9HN3NY95iW4Rdqk4ecdzVyzhQr7u4mnLjWAFTTisGCm4SmU",
  "key4": "3WwSM3RFGhcwipAsn3HcevoDvV5V2kdUhYEHJkqBSpdMAPbQnihJz4iquR1cs8hEcwEKrvuUz49u4UFkJaJxRmjV",
  "key5": "63jSVVUsHGJ5yaFfUi7tGgpsfye5HyddKnXyy1g3xexxtiRAgbPcKPkC41M9zHjHEpojNNetZtP7oF9jFZMSwCEF",
  "key6": "3ZgDWgxVyhCdZp2Lk58YURcNVmzSCsNJfoqvNNuQWWZYDfUYGFYzt24RW9cMwRZaoz7FyQzSimcbAZEz6YPRiRFG",
  "key7": "5AQBP187wHWTqA1R7oRAsNJDwBuGgFz8hHtibmLM9BXVBWBJMRk43X3i6rGjrPswnro96LusiDJMyjpbsJrghXc3",
  "key8": "65sNxc94ZEaPSDusa8G8vRF45bTBs2XAubFg8DjwzGDn4tmvmK74B6ip6HFE6mFJ1Y8QvNdbYgwG8NPmRmW11Hcr",
  "key9": "2FgtDf221iS7Ls8QFF1dX9AzyYnHfgdnBksqEZg1U1AVMqAf7QnC7BJJGbBB3H5KnuE33REhg4Tfxb7JxwN6ACGH",
  "key10": "hKST8zd5yGJt6ZYEzzJUiAKGZEszarudjGvMZX8q5owHso3DErvsXvfUieVDmK9FkViokTDpEygUKaGxUg8EhNq",
  "key11": "247uwSrpf6f5P5VLxxgHG2QuEyngdg8zGqRTtAg5aFsUQeFq4y75FRYBy2d1tFtnMnRz2NbDUmU9e9gcSBj5kzsY",
  "key12": "riYo4vnugNSTEgDU1aPLHnbu5rEy9F5Eje6ModSiMy4zhfeUKpF7SavDXbb8iaQEij385SFJ49TmFSqCtBmav2F",
  "key13": "64toXaKNkesLXVhYXsbCESJg5eP3MeQYWTouaHpYNmqv9dSkHqSyN7BuG6FKvY3R29Gh3L6Umvhgts2zxGeAv4nb",
  "key14": "k7EHuM9vcWHv9CZstRpPw6fVSVvPSvkA9pN93CN5Bx4gbrNbKTnDHgWGrRScNogdZmdCMNPRvVwqNVJgJbuZ3gt",
  "key15": "u8s955gkGQ7q6ftdaqm7T5rkcqQkZiybt1jH6Y3UxEyqNKFYgPW2wRYwJk8P5foLJY5rJG4wqWC6MaDzwEtFEZh",
  "key16": "4APv4sSoZV9LF3E3nAt4ufnFrRR2ua3kdnF3jX9CiYGo1ZPZYMjCxoDgxU3ruyPCVWQjueNcxVkgQyb5DjGNMMrb",
  "key17": "5ZYiu5amAHYcv1ihAUq24TELKYk8CTd9TLD1NMsxhGC3Evbd1W4uHCJmBu7csos86M87qSVkqeuYzCLZXp8xTfoK",
  "key18": "3g5dbfXSidAopW6UATVKpFDzHvKT265XaDjMKvoa9P5d7MjcQ3VZ5PNEzKSYqRz4grnABjDYeg335RLDD4WwDpah",
  "key19": "2KZxQQGigWu6kJ6W2EDwRngysa5Qw7PKWpuzwBe7yHnbSz9Tv69Cvrd7LayyiEJ2hc2pfmCZjNZsNnPrnRwzg8qU",
  "key20": "vSv5cvoppKYLY2BZaN8x5jM3WoSeqC3xnrFrLHkztGEGSdb1mbpb3KT9BGYpXjBwBNB1BMpD8FkdpWA8HC97HXc",
  "key21": "3RLZhkEFr4PZLHRKVEPQXAjs8EK9unyJYwvqduKAwQPkFuHGNgRYctg9DPUMcptBiwc143gpNpoThU9PFPaun5nE",
  "key22": "57pDVJRm4pQnVQd6Jna6jhFyzKeVUdbS42WTHeKdGhb2asxdS3cF4p4ZJnWz9cwiYkFqqBeuppK9eZddxesZiBLu",
  "key23": "46fE8zc6MbXKapfHmvvngQ63w4jhaJuJbgQ1tkCMGTHRjJPBTkHwSY3qL2eBKXVKX9ckhNQ2oMQ8BFPR51TG1DeX",
  "key24": "2JjjNd4HpjoaTDAgttL7V6xxGgrDfRWKFLYs3sXihhRTuWtRvYftw9oYQX4pxowQc2cbbSqcq1QdELaw6pxJzeiB",
  "key25": "3kr8NoD8obiXoBvgvLjPCfo8Yr2xRCe3NuQzD7cJxQbFUznKhGZjGZbVvJS92xpStZpYVADoECnQ3LaRCsYLMQZx",
  "key26": "2LSAp1sBTdU2DzqauVXxHhuuLA2r35e9uA3qZsRF1wXAyq1XVGs3wAVEjiX1HrAwW5PDq8cWvqNSpH5oiYzYkoJ7",
  "key27": "45DKQgFoCmMk9rKN4EQTFdxERM9LGqkKFAFqPLuUC8kgqGogaspHL8HdwRvC5z4vsKBbysWxX787yM5nDnxKTB1T",
  "key28": "jwC1SawhAAFoss4aX8j32ES5h4HgxEL5LinAfyoD5UBKkY7ihGZWNuwD2XijkhfZsjcCEaHiD5GH131Xk6pXxhM",
  "key29": "62QPTwGxGgTfRM75k6HrX2UPnxwgWENk2XQciP2r5GcQ7uFg5LCnnpbYehsa8d4H3NKHKys4wDiAbJXsXyZErHQp"
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
