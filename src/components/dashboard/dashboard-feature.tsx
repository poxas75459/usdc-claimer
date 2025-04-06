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
    "3yufoxuLkiJ14fx2zfqK1aMV2LzJZNWQ9jSiANz6PtFbuy3EvurJQzXoBmazU98Ycjwu19N1ns5GrYy5X7H2Rp9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HqNxc1saAFDhe9dW3HrUv4YcBU5dfGkSgTDff4EqYPw8Fc7aeY6Sx3aGrGKdGwFRr4wf4sMx2kBdZrrotFmyqEF",
  "key1": "523PAUTZf1swjXFBJAos6DAejQp1eVmUxcXAgWrwFkDcJcN6AbU619KZP6KwSTCeCk6JQDWbRBLiH79s4TWhdmeX",
  "key2": "46hfSyTzDvbqUhJ2pY3G7ouZVcdFQBEnNk6D34HvkmVHDi14ieggdCT532zQjjbyfbBSFMnpstmRmHTg2zibjzrH",
  "key3": "4oejVF5sKK8dD5MZ3THYXmsFoYmo64H4p4xGR9cueYXwFeQd49z8kvXesumyy87bLbMkQvAzHKn4hZEDceCuR2o8",
  "key4": "4RVe6yQcDrVgGmFooLsLTueFiMeahDFzW34hF6q1cnEWH5S9GjxyWTH9HtTaVddqoMSTBF9uozkoNtnvpxPmVwuh",
  "key5": "JkDosq9ZUXwY5C9poWjGHnkkZtG46Y51HpHQkXdUSbx97S9u4HEH1ta7RXpBDUVfmWAKhEwbfVdLxoKLgyNxry2",
  "key6": "3LY4Hdgq58Na1yDkw72bnjPyVUkHLeiyVTUJNwngwgPuKwYytMSv9qZjexsTC6UTBg8LMPiAapygpMe5oZ7BzFyG",
  "key7": "5D4QmznqgQwC9jt8yW8EcoGX5GkFQce4qtutkb4DTGCqdBSqpNuvvSdtLzDCJmahJ9qh1a4HRC4mhoWnPqFzVULr",
  "key8": "2DHsXJRxtR1Py52GEPXkZsanxiRfRukkqz4fq7oTTdx9sB2PKGPFmUQPmHrkULfAtA3Hp4z8UKohWErcUrXDb4Da",
  "key9": "5V2ZDa2yBUezcbkZBnQhDiqDwYq5XyfAvziCotdnbD4xHWKheuN83aiZ8YQ2H8ejBQrQiAWEkqohvSJMkgu6h1gK",
  "key10": "wCuABE4bBaBtubxCEiDRJF9NxyyF76TTLh8ARokx2WEEhgikvvipd1Kg83Ce8tUH6EffzqcdpPQPP3F7arPHVkX",
  "key11": "4rKDEUGKQnbZ8527bXb8wLvf8jFHyDVVgNGvXXwwKgxkvcx2u3vTiUWPi2u1u66t4BTWCsRgNM8PJ2K5aqL9zkS9",
  "key12": "3VsoT5oyXAnGGLqXz88XGFURigiAVQdsB1uoPxsfZfwDrnYGbVvz4mQLWGWGWHDPP4jadUu4D7D3sCbJ6GTUkN6z",
  "key13": "5iEUEybeKtrMhBuDSYyVnHKDy3mW48dL6dJPr9ndBdnqtMJQGgxPQXr6qXyb4ufQFKZMpeY8Gz8B2DBRDPVfcuxb",
  "key14": "3csG2PEPqLxSNaXYrcKPGNkwTjY6MXC3anXBK3wYWHbqVadfKbF9sphnQLRf8LsAcY14aWZYdi5vPkqo2KHQpQ21",
  "key15": "577P4fqyXK1RGeyP84w6HfLZcvujHGbqsphUFyykcgRKuCmWprUa5S7czyNoL49PRDvNhzQBnJCYwLL5oGXqM45e",
  "key16": "2yoQaAkDKKadKUVVZeY363WJBa6b1hN8NjoPwUWA7PSzZLfoZRt6F2ku4KwkXEkTKZXGCKwQ7JyPmHjEqn7tor3J",
  "key17": "3LDLfjzAMLceXPRPfK58GhWTz2BTsD5kzuvVzuwFnrRW9wvZsAjvP7PZCcq9SKx9h6tGRAdMnGVaTopxzmQLLw9z",
  "key18": "3CUHZ8ZuihDPZJcZo5PqKa9XE4ruJBJgEnQqtggPSm9kTP39tQNfdfGPNNDzxoD2NuxorjCkJXmwK62tW5saTDDB",
  "key19": "2m4K6uzMBes2Pa3mKQ845Gu533tFvBRJWSx3DrMQ3DNERqjZ54ExEbAK6KcU9JmUHyTFAkZ25MhVYvExhLXGRTCz",
  "key20": "5GrQ1MNwKF1EWoKMqcnemqYfaFXqEzL6tFQhubsh3GfY6UUA7F4rJrv2vTVqDuBqdbN7efmkJLnDzfZmJMryYCbY",
  "key21": "tgSZZEUveB7gTFyYVn22W4PW27a2joXCpGebT8Je2XesHQtK1M6Np63o8mibrrwCQ2oxtSPS8BfGs3yt89NtVin",
  "key22": "3bFg83EJpTG4KgdhGmxL2hn5DenLtLKk12GLR6hcSi87af1SENaF777P1LQ2mnxAekXzLgxxMnYFYxoDY3vUvnhe",
  "key23": "2U76yEVmUweYNjTmv7J4XoGmSnNpAEPGajH2VioGUu3fxo1gWZzef8tGekNaMTG5VSmGVHRVijHUDT9xMUtQKfA9",
  "key24": "5dk7GXtReS41w7wf83zgWyEhVk93VtHkJ3RSQGVgMwfVYm6q9Dns6G24YzF6R5YMps62YXDsfvDyyPY2ePjqUKEy",
  "key25": "57oArgkLBye44BQXmzCmDWtynTkMNmWJXVXwAYvqyKEzoBJJE4ojZVjadynFvjfegtkKwb8UNonVwqVUZr8xfaz",
  "key26": "yRAx9WR2vxGgTLUWUvjVj4Y18eBKv4PrVEdP3srp5MPKGZD6qEBRNKvjk25gYuSYGgbKuLWrMY66r8Zhj5tzkrN",
  "key27": "3cEYxkTh3z5SVCHcpcu9CSGyFa1mku8S6FTuix8o3WUQ2UeCnkBBXtxeBzzJxEb6VYT5iGW4W1dkeUFQ3d48TRpM",
  "key28": "2k1cwur3BsD7pcDddaoGsaRhPRG272PdfpXMtm3nLb6TWJonMs48p1H2ry4N519Ay7EeybVwkMRTdDhLLnX2J4Yv",
  "key29": "ePxR4rhKGo6WL6cYnDBZm7sbbkbw9MpgsjAbpShLa2CfVANJrRamzo9AJ2yd1Bzi9ZfRiLeUMqm1tx9Fh1WA7W8",
  "key30": "5A4yve8q5CKabj9Jc2SS8MJ5B76izpK7e5ZYNkBCHajSaktzbNobqLSw8K7VjSHSY7GY1oi1LqY62EcrYwSYCUc1"
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
