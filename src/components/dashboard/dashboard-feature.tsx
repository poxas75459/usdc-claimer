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
    "3bjcYGj4RCcUGJdx2iRatuPvufeAyTKpEyDVooxTkEU13YkpBuMqjFJ5wjeNM99LkD6Px46Q42w93irZgQmyBSYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s6HExwfiKrRrywNeh3nBDAAxrkN6YL5SGXqYus8LGkkCZ9muRStJ1vA96dkHMzWfkQ789zdeWpJKWKSxq81jFP5",
  "key1": "3P4zW2hubvguQPd8BXafNNxt4Mjbn88WqjcghRDEVaSpcvhUsEKVsi1TLQVMDib95Xac1LfYmpkHyUAKyWU6QoTg",
  "key2": "RLsi8e3rDaqUeVdBWUWMNYWQm1nKD7V8AaTYLrfLXE4zpXQDMdWmVMoNQmA8TNzcFxsjDh5JX4gzUFeh482ZShV",
  "key3": "5ZoMwfboYc87cgUrKkWv8byupuUokMHtKcTsD3iVZF8N81AhweFfmmJ6dcCzTz2rzsG6maYwiJsCHNo4q2PKrQAK",
  "key4": "4NfZa9wEt74p7CUAAaecA6sJudGEkcJ1XhEH1f8cLmLFYjmR7VHu2a4JQHcTJghJik4XmbrKaFwBZejT5SEQftRS",
  "key5": "4NdsdPvzSEoLLtBwQr1y8EDwuSBgewTfXqao6J1LU9V1d3GMH9A8R2AQSsMLNfkgk9PTKdrPzNFnmvUaPunyHrY7",
  "key6": "4siG9HfLKS51jV769cqaetercCFz2NwQG4X1XRa1e1M6n1y7uSWVxaeNJaorw7EeuSkK9gBA7SCXbohJVx3pcPx1",
  "key7": "24XD3L4BSbtEQyVgAHSQ3iXz5pt7uu7spyC5ag9fYBVyqwk95qv14xqLLVXT3pKdKaqE7c9gf6i3R2u61XpXz7a9",
  "key8": "4BhVjNL71NpuV3QDwzfNuhNxB8jgHHEK5scgbSdkmP3B7ZLWkkAL1Ji9eoNd7pMPUXnadWXUkyG3j6ima5cWZSYn",
  "key9": "2r7dHhf94ScTLymYkcYiXJWKs6QMHYu9Mu5WVUnWwjmjKxwEDo2dCV3hEoDMMrkDkNx5fFqLoeP5tfrojthYBxep",
  "key10": "fV6ampcnVaTvSmfdcLoWXYCTqf2hsm9n6UPAPYzrYiB8F4qzAb3xagUNd3CXfj3tz4nfxaVvTucZQZVjDMvAGhW",
  "key11": "2LnfvihKCCGPRuVbVb9LHtZasKiuUdTL53nYEmatpzKDWZvcPqed7RmbET1n23t9nPFyyVTL1b8XQhn8tHSiqTPG",
  "key12": "pGHwyguqdSHs2PpgQaSn3eCdbU8eYJPQBuePwKFwwgT3q1ftA5FM2dx7wmo99Xx7JsXbqgk2MA87iY9v58yVa5h",
  "key13": "2i2qcBcjX8tFoLyPY5XKezjwZh9zQde4iUEciVJHTQTApCZUyF66onD767caoCkEGxkdtwkPwDviFdF62SwprXWv",
  "key14": "3yZKWx73sq8JDyJjHebwYoDcuvEQLZrRrrZ48NEJUsu6UGgf1FLaUWHMNgNBrJsgbSK2svSHqM4aytV6MWqHgkqM",
  "key15": "3eF7yFzqtEZVzCFg1cX6FrqUoR4tRYCGdMBBBQ4WasK36uJUhSaotP9h8UWddfje5A1MKMfag8qGdjdYhhibVv2Y",
  "key16": "2k6qSRTzxfoLP3yde1TFJV4YLBThEEEH8bzHrzTCaApojArKwTkRQa1oo7GYx8EnamKzoxJpaEfbzYiVB7tRgFGZ",
  "key17": "3UwcdX8Uf8czK1Pznp5NVmPVPKUWfW5Us9bFnrwaTGJnhSUMU7xzehruqSnz7tKHH5deeeFp5hp4uK2iyy5rEUm3",
  "key18": "2cYDc9wfUHboG8kG5ziN4ynZLQr25JdLRgwoaSZW1Hcc9NBfk79tYorL7zyEnvHqfTYLtMoYQCY2v35Nk14ZTPwE",
  "key19": "5d5NbM73mUjSdKzDpokHBSfJ6vnCub9xJ8PQzbHmPgbLmCmq4CwZwSQQdN4kCCNC3Kpmru77rSqVTMXLS4BJMJPo",
  "key20": "5J1qxSPmihk6Eg1tjKsAQ8RwS8xSeYuAyyK3UG7W2GJPzuxiz9wNMsm86T5D4ZFav6zL3KfTqwqTjSYcWwxmCGwT",
  "key21": "2U5aYwXSjivar7ii7Svg4fRZctAn6QkxpEhjd2GHtp9idtZtitpa43khMVRFR71qfyZUTiy66ufeJBrV37ewrgtM",
  "key22": "24NrpF6et2K2YKVZbBgqLggGPbMMebn4WppHmwaUe6DHCYvro3ibzmh3pSHpzngnDoHaQ9XxzQs9YiqiTiv3dTvn",
  "key23": "38MrJ68ALWYE9kVwi97ThvqvZECeriCZ5K8K5i1fmGXqDczRz6b6iEWRy3mFGfSiSCYWKhG7mREcQV3QVyVFDrXu",
  "key24": "4m2uerYJZ4FDArb99D3CaFYW2o9f3cKQjqvHHhE9nzjbVko3VKJRL638DkCkYHbHFvGmjU6SPS1DZcbiAiYM7mKB",
  "key25": "5QibFhHZgXFqrSE3NJbUaCJkpPiYZvWfEuJqW7RNuK9NpTKTwn54tMjDbLSyFXpk9gRa9R7N6bf6UnqBEvEdyciW",
  "key26": "4uyVcHNykXJar9NStWo1gF57rwsnyJ1E9mwfnU7tgD3xHckGahn1bbm89nVYy3PJnKKozZbjG5mkuL6fqXQcDGQ5",
  "key27": "9Lgh7YGJ37HNfAkzg5SVJLSL7j3YsTeidaF6awWy4rQx18gy84rCDY5VhruqDdY7GJhWS7PLojJFCqvZphGHP9n",
  "key28": "2HXkNeCjFpNfqwiSkmXQzq3ntAcEFHJ6jxsMu32QKigqLeVXpYvXTP8PkfAQAoWreFQbVyCGVKu2V5Q8br8M6rxa",
  "key29": "BocYKwsNu1iuCuCuJhV9RqeMKo94LHFztTPRnGohfCzddA7Ko5o8Dvf26Dpg28nykw6n4XgnySXkAPig35qRMVf",
  "key30": "55d1xhswWnaxUpPUY6HSzcmkP5MFcCSxn37T1ZLE2Co4w4UevkiJDsZGc5upEotEB4d5juyfdSeDEbKdzKMjg2ba",
  "key31": "5uhVz7Tsbe6iZQvX92gnjknVhd8fZBV7dQLSS41zFG6FNQoig6J8p3ZDKPxsG5rNx8Hwt8yrY4zPR2Puc9QNTRTM",
  "key32": "BztVZn1YyZ2BSka6X8TRnpWi8GAj7TGdUyCA7yWq6xkCUewvexVE3zaoDpSJ8YzfiHRju4QAL1zrjeb5YoJL1Xq",
  "key33": "3ELmz6yDsA55gjVno3oBVJchVbs2dxwLJuPya9bJosxp83t9a9rqM4XMQGKneEuUW7U3Neq98MHfDYEYbdGRWKVE",
  "key34": "5NRWYD9LvwE1cNn2X7RqXniLwA2rpAuarLdvxdUZkkzT12jTWRpCbwLf3r7zwQ7xpeH3vH7kLgUtromA7qZFroEW",
  "key35": "2TtW2YQhWUDi727zjVx2ZYLkcy3DfS6PQ6UXSVcCt9CWmRVmMjV6tuoR1maTRxM7NrKwvdLTsYZeXgCcV2EPoyia"
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
