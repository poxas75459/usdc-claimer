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
    "4tVGsMtviJdgA4gF4xUahT5jsQqgg65RQnfUjibFLfmeL1oTZRXMJT8H64PPi8UwdywGoMGBknnZs5TF5pjrWRR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33HVK9Rq1Bk9mxdaPCHixtVuV4zFnuk1sBSTZgSdu8v6cLNCypR8fkHwfpF6VRhpUzdreNqW2jokCzWwiZ9K6hC5",
  "key1": "58KRz7TJzEdUA5NdQoL9kb9Z4Rh8NdfiTidsMHLxvbuFTiLvVZ3iir9qW2ybPw4fpfDub7vetbAdgxXXD6mKPpHz",
  "key2": "4yVFdYJ2vxvMhLxkgQMo16pjGG9FGXXTDjiTXCReJNZtiqD354Nd5eipLSaY4BqmwwiupDbnVGiXCq9wkBvS9vgT",
  "key3": "2MA5XYRXWdHCCmreBecuVx1nuMgE8GdoAeUDLTYV6b1XDkbsDTvQQ8d1Lixu4t6TcrmtbUcqgjrn4feq72GkFvPF",
  "key4": "3anFG6tbP7ZrSjAURuknFJjWcEQqN1GubhvzpayrsnTYDM1bSNFk7dGhWijnznpMCTc2iuFLmg2eAFJawnfcjLdL",
  "key5": "2vh26Xe4iDracaRERf35hzNocMxQK3tgSB6W5EyasE5Xs9jnVLrYKquUBwrVhJHRXCqb3cEDLTqRLy4U1taDdjek",
  "key6": "3zdwYNMS9gGR6R44HKpwpf8gJYQPJqQA8zuSpxEyBvGdrGeW3ji19z9bJL6g61S456iqrtm2uTiCAcYHW3nbkLfQ",
  "key7": "54WUBGTgLrThGgH9PsNhMs67onk2ThaUrW3sjR5X46HLkfV92gShRMzkG24JjbjiQwU2GRrpiGGppWHEij4JcK7s",
  "key8": "6yDTizazkSKhiKQ76atv25pUAUA2VNpuchtK2F6nCdQwEfXQTh3fyizmzVardVjWpcrmDf3ckGZSqZX6gtr68fP",
  "key9": "5xHA4gJQScaY6mmhdqe2cuitWsAgT2mUkBQs1g4MnyNLKHzmvifPwavbXMSqXBLCuR4pdkiStxt4wmZ5t35wjfe4",
  "key10": "49zyzCFN5iWxkwV8RKgWBFH2CRZaSJVCtdEHBM3aUQzN6k6X3ApwUK3yyopMvMmhf26MJcxgjoMxzvHqDUjUcqYW",
  "key11": "4c14ZvHRVfcrG4bo1ZzPJ4THoMDjLWwYyP6MpZzom2CsUJpmixMNKX2Do89oAJp8TiVwiNF4zRFmQMuNEZVmiwxq",
  "key12": "3gfhagnexW2pygGTVud28QmFUw7BjWskCVUQ1baW4Te5xuUbKvqWBvv7PsCQkjiSg1FFPxyhRge3nRjKCvqr2Xch",
  "key13": "3Y17oLPdH6VutDQ2u6tPH9JhyziPJJQ6nVnqQhyauGesgKStSBwr4Sc9sJ9yseXckenpAhS5HiaYFwzDBAojiaZv",
  "key14": "5Xg6GSMdHoSXLeqwM4HsLgNdofzH5dhzrFsQR9FUbE8qHoP9NBkozAz8gSQfpveWmhFGyCcyoXsYwN3XPBtK7Ao8",
  "key15": "2mi8PPjii7S7TE817U9jMZQepsFBWA34DxJvkMLeqHUxcBg36TX4SVTrcSUg66GwYQjSsPNa9iH7TtcFZZ6a5Vsf",
  "key16": "2CWvW7QQuB9ePd92X5Dv7iYHABwGcF1LGhPX93Uvi35Q4jH5ZPHbw1YxThcJsppMo5ygFi2ZZHTNBZ6Rbe2VBeQG",
  "key17": "2Qia2hPdLMv43A3uicc4NmBCyJiyzvvvLR7gUNQZBafB7LVLxqstcmdm1yFZ2DWukeTnFAv87DFtnCV49Gn7wz5r",
  "key18": "4bJMocwLwcmom8BTcH7AyGQLpJpLaxQbwP2T93NpCkjuNDrMNqqEjY5zJn8qRp27rwnh4TARFpVonhhpwzB6wDrW",
  "key19": "M3ttuAikNzki3yPNcrsbEDjxXc8k2QGF5Nug8r7TsSJEQkAZJoQZLshfu7nHwXsqCv3pWpNvGhne8KqfHVkLNew",
  "key20": "3VXCNzicYcF7TjhfuVosewb9kCFPuYjrTx4DZBwzyV9Z7urwbsDukg7Kr7LdAcd8bAKQWUbUpjudr4uYGzzy5vqe",
  "key21": "6Aapd3NSXzfsfKHbjdUYqFt86gGFh3k5hdgWT4nfh8EJwKAvyg9EhCgnYUpaaDq3uopKoUFeJ3ooyoL7mdYMDMN",
  "key22": "4Lyrrc8fzHciKP9UoyG3YiTA3M2kGxbmbNtgKm8dMJm7hLxfMmDR72ScfUTkAAcoreqysoyDML3KEybsXz8sAT4o",
  "key23": "4NZdBGSBUDLx2CqYttLeSUH8a3qcfaQzVN7pzAzPcmxBCXSYFAZp6iyCGaVQEExeVQA3qVwiRH5UFmYwx1anknNe",
  "key24": "4G9inpgLkZiwLw2EpVmWvMG2KQwVXKbsGS54syrzzNTVqZMjJHSt2BVgU7FWNf2kqh5tmAeuhUr2uw7Ehs82SLni",
  "key25": "4fuG4E9McaR21Sq3RDinC1x9wXSnkeavpzDHT2ufLP7PPFqP8PwXEnBGcLavqnCG9qRjbnAgAqPBid9NLaZKaZHm",
  "key26": "3HvgLz5VJwFiMGprK2nEF4tkKQPwhgPDYSABfHs4U6T3kN9bh7d6qdpkxvhBrSffFtpiEe12D1FJ2LKUwNUM7bkD",
  "key27": "3sr5bRgcGWuBTNer65yVEFWaoBLZpqHPAodSPTdpyGLqAAr1xeog4u4h4eLTxwTC7tTU2fQ7yGRgNzg4sa46vj21",
  "key28": "7PCqzY2e4xKEybUTZg85ntc2DQKbh67UodWCxSkobWQRZvjoTQbHoGCNKcWWiG7hAeMeMugoMETfw7jbSKXFHr9",
  "key29": "32vMcPW5KfCrSM1vfJ1YW2YngxwU4Rht7LZdQZeaZZeYtV7pD1dFNUibHMV6KsxbzouaNgf4iQiDkjJRsLxjeipD",
  "key30": "4SKkL15hWhUi35mm1TQZuaXxviTbMG4ZamWcFgo29MX9CJUexFP3Tf1pQMmEMyMy2qZBDAqzGRhCCSEQ8kN5qNGb",
  "key31": "52afSmJ9fGFYsouj3ywP6noGGHXHGgfEDqyvLy2KYZxcT6WHJx2FnkCR28DJaV1ypb81nrvCwNy5qXE8t7FJ1UjG",
  "key32": "4BzP79UouPYCtun2oqEp4sf1Hx4hhUp2q1iQHxc2Y15wm67YxYGvDz4rFDf3fACpkryBEShShaTrArEDtYYSXuPP",
  "key33": "5hFgaH6qRbWaVbies2t862QaFXfL1hX7vCYLmYfSuc2vX2nNsNqsp3a1mDqCDwATKK65krngzDQSv4y5NxLUJGAP",
  "key34": "55SKa55ySeHrckryE8jpRA24iYVQB4ZQA6GBzu9neefhsyU18m8FX9Anx2WRgUxv4cgtdi9c6Jz4Rjd7xZoCymQb",
  "key35": "2eYFvPQdwQ5gb5Ntn3ifX58coacmxqiLVat4kDrtgq7ARUYMTUxM1uoK5aBe5Btizfa5N7vbHayXLhXBTSrVoxTL",
  "key36": "D6nqSrmtiqF6wdWV3kXBkKECeyXZF4KHtdm6a6kKZY1RVvkvvatoe2joChvKNWeVa4ZQg7jCZey9Tv3AExiLSyQ",
  "key37": "2hUE2Jph1ee11bZZ5pCv7PVjQ2drFqgx6cxizYf5iqTSvHLJ1nVZuoq4y8QH9MhETdMBJrYKDnf91k8yb3epRffh"
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
