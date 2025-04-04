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
    "5Bt3yLQQxa1u5qkdug3d7ov7hnFuVaR5NcM7TNMibcburSUcoYEGvLmNtshAeBP9c9d7DR9ZG9TZ2qGroYvYNqX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pyX1UFmXt7aH9zBcjaBtMNiVEEDiLyvRYKy8AQYDetWTfoC1PazZxuLUCMiJBq29wACzz3p8ugrUx2yxXHfLsXB",
  "key1": "2VfVj6f14EQpFwwksLNLzEEou1sib3rp8orF6XtoFUVUnzK8QUqhdGJkiMZE28HieFJRHybFnKFimw9w9ftcjhwm",
  "key2": "4JEqAbRrADq1NXiNhEhB4otVccMuBEmPyRZhLYCTsztwvvAx6FBy3EsGABmdpFxp2QD4DrwiQSNs35MuQi2iSWhc",
  "key3": "58ZVVhZdrJocyJBmEK6kzpXJwYjWxrY6tJqsrbcTNnPqAL7ohqZvp9C8bNDtgDNqdevRG3DZd49ZpYP2bwrz8wDL",
  "key4": "658T5GgpVfDzBqQNypFTBb9nxL9FhJDc8NNTR3MuwgrhvXSoRzLfU3oeCGCG6P35EvjMLpMgz2vdzPJQPzhweYKa",
  "key5": "4cNxQjiH4mTJTJEWJ7aLVYgvmSMQDHyFQtkheyoptVCyckWocaDvsPmZPtztuqadwJpajYJadSaoKJA36eVCBxTN",
  "key6": "5QELgmXaWG2gomFEP2ScrKf9TMkaGAo9YbXSNrbTpm4VLscXwJm4WBXD83H5ACetzCMSdw9nzV1uhWXuawNrack5",
  "key7": "2TXbG6gvG8oaan1gDEQCxghCWP8fDYhSKvK5ABsSAX9X9v95QZEgucdpdJKaKxzeqzUJ7QwpsL1MAQu8FXbjUbTv",
  "key8": "43QYZ5v2JixyCVpxXavkXLVnzudfpskfSSf3cPFojTHQQDDsSs8KWi759t7eCpAgwe1mU8MCfwmFR1csuHeCYRPh",
  "key9": "5g6mPiM4coQ2jxsmgzw3NZuyxW4vX8qxup8JiaBYHaEJJttE2y97yWYC9pmMRpEfbXv3HDGUM5VfpQ1JmMqFcaQ5",
  "key10": "5w8pezrNHQKqeunj8WWvmM33YfdzYHLh1gSaesjcBNpGS6oNFvSKDJEprWEhXQpZju8NgsNy4bKZ3SFiTGdMC6Ff",
  "key11": "5mjDxXp1njZowMcZe7cfg8BwsnAn5LuLARHWZu3uaBxf1eQrbMPZchKHDrcet6S87YVVZttG2ASXgrEvEqnJzUmV",
  "key12": "4Hs2PhuJkRHYpwX2nSrryTEhjBYqZSr73B2mS1vMoc3GiibsJXuigHsWjnyS5Y1gLeC77SXfyTFfVTBAskxPAPF2",
  "key13": "rsMJR4QoYHf8NMbm7RkccNNq62HdSXtcpuoLJa4bBvxuW9EHx7WSzyfbTziuNU4ZBktTSQxdWsi4YXFQ2LcxCmE",
  "key14": "65WzuNrYd8BCysuDoBUQ2Hxgxn5GeK1ou2UyWvAo2KuqERxAkRMp5Fsu9QPUXfp8APKVrr9Jbz5HqErnE9cLNGVA",
  "key15": "5QWtGe4FudX9s2RYAZcF7E8iQn1GJVDGAMb4HaGuARod7gs1jbEkSDATNuJAnudCT52yfwLjTCsFWzipCVAJeVm",
  "key16": "3fU7mSqez8ZUJw9CF22vEqjznAyAkvZKyytKUHv2XmdY3vMSLUnDBALzz3fmHAohpzKAGUwESoqLmcA9XstQCXMQ",
  "key17": "3TZPxgz6Tsie1uHhwHZ7AE5CY1244754DKwysHaMSaLDPTYWp2XR6cttq8N2XkaeoHFELHPkpHNNpYDjcp5iQH4Z",
  "key18": "2uHYK6QvweUQtJhJWRPEev7DiPrgdQg9wZUFYuPqhtVmAYFnWkMLAiR3tZQfQsQPPgNRrRmeD5SLrLaV3W2ykJ7Z",
  "key19": "2djkCzuvhQEvVmpFHoUCkB6jq5WC5EXQXNcvyuRXezQhLLGbo2gY9J9Q5EZjQoooGzH9qVMYrpF7Ehi97fWmk6Q",
  "key20": "3SvB8ztV762mZbP5BUMMmxyDSCmr4iZPyeEEHvGvnEyq4LAjy7eqBAkrzuELjsK3SAS5qNxgjLiqdZogut71WwFB",
  "key21": "2hYhLDR3imBNMTQVWYL85iRJnUCMbcfWxR4P4NF2tYYQ2bzBzHeEb2qtiXdzpBD1vddUjudXHnDHpYvtsd2VN6bZ",
  "key22": "2tWHGsCniUrNFSAiy6vuMSrAfhCgz1bszYtxt6jpDjCHiu3MtkRb7XAh3DEsrFR7N2Sqf6XKuQYhYf86AG8mVWx8",
  "key23": "3d5Y5DBJCo2SK1pmC1tgBBYtw213iS3vZ5dtwVhFGeWPrWbDZedByMDG4aDWhPzGYjoHWZeAL7rPmFKr89zvCZe1",
  "key24": "4sQD6v1EqNYrpRZHux1kSLSZZib5fT7mRyZgWxoYk4iZXn8ZBgH54CWC75vpghtVwRoa2X17h2bmQUZycBzL4WRn",
  "key25": "u7hRBYG1ACzJ9pNwKkcDdsNaPQWP7126NiRBxF9Dk4morFHsqQ9T46x8rRae4uBpaeEdpHJLzBE3qt8TP9d3x28",
  "key26": "477eEkDG9ftA9oYf4mfnkgeme3GD6qLdUogR5yrdxykAyuex8uBqTLJEv13aoonuF8n369HNvfCvAD1MbzAsmrB6",
  "key27": "4gfuwFqr6G8pgp6Q6Pzo1Szz71P2teTVRZTDhmbBFPVvYF6p8daweo6KzsEdbd4eXNoA44fp7yuDi4FM5YoALVn9",
  "key28": "53ZbTUwU4UQhn9qUdxnAyi4cnQ8YyDoWry5oUoDxZ33CdD55uitRDs733gi2wo7ikxNwAZsFG8oTjTFsAxTtQNuJ",
  "key29": "2Aw7jXZBjv5cGQrM9BuYfSdWUa1Ac9FNqP9zL7GGACySvoGrnaCD6dUTHzezffMfehxsw2qsq5CquVDDgwWaezND",
  "key30": "5xPhSoJLxmYyC9Wt7BdEj8Xr8hBrmsmynyWi5TS2fbf1D1kVF5BrBPpEvP6RXHaGR8VgWEAMUnyz5JcXwwd7YKXd"
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
