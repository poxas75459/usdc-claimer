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
    "37JcH4HeFTaDEpdMyF1ezKNxNhoTRnQAeUZLgGofUbD57pEqbAYD1kGufwNgiy143BDf6Lnbh6aFBoLhAHNUhr87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KznfYcoMrxMhguKFtTsrctVJHJWu6SotWxmzgRBL7MHDLHRcX8R1XewauVRySQWybBXW3neztNfsEd6fW1ucG7X",
  "key1": "2onHLiYNkWoR12SX8ywaGeawWS8eE9X8iwU7wbziFYBAq7aSWMgNE3RBU2tKZdxVkme3HE5MbTUvf7KwXuf5oge9",
  "key2": "aR2LUB53CbTsPCGktQhb9Ux8XG3u1iWYyHRuDH9jzLmzWhfiEAcQioUnq2zPUkDDUw3ECqwgu4UKwwU87MwnwJT",
  "key3": "2zMfyuNFRFfzuD561V7F8rZbwLdX9QT9jd6YTiwantNMtRqNKgSs6uawf85icL8YW2em7yceRRCuURjXnDpGMLbQ",
  "key4": "4DgFz4siN2s3rpzpy6tZppxEFNcjqoiZevWHvX6WJSwCSu7vLAtv1yXPF6nQrQoKw8hmw3uYAGf3BsnBYt4f6Da",
  "key5": "51AU6HW8P96F9oZZdRrKoEdVkAQXTMhN7kuvGWMBCwB2Mt7FGNdedEZpR7YTtEGrqHFr6Cinuamr9GewES8hj8He",
  "key6": "3CaXrVS2SSDB7uDQsv84jqh7J2zAn9xhM1XVLQ2Ng3ve7ijDLnue6ULJfGpkikRigyFHySjV2abvDHKLANTr59J3",
  "key7": "3WBcGBmbpG9ZfB6RN9ZfEuZwr8noscSUUh1XhALE3oLeTWNmmWCYXRnQ38NHo3AB2oxNJAsC7YgZJTjgXFF3spr4",
  "key8": "3F69nBf5LTTTLMQYqNUZj4xT1pej2Xi8McN8cKqADwADoBw2j9WmQfdDtJid5BnyxMeNMrCmrpSY8CMM2DjGTg3y",
  "key9": "4tfejxD1xU7HnTPPvD7MmDDnk8TkSLHs95vvagR7WdUHihUH5ggwPYRsr92m5E7C3g67GxapdSu1FZDAwV6HE1cU",
  "key10": "4kzTQwdnGpg5kX6CoWpYAZbEm4RYoz11XstZK9LKPRZ7fXfaaNLuyRqUFsjafhYnSAGhvounQKpKBQS4k5MZia4q",
  "key11": "s5z98dj7jbLv2wZBPEbTeJwNJpwXMCDP1J7ArRdwZvVqeLtgKCy1o9kHNEWb62cewo63oCEHN8XPmtLed5Y7uZH",
  "key12": "2qs1kwNCGVkbsxMTg58nUQtnY42RQ3v4ZX7UQCgX7cMNnjbxxYkGr3or92CeoWyD4Edg2K7ukwEMm1Mn4tVq89td",
  "key13": "4FMzFg6hpvhcTRuA5QWPssHBsPJLoa47YLMyCoYrCLjzprJUG7rCEb1Y4tjV6AccrYfvA2HtFhHqHcqz6J75pqMS",
  "key14": "3VYNGQm4UxnZZuS2rU9WHLHHiWFStuVzPLjZewiS6pCcpS6zBVKhVYVkdVGWLY6XFBAUz3seVQKa4Jc5N9LnPyu9",
  "key15": "4Lk7xc8pw2K61d8tn1qgrZv2K4RgEeqHxYG8oXwxP65oT34icFvW5in3B9TcXiEoetkMZUwTCRztpHETgy3fRJsJ",
  "key16": "5TRycoizciMzA7QhfiWzdQ1fhjtg6kJWC6dgyt133UUCYdp2HWLtzpCPZ868h49RacXuvMFZVNayH5fhYaERpr7S",
  "key17": "2hGMuPFBz2DU1QC9hcYzGCMXqJqfvgKdSBdKad2LQDxFd9BTQJtM3kG5i8crsJgpfbN8PUyqU1sYb5FKABQPQgNs",
  "key18": "2TeDVnD529gPESzg6zCYTx77axtLaWjamipJkYwZtYDaSvRWshgDKffGtUzn6KP5TeYVSMmiL449qWTaVpRuqZXc",
  "key19": "cuUcHE7tJbXQm1dTRDmRwuWqRcdg1XBLa89DvdwiwKaKc1tVFTmTytvQFgSsu1sxKpCF92F3UYg1fbELTrHwMB3",
  "key20": "58waKdWW4EBaSxBgERkASsMV1MF8Evv9Hp6s5KJ7KYBrKqtGC5JppnoYey18iLe4xXGWhKCkECTEtrpFQ4Y7JSTP",
  "key21": "5g9o9TUcJ31Kpj6fjirJMdUVpZe2wdnTXH4uSdq8YCdYTGHZTspSrdZ3qdqDSajiBaLAW995f986RMyZSgkJrNUr",
  "key22": "44HZVyJrtrVAu3YwJWfbBCsJ8Y4SM7zZVrMQty4BdHrZr3zWtm87qWuDXdi3Dy4UHqYhNktzneGcHegSZb39HSx8",
  "key23": "5nL8YraKqCwTJDoMLE9oyuYizEeDDqyHR13oJsThPoMX9dZyYN5hJL6pzHvhpwXijekUjS7jFfCMvGmqdSkzfka3",
  "key24": "3zJ9u4Jdr4ckkgHAomhRMJ27XcWVe8cDQMbp7AN3aRyAMiLpcG8DYvCV4q16Nc3hp1bDAjkVsZCtzaABzm6ieiCu",
  "key25": "39YcyUZV3myjVTw2Kyg2weKSrdWTxSQNKXKMcg7F1SopyxFpDRY3aTn419JwQme5NsFZ6CutbADhV981HqUTUXh2",
  "key26": "3jj8gewRyHhJC8umZetjc42WLfq6w8ZjQMVw4tk1yM9fZaNC1HA4NJELMgBbaECGrnXjkj3BqsgPex7BpXiQxAsL",
  "key27": "5LPpyGdFdqNsxHBZqoQga3FFZizHh7G5c6gq8L42TsDirEKEc75Cz65f5i9ssZ8vEyjyyZGHmnk41eJVBq6yBE7o",
  "key28": "24CwmeBb9M7Chtk6iELR8aPDpCHhC9yVNq5Zms1cbdiksgoBnged7LnGaUtowYG2d1DGyzVLyrfHa6Wud5HxBBmj",
  "key29": "2VVnBEwP2sSWbFDeJS7cWo1N5r1fxJ4AoUmcfxbNuBkssgrMkd6JJGTEU6nTRptkPRK4rdccZf3qLVuwHUwChHbF",
  "key30": "2EouezXwEoywGdQxKyWNg9cwt4rHn8KWt42uFz9hphEu5CiAFc59CF3NngAVLKKvBhk6HSkjiPYmxeNJbPpcL5re",
  "key31": "4rYSrvK7XhWfpJb98Etv671nTBtkk9WkLiKWkjAjSbsCTm1e3yrzDfmQqTPRkLppamyjizQKgZprcL49v3fwjhnC",
  "key32": "4EV6UNVqi8CQfPZ43HyVST1oFUQDeqKzUTru2weXFyT71T4iXMzxXpAkpk8FU3dcBPH6132EK8u5QX19exYDPbiK",
  "key33": "32wRvVRfeaohQteYGHFLJpdHbJY7spLfhxYXSak4JQkM2WwNYQU64Pxj64wbNoQ7yHxiPwDGbwHEm3ghP2bZU8W1",
  "key34": "3NtG3aeBUHvf4dxHizu7cSqkGKfP5cTETmXuJQsBTaM7MP4v12pVg6x9fE7w8L25LVczDR8K9w862UXsgauC1ZSg",
  "key35": "34nZXs2VassHbb9GLkfkzwdQkdnadaMDruRm12G6Z82fsg5ZersrZX7feQUAjZJSa9HCaHiNAnhCUxgjjecMvg5z",
  "key36": "4D6kAvsmFW8pMXwDRrFVh7ubKuqfmKxgaykPswAXSgcXKMwye2JdXnKirKB2NVcC3w8JHDDcubrFKJubBsr2mBKK",
  "key37": "3n3i3To4rUTXmZbKiMsvjw9r9DJvcoedtpy3RGDxJ9Bpj4Qjav4GvWSd69UGjuqJiNd3tkhQmbpaLrJ6yWy61DuW",
  "key38": "4L9S3cRsuUWmnEe3nDJWmtTBUFiibgeQAQCM3AZta9BPQJVKBLMFZ554MKDfBHgRHhRJxyaS2TV97eZcttJpNd4W",
  "key39": "5eW9CHhBBfiZfUiPJ1tynsRxRgRxL4bQwusrDnbTwSohnr5z1rjQGtdnkCRDPQf9XSVEHnX2Cud5TecSfdqEAUB6",
  "key40": "2FiUKS8DUyCLte68Du7DCVt7NVnMncsEZ1arWsvjKjcCpFargKNX5R7XCfJw4DYVdE62huHiXBpr3DoyKLrDDTPz",
  "key41": "7PrpEMQZ5G2qicepAiXro6FzZXwK1J1BQfpU8H8w9eZwss1jR8W6DartkHexwQYPLJRXt7ihYdTNnPqByWY3YJJ"
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
