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
    "gNiZNhcYSzSiyHTnpkpK2GfnNHWrcAu8TGhYDozrDSdFUzTJxLCs46SHgBG3GBadD9t17mt1dTbXzHEX7GLWFcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zivPrpYtP3aEEXXdFTxKp4Z8gKGJPXxxW48EXaKUqYaHHyvAk4xRzqezP4hCY1QgMtLy7mSJaa5R6hgxePgnAR9",
  "key1": "vwcLKGztbtmM5sWHBbqZ2VCobaZksgHDN6DmSuRtzGMVbQXxrPcVMnWYsNKLExcx2NyDfbNRex7tuvGjNuUZ5Ae",
  "key2": "5iBfzSMTTMptm6seS4b9xshsrUhXobkXqYuvosPBYgfCRmxppf9KsRDmT9vhguXPRTooRYo48YTgJySgzRwUzkbK",
  "key3": "5M23NjKu5C732dwLzmNBcvP6v2HG3cipc8VrYs55vBL6uSCMrWvxjAY7kvovzB7hFvQVYaLkx6kbZhmiSCPW5bis",
  "key4": "5qZdegMhNn7hw8JyVqKUcDnPpST4t2MwdWs8qroN1WK9UZywb7jWokMvLsEJshmooaSEiad1nJwC6WrjxZkZWtKW",
  "key5": "3upJnhYoTYnnnPScmekfzGZwDy6wxwQSmHsHRntBZw7iT7PMLgVRoWEg6NkxEbMrZfDGeFPiVoK7J4vENZjdB6hb",
  "key6": "5axe2Pcuf5Te5xatMJ2aG4qC2JAkAZN6pskQjoaWfcXGiPsecp2JtQV4abLes7k3PeGhH4zSAv9FS88DzpxX1hRD",
  "key7": "4CwHrDhms2KWqCTmFhN1Tdv2SaypRZUDBqo7JFnXfLxAibu68nKFC6WWe5UWuwaVduWoguM9g6imAX2t1r51tcYS",
  "key8": "2Q7xqaDbkdRNPwgn759Zz58Mfdq9QSktLGHUsTqagTYwM8AMCTFWGoqw1qfsoQ2GB9ySFTFxvx4mBWvJGmeZuuoc",
  "key9": "4aEmwGL7jj5uZm7614dzxv8H6XKCM8qDYyqEDVU61baGBpSwHkrRFU7U3LqDj1ieHeyjQvLGuXri79XVtqAVxTve",
  "key10": "dG8DabNbvgADGxYs7KNHSpq4a4mAFxwMtdQBFEJU6gJ7Wu5PV7HB8CXu8MgcGEKt1YL2bb9zjzzA7n9vKSiugXy",
  "key11": "5971nVTmk5ng4X2fFuFXQ3ZoyGPxJsicjYU4UFohq1PZxxV8cXzbeBnLErcoAo9L9h1WTe4fw2N88CWaBsYhbWeD",
  "key12": "4GcP4zGZJi9Sriwh77Sm1pWUNgi3om9bRZodkqnQFotSepq5UWVMvBjTsktYngmRLjKXCF5PYk4botnD4ZbEUSoK",
  "key13": "igBi5zFs79nTPstWE65vUA8xckvGAbueb9u3gsUFuYAKDbC7e31qMBrR4EvHEcSyhHTYKR4KkFmkUoogfkL8JXB",
  "key14": "3MfK4B7Q6m6rFJJpeUhC5wTRNC8Nz2cgYEpiXSV4WKC4WMfP39gyCeN46T1Podf1GN2tHVos7N55ZboQ7EebV2Hi",
  "key15": "3Q9kvvdjmoyWwseyHKMtKWLYxHgrst64NL7W85x9sXCvRo6mMQJFe5BvJXLahBArBUHpTVt2oFNPYZ94b38yhBdV",
  "key16": "567AQigubNE6JM3bZ4BTfMdLFeQxsWbgCY6MhC1n15AYf1fqB6N1yStZtNja8PGV6WH9WqYqFgmmD6ZpSCkobjSz",
  "key17": "5QAMfqnSpSs3QUQDZjbbed3aksnq4Fmgjh2Mkp118bswnsrwQi3jo9U7NxHnFub4dUcaLW1S9G7EEKZpd7nD2Mcr",
  "key18": "3398KVRM4B3y2hnAipgoaEUhfE81qYhnGdF4nevtpZu6b3zVjVjVT6qfXPSGVD3vjEFTMbb2FXCKhWL1qmf7NUcc",
  "key19": "46WKiY85N6pKW9fJdbDLDb7Vg42t79G6fw7XxM3Lp8PEvfCde8aCV2S4tZbRwPyEErqFZaovu9qV5F2zGYcxLVoZ",
  "key20": "4kEdTpqnR48L5cu3aFC1dYaLsYyXb4sb9vXtffTddgpJBRJuu6BHiU74vW5FeMMb5vWjAUP93rxqPZro6esjJQ2L",
  "key21": "bPF2a8zr3vrL8FUJNhPP7JUvBBjhx4QN3Kdx485zvJKqvgUfW9RsxMDL9dRNnkJKvZWsPw7Rn3y7GRnR4uePWFV",
  "key22": "4VDPa5RUhTTmG6SYX7zD1CS7rEEg4pxwxwo9rTdKvjJzdRZYbgUwYaxiHHuHH1kNvheVgEcwiZB1QQStw5onNV6L",
  "key23": "57rskinjaxEozCM1U9HyEeDYCQizynCUe28YcqE2c4LxyzzSo4zCgJB6PecT2CbhZ79cyZ5W2FMv5f1LEdHZuDiw",
  "key24": "66WhgNXvyv8nvQ677jXccx3iutDbF5SgWUqvfuh6QvR5WP8kKdLanrERPuHowbVWX1EHfoiqbek2dmFbFxgV6b8T"
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
