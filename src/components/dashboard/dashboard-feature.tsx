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
    "3GmwUWWpw4Ssv2cxEzqgmTRhKp6LJdus1AmRpCfwnVgGGzwgFL57aXLZLQwHexSjH1Lv3Xvg5XkeQis7pxbsWYEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36nfB1x95GDUdW5zUFnfgooLCneVqKw2BajE6rtqU9VUxcAgiUPDt4msrvCibHcYwxU93Txyz1AZvDM8T8wnZnEo",
  "key1": "594Q49HpcSKbYQy7GaJ2PEyRkox4FW9KGC5vMdpwF6EuMM6z7CzqMRdgjKE5YyJFsAyhf5ESy6ciG6yUSwpMAtEX",
  "key2": "2yh13mBrrezby5kYNQDuiDLHcDLKKQ15C3Cghh7npVLxgwcW7svWD8ydSyeoBqXMC3A6cciZ8oRbypLPgAyj9x6w",
  "key3": "nvau4EgEDRzvE7LF62ZNGVWBxxzH2588vjQ1TWGTBRgAGPvyTuWi7P3GwPqqBzm6fLbpxzKcjQsytn8oCjVxodU",
  "key4": "4XmeBU2cGstM9WnYr3d4DivwMr42MEhZLrMDAd76wCyKTPJe998zduWaVHAwkAgkCVZFW3ZReJJZfv8be52Cyj1",
  "key5": "ozS9TxsR7QqNV7hshhwUeDPjSY6T3Y5KV8jTim6kfoKcywCKnGe9W7qHfax5VXpKGKaSaPpF9q4H3bvVsUbDtDC",
  "key6": "zFYiNQZVEYiUXzEXEnEY1CrL8YaeeWwSZfs1XxPysVZj2WThjFBLiaGpZvHeWa84ZVF5w1E7Y9o2ccX2gmShYUk",
  "key7": "4UyX2FMYn7vkUUiAqb2RHmNnwCf1vrQPdZRBzAFPhNyLgVXcicrAzJ3FGjmmh7cmKE2Txqe6s3w21bwsjtE618sn",
  "key8": "2nZFPRRjKX8b61uwkHQKvQmhBc2J3SvSFqcGVocgBrn4ZEwa6idJJvcnFmHrR12VV66mqddBBCkSWycuAK9aJxWU",
  "key9": "5iNa7kph4JXrVvB2dHeiufXyUE8LiYppzbZ4p3srS6uYS4FgxwfNSKzSDcfZFk3nmygi1zGVWEKyT2zPbK2vLu3g",
  "key10": "4RzVcdDL9FARoGBgNnjvnMoKxsfAX3XSPVvkkQ4cG17EnH1Wgu9dCNjsVoNcTVggQn5tWbU2hzWojPTrP82XRHiU",
  "key11": "4JfTJ2AFgAQHnNw5e9mybYyd6HYnPxCGTG8dH1iqYYwcvsdQzfkb2Bw485YRPE9W6JChehkvhKYnoKHGq2qVsn3k",
  "key12": "3pi2bAoRQ48aWJzACL2Ve7cSfrajTxigH47ZVVAhTJmnQ5Wd8QURhPsSx4aGUbi85LUCWCpXdXfFxigsmfBciZe9",
  "key13": "2LJNC2E7kyVSEg9nFtD8sB2HsZmN1nTJGxAsZ38jt2mQ3o8iHgaVNXsTqkRQtuFVX2NninXW1sCMy5jfmRotHQ4k",
  "key14": "N3gUX1oLEdK3D4XunyFx4n9TNYQNAZWbuZwKNPAhCF9yUUQXxWpgArWYkrCc5Nqsf5AP6UZprVQqfssgd7yjgLK",
  "key15": "255ULb8kE57w6rpoJKt5FcrenWPpA59QTHD88zRzPNXuKU8pbnxnzLCKqMqVMkSD25xsi4DhLEbXCpaGyepQMngc",
  "key16": "3B73GZjrJzpqoeJ2JkJvNV5ynEzXrUnAW6dmZabVvkCwjaTSX56J9bmmGQzZNfGDFMhbChaLeRheaByj97F1bKLZ",
  "key17": "AEeP2t8vbaLokuuF3UP9jvMqDUuhS4gT8tqN37WHZ23FuH2Wr37wsJaCVm3QN8jz8z6714pr7pYpUKVHa82GwYL",
  "key18": "q6v5A8TvHnzyTFwz3wDwbd7m4NdkuGFaDq9sYQsHPizWovYfSJ8c4cDV5iqU6tEdzYjwEDFeRM56M9cqjh4TTVZ",
  "key19": "5jBRmCxUZoNHEtM89F3btFgPGPvaTT22DTWLNDeYGLaoV1p62CJGtG74CuQnJRphqE9G9rJm9HEVMBaNz9wA1dce",
  "key20": "4x2zBUqAjb2CW22pcz6A2akWHJ36Ngk824PqYrcgHKWrGHXypshDmNn9s2eqbpffG4ieGnFvjQqpxiuEbosCgQbm",
  "key21": "4CrkiGMdLo36Qozi7SBC188nbf2M37ih7Kqp9bM6oRdhiJECqMxsFHJDAxRRq1DmAFizGXrcUa35PB7ft2LBsCr",
  "key22": "47psKKcV95dWhyQ6ZHpyK6F8ZMgQWzb5sjbwxFwuhiGeU5UETqkBbBCBAraBcpxPTFpdJXUrcr66LnJ5m6dZR3W9",
  "key23": "6VuXjMUeYbLwfW25yvs9n7sj59nP8cW11JbiAU7SMrHX8HYB6qPJTddT2yBa9Gb5tHW1YiffRT5huzBesPS5Nyr",
  "key24": "2yoJzBv2djq85YdFr65ytrHGZVuVaN9ggLdgbVh4wikJwykjYVXMw5EWgm7SjPMq8ouiBnTAzqZVHq8p4uC1kYbF",
  "key25": "2j33Tr8jrX2UJfXcGrLy6CC9QDE4jmCbgJPx2RCepw6opWkctbWybgQtiwViU4F64BLPkr7Hbp8rt8Kbmw2oxW2t",
  "key26": "5rWuxfoemzw1r5TNQ1X5Fb7Pq89pP4rspY1TyBArvHusxCh7PG9eJJjnJjMSvveTP8jFMLnNzyabX2U84952sC8A",
  "key27": "2yQpm6TF86gtCNvcz1nP7oyPJ59iE3wBsU1apjhTGFVkWbGmbCQXZSHDfy8aQBKY9S9nNhmDso9xLNjx5BUtgVin",
  "key28": "63igvokmrXEb3by9uPDUAqX7hfdf5JNdRD2a7Str4UvfeAkVs1a9kozzZfgjDYadiMZqUp9hT9MVSB8GJQ3JLGrh"
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
