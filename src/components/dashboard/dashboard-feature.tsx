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
    "2ws8nGVHaBZoGd9sArGzzNonXJEYHHseHhVKzASCea63wQ6dswtg6tnbGsGcZiunWorMpq9ATQQLe9fZnuUiUnDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WrovmLwf6eu6R9gXpH3R8nBkFk1GNNqPDLH6PExeT75RHbMnRPd5peTbYEZSNSKDwLdVk6QpNwZmoZXoAjrXB5J",
  "key1": "2LSGwG7VhvghhV5Jn8tKQdx71h5icWTD3mmWa4xJJSPdG12WxFY3SxZVC6XBsoqJbCHVWYUzziKesdT6jJRFQK9f",
  "key2": "46tonZYVLkZAtX2BJ7u3GoNEEHkpnyjUZ28gjkPKq5YNJLyg4kXSHMnvP2McKMpHEFkmyS8zePR6A6gCYQW39emt",
  "key3": "2ZPH2KTEZgJ57127jEp2ZAKpa2M5F6bN9z77y5S1dcwSH1GK4H3iqP868QCZbQP5fQmhYqMFsm6msNXPqdyA87SF",
  "key4": "ZojUhe3cqXDQiTU8FUjvvrf8LxtcGWPYtdA8Mh5eCdMjR6L226pF5u4eWSTGozsRycBkAGFAYpyhVjufraEYX8i",
  "key5": "3Xe59pzfvEqzbm9kQhieFWqLpZz4PBNEKjwteRkqo3WiFqWdB59GxkT2yBt55tunYY3adbQeMKjjREBG6AgKKfSb",
  "key6": "4adohWhLqML9TK3zCkrocYnusbLQWTB5cDgYThh5yrJojuPrXZ9kSvRAcUkmZLqA9zFPVMENjC6TcZoGrH6Ue2jo",
  "key7": "3Vdpq6KF1N8NdXbPhAYnEpC7Ha4AdvhFc9DnFrkQeXzLnSPQb5wfkeiYRbHNAemFEY9WHHhXT1s9C16t22UQLADP",
  "key8": "5VmN5a6L1WJPHnv34pP1E1bvPh9rPYZEf57iFJrDUY5XMuVVvePTmUuSNCSKkiAcdoCP6sXuX5ZQiih9gU94rxYX",
  "key9": "8iyKpNbY8TNMJGXGqcWSmZYSNZPntU5pLJzWu8k19C1hLUNwLF2q8KBsH4do2AfPgeW2JWnzjCo1ZzHJEPNCbbH",
  "key10": "52oCPEbJteEkJFoZSpQp1ZQCz2XJsXdRGepZECSZDttLssV5ekvnY9zvis12E5JfpLEKxKn5Hx63SigW5gSEtRqs",
  "key11": "4WKw1EegGFscp3fkwhgn2kXbFoDmPJSzubAejjyReUVwodLCyHcTGQsMVQ7D7iPB9f27MDZYBfj8CqD1DRvT4zP2",
  "key12": "2FqTYaDydRBRTog2Kh3zJSTn9stkcyujFewGXH2mJ3Ft2HsrUL9ctD5g5xKMgwa2PKVT2Ddw2SBBVCtizrgopNGH",
  "key13": "4acs1tNe8D3rUkHHgp91vAB8PjmMf8HgACgPL2wBPUUEANC6v5bjkNHcveuZEVc4VLUphtijNA1xTXKsemptr31F",
  "key14": "4NUWBAc4QQtmzjJLe1JfFrhBoBSKmt4ZYYB4gzucPQWs1f4sXsv1LRjcyBs4kB6CGPQSgo8kFQxqfBSYxaoLfLuy",
  "key15": "3w29WV6NybZ464prt2rEq2ny8sbkks5KXJFopngkPEbWJhiF33apBSeYgx6J5nXbLWXPh3Z7DMpXEh9BDz3YhATo",
  "key16": "3c7T4wBjpgn7d62XWdEyizRrrsWdrE71C3woNGDm55YHF5Fh87wRBndmfVKW3mwYi6qoRLEJDyHw9BWPGzqbDWvK",
  "key17": "4Wd1vh93JLrMAWifKQXVrUX6YssuksH612iGSk3eLU5BhmgXuLgP9kY82U6u816Btj7TiTMCYD7KNyWYoAUacZH6",
  "key18": "FEytJ2wxRPZnKxBE6pCS7Gm4aRRStYrMqpYXsMWxGrsetXBZ8fBwZLskeV6tSGwk2mRXRhDdKGZhp4iQTf2bfES",
  "key19": "2q3YATExZ2sNEFHY2wZZUWZBRREMqLznGeHd5dcN93tUV7D62GquJJfNE64WC9w6b9vbXXxJ4RTgSfwzmtcmsWY",
  "key20": "2bvYCoojjm8gVkCxAAGvHgHK2jXWNVqXWGYXxZNu8t5ortRchSqwxAfYrKw5HfHQL3weRHru5B5Re8jmXtTZbYdQ",
  "key21": "4oQhVnVP3frX1ChByeAuKGF2X6o16ihbgAqNaJRAByQ8Z5MTqk6WArceKuQiAC2rVhhoQHuojEcjhppTmFV5TVW1",
  "key22": "4XMiimcGbNjw98G1C1Mz6LBEN83NNymnPSzVuXSGyKihMqJt6YNLz9t7tsUDsU7NHFxXVn9mZFxsfpjJ1yoia7fN",
  "key23": "38zreE5VrkufGVoZ93LyWuKxNnXYPLZnM83oTwLyVrtPE7CxxWcw9EtA7S4CHXfQ6SCfpUtHbNaXtDHx5LTaEdQc",
  "key24": "4cbk2mXngizVdkc1sgpSL23wiQm8Xy4J6jhH4nDyYqw37KbQBWuLQnTkw9n2yzPQDEr3gCPP5JFDsD1K1LFFTwhP",
  "key25": "tTGqcJwc7TddcHE2UTPKPR8cxD7HVngWw52prrcfbpgeNXDiEWtRJa7eULnQwDpTD5qdeFo266NY3nEUncQ8CDN",
  "key26": "4BQ7di9hSJxBM6b5JyZkj2ziE4e2UsXe6WUtWbv4CRC2tgt1uH4BCFAn5Up4H198D5oNPkRm4tDpxaHQXYPmBGCT",
  "key27": "5r6oWVvxJyWnbkQii8rhJv3efufwGW6bcrfAmVyCFjHmrVwPfiQcnTy2zym5vmp69EpjwTPVbdP1NBC1yEXSpbCk",
  "key28": "4sqdzhLeM1PQkQWKCLSVvaojnGddbSYb45w4ZnfvwXtwCTe974SHUfEgxogEMcPgtEHkM7ETf6T4GPjHMmt3pxNm",
  "key29": "5BF7jUvMv3m1LW5qnXSS4asrvh7RJ4Fq3Vua3QFWgzVCJqQWMSy1hQuSmKyc7cx5RnXgpEngUw58joSKXCTXdYsJ",
  "key30": "4Q3kzeePrTk9myiphSBTHp3rQwzL9Liif3KJSrSNsWCGsVKRTXP8FGk36CkpEboHeqbXA7Nnx4dobzuyuxb2Vbmn",
  "key31": "2cZJLd9MMKWGAvKeFwAjqsX5sQzYhUChEmSg4BPPWeLpRE8FU95ins2eiY4HeDe4jFCvwgh1zLrsHd7SMYDLYMFu",
  "key32": "2CJ6sThwd53KYvSasTcpkjYyjCXzXykbxctNLTwkrtJPqPLNJfEpU3SvGvBGm626DXRSxH6oG9reKj5p5L5a9BKQ",
  "key33": "7UaWSd3QSqw5MVE7BWPcx8ATqvQqsAoBYXpUG7vuhr89torAUj8qqj7Sc8GczU7fqVxZj6ZHsq3ji7GYxmAPaFQ",
  "key34": "2jqaxp8SkHTTFZ3QQbMDkZSBXCS4nrKGYAAonDDuQLoNniNSaik1JfqvqLTgEG2A4Zx2WQZymU6aVw7vB3A9hSqs",
  "key35": "2sF8wr53asxvzZXxdkmsPTkRmpmETPSq1rvN4iDgi2XhoPphALF2PWtK6isuktYqQxpL3Lg21DYvoLsuZUswBpkH",
  "key36": "38SGks6E8UDfRzzePJLZjrJ2yZ8a1CcUvQKg4CKLQj6cLCuwkcEe8THWRvMuqxUsHpBqnqpkrDhYncsnF3j6ejuF",
  "key37": "2TyZA8UFM1ndTPDhhcZx8zcvT17qYVxgAYGUEt5Rtp6mFTtyUzPy31su69LY5ZQsDoaAF4mu9R6pgJxLcfH3HYRW"
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
