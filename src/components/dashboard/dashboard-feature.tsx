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
    "2E6zpBGUP8a2xDtz25RBbRvhkL8BS6V1Yw8ET9aQ3KQuTbHVLdB7MADcgkp3nwjLdJVF447B2UefXymCgf7K4BD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fToiSkYRX9fJm5w2p3Y1wxzrisKJEJWuEE4GHzG5vQT2W9KUam7U3DzkXg2UBkGVbi5XyhuzZ5CtqGQndLdhow9",
  "key1": "53x5hwnvKNMypQUtUTZmyPVB4JmyAtTNJo7w7g5EMeKBnJhvZsHGXmvxwrg9JQnAxNvjVBPAxeZBp4WR5dUUEjUG",
  "key2": "47VuW1ZkyStuocdkzp6KEmrrwY8Y97ZwJznpp6kfGzoxdvK737Kzc5znGBcUoqa91ChpevKoBDk1TGhBc1Do43P6",
  "key3": "5vWr9fqeLT3xzMgwcj8Kr6dn3rUooQaLcgdZqwMkEjzfumyps8XKcUQfb5joFPgtkH3gza1UCRqMgngLwRCwXn9d",
  "key4": "4v65Q7KH1NVX77KfrvWkVZEiku4mC5Et1CMdnR1yEeMvyBZC8zK6akzTodHxbUbYmn4yrhk3BnB6V98mQThydQR4",
  "key5": "2vqYzxPqyvBUwCe373VmNECfw7qMS2QALk35P2VMCejXCbMAT18KV5em1CYX4rujKBiMeXhLPuGAPkkBcCF4jw1L",
  "key6": "2S2kBcc5j3ocKqtmELYuWnb6cHWahGomnTgMsbvuMLAft2nkGVRcEm6J7XkqgT22DktZ57VaLLsbTJmdYouWMhfm",
  "key7": "43MDQxwxKHGu4boVc8nc8ZHhdn5f4J5hHbRpWE4iowECbuLp3DM5FFNK2Wu5AjbKNY23tMX12EJR7Db2DZfQsJoq",
  "key8": "i1eLSLzktpvzEamvYAiRTqHkptJ7xr4qRdfFDpR9WCCcwucGCXDz9HtD8EcBjUvYvTVEbaWvKia1Cu2pTiVi7f7",
  "key9": "PHq37qVRHzX5LMGrsCr4gKWKgxh1ar18nfgSsTcMjmp8AiYkARZpqKXcky4zLYwTaamLimA7wtA246ZEu48UGeb",
  "key10": "4xnLffRQPT8hdegso8j7r3CCqFiHn5cXuZpDotApWWf9LgHTjtbpRy2Usrvtfg3mV43vWP5rNNbi4anM4ZoKuuzH",
  "key11": "enh5u1Tb7KaoiyuBFgnzdP3L45DkvzfJrrJgET3BwPcjrbhEnqnGadvs7iTagoE8eW9CNQHhTvH5JRE4oqyRQiT",
  "key12": "4dngkHEVfJfi5YXfVKCuMGwuZCTxBijKcVDoM4nLVfYAcTbiXLjuDYAbjDxz1hQKJbZRmXqvCxeY56GrZJRXNQj4",
  "key13": "2AFrmprYupWf7dXHKnkwdPz4fH8SbrD3vUZUZthwFKTq48sokHkReJpHVLVuC7qCvoaVwuw6WSCAkc5tP8WztCvi",
  "key14": "3bDxzhm3Y6uzrvKi4kJREzBtXskm8c2SPt5inwLyuvVWo7akFWWuNepeMaTig6acWE7tuXkx3c6wPJbzt8H2ExGb",
  "key15": "2ThGP3GfCnpUjd12MPgd1MPQCt6MHMVL7phnN5UUhSASCXFT92eznsxdd2DMgBmxYUS7dv4XPgvH4afEy5v235zd",
  "key16": "5sAnP3Uzj6pctvAVupTttQanXznTun8yHXtSyX9aij5J8q3YpserM8hcXwzgEyxxuzrLVf6RmKxmpoV5JnuhkPCY",
  "key17": "3o8zv6PEpztBzzPGgggGAShrujnqjAd3L7rQu9wtr76o6PhsacVSTiQ15zv4fCbJe1RCgtdRhBHKZvdezmtJ1L7t",
  "key18": "2c1ZNJmyrFYSMApzMaJ7KuDU23JgS3gNXgZ5aQF5VJQ1cT9LmMUDFXn7tmTu2moXR8rUrCU1fYm9gSD2jCXDkX4d",
  "key19": "58wBqigvteiUMM41w2DLZVQ3cFEJgkQSasL6enqNiBXJuCbLisNCagGK1k8pb9Wpgsrht1NCtAuKEiymtddFEqKG",
  "key20": "5vHF5W8uV7EwDZ7S5ECCz9GUU1BTzYPEJr5eKNrAHDxA3WSm5J8iMRdrCGkP51WuSTygnwdFs9jKY8RCRe457rZg",
  "key21": "32Fh63Q9tZNME9thbS2Y4aQNThapb8WCQvVd9fTjWxFzxXic5jtz7Ceu5yfxztkE4uoyYiJxoH7kmRyZVYVHCtM",
  "key22": "5A5CH63usCqzFUKrhoxLvzobXVSipc9oaVtJWNvS24UsB3hQkJAocWRBZ6JiN5yaVGV2p2EXNujDk3mj6QKPRCak",
  "key23": "5nK9GLue8zf3KE5Adt7RoTa4WCd2SXXqQMwVAr59AWazMtGYGN1hKeHckxMHhpLzPKemqjVdYgJYfWzU7pyRSSwK",
  "key24": "65GeiXmbuHhx361pFSqKSDvmaNgBhKPdRMBcMvH1zFvZEiErDbUWJ4CTeLgne2waP4PLZYBwG79a6AyHQYKj9qtR",
  "key25": "5BJEptKdF2zQ3tqQVkmqDYo3jf4T6pvcFHbUmZ6ytrBSvzAtzqELA4nasCV7oWqb1ynFSb4fGLCJw7wodvgqqxse",
  "key26": "3M6VW9gn2KkdJiK7HBNb6ZyH5B2gEpG1vYo9i9JkPtfCrUcjwF1bef4XJni5va7HEiuddHgehJW9a8XRusxRebui",
  "key27": "S55mjcfSMXtLsKpTg1RG9hofXU1wbarToEaZnUPA5Yx2HFkpk8ffDqPV5aL1ZDXhVieYiLcmxUFmqDP29JUXKcu",
  "key28": "Ctgani8A8uQR3En4VMewXEG4tiscekermNyceYL36op1GK33A4FQTEFGd5kyffhWZYgGGv7z4F1kMPMFGmsCJsc",
  "key29": "5WKP5YAdt8rybWRDwfZZALbhi1d7srK82eCkTmQp985574zNqgproRaRR9PYi6sr3zBS6Q6Q4s1D7YtYPXVJqg3G",
  "key30": "2kh8qybUknR1SHrPX6o4vu86CkYCtHwotkpkrZHaezk8YE7CW5w4NWN3RZ2kCgMZhhbsFU2E8wZhguYTDUrzPhbt"
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
