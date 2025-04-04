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
    "1E6VvjVAdW4aHkFuG1uBmBLwawZ4eHiupMJyu1CFEM4irZHny8b2kESnGS3fGMdtiiZKQCB1fVQgA6fDVn9yPSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P26a1m3niexPBHhirohDCbKC2xeKoDU36h2HEiTrUfVZYG94tK3LxESkVKr3upsDDsNmwYKBpV1APk1mJhhj1aJ",
  "key1": "DEqTSnT6fR1gJXYz9xSFrpwiUnAHPSffQGHPeZ4Sjv2y8JuHyDFGKKwgJAuxc4EnFii41aYWG377jTSU3nDubMa",
  "key2": "3Mw9s1dPzJ5bAnXdTgPukXqhwcpkUJ7724GWyAbDzhS7YYyaMt96HpAc4QRoUDsi1wWW1YbYWpmVK4DGEKog7ay6",
  "key3": "2WCatX9o19dFtmPqoizrhVV2WwNkASSfRUWRGnLyKjxs6P39mD4P7te3xABVQUyoeaR5PK441RKUQSkXKdc9Cnyy",
  "key4": "4dr3w9jmKWTuugLwhydGT8L7poDFGzGKzCEn1ko35NZi1AxiaQ4zcTQwULMs6sookvTJ18bJCThzXTXYKz4P8E44",
  "key5": "41bx3EkbvmWfXDsjk3huwxnWoqwx3TqL3WdY1hNPWqFV8mYtADZn18imeMYvdvE2uY6BAC3KECxobpyzwqsCttK2",
  "key6": "2q5Z7VV45NTRD3HX4Nx79uoWWYphyrJz9eC9G9cSpinNWxX6EYGzwvFoZZWrL4UPvgxsqawT6gzkKUGe3qzruDnk",
  "key7": "sUNqhuoXS8mGbWqrqnbiqyi4G22N6yQNP7CFRysxapE46pfAWjjotLHE73j37KFFThY2oA27ok2eJiuTnrF7XHU",
  "key8": "4KfKmv4rBbzrrxfShGYtmajWebaDrEJovWNg7QqkwyTpHesdmHigWUgDUfNgqvFwuqFD2Gvk6NL4FLa28tZyR169",
  "key9": "x2nEixYK1EsVoQYnBonoGZK4xss8ksy2nHj8WgySCef6rhGVUpD8LEaBhfPzprNWHvmj5UELW34iREmttdZ4dUx",
  "key10": "3oueSkR4qYqMw8ptim98sVuVY2dNabsP16x3JhXVax2gBLTLMwEsS39oZwDijqXBL8kymxZbVMYckynC6wcF3EUb",
  "key11": "2HmCDyCUUzK2UMr7Vq3fxg2UJSdQTPzyD49N6oJiubyVgMSQMaowGtzR6HcGD6dZZU8qFAF9UmQKihX3VjsTPTDg",
  "key12": "3uxpyhRy4nkCM8aox1bvZ6sMbjtZ9xvAETZvEGw679dr3GMHH8Nvh9wh2MkB1giAFMY4CEv8ifMcgQmWagZPRGCD",
  "key13": "66Xw6zNqZAoKxbo2VwnW2WAqvAovTxm9kL8T67sMfZYynExTTy9ZK5jLjYejY5zAuiUW9V1batFwUqpPvW2SD7A4",
  "key14": "ABuxoMtUGohvFPTp1hchcrmeqB3L5CYV2PL2foKc9DxjJQwHwVvhDmBJSLLdugHLq6mT7N3vkEDuJfxVSrKi88B",
  "key15": "2wbNvR738R87DwhJDVmphs8AKR9VZTNWswdDPrYbduYmsLCN2WaUTrrqGTqM2vsVii8j1SuN1zW6bHdy2aPYNtB5",
  "key16": "4v6SvMhzMDRsHRXbf5esgFV4dfh9xj6WBGQ9U8iptkeaxfCpraFbXmkt2xgjuPiYodvp9oqaiBQoPcBTNUxwJiEY",
  "key17": "2Ybs16jaiUzxzBci2dpdteQV1hGKJt5r8A2w24n1NthdZR8SS4ZCVGRfrzmQ4n1mGfF6PQkRXf527YVfVD7QZJFx",
  "key18": "3LBGbL7DGuwBdeZ33TgduckmPUjSnoTpRTtVDiiiJDjSJ6JLSEdhQWY55a9VRMrcv1xqtSR791KDGQybndSpmW8A",
  "key19": "pJffFdxzNbcUqEarryjSUsJjX8EkuAKu2Me88hwfgbaUGdV5ByZGWPncPs6GgAfgjx1A6mqhKLSdp2EYUVpoupS",
  "key20": "42biGxVN7zJcm61grg3WBmtfDw4Dx4TARHSfMbP8dP4RadxSwsuV2nADz38YTYcpXzkaWZsbHkm9mCUzanDcWLsV",
  "key21": "piVE8P7Lyz5UNrXtt8dhduvHm1ETYGSjtNfEHk98FmDjw3L8T3jamNYaq1vjP6tHoP9wsSYvr6ghxfXUsEjhUQw",
  "key22": "3yULEkgoqcs6GEXEFEuqtt41EwpeWJs5rVgSCNXqe1CuKw3MMFWSo414bJok32wZoeBKD1GDcEeVRLC6NThx9mNB",
  "key23": "2NSJJ5hFHeEoxDE6DAiaYWFWYdoB5S3eQQggbnXhAwjs3Gb7o4Yc99ZPAEQrqd5bbtkwaedMf9JNwhpt17x4qc1T",
  "key24": "5bVHgTWHw2hT4QtUZKGTYdZijKcd8RZahJm9eM4tghMxomKYfAG3ipsuNpXvVWjC6xdzTavFVhE31p5Rm8y5Sema",
  "key25": "29GUAoGYkyKZFGfvsZ9MF31rR663RYGnacQeQBnkBQzdTL4UXPsGo6KfgGnVFMrwBSQeZErakYjgbT69NcJnxu2P",
  "key26": "rj5Hz7aw2UzJAA7iZhz8X88Enqt82UcAV3zY3HWmAFkmpAsbP5BpEw8eyzTDnVFSzG1Qc8gN66rd4XdsQUb6pGT",
  "key27": "2C6RgVWuiM2GSEQxZtJRw6XRSaxyExPCgaLnPJJdB5TPbcn5JwwY43BQb25bdenXPfHeERQaqdKaMNhGzSM4f5bL",
  "key28": "44f4Sw57fWBduuo1HcRrMC6YrzE8eLyrHgr3ExNboEEem8F1vFpK7SK24DZZZcNo6Y9Z1NBGrtyXi15YKvbJZxsN",
  "key29": "4jNwiuwNW8CE59NjYL4vzxfMpDAqY5XrFgQ4sa1T7hgMoyWDcibAYxrEktHjHt77E5u9gDSx7NKcbMUFmhKtYnqK",
  "key30": "5rHiWQpiY6XQ7uLwXF4NXHM6t2z4acyNB96pvL4XmWP9j8DzEZJT7B55pxnfa4bRK5cqSnt8P7DW8Qs6TUyDtU9Q",
  "key31": "2t82BqRxpnXB3GMpznNbHzcUw8ifwq4Xk6nKPH3JibnP5853UFG8oJ8aYiMr98nfQSV5ceBES6JSgubbn2hrmVch",
  "key32": "3tchVzSqL9dfVpPEMUFrJDjpKG3TxyCy2tgkbEj2x8Tf5oVnWP8kgAStCThQWPNtvcgsjzKL3kPetSPWK4NyMd18",
  "key33": "4yxa9jT4r7sabVvCDZe9K2upNgDNuHsp1TczXEfxKLamYE43S3p8zP2qycseAjnGWhFenZKbjGmy8zcE3c4UmyKp",
  "key34": "4Tvfv9NrVWJx3XxzWnbiy29XG52LKBKC8jYtzbJHsZdhxRkv9bH6Yf694NpMf5CYsiYujbwYGGdzU5CSXsrxrtyu",
  "key35": "5FfDETyXcrxtRh66iNEdEZib6pmRqJG99cBMbq8mRwqxAfiprvhWYnvAPdoQYkRPnrCnEV6nWD7dKCN3ixAY4cP9",
  "key36": "27kJiV7pQwBQHE6KuXggErCrkmneDu2JfsUrr6WFeoeP5QSYi164PZocZt4pu3RTAHQz2MXZpoxJBCgN31M7UDzT",
  "key37": "WuqXqCJwE6v87XfbY58U4kHswV9eFj6KZD5Q7Zipwe98JZXTSE3QSBro89MFPsi1gVoRLerGmL8Yio6JdgxzFSp",
  "key38": "2BLMNVHvoCZyqByX7BbSc6DtbBnUEVrMReB1NVwr4cMHo4Qictdh6G23EMwVd3qYMRDYbtBY7KYXn2MKSv3W1k2s",
  "key39": "dAz8W7sfsRWwoD5j1ZrVWkWtRaeQ5YA7Dag6ZWkemDGFTMTXzm3Qiray5cna6hLwaAGgvodJ2csy55b2NuR7Spe",
  "key40": "3y7xPF16qpHZWe5PXWjEVsrCyX7nmfDogEpMoYMPe5nKXTsBDMbSojsShDfX8S5Bh3Ug5aZ7CcUW54i3bbqZs4Vi"
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
