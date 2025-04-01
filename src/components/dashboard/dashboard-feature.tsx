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
    "5nHXn5wunttJDXgnHfMmzK5kXaSR6NchyTrbWJUGNWgb7TDpMcJp5oVELzySwtNjV4m3tnxvLi1dUo2eLBQ4vdhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59VQ4rNqoBG2FHjWFREcj3iu9vNUvwDwasKWRFQmHejS6FJcaF2zGCRvHCH65HW3yERGMZJYUzABF3rJf6hdspPT",
  "key1": "4BmaTYAYRkSzUuSw2S1U8SKmj1bEFC5a3nXGUmCbEYB7agtdk9ryRcs1QEtroet7PAYh8ZbifviiZR6bGo82uqLx",
  "key2": "eupDXnSGhimYNhGXRwDUaVomnMWpwBLdQikb24huYUaV5jz869mR7cieMnTzRdTnJ7jrRoQG7591CtttpNRgKCU",
  "key3": "2p4QAXd7aZzGxcAzxCobkBd9PZezUmAXhUwAEjZXvwmqdP9rWAw7YywGqx7rN3p5UpDLPMFKfaLwZGFWvqTiqTzk",
  "key4": "3Xj2U9xGFYEZQG2BT8e2RJMYDq3NTma48HCjBZBWANDEU4r8J68vfenpWi9JTnkK7AbvAc6vyfJ6r1LB8HwFXHZJ",
  "key5": "5PKKraCdaWxkbtAYX7hs6mGvgsjfwyqFTKJxj8Y2tjT7SHLs6znfSNpsjGKzittpwwujeZKXvjJQeYAGgfZ7DoWk",
  "key6": "55BvFWkaPxPS6f7jseV2gp94g7JSdsGWVr5ZZpU1zUJ1SSvHnHF5TjseCkxcrU5TbgGYDe4eMz3uHhL8FaPSzgZR",
  "key7": "2xKB2umX9QME7rkFPQBzfio53AbsD6YQVUBtkm1PzcM6JNAvNgeomuqRfPxr6UKgYjv3Y8aeYy4DonZd8oAiy6Uq",
  "key8": "uR2J5hpegodgeKwwdb4jFBzEwDvvQSQCDLAQE7LY1ejaxUuCBDhY79RLzaU2b9HeeEXNdSh1TqtGhLLdBG7u4sm",
  "key9": "2izB4dKU2svjUGkw3XaY8w4cyJ7YfVramSkrLyLs5cShSnfpsBrfehThZe7fV49BgZV1A5we3xbJoNAGBwL81ztU",
  "key10": "dFVBZvBcJ4q5uJHQKBWJWpVoqZXTxhhxsTscbJXXqGoCR1c5jAmu7qZH79q9mGFVzNbMUqMQJidXVasypFdN249",
  "key11": "2kpDprbekXgvsjvzYnMyp9VQYfE1xokmj7qfZYFZaEfL91tEsLEwno5ZYXbgxzrGjgTP9AGiuHZEKLydZoDaU55s",
  "key12": "FHqEd4gsUcuof8FEZHhzR7wte538bshWxNK7ENQQtX57Tg1J2x74DmTS6FUVoiNpVgUi79wthu4BzCU1Uhwffeq",
  "key13": "3bd1jG95uGUBSaNb88PxK3bhY1GR2fMuprW5AUnxioXk6tekpKC6WDmyeNVYtAgtujakHwPupqKCoTRaRW9V9T8z",
  "key14": "8gvPSrPkpVHhnbWwLL84FWpjDeUc143LfK33xSyQhYgPakpS2iQwPKi77DUz7Fp8aw8fdPLsAy4e17kHVg3SmqH",
  "key15": "4P1B6fhBbnU4eNwe9NJVAykyApd2yH6KUGWoEG9QuoZTgRXe2EuRuDuvuF256WyFGWnTPSpoGpZ1FQvN1gCwF3hG",
  "key16": "5ro4s7c5eseNHff9ED6CgENQyhS12riTRNa42m9QEbsrBn3jvxt62xvBwDDEtFtqhBdp2PzghinU1ntXGpyycXz7",
  "key17": "4ZmoDgXQq1HP8Jk4L4Jb2jpwsm53wh4UH6zsHWDeNDxm5XrW8Si7CuuUr6mQ32eNmgEg4VivKPb3gaTXD8VyiCwa",
  "key18": "2o1ecppaX1uT1eRArUACFS7bxuuMgQpxn824LddK2m9UuAH1SivEVx4pc1YisYsubX3qrsB5ipXcuQh4jagRr3yH",
  "key19": "3znrwptceAnDBeL6yHoiMKPwtujgCUkXYMwQFJNt5Yig1ccbeVzp17MHfdfLxGve1RVWRvcLDHwgLrwdq4LiPmG2",
  "key20": "352dw2ADm5zJ8bb5M6Npz3HSFEunbp3DXu4SeBh7WnKfm2wFGJrNqu1jF4fSQBs3vzNfC9FZN5b7ACHLd6Yfiu9P",
  "key21": "2TMwYzUUFEsYiY8r52iUWJAB1AgvEWQeYPAW1hRG13SEk7xXbRBNqog31kdNqnMrvoVDBfXWuyy9Tx8Ktda1oQJ8",
  "key22": "2D6i5sLWPUQEomCdxnGyx3tEXKJpALWURcpgZdgUaGj5T8jTmgTUSLD8bQ3xxBbEPtWQFUwxYK1gt6YHAMEFLNUz",
  "key23": "5mG7ykL3vhfHPcuaiMMziwBoz2V3Ay9mXrT8cWjvRkxTsfyzJJVodJZyKBXJD3sFK84bhByXk6aYEQ9DVuei2q2Y",
  "key24": "BFyTLzKUnWTc8GYhyVyBybhGkbQQ3zjhkVF6SSULv7P1rujj5BaRh3QHscFxmXt8tFHEC6RfZvkjQ42DwMCHLsp",
  "key25": "5oot3deLX8jV181WJRp3Nx7bvyrMFi4QcX7SYjddrHc1uWpfKETp9yBV8doD9YiwLocbYcn46UTZMw6HMYt8RXD9",
  "key26": "5zCasKZBx7fbnei7nEQy5xnnjfa3tVPt4PHDccK8UuCJkxXHAGgCsEGodTD98m29gvmFgGkXzDu9irEYAD7SERPU",
  "key27": "23E6iFT8qu92NijBx1ykxf7YuU3xtWXBGnmhNbcxdtz19sWcXoWWaMkagSE7cKc2LCtgin5ua2qmyYsmWg3Lpsuk",
  "key28": "43eYdFHE4WeyvbCXXEk4woic2Jme7NhewKGa1msqrKhnTkLVTdaLa6EanNWGkw7VDLGfshukRh4TrGMCGLGVd1xH",
  "key29": "37TtATjWDZWZvgKwEKzdKZwBseoMvWG1y2W9GkBdLCrED2cvvGnUyxCXFcYvWfy5QGv26Fa9Up4BQDYUFwCKbMzk",
  "key30": "3Lnki3KnbEw742naEoRikhTAednGWiuJQttQuh2kHsexZV3h38yssRMQXMZoi2382t9atQ5xWcUvXPgMLaEg6qYe",
  "key31": "4XZgTXnCMNXd8G4UVZ7VTjA2GaznNrquD2TQ3HT2DHgUAPhtRE7sHr745ZNiPad84fiwWRKU6C6X9YXwHEyFikbx",
  "key32": "gdG856SAzttXhtQyHMGUu4bKuHFePbmdPJAqyU5uYadbJVEsgysEM2ajr3MK7vAnzMuNqanj56EgQoudD7PgEw2",
  "key33": "oBPLASYJ8nG6CPUTjbD1kDq5SfDVTHqcCYAjuFmMjaZvEXxC1cct4F7q12Zo5ipUfscKA1M2V7vyPmTMprSi9Uk"
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
