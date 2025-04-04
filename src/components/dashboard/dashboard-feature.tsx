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
    "Y1ygFH6Nh5ozMuZEkZ1rTmHumQqyEFbfSjncC66ttkSWreJXvbVHioLQnmxPs5J4wvXchG3poa2QtFDpJvtPees"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uD63poifemDnAmWtMzQXswTkJmirQEnjNz2Qr86CPsgRT4p7M96Rj2XWW8xggC3J46GvyY6V2ePoRLebWHBzFYC",
  "key1": "Xx4ZSLs3MVgxbUGuATfQjfy2tQ5H2uoy4bVsedXRX4mE6sEanCV6zdBr6HH7pNCTKu1Y1pzyXncRBrRryQFoGsU",
  "key2": "55pcU64o2VnM5iVJUpc3kbELWgBHpVB4jNnahHu5HCb1YoYehvhr77EJdE6u9dN3A3CGdy1tKGWGiALBwugj1ymy",
  "key3": "2S5cUdXvZH9nHKz3e9hA9fCU7T91zvQ9thVVFnyYas1LypbqHXsC8zXMYh7uwEWeUCDUAUcANP78mkXarm1hV84w",
  "key4": "48ZhH3teSs3BZYpzBy9echwiq8AaP1uEEraBbp6UgDVJT1wW8Bx831MpPcnSYXfbUSY63pvJoqso2tbaPCXkyeS9",
  "key5": "RRu3G966dKvfU8vNN5hppTKyZ2taQMh813SgAAhvDv5cfwhx3uNg2itzzhFLK5iWeSuYg8c35Sz3dATSDXmnXx5",
  "key6": "5ADoTE3LRyabuNMJkgnkVesrTGKcaXNS53CkKbtHg6K5h4T15a2kuy1KUC2N5RNPmdhDifyhQNxfc9YN3Mj6Rg9x",
  "key7": "4WXtdtiFYxnJuhNf191bbX4g3MaqrMqgbmyERsSrboVirr2tqGYZRuichRZqpAUNW9sgDUiaT72FM5193veYEruG",
  "key8": "4ZKrFozuZURDJm3D8GoA1UuvixJXNkxE52Qj7aVwGHhrWemw67TCM8G2Jy7dLmHC5qSwUutx7dTjiHiD6Y2dRgat",
  "key9": "25HFxoT9M6o93eHYc3xix8izEMXhsMRzK1BgALW1nWjG9errU1vMUmttc6tLwzK155pYZ9Xh3ph5sPHzALGq3CkS",
  "key10": "49yDRcHdWuHQwzvszzGR3yMbFCCiYh5cD92vnYow7k5cVAGogQPaJQ6qaGjxQzujZXm8jpdFc4UfQSZkrWNteLbg",
  "key11": "2J5rQUPp2i6BcyChvTVWteveboDqVf2nkxAo2V3bJrtpC8SQ2NpYHgPRA4bNzPEVchevDjsTuuKLybsDveooE5Bd",
  "key12": "67Vxz8h4dn3HfityHagXeZLMTNKYtqVa8oxfkKgFYTAQFbXKuV6dGQjiWLn94q2U8cTV4oQbRcbeTUPCrjsxzE6s",
  "key13": "47zaXbeKvR7rmddJoY1PDULKb6A7UypXKKwzuTQR9JMtTx5tV8uG4SfPjzabepqx63tyVRyhfcnd72JYJ7nvJMsE",
  "key14": "3GFh9zhZtRQnpFwG1zG5RSvAptQLtFDVWenU1LYXVQeqXZyoqStDFqvW3KvFgmPzUQaXJsNp7be1sUruM8N6ztkN",
  "key15": "28jdRm5GK8o7d9rHW5AqcepJiQwTbwp9NZ5WoLY8TwF8PcVU1uknG4MZADZL7cxivYUc7XVeAJgrgf8R6eLjnDdv",
  "key16": "57k26GYjiceuBdkuMaVQ9oQGo2wCLPRXXsCsiwTfej287BM7XoQVHhstxTNhcd2CzUio3Nj9Kx7Cnb1mWycWT197",
  "key17": "4xeMpb8mdCx33kFkBj3yS7fhEXBncdT3K9kqzajy71ofy1ziTKmEVXtbVWAVnbxofFkwgvAoYvqUozWHZKNKsSfN",
  "key18": "BB68F9zMFLwHHKmN8ABx81SoeU6rCNaBdavRUNnWuR5ffmziaJDfUbN6G5GViQAWgfAiUWG26Xb1DGUvbU9A9td",
  "key19": "2ek5HJVmW3vH5csoL7abbuMMw1LoELF7ft7xT9ochwYeMzfxwvgGwkSxdYPx2yimzJXNhfMw9N8mJj1prQoDu2Q4",
  "key20": "NYdK8Mh3xAYAc5Uh3WWWEur596mmXdNauczwDuQfA3yDmyaKbyyLhwtuoNejNKU1eFKCsQeSUDX4neMecaL1jAx",
  "key21": "4aL32sfobz65xAdQEnM8Tt6gofAYQvUwwbWQ4U1CZvYmBKoFUYEb7GVD7Q6QkvXLvuSzGTPvQnCxX866nyixPqoa",
  "key22": "5d8dcq6Bxc3Qt4V4dSZ1QezX2mqV7Ur44mSvjMAzaZ92QH9e9nzafBy4kJ98Z4nZ3vEyaVxBWTobUCA9wVD5koBa",
  "key23": "3YNi5brgg7Nxqa3L9drALgmaFwVDnX3PmuV2KsnL1rzaXARaYZf9hY6WmLtFKVRAwTtSpxVAZa4f2gUTXFdoTM3m",
  "key24": "2AW8LcmvifEZh18G45AX2SrMM99Ejaza686s95KXFFqcaRq1aiTRe128V389gRhqQBVAYXQ4RZcq7qnjhdxtRJwW",
  "key25": "5jK4otyykELrcv5e1a4hM25X3qTdds6MLqCsPBus4mLXkwATFnuYQ3G589sXMiFvwh61nf87WbrgE4xPfnUNZbq9",
  "key26": "21atpRaZEzw7fjxBAGh75PRmP5HZNoTHKVSuBn81NpZdSJAPDddx2iZaHhoSALVeo1TGHFzPTaYirfSpBToShTtK",
  "key27": "2RUcm3o36gEmY9FnptivGfcyYU9FzLF667s9rBrWPfnBKn6xX2esLMggqiusUWCcRFXhj4kYo7SvNXgytL4gFVL1",
  "key28": "5VSpknvgodht55mNPPX6n8iWcWjibYRnNzNQAkwyH8xJFVr5EoJTjTy81euJUnkQ2KnWPUk7QJoTBD4szxqqVi7A",
  "key29": "49gQB9ZgqEnf88eQrNAsWKTuJq2KZYw245B9cqhj39xBYYmjihMrhnnmBsbvfNbDdVY8WmJ2WBXvheLD1xoab1y1",
  "key30": "5fVqZNgED2tKRqpEaoV84Azkqzk6d4newSF9GAfRGNQUGJyZvecNoWUKJ5aEoquB1CaNQEwPEZnwZtLpCgZjuZTp",
  "key31": "5RhGBwfDrz4vydWkZMwp8YbrJiNM3fywZBXuRK371dBpSzuE182mKaZcYVsR12ALKJb6Tvqeu1WHAAYVWRhtdg1R",
  "key32": "67njF2FLyARJc1NoLAGf86W761TkfuRcruWcGHSLGF9snNMfaxQaWbUoJzopsWpF2u4iMpv4ZPKVK3oV1XgSSeCZ",
  "key33": "2VizPwQDVLptu65mbDZHzMBkXg2XdhPfY3Cu7ZqYJnQQwcV3kyGe4vTA1zSxT4jFT61LnBMVFhf1B2w9rCNy9gqk",
  "key34": "4KXphnZWN5YiCSnP1RsrNjZesyYdhURvWLq6VMbjTAGT3vNuiH2QXxfN8Ewaaz8Dyt8EZ3P5dCVZL8P217Z2yiBg",
  "key35": "38Wvy2xcMZgoiKzWyBEB6HQqsc2FjNxcUgm2FgppwE2Ppxs7xXynLui5Wjz9G47SocJxR3W2qRsPt4LRkemCnAkG",
  "key36": "3dfYpcXkHYGYfCj8h8QHuyxxUiVrmAJqZx7UiM3kZK3KmGFgeEmYhFFrbBbjs9u1q3Mo3afL9SBuUeHhNpXYnm2s",
  "key37": "2Vzuvvcg4UKGtpC5eftCYhPxfKy2ffeVk95d1tAT3DJNkVeKHEha9esyTrJbXB3aMLokCeAQaH4zvfPsJWYP6y9p",
  "key38": "3Pdi1dea1JYbsXVrLLmEm2qpeJLPpqsXPLp7gfWZU3F7V862xS8UCodszTZXT4Z8KDNaREhc3PY4JegRi1DK5GYz",
  "key39": "U49j5C63ytMxUJc5XhZPRq8CyQUVw3vCnvmvUmGT5dYCDomuL3uANvhXUcsUNBYRkcHCHBWBdzgxNsxHDnWXY7d",
  "key40": "y2xZJJa3pG1T7vpPrPoArw5NgmQ2KZAj6CMJ7QjGvQFLxC5MRBHBaJZwWsvAig57ALJqXSM5gGSEBzFEBRYD6r6",
  "key41": "3LXnUSLzE5o51ukcbZ7ExcBBq9kR7Q6y7Sxy6jM7iQ4HUpN23cRz6cenxTJVEo8FLMVcLcfQisPxvDWsCF8LwFsb",
  "key42": "wW2RsECWdyHmaBzhfuNoFNbjkVtjigyjdjfT7XcxoCSfe76MKSReooK2RD4YPG7iXr6BFTLFSoDzr1SXGUetrGB",
  "key43": "PzZHCSNM5XJLA5T7HaBEJizaJLowHfKBdTk5XF7wK3TakV9JZ1RGAG6Lb8PiKDAuruzpZ5sZ3fD6mSsfVwLossN",
  "key44": "5zdP7z5ea3LjYN3W9NX2vfyDbE6eRVCgLPyyyyTS2eMdYLb25XWGFFX6bvbSq3fVNPjvrckH8ECNXhXgRvrHwQQT",
  "key45": "PQNCXM4SKPknqHusEfK3e47P3GnR1rkGUYvxchWmxLLFNWf7BhNbG2gwYQ4aF9t7j72hV4jVhVzeZ33raMT2gdn",
  "key46": "5fEiqUB6cHmHa2RS3eZxKTcXvh5VCbK5f886qPQdsiTh5BKJXRpAB65dfBvad7uArXwXKEJizRkHZibEUjRkrBLj",
  "key47": "23wLWTRHog2y1wTCGGDpSCk26XxzyJjNXxWcwWAKj3LmXk8YnRCExcduDMykRGfz4tvygg9QCU7j5vVuSD63at7p"
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
