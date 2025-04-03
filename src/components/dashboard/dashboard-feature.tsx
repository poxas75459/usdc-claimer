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
    "4zbjH6JmP6AouurbfjfYygfVg9a7nwjv47zfwb713oEnjDSPVJRPoA78t6JMHcKidwta5ZTTMFGjv9SMRMeu2WLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UXBYeBR7UCpZRPT4LdiqzpoZxYXydXA6DtzeSr86RmPS9CN4AEeUtWAvLE8DxWTZQPRioWyX1tyUxEnkkAkQZjN",
  "key1": "22rFobCpbHqDMhikE16ueiurTko1ELAGSMtbQ43mBhYtVtVKbnxFz3bf944URPNqr4LAH6EiGdV7Ekh7EJgD7sZB",
  "key2": "2ktL4augbinmFM67sJNeqJNaFkaw7Bgw51cgtiCmQCkB7aGb4P5RjvEmVZV1G76tKiZnqooG3bEgc2XgPUY6crmF",
  "key3": "5hUvcTw4sNp8qjgC8ioDZhkRD5aUHDCmoj9YygLMDNHgPzK6BXpmaYDMBo2H3MW5TyBC4sa9rAN1BxYaDCWWxim8",
  "key4": "4HrfDGfrpdH7ugd4beVzHrXtjmcYu4gnW6ANPwKzrwnF431MK1LUoSoWWV2x4WTfDjrP7rZAUwb6jtZDCUPnENME",
  "key5": "3dAyisVMUrwRHVZCy7stD3uWEHVqgT5BFFXWBWrnY6CsYrPZjL2FfHpW6gGZK8HqWEdbZA4idTjwYs91TMfvY3qw",
  "key6": "2NZzfzWXnvnjfN8bUE7Mfd15Ut7cCfNNJD9q6A2QpjjbwNeiutSytcafuygA2QagEXVzBqqwCxbNa9SgZZr3aJ9N",
  "key7": "63SRsHR8Ppk2mRMdGutxPvkxipn3Pf2Rjd6oRnWft4nTrSzU7RCixcw6n8PsWTXGDTTt9hP81HoakeVHe7vayaXG",
  "key8": "6Z2E2ck4rDhBq8tXAU176jHHgm4K2GzZYCPfGpQpaavrngFvieVrTKffh6FphD7tCdKyMEDaRdWWGx3kFJgt4L5",
  "key9": "27vxyXyAGJrPYdG2fTKoRKB5KYyQXVzwNTcvsG1vFDWZev17oWmpVjzdF8eCkM7o8ZznMoQMyz5XTZP4Wwj8wYev",
  "key10": "KNwDoHzhavxx4jRH9BiB7nfYJ1DvGg1BDhxmKigRV43dD5rrZqQCbVv5czLXW84CS1qbhh4E8o1Y1sGQd141X4n",
  "key11": "yddageES7a7V7exDaUueB6RzEUhWqu9y44MmZ9VYtxwmTdu1z9SE6TRqANKvJPyqPAjc5cQHcKeVNJznqxK9GaQ",
  "key12": "5n33XUidsGowQmDhmHPGa8m15cwZXPf1oaF77yzQJpwHt5TsjPzkMz1Eu3UDmGiokxNY4ZxAkmgBuRFqHSrVx1cJ",
  "key13": "3u3jewag9PFRp7mumvKvip93Z4vi9gdCNkJa3VaHndUXHFwHMAwbffZYeD748rKxCV5cFET6pkR36QAwFdSoGPrJ",
  "key14": "3VwpX2QMnaMpUPjmud6kh8YsMY9KWXtC5JhfmZdrxruJr6dTDttA9EZPbrwrwK9oPHD4CW4FX4NAi6sGcpsRQuMb",
  "key15": "2C1xpteRgGgXX9sPK6NduUSKR8zYC2FifRwkXqfbQZCwt2kuTC8Msqx6nSHqNw5UAkvEfMnihFbwRsuUuDGthFhg",
  "key16": "gZuovdmKAdku4F7dXj456mPRfZkRSKpe4bGdFY5uWk1JG1XZULfwnmxxG3AhG349NZPWvCMNei8V8JdxS2mKWAL",
  "key17": "4DuX1PfgLFfbbm6rvUARAwSn2YY6C7ZET45XYHowKzCKBhpuRpx4NrctLpKbzn4JPGuCW8oMEnPydGXs62yHsQaE",
  "key18": "EiQx6T4xKuv8R67fFycCsootFMG7UEz65qK88ea41ujZvwSca9FtfNHnZFNAa82SZUzBcbCvVwai3z7d6Uhxa7w",
  "key19": "2KSKvCHRN8vdRcXLSyU7RZ821A52uDVRa5v2Kv9XWiov6sAYj5KQNCjt5CrJL7Pd1MWR2SSu9wz5oNPzceb5AZgg",
  "key20": "2fC8UbakSRehAppccfD5zqreYKJA7wMtHKY3cpHXnAreEPVDe4Do3zhb7DUKAHWX67vi1pCLkfJPoUVdkqqnzHTL",
  "key21": "Qo2gLFt83HGhbkLUcRjYtBVckEqasngheiK97awW4qpRXaQnh5eVbxgerfRLfYxTtwW6nfwihhxqx8N6QRxAw25",
  "key22": "2rVpQAXcKdsAH4DpsvAoZFt7kWt9mBNdHrzmrmo5uyrb8Y54V7eeAwbafTDSwWoLjGH4oykFPyMxNweHPVzFprY5",
  "key23": "55ykVwrRsLa7gXxEWGjS3uRLw5qY98fgy1dnP69JmW6JuSZSPCj2W5wjU3vFyvKZSn2sVVvyn5jZcvMRvYdr7hv",
  "key24": "coprSwSWx7tLbETNTrqGPE6L9TUuTEb3EAkGMcqyRYKEiKVAHYiMYho2wu85Y4kXPTSxnQCAbecjJJg62oSwvAL",
  "key25": "NWJNUzZbuz6j3TvcdPcCtKH7cUUS6tfFgVvgVdJTXY1G3UTZnURKNHcCJBThy9dJmznx1KmTs7Y9XThfVt5h49C",
  "key26": "PgFRwiV3nWnJKg3TKuH32SziawPMQJ6ZTnjqbjYiUZWCF2HdxdKqRTvzz7vG83vDSH55H6V1k8tDZmVXo3PoGQz",
  "key27": "4WpuDbViyiDBohGqoGzhfZ96D9fhXGkBJcN2GNVKTsWSe9ibDqxUyKD5aDW7U9J6Di1Qd7vBw3qXXhamfECYRJ4A",
  "key28": "41hQYjtPaSYfKmr2pC1wzVcjG2HFHFNPtf5BLqenTfT8QosBxGTHcurzftqhr7kYQPmG52fEYaSMbTAkHh38VjuG",
  "key29": "2TBoPFUEiHdo8VoWb72VZzTvYhfie5uFvtHvXgDMvK92uwuYMMHhBkFzk2DwMzL2iVfudwMxo7iBfHWyVCRhqhSS"
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
