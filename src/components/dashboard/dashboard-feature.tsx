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
    "2ohbbxjtN4VDjQCWgo4j7XyyiJQHXCnF5jFVC3DUSrYfnemoG8rGtMYnC8J5nKUkaKmqhKLy6E6QhmtVA9PMwpzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oaERseBjmR6aWkc17nyj8hWxqG8zeecypDgV9fSqpSFXmdfJN64LmMYV9rtgv7NPE5QWLhuDiy6zGATSp8TBmCx",
  "key1": "5FgDTnZ9JjPoecdvFKsMcaGqrQa7dRnXdSo9m2q6V2T49odUFRc8JxYTTVGhBUB6YtRn4j2Qjub3ugFApaqUDjaW",
  "key2": "2W3Atp9xkgJ5TQ8L79v4ovWHpmYj91fgLc5ngEf2J92no6ntvCsGMCdZAEgfNZQYYke4xuXaBMnvgSW76W3iQNaT",
  "key3": "37JENuivnWeHWdECLubDsV8WDKBLF4sCoXGwDYc9eRUo76HahQbTaKkLvqETsUwo1WkihoYpyog9pQXSou3mhg8u",
  "key4": "jdPYhUtNsiU8UmHEjShKx7yMUL3XKCtKuTPWLEdFx48NdV4ciqKtYsXgoNW47p7uShRR39ufWEQMHd2WgiNvsyH",
  "key5": "2KrLrUrhSPbfXjGLyBYhtGyTNesSZ9pps1DXnyiEa5zh1RRPHHHHMS48wF2Q3BrNfX59vdWvN2tvWQRHapfnNFit",
  "key6": "4SmcSxQnBDYLxJZjmcwsu14zVWUGastC8UhoD9Jn6ChEUhUCiLNtSp2mUEVh7A6K1QRm7Xf3EbrreG8cr8yJhsZS",
  "key7": "4xbLeV8teZpdU8YBsEnNnrixwYHCLzWhTUYYTuj7RvETZupkZSEHKL3LhZJFrT1f5SE7pEGcuf4badKWmmQdpjXa",
  "key8": "GQKJYSubvvPaEvcezc9CDYFS9B97awCLsEpAobydhdPfkR8SRDZC7hSd6tKRkBnAzAnd2zmCrxmqkNVz4MPKJDV",
  "key9": "2LhgqBk5YZQFNHEGw6bUV87659yh2agpKmr8rjdiFMRWt6J37xg48wUfXjSK84oA1D8HFo6XuHais1hygxjFTgbU",
  "key10": "2ztrhXVS7TRfKXTKM6oaLEPaQf12gh3aaeB8izcQdMJGLWcWKiSf3BwN9MegCi6C5MXscdziTjeQkTtrN7ugsvzj",
  "key11": "5T5JcwjCdLz7d3zns7VwSD19seBHpwNKmmvd2W1EtQxnLK7HvEzr5FHsqZN83buvsaVWmpGGip82JoDWup77SaN5",
  "key12": "T6cQ2zkVwh5vYYmLqZBwm2MZCmKAULZqhkBDjEJ9vLMAho7xmu8SNjQjg29AjXYSu92FkDURUbhzgbGXWfuW2a8",
  "key13": "4WJSFbgUYRuUDd9E88AhR2iqxeCVBNcbBEUd4Wh2w6wqn4T2nchXTGkjeRYCExFsKXabbrDBLvHmBx2s3qr5CNV7",
  "key14": "3M9GSbobgLH2xRU7HQqBHeSvYZfsPC9dpYSWK7hrn35mxVv9sN1X4tg9kYxbhJgVRXNssGsSdVHrjd56F4VwZhL7",
  "key15": "5kCVGyEBotViEP6t3rqY7jmKsuZ8KLu2ep3tXkWDqHJuPhHSPif1MBJ6eCdZWJLjaHAHXyb8WYNF5CVPmge2nAPB",
  "key16": "4X5UDgyj1yxqN6PwvZhgBAHt52oB8m4UdqTjkeWrR5vv2HYmMaW16fryJGvg9QrfygMqHnkDZgkmvMYNUY65HK3q",
  "key17": "3JocRo4kxvuVyY6YUoqbkbAeXSwBNmxKBuuqw58JtUkBseCHpd4NEAHrhiLxLWauEqU1GjMHEgiL19efAv8gs17E",
  "key18": "2zz84cJrYawPZp8E9ADejkKL9bxMuUwTCMSrcmeWiU1xHYF3UbFbFZDg1HbhJ8y98XmEFKrkpJxYuoPi6hSXFMFn",
  "key19": "jsohrAFsfMY1VT43L3zeV4ddwjNkboHgwNpnvYHbWVcRz2uz2VwiZXBRUW3L8JcjTsYPpaXLeeK34Z9JXGKqTxY",
  "key20": "4Crdqr3uPaaMb4WnwQbdfAGM5VU9RnxnU33feVkXyYdAvGJmTERtxs8Pjc7vj54FNfGHTFVH8kuFFJAYAwzaq1pN",
  "key21": "ayZKEeG4ULhHwNBAM81tdA9rJYRJtRHssYMSCNEmF5yYo1JmdJ2PErwiHx1gP6p1NauEN7YNDPSVaukfjDZ4Edi",
  "key22": "4viCtDQBf1axmmf1wnMdbPVS4TjWgMdBYFMAWcYcYCEWeA32xFLn7Qx7ByufTf2WudHWmVn4vyzmpgkZmf4kQJN4",
  "key23": "561dfabYX5v5BjJCJ4uQtBeTYKgp9sMvCui7wy57o8BCJeor8xLxHELTwiea8t7er4i6gmznt7c8kVMrbxACH7Lx",
  "key24": "4FB1DJ7HFmkWPYGkAioz6jDcMpUd373av1wFhmVKyQEu1kwEgYTVdo2wHTTbWDchPheFqg695osdjRbPzBAMrbvt",
  "key25": "3jqS7CcWGs7mvLyCrdVYhxKcHzV8NTVQoRGps2N72HAyRtjA8naAQCvDXqHn5gJc1hDK4U9wPyaxUzeb5mnQ1Axc",
  "key26": "4PQnrKhjmMdM3y2EcwrJxPfSSh3UYhxj8PBecK8eo4NG1zq8n9pKMrPN9LKmFp8tJuFra58ezi93hPhpMx7KmQsc",
  "key27": "2us4DGGA2pKkxrJaxM8XMnjw1vuNThXCPayK7FLEGwb8i8nS2UafeP8AHcHxstCJkq1xJTzeaaUbGELAk3dYjrD3",
  "key28": "tZqMx5rw2QQYRhuZf8CrySUu9in1ZZ9PReJZzxE7LBPhswtfVEzAycR57WbDi24NPeP5PPFPqgKRbPzm2qp81fo",
  "key29": "5Ja4zJn4Ak8KRBRm4khN5hDPYwkuDfhXGPnXxFhKgL6sKwa26zvxGZemVQHKKxZjza4KFu5BpWy3W6y5r5ig6WnH",
  "key30": "uaZvGJf92ZR8vyrR6rVDhjgHBrESQCzZgbJshPCyLQ8WbsFvyt2WDqTUfW1hHcwfRnXKBc3PFnYbFuf7FLUVs2Z",
  "key31": "5avku4U9BVs4QrhAUUfTeUd88Suki9S8kjcxPqocZ4zaJQ2yWeEJXCcpmSksMT3HtbT3gPbjgNHGGkdX8b4ELQte",
  "key32": "FpVJCTpfbDFHNvwpaKooqcK4YCyBjsnMXkzCB2fZgsLys35fMstXCnZJS9odpFAxgPiyVexeAWaGwuzcBWdTqtF",
  "key33": "4yxRR2M1wJ5KHAGYimbYGTuCfeHGF7hjBNRs12uHRjQj24kD6AFJW4LDd59b4ytVntLNmPdtMDN57btdquuEijDz",
  "key34": "62CEn3zrE3ytk4F1VQ15uNgeFxt5jK7hpckr8N7ymtL5pBAkUXmtWtEfrrYbe2D2YoTur22BHP7nrsiK8RyL1LbV",
  "key35": "Vtovfzz2RBnGbf8UzN5D7MnEy3Jq3nu4qCqU6CKYb8Tyv8aPJRmtfEj7a6Yyv2yaAJGm8Ab3AgW9v4t9qXvVW5v",
  "key36": "5NBZgxa9XF1yecNNTAxz1egqfnhhRkg2CxJrumvk9cEjTTFCtXoaABEsB6PckyNEtPzWDt3T9r1bUiS4F8R9VxxB",
  "key37": "3hq5eSXj2hMKpWfgHcDuLKa51SgHkk4fBM13zhr7XYe4JmbHnCjQEAnLuWnLECQa65jcA7ZiQ8Ksserk6xfmGYVW",
  "key38": "2minFYZFqsL3aB9Y5Bf2MwrdbTSjD1XX1yXtJgZSLoJmhJn68NCvszxUaDUweQvM5EekC1aeckABFw73BN9XPFLg",
  "key39": "3gSgCAE2FPXhJgJTfU78KC8ujTdihm9kQu5cBfMAq1TyD9KoMW2Z42NEspucaG6T1ioDR48j5Zc1tEyYtPPTp4kz",
  "key40": "54BtZrnmzQbG1CKGU882ypnxWGXknRTDQKmt15wBnqd5UsQCbezeaBenicXMW91pDdWUJ3N57AqjrozQGPa9f6Em",
  "key41": "5PBXV7gfd25Z1KJSGSJrQFHa4roLPgsSqibmBezU5dZWiNfiY7skeyRb6WQjPjb3HjkAC2iHogsaJ6FL4PfywsYF",
  "key42": "4jvQSSGX8qzsxGxecDFDDH8bp1tYY7iY1jQAcZ5ZbBwN5pjF6CgHEjhUHiweBjmzug4XBZAEi7omzFnMTUPhRRw6",
  "key43": "46tzHF3Usoqrb1QQw5BUfhYXQLWZe24wc4vXENegRHvH2ouiN2gcUVYXbsAZdvYz6cYfmXUJgUvByXovyP8YZdig",
  "key44": "4obfZ85978ZMFJrZdub7KRirJrGuXt72DNHRMkpDJ5PoM4S6Kx9ANzQVf5H6VPepx7VZ5uwBvscR9BMj1Mm3KQNX",
  "key45": "3GKJk48DnT17v3fxtM6L1EfRyhhE7KHkGF2N2A3wKY6X1WjiL135abdAa9ZDBwCHVotW4g8ATpMGfxHy3qjUMw8m"
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
