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
    "48p2Mam2MfRuF7FxiUqDHmQJed49fb8rHRP2xGDf44iXXkMaN4XkEfBjwfqJsHusmvqv1UcaGMYB6A5gqP1h4Y7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JcfQF1hfYuvSAn6ani6MR5qm1k67txJNPuQ1p9jNmK3tBBAM9h7jQKEczg3niSQ3ZL9gRBndXfZKwasitR3XDp3",
  "key1": "2f65p6aT2JecZaUs1WMtrNJKxp1vAc4ADtowcmhczCcQ9134aa2WpUCxaaTHownYdfpFZ7tRneVQ11QfJ6dJLq6Z",
  "key2": "55axnHjNfDQNrxChzoTQUavZnGceKq6o2doW65LEvr97b9qADUkWEsT8afxx7dqaF4H18x6eqcLKbNVgbiE2RLTf",
  "key3": "2cy7oW3bnGo7V2WfjQLcW9X2LDygk4XAUdchVDHBve5QHexRBC9Fj47Gtwso5SY3G2GabzwLx998eUWWNwetBuF8",
  "key4": "3xnRDp3S6aY9Ef5btnE1WEY8vKV9McQyeJo9yNRXbuLPQkGaoctRMsbvHRVj3kwZdBFnbGXGBLRJc8xmQLFJxk8Y",
  "key5": "i1QEnpuPAUjTh715nGCsHhB9yGjNzfuv2CxbQNGJiLdr6HRNz7KtH4hdb5xzrr9R61VYUXLqxWWsAxLwzf8eJ7g",
  "key6": "7hpujTTB95Qi7oo3YmFr4PvAiTmm6hQU7bmwFHBa7enompoNgQALTHGePLmp6isvn9smSHSJnBXHBoPTWcunt2e",
  "key7": "2bbjM4XPemwxmUkzjPNpDugywr95pyer8tm4CJ4Poon17w6yEbc1XtNPmsuNnX9W1jtrMCiqnunhiuFYe2z4X4aH",
  "key8": "4qrH6ixa9A3tbNE3wnyC9wbgzfxwmpU675PTng9Pofva7KYCnQXTHQ1hY8phyL6i2mKGmbwyWoa5iYPUpUrMxz2a",
  "key9": "29GaUFDzhBekdrZ3gUduqDDRR3b8Rri595r2wHKW8fwA4QJ9VTpAC6Bks7rhByRMeb4f1CTrFsf1vrKDtJcRLnHP",
  "key10": "5x91HwGq7H2LEgk47hf5ZpUBEcbBTRaKgtYpEMg8rpyqKvCV1ciNtcJ4KrKKe9muDzThVjmycgzHmJyrCWzsTtxM",
  "key11": "5ADxNmGv2gTRhbQkfWapcxb7gfXV3ksFu2x27o7MNSk7LMBemx84rW5Mw7L7AysALggpepzD6i2QC6dSs4KxXQ1",
  "key12": "3pZjwtoMvAbkAMEFrKwrN8yLuLpxN8BC2SpLazmfLHcpQuww7m4KLowj2M7VfCLWozXUa8WNzn7Pj7nSnhyH8tZV",
  "key13": "3Jf4Nyhc7qDrChqr2RbRBQxVAaeztB9nSY42iPvrZzxR25SbHNVDuMbNDQrHc3SadhWmWowRgXGPMQfceYpwrS1L",
  "key14": "5VpBQN5eSJX7VgqNHusAh12YsbAhfsBihfy1x2KqGXbd3qZ1E9esD8rZawbyb8rfJ1sYtZkjjE3sZjS9qJiAyKP9",
  "key15": "5G3CY5WGvp2u2wDzWdNn7CYGX83MQ2TAncPeDFbAxfHoVeZX24MiMMQw47X2X2HBwcBzVXhVe3ssX8xD7WnfBkam",
  "key16": "5PNZW84tvQ9JuqsmNCDK368o8Hkjon4jVRVt8ZwhtDFeJZKUqTHaRtrn7W9aZprc4jAV9qm46z7BrmAKW6eZUXqX",
  "key17": "bBt59xJ849WjK2UMaRdMniviGGLRfJJcwjGq8sirCQRHCy6uUfWwp5FfHzK61A88AWH2s7u967e7J7rqL7UsPvq",
  "key18": "crsNUpjW2psQbAeyoZ3V6SqfqbqqRGcQ5Ff129UesS4howWcJZfTVQcZMrrrE7CqDBn8DwBEsFnxurjS7hk2tEo",
  "key19": "5MDajN38RjWHPPg8o19g3EbvWyvmjFHKUZpGzpBs6ZNMpqFpTUTFdyFM9qAnMxR3MGKWCYbtj77HET3bxFPU4dJj",
  "key20": "5H3oegxCVpL6fonJzLh3EizyC1VFKpMgYqgejc7QiErjLgxgwA6w9bqX144Q874ciiAdP6aRnpJDzCEJPXY8x8ds",
  "key21": "e6MB95wjUoGtwkb72Pk4qTazuqvDSaMws9RbJQ4h5svB8Dmttmmt3ziUfvxYtyaTcGvewSd3KWaKiHjjYLJoqfG",
  "key22": "47yooqVrdRe8EgB5pviCr7JtEi2fnXKiyRoW38REF9QJMhyPxNoxqLZJJWy7emCMv8wMQdMRcaBRdwnnq4JXYMDS",
  "key23": "3NjPkEJm9akFr3nLQfTgEUL5XzyWa4URLnNLQzCA7KMxJWkWruV8VtF8kz1v2TertwsbPojAxwrirC9AnCjscRJB",
  "key24": "4Qc72J1jU5U4Cjinvb98PJ5Ek1gmWY9X1ankSNERzKhK8QFvHU6iUvTaW7tUoA1FYnvsuL2TNNVkFDjJiD5VPPZX",
  "key25": "49aLsSkSmz37pPDxk5WfV7FbmSi6sDgecFsfTeVAhYzmSdB3e2R1CtTFeRh1RZKd7cz7anrLTtLUhA2dy7gzdtAz",
  "key26": "2YvHpKzTgDWvK5z55GfWTki9mQNzHDiaWQDQvMyt3m1hPL8iBnynK36iDnW81sqiYxf4dUmXwT179mx5Jgc7oB2u",
  "key27": "5x8S4aP9aw6Qdb6KmWY8FFo1Upe3j7nwmGpopRtqQcrccqtJVLxV5n3DnFKdnBDFEEd7Noe1Hrz31YdyvXZRHAHp",
  "key28": "54z8GfFHiKkaUHxuNt3DtZT36zXkM4vvQNH5Ykc9BvtgPgtA1GJkgJMvX2HUhLA6b8oWUmKtCkxJf5Sf5x95vzWk",
  "key29": "VBN6dBrnXpY5h9P6rfkNCQvNQz53buk5GVpCERK2UaZC1ax6P5prgrxiDYRozP7GPGdf2LBn3gQUCAyyyWmCLzC",
  "key30": "64yCvqYMMA3qaFCGh3FcJ4YWfqDn5s5scuWpAxyGoDR5DJnyKKZeycY3izPMFqZjb5FUNAmuCMgoGVKuq1A1fWtf",
  "key31": "enN5Q4JC5jAvqfB1i28NLbF586QS8ezrGmbwVD76Xu68SkQSXnskBycBEzgfSjQ8LG14zXXv5J1PjFHhssSZQKa",
  "key32": "3SQB5Zu6q7wGN7C6NF4ar92o6Puc7peSmrqcz8CUXe2PdDWV6Ea9njyyZdw6pSetfWFbCefLjt3ez6CgbC1dUYPS",
  "key33": "YLZ99v3hhcH6jWp1G9twdbfsKWhz4Xn1hZ39sCRqAJLCxkNiPTQAUNSbcj9BbCecqwMKcfpyWwYG7mYqyk6ZJXS",
  "key34": "4hwRdbCezJSUJpB3jLk8ReAenAALHcABaKGjreqGzV7t6w4JTSkhnUoXTDXnQ4oymh1nUaVp2Q38Gbmt8nX71yQy",
  "key35": "38ggeJCmFE23fSswHEyG4bnmmMQszHQ3jbuaVqD55rWdWp7Q8FPXSWH9RbQX2k4aF52NDDT7AUqchfVZ6MkcLP43",
  "key36": "2CeyA5V4rNkttxenhFH93uiBNgtYnWRasMcbyMHzLkhfsNzpBMjWhqmA21cwb4wAkYi2g5DwMkR4cJ3SVdGxkfrM",
  "key37": "4FChKUrVedc4WCDGiJ6PW7sqwzcbYFidNs1F1QaYHi51jCFSnSS1JkDcnnLPspxai4zdMiq1984jcLHeMCBh7Zjr",
  "key38": "HpVtAWscic5t91dRraTibqVtXscGR4y3PXRyLuYgqFnEbF2sjhiWs5BvpJqtU1azGj1M4QWvRJJmF43tPmUYUyb",
  "key39": "QqnbmMn6vDsTjvL6JCyE8xaEXEE4fYCedbR99KX7D8ha8JWEutA4obtZw4Uf9RhSCxz3XGjsNcjLj9NPhLRJLKu",
  "key40": "5rbWwxHp9sNFBKJcX4pZeosEKayaExiX4fPVVdFwfskyQcbiLnXbHMRvZUT92GWEnUqHmAxYNt1noYX784Yg36wE",
  "key41": "3goGc1Sa3K88UiKedrDj4kA3gSExMJqGrkrxghvun49siqTdRNJD8SVC2dg9LYAHz6nhdQ4sQfdri6FdskgYKW1L",
  "key42": "3nHJV7mZeihKTW4zRgsdVxBwGzMKKD6ApAZjZbvJtmzdj22JMDsELCWCw2gvAtjKJp8o7j9s9tqvfrWf2gRPicrz",
  "key43": "2oVmWd6oRmaPknMe99azBZvqFMTRogUrUstJT8mswVSWV6xMiSbYioCX4nfNDsrevCK5foBpH63uztSETJXieVhB",
  "key44": "5yrQTE7rkJh8gdXwTGeTWCs8yYsWdv3Riya3NBbRnvTXwgA7vrj1B1bSuecmZCM6ZwDNe4HXQvt1ceKvbCBKQvYN",
  "key45": "5QKj799Q4NhY5n9AGMwBNcsiCeYpSzR1KbjvGpiwiVuCmDd7w6yRF9mJHoKEmGxvDZ85eRFiafatdmARHqmxdG1Y",
  "key46": "torrWiL2FyyPS92oU91CJFTNiJ99ZthEfGVWFzA23XBt4xNgyAdVcVLjSYevuLKFGwZ1jv7i8fbcVvRF7NAfKWc",
  "key47": "4e6yriUSHsbtUTjspd7nZBQcAuzKwEAd9LCbTek8FxBkg6HVsBtkJ9yZPtrpL5HCFfEyt7BkB2fASY41YrEVQ9C6",
  "key48": "5ZqbAy3cGAW21bXwM7NU5YvecwGhVVLLm4JfrBi46zAqQsoeGKtVRhCzDGi6EYKD239wKgEYz72Vezn1tJgcVTG3",
  "key49": "2zMgcVK26vUNtuiwvc8to8ahzYSkpws4coyHqcW1ZkJYvts4V9WyzRdGs5qRLWE5dnRTYxxXYBhHU86TCwk1dxof"
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
