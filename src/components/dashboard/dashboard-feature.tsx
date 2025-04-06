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
    "2oov3695mbPGNuGQCxryUCnLEYyPiv9KsW1t7BF8NntFmdxJ53ZxKQMX8QXVuTSSa9Mgxj2B8LajxDbEQGkD91HH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LASgFMiSt1nTZ6RjFYJY1KfyF4EsQFsPbqzixqAx5nHHjmARYm3AfgbovZABsafo8kDanqSErWq9Sptp9zVJzGW",
  "key1": "5cYdpbX2TQeRCVoRJ34eFZ5bp3aMBSHiMFBTHNrCdfdZxkBAQfjP32bQ4uvMVCo5QfpzPC4WgnCVfUvoQGKqEzY",
  "key2": "34LSVeuWNng4DpJyYCJ1yMjPi7YXE69TSgPz1ZjwMHkYW8jtjVcPBP6mWpCmfBZV6JsxPj9TJNZSJTMCirA7FTYe",
  "key3": "4FfAqJKER74YA8ArkXPQpNKaQHtJbSZ3cFexRzL63pvKRab5DU355GCMuoz3PNN84R1oiFurpsZjAzByk4KvGegr",
  "key4": "47boWyuxm17zUCLmWi54JPAsDx8HBNVVDGJytjtMQcizECf7KJtwt3PVh7wPmzgsLcQfUTarHaFaXNdGKq1uU6qQ",
  "key5": "55UiNet41XtnahHa65LCYETdf2QRZGwR1zuAovnv9vU3VHDGwixLktV8Y3usNagtxuQR1duMhqiyk5sJEV9RKson",
  "key6": "soVBUzvsNJCfdWQG4zbTvkRb259ckLYr6NBronUxZ35FSJRUAnMkkTdMrRCx7D4sJsKVsTLr5dt15h5Mx8aoNaT",
  "key7": "5q9P1pCXUdVD5rsFpKbbVL4cbHxRtAahPSxPLdezCmopHyRp3aYjQHPqdUZpLfTngt39AT5beXmz5nZxMye7M3Lu",
  "key8": "3GZiAu3FSWntPw3JEUjpo1fFyMD81ZXZT75Tfv5TFkbpuedGp5Gf2aSGdVfWxHvdDoJQj9EovCjQ7XULvfRvu7z",
  "key9": "SwboSRoGDZ9veLafVXnHR68K7xzrX5m3R9Z8cpH8vYPjwhwicTBEUJm7jELfddF8u93HCRDEHQ1opFCMwnpDe9Y",
  "key10": "4tVktQyJbaeaTG1kMgcYsJhjfmxAgsLuDr7kzmUuwyucgBESSgjegMhrh6cVzpRhhEAyYFfXRSAMBcYbGQBQdT4m",
  "key11": "2Fv3gTTMgBZXKR4jrq7ZNf6pzXSznmf92NSmZwDZ61UbBZK8qnRB7pS99kNaB2jUWEqEX8iHue7BhyN74xoQRvZ5",
  "key12": "2MXceJUMV4oJ2tf5kiBA4XSfqvgqEgDg46k427FXmqD2sUq6ETv1JF6rdaQ1vfmf76NVqM9bcLpr97aWTrR6TsTc",
  "key13": "4bPLfFti4bpXRf9B2pERaPRhybPgFHtiaFAn4xNNWRERnCjALx14entUj4Exo4XQtcTg5cbyLfRKq7Wy4tvrVLt6",
  "key14": "2YQLcSdBPsFDz3x8kaDK6XQughwCGJi9KaPKMW21gd6EQahXwtqugGSqaQp8Pworf7fLaWqFdPjBx3ySXVHgeTSW",
  "key15": "3GuHrD7s4NCvHqfqCzUg9bLNrRRpZSivmJimhsH65oRHikTXH2ZNLBNrmS2p9p9CFGiqpaqkizrTgrRzFWMedW7Z",
  "key16": "4dpELSTKXKQNg2DzhoeyovdpkJAcrw8rwasx2A5Zzuowbv3Atn5tTjJVu19GhK6Sqs7Ekq4dCs7feqcazfvTaaF4",
  "key17": "3EzcNCVQZDiLszgF97DR8Hmsc4w8PgcWhunEMH4KfKNVJ8GKjhTeQnbnx78xKtqC8UEbRHUUEWmNPB6zwcDcSTgV",
  "key18": "4PkdsT5jnvGWtog9aPHzkmzvGBjM3vY76jHNXY3hHJvqNq3Vg5Qw9BMBwp6s8Ryzw5ZCxcf7Smkvh6h7qww2Koxu",
  "key19": "4nPrd512grbf9tpLKUtU5hiJCuAF2YNJHk7qbPUQHRkbCHuPRrzys1fdZFBUTdXUxNz3P61SHQGbGHXhXDTFaZyr",
  "key20": "4PUVY2QJG1kzmzZdPCBWBUsr23FfXRmUtCUXWSkBzSUnEmH8MFTvZwNZyYQ9RghCxwoQUW2hTfNbunWM5mL9haGr",
  "key21": "5qmSmXaNDgLbNKA2P4WCmJkuRQb8jNxYo3nHNd4wyFK37WJFSPhPAiuyWgNHrBwviiWppquH8vuV3qGna4mNincd",
  "key22": "3efHxnSPGQNZdVwzsHyTX4fHoL6peHhGNRSLWhnWZh74zhHENkU6mqVwC5cBjSMHkuxT4rgpq8uUSueD7pkc94LM",
  "key23": "3kYfsNAm3SWGfsKd37aZpX7kidGJTB6DwcUVN98bKWZdwmq41jiDKs2JFofcFpNHAWBRAVXaZrD5YsyX64tEJv7h",
  "key24": "48EzwYrKF5tmH7cP2do7Sz8rcmV2uH3pmb34Dm6tvj94KNEmQ87x5zsdneJuexddUPe5f6QWEWNHgHDNLwhZ2hmF",
  "key25": "3ivMLcKXnd5oDFty6haLFo3wRvkE9RELuJL3DwSnhfC9qC8hMP27A9MKb6s4zeH8Ygvb4zDPiMZm6AfWiC5rV2N1",
  "key26": "57Hanu2HrJeyh2ThLqrJ8H8jVtyjqzoKea9rNci8oXMxZor6db2S77ioengWHc6RVbAEBN5fqAnX7rJqLVdQXUYR",
  "key27": "5WUatoibSSu7xpoBb18o2NBFEVGKhYSo6MUfRS5GGrMicoezK9EUAuVwPgABR5PxYSkyE9TR9XuJE83S2L4sQAo7",
  "key28": "3JDMbFLJZG2B33F2ySsy73zLRCVgKhkSnbh2eqauJz8yigenn58jWqX8V4JgdtfFJekSu1wXfmTRdF2WHKYaQhXV",
  "key29": "z5s8Roj4ehqem344qPYS2ftDyG1L9k2DnwU4j79oJvAyYiKSd7kLwHFUPB1SD32e8qjRzqEXXuwq6sDWNrzsytn",
  "key30": "67iCLvykdzheaK6KRnioq1gGpSTi5PpwnKUWRH2MKJePyg65RK6qyE7knwjDodsDYNzyamF8Fo99G5fNmTW4q7FV",
  "key31": "3fgaradAZgF8B8ztn8AKwGGCZ77dw52veHZsLx2FT5DFnPEJ16pwT1HHbnf28XcXSWAF1rWAyZg7fJjMNYmYnVi5",
  "key32": "5VuDpxXLrTugiAprEsaDcAJ3KqChaLJbFSihGfv1g2Xgm5PG1PRKTSxRTtzKMsV8xF4pGjWMuvVopn3hxye8kr7B",
  "key33": "4EJ2PurhAWLgtSFm7zXUdZBgFjhUdApzbSbJx8mu8kJv3g9DgECsoJU6R8ehVGa2ZkoWQbuxQHrVobD3FNBf6qxf",
  "key34": "3NETFg9Rw5AETyvGFWefHt5wVvNYpNwHABanuWNYWnaHRpPeSFEgm8QKpqbiSyjHsFvyByhEq2zr4BsDZem8Sykz",
  "key35": "DJdNXVyScNbZwDcuBSDfmSUaW9FtoY481f5h3SSphGbcVsgvpCipgDoXZpPNz5aT7JXNgK9gK3tKBMNsGKmXfHJ",
  "key36": "4hjAd64okmQ8rk9n9psXFD9EGTbCwQXkYg57x3j9jUyU6idjtGTaMXFV7KYDrF18DYEDb7uAFcNNCxaVWMLasWcb",
  "key37": "54PtN1vYMu3RKuD6c3TeLhNy4rgThTV7jJU97B5snf2K9wotMtC3jywMY3bCe8A2PBYsSLQq3WtSXMiGD16QDpK8",
  "key38": "WTBSdUdPLXFSqLYzvcBVWSh6miw2GZA5pP3b9i1WcfwFXLNDx9LgkEKxBSHCypEaVi62fbDXS4NFygxrodCkZPL"
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
