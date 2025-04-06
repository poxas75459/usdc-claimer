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
    "42DAbgH4Hi8MDt3dD3GpbmRfbkGutzZUN9r59UJpajy15QDJNpkaee4D4aekq2ez3NzFHjsGbjqXyf1Frvt3sPb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kn84SxqtQYaPve2qf3KMxAto7ooXJobPHCtL3NFvoLTKV5KNwCrz622vLKuFQkZCDthcyU2M8fifqzExhzb9LBo",
  "key1": "3KsYAFX1cC7FivQyndXASkdPzKi25wUL9mHUMdswJGMg5GEBfqSqLKYwHkwSuAytzv6BWnB3Q1hp7n5wzLEJJc3U",
  "key2": "2HyQvb7tnKyA8Rx7YuqZYxsJnU53HMcPdZoSrJcscJ7desv5NQS6tnqZvjdPUq3LDeCW8ezNp7qMVKcw3w9RP695",
  "key3": "CBTbjxiqC4uCmuyrfa1F34X8ZJY8FrQAJK31KoU6nbyM3yziyrShPoAFPombTUFouCmqX4iFH2EQw29i32gDo3o",
  "key4": "3Dxwnae9M8fwRbfj9pumhGuoWrfhqYJQGmXyp8nJy7ri1HWQDqUKm3hMoAVvDvwZ57fjzQJgXiNWhh5ExrjmkYpX",
  "key5": "617KuV68J3gKXgW75Tdaj9QzuwveLpJRBkGdxo9g4Y2D49JfGk3nqWn8xMKzZmiatBuMSuPB9aq5mqrd3uFkXTzg",
  "key6": "5fFneEw2U1GoKp6b86HWG68PDQgEgKCDoZVNohHpxEUqJnuzybGW5YCzQitznFo1NvSszebE1CqjCe7iPD6siahj",
  "key7": "5KnzE3LnYrjt4JZ3ZaXGzvpXrgCJfXvbMXtKgBF33JvdfYAQneZGSRCtBPvgZERo5qeGDoBiTkH7EMfqjXHrGR8g",
  "key8": "2uFLfUkzdvpx2Fc7djYgpyfiG4RHXMBrS3vtSKgvUqtjFWvPnJ4QBeEsAC5qyHQBZVB8GHtYXxXJHGVdXQHwEkdH",
  "key9": "3NmfB5NR24WKtatXLc3DfejGg7w3ngD9bEU8Zcm5fChrwU5uLX63gb3CcNzGVbXewcQMEH7QUTHRKQnkWcK6ifao",
  "key10": "2N69HUj5F11xHcKejxk3ECsDUKXB8dNusL65XuWYFNkmCSiVdYLGeY7wy5E6mpD3U1no7cPfCx6SvxvzfngnXbhW",
  "key11": "2h84f4dTGzZxjCxsK6S4qSv5r1hcSa7vgK3rZ4wr8LXJZK3E9KUsPhhHzxMRsy8mutSipRbq7rVTW7DgZSvNEHeb",
  "key12": "3Fa4GxTnFjzetB1FNxJuEu3ZZALURYR8HMEUKRhYHUE6Zh53bYCFkvn5vkzfAiVRs989Wxuy9D3w4oaWSKUSPLkv",
  "key13": "5FdGnP3zMWc4nVer7EBbiZMvyZGvDz8mYxYC2mCTZSK16o6KM9tPqabVoHiVbsYMtEB2i7Q1GM4A7UGPVpkiNn7C",
  "key14": "2Ebvp2QXn7wrrqKQswJcXLyeVCfQtwqXYKvPzCRy48xks6Zhtu9GzCBfBpgRpEpGErLJVF8wHNhzRrYcBKwo58mb",
  "key15": "2NHaoWv4nx36LUCxaB8v5hnDn7a9mPTeoh3XZKZtHK3vM57i73Wcufwj4N1JRWD98TixJCs55r3PzB3xvPvEzTKK",
  "key16": "2mPfxD1A2b8x41NMwnZYxiHQgTqFz4dm1Su52F2K1EabZhdEWzB2PzJ8DADiYXjzbonMLpDRXfrogDtzgB7oeenV",
  "key17": "EoivCgQmuv18gdtW5Wv8WfutbHs8mAN9MPZEdzQPunBkgq4jA4twM33BvaDTRgUE83R6UrYmG7ZtR6JvP5YurFT",
  "key18": "5uY2E9xGKSqWZY97L9B6Tf2j6gpmchhqYyTgkUD66S54odbfQNzfthHxmTgEjuZEiWypsSDRLE5J2Vn4p3gtHr4v",
  "key19": "5iFKhqCSJGozgsDndr7qReCg7FNuiQzTNJifrrtVDC9LDQu3WGc8FNxs3vUbv3dNH6wj7hp1XaXF77eerU7L3grH",
  "key20": "2HQuiRse7g2eJmmvdbi841tix6o6JZTtpNGY2R4S899TSCBAh6eir3aDRZRWpMPEK6RsJVG8sy3rY7CetqPWXu4N",
  "key21": "GHkqJh7fb1A8BSWp9m6gG6DaWWtBaRE4DPEv8ypxn7GPFXyC7LG8aq38FUUbm1PBQ7EmC3oBoKFfTekuaeL8qSj",
  "key22": "33nmTP2bkvc5rMrEPHBsqsayztjyt8FerVUSTE4T1sJ1su7SCTrG92gVJ2zGwPF92KvtsdeCbeUnsZLqA9SkSqub",
  "key23": "4uJABeBwN5rxeFRuw8L7CDdPmsZGnyzEV5wxDJC7JBLeooAihPDYNBnMzAE4C9WcakmdSzwvPLLX42vVR1TDzUfZ",
  "key24": "4SZCnqrLWaaue8exWKJ3yDbf2kzk7B7iTM3c3hrayNHtdDnH8zEHH6izNoP6gn2LeRiCTy53fEYknhW2koZA6ytD",
  "key25": "3ENThxpC4z3uxWUD2xZjWwCfsqNUU7C8S66tZZzh6CioFYbdibcPUCLD7Y6BEnivAfgL2FfYEB7wxDAX5Ft3hPPa",
  "key26": "4kX5k14eyinkNSg3dbAT4vT4aQGpq2YCBa5Dit2oFRpDPpr8yzKjUmykD4yLCKJCbBBJBpBuMwpuAfkvof7hs2tP",
  "key27": "2EKgDez7PskJiUV9C8SYxngQyz1utoEN53YJKhbAiH1MqoEZUioEvmKtBLLhQWjLwEhU4AvhGY5u3h9Rqw74adpc"
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
