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
    "35uLQLD88BMEY6LdPqxw4zzstMtonuEwAbGfz6hSJL3JmqBK54CSQJkLVw1PNJ6NyfnpfBoZDW613LNC4ijdciEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NPWC2qQah6EoXcvkBR8QUqBmRsi8wcqHaKAsUGb4qcX5uPVPNDnp4eCiBTdx8Q23B2jSLJ5Z6fUViUy98zQu6d5",
  "key1": "3RdmUTNohD8v5fNynk8WPeFaRj1eBWzYJxVADCQiFcgYcAv5mspKN8PvNmyozVZzjQm18rtR4iVK97frEtiKxR7m",
  "key2": "UiXfMjxCSbm3HUyqUHRLVxD2SY4EZDrpSXVpLE2e4Ega9pwoXrAEgoDZwh5dQUYMtRFJxCo3jZTHxx7Y7tkKfhF",
  "key3": "5CmPxcPW2auRuXhKZbVoW5AUBrbKCrr4D4HkzQgeck29ksnSJXz7DUB4DtrcM77SC4DHZfFg2NrWiu8bCNYs93Hk",
  "key4": "5UTWmt4uoXqwhdRAzCK2yG8n8BMJpgwaS21BF3Ao9EgT5Ev6Gs4pvxSULF1GBbVoqKE1YAC8g6AWcATit9sveadH",
  "key5": "4DxbzD1WUx8CJ2FHScoMYEUHkvA14hAaxmr4yYtkzD6q7a6Pj4k7S4psPeL23rex3xDgXEEftMXbaEt3ZRGXgWNa",
  "key6": "3PSUMevkCL2dpY3odK5rZJ1MCpL5u9jcWcatwabja8Eu3DiFdmNVKQPHYGYFXE7KQwYtbMMhpUvhQeEt4oNn6qYk",
  "key7": "2qM3HmtV2Te5xv1GAetrXrjesDaSrs5jchwXTaaYhhkfVv2z3cQFdCRaj91ZmwcTGQarhG13MB7MNiQNznkfvHtg",
  "key8": "2b8heVwd4pnN2SBqm9ye1NFHkPhgNXwVZPJ5SgAAwVfTC5Fd1jHbgBMUUPHH1r53JfrNfzoWPV8SeRDY4V5BK38T",
  "key9": "55zdcEGNveF91rU4W6PbzB9HD4rJDRjsZGJi2m15c4t7hG7A59s9h1JUrhQ3VDCdvZLZN4dqQH9dTZKsrFyQX8nL",
  "key10": "4431m6zgYD3t8QGiyEkA2tWgZ7d1TKnFyQqLxhDAa6a58VHJ19vPjLr8g1AMt19vf9bxamqVwfWcw9s1UH8RjHGP",
  "key11": "2sLb7teDC8HQda15NAZhUXyxF5adaE3RrJsHEceLFuBcuqEppvmdC8jj1ZmC8HriDiDqqT9E2Ju74iK8AUHK6YMm",
  "key12": "3gE6FibUHSJp6TtHqg9vwMzt6eZeE8K7LJMuWZYxnWj2Ku9xgefJGvC2PJzPYM8tF3NCzoX2KGN94f879i1jPuf1",
  "key13": "eyQw84ee9WoYjKh1SjorXL4z3TBnkFzxEWQ6W155C2JrHv5Mdhjk6r1VSnRCgWA2FVKm2izHSQu877miyWFBGmd",
  "key14": "5AHarKaQxiFZmfqf7p1U1qobQSkDPntehiZXkuaXS6L21W3CRB4RJkv8n8JYeSdGYzhFN6s2UkvXUCZfzyxF8tgA",
  "key15": "5S5AGCYXFkN8WvvDN6aPqiyFQVWXNXF6B223z4jyzA2rdkE768h9a4PH5xWpHKkScdExP7BxmUWX42PYUx58r4rE",
  "key16": "YPHZmsibkroL6u22XLHdVuXJZEjA12XjJeoY3Dj83fy4praNXuRWM3BWqzP1Nzg95VWYngBgjLPQzYobYg5Vhtn",
  "key17": "xf9J3CHou15ZFXjhvrB7kQ2ukGAV6LsmrWfpTT6RuvNTBe41uMAYe19pykQhKdyUT9DqRrDwYvX33UW8gLLJ6j7",
  "key18": "4eDn7nqT1U8qBXPNATtpZXwqohSscRxaXgyRbFrBc6ArwuRdvjkvty8fo5Kvwg31pyxKwxJ8pCnBfrhq9FZPJzmz",
  "key19": "3kwkLz8GnzhhZqtQ5SgQCPt8C4iHcGAiaSiWXLraHTuPojJEGRr7sVZW1qsV6S3kVx47zjfVE5BM8XgxstmwhpfR",
  "key20": "3GPKoMHAYcYwRvb2EWQoYZLUmPFtQuFQZaiRLu6BVPAuvrLvQKXqvLCUxoQ2hCnzwMNpJivYheN1k77JNRvJdd8u",
  "key21": "55d7g4GgQ3CbRKUTbfTGWRj89gHuKXNym6946CvVvak2uzX7mLHmjNynhbx31zNLELmXnT8rEjFKrNGQ3VL5CSPb",
  "key22": "36cb2Mqtukgitc4J7Bak3ktXg7jM7g1kB48Kq5hRFyNviNihqPG74sQFeE5N66x8x3vURY4y8dYHuHrWRDZDeiww",
  "key23": "5sHRSt9nJtRRZrsDgUwECJoEsUUeppU3dZV8UWEtYh9EsMpVd577FehehQuXTuoa9UsfsLp8DUc2yprqzgZd7u6R",
  "key24": "xEhnBonNGPHmfELTcfeNG78EAi7FhVw2wtnnsmusyioqNNzdHK31AC6qPYrGnFhgGD6ianpUfUUfiYcPUvpw4Lm",
  "key25": "3cLPHZNwv7ZKXTMZC4bE4cbTYxgFkfgP56vLYjQWRPojzqWYWYJph8zYF4NFwFtceRbEmVofRPVaetHekr77ynR2",
  "key26": "5B9nuAppyqw891MX44D9ZrfVdmYMCayAFnJ6xWzzaspkGNjcs9AcSh5dTg1FCmgHYD3w2hKYhdrR2MS7PczkNh9e",
  "key27": "5wkZZkPh2yE9AXExYKusYFn7BA99eLmZoa2aT5SjTag1bNg8PH5LosDdj9bYQz5opt5JpuMJFx7SC63LE5EM2mva",
  "key28": "52KCmK9R7StSrAYeJWunsUU9HiK3RtiQSmfM6ehfZZbrxHZ1J1DADh2Na6v8nSkGcK16d7czadomnTGkG1opCRW",
  "key29": "MKMfmkmu1UcHN7JVziuChi79HgifrYkdxRrdgKCbTmekL6PD9n6cQgDeexNoFykdBvnJoMDcFQdChBRroXfwUv2",
  "key30": "3ukHvUnZSMA47yCUSBn1d1k6ojx6K18dfo9wBKmgnpRJLsUMBLTs4UCNzFbzVbKL4AgM7gtj4wpa4swbL9gJCmWs",
  "key31": "53hJXA75faVUxmm8zxMMmDjH9tyGamUe1c8UnvUpPv9xpFdn5sAT1xJTcp42ycRDmttvhmQyeyFLiF26zCTFeLXb",
  "key32": "5YM4n4gRR2SiKvNoH4rXGgaR6u7rWhs59zE2GNVJqS4LyGaCS4gAdhwsGp78UxSwHkx1MjN4raz4faGdYy7Mskh5",
  "key33": "JKEpFXhheLybGcfKjJ5VnnJxw5XLwbwcXTY5Jm5aj52CFCnCZZK6F6jmKgq8dcCRBejBtvFuvAPJJHSq7D8tBYU",
  "key34": "cMPdRNwXPoZyvKCiczJxzm5Fys1GdYDhxbNqteD1nPFGkp9LDs3fmBhvYvQkSbeDFk5DYXU92iZHdNk8nREypWH",
  "key35": "RjrBbK3a2TcBbKYpqwEFdPmR43BTWFjt8HhmatUcvaPwoUP3kFWYP7vjfrr46dZy7sXZDoJbDXU56VC8AQx3GdN"
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
