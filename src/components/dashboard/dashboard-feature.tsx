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
    "5ojQsQTKo2gTd5Mu29Yzua8De6fvnvqzPvWxwRVUWuoJJoNEcEeMu1cxiky88krp4tPLLQcApHHu5LXdXdnRG6FM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hUkL14y3E2hRQQ4YdkqDCuoFgi8xUxLGRu3FT4o9Q56J1YbZTUD8HnVwnvhqJbKPN6NcDSFmZ3nHxeSFJRAjrjd",
  "key1": "foAwcML8LWFM9A7HTkz5RrmDH7oAgFXyrviConvHTZa7MNYRgwpvbdxHb3vGYkRd8RWfaE7awVByV1nJeEQrHxL",
  "key2": "4LTuQswzDPgC8FB3WmWnfVvgc1L3cEFAULKzWwtWhRXiQ1ihtxHNjA18Xz2dypUA7pNRDQ6E8QnNAj9ry6i1PJtN",
  "key3": "5BJt2Y7ZuPrDUY6eXZjB6qdienP3pk1JS4PLz8ddVxC7EdQaVPEvJjod8kXmmfi5J3uERQFsWebLgQpJW9yi7tzD",
  "key4": "5TS5Sz5u6kzCzwkcFcH6DJ88QX8KnWCpkmzCDfZ3utUsJiicoTnAXMMWMCnHxiszSEi1hhd7fAndG43waG6LryiP",
  "key5": "4QUZmAnXScWffTE1E4MXD7KyiZeXfu5LoynnuVzcZWSperGm3xkzhTo2MSiRsSVEk1fDgd2eCjxsQVDzm2b9ZBVN",
  "key6": "5VPbWNGJ7wJ7gbfjM5PuC5h2KKhXcNjKcTTJAwYrti8c69JYdY9sxodS4y2tWgSKWHC5GCyCbFWi8yb6FNLDYAq8",
  "key7": "Qx3Du2hbDWWJvjqKCs2KV7wZJZMzFSMK7t3zUeeKartiJdsEX1AULnYeXknNQL9hBah6MTw8aiKcko9GEKr5AdN",
  "key8": "49rY7bY5nL698ZfPWXpejAiKZirDxFQdDSrtkmNtTFqaFs9GXrkiiqK5jZsbQxuUfwZenVzNsttTHDpF9KZnwHox",
  "key9": "5sZJrFXHdrEM7msJfSi9oaN8kYwTUYD9maKmvB6MTBydMMcppcRCcrJXgTnX5wU6hsBUnEWSortcUvoW1efwnNtC",
  "key10": "25BcBSXthuxLLPUtS8a7J4iYUyhTKXJri6v491pmbTERkzthZEqef5JW8pMxuFUSu6c51xBdQVApUFSEsVUDpuyv",
  "key11": "3oH6mrEEH9gNRpTjUFLptZbNLH9AQKKTqqRZCLg6JLUFHQGrVFgBqgMu3UMbUKXumPizZ93F2K3nZLEnYtdmv6eP",
  "key12": "2qJJBiCGciskpKkydPEU1Egb3eaamoQUPDNXY1t72acXReQ8RdRpYJtCRnc45aRTLdNRfdNETEh4zSfSBE8FBb1n",
  "key13": "5Mzd2bqiehnCusXxvVc5g4L6rTFfApZBj9ZNBuRKe9V3fkmk52WzGe1K9gCNUHcokko424VWWMHkQ8SvhTK36D9z",
  "key14": "2c81Rs2W3Br8oXNBGFt8rLngyznoKna31HtBGXxEPurWGwYDJHsupvdd4JuR7dbAR6SKy5xaLeXjHtiMV2hDiL2B",
  "key15": "3ufMkJtWrXiVq5KJ9CHjnpJPvrHZL1LNEDXirdpqXJqyRFQLh2FrJtmhvZhQnRWjvxcKnfGC3jqFxb58dc8kF3J2",
  "key16": "3Hjp8FJieMQhqsgfqrhCb79zeHS2qQAxvYagABwB8AjJX1nwrjNY8XMbUN4ifnWzZrGCHe8qetHhvQaw7BP8YKXs",
  "key17": "3mBieZweUpJ7AEvXs9mxRQAbyoBYHeyrT6zigxw5RGK8qBqk8xGSQEqnNWZvRm7qwvuk2SPJHvLN2YkVh7HSv2wn",
  "key18": "VjZMSqVk7npRFozRaeREmhMUJwZ8sEydszdpC6YeUaVmLiCkFCqEr8fnqaGULrs3fvfkzA1SkQ51T1ukRbbWuKN",
  "key19": "a2wfKWNL92BtCttLeLY5fHjReA2fooUbGedRe6qTfK7o1K3dnNjqNjN1y4HtpfRofxiKP3XdzfdDUL783NpHStc",
  "key20": "3sUyYZzX3o4kFk2k1d7LvVi5dfY1N1p86wVFZrA1KpcxYF1sZreSW8yMPDUM5C1K48eH44yMPLvpmZpg7CzXhaM8",
  "key21": "4mZniCHTuEYmqtjRb7dX7CYUwTnjGg5AfgiFqySR39aLqdDaVDTWxgchRaEWZL8EFkQDEAUFQAnGwov8VF4hVAVu",
  "key22": "CmHe3yXmoCtMxpaEz2xdQiwrQt68pXXKY9RTPAyT81mj9eSk2Kh9fkwyE6K9b6zVu9VF2bd7JyKphPXSvosFhGV",
  "key23": "41xb9F59DMZBxjGb35txm6dqc4kK7QhBsMpJCQCq8ieSD1ANwC6cbQnBGtMQFd9fexQ9omnRi6MHggAZ62nLwJrd",
  "key24": "4Cc4KjuxCLkvs6GsL6NbfGq1247CVZLqLaH3vvz8UoxpJHQNfvQUeDYxhmHqa2pV3pzqViZjddsKVwGff3DV7AJn",
  "key25": "3GourAwg96FDPtJHPkvmsi6XDok1RwHTEB87jNdtB2yps91Q6aH3gDZnzvVJFEbdq3V3gvZmSYGGYg421tSRGFmT",
  "key26": "2jpQVUwKxiPTWMzj7CsWadd1xjnTBbq7gj7arFdKRpmDMJgCHoUwBoBE7NT3ricCvgmK8EVPfoLB1z8VgN52FiUL",
  "key27": "3GQbmsx4mR9v7pFaHX6y6VaZiuKL3eb8g3JBfYq8WYTBsBgoiTgkrefymFTd2KM7x9U28sMqiyA7jJ4XoRwLumvV",
  "key28": "3CyK4TvyFhXKXnY5TYsZkM5E2H9Z2mEXdkjYv2oQhuU6AfiB3pHkL6wxGRDkuveTCfwBZo7JRkYhUwfYQFnUn46S",
  "key29": "382ygsWec1oMc3nMXhmmqENszGsDuthPCUraZs9Fs9Y6aM7wvx4YE73d1vQQzbHLdz3hPMYAg22mEMzmNMgzN8kZ",
  "key30": "2pQGe3KgTaBBo6y3ZPPULUxehCYmU3qbEnoHErSB4ojqnQVeUoEBQxJJesNxg4QuAtetpjHSk9ry9SAVztv5kZuc",
  "key31": "4f3HEn6PiG5pBrkBe6NQpdtTGHvfgZo43C1oAhc5H22STVUog1AjDdEy6skbZqMcGtSVPjoT8Z3YADHFa1Xxk7pD",
  "key32": "64B7GBoSr6EbRkpqVfS9pSEY6AKMa9Dg59Ki4zNap6nhxhM2bAXchWnptS2amq1Pj9BeKaJczfTFTx5jfkVAUVLL",
  "key33": "2pRZ5U5NP3WBegfx1MJ75KGXbZpMGdSn6RJnQXp5E3zF3rNJS6E49YteKaFmEqLcUrvhYkcHoUppaZ5T4KXiFmVJ",
  "key34": "5YZ2sqPwihTeYt7KD1qiNmWGq3p8PJkfUgaWbmnu8x8mbmL1BUEpiPwC2SBp4r71ME5zy29dvGqHFXJjgboEeAeA",
  "key35": "2z7tG7zCB8pw8d4CyqKTR7XQQURha2V8KXoyenWdKcd1YktQx3DuvrUp2PXWnDLZjsmznr4opWuoxTNH9zvfHFd9",
  "key36": "9KKwwhqR3QH9LhRV5egQoypY6hPPm29fTSH73fhKXCVR4VhoNEeuxh4z9S4tbh3UqW4JS6EGVi13yGYY57sgGBQ",
  "key37": "3XRscqdxdAF2bGXnkcKFiWnjgoBSySm5v58ACN9hyA4ksdPJ1Sc4FXmhfvx64aT83cXbE4F9PoAtJmePnxJFgyqP",
  "key38": "566wrs5DdS9msG2btCXdf1ZCDiBq68Gvrav1f9tsBJ4shJ4bKp5cwgMAPcPUg3z1kxToAWCndT54yc9oXidwgdPN",
  "key39": "3U2cRYKB5KshsfPqKYrnYq7Ci1LqWaWvDr7iXiStCcnUo7Dqrjjvoj7gGYK112XMMXQjkCZ9TLLsi6VYRCfGBJ8z",
  "key40": "2FgvdoQ21GP7qR1jhYxtBcvu2ZSBrojCTX7gt1cBoZZ4WBBj6HaAKtoPzo9Tu1iiuuw5qe1PC6s9ppkBYqUPPXKG",
  "key41": "RzKkVb4p9ds5uanTernJ1n9sJVsNn2GdftGwaAaWFk8MxHuzPyoAni38BnPGXiSXxQNANf5dn4rfSfQkvGQ1iHR",
  "key42": "ng9Y2x3kfYUTr6v5tA5DH9MeJWdE1MPwe4G12SLiUjfiHE3FQoAwamK4YXg1HJ3QrmES75aWDrufVsBPqhMRXqK",
  "key43": "4aSToGk3mUa3E6fDvDW6YNijKXyM86Ztzk3JLFSkD5yVoaNUoe1bZg9X781VsmYjmBQYzdFf4G4ygAuD9Tz5CdH",
  "key44": "2Nb2aUkMcEHQq6TxL5HRYf2qKChBKmXZUsY7GhpUAyUqhdxpquroH1N5BYX8zCVqvpjPQckJcnfGDskTxM67KKuw",
  "key45": "9LkY4wZv5mhQU1V2ZgNg6EcuKxDV1BCxsz35xpxrdJApzKzpLGLrFbC9sdRFSxh7STxVinnoLYjHhak4XY3D4E8"
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
