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
    "mTSXVvTa8xMafVpqZVxHVB98Xz1n1XioarGbafiKBc3sPbKXVmD1LnvaruBnaEbWgfDVC6bvWEoJo1WMLd3Y4Mi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PDtwESUrUc7EZRoDMRGQFM4qjmh97A6i4rjJ2SV1X53VVvn5JB5GzKUN9kgAwGUsiCzVW2iHdStZoDHushUtxDW",
  "key1": "3r9W5TZmbP1wtQxu1WLUojdsmy2oZxcFDe7JmtmkSzRpVo6WwEKYq7geXJGLXvXCq4ShGWUotDtUjBGoUVAWX4to",
  "key2": "3dhqAkSTWazswN8rfx81cLmg2SZaFoQsBDgSiCv3W2gbBYTaYrWBLQKzDbT9r6XQexwaxVP21RWGhiUbhAzk9aeY",
  "key3": "2prbKQSQqEK4u3UT2kiEPveBmnUXM9R2m6Fh53BugZS9NQmfze6eZMrA1tgsxveYKNuY9dvirv5sPajtkWsTeQe6",
  "key4": "HvMwnecqVAjZmhkXXHEHom2YkrgBBBQggHZEzyymn3RgauhDMc8BQ9w4kHh75U7EScSmkjkXJrNhXwKGYqwPh5n",
  "key5": "55HunoyVvnk7vNu28MNy1m2yBdU8SWbL3gcVyRjcCyv5gVSqrtkmymfQcjWgTQPyuyW921RPydKpQ435nYMF6VR6",
  "key6": "5Cxv7SAnvQS9Tr44rgs1JajyNRSwB1bH1sR1Y4MmgBGriqxZBv2yPWHfqr2HvtoWTjhn6ijHnh37m5urgRyxXRPC",
  "key7": "K8KaGJb7EvcmstSffZUgZzAShSHCFyRxQWtZJDPU1yKMbCYhfjjL4eCiTPTyDp12ZzRF8Tm51hMLgi7yRJwxtPw",
  "key8": "2a4bgzJnNFDjQqtfaAhQf2sY6mA7AkwgBjrwpzLxtJ4gD4khTBudAYZ4WsuAEh86C7v8Sjw2XMcJKh7JUSVChw4Z",
  "key9": "2m2HTHrFfXmzsU8qZ9pPWtMTNVAWh3zDL7ccBemvU8oLcnmngqTdAxiHRN3rqTvQu5sRpUKbSEZf5psc5Qs3tLz8",
  "key10": "4v9FYDc9EcnyH6wQc2P26pwAuPoRHkCELJ3Lx5tcRKdkcFkwZit4peGzDTeWtD4wU7GSLvk31evUJFjDbaaNnvJu",
  "key11": "Kdenw4Dp3aPngrj3MimxjZiukunv78wZBMjXYdYiX4cN97CDkgJMEAqF1cHF8ZJg5WhCvxoAeQeyF5xxiDFjANF",
  "key12": "4zm2yzijhaWxSo4n9EVJAJuog9E7Tnqoy3ntxJkBSTKBsrukLiDSZZEpErzG1c9i1EEgYiCzioJLmYvVFomfUih1",
  "key13": "5KvcKNhxuen8Y2LGqkXA7GnkUKAeHyt5JJYqf3wwMAotn6bhyPs9eVdns5LVAEmnCAtdMBjLZC85emvSGDEBSS1q",
  "key14": "aRe7STATj1pDVwfm4jQQHcMshhzKB64jjPtj2Y941hJqTK5BZjWu19kcWgnuX16eb3kfqYzin562VhgCGLUTaLa",
  "key15": "61qyuAUA3p3fKNpdfqHc8ePWKnXisqvbfXS2QZr4bcZPtMytayneiPygirXu5QuwLQPSaZjFpPMfGXV8WESdCVWc",
  "key16": "594QttMcWQB96ekGtyx7PZbhL4J3SLNEWKTQEQsBfpkDSYTfDxe4A9oNiv8HGixoWPSgNQm8R8pZWR1xwrjVaSGi",
  "key17": "vr996xybikurPPhKhKuifr8ZRMpitkMckM4Crisv8it4uUFMP3yJvj6W9CXeu7QB8kfRZArXkrTmgo47srL9DC3",
  "key18": "4Qov8F8saQNTGRo7FQwrfu4WS46EnwDsBRDZNu7EVroRjhJrxjSnM8Er5Gj6EFjBJrH9oGA1GBQF6RprH1tXWtMJ",
  "key19": "66j6ekWuE6JMdo4uG12iKVQBj867F1rJ3Hxk4zhHRWj5iiZDV2FF4a5ugD9CFatp7RRE69hNDjdSubpvH9ReLVdb",
  "key20": "56rFdeJYBrRbaVy6qEAssncBD4XAL4DZDkK4s4teu6GY97PuWKheroMpNNUmDpyRzqRmaaFNzLhp4HRX7kSGzCAY",
  "key21": "9RwBhdbqriTXu5L6ZxGTzZmZEZnEpLTtBVyQrFNzCUNZarVsXJ7LukAg3wijRWw6a1gFZt8RBNVgLwCGZqhyyG4",
  "key22": "4sNzwXNkAPzo69zYNWEjeTn9acHVHa7E27yUFSo57LS8NpeP4eaauwtEeFd3p3KzDYaD57NWKDLZX2gTExVm1FH9",
  "key23": "3YYe3fiRHNaSKy28QP7Ury4DTGQtnwcpyoDyes8sDMGTWy84dJGPCA6LA7eJjzoLKL7CMJ25q6qZqEhQny79JZcC",
  "key24": "PoYiUChK4A2hnumXibQcEnhmPpsicNVaywYZcds39dRHk9sFRmChrusSemmDidAswRX6wZHKXEZF14qpK2NcoGK",
  "key25": "3FWhNzScUXFQaPWEkyXcqwMxowydzUuWnvCGZF1gBxRvipajUiSTLnwt75tPBK24vevMitRaQjjGdnaUGdTg3XqS",
  "key26": "58SR9kzidMkE6xufkpNDd9epS4fCPY6zwnDMGUxyWi25rfNb42C23NNzYbXQZiNLsA3GBYDjFAZc2xNBtAg1PuFh",
  "key27": "817kwQbsxTLv1XiWvSrJ6zrvu2fVnHd2PyEouAkbwmnMgDeDKpFtMnkB2ZyV5WpVwZThi9eC4xU5SP4CSBQhM9f",
  "key28": "664SZXU7NK7ZNk2mrd8QcGnagwAYtwnWk2CX6ByWREf1dbNWQg7bvWxaPFMhrzWnG3xjAzbaLS7pY99Ka34ueR8r",
  "key29": "61rAWGqir7fVmer8NEnfeUsW3Sr1ycTMpeuDDgfVKoXJG6US6n36U1mQgSVicJ1am7RE8ULYu9GRZ6aEF9zvDzLS",
  "key30": "5h81PKSfN9rMdq648PEmUxdYHpk6QFPr5giNQE6zBBWcceWdFLDHioPt6FyoDTVxXT313UgALcyLyWVKocbSMFjb",
  "key31": "3naBjfckN2izULkjNLMDwrwnACNRyDxrxGBhm4imdBWXXrRbHwx5m88GccJRnB9iMa4q2NqtuLoae23KHhv6yuu1",
  "key32": "42Et88S6NJvTxFSyveAwLQ1rciMGC6ik4dZr1obCEJKbnGKFeygMMkxz62kVsr2goeSMEuMiFww4ENmZJf4RKJ3Q",
  "key33": "4UJe1E1VrL17vn6nRFqarqdarJUSTzCJwdeykHRp5KzYZgCNr2Meu8UarZzSWZzmHpr14npXcrVMuMmTS414V9w9",
  "key34": "5pW6wj6V4HaAbaYNa54trE8zCpYCeiJcsrcrTuVzTeUPn7sbgfP8Xx9oRdGi9QLZw4ZFXnaRDDTTsAzBx3QdmguR",
  "key35": "4nC3Aq9pFrWm9NLMQ3EtDFMoa7TTu91oGUJfHGqHhyLCUhcZZmCKLJpnX5jPuxXKMoxVrp9SudE1xK754Q6xPjNi"
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
