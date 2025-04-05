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
    "GVohSzPtBjD5EHgniexhoMfv5QEzKecEohxbpTQ6QXoa1Z8AeX1yQiPrkfRfwhhA9SbLJ3VbkLGgjtg8ymrWw5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UzeoGHMZkQCSCc44d59n2yjPZFiHvHJHuoiTUiWaHwxkRjdyjCYmwAv8ZXHYn4Dgzg4zaAQPhWs6xgdixbvzwcW",
  "key1": "uDKAPJVpDm1qaxicb93L5sGBGUWyYV3o5RU4dX6W22enRGEgsJbF9hU1g9UvJYHRq3DHsbEHBktbKzfpdHpofiq",
  "key2": "5NntNiQZvjusPVziu7Qwq6tJmveins6m4PYTXLYMBJ3FehCmqHMcurUX7GcemVJz8ysU7mVZc5byRwvyXGYogXbq",
  "key3": "28kYeKAtFvSgssBxQE8RhPdN3bKBrPjUrTSgewis8W9bHmsf4Eo6VpXde8oqnu9XJGQQicf3oxYzuEB4oNt1TE9W",
  "key4": "21cTdyKCfzsnusshZeZxAoZ9ensZosDCnAUjSSRL8tK1H7pMY6pCwVE8PBsGHcZNV5KCTwZ19WABn1wqdA7m6LQF",
  "key5": "3xdZa6MzeHWn1Xqbf8XVYwdLgmAHYWKGH9JdapkRqfmQsTzaETVM9C65jCg6rqr4A6a464mNQBkQdM4RR44JQCEb",
  "key6": "22u74kzxdhRufJ182drH6T9H9DS7w8qwGzKtpwPddUiGz8K78qg45fcwfpemMRpkZPoJgMUQCXd1Nabpo1hT9YvU",
  "key7": "2mxBrLhxS9wRKDUDRpCqrepFMwyjwAV4wSSaE5WNTeNWyqfSw3p4d3ckPDXxS2BwiQTakrwPZ2hSDJWbHjzpYr9h",
  "key8": "3ghXbWvEVH9U28L9GDYngE9B8GUJrauNjvwwhjy9JvfHDZhtkPxWsX1UfarkBVybXiUX4BEyvY4eNpa1y2YxrBQz",
  "key9": "2NP7aSg313KWobbv4jL2s57FeQPwT5YAbGYFqDmBUNXruKKozXduizV9CpfXJSVVhKC9VGQwmB3YFiLpgPHQqf1V",
  "key10": "3u92q89VHxbfqEAPLYo9Te4YcSMomjA7WJZ5koQBP43CsRRbN6fa2C3A8NpUfEVqwsY5XhNGqENJrNBPZU2zwAbQ",
  "key11": "4B4jvFK3fqSBUjyPohCNtDQtLLYTE1XQ5qyobqZkSX2onxhx8ZNXK1qdvUtMqG56o7hYYyUQvtCMhkL6vMcgStMu",
  "key12": "bWCHC38cE4rkXEkephB7CWoL8AXoJQWfgeGPjWsXsLPkPjgNRkwqbrFZNoc8NkVV9SijJHWy1kcU8e5QpoSgfxX",
  "key13": "3b2F33SyhCzd7QtsAmENs1aJi5SKoUPpvAFtkpJFKZPWmcYQYL6GQyyseFzdCB9iMRx6qQvxeVkXk7pAmnLF5A4S",
  "key14": "U15hZ6Lr2hEfYpYgYRS7YjWzhMGpVVnvMNENB3NQ7TEiqq2Ba36VuZ3Ad6h6hfrmRsb3NmSY3qBXWGHyBFeTzWj",
  "key15": "3cGv159TpN1R8HAyo6F25xKuB7Q8avjz9gk8B4GBHZfBbNa4R2FrFpfiXr5cqHCEHVa5xndzmFuGzhtmbRyN8wg8",
  "key16": "5KzLAyvrPfjv5eHuxGLaoeG5gknGdRgKysHCgPA1iSbKpq8c29Vg8cZG18Twd4pAo9ugQq5uhiKi6cNLcZa4QET1",
  "key17": "4fuFgSntAvU27hsRSGdnjFnewA5fjWqnGK4BFsLEHxN3ME4aD693F35eFnunjCcYRAxX1xLVJ7bsZGrNFPCaiYCL",
  "key18": "5m61QqTxGuU6PQKsEn9c1KWCpn1mD6hshi81cV4CTNQy9XcxgACFLxHABEiCKsBeXgWbrYD7zkCUkiXqqENFy7rN",
  "key19": "5oTBNoNbnMAWCPuYAweqnRQ9CgeCGtUG6tGC35upKAcMifdoipur6TVDNF7GWKRqkRa5pTvG7rq1AgoQdmAgDryg",
  "key20": "4oavzwnnHWAHhMSwvBSBEA7XKNFN7zDxsev1KcwD6fw1DCBBjUTzcEyEKA4y3PLmw6PP3KKTuQ834qQZLLszm2yH",
  "key21": "2V5bUhVQofDjLfJLczA2gvDCkbLWwR8QUc8fqGuMwCP8xsp5B8pWkUxJPbrzjL76ERGw3RSoEJUcFB71qHmFU4fL",
  "key22": "39NoVEEfnus1S4yoHyAcmYzDYQCuuMpDsm4inUQHL3e9bidFsgD9BSGeiEPYPZH6qN6CTBD2nt5Hg8jKVD7ncH6X",
  "key23": "2DCtDduSNm8tuennsVXpNf3qh8JypE1j3tBiF4KmYXDvm2DqHUGmFnePxCGoV8MfpFDVB67yvM3w2LcnpuWXtvcU",
  "key24": "2nSK1fMmNRdWyYAJJueiRjbv4nCDfCg9ivzHLkRGwavenK4947kULPVKqgGY7ASyMxjw77YY1h8mtuR14EeS5Fgj",
  "key25": "nR7q5EFuDBQ2soUXccCAqanNKvwCNrnoMufDnSQxpjDQhgdsQhJyk7ytar4zGiqCWZxBgrWRqJErRngNRYs7RRy",
  "key26": "4gNinapumcYyosBjxa4ERHbfhxQJrtPE1sNyfotM65wQzNA1J8tfRTFJ6MrKRCcHxWci4cPTFvfdV1BJT4uZ5h5A",
  "key27": "3mL6AsuVNHTJEm1ATGEMjhYuvQMrMXV9bsP3NRdy7SxTH8iPZ57QGMt2eaZvPvhRTWjXAaPcQ7dMXQugZDhzSb3A",
  "key28": "2jNqKTrPGMP9EE2kTLNC85dFrqfhdvUd5h4x5W3Muq2m8wjLuRy5qvs5dCwP4YmD5wmB6WeZBC8G59Hkkd6MEQLC",
  "key29": "2wj8e3Axi8sx3FFwBgB81sAKdywizaqrv3Vo4cx9uUoiVNeQk2WSdFafXekUeqAcviTQHfavBZ62R32yrMWMErbu",
  "key30": "4mEzmu4iEfjd4EodxdcdmwgZGZSm82nN4Uh34nBFwNtv72Cs59vTH5memfwBN92A7PqhaopGCUn4ASaVWdU9MpXD",
  "key31": "2W8k6F7o56dTviMZr8oZJ2mcf1XqbrrX6dc2sMuMzb1nqTojqUgPHkg8uLaAokNgKzipWdbxu4G2iBqJuPrdwWDY",
  "key32": "5Xj45auuVjhpgxFFxbSj68hS4U3g8V3AFTuCqq817R1tRwVFoRhf3GxPNyVFW4yV7e4Fv8Tf4DwN7Hejkmh7iHwh",
  "key33": "5Dtrazv1bPQUtCSkcrc1YMhaiParJJuFZ8HtHpvRba6CdXKNnb3WePY7CgcZqiP9ArWNAnin5mhLK6frmUYvZuQv",
  "key34": "35uViRik2FnczxpHnCfgL3zefsB5xW3jnfvZRcspaTnznUiEBP69nZZPtCJkoPUC83nWqYB6DNiNnr4pRw16jxr5",
  "key35": "2qJhn9y7X8jUb1LYfgwEnfN48qEAKsTY8LQSrPvB7p3mFnBputQzRPL9276hMddJSDtoRQumeXzUNvzodPdPZXJL",
  "key36": "5pgkbe4LWxkf3gcLaGh9iC7L2vBVUHc8gDEAS62SWhAS6uBuKdhudecpqxX1mRjS2uji7raS6sDCCafnVqW1mezt",
  "key37": "5gMmSbsphstUCayvRhsbe6WnBnZMmvJfEWdS1UEkNAzVRQzLAywvr3xrc1bbH18Y2BYnhiezqZesYWfVAsLon13b",
  "key38": "65DZyphdQSnZtrQXjSZKUnQ6jvZBNgwGRhVSxUji1Kb2fouBXEb63K123jiAhnQaQCrCm75nMT1mN2CLBbebpsKW",
  "key39": "3owFScR1oL66tq5q1uHQgXfbpWksLPE6yYcYWoobEep7MYHt7NQqb98GUGfNCtQFW4F7N1s8E5DhaHHAsVM1jV6v",
  "key40": "5BXtqEEQgoKCNhcpZFwcuPfBqhY4ZNcqP6wU2UCa3EE9KG24wvB6SkAjhJRRg4CYTh3NNbc68pncZYaoSbhWApS8",
  "key41": "2PxTtdWisKM1cwLRYzgzyiBSJEkEF32kmyChVTNbHAZsMEht1Cw8yHMnWfXWX833LcNduqHd9fGTv18yATzqWiW9",
  "key42": "5o7EDkeVqxqULCUe9LHVwa8a7RjeFNdfgcNdFF2GB9UBzvZbuTDnhxXATLzUR5BoFaxzzvvRHkREMBEPnuHmpQSF",
  "key43": "kQe3zEREeMgthAwAH7LF8KXoubeF48cNpm4ujNGPDQwVTKwCatDrjvHADAiV68HHUwDgetxG8HHMugz4ENhMdEJ",
  "key44": "5caaycgPRapLzvXztpScVAvDiYK1N3A1eXSs6GTyxcjhau7U68isvkGUtWc5bCxG4jADQ6woQPApWPqxqWRC5qRA",
  "key45": "5W7WXnykJmGxqT7NfhvrEB3nPg862mBccEAT3d3cBw4LJZvj9uJZb7wib3SSAQ4NVexW4YfGqn9QyLdVhMRJc2DU",
  "key46": "528kS82o1k6AdSUCfg8fkMhnMUCcvAXicSXUrW8rBN6uyevUuSC8EtigwnyKgUz3fpajHWE3bc9NJTNWLAwFZawm",
  "key47": "3VmwWVxaFtiPeZTg4EpNDfdTxmuzAgYxyM6qhn3FihkiY4Uj7LbiSrRm5b8Pm2VXodhkK9JknqSRrqU7pJomx2MV",
  "key48": "5yGYszgk9ALkTgUcePLzp393k9ME56CLQ92QwqnD6nrvUPWK8yTEWhK1WRbGX3V8j5N32M37AoMbi9xJXU2keU6Z"
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
