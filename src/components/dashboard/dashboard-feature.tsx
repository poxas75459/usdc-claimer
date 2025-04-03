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
    "2rpxwjxWAsyo6UAF8GCgLhejBL9eSEJdc8kG5Cic8poDrnyhxY9Y5h7W3qPsGsvNKYGhLFttzr7s6wVb4F1VLDW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uwjuai7aemnhd2dAgYxwCKV5RUaW91R5nk2LH1yDdWE9h2sTTjvkE6xZmF54pxMFnBdG2rHnkyaUkhjvSbdVaQG",
  "key1": "3ofPSt4x1DyZFTd3eNdcrpNxcKHVJaqnHK9dSSPnjZuv1bF4Y38SGVmotkrsodMvUo2ZQRoPbv4yC4bQErmdWEuC",
  "key2": "36EPt8Wt5AyRrE3xJwAuSQK9wva6Bcpr9VTyPGpmKmV1Apq4X2wyoUsLwMYDfvrYw8t2p6eFXH2XrBPtNaawCBQ",
  "key3": "fz8LDX9AxNh6rjfqP6PVcZpndAAp685NipD6nonSud3rFqB8m2rgUEe9uXqVr14ifusCuhjLxEqiroVSLmhxyxm",
  "key4": "5sDdKhF8G2mPFRZSc12K37f36GEBCYwiJqpHa3oF9EqzXkjM8GpaqQgnmPQUqG7D4Sjz3sAA6EvjB8D5defG5pGP",
  "key5": "2xBadvhVYBCyftwYQuqAR8jcjUF35zns6zoXFESHChTFCAzm4ceQvvRKsLuc1xeoQpLsiaX4Wktwyhwx5sPLT7xY",
  "key6": "3Pdc9381fBAuyKdrJXLgQm3fRHvxeXo1SmkeR2irnNnrcgBCm9rttVN9b2Cq24uWVj1F41ixf3Cbi921zLbaCNDj",
  "key7": "36btvSp1YEwPrcicnjaXh6Zo5azpBsxQFCn61hVq6sWmM1sPgkixZnyZeh9oGdKzbVvESAMrG1Mn4V8YsxCAL2dM",
  "key8": "H1wMeEmNNVamH3zV9gt5t39uwxtadvYcb8VaTk8CjTwVXqSVnb375esrpc6WuFXJMg3yyXCFZsCW8jQhExpVmRK",
  "key9": "uwPqa6Xb8pKQpTuoe6jp9w8vZxPVrzkTFGoipvGJLtFrYTKxJmb5VnyzfZcTetv2kQbVNYJP1Gmx8dwgqhEwmNJ",
  "key10": "3Mq2pkvXCkAaQtYBwunRYB4FFpY7vamWX6MUqUbSKd4atqUfH2c7xiXNQ3DLavNB4axhzzxkSqKBnCCH5eqLGuPg",
  "key11": "34AZDMQtJ4oWyrqMy6YnkThWS5i25R3BUhijRhM7TtWiyzjuGvwwKVrAiUekAobX1VGcYuB7StRMj9cBWbf5jV9p",
  "key12": "55ojSvcLHY33ZEzzafS8AZPR6rsDgcXisrhzeycjd1V6hrcTQ3vS7xnfNHbNhyAefewmai15huZGGMciQ4QFUw9W",
  "key13": "3FymeicEZnsyXsQZTydLJaW4ZN9xpT85VSREvjeL3UPKyYbiA6YDfivLwkoBL6QPeJT3EoWRL6tBeHpJT4JS14Bm",
  "key14": "KiwbiXzMkAPZZVDC2xub4818qkVrfY24FHjb3Ss8RGux9PB8GmT5FYjY6VkkY2eAGmsqsoTTD8fjV7WG6mwHHh9",
  "key15": "RAXvXKJ2JuT1tikyQni6SNxnzYKPy6qm7pgfd89vwmxQ5Gju9mdZjPvDwYDcMdgQHB1FqzCY9neKQ4FKAGGrsv2",
  "key16": "2Rd2YiixtAzQo5tHPZiwtgYuco9ztR5ZjJvmYTMQAQUMxbbrU7WiFwBCy9g6DbRanzCqq5jLgXoHANupnpFp8RNg",
  "key17": "22pgSYgdjURNvfws79sMLMQ1tocxw2RSm4u2ab5w8BM5tqiRaHrWC1sWZWwgHe8k3tWzaKqPwqYE6r6uQRSmGr7K",
  "key18": "37mW46Vn3VvRJ4NWB4ecPYKcRbJywN7QNMmCpBGQ82B5HEg9JFV527s72WBdNR4wiPkjRRw41JvxJGZ9ARruGjSp",
  "key19": "4jDcZfBKaX9f94ogB6YHshJZiBwN218XdfnrQVRUzQkjN8UwcoK94ce13PJKxdpZ8P3FQ98x5JJajemcF5JhiV6f",
  "key20": "2hPeXbVT7EeyEtDg2Xrs6itFxDwDsXUL8v5nN8NK7mCf222UFKEoTftKLdRzZwwynD2gvriMQofzB9GMQFmtcoE9",
  "key21": "57PJX89jDTXxRKPdd8nFx45sPC7NNQB7M4CeYs2M3grEYqeHtJVZTGgVfMLx94RCFeh3ArEJWKGYxj85dVvBvrF3",
  "key22": "5mno255WDeUmN2kzFL2CGBYEj1yt85ySm6mtX6PGbknfnSstpW3NBnHRT9Hxj7FGsQCHgSrgiCRPAgJpqyXaCoZa",
  "key23": "2oCrcTctzETcDQJs3vsr25YPycBsKzQdnsVcB4vjPkYXAPAjZNK6RKCj9HhFrTG6YtGoqMVueEqE7vmqvotwagtW",
  "key24": "83Pu9gaFhygrHkWcARtYCbuhRPqab3keUP1JACw7c77ZVZKtgkTTRWXasbh6Zu6aQnAWmwqbRRzKMWbnGu5hhtQ",
  "key25": "4mavBihX3BBoMraWjuMDoUTtc71qSGWH2QZLHk13hfiA6mnn1YabVh8Wuw9xYC3zmmhWigkQ8srNGoQVuaDWfALg",
  "key26": "WWtCPgf5xLe242SZArpcP334PiDLwh8SkaYjXFo99bZw3kFqxQ3j8s6gjakfGhbkZct8YfJTmso19veGpEhA8xT",
  "key27": "4TgrSJG4GcGJjBdtYYYSRix1KhLS9yYDsS1ezywQ7QqMKmBQ9JdLW19y4ZKYsJ24A2fnR92GGeRm8jxoLbYfQs9z",
  "key28": "ekKNSjAirYyS2xbd3ttmZSkyh7wrKnrdfutAaQxtX7VszNxXCwgHLog9gTitZqVCptQJ2LJ1PbAzMY49vgRJyUZ",
  "key29": "3qbcr6qoGC49PEwgEomqx6UzvbGHhZp6Tk9LqEYXuWsbhLFEuvXCTaW5XMbbLH5JfvxfVsokHSsW8nD4RAjmskEp",
  "key30": "4H82ytSDpAFbq1RrFKRCDmwQbg6HS4xEWrJwrcLu4Cr4gm5wzjLEiuzVtRbN4XiX1uEKhPHS6NdcHPLVCKmhzgVA",
  "key31": "4biGwiPYqwtKc4nfoqUzzUSzEmyLoXLHwaXTUJAxEgSXgmR4HA3pa8H7Zp1gDkkkzHabdNpsUQsSqWSi7LD8wKob",
  "key32": "3rCKjjqUg4LBA6CC6KcsbydLaFRvKNZ551ud2hAX8t5KpCfH4ivfJDMUmX7QK2VnXRGLB5byS1Du9KaXSeKVbMWy",
  "key33": "32Pb6XW3AuZLPogTYBxnPB1zqQtsEWWbdx6B8UkijdAazLK263v98FFthbJhzEJRBtXenSxsv9rrGpZtqKFxHg3f",
  "key34": "5kzTpAKNcNYNYvjQBLiXKS6H7EdRomUuBBg5BM64VdC5iJxhfbuqzsG5Lf9CqA9ECMyE5f3mSTedra3EwpCCQxf4",
  "key35": "51kZMhVxv8h5BEcthrxUPqDyvNyxeNas2uQe1tySMsaTD3afsSCUnuCupCssXpXgScTG7YKHwZv9eRXqnXTHNtzx",
  "key36": "4cBsApw2QE2HMyozV3KKYyaXd78z2mearKiDcmBiWVNsEoZ9cMmi8VGHK4bJaa6DqZ1T8q4bRNKGkU88fEJxWvc9"
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
