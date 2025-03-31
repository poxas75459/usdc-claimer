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
    "5cU6omWyFmBPTMrLHZYaqic1jqAMWJC31tC4yu5xkYwd4Jmfg3dUdBsmdudKc4umsW4wbxWMhzqdbXM7zD4crEE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZSjB4iFYTbqZiyXbh62D7u5iVmAWNDwGKCogX3NPQgRcg3j4MWLtwMbqNDGVCFz8RxKfMCJZasyCSSXNeSZwuk3",
  "key1": "6AG84s2hUqLxjBmsM1BB2HD1auwaiLBiGkGey2NNmaoqXDFSy1jRnN1LBBqARVKhnRk8qx4A8JomfXHALsrkBV8",
  "key2": "4c5U69JDDFjZ34EAet3WPuFaYrJUEwGiZxpY7ofhzwbFn2V9ytbTqC18fCr7hUSUGc7rTaQcbjiC4pqRLghF9wE6",
  "key3": "2fk64Vcrk6G7n8wbgaZwqBp7Wv3eA5aGUhZRQcjrTSxVsTprNWLKpNSfWTvjcDnLHoEM4GdiqyxmrkECnE3EbYK2",
  "key4": "2dxEsc57Jsfkiv8E2SC1vkCRgnxcnq2qJAvPLFn2pWE3Dt2Wt4JXAQD6wUphN5H4LsskrPoNCYoa2eDafbr2bAh",
  "key5": "2tFhSVQFEy7wgo3KMTSTcuvVP9m9phfLnGy2h9TjBcBhJ9UGwpZAhd1A9ZtwxrHKX4rnde8gRSCQMXoS5btMqAFV",
  "key6": "hCZagFhVQDa5tT9rpxiTqkTJHmzXsSACMR5T4ejQhkN5hV7S2oBHZqiAs9WS4tnpFkyjc9eR8cbqgjj6g34RagE",
  "key7": "4qNmGicCQpytCviLKtNcECgJi51cdGLV9XJrB49A65VUhfExVLpTUkfY8BJdiUxbzPDC1hpMisLBRncv295GKemS",
  "key8": "5ZnxKgwN8nXG4NsqrWvyG1NJPJ1d4rr4mXqAEdAYB8hrShsByzwJzfCF3czFYwKsdwkpkrYJbYeQULNq5RQQe3hA",
  "key9": "dunGr534WuEYYisehaeAj9Kq6VTEBirFpnUcwwQefRAkxR4EgEAWTFK4pWrb2bikn1cUtt3HbRgFuqXMnRRGiN5",
  "key10": "2T7cqAvA9p15XGUSC51sKNBAVeWKwzU8DCy1Lg6fMYShJWuNMUm6hQpXgPBa8kqnxU7xKzAu7tMSRLVzGtjEX3bk",
  "key11": "4HZHAroWP28h7JEfaCGPQfapsaWFUt3u4JeNzqPUMvHUDLQ7GJfshNG4QLwPjf3uGKEDkYv9kh8p748rFZU4rhUg",
  "key12": "5iwTATQmgdqvPrFSyh5V7DQZ5SoW5pJgyKR2ieADxrt9fxmsq6FruLv6QNmC8uTutwkgjyBySLtYXfCJgcbWdmVM",
  "key13": "ByqMaWay76TsLJRJmfmASgmDq1Nt81EERVqo2cWECVYoHzCovRpbctfVCbLvBcnZEKwHdqxCNxPTZ3CbgeAy2WJ",
  "key14": "5HvVU4jmLtBkd4syHn7HaK2FKt2zzhxzi6VQXhychBXSsHHRMUPE5gQBgUT33EzG6apeLNegQHnpXTvxtvpxbdZF",
  "key15": "29ZNTMA3zGNsEv2oeyKyBXRMKgJgyd6ShLc2FVxMJ1VSktJjauNyiQhkRR2gDfPbyb8vp4Gyw2fa68zL2szDhKaf",
  "key16": "LhsEvSbfohRwMQt32ehXD4YD1RpgM6zR6pZdCu5ZABy2pth1BmiKVK7QpLo7VmX5Cg3tXzz81SCWnzCC3ZCdczB",
  "key17": "3Mp5evy6yfhDQe1JrLH4hLuMAJnzt5uXzQVnG3fLw4mi8QqNbejNM5VRfDRpaVwwgdpJM87MdoaRPtNKBvdubm4P",
  "key18": "3CtR1FipuCMER5wSgDBadBiUV4679BvPTJB6tWdz2iZ5JeNxhV6LkLZwGhWfdvZSgjw2TwLs7kbZJEgYM8KwgTG4",
  "key19": "3Wi1TB4GRUYaT7TEM4hnhbajoKJDpFPgrVUoaaCUQSVbnFyZTm1GykS6GCxFyw4MZUzzSaK23erD3gQhYjt7ox7n",
  "key20": "5xunm5baAAt8dnEnrj64donEgZzehKe97zzNrA1mpk6ENMu2acGAHXfVZ3cm65XVEdyBhDM3ry74HreiRCmtxdKN",
  "key21": "SEBuY6cswQ6H41QXEDr7Gjt2SrVENcD7s3dJRzYkApC3pXtvZWquMXKoG28NYygzH5KcZ83JrnKdJAC51x1ty2c",
  "key22": "3Ro7xQZBiSV1xLzhhdJF8sr4ASU6ywJT8DKhww3gsctP85wfj1z7HyPnX25EU8j7DLwbNMr6LJKhVm3C23Xx9S97",
  "key23": "tEfiJTQfcTBN9UxipPJnQv5BapxRngeBj5Tne3XyuPXjeF2onQWhpDzFKxaDAtWWQnpyV7c8xYpMPWCax71cKhE",
  "key24": "2vdjpo6MkK3SpP5sf4HpybhLQguwZkwTtNs4YJYcC86WzoZmtYzVjxP4oHvS1Xbo331irfu9UeTMhupt9TEVquLa",
  "key25": "65RijrFbwx7AFQkZp3eV1512dkwTXkoZ9HfuHRbhBz13VW614uSL7B144EjLfuJ2NwBeusGBeUk2mvCDku4j7LUQ",
  "key26": "2SFMm3NssqS2FpbAi2KY2oZEpKtkpFFviR1E6bjEvaUxkv2XDpwtDJ6ABbfW4A3fdqsHATbU96cWkR8Df7oPtryD",
  "key27": "2is828Jt71qswdCrjgRHxhaMViYYJCNUCMtJGEpbwUTwm8rr1qgkjvb9ctu3ZYxGgK4GcnRwYVpzpkabxqk7DU5A",
  "key28": "3J3vWHx6MtmgYNb6zMnayfJJWcoHHCDGivFF6gSHCGxJso27togUKdkEKhTidcdG6nRASevQMXMKG5jqq3ycbF1j",
  "key29": "4MwEjyQsz4MbdfadqadHexF4gxzhWaGvys4BTjnnGE9dQFssvfGeLAXor4BsbsjK7z9nTTDdny7kpQM26QSzMGbU",
  "key30": "3v7kwUyffg7TQ7aXTWwLtBwcAi3UZ7vAANzB471FVCNBDJLW7b65W2ciVYLSGrZor4TsnJmdAZMoyU2MM4C9zo2g"
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
