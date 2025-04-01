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
    "3HJvc4ZCJd1JEjE5C5JS8pxCqR5sv9tqMLNvL7TtbCFc1dXCgTSojJFmGRguFFNy58Wubi2KLXz4X74asPFNvS5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZDtVVxytW1SYY66DYXwtRrYrGWcwxio9yyBEMcB319SqUKpsng2wVa9bbYeYi9bv36mimV7YYhQP2Cr65gCdQog",
  "key1": "2MWy8SKUqw8fY49hfP7gbo4MXT9rRaSy9j8tJBTdut7FHJMVKgqK8uXQN3g7BDsYBLudVgoqTFAYTVoqmpEx1eGg",
  "key2": "4PgweiJHtmr8GzHFdK5R3GHTdiwt3BiZFXDN8nDKXscrna3ChrEpXA6jiMjLWr94CrTsiW1mWtLTB78NjcJtGx7x",
  "key3": "4a98UuZkAqHpghv7tGDYL2VkaiCQ4bS1fMSYkpWwv1aqVsynrid7fo7ntfCgdCDJChbTKWUDewhsma2tj26TuhZi",
  "key4": "2qDUT7PxQ22AsC6nwPKVMTU7tys3YZUAy7VNmNA8ivHDJDBtQFnTm6Vj1VYkY39bPint8bN2FnPvjt5Swq7uFNSH",
  "key5": "sqwiMxLTZRNVxhg1wXAryWiWVA1SUdxxJwGoevKUDFe1GmAdD336xNYyxitL5oCFTLhh8SjQFKbj5ks9yUaKQGA",
  "key6": "5oFKZSgYEnDud6dSjFjSJASaa9UaNJ5FdjtrT7W3miAK4iQonYcZCHQoYbW6AYD4MBAp5BzaAaZaZTGKMJwy87Eb",
  "key7": "3gcmxxzPt8RRrtN9CsCXbdQUoE4HnrFbwLjoPrpw3KkfbnyDUfnEnZmt5AcZLi548BZajAWdvWvxHHg6rkodqr4W",
  "key8": "5f3oCy4AnHeWu2F6jVQZ9svwiimNFk5eLiQqRQsThTRanRSHDvQJktUhgbzE63AQSZmY38TpMsCzK1s1aKbXZBii",
  "key9": "2NUzNKMDX9rMdp4PtpTB2JMvjqkz2AdkTqd3TZwc92MWR5cv1gVpim3nmVtvM2YSmjzsmBpu8Xbf23AVPLxs6U6L",
  "key10": "3hvtw1qBje7JwGq3tBPzVaNR5DACHf22fFHeacWeRCf1ANdTFR2xoApVLFC5dGusFVGLiC2umCMdAY36UMRAki3o",
  "key11": "dtGDcaS1tMrpJecyKUkqFvNwLY5wA5D8iTCLHoquPJbiHbLFXVayQUTwaSd78PKLVwYQ4sWzS77GPSUo3ToJ1Qk",
  "key12": "35sPTjLYyqk5CbzVCwbDoGKUGEaeX1ruyDaUAd63uN8jegBjVcfsbuW1E9UUoa258yN7GqijttJ7Li3Df4m4WD2F",
  "key13": "379BKMJZMBCowdiK8ZZn4c9wD5p1szHQj2bRsGTec6JjoZ2wLFjXpEykcWkgwoafCgC6gYXqMpB1H2KyoHaeJovY",
  "key14": "53umBXgLM4rxLGhVTgZhBsvkbEs64CJsbxXmHnDHqQtqcEnErjSdE7Nuivc5JjZ5EXXs2Sk9K69EaKDPM4mrTpR",
  "key15": "fnSQVQbckenmmo3n1Q4kjwE5JGSkTKP2vmN3ZBfzW4xFYEnLh9tLVxsuAKSn53MNKUXaeXCXEY6a28rPQsBMcAS",
  "key16": "2CmzHd9dodM2PHzYLp63ghECwEZAqwWS8tSeAEvBMte91yRPevgJQiuvpb8qzcPM3VkLyvjyQhJiPCbYrbn13iYN",
  "key17": "3wC61qGzX2Lf6ezX73gUwEMaFXbGEy6dFLkoVWPxbRBEV3jqDrXBDVJEg5uRZeRRMeLiaeR7R2ewo1P1P9FPe5mi",
  "key18": "4CmNtNRQnHvHMBtbRuu8rybA1fJ6MWf7WX7R628krN1uHh1bFgQ57toLX8ej5hB6NeEPbUmUySQ6V7mt75o9ToNp",
  "key19": "5bWngcTCGjdizN4n6gLBJezHmTcdJ5u5CuGAtbdkKCptub4qnpm16kMZEWDRNkzphk9Y5CksnN8d1vAzR9WC4x8H",
  "key20": "26qAFn34D4fjCZLjnd5qqGaZULa7eWDqBHLfyopBHV1L2K2XepuShsDSzx2yyphRTQEdih9hFWyKZ8LKa8kQdwfm",
  "key21": "5CUpoUjfStbQVtnVQ4AeLZADjQ7V8iLbWE339zJtEWiSY381iHrtmzAH3v3roGaPTvdqE6WJJtnS1CwZhrL9nCxr",
  "key22": "2RRzD7ipSXcH19Ej587oHY2Fn2VbauY2WKD3saL4Cwdfd8FsKFDzvcm8Ge4TjfCv2rmQngKJPrPYCtuMTMSJWeYa",
  "key23": "YqPj5P2t1PTfGENZbpZ7vbiNv7jXrWwoekM5NqjrKebN4xmxcugtCq8tJ8yD3moWsLDVzWBHxBvQHeauyyTY8u3",
  "key24": "5B6rPMrcQxurpLP4rXDsTRUkt8F3g7KJB4u5HYqPBGHR6H4cmTesBnRL9myEnCg3x9814hGzRXM7ifdFXdAoAM7o",
  "key25": "p52QBzqdj6vGGvmXHtwT1qUtd4hoE3fUtdopuC9QFBDvYodad1LGkQJq5cMQQXtuEPRdRM6V6Nnk2ocmxYpb2xS",
  "key26": "2nTrMhWoQrZ9ghfMHkDXc1UyWvSRvNnmz98JPuwBXsyRrN5fpP384UZyaW4e6NqJjMHdXXPU8baV2Qpdb3eQBPAg",
  "key27": "2P2b2ggujQ7QRKWrky9u2wdZRVieNwrbmjHCEMGMnEDdPBkJJH5MkcspMfyXVZhJXCKcGszhoBx8svwbpJZJu5Pc",
  "key28": "2qYzq2xkfnCVX3b9Aop22rqmEnwiiJ1UXqo1JqjcaMcfwBwBKFE4AyNqwvj2kCyfUMmVd2WZnEtDmzzG81S1QcKh",
  "key29": "3CugYHjrPbnvRGCqPqJHQFw7X8uCddmGJuKejxV2hAWfFGSdmJXAWogsRatbpnyPktVunBCfv1kZhdJMsiC7M5gK",
  "key30": "4aD1xhzYVnrbFdTv8up9jxpxW82HoDWbZkiHYdbzReZTC4PfXtVL3SR3Tsb58mCfkjoM6ecfvDzq1Y4ngWEa8ijh",
  "key31": "3KU88Nzw95sFDxVr9fr1v87exbzwi5nbKdpAqjn1Af4nHV1n6WA1LGMhuq3rkpU1NmcSJxN3piuX9KnwA6s6KWYF",
  "key32": "2hfEXb7NtA3VNGddUcF6woGPocUpStUhBA6DNj42PbpBMwsT9SkGcWg4x5m2CnjJp75m6z5yUC4oRYmxSXKHn6YT",
  "key33": "2WYUqMtWb4doncftp7CrrNFTd59KQPg8E5uKHq6ZaAP4JYM8HZ132q6vdKSdSB66WVvTs36bbkYSBndnANbXErq9",
  "key34": "5kZ4rruvdPtdhpwLMKo2VteJniW84K7uQcys8HyL6tsc4VCMyEMPFgCfUnAgNqbA7s8czDpYNC9JgDwTKEy5XzTw",
  "key35": "63Vm9WLa8sPYMtDvxcoopo3PN9q7317q3TE4GjPPkMxF8qnFxxq56BqHBtmp4UKRFjcnJWpk7VrsSfXNZFEymQRj",
  "key36": "3NJSHE1xdFccw24xbS3X8pYkzvzb6HYH7CLSZphaLYWohwXdj2a3bJRBsiwhoPvn7hX5cscT9V5zpLzdrwfsvW4s",
  "key37": "2DSkF4MzQBSeQ4Auo3grWPpxv2Bfiemuygy43U31UE7o1ikrmTGsN6rkvinvsTrNeYgqrAxTHHohyk6dgmhyu663",
  "key38": "2uLKZA8FyMX1eDjGpnU2NS53kUMjQxPaDvyJwTzk5QHWr39u1vjxQnVosdD1LkkR37v7SEWNeNLYSkx2eMewuZWy",
  "key39": "4ZrT4YSGfytE3FiE7jsuYW6qqZ8nAvuE6kVniXNGtBeC4pJrXEzWhzcuUxiN4SeQdCa79xsrbhPCzJ2Wx3fSCh8r",
  "key40": "CmQKVv22TCtZ74XFmWhsKKKoQFy4BzYrxyn1beHzKG8xkksjpYJNExKqtsFaUicm2b3ZF6KKRjqSjqKGpRQmadB"
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
