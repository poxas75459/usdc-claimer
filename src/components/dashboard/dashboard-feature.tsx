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
    "3C7zbjSfZE6NueaJnSh5EXtgsVeMteaYTJyqPdc8W7CkJYVBFfDyEuD6gqp3wGEAPBA3kT4PMHXYq7WZRsu7qxQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dg8XSoHyZr8ZCCCdx5QtzxbNcrRY84AZqdGfAJTWWHi7P8Puw4C3twXBFkPHHHwNeVvG6Qt8mbKWGP9EGRYcYhg",
  "key1": "21GMy3feJtDtLSQDvaGDMYGdFYvnu46c1F76ZqFxTKKc34njSwBU4Zpm1WpQFTuFpok8w6EbCHnpp8CcheFyc9sa",
  "key2": "2emEeQ2UYMtLgM3jVrCEzP6JgBpPfSwHYpN5ZBQUxnZy2prw47EATP3zNkGdBy54kCXbGvE7a2Pz1gnLNhYsEbiv",
  "key3": "2Sqr3qAUPeHc5iXreoakcQTEBf7hjidj9VrDx9BTj7qw5Yt49A7PRwetRzoENihENBtXi1NhBS5D3ZRN8jZmo7XB",
  "key4": "2K61dNPpRWMMJRWd97zitzWArq7P7K2C5WXEhJxsasBidNgsuZcWhcvq1aLoTMkg3wn7o5ovvnR5qMsRBiDJTz2e",
  "key5": "bPbVmSbyn1pWysWC3GQDko9nKaDU3Yt5197tQD7qcSPsTNrr26A1NZ3eN6gkhVe6aoMKz9HfRAFYRmc4sSkyy4r",
  "key6": "2Epbsrhqc39X7BPPGTXpGemKBGkxFzNzPrfvALNpaUggZwWK45esGRXZ7sizfrNnomJDhzXG4PsbejXZZEzRnJgG",
  "key7": "3WDk8aE3ZNNB1hB1ZMau5qgX7S7dz8uppY4LEJ54uw6Duz6Y7hec7VUfXnJcgKUfZnQ8jCiAUX62NFsAr75vsJdJ",
  "key8": "3nGFSAjjbFyHAy96c4HYPwdYFNZuZu7gEhqtfERNrJvi5DEp5tYA8w2RLw36rdLGtxEZ9v7voGQcmYZaj6xNxysf",
  "key9": "46XVA6Pwg82SjbFjCtj6ooubiQHzUJGdZdHQDZn3dHGBpWpxbCU3PxpEfHDxtx1tmg7DhvHZjCfGsbT7JvW1o1j7",
  "key10": "2dvZw99gAWpGZKNEXVG7ZdKs1xixneCFTbmhawQtiN7YUpVUttitXpu5EkoXGiDbjE8nKEsYmewbP1KcpWX3G96B",
  "key11": "45feC6eY2KQPtiUD7YSCwPShtjufhG33yMm3We9HsQ5rt5VPrqTwFzwbiZ7jNpRybYuCV33tZAb3Xv89N233Lx6W",
  "key12": "3iUKbvESNFcrfnLXqpiBT1YUJAYX8sZCyt8D8mJdC8TgdgrxYo8ER7pGZSRSTfUof9fUpAf2uSo1xUGcyJ41VDGU",
  "key13": "5nTKmxGU4nbJvoDWYg4ZQCRFp7rhRprvbY794EEkC2XAcg8s9bTyTHhPPZaXkwdKAf5JWBGJmQ97b6A2jSEX3aHB",
  "key14": "4imushZTnMm7hDsCUV9VdvTBn99gQ7kep6Vyw6tsZ7X3PkbMezHEpm49iQ72TuHpix9gxihKDq4ZWcQkpmAtGsJ8",
  "key15": "szT26EJAecuLj2dTYwuibQUemMk38qxQ1pSvpcsCYQY7CKDq5cAZb5erpfcMn5T8xtKH3VxBSS7DGTk3w9DGrT4",
  "key16": "3dNjEnHXmrT1sc6pHtUqDwmwktseBGdoT7rHmDmSbTjvGL2kRBmVZBFJdhezPgPtz6UZvnqyuyGPk7ExJW9jbjMu",
  "key17": "2xDLLvWgzCV3jEaANN2qbKSUnADPJae1Ff7RY322wo4uCCyScGdZ9MgvobvWFXPNT16MYjaz2BnwxHwwdr43484Z",
  "key18": "26vTBc2Z1H9Vt1y2bpVfZvNFcXMFHyKPENiLqFLNyTB6dXEHKxQtbdWZvVpRxm3MsT8rHjgExThC9JqcAEXhPXSv",
  "key19": "4pMspkSQuadiKJV91ujgSAu1CbCFBbwbjGRgD6a2Dmti367T4zsygk45kENFnaDEGmSyTxhXvTAbnNzaTYfbRVza",
  "key20": "2ZyEVsxQCnTJpphjwabBuPWPyQ5fG325m1hS3NTd5QTVw6mQfW3DyKzfhmRTg7ZsiL9VF2qMkrMfTXrmVAy8FDDM",
  "key21": "37hfCyS7B69LAiVJVagvtfVUFFPuNLT7NqkhcGmidurzoV7fbk2cirt6vS1zi5ZWigJJJtqh5RLq18Vna4tKxKoN",
  "key22": "2NcPq8fUHzPbfCmsUeJvY6TYbBWVwQ48VELez6icrXNZ3ZXa6pwsCA49o1WNNrLNv7wyxbK8qnbXzAjkHoYwjwns",
  "key23": "4D57gTCxqh3aMyLKiWmbSqWWS9QfyWeCTdzVBvWBem7SN2RDsqSMBaeaqZvXc1G1cGXZguAcQQRmGFNUCMdTErGc",
  "key24": "61XNRjkSPsDMAiaBHfRQXv2LgcdaGyUrWvVakcpwoeixPEysdYnqwRqdmwnUJfgQdWGVmbD1VaifJ7f1P845GFTR",
  "key25": "5cwASPxFRYhFWgNA6Tn4E4c3ahatKPjRtTSKSFzefkFVAjDuyBXBBsjjwxuiznXrTks1D5wra1F922rntXSggrRH",
  "key26": "2SJRfFJzQ3WWr1mHEJTUNn6KMP9Cup5VLivC73pDaSBftDUZ6nQS3ui1Qu2uk83aD67BPHbBARuKbkN9Dkudwjt4",
  "key27": "4SxhY2YmAnQHCuXr6eaNnCgoFkk6YpzFvP4mUpGHayjDku8vW4ZPEsGikTPndEfRdtrFpWpByYWT5BrpNfqz3eRD",
  "key28": "4Q4EVprFn6qjooMGMZLHhvVkPbpBM6Fuj4kWbfW72H15Gvu27p7JTfuFuyJv9QaEbDgUVqK6Voq9TvFiea3hxuRd",
  "key29": "KRwTuU4p7KZJXGxD5ino4zXcJWQzyhwDMTBwgibUz8z6KrK5ACCZPSki3Q3P1mbn7dKiDrg84tWDUdEWHttn5gA",
  "key30": "4KVwyG37M87TMRg1PKDXPiQ4KGhHAApJc1idDr3j9TRUXbBmaqwBTVmcNjvXeSaPVvokwLtUo52ZbM7sne41tPfQ",
  "key31": "47srystzv1KMvTishznSbHsPtWLaoLEBJr9FwbxcfGLUwcbS8PSYbUbPeuNK4GFcaeKxfVb6vo3jhM7ksSsdiRZQ",
  "key32": "4MCotF16EMAzhE29YW2qwUYseQFmd7xmbY5Bc3yaNGzU2uTvMkzUwvdqjWC3V5xR7yWcwJo2U2B9pKDvynmDMUz3",
  "key33": "3hjbxNyfPcTTQEsPuoa6Fxiwd1nVkQq6Vj2nBy5SwSCdmkntS2HKxrEKvYMxyu8J6N5pLC9v5JQTorfYWnZ3c5oP",
  "key34": "ovT81L8sX76iCgHjXenyEYYPSFp6CJhwt2mb12DrrtThjYax8Uu4xkZxuKtaTxfHCDdMfMQqiVBq5wJRkguyQt3",
  "key35": "3dUMC15WaSMeoVpz2UgcibAW6Ci5F1rELoSKH8EeWmd7v3MZoJiqGbjEYHf8V5HbYEZZHrEL1Ev3TUfJrbM6s9PK",
  "key36": "43oGRP7ej5AUaYBJfVY2crwbfZk3hG154BwCG2rUqb8jWhBUT9EJxfAU5C1RXws7LfXNrqV8iKCTWf5Luwj7mqhL",
  "key37": "3Ah6iLA6bgRhYV4zGF7dAX9HmEXKrzCQAooKwfpS8prbvgrPiDuh1QqESBXDDahTtzEcNGWASpRSBvEmumYoqd9n",
  "key38": "5ffUEnwG4pqSg6LHc5TCTVmZa46NUuiNpGeDrLfoFHxedab4g2ed7E8HFb915ynqqPnCK4yQqiaqnXpByYyaFDFw",
  "key39": "3hWvTREdoWjBb8caCkGxbxkNRRLtQV8aN18dCqiMW14GUBicmq7xHPJFkhcvwP3rCPPf4dUGdRVAbPdRyD13PBLQ",
  "key40": "2i2qCYuqK3TSMwsh5Wu5wp3G6UPj577qHkTEQhZXuKTQ7hfuMdLjCVjWZoFRjbssNj5Ds76nyZYPngL2EZ1LeYMj",
  "key41": "5gXuZ88yHqHprMYd489kTkXBwLfMPiMuAdnhg99dxPGtUFjUQ7eDgoWtcEkho1QkXXvpiMk8aPaGDHpeovRVAKdz",
  "key42": "58ibeem4vcLQ6LbUWaFoiU1WwYL6KAvqQubczPbwD2VpRApD2UaocpVEa153sgvjadrRawLEz3taTw6dSknPTFYi",
  "key43": "3YEJwfo9gPpPy9AkJKH91zhAYMcW6ReouubfUmFztfSE28JRjzErSrEBAVh6g355baHQTMvZuD9Qa8hqHWSpRzRZ",
  "key44": "5A1npJGuupwDSQGjDNGiqyY3ki8dHthJveTeM2kdSchkrr5NRA9ZKm1CvB9vYcCbJRkodUU3EWeCMxG4DxG2t3xn"
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
