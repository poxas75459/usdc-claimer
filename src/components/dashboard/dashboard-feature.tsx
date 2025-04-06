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
    "4ouGpANLPnRfnsFmQrdKVBHGNrUnkn48uWZwBfJDu6qhAF77QzmEynwb7FdvFjzRdDjSpWXhiBokWkgbpjU8tn7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zg6p4GuS3WAD6BrYGtitT9jBznfLm4jVEvwrS6MAT2zDpPKttgFjrkfcBNvXqPxCCzb1Jq9tEMWupNFcWMoi5mS",
  "key1": "6PvaoYcu7iPy4Kfy8P4JjBzmHTrqdtPjqjbuG1kzScCU5fDxUGENqBcY6fQbh9bucUaEKXegHJYCXhbJ4bagqfq",
  "key2": "4gaP42a6JNFMUu6F1ShnuJSoViscxwH6ZZGUexZFmsHjYxp4rRnTyCyegf3DxFZJQAJ566atEj1eBTgTjF6t5ZM",
  "key3": "4QdXeQhogHAmimjzzuMAi6jNPruWeMUDurnkkA61TRWH9KrUgToJ8VQ3KdG6YA8SaQTLKD1FUft1a2iZdL5vWhzi",
  "key4": "3QZEKa5vTyLymPiA9c8k462PY7e8h3cKewWAFiKCb9EcK5SGmxFhVuUDseto5ghLgqTcCfpPinkZT1Ka7c9HJM6y",
  "key5": "BHaVcic2TSLaQ3jR24Jecine2z5WQ2KkZ1nQMJDnwcFY3DqPAE6w7gVhhxpimWPqrGfyurjNGpor3yoBbgWB3LH",
  "key6": "4PoDozXrFBbHKh3AQ8h3aRySJT6sxKtRagGZBTvSdQo6NZpQgonSC9YzP49rWhhVpALMkDnhVd3XcmdM2N2iqPMd",
  "key7": "592y58GZ5QJaA7qCdeXtJNHuGi9jBB39nnPASr7B3ZptTeHZk5t5VpArhHSgk3imErxVaBUCvinjBZzG2jwHPJ3E",
  "key8": "5Tkaberiw4Ptbc7JARSgkDDjqjfwTezM5n7LA1AYP3REPfvfE4zghHggq3C42bm8Y5FwV2FpZFTWrAcDfiFi3T8G",
  "key9": "uGRWwxzM6aniSiZkvMouW8838kRuEDzRPJJjf6UtqqkK2GP32fi3Zy2ACeUmk5ZVRZE2rQ5aRWGYn1uyk3n7cNU",
  "key10": "4JefaPqLsjvdJUNH5SiipbLXFTzmz6ShMe3NEDzB7H1N56xrL8coxnuEEGxSpVAjxofcTPcNneNAykzDeFTJKyAt",
  "key11": "33ECa6Ccp4sfcYfuruzyz4ex9yaayBBjyEWiUyjkGAdshsW5gCVH5TgYVCigd1HqjQ3t67k38kmzsAYZBg1DtzDz",
  "key12": "27kY7hQtW7Wu2k1Q67G2QTAhnDfurs5rerp6qSuSX8gSGB7Vnrnx5nco39avXF52jn7yYNGD3yYeXj5Gv7kodLJp",
  "key13": "55TRzE6pm5WtsrACk1VAsNYiSAzkv7zNbUNGfjXHutMiRkdZKtwNwr1nzUVXnmg17uPK8YjqCobdJd87ZuUyPV81",
  "key14": "5Kmdae7RBqv1hR4WGodiabwWDCRwGnMgqnqRWTqi9u5YBDVuLB2bz6QQJNQ2eYxC9rXLro9rnumcjEiNooP5q6qn",
  "key15": "2sKgaPtugpJB6CGd3kG5BRWqjwrLhFDmhSwwEim68QRFdQCyzhK5NcwVAvaWBvVQUuWNpozhCdURicVp2BUd2SR1",
  "key16": "2CviJKpFJ2bPEwAAK4YTY9ZywCyiFYaixjJpDHnM1nVHXdzLJrf8Mrrua2Dfc5boTXnbkANu3kFwunVpG2PWuNqd",
  "key17": "2iZWhJdM3DZ95QjgMVnTytQ8pkn6CG9KqTF79dH79JnLJXfcVhpRuJvuhtpmUCzU5pvFKZkjHGH9TASnQYesRYQw",
  "key18": "5Cr5WJ6GXKcssqQBbNmsU3r2nfpNeMLesVApmhZNgi5Fye6MUKf3M8jszZqWta7ktnXHuxCkPDfxCZUQ2GweEm7w",
  "key19": "4wir1C9LrCweqBodQTsLYCPT21nhW6f78WKf89rVcWAFwvXsRoQHzRc4LqFNmRaHT1rMRMvEnCk3TVEJDwifjj6N",
  "key20": "24Nw756KJyXdR6GkmMnq6mwyryy8BBzwfaosVnEEEDLDRb1QzZNLHMjiZoPcarfu2K17FTWYiUu8ztuDgeWRhkW3",
  "key21": "27fErAyhxVzRXfUEdhmukMqEYqq7c1kWUxaNGYgfduSsBhMMPwCJcSFfCNw1yXmSimgkCKmUT79g9R6oz8rAHCQm",
  "key22": "XYhVhovB66DF1GAPSokKU4aspxqRpgRnYzrUjJhKzZruxfZhpwng4M515yrfzkv2WihiEShH5tTWmMpcTdAjDXX",
  "key23": "xkvHVGizKTxn95MkrJZxeFMndFTcbF4gKast41e345Kyo1c29FbsyzhnR6GUcDxa9GiHfbKWhpPc9AsN6siCLSV",
  "key24": "4mE9AaUkmQJGV93UXmNFLnhUP2yqGnU3eEcsCmLHDun6CRkpgriiyZYZubv657Fie3qU1xp8wU35dF3SUv26c9M",
  "key25": "4u4Gc8EJmJcsSv8CCtvC78FS5jNUTY6fULKBbds29Gme6rY3LqZnmbYMYSpdcdDq1gvQZ3bL2crMXmXqo3QVKhLC",
  "key26": "32EEoh7SUTb3qvtaKMFWrv2kKECf7Vi7ZfL6geWh73grFNWCdpT5RfoxR4KqBCokAW4ji8pCE5ViB1arDrakgb9E",
  "key27": "5ChMZxZRh6vmmaawG16vY2YK7aHNheSHh2rQembvFkhp3KP5wEMemScG8t8HtjfNGG3dXabiMCBhouR5DWb9eDBs",
  "key28": "2DHGa9hgYgXsepahvyB4wWwF32MZLSfkVVuAgTZNBqUjgrzd5KvDbJ49StcocnpCmFKoA9tZiTz2H7vXYjmJLVXn",
  "key29": "To25f1rcG9ihVYKuBKaheqCBo7fMUhuWb86RtLqzaNwwCMk9menJyTeRVEXAgxsD95C8B3PZxJKRYELc2d1Drmr",
  "key30": "4netBfwQVTAuTYCQGwsqopkV7cjYHAGid3dYnXL21dX5wdzJMKwxQUwjfKModcW8ZftDV66xhyXq1LXDqfWBs2hU",
  "key31": "AjJou35ouy7UkiB4MQTA7tpA9ksqaVZYDVPY8sgr6VVxwRfKXm6cGGXBLy3YRtMW93xnTukhho7k32RyLe9ja8Z",
  "key32": "2FUkQMemMr1xj2Ct3VUv1NaaMAENbeQn28pp8C9J1sv64MHQdVStqCvdpKxNCUiC5NkEFMdijbS6XL2eA5dBXpXS",
  "key33": "3eroUM9FhbAPQ194pKp1TMGdg7NNpSob1caHFHCQgCgUPQFArNxUu5HKUnhA2mgGDtVzLUqcWRyYpBjYDJLvJktS",
  "key34": "62MBqV5xvYTzNLSwj1c9VorXcNBJsw6vXxGBSA4pFYwsq8K1YCcuGM2r83ePJPfxAjgbS7jGMNwJV5zcEX1TKDXh",
  "key35": "5SF7yN3WyzgpVYJ5VcxzggwZ9XB9snmVm9WyiD9P3hesekZbyCd6wLHCqnphyEa2691xLeCtqE4YSWYNQcgq9z3n",
  "key36": "5cvDZ9941MkF3DYEfSj5iHJdwnCBTV6yRtnXEsBC4RqnbAy2nFyzTVPYsGzxh57aBoDpHcmTHTah1CvwVpvDWCFg",
  "key37": "qzVm66P1e8UbYoUN8zxmMn5oGkiMbPDTqVnsREi9KhE3PVHUT8vGW3Ao66H8wNLe4yJW8AbZzWfqMB4TvNeFh5Q",
  "key38": "92fWmZzgL9nC3XmmnE4v4GUUP77ourh9TXgX75cnenBQDWz7NbX6dLW9FE9vUSzMCT1oH24gYPgac9jXAHvKiSX",
  "key39": "3N6ZgTZDmQq13V5MzXzku7EeMEYMQ5EYjNZ7n4Hcbs1NQWffrtuZ6TZSuj72DoPAiJWtgzeUDCbQoRPKE3YJVTm9",
  "key40": "qVah6cyoyu6y29icK7F6i8q9eQCqHuq9CSx6LwUVh4MnG3FzA582m4hzq9qn2cypvJcFmS7ggb8dnQ1KztEZAzU"
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
