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
    "35GBWSpbdpRx6fwoyrGiL9QVK4yaP3zHpaiLeiDJq9ALV2gDX9fn68Cu7Mm1bbodLNpvvQ6LmmUukUimxZr4KsAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HHjA6LsgFPiHXTf7waB5FmPJ99xer7R1WGb4JRA2op4v49tD6Zq3j9P3onwvHXeLih3dVon53azjHzfmrzUQd4P",
  "key1": "RHmH29PLDdnZJfki1wZueLzwhzctvn3HAQbatUJojsXqvzmFxZYcuqw2Wfhz4EWZTjKAUDMr7Q62pp4nYtxQ5Wq",
  "key2": "2Qv4U8G2qxGxs5yg3cYsLfzmPgUnWVuAdVt6N7hpKaTmMe5Cu14ikPPF1n2KruwubWoXxco7NCeCxsVjx3vGLoaK",
  "key3": "54qSWqFeQ6MbdRbjLTdqMMTpQndLHU2ZeMVfHfYsbhN14WjVreaLn1cLE5DFsdYfzzZ2GeiY2nq97fj7nUjVhgG6",
  "key4": "fHVcPMSAjNj2kqXvgjBtYUqQrcFdig8jrWogwGqD6UKRtFsmHgAvrSFWQjHzD3MpwquW81xR9mhBEwMLrugsiF3",
  "key5": "5LmXFsXGLxJ89N2pidz2odPVjFUgcrZAWwvbFoBghC57SWXEE4TJ7jimtEA4K55E8odqW7Y4JBijnw1qu4kfakEW",
  "key6": "66D1VDyVzS8FEmmxpymuKYCZCzMz1ofND74wQgHK986axGJBYQS3xWC6QsqHpinqpQeLfhRQ9Kv1WkrfTTKBn94n",
  "key7": "5SwgFQc7MBb2W59v9rh9nsAR9ewJ1u2Dbgzo1Zae7oAY3YXHYLtwSAgoVmmgwafcSGzYFeaTNQaXgJspAsnA14AS",
  "key8": "3YZTen8BNuU7BHFbGk6zDxn1qLWY3zwSFop28nqpw526EW6Amkm6eRgebGY73odSRYvmEr4N6iLyM42w2AgDWxr4",
  "key9": "3h2PDFYULh6nhrMVdNEmw5QceJVD9KkWHqUKKynruscCna84ELWFbDs4nNQkJr5jaJ4bRpg7vDmzNC4JATC62cCE",
  "key10": "Z1WprqLZoAhiRepnhBxKQ2ErNHBtqNMtdWswV2dZcd8ECnc6HWTopXdLsvWoTy1DEFo8TgjNWjJh4fE5fnMy52a",
  "key11": "3gpK5fGpcTR3TUSK7vydT5eGSg4qWu24P6QysZhJ1yTgZJMkBv8Kaut6iwTWC5byE4SNzBSxLMKscM8zbaSnSEMS",
  "key12": "k9AVbR2j5vpXH82M2hroKcre5nQZWtea57dQ8NjjAX55dg9EkPgQV4GrLTXjVT7h8qogQKgMF1bQ8DFT9dPoKYH",
  "key13": "2V6ftA4aEZSxGU4BxTtSUgS9jW3NmWNRdayWNL7BMBvxB6AVZrrjovtxrNpUQ5A2aiAZkWj9QXmqf1oyR3NdkEU9",
  "key14": "2LFFrHxHEVgvs3MuQDZ29cAru1N5W8XCgs3W8o7hFHkbyscH77npYbKHyEKC56yiZrTDv87mc5Zj3cDehWynW9PL",
  "key15": "55tfVGWZX3hRZF548BHp34T8Xd5cExYQiyA15M1SnnvCBLyDDssKkAjfZrGAvRj8eQQ7NugU18LV4oSbTyqZnuSb",
  "key16": "4NNeppUvKr352Jd4cys4oPV2QExoeBtR5RcTmT7M1398FkqMYnUqZ8PQEWTv1dBcqW7vX7WXpQLZENqxmojRDUpm",
  "key17": "3Y16RGHnaJ2jiVVHVpeK3XBJrZ3hwfSNA71FRj4v2qCidGxZ31btD9CdQnSzxaP89bjS93rBRCMPZM1HCTRsoVip",
  "key18": "cj6G23eBpqaQWT8xmWg25B1JLfPcT3WUDwUJZ6BxD5hZDyTgMmRrWvRJcprNF44uriZncvxR7au9KjJYMCemeW6",
  "key19": "38G8Jhz4XArcQ1MJAeWwj4LhVLq6FVFTeMpa7jWJNCM95xHpVmaXfRVEnRRKE7KrZ5FP8ceq9CL98SKQBfzkffL5",
  "key20": "4mfbiPP5VkUo8rHNnE1Uw9QrP8ouAHt6gjVLAs2XooCjao5EnojLcMCDerKzfwLzYHWtKnWHebmhUqBnudrBN9P8",
  "key21": "3A2Rf5TevBHZ43hgJqTDXrTziXvBjUHpARXp6TMw6iwpusdyMC1q9fYQK833czZQcvzjmtUnj3gejqq2kqGL7Vcp",
  "key22": "4pHYQpe1fzkHdGatHmvhwHroXDmb38oagLhhAoaw1xs5xFBBZ8DQBd9c3mQ2Uy6SynFeD93UCX1gjkb7GYQfeiCZ",
  "key23": "5V9PS2YfvQVR2Fdbd68e9tQFkweiXb4uvMAJWycmaidSfM9LcWrABA9BjoXSzNWzsuuVjDQi2TT7qwwYT3qg2NrP",
  "key24": "qQaZzS1Q8T2m8k7Y3t4N7TEsq635s4zLw57tFvZKXQjLqB6CquGwCcYbprzWT1cHJsioiQK8chxgMW9E8MzsKUg",
  "key25": "Luo6GWhcKg35w7fSoLnFMNTW5YwZUiWLdshksK2Wc7ZH4j7GTAnZzscYF8Ndwd52MWDHomwEQxbaYt5PvongwWK",
  "key26": "NaahPenq3XST6YruiSvJSSTHTGcwXz6tEcFDoYEJLwGMuwkdRUt8VCVQUa9NefUuLwmYUCB3iVwEXopYUha7TxG",
  "key27": "3P4fjtXUjR67zT2F2kStAVFkEZ8EunW2rCTXV4ZHnhH7TDfcYiWgVVeJxhLDYCuTJqCVqRnibbDwCgSAC9CMhemv",
  "key28": "38rmwmPwUnXpTzp8suy5mtdYviQjS9ZiJQU4GYmwy4cAr2PkrWV7jYwYBXGcFEqhaejvtT65AUzdW7EL3uCxWrgb",
  "key29": "dnaW6zH8krrqk9F7ydgRmoVZ3Tancmq8SZu5xwErneWcnUDCPekTAv6K7AamVU5K17YuGwYg3xrfocHmbgkuQte",
  "key30": "6tUiF8yLryJcByZ38kngYwhkp6cKfsXEjVJBkFX1UmJHD9q4c3jwuNi38gXV79NUKLnuuVPdCUZ9H83SG63apQE",
  "key31": "4to6oXii3p7LgSDoptHx5Wtjqg8KgXefS99Gi7BCsde1yBdfjg2XhJieaCgQgY2zXThGJKe3MTosnQJb5Rsoe1yc",
  "key32": "3PvsoreXsjKzkhWG4fset1rqCLm3668vL4ERndsXjwjcqn2JJK9geTQFKNoypncyAwSPXNxi4gY8CpjYzsJXND86",
  "key33": "NqR1gX6ZEnXuzdHkjeijE3RUYE879WXVmsCHeRNg2TBgPMAaiiv98oKbFXpcrh6WsDTACcbmoTGvGhY3PSwMJxh",
  "key34": "46Kwr7AkYBPkyQYwLMZ91cRBZtbFDZ8yL4HjidWCexaDRJN4G6JkcrHCCQZNXk8XMD8cWDKLcZxo6DDwzBM3AQUg",
  "key35": "27hHtcu2AoxQBGPJLhzBBhS97iobX6FRi2R1grb53um8KvzfmHsozzSMs37hv6drZ8Wqr5KMGVy3pwGiwx8Cu5oL",
  "key36": "5GeuRHUcokG1HJ3LZN2WYHWysVEDkNLeWqFzJr7WSLramA5ryTZbmbv4vZ49aFM7A4nieNXAri84S1xH7SsXvXC7",
  "key37": "KFUL3g9w6P9jvLDDVhK6NBkZu41bicFh1b2r7QBWMKeH6BRcdBHim6Nxe8WUnjtsqY3NK6tM23k4wSTUj622V64",
  "key38": "4AsPmZ8aY4bmSZrnggANPB559rDN5X2dyQnPwxTh9JkBewEPTRiGxAa71C2x3eZ6Uob3qukX2fqfx8ZhPj2KNyL",
  "key39": "3ssXKR7ZNuu2fRzxQ8kd2NqP2HdhpXqc9RKycCSJWSoioGcuJK1g2tmG4d4EZRSz873oGzVDzys1DS2AwM4uXCYK",
  "key40": "m6Rr9j6eteNfQGWakNqit8cCWLzkc6A8gdMDpFXnqH79czSS8qG3VrxJpXp92A9H9hiez1ifnkpg213Su63LJJm",
  "key41": "7psZPYPM4zH1ZEWWzVzVapFBdYiEdNVHUYtcbaeowmYP1z4NLfyGvCRs9QaHw24LG7WzB4bbYZegEwR9UPMXPDL",
  "key42": "5XK13u2CYhpeuKR7Smg3iitXosx424bniCqTQzMj2rE1we8xeRfTi5hTxLzXaR8ZRaZ1XdRBvXHowQvkfQdUQc9E"
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
