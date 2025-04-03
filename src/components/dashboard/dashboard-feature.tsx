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
    "3kQ4oGwPPdEtas7iKeSTMLJXKxyhDyTY6cjLh1mwoKRE7Cb6jsr4to5vhdSBEwzdAexson6byycqCGTCzVabHvGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qc8iBzQpAMjAiVfriq3ZEnvVr9m5wXjTKPStWzn2858dQrfW5jQ2YsqvL9dyftCCsekw4V8Mv7odkBFdsSAqVzD",
  "key1": "481MxojjZWR4Wf59xqAJQJeDoUmoxCzw8a3TwYtqKVGtRje9sfVRZnMdoJsfQyQFVgUMQ78t6hei8wAywHk7xxM9",
  "key2": "31M3Cigf67Hm1naQHzHfQ4Co3D8v14W93ErttgSszH3aT1xRZZ1SCL6U6CWPPf78tmwGxKoSkxFuCwG8bCkHMRjf",
  "key3": "2zbFKtHEzC6NQMH8kdqRmcUdAP2wfDi6kEv86Jsw52jrBF9hz1a6FQMxcZyv622LkfQdSxeBr8vux2CZDGVyFN3F",
  "key4": "5vTwKfVw6H67KaAL5ZdF8Uszp4Fz3tHD8aKHD1BVXy8pVdVhMXHdcvPmWFTn3SLPXUVvkYZ9oAS48b3gw6j9K1HH",
  "key5": "4Hj8bKR3BYfYw3Ts32kiuYTu99mz22upFNmXrn9JHaQGkLeMqcHphxXHEMaCKcxpJg6XDTtCbyx38hVDV7fgobgB",
  "key6": "4qS8bBqzkMnpkSK7Dfb6JCjhvAwpacLHxTMYVztQPWNirHXy4XFE6hQNFskqxiRs9VWcJyUomkA9P2DZiCSrDt8U",
  "key7": "4kiHi8h1M2HkLpC5TkUTDsvuHXFibZBdBdhzVxS2ttCSRmPqqS2Kngi4ebzLZhtKYC5mXLWPMjRQAVcN4qdGa59J",
  "key8": "2ZuQzYS8AQLaFx9LtbmvM23jKhYxXCW6P9TrYZDKBT3k2bAZVNUhVUVbJ8E7srWpz43MdPcXjS8HcS68q5FWPfwe",
  "key9": "5PjhnjhPG99w15k52cG42hTNaeoXVWyVGmGpZYYxeMM4otLcrezDZVhBxR8R9RG24oC4WpKLKMkvfnUEkaGxEZ9H",
  "key10": "33bKqnqbTxk3x8weHyUMyTKhG8k2h15Jv5im7jpZV77b7TJx5EDWPmRfYLi6igKZzroKvfA1sT8FLLHkveNgBi1X",
  "key11": "Puv1NmDqbRW773UXtckdanqeSYuCN9UbAecTqiRBT2wGx7q2AzdyJFxQcsGTuBq5j6wvYhiKwkyS6YUCriqvMzt",
  "key12": "5uT5ZB8zkV8ZV136sJ39U3mRwBTgocfEswhTdM3ZZDgkNr26bRLk8VBhh2KiLnmMRWR7b225HvvEFVtfR8vsJ5kN",
  "key13": "5qMrxUvk1tNJ3CHpZHS3Xi6ZXYTWYyEuSXRShax4cYathCW3Dy6gzwjWnxprrPMnkYYbqyCCmAtmqia5sXE5MxQ3",
  "key14": "4RtjQGB6rCUBpPjxLvJQoYjB1fCF9XjqSanSSfR7H7iJCYPPpJfSJkM8fTpm4TeJiRBa3PHNDDnboVudtb6M9E6Z",
  "key15": "7yTStzfn5MoNSRL9FPiESLZujPp6tCZCeEaPWxesqkhiNKBotgVB19xJZdtNzB7zXzQ2zpwhUytzqpGeBvVp13s",
  "key16": "5vxHUTnPa3jYMCZxcy61JfNoAxMPqSWZFQd68s7fqSYBxFcF9sYo89UtkTnbTB3z38oJWAr2QKXDnn6ezAupCp6R",
  "key17": "35b3CrsvYNqWbgP3edXovVpZLw97HLC2hCQV7XLfVfCdxvKuyDnXdKbPhRcqj63sM1DnaYXyRVVW4xqwZd4ZYdHH",
  "key18": "2dLdBWeXTdLLnWFSmhF9iZVvHgpfw7Zj8jUx9kdLKwVoUEjLQRm2gpbr5iYYDvrsQyM9TYpFXghN6ZjnvDWtdbGP",
  "key19": "3CxPMLjyZswXG5P8adWQzTFFi8xZNKk9kERWgCu1USsbavNs559AmY47D7CHbXYHiwMDhcrdp92GYEKuonBxxhdT",
  "key20": "hvTBbLjo7AqAQDqjJcZDoyues9q46MoCjvxUKyJH2n3YfX6AMRsQvahzHSohQk8u5ATz1Amzn7DyFgcFsQsLAuR",
  "key21": "2FEtbVNsSXZ9x5SdMpMo8TShKXT9iUueCA7sTXXvyoxeQj78fnHWbpxpakq6mHKLoM94W9NYRwPqCULxAVnQmRox",
  "key22": "4U7VTCputwNsQLi84UrUQvRG8ZJayyokLtGwzcQwqQU1zgqUC5eiQvnsLhJt54WD1ecSxSgWdyg5FgqDqmmkDDZ9",
  "key23": "2t4HraZ6JTBGvNWscTBh3osAAvy7nMESQWv75rwQiwuKftDiS9EJATYkzvouBau9UrzaaJbwUV6vJBjJj2oGFfJ5",
  "key24": "2UqEeSY9qXr9TeXqzLasWp665fp3gZEVN19hfieuyYHPFRuzvWv5knRK3z5opdJDuRY1ybFyQj83VbUV98La2EvF",
  "key25": "2meHsCiVM59cmgmZFuqRccb8DSkqqGDxtzSjkdPxEKriF24m65wU2H5GRkFywKtPPVq5ZTpSYVGLjYryi8mN8bSi",
  "key26": "5YJuoXfWs1A1NrHpH2nzEe2LHWakMPkHcwpZaPmCamhVbstRyfQRiEXi7WCcNQS1mXSMCumzFUXY7fTLGDfSFF4m",
  "key27": "3iTUqMCEo25DWLmVcZBiNzMeYSpjeJMpa1i9BxZvrrgQvaYTVjStiYd6LDGC3LYHvciCLW2JDSkYuKffcmjrcuZ",
  "key28": "2SYucMvXDkaTCJPEBP4URcMKNFbuXupJjKM2tVYN1N8e53L3Lek5SJkvAfVJhFjbZ2juUPwUf3VFssvbNxZXHxeP",
  "key29": "5rtQZWAwFCLmYYJ2bTcYHaA84wjjALRe7YupR8VzaRFP1trGLJgn1L8wvi1xkvbH9FGMzmydBN2dY5wsm1Ltnk4x",
  "key30": "3G19Ed3uCKtf9N83S8Sz7xuNJP5NKGFSVxz7xDjuNpVCYLCwXNov594K9hvw4rtBmpMLYbLTM8xXLjhgVUixfKin",
  "key31": "4dzAawV15TZHQEbxWjZHCfkNgY4Sw7XB1VoSy4oUhQMwyp9XACvRvGXQsRLkwJK6jBaCGRUrcBJtk4UpaKNJNAty",
  "key32": "2kxtNFjeuBrenRYSXXayz9yPQiczmUcBDW4DK6F5emVTsfhNncvi5PU8MoUobejDJRYZbLMvWrmPjVNDhptfdsFB",
  "key33": "3xPE8gc6ix1FBBPZ4SkDrcMTqmBa9wVThYpx7YYEKxts7x9thUiYtGANZ84gzTo6eCXQ5R8oet7fytbWJtfZmsEr",
  "key34": "2B8k4GJWaVCEBJs7HBiYFJknzhQZwq9oKeNbaJgxTMpMhHYhyfSBu6PhiUv92oTdrgAuUcjfKLKcrgQXkQ3Mk7RN",
  "key35": "4MsmNCcAW4k25RXn9cs9NAmhhPF7hde5F1poKiW6keXQZRZAPoTUBmnbRq8bLYPsmxoJ3fsf4md499ZFSTUoS6rY",
  "key36": "3WxGGyieAyGjq52WeLbGQtTtW4Rj9bfbwFYTdae6wsjac5V18tZn566gRTMzHFTfibYmDQvXE9zdxNcGW3quW3Yb",
  "key37": "3U8EEWpHhGSAToKQgxgqUQhzmc6AUWhD5Bnh7fq9qC1jRSxF9L3hQTupMZaDrdAGSj2y4gdjQVFMQN6duj7MUXgM",
  "key38": "dufP5E3TGH9UjkYc2z4gu9WcCwHrTpU9FNapE2ZPM9Ce5pq4Nxb7Z2hJ7QXSSS5QrEGP7WvCeFa4vfy611K8aH9",
  "key39": "4nCLCMTFGLwut3ePgtkntCZa1f9g8W76nPDemstyrNjR1M1LKYRi1Djrq13EXpyWeKBqvgkDZTJWCDnzoqzzi8Fr",
  "key40": "3FdQ3Bu4yDDiyZ3CXfSTue5rJjjrseVJAUDxtpJXJripRds1rUhfjTz2V7FRGYSvcwL4btcxem4uPzaKvLLL1DQJ"
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
