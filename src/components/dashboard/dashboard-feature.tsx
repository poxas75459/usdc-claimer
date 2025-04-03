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
    "3HgsfvMvfW566hwE2ZX71sqFydV3MZZu4U5kRuwAQRPLvGLW2QGzMjonhUmNANSdLZ4cy5haWs2VHwFgMdYF8YYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AY4craVDqvyKz38iK8yQp4rKozZzrEQoQ1jxRL6U5KN7WyJaLmWU7uxAWmDdGPwKVUupng5XD63JiEdKV3TJ42n",
  "key1": "5Q15hQpgYnrwV8qqo5jrcZ2zXZQSap9oyUUKJPEbVKMGHVhg46dx8CJoZgUmECQeBB2gTzF1ENXHA3L3jeE3cxYN",
  "key2": "3QB8eryaa517qKBtsnZSqm4vdTfY4MPQNmTHDUd9hSWRCh3GBaiv2cC8N9ZJLS3zomAWm4CVmNf5MUYEJsnbVzbT",
  "key3": "5GCEiBpqp7fqTkyHriAJmu4D5bbCnJqSv1oUUfLfJkiYASnCzuGceqXcjY8MvYMyKiu1rqWm8pNc1DmCcyaEvnoJ",
  "key4": "3sF7rPPAt3H8x8kXDmJ7RciJc3jLUCLGP3im7csY6yogDFkyW5czd5fp1rKAgDHrSWWbrk7wtq446U57nRFzNguJ",
  "key5": "3ptkPcNUhxn98bWY4NKq2vvZZ8nyEHPfzkmYHpnVkmuKbman7UBZd8Ucn4R1w9dxitSyK4xk8b2cjXpRuBF5Um9F",
  "key6": "2oYGbR8zkwEaCAdsgXCRVz4R3aoW4q7X7qqKch6hmP8szJywiseYLXer3DnGM445SHgAWHTMyaPpiSAn1AFEkanf",
  "key7": "HmyWPT4Cp6dBYnvmx4yjXyj4FPP6wHFZDsi6QQVsLrrF1ACQaP5FFPXrmJMq9rYRsFPbHzvPMyNG3V4zKsf7upX",
  "key8": "5wWGu3DqmtRvu35EGB82HEs2cMhiXYhYkMUHB625ZL4kR341yn4q2VGk7CzYtCPrneC3eXkrTcSp2EdZhNrXMPuA",
  "key9": "2zGyMvLJfBxD1qbrrNhhj8S864jRhTBSc8Eky7Zuf7tRVcrxe5SahADx3K24LzKkLpi2q4wjRvAzarSkM2AwY2ZH",
  "key10": "3ps9jYzdsX9886vMgJwS14CzjJq1HtgWnDGr6A6ZSPEDUrLohUS6xw6tdNgzSRU6JRkW2ANksydyujwZwz6JKwYX",
  "key11": "2ar6ZDcZtBCbHmFr7jPsyBjqhyWQqUAnn2Cp5qpr9wFbBsMRH5uAN5puGWwHTnue2EhEtFDu1VaqSJZFZi2kqMPZ",
  "key12": "31tSPgG6w6mCdYeJRokok5JuyW1EHnVrd96VoaqYJvjmVz2yTo278Jj9pu5JKWdPMbBNP6aagWuvZNwK9jtKBpYT",
  "key13": "5PyjatY2cWSeHGzfz5mrUb2Q7hU8VJP4i9fBTYAE5sgWQGjrdSHQ9TDKY2oqbEuP5qBYrxMZGKRMCCZrp4Qj93ij",
  "key14": "x83PumBkcFQuzFbSq5QhoJ3PWoHekHZRDNXxaAYFF67ywUn7VT7NVJcPJpW9xJATkKGSQbU9gCxDsgar9FLj6uj",
  "key15": "UvWppEvXyzYE2rDyzo9ZYoe6Xv2MRT31Nzg2KjxP8Wtw2pYfNCx8jPyvDfdZ2eqt66JLdf2c2yyumyPAQUSf1AZ",
  "key16": "9cXcBvPW82cwBDBit86PQuw11owYpGE6BFyBVwCFmYTb4TxgB1qpGhXZRQ3ECk6y3JZ1dEXPk2zuCBo87APmFrd",
  "key17": "4cYyE4976d5p3YcracLuQHP7j5FqesW6XYbSynjzMUiEh1zghEpadgt4oiwE1WNHBj1zFp4XB7QDnFroi9SKKsZE",
  "key18": "41q9F6SnTFEc6WVKZi6JTjp5DzojUyW264ksFXDWKpPM7fooejXyTBiVSph8DSiQoKgX11AhWuB3xtftrvrC5gDx",
  "key19": "3g6Ra11TMRoVDo2z8xTUrCxD56Uu2r5bidiYHno4g1BrSkzwveX3TFQ2nqHBALd4F215mC3AZEFPTnAuhkiTnwPx",
  "key20": "49fW6RNwdWC5RZjZAh85ghd5fFsA5sRrTBLHve8A3142P7iRkvTKsGC5zNJzy3pHFRKg4Rra2JsCaVvS8XfTG84o",
  "key21": "39Wghi7nLZWhs8PTMuApRaXtrdvHsyMeuphLJv3ADkX6A9ojbNYs2ZPSvDfV5nXXR4mxrHsFzqNgvQYxNYQxSB9j",
  "key22": "35F5Bf2qMy2Wchs3VgXETrfN9oJpZX18A3H6xjPiEGzNhxearQg7HNDaD77ANsK3YLQyaoepgPk1wwPTX37Tx78r",
  "key23": "2rYf8AQ3nzPxXNWbW1zCh6rqwEJQhvD77uftJCupetPcCo32bRmeQ4vDeHticwUayH1hokXzjoUfvJWRKdXw5zBp",
  "key24": "2JSHfa7NwMgcQvoBYBykEc5FiYK9EaL9xvxc7sksuzWF8GWbkAFUKAGK6Ysfr8Gts43aKVYKcgGRMBKCrXLtu3Et",
  "key25": "3VAZTDMokkawsnZDcjmy6VsZVJYp6QgowGtZ7vVzbYTWVHiwNjjxF6EszAuLP7TcX6E1MKBDYRm4zkbtgVy7zcoW",
  "key26": "4hGexHppiLnJ9BXHfVbmHiXWMWABhES9S1GwnrBBxNekM93wF7x8rLweNmBQnqcQuFHzX7qwgzmzVbHn7TM3z9YY",
  "key27": "3mwbisBY3eBHbZy7R38PVfMPApjYWzt7phXdesEok53FJz2s83wNwUbEAZVW4hmmYuMiWaijx4cZLWwSgdsyuVcq",
  "key28": "2XNhFUDYVwddVpaQXPibsPtxvJWgpnLKWZ6kUhJBodYX2yv2NHtZJjRjCu2J2Hnz3U2gT6PxQb3yR5mFUrZB9YXx",
  "key29": "3KNhM4tpWcAd3AeRGPtGnwzyRHP9W626bxnmSqahatSd2jYV3uzSYNy16eqzN8ZWAvqExoyRAnwkuN7Quyw7zcab",
  "key30": "3osbbiejPBYzJgEDJ5aNM3mXzuSuo1ELxTKmdZJD56DWuMrkFhvWqN85nyLZmZvRrfYfNR2jzvUUSuQimLDKb3wC",
  "key31": "46f4Y6Q8vt7CYZsZFjFAzqbnpAhzqDHtxUJEqYMRyuUs5SgN1pW439Kpf2jm9P2eYQu3ZhHXYPvqTtfLmwd5gGTZ",
  "key32": "5cBn7jy1QRYDBFwm7FcP85tfCkPGDJnQYHF89g1BgeA4yh6LEevx58hQbBk7HuuTKTeYbfBzESwLoW9ry4MzQk36"
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
