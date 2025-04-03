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
    "2CcGZ9VkiwWbiowdA44RobdMZvUa2xWUivHWbiS29wqhWgP48ntRjXoYJVNWFJhZM9JjqAEBZJhkhE1kC5wMnNfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tsy7rNCSdayC15r4p6vP24Y2iCPF4fe2UvheSyCaX4GATvd3iakfrfBW16J6MZNE5kLMaBaRHN685qAkzhco68R",
  "key1": "5Wr7sD43zCkk9UjwH6N6Qxs2pH36kHuJJTQXohwfryFostXbQG4pHEA2iqvpzs3orKL35nXy3Teuu5r69ichckbP",
  "key2": "3PAMy2wiYY7BUbpE5VEdcmJhpm1gDqPDJF6e6eFxJeNJmy8b6vUD2tZzUZQwmFYV2qnK9zvBDMF737vHHjEy8dbw",
  "key3": "2J7qVUMm3Tst7ekSAixdsVnZKLFURZRwMNhE59LE1C9q9aw3u5wc9fcJB5uLjCY94DvaGDGxCzgNKbBZc2h4BHHh",
  "key4": "jJmS3eXTxDy4kxy1bqWwDkDqjux5b95tj9qUrgHmY54JroLwQmKJWNHaCfMRmk3KSVTJMyPPMg3imfBhSdK4Jyf",
  "key5": "5U9ckSBAkXjW2tcjsp1FSZmn17h1ZHCxHykYN4AitacLYbntY9k3yNzbaMFcw63ku598BXYsA1x5fQrdxp3kf6b",
  "key6": "5nGMaxTihaoiBffZ5TsWwt2HEzK3wRcx7b4VqS3u5j3EHkqioRci8WLPDg9Jk8mL52FSGLBjZJEhTQq3BiaitQwN",
  "key7": "5jmvnU7uSRvMgEUAHJ7nfNZwrTiEWHvc6Kuzrsrgv4KkNV5d7eT6xK8zQ66emtrNgaKDKtPf41HLP1UgpfKnsNgJ",
  "key8": "3EvS3AZ8ZQu8RUCyan8xYWAKeXoeSyS7XTsgRpfFbSTEQoGw6JUm83jaNM1Pj3dTDPpj8kmLsLRgWhVPqkHhReZb",
  "key9": "5fwJgZRhLFr6qamGomDse9ykESxXFvDHd17FX13Mcag6Lw7ndaWWZ6oC6V1hYa4n6Njoj2si1DG4qiXa5aAtnkcD",
  "key10": "4LhpkCAvhTDRku4pHf8WDZBNyy3ZpYkfMrbuEp4QaH5yggXBKnPz6cAwp3m8CZNjn3yZMh6qikr6or2ZWgv17MzE",
  "key11": "62Dp4fjE9iTD1gEEiiaJbhqbZ7mJwAASsM6pc1JwTdLFJpzXUe1VityDq1RRcVh9UAypG5CGbQFJAF2ov2R4F1bn",
  "key12": "3AX1NNxWy2asizCLkgBPyrdGQbMaPP9brSaKGxy6HTvvXm16BWJCu5DJGmA1vpDeYfCjK2bBZ1AgNgnsL9AHs49H",
  "key13": "BZD2UvmHk1t5F3Dj86uR5ehubpg5v6msqx1Y1WnvGQPsqfZHa9oLf2rGTV4Rn9b6cpUMBfsgaL57cBe3RD7mgwN",
  "key14": "3FULbg9VkpDfDiwm7Pr9TeG5KTLrcfs7VgKx4Br1b6vaPPLeoebmjACdfNHFMKyQ8vgBBjJuTLWkeQAZ83eSWfA7",
  "key15": "3ohzG11bSz8WqvbvL6uquUHAnGy32fYEmB67aBFxQynP6iS31ZGdFFGjJ2AxGisve4q9ckkeQ9dE9SuKTLPi2nyn",
  "key16": "2sTKyPUPnFHHS1L6HvfHym5J9rzFm68xMDofuRgddsadrCpZmQxv1s8A8ixTVUkyQUnauE5gcp8FnTq49PrWZ3D",
  "key17": "55cwtUnbDw6hUcSP5pmUsaek6qDpzEwcR94VifvMavYJPbLuKTUHoQfi25Csjpv3Gz69Fq5KTjeVXTzBbshGCgTx",
  "key18": "58PBupYxw3xKzWBy2tpZJqMsLdVvUFh3rPmo9LndyxmxFo9i8HdzNNx3WJNFRviZdjtrL5L4gBRJ4wtvVC97GeBa",
  "key19": "25hZJigyyhBKXFbVPYMdjEPhjHaWkjyqMScXRPkWMsYCiWC1FvHMzFsuC8VxkeZKttJLAWwmqXWBRLQZhwFaMJ5T",
  "key20": "7bvFLtExDzHxBfDfVwJP9LmDj5oZZdhuyAbKG63Nr5Jy7X7vR1Ns5JZxdFFRUfMJuLCXKpQnKLQbk8WMqSbZwVj",
  "key21": "5f9e4jvgbCR8oKviikemAHFPcvAU6xmqhx6xt3CMz2kziAHiJCk7fWLfMd6CUkqLFJ7SNg4iPktbkCh4UMKB67MT",
  "key22": "4xkDwTPS1xu9FpRZTYVuxq71DiQ8H9Dy4arwjhE2ahW1YRx43tGc4qPyqcYxeY443wjdXsr8YAQRziUogRBDv8cC",
  "key23": "2vDqq99CL7oDVMiAWy9MST4V2o3e2r4VkHsWZxS5M9m4RGPMrd8RSJDyEihrDeu3BnHVHWfK2Tvgki8DXh1Xc6Ej",
  "key24": "GaV54WtyLWcT3hobexvncrRLjcggbfQx1BygBnFV9VQnE1Quk49JbopSpbGREuhmVfND9KUVsD5gjmRVXcjWBZX"
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
