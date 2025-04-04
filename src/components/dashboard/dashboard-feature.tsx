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
    "2FxQs3eHidYkjRpH4uaiULHWUkUa6ReMy1W46sdJ1WcX9NLj6zFfHKoMktzp3BeThxXiQaKzWTFHabbzmBMu1Zcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4avh7AD6d5a9wuw8wp8Lm1dLfqb8SaHaxVkVQCdjN9fFc2okFVnfHPDwzDqZy4ESBXRpPXNYAKGoMJ3LKEjBv8eT",
  "key1": "3t8aUrEsbbv2i3xAY45DbqkmUKzwZ5bVbmjWZRbERE6VxsMvnxTL3ku5en8K3dWd44zuzD7dGM8nDxMr4rMNDVTu",
  "key2": "GmXiHEARaTDmJ2o14bdjVhK7H7J7GW7Apm3mEtnmPa4c57EDyWo26znKLPgr2ggKxZC7emX8h1yEDjseZoXRXFJ",
  "key3": "4YnAdrSXsKA52YHJ7V8eFyD5nYy1548vX5pypFNxMRYKjaUVrV7zxWUiX3kfXSxkcWgq1Lm5aDx25E2Z89bHfrgB",
  "key4": "3GYNsmnGjVtJArLJnv5Cevf6jTzt7zDNEP6V4h82GwWq5jJ5StCcK38A8ioPh7kHvcCLGjobda2qvaHdMmHTb7zW",
  "key5": "uHS4enHsm4rGbeGG6wrLrfoh9fRHmWxL4ur8WwXRFuJqLK6f1N1RjsiivUGUKSmN2rX6hmsNK7chgydZXA2FhgY",
  "key6": "58RCxEy2zA22ZmVp5zhFQJZ2XBthB6mJnG48BR3VgfscivaHmijYrX9jbgae8gNpJxiYCWCXm6NMHjMDRPuBqEpJ",
  "key7": "iXsbmrCQAchFFoNiWqQTViLtC1NEoZnKn3uqgBRnqtXef4ZKbFKA18LcJKN7sR1saN1jgw1BKA3kYX3Kiv1xYc8",
  "key8": "5qmmbANLfYpWEThvGwwSqgfoWBgiFDshggUNMbCz6o8zbUQm3e9QstubGKmSPzAabLxcW3KWzfREKb5Yr4xhvd8V",
  "key9": "5zgMMJdHiQbp8gvhfzWttahcGyZbD3Qd6zVinWZrqnU1rGT27JvNRSvtmV2ukyEuw6zg6P6RxSv5rUYqru4CF6jG",
  "key10": "36znaiMqvMq9EeogfcSiKKXoKLXxVgDVV5RTBDnJ8Emu9eWbWyg1v4NwzNE3pkuWKByjhC9RxR8dmSHWr9YDLaVx",
  "key11": "2Yk51KhexkNXtyEvqpe3J6rkzRjXruDbp5HeyMBVp1TnBFkpoHP33McRvcCGKBxV3PYK7tCv6XvNwDetiSineTo9",
  "key12": "yaVAygARGeYnoHwCEaZqtCnkZhPXMX5eK82fkLcoRF34KNLFSvmorvosC1w9TGNvnuoFbnFQVCWAD926kSGUh1W",
  "key13": "5uqXhN9YuG8NGRXkaJyWZ2yKj8QTMHH9D5VMpAtiSdJRwKxALkNURy6BhWTfkLWFGw4XHqLN5xusLwEXLkpmfJcU",
  "key14": "4ztb5BihFE8RKRCf5CZfqKGNVqhBJvNuTD9nBEy27FW9MrfQGMUtqSuzEgQ3D82e68WQhLJ8tMsq2sRZ397gHARM",
  "key15": "MCQ3sNr3Bd4Xv4RDVAQEmjVmcTeSzMHhm3azMhFBt62sS3QP5AuWukQAHNqiTjmMmKoDDpr32jov1GDVzbS9kji",
  "key16": "7iiUbKsqeJdYJ8sJSeCvTXkxE1AVgGN4nKzyGGs4eRtpvhojFDjT8KtAT8Rb4MR81VJcGGwFA9cejjw9pRQ3zeS",
  "key17": "wkLdmzjTJATqFvgcnACj9inqszovVrpmwno7uv2uXVsYRe3Gijqd7GXuTLvmVfcN5MGRSLmgvbxCJ9fqZG4FeAh",
  "key18": "4qnSjS3szyTrkteb57VwW9F1NUtDHVHQQVGY6XDDReZZZrMJez6GB5m11SbJgRgfQ5tPdCiypZUbXULw4Gj6HvB3",
  "key19": "4f18e7R6JdDuW26ZFQF1gWFFpe6VBFEZvd7u5fwDDX7PYG6T4NiNjYW6KRBrQ2EDbio2Jsv3iSLEwtQ9eFDBTbYo",
  "key20": "5AsxYFEQFxv93XvbDGwDJAUtqYmnLE4He8qLCYUPvMx7Jy9KjEBTF71uYdsuSGt1TsV1k48DByCkYjFqwR5ykuGQ",
  "key21": "2SmN3srLGsokUeiWpuGSSaJCH4TRryWxHy1pjT3UBoPS5HJeczg6tvNzJqmFiTevGLuD5o7WnqjNPY3vjx1p3f93",
  "key22": "3rd7FycbzUJZAEkPcsppVUAmeHcNvjqf2nFxpo8cg25pjt7D5L7Wn6zprRiY9hswfKJr4GAY1m2x3JcQFMesZjhw",
  "key23": "EM6UyP7C7nEJZYwmJCkK93gX28VrWtprQeTFWcV5HbjHNrzLameseSTE2s7Hm2oH4fJrLMYco9KvD7DLEmkVfDy",
  "key24": "5VUrhooqpL6s3xaXkks2xcbGw2pFsCPxTFpgDkGpT8aaPyB4UX69DCczMuPHA7HXXDyk1fesubAuKJXctYaihjqz",
  "key25": "4ypWD4ptjYLfom8H85J9qJiMpo6SMJajCMDLRcSUiLPFU9DLMRCw8tmmovAPq3uqkLvkaYspuTeZRYFBu2X7EMZu",
  "key26": "3Ff8KomNRsm7Zc5XjYDkJidiWP2uaGLyZGEEoHEKZg1NpATXGJVKWSmGx4R34aZip8mdh92kaiiyvCvpntMudneq",
  "key27": "4ZsobRpGzjSKyXBHMjjm4SWsv72onka8pKvy9hNyru4gRg5bJ2gaiDJNtRLAnEvqmxdNHJ1JG6GiGnwzN3FNkJeU",
  "key28": "373NMfeW6gP9ERBgCqkk4YwpcorEYxkE147YKstE3tghxwGYWHhr39kmhh1ew4d8A1teUU2J5XRgLSRQ6hr2t81S"
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
