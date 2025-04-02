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
    "4dg5ydNBG5b3RuqAZf2YLzinrzvgikLcSFbSXGogdbiXMrhBrLBQhNHLycQ234LRFwYSLgWDREBYFrpfQuohBGtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w7XmZo9i9zFnBQywKKh2ohvFxE7vYuM4467PbXA61LD3CDRN6zt83WHqpepQ9ewMaCgMeAe1ziWiELemdPRA9cd",
  "key1": "2nEpbpRTMmeAvpp7ayE9bNkvEvh2RCCHrfW6eY8863SDGMoXmT16Yd8uiZJorErYRMiD2gHJNmsEwtDxUgi4fmkk",
  "key2": "2XJSWEdMB6deDDGZPSwE3TFPaiHA1SbXAcqtDfSQcuU5rLG8bbcPo3Mw2AdxkAYJ8foVubwkvtbx6Hjpk2qKkNSo",
  "key3": "2gdzfjyGEUPuykULdQEeGMXXNKp8wf1secfJH71tMHdSYse6EpvkEAbBN9GWkXyRtrj6u7CPG4vW737kyyUkyjkC",
  "key4": "2YX1RwYaLLMvCsdQTFnuGvg7HVJrkQB8SGD6swniGvWoNSqSyddveBNHoUpyekwZqNitGqgVVjFWwuRWwopF1kRF",
  "key5": "4B4JN1159QvBthxZATtj5gxhgeV8uEamS2i1ESDtkwcvs1t4kvvosDyDmmmKEtTV7TW8V3vaWqQw6nJ7Atzm7gR2",
  "key6": "4wa5mJnhKJLQWMogM9e8bmBF6cN2zvupiHthWghvHbmmkTjFt9whhag1vSzUGKXrFuK38eXS39WQVwLN9Ref6cCg",
  "key7": "PFABaSkDQ6p3dMdN4iycz4VjybhP1bvpperzn19niNx1gfLvNQCuT3NaC74bLNRPQmAUpeN6reXjFVy8U4FPc5R",
  "key8": "X6F8e9yfTj2fAC7vcF98KeUPNkqCGEFnc6w6NPLZpDW7no6fy1xVYRrVj5UcGBqYb3gB7vbRqd9YRgKnGyZkif9",
  "key9": "679hfk5F8MVU5y5gta774BKRUEhJEzyCGQs1p6y5UsKvrmCXs2mMKogVd2hxxLygQYs2mhVTCJA14bfhSqFcavu5",
  "key10": "34eJGgvDo7QwwcojK8BwoAAJ2qx7eEn7oJQRKm41YWj3id7vEBuEmxZHXqmYW4qz8bxLfoEpcXkayACycNRreTHe",
  "key11": "2hApwVKGcD7UMqaCGgEmiMwTFdfpR7A1Rr12fTrBP9S9Xc5mGN322vVWm5QfqVbiud4riuN8tBMbTojYcHPZjuU2",
  "key12": "x1SU5YkA9McRh7jAKnEmNFLNbJbbbokmx4oMyrbQV28bPRJp41tn72K9MYbnfuJv4gfR91zbPufN31fdQy1Y8Pj",
  "key13": "5PkWiPKya9iVvkzR4kmaN71opt1M4oK4Kgn7LJipSfAn3nx2kHinVuLwtTSdvY92DnHpgiPvmXzuc1trhDGBnuhG",
  "key14": "5H5G8yJmYm5s8YU2Hu1QSN5Lv8GfsF6zz2QrWGdQ3P6o52QaMiuomuVx6HrEmk8hNW48NG5f8PFUFFZfnBYnmQZo",
  "key15": "8JvfTpVMB9h9etwntSL8GvLJUWi1GRDweBjTNxC72mfeZAq5NNPiJ1tD6Q7V32iGbATkF3fR6Fx3QLNTZF3cr8C",
  "key16": "5EeHzoysH1d8gR8tPgtjkcn7hu7Z6hZsRasEqHzVksNvJMCRS2ijR8Vtfdj2TuSpNgzRCSM5u7TCtbsGSWGEe6vR",
  "key17": "1ECHepj71YraWnzXwRCkJe3m7kLGQknzeCqYPfkwYsY9uWcdpS4igFjx13D32Wyr3Y4XK8o8PdNmoyBbeqFTndE",
  "key18": "51BYf4ToBG1b46t5BhgZncVmaseWkdbdJxRL4ka5RMnAjSQVmuCLjA4pnLxNjSwdh2F9x4nQffBsS4SwqrMvMheR",
  "key19": "2xBkeDACdGfZ4RBk9wzsuEb7CdzXpXNJ7uwRYbyL3Xxdyp7n8GfZvcAVjeMughaePm7WiuA6mVyvjXuzHd86zkkC",
  "key20": "49FMM7fgrycrx2CVJFxrQEHsZH9f1edstTA8sAFekRx1BMfwHEiqUUBQPHRXqwuNkwxg5i1hMwPAc9Cfped6hUby",
  "key21": "2a6HeSfnQTdVcrhxyiNDBSeHpeqQtZqHoevb86BbBQ82CJ3bdREUJHns1R2yq57fr7GtsvBmjnKAsfDhq45F7MmX",
  "key22": "3t1iDyDBwZj9NUu8qS2rhuUwxGBPW5GFtTTRKL2qoUBsbSdpgW3h93nKsd1oN9BMf9zF28WRcSBSpJnwCZyQi66H",
  "key23": "2yDV9du2Lz364P49KTTAh9xb3EyxWwNh7Ue1jWHxAGEX5QheG1ztubx9wCFp2Lmp31AXj2RsVZi27bpsJpnh84bD",
  "key24": "28N2WNzTMxonBehy9oyXkdU2Wisznyv6my9Ub6diWqugLT22AV1z3BJascYWf5EhTjEw8F9L3uhND5PNQv32qmjH",
  "key25": "3HEaULwDJoC7YfvwV6tgR2QfJySDEfphgdHb5RJWs3Krp6EGCe5QjPjFx4sXnkgx6qZ9PmaXo2dDNZByzM63hiU6",
  "key26": "Wpd1fXECDeQazUGcx6rB7eYQnjveMy9DzeCpryoysaPSDMfsYZAWW2ryeoY4Te3pLfohEHuPBxK69rsZGx5XTtb",
  "key27": "QxuDN4WPLGaWuhTp9pyqLE8n2ed1Nn185FuYps7FiN6x9cVU6aAShvAXkMfDATX5LCVipqPNgP9zNMZTpYkR8wC",
  "key28": "4xzoFdNLKoxYfTzaFL44R9XTfgcP2JfNTH3achCQ2j55BTFtPe42bndEHMQaoA2qbcqDgi62pPXznehetFZRBL7a",
  "key29": "44p3kPsjmgfLYYFsu5LAZqauYLxJuex84j1A6dSNbcvGaZ9fgyDVfaojeGMbsodHHR2pUNv7sexPHZ9j1NDiR1TQ",
  "key30": "2aJfnGL4v9sxLn6jigpZUBYgTQuUouoS3ej32TG4JEW52z5gVPwLFnq7gcK4RX6o37T21KyDeyQXZmubWmmGduq1",
  "key31": "2uW6Uu4y7p99CvUjsK4731RpkSLxu8WWSw1CqQ3KkWqPWS8gNHwJgphtwzuPVGMQ9ZxheQH2tuMNLCuU7iQsjjhw",
  "key32": "3DbGabjcaUHLjrR87ZjYkRMtv5kvbHBbKqkYbDy8EeUcCejeVkho7keTvfNUSDSE3a3J8XUUJ2SRfEp1QHbdapN3",
  "key33": "4rL75dxYVHu6fyckDG4SEUfdfKyP4rfFaemogXKpNmc12Cf8w9n31BS7diXZbJ69cHttkPvF7ib6omTy86RQpLb3",
  "key34": "2YyEnfJJWv1j8ENtytdyKDX3a3nSqBkA5DchgWWwVe1KhjXYChmmGVh9yYdp9rjKKN3fNdkb3ZdousviXbf8zXHD",
  "key35": "4kQ7khrBfcSvkrSvkNf8hwsxYhSqYKeHeBeyG5awpE3cezrrggVpqgbMWAp5qscw2HNzmeA4A4G7MkzHLLsZeXzS",
  "key36": "2HMppVVswcnAp2CGUqGgumV3NApWvWW5w6ud3s5gYxHsWS35gbEAHTGYaggyqbhyRuvmnH7vD7LnaB8W4oY7292F",
  "key37": "5hMDnyphxAm7b65undxsyNCzh4sSErZmFpmeqVua2aM5RHtYtQNX4S3MaJqdEhU3h1iRSoanbqBR4JSvxPfd6pJm",
  "key38": "3ge1JULGHsvENL7htcm9PHCLZRaae2icTJgmy67xNE6WKMnfbEHJqZdLF8HwNjvpw8VwdUEwRSVrr9ZFuz5nSHkj",
  "key39": "gaDvgeER5kE4zEDxH1k3xNnqtgc7EUcrFRsbxPyM6v7MuCe9cwqKH9iCbDfMJkgPgNe3Ur9ijwgHhyHSew9VSwR",
  "key40": "4vuMhSvdCfzMYpdfeJj8GPnVywqL4K5ZcqqwcV6gQtE9hQ62Rt1RrXKwerY1NNFD6SwHuggMzCYMBuX61t82EyG7",
  "key41": "3LMcnhura7qfKuEmYNC1qbNrot1E4Fha1JMP4YMqRfm9MeVSDHzh95RszSUNMWNZagCiYxVh6Nr3HTmRxiQyLR6y",
  "key42": "4Mkt2ts665a3dixGG8PRoXNB1rcSGutHt7fPRLnEcxu6yqJwRUaHK12Gqi9cqjTPyn8jR5V1u8c3cmc1PcqMADve",
  "key43": "2KzVs4VsMZ6DakjNgjaiACJrDba7U1ZPcaPJzNchj51yNHcMxK8scTyUN4AyjaXS237r6UXj3TNjTpBBjJDHvLBr",
  "key44": "5bMC3wadY7zA3FMCQgij8vT49kxzP4WWBZeS5aozPPBNxmKniMyxb4jwvS3HPtnvhXjkw5HsrDtZDbRqCNMjPjsS",
  "key45": "21r238AiR6fPiiMFDVP9HWy9uTMm8KRGHNSSafzYM8dUDiJq3qi93S3UovJ992pe8rDsauXLFYaubyytyGHMRUzt",
  "key46": "5Qq6XRtLt8kzVkPxJTharhWNybN1Whmsp8XTazSUCYeqWxAGp2jDLJemL8hoiVmZu4SkVR4vGjsM8D8EBQ9WrLij",
  "key47": "5bfDZJXTMyviqgLkJ8ZZ8qakLenmtw2huoPztVc2qYqEQbN14acd1eiiz7FC61Bt9KAJzWMHy3ATiWBW6TbHkmNM",
  "key48": "3XSPND2ttJgG6iN3YFNLTTJAbQF7JVGQb9cgtjRxKGtLK2Watk3NEjkvDqGAb1AAtUMHZiXL97ontUww8oUa6fye",
  "key49": "4iTtEo19sWREo32vTgdcNGr2ZaShagGqtNpjg7cb6rSfD8L72hVvZMRRaBjKSaqohxkVxZ1P7F5HNBHGkhNBtK5s"
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
