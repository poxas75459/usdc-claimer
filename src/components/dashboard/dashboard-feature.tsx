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
    "SMSAg34KoiTxWfVD2Y8YnzQ2fWTr36CzarPraGHgLzZrqDZp7dy7CRsDcSB5WpMsr5jzveLivkKiEt8KH5yRTft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3irH3PJuCC5KCZ1iaoDauMW6c5HYptAHLUmJynxJcJ2AtWgG6xvNqRysd5cdQ3fTC89Q6puzKN5rHMKS3N3MMZu4",
  "key1": "3NtUtqZWrfix12rMwezTgGzcZk9zs1gyhD9Cmn5bKJZ5SxWZzt1Bgt5ozw9E6ieHtzYjiSD43jWZAXY4xy93z3PN",
  "key2": "5W3AcY3WQVHtdvzHbm6DdAdnguoYJMGgMaHybb3wVPfSdH6WAZgVZSXFBMjLJgu48UiWMzqhjEb286M2Gj15Djn7",
  "key3": "2i1uJpTFMZobcynAqCqyBJEo8rM8NfaJLaaFUdA1M1edfEVD5LGFWfbqM8wxLNWX2mzzbuqSsGVGuTxUbJMhb1ze",
  "key4": "44mRYHdZB8RjwtAm6vxHakZpEAUjWpEdwhrdnKXbTWGyjEudnHuSvnzrKq6WAsNjsv5kBWRvRdmKxZoyCDmSiBEG",
  "key5": "5arwqTE2AqHVWDUsqqRP3E36MMYradCM7dnBnQBRDLRx3uLvujrjTnnex1B7gSBTzoG8Gay3cj827JeV4NpvND33",
  "key6": "5mFx7LLdbWLjns9pVohrXoRsNUMn1eRpkroX4ybznb9jGwRL6xyoAnFio4ksvtyBeKkjiEMrjzPEA68dhPgBvQXt",
  "key7": "fFFkEqQawdzAiZR2izMfPU1cHryyftnr64LuM7ZMKMGLKcRLfuGh9mP79Ax6fmuj6VFyPNrGNxDXEKzkHgt7CFt",
  "key8": "4Vd9KY7S52CBJUkfQQ5aVMLzCqPG4TrENhHfqfddFwDLgUgpcsY8hGCb8ov2ZysMCPrbf14QZMKjYYbQyGHPgwTN",
  "key9": "3vh4rbvmdzoHM275Wo61o94JdmXV67KqQAkUtKmFMUTrdqZRBNCuNYUcx6BxKUAAbZDW5H9fsux49J724pQwv9po",
  "key10": "DEoeT7LkPVc4xKcvQNJscX4hqtQSnn5HLHUYZUiqnWaaUjubPJ5trwBnJiwdY2rtuNUbkWDwhbLjHY5PvF8xHAY",
  "key11": "48An6TzcaV1Vjwox8Zzocezc7D1Pyvz9fQt6GLx1LJ8E8Y3ur9u88uFz1rdtz3aneBBp7dC4m3aUGFm2pLjY7dZ3",
  "key12": "3t9owAk5WbnoU53xzZnw17W5gZQCg8uXuPFdrpfo7jVE2CbTTtmeNC8HFix3TRTVkGzx4BMYNovZzQNpzQQVJt6J",
  "key13": "4yig2Jof4QorrvxqQJokkZ7AZfyS6Mih4vWuSNZrs1CZEb19RW8gs71zDc63YkpWnEkA6kUrvwBJf2yroKQNpAi4",
  "key14": "29WD4tBG5yNyu1hDUg7NDw2CnHSgJFHiQoGHeFompPTjpk4vpYZoNEhYhfcPnnhy7Xvs4x1Ax1phRWzujYDRHLUe",
  "key15": "2EDjEciHhTJ1X78CBanmXH7B1nuZ4XgVsah6jrqbSN5tZ2xUMfPPwbdyrFUV7FnMhoQAG9wqQ69GtU8emgpRExTD",
  "key16": "BtpT2At76iwTXsE53Warhu4fNKmxevcwhoeR1R7wdt6uFqPJxAEkBdsG3oWeQL6B9JVk32sZ4WdzANHBBsnLuJ6",
  "key17": "5W6cUmALXunTRTxPpqbymxCtesxbpbseteFHJsErhkb44P6agaEW7KoDmMBsRHzm3KmKFqLtu5SYeMZTAPWvgpgZ",
  "key18": "5BS2qvWzxxDoWXgs7BteSrJyj6BmHUXZVscFdXv7YpRPyWpYwr65SxePEbwqJZm4rr9n7rxooH6XQNnPU4tWB9d5",
  "key19": "5CEdc6vn9TSTxkzymjFJbtRJSD1tRskaPSwHFsa4PjXwNmkW1BLaA64VFarEmtYcaVasFxWPGkxhin8SwK6B8mcj",
  "key20": "2RsVPyneifgGeCQuwqsdBf7JrypX8LeLgEKzMweBuCJvZ7VXGR3k42yoDNGTyEf79UKVma17M2D8jPGoWZHEgEj6",
  "key21": "5M9YUdaMjKMGy1j7stwzxER577x5wytXgbz83mHE7G3NjJWpC3CvvsqQ9iiZorFqRGyHbY65eqWnfLrqN1PiLm1N",
  "key22": "58mbYvQGatwCmwdajFcokLUf4LJPwvQ9LAaJa2rrbx7GJTbZZED7tim9SjUw2q9giaHK6QLjeuuCnPcQaDg41bC3",
  "key23": "3x3FSDqxbdLUHsvKCKUFtfWtCZaUEyETxrtogWUDsaorgiR1fVfudvHY3c5SSF9YhSVpUhPmLsh36Xw4doy3fM4C",
  "key24": "2Ugn9JAktcLU2QRK3uqSatmHMVVkxYxeh3qMYGNe6tkFtkoxGTDipvwHACa6C1p42EGxPfZjRUsSagqBDqG1Qjvh"
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
