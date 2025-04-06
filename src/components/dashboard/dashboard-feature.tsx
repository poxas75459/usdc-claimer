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
    "UA8avvGxomEHuC8e8JzgGMbhQyxU6Z6wEPfDme6BiFbLKtw6mNtekuAU5sDMZVVyfqfiijtUKdhNmFekXUM3Td6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TNgm4LcwtioVZwwWMwtAAUS3r4hVMhLG4hykuyekABwiJDwCj2mGZFseSssPprxnJp3381SMZhyWkL94eYNAoks",
  "key1": "5hHtieijPu3PciCjHadsLx4fLwCTScEVpKCzKFbUHRuBUhvXWsaUYZMFk5vcmcPp37YfnNQNyfNnzbSeZfwoKs3K",
  "key2": "w1QvYSpMgf8ovNpVarFccvTxaogHirCc5LBYo98GB9mGuM1cJbrcDfVkCM5PXZWa6VyQ33hDN7PkQHDZ6HxFdYU",
  "key3": "2TvY5sYhzyRdycKMjdnBTzjNK6ar1WPMGrr9wf3rrWEUrSwY4D9uy6BdcxBjWuZpiijnC6SjWFE2z9YRvVbJf1Kd",
  "key4": "3BiUQ27kfai3RfFzfuaLiTmkVpW4Vu7F4FMH9KqtqaneZHextZhNWf3JScn9hH7yWfEUYUzkBUYkKiMQm8jkXNFm",
  "key5": "5UbpYYqqvG73XtQrngVJkDeJjwG7ycnSrXssdY6piELZKEwWWrXJox9ab19QoZhEn2dfUQ9AKX6QJCjw4AX79BjK",
  "key6": "5jg83Vye1bEoWxH6ro2Zfvx4R23aexdSianFBSoceijvXDf8fTgaw4sT6T9kZXJqaEwbG6eZu8oGiaK5Ns4uEbMu",
  "key7": "3aNRwJDVhR5JaANTX4Ckm5ew5QRgTghNAc4XRLeTkTfts4wdTFnnyqh1joe1vea3TiVDnWyLnq3Nmik5aC1TA7iB",
  "key8": "2RhFq1C9Qtg5PsD2b1maB4mxvPxeXww2LpcsxQ7RpUz47RupTAt5bfqy5x6KTwTkqtYRSDqrKKAQ9rfRMcRSbLDc",
  "key9": "492RhXVx5om1othMaQeY5ky1A8mLeXSy5J6d9NZ8qL9EBMYbiwLHYyYUk1CE1VnLX3RBJAFDRuriMnmk4fcYLAW7",
  "key10": "t5L6Pa48mnCwzxasVvM4oiXkcccGeZY5FnC2VRyZyaDpwCavY2ceHcrM5Toh86Gb8jJ7nmxH4unidzPjHpFxwNs",
  "key11": "jFRWL3zbYYHgAv4hb4QCLQdKHgTrVCDTmsHp9aLwXxCWVZbCf5Hx6RcKuTTbBVS49j53PFjMX58arfX4SCTKs5o",
  "key12": "2YxWzLwEgtxR9Pab3B6SSog23WJboiPYgQmL6NssQNEbVuzf2kgC5htcYy54VbgqD3LeBXLKehy4t1Q6UQVpR5J2",
  "key13": "26dryZQiFMB3u8m85LsWZ5AyjYewjkqDr3zwLKx8hE6q5fReRvbhQEX24XyJf1XYK9yCqsQNvfSweBEgHa64nT4L",
  "key14": "2sZghWaQDwujcwvNgviTaXRQaYmZvLSo68HUTwCtpHNSqufSA1pGB4PYHtoaTNrWZvQSCY8LCeSMGpijrGTSrcTj",
  "key15": "2KquEgPjVRBhKfFd9yGeBzxQ7hvPAo94tYEtHpx2FDT9koyzVT2oDir8dCZdQd7bgF4FQ7tsjF1Pv79hiEK3ERcP",
  "key16": "5rsGrHpsbGa4BpLU3hv5wJHtdS1WHnDmYg3okcRptA6YRTqZVUNJoEoRNz4F3J8BhMJPBHt4d36viKLiL89A3mg9",
  "key17": "3sQo4fwtub8JXzgXFPVttFHKJTYmU66gehj1M2upfE7jcJchAWtPCajzvVBVMV9YkV4RqxCZokUuURBYHi1yteg3",
  "key18": "4NuoMYQuR1zgGhymd3YNuSy3ktPgLAXD6UNyLyyytRF4ZEyPmJfE6AUx9TFzKEDNoWGbgTohLFDy3FnfrDfLkoaR",
  "key19": "5w9rMsgnFu56Viak2eZQqhMRp5gPwPbRygoZAyUyz6Fs4uiNPrDnXpVKRvnDBCWtAb6NDDGYLXRm7B2KJSzrAjM6",
  "key20": "4mcZt1Wrce1FjAyxLyPpmbvfs7FTJMVNMR7qsHLpb8XFgEDJqQB3oYbuPAjhvAgRuLwf7wRBuqXXkW1SeFDFGiAC",
  "key21": "2HdzodgFLLvkornxcvRTZRgD51RBUDFYY6EduKzfhQAMHbmTcn2GLYxFTKe3swkWyCrCwKtZ8Z5oQeQxHpKzezLw",
  "key22": "4s1oY4PcP4pyt4QqU5SLhveeja8i7Z2P3MJpeAMuRYMew698Q6L59256SyW1RTkzGR3bL2D32JWSemSMEmDUvxSe",
  "key23": "23LfKQVok82aiK8LJ44T9imKrpHKDXde6misnj9LdCL1brtUFZ7SbcgUQNemb2cxnvMRP5rGmL4b87cJ394SgoXy",
  "key24": "5LDaesJDHafAn8z7zSkHThNxbX3PTGpcbkuE18pdUkvagNRVUTeGuoXeCq4ytWLJJCSyv6QvfZMk6GFY33QnnUwE",
  "key25": "2KXiJHFZcq8mAhbZgS9TR83VEuJWPQpuDajMAEnfvw9eVPfbdqJPxExjwoWjud3z74GjRDaqBixCdjgtnSnoSEX1",
  "key26": "2RbJoVnB5ygKcd4rHKFm59cH5MhRLRAx5wyvdvMuYY54QDUsDDqBZYxs16nRqUjag4abQRCYK7kWhqNLq9tspcdH",
  "key27": "2poxN9idjjeqeHhGqnTzCrx7xvjXwh81i8ArBodHCuXAeCVYSoB3iLkguUxwardvtoNY1dbyfui7tSBw66qWLTE5",
  "key28": "22qpwBhK1SW9NUa9E6dMoiRjKkJ9HQEEVoR2YRXbUAZqJHT5Nh1id18aU9n4BKPfvhtonNp6Ld4r7dYJ4sxFo4df",
  "key29": "2DucX18mYBC7CGzkFwQ9uHTafCjftrRA9tFe8kvEsfzGokaYWBwER7g5tyeVLwFDVXksGYhEzs4T92E1h2bfco25",
  "key30": "54kKYR1E1JW2tCnyTAmde7z62uEGkKpeGbQzjhXvWnSpKCRNu2LHpG7bKxE3JznaZUs1Rza9s2He1CLJTrQCtS4",
  "key31": "dqSgSS9VtmcXkkcVL3cXLxpUmFXRepC2BQkfyCDbHVSkPZSLkPZDNZ6pnmuCah26yJqosxPj1ayp16tnmNfEZDr",
  "key32": "2yUd6cyGTBKafEjvcEiFvmK52j6MJAbxD8CQdqah1P7YGnMPCVwS4Kw5UkDxr3PsehhzEGTHBR1AKvrLN7WNa2im",
  "key33": "3FD8fLWVvgaqx3AtbiQo1mWCWg4XLvds8nB8wab9hgp68y9DHZvhezj73tqexi5S9AjNEiH2TdFmrHEbkmdtvUHJ",
  "key34": "2ra383ugQn9jcRgvm6iDgXLvMdpXK4Zfd7DPkeAsG9NbsheFk7zBkAapsBwVKJFtxYVtF5CTwmwBwNbUY7Atdzds",
  "key35": "22PGYysQhf19KoyB5utTdt5xgt2eyasQPDRnCT99HqwbrV9q3x2TMAuAgAGr95wy5LNcvSXACVk9vR2o1Nc3isf5",
  "key36": "2S6NFdw2Wntg9qJvrZsqWqX1sWbxv9Fb5JLPSf7QGoK1A1j5koGeWFUg8yAJDd8rEY8kYYJbjjsQucZSJ1BDZL6s",
  "key37": "xhzuEGYTWLNdjoGimNqFYQYagi9AoqKhXwNXhwQXNyjbpUQ7PEAmDPscGSVe2g6SWKUprXWnHUGW4mBbZ1BFnZM",
  "key38": "4qReUy7C7zvW4BAsT516VkCE9s4qcQTbEYimZhhEa8KJNjxRFX1dbn9EQF9tVqYhTGqZeN2k69FfXJXwMa5T3NEn",
  "key39": "2pf741Xo5LZMJVdcsYzw66fxatB1U2DHqUQYkiWcwgQiJ6Uuw6xYr3y6SmoJ7ZVirZg9wr83XBNYXpYnd2jWiwwi",
  "key40": "294gCWjkN2FWox2EWkmmiRAcXNtdt1iYUZoMh87zNbme53PJU38oTFBvseRBuAa38t21dWiJbRzGMJ9wn1744xuT",
  "key41": "2S4k7tQ8SKKuQbL3rEf9oVQZs7D4YdAqXx8KcsAhGqB11RAHt23w1SK1umTUkvdRM5KVqssu3w6GZQrYqEXMPgiA",
  "key42": "5GTX9ZHE55Ko7PmjvkfUmFqvoMhrbHRE3e8LtjBZ3qqgLWfd9NfpAiYjeVHauTDMUt86NhPoSppC1yJJ3fNxLj8C",
  "key43": "4gssn7fdEKVQvW1HvrBP2SZp7TGYvi8qLqvEWiLULu9Lc2sZjjdY9S7Hq1e7qtWinxrhfqKxobgpY18ckXA4heZT",
  "key44": "5cwHYrqB6wRBwzfpVk8ii3Dv5LkiCKH1FBngnrJL4yq2x2mXzLLPdzvLWzUZJzhgNLMo5jS6rwZqnESdPTQER8wW"
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
