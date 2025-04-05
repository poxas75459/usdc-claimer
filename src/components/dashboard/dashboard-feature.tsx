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
    "5dFNVdtDWPRaSU8m7RrrRMypoFVEBqf6hESjQeUNWHxzZ1ZgA9wheKJhEZtbeiJKeef9KGS1vgt7wXgVNZbbA2Ep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DiYHpVMZwNeEWRXNgzPsBV8cnRvq5uiuZ2RkEjc5N3DuwKW2prHpxm6Fh5bsR7GqxZTC5zZFBkG5bBpz8BaNVKw",
  "key1": "37wc2QjR57FDxDtDRPRkKp53cEt4UDpHnp6jyPRAoxFnQmyvc86X9weMn3VLVsuNiiNt1t4gwiq4wX8ZPEnKugUb",
  "key2": "4K7jQixoZYmcdowN5gj3fk6tHwEiJU4vENgRuicxDMoBR4Fd65QdX1E3yRTkWKcLZ6SQNe1f6bfhJ1Yy11UiThX6",
  "key3": "4ipT9RSnrYaPaqEp8NoSNy3RM1PPutW2AgsyK2Ve654EjNKK5pJVYCbpULDCr3oDDheC7fZEFKx1ux5wjvVd2X5c",
  "key4": "3JuJF7TViqfm4ih9wkpXbX6MM4jXRWqp7EYep4XeHQharRuKgoEiv5HTXHSHdewe1jr71W32m2R9Fsjwe95X5ug5",
  "key5": "4xiraamLwpcMuJBn768prgwscHZs1tGsJ2qMSYUn6eXUMPMYimoHjzf4zYR1WTTq24VVNQjiTvbwtyTi5J9RENsg",
  "key6": "54XiUU5JdJq4mvSbsHNtaqq1TwTTWuoqL5ynnf6p4NTt2fpxrXDqAufVy2bXctHwznnFzuT6EewAiFYxgmYncAKo",
  "key7": "2jesnrh6BQWJrPTyiNBnAkD4EKaYYLnPBK2Cf7hpuo1ebChQbhxSeXrXi1YiXrhbCWzQJeZhHeBGtSJyRWw4fQZw",
  "key8": "2Kmf1HJtX8TkQ432moBCKCwbbXpSysSQYknxAiJ5iu5gwtk6vUhgbBtSEU1NyrgkXr7PnAsaRCay4mYRpx1GtArC",
  "key9": "5z7yFGUf7HsRtugUNYLW5WHF6pTTweDmm6M4vWyWD7X2uMgoC1SeMURv19hUEGQCjUALzYLXmfwxNKcKCEvLjbCR",
  "key10": "Y3Bxp7TB1LsHeRwaLcu46njLdeLhUq3VXQKKte2kPzcfr4ChcyR43QH9tjCxuSKAobQqvr7iLcpW1qYAFPmVnco",
  "key11": "5TSSTuFDNzJfyyrsp9azC4rYUojZbQD1QXAKyXs96Rqa1q7zf718E1QYXbikbrfZ2BJ89QXGzsGaGxD5gTbwAPLw",
  "key12": "3AW5gL1ArCRkCm8Rcqpx7RSoySSeh8sgzTaPGdb3qfUPBTj1Ln1Rm768bFoyDqF9BkQsjAXSf33uEoWesypBsbuR",
  "key13": "gaendTpGVRKtmAbUGHhPgTnRhdMhXykgaidonGjTGoV7S6wAwkKcGdAmeAEsXDASr22Y2Y4qaZNJaa6VMgCwn7m",
  "key14": "63e3VaMC8MZNEWkzQfkuUaPEw3hTyGYdQ9m1uL7UxRiWrCFcPVFhTPwff5HzW45WDzgfHYrfZ4i6sCzHxTxT7Et",
  "key15": "33gbCLdjK58AMFddbmQ34V7fJ9M1ruPXFSGW2Ax9Ryd9d9sHpQ8o1e4d6nmTuRT9yj4fZddsBf82RK94u83HePu9",
  "key16": "4ThuRnMzPWhGd6bLqtiP4TZ1eroEPMc2zqykh8xk8WRcn78nCVD2seETbTshEA8juJ6Zcb3sZq5TSrsCyWYraEpv",
  "key17": "47jCzKCoZGUeLGURXjTroYkYCV2aa1H4d6dGwMJxQaoet7BHbkBiPHUpSR6jPJ1dSzebf1uzQr5H34dgiQvSRbjL",
  "key18": "2QTP4HLU2MHymTc5gXq6dptKiD4anj5EuUnLE4XHG61wnghJjgq34FytnXEB38EUd4PB9B6RwEZ52QQ3cAkxb6Xh",
  "key19": "3WcwcebzPJhZYizZULYSyTT42gjTMUKaGqyW1LcWemCEeEibkNSFicCeu6jKfA64u6nEBHrUm88w63VuJkHXpjor",
  "key20": "mwcGfFwupXXfwRjS5ZYn9TjsuUBEtLypg5LQbzbc5Zo9WZu1nQi7oX92jKRmFJ16g1qs4FckgYANBKVU75tBnsU",
  "key21": "ndppkJWsxBS3kBbmfNprZg4vEh1vHCCyNn5FWysVnTtwhVikS3641DmDKRdULE6k9ZyXBHw2FiysGMTWv7XTy47",
  "key22": "3N6GyqfDZz5ws2TSjetboDrHn3h7ZB7sdrJYaQ2jiAC36jiasNuaQyWbqs6r8e4DtEbos8qvMeQdmbPUz2AApQwV",
  "key23": "7E72RpxGLTBMYXWCHMLYC4DwienA7YdZrBZyaDNgAm3prTL1nJwcFNeuu1tQXKJJFJodZpBiMC1oUobTNh8hqew",
  "key24": "4qcfTE7kZR9Rwm9dnHnkMXXLhutXsmcuWLZVj3trJMk9NXkNWPx9Mmd7vxPRyPZtZ9NWZ9oHX6DhiwNRgtRep2gi",
  "key25": "324nyG38xhBrFwhuhdQQzfSCJ3W9hKvxDHtKZM8Qd7rhc2TTEJvyTf2TGC5tzQMLeHfwPsiNCqcoHbTB3es5SvZq",
  "key26": "2maNiHqiqeuTPT3n1brwfesqCuyKZ4viUdsRtCJn4qT1fynyYAScQwKRRU1STgxUNztr7HpFrmb35192KeAtSqE7",
  "key27": "58BhA5QyQvFH3MiJK13DKvxM2PXpiLtD9MVKCFTV6JKt4phLecu2NW1ntN1XEd8MHB3wiMJWf479VphEpMUaLLuv",
  "key28": "55JX8ZPYFXC1qLsWwq7HRU3LQRx36epvJUYbakk2ESMx84ntdxGPsMscjx1uNRfvxs6ynqrKYQbPNNH1ALXUYZ7d",
  "key29": "QiBBpfu7NcLe21AVv9rrEe4nm1fca3RrdQ8dC4RqYqAYwEvDGWahcsh4tdghwmzwd4QYRQeAMgYk91BDwx5EYnB",
  "key30": "4mxYxdJNgcrZfVP7WPfdiWg8cwzYSGWdq7Nc4tLv2SghdNXsAf9n4tSqvUjaYkvBiP3eV2Y49jMccbYokSEWwY8e",
  "key31": "bayBWkscS9yF8J49ZW3GvT3QdBNWooBBBtQSqvLSu5PChWA24BFjpYTgBVou8acdPSM6UHi6PwpNS2D5kYbWetC",
  "key32": "5GdCRdWDy1uCQbUQzWH5z7VE26DdiCV4D1H5xs7NhLmNmDesLh7eoEAqvvZsijrPyBmk7ugsCyEUvCD4DufGbjkc",
  "key33": "4dJ2cYUr7azANcqtaea1ozVg8jgMcWQeEamSA5uaH9teEW6jYBWr217KXRFriRaHDjA6LKQeonBvaN5Ge4ALfi4c",
  "key34": "3qog5fRHfPgXTE6m3gjVApMQRrkvQmhoGBtNGcD6nFEWpT5Z8eJ1dp6RJ1QDnJd5d7ktL8tovcSLdhMXfFbA87m2",
  "key35": "8aNkJGtRDd2U3T4ZRrTF6wVqvxeWa471Jz6XddhN8mJvARNiWjCVa8mkodjYHSNE2HM9kAAhFCMUTUbEUijn4Bj",
  "key36": "5C6Xj3QL5TW1GwX7Yo58YRQFH58Ss1rZYfcdjAkvjRqbtLpYA3nPoF13YHFgAD5mKxPzTT9Em3szjJE5AwzRz9yh",
  "key37": "3u5wpE9Y1jkWF35y1puB7FtcjAN7cyiPqWBFxsrZ4i4djktnJUrijJV53MS5id2tP2jt81Yim3oJgtAVymfmXa45",
  "key38": "2qwUUhQaQpnVgYRcBQcPSeFn1ceZx1LwNeDTetEG9FxXVSeUwAykmveU5xgq4Ep9FBx2YKaqET6YaD8xMFaHqT3C",
  "key39": "2nHZkpjpt7SYp6zqi9QJ6rKLe3e4KqePAXx9qTZgnN9AGAbuZAyvY78DhUCdDcGppnNTg3YCRJdHYEo7gvaDNa2F",
  "key40": "5jkj5bxiWqQCRPNfhYsbsa9VybhoqGRQR1YGmszh9mRS7QAcq1DJKbxkAvnNdhy7PMCwmQaTVDUQGQfDji35G8Gg",
  "key41": "4UFquiV7PJf5RWSNpL31ge1bdLxp19mpuiH5UiF35BLKN9K1rxunJ6ArDrsiEqzyxtyT8kDnAnyHsoZ9TMn2BNsD",
  "key42": "Vah5HbDFzuRwUkzq98DYhu8DAZZ1JKxFSQVjPCun2vGkUF2dwK6ZzrrukqdoWrnAyKgygS2y7yRsBLqqeL6q9e9"
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
