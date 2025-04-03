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
    "4CMKgTp5r5iDFe8UbeXe51ZUWveU9ALnKR4pdo1WcpNmVVX9qeUS5XwKjj3H3Ef37mTaffbpKD8zoR37eRwSKA44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G9exVBA5DYfLFg5qcHLtkj2wUKwcLhqDp1QSsY5N6DQqJ7rJHHwjzXfkN2M4ETQ9ZKbRWiDRDFP5YvmSdkYTmfc",
  "key1": "3wEgCwQeApTqCnNtKP2ppS5FLxzQoM8rodvVHAx5Zau9zqf1iC86R4bcXaK4bi1hHjvh8ncGww196RmUSMXG6ckE",
  "key2": "476LitgtoUyxxHNKaYYu8WYVREhgH11b9Lq5posY5MsP7LgZ4KiLfwSSHxd3cqZAJ8KPFh7uyW49UH9DD6oPzcSy",
  "key3": "4YBShANNBZgKDXBHCd7KWLQ3y9nBuVfM9NBSnaSuwaNQRjNds2QXJHg1pMgDrEUEKdbaBEJSAQ9TNw3LpFD2bARS",
  "key4": "3wfZDNviH8oRt1mpuacfZdYwQho55QBqLhgcCu44XqnzCWic3SDmAfdTmC557iMDNj9QvGLv4eUa3PZH9PLMhtP5",
  "key5": "2N9tLCQX1mgbB1XPMcUmTwVLTLvax8MmPPDCLaLzAWhbde1dyym58SC5Pg5WCovjYrb1MmTyRe2MtuscH4REDhK1",
  "key6": "MuwSgmWq7oJdjN3siRVvSLS1iCiAeT8g4hx5YDyKeXzC2662zTgrTzrMVcBT8PSFSX3DyGCm7nuku89pFtyM3Dq",
  "key7": "3W7uYApszV7VraBy86CkTZSXG1ughe6gDjMVuxEPjfBs2LczJYAivQkxnJYDLAnxevzddZeRdBDU3UH2CCUNtNp6",
  "key8": "yPW1YU1YWJivdX8htZqSQhy7pXK4pFGZ9JnkrVFy2dWyUh5XEbjdBfLr9aRVbEDpCYPQjjygRw6mEk5WdQK534P",
  "key9": "21dpnXH59vY5KqnsVs29T1xhwrMUqH74CKViA4NHGJdSFLTA9xfkyr7jZaD65n23P2MnNMqjaEskPpjetmUiKaJd",
  "key10": "3ofE1pv2hfCxkkxcX3ZMX8WCPxtfHniALeEr8ovcGxW257mUMiG55Z4T4j5Ed5pDRQ6xgVtYNbYcMwDWiDU6S59b",
  "key11": "46DDhB6VSYBFBWrqhRFEaFJGXnFCbZRyBUJoyLmusYKTjR7p3aBed33p5Pat8zKiYaGJsPXypQzdzgNoKaUeeoGs",
  "key12": "yKToinWh52HP745w9Dgp9JdQorRy2zmb46kDLGz4GrzVM19oGUrB4vuDJpmAYRCsAvtCgPRr2tzyb8mXtxcfBeG",
  "key13": "3p7yfzFXg9DGnBF5mCDYJZFxh3LQjTwhoxZf3wHjgougktAxUFLVMYdwQBY3ZW4bmaSamg2exCc16FAQFSjPE3sV",
  "key14": "LFWta4bcPR96arkHfxb2hQj648fCUJR17dP6nzoku41aP1w9PQG3jGifUChd9H22HwnWCTe3hrN6tYXUH6Lx9YX",
  "key15": "2pjnc9yWSzm2S1NgEBAw2Vu6VRhHMVeCQ3fXMggenGMkVTwVECXWCavRdA7sA5kfqrPyqY7RaBUeEA4gMtzSfTWb",
  "key16": "56q3oyZEhSk5xUrfWw2t71L9AkC56eievH2VCYuR5sddEkqfdweHV28cpcPkVLYhzF1ja1Q3XAj9VaFXDfmc4aw5",
  "key17": "9QBDxSU5qHaK1yNRRR8yWg8PeXpx7FnPRdFnrERVVbxGCiNoU9KPDTPHyy45mUiMnUjcEM4BidvCeE1XRNLL6dE",
  "key18": "UwsPSJ4zgs47Ct2vsk7S9NpuESRWnN6a7Gcf64TZT4u55CBQgBTiceX5XRrx9KZWL6e3KqykriTuGg4G3smiScQ",
  "key19": "c5DZKxQZ5ArNcgZxvPhJtUJjyZVoXGPfvG2439Rn9ZhC8596wgSpEwTLMsj5xq5tcfNHYx25WUF3tVUDqo63CnW",
  "key20": "591p5TmsikjnT6fniS5bELxtpRjuSqTBRBuxZwbJuF1wjsC9pqD3ev4R1L35dCaX7MqWnXFjFLpRuG8662wjP2Cy",
  "key21": "2uXrmk9zPdHuXUDpKPmvxuoLQJmNZFvVFQTEcme9Lbfi8NpjUMkr3qPUFzZN3g2iuAFS5bMqJfCtomjPniDvUUxK",
  "key22": "25kqRq2pcCKpd7XuWTYQr9KnH7Er6LuVuNo4ynesFHompmVbHz1hCFT9ceToLALJcE9ka1AbZ5oEydsfgx1n8MyN",
  "key23": "65P9DEBoazH6Gkedddxgy1faEiM8TvXKuckdYg2E9RCEhFKErk9DW2DHQjCzxvUeyovp4wYoKzLS36EiHX42HHF3",
  "key24": "4MRPE7grwX76mHjAWbddMgNxzTyY7VB3M5CbMSXvfPue11sgT6YNyGzq8FHXGFRznEsGPNySV2espNzpBSgVwoLv",
  "key25": "4UCyysVAUpRah2q5WfzzUsX5iDCK6hcYcsxrZ5XwfY3MDvmU1TxsY1wdmMmyY6vNGx5uHz5jNJMQxAxzd8rHWTW1",
  "key26": "2pWwrjK1xmpZEgCfxu26DmBCgCpwwL6xMafaEcwJW7Q5C2gxaavADiVXM1F2h4NN2ZmyaVwC7KaTfUxKg7u9t7MQ",
  "key27": "5n8qEWQH6hj11pBUZpsngtKWw67XhF1iFQcSP9Wy7mSyGQNL9fp54AMghX7ACzEJJvicfkPUkEpxS64PYFZHQJYC",
  "key28": "5U1bQzFQSv8Pip8nWDXkrsNS7bNiMviVy8vUQ5EiodsiYdWyYau2vp7r9RyPAdV9hVTWJdqP8YeVQsMRe3VcaYkB"
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
