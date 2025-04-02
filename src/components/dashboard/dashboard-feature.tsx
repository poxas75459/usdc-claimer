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
    "4j9Yx4HCeWFnF8VuvePZRj9PR7rTvoS9rm9PoKT9TjTiJBbtNgRTmiiNcyUaU6o59Ahm172Q9S5tXbB63e3p48yM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h4kP3LPhByXrwLu3CBo7RtniSBNR8AxKvdY5CkXfQ3jJALKL8LQ2T5DxzQLVafgwUHY5HzqApJaNZeTytaphzC2",
  "key1": "46LDXu3MB8vsewBpMRnSC4SfrpzBLp5yp2Ko7Y3vyWty7m3hvqt7GKyTgWDvnZ1G4UPgGpoMJepoHvL55BqExW6e",
  "key2": "43qryYMYEyb5YEr1n2uG9xwG5fWnBMAqJbaF9ksSbHixJ3HckTiYHC2eeng9yvm8ytG9uRGZgwEYvLmaTpfqvLyD",
  "key3": "2WvGqL3hG7coavtmDNvFsVHChCXTYrG9GrTm83V5PBgmJpidWQV84QJz9vFkUSVTixS725TfpRPiFhtRs7fwUJyj",
  "key4": "5wszmLSAQ1WAc2EyJGZyseWzWySGNBYMR8PjqhA9nWrEBPoitkzo5CCj3225bFfzWosggEznWd4RepQn9ZQZrcHX",
  "key5": "4QaHcqa6HJtpqpAMteLz7EGx3YrGP5aZdLQkJz3zTQqPnsPBXWRKdAkCiABfTJ1AVJQXMQYaWSxxaxvJFjPTzePR",
  "key6": "5VFE2zqpVtvVT61LHBa8AzpbhaYmpXDc6CBPU6wEmx6Qa8yS9uM3GtkeQfjk6egAKDMkKUCASeWjcA9dRV2VWJcT",
  "key7": "43WSX9U7sf73UmPtB1TAXUc5Lhj3uFxMPoiRCEhj6kCMVKdWb7vozgZtUs7KwpKu58x4kExHXujbeu7i5MUHvtXT",
  "key8": "5sBBrE8rXCgz6B8b1FjTRN5uvgWvhdGDCVqPa4ZUtyW1wwiTcXShMXauMwvvwY8uZixCJ1XEHepUJzbsYNyCTDMf",
  "key9": "5f1qdrJm28geuVpd1zeTDYge7LNxEwr4Ue46erUXdKJjUCAxRDYMruDU1dw5AhUjQro1CWSCnaXAGoJ4UvWWBrkY",
  "key10": "2P226xHBfvJRhe17Y8gRoq2ctGTFsSPAsTezbmdAJB3rehH9PZd6MubGYwzJx67BvSDLfwPZGjRKFH3jg7YLzYr7",
  "key11": "3XXQBizJXvxEyXDXH64azEtTuK54HcGwpHkpLJ5Uhou67iGiacYCqNKBeEHBfKvxcjDZivCnPQMXftHieoK8QQkC",
  "key12": "5T7BK9GhxHpTmYpasgdLqdHeu5yL2tSWo7Zd52h9PtTW6eAyoC1UBYd5D3WveRDadYNbfti3PppNWWYXQtujbThi",
  "key13": "53hN3YnRfTZQjmmoEJpKA8g7Mo4F9JGBpGGzsa6JqXpmbGF1zKSJAXAKpoZaZCLAUxFZZAvTMpYjMiddrfH2HVmF",
  "key14": "4M2UPaNJH42mpiYxNhyp2Fg8ztKp7WMuhWej2gQEQypv9gRgm9MNUNGboCPmPXCtUKE9P2L3i6SCMF5Bh5UYF2vG",
  "key15": "5zuC9q2hA9jFVGAUYTfgRWeieu2S6SVNriKTpQVyengRifRcQPfYAihfx1zzm92aG5KdhQHPg5vikbSftJkYeSrQ",
  "key16": "62gipim5u6t4JY2Z9Ps87mLZNpUz7ifmdCV7ghHUB5LBPJrTi5AALFwZLRZ5S8zrgeXATtsb4FVucEWXJ77kk2o9",
  "key17": "4iDVVwGGLmJ4tYEQ9bU3vL2eW1m5SRPdcyXHAjrmu75Y4niXbPppPQ1pgWnfeUXZMzRD6tVWaQ8d48afiGkqkH9W",
  "key18": "9Yvuyp2ky2wtZ7GXt39N6v7RRxde4pfwGv2JaaQpcYVnjb7gwtQWdKYWKVCwUGtGNokNJYGUFPBfireHNUPLhKR",
  "key19": "4VX8PpTFqRexq6xsw8cdEHBN5eFvPXqnKrX91WoSRQcEoHrYp74Gb7eoGYvjxQbydqQoErBpdL8e7Jy77i3XBkq9",
  "key20": "vobutp69ngMDEQmAfWgHJJ7tkLohFBZvuAgkgwVcaieTzTTqFpUsue92uW8MdvLfNUkEoBp26QBDZ65w6grCUu3",
  "key21": "gabGrbX9xWSo1dMuy1VAURyaUEhkAoiC1TUbXv4h1aHQET7GvYbs48U9Jgemj7wwdyN9Pa8QdHNUj1kVLq7ZvyP",
  "key22": "5fSeqosvDw48cu3sGqhS1aQ1pS8KK4u2hkFTNAM2mxYBBKzXUqmDr84s1Mti6WEvY4s3h8JkM54U15zLk87vH242",
  "key23": "5vXgAN3bPPfHAYf6CisMozo7JND3xkCGzWSvtMt3ToQJodB6iGpufXsU4iwGhuCYDfCCQ62UtqZBXhn9ngS4S6BM",
  "key24": "35cvCvuw1wn3S2uhuGzU3VS1f3jnqY9j8pa6QEW24PjpgULcKM3sxBqwx3CybWpXakJ933S7uuQ7uYwCYdAvdRTg",
  "key25": "5zpYSK6gz3DnadxowRJJJe5vquX3hAMvUk44unJMUyX5FRUx49VTbhZS62aPaCrycc9XUsgoUAN36uYm4s3PVASE",
  "key26": "3Wbv84t5SuQweKwfNUzi28DPWjbyn2zJ1ZacYFaMRXS4RUKVFYnxR8gM6FRMsHALNWpBhc4AT9GrojuFkswZao9a",
  "key27": "3m3SNspEs4B5traYHBGMEqdrwgHSPBovqEbK1SefGytsMTXJKA5cYwFv1rJDCjFpngJkZ124oz4kp1HghESeeteY",
  "key28": "2a8hu2PBbWhBCWoBzce1mqMhsLe89dSETYg44MUzkWx6vn17k4CYX9uVwBfriVHiS3Hd4wsh8RZsYhMtQMKAgurw",
  "key29": "4oYzjkCUyymuYCM1qd5xY6S6yPduh7YpmpgMnhDt1tCmubhitrLAAiiBNWYr6XUK8wXe66t3PKrfPvYdRs2zrSWh",
  "key30": "4WrMmBcPC3otviPzq2UARDgTeokrpFiUzNMUe5aUbUgM8YDrcF2KYQqhztpHs63k43JFwocS4TgGyEwrTdNSfz7Q",
  "key31": "NqRmEuidvG7vDvDXEJTGxBwL7qsoYLVhpRqH9W3Cr9fb1Y2RgJLiD1D2Gm4cPzNASXwCDSn8pkgRRnvNPMbdr45"
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
