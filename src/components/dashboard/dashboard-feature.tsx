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
    "67JwzU11wBCEuzU2Q7qSjwBr9oBaDxe15BmLL22NanwKQ359XriPJmXs3BbVTC7d3p3y75eHhjtu8zHKUtPs4FK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YTD7ywkME6hAnxsQCaQryT8wpvPm3Y4pDARLV3T2s3bEvnetj84T3uE2u8sSQx2AaTMFmU5XvgyTdSGBCu5qjEk",
  "key1": "EY2yDJzyufKV88smaY1gN5b3ba4qWN9C5nYoVdnLCZVCwhngGbGguZbtQ1kfWkN7tBUUSxMVhkMSLXRa8DWgK7u",
  "key2": "73tP1NJBY3dqKz4zdthRKxyADD8MSi99NDkrQqCDrSwjrEVV68ZsQTJpxkumpPjhatnqrWyyuBq66uHtgiXBfKt",
  "key3": "2o2E54ByYTR1wKBA2hSSVEETzGVgD9sZ1pRx2MWJGetDZayHoRctyyVbb7E4eLTZYVuyuyhQwmii63Lwfta3PDgj",
  "key4": "32A6MDMZBd3oCfZKVMzoboqc4duvyn3n63oLH8c6c8BCVsJppKimguZKWf3tmjYkwx15L6KMvx8Ti3ok3mGbsbf",
  "key5": "3w1hQVXdoNY3CWJoHA7x489CMFVtkYn7Z1jp7zvxYJYvGZyDsVikDcdCJxHX77VZuMFoD7X8jT4bAmjbfFKPRSG6",
  "key6": "Qxkfb9HevmSLJd7hDcSwyqNRvuFwiL2tetXKccWsVvVPFnET7fuqeZpYBfAxbAZxsokYCxyu2d6X5Zfpii2d2Z9",
  "key7": "2RQ4zJFtV8eSm5m6WmPNDRa6DqsR52FiQEXuEPfvgbiCzCNStmBPPxiUJJ915HSXj7HdSuNFMVsaLQGgbWCswtrt",
  "key8": "2XQNN8CtqPB55EHxufTSRXEuZ2NNViR992wbJS3UpGs6N4LSuiGViKzBVuWJx8pUQo9gpDYFNVC64wt7yWid7Bhi",
  "key9": "2yhyzGTiGfwQswto8PNiv9DK3vf7XbtuSc2kHkmLwcmMUtTi581TeArvUpwzNNL1V3VNuqTFprD9ubyB9T63CBSV",
  "key10": "3oZ13As6kk3i697uysoNYZyphAZ46aPPyW14boPiXjrhMrmT4dJp7ZwCWsHaRYHuZva9KZxpov5L5jACwtuDRXnv",
  "key11": "WhZP1ceZpajEKoGyZLbmzPuAp4rTET7n1PaJ6VbqHNFAsyK5xTKWwUnoxRdN4CeuZxcqx28hhmW7zoCVNo1KLcg",
  "key12": "gENGewXSPc43qh5EHAmWRNHey1HrHsobdhuzaYzn1AAmwUWeJSwSDx3mdFNmxwEGmxpYZBykLNJPbPD3Wk5fo1Y",
  "key13": "3qbUMQvwnSm4A3LicFKDjXmBcSh9u51GAxHkEnfQDWkbWEyY5dMos8ZH2N37jzaGaJXkJNmF6jXh2JYHAHayREnQ",
  "key14": "5RvxDaTumnHobAj7E9kpi6j7T1FxZ1F4SLNaCgeyvzdQAZB1vPGAfY4ajXzggGa4sHVpNV27r5ctwZeFSxRmcgcw",
  "key15": "273MEPDBAZLMAW1barHqAYdhUb7j4zHHvuK6zoxTfjMsFquCLAD4yimN8fLBrJCTbKqohK43aMLHwdCfctiXtYRh",
  "key16": "6SHb5Tqtsuja5EneVsMehKW1e97saNF4yhiP33S8qW6dN8BTbHuk9eE8MfFgeaESUQ5zuy1nT69Q2efWSGqRj52",
  "key17": "3RZdMXqCcqS7NLSgwW61pbVxCpVgcshpHBGNH92GcASyBuv8p2dRzfsKoD8B9EBAH6vLWXfmpCJ8FebrRrPEotJ2",
  "key18": "2QS9tXfwwXJyDoqRxbivqxRWp4pqaSqfNCbFsFmagvpoiyf1cLNFKmWf8w3D9ksk8UZhYjrE2tSei6UV6nevEV4J",
  "key19": "B1AkgwitcQMeA2NydjwTtw45Hg6djuMart1MwzwL5GaeBS3bFT7vR2p9ZVhQGApquvQQVZTGY8uU6eqFpmLRLRE",
  "key20": "4fsojDH1cN7fmL8pdnHz1emdpD7sBghx9UqPKsvQZsGcQfFYK3ir78HesQvgEvEXcXEyhgR8FZwWZtKqBYtQB3yF",
  "key21": "4gQzcpYDr8ztjjpejmRkXnkiR8a8nvE4UTVtpPwtghtpRZW8QgDXEUCYENr5FStm68ED58XFCYoyaAewtnN63ExG",
  "key22": "3LEvAxH5Uw6Pz35mvJudBJHYqd5NYhiKJcg95WuRu99qUwH5LzcGAqSXYn5QVwQ6gP6UdwpCY4QHp4XYezRDRxZ4",
  "key23": "4jphtVdqyrD4FC5vRrDEd28cWdfSZRd6yyayTa32jShokvCo8k4NkitHrYj1hwsQt7cMMmg4pEfy6zs8kAxJH9n4",
  "key24": "MeYcjeQ9heVacxskhFULMy9CzkKHC2nKHdGnSidpAqtYmipHM9D1F8xYscELNguCGe6MqXyNpYqe5ghf28a3Dne",
  "key25": "2Cy4UZ4SabYGZG58iyB9oscVtVc8MiNDDSc2JsiuFJgXRzCiWoTdapPHxvbucGQLTbXsHqgqin5Ac6nSCVbGUvCr",
  "key26": "2t1tdzNt2jv6zCKVsvyUpgGT5W2ChmzNTfpjXc28mKxgoFkrGeE295aSsRG6Scv7wJ3svHDYiiD81AKQSYZprNWV",
  "key27": "28jSeYyRXo3cvrtAP98G5gCwGqYoatZwScQsaKW85mYYsw9xTKifsTHW757tLpZnexAn1ghaYw8xezrzxwaFggkg",
  "key28": "4YC96xqdxzR9HUToMjNxPa3RA2VSwsGNegQkCp38NX2uBTLgByjC1YB6dYGAxX6ZvMk4NjYNUqxG9qJGf1XCDASC",
  "key29": "2rto3yyDoz64zVrnum2Gb43kS6bmz92CLJUHKrJ3t9GVuqgRmXFE9KBdwtsZSUhP2U99BidatjK5JTDs8pdZYZaq",
  "key30": "AweohvnfDBq9dvMgxvDZhS8XMb5x9Uq973BdjsuBqLrJqtNuftB4h1F88oQos92FZnYj7JDwJbbXcagiDnWX2qd",
  "key31": "5AGnGm3LCJW6cPntru6uL6BZQXK1tTSsrMpvXBjguBvxrfQModR8HhJXEkEyZrGL3fch3vzNje68QAcoKNDmEj4",
  "key32": "Ygsx9R2tztLP8VFxg7eRCwdHMbC7KuN3hp9TSd9DURG8rNeiQVGuvyRpY4SsCNgir9hBTb8rx3e89sW4fT9yvyf",
  "key33": "4qLm5H2JMfPLucisL7wSMVPgGUvUHuLRhjdHDM7tDztbdGNsgS2jqvnwLF8pxLSs63YyXpUSRcJcDtPd113Lm1S6",
  "key34": "KuYLr7A69qc5isE2ihsEgYQAwP3X7G4NXHVRxKSYTRhg5G9wcyKz7qkMrHsGRia4XVcohxrFDVSKYka6qVz31ky",
  "key35": "4yvAyE5sCkaAq4v5GduvapZcqcxZF3fEJYWk6jxL5XTHTnFV39a4cd7o4yL2fYdZKx1YzWXLz5qcP5WJqkQADois",
  "key36": "4sHgVzqQpZ4MUwu76cnJMuLtBa4tsZidWnwM3cMBygsbiZAu13oFWpiY2wsMBm5T4sQR3mKH7AbL2mZ8Rbp1tRmm",
  "key37": "3NENwQGtboAmkbHkirPhRiRHhVKdfkb1k25MWtrXx8t1TDXA1qjWtN5Uacp9PL7MgCHrBJAvVNqMcKFskKdx6Jmh",
  "key38": "3KvyV3NLsShC7g6eUuaVyihYzEpoM1kVufrkCVBQF9bgrT8tKwWKkuZAtjWMyjkSCGm5bayYD2HamwGsEZFghUTt",
  "key39": "3t6yV5YH4YpSqskiAdxcNwfdXUZzxU1aSoEmp5hX4DaDRjhQtHB8soCbVpz6iZ4yQMMe6XuTGmYXwLnqVHVhLuJ1",
  "key40": "2JNeFcnMp27RH2RMEjKp5dssjuDQaxgX94nvboFtMvXnEJKzA3o5ZAxbKmaX5aSd6W1u9q2jeUYnAtFowKQWVFGZ",
  "key41": "2HgHmnYCkSmZyqiVpvX7gQDiL9s6pQXKBdvdrNT5MuVszvNid9HQauVjHnzF9GgL5QCcinS1kJ5pjaK2UvCrDakJ",
  "key42": "KiweX2HGFrh48WwCQuR9Rowd2zUnaPznzgQH8ZzaHLAwyPFXf3dC2p9NQgio9StbYWeRtuo3fd2F8sK1ErNfvn2"
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
