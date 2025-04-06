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
    "krk9AstLX3AH15wFemkgYvMkgxEwMSvgwRtU4HSShBS5RiSCVw9x1N2dGfTrDQKd9pq5PLYV9Jx6RLFJE8Pz1RG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GXg4zSD9F2K1t5v5SknmqbhiigGP4Umys142hWchSmhLWKv1r7Q5iiPxJBRJKeRt4x4qhRtok6UkAUdXHKhFvJ1",
  "key1": "2SB8RdBFwMgpVBVWJKnNYB6CpWE2wbUgzbs1MGNHqf1vB5ZcPhHmzwDapLoEozwzKjQPnohHWwegw5G9VEzPAVsp",
  "key2": "3BvaDYggnRhmiBtMyaPbaFoDhmTjL3xhKiBt1d4T4fb5P89Qxbz1kiHbYpL44faZyuzYhkustrXjsccM4RZR6YQk",
  "key3": "2TY1s98Sm7RRuaftvRQuLVE5mw98dM8v5W5Vwp76nzuA9brJzRiJVhp2go3Bsm2fDE2MaZz7TmKMHDUefz8hAYqp",
  "key4": "5G8NmGXDpc9mcJa8ChAthmxms66EgzhNhbsLbwkMWNpAH6wghnhzT3z3kpnuHRWC9VnboKboLpAPUZtmpWjgUTdD",
  "key5": "2NFPC5b7A2xkmfFG1nRLpSBPnxzQj6odmrKMJLs972kJ7CyzDWESSwdpqb3KaAvTPEree5rjSHRRTESjkuYptycs",
  "key6": "24izGK6H3EogDsgJFXoyELSYBZg7jJjoskvRxpLTZZQU9qVRZFKA7dNAmP1h9wKzr4yE5hzJXbTZp3t5jShak2Y2",
  "key7": "3ESefirt8pGikpo5iCQfpQPhApMc1jHen6tpw8tsG3chvZTr2d2dng7SexLSrr7dDN6WAUxUyDrh4yZ7VjCSoxfD",
  "key8": "3V87TwFqnaGYxNTpWhAnxKTgWwdEPEe9sBh8QchRmZVvx3aacy3bX5W32HaDHXDge4tujXqW38gP2jTtM7uPBWqb",
  "key9": "5QSCgvoE2o1isHknt8SRhoQZjnYQ55gMP5U3aUpsxFFcUrynT5FSdi2SyUjGTXQsBtqTAtHVnxBjUYRwawCwYuQP",
  "key10": "4Va9FENwDX5PbjoPBGM6jv3LQGQzcaxHLjLhwKjh8bfzN4JzYDYobfoHekq1AWrZcpcrVvvxKySnGuzmyJ9PrYSU",
  "key11": "5SccUzSYtiTQwAjTZiLRKsxU91Crw5wDFLrqVAVy6F31vMRqxz2nyoJZ8KmBJbkYeSTh8QSXfjB5mrbEoyXfQBV7",
  "key12": "2G9HyQymJQboq69Cbw2KJu9VQbLhTSJSd3yLfhUzrpxVeF2e4NQhgAqf84TUGA2hGdi3kq4ivYM76mCW3vu2akXv",
  "key13": "WQ4cgpPkT4v5bmxeqnYn9B88Q3sQ2h9xyCk8vZNpqyW2b7bkay7D2wMgmftVVRWFM4JL8vB1m424p7yZnERGhdD",
  "key14": "4UEsfw92D1n5nNmzEyuZRWrWUJc1ViEcs9yytu7CXT9Pjm2zSqHg48jdRAR1keEobHdFeUjkBmFxpKdk8RAip7sM",
  "key15": "4uSyEUFoz8S8haa8FTwPsfUDxfuhGvVnqiWf2Y9CSFvKv3fksLwtCjyJq8AWnBMqhVfuN569BHqyzZcZQEdn8xJR",
  "key16": "2ZMBYJiiARn9bE1oDDkFC79KZCwKhxriauckGa6BKKTBgUZJXXkV3carGrTvopqre4fCsrNBTQ2qcst1ZQYw33ww",
  "key17": "Cn7gbKn9tM4BHb3tPDobwXUzhCbQsUCAPzpPk8Ek4CYwpDbvjrgmsUmaySbycRy53ojXpPgWoqnUEPXausffdAS",
  "key18": "3F8vZ3s54a2LmaJjAxCphodh3P1YJBkwRcfwgGSrFgJn6TcL69uxdCuHhHzqJrzwZHbjPcQnuHSCHWsdPNgqFcp9",
  "key19": "3Q5RgafhuKXnFmpTMxWH1QontnkGyoaWeuZAV4Rg6cjJesEvPeNTbqEv7KsAXB3zGmouorPVagzSpkBJFV26D16o",
  "key20": "24gjt3snaLVczMdZU7LR68wHz5dgBCv6CahCoiRbiuLGY8ZRcmWEJNEWCKQkTuLUKoTNwpM5MC6eRrrcYNJfyxQc",
  "key21": "4nBUBYvWQzvbYiGNek47gtz7gJMWW4eSwSf38Gw3wrvEWM4VCh9qtisvwCocDTZ7vtQMxuBNzguG7xAPVGNUnC1Y",
  "key22": "5YoHUbeeyGmwdr1khDmXmDPvNE7GoknLV8sLxpmChBZvqLqgjS5V8G89VoGgHfPPMpCgQ19cgkiKkrAaSB9S1snL",
  "key23": "5rbS2b376qmtVBhXp7U4LT4mvk2oExDcARsfM52puPLbwDESqXmXcjZCgL5oMw821pMG14WmaY1b7VmNX5V8mJkT",
  "key24": "L9kLNr9zctBKqfQwhBoGAaTqGTB4knrVEr1YyKTmBnQUxALEaLr4NjELVYb6YcFxUHVQbwTAkfSMM3mAuVTTka2",
  "key25": "3VWQsMX8sQxgKgmdhLc9RsitLAdN54Ck9wsscyrsGRXExPnPhXhnMXgrxFVi3Z3WUzkYKQUwXr7VZWFvLJr42ii7",
  "key26": "5ogSA7VPAwVMkYSQUpBFuEq3ZLfF2v571TBNqDjSVTgnSUqjw9P8XA3CeCFxZbYY63Np1cB3rZsJpWsB3Ve7bkK7",
  "key27": "2MJBQyHmjg3VAcSNraeL2kVby3qDsVqgRdxTL3BRCpyvyLMjDL47FdnxvFevZvw1iCzKXNXYyRSaG2La9qYTcA1g",
  "key28": "55EQEdQK3FJPsLpVLXGZts6G6ix6yJc5VwXh4MfMQCAW3ryMb8jFVeV2jGppRjXwM4zjNqUvUX94HhTiFPtNiHcv",
  "key29": "5tW64SZz8Asb2JX3k9jULC8DTvYpwSGnqN839WPQAGJydrgWh485styrmnpR5TN8SgMv5vc76uGKA8AC5ZrtVYDF",
  "key30": "2CWTQoAgz828oNSnxDAWpiAhexHcmNqFUFtKw5MXj98LfUb3Am681DDMurvVBu3YFn2DxvNDG3QhQHbZ2LCEqrL9",
  "key31": "2hujU6d8J5PdHop2RXFsfXXzR3gP1Kmka7mq4Ns8jMgN3zJVq1sGd7VtK3QWMKYzr635rnWw6drena9tqgiPf1v5",
  "key32": "4bmkcYYKb2xXTWGWJYHmiRJkJempTe6LET85tXFBevmnqoTepCFjc458tKPmoSyqqBhEnrEyEu4Xrc9smaFUQRS4",
  "key33": "C6pyT5SuUXSyMLeYfrojzfVTQfT5zaF4qf6Vyg7Pck7eZDi3sowizufYMtkST6ZoMiLAv4gFZe5dQtuA4MoysuP",
  "key34": "3kSmGa5q1q8sSgkan1xBKrdaN3KqYLHVVGtJDxpXLMjN8xtzSraNFtSXeoJrakEAu2nPkxZyw8qjZViyhtqCsQFK",
  "key35": "5bSvTR51QS5z4WLwu63N5G47RtPsRkovFV1YBF1fLNPUjgoSDw8jbDdV64GzM2sSrghnpJWjxrmxtcpiZPVARxZe",
  "key36": "3SF1RC2HaqR25FbPzQkmE76aUUPHXpdPfZkU3ssbhJjGugE3s5CGo4Ktgmhvx9HCNfCVKzDubx8XuNbDNhoMT6J2",
  "key37": "33XFA19qoMN5LzCRurY4bEgF7HMNCxmb4M93kS1oB5KMYB9USFpVDTh2n6KH71xP5CJRw1hPfqi8MFn1rGmYEMDb"
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
