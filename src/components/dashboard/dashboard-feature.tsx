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
    "27QWNX6cqMkk2MkJ44k3TxjMR3C6Hfs2ph92VjGDVGrBzbrV3xYVMezsXd62gWXQJDLiZsLUr1ryF2GpYYSMhofy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VdvEkxAGt9VB8fdNuTSCpArfFBd1Wd6T6NwL8d9pt9Z4UXv8HS9yQQVxkiQa7MnvM6DP591jfrqkwph9S6i1XsU",
  "key1": "4goQ7HiUhhyFqkHCMKwsSXt5G8LehkzNxNeDAjD7YngKrLRWt9w1jLYT2bDeQiASAVxtx1tNTSX5rSjpTMguesJX",
  "key2": "3hWMgp5rzUuAhSV6vRmYGBxmj1SUVP4sYabpFsqeUuxjvogkMRWr5qZW2pQQkvq6S2SKHfYnM58EcpMkKzh9EzSD",
  "key3": "t65DzDoZANvxfF1AUUARXUyDz8Zk32eb7esm6niMFepa8xmwUDkTx2stMMSBqeqLWLuRptw9wZpRnDwax9nfoqY",
  "key4": "KERqsuWLwXYCZTzTpZBFBAD7QBRM9cz6ekDYMRmd1s9ykbDjK6sD71X3XLvW6ZUr3hJj7K7wqiUUcQaNnv3QyeP",
  "key5": "2pN7nwQGDqiAWFA5cGoqmTwdr5JJ16vbTgNjphXrSpgjJSNUYtLVvTuYW7QVrANqB3pfzVnZDgjU1hf1Mg6Jt3F5",
  "key6": "4uCMgsr9uKZAd3E35Us6ZJcwFa9pWggs4nEBepa1BwJoxpiMBXipzcZDmZUpaqNRrQMet6SLmV8ieDv1y1n4n7E1",
  "key7": "4Bf3ugE52q1yEQzrBdfXzK2FmDptkwwC1uhDfuBoaLqtdcYPXvE5wtb8KSyLcvbfzgLUBqata4HwJw3974hyh5z7",
  "key8": "uqjoHR4t65GcDLLEBw7PHMZay6CeqBLfaWggbezPtVjNMTGe9y87xsX6y2AHQBW8xXR3aU8FvcjphYnmLA6K8vF",
  "key9": "5aL5YJ72A2gHivsKV4XioXKK8wU6CJVB94xhVnDgha4H4SzQ3JQ2gdsamCAkzN7EyNkjq9V3UtAso1J5hRPtWQDC",
  "key10": "3jhTtoKuotR67ZiHBFLE1M2AsGzuV6mMgurXhj6c64JgLZtXi5yWaTrXo27CJPiLRq12xFeAPJJT1jHnACbwPJT1",
  "key11": "4KtPAVEySUsA6RM42AEoPeEHafe4Ss2xaM1dsGnHJCHUVqyosb3b4cXsA6qHhe93ghuUop8WuAUywkPuZq5p1MNH",
  "key12": "4fNnNthyi3URMH4hX3iFFdoKg7oUJYfGpduEoUWPtKDoqVrACX7JxbM4x5VzNicnUMUx4DaUxPvTc8668UmWwwyj",
  "key13": "4Ck4RH7vSkUMdeMURJNsjaajjiqvTk1xNFGcmbvSDB7bcf1nFt6LH3H1a1u2VLaYRFNbUhfE5yicAJXBNb7wB1m6",
  "key14": "2fk3raXUXupFEGQMBJYKKRFe7mZrLnmesjuAHMZ1iyEAk6vfWxm9f2XtEqJQvbdN7KHsaSw6UfworpiShFPQYVfr",
  "key15": "5NksokN8suHKe3Bo71sXVTMKcFqvKBMfEMLSxq4gduAgndtBTsT9LzFuqEBt18V91JcyXteZvxHSguA2tZbjEtDb",
  "key16": "3mpgaxbGNGpqmTa8JQgAKrr7pUTVQdcamrX3ykDjaZbwTSmkdJDLs3ebKyXXPQg8XMUKBp2LVki13brcsqdmPxMV",
  "key17": "doFZNiBTdrdjLJS468AQXc9C2ebmDrxtMHWgttPk89CQb7Fxqxy1v8MEYz6wqqp4Xi1QgdBxm6jRn4W3SbKB2pN",
  "key18": "5c76PhmPRcoMWRUqjSKMJG8inAvS9EQTfJhgmpGwkwbJ4rvQf53CxaffwHygfKUxym9i2QXn3xG3RXdHV71zrtxK",
  "key19": "4L4tXHYekXHkjKjoaJYxzeb2gbCdGv9ukvYVYneerA3RzuXSmiML6fvoa2uhHHAp3g2n2u6RoVvdzz2fNNU8cGDM",
  "key20": "2zKGYsHHcu7t8KcQ2drkfvnvbFeSejKoDFQa9ggBL9JiG1ArWG7aTXtDWM1KbrKqEXyYhXyWqErjisDkGEaGwEeX",
  "key21": "2kJxnk3tWRYKw67tnHVxXgJCQQCZ2LyUcDx5bF2FaPSPyRXoi4L3MujMtQdrRDfRTvQxW8UmDJroE8kfgUJkEGrj",
  "key22": "5VsN2UfvQo5voLhDfffiv2bZE4Lct8Fa3nKF5NZHh6Zj6nLwSgRkAfytoKUuSeFFT5KPtmH3WnCbG48xDhguRoGq",
  "key23": "39HhhyEwmQ891rDrLBAHdkgSDTGVCFZ5KVjqFKrf6g8ebVNEzMc5J45Wv6PmttmFRk7iXbMa1DSwhKGA7jKTXzaQ",
  "key24": "3mjeHh8QQAgipMSUjowmu1W8SxCZ1bUz76y96bWmAgUqiPSvMp9yGPHEw2zWtoBQv7WCitnUeJ8SjBRpJ9LvJM6B",
  "key25": "5C1JXvqGdWKLgUQUkJGR4oWQQm8qwdnKXAHvDvzhmS7VxTZHYsWiYTuDNDFJcGZQj1odLJHtxnJDwgT85cL4WwT2",
  "key26": "QMeg9MzupVLscuNrpfL6PzvG4tK89ybmMP9NxEYJZHkjmUA9HZzvBud3WSUzBhRMZbb8KdivUjV4GVGCDXQVznW",
  "key27": "21d3dCre4pb358ZcoqdE6eMdg47Kr2KJqWAyLrG8aoXfUu9F6XC3Z68PrazzzbrzN2mtWPb3nVNq9p22qALJXd1E",
  "key28": "528ZNhJAfCm5UZ2tACxory8GvrweNRhrBUrMzAyN5XmjFsNJBpxSZvSVzFw3yub2i38vTw9ckaHKLPxtY1toJ8ZV"
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
