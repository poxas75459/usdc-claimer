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
    "2nUXSRActJgaGdQk1Xmp8VaazCkyckQju4QmGMknjUoGqD2g9ggx8Y6vca6ZBKyNMY6fDSXRtpryktaWANnTnXeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hj51EsHYRS8Jyf2xpftNEBQkQ1sZk92SXV2Gfxdy8Yoi2Jn6W9pWKz45bskm6yCsnF6mfBzM9eayoCKF3Yp9DyH",
  "key1": "LbHMxrSgGsF3T3SoDaqYtbE9kAXYmAmwAL9N9SeaxFB9WKo59vRWpsbnspXa42APTdHzMtJrdYQ44X4oFquuymL",
  "key2": "4PnyyFGrAnZnwSA7PAn4UCuniQsMMWWjh9YK4qW5Z74WeHmx6nZ3w5pvaRFAw1ennMQySXgViLawR4jCSkcsezdw",
  "key3": "64fS7XCpFMe5mda42a1mwehWj5YHndjjmP7LYSjutashqnr1zREXdcvkx9WYH3Z9E9tCZpaxnYYRhAJYWdvxHMSm",
  "key4": "MrE1197cMCwzgSKLTLtVhpWWF5NPtvGT7eFsBgmnk1YqAyPiNnQJSk6D11aNQmW2Yc4u4eUgRfMGJ5rpN8Fktvg",
  "key5": "3SgfdAgEP8yMFf1xqW46BARVkNh5KR4Hd76yL6Biziee9rf6tBYtTfh8YUen938ACUF7fn8vZGTUkGSN35u3LLwf",
  "key6": "4rVXMR64T9Xw8GvajEGd6oa47wBW7TgGhg7ZrnWuj1pFERcdkAt7DLoeEctgyHPczyb98HS4GWc65hmgFas9wYhB",
  "key7": "33hGRN9ppVxfWhTbJteSH8QdrSSJdBm8NRR9J16xfjVK3cKEYb5Un7WkZ6Bo3iz6GQx66CDFPrCvZpmzSfFeyNyF",
  "key8": "2V4GhmmoiEW8k4mTDw75BotYHjwqXDi1aLNhetEYwhBPovir3SWFoMS6K6u4MZygppbB5jsT4Doaj3ZgG2HR1t7R",
  "key9": "5Wajd37a4NZMfVqaHfeGkiH5BekSxr5LxGoPBrNPGpxFL8w5JcXq3K58aA84WibH4itq8TPEH7hERAPQjcStGxUs",
  "key10": "yfCPrfh9myXftECnTHMNF5dMLwnr13XtBkxyo4cCpdUcW8MvkGCakPpFMLau79jSywL9VsaG1z3mCfmvY68Nyjg",
  "key11": "27vQsKVMkobmdpZ4UHQgHAQAvKckY2BWLA9aS5soJcGmkKZfsQ7zH6aXJGh9D51Lr6BYh2KtQd3TiQDXHKjkzv52",
  "key12": "2A4woJXB6D6Y4QfQggUP1jy2QtzPbc2WvPpgFgEK7YCH8erm7QLKT6bznK8Q3jm1u7fGpnsTAvthwpamuRf9fhze",
  "key13": "2CohvpxmTPzTTQvmoa6NtZDfQ9FCe9BXgfBKtu8Ly6L71gbWP8RUZh5mxL4pYfQ66iAtiVUEe7EBuP7DzE4M3yg8",
  "key14": "35D4vYwEC37WGE812VSBS3mnynuttXBW776TRjXTAwrtmDrfPknLpkNvTErxi331oobWmsdH8YKNiaqPpk9P1eg5",
  "key15": "5qD5nkQSAv1cH3YcLjgNo1gxFmA7QE9z35h7PvCVbCjCTyZGZFtty22WGzrFqggPjVLSSPscPD2TtUgs4p72DEu2",
  "key16": "51tR845RKhvnj4gMTbbLVuLEr4dS4J6kH22FKwS2xbfNi1SQDMQcqmoQsYFifgKfgjgphQRT9pEAEpLBC5LM8fc1",
  "key17": "321WoeSbX1bTkWomr9LbqqYtkpZqYA8JqJq6WUTjoe8vHaevgjyhdJEL932HRJ5t7ptRGCPsFyzpSwDxYdPgR4E2",
  "key18": "2fJevDDLVGCVrYbGGyyb47oo83dQsQXa9tZdGHXaZ3rtnMZu5conAyzMcPCViSQY6MAZvMZmP5h54sUZBvXCkkC8",
  "key19": "3avMjuLjvKVxcAggFU42XWZoYujD1gwWTXUNU6EJ5RZkXVZNoKttXr9K4nda71VbCbteoRbwK2qb4LMh91Z1C7hf",
  "key20": "UjCYXouc6ViK2NC5mETS2hbqgtYdygRLiztrqPAAJMgGmpXbrnZd3ng9whWavP3dkdVgrMGK27e1rb9dRgsdxci",
  "key21": "4K3y6e47GMT2ZipH3RnFwvSMqiFqzHeGswchvxhETeHoVE9ZmKafvkXJp6iv7WfNXu5sTtC7JQ6HzxcUHdVLNcbX",
  "key22": "qaUtK1N7yRZNQWrkyXx1QkBdVzRGqyCqMB4S1GZJZHD7eArqK5MwxHAfceKCwFGBR59RigU9maji1XrQ6FH9TFK",
  "key23": "WUa7sqT6AZvy59UkGBJJgE6XUUV8HjFEZsWKRybmJc2xjUY86fwYLQguuCFdbTvCVCFKWpupgF8cLVkcCiB829g",
  "key24": "EKbjScw9SYM1c2DTScvNM9kY3b18SuTW6JaRBHizhNWVGYHBnqQSDREGU5i1C43a5KNxbqLGpBkBfCN5XvQSs1k",
  "key25": "4NSyGH8CWGCNy1E5bFVdR837Rzwc7NtRHSkVXSTLzXWwqcydq6DL9AvaregBoWxqsY8Md6MoAndWcLLMEDZi6sFR",
  "key26": "zhLSHyvustNsNuWGffiWmw2pdnadBEYMjsDoHM7DyqCuKTkWkQPs5styj4z7LXAXtMFrQRTWLMuztrndoghN9K9",
  "key27": "58o1hM36rmNPEzKgMydn6ou2wCrPQBcBCXNp8DmDCgmgLEUCcK5YxSruqGufC7ubPbXGfH4urwSq83toB4zTkkyS",
  "key28": "47WvZkSmGdyQLDMWb6FzbDG9tskhWVVx9ppjYx1KCojuNYh63e7C8UW6piewUhshQQoqkipFWwDtBqSm6HHwEfcU",
  "key29": "4z3oviXKtQEQZeCN82X2US6ipVLZ32i22fd4trBPzckLJucww4cAfhRJiJbhQqLsvFChRQ2NwxcqZPhxapBDByqB",
  "key30": "bqVTTvo5WsLNXqg1Ed2V1qiwcTNf6eLXNL54aMVYF6Mbo1mz1N8ay712Pk1o2mPG2BgBKcwHxkqRmNoYWb7NyeJ",
  "key31": "2CjoJQq3cgX1Guvidmu2DxaN2jdaqrBu7qq1ubi6WkVKWNTLenPGyQ231DnyicY1SVs8SVssdMyXnvCzwz4C4bH",
  "key32": "2ixCu7TVJ6P4g88HsBbaMDt34su3m71UtELydZnnrH1Xkj7nxx8ENmxuGRjpgxVPBax8ZHrrTkKrbhqcRMbbSptb",
  "key33": "4EaVKAniRivdHQjzNKJyjwcJjMeW2VqddMv8t58UBvDoHJWD78AkHHEWwCaj3JD92ikoagL3XHhVdvC7o3vzBnxi"
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
