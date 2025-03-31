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
    "D1EEqGcwPCCGZMNARfSDhSoDXgdo5icTmcPerdAxe9k7sUCHn35MxDLnKmKvncYPn2VLmMFSsqo7R6tVX56YMKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wzwnuSXtvK8GzCWCRyyaGE8oY1TYAFwKc7cdDbSrguL5977EWShDm4HUBxs8NuAqKSzKYVa9BiPhfGkyrZd8S8M",
  "key1": "327ATtrsYjbDpjRvz2S5EGNTFznQxCuXnCXp5Ajs5zYg7TBWDk6T9Tb8i2JqxAq21GShgyEoxgwurwMDxH3XyY6Q",
  "key2": "3PFD6hT5dY9C4n8FS4KztBDi8TvDzt7ZZADaYwh3qZktUbdUjJzkpWUnq3Z9zpAG8eFrKSyJiHYXmFrUjo9MtWDn",
  "key3": "4BWtZge2tUW8xZYP2fvzsqYKWNPYTFzS4ybCTbUDxf9GmAtHy37UMcHoTY8pEWvVcuhdjSQDYBuMZ9d6JYST8i6T",
  "key4": "3wM8km7YXYzKxHtLfW1gPRobJfENQh6QWFsMiAE7Xn7nPJRQpqeuGt9D4KECmNwBesRBiQqRjdGwZEoKJ3GxtZVR",
  "key5": "5rAMrLtseJVS3BMchG9tZUCY15ZzyC8FwNe1n7j1wzwd8eB8NsK8c1r6ZMk3zm9DRYzbVDDJ2f5vwgnWewD8CWNQ",
  "key6": "rqCZwgTziT3XaDexRGV5zGUykAHXUvHyqWiqJiYLNMTeFUTtZ8gxxd7dtpatXP9RkTzwv6dpi3AKnoUxBeusfSF",
  "key7": "5MP9J1iEMixbceVFiosWgosEgbwa8ny4jShgpu8QFfAkcTCFUUTeeAwYTASgsvwZCVS4GnnLLZf2NPYJVfp4JFrd",
  "key8": "2jJWp3748u3mw6oohiXSJMfcQLaU2ffaVyjkY9YueZVvNaUMMjCAx6pnM8eZpmnem9VFM3aV4d3wD39HRCBxvjy",
  "key9": "3QPi5D14VbHJSBvnmn3exsVSF1hu5yrafgH3CVdx2vx83JvQvCne76YmfpP9E8FDRnJEnhTP5T9Tz6occaJJj2he",
  "key10": "3rsP7ehS3xvnMC5zm34aY3cPzoZParqPKWbe3ocRqQkZhzGUS4BEx4Jt4vKcWwTtSPDmb7b4oWbX3CJFzDBVU4nb",
  "key11": "3iHHYn6B1ktNnvBnScaLqFGN4FveDUiM4tj7nWyiYgwCnYXvi3zYywo97G3kSgwby3UtBzTSjWHymTp6Wz1SHATL",
  "key12": "4rxJ2enzGv65nKRsLphWZFm4RWAUNHWNxg44xq42HHkdFPPikp1BMiyeRSWUh73tW2ZxmxUc8Ms3V2PHsG2hW8wM",
  "key13": "2Qg52LEZNn7oDuWg8JB2TfxrTES8XEHzN6ZS6sLsrYydyYTNGubFhsAuPAWCvBY1u5AFpe7mYMboTQ1n8m8U9tNF",
  "key14": "4d9ZUV1PKcaZBpKt5DkWjyNqh5SaUrSCYAiXMM6PKBCBqnGQMhG4PPdDnvXGPNHGDkjQh6mYZTJF4Qu5RutH4sWz",
  "key15": "XFD5gXLUUfbVzPLhjNUbuW1HabtrGcoyfNPABSppRAhnhQz3vTGMK12qUSG3ea16m73D2SQc3q2hSKfHQ4J4uqi",
  "key16": "2cpazwzwtTQr4HLwUHoB48wenrXx5fhbyqAvtA46S8x96kBGdtK2HBSHqkp8kwa9VYTKGEifNASxxa3EfViXHyNv",
  "key17": "4kNUt7CC56rwZLzJBqJ26a6sRLfKwiRJ61wLiLMbw5CRTBi39zU1Kbn5vrpKPYf4Jzrko9x4MdMxz9ymJX3pK5ia",
  "key18": "4QCN5sETBPguY9Nuhy4mRKrP3aC6ae9dnqakc7pzgCMvRShhzUTVZvZynmhmxhbEJH9uX1JS2t146BN4LPnqrrkv",
  "key19": "54q4cB9eaNwKJS5D78aknQyFp3fT1GpRDiQpBxa6g3BBtW8wWh9zERkaRuQRtnarrPvUWCYSyAzZhom55dwN9hS9",
  "key20": "5NZp2QoUPaDP6iG3zgeWxsmrwZr5vtYPgW19JEYWkEvgXKe7Hyc85o2663ALBFSxWR9rEgJhqkbQfBkGG4Awfnto",
  "key21": "4ZPTEgDcWkvD5ubQVhKkC7VFzWPJhpNVZXcukqKj8i7ZxxWp74NYiyuSPq71cKwHb7K9wCXx5wtow5wYK1pXXeNS",
  "key22": "5m1V96Zinoj6zisTRfcrrABoKkcuR8vQehNJ88wBWE3sQyEgfLDhvov2CkRhC6XpB6PzJoQdG2XxpRUmYWSf2eKh",
  "key23": "3WaukeNkdBNhoQpwscJ49Ybt5ZFwhFyxSb4VosKxWTtvcTgZECYtjAuAKBiVFNW3rsG9sWhQ2AKSvxRU2RsJ7skf",
  "key24": "5givWDGomNzynEteWsUqQ9d8D9U3vXtz4jbV1hV3uA4ccGYQdfLDKXkcCKWimdo274Dfs1WTqVAFnYyoDbX1TDEF",
  "key25": "4DNJM8TQCBVVua7JidwvJmvKaGeC2LFcpsbDjgU56j6uVhkhs6PXUkhMm879wjSuHH365C2Usx9FLjgsUoevvsyR",
  "key26": "2VzAPkEcfirbpP5zL9tXpvsTVzrrqhCA6keFnPePrwcY88cG4hA3WpmbcMs34ymzj5MYrkWFjs3Q1e7Gi5AuAaKr",
  "key27": "Vz5cLoAyUjq3chFqMUyKSizyJRQMnFKidx6MLMX7YFsTWhZgy6MoHqfjivEqEGGLDYAKqyGsmCDJrfBqaHcH7NF",
  "key28": "4hBrfDFwXeVeiaATz2SgKN3QizS5iVWPSYk7ajj9W7PtP2CvWLj1uxpgqZcUQrdnfFiBRPZX92N6D6ediwyk4fVa",
  "key29": "25gDA3stdeWxjoaxH9cnwixNjsr4PwJr9yycLXAU1WbcZid9cNvbgBUhksztRSnSSUhSAAFN3BRVazLy8SemtJa4",
  "key30": "5iyyyej1Db1ncjPkc6BXTsHPbGEwRgJAafUgJErtA8KihJsq7vD1fT6tuyAzNicmGSbTh3Umk4MvvS7Z6TCxNXS3",
  "key31": "4jT4Ktqkp8iJvaVDBUC3CtjHSQ7vNdpTUPq1bGvepWV2d13AgV3h8FFhUhNS6f7k2HdNxjeTqWMXcA5L1soNFfBp",
  "key32": "5DL8eWoN3KbrCQRaRmVeEcpnZbG8GxPdGyzEwJbVehrUV4Bc7UYj1DJ9BCdH372TXWtQrhXVCtQZ8ghcKziMRJ2X",
  "key33": "5QecHAJ9ieTsXiRwDB2w8FxATXdpSsrgU5wrBsvhT13Aq6VzFrJwTC9MNufZhuN6WVAhf36JXWYNeUpn2MULn4Wh",
  "key34": "47LGa7Qnsfsvz736nHfFbaz6LhXvZEutxC7aPKqNCm5SZ1aDMiQDxMxx5csUj3NqZUs7Uh3zcsHvdzGUQcHben43",
  "key35": "5YoWoLCCdUA91D4ZQ17Nchw6NuYTyVKT9Wc9o6jAJSdxCbyPvtyqtrgjsm3XJkjrHs6ExbC7fLpc8kKmQUhPDub4",
  "key36": "4Rg8hzb7LakNCyieArcznqKhLHbYANY7NvLPfhsQT2xD5vLCVWi9eJYbyRDQg1wRuA9aPN7oDUAvuxnQMgbvxVYH",
  "key37": "5h4DfeSsCRtyFwu9CgctytZLwVVLWWUXtuzuEGheM1RLqHexyHNkdtMDuRDsM5CmHo3fyLCJASQvvF7c916pXwcy",
  "key38": "49mdroFXBKsY2xnJ5Tffmir2Xh9sz8cR6msYpcvjZMijvJFc5S5Sh9j2ZCmjgCMYbT7BKdrEAwS66Wc2GTqrDit4",
  "key39": "2pFWw9rGr7NFjRLVtWLPqgtCnH4ANfiS7BoM1Vst8vKkBXyfmxX7558Si5yZYoW2dMv6YBDrcwuzcciwEuDaRczu",
  "key40": "5BHMyY3wfTJDyPMUV66VqgXhfpGiJXFJyRmrwDLfaQd7rAk9F6a98wX88ZnmzRzSCsHusM6NGsmHxf7536sKY4uW",
  "key41": "5Yo3QfgApZ5AYZbJrr9EpRLu3q2FSe8Sf5tS5QWt96zTXR3KDzgwjJ7K8E7rCvEx91dAuQWCk7Go9JbpMrLvavas"
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
