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
    "gNt54YjyPzFLBpV12rDhAhM6wqSVEwc1EmqhCT7LdzpYyxZUJakAjHVaU3fzSt5KxQQ7orQThzFTNnGNPt1G5qK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mLCE2Bfq3VSEznZiW5qnHQrzfZwnpDLYdPsCa7zq5y1wxY9xvENJ34s4XaP1kNcnA4C13oDhT9ufMouhYJtTL2",
  "key1": "318ooHe8jFVKoUm6W4c6s3udoFnXFfdySK4UFGGVFAtT13Yt8aCDbq5hc6Hi6tMPe8W3zXH7snMdT6TF2JzL7nva",
  "key2": "4S4XujWxihcDjkSZnV5pPc3bo362GrTvhZaHn3KKJwpUUhePVwBs1HbZGZMN4UXpG5CheAKcM4KYbbpDMjUJAZBc",
  "key3": "66JJ918iTxa1ZSH6mswWE62CVF3TMn2vKQpHeRp3SyF8rSgNBdaqEacKa7T7vajaVNRpzHXBPchtqS1FjmFSiud9",
  "key4": "EK6MGKmbawe4GrZB6dbp9dfHx6Az1qzKg5WeBpfktH1psknUdaCJRShrPvYAbYwgGc6dFShQkXB7iEAsCXG9Fwe",
  "key5": "5ZgF3TjEbvMuVHkTs4eMrPHtpRccdAtYwx28ZeAqE77LHUKfeFWPyLLTCUTMzVQ7P7ar9x8qgoJGnG3PENr25Rqb",
  "key6": "4p3AGqTGPshjbJFtDCTyTBhcFt8VX42igJKuqUBXdxWJDm5GiuwFVB9pYpari54USX2zDUjzdCuoTqJXHVDmdsHN",
  "key7": "3Hyw9zu6cSMSEZyaJvjumsX9TZo21AeUdBRw4xArbdTmnU3tKpuWhpktoqoc67Fgyxgkx8BoxRAj5EeH6LB2oc5V",
  "key8": "4jdyyKDiWs2N3MB7kGgoGWM6ogsJg1663BAh5KjzhgxaaV6RuxS2EVNzs1DxPcSLm6PN5qhqaxUR24uCPj6qyCaE",
  "key9": "5TSSVgthkhfxx3xFwBFq5PBXrjSUQ3nT8EQZJLGNSNCN4mrhqaVhhm3WX233z8z3AmL9rEFZPTC52AgKSuuE6rM7",
  "key10": "2yku7LtnqKwPxkpzc4KCZQcbeExKEpQ3jrTdahbBSSSkyR5sYTt3HnSJ3gApDbX5GbehngmpcLBZUV2zX4RJxJEn",
  "key11": "422KHY6rBcoyzuFbcb48GaQhXaJhGiQVSkyQXuBEw7Vd6prbnM6rtT6QPJCkZrb2uSbhcf6qA9rfa8JjiRxYKbeC",
  "key12": "3VKzjF7JweTqXX7NnkT1DEybA7cF6QZTtfx91YUwVnNf82gQv8STRxK76V7QYL23hfBz3o6u5j9gJsfK285tXXMp",
  "key13": "3te4BjMg6y3YqfUwEC6mtfRCcSphopneMBE2g96x9mdkN8D4E6tmFCRopoii51JncZsQarBzjpQWFw5Y4SvACiSH",
  "key14": "4qdrZdzida8TyJG2dAM9WqtC9jZF5eaB4YMczxZqbDTshmr4E8YQTHZQCovxg83rGux7hjrW96iPPTMYTbRomRaw",
  "key15": "5ej6dw4dSNxu481BSRqey155pHtjRxAKwJt7843yGYcPRcZKcQ5y4eC3DhNu8MZV4ot5eQz8krAiJCwNuhEB6xKr",
  "key16": "5HS2WKC518tdDdZ6sAizqy44yraUSJbXwKQteVPJbT1xBe4vWHn47C9Ah4N7NmVAb1mj1HGcRFZUcouJe5V1Mwgt",
  "key17": "3peZBm7nkkYJTUQL87qQHBTg6a2awbmdGmqB8jS2ff7rRh7EmbnpdNkK2cF1VAJvn9fYKwAVJhKxfmDQoUGqg4P",
  "key18": "sDb8U5zEd7rgggkKWPkf2sS7bfrfb7i9sgaBREPC4prPoLwdT4aQqH9voukk87TvvTbPXxmnkvVHy2A6kPGJ5Td",
  "key19": "2MUnUyn5FJ1hTa3MaJrkL2LxWyjJJeoTfZh3zeMXkyuFEy5w2r6dhqfAvu7QbztG7zDMsPF9yK7rr7fjhoDrAAwr",
  "key20": "4UJRE86DaAiNBYzCyEbcC8qPGNJkZKuvZoArHTRiq11ZLDfx5HkjKhNboidVyDnXHgaE1XJDExkLmNS85VknUDbd",
  "key21": "3V5zWSrJM4dAyAQKkW262ccof5k3ysNHrKuGb1w8efxDyiRVFQdTKmcBCchGQmXUcEXq8CcAg96ShCmqzD9oLT83",
  "key22": "AxCfwoYyiwiNpEh1Ux6NUfkgzbMsD8NtQ3JaWcfSSMvkd6dmSrGMKtDBrzCYBh3vcr4LvK4aJ6pFkT7XuDB2xen",
  "key23": "5T6Yee6BosSL7icEsH3QEsH7pFZgwHtVLFUF4WTrj5XC6uYM8qG2PkBvBmrKhok3ao9zUJ9V8RqBD4wJTxWf4sQe",
  "key24": "5saasFHYLbKsZJh8t5GoWSwb8tKcYcAA9xxQ2u383d7ZvAwoPdee4cGkKazuDBVvMcT5vYLjmT9v2zWAUereVruq",
  "key25": "3WFFFbK9one96V4cY1QcQzEQQMc9HCgH1t1sGKjoS2MiDdhJMmXDJRaLmN3TLoDd6ySAbpqcmNpVQh9saw5ZzQ1v",
  "key26": "4Xc6LX6EVRtkuokxcg91RgD6eE5rdCPA7wEJnccZchGkAuY8xxeoCGZn4YT3qJBCPk73RvrCYhmdSb5Enxuvm1Gx",
  "key27": "2d1DV3KhwUdseCriTW5ETKnZezCdxVLGRdEbkQaMTmoMSBETLKBZppmE39akuPQA1f64QKcJoeLMGd23vi1poxzA",
  "key28": "33k59Ux9AwgVELPjub6o4UiCotzx39FgvcMw9jRLNLAaQgN3NnB4GczAV76oZF7JpAcSLGViV9hTHy6x3q8n2jvf",
  "key29": "4G1NqZZc7nuyKs7YgHFYKEvyGJQTn5EZQPkWdHdvXpmoT25r4JV3UTSs2ZCEpwkneoCejwLHH2KQmL6KT6cu7WfP",
  "key30": "3WC5pxeWUkYY3gGTYTbt5AUtHeoxzW17VCf9auV8r6mKU1mvJfRZN6KXbTGSY6u9fnAfZBzZmfbYxf4TNpvaYEWy",
  "key31": "LndeBGNK2NQaWwo2ht7TtcSoW4yHrkTZrQCvdmV1Am4Wtbyvofsudktxpd7xQu1r7XmEbK8eZmcucZnfPWnG4j9",
  "key32": "3ZhoZ26vu4KXTJfVuTwzRpHxeGayhirqaw4GtRGsPLJCDhm4yn3k87Dimqf7Y6GnWpTsowFMip9J5ctxCoUoUa3J",
  "key33": "5Tm8rdPAUYtki8prR7VDqWLY1QL9FBQ81XmiPtxy3DTuysqmdKwTFZXg195px7egcwsH1yfo3z9etJ7uyJKaAKnt",
  "key34": "4o64Scv9cdcKC4DVe6RyYj7VTuAeFo65HjGnbZfPYJTjHE4cVfh1z7q4jVJZEpauWM3SxRapjsU9v3yC7zGYGKeo",
  "key35": "32odgYkHEN41aMWHkCafSj9DQ1fCFNRR6GYLoH3AZ1qPrNskoa7WNFgto7Lvgqd9AonJ3Ucw4wgS6mFM7S4qTKBV",
  "key36": "2PW8yJF75ZHkHa2DiT56GtXnMfL8vup57H3AHS2gLkBdpW6RPHWYsdQToyVVkE4bUZCHiMs3FbAqP7QyQXEYoBgf",
  "key37": "2Ndtm7SNENjtUd9scwjDH68RLj2FaaGJ6L5B8nKu54tjxpb7Pwpmc6eaV9tnFSPtYoX28hUt8FTrQvwf2ZjrwbXN",
  "key38": "W9NvyJjcFskPZbrzJsA2abz72ihDMw6KMmZJQLsek2x4EjxVELMfGx4S7WTiHYsVGB9z9mVszcMu1vQRpjMUyvh",
  "key39": "44nHvMPuDPs3q6GuZ88fNKFDk8rAcCnt79GB6YhbBAqb5UucjGupDRSJudaoGchuBRG5KRkSQ7ZosRPUofwtrGe8",
  "key40": "676zEECHUmfWHs8ouXDgeENWu9DZiy4xKrXJKg5urr5PmL5KW7MfbrqCLhCXwRbi5KvnFFtX46ntWdRKr3cuzams",
  "key41": "ziSKy3BwTRrk5PcdXejZu8EaVugQGyFjZEK3591yfNQFxYgmjEaMJjY8qrk36zfSWRhNsDnnfgP6QuaFSTMLFuq"
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
