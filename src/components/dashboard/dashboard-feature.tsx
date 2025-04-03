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
    "3oyrbo7KjcNqNzh6o2T3H2HS7bAXNhjZGvaSJ7vc7CMZue4u3tqN3EAZt4jSPsbfMAuMYeeFCkgmAHuUMMQskpA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x9YzT1ZZ4TjvXV93x6QHjsVwhvjzxYKPhvX4LkA4JGKNNxmgNccHhFmN1dwMk9Rp8QZUfLBdBdwhXqrDktsFNKz",
  "key1": "2GcKpavzwQ1Kqxq37E5EyEq4FqTz2ME1MbDGUePJmaW5CSLuZNQSDNDx7t6r9VBKCF3hymb4Zqedv9Son2q8eNyA",
  "key2": "CyEhuu679LRMNiq6J45GzUFXoVziFVvZya8fepYLb2iD3XWSNq1KNg4cRWq5ShMd9BP12q4vimaA4ESfWJUfTZy",
  "key3": "2iqDwQ8Fgw2VGvJWYr9G8SdVJrPtqugJ9xfsqgUVmNCUhwAqNGkgy4WeiiQDGSUQSG9LhDrjLLyu9JsQtp1uTwsM",
  "key4": "7Vos9ziKJnB9tDxUcaVY9RLTv98UBYzwLQ4NKA7fECCuxdfN9mgaRkDHAVCPmh7Afgw3V62sppiRbBdbDULQ9JC",
  "key5": "5eYc27gvfcmwvnQ3jZQPBGHNSY7CvTnUuyLTXriXvv7cWW9w59KdzNqy24MM7jJ13QBzaz6HtkPj3zoKEbEHjjts",
  "key6": "3ACMC66Q3RZBZHq55KndsYsk28d1t1puEekPAhEGH2mFqbQhKpWHJVgktwLS1LwdBY97nrbt6rzE1d8FrXP6gXnt",
  "key7": "CNV4QwEqMYy6qk7edEw3b27TXWLFt11vnBMLr1H9bJJwKpsghVVshsrSf7bS1WfAyzUGJzWitdhSVdih4dQjPzi",
  "key8": "21ynJqHWPaYLLuzNKB5aDzbevesjdT6mpy21zzwyNKt9Mex9319UyxQ3yPTNerPs3AKoMGqNy1BUojdwXUWXyKzq",
  "key9": "3jdDwk1p9xNFyTWF5cMbNZSxZFn1R81sWmjsithv834j3BUMJdmSLwZL5XinECzHzd3SvTuMsS6PMeDw4Qzk9nU8",
  "key10": "5rhdhnMdgJCSxjuAmWiEGCmTi5ziG1T7agny8VCyif5YJuHeFhLxsoaEVbRJNN4K3qQdBJrgbaKxCMUdYSH586xG",
  "key11": "Naq3MT1qzv8jnkP41T9jhvD76EFkBzNgSebYgxhK3d3F2sFCFqA4sc22GQAibWTzoSFi26uBbCsmZ6HytCjTucB",
  "key12": "4xkKrtutazzNyDgWKz6nHD7DhfvvzbWJDq7sbG1qd1TyytXvZDJsaGizzYT3ioTRFszr7oqjHCxJFzm5QstXNtZi",
  "key13": "2HgoNd92QZZy7xswqvoFHHN2bPQUdwa3U23BMpV48W2vVbVhgJSbE8cTu4n47bDMBAjjBLEZkRoF88YHkefyfWe7",
  "key14": "2Hoz5p3Hs3UhXYir6D3dh91gh8uM4JKCsKjc2DDwzHigPDhX9LvD7txQnwWA5Wdhc5casN8nGYiEvpVofkXeoAdz",
  "key15": "3UKH5GyUQcZLRDPHUTFHVU4eUjN4YWADinateQSsbw2BU52ZGPRL5Ru3GBqhwJTtuoaWfdrvDbf6rwjDpLriPo65",
  "key16": "2zRKQCyYb2muboqjUw1wHvzBu8sksv8Y4oq8MsxudyPurpfz2Ke9QZUKnGxXtUyGEtNNbhGJDYgaofnC96otuqyH",
  "key17": "3DPpc9kJ5uMm3s6JsLA5LFWwP8RJvSmgXFuwzUCWEmp6sxuLAdtnphJSnfC4c9jQsMJ2ETLoNK1eTB5L1Eiu7W7o",
  "key18": "2noXBzzS9F7nskNZPcMMAC4ZWgai1PUTXMkCp7NUtcJWeoB2RLT88McLSsBDYNj3WjkyVpnQ4SegtsUzjc6hAqqt",
  "key19": "5Vcm2bnY9qkC3ERaLGBYfX2jYuqYUvpQnywZiZag1EZv89at1U1RMgP7V3wGFQXC4ZUqe3upd6BjvPZe8W56hvF6",
  "key20": "5WoTzixDcPxpfJfjAz6J4uv5wcxJyCUjoZ4bwzio2C6CboB385ogqpHwsW6Go1jUUoFWoRJE3q7ZmYKQBrq3y1g2",
  "key21": "3JnamMBx3XKTu185WBbUMnpznSrH9BzYBB7o2EszmWnA2D94GgQaTX4j8hFXTiqeU9QhW6zdiwEnwg9A68rgTPTZ",
  "key22": "2LNzFBvvrBQ1SxWraBmgZ7q61uTEDmJba3cA6N3nBbAhvMoh7G9WQAj18wSYk1K9BcS5kARCmeTooGzbzygCvdgx",
  "key23": "678X8WSDh19HnrtDMqLy9xXMMZon9Ktj8uTRr7thuy7zzU9Dv7mbGryNDG85HsToYEvP9KvfBFXCbGbbe5QNQKfe",
  "key24": "3WH71xhU8hHtBf3ExfaGfXQR8KodFRyKF8yJDMinqDF3rJSdCj4tTsenv7rQjpqbSayKFGYoSfvumJw7Wmd89zvP",
  "key25": "343fTZFMn5Y4j9WxHf1ifYsSu6bBfbq4ygT8Z9n7rZJaGhhUhxE8GrCbArjCfj1BDfYDUhaKbVfkHNghFc2H622r",
  "key26": "3cdz7x48QkAawnnicNxaBoNrjjajDTqP7GjMJeZc4E5WM6sipaDRpCyLfCvZz13sKmZHrLJAwnGuiCqt5UNJXQkc",
  "key27": "YfGumgnsFQfRTXiv5Fja7hFmZCx9MyerXiQkdk8f5JjTTQd5dYBd754ND4AFFgYadM36jyJme9HPUYe1oC2d9Bw",
  "key28": "JxRjFxrQAr3gGorCKjC4it7kwY4urxmzbDss5Cb23fNU2YpygE2LWjEjRT4JaZuHsn7FCsFWaAnj3QBSab253B3",
  "key29": "iLZ4GYMExRpdD4oEv6zAFgGinWZbzY7Pr8W5KnxRKePTzk4WGLaCg5p46zedU9eP8J1Pn8Jod4w9vux8qYea43z"
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
