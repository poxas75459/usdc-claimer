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
    "r8ZDRjjM6WXuB3QHo97JFEUb9ghQr5rLJHV4PmzPArGb1n8RHq7YJsnoRXj2HBBUe2hHKPzuLpaBdRwCUGH3CMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B9FjBdxd7iSgfunYKZazcTFpTxcZ2scPtXMQKbLrcDaAHpWhQH4WE2RAoVbLaKmhvJRem5TMuEfZ1yjbdawNNgD",
  "key1": "3ZJ2EpMZUmfcjScPS5Eg81ymmEKCXbPwJFRymRxqrg86dxvL35hB7JQzTunAGoCRPVi7qHgCT3q3LPzTcn6NW58q",
  "key2": "4p74vYb6skLgSKNV3zZyUYrdd4JdG9NQw7Lk5cwWBE2ta6G5aiNxDQgjJrAdHigmbs12kqVV5iTPjFbPz5PKaryD",
  "key3": "73cGcpDTJZbebBZcaBdt7GfBEWRMFLiZk5DniSs2DnnBhxdgKbUnFJq6UxytDuUS5gxJd8C32ZuWR3VuKB1Unti",
  "key4": "2E3pZTKsiWgj2JgWNB3KMhfG4aa2yACFgsCgRfrSUemBUr1bGzbSYiHFP77cvX3mAsiYPwT2JBtjJYfexc8zEPGG",
  "key5": "21yhmRFkQuQZBdKAzHFTA2WRwBPGacitgcBiS22z86BzJMzd4aXPeM3LVZfiDKiduox2sdZqW4jZs9AYLSpMYgwz",
  "key6": "dMZsTZd87Dv7kddLrZTNTs8TfjjaZ1hwuRNAa8Hr5yh3KTaezsPqGvQGy67hxX1XCSJcWNQd7tgP9w1qcNfvnZn",
  "key7": "5Qv6Fr7ZoDb9PeGT6PZsxEvu14A8qwzYwxQsfqfseWBREbNzHq3tRZUkQZLexw16gaHkT9NYpK6HMcMPfo827AUN",
  "key8": "4p1VrG67y9sn5v1naoQty1RqCt2ALAhq3FkYR3YGixtxc4SQtqQaBnDGC9vDhnu1xKxgD2QTZV9KzqLEBzDew5zX",
  "key9": "3N7Hq3iwf73K3mw5E4zXv37idgEF3XbbLofdLyR61dPLgJjegxSEK2X4r63YARjjH4n1dw3EFgfYytruVdfNG5rW",
  "key10": "2DsjVVc386gsPXcY3kZJenr7mdeZhJk2twjZR7RkXxAnZAEAZYTTvwU9iPhC5dsKSiDz9pjsUfbRAkS6uStXJo79",
  "key11": "5CJZJ42mjNGhrUCmGo6bntMjH8kLa9FXAdNZdgX5fD1Gfap4mgJq1o8sG279NYXDg6s3nvK2EigK15FUBX45Lsz8",
  "key12": "3jVCQSZ2LLcf9S7CMzvEZJ5D3fWXLDmdxED7heM41yiqcm4iNENe9JYSRihqprH2ZDMkg7NpzCHVW8hvY7wEzf3v",
  "key13": "3n9QFUobVHGRTht4AxHK9A2bmwW3i6yY6p39wkoGAmXV3LXZRat8y6AyKSWsN8NqAdRmDzfYuiStQujuSWX35Yj1",
  "key14": "2uoMwW8Pi16kg6GJY1YycZXZGdqgQzmjyoKDN8HrzGgrQtp89HmEx37zPF3fiPoZBTYChrs1aABD9FPDTQFZqTKA",
  "key15": "54QgoKxBvnSjfxdKsxN8VfKNGZUW8dHWZksx3wuQSGdMkabkBXEsseqsnoFbfKfbLGYuiXTWv8xnZDqo9UK6eL8E",
  "key16": "4hxcD41Asmci9QMrsk8YpTKiPtRERuZ1KfQcHceMLfugH2kHzCUQ5kisn9FC7A6iJqz6qGCb2ELzzUNCpBUBjpuS",
  "key17": "2YAw2p4zuau6ob6SwkH7M2wMbT9z8ovADf5qVFXm1tMx2YEGMsJaiQKbRDahFrPUaZYx5mvQAPoFya7WuN7MujSb",
  "key18": "616Kxo9aqFAJFxYduoae6DHNiy4F4o4Ja6G6zPeUJseKQqeJ5cAvVU83mu85orxVmLEUPw1cALCwSctDNNChBgXS",
  "key19": "2gpMgauaZAtFsn3wEeFUoVCKhycx2joMNApL4gurBz5KUxdm65qheeFFgibDHrGD93n5Ni7ziRzrwmhJVjJPT7wX",
  "key20": "2tm9zUSUNReA8Va1EJtPfaCJ5MvonRrvJwGTsP5TLkqGnbNap1DCHXdS16D176Mb1smeJMesAwz99bCKPLopJuZo",
  "key21": "Jhnn2xFjBP3WPvHiotTMzDU1cR6M6dhUv27twugsTfiHbPC9f9i7zXPtiTQaFhumqH8CUrKBiFHe2R8VyGzkCWX",
  "key22": "5SrM6jdDF2LCWkLnz9dJdWAnZFMaCUVNbgbjv5fstm6y29Zpg1XNacCfpbtdnEMwtdyrqDaFcL2m8HLnBQZ7ZRwh",
  "key23": "63arpn1FEom27ERTbPqMo6vNZCFJMoLvQWJFZSyXFhJSyhLhokRFwUUNfUmniXAt2dPidBoojzCzEzGG1ChMya32",
  "key24": "xB88gmjfpL1hvUJ8yigJj1y5D4U8gU7LGBM9aDqeUbbjGb8C83WLkAkb58PTGa7oKvQtU9XoPMGjxENGcA91Ait",
  "key25": "3cjBhNeSW7vBBEDz5zhn4j3RGcBkENYBn5Y6YMbWsMkpZqZmMmyXpDkBG6ejgW9jRRUX3iGVn8LtWkrvzJYbpFyN",
  "key26": "4HeqwoZgZ1aWoUgTcNnxzf5TWgbQzWvyoJp2KvevTFBJvZcKA77AkHYfGT7AYppCnFynwciV3CFk46gU7M6ReqLF"
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
