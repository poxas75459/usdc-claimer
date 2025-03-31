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
    "5TiS4JVY4MRHqur8r3jhe2HUXQ4i8L73GxBFXQab6ALb3WKV7JiuS95BhrdL61Eh9vmXwnvSHuJAB88WF4uGgAt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53dW8MxJSb4cECnr1WHtYm5U8yoQFV7bWGvqs8iWYs6msDEeEsLumdd87KnJFsnHd3gyuhFQu5dQksUfjBcvUJHE",
  "key1": "2aVTt4LHu5U4jeamn7AbMNFufvqtsJGUsk8oqcoRPa5o2ado8K3P1m8P8NPJebtcBGMKhiFpdKXSP6RwzxwkqAs9",
  "key2": "2JEF22xtpjRm1zJz9DJKCQ1HfXdAZwSTRPi4t1jPJV1ye98AwEXQ9QhGJMZeSi4AJLNbjJTrkL97qLkqAzRxXEae",
  "key3": "4PdXSG4dneyNd3RVZpGUcmqqemQ1XqNhwTxjAuJ7q8ngGVFMcrrK9FvMQ3BKpEWpJbiDXwxTv3Wtr236N8mjgQiM",
  "key4": "4WpX8Ndbbi6rtxX8XQbNJypboFURDWRhtWAi8S3nhk6E9nSUwpX7u3WxnudeVQXxHw9S4m4fZxCEPTQ5nRymw6EP",
  "key5": "Kc6av18Z69URGyMcov15dzr1jJJxLvgRtjKyc6Ajv3Y81ZbvdkqZQzvb4PMCQLhHnMAmrKAjALDfGXvCr4Qc7kq",
  "key6": "2UQA9DjnUNT5tv7gTMzgczyGnuFakYY3wrLQ6sUsFtqqY3migcXvLKKGNwGjGyjeoF9PVhKSSBc15zdyHX1EB7BH",
  "key7": "2nFuT4jrkdUunNwYKk5RaW13pUr6239HG8ni2Rmn4uv3dhUk5QeZJDEhYDKnWyuSgnKg283hi5nvqfcGRBMeYp4c",
  "key8": "5T8kADoV4j5u7w917Mt73NSmU3nFNXZ86MGuLDMY4zcAQkvziDGjSB3QuXgjAKrLGVxuAGehaAiwmyW8oQgJiTBZ",
  "key9": "3z8PzxgfMirJ6bmwSZAijQmRMvUhcjpRufjr4TNwNgsHacD1vwcWDEaXyAHT28KcYtDVmxPhDwoEMfaPjs5FexT6",
  "key10": "2dH4tY3TTt8WyCkPJRPVgrppCjwApQGrn44dNam2JLxjQJqRoE9wZyuqXYweuvoGFbJkuPKRTmoYSsJXkSaM9P8z",
  "key11": "4GqZutYvwyao5bEh78xe1y91JaF7vUBGjur5XkTFWWeH2pZ8GCKhebfSSYuv9ekQdhDBrJgzabKTdfaTTw487d8D",
  "key12": "29LjPqWRKo4ncTqaku8e4nkbBNijePZcHm5ih5KmUyYuX9JVfBTf6fPrtDXH2qB4bmbeDuzHpbZcyKFbRNxw5WFN",
  "key13": "4MhmUfiqc51a3CGxb9iyDRp2gJw8bX8nDXgCUdL7AxhrVVgzJchJmPUFWXyLHRLu3cqa515BDn9xaFbxyyC2yXyG",
  "key14": "3MiMh7c7mFgipH3R56RAgkvXSFHA8QsbDpfScfGw4xaqVGn1wpimDLz7nhnfG8yw41UquXCVkeVDX6hrBnUGup6B",
  "key15": "2Y4jMaBfTHN5CaHgrcToFkL8CohUMTMzM8d9dkvmwnFCaFH32tgUwpSt1FJXA6rfeVdaP2gvSUHpFtSEj9qZDuK1",
  "key16": "247CeKfRFQaNcqKe1ropbDbNNZtEsG11ZRYfbXK9pQRhxEBisX1nAF5Z5SJL8RpapxsWvkbuCQTodHTVzS9DVd3i",
  "key17": "4RZEhgYhivwGgptxtNeRfgHH87myzcdZ7y79RBoUVvnGi6dModsdK1g6gbiYxFT2NG4h3ZPCSZMTzToTzpBXyvt4",
  "key18": "3paEcJPsJkGcFP9xzKYtKBCcWZvxjYGJwWMGfJZF5rB9b1WPmnZ7mFKnBNJcE9DfVjiDsofSAoVfLc2JB5g3n1vo",
  "key19": "3J5nsDmqJfw2Mq36AinDbnNcnZUf82noBsx3Umwpra1pQKx9pjaPE6jSd7YhTXDnKp49gYPpw3CaUmjtLGV8y2Q7",
  "key20": "2uSoawHtnEAyFrsV2JxdiW3CkygdksT378L7JLTcVtiyrpTUbCEMU9eUg3YuEgeAZR7WqyuiqdvB39ShbajygPLg",
  "key21": "5EKU8x4vVhoQ4sjC5s3Pv71tpEzd6QU7yRvWasXRDwhbkeLLJqqQr6qhh6UZwqKa3nbb3pEax7iz57CYSyvrZ3o1",
  "key22": "3JfWimoQWZhYKj5gVp6gxHFpuPDbaojVfPG7KxM3mvd3foQ8xFnvCU6Ac68CRgABBH3kHWu7tY4HNidYRT96h9yg",
  "key23": "5xHPEs7u3d9EAn7q8cCDCYtK47bfc1QFbWHVqNfWzJEYTH5tSx9bX1PQG3ShovSWmrJFLxgMF5jsMEJzybi8z8Jg",
  "key24": "2yhYc3P5Dgjahh2ohSwYFZ6inqLzzhgecEJXECvPk8iSmzdxuTNvovANVoBUKrdhf6EyTCZFZQ4Np4jmFKnxsAon",
  "key25": "55k2i1v6NEbuNZKRmpy1Ln9gvA6xHkbXi2yicc5CBJ9ERoJmJZMUwxuob1WS91u7EvVJdZMd7JT9ps6F6xgNiq6L",
  "key26": "4uRmtLWKL2m62oojpDimPdGks6mfzjN3uWdb61haG83azKiRMx3vV4yqQzEz1ZrFnuCeRxjJBfzhsJpyQdtTUy3T",
  "key27": "FtYAovhubf618Kb2MDU2mukaGZotMjt1S6YA6KBq51PhxUfhkV6bpWgSzXPoRZQcuVFHkbGbfMYysnLJgrcdrYY",
  "key28": "2p14ZLKvQgZDZaQsStfVDjJCGaon7M3vdhhHYmHS3PcCmYJyBUMmfVJnv3WT5ZfYHASJXkT7dUpMUqfcx7QQmkLE",
  "key29": "4zsYMeiyRRG5nDo1ezrawkb7bFY1svRZxeBx4AfgXE8bKN1HFqsTXBwuttT7JZqMUeB7VQPhSeS65Y1z1jgZS54N",
  "key30": "5RUMVTicX324XcoomXfpePkt64YXwhdPVn6CA87nZaTeP3HGgLjqeGZrp9EuD4Q1kKJgrk3k442X1E1qjUJK6Fgw",
  "key31": "4vgVYhemA3eDKM9KfovuVAAq2avKdunvwJcdWkjaAa5h3CYtisy96v6iVcvLiacwD7mjP8PFThFdDRD2fLcTGd9g",
  "key32": "5QnVKNvxeA6BozQ4XA4wY4N1bsUk386YKqK8ZY64MTMPmxxT98Hhdr1A7SCzTXNXeY9WccbgLUKav9m3TspVCZka",
  "key33": "59bm6CejNQRxqVFvfaBYkhyg8gDU4bbxtk2MKu8AjtjpSANZu3h8HucZXgoZdxrVtU18vniscCuLrt6UYC7ErGQD",
  "key34": "24RYQ4ir81Dc5FXtb3vKRdXRuoJue4QBkt3E84mjDBqKn6Y3JhTtczj9rs7pkaEwMUHEaNhEDKDgYcobVKmnkQ15"
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
