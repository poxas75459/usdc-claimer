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
    "2rBTD9S76yoV95HfuQgkeMUeQdCQJSunPC4p49oy5na2uKfHPZHJwZhGbZ8q5Zuad2BHBPKrAm8LxqrCvKw7EVtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MJggvhfLRfCMK5Ao4xBLDqqoyHsvZzB6XUH98KiVAf4cgm3gZ43YfV5ZtcHREKN6eZ7NqrqbaCxmcHfiALa47j5",
  "key1": "3vwsLqQaDUSvsNrWbpGTupTVb8kZdhQcW5K7ZcMjCPXrjPYgKMpZqXYdqf37yRB6hT4wqBAWQH8itTLZs7raTt4",
  "key2": "5ojCXm55F7XBvwZUVbDX87bArA66pqhmQJ5pNfvtMsTKAk3qxtKcjgPgGT69vYzzXDjKemjBjaC2xkugQtFbFuU1",
  "key3": "4FNPoxTNEckLfW4sd2eA4fJnPB13XJ7PxMBKywzUVAcotAGZMcmHufAVJvmTVinsUpfFeVQ5JXVhbEAcu5cRScp2",
  "key4": "3zgWAoCXpnsAUx3rYQsYmxvusJq8QyTx3ufoW2NQU6AzkvVqxmuWiaww4jJfth5smBdcqcYCVhGM69ny8kGzjb3N",
  "key5": "3sd424RgYhQukCTTrTzKcZwm8rccdWqFk1K563uZGYMTdhou4bmaKRDnvMUSo47aMHXYcGqToGanMJJjLtZvRXAA",
  "key6": "2FyPzM6xCifzovbeYtDHQiXzxH6eRN3A6h1eLsDcrHecDBENAdmttVDCXyQqPcE5EbDb4dYfmnymVokxWLDFn3LP",
  "key7": "3o4HiFiZ2yYYfC7DZRg8WxfdC6Ah4cjZfUDUXqYwrQwZUWvSipuaYEakNTdQfGKzCwBB8D7G6hSXA4bKGMLoQq4s",
  "key8": "29WbdQoPSqjykE1Do2r7X5gTqjmUcd99Eq4fxQkmb4qx6mLVCum6fLxs4oBaQ1YBbzpwKc89X7PdQ5hvGqefvPVU",
  "key9": "4ye1jtqcLDmigbCAay8sVPodLYCAz88rBwViYtgv15qfATW9uh4t9LXiRPLCs4EHX4xqLWx4YRVdXLC3b6bSE677",
  "key10": "eHg5DeFfSHJRzrY7fg4rXiCwDwmSNQPLpSQHKJWmQWJ1E6U3eTBaePjEUp2ryCnTJLUWmxXEjUtxNGaZ5i5JX7A",
  "key11": "3fmsxaV5HbZZG3RUVQXyVeYzZqD9eZ64XKaW5yMP2mQgxnyGm2W4WTxHbMW4i1Dqg6d1dmc3Myf2PKTsbqieYb4U",
  "key12": "v1Kdh1GbxQoipkmF19mPctwEfKroChkLtJUpfHeDfSCxJMfXQsY1zowcChvXx4sSd4wWMhjWR7t6iBvETi3VkHg",
  "key13": "3aYh6mZDAX2hXzQt8fppQhFNFtZoiy8aeoAuuQRsALB7nR8gx8ST4EMCfnBm984JzLAJbZMxQ5pmjBd7Cu7bpUpm",
  "key14": "jauyvVLMowMVepTqiipWjfdTHZLYp7qrGcSqVSZutdCGq1R7TDqMxZF1eUiaBvGesCqMbCWhZeXkfTDRfzkQUXW",
  "key15": "5sMRYjoqfhEZdwGiGXmZgV4oguG5YQA9oaBJiGYfsu23BwfeMPJTGcPA4sePJV2PkKmN66JRzVLze9LJYUH3Lknb",
  "key16": "5GE5f9qgwvZ6h8YpdB8vEZY6y8nB6BX17jw7NEtJNjBitiMFDcbxjcwiRiC8tYUJRhjd8ZuPecGz3ecvXuAzo8af",
  "key17": "2GkN18pxaeQJnowC8aUhZM7313UbtwBRUxZtxfpPHY3pn8VuiWmvYvn2Qb2xZsd7szAPXBMmCCf1cPBScEQkCr1m",
  "key18": "2nqmTY4UvYS8zM99P47zc33qATB3cjTh3hAX4C5Wn5BZG5c2koaXoYWKQQ3UJ2FDnar7fnrPdQxP6JehhwU11iTd",
  "key19": "3tGzHUW4XP3npzmoFMLsQ9pDNw7qEM5KpRKSo5U5rDCDbZTuWDSsrLR3Ly7Sa9ai59puf7dX6sqdkgDaKG4pJLah",
  "key20": "37hv6aHVozbstXRa9rCjcWWyeebUzbBjKnjxUts3mNtyaTALiue8iinmSkJfaBw6Ydd6ZrHwpwL8y13u7RZYdaMs",
  "key21": "3Z3fe7zJeMaPSP6gC5nFPSLbMndUqgvY926F5Rhgh8YecZn9UmUtx2hADdgdMSHmoxyshcbrdPzZV2P2HduKwmE9",
  "key22": "5MwntqoSQbxS3EwJgJtfDrh9Futp1TwFZEA2UeZW1yUGhv3M9GGtMM4SWZwW7B9aQR3W2tvTFcZ45NggfY1JFTse",
  "key23": "4Vnso6PcW4oBRsP7vgx8q8an7Tgu7NrEMgP6tcTsJjCNgfaL3h2udGJmgKFMXRR9J2J3aM2HHaAeareK65tHb5R2",
  "key24": "rKQmch3SWK2LsCVuWviSb9jY8ZPvLUBa8RiKvuocGXgnwhfQdpp8rfUEwbLFHKzm1VxZqdnJLQrb6VRHrNrVZTq",
  "key25": "gA8arnQMv9hTHZX1zWdFxNF3ERqHmjuTtB8THVfTiuvKWAsPYUy57Nw3kqkns4J18VQvsiWAx272EspDyhoZRFX",
  "key26": "54jkGaHiCEehPen3n4RowGHjfAJv2Rc6nr6uSS1qbCdfC41VrKHaTRETwoij5ckkBdyHUmsAgL1qAHWR3QCmBWyi",
  "key27": "5i9UoJJVuVviRF32N6E5HHgnq5XVEfRSDe7n2xe2YCmHDtVkwnFp6rd7QkLhheTukNYU9FM5E3x8Qwsx18b7U9Va",
  "key28": "3GkQv16gon2DeKYSG1x6v9UQ1HnE6wPA5urpy5BBBvss3zWCgw66YSbzrZYsVhLKcFvwkVpibGN25ixZtUhvL3Ak",
  "key29": "2pmRn2WUZScn2YpTtTtoeBAwBCNqA63eFJgjGq7jywLks4J9uPVxDazLUKQ6AATuTMEfk536x9fT7nnBuX7bqab8",
  "key30": "dFVSQAVqYdkbKKhPrEFYnkhx8tgbtxKTEUjx4tPBweSysmcN5CG4KejNWvPpNTzXKihVcCBckGWSkM9C8ZGyd2C",
  "key31": "4Mc4LYxhhrgTjdTvzz2p4B6hbB26UJpdodwNtWuX2dEuPiiD23WYZTqTAM4gnkrXbLRVnkUiJx8ZTKXWeXRFu8c4"
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
