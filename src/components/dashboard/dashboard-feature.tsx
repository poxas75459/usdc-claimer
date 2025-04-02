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
    "3z92Qg55zQC86mh8w7wve7tTmUTkKriWg639KjJEUc2mx6U2rCtU2E5EVj6gcsEWuN2p8LKKwZ5RsZhRzRYDxGSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cb48UjykApt1eWAeZQQQzLJEaT79nhA1pvMgqSerXvSDCnazN8Fw2w64TRETArWcEPdm1432gktt8f2CEZUAm87",
  "key1": "2o6ewMBgdvHbkucsLu7rmubs4jVJiGgZJv9FkzaAq4w9xTJhtGWgPawAs2zR4vhjoR9he5Z3RKUMk1P6KfehB8wa",
  "key2": "2Ey5YzTsFGQZEDsVzjQDtXvPN8HUn9ow7HAVfyZVBfjDYk8aXxySkQJRx1EcpEa3MdE3Xari7wTYMwj75V3Uf77W",
  "key3": "3ZLWN3fKwc5HJojuEDDaLjYqDQkewjhtuFkkG3v1pdXnmQ1X6pagtFZEyQtpZPu7ZGh6mrBx7w3yjpwDCbBXAA7C",
  "key4": "52ymyRXU9CeT52dvindwV5K4zkBu9shXPEGr42nKWJqCLjtfAS7m4jdUz121LDKQdQzqYNA7A7sRAgfdKSPKadY5",
  "key5": "5LFD3t3QqfaSnaNg42wsLCNFD6wLCYF8Yn5CubfJ5eQNhvfNZQKs97rEL7e8b5W237Y98C52HWGa4b2rcXx33c4d",
  "key6": "4DUL8sZBABpUBrVZCzKLVKJ1LGx9AUDEvzzxDXCq3v1XskTVMzMuM2VvECahRTLFWLXPBtk5iyLSHATCC8r81jeL",
  "key7": "4Ve1JrjWaRaRTnTJ6qjh8vpcLTqbV3KpZNfeJ9BrbzyNtsER1GFvnJqm6NbaXc3KS2w3h69yKTsgmhoZRydTSpxN",
  "key8": "4fse82pQNz1EL7g1EYSzHSdAnMKrpdqzRmJxSn6GNLdjYuZuQAoiyg3vY1yxQ5bnfHSgNYHNrbeNUH2GTZ1abunn",
  "key9": "39smo3GT5GnLxHnuw94aAYrqqmGUuvgFbbaJKbgs3DiZeGiZ4RWkaqYtfH87iKUYZcGN7QVUg1ZRR1Peqhk1AvqU",
  "key10": "41juvLAqSyJqmEaF87X3iRvaSWLhKJtQ7oXpYtjagGg4CRW15x6TYRBRpWymMbnBPRq7kPtn42rMbxG2ijrJN6mD",
  "key11": "4YXoU8cyVPPaEF9ywPVrqJsYyQDKF4tp3DSE1CWgWDBXex7BnSL2cM8WKAvoMpow94Wn25sLWNMkkFaqpBL85Cfv",
  "key12": "2rKE7dQ6W2CS9wnw5WruUvEfJcrS3pFEh2J7MB4VxAjwXWJyYFZyT4fDZrn1ggy5sZFdAKt4tUkAjPr6gQp7tFXq",
  "key13": "4c9gtpXYkBzZtQzvJ7fviEDVGJ1RwdkLseU9STpRWTrD6gsU9bqQHx4hN5MQ6YNaEPnA9WxXUGSFvzciYccAyw8t",
  "key14": "UKF4Tw1FKfebE62fbmoGru3p1nmJRK9Hzu1BQjC7eVZDi9Gzit4wCxZCoUUTqNiWfXpW28E8ptKpoFSd4quXbud",
  "key15": "2qLhJvE5MiraghYcdU3G8y47e3xjs9HRqRngXNYRqCKVDgfEKmoHqX55GAshffUTLtTXn6v4QLgWpWVMcgqH7Tzr",
  "key16": "4S7qM1YvcY2apE66YVYsQrpUL9pdM8GZeriwBdJuDyYj9giTBVdUT6X52vy8UeQEmW8r2BZsW7uPs22qHZwYQLZf",
  "key17": "2ixKLZABeJRz6SVqqQ9RFtQSDUs6iZKdSw2L2NN8s5eZrUq7job8GVJwYSD7p6Pk4aFYoqnHc74m6CR3uafb3byS",
  "key18": "481sso6XBFEvxfj8UhjhcX58TSenZajxUKPcBSgCaTXzoYLNHCFyB33oEeCKnmhxdZiXRYo4kWNf32oofsNgB1w1",
  "key19": "3GMAW5NB2zd9Vpwe2acbqd9XHoobKfo4AnjVUtDvw4rthVv16Ha7nx9CWVsrNfYQ5X4nkS2ZTBtTaKv9pJjN3rAD",
  "key20": "5XX2FYSAm5ELE34y3L1PFTcaTXZDAePWDPwvoJr5hVeqdpNSf66J5vpGd5EQvURCh2aZ5kRb5MKo9v8k3WAtAxqt",
  "key21": "5Rb5HSB4R9zzSQTn8VqLWLvEBuWXJUqJjKwVcLck9Mvj2N7o3TDiEnXwYBK7A22hTE69RxVP8SP2S9tGjeWcFmef",
  "key22": "5Sztqk7LNn9jyJj6N77NC99C9UmEacrSMg27Fh8zgkUxUCLrmLz9Y3GAHG61nHk9eCRS2LSgzfp52eYgStJ7ybyH",
  "key23": "2mphyqWFMUaLPCZqnKeohoCCEsWrktWs6J5Sb8tMgbxFXkH4oPJKNSCwBz6uba2ekWYsn2h8AF5GBqu5AB4Wtxqb",
  "key24": "4oCbgQnJeJ9RNomtbeqAR176KcH7TR5PGUF6Cwd2QApJyn8i6cWYtUwrNyFrhnUXkSoX57JP86CRYvTH3TYmPido",
  "key25": "3Cx8uNdhMQqc9q7sUSZo7jWCSDRrqPidb5Nw7wLujf3LUoDmGRyKLw87pTJ65LN2GSr5wsq4DJGdubw4EZe4iSeK",
  "key26": "5Qh7TwARCcenJMWD4zYNi5junmRZBJZBZ8ErcjBtwYHM2JicisZ6cVQRDwbVKtfDETPfCxSrKoy96sjhJh7j3KvN",
  "key27": "5E2ZFvvNCpJQccG2LEwPff7dxZLpzZ7zuEY5L6RqdEZFeh3BoaHdEcnS92wNn8ChgZsF2g6qK56WbgNvtBr8An5D",
  "key28": "4UXQZoduV36MieVb5AD7D79NQtJ8YCmqQcmVYBadQb71sACiZwQNcYuv1XbPgbqQQTpiWQ7Ecr3v4zfoz7PKKXZF",
  "key29": "3YS2vvNvJVfroVUD8aXxWoD65v8iZeGzaVCSTFJRa1g6ZcVGR9ZtaWaZUSMBv9AiNZ4Ry8UYzUGZJSsaXq7oDQ5b",
  "key30": "5Q3LqahBciSHRHNe1N6Vx2fBmZo7Xf92XmkTBD3wVogVknHaiPVbYrRV3sxxoKvLKeRJVqGKDebX9JNfARZeHGTS",
  "key31": "5e7uMFhWkCXCET5sttBfpV9rrtj1D6s5jgxURxQHsPhEdVZY6WiJDD9wspupD4wuSXHybzeDTbvofokNhKyCWT3X",
  "key32": "Ve1qXDH9dN9RVMQg6ao3g54VcrvpvXNkor1cGYz5ekyVVkHXfQL9vrwsRfkB9xyDpviJX1NbEWjgxUsDUwDs4Qz",
  "key33": "XfPdg5Dv4J39fsL9tQkcA3uKsTaDbs77YsqoiTTZBCgjNnQWVroVeJXJHe2CUKLW1hH4FFKGfjJVR7vJgUfzRaQ",
  "key34": "jvk7yZHWJSw3n5qXkGJza2zwxYC7crLgTSPKyn48opnmA7gbQLcun1tTa4RwXK1risk34C2ZYLXVjj1iBP2BXZN",
  "key35": "pT7gxcvbFqnw7PP1wkLYuUYSdB5LAzpCMrzcxj2F2LQ1jx4zcde3ancX1ey9hTdaHBgzDSJFTPvUPE49JUg29L4",
  "key36": "wUFy85iY4Z6bHBeDv7QUdQwtzQURnMMKzWyAyNDVq3uAWVaLyUutcTfAhsZQWqNR9dtST42CvdytGoEnubfSjTs",
  "key37": "3mMPhP8vk2Tt3ax5RPMr2sbGbzgfxRs3dqZu6Fmw1aitbqiWm43N3tJr6VK3BMdXaZWANsdY231FeeVLZt76qMAm",
  "key38": "5SdYcqaF9CsmU9Dt36YLogrBmdiM2eTsGqzPSSK36QixURmVpL6w5ZM4ZjvxyQAwKrToBtg4Y5F2aUXwLJrchfaB",
  "key39": "3s8nhvkiNgvcCG7W8XQpxjtee942wA2TFFFGryhWCvgEiKrNNqHnm64Ff97UepGLoSoetX2x2jXbqrJqDim9Dpkq",
  "key40": "5yNC12wmfY44XjHfP6JUuawrJ6GQbCV1VvrHmM616i4Q7WwhqKqb24gAEpb9N7cpeeut8QHJLyBWh45UwYdgDwou",
  "key41": "5TGLTh2THQpzifrdRYvwBPtHsXHkp9mJCZ7etqt2bPwCTm9Y5zeNmUfFmdDA6ipiLmQ6LmGMpqvRpmtHxhnPPy8r",
  "key42": "5tEjfky4ZEU5FXrSbHtuAftPYFUC2QFivHAYXrW9FG4YZSfpa8iWuqnp9Q8p8NgnkbHJ9iM5cLk29Dko351aptVP",
  "key43": "2agiVKw9Me96Gigae8nFkpwAnJ87W6ESn7D6XJHVSo3Qf5gdpAmnNR93ZLWLNbNfa3R8P1EEqrnLgQZXRSHmYYDc",
  "key44": "5i6EkstBHU3VmpUPJi5KqdNW2WgB8TF2PayuFxwygHBttzyx4N1qmTxZaDexwdkqGFKFx9JxkG7sbqUwrMyEqJZ2",
  "key45": "WDrTN1uJpKjrbvCDS1nJuuBJcMYAQBPExKwtK1VT7t8TcA93JNFpojogBk9T7ySBBerxDRB5HdF4wvZdMZJCrwu"
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
