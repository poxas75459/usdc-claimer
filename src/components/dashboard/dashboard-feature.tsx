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
    "WKEdu9zdWaM5YzXfUjo61hM7Ww7W3dtszBNeLbPQByeTTaYtd5iPY3BESAQJz24Mz1W1NPKV4gRu3Kz3vDjQ18v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4prb6wt3qM5QVHuk3YRZHCbGb63SZo3jWjszfF17bMrVNqJTQvurCwHEe3iWDJJ7AuWStCpMzsRSGyMCC1EBYp1a",
  "key1": "3nXL6LBuEbzkt9Azd44zvtPGULZwfYRSYHYLqjUq4Fe8aEnvx7JuzLeSGb1xvhXsrpdV238tvvUE44JvB6eCUmrA",
  "key2": "5eXuPpsecWk5baFmhAsHuyjDYcjbhLtyq8TiGzBDBetXkUHSCbiyfoa8UNpbP2xv3acHNNbFq6qRBQksZxKGc9Nh",
  "key3": "jHTZx44fyMSF24S3pFA9cusnuVotfJ76oXzHP3WAB5PXVN7WA49t82jUd9wcuuCPri1mg3NT6nBZTnXY6kP89jZ",
  "key4": "3dGLn4fXxRVv8wQfiLtX7amUo2rUPtfFB9YPJHTokMAR2ByXrHMPrNbYeiRxhoUfRRgEc3PXSXNPESLZC4b9AJJA",
  "key5": "CYyD1ZnoJYftEM3PvmXDsaBQguHP1eB4QfqseK9y6Dh4EvLsfPusvyCX3ZVeoo3AfYn2ciGChKvwRTCecMz5uT4",
  "key6": "ZsCdTAx3ncVwxysoFM12sGLV3HkCtEuK64ksaZW5cXyxLEUzvS4pr29Hr2mWE4mLTZ9WXpi788hVQvTjhW7K4jQ",
  "key7": "2a7BqzVrffHUF8ADn78ewxxpJfnSHENmyVMzfuBYCtvakCCUqn6pn2DvnbY5HRKUGXbFpSkcUGzhPCxmQSx5NfH",
  "key8": "4x3VjqaXMabgPLroeKfUBnBYi9EyuCb5tBma5ahFnsjmYxKPToqRQjV2z54h2DqETdyFkRyN6gyHBVPyDfnwGxhV",
  "key9": "4TmaQWx5vHXnhGD2SGVJ6UTvetHK2ghGQKyhigmWwKeebRqcMUmQFVyhK7iW3sBNj2R4d9awbNHVAWM9jiF5pW3T",
  "key10": "5HMHAS4d8BJ1RyCZ2xdTdT39EXcuofPVqG2tMPJ3h5gSBdzewvEKDkoPVu5t9f95iGFArtRw63w8kWX6fN814S3n",
  "key11": "5bGTPuKy64UoYvJCEbwJhifp3UP2FRecWckRL2ZXdx4fmDWyefqyw7W5p9pwyNh5DEJaiciceGzsRBHXzA5jPAw5",
  "key12": "2ZBCrLsFS279syv38NQkAWfrh4VeZ9inwssfHtEURL3J1xsimmHDQMNL7sk6TdDCBQwHMQtWqKzEVt1u76bPgPgN",
  "key13": "4guTMeiQPPFNTk9DWBuwMSPbHoeWG3YbRKVUBMJZ1NAyUrNCPoFNX15cYUUhXcpQFbdykfRP3TCsRVSGvRgD7s2f",
  "key14": "FUZ1hNib1Wr1uTScxMQzdNj9Sa6zXYgeAnyiVGm94PvvduDjSZnrT4wcWvvFhzH51Ci4ksTREH8ZXR3WpxcnQXJ",
  "key15": "i8kaY3w6F2oruxHNXeHKiG3PSkmzFwEcUfhL7arjDrwj1WTJcvBKTfQJZr6EQ1oFzNT97gh1SBeUskmBNMR19CJ",
  "key16": "3NQoRPaPNaLRefQ7daXMZGE8UReY73Z4Bk7xpnrGxdiQEhJTbsNqj2xypXZiL3sAWi3FtR72u98uLors8XqsLFzu",
  "key17": "jXVsFQostrKXV2yDjTeR9e9TUCJ3qm2zTZfP2iHZxsdDvTPiPScZASWhfAXemqWqUdYgnuA1fv6zX9nsiWmSdB2",
  "key18": "Mkhhm2LXhjQd2xQLiwugUbuSwLpRxx3Xm7WRpKNoUXH33S6iH4rtmarSrYJY1d8j4V4ACM9HRjWBQ8dpRWLmt3p",
  "key19": "43u8pvRQFzSyQ7NdauUJr434Ci8T3WjrP1Sizx3fD5XCBDsWx8mzamaBWQNxzBZUZKBjRttUkyJA1T3eZ8RwfxzH",
  "key20": "3rKpHijzPEY6UP27WN2HvGW4x5pVsbAZZH4Bzqa9zzjcz2s9YGxiZhBut6qLyvzCtZE8wbzJeeFz6wbEcUhZjRth",
  "key21": "GipLkU1V8CG8Px8DyPp123eVfCnnur3umRUTygVWHm7GUuFLMn3AMLQs4uUsjjxes46PES6ZvrkDfgUdWT2oQwQ",
  "key22": "242pEC5M8YDwmGrk5gXGzy2QyYT2kprFzaZaiUu5JiAMxSD4DKQBFbJ1aGFkeRu2DbkmT1kjN1yGFFva2kBQQE3R",
  "key23": "5MwCmoyvSSzXdxMDGC4zEdzXgyrTNZg8jU7CP8Fu6GoTKekLmzmP3h4X9f6zbob913j7bt3JxhjhEKKbuq8DtHHr",
  "key24": "2SW6ytHpGeBFsL2bSv7KesS1T19Szg4MMg8T8WvdwCb4gARL7tdPKY9QoFn3gEn8fP3kk6p2kfL161RLETG7F2xF"
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
