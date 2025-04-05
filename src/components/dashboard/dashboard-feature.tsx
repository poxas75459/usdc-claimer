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
    "3JydHgjSE4BSz8e1abDAWZuosyMxn1fkK1Fxt1ifareShFmnYhKp7zwmDki7K5fF5aXb8RyH5Gz6JydCDWWbrmKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yKYasnr53pCuHN9iEe3V4ZrYpLRkohPipK8QYrWXQTQpucPFXTXWEQkwWgVc51XUMYLzRoEeAviNvt71vs8AA3r",
  "key1": "5dywM4rVwo3q1Y2ovA6DwFpJedr7EZHLnTyprzd8CZkn5THiwq9Dpequkhq5meqsyTPgaTUMfEF3dFCJfUSVUBTf",
  "key2": "KYbSxgEQfnhb7YLmd72oDPaptxwGwtRn5L8vCLai8nmqRZpHxfPRNERaKkHKrFEFnxb6DLgByKHetiSno44LmZF",
  "key3": "2KGDRtpaSn3YsappLWs5z1CnnT6gSgUaqNHJdktrmmG3NFQPBvc8SUWzQshQcVS4T4wex4sNi3dc5MPnNo4a2kTD",
  "key4": "31kjPg1VvCMy1yMDRPcdKVR2AJReohK2sZ2UdJR92q7ah1d1nXrocYHP3GcRqioqe3vikZneejmmQCKddTemfAD4",
  "key5": "4ph7pnVVoMaRTJYKoyQAqReuacRcEVS4eYRDFTnSCNvo48piSxrXY8RhdQrrg6fM47awYfLnvvoE8ye1PF3HPGYB",
  "key6": "4cmnx9vuwZ2LcMLqNu7p25ZzALG1uVAi8yXDd5vK6P2cuSvHr8QW89LVZJwgPwERcEoLJznei4SuAe9yM1vLVFbD",
  "key7": "4D8FkvU54zPPP5dEEKMeaUETFcJXFc1EwiU3DoZTiDKYaoUh4KneJKsvv99t8Z1xKaq9ATLEbbQRsmpNCCcFFjpn",
  "key8": "4w137inaSKVbLnUS2sYcK6YgCiYFhJrpwvUaaoLiY4uRRiHdsJszVZZpakiokNjhMr3YJehvNTHNH8a128fp7NMT",
  "key9": "2ikaggjuaSTLXpbYPpEMagwazcQakjzqHfMHcvjkRMeWFi24TRZTkfCJ6EsZUKXXUxXp7qVugFf9QzRazDqLoSqL",
  "key10": "36aCV8wR63AKGSBchNP1C6ozzzEpkyoEPzsGHtMRbHkV7uV6qJ9yQzNkbBcNgt7iQuquLjskgfdKfzaE7jMwC6jx",
  "key11": "2nHYczM1LYKM29MSXVrH5ttit3qhKgX4BY7C7CoMqubt7XJTEsW7LiZfYos8eSGr1G3aU3M9pxAbuu9xGHcCzNtZ",
  "key12": "1H7sHwbBUjPdkWZx6E6Him9yzLUHsn8SDT6rZxYPxg8ug5HU5gZ7nfiuqRmRi5fQ3UZPktbeFPRYy7cbpSZgqHG",
  "key13": "2mSuTe4yUbx7ZiivXmkDGzyvuN4PU82c9pVVo78L7BVy46gK4BN5devrKLRkct9LxR8bKEmh4ynMRdcZTmkvXNmG",
  "key14": "4TWAAgmock84oENLLQhUzsaZZqpBngnqnjB6GLF7WrExGVdQrDP48Te7ae99KVJf2hcaoienhXkkWg3ENaCqPdkc",
  "key15": "u4py4wbm3ctFnFwCkE78YRj7ekq1JRmDhqQruhQtDnfFoKYR3ytP3XrDrrXGw4Tjk9EWj2h6y6H6MdAvhyyi8Ex",
  "key16": "4sYwHsaBZe6jCPnc99E5cb7z9QpdFYgMhbwWJnaqEsQzCZmxWGiLzQVVQbgtMYNiWicM4JeFtAToVczwZ4LJ8KJp",
  "key17": "3oUCB4qRRMEK917qS1chrGWDCwZEExpUE12CR2CT9aBbeAkMTqmggk94JGxuatCeWcrcen86hdubNECY1JWu4kBn",
  "key18": "PqH98xM7rSV9n9HBKL8hWEveZKFgHHYBXVGxKqa4sNSF4kWrdyG1x1kF6gW9SdmdDJ3Lwp4ZDHjZYaNs3huhnhj",
  "key19": "2svEJomnK88qKJxV46VjH6KNzLVumjisgLApFTrAFdJ1A4CbvCwyAjnB4KZFVtjAsvsPffqvNBmiXq9MPGzZLMiK",
  "key20": "39G1WJj1HhoEzWGYnhdHfmg4jBC4MtzbWMeum2pE6vJriRTTwNePR2u1QC4iCcFmMzvo2NXxx3D89vYUUCZjs8zt",
  "key21": "LLMB2dYtkM9qG3RJYgBrssWHCYAupP794dUSdMtxHmLdjiNmhpj1cqC3TyrhcpVBfCpdK2xBVBZ5Ww9oSLAmy8C",
  "key22": "fhfvDGSY2Abe7iU5kYgxnwKFx8MtdT2F52NeLJsPTzeTNUaBrfyQ6XcPtknCEEFybm5FFFC5xWMV47qKcXdWXEE",
  "key23": "53CmxaQfTeFrg1JdUoMRbkh1EzJrkrrt5ZfYq544sjCkebqzYc8zmz3os399duQ7BHoYpRkaRLGkApiz6DE2Ri3g",
  "key24": "5HdRQJQdzNM1P2ZWN2fzTibXU2ngrRzrX4oSNyZLzzQdt1aphPFCjsBgyaJd67qWSo37ct2CL2cPafEdpbYeFqLN",
  "key25": "iazpfkhtNA6KnuYv8n8jrCiGFuTwGdMrNn8y9g6hAM9PJmWttCKp27ZfSndeRHgsEjsDQDsVw8NQMJXFhkhgz69",
  "key26": "KfHyuCVKKJGUr2B2h394KUn7K9cZoTTxVLS2nLnreEcLzncMF7HNvDy8JuuGhb9DnMnve3XbwFt6rh4Xnwu6Hod",
  "key27": "nGD5e3JJ1J57TtAwj9fzFvsYdGngx7zpd1uD93ewszG5hqEEQcDt6eV9h5q79QS2HCNCBwsynmtcXCiABQZeCeD",
  "key28": "5Mq1rdx2AgrboxXXW74motv95Shd4xQJW4t8ctNynKkiJZgeogaCZ34H3aPWDrrTh7hqaKqD6p5KdPBBq5Y8jqGJ",
  "key29": "kZHKr9MPH113KXtUqDbNy9N29qUTWeVxhTc5CcGhssoyCuaGAQy3LJPpEZ5BXMPxVbM8Lpp9meDmJ6Zo1gniUpa",
  "key30": "2QQ8UBxPkSoZk9jXg4cdZkkwVHJWr5Dpf7tHF7Si3Vhugz4PnNkF3nfLs6UbiBy3DpVEC15m72FXwFNHRMnJD86z",
  "key31": "4FqKgb4d6EXhzQNW7j6WZS8smYzmbndRD2R7tcTUk2PZSvmEAKropULv9wfUUwXXaKrSVKhkhUtWULGz4GBjptKS",
  "key32": "3ufDiL1FELu61xjjLP5DSnyDovE8LbcgTraVTZKnsAVQsJifQm4Nh83uLifdrfyxnUB25aCEvzBbDJ8tgYv4ewKN",
  "key33": "KtuBnaWp3m6ctjaU1eSLz9zJ5w88nnJs2u7KduNvStaGpfh65EaxEpwsTNXGCJptoNpiDBe6FtdaTNKMD7pDYUc",
  "key34": "acyktCbCJqbA3YVsBVLaJxy2DGEYBjhRMuogdLWh3fVsPaVT4doC9B4L29DmockcHomKthTn61orJHKQiSzNaiB",
  "key35": "41PTXGY7J2HVrf3hnn5muxx3Y8gRnYYX5gQBndQHePW5BTzCfRpyq9E64RPNDRPL2KwEhxFZuAiQtg93Cy4cXtdV",
  "key36": "yECnZXtMeJ13joZQkkmV3JdPP7H3KGgtzS3GNcuR9Z2tSMbQ6QupxoQLKr8naW3y61UfeByvXqGR665VHsQADVv"
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
