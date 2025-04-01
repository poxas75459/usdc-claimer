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
    "3AtRZfNRGxe1M8Sj8nKy1d1i2SkbsXjeqbcEwR5sa8hQarnfP5BW6yxgX5huq6WrMfuC84KkDtSXxUyEJGXMpitd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JtayNpKhX37We1XMGMCmvF8P4g6qZm4nTDGaRg9mo7b9w9eWTYEJG1MRnx7HtLFYtsoaS3vKCpQBBtpbYn1U99",
  "key1": "R71dZH8HTpqocBQhUi7BurqEVKF62s2HVjJJSSTBM9iK7oKg3RdHsFutPybhARBZ75S2taGVy76Uap6NvVyWuGp",
  "key2": "44Gb4g9fS3E4cjmuc2mLu92suZyjyzNGaLb8Lurn1uricZPVTvVLWABiJRbHgH3kUouLFdZ14ToRCr7D4M5wDdie",
  "key3": "3v7WWE6MqvAWfDjd1bc3QTrFmPqS93rMXC42shZ7JoxdbCJmQqbAiFzZGPTQvMBHdsrYpV7iKC18v3LNS5WtGRRU",
  "key4": "4WVagHeaVe5gJ3WyHXjEfJgNScTCzhWnH3kGqjztdeKf919JVjY931WA2itN1bbAJuhJGBVRdg8MxMzoHdxNYSM8",
  "key5": "5My15F2W4JNC5hDEW58shab12WWuprCZjqkW2pEn2D4GrcCrFq1hNShrQp9iWjvbhDK1Uf7DFkW2sqwpg15RdcsN",
  "key6": "1dGyKcfxLQKXSwreThzbZT7NaRTnaH8jCdekV1yGpWyJdaHiHFCiArVnsCQTVkm3sQthvdH7RKg3An18LsJ9XLP",
  "key7": "5dPz4ew1AF4jWJRncppHHMvyb7QxFPNy5HmHNxzNRLyjJ1tuoqHNC4XZrvBxZpmmVk6amwAafP4J4mq6qmoGo3vY",
  "key8": "36KXRPmKWcoH5dQknYupLt7FJPPg2Qkd95R8n8F3cdRGMNy1PHUVJm4tGfUyos91yBLRWBv14PW2fgj8oDP8udWY",
  "key9": "5sbWQKjbUmLGMmWsMdNJdNMf6YDwU6fY65ZmdPtBtSMZzrJHJLfx8RVc4BZHG2cUwJxayTL4Je7YYKSEJ91PLj74",
  "key10": "Zn8Wis8AJ4mhuKsZBSWjbwVAzo9VX5r8nYe9psKC2X92Q2oRgwecPKzDjaEho7Nn5XzYEUK3HyaotevEfM8FK6F",
  "key11": "5huUYT7ogchGhvPdx4NTqMHJp1n5gYUvRcrKAUG7wkHHiHcMKqKYUb6u2ztscygwnnQUoNffPUA4PBqzqUh55Tww",
  "key12": "MsnN4QwYFDacxiRDdDnccrUCqDzQoT7rYTmNLh2qCqazqwYYuXRK5dC5UWfwQrdhZxgZ6vVtSz44GaNC37fXGuE",
  "key13": "2x6roG42JUH5aLd1GahUGarTuqWaddhXJnYmNsKZc6h8dHCH8VodqoXRo3BLErAtXD21dv32abQfFT28RYp6uzo3",
  "key14": "5i4EZfv63nYFyiHjtJ4HW6VkwbeYiJEsV6StLtKtwF38GsSvon8uttKiGA1Zm9hq7VQQv3veFTZdMppJskoFY3Gj",
  "key15": "3tTsbUEVr8J3LHNSb3vL5umXVB7hctLwk1JKcSxMCSQUzfhvG2t9ZNUoRK1tEYr2oKWBSrHhvHcfefd5YwC2LhdX",
  "key16": "kRZ4kNoZo4h2rCE2EDj92QvvTFPuPMbEpJiEA6e4TDDd5sK1wcyudF7fyGMLpMT2syTjS9hT8DEjh3XFAja1XWn",
  "key17": "2wrXbi8ipQUA1WryZ69KNZtwcmSPA9yWdfprjX88tyatfitp9PwHrV3pXQF2iWVFX4U46FSnEkGuY1HMhHnJJtrn",
  "key18": "HtNWpiVDrkvzr2cmsSEaYByZcVKdKeZsvfNbMsn65bgywjndVhbiWoD62XXsrUzb63EC2Sgcx4rrksYgqe14zBG",
  "key19": "3XiMf8Na4cUsjoAqAhcoLUfGboyzHkfMN2YBVVPP3Xjwz2DCXYuRyraXhT7LSYmAnNvBYDaii5sAW4hVnC4TTHcf",
  "key20": "4DJGf7WWr9yqvSWep2k8AFuowQ7uqwYdsMACXQX3bCc72YBMAzG4T4PhTFMPZtfiK5pgUhahxR4vTTj1bcVxgfCh",
  "key21": "5A6yFkkXW3iPSzf14zwjBqQNB4Fo6aKQrjNYjjE6ERSHhXfropxHVzuXTTbyzhJNRpWHT1QeLBvAAo74ejfvW95q",
  "key22": "3hkbd6qaQUGAjerA1nUgbdZCEYZ3BWmmdKXb7XB1BoTnr1ZV99zT7kxMj5jmU7zztbsoBMfnMfLSLvan8fBBUJCC",
  "key23": "42jaZCBJjA3V66hR6MKFPnuZNqeoNYWq3DhpFKTd8qPu5LRsySwka7uDjNDUnxY7U3XGzYqKg1mUGJwqsWWxqE7e",
  "key24": "5ydEtYeFQKU2YStKR7rMxUrKtCK8LiD7am8YzUzY9kaffoR6B4CzQsQNbjEGTTgovry9BwBRMWwgBJAgns4FXBW9",
  "key25": "2wkj9K4YRzhJRhfL7LQybLM1PPoie73DNizeoe5feH48fvgXvubTfyZxrePpkUUfeuHhhUPMs9N5177wZ1CFiwCS",
  "key26": "5FaigL32FC2tPw2ighaSMokSxStBF35RbDBGWGVXT9D4RuWupLv6WbwznY2N9vzzhtgqRVACgALsf7uNnKaozcNZ",
  "key27": "4VAZviUJ3eUMJD2MbrtCtD6ZjpkLinUfe24fK9g3WHoeSDTkQX7wkDbWZ8hnvyGDr8AB2wm9ebDBqQy4J7QtLq5C",
  "key28": "2ccJf6pev1EwdrgmhU8poF1kuBsdTqTxMLT1xMgdA2DyAf68kPLaHZnMp39fA7xYrPktHpFDEfR2tznur7XzFRzu",
  "key29": "5mkSPoCaD4ANAiYSwCRjCcbVjXjXEYLLzA8BeARuDYugU9HLhQRMa1zezcLVB1YmDZsKevnzGGhDrKcncKhpqoe3",
  "key30": "5YVriYZkuz38kHSxeUNzrtF7z6ZGWCZSZurTLsDoMxXkvMeRotP1DtrBzwP2awa1EFVwZDugaSxF27FU1E9esFTZ",
  "key31": "5yjTWFYN5eLu9FEBKPMLqCxTdyjMzfqL3y3Ue8WNkmR74LEpkTrS644iU56BvZTduHCbFvPwh9hum51PHZ7CAWAV",
  "key32": "5GkQBJK2XTYxi9cuayPCPmgZM7VhY3Q13QqgkmPo4jX7XX78rD6bKroa4nbu4kFRCWcvkaoXoEHfkXEmFRPT2iy6",
  "key33": "2ZAgnQdaDBLPx9zQ8WUX4eXs5yoxyRVwcZ14MQKbkcwgVYj9j8GP9CTtLK28gCaCnrcyy7SUAQ46fFpdxvyKt2dJ",
  "key34": "4S5TgMEVD5Qj2m44H93Rf5FKHHJ1ZbiN7mhr4AGHd9YkPTYMpvXArBqSBYFPCCmq5YoPcZKcmQpZERptohTHRtUx",
  "key35": "3xdHnRk3ovXmHvmNSHA7bNyZRnTkTK7AeL72e3iGbd6VMz9KeJwTetxogZ74FQgCeVxYVXZRbYqCrsSzv8BuASWd",
  "key36": "2gnLAZ9uMrGp2GLK1h6KTjFohv3sodjcPYr7P6VQPDZ7JSxP95A52b7WBGAHmrZybTvF2VkwSZXqP2J4hEDipNeZ",
  "key37": "7jBKEbnHNKhhtbRLWXcocopNwRV9WDxrmUU83Fay67JJ5hqZR1886vdMbHX9dC6uE7fy3GAgLQM2W1z2BnuY3Te",
  "key38": "SKfK8SsxNK5yS3ybDvS4JFmWHLagFybgvSAFYzSgUZuqvHXCbv6XnS8pqdTgf4QJwmnDPVHmmiA8Y5Xz9mKcFgE",
  "key39": "2NEKvFYGr7SZ16XX7A4pYcXEnzLQFRoS1UnnEJWewmDhpmr2qqia1NxMUQjNY2ANV1Wv9SmxW9NRMrVQwQWNu1NX",
  "key40": "2hjEgPQrCRL6sjaeVR8YNkhC9T1a3QGvyED4jMB87Wr5WN1NkkTCqg85v6WwHmykj8oy1GiAm4dFZHfcYkR9QJhr",
  "key41": "39kP6Coe2HugBJ5xKLzgZC7vZbN6Cj7AEH5s7B2y4g7ZkG2i81uGmJCjwoxoqCpF4AWE2nRdUWAmR7oJ1BTgkbqa",
  "key42": "23pZcqGKudpui1AbPoqoDRR3iWkFF4qgWxLnMe4GEuojG1qj3KQExmjWHsDuFfwtqDtKGJF6SHQXiYqt8LjYSov8"
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
