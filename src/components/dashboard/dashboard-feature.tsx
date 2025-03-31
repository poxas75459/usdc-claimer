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
    "2BdE2CtCBUZKXFsc342xMQXWxafPxJ9kunP1kTsEnq9ALuQBNWnGKpJ7CFpCFt72tSiZ6wRKYLGFjLZQujQsU9vJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zALMsipGwTKDbiZ9eskJSmgCaGFWhFoGGjB2KwQSCkLbVaNVYdezA7UoHZjZuiD9P9fSLKHG8fhcXEmZAMhSb6w",
  "key1": "d73DDojJARtm3LJrd79mccRWSWuuCYRs8fd1r19PqdhCLRcY2cn47LVJFeiVqzEFC8w6GfASKyuaDmmux3pkbXi",
  "key2": "5KXMwuErvjj3Tyg1Dcf3EqGrakJgqEvxt8WwsQoCxU6qtZf7pX2zav2bUA8WEuYJJejP5TR6DBobSaS7au94qTjt",
  "key3": "4wMhQgZZAA56MDPcrYeQYPCuiHyQadj5rBoXykTCKsz9jfcFSVAdtHxUXCUjuWwe2PStHmtDX8YPqBvmivbteKv3",
  "key4": "31F6gG9q9LWPEqvMhvyL7k4UXqYNRFmqr6f4DYJAypctRfUxdbf3HQ1E8mWMW4kpNm5cB3zesNqpXoXd2emBxwXJ",
  "key5": "3JEsYvRYG9vy3gqbBZukurMmATZBcmhGrgaSH33RUs5pTvKyZBon8MBjkVRUspTj7g4uL1h7vHb3a4ntiJhzMryw",
  "key6": "5GvGVVdQzcxb1XpGeS2DvZWNivbLhqv6MfCgr5sYhSh86CFbr5v4M5FXavugreX9hJohCs9yBYXDfqkrP1rig4Dq",
  "key7": "1NyFEzjprHkLJiigxQdfB9wR16ENRja4KsJnuYf3UNBRtx5nUFEHgXJL8sY6TG5Jd9cEqos6zwxT1yjsXayEHDL",
  "key8": "4atdtf3pgdAPapJost26e69uP1VczCpvGmWMMz81MxKb7Vq7SngjMn8z1nCFvTfAp5RKXWzBemnkt24y5a6An23Q",
  "key9": "2khL9PcGuiCThqgqDybXqruwSYD7i65RKHbwRfmwsVHTEBZWmjCmtnAQD63JKNPLq2s7wg5BMJwiqjFvxCMcQLmf",
  "key10": "4i8AwZRf166s55YoVEHbdE1JWhDwr1RQpjPmpfc7BHv8bgeHZwuA86JTj2KJqTjztewbuG8QcKgCHeJVzLcCu8ZS",
  "key11": "2oYEbupopyXqDCFqN2SrqZNPBdZF8QiE3mFfr5qDKVSZ3mXQUpoehEHsHUK5e9R6NLThYD1inVtrDQpjhR8XkvtB",
  "key12": "2H2DVMyeknApC7yQ8JdAZge4foEQCfQE673hUid9qwYvR5R44ewtyCtuvn9oYwGiXJyV1e79hEDLcf5afKwhf51G",
  "key13": "5TfLXDKPXiGbiHdUSfNWZu9rHV5KfuMtyjRppVchSrUiZ5UHhYWFpyatfdeAWZsru6n1AADYo2jA2Fs5wE858mFz",
  "key14": "36HEBYyynuxeV9spje8JTDsQk85YFU4XAwGVsZw3tKPsKTYDmCPzQXdDKJvGg1p7sMYtUQZfRtm5rKyjb1pUJW5m",
  "key15": "yNBg5ctxbcECRAZZrjqbyrUjQG7fGqYkEh8vxpJMto4N6sSC7o4ZZ3abrPcHvCdh2g7WuqENuPWjeLhroN9Fw6U",
  "key16": "3e2i8ijwYSWx6A6yvEuqCQbUYVJcoczSGxqcTmY1tvWHt1sUcjyBkphu3Ara9mMvMkTUc3bKwL8KjBp7Xz9SCELB",
  "key17": "3uVTNbr9n1cG9btnG9WDfNnRZ5hqSfWMtP8kBtnmEb8FiYAEssututqLdU8DUwCBUVAToSHMsyku5NQiJZ7Kef63",
  "key18": "2aE2r64PyYB1Mr1hqMGKiHrnmwv5SqCHYoemzK59bQ4JDxCANQxgyE6o4ECpdUhFJFTJudxhwarZy5AoQUxs382U",
  "key19": "31UCLxjFKjdCQHmZuTDv7iYHZpCYfSYX193WmXSMQpGPb5GYXnGw7mkiNfkY1kFTVZJjfMDnB9Xq4LnrqoJMiQ3v",
  "key20": "49vbsEs8rjcNm85TZ5kVt9z1Vsy1WHbWjCuCyypeuzQSwX4neCWPVGjstc94472rV8saxGL1dcvc7KRipgsTj4mr",
  "key21": "3KF69BRrb63VBLkBj7VoDMQYCZcwM1mea4TbYPiyvuqx1TXNfZ8H78x9zWFJ2Ci4dENsNaHEEqgAwpvkN39i4XbU",
  "key22": "2UUQx64CEGh9gCAshfAG7RNmzLNrBbfKoAskbv1sDeRnvfeh4X6LwuSM3ikLyJeEDyqFJKpX27KXWtVSJ4QoSWDW",
  "key23": "4wa5WB2b4QakYCqCGhJ4VqsVqQyfkMiH1ucXHmNqGX3v2rAr7ZjUJcymS9ht1wSDDNgbbVVbL5QhgWxPS4RhHfnb",
  "key24": "2KP9QP9nC8Y8i2G3gwCZ33ZwokBWiX3UFBEpX5xfbLUmrUwQ7ycKftbeMBzUjCVoS4pf9Gsu9pumXJCq5ZEJ7djF",
  "key25": "3gfahHFpMKaewPdtkoeD8mxLrq1yGoA9W9tav3Yocurtrw7Lbk8PAxTNHwZgg3rKCQYrUCbXeQ9djhd1xwp1Rvpf",
  "key26": "hkmRMhA9tCKMMxcWuS7wjQJhwSeQKW5aR1bNWCCgyuxR3vwRAmKX35N9j3yxV1E1gvXuPNL2GMzDKN8VQCbKG4E"
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
