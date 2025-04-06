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
    "4qJzdCUU6DP1r5fo9NGYXBr35FxFBuA5ZUWRjzy4G49aUjPr2XsQDG7Q923fHmUS5Fd47pTNhERcSRj7xLBwYZV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RuDzYqiM2vtx7GRu6VkngDBHnsY2Us3f4bedX3898K4zLpmCqzykZXSqMqzTA3s8dBf4AF9mqXTeMmgLJk5XcxP",
  "key1": "2Z4QwYzzk2svxe88CjjEj9BrF3mArXPM3Mt3ue4XRqRfLpss1mmsDWVYt9PsEfCZenz3WQE9hZjArcZQXB4stTqf",
  "key2": "33P57zjYSRJvpG2M4K4NytDhny4Kauq7JoaJAdvtVX93cajGCE7LjevnvCggzFPqyTWh6EcTJeZ8gGSR11ms9jrx",
  "key3": "5PWC3BMVZXSZbSwVQppYfdxyTuW4ZzeuwNsXeaD7mqrJNZbLLBnrXsPzsvPLkd1w54rV6unWRnVd3EYZEp2qWfMQ",
  "key4": "5PqJ6HfkWZFNLbbQXRTAjub7CY3iiWAUC388NgasK6ks5knXF9LkATXc6pTMW7rxRBd8fzkZnY3LR19b3TJaKhiA",
  "key5": "gVykPiZQGEjAE2mgoXyvmGLAe4xQShQU7dyT9GU7kB2u4MRcU1auADqELE1fyhyT1JpGGeAGBLaf2ws7Lt4NXFQ",
  "key6": "42TRPW6S6MzJMKgozyVRcJWXUARNF4UWogVEyFTRK8rfT66Yh3XE8B8NesADLiggwpy12hCo1RmUjwyc81qzokRR",
  "key7": "5B9hvkcHNkHgRzEAKGGZSA8xmhC7gbFy3shGutJ7XtJxVqgdAxRKUq9PWQStRViMnfBpTnUe9UqNGze9Vv5bqTPk",
  "key8": "4MUrQZP8unqAHMH2mKWfCpM8zzw9qQSNBmFFnvexTjw6nb9jesd5PdTo2j3RaaZKrUTuWH8pEx6atTHoYXZNrELK",
  "key9": "33HgdYFhthDCv5hWggPA9HcMEgh4ME733piA83jGovLd6EyDD794Xkj1gaZHVm5C3D1yti93e21ZPStG2cwcBowm",
  "key10": "2gep67oL4MrrjrJNpsmVfzCjVyM7uxvvrnFCdK8335m5RHX8tppmCgRhncZnSpgdqSn5rfcneXGebJ9NWMxDFGos",
  "key11": "3kFThaJuJd2S1MFt8xjfWx997br8VPUKCZEMQvt24sTzRW4uF76GmwuQ2PRKCqRowwqpohQbVwvmytWpdGgfaj5T",
  "key12": "5R9Tu4d8J9g3BFhT1gqyHjnG1156SHP3hepRQAB7V5Ly8GEoo7etZ5CZmpDfu1knTxsCMTT2mDqrTE1XvT7zakiZ",
  "key13": "5XeCKu5yK4kJFoc6nDZncdroe3dMHXgotWTKvBq226sQzYJjvzax18KtQnFvshrGJRR3nK1u5REjiWYTV45s5D9d",
  "key14": "4zGMfPWFq5W3kfLAMZpDteTyouHj2RvSEYD8BFjJ1crJekRM6JnVEpJbwdWeABqwNFKn4Ck2xC1R5v1AgKDFZSJH",
  "key15": "3uqktqpfzqh3HGsfdVnFsUSroZwkCr3ms6PkmsjG8b8rZ5WHWUf5wDzb8QZUvo1gCb7L8WAsVvES23rBKWva5PRB",
  "key16": "44T7yW5hN7Y1bP45PQJatChvqgnmLKC4XozKpgaswBGSd4dzxmb6ErtgLFovj5gkYrQio3BGwizXWLxeBRy28ebR",
  "key17": "1Xu1nYhZ6R8gMKpmG43DuMEcL5hEVVRagUiRmh4xM8D3GoGCZaTc57q32XdtmJJGd5z2Dtp67AcdU3eAmJk2HJz",
  "key18": "2ECZ6bSp4P8PgmbFosaGY4mss2aGZhG6rgWP4yotqo2GhGfCYUa426JvMtHJjgt6JMX9qKWHr1c1gSVMYKANF7Kj",
  "key19": "25ciUw77mMh16UxEJcfuscUqQiZ3ELgoJ5hvfxUNcM81N8RA96Rx8f8doWtzi92NJpPqVWTgFfPhXoMLVgyYK15m",
  "key20": "478YAXkt1wsk6pMhbDn2WhDaGseTpn3Yo2ShtE49pui29hsgjB2xkAt4TeuqhtABJWVTCJ4oxhHhUTLECW6mYpC7",
  "key21": "5wa8fQudFqL1y9RpsD8MvXXjDKziWWQhnhbxDmN54oeH85WSvfeTzTTQeLTPQ1Tz9UYrRN4uxWt27XZPLCkubQPY",
  "key22": "49WHFLYC9w4B6unyykYoT8RjmpTx3LsepP82hQgjGBkyQc3W237Z7GdvaPnbapRxPnmcsBtu6qYpox197Ru7FjV9",
  "key23": "7ty1HPUxhQ6xo6uJXDcs7XqEWSYAgyRb83Bn43YmdtFqrcJHVmKe2poYgW4YyP1WbM5xugSh9ebYcdgixE4YWTn",
  "key24": "3u6ANw4oWhVRWFyxRhruwixesSP7UTHpAriYnUZTMxpogtDBzQW4Rd4LWpugivQ49ux2cAFkHqgcSnvg4Yc8s7PC",
  "key25": "4nNa6F2iu7HguuUydnyRuRhs3C2pPuWVry4SzddkWvxm5Z9YyDVVQjnXU3eJ6CUBiGAxBsTVTsdnkhUuZnxzwshq",
  "key26": "r8DewcFjKVgpLgc8nUxoEWRu6KrDxBuxkqsKTaYocPkqQ5E1YFXcc1yfuFmSpCMBj5rbaC2MKXpDkWfcd4xvGht",
  "key27": "2yTPDU36bvMwCQgPMunnQPSQSt2QqbZVWvtDcnV5gY6Gb1ZXwaiURNVFTtkbqMZSDePoGUHSX7XmPVicuvrhUJyN",
  "key28": "3koiXD8PAwEXifJXpE4bpnm3u1wpmEqminuFCeGNfpaqwkXLPHCAtLZuvJQ4qeYz8GzsPvimxwmf7DpZoVQmCk6F",
  "key29": "pCQrYH4uPuv8krwi3e5oEUpJVfzT3mcmd1RHUT6gg38rP1pVk5WBu8uKdtfepVHuCSmC1RKxkvagfPhSjzGu7g9",
  "key30": "3aHdjW5L1ES6RKpj8EHXfghbZnVFKr8rA65sS8eUnXrKPGfKLBKav3QeAvJCWUF3qnE9yg5xM2NaxxNcorvgrboR",
  "key31": "2jJqjGoWswPitm7uTGpKBnKNU7Acdseu9T1XZExJEMfUb3T3QJfMGJkJwzpWEEoHSBrnYjY969TvFHttamZPdyAY",
  "key32": "9nHoBjec1gFzA5GwagpSkqVfGkDHJZNSoveAc9rZx2rheEWggGXuX76QBqRhY8Xg624MEypddAL8k896mHvAGEd",
  "key33": "4jKohb9mfNGELvBUgqji6GbTLHMJZ59nRMAC8JhACc7XbiXq4gv2xb5ZBjTig97sVz61R2zp82RrSEHrL34yGW9C",
  "key34": "29TPsMxik559WvXyGKj3wm4SqhDQbWL5y54gQp7PCnMD2gE5yPfEz9Z22ZBbPonZJm5tfhcs8s4pngCaVEYbaLeD",
  "key35": "55kgfyhorYsi65v1DSggWqoHCJnFtAi7q2otyZNn3dNh57ayCAyeBqwMcSLkyhRMiPr6KK5DJq2ejZC9z8QgCRok",
  "key36": "5zFoYh6PjDypJrM4kRD1J7TSyBy1aQQ5KfRjmDyHpBf8t88ncy7bV6ZuECbkRb5q82SC6BNEqDKZpDzmKoLvreGk",
  "key37": "397AvnCxz4iZBci7NrcyTAXoeMQ9wxeaPE291HpoBHb2eBzKZNjsQBbTet5e9yGSwpyvLRa3crY5C5m5qJ2qPRxM",
  "key38": "4QQqsnsvaV8EuYnZA82BYk8xf9Q5X6zS4g4XLbCKZ1navc4LSWku2pasYuJozKsoDX8RJTr2Mv98zWZaTKB6882G",
  "key39": "54SRWPzRDbj9ZBUiLW8Mp9bGibMHbrYzTr4S7eYrdiaAc3kDQi9ruXQKCMNMPmTxwdvFK6zTPtgRMca1ZUF8RAV9",
  "key40": "22XfteUaytmc4rWcJdrFUP7MoqDiEQFxYPG2PCKagxRXcvqYyHCvZXW7jkj3bLVFvhc2ireafYcmBDkhLMVf9Q7m",
  "key41": "Yj42vVYes8KnMfzg6cDmmaXgUnNooawT1BDLWFSeKyeZtCWqGJ87oexWDgRMHGuW8eVMA4dQKCZyQihpGyBSiaH",
  "key42": "e3xanpvBAswq4u6c1PfqyeVZc47PSHkJpqC1ybiUyD56SZYdb2matZs4maxHPGxTE8os4sSBqmbyF2PejJqqnUS",
  "key43": "2khi72seiF7sxyNF6hC3TXvPXRt6sfAadBnE1qbHfRYP1MQGbnx84atyoRtHM1nuXhUVDXT8vDDRqtTa7DF1ZLrf",
  "key44": "4UgvXv633GmL8Qgr4STrLRMHKx4QTZnD7eMezrKX1GP3GeeXZGnhsPT4no5RU4t5f6K5t6bX42qMout9SZ7G6Hvg",
  "key45": "mn1csEPXKaBpFWNmpms7qx9matwCW21qa8pSv1z4KQdUKE16aVfDPdb26i6HYtGWALeUfAMHv6LDDPNYpQPyoA8",
  "key46": "2bvf7M7cpBafNn6FR7XsbiY28HUFBwS2Zakn283otkqCaPeHnWcJdLkxFh2BbSnowpRFAZnJxwfm2oZs8qHKdCso",
  "key47": "3roxiUosngpnVQCCMWxdFoHKT7gpzJ88pGRirjEw3GA15BCJJ85QPbvKyAUpWzyHKsYsiaQ7ow4eTtYAHvs3Ka2K",
  "key48": "5LNkLCt3HTJeLENdwoZ4CGkf4VSbQw9Gsxw1fNPxHnGTRrc16wV7n6th48p7HLqar27nHiVdyuuwtpTHdrSCkJfZ"
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
