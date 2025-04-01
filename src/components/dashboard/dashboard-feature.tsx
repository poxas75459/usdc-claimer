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
    "2hMfDhNLvmNoDz5APU1jL8Nk8pLoU6p6K2tLjgQv9wsmmm3Eb42Cfd3kM8gwRseo6Z3HxLsnynpPGASLngSbsQXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HJ6c5S8HWZetnGN3GEZquXNpHxQfHv6GLRn1ZQrxEuXwv7zGyt4rihcTEot2ZcmwQy6ATCn1UohimtdGLquYR7B",
  "key1": "4U7Yr5vARmGDRSZeorqkB7hoAEKtcbNVfP4d1oqYWergafqGdC2RH2PSS8VrsNp9dBBJ1PA44mPB98Nbw6J4EJDQ",
  "key2": "4huxpiRgUFaArqkCBHcoT9nSi5RgSohAWCFhiNMymEqpHKEec2FmFNZAHTfPJ3qBa3yKT9YiQR5G4qcxb9eZwnNW",
  "key3": "HDx1GKxiZ8YzjpKyCKzjroqjvfEoeysrESRNAWe2eAYgknSFeAC19wVM5T2cE41LPFpus9RCsGkniTwp5uaHvMT",
  "key4": "333NEpPEsgjUAH6oeZ5o3gfuMuw2J6Lgge5VVYaekSXYHZdwQ5oKEou1AHktbt2qaKHtCRo6us8QLJBJTjYyHtL9",
  "key5": "3AY6boDMyUzn8Ef6AW22BTeseJKqv9vHJxkEyfcdntR44qNz37JQxDusVCDoaswbg8MfyA6CmUWyp5j2dnDvstCe",
  "key6": "DfzoGDoCbN74Kx1zZDKhqxqfupN2XUEV7LggwKZTUTYYnLNPjcVMuLDNWX7QyLFHugFLDFYcxBmACuKWCYtPs6x",
  "key7": "3ZZ2m8ew1JAyNK6Q2KvMwir98VKqVozzPP7azQ3ztAoAwPNcypUN5gGsenGBMqJARkEBDY48z6sqoALFab7u8N3H",
  "key8": "5ozgEKW91GBje5DgYBY1pVaFD5ZY2cxWXUX4KxxdW5eJtFFg1b85RyuBuckZe5XAR1gck4zkdy4sQkXsUvwxb2sh",
  "key9": "2b3qaRsyZ3YjPN3QxttorqRs79rWRznMv3t4ykhk9h86wTdKcsXefScpYV6Lt3yRL3zWEByiqMjwKjk6sjeZVBsn",
  "key10": "4dbT5PvAhczhoAFJDH2vqTBYJpFNYB2AyMGuHi3Qun4MLVwAogXcY6b1UbykpFNLykmmoXAixYbus64LDZ7kDXz8",
  "key11": "Y8bfGsGwLU2zyKwKMErkDxovx3SxiUHJwzakVTqtqTHuex37iyspYDXacKMVfQp6xzQ7bV1msN2hKer4qUML2ck",
  "key12": "3RtrZMrkpYFdJzoJZp832sRnxZ69jW2rPQXGk1172vGEAUYGY3h43U1SCjtyiRR7fotz2vSVjDmAYY1XTYG6PT6k",
  "key13": "2oAemogXSnHkpsKZ13BopqawFTVUxGbbNvRzf5yjndW1FKeekB35deLu6p3QhQUBLBbTSW5iTGAsmviYeRcVvzYt",
  "key14": "D4RWjfYFDwihHSpcNb8DBwMddBjQbAnaXxQtBodegHLaAeCzheRxhx5zAQjagATzth6iSHJPXvRhHDtdnLdUbw8",
  "key15": "hH8FtmSuBBRvWcov3y7pyee6eEVak5vNU8qV5uJNfWZvbcgdhvuHQpySbjwyu5Zencybp3PJTAufK4vm1CjmbAb",
  "key16": "oLDtfeNbTQv1ZB58ajhz9JC6v81JdxyXHhKkYcPjK74DKfboBpnxR3XV4ykYXLx9FbZMNvrVzojgxGTCAHrjeXq",
  "key17": "2gZiwiiw9Hsfm6YgpbSYWUwAiz5XxWssLB9xzoMpD5DScB7sEtzTpccuR3LWNdG5D8tkCz9atcL8AFB1iMYNZon5",
  "key18": "56mak7fuqyUttrLFro7sAzez7xfe1F7omnAv2SxVxqN4Zr3KSsyMgQs9EwiaBPw7yb1HD8is7fcXEd3YKmJsinvq",
  "key19": "HmNcXcfqf8ShzDyeATrHxS5XX6tNX7LXqKbjuai99q26fRfzDfB6SjnAd2bMKeS8UnqyHz2TgRMMJEo6ui1Au5m",
  "key20": "rf27diQApTpY9zCT7ZuEGKaxrSTRgHsuraHVcYTdhEKqCxcQTSiv1Pj6UU5AfUTAX7RiaWCyeizvqE5oAhS3uBK",
  "key21": "3SJTP2QvGSE8FAuY4gJX5rKjrRa14MPPeKHHd3SEDjbyveyVPKfpjnXaRVKHstTzcNBDiPMJdwpCmbZ6LEwK3e2C",
  "key22": "3LdREKkADhWxnA8YZd2BYyrwrWTdZjWe2XibqfhZxDfGLpWFFNqmwGBduk4cjWGkRPmT8kQPL5FuSiqY6RyCBKXd",
  "key23": "53JsEsQLAJCaxnfF5vazqDunapR2LpH1bxSjSqr6zWxHviPXxGvq4gJFmFqv2kALbYVYvW6rkcinRSntCwSkbw4g",
  "key24": "USqtpsTvLM7pDg4V3GsGURRadRXvYDT9RkJPYk7BrygHkfFy4xPG6DbnK5eXYbzx4hmKLtLgnmpNRVjaWqvcgSo",
  "key25": "63mHC4rTkNyaXPzBiBnW18fhpuUKvyycYUXurhFg9EG2yzGdPgrrEqUTMjpS2f6GisHs6nFymvUjrjJ7S8BC27Ja",
  "key26": "5mzKaUP5zrh6Y45ZtKCNyxtw1pfwPcrxxTy2WzVXyEEiK78o9BqNYYTj2mVAu7brds91GR753fVBQoQJsJcv5rxS",
  "key27": "3kMbtfxzDHFV1pwKHcnKXwnMYbsSNNjEJajgxvkqKbGCN2A1DZ6kMM5KHybFFcAHoGPHNU6LqMX3S6YWL5tmMjQm"
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
