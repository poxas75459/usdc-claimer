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
    "3xGJCDsDwfikE7d8ewth6YoKnfaudqVNP4ndgZYLzkeexjqggN448iwiY5Qe3pUR4DL3xEdHfDAk4Qs99actm9PL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f5Y85ALv3GUwaqiAyUiCsqWRrCu3KbibMgijJCR9w5Zu8tsnHp8462eHiAXB4MFi9ieiyCL2LgtqLaupQqPwDXG",
  "key1": "2zfkfJTS2CoWNUeb4wAJCS4rQXQ1kTQxmruckaHabMUbcjVmuiRmyEU7FiZbqWabZ1MGKQFgiqDWKNxdYZvr2wjK",
  "key2": "2zHXVZPKhcZ7QMMUoCGaRo43EVJ5j62b45SaCCMvYeGpAEjBDP1a7CrBX912A2BQEcLZkM62YVjcT3sRo7xDm5vJ",
  "key3": "3GzGwzQphQAEX3T44ESXeibkqxLVMoMgizeEELApNovTRvnNxpXfi4BmhdSPSKFBiv4s3yoPxmsPTmc7vTdqQ2PF",
  "key4": "Eg5L8BxQQ5ZWTizhmjgaSRhTfSSySLsQc6Bv64aTWXgsKosezn6kHseyAmmmbC15c7j9f3rUjYwjdrn3WV3hfAy",
  "key5": "3c3QcGiHpvCGQE22h7rLzxTRd3rfP5cNjJcPwZAfwVkDdRhfAFEWTPtB42bYQTprdk39e7CJrM3y1P3ACvdphFvv",
  "key6": "2sSqz5bM3TMFxZG5G521YKRqUZ5nTQWdSUCVEQPAgsRttfRSEnhrqa6o8mzPFJJYKfjdaB61R9FpzYGZZR53WYoS",
  "key7": "3TUupkkWxpzokbgXNHcemmh9iXvdQgiMLA5b5rV7ap251RXJpY1wpgimxFkKNUz39p2jXwjEZZ8kXj4PUP8jVyrh",
  "key8": "YkHk97s3P362Mh8z1ykKpA5qDNrMKm5y9cNkYbYEunJQHe6zratJPWg1mX23PJfV73GKdr8LiyYMrQns3XKcdDM",
  "key9": "4hGDiwqqrFzuC9eCsp9RgH1SnQEkAhvzhdffY1pWxk1VaGLUjfhJXCEwqQssYKcAF7y51DAhG3vrksCapoZ7wnQB",
  "key10": "3Qf2CdHoNaYCDhCX82xyh35qjVZzHTTjNqrweLU4FVLXxFCeekMYBZsL6dDgEo8EMRwZpZ3T6KoQHGdCogTnYiVi",
  "key11": "6TaSLUABnjwEgJBg9DkEQeRbwKkj8V9AB1ekxtQDi4t4G48zVXXmxqbvZvBp39uzMh27p5ed6w1ZnwMAUzV7FNg",
  "key12": "yt6wsLPYeVFM5E2tF2zqCV4oLBAjipvxpRCd2UW5FkxyjT4Ep2UBLHsBswXRjDjA1RtecmPjWxk1EMh6umDaFmj",
  "key13": "5HXcbJELJtD7affZ1NbW1koTYgC38aNLY6QYAhpRmudyDGwT5DBNqUtADYELj1UZcykpqbekjc5cEP12e7pVu5Lk",
  "key14": "wTbxabCe4dYx6k5d4A4Kjy7VvdWTCGBUeFeUzSBJBVgYWSPV2Fv5zWXJMmGBwMB9Yqo7Cj2DLwQSTfp6ByER8Kc",
  "key15": "5fipUZuwZsu1PULM1BScuc8wA1cYcXHxWYYHvacG21GwzrcrS7J9MH9vNH5kGUnKrPAUmQJkK7y5Sr9BP6MQY5AN",
  "key16": "2e6m5yYvfGrD1eaKMyChyz9Ad8Fxo4UV82zPGXFVWKjkiVpfL42iKQsQTTjg6ekLN5yN7jexKBF34JpWpeFhHPbH",
  "key17": "2gmZWYV7UJWok58YjDmvTaDbVTm82y69FTdvdAWw4QEZfGRpJpLTYJmZ4V31V5BXnCL97aMpNzo67wc1qedjdfdh",
  "key18": "CwNdTYkr26z4g4F2D2VJf4F7PxErdtNnXWaHp7o65Z7JtNbwDj1yujywXMkg988ArxhHyTeqGjFtn3brb7CD9m4",
  "key19": "5m4m1c9mSd2xnuWCQ9hvqR9HbWYxXR6sZMyWZbZub5P3w8xWXP3LE1AQozw7nQoGs6BqLWwyPVY7KVk1vHoJfgeT",
  "key20": "2MTb8XynEZ7sXb6TRHNNAtCs7qbtxhym6Ls1PQbfoG8vqR5RgtKNwujJuPNTa8AaK6CrHay2RNg5QTL29qFqychw",
  "key21": "VF4mDUVHzZwrhsLq7mPVhscdQ8hGmAyu2EcaABtqKAQ4wgddYPa4onCvzyKmPwKsWjoXn1jRQ5545oM3Yb3w8BT",
  "key22": "4XondJRiE8jxXpesMswc1LnzdDrgZpHHoK79Tzym2UcpqRoJGJRLxrjiwLBu4XRdZVbrhFnmKVFCxYKAF9Ld8rLz",
  "key23": "5QRaqCazUFZnZ8rh2NpAieY29KN73LF27w1eor5uE71W4D3Rx8gJ93R14k8BQ3p9YyMg9fp7RTyyxt1WUBHJxiq1",
  "key24": "ioeHacvJi2f6enw6aSDsrU42HkfKub6Vgjm46XarH6LHQ469NngXXKo5dUH5yGUPqGZCN5htXuy7hZqrQ5TxGTh",
  "key25": "2Nf2yG2tMtuxLDpZNh1DF6smnj1t68zFGo4YqJGjFLhyUMoWmECh9nqJ3n8uEhmRUnxBEnaXq2NYpaQJQrYg7fjm",
  "key26": "5n5rV2SuzsFycj1pLtLdZYbcSAdbT172upte4TKt2m2Nwt6XeKU11Z7hXvQRLfQprm5AjYCfD2ri3smohGUsvM5A",
  "key27": "2vRGRexV7ERTAiC1QJd5Qiw3E9QMKEp4DaGNPJ9Wo9CmeddU2vNeC2XqKAiYgYMDvxDTb6GQcxcMm5ShW7Qj7kHY",
  "key28": "5qdGhtFUjuvwCcGJz5FhJ6okBbz3iyfrf9t3WyADeQ6zkGocW1wvDAckTM8cTuCgouVLa69pSA9GszjR8Ya88ZwD",
  "key29": "4K5KP24fNdeLjToZDYTRgTvTnRd7NZ9WnfsDGhHs1TAxSLvyoX4T5rdpmCWb2PjgchPkspPNPQCyCVL8BkbegeKW",
  "key30": "2Y1eL6KnNi5upbtEBRorp71Nh9fZUU2V99xaaRKWq6JK6kKAeS3LNWshkxNibLpEjPsfqLiZEv1zaKpe213CtYsN",
  "key31": "5d74qQSitKbthUz4PQCChnKwF4TsSwZyskZUAgbzjruBNccFvscLrJ9vnd5YjZWEpXrYRDeaPLB9bGkSkiK8RDzT",
  "key32": "2Vnvr42BhmSivt5z6fwgbPxUVyHwgg3h2kijwR6UNRaB6DGbtLiXgysqR1VYrC37NJNFJ4t7zABPbVwxRK9K2grY",
  "key33": "3PaLDgYvP9M5UCTchHP8AHFgmxfU9kjbU3j3WR6jK4ALuDh7yaU3tyiAW5eEw1GgHEXRUbLydyugoY1gtMwqTQLo",
  "key34": "VLU9MaVAyCvuHAgQv457BcrtfURjZCtm55kLyf1iCXMaM5gF2LNw471tGAg5bC4fWiw6dxh9VRQmNXK6pbjgWaD",
  "key35": "5DuThyPynaNVcrPSaKCqzGT2KX7V4FmUbJ3ebzHVjx7EjFgtHo7oFxUsihAUWdTE9NHfS9ucWEhmwrNV1ynJEASF",
  "key36": "5jz2o1f277ecYjS4ncJFJhfxiU4JaFug9pfRsqJTFBiUtN9GaMF7Q3ziTtt3wdsQPieByhbNTdfRggBY1SnymgW2",
  "key37": "5NZqYA6atYkxFi1JyYHQKZoZqLxmRspnHCetUaSfy2XthTh9hQpZsAyeAzZQTAjWrjvFPt8TXRSh3R7bcsdi6fn9",
  "key38": "4d2A73t2A9RMb5jaAK6dHJG2Pw17h3meHeEdMgBCb2yzeJoecu6LV5hYDaZhcgtHzpdJVPbf72K1DbkCWhRHTWsi",
  "key39": "5QE14Y34bPEMv2m51b1x2L4jxvuFxwYC4KeWrF9Q13Nbm3dTo5pwfuf4XTNr8s6EMbKCfvSGwZAhwtWqRjrxUmey",
  "key40": "mLc6cv7iiz4F9uX3YRvx2fnKcwEnzwJaQPVKfrfbeFUhXcP48g8L3iGaKx7wKzJWVsEBSU9gq2GExyzFQ22T7B8",
  "key41": "5UDGBDX4h1B6Vnooboj6sLJyCXCNDEgQQn1osuLHgAk5jphSF7tRp86g6NV1vbU5nfjXt1PeyWcUeXuPyfKA39L5",
  "key42": "5okUqgxAhAFGroZF1xHWobTEj9fBRcRUp9g2SjGPN2S6nV8R3sTvNMLUC2dK92ABM1LYr3vgRNiLni92A9Fsr8es",
  "key43": "5PosojJF2y2tEqdPX1Nhd7M7x7GG1i3Z2dGUYcih3kujSTdzd5mE3kJhLUzTyQj4uNw6L23rPzpWxhJMLjdnJgbq"
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
