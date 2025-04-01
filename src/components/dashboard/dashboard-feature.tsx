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
    "3pHhVfGmMs49RbfUSxzn7C2wKyDW1Y7Zb7M7QpZM6wSDd9DTNSLTDiKJGH5F9rjskhXt2wKmjDzeu72MPFHLweLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W1VSLASQVUr35K6JNKrz2yLXqqxr6ZDG1Y2yKahUdEg6rUB1Msg4aCgzQy4CrbKeYqoTqkksvgY9kryC2vYyr1d",
  "key1": "4tNvR3Xj84awag7bPTDWuVmgduVtZpaW3DiRzFUDMcy3CqraVVerbPodX9Rofuz4qv94D48LFAL2ji4NwH5Leh6a",
  "key2": "5ey6TGzfR6wWpuwjjiL9oRDLDboFeRk4XMsArA7T9jMZxyH6ndVGWDiyJC33fWMuBJkoBZvYsUCQBFtjJcyjD6vY",
  "key3": "36iQVcsVmzhjrUkvqmWp5akLk95fs7pdG1YqDawyz24xgJ6ErmvvEMn7M71aaQo8JPx8vkARast8AxnUvQrLMrFb",
  "key4": "bewtHiRKkTma5WRnuDwTg7pFCkJjx63X7QkAPRqu45EXtWpczQXh1S6LVWcn3Z4GX1QkJavUN6NXyP7hA46QH3R",
  "key5": "HwXkq7wQHQjU26uACAhEsvRMeMLhFEb8rpY36DC3naAP8Rwf7pTvRL4VLLYLnBZvABRzbcT3FAcbkzLkyP1SJeY",
  "key6": "5AwdDSKRrjzitecAfqgUckXJ8PsCBUN5THt6rsD9HMtRaz5mGjjxASDw7NBijBiAxZY6SgDSLZxKPnoXdWbdeELg",
  "key7": "2BnkQqFBLP8gC8sGCta5PUyTuZhxMmRNfLC7uzeexDdxdJGoa4C6FBpNc44YcKVF8L9wp5XszWGV3c3w4uym4RoY",
  "key8": "26fyfG6a3G3pxw8QJQLHiJSmjpFVtQZHTt1o2woQQ66j8Gi979Cbh6s9vb681pKZiQYqZk7wgR4JgJCUhoEnfWQ1",
  "key9": "3GjQHhHS4gPdd8XEanYfTdQ7mRXwMrxyR2FuMGDoRjocueuKRW3zuhVh7NKyXqLV2kBbykAq4CMGaJpDWfAp7eVq",
  "key10": "5RFJYjGvJ1wGxnnngcArGLpDS7FzjcjzNhYKphjE9hjByKBzvHRUZHLimiajFYvfzjJ2yhbHNkTjf91ACYeUyCSB",
  "key11": "8x7LpefRGPgCfC1fLUWFUbPBd4i7o8C8wKP7omEt8SAvdjHoh2AfSzC8Z585u7h6vLSRiL5njU8TYgk6kawdKLD",
  "key12": "WRPCfmsZ3quB9PyVzAux843Q26BepmeszevTodR4Fv1WkFworVB5qRN8TENanqFSZQdhNjjXPRWerCxcWXcXRTK",
  "key13": "64NaQgM3UwPVeLX2giwyQEGqRPeV1NbrwK1usxAKKgT24AeSdRALKku6Vea9577h4mSncEzcaQzfB2eDAxCw52zN",
  "key14": "eeyquTQHZkJxi3YF3ABbf5Mb9w7qWro13RvjrHKAryncSAc2jZquJcKAHYGgvProgB7Cn3T95QiK6mYpX6ejYHY",
  "key15": "4fqYuc92u5oAuyjr32YVyPUtwhBYTAyHKw2XYRNq1AK9TpFFrFHrU94TrKzVAZD5QWqW53dqRaSBNHLgzbBJMhVB",
  "key16": "4J1SHnbGKbn6NeBofXEKCEfYJdysTTTAjAhFzYsmGEc94LuJKSFKHLk4bKMxpfStdKEaH9sVs98EHdtcqsFcdNt",
  "key17": "3nHaMUN9pWmMdcsDRGKgVEYdPKFmDou1dnFwWV8tz88R4aD9hFgtTDQ4R6eMKeA1g1YUofzg9mWdcafuRSa5aNfm",
  "key18": "2VXe26nyqgVPiXVfLpM6rBozZfk9vZo5JcPDhn8yKwGYgzK1HkSZD56B18eVdmu3198ZGXL2PCgmH5dvQx9ZiSAU",
  "key19": "4bxt9uhPoBQYbd8M44doPrW1zgjTdMuu8of95BJVvEwv6c3oy4rTfY7ijya3eZ9duw8n1SPRUVjG6fuhyCJwBwfS",
  "key20": "2pMxsDBe3VgQ9cXKgSDXFtWrpKx8ukrmZ9TWpC85BCwAD53qzVWsutxSgJX2ct8oEU3FJEg1due6hRhxJBjxpKbt",
  "key21": "4jZVYDTSQfJMb2rK8B9ex5iDejykDf4sfrrvpFMbcFUrAaQTmLE56htdzMxXSJ8yjMtu8VkCo3xKQe7djmhBEJxw",
  "key22": "CZ1BpLBzVB8TeAW5ofo82RfDXBS1cmaQsX61JUfxbZgBDfnNnxAds1kjD6DMAp62EWMvzUhkLzbx9nmv57Zn5yT",
  "key23": "5wGoMJwRHkBnmynjT66xu7FGHFBmKVkZQoapHHpx9cRPqeMWCdyUDZBr1Y3tdkbk3EmkEcHefz5QER5fWxundn8u",
  "key24": "59iAkhuK7Xb7FHqdtZ4M4L5eVjaXFwWGokA3qC4AvsST7aiTpeX974CZe4BcNso5SDoym2hSZwMf6JY4eKwG2hUZ",
  "key25": "3Z9SwbraE2fw5rP8h1jahYka7et9gFoARKZ5Yz1v8Lqktme5kjTAvU5GVveJQqg1awDAcXKSKHqTdGAZRyQML7sm",
  "key26": "BXZ6m9TugjCfA5r4jQcZQhUHP4zaShrJYAcWzkUPZiucMDhV7KacCMHDP9BJz1DEktRbNp7N21eD2pGa9bKmJKU",
  "key27": "jGbQFyUXNSEk7KUWKeWzxXxfTFL494tfmjVn8nWDHXZrT9Bb7EwCjaYyEKDfUzADk893Z2YvzyoNpEkBnMJ23VF",
  "key28": "5z1GMU5nK9aA2gAgQznHGCheUSc2wy8fpVAoFnQXJ98gA9xQcLY61WTxDrhqJF4Sa2UE2naibjKXpvj2uSzhxJjV",
  "key29": "42skB214Y7CP3GfxzyTeRbr5QdS9yQqwQ1an4dKRrFmf1ktup8CSqBgu8281Uqauq89Jv2W7hcNz3t8MC9sL3R1X",
  "key30": "2DxBhLgg5XATMBFVevRCgH7P3PtvTAFcz9T41eMMktd3y4sRWUJdH5HTgwD6RRD43oZiECuDdt3Mohe9R7SomAFv",
  "key31": "3xAA5n1ueRsQGq3guRdhBA5jsRuo7L5sP2G7pFaw4dSp6hwzhtDi4heUiZJ2JxzZvjJQ5fi4MGYLSapbfSNGQw5h",
  "key32": "1ssUUaz2y1jPvfS5x2j1sDcJcdHPJguRb61QGbuBxSiCqiq73Gk6Lt2DATz2bM9hNUT2WwkqDwYyVjb6DjZ1SAB",
  "key33": "3JhTmLmyRaK1DVimJycssKgpB9CoQ5gedM9ydbcDqnpqBcZhjMfa7pZkySSqQdSJdtkHoz5GB5Ec1bHhdA6pJ9vV",
  "key34": "isRh2Nh1Cma8tuZGUTVZToizzcRiACnbcbpgiNMfvFZZahb4XqphzQWEDz2VdvNMVRsJFGXjontULAmCNkATHbd",
  "key35": "61fJExCueei5vJv4uft8ds7qcuPpPMvyF822oJwdb46VHAWmkSjYt9zBBh1dPxv37v6EA1d8m4E5Np6KhucTGuGW",
  "key36": "4su6CNiKcEunBdtnhWNipokRKNfKkP6tKMibR8MVCxcNoBtTNxo6DTR2zhwZtkTZENWkoG5hroj25Z2x9Y88MRhE",
  "key37": "2eWMyxZqKuMd1gSdQQzytbszEYGx8ED8TMVisVSh1RZK89nDuSA6dNjVGoGSLX3EwNT3859CXDBuAU96Ue2585Fu",
  "key38": "2LKUhjbC8CngmNV7cFA7T835461QGejozbXCqAaLGwBtL4jMz9oTeBxdL9mUjdghPFtEtmGZ3kPiQG2XAX4QQsBC",
  "key39": "2Q68dFsSJJbQSWETSeFWoVL7kyksHQXx5AQWG4uEvHDmfd2pnLvfAqSDucoYfSGC7S4wTuyQyWdeqEz6bCzEZYQN",
  "key40": "rcLyZBoKcg95Mf4mkM39zyPtC9fXSgSmPrvbPrPY47R8nPud1P4qsfBMpEdeJDttRfFT2NfpbrzQ2KFx9z4zxMq",
  "key41": "4KjhbdfBWTpymoCVhGxLpDo92Si8G5pdSgDRd7W7YCM65cg7AQaScq6crgzG1aoNWEWNQuNGgEa7zzv2KyZZHWsc",
  "key42": "4tEL3MPQ2jM8J6yo3reiqZSFdswfbt9itZ9GxQ9ivHdwH5KeqiXNFmcfw7yZQDWUBcFpYWpspST7XrG31QFooRg7"
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
