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
    "4USU6cgt5vamj2fxnetw8Fz3XNTPjXWpmY6LchzKtMT3pgdZwPhPSp3EnSHsXrzcENnKtx52XKEjr1eYqjCVfiVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tzGDjuUu4ViUjGebqcy77KeoHFCrYjNmckn8GU5o8JjjyWN5eCKS9YCgyFMVQm7fA3pZs1mwnMLSMjmjsNjQwWN",
  "key1": "CRpfUE1g8Gg5VPEXoSbEzRmB83d848GnVQFv91iUkTgFUGF5Wvotb75eCJFLz4XaDfNizDxLAasqP6VUU3m4LNM",
  "key2": "2R7mzer788VisntUrT7bqLCAans1DciQHLB1Qc5GognWNZLqikXTbxXGNteo1WGySaEVNdqDwxomXBR12gn6EtT2",
  "key3": "5NaCjQHfX7Wt8BAGY5FCLXJtx8b4TwatthcWeWV4UBK9HkYdxAx7z72EHkYkJgUSznsU1zJauLTpZjmRL7fCp4DB",
  "key4": "3u6hDhQAk7o3GfVaD5Q2m5x34v8K3i93RwPkkta9UPzXb6ySpk77sVzYMAyep9RrLude37soxR9YUbVgJgMvZBUc",
  "key5": "qkFNoiu6JGGDk9aH9SqWFyGuEG6cpxT7CUFP33dBbYk6BbqzJsj2hPafqyExjmVBt16Ce5HmWkhVXiePx8SJAki",
  "key6": "QAL3KLzakSuGkut9yFMFXXtvyVQXcMNXmaCknmusEyWstrRJAB6tQAvv81TJnsi7TNCRNZ1bGAiyrZTZKLKMpKM",
  "key7": "4geGcGjkC4tppr8PV7Q5vCsWiixUgWhvsnEFadn5kER3PDpZYU7VtzCmQVdEbHzqNgmFxEp333yK2nuMJW3hAfXa",
  "key8": "iusty7RUvmDUz5S1ivhqsW7ybWn6cuEyrtj9PorKEhWH3znyFUVCXuG2s7KyZr1n1JAoyqP38dB6vsFEANvcQBj",
  "key9": "5g46Xd33oDk8tomerMnh12DHc3aDqpmu7VQGj3CWgX3kPLnrGiqYUMM6dJFdiJqKZ8iKpCjYTM76mh3xzPDMxuyk",
  "key10": "5rLBL5vGC44ieKsRzzqUSJVxUzzLzCzcZdZiZkuXvkSbLxFWikZsZE85R726e6K5qV1MeF5WUZkzHga3danrNPqK",
  "key11": "4vN3gG6kuJS6KaBcuRMbDxuzb4qHGrQsfqq753HimFPWUDVW8C2mFh7C3ZtR8gzQKMVnGzWEKzb56kXkfLvrdA7Z",
  "key12": "41Z9DJUqoT9FTYtTpUuuH4mVp8bW8D9fMkyKpkBuaNVBbn6ByJbZ69UwLCchvPwbemrghQyE1LzGAfjwLLfnVbrW",
  "key13": "3f5DvDQbshTcNkXFYzGgALa9ce8xNvMygR8AnEA9wkfL7R1y4ges1CVta9XPuLq7mtN8x7QZeRmanbT46r6h9A8Q",
  "key14": "59WfT9tBC53MrHy1T9C5sqHATnzzhyoFJ2upB5huq6XJ3rH4a4VLkGiwyTv5wZK74cBANGJyTTrrs1h4PVjwNEAq",
  "key15": "5oGzzGT4qQQzMh4My35JG7cTpueaTcpP9skjD2K3N2KMMHTPdxGxf5S84oxsf8aHjFg1Av6adZTBG7qqh73r3AzS",
  "key16": "m9mWkwucnFZ1MczvDfzHey47xTzbWwWSDVYY7mmkGAUwtM1mxM4nCoZZK8W3CoMNt4jnDa5tknq2MAfxEaTH1z1",
  "key17": "3931RpuiWPktgzLBMNJfUBK6kUgcBNBeczhFPi4hAMDV5ixsjvEDLWdN71FamCa5phLdyRhhe7vpVXPJHTVeCXh2",
  "key18": "61wR8ZBcCqbDuT6en6nN7JbqiPzmv3WnZxynvgSDXYEYVomD141kp2ufHvDojXnLTpCSRn5oLdemRKUPPiw8242H",
  "key19": "N9ZF51AL7tuquayaWCH3gVYSmXFDMSjMrxXGaEUXYrmKUj6Lm1RCRPi8KQ8oEjzEfsYHoKPqczy5xzJuqkdKUzp",
  "key20": "4xYzS2patq9EmKXNQfKGuZEq2tF4dV4wP6hXp38XF9saZ82oX5BrzBHAvmx2X1pUsi3sEn2ku2hg13jxcX8SXnXV",
  "key21": "4eTMS9ZRfjWq6uPJZk5vKHjQAJCSHFRFCQceN6DZU83oLGVrqAhpvxjjhfyFtKfCQY6HgfDnpZE4gAyvuAWZNrA",
  "key22": "43Wjcdz3dLo9pqxfvU7SCLEhr66UyS4sUVP16vwcV95uUwwNQD1HXuFjaynXsfFs2oFc2DfF6RCCH2NHMCijhnqM",
  "key23": "9dZDm9kui4JC69q8SigtAziQ7Dv75ZrFZr6xfvHobe74RMbKRDtPheaQ6RhmhiKcRwa1WqxeCgzEd4fMupaDMGP",
  "key24": "5VbJjm7c1kEk1XoU1aUbGgJvDjZScSB8Y3pQ54BEJkFv25aySGfXvccQSujMCNXfqSk9pup9Mbdes8fiiu2Mpcug",
  "key25": "4cGXEw6eT2e6QWVa9jrvDtvk1Fza8dSwEXR2twiNwYBJnHunz8AGeC59i5gCF5k6Yoq89JjddCHXdxnxForaeQax",
  "key26": "25NWd8VFaaWEdhuWjck5nUQajEZXmfuSfp3TTaADxfbgyWxLrRzdwKXbczCjyu56w2GvpWJPrmg5uojyxCmpkuLT",
  "key27": "JZYt814QwuYEHuruUBzVEVY7hRR29niC9p4dAoXud7fedySD46vWdayGkDcs8DHd6X9yLEbXWhPkFmjQmARGyZM",
  "key28": "5jzjgkJm9JptdBgEUsnmh8XE22Kb52A8uha8i6VtKTbqKMwEz9R523pkREpSaGxPtnBZSG79wnmLe9FTFf5dtjR9"
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
