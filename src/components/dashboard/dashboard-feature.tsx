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
    "2humn9HZPPgxuQv9YTWxno9okGtYxZA8JLniWCQ2CgEBLAdzASceNNSf9WgTK27bNU6k7AoqTprgTu5jJPnjHupg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XCq1FnA2HPgCTHCu2md7YchXE37vPiuyt4XsKA48m8EBTYjxYxvEwFn78bQ8A7aJHa6ADD68gwWu3vkWUzZqy1d",
  "key1": "oVZMEEE8JwvybET8bHqKMDkjqTYsb8c8aJrdLLaLQDZtQ76mYcDDEr1zL1gbuTsB4Z93sPdqostdNtBq3HwAo5t",
  "key2": "4VsKxuMTakTHsLBL278ebAfjKBZsTkC5J1FSf48zcFN23qbXB8FxaziiApAj6NuSztyZ8uGqRFKSFyHPJuAo2X9F",
  "key3": "4ZiYvbkiz2sv5naZsMc3aHpjqjs9Cc65dySLz7ck7y74u6FVQ33gFy7Txmku3hG7XksZJwTt4ivNoWYQ9NxAd2ET",
  "key4": "65wTp5yvMPwEbZePrLHtcaGWx5KPe1ciBXQpxYiFpTJnx8CTFn4CtTgXy31qfeCmAfU4j4d3UWgkgzX5A7V41E4b",
  "key5": "5SBnFCowCcgocTepodTaLg4Fwi6Cuef2nZzMLZvHWornqtKoxVHRFpUq5eifWwRkk2MrH22YTAcN3aUYJ9ymXgXY",
  "key6": "66SkTQXMExnW1xVvNPgNbK1RiAJ6s2DxLAaugQoVUnDs52gU9NdjKDXVLb2aV2GMKfcDvg1RdQMxzBFUDLr4eGgh",
  "key7": "4uQB3GLs86kP7Dy91hG2BVLBKohsp9GLLD9Y7jvfcqEbrAevqDt6nNxcxPmnKvvfEXasUzJovrFVfbCizaD2aVoV",
  "key8": "5ge4gnQo9epTNbBbzGWpgSvK4LXvmmQDbgcuaKy8YrqJUCoGZJp9RP8SCzA3jACkM3VAKEM3bJGcXbcb7yKQZmA4",
  "key9": "2NYoQa3ZKoew6QMiaxEYrQUqWvkPTF8gSgbiApUsjpEApmFE8Thzmxi8CUKNFrU7EaFsZi9xB7s1U5Zj4LqrvNsn",
  "key10": "5UUhGNpqjzzqqgEU4SnEcUFm9CX3Vyx5MSHRingi8xAkhjnEHtkTKnqnuRY5riM4NWGsecFqTzCS84n6uEoxAyoZ",
  "key11": "2WJX6UGsQamgCACcZ31eCZxYcdusSdpmZTrcNfTdx2SbnuMHWftmnkJoPWLQtfYiiHBqrfWjLhc5jXNrBgjXvguu",
  "key12": "4fK4Md1L4tZtzkxnQK9BKYNZF6uhKG5cPisK9eZEXeEuYGLkDMtvDrkB8CkN1CJ3sUMy9FsHzpqZHGNzAnCs7Dxy",
  "key13": "56Jryc4KAm4HnuovErLgbea3TLfxAnRPjQxi6yZVVpYs9X5cu2VJyF1YAfFKZinF3jAoxNkQjpiEp9QkZXHB9aJv",
  "key14": "45Li7AK5cVb67rsoRq3mBGxvt9WTKQe5w51gtANjmCo3H3EV1nX4JKvx1NTtzy3sfzKe11ycwhA5mxqURFV19T5N",
  "key15": "4R2CkXt18iKJf3ZBeeHN3SJRNTohwsPEiKQoxrEZCVEiSLvtTnYqEbKWzd5tNra7c4Bg5Xay49QRYzNrmcwCSrvg",
  "key16": "YW86Swr2brQJurtPYwoTavAxyHNjrrj9bFAL9DD8LT1jgA799jYmpJus9wbQddsh1JPtGLGERiLPCbMg1iE1ZpV",
  "key17": "2qCzEnLpZ3neJWLtY4CB3PFAtwMA11kFqm89BJCPPje7Dp7hutTyGMZbh8NLb3hvQto3zfym45m8HVxGkcbVY2RP",
  "key18": "5Gqr2Vgw7gY4R3rFrzNReAnEftTnYmsaHhULcSn3HprMx1Dv9YSKFcCkbj7jCN4we66qpALg9yKz1PnzxgWtGM2g",
  "key19": "4r8s41XbD4Xw5xRgJxbar66SnL4asaiS7xcpZxNjFrPAUe5nvGXqnqanj4rmt5hW3Q1a2iTfdaL5WUJddooNa4js",
  "key20": "5U71nyDqYBuHQ3cD3K5B8VBuoAUKWTbNsGFUtH75ppFnNfuR4MSvM38RD3EXLV1w4DZgNG7Wc9T5cQ8rxhdSWNNp",
  "key21": "2af3YamjcBmnW2DsXoaFFkmpx2bXn2TkRiCwFKCz3K8AbLU7oE1fcozakRjZ3Qwway5TfLyHd5vHWvXpBygWCHb9",
  "key22": "9AFD4wKrADTukjyozrMrVFTMFov27jLLeuYBNDtZ89tuqYC8BJU1nuXBKtDGC4i3VvHZXbMd1EbALBD37WJtjus",
  "key23": "469V6CgiNX2FY2rdjrGaRunNNzjysQ5yZiqUCGXR611Jiwf9v1qSszucsYaBQLaqgzhet84oYxpL8vVqRKzrXzPV",
  "key24": "cewscx3JURvRRVmWm43vHKHpoNk3MmNCG44LqpyPMMSjyGtYpwL2cg8CuYh5La6hFAc6ZRR1cCRKkfaMbmYCYJ6",
  "key25": "kRfJ56hqABSkux1Va64326kqmMrZxiEJN81wji3NcQrkF9YyU5WjFGd3gbQV5psKKjNfLCcrjU6FL3hUUgxYPs7",
  "key26": "5TMvBdDw28Bks4sDSERjVtrXULwNrSVZtPbS9rK7AxNpKpwa4a94dzw8TwHLCV5B3qxd3AX5jQQ6KpHC28Tb2KsE",
  "key27": "4Hs3htQGdwhQr96MQsaUhbQdZTAwUaSpNptcnWvK4RZZdpV9ezg5qhvFJ9f3CeMzHKA23WG3DwKJcswnZDwKNQWn",
  "key28": "4bG9fEXi6E8nHcikw8yXeMPynPsUcjQqCU8PHMZ8TBXmsYPhTNZzKHqZJ7YUW38TxEVkwGLT7RgfuPcR4Gxr8zms",
  "key29": "J82DM5kXbLZJPpywfe894NdKpNZozNKGYBTH2LFR9ZDtKSoCYvjHrE15u5JvJHNnuxJenvm8JScxLY7xNVCGVGB",
  "key30": "43yPTQN7Kyuve5DJ6ZMc3SCkLkouqcH6Zay7bvGK1EqVPbgEkRwgddPesu6ns5gysuaJJA5avsM62dMxzbhKkY4P",
  "key31": "3fwWEFhA5YEFTDsPw2CCQcwfiHtY12zZyYK6VwfQHySZ6cL6d5kjm9zUJQ3GscJhFrNNKoaBhTXrkHVhWjerf3TS",
  "key32": "2zdCWBBSMcBggeHvYQHTa8VBDZcZmLD54X8oLKjvt7ZTEewLLsZD3znsZwHDsMZvjWLxxmrjp3BSVp5EKzbdVbTg",
  "key33": "4zsSCtUPYRL9oho5xHnCkzx3JPjBvQBPKfHSUcfcqw9D5wej9F2sDKcpTeD3zyx8hbmfbkxdK277pNPdHiELD1dx",
  "key34": "jMFyYW4sXMgnBSVtRT3LWhYeN7N4tapj4vUAGczUCwZMS4aGvu2JQ1F3j4KEe8cmpnbUnERKShu6hiFUiD6uCqi",
  "key35": "4R1E4EnmM912SfBs6jd5zaGLCBPpyrQgeFYDjTzdYjRLe3RSHSWJxYjCv8skU6vatRXFmm2cpXGmx9HMPa3qdmZN",
  "key36": "53DFsZvGdxDTsNRdSsvF87xf74RiXZT1byaz7tdfX3XyR2W9c5d4SksKoco4jZusoWwwromEMAi2jUETZavBDmW1",
  "key37": "2dLAWV9NLBS8GscAy7RehbkYbcF81NpoSn3MVKdbkMrHNaLaXRtaRQypBj9sbToSyANDyqhez2TyqEkdkZ35xLTg",
  "key38": "YfXxbTL5GBbaaDiQeomiaAab45g9mWZmVFGGwXGKEMYDobAM2HswSpxWEe5xBvnzSH5NC9ShK3GPc4YLMF8iVzu",
  "key39": "65MD3DLkcYBycYgv9jS8CWsBV5SovcKVELMkPhXaj6sKDm6ApbFXfbQu5iYtNa8gE44p6KQVqvahLGpQtR43ngNW",
  "key40": "9YyS9fMjHCgUdPu3p2rH3PEtGNfZCw5bUpcjHyU7Y614Lddbvoxy52LWCn68noP6ZY5ASK6ML9Vax69QzA2YcSy",
  "key41": "5bQvc7ot48q8SD4akP9sv6DKLfn5Qs54rrNhdZpsBv7yYfTzTmMzJecxZFb3GxEP3rZVAQ5prmc18Yqtd6enfPnT",
  "key42": "3hN77JVb6LT4s3rTvdt851xFKkg9LY22HcVfB8zoegzit2zTWuypz4qMp1hAExPZUakDmD91KZ4sd6PACNnzXRGa",
  "key43": "3o3ZH1LBR8sP4wMGa4tomjvQXGbzBhTrjQKKVEVFpfsuGm7xQJkgTio5RA6rkmH2Kwu7ULuKDP6iCo2B6dWNmRuf",
  "key44": "4VD4YJB2viQpvvb85iP48cCRAsnyqw3mDHkNf8nF9RGNRsFApmixtyHW7vyiAMMQRqUdtNkHejpKHs4KceXRHNN9"
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
