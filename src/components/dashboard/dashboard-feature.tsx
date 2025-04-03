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
    "47u1mVs56edAH6rJPfqMc1JJjsLJGpbBmgS1KDjEH2hfMfQwjrY2mogr1yyJUCX7c3kweTZ8vWEREvLRfAUxodbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XkYNY8MXffWoksWsgboVh97YyxTAndrqennbZbzeQCmjr2mLgPgQhxDPz7TwxJ9xxrx1K5Pfx5pVYk3KdGwcrz",
  "key1": "3TCN657qcNgrAJC7rbZVeHKCQf5SUTdBuuK2Aw2brACRtNaipyY7pxDGNBx8EXgRMtg4iZqwbSxWuqkVm9GHiSE8",
  "key2": "3HVsi9E9C3hoQHqcixTthPkjf8SmiP9YnsWmMUdcZjLnV97JNLhyU4ebYMvHoFV5Rt7wzv7jJpyw6wgHdbnn2EAt",
  "key3": "KV8uavxeVLjRqhgRfiAY6s8JjDEXrK3Uzca7ifD5R6USzNfJwACqPUUdgCcLqiv14xHyYmaWhP1WLooB5cTUp11",
  "key4": "3HB5wJkRH1RB3ZhHst6x2tVkGiSySXwx8atVVLA1i3oRz5NQpYrPkJ4rkCxaiLUAx7wyFBnqaWjk9a7hesgFhvrJ",
  "key5": "oSaM5awrZGCGfNswj53ETkkFGYLsjcmCanLXYi6wGWo6RNzsq6qEhDfUPWAqC4NRTJcQbft7USToC71LCvfQedX",
  "key6": "BWSMYUs1gitxJsqosKnmFzk4s4S8igonvYCH9xfaHedzEgHpp9GSceP9JbmANTBYCWcSgwCbsKEuR6UY2CWMtCj",
  "key7": "378cwwyW8M3kyfGaTErySx2nxMF25SEZMFBk7saJMUkBqesA2EtrCNQM4W64bhDVfodn8vwwwe5xZf3ofdufWQK3",
  "key8": "3ENRSW4S9dSFwRRBvf4uD9DSx3bD92CnNrVFKGYz4ZJW9Xuju9sXPdtYQfEz5kKcogF7xj3E6nA7HYMELbCEKoFB",
  "key9": "2M6kcwJF8Ubownra2f5qWaW2KNq36FiH6ym7ASKqEiPAC2q9t49Gor9EXtQ8o5A83nJVzK7331JrDrGGHoGrsiUf",
  "key10": "5rutMyLgmXBDoU2HqmpB1AARHNYwwSw6ST1CJxM9nR1f7G7LGU7YgRQp9DFFk4Ni9kWApi1YStempszPvkmcXcw6",
  "key11": "4hKaahs5ih1zsTdzt7sXu2G2bdKffHjvxki5bM6mFs3heAwRV9bpU9TWZFKELzjpUdNnWjxdu2mdqUULHzNEy5qM",
  "key12": "3gc2WGiB4n4USiNPHcdVPXAF12BwA6QZAoEwQCdqpsmHDbsaMNWQLHhSbJL84M3bPFSZPFKjAWH4fYnS4koHkJAf",
  "key13": "3YZz4QhXCEU7sQTXJKXup7KTAfjeExRVZZtrJmgtJiLvqWaMPvbSHh1XmF7EEG29iMix8U5vXLzZyVX9zxBn3Doj",
  "key14": "29mT96BQoF39Yu78V6DoPsFyRSqtRMSPpLbCydTxSTTtghVmQ3J2sxPpA94UyRd4ewm7KcGQveX4MxDXWeyak3qf",
  "key15": "2mGh5WU8sxJRgcmit6CvU3m6kGMPn3LdnL4oM3DNBswFNpemxSVdN6USvYjFU5pB38tVhfFcvgNzqSN86KqUaEXX",
  "key16": "5ryzcHLe1s2y4S8UPSt4F6XsDXFGeVXkiWtxs7EkgnWqa6yyEeLopar6tBQSqBKwgN7dXJe9FRtjUhAbGprPn95S",
  "key17": "EU7CBZ12ZV8QRUsUYJ2DHETfCHKf3YxZMSyktxei4WEU7MgTkddTKfxuVydkG7ER84J9ELTpNrjSJZzCwKmHavB",
  "key18": "7b3Mx1h3Vzsiewgpkvny4NQCD9KAYFmGWqvpxoFRN5FhBCzFP3nJHqcfBaDydBs3hp3kCGhuESGerEXabTiVdGm",
  "key19": "5Aht8oKX54vF4dY4BrE4XvhR3y86BC2JCcrCTSDDCwM16ukg281fmJBcQ7fqryADJm3kC7kDsqLR2sM12UmLwusg",
  "key20": "5RURpwbZ5ZioHQpf8GyecourFqG3Sw5edGdZ3YPbWpCBFFiPZHTJX9Ui3wSoRGYEJetzfgevw7AmeVz17AHvnVhZ",
  "key21": "4ghNc3hXm4K32GKYRD2Snum4HfJCg37XiE2wPVbsGi7taW6HgxJ939gnFHHpyPFFk5xPu4W8PpbJKbm6o3KuoatG",
  "key22": "63w39FMFhiFi9pDn1hgvmSGb3ugmGypiEAG42c8HZzoVZGp3KRTPr79ZrdayfDxNawLq6BXfcVZbwAVY5ZrrieGK",
  "key23": "3xbkfAhiL3kZL2VUctXsFmhPhGihm4h4RhRNh4bR5bp6tcsYULpnExFgzzctnfobFaQkFeQcWWs97fahL4whJUFj",
  "key24": "263toA9f872zHuJE5Njbz2zqnLL3NDsoFQsDVskkHATsAj27sty3QvzWVGPApr88xC3YcSSBmQqYT5x9FiNhdSUR",
  "key25": "2dZpddKLWjfFmtZEtxZPjJGhGi7ZpPa3qDM5Jq4hqWvLa2shYDgPvxazyedDDFf8663GnrrGFWEk8X2qLEnX5e1y",
  "key26": "4mbdX7PteG4MTrS6y4aYezuHVUHa24pnzj5NtHkS216fAowr85EnSmeMnPJPNMx2MaNKY6DXegxUd8nQmMwdcJC4",
  "key27": "4WBp4zf2YX1nBFwGKNvBW4sXRU9gfcLEA8DJoVbSJ1aWFM9FrseFq7Z5WWyX4WF6kB7ivzbiRj2FjSf17ndkjT8H",
  "key28": "2k3X8S8bDLmLAP8P22fVQfvAaiiim6BvybpeE6gQpfTWYmPX2THSUsYGk7h5SqAC3C5BiqmsS12kt1hGmMTfWZkj",
  "key29": "dqJcQ8x2i1n35gQVg9GXbgMdEhBgfr5j5h2HjfF8PhDXVndD7Px4u5FhFVWuCSDCTdQFNmPBfqcsR1QbSAkQiX8",
  "key30": "b4p1auZ1FtMBps5NCWchnSdsMAhhAgmVskwpjrdvDj85PoSWViTKA2eNtR53Ez59xqH7vFFSwuRCEHjrcut7YZh",
  "key31": "571NZzzmod3ddowy7gC6GFiY8agowvTfhwx4usn9R73cBSPTkMAvyKP7e8eNRibo7pHb6ewnUhKUTdTHRpb1TotR",
  "key32": "2A2f5uvih12dW8SmgJ2T6zE12iatzXCcYQ57sHQ7ZzAjYTyddbk35jc9bRBog27mUfPpQLavaTfFFkik92duJwTu",
  "key33": "3M7oBtAWHdXo3RrEyiFXbgrUBTXNEYohfEMUwiceKyM3sbFsT8JPtbmhfqJdknyS1x5q2SYgdTa4Yh2iM5BGHuw6",
  "key34": "3Nfmj9CVWMUmC19a5U6HgBvcgnQWsf8ZQqiRsrPAGZdZvQ7ehevKUTnPipYJNtQt31YLU9HTJCsAccMGzHMt8dot",
  "key35": "oK9CVB8kowEqyg3k72WyZhj4S9RQKtTdnRw2jvrXL1W4fvFtKbkCR3Hd2aqSsGNr6tffNKfSkbfvZzhgDmHa8j6",
  "key36": "34FQYarBwHz2BdqThnrpZfx6nt75LRGsUDtsQwSf2TFBQqcCBkiyo6s4a7s6ao2o9xqxj8QXJLusrLmUjWDcMQDG",
  "key37": "UGfPvWdz72gxWAVm1LU526ThR4tm6jHe9HvqtZSvYHVupciQBLbqQsmEvpaWX5iWxNoQSisvJ1AVsGbZA4cdKAm",
  "key38": "4ZEXt6WgE6cHEtsRcwsJHqVuUYPk6dEwRGvqVaqWfFWFYpVSmXoYFF8DW4C4tqpbowYuh1iT665MoSiQw8Gv4H4R",
  "key39": "3fbSbh7crxx8q7b1iYNo6WosjpVXPsiL7wmLCJRh38uspBMujhfCyEKAFkRDig38jkGaAfUtoYoHickDqhS59QE2",
  "key40": "ZHvxYA2iZhfadDxqYZDnH49x7SevrmV2tAAfYSZPkmUAt7f1MCFYFugmCCvGcmoEqHdqKbAA3t8adu5mj3CzM9o",
  "key41": "3xX82AECL5wUVyggPTwmQPJGywMB5SEDfJDnB88hprkfq38x6UhiuWvmWnqrXFVBbx4nXcCqa3hcdgf7DzktndHa",
  "key42": "2sYsr5eWdGbHaJYe6XRE4XPKbHpgmTEb5BfDjAK4iaNYHGtVA2iogXZbGNuYrgCtW5F2AhJCuB1QeBu9FX5W4sun",
  "key43": "5TSSUPdBTdEe8n4v6tfztYGavWGLt8pTurtUhv7EqeQvnkYtmquhRNnBvVPBvddipZvNcrLzWQKTwe3Q6ArzJ65Z",
  "key44": "41geaAvUaEfuZDy8EFmVzRFcUBZazkVxKMEoDKcnnU7XtVrigyt7TGrs2R8KXZtr8f8rqMdpYDkPqESmASwdtY1Y",
  "key45": "BWjS3pPojoiALr4wabjTquNAvwmgaf96fFctZSwCPquq29LKb7aBMRz1b2zV5t4e1v3qzuJx89RYP4eVY729iAR",
  "key46": "5WvbNq77suebV7gnorVY9br4ZtjNYkDMG4CcRuMgQJaFrzpkET6kWD8k5YkBGJEZCMPEHATKFwKarBXvBSnasSUv",
  "key47": "3qRqR8Lu4t1CCQr4s5HQ5GTJSGAC4kPYH5HbKRyC6xV6VJYXyg6BSQRwBkgQGD778uQaNyedyiFZ9ngifhUSyVnq",
  "key48": "3PG5K5eZMuGMaYoQoBTy65mCFoDz6YcYyR8DpZw6eHqva5fKLQrpjgTLFrwFNjnUvQJRJwNyJ4hc1A61PzyL52DE"
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
