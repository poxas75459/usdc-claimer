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
    "5H7RB5nYZk1ZWt9oCgchpmzw1NtjfYVFm9swtJr9Uqttov2sTHv8tuLWKuHwQyVkHFahoiEGoTTkVXAjsrW5kJiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7DqLLipV4bURKf333pdyP5fhPxegDCvZEVLezdyGKF8ayH74RQxCLrCuzseTZBbugdiJ1oAdZbAZHMvuABdmJq2",
  "key1": "KhjLXyRfQCuKoVCiPwLGcwWmkBxsAKajjytG6zCn3ehGYZzngtFZ64zdEbQw5hAsGagofuanD3vv51sWykWz2rp",
  "key2": "34rvwQ2wQAzRp6f3z5a8QixhwBab9NDGpebuMDxc3Yj2VP8HJeUpqpWBHvSrixH6kAKiyVKWWDqzYLVSgRVPG7Ar",
  "key3": "51wvbD4hohcVzw45C9zT4yqLL3PjzXx5C1gAmeSbtAf1oBzV5oQMTGEWyevBpRSrRGShNPYqWvc5saCYbJhz9V7W",
  "key4": "4pZA9WhdVKQTAWq4Vs5WzV465DaqSFZXBCFdSfi5y1zSpnRKzp1LqeD7wrTkchETxVmmAzixsD13wrRdfCXNAeRc",
  "key5": "EqNd4FdQwFxi7R9ddDTnY88RjHNw6P5VfmHHnAhWRcU6UsdABR1QHDFjmnFjg4nWdmptA2nXgRDv49L9ZubBga5",
  "key6": "2SS2dTH6sWdLZBdg5xrwBjTcf8AX8m8MhP5Uw8GqsrXzKaJucAFXhuDmzhqrFXStbLhyshy3KexWtAXm7vXMHhe5",
  "key7": "5ypMsgMMqWJKW7aKKhyMZtbYSsEumeNba4jhdqLteh5eyYXrkz256m3TPLq5DQYHXyhccjwQmTwokFrWEqWWnx69",
  "key8": "4efifbiNpSf1CEwbgeBfuVzEDGyPwMw8RKcFVbCWRyW2eRQwFtM5nXPPvPr6fKbe3PJS6opo6zaK7PxD8CBXT7EE",
  "key9": "3BzooLyS9yuFgYuSd4euGPeczq4aowQvV1v3NmTipu6C6Yfn9uhpYh4FKuK6WnS43i6dxyisyR8N2gZNUKmsrTG1",
  "key10": "3HHLdxrkdvjABnCsB4xT6MzsaUTnWXm36PRkJUHJA5mUQSiMhybUqzZv3PiUny8LJJSTxqPpSKF3eZD6HDNPPcAh",
  "key11": "2KcJPDjiHaviEVL9cH3Fan7ffojzzgYwfXxuKmr84Qh46w3vHaJ4ejXEXW9NpRZxVLEx98kCNGvFGNpfKQbE1YjA",
  "key12": "51CNQZFcFvfcdkb5iuCa111sWunDAQPPGq6HA5JyUZzhCsa6pCWTuMXbF2fUp2X4m13tCxt6MBjUsoGcfhB3U8MH",
  "key13": "61cGgvtJF8JYhtnkSCLVxX5FQKDookthPwAwGqEVkcCndNZLDbQH4iy7w4HetncBvne3CEcP6m1QfG6CfxZSmf43",
  "key14": "46ajWNZELVvbZgfF32i7inGVrU3eVtdj8S2CRhA6m7J7RLz2rr8UKpgjpohTfceyUGbmpZk11EzZGFie7VWECFnD",
  "key15": "XA52eWveWY8Ages78RnHHV57qh69ZNLsf5DHckFe4Ur2zdw5NEYWQr8ubnUpB7jutZdpfQEE924RMgXNLc6g22H",
  "key16": "2BbGa1GD5NSQt1aGfTnGaX4JGy8CPhSrXe9HfvBRNZjbQGhhDaUewR5DbS5L6u2j8ZhqXuzydL6fbBhR1a4UAujt",
  "key17": "4QH89YDhGGSBxpnqaMKT54U1q9vHcitUNtvgEfiVWrQkL8bffW27q5x7pf8pkeDqxQRjW4Jp4PP2DQH7NVt7YqMt",
  "key18": "rYGVaCb3HTeXyNLkS79taBE2jXqHSYd1c2UaLoiRmDEy6SHNcH5sTgFc57hj1rEujJrxsmwhYb31y58gwoUsVaB",
  "key19": "5oSFvEbFM6PvU3jZeAcL2Q3uCaPPrnqCUpJdbGo4mZi9Tw2bX6PTanDKvHxPp69y4myasDUGdJgXEmtibyeA8xgd",
  "key20": "53tXqv3owG79La3Pv67CoKpRa7PADUXS1f1xEykXC7DWSunxKYf88qJHoz8vws7gJhekserJCJBzeYgp6AR7ZWx6",
  "key21": "3e4iBpf76rNqwtU5cZjwkTC837XeN8wKo3cTD6UfZRD6tgAMrWzYABBCzMQ2rCZckDjiTaWJ352emj5NvS8Kgm2J",
  "key22": "4m5JfUoHo3tj33WNQFh9RQQ9TphdPZYZKpJjbUcw46o6jrnMEAVUXYhrWssre4B85T9f1SMdZXeLQunsS5FPvnqy",
  "key23": "3r3wjSnDAavR1am7da5HjVVdjjnNca5EeFCBwVsQwXEUwWxpFFNnV4ewokijRkcFcnYsnRDGK6X1owV6GH8Kfy9J",
  "key24": "62ZRhaZ6WV8H4HjzuN2nJzq8MdsJMU5kSqJi7JquoP1Dm67MaPTaVUDTz93MRu2DXs4kJeu6THXN4LKZYARwszy5",
  "key25": "4Cymf6D2mUxKKAZn2d3wSjGLJZKpkLSQnEiskroFyM1rJKoqXoxPHJ9HcMEYr6AWYT9Tuvu6MdBeNtm6wGdScqbp",
  "key26": "5yfBnq4PYckvutmkmT9jrLWuFWAGYfWB2NZ7YdKtATJUtSTAvcGYZG6GHwxPDQ5xVDpYQSDeSvamwb6g1h5y94uP",
  "key27": "5fqdu7ykuCvjMN2XERBzGfs84y8UHybP4RAPrXURedZrnf19y3EMSKd7H3wLdraUcPkjHWaT6UvCZfbC85PK8kaf",
  "key28": "3nWfA1vqT8dXTxEV1cXEZHsNvV1Xe18BZ6SV6jKecjhe9MVPbTBzuadnbfQfUwiJwXnnygeiUczCjaSMDoTgy81b",
  "key29": "2kT3bpKsgAb27Yi8rtwvJmNoAJh1qkXghNQqZ2pbPQNA911khkVf8wyqQ6n5Nhigx1p3xQkGLaK9dvVM1r7FpF9f",
  "key30": "3TyT9zC2W7PoFDJm2GTLT98DCuhRKqTS1JXa9wSy7NU6UgGa6QpMZxynBhG37oKu3YnnN46MY6KhyRKRqP9PMquu",
  "key31": "n7e2TS3TW4M8gtyZNJ6XUv4mZQcf9pp7B3kiYzQWzKEA7kFjWXCZRZKHCvwbup666THuz7ZprKPjCAckMWwjftN",
  "key32": "4q7NwSCvGxw7vXvAnpethFAgYp1DBZEPQd5pyvEkDqHKfPgadhZpZEs5jbfhqXCHBKc1NBokGWZC9TB7sZsHzEfr",
  "key33": "37u1u1UgdgYmiTMnjyN2skAxxufPDcxzi2Qz296zVm4hrM5nFCktwwVBQJ6hoKoP57Ew2sgPi5vK3abJsWEHaD8B",
  "key34": "5SUTsYf9YGz1PZrdsaUUD55uAzLxUjHqTWAEcEYzwgo1fAFuduRQfgKrnpea4EwDiUc45Tdbp2Gi414QhbVBePGu",
  "key35": "4oBKq8gSo9ZnVEWtC6suMAfpKGD63J8ttn1QnTfZg9oTdMZz6Zdj1hNFQkF8ytkZe7Um9PTLgYTZfdWbzLZ2VaE3",
  "key36": "2ZRdtBsNprjzG16wEVYWPxqcdLbUeRmCuhMbkT9fkGikfpb2nKepruH6ps6wkApZMqM7aHQPVp1w9E6po12RzWWH",
  "key37": "4yN29LrhiFig7MSpwHTNH95nSUS6qASKNhTpPL5RXwVBuoGcVK8DNCqtC1tT2dnrCFV9wAeKzpaDyL5cMJeibem4",
  "key38": "2v55aCiruubJWSJPHATJwsVNbuEH1GmGmiocBnvZzrEAcWZsrJYoGy2xZcbSK4KuAWrkw6c6AP6XV2YHAApwyTYa",
  "key39": "qbZCy2ByGxQExRNWwnD5BU9g4HeM8HRXWcxLZdnoMk5BkUo3NbyQKgHsMz8ncWQS3rHYSPrKpC3d5yyXqa2rtMQ",
  "key40": "2pqxDS1XjeEK66kFknaBPZocgC34X5ztAiGt2RmnB2JfKgyP56XQz9fX1GU6emyoE2jY4jCcXUFWXKnXaJk2egrC"
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
