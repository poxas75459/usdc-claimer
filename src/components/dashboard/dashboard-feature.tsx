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
    "3A8NkpMAzfa1iEReUomVZxHrMGG5KVxawRc6BYeoahcWnDBWVtq7WtDAMkBdLQoWpaqtWc8HyyRbHZ8Z6YTbh9GS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J4cXpabL1MPK4F9KWBCkxetrBmD8g1ob5UBAJrGs5rsDFgTaPcwz74fXtNLf97Vaqr1jMHTnzJmqfLNRA7AMHCp",
  "key1": "2jMNYSHUhmcp2bWrFPpThc4SZs6h3gqyAMzXurK9nv6r77ovzYnwNXcgGvW1sL5mmtJ1ZJEwsn9AhSQxzrE3dR6r",
  "key2": "2stc8Bb2r1hAqUhPHmJK6GaBEwEjWhHMyLqcM5dXBARubmjb3txRsp3p3f7ZBGFHgbLYptrT9EXVsrBHHQFE9vB5",
  "key3": "21tds6dwsfxBZA3rjyw5CXDMmSQ6piJKr5mbMhi5XJn4L25Nx6g8F5wDtsy9kGyPew1SgPXbvbS2uCbcyEAHnWie",
  "key4": "3crMSzd2nC7pgB1WkmKNKpcNo4qjsr1ykkNjdLsx7nHSU1aYKDHP9MtTmSX2ZHxUR2x9BWvfyZrxd4U8LZ7wnFDc",
  "key5": "3PKbfUP2WjRA6yLbgAxcxwkDDLSgC5r7hvNzSe4viXunSC8U7j8Cds6PZp8eYh8AkQMXX84Beu8XaN5RMXLxZCN3",
  "key6": "51swTfKmhGHxxgYcqCPpscDmPPCpUH8PAz8ku3URgDRLS5g5KVJVsp8kzM6iAuH4myxXP5bbUsgaMNHBJPndKDTJ",
  "key7": "4iS8LtFe4RrNvJdonruktyfSHEYx271a7LgPnGWkJmUpn8fYELT1GiEDARewTysc6iHSfUK4mXaBYxqzWABDhBBJ",
  "key8": "1apFf2DBR6ZBWL8bwQw6WHjN8RceHFv8iCpTswiwWs6RLpdj6xNjuPHkV3ejCMgjdfZuU71GhXmd2UJRqVahnq7",
  "key9": "2C5s3W6eKCaaKnxw6FV1iVfrCi4wbSGA6N8LQgTrQyJCWZPN1YomJ8dME7QkVix7GqdafLbNSJ1CCTkW7T1c81ru",
  "key10": "2NLV7kjtizNfjMLyZ7dXNFyj8uQBappDVPQ6EQ5WEEhYCzb5foSFVBAZd1N7oq5KUNYaedG5XuQ1TFHkhVreKGy6",
  "key11": "3bZzdmAGKQ1MHkFEUaRa9xmpdtKvskZrcMkj78fyarekEfThzQ92G71HCPbQF6VAPUiNcRwgj77SKqJfZX9Yxea7",
  "key12": "2fBE3vodwh4dVJr96LG6BjeVjy4NKmy65ZdrhjPeN2GtD3kge5UJPbDbrqspYetT8btMByLi6eNwqt1c6aMV9tgD",
  "key13": "XsKNibcP74FTGQoefu1mfPJRiP5YuGyqxb4e1MaTAHdZ8HPwfjYEd8RW6w4Zqdqcevu79JM1gU7eZtM3LEHrhks",
  "key14": "53ofZnLtGAaiQHdiPJxkX5HDeh2FjVPDQGeBjxmHfycyuheR6oRmzvDUAUJYFLyXzSPYEsMrTxttLquwcdQWHDHA",
  "key15": "xr1NQcGDskNkaoqXWTMvqcduXkhYzcCPmesKpzrMY1KxurhaUDAqLyCAnttGsWsgp48L7Wf5zNJcYVmgQSnJy9K",
  "key16": "4sQPxAmkoR2VKjtXZxiDZnse5rKC8MCBnbJ2Jo3H4tUbSV8x3zwrVH33LQCBZF3rwzddGQfj169n2pJra4cLQ2ch",
  "key17": "XCpi1qNdWCGrDXUMxyGSndrBHPAqweqZP1YaRDYB8jaP9jqxywxxNpCHfRQNW53RTjovD3sSX7dzuVzc1Vbsr6B",
  "key18": "4fjWta91jP2rX8VSvBpJCFCJ4MkQSe3jUwxTMTcxSz4j7o5yrLZDgkoRFyg1La5kXLHWqRN8CW9TUgkSaQBvZDps",
  "key19": "5v76yKLd5JMPeidW4etpPCDdmCm6TPgYwQYYKpCTFjfMydck84DSKFj1xjHUGSA8rerwsGEhFCYjtH3R3sgBQQih",
  "key20": "3oN6YMhYa5GYX37dyspRqqrGKsVAq3muegKuMhAXVA5y4hHLLZu9GS6Y2W6W4mvLCLa8LTgHDjDtF8tku8VyConD",
  "key21": "2M5xQrSAKjhfyKBjwaez6Poh3BYVTVLeXsQLWpYtKmPMmxS5pENdULL7ZSg33n2Xsns692nEbw36iGeTdAeNQ7Fc",
  "key22": "4k1WoJc8xnCi6E83SXovAct9xRu2eyBPfCXYThtuHz6YSJ18sLAVwQRpLYZBomb754mriAAKUYFTDuWnUeVf62g5",
  "key23": "34tkjUjeoykH97y4s7zi5YvTYtPM1Nr87QARGGpJwnJ4sgRPp3XyQTVMR2qBv273MuSKVyJk8TTmjJgizGc6QDPc",
  "key24": "2qCGs78qokASoTvqpAWzAWL4Qpq37cXaQStndxDpma4Ev53nXRvqpo34iHb7YDnAuX52sCnKReHcgsMxfPjZPyz5",
  "key25": "5hTsneYTE49VDYXUot4MJ1ip7HyZpaJ8BrkjsS6fZPnrAXXsohgK7fYCtfmPDG5ebpYy8aP7UAX1ccf89zYjnHrQ",
  "key26": "4ZmJQ34RyvYsewXkF1rJgyW17Y1KCX6h3R7sDNrWuW8zn42EgA9fsyvN1wp7xSnRP69FNna1Z8fvAcCBXq2udUEM",
  "key27": "5jJxfiG9b99YUn4hn3L2dwPoseikUHAWzAFrw8eiaC6fqidaV2wm4SDPPvhbKgoZWAdhucka8oFX23ihoB8kF8fR",
  "key28": "APJVwQsPCBNJuxWSasKrUaQj87fzV4Aw6ximGhe9TubngdnSgb3Art3dMszXbumBmqiXhdd35SyzEUBtDhE33mL",
  "key29": "NKdJnRqS6YhCfkmktpf32Q3eAhYusREcgXSpm3Es2cmjwC7GBk13tj1tAdHLyFVXL72JMiJspfu5UzoqQNX4YKY",
  "key30": "4Lt4R558dYqoAyZRzHVej1jm13KcCHjmMRueFjR1Xz8F2zHMGrZbzXPHq952s1gtqnqF9GTdiqNojphT3gz9F9ZH",
  "key31": "64eHDcPJKFd2w8SSMdq7ojEQ8HeGdWNMCS7vCHMz81v4fwYDag2j8WMtTJkX1hwoKEaJX7R4W1DqSYxNrDG6H2u5",
  "key32": "4hBTP8KRHjXzSe2y3VjxSfsYb3UdwQSyWDvyAd2Go5KThVKtk3zoHD3frKzBF7ZHb51Lw1k6viixa3bm1zg4j7ae",
  "key33": "62ZgxkhvuTYH8AagPSR6d3TngwvgbVto5RjFf5UtkQyQkwhLM5Cp2eNtyuAnQcjZZma5FxjWGDFgEFgAcJFR6BVG",
  "key34": "4tFqQTwSjVkzu9PfBoVBdsfANuewXWdgUmFm3CXQ9uK7rLMnWHdEmUfQyUxpEd5uDC1yKZJCD8i5c1KphmeeYfY2",
  "key35": "638wvUrx2J3ccUQazsqtKJ9YThzfXnMx9Xv6LZeKEum5AxTYHoHWa6YTwD5PQwtTcrv9qPJmEVB8sx5iSNXQZNui",
  "key36": "5FsYbCBzUHjGQzMmtiDgyJo1fpWW9T58gTDcvxBFyUz5RBp6qp4DPh9gY2cNgGsHNzN7buNjDzj49ejdYkiNVHKi",
  "key37": "3Lqej3WLevim7SscSH9uhYyZaQVNE76J1jtkBBvCsokYKEWLPgSKK18V4bmCymHvGTqrBECCZvABb9ePpR5pYtmd",
  "key38": "3KWSPXaZS7WBHgTWk9sQRzBoe8o1a3j9bUkHNhNuDw2jVyvfk1yDhQQUaR5F7Pn7kUDS4wdxds6ikyKkYG6vZvtg",
  "key39": "4WWi1u1Bkh4Xus8Fo8CueUCY4o1xWKT3wAnGZqpKJWN3YpprKHBV1dg16BcPQxHxRXQyhzexA2duVVZ4ZbXXXwsd",
  "key40": "mSVd9mjEBpc6Yu4FoPfhdav2fLEDTwvn8L1LanJaB2aMxtaLNU9cXgSx66ZLxxtwY8uJp1hreDCHjhSGutkEiuV",
  "key41": "37BwYUBDcxx5A256rMGspWm3RsZpXGfmWSMRbhRR9H46YPNUhZnhb4nCK2kLgZvV7PrV8MWuAFxZjk3MuCC5oZd",
  "key42": "1MtvWwLw2mgwEmvvsJebqErZwo8U8aFmiea9VEobNFTSmNkkrR7yB8TyNe6hH2myw1AQqTgCJnSed7vcuDzBdfW",
  "key43": "B8TxEuDAxJwvSVshWStV4dQvPzNGhUyh282SKvNYfsy4N5aJeVyzuQWFbSVpg5njQyzAoLYQeS5iLrq7u31thq5",
  "key44": "4iMkZxki5KVfrYyYtiEX31x6cLpxcGKa79gsUdt2sJH6JZdBW7inehEXoujGw4CPF9TR9r5vfUvKeyZUgR6LDgnG",
  "key45": "4rXy4Mz89rFnh91TuBDcZA8Pi2ZLtK7Gk9J9BZFUzZ4TxxjdRrP4HVX5umTuyLaeUpg1JeSYx6cBxJPhpbuiKPLF",
  "key46": "wvBQdE5bzjtdMgxBYMpgaiT9NmpnJfNF1PGVot89Z1pJs7xyUVbXPcMdZ5rB97GQFzCLXagwn81L4QZm2ZTGWKR",
  "key47": "3dWkyqkqYsRJfEBYyLiBQeWGeamQEyFWNgyVXtip9DLkiWkdUjbrkP7VM1sU72ojScs9qnVonfMUMc21ZwtQMAuS",
  "key48": "2zHr9RY8qsT8H5bRpLbgeu2gxMMSAGdEbMpUh4WVMmft9BaP5HYMXVEVzApYD17RrNaNiq4oTkWkSwhH4eQM8i89"
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
