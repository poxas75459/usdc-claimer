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
    "2YdwdatTEGUUUXvUj2toBupwU59dVNNC69ZPux2H1AZ4wGdVSnRQ7Y5MqgsQG7QVgNXbtNeuR3QAsDjURhKGYvyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64tNbAtDXFfCQehi7CfY7dZXGw5aToLZWqa6coQ3n5zh6RW2726DYqddHqXeqP7w69spbKvovXgWcYoFKi2BSn4Y",
  "key1": "5XxQZChoEz2MaQhzR6QzndobNkF3MmfLApfwcXGb5gtg16v66RZZ5fN3mq2HFtDia4UKiSgqfzxtUqKLM2yTj22m",
  "key2": "58H4WffA18PEWg4AMKd5ArxC8NGq3hr6MCWi3KVFDjxnrE5TwKXxJE7kEvfvYtz7VYUbw84auUW2fFoGujMpe5MG",
  "key3": "2rZ5NNHTBcUnEogmWnk6uPyFjBiCEo4RVhTt8wLaYwWYffGsqPDLqAwhE1aXQq1WdAxEoPY3W4XEjysZGy8bkDf6",
  "key4": "37h5wg8eSd1DyWwoVQ3kVjHu1bPriVpYzQVhhJ6xnyMRn5AhuETtcM87vDqWt5chAaqho9m7m4qspqLzKTxELz7g",
  "key5": "4h1uSaacBpLUkA7zTbgT9c2JuSJjFwAWQDcBohW1d3DSAcU65ePrPahsQWK9Mb9ERMFSMmKSQhyv4oKDunSHYeKv",
  "key6": "wkGnr178BLxe98NHxMHAiaBNGFZKRCqeqZzYFU3wP5x69wD2xkuwmjTDmNfvo7fhc6Xht9CrMK8iEYSNoyyenFK",
  "key7": "3ihLYzL2wC6MC6R2h1Gb3gXzKCVy5YbDrH2Bbk2NYNC5pp99gn7wFKL2HfTYixdwExkHasMZG9cUAnWN2wJp5a44",
  "key8": "4gfhQHPGcVbFshU8zVzbcTXJprRXsU5mewqh5LPZhRi3X6qfy3zC8VVgSDCDyZ2fvHFHJYu6LTJiNNTLDDzVRD47",
  "key9": "3ny5aYFFtWNCyG2nz69rrTph9GqhfDsCt61d6VqHp2gRXkjtxuq35LqVyBSeB6gmVAxLimSPJLdaQQmKqbPuGc2Y",
  "key10": "2gb7JMae4nyDenNzpFbHRGNcs7FFYQbUU5advjgm4EkctWRVvXRpDrG1DwU5gbUfFh9MqtvnQEZrSPYU2eAFfmkc",
  "key11": "2gPwt65QnrsyDQXhWK3732JqPyNoBUGPnv2GLxLprbtZGUq2agSbixgwvchdwQgZCWnX7dYWuaJL558nKnNoT1cT",
  "key12": "2Whr5yqboMkLoDk3q4z7tJdGJXMbT3KYSnDNhAhaziefLj4V1rrqUUvS1DruLBAdCsTXc9fJN2ooRTzfPViZVLh1",
  "key13": "YqbM5SU5GjzPc3WZ1dbw9iJbDnNXsA1z2MFDBA7xGZ7Lpjbtpdav9KJd8XfDiDXh76L9Uz9a5tdf9hMESuhGqgT",
  "key14": "5cYCmtVNAH2c4JZpCvgdwpwUdYrcwGuXHACeTMytxcqMqt88CDjujjriPbwWTeJveusP46wGWkHQzvci5aHx78L8",
  "key15": "bTTKdmTSsPWE7yM1PS9JqXVrZT7ptpUZsu5wE7e7xfspdw68idGXSY7t77uTSUNoXwwHcnEdBVyG2YqzYoEL37w",
  "key16": "2Z9cu9WdYjaQe86Kbd9HdaZztapUC7CMC59TY32CV6YHHeUVL9Bwfz9C9JsrGhQCR2P3ByY8EZcJtHq8ti8pmJy2",
  "key17": "2fMDxw3xn2HPauKZW5merWtYdSf5UsmVUkFSocQmw55s9khcHnj2GzrWXHzQ4fx9fghfVaYQEdapZdBVgW3Y4Zuj",
  "key18": "5PYGqgimReCtytPAkArNWDnt3Gv84zP366Us1b8xbTY5QG6ujcUZdrNd1toF2iW9KGx7cEA5pnjivwF4XUucrjhW",
  "key19": "2hwJ9d1CnwY21ffY1NWsq5hNp8n1M31Mvcw3N3EzKJXSyPrtwHzefp2T9nVCE8R4Kp32Ev9VUjV1gxbU8qoqMMaZ",
  "key20": "Hr1FWJMPLgHu9WMB3rUY6Zjo3wcQfZ4xvLrm51VNH8DG3sxeEMNY1maJiipZeCfy27rnwhMpBdpvDJNAP6Lo3QR",
  "key21": "5aSGWTRYyp5XBZgu4Xvm51SbkpzLKiYM35YvmJNAMLUqyD8mG8zimTLgh5rfnt3ikD3oFQETYfQqt9aUfou4T8R5",
  "key22": "tMnDVKPvJBvyrxfGij7VRBiGMbLvYHrhKfSSxvSJWhs5TwqpmmtU3gGLztv9nQdXV1vT91Hc8X4nJPaBqeZVQ2B",
  "key23": "44mJJ2P1MP4jkFWZKENa5EnnHq6qBuxyfgAGv9jTxuucfdZj1kimzpS3ME24rd68YfYDM9vUhFuJFUbXBhhEN3eL",
  "key24": "4LF3pQ2s52UimjLxPB7KR3da6WGT2VsZ2fyoRKE2aFR9dNHuS9SF7rndxh3WTxpDXE465rSeC8eiYUFczghTcjw9",
  "key25": "68VdSmw9BwzL6KdUiWgS7K11i8NodKMwUugrLx7bX3WpfphA75QLBJR3vSLitH4QrgX5P22NwbyhDR1L83HF7TW",
  "key26": "672BMpSMmJs96rUsojrx6BM9GKrvGLYyBWTKADDuP2CmGxCFoYRpoG9F1eZ4ppL2b1fVjUBn2yYypuqrQ9mXykmv",
  "key27": "5S6baTWsWJU3XAnsYe8T8CHtky95tpLGk5BbdxkweA9dqgmh3QaZKpLtB9nd64asZC4yX8MJ78sU32G3qyeBgYF8",
  "key28": "3T6LsfJR5qSWDFc4uurf5ivE779MjBk949FRrfx5w21TPvpbGufzavg1m23uQzuTCiz6mEn1sGKvP2beivcCB62i",
  "key29": "4FeuVEbRPrRWg8WgK7bSLi623Ec6NZYsSgRYUAjr6KYTsJC4iEdVFfUGz46yMPg7F9fxrvn9SPtchccgFwTAcF6Y",
  "key30": "53YNyzDRAjjSJ59fy8keovgAn7SVPptLLVvL1CzdiE37DrM9n4Hugz7nt5oNrvWND3cg7zTHuEroyCvhEFDvEUfh",
  "key31": "3TW5mZfpbrkAAfE3sz2zVucW6yczXQFntsjxfX2xWPirv7Z2E4XfpYqccguRgKkNUjhGByrNDMMGY52GM2JoMnez"
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
