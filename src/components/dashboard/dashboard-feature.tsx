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
    "2fLPrnXPVJUds9CC9P3J3ZizXEP5vijXH1dC6iUi31eTNm9FvbPZAUFGCGvC5Rm8BLd14N5vDotVUs33HhT4qHPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p9fLmpr2Cd7FkogpHsmExjFASHaoSoLG84HaQVXszJvyQQVrD7nsZzAGjmnGSDC1zA1rFFPNJSM34vAhpFjiHth",
  "key1": "94udqkgRPyU4bxFXoT7edtZFwVZS5nSa7KWEyzkkMPBFKF6gNBqbMHqiL7AUcY5cYcszW9dUUS8vmjUd62U8KZD",
  "key2": "ZvEUjSpLpC16kKTjkQbULy3LPwvh8pPb2CfQnETdpNwBhqMTTsSp8XS6JiqsTrjHaT5HxrBQtF2Y9T518YBw1a7",
  "key3": "5ZrFoszHBcFDK7oFHeP3gkNsUobTQYjoq9zzFqM1gF7wcSHoqLkD18cv13QRqekB1UyXHyxJ7GnrR59LUMmdcEQ4",
  "key4": "2dUZVr9BLvcr3w3bDc9TJJmBriyMJjFQumaGDD3hoAFeVRFd9d8iiuo46vmjAAqioTu2Zf6rQiPKZfJPL9CpBhYb",
  "key5": "3PboReZ4jnJUASEJng2STwYRXDD3vmggpjGnKDxDRxwapY2JgGes3MuZfK9hLGCR8D6TNjTmtQeXn4boutQjuHK6",
  "key6": "32Hc9oErxcG3z4j4zixdTTWjbBkJchQHAZDRapHx3PJzg4Ru7PmWEuMCU14d3PrX1xQkhrq4iswQMgd1tET4mgZ3",
  "key7": "4Pu9UYpGCdYbYffo8URKBhCUesuEjetYTZ1tXkao42H3hNiwn4oCovXuxa55aGeiEEFJVeq8ptNotZoq5EFemLEQ",
  "key8": "3PPuKamBTHTQHvwQnippAXoohHVUJaPM3xoGVbLYLGjzV3DUzpaWm5txdfMhSahoSjS4yn8DNwwMVrzVjffHtqhz",
  "key9": "5sVUNx2ZLtgo39eSaWNvNGKFc4aCUTgwrjSCoBPDLJ5SqMYFGvXGuqLvzmFENnGAmXN5TogcW1CiXQPHjj6Hzyt4",
  "key10": "3YQyLNNUymJVAbZrA9TnxbTYCnPEyjSmneKMRXTtWE2fSajZcpN1R1rwk8QYxGBZjx7WHFqX3Dz4yEeRhea3mgZb",
  "key11": "5YTtAYTU1jWZMk8qKAbPB9yBAKxjHi9fGtFNzUhRm6sQbc8rHvRP8SF2ZQsH8U8YrjpENB2Z5SsmSUAfsKxotN81",
  "key12": "42vV8kaA9tUgbHvN7A7C2ReiVCguHHhyCSjnukNZDrNBDrHrc8cjm34s8mQTQh8vabvh27onaua9ggb51oC6W5L5",
  "key13": "22c6Kzv3cYHTKwK228wFsj2AGTXUcKR54vcTtfy2c39pPbLStaDMwamihm26pcxzyTre2iT5AK74VvC95eABuxT7",
  "key14": "5kErfLwPauDgBRmJk2zTMLmZKMji148qHWzn5JjRqKhSdmQyX3pLR6knhFLvAFV2HRNqhndrnnDbqV2LfCH1b76y",
  "key15": "3dY7wRAgc4V9vsyEhA84yJYSPbpwCUQVvhGoS9c1GvoQtQ1FAuCJhNHvYicrHhnz3TgJt9ZE6se42h7vPe4PCfYH",
  "key16": "4jGK2Pm7RGeJ1GSwCAfERo3ApDC4mn2iSrJxZArT1kqUH2o89aFqrgu6bA7j5GSGemy9FPFWuP7rQqvyKmAJGDG6",
  "key17": "2mQh91QpCY4A6Cy9yLe17SeoQggXhiNBnjpNrvAGBKf3kFAazfEUrFTnneYVLHbsSbButKQdKoo2GP3THkmBxT57",
  "key18": "39mxkdZj32XCWLkVM3mdEuCXAwkMqAuSmjcZhphaUAaUwt7FgAi3hZRJYvyfs3kKcod4LVMFCrBoVzcpgtjsZDsQ",
  "key19": "4EpcbFKhh5Dcq7WjfNSK3zKugDwojX8uK3iUXk9KcZR1TNcqYSwphLW2rzwAAS3aqgfdCgDgDddwj4wVVF2qcvah",
  "key20": "4U2se7Tu2n5VPWnrfHyGm1Gsv7Bvq9HNa8CnFkyim8Rpp7UiVK3w4pRkVuhGkECQQDYPvjg71TAFnRdS8NeB4r2q",
  "key21": "5EHBfbELPBiunUuX3FviU7KwsUsqAGp5FjaamjG9LC11WbydR2hLCS39or5FeAXF9Cs7mCpqfkRUgGnwtGKGUSKh",
  "key22": "212DJzHz4fPdVaGjFfbbXWbs9yGs9dcEo8VXWb4x7NFveXM7nw7CYcrJpenvvtx2KBiZoRrGPha8wbQ6pM23ifuq",
  "key23": "4ASVwAyccsV5UibUrP2vFvMmzKAcnQwAjy2e3aEWo6aLbq98xpoaWEjneRirK6D8UbyeHDrvK9pLLAWpR787iQB",
  "key24": "4yZaSCoqn6vczyc9k1XvnVCduJcRoHm8eRqJhEkG7Px9TAoPB5TyMrovDMmHcQWvL5WSHo9NpQ8MjXZAF45F4nxL",
  "key25": "2V3Sks7mv8YDysuHYkfvpSZVMfdE5tkgELQvWUmUPhVDCYtp3PdphBTdxyY1vha2mZCwxQrym8b7BQq2v3vejQtU",
  "key26": "2AiFxgneWGkLTPjD9qKZG5yiaJ46mqc3jaQphBJtW8M5QwutiQVTjnzevYAF7sogBtDCB4kTkyyFjh2nFqmqXRqZ",
  "key27": "4jqVxJaRffNXDZKMbth7SLrgMaBqwG7bYqZ32D4pnJNyu4yjuUs62Pgra2piUM8CEcN6uyB5nck1ip5Gnck5vVq",
  "key28": "2foDcsVDT8uXJHb1nYArLzRqyBphYG7TgdNCPmA5AT4FuM7QWGuHpgsudeB2B8YdGsc2dVi74DvNhphudtSb96Kx",
  "key29": "SXR2bTa2RpKf4kDSDbr9e5xt8BdwwC2wZfnaRH3vQ5ot9Y3G25LdU3nP9pnTtcdHYRSLGSCv5BtcSAHbisiAmHe",
  "key30": "3nciubcgh8JekX6jNhXaDmkYtarxskrUduNRhDxSkx2NWE51BbuZYaTaivJ5NvSvdtCuWdsBb5da9qbJczAAQRGo",
  "key31": "36hGY321rMk25z5fQsTKtuSiqM4KbP8nP1VxodXcyYfvaCm99hsP2nCBF35GUdA2q7uTsTJe3iyaXGeFbFNdydEi",
  "key32": "5rg8j246Z8HRYKZZ2yzNjEcFQyXYiMGyYjdERB1CQrCd9mmxxLRJkgNsPuzvcx2mBGTxU3HFx677fBcjtP59BpTX",
  "key33": "4CXWQaURENEDB2XNzsjEixX6rr4cWc73ZYSf42TF235X4mndt2NVDMEot6RmhRn2iEftDFm72565Ft4pnjL4s8G2",
  "key34": "26qxQMWqZDLouVMuDPmYX4hjd2xESnsA2PGzSnkNPByvfbaoMo8aGUQ9sGUbvwpko51NwgWytnYBQAgQbt3f52Pw",
  "key35": "2dyS7Zd7gRBEDQs9shB2rqfH47ow5rMZYsjr8GbJhwQcrJ3ooMRfK13noLgnn6rak6yWHMPbf6qURBjMhADDCk99",
  "key36": "644Dzb8Zi2nphqC3bwXYhDyaVinVRp5ac8D5aWt9SfyaVVbVMiMFMTYYyWkyFaEEaroN6qxBLvEZJLv9n29PBE69",
  "key37": "4RqMn2CMCRfrJdT8CmkwK1KDY3TFo21vuFDEcFa2x63sCVawvsTF5x6Pyhtkfc5Sm5F9kxy8ofxuwPR8DFCxxWrS",
  "key38": "3YWT63qGhuW9kDikTJHYyPj7h5QhE77ZTEc5Q7RXJeWSYzTDAjUEjhR9Bw7RffgPbNcJsv9ra92nN2XUrferQs6N",
  "key39": "3vrFMS2Z1fvh5nwG9FAtnFbscdcsu9BA7tm42ByjycyqZjPHX9YQboX8g6yTGLjuwJqYVXSU4NYnYgzCECf3itEM",
  "key40": "5XQPRFgkY4HQaghGyN3rAXbsLfhoCkGBSAMf6DKyEeWna7XTgYGowue8oPGpgPa1PsKqAttxKoTswoaFCPb2qdaB",
  "key41": "35T3gDYm78jisS2mwm5xYKms2yoJNEU1q4EDgT2kYidNA2mkn1bEnQScEPp4XEeESdCyXC8PHvu2MpfUvpCbEbbw",
  "key42": "deK6UWGKeCjgfyXaWE38ESdRDQZkk9hLw14Ai4JUpnX7DoEmUBA7RcoveuTEACvd8KjEyAsf7PCPeFNodgxFRRK"
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
