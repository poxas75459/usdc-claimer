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
    "2KeKSoiDJ2wecxj3QbbtDsMv4EatpYu3Uu5WJUrNrMNkVFmLRUGaS2Vtx2qtgtqCHLz4EEwmC6dA6tGrmsZh2Vmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vdiBUvtBnHjrHaT9oWe1f6Ez8GdKhzoYLdTNJdNyLiixSUC7rs54rCSkqSjMiQyn8bAcU8RRLh4pESghAESFrdj",
  "key1": "4gBiEWyLtxTzQuzVCBTEua7ji8VDqAEg8FR3n18cpY2fVBxpRCv9H2BKxuDEZiHzarzjuuk9n3FVdQQCL25NYSit",
  "key2": "2ztZvfKshR9SSBqb4z69EftcVmUVoN5BgwJP8zpvVabTtwApnFg9jQNJihAPYjio5miuZvP1qai62GDhVhkD24QX",
  "key3": "3b3W7ZNJaZUaZdZpLuFN5xhXSejp78fzvSnLcSN15uBBnVzihi8vuShfRpmLSvfXgfvmcLJkCS4u7ufJcBz7rwTt",
  "key4": "33Kz8PDj9ypuP6keTkzgN2RbdBfnN5fU4kXAd1ca51DREHSnR78KnZqinb4dJGd6kjQZma4X9C4uLjYBFKiWmBWW",
  "key5": "4KMJktC2L6P43gWUDSg16TFwHtKk9FYSzJHhPjmCptNfsBn5s9i2UGvqxd56p7EQ1mYgzaetronpBf4mfwtKNrRr",
  "key6": "jRmV8zVfa3JW6JnqE1xAPHeHUxnvSYWTXzYhHVFDWqmJf9LpNVXzimXQpGmAESfvRC6DcUi7ziXv12ppZUBx5Xd",
  "key7": "5erk2VkSjDZ3PXs7kMTEzcu1J2wA9PfETd42f9WGRrh4vTEXqYKiXjRyMqkuSGRw11YfbadrWfwZSANKUAfexsFS",
  "key8": "34yFp791C7Nz4r6JaETbbMYgRysp4wUemvbfW6GeHXoFt1Yy7ZqLZJyeDtYVWsyb3auhZH8DBdybrffZ4fh8fznt",
  "key9": "HofFw4jEhPpkLdqsieTnDB6YvYtKM18mSipYXYz7zGVxsYYFqCkMAvsm4NdYkW6M2fLkntewPDZ6Nu48R2TuRMD",
  "key10": "41uXhHnHP31z1udN1WC2Fv9FtVv2ZGqGKZkiYwave6QsMU8wjHU8pc6QPRLFCt4AEuh8y4TeAE7j5suFc5XVeoiJ",
  "key11": "2Uj4MqwHjg5SjCJEvaieTozLXNhgu95GZGbnBdXj8nULdmqbY8dBw4TNShcERuaedVC7kVNBUsZzokEC34uHC8yf",
  "key12": "36eZqT8kpgeBfh49t21XjoqRbuvSaN2imwSVNinSePWMvuiTm2W1fA9Ss3nsZKddPEXxkRA4oJLGKCkkSmS8i6Lg",
  "key13": "2xuVD8TuYjBzK5LBtTEPYetio3ZJHMWbJpFZ95DUrokLf6WEps6FrYhwCtkY3cPpke7bTAvVgSmyKcwb9M9zRhpQ",
  "key14": "5SN5DGvNxodMs3fNyEbaCDVo8y5mXrrui8LxLy7b9G4emmPxLeQecu2qsdPDHBaiZtATsCiEfXk2KhbbzJBz51k4",
  "key15": "27Tg1nqYtibn6zFE9KENPjSGj7PvBToiQ9XgZt4VvczvcyVhet8hWLVN45AZ9rRyXG2XrJ6KhcmVjVDGpx6PVpg2",
  "key16": "4Jpc86sC7koJbK77EZqyot8jQUvvQ9FzGxCJ8zWsHHzvkGcwqZHm11Uw9NadYKSMDLqdxEVhVY8gxLg4oLSLkwwp",
  "key17": "8CmPgrnnY7xfyPb9C3Na1ZnJrGrhNH9HHWe5vWkifDmsJcJCaKXpJFxxQcwn8bn2ymnxBh6gnAPgo2QVDju5NPq",
  "key18": "4HRp5PeHqwp5fWeBYTS4CP6QuvCKMZn5nqmpCu8VTMffBbXeEaj8PDPk7cV6T726wxLNLMAhxGPsDdvh5mJAyAKk",
  "key19": "PJ67oUDGUNmBJUgG9aQtQgkoaHefyxWSUcn3wMMZqkGz5fjaWAJnP6RXEfTvhCgntv5jp83gptJ2hsuc7GUm7Gv",
  "key20": "3HnKMEiygmpj6a3YPCo4PGwbwBLeBgighczXoYU3R8su9KzJ4L234Ki8WdievKdAp37peNzcSBnf29PARAaFDgfM",
  "key21": "43KjVu7fS2Sr7a3FAr5cGidLvw9L2dNiTo7u6dDzGQE3dpFedPRvhBbs4fLeZCyJbymaEdJgpeZLQMUjKJKw6DAn",
  "key22": "4nK8BkG6p3ccRiwVa81kbNWCnaznxnqhBTrVHEifNxSoS6CxDxWSAKQoAStcvvPsykbwphQSmacmxEpCmUzmruuA",
  "key23": "67SBimYxQWWFUhK3NkgejqmwwRPKmsFpNxp2r4nuZa72HA46anJFMYaxAijpXYUzGcoujBWVEHuDwzw1NT4jb8kC",
  "key24": "4bkW9oXNa9AFe44X4dU2pDz92Ztrx99wpRnHYrwY5oFoWB7WbD237qs7dCQoYfy8QX52cUZTM5VNw8Lab7HNPGf2",
  "key25": "4eQTa7BLpdAofwkVtenSPFpKKC7BAXSJsRefs2YQTfkjwKEXRda1RYLvTRQ7EoXKGg8WaC1X91eRYdibtwGaT5VG",
  "key26": "RF94MaBWLbhoRssxENiPucJM7krBUMLkWkVUiB71sGSs2U6C6qYU4hiqimia5o4jimLJnv4RrEw127nYibMsd2J",
  "key27": "3q1Fy9u4wSoM9vgf3ynRs6qG6mx4ZmDXnBaWAzCg8TAtUbEN88jbxvPrSe4uTBGDDhs8Q4EXSTtEi9zbRqWCvfST",
  "key28": "61iS5n6GQFyNQgNVvbE55doL6NkTueuh8p1w7Hstk6bHmFa6TQo1LRdnaPLbD3GuDkybp1Md9hxf4r7vHE57wV3c",
  "key29": "5w58qG8iwUNnjfMkLJ3YuA17j8nzJrf95it45EwniLnd9awhF6W6FWzow2AjKw2B5VoUsnuFRhzkBFPvBpJdb5m8",
  "key30": "4XEng61FAyUD5G6aHV6iioombgwp1dDAySMiyCHjZF679rPv5Agp3SDawi1Rh1DV1ZT4rEjgFGi27UocS5AGUJmD",
  "key31": "5LbwgqGFyyYw3aRRg11bfadc2u9XQ3aPk8hdzYBNkiTBhmMBxRUjvxduJ6WtchZ1qfqYg3EoN4Hyr1e8EsoQBmaq",
  "key32": "aCPcKQsPAEZjSXzRT3H1tEddJVkLoEm4vTkG1dLidZKHkC9Pu3PsS3mbfgRDQ1YyMP7qoQfCE5q33AFtbJMmBT9",
  "key33": "4RNoPobovcJYeYSGg9GSrZaZLbNapL4vu9nESxutmaw25DumYsiHqfXN9WF5neFBvFLbijLDvQNVCi8omMnDy79i",
  "key34": "27wintT4abC92L6mRosZFs3dn1QWC5q77oCjWn45wb5WGXshbYiwdK3pYdrWLA9vLKXLyBykVXFwFzMaDbb1LFA1",
  "key35": "5rtdYqQrWsoHFKotenx137mB9MuCPh68SfaCxm5BnJkyscxoJ3CkWMDufcDgedxAVHjvb7LCW4qhw7C2K5ci2GCx",
  "key36": "4kfcfBV3jh6bPgGa6QrKurKSLrM5hCsFQ1RbHPHpe59mYzWzMn6cJo6WHnQ1FLKrzjKYiAXT4Z4aBQckXzSNxhbr",
  "key37": "4Bao4jaEPvcuLsZtaKuWCZg8R48dMzUST2onU3uhgTW6YbsErX1pTPXqTAjQJugKyo9VZu9yuVC23j8XvBbpMVXP",
  "key38": "4WKrxfdDLcsxu1vhVeaSiyqQGEZQwF2fr9T25jnBYsCAJWPExcRvfoxEMsDrFbfYjhei5qDu6WG3NEoFznbupt4S",
  "key39": "2hXx8QkhrpBUVjWViNiFTAPnN3rjvu4P1tc6NanSAY12DCFDwC5EZHnwDd1sB6kTp3kRctXvYR8rTmRqwMkVbAKX",
  "key40": "4uyf73GhW2CMRGixTD8tHKxDHFbC5iFiDFDjjfwyYgfrtWroqahCP2dWUeKxreMGdJx6tdBJByxW8PJUwMQQvAZe",
  "key41": "WzdxZtkJA48BZ4VpLqorSDJb5ccqFJiP169npzkMyVCLhoZw3tEzFuVfqSDF2G96V8mK7A6onG4nGbHCQAMkaco"
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
