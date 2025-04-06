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
    "4YUpTLHG8Mi84nA3MspCRZ8g1UgrdBpGfovVW2D4qsqWKBcb328uGoWKwqtu8z3xv47Ug4yaByEnXYbnB7gfxk4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28L3kW4vUe3bjxaXfKUGAoKvLX4m4NGmhizEavMiDgzSuUsr8eaGWJzVv3iGcup14boz5XPVfum3R3U1CDjTwHHZ",
  "key1": "2phs7pC1AhMksPzvkgNgyoFjjfQwRxhhzuViEa1Aw8FmNxgX43VHUqS3XWzQxPVsGNgjSN5SVDnj4DSKuDdk2ypY",
  "key2": "3B1CJgPkm4feFp8TykVECH2UjfddLjXeY2x7Cnrz63dt4sLqQCGnfEKR5KJh7fyr8UQ93RhSJ3si5xqa6GZcKLUH",
  "key3": "2s3PARRYesJvcSczQbjusF7M5EfwwRQjuNQf5BDn26auWxjqAGPG7iiwfakQ4hX7aGnAFqR9oj8FsCn1Pa3k2MUR",
  "key4": "ZwroNimamBKb1jJQKKFfWe6WGqLJvDH3rEwvgJgQ1raKHw6MKfkPdGaGsuuvoVhLTswRxAYxpkebKciKopEQoBy",
  "key5": "2Ltg9na5Ac7mVspiY3JTYzfwRYkYthwuQPCNhFnMCtmE2JtGg5iU7pQLKGRWPWmuMVXTyPPELPxrBTaE52YaucJf",
  "key6": "3dHVFnrmiPYGpLo16xLuDCNTgxWWCHXHbf7sPceCkEy7NQxuWYMxGFvmsB8Sy6hApVo7fKpXwX732uqWaAuStquk",
  "key7": "3VZi2WNCH2Tpgy7avTq6kxyRud4UMXV9tJeiuoRbZHvK16aGmv31WykduJbeWGhbq9wN2s82XthrUZDfVrp5S3tv",
  "key8": "y6SfcBE588rLZmSPsSfgj78zYwiLh9XrwKHjf555cXxEG1YTZVKjsnwZfsfEJb6iFoXSBsZqYqvxeGPBKnhvnYS",
  "key9": "2KqKSbGLLaFaggZQZQcPKVLR4L6PFaNJkxo8tVeW8bXQCqGdEsEq5Sr6FondvbyhpeP94MqjTgDPEXjabj3QxFHH",
  "key10": "2iFu2L8J7pMbXXwmaVh9KYQbWk2F8eTcNEqrPYQE59hpYRKV8xtXdNnWW9fP63k5yR1amjCDf1jY31SKx9KPQtLG",
  "key11": "48dhSCQj6zYDzJ6c43HxT5D4n63nvbwoUhMbLjdqhj6DTZ41cCjDSTgK17SfFr8Q9r3yirFvDCp8GufPnCjUrGox",
  "key12": "udYrBLjUzG5or466FxwxmfoMG6axuN6n25KTsrDtZ4H5JX3bb28gADZgC1uk1QoHrJ7oTv3Hy3Eq2Z2rSabENX9",
  "key13": "QkCk9X7NC8NK8Qx9YLkJfEbZmKtPJWTnt7USVRu1mpCYWAQEZTig8cPHscypuLmTrXiNZA7rPHAYuoXsxouJEWa",
  "key14": "2upvc1QBwUv1Mz5ScNHGV764XPRTZwj2tQwucWNLhMDrXUw5GVeGhg7X5CZeXFhQ5rxeM7wVVcPkqM8EaaLM4uyv",
  "key15": "5PWxiUGe5eMrY6KcuuWayd9ZeeaDLtujuvGCuJfwWqvRkvHWxwc4jLumGSQwUUu3qMLJU1ht2Zrgo6S8LjNSNLXX",
  "key16": "5s1kPzMWpx4NiGtN9tmAH3uYY1u6EmswzJ1aBeVEc4swh7rCqegqcVunuiCpLC1G6vU7qiE4E1UK5S6V3WRG17rE",
  "key17": "45VDqDT2jQY5Fj3jQ1ifXezHdH3TWV5pASmb9Z6Fh5C8FMeo3UJmPMBQbUmJPJxRmVAJQgTRRTvq7QhsYpcDfLoM",
  "key18": "idRzhrP9935KN3mXTS4TccVN4tPYd7Gr81oKL7a1xpr5sCm9KcjSC3gQb3WjMiN8LgLzCGCyQcCfsKnKTwjGwYG",
  "key19": "2wnvx4Vzwa616sStTtHqmWk36fJ25ccE75urEJqzYonSofKMQtkv4eQD5ttF2JYVT11BijGyxKN4WDDzkaAxsPmt",
  "key20": "nDXc7ecGwXbt3Vz9k27jfKbGgGGDGYnvQpjaPuGoKQkz1Rqa9yYkPS19hS8iS6zRtXwqWBEqpMy4VcMzmoKHDJP",
  "key21": "Pb786QewZAJLwPrg2GzbqfZV192ouqr4JD7PYVcUtpFSKpyuJTyGCn6MXRQvBWdnFQ8EWCktKboQqymTtLyiJXz",
  "key22": "4LshXeo3QmbDtcUFGysu9WzRYsD27ExurErtzf9jFdTaYgvJ2nmbGCDkWeprT53s4dQoM1K6c3thUtbwFw7bvwQ2",
  "key23": "3RqDWb68jKwsTWkrBEeXaSUZK9pqJsU3kAuUfCySNj6haPVYc2yUqGeg7WGVgaBApvhDBmWF56Zxg7BRXMwXfHGV",
  "key24": "5MJEyZUNM8Y6CR8ra7P1ebokVGqBdNxqbpJqKXEA5PoyuriMJiydVVb3qVLrjWB36ZxJBe1CSjXptwCKtjf76LPw",
  "key25": "6kqJsjqCt2Gcww4ko4zYNUArvSY7GLa8iqpSg7S2RE5xsLgJgN6C4YKmxovzvhdRQy4gLAsAXj79jZo9yrUxZjd",
  "key26": "62mSHxwPk2tcQ2G9rePnQWSWfhSjU3pVHsfJyhafsVVvte3mLWn6FtcmeMzGanjMDwarMti9aw8CT3H3VG4CfDMd",
  "key27": "41Cu9yBcdMFUFsfNF3SsH1qxzAs3vv6oNeztxsUTi47Ge5hcHgQspGeAuqWpK4NiQdRFDD5psU1S9XxD8S1XhcrD",
  "key28": "KDC4r8uoq1oF26tD1LBywZWLLtWXqpFyCrZCavrjzPebuPAb4Gupzt1psUwZ8K5z6Nxu5o7HDb3NpxbaFLpiYRs",
  "key29": "3cAMnmFBfmQAECwJbkCkoXVSpzS34L2e4J33SCQBUTpoFreCYBwKrjA5gHFnNSzTvicRpotZu5rnKeFX5bDYnyPe",
  "key30": "2T6cdEFVNJ348nbAHK9puBRiopVtEJw5FsKxFiRdcKzPkZNW5cNfXmf5vLvgZ6RgxBKHxZWNMzfWHN5JCFGh8iNi",
  "key31": "42998QMK9y2gj9HWNePyQz7rD8karkTZtUC8DUBfzNY99ebVpGnqa5koCekqN5ZE3z4Bi6ozeJuFYUsQwRbZ3sR8",
  "key32": "3EckYrRuzHAUVjWwbZqU6Zf6XKFRTfYXH9UCFigUkkhgLTUv9oF8vRv9CjS4eyr9BMx6FAHbvQiJo6762L9BNvk1",
  "key33": "vPh4UL5etAduhveZXtE5SQmpZ7zPX9W8XGzdaiGURebQe2ytHWQLE3dxSQbW7RPq9ireCE6gPQvJ1T8RkC7Kufb",
  "key34": "vRUPp6TtXS45sHwxVDa69HuvaGWJgWaRZFbjNhzNNUwSv9CCmpzpNn5XoRvtCoVbAJZYxUCg98P5CoSPYJYYwWo"
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
