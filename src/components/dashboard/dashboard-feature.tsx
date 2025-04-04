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
    "2LESy6FoEhhg444uMU6YzmzNFSrFgW1QpsjCMJTa6a9PddKs3cx7T2wnarof45QENJtn84PxnYtgzYfAEM6HAzaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tgEzT6SAEcJdLhYpXedBkkMeoZRxjzARna38PKjGNPEXZ9R7v7wLrDXvd6JzgE9R7ptxJUuC3ZZnCSbbrUPcdxs",
  "key1": "4xizX18KLYrHgpoDszwK6T6UEeszVYRQrXtqW48ULQhxB3bbdiWMyQoqFEjbBqnH63FF235rhDYkn2jv3xEApJQV",
  "key2": "2Tnup7X36VRsc7VrQS8LaPb2wDzKcg7fm2G8Dzr1KV3LzeSp6VXvJwsg5NLWGXQ1kTyaKXabPcdkLtXj2MusN24W",
  "key3": "2bNJrCyabmVkjo1fnJCW8nHKuhJbieCMz61q4WRpVi3D3Xwqfc3BGFCxT7Y72E2FgPWGcv4HFgUfgjadYDb3rRKs",
  "key4": "4B2b9S8Kn4MbKsBgpYvWT25BUrgyL287siaDysrwABNKxkwfRaGvjZi61EqjKumbhAGFX2qzoF9HTqY41wN5YhFA",
  "key5": "5byeudth2sdv8uwm9R3s4o6MmMmSd2bKZpA9aUr82ipTX2KKXgK6JgWAbwyk2GfD2DXZH8rD6SxZZhqzA755FjED",
  "key6": "4YCRTR5qYKTMJGR8E6SDhro1JcHmL7Z97j3hE5Xx4qRXFfT68YL4zY7BD8BC4k2mMi42pwTcyuQcQRfkrm1eBC1p",
  "key7": "5B7y8MDUrHFYTQfMD8SiUUvsnLGPgdmCxpL4RtxVKQHBz91qwuexFeDttV4Fiy9sJi1xRcvDcvNPoEU1hSoNkMnM",
  "key8": "5AJ4y6YimPz4S6YQ2zVLV7RuH7j4zKp9ZceT5bmRFtbepuugziXEtraDBc5YVBv3pT4io5s9joAnbRKcg1A5wFXc",
  "key9": "3GD9LNnAPYWoq9uPPvTWYj8gHTkz633REkVtDykqwTbuLRHFGocScHtr7bRhMoqjJPfCmUkk8rxHGxduwqtZEKLU",
  "key10": "pJ8TRotUKGdtH7tDyCx19zsQqJp6S66f8bDdwLGGwVHBZgEJ9zLXEZ827wGdJ7ktqp1T9tbmJ8nsZUuZwchbKWt",
  "key11": "q8gRKN9BSkyRoREXP2Rfn2ssffSVvA7HqsT5sDVchPdcQi7oCqYHVhYAT86ZuKzDTRPE6vrnQy3EK1oAYyzuJmM",
  "key12": "EaCZRRmnA7bxXoztjRP66FYBV26X9LGxUgagvt4L37hsNPaDURcc4GVMaoLS8Mqir618Wkwa8NMvNeKpB6a8Vxm",
  "key13": "DafHDFzYX5acTPDZrrNNMM3mn8SfAMmQ9Wwziqqh5uDUf4gGt166kw1TPceLoa3f2vvw1pBxHecEHQZt8tuKEsW",
  "key14": "rS1FewmGmGrTKfVC8yZzP1dL9f2k7seyppecLw2ShbwCA314kmZHYQksb7jQU35tLHXxm5qqYLV4vo55TiwYTuH",
  "key15": "zWsXUzhRKi4Y41iEVzCdg9YA2Heki1WVwQ5vjUMBNF53D9v8tEh86a6iUHm5ycjyvbvQF5TDKqbSkCJwXTsvVcU",
  "key16": "G1eGC5N6stq9oXux7YX9CVurQjq1hSDoRyiZtgzKYgksXdCuU3kZdqTyjDyhKNbsoNkBjSyckZFU5dbR7UV3h51",
  "key17": "ZbS3jtXjMyAUPRHfDcKvcvuBBCdBwuXz5by511SpTPsUhcPdAXVTBLLYFw42uDaKcwcqy667niQKQdQ74mvW8wv",
  "key18": "VKbSRpQLLZcdoEHF4KM4VAxMQjt3eYERJw8TmNUy6Vp1LA4N3USAiEMJNPUkk6F7ACPZUpkKxQF5yQ4XyXbNvpx",
  "key19": "3LwB9H4CHeJMnBve7MfzHNgdEiukxHacJ4mrKtYvYjxuh9QKvsrQSqwdWQoAGi8yJ1z9NRvNYqFCQB9w3jhyBzv4",
  "key20": "2oVx3s71W9nTvtJJfw5KoA8AqPE9shJg4siV4ivLhdPYJ9HH8MJKgTHrVdGqV7JsEqkTZBmeDKmBXaoJWH88koK8",
  "key21": "3vttttmoCxuh6hnLvQe1imUeWFArZat7fy5o5yYRDGmtKyewKVz4MChSqLyUvQ5fUEK6mGN3LpqK5gKzHdQMFzke",
  "key22": "5roXT5Wri9isj1yWXg7wW3rDepqrjnxuqqjtuUsFM67hWkur9G6Db2GB7Miyp2BjsGfZAca7XXmeiUGLWzUQ3rZk",
  "key23": "3JRMxEpyEiKpijoGACwErqbqDNaPqfBrA748iviEbBx25ciNANPAqkCfMq1ygoQggrFtRqdo8SUma5CAX81mmsNC",
  "key24": "n9UG39s1chz8qHcga4Whc93HkYtq8myN9D3G2UYycaJAxArr8BbwE7QxVh92UimacFfYnAtTYHxcgtRKSub6eEb",
  "key25": "4H8kScKnoGz7Dq2USkT6qvEBwnywqRFiWegE91gyiYSysBGhgdeD18HdscqJWXFCYjHRffVXABFdZXJq34mVy9oy",
  "key26": "rC438Cxzo7cab9odQpDS9WXvdWwG77EigAfAeDTgoppe5YuH1h7K17bTYPpGM9KEvgbVNA1oxdTS2RRmAaCDqsX",
  "key27": "5fcHLdBW8718eFWHHcJ3w8RPzwD1WVmuF5SMQy4PWpsEQSgvkv4RzYXe776ExrkFXTd14mG48R9xnBvWUdhpqTY8",
  "key28": "4H5TKeM3f7ZGa1t1YERXyUFKipyoDsYfN1yCq6HRyp9rX6yPm8KG5UjuMes2Jb2GrTvyL47ZVTe4Fs9NugYDRcv8",
  "key29": "4fZMppCm36dXRq5CiYux4YhZsX72kZDMzW9kgUpxv1gbaA5DinLSJsnq3mZjv8BPBQZZVzh9DSqp51SREQjuHD3N"
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
