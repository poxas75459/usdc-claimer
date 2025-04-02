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
    "2Qscu3NS8EutKrVnXoWXhDihLW285Qb71EFFkxKUJTaTpBpEXhC3TTWFSCpwFzh9NXwmJfmFP52xJMr7oDoJQfrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o2QNEwyMUH3wfQKXkxy6eaJWTrrpsJaVbiskogkwDHdpcM4iyQGjhVRZj1K1mZm6fuhKyQcwW1sLYchcqVTa9Zm",
  "key1": "5qYHjDJGnizSuJ4p2EPisvPqJbrHoh3WoFQFats5X8Qpbz4hVGRNvYCxmmTmo9zpKksxjHcLfrPRvVm56KkQ1oqv",
  "key2": "62tLVXaCi4F1KSFAb7rZErokg4tSEgMG3xyDbsCAaVVfEunQH5DtCHbLKxgxygeSFF2Lxhsd5w1WjGK5rzoYUhJi",
  "key3": "3zUKY9yCE2ErWYwEV7ruYHmmitEmUV4vNdvuwj2YxFeaAWHhqzg7MWAedtquyaHQWNMhLvt1XYzzWEJAKUXWw9tT",
  "key4": "5T8Tz6RxcpQgLEQzkuwzpk6gfRXCxmyAZDm7gm1atKAX5y1D5GUp11KcC4v2tKE4SBsoXCzbTb3tPsimgBPH9Pei",
  "key5": "5XHeA8QY4UndgtSPDY8CxKgZ9fLRLnL8SLfemZPcAmeuAeXQkRuQGuQakqxtHAxXwQdqZfki67HyGX8FKb4axZmY",
  "key6": "xYPJrYZqMUSzReGEePfDVFymxUeiawaWcPYpa6hei6t79bCsL8CukCG9Bh1dG6oArbP8DhPdbhHb29ibFaKTFvW",
  "key7": "5XMVCpADSA8Ross4ZCc3aHLj1QKQQ9DxfqqE8Nxy8HxCZ4rMAWzqnRrihuuixstoxTfbKtgedrFZCUP34FcjUeoS",
  "key8": "2Rm4QfStBhZPWucdHk4YvbhXKkKNvREK425rx5AMLb4UbQeTm31ogd9hEeR1yLK8C2nxmp55jTZwJjPuwFaYXAEW",
  "key9": "2k6TAVTC8RVBNBt6oa8yEshhXgVSCod4b4mzjD9sE6xBQvXk2Gz5pGXVKbmWt815B4nfuA9GeHypayBWTkdm9JV8",
  "key10": "45hUN8DaH7v6j2cSqiq63vJzv6gKsLTC7pP6cazn4S8urEjKxD6Frfmjh3vKYLo7zGCAp8f325Wf3AffXSsxZbue",
  "key11": "5pgiJKjTUSGMTFCtmdnCRhncfqBV9jyRqv9jmEPpJw3K1HDov6MSTqZ1hAVpqLsyxmsrVTpz9VzzzwLXiay5okqH",
  "key12": "hr1ZTdLr1MY9txJ7zK3XBcnaR1jEMQNUFwQ6KrDhBLzXftTgYG8pn27XP8HbcM6Er9ARJmLHQP6R3oYbtsV2PJL",
  "key13": "UReGkJVPKYZaAbknvgcxTBtX2pgiuuqHP4PK8G8ygP3wKygQ2mxYoMbQ1wqm8Roez1XsMC2vmrB3y1H1AzDVjAy",
  "key14": "2gHtmXYFCVjcvo38MwwyCMSzVZA2JSsweNiC2VexrYqxWE1C6ZqBFT92nBKpJHL885BN2ta3QrxL9Nvgn13XGkzo",
  "key15": "YP4Pf9wtb2hRCT4vXCDaC8ipsQroDf4spzNcDRuCxoyrZjqjifK7x5vLBrJcvyxcVywZNB8dJ6gWJBDYqjPiXpz",
  "key16": "3mnLqSseThFW31Nd3bbHuXakp7jfWaMc6wR7WYBiBNrFuMzPZ1H8qbCswDdtUrZRXJ96zzGaiHHjNz9nv1pzBpRd",
  "key17": "2JprmNVVuoCYhDkS1hTqGx9gjXmeX6TCmX4rMB9d85pecfs2dQ3pc8dS2LyK4LvkYXBHWbX76TcgNrFAhLD4huYh",
  "key18": "2swJw5psPgx2Nq5WWBr71TYBCoUjYk489nNdu1hdb1U9mckJHXXuq3Kf3JnHq7f2ZDDzQzdPCm5yHK3S42SGtBVh",
  "key19": "2G2thVCAbocxyB94Cq5KMG3Qef1Fpg6Cso4QHYxpARAjNwJfZTCTjPZ7cK3RA75MH6brEWq8LAwoc8eYo9HpVJbc",
  "key20": "3xYEK4nzutr5tygieKJgNhtwceRUFUGL7XFPqnCzn6SDnbJN8HzHm5pgAJtLJNYfBGUsdDtxMxcPijsx7LBvicQt",
  "key21": "4zn2LPbTxzaDc6NV7FpqAbF2NM5HpzRp4aT9reinEuhDyyaFyx2PZtZEa9dnZBYXaUR8KtfV9QpreCUotbBpkdV6",
  "key22": "3xgRCYiotDG3wvowUowNXqzMexESrwjBfjaACUctsvzgCD1qMkYbyE77AFsoSjwQkKjd21ZZmg9rRMtvQG1daAMe",
  "key23": "2pxnS8UCgL4N4Yrj5Tmoo2XGPr5GkHjfsa5MKdBZc7rhfdtBd6fwVMiZXc8AHCZbb7bG3qJFJLumyVBqUdCnc5TY",
  "key24": "2AbMWrNkdznyqLqtbFVijc1XWRLDkHEdk5MWChKs6qKHhsU6yHqze9WjdH34YeSPWE9SM2wNZArSwjLukJR3e1Gf",
  "key25": "5c5yreDtCX73jh5UZqoWdCjx1SdsQNUugrwCWKDpkWzjQSxMAPJgGMdNkxda6aeiogaoMpWfGduFeW6f4uf3Gwco",
  "key26": "4sM1ekitont6yiq1MsTq8virVpJg8e3pbqkiAhGwmSnHrkHJEGjFUKyHggVKiwqHhWiXQigHSCpQEZraULZjgYNW",
  "key27": "5rmDhQJtb6EYErxGGcbjhVgYseRa17rTvAuXkuSEKUgarsRAnCgdmZKDN1S2rA13ohRDNMYVET134EqJhnweBHEb",
  "key28": "2rdgVpnJfSLMsRXkPPkYduHh76MAe1b2B3p3BQAKUzCG2WdvCAd9zsug7ZoC4m5hpdrm5ChQAtwXVgLPt1Ctcb1N",
  "key29": "4eTqERqUQtSkw3j9KEYJHDeYULm4wdn2UKxv7TDEZ5DLjKEWWTRtEqgWVaaqLbhK7u3wENsL1JN1vwqWSwNp9Mzj",
  "key30": "6uyKqBYg7QV1GZ9xuPZhx3SYRWZubQmxhha2BEfYRthzrWHavy9uet8Z86cswHoZvh35SKvpZmedZiVoJtx4EZ1",
  "key31": "5Fg15hEKPGhaANiSEYCDvZFDPSsYvKNqsQ4qeNaBbHWfyvsxZbhfbkrHZcCFu9fjRALZqT7675jhKfqn8gKFd1zd",
  "key32": "5HU9YqKp9tNa82uUvNJTTsJidTwmbkqqmK542bmwEfHkPfUCmyvb3hvgV7agMtWkPMTAnQr48bNYcRXzfM1WV9cd",
  "key33": "3RmhRm8siZHYBymSbzM8QGrN8QaxMguxGm1Mjx7hQNqGLSCQGh8RYWffnQPimWRGRDc32sFuqVqYSSu7JhDvAby4",
  "key34": "4RKtmxD7FqGS71j7KHRC4z8ffbGbPtoesdSmc3Z3mTuTrvnxGzqW3dTppr9dFQzssdj421HbkahgZkksQLRjLotL",
  "key35": "3k1SwQt9sGy5jD3d55BQtM15HLf7jshKEucSebeyyXQo8Mg3hSco4NYmXqJGpxmEnXXkD6DESptGSmHryt53fRya",
  "key36": "5QTrnFptLTouiMzTeJ26tPZ3MNMWhenf1cf6QvKxS7LuZ2qkyPptTYBzDRoPZUSxkXHphBau8m9MbGTpLeGvoEzb",
  "key37": "3QhfM1dqz5wxg1CZsN4ab97xDQFEuRxYUfNxbpEJXL1eEqKB1fznFC5LoYe8akzQNPwyHpEjj8ENyKPLpY2aT86R",
  "key38": "3KyoKhrE1st1ondjG7EPMa9P73DJHBfMmQsYd11Qd3Ar9LbLrtUEy8tX9QgG2vwXcL8Xx4YNjD35bw8482BrzGiM",
  "key39": "VxUv3bWrCbh4grHfBb6osRoepN7BcREBUAPTsW6grSrvJUpP9FjJPGe8xx4aj715EvWf7b8apJ3W49EzMPYSzPZ",
  "key40": "xzcSZ9SThkEWgRacVgmRub49XAwnyJ3eg1zJE7yVCHmJ2zacRvhpAMrsgdVMuXs1WszZJJaJ8gjiBpKiqrjdWwY",
  "key41": "4cw5fjRGUkhHYfbpLyn6XhzidBC8bcTZLxoBYor186Moj5yBSq46eYqLLo88nERF4F2URN85WNUySz2xYsbVJiuJ",
  "key42": "4JGAuPSKVXxXhUtBYw3TgrsD5yvsNAYtmTdQwzQyrEM3jAdnD9iZt6k93TY8GkmxqazCFZoDQPT4WfPfDjgCLYsj",
  "key43": "2Skm9ddrkXmXfrWh9fHhy8otaF5EgMN4sqZtTcMq5BypETUWfgAxe4vxov6RHyMPXHyNMXeQ6UisicdBwbVUU7eB",
  "key44": "3bohdPa2ZygEi4AgbFxBjuGzkxn7bS2uzRA9EsWFbS7MFtV5Rt3TAYFwT3P1wx1X7NPgNd2yaMzgW6jgyQG9wupD",
  "key45": "2wLSPR2r4X6Vzu6n8iVFtwUj8Lbf46Ex3Mj7CCtwawPfia1Vw6B6NqPZTaHJZXkfsuyW9Rnakz9mZ9AZGpXxWj6r"
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
