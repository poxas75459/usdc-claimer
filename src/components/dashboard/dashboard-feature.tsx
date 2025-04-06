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
    "5htmAP7paNy1Au2CqD4Hop5UAZviyf4JRfTh7VynQf7LWXJkJhCfQpwqHSz2qeGJB8VVDk2bdibtaEycsZhnnWQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vaB9v4HVrUVhvXsg61tgF3aKNfRqohqcNWgfPrt5w5BT6pfEopNomxbCEr5uXhcTiJkWz8XcDJkksqCM5kL7fRL",
  "key1": "tjFHSdW1pd1uXQFkKCTKPDUV8C7bhAmYVz12C2Yz538QdmiHJwXNuUaraenFmfhSCt4gkL2nSWWEicWfTeBibXc",
  "key2": "64jegVKGoAzDk1xeUW3ALVThsrsq4sM3gyAu6G3MN72out7vFP1biACFowmDrk16wZe3SqakqujcY6mYjjezFqyJ",
  "key3": "2PhRmPG3KYa6nXGApkc5CrVKw4ndiTu3YK58YWfxh8ZRrieQq4HU734TGgGP1CD32EY3wxCKckYcyBFY4HP6Un2q",
  "key4": "3bDQQReGqkhNTkSCpfP3KK45PEuyUiQ913JYR1BiuLmeZHsJYt9KPHgfB2MobnxTnaYgPBsUXBVH6brJYRBQL6JA",
  "key5": "Uj81J3zCkTGh2a4SBEs4KP4PGTETzuKUQ7FdBUydzV6DCrKd99u7XSUrdazzR8eDwA4EPzQtwfA9MzMnjeWCYiF",
  "key6": "SHrXHVpxaCzfvj27knWDtSWUppUVVs7Z3hkeCtRb5yc4VFp3Q4q5j3A5nfbLiXZicb2P31PHhnvcbvUaaEtMhha",
  "key7": "43s9FmkZth5mBYaBEEDxCDaBgxbfVtpcy7F5w5QvJSsZjhjuZoPhF7t4WG6TJtHAb8TzKwJpx16Rz8sWooyViMwG",
  "key8": "3JcGCdU8uePodkDw7yg6ciBRLsQAkdVfkXmnnyHxGNKPpbYE3tnwFL5VdWTfzopgH4kPzTCoDGc7wuVh9nunm2zr",
  "key9": "2MH1uxmqeu2nqkoTzPGdkJjhW7u5KYfCUyHZcuexDfvaq5Gxg7vKmvqTPzEP8pfqUv5xme41hGoBSHCCb3LQNoTC",
  "key10": "8FA64Csg1CHaB8Pr3KETdLW87jpVAxtnEUqFiRcG3SMb3UbgWD3XsnybopRdYCHfgvtGhBw6CnK7WoFPs4UeZUQ",
  "key11": "T1aNfrWZeGVgiGBSbs15pABUoRuMChqd14x3SGd7ogP4rVuWGH7t1vgaN7RWPjChYdiPWFatXnfrADESh3zAHzB",
  "key12": "4RYAaGdoWht6BPmX2hzXQfDR8NVmWNGgg1CLygeKjeH6HAn6KmWXje9SvKk31ZzF2snt6LK1ccJzksJt1aVUZ9zg",
  "key13": "GjUFxioHp8U3xtb3DYQ1EqoiyKvXtQxpvPSfUy3baHabAu8zDnKcrkr91wbR1bFEyiioDHpFSAc2VVUqtMWCvq8",
  "key14": "PUQEr9xGzgigvCyrc33mpAckxNthJ6vZ1mCgUfzLC1BsTE5bYMXgcj2bzBb5RWChVzGBG4YhYEzuCE2EprAs8eZ",
  "key15": "3Gre6ZUSuDCQVVEZmW88sGKbeAqCgAm57dDiSpa8RpQz4Yf9B97dQyib1VhiASAZj8HNb9rK5YqoK3s7gM2C7rH3",
  "key16": "3eRt8mtqhMjmjnJqMcSoAay2zJqgnE5Cjc5ZMpPpMZK8i4ZLLKwEDk7k9ZnPmzR8W75Uy6vnFXAc8ReviYyjiYEH",
  "key17": "5HRx8UoYm6rW1ruj12WbErWTqhyuJhPHSmgEmGggYSegvfz9pnguAJQ6q7vabWtZgQX2Cj6cBUY25EjYqNH1Xnu7",
  "key18": "GfxfwXjFDJhk9SVNQNhRKNyg5HQ7xrs5Av98HTeJq1XyiD4Y2EFcARBC4vm4RVRBD7gFPPV9EN6CzBSswnJMuSw",
  "key19": "456L913emUsKfWx2ZHW77rEnAjdpzd4smwdcF9zti8bUmpm9HN54QinK3viHFHVYPbsozxcUbsnxpdbJEcv2rfog",
  "key20": "6EtzWiAWtwLikzwa8HYanDkmmneXfFCcwkvqV6X7TRiUCDfWDsHQbAzFk3JXkSoy7MppHEGrMr254wZpjEnk6FH",
  "key21": "Ewu2xAqpxirVtdyuGQ9QBNz9K5dZBjmikM6HwDv66g5oKQjZwmfb9VVBtzBGGBGTF6LZaA8BJHMMeqnPAjJtwE5",
  "key22": "3bXGBzcdyoAagqH6oGhsjcaXSB2n4YBwmfuJExpvNwpB8pMawhovnuxaLrZFsgpgXf3HDVXVUT3859zLSpi8WbwF",
  "key23": "4niR2cqjqbe3mSMwzqktYM9hyHkhSzs9Y54i3gui1MWUL3hAjCb1hvWK3s4V8cutbUw8CuGABgsF8a4SmwCvoYs7",
  "key24": "5aRCP6eHMZRMSb2qHCgxHbWzWfJPcHqkr11eFEsuS8sqzFbTSYUvuDRBXoziX9jA5E3FRLigTi2NLNn5YhWQuUs7",
  "key25": "2QvSFKizNPKDtUECoGLncikiGECRaqrMQdQzgPPjuWRKBS2vBcAaVcP8nZRqdDwRADTK5rH9hKJCMHSBZmgWUnz",
  "key26": "3JgQwri1zRwk9sqk53VSKimvE8KDJzuRHJ94fP2UBYU8dhPSeW56HUzdgepXXd9gDYQF5Qpn2MVWcqfGaUyq5DwU"
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
