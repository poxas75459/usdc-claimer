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
    "WoThj1Mp18R5d6nFGMDrFMTnGHPBPak6CPepq7e5XNA3hpVFosbEBpBLnWVL7vTdGZTmLzj6m1WyTWD8Xqpoti6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43kxjpDmbCuU8sCtpQ9zSfMK4XSgqHBeh3XJF8sXLw9JDMmiLNwvbPETCHb576Fr4S4fQfDQWqG8KZjK7zdtKh1q",
  "key1": "5oF3gqNuWmr8fd3dvKHY2Ky887NXzPadosBFtfFSY2s4tUkzxnzST8ccLJzH5bJaMXm8kmwyGVXcA76Zj37EXDqN",
  "key2": "3M7F6eAWRXHJ9GvWxEumGSNsZ7ijjTt5uR18d2KQbYLNBr3w7aHxkCsVJdAKNdhwsMVBr5y7PxrNwwhYRyTu7AK5",
  "key3": "rFzTuZcMxEUqxaaZ8VXUho1nyzJBYC5mDLMwbBBg5v4qptDvEZ2UcoZ752FatJEmHsQ2aGEcD5uHjRfRFVwgaeS",
  "key4": "2WD8TzL8JUP6mQKdtbNeY5mo3trVWkoXa5nA6x6dXVtxBnAm4Kvf5H6EjeVWTtTCA4qcZ2pdzUE82MxWJQ3Pshaq",
  "key5": "2kRpXJPrZNogfHibBskUUaNbHa1JexamxoWa93SkrN3iSX7opja8M8BTaCT6AFJt1rvm8RL2vhnJskTitD6BFzyR",
  "key6": "3V36McHpBQ1hGBeN85BsLATk5sZkbNMc7quezuY1DFcvtRM2tPaAhwijvHS9Lvs1QrYC7uyEPSXgTu6cGUDxk2pz",
  "key7": "2JooqftSG8wyE43yhCSLEnos7JucPLb1WfZRqKiHCt1zUb1y8CgH2k1F9aryYddEpqxvfYKQUs9Uep3q2P7J2Unf",
  "key8": "4UbsxrjUGLCH5BXaGwkNC2tWZrA1DLETYFP6FsUUY2ugwM5duCLCTadDL8nmr9KwryiXVgZpWkWQ89hWmREjbu7E",
  "key9": "5PhDoY3qS6eLSujSn7gWw1Tp6W7gKvNnnEp4bH1eHANB3WNgbgDDytEe1ySfQLNKZznQmwt6obTWYvsksvE2VVq3",
  "key10": "4thq5nhx4aHT7TgT8sQMorAT8ro35DhrumEZhh4cPSQQswuwLJ1GZ55i3bzZ2ZuyWL4KJ3Y7sZPqpmAEWcSSvPgD",
  "key11": "3VQY5kMMo7QGHUQyR1BxWArv1saEcGW3NzLzBpBXifUEahfSQaqnArDfRojBd9pU2hRL9xMrq7XUQ689ANfvG2dZ",
  "key12": "4vH4GwxmaN2iVPV2ysEGrPiRk8YDiHJKMKXMHRfDUmgf58WL1FuWedJgwK6ih6aVHRzhoftZypbfa4Zb2ckSKLwL",
  "key13": "29pDMuJ5TcULyiQ7wiLpJBLkyXUWzcALEMraTRmkj5BjrbR4NVtWSjPSnb33w2WYPfJdQcHZHkWq9sZyrvDQVVPW",
  "key14": "3dwTuCS7VJALcEaUkXJKFgUUaHvo1oXfxD74zeqoEbYKasfKVCA3TTvKfABfjzP1uPtW1BG2pKoBHMpXVy6pAV5K",
  "key15": "4JABhPZrDe1hre8Kjz2vtUoSXeLG45xvyDhpRPsCqJcVUaSDvoBZ4gZvkPQaFYPmFEA8NaqCEUkeX85RMzscTY42",
  "key16": "JYiqQKizWWkhBQS6FssQ3BvUGnVkjWDjtK4iSELsiwtRj8HYEZLSsCo4sAPEH41tLN8eqGP9C1sS64uNuSMa5Ho",
  "key17": "3JQiV39TkCBFxV8N5VQc9RZE5EFwuthnRVWwBfpYjQbjNoMHCV96sCGjA8edUVQQtfPGoJUpRyhkY5Mw6kYNfMnx",
  "key18": "4S9oB1MdSVTz3WJDrkKv6212iQ1Ty2BAtJ5K8Maxj3uXewAPogmEzWvFmJtKXH52Yf4C5brHYG9k2565Rko8KRrX",
  "key19": "27oaRiYcjSjAjRiRxJEH2snwPEJxsRg5x8LtkfRsf6h27dM5bekkfv3F3JBLSA7cpTCbsSED2TpGDiyC2yvMYdm9",
  "key20": "3ZXiJkj8dZNeakGnDuM5NU3ZJ8vSYcWBVZSgqbdM2etFgNY7ghNvNrcdUZu3X51A8V6X1UF6kHnMwK5cb1WHBHg7",
  "key21": "2Xo9wtbTvyQqpFEqd3wtgdxSkTgG1vvpULQZ3wWY4prJXGNTnWihAJa8JcNgZhppKB57wwrFuPS27Kb2f6QTg9QJ",
  "key22": "4dc5vYL8KCxfLyM7wmfHYt8psqiGPQ8QFaNFhAxR3mfCTk93pu1tirUu45q9RKcw9NTLspeNpQkkrBrRwe98dWYR",
  "key23": "m1DXBkhPra3FSnEVNLXpwVqfZkZ5XGqCBYdNJSzDDAqSoAehu5Td4vgfG5E7PeHtwq7Uo6vQRyo9khm5nDQHsCj",
  "key24": "2mq3qAAR3VcdLZb7em7Yq2skBFuKjCYNMiGkuDSfQ7bNoQZJSUqnW5BrcVRAfNTerw6tRdeHnUPtenNy7qe5FU9x",
  "key25": "5par5qPDBifXDrYAQ9oRMAfnkh1dM4PGreWwp94VwUEfHpr7aDzGEFwmQVc4vJFL6gqoCiNb6pBoBmLjjTXsMFMB",
  "key26": "3QLpkTNyWgiRfAzXaqrGHuSZ9mMT7762NkEb6q8c8ownfudaBtuKNHEierXYXTaKKbiUXTkCZrqeCXCjtDpnxRko",
  "key27": "3of2Tr62JQDPHxbWsPdHNw3N2td8zBnfPNE48BRtE3yYsQgf92ZNeLsco4qodGVghTV8bobTPuT4j9druFAMLsiX",
  "key28": "3JV6A16RSeGJDVQ6iw22HeC8PM7mZNpY6NPk3Am46he2ruRMhkU48DvSkRHptkBrANPeomxZi5E4N1McvV6VbYoU",
  "key29": "c6VLhvqhLFDAPG2vXeGbZ6tH6MJLCw38yqPLRPHUY9PE7mzBqTzm2T2wizBvkvF4vhx7HFdNtbfHJR2PUi7GMeP",
  "key30": "2ETo4VfbVW3iLESyPY3xjjsnVMMUtyuESdGLymWsgvvPoaWDRKaenaiuP95iYxyppvbVE8ZP9UHBnVvkNVRV72sw",
  "key31": "2ixBkvhaaBCCSd71pYrp1f9k8NiLd4gJ3zBhUMbN2pziCF2dGGztNPv6zU29ahbKVAomre6zEEkKqsQDTDJsaBgA",
  "key32": "WF2UvpkUfm6PsqomDL8LYyjfJSTSYF3RGAjw8LC3yaAecAoxBd2cWQNY8BUPZJe1hn3qAGMXD1fiBGDmKBx6mHh",
  "key33": "4EH6e4Wi5R93LicJpmxnDcjRXyWx55ffy77hHoomHMhjwJvHB4tMxRNurrV9EQadSf9SoF9bCL6Kefsy6yDKfaMQ",
  "key34": "5jcbXuVbapCxtom6yiQjtnCCHerVhyRKLPhEFCWzbDuP5YEk7zS217d4kvtdAoDTtXChEkrve3V2puNCpxn2fytS",
  "key35": "3R7P3wkee1Npjdi2wn6PirUn5TZfhMoiSZY3zYtNM6gb6xhjGTeHig8e2kH5zY8gDQi8JEgqPzKe37K59GokJZJ1",
  "key36": "2xHuK6MfHSfrVRtvohXLqWkZhhn3F2AqBb93aQe17WxXK7JSzvgewv45pnzKQSHTEH3qcf77PtFMuBoin4mov9yc",
  "key37": "3yrqQBZhjNiRA9W3VVqi3AT2JrP8692U8Cpe7YiK5HwGqZ8X9mX8DoDHX9DLeZJ54m6bR25SjDuh4sCMNPKg8dsu",
  "key38": "t5Fgwe4w5fSKQ4VfVwdRKBiHjt4CDUrz5V13A9b6zuUJsNcpNtBqDnoUkwsq4m5rByfTX2YtWoAfz7KxwaodX3H",
  "key39": "3fmYnG4vAaauY8iUb6eR9sqiucK7if6ijb6p4gXzNycGHDZP982RiWx4hkRS1isupu9h6bPYcSBiWCJr69fB7TVm",
  "key40": "GNHKiSyHqALSaWNWNfabtucZUvYf4oEYJT25RRK9q1BBCawY1L9eUr8ZbU7w2T6VG5j53M8u2WDCGDDpsLznVDa",
  "key41": "3rEHaCvfqA5QPpaw5kBFHNYZr2e4mk4tsZbeDQdhS1xHDAraAUBYdfLaiLAyLzV8sL2REv7EKtRQs46H2QinwgE1",
  "key42": "5VTJrr8j6L8BiyuCCViwemoAVru4vtNMt1FmNvrmdzvpwTV9KpFTHqRCSgiJR43rUk3Xf6MC4DW3DNK3Cga2dozZ",
  "key43": "3cFKBUmwTU2wKZtq2cCRTJYbm5yCnLjHbX5PG33Y1oLhb9uCkBZ12hiquJNci5eLxCxxR8D45BooxvwkLUAMyb5o"
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
