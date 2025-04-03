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
    "33uiBasAHiV17uhyUhU63bHuoBpbkGai5FMPSCsozAuucYNAFyLkpJkgZhFRxBcP4dHZW6iBo9Vd3heTxZM17nse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vVwqZC37qsXTrxxH23VbmMmAN4mZhZRNtLqshKtV3QHzghSXBa9UwiNsYdv8fjLoZRZeVsh4dVb1Tp64wuWdWXi",
  "key1": "c3v6VMj9hesQazyJ9JnghgXPf9Q1xbe1YZtR7wjfiHBa1bEXibcnhqcWE8K9vw4DwJb6xVLiSGAJ8cSSpXERMaD",
  "key2": "2VhxhEn3LWiwb129n7MdGEnRSfpNXw3AqNVfrURPgDnqvKMYRFjD7FFDSrhUBFrnEZEx8xfspv5Gmq3LxUxcQzJN",
  "key3": "2UAUT3ynyQeQZAUmYQTW5u2TjwBhoyiGrU7aE1N1pypApo8NaCWyqrABDRcW6tX7uEjGDVkoT4Cnors4WFvjAeEs",
  "key4": "3QCvgPyFHnqUMa9HM85iwzWcpCFe7hKChyBcrYdE4t3hSfqcd3x5BtPxi5q7ZZoYqGoAtJHvcE2nGTo2jUMm8xfa",
  "key5": "5pY4fmJ3RW4UdcdjNBsL9CWADQr6x736WpyRJwwETNutVfdrbdTpVWCRWDhMzonPMC6FVfejw2pVfpukLpa7Dqua",
  "key6": "2fmEbaKnb826F322PEmpgwupyXC51qFT1Z8fUVdDsu3CUia329d7j7UunCsvTS4b3KXDe5eitAimyeJA4zascxHe",
  "key7": "3MbHnee82s5RtuEMJGzjLfJxNbqRFdn3akHMjsVkF8pDcUzvtwL8kgrADuGhZnhPFfCe9FRhGviYkFPN8FXKEmP2",
  "key8": "vuSW8FVibXpfochzH8QLbxsVKxdkNJUxQ9aEENtJonU5uF46wpyxMmsoi5hQun8Q7fWZ777riCvpQ7qrAd8No5S",
  "key9": "5CWvxiXuJBbXxSY6PeRV5crQ3Z8JDTVvGfh6QmzefS2JEGMrGppef5mCjiYwmiFbYBkcdz4ecPba1sQawHU9zLWj",
  "key10": "3jta1o96UFNHfMzyrnjLB37frbWAi9bTmacreCPdJTzAJQ8fi6SLW9U6kg5zhpUCoawbazMibDEuVWfzeCUDEpxc",
  "key11": "4nfrEYgkZsvwDvWmwrG7dvadAf2rskSs9vK3CcRDSqKVyUoaaFHpVppL82uo91ruYJ8ijo4VhLwdZCrgyF6qdcuA",
  "key12": "GHSM7V5mod7TsdWNTMzYmzWAzqHZoe9ehoCUptEuXbBScGSkQs5tfL1zc3vfnXudwvLZppn88sFwXQhsRNK3KPZ",
  "key13": "3v2XFuSw6iQC9B21yMDBBScuLvQZt8U1mTHTN8cb5b4eXLCh9wLN1Pwcq5g337JjLkNc93i8FaxyaZ1WRN7wPAtR",
  "key14": "3oRLSQZuCx2tJ8GXtfWLN27BcjEKJn3DWCq4QJ1mUAiGYfBugdxS7FYiwhApDFfUqRf1EGT1q7e2JwHayA1Qj1bm",
  "key15": "AL7d9S26C9cZxGFk9XczEkcs6cDWrECTWk8os6sPT4Jdwh8ak888NMhr5eCkw3Wh4acLg5qQuuzPV6kkcgjmr41",
  "key16": "22cwAd8g9hgG9SwCxnnntDjTaszvcDzCyce13B2D4XaaCjCFmPgKYnAUyfxdsRuojGSpY2nVXQ9uBgcuxCyzEmya",
  "key17": "61UxFFTZidu8gkx7rr7Pv8dGeMTasEoJyutr3FuabC1YtvmtVaQEoX95uMtACgMKimhrcRPrn7in4QqZXSRQ4Ls7",
  "key18": "3urdmJhvDFqeoWQapmF24uku8VVhfhALZhFuUkiLaxnA792Xa6t4SrDW8FYQxziTu57zmBTeNCSAPaD1ZLLk1Bti",
  "key19": "2svfiFtArdagwtLqWZu2Ehc8oWiTrPFMsR15ByefgmGQXnf4c147JSnUgaZDh2rXMazEJCZdW2QzwmvKPgBDDZEG",
  "key20": "2vTNxTsNLKSpTRnweCytJNd2ETkqoJo99ajN42CTTgVChvRUeAJos7huYFM7wtFhDVFGsvGR8piAMpcCPtEm9KkS",
  "key21": "ReLnXMpDNnncW3uztxVHztZMMzDsErbvhTUEUoype7L27vN5HPdnZT7XTC7RFij89eCzogj41eqEQvxVAyDJGLa",
  "key22": "2epNfMu7mqyoX3fpv3LqCzTfXPiZaAsUY3MFF5CtYTz2DTU1uFbsQ1R5bkso8gWsxQpMaYBa2gMzNWpnbiccnShH",
  "key23": "3A41eomm7qR1rj5T82VfPjNvTKuDQCt7DnvN5xBEX9Ai2sE9hL3vsLjxbWsR3VdQtdw2D4wWRDp64rn9L3ySUW6b",
  "key24": "ChixRbEj1KHhn3Gx9Y7Vx7HdKMwVE5VJZEpUv3aupEBXwnmeJaDHeu2fMpHSZEQ5duLgLYP2PefMdTCqvsXjB4M",
  "key25": "39uHywaEa3qZR7tnD1T4q7Z8RhfwTHmDA37mr3htYLNrpiwrzY1jwohGChDHiVHyQMDh94XBweEGfwEqxhDkSWo4",
  "key26": "3zVtvmaTA7TseaHZtwfccxQK6FnSUk5yKyVRd6SAL4s9PQtMfMuM4SuwpYM6fCzGMF3jNzouWDZtYvznxSN7QaaQ",
  "key27": "5FZHG1wuXEpBz9PnFHUrcGuWSibaQcCLeb9Kng9W4DvT5h9kGnDeVsrWAxYghgw3gJcCAyA4dkZbTkNBtaRYiYf6"
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
