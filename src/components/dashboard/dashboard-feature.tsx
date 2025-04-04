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
    "3GzXoz44a2YpEHpUf15tCcXcBNEakTWxTVmU5MyPZhnyrZfdPo3naY6uiKsC2rkzj7FT33GmwGjjbSv2T862bwKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f5gYSDSDxVVkdNcxuwdpUZSxMmMTGyKnMAVCo5J7kzrkEVF3adRwMPNgGrEiCMAsZuBVwAhN3MiQn1mPEbS67Zb",
  "key1": "3b6v1ebLzGLR5DYPzLecAZpYZWBRZJNubNsYDB9v2hhQmw6cNBEz8XX3CN2xzRsgtWcy4FiFpUWbbZ6JNniXFbWi",
  "key2": "vqmbqLsnAfkmQ4vEko3XohWJVV6PRkV9aehh6SJS3EDZegxSdXHYH97SQJjWEKjepHcYUiXzK1t47rFz8hmVukp",
  "key3": "4dYex8t4z8y58QvMX5EYjxiLKQWvnPSGwm9QXaxurGSYq4N94nUeUQNedSRUNPf3XNG3yNtoiQt1dGGPZZ63SpwL",
  "key4": "6pJ56zW9LjphxV3QF5YQbpo5ogZDPnQCquwD3kQtvnRzVTMg5FjqmL7x5fyk6gXcWRUi8aiVE5e4g1CDFfeg6eG",
  "key5": "4xXoVRir1hLNv3XEHCgjk3DgKbd6poVNvbFpJS7wNeMZVPFQp4UuMG1GFWSMChsJdM6HLCWizjgCzwAod3nSK4Ao",
  "key6": "3WBK7apNLyDU6Z5g99uQB6kPN76LNU7SyGqVohvz6iR5VS4Exk3A8zsBkyuaEdyP5rYVgMM5BvGkBVqGhDyeRw3k",
  "key7": "F5oRXfN2fLcpNUi1MFaDsyDLMBe5tMRfegik1S8bvWTKHxyCrAgDh5C9heAkRs8p7PgjFeJpoorgU1SWGkb1xcL",
  "key8": "BcVrQVbY4xAFm3aDFR2jcV3an93BpfPB8JVWnpaTcjBjpj3akQGFu3Yv42TyUTDug23Sv1HcXcH9L4W3HgKEguD",
  "key9": "B8JSFrKfWMDSgYqAu8gsev2pPELCJ5v31QjZsBbXqsTZ7wNUSft36SVN7zDkng1Z8YcRUjXM9kYLfw1wW5Jh2nh",
  "key10": "xpEgV7dVkdJ5Pd5dm3by3gu488DqijhWfLEwLF9v2vQWDxqrGrSBnqvJZAgmsshJ1Ruoi3Luhj1T6Tunqi55RY8",
  "key11": "126yC6KjN53M5vVbpC2oLQm3vJD514CxvnGRce7h2YmvhSQ3WsFd2hX1gbiqZmxi2jgsG12H37EmWdrNxLWuaLa3",
  "key12": "5ci3aqmkcUTSK7kScCkYqnGnSjY7npZ812oxWxBdY29EEoUrq2BvcyYijauvGogvtRpQtNtB6VNykngWmSSVWrBr",
  "key13": "4jtwhSSmc2jvsncnUbPmWU3EYR6f5rEy5cUfANNYf6poLxZHNEt6Zo88MrtgXE8vXXaBwXJfVDrDDJbXwXx318ee",
  "key14": "2rCjMFN7n2GARLVccQaucGgXqvKnhpfsUz6tewiju7pUYQvaJASMNc5EDkEnZc5CqkSquiA9Z5qeHmEiYKgR9L1H",
  "key15": "m3PYALmiVWrJyNbPtmYS7awzRGMkLzvLs5faVx24cejCGzNAGdpv9AXAAKH95iixo1N8gUeUeQGL266KyRmgRTz",
  "key16": "4ro3Dqz3vDV2c4WgFspqrJQAGkhMGCoqSWrEKmTNfPfJD3mBTwy8EPLUJ9H4gBEzHrb1fNVE1WNWE2xjzDDSY2Qc",
  "key17": "4CdCAgwdnK3VoSDp5hBdth93ZZ53RJWv8KcYtmxNkv8oi7X2w3eei3iGj79RjVJPBuuY4tLnrcPs9ypW4VWawFxD",
  "key18": "2AcgU6xYQcYfTKvMH4r3RBfDNQ6xmo2trRMW47cwgj6sGPGJiuF1SBMNQkCTnVCC22CQqWeziiUsHRJR8Dp4cR2y",
  "key19": "3dPZPKN7LCciSoLRfftSen5wukADB59uhvyRMuwHUge8JJv7CF3y2HMe622mdhx9bwvgKfvdhzjLvxK5BxnWUgvE",
  "key20": "3KcYiGCF7NLYrbdSne8K7DZbDpJkFXgJkrHBXfkcnfrbwGk9xxXE542VYoB53vjkmt7haY86B8JfxscvvpLicA88",
  "key21": "5pqQmcvyxsg1PpfKiGSzZv2LdevswEsnvDrDcaH2NdrCy9AB4SjYgHPkLQDA8UoPP4UV5Ynj7e3sh4gMVfPffuaG",
  "key22": "zXpUD8M1YGb3wD9PfAP1o8UXonGF5dKeE5f81pbUuaMFPzP8riMSvRPnoE3N8URgkcKhPXo84MYy7ZszCQaPeWY",
  "key23": "4YstG2XcUxjSoTZwZkX3Mfj5duvusoBD9HanNbx3E7MdGpfyFjkReHVVxcDFDzzjeHpcvmANw4Tyc5T81WxxoMDF",
  "key24": "4SNTM27cZb6XtbHLcSRsKAokp1dtQXSMDTjoyGzBuop27NTWy6tAmsVyNgEWtncEubeo3NBsVY8LcemQLFi4NmQ2",
  "key25": "5XAiA4zjTLM11ovuK3Mrv4r3DwY8CHBpospCRZdCkQMo1Xe3KLCaxVAMFBdEMXLT9Rtq5dSQuotef3NHst6WsMu"
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
