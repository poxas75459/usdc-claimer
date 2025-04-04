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
    "3VAZmohpnBhJ9QAmd8wFMjdLqvEGgNUUzmo6381kNnpJuXBHwMP5DaKReuJW4dMVzbsKr4casf1FRJQvTjhuDrKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EwDuLeF6tsxS33Ju7kUbc9PKSmvDLbCrhZ5ByGrcLx8gYAQF7bExHVQ4ThRFasQ4mxjRPHwvLQNRvaK5eWnXgjq",
  "key1": "3UdBiHxn1nSGhqvWbkBroq6UBgMX5PUYR7qniDXoBXrRCvBWz66Gyy8dDZeyH8DHZkHTKwvwhMTmavRSD5AWBbmw",
  "key2": "TwCJC3YnAzN6CFYbWYVeutkvwYrrQ9s4EHvLtEVEeuE9D5nb6U1njruwdJzLvyBzJpki7Y2uXnWGcT6uv5z3WeY",
  "key3": "58Urg7p6gx5CQajXb9rq2rCyUdvMknkCupGt6qiUo9e3bBBmg2FENNBv4RsvZNzed5mfzCGpQVVTNcrQVrB8kGQL",
  "key4": "5wVvsv596h1s45BJfQyzsoAkSGt8RRC4aZWmGC8siHAnSh4eBsBdCvjftDb1hXTwENqjYsWav151C8VzKBbUneSt",
  "key5": "4R72hHAFUfGBDN5qbqVyEMPqAMPBub8A4VD5u5tcCRMgHqLbA1casqvAe6zsw4o3ghENHuiHKraAfFzqMometgxB",
  "key6": "US4X1WbDQtgwHxZz6Mcyc3yejYsEWizwMJQe8YRjrTdVF8NYEpvFiekcRL99PTcj5GSmBFvKPtvMG1FLYaQTmQ9",
  "key7": "5aaigiB57js6vo682UAXQEujLojBUSSw2ccPDfUNbdyuy1mumSLHBUdwsq6JyRHYVecFiA6EH2Ypvr2WvSaHKDRT",
  "key8": "66FXnaeCWh7tS6str8HQdfx8UCuMCsKHUUxpXzyCjQw5b9qYmoVwjFwduVLBtZNaGpWfHHcY3McaweKeng37gqD",
  "key9": "HmSNtACYT1QcPMcDJK3e1S4umLvriHjoyh1vocdvrny1oDUprwv62Ufvs6bmrEjDJmjzPbZZruDsz1LVwxCTD2Z",
  "key10": "3uKdCNVMGRQmuyDr569oCVjrqQFGJjCGJE7AbJv5cCLHXNrCowTCFjSCc5M91UUbcMpa3iUs1VCYY5ATfEq3yVL9",
  "key11": "3yoqG6XD8jUYBU1xqPGMSVB78FmT6pJhSMJrw1UfG9YESPxeTt6AWuGT5t65X55shjbVWrjutErgaME7dgbdMKns",
  "key12": "5hm626J41Q5ep4aL4jkSZH6RgFZFhffAHVTBCZMoifR62pfgwBc97vS5rmnUpPpUMsPNWPqkG4NuDnEGdxug2fzk",
  "key13": "2zcopGBySfu3L3QuSE7WSHBA4vewkd7ew4iCvw1TucHLfE5qKBi6kBFob8b2UmE7YmeknNoDMfG6gEjwLFBk6mDp",
  "key14": "2EbEnvQKX5ebVX8i29Nr8u1qhGWTaCiPWTRg4BXtWa8to5zXPHdS1Fdp9Lmr6QPcab9BWAWQMER6Ya91JF4aPFvV",
  "key15": "2d9LuUhUUToeG4AqCSMJXCUa1PYMyE7LHii625NpYVqCj2E3Ab7dVzfmfj15WR84zXxofqRZWWyJBcsBZSoWbfWc",
  "key16": "4RSCGzkFcdNTWH2jYtFpUPCsQAbB43FuakbkiXVWtkkiKEwXSTVxotiNSbQ6ZtttJgM978bx1zx7ojSzJPGNjAQH",
  "key17": "26nGHYn9wLF2zH8xFHYW8G4JR5WtXUysZueskUHe59V1W6Usfs2TPoM7wL67vWyGTbnLKrFNj3VDefhMnk8QnYqZ",
  "key18": "frodPxfwpq3A1tfWkZzD2tZNdQ2fymooUfaW5DcTHWrZDNzmR8nMLJRCqoG36F5Z2FAGarmxCzvMc9bUVr6gPos",
  "key19": "2qT9Zud6WWAWLzcMsLT566NJMqyCLdYQvT2sYgMwceaM178bR5Yf2CcZhcvNzyzkuDeJ9hM8urSaccMcnFwHwgx6",
  "key20": "cp6cUjMq5Ku8jWgdddBPGXa5TpsB1ftFNgYMdTt6zJnMFYsvdNcqg6ftsBYnZN5nJHFMmjqkZKic9BcPUahpbgA",
  "key21": "smTCRFiL2cvuUwvK33PP2xCLE8RcFh7auCr2i8kf4fSSv4nA5gMq6SjixCwjGSuKESsFZnF1Pk9k99ZbHQ8xMW8",
  "key22": "66v6U4K9grjVV7cZvyNWeBtEnLTaFrqVdCbt42XDmtEsrdfaChEWhkcWG21CSEozNjSFcWCzq3zx13gPDQ3v3YGE",
  "key23": "2ySzwHdSG6mBVjKN6fxaBfYuXZBq7ZcF9TxKwUCuAvpari7fUmGekvdEAr83QXoNVYJ1Xcrjr2iLeokvWzmBMRqr",
  "key24": "4HZrSX9mhytaQjpPCrxJkXjWJSz6fFhqqFzXdfp1f83Ee86XUhA6LrDeiLo3PbYhJVk831b3HyJ45SxBRnUHx7Tn",
  "key25": "4fnKR9CSBAtkbiGqBPTRUPfE27BiAdZ7eSduU88cZK1xWb2SeBEp2WyaqpeN3GFN2y65GoCbQGFXEYLeJ8H4Bk1m",
  "key26": "573PK9kfyKcs8MfJBosjPsX9LT5mFHAiNEtgvxWvUibU9isHNH7beXa7uw7ZP31KZ4PPTCcwncjR9fMwCEaLE1pr",
  "key27": "3KES8AgaYF1E22iCeRGkNm4LkinFUjPDoXo2aTjufeTvBGybFjQyie3yqfABCkn3J3LhZdjhJfG51NMh28sHQ4DR",
  "key28": "27sMN8nftoChwPNAesZFJc9vR72DA9D2GstM2u6tMzdrpXqXnnXDrU45Bpi3D4Ff5FGVQQHAuNAKGcr9GPBshme5",
  "key29": "4avTwUgeCgSmACkjvgbKy6eLN8kZhghY55RLoN6VcRHb58uDoZ5aS3zFhAPpStEiq1kDpD9yKaQsgjJM8M11Gi5q",
  "key30": "2DFJZYUC8d4qZetaU5FzdsEqG5gMN4ea5gG8icA5hKpjsomAw5kSDhVoZishc2XpbJPQAdKJ4u8fSZjAD9PXrRsB",
  "key31": "2KUH7SxWAK9np2zADJudPn9aQ5joEyWBFKJQqn7WGhz51bemh8yQ5srrTxRyC8m1Q59AdZDqouJXzTw2CyZsof9R",
  "key32": "NNWQEGP71iyEkATF9DdWiiZ8NmvCnGXAG4hFX3hwzzp5eLFCDx64t3utZkEaio5HjZCXXnk1xcy7aRFgUZEDegZ",
  "key33": "jrZb4rh432bCsi5sSMHq1BxSJaD5pmdt9YrZFmh3yAoF1SaJPLZo4toyrbeL2nmD99SLxaRxeXYtYmRWSwW91nN",
  "key34": "2pMf9MJHEmXFcDrQbpXKVjNLUs1e4x7oRBLwp9gtCsB7hnj9WQHUAqUqPPjmMuaX6zXdZAc1JNPRRn8hMDuHhvsJ",
  "key35": "4H25TKgJhDVox5jssGVAws32d6FR3GBZyhwiKnhBsgi6qttw3KD66VQgnYZSRM6SDiq7TEhP4UE4mqh9sKZeEeiA",
  "key36": "33y5CcWXHDfkiq2SuG2ZaGP8xEtHXy48qKGU4JkEgimAuwBoCwZaFw5nch1GKWjT4UCWqB5j77ZxCgo6s8xB4CJm"
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
