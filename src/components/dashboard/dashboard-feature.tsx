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
    "5ANYCyiQ2XRdZ2J4fqSTbRKyZmLsF2MKZG7f7B2XjjFBrN4RSvVsMtPUeyDmACwUqQfYNYqDqqGqfdAyex4FnPQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EhChnANZUbUiShVkd7PHdHZMEexg6W89YX79ywWcntXeMk5Gj4PnDHWsU6PDHmZUNodaHXbZfwg61pA9zzxsKyt",
  "key1": "5SjAygAVGhtu81B77jQeHKScXRzjwYF8TwRTuAhMRfdbTswXiLEWZxbLsQVJ2PdTSGSZxQ6e5DMChfju5tPcpYVf",
  "key2": "RyCKy1iXHG775s42B8nfp7ShrzRfWkaVBoLFgLSHHHhsqeph2mBxx25bNjY3b3ptKNPQKtzUZGcYaR4dnGSuVsC",
  "key3": "kRfdpLXLC7FLbtjH6iqBuHpKPYb6gKw3CgSvjvHfJ5hKwrj8Sr6ffXLNeU5Xj55dHwcRqiRVCn9EekRzseVytvT",
  "key4": "2ANCPxYNMp8V5rjvP2bs2TgvauhrZJEd1eKqR1Ei5UNyc4FNa3w2W4vDuPdfZksap14v4qa3gcqtpbnJxU8z5teD",
  "key5": "57iFd3YK5YXvqhPPiU6PwecsJqD5Aun4fzWkanxskmkLGJo4nrV7ArFMSTZ5xQh2aG85gJQyvRJiTv4sEHZsrYWB",
  "key6": "4iJbRT1VzYPejQmto61xw9EWD1mWwrRX5seBGz7RXPXYC1nt4wSi1RYWJCDpxj21dydFjVpQu19h7Crfd9rr3pvc",
  "key7": "2ErszPBhXepodooxcZz9fsiDKJPvmgVRjuxFmPgMxJ667Q3UQjTgSSL6ZQFjTzLUnzgFYPiiNBuU3dgoreyHxEUq",
  "key8": "4e6c4ofohdFxrH28zHwYdmfUQ4bRF2NguqJ3fUawZ1GPyMK3iPZSsRSeDoJQq6aXDuPLhD4cqnCz1eabe29zc8QP",
  "key9": "4ehqgJFjfR71PV9A8R9W86SPgqXfK71pqv7tYDWX7YxWHAheMfM29vXeEoktnjsbwmyM9uUcamvGdVaWBqca1dHp",
  "key10": "5gUcmvvDuXX6UFkPVGkkHARJYQm28xw2RUswb5jZfA6zFhfZhsnw7Ls9PBrFZU75EU7zY869otctemkfnNsquCBS",
  "key11": "5Q9v9u2dSx6QV35fasGHYuTpvEzQQchJeYY1V4YpHiXnKDEaACpnRSrZgLVxgvvD3dxnAjS5y29nA6z7S2ygCx5Q",
  "key12": "4Yq95kF7qA11vBuR4SAbvbi5S4QL9gQLY4KmdacaJUFUqkaAYqCYZuaxj3LQrjQNTXMkrhM99jyhQmG8RYq9rKtC",
  "key13": "64TnihoudFRd2H3MoEzc84Aj2Rvk2Dn9NTCVn3eQDWeDrNsbGWD27vBJUb2XzUv7JWD7p9RfKdav8KeTfP8WzpWv",
  "key14": "4Hf4MW59JmRJ7NFgpMrYjTBPtwAV4cf5sHGdYoRt1tqCtyTdyzuo6JjZv7Z4R7yXyutNYZfKsPMKRGkahySYPrB4",
  "key15": "3eqozSNoxfw3gVBiFEFBySWZND8uAEv2AZLHcoepnveFpPPhmgGJPWaHQHTbXmLyti9X2YwJR4GTURkc9JJSRh5g",
  "key16": "3kLqcP1aEoq4Bhk9mN5q6pY12AQj7JabvwMn6BFh5xH6VmduSNLJdU5Uwcgn3zmGBiU9SkFPAv3LHFsRBV7K1iFk",
  "key17": "66LHDzduDUPTfpamRzs8vCJG5SXAhW2zEiae4mBvdxuRf1vSn6ctMbU7TSDRSToUa245dKRmq4TDsPcQdqedhVee",
  "key18": "2ABTSDZk7SUXEYCKMFB1j4N9SpFoJ8QofH4WyJGuutxtm1uq3Rry6cJgWKa9hp3X8Z1j4UXsmLeqEwhCcDcBYEFq",
  "key19": "3MP1p43nbF2ZzzaZeMidQoX3h4iWSWujJEnyGWEM7DDMD2FqewcxC4cw782qGTyCNhnhfZTmg6VHPVNpw7L8dSX2",
  "key20": "2XvPysPmBSrRgXUUCWWBGGeEjjgHjN6oMNYQbabcKKbfvuSs7gkLCFazGnMppTpjAoFQG7cgbxdGz9uapisDFJKS",
  "key21": "BVRgb4X3Tpsz8kj5F4pVKmqKvdChbNsuU8rDqGzqXaU9Kek3opkqG6TdPZZedS8HK7AFmx9j19o2dyPuhAeWonQ",
  "key22": "34osoBnRWqMbthB6Bw5Z2TEMP4duxjpXxSSYRhP9CWEEK53a11hewrQ7i2ESVbQMgEiPbwNMa5RHX7eeaEirc5hH",
  "key23": "43RwHCr9dhJiauGKNJjt5p5m5rSBdg8gqNBUU3YgYSkN4BoUHhULGB6qDF68NC6g5DCKAXyMxky8BFfL3LPgq2qj",
  "key24": "EyxgF2w3HfFPvgzat6WSSuNGJKLHGUUZkn9XLBZpXT3xwSiWTfTA2LyeE2kuC66fb9XcRgJ6rWQoqUgh8ahvRm2",
  "key25": "22j58Hh2Nky7fBQgZWLZdMZBWZqugEv1cuVbaiLjkTjYgW2bXv7a3fqLpUEVWt5hSmx4Kz8Ms1mHNBWWsAY6o2Gi",
  "key26": "PTSqKbDBgxhkZPVHydVyoyyekFpp17yaGLbr3kV8FVtnHXYLbBiVGEBYFEZd4TKPLceYtGGuCSKqsrJvz3CKXCS",
  "key27": "3RcfVWwMQ5UxmXSWJn49TuvGZ9o6cVfKEwJ6ES1Sz4xXaYSqCgKUuMcyfwaA8AysNdPcPHcpqWJppSXeaTYZdViy",
  "key28": "4mw8fDCEiBHAA132wZf83sDFRkoDntV6XKJhmEe1o1rEsHEZp44VX42AadQJ4yDtu9T6iicpqRbE44wCWVcUgpk8",
  "key29": "3zZBguC1CWUDqDKVtJWHm5Fj2W1XduBd9aCNnnCuGoZwK7YNmLR2yfm8w2q1rNSiyqpF6xu2Lh6JLTQwRYZpfhVu",
  "key30": "4J8tm7SFGDSXCVxrXbtmG2QZsQkVNG1DqSH8u5nEwceD7ARChJUktYyPBUQsaHQEs8hQjHXL5LHyQmbdERdWei1Q",
  "key31": "3LmpV6VrV99DP71eqgiQq7fopYuqangzd8D1reKMe9ngAakqpLSAF6AS9moGjucBhkTW2MBGvqCuR38uaWCz4zqJ",
  "key32": "REf9KNTCTkFJJz4CD1giLJH73u96N3yYtkKTaw4fq6dXhDmbYLYhzpdfJwtJsVbuxRMhW74MS4ii9N6kgvPakQH",
  "key33": "MrMjKXB9YLyUF9Vwqr2GC21kdvqmDCyvYBh1x4HGiNQGmS9aMnqAAaedHeWrUFWNiVVqzV2JPusA37bbQUaqwzZ",
  "key34": "63KtpKzq9DddoWpTvVgrJumnL6Bt62LHmxYVFvXjRCCbJfSzoTbiY5f5ZcXAdFHDAL5gD7pytneNtfZNGb14bUdf",
  "key35": "61ABAwprpPCuJop1idmcuBRGARhJUct257VePJF8LYiGuNJ2Tw8RkPdCiEyHKn3j3JzHBZH5vFH4psLm8FXqA6e7",
  "key36": "3ngh9K1FHQpiACPXpKA5isgeNGy3Umte7skZeB21LtwWXPbUq5MQSmkheysXRLPK5hp1fCySnknqhKhJFmd5Gpjn",
  "key37": "2NtpNbnSMc1G5qKx2PrzWTAt92j2DFNTVk334rfu6RhENMN4CYMcUfUsGcUA7AgDqTZqP4genyQng38sWBCZJNdE",
  "key38": "57s3soooFstDdLkRK9ZjAqHGENM53GsKaQ8tCS8V8dEym3T2vjkboYFjm6XAbHA7Ex6JRyFzrBqb4mDg1qbJkiqg",
  "key39": "5kxVTXL8urgbYoDwLFeiL3LZFBkaR6BrNUKtNUtNtMtYLbnka5EwhFo8vJAumySR1tpLdj4jrF1kgDesyStRXNSy",
  "key40": "BVuZFahrz7TpN3nTcoa3WxCWZKZryxwDZC2ULT4DHKpwEx23GeaQErqEawBYCncp7cqwMGn3EFCVDVoz76C9ut3",
  "key41": "2SMRtX5S7Sw62Y95dqLQ4wGhTX1TmrJPHpj3E8aXiiXjf233cMPc2kYMVnh7dzshmd7YKyzu3TcUKySkVmjyGKHf",
  "key42": "41DhZJZxmiyurt9sZJS7kKaF8585CM1xM1WapSX551ym9Cw5cqNs4voxvk9H4VQi8ZcpBEnpMQWzre5YAU7goB4L",
  "key43": "5fxoxwkmAy52jTUUrW8ajtanzHtyYUmWPNVghqgSiBorL5Q8MRDQJ7QMFKYhwSAsVz7YfyuKGS7PtRF5uJg77ENG",
  "key44": "3inLayQLjKRxAxVvwxkCwydW29hcM8P5LqhR42jihYLZGhdu1oL7cqZW1ALqkcFBghM9yZXn2yVLmqBbXcc6N5FC",
  "key45": "4mRQBqSt5eVQheqcYCThSCm2RpfMyNXyhKhwqaBzFH8ZPP17DbKsG5P2atz83AnEyRGUrRtW2UWxxmW1kr9YCvj1",
  "key46": "32z2AxZN2zq2wFH9dbxndT8nUwe75gMqUXprs2BnkePXpQ5SPrrEDRL7hB8Rp8n5Fbnqtmnm6RdwvgtYBSqT7b9h"
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
