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
    "5Uymz7vq12pmykkgXbnv5WyQVziw95t6X9sEHjrfkfqpcAT2bmHSpDj7cqX1KiDNME3tfVETSqcgwigfUG62LPpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GBZrd3ipubRNAkTfJF2eEwHVorHdJsCRWxiKQWHYKFBHJfRhQdYUQJkgWhXchC6cFoEDK1o8aCZt832ArbDSFDK",
  "key1": "52zHw6tmg5N6zCcd89pRBKUG5SgPu41WEPzZrSjtFwZc7SFMKyjG8hUok67MGYEQAUHsEbhz67kHZjigdTSJ6u1G",
  "key2": "4333R9FmJGWDDVys4vzxfTWMAL5TQo1MqRoPftm91ahuTb5eSTush9P3gbJMLexzHvhbRjEgjfMntaxBxQTuNHFK",
  "key3": "2ZLdcuDzeHaXa8pRLYu7kkcDTZxf9qWQY46mCbhiN5EHApqj3QUyWAbmWtT9H5nGoZhhpqLLZU7Ax4DaRAPHErUx",
  "key4": "4qEgfS1ZZSr38JPPovBedhKKx13UFbfbKu1sB34kLbjG2TYepNDtj94U6TDZRWCdsYzu1mTGBauZUPNnw9FxnRsA",
  "key5": "2kiVADKZ8T242RVFiarTDDvAUF9aTmF4qVELUK47g3YTBJXp4YZJLtyHziTvhKBrq6tujxEuxYzn2CUtbcZVgACp",
  "key6": "4FC6ios2mpqdEYnV1m1aoha9UyQMZqeTtbcDm35WyEiXqWwt4VCgimZ24zb3DhKbmQUyBzp2MH6AZKvaihGk6yHC",
  "key7": "5u6rQ8Wnho36cwuxjJTWbiceop2REfJKcDMCwSPeFvAhVo8etQXBaH5JGFKu2sD2QM8AhUWtbZgjFybdq2Cbzzks",
  "key8": "3o59jZAzgr2UUff1ajipEGgAG9wH7hgW57S6gLf3YyUXTVrzf5pSni1npLYkHUbTPC8ezCzjao2dmv4nPyhuna2C",
  "key9": "5zRuwtJdngyRM4eKaK8XtMrxctRmXZeYyUH6oxyXPNQkgnkbMMY9fTBowcFnVZVENphjrKJxWtMrxY7AavTfQTDd",
  "key10": "2ou42UBKQFvcWT5bNNNwoJ3hiMWfTW2pqe6q4aWguKQiknkA9V6oh2Cd7bFo8CE8B4x67x4ZqRYfWUNvhxqJovS2",
  "key11": "4Nftad91uuekzd4Cmtk2uLZsxUXh6xTh6qUTdvwkUysu7tFvg87unhcRXQ23Yy1xi3JagEFGhb65hQXamj6QFr2S",
  "key12": "WyVogDRaqzRFougFs9CcQh87QYaath5FiSTfX2eK165v3fQPicWSoPBocrykemwRN18DXiRtXu4zco89qBrCkoy",
  "key13": "4Y9mjyTDmm13JvwKfZJ4ephwAeq3qTudmuJWtR7KJAQDyfjbxsG7Lb3bqsycD8VH1T6jufQbnjGd3UyzJQr4n22D",
  "key14": "PFVu8YNKT4hTBviX6F223TBKzxHLXVhYBR7LzUChSL9ZyZwNcCxpTjPmbf6s3vntXdH5YBjcrrcrmxHv5Kme3Qx",
  "key15": "vajFjGYMk7KDVW8JeevvQ2xBFEaEFfCBtRkypj2qsgJHjCiG5r7sytpAv7y6fkYThqhEfbwwA7srKjrsWsfZVZD",
  "key16": "27Gy4Ba8MQ2Ue5Ychwnak9svaUMsji8mZXcDJEqmUseDDGCTquV9ZqGw8z9GXgEa1BeL31oCkiRnykJfB2jbniBN",
  "key17": "2qbAntbxcA5qvAfhLpUcukMQd2c7P2sJWy6XthRHKRhJUQf89xfnS191Jyu8CMKekN3ucEdkJ1EisRn8Atj5UWnd",
  "key18": "4vqSyzNx2zPSdPJrB6PNTRcGfZDs3H4Yqt5AXokLZJpV1786RE2nqAMPW1ikeZ9q5fTJbdgCn3nk8G4NjoGqqK1M",
  "key19": "5yS7ZgGEgY39Y7REw9aaAfc9byqLKWpqEyjmMJ9g7yLG3AgPmd2nNcuoqpqyXwMrX6VcLZX4P77wdP6Em8qzAap3",
  "key20": "5sGALiw35cXXjmwfsYYFcuQKCCULsfbVwhYMQF1LYxBeB7XnAdt9UdShf7Ack8ERW8H9bWDXApMnurBq2sNj3CaZ",
  "key21": "5r3WfzmESzXqXNbwCQVoFvKZYKdKChE6ejZGeVBkuqVUazMCG89GLYPtXWNBDnK2NwhvVY4Bp5vJg3598eetQf8w",
  "key22": "5hQhthFPoD7srW5hkmtWbgXAxsT65kQvsnxJS8mjJq3JiiRsWf6rNBXvpZYLJWv6LTmRwMnridw55HZeHoQGURxG",
  "key23": "2ZLhLSpgQXs16KB3Rm5JZhBVHsQsvwUou4Zk7vPqKwRvdqKsS9qbVSQWoaz5SxwiRR5vaQWCeGixMxHPFcvz8WWc",
  "key24": "5q74QXKoYSHk1ffjcRtRboQy233uZwSo55zJkXFEZ1tHyntvTWavYK1Q3Sx78wgpePy6TM1SRPQhXXQMxhjWcnzf"
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
