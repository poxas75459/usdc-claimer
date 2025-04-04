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
    "4oxAyZKQ5cfboeJDbPjFexawtXQcKrUm4CZtJANTEC7mWgzkmZigmU19bcdvvRNRo4mN3wT5cpcLXMUFb1tYJYKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J3QUDKyBNt9xY5nsEhzmYGQpoEdTB6GqGXW9U8Gbkt7YYcWHe79KSjGnB5JozPFNLeeGGRkxaXfFNwesfdhCZYR",
  "key1": "34DuJ3GJCLQhB4VSazMHE7kiq7fMJTHDQoEPtWdrZUys7NwKvuT3DCq4ybUfkgL7JpSsTFZMXMhvjbSmz3daDu3T",
  "key2": "31A4kFMjTVNFFM5G82fG3hM8QPwmL221cKCqMfKVKvpJ13bC3C15WS64CSRqTmUKZbAfbzCrnrsNC8xcNii1xCy6",
  "key3": "2oxXyQiepReNgP7wphgTL8WEDyPeaLbrCXrNMhjMgeHXWMHXbF1mGo5FW9csxpQDVhATB6F9i1NAiYHFAWHnWtQN",
  "key4": "58fMGfahRvUAC4Y55TwHyBqRRfngjYVtjJxcrFqCWuXjAXX57JaUhpe6AZnH7BY3PzHk13W1vFAmfMpWVCmhpfxC",
  "key5": "3uBmYVZNs3dpbMoF6Wmpk2mMsXRdtKdL45ZAZ7TF8exbvr8xphrtKPRA47Pt2WcgshgpcZUxUwCkqit4v2tjaDfk",
  "key6": "3uzwYmGdFbbwLLCRnFGQN4UAMtNNqVU8pNSx3rsqqqyPN55CAA9YwhFajsQK3zEpNuhUD15q74kHVFENimYzv9pS",
  "key7": "2saj4VMWXLy7cTgw4jB95mzo5MgD9bZMvmkx7V6rB67cFZordkKcGmJ4LPuAQnyZyR24DmX4n5kvNTgSLsWeckfk",
  "key8": "65yf4ChthrMC8t4aiaWh5mRQZ21W34k7ETmo2qje6oWR7yUp2wBWVTCp731v4xprPRFHse6MhYTTuTijWhNn8cfV",
  "key9": "gvja3cockYsXFhEzucHFzxMGzJCF1hY1d74diyXKXUu7Q7oMdewrxQfuu4kSYTxaDKXShtw7ReJqxhTt3LDxmfb",
  "key10": "4WZ9aD3oSK83Bevq9z8yAA7JHXQnu9wY4Xem64k5QUvu9vJDmFzcA1TBuF6U49TVkxormf3DG8J4moyAUtTJqA4f",
  "key11": "51tAsT3yNvXqEh44iMCt34snn4ys7Sk3EPoCNsavFRGmoYW74HDcGf4D7w5axQP2dmxKYyiiW7XVFwLPHVQQAqXc",
  "key12": "3cVH5kaKCu8yPHvKcuxRvkvmzQLmCm2ywkZ7uznPe2VcSHgftbJXjxYh4hJy4KjpRGnfb1fpWviwvMTuNYWXHYuF",
  "key13": "2GugB4T2zpxTBeJbCdiQ8zBJ1A1oEcoPWSkcGARJHoWCUW1EYoHFZz5uumjXgLhfwSqy5hS4TUm92WEdxPQUhpkq",
  "key14": "3VYnZe6og6PQU4UJzGaraL3Lx8AajUbqnEvouuqKJGtHGG2SdzrhSWyo1V8uoHuJFtZuouRUk9srdemsrmQKT77s",
  "key15": "zRdrCQAa62hAN8qdeMDyoxNfjNpv95VJa4SmfJRuTA7T5FMMV9WYTcmBfk7YmxmsDtNYbixyAwZKspmoQCU8mbS",
  "key16": "afiWnqDgYWxJWK77VngZ1nagBshWM1rikAuTWDZFCNmUURBt6YCX1vm2EvrCZtR8SnXEiG7S2PMK8kwXsUnmcgL",
  "key17": "5GeGu5xv6gMLSKMhVRJfkNFMBHb1xoP9eo6t6Xj9tsbE8JL5miCwg9XzwDCJ25ScA1wPwSndcUmhqoFqAcv5h3RV",
  "key18": "3XBhxjw2j3hM99C9myw9cQyTc7KgjAUcK7q4PTquBTrZevZKhT6d8QWcxSwpemvnevCEYcN9HwTkFeCeRBmNUTTc",
  "key19": "479nDqJpXnNjeYNWsm1S1NMtJxQE2wZKV7xgpb59zWPPk6SgDA82vQaqCKWMVGRD1GmCNq1yPiBBiuUEN5GWBTe8",
  "key20": "5ew3tN9shDyorTwgniTAF9aYLYKBGL51W7sEJHiWSVMYTDYdC8mJpp4Qxcw5WApgv9LXmB7Tyq7juZEaMjH7aUT5",
  "key21": "4SYGQf6xXEMeS7ddN7YxHTztbYQDQXoEmuuyLogLjEgTo9msGMJSiR7uAT76B5fsMeaZCePs5BMi3CBKseJ4crJF",
  "key22": "37KRamsNeMiYs1cEhMimYqBR1GG71AwrZUAHZPPfiocew2K8KyAwtPcGnAWu61YnaofQJuLf8SzdQ1Y5s9UD2k99",
  "key23": "2fo1GSvvVk78LnnmX3x5vYdZuQhTv1mJrM3iSqDL5nygyGrTCNFCxsjTrk1yjz8f6JKspPvcxbNPD2vMwyK6WT9x",
  "key24": "3EBXXQ6hkUbpmfbmJa2Sv39Y3ffeRaNGJkS4vZtC2TbaCDjoGxZPXFM4HHPtLH9ecqjFRWtjjcvPiTpok6rj3JyP",
  "key25": "472wxGKWLRL4Qd9virJioL4AbD7i7vDG6wY1FySiTRpKbAMmez74VnLCx18B88PEWi4suV2SHD34BY4A7K58jPSX",
  "key26": "2XsZcNebYFCfX9ptoScQrkhdwPdxqaL6pnaDk88f2M4MTgW7Qp3gN78sAkaUTHJJLAF92wdf7eC1Qo2PCUFJuMsu",
  "key27": "3zHnB2ThftLWdeR9tpnCdxBvwFNH4er1YpcfVy9zADu2qq5ZpKtFcaV7TXfC4oFKULxgvfQ1J6V8BNjYaGnYcafo",
  "key28": "gzp936vdtfMuz6U9E2nbo7EQBjNBxod3MSqcSudv3CMhyWXfUqqqEKk6RxxW3SVWf845DQnrvMFBDSRxnu3KCm1",
  "key29": "g2e4Udx26fwM41wEw6H3zbRxyNHRSn8zPKWjjfqALRvs4xi4sBG5oA17HGb6GrCPb15gAyAYLde4RTNgCVuAU9g",
  "key30": "4rjWRcSTGonUgJMcDRUuPaZ4teFWDsV1HzjbxjunuK8DxsdCqRtNGfmVfogTw5yQXBGuAimwTbK2WF2hVnpJDW5q",
  "key31": "2Nps8TCadDYExEnYEdCfALQdKSSs76CnKshMgTEkXhK271Pos2ZfWVm29vZ2j7ghjau94R232Z6WJijofikwQyFL",
  "key32": "zrVtGqs9KPhkfU3kVnAxQWv65iL8QctE3puFmPWYnkTRw9NQX5hst9oDLSAWFCZ75qJkmbgXrPdcLQzWJF1niQ7",
  "key33": "5wrYawYsc2cZEcrYUMeiNTYBXaoPRfqC5w8gp5ni4VuW3TqtBJPLwGPWZZf46Jm2rqohvm5bxQUmA3fn4XoxevBT",
  "key34": "5CPBCR3CZqyWsy5UUESn5CHsxfmSGRuEYCcZxuZFv7tYAfe4KugXP62EPkxPUoaEbPPvkUqyGgNoqDCdefBkRMVY",
  "key35": "yozr27T11ytZ45auAupq4LhzyCuRLNbErK73uNAHFCwaEjVxTyCTW8gFSrECYiYncpND5rQ4Ts4qKKTY3srW9iD",
  "key36": "5PMZhEh6odjSy5s3ooSzHgwiLqvgDSf1GfioCaXLmSgTKYN29eqmWPozUcb43H9oMj38Dp7TFrJgVRRg3fSLRNMP",
  "key37": "4ehhxqycrKrMW9VzhnUzee2xUsDszYzXfF7SWiDJoXusY5FFjyUsugQB25h6vScE8qc6BGABiRgfbXK4cSmVE1bv",
  "key38": "5yVd6fSD6cYHxjp3gpjL5eve6MYR6UfTeVLkoi7B4qrbBGXsob1GunEh2jv7wAkp5NJV3owd5AzydxVa1ius595E",
  "key39": "5myJBvafkAVc2dM7JaJc9XiFmdFu5Lnv38Ndy5NyTcCw4tzHshX1ovkTN3xGq1MGwPtD3Kbm2HWJ7pxpmJAqss6n",
  "key40": "5p1FztfnwyZtdwHRMAaJ3Vt9T5qxXMdDri3LKtop6XLYTLHJEZ6qDdrpW42HUvY6KffipyBbKZrrihvMWy4y2SZA",
  "key41": "4fydCPDGSPWWcdxEm21bfTx9Xqrchz86KoNdK4don58XXRDjhjPgzFtdNmw2347G7SFVV9z5Tx8wn9Q2ywDMZnuJ",
  "key42": "3REPdhW2hREb8VDkPtorY19PKeaqzgsTyqk4vrzGxHw2d2hA9ycywfNq7MTvyV5N76dkucfdeyYep82SKQ8tJB7r",
  "key43": "3KMwQA5MGnh4W1oXVeP4p1bH5kk9Lu91XTYBzUCdC5RAaLdijrowSMBf3zgZJqFRv63cypRTsXcGDuXtzs7DTBLS",
  "key44": "5p6Uz3fJQKkCpXg9CYXRE9NApL4KgKVPMiPs9HwJKiYhVXxUxsY65oR9pCFprBY8aTUZ962JDDUiUseYSqk2uQuU"
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
