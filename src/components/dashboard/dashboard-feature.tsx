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
    "64GQJgzd3gisxm3rpA3dabZBfkr8qPJof3fP1zFrfT3H6UiH2QecNkLHjegaQg8jvtrSMCGRGMxkEpgskFZwhZYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46pfo6sQX4EneTjoXJ3ornTyS17VMLm71cnGKrTjfXofWfZkwNqNQKCaHnHQMF2zRJuLNDRa2CEWPttDZzw7vhMQ",
  "key1": "4FQjFSB2nW1eRx8yzjQNedkRvizM6AxpNBmG3zx6NVjCoVwd2GtsFCJY8ZTMqUfYn2eS2EP4ejrJPQkha66gqd2r",
  "key2": "3Z2UKjSLz8pqddwRr9KMpBZzZfmmPBK62QLcyL4z6aQrVNi9GWftEcuubvuLYCA8QGxh5LiFzarcDpqHmzgU7o28",
  "key3": "3iSrXDt6CC9DrXy4Meew65XuZx5zoaeYw9FABNCM6qZNBSpNvTXUdVggUhA5hNKvQYP5pAMmkFf7fM9ockSCvpZG",
  "key4": "e3ZGfbDWQYreAszx9Wudr18r8XQ6STYt4NrCTpkRxgcgEF7xnp7jbfm84KNWyzDwQdR95dt1PmQMYUfUzqqHWrG",
  "key5": "EypFX4Kzk9kDQgkDQJ9rUYeEvyzbcByk5KWWxQY4pCiErDJdhWr7cHUj6p2SnSAFJYmS6mXKR4kHHAA3kdBkfvk",
  "key6": "2fghWjs4fSdkLCTWv1GJJxtH5hjte979M8o9R6SSNr2UejRMGPKKG6SxDB2NfX7Cowta2Vq6r8u8GUJvA3nxEm4i",
  "key7": "3znULCRjcye2AbJMmuZL77ypjR43BeTnahiWkUJ8sGNTSKrb2ctLGgnpEsyXLzqe7TeRyMdWCAeu65nT6zBvV8gF",
  "key8": "2g4yB7tFkCzubbLFT1BzNzqS4kMBAVkptm3w5aoaajyth8GxxxdPHetnwjfkVZJhfJVydTzjiEWSJ2RTqeuDmLiP",
  "key9": "3Bae5VsYfpYqGyPhmYfjrSoFdWXvY4evNugNEGQ1QXBCbsWM3vbKMaRvrxPEkxvfvQmpvmykh6Mw6VCWiLY9xFBq",
  "key10": "V3DG7ZB9pNN3UsKLAq5ErPFU8AiGepqzyLJtVpDq9xuvN1srbvxzgPFDn5jFMwJzjTUvNFCqKEWEQQEaxco1QWX",
  "key11": "4j7xWifjJSMiLLbUgsj9mf43akwTqD9vMDDHDJW9yHqf4gpKbjBvYwTXtKZ23P39NB1VHhjFxXUwKVomrAbeN8up",
  "key12": "2XiAFcrfKxDgz7tjyKGgNRfqnJC4tMVSA36V9mALWanaqdqtL4yVm1WHZJGdLzJizeh1ztzaUjdPzgq8EPD7k1wJ",
  "key13": "5nca37U7gD8NRgyYXd3Y3CLmjzLrpmmnFYd1eUJyGwpnqVMb1Yw3cgPDxnNmEBk3nbmS7Jg8Mk2gJCoXxiyB6Ghf",
  "key14": "46i2C7Zr88d3j5PV9i44i9Twc5niZTkNQC9BJfcT6mh1Z9UVnwt4HZk76s5usheoWorRohnN876PxRNYtpy6eBK5",
  "key15": "2TWpAmTmC9AjhjxP8a9KjxT6Yr76TdgU38Za8hyCZRL4PXAzLZQmWsaYEGn8sjVhyvuJ9dC7ENRpdgZMf6VLRPA2",
  "key16": "45ycSnQzoaHdEW6fJ8rtLLq8sxpEee4nGjeFuBkUu8jN6xdGjsCSzM8fJJoHXBV1fsikw4CoN3FGzNkjbLLoyxZc",
  "key17": "2AxfCQEngYz7G3K4EN5xQu48DFCvyRW3sJFJTAnUynVd9DuojndzsJdh7LDCbKNhe7SqctsJgVokeAs5cgQjXKF5",
  "key18": "5NP7FMdgxmfuoPnD4HwhH1Xx9poVvtWP4Sy16cJ2LSehoPk7cuPBz1cwEmCs9MMbNGuAUo4xvqSJDvkugZrHHBE9",
  "key19": "614ZNTgNZBkdsFj13hsaNkntdD8SD78ZSTLsGm7Vm6rgrNA4WWc26K1rgS6XWre6YndttM9zyqob73E2AqmEpCVA",
  "key20": "3J9EtguzNXTaTdoShnDQm8ZphJ1nVW8r55HFGJf8NLot4v2GhBpZqcpUS5XFFqp2JTdqQevB2yZouGuJhsN7x4Mq",
  "key21": "23UhbFjD38vwiLMmZK5swE2ryPXMcH1FZvRPCHTYeR49CjAbgMZ2c956XXntHbqJLnL1M15EWiwwMgqZLHdQv57r",
  "key22": "HNJc7UxD1jrD83teGXkxePbkpEeX6p6VeduYFPR8ZSaz3VQfX5nkaV1q1gJN2wQ5XUvCbTp6sopCQZDncBA43Dm",
  "key23": "2RVDoxs3FKRQdHNBde9awjuUA9rLqyYEY3PTe26VE1Php5p5FoURSXTzQRYzTonZHEfxD9QvKTtmuq78thVgLZME",
  "key24": "sUmsR93UKVQhGzjGuUBr3fi23TDAWa1BkMizgGLJemnzD1fPdkpJZTWDBQSYD2Nx2UdNFkCw5HFF3AtCbZjUao5",
  "key25": "5DjZQRQPL6axgLXzZcjSVvtS2ErvMDuFKiTA165mCG171PvSc8NrJY1Y67neAnA61Hvg19RKfauMC97dF23nPJPf",
  "key26": "5fAphf5WfnsyHSRE2DWMJhLuGg6Ujke6NUUezRi2sJhkvaBvvkhgH7BuxEDPpyoNYPrydbx2kVFhRLfKvTuMMDps",
  "key27": "5NHfUvYWzqtcfZ36kuRdudTXX7Da2hYcG3GLfuXJHCu9aqwG9KiVz6LpiSQ7k8L1YTq8LA41SPz5iGf4PtKVV77s",
  "key28": "64WQwAwZTEpps8F7oeyhsuHDF5reac3yLPicxLD3tqfWBjEStuaJq4y1FjYFGMJ46RPhzuRTR2bnBoggwMqTki8q",
  "key29": "61eir2cob55jJP765ZLq2aSsSHju4HYjA1ruuQunYXAtixeBWypBUW2dZkAvKUf57cnq2Q95DP8FgB8pCQW1DbCK",
  "key30": "283sBv4z54sAhT45xytZAk1cxNeLWHBWBrWTJz8xsVm8HhWNepaxB1WCqbXqgvxuyJpBf9U7yw6Jxcb2CWS2udNL"
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
