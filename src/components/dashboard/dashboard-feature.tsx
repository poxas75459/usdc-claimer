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
    "2gBpY6hZ7kPbWh4qvyJvEfQo2HcVVAvPS4YmP8wcJ38VKu1ETXvQAJpuSQtXx2317YRTVZZZ8VgtLJduRpVBNocz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f33jQ2EvwQqUtzHNb8mH4TzLSFFDBQq8wzNW5C6dVWkSQVrfM6vnMFfHb8aXcatWUjPpUYGRHDe515WajQYT9yM",
  "key1": "4eBP7Pzr6zonTAeCpdxNA8SR7QHch5NKjDdj3JoEDa8huD24EkepKVVYNzHcjwFykLeVfYLri1xdbHYRd2aSPr8y",
  "key2": "GfJTbDJpHsrTWEDVG2NhCRKK6NLvHVzQwQqM83CaLz5QLMuyknht9z1ZjaP1WUTimVjLwJDhvRhWu3pYr21vgFU",
  "key3": "21dxnuohwRmzbCzHcF8cmwZbQ7t876hvXcagZfUAS3iMYnM6GinuF49jodBHGadLWMLad3b38RUA1iu9om3Nyasa",
  "key4": "2Vnsz5tXfKuHSNHfnzApDk6qd5UPTraZ1Js7yPmbiYKjsSsUXEdZ3MtWcRr5ZWYxsbw9kMpkRLD1d2emkLUwTnun",
  "key5": "3pZv9T2ZCQXFygXoiqQg9PcbB8W6rtv4Xph26gqYQpYkeoPqXmzYqV918AxbUvSojxSZYHv5KFBuQaR4gfRtuVPP",
  "key6": "aXhB1wcyvFWM6qQQusPwcEYFimTiJivNcivDStx9L2arHrNgp2HMjxYf8SGzmBbWS7qcGbWnePZZd1rpyx9ZN6x",
  "key7": "3Xk6YJJRTFYdS3DASFQyRYPNgXdZzcjEhNY4PVo8ZynSQzvtmpGbAUeKkWesJrpki1LMyf8FVfAAip5KqCmCbpKs",
  "key8": "jvy3Xudh2rMSCWc7TvL7h8QrYuENTCeBy633mUJChVJZP5zDSkwi3ZmrSq9ckA1v4SQj3Pao5wHkKNQatUxe31Y",
  "key9": "4isnQhyRsTUt13H2zgfeBQX3g4vX61yKH8x2NKNMooqQCrW9aFEUb2jMoRe4sWcAsHpbQnSfKVu2qXWLLTGJwWar",
  "key10": "4uCmvzcEsm84ASuQgLQnDkmwjX3Zyt6Rmdx9YHFJdJgYKK3tNd2b6qrAphFuBYM5R2nCVxFRejdfjfsvR23ben78",
  "key11": "3JeJJfSSMpyt6DH6horDk3L56oYuLtrzaJW9LcYFK544mA629yasoWJ7NGxQuNLP8ZcmvHLCirL9Dyi4MzDQrFAQ",
  "key12": "53un5vwEXtev3mBXA7ikLGVcVpFf7DByeEwDdiK2GeYbEtpLvGazJGJxgTprbTSxjceB2kF82d1am26WBBrqB33L",
  "key13": "2cfQsctLRZFMZ9yQo4cs7V9gG8xdJxRNagJtRjYdJYzs9j2Sdpi9cE9MekjSYwMJPWMNMTDC5UcasJW9orsKQnvd",
  "key14": "39X9KZg1GMWHowys5HcsZivqVyceNho7dxJUKEX5AX8j1fPp9in4zYxy8mHCDSACcx1NwCMm4mstmurKjgUaEUBR",
  "key15": "2kHxisHjf9LnCkPMfXzLvuCBQY3JKPXMgr3A5SdMdDUxb4RRaLoaK2s7Goi8J7v238ugLDWccbD5bjmPuM5ySa6A",
  "key16": "3QyAk1udpFwewJJmmg2X11GYohEBRMox25MmFaqejy5enK77Ydy1SdoroZA9bEhgNEBeF7eamnMPUSEDCZS9ky1A",
  "key17": "2fA4smZu4M8YXj6MmVd6C6rr1L7Rbe6Tt6VL6gGTrUuLeKi4JpSUqQwG45MzexJVDrNyX5h1M6WkRtGey1uV8VXa",
  "key18": "5cM9pF5ftt8xENYcWC5xvq7bnHjJCEciiFcRVhXobkPHEb81V3NhuxFd2rEZPnEJdNk3HXoHVNqdqX88Httht3MV",
  "key19": "47DPU4uEBAqusqmSkBb1A21iQqnr3JgcKkYY7MY49K2Nahu85qZsM4YLy27cuk59aZLmAJA8XxBPZzmshvZSEhS7",
  "key20": "5GJEjoVgC85MeobfiHzcrB31y5Y3N2bKU4pmsAng7HkYbar1LvkbGFFFUui3uZ4aunFYso6vo12gCgvz58NDS2cL",
  "key21": "3X8C5AYR2qHmu2tSuq5bVLDYYru63k3fQMwfJyj6HZ6RU8KjRsTV2KvNsnuiq16V91NDHFMCGFGb21xJt8jKLvZi",
  "key22": "2pRuPAnjDqbrsUEuDMVozHXJcEHUjbPWukdR2VGMaAmYHSAorRfmJB8Zh6KkLx66G5crNtreu5SQcEbaa2Rkc3Dn",
  "key23": "4R9L4QwHmAie2CUVbJKzUTgwSVe85xFxBGVAK8CoQXmktHQdsa9eyeP1Ct7UhGBfkqjKUXt3v5Lm6UuGPZK4J7bq",
  "key24": "3cfGdXgMetgxCWCkJagL7yCuqJmduasm7YBdLy1C7sHHaKtcMHkYv7YivLrZwm4BmWpGyFbs4UFvZeRaMYpvTcZ3",
  "key25": "5oJHCRg9aVhU8X4UuWqeEnQrqwXW71M6A3row7B5kozSF8wF7RPm4dVGonUbcBvZqJ2eG6Potnx59aqZ3wHVn4vi",
  "key26": "RrNXt9ZGT4jA3gQj5uaEVeY2SUERecJHj25zvw9AcJJBMUY4HYSkBzcHH18XziARyCDcNDhueQhC1Zj3o9uq61K",
  "key27": "3XeFSGtjFeEft6jb2xf8Hx1rXFDAJPc8ZXY381ygz1sjsRMctaiuKteBatwBsQQffFGwgDXV8W9BTS2vrTBbvnFj",
  "key28": "5KExZciVa3sqZhao1bdohBiwxuR6DRB4bqCHtpnYtDn97WrPAagp2A7aZ8W518fVnij3oxoHYZn5L9ap4XM23DCJ",
  "key29": "mq1KCt3PkTZvZjwvGn4Zjm6UQk2dZPwbENjr93ZByvGUKvaG2Uk7YzhTc46XXPGXKiEy8hFAWEVPqeQweSUz8Hb",
  "key30": "367E2ekzJcxMd6S9LvFUUEgLopUaJxD6YHodvHUw5GBgQBvEHbqCFei3uQiTZ8AZviFzx1jccrdW1T98iSQtqMBH",
  "key31": "42x5gRwwebqmiANayisTepcgnR6wLf8BZ7Y23WgvRSDJADtks9xHLvVvveSm2TLWb6D3nVrqQfZZ7xoKeFSxUowe",
  "key32": "3zZvVHURg5onG9xXLDcfde5ZRVAm5Bgr6jeZ3cgfnzr2YfME6x4JyPN4dUe1WmUvoVwkz3v5hajhR6XsbbDFs8B1",
  "key33": "4yGUsZLRASCGLL49JUgPAfrMbZ1LLfzbfZbhtiKXnPsvHcav9ESUnPcRonK6XSMoAPgHGPzzbb7GsZsHczgvaG7o",
  "key34": "4YqQjVpaNWigibzsk5V2SA23BcezAMiLvTP1sNZaD3nCd34ER8kSooqHo2y5BvFsRvHHzgyJvmeQsPyro6FNzWzR",
  "key35": "3HuSj1Htx7n82rpianJ2TgD5UcHqLnMwNJGdVLx5YJVS1zuHEiHUNrJTjN132h6Xn5vQexQH47nPmLuwwPxsGUUx",
  "key36": "2zogfj6Mdc5ZqXnEtG8Sp5MQagJWiUvL7AShXJC9EMzRCuaCLcM1XieFFPLff2xTE6NbsLrJFm4j1zqbSs5Cvmfq",
  "key37": "2VzxP99k1jfLXydyQTohywCKndsx8Pviu4AX4U3EsrthUgNBLSGQpZpmePKCgAp5CH2rYzpG5BoNTRjG4g8WaFmh",
  "key38": "3XKajh6Gr42Ez51fjsGokA9NqwMTEBQTtqBWzsYYNkqzahXSeHjg3myige1yH1PzeG85NVFzDTjFyqYzez8knjGS",
  "key39": "4sYn5JDjuTWwcqN97ndTzwE3g1NsNvQmYQyR3J94axR7uLkdQUoR7cpWNLvmrgb4xcWP87816ahdxGKegeQBzEk7",
  "key40": "3bjvK2wL93Mv863RhTTNFEJGCiEhyXstbpbHPg9ncjgHLd9xrcQjPgozgtHqVETTXHw3GJctjHovV4Ds9CaJvcfh",
  "key41": "2x7BevejK7UK5yurEMSRmNQi79F9DfryDojeD6w9pip2mXfQGnREh5qXEbucwASaX8Uype9ENEG2Z3EdmJGZp2oN",
  "key42": "mcYvm6ZNwf84gRfWWd3kpw17YVvUfj8gx8oKjTtHBWKtqdLMQBRsYjrRwXm4J5wRmSM2w7MhFwgSabazrWhCrA7",
  "key43": "3wnuLGmq7uyYKN3mbWPkChchfFKBiuZdHgR36qGwdhttNQenLNi9bD7qGj7uSq3Fyc7XRHafpTcCsxe7p1EU8pYz",
  "key44": "4Bdyvzqe7MfJELSRkEogN8QbnpuHJUzCgr3jBGAatVhQHTG817R1zX72VFTi8wDyZDyj8xfur3AgbTzynzFwCvAQ"
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
