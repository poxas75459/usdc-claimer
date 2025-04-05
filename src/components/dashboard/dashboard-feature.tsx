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
    "2LSHkjgupuS7Y6pwdh1sXs3TtL2GYFhcM8cgbhc9oU9pRXmrYfVRf4ggCYpetVgVqvpQueTZets9gNXEQfZY5DeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sF5ZAFdoC41V8YuFLSHB47kF3srZV8cDPqeBFRvJc5xrvVpesuwh8UZYrck7ewwsURi6GADctiCiu1u2mi6iXHG",
  "key1": "3GqKZSfMRgWPv65AN8gPQLGjv35mVCXyEAUthpruT6zg9dSjvRk435qcF5PzHJTQXiqByTDgzMnVTgbFy15NHQfg",
  "key2": "52bg9iCGJfpS7YQTR5HfBrnTwqNSUVTDRGDjFSkV8VTZANvjkBXFZYyXVqGMhKVVAP3b55vhrSsm3fiFtpDGA7ix",
  "key3": "W22LAPgkmtqaqEP9offNs9ELB8aMUpQt379YPdDhWmKNCYtWwzKppcKZEAS8fqjoXLFV2makG3d1avvwVF6gqto",
  "key4": "48YKStAaJSpeWGEXppMbxhWqkk2u93DAMw33D1VJxFiYYDsG9Kydn26n3e5mBTF6pFEoxMuk3BxRPWzM2ufFBgCG",
  "key5": "61LbUkYriNtPCHEBaVBe27EZ1BSX6Xw6D3SBRcSJtoKheRXJEbsjLWUehdJYa3JDC1E8P5oRJvfudFqSf8GwgL9z",
  "key6": "4DfVMhVA1qNSWpKC3utZenZ92o1xsyNMxEnNmjMXn9RLrwCdtd6z6o6UKsfaqGVQxopTrebQ8dCDzopj9Cuc95pU",
  "key7": "3k3ee4CUBvumGeqCkUUhNqb2FpwLPhEs3jCCmHnqmR3Npjdiuefv2oafXpuJNJU9H8f3SHs5buRG3HaKRT11t97x",
  "key8": "26v7zdyxqFzCwUTB4BuPKYJz5jeXw7VvhEnEFuzUDp1DxYwWbhp7WyDqxftRrWhyTJhQ8YB48aY4Mf25RbETUibS",
  "key9": "4wQwAbfYwMbmoPkKVm5kUVoyWjZhvQ8q9HnJ93tzjbqM95uwiDboJ7QufpwsdLncuVaznVbBnqfLNAxGuUaqD88R",
  "key10": "24V5NXzRyy7eQ3dJrp3GYds548DiNjePcVwWKWpsDE4YLZ2b8DsohjCCZvXPYWynyeTxXHUg55FzdC2v8DSoHfzA",
  "key11": "2XT8hx8G6Z7e7S1jw4ySqLe8TEdodQTFARoviVCSQVW45shjH7D3AMfiCXszJfBfdKbvmMH5Wf4PxjJcAkwkBRGS",
  "key12": "bbQPrdazir4fZ1ENs86XeR14xxGxZfeEWN7BePu37j4Yk19DB4JrY9surP3456rdApFFgf32K6CC8gWqUUvyaMF",
  "key13": "bnWVMB6TPM8aJF3T28R5vtdRdbVYRzm7EHHcyG69iuvrwtcu2aHhiFi3AF7HKfLqxoi2XyZRCCXJizAKzJWuHdP",
  "key14": "4K1Hu5kt8n4WDGvfWnknfKqHBMtcKUwGxTAsEdQf4qq1CRZQDm4P32mNS8nvjX59HiLcNNn9Cb5FrXMqntoCPDsq",
  "key15": "5zERhK2eKjkpnPjRpkF61HGDcTBY4kLSxnB8mfyrKRUnV5Rg6kGWjg1xaBB3jo3ydpUZgkjnTarZMCLtxzSkhCga",
  "key16": "4ZMBBwpATJuy3AUwm9UNemcgxctnbQaEax9GseX8wJnqeAdkLS2LhyGLdQAJwvaMy2UBknYTLpLKWGTHFN6J2CD6",
  "key17": "aP6oT3TB1hbEFMG4w3gnsWGj5q3jq5S66xqUgM7kk3QYqqwbVrgTBDnbtJ4Umt4wMuZcm5S6235LcawEcE47czT",
  "key18": "3DByF2rbb2yweXv9ApKf4c52vwtXt7ECk9CWtyepxT9oVY4N13iCdnjv3qEH12rGxk7NWZdSU2Hpiwa25Ln7joGu",
  "key19": "3oQsgiZZGnmv1PJ6eWDGcvBLurzzRLcVKVQe9xzobEDub5PkzpHtWEX3kNNnhwbax7HczU9JpvfqwYjm4sCrDc3d",
  "key20": "2yRMYj3u1zT8dGp8dUB39A1DHq6CFTsoGgTAd2241tPet2eA8PwwUc3yogc536CNSnp4AiJa34KyUXo24aZddhSd",
  "key21": "4D1eX7Bv3DX42U24kUAQTLdw6MLRQumpEEAWrr9Zz2CWnRKV1i3kjuEjSQ2WdxU3MsU4UQ4RtYiaNeFwC4RsyxWm",
  "key22": "3puEp5JqpSvnL13Fdgvx4CkY9bqsCVMCX3GJdeudWYL1LH2xsVePnjM2YDePQCsuseCDjtNYHJCdjpb4gmUVssaG",
  "key23": "65NCQrpwgDtLfpAiZEuFVce9oP79pNyhMo2vzed8xjQqb5SzJgA7g6ipYS9yGqDmS4n8B6PiykXk7XEHZdsTWMU6",
  "key24": "jEE1kZLHjodzc6xnfuEpcYrY4HKchrHmfMZTyQvRTFEcJSg9C5sv5swQ8QDXWqUqkyhWfcNBYPyJRWMYec7HPiR",
  "key25": "5dvzGk5CxFJEuJYRxwUV6XDkxpEssGfhb1q2rbiQV1cA55Rjj27vbztA8CmSWNcHbrbxjGv4HqTbP2vwNrXtztku",
  "key26": "2z23kfjGpDiLVuLe9sqsETik6rXpioVUyrZcwWExgKJdKQDE6b73Ku5pgLcPkPsxRon4tYs7XT4txH8vDoPnsSK3",
  "key27": "482AacfeJc5hr6zzTxmHrjXrKtaM8518gstyqAMws8ie4wFwWncrAy4pBPcvu3LsZkPyHCDWDWvCreZd7npA73ND",
  "key28": "5b55CTVxkPxDiqLRx7x5GwnFuqwAtKmbdCJy3aEP2kS257NdjLRNRK6UcikVmjEKFjSzBwtg69go979bB531noxY",
  "key29": "3n9gFDiJ8tZrvhCJbYyRMwQWaNXqWB3dUQbNQbgJACg9Bk7x2VFmba8sQva3TTMtaeG4wnpbPxWEVKcwAcgUTk75",
  "key30": "5qoNc9b5s1B1sJgseFTtu6xZKcXy3Lo5eYPZYxbzyGpcUQXGmwWtnLdQHwYJieb89JE61NkvNA5SMWa2tQS2G4gn",
  "key31": "3txPkWpM8x3EifLKx94Mdk9ZvFoRDWrEe7LqkGq2Q63vsjvzBsbt3m5DTbEBprmegimFcnyi1e46PuQzgPduhLgm",
  "key32": "4bgjtWHQZDq28BALnfeMUM3MLWMryoQ726cumYC1u5XaPDfeu38cbPbceua2ehKQuuB1Pv9cWi9QoQhfVAXaYscp",
  "key33": "2Ggh9pbdrWjVY7D1yE1oe1z6tFT6e2aWC5jdSBs7Mrgu4z1k7PWvTx8hejKeniwxBqh8Yjk1My5TGWCmAPNksFMx",
  "key34": "3fybyFFu3aur22VRSEq6hs6xk5dLzhsXY5UQKErEgqpiibfYcTVcdAhjkaxqyvFLFLRzzpAdd7PVcHBHUoT6j1EY"
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
