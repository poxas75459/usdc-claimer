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
    "xm4tu3Sea7n4aWLrX5i2YBEydFCTHD7PYUNifhH5fxTgu7R4nGtArHvdt5Qtu7ypQySZ5hnDAZNh7x7ath6jtqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YuDX1PEiZ4NdDE7ow74XQoWRZvK7R98nrDAmLicF8cjgvpYhqsFRz46zVzwKNyMdhnxb9N3Je9xUtt3Vn9DW5Nj",
  "key1": "5VFnSbdZ2EVY2ArHyweUQAhugwFDtJ66cRhABXAe2dDxP3RXM65Tpm74BWfozWi9nd8nqBFUiCMY7dqB5gSgQaTD",
  "key2": "2C9iX6H87169DPoXFGfrfUP86saFZM1dzSSh9JScwuawbrLpbLdUk9bn3sgPLQCwH6JNmF7VGGr1NSBsix61ubMS",
  "key3": "8JjKWqPb5LuwWVNc32m8twvAW7GtQ8ekqJ2VesPr6iQvZBUNUkAB7bPfCuvNUBDCyieJ9tP5qUTAtnzShT2FSNw",
  "key4": "4WUUjp4MxEohhuw6tQBsFDePe6NWHA6sSYdzU1vJcLCfG9dmNUi5PNydvmMEULrcQWUzopWzjYTawNck4sYzX316",
  "key5": "3YSSdNcYQtqSMV66yeJ7fsdALP88SBkhA5KotwTyYWNfsUsh74cDWRGwx2xu5j349QjKFfbp2mo5fMB36PTWi4s6",
  "key6": "5u8wE73NB9dMQkbmETdvsPH3BLxXfkcXrzR4dWkSduAcQQcSPb9erc7pigg39gzh4tFicevQQ6HfHAvaLFFpj5pc",
  "key7": "2g1xCAwSkfLNjY285R2droa91DScWgF16YopVqXfMHmHy45Se74DqpULhnx3DUpbfthjvdLGTa5sBKbHxJrUZpJb",
  "key8": "61eebZtgDMxh9usxXachnxqqnj7S2WivYZnrDA91U24YYhQ89ZVsdmThcz3dA5Gp8rNbo32ZqdSzZsABYXpLphwv",
  "key9": "55icBhcN62iBSm29ugAdAiocu89Dr8CY9GmxdnMMUxAed8RBxQ2NWYUqAcBMrpTFYeGVCQRiLFGJi7wxwH6Q1XGb",
  "key10": "2MRYKCd7mhHu6wYDAzFHF2ev4Gb4sDPad9wBmtUq4Fc7JYrM7gWobmu4768HaqZu5ZS7kNfsyPpSgmHRCYi9heFc",
  "key11": "5jJX7Wa1qZMfb7v4jjXo3x5ptr2vbDos6h5ZzChgEgsCWgkeWDD3RuxRzp2SwgFwfb96WsWzEGxAL6KesrNZamsa",
  "key12": "3mvXt7nnfUe1xq2CqNtXDcoXqeh21qazFmcsbfbNjRV5G8CLRjXwsDdsbTBrbsrTVziqv4kM19SfnBupi3UTrvU9",
  "key13": "34HzUakJk6NwNpzDVP8mD9YmVXMkgpEps2mSPfJhF9NkFmcxCqX3y4u2JoRWgveDUNkCuCzHvPBSbPDcNRyZXWv4",
  "key14": "2CGhNLCuuiD2ubNYwTdBPYYrjzWydhWB1dwY1Yg5qz56DjJjEk8UmM23VKovMg6yb2xcecVM7ww1aFGc1u1g81gw",
  "key15": "B79Eaag6QNaJi6Tu4sucZqKwuvgzPKm84Yf8BiJ9CEuY8EsDoNFjwnk1xonZfYiqmkK8rGqvgfzjjANe3mxaj2x",
  "key16": "3hvqgiAFX4vHAme554G3z4JgFddsNz6Xq6XYiXKNAA8EU5XY6gccaPXiCNrTZ6Cuv29xgYHRAgbczyay7YmQxwN9",
  "key17": "27TuiC9bZXJsG7dzWK5AjgNrUbvqs9EgZGq8awsinJ9ULsseF5ra7i929KofqbAsC3VECGkxfh1kTRrRbnkpNBha",
  "key18": "4sxKmS9TsBYoWoGS43ebG2qPUyLZjw4woSwAQMveXJwPJLemFDajm5VEoaaNr4W1m5hmzqh7xCyriBfF8AnrETLv",
  "key19": "3iuaENndJRhL21m3nRraHdykpKn9pHEQrCUJtQaKUcHdwVgsF799RqeoFSt2CM5V3dovaBLyhEdFj1P8XUaySXaT",
  "key20": "2i78wtGT79Q31QqiiyHwJW6ZVRnhA7a29sDyPKk7oZSJpr2cWz2HM17vfgyfcFX1ma9Dxz6BJhajRYSB7f6Py6JC",
  "key21": "4WmWhr8LfqfTYyQCmFBUt5wPmHQQMM8MJvFdQqKnwVqniZX6cghoRPefLxAyTuXwJdkywQANJH8wSFSkwGVm13sG",
  "key22": "5uHFG3ehjqgTyfihVPk6PmTURG346eJFkfGUvxSox7TfMcyvkTriWxMknvBc2x1dtMRdGn2TYy8ytQUJnw2qecVV",
  "key23": "S6EgCwfPdSw3mnEiyZ1ViXBZtbqch93Pvrd3RWqrKXkcR4tYvj2oGCLcaWJZCqPPfkb4UUwcBBXhSn3UcqopfDD",
  "key24": "3SssAFr7fjfMgSe7h14emmgKdK6aGdW4LVc3Sq4X5NazMYExVSffCvD2UEkBUA9veUVPXKw2aEPUQECvFkWnoBtG",
  "key25": "3QqVFJKoJcv4qc81jc1TuP7p8nSwkBFaibLiQqgSaERxvky4jz4iKXkHYCBHbgzjNNCqfyzwMQWe45duD4GLNCip",
  "key26": "3GN7jER8XeVJ1rbhcBCn9StpjW8PyFKkZP5k59EmVgAPSjzoFN3wQNqK7nhHFgUNYEWhew3yvziAmm8N7wpE799Z",
  "key27": "5pfe2uTimV4F4dSUNDFm3ZtNsRuwXt8H5fAiYptYnoCNaaMnYzWg85RYCuMb1iQAY53WzR3FbZJvS75JkyrtQPh4",
  "key28": "2tYB45kYznW7mra5feLH3e6UAjJPRRte4mHDsGsA19o2Qruaw9VzsWQni6kSu4rcPHQAGqVtYhKdMFtxh9qQXpNV",
  "key29": "XbvKfjLMrqiruwMVkvCD4TizfjjvAoHnKHSkqP2qBwzMf3ukiZ8aiBAPWqGShkWVFGRmY8YPAY5kBDrEUnR74xB",
  "key30": "sukZGX5jwNM3BM9eUDJAkT89AGnd36yurmvPYyYdbtsg9hsiKfq1muyKev81cU7Yb2CY5JYSPUPxnvXDHM1D5Rf",
  "key31": "4tKVD7EVjoqt4KmYTmWoFYbw1KUnmMtiEYoy3KyP3hzqXXuBBk5Q2U7fkMi7mm7En679gKMdGKw8kVJLBzNdWfiQ",
  "key32": "5Pac4JBQ2nRzmj66Vmu3hVCef3Q3RDqhp95UrCRMscC5jCHRjcftgMUn1BdQHLq3WgbfQUKGu43RJ7ckBrDdRzRV",
  "key33": "2ZkJar59vHdn2QHb6AWWxssZwtDkhwtrn8bMkB1gx9rQJ2apeujvMybFEanJNyJtqtubUTVhYCy8oCzQteDMvKDJ",
  "key34": "4rSddrSD8SrWqyz6Fo1Fp63NqvSMyLBnPkP8JJbDRTNi8ntesNjVcoZyvYQDWpFJAbRieggaQvXEPQMhmugXJnSW",
  "key35": "64CqLe2HR8paqtyAmYg3PUZkMTGqJCJX299qAZjz7CoF6ULatchYQJB875ELVFYCb435FvByfQZMfqZMn94amaBc",
  "key36": "5TzHzAebWy6bAUgETfiYLcuxJu99X4Er1TVtiycFqncJgxR8xWP9bZJyWpGgGcY7F9cbs74FoJyUdWGeK7LZUgKK",
  "key37": "HadC5DX4zVUBjx9h2rCcuUM89M1cZgoD5Hw7TqwT1i5YmbtcQLZMR619Q2mHrdfEQW2oN6z1tx8ktHBVJLPBqpD",
  "key38": "3ck7fbnLCs53nbqiKqjCzmpkVsiWhvRz2rGr6rpnS8GhehgmzYdCWsZhgWpuwnwYyf42hDiFdnLiwKNMruL37A1D",
  "key39": "w5qqAANHUQjchJdkMDAo3LQFZK7wcDGUjC4J5hZ17Kw2wGgLoga4B1Y3tfY9nkJ72uyBHpsSLyVFgG66dmMRW8X"
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
