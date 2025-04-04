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
    "2WqTM4bzHSnmmBLGNLeVMkiGYhxM9aUnUjfAQ8uCy6ZDvWZ1vJL2LHxD12Ld1h1HHhtex6P4TWrM1tFUGt1mkSQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67VU5BNTgtQ8P3iqeduZ8LsxgJXNSF9oJYKu4vX6ffWYdKR34DCdBQdzJSQviV7xVtBxRkPZHcRWLr126mv6uXbY",
  "key1": "651iDmG3f6wLnZ84zuxdX7XS199uHqF7f82KbZ9DJ5NBWvyhb677ZKW4qt11sUdDRDRw6F3ajqojWz3sAkahMVG5",
  "key2": "4fsPV6j822qxMM6uVVzxE8WmFZzapyEAFu3erKVt8fq7eJthj4sXRpAN6ooVp94AvcvSmanap48hf7mnnuNHNzQL",
  "key3": "4yQgV6znCKWEPbq6EmKBbeJh65dQSr4o5ivxMUpHzuQxcuJit2JLAa5hsf4RAvD5Ag7y8ZqYAnFoQ1eQwMHmNwdW",
  "key4": "2dXV83XwLZh1smKZCXrhThPLEN16f5xCEUKYewxFhhtTmswbvtNsuviEcYC2uTHg3bxdE7CwvFqEFy8f3qp8tiX4",
  "key5": "44kMomi6jyCkNRnoLbYQi9kyTrcmsrmdjTBGqibVdGpDLB1K5XDBGsULQLNVkA5Gg1MeY72w36c7PG2qfdzGPg8w",
  "key6": "2jZLMk1Mak42nUhC2eGS1C3dqjgSzDttMt9GsuxnCeB4XV3jpJ21aXvMrjXhB24aquQAJRLoJL8QHmABWgzuEWXT",
  "key7": "CsAxgxERcbNm8faLVd789eDr5sxjkmw5jUrgqf8bQYJH1wBtWWQRR6EAHNb9gAo8XTPrgKvJDGTTcZzRBYLakex",
  "key8": "2zhACKDWbCrLQgY55qifYsGdSM9DsyMmCc32CGVTMy2c7NrxXVkQT17btk77kBgtR79Pwg6qrV2c8tfBGz4JzfZF",
  "key9": "4dtEkD5brm2YKrDUh1YWxXiEqTyu2NTpZrRLVys9Zy829GTCc5rA9MEPuq8Rn2kjpVbC11BRb62N3PRgko5X1kjN",
  "key10": "5XY2HhmgcXEjBk6EsMyYMH1X24pG29JYFV534WKNFDQMHZmTRyBKtdgxG1C1zNc1Bs4bzPyVeucrydB9TLGt8GeA",
  "key11": "4Bg1FFJXRSGusF4nWimWsyVZ1RDWKa9XudgjEXKKiMnNFtMbpCWqGHYL7XFLk9EStwyzTqqp6G2UHeseo4Q1RuKx",
  "key12": "5dMVf4BFgf7idA6ranugedMjiizi1CrrW35hHu1RHTWFZjjWYdJ1ZXSqu7rD66WBp7AcMynPR1NAHfHaaxCu2tuo",
  "key13": "2SotR62t7RvxgXTRRgNEYyGMuSxJRMo9jkvxb64V9SmtkZX7m44rT4zwYDXASeZPW5zzdNtj4KJbuhuKsD53c18x",
  "key14": "EcNmerSCJ1bJgpbQmni6NQSHqHiCJaSmEkD6MsEkYpdBWnTjW9V49iLeTmXzNFHFqMXDrPEGh4WB46vDrrTkkBC",
  "key15": "37zCH3fyjkvcjCTGMB133hG6ZKjrtx1i37QA48M144ZpKudHtwrnaFevzbQREsNTsEjb9Yt4ag5HDj9Z8GoMjV1D",
  "key16": "2bnHPtxfS66aZPsGrX75fVNqfmFNgmCA9g4Q2xZ9oxERQQExJAEm8dBaZ7zTXMysGFCbaRVRHVZWiUiEPVXr91B6",
  "key17": "4UdiKYqZ28zv8S7iBHcbRiNfcaBfd2qSnYRj36aKDPHBuRZVMQPxiNCnK2aS5KXYpmkSv9nm3cEUVxNWHbmxGM2M",
  "key18": "2mRBJ2pMntDdhPEVi8yTkMZ7B1UeUgUg931dgLEZPMt6JioXrW3fxvpB2GVprUb286gV2munnhEwmhHbUA5SUW8C",
  "key19": "27z4NPAkdqK18znsSnyLtGgfXPySMNeirzf8DqPU7hcZiNmsXz8hvZzGMfEVDyXSWgSo99PHvdFNsdzg6iMR3aPS",
  "key20": "2KXfupjzodWvyrh4zXwXRnxRafpEhXinD4ENtASniXanLhvfbQaB8X2gREfcZt31QTazxXTEdsZ4dEQwgAfvTExU",
  "key21": "4TmJZQg1AVeCVeKxme2g1p4oSpFcEwKfNph9gmhkVvdfB7mvhh1muZUzptfYrrvXhFscDwdTVukuoECQfyk2Y3FH",
  "key22": "4jjUyeKthF1Z5HKkF5uWQkWDPsvLmzqvGgZW1QZDXG56cfjRjZW5GQXxBGc64Eg9aopFWu4ippctJa4G6DpbXgyn",
  "key23": "4nj3N2EWAL9SUCEjH9XEAoEKofifcWYdve5pBTErAJB4g6UEKvsg49rxNS2f6M8V9ERa2JkK4FGNqtieG9kyNg8B",
  "key24": "4YfwVaUrPwCVq7bvnii33KPtSEg6AxNv4ufGEKXC7pqnt8toZvHoskkriVGdJtkNnh5aLvbBFN9CnKGngVGxZfA1",
  "key25": "3j8P6pCtfCnoSrkHvhjbma5rMaZKQP4qafJyojrGvh1aRU6eEqs5abwstBsr1xfvAX8JNkJGid3EtuwxWFEn8Ax1",
  "key26": "5yqpemfrrooXsfMTTk7yxhw84koryKU2JjpqKPez5rCJVW3vStsc9t3K8E1MEG8VMiV4Qr8WLE1qxGFsMRcGdKQh",
  "key27": "oYzkPgQ3iKEfTFHcuiy9Nfw41G8RbiWdquvavznhKwsTsKaf6s5sTNHPznfVSZErLmSFh7uy7uufC5BqsRqQdiZ",
  "key28": "2YyoFhcoYtdic9CxbM9EABt6Hyb3rRBaR9pfmLQXRGoz6kREMgDisprHrsMgZVg1sVhi5Wxmj1D1kz4FCedrPBv2",
  "key29": "2TR3g1DpTGpGhWaLhtKJ7Jt21BzpGwSvU4vVkc2yrB7bKMCWGUeAWmHWoj89SrgrK9xbmUrk428ReTppzFVhznpg",
  "key30": "SGeyCGX18dJQM8gSjDHkc3A785RUmWNoWmcZnyYzmcn3aZmZKheBZb1x6jeGutf7sLHejVZTXUKM5wW2DqTwVNM",
  "key31": "3Lb7isy2JbJ6dpGs5GvCTQ5GRPQPh63mhbxpCfB9szoxtXX465bnKKWDBdbMopKDictne8vjVFmcjhgjbEzoQzuH",
  "key32": "5CXGKJd9AbKtpUNC97bPv4BEPZaDiFdMU2joenvywbdMyobqMvB9ns4x8ufBiQUnWdqP6Qb9pNL8fYoB2bZZbAQz",
  "key33": "5NoHmFLQWwvEyQ5tDepEogULg3Sf4ZCtLDMicThFVx4X4m65W7jowwYAc3M7tamG4TtjNgpvNZ66aVHL3CbrvXi4",
  "key34": "Hocoozur3haNp5CYzMPRGWe9bzpfXxxZ3F6DufdyCTeRg6pGR5xwt1LXFETXbNMNxgCHm6gp1J8ReEC5DzrFGDa",
  "key35": "4Moy9T46aPdAPUEUPowiFXz78HMnXN2JQehV3SwcDBfkXx3YHwJAeeVtmabJ1c6cza2HMAGPw888s25q7RiY5cVa",
  "key36": "VtGLJj7vGoVFpf2pEcqsBCjn8HesTZeadtkQSavXxKXj9fg61zfzX1BzBaW9XN7duvS9vRWURqhnRZY3Yf6bLgW",
  "key37": "2DhCQzSajcjzXEkDav85wGYRTnZbB1Z3J5A3T7mTbsiLSiD5j1eo2jWpkTFqSvZeyjX2yGk8kzeBWTWVm5UPrM4S",
  "key38": "3nS8Qgq2dvFJUED1kFG6gD9SmDyVKyZmUH8x5FPvQEjWQ8D3iemJfDjoimbGb44E7RVRcFFXXEn1ckUMDFa7wdef",
  "key39": "47aD1TH3okxdswYKf9xB92ZG2muPAE2UdwoZ3zKrvVKGDnpdiqrCTtu4hDJMpHu5bs2FtM1bN21PJTkega3xceni",
  "key40": "5tABYqwL2PGy4XuxrGBGqukuNeEGquhB1PbbTC6ZNHPwDwuke7Wc7iFgEETV16SRMr6eeTqQ7hoZvMiaBiTKrjod",
  "key41": "2E35L9ZMt9bxcivyU4WsecdccCQHeVqC2nYTTbZVUvFvQVaWKL7run3rEdyc5kmATsdu4enrHFrhPcSyEsSJHPEo",
  "key42": "2jqVLxPHpQqnfUrHPAL22tCBF4eQerDzkokKbs5bakJqWMzkQ5X2SQphvnuRFA97PXsVrAHw936hM2KCCQAE3TwZ",
  "key43": "5NxhQUdEHv6MLe7XzGqPiPd9nZrEDhRMzGD7m8napSvcrYrGxvaqZGx4K7xuQSCTjYsnfD1ZatAXXdjNHniTsjMS",
  "key44": "3vtDqStS5wTehdTfsBPS9pK5iBUSqPxm4ci5BGs9vadHbNN6f98fETtMXSB9oQeFLpHzJXBhddZWiT6aVcYU3tnA",
  "key45": "PgMbTi5cuwebbED3uXS1QNWWNmR8QmKx8ECcBU9kaaRfhZsUvqLn2F4NYJT76MZAJ9mS3ijVWMNjC9AwdAeDMbh",
  "key46": "4VPoPqkAjo42TgTNRxy6F9BVGFhDHiDDsTAntQBt2jj34LsywQ61k3xyfhv1oBf456L4vxmJMaXgov393WudGygr",
  "key47": "cCRUMvQL4x48Nsdtcg9CTErTJt7Rz9Annpe55HaBU9YJV7N8P6MRyRTvpBEp7SpzpNtDqCxCZg2mVK8WMqY2Stf",
  "key48": "3R4hxBFUVSEk8Uc1ezzsUvU5GYY1Aqu7v1sAWknp6Yvyz6tur2Fou2Z2RSkHvDRg9MgSwHT1hth3HdcFT9VqjHYn"
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
