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
    "5NoArxZ7r1VrbX93b7KFo8y4ZmkQhHpj5Kb8Bc59VJWpVFse4KSuVouZ534ASs1aanbbNtTJzK75AsksobFcArG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jpz88PuGqwbGVaGSAR7cPLLLV9UjxNvBt8CmtgrDNc8SSND4ekwu5Fo8f4NJN3MyHVcQKAAetivY24mTgJmS1W3",
  "key1": "2Jiu8ND9BTae2S2QxrCh6ZARyANX3Q49cudA4588y49JmJjs4No2fiRjG6W4h8yPKoCg5jV93T53dZmz9Esvh9Ej",
  "key2": "51bbL8ZsepkTaUcXV1z5XUSb6thxXqjH2WNQ3vg8kQULpnLF4cwJ5aEhJ5qFM4XdeoPmeiMqPtDSnQ9azQrwUSCk",
  "key3": "63UUC5gM2jqtRvMUCVThKvEUDE9wz2a2TWkwYiDSXXxeYqp1Mq1go1TizPY98rT9WUJVYj5P17rtctVTP9wHdVa",
  "key4": "4WkjS8f2jthfLmR2Vm8xjxVj4NoMawA3su5SMbZ3AGo9RtAmht7RKY1rCTPVMbRu1mnfTcjncpnVjbrwyXpKVpeD",
  "key5": "BkPAziomTUccyuXKXz7HZJnov8U4C6dZGA5THy7SvtCgnBsvtM96rbuW7ZQzoU11RYvFGu2xQ61YSm6ujsek8mZ",
  "key6": "5DZ41exmQoyvzbiLJ4gRakfWmjpk4ZzrHDnzLVRJ5fT8rCb9SrfAnU3WWo8TrgUgMSEuhLbRFzCbbB2PYk7fxXtz",
  "key7": "3MA1oE1epfhSYBsk2WWH2F6uhh45kq3ii3kPhNDCz35vXEZ7qk6qChV9wjNpTp832iraeCr2YJGouUmgTxFPTZvZ",
  "key8": "2jkMKiLvD5igPLTXhGKSgRfqf5Ab6sQtxoYtNnZFDxm6pxwCFeURcqFvfcz1kxFxwAGoX6aarWv5n7XKYztgHyhf",
  "key9": "3i3xnBwN6NLxfm4DzAnUrhZvNrseC8DqzwCSC234cV1rxjT8F91DRUCyHaXmYHHSFBvV7Ss5HWWjWo77sL77QHTu",
  "key10": "jGHZZrmjq8vkbKhVEMbPvL65y1SHwJLanLTq2tF88noUiRLGY6pYsVLa5ebfDYTooNqP8LECQNvAPJKnQ2VhcyB",
  "key11": "41UK3RaJCALhBprbwtLwSCeGDdhsKTcWYgCTHU6oWb9VeouMwMRJwhhsPLz3SseVeDfu3PQG8ZM1VSAi7cD4tUqZ",
  "key12": "2rzk4jUmsLTZECejXV7pQ1x7URpncRDgAM4PHLsYH5s1W8ampgCinMYTTC5rZrXU1mbwVj3DRq1gRVnXa2Vpyto9",
  "key13": "5U1i9B9y9cZ7AFADk7SBN7yko6W4UvWaLs73LntSJuZAZgHLMK5RbKCeE8FEgCWttr7QTNvsxtYJmSm4cdDLLCQc",
  "key14": "67ZPmgYuqcw13DpEEK2h8nyggWeZa5cZ3Qp4SUgRFVxahRmUmkBedJApaUCm6cdjZSiGQ5G7PmTTUu87Jg2WVAdm",
  "key15": "4FTBfh33SUeEjfWxSYQVGdfacqHRZMGJstNfnZkukueZb3Nf8CrkeArvKMa1TdYPugVE8gLncXt6PKa1h7rKAnHm",
  "key16": "29SsE4TdvxqYer4UZksU3ZyDjMsneVnrnxKhnqNwAZPjY7guzh6fbNe1424ViUpbaEKZUCKmxkxuEwkVnxo1o4Nb",
  "key17": "4FFm6A3RWFv5WysXh2HDtYdsQTJTgEYM4L8ytSvxCq8PjKAiYWcrjdMywRvHmM3KtEtbJ74RfDQBQMaptrFM3V1d",
  "key18": "359iqb5qsQvxvPaYzpYWsZowRidELjz4etw8dSeoZ4mg8bM7pawrCeSGPaV2JwCUwfYCY2EHEvCJcK51V8hCtmDj",
  "key19": "3976mux2w7fpma9B87Gc7okGS6iBxErWqgH1ffv3naSJrJ86FE1HgeuzkUWcV8mwFDeGXyxDBziXeb9E4MMUjp46",
  "key20": "4imj9XdBNhNWntV2nVMwmLvCgg8McmAgBJ29voMMLXjpDXJafZ38dLpNxtnqUfuvVyW5gPeK9bvYdHZYQMJh2iEu",
  "key21": "2aSHAPhBrKiVKbxz6JWLxu2q2WccS8AE4b8YWRNHcRVVuFY13hn2UHJvSP3vN1VmCd6aRMdxuFow4dgssrowPkDG",
  "key22": "gdXfKbiWX4zsz1hkPjMxqMYfr4debaAFcHLAd2GYTqxMSuqUcPKshZCXUMAEYafBXvHUy48ML5XT8DL4utzgBgc",
  "key23": "654EajsH8zyqo73WWZHmtv29HbK93nRqorpqqTcUFAnxZTTvXFe4H5dLJ6bzeLv4bHtdPx5Lv8vXmN8T5FzB4aTg",
  "key24": "DwRgF6rBSmD5teoMaMPEBs7KXxyJpuJnaHVwNigXWL3QBTKvjTJSNtenQEU27HyskxMnUTX82idsBmkT5kY7GjE",
  "key25": "4bdAVghTcbneezWeSiqo9vVdHRQHNqLrzYpetBERrMZhZiySGtc3QBdeaqHUqhCz59P5bfSyzmKEvM2oyWetDX5K",
  "key26": "4zJWZ8syjQqoDDutSfA6pxy6R1JPAZgWRkMzsmL9WQvXsLb3WRudsoXXDEZJRpRdkf3ifG3RQXiH8gHmvbsRuLPU",
  "key27": "5BTboNrEu2222VAQ1g8jZxzt9TMUyjDzLs6Pw3rAnrLVpxRiLc6Jore58scFDuFPfLXrTckvYC4sCMEZMBVNoRaK",
  "key28": "WSnTwjYhRuoe38xevCNVcTh1Egnx7mjkSRt1yyDPwbhad5yExM5pBGKmECqAErh5TiCr6yHZXuxKdUzhQYGQYP8",
  "key29": "5gW7VcV8wAogPivwpt7J8GJamB7yTy2qRvLPER8gesqSQRbvTTfJNv4uaWDtr44wtuVSzs1YLvW4ym1tty3iRkhK",
  "key30": "42nExf3SxuYERzQqWrSqeA8NVEbv38ZuU2ZDbzGB62wS8vcuvgQZQiB89e964ipDxpyotk8YYBE8V4ueFmgGh9oH",
  "key31": "3Pt81PsgpqepfDL2Uj5EQJLxWsWggwJvohM7bqeePNgmxBQ5roWKNcvXa8GkioVTZ717a9aFJQHfYGeoyYkSX5cW",
  "key32": "43rqWFQ8U7Cc943pPZg2hRwCz62nS9TRQqG2rYZBmdW6dYJQ7GosYoxrLvWgH6tZknEcDht7NhtRtKjPtNHDuiYK",
  "key33": "2mPH75p4TuyJEWkM8jobhhA19fcomKd763Sv1XmQ3wqcZb9ys4cTqgervH7ep5NLSdjrH8zpKPDCfxEB7MbiYc2i"
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
