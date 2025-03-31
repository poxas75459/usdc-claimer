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
    "3aPPmr4Y5uBJJRQDKE2yAeWA1yMofF2y9BshPnXSv3Fa2nZ2PzN5kQWQA5JeyRiHnYPGB44WmCFSBWih7vQjvcgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aXJZdvknMsnAXMzhYpfjmR8XxrJjSxYxeng7YyA59Gq9Zunkp6h9Fv8ibKm3S6c1Vs2eRtDCHvRK4RHKo4GK81C",
  "key1": "4p9BM47tnsNnzLdwALak9uXRSsvrJQBPYnjj6ogd2TUWifepMoLAbKh75u74KthHt3YhyG4a5FsBfbdWHHbvXJ2U",
  "key2": "4DpAAvjVi2sgP7NX1YDBTYeHJH87G2vHXaqu9CJHPGVJDXsjp2BJyYCA6rRSe3TLKAjkxVfwvhpQ5AUSZ12YtsJm",
  "key3": "217c2PBELTNLZqtT6DtWrp9tuNtoMpYMLnoA1qXPd8LEKDq6msxyuLf98tpropMgqi6fcz6NGRnYjrYWt8GrTv3u",
  "key4": "2PgvQouezUwnpwK7ArPX2AAWFzNTRyr23Q3jJ2F85dxqJhuNubrhWZ9M2P8XPmWGWdU1zuyKsGm84JJEz7sugJ5d",
  "key5": "3ddgLtHq9Lqg5n4WrQACoPRtEoMQJysVLASNVuYqJegpjzW2kBgEoZJw5aRXmhn57eKqrpoxNJjDySpbUa7wrYWb",
  "key6": "xvZB21vF8Kg7vhFEPLvDGqZuQ7v8rA9s2upVPdum6csiaZ7rv98GaBfr1rJXgR1Rr44n6244KoqEBoPkNcAEa1c",
  "key7": "uEDiGSWBxm5YKfkKmNZYWJ1fFruYLpsb2sB8jJYTDY9ynx4DLQqGowr3o5EcwuMJgsoDxGfbcTLgas9AFpiAEU2",
  "key8": "4kQE4wXUTpmbrovcj5dexJsN2y4MQwRd8UpWU6iGMiWDFXLVGTDhmgvGtD8xQwT7nHXkDYRZapLmbiiC8RLWXHWt",
  "key9": "5pSN2LAafAcXDw6nSiMqqi2433iaXSQwEWa6Bd7xd5xCGSgF3nGX5uGdRjJDMXsVWLsHYXwFVjcf9JhPxXsZQB3T",
  "key10": "3oK8h3t5Jhmqzu5KA4rYqcEa6oHdYGznofjLABKMDvCHid4wRJP26j6t6CF3geMbMZWd8LqPVdg4uR1fn5vxYXrW",
  "key11": "3fcSGN3ovMc5PkgZh8uBxKYxVJ7xWCUosQk3GdkxxpFjmmWhaNQ3iq62wAySqsY4vGu5E5F5s2h9xdTMwBeg3yzu",
  "key12": "E2MaGZU7LHeDkeUg14g8f5hbh9FWRy47zpvX91jJzhzMaHNQFRgreShxHvDXj8969pdLUB8DkqbNvGQBpXU18Bm",
  "key13": "5ocHeuotRjj2qHitv3PihL4Yv9d1nksD3RrsYLfgG9rk2wK1D3tqTdBGsHqp6Dxq5C8ndTRrTEHsYnyqDQzz18Cc",
  "key14": "3DNHaYJ9TcHqcebLH3S9XHLgvCT5hVnxadrfYG6DvLBmoBZMs9i8PGh2rGxJpWLR1b5HzPCx411ExWeyi9RsMwTZ",
  "key15": "57XVt6VwUG3Vei18PYFyEBnaPH2A2KWGUfVLvA7BvGfqNic12JHeox9ycdXivMjt1KB1BCWHrHRAzVEYQaHWowiy",
  "key16": "671BCrxHAcbVe3AuyX14khjCAJ1L8bdcR4MHpBFXD7boUmEA7qG9NJ4aazttWTfizbpDbd4WBxnrZHckHNC6xTkc",
  "key17": "5HW8vkxu5X5kNKER3Nv6RCjK9FYU5tgUfbSB6Ayhmp5U8TkLkYYWYn3ADgip2Lrih5katEWjeYTh3CM8LGu3CL7p",
  "key18": "3wa6MQxryPVEbXUzcBhrcHU5dvVriYT2G2z1c6MjGtweU882LXm88fwQkTHaThTPUcTH2Xz26Vjj4SxoSPQqfjxP",
  "key19": "2vrXpG8YCrtFDqEp6RzaLoWz3JL4UH8cHidJXRSoxrkMYdVbcSzzApGdMe2CBw7EY6KT5A87zsu5Prs2u2j4GKvP",
  "key20": "5tYkP5utcqURRhEpRnxEz7UNuQgMmwHGkPvPY1xu1A34zdGTjuvSew7uJTmPNWJiU2m8Q9xCp8DLJxgFXWK3ZcPm",
  "key21": "663M77cRiGXFW1fXo6B5NMMCHs8Qv7w1Nh3n2nAm8eqdA3kEBZRxqgEuTdXLTEMFsAsWWpMyjJBz9SCFZEurkd8V",
  "key22": "2btWe4fyKzwKvnumHLBAcWJrGtuoaAQc95zJBt2C3frH9UcD3mB6qLMxNsH2JQGW2EbY5ejmgWCKZVp44K9SbYm9",
  "key23": "4JWykXdNiJaNU6AJ14mr5riSu1QFikwG9fuur8CCrrDFTyfcnh1gYqkM8j8z9CaPXJAX4rjUryxSuqrT8TvTKUMn",
  "key24": "4PeNwNQsY2WQhJPU9cXdVBUqUR2YQkPe9N2y9zAoeXHxkF2x5zku54QoKf5Tq15m8z3PQcHYtVGpKMsYEBPJSHg2",
  "key25": "2UmCsv5vL4zgbNc9Fqh1UcxweyiLPiEp8GFQ9mYvudipHnQtzC3srRWBXrEC4MANvHAzE6H3ZMrAiqQr3yCZq18a",
  "key26": "2wCkUKCkxEyyGumfBLaWm2hcqxGCi1ptzH7E357ehg2c6khiaFFNyu1EANcbSzgoGqK3V9qyNs4KTB1aSV4AVKDP",
  "key27": "xUgXpF6hmgDWmBAy2BszoNRinseToHDrAXrQioywM1rvqwQt2UTYcoaADLVAjf7RguyLmqT6YXcfwnMr1uzGz4d",
  "key28": "5DoGw1woXdMkzkoLTTCAGF6mSZ52tifvssKtKURCM9T1F7keVWfNrAt6n5ApMMtk3qD3TnuE3mJnX1jyNKAC9zwq",
  "key29": "5wCn7ikFR1rUJgBRkG2Th35rWXUoUFVCkVS6SakBkMFXoQ9nJCk2ZPzCRjCyx4JBM92twcVBmhGbP2MJjP3rUpUK",
  "key30": "3rvReyrY3EX8UdEmzCmYpRZZ6Tgp19bzjdcwKpu7ephHzQEjYHJAFJyK8fjLjwzHHoavqLhjGMpQtUNtcNV6MfWX",
  "key31": "xnB8GXmrHgxub9Tr85XYgoCCuWxWf3fms79GSfzEKCNckRuvWBNtR2eRaK4u9CyYXv3Aj59sRc5oQwTvp7xj9T8",
  "key32": "t1geMC18wBcqf1njdCx6tVDtKN4GbbhG7QR45CakDqLAgmYxHphdnpH58ZPDCMnZ2Sf3NN4tRrNCawsX7Qm3qLr",
  "key33": "aPMbNY5TjoktysRnXakYFsj4N6yBHGYTfNvijwi89RZk68nEpF8wyKMjoxDXbYNcRwnnhvUr5XN6oPTBo8Yk9dz",
  "key34": "4353cNbM1nE5LaiCHCJS3GA7M3iAWHVr2Euhjn7Cu3xwRrMENQmzpDhRFLab4MfUW4ojP5WD6ZxireFtLaX2Srg9",
  "key35": "4Dvj8oqeNfZ3Fc1MvndcbwykqV5eAHJ66EkjUotQHJMoVQQLVswJpAQLaWie3EdYBY1JGPQG2m63DhPhTKVXXqWo",
  "key36": "3mCdzz4zkHeQbSH5DEJ4AgbshktC3hoGDhDSbpay84MuhhKNbDTC8oGJEnLeSWkFDJgZR12AZgb5zNBVmoGGwyzp",
  "key37": "4VMarPRzWgi29yySYnoL8otiJ2CF61gtBsQa4LjhyoyYuHUosDVLGdmSq96MyCgkvmCoxFakZ4ov111nyddj7bTs",
  "key38": "4VK1VB8AbYFtWGCY5dzmg8x8sBpcuS4xDyD4RFbrMERWbZbzjo3eXxogXCm2KNWpGHN4HqQtPcQfehqBnxfVp7Mc",
  "key39": "3RmcGoFsgdCJFjA4YpyNN3xrqEuqbJR7No7FiL9RKqWZ447LtMXM92tWEiaBodyMMD3VXWhofJEUyG8Y2emEQHaE",
  "key40": "466PTg75XPURQ3uqn9cjRpBVCrfZYZmk2mX2HtjWdEmpR5KS6xHJLG5t5aimWD1DxQstMtSzc2yTzHp3yc1zffNg",
  "key41": "uvHP91Tk3Ea6ZBdPvemPCgdDTyQRyuDrzHE2mpUdiMTszkVodQN6qwiQQNWgatdBkmSyP4ZUkescnsLCH5Hx4Qw",
  "key42": "47jrE3ZTSEX2UM5yZ6Rkmj5nwA8AeZKEU3WXiDnL6gg9hpE2yxYUUP2k9FqqK6JwSds7qs11dpNb3N8zsp6X1qva",
  "key43": "2HSGGKL4rCVz6qd4xyfuLbHdiTiS5iNJyfct4nDmfCRJuJLPXrqH4z77qgPiNDjQZkJYb647s46sZ5EF7bmthhp",
  "key44": "665wqtdXtrdoGam6TBvBSiECKh6Mx4D8wPFDFEpnJPNcEsGSTSCpDpDhVqEEqmAJbG517xA4wdDofySgEuw9pxvy"
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
