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
    "2Xo3QxdbQcff2FBpXNhk1m2J8iZkUPM3FxG6LZSC6dJaVhf8MYq5rPhUNRG4x9i2sbMGE8r9rk9GbcVtwG7wQMBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UrDpDZX6yhd7J3GjZA7aLcFbYPkxRGkQZ32G75hgDa2keRCX5wzmy5GMr8GDbsmw6uqcsNNJN1RagNc9GNp1MRr",
  "key1": "4zcCfDngz6wVJzVnfQaAwJfS8A2DmTFJkJJaPZLdjK1rJ4DnbX8oy9ukBZUg9T6qgepSeKh5Eqrg33SFBHu3obmr",
  "key2": "MWJa9EooB4W8o2fPW8aeZcpYykEcHZva2oscYd2XX6oBGk6UbxoRYKDcgX1HDeyRVEvszY4P7ug8pFb5xf9ncFi",
  "key3": "bj4RspQatGrRJpstc4rPpQ6DuEuPnN6bynFfWTvPa3cRk8F3Sx58sjY6HmCrEftfpgkDzGXxeVhJwg3F2EpnTPc",
  "key4": "2Cp5oimrhqwkksMn35cXZv3iVNoa3pMvWjEFvxBnatUNc8herx2jUtyfv5edHVBgJZZygoMU3YnHaHeyrX5nypgV",
  "key5": "297cZM6SXZCdm6NQn9HLvdXGncigLbMsAbCgu8eWSbjpa85UE4PXLvWd9uPibe7wCQupuJACSnJDWpEdMTR7ssTT",
  "key6": "xw64ocaoDFWVguePYBorZJP7didWjP1ucw3gi23Q8c13Zsy8KZUucbHQe1qh67uXPF8121RBaK72qk5CoYeSUCv",
  "key7": "3U28H3dy4rHVvpREBSYBvfArUiZAr2rkVEEpVs8rYPFiBcFgMouGhPbCwjSneqf5QWq8VNTACfiuEau9mxv42vtJ",
  "key8": "24kQvHXjxpqVWfX9ut8JGCHHp5F1MgnzagtrX2hWvRWu5yDWZe8mQM3ExPvx9D5yAEPL2NCMr1282tB7tWuDoyBB",
  "key9": "d2nRvXV4qxgtFHbUG4sZnJZonQ1cXFT62tcYzeHuH4xs3dJeMgv2FSZDXTiCaa79eqQ83vN1gmxn5WkSKJmPS7t",
  "key10": "rm1eVkLrNk7Sp8UuGnrZehkdvTjfvVi6hvUNGAXnMeGZXy6zhnosqCCfrKmbZrALcfnidNDRk6Qz7cyjG8oTzvR",
  "key11": "2WPePS8DrsKcNiLqpfe4JXJeUTqihNxsQg1d3CzBqdU3Mm1KChjGW49Gt3b1ZNm7GVHGqgK5xaTkkKF3QrGXY8HN",
  "key12": "X9UkjgdAg7u4Ursn6zQ5o6GsneAWM2GsoKA6rsVT3r5Mng8wjUC4v5BtQS13MPXtVpNK7rc3Gq5tRzYbYPcty7Y",
  "key13": "2Bx1CQjGHMCMZUuE7ATCoq2gs5ATTaw9SMYKZUVTjU5REYDUrCsNzVas8eeSMGPXrKkJqz5HMDoedeRhpK2BiYmg",
  "key14": "4wrhHy4uFwSgXSi8pQ7uY5agxy9ydmR875zby5sNURg9SiiXibrXv5jjuZgYfcQYef3qK4gvHcum1S5quWCKHEjw",
  "key15": "2fGBE6PqSVWu6FwWDGVtkTVu1u9qU1NE2wu8tKgeHAhqggrnLVuGP8YPnbrj6k2fWEhBYwwM3Cucfxv7AYHwHgTS",
  "key16": "4bzki5kPszAhUMYiHerM7Bqgznb95PPKyrHQeAk5eEYX1zm1iCcxajXBkh8bZsjRhDJkNkx7eLNwgCd3SV49FdaJ",
  "key17": "4HhoUGyDm7EU8UTVsLS6b1Fb3wXMqSU1dz4LHkuBTLwKFqSzd8YvwAdNooAT6cfBCnhNY3EENaXphrb737RftuWf",
  "key18": "24wqC4gPdzBgx7goVgBw9Ag9ore4M6reZvXupXxapwtHE7TeDTjEXWSgEWSSRLyYvkQJHmH7HJWRcrqu9do9tREo",
  "key19": "miWSCvc3DAGLzv7XgzfUFfnezVUZDmKTbfdcdhQ9onkS9P1nDY7Szb6wMCCgwV1i36pi3KX5pcZU9rQw6e75R7d",
  "key20": "5xoMArnaP21PLcUb7enqcLguJs89tETiSQARia7aPXVFs8Lj2Sgb5jmgfgEoG29J5YPnjthKkgScq8d6fcwBrVjS",
  "key21": "595gSUKJecywbqCw2U9zBXdKuZdti2kH3a3cdHJMdFjd7bPrjLvDWSCYite8d4BAMywv7pg3YGayX5mtePNkWJP",
  "key22": "471YvSEBqJ2iP1kpYU75w73kJvG9szPSZXW1t25MeAqh5JEC3dKkeJXqomnqgth8DDf7C47ayYmCp98N5akzDSXL",
  "key23": "7AqB6EVLM756ZPNE1FmAHm9sVtDDRnFTTWUoYvupTmPdxPRChxYeqU2w3DtARoCprq16vFbN3SoHA7jdrbEe3hd",
  "key24": "2ZAbxJ55NiAFga3CtWRziPkWyXZf5pKu7Zw3spkytwwAhybJo1eRQNKdw9GPPjhu7fQaPJ5U8oBB224MMu1EyFu7",
  "key25": "4Ka4avnjQmYSW82MzqXDVHAoxLXMPZgRLuUoPSpdGAUpsBjNdAJx4rtXHsmw4oyhCm4SeP9hPjQHRHimf24Ycesr",
  "key26": "4jrcr1rpPdgPqtnfVrg7yBzkoVi41ghbjPUfbVrLB4uZCv6osR5v8qkWPbjb61hmsXSTJhWDiKis6fzrRCjw9ZUo",
  "key27": "NJqAmLHmJoM9w9iZmw6UWUXkPbmLzi1BSsE7yWy2jYVYyKFCnzNu8rLjyiHesHvSKS26TE1nXBdSPoLbxZdQKLv",
  "key28": "61SP3nW1VStHTE2KhtLQMiASus9dAPHmpHtJyNEnL3KZXi81E7zsdT8esLWTYNtBzUhLwoxzZDKxShG8XXEUQq7u",
  "key29": "YmWpb8AqEhu9eBu1LoATE9YEGUCz7PZ1koZ8NCRmE6p1tdme79MNNTXudoJgz6C9g9z5LaQRX5cyscspuHSQLLv"
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
