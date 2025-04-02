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
    "5AJanjrYgXb8Rwvj1kCoubCMB8onA5usWb8hfyeioGxFzRWBpu3hccZ61dV3HYfMxNQ73WbtBLFrUZJ3TKUqAehz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "562DuLQGz7tiCsigtoDkrGZnouaCgpXAGGkEwmmVvYBBAqXQhM2Jc2xb2pWyjRicX8eN7nN8vkgosR2iLpci2Aa6",
  "key1": "g2qYZa5MqkcRTZuMWXWRtPnQoqzP7RCJVvKDr4qDrHFqat12xHLocNxWDfrQju2pRe9AZ7iwtgwfkxYCpU4RVfd",
  "key2": "4dRhgXZ8Tjq4GSKtgWVy5C56ZeNFsZ1jJzZ3pyWk8c9XdsPsY6UecjxzMbYS5MG8wFgXtMt2nrPeKf3Mq1SD8Wri",
  "key3": "7QLQRb6EDKMjCKMDUcgWv1HaAGV3wcPjDtUf2nNC9Jb1XdSXZbGGos7FRY1KJqt66muAat93Kd4sdJP7kC8g8ng",
  "key4": "2pdjdYiRu9yBKNUupUjCpfefXNjDrc1tvwyL3Xw5qzriPbBA2XPYQ69Uz8hPzkVfsGh2yLj9YpixMW9ZkCGT24ZD",
  "key5": "4afSysAjgxHJ2JSafzAsHNZSAshuqSpHEdoNE89woZVmZNAMKJw5c9qtNC3mZacx8kUZycusfN3W6NLcQCMqFGGQ",
  "key6": "5hFBTKtPKgeQ3s3CtdiBAGGaeDGtXeXjBPGpX9omhi8u7PxvS3vNWBbQTY4TmeFndYYiQYSnhtazRzp7njefpvYG",
  "key7": "5WE4bHUPeDLzh7a5bgksikcRAHpAcHGQ6uPDyzWKueMcEEJviNWsJbeNFp5aeXDtmQ3JKPdCqedoMZEHrwkiN62W",
  "key8": "5khqADhRV91P5fvFJHivfCG65rYEtRQxtcZ3p5xPjwsw6pfmCZ6kF6a1zUr7g829W9PML7M9stx5hDriw6C5juYV",
  "key9": "4rgWhHK5NnfKScqJV1sS3UumjWec6MwNEYbdxQBLc1nwDrFDucF3Fi3SSw2KNABHbjpCtxnEGMdPKdfwnv2sWZTz",
  "key10": "5EoP51TnPyWscHaKrGNFnnjhihqezL3tHrFLcqb3nSHHEK6MQkm3q9xiPyL7hrki7oxd45eSU62RMavwRfY7Zcdk",
  "key11": "4tVhssPU4z6s88b9zhXJ16svhHeBxjzm7bZqXNsduqMumKUnTGdGWChmnUfHgJZ97YwRdAbwh19gdG8TgLTvzNMC",
  "key12": "5PMPuK5yKiSKZxfHpDUU8wmrXFYPmPqqrx97kEUQwiWGX9aZsiZSZptdFoXNwcoQAACkYRn5LVwGVV3wdejEtpLJ",
  "key13": "5tnFepaAzEWFvrGT7nBqEkWVf42hQ2aVb8x9fXUzHCFfLbQ1vWzN7bmEmbjcBQWWEs3PTSWAwxfNGtNPo9pCKXFk",
  "key14": "3bsycKcBwyNgqVUtCG3X943PrG5HSjeaUJdkwD6qoZ3EpiTfKXSe4Shr9qS4xrUJc48mP7PS8zXuwxpjuE9rEKrG",
  "key15": "5p8mNv7RMQreWGqp3Bd5qkx5CraeSpo29e5Gu358QXEofDTDK1SjiCPuDk5HNryKjMNi6RPihTb8Z8tbaKPyhLgP",
  "key16": "2HCw8Ry9SnjDgqFsQZzyNYMW4eyLcu8R9trBWikSkEQ2jvon6FQYQUdUCLdsP6LrTsYAGVwC2aT3vLxckCU4m1Cz",
  "key17": "5HZ8nHRrV3d8T5qGWm6q5DdQBdXDEfbVpSWYMEB8oD8QHsXX6WkxJ5e5vW9k6ftDaMfpFy9SW91tFKLfcS82Lg6f",
  "key18": "5rzV3x9XgjtjUpTERqP2zh6XikYwTgPjsNsV2EieANqpEa9fDoWAFRXtuxQBZTV6T3oketQai1NEbwTZVdLpBxym",
  "key19": "5LSVRs4PW59DwXDEsRSmtqYhFpNfZXKyBqeTk8SECzoFHzmrtH7nkgsq1FG48wJkyHV3PCsYb9UdshbHKWjDK593",
  "key20": "4SgkkX2SV332rG4HWg9Mex7JhriBxpkjEeDCS1sdMWe1558RgzESNbYcBDm956uzG91fjo32sL2pC6qQoQqX7Awe",
  "key21": "4Gu3dkVCY9jwjARx2bG2LhQi9PeKSam42chm8XW4HKcRGqh9xCNZ1u11mMJYzVLkSYHEDBgKy2cCdSJsEFiQCZ4W",
  "key22": "5765NbkkuRyfEjTMkLB299Nqk9rxBGYd969pn314GpjLMFkMKS96KrEyMpnEfc2aGSgrYxnMyHgtY5hpy3wdno6N",
  "key23": "NwcenF26i4MQzazGU5CUzBx4ghjRRuHVAYNkv9t6TUXc9MuMqFcLTAf47shP9tN2Z4BAhrTuCmQjBTuRxVAeXe8",
  "key24": "54Gc2DDTkEVyTioq2PNXxYbo7BhugNxxCsaXAR6VD6Gtjkqes2MHGzkKn515gbxSg7CCB7zTc2BWB2RENJo8JPiS",
  "key25": "3uYNca9HKmTKBUAjbmLkssWL9eF8pwAGf8F7pqn6E75aKEyuFB5xSw24eLkWPRPAe61JEaP8ZCfkTnq4fXLTrXHr"
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
