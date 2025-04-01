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
    "27sT2DpcRsSzeFHySATdtkznbuMoLnPoAH3Ae3vqkUsDWL9NRbVdahCtMp2HVjzciDjUBptiRSPFK5KwVRAZ4LqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EpjP66pQqr5LVYWdSouqr42pzXTH6HYMaPbynR8Bq6D3rgHKAMEHDt77PAtuKszV8FnMLyb8qfzHWVWzkaTHuhn",
  "key1": "39KRf8W4WYSjcrwGTTLcbet7WfkqGJJjHTjj8K6JSR9sVUZ7WkwiM2YExVRKZuTCCDNtQaEgm3bcmpkBt2qtytuB",
  "key2": "54MnPz4LHUdS87FyTq5sr9VNbQAeAC4KNQikzhJZguVbLWjeqJH48XkHk68kfNHsck6yeLDKUETQrE7nzeKjuska",
  "key3": "tsDW7EM97QPAi9W2U2jG2VBDTyC3nPbHVUm6r5GzMCnviq7T2haoWYVRuKsdcfvSE2Jmcy2Esh8KDVMtVktPsRx",
  "key4": "2m8eSCJpAX4abdwJqHCDMr9WvvzEygHamC3qRnFcUPBgajtmvi79nvbmNyUJHrJJHFqyM1Ai7g7XoqAC1yBrsAGd",
  "key5": "vANpW94uQNjb2js1Sv3qVZr76eWeDibjtGK8YKHjTYjiLsKBTWw5TdBj1m6UJ4MP8nBSfviemwD6FWyvSAdieLp",
  "key6": "f633JRFWipd8EQUt3TWw7k6ULVtTE8S74zR4nVVAZ1uLi6VRDbe3k7NWHQJF5d36WaXHtkUnrUdXrpXUD2EmUnW",
  "key7": "5tkVAVtxDqhN34mGuxL8evjDjQsxfDCvCLxLWP4nPzVkt8PDkUfkuhm8A4uyRpmyPnSbwfEgZHNnf8no3HocMQMY",
  "key8": "3qtZashUAaCondB99VbfGdzj2RFE1XMKq2ujGX26Wo63ThSMWbtyt8bMay63C8JFjwt39uxWTvjpwJLJvvdBKPRD",
  "key9": "5qfz2g6e1ujveQ23bBkaDf2tjYiXgNTD39fNWeTKqG92xwekeLLZS5bbZPvLjc1fpkcqTkhdRHcdjeiBkTVi8emt",
  "key10": "4fUQRqEiiJTp7kjqqGfQ7QQqWyX9yUPgyPdDxYSwN8e2eRrjT7xnJaRtvGrPdGwfCiN2Tsnfafs2ntkb4JG9CNLp",
  "key11": "Gzx8r2UD4uqe1FJTqhhvat74obnPv2cQWuvK7HtZ9xW868L7vhBvLB17jTWAwv54Xa5GcewFMhyF3wszVEKYJbW",
  "key12": "3XzcgxqZxfbfWuKBQX7dYEL7adyKTnmDSg3sAsWv2a6B1serzN3ag5J1s3mNyeqoexScwsc1jE9LCjqwzyrh7vmX",
  "key13": "492sRNuVuDtykYQfmS4kEJ2oaqKbLFPpJcA3dKy2cH2JQPLNEZtcX2RPfe7PN3EZAUYyUbc9eFt1TwRsRG1j6ciw",
  "key14": "2M6BxcWTmh3iUY9HiuRjeuNu94eNGbzUUphoX1mpgnQieM9wYTkwfEekPgHxjrdw1Rvtaa8jJoKmBTvcd1FixFuj",
  "key15": "62YjJcad9RVnwQwXtgG2DaY5s95TboASUnrtVFzAPZCPkRiDCm2nuCsa4aqEwgi4ut7H5AThHAoNUAwLhV3KBi5j",
  "key16": "k17pjReiLpZyB2uMbsHNjEzsZQYgjdHAo7rkHC8h3UaoZA7bPZ6pFQghEZLaYw7CE21bkRNpP12i5QpTfnaRBaz",
  "key17": "2Pigsf8HX61qJUaN1icvXppGyYBmEndL3bckPwMj1GBZcHxDrzkGXJk5aWykge4vdkAGRCuUAQTdnBTSg3tBt66P",
  "key18": "41Du5do2KkjWKKmbQYHAe127Rj6EftizxugsKVowsMq3kGVnDdTf5iJ85bvJa5vsXh2N5Z7NTAvB9R3ho7Dunk5i",
  "key19": "S8MwDgLGJar1GLXVE66LxYYDcPNrjUCk3Dqgb19MPgbpTQLQYguDAaBh8XctxeqrLky5xWsuJrgR68YLBDDKMEW",
  "key20": "3Gc5DzYDHr29hs1fgkYwL1J9CxBNanrCf9RvUCtmpe6SdP7js5CUdmMKzGEqQFMFWtZ2BJHDa1cNgHiUiE4a1GNa",
  "key21": "3zQkcVVE17UoR7znZ9KPqwaeeb9sFYRevdzDE9CkxwSxv4M6WnLtzfpaEHX4GjYeVNT1w92C9tTx2wLUifjB3XVV",
  "key22": "US3uxH22tPMMjDMYFSDZY9AVzd5KuVMbvHixcABFe27sMtxqZH87YfLYpV7Wqobs8M7mKPJjQoCsQXur7RD6mB9",
  "key23": "4w1vew6matRQv5w75tNZxSrFx5dKGvfceYDiXrUphD2UHQm1Yrw97ttuqjdzxybCEXQGswVy5DtAcyWU9xtnpL4d",
  "key24": "5z3pP4uCHLDKM8KzD22AEzaAgfo6HtHXGMJ5fT9zTAzVBUHdXeoepDzLPN9qRQBNAAuBtMbQXaC4cDMcB8WVcLDc",
  "key25": "3jx8q5BZkthAtPRn5NnyuQs32N8cwvJGMHr9771ym7B6sdurJV3mpNcEhzXALxSEEz7xYYxr68VKcuYCSPfWZGuq",
  "key26": "4B65Xi2LUCPCVuVsaonwxBY7ESWnd4NX8c3m8HDeYTNWK1bXzCXaB5xe3pEdwoumCFjDSjnVEdSj1Egtny2mHPPJ",
  "key27": "2J7t2Cc4483xciqvkkv5KCfhdy3eakbtc91TP678J3yWQs6CTALMhB3CVSwMcFULuVxjPJ63g28UpjNKkRYi3Lyf",
  "key28": "2aZF1gZXA5qRsKTkRnZqPw7yT8nxwq6318kPhhvWDCnL6Vd4sE8vHhoa2uRCg5TFPMGvTRDAuLSxaB6kq46osenm",
  "key29": "61H2LRny9uRCRP2EGQnDTFXM5umsHV8JJ4yeLg2m9kEmvBtNRg8HJbK2g1Mmshbj3Rb92rkQGfoREAEm3VX3pFjC",
  "key30": "4EKZFXGfQrRvbVmtZQHqB2ZLhs8BEaLayr1qa7Rdg9ayBYAvX964kPbH4CACpUc2EAVV9C65uRmNyUVNuQcTNRyj",
  "key31": "3VeXhAr3gpYAwActXqhx5un1XXxRLmp9T2zNy1ie4eR91fh5K9bPYPjRhHytvzwikLZjjrx6ZoBw5dfi7xtKV5p7",
  "key32": "63nPmpaPbNdWyXoiCmWty5ubjE1HZPXgFKobqAXaUdV4HD4yzRHgH2yC7Mdi3WHDTWnMoD7EcZmMZdHn66X8dMcW",
  "key33": "33e6NfNVa1vCuQzhALLbFSpyM1hU6opLjAAWFPdNc3j9X6y9m9WxHTPZwBUGWcbMM4YCbZJRwGzH5LRJa8hTFQQB",
  "key34": "2AB9rrQfeem4VBvQSjm7JePqzTTFruddxhGsneSsArUcHpUuSCZ5pKqpU582kPFQymbYUckKiJQSoesDgavvk8ww",
  "key35": "4NEE3XxaYqi7VPJkRX9oNoLtbRrYEKCF1MFmvh6YDZQL6NFnGkYGRDRYiKssTb4GA8Xx3ZnvPU8i8ijtA6E6hcxX",
  "key36": "2kbtFrgBhupd8W7vrMMosAERcnPepszB7JqhYZvD7tCgNZPmwaogefX4DYvkcxfucjGscPnXK7FonBb5iMCVy5z3",
  "key37": "54kXfwwW27JMkGZbe2vYGriMteoFEwCX2DiytGzJo9btjx8ygiu8oYffG8znTdqtNY4VyJMTY2AfGWehDebjNUmE",
  "key38": "2iGfpzgHEwuNLPzHuRebLzjRoo5efyPzpmnNn4skgbTTfqcXQ7Eoh2wrdpPySFSpbEmy1w71qupPr2qJGt6VgJgg"
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
