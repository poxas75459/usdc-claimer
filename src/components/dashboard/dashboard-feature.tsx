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
    "YV7UgjJv1sK3WJu6bkNvqgHJEGzJ56iCMg6EyjRkFR5G2msZ7186iUp8GM2v3RBo9VBDoS8sCG4JQpTBdUC8yWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61bqVnCgMCni5B9pXcRUvdCmowEJ6r8xXW52rLwEAZUSxm3k8F7TMt96uWn3ALP4z8EE1vU2pRdxgqoDqqGZVvGL",
  "key1": "r5AkqAbQeNEoVK9nXHTPVs1KGZZ9zuRRe7scmh7KgnihddZurU3ZBDATLbwzxuP8KPHNa226U6j3WycRCvguSka",
  "key2": "5VjKoZYqfLxM9eWUBPwpiB6mq5zAEcUEmDy9o27BKoW3Pgpm1ZAFHZjTuyQw3tthXDyW1EvafF4eMigMsw7JE7zL",
  "key3": "65EDHgN8YnHBnvwK7GpCk2CewxNcq9Fsjig2nc53hvqEVLvZCy75znqzAd3EnWnZfavYXq1pqXX9vzQHmh3rXfFW",
  "key4": "28DYtBkspF3sNDU1qd5T2m4AGvQ5SBWFQyV7hXU4xFMZbEFmQQ1uwtDyue79UivancMhoo2fSAntviBFGtfUyD9c",
  "key5": "24sHZJ4e3CS8t2NjfBv6qAao3p6T4cxGfS4UZcDQqWxhkJzXGp7ct5KM43jfYYjbnp3FSaHCLppYkpqhd4oznXdx",
  "key6": "5cvhYWQ2KTSsAdK5aHzBBhBZVjSUEzP8EpRA9Qw3YdzvMYjUKLbaPLuBzX16FL3bohJBu2mqybuY1XP7WESBi8uo",
  "key7": "2og5grKu73qVN8yuEcpEeKDxpaJ3RAaJ5owfwp43RUrfLDP6tDKmscPbCAWmrBos48snMBwKRWGeWjBqKkzrmSXt",
  "key8": "56y9XnG4cfYTQ6etCFFLWGPUc4rBTECq6Ac3LJ4iNA6fqXQCF93URGEBoQTC7b2RAb4t5RuXjXiFeoy72x2xSwym",
  "key9": "3WaExdEzeQQCrufeWmkc2K9VXfqapSD5ZYu4gSYGF11fwYmXmEFRzpHkemUEq8FsNX8BMzuHc4ajAek6FsJ2s1Kx",
  "key10": "3syYyypYcUyDUW5sij3gNv1sfbLUZ8VSD6U2ywjFbEsMiVug4TxcgxNe5Y3Jp3HbmwECbKjdHhpUa5aND23BBPQR",
  "key11": "2XwDGGQ9XLDoP5tRW2DB3m4bYbPRdva32Lbdkg3udi96Akpx5tM1Rd6x6DmQobukNPvQUa5dc3EHHPzrHFCpu3LC",
  "key12": "54HrY1Z5DGbaw9fYYuc7CRU7qTY7LxLbqvAjyyzZ46e1j9vL94HGivxaGNCczgKiaB8f4csMTg7eCSrTsYVdn8SF",
  "key13": "5ZMHyE9YD85EZPLj3kndJfQ3bJWbTjTRk2C27WHYaRyid8jpNyh54UB8xCqiAKPND6ZrxommLmarLs4bRmRGZQk6",
  "key14": "4BBePseFWpzSmehUR9keaiH6aSDbyubq8SZdUCM6WwASRZVc6HAxQCtMuuvxpWucb61RWKUiN54a2CJqxQKw14Ez",
  "key15": "cgKfxga1cUzU6LkdoVGofGYUoEz5ZYgw1PCqbbhno2YdaLDitYqd4PUtLyJ4qhfsPo9giNJ4Fem2mY33hZ5z5es",
  "key16": "V1nzFYXwzMwAH42ciPPLYALdowVvmcuDgcPk3L11wM7zjyMrmg4AY15uZwFwt3YbGDRKudAoznNFASGHscyFcTQ",
  "key17": "3SReVJxBX7SApekSh4agyxWrJX6KTLFZFK4u7izpabWxKaYhZH13oc9EjWGPU6m4z7jjKi29g4CpMnRGZza6cc4g",
  "key18": "5ZYXQCr74kpkPPB2DsaRrkVQeZYTJd8JxG6CyvKCpGa6uoUfU1meJ65BNwNrSSwUqsgPkzuBavp6ZAXqKgQnBg8D",
  "key19": "2G6wU9Gmfm9UdBEcpsBwM9538yY6nistVW9pCciqKj9QpMsmKDKmpnrBafz2JToYAtv1VdeaCkCzaj1kL6ZsAubV",
  "key20": "2YjhC3nNfE5gQh4r4mfAjMeYXTu1m72wvYLqdA9ZnzR5qWLYcPaf16KmLHGvD1KYYEMwAddWi7wujzV9TwNNh8Nr",
  "key21": "51982WvDVU9PiEECaMf51AjfqG6azL4zTwmMHsK16qdsknFENowNcsCphTgA5cqMgm2QKjSkmuNPCXQ4Sjn3KNoH",
  "key22": "2BXatAcxF9uDetB29d8ycuHsYQrVhgSrKd9apMtdDFCV5tnD4UJsR1fGipH2NQsuXEuQ4zEtXLLXwrRnGieFZkBE",
  "key23": "5eUqRYrCjFqLo1EApeNLuCvabWodbXkx4uSESqpY5P6KLEqPjxvVngFrCqqGn3nMxGcs7PwWmj1bR9SGMNeBdSaP",
  "key24": "5iX2WbdW8Dx8AL7ChUppAKGNNacraRDgrTimShARu55vVux6Tt51VDcpDe65PqSK7RenXerN2DMA1xyyJVR6iF5",
  "key25": "5nNhLYGHaHHX8AMC1Sd7qiq3tEfdutnzzyzQskpNgLzCyCfi4JPbL5xdVX9GtsB1fJQSNQmfKwnZXrN1QEccofED",
  "key26": "4ixXWfGTYxWFWP6YtqCigeEPP9GiSQRnbWehLjwM7osiCm35LaYg33Mi7PY8eXBT1Bp4K7xo7jU5AVEDu2NVKHYs"
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
