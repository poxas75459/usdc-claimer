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
    "46ERzG2GpzfNNEu2eBMoL7r3dmwpqetCcQyDHe4uagu3k5XBsYCfwvjE9pZ9iiMkfGbt3WHfugN33FwG4QYrXey2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2agmLmSnYuvtMoACtEXebZPdHL7PkmWuKTooxtjYTtuuiDHdcjaC75oQVYAAXzhDEo8hP7bcrYVyx92XWaRXtW4U",
  "key1": "3oftQvXzkeYRQRvXZSQu8X5BhHUKWuYy4aCgzuxLd6wB9NtiQVDLwNyMh7CHknUD7Sf5dwNJwFy9G8x9dB98GQw6",
  "key2": "4JaWhLXt6BHFLt3LXCcnHb27mVnbC8iy6hujczn6awquD1jjya8Lm7XNaaBqT7A7FZUfMiaQEZyoQEdiot6KnYpL",
  "key3": "24AofaSZMP3fJiSmDvuj3sfXMgFfzfDUaRLCfhZFLpp9sgHTYhWjxwCSWSuNTmeXFgYprkHbbjCS1P5A5A3FPekR",
  "key4": "KFCv1v69FEc22WqVcoEmKABxcGvbDN8N2PS8Zz2DnmtrAozHgjar3Y1UmhvJnEb3DSvwYo8LzftNqgGe4SxYGSA",
  "key5": "4AmvWqJQcfjoVz9mnGEExZtFZJ9Y1mo9SrcCxsBMWMhadyzQhjXdSGUh2GZ77FA2iN1MrN1p3f1RWiZW4QW3r9cX",
  "key6": "5aUhYWRUDyCJAqD6eiYqHkTBvAiamn95P96Kdjn4ZJWyyRPqckim4g4rts6NrbeYkwKW75kbAgoujrNxnc5AdZn7",
  "key7": "4zQe1owTMFY4ngRU9GoX7ugin2rp4DTNLvRwHPaVfD6aB6dY2Q786yoQEMcansuiqQpgK7wTwA4wzZrTTng6meaB",
  "key8": "3hLxsQqGYrSipuGycfPzXxtiHGpNdHnRpM2BTwFhZPxNCrusCXzLSVk8E13m47r9uHUnumRZmQEuYLeuoNTKmPJZ",
  "key9": "VgXm8TW2Jm5LCYhnEppb7WPzrruk3fLG5YwDogSoL9YH3Va2918MRFc8acWKnwzbGUtVTKYdPyCAGUxnDAYMAt9",
  "key10": "3qGZy7hTeL2Tti2iWZwCUfzk8nhbh5sxgnp28xpd3CRXx6bC9sUv7PyekBN7XWRHKNVAUWVvfX7pdtfUA8dfkhww",
  "key11": "4B97U8JxYkAJkv8ie6CPhM47UdHM6SPBWFpn3DrbqwnZvpBRaydhBBj9NkJHmXEdxSvAgey1dhXieU298HXt5ySt",
  "key12": "4oC8buPKSNypFUizxC6D2bD42ngLXE3t6QHD6xEA4hY1uLWSoFV1b1dBRehdCFvRJHVz7xFviNLEZ8ZwQ7wvqM7c",
  "key13": "49iBokahuvEAhwqjGeTj4KNiS9ae42vfk3Y1ga1qeZbc6Ux1AHPJegNAwbxe6sMCpv2hpkrGNAL3Wqr6KxoDBc7v",
  "key14": "3e613hKNWTE3PZkBNTKHkPyKpFXpCrYxEDUwYPxvkUyKxr6XspmFHLm1NGkMvx2W2GeBxD6Kuv7bdJx6bFvkzxHv",
  "key15": "5WBhqS1V1RDzHPgTqtndoettMnc1FwAA6BHdwvDccV8ZpEvYhkwmcT3DTTjYiLDn7BEHPUX1RHBRehPJnj24PM3h",
  "key16": "Gyc3Y5Wdt828zpd4hucuNQENSyi51XeUeH3c5aTpJLkKemD16L6AzjLRKe6FdqSc6x1eUNypQBHjG9rVdhqYkye",
  "key17": "5ZnycyxnHcezQcGMqwXiwmrohKg8ccxRkDLhFwWtcCMiTfj2GyPegL6gL1CSNZmk2f3yK8E8YBQg9LBrfx3Au6WT",
  "key18": "5kWgDHtRjbahs7tNmq4mTiEb6WcjS7UXgRPze9Ro9XCscAoAC6jL4ggh9E1kdzij3gyekWWykGfF5GcS2d1VQ9zq",
  "key19": "2zMC2WTrTuo6gZNh9zURxYmLHv9PH3keymXjwNPoW4RCcJSxBRWSajqwqRbMSCKiuDpz1bodyJD7tSJwtkrzQAcc",
  "key20": "4xgoyQMo2TDDoNfGw5sPogLM93m8fc2DCNz8Uhpm6x6p83WERCekuxvFciP1ppisdvnNn4h8n6wav6zwC52w8Jx5",
  "key21": "3KGSpTMagchxurr46FDAL8kRPHhcbSWQk882TiasVfneLtcN2BjG9czGB7MetCtzLkf2oaXorLorCSPQJ1VCvDWs",
  "key22": "49BREUdUJLRah5ix7kdAmGCH2hF5SQ2b72Ntd88GrYM9yMnsdjATkqNAkGWc9TKsY7pZMSfDm8j9mNNZWaKKkK7E",
  "key23": "25CMZzvDzYRVL5V3ug62vJrTEMhroNbHex6omurvCf458Nx6RSfMw1zsWcrjELTE4FyUiQ6xvJWvPEEXMMKggnsQ",
  "key24": "2kcVrSfZpfdpfPeK7JkHSA4CWz4bRvZE2gkpk8KP4wZU1jv4QcnG3Nip5CevkwqZvg5AbbkFJZixzt7ZRgJkmkGP",
  "key25": "iJR4w9DKD5uH5qYFc1PjyHceR7KR2sufRbvFdsW7t1c8HoHR2ZBXVXq1kkFFBf8oDsYpgDhvpWqC4aVUheocwrH",
  "key26": "MVMeURP8Zib96wUAeAGuQDJPyKMWQwXyid69LAmqqLMCPDtrhiz2dt7oQyrnUv3j3e45fBEyCXm2CqqQygChptU",
  "key27": "53UCa4sDy8AWuUtNeXcS2JLvCMPsUPPdMp3rM7ZUg6juwuNd2nUa1evNtsEkE7yveRwiquZz3bM5MVaETY1ADUfc"
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
