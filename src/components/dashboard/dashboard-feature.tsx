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
    "3SvQhcef7LbwYU98DdyFhCBNqa47UXHEWJh7yXkWpAi49eyVYZ5H6E7Ao5h6Jye55fBgNkdSY5csthdCKcARYESa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3idRpsFx2RwSjUDLeoQgVeMZzfSGEXH31QkM7VgkwuhTuzt8FvhuvCGA8ivcAYNbudvyhQ2wqEuibuxxEJwMXmYU",
  "key1": "3ViMa8DouZmY3VhryUExTtQTHLsLLGs49j3g11gaMWaM3KzJSnoTZMXtCEYCqHfY6UU1DLVGWeDTEWok1tzyVVtt",
  "key2": "2exM5sbATE8og5acv9Ksraf2Z11yqTE4AUMRFCbC3qtx2kush6Mj293Cjq3D7EzQ5YexTTUsjqBCvFuXT1Gra6wN",
  "key3": "3QNkGQbr31kZHtLFJpfbTtcJnLkxmbed51Q8xYf9Mt1TQZ6U46bvrx9pWTH1yyttJaG1hXdjbV2s8w56Jv2rJDiT",
  "key4": "h3Xx9bpXJdiyotwEqUXs7vH5U5Zo91D5yCaNLJATZQTcxe5YM72bEt2mibj1dTyt8yf2eLHL6nzZkHrV7AEoQhy",
  "key5": "5AMrqdVJLxThdK6kAaHsyn1YDk5J7CKf6UuwDJMnZnsbwPnZkR6VUpEjCkX8spVSLA4LJvgMx49Y1ZoCrHnrM8bW",
  "key6": "U2pd8SY17oVnFtuV21tEjyT1xH2oLuY7gKGzQyujAyArfSph9ivarAC7ybKQtJRpugCMBtZxvEb9NbRfNGW21DG",
  "key7": "2JeK3eNqbUu7hBXG4dJ9XccTZXycdJV9DBhuTmzdbNMckuh7j39WCYqnf3CR6aH8wAXy9qkgAbPXe8ax4ziqc7Gf",
  "key8": "3iianSV2XcUqetge8HqxWutca6S48Y1qzg41A8zwP1NtTHd8jWXqTVitz1DjeeEgzpFTKPa7mT6ecHnxpNUPboR2",
  "key9": "3catreB49iHWB3yhvkC73amRnEsJ45MLyjhsXn1UJHZHSwsDHQqFeE2gnaaJ6M52XCBDQpnfY1RiYoMQAV3h95Nv",
  "key10": "5LkDtbqRDoZaMbcJ1FqhQPiFecEwckwhwCeFMUBJLCVoADxWqEf8SD6R4p1w38B8n9c3evRwQ1qGmYp7UqDBgo4c",
  "key11": "65v7tTr2t567GU8vDrPC2NrYXnPEjoUFL7RzpAQmDioSnct9kdM9YtP2jTMR4BAiADbuwKQifVphiUJL6nTPxsi9",
  "key12": "3vUfk3aRtDVCuYWNyS4yBKYZ2v25ZibsWJRHbdnL6sAJSLpKFfBhTNVkrtKsfZw6FtxYGq7GQrqD49Nd3r5rxiFu",
  "key13": "5W2uxVMYQAoeJPWrvQEJhUhy9EjRoWqsJSce2vvDb9qCAcDw3chgmySq9iXy2JcjyqbKCxNc1YsF2rWP6PCYYZcA",
  "key14": "zWuZmwAsMnpLwCcEXp97NbZNB5xUR4P8ASGnoENnPqrf5BYLjh4naDPtGX66RhEUhnCgkWNHqaLKBoAv2YNqffF",
  "key15": "27Ksn2qiFMU98fY91m6F4cXJQZ8eUzphWrKzSdyzMW5R7uWUWWyF1CVNdF72xLZaWfA8WVU4b7zrSKJiiVo46PMg",
  "key16": "2dVtSpXqztXssdtcf31oEJ2AeJaVpRCD43n6TUjtUB8WetkhyqVmU3vj1oKWBgMzSnaQs3T829Y6a7o2uZGf8oy4",
  "key17": "2guB8tMQ9PySJXCPVQzEWKhsvTsMQjTDSHj7hs3wzjtbrzfjc4YvzsTcdf5ssoiMgZHtPgL1eFtnB8WnQcrkBrWy",
  "key18": "4J5qgSB6skugr6rSGg4tTMDx139qQA8x61nVfjsWgjxzWEr6DMNjZpPbHBKEwKxF6Y76HRzY129hNuHbW15SPurA",
  "key19": "39B5vAEryp37S5qoWFAMquKSW4co43ZkLwqoYE4GZ9SQoW3CU5yXT7fAP831wjuifWpqSeupStAbyJrnb2vyJT4q",
  "key20": "42GVRMozkpgatFcrGsSK1pJ8sKKuxLodiB5gs3tQsLQtruP8yyf7j5mQfweAmJcQzko5QvRA8yLoRJYtNW3EFdW2",
  "key21": "44v7PqWXKD2LmoVkkKEqXWXYhwqcknHCz7dndFcGWC7DbqGUmKMJRNnL35peFK33N6adzyxcUD6Sk5WcCS2XWtQk",
  "key22": "4ZwYaRtdKdfTarwTQuNbbsRCttffJMsfT5L9AXwBbSubppvZ4gMNEKutwf6eDWn63XuwCAuNgpJ4FVUhPWvamVZJ",
  "key23": "2n9rXr9KY7tveCDvduDJYVWw2uCrLF3reLG6uxcBpbTeungzq9HixpmByFHPxodGwfvo8Acn5iNJPSGCiJn2Deti",
  "key24": "RUUE77mkEhPwxEtYDSa2r1zK6kWEYf6maoXxsGb9cEUvPGhKST5EAZvMiRf1kkRyVj1hFXWFWh2VVaUpjgJPSRz",
  "key25": "4SnTfgDAKdACTwbakRuqkRBW3MyzzWwgFqAcsYgF4KWtGwFgRkgPjVqGGkzkKqjrYheEgrCqCcu9Zz67mdWKmnBV",
  "key26": "45YszCR6w4V7GpgyyN6PrZs5ici9o5vSnP4ky91yDbtF7YdyeqzmktaudbkUipGj2hk8asnhECC9xRjBjePngFvP",
  "key27": "4AMByPwoHLHmUPsbym2TomxLaYiXGVxsj8cPFF7kzR37LyadDjm9aXzQAcPPeGWN6RtJFiEkZLqvQWXqHUDEenRS"
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
