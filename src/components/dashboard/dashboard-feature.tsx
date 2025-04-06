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
    "DBrGn7CHYFVLiAKm3WUEE4YR9x3kMWiAaRX3Ty5j51gsBRFrVJR9ZAkQDDC6Ngwjm3K1XTa5B2Y26QRHpRkjFCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XF1aWLqsL8NWbYeLZPpf1qZ5CRniGoPqq5KEXeQ5YMH8xxrtPJ26Vr98sL76CNzPvKC1f3REeMVuPRWJ1SYyRdC",
  "key1": "31KVhBSE5ZC9aEWDzhtMUaBQZB7ekFyaRgygcWJmwpA5d2meGw1Ksa76xL4qXH3C56EEaxSuYKcHmVeF5X7euyFe",
  "key2": "2XkUZKDxXNUeRnECwKYM8X8amkwiauqV2rRs8Z7yqYZaTTwg5zWNau2VdAwMGwTZmHhirt3hCJp36inHdRrqZQ1H",
  "key3": "3hrN4xQZN6Lvw4wGdHWLKxp6uVUtSR9dhLWWFiyeqasU1hdaJhnNLx38zuuTDWQpbxZz2kA4CQKKMU4gLAJQNHJD",
  "key4": "5EzTb9Po41HWhzEe3uKTFnunNmb4vFZKTYVRnohK6irvwTsQpgWcfVkM9Hx27b8dFjh7TFevoEqxfw9C1yEUMque",
  "key5": "B9B1pSqXRpThkgmmCD8YsvLikU7D5ozpm5o9u5cp9RfWcAfYcNNttDQqDdYw3HXC97nVLKvwh8zhJvFX6JA4w79",
  "key6": "31nc8cBkw61WQPzKyMxcfFGEHud7hcvyxaS8sMR5U2C3JhKKXWf3RAqNzqhPDEaJr65Xo7oYGYDZtxu32vQhmW5t",
  "key7": "3yT71DEKdpLYc2PSWfKvjBjpAuQ8SBvJK1h4J6FP5FZUHt8BEGq3Z3jGWScvTVzpjFavnyE7AfVVcitdHtoTgZeV",
  "key8": "461zKsiZ4CtdXPZDXGm2vGKiL54hS13viFRxoAajv839grtGnk3p2se9BSwyrCVHD9f1SzVu9pa73f9kyJeZaXB2",
  "key9": "4v24hD1ViBbkgoK8eyba89KgWEw5Nq4kaiYxLkhe2zjBQqSt67Pdowg7sLrWEdkXZp3VHsAAZNHqrdTZWVruahXg",
  "key10": "5AZQNDPDavrFCLbw7nM3VANdjHB3jWtDFst69mcFWWLPkmk5puJ4idGa9Bqu6QiHSJFRQZYdFbEaPn4tvQpKpcFD",
  "key11": "2P4oVHF1XAKvY7aZqod7Sw9F4wADX9dz2erwFs4y8hEjfnXZZX67PG7Jc7jSEJzSbv8PCWt2aHNXPdsctuBqBung",
  "key12": "aucsz1mLEVBcagsSp658UR5SEGpJbNPRS2wRBm6qVJc8zebm85vEbKGwQrpGgoPkzDfm3yQxVwJ5LRN6dM7pC7k",
  "key13": "2BYvR42DG4zHcPM8U1as63mzQkGAXqp2ayhEbickNQXYSUbZAt6hHNVVVvd6RNL6QkbJbcWDneCPsJHNJfTTdHPg",
  "key14": "35mCCYSCdAUbzsRbxt4H9vnToxJVQUBxB2mZieRaTnXWEchxPDX1fac9voRhepxnuGgrnoWkekRgwyCG8vpHjWK",
  "key15": "TEBu9vg5myGvQsThbNanjVGSnBY6zrxKCH247C1BzccoLmsV3fySdZFJWDffQ6PhAHuLiu7h9Fh1FjHBHRcQ7y5",
  "key16": "5MTihHtc4HsG8maHniJgy6tZnacznX3iNNE3AjpQgFzkfAqrxj9yNNFyBSHapSNtGAjnNaDju2FXC4PjobV9M53q",
  "key17": "3cEYNfPLfkto6Skyh1cPQMtHApdP1tXcw7tFFJSunq3oCVHMNqZU77d5SXXbChizcmsLJDGghtqVjvsUwNhodLyB",
  "key18": "f6yraV83QW4TkxdEDoXrVPNE7s1PTwQJ8mPw9GKaA6DCwJLY9cpwt5K58uNStQYdhH9bARmT8t5n4mTkzo6rXRP",
  "key19": "4yg1yfZmEBMpvxdquXNfBetfh93oZYosokjUVRNpnEXTeCW456gUAmKY5rbY47WuE7Ri7qX1A5guHWp7YH2DzBKA",
  "key20": "59xhi9XWLhSKJbdiBcNvXS3M7GVxDgBMSWMuNYNyoRuwGhH51nLBPXQjzxNgYGixznfC2mpUJ9KAo6QXHwq7uHPY",
  "key21": "2otRUHNcCaKM5We8VbjqvYEYkHW2rJGAwEyvzWYXQ6C1aYVGZzHmHuEkQZEmLMV1nyjWcfYBTCFDTJHQu8g3joEj",
  "key22": "21SXGxfNjNveBQNwNbnPMSAU2o8xpV5E6bNxv4xj41CpZzaFH84WGj5Q75pppKQQrRCRLZgYf6jeKX746e8983VU",
  "key23": "DcMj9bxNfqkNHDjx9KD5eS95pBfRWNdMTPzzW3nRZqvqsEKzRsno1j81Uz3X5iprgQijkL8A72GxsDrhykWsLe1",
  "key24": "3aDbnyt2S6wGh77zFHgt3Z3rp2osFBNCbuEmzjh4vQPsJnYjteF66PS4RfTJqMtrxa9UqM2LQ36bgNf5dfgU5Bkx",
  "key25": "5yHsbFik5qLgf8R1BwAooEnMvwLfjNpX2nTo5A42LRypQamaiE4Eyy7PEiTgxf2QpXSpVFYic5x8cs9u4Qd7GPmL",
  "key26": "3WRxSXoyS6HV3GSpwPMZ7YdqwSNoRybbpLgNmFF7xyK43FQdoBwK62a2g4yNK63sSxEzxivQqXQgmbigKN5wrW9H",
  "key27": "G49jM784Pw5RGaK2cWex6tZgz5cmDkgwJx6wM8rjmATnyPos7o6oxVPG1XeQ5DoZiBsMv2GAUbE3Guk1ejYtj33",
  "key28": "67QZG9meYt9HEXtsigfLfg1a5dwknH2Rkz7pdGEuN5bSQdWRQreXmf2P84LRCVpEdu8Regm8c5a49u63CYiTzr2L",
  "key29": "FQSzuHEBhJX8ZZJB3EtrD5zz8NBPCxeUw5dzabymgTthkAPbV2xqnAXp6zSjm4x2TLn1YJW6BUAWe9irBBqQCbE",
  "key30": "XMmDtS4WeTzWZMNwuY3AmLnpE2vKpAnrgfmbD9DT7EDt7QpraP6gTDy2sXoqagHLW7BhRn8C81aJWKgXmFN79K2",
  "key31": "5CJ2NrrSYiS9Y1aQpcCQaRHr37zVv5QVQrRLRSLDMT5MbNBFtWw1rkLfnFihfxeUe2FxJ8jDWC9W3AM9H5HBUoZu",
  "key32": "4eRo4HSWqoZHPquo2JFnQ388gP298SvHymz4KFoGqnpQzu19GTB5wp64iMV31DY3SJKdkW9WpZKzcvNv7dnsDrn8",
  "key33": "28HGdkYjJWhP2Do48TxpeKD4ZbsHorVfc2HEJPG1J2YkhVnyTYNVTYyuxvqFLTVDbv4XZzW61YQJ8E2C4CydwUgd",
  "key34": "273tATSY66wHuTxkCQKtERNDpBo4GnsNFJqWTKoCDyUCmqTCFbExfdo3PwMtdjuYoPvmA1d7V9W6LhyQ6yZ7q12n"
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
