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
    "4B7ZNzBSTSL2WWdMcTprB6xL5EHjrjBj1EPEKhhyuC7n8veX3SJ3gBYAi7G6A33Au7iRTrQEJxxtwmJLoxuMr3qs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22m44tsFMyKfSdQiiZj14LjJTsTt8tuL8vPCfBqJtruxcDUbWNW3AUeHGUyeto56vHvCaEJ1DuBJ74jQbGBq6ETW",
  "key1": "QjPr9otx83bPTUNRK1T18wmVAZ8DRZc8vdE5LzfmEaxUve672pkdybhdNHWMsk5U82Y1wQueEgMZtbFUMxv3VQv",
  "key2": "3zoyN3LQtuudh2aVzZysS5ksUPNvDnw1GyGwwNDochaqgrKNM56dMXonWpQtR4ac3inNMy3CRmGtXof4sL5B53a9",
  "key3": "5Qpn2NB8v3zsUXUTXcSN2m9vnn3xcbe6WPMsAV8shU4r4FARwtjWWLYvHsxNz5kW21WrBnvfWwyNzbeAp9Kei2Tt",
  "key4": "3AAPGYiBYx3cJXPYdpQGZaHXWyEug4xKSgjmTn5EB6Ao1gDfussUnJLz7cYPRDMR893L5wfT1Gxt8pYDeBZVUUSK",
  "key5": "4zyMLNoYpKFjPg1PsT1iveHGoHG3czWDWYMS9ubaSS2FEG3h7e8pDc6yL5UUmfMHrc5Lq8XGDxG8V89kSGoCWQP2",
  "key6": "3pDh1ZJEwVDexCCZk989e3ypDF9oYinWY4b6U1LPfC1XDkeHepvbxwh7XgYPnNQcXdoVSLBhoq7NeXDJcG3eEjZN",
  "key7": "4Y9ANdZBzLNAm2ZpfeSgM8k12jtKwoVTVi8NpMHYpYwT3CP5DTEMHRHJUnGNp1qNjiXm5Tdi47fSb52xNMZmuQy8",
  "key8": "64PGMyezGu11qZxSbQpmZEkPubKwMLho6JjAfdx7cLgSsAmQvLgZJu6n3Ff788oaqRAA1vMvGKQBueui595ekg4X",
  "key9": "5xPxPtPs7Eai9udXUaSaJsbtKHrhbbHFboaaWuAUPYBXVFpziy2SSYHVWYxzu9864n68NwKr7kndx9tR41BrkwAQ",
  "key10": "2Li7f9FZCagGKoD9D4ZagZ3d8NXkdGDftendxC62pbwT8QyZaBCkMrRTmPzqUW3zAyTagxSa9iEBjbt9BzT3nDov",
  "key11": "56yr9WxEESjkCpiTeK9ZsQQYebosHe17vWJpcfDZa64NrUgjtxCRXgTLbjDjWNBNJ9sRXzJ9nbBxSmzkcoYfhNnL",
  "key12": "21R4WwjxzF6f7LE5aeTcMoaAcLZFVkDtbZfPnM1NqbadbFFy5RY2fcBmPbwNMgbGAXwjpfrgxBzakTVeeYwFq4CA",
  "key13": "5ZpGY8pXWqgmMVkGogLVYfbQqLXXXhgo5CD94hbTsw9SLubf396Hgh47kEVGbvT4piEk1HQSnc7qqbmgQ3mRnwwT",
  "key14": "3HyPN6AtMqinnKBtuxapm4tzuKzMoT57gfdiHcAJ8GFRFwbqAbjsFbGX6RU51AeLw1Vkj6vmsytmd4kkUp8UW2M5",
  "key15": "3tBqW7j9reU4s3P5mcRCRKDD3A1Q1v81ddhFSyYjduaGAJjrVJshuRXcjWLjgVWKKYM6QyXcTHKRbM3ALmDEm6hd",
  "key16": "53jdDrGUGmARt343D4iiDG5PZkrkiXPgKK82miNTvvwC8dGnjWnQcJgPwxnBoWgvwQQaibH3ePP4hputsGvVEmRD",
  "key17": "4Zx8g6HTfF7QcUA9LUVrGM8xbf2d2JwRuYVUxXxnDgDyJeqMbwrnXJRw941ZgbTcUZEh8MMcKJzNxU5wtfiq6fn1",
  "key18": "5RvJtYCGE6QXV27f7W4pemQM7MHMsG8rqPyc3JjJ9LZgNGiF1b4qmysxFVNBC5wHsv9ZqEAiqajnH4TBiHEPWVUv",
  "key19": "3YBxD7TRwFszpy9oEHTuFQfpdmSDd7PSqQHuNjUqPkuHfcTsPtWU5Vr1dgNfhYGLUrwWcxabHUGqd2RkFzCwjvdi",
  "key20": "2QZPXqwj3NKWq82JWqaSb7mthxWuMouwHDfZNCkPEMTHnni5h7qVmRCCBM851SzXX2jo59QXSxbvGJWQN4ZEN8PV",
  "key21": "2au7WjXF5kNPkfe2BoVLL71D2xVAyoyL664tFk9UhBmSpQyiwT4J6BUhhQkUpHPQMj24yE6HHmuqrEYwqm3ypTWE",
  "key22": "2iwvmAZRn6HrGnoA8QrabaPzsHQdGAjPxq1dd5pxkKhVvzQe1dUH3gKmBgHkE7PoF9uwjmBFS4b8MYaEzFTKRsHU",
  "key23": "BK3TXSAR4usFVwD55ADiUdDh4Se4ZWfwRxwNwzxNxXZNZGXL5JdnX7XXCw2tYYrVqmQVeQumfq38EKZpT2fyABx",
  "key24": "4PX7dTYScuS9QjHEhSWmGMf1Rovss9h7Qs5PiGHZH92WdLwTK8BXQuxwAsJpMtnBBjW29tnU3m5Up3uCj1FxkwA3",
  "key25": "4nDv1gUhPSKyw2eMMFtAkhTuuUT6ND4WMDTbj94MRoc3pGzDcYKGjtnUQRzLMbFir2aGbbZvz2M3wca7iicWpteb",
  "key26": "3QJxjtoQZ5DrCgbx46BphFuVS9YbmZSPV3cQP7mQRozceQV9BJGV8hjqBcFgn7AgK5ZXSZbMPnnTXwYDDq81ryeq",
  "key27": "4WELDUXcjYU4iQfwPZDmimbR8hdRVvLErHzYCHPWH42dTGFHB1wCFimBm7XYxN56zF23b6gjZsxkhCVJKS9BtAS6",
  "key28": "2T2Etsw38EqShgvsDGxKAUbjtmgKAozf59sfw2qHmQENZETtMQ58D3KwJBPksswsMYKBTdRwiQN8QukU5wp1kxTi",
  "key29": "nM2fR7asB5e5GnzcPpB1GAJzMnaa1xi8MgcTR9rX8Hrt5fz92q2esVHpAA4T2cKCqTs11Sq1wrqZzg6iqX7jsRj",
  "key30": "cJesgdYnUiVzq4mBggq3z6Wnqijf6a9Bv9qwjBpByRRnkJ5TcSjsnc1QupK5PHYzSAqm7gZzc9vjMXFDxHPaEsn",
  "key31": "UkvTkk98oJUn2K1TDceAhzd7AM6S5XFv6Ji8efM9QfTmpqbYSNYUj845vHVVMGGzMhLmGmPygR4pbXvBpt7aoZz",
  "key32": "34aWCakq7uZrUeMY7YcXB9Tcuo7bZwcGr8tUvNNVsomXi34exe7oe4bSyNBAgjtK2nHcemjXf23joHChGZ8dEzaw",
  "key33": "7Dc1RoESjUUXpZNKC5s4ot8kUa7rkKJDiTmgDEzsK1vcW6pxXxKqeWGBEdfycqJLuXzmdS14QDybCPNEqxrTuGj",
  "key34": "5EsT5PTcB5CeqVZzZ98oHRLCHdEFQpoy7wWo4vaQPyn8D1iqNUWrAAUjtuqVR38qdJSB5HYPsmcA4PjK1kJVwptt",
  "key35": "jNaC8yX2KJCXWvLTGrNECRuuMUv6Rr2JKzmi1oJv9AEm9UPTt266v2Ftgd5yMro1ihFJRpHGKLrUMUhuBiZkWTS",
  "key36": "5sBvuir4rJjQiT1jBCV3y6crSHqQ1mEHALVZMz7kb7T1JJ5x7tafcddtZspfd7kFaPaLZrBvZNdm716UWwQ54aDf"
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
