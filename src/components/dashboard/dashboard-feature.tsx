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
    "4kMYjKugE4F5MA3mvSAFML77kgebACHSzxeigpho9nzy44ajEgXdoDHDK671TdDMhvZrYJiM3ve7QAaru3zcKHfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mGXuu7Zd38Ldmq1ZPhZfjZ7h2MH4Ck26o3KKW9u5aX6BsBHo8ycGJkYU3Tr1LyXTPGZW2moi8Gj56zXGNd7Dhgg",
  "key1": "5ezgYpgufnW6ymcvtqQu4Rgn2FNGJZxFqMPWdgEeBGwnEqwnsgr9SKu9Lj82qMk7Emscyx2ACnmnKT3zqpPL5SRY",
  "key2": "31wT7ZEkzUNmrGWTk5WiTK7yqQMmRkMoy6XtGcWP6LfawLsFXc7uUcFWMoBiJDPtNGHtu724pDCtDX47fr5htiGn",
  "key3": "xHmSyMLWrhXhW5NtwZyxC4wunchMX5Stz8dC2wtaQcR9N3GEU19zpGDLwCNqgL3b8UhtMb1Sx5qQPG8uhvg2Hix",
  "key4": "3P4KuNGiEfR9F9JCbg5fQ8w71n8EjraneUReiMRvzeMyZTgse75EsB5QL8it4Z5uXJPsC3WHFLL8KBbkR34gmcvz",
  "key5": "3WfS6SCvncwgAqe897LA4qTZDVpoHpMApFmZs7e2g55q9iXWp22Wmwmx9bZeefj76BsdPQTTYU6S2vQS3ZSEftqr",
  "key6": "2NmX64uUbSxkFL4MXsymLsaGiSoX52nCPr4bv9uBDjFpiyphSxiTGtqsmRUEFA5RQ2XXTsmXpvg4eQMKAzYcdaiX",
  "key7": "5FuhkBzJxsifQqSzVTFhHZcadpkMUrLSypdo8T7Ui9w2qcUqpoM8GrVfnFSPEmX6M9RV2ihQMBnAcLuFZxTNYaUd",
  "key8": "LmTU1s8SjndFtHmZHtakMqTCkHb7jhYns3bwWK8yxKERHFP8PKfv9CdVDa2UaGcQymEyeAJRN43hkbZNTBmmp7j",
  "key9": "4yeQXdTvMN2WcFQtGyWC4qsFSTsoj13VzyDyRs7fMuT9KkJbWJuaVWHVTHTkWo44kxhhduXjALPWdXpKQEnidXTx",
  "key10": "41WBY74uxyYFGQVuFL5GnVnjvSLy3P736GhnA8kPhKwDzRsT4d5QDte6tVNLT759WuTEcgPk5xTXkvVo2skDGPWb",
  "key11": "66kiw8tbWqhkccYkmAVBYREkCqXzdwXurEPckyCkwQ6i7q5trLmjYxEFgEg9PFCyd5tjK8nJLbRWfSe9NfAwG7ev",
  "key12": "23AxaXmXBnC2sB6LDmnBPSzjycAFG9LVnSyyteQgXyU1d3VDA1kxNkwMZCS8dyUcdknXetKwwqnmkXgFsct2m3V6",
  "key13": "4JrxQZSoxwVGh9F3XemyhFpwcjbKLngKchWzBjDPanjP5DxGhJkSUjE6P97dTcS3b8kLsF9nTBvziYZ9BmvW3LbM",
  "key14": "5oGrXx9nf7mPmSX2HZAgTqgBZR1UeD15U9juURD9zWPFpq8FRriqyqGG5hkkWGH2rmeZjv9UPG6Lex1msRHgXMjp",
  "key15": "5NxyDPFnGWDVfLAHkTLiZEDgVEdT261vsk1DK9nLxWGXrN35C41Sj1BAHMXtBChTdKtY9SYqZQvzPGqJJcYrxpDf",
  "key16": "23m597LJZoYALxASeMX8jt93Kk3c7ZQWuqNRXaVzAGn4yf6gftMVmSfjgq1gi7jbtJ3TLX42Bd4GpBg2fCgv9enk",
  "key17": "3AwLQ6ec1bZLWbcJujAwWRiQwT54p2rYGRhmZJZipq7vFCvSFCj6BNkqeYKMyu1oqYk3NEFtUHMaA3gL8xcDCevw",
  "key18": "2tj6Ff5fe767hcdQwoA82wp3LfufVvd31xaNE7T7EsagFX8n435ndgtgn2ZkVrXCE1waZcuj9DxhvMBHeDi9b5qG",
  "key19": "2D7MQFr2wEf52bLSGS5haxg61bpDC35VajRQfJssQANkfZGoGT3H3695Y9j5PDtNti1CxF1WJFUFYtdoUrforrja",
  "key20": "m1JgY8M96dRbdGX2LvkreeEqttv6oEsjDndTdJKn1T7VM56Gnyvvb2TSDjYJqwD2ip6mGVntVfVEJT9iL7pnpjL",
  "key21": "4fUGRZdNkLU9NTx9QLQbDbYCWuL23wCWszkTf63vPdRncDB8QaTg2YKWh94bsDujFvZ6kj6GFacUVo23LeSqm7KY",
  "key22": "58MheUG6QdGWy3C68SL5fGyrPvsgso5dQ4sxDL9mo83oNLiuzCFdcFKeLdrHWtuMKGiJ4xhZNXGvvzyZoBoYCyfz",
  "key23": "3GhUDhyxSo74bz8oNL5cRNwvVkQUEnN499ehA6cs3knV1QZEjuoNwrBqx8bZk17UNrnASWYBArPY2WKuY42XtYdN",
  "key24": "66zwL9uqdrSTWFmKCWAYpY1HVYdYCJimdYxyqevYnzjjM4gSPeueZ7Qdzpueh9sFgkuQqcwPfHgwDVo6Wd2qxLZY",
  "key25": "2QT5ScxT2P7k1xLCrCMPJR7er9cixUr8PGoPSFkTHU9fwLAEcChVi22wMGuDvY7fR1hSHg5nNvf7vSbANmneCfHt",
  "key26": "5WZbee32Pjo2yyR1kUHk5GG82sfvuznRvmyjWQjx1htiZMHwwfpNLuTvJXirGinuHfF5obA9vT4kHnmFAgh1G6DR",
  "key27": "5xdzF9dqUC4czafeHxqzvfuyQDkuGvYtsLwqNVgX15fhK8qK7FYKfovDLBDRFJQZHvVa9X14kV7QR8xFwjARXuYm",
  "key28": "3TMrN6aAw5mdyzTrvmUmxVUTeKumuVuLLYRq1NBQTXYQ7fHi6wCRbCsFSCoeKNFDQuzBtGsPGFPjgrFGMp5QezP9",
  "key29": "8XqBB4VCL25rFjwSF2Z73DcwC9Td37xVMspEsbMdbCRF2yBgU4MsL9YRRd9XmVdd2UeRrRcWqiFAYxwxyr9P3EV",
  "key30": "5SF78C1de4uFw1PtBA5zdd8jp4F2FMKacqfH6aAfXFz6gJcCVYXkS47fnd5F8C2DXNJtzkq7bqf9S7yYrM6VzkyL",
  "key31": "Cjid3SqmEA1ksY28nXiy8EBJ3RLYDMckL6VHAqoTbeRiU9vM8Mso2JYWwNgihmuYyM2Nm5LA8C6TmWhVU8uLjAo",
  "key32": "5aTg7hwx1jfxJpKHiQWjFCCQ1nny5gv131TrWQN2B6p5pp4kUnP3cnUsDh2hoUUhTFkD12y8vqgm6i1GT4cEzpuB",
  "key33": "SDPTVgJYQCiKQMFTWTV1fvChSgHZN9U1jemekJbDwmXrvDAAyskvqyGYTEHDVQuN6LwufuGK4L5pqS2wSAEN1Vy",
  "key34": "Xkc5d7TtNSNKKZ72RCfoFezs3gdZ8iH8Vh51H8f7Q7YHUj1yUQH9rHG5rZ3KvpkWGyMQfkTLwEs2YmvS56uP1o8",
  "key35": "62DUqLRuwvKrW8aa7gLVyuJNULLHXJwxVbPY9tfVHaKXgPta7njGfK3wMbPdP7S34zsiiHRUjMUWnq7egyZjmDaC",
  "key36": "5kseG1xN9C9bcfN87C3YTcNNrKj824PTpYD95NmBuaJBErgg5LM91qS7XV6AvZASna4KT5XT9ekzTnJ9FqEqA8oL",
  "key37": "65VjfEQYbqrzeDmcrKsLeEeTRrEEm5yybiUeZft1cT5ZGTQwzNw7gc7h6hsan13q9hKDHBg5W1nKCNXDQF7pxpqx",
  "key38": "2uDMx9iT2UqUnszt6LwCfPrQBzC5VZbdA5zLD5weYoS58om3x4xRFqWfBmz3uFugQkgGpRLKaDdGLE8w1XMq7LPo",
  "key39": "5kdESrXFgCzsb1ujGeiBZ4tVgWoeAFPoQuUUizZxYuF1W8e5cJZZq9v9bRCCS42y64GSTcEcUSW5mHZuVKvWhvS3",
  "key40": "3uqU7L9rxfXkA2LgNunqq9XGN2z21aBuHMcTstskXFsnteREKhBvuj72aHCVjUocvtjQCQA5WT8nvNLcP5RsSQtb",
  "key41": "5P9nSA8wQLLV98ubayJXrBprQBioEjXjb37GKkPmTDxtCdv9tWhRxSyU8fdUnCgDCgCDvUikEFLtEeqwvLnk8uRE",
  "key42": "47uc3X3T3NtP9vUz9e8Z6STZfQBwRz2yBhqgHx9zkhwKLBCsc2TcVwxmSoSMFx7kMA6mdUJk7jLLX3LqF1dYtye2"
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
