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
    "38x3o3g9U9Tzf7amxyGTWNU9g43cq8jzUGtV9kjYd5WJrRKpHXmmA2oLcNpSHnZc9tKxxBWLr3CwcQ6DD4dtYreo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mpJQDbquWfMf8rp4Ta1Ymtdi9WbU3Vm93eZHQ1aNt6MSquGtzA5WpYyhz8CXDaK2QVhLanXr6Ka75y2p2V2QtBq",
  "key1": "5aFued6Jhdwox5d99hQKbqVhugvpg32P8tjWRJ36GCVzT3RwSRDkZ8HKggrkT3sjPFisd8UHg6MKZtDzSnwnBbFT",
  "key2": "2qdScCmY9BLtx662Yj7APD15dhHgxCrWf11Tz25VvGKNKT9vFB5XXmmhXgaNJUGttQAAbnnumGPiHYCxUPAutpy9",
  "key3": "7KU533ca31X4hjL44FffQfgRUF2hNDWLTJUe25gXH3LgiqofvMR7p1njJa2TKTsZjZDE79ySUaZiXmWqJZPZyZ1",
  "key4": "2bLyBzNocYzQkFFuQsb4BgyRGkkpZDnFzTkzXvRM1wHnao7UQX8uZioqtagat9vNNeWUhTD5ms9jPTv6Di4LF7XH",
  "key5": "5Kzbv2BhCjXy2mAt9jrCmnJFQCmEv6RGLcuNN75L2oRg2SmSTdYniM8M2EiqeozTpPS6K9kuYXeU3xk6jLGSesqR",
  "key6": "3EtVAG8eQbgwJWM4DbtQ4xi1jzmQyhpqpMBu9vrgzXVcACYBNBAkgAC7mgCcvLHZgX5t2QbXBpyN24e5ZmV7MXUc",
  "key7": "4dwhRME7k6UYhqCcyCmtYKaTSPuu6qzVqAVVZCiUBw4A8m7yk49LbF58vFKagcgcDLWkAPZU94Z8VvP9sZXYqixa",
  "key8": "5ZWkedki7X5B7BK6ZCt4rfQexJ5FmHsoqRQRFxjycXyoEk5F4fM4YuUXwoRy43HDi46AudhHor3M3nCyXQoVpFWs",
  "key9": "5akYVvf7jnyyZ5V5GmGK6XQF8NVZRXLkmuSDMsnpq1e4eBtmmnHMsMDcdxEukZnpD3a7bwst3Xg8eE27thBD2ian",
  "key10": "vFVapXb8i8danCD7yR88DMbUdjyzLXywcBbEuZfDfPVdbBEiWf4nk85Fm6L6bsscS9RnJFwSKZdUdqKEvyJeoS8",
  "key11": "4ZnCnvuWcTdhzWQxfkHCvunVsRpxTRjsK3kUHn35bTriKVrxHNGocJjdbsGfA875xmDYQo23wxBVHdgbLyAjvjZT",
  "key12": "2xAGqZHVrG3oX9KXpdQAr4asTqh5Jtqo2Pk9SD9fJHh2uvtHpuUwx5fjAeorT2DUGXXgURSbxUUMqxRYGv8a2YRF",
  "key13": "2xQUknHaEWVbGYYqrA39VbfAj1Bq31xN2v22qg2uHA52Ts4rpgRtpeSkLvA2YdnvuxXYjowdkG23RTCpDAtaKb1G",
  "key14": "WNn6w8Qb6U4AHtLLEKUAELHxa2ZuqL6aaMxjz87yMZ2vs7QUJptwAosqWGtc34HTnTh48wwVFvcFFr7bjoje8Lj",
  "key15": "4CJNghhUAqoJUKbzgD961fBtVNvC1HcVuFvQ75jRZg5cwj8MB6XfRV8B6cif5zKmANb759UFoMZnGvx43DvXstoj",
  "key16": "5cddd82C92w8f3k6Ci32L5GszdSJTkHQbLYcw1UrmM6EKmB1C5MS3MrMo9ZSR8iXmApZuqXPnXAjxXiqfgCuJZoC",
  "key17": "5M3oY3Wv51suHfymXHKYAgozvHwAGNUKcidY8qDzPCyJx33vHQ4w9quk17fERiwVhNu9NVuXFGZnSTqqHWcWRjoK",
  "key18": "2tBqboGpTxdRUt8kkuzEJu14XLsQnJXikJYQfgNdhqtRmW94ZeNnLy3QkSnjjYHo7JTgocUcRw9XALs4Zh1DngbL",
  "key19": "2dpq5g5XwEnhe7uSMurBVFfJFemJBotXzW4kpRMCbsmohGB3FKQZ5TZ2HspgpzZgUCdE6tq6FFc3sojpMizdQxKF",
  "key20": "3HpxaHb1DoXPvLt45KjKgdr5QfcVZnz3gHmJx46VaLrJLmqMCQGzbBimmGms5g8fzkZqQooDzbQMM5W76y8NoSKH",
  "key21": "62ETCVenVhGuQx9sHhQ61FpedByTExC4zMana2s9vHAGx2jkHokndp8geFq114pSCZFzGyz8m9TnA9ZqdE9bWnpX",
  "key22": "3ymyW2tDdxNFVAyYAy2Fn4noQ28usK4w974atwBU2CaBLtmsymjfYzttttSM5do356jvzGTeG1iNUHGFB7yRHiCy",
  "key23": "3iB1TckKrpwGdfpRKCyX2qH82oV4Tdm39bT1h9rt7LEQZy7sAb4ZGsvMgKvrrUzhYpsNQz4VGn9KcdqdoyBCA2X",
  "key24": "i5owYnCbPMbyQcPuMd2a9qpPA2RFPJoy3utum7hY5Udnw6pkvmzsCrvQCSv51VEi3j2BVMDz3DWf7wxxRMevNys",
  "key25": "3pVdqbo54WwGVPKUVQx7F2axeDq8mYszqmZBkPPFQ2JFFBrjzfxHTH9z9XqcpvNmF9nEXqRazGrbfM4eaMzxGXeb",
  "key26": "HzPBFogqfkgtBaGFDxU7WzpX4Co6PwCKqg4HJCvLe5vPPazyXFkawHZutxUcmksDye7LVz8t1mSmsaT1ULJkoeu",
  "key27": "1hUvvdLV3VthUymd964ffeJtP1zdNHdrs7kzXT4qYinCfK6aNUwHj2z94akuVu9gQ8eqZd1smpuy5kTc3PvhfYk",
  "key28": "Fy76LKra8TY8gWYdsuPMdgEH8QhxZ1iaGXgoUuYJJbjWL1QxREUGx7yGiZZF3syDNLuRNFVUciYmr39C1VzuaPC",
  "key29": "3XAUUbrZrHwFtiwjYpHgDVpzrwhLwHps1Fk9u9waponmNi72TRGMjJCz68r48gAfEbnnrUzJp7YX8YJDE5g3LNgY",
  "key30": "3HZhKbY162kyoG88yvkqJ2UPva6GERpmovPGkEts3Dh51Y8rjqYz6P929mFLKrX2H4JWrceNiGBB2AZGbtAoKMii",
  "key31": "3ZPavWMGAURXoeBLvDTizVKXrswKkYjZXg63rCshUyNLg26FoxwtL7T5of4F5HPNmYG8bcCz8qdistpnVBD3TFwt",
  "key32": "3dJrPDDwinKDCJ4WXcTwLgpUn8pphxTmLNguQ9uT6VThEXaaTRw5CvyjpLnL5AZH6Z5yiGxhdPEqZWxvRkfQVEb6",
  "key33": "wz3h7jSKQJvsrrdz6dvr97KCpNwjevqynfFbx5gNmrsQxHd54XgbqQjriZamufrStGoYByYba7eXAsnuTW6LWzi",
  "key34": "i5pJ2G1nrZg1VFBrGTMqqaKE1EkBHjDVgoUQ4KvTADBGbxHHFKQVprPvU3PSzmw8PyjMaDaGciYLexCjBknkGMz",
  "key35": "2h16NFERvZY2TgG2YPg2xkLsYxHNwSG72A7DqkkALn2ThRXjdehHJuo6vxcjjfFKqtSYfwkwrqQ9ZTxn681ccofP",
  "key36": "2tkDYR1JcSr8hFEACkhvs3anku2k5TDVChkjRMw2C5c5SazMYj6FZZoPQJLS9hZZgzKZGGdQFbrnpCw4TqVTK6ZP",
  "key37": "3esQ82HNQG2CmBh8XBQGjDpntfKZuGDWaqVDFhHzGMzQdUSs3eMmYKgTodrM9UJtVD9im2yVLGqB1GtVEn74Vheb",
  "key38": "5n4M1DsgtinmDR5he7nMunMEuxffCmJwS3gKxS3rKdXwzCHTZohAHvN2EPXZ1kDffR5aWeD53qxThDkGXp6MiuGy",
  "key39": "54oGv6CNaj3kYm7o9HiVY8KFT1DHwsC4trU8SWtYr7ogprepmK3ioB7vPbhwBYAZ7iWLB8KBaZVn9TmZSScoTd3c",
  "key40": "89PvrnG4ks8yL73ohNp1ZSKyjWhfCizizRGxN6FKCkDLNnxzcT2qo9UXcFdWLiVADaFVFyuEjzaWqeZMppZhDyg",
  "key41": "mgPXZhvFiR3WDeeJ1GB7fsb6HkTte5fyZ9dJ98L82MUoFhdQLtTRroWJiKBv2gok9CqU7HZGbn28PHMMESUZUnG"
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
