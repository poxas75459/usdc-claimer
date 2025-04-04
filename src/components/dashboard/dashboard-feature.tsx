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
    "2md9d8vFumt3UBb6yxLWsyyAibXYaUA2vRDeajND4tEZM7p13oXQ55k5uTRzzCXdCQXhAuMALBkgG9SRAQfqXWbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TRvQGY5bCYrznzjuNaCBq4PwukZgdgL7rvDtKG9RzUyB6JFTcMH3PD41995yepzttKXJ6wBFVgTSy1Cce71iA5v",
  "key1": "3V5tERq9ENXkZoxdo1BkJi5HNVXDv8S6UuBnzZSrGjiif8HvmG7eAEcMgpQ5XgcBvp3oL5czqAybTPhgRmrQF2cE",
  "key2": "48PTM2m3sWZt9Wu3Vn8zsgbKUpoq3keGa226swaDyTU4AgWQSp4khgLT9qdRvFPoVhZe364tYicm8drW6W1tnTW4",
  "key3": "62WjnsYcrN9DWWKtYPrWDAEriMLeULTtASxZ5oHUf1beJ3ctPYiXJVTTyeFtdwv2YnJhUp2o4123RX5RSRQzNYYk",
  "key4": "3S8tNG9tncmbUkDJGphMXUJnV9TD1Ys3afA37ZboNaExxoyPBtd3x6mH9KtDxcrZkwCMjP2nLnKtw4q7zq56vVDD",
  "key5": "31LdbE6VtAYrepq18hkppaEmDxfdByaW3UouGzPijJWS4ktZYYiD2w9Eu7QoyFMM8Ng1TeVFToWf1XbVTruMFKM9",
  "key6": "5SDkgXnhhSrJHN4TRhcty3VoebBk1RptkQoL8i1c7cfUjSADufD7zzQEbf6KpkF4B91GYbpg75CYsC37i6gziSvA",
  "key7": "4JK2A9GfqdWfgsbPgDFqZBm85sPgP2T5AiFktfrq3YhAjCBfUzKPmqkS4kxQ4X1DSyFd5RajZf27SKCSKJzvVkQ",
  "key8": "5tzerBkDRzm3JwV5HtLzSD5vrvfeocmTuucugdMMD524q1yQKbp7GQMgM7pcjwy1PLEVahDA35fTjLEkngfwYnFH",
  "key9": "4baTsCi1Aygw3K8oyRnyAe51greGRpdzMMMSs2jRL7PaHZKbShkRVtYsJ61LR29LcUEc2sy6UDmJQY57fxP2mDR5",
  "key10": "39qRRjudWcpTTZkbix9koPPK3n9AidHHyadRdFkbpGsPQ38at8niDXVfDyiNQc4bbyjhj3bhCJiVCkKhb7pnsN8p",
  "key11": "4B7GCcSzY59eJNM9NTn7UbksnUiiHXtpYPDCQWo3hukjm9Nxm72PAJgLMye5DQ2UDZZrVNDy7QU97zGjY3aKcmCK",
  "key12": "5mungsPiFG2GJnuBiPWTaFkKzJL18wFh8WTJGedUu7USk82WCWXQsVDhoU3q17ZGbo3avrySUUXpVp6fqC8p2ABw",
  "key13": "3zoimechsY4uc5W5H1DH57wRu2xCMnTCuPpDJD74D43aZjU75DYzb5yr4hhndwdQPSehCtbnAAULFGkhr79eYmpZ",
  "key14": "634GB7sxmAR6WqvdLchJRiyZpkejgqdtAmz28nadvRCLmpReMEFuW7TrgDZMCuWUmNqSDo4eWUAyUysto7Lb9rYv",
  "key15": "3df8PJ5roXtvHMcEXKgUCL5NZbLwczLRdGndLo5rGR6FUGVDijL2EMJwQsiqb9PjJqkW5Ad1eAzrf4cLLBhLaByQ",
  "key16": "2ivxGxSA2M1C2TtiLbDsvnsApA5y8tTX2XJqzagTfVwgfSHguBQyWM39PuPbtvBs2cNJSt6PYVVyfQ4kDju6Uhia",
  "key17": "2os3xsuRDwKoRCLkf47EMBCUNi4ZF73PS1x4UzeMymss2DJ2n8ymTDcDakK5fRuXTr6oZBL6ry1e1JPGA5AhsoEw",
  "key18": "3P1QZm3NdENdyByYmY4KiZDp4SYMMmLrhgCZ6wEhopLxdn4fM6GDe8muy89n1kgWmSjBmjqtTfKBgpYKA9YYHZrU",
  "key19": "4v9WvvndHd1NaUBme484XDeDdNmLiMaXJqoEssawfS3h4eiWD7dC1JJ3mLE586xdVfkjheoiVmc1cvCaa3cENpH6",
  "key20": "24PPUAwgrfcvR4WWoM6mui6xycS57uUrMXSQox9Vf464Hg3sBNVnVkMFRfw3986vyAnX4SSfHnCujCUSLBEcVzXf",
  "key21": "4qNVaQ8wbG1dAc8S9ALfKJtmLixFWufTqtSibRZxC28dYbpdwE8FdWrAE2PXYb8j7xb6M6rSkAS8kftJmUvcnVLR",
  "key22": "5Emtkpo73aXsBvY5cZtThsgDDA8iUfrXueXkm2ahshL9dFG8Uz8TyFiCVNoQ1HR8rMYvwtAVzUcC763fQA2M4zoQ",
  "key23": "R9ya91QLj6juuinoP35uypkDYyEQToGsRCgj9hwhSXgduxS9aJXTQzXmiWDpCe41yFrnMazK4vBjWU9NKMhxPbe",
  "key24": "3syEizv6L4qw1QZdKKMoiEhwLv2Fbx1QjDnBxPT1nB8LmJzPkYKZfJPTBwGjHYr9BfZ7pLFd2r5Y1SdpUrWetNBv",
  "key25": "QKgyBm3bRByXBMMj4PXRD9yb6qxFK6FzYhuvUA2RfCrEL8LdyuHVcb5qypGQG9C3kjHN59qYMebzjbL7yMbkd5H",
  "key26": "1JE5vVyasLU1ZcXoZaGr9NhmDR9Me254qyYhFLuPUh3dTiFFdSaipcsPDgABubY8Rezh1MpcHA6NX8xbH39VtCN",
  "key27": "5jF23TkBH4Bm7sy5644ubGUXu3ejpzZW2VZ3pAkq9HuBBWmQkV2QAfKZH5wPuDYhjmVFZHovoZJj5cieEpE9EJ6p",
  "key28": "3ieWsZLpTfPgh87tVXzvaoJUK2UM92jWDLxK8sphtWg9ckXmX6uuy54Cvy8G6MRTTqABLTbX53RQPTskqKVD3YBj",
  "key29": "16sNcZ36SEvCu6QZGFHAKJtkXBxiTUohoK35fVytiqFi1coo2yr7K1t91Bn2ZvhBRksPmeCVyFeQ8iYs3gKBU4y",
  "key30": "3zJQTPxPoCCZSBEsz95cKyaaEVatqTredG4YMS9wg2Ey3m5Sz44CowYw91pe8cMyGmnZGyqAevhN9oMZSgJ76c1Q",
  "key31": "2rt6T7PA3KF8wVUGSDNieqjsCyXvYxA2SQEAS9qNSFgbfx5vSRStrzmKDdxUnqQ5qcw1PCt55t972RMu1VoD4rGS",
  "key32": "MLWargVFWbnLEtzMALCGq1YuotrtZTVgj4dpVy4u9o3vx15sAGGe6ZhFdgoBjppqmBR99SEA4P1jiU3u5U8QXNK",
  "key33": "5xVEBHxCas2vivwnaj8R6pS9bXN7dRD5ttFNy55NcjAwCUJGE2M6A5DHPzpCndyTwte8twRjVXPepaxZwPrPEikA"
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
