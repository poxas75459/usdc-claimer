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
    "3UKuSrwW1ErYxReAkUn6m5eA9DGnr7ykiFPJ6uUaTGBRSKyAWPjZNqJ3XEHit3DPjFpXZtc8gDQv9JEu6soCbFhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yZY7PNmZDTTSGKvuSXyZuDQFHYYHyqWTWnRh3TECisqBoEyuWHU7nbUgjKYjbhPrZZeGxe9hMaX3tLusQU97ER5",
  "key1": "2CMMjVm15Y1c3kt3vEJTcuozDqYd9e2cd6nDkGxb6deaEdBiUpkY2ZtM5XQjSzkCwXXKEhsqa7SkBRdLVP4YHDxL",
  "key2": "3eK51fywd92fF3tcBi4SQpqsHENgjuVnmSZmfjaW85H9E5CqnsH6bxsPXMGoCGcNCCBGsuwhzpDoQoBfCosqLdvY",
  "key3": "VwP8Fy9pJ1ZHouFZNm7QhYzqH9oK8UnZANgucGvG9xHhmBXiDUcgaz6cc2mxQwemUH7QcFLCppcFqvF1jtJh2Z9",
  "key4": "5tGJcQapEEyqyUgxTueXeKYELKQjWjy3r57a9PZAahXqket9YZxUg2BVBjV5W6sFTDvyUZ7K9qjcwjqTULHkKtwj",
  "key5": "3H6facGDjfQSbVa5qSwT3nXe9PuntaqzNC8Q6nw1K7u4pQnHY8Kd33ZfctPDbF3WfcY8ftbNjsuBev8Ar6ze1ij1",
  "key6": "2jxzkeDjQnesPue81REkSqqRm1zu1g2tSqu2FGKGg4E6wWcKbUTjL7eHpoU2tRVKeUfQpMH1MC2mcmgew1bEdPVK",
  "key7": "41fCJod5aAVdUzGStwK6xkrqqYvC8ijueCPK1cxcaV3uXgUbnRV97W4Te9z2xSQuTUHa3jC2BPJrxrYDhNXQr5sX",
  "key8": "4oevU3vqfbtTX4GmRYmHfPHfhwkR5xSDNC5WERHZXuFCfmFpMxDaRbLQoRENLfv57fqEDboHs9uCbaW451ofxf1k",
  "key9": "2T7VnSRVtoJRW7dn8MHwhVp7cTzzMeaUdMmTKNXQKdBicws4NDau4Ct98YYYfHrX6FjkFeBQRyLbXNP5F6qjD2gR",
  "key10": "5jRSFxxVtJoarYvvt6Zhkmouh1S1Qb5pphCzqih5SZm14snxAs9i9favTV2cZWR5W1YX8ZdAcnv3ksGutpSKN8pc",
  "key11": "4Sik2RHPSVyYAr5JDXxiYc8WKtm6f1XjuD1AfbqKystyYzKvrvRJGUo6stqUzaEs2tGfrgXJuJRPMSg66YGTZF7f",
  "key12": "mcRPghJQtCQhyQ8w9x92pZBt49Xix3Um96NyDx7kaQWuaVSTr5GRHdaWfUi8kDxMM7Vfgyk3jAhpDqpMTBNQk2u",
  "key13": "ugfTVSsXYEFdtURd4gLq965xZGyXwZyK7PUHChuAwRakrGBZnUbuinbW535CF243pfv35GsLxKHPbcHZVgxMCTS",
  "key14": "4GVoYu3VWjD3cX4D9Lf8k6EiRXVbQ7dpXDNXG3nJAPgDCvWvhbxWVWiLuSC544so7pKxtYrmAz69CzfT1TxvTAc1",
  "key15": "2K7x8Ky14DCbqX3qGzKUsjVUtkBxyuD2dXha9SD6YvoSy3bX4hTXVPQne2W1uFMq9iREmGk5mnASiTqf6NTtoFBP",
  "key16": "5vFAUtsT7Cd2kCQByfjezhFMpT4Hvn2V3zBT8XHZweZvXnYQazdLoVEpPsNZWbFriT9U2PZUeVwQuAJ26nKebyNk",
  "key17": "QycYDDJs5Nrak4YB2S1a7tXvHpSQT7RHcsdpdeKcJXfgKkzrsQCkMU1wWLeRuKYe6ST6zUZ4h8kgiLCwhX8BC55",
  "key18": "4h8sqsWGBXuHHZrkaRgpMJYax6xdkNQTmFxC8i9ejDXHz9fUWtWopbMDUEnZ84E8KnivSW3GfzLSJwT6eGwfHW9E",
  "key19": "4ty6JU3JxRmzMYVj7zmHV8FJzG5z7ArGMf2C5xnnkdA4KMyn3gFQDf7UKrhbCjC1thK1YgoVU1ieeq5c6vS1ui7F",
  "key20": "mPH2UiPmzRrgq8nzd1Q7Xm9JFa9VH9pgYoxutLah6UMQT85bDkiNBYWxgdKWM7HGuUoE4m7QhkFnSwoLYCpyLvy",
  "key21": "5rgDdnWpgbFrdFjnxBf9ZuUoXHZ59VMY7qpzB7BcCWh7YwWJwRJJNp8wA95rennZ8Z8o5LussAu5qEpXhj2cUjdW",
  "key22": "3TdbnihwXNX7emV5eZjHiEppoQdLKNx5Srd7eFofDbSYmbxJqxb4vpqpeeMTmZXeef3Tiqe8bqA5ZeqHHc3NXkiu",
  "key23": "2XEk8NeSGbQ9k82d3YALKqDd7iUGDFasspxQ4qyf1x1PLQbtCdwD2KsDdJCpTQgPHY8rfJFNfsJsockghxUA9Syh",
  "key24": "28jUr8naWzHLRhnuG9QoKUsSUhD6nvYjM7D44uFkCLqEAfYzPpbNECyLCyFRsb5gSVLhp4AqPg52mRUBPzMCFNvS",
  "key25": "RhCnDqoXwb1jHc8wZDYrpT9jX9tLQ4MCkbTMtLGfCmDzGNefUMxQ5TK46XHub2oy2AHBa5iVJa4s1ApwSH33eLb",
  "key26": "66u6vAjdAPw5JFKwBGovPi6BUdeyeCziDujL6GXKhga1AhAidGGorA5kYrYbK7rQyJyKFGFe3jAWRHd3aFHfzprx"
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
