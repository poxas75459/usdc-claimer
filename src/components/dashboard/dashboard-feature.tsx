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
    "5o1VYbrwYSmpqpTbm5YsJKZACGc9LcDms3to6VBaTQF8m4sUDPBdBnEoS1h1kK7f4Ju2qm7e7coKjuZd8A9etXHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UGUGXxp1ZbXiVYCmtjgJBpQd2x1FhaVpaQ8wxGL6yvmGrsj2uKCEnwTXUtq8vxHNJu4faPf2Xi7oq7BP3mzk96J",
  "key1": "527FrD7s1Svp14pntjtsTnZFMmyz7bTxmR9oM7sJrWdTSJZU78Pyf3QTWispzHWdSzQMcU315jELMaee4p5fiHLB",
  "key2": "32Dwt8fhwkuATJgzVZgS7wV9QLMGPwz9HwrH1m46sJtqcYs9byqWTg72ubueoyX1dZa74yhZTyAR8qeJ3xsZqNW2",
  "key3": "3Zm2pdiYMQbL2rXXPXFzxRCDvpUPSk3v1VJ2mZ7miRpDZtYjDzQcFVvxojQtc9xTPxAAGVsvmAoydJjyN4ikfGD9",
  "key4": "5iaXHbAZcbvZ6qPYUrPuGrZtdRJdG9yzxW4cbow1ifPhUXaxP9yUNxi7snQEEyEjVJoL7oMV25KKEipLXMz5nc7Y",
  "key5": "2gDfSfgUYYPgCmyVf8VFwfwwGjr2W3vUMSZ8e7zMdwBjCenmZsaysNnqCDJdc9PUpyqn5tNsQy6EUfPpR5L64m9x",
  "key6": "3CUiYC98kjnQrZwniSUftTfT8YJS6WZe7K4avsgA2ami41aWrDBCbSamV6jsAHD8mZDgL5R64X7xpfWVRFLNmKNE",
  "key7": "4rb4fvbR3Zf8akdm2aURCJN1oGwf9mHsWErwAyKtwD8EerEKMT6iLu7t6CEuZqcsXurkT7WvqppHPjuQMbKmTqZw",
  "key8": "2dpZwnvSKFiqsGCvVKLD8VwqtVmjySVB6K8QSPYXnm7n2X9pbD65i3amg6YJiw4BtBvoMDC4tCvzK1Tf86gjw2xR",
  "key9": "5p5Uq7x5iHb4rwDoksqWSRjcSGtuPBvrHnWqJQk7LeSkg3s7jbm5JLKhVi4NyrpQm1216yxbRHJSi7g5fFZRnxdL",
  "key10": "5rAYrVPs1nXoWr1P6dJXL6ASdGY946cEWoV8wHECaxBCUfk1sLSu4Qm8azCn2BjVLpNe6wbfz7xori7rDSD81jh3",
  "key11": "3aEoYrY4Sr41TBganyh2w6ytqM7ubqkPPjcZKAcxGtv5NdvWKFV97zd3RN3dnYSRxcVQwML1WkMNXb4dmb7SzQtN",
  "key12": "63rSnuoEdnxDgDk9YHPvS8hwSMdscXTT3ZPp2fm54RhF4ruxqgzeTZF8Adte85UroqQV3Gn95We7gwQcZzFHnQd2",
  "key13": "4AygBsicuGCFxyLig2c2V3JMBAoXDHj5ZwPHRQZVcqsHGxYcy4sjNqy9PuVkoyLnraBKCp1L7LN39LKn9csWv2Mz",
  "key14": "5tZTWuBirzv5ikEQkw8xT2nNg1bn5wne6TnGLxgdek6neD4PT5ktzd5j1byWxRZSQ5tE9UVK99oX23ujTNqCHHiD",
  "key15": "5s8vSjnDbVab9sJg9MrymKcCMg7RFn7x2KL2zZNcqJehefL7xyKBzEcwc1HiTPZ4sKhC6KcsiWuAg1H34hsRHGBP",
  "key16": "4BVEozzLWtWbLk5HbjvJ6hvazhg2VNdqEdFfgBoUTKPKZAxWMtUJ3H4pDCLDymPXmGLBp8FGKPzYkKSpA1d3busm",
  "key17": "Eg4mo5Eh5zBrvthRT6ecHDp67qbbZkgcdxnVtFbvr9DrPK2bXWeNVgDG6knxjnePWTExgfErcfN5hBcnftcGWBC",
  "key18": "4bTWG5SMkPefA8FmXkQsaGan72cmFxKyEubiy7su6LUdW9E8QqbpXfJ4Ui6xBx5z8UU2vhx9wrwuuN1bjLtHxEp4",
  "key19": "yAwEZGoFThpo1BT5YMT13MMKy8mCtJd1Debj1fesAgvbbQLZk3iMGAuaPuJ3AVgSNWNfEM6bKc4vWeaXV1mfGsu",
  "key20": "42FsK7aztwzewD525QAAN6iRg9tHcNtV5CbTosijmB9FGY94kdh723wdM4SN6yhRQccDDKU5WXgdjr25ByHmyBLV",
  "key21": "2vGVS2vDVVTDHqWcue6WVPGcAZCJzAMvyLVeQQB6VrQV7mCyzXLQRPKCj93mLPQxwD7P95SD6faZQFY57H7bkmx6",
  "key22": "4VGkUT7bchwNg6AAavh7Sj8Rhs1H4NW2Ghqvr2v1Cyd6x9YFoDHn1t9BMfhgrgJwrGVEaaa441c3qxHg8rGPLqqh",
  "key23": "vf1Qxd6zWvtG2GUEVgop61qyRSGyYRmY1TBCpusFFwJRtTmhLJ9ChoAtDdVZuRsBnH5C5VKi4kDbiFaZ5M9n5dH",
  "key24": "3kqMLRfCEWc9NT6J5jEHdLTJS4Eyg573VFR2Rnhiv1mB8rdk7m4Lb2hkFagTKcTaBhFm1XjPhPYEAxB4ExsuANmT",
  "key25": "46ntyKR3zBTjJFPRQXW9FFbuPus8zEGhTm2CZSEAhqyB5ow8NwQw6aFmTZz6F5JxoVJ5aTWQQBzP59a1Wo1tpwru",
  "key26": "3u5V2gT7RqZCCv9qTMunLH4kShzVTbXL641PiMYCWERmQF2L61jVCDN8ZX69HKaXbQxR2sFk7E5UaVj3kN48so7F",
  "key27": "5X1Rr1eAeEzDgepVoACczvBPegbmuhKKbiRyBFpgMH8Tu6SH7HAJpg7MaMLUb92nMp5xTQD58To3hRf4HPiiXhYC",
  "key28": "3QccfEf2ot44GsMNcitgzNcibdEbyh4F2vQWgGA19nLmcu26r59TGRKBTND1N5dh9L3rG3R7woYTL6GfQnLMmvCq"
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
