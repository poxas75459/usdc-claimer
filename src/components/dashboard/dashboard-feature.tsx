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
    "6nL9jGNEgv3fgPEVUZASFh8YpNLf19onPeFoMp93RUEWgYzX4upSQ1odhYzAXpDkR1pvANNJ21usSQUe5EZWGwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wxRqEFRuFUBPc3F3ygBk9vSjCZLdyFudPB5n9R7CTvxTiMT11XX9834pEyLoYfzj6QQzGHJLX3C1Ab5t3DxigLH",
  "key1": "2HjmFHXFVWzRobkuPprVF8nVVNPPy4qNZy4YGcV8HkpJ34mqzQqy5wgb46mqRPm9XB39CjYxmMD9akw7jXnyEG1e",
  "key2": "2iqXQo8PRCmC1zzc6y8dRa48jS89oNpgzQkArnquNGVkai8BKKCN8PoT2qtR5wPmWmt18CGGhNisiJcPE8NHHaw6",
  "key3": "2mdXViSCefJmku6BjkNs1mVstfqHiBV69NW7kXo4ym5WkTZnhYKea7EpVzeFEU361XcKz4nzTJA9mkCaEvX5TvXk",
  "key4": "3PC7ENDShVuQBwuiNXWvH6s29GT93Zq3eueFfur8S3cGLMCHkxuMXNt94zcfguQFmz4qG8MRiVhpdn5fhzxeiWgT",
  "key5": "4QNkkzycV3hGf6ENyhqnUQaKqcRFNjYaNaDXKtJ19gwnanod3eJwY5RBxJ5ncNej2scKQh3VJYAWbBrjZyjTyemA",
  "key6": "5zrvrAnai3P8jNa7EoJTQT75jYdd8iWr51CV6E6Yd6WGjr97pwyoooV8aeaJ5hYVnj5XHWVSKnzwsSeW13CdUfF5",
  "key7": "36e1nUouK7ESLhiuYPPBKneynnqMZbgE1nJ2rTk1Gi9DwSPnhFRmKMYYK9oekYjC5xH4TrUNZBdaj9XhQat1ykL3",
  "key8": "5wYLcXKZtKgUFeE3vpJP6XetVspDxrrN8W51kXLSX8Ssd7G4kv3hKgDMtoL1H1AdcxQC7dH5ATmKk3dss3QgF2sH",
  "key9": "5zExRDmDmzQnBSUAgXhAE1vDVRug8YVW7865HDEZaqSejJGvHeCcztxUhh9juyGJjyGvaPTuMMrvvuakoDED5jYq",
  "key10": "5AHfgowLRGWe83CDYSFeGDvqu7Y384qwPGYBtqsNFNHnc3q8D8gmrrdoQHPj6EBwEwxCTvp9KeC2p4rtdu22As5r",
  "key11": "CasUQdzDrwCeBQJ9hwp8efBQJf2ZfPi23FcfUo162SL7hKka6rkjZZK3kPQD5Kr7VfKFwc3yNhxRu7ipUEBhEr2",
  "key12": "5vLKTow9QQobeKgVqpvjdA9nsrQv61Sb1WsLU31sVrsx4xVgxB1osQNYb3NDpXq4G43wibtUXkafoPdsfYp16z5X",
  "key13": "2hpdEszyn3uX9gA2oXxbHrXkoz7Nure2zWQ6B4MpoxWSwjfB3urZpVo6qqPmSh4wuTSkB2HoMgj2D9pwA6hMziTV",
  "key14": "3gCyL2NGKQqp4hYxQYSkFCA69NxvqbdagiZHSFRcUzuytqHe7q9XNW1iLR7DcWwcJgBBPnk1f94LHMCKan5r2U2W",
  "key15": "53ZdaGmQQH5ZFEMicfoU7QrS6FPeh398piVoRt5M6jm1AThAP59umGhDckYDgE19itMgX7CxRuQHRhjCyBVCsyws",
  "key16": "5atGRKXiS2VvHYgfdv9zNUoaCm2z9rL95cTa84PGGiGnPYJk9YP9SZ1mPP4RmokaRifFzr3t4MYhGx9sxYeJzixj",
  "key17": "zz1BZYJmXKVGYnVhqnZ4qAkgHztU6r52r6b8kE8KEy5n4V5Kz2kYmhwBb4W2U3zQTxpqZdzEZ8NqX6PzLVc5NCL",
  "key18": "58mR3PHNYEM29zKqCTyx4Cot6Gmo3PkFvD9m5jkCE81cdA9bUJfGz8xHuwKGXAxSgKEGY79JNdJzNBeeG27wkc7b",
  "key19": "kxid5cUT4RtfMAzyexaoM83a1KsAL4M8b9RRejp6VqeCzC2G4ty674QxPPhcfXt7vkj7YRdp9FBQEnjDWdNSTtP",
  "key20": "xyCbciZWpcJyEuqJJwM3DvQUzx5cjzKkJpSXkXXDYRNVasAjREp15PSjrFmUxhNSKNxbedYVQJzZAVsSrcr2bN9",
  "key21": "f4uy9cTPxcWzBftKaxLDXayeKSTWpx7k39ZkcVF7TcFg1rQhK3TCuWppnx3rDdt6xDFdBqetJomzSFerBG6PqJC",
  "key22": "4mbrXJRCCVwiJcZfvxfqCizkfBhYmmVQHA43ZJXmUuAoFd5PSPhHFNEAoHwdfud7e4kuGDhuUjcD6UxZ8zQh1GCs",
  "key23": "2PU159FnZ1TLYwWrE7g1FxJgrntcS6aqSerLcvrx7i8HNJnNWV61mdymeUMuhJjTTHLjWuDokefqNZ5hwG4VT4YM",
  "key24": "4sFsUUuwijDf5gkTWAjkVNb511Hx9KZP36inC7KELULCTuYyRE2tYmYzPRegcws4oARcYRSJRj1K2frU5xxpF1M4",
  "key25": "2TaEnPWsbuJMWmmRSKBpzjv8khdTCzti9NvzKsZs6A9PD8Dyo8J1LYqAqHYxFCTsZyMpvvrBfmXrd3s5nm2jN2yH"
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
