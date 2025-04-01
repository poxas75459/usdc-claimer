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
    "5kTxfStxu1LupF9Wjud8GdBtTno43jd4QyN3yEeVyDmHizx1Wp6D7Xs5b8NiQsMVP631kFTLR9Tm9qxGu1Uiiddq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a1tVr6NgAAejMHJ2CHmPGW4Bj6Ja6NXWfoqqdmVvDTHByC9NA7db5JfD2HuAVJHTt83g75VYXCxjd4o84WnnGBM",
  "key1": "3xsB9seckKoLUDRXgiNxzaXTecMAcPjkEpJQ8cjLP4zjRrLRUmPwmaYvQByC4SQFwcZWJSw6UTjY61ZFnw8p4W72",
  "key2": "4VmhDoVPKrXmSsZeXsMsKP4f7uao3mFw7izn6Pd49mmdDaBxVSGzvUWxAHkDgsCupBemCKKWYcBeuamUthMdY9QG",
  "key3": "5WRuGGuDP4Yc8sn8BJebtCPc3ABPsHC4MP4kgGBNf1XENYmXhMExm18t46Pv5mRKSwrAVeC6JaPKddXyre7uudmk",
  "key4": "38FqTGZKBMrYEqMsMP3WKmv2bv2W4F3dAX2XjNEWFxkDC284Y2BiiqfBzcF6RejhCuf4jgYM7xHvuGS1g5wCgvqD",
  "key5": "GKrpGEmHZacTJgg7CeRrzWDrHQpjvi3ThymGWZAjBgkgMNXKZza8B4EJ6ukXAu2QwuJfxUuNyuQdi49Myns5wNm",
  "key6": "4fzXERreY3tnwkSiirc2T4PrJv9ccNxYshDrMakGEtqY27T3s9FDcQvxFDGfdxPbg8qQLWjyTf1TjYmhq6dEoR41",
  "key7": "5tAwHWrPsQoKTgQwg4DjfXLM9dLUNfz7RMYu2wRXHtutraXmrRJpmXCWHLYeEWKzPeHk5iLgXNxutzj4Uk396hP4",
  "key8": "2Q5xTAZo7Q1iHaZpWjMrESnBrh7Ay7fX5x9GtvyPhHYkR3Qsc1R6MgSRCqfQBqtuYiBjB3s6Ac2W2zjoQh6CiSX8",
  "key9": "3NgmdAKRKUMTggBawyB3i7CRDGLA1mb3PtAFBRrK9DbSzWRjodVvDzXCHaNwoH19Ay9v4WXBSC17MzSZHv92DEHF",
  "key10": "3ovBxcvckFvZGjqmWgwGjY4e4xxb3LLVQoQtD4yfFe3a1uibfe7KHZ9bBbgfUg8nWr5NfbEAMV33nV1jgSsBMBFt",
  "key11": "42wLfGkjUjxE1P7dVAnrVscSssB4T3ZHUkE9vdLcAdkxFtLSmvgn9SHcCdiboGyQsv2AHtJZ57pztryqVENv2Uq5",
  "key12": "3muRD7AXEtB18q7z57gmbtG3TUzTzCM1Zu53JJET5fveEf5t1rHcHC3wJX1jM6AY2QUpEjHfLqrwNLwNgjLqcMQq",
  "key13": "5niSBfHixWJhDh9yE6ZMZxLBAeB7N4TH8rkFDacy9fmi8cRzjrWa72N5SQvos4vjRiNPb6nZq8oyV7oF6HBdKxgh",
  "key14": "2jgSBVzFPzjMYU6cbfc2mJpjcRU8sfeYyD3v9eugrZJEUzoFsphpEKNFL6DueuiErNAnPreCrUj9VvdPG6dZSt5K",
  "key15": "YSUKTpyzznUkZmfoJ5MZDtvEDKDzwCTLCKxzdjgZkyXdZEDECCL15edKD54vsNJNn7nCJztChXb3c84GesLkut1",
  "key16": "5WZVTVt4MpxbXrK9VxactnUeYJxD2XpYXyLDo1vq3x8GZxjEXFjxReNKm4pZn6BaDRnp3qS7f3qoXKstE5brWqdZ",
  "key17": "2Z8ZfSKM6fBsajcoSjdR4rwHLdjawafvaQ7RRYrLHTnn2ymUg1JxtKgPj3BjVjaHBfvaSUmzEUtjQLme9okkVCzr",
  "key18": "2kqwDTzrRzshtoUqAscBmVjdJypVNUHhBjftf3eqVjW4N5NUjyUgJomJd4JRddqobkxygs6gsVecofppj9ZzXVaZ",
  "key19": "gXkj1QX2HHsx9VYGhTSwyKfZSDRAaDmDvFfVxkqHwK5xrART4yFE1BS1gSxbDULtKkrEiawk5tuzvBMS7kkTy8p",
  "key20": "47wmmujfH115impEAvRcVHmvwppjp39MFGqu6Yw58VfjcoT2RAowKpV9UUKpdhQQouoedNUEcU7A2vruTeeY8GTe",
  "key21": "3pkiByVs3KCnpoeG3CcHq6VVsC6VoxyKUuo8vHJiujin8tk5K3Bb2i6Gis3ayeRCs2XWHYYdpDZQvfY1pUMySKaa",
  "key22": "2Fy4BRa52ygBLzAeLH35ZBweaQBjTKtpTQ7Vj9Un4MxeBXQbNeD77YBbXqLYjsJJ9ipBTjNGZyYoaFRt1789bKRS",
  "key23": "33ynuQScGBT2SW8cgLBfYjVghoRTHCQqqENpEyGJo1sZVT5JUvd56UJWktrjsAS9mtq84o3mjLdCNEMoKdcyBhXV",
  "key24": "5rdLqXXPr9cbu1WuC8dJhz5MuqoTWMBQ27Tau2oEo6Ai8nHG4DecSyo4X8cZKknthsXCqnjosjKK5pmzr9k7x4YV",
  "key25": "5wdVydMzXan6D3g9KfFCXhoVDagK8y2cysSdEVvP86Btq4pmH75pTmgVUza6mcrqEJmg4HDfXKiE6tp4xUYYdxAa",
  "key26": "2t4NTXq3JbWd6mCmFAddaLioReorh7TXTDUZoSwQvw1HjPBzrbmVBgyKDJ46wfMX9tFXWDJ6ehCLJLtTr1VkkbyK",
  "key27": "3mGESJqtntYE7V3hPkgApp4YeuPiNUHb1aXjz7riewBus2qKK5DaXx3U29ny4NDrLv96QBZMRFoNmhodhdPhJVxt",
  "key28": "4yzwjGrMLVnUjtwr2G5pKiYCQp1qPUV8Kqi674wYYGrQ1E1ctrmpqDSD4rC1DaVmRhzWP5iQ53vVsPuxmjbobUPk",
  "key29": "4g4Yzhebgq2HFAWApdt22kxX58rAWn5hzxbsvr4uTM2B6XGmrSomAZzPGFEiuxG7C74XkmDLUNgpb5h2wf8X53pz",
  "key30": "4ueg71E3yuxc1kSpupf8HM5Y5nKz9jwcG2FS8HkqiTNuFcbxh2gNLjRPfyYo86V6Ungmck2ZB6QqMJHu27Vmj24K",
  "key31": "4Ajjy9ucX5Y4vKyKr7Ra8jEPzSWazH8eQRQXFvN9C862L1BK1bDmxRdTWFgTu1MEyv2nxweuKTaniV7KL2cZ1ELK",
  "key32": "2UG5idfMQK6Dw4TvvvwtX9L4PDxTAcYNX49yaHBZK7WdaabCCnwkvsGb4unLbbUPwFT6FhsYiDuuKr95fn8uJ63Z",
  "key33": "3K8WycpnGPxYmNxPjbk1wAw7ZSGqinyMCsRWi8Sr7vKDHXqjC6peaBs1PHSBRdBS3FsauSLZsim3YyMmdcDAbqL5",
  "key34": "3QDRgkXvK5MFuAiHRKKPtPe4ftVgV4Wx4xpgUnFQuLmbub94ezx4G2uqC5AGUKMCYF3ddz5AFSxttr79tHSY6Zie",
  "key35": "3MaZUjjsTmtyN5Vdt8R27cnESCsaTpZF2rbQb4MUrabLUCPZy4r2sgTcWKqh8xLyr3LpaMVSNRxjAaspg7ac6u4Q",
  "key36": "4gBry33G2ZYHEqTEct46pyQy4MDAPpi1LspUVc8VBLZXPeBz8s2pQi7Nz2uokUF55eGjtWcdQutZkpbzkWd1cGj1",
  "key37": "21n8nZKug2WW64Ryj2QvNihsRJhc9gdUnSj1KMJHdAx9TQe2wV7wgh84enJM3Peu5uAo9LwB79BDcTbZwMttDLpx",
  "key38": "5qj7R5DSYwuKS3HYahdJu1bWfKkPLRHRr73Z9kDJWqZ55VJaDLU5Dp6RjJrYSLgBWUJPmjabiUEjmmDcicfDA9h6",
  "key39": "K86TG2Ks6yyP4vZ7XYxZmre9ifvNX7oCVM3HPkSjupWM6iMQVR4EUGaYpwLaRoVqotXKQJQ6Yyd4aszNvZ3PE8u",
  "key40": "4HEChoQC1xB5nk7WoRZy7Ktbi9FMGQFuEJ9aau7FByVAs8rVTe4QvJR6yqVtM7kh1YPaysSoLEwJrpEX9A9BewQV",
  "key41": "5YJWoBUJfUB6PoizDvJucU1nRbA41nn6DLCGBWD1HvYzoYxS7376nfUEwZe93JEwKTrgtLNoU6arotWw9Ej8RTTA",
  "key42": "Bt77WnSrGM9kBDUWMGGuvFDusvzQU37iaNDRuEEPaFUZMLfdhe7kFosqndyszRiKaap7HZX4bBX7kFPN6nUmxpj",
  "key43": "2xmAtEykJhbouTaGWp3Vt4ScC1ty1exuKNYbwVyztojojY3YktWUHAUcSzLKiPUWnx2ztkJooSVrqjzhnxYJ6XV8"
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
