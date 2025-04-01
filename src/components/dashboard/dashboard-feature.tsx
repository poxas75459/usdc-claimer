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
    "2huThvHcf1DQwMpTdhJCDTcW6yATRBYAQXTmCaUB5p3aGkiA48jp4mdgnQ6Re1Gg7w2GxfL9LDRzPZphKr81UTCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mfDWbXRm51fvAZBxKYbtbFdJ8MW31jWz6FAHXb2scHWkh6eFM9abr1KzLonTGKtonvzs3ZypsEUnzV1gJu5wzXW",
  "key1": "DKwkSsoojjdAa9kTbriTsVWZusL2r6pgqSFtNHiq433pHpML3xiVCKYQ7vLNktVrFDNKhkBvbpKL8HcJw9jCETv",
  "key2": "5LFAUjaAnceeDiojnJYdZLidrGv9kDcNpmfxRHoFWho81kgPsNw1pNhfitRZVaQM6eu1amu92VfanQqbETfkiJSU",
  "key3": "2pNV33o9Kwj6d7PTiwuydQ2GWtRoHyfYiXASiyaW5CRh2QjybPz5XzkEdaqEwz1iLAZpDUfu8aasy2bDsWRTwgbq",
  "key4": "52iEbfAv9pqAZEVRnAYJTj4jVQRNhYaK2gNRJGLR3h674R8Re1AUBeFCZWXCDz9ZrBR4NHpjq6Rfg6mQp26bREwu",
  "key5": "3rGocQHkzoghQFtipAVZ6sfh4BceuQgN4rUJDfZkzoPkdkApT8kq4VYv5cFhyjcgnFBVCDnL8CXBysEc1PUg3t6i",
  "key6": "3enfxX5ifaNvdhmQB5pFuSztNnFDEPzS8vHwE8EHhDcgUEPpgDB1TAaHUUmqhRmPX6cvyJbqNL95fRUkobdyfjQL",
  "key7": "4Xpu72vtjnc1ckn2gmyBoHWbUGmEoPWcNGVaE4wARKA3Tg2fDFiWrhqjbvkxqrPagfcY9G7JsyxutbCYWB6iySSG",
  "key8": "3WNxh8G9wGHhK1CSXmmhXj4ViyDngDTifFdwsqu7WwCM37a9dsrv6dVJzdUVuUN4gPEisAhuvNuZBmFpFQcd28sD",
  "key9": "4hRfXafMrxjq1DPuTfxzVEV9iKS9RzgWq8yJ3VbhLhSTjsxY1xdNVwPCcVPTmNPoJq2zbkKUaarDHWGd2jYAKPTv",
  "key10": "4ZnnBhUMoz96Lb7i7HJhm43PvxbTeM8X1XybDTbdJXQyLD1Lje9VdTf8BbRjU1Y57aduL74v7MedoBDZZF35dkiD",
  "key11": "5Rn7FCTKKdsgVUiEiw15zxUXNmBSjhraRWu7FYxfKbyEHSW2AkpNkVw97B6Hzyo1oJhPReRGYRemAfFV4ME8k7DR",
  "key12": "4VBZXZkiiN3wMXAuCLX2Fu73S3XybQyCaAoDFGRzgBb1zHApGWk3wYR6YR92m1tEzkrrpb5xq2RciJm4wpc5JbnU",
  "key13": "4a9Bg4pGkZbQLG3WTacUXMUWZVcdCtucvAhztejxZAbMqNag8QsTEALjRad7m8VHGAE94DaZSz6FQCXBBkMGcTEn",
  "key14": "P26boGiT7XG3nFm1ng4qwWKUpsoXvpqcWmexHJc2o3Yeds1mTpNCzcraHa4SKmat7H4yX5G1Bwy2VVAhEbvYu6d",
  "key15": "3ZSvfYQ1oUkiz9YXwMcooSdeqv9kuierHsCtHhLHAKtcbzkdrtwsdUcyt5FkpztRd1GM1dmxgn5ELPbCtA5VcLQt",
  "key16": "2WKDdL965ntPHqQS2AyJv9pesN41MALpeSBcmAUKmyZcjgXpat1yTLrBeZdmjrnBAD3nBWxtQUcZ3SCoaLGR3xJu",
  "key17": "5nqRrt5hniim988EeeF2k8Va4euewfRFBotjDAd58NQdtZhsEi2SqDUjfCTcNUWk23CUAcUXTdPyAVjDeGYHcodp",
  "key18": "63x2gUrCnRyTfEwY7sdxuaYTjs7yAYsXPgwAfUibQpLK8MHd1EqQnWdNKcwzD9sGvy81U274rEdis7i66TYBx1dy",
  "key19": "4FuXY3KPN7zdupxfnFmkRC5qdLrE8nuocNECvZkgJeFL96jfpF1GVuEYkrVCpz1aRg6eB5aGmhtYRwjH4xVjvmcA",
  "key20": "5HQw3EJjC4rVLBEj4rLsMy9Nampzr2NTLJ211L2qLDmbka1rj3DEzK6bj7ebEFJa9Vk66fH8kTAWDgajCGtF74G1",
  "key21": "v287GNN7HjZk3fXEkR7FeXQ7SbBa2P4UFuBe2xiFUUvoViFNcthvy9VpatpmU6GGM2skYTcYYCsQyJ4dPH7zL3K",
  "key22": "2MDAeB2yf3cYU7veaaVT7PXe24b33SEpkspETsogw7LCa6zeSAdPThfzHGU9yrkNXexm6fgFh2RaqE7zTi61xDej",
  "key23": "3JuWFbrDeWsdmCuLuSpVn4jrbMWBtkUze1hgz7jX2zi4NuRKUhZV9pySaYgmc7HqXWmiXMKQU67LxFMHeM4GHGo3",
  "key24": "5Q7BX2BJr665PLPZvLdGFyu1wnEUmXw9MSnYHBSnVmvbZHc2shBrnnHgjUwR6dew9Nu98dWmjkZVqZUxwaeirUZg",
  "key25": "2xAuxQ9cwiYgoWgGmTnxiEBcfhkfaABABqfZAejxSCNKiDv8GHh8U94Qr4gh6TeLiQhqnPrr4GhSpxxEKJxHhS32",
  "key26": "4YjuUZnja99GNoF3zd7M8XMFebLSSoXxEf9rH1X3jYqPzihkcXuhDgtH8JSZ7nv8TPd1cALJSue5dNA3LUjH5xQ1",
  "key27": "4ToZquobWJoAvNLw6DHBNk5PfPvNzH9aPQyTf4MExj6qH2dGUsU7nZhP74UvfQqJhHu71HNERmnMvDpYCQmJhw4j",
  "key28": "5phS4GHbr7ELRPHiaXRPpuA3xzfFmK23BXHjseZ2W6GbqfxkqYL2qykXLt9hkcPVNxcawZ13SC7aNiow6Bge5AZe",
  "key29": "28qkQY43KpmW2QecHK16DUDixqSc81MoPtvbo79Cj5DQwsZ4h1b7wqDuVXG4XcZoUPBsqSpz89fps79teXYfgMrq",
  "key30": "2XY5zD7J18ZcSLCqzHfwfPfUD2WMfiuGZXHXQorkn74BLxracL1NeQaHWwVvyMrRp8zd528jYRrKSNmS3YD35ZKt",
  "key31": "4Ntaw6jAsd7CQt16jq4Jum95wRsTBdYGmVs179rB6UrCLRv2aiRJhSnSgz1F7T48WoacjXnghKkFLcd7t2ezvydR",
  "key32": "CA566N32dE684us6HynyEoacZ2NPMJ5iJva8kRZ4vv8nakrupeMKqAo8eexea4bCQ2Hhu95TUY4CaruYNsY7HtF",
  "key33": "4dLLVqpoxBwmddRF7YeqUAjMGkqpVn6Mbf8xPE4v3mXuM7gE4sTBNknbAHPQ86ZyoF4pd1KETUhMihrZ4TTv19cR",
  "key34": "3khjd2ziCx6mPECppaGHAn1XigEDqhXeHGthjmSK5Ttfzh6MCd2abNmukMke6qZvtQcUDBXuvp3V8VrE3KVUdQSb",
  "key35": "zKWWET6d1NkavrYhnjagLVzdXvHGj8gzBDVSdVPuMb3Qow4yi4FUC4NbpmkuRNnexEZ3h84EmMzCUWsjgX2bDxB",
  "key36": "uf8b58Fc91BmQErWVuYSaA3GnYdhiSQ6nwNLyyuoprDasCrUigFaZWxzqyVEdhNNv7q73zP5RDsD3yGYNkhSf7y",
  "key37": "cojsE7go4h8Rqpptb42pKjq7QHuovGJ3DrV34WXarE53NiCK9nUc6U9oXnsSsjEuBt3E1Srb9snRu2weD1iTHJS",
  "key38": "2uc8pmiWqQmPWpAVuQTRAoPsN8N6R6zapaoHq33fedZX3Qq1mrJf7f6mqGNSjy9JzLDxVdFUQxcNZLLD82RuE7iU",
  "key39": "3nf8nkV3qRSz2vTuW4UfkLcCeroHxAH2myw8qA1bBoQCRvixTnNgmWRxZvCZ6HMZ6CWxqvtfmbf9V1xVpR4ijSDx",
  "key40": "3evYhpmJ59JjvKc6uYDYCVoMv9sXhgMEbFJXAMCvKkC9ekDPiJQnh3T7ASGKQ9FNgzpXBD5na4WwSth6c1Ku4DkK"
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
