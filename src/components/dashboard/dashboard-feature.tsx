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
    "39exbQxChvM9bd2nkZ5K9HU6xxxkwYgc7JwMWgBKxnNEDh877YhPSFWRfyZTjReHV8cXLnWGQSLo46AyhHdEeCVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VZ6s5EBFkDKSqZ6hfPmVNkV7dN3rYmgAkmoRcuEfkb5yPEjEdHkYdXy4wMXuRpMbdLuU1hLtUS8gY4xzRwYdTj6",
  "key1": "4273obdESeJAvQ7t6FeeL3QbopgGCaFZuB4YcUYYhzm5DzxvRJSrXWnNxNbsyXNyTEvL4eWTWqaBwENBC3Yk1ZMJ",
  "key2": "PhPgLn9Qtwi3QyNE2zuB4JXskapdcFqybMyQNBH35HEQaLBVxEj9EpwbnXx1biNRWuKmkv6FU6XQBPtBymudogA",
  "key3": "3UZwN4txp6bQdGi3bDGmStWr1jf1Bh9Zb9YC8fuJqopXzrsG51zyEg3NKbz2eUWNKSiow2Q66QzhbUMCTUcXzqAi",
  "key4": "5H6cJGqQVWKp55JHxjomgKP9H3cEFLdLeQ9bPKe7YWFNpsvMGcxmXqZGW6sMd4YYDnWoCNjropg8unE4rv5SX2AR",
  "key5": "QQ8s6tQ2cd5C2t7QRtL9d9XV6WtEfRoLp7fhetNnmcFRifxqm8UT2ubv3goet9RHri2JBbS8x8NxxX8SKAs3isa",
  "key6": "3igBQVU6RcCmrRZyFiV8Z77cUjo4YzGjKeudhtucr5ewVDVtTFp1JGf2Y1Ag8bGVcYwJDHTdC2qRq45F7B3Ctq3g",
  "key7": "4ZdRA5foweMkSqrYSzpAzfjCq5wAZgj1cmQC1kxArYe2Hi7Ax31mX5gj5kTrLsy2yJdkiWtBLDmBJquej3864J8x",
  "key8": "ce8GfX8JGQiFtkP7dznm1Ls5iVHwAAjhddVeGPr5ioNUUb1114FDaChJaDXM2DRTReiaYMtDwMQUpQPfTX4b7s4",
  "key9": "4ZXBFt3fUQYSgTbhRiYWE8J3RXLtWqihtBppUWHw93kQivKmQ6LUJswCoHct19adXBW9hvfvS98fNaFzEh9LengW",
  "key10": "5qKhvbFNsdUAEKxaNLA1nxfxDv7viTnTX5Q6jiR7Czpgt3HvP2Cz8fxQCHNkb2UZyrF58Z3Emv5RqqCiqqQrJopT",
  "key11": "31a1DVJfsAfCX5d8yu98Q17kZ7CVpURdBnqdnzVeTN2pRzAfGqU2L5xtqs31fEzTkSnUjakSs4yqExeVfrqCrvAa",
  "key12": "2fsqnnurnJ1av9ZkNmC3fyi5oHfbvTUy66wb84Ry2q9DVFzuguDPtU7Q8UFiYmjpXr1w36XyU7ZknETXttRspHSm",
  "key13": "515gCbrqbn7TDDgpoWMmxws3LjHjSL7reJyH91Vq38bHQc5zDQSTkTwEv8uKpWJv6D1XBZhUQgemJFz5AnkeujDA",
  "key14": "2noN9BM39JBEQrTs31pQ2kYXDsCtPVKkmac5G58ccEjXLG6gyrsRgwhYyDc2HaX48TTcTQisxnhaWz8trpeR1B4L",
  "key15": "4LiAv3YwTbPcvGuCaA8LjsYoHx9CSrU25dqeRgrh1Da8BfTSxQoAptCWApfrxQLioEPf5A5nnPVGsgoNw2NbteAn",
  "key16": "3ZZ6ERY3LrQwCcB7ipJe765wFKjGaKuGEAs4i9ZuoYiJhHY3PoHhwv8UMg4GySSLJKpU6JwJzst6U4CXcWWPrTpJ",
  "key17": "BveyrxA3ieihbNbW3WCZKAwUPZS7q6CStVr15CeMXzP85WJpKvxZYEcbYxzjRqXBwxWCxC4THfWEzENk5WdmDkT",
  "key18": "2ooyLZM4e5rRngaVWFQGhxteYSNqEpMsibwshWoW4s8NtJsNELiFh34tQFrDMupNRdg4vTkxj5hevkbYVsUwZvKh",
  "key19": "3NSE5LFRjaLosevG4wZxRjsYqTAAp4ovRh1ivFRPAYoQtvMnYkifdhv2nYPxGQVWymdeNEBCpGrkX51goA8hKYUQ",
  "key20": "g6SWxu2Wwe8KfVee94N3vnKYAgsxtac4vahdtd5QZzh5Nz4PeLYNTbDKF8CFQX85XDLdwMUUUJiDPjwDHtnTuD1",
  "key21": "4RNwGqHa1kj7aKyUV3wDKuNBDUCMXqcNQEKjdXcVxgSxcjaUVmq8gvjRL6zcHDPADEqqbxp3gv2DALYR2axbTjdL",
  "key22": "3XqCPVNUX1mL3cjapPwKJwMyukGh25DXJBW8QKbSRknCownwzDQkBeLTqK2Q1ASsdy4RUz8917Gwbn8D1bRCSwUv",
  "key23": "3TcYXeWtPHZXpPYA2X9n5bfky3m1Q692x2b36jZV1rGRdKphq3w9ZVQg2hKqJcUid4fGxTftHYMmvYdJnt1JQSiZ",
  "key24": "5QR6aGLkX9S6TfrXoUecP2ebeMK54BYZQ3XFLCcyJxgTM77MDHbPJff86pD62HhwJjWFVfajBUZ8G3Jn66zWhVud"
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
