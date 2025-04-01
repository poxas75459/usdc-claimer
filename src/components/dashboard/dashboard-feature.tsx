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
    "428D1tUVbK3sAnE1bGfpTD1YfH5U5joYFsy4vT9VkvjRbMgY6Y4vHAMnbBnxqfuBUZX2Phq2BkVWUUZmwzrLTsNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54BMN8Keq8ihH3LDnZpyJsg8ZHEMACKHoTA4s2WG5tQNRnmEWz8eiXDkqJ8GCJggBDMUHKqWvKMqZ1LWcRHRLHtE",
  "key1": "3Gp2v1VgaRTvopqStDU2V8Ca7YVxeRbrF7Fme9ZqiRNVzwbk5db5qJka3p6kQTNyFgkxkYQPvBJWEE3moGD9ChR5",
  "key2": "5dv5Vf6QhfLBYTdrGJiXtcW8q8sRnTYH8VvDRRrpSV4siHeZU4bDbNqX2z1tcTLrju3oe4mTDG6TwpTAibwxGcqK",
  "key3": "3xRYe9bFy4bkK4s8bEc3KQcSEmcbRnJF7cpXDE6fQbmLdMiduAr9i4WwXjMY8HqPzrF4Z9uWqjqYYxRBJgvQTQfo",
  "key4": "33KWG3Tqug9UduAybAfPiwyuQss6EDFW9XCNVfZMLsnnEBR7vwPTMtH2s7okiaFTQUG4WqZ5ZCBuZLBR7U5D2cPN",
  "key5": "3UyKKUUeNTRcomofABwzxWWqJBCTGp2Ng2NxQPFbg12LE4MXwao5JZn5MERkZJrSZNoLhFEu13ayCft1GH7CcJXJ",
  "key6": "3fqYh9JjaMcWvpukMBv6hUcjbKayqZonVpy9bJPdvCQqhpL1zndcZGmevZx8ATNyoQSH2Riaqa33UJuNPxeyyb3z",
  "key7": "2BbJ8RBivBtPmXD8wdwDLEXvCC3ABxM2RAM8FxXN1ZKJ1cygEi6rgAwQR4jtzNrdjXoi6cMJ6g1xhKCHcoUdqK6T",
  "key8": "5uSytH5Q64erG1SoPjyxcyzxys2r2XCiTsrhFP7azNpf6nJu7fgkg5dmqmN3MWZWo7XtCDyowgeGKuJs5fBgd1GS",
  "key9": "5PoEn43PmYoqonFgNzXSCr42vo1vrU5xDEXjpL2RZXLgGJdpapJwHWYCVuLspKc9K9Ty4UYxdxuNNLuPL2iNdrzr",
  "key10": "4MyFRCxB4h9cZh12bMu3TxKmSedD5W1ZToPnyHSife3uDjnRLG1YnoT3F1H9q9WowigjR8woRF7sicpED8uUJksL",
  "key11": "5kLAXtAFUoyWVvWbYRj3Kn298qKjM15pYKUR7FxV2NureBj2dPTn1wcwHyXRbgP467Dj4mCsTbvVvkfThRJgHPVn",
  "key12": "5vrW4bvN7T4Tvyj6BFV3EiCPmT6L2UEnNGarmB75xXj4iiJN63xtX742Cx3LDUWaTqdorkhQqQEZGea5YCGUewun",
  "key13": "F9iQJKrgpunFWBqEixsvgm3wozQM9nMAz4nsM2kM3sLaD8ir347emtXMCnoR44Sv5wdZGcDCpTxjHT6QjaXjQdD",
  "key14": "yCCKKmLkXVyQZZk38wztK5BU5xnu5FHKMbHMAYGJ5LCMEb6W66n4hcfuQ95813DmgneS2zNvnG3HaPtZmy9zJ9X",
  "key15": "5VJmCbU9yBkW5UJU8gC7G9xNhXqJE4hMvuUsqf1BDHChP8jHmLrRJBhfvNBJ7atjqxEXAZB6RDEp4hs3KZEN5dvH",
  "key16": "5aTKvX6EWA6QdaBqdzbQ1vs835yhpkUWsh7ZxWJqesMoeuTQmvg8s6cYFBaFBDwGv9TXx9m8Ca8e5SBWUTaLCvF",
  "key17": "2LPnKzk9GdSaavLLj1f59YWMGoU47NbKSYnupB9Ms8K2u9vqvKmegCpqMT1ATdGD7HseGSQa6CfysaWEZTLW7GEL",
  "key18": "UyQgPrPGcZ6MYExGH6AFpQfUfLyD5q69YGYm59Ynng6yerFyhL4v4nkMrXLeRoBiNznUqvSH1gFJUpEvwn7MCo6",
  "key19": "n4Px8HrHPwMM4fMLnFfiUwKAZuN8HMJdwvJLrJ4zjiKQShqUiibYW1JvLS4r1P6ctasw6nqgGWw3TrLSix4waRF",
  "key20": "59FUHNGsT33pbQrJRRMyajQm2SXwYG1bKrR847cZACfJcJd7J9dr3N42cuRDVXzCViXDVatBVAzWLrLLoz1RR8Y5",
  "key21": "5Z4m5beVFwFSBykPhRH1wKNYrbxk6r1MrwX8yXdCdmBG6Yzn6dttJRBxJcxj6CZ8npyhNV6rHwRGwYTaC5VJ456f",
  "key22": "44MCjD66FtJNnPr3dfGBTxA6bqSd2nzL9AWmhHEYx2nhiPHryjDtX24w9bzgLo9X5LRjQinvpNHPcAn86BpY5QQk",
  "key23": "3wAy5zkXDMyVuJuWuPndCCTzyKfuJqiSxQvf2KLyzMzq9Y9NT1xWwv13fPyK524pitjDm9FFnKaWYDwzYxfNj1HD",
  "key24": "4Rf4UA5SyAc9vYo7o94T9YygBTzcNmLCt4ZACRNvaxbs9X3nz5gZTmRGpZL9HDjEksAYNxYRvSS5YYFDVb7s3LpB",
  "key25": "3UfgJXwgdCSXyB9SwxdtHWet4oH7LYHrhuvx4z2vpA37aCeTWg5USorqP6KqyAeTL7NpFSYJ2UrX5PUqsUjyEJqZ",
  "key26": "2hcJLJJLnuwGkY8dBXC2FUC719z2m6FrQW3sA2FWpZdSU5fP2boSbQD3NYJDJZGMnTpn2WQbcmVjfZkf4z4g1bhb",
  "key27": "5PoKEb3cGFN6ihDg5SH8AKQfXVA9urfj7JpKoCNzC1qP6WS8f96kX5GwidHnjECfSvtYJAGB8ahiPaYkJvKbEqgL",
  "key28": "5bZazuza4WdWBqBiegzBYtX4Ly72CCDsYx6x4zTZdxw4dHRnEE8PY7FF6i9NTy8XxgFCXL4Z2Fa4x9aopcHHbj6T",
  "key29": "4KV37KMibcS7NZT9GbtfzZuh2nYLK4oAQGZTgLqt5ybSdtWqjW4E8k5fKLtJ2p5AGcxi374yFCpwryW9G38owcfM",
  "key30": "2S4ysRgm4BzbY6tbeSqS1Q9ndwbvqoHE8F4ADgcwDmaDpRMDrpBJB529LPXri41sNqeXrn6JSZHStH3xtJGZHb8S",
  "key31": "4RcAMZm5pDKEQJGdwiCNH4h5dLENP8E9j4DPkMxQDsbVvs52Nz63JAcChqm9yEwWHbuztAVb6bzt31dxB3VMuT8J",
  "key32": "545uv4qHgf5YX9jtveL9iFgqm1Sf71J3xMzXB5TeKxdaemBiDxCHUfUBAx64kHaUMQV2pEssHk3vcfa383onKMQX",
  "key33": "4bFH2BggxNBD6pVbB6obHCafUUdY35NpH5pY9R8HfRiT4HhivFdxXCLKeuedhNnXqW5Wt2SBrwSZbbRdihUXMynb",
  "key34": "KiD68hvcaNnhnXiaPFodoNuNhgjN4zwZ7R46wLUpYcCq5u4DCoNJDJVPmSxbMqgFdSVLtD3TtConjPbzXw5Spoy",
  "key35": "31TYjsJEDUSGCHsyPn2ebTRoEXTVtmVJzBKqT9EA7BKfiWSa2wkCNmkojMoUgVNMzG5RS3jYGG4CXUybKAaVTQ56",
  "key36": "4UZiHEMBspsf7rDGzuRN35PCSbnnjXw9z2mKCs5VzLByDh6Rotc8LMEGJ7H8BhMavaH3XrMTPn9Ae61HEU4jZKg4",
  "key37": "5qsaBcK3tyXDikroz7XWBcBxUWKSLz25ZPk4aEyupSiyYHrqU1527DFgP2G9jdFKbtayRtVUtWmTLWEfYoznwXmA",
  "key38": "4K7YZcaczgGK1CSTTQtfP2CzigD5UYQ2fVhgoe2BbGfpqmsqaU5C63hMKsJRuaaa7cpc1FeJXVthE7cymYRi1z1E",
  "key39": "xSwZqHm8B9mLBAsiQSm4ZDbkAPp6E9yA8FFr1sCXxb8JDLuAY1pcWA2nnLop9yxu5t4gQDguyeKExzfdyiiwjxW",
  "key40": "4CuFCPkpATk7j5HWvJQgktByQmtBNyQierbPXhLzSVy3MGteJKL5rbF8USmvLnNyXUj6FF5A57zR7QTnGiNknmUr",
  "key41": "3icFmULCrqPcTKR4DGuLDnT81zcHJwo7mfWsv3zkxXGbSwj3U5urwxG3krTaDA3tGoReESAqSQD1xnzhfaYz6bUG"
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
