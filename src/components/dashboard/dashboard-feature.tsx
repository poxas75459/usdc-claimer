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
    "5a6sEr9Ji6xRQxidunHGZrMFJfZcreNq7AKkCvK3Q1nPRJH8yhoUoAjaQFCUpYq9NMkk1NproksWkQ3VdY1dme8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33hrjGXR8PYF5vDfmEJS7bN4EPHcY6tg6orgivhF2c7JfYCg3r4obaBbRQYVNsUuiNjCXoYnnGspLkgsUDqC9cS5",
  "key1": "2qj8jLuqaVK2WmpygE5GdxsH29hMkLCbooAHgLzy2JXTVLjSqRoCJpzyvP3WFGPooKXxev3Rccm11iUU4kwbyyZu",
  "key2": "26cMb1whAPvcA1ZZLoUsv7UDnFCHNM1qayCWV1WsQKbUyhUAcKHTC51dDtk4RGqQHuvHTC4kUowvb5N5KYoT1N5f",
  "key3": "5neeD6HJb2mrjMFnXL4bTyADnf3sA1TPMXuWd6WgqwRkJ6qYsUEKGhwDcgRpQgYyh3GZBzdEkjcJQFRXGHgcJSry",
  "key4": "43Ab7qDbWXqx93MCaKeY2rHGifrgn5HiPuzC7KhSZf6bD3yTwByZ2vSenotWHcvNANbjMWxFqqHyaw8mgs7Bga5K",
  "key5": "2ahPEFrcwRjY4PuqmTH1JvfuWKhGqs8EU2TeH6wo3JLpWNcop7W3zPmFsPUaei7tgG2WitC5YoQFFHGbwL4C1xDK",
  "key6": "4dte2KfVHmeGbLwUEBmCm26zgNPzauxpw3Z2Y6PRnn8rqkx4uA5fZZvjZgv4aaRd7RyJnSooqvAXwm8xbN6FgZby",
  "key7": "5sMXjVpQ7mFK3SfGGKk6XxdrF5cBbNBQ8tnKc8xKj8dYBgvskz7X4mh3Hu52741iZbjUPRA7NGy8LV3tFfuAH2ms",
  "key8": "KxBKa2G6WRyM9344dPaYF96RSKJyWBHZ5wMFrHBXKMZ93EQPMDwansgiArPpbTzDtk9mcA1raosZXngyhdbzfCa",
  "key9": "SezHGef45Gw9wNH2XT1ggiLNVhuU4gU1nCuCd18chLLLHjfbUmbFGJBf39ir9dk3nTsnQpnjUUBvJNbijjJm89k",
  "key10": "2FFgqYX9kB4JZGn7HJT6jtUvjrVCWrg3W1cLLsgdZ66S6uFL2A5B946uFK3WnAipwKaHtcPx9QiuwZbTJ18sVvCh",
  "key11": "4RrkmzYtyKfJsLMUGktCcV8EMKu3Ts9ptNSekNmRjge3UL3fsvyCoP5RbVrS2ErG6hVx6eNKvBzGQgKMryTwBuYf",
  "key12": "RyLc9ZBdjnBTWZHndQTzgHCuxpEosJJpRMwvVYTx9vV4eQsTvQrtNkgTbZ1oxGhULgi71xNctp1wx1cEyfvgVqE",
  "key13": "5X1yAoY9f64SSJ1eHwGs24MezeS8HwaN9CjxC7GmRRKVvLcraBYEfK6MyVmYm42KbhfgPSep5WseJSKHaZCXbBTY",
  "key14": "9FRTrCGRaufgEc5LvMEx5CWZjD8Kqkpxmhzb6ssEGfYvzTTWBaBcP8pPkEhvUMT6aEhKTGP8nfvf6r44F49iHx7",
  "key15": "5EaiaVGLBeS5M9rU299hJyXrSjUJBXRkW5w7qCKqfMgJZ4w3gpy45T9trhYxRQRLE562HKT7MHw9VbteeJFEaY4R",
  "key16": "5VqENoy57R4JgCqXjk6xNZppDGwHmzfVVyHWuYcmqDBXxoQTo7dRX4PDUyUfKHN9aBTBfWj4HYBsYwAJFuZRgcnL",
  "key17": "3vt3JyomeGzbXnagLzL1NAiZESadvsj3RqRuvMft3aqsaHnEKkQE4Smy2mHajmWVirwp5mv8q6MteHqssViArxcD",
  "key18": "3ZiUWrQA8UDeCzV9v3GLvAVfjcyNpWztFVD1DP4EtTeq2XfVAVrCgCyJuF2Q2qXktVxSewGVCkzmLRih8kCq362F",
  "key19": "4cERNoBZVSZWJm7RBx99FNVaKSke7A34CpdBKq636TddBPXXzmX14eMkyxbbg31XTo8hTPtXoZ5DcsQ2U7TVnXRf",
  "key20": "2PgPonNTe2j6Zi7HwNyKXVyfmcKDZjcmvogiHaN5nHyugykDnTUy9GF4Fn3Auv5JMWXnAmisfocYHvTbvv7SYnLK",
  "key21": "2dp7vLJbtQeF2rPcdacpQHJnzLEXsrazacvT4g2FrccHTtNCtbe4K3BwrcRc1KNawyUxNqES4dnLJcKjt1jFXyvL",
  "key22": "2X43aDyX37fdSFgmf9gwHnPFFA6JE7QnZeK4BVYd3yobgNnsj8cpwj178D12RTctyiAkQAP1Rf9ygozmo6DPehgp",
  "key23": "62CjAwhsa1VNBiU9pmgvv8yNy2fvMinKfFxDsN8AheY5fsDV7NvCyxVfLhcVxqNNxwvcDprHewDuy6smWisMfGCj",
  "key24": "41XmRZ9vkvjkgRM9iQui7BdH5nHo3fAdmVN3A3mVvdkb6QvbvDJsVajvtbA1YCTbKXJdysDyKGDhBLLzv3rKoCpe",
  "key25": "4bZxhpHdweEC71a2FBK6uEeJBv6GjvZFVgnj8kQdYHmdq6z57ZtudW8QHycwmAjsxiXzg3gnkGNUYjCKiFwoY49L",
  "key26": "2zNbZxS29WRsAWYBCoqDE4ubueofHbs1pbacVFQFNZpqT6HdxH9tkXURpUH9NAcdc3mEpMcDa8j8z9Mk6YUDKm3p",
  "key27": "dzyeF1DYABaQm5jRzUV3CA3LB3WFtASN1nMECSJgFk875LJwCwR9up97VeDwxRVCLsyn8kMYq62LKMZx6qsuocJ",
  "key28": "2YLfdbHsYNAzzR1qDJU33Mr6DhkfNPBBbqR6FRyL13Y4LtEswr2BDwYBUqci8ikVve7HYtzW8vM9qx6qtAucgMBq",
  "key29": "4UDm4PwVsDLujZ2aRBsPZ2w2eTSvasN3eHRtfZQVKH9G23Fd6YS8sNsDiUSwin9zW43zqeTxXM1vsni2qwk54Ejh",
  "key30": "3GaxWmtP2GZUknHuZDJQzoHHEaCJKNjAVwPL7FdGNmWWCYdEk2kg4FAtWAfgMiftoyen7uWQRDRkntnLpBWx1pDr",
  "key31": "GWXMVbNxfcpezPHuaykDNf5nesyP6VHRuoEqYJUhoB67iFNBCpbt7nTDcNRLACBWC74qdgbU3T5jHea85GuyL4u",
  "key32": "5yVP8mb9L35xy2EptLsGEWcXMUzR4AUC2WV4vtgKHfgxVHuRfaqi4gbLXbd48McxudX3RHGPMxvawvKH3WgrofAP",
  "key33": "45hjbwMcdMZc3q3fp4c6fvmwht2GnhhxEJ1eUGQqC3HTY1z3Lgu335jJ62UYiRzfEWr8rd1RRcBAvaL7tzArXGzX",
  "key34": "5xxJS696asf5ttmgZrbEy3D95Mmpw6TyQMcdwVevBa9f65YC7mojgUggZEA8EFfU66b7Vy3F4PFu88PftFASUzQY",
  "key35": "SPwfVMr7kEJWc9PULyHyc33tFTU3BoJNuRJCJhK3R4v6jaXVn4ZEPYpRqPHwN8BMcoNZS12bywi9TmVc3Phh1q3",
  "key36": "5QooMv4gSBESz6LVm1WrZeGnCdviyYsZaYCvNPGEu7Pzcnow7EdPFuQPcEYNxrMHznDzrkHQvcnD8YDvjGUUcNoD",
  "key37": "4YdXQVKCvTM92mhy1Js8KpMr4btw32qTVqwGjxYtkQFfTy8wLy5c8B6vg2TocgkQ5znGGeuZvoavP93wuYh48q1x",
  "key38": "3gYN6AiRqoEYFptZEQEYTaHfjr4WymxEPDxTyQjJfdYA2QUDBdgaY5H5c74hd5NzVF597rk8Ck8MUMTBnqnHpfD9",
  "key39": "5sVp92a5NJPFMPutrznbf9hSSKwQ1T9HnCqgHND8jvbcgRbRRX2rhwcr4xgruiBSdBfonPFiR7N66M2E1jLrjWvh"
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
