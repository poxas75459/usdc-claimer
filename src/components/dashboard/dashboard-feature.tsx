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
    "3R6GsbaaCG75Vrm7ofjgfmiyLuhzSyBzJ7bT7UUnakUghioSGnzEijo5krgcXutbnGLmGgHxdKswJJPU5gR2RgjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LuYSp8cmJiC59fuWfcw6U9csL6Vr92JiyrBBj3BZwdLAL8nZyfCR65wSxMYeQuQG2mgyyUobZYurBDv3StMNQr3",
  "key1": "4ZGkmr7ARYpx4zhbUApUrAbn7MhzfV3524d8VrwVtE7q3amBUCpU3Zp7eyjheSZYEDvqZE7xDAQAHW9pHter2q4H",
  "key2": "2trHATBaHANM2bJCSxsJBKqr2P4SJfhDwVfEad78XxuZT6npkN15WHVybX8HKzGBYJQ4S3uvPFd3j23R1GEiepj2",
  "key3": "5gEjWrhRAkjjeyS4Tz28DczbpzkX4F7poB5NcMwU5uJ7ofZN3LkoaAU7WjRUaQu9aKjZDB2QRNRqXnFDhy3fCGA2",
  "key4": "vGsqvTD6GddjHE8xte9gM9hQCcrxccERSYQgC8Qv9wfSCo7JbNkW9ghY2VcGB5v13xyQ6qNoXVTnQ7LUGHiqfkf",
  "key5": "2fwBRGGeFE9rNWqzpNzDms6kXkcxrLnYUktRiPtNg4A3MMhbjQufjoK4UPh3oLjFhVV4D93v3LaRgB8bbmJbE162",
  "key6": "51W36B5HewRESRxDXDsdK6ixGwEjhwKEUE64pHSuQQSxnA1CXcXVVQ4YKw4uwAEdFpvPxaWQf8rNuwJvf2WgZfkr",
  "key7": "24fxkLKtvqJfeGTyutRpRFWfzrXroGgbjiGsctdkpqSLewSXn8x8Pbtqtg5iJHUcV6U5kE6eeChTb2YEram5QP9J",
  "key8": "4rgSvYXo7xAfsnkGHWmpe3rUaxtFwEvwR4fDYtLb86htzDC84wrSw9aUTtSEVimPYZURFC6jQVtWe3mdkD6xLdNt",
  "key9": "58pbLZ4cVx74WyPjEMNV3NiK5txABXDzFTZp1kPDLarFC4c3LDQEnCk2ngK3FygQd3VrNnAbC9xFov6RoBPufBxr",
  "key10": "HYztN9YAAZwuAwh2cyAzbfar6FGdHrXMA7CEwjuMH8Mn6oNq4HqDM9f44zhkxydDhHTGKjgEgWBgoLAnfWa7Tdf",
  "key11": "2dKk1giZXgnhgHAfnSNKMXa69aBwg1Q6ziHg3dHKAHngGgjgjCqy7zZWcfBAATKHCPcYe481if9BNw5dHQDncwKo",
  "key12": "2hkHFSeLYCwEKA7EAdS2Yzf4wvvjRJuoyfqApvoNxhB5YQsvWNe2M2E4Kckkt1mgVT5SW6jMikNbDnrhEbHAtANq",
  "key13": "CoFvhW3ErEkBCYtjP8wZWttio1duKM23dqcKGV9oiJr75ZZyVczDAd16ZdwzpLZFdY3m1hEDhqevTpUAyoTv7Wq",
  "key14": "4FEhtfZ9DnbXfugzPigEnCXWtSDZxnb2gxHwJYKaFdU1XHt45XU9rSVgPwGbXgRU9d13phRdeJs7yFiAV66angKu",
  "key15": "2REwZz4m7TUxoWacoP4GHD7xmHcpqDRgPnaua5E46MuC8VdTHPo1TzGhcNJZUaxz3GDsutD5f3A8hikikj6qwQbA",
  "key16": "5VTXAVJg9CuVUkvcSUdB7jb7coZTzNAsWAXBkEUxFyUhcBmyTHfMQbMsDS6oXZs97S8tnZcCyf9oKjPubJzhXcfk",
  "key17": "3R7DA5uDP74JS2jNKP7dLhqTJBHhmAuA2cT7RQJfCNHRfZFVQoDPBKt76uKiLUE1snXH2sGDtcNo8VZ9yDS7kuwG",
  "key18": "tNUNYp3xAR1Lnd38bzpVeYQUEY7X8pqvCsqEMJQXa46bGtmMnrTj6oBRBrWHyJV51UjzDYJ96mV8wyTyuARrtsa",
  "key19": "39wiqE2z946s9zdCtMAD6dCkwi9d3SVM5C8nHjCVWusBXhHM3f5kZGrrNn5GpjwGxyusYrbqjKTdcvFR1kC78wXr",
  "key20": "3okaVCaMJ8EEtDju14gQy9PBYRgteUJWVsLTMMtbyc845AcXwhXzWK7GLRggVwvy2WLGDAZaXYEXgnGuizeaYnzA",
  "key21": "4oS4VQ8bX4qBoVqJd6WWtehbQn99YXr3EafCVw94Y3rA9a5MytkKXWd7eEXR7ACqiuykQjLbou8rAYjg3JG8DgiP",
  "key22": "2ze1pNfsi7uoidBVB6i2PREEdCE9CNyWN9SberLyeFBbs1QBVW6L6p8U2YwzLNRhd9JdsgmMFPa7vedWiwgfTVwt",
  "key23": "nEHZRhJKX135PbUXu7NVVeDJZ7bYFBQLyAYmzdgEN8uaQdvhBPsUfP62akRit8zpvGjnSfebN28kXgvLqdcLd39",
  "key24": "55D5QrYJeFTUcz7GvtXHNdtBemCeSQri5UPRLEeaM7z246ML9Udiu3dKhnkmjZDYvhNubXqekRgzzD9BRikFp9F8",
  "key25": "52j1Pd5sZLPhEGsazUXwEAYNQc7XZhAAptLZJX1kXfWQ61c5BexiPB198Q4RrHxG2uYZYZSCkaSKz4w9X4c3cXEr",
  "key26": "2x9f7qJizuJApU2XFJvFhDJBg9tFfb8XYmzWXZd1MrZHRUWVFHkJwjNJ7in4oRFP9ssJrW165cLu6DX1cYmyga2",
  "key27": "2kpcv84wZo1PbqsSQ5FHy87bYMwWb8Rxxk3LGsw61kcnitCzAfsswzkswjHW7QpfuPvYxvyDtW3pqxtxSXcuzUjo",
  "key28": "4Sc1aezAZaxPW7b2M9spa3nTnPF4Nxqw42oLXXRQdi3oyCbgjrJB3RHc63xg9HsTmt9Ei4KfhKdXdcZQjbxNioxd",
  "key29": "4LjhQUReZzd6azUEskZFQzCD9dcx1d24HQPzD5k3dzPwhJHhh73fEsW38jZ529hubUG6vpZ4he7sBdsoi8C9zBvo",
  "key30": "2PJjh7aFQVSHVvuL5jPei6Wio8vYAgB14Hadeki1hogvQWAZrCUNXdSRf6kxNrNmvoxGCnfcdrJKnxm7NH3V74hb",
  "key31": "5pU734Hynr7yF13cPacyGwqswUGf8DPdpxnEjuBgqwntXBAwhRaibNpUUxkcHMrEQftAeit3DoWJbKF5Tb47w4wK",
  "key32": "27e1EG6HkTaXqHeWnNo2gpKpCu5qSaSEiQP76GCiC5RWgH2mNSwLWguLeejgec4QP6govLiwLDGA9Hi8aoSq8rv7",
  "key33": "4whLqAitwij6CH1XzMwCdvxvoeLur13pkj95L8aaEyydf7jkWy4M67y1eFHLSy2LwURqhGV5oouW8nJR45n3nFwW",
  "key34": "2Dk7tDVrcyXKh6WvCiwnP5MCfQvuxQnFYZAAKwdYT2ZjUWvdo2RZXjxDs8bjey8cXU4q8235cW81fdgZa3QqduPL",
  "key35": "5Y745mz1KYt5vxGML9Liyanag3FfZeu9mkCJRo4Zk9gruas94HUBX74CGkdKfM1qVs5Tdm2bszLyXGeEn6bVggM1",
  "key36": "59cyiZ3XHM5dYixBhoC7mug9QY7ZpgphH7k78NL37VRARpvvkHXv6wDCqVihTkpddtvSmarLZcTmGXTsxmCCd5tD",
  "key37": "3Z7Ua54on3CCAPAVY2mdMVxLbc2je8aaQ1XyYkdhbGsMhhW9Kpxv2Sg72dBNkzfLe9DQYV3TL4MVcQb6uUrancot",
  "key38": "44TRAN4PGGPo9RkEcvnHkrCv9PcTZL7FtqPDME9DdatsuyDpMC12h7muWwPXF6AT1ervxgjwjjGmbEEFc1bmJCri",
  "key39": "dYsJULJNZRwHVz2biWeLZH3tAsZwpngk8UPZ1r4pozm91np96sksMzfLXqDwTPF6rBfTEeKz3k3j1Gxex5JjqoZ",
  "key40": "v4boTTVhNN584K3aaQWsGBYHMYaNYxtkgrJQBga9yNE8jbrkqaQfWqqrzV3nJyKaSLSNGaK4Fq1pDt66PzDuAZw",
  "key41": "2TWuCfxwjc3ezNThWu8pAfLPwPefSLq6R2yBTnmbxV1y5MRBrMMWjtVYMrcjo7CsQ5QM26QeLeDDBv39FS7HCbfo",
  "key42": "4862yfwcHgh9JZV21NCStnpwjwKHn8jmy7StudhCDBazwhg1vQGwgVS2y17VJMu4bfYGMZhnaBQLaM6cYk2rrnMb",
  "key43": "5SHRh2J5zpBGQFLFwCQifiXBzFAv9HH24wTqZLo3Aw3Uxw5Ze6REztp1MxxAgXKSFiknMXXsef47ohwbntjc2G7N",
  "key44": "Jb75zGaAN7QVCY9DgtToHrmVPPAD4qnSVpxDsVpDFMv75RvFtY948DSG9au4ZuS1UwKTaSYSLofEQPcFsMwobss",
  "key45": "5fNqRVsHos7eSxSqYRNq2ANJqh5Kcp1sj2vHnLjiFdUcwGwTV6L1rpQ4SQeex9H7dgzfDsPawmJUwLZnFkGeM6EB",
  "key46": "4MQki6Sr2HmVfRDCKjQQnatv7moowLr5s1e5bM7CmjfwGRDkMxgFmHqQumkmUWCsFrufsEBdjyppGQNcLi6wcp7M",
  "key47": "2usvejn5vMdU6sQGZH4jvHZE94CBGEZZuYScrt2Ta7MUVu7rkLW1rXtwnLxULxSwtZng7PGUZTzxSKiyuS9Wvksv",
  "key48": "65h9TXXqPdMwTtvGVkCGs4YULkX49oMZN6BkjdgqjhCeKzA2BoZf372zuk3nLQn2Gc1jRekpRC2h23c7BaLnCEgr",
  "key49": "3x8TtmJzcL6BJHJxHQuaey3hxnFoPFGWXYdENeWPwprA8Nr7mPJA1QN2qEWAv2Nbf6Q3YfaPbtmoAMhvGgzqYYGV"
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
