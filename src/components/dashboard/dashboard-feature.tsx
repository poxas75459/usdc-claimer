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
    "5Rg5pZR3C5VEamTqoynQf5LL7oQSBRSUCs2z6SrQqasGJxwL1znNdEFKwDVPyiHR3H6wK68biTnSUGmkkjerc4oM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SYxjhwvu42zkLHx5uMjGYijP6bYEkUgDvNGJTnQL4NGc4g9kWjiZjcRTNFMWQkCzCseJtxZ5iDUkPXQqg7RuvKJ",
  "key1": "3p2uqp9hYLvom7zTBf1ph9cfQnqateCXFfn7XmmiN1BpKFDfNmBRznWb5RLniSYuUhRsaQ125HHbwXyCtVAG4AhQ",
  "key2": "2ctCGsRrroJCurKExq9jjjRB6bXa3Xwn2GwALL2RLCgwFZLd8T8NWGo9nyiqLqKVkvBRcqAX9mfSP4pnwJisH9eB",
  "key3": "28BSbwxmtVBvN9ERNcg4BoRrvN1JLnYpxqcNy7wqyzBiySb1Ym2PxYgZ74JLsUofpjByU1pEZxEGtszomQCim9m6",
  "key4": "3sDqdJnvi4FPaCsUr7nDr5img1Cg9zYtLqTbShecCWsWexQoFxkWPy9YsNrNo5HMsVs78NSUrx3xNTx55JH6Fxb9",
  "key5": "3S15gYxZfURbruZRHPPkHmhmrdpYyPYg5P1v5TmywEKYETAFCR3essnBjcVKZcvUApB8aTHZzag3YJU4AaUgWCh9",
  "key6": "3bbR3TzLym4EwHe1w5TaA2DVeMc6UgA9Bn3YmyD8PmzrsQxbQABv1HXsKggkdDSWxSqYTk9TbfXQ9nARu9SxPJ3A",
  "key7": "5en5WAucVYUNjw4tmo51oiuz6UFNByzsZ7GuDzjuvSyV1MNQBP5bvekXwFJewNnTjVuyWhjPEFjfH3EvKf3ozASg",
  "key8": "2m8qK7787upZeCoho1Ff6d9XUE6ib7ifxNLDaCmVUjbjR9H4dS8QpQoY46ZfpUtZ3w1cbhS3wtRFfVUuWmcCoThF",
  "key9": "5GUR8rj1Gu4nGGSsDKv7TCBsw7AGykotyxWaaLVauEeswFriXEQfsnMJpRYy1Abd1m7C7Sz6RoKSNVHZL8mDXFY7",
  "key10": "4FRv9YcP39hRpFwadBFThn2aUHxZzaEhpk5gmwQrLAEdBYMo1sDsP6vJvFhASwwYQoDY5horZCnEPwuDefLNpiYq",
  "key11": "4p2dVZE6qBZvj3stSdfrrqpcHgZ3rCLoAQrLB9qq2uZVRFrhhUhMc2NY3FZBc5LYZGCHALa2fQYAeZ9aFzcFavgf",
  "key12": "4xvDXnSfsEsuGbv1YVXkUoJTCZtzgoLnG3t1WTozMU4tfcwM3t7qEtrXN5o1LFQZExXTGS3ziJUYLE2VmcoH7AyD",
  "key13": "316Qq6iJMF7pvpu7yHQdxygWEVTyzCAFP7CH2Z15VZcBQU4chLJPwUz3Fz1xjkPr7h4jrZtexauUX6LMVNFCC1Ui",
  "key14": "3KYuiqqDrBkmbmn4gZ2KNYLsBqBCA7SqE7tJCuTMZXakTZgjR11bWPjwc6cDA8CVc8H5h41iU73Ecuvh9hwvKJc9",
  "key15": "YZ9uSrY7YWyupdQ8pb438UQYWPkkxptaPZX7gcGdkPHT4t3eSDy19ADvmyVxAbWMyERp7jzhLu56NcAuvzHmkvQ",
  "key16": "4iy3aJRiihXJ9KPEQdq5rRLWSxT6cutTrEq4GgGfMQWZDHAMv6Rpq77ycf6AXYH4E23wRvTF8ECscj9eUWGxKsCD",
  "key17": "33wA5m6y3Qz2c2RayWeitDwiDfgMVJKPmNbLqi86ByLuYM8xn1xj3vmaUAeKM8BSMdCoAqowWpBcByZeS2gStDG",
  "key18": "4pWPuQCH7szCbrdwj7zA4Wv1sG7Y8zsWwKMj2L2mbnhBR2eA7K3tANJgmLFFgwULqqwiDzTiTRJ9oRtNgFJmq11y",
  "key19": "4Y15nszhrGfwfjb42XLmaLDuebHpbWXY6HJLxwARMeZGdVGyHeFAo4dfBchogupgSfHLJZQ2sY7riKyywgxHbXY3",
  "key20": "3uWpF3Yy4XeNkFsEXUpuSSbju5y8jxYFEqn7wg2Yn4wsU969htQyncnsFD4q34Mr3KodxWG1m1Dv9q8xFQttdgji",
  "key21": "24UUXTH4q6ANCD2s7m2HJfihb5NWGWobCR5KgpLh6NsrhndyH5f4peerkFHDg4srACpJp38Af9hGM1Rep99UfRA4",
  "key22": "8PU9xpWyogepEHy9At2rcPNMTqmWgexpGyyAdCMyUtxV2XBWdi5nWM8gVPTneTTE99QXqfRCr4SrcAJ1QwDYJYS",
  "key23": "ES69ea7fqa6NMhrQRHmQUc8nGUsLwE4rjhRJzfzVrGWav7kzasx91Xz84mTSNoqYGdhySpACnYdyn1RB4z1eSoF",
  "key24": "4o59CFFKfFKgNvFaCSiKZG9GGfYoALeCVJMtFkbjHSaifeikKXtEUmb7D2XzU9HM5LZWbPjNSw2JqEkXYmyohay3",
  "key25": "5yKCmWCA2kUaP3ioGU8MrCx8nFmCN6bUoyWwzPCYctZy5QmZHqfQgYmaWSgSm7sGv7ESVd8JbGaVX5pwFfzadWtE",
  "key26": "48vjTyB4S2C1cCLfpJej5d81Zz4UJ3eB9HB3FdW8UY28n1vRdUFz8G6U6uSwb4MsU8mEGt3zGPM5XNb9xLGVsYGZ",
  "key27": "4SqAtkwpPvjbfUDPvR67sxbGaxBgZ71k96WtpCUiE6cdQtFJfdXuXnSr9TYkT8qMLBDYz6BQeyy4WvJQWD1KSkaa",
  "key28": "5z78VkCtfacfzmxfCBnwt5djeqAGhho6d7D38M4Y1WgYBVVBGSoLEQs9Bj11zPJeTUs8kE42fPorLMnUCutArWdr",
  "key29": "2HUmTDbQvS6aTvsJzRW31wDW3tV1iHibvYExqDRZfoes1YqRdDnSR2QnBudzSH98vDyrSwgPaSuBk8ZKxVSzdDMS",
  "key30": "2eufNmu5jRjjGFGwqsyRrC6wnq95Cj6hxc2yKT56HoHMwx17wnKbS5aqzkVvbCEn1hF6ciBVqPPpeuo3cU1Z9zeL",
  "key31": "4dYpvQDu9vstckDUrHbWJsLys3RB3qV6mH1zMeDz2KPujoqrH6BTa1BL64rQ7f1cz2HrZHK5Q2rBBNKx6cUg7AjU",
  "key32": "4BX4AuYeGH4GywJLFGbk7tvKcnXAqbM4eNKSsjPFkCJKdtcv4JCKBAcHSy4n4QtmFjomgLTT5pDSPMnhLi44qB3R",
  "key33": "3adTwnDtQ258GKuv1D9kivTKVbKw8krpTuozsXwtqx3JJqdPfc3SxRuc95JWG9BM72heoqkwk4J4yFRiT5ckxBng",
  "key34": "4V2WQcnZ6Sw36JAiGbaBw5QrtmDevoac89APhvyTZ5LZSCMLG8yxmDYmnttsU8yGq2bc15Vzc9bbhoHcebGhycke",
  "key35": "5a6G8UVRG7RuoXbQPuP18P1iL37La19gfdSCKbEfAgPVFMJcCqR1CUfX4Lhm4C8nMZxCnLknbamJLEp8ZKnuwgja",
  "key36": "4bRpVFcxXR25NaKek6zX7Je3Gvu54xQ76VYAJr6yrXUj45kcouFs6tdiRkhoSVemSyDZLxYxQCZ1ePbFeeqaNyTy",
  "key37": "Jqd5srWZYNYtcWLbcbiDd3M5YFBfwHpVY7ALnUqjhgoTixTmNjpAhyNT5zvPFLXPE8ke6cdZMGiVX851vNER3dg",
  "key38": "5yL6NJ4JcmdWg9hEDMuAEPgoPQbSN5gW38841zNDE5U2piJBBRmoprCdj9y5P4XxgLuc74TifHvtJfoWAZJ7qkuy",
  "key39": "c5PZCqiyJLqGct6pM3mc6cNQEsU932nobm8EmkNDzfWqBqsjjeeBJopJeR3um7fvNYGtHrDfRuWNoGcJh84P9uo",
  "key40": "5FNzAndiKdC25e5nJUX9sFsqBaYWce67uBniLNDHcPzyQagdwcpuKVfhy4m3rxsaB47Jzwcpp57xWdFwH7VyGmXS"
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
