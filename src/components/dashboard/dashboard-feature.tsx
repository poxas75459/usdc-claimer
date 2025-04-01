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
    "5pB16BPmJ8wDT6giMVTBj1oEeiaLuv4nzBvNzuBmQk2QMcVLuGKSnMEoq9MhppPg1GUqBVQtJZuG7ScHnDhDChUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b9V3CHTGjafKSvCup7YAnEXsCvxT2WhPJ2Wj7R1vHaYyBQB2krUoh1K96aLCWfEBzv4bPpFWfWWtZk9B3YpSqit",
  "key1": "3cx9xjDAquwxo2LHYLfgd7eorYnr4Sd8P27AKChkRha8NthdJHbetdbjN3YYnVv2AzUScm43b7cahusB1iSmxKvw",
  "key2": "3XtGwT7ZkYuiCsbBi68vAqpbMDhvqQ64jFXRKEziZRdNsCi2BbErkeHeyAWrHom2WvxcvKsiXmGFz8aAyvgeEksX",
  "key3": "3h1btH2WwpG9vqJ1y1zWJCqEzqewDYHWoXKidGtrbHwvpgVdXbdCQ88jbAw76egPUz7rjQ3jKqvgQBq8AQY7f9dR",
  "key4": "4SpoTfNPbk2xH6aAHGFqki6QBHsLrHULhgiMRy5oYCkqkmjnQWkrj11TNbzKtWMctm4aZMfHSdLQJ69oBPZqnxGT",
  "key5": "2GaGhE6xa9evhVGUZ4DqnTxzdRSWvsR3VvJpzfixvjH1q2KbxjTXj5cFYewzbf7VAGLyQEsXKSSqy1wv1rssHHGq",
  "key6": "3gAb8snjQmGmiSaHY26sXtSA1amLw5T6r9rytPAuSEXuaGqDFzdt5CpvkdXbLWsvDijkddUMZMFbWTRy2i3VygVi",
  "key7": "XabWNHXR1J8nG3DD3g6yviiFRgcMDkFXdthVTbTYbaTQYH1otdC4auxrToN2MW14S3AiCxU6SXJpuTqdMCR5XTo",
  "key8": "58gNiejSbzBaNgaY7cJdyw7U4xRwSw9KaYbmD5SHt4BVX7AAd88HCPUGUcN7PZty2jRQQp7N1x9MFW5iJZaeh21b",
  "key9": "SnXVgc2bg8g6rke5zyKci5ccPnegZxkKi53eQdzxzqi7hPSoUKC4FTHgTTzh6aPth7G2S6ufz9mToFTsqJfGbfG",
  "key10": "R9h2eTJVZcJfXjRJy1yLvCEmoSmwUn4B8kR7qwP6F8SB3vrPj3CStTLmTz1v8biESmQVXfhPVLym6vLe2iL8B7C",
  "key11": "2RA4T4FbNgCcutdehqpDQ3pYjab2KkexwXkshacHu1Edwkx4iR44CKCtDBfFNj5hnUEoXnTjfFW3PhJBgJRZ719R",
  "key12": "5jyAVjPxo5BPa1EAuXJWDMr1BSg3dskyAFRnFGa8XWkGpsA3ZZmNnDYYSq8HbrRVacJVKHPihmFVu5FnKECiRxkr",
  "key13": "5By4nWki5DVb5v3TeRhxV4ANwaycdKuCszckv5KHH6R5Lu9hSvHKzs437inVsPNNj6BgD9is1TuNMkWNMAXrWZTc",
  "key14": "3gP9CWLqAjKv8MgncofUiJhQ4iahTygd8SBMKzgS1LF94FYRRD65Dwrs2AaXsiG8gU2jij8uKxMEW43V5LAy8X2Z",
  "key15": "586HfVXZT4NJXDfwnZjHmS9JEQyMMtAMz4qi5qAf5TNKsvDWqkmjPcLio2iXJtDybbxr4TuD8pFmvHGXa6cBDfSH",
  "key16": "4rASepNuYaR4cwKZTMmUnDod3WTdDfVXqYcBQd6xKZJG66X9mTzyxjrhhGKcAhcndhhWaEAewFUUtryeiw4VsrcR",
  "key17": "wcTzstQgFgd72FJaCQZfiZ4M8auUQJ2WQdk3xAe8drTePn5WFYZmxW48PB8QXvFh1WRXJjU5MwVz1q6VXW39Xea",
  "key18": "5P7W5TjXzc9gDk6p5Q45bPBnKKS87KfWP2fojM6cpSsz4wGFejoGyqK6MZv1Sfe7iDzkuHhTeL1EQ9geCiCoYVnq",
  "key19": "4i5CWWevpxzbh8Qoeh2FKB4SgHs36vGotDLRCL12eTKvK56hSrDqv2SACDHCbcBqgFhouhtZq3snGa31zq8gk8m1",
  "key20": "27cBCFYzbZAESx3gfTEhUMVHtFzwvbM35vxY4GNVBCkturL2wqvGNXKkGWupGsKL26amu66u1ARdD8KmCLtagLvm",
  "key21": "5jDSqucXvMRJwqGaGYkGLoV4w3DbnSA8rjiQqSSZeS8Q1ujeYuyW16MEvoMQsntKNoAj6tzt6goL3jbkFWkE493Q",
  "key22": "5Uds1w4ar2kMLbzbvinJeoXuYWTaXMxE4CTYrNipkFzYz6J6uJgZXfP8nJNM4D9PFiDfmSxj2FdEFqxtqfUHeNVn",
  "key23": "5zNxGu9vEZmTQ2B7pXzMrg39oyvP8LMp1xF8qgzPXVejgaErByN7PUViGU9MgJCyDMerNp3XS11udJWUcdHSaQuK",
  "key24": "3QWReux7Z6Waebhi5PeBR6iY9nWDVfFNAKKuhXXYhs7FVFunnFscW7yC5Tn3bdcoKqcB5i2hL1n6tgDw9vkkFCGC",
  "key25": "24UPtQcvh7msndHU9xurpXFVfUhvwC5qHp9rDRdzKAm1yXEUZB5NLJ8HaeESB4tTS2oDXBWDq3jHspfHcegEn2Qy",
  "key26": "yCJmoF5VVNNFDh2fM59t5EoCkTPpoj8JotqgZVDii6LEhkjRQn45iFKZYNuKggU96BMvbdNPmgMLJi23cegcg4A",
  "key27": "4VkpNKzsbBtYzu9gjKR8ESDQcPq1CjarwX8Xju2XPSViE3hj1w4UVfwyB58zY24GJUmVhkdNUaYZiyPAzHaRBfvL",
  "key28": "4d6AbBRVU8hwzEYuapsamryLxRjurNuKmpcEDsRrndzdnzu6zqTvAcDzcMGbR59tkbMgKyg4AamQigtfRiMQhvKu",
  "key29": "42XyqweJZmybwYGGuCwux8FATGFUyxs1dVev9qXSaX8eNN6hccSb3jo56C5XSdyNJe8V72hpi81763Ut5kBmFtMs",
  "key30": "645Vs1YzB9rcYiekKP5kYEQZtp6fegZpeX8ztdSuXqfJsj9QuvyU7KfbyLqLc32qUD7hRGCpmkdhvSP7McDjxPvq",
  "key31": "2TC16fH73W4cCwYAnrjsdsLVwyKeKPzsRwsRmXJsqFUnAAMxovU86bvbj4HdKPXPeMWiyfCmnRnQXeQnC8141EAo",
  "key32": "4sVA1vTY9cBrfnJFGeXrvUCMHMbij5wGn1HZxefJccBBZzRFA8PnQULqQermxdvUad3axMouJRhZ2xFYYAcVzp82",
  "key33": "twRqbUS3btvuHsG8aSSbRD2zZK1JMPboWn4jV78hLUEQHBULHwGAKa8D4w4AxaDdfGGKBtPkMvtyVWx77MpSJ59",
  "key34": "29fe1Z7VdDsoszvKw2V2HAbm3qdAk51vo7x4yvfg7sHB7mrzMzvAxH2s3ULDbUb3jhTpgAQx1DJcs8HdzqQtbwpS",
  "key35": "2eohBqAWnCZccvK4o7tTcHvFnsMafjkvfZcTgWJRsbUXdBGQwyy3x2Qt7AZHLAv7pwEAQhmJV2smrTHCgquAFuiL",
  "key36": "3ZHbauM4at5er4gerZsQDr7x12DvTyQYaMzrTkdAeMLB6HUUnqQ2eHnGzMunQDQZ5aiceoou2BzYn5VMWFZEA3QZ",
  "key37": "3zXcmvaCoRifwe1wR18s3AwTncb7NxzkeQJDqx6Kaghd2oi6pFgfAScG4cDp7NVZJnqz9ScUHcF9VJQocjTXGNhP",
  "key38": "2T8JQ1kZ9KB1uJzyV8QPLQsyE7fw7LnR1P3FLfczJsXqSjbMuEbVnwDGR7f8WeiRHGkymVxbCcHp3aiS9n8Hv5NB",
  "key39": "4v8Rz9oespxXYaBjcGnbJUR1TQ2d5QHnvkrQXdVTEx1ufihmE2QQdWpk9pPYW3tQYWzriCzaULcLkRu8AVT8NVPU",
  "key40": "JL5N9R5kyhzJZ6otiiFRE4DzroD5pQCB7iUViACKv7EwqTP93fPJjRHcjrRrshbJhLaBUorTpJaYmFnoxnn8vek",
  "key41": "3RHdFQyeBbxPyCvtCVsJg2oQXft2KAsSM5a2t9dt3j1eVKDWTFMFPNvNkFX32SuaPitEsFTNCQxHzXpaqDD1zor9",
  "key42": "4oLJStgT8aTVEvnaNquQNeYYiEs3axLxAivs1mncDQ4k3YigWRPJgC2n2Rz6A8iEMFj5bCnB9B4zYvhNbyuTNcCb",
  "key43": "2QvrjZ3cnrgRi38ovddv1BuLEXwmpJAi9xre3jRtwzpoXMC7EwTo6rpeh3n4qa74ukiaD1uLcS4iDBu1nHw7CcSY",
  "key44": "PutvadRAmaV2AH8w9dQbqK8vBZUZkK9P9pKXkGvH8R8r5vx6LmbbS1Dsiujm7w427pdm2QMd9WNK2NcC1Hi8PCH",
  "key45": "2JUjoFFFJYgUeFmWeUULTYi2JB6xk4rSEvQEa4DRF5C5viJ4WqrzTQHFCVqrwZ5Bo66o4euWTsX6FLy5uvjeJoqx",
  "key46": "24G9sTw4XA6F7HYkdEupJGRStAmppeJczxqWs31EP7P5XJgbe78xLfyrMdj8rTxyDemyQkaMeQ8UJ7qprjcuK3Ki",
  "key47": "24N3qVGAJX1uFgXjHBpjxdRMSA2sGPPMdi2dw3zkSEXqxL263dEDT5Nr3fKXNMvoWTp6KQPHS8eVnR5fZum9FynJ",
  "key48": "xYKwVNRtZkRjGMDfXfrbgGcdqwqpMrModjMSsc8DdiZGRjbj9QGcBUYod3oMBFSfppLXPDGScqTXWyWRxBnvtQp"
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
