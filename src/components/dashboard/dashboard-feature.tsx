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
    "3LdkUsvcdepvyKmtiyc94yek3nqTpMaL6Mcz2FdVwRPNB8gc9SvbyZmFuuywD2Eym8mzRaQch1NMg8qDse1fWS3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XvSDPvCQnD8aekD7Trnx2vAChMakgig4XuCF4eYD66KnnUVCEr9eYv39Hjq2TbAV9vziTr3CAfxzrEwauavQgcz",
  "key1": "3bEy8ecsmKNTEc2Nemr2ChV9p6YU61qH13P5Yb66Bu4tLfgNwsbyMoNY5A4UKRsgyjpPkSoNgtSNLshLaqtT67EF",
  "key2": "33DWZV9UaRcxJqkLiBA8MHsWUcpR7xg4Kt5tdvRX2mPBTTu75MKtXvE16drnw8dchn2oA9LQrDVouECkjQw4GFwn",
  "key3": "3ysCE8y3YWLPx7u5EUFdDLzcuePkNtkQzBXfdqQLnL1D6o2hFkMpaC9JbtUrM2sN42AucfNx6W23xDkFp5871X2q",
  "key4": "5bRYSS7WfhUqdjJPbmpuqmKEVSegLpbb1gQrR5aNtD4UQ8YZV1eYA6rqbS9eCDRmY7psQexZh1Zdnbvvw7aj234i",
  "key5": "2e97iTUgfS47QoiEfN5x58Pe1BgShuDJWPLgTF4dEirFhHrL2bMeGWBMgbGsg7daqB2noQj1RYHPknCkopEEF7AZ",
  "key6": "VzvNxEa6EUhmnXax2cuhs2KZN5UHRs1xN8TmxSDAjnwjnpEDupxPoTPdMdT1QHLKb2xEJYdgtej4jArggR7zLoG",
  "key7": "4HPiVY5aLZqUxoq6c7DqWBPrfAKT5NALxwTeyvocte553eXN5QZ3ve7RV86VcZkBDBY9pK6VeM16zXyjDpYczMcx",
  "key8": "3S91hPgm3FDRgvHA2drammxrNYYG9wULyaZwphVmXz3jm2SM29xFNTo2qPGg2RaY3MeXBHER3JPe3YJoGeGKBVZa",
  "key9": "2NfWJyTyicypTcv2KnowDAUf5uF7Tedz9hY8m4ugdbUQhJjW4eKLZ8E8jXoxVh6ohCibyfQUhUnkTBuaU1hbmsHr",
  "key10": "51uUybFXB7Wdad82HPuxhqpXet5FNwmC5XiQ3CLNyqZJV8UJoEcF4wQzQAkpwjC6ZYAvLz8F6T4NiuRDVHaXgKxT",
  "key11": "6U6Mi45ut8iJX2FGJ7SjASVbq4YtE1gPzShRmKay5HyXy2oZ48Mwb2AYT5QHYzPYBsFHHFnhpyfCTkY1iyv8rbK",
  "key12": "tVK8zykjnMnFBPwjXGFbEDAMi38hto7PiSwA8RFbzH4TYrFQ9NUaxPrYRfoLWYc5VDVjh8RLpGvZEhxLWvQyJaw",
  "key13": "3QdbnDPbzvW6rCs2yeQX7dGEJiEe8E1zTJ5cHiZTxw9ZH3Eo3uZTVYhDakVitX21L57QfGw67sWdcYx7wtbJG7bV",
  "key14": "5cNEbSi3EwG8WLuoknqXmewQ3xhifRgtTkraQfzUNLqRbsd7CQMy7vcZNzUwjmmChyHVTXFRXTpNu8P1zDv3fuYh",
  "key15": "3QAtesZmFn68d7jBZjSMdBEPrciarFWKe2Xee1bVykD7C9gdZavrFiaYtc2BEhZ2F8ivkRNRqKai77zqkdSMK7kf",
  "key16": "3ua3dcQHB3Br2kDPzHe1Ggyp557PG5YyPq3ceGgZH3U1EZoxGW9ntsyj3dwirrbxiPKnjRE6dTJzsgAMdRMbzKhD",
  "key17": "3tmLrmMzgZGpmTSg2VBCWqtCny1MaS4Ao4dfZQh5Cwi7LswY64YWWZWfXic3SrRVapEhppGK6RdV943xoSkrHJn3",
  "key18": "3cfFXYb1tVfhyy8dvm8cfPyW4cgxWxFsJHYwyh4maJc4TghPoU2dQv4pamJPJ8Uz4N56iaV5BrfUMG9yde7BViir",
  "key19": "t188wSKaYYb4DGmvNYCxfEzuLVTAdwHh6MiV5pQbzx2AM5d33iW5EFyM25iWxHmCc33zMbLGH95aABnviC2th6i",
  "key20": "2YvfewBERuKzXFZWf4xi9tZQ2cY2ZLRQeC4LQeGa9rajnD7yhttB8AFxLWhwzJoSLxfdgrBMbiRFFhYngnSUNYQD",
  "key21": "2opttLGNkZgMZokfxoVsmpJugmwGU3AFAnDJyqYVnm7PwJBhwGCxgJrVyXxmyE4auoVQH58SmyMB8ruVowAookLM",
  "key22": "eBNSgxYXDMfcL5SYFQj35E3eKfQ7sXmujevXZnGuKf8Tf9advGfUGMFhMQCUGFQ24gXQs5WGaTVo3TDTuzQGwJw",
  "key23": "4b2XimrgmxLxs3Ti7KNDuDegsBH4HbBvJGCCCmNFTpeCWijC63Sd34WWsufcw578EbTUKsJmkSuS4MQcPiKFyzcW",
  "key24": "SjuDXGakdfT2rZQfyvwfD1WjRMBv2f9ZD99RkVggLxr7H3Ff6AGM9eToQgEt3w7aNYCMZjDDVyXBQesHvSPgLgu",
  "key25": "3EJRLiYoqR1piERE7S9XB96QSkPz5qrFkESmdDnJeGgQwRpoVEzRZAGR1f4ba2yFERzYGzBPXTxaSnd6CYdBerd2",
  "key26": "jq1eXpZzCch3piX3zh88V8n9CbCpVSrHDfLBe77uTAHHKzUqtowdPtgd6e1DLcenA7oqbu6qimbK54M8E53Fdmp",
  "key27": "3Y2J8sscG5McocUQ7wxAzyJTUsNidNtyHFVpFdFqX9jNz5mJix2UkVeen5ebFBxpoPzxYQLHinqssEBZGmYuVsM2",
  "key28": "4YAodMFGAMzRT5KFCsdPD3JhrkhTRyePrUqAkLccsU3jhVFpiMWijC1LN1BrY4iftr5UBGpAw61Cs4Pn76tLrpDR",
  "key29": "9PwViaFQxEC8yNrnxXZrTU2FrdGQHJSuMuomZMvTTy7hTQEBag5g2h7ZDMT1dna1CxbqZb1HG9mL1V995Djcjk1",
  "key30": "2ZEtzZaUd9EzJaMmbWCgv9YMobVFYY1E3dEVWfkZkasSVrVCM8eVrSbWAbAUPkJXvw6jyMubnC1Sz9gbRjmo3bxi",
  "key31": "5oX3KGSV6KwqNJUirv3zi9fY1FNEC75cnwQxNbTY7Qk9mHF14Au6J2ks17FCavmssFThi2Z3HHQ2stF9yxrK6fpv",
  "key32": "12A8Evs2iFUw4z9JrVQLNQmGEpexea9AzZxQPLFTHHrt2yniQMz5LKFfDVy8zYppvicfKcTNkWWup3Yxxt8juswk",
  "key33": "3V9dxDYdURqM5HnpkA5eWuUk2QVy9bzPNNMHBdsn7nYUCZVjSCvHyb4vf8iYAzBBdaYPvBJnx5QB1Y71Rab8sosu",
  "key34": "4DCYm4QrHjPSSu3aL8J8zKr6dN7iVgi5MNkxqVk4Sva5Z8toNCPXkomgXrvvfVR1pj7YYxe3vwuCojdZ8ULGHyB4",
  "key35": "aoZMFXnyAyAEnZSwaXcuNZ7S7TNTKMoT1LV9wWTfkuUemY5g6AaqtiCT1DYTFsn6oj6vJ6PYUMtsHCS8KD4hrRA",
  "key36": "3tQKDhF2FsPBQY89iGquU9mmpL32tRgMmYs6ZJBDACXegMAczg41meocdRQvM1wrhqAF1jLWom287HUtSdhWnEk2",
  "key37": "4CZb33SMtwUMZAr2Xq3Kd7n2cNMtFmSBPzkqgZTJDt3czFZ46FKy9CSHvdYvAJdj2hxDb1k3ADdVXeP9G81ADmmb",
  "key38": "5mjA5qZ8u1Xo1KTBryXtmWPjzoP9i21Czk2TsvJERef9Qr96QRXSeoDzDjhMVvHUkLWEyAr5dQAcWu6BJQo3perc",
  "key39": "4vLvKQ9GpvYc9mAuWQNYCZJ9Y3xizRoWEqo4ghdAaURf7TfrsE7AAPNmTbsWf2jsg3if66oAz2yoNbeBeUMMcXuF",
  "key40": "3HA18KQjroohYsisFn56oTn3bejDQKcnCPKw6E7fFv856v3opcvMdyUSCad8TZVpKsKbsvXmdkCMxAQETczWpJCT",
  "key41": "35dF2ifc9UmNSUe6U69CmWj6dQTCNhK1s9c1R8f7JtaazdA81xmq2J5bjaPYL4erggfAjm8s1PKp697U9fWKJfTn",
  "key42": "4fufrWmTY3xwXUHyEApZ21Na88kjyFidxgLKyaM8zkReyXpour7kWtRNFpHfJinbjiQtXZu7zweU9XsUMuw7WDtr"
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
