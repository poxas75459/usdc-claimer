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
    "DRMESnwdax1BeULreFefhAbEmKrsAuUd7jmVKR6mHpKwHpPG1rknZ1LS47ZxQTp9mETCrQxKU2PQcmMBRHDAxWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63xQJ6rDepS3WtYeXDWvD4Fgex7MZY2Ge9hkDq7axHRMKF68JiM5gFcabmWvjKoFpzVwp7jSUgbhyYEMzWhuKp6Z",
  "key1": "cx41RapsHRPsfqJRHVCgD8E7h5YyYCzcpw2kk4PUb3vRJjMTM45rLCGyCzjtfkX5VWUPpjE5LMErqkAu6gr414n",
  "key2": "2aYfgTSKTCDfxir9skY7RPzwMk1cWkEur4gHnQ9hGfiWqk7bXuQkrUxXd4piKUesQXZqyHadLf3reY2VbWmY772y",
  "key3": "5SEHf8q12EsbgRTwuVimZD4xv1WmyWCmSPcmoMCPzEW56h6XQ7pB3HZd7sQZqE65iGEhVAT57aurnX2JPcov9awm",
  "key4": "4faaipw5td2x2MWVsBbN2BHxdyQk9pRccu6dY153XjqjpLAGJuB7Pcwv3Na75kXiKiTFqKgsguXV7PSLLKosgkp3",
  "key5": "3bmBdRo8dAwoF9S4pDzkZpAEWkPqWxhQ4a2px8V1ck3PBTZatwwkAmffiBR8ZuLg6Y92vQnwrFLPMNw7u8eVZF5u",
  "key6": "63KNm6wDCiUSudSyQUjzoyqQ9wC4hsh1ny9L83DE1LfDCkLsd4z7dHebL5UqCtofejuJPFK9q85bLTEHZAjXRKrX",
  "key7": "5CMWeFnCmqF1WfdsJsKmLgjirWJMWRBwM2titVTFPkRQzDPXvnABp9d9qPUKHUMv2ZMt42Pw8qCmwA5ockJzzqHt",
  "key8": "2R9j19nv73RNRfyEUvTm7qx54GsEYUr4CtyPTefmb1Goe2hTgjEo4TjvvYRwzb3zyv4a18tqDCedNx8tf7oLiDzA",
  "key9": "5ve2uBAP7fmbbkLzG1m1WAbU1TiooQ64VSFz4UftTYdNCCgHGmfPRQ3BDijHnFgVYeGc2nMY1f2qEGhUtvUBv6SB",
  "key10": "QeUpZUpYbZAuPpRQGYHy92AJCbGpCWPSQcasanrizv5y2828YeHxkANbHtW6g9MzgNeA91ukum5PZVAzKDV73jr",
  "key11": "3TTLvqZLXBkYsdCeAkRPTc7f5qp9BHYckYQZMhAi7izs4fjFsepPpQeFrevA5aWyaoVguPsPEtkE4zqKBhX5uotJ",
  "key12": "4aTnJo78AJmvpXPcqPZvoKTGWqrWPiiR5SmB1BB3d9ZR3nufgQkJiSUNodhrk6PXJk2fVftVZDyMvW212zrLXTAN",
  "key13": "64NiAhFpGuAJstthcykSGyjjTuXXRzakhddmbsgh5LLzJ3TCyPp37Z2jm15k1RaurgoGozDfw9srQnwF3szbNprw",
  "key14": "3djtT9Eme3mbQGG1h4BUZVTCsv3jsWobtzL55hziX1AY3ij96X1cJMcUF4LdEPjYAD8KNnQAGLTmS9DqPvURuavb",
  "key15": "2fzCdCcHat2AZdVTPEt8GKreBsxKwE7qmGhYXvU3KSXPmzJxrEmFgYvJJfivz9eSQ1gMhWv2b4s3EAfbEAHah2Wa",
  "key16": "5wXrwjpLDYprnp91WXAMGHmXjrHDjQ8kBaNXaWLRBWoJ7qeoG3xdsm8YNdt6tueuMN5JQJqetdFYhgEBz325nJ9B",
  "key17": "2f9qhp6yq62n899fDi1Y2SzAeAD5oQJELPMdUFmfCnJoKzqXAozRKVTPg9JTPPKVbXBig8HggUqqrTvSLrCJYFun",
  "key18": "2wyXJPRPhNNFwMrWHrqMRd5dvW226TFWmUMBM8H2wsrRF4KJeVzdtcLAbaBiXYVUmiNVPBmfmgNJNq5yRAX2FjXD",
  "key19": "3frH877KvErwRLDwUtPX9rbB6enVoGstywaWPtniJRvENGs1cG22bxagXHXaL84hKNPHnHeN8KmvfGYKETHrV8YL",
  "key20": "Ukvq9e14HozBmJutikYY8mSUr9LJsqFsbQMYa4nGcCz2mVU6hYvRGBmhjHYAgkPeodhS7ijetgefvm2HXhsDQpq",
  "key21": "FTBQHQYQPu4wNKnuWLCb6TooVUQ1r4jfyXJ7j3r1EHBFP6hdMG2u8omSqeytmjPDp8m1h8yyx9JFGGofzG1ba4Q",
  "key22": "5JMo84X4tVYvJghQHYCXzcxGWcd9zPZ3K2RqV9KqZ7hcK8C69oim4gRzijyTcasuEnj74h1FDaArKQUwWoutw9gP",
  "key23": "4J8g75uWi8yznrEQv9VAroTQ1NLNpchVb5ErCZvsR43VCuopBUCYL5MZgthW6WAcxqcwNnLrCpumvYyCnnpyiR4k",
  "key24": "2aqsbK5onZwTr7otsYnskRfTGtPieyyw8ED1esknMPyNFeXkso1H6ANdH6NWUYLxgzPvpFmP8q6BjqHezixypp56",
  "key25": "5y6ChJhYLF7bcndUj88Fy8ePZJ5sJEtohFbW4Wykf2CsUGFZM6wMP2Tdmvmn61AWuM5UYZiaJU1eLx9FPdb1V2Ay",
  "key26": "2XSvU9gCT1vyEYhWwU2zgBWY8YaUF1aqmVh7bhh7BkTEUKywm6hPiRvGy1E9v3WZwv87W5FsAHNztBuz6PRXNpBM",
  "key27": "3sx6zLYR3yujhun8Qywdfd5EVAUbk2WvXTVpB4sjSY6FAa5PrWL5KZ2a9GsztCQsZrDES23g2fXJ5tW2H2Abyxbu"
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
