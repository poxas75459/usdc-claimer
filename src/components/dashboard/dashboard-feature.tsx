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
    "ba8qeHxGsU6inhjGYFas6SDJsBrDA3KiQYSAs7rLfdaXc1rMNXSXuy1m366eXRcFnhkndErCP74ptnVYiq3ssMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hQeC3iFdCHWuZ8N5neACw5mk1ygFz24Maks3wF7KQcv9Pt8jzDfzoMjQDfa8nZArCNdLcsxic5HzoYCR3B7jVwe",
  "key1": "5YvfoGKZEMvqNpgTqabKnv7knK4AsEhj345boeHiWFZHMF6vKRwMaNYMbqkVFmMVhzaM9YZUutkPfucTLpuLyW3F",
  "key2": "5sqJXuy3zCGx1FnDxFVsZsHavRmRgzKNhmopdchXZTVPSPin9zPezNG4qrHtCR4VjP7V4FpUYaRJu4dDvP1g9nKy",
  "key3": "5HiP7JAQt9TKbAN2QWS9wqUVtHYrXcUnGt5MxhiFiVo6HonEhS3sDBxW8suTBGCZM9pjrfTQwZc4s4yBMfAueQ3J",
  "key4": "54XpnhyXgrdkgXsnGvjCDjnhqjWxWrR5XjEPwWgsj9pJNseHaCCV2gxHoyx5f1NQp9gzzU71rPjqXx6FCFAkcTvy",
  "key5": "5UxbZZ5Lr6X7ZAX2xVrjrQjTZf4VxK4LGjc7f76ZJXCbGBgE8gVMhZuerubXZee3xqD56EKkN8mMdALSg1TgEKF8",
  "key6": "3edgQA9fC4uUv4cEWamh9Jf6EGXaoP1rtM7iA5b9aXVuipXoHwgvkWvdHfrr132VjXzpVdReG5uScAZu44dFkjz3",
  "key7": "5173xzfHyM2KvRZbEmgyWsXK4dHJ1cc1eEtdBQMXonEwpBwGnNEAmxZH6FWJc9JYbnof3xwU2gxqnaeBZ1B3UvhA",
  "key8": "4mGHaKgujWS3Q7FLPrtKPpua4vR8LQwktx7bxUk7pDwQDpfhBDVmwMTbFSFjNbz6VcsKVgdZtq7x4XDKdGDZVVT9",
  "key9": "4tj55fPZqwdyayRwmFYnvVSgVMc1V3xQifSSuVCCWaLzKZTC9oiMYKpthUvU8gtMgmTLvF4NUskvwKF2RSRmsW2D",
  "key10": "2G2Qq9J5yp43MFHKhNvR9DgzxDhNruag6MbSJVrnzySZJwuFCZa3pwUssA9fBBSKbvprAqfiN1P9GthxEksquPZT",
  "key11": "49CuCnM8KL5e59MumyNqxEWhZ2Y4gxbf1pGUrERZzsQ889RoyTBXgBpnq5QwhZAMLNXmsKwYpibiZAMCbNHfcNGU",
  "key12": "49aUzBa7U1dS84xoynwBZzv8Ts4vzib2Qf9DVrYEiPhTzDDjfCDQBTCAgcTn7e7DenGuaELbT4fgAEKy83QLQ2fB",
  "key13": "32QCURB85TMRjcRr9GKijf846iKrkvcY9DyVoTvHGn8Z9B8W8N4DUPo7Vb4RHWBCDcuMRrCRE7b79RU8StJm5RA7",
  "key14": "3rWSumnsYz9mqbfgiGfsvYx2kbYAroN6AH3T7aZy1nMzAa1aHiofTVRkjngy9DimYXgnFCvsLaPxPqhYNxfqMUP6",
  "key15": "5dpek5GtBcLd7FvKW1ymT2kEdps55zrVitoSSwmdAo6oQ5PoMXxrGQyuVRsFP4pZoMg1Zh4m35DggdpizRiZAD4m",
  "key16": "3Gw1tErnTiEdW2PktxsUQgRZYYCHujJrFemH6Y4ncDuPM73TZn4qVbTVpn7Hpg59YqbnaNf6ypejfwpAguoRy4Ua",
  "key17": "3a6DweTd7AkHxGeDc6jkMZNC712M5pKDRVvKCYveF1PJfgzX8SE7tHsa8S1XJs1XArkhbRBxFUBECSNqxenesGL5",
  "key18": "2XxUoZq4oJ949pDEWzAQzEeidnyoyBkpcSSkanisobviHYBEQX3CLjdxeHhSG6iCvcjx3LyL2WVi4WjeAi2xRRhe",
  "key19": "5JVDFvrQ6VRSoNnhFNW5DYNtdMoeUSbAgeCoS3fAao8f7TrH5Q7MCf4cqhfhM3RFmrdvzixUtAPkEi7Dr8RDkqzB",
  "key20": "3AieuBt67rpZLK4CzXiJE978BfGBhvEuEwofs6N17V7G5ZpuwKr7owcYHPXAQdGSTNpGUdtAEaK13J7ck88ZKqoL",
  "key21": "5xHhfvjW8v42ps4rLqpDu4LXqDymWBqvAqFnrvyapEx8csAYyBmsuTi9GD6VaNS1J55MZ8auEHfrZPYLhwZ9b9oW",
  "key22": "Sb4U1e8KmrvN1Bz64kFGioKSRB3aEmv2Q2SZXzhN4ctUM7VSmbLEDqZ8a7UCGkCdq9yfmUCiDP67A87XaRbBzfd",
  "key23": "5FBYZ5gvyShBU7g2Uo8PeAcZXAnb4HhUChSKfdwBuSKaJCwToK2Wq9btkJS4AEaMsVnmWVpCBQaCcNppN9gmSMqm",
  "key24": "G4nkk2QzgjGZ1jhQFVkX7DyTSbRsYswoJZ55bQAepNMfxQUfXfqHamY9FPrLcRs3kHib5ipRPJpXG4r88ed4dH7",
  "key25": "4utZSD6DTRjbADzHVK2B57EKN4TRAcWkk3uwYkFqSzysktFbLtkrGLKj6EVs6YuvPQCSgwnqyqoDVGhiwFtHWEuD",
  "key26": "56eTMBjxTTYaihY2ksJgryYL3av6U7UYzeavFGjpXaD3sqkMxPXCCAiVNCKREcLoxkynBHZMt7gra7QNkPJ8Fiyz",
  "key27": "3cUesouW3Uy6FD3N5HRoj5Tm5qMDEezpyB8cJPkbZjD7wWNezshKwB1xHfBVh9ZBf2woSzaZL1XKh2P7Ckk2qQBy",
  "key28": "2pZLeqDUn1W3iUrfFAJU22tNvZCGts4imbFxyMhhJKJfsgzfunxEbtkow3V7tGi8hwdJagdT2ykYr89RPeKrR5Bj",
  "key29": "5FWMpdyaehddkzHuu4AnNcnuR96Mj6Eb6Ykb3gvpLrjjgh4ehBUcoAFQG1tS1Kze4badJ6aED99mKN6fVU25SMFv",
  "key30": "2gcAVcgXydXyYNyM6VNi7hGtphKoCN6gYPmb9W4xGjAPkPy1ZVstzUNCiddjM8oKE2ofzXxccReNaq3pv2nvjQUa",
  "key31": "2NbM34XohRpFisUc92pSQV2ZNJuXBYkAA1JYnGDUsLkW56DsMfzkL163hQDMX9BZFWnA3mhGmbU7z8wnNfSpdojo",
  "key32": "67PdV8UU6UNtaLh6q1bsGkXjExm8K3xATnTk4XcPL5NoCiCM6WZ7UHyhF7ZaYh88ZFjMjou4EuFwxyE5D1foGDUH",
  "key33": "UyJaYHXyH1M7sx2AXiB6hYChwQ3NCJqurfaRazsMSx3AJgwKaP9BqZBy6C3E2JcyPc1WP61YeBebRVEXaJjC7RB",
  "key34": "3tGhnPhMRb5q4XQjqWFTAaYgh2YqnBjF8TXmc7SE78JbP2tVZvuaXpEfJW6mm24dzcsp7jibU3evyKEWqjWfitah"
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
