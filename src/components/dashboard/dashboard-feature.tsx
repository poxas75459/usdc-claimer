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
    "4hAtPnJAHwBm1QxuZj1qZVeTu8fyLNuQ925RNwNnKudrEcdhpNJVWHzyQHfUpHfZvD7GRTd3G3LZBW1bBvVos9Bk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hsibjwSWA6BjYbyQe9TK4Yz6vZMRw4s69LarUDCPsANTZRtACWF57tNDnMRgbnmuwLugXfz7D47AqEotZWYbauY",
  "key1": "5cNNGpSfuH1yhyDYHVzLDdrf7JMwxEMUTsc16rVMCbsgWAE47TmhJ3ZGb7b1rYx4gcHNeSLYXzYVtGCeoP2B3Ck8",
  "key2": "3utY7eS5eKdUSzpfvxvYEHDGq9zMnhxziMCC1gxuA6FrS54B5zzX99nQXLEgifFyi4RR33eJHZNJHevYqLUz4sYq",
  "key3": "6kwdbVomx8adUCK2uHEaPsJNz7UcmvUH9wv3NiG7xQf5YFRUpyx3kNXTEv74n4VovtT4SxcfSj9pXvbEHLuu6q2",
  "key4": "45FMcESEbTgdV3JGs9zd3PCJ3TFCWREhZbj3n2jWz3uZWiAst3d8hMXC16tYXJRKDkkvpEhAFi8J8njw7qbykq2P",
  "key5": "2Su9TfaXEK9hovkvfUkYszdB6XkBwRK3ZqeP3SJe6Tb4ZN7E7sC6fMS8tymMMVtBKJUywz2BwDZAPDWEU6vL1NQ4",
  "key6": "5QArD5uRfhEmeTX1xmxAN4LVF7wg1viazaS8S4hLJCdxFnme1D9mKMqxpWrzYMkVd3BxtYb6pMqaPtm7mTrU4NKh",
  "key7": "JHzA6RqFeDsmyghaoogXwfyVL5aaupg9s5pBzGuFhaYdE4zMxr4xFWQJm4zPxG7rcTB6A24hGwZFLApxSk7GWA5",
  "key8": "4sdcFjSjC46RGhc5afdAwKyoSKS1EfZEVC6p3Cx2Fmbj1Gwp81PzLb7QJqr7mcvZoVJkyUcNFsqBLi7csb1sNBRV",
  "key9": "3LQKBhBhbRxKsS8x1orqwUQMEJANcmpp9eVWiCaecAJBaR9Jn4V9uv2Y8nBMdY34c9UAW6U11DErEKXQqyafSm7L",
  "key10": "5gQ5UC9SWuMX6Durn7Pf4zDTT6oVBesRvzHYNpxaBUKyC3mPNCsC6DsoSPaevdTXn6e8DPvtZrGxhdn69NSZv2y6",
  "key11": "3CZNfVP35rb39yoNRqA9tQ3Lsk92bMg1Vfc21KZy57pk4MQHh5KuDqorKDBeCAaBpV8QvRLiAGGJTbnh4eFThnr3",
  "key12": "5AdY5yrMxmsV8EAnsBCgTsZDRHSXTq612bydVFv719gzvmurW9y6Pdqu7fe95e5hmy86PfQcNzwL8kuTtNWJxaJg",
  "key13": "4BUuuxYnmNLhqDhMewBJu8uK6T3uMdrvgptdQCmPbPj3qaxRShg9hkd1MCHf1C13hQ6bHYczSHiBZuruK5ht3B7V",
  "key14": "4UeDV6gHkzDpjsHtrtdVquUT1WUfHBWmJq6AJXuNN8ZR4T2DHorTwKrxQDEGpowd5SjYM2h3wZUWvhr3DjgyH7UG",
  "key15": "2UFTwBrVkp8h6m73EekTKZGwp6S7DKkn1X8uV2c9gLYxe9jn9LqALFRqYQz3w4eiJpTNDtt6GCBeZ3WwcMAWiuJZ",
  "key16": "4W9ShA9DNMG1vbM8ZddZLJt9xDbzxoEGx1vnYofvtispkXLe8z1qfHvLkExuhyBxvGsaFL2TkK9Qi8YuZGjT3oSo",
  "key17": "5RDCQHjcTmC7QyvjQA2m58ByQsTJERk8Y76UYBZPgezkwJ6WdX5HK29JdWTSwZdXxxiLjF74bDjLHD2aYwjDG3vf",
  "key18": "4NLdUbUBm7ujUoe9E7ocWcWFQdcTXQfVPKBMdCC92fTRN1mLaEWVHYSUiWTZ4XiCgfF1S6DGgXDdso6uRt779Cip",
  "key19": "2jb3pViLVbAhQSZo9wc9RW4eMH45sve1DbDfXwdhouPfZHaN6rXobakv3aZ787DfVbK2ZGMJRronqKb6hQbE5X8D",
  "key20": "NxjrGzoHvRXzUYpiryoGE7vWewpDvDUqGwbYq22BxqiTeNksTCUu3cwEqJtXF3pdD5PraWKshyk7WC62E5gbVay",
  "key21": "5ELADoRTQPdz9sDHB9gPekheKHT6FEawt5yAGAH7MWwY6F1ojnKqpxVPD6pQoe2KBhw7ESQtF12nY7EmieXom9f8",
  "key22": "YfDDhAwjSmqzcmZ2foBovn26woEx31B48ynZwJR5DqfG45Bmk3fPXDuJMTRPJRoP9enaHPu3A6YSg1ozTBAZ8Qm",
  "key23": "2PmasPAZzNTQs3U75A4hGSwokSZot7ANYUag2xJ4nzKRiLWmENyBMgtqSV8xLqHZ3Wu7SYGrDVzNR5ibFzyDht4v",
  "key24": "5RAJJGk9rvCo3m6wizJQZ5AXHUx7pnN6FZn8ovmt33oW751VumuSyi1kQ5ge2RvNzZSULwFTf361gGvVsJSwayaV"
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
