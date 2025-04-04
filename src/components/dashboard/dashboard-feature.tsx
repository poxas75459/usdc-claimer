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
    "9wc94Rq6mHNami7GpmHbUm88tqJGDa7Kkt3h3XSGWowG6Ku4NnXYgpayu66Z5C3D5XHdgcoa9rePbHSA2UGsDGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CX8mNKKmWvEGF8NiDbx17tsZPtpnMH6WZ3nrwEXjidtssetUQkeCFSi2PkAj8dyEqmGMd4PvFd87YLMBdd4Rsdv",
  "key1": "5GQ9Mj6d4ZECdCbAUcgT5jDUF4uL1Fgc7PSv5Sy5APqPt9sKT5vfjCmMfZsLWaho79RrMBmby31CsNW6twTyzMow",
  "key2": "5Dq3vaEDVs6ozod1dhL2HgZf5b4MPKcg3ptgpiZHnLENHYT4L6WZ3qKMFhP99Z2xBJa7tL99cQaciMmsnaTTWDET",
  "key3": "4gBewAak5jKGWxgkyywXrVfHExXR2ds7W81uYoYoxjcseiCQ5X3hvHsoJpDsbKdwtPdDWNMJYVQDRMAxyuAzYxT9",
  "key4": "2WD3bM15biJDRK3zGRk8DaHTBnJsJbsxcbZeh9nB7Zkxcn5yBMy3N4Xvpeanb6JXkBTcyqBnuRY8A4HYNnquKDej",
  "key5": "4FTsiNNnwWzbeMY6GQsLjRf3746EQuipf9jNCYUWRWPEohCueVVP8k7xKaDu4GyxGwi6HLSVHUkBZuomfH4HQMg2",
  "key6": "3CcAYt5uT1hNhUa28axemJPxSXvm3GZjJMCGFAVFXVGvYViJmX6rFcVmh5FZ3rkKBpzTnuy2jETN9frj7ho1KAve",
  "key7": "2bc26zfFUbhpoRrJEyiHj4RGPCx3DYfnt4B6cSHLWkqN7yE3oUs9TEQNdUqiDLPvnswqPu4x71gyTNqDjyk9t2Wf",
  "key8": "2Xoiitiqj4bvgMwUC6ENpy8c1AX6xKRqtd7PdEf2WCr8J9EfYF5Xjv3ZFexCKPjW78C7xsvTw726QQcswqG4xWXQ",
  "key9": "3SFr8K178w9BznhF52RBnFPTRBP4pdAJ3WNvDLr8KHpV1x4ywEgBzUHbpqrZzQuDbDe5JtneRNULqEKWWfWnjwKj",
  "key10": "4yJMwwPBUG1wrzWou9tEWEGAkKbLVgmxfXr4FA4f9B3M4zP3MijtW82G6sSEhQgFYhMd5wDmQfEBz3zKQKJqGwj",
  "key11": "2HyLro1PUhtGZmm8CX1koZF7MorT5rGPU6gyYRf7WA3BbLYmFu88Yu7xW3eVxDxpXxAMnqS6ebZu4Bf4w6LdFDck",
  "key12": "4bLvRnV36byB3brmWqMnE2XhRC6iHZ5ApKLi2mPJqKUTDLJoDkBVKJaZ4ay3V2eefEpdhBA6CidBdpqoyxoAjARW",
  "key13": "5g6MZs4yBbaG3knbvxdATEvPtH21Qmuu5NFZRX2yFh6H7G6d3CGoPMfXQedQKsNtGWeszrUTtKU4DRGZmvASURRi",
  "key14": "2vGgPTyc6yCuHjxjPBqgDdm1ZXzgk4QtkwD5KVzJiG39wKFiWt8LLdBNXL63YLh5rJk11sVpwxhEuTddqov9Kt7U",
  "key15": "4AvYHbK5VgS1aWqnVvCDUMzhkWwLN5gEqdaQT45kYQPTDTPARZjXvYQP6UNUXMShJaPcQKbRXpHG2gMtdsaBksJN",
  "key16": "2hsvzs2iPprUmU2SDixiEfFY96nt3XrkGtWhDXsASMRKPkf5BNHmkc3JC1rcqBY23Ztr53rp5RZZyPpGCuyxqCkG",
  "key17": "2JQbqxHPFSQ1NkUNGX6VdXZkgtPNrqSJa1CfYfCN9A8atWjGehwCjq8trYFi2cpaTJq1SCgWgcejqB1ApgQG6Bqg",
  "key18": "5BkWpw6ajaYE6rzrpAJrYrSMsYJcEtAYD5i9p37Es2utjPfhKSgQCP9ruGN8drVp6HHQ8vSkSh2hymWHxrmxVxEA",
  "key19": "2Bd7PW8jtvskfqiL4spiPfN6Rcjh287fBZ1aq1hioBk3urUUZHpniqbw7XriyLBeMgbijmgKhwPuEKHJmJHdY69h",
  "key20": "3yurm1HEbUFJ1cPwJgmTUuFhfjxVCRMkCDKr8bUGm3R53EFFFn4iUYYj1MQ29HDBv1KxRr5EJ33vK1hoKqq2CxUH",
  "key21": "3V6SDoHnctX39TREXHJeSirY9YvCcdAXf2uJ2tDyxhdZgEZ1XSdPkdU5cWwbwCjAikwxaZkjQdP5zFjmfxA65GKp",
  "key22": "Cab96xRpwh1GojjZurQyKkD3jyKKwahMdQsAAewfqTVr8cEExvkUWoEjA1sZihuG4nTTzsfZihchVWoJuxonvtk",
  "key23": "5vnTGtuaFvDBQRoG7jmQ4mwofuEKrkRUMAqDdKBtNd7r4yNVt5ySeKVXoEBV3kkY9FSJMq8t5bcT7zzSz2pff4nX",
  "key24": "2MYu785EFe3hYitaAohNsCmmP1daUdkG5DizJh6j3XVhYx4k5tX89P9n2qxox6iiKDv5Kng2WRH1Ypquczq8NE5D"
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
