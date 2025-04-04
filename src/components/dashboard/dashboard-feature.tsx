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
    "d1aqnzS3A1WNrCuR9X8LE573BMM5ejqKFzZJaSp5EFR5gTReSztkgGh4HTUdXyfroFYdmYZDVyPqTwtcWZvxQh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R69H1QJY9ciHFrZpD3Yoe88gDX2xi1jEwLb98HeTVkRDYyWYCfej66NtjETzFYZNzvGTGuDfJAQApLyj8jZEtWA",
  "key1": "4dLJ31NrJinMZ6SyDqwMpmhvcArxqRUjeUPb9WfcFvdA2ojss6osktYWz8kNCKFdDcNAfWSvdJDpWsz4FAeCtumY",
  "key2": "2Pn6HqmPN4zdX7BAbizetcznxshAxLJknTTfZeFgbkKaCHER4W2KJzBGS1wFNmhkLWBZYQ78nTjTR54oGSk8Zvuk",
  "key3": "bfN2A4YRnn8eKQGxeivnRvBSeDda7ZCAgpHwo6MKRmiK2LwNzB5dPdTVWQxc7GrtbBVjStTbJ6gtPCPzH921DKM",
  "key4": "5zqCjxeEQSoKy8249hfe917p7qobaS1RWVGXEocAN3R9cMGYaKxEVsXoPSmoYmgiW28ic9rdA1yPD2zaKNJAsXnM",
  "key5": "48GTPKkLZyS4d3ZQzPpX8gHw2yJhLE8PbjtigeE1zupxmmr4JTSJb95yPNHUusfVu9aEaGKVuL4QXj1sJkdULJGG",
  "key6": "3KTBdPwP8bvvTTC8tSkyWPoyFkT1g2ykqEFFknkQJLri8ukDu2vtUHiwqEWYbXd49Ae5Tdvp8pcnjrVfgMFUUcCZ",
  "key7": "5fBQjuH2ENhhhBpE4DHEfu1PS2L5gBrjsAvjXasL2tzHfRi4zqmaRE8iNX9r6rsY2JR6gqmt99B5WvNdbmoRgab9",
  "key8": "2hQhe7p2mA6r7DiSSjHrJb8appi6BEpQsSdDtw22V3weHkzUQCum8ShkLqMWgrtxguKVha8agQmMk5ciqrq7yfXD",
  "key9": "ZEr1DyPawhqtP18izzvRkyxnrNvq4KQsBFBhfSx4myPx4Xqoe7eyUySpZbB1vVrm5AwJ1eiUzGxrhijjVvp8ne5",
  "key10": "3vTzqAguHUdJZ8MamZS2oAvuGAJK864ksxBjaso6RBXGaGsSAaM7LJ3YVYwYVviQFWE2NVpKRyMroL99JYnuztEn",
  "key11": "4pgT6juTzpq7rxNhXFQddkSeDcwTS8FRSoWpER5z5CTmz5wzXpQruB2ijHNt38FnCGnuXWnvsLWihxerj4K52Sp",
  "key12": "4oaotivmmDXahWzGy5J9CLpxS5EN4qkK7Ypvq6azkef7PSsMxUbzDDgVfCWR4WmXdyUM3ERn9tZhuSpaUtJPbCaG",
  "key13": "425mJGKxEsUbFSv9UCzGnr5RBtGYK63w2jSer3NpKDqEcmkyNGPT3egr3hF69Eag1wtMdQfiHoLnCRyi8uih7VLM",
  "key14": "4VkSuxBVc5DqxnDZJ1xcDgAbRMxWi9wk8eJeFZfA2kCGzenz9jCEJCM91XzzvRpXG2nwRXQKxi3DNqsy3NS3Dtsf",
  "key15": "5Z2SZWRNydps8wVi8tFjo8XB4TJipvXg3pXhDWCws6vLjte8svDkqApJqVCkUGEGC9WSWDrKgZ5obqAZWk3Ls6VU",
  "key16": "34Kx1A4jcZywZnwCViSUmFsCzvxce65Y9PJXENzmkUBZxsXqu2RRyWHXdGExrHHay2erFy1myUfykwfnripjjWv3",
  "key17": "26ZCXophKLMhvw2kvquDbmpgjsjQMAWsY5gJgsPbi74Tvprbp5rdaAjE3cqcPUR3fWd2sCxqx71WQUQfcvFaqgNs",
  "key18": "3h7qCQjrqjdEtRhjCpzir1JiLoqY2F5381GKYaYUA5cAXx7Y9Bo3KBWPzzi8hfeWUzgdzVe28ELTAd3GuMnr1UXD",
  "key19": "51oVfKQnqbbTbhJq3w4eivcnJxXzGk9CZ3PHpHwodj23VXQVD2EVvbjLvwb623o4zPjtw6ZEZoBZAtSuPFhxctHg",
  "key20": "ScbEoWr1MYdB3sKpAyRtj2BBAd6RRxKk3Ls17cDcRuDFicKG99T1j7MA9BHxFi7KQTFHqiRR6ec8KiWzsjHdkSZ",
  "key21": "3KW1moQkFYnaZQhydG8GjtGvzVcFsoQGNEkwFonGFZFUSW4kZnyYz1rM73SXTN2BKi3y9RsQhUBHYD8XdcgWP3mL",
  "key22": "2ppCacbByXAQHfeJFpTnwHyUnWqEkPjRv4AmG1TQsLZJM3UJrwY1hRPWAthBYRiLQudxA3kpNuML9AcabANHnaac",
  "key23": "4D7V5mNjvp9ASo8TFFVGKFnrBD5SKRcW7eoVSYoruwxtbYRtV6Hyp4iAFRgBDFsiC36ZEQsV2HmAwPpDZoGMk8kH",
  "key24": "26VKPzWm8ZXDvVr4pnSNmmhusQ9ecXhZk1fFGAvVzdtsgeLn5icRcKuqGHEik6FCurBk7mgyspCtkYgKKt8QT8gT",
  "key25": "4VgRC2KDrhFo7ZKEMkexQnGfzRoKVJ8SJEQhKmhKTSFrW8epWRsn5w4ouQD3fLT4o6BrMHYB9USv4BVWCGcxi9xR",
  "key26": "5ve52oy12qu9ee5v5N4gZ7TvTjHHgG4pDd4qEqTdD37RXrXA9c1dgVVWPXNZNK6WLJPR6pjWKqyrNBQsCzSXY3xV",
  "key27": "ZbVfu47cVuULCmveDomMbssCnmgwwJQobx2EYnxYu2CJpMB7PN576u6aLYpgwugZnpbjdtiYV7YnTXjSNcmaeBg",
  "key28": "2nKgDvqEvEWoqane8R3RYK1N4bmC7N29j1tsrXhwFyWMiRQ95LDKNeCtN5ugmojxuPTmAP18dM5ToTNxtvoDTgMT",
  "key29": "4t3Zm5RpN6uJ4E4DeQ3H6aXPvgZhe3VpBSEAuJgzXahJ1BHcyphhZSd9xP8pocx6Wja1guMg5dTbPi6EQV4cvKHY",
  "key30": "2wjDgxRYthV27A49cdi2p3DwfVG8jvDoQTQ2Tjpqd3btVeNRqcihH7GQVthBPVxH3mwffC2Kzu3C3Sg7ppmmERcS",
  "key31": "2kDoyGuTFDaz44FN4AcKfnEa9KRDy1mXvCpX5FUYSni82sESZT6QxCCrPYY25pAyc8JgB8wHXPksUWbQQSSKPFJs",
  "key32": "31jvAWSchJujeskG8srhM7vtBAskc8gjLmk619NJJ3ai1H4u79h6s558BdFzViiaC9SxoCUgneE6NYtULgoscLVu",
  "key33": "5tHfVUmpzva7YJqpVL9KsDbr31KAsRxjv73LBTJj5yJxBnUyCym7DwCzKGZsZ1Pswzynyhyiu46Wx1kh9b1crNv4",
  "key34": "4dmGTf1iwqGAbD6skb2pDSkYNGdjMyLQkEgSQdM3EsXzPyxNGnNhpxfv4t6RBYUjno4KRB2tBteRqgbYAv25RosT",
  "key35": "3UYnyzbitgPXJwEJRogeHxj15NZo1yNsubNEEt12esKmxrGns7DuRYizTynKBNeQsCgcDj2iQbzGMmadkEenCw5R",
  "key36": "gossmoUTgkGsBMor2U1ZUNyBpWWaZ6GzSeRPkPL5JZpFakc6HhsAnRRYqZKmsnsfP1RPRs5BAs3oa516esWTED1",
  "key37": "4xuJUBJtmrvCcyEg7iryZoQYZ2NFobBx2N1HHmcEU6hKPFLrnvktYasyG5wa6cUJpsSkJqPpVP91NMitM8GCVFMD",
  "key38": "57TngR52jbp1CD6E36nym6xZF2G1ek4DVL2DVT733bU7VXYfwxPWFSQEjS6SLJYmUTJs1vrB6DvmnAWXpgsQccsu"
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
