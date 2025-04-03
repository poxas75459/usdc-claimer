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
    "3GvGMP7kgf7bp3XryQHdtiexcMnEeygvUEqCaXbyEAHeedfYFFbJ4bAeoFacvHPdinYDe6jqXT7dEtk1ze8Q7c95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NFo2wQoQuNVeHm3GEZG9gVD6jbN3pY7ByWCSEHx3avx28AF7BQuQiL8gHF5SK3eEUvSZYRhz6ovhujdJrB5t1eX",
  "key1": "4t9a6SqzeUd2kaXiTQf4dGeiYMYXoMcS94P7H5pPgUeJfaeKFxk8so1uhuu5unHfkRDKVZY82HEG8AiavZeZQFDA",
  "key2": "4U1DBopR9gAdxK5kKHhDj9FCT3d2kUQAiBxq7WkTcd9zAdvbwHJQjTbuS67Cm6aFMboMY9sq27SFnB8krJGt4FwF",
  "key3": "KLfSq9J2MR7Tc2AQEKtKdVnyic8gA1fbXfBUgMHaJ4fCo4MuvwniWfVpYTxbxDFgJaMrZTTXM7npwuzonyDcats",
  "key4": "4n5YKRBepPwVoqtrox3TmLs5NbTeNMmzkaFqCiBufAmeZDVdPG6d4i6VvCAa6XtYduU3bntLvewJq5WCwVMe2pWX",
  "key5": "3j1f34Pcqa1M8CYpfZ9duFWDTDE2hZcL7MLU7EmTf5M9rfg5FZdAzuLgCgc4D7CeZ7XGYvpdhg6yPFcBBxUp7UPB",
  "key6": "2ziGx9ZGqw4ZgJesQzqVM2TbXKPDDDQ59Nx2N2kyCE6NpnRUiyWtNs2UMYsjjWhgq7P3LyJQnwRHrWURmYKY4HFC",
  "key7": "6p9hyHEEwtoHU4ygcZpMc2LqRGKogqUbf38V2g39wGsJ3LMkmxjUoG45wvQTrYofmWFF7UXBNgKDWQtFoCVPG55",
  "key8": "5bRFCwFau3fT6MrpjgBrNyoofF67SW9HKeJa9XoRB9ASamjquSNy6B4Dw3GEHYJQWzWJXtzkrNV64DXTqaghamrR",
  "key9": "2NCQSuXqN2RngjcMWzAEFbUceV3Z4prCmNCwD6EjJ5rRWD7EYzLY31e63LG2fpQRaTt7zu72W4HWNgPNVwuFvk14",
  "key10": "5Kqnw81kfg4APZ4Jf2S4Y6cohzBmP23DiagtRMTen2AV1Hm2s4C4hMk1tmrrefygT2DWpdnnNfjw1Yot8DdHc2S",
  "key11": "5KsbqaARh58eskUkiDRi7tXKscYLKi5i65K1NsVY98aAG9t8LbyR4XmfeVPh5toJ87tac3MJswW88CpHAoZphWeb",
  "key12": "46fcx9jykBmc7nNtNohPF9ahvwDMDz1kMtQsXoWR5vy7xFgZp6fb8oapqbSDDVW2PaZtJzRJ91j9ZDgAUng6aMJE",
  "key13": "65hHKEgRMwi9rHjRM6hRsZz56rUMGHJ3khffT3t1dsxpxHpsu4AtENpxKvPQsYZp19u7zDzVuqWc68VfF5GJfXiH",
  "key14": "ojmZh82B1VEaATkcdYDexnHeSJC4ZxsjDx9rDJ69r6nTd3TvHyJHFxVTaWs2RPuwFQdF1Dy18NgXFgk5EWenurZ",
  "key15": "2ExSV1hAd3RiJTHg7Xf32YQTjwn8cQugkaX8RJYVqvu3A1nSzXN9CrJ58V5NTfhg7eXUb1ySorNoHq1tMySWbjoY",
  "key16": "2TWeRSmoWWbfo8H5qDXBnM7QQpcxJY8BFaoqwjVcrHxmqhCQjU8xgygW4r8acvubR9QG9bxSjpAX8TuiNjpGkCZ4",
  "key17": "2pUpXgyo9eyWGKuZrnpZ95xmRWEgfQdTf58ha4cTiSzd8Y99AggCBdsLWRAaLieej4Ckosajrow8o6GTZra5ZpWt",
  "key18": "2eKmUv25UGBt9mYUuBD2DUcqTU22v7TYgcv8EemoRRioJNDXTcaCVWMaqhvu3S3Rz5CLR4tZWh1vtWJzrE4ox4jo",
  "key19": "3F4RSAxsEQkoPC2nNsT2cwhBeWub8V2W3dvGT3e4fwPdCW4vp9kADX7ZWk3NcxUDHLjzWDV1yYdgPfLLQQuQtdHm",
  "key20": "2Q5T1Crk2Zvcy1bETP7NSu83N1jPqoX4kFdB6bjy2aTChzFFpHaiLxxrwdyHDcH4zVQRFZJJ3rS1d1h6Lgs6f5q6",
  "key21": "5CU1a4xhpVZWAkK4oYhsVBru47L5yn9YFHvDBMSJo5gi2fCA2Cb1dYntyUTAMCQhLXsKeJmcWZvtrhohF9Qbn2s3",
  "key22": "3UWnCCrC1i19tGnNvzTGg1HxZtPXM3QQSBD6tMC4xh6wpRfviTPmjtrj4Nq4RFg9HSLchA9NqykcZBsbgnSYQLhs",
  "key23": "8N4qBEfPjrhp1SF5dhR5u1TR45vRvwtCyYDhB4W1MLp3MZoHGimfZ2PUd3Ux2GUioLdid9eFKaXc41S6Nbkr7fM",
  "key24": "5kBbwyHDxzuLuh4VNRDhX2yrzMeyFhDzmrKddDVz5HFMz3tZJAQfubE5ZwBSb5N3imjqemWKby9bVo77Ygmdb21P",
  "key25": "4ndifEKGie34EPKaR7tTMdPymJoQk8kBmWtwLhdRpFGGCc6KmXGjmjGvn9kGuXrDJHzAMBUjVMMfdicH3299dLgU",
  "key26": "3KNd3tNJJrWFVq8k12EVVV9u3UfqYmowUUM854XXjt2SqT7sJQNAy8Zdyaqc3QkHSPNjnqLdnPEPudGv5649oy2H",
  "key27": "kzj2jR1qk4iJWwVFPFCoSDSy4sceYfpuiNWgrFg3mybCuwQd55k5HPV2V87vU9sA1sXKxwwXuErRxhmAwAh6YJx",
  "key28": "5f2Sjm7Q4oSqVZVYXREkaA4MmgNwuf4Z9btVTDL5BRHxCx47vv91JFempNS7XWkQwJeCNZn4msrGAQnsUeM7J1CT",
  "key29": "5ovRSSgdcSpEoxHMmZZzyr8nGa9RuohqJ6x7o7AYRxhYSbg3nVftCjgHd4dRL9C3k4oEuxgc26NM2aCoHWEwtFYq",
  "key30": "2o7dvkVZEZqFJCHtKT9NP3XfnF8LecKNee2WSLYoPJZ5oetiSWKrXvLpptWVXNAwx4DFKnJJM3uosdrYZErRJW2Y",
  "key31": "4yYzESamkF9dHv7WukLuzvsjwuamtd3SMvSJtHwwiikYkLTg4155tKiiL2J8EU7waXuCT3azyeY2QbjAPLU5dRMD",
  "key32": "5gtDxbbBvNnBeNamm8wZ6hh2LuJuo2uSCyRWWsS3UGsTBxY1QCU3B526PDMJNCdbuFSM63dyBmYYKsunDZyQVaPG",
  "key33": "4BsSSEoaDnBGiHRxeFw7kUVUoTt86S6bASuXabD6jEXikaUTMt8q1xp7zr5wQAr6i9VS5acQJL67EXucZQLd2T1E",
  "key34": "NUmm7A37xnGC74ZVnsoTQuNAb9kpfwprHt8Jkx2YanKtJu46eGZCbxC4UXdW55wZJmVJuDVcDm9MMxoykT1s9zD",
  "key35": "2ofXAW7itVX2iyXvVAh9Vu41KM3V8DhXnFfu9RCFzsJ6h1yHyvAVDRvs9bCsSstk8ik7iVaXewRpZmMw4Fx5sJsj",
  "key36": "agye2N7fiHgVQNGdZJSAkbwkc5YrpqSjyvurA7SyG4f4b7WwwzXKvg3dBEvxiywQv9BrA8uoY7zWr8CD5dgor7R",
  "key37": "VG6Sx5kmbBfoYnb8Qi2FtNqWQ3FYoNYSAmUeWZc5bnnBx1GJf2V8QxQFq4aaLBaTceq5EMp1keqfPeXCH2ogVeh",
  "key38": "4Xgnsa65AgSk8S2MjXz2wn1cu4qxR3z7QFKBhGXsoLJcMMWNjmx8KLJJgGbkyLke5QaN2T99EuTrJo8RyWE6qVko",
  "key39": "5TtQiXVKG8GjJTn9kwaR6XAhz4zakncaGJaznsfbh6uUuT8kxcWSmMZB2YsVGfTyStZ3Ysf5NJZ8QtaEMMKLc5se",
  "key40": "25BtU7V3pcqgGWdh6j26jN64WkC46uLMgKzbNcBsq7gTZSDG2QDMseycENkczt5Wtq2y1CyFEJFMR5unNRtJyxGv",
  "key41": "2Le65Qeo6wCtH3VqCWpauhfZBjbioufmpfpatPLvQNpddWdA1DG85LtPF4nNunrMUPYUm7Y377GupJqLj6Jyqgf",
  "key42": "4UBaPEQ6XRdtEgkjUxMGnyZcBxPksQb2wazCZjs3BW7zmWVRWqVw8LZbjczyJXcJvbeXdxT8NEs1kkwe77ZNaok4",
  "key43": "5ADHynNjwNs7e1maTNn3ksCugVw3z33vdHd5utztK35uNo1ZssSPbnnkB6D5WX9NTyF3pogAqfSn9Q9fEmxAp38A",
  "key44": "4eHgMpTEHocGQn2h1hDFfT9cxJRRrjSjEe4MgCVZfPZMYF97d741VjRFGVoQ2C5YNqDLHdi4sK5bmdM5QMaYGDab"
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
