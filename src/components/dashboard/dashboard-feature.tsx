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
    "mJ46ZmwpqMD81vzgx6FejLUx2e1nLAFoMEDqpB8vjcrne5QB1HYLsiJ9P8rtLSjQbKPopAmMRTUxDrQNURAAkvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iQAPJAdFHZ8tWCX8mZMqVwnXA6tDcvs4c3DrZ73ZZ95oBYQU8X7iZBna1ZFCwjr93wgZ2egxzGpxrt4tydDiM2J",
  "key1": "4N4KxidL1hmYGuLJLJhygbjjt83z6sSzY3spaYGgwsuxqE6vGv6JFyPhe1orAZV6YsTwBTkZur5PKfDfziRd2rz1",
  "key2": "3KyXoJiQQKN2GMxzwUmR5oGaCZ8Xzp7YZdgZcfRhwFeaB7kziqfEfBsLuXdySxf7CLq3LUZaSk73CzJbdMSHRSf6",
  "key3": "41a3cqJ6gYTdAjw15bP17NVtXGJEkB7cGutK7Epkt9wfm6a6CfYneeJJ3LC4m5W93poiCDNyC6zn1eHTZz7SSPxA",
  "key4": "5cMzrXueZdm2znYNapx3N44Q34mSmmEZu9czxrjDMvqdbiBxkzjoFgch5yKxUnpidX4nN8V4B8Wpx8Paq7n5mFef",
  "key5": "z3dhkRFqG9sPv3Mj5rJntQGVBkZmX1FPbF37JKWSXzodeVqQUenv3WGNJmqwEDoFfrH8X7ibjycS5F8yioCCHUQ",
  "key6": "5sUb6keUFKvt5K4izaXaK3J84UwntfJ3X3HxafifTd3m3Nof3YUQFY2TPZk9zStnzVWunvVz5JjdtamwujmoYn4i",
  "key7": "3CD6KQaWT3Xq2YDRFwPkAWgFaUqZxF4SqF89qrgJ2Rk2JiueB3xZZpDDSj4th1WYBASA4xPSkmmEv71omxwCWXww",
  "key8": "5A3VdrNBUgU4tk2WG6dCGr2DrYfXgYuozGYkBtWMwfXYMP6M8kvi4p5V5eDtLqJT5AvJfSxwtPNdegjEDPUyDJKy",
  "key9": "kMVkJXMBf6wjYvrgb7iBNs5MbBicumrCuVD7eU7ytYHjmB8BiZSbJc3YUkmHQT37LZm8ePuuXjpP84hx9JdeA7d",
  "key10": "3sSBHc8bHeszNK8EmPW5wwysTRKmqytyECQ6362p3nVdFckNvUFfsGHHkZE3CMXQ8ac6Vv7kANb1MTJFbdittMvX",
  "key11": "dLV5XQK9NpeP7xmbxoYvsw5VMPaTedsPJj2uL7xnRQHjP1mbwzCGWGd3DHx3EQT4BiNXaiEQG2P6vvzMPrEotZ9",
  "key12": "3mAzUohstX78EZVECSiRS4rUgLQYCmeEwyGBchocF6YQbFY2uiQanD2PHt2uZHWSzNnru5pj3c3bkwULdNWNMybJ",
  "key13": "48B1RKKEk1jGQkKMCpNQczatpHjbKAbx8orum7o9oeCnCEfcjS7JyshcjRZo5Zk9xDPXSgS9U3Nm71hMP5PoHzkt",
  "key14": "5sWuwftYAydfYDNiqPSr7sZapcGXBrx7FE7NoV1Y6Z5aLC4umpq8FbpmFsh5bJJ8emruqvGQ8B2hBNWsdvRUbLE4",
  "key15": "2acfbP7MV9n6n5fzrmRzLgXXLbfnqNhee2vBnGdKzket4AkBq5XFAcARFa24cnRhbFefKmncxFuA8JK5FUnf9SpZ",
  "key16": "9ryMopWVBnaPAWTn9Txo1mFwMukYG6VWpt4V1WbhydZHDFB77tA2VDhBA7scMMDTYSUydn1q6YZTcoEptqz7vD3",
  "key17": "gfTtBFUYHBorJ9mFPWsRvHYaqznPACdSA58HXAvceky1ELg3wxbV2hDqvbHDX6feBhhKA2nikmGXh8dXSPByz3w",
  "key18": "3MWo5eVwmeawy5EaKvZyFLxm1YS7PGk2BxitPP7XcUqHuUqekDKB5nGXAVc98B9Es1w17bYZaSNRzxUH9mLP5ufk",
  "key19": "5SVuBqGqnodUuvxxwb67BBYcRx2wiwDGWkuKSNBxy6kfBgaoKNZBz3az2zvgHgG8n5R9J2jK9jbhLQiwKs7ZATST",
  "key20": "sottwdWLCwzgP88T6AMFsfzh44dLSjHuGbXu2zCySmg6HQuuFwYnZPGfV7Hu12uFzcszUREZTRAHGGGsZbD55ts",
  "key21": "4f4QBUECBMoxouKdTMK7dX5tDYDFTD51DYsM4xj9ZFcC6SC6MkRiWTjxphUXh67tmUURx9VN4ZEMaYerZ2SeZbUU",
  "key22": "3vE6qHPBASk7ErY8rgM3ajuNMwGGgsMvs1amVh9yXqojiHTAsD6CbJttiBWP3dBnrdzdsc4tbvYSwDoqFRMxR6us",
  "key23": "1CAVGYLXzUVAt4bEFoSMosA1T5XuHABYUxbNsVcvhgymqqRgTdkQgdL7MFWjx3zeWXrWphzq23KWqofttQCvw6c",
  "key24": "3ijsLuUmWAQ8qDJujfUrEvhFQEsbitK8uF2fcFWfW42SgDpT21Cr3i1yecZ5u3Dz5Nhbe2KMYLX9fqWLAD979fCP",
  "key25": "5pna1Hkgy2ZKmjTGNs1AMWKntkLr7ukyjL3KZDE6npg1GwVBL8W5iELtiMT1zSXMJwYGfYwXw5Y9ggz2BR5Y4ekD",
  "key26": "3E5sNdyB9ZtARxgo64vXTvjdX5tUfdtkwXgckN9YKkqTpz2LFgJ7w2Zx5PunExu9b3XjdTs9Je6t39xTwtgHM2N9",
  "key27": "5tZKsR3X4kd5pxjj4EUJHNSi2x1RiBpt4TiK6rZuhhivsEdWxy6jZkFTvPz4CUcpXBBjJ9mqK3YFF59nf26KM3Gk",
  "key28": "SYYMRnaR8Tsf6jnm7wkGG4JCJSVQNQERxwYGFUyjGKmC6uYcGhtcBicoTx9nF473u1nkjBCzKgb9FmRVRrD2ja5",
  "key29": "4NMCtZXJNftzAyEJjddT2kUJgYCwTEUYQSzQRvanLfKJHyqVo5n51hG6TCJj9LocJn2nUS1io6fYygXKXEEueVe8",
  "key30": "63pY29UkvQ2svVLv67WnzpgCGtJcmpEjjB8ZTrsqQhTgyakcK6qS4b6LxvNjm69Jghm9rKGqpvJEYizsEK91Pd5X",
  "key31": "55gNSqZMtsTm3qBCbFhKGrztLJ1d7aS9yRx32DHTthtrAqeRjNhqE9mv3Wi5y3ULWXmWFck4SwTqRvm884mNC5UV",
  "key32": "3GQvdTb9BVQAZvcyQm5VY13bwypgnn7HP6KK7SWJp3YTqvBnT2WQn8g7VgeSWjs5JLCGaBrerBAZz8pWhhHVm3WR",
  "key33": "2eSJ1ZjKb12eqY5HSSDuBVb3KtAdbvKWwigDLKfcmsCRZF2yASteQj43jEnQz1Vax2TevKBq1gYHrjBVXbqXAH1d",
  "key34": "2HAHYgMKfqqtYz5UmoK7KU7v1nvqSBvQCJoXRt392Mi3YxduH3KRrWV7jqQGP68JY9wPRd3JWReVVzLAzPWKkYWV",
  "key35": "23EijF6AUVxA73PPdY3ZmFnWiYGY5kd1qAu9ZgEF9MMWJsAWqNtbXCcP2WNaoe9TgfBvyfeSxwPhjg423nhMD3sC",
  "key36": "2q1sZxs7Lvhr8DYtwMZtJJsgFEpCJSWGYNCRfAfQWrPYxcc7dPFJsBASDsBp5wGYsJPUaq7pCP5rWU5c4PJK2Jcr",
  "key37": "3aBVw4rTbBSJuzFYQ6FuN78FttfC8HFhtz4H6ARCY7A26JN11oBgznDqDGU3dvUp7kwdYWadtc7H8STVJYpox5hb",
  "key38": "GJhh8CHcQhVpNrqeZiPvcqAX6fcfrSav5SvT2FXn2gghmVbbn4ae5fZu5YZ3NCPmPowV1YDx2LkFA9U7ruXzkUg",
  "key39": "51v2MhcEwBUeTDYpFRc1TbZ3cisKU3aHNWuJR1mTUp5n1pnx7pVxVowtxc5MiYPBjmJnaqnp1Gx1woF9oWxDKUoo",
  "key40": "4KFfmMX9581bxsddAgdoe1xLYyRTtageJGVRC5ZQjAtHRuvqdJ9z53VBTh6g8yZJZfqdTNx8nid5EJecit5Kgqa2",
  "key41": "2tiLDCLTqMqWZ3ghsLUU4kwiMTgAQ2mXX73zSquYxd3a8SvYki3tmmW1oY53S6GXCrG1ybN396PTpxa4nAZPxLco",
  "key42": "2YL5k6WvVJvKMUZF948ksvRrWzspxGh7bJDR3PRBJAE8bGRNxcsaxzEwJFqQWJjFB1yUvEoc6dVjijaVnWcdHFgG",
  "key43": "5ZZBq4itZizGvsQVEvNzbN7RzPDgBU6gxC9N2gFAaECK1yzN6s7Uj7m4eKkA4rMfB2dZ3riE74ePoXr99ZXqaTff",
  "key44": "27DoiPmbpxdyse8inNUpTYTYEdH45QCPDkUBDWbQdPP3tvSsaEcuseMN3JcfuixDmSnUuEhLpUqmeqHPziMw6A1Z",
  "key45": "ixZn7SX6fSPtET6oUzBPYsBGYBGC1oUgu7jH3xt4t7pVhCCsUqnutemP4eZoQEKG2hWCvWzTXLtFLeRhnTB7nkK"
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
