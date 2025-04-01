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
    "2eFSrubwpKwLmz7heDTRHnV9Tm8ZS7GiWzC1QNo2rdY58dvpZTnDTmsBcK4VDUQP9sQ8MCnMMvx2WErvL821SXVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qxp7L6jd4NqVY7bQU6Pg89mDecer4vd39BKNqghXkfpbGt2M12GD5RnXd3VRoGyidZN4FFfvr7SN2sN8nQj2vvS",
  "key1": "4eHKTvJMza6WyMhoM5aUBDHYmGkBoVgiKvYJrXQQFdoFrYDjXgg33G8NhZmrFmm1xTMXmW22fKu1jZvQRLjFVMGp",
  "key2": "SWp3CgZFMtKK5SCLChbRLoWioibyAxF8yJQNPJtDJSuXQciebbkxUEQW946CJHgxvo2qyYbcJjTaxkTshXq8N1q",
  "key3": "HjeAA7xqhmLbajcDWKYHggp2q3yqRhDo4cjQvr5mjGLh5Rc5CbfTGyXqYKdTGzTCceZ48sBMD4QcbPMyFmBneRY",
  "key4": "3zYNe1AsySPWwx2UBw9Z3cyf3VL1pXCMcTWy9XKNVw7oJxygTRu2DtpMu8PP5U6t6apzBETRnBpat4qaxCdj6hT9",
  "key5": "HMUzRU1JxKQJMmmrTPZJW5RFELHLD3QtWvYJQ42hP5BBTBqM5zo1BrrFTGUS8wqrrKTmt8pDhwHfmTdKsrSthBz",
  "key6": "3jzRQZPa5PXjXcdWPFzide4gky5sZQaU3DkrR4Y8LNXCjpuSGwBAqjdj3CCKCZtc7Cq3oSyT59xY3Mn8r7cKRUbp",
  "key7": "43hZfYQ1S4qpP4jfgcQa41PZqPPrwFNzNhRuGxjUqTSh9mQ38CBi7xdCbDh2oCNHE6pk3Jm67kLgjTSWoJUvaEpP",
  "key8": "5Y8cY5xqYK8b6FRBfpaupoBrot7X55mfVdwvgQyMaF6EtDrJi2PxRb77m3uzGgJS4qJjXijJLSccDo91qHw3fSFX",
  "key9": "5F1bLY3gVbrLQsP115gfEXZBJNb65RUTxGNoEh9dSSebj8s3PSwC7aH3Mxj5ubyqcwAT54h5BMqTEMZo3UDoBvek",
  "key10": "2KtHCkDoyjNMS3bydNGK4up554evbJfwAwUdJtf2pa5Gz15UGEyQQVdr9Wds6wF3qfparFo1mKYyKPSYJgDeWrFX",
  "key11": "265QJygyrioGQJNh2uaai3HBuJqwxCH2THXMrqZQyNEJATzTxWwXFfyQVKbhZmmaxvsrwVuT9geceanR1V27k7Uq",
  "key12": "3VA5T5TYiQeHmMpEYGXrHr4WifCCs4icCAgfCPknZRHwxbkAg45i22poduRGcMeQLFfk1vbB8rbYZmh9sb1cCcrD",
  "key13": "3baKvGd4GrXpzekEdWE3urG6sR5XDnWhARQZfFqXb9PThE23QR5xRewUSBc9XGQ5q5e8vmEssE8DBJMgKhbgu8NU",
  "key14": "5DeMv7GrEYpLtAH5eBbgBWoGvPenbCoytzTkvc6Dk1APfv4bj8qLAz3ttaF1dawB7nGvxFBrwRzDWKGG7ajWVdAf",
  "key15": "R9t4arS5FpnV6eHXmjXAx5caUrkuc5fBE4iYiaHh4dq3R2WMzfKgRtiHM2jRnuUh3G27txf8NGqXFTKgooWsfqU",
  "key16": "3dWSnkcRUuYZcmKgSyYsPzqfkwzL9KXwzdHEjxVthtCRFc7r6A61s7YwEdRGQCM4efPS5N3EcS8GNoKexUba9vwW",
  "key17": "2suGWvbJmcQbZz9zh5W6Xc1itCKiDX1r3B81D1nVKtKNSbtNGtX2bKgJkLrWE5qu9oVTERgEzsEfoQttQcg6Y8Gy",
  "key18": "3UmoSmQpgMMtBEJHyWPAErAseQW96mP94zThSP4cfMpTXcmYVDXxjRG6pv98oV3Y7gev7XnvkpeHYjJAiaQ1z6gY",
  "key19": "4Knk2v4pK9mPCxWZHy4Q5iiso26yo3QE8huZRy6RDd7d2LyN582XRCGLxT8SXBcqiRSggHqFxVFLrJ9rBMDdDw7f",
  "key20": "46nJfUU7ctuP3P5hFkHZYZDzQnreYZbD599vdwHL2pTreG7s6ijP8TgvmsuCKpJfjVdz9UEBGQwsB9o8ZbgaybVV",
  "key21": "3Sddxh3iZ5V11vm3n1Hik1sCYmCaidktj6Vxzxckvx4K6nzeAhZ4PqLRumGH6znU8Rz3aWA1MwsN3FvhuzpvvuN9",
  "key22": "5wFsk7uFbpve6vMsCuK2S4xS8zNrPgbUMkj6hbLX1XAQiCdsfvB4tzrb9smHroNBFATfBQgNrh12pZFY1XsPSZx",
  "key23": "tF2VYw6gJQGiLvHxqESKr26Czge9TeSTw4uh8BYCPM8oVwsbMuJcxLM697iBy1Eaqtdevi1LV85PRLsYUfHZBMh",
  "key24": "2mr6HFvdenpvTgHKkvjgJrUps4xeENuQA8ZY4Abvjug5NyTJUX71DKXsYNq5f5Lr6xqFtBfoDDs295FNdUnuStoP",
  "key25": "628QWPYMnN6qkoUVHhYwipvq142UKnwtxr7qsAxPb5NX52qJEtbDtbNgDKvcGCzDy7Q3d5wFpo8sv5ik1QmLHUPz",
  "key26": "3ariv8LDoZ211cKuF3LDtnYFdMqvAcqSTAq5tA9SW2JCCGY44fzb98DRtiersAbjD1edV8TAWVM4ZuSunE1Y68dF",
  "key27": "fQMjRHTjZZLqpECEUpK9ube8jJrJELs1E2mTmhW5EF8s8d2gaMviV4VLWSTcXunmZtY1zw5eW3t9hTmd9WLj6dM",
  "key28": "3PwyGEXoKEyUTM8VtYCi5EKcmCjuBN321QAJrqrik45YXbEgt1JAg9m2u2RK99e6YNucSMp1K8QihdsKQevNNWRA",
  "key29": "3AksLRdmRR97QCbMkgY8Gkxw5qVXtdYo8zfAXf42MNrFY4STBDbcACRsCWtPkv6uL9hkqYFN2nFUr8vT8N9oNhKo",
  "key30": "5Gi1erhzjeeCe2YyVk4TApdb97BGjLZrmS4dsWUk2veW8VNFJTDSnDEhQkewKsSpspWcNbUkRKeJYxJV1YMbiWLq",
  "key31": "Dk4TLfypciET4jpBVoywcUwJZsbz9JJrKUDGstmVEJhvcZRatcqjwzc1ivZcMRwRDEq74Gyr5nVCUennTFsStay",
  "key32": "5DecK2oYDn3UY4k1WyCjAsMHtERkyk3XTtBVb15JjiN99LbQbGbbbCb9oYejdAyp8D6ktrE2k3budz72qt6JYfcH",
  "key33": "k8PdukU7dNWRYxn4DmfyMUst3HTQSuXkB5isPb4D4BxydpsauNWnkjGAGZ2yaxnLXsmf7kNbQujiSpYUXarVTZ4",
  "key34": "35QdCiSzcKZHNknEyqZfHQNgPiwHN37FBqgFQy9aLXsuuSpduw2qUhWaWUDM97vDYxtPNQyjcEsdjzeGiouT88WW",
  "key35": "4yWEaDcjo7HTnnrxrdshtmrzYz18oPZE2cQX1bMBjUzeuU6uXkQTFHTeGJCpZ26qeUms2hvX1shrUZX2cBjDsmsS"
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
