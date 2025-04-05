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
    "PM2AX6r9j6cacZt7CQ7thkRPnBqjsu7F4PWd9gcSQsfWWGfxYqVQYDQhDRdeDfuYWdpWon1RiXH7xgMrZVE9qxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CY88tKzeQ8UgJ9zkGmb5QZG1iX3ukVPmQW6RuQB7NasDtLbwXrrXBvSKBkKJ5FjDdSXQobe6a5QRx8GmPVkCrtm",
  "key1": "3zEGLQr5zTYoCieR2mo8a7BwdVkodqAJLdg6iyPNKRAcFqUF1k4rPasVfsbSH22HsJj8FS6KLMWrETY57z79Pt7K",
  "key2": "2MuthhxbLWRT2KAxpdZkMHYms34SpEMkTFM8Uyf3Jqf14NKW5zMhWAnxhHvZxRo9DPTjAEzhrdW4xNvh9cfiyAHP",
  "key3": "3JeruUh7E2GttcwCSBLhircYWchU5oPRZwWkHMkaoFFeRLQcc3YNVtDvoF2FzC5vrZGZ2k5JTzY4yHFF9MYxPfmG",
  "key4": "633v3dcEEH9NNijoGtZjY18LbPkGtv6UbFqPb97z5tKdL9S7AUUd5i6zqZ2wN8DRWG6yAgifFynvdiT1uMaCvqX1",
  "key5": "5re815yQyjqP82qr3aRdrseUcF95yCyz8r3pddAxLcL5CyVxB88dgNQm9Wwg4KiVrDynsubXrUpyFkGEaxLTnGV5",
  "key6": "3k1zZBJQeZ5LT7MCxJm5583BLEmjDEp4Noz5MCYM7gbvSds6hStjG7Tmwa9KKH3GWQd6GNwXCExHUF9uCM8LxX97",
  "key7": "4iQ7MMkfMp5Z31wAeLRXP57YSAxeoJcVA6G3STcUseYbkiWoXjJSTMHoG6KgvST6Rfz4crEnKeC8VmVNkfqioCup",
  "key8": "5ZgN8JvkNPxgJaXPc8DJuUpZdevaJKhvrz1Vao3BsQdrAAobgYTsKct6ExPv6pXU5eKNNRZPnfPCLGCjAJv4aRX1",
  "key9": "5VTBoyBiZBqBdGtLMG1NEgsi9e28qopYcVk9rPkUwGA6v6p26HLzigbe8RUiMdkxwBM63RAHDqPXGHm1UZLn3NZt",
  "key10": "5rbX8ZyxgX8Avi3Wznk7D8H6HLuJWJ2HNzPJEUeYL8uvr946pDEauZ5PLNUxqyzkm73KKoeGrBwacCdpcrkDgErG",
  "key11": "2jHh1hoG6JeHfBvGtnFFUnnCnVcXXJHepSemwBYbKwtAJafjsUty84inWy6GmHmmXo26kh8dwSxEcZBeHAeWey5M",
  "key12": "4WEwwS5ZwRMnDwrKoDpqkMmx4gDdx4ZJzTNenFSNwejotdJTavrNxLgokQJavU4REpqvd4FCNtKoC3a5cyTfqkXo",
  "key13": "5tRhXi9qT6GRcu3474pjyxNJ7xBJoBWFWj1hf9VY2SXcmoC7RBDp4tPGYKrtApfGTVLNF5EJeB9Nh3vnytPBsWu8",
  "key14": "4A3kLMwgxJVfpegLZoiYMQUsUf2fvpWkUnfuwmimpknYUcrsnruyWrDqs78n853zJDvKA7EcvAXA6bkaXaS85zmg",
  "key15": "5mAPqNvLfrr996n6qcUBEhzCfenjupQMfgKCdCZvjE2z8jHuAPJyUqbnbC2x5TxMDpYjZHrsB96t3pXtpKEd8Bz2",
  "key16": "4b4FTy3TNpTrsCHCAAyLuZNp4onGqTr12NAchD6oFxC4goHCiUeNp7nFfWdfwQZEvFUCjsQ1RS27s9BoEqo2TZxa",
  "key17": "2ker5q7mv7MgB2rnCPf1SeFFjshBMorshZyXrbW7mc6x5HzHgdh9cBLM7Gi1a6AWoydh5onPBRzz9sPBxQPpyngd",
  "key18": "3EWoScg6h8FaGdJTRLTHzGXmZaoD39U8DQAYc7YpGYgnqpzAjsBwxLdKc3jNQmR5BbyuXdJTw48t795p9qZh6nYi",
  "key19": "5Hvw5JjJZSXmwNxZBAX7QeEiSfYfmadGMiYo3mVwzNdvnjMcNneew9cBeHF5i1tHjSPxHiaVaiks4LTnq6xAeQ8Q",
  "key20": "3Jtzvi65cV473zctta58FPF1rP3H6UKdrgYZY5p3GLwVgzwf2TNtjGdmgzWBUuwr5RNYQf64TaTx2QGM4iGELMYb",
  "key21": "4ydW9uYaasdtRP7fDG4pRuoe1cac64hMFTqz5EyYHUBmqZXTsnfgrdtLXfwi25N5HjXoS3aj3qQqXUowPSm3siEe",
  "key22": "4zKFSu8b7rQvFVAdLyBZd3vwmNFdB894FgMWAwCUynoUrx9Hs13YZqWySmFfw6iJ3jv2qKL11DZuhXRgaidUdocv",
  "key23": "oyQKaSEJHaQJP96szcQFLa3F65KeSpizJJTSbJkNNnNug8R7uLwbGokGqeaY1t26Pr73Q24rRbEvPH6eLEDDKUb",
  "key24": "Vn1RagnHXCeFSnycdH8CqCi7NgdhDKiJVjgP9LGL2PNvYj9ThsPqTbSgqs1k8BCAKcKmYLJiTK7yVFY7i5dVJLJ",
  "key25": "44gHZ4HyGMSegDNxB8qQSpv8ApNGsni3e2N8nvfE4hLqrwr6SobxfTPL8khEJD47ffCqfZBUVaatkcnwXMWxEu1H",
  "key26": "5Aw3g2eRMovzQJ3Ud7Z7JT2MxvorJrp5pPdyAXL2s4SEGSRHAcnC5juYGchtujy4dX5jMoMeJrPQmd8aeGRJYRg7"
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
