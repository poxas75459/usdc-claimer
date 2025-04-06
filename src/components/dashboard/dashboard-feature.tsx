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
    "aXkn7coBevG2DzgkoCnr49yZcjzGMAWwjhzWeQRuE7jRsjnJAFcjqyZheu3EtCxVc4HDT4PrwFUW9GANQwtMkeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WzTBF7U9heWWMm3GAFDVKTwaYH47CEE3ByxHtZy1woBZAhwQXemGMSfN9Cw1ZzE5qC1Jo1p9K9A14oq8UNSWLxF",
  "key1": "3rksfjEcHM5tPkKFBFUdovqFzcpqFDQrDq9KP3t37JhJFrknuJkNkTXezRGu842UoozemnZgqZb7NucQrgCc4H9s",
  "key2": "8hJvutZ1oirrQob9kvUxJ1Qv4kioH8o6oe85QV9GVik3kzgAQGF9NqEf2ts8DgTpzFW8tz2iiSMKypkSyJ5San8",
  "key3": "nqAwgh14PEWsXJ7UzoJ3KJi6pqo6P6aGBaYKdGtzFeFHRYPmWTcoU5KejP4m9qkB7ZiFcpqGdDGrcgYqwmhsCk9",
  "key4": "3ZgzTUtLmcg42LMDe3QvFzbsdQWBph7PnxmiNeEwPe67BJKNCqN4CxrC6nvEcHjDaXekFexEpUYJ9daqGZzFTzGm",
  "key5": "5RtDw2BeMUFS4X3a3uXmhpyCnXsh8sA3Kw4bKYPt5YqHNDdwKxst9TyTxmyvGC2ACqdBFwTQmUF2XZiYtgiirxYH",
  "key6": "3tWRkTPTDPXDN1ce612w6Zj8ePu15jWwAKMSjucsVViVMaF5nubqF2cgdo9K8NYUFPAig4UZwNuGM6qgwBXdhfHa",
  "key7": "2idC2Wi6PQWXAaSAt5hFfMMiV3P8BN43YdGwCvns3yDYPgiz2x1Kuae673JGS2KvqhSZw6c6VWzrpz1tm35UJx3F",
  "key8": "5nWedTT7KGZqeQXc94CmRYsntCC39j2AeNTuKxk86NHB8gF4sFmtfN5mWyPCcRMxp8bhMSyFjuJrP49SbftU2nay",
  "key9": "gBiDL2RybiF9ahAc5XyxuSrhQLHhkWh6vaAx7YB7wEwAw8s8AGMm8SfG6dHAUsjrPHXwXbvaxQLGcRUFGLEGHZd",
  "key10": "4zrAL7NRcm7ADX7ZqKZKgwm6XJoripXZaKJ5zMvQBDWN7gesSdi5EFU175a3QJ69kdVJanepz6YyxwAeTwwyMzEU",
  "key11": "5wE264GL7xpf8mFwBu8SA81a4rg1NhXpSNBvfYHpHrVs9ktPN2vTmrPEZyWrrhHeA8KXeiqRvfqmLv5ZzvJdGsaw",
  "key12": "FZdXb5etfzzXsuBNaaXo5dUKK7wfgSznGGKCgvzqvCWdSQi9MwyYN7xwHNySBYT7sZsNFjhoCYQW5uhXPV5RAtV",
  "key13": "5YxRhxNatXCwsgWTnepfbBTPp5yX2ZWAcKsSAfFyv4k5zQF8JDxWnufPsyHiAyJCtNFJyqBfXg66hv9E8w93zYg3",
  "key14": "2KdrWVtzU5Z3pgEFaLQMg71Q2gfCbJ918RoFQmqWW5nn2qz2TaawjVG4bERyHza53LnzFWgdsyFeuYioxZMypabL",
  "key15": "5isPwsc7pJHCorCc3WH2AXdmuCAhqRABs1d6KusLGFaQxFdKwAtpjRZtN81ggoDsa1NzMdzAPp61QQmjffyiu63w",
  "key16": "kYunrdn8r8EFj9cAP3D3XheDiaTrQZEZgcKWfXsPZY34q5sUVToXF8Wbu5GtRxtdcjEs2kEu15CCqjniXpM5PRs",
  "key17": "5m5mUw79yVhCQFVFWbjuyuc3VagXkK2TAmFZBLbtbd2TGiGq4BGjM6do7E4yhTXx1R1GV8gYRyyX2nYgVa1Mtshm",
  "key18": "EGYJaXw64GN2qBYemyJJQiMVUE5GC46b3UAuwoUjqmqaUZV7JoMniBihBCqqzKN7Dvje3XWNyt6RavMecLo2RKi",
  "key19": "gy2i3kgH6pwYUiBySnLxR6hMvxvPvQUQXoVaSK3gsACp87Jpd7jNVEfDH9PWGnME5u8QEC8k5uSnBHX9fkoqWDR",
  "key20": "sFJ8crA4Nzi8MABaVZGKTpwRDRHet4edDneYt8yXfpSoFod8sHT9UjjyqRPSwByHh3oKPPw52MS1ohxXkoTFSny",
  "key21": "2MtxPpbD6fn9CR7HwpoMnh77TQmmrhmnTCWgSKrWPUDWHvMhLgHLc9ihztTBpawngiPfBDiUyt6Ngcn8Yp2JqC3k",
  "key22": "5Go8C1Lro82bvh7iSEiKu1R5u9tbRe5xv4C1drSYHLvHtmwp3RkhZKDchoRYr7mbYzX5ZqhTaVD5cFgXQSvT7JvJ",
  "key23": "D55sEA2Lj1eVtDicjZow2mLQejsKx935TTTJYdKzNjSuYMxdEUxoBnRFPmdcRV2rbL5M1XaLPgWPCLLZn5pXjgH",
  "key24": "bENiGMy5YLDz8wCkr7b5XZJe3Q4pTpdMrpa8K8zrih4syVwFc8AapM5YnDeheiAwK2GFjHM8cuGCfATtX9ZEQQ5",
  "key25": "2QYvDh6jQgGFwhe9jsfDMg6o4JthV3hkwGWHTKKioz6xAw8E6dexTRGCbLhMTmCUhZ99kfJ2kDraczqWZUWwCXj3"
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
