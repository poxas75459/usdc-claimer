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
    "4HHxk2igazsqk2zWVqNdGSEHGVQDMMX5ePf4ccYnFjRKMwAqDqQEsLii3uVqSD9vobaXZSGPokoGZRbhRaXoP29b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HWFcez7gcQ5dhGrRQxBXsLjMiBvAsynSBbP2NYC5nAgsdv5LiJW7GKUVVUvqdX8uAkVRttGaX4Td1fwDqQsRNNF",
  "key1": "MPxVzdPBYHvHek13c4rnzR7obF5n2YQxmUS7PpuEYxtxUpf4CWSLbK1kbG6fXGeKarvectEXKb5g5KMRN9WyY1X",
  "key2": "7JVRjyWTdqCUAJZ6kbkZq9CZ6t5ZtgUhMRje6Advx9fQe5ThuzDZpnXkMMmR4pGNwUUTYAAJ6zoSqrGc7uMpZSU",
  "key3": "wEN1hczUMvn4V6crtT3qVtyYoofLbA7MLwEgixdG5ZMTVDhbywaADJoRweh6UMvgnwKycTL71gB52EfKqJf8Kae",
  "key4": "3bezJegrBnsHP38hAzWmxiwH4aY8ZNHHZng9guyixmRXYnGFbZ3oDKvJApJW87sacn3W7jwpz9STSs3D1oeqPecG",
  "key5": "41qEDAW4PUpYpSHCKTUSXuPa9n5rnxfSmeE8Y4WgWn11XYaWBWhR17fP6BuY6RFP9fWHYGLn4KpNAbqWjo2FiSmy",
  "key6": "457vrMDcK5QrY4FZsWEfm9ZgBG4h8j88NX7fPjcmY34BPPgDdwCqacyFmCbgRXQFArrYsZ9HepJdhRNDCdTHmxoJ",
  "key7": "5mbR3femsey8zmBV2Jb1Weyxs2KBYSNNJKjSDXgA49ZCFqK6nX8db47TAYQZdmjBV4EL7oENk1434Dj79eaph9QY",
  "key8": "51mBq6F2oJFgp1ZT5Hje9miNaomSCtQ6Vq8Mos3h1Ym4zPYF7D7iAXXEu3VKGRToedr1iTq5XTVrU9TNXbL5LPT",
  "key9": "2G56uQXF1mFXMwcRuLj4e4G13JKNupXoffiL3Ua8kEogD48YTwLjThymKUXytWGocRkSGgU466fS6bsudL81Fb4W",
  "key10": "4D2C3hUWxmtHyiZXhY42m3SmeoGDhyAxk1pJQ62u3CE1D1gssKCSEaNjpmLgDhtyYvY5rmTSF259iMVwRSqSkNXv",
  "key11": "y8CmUNPHJ566vUBug5864AHdEJMr8wEGDQHVtgFNYweQMmkBCxAyVzNJV2LUjUuYFu1X3LncyiHaWgMWpgvU4RR",
  "key12": "3DbP97g1rC3xqLnnC4z6UWjo9PSU1KnbY6NUumrFJmy4DfwkXYGruPQebq7qLJcWbA4LheMWmrZRBbm8RUAsmp7j",
  "key13": "2vPeQXWWERdR7WVrM1TgvLDXoxgtoT2pjn8VRoTGqRgrrvcgCWgECtswesUwX4sXSGRrw8SG2EhfMkpVsnidKQJ7",
  "key14": "4jsfk58hGpZhdhkNiReWYGp8DdoiSu9Do8KS6p6xbEh3eYUw3S5FZWqf1q4vSdUp8fXfi9QMzWQt8VioSZNRPBzq",
  "key15": "5yBJcD6fRFAtZ7h3NGcWfh6V7itrX3TrYTZEtiCwtiMUPo1MntEzyFKBafPNW7eDsAwGmyxJwFdPu65QpjNfaDgn",
  "key16": "4LtGwmHR1YGW5ZSudQBkNKdigdrM36XKt5kAH4xQ99hv9w5n4X12bCasn8jKdp5aYRE7ViVNuqdtgKCeHUYffjxZ",
  "key17": "5oetTSpcP1zbXh536Sq2WMiXki5fDjS7XZtw5xsepbgh9ZfXzkhvA9xAg1agMUqveG7H4tC4K7Foo5W6K3M1UZqg",
  "key18": "5cYpB75PqpPW3neV3jUJSChsHgb19ScUykKavVFH3jicyfppJSvX3nHQVjKynCgayPhy5vye6MbHgDCNd48bSZ5X",
  "key19": "5rHwGFQNpcCZZEWEHvZbotzsectahVpURJnecnkFJDFGxYsd8kcGTjFbEt8bZsH27XdBcoUkuaNz9pqMh7PAXK4p",
  "key20": "2sXUxBERLwf75tb59A3CL7nWXvoaYTDaNtcw2i4bunBYLXaJm3cBDLpbQDUmwKJvhDibuvLxW2BdDK763jZaFKqM",
  "key21": "4CLS5vExgzmGutTstgKokoPMEdgqB7qUu6TYeFQwbhBojQNPUTbeCAgm7hmd9kqiJgarfMgFmnX5MmsFQ3kTM8eZ",
  "key22": "4wd5f6ytRpWgMD5WXmhsbnKxuY8ZiwJqtxHamixLpRYKDLejWpummVJN7nkfGo9Wb7XMAFBkkZrF57asS6wPn5aB",
  "key23": "2sEnn3PVGSsZrE8HiF2eDTb54kD7qyidU2q9VJiSevUmqBtwHeQUsEwnGSk89aBG6qg2JbVepQNdmojcRpS5qKZm",
  "key24": "YhH6dJ1Pj5qxURFLyU4dASMrMiMHHxvX3DSvYyNtcPK7DBGUAMQ8JWr971tK1nkPVJSyapyYZNVZH3SRMXfqar1",
  "key25": "2us5UsxkC9joBSYTLBgvJe9SUfdwbh99mAABgmK6tEGqwCFziigy2rVf3MCk8vcCUqDDaA4CCoN8mWeruqpkMgZf",
  "key26": "DH3C8McM2UKKTGxoniNTGpM3EfYbCfinHydZuv2J6cStGBxXCHStBxMSHvfyVS9z9X5XvbnDdmrBuTARHFmGBLw",
  "key27": "46LcKR3asJxbUj3iLZCYPKnfoeE1DAUXg1f1w9scgPWPF6uFaJfNsw11JZbrUBCWqCSeN5WDyfHX3jhxyydoW7Bb",
  "key28": "3WYvTcHu6aK2JNF9afVkGXR6JrdKCMzMpfddvPac5LztBoobrddr544N5EZBAx74iWyjUm4GxeqsLkVQFPeuG2bN",
  "key29": "35xP28tMTKRPrqpaMLp6cF77oAUg4YjjEmtBsMFfU1mjZ6TXVfwD9JWYVbyPzD944ctaRMdFgmpQuyS9Ez4iFQ81",
  "key30": "3yfG3k7734ch9QXPmjicPHFr88mykrQL1nnQSubU9PGe7tyEdTS2EESDG6auh65CUiptThcmQABaXLpkKpnHsHqE",
  "key31": "3BnQTRSEeT2V42D8XrwnPkejG38Zt3nNGhV656k1Ca67a6bcsQXRGWbQjWS4Y5z6qEx35LtH1Kdwt4LoMe5uVNdh",
  "key32": "ir6BMFbQaFdHb9HD2R2Bi1WMaKKpp2C3BRW7u8MZkRS3BhuABEe4NYNy9spSXvn99CkEXuD7gMDYCUX7g4dQFDQ",
  "key33": "5V8JVjEQCgxMFCYECgVGiMJxqJCRPiti5seNiLyiuGEqGSPe8Jeydyb9vUEGviPkjXfJfNEByHuEHxX1xXUQgiis",
  "key34": "4NDvmBRiTvugHYytYjK4Fxy3RegKyF57Jvw8jeAwUkSAB1gzMqipmL3TStHSg3mk3skTUownupX4igLjwaZwmp74",
  "key35": "4Gi2DzCDYbzAjz2sJkNHftu4c3q2hA5bodVRzpZDsEhe5DG6m5vmcW4Km42D7SThYKZmFDsiUGqkwiWeN2DqDLrK",
  "key36": "8TAiu6p24yPhEUMKdyGWZ4RyXysbocq7SZrZX9F7Dr13hgUkkQ1uRxtXnNhjUREqeNFxkqf9ZnL4aATYPFNhLPn",
  "key37": "2gsCFT1C2niLUEwJ9nmtpSQMoYUPA8pqjPD1GjNxGa5FkaLWi8Miszbf6GFqJm1X8ji3AtadrzZwBamB8yDyDA76",
  "key38": "n2pMXU8cYSAnweRFNAkghnbKSn6ZdAutVJfuSHD3TAAfP7CyLFE93WBogQuLM4Hd6NTSYAM9h61wJkrYQaygitB",
  "key39": "2BSdKnZoKio4naeoDsnUPPskfgxALEway8EZBHvkqpALxZJ8kd7G27T8JHoyLfbwXihPjwTVnWLdp4t41E6vqB4f",
  "key40": "5FXVmSfaVSvi7h8yYxZ7uDDMKL8azdGAmoVR613ksJodcQKRtZ1s3tkkU5txy6WGK171d1iGcKVHaHofLgy9jEeF",
  "key41": "4pTaEbVftb6aiM9iC4kLQJkxnBAtUsJYUrFgzJ1mvczW53HRwCniBfUppRLSLgyXY1fKh9fLThKRBv2dEajAddg9"
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
