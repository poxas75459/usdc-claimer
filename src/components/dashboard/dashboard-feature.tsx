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
    "GJN53HPk1LWfQgQ559GDsiJc1zrR1Tdh1tL6LABi6V6vwxC618AgFRy5mDzKTBbVzDTsjVrTL3bMTN4NBxTgxp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TvkVqV8Rdtq5RTyH8R9xPC1QAsB5gVEyHDgEJ5d6G8hMKhfCDbaeGurXFiBGCnjcuuv57VVpGyTopKk4agLBzky",
  "key1": "2TCvT3pLfMUysnzsNnSVwMabGUHtWxBbCqHJsne51AKTAWS4Py52thtQbk8ZJWnt8ggYVDZXCAAVAdeUFtp6LqDq",
  "key2": "5qXXXetaDoz3hVn4MFSHHpjpH8yv7ufCL5neBjELrsKBbU2pa8Fiq9sQGj7Ps3zPcfimEVFdshLMAuNhAaLGJMci",
  "key3": "54FP9Ck719YymsKXR16D5ztpQbwmyHRjJaHYHTCy4RA2EFEhYSBjNafkesMH432WhgSeNL8fCeDqhFsb7LXvBNHf",
  "key4": "56ZBrpwWZPZHdWPKrnxQ9Wv3a4ooowJ2PAjuEb6M1H3ReFm3quctA6mEhHcmCwWzNWt1Mwqa6dy5VqRJsypgLi2T",
  "key5": "4mq3BG6afvwUx5fMCZsUu4zs3opdKFehR6poHczs5M4MEjuesAT9MfVqBxDQxpXNNdhGWUXAx49mNJjd1NkcuDen",
  "key6": "bfk7T1Dg8XJS7GmcK323THstxc4sPKzrbVptXu9bgdUAPBsNNxe5U63DasPMRY8jCJU3efUFUc3PfKPV5GUnvLT",
  "key7": "3TvA6Grf968KvxQSuJK12MSzRHFqUMkogVXNrU19qUzNE6ABUNGyTCi3i9CNfmsQzTd1GBPzt5TPCPwswX1pZ4yK",
  "key8": "665LZryNd4Jw7DPEzUhPRrX8LL1oQu6MnChnhTVDeDYsyr6gieBAwahSYKcB428TQoMNScydjHm4DAVFqEmEGhto",
  "key9": "33rwHbtr2DxxgSSi1NFuAL7oHiburQPCnE4yVE56wQnfWs6Rr6h11cfvVSAe25hncdbAJPYiyTKkMMWJp97p3Aer",
  "key10": "21cozBW6PNBUuai4uEzhV5JbXL3BhPumdJ87brG7P3Jir1ZnfrXHE9NRCcYyDzAdqhj74Ev6tvGnn8eRyVEngE7q",
  "key11": "43rsm2zzU8NmmmsqSVtp15uEwsNNEpsi7XHNgANMfpEuSLhBTVGqEzSsah7KZLsU1gULZU8evk9FaNEBwZxaXkb6",
  "key12": "AzyQcdCynCFZ6NwveYXiXJCXG29FB3e1cFcJ8sy3eHQBnqrTLanL91gH8Tn5b3SqYsgisvhuby2Pwovk2MQbV1g",
  "key13": "2XGjHwGhopiLGajvrX1TXY415vXbxyxW7zhwATaFs6oXU6LLzsJcu329T8uSEMtgTgN1yq3LUQy7BCjbBCn4E2ga",
  "key14": "3YLZZPeAAkuASVSYnyB8JJED15VcqdWDN7XxWjNjr9BtfXa9MbwUWRGGdt77zJEopPva2yHKEHAJ9db63qBRJe4P",
  "key15": "j3APoVUUpLZ9AgrAqPcd5G31HhDaDpHa1NASCWkDg9j4FtnYj6gykYpqxcg2UJ2TwLig1pFp2X2nfJBw88u8MGp",
  "key16": "3p581FdqxR3D2uJSuFMrBMgxvA4uiSZ64BqHJvwAq66UPu1iiGq4M3exzHgnWA9adsuWoU7ARwwvpnfjtJDjz97E",
  "key17": "2v5LttUd59G7HJrBq7payhoYQ8qfSvFU7Y9yydJkmHcYZa63xMDTTYGHwBPWyARj1FKbYZ9gWp9ZrxSGEi1qkMKk",
  "key18": "3tLxNLpXMyqnQYGgc2MnHx56iiqbpDuABVV7BrMAUK1GsvjYNkYfGPNZRpAYsdzQpqAX464SQXriXPAphRgE2YR2",
  "key19": "2eZ8L9bJGQB7eC2zCkgCWb9jyaWHMjfa7gvfeJYrKMKRFXTq4T12XMQGYghqeaXsj3KYNLb3EJiRnE535VgqmFwv",
  "key20": "2pqTg13vWR6HT4uAqeSDYJhJcaxZ2kY1iW7cdT6J6MAYuhPNkB2D9TYsn8HC6xFam1H9K2qGRhnQ8t3mPsrXj963",
  "key21": "3MAXbYFuwSi4eJyedkLc3bDsHouB9823dU5RDeAQDJofdzz5woZpxuxH4vU6hZn8RJT7tCzTiaQm9ebKejBiE3Uf",
  "key22": "4QbwzVQQtWw7zn9LzmeHJMEHXpXeu2CXevcUmyGGzRX7SHR9W4yYXTEBNK9YPCpQK6tH3HQLwJ4rNaxShfVMx7wZ",
  "key23": "FxJRyXDjZyfT5ZYugcYPxHPaRsqWtZG3ubg6pANMf8CvyC1PmfW2mTXvTLhGboQ5tH9zCy5LJ8NZeFhvNXEWaWp",
  "key24": "JHKFKe7DCLSSAtDXoZkXwGJV5S3VMKZBpoJAwKFHdQAKD6x4kLUFrs1nznqwcT9cVHWZeLk5jCoKQyGrY1V1gFc",
  "key25": "5QAswgWk8zHhUANrWvTCvk7tJWVFpeJuAaxWwaESAqAnxTaNFt9b1cUSYjA13zooxoEFDJtVrEegkDS7bJpvYS75",
  "key26": "3YVYjUWAWHkhfRxp2rAMgB4sUp5veRvfkRANh27c4WmaZFgBu9iaxaE6jYVNdH8QdCN3qNPDfxprojNRCWT2LXpS",
  "key27": "371AtyTFvorTWdYAxByfBhdymhJqC9MykreiUctHEBALb41npXxJJJyeQUjo6otYajRL2MCwkPZ1GcxjoeK9L87f",
  "key28": "5vPyM8Sp5LtDpgf1k3TeTfFK4rzFn4yK2KXFStcqTShH3AgfNPwiA7MDMu3shakoUAgupDoc9mvw1RjSShekX5N9",
  "key29": "2dnKtmD36f5UaPDFTneWhrXdnUsVaccYdEtzVHqbS3h6JHYhixLyoyLjF5LaorXw31h9HZ4vQhhApV3oRSq5njM6"
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
