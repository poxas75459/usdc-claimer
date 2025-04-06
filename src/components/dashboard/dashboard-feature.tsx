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
    "5jPxZve1wC2LLQRKTpqYjJPKRCDkVNcf5K5v5o1SBzpZghReKiQvRHhcCY7ucGTvLXqxfdGJmaXx3xrC9XCCiMWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gF8ptbhq8vtBGbNkGL5QCk3P9Kak1WiaTH3JNwAdQ4sZwTy3wynKgVVoxV6CBx8mUSNus65PK3NV7WnnxRDVx4Z",
  "key1": "3pYjXHwjjkw23UMuxgSNsqRdbmiSBJ7gYB24PKRK8pj9X6v8pCGMn7dfrcQg2Zq63YjoGrrxu2U64oAR3vS5puko",
  "key2": "616phEcgkds2sqAikXahMxaaCZSjU3kY7WVYWtWedV3WCWfKmnZPR29BRxuZ6dpfuQombix2g26uw76yyFyS3KTY",
  "key3": "JcQjZT8Mhwu4DPKPhWrvXzxgH1XvGq2zYroKyEAJ8sjBwDoeLUSAc467GWK7NZLpizEeU7hL2JuNZtabbcj3GE1",
  "key4": "36W6ZzQiyZvrrchkhJGuPTEP42DjfHnSgxskfppGnftMX8uCrvJH5LRvHipCP4492cpLquvrDibYfX9517dwBx1a",
  "key5": "41GnCKHXEM1dkpd1t4sj5KTZR2RLvecvrASR3nkNUuxCKQc7RAxVmXrdEw286wdgsLwXk6JvdmBWLqBFZu1v1HvR",
  "key6": "3cJSnaubXaL2v4WqiMzdHDd3eJDjh1VPFsCtNb3K1exetLwWLUFaGEZzUZLYB9XboSBRPx4fDK7ck7MwaCvAvLao",
  "key7": "2iN7dTs39qeKy5tDAoPScNexuWL4V6hUQynv8fTybq2mRAeWA1uRV2VyS8EXoSDnim7T8GhqHyEWuYcAdre52Nvr",
  "key8": "5bnFWDNpeLnmzbEzQHbaEBQ6u2k8TZi9bnKhWvDR3TUSKKULTbKaDtN1Z7mXgzPGGo8p5mpcxwYCyBDH6aGZNbjh",
  "key9": "5DZFHzWBaAufrbF4AWE7Lzh2bmKGvhT8sCLAq3K5Z4QfGNxTEXTD7CzAYrKPxAZ6X5oLzdDPXoEfFiQRE36bPpJS",
  "key10": "4B6GKififDGPEUqfnRsHTWDAwXozQicS1xzP4GiVukMbKnxpcdTrQvmGGnftqBBVvx5AEPKnG4ToA6CMZRHK49j9",
  "key11": "2P6rFRvhDx5ogAECAjcYk1RAMYpiCPoGNR32BoC8KrXeAMm9o6z5VsxWSb421qq4c99CrXeaaTs8b6bkxaFB47LK",
  "key12": "63SY92tktXXLy8i6RYU4bWE4iA4j2g8LyrcEmRfbPcYageQfDqMxrp4Q2QLjqoTC2GBg3ZqG6zcZSrGfdZiSytJG",
  "key13": "4Q6ou8aZHmFvS8i9YNDprb1MjLR2awyF4WCmFu7eot8fD82PT3PeDwgtSws7K2dbYkTjycDvuknx6E8qH54RzVCR",
  "key14": "neThPpdnWd2p5LVRJ68cCsZDAnwc178FzW6CTEAij6FE4y9AHHZqnhgLXryevo84qiV8piJ71GyvHHUKAXAw46R",
  "key15": "4KgPn1GDYqmP3fZd7gfsNRRnuRjf1bRNcJVAVWRXzkAXMua46YaHKkK9RDFUmYSpjcAsxyWKS42ac2RtYm652Yat",
  "key16": "KD8WMUkLaeQfTFS7YgRCnw79RsRtmPRgT77emJXoHFbUWQH7PT26L8pFaYjhqjX1CMinxht2zcrTsbKhi7Zphum",
  "key17": "2A51CWKhXXS8QEzt23r5FhAzKyd2e5f3SqWtcfs6SQaVNUxz1hrSWVhmVQxb95BdbfmYGSEWksNWG3JJCwN5ACoE",
  "key18": "4vpyZUr6Zjonv4DY44ZSxv7qm9yEzKBk8YgZKLmwedKXt2pZJB4zJ32ayrW99uwKoTB3VSAGNpjHi5zet4KGPCbj",
  "key19": "nsFhmP64uYExk4VgS9jfKrZpp4TG59BqP5QAtM34fzxrRGTaaQgJJQcYLXQpEa85onuJtirv4L2LXTDA6EoRd1a",
  "key20": "5d2Z9QKKjRpF28rXdmY28ZSXhBQuUYutDUyCXEvDQEMQmE9CveK9HGzJjd7cBpinpfWUfhuETf23RYeYCGAia3Kq",
  "key21": "wMsrwQfsRn7U2FK5nwvPJcaeHirwewENkyTg6hLbCY1smwLH3fb9r518GtPvT5jsu9WFCCn2wyTJuow3NTwgB4Z",
  "key22": "2K8vshJNPViSar6ioU3EaH85iJDXqEXQR4wiTYFK7c9TJBjed2YbnsuxettkNQDKRWkHPDR4tQSNHUgZ9LHK1i86",
  "key23": "2GtmuXgCfYxQHp698mpVebxkUDA7NQcYBpvRTvJaTSn6QLLcAuX2RrDmwUd8u6oeyPtGxGR8Q9m6jY5L9ARJG6KH",
  "key24": "4mB14rUK136FU7E2Cuijwz3Er9AnXHr4GHWZKUrzUnNJApSxVMQaXNZV1y1QZJRWE26nBSTDQjLoeZbR7dBvRhkL",
  "key25": "4ZXgwkUBxCKLh9vXiSwxTGSbFWz9zC2ML6zgcMivfZEuv6RJe2ujuWtEpWtbVXELgChnWKSFWEvMyNPizDJ8ZxQ8",
  "key26": "4FqyXQ64oe1a3bX54HBykhKeNxJv74wMua7VoenX1muQDVhUChWSXLqQs2QVaD1Q9ZTtxKWsoFUrMqcRnJ6gMZTP",
  "key27": "2aEsXjztvWNytwyWMrD5UM2uapBDbSQwt6nxwqfQRgdVvApLJx6vcaBYYZmwRn2YoLHuSVoBxNBoXXotUmcxn1mn",
  "key28": "XkRDqEDa9535JsKErvB59KfKA2f8LptJV4hZcWQ2HZUoWXR9F1YXCSZAWVa4nxUWYVczYD6jEnutz9tc7cj1kau",
  "key29": "39fRmDr1FouBBoDmBtCvVBcVJ7oovYT2Dz3DFRLaYCHpPiPFhtapXv168W8UihRpmXfagWFFfewAzhCThfHXAozr",
  "key30": "2JiMNP7V52eAYD8rciXVozSfjbgrqnTvbexnaXjyWQ7pAE8PahWayE1zSPywY4B25z3H2abha1E4jKZzUSxK95cL",
  "key31": "4ZMUSMDXgg72YTfNbCML23nTc4cwvVwpzaBYrJGNiAoktnyyLLd27p9e4TGZb9YQzxKmuFzoiEcNT4oiususB6Wj",
  "key32": "52jRk2BC43uk5yDP7q7uGAxxfGZuRHGg5NPx6MByA7jnbxKMnV4oHLABBWo6CrAFFN5dUrc9X2EjjNsFuoXSeorn",
  "key33": "4SVGwJ54v6PpxXS1GE66TUFWn4guT2LKLVmMzMmgSZmBT1ee8TejXidSWYPVNL2KvVi8aXbau5i64AYxCTwzPJdN",
  "key34": "3ocU6ukKKRywB4h8QQ2g21si5TyLhnvAS8PNpzyPSZYcZxsjzwDexL3HjhQQYCXktqVGkP8WQqEp77ip5CgouzQV",
  "key35": "331gCE3BdR1eYvFhSBJXkrmUfFWQQLFuXBriYEm219ksbdrxga2V4VPJwZvgXS2ygScxNfXnRDGsRoPcoZueUfLU",
  "key36": "27F62uWeJr2WVt9VkqgavnY737eo98kWmdKgQ5D3x7bh3T2WsK8i3xSFNjTPLbqXCZXbKzUfP85BjzwW7ybpVMoq",
  "key37": "2a1H4qvxsWXvmFXWxuTn84wN6rJqQ8uAEFwQDzc8hx5xLgWxR61nvQ5mVPUvAccAQiqum4kbRCRfJRxrn6jVJNQm",
  "key38": "5w2cT7X1zDwok8Ygry2wAEFb7VMFAfmun5qMkyMCmYAomjSXPwdxn2CUqFr4NPd9FbCsDtkHpkwNEF73S1htcKww",
  "key39": "4Vg3unHsVimShCNUPFu1tr9WgdmDbzRs5aLjLLc44JCpBcV6SehEaZoMf1U6AYvdpVJ7QoS9pHXnmEtemUo1QiXr",
  "key40": "5LcsfnT7sa8ijFNsYMEadekkzgTTvGzgRia6TdBKodzfpLjDWyzX7xc4KUNG6q6hBG4EjeaphwUZ3wcUXTi8Ug36",
  "key41": "2bLX3fZcgG9X6VPgkAHQgmdGQ9Aom7WVT65K6BLdWpE6ctGNnFphGgRME34QQe42QZGzwv2diKatGRAAK7dm673X",
  "key42": "1dnzigNaVRrTubXLHYiBczfmUQFoYbJJGUVMhTQAmmjkXsmK8ebdmiEBuabCVFdkUWZXJZMrnrwvyyNDsn9REq3",
  "key43": "4gpPtHQcezZoDkaDnmpu72mpLyQaHe1CmyiVxXAk5UmGP12thpEa6pnZ37Gt7M1p9hmMQm5X7zTwFcMV6Fyv7CXj"
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
