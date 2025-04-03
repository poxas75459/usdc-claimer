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
    "5RaMjQGpbN75RFF2H8ke3SVpnqzoVETfsntPS6fHmFYJvJwXZtLm5AUoXQAn1Mwz2UDbvFWS23hd2f7M99dm84JY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b7543YBfwfxqRYrY5mSDLirRM53SMGZ6mnFuVy1Q1VnGhSXKsrHG6NB3fYKihrHCq3MazKtABtsDkCrcY1LYLHN",
  "key1": "3jMfXGhTZkHhP7pqcAes6whLsaA2iD8CpQhTw9WLrKNnA9aP2ZCih9iFH7WYpqzWCAnhf7zFpoL19spLNNLZnnBr",
  "key2": "4jdHDDYfcZfuXVtAgAK6uQ6zxfy4WiNQkaFWHW3U6r2xu6UeWwTDcqsMeRzvUY86SrxAxQh6sF2xKjkq4Phzh5hW",
  "key3": "2cf228v8TfbdqGQq1KdoPiKJpthkgaj5HLcMDNaJgJh1m7YmPS8csu1hVEP1Nhz7zfcqUtcqw1XSAYWZEAwcMfV6",
  "key4": "JsYevuWaACa34o69B1ME8Gv8U5YAzVhoiSRhTL6TMx5p976Ke7Z1mWwYqSpQ6qr6DE3w3pWt7J5aGJcCBtwVEey",
  "key5": "5NFhfgGPLqGQw9r4BoP4vGpXkqKBt2XjndHJxJy8jAp1kxkTBDUrZ75DDRuYBpJsGMVJakwYqPZwiCkURbEUKVHJ",
  "key6": "KAkhDXmKAhsjdqN17epRUYVobEoYHBMV3abxrc5mhnMTHPBmwb9MtJRcwPCEg889fVRFddx2i88NpAmnY32Z26g",
  "key7": "2i7ppot56RLYGRsrXAqtYkvHQzvQDArb35F3P2PrkaHQx8ywe2iY4w5uEfcomKuQxbwG84CaSec8nxh2uC3VoqYP",
  "key8": "4FuGTDqV2kAN7iQDd8PBwfTGXqio5KxpG3aqmejpeiWBWqp46TiDCwh2R7HFuSFR28Z6t2EfjbNdZkYhsEYwtXrM",
  "key9": "28WpqEzKNSY8rEGAet4qArhq3Zaw6qR1Z9eRi4C6bFTzN5C5XjDLMTdAbZfp4JqZaHWi3JCFYCsj7HEiyjGMMdj8",
  "key10": "62knwQoeJPM1923pi6321Z86Ye7pkjoSYrDVcr6JwY2T1QP5v7eYscgEQx8wrNxmQSBxAbeR613bqyzW4mWzrnhg",
  "key11": "3QBRtYs21JJsdRXYWGhV36xdMDmK1T1kHhTK69QVjn17vzEetu5CQ9ZC5kFHBpkzduixtsxtTuFLtqXyZC41wZLN",
  "key12": "5Eik9JeD8Ff97MHBFcvcgh5qQ3n98zJLmL9m96qYaMM4U5Q7FW9ooxokHtq5s78em9x661VR28xEfKyD8DJsNLCw",
  "key13": "45Xt38BnEk8MFjQsUX9Yv6wK995c76a9ugXJx2mrLafXgea4uFEpYerKAk5tVVohwy2zV49CVgsRuYpUQdSCKqnt",
  "key14": "4bMQVgnAG4B2nyR7YqQGyB8N7fU3oTFxWDsqwLxjDYaXVeVWRtbvgrPZswX3osLqpzACWRq9crV9xZYUPm9orw4S",
  "key15": "5Vc4sbGbaJuenYnx7kHzByZaA1n4xg1zKRzYTX72ieqPsvAWWNp2L6eZdccnk2WGJ5g2PXT6w9pKSSo6Eq2jGUSk",
  "key16": "47ufhARvADj43B18mN6MdRyeDNwoMmf5EP3ckiMCQo4Jyr8AbXG9iZmfYJPTUrpJjXyKoff34N8J7NSm9Y7miHu4",
  "key17": "2mo1YkmS6uPX724oRVRzWFd4hNxYSFeVzAuhnn7N6mwxwyjJYnyhBN6GfV479Qq7cwFvmV7nwL28ENsinjbVWYte",
  "key18": "4YjvUc1Y1vRPrbV7WTshTnJLTVJEe9o9RxyASqSmzWKQRKHdE7mvfainVAhvi1Bdzqid5qdMWudUkN3zuKGgRanC",
  "key19": "637Eu2a6dfBacESyJmeJVXd3AQX2Mvhm4H9yDb7MbVVuVmsKsKnXmhQfZPxLCa5g9rdXufBQHdRcfm9cGcYT3J17",
  "key20": "2WaF8RhvkFY2fBvRdx7dgLXjCT97At6ZGtXWf9z44s4x2Z4McM91ybo7ANZDSeLWEz2zeuCWCe7HbCQ73JtRK3f9",
  "key21": "67BoDu7cyVLQsW2W53xxWumkSHgL3qAq1VmSXwcbjrpWap9MDzCP9jJxL672mttzkRr279WXaurBukcmsX1dd5g6",
  "key22": "4qauVcvctpE9YbE4vy3qUvFfRxt8qWAJr9G1DFKtuVz4kGoG3B4C6dtT2i8padf2Qy6Y4Hsb17oMddRrQD2SPm7Y",
  "key23": "3Q13cXc2cHeDnKFRTNGhUU7TUyYKXLvZi6zXhWPqPV8Zyi9VGc1Fu9hhbC84E5X2GqXCgcWonT9KL7vvUbAxZMiT",
  "key24": "3NG5AjXaW9TDAYqqY6AqYtwcpyc4P52B5YKDQaq5NpAtoWp2VM6kieBXHkzWSbLJqicYwhGwKudDVVK43yuayfo4",
  "key25": "5SafbBAoAbMr8VFurAD4oXgzwmskt6qyaPhsqkYhv4QcTsGEN1GehHVuVeJJW3meApgFsPqT19bVrBJC8DCko9Yh",
  "key26": "5DJp2eaB5ccudWQFbhYFhph3rDixouPUYvDhd6ceWKDRJ39bNEjzy47MvnAUVrNSvTcmR41ENbzJbksDdpa7S61Q",
  "key27": "22c6AK5ggiSUM7JfKd1q1MCLhjCW7tFNwXBAixUe2jzTxGqsMmpsCPjqyK3v556FZh1hADpdW8rmXqTzvD7wmCXM",
  "key28": "2p7nFyjQnse6ha1LYdKEhgDVyeagigjyTPacC8EASTqs51GoBtLpwU3J7KCdYX24E2XMh9US4EKSwombsWLZSe3P",
  "key29": "594i2nXNW9Z32rQHTECpiAcMWA68zqFhz7durVwYdE3WzSCAF8ZFwpaZCh9Sfz7ht7N5VL8i3tLv3ggXmsgFBdjQ",
  "key30": "3ZVcK7by5QCrTnrFp2QdDpvPRQVB9WXYn5B3nSHpoQy2ST6SVrQ4tZuhNZj2USF31iJAqYrH8MGePQ88Mp17w27R",
  "key31": "5svUVYuMy63j4mhNFwAMTxftv6Wx8pxuBWAq9SaFZYGuwVEFHQ5z95wLnkdpEwXyWejqHneu8v4a7EY28GngYX7o",
  "key32": "3zbb7omu89XJeCMPfHUALPy1CQv92xQLA8UyDaABoKyYa6C6D4QYtG4yf8CWX6oXervzVaMDAKTNVqJf5aBRfp3b",
  "key33": "7XdWnATQJ7WX5EaGQYT51N8ygM6u7bpRCA7fGnQtYeztvE8Y2cApcabkcYtbXDLJ1LffcUUR6WQBU1DbtZ9bqn6",
  "key34": "5UhhLDZSrfrfDgRuoJkdHrCnFwe22L1x7NVoK5FsGYpnWyS2zfdEqREoCRe25sFQQJYHgvyBjqGodb37x4XWfkR1",
  "key35": "k1zoo67yx5tttZLZqbm4xxrevS4p6xVykJvtwVPYV6ah1XPaQAVKMqCNgtqJcWmToCTC2yJLhRvGDghVWFqA6Js",
  "key36": "41WJg2yoGa5f4jo6Uhdxqi8ovgW7HEBP4bBr2K1bE5RAKY4j7vfcqm8W37hVURB3wr1YynGt3vHSxxGcr8GSHjcW"
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
