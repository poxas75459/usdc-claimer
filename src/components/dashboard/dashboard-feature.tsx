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
    "5K8dH3HdSUeuWL9b3k3v7aStnkGCC6NEkiamioFwfwxUdG7nLWwKcgh1nnDRdyKZWxLGRP8iqvxcbo6WATy22pbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kkTBZL98SsRb1p6AcjAy5RJobrQ9aKqqpbfCuc4nijaP6LkRcDRMBF9Aia4FoCRz5AHVxDRppcPGS3pagRjiMVe",
  "key1": "3YPbin61wTehJS4i4vaVswBQn8DF7DSrPBogjbXcgX4Z4Jyj8fcV2zhuL99ac7uDfVpdAWe2cAUgzHCcW8oiUV9r",
  "key2": "5Dp7hQqaxH1zpc7KdB7oDupTZAi9Z7K5fzjVsbXRifkXrcBpYLXipLsYSkD9xoGLoQUGajQ4NXfMngh5c1JnNRrc",
  "key3": "3KD6oaLpk5WrBkjSBVW1TQmrsaJbt3wRBSqUwWUz8U911K1HNKY9b5BDhim2fqs8XeMnJxxkBKeqNDpEqwFi1XCE",
  "key4": "2RPa1Qo9uWjNFWTm32DSaZ8TKNCdDdMSxi6FySKWhSAkp3WmD1ymGhuubfzbpc8StakxaoPAJ5QoHs9XneomWazt",
  "key5": "4KG95emf3MFZqyu1o9i9xC4JjEJfC7T9ZKBdofekUUjvUmC418mUzBdfzUcEbBDvigT3BZN8L5F74e6YFcjWHSUt",
  "key6": "2S3mYo23hVVs6ZSsc4sSygw3uCAgHaBZKMu967eyZ3cQaZiYqEVkobQD27cGGjkWjg3hiWZpPU5yPE74NFrRzcj3",
  "key7": "wwmZChVZ6V9KafN8EK3noUm6EurE2Y4LxeroLKQWWvLep1XQKQG2FkoCgryGHM4DQWfqciDXcFM1zeRNRC4ZS5B",
  "key8": "2zsN3TGzAmLiF8X8eVEkM7banEtHA6BRJnRXJG9Gf2QWJSt5yCPbFydp2gkT2Sz4sY1vXZC3QhhWoRFy4x6YyoBb",
  "key9": "37RzVPvaiVAThmpRx7XKe259dHuop9WwDwMttdiAMakbx4465NJhyrjQbA5K93AehGn8MZDtSfx884RaMAuKrE23",
  "key10": "3dmAN87RxNdenPUabX8tvSzqntYjhxyhRSsxjFtAUToyw4Gm6d24FENdt9NjQSXgcc3ma3N5xcB85dqcHDfaHXcn",
  "key11": "3cMx6ukJuWWNo56XLkQjjdG47QGoMb5cARsM314HWh1huK3fU422nRmU77vcmYQJJ8p9BhtGUh3Ljv1iq7ynyytr",
  "key12": "3dkRm9B7rjJLKk7dk5VMWr65igyVMAanLFTiFFLZdKbhMv9jmEqPGY2YSvTFn5EmnykEvfyivThJCeXr39SiE2vY",
  "key13": "4df1dBZfPa8V6dgCH5PAagAgFUhjmkJ2agJyarbfLyh1BcVCBx42sXgEgb2U3ytes9twXVKJrjJTKYUVcCX3syN",
  "key14": "2mBFNssSQZ8zfaEFhRL99wfRwRypWjMQmRtUue6r4TjHmFH5qaN2SWph3zXwiMuCMQfSKfF6YuT9Ma8gZgzfRqgt",
  "key15": "5wj6gRDSeAaMHnXknErRWcfT9oWvDMW5p3tF3jRqzZ1jJEstNBU5sh982Zh9JGzbFc9Eed6NTF3WiXgBKEjU49Jo",
  "key16": "65US4miumxB3WUww5RekFZrVbarDTcsTbAVcfx1iso1MFKLxdwPEayaKA7wN7fcvB7MBLB5rdc2fneVEDkFKEaGP",
  "key17": "4Sj55whBbPWE1UMpA3AvCLD8qbB8ZMSAszmdE6eCTjByBUdUqvdvtXbfwTeERtuDCR4CUx2HMnZJ51bKVuunRGMz",
  "key18": "54uUHRZ3bEt9fdt7Y2eWXvvNwhaTwgULCNZNj5sP83c6BQYMj2UWumqJbVgK7qPCcxjwZ2cPKWW9y6EkL4z3pkfL",
  "key19": "54JbbqMdpt5ZeHbwuaYuu7uqP2TssRP6mfSrYDFC4zxUunRxHUHwS6a2azvW9JmQkn5WLNknjniFR6pVNgSDG9Gz",
  "key20": "4RthZetzYDW5h9y1wDvsV1tHnfx9o45RS16ExJqJJdg6z3SzLbdTHuHANJnfd61mZg85UmKgvRGWQbNxdSzjNB3w",
  "key21": "5HFZUg7V8XnfUr2G3LyvPZFyWWSijC1y7D3QFafNkyqS56Ysa45BXoFQHETJeaveFw13PpRkmXXhdWE7SroxrA5T",
  "key22": "2RG2kSEtykX1r6fgVT7vooguGuFXa99xL46Gb2AcS6T8fSFNqRD1zjeK2pVxAVMJnWqHYVhyLN48jLQxi8vgC5NL",
  "key23": "2P3JPrZD82C8UvXQUXKqFHeCmztvRsFWMZu75Ru2ZfEsbMLMpYpVe2GMQCfzfCzzsBzGh9YgY58vt329rvKLtwtP",
  "key24": "59fKjDhn6dUb6Sr2BsiDg7vxkBGkakLLJtHSry8zSU1wb4iJq9beEsdvxQtb5nkfdJhrF3X4GjR9Le3DThkvFHn8",
  "key25": "LnB6rcMc1i5DHCsayo3eGMiFxhrAbZ6upEurJfQbaeHaVNRLz3ZRUuiu9VAsCEbVQXYXMEERyTyYM8zRAQ9DWZv",
  "key26": "5bE2akzq6me15vcfs471N5Z8rAxMpTPw358Euk7hPC7fxGb6fsPEkuydPuMpNnw7n5V9mWrPC9d5mzt36KLEXnwJ",
  "key27": "4tx5zb9svh5RjkyBwSxct4LgmXm5Lc9iEz1Z6Gbx66MYpRAMaXixSjMQdiT1Gg8rdHHjWRJ6Zq37NqwApJNanP4o",
  "key28": "5kYDsaj6mDtWAJi41j4x7iqmginmLNP4V4gqudqFibqnw7PCsKZyohSA4hHRjiAz4WaEbMhYp9Go1Li9xugV2rxs",
  "key29": "5uBUZUM4ARywF86VTA62PdCwdNZ8uqaaD4tV9oVQJFFKJgzJA8kHfTwxZYzJb5aLG3W395hLDZ5GtQ7GhxR6m7wF",
  "key30": "44cuzwobwPHhgntexaDX2bpS57AvDHYLFkS2HeZi3aU7s68DeK8Cn5HFrAs6Yt2fhjBLdWnxbkhX1ECpjqosdcit",
  "key31": "5wJYsHsBhFbLybMFnzfJEZStR3M7xcEda4KX9N8G8wN89o7i2B2SG5VuSGpi2eFBJ6uo7sDFS3vbgt5WqyNDkJjC",
  "key32": "5wNHHUd9ek3CSnJG6McBs21hStXNWMPHjzAN7pZsU1LTpfmwbZ7YhEFaiqXhWY9Q4VyvPMbJVVUCQbHhp7zFzjPM",
  "key33": "CXjgQp4yt3NWCAcny82QDEPmp7wPN7m8xmSQh448RNaJqtoESi2qW294tibR28itVhGxgsRR4WfEEMQumVeyVb1",
  "key34": "mQjSbgAyLeULdtPPhpB7bxtGKszPk9N7T6XcjLTPnF7BFNR7D3dvkPh2iF4Aq4FEGkPecHU832mfUGoxBtKueEK"
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
