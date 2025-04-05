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
    "4EzikfQYPmNciLsWWSf8UhDRRwwzNero6qfBspqAT7h2bX6stcLZzQnY1aiwqV7vUJeEFTMtpKk1PNBVz3x8Dogw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iiki1UPNooGhJYcvbJbKgGjPz2vbHvBA4PdWoeZJmhSvRoiaU9kwti85Po9pAadk1hr3V9SkDJS735KDEQp4Mkk",
  "key1": "wffh2zj24QrgqncqFDYmnVeNoY97L6cxpwb9EYeC9TM2Gr6C7HggQVp3aoZCVBDtGVbFFRXqpa5vwVMPUuyWMQg",
  "key2": "3Cpw4g6rbAgihDB8nE2tbQLmy1Phs53Wj6w8RDitN6YpyFPJaD44BFdp6fJ12PrWFfN7SmYbEpxuCbBM7B8S5WiG",
  "key3": "3uVXxyZhW3cYbyCT7NFfpiRnCjhgvNEhCeDCJkMFngekTYMWdABXmkTWAi6THFRr5Wb4fQ5JEPCzxyfV4Hh8h5xT",
  "key4": "4xWZ44t5toSgijbHfjJuJoDipEyVFqcdam4xqATkDE2s9YmQnvdjv8qXq1SGTnPYBjqSUBSBw59VVYpEdSJ43qRZ",
  "key5": "5itRoLTMAFfYTeqdDt5pmRMuepQBe3HZzedfdbx8bbsemB2HkWYDuj8R4MA5gy7YVZ86KKK43zEwWCUUHQDsQDFA",
  "key6": "sbbhSz6Hpjvf7vQqVhV9suPbUTgk1oXJqvbrgZ5Qw6BH6v1cLgbUkcbdtNzBP1e1VfbahFxmiEPuRTQntRRBi3K",
  "key7": "4JFs6GnWT1AB37Z6astdQYBoaiotcA1XQUUzqysX88qSgSejko4vzH99oauHDa6teMmcEUxEB9EXH4GBGnrLeoso",
  "key8": "25h4Atmq8MewaNfaQYF9VMjPUDtfmjxGLJLPu9f9vXLHzuSrQrHenBUQH3BoQYHLTeUUs8zPzRVFHhqLmt8wra2G",
  "key9": "2FgGX6V6QRX4Bww86QdbPbkfdR1nzC3Xr2gH8jorDpAd3wDiQHZDmPgqbDws3X4jPxSZrzE8EcNH9yngQ34L9Nax",
  "key10": "4h3wFxqgS2b4A8M3JdyzsmSjU1u84W4wyP8PKs2C3E764Pu5eEeU1TrDHPAUriHUjZj7sCXfBNWdYEDc9ngwCzLX",
  "key11": "TPKy2m7xD1gru9UZiDE9ejpxq8jzdUEb9sotA4Hr7Rogx64Y35K9nPgig92TVs115qcMwsr3RcinBLD7XrpycHa",
  "key12": "5JPK2dcgbpiF6HBEfEhtWmTn4g9r5FLnXAHr7gZYEZ3WKogpzuXkt98LfVu7FafjBmPh4y8CLxgSCnC3CWwTkhk8",
  "key13": "2N1LAj4Ejd32aNGWGoxyMziYSUbNojmnjBnUFCLU4GNuSDx9QAxQMfiD1HsQ375a5uwK39QbtWkNrweD2gbnMGQr",
  "key14": "4EHhuSxBvNUDpiFugnkBHU5cr9oypmaxTjKrcRrJVVzsFyS3MrXWxBuBAg3xD9eLbKU5E5StKW5UdDpvHRHrV4rz",
  "key15": "5eyobkmgsjBjMEHoS9sHPWgPgWhTDNMgYKAkhafTNEEht9oYSCs3NE9NHEA4rNiPfWscKiDbUTrsRAFtSe4EC8Ew",
  "key16": "4CK9YnTUfnhNbSTMFebeoyohBojtWBwEuLA12oB4v9YFpz2gkzsssB7axkDpxRADT7eaDo1ppmgcvn8pKLWtbxzq",
  "key17": "3C7PMwSr9M2tyGiwwGFpRX5LGTjM59xzvWk1HrVUoHNrJGBZ2bWi3rnjmoYWLJKgZyhruwzjJ9HfsKDtEtCvjtJ4",
  "key18": "2DG7sBSpkjds3wpvSTGt3vwiVR8EJW8p7iA75ncVEcMqtXMmvkLJasAngcMrYMYFrKVKDyVjXgxNerpEcxar4iW4",
  "key19": "3tohtyaivkx2FEyRhmt5dwubkQMUFn9ijNAK1y9bhGxEtmeJndLnq4R7XpcWTBXZcwswGPNidDgFZfryvD8jf1dx",
  "key20": "5SoDSjkjiK8TspD2MKZ9Wyu6jsfMiKKX3wBcoHkeApQAevmwM8rLoJQvw8ze39VuJrecS1bJR2LVZDSNYDr5YwUD",
  "key21": "4Az7LmRbJYQeBGZvTXPqt5dn9bxrAQxYKnv47ZcAaWGxSFHoMdWULPMcsrA7SAr7Z42bFbY1VxxG5NQSiW3EuRXf",
  "key22": "3dhDUkmYMRGBBEeToBXzrXidNYm6zZKswBDagBYAs2KNZPYfKgN8Cie9iR5w5MWWawez7PdqHXLBgMdFDUdccKRb",
  "key23": "63wrNVMc7KfxWYUWzAmW7kCppmSkFyhdBVa7ywkLbMt8bwLRQ9DAvXopVoxJwXmqmi5Y6rSYdfLNyiWdRRsknPbf",
  "key24": "3A84CkuLbfBfiormGx2KWpmuUEiR7Z748TA8qBgZqHp22cVu85AcDxjapmJXqDPcUMKCfGQ6QbNJnyb7F7kDraE3",
  "key25": "5jNHjNSdFzzaaD7kRTaFcFFWR6T33WYVPUHVDnrBdXNExH8Y9TiBt2LBBGR3AUSHJUQyQZxRprbzB3fmDn6djq8v",
  "key26": "58oZy9dkVD2EjBFHzpHxVEMAqWNegsjqTWNYuLqbr7meVjdSVru7K8MexSXtpq2dE7uhtE868A2MRPQro7b3FchX"
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
