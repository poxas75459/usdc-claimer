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
    "3RgxtXL6c71xssAjpF9gx52ZxB9nKANecSYot8SQz629KbHXHzaX5C81TYNmsfa2LjtzZqLxmirbrfu9oMoExMJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T9gFfRsM1eqgV8wScJBUdx1uyjYNeAt7fHMjFuVYcGWVSykiXsbcoJMhDkjF8yKmctM2qFSJycaJtFxKMzsQK5v",
  "key1": "5wp4yT2ViusM2xjSxcNyZ7mvYvjoSD7C6vMwGod7C5iJq4qnJcyM5nUPkF44uYJRfW17qpxeRB7WDL5GsjiYSjuT",
  "key2": "fBPPrMDek6Qs515TRXVZ51PEsYLuVmkVKyt3w3dfQFACe22XmkrzM35x5BbGsGHhutnKM2jCHngD81DYUQHt9zy",
  "key3": "uNQf6Mfuq7R8sRNCntB6HDKDXTi6BNF6wLdXEHdPHqYtbsFCN6kxEHnfzY6bfrP7VFgZ3VRAr4euhugHKAdg9vJ",
  "key4": "2eDwNZExhwLSfGCfxcmxEiCYxjwuzdfzdVrifWsCLTnT7krVE8ejGwrKetnrraq32fctcYswj1nKS6rQz9ifbuuN",
  "key5": "SztmezVxRzj2aZgpr3aFK8b5xLeQdUgg2kxNTZ6M1rxQBkEUZksdjrReQ4TkufFNtSGZ53QncreXbw4XekkdDSq",
  "key6": "5JSGmEabnGASBTHLLEPv65aXnW2i1LBqahfztME4AXuVvo5rzhQiVfCkcBFPHpvM9YwxKMTGxC9ic7EQaJUpJPs4",
  "key7": "5auXyu6zBuYuZWYac4nP3Rivspc9ib7yvzaHpmBKtcwAc1fcXhqmw42weu51bQKeiSbR2LFV4k7bXydjkLDkPRoV",
  "key8": "4buQweHfpKqEHmVhEB8GhF34s77YcuWV4znYjkaFLrdGy6K49VbwX8fw18CZScnivrZ56L6XCGmrv3UWuCrMjJry",
  "key9": "5NYxqvbNLXaD7XodPhiH4fHyNoQTNhBTBgJCo98bFreqZeaqJt6tsutJQir1UvNEJWe5re9LqZ7fTapsBWH1fEJw",
  "key10": "298oePhXEYCn62cY5nbCzVtMKxnphxGmNabVHjhYZpq1FteHXLFeZ8ooTrqDhDA4ktmdPcQgqbGV7JVH4gdXnKp7",
  "key11": "5rUQhhBdWGGyNMKm3fenbdEyx2xwwXD5t6Z9YQuvmZpysrJW5f64fAnoq1J4GXYyUAcLRNrWJTvdzVgZZhGkM6LP",
  "key12": "5xK2yqHh7E12TFkx5fGEro3unDy1p9y9ReDbHEQYLsokAF8MdtrBtJHs1xGii4SXPvK9npvauMEKdQmNnb7KL2dP",
  "key13": "4HL7DY3nkr6r9mfqGnf33G3v1RZEcUj9JtmftLgRcsf4sBSupKw22kXcwbc16t6AAT4Q39HTPMwtLhKjyV1njVtK",
  "key14": "3UJzY6fqrtF2HhkgGTGqLb1ETYqKAL6HDZCtsRijvvMSXez2MxT8oXBbr45d1cwxJQy3UQWK8CHam5BCrM2ujgt8",
  "key15": "n7jk6WpDZzBfXZDHRW2J23ZzNoexqREJYNAynX5rvSWVkPwRCaVnj7pmdHMghUwM7U3aKmQ4XnoDeYihnJTokEq",
  "key16": "3Ke7YCoqTujfWLAfxGgUcWFNQuFJU1idm23YEEvWTg4vX1un5HWRpFHqDzVZG7JpMz91Uk8QHXFRZFEVLSYUzMzA",
  "key17": "3WA6T5gx7kiXyRvad5fUDQtZob3L1i6v1waMJ5SDDEpk2pzKj2iyzzMjdAsgVp47rFYUoJkvpVhydHHcpZUi425K",
  "key18": "2a5L4Tef5VzYULRvxQ5w3PgmEcrexGsEUfCfMCD6X3ycAciMxy3NKi7o6Tq26hixFEebuzqRJZnHwazpZE6DEBHy",
  "key19": "3wsYK32gXf9GYFHUNTKoRREuh37Q1d7oY2NncVad74aARcWYfDzwqepXTBM2EZ6tWcJpa26mrnyuS9vYfpkofG2V",
  "key20": "5W6GCbnzRsEvf9Y9A2jrL6z2ehA11mY3eouFgCfUWBtUz1mb22ErEZYPdDZwauu9Yq1t6fEJU7wnmjjBcZzSsVE2",
  "key21": "2Aab5PfZAJBFucCRF96qBfnTWmfrAZikMXAzd3JBhvyzB4TMwHDNUbCDeGhuoWHmndGEs6H2Zb4VSQsgeM2dQUW",
  "key22": "4dTpDK6t7HjPVSgVEwTFAFvBqACM91iowH3bZun9cYcbmeffQmwu8UbMFvRD6aS2KFrP4ysfPKcBdV2xjryFPo4Z",
  "key23": "VHUYfPqMPatd7JWJfAVnfdGcMmdBEpKzBD1LaA8BBWjP6dN9AqfuCTVy9NFgtqfSjrdXeK2SMsvFb1EZxPW9bdk",
  "key24": "3iwEw8VFqigANwr1KhhCDurKEW3qYw9RskBcDXWWmCdns5DJNJNXm5eEwkU7LrBptiPUiht3Zkt6KBAX56rdr98s",
  "key25": "5FknwT8EEmZLg8RgF9AwP9XsGx52QC7S4Ja9TdzywTzCKfvWEDhuTa2HdSiW2jP2x984oXArEhzKkN4m2LCpCN3Z",
  "key26": "5Wn2ATUcx7zNnJPiU5pkiYFx3Mn7iyEspNufdsnWLAWuQeybhmm6nMEbzV6ocLtoSWEvvY36U7jEGikJYagyhwhr",
  "key27": "3C49pN7EpENrqGrxfDn7FTbtwzge46LWZiY9p7zLYM5ScfLP82GGyfofHh4BNz1Z76dPi8V3Gr2mEeZnYmQDRH87"
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
