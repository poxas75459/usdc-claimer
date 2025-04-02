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
    "3ByEeu8fnid6tU93gqdzfRuQFozF292Dh9yy5jG3jLDBsUmNAeyhNSPSLNFk38bLeig8FKTo7wtAqBY7tRWMa9Qc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZrsvMunNBbJWQaFVFNf1sfL3cNoW77s2po3rHJFofX9qUmhv6xoaYUbkMZpgx9omFP9nZojsjDbGpmr8wxRXN7V",
  "key1": "3ThHcmxWKcCF9YRcr2hpaFc6U6g6qr9Ymeh4gSwN7AEtKbqdSK5ZbePq7auBFLNc2vheizBHqzHe7fPZFEVanak",
  "key2": "4eU6VdLJJJHW6jXbQXNs7zNehaaDoNAvcL12Q4LvJWyjPeHbRC5jmxUV5Q6L79mDtDVu5rtm5WdJXy4aj5coK53A",
  "key3": "DwvSe6gQ3Yb5N22YWvQHwTVgMkKHDK59iWyqeBeeTtqWKZ5u8BfS4uPujGSKMzqQ1jMhHxJRSZ8iJ9PX5W2NqaY",
  "key4": "gdZibFRjNFHtG8wKRJhmicsdYmmHBw8VkQn7VLYRh69QkPEaiPVodCnkAy6vkSAL345cnhfsBsrSTiuj18vfwCo",
  "key5": "3YBnVe6QvZvjFJ7JXfERiT1YRthn6i6wEfcQXr6zjPKV4wfbrvJ5vpCbtrdsQkRCdENo497bCQWnMSHAcjWAtrMS",
  "key6": "2LQ4Ex3btxxEzvZvVjy6d8r5mg7KPGqiMc2DmbpAFFyvRjSexkjMqB1Q69XTvftaZQXrc1AXFD8p6GXnAm3gZAft",
  "key7": "4nubVTJWfhXcFpa22VQARmPf3ZpqUyRRSFqAhhh5YoP2FC2F9sYouF81hSTkhUkgRymJHQ789QFSzEkSHeZUDt6H",
  "key8": "2WSGBtnm6gJrZ95ejQSw6WmhMkR36cDTx82nPXfUz3G4pFpcp5RvRo8HZ5JWtDB4gShPk7ucMM3zLP1xNZbTemdv",
  "key9": "4hmTCqi6xeAKx3VgK8UKjvSpsUgQJXutEXhKHZ99TQnyjXqses6kAvXogvcnQSL1ZWiyvSMr75VgG5F2p28no8QW",
  "key10": "5tMsKS5xTqcWTzQSknPdSPEJuDVQ4hLKMgXVZc2tGv2WjYA8JyFDUX4JAnZgqM2SK5pcWUAtSpmGjqmhsHkfCz7G",
  "key11": "64Sy6FoEPck7w14bNsQCwokzwhoDRWwJhMaYsVo1aDXxfAAzEaMohKYx3o2hHJbyaLdVhB1rJgSdqEGXimE2Nxpe",
  "key12": "36GMJdZL5L5HKCx1BGV2adkGD9fowQDTpCurGW4cBpVcD7Byjpp7tw9qLrHWbSaCacLksMBqtdSvAwJjbMeKRX1",
  "key13": "2CLh6CvRQa5ALwRdsJ5MJUqBzvjdVsPDu5sLPoK5jbV2ZZfSzvPL6epCEa1Qd1XRnuBNf7sgrofd14EkBcdaHXLU",
  "key14": "2TGegacceeBwLhADaK7t7hbK85AcjM94L88vMWAhTCFUYdpSbRwK4cyLjjKP7UT3zxgMtZ7vjM9GSYzw3VCrieMu",
  "key15": "2XywtVHNYYkJSChUNwaunHM6JZcG7PSQmo93gQqD9WhhxdcC9zqQ6XXqGBLsXe5kcCPmMfKB5YmVgivUdtV8phtm",
  "key16": "4ADwEf67wyzzNRybbPQxkqjHgKCmdC4f1VU9NtkUufF7PPFm1WMCWKqH5YeNX5f9vwAJtYDC2pGdBbcaPLqxHsVD",
  "key17": "3ojpCysjj7PFK43zWBjCAnWQHrYBYLEdTEUnVN1jv2ARZBCv69eDrq6eTLyGC7LuqLKq124uhvbzdcSM9serY2ME",
  "key18": "WUcxdD44Kw2HjCThvMMfGHw29VQnCFHGQuSktuav1Nan4Ex43UcPbJqdvawFfd77TeMhQCN5R8dFWZB48uuwAnx",
  "key19": "2ZDHbcQNB9Gtui4e19hBHD7cLZ835pLem6S6WUosRqFSLFcEh9Ar1834asL2QxEQnUR5uD5jdY4QA2MC2U9ttzJo",
  "key20": "4gUNK3hpjWXbjoPgpz26Qz3RTRBi3ZcRSTHD37cMrgqLFvKgbS9RP4UmBmZadowKP3hyAUcKoAmV5h21YitCS4De",
  "key21": "4oaMLKdHwrbY1LWCz2cBQUzyGDMppVJAVPGMjjppT8umQExAXnp58PbCs7zFUbdcr3XSUhb16jcJHKqGAXTt98CW",
  "key22": "4ZqLFuuKFwqGX6L4HGjbZSNR5oRGdrTtYGKeGHqevUAdfitPuHsWaTFmXDuvLUdv7xXYjawbTVdgJ4d5hUqFyyn1",
  "key23": "4zXqup6zrazSsYZg4ffLF3GmWcRBZSuZRSWkFm9F56yTWM9QEqXdqkBpzb8VzbrAgif3yQupRbAc8RuJUECJXcGh",
  "key24": "2t77qX1GWsiLtQRvuhogcUFkb4WXpxuiSdpDsm47EKwwULv7XwvbRtEZtrmP6Fx3KcoWWLtvtbXhtLfR9xiN5g5Z",
  "key25": "V7bsqwND1hxyjAiQwZ4vxzhtutprTFjWsN9fShgybkjBnDsMQpqykFYKZHdvy3qiXUDLNCmEw12CafDKJaH4ysj",
  "key26": "cWpZ963omrmdG5YCBkU62h8Qd9uC23RgrTLwKv9cD7nFEJ5FiwkFu4Mz8ebPZwU3aXptwm4p5BiKgjMKXkwcmNs",
  "key27": "3cRGP5X2xDkYR4MMBgUqzVd5KYxJ48rPfDEaNCTN84NLxMq4k4SrWi8pJM5g3ZcJnJJ6zrmhcTQNeyjnLR5uZ2Qx",
  "key28": "4L7pyaUqCRB1iKbVfP5zX5UKtv6aougST9eYu2GaNDJ671H1ueqh5qnnRCWJiyq4DF4WKXCwGKTJdmR7Bj1HUij8",
  "key29": "5sgi8kdvR2vdCuPGkPFDV2yzKZMtQoRbC2KkC9TvdVmSUMS5hZzitDjYJ5WW612XN9BcQ4ykJMPzYxjsAvjnxctK",
  "key30": "5cvCy9n4ZeFtEFMRQYc4dmegBukjBtsqu8odCum49tVTHrDz9hiTV4uNrET4ahivcYXKALRHKZuw8KjZuypUTrGk",
  "key31": "CcdoGDoEVZFqTb9Ng8CjkyB8cFAbyPvbwcVVfc2Fj3aToht1BV1WzwwdMBVzEioATMeVp36HUbCvjBDEJTJrDtg",
  "key32": "cmfJokkEBZGAAu7uFgBHjK5JfWiZ5bYo7PZ7tgW3Xvcwj5W379LAJrR7yTDwqJoL5Z4vMeyCwZ5JCzqNxD1X2jY",
  "key33": "P8ozRGCdKmnR6JrboVBGQaaaTT6VaLX3j676eadWfJeUKdBRdTveYBUwjjwFtKyKS4yjrTqFHCksXqNz88mNGzf",
  "key34": "5bVYek1B8vTjgRGc56TiWocWnd3huVR7wzvncvLNRHaSoUKWywHKKn85Kk9q1CW4Vrf6qU6xrweM3JyKJQptjCbq",
  "key35": "397Vef2feUUZPaY6a82dxW6bQiPFmwZJau8ZC2JY9p93dbLiM9sNymgWvJjaYSqEy9WfzGS4TrScP7fibhCD4NTc",
  "key36": "4EGQ9PUhCVamZnUXbu3NUN7nmHzKbDRfoUfqkVUFMz6JhmaPkizyA9r2HRoBGdbJSXffcLmAq31f1sgHmHGCGCHB",
  "key37": "5sDqBYe67LpkECHMqWQpTg2PcuEVVYMxTocALQWziEdLZbWdxGxtiBrM31YioUCnezt2DBjyxGJK3EF679F96tLb",
  "key38": "3aocTaLkC74shzKQiZhKtvvfRDXGt3QWAWsF4cjPzVmzhVTGKzjSqS1ErkqwpxvQmqG94Pk2BkmN8XM5MB9dcKEb",
  "key39": "3Pc1rp1BxBtVzPEpRqbfsnJsuFuNY3m36mdeo2Hi1qM38apTjKwvSL3HXF3eJ42SwiXfr27WSMkA8NdJDNsnxizG",
  "key40": "xVYZhk56bLNhrfkk8dukmzCzvUWWXQJouo4J1NJo8mfLiL5P3chS3mihJF5awWNkXM8vq1PLjRBUXxJvb6HnrJN",
  "key41": "89BWkGeZVtkkQT6RbiZabt1CJ96nCjDzNJ83TrwNukRj5yfWbJej5N4xkzgBtCM85xgN4WjUP7FbgAzW6dP3LSk",
  "key42": "26ZR12cnMPYCPNESZEt8uxGBPJQT3yQxTku4PqdRUuJpGjaBSZ1Ct9zHLG28cF3GkSDu6RwKoLrZh6V9jAMLnjKG"
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
