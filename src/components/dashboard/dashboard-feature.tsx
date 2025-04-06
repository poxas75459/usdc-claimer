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
    "3LgxfFen684MUNzqBJfgHjr6wq34qkLqDtSxC38gMgfFBf8bNAc1FYLKiD4g2xJFtRPkRxYfxkSCFqtEhDYBBpTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qbMDGWZey4bo94XiohjDYMQQpVP5Wi29M5o22Zsxm6XANgGsJRxutxNWZJsaNuZwMcVp5T8QGFZ2AfMeyoZDLxp",
  "key1": "4UZAExaNSfv3rKjQA6GUHogfeNDfa4rbcCC4UEgLqjbAzLmNKLMSngzYZ3ku374V92gUAgKDmtTEz7W9Bwy4T2nM",
  "key2": "AUG2m97jqR6khLLUJk93Jf33uKcDmRKmHWZKJPVUaykxzfNTTEVaMGLMSLGUm8eteuE4vEi9CAq5xs6iWtBmCDm",
  "key3": "5qZ6cbxYHv9HDseXvGxBA5WNc2QEsD3vfbjzFaMsXHbwEja7EeRKQwJXZEu1PV8GFV96Nnoku5TnEpNKcMb9use2",
  "key4": "3STnK8WUafLF9JFBq7QdVNU9JNadMvXhjvCSDKiwo9qUKZCZJ6nuHHWV2sANva6vZBnaP4S1UmHsATTC4LB3mS3q",
  "key5": "56c3ffyikVV6Bebaiw3AaotxxZYuwopncoBgc5sPKoRZ5LaC88zSmMPKd113QhXB4afDK3cE8x59PFBP9665AAnR",
  "key6": "2muPnwzNBYa3d9kUYd3QhMkJBozkVdXXrK1X4aytxhmT1NknEWYMCLg5sjzdHMCszrKkRvroy3eeTp2di1uNcbgn",
  "key7": "5YcYP1PegiUrZm13kQpoUbF3HC9jQQey6qwNWodxAnc3C7uoZPTax7JmTHEU1osysPqnKNboRhrzWz1oDdbMGtZf",
  "key8": "YNM4frNnqawUxgLaCVNrkcyxYfNb1bXiYFCMDbR8z27t1BjK5R844PThPYxasWq8AYqy5PHLiNQRimfcNd8PppH",
  "key9": "doc56CxsNrZ9JzYp54KVbnjWbAE7dXQgY73ueHapQHwQdUJFyD3wpHKK38fct3cTvDrVSYiHNjXpncrHMpAsUsx",
  "key10": "5PG6TF2hgFLXnpQgfUk6TxBUWuZEpSK7F2MnZK3LXp3iXaMymFReyJHkRYvZVAqUNJnXR8LBzvWNJCUe6LpMBg4F",
  "key11": "2Ya9kzkxEEBJQv9SA5SaPpHH5ZVDpyZynTcoCc5woMRKWc2QkYQKjBzQPReHRs6xpgNpNbNvEs833XHByCvv45WP",
  "key12": "63NDSyZd75yD7N1iG1WLnRS3vUxQVqn3C3qTzx3sU2wLdEzVWvVmprrhDUkA4UX86Ma5WXBJyhHsMEXuZTDxBpoV",
  "key13": "2LfR6QTfMpJQN3MZfQ7TKfXMzDgoS6MpsW93DCoz85gY8ZGi8hRECzyb4bChyMSfPhbJHQzb4JLkeeMnRybDR4yW",
  "key14": "5SxgZvfTq1xCjNvtGvvkBWvj6yz4FTcxSN3Mh1dj5SB2Nb8QiBHe72Xq8gA9QUMPEKCQMDyyT5sujsHoTEFZKETN",
  "key15": "4h4MpLgFKzfGUY695erTN4RnpRbjy6abVcTK6g3CxXjDcrdyUSrNB8hXAd3sDTF759wzdV91wfUcpJ2cmraFhm5R",
  "key16": "2yxTo9dDEenTr6Kirv7vrrLya4ZWX7aa4fMD6UZGsQ29KN6aB1f8GJbrfLqzsSbAnbqKMNBD2NfySMf78kfyNTB2",
  "key17": "5JbJsVEG8kdRKdVDYe9EEXZkoH3cbAfWti9uwg5MFZnkjdiX8iQpQHtRupAcSQ2jNV1Ex1JkE8RfZAG61ttjVQ4k",
  "key18": "3FrsAcYLgGwfa23hwcsZYG83vZyNqyE1wc2wiXrHu4Lrq6T6osaiySgGHUM7EJG3d9XckrxAWvdiMZuxamwLvUuV",
  "key19": "4bjBJxCa8ZxRJ8hho1MyhJHxtcjDhezxYFoFDME737x9WZv9rArzqWaKdvj8YTrz4YfpgqzBNcfjehvno5LYMEco",
  "key20": "m14KjSGB8sbAuYExNMjaaBVCYAMTvs24iD5FTwnPe5tKKfRhwG94b1L3UMSLdizHXiP1gEwqUp83zHVXMGtgEJX",
  "key21": "3spspYxw5RDze1byy5hMZ6xzcfvJJvVzMpwveLJZNbPw8CVfdUw3wjbAebGH1KFiCXAbvHE1vpKceHnGiN73dwpi",
  "key22": "4FKykn7zE2XVyY4rFsDsbbzrMpKArqMrmsahmhRVos96YY4kr499soQqWpSmnU2NV5LUH5pu5t5kPFHcBS2YaNDd",
  "key23": "5XD9vX7dftES7KBvcFbCbnbsp59Q25giMnX5QE89WujPCddPiqA2hghxpEEVeqkwP7okV8Q4ZRo6L8LbekhGVEKU",
  "key24": "43o6oTuhYgCAS479NchVEVdQbXqEzJtduwrWizCGvb7TDGiLq1TiUizijnLTRGM89kw7TLb7BVNgy5c7U7e799Bv",
  "key25": "oehxdaz65zMkC1c5D9LKwmsw85cqoVDgdkfNMqjgs1VZULtu8i2nZDmazWYp68tvhGxCUPVxMUQ5JfZugBXRQhy",
  "key26": "3DUbtetYJftSAQNaBnw7Mrr42htrqiLuvShM6BUcZxj63PMvzeSpfzh9YNGoyuhZBizTAmeNDoUMmnMCDdhnw6RJ",
  "key27": "2FuvfryPn1t3VK7MviT1vpzAHLqm7GHaK5nWKFBr1h9qJUK2JVQwU7Kv9QxRHgc5rEqrDJUUdHTzmpTykgzVXKQm",
  "key28": "5d7DBwwdfF7DnPLhzLgdufZEDrLaQeUr2C1nNsgYmw1naEBmWzGLep3MHDKZvRKQyFNFqLJs4A7zFZMKFa24fLBB",
  "key29": "2JKW7LrGKQq8Q1uYickpmoPLK6z89EYLLFob5pmVbDryGbmeocDEyG3UWG1uYQWRH3sZY7gFS3C4NKUAThb1UZoD",
  "key30": "48oi7vRR4R2S7vqbQEfnE2tHvEGYBGY4zPPdS4Ju84bd17HqccrDtBc4bLSiH1h6uo1UZ2ELJEQ2n8BKn97AHXSA",
  "key31": "4u3h6X25JfFHJDZHngipbD3ribDB497gLrcCQdqBSwpPyQAv92gN3sKPTvaFffV4fqZ1KoK7jiwhANU9NkgyE5ui",
  "key32": "28ykUrHzhx6njM7MYomR3k4BYYyfX6JEMhF6KmWKzAisudZUwXKyXKhCGiuzD3tWqFFGBbazLB26PML6oo3uqCLd"
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
