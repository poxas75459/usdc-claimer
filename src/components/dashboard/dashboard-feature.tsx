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
    "3hUazcqgmCDE7M8kdKgGbTgJbVrCHPM58ijLciuvTkhW9H3KMFkfuJn55eU7Nrwv8c11Amh2PSt354Bvx66tCdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C38r4mspGwQTXfFFZQjPWyVpxrpJ2AZR9P3RgyZUtaiXEi6AVruEG2zBZc1mqFwKZRiFMfJwkBFfzjHnoRyFb75",
  "key1": "2Q34CskPSfLMEzrGanSEKJJopyAubC8KbgUia72LQfJN64XQqQUHJ7SEQ4LgLMJTAxwLPUNg4gV5RRBHhnk5suEY",
  "key2": "3YVNPBAJ61CtkcUxuq98WPca3YTXJdNrNAjfdp2D1EW31yiw5YF8JoxXCrrr9XfvgPNKzrAbNvS15EkbL1MvqVKT",
  "key3": "rMxp8tydgd9uQRYjj5CNbL1xPJp1ouud3kQznNqLy3hk7cCi4d7Bb5yZnTCccZe3K7uK3Vtg1pMF4n4tE8r7GAx",
  "key4": "HUwnvSBnnazqdMV9GhsL65FVW1ynqF6rSxdXqH8bt4WD1YK7rwoNoCP8yGaB9UU2xNAKDH2T9ZX7CPC9nT2z1sV",
  "key5": "JiKj3wLr81XgHvmVGH5XBkCXST8rbg4rEfTDumTJ5c9HjujS7PJHoXVTQKzHQbcTsXsWVZsFWBkvdH95JKmCRAK",
  "key6": "FW4SD6rQNGsq38L5zpWUmWPLPcEWLpDsqPt4oLK1ywdnBymhaEbKwRfWbKBDdgmx6aZa188HsPRYwHB2zpcmmJb",
  "key7": "32wWwNigBETRAP1mgX9C3RGqabPLFZxwdAwbDJoKgY4mf6UnS2unTWVUc7DucSoySqBPDe2q1fGb9wgN5YMMSWeB",
  "key8": "58SUWDy9gT6tZuvQs3sJ73Ur6dczcHa3jZoKk21AaKPobpKYqRUPYhvgdAsCtkvLhT5gMuR5ZTqz8j1nkTLiimfj",
  "key9": "53PvTMGaYupRZ6v5JPzDUy11DeSzB3TR7A81A4qg9Sr18ykPHf5NNPQPnma9wMfdqQcZLGkHG7YWZHgc1bFWqe15",
  "key10": "5ixffQ1PDi9v1Km5mxKQQsdwkVgvUewY2pbacfhGz9JhLLccQHDUR7ztkashQ1dcsng1cxJTt9hbMJhnm66D77Es",
  "key11": "2C1oLK1VUXmVFogaYxc4h5jnK43Cmhji8cLKQ8uXguABityjWZ3A9kBt54nKspR15yNbksS5EoLsT8XZ6x1Q83ii",
  "key12": "NfAHczkxRD3KtcWk6dFhqrbsWtXPVDQYRotnEGb8ALN8a3WbDT1SCiGL8BtfZAeKRrArNj9V1wXCRmfa3kQMRSX",
  "key13": "2vpc87mHohdpskADE6tYqk8D4f6kgEFpwnNrBjnQc8qZMavkVyU1QMRti6eFkupZXneGXumKD9Dhz9Tv3MGdww79",
  "key14": "4HupNagrqGsNdnFpM6gi2xGRuVT3pFgNvVwJpXUFjepPhypcQFUrZhrYeXHvmFBc5Aqbw9JkcxHLh6KDtSugXRcb",
  "key15": "384Mh4kEtWmvFpQfXvaxKJomdQqhv4W51D1coAwPQq6GcWZ5CLatE35rcbgtj8dbNm3LWGb7hykVXR945dGKTLPZ",
  "key16": "dsRhgFQy9kCY5xm8ULkofiobuU3CsGXJ4PuQ1cfZWeFkXEodWomcF3XzJ7D75Hsh5nYFBjgKfBRQodiMWhXCR1s",
  "key17": "4EE6NyLBExXnRJMdP1rY5yb65mCQ25QDrsxagx2G9KK8ZTbKxniLUsE6uJzfsmFdVfKZqjSZ2uyzFKPAoHisuNPD",
  "key18": "4E8A7BjHeVUynmSRzobuvm4S1gMFx6YM6msiJHeUSX8dMMsN6dqBBBYA4uBXEVshzKVXgMtp9AHk18iTBkDXPbex",
  "key19": "2jyrzyFBjh9UfzSkvHNo9bjuPHdmU79PSLYsTnfjsMVU2tPrNrK85AxmUaB3g8N9W22nBbx7TCYmUGXt5gdApG5T",
  "key20": "34fubuzAYYFp7jLsXidoGHewujdtmedx5XrtajFUhgge7PAMoiAzCcuamdJA5awtA2f3kpK2STf5CcXRSJg4e1xL",
  "key21": "5sQqzrpidDYgoMVowxwnYHVqsMhQ5p1o1YhmNAeAdPVtHmB5W7vU2a9JxMH9fwRabH27JcoLH9PKp6JeJTMsLFFY",
  "key22": "296nzP5QiAj7Vez4h9F6Wu7mWARdyF2QnCGquTYbtr9eRhUYQWHHdeAMearApT4NoEy5vK4GWMsorSZDhb5fmHH2",
  "key23": "3dyr8YEgenFQPoD9MAEFWG8PoBXN72pejjDB1ish5xGwXNJ5v6UG2k8nfzKct3ZnNjZbaoKRiUZtfKxtKJqepdus",
  "key24": "64dN3uhZoz8L3XYFqpzM9DiUsiVsCzDXWKD9S2ukZCZpJTTeuaG38dFbgKsJpXaPYMUFsCqbisN9BjrDzwcWJNHB"
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
