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
    "53sR9MsgxCF4gMN9AeTDaBwySfruorPn5KftuMy4dZnwKjkuWAQNVxDWpeNhuHaiTfKv6WZTWYLMf3Zr4oQDJQ1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mHpTgKTPCZfMu1cG7FkoZBqYP5eX42NiKisRHmtya7XAntFpphBHdwA1xBcPz4vSTW3VUWUDb8KXKrF2efu9w3g",
  "key1": "4mgLvPPbggnfKXPqtKLJxyKSnNSTyqvA3RdD6BuSSeCHvbWs21uu9CksW5B8TTVYjo63wFw4ek6DRYvygdmeTFFf",
  "key2": "4WQ1mE1RF7n1Tf66qPzRfK95CCKByFKCPAnyAEvUbxQHFNoTJsvr44pqDSprma2WvfpSbDukdmpZHuQAKjHx3WrW",
  "key3": "2ZVxnQZxP1UPuBdjYcSzAxJSikw4Vey5di2nbGgCzsbXQBYx1ZosH3mxrsEPZRPDa84QNUGBnaYGi8ku3uYo4dkn",
  "key4": "3jG7CF9YmZK8PwoL1FFEoeTMvusD8WaPvfQ6WZzLpmHcJzY1A8Pe7pvvEQ2zGTBcXjt8kuf8eb24Q3UV8iLE1PEq",
  "key5": "2WWPNqXfYTeDJjXm3jG6TkLWB1E1QodN425MR5dGMabiRPqM13zVqn43SsLFZRve8bnZ2xxqUzEPGfyecTSDz3br",
  "key6": "4bov2hupLDLkXSSFcLq5kLHifhbG1zGczTsAPYrdieMXVwwvae87HbhJKqznKGdcMgNGdBMNBp6bGc6bzFD3PRpN",
  "key7": "634zK8BcRoknq8Q8bDKcLiz1U6ArNstEf51pVafUPYyLfYogSZEccyHuKTPY6VwJYDf2E7nyfxmV42dx1pf7KQ4Z",
  "key8": "5ztK8fmLTcjNXL1Xyv7wVhqFWwsQJPSKEgMVmC4KNDnncdiDVY44Ad2c7NePYetZ2e5nMJJsfznSDARhS42ymqBc",
  "key9": "2XVT6qz9UiHRcD1PqAGStPi1hHUwmi1jVGv1TVfqLjUrtdsKHToCZGtBHL466hVtai3PXja9H8YrAQBVKxvyfjXZ",
  "key10": "hx2BqR77PPz875iCQ5crfPRXweyu2RkNYgaeUZ96a7hG1w5ptTP1aypu8ZAxxgnn9uLeCiDSpHKcs831kVc8Mys",
  "key11": "3ogAJQB5Np8YxSzzc2yNqRWJMw28GPHVqFBKWtFHJ4i2aB7uCwQpbw2LYXzCcJb2FAGyrCsKoRvF3zVdv34oq3a6",
  "key12": "mFxqM8nfAgvE2JPbjYnRCDXvX84RvLRBbaNqx6yAXveU97ijPn7xAPF62u8EfuzugHCiLfk7E12WZSy7q9DhczU",
  "key13": "ynj77iDs4zNpNsVcpVjEXqrDSCcuEYc9v5x2eES6Cwp6SnWU2HtjtSPfuACjUWtnBuX6Ui97UF21tMwefcJLp7N",
  "key14": "eq1oEWHrDnD1dMewiT3AQoy3LxxJTuZ8Ao3d3ohahe3SjPSxVSPAL3b6VVT9f1PPysnofKNH8ZJGq2YeKS67tBn",
  "key15": "53J66YEwArymnZRYztXDkgcjAp88SpxLCPb84az7qsDMM3thE5nyxXqyY1EciqJxcRRKFcBrfUG3PveRTH1iryHk",
  "key16": "vF4vbHfYNwcQs4paBT8XZNfeEdMpmuGPXkJmwUkHpQaqHHeM8wnd4Ys2AXUxZ3RkuxZmAPYa9QmbkuYfFt8T7kt",
  "key17": "4G2GCHYPaXbMxYEXmhWiK5v8J66nipKnMKMRscJ2DJdpZyLxSpdCBj26kKVPoy1qFGnhYnGMMKZE98mMPBTDjaZx",
  "key18": "61dhmLHhvdz5S7eewtPBzaxGSjLQBztw48hbPn7wgL1bKWNJzXpADW8GBw7f2xtTu1pQJdPCEpwBgUA443eCg7bS",
  "key19": "2pY4ZV1TsNu18VGa2fs6PBnTTm7dhDa2YLTprBWgZrnLkrqxGYosWbZbVp7LRpyFPVcPwhmgqV37UcVZ2VMsQevk",
  "key20": "3FLp1gqsN3rVv4SaeGa9CtBjwv898RaUPNCLuedmvwNwbnybzQvJs7tk5KEFng9yCVCDc8DjiGaMxZaG15k5Yd86",
  "key21": "3bZrAG3p4TJqe1RQF1spxUziS6v6csK6BK64vZcCkvJCFeGTTV32FM6R86qTaA6k2gFHc4GZw9zr1ENhHd94fAGM",
  "key22": "3NzKEZACrtx84s5JgAd1JUTvaEcLDGdFXWnCJMGdnBGSJTiBXG5nF5VWhFVgSVCQRkM43iSe4EgFsKMZ69ZQtKwn",
  "key23": "z7KiftR8oF9CtZxpmyBK2MsjQ1sRYsDTozrYHzXUbamD4epLw7QSYfbzgRCM9b3xbCAmwCu5AXfxqdE6izM7zaF",
  "key24": "5bP1zDVtpFWmqLDBRJrf784tA74GbHEqNY515ZuHFMXgz6WoRPasPczt9cnTR4poccdL5rzAi9JSzgEPZRcFf26g",
  "key25": "4bCDGpEQ2vdtPmJVeNRpRaDtd4UbSAL16pVh416btZb9D75SzYA6KJZK4Wwx4n4oU1kWsCo3V6H1YdQNzmVALp64",
  "key26": "JqN6BLUYFbH2qd6UcC1ABTyhincEwYTxAUWrGr18kGiLiGUDgR6wMbBsDdDYtgHk2rrANWt3xtURfGgFMRbRKsV",
  "key27": "P3wojfoszLfWJUwyyR3j6i4rznRYFK4waXEdLN3DCgVLaM8rsvaBpJ4Ucpzf7tZ9pYsT7D9W3N91EuVKr5hLNE4",
  "key28": "429uzvSXs5mgvzmuPzm5px1LRXM14CeDo3ye6EnLioYja687GNoHTkvyQ1iHXgffTdCgetgD9CawMqaMkJgoFzc4",
  "key29": "4kJPRkawgNgpLce2UNjjqNvwGEZAW3AhkzDv1LT8VAPkoAX75Lr5ja5iPk496wBr4BvwsE7VpJ7xquhxyvPeatMu",
  "key30": "5f2TGQaFpcGtpmFFzuM47YxZmUyT6JHgHp3XYz2TJpJmDmTRYwn1WUEbreNV74JNJ55JXq8N7K6jjEXRASmyGvn3",
  "key31": "4cW1GGkvArBJf41hgmv9tapKqsoWRDpjteD7hEMQgScFmbsqAefkSr1zM9RoJb2gfspHh3VtDWB3FZm46ZvyNZnC"
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
