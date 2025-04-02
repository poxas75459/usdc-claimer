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
    "LzPdW4PRm1PaAUVUsdXnkvxbDHyGW6KC2J8HzFuhXYBdEjwkSYa7pBRyDpGE9Jc9xjoZHs3QkCduQCQs7DLGYxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZrY8kAAPKC59yvTxEstxRfHqsspC3sM5C4aQUnSbLkA568m7LLpRyKZQ6SywgSggNEPByFVnXY1d5mKbGD8S9zu",
  "key1": "3pfQ4AMPkiF6L7qxHjjkPfD2CZEV8XQeRWsrwD1cooLv8yLCeyEmyPoZodBaLwHD3ewBbXYgnvrdLfKcV8yfuug9",
  "key2": "48hadTRCmyjFHwVykYx2tmBpC6pEK4UuZGVY66M7wJWvTbL3bRT56XP645aqd5f3a4YyPgKf45YCgLjXRprGpMru",
  "key3": "TDpD4GXwZ9L3qzmL9vWxGD3uLqth5qnHtRe3oPwVHa3Q2S1umpjJ2bYa9BDC3hagECkxFqkxY5s6aEMT4moo8H4",
  "key4": "4Jcc9YgpP6SYCjM8TpAy2kihQzr97g5Ky6BHrLsCSUZubmKqja7HuAbvtpBePpBEi4FjAkJDgSLTfq7RYD8ZW7Ur",
  "key5": "3mAyeShWUwfxJiYvGooHCU6jDbA1bEHhnasB1e81tE1Ygmw2Bwo6o1NNPeFgP2nZ3LiXhQZ1mBYaXRBxcLtSnZa2",
  "key6": "4U6XCfnvp9eRv9QRiZZPSpLdw3GkgVyBYfdCYVgedxCZVC4U1bf9UPQt8ZgP3EztUuvnfRxhD9jjviiP1jncAxxp",
  "key7": "3q1wNAQLufpT9PjMHMfpYFvNJ7qececCCkFyUiY2nDwi28p99FpNSyLuwsZdsRnUNjT5C9EfaHeTHEp4G4FV9zSz",
  "key8": "5GC9JekEmJLECnMR6iQ6m3KNwhcowWaeu4dHc9Xo1vATYEzxbWnWzxfFkXBCGBuYxB9t2UwSirArQHuXYpgmBQyA",
  "key9": "5dgyv8edJ1yY9oWnVGHWZMwespQzJFsz7UWqkfeeUUHgzP6rpQAXR6A5PYgMQKSyBoEWLQFAQMA3fPCeMe2k3jVp",
  "key10": "3yXWoW7AtNhJFUxfMBth2VVLEqqN5YVw9uMZgndXciujJdN89VTjEbqMZqZTSPvDwQcRVGe9fqTtLbNmWGBUr3hh",
  "key11": "CSDWFAHftkHDJzQv7q67JB8oTm6zB58SJWPWYLsYsGPFDWH5UXVpgrhx4gXGFbVcJkk2a2EvZUm8QLcSYmA6cKT",
  "key12": "4tKBXg2jtgDNvZMh8DNntPA7EAohAw3F26eM5M2AKunbTNbq4yC571jAd7KNUcfgooMbrRXqKMboEAVTXiH99qh",
  "key13": "218ppZGxwWYL6fSV98wpJXxrgkTtgb5BV7uU3Q41hHthEfG7QciiRuXy8hz9UysXmbJqURTNfvdBiUbD1zxieWaf",
  "key14": "2qeVsHrFtLiTGYQ3ynU3NLUu21SzhUZfMYiXCyGWDrNj2TmqY5qTe8zvn4i2zZbbryWYWaAuYku2myHJKA7CApGC",
  "key15": "4SnCS91mssyoHyzbEtvqfs1q9bYUw636NitnPj713UeXVHfvPEKD2DYd4iEFqCLPULykamSibxpkpjTaNeq8y3ny",
  "key16": "2sZ3RicdFCdfg18wjxGzNhGDw9F1UZytHPtRUWLaG8jGMyBayttDTyR24Z6Ysu21yuuaHpMxL3fuYsccECabht1p",
  "key17": "3GZLjf1an217yBPq4BV1MhAYtLKrkuZY2wwvoZgPfGFh7CdGc4sJumweHoBoWcBmXAy1gH3SrDHQ32WQ4njL3pcL",
  "key18": "35XWjuFhtqwRuzwEAzUBMavQUrsy6VbLMim1Gqg3Q63L5zw1qdrLkVWBbNvYZntNs7soCUBchQZyjcTqZa3VdScK",
  "key19": "3GyCGLTfVciFsqh61i7MeeNzY9dEjmn1CC2rQgGYQAfC1m3mdZ5Qx5NDRQmfHoQ2YUk8huhHqCXv4Ds2pWUQ3MtT",
  "key20": "66fJVgrfQSaHcxFYaThfTFA8MB9qQeKNfyFijkxp7k8xYsD9v3mbyqizWerSJN3btYAtETLnUEWLuzSWykyMjdUY",
  "key21": "oJif1yqUyG2aDDjHGAgJCMiuANdkaqRhcLS2CkjgbYasdGNAiNWLYgkYwH9XQVhU16AQABmmvwaiJJBKKGk46v4",
  "key22": "RmQrT5E1wWbfZxrvRUTjp4BdsE9ujf6VtMYju5GU4GZyByihCGPJeFxyFw1xMsBsX9nm8j9zFqZPYgi4pRfWRgu",
  "key23": "3bSrREt9H6NfMbidAYwGnYe5GPgqRGg8MyMEqy6c2tfiqCeTUiQKjEBQn8c95h32fhZyB63cfryCre3F19ycPuPY",
  "key24": "5K9U43goS3xwFhQoGwpXfbvg71kyAYEMwKftxN8taxhi5y9mrTgiMsCMKeJA7nrWTQGU5zcY1SRy2mmgMYsVf7BE",
  "key25": "2dJXbNUfTiU9hrzjq2J8WtpbaSbTfUKE1pZKTLby7nzeFZyQEwPu6vKeRdZf3cfDXEBpgQvx11mirERrofLrcVp1",
  "key26": "5x4zywLVLcuqMN6ri1URjgGCoTaG59KZf3ZDHJ85GGb8Jti57Bt92iaELY6mYPcSnNAMKEKMEsbvBPQRwksKrqDp",
  "key27": "5ex72pyqVfnhnh2p8Fab9MmtsWpQenLsCQ1x8qy58pbQme3kVN7rJx6u2dcNof4nbsKRvbKLaEAeM2ddZtdXp8up",
  "key28": "2SGwWmevKJeQUyQNZi8xo863sTU3ZMLrw22TWU8hyDhYnPRPtR6g1bY4myTMjSa9gZqm56aosTTfRQbzPzZECCij",
  "key29": "3YL6sug8vkkfWSooRP6aEBBFwfjPGjDSaS9VarUUkKJjPzMj6D7fsXsRe2Cru2Ym61QTE2pG6eFjb8o6Sg8XqoEb",
  "key30": "dXmRtjNSPSkZuBDNNGBJAXugGjVM7iAHU1Lv7hbHzqiVrPKXdBJykhuQefwRxChTXiiD3QPhMYpESv3veBkeHCT",
  "key31": "4VR8xu8gTvt8yYr3sjXEs8cx1KYWeemL5UatEhQxijFX8nkddDVsMrkax3FFBJhwogfHmoxhHgpEmN1NDhycQtdZ",
  "key32": "2tppJiJ91sQ6mffFJYUU1e8dCrnn7b23yQsAen55hhSB1VqQfe4Gg7MtJC79P5CEtSJoDy2WFk9Dcqx4YoeMXezZ",
  "key33": "4Qf4TPWxH7pfAEx9mfggeavpEwNp5ERaSX4tXodJB6t7uJMeV7L3FYr4SYC2DFqGxN24ukvKGxJEQKN8SuwfZy9B",
  "key34": "2yQ4EW5yAQ5QqRyHW68f1Back5Ro2sPfME2He64XnUz76M94PcT7xTj5Xq28V5RAbcewecBSQVtpS1LCvDHsKwyM",
  "key35": "gtnBFcMLBvgbTC1m9i35yxxbEc1XMVQwry1oY7isH4s26a84SKCvbiXKFbsU6NJ1qTnQs84x5iMndwpuhBC9BoQ",
  "key36": "5XrvPvBzKK387sN9jM8tiVCbZr3bshsLhtp59vFTvU56VeU7NbNtuntRp4buPTWWSTdryhwDBjpaQFN9JLUhNMtS"
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
