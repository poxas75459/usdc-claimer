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
    "524imwyw43Sc7Zx2Dhy8cVv6eGGTeAgv2hVaiXx8BESfvEtG4Nn7etxLzdBc7oB5fnXTNyjjMr7W3mC8CvVQnhQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ASetUxgp85mntvFaWV6qGQNJe4EpNb5iguFan3odWqmtxyK2NaWE4hDMokWH7H3kycxL4DyLQZMgT4BVSBkpMje",
  "key1": "2MR7aJaqnACi4es4urQ7G3hwUzKxV7kBP31ywdAHQXJNu9Z8JbDzX42EJyjtCUQNg67Q2m6G2yLsoCKLLEKUJ8YR",
  "key2": "4CKPg4sN7a6bhuFPeH5ZAFwRCAqEfPXdx9kUkaKzeKpuznkFmTZBCVQFtWW1Qo2Af1d231N2BKcsY2oLFDNSiUrf",
  "key3": "3C7HAutDRaoEby9ztLd1ZfVLaEnuQ4hcgpyai98Wy6xA88EqeUGex4PMadcZPURmTn3yWT6kKJKNhK5Tx9saB7ky",
  "key4": "3EbptSFmTKVjXmrTzWcve7hFFsv99BiJ9keGz8VwNhrkvQSdVaaSWq2BK6crVM3Z3LNoMH83QPJqjLX9LscxoMu",
  "key5": "4zrkmywUyeWfZNtYHiie6HFpvfk5DYHkDB6KdfgDoxoyvtiwV8C8nE8zu5MatQVeVZ99tfrt3jhGm81n2nixNCkZ",
  "key6": "4AhsAEd9CZCcN14nTQSDMYkpjtZwsbatHJNqhQfoXSo2xaxyLFyR393NThy3fR7b654zJskmCU9BLCsxjiZYef2U",
  "key7": "5wBNhoCzHkKrAw1yf6xuScn8Xp85oUe5eCefk71D9n72vcwBEzgMdUY5oj8SQMTmBXnghQvKKAnC3DQqiEJKVv6V",
  "key8": "47eukxarPy2A2t4B6VwTgxQHVE165gn4UrihojieCtnVbofpUk7a9HNVEAAxa1zdqNE1Kz54Uj9cyVJAVbx8EsPJ",
  "key9": "3SQJQ2mpKQkQgF8NSudC14BWBECWSuGGqp4ArQtUaMiDBUaMKuW9fbsEmVpYfaakTz6XXiFrnWNoNLR4mFdS149E",
  "key10": "5JAQyknAgHNLY99ifqpL8Z8azQvnPUsrbkuAeeLxs8FFq7peTX9gG35FQxXmoQCNM1wWzL9LL2wNrtprfe3JSFzd",
  "key11": "3a9iydSKy5Xmc34HJLVjPtcYzd4A8agzxi999HspubVV2UbSYmcpMNEtr6GYa6bBqcdXq4f9Z5R8FQ5hEhGt6oSH",
  "key12": "2PkQgbLZQ35aZUTf5E7fB4W88jWDYWLNQWHBFk7iQ41LGQUwnU5ffkPBg7i1rEvFADVdjroXV9rFDvHAM4wSebUq",
  "key13": "4gydpPeHwfxip8sin5bKxyq1vgrQbi3UtLTJ6oz8Tkf2FvZYvXQh5vXUbBZ83PEKwpk2TMVzEZbu5RUPgxhoqn6L",
  "key14": "3pEbXzLUS4qj14ziqciL1vWVeR1CaYZbjttQn2BRi2W7ePds7mQQVGQGC6KzZrCYAzTL3aEAg63jw6y13xDpGbbj",
  "key15": "2BpUHxpSbSgubZbtgZNGtkviWGeh2qdpMYXpAS3bWaTdxiW3h7H4cZDsv3CNdGZd4Vcs8ihLYY58hFvnd7PPEyAA",
  "key16": "5GCgDsbwUeBFqsi9ZAWUsLeEPLcZdEfT3UKEmvFngoTaNpqK25a3j9CFvp8Uy3TpMitTHefpJb9QQE5GsLoZpstG",
  "key17": "3iwQsU3oY9vrQqNv2kSZiBWNtgztD9RTJwwMseyXdB7hV8yrXjXTRFW25wLSBrxdFjGQsVMypY4eL52qZx7xmGRu",
  "key18": "3Y4uPV3UFZrMv2KAsDR3VFL6vnmX4o8stfZXNT2s8JFGS6KgCQ2PEdTwGy2XXEdfk33yAqBYXobwiWvkumcPadke",
  "key19": "2HG8Riy6Wam8Exs8V2F32r4HazVicVbZkmpwG8RqYATHVv3kzA1pzvnbYgJdnGQNtq6JsKy6xaCrZtngr8wSc1aV",
  "key20": "4eDPTaU4ngyPAcHJX9rtqK5aBBGCm3pYxtUY3E5bAuhDoVFMEa7PvZnGqnpZZwhymTJ4d12hTTqECtiuNJCUmJb4",
  "key21": "2BRAk3roUwRhtJ5okDyMESTNc5Mw8AFmN1madNPNB699TKJ3ZnLDAeaGnYj8ostTK5wE3xhKAiuow5MZTJ7pHtxe",
  "key22": "4LdJyCfB7YySeWPGpfUnD52MqDNzNGtkFn9shHJkJXqd5Lwd5zYFzBQgCgtCmjFEZxu7evLtbPMFGQ836jZcLpAk",
  "key23": "3ZGe3mg7rPrHMhXwZLz8gpkaXLq1p2opsnBsjQqEC4JkyQKkBXt6SPXSwtpJhzkUV8zxehB2iYu6kgYs2WRT7vJL",
  "key24": "5KakRdiQF5UFBgKTvqzb3wzKvf1PvqyoZUFeCV1h8DZa9LfTP8Ah2f8Uwkisu7oSTe5rghhfvnpgZhmKS3fudkVc",
  "key25": "MLnBZ2HqNAYBDL4298Pwf4wBCPES1CniafCfPNW1NHnPQpe16FbcZsUSgXMJgAv4rC6myCGxMziAdXSnixUr9QB",
  "key26": "rKzZHYA64ffXF33VUmkoQEbSSrLcLUBMZHc7YQxn5pZgHjZgxRYfwPQZdSA4AvTEHJ1LWTVuJVkJBcKDR9t36MT",
  "key27": "xCbxWB8WMXRCvTGniutjHHjktzChy7Hr2EyHdmzQP4JdhsWHfchZm6ctGZs3chowTTxeYqkiiSnn4PYcNFUNNho",
  "key28": "USC136ReFoVE36AXEDmnPtrMaaFmmUs6WL3yxgxxqtSTvcG5vwVkTKikamAtYuib8EC33tMX3TtMk876Yo7yg5f"
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
