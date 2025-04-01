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
    "4y9CV1qVoiVRk4NC4PaW56GiFM9vegJ82EH6BYEE3zdcTrKYfYHAyd6i5MXT7KZ45McjMvXhNSvN8HXCr2TAy86k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k532eXKPqVu4ZftWsvaqBDWf9EKWRhDrXhozWFSN62fD8qy4o2mRR41RVCc439Tb9q3HfbmukaaBXpmAqpngF1A",
  "key1": "F6xBQb9VuzHQbGEe25qW1XW2dPAqvCu2GPqYgXmi8pbkZkj4w4xNeLTWCZrub32M1co9vRRdceXb5F8zAerZyVB",
  "key2": "2dEUFdptKtN19JbH3oPufmbwQ8SEFLBtWYSFnFnjGmDkv2ojjgWEVe5q4aKQVErd4TXjosz4SZhH7HzMDHFba56R",
  "key3": "WwXh3i6navifd4SnKKN3q4FenCrzmuH3asBLxnWfrL3hAsUiwjNGQdyikGXTpaC1kDeJdRykSye8xpWeC1pd8X7",
  "key4": "RDJxP7ibgdnF3swf2UeoyQppJAHK3mHb53pt8HwnJ2B4txfk62WoWJ2a5gGMExaQPHedfksKi6wL7DcshMydwPM",
  "key5": "3G3cB9X3KsYGD6QCxeTWTfoCj4S69KvatJxQmuTQyeCKrdrkDYYJFhS1WH1krNQRW7LvbCMyi7HY3gew6nKYMnny",
  "key6": "5a4yHz5BvamxABeXQkicwy9Cgg8wNsZLGBYhN2m29idGvArHuw9FMaCEKDvw7NRKKApabHxmxTEmxQC7cdmpcGYD",
  "key7": "27nyNgBNFBTPdunzkUNsSkGomg2u4cU94oVtQY9PQ5RpUBa1RqRWe8s3H3TiwuJfRUThJUyjVk1jMkEUjD24K3hk",
  "key8": "3f1km5E3VuCDcr8tJfwPf9nrgxSTHpXkBBiKtK8qsM4zmVNH7C6oAwdPC9RzZ2to3GhuQRb12DE7kJ9K4psmMwxh",
  "key9": "5B4j9DVX6edkzBx8NhXfiCSap6hQwZ5QY1i3nT67KpbeKQov2872944cz1gLWHvQe8G57r6zLLy4S8zkpr5r8PAs",
  "key10": "4sRHmwjLt1YAEBy9NpQs9qaqU8kFNs4HQDJrPUpiPiFBAXvLo4rndZQUV1ANYtDUpSBZMZhk6HbE498VLx1fdEVR",
  "key11": "4DzEtfX2rdBUv59o86UKTKguWZz5PoDnafk2zLUGYiQVQhRZeT1Y22J96zZeeyLJ5M8R9R4ZKMu4pfScHzJBAoDY",
  "key12": "5udvzwKC8hB28LCNpaJxwqBJ18mv92x3ZjFHYaCTJsU426YZJn9Qp2HTmJ1fEw2h2SxbTHu9KbK94bdNgPTBf2mQ",
  "key13": "5JU6T2zAkWoSQw58r4dVoG2re1XmPemFggGr7aHg2L8dZeK5ZTfSUYuJyrGWXAYFUnWCHC1ewEEGEy9RKoMcPj7g",
  "key14": "3PoP6eSn5GJPVXAWbp4j2gU8SQcxBXGRqKbjMsGRFmzAG7vaxT14rMAuLk1Ry1b7tHX7L26NW2es16bwYeR2m31K",
  "key15": "27j12GcfWMsQn52seiydWHS3Pc9hDDS2KKMPwCjy1c1RkGwCBqvTToz8Npofu8knhGiT7hLCgwF23z5NRPChB5rw",
  "key16": "LqDzf43k4QG4rUpyB46jqo1J52vuUKHdvRorghdoRLdk15cX9NtjZuywsexozjpQmgKV45iJ4hjejeLSQTm9Wtk",
  "key17": "59cDKLveS7G3b5TLJKcGYL3M9W1dp2rg8ddideniDMsTWPT42243f8ecawpPkMY8A65pqDsfb2GhPoJcBSohg5Mo",
  "key18": "446JYxHwyFB52emwKbZFDWZrqm2N2VfTHqMtYbsjKHaiTW1grfiJR4KMK1s1Ye79qKxfT5XnLzHKrKKv63pWyt4e",
  "key19": "4vHSikngE39UpaFc3QhZBtviCGygTobENj7YJdjE9Zkc9YGGv3jBXfqZ9H8agUqFUof6p67pDPdSXkzrVc4A1BT",
  "key20": "56xbdaPD113FkTwYBBA5zFgABbEatshZhjQbMo4cULJWSuWKLSxi9e6zVDxc3sD8h9d3MVBJ77oL65yDctuuc1SE",
  "key21": "Eh8gsLrh6TDnkKszW3eRiKzjvaoJaERfA6oxQbaeUcPkYNqac52LDC1CYXMzWfUyijePhvo9m2LQpDqYD2FE8rW",
  "key22": "3qv91nTYTPPuCvvxa1EpJUdJ7sKfythXrKeoQZzuGp5MteBHCCiqgVgB5HMoXRCxDeaUKX2rf9QdCh7vYc72BR9N",
  "key23": "3MCRRRDvLxX33PMCM7JygtXvF9Uuy8ztVhA9FgDvZVZU7XZaLR4VmK71oQCZKdY6gWSXrdXVPVtPSRBF3LqZyPh",
  "key24": "52M46B7Y8x9jSu18HQAhbKEGHS7m7inCVC21L2Px6s11nQpAcagLjwueM3nVU8mruGDyecG75Y4WpZ5ADkgTaJBq",
  "key25": "4phynwng1FzgReFLjUHYv3gAu7zf61WLpFexhFmTfePWG4X6dcEa7EDUkwGgwADwsp6vvXisje2PvkFC6cYe6unh",
  "key26": "2NyKQoinT8ZZUdVgj1zaPNjrJCPn8PqgmpAkHCEE2uhPragU36hPD4g4H9mS4D2VtfaoxBzMUFYTvigHZGE8HA4b",
  "key27": "4oWrJ2YhWwDQQEkgc18Epssm5XoctUg78rsVdLuPPsabCKdfEmSFS7YzvbPQHQk8Wz8GSzUhihPg1eGdaMK5Kj3n",
  "key28": "4Y3d1hyjJFuw4w3khsQ38mKFNKWHMDWHKoSy8jz1fyWVABjva6dwzGjeCRQuAQtAA5u5v6D4gA32HzLmmyWhPhL8",
  "key29": "Z5FoETpCUiTgFr9e347wmHAaa5ZMPXDaGDfHQa9eJp8X8MUHQbchqaM9sD55hKssMYqLmj1KYMb3C2PjGE3qFbo",
  "key30": "2KNDhSVBcTYybfyEQDNHxPWYedt9MEQiZUSrey9hR6d9i2fxUzXsHnnJWKgXpwJrod9iRo56ZygXriR8d6dbEcbS",
  "key31": "5TMMjugpaoxR8MZZfxTVpJmUb85jLnMvtu2o7vniGhA4NRymCZxFG71hMh2gRZZmirLLdtpFdLUdf61zBCoNcCx6",
  "key32": "4Y73t6G3wJpSVgVL1CxCVAoFVDutPy17TNJPQXR57pZs2zGiQT9pvcmxQHgbeet3cUPRorY966HLwvdHMQH2GS4o",
  "key33": "3UR8MgMGdPQig1XzVfi1mWKWfWThJbNt2f5hQcUdksQYWixuTeaEZC5hiJgH68by3LGMsCGuhoB1eh8wCYXVfjpm",
  "key34": "5pEiPmS53aPk2ZwnKVX3dEmZsrznbFpLDi1SkcSRH5aTxQUsb3mjBc9tRiPuvJ3Eq5ket2EGz1SAo4DpDgNtf1NY",
  "key35": "3jsPPLPzNuDn1CxqvER9Bsh9CVaUCcmchDx3wXBgJsjmB9WiezTjmjkDw9ZhSFLtzUWixPMgQCnkKoWATTaeoDWR",
  "key36": "2UEH3vS6GbH3D68G6GoUt64hEUiyHwGXj1YtmZAX1d7r9rpTBYvRYKQQDs7QkrEkqi2aT4oyMrsXQaCAc72jFyLM",
  "key37": "TfFARJLTPZrhgWVEEZjLYm7h8NQ6DtMpuCh3L3aKRo5x5gpLGtSL2m5BYXU44QcaA52kmbyAwp3944QcSgJzYi7",
  "key38": "51XdzCJbu69n3PJuU6DmufPNCmut8behN6WBxmKp3TKNDNfJc1pVjqqGc63tjmu5trapkN1KW4YyFKP66hAJzste",
  "key39": "2LuvrNZxTbNbhGRrELTSPG6BHJSi97iDQu13wgfrawxeyBapsyLqRJi4aLzUVc2MK4F3z6JKn7x5uc32EdbNX3gd",
  "key40": "2S4WchiEFNkcphkWYj3akJYK67QpaDd8VbyJxmQLA7Dd3J9uUoZqrm4RnaPCb8fJynNRPXimZwC8m5RBiYSX2wMw",
  "key41": "4eG6ovpVNgHoj4V5KywtHdbTpNQEWbT49wT5jmuaXzBYuDEnudp4VmGZwFEKQCaHgDZKJZRu5GRLr11Gz4bw3xLR",
  "key42": "2k8gfwGjhsvW8mH1pK2xKJfpc4ZBdNZEy6ECgAxVKhD8eNxW238X8NRt3q9tdbQRgCpUhq678mug5kfZhVdnHUKZ",
  "key43": "4FUNfetyqVNegwM27hr1L2ZxVTka53J8gavYLYoYP8NbH9oZXX3HreazYh9t7ziwYVYXfJL64WbSU3PVN5xy58hq",
  "key44": "4L14Thiyc8k5YMsSqQyyi1n63GwMwAZTnvnYY4KDfHHsN73RioGMhvWKsTiQ1bLZrRPty87dr5csRaahLVYB6D5a"
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
