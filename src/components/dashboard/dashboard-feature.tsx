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
    "5YaDGsn32bsAwS7RXKuYKjjjQ3mnyVYh7u3rJWk1VsuhaXauV7PU1Qt9zWUggpRAB8Kg2cU8mQZKE2QSFUNb2tcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Qum856cZfSHDBuu12cUsFREifyfdSZV8ZiWRTSiigYusQxYsqxfd5bmeV9WaYu9pie2Cfp2DPCNmPgKjGxtbyg",
  "key1": "27UpjmJg24YjTwuJRij3uxF4ZFYiyYNmRGTJXEEWCvksTqPwvopNcipvrk28zqXNLz7zrNjDg9Q4xKxMkzFzDU9o",
  "key2": "3LbsP5pwN4cCrpsdeefmLR8aBP5xAbjgyd8R3q9oksxWdY2FwvJ1PiuQE3rd8KoZMKMCf3tC6V4WovPW52RX2vvN",
  "key3": "2zG2DociGx7msJRrT4girF9oZGBGaAskzjPWcPwvyr7mUY5UwrvgLaZgpC1vVvB7JvEoJ3YCW4fbE4fUC1E8NiT2",
  "key4": "2DczsorhHrHESmDF8EvAScrsJUXBJdT7r2gjPHKAYfHZEFnZEN9ru8mMYb9aWJ2XhKDXrXrevfu6TXnEitBSgCTX",
  "key5": "1vxNJrcrL9peXVX74gSyqiTiP8QHBE3FfssvaeDj7wyVzPVVc9BcP3yfXBxFFhnj61vzLAFwLwg4qGzBqwaaYsa",
  "key6": "Z811j2UDMhbBkKenfSNAsNq8j2M7uEC33s1kNCV5s4zU71PnPpdXQQVASRqa9M1Mcpinc75wbb4n2aq6oajyGr8",
  "key7": "34bFaaV5gkQShvvCygLsP4SZ6j67a6HxQVA2uz5HGNQynNJWMhNXbzomJbrYXvPJ3qERZ6fCq8yJK84YQdBnaryM",
  "key8": "5EdCjGLrgpucaVgMrwaj58k2sJCm56NonUsHQKEuqJAKSg2fMeGHaPjCKAjJpSRWYxgcdXXct71Z4q6w7iVT8XV4",
  "key9": "2zehkzrvbEAynKLRMC8FWacxF6skhJHQCryyJdewBfvnbYQpy2zQ4kjsLgoPkBDbHpCYByhomxv9a7yXpEPYbgJJ",
  "key10": "51KZPWC8KSbQfhnMRuzZAT63ye52fNDeTDXtF1QmAXzT8PYPMe2kBDubKyf6EDGeVHMgE881M8XB2GQwZMH5tYB3",
  "key11": "2pvTYujxa5xDR6Fcu7yU8jxGHoDeqRfgEUuEFMvEyFeC5Xgp63ahrmeWXAfH6LhCyw11vQqeaQBz8PyshnSRiWPb",
  "key12": "BZCTgMY6GT8nhN5o9uCbM1z86aZo9jKZRtLKqLknxnAie6KW3QEUMmVKVWhwNxjZ1p2uTDBHwhSZX5UhTpoGvSY",
  "key13": "vj6ppPcCP9BRCzc2B8PJoQMuef6EC57AsRXvcUiMRCgPcXXa3JLpnBeg1KF78t445Vn4Pvza5Ljmw7aGLHSwDwT",
  "key14": "2L4hz8EzsAzYq96QtL2bcydVS3g2uR7115ysAmPFqsf8GiWuDLt3afWfF3SX3THiGwCSurPsrZx2dLZc15Utj37z",
  "key15": "4ZU3RfDLotDucQLWKUCTLxqdLLDQM5qVBEL5hTSdjgiQCLx8KpR4cwCzMWPYjTjQmcyYN6VAG9VpHREf7DPjW7SK",
  "key16": "fBdvwAth8wfVcMCabgZMydmCGTXqx9etgAzwbX763Mu9o4wCjn3tdnKJmUBpN5HKw9KeSQFeU8Dtrv3v8GGG5nt",
  "key17": "57i1XPW3f3hmChCkb9VNgtD2t5FXT4QUHqeYQXJkAHRNqwmQDQXbX1fMThfm21WZTFYkvTJddYVAWktaFzkJ9M3T",
  "key18": "38LY7RcvP9jnWj8S9Jcpxx1sKU87gmT85tLpESfswrmaBSuEBApi5QHa9aAef3k2CwQaQa8y6xQLpEYfrizcRzri",
  "key19": "LzRcuceJNqbLq9tvXACE4nTTQ3ayDbWERB8n2tLxJHLL8seUs1kUmi7SCrFmurw7qw4e4NwtxzmxN9VLCSiKG94",
  "key20": "36fQFVxDsrXXnNUotyseSAREAvYRtTkstk1iH4xj95Y31kDvaj51BUwmzrN7aPK6cnwPET8t9acnPfvCoJh9L932",
  "key21": "t3gHBLqWvGAxyfzqX9LaHCBnWoPab6iFmMMZLeQmnUFJMMAdkr6et2g4t3Jn22knbCj6AQRQW2okEE71QMpUHSZ",
  "key22": "2PhiDXwgoWgrZdhvj659mG6HGEBcLQ9XTAW37np5FdkdBk3FZKYajgvf2Yso5r2eenhFeGkNYfTDVgxCB5fwyrXU",
  "key23": "5nshkTE6eKxMXQqgUppiKMg6YSPyqh8dFd6CVYJa9dvweja66CJDT8YpyMaMDn8FgB4SMewf3Jeau74o7xxBYPFS",
  "key24": "5E8oiFAbiT8tsyre2DMV87aJHtmyJJfQECw99X1JBWsBxsbZGK5txXVj462T2K7oBvx2q5yhqWd7vZcw8kJpwXF9",
  "key25": "fXwXdW47Y8QsDqoryAWQTuN4YjStDJFsukFiwSuzDjVUC4JBBEJL2KSZNCWyNKSuSFhWDWDcApqcPQpCEr1LXdi",
  "key26": "2EBK9YqPbiPT7NNHgSJbASzU2FCmBjjuciWsAjxwT7QygZNEQZbho63Pmzr8mjfXSZ86xJKzJaFjL6E9VvafZ66Q"
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
