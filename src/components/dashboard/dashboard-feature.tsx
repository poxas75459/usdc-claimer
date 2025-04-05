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
    "oSFa8efiYhWTcyQLTLB4thviYTDrkXAEoa6e6iHC89HJoCRhTGH8P9aXtqmgSVz98fLAQ6Kksz5iHSY7nd3sfRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rmZ6BDb831Ba4sEVdoemKChgGiZr8pZHo1AfBCrFPhA38MD6kWbjC6oeWEYjsHsXwBi3ZvDYG8eNveZofrciXey",
  "key1": "3afGZafT4V3qvC3zre9YEwAmryhL9h9MNC4L35Yb7pSRzzszNbVrPiCcXGUVXhHEwEXPtd77cacE1WieaRTGZtQ8",
  "key2": "21EJ5CvGVSp2aAtm2FJeFNVgCoR7MvHrs4p1WP1p4zcKUXLFiLWSHHUjatCAgxzXoAYKJLWJXacFPc7ydyPr2w8n",
  "key3": "5hBE4hvLynAMgBK8UvurwSEth1tSF5BUXRDiikjyHi9o13esKkvpgCMHUsrV7FHTy1HC1Wu8vkmozBvWSvTpTjgU",
  "key4": "2D8Mr8hJgxNzkVw7Q3dE3C45jN3yNsQ8584i7Rs6SMCTGqdoVvgpfsSgoTtyRedXjkLLVC1B3LAJ1ZiUQ6V12UjJ",
  "key5": "2pyok5jU2ShtLSAoDNHkDn5bixJz6zPHbg482HKhYLWswiD3fDsGBgDp2fmpC9YiHqntPMAh1FR37eVE36wvpQLW",
  "key6": "3KgD5DWiKBh47GWQ1XHgvDBGEn1phu1BBfj7veEcr8fPTRBFjmqCFy9Bo5rZGXBbmsGRum6q8woUpnUWAX8HoMTd",
  "key7": "3mTHqosyB9DN98CiZUPnzN5KuMYNYHBfZCudeEigiVmMeJQYJDebcWTYCKj5R8N8vrbJeqKZxUxXPiXLSeqcZKKy",
  "key8": "tndQezNXebJFwHRNHjgqZYNQpKjVv25Cq6NBA1TQ5ZuYFuKFLuDbtS8Uh24KhwD5ybi5Gu3QjC3Xc6PPp2vYdbg",
  "key9": "1m7HnFx3nR9BMRmCBefqTr2zeTs5j63HJWe4qmj2ugHLcjQxrRwVCshe7THEHHneXJzqgoTu1tzsbsfZzq8YKxf",
  "key10": "63UhQ5vbd4PKy7Na8KsL1gmY1vBSJwM9W5bGeRpqma3vciLdvmwJov9fzcEG5Nr6KSoAYDec6VEtfdDHPvjTRcZQ",
  "key11": "2o2oqRg1rjNpe9hY1PfZJ25UHM2LgBERhfLukQzcJAQtH39YjmoQVfaK18uvFQTs4eChmCez1zUAYC584jXG57cy",
  "key12": "2PqDkNo4v1UoNihn74Wkn9wt1M2diwyLq9i7JxZRiFzbYJHLui6E97jdLL3NyYCCpq5f1HqRCPfVUuMLTCGqaNHT",
  "key13": "3w7YsP3ZQRs5Lp6sfg9aS8yLvy2AAyxPkHF6BMYsgjyi5GfGmPTNmo8xZuMKCeT92jmHV98SWaTTdyhaWjtS1i9U",
  "key14": "HmQXj2gStKeDjcKZDTjiHuR47qpNx2LrBnw2gqhyTKMXjfPV19y457nTkWwKXhT1UbNiRrkvbdhEDHGjEipScqb",
  "key15": "2kBtUTEL5pmYr1FoTfdUS6GQGGmW3DukJ2RJBxyEJo97SA2MEJiV4zhAuuRuyfALHzbxiTgnGnJERTxuyN729a7J",
  "key16": "2CV8ZuGHaoxzQVfRRPRnBTxLjxx3EF9b4cevPvBBwcKgZLWATDAz8hYUGBE9d8PSHsFo7W2zsa8Fd4WyxG18pRbG",
  "key17": "3o6HXAwU8eYYvinUTef32YzcmMuyEtTD1L7Y4eAWf5tNe9JHtaZjQuZfmAdB3ukZNmkChe9wX91WHqhCABEBUuSt",
  "key18": "3oudRFMfuEb1nNR8kL92mU3GwwnssArLSfRD3oKWpghqP9T4AGsUhiUJiK85LzK3AejkKDyRAXmjwRsdvPPgLDGy",
  "key19": "3JYW53mVNMv2HsWJyVDQTiUyc6nZFyDpoY1RLi6ZXvCNnUfRnA4bxGguW1BfQfMJcvdJVGDi6rrEFMRj8UNU2NLk",
  "key20": "x4vKtgFR7fLZNtJjV658knrhiS4TRmkTKEy8tJbBAPnCP8iRh4VoPTLq7Q1WrkHfPxfe7ZYfNJibkj9ZHUM69Vw",
  "key21": "4w2Ec8zT2M6F1TjLbD7XXwfPX9PDANznbQytWy9d1rFmjJd488ZD8vKVba9YEMV3hbJCaUoQEVp8gkjLkdQBsAUS",
  "key22": "59Z5BRXsDgdcPe3PGbTRgmiAkkWx6m6qbYy5Fvwi6LmUFz9N6WdBn4GwYb6WPZb7e7Eqv9rYGLSYJSEoAL487K4G",
  "key23": "4yecCr3i6d6L31FktSWb3TMXangxvtCBUPbKV7mBrtyXoqmkkTCKzpKXcX2Frfi7hdHP74c6xedQqNu9Ew1tMrkp",
  "key24": "5v3XH6tJNn7MJC5USLFUFPtJbVqbVSKiSnAiCzSmwy8NLosnX8Rf2kcVqhURtS3ULQxaJSn7GtxNvwR8iQvgw6UX",
  "key25": "55bqydJrVzQiFWShoqqsWPqoKTJdEMwGJPrvFfdGXi4kBVPHy2qJUTuJ8ne5DjpH6B9kBdQVXrGzmq2kRnvjJDbX",
  "key26": "4Wu7R1xevmMtpGCNTaKx5pidvM8YXwCebAWW7CmBwbsf2ALGWqYi6JRCw4C3e3sVWpjXxTaJmRUJ191pgkraBwAV",
  "key27": "47pEgkmNqZd6NiApCwVh9B82DSnC6NsbwL55Gs1vjG1Jth4j1xiDNTbhzMM9Wky1pa3d6vJqRcNedBEkYqS4b1RQ",
  "key28": "5zJqb6ST8bPoqrD2XbofM7Ti75XDpCrr2s8R2i6AUGaZMk1rQu41Q3VZkCvt6Bi4Nr8KBid7pTqSaHS75qNGyyDs",
  "key29": "2QezT4ExMr9ceAKbXgNwiUFQT1S9U9usuaEZimCCQ1m5QdLmhQ272digFpPsnqYTEUCU1xkFsLa37vyFyoZADxer",
  "key30": "4QDWg7jhMcW9eTY5hZzc36NrviJh66M9uQBiDLJfUqdD43AmB43MxYWyiuJidLyGdhzQZEKuFMDVvvv8dyctjJ7y",
  "key31": "4EoCNozAPYjiyBMjvikM29Jx1dTe1uesgFTXevU24tR9HiJBP2Xb4yCH2TfPwXJRRwuMn8vjxFBYLXqrvANPXpY7",
  "key32": "5xDtDnufABXozYaDqCdrxu624iWfK7VyHqPRXF3UxL6gABRvhSu748rwsPXtPEn1BD61MGAai8BoUfLneqFYCoSk",
  "key33": "3Ay7wmkWyzZnpN3QHtjCBuFkcPYaFQ8XnLxY8NazvTDE7UaN85bEAXJqZhFNo9H3MQV8JsC87oZUrD1ESCWMDrGi",
  "key34": "5CxMAE9cimM3DPwQ9kuPAz7S4KVWDorNpmPnE3jcj9fYCoWrSxqh1n3YG91T5dvPy4mJUEqtMds9VfBiwBTzRP3u",
  "key35": "5TaYxrikxwE2PPkTvWzz8waEiMaSSJHMqDWr7hgEF2vqMqnuwPn5b63RMHqCpvPEBQUSsWBZvNUJ6VRQQ6EhAzwv",
  "key36": "RXygW2GbJsTMeMVy9r65wRr8aeQagGEUC1y2wh5MBCbWdJu5PBmABdTpko7wegexJ5jJyqMiAoBk4FSn4EzNMuH",
  "key37": "fEMPmRDWFYpJakKCPfd3m3VGTXP9owCr57zU6u8XULC2BMn8SGZ1wT2Vh9vCDvbQmS6bhjVYgB7BzMza7z9mjge",
  "key38": "4rUaxCSibYHFLj85G1i5xZifeHLrS8ZKwFV3419FuUnPsnfW6z5qVQYdavZfhLeicfThyfa8cLeRAzMHXwZWVEho",
  "key39": "4hFX8YePtCBBVt38xgc8kogxS7LybqnJycwDow2CRqVvwfYm821GxuAYZzgJ6aZLC8yy1ueFRMXmzNwUGZhs5Bp3",
  "key40": "3aKpncN4VbizBR2LaJ1dYEBHC4URqc1HysYFysuqy4B3P63kDsrMvLfMBDFsKA1dbYkCYRKA7XjhAGLECYjhBzju",
  "key41": "46jFsSzLkB3nREwGuX4hNYvgzUhj6pnicM2Dyeb4MSecEZ4PUsYCWSgbCz6cgo7EpZQ9hXtbGoEwMcqBWnLL1tR3",
  "key42": "2dfZLGQP6QMhcFPoDYH9kKnsfpGWPwzBXa29qsbwuPLV3DbMe71sxx8m6ktmY3K3aRP3rYUZQvbyVSFoi562esA5",
  "key43": "31RsUeEkgiP68iTwbQugrABYAcNkciXPgGuUbx1TZJMQ9ZkC8HajDYcD4PKuS8uB8RxbB3mD8ieR8WKoM2bVf5Pk"
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
