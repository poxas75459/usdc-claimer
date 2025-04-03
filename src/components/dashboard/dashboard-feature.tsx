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
    "4wbrWzz9mhuCweHHqWz1cBtPTQkmcoV5xgxaY6FsYeYiHM4ZEqwFZWRHaWgNaXS5pZusTS6gahMrJnWJ6M1vcvTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48aLZpvWtHW84mgXe5FoMk4LveN9vEB84ZSr6YGFGjLiKnVAxuNnTJgRXMfJawPZsB5T4y1dMymv6fiVoybBkzoz",
  "key1": "62Un8c3BFA5b3Xn3J8bcZE2rJEQkzL41LUcqbYa7a3XLnhEAnuRBX3c6oj5GXjX6BdFEodv81Kjwpq2a73mpXG6e",
  "key2": "35Q2RBtGB1iP85hJrmMkq2UJYGZhg7p2rr3BFiawWw8rhoAyhEFmnAEcuQXwBWbMLWDKvndjRxSuEmBcpPMhqZp9",
  "key3": "4Ve2hsYHZN3YkJKoTDFVDkCP7b3A64db1s8VcotYwBrNdRUL642fP7szAc9SPF7rPX4TRrQxWA53HHeKpbcDzfym",
  "key4": "4UuNqy8nPXqg9jNi6hnCf1oLYSqkX4S7zAYjn3Jv4ix3DUuFvFBB6QbYxkFLVFow6kJ4gKYuDAKiWjdMjuYWYatt",
  "key5": "vp6gTZ2uSDXgfnhJ5coka2meym6FcqkCAtJ6PvdbK3B2m2FJYyk7qBhMRv36t5fAaio1HocK7q5KJan2fTA4a9c",
  "key6": "27H6YDxDtddm4qWvWKxcz5Pe9DgByreUWKAymU2ahKz2b9diGxaBV7xTGTVbpoL6nAryimgypED6TvbDcjv1Hqxt",
  "key7": "3LjkuLAPmotp7FtLBwbr5EQ7KLfJN9W1f9aTVXvC3ojNagTHLZmbxwfBQxs6WkzbGtK74E14UThyhQB5FQnD5fEE",
  "key8": "2MBkbQ62ckU2uzf8WF8zjMpSLAWm2C221ePgWbYLaPzRkFxJMYMULoygq3cHu2LyYCWbds428YDmndmVrrwXJQ7M",
  "key9": "4qrY1AHnqLzTbbUpSBqjZiwQSGbGiEwEVo8rQonmPVvbMFDYhjgvJx7ZVM7a2mWr8Q1H7QoCwE9nqrKY9U98P4Gt",
  "key10": "3WkzMyHtC491yLXfyCnaz13Y3EqkiZqtgcXKnbPvogpPZjawXmewy8t77o8YjvStpb9JZqVgwYLYrxLHyFzinBXN",
  "key11": "523Tcw4bQYCtaGAQ6hCUYFrkK98Ewkk1uL9z45EHyFNhdtD3u2qkbMpyobpnDXaF4332gM5K8KZRqcijSx7Hepuk",
  "key12": "36edTLLNvzVNGbBYTc3sxg9Pd17CrfwDDYKXB9jNiCWt6Gd92xcNJBiAeDnBRFFQ8XPrj7bsmskyzgBUHpbucH7r",
  "key13": "3mhfzLPfySo48JqFEB8kxqveXvpAq66GKmMVQ54u8MWZdNMpijuA9KT73HBcvZwGtTa3fv7Rgx1aWxBwv81zwEu4",
  "key14": "4jg4XCjaFWx447guAPGZe4PGUqAG7QrDoy5mUkSGwkkubTz4H93KEXCDwM2NmDq8qsESkU9S7eKsfqdoJJGc8UtW",
  "key15": "taZ6b2y7kLqAWHTtSZG6hWdB9awjjc3XJmcgUozJjJ1zpfbxj1RURewsSUnxyK6s5ktBYVDiYV5qetJnuMjD7TV",
  "key16": "5VERZEjYFd5bnm8AUHZe2fKf9WYvaBSZfmNnUK8AjG34cS24YhZ4xkNcPRfy81ztnpdG5cV1RrTioTvfv4AFpRmg",
  "key17": "52HcA6zChvHhnzngMUiExseUZHivpoEMfjNV4S32pnnu9k5w91apizr5SrUyisfhb8CJznqDYAbB7ZEbyCvP4ata",
  "key18": "NLVwc9wgVMxnDTkDXEyT5V8LFJExsj3EAFQckR3WFfvRTG92HwzeEFSWtyTm6zoPWCeWZftbWa7gLETPECHgUu7",
  "key19": "4LjcTr6vuTXE7kZqtBLF7MVA1rJfPDy7yVKdRRYKTrmbPgFE84UZCEiGDqJKhGmXWHSkM7ieCLPgfvZKN5bCywgZ",
  "key20": "4aoBwup9tT5HmKzRkcjJb1D6jaAG66N8jKNaAWXKGtUkMbDK4yEFM2tTNHUMLkkzremD3yZBS1PQmUFd611k1Arb",
  "key21": "2GzbzGy7e8LsY6FLX4G5LK4bvMLVpE6Xi2LX8At5q8pWk29Lp2wnZSwaCz49G1YeVbY8Q8UQfP1TQFbW6JhMvvDt",
  "key22": "4TbdFDZceDn8W3ezXh7pdDvDFz5t5K9CHzqPhW3y2dX1x8fag38MeTDwBGNk7PAoCjvXyLgLjaVMSUbkW5XmdsLc",
  "key23": "4bWT9629qbTXRh486sbkzah3XLWS9JDSENNe32vnqEk4Hbq7DacaM5ZPU5aiMGWYUNJifzF4chfvp1sLp7M2yYdj",
  "key24": "2yxHEnBnc4Ebbb4ECZbd9a8z1hsS4rmoCsqaXD8XcmyhkZxThNUR2W1YTBjWCRxa4mgEfnGeWxX6gfEsH9ax8HPq",
  "key25": "4CCqgJ2KoaLPtQMKzh24d3wisHqiJXXQwVJufUGiH5BgtzUX5Hrj6o4WzfUM7L7ts4GQdtSo8YNGELwcsPPseB1B",
  "key26": "5iY93qHHB9RRdxeL1XqE41x1hFWDRBzr1PtNVTVzpATMrXRW4DnVmUZc172pxQh5Pn69rQa65FGn6JVthNyDJCP6",
  "key27": "54e5BWs7xKsuemqF4CgKZWMB9xTSwV9JVJpH46t6XaY9xiqYTyqHSTkUskANy1yfzaeQQik3rXxoiLVfB2iGyjeh",
  "key28": "4x9rGJLzJw3F3kXpSW5z18iEAaaZFka9KfMWwWHvAjVfXkALazdJuLNGxB2v4wHUFyke13S2aBrD7DHSjnNUX1Bs",
  "key29": "6m1qam8dX5ZtREE4HeAfcPUGk6HapqjnbwxwxAvP4f5TBNhQSXU4HeefRbJaHRyTihwCZM5rsGUERHsHhf3tMfz",
  "key30": "4RRFiEbYiD5CJQFwjL6J3FktnZMUSn1Ns5qmSTVyBecMCoJ4ty6Aad4xKPe8fG5HfFmqtvP3qECqiYNzHrY1RcGv",
  "key31": "3QrWCZCQmkivLVuejjvpgy5ZZ7ruyhPWxxiBTsG4JWo5BDRLtGqnKhu6VEpeqjzvYRoNq7iJSsFpc6BeKar73Xne",
  "key32": "5xkc16KZcjG9bS4o28JJnR1x3vxWiw4iLzrASkA1dWVdj7GLetjEZMjPwsaGrUewP6pk4yhwCfaQMQkKLn1r4WYJ",
  "key33": "4LHMBXatb2LknLr1wi2YtHucAVdVKGvovgrQxrRQBB6UYWB23vGrKtEJp47jdJkrDM9HiJzcuBW6ZGeev7biXrnJ",
  "key34": "3sRhDKyhgcbTAiZiC8LPU12VFMyqqRaRdjE1hF2gs4rMpX86YHb8EXyTXrqtiiFpeAqFJPkK1aFFpS4z3rnYfnPz",
  "key35": "QNmcpP5GdtXFhDR9tCbBTPjiA9pQ4qkC3PXi6RhdoqVdejY9EWq2aFzvkrkY5RURvg7MvBxVAQnMASyWgKBMov3",
  "key36": "4VND2X2GJELknzKLdwCdi9Bgjjn1c6uu9UoB8ARxLCbGUEj869EoasHmUm7vLopb37f5YicdTy7qeb5UcEENKRqc",
  "key37": "49QekUzfkf5r6ozjpaHsWm4Cso6YdfnHLgEEi493XqA5J9NbmtQP7LscCY4g7TWGGqQaQDasBV1rHaL6Yhd3uVGB",
  "key38": "4Hxage2CmJo7sVvqKHDrhfr6Lj6eRwS6W953GFe3C4Mpib4J6T2AG5Beoi4c9H4ZLsnL1p7pZaqHhP7MbE5iGGtA",
  "key39": "nSAN6qAoRhGC3zbuifEqaSwGDQagbxF4FVSNgNH3kxmErxvJ8fbW8HongKehbhSPui9obzKN8YWDiMSfgqYUkHp",
  "key40": "bkEBVamBh9p8D8HCRrKSQxTihq19pdwfEtb63m77jsbBDSj3xHDct2wWvfc1P84pXRrcySFBGRFS6iaZisyARis",
  "key41": "2kTt62vSa11dJhzCMSZZnD7dcd9FoKcJr8MJ9eHu93mvXaVP5Wmfo9qj41s8Ae1sHJXQNWmaRVaJRHEi9Et4VNYC",
  "key42": "FvMG7z9Qb3rNxT6QHguCzbdoJHBduMQrReR2P9jqn6979uj2KHhZ6GFTAj34n3VcZiQeteQ8dmJxsx4BKqc5hpf",
  "key43": "5xWTJoXKFcfEwsQx4Vm5RiVvBHZ7RbcRcJdxCNZkuGRYk7BnPNEiqBmcmMPMbnhoGMLCMFiZUu7fB7Q5tiHXFRpx",
  "key44": "5dLWaNThwT16bsJtWvnaAzR6WwY3VUsiz3uGyWiZggXF71vxPxLiGLfFpkwR1GhnU5CXXUs7FEWWEVymQF6JwhdG"
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
