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
    "3pJRm6fa77xfxx3LJ8SrsYHWt9wWgccT45mCwr9e7BUDjxgAiYwoPttdUzcevcATBNGNNwYqV2f9nezvDWrecCkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PaeFgs5kwKv7umMiQQUzyrHe4XK1qEb2BY7ACpTYk7sGvccu59FuCTTXSw2PvPLUnQBFq3MwHck3rcNu1eWAi8v",
  "key1": "voVeFfmGeadeXmogHqK2AJSF5s5xShdWwnLgMKTCfqTvFhj6QJrBdiqZZN9rxWR1rVn2ZVFnERoQPgwU66mj1Mm",
  "key2": "5522gQTDFMA5kssxR6U7eEyv2KWiiyWF1C469F4LdSzfArY84h6ao6A58sBc3E5kahGNuMbeXNimq1jQYnwLA8wT",
  "key3": "21k1r78YzfDZG2cZrynRmQsVEL1z7pr5UGn9spuTEFQphxvnZWUganjfVBbYXFGk9j5vtDyf8iqTUvaNfcQSQ61d",
  "key4": "3u22vefbXBZaQJwP8xGu2SfKj4zjT1jiE41oLGDgzgWEQPJMCRMj5AcDCvmkStEiPazt8L584VRpEQSEpeW3fTRS",
  "key5": "5CPnJGhF6EHVnvjzeFeNwhcUGsANW8xB84GgkcaK9ymMz8LKGaEi8MB7nodbEtprxin1rCon6qCd27GHZg8rgQm5",
  "key6": "5ijVQYtnbyu2FrWgQ98tA3JmFfCVaWDwir4HK9KmvPAsQA5u6VD2YdXayLCcHEdxfhm2CRMb1QUcHAuPeQGKxtZr",
  "key7": "5R6TwtWDsykrLwLUG2VL1JcPNcWGGcCL22M4qimNW9E1bxMRGoE9vxNcRY7611kz6tsE4XWnthJdZwCiFUMKYzNB",
  "key8": "2Fgp6SFPNvi55fAkQXYSyBwkQmDB9zWqVEwsPtK7RAvr7MZFYsMR1J5i9jmyoDHd2F3zjnEpW1AEqfdG1xTP8Yih",
  "key9": "3XAnVH3MbfRCWi7Z19TVr8kjAxXtuP9w4qCKHwC5oWuy84D1bRdBPQRgehVjYqQxpgKnU5QwGbjY7TVzcdnsvo6h",
  "key10": "v2bDe2t5e1dpA75TThbACqEAcNLzdTPozc7tgUpjto4wwmHCNNH69TbybVi8VUth4kKRjRMiwhjfyXpK3UBbfyK",
  "key11": "3MqiEXwZGfG8R3QAtJzoJRdiuF2mP7zJqYy2JmksN535gK2HvwuKUCLPyxhjgEgRwUnhgKSwQ8DFMEYt5g4J97MX",
  "key12": "3vXZQavvUWqN2Nzte9pa4RMuZhPnYuvanS2kP2tL5PMjxCY4RxoTGttqHX4TbJZeF96iBs99oq5D7iXTFBhChstK",
  "key13": "QwSYxpFTwVzXM7VvJQ6LK5CWPNCtM4yDtYGw8dbDEGtYv3MxvChURUGvLyGZd7qEBp69DbpSKsNy5wUnHR6oedw",
  "key14": "4TMCPrEbvnGw5qtsXDSdZsoMcagTh4v6hi1YwtJHsNyTrg9WmozbetTisytQk4cDe9HzDkipPk7TfhBfaZMqD8rc",
  "key15": "5kAmAm7cxuT3ZR9dQ6LgsFNZb1vXqcwy7KscctHYd4zpbaTtk2wLS1CvypnsSwWotmKdoXQrbXzzN8q9suZNGu5T",
  "key16": "5uKEcrrdrQFyR52KUmn2QJsUNrez5fAitQ1awHLWnX2Bb5NtwwcEWmh9VJ2EKrPumar8sUjvXJ6XQMmRAFGoBYUT",
  "key17": "3Usx4gsqqNcqS6aXYgZEJqeV8xTdh3xMZwu8LC7UGEoEBzKujm32SXASTfdYytCwghaEr1okkCuLeBpyXh4RxZzh",
  "key18": "3s68KH2cm7QrMs1iQqu23Yfi2yv9LCuuT1bRQWqwpNaGphwe92wMvAHfAYPVRJjGg1g1H4fWmuPYsZfdb9YtzKR4",
  "key19": "22Q76H9mLPPRb4FBg5LcGSnTwbYcPvJdjGkeVGCPKhFYV6KgBRcinMVnrXVxEDJRoTu5DMveyNyvg8XpMDMbQFyv",
  "key20": "2bwvDiVvgb5wZxS5JJWcEydQFR3qrm5XepVprqoQ2bk5Rp4A3Jt3QrSQbBEgzm2WWSxq92sx23UFfLLXHG9dk7ez",
  "key21": "4zDEEWKhTVvHqqbiSsK2q7uuGzr7rDuuYHkQ3FQKi2cuJj8oPhEUFB8Qv6r2fp2qydwkF1yyZWJMwN9TFqKrTd2f",
  "key22": "4GtEhr4zYhPdzVh9phs11FUF58Fwquug6ynvVUFb6SCDVyFqGEMzDpYWEHaFdLSAdYQs7bgEAE3Lc43qqRBxcxWB",
  "key23": "25YnE8DXPJJjPH4qKYhPVmGHz6GsXfqUpbbVkArVywarhW98YfP514Lomnr2gdKrh4pPbWKooip4nGMusGYwnYT2",
  "key24": "225KhZVkGcBFWLrNPNK3DGpsihE7zaKHCRzMxnxJ4EjXrPMB4U53D65tvU3jK1o4BYdVfGExt5gkrbeRBWX2UHuR",
  "key25": "5s4Q3zUbvfdMm7BQC3BMG22mspXDagBNHmbaZk2sD22YTNBUDhx1Mb4DU9JEhSfnwKtZ6ZdHvhVzBKU6WhMfAF73",
  "key26": "3stuR8d48VBSADMM4SLzduDQLDMawG6rdbRJiSZJzn4ZXchK4KdPQ7SYniDXJ2dXaw3KVYK5XvJeopZSsugnon2f",
  "key27": "3AEFzwQtfyVHFZxtPWEuEwE9LmDw759hm3WKT2LGrRxTPPBojEidD46u4HxxnZTJWSvFt1tjG7r6znAtax3rErcP",
  "key28": "2GeZLvshbDLE7LD2J2rae2nASvAj17HqGhvU7CQHcQRyuZ3KwaVjPQFHMHQGnAXxqgLgKA9DpgXYWjcafLGffJks",
  "key29": "5i79b9CGbgXrQHT9cz51Mb3baK9E3duDhTLsYP4Zzyjz4HuLJCnX1tTzmoe9o9e71D5WWZiomRwxzK1cHXwagzEu",
  "key30": "2g4Ag4T2kKAMvn58oui5LLmtDzWxHZjy8R316G9bBGi5eCy2hhoACFAiXcbPa1xg5qAgX9fipokSm8VinsT7ppjk"
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
