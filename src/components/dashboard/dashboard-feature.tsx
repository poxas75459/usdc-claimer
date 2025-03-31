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
    "5PkZrp157aJMetijLKb4mLu3y12brmnZfNZmEYNM5rZ7spSxwBi9L7gXot3dKdWndfK2KjxUexYoXytLEXKHeH3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jnJpSUF5E9kbPHrTmuCuMFP4E9DUXyefbHqJwgsQi4NXkiQ1FtsctpoWWJxYDkdt8riXnGoAteaRMN8VaoUWPVd",
  "key1": "4mshsDNXiU7aqyQ3wYcpha6CenAnFpsZoVJE1kq2dmekmKcFEPV3ypLMKXBTHaRXNMLewSTHX2DoiFLE9tZT6Uma",
  "key2": "morAxq6DNy854fKDvuqAtDnLy4GxewUpunKMacorv1S9gSHin5jiKsovN7C2qkZX1G5A9KCJtVytveGgQeM2fTa",
  "key3": "5SWVk7uxa5oJEtzh1ySGcBnDf8infiM3EGgo65pJZUasxGi8Myht3jxNsjkpR2XSqCWBVrvEhGvjAgoFYLCz1XUp",
  "key4": "42KcbWZdS6CKd9cqER1XdxiNwwHP2VdaYWXyytCNAn3pXPVEHJ3QHMDWy3i2Tp8cMZmN9VkqVVkUgvdykcHEw3X7",
  "key5": "49LnQ4HHhspKKcw4mrP7mFtdafQ37762QbAwLRi9BpwSwon9CPC7t19f3gUuSE2mM1V7DEKQFxBVBwX2CVKSN4e8",
  "key6": "2v1MQPRyuGQdULue7T87RbX2TqVLcR9p1MvDMxUC93H6tYs2rp4CzV9KCtLfcRZWek8Rvhx5VMh8cSdEaMNtLxqR",
  "key7": "2XMHQGGNYWLqrarmWqZcJDpVePs4h1pTCzP5PKwHPkbvMgq3pmhQJ7MRSmcK3uVoA3RLkraRiptfmt4L5nLZmBcU",
  "key8": "3Es7WPV4p9n59kf2E8YiPV2qpQUoLWX14mdXJ4taFMNGTx9Ro7LnX4yviZmshWXk2rkAmqhGTaMc92PYhv4ETcwb",
  "key9": "5ukiWeKgedMgYvbyBefTz7RL5wn2drDRdRFtt4L9UQPZGGmVd5oxPiD7rFgPQZbKxsxAYQh38LRysXHMcCvJGsj5",
  "key10": "2QkRV75pdbjKS2tb7seD2Rm3H7oQs5GrhebU3whSwGxCa85BimtZPviv9bpMWYi4G88UC8qfjG32VuSWYCgDM9rP",
  "key11": "4desueJKvUzME9pM3dys4PJVbBvhzkA6eDWehKvr2S4EEyfXjmW4Min2jEAqtiqUs3c9ATsyBxLVCWUVnC31qzvX",
  "key12": "wZdPRkn5dCqVVJP7U8dsC3rVn4yS65QUTRZqkGo657VPQ2o6LM18iAGNEXxzMdfGxJnwWXvMg7Vtv43MgvvvyUm",
  "key13": "34JSGJ6PjMaNF1gC2Z9CDojsS4Eri1iHE2uapYNUfo8bhAQDaxLtdiNFU1iFWiZMpQCZB7cSTo4fo25LNNT4krsz",
  "key14": "4SQob9ypqvnbF8zi9iRybDrFjLkcXGSAJ2kEAfCRuaRfUePdebuWJ5qrR3SZqPpeLnKtua3Gm1EvRKmXQupc1jNg",
  "key15": "4eqwYRNP9LFxkVhiYUuvtFKzAmnVdcBb7wnitSzUgj1ocp48LCjES8KcurqvAQRnxmCN9f47ynVs4QxHdHzWSZPN",
  "key16": "5a4s5WPd5kNugrrwrSdG1YSpLxpi7s3QagL97bVoi2LWPQ6QM5vyN3MarJxapKfWfFc8jmK6tf8qd3kvyZE8kxyb",
  "key17": "5zWZQgW9XHvCeVEzQ8GnxDNXeAcXYsJoSPpARzmxLjdH8DYNJphgjp5WRuEWnTHcsRYv81az6mURnEv1JxnY4ZEE",
  "key18": "4AA8YadPyV8ySwJu3rdtgQyerczTNyAA7aGUVvdPEPBiZpgFScqVsYhM4reFPbsszWJPXZHjG7pbEYpVeQAyixkr",
  "key19": "itHWEE9yEEqCWw8zCZ3B4u6DUVPqu9hH5KpbApoehHbSkDEnqYSnd9uPQq9MeqJwuWXv6T4MRGaxHPpU19ewFuC",
  "key20": "5H37pW6iASTUFjV3EEkKMrvE2KV4QSuaWAz4gNEgV2gh9n6Fv4d9yZxTB3DXugEM2VRQRVP2HeYYMVPZ83ABWKGt",
  "key21": "aAuUAQs7QCLcp2njoADqy3bqdqvCSzCmRxZBhVPUA1Jn8jFN8t8h9ZGvawD4wGeKzrK3F7Lc8hy387hmLsJWxD4",
  "key22": "2FMMQXri9xzUMfhdzZVDxoWenAojdtzsYwRNfnEQbCEzP6bv28WQ47K6pkiKNmQPNG4jnzsXWcf7qcfgV58kvt5t",
  "key23": "55NLAWhG6hqHVrhGjo5VTnJxSNvyF11zgSQSDo89Q4u5Tbtxd72uy61vDg9GjooekN2r8kXwc5UjprMsT1giCEc2",
  "key24": "xr6B8rkVfpM6C5FuwF3arg9dWxQ43oAdpyqR6KqeF9f2qij4F57jYg8rxdrY4KwS9eDzZL2b9QFgHX9F3NCcJ5H",
  "key25": "3vuPMsfxwKVzpcJZe1YxYLgccad9tArrCWRCEbZSx7e8iXWLLmEKBuXktXC5bhKQQdqs9waA9uEfrdohpcAvqZN2",
  "key26": "4FFRpLvbRgPSLb8tKdg2p1Yit1AtfZK3J1Skq6pv3QDMwtig8sjCvbc3DJhcvFRSM5G1nUiRbetwTyPnEnv3EA5t",
  "key27": "Y1bo3ut3Xh3ZW9jPkG6fnWBv3EBBD5xKeQMevEPftkT1VtHh7YHVuXvMKs6Nt7hx6cDfZy6VtfrndC3Yupqj78m",
  "key28": "4k9KVyxcmDSiD39xxo4ysQay1DYoxLbTDiorKRN4hX5j5RckMFoBq8ihNEs1WVK1CQceyyR5SZQYgdxp1w9pQ5sa",
  "key29": "5NrEU3dGyCCmVXiEFV1Chtn6PZ5aXDFYvhmVi4sjeXGDumFqQ6JizpK6d63aerhGL987kWbk2Dhym8yr3FshcqKx",
  "key30": "4762FH9oSrf7RQL6Jq9xCBmRqTr5j5PcRAm9Yd68f3PPftkK4xdH1pqqaj4dHY8NvaASJD7e16z9bBCeduJjpEtQ",
  "key31": "28Hidn2FNPiNFenkDfiz69t3owVTgqcygK81L6gfYxWRJAQQmQ1jVemcNFJ6eAPv4pjPMd5c6ZCRpKuTuNBXvDWi"
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
