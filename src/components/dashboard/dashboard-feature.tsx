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
    "5L5bHC326nAQsjBZFhqaHdqTZ6LoZX3Pf1qLRpv58zScpE1xtEvdADAz56r4jJ4dBHUxAo4yKpggbni666w8Rn6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32WoZD3Ygb5hV1QwNPb3uDqmHHCJ6bDi38YmEY7sTdcjWSG45oUsMQwJUNuikcEWYmcH5yJ2dw3Ubg3Tu48Ar7Yb",
  "key1": "4bC2EgmkqXLxJm4YD83XpL7yEBYGSRWwfcKEUrtpdBPRTtqMJwHzH4cXd1xwojc68DkMS8nzREdp9BZpyi6eEv4Z",
  "key2": "RGLCGQyXXVwpqeFnwWu472Yit6SuaY4HMRPDskBE4nfPV9UeiHQzg7z1Zs5kK3NbyHqqS1gkCMbDkRMLufmQn6e",
  "key3": "SFH7L6DU9A3FGNNV3nn88dtidxHJgPG4YtnjJF9Hy7JqLwGbF7DncTeEZNbDjaZcTp6T6TMwRaW6XRBevrfX8yb",
  "key4": "t6ZC8mnmgdR8GU5whngV37onM5M2mmmv423dDa84d2eV9VXiGr1khRGCuGJJHyf7x6j648a5yH9e6wJmsT5g3Jx",
  "key5": "4GnH4ELySk3RmB9F32Tp83KkY8E7RDyWxUBY5Xm1UW65VkkdrzjuHzxi3zQabdNsdqdzjmb4Qqx4B5WPnHa3Q1Fu",
  "key6": "Us8ErFGQSK7tbG6xhM7WQjMRp5VPrANgnY2vihDBREuq2NvcBzT9U1mcYDvYLFnoQz3Y7WkuGduWZ6cuU3buPww",
  "key7": "5GVprPY7PUHFwECqR3kBZmMUL7LeDyCmPyh2BGj4paEZgxDj9zQd6DVAQzC64AZ9FUnEt5ELGwJ76SDT2SmAzFK9",
  "key8": "3GtDtdCL7Vs1LRkVn884xJddDz3TNXFbYc8sVXDYwTyJkuCautTrKB8ztbjkadpuBKwPqkMPP51QD3bDCtoJn6XS",
  "key9": "5ZCxwc7oFc11Fu6jSYrWKR4jxrwPZ3uf1TP6PumJd59eBMYuMAmKBCFAUAUkFbBnERVJVEyFe3nUNh69BevxzvV6",
  "key10": "5RhqkCFZdsnw7pNFcu23siZTk5mPvokJYgptqnc8o468GPfessrorAq67yhQKLdi6GdMM86MJ7mKWNJcgzw8k6Sj",
  "key11": "2Hk3YDvwjKpRrVBycVq5bFhKYCjX1UiTZQmYDh65Awo9f7xymsNQy2wQAbaVkEbEgitAsqVSFBJuF24Nsid7wshv",
  "key12": "5ebQzjkUnc19Et1kqYHbzGy3SuoMcrmRZK3nnLk23dJwzX5FHhC2kqdVXQj4Ss4DEeBMDGR4PNLQcQfr4zKiUAxC",
  "key13": "D3SB1FzDbp7KkbWmEyJm8dyUQc8GoaiHU86XV4dnhedo2ywM9hLUhydty9g9QGnQC434wcQykuMFMX3amWRndQP",
  "key14": "62PHPQ1uze3SoCcdY3t5DhxbKVAtGjx4KMXU4skyWRHeWMHNodVQXN3cDKj3Ze8d4YrH8NU3MCX24qFBKzjf9uZj",
  "key15": "3QL7r6Rm81Vm1T1tW6hBNvG6aoJ1XmiC6ay1scvr15uJUiiqKdciL6sknbbs4tYgoZK6yUZxvyoFcxGxekW3Amhd",
  "key16": "44DRDVgk3dWLTfL6wb1VDWr7ZSM6ZkPRo4wa3eNQnnV1v6sjQ1UWVGjzvE4RcFxCAEMkPQwEhfphGBnwLNTWsrb",
  "key17": "2r1KzXyVXAH6wXCvEqfMc77RGTGpv3hLdKVACv2phMUroR4ENwn8eDETXGsqXZKDS3wyq1M5S3eGVVthM1p2SHBS",
  "key18": "3g4To2PdkE4xVNUaVMkQF1bvYb4PxfTJLJ6gNqSAFUaKyGYAsf4sAYeq8HZ1NpF8u3R6D5TA9qcHoYCxFg5DUTj9",
  "key19": "3rSNmXRRWcUY4yo3k2GvvrV1FfZ8QwcEt9b7pXdhYwXTPDEhNDNYfV1YBRXSXjQwZsyEhebgoG76eHKuae3wou9T",
  "key20": "3hnKXUD8B25phd1kehBAJPg2gEhyBtxU71TAPCwjnfKoztXsrz3auHfNPHd7yksJLVQcXiWa95fkqHxMofH1tHJA",
  "key21": "3agZi8MZ6ffzvd3Tts9iYHwyMAqD1no8SKcLma9dS4qCwYd8DwMAQhS95YCNEXLsGZ3GsF2VoEe8B7jLeTAPhLbh",
  "key22": "4SbE2z8rvdw6Kp5tx24vFACcXVwzKBiH2keu6ueCd6zkRXx5TF5TuAhdhvZyrH1qgkiwzVCsxK1EWgwSqHz6dgPD",
  "key23": "3xMv8XvfHSPJArp14ovo1KypfZTTzeL3St5tKypNiG2YncHU6DQxjV21XMs8NobxUiphTSZzkEQnLduB2jyaeqz3",
  "key24": "272GgDVBx9BaGLTcgK35dJz5YjhZQPS6uzKfUEakVLA9y2NEpBNHPGcKYoQHvSJsLC4VHtsVEAtxGwR7Nsr59tE3"
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
