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
    "5jocxc7YsySAMcy1GtCx1X6WhE2Yg8LtW8opCnAEqvf6iqB6af556HVgRMEahPqC87hBSodDCvbtTeeXrNWpgzaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3daA7n99cwZ7EMHnAhtphehLkqKYyB1qf1FnzSrPfxH7PKq4xibRd6b5WaU3FisZ2EHqsWTVqfbXebycARfstsuz",
  "key1": "4RrbUPtrxYURTuWz9Rx6ytnqbtYWgsnuFgUy51jjjvG6szw9K3vYV4BE6kg4HgS2Zyy6rX65tifhvAG8tYJvz11L",
  "key2": "3uqQxbtgZQZvLcb6pjFEAddNg9sot3MN5qdnETRyoHYP1TP5M2DXTdRMF7B4ZXLkdsthohG775mr8AvwmDGeNwQS",
  "key3": "ZBYF6fwQXcbzsao33gssp6KJLghAnrZiPtSMhjNXgiGiCuMHyGRfbYJ5GCmjUhoBsmtt36bgDFSyXaC292eELV5",
  "key4": "4cN7zBRsoy1A1p2d9sz5V8tmsDEpsXyy4YFadMHxU9xqFqnucbbnGxCbkSiDconxgJikuHjMYic53x5aDZVpf8jt",
  "key5": "4Q9kRp6tkQzzQK2Sz8HRpnUo91cvepvs1QUhBNRocwGcjFxqJRHdCnoVkosoTfE3xN2TYTsU7tzPGWEw4WqEyn2b",
  "key6": "4jK9C71L6TmLzJ2x5nLgD9GKjFRWeh8H7Sy8gXpHkyAmzF2xmSJe96bg4wUVzZJBiFxueteV77quZCu9bSxbbwLK",
  "key7": "VwhCcgG4ZgRzEGyZHggAWrHHXH9u43tF1bNYJ4ayGtJXpSa8GML92vgWFbtQtf9pCqs7zkzYaUfAXjf43gWnZS6",
  "key8": "4xW1s8WqR95eSrzW2EiwSvfSeLps8GbjMDcigh8E6Pbf5LoupbBZmSKZ8L1Ht4xuPPtyy2PAdJ4Gtd65mtnLzXeX",
  "key9": "71gS1JTYZoQHiGv52w12mcxM7v8Yi3bie8jVMTN4V9pV2L9KjYA46MsztDJyo7vuJNEyAL7DaUxd6YKvvKpvfcS",
  "key10": "QpkHFTRi22Jvr4epPbSqUzoF8fGsSS3raycc9Wddw8cnL7K9iwq1wzMZdQymTE9HZ4SfMX2SEFFxEP3GwyLSgok",
  "key11": "vX1mmA5cgzxVGCHqJD5e5HVjWxbChPbRbYqi4uB7U9SzdCEmxz5F5tn46VZSpCyDfSJAvpdcnmMR83ZzVM716a9",
  "key12": "4BuQ6TwPxFpcnzwVyUvDpckPAUya9ennXajZDsCvYKX5FL87LzcgmFq8cygYik1SGDyBUXJu8dPUUumHfpPYyDWW",
  "key13": "4Po1sdkvRS1Kh9LozyqkF3ZEWKqFPqX6d2D4A6TKKbdGbjqV4kjeZV9Y145WzYBfV9V9FJoXFoGHc9ZxRVs9Hnbk",
  "key14": "9krsCo5kU6vEZQu3vjMwPy9DjU2MRBoVXaBBE1mFZQTqmofZtN8tkmDTaHCxUw92RWJmYKS4nGgCY2mUsiFs1Ez",
  "key15": "3EjbFn4b7EbNmytxEqnZDGVPA6t4KhPM4NZdtU36w4yrnNzV8jURrjL4f9D4yDEsSFuUtark844FJcnBaKrbhH1E",
  "key16": "GHhS4pgUMSQak77z16UddeHcfkWeNyuijsGigLt3uaL91JFsABveBkTXWf6cRhVXK6txmgBnw9jhHejMiqkjPXa",
  "key17": "5EFqCAQ2xXxvpBiLZQQCB7yWLQN1yAfAY5YUKTWgUh3KgLFWJWV3FS4Y6ND7c9dWm2iEzTsiPMb8Q2H3KdLrY4w7",
  "key18": "4GKL4qyxBPvUN9fTu3anWSAnN9nP985yWbtCmdtt4v7hho8M3JAm3yycJMzGZNa3QX9PpFx33uSaa7JacmTr9TdG",
  "key19": "2nZBCsjXg5kaHUtDrq8sHMhEp15N1AVpBaHuUzQeHZTJ9bUXXkujJDzXhVbusQqaaDXMRWwY7TgKKUVwZBJESw5F",
  "key20": "61Y3egebA4tazWVCupoPjvcr5Ja78iHEt1CS5u2ES1CBLgxAjLkj3ZUXQxa5qKN13ffzwCFsxvH3tgoQv81dhyxy",
  "key21": "4P8S28rwijU4PfNwB93r4xwJjZ9UTZhy2xjdDLh74HMeMqnziV5MqZCr7EVKZojFM1fxDow6zhvXX4GZFmPzLmCj",
  "key22": "2626whrZXnERxsducvL6syAsfAmB9hvfWoP62keuJQ7BzSb3Bdmi3M2aKZeubGZo3SkdWipHhpPu3XdHTtjSzFne",
  "key23": "4GwXUmhhGSBHczvKkr5VVK2jzGrCaKiDJn9fHa1vfh4wzDBdJfJEGdng3YsiubkfDSzQ8UNsSgNZn5tYJ5hQKDty",
  "key24": "kjkqj3sFhk6qQQZABrbD6s3BEwzmvpd6tveBUarKbxUDZyFapCMgaM1Ngeqt7peP9xWScya1i37kLtwg2yWbYDz"
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
