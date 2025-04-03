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
    "3xUuCfi8xVNUY3yr64pqp5xtLyS92DDY9KDLEQkusgWcDKgXnMevk31F5CYwXi2rLSKQsyoLZbaALuehbocFpdyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o5Hc3XobgcGUpme1cA9oBhaoEuhHhpWFUUBkJJFwL9S6q5fGz1rkydgofY4bhwWnbV7yykmfTBrf2tDS9dkqSRP",
  "key1": "pBDSRLMK5Gz3vwbWCdDcHLcQBBGgzXYjtH9apYQjTgGH9pBPkDd9BQDEzVWMoY7wKShKTxN6KCs5P3RT3mbxm8U",
  "key2": "aukwhaGrpiVh9XTUAdZCdBjea8fjQJ9Dpmz4QQUJbwZr9yJjr6pLFtdeKJKgQjsHjQwNQawNT3BsAFEoZzZzYZL",
  "key3": "63tTL9jdrkmxQt4BoYvMbdS7Pft6G6B1ezKSHQZaJLGEYkXvd1sgSGEBuX5tqopNmffynVxBMijy4KZydxMhbQrj",
  "key4": "bpKJ6z3ySZtSFNij2jSsdHmJ2QtWKZQPmNJXMgdZk5Y7LkkJGqQbTfUnBBE22daEGbiJMHtSVYFxDjKtiyE1rHh",
  "key5": "FNVX5fbGdXdwxEEsa9CKPGd893tpuAvfeZtRw3TAFWuCRCoKRHpEft8xGW2x2uZWwPqdUMd5xRvJGrYMN7Tfrkh",
  "key6": "5rXmkwTcPEDj64bGdGvP8kF9S9vpepRpYzURASKYXLR11LgcJ7ztH61TMVKpSeuQbV7Zs4RUXy9XVb6P47P57CvF",
  "key7": "2PtuBAd6jaDRKYeMTRbF7EdnHrXxPsk5kPJdQvZUJmYhCn1dirjb7YmTJTk7qUVvBTYE4fezK6sep1dKG4ScqgUL",
  "key8": "3Ytdnj9GUtD2sYcGYB5Fs2huYsv3V9VsUSQnKjtZNZVVmn1vxWoy4Hxtx7VNwkMmys4ypP4sVCv3uyzjP8KAJV5r",
  "key9": "4pBu3W9qwi7JupkYcNpgXMtCcpcqdEbCo1f74Pc3Je6PHBUGwAf5PrGiqJX2k5E4RLxjQJBYqruJKeJUSjMoipN8",
  "key10": "3GTCmPHNjgCoDfJdfJnJW2m9VNHt5mrMm15GH4EXvR53Y7G65w6g3R82895hm3PP3oLwsyT1L2GyPUDYUSvwyiJg",
  "key11": "36NB4iG3Pd9WWXw8G2M5F47gnv37WFsmYw2yv1Ru7cd6ekcQAZ46NFWW6mPYceRcP9FoKcR1iQnd5KdADuGb5mrA",
  "key12": "22vQXq1HxwYa8NjY6zvkfYEhrpBRVETvWeduRaETsnT8jwqpiiLruBCjeQz4dSwUEJ93bYf4FfKyyMxd3DFHuHau",
  "key13": "uAeRq1teRNZJwWixQ1YGg8adGmbKg3JqVkb7Bywuj2vpaELxrPnzWczerp1pCX2H4Fjsf2JKjtJzd4ZPFPF5TrR",
  "key14": "2Q9d65by9i266tZXasUrD2tPkyxYVLes8f3cdkHbfm6vVUjQKmCjLyDH2xEs67Zq2cpdjW6EkD3XFiqVPLhETN9Q",
  "key15": "2CpdSzmf3C6eWFheFXrJP2FftTAuYFNvJA1oYMEXa7Mw1dBnsFyk5xcgqKdexSAq8e3nACvzHxp94Jwoct18MuG5",
  "key16": "24JZVRVmHXXqiQuXao4nFuBN2EX2x1zfD4tM3casJF96KRZeXWKu93nNaN34kFxDsWEVPnRjWai17uPDp7Hs7oAp",
  "key17": "3eombsBio4pd78JSTeZSRMJXbuJ4dF5JS1rXf1ViBQGzJpX9h7eUdo7afBu46zT1zcnTjAYpayRQ3pNQVgdXG8CK",
  "key18": "3ttTruBibLhqH1ADg89oQS6PvqVAU2q9tgoZLD2YTnG4YcikDWP9VitVSkGnKMC8g52k1AH1eWRZhiPRcR2GrNh4",
  "key19": "44T8XXFfU7nXhz9VFvyJMFNvMtiZ3w895wsoTsSJy8m9znqzxcCbZXP8sjA7SSMkLkLEr2LruuxV9Lt1j4giwJ6b",
  "key20": "21DjqXEnT2DZvxQHtA1dYnXvggZ51qG9Db9oH9exaUvsfatF18R75YLMRNCGMDRF9w1Pv3EcDDSxTeKbUsnoB2cX",
  "key21": "39FBHccg2k4E6svQ16ScRrP734xi6YvEd5HnQcKzTNicStmo3Ud8c3WozVTvD1qHMMJ3KBW1B6JQX899ibQbMYTR",
  "key22": "3n1ed5TaaoCkuLX6SmCewDGQemPVpgbY3peyTUdsDNqHqwJYifipxFL6vAshdrgjoCi7SuH8JE4SttRErgH6muVv",
  "key23": "5p5YASvFe2dTt3JBuAwmmtfsK5usp8yKPaDBNCKZB6iferUqChMwFvYpTdcQnxdsrHq9PcER5twVjtTvRwazAkg7",
  "key24": "42nEYwCNk1JsA9zJRnLhLr4NZzTZBfAGFiCt8jfHqCaSCvVDpMRsyWkhvL3h2a23Zdp3UgNJVU2WhThpm3bGM6mc",
  "key25": "UFTPbVV7KdQzj4uKBqNMvvoDvR29HnLoSL6ou36moZjH5z7zo2kbH6h6FdNKa8FmHoqKVvNDzfHm3fvGVWfA9sY",
  "key26": "DQ524cKkdhBAES9xxK6PspqGRP9eL2tZMbhk3pDCwJKtyscNpzwfsycX4DT7UmzUaFrpx6ynyjBR27ZAfE7CDvE",
  "key27": "4gwfjy4Yg29HKigGe7oxD4N5nZRFXQrfHFN6Z4c8G3jRNm2sQTdr7Nc8WC7RAo788xHNqRmVQH1e7gQsfRmAtBkp",
  "key28": "3HGUF9Hw3Ty9xj9ernjpLfMz1CU4zZhLvDeEASB7B6pZP9DiQX9ZQU7QUfUqAongnCaCBgdLcR5kLKzfY16879xL",
  "key29": "4CvAmCr3WNkKyJMg3mEBv3JooWWqAtu4xjTq3HUanYz4B52cqugp174vgS1mFbMuRswzZmfMFkyni1pY6Fnzh2Yo",
  "key30": "4tAbKcZVDqyKQ8pjdWG5aXTiniS1bwk6yerjzVLHh8BaPT2GfYKnW4AR4UuZd146JF2jujnGirMgzvFt2Mah98ge",
  "key31": "nktF5gYjNzD6i8fRFDnbf6p6WBQsF6NuryD5bMAA7BsahAk6T1EbAFQ34L6K1fiC2rCdRKkUTGW8BP5cBcC9gXV",
  "key32": "2oTXRWCLyCxweWTFTkoJhqDW5ZsmrX8gMWSu5sRPiXXC127LDd23zK3kyb6wUKHk2hxDnvEgnPmPYa959RyWnvAy",
  "key33": "9pBgJPbbMPxjiuDuY4DG4PQQpqULm4KgaPrHMbg86M75XJzviUQWUW7gj9bbogdfmudt44YHbwu1Kr7XxQggXQT",
  "key34": "2eNydF9cTEha1Fi1BucW6sfjTvuK2CZqqRyxHW1B3rFz1M8HKD9mCc6yFzu2cLZAYWbxpKZuRnTmVzetJQsgwHZn",
  "key35": "61w9MD3uYeUKzAAx79kLt6DDUWapSm8bWY4iSe1RribE5oWJx2zGektEYfDAefSkE9ThekexJY4ENvekZgyzS9tx",
  "key36": "4x4LLetS5AAPXuKSk6fWwM41FeKp1cdJd6jQbf4Xsy3tBzNW9VtjCdwP1VpSu3GKHh8rnWytEjdyjuhuZNxtNhYh"
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
