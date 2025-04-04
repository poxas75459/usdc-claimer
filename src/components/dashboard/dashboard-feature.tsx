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
    "3S2Ev8oZvna3U6V4ux4vXKddi83JoXvHFFhX76dCokkpw2zUJeS1cHekSgEsyNDGAq9TK3GRiGxUKEGwcpgXonmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oZtfrgHbiiMz5iQMXBEgYzPDqUeQqABts2eV6YFLWz3RN42h82p7G6CeaK52G1i5Q19gB7ezat2DTehoT9VViZz",
  "key1": "5aUyxcVbkcHEZaGxMA2SwKv5KH1uYpMKVsVG2PKtv49LC1k2SAuMzCb4aNfY5q3LPzGJZiWZqmVRN25qT8QceDjX",
  "key2": "mU1fMih5PPBfhgcH5ezs428NZfbT6DDGAhVxjzb32gPTib43Kw1YK7Njxn9igDaUqonHRkLmTLDB84DJu75o6EC",
  "key3": "2PXcKLGDFq7H2Kdz5n6R32FE7ZBcqAZ5JKmXuyeaMoQJCjFBk7P9Yevndk6ckSx7MBBTkvgU9GbybUTGqV2YLbQ3",
  "key4": "ArAx1crf8AaBq1aHWiRFtoqD6gQLQVKcDo4EmAYmvyYkKYiLJ8v6VG7bFUUuprj2FFuoJfxN8hzHoMiGFsY2Jsq",
  "key5": "4ehZdTA454gF6AYpz62iWZG2dTGtKdhX9rTqcg9QtqrnbuPACQUWa9ur9ep8dbMf44nZ7bXy75msai8j16moS7rv",
  "key6": "7CAfLH94U1LLr4Jo4KjEdUKXXf3BJXmoMQLXcsezbvGNbrwjAFQfcKanJfWuzgJ7Yo6VRozNekJn8CJzMdwAWfW",
  "key7": "toiCs9DkY4Ed1ixeReaSVB2Hdmiip9KMgpHqyQRvfFXQYABQni5y9kR4bvYLgJQ7MXhYpqgNE9r1UFKcbsjSf3H",
  "key8": "2ZhGnngvADFukkekHzaimF5WXJEyztHZ2YdZbPRPpdLa5BCVtCZ7A8yHLUi1sheX2ejjqfaa5Z85TVzHmTQA1n64",
  "key9": "52WK8kwhowM9ktrGmTNetfETntizcgJWVvdyxGaQH8TX3mwp97CTMUQCGuwG71fgC6MMLidYnsuhHXR9AaD5JcM5",
  "key10": "25am98a7gUPYj4a9uCpTa9KupmkqhBZ9PQbaB74Kch6jJi3qsLgM4CXA2kToLnyQUtvJqNQPhJNTCD4zSqYB5iGU",
  "key11": "XgSavtw9f1USPmmZVQmmScn3GgjgBNqVZLBhSdVcQFsoUfJSTFUcnCdkDWxadV6CEQNAm4ZPNojNKpRSyyper7g",
  "key12": "3rRoq5ZQWfJjVD22irgZPbtiFmtWgyHWyojzquQReeiGSnUGo78F31cv5EjTFHJGs4LnKPXhi856inByAkF5EcpG",
  "key13": "4nhd12DuAdcAe1rRM224tPwumAwiL7CwSZr7gDUrwqiMuZA43PuDHE25nkpjqYpNi6uihHiu51g7oHxykbKkVCt4",
  "key14": "3DEWjE3DsHJu1jq9y6bEufwhjcqanZeYEEccr9ot78Vz4ynMwr47hAqfzc9WC8fUXHvhcXM1kBydGA8JWx2TCsMr",
  "key15": "HTFFP7gKiFsLv69qmUcNvbRTFTXKNnLjTjPtUXhL9ArjAaximvg2rr8ZgrsdiraJUNWWmp1nbjSGqpoTLT4BjmV",
  "key16": "45fdmYc5xFTJ6xCDEViJyFWPcn3TS7k6mr1jSURLYXhZZKPXxR6J6S9rvTtbNcy2QB2FWcUaqcb4SGyuvqEH8gcS",
  "key17": "suSggJmA56oHEAnTjMmNgUXkCjdhQvPJv5qn564sYDsnKbCjuzw9vjxktR11jUrEnM2pP6wmWPyMn5jUQGqG7dA",
  "key18": "45q8XU7xePuWNyQ3bLP6Mxk48JM18gzTV4yy3CpeErnphpbCbCWkfwDzm7zKqeC9esUmdPy99vTBgWjDZ3UcEsbf",
  "key19": "4yofaKX9rGXTb4QQhTXb637Kxx2UGGxffNiQkEksP1vLzAzbjAHFqZe9B7uHwY2GbYUGVLA75rovgxNSMtGoqdGX",
  "key20": "5goA2PyX6vtfFUZTJDc9TB6ioiEjKZzEtFjKdtq9tSeVLYgpRPBD665UCCsSsw7yHbL7uXiDqJ6s2M9QY79CF4wB",
  "key21": "wdVi2kGCWJmyzUtTHcLwDb4gpkz2QegcqrPCTnUQwBtP9wMSPCtzymZxNqS7DCjnS6wjKdhMHBxow2QMjtmQX4F",
  "key22": "WsN42FjPsWzpKzKqU5HM5q3ww2As4dMtkd944SdaKwWEL68tTSS9wMnmwjf9YiqVhBiz6jWXhsg5vjzYSevfJ7m",
  "key23": "36oAt2RMzAdSnj9EcKUBaDzu5mAFXJPcraAXVMgPgFeWcrWJqxxr6gk4KKpUX6b6YTJwJgMYPWAi4fM34QUQ1juu",
  "key24": "3KrRipoTWMi9Tv3v2y5ABxjvQXBbMJSBnTDzHSzvDNKLkUkXLBUCEB7TJg2obzptHkQ25N4f8r5B4Uo5AqpyhECV",
  "key25": "4UhpocazB1MWXpQyBnzWLCvdJH36HKoM4WmCHvEs2jeNS9REvihC7Ng4WLct22KhDBsV5QV5b9waHvo7qUDC77RK",
  "key26": "3sozL4JKNno6BoNktGzMFGJVQNnetd3TMvjB5kvHzqQPTh6D6J5HyTWQQvySXyRikK6B79KQX8FyDXtjnRhJ7xkt",
  "key27": "dL7DqqDiySNLgTv8FcXDJ2nEyHTQ2oGG8EQbnMRY7pTTQtRBRJc2P4PGhcKFr1ybLT2Z2NYKpP7DPUiRbpLyRRV",
  "key28": "3Z8tGLuRppNBLL28CSKpyP6kNkswjqgrFW471zqXG2ghgpTnPpKpat4mkpWrNEeVYpyRnnsVoj4kVyfC5LAKgCKB",
  "key29": "3y1SNVy6XHF9mMbkjx7HMeCQd8zKTRMFq9cL1snykqfVEZbWKP34zrgtLReHnqeBLdBCGyyfxjmRomRyEsVRQUXr",
  "key30": "3eLUKRPkqZYLNfBdZn7pz6ktWPPsG7gwzc4f1s8KHYneGTF422nHrqpHAtWD8WS6jgFG18XiDmmTa3kQ9vKzZ3iL",
  "key31": "sWBTzkGcAS7TgjJvUTZGTzgi41iYsLfxqZWRsEexzVkqPRw9hQ8ohv3RnCsK7GBdUifTgZuypXgge9wg87aaksd",
  "key32": "4JfbuUJDZXr1SMsQmDsy6wkeqo1tzbFntxCJ8vsESwkKN6K7t2CTdWWTQroHLVVEi484mmRYAaSi1pXQzSe4cLWi",
  "key33": "5xNTXsvUEpRjATXEQV2pjyEwPov2sULS64ArkMAUKqZMocjmg7zWscYubDE3suM3kYyjxwHJZhzfPC5auxfmCKLW",
  "key34": "56dZhSGS2QfyrwxiW2E6YiaMtDCMvuNKT8KdDCAJ6XBZV6woSuXoBz3CzYZ9kRVjCJsVQ6Z7QWNXKMyNejrEYL8V",
  "key35": "4zWZAAy5zHbUK1SZMKbTJvPcuw1VAa8mE1K474b2MDUD9Rh8cDwMrgAeVv4uN4nBywTE25rk8E7HWWCKB5aU5y6s",
  "key36": "A1WGFKcfebhXWZDsrnV1cyZNgYv2x7qEfLtt1DyLm7KYMWqv3iB4byfUDoPR4y3ByaoWjK5ns1tNGFKhchBXm8G",
  "key37": "355nRC8edhqokfBmyvE4sT7FNNQsYZRGB59GgGQS1Ue7muUVjPBv6BF2ZsjN1i77UuDbuW5ZGRDmYhWi7nVyEhzs",
  "key38": "2hVvjdKkjhYKsHVLYChwosQqsZmysGbQjBPXuj6qt9gzDo2ijCXSWkwJ1q6oHzaEEjFAExFs6me6mH6hCcu46dyy",
  "key39": "4pzCEaNtaSFWDov5JC6xdM9c7AZUzNZaKLyVqB2vxFgZ9Kmj9Dz4RwXgPTD68foTKckNbWweVLqURJaurJ5Zfpn",
  "key40": "98jsTJqiTtQcRLaEGgAUM53ipokAtzB9uEyiSfmaAxb1d2ogoK87B1JeQBEKGuUQKauTJ3gogtcaCwWkohnwmWN",
  "key41": "TujwcQam4N1suFxdXiZbXGv5FduxUeVSqvw2j6HWNrNXxBK7i61tR89v5yTUuCa4FJevyE9b6w4VjLy4CyHSnRJ",
  "key42": "56sMWvPeWfTeR4GhT2mn4KR2NUjEJLREEJr3FfMJUsvFKXHwtj37i1isLxdNekrzyrDRuAgTFUyKN38SzJNWZEbw",
  "key43": "2vqhEZ37uC9soKqLGugjEYFuLhznWn5KpRHckfzksGh9EDHp2rm7J8gU5ueghJAHf4fkRgatvM9bhTemo8KJu2DP",
  "key44": "ePiR7R3cJmn9uWn1etExT4fVQcnKjXqpgPb6ohezSquSGgidxqscgCtFRrcU7L8iDsxBzUPuHLzxRF5g9scRJmV",
  "key45": "5uoLMmuRgCauKbszL7wB6kPn8XA7GvQQy8qMGrB897AX6SUGhWCdubQ1itoopEsRTQmtQKQQzg66q8kfZsTGns1A",
  "key46": "k4kWaaBskMzENjuxyUpf8tLEnn2zbAS8kQ6P2kEwbyHS7wGpMq3dMfhp3ibP7jyvK2Npgyd3hr7pK88qqWLWH1q",
  "key47": "5xd9x4YXL1CV6ean63Ht6ZSUN9dDrdQUW9VbaiJZGh2BmrcEJZfQhxdjN3jW4o2FWNbYt4FTAwNMLtVz1hzQqar5",
  "key48": "LrCf7ZggRxmVHFwSFnuwG4VyLAwsvywDdMJXeXzb9nzLVnVxyKouGcCCcYzkCG27SAiTHbJLDzzK2dzUZhd7KuV",
  "key49": "4hrZ7x4zSBSQNdrE8wqhYo7dye4jpaJn2iqmgAUQQ8VbtRJyQTkXTeJT1J8E6oXivZ4zb5up6hrHke9CCipEsDdc"
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
