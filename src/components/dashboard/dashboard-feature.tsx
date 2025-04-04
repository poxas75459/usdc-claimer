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
    "mZWPVPAHYc5ZpzRwJhfXDbzFew6gd4R86RG4JjG3nBobNbkhpS5fdg9tnKDMuDLRG84W2xGA3nKaBQ9qo4oE2eM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e4Rf3NjAdZCSgKRjFhtdoDRxwLJ8ZewhQFFkWkoFANYa57hEs9FGDLCC1Hoa3GeJisDR2aPon9ELXBpehYNtQz1",
  "key1": "3NWF6YHsegtXGZyn9n1vrDFaaVxuWoJ1zLWuZ8dYEaJNwwsKAz3N8Wa9NXMoyqyBvpS3na3c9sXP2YEfLD28dcym",
  "key2": "LuquFk17ZFoPwBuWoKUaBBwFo2kMpR6BEwY7NpBSCwjnwkjEUMXHa468FgMgTipfJoAHZyp33AHnjbHM7ZLw8tA",
  "key3": "2BprfSzmG18s3ySUh2b3gEG72gqKmqVuQ9aMSfo5x51r7XsxFJohogGLqXEju8m8tjyXw1qf6xwVbXERTeoFYB1K",
  "key4": "3R6vkvgKBWvKjUpx2oVThpTyKPhxqcpVS9wdLq4ss7MTQxuhZgviWsFWoiqkDSEZQ2Gs5SnLY1h91sEFzBqMtYSH",
  "key5": "3qKwn3Nq6JdwDe7ucADn4vQoZZwJNPdmSvY6T2RQGyYVstx7C6vhNe1EtX7utrhFtPH2y9Wcf9qSuNuzMe43ivjX",
  "key6": "2Avf7Hh3zMWzp2oWuwJpWdapFkzbuCRsrEuP1SbwCrnWRVkL3xv5E2xv9zMicgow6EnjKFkGHonvetrNqdSLhKX2",
  "key7": "3mMu4rUnCQStfuw5W9ZX4RsRZNk1ctFNTqV6TNq3WU8XUxBkB5KmvNwzRMQQEbJkjTkz3GWegMRj5pHgfxo8W8AJ",
  "key8": "4brUufC2Eu9emKfRfWMCDbnZUxaVjgwqjZyZAGHXTuYebtLkkgNKz2QmXZeyptrVCvL5kwxGdZsXeZi8PYcr1CZe",
  "key9": "4AccA6WcQFbKA4tsT4orZwekQ8QbFUJbFCrJmXTG8ErmwLzsPmJhUXjw1b9NAkQMb8Z93a48NM37LeAjfm1foBfX",
  "key10": "4AiiJerWuwC7dcFxPthuUTU55j8qPMFX7PNofpK8VBWnYZi4kEKyQeY2grfX6LN2AhPGHUqoFPi3daUT4WdBbLko",
  "key11": "2NrzRaEBzkf6MKzcTEz7RL3pqaruP23YyFaq3BmAhLFsqLndC7hXbwTCW4kdXnstcwH8xdJvKf1aUjbpc9hBn6Cq",
  "key12": "5jg3cnozj8WHaLqZbhdezoH2CQYmFEzqF4b2PvwBt5GESyBUGLhQJLrGnUxapVdnLkjk1o4eJQg9N4frDnEt3vkm",
  "key13": "6FNU2DBNUhUNse5ieZVCbGZ9LBaS8ecvgj9f9wmcTpg9xojNGqFNbywu272yXF1tfu8nYMQjT55AtB1q1U8GvyH",
  "key14": "5UshDkTLQ66VaCPR35SzDTiCf7ezbgG2NG5ejw5jB1dFLk64u2gdoxshrwAwMf3GBEdC28R8fUh7ZGyaK26YLCwc",
  "key15": "2bVLPZwNi9ojrCRrndJjSr3kHcz6QbaKxBkssdkcMy7z539i7ywAd7N9keW2Jyjgd6qEC3C9JXtDkQgQg7dwKBKa",
  "key16": "5DsB2D1be3QbdmJzb6wY9oTRkPfY5U8ei7K7pUAQNYSZbw8sssdL4yejuKuPMoBY2Y1Hwqe6zBZGZgfZqNqFMzkJ",
  "key17": "3dQZ46zmK2LfZc33tJ23mZzNNEErNJ5SnHuzzNrBnzy9aYaHUHjTAecYmi4M7eyLYcLhb2PdXovBZsnwkDWfiXNK",
  "key18": "38xZurLuy3NZwqsYhuWdmVhivEZ2h46r9d9Jxam5Ji4KPxjdL1Knp7EsRjj1pqUcqvRG6iNPd74kHrLY2NRkAryF",
  "key19": "jk2hRx8Nix1mWt7Vj4VZRQJD8REDEbPPZqSXWYyPpHogsTrKJPr3vjgrQxEzbUUXiSYMcZmxeVec4nmuKuMQTkq",
  "key20": "57ed1WHEJ3fmB2hERcsWK3YqjJtVTkWrsNaC1FoiyF8TnNrt5md7W8VJWoEFRD2syxH9Th9McyFoCgQs7eXVWGvx",
  "key21": "4om93VDLAqmy14pmrtdTqoV5KJQiqK6K1QfCeBF6Z9mdEvgtgiNx7v7r4Me2wkQo613faAT1uKZHFDrqpTTFcc6B",
  "key22": "3ohPaUQzdqJc8ApAGAfyUA1cV9zs42yXEHJVrZihD4mCm3EeKtgvpoDYQmP4DZG1qvhoibYgfwHZ3H4X8ToNgj5A",
  "key23": "4ZdEx4NKr7xbcDi6wJ49yPnqvozKVFxdPnXRqaLvNiox18TpTtaebMfrtwH4rAvkL9aeraEdoCFrU2gF3gJ887QS",
  "key24": "2sd2g4ssFhdUnVnQiRkB3BsgsHiUV6mzKrLJPbmZWCPSCeNRunHtutPNTDb4DWjgPx4xqoaBYb5AS7ShVCUq63kj",
  "key25": "2BG4k2kGD8KX9pySJd8AZtGGUSRQGootommi58pgobJvhS3ghy3FzTb7iAZRUZmu3yA3yy1pDEtVBdzTLbBZGuvn",
  "key26": "25a1HXRmyhTe27NaQqCYtTdNXvt6tmaAvFmbtSyEFesw4rCs8JLveoukaCVzM6Tz6NYQZuqiJKwx3wfLE32WWpEX",
  "key27": "T7RgyBrMmqA2furxaYMJAmJ4qCxCj1UntGVgxKoyqeQ6Y9fwmSPYb1D3eNtZshbooYU6JhcUSA2PkaaJJcaHDGM",
  "key28": "4Mau1HyJsvLNEUccJHH6j9zSkd69KAaLBJkcZmZFGhAhfhJzTUGVuC7sN1bHNuadZE9NRnQEMetgibdUXjyR4WWv",
  "key29": "4Yd1W7bHrVWoiYNmF4TQhFW2BWVMfzqWAwnSiXKQRb2mXD7WCuJmQUd3pgNoRZ1sj7cF1gycchuT9R9xJ6CJALhc",
  "key30": "2tGsRu9sNYS5vBawSmySQ9S6c445oESbwna674b2HDXicbY3WLuhWZuZ7v8GB1qFzbkf7fMvxxRur5ej5VKpfPfr",
  "key31": "4YKJn51dT2zHm6nTDWtxdYtXuKjd1SnTsiVK3qgwj49rgrLYAe8WeB4UpyhW4rAXEWYGZcmdgS1o65r8kSUNMHKV",
  "key32": "5N3NhccjKkUCsS3DQAJLtAybCDLQ8NvVNLqSN9qE3z7MmKTVjeXwhdq6soFZUHoPWH1GXZT3HwFBXqZMwoP834kd",
  "key33": "3rRchnLKsK3fDZbu2nguXjcDd3uUEsCDcyGE4XxukCCoTExbVz3rU8UAyEAygz9pvkqbc4gF4MnWhLCqFiwpFVpU"
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
