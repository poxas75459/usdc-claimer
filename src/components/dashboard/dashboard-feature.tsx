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
    "58r44juba8Ez6cABKkhGLA4q9ghmLg5QUEnotdzeepPWZA1DGD11saxvAoTiV3SGsg9RyC3oTBcpDyrJWjtScjbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57xVuC1euD7YjtuxQH7upFgbS1WJYG7yAkeWKschDEaq4E5nEDViv9NKTQUGFB5edetJdDJU8urXBSTuWPkXL9xG",
  "key1": "5fDidjfTUESCfRLUUEbJvVe7gkpAXmBrHXoqTBzJTXc4T2dyBirYomRKb9QJCi4ozCvjgzv52E9jgoRQBMefwZuJ",
  "key2": "2svKQYFR4UpJiZ2aEckAB1qVRs2antLy4FHYeqapSH5xUtGLxdq1aSmKtje44Q8iYiHXgJwWsMrx4KwC7WTGAfaT",
  "key3": "2njZirPR8neQoQV8hv3AyeoperngHD6kYKxvcqdnNFEukFukGZxkK83Mh6d4snNjfZA79823T3Wmkki3JoyKCTCu",
  "key4": "3dXxvpqtfngjvEK7Sf8G8hyqPcKR448VFJk3uQf46dprUr8GGVmYdQLZrXTkfyN23F3Md5dMJjiz3DR6K6sbTNh",
  "key5": "2JWxUkvi2773Aj8gatS8WVvbuWizdWxV2PLSP3Nx1cXCx1CMoAiVevHhviTMtGB8vLqf9dY6831mgeZcG8X8fAJu",
  "key6": "3KFMQN2TkbS7EgJECsNGyMrxA46PG8CVXFi71BNtLgh88Jj9QXvuzT1W6JWNrGGFeVgMPjZB7qZyxPigFpkXbBLa",
  "key7": "5CDHRQyY5yPBhxSaN68P8XhzGVpYw4sSU6p7JmD3sSGgzbdNiRaRQ8NuRT7pcvRKp9q7XjxmdC9zExsg6hhpy5zv",
  "key8": "3eW2T4w1UNReE4jeshFLraR25XwCWCXULv1eTXtowH1D6jP82cpmteDADitqN1qjzZ6D4ssPnQPX3fgpXDMk6pv4",
  "key9": "5nbruZx5ZdZ2HcMeWyG3Uep5QEA47ufhdWP6PWohXzENWgtN8EoF5qaUxbENPaFy1TSYYEBVKfTHQBMtXDx8Gd9s",
  "key10": "59t5nn8n6DmJK652kFDu6JEdJVB9xM23RsZfufrVRXxcKKL795co986RPRsdqb1QkvtQyPxhGtmvWsGGRwPXYkQp",
  "key11": "32Jz9KU1srMvqHS1r3ZKF6NCixKbupkgJpz5jpbWWJmjKY2EPxw1ths8W7c76a9EsSwnngaoZ3HFaxCSoU24y5b8",
  "key12": "eQfw9BXAvZ5LTNbKAjFhLXwU3pbCqFFah5fshKxWe53cdrNfqEVSgoYfJXatCxkweR4MAUmDQgz7L7cMV6ofQn1",
  "key13": "5oURQ7As4PCB85XAVxHAGVSWsbGiShGJSkRt7wMF6L6i5SJnp34bjknG2pHQvdBLKrDUC5hARy6zWQucXnyV3TCT",
  "key14": "5BFpDp6k7Rk1uhBh7NLW6LieDCtxBFVnV3ivgxBYnHkgW3ufXwmLQ6E4JTuyhcsoS145Jpo2Pg6ejou9VPJSTJnX",
  "key15": "gWnormfXg7oykeDRKPBBBpWaPQfVT2ETRPybbbsQE9fVpjJuoj2c4McGuTmfpgZSRi5NrkHAM9brMdKkHH1ZY3v",
  "key16": "4mww87FbHzPzMSo7m42NCyKFm563Y4fdhqcdssLHqSxZgV3C8TADpafnTf4bT7r52Qfw8A8ALgj5Kj2yH634MEiJ",
  "key17": "39x5ePAUcnk7Tgox4gq4ABB59dQvt9XsKkcGSX671tdK9v3vEzwui7tbpvNqP4y2JDcWDMAxHqJuwrD5m15rAu7q",
  "key18": "2DskMBRwbiyCFoqKcG2u3U1azLYTWZ6PYtXE6YLSbiFTU88X1V8xWRCG2urwtB3WF6irLUJShhdqRbTt1k3Nrbsj",
  "key19": "2deE3jxh1QWT2Bv1HZ1wwDuG8LfXqvTt3dQLzXHCTQy3KpfJWv3oZsiLhs5t4P9GXMyU1p3WEZP68rUwmebahWYa",
  "key20": "5VHgV9tyyezp49ipfrtydqGZ4qA9JtL8JugYfkN88wAP6atLTLfRdwby3wY9q1L1iqaeg56LT7PjD7RqCUWQK5WT",
  "key21": "5irYz1stnJSE9YYrTmbuaPbWF7BMWCamgfHPsVB5S3FgcZv355T69Po5MAi2JQ7hVytrqzV8EnxG8shPaT5kZACw",
  "key22": "6nhPzG7PUdphimfvpQfgs6cNQbAKVMzgkap7jvpM4Mmo3ZwLMPa9uo4Z7Rn4EYPd1hAC8zyMd1qn4x6R2wyT1pd",
  "key23": "3yK3bYNNar7F5uAxr9UJMCwN5K4YXhUpnXcPCt2FBLYkXBbcCWvaS2Hx559ysEPWHeoRevPqJtggMA1vNGJQWWRg",
  "key24": "4PbnkDYoXW45RxcUo3k8ytjuAMVdyXAj452UJidtniErGLNXMMgUgu7oAatrQJiADTyqnp8vDf3QvX3DP281U9LM",
  "key25": "45GYgvs8V2oSqWuwqZHBQZf34EM3vuzUuhPTjNbKH9eJey7uXXS425jJVPMu1epzwDANEWQe5FE3ZFPuk7EFaezW",
  "key26": "3XkZDCZyZj8PNTa7US63CLnegiM4UJWevoCzWGy2q8ktHkVw1iP93dhd5qRPTsQ43tosWGPDnn8FSJVxowRqVAZe",
  "key27": "62ubBnP9LgVBqZsyie8N6t9eYZnsnqRDnZ2noBdVC53HxnnJvC1qC6WkKJmecokNH8vCuNEcsbXEwqhusSdKnkFv",
  "key28": "2wJbJxsYhLJH3d8zroniJtf2U7yKPPFJSoDywn3Uz4T9btZdhEL7sWA79XNnZacUdR5nwRGSGqbqWx23xavSU3jK",
  "key29": "665n6w22z3fEqVsQYtn3iNeAnzuky6Jokw8mNQiFiYhEUousvPLpHzqqwsw3D9QNhoqeDFotz6nmcwKbq3auKruq",
  "key30": "62dFTfWcZ9pDQV7EbZEgLpDnxNkcS5GWzzRtkr1WPXduQmRiSvr6D5MX9dG54Mp1CQRFgR848A8Bhv5oZQLk2bKP",
  "key31": "B8z7rtsKXDf6mtVz8xytTTsKYDzwYW2WKd9wbhyMDm2jTupSsYUfNEXPMLaeqZubRaxrWhdyYncXbqDqqJtG1J9",
  "key32": "2w1wmZ7x1opc51iU8smVHQBsMGXUW7muqqvtrqGS3Tnf5FpnQWNaNJn43ArgxBRiNk3PJFM1Wyk5XUhPZgqin8Yt",
  "key33": "xmi8zp8QrQ4kB3n1oxrSEHo8Re84NrunemmwY8U4hCASsv8Ecwra8Hp6JFYekm5uzrDBDLRDcPGvgcfeZiQqvPu",
  "key34": "4aPPetzFe8NFwJ2DW6v66SpL9omAaqBMYy8h61o7hhnn2pLRmspYR39spTFdBztKTQ78YzTCXiPaGLNuLn7pwpb7",
  "key35": "5f5xj2CEAgunwgxKFbAbFLqs4TkpFhFPwvBnzowbJKRpbJ7K8FWtnj3z4TCGUnzq4CJpUft52Mmokgg8ZK5cT5qM",
  "key36": "u2bHexDa8idPvkwuBCBaH9DN2R31PqkhaQ2vuiWS7wccPsaRsfB2kBkeiAvgUiJ91nKPzuo5bMhL4xku1HBftHy",
  "key37": "23V5ejNZxo7Vi8aumhNjSHUZETDFrGmmXCuB8SxxnCaywRVWcXCXwB5fUv1qGVykMs69HHH3CPi7rxgNsc8qhTkx",
  "key38": "5m2obsh3xwQbi8U2VmHC9nBgN8RAjfQKWkN2Q4cxn2Av2QgRXroWLgDbVG2HGRijr1QCoeWW3J2kERQe6bES3Pka",
  "key39": "mY2Lmneq7pYxosW1nax4f75DXH2eFxaKEigMrprbwBzuHMjJuoVk8qEDaSM7G13svTFk1SLcgCuR7g1jeNcPeq2",
  "key40": "3T3jW77q2uHwaaNUpfFjPeH4FVnPpmcyQUEkW9DQwo9LC33ZcYJTLkPABchDBnLCAj3SbXPUGvz1WZdwrurE11u4",
  "key41": "3qb35UqdadgK1tQKSiCEJN7UQpsb7u2BtHbxU4ajg21c4Z3yMQwo3M6P5mG2rEj6Wcvucj6aPb3ZHSt5Mi4EdcGC",
  "key42": "4QyCZjrr2ZvKBLKkazHTb9pYYvdneZzYMhrcX7o1j1NgVnmjm7AJnCpf842gi37F6TZWZRrSX6SoTrJEasWsxmSf"
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
