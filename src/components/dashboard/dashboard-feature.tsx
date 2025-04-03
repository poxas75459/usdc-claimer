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
    "dgot3jyd7vqhvLwqdwHcUjkdvj2F6iLoJHFVdQNATxs24L6YDLyQk6XbactAG9BUrBJS7NeNAS7xwRVuuMou3Ep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uNSeF1GXWqG1aB1EXNqdPWvSYrb87zBsXFC4WgNQjgaVMAmr97J1KD48um1waRs4kBs6ZdDKNhzsuX9H1UNWDYp",
  "key1": "3bkEDeNPTdoStaieqNCK4zGjhfpEjcZq1ZHbDvNqHMokwMsFyjFzoKcZFoTqVWA9bMsEycMUTqrZTyD79sSek3pV",
  "key2": "4kQqrXykoMuMkMgXDYny6HEKHgwbbVZzRra6YFVNHeSTYSxKP21PPCpUghAM7DWcszToEQFarvjWpyCAcj54tRvn",
  "key3": "5dGSguEswPs58xipVVchnCeoTnnzrts15hzmh4mquRuU459u1ccmGFAUK8zDi3Bvb8DtAeX52J7WsBUqxjrfMioa",
  "key4": "3TKGp4PcwthtC6SHfmSrKyucURDrJbL43pEKQ4GQEs3BMoVrtMRpZeN26HCPUTxnTrJ415L8st5ui3fG59HGZagB",
  "key5": "3YtyTYCbaW88fR3rXuW7iw3GfqSJaJC62995L3cbgqjbfKsDCRWZrnYkeo1bdQVXegxnLRbKBVXNeREnD2cqCUmX",
  "key6": "3imGkiomWdpsQuUKMDALd6rnS1zx9zxqL2vZMzDarZ2zWYsim5p8Cb92hXCHnpzLpmx95RQTMKoXgZwwk5msnVvz",
  "key7": "47yPk9bvKssRTRyFJgJNrmS5UnEr2rrJwmH4wvPkrCcu6mqhTtrCNSMVP2WJiWuUmcFPcCFYJLCpcdspLSN8s3HX",
  "key8": "CMBwbn81vCVxs6kigaZdnUGxbK3yv2SwaT7BEA14XeCCMyL5SbpRHgT7xotc8btYR4jL499NfYe4qXFcfk1rx8Q",
  "key9": "3bAHKVQfrYHKogAKEhDznxnUiT6jFhudqgDocN3jN9v6TD1vBmYEpVD4SjNuTHLbicM4EVjKB4hXh6Kw2ML1L62C",
  "key10": "25ERbkSJNnqVAGJAxpEraCywT5UUVFDfMuAkMqjdy53V5kuPWyNhpS9N1UszBeTzoows234qAg9m2zZaJkENwybD",
  "key11": "5mnbxX3dnE1iHMP21A5vLWLPkLmmPietvCG6sKS8aFGbKgYTkPeSNXXxkfLS8RiG1URC91ny4TWfBEpxmH548NQd",
  "key12": "3SFMtE2puYA9VtLHpzjiNxYVs9CdUH76V7DfyvFrw2aLghDKXPuUgZuVyM9yYtQHAVrLTom9yCcxFoWxmm59fVPF",
  "key13": "2h95tHBfRhuPw2LjfKGEerBc8JVUPXLRnqdXwZYYbumvu5Q2wf8msTDnBLQnvSQm2wpCAuizkKBA9YxUULDRnR4Y",
  "key14": "er4h3ieC6QGYPzWWjR2Hy7bhRtp5rFeUNddYQ7ZgD4wshLHnQLK3ZTS9ct3MhKRcX8x6osV2wMdD61jjnPb8pVg",
  "key15": "5Z97QeDPuEN9tkYsSrPvpFrxrDyqQZ9Y9Dirs6QMnuDFB2rbzHB4Hro8Dcsy1apBetTw2Am656EfW7GgM74tXFyo",
  "key16": "5nURaGgeZN4WPJjkHXrj8rzdyuKDcn1wV5nd6tiCrvCD8RS9biP4RPPZ7bZpRju2fMZ5WCYWzFi4XJKk7AtQKasX",
  "key17": "5vfWamkF5T9kXrg4iNSVJFty9wCp15umJgyyFAakfTqm7o9VdjTTRweUPpmmaGLxV3BVp2oAobRCNQXWuGyYvqmm",
  "key18": "3hSJuNyhSDyc9onJ8DABPCPWb79H2XWykVb8BX6Zh5D6eFSBwHiktxJvDBWogoNTRF9Afvcuuxp8YRZ5QVFwqXbY",
  "key19": "4cMAx1wUtE5eicKg9B9QbG4tu6UEJM5AssrcmnAfeZ3q9uQB58U9RvukDdvqsFf8dj2GGtFj5mfRo5j3kZHsxydM",
  "key20": "27KdxgwFgbfxq1jgEZujQdKHthAWJxgFaGtLxVarqUAYXMa1M71xNvCY5ybrS8ByoPRrvc4jaoDxVs67hEuV4jQ4",
  "key21": "3fzRWnURaor5GrssKRKs2BZafMurvykPA23iv4zW4eMcaivj6W4DacAMuhsoXzjPfgK9ZTwrQn6wygENB8gsKp6X",
  "key22": "4cpb7BJKxjZQAq3dRqrSAw9n4iP3NwfcrSCrwnF6c2rSYtpC8C8Nc6GqBmsivPBDpWt6b5Nzo6JWa7euv5Lg1gyP",
  "key23": "4nFJ4yCfxw3JKh1A3T4AGL9twUhmTaBjTWGMasyFzfywJo21WVZi2hBFVVgrthwNErqxLqWHhC6E8zKuvZ6bzYsX",
  "key24": "5e5KxpepvcbTPFWuMrMQGYUdxeCsSYLhxEEN4SdugGqr5b3eBVFDxt4j964camnNAwC2jHuPpFxBP5spvmoDYBiK",
  "key25": "2RG4DoqBwYnjxFW8Shiw4YS4WGiRrndjSp8ytpypZHJQw6cMrJsAh93BeU9Xrnm5CYGDMVccz5r1kybUyqw2JaNN",
  "key26": "41taiJeAhsA6Kpq7WwU1brJXqsz7F8XjkXVdBhThmJvak1mQKXMyNAkPiB8JV3NJvcn46qxXMsCXjsU8meH1rCoT",
  "key27": "Q8HygZJUygiGNpyv9wBGAAYGBpsQBEdSDbXGRDVUzDa86UyJNhMk32tZw7oPoRWX2QS66v7taFZZQVvb7uLcLjF",
  "key28": "3KbZ44SjSDadepRnVWe2nePHYRjn5fJG3hpcA6dF2XvWmS57yynS3BYTWMkaBdqakqUkxVsRQKpHy5kCjKpEGrBF",
  "key29": "5R3X88eED4GGMsUjxz9EUExw64LgMrdYksvPGRWkhfWJnwYndjDTF9KExWWUtKCtHBFhFM5YnrLQ2MzLAmiqLWSx",
  "key30": "61jjSMunhek3U9hz2E7cTr8pK46jvkSMurGV6sa1j2afNyZTna7RRFj5nKYnVkzHE72j9S5uNBAQYUoyMexh52dz",
  "key31": "29XqaVUKZr26myoi4R8DPZnU4KUdMPoedyaWfSjLbbT9Dopa1MQ7LDUWVJrQdhsWb2fnZSaxhrd4HGE3jg65yco6",
  "key32": "9Tz4wqVUjCu1oqZmrz4ZEM2hdJhktbxyyNHmAZdC5b96oTDPS24y8E8eCBfF3UUQvVr6LduFYRbfCnPLdo928Bj",
  "key33": "3pAY1Mf2cHzpDSV9dKihCPdKwYSuKxHCb7RpYbKvUTBGBnbWgLHz982WCvpnjCyPjUY95fqavQiXpPEWbvbpLffN",
  "key34": "5xv3hu6PHLngp6iuA64Uoihq38Efe9kuJUoJD5t1cVkHAQzfQVxAJkSvqbaKqCnPPPtM74wvhrn7ibYBeB6VsE2e"
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
