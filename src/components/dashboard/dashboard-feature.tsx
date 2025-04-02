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
    "4XXP1JMEraYUmUvwE8GWkEMxCDviHKjHhgGhKNtijGCM7vpC52qfjDTqpHa7aFiymmmCspWNzDNWsnkxmTMFRue1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oH8e1oRo2Nc94sAuFvAcKqZAFJ4dsNjxgYuuirvH2MwGFB36ApEJjE46c1mrnBeMt7qwqcWvTCY3sZAqcPyT6RS",
  "key1": "4S3bw3C1kiJoZpS9TE9ZAsdpmHnKtMMrwT1AjyTo5jzDHThbQMH9ZZzB3C2erjCMxWnZeXtXqsKPT9JsLd991iC2",
  "key2": "5gNcwQrKQwVoGYfHHLZ7evVqV8nSjkr8tCj5LYgfS6N4pdCGX1RX7KGRMNCcc5F2PSZxbfEMquCwg8BucqqaqTAE",
  "key3": "4SjA2zXpYQNkeDEm1RK9PJNNDHTwvzq5wcChoQyN4vMCcrN6beSJaz3CnLLfKn545PdxDY6uNXi7F55typRGrSjU",
  "key4": "X9KcpWSs7CFqGBN1tSiMLV9ARmjeGe1G3VjXY1az8ynCYrP4mQgKLaQXYjkMm7QMJqHo7staVaJZTK4fiAnmaSV",
  "key5": "Uea7Zdir3XgTD5chg1Ggahwi4J5q26MBqpK4NqADMcLSg86YRqmJexrDNyaRqZCgiHErvpheB7QZSgrcq7vbHg6",
  "key6": "2o87gBsNsLXXRKPAa31CZLCP64GcpweVtkMkgdYfbfHFBqvWfHd2nTtxstbTatCinLE2Enn7n7BwAL4WGXkD7nX8",
  "key7": "4SA7KrktSKk4sovbcafRycwDv2kznABde5QeGm6UKrmKEU4dMnh2caFfmxj7MZpzAVCLAgy2KfziWfdRcG5FP6zp",
  "key8": "3XhSuGYK328XbjWWwJA4PvjFuEAD3LwVJJcQfvwq34EGqP8p1wcyhLKLQQLSsQ5WoKiZrZc3A69KWuYacBbWF7kR",
  "key9": "3zXtKMaehMh9XNDFRUgRH7nVErwpstxsjNxTSWugxcbhrDnULate7o89UAxpkTw3LpXFuZtNYgy2qweqYrk6i9pb",
  "key10": "4nUfZwW1uR8p7UdLKZS6GEzmQidxSPZUPrDGjDtZyqKBjfUgg6T33BJzHewfJfZqqp6yxr4292mujmCt2WWabXo6",
  "key11": "3nLAa7Ebj7iBNiYibDP2HJx6gFYPV2k1a2ZnkANi4LgBZ1hES3PwRQFX49ms8XucYwqvnAHuWMijRch7Xw2g6RfG",
  "key12": "2EozVhxhbPLR45LmxmXBPUB68tHin7g7zooFCovaDPyGoo5KNcjApVfJBp7qwxRdCkQMQaswDUEHsdMQXUEm13KL",
  "key13": "4Pdzgr5xJg2Vt4prhmaWECroM6XsivDTsKxtqc2fzN9WYqtjctrd6Y7Zdv9RdvikEhsdZnrZjYVpurioyquDyuDk",
  "key14": "53LiXWD5WF8kGME8qvBtLJ94goe2PxYtmjEyEL4kCfncGZNGYzTbJmNdDCymNJ15YaXgK5u1aB1aMfiptuhGrKKk",
  "key15": "2d6C9XFa9WeddK7Tv5PmoGbxPqv9mCh2sqf2YdFnwsbSqMo8uaAWFFSrAzLwQioaB7P9S813zDptmEwAYYhhrAsH",
  "key16": "2d9mHgbuCNFGL9AMFubPWdhsuEyvWmJRqKgizwP9swSE6k44fCV5VuVDLNbnrSB6rZvTXwo524MnuTpkkhM6R46m",
  "key17": "3sTdrp71XqrJJWfTbMfsw1Z1bDPNvZiE3Gj1AfrjBPtFDRHDFcTu6LuME8RyHxujjcEH4kdQLLDGxvFYFNnj2dta",
  "key18": "4FcNbY6N6Tpor4bZUYDAKd5qhKBnYdLrvc6EHn39oTZH5qZPRcM77uMjSj9hrMwtQfMvmEufuvcPW8yad6r7piCU",
  "key19": "2SJFzP2aUfpdzWYTqwWxSsHeo7z8zfoUgk6eJ3ZK9FqtxyUcEijBDteHUoxKuFuzPuccH82pGxFA4qVwxeNZz2FG",
  "key20": "jwBs9YTCVi9zcBEARnHTKGRSbhSgz3DdgPzzJA4PFNM9hngpUW5n26Sq21jjqrhBkoSQQT1xQooyGtHGfXXqrzX",
  "key21": "24thLiN6oxfLuKjfnPprf5MPqVxoz5nLfiPxMkhLJN3Latwt6MCMVHJSyH16tH94j8oqZB48XpXkBM21qQD3iZGP",
  "key22": "nwgMS253r3JR6xMMHq6nTb1aBpfRrAr9CEGT1zxrMA7oQXvoBkPZkubLLcHTNDAVJuVx167fmCWe5CQB6zLiAeV",
  "key23": "4RqXbWcagJsKZcMq5xg38rp3CnNMTg7Sm9719ZT5nMP28YZDQqZue9dDY74F2PEoiwLygZ451EwfLstL1WAMkWVP",
  "key24": "62rdRD4rkH48dj23uPnuvfVKGsPMW9Jj5EyeMbEDsnQVhZ8nBAKido2jsCxoBUYHH8yUFKLkVAgTsXf5T3eXEtKj",
  "key25": "5Hmd2ED3ErZ5KnQBzkWHcvVAL6LvRH9z3bjDXBhQNGgJWsGWk9r4ssZiaXV26u55wS1V84VopNvUGpdJ5nLvKteo",
  "key26": "52SJADMetiKQ6GtTHTDuG2Tv9R19A1nYTBWpVv8EfwLQ479mn9WJGXSXDnyFQbNvL8Jskc5sVA9MyRhx6GuNaS2z",
  "key27": "2gxj9xd4RYAEDZ8rP9jXxfFGj31JGbWWWXGSwkg1kvQgTKVaPx4KP183gBxMV65PAznXBq6MtunvCZXkaMwKjJiW",
  "key28": "5sbUqyzz74UvhFkkgJZa67GrCFEBx2ydugaT7cH4ZoQNXLPugF2K9i6RpM16jX7V3SQP2r9EAS9aZaZYAjvqj7aw",
  "key29": "51TaQyHzSt52ppV3X7JYVKXU7gexd9LDDLcXN4bX3NFdNXCHFNwK9bc739cfSQXm8n1NL29SoL5NguCPXZUqvu6J",
  "key30": "56VDhHduxNH2KVhGwxA4P82ZK94DGQzyJLWkR7HjEdS8Zy5jarhUfcZvBgEYzzVKz7mgkCn9cwM2mBzHZ5ekL2eN",
  "key31": "24zEvZQqyHEjN66L6LxjmK3cDnQ5AFFDU8GgVT5RVgFrkgshuc695ayNYubqTuXY7oQ2G4SVUtJKStz3gdhc2ayw",
  "key32": "3iFqP62VNFVY5h5GGGVf6Ft45K36KiY4r9norFFBhkKPWY3GKDFiseBaF5GcVqB8jpSmfgSbCcgEbXnbcRy3PSnx",
  "key33": "5AeMB5DbMrHuhA1tutpRFP3YJVNJG3rcWLtzJb4PSEeQLX2Xqp1fEeTSrBahk8J64LihcyYsZQsMQCxdnHuhUtat"
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
