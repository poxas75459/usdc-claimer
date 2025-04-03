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
    "BBPzBUy1C966qcMGfiZUbntmLs1Y2W2xpvyFBZJT9WHepKv2YK2Ssk8UPxopEb8uQq1eAuka2Gfq9tHVoZQModS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TaL33LPEMKLZUsFQXyFMgbk8qXGS2jSmUwZyBxctxYwoUw2VUh3XPLe36XxZ5cDaKtpro1i5SxG4tSYon48JKAq",
  "key1": "2aMTUnCGeU2DRonKNTUopUeAtpayw3b8nCfjBbhsxboaaFJyLXLY2H4q13vfTM32uBJibSXTvsW1YHLTgN5To5vU",
  "key2": "2Y8FzJ1QKx97zuRmGvQvQZCQ5c48Kv1CAcurUHhCBwdjNLZQEdVJJ4MbQ6f27CZzf4dEjY18u24bNtGyMVZiiKRi",
  "key3": "Gt4Wm33YKtzr244P5PVn4fJNmPh3XNrFLUPULFXTy7Jgn6ZWvYissxhMDbVtDyvyACtgsKStcR5R9yq7PPny2Fv",
  "key4": "16MTsLeSvybT9aXHFMBAZdBmQFRjEXwnm2RaidBgdesRDCMoSnPXEftpQZU3eVzGfmVwnUqFU1gb6kGDNMkYtCb",
  "key5": "vvoF9iXZ3MUZUcvvDsHqkqrqumkzoFoP7pVHcvN9B7s3zq8vwYAr3xr3RAF6KP4gwHhWxEVfhoabphuFE8FLa1K",
  "key6": "5nhtsq6drJYgtUg7kLtRH6JoG7UJS2zPeFFXvQKoteXcFDoUrJgfBpB1y6dXfn6hJoSSLyrjwDy4HcQDwcohnrz5",
  "key7": "2dXWCKSAxM9qbRPXc4oPwt4ea54ztD3EVYeP9RF9SQmgAQkgG5Gb9appdS21bg57RNu8cEVnxFwDUgoqD6zvyE79",
  "key8": "2RYojodDdrTEx4zairZGr41ajpmdkX1ZnuFrGqTtjtF59P9V7RtzYYkuKVNdnWzpfpKfKG9GsUReDDZrUAKezQ3H",
  "key9": "3PEYNxkq1DE4A8nmvD7o1eJ3p9yyhvYmDzBUXea7jzqV52nDVhfcR1nspcRo4f9t7k888ec5HfDPkzAHSuEWURVY",
  "key10": "4iAe9RAWxuJ1jdfUuZfrcbnqAXDKqSWwNYeMfaFAmAWkRj3tpXy7kj3dJccw3BViLrJPMJNvFseaoBKWG52b7BSB",
  "key11": "33NCyGfQvxvFDzENsesMo1mhyzGXwaL9oRzRdM4acQ1FzW1u51Z3tY1UHu83wCuC7DB9qXh9vn4JUQxPrMvvCDbP",
  "key12": "zd6GUFSymXQwfDSZ7tuBkECNqCUueWG4PGy4aXM6Wj2Ty8QnYo8mepqPSBcnsDPtQNBJQA5yNkAEiSPHudnXtKY",
  "key13": "hyaF3EMpq6iJUtUMdcCxjpiGhWi1nLbkftji6foXgc7k9nimVGpshe7NdSMWAS4EyjexCvK86fSFVtut8hg2W7o",
  "key14": "5braKxe3ZKi4FaP52BjarNKwTZVMnuodyxmcELJofjzyoYTgKVSNsodXk1efXCkykcC4g9nzVH9HhyrkdsEcZihE",
  "key15": "287NshEWp1xUYaZwTvqvupT1qEP7z4ZoL2Dhpr62GxSCMJNydSzyDwoctt8TQpmTiD3aQuBSevyKXBaW9bXi4uyF",
  "key16": "4cw1GPiaMCJQNh1Nr7LS1GBs8S96MjfAqfgru5eRiH8m5uXTzxVG9CxY4FoeTC8YKTgZtpoSYDeHJFhDV12WPhap",
  "key17": "2EPVgpEtmsHKPPBdWHFRVFc2uc2bXh46k22G5pTV3EqMcxxsVMaFpPhYGATBPqFTfTGQw427NQimDQVS3Jv3j6av",
  "key18": "GUAD5xUYRMq69FaV5rhXoUVLdaDGH7rXcDFy9rNkfSwYtaEywnujVkJBPf1Qe9ScMaZiewY8QvYhJrdjVdULBHm",
  "key19": "5c8fX3d7hQiCqxeBFL4YEvpeKGN9GHv81VguqfJhrkakNrFmxQWWtNrgxFEQrEekyrzctyy8Lx9rfA2s3qHj4iNu",
  "key20": "4KgXm9NBn5BM7rpdnp4Ae6oUJg36DSdSiko588XMKL9EHEtMYBe19zu9cc49mMYeNyDeBTYt6iZ2qDqgzRktdSTg",
  "key21": "5bSzeLcQ6nUwubvh8uJY9yLDVXv3sa3Cm3sJQbqpAsHaqH3z2sEWYPmNrY4s4r8eRFH1iFYBL6kQrxF1q1VRuzDk",
  "key22": "2apCRrCgTM7HbLxXeGLEcmLhaF8GJaykQRsGZC2Kk7147KFmTXApoGY1tAPa9ZGdi79VHPSPpgPRFR8yCqvbhhZc",
  "key23": "41JFWkNNjiDDi1WcHL9sq8ikh9YpB1sXBhjtMrQEnH6YcTjdo4UscAW895omsRzDTHZcZxVTypYzYm7WmdctuS7A",
  "key24": "4NTGqLBQAsZVJvbp81n8s16iDSdzgEozxjmZiuKWqkSsGyV5jMxTEiv9YnhhcjtFRcRmPJRsc4A5zMKZJ6WidYdf",
  "key25": "3QkQa59j2dFQ2HnFhZvEMJ5HfBbmhgGpxqBdyfVNupfDbaN5LrpwEb5xCBHjzJ8eZkE9QPBK9db1WGRv8w1w6koz",
  "key26": "5gEXHbunk2H6GnU2ScbTqRnLgZMGefEcsx9cjCSCyz7CGMEV41GYwiU3fnASo7rNEZC3cZ96opD4wn6ZvYqwYhbA",
  "key27": "4PYCGnroqCanuonHB5mED4SxwDaSrgX4wKehu7bbAWs2BkQ3YXumeDZ6BdcRgvXC5UNCDSVrJtJEGUgZQGnAJmnV",
  "key28": "45sdSQ3yBe8fe8JRMduub4Z7tC3gmyn5PDixT3WDXk3F4kQzUGgXGUfrfymcU6UKsTJmLS9gdz9zRwUyuTGCP539",
  "key29": "5o92FTMMtCK9E8pWAai7YtVkcdofMKuRdoJv6Tu3x5VBFiJXdqqSwtomCrQLXNEKGonB1RjWaMS8MpoegbYLvtjV",
  "key30": "Q9arM85CxREJKAboa1KL6emS52r4rZ32dDVU8i9rdkvpqbUiLW3jwLdPDaN5iYQG5SJAH68FgKc5EP6xtgKeaBX",
  "key31": "23S4oBi5erQrmWaUSqFVDpq3AcA7iF4YYJ6dwYgQG1qm579iy4HtM5zEizT8HmfwezNFrZJ9A1TSvpFVjzHWuayN",
  "key32": "RTfrB93R59cksBp6C7aetcGQakh5wmdovWtDJBfM7nijoiGN9cy12n1E4rCgNk5TDNc7Z4fv5LPKaDZjikz8AxJ",
  "key33": "62pWpsX7webseYNZS3ooJ1PQPFyNLydurYgq6E5VxSb7ypWrU3FFXAVZdjRUUirpYSFYJN3wjHYJVZR1KYpj4WE6",
  "key34": "64CQrWKijJPNyzYvAyahsibUDrsUt65MUM9ScJPZgw5Nd7XLvjjNoCEQ5YUQPabNSMhNtPZk6dikYa8kz3u9NKpj",
  "key35": "38mqGXW6BokJxTTB993Dqt1CZL4n4fXme1hMwXoSJuT8scfh1bvvgh9Y6U7V9wgb7YGYpPaLBMTH9ieZyapTQQY9",
  "key36": "31Y3pmbtaToEzCz6kTe4p9zatTe4JgmgZSAc4Ce7SPN9Co7UphbgzQVJxtk5PAq4p3yRkSL2RrrFHfipMqP2RaJ4",
  "key37": "4pZA8dsAP8zkwvHSoC9VLuCa3iQUKoCcu5WCdfoLqR5p8quHoa2SkR8CvqzrtD9zpFriu372QNTC4PaFQ1dpXYYt",
  "key38": "R71YJ5NZdnLWgMdPBbpQoqzhXAYaVk2Q2nYKZEzaECa7P7QVrx2Sfa1wB4N4VRt5BKY2oE2eFLrk1bXnUNDC3WV",
  "key39": "4xiPBwDa9bHXoN1Kavgm4qspmMg6Yj5z8VwCVwDMbJdRM61vC4xJZx3G7GNeaDP2gB9akEA3tHQG2zdXTqisrDYW"
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
