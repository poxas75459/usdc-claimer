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
    "5Tt5yvLbBMtZnYTbvUdWY1n3rfaKZg9gmJvVkjiPbQaqFoewunNqMTUqqzV1pDDXnSU13kqr9uCADrzp9UuURQ4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aNbieEGFTVRzzUkqAy7BbuUZdeHXBPwBzixMMpm2dXtkT1gZmgM9Gb4BAKJ6Dz8HGJN47kmMCQHyNihxvLEozcG",
  "key1": "5gHpgK3CjRfkfGkpibQGRFrYDZvcTktDs8MjLuUy6a7SeG25m8N2oyZfBtc2jAaPVHYk7wFzgGAKRwqXMdEqhDHg",
  "key2": "5RJNfXrKQrzeZexvbU9uNA3LVDRaMLEdhHr2GWMFTQzQbVZin2z8Hpr1De1qKF7CTNs5yi3ocxxv59KxcHp5sjUK",
  "key3": "4qe3Cacsk7zxfm3ShFHER368VsA1AhyzqCT7bGyYMKMnMG67GUaX5cmmHRAaodm2bZ7atcEA2BxGEDpDwidFx1v9",
  "key4": "2G6FvFHxftGXFYvChf1vSSDVZA1stCdDsJSbFCbXxrZkYfucP9REYGMAzmuf5mzv19dBSJK9GiCViKYAprjB3aq4",
  "key5": "htPbaaokXBR5Ude4hzwFpbQWBijv1YAXP7qVhxP3hB4B5mNj9VXg6UEfH5vzUvWUHv7yXJrTT3DJ36Dke6SpKFK",
  "key6": "2Vi716HxhtxwxBGUZ9ZXHQjYVPdf8g1SSTb2w22tjfuPaAV9Mhw69mnqKhxnMD8mJnhc2zD2aEyCRakbbufxoviz",
  "key7": "64dpUps5iPdrYy2qSt5M6uN4GGBV45PkjYPtAtXKXPugcNR9EcSqCnL3SvH4gMURBU1bnziqj3upcPjoq9dLKTAN",
  "key8": "bh8kqyV6FV2GG8uQU9aa1QNv52QdR24vXsJ3mdY7v5gWdZRqGcML6WUoAtW3XAC3ffvh4uiu7iNKNCW3V6fFeSg",
  "key9": "myBzTcwoWJSEU2JJ9NrNQY52jBnjv2aGYjGULmJsZN2eqeCRY1oDBgGG5AmGZBAE9NKUjqmYNhbJeVPGj8kcqJq",
  "key10": "4Ur6mEkesA6TkvncpCfpYHhR4zDnLhdguYozhScavc4tkbrmrH84dLb13L47bHCv57uWjsj1jX6aujH7dZhhC8ZW",
  "key11": "2hbzkBCZFofViMW4Uy14Q6JAu24xVuy1dFwEuuFynAiEhju6dv2KUPzqXXmxtnsaZqUh1WygpJDoMWw2VKcVC864",
  "key12": "4HWW8Hdd3CqpPTDpUZGLh62Yo6tYgPYbR1uVhwTEDqWgJ9cG2vG7dVFwwfoUyTQJEH6RMVs16qLe1JK49f8zd3KH",
  "key13": "p4EGdGghEdHDvfevXVVqYGpmwmfGjtUL2pzf3zYx4uSUU6jwoZGZZG6dC42qYMkfVCA1B1uGPZASK6D2rgKakfK",
  "key14": "4vX4yjZCWVPFnsA3gSiX7URbgtjETmGB7tsveNnZrRPEDn7wuQkJDSBQ1GURy5jjM4QgKGdzaBhuo94kfYCY4tMy",
  "key15": "5sk2U6rrycUV1keWuiKDiiiYQj5SpAuZkH65aAsy6HD74nzYSZgTmAUjDkQPrsWRQ1U3UUWT99SsYwpywcH8vU9j",
  "key16": "2WE9f9FrG1c2NR5UHgq4WN7ZkLqBj18kd3AhrexuchaZVFCdv8fXpHschVuLUgnHmu95YoehBiDeTZsZkXYabABH",
  "key17": "5odKff15PLpuazEL7b9WBSMLx3Hn1V1ka539gysPfLenMkveUTjVcPsZSDFZgTMnuKCQHN1zW2zoLBy7ezJsBaCT",
  "key18": "4gQUU5UGbH6JKohgcvykdHgramHhJqxyFsutwrGU1PSukQtje4sgRVDLyrgVZLunzACcdVUxUsG1uuy2PqDSUaQ8",
  "key19": "2gDmr9wzcp4pk3L9FPTVGJUyiXzDWGpjMxNhtJWN3TqnoarynYp1KZ3pvFhtdBSHwvzBzZcjdGAwhMEUnoywu4Dp",
  "key20": "kipb64vXkqaTRYWPrpSUygMS6q9DXH3pd3nez5yMCQct429NZuXguM4D3vL2aKdhi25n2aUUXizumTuWtSQn1XC",
  "key21": "2cdz3Z7q7C2W7GcKt89LiNUaq3huwh2eHMkoQN8WXDW2oQSJXGZUcBXr7ys1EDxHRKD9g5rDZk8y28b42mSq5n5R",
  "key22": "3wTPuKpK28FLYMSUoVz2KUMMcDW3FjX1PBPiBqgEYvrhr5aQTt1jzXWKQrvX2UwK7UJEQZU8wD6JfzoPzyzfuNpC",
  "key23": "2d76i9oijMruNcZAyc1FPKA8z45bEduBebL9bpxgte8aFHwC3qZy1dz5vuQKrDjr8QY29ETfa84HC3255x26SUuN",
  "key24": "2pf44i337rhynwWMY7YFV8xQaDFQ6szFvTryLWjKoNnHP9WxgotjyWrSnqFJEF9ZyUNCu5XMqWonHU6X5UU4xy4b",
  "key25": "3ebWQ9Ux3NLnqQYA2mLNrUnmApApvbjpN6k8ufEEkZ8Mpjd1PWXH612DUxQCRnwqsqvnQYZuPnCXHv94LEiTA2Ux",
  "key26": "3mAL2VKkoWp5T3V1pzXVR11tmcqBQL1d6rM5Lu9WR16WyN1Bho9BddRMMFrZ4UEsa5RBYws15QRNQcx8uL4StRum",
  "key27": "X8BrxGSLgFE4k8mqR2TkC5TZiQuhvqohgRQ3wbU5693ZCQz176c2CPWN1XRw54R9iYQYbpNjMbmkdtPGdfUQ7bk",
  "key28": "2oCjfLZVCFUWLH5NpWeqPvRkUuZEsAn5pwY345b9NwXMq241jwq8GMMW3TTboUrADGNkDzPJvcsh9C9ePftDG32s",
  "key29": "4Ee5VqZWCEgKLwmaykPXCCLxAWrn85bCnbo6i28rp2kxqGBBfoktpsX2oqovPmZ3NUfrJ1akGkDofsYnzygTacwr",
  "key30": "64WVveio3XYLHVXdFrZ33rqnDp8TuuaUfHAov7VKtUeavqYeGR1tpbFup7htxzSQGdCuPsWkpfo1tg9XcEMnXibq",
  "key31": "3QhdeVT7EAdc4Fe8BoSNre8u4ceBrz9tzZV5e2bM7FtZBD5xJnx4m5Vvaiy8aJUFu94xojPYREoCU13zVd2XWg2",
  "key32": "5nSBskbm3C1ajvziV1znnx2fPZHeXYioSF7XpFgRXcpZSVUfdVZFDmCc4FZAU4zGaZtNXLPjNCyqkzpE8T5bqm1J",
  "key33": "4zHeJwSHtwnYuBdzf5gpWGABECKQhLL1eyhjhNNSHGWnKf1F8jre9as4wCGcPefxgbBubZptijkQYgC2iP1eKRko",
  "key34": "KDKeYMXJFvXm8WQ94D98UzTeqhazSv4MwwYb4NYEUMTML51wZX3SF9rMzoEFDF2WKCvrFwKu68hxb31nmErr4kj",
  "key35": "4d3UUxj13JZbx5S8YVqrQcmSLNRKzJEsZnDHbvDjraY1JD7TrAjVyaPZZXxBXZhM6nRu6v6BL1urPSHsShscrVjA",
  "key36": "irk2Qpdn2qkZDmLjNntZgdi2H74zWyqrybiyFcyHY6JiwA6NKE5kc1WQYHjBVnfgmL7uo2hSrGEDuUTKjDQZpPq",
  "key37": "2eoHJSpMK7ug3FMF7tQ3zX7WgoLm4MsMbgso7KmYLKzE8zgLfX3nBrVjRwJeFbDzamPHuffNXAi9uBiTssPPV4rK",
  "key38": "5hwGAsa9owjPbBXByJAjazenXk4aknGzQJgFeBk7U5DbYdbqhCKRYW6gfEZV99zwmHwmSWwi12JSWyXDYbamZ1V7",
  "key39": "3NhtvKuqSNnJtUotVKBCYiNAuftZs3BUxgc8CX7xGCg9ovxX4maDJe5sWWH4hy97JonT4gNZvXYFjDyBke2t5QuT",
  "key40": "64upL3THzFvR8PbBTyE8qxQAMuoiwpdhjA6PrsMztCP4qko2XmugrMiBvDAnHXx7xDe3RTTbssjFS7kkPcfCWkbd",
  "key41": "5U2ngXoi7t1a1BzMVfR4XgmbpwA3BiaKRsVuztEZUSsHap8dJFduBPLQTuWJ2m4ShJ9W51JwLcjNuUaUa1GboisD",
  "key42": "3B9AgEnonWjiPDUFMGPo8MD6BXxiAC7M6fc2GcVZVwNcu8xCxFMKMtnJiTtiszcqepxJMNKKpHjmkry5Z9WiqJZv",
  "key43": "2nRWx4F2v88pzKU4YSCzHqfbUU3KUvZGYvq1w8U5R3uGL3LqmF8D6dYat37Keb4sTRrYPrNUjV1usi8BxCJfj24h",
  "key44": "5De74i6rMHm8zzEy5duD56GD2nTDXQU8mAUGveKJ9UosBNftWLRNwhXvqhepeT6PZ76fA5Wavf5xGHuPiGehU7ks"
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
