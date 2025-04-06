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
    "51S9YCjVWqKfGeH2vuAVk6naGzUcRBKWZfnAnGRRvV5bqi2pftQX4xiju9VMCwzWmRBwr2PdTu5EgERW41Wghi5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vrvVfEqg4yjmRcxKz1uitjJ1w7TbEyNkNXMYjt5PYX6w2vcQPVk3mMEai4dai4DQCyFgwbKW6TFheHgAn1wiyEQ",
  "key1": "49Wn5tuSnvqdhHqZiTwPVugbLVPCCBpxystUXPgJFqTMYLA89coc8s57ViELK4hTpW2P6sPt8hpjwZGJrnnQbgRY",
  "key2": "4pEAxbUHz9Lz8ooWpJbWavmqHtaRY6bdWspWztoJCuNcReoCYWKb2LqeCrzrteQMNJsEYLfBMzBbKSMvPeSzRNrB",
  "key3": "2FJUW4RJqCWiY5mo4VqxaqHXQSQykw5q4dTebsZGyudu4x36mtoBXgbKVRYwjHFjMiZ9a4MeffZybaunLPcmkk9m",
  "key4": "3tCiroNswCHTg3oQeJW2STKdTfwsBpT5NX6qqqywcqFcJagcDrf1uz6uZ2WJqrmMPSz9X7tgzdTgPC2qcrqLAztZ",
  "key5": "3ELk2t9BC8WWHzw8QTV9f4Zo8DGrwT8bP2C8TFbgSzZWZ6ySk5wBSwLuGvEUWrYd4EPfhpGjZizvR3xNub7uSaBU",
  "key6": "616C8URLfVjvWbzBskLDqD6e74gm8rzbpcd8mrdoPmvYK4vVsQr1cGM52s17ic2RkYuwMCbiB4XiqgwDswU5CYVv",
  "key7": "R2ukt6QKqUgdPdQ1Ap2p234EqWe2DwYrGb6Sg6dZbPomgqEhGhP7cXeuXhdtobJi1sYmSRFHDd3FeWzuYquiM61",
  "key8": "5USv8yLThn4QEVBKYr5RS73YuCCxvBZkcsWhd5W4EuyKiY7NaujXDEVc1dkCTbzwz9HktkBZbPVttWqhPcom9hxF",
  "key9": "3rpwzZGGctfDtgq8jYH8hcEfgS8qGnutw7ARALzJoS5jLLz9KQERX7ELn8RrYf6jvSMzbHQbY2vMBf4YauWpMJ2h",
  "key10": "8eHrewQgrL43TGKFTkxjppams5DE4egg9JmeVtTtM9UKVtwovAEj3k5qN7xDLjEem51FLyM3AFVqzD4tERCyvcb",
  "key11": "3PuFhArtmAPgT1k2YpKvqhgcDUoVZCMP1y5WfYHpsZydvbyGRUDXRDChWPpoDA2UHzzRZdViyD9v6JAAmAdkbP1C",
  "key12": "2KGumTw7kJovTjDHwT15aMyCDP2TAHFr4yWLYLCSWyn3zQDtw4FypASYEkijo2xnDN3ntBNA1qwnh3mkqRQqgAmn",
  "key13": "5bPTY8q6fNoQkJJdfiGKSroYaKzTqmCVRj2heXQNx4Pz5ejtLjn4W5YcffotpSjsrjhPNjFRyWksJhz9WQ5hYZjs",
  "key14": "3y9r4L23RFGb1PWcqNNjMfk3nb3CJD625RH56aPsZVRoSSZy7ZnXNYu761SwvTqH2kxM7PGKQxYietX3jz585Ub",
  "key15": "5Lk7gE7dYqriAPL6NrX4v6U1bc7XRprZdEHuWebzQpuzsVCUmitLdbuXguAk5jesTf429Q1JWtuCuweMSywnMSB7",
  "key16": "2f8MPwZVcusqsbpZXXJACWCHjGU34zgTbMaZ82BCcXw5rX7GQyZefaQkPYD2KGy5yDvTYuZ65T74oM7nwq2rF51Y",
  "key17": "1KQqgphAts2kU9MkmVHZ5X7f9yd1BiqS6tgrqrKP51dsPj2Rj49gJqZqNLrUvLzMH9vsYqUvkpPb1vVB5avRpT4",
  "key18": "2xR2xUm3ogzARjQGn6rsjrLscYvzJKxwAy8hfAma1kjWM38pPNYgjn6U9t4JPyob4DXmsuVmTmswa4zknAf2ujjp",
  "key19": "Sjuymqr8aMVAutkckYjjpBH2AuzULgSjJUjrjG1U2QDezm7fqaDVsKZX7PHN5nEHsSTqhgBEPQv9VMV9pq4H7AX",
  "key20": "rG7oLm1G2Qgri93Lx5ghPgTeMdczKSiHwHemQTJKJfVy2ii7x12cpzNGSRXW8fo6YQ2dvVmmRxPotHwkrN46oNs",
  "key21": "4M6NZ3HxF15wifGqxsTXCqBE1kRfrrHq8j79bUeM9YwoRw4iRCYZVt3vGN7DaTJ1WKtJeppbA8gqaUzEJKBR8wWY",
  "key22": "cf7cwWX3u9RXcF1x7XZc4MHtjP2Gj8DVtGwjXxfEreGBQn7XZVchNDcqBLt1dCq9Tnj58pCeS5Jrdq61hVuv1BR",
  "key23": "3FxZYH2TjhNDH2MucfVQJtii6PUxUYYNQAfwbFcDvaBmo9562UvHmdvXjcQvX2K6ce7dUpCpAnDCzP6v8g6imoKF",
  "key24": "MrhCDiJ9bLaDedHsLrTDnTpXN7cfCLDqdPzcjLM2GSAzQBym1e6Vvtgk2mSKJzNhFLZx8eo7NYqmyor3wDug8mi",
  "key25": "22meCKEu3Uu92apYwTABoNx7LZg8SJTTWVKqFFUAM2b3aQZpzZsaMMKMfo6aQNLiSSTvtHDfvLxnbMkznJDu1HQw",
  "key26": "wYXB2vpT1Ydonxiv3MYKwmLTuNzFG2CG5mEVtdZNajAXfRQ4MTXSadG4Jh8vYUh9H6K7vHqUySekpdgvZNAsRnh",
  "key27": "3EV3Xm2iADx1dZpsoNiqyXgnW9opaEKgBzUJXzabewEySM5Qpj23gLzT1U51xz3y6rWmas51BwryPGgmy5Rwb1Jv",
  "key28": "4h2gKuTBL7rL2X34N5JFGoMsd1sM3Lx4T45JGTrce5NpmSvq211HmtYRBkDX8c8VKzxqMkGfzuQ9yEVu5Hw65az2",
  "key29": "5usUiFnCMFfvmVcZMFtn6JHqb9NuJzc6YWGVP8Gq2i1QLCDmgxQGpDPuZY3E8e5hSvVmcL1iqcmdKnFAZs4H9pyA",
  "key30": "3CFSYoJ77SArCLo8hmZKBgzcNTtJwr7NcK5VWu935SoffHXrAx7P3YedisSMkUsWfswcyoDX3A7GirTvYQ3DxvPr",
  "key31": "r7aSF6b52VG517jGn9PJSjuctB92FaodNCk4QR4nyy8fJzS3j7jYweTKm4yLzutYKR3tN9fhGXVxmHPbm6pcVHx",
  "key32": "5U76aHXzSES25obSUVbkhn2Qq7rGk7pDQVxhAs8ekC4xeu6UKQ1mWAbiuWQQsqd6kjcUxuVknFBYvJMSu2t3GFoo",
  "key33": "ztEo2pWbMJ5Zd6jvZ7sngxwiDCz5kZtJA8g6zCDe89ZaDSVAehnrXZnif4nAhsv9m1S9TSeYJyQyWg6F5wEmP4K"
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
