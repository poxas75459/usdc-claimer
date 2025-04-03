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
    "2Mng7K3sbh2HRCSbL6KF8BYnXN57jXFXRg9QaDPxjXitSqZSYCKrFZcixD8uDoNY6VtEkxfJCcco6zRopgsC6CWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jdphhBvvQv2qCEBJqMpiguCJ9FmyBQUPaR8mfAwFbMsHQK7ykxtqzdudB1ma26JQiSMeEyq7T1a6aLYDBsKEr2z",
  "key1": "5uWyKxY4Y4EdZ6Gy4ApS1JbpjFaxsud5x2c1nDhVQKjf5uftDzePnNgr1KT5gjuEaqhyUrMxpgBRkTaHgRpB9wAs",
  "key2": "421nDiHsQEMTj86h6iXv6fNPZnZ9iMvbBXLDyQ3bCE6SaGQUuDR9J8JUvWjXBhz3toXRZvgKqbuQXpTVBHhVv7AM",
  "key3": "4HUpQtwAr3wBsgaDmDvBevNENqQjCHPyGEQQEPiwM2kdtLCCLAuQMzN3expVPXEcaTY8CWeJWv5Cts6ej5QfXFwt",
  "key4": "5qAecdhn69tPbNLrx5UaVLVprinRG6JnVwHuUwQZwVLLpeJmByWmBN6CLoXNATFWJhJZUsngcJKorCADvx4b7orU",
  "key5": "3gWcUj86Q1vHTZ56wDDM1RFzZ5EmKbJJK974uTTkYJu5rWEkeULx5m6Z7GC6GtEoXK1jkCWG1eTevXkaxMaKJrFT",
  "key6": "5MfWmExmGvzDSN8oTxV9Sr67o7fx8gLvASLwkmGnnzcvVod1Y973ybos6rwVi9NqnBkAkN4hfKZvZUJbzW1zJwTN",
  "key7": "3DUZLRJsUibjKbtSJ5UH4oVqVNKMwRfsrfoFqtMvjtBiUewxRQCvsjzjMg4X2WpZkGMjEPNQpAVnS7F2cxhwgnCi",
  "key8": "2Wb3Tfyq1irjB2mU6mvak2H9c5HCDqqfdwo7Ge3KypbdZWbxjFcM8B9SSdRu59Tq9QGdwtTtUQcE2hVjsBrhpXcd",
  "key9": "52LZFQfW799qKxHzMsWsHEZRtvJyS14dVk7L3U7RkenkCU7ah72oPBudSzjis2FEx3VSKeo4E2pMejiafu7Lz9aY",
  "key10": "2fWr1YwZNwYZem9WXHVhmoc3eW16keHBs31AxPChehkazEjFHn6XoCJB6ZzZofZUp3D7i29ywRdLy6NHSzUnw4wu",
  "key11": "4xp8d2rsFzuexQJX83yzHuMQczkWEAy772BWMDzr8CsDdzxJByterfor3ybRJ75E194ULxhF2t4WK2U2vesyNrwS",
  "key12": "fJLssYs62SHFkLCscguBv87bwFek44rLNVcP1bNUdRgCqtf66yFHAPtNKcbL5z2tLGMxkHCgF2WCmbw8tG9Kxgx",
  "key13": "38jp57AMeX7ovFU9brHJLPrbWCUUjx6ifG9p7N4NgNJkMwVVsEYgfaprxgHr3yMMtBiFNMaWf6WnWzbAWYWZwnEm",
  "key14": "2oDXrYHKMCUbPgCNGY89A58sFeYBpuiCXD7UtgaAHNbQwT1BfVig1UhmUgTK2Z47UDVwFoQxKqEDBjUSo6maZYKT",
  "key15": "48XbsmVRSoYkHZExLVRiXF82gTJ5JHnMGBFegozQJrqESsWyQrq4r7n76RFkqxF3sNo7Eo9UZCacsL8wk8tN2MQP",
  "key16": "33C1mWKy5EEvwGtYeW22cnSKy1G46RnLqqhBFqKPSwy3qn3vAYUKZRpC6i3dD1iNfmfRZJR8SYx9cu6vTfwaJgoE",
  "key17": "5ZAFugXVn4xLMV8FP41egB5WxViB7HytU16kiBHpxJGQqpfwZs1zr7BKJHqFSt33W2EotfN4bXLesmaT34YAsjpM",
  "key18": "224BgbVicSi5st2P8inzk6jd8BBVJii1DNmaNYY6WYnG1WzKfEuwoTSW2bfGiKUtD1WKyoLDrbNxFEgcnE9mtTNh",
  "key19": "2FM7Do1RCee18KS3RsuZkCTBER2kKRMi4unvKv4UeZ89BMq5NkkP9RVymXt2LHXecqKbWz8ZkUjaXQx8qLuy6fDG",
  "key20": "2HhQaiTbMHzmPM5mwoR9fe3cjxd82MGrjh5ajeZGMPzK1ZravG6oJQZc55MDJHH2RbukBnaLNMbaP4Ta4dGx3e6c",
  "key21": "4ShTAmrNQaKJWjKG4frYTVc6w7srJXYBGtcrDxpTRn9fF9ZWWHd4KhuQc5wa1uqUWgAFibhzjJ41Dw9dPNjLiq9B",
  "key22": "AHbE99V9Lf7t3hCQcSH3j4vAMz92V59akvw2ej9T5qEiC3F7qtGockPS7PDbJdrVqtDkKtVJgnnd6nrWEGcDA3Q",
  "key23": "4zytnKagpVPCDhqbpcHKyxbw2T9hKYNTyKtimVNCLNpRc6e72DqUtjdWpu8jUE7jjYn3C1VxuVEe9VrW1hxLxZ4k",
  "key24": "3U9i4DaffXPHbCac7HR78Wwpynu47QXSgc1Ux1HQg3ACXzD5nfAUpFh8m8beEu6zrGkSqyZtVyRpWgs7kxwHpoaG"
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
