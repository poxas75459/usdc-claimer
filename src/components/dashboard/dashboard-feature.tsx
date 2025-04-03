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
    "38mwTXvKgka2CbZkA9qo2uPpe2zL16QXMfAunh4AYVRSYK27tHYzhCfm5guk2CNEBCNQAaEDGwmrE9ZPSwqKcNWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53soNQtTSDaTFqKXz3nZRWUgv8NbWwYW6WrPpxeU2FMKXXfrcjA9n25c6JCkFPnKKTd5mKHWVMdV8KZyz6zegtyU",
  "key1": "5y8KrWmN2dCz3BgmBF6dscaU92PWQJqipBuv1p2HhUecaLiJ6V9epnMiprWqm5TVxJejTUfQLaGL9adJqYvE9uje",
  "key2": "3xDvr72njBKsMYBh1sYS9MjWtk4TVVoMZFNtpoqXznrhvzHD5jKaTZAod9K9UQMfDWmd8M2yZqa5dJ1XrWhstiRn",
  "key3": "4M77pMN4TVXNNaNVU1LvkWE12w1WHvN6ZggC6sfCsTYRo8Yrq4BanNUHpeHfW2L6diesZqTDYdE1ncQw7dQRy7wY",
  "key4": "2ttcWidWuaG4uRVcvbVH4H8Wg7kxyoyhXeWdo5YtY9HysDgnvpZbW8BXKg8sondAsbu7HsSADLSGeo7nb5XBqzMN",
  "key5": "1BdkbePtKUbNxYKGfNNTFtqZk29mBngRxUcu3r8e8YQo2xb4FZFeaViYtJNmRS48Q7z3QdU5qcbWgfmu3pKEQD1",
  "key6": "3oYUEYzvbnmv6ii5JqHZPdXkWrMunLjguqXAG6A7ik2pukim5MqgvF7mRXT6C455dnGijPCF5KCNa2YVP4tvKGTs",
  "key7": "WHa2MYVspEbi9omaWfzxkuypmj3SJTzKQGxVsnehMCZah51ht3ajJsc29yGddYoDj4mnswfGaECcdtqRQEWZ7h8",
  "key8": "3CvBH2NKuoRDcfyFmsuRPsxmp1NgvVTFsiaKGoFV5PvuaR5f2g7nrnAT8JZncbFFpoeF3eqYAEnyLSCk2a3ZDE6n",
  "key9": "xCHaWvgEcmcum2wDKx7rRUHY5dMNKBdH69kS1dDBy2bL29dACepjw4yRcuwm1ZWynpGragQcDbe9yUAb7VRX6EN",
  "key10": "b1hQizBM9TRKkdfeiCEcHrtaTX2tmLqkvmv3wE8iiUn7HmDKJNWHdpQAVWd28zs6BYzrYmAREV74ojYMJa6TLt6",
  "key11": "5uQVHzDKQpMK7wQb6QTpzZ4VkCfodwtcsehZ5Hrt235NWeXS71g6v6RXSNKoJBU3WFGvfqB4ausPFYyNjGCmNJaE",
  "key12": "6rxJ9dyAgeLqhWqMqfW1HBT5yyZeJwZqAfiFGrrhw5YvFFJWbJBWv4BTeukcQvL2rjtzTgi71PqThGoAvTgNtXM",
  "key13": "ZXGtT4qUzh9sLZjiB9ke324gJ92HGc5byjNKXFxEpgZCy3YpzDG8BcDSLWMmycZsc2xvFY1w1tF5VxAVGra4UFE",
  "key14": "yMYsd9j9jPvBrGwbTTadPvvA3KbdvfaxF8khgWt1Ayk7mRzmNVxHv5HuVbc81uM6U6gKnwShzuYHaisfyMBYUcu",
  "key15": "3VAFjNxy3EcjkEYgK1Q1Gf2w2t9nSw6B3znWDrwR5RGDvWS6S8g28n2J6epwmsFpjgKe3aq5eC6HtVERjuvbsfNG",
  "key16": "34D1bgwtUj5SpEgd7oNHBbb3wyDpkjKRRYraRcattfJQgozdwKodAByS54RWZBjGL3MykxZT8owSgWiMZr6ecbZR",
  "key17": "2XsYExV5brHgdPFjXok8vr58Nb92W96GFR2Qre7FNoUwELsNUAs5vaYQum3rVkYxKurMyesG4iN5QDtytCMcLorT",
  "key18": "57qTq7rQXRxHVZcd44JKVVhUcfn726iA8nypMWnfdZvxqfuXD99EtfR78RhCj5xQ9ze4GiojVzE8JtzJakYkQt1W",
  "key19": "5j6BbJCU93m98oSvxVxBwuQWg2Nh5bfBz1tfs5S4r5bBDU8aWihtDWf5VY1iX8NzjJTDW9Lkzihah9Q8rxrfURE9",
  "key20": "2TJwULuCHMTYMp63r1xzzcXp6psS5BJA56gC6bdPCdfHRwE47WcgUKs6ke9k9JVRBBEn7zqpLdxGv1SzSNw7H1M3",
  "key21": "3NduBxFve84mCw4TVFATU8Mqf1h5LYqVrVRTfX5GPAzBjwGQm2XqrmU2qcpNp3cMy8X9NyqeuTbXteL6r3u1eRuu",
  "key22": "2NHibEfyUPewaNyNGpGdHf81CcBvzNYRnEGF9qnrCd8h8jLFLCthuoqFE1aNEUm8KqWJwbCXAtDnRVSvndS6ziZR",
  "key23": "3gXV79fLYpyPmVB9hYQNinLE47rf9jbTLqsG1a1fv6QX1iuyc1sFAZXXLz246oNTMNyje4TGLAe89pQ3HKqtxmAK",
  "key24": "2vL73StN1YvTK9frEgUA2LLfRpoHuN8v1yiZcgrfUMFMcmx7iD5e7wKDYhnSr722ubmqDBeNS9RcbzK7pYoMydv2",
  "key25": "34QzHLMtsyhUcoZCGfQf5SQreL9qjmsDws9VWN1d66GyidfFdfY9UNhdnj2cy5XcuS2Ny1uexyJhrdyF8D8rm6Fs",
  "key26": "2Do7zL5gjJ36nF5AiTAEFki2h33iRpquCpyTV3AK4EMedgJMtdXwHLasqaNmeQa8CnigZPKLwrBRHc8j7HFqUfbE",
  "key27": "2ffKR1Uk5UtMVBQAnURjip5bQ7BVAKSWF7cwV4UB61j91zfHtznPyqSURmrnsZA4Y3kwrNDYJNjeKkbBstvWstc1",
  "key28": "3K9QyuacS9QoB9kQFm6bibMpyxMLgUGxbncPmtVTSYfbajaPKmACvkjdbSjojGLQU6eVFuQG6MfTMDWuRtALJv8U",
  "key29": "5CwS4GqRDi42aCSdPj9NoTJoGXZBrJfFouAkhVCNjLLsTRrhHQ6H6MSF5cdzb6LvWWsLffenGeZctEGVE2SnNJLp",
  "key30": "5kiYCXFD2PuYVMFpvkae3zk1N7iFhJLVSMrrYUgJZPRw52nKDRiFxs2Tu1bz53za3PDhfTT5EFnqmMroHKBzx8AD"
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
