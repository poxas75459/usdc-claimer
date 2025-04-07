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
    "2CcQrmBTLig3qEP5fR4mYQAQDxkzG2H88kWoF46npTx181C5kpZ8GknhTG5igTbHPjSby4UHLD9sw2aau8MdxBBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t6Xxw87Zan5tJJJXwBZSCiabvDF23GdyQVhgXucLnU5PojpSQ7jy6srwrWbuDcwbk6kgA5XcymQw4j2invCL9rD",
  "key1": "2qsjgYTyEa7mGh3fSGoHbBJ2M3EBLn5tp4Bw5CN2ui8q62cryDLWBPGX8DQq4dUrocm8YNZ1qEmffKVs7SQbgvJL",
  "key2": "2kDmnB3xfFprBX6nHxXoLZZtXSd3d7s2o5XUgkDBE9z8zQmnJaodq5rG9vnwXAafxhmTCjh8UHE7YHtKskSRNKqw",
  "key3": "nWxxZRCaDj88MrtJaVcU4ajMNdzf9fezxySNVtLtecLz9apotoxiTaV3kDCkaHV9uDTZQabWEdqs6zjwrppZKko",
  "key4": "MCNQnHBoPDvfcc6UF8GSzYGvLhH6SrnXya1kCgFt6phvMFzKdtBFZu26Fi7jWXuh6bNHziX9n6USgp6sD6A9BFa",
  "key5": "5TFsLP2UGrbREWmW4MyGCV8eHfALX2Lb6FeAMnK8t8RkMeQbZrvGk1XDn17u2ddxjt87j8d8Jn16qyf7Tq99ELS5",
  "key6": "4Pd8q567NeRa1mP3YFS8xoqJnfHXLvacCmUGjVUMJbfWhAA8A57bXeLRjfZxvWJWGSLanzKddmVmDDPyCpp5WLfm",
  "key7": "FRW2iebR4aUTcBsEgRVDFFHrAXZW7vM1orSnQz1JxSvMyBMtkn1i8wVJSBiP3xm6zcwMDjRCreTujoaVvu6yjdT",
  "key8": "2n7jXno4514tCxo7NDC6ujeb6Wo9XWQPDpDuTXFGYeqND5y3yDa83t8ztZBw1bYs9TUJrAKH7fkUU3UG2nzNsUG",
  "key9": "2Vxx5xXmdfbJ5VRk9dLAvSvsZc4etgZEJ13atcGACDcecGKr7kXf9vEN5jsG5opVeqb4xD3ouqxLfBM6t7vK8tHN",
  "key10": "5sY6DbSucuLYLmnHE9BKMbodAyzk17BF1Uf2c6hMNRTYvS7jsuHaRTi1fyHch2dANCqTzbm5yabSktP1N1oQPnyz",
  "key11": "sP3zberd7cdxS7MsFidt6s9rHxYAcZVTCxFQJPJ5fWQmJrJzR5ZU3wvEaQ6NDjeNWEraKvVeJ3ZWGL6bBJm6ZLb",
  "key12": "5RivipEpb6ZZm8vPfFnocXzkFDueY2MocNbtJFpKQ7JgXEX3oGt9UWPnBwaMZD3Y2JEeeo4meyMgXuNNVPaEWUiw",
  "key13": "5wD3PhMCdiFCLeehKQacE1y8YodNzindh1DZKGfQ4AhFcKXue87rFYBv72a2v2j7SPtNUU65RoetqUgELnpS3J8f",
  "key14": "4xK9ZSiuUUXuqZKYC9AgRCpbNciq2TkjtWSB36Lc1fGzNTtxviDQpYfp9wDbUAdjGndpuVTWDtqNXnC2kZnGWrMB",
  "key15": "Eh7eXbcFmoBS4PHYGN7S5JE4R8MmE7XUkFj3VeqikmJ6MmsBk7rQ2AZxrQbKaxbDaDkSeB62JCwwu5rwkhrG7Xy",
  "key16": "2fQPVY1rqV98SbfkrL6YqyvUxhGXemc8yTkE6NE2FunK5y3aZS73JMeLUNVndvpMZpC8oTfgyeW5W4ofCb7gRNQw",
  "key17": "2GJkS7Hi1PNSmYUMysKFNs6wSgpbUSW9thTmy4W9TrbVjjmicrDKNCAknC2H46nwMgKPJ7o3UkguL4GuwcPF7BaU",
  "key18": "4ujLcFFcd3s15BntTA5qpwCrLJCmeUXP7d7FMNdjjAK3szxSfggQr314o6wpJQbG2iyMhHx9nFKjPptco2H7vUJR",
  "key19": "wB79YYK53BcnGyDMyd5KqXPBjbu1j7H5tTSoLv7JViUAcnZDh8Lm8KRk9xcopykZuJhPBQH7iMiwh76jkFUkdbs",
  "key20": "3oXhicfkKNANRrGQJv8xGKe2fFtMh1Kp45SnVo2Wur5gTeQtf2ZiLhJsF3ZMTNrBdMc5sP4kY3xFKf766kXuBHj6",
  "key21": "2WW9Znu5acAvfPaDQz5Limb3npUZbcZaATgc7Z268T8qYS4GUeqPLfo8EmvwAQ78DSqhDa4XYJPByBTkgpdx2rfQ",
  "key22": "42yHiqBoA23J2WQrfnqgjkGpNR8qLEbhWAUMMYz5jDSkuP7MGPTEq1ac9xhzLUCV7GKMppiGX3j62fQqmoaAzme6",
  "key23": "4NPenmJTqN4TV9sg5EQwEv3FxAxt4AGvKgYLvMFBX7uPDHmZ9S8K2yyR69Mn1224K9aYn1vmQLK2SU5j7wRCwuy8",
  "key24": "3ayweXfXAbMW8mCatc89dfUHVojgvNW61HG4Qp6zAPy7jZx7gHAxLXKpw9qH2prUjm2cuzdBzoKJQJAmtYhRrBwh",
  "key25": "474fDBnRme74AhTxr4css9n8b3ur79DMc6Q7Zvd2BXfxs9XUhxxfgpTjZfrvJion2RzVTfMy2bFzgwLzCK262yxT",
  "key26": "5zG4Z2heNBLLZHVxjaAvLeTxdeBHavXqCSd38jXYD2QSgKfMUzNvMGkn8k6VorNUGdXQQd5zRLerGKHvpJJWNUvw",
  "key27": "3vQzMETHNFdkp57VBHaqLfJyr1SxtPVbzZSbCWqWK3jfgbmg45UEHBeNKLsMDBpuotoLXhWyGAfBA1eFydtFJs32",
  "key28": "2c6d2N79CMCZEBxpF8BGKpAa3uxqaSKHiJMrFjXkkUnApTwdtWRZa7ajV6GVmzJNVEmiH1g6SDxhVQYtiBvschWF",
  "key29": "cTb3hwDthNtDBDT3bQyjKuLp7ENh3xgEpLLtb7w6fvBskxhhgeKPWURQgS8yrsi6imPxXVbPgrbaU7uzeQrCMiF",
  "key30": "63xpy9ZtJBx3FY3zrm9VEDdKzcqx856ty6Kxdj3ixp7RFTXeKkK82jCAg8QYqhbnE1Ynz6ajANjyNQnxx8njXBGC",
  "key31": "rehUPm4TD566SFkziRQo51Fr5A1zo1L3xbqQiShYegpax7GhU5g5xWYM2PbeQNZN8ynadNmGCppyePQ8pv5qXHG",
  "key32": "4RZVFYGhqS7PZ8WBSzpQT3iygMhRgmZoL1bNyW7Tw76hsuu2WxEbLLK8CH4v7JCmF6G1uzo8F36TdBig9WYK7cng",
  "key33": "2qLpA6Vjt4c34zu4TKCRXB3m7u3YdwjYzRb15DuH6kCCXNwfyzX4wS71pGzQvgvo9XQFXRC917ABzmzVgHHcLLM1",
  "key34": "LGvYGDv76eH8cqS5Ar6SmRshX1LQHJACcEZVgy8e6BwwP6YUzP3wFNQ4MEQo6RDjCoyGUHhVNqAr8EauSD3xKyu"
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
