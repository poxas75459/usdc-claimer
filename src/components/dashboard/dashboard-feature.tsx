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
    "4sb7R92uPWUNQYzXjZx29ZruxGq1QqUU8jYELX5ThpR4yye9isMizerg1U5nxXt4FoY2boPH2yNxiS3Xy35xSVnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eMTpFbHfvUPFApv1kf3qNYdpkyR9LJydFaozJGQ9JwqFUCZQL5dFdHkufxSknWKYPiWnPmzhDjUydmp5NgMFefp",
  "key1": "5kb9k4xwnEjodBtNpMpKgtpcN9nCToqLqdsC67gGUwxQUXpACWuJ8pjdFTAwbRbtpg38RLUcp4KJZNtax4CAftbK",
  "key2": "FrTcjTogKAzgJjzfCW9LcyvhUL9ewnYXuTCCMLV8P5mdkzAS69SDaXpg4P3r3PBcUq9X4YWb9ifHqfnsaafGkXB",
  "key3": "5dRmzsxVdB4SUVQ9tZ1UBgJvWfiJGvd2xd2UBZBXJ6hns16ZPVLfoS2FzJNXQXMFhauENmS4ZwAn9fjBZrdDEgJg",
  "key4": "4JBpbkCyU155YEZn2x4sYZmjnU3dUkTCgg3mGekGnPAL8opcsBL9i38afpTX3bA6woHQJYyP9YqngRxQUb4pEqwN",
  "key5": "2X7zNxjV7UhMbRaLJPLCMG4zehdX2jzuEG5XNT2zdyZpRgWbRo2pYjRKTawArzbNEKUMsfdr3L5j4R8T2ddVdUEs",
  "key6": "222iD4c1aKWGB7Cjwhhksg6Nivyi3MVhoCDWWdtJsyCxoH6RDuS8Y76N9msXkQJkXVUvChK3uhgMMzaxrKZPAUeC",
  "key7": "2bAcrwd1vkBM3GmuxUR2F1Kw86QVdDAymYZsMj6Ery6PQnkhJZBvppJXXesvcGxoAdGMGUNcDADaKd4q9LyiHyLr",
  "key8": "4DvYobodNeY24L87eiQPY3Bm25oPqrHHjDHRMoq1MB7THDpSB57iFwvb623RkrjZ4YdorN16eD5WhCpaL6g4uSUa",
  "key9": "4bo4fS83QvK5kAs1KuXQGf6tzpdmMa468H52GY1ayDQP1FERZ74ZPHJmv3UXgcVPDj4PQLX4YU7vmyH96NWR6vco",
  "key10": "368o5TDRuNKV2is1dFjVxTvLL41McJFf2UKUHio1vhLXxBWd3DAvfnL5MUqbB7dpCZjNT5mP4ypMUfU3Yt1sAfU3",
  "key11": "5JawoQnJWnpNWSW3SjaWc69QxzNwwLf4CXp6uAyna9SmyMuY7Z2SLxpuQR2X6GGtbV95zHaWRX3VSXc3dEF9hXJB",
  "key12": "2DaozzxbrkRrPSWs1a47oe8UN5EitxU6S97FYhZmiCvnysvYfKtookSwXT1KUjRntdq34J5uopQ6LdfrG6Vd9cGA",
  "key13": "5CCQq2MSJb7HhbuSQ2JNb9XLxgUuTviN1ARsYjusALAC113tkAQz5sQfEmoYRxayYtBv6cgX84gLeYDZTk6QYhhF",
  "key14": "2nECCnRYVQayY3FMYc5UYeHP3XzDyEd2jaG57Ci88FYrgjoY2Yubiw3hmZ9mG1Fj3kighv3jVd2LTX6giqmxM9gc",
  "key15": "2tzqb5kwbtEZivN8hoFL6C9nCnjJnzAy5DJ5hkyBhrLTHrdhv4wCgnZLATwejhtrLhxPioRTbyKBgPKXi3azKPCT",
  "key16": "4PHMUaPareuXJafo71hsRLDg4KVxVgvEhsuriB4UCDhKsffuarduHSirtnfaSQ2XkCPYfnQQAXnAszzBSfQKju1n",
  "key17": "2DW8iEgFA8Yq6nr1VxZZAutmwNR7urbRTT1XjNoeUgng6fsYfMnBWvsU2guuzmw28XqemaV4yeCqCqVpKK3f5Bqq",
  "key18": "5j9WaBfsL8DQ5dhGX5QsZ8bCXNPfcrdSatHA48k6eFimBDoLgNYEVuUmVw9YUsUEZ8YV7fFovJwASQsqvbRuMcYF",
  "key19": "5LnwKjv34evWrkophdHbvpgGXFTqDLZ9vJn4L71nQJLvXgXfDVAjhMJKRDPu5hwLuJ8sWgeMhExp7yPL2UFVvgA3",
  "key20": "5kREitviXZD2SDGXCBMZtjoNLPUyuxkopic9a7s1LZ22WRiDtqsK4zC6dnszsJGxQUkDLCBJJPKVbSMRbat5EeyU",
  "key21": "3uKcCPQkEe6LiozSvoLd1WhLfute8PdQUUVjhB5sMQGasKXopS5tCnYxLMYSxZLLYGJCgVjBug4LKTXz8TZ8cpxS",
  "key22": "29Vk28yivyC6RCByxA9n56PE2MYcEXbrDEkv8GRorJzajGGkYfC1GPfauuH7S6HjW2TmxfYyMnexJ7SMHgA5qvBr",
  "key23": "3t9BPCeKZeEiLLm4pfS5Xmze1ACFu5xyFZx9q6a2iSfxNGK756RRTuw89j9kbgVNMRnJyNG4mN5QmdmUAufuvu1L",
  "key24": "3gUDyLsBHNt6PMEhf1sg5sycmyHsKi8jATutkmuYyL5M9EGHXU9CoFxUDX88wBVaaLieu46TCabreb2DgxYyNEat",
  "key25": "4g4NfCX3UbBUvEmDXi8en3scw5Ukem2xp6ocgVek4CEhLrm4APNUjHQ4BdsKkkEz2yUx9XrjZ2sLKciJwpXcepR1",
  "key26": "5Ard9doynj5qhPR4ckGcUCvARi6fu98u7c7k3iT13scvBjrM27Vx2d1bjksZ4Zf2nxVRM2XfBdQWScFogR285Cfg",
  "key27": "5ce9jP2BXdUCcG4R8kHH5Yy9Rw7eWSSVNAQDVFye7PmCzhNdpJmzTxThNLdYE9AB2Nvn2Zh5FoBeGa3nF9yVUNan",
  "key28": "4rQ51s1EKftEQAUZkmC6cDtdErfkgEsQy918rZnu4bXeTncyYmtZXFYchbP3u3AT76GP2scBuBK8sRYkh55Bnxpt",
  "key29": "3h9xRnt3YntvyN2MuSa9KiaWSAgnZbjJ9agPrGedWm5UTz8Ed4pvgR6B8qXph4w512XwLsdgef8nP1wpT8GL1Rng",
  "key30": "3qmsFUrm2HZ45awokfnd6KauiFJ6xC4ENJMCu8DRLgksHYCYjbrcJrUvFz7SJ8z5yVyCyJ9bLCfXhTpun94HYnrp",
  "key31": "4iATF2zFT4Yj8wo38Ewbr58CJiM3EcNeJwySmvG8AaiVRHRx8LhXM14XbhLVt4h6nuSDUgxmUXbMJ1MYv4nnqNHe",
  "key32": "2wAeGdQpZ36NcZ4MDC6rxkyzicCxRdiUQTSCKtrYjwfd3eueDstNWPWNdYELizAqUUc4TtPHQfStXRTvwWj6Cwth",
  "key33": "iafswzKyHoUQ6uJwZ47Dr7qgEoQSHLQwbRdhxzgH19dj5mN1uiphQFPGGnAnxNhDWimwrdwCUh3jtURFRXbMVh7",
  "key34": "WJuxPqNxTNjyYG7GQAvJNmtz9tc2SXXWMqU1XrHSYXWygWjD5eKMwmdyiGQzctK5q3mX8B6oocV7CnLgz4JXcZf",
  "key35": "bfe4mYHfZHn9Y6CG7XaPwT4gpft13YZo4UT4xZSTK3SQkJ2URZdaejUUW6UWkrju4joAnDFp43mvEQ7GxyZN7Nq",
  "key36": "L214rRz3wgEHjNkvQVYZfdk9CiSMYDiGS7JprFYFRUgZa4xgN1Z16fApxkYrjL9nw6KKWxNQK6asynC2ETbFum6"
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
