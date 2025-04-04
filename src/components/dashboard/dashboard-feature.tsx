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
    "2KcgWxn4dEZfbwQztDcfhNSWbcFNTM2swyzNM9ntaTfL4BsBTMRejdrfmcigbNm6egX3YX1qX161oATcwK6Nv66Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63dXcJunTjm3TZkaziUDwkoYjUUCYJ9ummsWiTWDq6S4ZFxAUTWUJDz5KYVfJQB3BzMcXBahZsqJL3dW7Ev3iF4b",
  "key1": "22Xsu3APhMGryNaZqeNW8C1jBqb8DXG3SX6VRoTPRpgzqCS9YRUiEstg342c5qu5FN7JwLcadxjnmpg4etEZkmg5",
  "key2": "23p5TzZu8ejJGfxRbZQsoRAfAGPZo5Z2PAXbyTcdYeYGH2KBFETkUL94F8zyCeTX9d9wtHtEYi3JtmeUtAg56ksz",
  "key3": "LBZ3Je51d38VT3dQrKjm2RysBtPvp3D91DNWFbLnXJX1jD17EYt4LskznoLZEtHLsZEDZYM2cAeAfRaWWok5fSk",
  "key4": "FLQbh5kWQcSz2qMynFxQC2j7siqeyoBHtoSd5uGQHvvwsvMxhNDz9skkbYtUtSLtPUx6jY765wuQeMqQLFLXmXv",
  "key5": "5Q11Et5SjzZbgQDEaVCqj8mxzJwGLCzGicVPL9vuXLpegRAvgovczWfpHZeLgcfYm9nSfudtX4B3AmBWtpirdC5H",
  "key6": "wa6P6SwCV2mp4t9LwdhfZuRmGdMKL99trsYhozpTGop99jS8kXWmnuB5jZT2uAho3QbFSGWGfUaF7gdjAS63zSU",
  "key7": "3dMS6amqQWNnP8kvZPfaJ1zmVxMFTk5kQ655TV4oQSUqrn8Y5Enfw8aHrtTuUVCgTZEuMasyvLvNEsMUD73VFxTa",
  "key8": "5PJBiaam9Vz4nCX1Fc2CNYQtiea7cZ32Toz5B3RupejfWCsgWbgDnLRzUpWCC1JizJeM2HRwojZ1m6YcwaQqB3dt",
  "key9": "24VdCaqjxBUTF8K66Ytbmrc6izS4AUUa8zXkhZmm7E5Pb47CTG3FHDchg9jutXtENxm4m7j94qWgA3jTTaQ5S47E",
  "key10": "GyEP5NCJ2c8safroCixCXcp9tyLJabcB5V1h6vVjgqU3abzfdCfN2Fz8ACQ76CyZGWqunkCMwaz9sDgg3RZQBTj",
  "key11": "497Tan9zirwTbHEmpUrsaxzYeGXu9S7TMmSpfzc8QtJLwWMguYoE4yoMuCoXniJTRAgjkxD3bUPR8keoLv8SHtp2",
  "key12": "QhRsR12yXHXzMjvRTj6qXLabMMy3S3Bc5hfgNbMQBRJyAJduj2Zt7wqZNwM9sWKFNJ7HVqL5EhP76BzL5hHmeHY",
  "key13": "7VK1tsJ6i22veNon3oru1Zs7wL2zrnUNVT6AntekLha4C5wLLtuP4SruBAdtWeMwJWuCda97MyrMxiwCQJYoZVc",
  "key14": "3zEbfNRnwFzeQVrQX8FTgxPhyaTpU2TCFa7o33iu6rkY1wzsdFE8dEZET5DfDjQpZ86aWynqC1A5kcWCJVU6pFw9",
  "key15": "2Qkyk3wzfyfHJW6DQkL6BjwUsJcQ28dg14W1SCzBzz8ud9hgrdUcYJxWtGMvA4z1Ny8E3w7qem1WTWKzk6ST4HYK",
  "key16": "uHeGDDRf8DZRJFN3sCQBPYwfk6hbQB29U4vWj42Vpa5gp2yVqND2L3sNMk5WycsW5wBzBzCLz1iin8WzGL5Ep9E",
  "key17": "4GhbwMqWZsYz9UUytWbfQ3dwTCcshoPMFNXsntvRAtptt7s1FvBjY16B7BVRq4kLV8oDNbNnVJSLb5e79mRGqHSb",
  "key18": "S58Dm52T7wco3ypQwUz82XZ5eFy3AFm9EAEQucnvzUPL1b7nV8TgaESm5S2mtACoD7ou6kJmFq1ar8JKGMax7v4",
  "key19": "4hoWRvu69WnYpDhvLJFbch3469sHg5xCd5B7FxZJbGWD9H8MM3dmofphYJtLbrsRroP72CHRePTvsUjniwquv2Hx",
  "key20": "21NMyVNzM39y79McSDVn3aMHKVAD2yUvk9jo4FPaxBWFoq72vwnBUneFckpMV12ci6mFB4RhUcpC1iTTYhj7n7q1",
  "key21": "5kXGH8MFY3svG35JLdo1woHWMUfRJfDAioR3Xrf2c6tgowbU8Uc1Q2XCRhHbSsDYFWfaQSb1XcVAy2kdBArQcoWC",
  "key22": "48evJBpm2u1ZQDPo8YcHGwK2DLcSvjHvqtNsodezuJzKFnc2b6VG34RtYmF9mDPzojpSyDmccsuTdPszD9wpEWt1",
  "key23": "284YJMurzxPM7rNxGmQAbejGmb3ps1UHTxiFjdVHwHwvRhAaYeYgSj6L7vXtnDir7icvkSgniBiQXBqHCzFAEtsu",
  "key24": "67YHbrJdy1cN38Y8kHiE9rRD3nEgQcRSUY3RNKYPgHG6RcemnqvzjduTPx9ztgsPwS4aeiZLmcrwtvu1BZrGRDH8",
  "key25": "2VomvERhWcprcC5A8gitiFT5zAMptUCnBShBc8rRQAuWorW9WzvLPN8MXsyL3r9RkD4hcpamfXjuEfdvvs8cuv2X",
  "key26": "3xhizV8r82mBqfZrnK2pYpMDgjfzGgPgo6uCMNtMuFNf67wAUki7sNsQzAMJLXej5V5TaxhsE75WApsAQuGqBNfo",
  "key27": "TsDxwvhZsNYCRDnceM499hSMC8WRVevpPwCNu3p42wteTuDjDczjH1BCvrnpos1bJXSx8cyqcmMLi5oo9EuvpLq",
  "key28": "3acVigbeGUUPoA4HFmx9MUGsBbkDbtwwiehxCALKK1AvvSfHSSnvJfAVuczuBjxeNbaA4RcBdmJmRPjcWHHY3D1z"
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
