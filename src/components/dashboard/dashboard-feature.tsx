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
    "5fAdDvxfkKeTDDWFQKtgXw3CdFHMxFUbSX438FRwuLgjdRGMvBFUEr3wZDqwVr714LPgs5vhZD291b1DHQNYcsEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jQ24exKgbn9dPXX7KjiiXqYLTKMTPf8yRryj9w4V2xbjLZ97oztkh8vVHd1pQ1KXwnbJgHByW9vcDmckx9qFbK4",
  "key1": "RVuXoMEBvfeCQXMmnGGsZtCXEcoykSC6BjnkvZKuLVD1eiRohKS3qMHpHApedf7WW3naU5m8trPMqspeCLsyt9W",
  "key2": "24K88SsTGgec9h1jTdSEbGgxtYdgcinsMPC9sW2ii8HzjunQCJMwUnSMevpRummhB9ubFWd8ebUjU3VA17svYFdD",
  "key3": "2YmAC1uMTbQafaxyFXJxm1pbDTAFA468WZg2Ms11PsmmhbGHcf6Wom1yvZUdmYRfFJ1nGbbx4cXfzvm7tSE5UFye",
  "key4": "3ZTf3AzE472tCG8GaCwMTazJp4TnkQ1C27UqP2VJHLCHcDx5GW7phoUzmRQZpCA8M8KKJDDiRJbtaWPmfBF1vQPY",
  "key5": "3AZRNMj2Bg424fDt5Y2ykQhufa4NUg9kyR6GFjtyEEF3jxk6tRSKdPSJyFFxH3rt5i3xJfZpgqmViKQqCknkMfN5",
  "key6": "2VGrfLsQWwYdd6Tg2F3dFyYHbzT2a6WE7JtVDht3zxKx57GyyjaczEJpyPbcAMVbzPTZxb4cvmhF9fLDC36odo7R",
  "key7": "3CBkM2JLjbCasVAbTrXr4mpDMpHgXALMLJquWZeqiSWHCtCRYwzEYvTcRuBzrgcZQr5ouyEZMLy8S7YhEhgrhvhi",
  "key8": "4gfTb4gQDNWP27ByH58ravYZ7PfnJMPXKGxBhumvLANum6vSjR88Ahk5KH9NL1L1eNg4c1PsZJSjdj8V6JwsiQso",
  "key9": "3iuoxmJvSPFdtWejHxBSgjEeTKoUXDktXsoKYoUYtvxr9ddQc7vPmbGFUL89urNF1jZrMa6svcBasCxzwjnCU4wd",
  "key10": "Xo3LejwULmgfR95vDUtE5rsSQBSv16tLuRiMyVnm8JrRpCbRKL36SQRFBepnawvk9PGakRfPWzhXqgckL1BjHz8",
  "key11": "NkNpW9pFoRMcWm1unJCNoq7vCNJHAxAAUsoP6pB59RMWjAhEb8qtKUauMocAxeDoYEcbfDCW2otkJwX98w3HFjN",
  "key12": "3eWo8AZRQtRFrhwrWjBXQjvA2vR1sFbmbQEjsSYMAVGtivFpeo5C7v3aSYLoidwGHMcgzDY2LwVF6dK1UtPFDjYw",
  "key13": "59q7GD5qQyHPqzqy9kzKKAfXVs7Lcdhyk3RtPoruMz8Fc7V7L3FymBThZsXVVCg9nUvUEVdGmRoiwWNnUyPgQEBT",
  "key14": "MfuaRDFz1uzCCkNwASCviSZm3LqAwniVWAmYShHz3ftVAAXw4LY8S7LJqxXEnZrf5wigiBPUiL5vsvmUscJUQon",
  "key15": "4FgB27NXzyTpjEagRq8VW3wYntAMStxs9JiKTUotvy2uo5hF97cAK3Bm6RsTHgsxeN3axgKVw2H6h4jgbPhB5Udf",
  "key16": "3Co6v4VpLTGv42226ArHTmMEvWmqGbanvU6q8rhhob41ELQ9G9mSVJ2v2Krbu63hNC4kNWKbwjFjj5ey4ccccQuj",
  "key17": "4AmBdDuHJaVuPaiPYpNs7zoPqWnGbXyZqTgvJo8LnznvpL7aWuVWmvjJGRNXnHXZxDC3gT4LtCHW1QF6Jth8iEyD",
  "key18": "mAhMmNb2cBJARSekhK8Qx8NBPceL32mAGMHaXBkSKxPhYANsegWSaMVETLmM49ZgLnMEmMZyHKpi7vPWFTDRpF3",
  "key19": "3wzEt3rWHY8jroRoFGZmxkeAPS1eCvCTPUEfx15Vac1wkWPjtQyuDEb3nipUyejr85i9TYy4ZNtturJiqbJi1Bnu",
  "key20": "F2w4xS4qgpzFi7DycqWqehZHtvKnAr88wADK9xsFYgVKYtYnYDhsJ2RpJn2bf154Pm1MRuea5Zi87XeFTW5UW8s",
  "key21": "3TUdTg143t8u8YbeVz4BNafsvYQirZ4x1LCG4CLjQ5Xx1w3BZZXTLQhrZgxhwSYopgBt14F8LVnxDRh7Jkujcyim",
  "key22": "5tAuDiDF54ds2vkTDMFigRJsU1ogMs9QG2hukm5C2smU9vjcZBXuiB4TeHY1HDWCFxcF5UBbEm1xPqmb22vPwgtF",
  "key23": "53EUdrkaAvj5wexq1ZE2sgGnGnn5xynfDyaBkB8s3dVEYnSgb9zhEAZS9cHKkKGMSwYV28WuKAcpmViz7tdKLMrE",
  "key24": "5dPevnkggbb6CbUeQWdTz2LXhvqWDdUzVH4sFY9rA1Fh9rmGEDvBZsrrQkhLsYtfDFVV2xiaN5XLvwYkgL3pfzBE",
  "key25": "52ciEVzvSDg1YsBC2K4VoP98Yycxz13nFhVf3tt2euuiTdVp9hoFGnujsLQoNkji8mvdfFynApBkdNBWGJaX4fRg",
  "key26": "4aUenYyyAVA6H5xgsY1po5ni29LmiejDvFohGjCV9NuLqXfxRYqTtE2a7mnV8xNMDzMCEiv84x1Zf5mCp6EVc1gj",
  "key27": "JZtCKiYWBXo6tZjNCA8P7GBPLpvCSHWzxNPm3hYN1nPWCkqtmprfNqWkndqsmwAYBKH6iLGLYSAJKrXLz8heW5Z",
  "key28": "3UhXX8YxwHprHXnDsFF1GfTaM9nKENCMxZw3a6BwAEbiQFFAnj72DVJ1LM48J8jt7XKt1RcLVy6QYLHKHxb3Rqah",
  "key29": "3FJwk2i8iVFErqLrmpQD4rdvxM59R2HcWgvVvMVP5zYnv93taSE3QzS4ypaD4EzLS9FWEVL3bFZztjr7uPqU3GpM",
  "key30": "vFy1wAhKR928EQXPXErMLUrGGyzdqcyQmxH3xtzsS7itkfnmwrJcW8tBdPJ1hZ6KMvbNeJv8iyd7iB3SUnVXFf5",
  "key31": "ech6s5j1Fbj3LfseESMWT8Euvu2Xn2gGaM36WMTA2wH2N1Cc1Jr2CciewC4xdj1QK7hWufBj7QFasF8N1a3i7Av",
  "key32": "4JXB2vWW1SpRus1S8DGKmBH7kWRwY97vdS3jbLNPep9SdZ5VQQSrcxZXmGmmndA4VVKHurAnF41EwzcyYSt4y3jt",
  "key33": "4xrb9Przs5JWfJRe95wWrWbcfRRdagbycn5mUigsHLx8tpWC2rCCHeyvyHJSDP6V9dtRfZMB6Hp4Bc3Gp3iF1SJz",
  "key34": "RRLaYPccD4aSK4Qg15q2KB5yC4ftuLJgnjUFF5cHMY6Hniru4t9hSHoXN6WS7wpcz9k3g2Xkj1EZFZs1EcM1DgY",
  "key35": "5w5rJ6FhJwM7JEU962te4gWBFPk9SJ4QoXNo3bnXnLNFgQzw7aUrWGc24b8xTpxn3EZ3Xbpyvrk6pu8JnaoC3Bta",
  "key36": "5j7KWFA6Rev9N9nm5BDJFpr9Z2neWrDppEMjdzC4jep1dE3NkApeuC1XFUWDCG3gsG72ZgHnQGooYcQcasuFCDZr",
  "key37": "56EbM5B4reP9YZrJMBZSy6cT4AbLmXT2jq6K7Z6LVuruahmJ7TMgye4jzQgz28zwfUZPNNyURbwyCh6tg7DZL7Cn",
  "key38": "2eQQfGovSM4PsS695aQLho333F5Hby3NbZBQjpTuFpsy8AqYiv6KArfCF7M6diZ8U9MbodLyg8QV6o9tnfzc4fYo",
  "key39": "35HYD5thcn646rMrGRKrqKRqqNEfmdXjZMoFhGCoRmyhxyFaktpcBcVcSkGZ5rnDLDZyRqySVygVRcsgcfb6WWZ4",
  "key40": "3VqefJHh8RyCEB1UQN7yVxnLvn9p9kD4Mo72CsQChohZ5esqTvCgfEAfmTnLxx58qV13aTBEAwzpcL8t43BpQvzQ",
  "key41": "2NjznGhpmf1WS61j7YhvTKbXWaDJnVQwa2R9Embop2YsRoSJqnGLdijrktExQmXvNyaodqf4ssFJ9JBM65c5AAt1",
  "key42": "3AiZBsn4YarCKEBNoNcxyzRZHK2rzuaFhHpuoXuJ6CKsN5VexfScRJKwVpFVMgkwSCARGZJN56o9tRR8TxVQEvAc",
  "key43": "26S8wXHuEjScywAMXTEi91xBDL7L9ayrkJwPR5wLJPUwLHkj4pZdjp5sQ3kv9ACNj7H2dM27XGk2QDrec77wtDCF",
  "key44": "3gYUNHmxkrZhxwDMDqBTwwftmRz4V85EZj3nKrJUcCvwidwwGMnpoR9TiZWyMX7xDA3e3SctN9ELVa8K6NM8jhAg"
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
