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
    "32rK8hoof25w4u7xRUUjjjM9aFgtUupHQVjpHP36JjgWc5xgVMVCAabcFNRT6gWvfBnWeXWx1VPvbNQm7g3SCt1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38Lf9TRx6CtmzjBcBrMTX9xZbX5SSrJyBmjuVDA64YxGNCc9NsdqRZG2CPcz75pC2o4PkpxfWMGd2vNZhQyc3i6f",
  "key1": "iVjVZTeHJKdB9aiqquJCMeEcXdYi5GmPSVnGZmimv14jGar46YBDnjVXBbuH3amRtVQN1N5dKLe4DwgSUpcKzdM",
  "key2": "3qkRJ6hMga3R4UTMWZ2Lz8BvXrt9TpmJzPhNQ2xMywe9tVfS7Fa3dPDrz5N8erE1mjW9jeMDLT8rqWdg8N87w5z7",
  "key3": "3zBHzFPgTd7qPhiMzXMu3pZjeJEb411SaZ1wVveoCdoA2XqbfpsVgJDAq8QGu7833ikidERiKzKpRgXM3VVJyyNw",
  "key4": "2km6pjYfeZA1EL7xfFSyLhDF68Wb4sbb7PsPzPJP7hEy38FovG6UTqrPsPwQJ2TkBnsjdR3hsfhDEvqixzTqoRF5",
  "key5": "3DEzNc5c6MjB8YxuV5Npw7XoRTP1hK2PKXHDz31Pzn3Rn3bsZpHJeVr3vmrNvXysnWtBfkdR5pBstgc2BSVfY5YZ",
  "key6": "2WyRALFnaerphyHbgfTJdVs3SKyeL2jqnNFj9isoJXVWbaStAJwHY2zESScuGFg1eGWmNhn9ARRuaTCJxdbu4Vgm",
  "key7": "2YXZKxz15zwUVmWcmXeNuJKYL8CAbAEYwtPhcLqQ565N57hTiCxi7q1hw1e6D7HtjzYsYpoZJS1hbqFhxsLJQwfq",
  "key8": "3PKp8VNRpvHpMxtgc3PceCu2qXVx5tKVWvb8HRN8UNpc9dUkdxUKo6rYYcao4hEFQxf2kheNKRk61diEQNKymFVT",
  "key9": "4DvG5bFXjfmB7EVAtzjKyv23EH4XeJJNBq78n5A2vWTK6mXajt7fmehafS3D9yyd6QTPrdgZcQZ5NA4TnuVU2fkk",
  "key10": "2ACKkXk3sLbneh87ZMb7dnbSpDft9DhV43qWcThGcjZncgyHFR3AZqHr1JhhErJkxWZCgsXRVjnYstFki6EpVG2D",
  "key11": "65JEgNDYmd44HxWo3eeHg42QiJv38GTKxggrKctAursuQ3hU5n399P5zoGzgev9JwrFsrUM3WpBsUY7CLM2EpfLb",
  "key12": "3BDYVBq2U4LAxtTuQufHE2FvKhQgC5wXbC3Kmc3GndABtbi4YmH8v7JspBSva9fvF9wDRcy8m7HxAHq2B3zbnjMJ",
  "key13": "5jfJcvtEQo87HvswfJYDVD3BMhghiNukFU8QfmggVz9Rm9ZqHNcuz8bJ8Wnr7fzYXE9TeRJGFDv2KJww8YZ9qiFV",
  "key14": "5EVHnbi2Pzckfa4HvCF7aXmWuMdbdzsFPT7Hx3P7RCpig2n9UboJDv4L3h1svMg4Dt5Aq5j32mFQv77ZSaRrY2xr",
  "key15": "3jrTmZWNCtn93SNwJXZ2kEZbX4K7WNFcMCMgB4RF4KSpc1HZ5695y3ofH5QEpnnoeJhbgzzKpTM43dpsKLFTCgCT",
  "key16": "4xs2TafiKmxbEYwFm71FRybskeU4bCvi5Q88TmeTo98SacdmUizPfyHyZCUpjMj8krYr1mTgeTGd2gBxZKuC4C9E",
  "key17": "2L5qoo6692hoV88XvB6v7wLdqnCj5EdYmjrgxiAhCo4Tdi91G3Q33dE5WUdJBNhpuddeMozzdJH94vsHcuJhxefW",
  "key18": "23GiCkTiTKj2hgSSeb83RztDyLHDBEcqrKcEPfbJVVwfGj8WWpYdpzFZdy2ydvXx4gkzqiqAUx8T8QpAuumrHWEQ",
  "key19": "2FLbhyHA6b61SPkWTvjDawPtHpBayQjNrShpoDzqPKqq5ztiWhvRruNQegZhAFPh3m9oPZTxLcEAtE8Rd89Vusa5",
  "key20": "5hPDJZr14LbfYQjeUdRXnTebLm9ZY2f3oRcq3QVgpCdA5Emen1D7Z7GE1prj59hF5Jsc4eECv2ESMSwsmfGpEKFp",
  "key21": "39PNkZXjf4A982tQaKNLKMK7wba6WsHg3YYN11zw4fajr92LaciYt24jBickBDs4W8Mxj41nwDDgVb9FUfqd7mwg",
  "key22": "UiaSoXBDNzq9ZJNV1wf8yK4sWjML83yvpdbWDVcHKXpMuqk6cJTsFbKV76iDNutQSdQg2iM3uBNSiwdV5zpY4bX",
  "key23": "3byx2XPuAHQmaaLeJVLhR1xfYByGw6RtKj45UBcPvE3Ut8Hw8tMRgc6WZCAFckL22rtY8H4VapVSh63JyFiQe3xw",
  "key24": "2LentDBPoQZ2dQHR8xuGAmNLWZJBYEbty8xn98YqHJzndZffMujAejkwUPHLqdsKwMqfSFGvEKCfSxQVESCp5yX7",
  "key25": "2TxpfQ892vfcvtnPN7d9ZXLZrFt4jLHXHRwyUjsx33azExTdXUvjHj3sdFm5c3J1ngggBazxWVikKuxCFQd4zofx",
  "key26": "4iHMCBtv83VWEWPUXca4uXLZBwkvrFa76WDAdcirw4ZrN4AvaiF5JxLYYkaVVjBKuVZu43PrHxEVnXCofK1nQTzU",
  "key27": "2yRTph1HqKELArX5D8ZgBEHkBBoDcGfeVjcw4Q8Qjd9ugwPy1fm1e4uZBxLm7uBU9Q8KgdwYNccdq9B8Gr325YyD",
  "key28": "LGp5ej8zAenPGmrvanjGUnCyxuEXL67ySSvC1Wn9YGBoQkbqYwDEX2o6KKHP8CFEeuwtFcgn6dmsUF6tmcyZBrw"
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
