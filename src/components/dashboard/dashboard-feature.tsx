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
    "ba3GbqTESrwGM14gJ6qegLZjwHwqgFwLZyM5pjxh3ZKJ2fQbxJ4wUYhzShQXnJtCwqvR2dRAonYShjY3Tw418Td"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZFZUcn4xqn6tReFsQit5h3uXXCWLbKmkkMAMhaw65nf6WELfEQ68HfT6nhqtPyziVGHJwA7VqCWf96xT4gt1Czz",
  "key1": "4MpLudQCXttx6pnWVYxAPx5hQLxWEzAJSq4GUco32cgWgG12C1hA4PtWw8Me64KFkhrHSNKQ6oCyWFqpMKpKoTYs",
  "key2": "2h5MxrtYf9amUqjwttN6iibnbinWZ1FxAkRtE27BuTCxNDU6NxdTWW39Z41pRaQCpeb9NJpGeCrBgXPE8p3ncvvT",
  "key3": "3YmAtUJMXAhBYDwqKCP3wjjNEu4w1dZiJwnTc9t68mRMZXCAt51yYXAwoQHE5unvwzVo6s1jt83dpBLmN9b3U5XN",
  "key4": "3fqZ7vmPbPpCDGbXEd18rystkDNzRxEDnuuTyELf2b1Qyd4QJSm4MRWcPMo6PhEKAp83ugccMQNAhAjazcXE4s8t",
  "key5": "2dHqbEttyWXKb6VrGTEpie9wQvsWx9GNDpYbLkCyr7puD9H79HpX1UZycANvSupKepsWBbeFcxMHUM8MynC8HzJd",
  "key6": "5JsDsYzNcmEv9K5mbAa2jr8tJZmd1Z5EkxdfPuBaQvM3zwnmpB58WJK5EyVsacAmJx8KKenthNirHfYFsZrJvX4Q",
  "key7": "54bsob1nLwevWZU3TL4rvZTnwzMFf1S1C7F7iTkFduPUDxEC5TfCx7qgc3CeF67K93wBhSe1GFVACEsUmPi5egds",
  "key8": "5uQKbKvyi8MDELPteGNpAXZqNyZKXSZ2t96M1bTMby32rb7q8ZMSKxuHSPLXG1yrZXB9vN2HgnMy6fD5hJxA81bP",
  "key9": "3HCTF46vDYsBqrXpHXt28DFZ2H2QNg3SgYH5VowvP9riupAgGsnCYPadwHa12PdH6j9VmXV3MbBCQ5nt5f8rMzpz",
  "key10": "4tmVFH6GB1WM3iaDfVNFURMSn7AHfw3XUKAjD9B8HkT6ULKneKfxtMe8KS1cX4zMPLyQVXv1CLscSwRooeJT3XAy",
  "key11": "5Di96SE5XZ6BzkYHGbBYG71uDmxMyL9JZV6zEEehfRvJarb4QKKyx8Xpm4Vi9P44emVPaPYntgaVpxB8wCMTvUKF",
  "key12": "2rDoLEQVCVfpKAcwSAnGzz5hN79BeF5ApXuFmyEBMjBJm8WNebuN7sPUohxPwoKg2f1fnWDK7nfGphk3TcDuQagn",
  "key13": "4JeZVxjtgqpUfmkxEnWWZX2xvw4wrL5hcbcu5aiHkJW15cNwzhTY7kWJEr9nFCpa9CWZyRYRDQW9kRT2vLrkDAic",
  "key14": "3CUB2YijjLirNGkH8ixKbEcDFXZbxXVQPi5VN2QVRJT5btbXem7WMrC3NqM8ravoWrP1bUP34iPCyCUcHGYjuzfc",
  "key15": "597uVxEoFUF23516XPm2iXKjUGxFDbspH7pbpGGVzmtN773tWWTQD5zajchWGjch1g4gNb7KRTDVyaddipFhY7uj",
  "key16": "3EzkhXt3J7d8MZz8iT3hhK43h6C6akzg5dzQ2AtkzfmqHJPc8EF8DqRx6gdNW5SDHe38F7aLA8vEj2rszQURTm7c",
  "key17": "4tPx1frzG3S74xjJ8iiF7kpGWwA9kT4bv1fC1nnbTXixFBkdMb8R9zqhTzrGc9Ltpmzx7fngca9wMGE12KY4nQLg",
  "key18": "2ABoejgL4Et5zAvhsg5csuEdkLUQnmQhAfgqtPuXcwY3U9jKw2tv8H1yvo1wpp1wvaN3PkitkGybK23dA7TP3c5J",
  "key19": "3WJCrrbwwmJdoiGJpet1cX4eVNEizdjF8qi1HG4FMXXwADZsVfHAonGthbuaQzA5e5FyKhN734AynGFiuEQYQPtf",
  "key20": "59o8b5bMvXf8CULqWmcNhPr7wu1uGuk3zpEeW9FBG7itaWLNvvLmqH8zP7EFBVbyf8RDcvdmZNFxjNNzuvJPuVjP",
  "key21": "2qCDCHQ2EdQoNkYKgXZL5XR2wdGuJDSLMqhzEZaMWSADRVHZjyZNwuUAnFj9bomt45vnKfbFKMTPY9vppDbeNyG8",
  "key22": "C5tKGQaTi4GvAmWWfcPi9uBsfe1M9oLWYK1A2D6b62vJmZ54ysmPs78KmJdshHZmFvrNamx8qwK7YJt77Lh1VDq",
  "key23": "55uibkw9AYHZUDoseVUUxZmo2YcizYVTnRAR5nzBj1bF6L3mNZQ21ftm43Dnt3WHkEszpmtbr6i8GEzdjusLancr",
  "key24": "2UjkkUmiiuJkEQRQUfVpU3gALDjX4RUvi7x2dWi98PDXcAGNgqb7cHseemXzy6BSZLs8xdjb5S7bN6xUQRgw64QA",
  "key25": "31TdNmYfpa17cHdbfdDb3F1LRvDa4htaMxNbWw9AZKAVXTsJNvxEXgrxuqzgXdfEeMity87NQpP6xXeTyNc5HnbP",
  "key26": "KkigcaBK8RM9xAkTMyAfZugLCMvwqpNjTY4hWYxQQ6UEjpEnguW6c3ZmJGFki62wHUpq2fVyKR2kPfjoqWhEfKS"
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
