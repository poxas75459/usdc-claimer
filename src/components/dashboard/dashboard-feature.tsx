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
    "3ADcEYjD6dUTZJzbHgjzmBALtjB9tZNvBJrteWLdTZwWAGvNJTh2iUqQSRdFbBergFK3su8G2PYnFCF3iHsMLPAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f97GhPDKyuaPZ1ewa92GGKkjg6d2hmSwtCPazJZawcnw7yqZQb1H88ot5kCDh7y7NPEGLGVY697e6ipfhqCgfCt",
  "key1": "41RrFCpMijJoajHg5ufAVkxqfsmm8Joyk5BGvyLcX8xfUSRFpvHSJVBTmHgwyAnntrw7wSztgTHfM6HYe7xdEWqH",
  "key2": "4q92GnMu1VVjrUDkUBXbuyTBk5hATweKfJEYLUTxMx3Jmn4sXnEzbcWCzDYa6YFpSWdaYLu7VQWZ6kXZQRZt5xiz",
  "key3": "3KmMT2mYmsNLqwC6vHzUMnKbBN3zoYwMPCc5f1Dg15FEFku11sE51SF2rNK2MMC5JAHMji8y44roDLu2wv8C2EX6",
  "key4": "5GYCPaGqEkVA1HGvzwXnzdRGm1ey9CU9DLLB5FULyEXZUVKbicc5yVwTG3UN7EGceShrqXbGJwyfqtAxwrAb9ez5",
  "key5": "3WFBYomTXTK5hqnPinJggXGcm7s93WdJGUk7ntd2mn4yobed8jqke2YdR1p7nSEDtq9TJXyQwLdVgEa5sn89iKrt",
  "key6": "4oSoaEABCTD66YJYb8em3pGTiYzJAMABV29jvHVGJfjXKbZJb25fmwXamLfQsE9M9NU1iQDayUnwejToKsF7MyET",
  "key7": "67kni1iuGGAcyHu6KdkbVBss4tWMQA19hmTBsRSSYsJTzNZwr7HBhBBKmto727H3ceN8HU5JZboPc6dLfgyhjaUL",
  "key8": "5wA2JyKsdxfgzpwyVssoj9Joww4Y6XmtaDuc2YAV4yfWRaqn5qFnVnbZVY7KnqYDYbabDdMKgrFcDJqn1Yv4no5d",
  "key9": "4JWzjpUED85KeN6ZLa9PHjhbjY1m24mzNmgHSDWAwBZ1dqYPv6iNaLK9wJigsgaEnBCiUEfQM1DgJCfRmLjFnxtt",
  "key10": "3atEgSA69jiiy99hbtxf5UtHm6JoMaSLo6kDpmwmhZbyZCKqPMGgs3YpjUBFPBnKTuVgxLRtaYtzLDjLNrTvS9DZ",
  "key11": "ZwkAevjuwRxzvSRuXCj6wR629ggvfbBjkmURB4ZBDDq2NCQaRgWfgCp1WeDtUDGkf5HrgicmPmF2ai1LjodFdvg",
  "key12": "2cwTH5STSTuYq3qTrSsiHzXBW3ZjKMpKTWstHZKemtxeqBC4EgR9efgS7uuxE2mNtgeq9DmttbyquGGFqb91sqjU",
  "key13": "2fv3be8xRPWvqMfB3yDDPubwyE3jzoCXuvnawfztbcQiCd6RzL2rnCEJzy7UayMGjkxk8bhYkgQ4mgcJ8fee6TRK",
  "key14": "33q241Av1YPwMxL7dRiat79G78bUVjXPKhbwpdviLvHgqLZLsFVQnF5QssWKRwNzZpfkDMsyD1wNoEnsY62raiEh",
  "key15": "4AGzJ8JbyMZcJ9PmQmfKMHUmi5BZJqB9BkbCtV2X9RiLfCJWJctzpvN9qmB3YFnCa2EfwbqPdWaASf1GZhCoUtaq",
  "key16": "25Q3EntAVhKysVCkQ9xAdesMyJ7LNdhCNPswvwovveScYTUPjDMXmbZbtp8nU2iqrCQV16zMrhV72x4wHiAwwXzw",
  "key17": "gNH1mXkJLraCpiareEf7rHjFvw1bRZkpJj8DsYrfErecBt4YEcQmvccRZNcgNeajCCCSEbBAf7qWmdDiRsEMhqG",
  "key18": "5ynF66BX2pTcixydbxJg2qXGhpFnbKd1h9pdR5jkA9WVspWRgwtzHFBnXBzCjZu1J9rJAHV2czDwRk8NespYDNGP",
  "key19": "59mg7Wp6x1LovmZxoTCcGzk9hwASo3hUScfv7q8jL7m9CcH5UMwuKnWtTq37emR1J5pR3ayYSrzeg5HY5QRoMC66",
  "key20": "UndqJo3rNEonyFyU3k2WWdq7YiG4secWFBEgC9WtaKkB5bHwzCcSXowWDR4o6no8cDC3frUGVnNvf2idzdvVPai",
  "key21": "3WFRZPziu2TWDsREPXZFspiQa2QGgoPQsssd6S2QbYSHRAfG6L5yBHP7w3gs63QRr9mN8mL7RVpi4BmxQ9Hwt2rN",
  "key22": "Lqg9r5L6isc3STZ3ZyjtW2ig9R5riWXoF5eN4wA1LJteYdwzTYchgU1pWugSvAfmN2xAHFLHXMH3RtAVsJeG3qe",
  "key23": "snsqzrBv9LaD6t2LThD87gyMTSYHtPdG62BZEKbu3TaG3o49EfVeMthYHTP442ggYoyW2swb9t9JLzwSCyeXnMf",
  "key24": "3YYeSD9wtgb7jFjmGqCUVhMW2Y9wwncn92S7wYRM5R14wnz5K4PEwYwWydn9RhiPmoDqN6VDCp623ZRwSbfVMpQ5",
  "key25": "43WMXay8FcxF3RyCNdYkd2R5BZZMrUAC3njN7dmzJ3diriTHSMkN4SM3TgF3RGAan8grwkGSo6PVv8Mg8Er74aEw",
  "key26": "4EDnTsU2q4t2JtYMeisc64yorbe54gX1uzPRUbWq3wa7RmLBWnAzvdZpXRe6L5PFh37eiLGYy8Pc1xmRSrarRuD6",
  "key27": "51vSw58iQX3RpMuwwX13HF2k4Awb5vA84tLVhV3U2WgeLQRPNmG2TmH73sK8yibb1XbhguvDMNnYXr7GpisL9M6D",
  "key28": "59GkVDgaws52d4t97kbcsK1hiuqhTX3HU4tbhYJee2twHvfkVhiNhEfYhjmT84Bk3iq9Ur7rjJCT9oiUhALrf3KQ",
  "key29": "3FD296EmeSjXWa14jLWyAQDVL27mEErMkkKCXieBeeyDXCgVpV5yZzVE4BqvzSNTXzWHwVfReninByspLzukErRs",
  "key30": "4TsQFk8CKK6PqaJPuq8LT1UVu2YurEwYYtgynhLWUZHG2KsUxx26wApwN7w9Dc3QbDyr1vC3seUtifFTHMRkMj5c",
  "key31": "3nj8iJyEM1eHio573nrR9PEJA7zwGaFFD5UJpWDBcWL4hwPk55aY8gkkaM3LKMAPGbXANVzqBAPXMsRGNc8XMrvW",
  "key32": "5Nh6KBfSjATF7Bv9o9DPMT1uofBvUWEddNBZbqU4yAQ6tQAgg4pn2CjfiEsmfBM6dxLfcSQYn697aqagxDUzshnW",
  "key33": "m7evcSudCQdzcCq4Cbgr6djYbSWqb2wqSfHCSgVgk3BaioBBFUFWaRNGntPLXu6FrRVZLbk1cv93p8xUsmYuSt5",
  "key34": "4Qy6isAx2kfqm6H3mUyV9rXJ2wvqJ83cwgYfDNUJxR7dH8natBgbnCv2DJNrYCpheoojup1mP3WTDVvFNcQqN8a6",
  "key35": "3sZT9jx8Pgos1f3E7JrCPZocms6Q4XpZdEoWWoL8ucWTXAUv6sQkiyVGrXWRdnmBdjP54iLxKnYrBqoD5kefCuVi",
  "key36": "4LhgAUDYgu8xPAjMmKtoYjhpnoVa3bWWqu2XBY5cgMR5BbV9YtZZCuNHWUgVDtybPzQG1jcwNWrnLxMCvLvRWRDh"
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
