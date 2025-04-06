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
    "51BFyGs3v1JycFhTkzJL911GWTnJRKNLzgZgvUU6jVDfVsbs8nM8P1RpKTsX44oGq9i85Rqyvk8uQR5uyhAE5YPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "371xFeoNK6pxKQDBdo6wGxsbX3D3rGzD3anTwUPb2BE3T5Kb8wej66r8JxhRquPC5jMqWUVcC14AbSc1Mg7UcTY7",
  "key1": "4iF7ddpMP9nUoBJ5bR27MSfc6kvLhmLjZoBeDwYFXcLptdhTmkuxumBYJn9HQmsFx23FULfD8ngkUf7NnJtJBshc",
  "key2": "3s3JYYCyDoEkbwPG1BJ2UFSybxwikiBLGHdk9BjSk83yjxYFYXKuUeXC1KPQ67c9UscKoJxNYgPuyQaamXbyBUFs",
  "key3": "3TxLhKFcxZJh9y6gJDufXg6QnZ2qyUimuU5yvj7bRFAZxj7kJ8NisMKCExz49US6Db6JSV9GzxajdiGfoBDp9iHF",
  "key4": "57j535a7JKEN59VLaXf5vkvrwAu1dx56m9kZf6WX2yi3in7LdxKL4XHzjZUATA6sPAh927T8sLrdayiCNonCWfJi",
  "key5": "4P64Qnss9u4LToAH2JLoX2tDc4u4yifVSXjznDeQM7Vz1SrjBKRciiDW2akQbZEMapGsSYsMViYDwZH2vD86bgQk",
  "key6": "5UP9Naq2m18h5NLsWF3NeMQjz9VMCYDy1bP91rNNww3egF5qmPKiQxfnhViELR2AxW9b19A8Dkdx9PF4JAGvYuKg",
  "key7": "49Sc7yxYwL7UnrRZ1ChxAd8858MbbD3iLTZmKyQbnsEKaKaEJmTLHk15iay3X6gzcDHuYGeMnheJBuhrfgb4fL2T",
  "key8": "2f9xtq4V2AFAiDH8fogHZC8JkvaTMA2Mf5aQueCrJjQMpXv3CTkXvAZznBMejUruUgb2zSc8Wd67gzW2S4YgmNdR",
  "key9": "2b6VANJcJE3967fzpBaw2eL7MZTRLBnFYrNk5md2MubPRw68qFLZ56uPgXBqm6Z3ks6znn53UWV2dg1Mtyo4oXtT",
  "key10": "2DdmRVyVSj9nLYSHuqovaMDXTcikJ1KzYWReyubCsu9pM659XQT8Xr6s7cXwMa1CH9ig81a6yRPWKVscEKDBtWnh",
  "key11": "6RN8tK9X6CoEZem9P4nopPeZkR1Dt1ydJcssvqXznPtsXAgvChAAwR5RmHsNXGxve5x1L7euuEroFoXd5u7R75g",
  "key12": "3sA6ymRSADd9zA3mtum4JMZSfMbZdbVZB2oYsHhLiPLTtoETStS1kCSTAwxPdTQwq56Gc2MCbC397u8Mjp2qgLng",
  "key13": "4Ry3fUWNCNy8K6a1kcV1PA6sG83vXJDAhvS58a4eSzbyhe15f3dSPW5Xq45okBt1mrERCci1jZecrEmF2D5upYfD",
  "key14": "4dfT2rXe3JJPHDJXRd9YMVgh85tnXkE1bCgcKn7jW559JV9kqf6GMiUP3fkNYwkL3jzx54k1f4LiQnFLyjSm1rDt",
  "key15": "2voSKYzz8oiwr31yoYNj7r6u4sSp6DHCBfRbZupMNc1BdhokCrxZtXAmpeU2HruwnKU1b7ce4NVykKLXZiMEHmZ7",
  "key16": "5wuB8FwUzwT7Cm4S1G9qw5NXvdWtyXfA26Y8ciLXV73uhosyufv9pLG26m8nszjyu3chRpXEcfxs5smHYmeqQkZ4",
  "key17": "2jexux6Wq9VVRn1oEVJSVZqWvxwsBtnpiuiffGVhnH4ASp3VxjqdUtEPpqK3GB3mtVhBzqBi48B3kjsLxPudSVQr",
  "key18": "4TBhrdMhvR89oA9dZ9dYn6robEeP7n9YVd7YiNdKQsAUbMN75V6Wf9ExKHqcFppvmPewA1DbdTUMc5aW8uc2n5Bp",
  "key19": "4dPxvKA1nRGPqDcMqDnfDM1Z8jQvdiR2qeeFVz1Lraa7uJKvuGvxy3iPKnZffhQUzLxpiv84GJmHEqW3yaBu9yiM",
  "key20": "2xgEJ8Hy3UrSktMgz6RGbtiC6wERvGFAZfPz6HEWrXM9tLNvAmJ6b6jgshSUoBAvWBS6TirHzgzFEoXrRxhYSM7z",
  "key21": "4wq2Crxx3cnwLAk4qwTTDdLu6rHUNwpH3Qc16UYBszTtbSwgeprQgb73gaMWiqHynwjS3KrRyKStt5q3t1UHAPyq",
  "key22": "4o2KBVDcmcYvsrGFBAzmp2cdpqaBVUxC3mpQePGpXdE3iyah3jfp5RNmNLdiL5zFmLVGbqbxTJxVU5i78iaur3mX",
  "key23": "66hCewj6ByrjntBTzTV9PJShqc4xfZcFq88C23BEKNTdMhEzofx2JTS8C37dFPCJtH2JvPkyUc1Mycg8V74WYvFs",
  "key24": "2wq9aMCsopBd3B2rREhcmyNVoMMCVCzvH35xq9qcZqCCWS2kEiY5buDXy3ZKWQwqEvx1pJBghscf8UG6Y6BnwTW8",
  "key25": "4X8yEnYUfAQZSYmHsJRL2RUKED8hP1GVmUkRkdQWeT9ZA533pqsjoswNJMwUGZttgr5LN8wampNn2qNqLLYUYA3",
  "key26": "5Za7S6c9t1C3HjSpoPas9jiFyHnWu1TzBZSpNNj4LXC9e5koM2FE5cAEyz93RCEM3JRuWpareVvwPg7xuKjbdJ4j",
  "key27": "5HUqTUh3LDQxxuffYNVYxDNC3j4ZqawJ2dTZKfHbJboDFP6RhKGc3PnSUhhH64njjTgNQTAgzPKq2aKYgJ2caT3p",
  "key28": "55yX6nyewWw1DnzYqAopscUhjadqhobshMBwa3uAJU1hMVX3ex47JvEBFczjGaLEvwQPAV6oMrm4fgi5ooCd5xaQ"
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
