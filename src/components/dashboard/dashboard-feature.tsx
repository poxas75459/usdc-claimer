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
    "Ht9cSb1wW6n1bqVFP9n3zRyJp2W5AZJPsumZrUWstQg4ZRDFonHzNVJbY3oFycx5BNdWg3TooT81T3JGtQzR11Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vCBAFcmYGTcdNkTad1L5UBCLiscLM8qgdi4j1HqAXC6uPmN23CiF7efeE2TFLAcRTaSG2zLwqJRQcWgVryzjGrz",
  "key1": "3XkXptTmW7b7pu4yHS3dM5YmpC4VLTfP7R4GGzrmxQPYYr8uawFrtvMPcVKGLzffcXrDhDWfRog7fsHKJdMivc42",
  "key2": "69P96kSo1cD267bTU8TPkhzG3M8N5JtfiLbMfoc98hJaoyreC1ENJdng3QzKS1Ab3BcNnVLMLac3kC7RRdiq6GS",
  "key3": "3s6ympw66dqphd52yzqd6VK4oZTq24nkzKcCKUev5nY6B95h8Cr6rgXVURRRsuMJ3qeCXsxA81u5k59R4canhYzB",
  "key4": "2ELAyZtdaXr4quCKkCF3Uj9YPYW5vN8aeMfxC6SqNqUiBceKRuoRbuvVrif4gR2dr8xHGHJ6rqM9K8FPHXUsdqUa",
  "key5": "XM4pmHgkdAatJGSQSPBJhNVLHCGEKCXveiouqDZPHbADuYU7ATzUiyFbyr5paHWKZYpE1qF8puggXr6dUzKBAvp",
  "key6": "3HhsS3EVRXaqGaCcvP8MhLa9q3Nv6koDFJASQMbrPq4YvrPbVAj2G44A3o8VfRwYtqUiZBALE2d9artfFqmDGmmh",
  "key7": "Vt7ZqbCyLymNfcZG67V3r1Y6q8ik6eFuzqMXB7xmy38cbAkX1puEnFqACLaBSLDAtbPSFY2Lg1jpT9uEsCS3Phi",
  "key8": "3XNFHmfCs4iXsNiVMTf4rWurxBb4pAq6LfXohpGgKPpMrx6q95uC82xJhuzRuTUcG8LpmBRqfMG7fXCkSjojr4ZK",
  "key9": "5pryQohqAEXmEbPbE3LJtjUQjAP7EmL3waoVyKiny9gWTashiAusdP87kdkrtembg8254RoVqVYqFVRQM366YuWf",
  "key10": "2fiYLSeRxXBxbfQLbhodVHNdt5wcXnwL9VEhCVoS6A68eHggFkkVRXKDsuu6wZk27HEuirhBpzyRm7fv6zrQ4XtF",
  "key11": "3XBpJW951TJrZNYWCAsopFj2pSiBbnU6X58cuXRMcoRUXvJv3y9kvY8DFeF35az7FFNRHbrTmU7je8cxDmrtb9R6",
  "key12": "3CSTuRvfb8hsZFToruqfhGyUWvQmBtojSHJXnEcpBkLGNNNwe4tQc6ZS2CXtFtyqqYASGoBMCXRy6gqoDHkFJU9u",
  "key13": "3VZPk4YFjjQtQpughHSsMquTRXPBAL43WedEvX5roheBJzof3kUVr3QUELnW9BjsXv4udV9GyZRS6kSPEarAd4ZQ",
  "key14": "5LbcH7gEJkZfiHE9uUZtoJheRKFma3X3RymzbV2KR19D4H55pfghosYKV45Su2GPDo88YnTT2SZBwJSEPM9Fq7mR",
  "key15": "3vQ4PUoDGuJbU1amgMWroigTxcEbf7Lm9E9aquJfjiTF66BHNC7txJnkLhX8AmqkpyRUWEi9xHSphpp2YxLD9JpF",
  "key16": "4g6uGj2AQgpdeekU7w4RqZtyu2M9CAjwCqcbjgNjeD8hqCRJWw4zc4978HsVfi9xpXB4AUY3twhRwXjcCyMUxLBp",
  "key17": "4huJ97dhPkteCiGwZWzpkHQ6oRkvCvqsBFQN7cpPvyWvvVnN62xWAf9AkJRtEKNQorWs9HPR4WiB5ZCPabpNniit",
  "key18": "4eTrYZDvrsNifmZiQf2na1RySjTLy8Dvdma4dWb6diXduqnkje8zkujTwzaP9V82w1ToLLikEvgF8bgXBJdaaque",
  "key19": "3EFuGSGrF3VY4PRNoSc1XiEjarrZHZTdxYXWUHkQotbSYyy68wnJMq4ines5u97DrRVva8JoP78ZJEgrhr49i2AZ",
  "key20": "46qG8CYMZuvubp4Ti7tX1YJAAFrpu4ySR5jTLVWKHbcj4381ueWXyUpRePZKYTWYbW21MbHKadbkNJDLUYTKxy9f",
  "key21": "2nqKG9tiZVWD6tceMkTnAMwjgyUbXPzT4pYGNEYzXE6HE3gCpXnPhkGVCpjhkxz5LnVATWe4wZq6Hb1TQ6cVPzVY",
  "key22": "32oXJ7mRj9Jq7v55uh1vS1ieYJsooSfHsntsoYRd6Ad5MLP3yzMuL9Lr1zA33GYPF2ibq5cNwcSicvEdNS34UR5",
  "key23": "57M1a3AutdQLyWTLSBeYT7dznku93ZstsXhZwZ6FthYn2zFtkXrX2oYwJubnuk8zFN9qjum4pp9ZVUoQvVYXT4vL",
  "key24": "3zzv5xPD4ib26yn5VyCCePCZFxy6t2fBFY2RkpNMCKEbQGpU9QVwZWBbH4fMcV543TP2vfbBwjoaJ5MRpNdJy8Y",
  "key25": "3o8FKd98ALuZSDpd7WNzUyWfsUcsQE7ZKRCTTr4roNSesvGyxhswLnqiNuaK2PJFcvYVcsiH3X7AxeouCpWk4XUk",
  "key26": "2TQh56uw1SSPkFYi7aK7VD6rsjh2zLLyA5rbNR4PXsxmzqp7rjid4uTzpz9j615PHHrRrjmH2KW8VSDXWesrJJhJ",
  "key27": "25RcHB6dLCQCPyVm6UBaeF6BnRwMBpXMqsrhqu2B6dungEKCZqe2Wayq3VFQCj5gUnzdZyJMRSb95Rfqp5MXMCtp",
  "key28": "4xWnfAfoeGQj7UMhFH5oYxgqcbcU6a8y9ekbarHE9uYRE4WtAkcBQ3vVm1kRGCqxyV6DL9rP8vBDwGiZbnFfBudB",
  "key29": "3S3JsJ8HVJjbHXfRPQiT55ns1haHorSd8QyhXNKUtBA4Y96zcYY7JnbLkHadnvDoUZWRSPmVsgBpLhN4BC1NCKow",
  "key30": "4XtFMzHJrxVimsrqx8shRezazxS835mTBmwragcHv1AHy4135ahnSvvgJGxEygXSf4LcypoRAR3s4mFPcwd6rSgr",
  "key31": "4e3fbTz9G8Hgs4ajGCMBPifTYnpvFKSw4auzeoLyeYRFqhULcU3rXFLFTTTEHp2itXnMe3cp1Lmp28BGvWFZTrjs",
  "key32": "jdPrZCVQGj7Xyae2Ba6LhKexoAezhfALoN6yn5LCf4WAtjyLJmysTSSkMBjHbAFbQb42oeaJwD6c5fwb7WfxUid"
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
