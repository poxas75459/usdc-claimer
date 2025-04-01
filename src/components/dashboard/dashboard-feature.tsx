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
    "3Wv5ZNBsmnQZWXixsDwWTQMMgPzkQFZ3wT2nHhotLmpqh69WhDbeDpqFZzThXj26oW44bqvAvm8oApphH8NiLoXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HH8T1apCnnumVT3m21qjKF7qSh2YF94NKpB5F1CsMVSgdw9cFpSeX4CpUdVcKvdfpBPZJVwyu8PRnswU1HHKDsC",
  "key1": "4odjeVyT8fizfpBZryyvDq39XjectdT9Ytb6FhhTSEf5Hze37qELgkn4zjuJ2qDuG4bzUxQrhhbiuwZG9G4x3qb",
  "key2": "26JNHeu9ta5JUaDDhXZNXbuBzMyiReFPbtGQSH2zMdRmFDXHhz3VPdNfVGGN6fJ89uEoPaPo8ARzkNDpyQaXBpKu",
  "key3": "4v6xWoTyxWAcngoF4dsKUMqhxz8QQ5tefe5hYzKK57vXXATXfC6k3NoNiGNrbcXves8bq1m3Zfatc814qjcXQWZ3",
  "key4": "2RAauBtZ6GusRn7AtzxgWRacsy4KVpHibSSkceX2q5xDzVsHYQsME8s7ZihqnMUt8sbkzvWxBNMZnMpMYvd2Hcud",
  "key5": "41TYbnxjcCVtW6qPr3DbJ1V4YfT9yTkcAyuHU9NiyUKAeAaZEGA9GNt7zF8jT4h8WJ3Gmo4dB8GPU797j3XvenmY",
  "key6": "3UT6PjgbzdWUeniKqR3qjU4KqSF2Tovfo6jJ64eyRSaQhf3ByqkQjjuTAfQzLJC77dxKpJhm8uGaqHuEWKmpv8xj",
  "key7": "4cMG2A5NnwzBv8dTV5tdtDi42cjyCBuAy5t1EvhPbBgogUJqHAqkWzVAxWFnNSbiP9n62Um37A4fzKsRocaL3HCb",
  "key8": "2V1wWKYQq4zAuPevmZRDZjFjnhEZhTzx7Zsksva3KNhUBHz3mxnmMLwk3hAuMvYkmFwF98HcQiTuPwAgjGsJ93Q4",
  "key9": "3WJL4PvgwZyG3PNKQnXQFTTD7xyNkVVWCyvXRjZgTuvAFCuAQofjDDAfZ4dZnMkMyh3224BdKjAM82LzHNWTzisC",
  "key10": "4iXzwiVrYm7Us1SPY6BKTNRBjjRb4AFVjAsmN4GJyHkPyNGsrVU4xMaYVbG9mS5LC4zJWyv72FXeGtdEU2LHATdD",
  "key11": "4sz1xFH35Vmxjt6Jts6G2ydT6fCGKMhGhrxtGKb2UiewikoBF2iTdRNGJA3SmzYaDq4sCEQqBBL4fVSpM2J2dqHj",
  "key12": "2odRa4t6nB5tYwsPJ6cYQsko6ouYEoNc4xNPbiAF6LYKF1iP5PmbqS112YBMako7iP8N13QGSuKhYZdoPzrFmfgJ",
  "key13": "ZywGksGapDPfS43UrixM8S1FJqRH7ink9yj58ocbfLusFjDtLoah2DkrgdJtmMZa1z9DtqK7NDnekNuwKmzoPHe",
  "key14": "5D5YfUzMh7J9baiaFNSzq2ArBLuxtHkgxooeiGm9rf7yWiN5JgDRopMVNyEvyyAS3Yegd5b1yMqbprmZyeezp1Wn",
  "key15": "wSDfD5X6srHphTnSKyHw8ayB723guQVLPS59MPdZT8N5JT2E8Xenbeswd12Su5orEeUWBo5AcWB6gYiGoPXGcCG",
  "key16": "2NY7TGF8Ef5TLW7Umf3L3jKQdjkkjwDuXGhV9h2m3cqS2oyFZ1eKFxEXTqo8wqnojF96gkRuMEHU7Qj7UnSaTcWj",
  "key17": "5MSuY8twyvxRFWJZVLUp9ANSZhDyHqG4T5YuW8sHwhvRk6ixnXGGXYGUMQgQsYnXKUxSfU2BeVQ1VDSKqYMy6eEg",
  "key18": "5GJzYyLQG7jUsDHNuR1uiAoPwHMNbapzBBgbZs7dgs9ou8n7kMFdtXHxCmPJePdQgvoP19Vw47dqxHcWCSqyBDAe",
  "key19": "5fPUtgS3PoFEG6Ykox9bTJFA6waJ19QDZkuv5orBATPT8iyKgURKZbHrj549FMtQCzQRA7yUEmtJ6WBp9B7nG9iq",
  "key20": "2wBGyauV6gVbwPgWjWyQHDPWi8z3uxEQuXcpZWBDJ23XD9aduYR9Z6z2CLBvdC8Cro2Cm3wcaZFnfeEpn5hzZ9KJ",
  "key21": "5T2ezv3fBY3wrATUGG7iJfW54jbggaqBRV34q9A82CTSthGqsienXhfFbWZYoC3M6AtWr4yMjiLcKDquWUtxB9Bt",
  "key22": "xhYF8btpXZJbVERQenNyW59KDWY8Nx1uVrFW23i1uVvszZK2tmxoi7C1Gfw523nfAtHfhMpwZ1Jdv7fRHzX4NUm",
  "key23": "h2q7JAiG8boxcCU4HFZme7pAmEmU8USYUPp7M2yRvRcc2wFtSGp3h7AGsueH4LgWNt4zPS1og6KnPGgwH2n6nia",
  "key24": "BTHHhLXgiFHX2oRo82QzVqwKZicZs9pNEkokRMBWBFUCywTvMQjWAgcJWbzsvgMjXUhPLgRrQMNbsc8JcxyQgnD",
  "key25": "3JNRbyeLFJxCpWhCsgLztBwDwD8v6sid43mwQJY6Pc1MX57K3DTJU1CxK1goWbCsifhpkHjKWoz7US2t7F8uuMh4",
  "key26": "3My15cMnEfVcvn28o1EfCNEbAjnGyaKJkFUJ4jUyCYnug1PyxB1T9EMHzmk8FXNwBLcPETXi1FUvu6tALXWwNnBb",
  "key27": "3Tmf52Fq6sRPiZm2j3SNukmJTiLq4LEi8izN3pybZ1cQek3raGvJAZUEkQAQPkhkypKgGqNKQRQGW8B4sMw94Bgi",
  "key28": "31q3aNCKK1UMjixqTFBSZiwsSZBQaWc7GRas2UsNH5FmrRrWpUpuQzcsCH3W9NTzLWuDPCkBCuceE5x8iqN9asDa",
  "key29": "5MJBWpzJ5yyeafL2WxL8e7HGsSDCwfVMGAh6gzcGkLUgo44KQJCczLWJQarWXT5rBL9w2zhXtTGeBFt77gv9LDEf",
  "key30": "4zWjcN7QNxC6tpXXrdSzUM1WcqUxSAzSMVZz61HAPsrA2wu2tGoWzd1vZ7Su4amurAU8GkASmLMufiX2iQS529h5",
  "key31": "Z8GBmWymJ25e7YiZM5Hi6WcGQ9hjz7ykLMSFKciKFxmWmQkWCDPH1kJVnU6sWHqSF7MHgf9YAHK2CrkB4h7T7uM",
  "key32": "2BayLKCqcLcuebP5S6S7b3QJQ49fYGHXDqyCmwNmvvMv3m7wPjpZRnWZuKRQS3UPmrPB83n5L5WFFct71GwQwxMG",
  "key33": "4h7EbrA2S1JWmrXb6iBzLvPKgjVVvBRedAtpG9RKsV2FzD8VooLRWRTuugeYaf1BGLryFbQo4ZZpRxYbvjKnEKNe",
  "key34": "5PVFofGjzvdMjMGDbzjVppKYdtX6z4s4NLvNBnZTyHvgaNr9j8YJ8QCgQM4XZhsHsEoyDYVxYzUCztDxVRvCuAmH",
  "key35": "5bFVuK9NgH4shPCoQExGZgRmVqiomSoPDcn4R7nBfxQY6adVz3ox1RgHKho7qRgb78cmwmk2nabCKSVqigeKPVCB",
  "key36": "2Acue58mnrhnfx2VRW6ZQZPyoiYrHqBSNuusgk1zitT89vBcP9MQjdjQmTZczynCq6dihsutGtfLX6xuoXF6NXeL",
  "key37": "4HKYppMUEHgGF8YA1JkWM211Hrr4dKDYtJsXTrd7erUots7wg6i5oaQXaCGULB6gffNyQh1DV7zNjTPa97zcrtAJ",
  "key38": "2xPakPzMRHmGiwUUtBSE1n3ykgizaKnPAM5GPbiiyFscDHH1PnjCtXzBxyA74yBbZVqPXBjnE7F8NkvD43Efa4Zm",
  "key39": "5Xrr8XQ7FLprM3zYDnLSzosP5REARubfgfB27GLgor5nTNGNFdd4KB8vJqEHhUqT5jyV19ZdW8QUtsYPJR4Um8mx",
  "key40": "5a6fLxb5q3sC8VPNT5MZKL9p5C34Tqc4qXkU7aMHBNQbKedDXMc2tuVHtcTVeqyWgc7BueAZfGEya57eJhgDURCi",
  "key41": "3BUEh2jxpcWpna1ERryhnKKGAX5NggSbRiBHBJcgvuss24QcfcLQF8S1tActF2cbyQYPVLc3F5QjvQbC4fUNkFi8",
  "key42": "47wjuJQw9Pw7Astek5o4zEL64H3jtEMxj3qW6ZxDbou5MtEucNiDhb25Wt5YSE1gxWEK9XWL3FYQGMm87jfSeE5G",
  "key43": "U1QeN8AsFq2ygib6uGjLvDPcxH82MfPiHscmMQAqdrTLCKA3sXzpe9b6Yzmchbi1XB8P5DWQen3y9JpFTFFEY5P"
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
