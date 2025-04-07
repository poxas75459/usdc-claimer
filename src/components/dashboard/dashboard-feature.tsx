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
    "4wa7PgSBFhhj4pCW3h9HoTXo1hnvFWJCUNk6acyb6o42Pq3X49Dpi9bk4XJGG6pp7LdBpKhTJBBrDfwT5wawp8Vw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cEGrf46vcWZg43dfwD5Tcgne9MPk4SiZayVx5ApgeFZ4iZBzCZby5wwmQVnJz233S5CyWCTfhz9PFLFJJMq6EGi",
  "key1": "3y3o5x263ce9VVgofzMpBMi4HWHkTJ1gAYcCEy8WZ2b6ChZtVhEbeRjxJLniHf2h1od4gpH3LScG7csPzyHT5msb",
  "key2": "4Ano4Zno4pzq9SZYvarBKVxricQAN3PTvPpfgQDMjzm5oFvsfQmaEPxQ65YaNxarZAdCkYyNmvBeVaiSJGtXeZr5",
  "key3": "2H3ReAwmsNZmEYBsfGH8Dq9S4ppJQth9bWFj3Fch77odZyBgtNFL4FnzzsQL8CWCXSCfedCnk3kvxqVLZd9TBkQr",
  "key4": "2MhmcP74ChsaHN24Ku2xgCsHVu9cvegnN7mkYersdfibhCjwocG7CcH2Pb83aLSJQFAkED7DwUjZu1ALJWMCvM5",
  "key5": "3DktxnveAfnRpHgKVY58ACTyAJuWBFXLEdtq2T2Wm7x5V3yo5U6Z8HksN9h7EFu6Ez9cB6KYvwHLuTKoSDhH4Z5T",
  "key6": "4ZSkEL8c3DVQHdJeVGxmxFDmrLSVHCuG3Cm5Dsi971dvh4BMkA1cXV6CpQw8hTWpF9EiBhwnNiLbkxhXR4n9W6BP",
  "key7": "ANeuetv56stCsZhjdr226qPyJVoyPyPPF2gW5xKhuJvCAGZ5qnBTr2QXzhkpwqnp8iErb1KJNpAn5AUqREod1EV",
  "key8": "2M6z1MjZJzJHMBVdVjjLHCeGF6KonQFHN7GebZGnuKBLABrFSQ4jFAEzQfdgCELahTqdNoYSDmF1kCiyMp9hKe4L",
  "key9": "6jz1UV8zjAEosGpo4qqjBXSSU3YR6jNRRdgmp2aJrTqLry6i9ACwrpMT4zhMumBHTAbMuxPieDRkQJE7PRXWDBz",
  "key10": "3zJe9P3T2iWHN8gmfstXnpisBs5JRisPY7CNjqktUFzd6j6FENYJsR5k6GjKfSqzmM6WfWUAhhhqyUQ6Q3CgbgTh",
  "key11": "4rbHjur3Bn3oNSi8bt9qmja5wL2Xaxe76KSLhpb9ZRrPSpDGD5u1b6LuKicKapZDympWMrisxHBmBEtHN5UDf6Kx",
  "key12": "268Fs6Ndp85pDUiSyRjmy15Dnpg7HsEKP8gyzgBaxjTbJG3AnKiSa6YnR46PiKSDKeeXPV755dsHjBjvp15HdUvb",
  "key13": "3aeeg2Ban1NhRLisU2g1KWkwF8BR3ZFKK3t8HZzvcM59j16jKq9G4Z7wNgyz2rsbKrUrrLBLe3iAwm5TeNHzgUmR",
  "key14": "3agzhRMbRkg36RcymSQtXfTUiZu7DUYTcrfWUMYHyYLX9SNNqKj9kaUTRTREXUbBRs3oJtneg5287Jj746pRLXo1",
  "key15": "5FuxJLcmjbGwAT4Z3igeJteEfqeUSv2AQPpwL4fWJwMjJL1exrHctzucDQiYek4bTNUqTa4tbJ9Z7axJacvFPGvs",
  "key16": "34MitNM7oAaTGrk72rYVSuyV6Gb4iFAPFgJ3J15nAEeMWERE2jyyTk8acVYWpKZAtnQQ2xicUSW9sYkEGDwoKckE",
  "key17": "KJ4zJh4u2bM34SXEdsEmwWSuQRFx6zyZNyzfouf2q7QtSKaGka43B8ybbDAEQy39kESnZSGHL2y4tyafbZM9bY9",
  "key18": "4WDGBRKFakSEqNBQBkvLm3BUBWjhzEibz1iRPPChjYKfJwcSSQMjSwxMa6QsBRgADATWiEUUHUHqdSXNn1fLyGiE",
  "key19": "5siE9imCu91yQyH3wFBfJh86H5MfTN8kipjAwUwvNGFu1MwpoyLrxN4tTY2JPqjmUb55UrAU3uKMJbZE1yDs22Lj",
  "key20": "5rioJmwsZ12imjg5gn6NYpMcCbRtBKpxzwaAkfDjW4EYR8uapoafWHN3XFMaR9T4nrgXCMJYZvWdqahMnwjoefuh",
  "key21": "2S4VWW2288BtYekonpuxMxKVuuZz2KbeeCzpGf49iYSZ5qJWjW4EhQW3RTxiPfHu27DHmuFD7KokwqxEYXKNqSKf",
  "key22": "2czYyDv1j6ZXx4UA8um2NXKXMqFJyP5eL1fvyiZTGeBEAab6Z32Ms5UStrKf1aXsbf6hEJBPU7F4KkdTQ9pzL7pY",
  "key23": "56r7boqRcEoGuLbwEX5V1AfbkUv6SkiUvVYUPs3AbbV9vJtc27uV94JxdXviidMSojHxptSjepfbm3FUa1pABbbY",
  "key24": "5TwhPF3WumVKFd1YchYQY8nCMdhHAcz1T1vAAGXRogJt4dH9LF5A2nDmHBob13R2QXdQHsuc3x21aPLK6QoFeiWN",
  "key25": "4axdqEGThdhajejdno8mFqyya6hm7zegJiGwHQYgmRy5V6eSkPRwPD8mjEwBf7xdSUoxWtuhGZXpn7EeWywYzA5v"
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
