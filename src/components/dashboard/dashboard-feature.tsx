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
    "4AruUoh3cRGHVXweFux9XSicP987kRhFovsNP6SCnkS2BAMFsggUw77rnDsqJGsfBiHhMoV4S3G1UtyMi3Kcac3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41bUT6asx7iau9qr1V2B1K1CaqjnJ9iAmqd64VwhZ1mMrQwtGf234QB7LFjJiJjPJ632GhKej3Ck9m59TtMaBAn4",
  "key1": "EyednXusjL8r3YMadCHMbgTt8UzHrBPuu7cJ7jM5XRSTN1WwdLF1HY26jRLBzYnPnnUqNuWXMrcRwMtpVroFF5B",
  "key2": "4gDCYDy1xmuLFnhikyQniU5QjuA5eCUYHP6mTwHZdTYe49SG1E97hyZv763iR1V2hCy97HyRhWUvYVjnhKjCvGaF",
  "key3": "5kDCAQiYtop4Xf5w8vWua7s9L7d7WdCDLcFnuf65shG6N8QH46qFFBsaWRXW4J5RWXDC7q7RiHgBFDdtigm1i6L1",
  "key4": "2MvCw1dY7tsmxeY6jzMvLCGLwNnvTpBAmbUXUHNFKUZCwG4NYxkLmbbchrQ6AYCoHsjdU86FMJtnEQA64sTahTdV",
  "key5": "5kkqxMb5eFPmyBAZH6nDiKnFK6MhznfXKfJofMsR3fM4KfwrBN6Z1ycAhTrqyuDv2go755aE4CN1A64EnvrLV6Wy",
  "key6": "5bBMUnGHzsXtWuibDwQ4oPVW9243fXcd12XLyMubdPGUSi5jRQAiD8dwrzHiBaHH27dCNZJVe81G3nCCnqwtbPx4",
  "key7": "3iCdDEsR1Ye7wHsKzYEset9CQGyUmgu6Adt5137rdzHfWVshk1m7kw2ykimHho4wSDDiBQfvtZaCFqCBFJa97xEU",
  "key8": "5B9ZhTsLqkmgaUcySEVx9arHwUN95zEQehFh4RLdNFWkkda7NvWJiyWpydXhRF4tdBeNm1m7KEgHVKix6GdUt3hw",
  "key9": "5X98KQLHDAFpuycfgcAV2WFcunnCFKFo6mjYz6GCtiHPLu1DxTEbsusykL8AuszxPKxtEECs6qWXTWfcZP2ajV2Y",
  "key10": "4wWAQxgffDy9CdQSiS99uNinKLCqKmCyZttmy2PWKN7BR4VwRzfsy96KGxtDP61m564CeyPBxgKroBzbiYdJruRs",
  "key11": "5mqA34BTKAJJM8gAV197ULE9MSQnQeXmSA8Yi9CDrK5uJgtPvBnCcAnit9QWVp1vXFFdcGH3disu8nJ9gTCsbURK",
  "key12": "3WWLvE8Vs4rgXvP64qDYXCcCDRjeELnULxUtnKR9QP3tmEXZFN1PZW58JZW6uGnVqL1cpdUtFLtJfZo9AUkGfDdq",
  "key13": "2iKwo6q6VhMwcTVMKckhpYckHtkx8wE1rZU8U4xFrrFibxdVznwNsRMtFa3iKmW1SnkSYi8vFVfeMSgh8AnUvs7V",
  "key14": "5p7nbjp56SCdVrLAe8anBZHm9YZ55aZJeZuV8ZHuk2jUcCHg7EBDGGJ61LynVgApiP6MTFbuWAvqg4L2xMHaU4AU",
  "key15": "eb7od9c5HCTmrP4qQM93TmR3VTLKnZe4tKyuKPqe7C41AQJcZYBqw1VPar6tSQmsRjQFCLbM4F4uEyiTRNR1DeH",
  "key16": "3Ab7URiNdSX7m6FDUpRFkN4k6F4WDyN9kowTp3CBHTbAgsJ5dFavfiTL1867phvzMEdfqae1KW4Lg8jN2697z8RZ",
  "key17": "5eZaN3kS2GtuNTtB6hgDqziNbVwhMUoH2J6AKc8swUUSmSmgdP1dX9aZoJigPCVCyXysCPhASq8v6PjDzFetfgAm",
  "key18": "62ppFCBkd9KPoMaYfewkLSof6fXxC3uh3CvxcmfpUwZERzBfTW8aDGjAqvegekaikb1MfQ7LenNqwtfw5RMavoHk",
  "key19": "57BSKpR6GWMpGfWDwoVEfMHpo87C13gDw7NQES5SkzwLptx8tT4haR35XMgViVavBEnuY6bCydLaXxUMz9yC59DC",
  "key20": "49pmi77RXY1krMVYbXRhF7UWQKAZAdsSNqqK96RrKNbhaQjLXfmSSYS2UyKb2YWfAgMyrMrrXiRYVwqpHBAkK88R",
  "key21": "2v1T9TfAQQdxEw1h26EtBo5m35EngPaBVLtyf3e6eR3d6VfMeZUGhryCAqh3HK2gUefQfeEjv4tZV6UdTn4UberG",
  "key22": "3dgSBF2osgurkDiCJQBk21UNERd1efHTGPxtYTF47Z9z7WxDL2fchbG92CV7HVjeSbTt8iEhdkuZjPXLZpNjS5fu",
  "key23": "i1LGzKyZAv3nqK7DU5AZWyDKLH9PCnZF2QyWvbJXA2GFiSLETE8pLre2aTPMcYYKLEhhfz7Ac7ahhnBVde8NbzT",
  "key24": "4pfcy78qYMyA3DuerCicr7aHGB8WAssSqcpoxnE9y93Pc2XUuzNm6XfRzPNPRjn9geBLZU47b7x8TLDHtqYWjvLm",
  "key25": "3bvWs9BMhe9RMR61Mq77T9uj216QDwdR7ordCpZH6Qid915DWQWKk7YSkp2NVdFkikxNBfigveBecbfp7qdxQaw9",
  "key26": "3zkmVpHCycU6GGgKcTN4BADD6SnTFGQFerPe5YSTSYtQvq3pHCJrB61eYK1kUrLtSZTqC1yBUesWP39PvZ68Bqso",
  "key27": "4dUtbgFVksx2tjnT2UP3vkkDABvobMY5bJdPN3HDGa3fg2cbN47uNYegV4tTBw9LfF24CaQfQ1iVGkmE8derRaFJ",
  "key28": "5jpFZJuhJymC8kq5NqGKwrCbZs3rnkb4iYPTYfdZqmtgLNyZHQMygAAcu8YeGh5p9nL9ZC2CPLudrNirVAzh9Sc6",
  "key29": "2vmBrTdqjrEJqaPtpfmpVrxL3sM3Duo555iHzTveokZXs8A63ijzrTrPPAHq4nBok9vV4ThsQbNvBzuxyTL7xGa8",
  "key30": "3GimkoVyzTNAwnJPoF39KcgafvvFZu5doYus3Jr6DEweY2v9XmamhQQ4V1rxSQ43LM8e9Jqw75h8NoPckEG8Sgoy",
  "key31": "3UzXdm8YcAMWu8aXLcWVbVvEXspuve46EG17Y3RbzuP3J3LARHHvcc7MtQ4XfdBBB9dTJcjRidkDBBiAnq91Z1sE",
  "key32": "z3su5uQf5FuVjbAiVHJMpQ2veqAF31EbfsvDzf3YmaAs9TAVYaBUwuPDNcr64mMtPhatbWu4fswZqNtboDdRYvC",
  "key33": "4FJ3EAMstZ2m1xTfLFQVa9xkWHiJoecmmhd1PJ9jLSxfqdUXNSif4XyUzsDFfWPTpngaf2fE2jdKiQjJMe2MtiSn",
  "key34": "4B2xwx1cUCFKAcpfpSMcRBW387ABGMyjgkbQVgWFxAiWf8wonQnzEQBMruSUzVjtmdB9gEGNt2kFMjojr89hdwCR",
  "key35": "3PA8fcE377XSq9euqdTZ4BauQwB5AVcxsGMPh9NbdZZZei3ACvsenUWwoxoa1vGfyNuLeYg6PPdHYtmenYcQYSF"
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
