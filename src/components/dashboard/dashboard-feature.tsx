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
    "2GeJhvJzyEckK4eEdZunFgRuNCGXNBdMMCRC5Ww6vcZejKEEdmpqeHtUn8EzqJy7fMbDEwwVYgNdjRkmFWGHF3Zg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PLZSCiC2PhH7S9fowqrMWAdJSN19sxvDab93FJXvXqCUD9XP69ijqCx25Afk46c5bd5Y3xwGzJ59wM19HkEPvSE",
  "key1": "4psRG5fB5wVekZuAyFPGQCSZY8HXTpWxZ5weReME6VtWnsAuuZgQaxfjbFBcEQn6ieo1GTKCszqEoVnPVNomsJ3Z",
  "key2": "5K25JhbebAC6yBqsHvyA5bYfNJTuGQWyjzNhbhktkvqYAuxQXhwqMBRSNH9KUU6kHpBNNSJUDwL9cabsjLVhT5gM",
  "key3": "cNzWntYJF1FTSwcAhnHBeC9zH3VBEWMwTs8Rtvi6Ew1r1YvoAhwUhnwAzVRjT2Xqdk8EbraeWL6KmeFAU164PMt",
  "key4": "3BRUbEgArMQmpP685Bw73w9TEkrYx6Cju6FPZmbvFRyDNHSNTfvxA7c2WtJSGQnXJpUcjcH6YBdBmS82t6nvy7mY",
  "key5": "46v8LjZFLrG6zYipcwmoE91ThXi14NP9YGuwGCpheZNa4RUnnox6g6gz9tqxVUMmu68GNdkVABUartT9MZhA7Fvy",
  "key6": "4anbYQ2YWyEVAkWxzSTAr95Li5RcJWe1ue9t12HfuRZwnAyF57eWL212jPdYrPPRjACfDUYEJk9X4wfVaBbz32bg",
  "key7": "5dxtw325aWU2w1Rz2QyhJuSQgf21VRsmtJQYkMau4kzUrxZcBaHaw5yKVDfeZVVFHeVFVXUWsFGDb6rYb7LN2x3T",
  "key8": "3DSCebZTnwPZ59miAL6WNyuZyJXH4whUbXwJqP6b6sSScmEr1LRHkv6GE8xd8QTwfsL72cLDv9FEKjNuJdsdvFyg",
  "key9": "3r9KsXboejSGfKs1LmmqzrK3hrDfWT5MWkjqU8yQdpb8E6JqfVGGnaLQSy2wq1z5JBENLL3Ue3RJgEd2iKeTLTZj",
  "key10": "5ye3c5i4cpvxurT1sdddM4yQEeqqeyTsCYSjQey7DUNEwm9jpesBNN2owmpfBEYdAJNdMZj1aUx41Xa8ikQSqEhh",
  "key11": "XGKFu6Efdrxjqme9eLhwCXFvLko3pGPK2PeDcAJ8B9bj3PyccQAKVxpducXnJR6sUR3qqDrS38EK47DBHtDEpKh",
  "key12": "2PyYdsWdkZrdvJRD56ppvJj4h3Be6c2j9bZC4BqPCUKn2CgPZvhx2mdMJCtNy4tLENVBEHExrhrhqCLN2CnzzLnv",
  "key13": "3JzNiCVayt8BUepgQNYwWJ2SMJpEY4em1HVSvdeXv3FHge7dhPtLc987mBxbPhL9MdWiiurxavaecS4XWgL6qtML",
  "key14": "5H42amYoMVoWM6xekQYrKuZ3bYLwTupisxM8rbjdEp9mDDzbbjz9hZQdZL5wFV7C95NicsR8G2tbgvoanBKxsBAP",
  "key15": "4jH8AhECVNEw21D38BZXvgZxHqGMdQxsKG8w4g1Jq8AMtR9maLRapqXFhXUFJEV1nB7ufo1HToiEyacVxvreoLjg",
  "key16": "4qd3qQcWLAbcQYYRrpjjjxPE741ukyDRukbJTmkhfj6hKBbguKPkzwKLYo38hqyeAReCtzmezKhnHXGp2QPsAzX4",
  "key17": "2my8Gjbc4f1Z1sy6zdFmgNn3YpfSftB3ig9fsTSGeXmXhvoUeUwuvzU5UNVpPT42m2GyquPUUx6Tt8MANMkrEuGG",
  "key18": "2DDB6hjwgou4rhpAM3deRRcRfXR4xzAhswjhGuYUf3LHmysnx65JogqXbCqWC34nWhRFqQtkdCcnVnAN3cCyK1By",
  "key19": "274dG7y6a6a1PgTX4YaZmnjs7Ptprz5N7T3WEGdZRvo8DK4eTcjrsbRZz4X7j8Ups7ZbnhUnTR7YPd5hHE4DhvVS",
  "key20": "4UugVwkRsFZTS2kdkkT2aKpz5mrMp7sdvCnGzY8Z4Utshb41LvzQLneeGqVqLvCKKDg1nUKHidcwyAJ92sK8iR2N",
  "key21": "8sHCPVJm1rUJRoz6Tma6xwcEAJTddE4AqkM2sMtfe3ZvTmu5EP55iAXNQwHEfXPZX8UtWWswGRMuAbgJYH1sWcQ",
  "key22": "556Q1xzsRrdykfQXzwS1TRkrErhwgfhnAvEkAmGHg59SbQApmkcPZQLzrAFdAtyrYDkiBsMf4Fv2kAeNHm2dejPd",
  "key23": "uc3FdPbv341Qfr4Udasn5ak6CTDH15gNfSqBqZa7MXRLN1DWJH5Y8Kup7EnDisEnjiCTQcZKp11fU9WreVXcuok",
  "key24": "675PesEciTfrHFtNGd2mtzkVv1823tAFuARjZn2yCUKsP3nt8WBWEedwRFGFv7kY4o4nVr8gsT9mm9LBd4BVz9HE",
  "key25": "5Y2eoWcxm6PPMMpzNzidEzTTyMt7Y3Hi2zBLFcaCS5PhTPeZhyEv5cceiGfQeQ826d9ZioQ1X9sBU7kwX1Ct4Xun",
  "key26": "42zBnbUCejyqY1FDRukZBGNgzuLdp7hz61AEC4PCJqUNzxzEEUEaqakjjqm1jRMQ7HmQvuHXNBcRMiBdMyXDHDKy",
  "key27": "5jdScSiQGVYPG2V6Hwd8U6DBc9HCkdX7nMkiAisanx6mpWPCwQTbCMMXGXmHYHKxBCXxMZajDifJG9GDqeUcCxZ8",
  "key28": "U2h7fXFNpFQWZacuSBMuKboXHibNeoVN9BKzWfuWuqcPMkXadrWMbr1A8iGj87J52PCx3UHxgNFb7N1tmCCSENq",
  "key29": "2XEF6pxtbDVRRHa8tk4yhSzP2Ch6wvzHfpMVPyDLRKU2z1GegbHv7tm7mfJD18jAd1hAHv3L48Pe5WQKN9mREqUY",
  "key30": "4hDX8dowGiDtDBjEqk1wR5WBabZiEHRyPGfGcc7BqnzY3YW2TXP881o3W7eezxKeM8bE39oSvKmLToVhBZjHg9rR",
  "key31": "2UFrRFjrBzG6BQkBaGofPNDaiFnStEb6EDVwaEEMkvXwtC86Vi8oJmjY25CzwWVA1EHzhXwnT7f5gvLvScHrnsx4",
  "key32": "p6Sk2ToaxqZ2iQ9WPd1XHb1CnDcVmuxQ9LiEPaTv26hzUKnqc21hF45T7mFyVLt529PBjkQL4CzHXUtsfdp7wxJ",
  "key33": "nWxhQKCf9wbQ2C6n6KEXwpaxVjxbZdrq4A4JLP5pHnp6JZMfHP7oRVBrqdgjHF6a7MtLNPHPhzG4u5Ttt1njpn6",
  "key34": "FML1iYJNHswDA5gN4QjP9cxnpFPfG8Xj6zfjg6oLhNwtfqR5JXtqRNk9Jr12FC5ba4tywvK4Wi9nybknnHDnvKp",
  "key35": "4dZWVvuRLXBewvvbFppLTsujjpWyUMDDDsohHTS4MwvZmJHYZjyV81nXQNMat7RDHzugEEuXSj3wh5EzSKcNbsww",
  "key36": "5RWUUEWGM45zFWAKQ29yQ6PDt8UVsREGem46CwjnQD4yt5kEZXsfUL2xDWE63bNXkNW1kuJnimNFNdSJFBbZcDDs",
  "key37": "2MaPvHP16cHEMHr3kpZUbLjsknkoqkjsr1aUF9d4XFcauHAoZfE8YoBcag1FBSsF8CsEKp1KF6aS2MS5yAV4UHkA",
  "key38": "4utnr7rdJHdKRLQdJQpBaoptk3qjPSLSzBM9RxNQA91RfALCg78tLmzEVcpgSMdsR4kecDrKHhJfgNd2Cv3DoZAT",
  "key39": "5zmPxaCD3rg71EJx6SC6xGy7jWY2MHWJYjJuWzA7oQHPVpsAGEAiMkBEGqqS9vnyp3JjEKooGdUhWbgtskcaBLGk",
  "key40": "2ujcqxSgHhJoPnKSwRqzGDWhSioCvZp1affLjmdogWa6VyDsY35ErnwNTq67Dhf6DBJZ6grogdcoWrS4M8baYsAL",
  "key41": "4jeRXM5sHt8LW9ShZCrhQK78MM4JyE2mS7KoVpZG9EKWSEWDPbReH43jDMMRchix6auxQic5NuaqutYBXdZXNnwn",
  "key42": "3tw1pdvo4jjfDPr9nvtXdaKkJKFvwBsTCxD5grsj9b5cyBQFvifXWKDhuTyH7422x2TML5qTHPpDWN3inZe4qCE6",
  "key43": "64E638SqVNnVYysdQja1qeGfcCFm5uA76KfnUGcVQFScEgCxpo9U59J5GtaEtB4n249SFT9tr3QTkWGDR7VL5QBf",
  "key44": "5ChQiupHRUBb4cUxKBYNEPnQv25StscksoewkxqwzJcj9GBRWWRTHf9bT1yJMRimJt9XnHJy7dmW3h6DREg8mebe",
  "key45": "4tBuxfvNopHMcY2LQNY8B98yhYRVtbK3XGZqFemPYWrBPYcUyFDnfK5XKP9aVPpa5eZPGdZ4evySfwNWU5wGvUih",
  "key46": "2FJyPYZ8bUn5cDYh5EficAAwqooqs9HYHpcYwbDjbKFHJqAfKYmPdWTasXTZFrAbgivqZXQHa9srzxQ5GCWSMBZX",
  "key47": "M26QoYk3Kr6k93WnNcGGdXGESfo4eq5mzC8R23LkR5THr5r39xph3spamZLoe5FBxqksyyrLYwizM6nSxFGGTWn",
  "key48": "93dY8w55Cmvb9KUnhX3REYuBpC3hPmHsQLfzkUd3rTUSmjJQvu7YPyNv1VC6X7TM2hVckxtcMmRPKFCND58NaYi",
  "key49": "3HBDuFWdQmdR3Eq3YDyRtT14AtwV6P4s7Kbv3P8WQjyLq3vR9izq9Xy2pXjxpc7SynB1rEe6bESfMLcoYRzYMRGY"
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
