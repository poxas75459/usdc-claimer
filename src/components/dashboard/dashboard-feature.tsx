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
    "3a5PeVaXU9mByb5gw1kXzatTfnFqzRZhjj7ZqJZQczHLCrJoGJofefAE7xeCEbbRQYvLfvFzoM4SBytrkDACRyxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x4vsJm6Q9c8SXwXWSPUMa3o3mfdTG2zvxnERaxs8QeCU7t7hnpYTCMfab8TjcgvS4V8JTwrpfE9GvZGY23aUMUk",
  "key1": "4Wg7Kn8LSJiRy372upAP4SUPt5EFHeo4UbFjG8eVuo4aZ7kjvWLCCTy14xr5Bph1rwX7oyvC2z7YbZe3i1UxvJ7u",
  "key2": "53NZiZV8CJZe794uE12vFXHrnSABvDH543PmnkquetXmdtH57d3B8c48hLYpNZGqC3TmU1FAFe4Rz7tmfCWxLb7z",
  "key3": "4VUWyMqdmLFDdE2toz6RyMdeW9sq9U9jTAJ1AN9HEbG15LuE5edwY8Y293skjm4YwwRq2LCGvc6Srhwc79EgKyj6",
  "key4": "3QBfWoFxqbKdiSQGTbNPpg4mNEB7XacEQz4VxWBa23mKU9LuSJWSDhxgRHn3bSKGS4HkFq5mMMWHStAr1ngg3Ytg",
  "key5": "2nhzndotVWLw5eGyYjREJRRSqy9ihf2Tw1gWLL2TmYbi7fjTRkerqZwHK9f9PFMpAsyb1JVGUKEzwkrWTtZVtivS",
  "key6": "ojXesvpCayy6BvkYuMcQNsPv3AXUwMpKAUw1pmz3G7SP8if8rWZJSMRsjPAKc4BeLeLPfbuxANbSuAG4n1wfF3T",
  "key7": "pU763CaFLxY7ed117yrCSwbwJtYA763JFN4K9winhtJjZmXZRBbCHVPvtG48QQEjnW15F8iQ8u5C6P6fonX5VQZ",
  "key8": "3zrCfxLGdG9NLn5RVyfNdb2iRuRRdZYRAy3zN3GooLhZTVKn1kRVJ2gbnSLcaZUcs7jsmMpXGLDiYosvci95Qnhh",
  "key9": "4VRmfVwYVvM8BTmYWnjArvFoUB5BS83ccfzAbm6Xiy3v365JaJbS77Ugqk9ntHWPTUSEQDuQ4CFFEZHxqTbQt9NR",
  "key10": "SKtW1xri6vx9XyLq4M9FhaTLQvjigYxo2t8XsMzshemXqb4wHcJNXNLp7VAKjHQ2V9D7yJ7Hmo62qtJuYzQtf42",
  "key11": "X6zoErRBFuNeU9m55sLN4EQB8A23oJbo7R7mE8zrs8EYJj5mTURVdcrxao2PUCyGsWmv6KFUYoqXgzczSZ2pUiX",
  "key12": "CiSuKfrKuAMuLwCYCbDqbJWxQyVWLeSNaqwfHDWs6NJMoXTfRRssu2sbKGJUymfhCTY8KAuG1kZ9m7iYQEYSv3R",
  "key13": "Cyea95rzQvCcdnKQw3Yv1WUuku3Q7xVWeBBjNAp2tGyZGRbL1DGQsXKDTcYM36frjtgBJxvSAWh4mE66rUfVUBc",
  "key14": "3S3jhgwj45kRvw7LyeEMjo6Q9SSLhFUtzX8JHS1qWs6ZqyYowQACKJqmYLKBxPS6p82jq3rfjA4CxW3Ac4umDkww",
  "key15": "5dgzvf4ZCHRNF3qy9N3ksWtMJLSd3ptVprXzQBqetS74o35md8kpYwAPphTtJoPoLLypGcGQ34Sw9g1Q9jkkSuwM",
  "key16": "4epoVx9n3hfxT13gPNpBRTKGL3CkDyucTxEMQkSW6AGagKziQiUytp8XYiYkZby1ZnNEKwYyengUiP8Vz9ncTXMg",
  "key17": "3aZeJ8w63trGEyyhMMFB5A8ju49FU1TpWYv3S3Ho1mHr7tRNXqUt7H3WsCnbvxpTkqu9uqkowX4i1M3vgsv7UGYc",
  "key18": "4QTPJgk74EBQQ7Y9yam1kgsQBLCXGPdDxKh9tBkgCrkUPaJWPWhbCGyhuXgzUQeZ5zptfRxGWw2TQ7q4eBVz4rz9",
  "key19": "3QsHPjbuiG19sVaQbzXjNkTHDB2gvBFL8pu4vTnGRYkwsiAzniFLgHt8cg8hzLUzitraK8zRmdXKWMnAhiQx2qNF",
  "key20": "5Ex2xtMCDdbSxGLTNVEkebqyLxc2qfdzHxSKbhombp46TNWQFKh3pxzZ3Hvg5CFuV8RthV1AL9Y8JDaE8vuVL28A",
  "key21": "23AEvR7ydcrT4BQFE2nKKNQHzvzc9KL2BU7ofiAHcVjRYWrBVawTvsTuZZeDUYU63UrYLBqJnURu3aqg2zgZnbba",
  "key22": "2GvkAkLC91mg7mDcNP3BHJCAgwC2nnUes4vFaH16AQU2pkHiy9YsvWZkbAUBYyjK5ya8SKxP7fWxVa1T8smMt15H",
  "key23": "R13bZRvvFc8mWPBc5dD5RLV2VCoMkqgeUMwkqqcouRkeZo5dAapSfsjrAJ9FrvYj7addnjruTsg95uaoyi4fuh8",
  "key24": "3Y9zQRkmfMTyFUEvh1BRuWm99sZMHCuGdRiKFTRNByWb63tfpW5ahgJweVKBwXmGHsZB2G8HQogFvGzvkXAcCj7P",
  "key25": "4mE3GaQ92LSHnFLq7BpA6pgvsL2Vmp4mDtSSqbFWTL9MVUN3DtG4yLojk5uA2F6gZCQFCnNneyfjLtGmxAQNbFs2",
  "key26": "2oZtNe2kSp6UafVrHMnhkrfeZZGkDbWgVaTL2Vs2tsxNy9j396KQLRMfHQ8QfxNQHy6d5uSHxoDNBanuVqE6Cddz",
  "key27": "4NDzLCHae7gyVpZuf8tm8bzduXWtS8GkWp72AmjzjfWLAJUdmakj2ZivDRAFhohVWTngggor7xbbUCXaGkFtPCtd",
  "key28": "KMsCcYBgB3VbDQnj65WxotjdMiwKu23Ud7zUoko8E5vrowffogQpPv9d5h2yZGZtA4SARjMN4H6c5WfKmqysUiD",
  "key29": "3wn2FnhsyuW1qvinMT6nHhYRZEouQxx3u7uSdZcB4PpSMG8TNw8LbmGUrbL6WuV6DdSgsBq583TttMkfNNPnFWF1",
  "key30": "4RxjC73kNnsvEGbrtNUQp1uLLqefQyztfLrEoxf2RY9DuGTMvk2hF3apYuNaG1knAvjBC2rBQbvmKaR7LuJR3ajD",
  "key31": "216KovB3cDN8BVuSP8AczXEu6PYG4XvdA2CvZCLN5EUcT3w9mNG3wJhWevBe2Qw3PYbw1vdDQZxy9iavbhW6yAmu",
  "key32": "5nXp5mdpLqZxXrwyUGQSBSBGVAEP9j1BHJ27LZtJ6hJCunyAjjegkutTTSBnZrr6WrA82jWoxyq5k2NnNb5xHpRD",
  "key33": "SaXB2gRwrmyV9wrD58JaMNtV1gjiP6fPhQYNRHCj8PUEmvKEEVmkBRzNAKDaXXWQoeVFU6VwkEEZM6c2sYFzH3h",
  "key34": "53g4vNEvyLDXpRiib9p4PZVKjJJqsoSoRELrbc2fMZd6KvEmGbzwSHfxGiwmwMn2KJ3z1nv3JpVFmBbbbRiiuvTd",
  "key35": "3Vv6yZAZFKArZmUcxA8nQw5QVLHvvN9muyWC3vfwFDkjG5zKzZ9qdWNsJFGtF15wHsfKJXH964FQt4ff9z7rDtmW",
  "key36": "4AhRyhGPfFCXQhkdcLADzijZ7r5mrJqLSz6WHH4qgwD6DRfBtApysUD2gJ9d2KNFJ9mXbJ5EbBiS1uHUXjMyR6Gq",
  "key37": "3KDw2yXsqKCeCT9FmBGWADHoDAhDVb2t8R3Qp4cbNVooJLohBouydMa3SEE5QS9Qsr2nPptkf3WGGqYk82aEvi76",
  "key38": "rFGwVMYyLtd22AaN8Kd4hRVABSxuzGvjqq57x5YCHQUbwM7jJraBZD3AieVzXFtDF26LBBqdYbV3KWVJs6tPWDg",
  "key39": "4PZ8zScXwtczkafNEWaqXuhHbhh1HBkACDEhDsGyzhpvFMsr8dVacShbpcNdcyehMacugxr7vQANau8d6Tzv86qy",
  "key40": "KD8yvQWjnSMQRUKhYxh1JgNJdLNHXfaJYQDBghi7EShhmgVNAK43FqM13rueTrJt2VbG3Ta594vyenwm9NmL5ys",
  "key41": "jiV8pcaWynQofTF9SYr4Um7PNJvVevsUmBQAcHuA2kuAVmxXvKmL7dBEpTck8oEWkTEet5RQz5oaqRoP4AgJ1nx",
  "key42": "brPtBVCeChHm67SU4ohDF22QaU67hZsq6Sr6xeFDYSJXBHJcoyro37vDk4jtDJ4bKD2xNKxcPQHL9spznGYmZYP",
  "key43": "4A9nkpfHHiDZmzZyJ3dT8h6tMiyjfeUk9R8erH918nLbwaVw5vjAKNGno3jXkwXTQEpPoBw2dkDp1uvR9GyL6BVz",
  "key44": "K7bqwLrm41SjnoxsfSJJe9S96tcpZfEFd1hFFqX88KFQNMhCDh2gUNUtCBdvo9JojVj2fZAsXwyggWmhM23rimY"
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
