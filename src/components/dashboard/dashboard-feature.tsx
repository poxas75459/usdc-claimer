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
    "4ztrGZMxuS4YHBGHVcbwkTCZkDkDqh3c9LTA4koLLqXCjpmTiBT1VSzfTWfab3vqfBocTtuZpTqDhV6VWMzEBjdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6JuJkZgZ4Rr7JsR9JrDMUHXoT1YFE96zy1BbgRQSJzCrwanGBL7RMqdYoye8TcWjyP7GUsmYf3iMDEpeLVViKHb",
  "key1": "4KnMhyziaozDGvqAHQsBWdKYSvVFDXMV9iP5HxeUhdJ6rUMsGjYWyCgsA5mesfwWzL6bcczmcsqR5iW1DksasLoP",
  "key2": "5iKx5tvV6Rw58hsPFW3pXeC6AyKYZJKYyrEoNP2G92qrbu5E8pQv1GkrBwNWu8DsFXNSk6qcVeFMCzZyvbf56Jb",
  "key3": "3Pyv2gS42CqWV3x8sjqufw2guuX78thLBPWraYL2A27XpjWZLxJosFxGarCixjxKnT7Afi7XWZN3wVZ3nqHPufVV",
  "key4": "5QsqR9ANhmqMZrYKFy9PkLWd6is8QXMnbAkuNPbHBdv4TXfvxgXjDJ2YyDxJGSVeJXZy1kum1Fowv9kvkZgx3hne",
  "key5": "jL4MGZdKz6ngEkn4f7zUNtYwzk2ex3qCd1Kvyvj8M8js7sfgA5svtc8UfsYyju423cSXhzHHGbyphRqZpfTgRKG",
  "key6": "4FakPEX8ej7Z3v37zMWqqeWYGgWowFY5eaAxPs4ymXF8qWmbNSrtu9sHP7v2mY6kxSbkPSX3bkisW2ytQU5AZqTi",
  "key7": "4wecrxZQg4zdwViTkupzxYG4umuqyKUWzjA1rUvQjmChm7gvTCZb8XSpN63Qtis1D49vs6sDv8T7eHXtY3x5GRXi",
  "key8": "3Gx14j284QVyTTvQUQHXe1QtvjPtXgHoJV77pLhh687KmkHjP7zNK9UnuFyJYS9pB1VtrYHdPHGv6Gi9EWtPXWLR",
  "key9": "4kemRHagKK8vKcnRUW6rhNTQsYEoL3dhSMb1BCLAGrmRFxsFAm85FQsqR2tMuKAB5uXyr4etv8SUUiaDA1i6baoY",
  "key10": "3H61gqeTS9XUaYRS1FJ8v4EiK9Vz16TPEsRqkGWxydNJkoSgLeZajb351SWowhUKzVcwk4sbqj8gGMz5SKFgod9R",
  "key11": "4etVDqFHdXhVob7FW95mwSe3ToTxayKw9Aut2w8wpbjt1iZsJpL6UQ6BwwPLMi6BxpWoxK5cHNHWFNRoX7NtwdpP",
  "key12": "31UqVuVC44GpmumJzckgKnVLrVxKath98Kkxew2Vmh6YPiTi78qU9NZp4DvD37savyR56K5rVzCq8mYsdehGUFDU",
  "key13": "55UiBxbGJ2DA5zKinYpyV1FR5m34BA7SKbxfbF7eTgyGE5hAgqF7yVD8nD5vaK6YdxG2wz4y8VD5h6voQWjMT3Nv",
  "key14": "2bvU3p7AUsT5o35pDtMgRHNLjejktoezjZ9MyKjoxZS7zj7BHvDgwzJ4uvWACc2zdzEMK2PECLpGn1ydNkHXq13r",
  "key15": "3mvWgpuwbSLXk5xAXD7QreMwU65cZqit34B1iih5y1aazcb6c52YPXLEpzpiMxcu5jM3ZyJx2VzSoPqyad47JvPE",
  "key16": "4anz2jf5f7cUfTGVr8oHCp7JfCY9wMFZqmQNnRjKVBSrEfMyf2z7TwxSRW1DMA6Hx6LoTRppDzBqJ5fjZVCnG56w",
  "key17": "4kzi5yghgpmwTRBqhn2KUGXcUSoFbSydmPUETZkbWyDi9CLX5RcUbidFQUsB5kc4BiGuhEdeVT4VRT4D65biiA2h",
  "key18": "57LT3u9VfK1pXwDqwuaqfA9zpMhVv2cs6SxtY7CyhsMBLUxqvS9ztSb7yWKjBMQSUDZCAJKzMDFK9YQ5a4GsAwXA",
  "key19": "Ht81zjbKQMbCjNLqz97ATe2XaoJRxMZ6xMC9uwaGAnJAXeioBzu32ZW48momjaJKwGbmogNJtEm4Z2WviKTxuuX",
  "key20": "2azcwshcVvuAD9mwhy4UiUf5o3dpxmKXmQ8S9fJVhr5rbSSC2CN4fdsFFTK9RUxGRhodn9ZJr54ocoN78Mh7cFqF",
  "key21": "3tYxNo6sfnRkKoRqjttvADFMPwEbEGmZBhZV6yxtPaRELwhZS2eaywncUy9gYsdVyQ6xTARaceo63UfNz5oxbGLT",
  "key22": "5LXUs28bthYYcLxgRWBrCYmQNtEFoKS5ZfDGdzLYjoWefRyKeDefyr9pEpZEEnwoP6UkGN2rAd4dG5nCFtSRpoRC",
  "key23": "2FguA7JcM13kEF7ZLboUxALDhpwSf23PSSLFqztMu7UkHqnyd5Vy3Xr1xk1PcPPrAYLWJckTA4cMSRJwmpruJmW3",
  "key24": "3NcGM48Umo4YogBtWAcbvZDgi5kYxFypF7mZG5JxQxHCJsYoXWbEkbRRDQHorEaTU1PhK63uf3vrxtXkgS1wJQto",
  "key25": "34uf9QvDoLuouyJjSgBoLeijRAhHZLyvr1xZcXL3WZtVDBNExsrokeh7LntbKthAtxdzhKoizLGmLeNzEGa3FvET",
  "key26": "4eEDKzjF53j1xpCdEXA4xrBvTRW6GZAbupnYgvexxAV5nf5LbQy8jPTbvSTEjV9BYwD6jKsqZQXjEYybkRWT2y4t",
  "key27": "65K43bQnfJUeYCFTyEyTo1qk5mgpPMdVcZmtmWPPm3gRrT6mq2qqDkz82pDCNBg6KiZxb3AFRVYeMHKeMU1muR8V",
  "key28": "Udi18xDHP95LU6ZBNUwE6gYygJwUvoyhrLsfSd35iUqyJWFZ1WRfMKne3e5HLzWJ5UU3WYXHgr9kERqM24VTjEg",
  "key29": "2DyE5RCmSaNtb6DWZNH2j1qrWnFtbqQJ3YuVezC2CJ1kqfJhihxq4ZE1cRwDfKkKgt7jF3ahEXcVRZd7ovL2NXpg",
  "key30": "31P8x8NY1encURg5yajBh186NFSVc2s5Jkd5YNPpoZiNEi3aPXpC6wzb6JvdZNgLvVftBijaDDC1Lu2BHm9iaqt3",
  "key31": "TquJxKTdUB9vexkNAg2C3HMBBhkVqpCMpitdpH3X51WQKK3qFTgPbqE2a4x8uLLi2AMKbbUnzpoiaYar1YqZaLf",
  "key32": "2auzSdfCZAq3djYX8qXyb625GDi5XRSvo4qMuWb1vinRdqxT8pg9W8Q3XSQD1EuaKbi69YWCg2FJNb3NhkkRzprJ",
  "key33": "3ZSef3fgZfHCFohXZMeCmkMzdqZDrFrePBZ8V3dBfyNLzbYH1C5pvWE2rQrPLf6npgHaSnLwbCQMZMFqvuXkwLUT",
  "key34": "2sNZS4gZUv2MoFw7j1oUmzrvwXykb5i86tbxXmB6XRerv66zw1aZYeDx1c94t6HopwdKSBqYrYLJrUqwCxLj5kwf",
  "key35": "5eCY4uWLJFg1V9rCPg4qZzmrL9j2o7QXy8C9dqi9bxMvezW2bjqNSsUcUydSFWzGoep1rytiK6JDiprgCNHak9m4",
  "key36": "EV5njjRg9HrLjQb4oLetvZbg6fjPmPnXhXsGKa22LPYdCwKvVdHcBusPLKwnqtWKwqhD2beQHXyQomefc9noKwP",
  "key37": "4rhko7H2idQrFgu61Tb1CkeQveWMujKFQCmjVrB3W5LPPnG4rHgPqVeHecUu76efPJETKGy2iwrGktK45mnK5Y7b",
  "key38": "4qYhKex1SzTRxdBErAQYr7Ed6KpRRZeRUpH2cPJehJ7PwEEVSYDUMyCchXHL7EKVoYqPfLioMJKMWEaANFm4tRj2",
  "key39": "57gPHqo6e2KvDPSBU3pqf57kmtGS6Q614ZXcRqP82ewg4qKoufDjULJRofRUq1NEEkahmCWczG9pD9vu3xTRtzyn",
  "key40": "4ocewCdRGjbKzkzFmMFpfxm6Ruc1DMWuUG58yQTVaYEuwJ3yfWpsi6h3r7a8TejnAStQCGgSzkTUM82SxgHVNHR8",
  "key41": "674kBxW3GmXdffHdi9CouLnxw1saSbJFio9KEJtYwMNa47fw1NeA9bqXJDYmA75HQWc6yDnZRUejQMDr9hYbPbLk",
  "key42": "3zmbXcHnphC6236YQo7UP68YMZeC8F1tP2iJwDBNRGcCcK1NvEvtF7uAusuyL7LMc2a6YKwgAnnG3UbgtrSceB8E",
  "key43": "4U1p1AGCVLimwVpsQmmaXdAkQxMkvYrsj5im1Es3ijnposwfQ1d3becEWwXt6ZfiHvusfQCCY5UQQPt9DxeqxjHX",
  "key44": "5QAgMwNYaQi7wg8b83x3PrrAvtBAxbQBSmkFqzX7VK5dhWdHc2W7o4TXNutrG3DGpkqfUoKUtUFoYQSMqamQYmTf",
  "key45": "2JaqPQDsTLUsSLVLDpLYmTQu6pKURV3mixLEUmHFh5kN9uamSHsCsPLg35FBLoc9C52yyd6qs2UM6mEbpncuHEca",
  "key46": "4SuEL4vzFTNcgZyXCNULbNf9ErViKUbhCQJyARf36MQuJaFtbDZoyJJkhGdkREPCig9pkktFp1Eaj4K6LPPq7Rjg",
  "key47": "3DXvm3x436FggqtcLJmUeXvhjEVHWRzmVPTYiLrhyWkPYBXRifBw9q1ZpwoRKW3tjr3WNXSeJMFVQY4UhXmaFp6h",
  "key48": "34NVhQUjYWiRHybYLDxy6CG2KrFF1BCcPNWMNfktYmDNyZnAScpxmUgJnvXMzH7bbqFLgJmVCx3nic4B5Bkz5bzC"
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
