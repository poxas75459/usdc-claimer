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
    "4j6vu9YEo2UD5RoZQ8N2PDtGfossH3b72U4YUhpTNeZDTMSSon35voS1SQHAodCJF2Bk4EM2syDFC5GCNZPpNdEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gwcDiy9vTy2PhdBVP6qoYZSvonPk7mUdh3vmP6CZ4foFrHVMTuwME71p1eYXSNbMA37kwxS21X3sD6kzAJVgx94",
  "key1": "2JywuNwrjQX4MKHzuqVzSRUoJg9GrkN4FfygcngfK8WYiks9zhh1u17Fg4BdhzSw3hdK2HZYJvmuFFEqqb21FTRA",
  "key2": "5AqcjJWXW5SrXZUBPm94Q9e6awYir28uHpzKyKNREzFjJYtMqAP2bzbEhKJGmjjp2pNad4mYBjoqrFqwrne3ohPR",
  "key3": "5Y6JZftfaNASszkV6mWpzP57e4PiYdznNMQQEaLcEXVEXbfxwgkshi3E9cLU4fkd3vK2p1D7bQeaoNzKXc14SdTr",
  "key4": "3HgaHrHQGxz8A47W3HeGMcwmzzPzwonSew5cTxHouCcTEtGjwBe23KSZzeaKV52QQkPUduHMNegwZbXWkWt5nuiZ",
  "key5": "9HrmnFwyg8iSDPeXc1kwCuqjct4NCWhiFy1JixAnxTa5c6bHxHbwDnqSnyXUW6SBTW1A2FFWU8pRjkTn4KRhoaX",
  "key6": "pnQvLCTvBpTPAQ2pXCF6dAPA2R7v9VMCwk6P6jYf7sXQq3NvuohARAxgXykQVkNSa31ckfrex9u1jgcTENVzMce",
  "key7": "4zTmTtPyCynQC1kcN8MitX7nKL4JzSSzGSSaNq57gJYy9isHfdg3y2yJRr2qf7jfNdhpKviCGNr4DDCPSuF51zzf",
  "key8": "2BPzyPJQtLK1U9tShvDVFmSbyivdWAbrMaXc9ZvLoZFJxaMkrGv7YxnbMAxxVqHTfrADhjsCWw3NUYT9NT2EnbH5",
  "key9": "dRX3jwdBT73rLqXgFB8m1HTZXmEYq3rLwYQQ2VYWUjwb8gxzoqVmwZe93cjygCaZQKBmmcAo9RsHZzzjKn7XfkR",
  "key10": "2i63NJT6pMD4D2obVTMW78xnueUqt4UFDNWaSvniydK81W3zgKFjQiKiZxAewwwdcyo8eeYpPWLS9U68EwdFqYcM",
  "key11": "bwaKzziMSPnH3Zd9z2ZoDVoJyqNkVLzLqpYZFWwCDPWMeNpEiqg28BJYfNUzTwEEupVdSXStxsE3hnDqtMZZqKv",
  "key12": "tb6eURn2jMpJGoJChUGGfhdmUtfvoVANt7D4hk21VMkMS8NDCuGu56sAgYJfLyn9RXAyr14EBWC2V7tLFzduBFc",
  "key13": "3oyNQXAGHpnNCtUrQH5AB2PVma2jeg5EtVZAG4uGYYWrFxo2AYW6gfyF3pBJ97k6VLLmqmiJC818CYg45QFLazcJ",
  "key14": "mceqQKQPcbKXGJNUW58GhqXVfTo75UKF6sZoAmpPu3Kt8Mqc9naFqUwpuazQBmWkEt3dVNaXF5ojzgRECC1Uqef",
  "key15": "v8a2PXJ3aE2PscbtzVLTZHUEbZpH1WgpKiYNxm9jZHRg3R18US5aeL8NfcfbgjUnPUdBVVTQYvY1Yk5UApunf5T",
  "key16": "5Wy75W2nEKQKxvgAzQRYJmj9kkkkP9S38cWEZF5GhL7dx3sq98WYTxnGCNk3zjeKMw7b2Msge2KJB86S8R6Say17",
  "key17": "5SgKABnH6HK918wB3CzQKpTE7H2iTZSrJNpg5RKtRPcAvD6aXjqEDsU4wE6J39ycHwn23vWEEyaBkTAN8yqZ1rrb",
  "key18": "2vQpYfT4ytjeeEbkCZUHGNKs32fUL6eoTRPVBjA7TJY9gyjp23ptxBQUbkshgPPogtBj5zSP2crpxnKWGxGq1hyK",
  "key19": "4AW4BKeDc4Kqi7sgu43BKKLeEQkD3ihR2iz4kxE4pg1XFdfaBAaDvG5aX1e6dHAqW4HWKUDX6X2oPiMxbsWVoiF8",
  "key20": "4oQfgtUKNMAaU1ZNt87ySVzhiDWhN7zHVPHKA87e5abq9TAvFMAWffo4Kc7AmK7L3kYCGLM5N6fTbf6oa4bUFLVN",
  "key21": "3Y97Bn3dcnsM8Uk2a4eRRce86oZzRAdkfD7FRtdx5W6qhvQ4PR88zWQoVs6MDf6nxKF6Ex4GLqZzgYPJVwrRBYxu",
  "key22": "5D7gdnwABXKAJyPKcJhFAYXFBiBENp3q48Y33nDKpZwXeHQMcx2TncekzBGJbbFzZkKVRpTjXaQhALfPRz1QzGoN",
  "key23": "CudobTpxu6hq4aAsnzBHotVG5ktAgzQNrM6aHBWZgvCxjRRYhpW7soPGgKLSr7A51Ykas59wznns7eJ5Z2PLfyY",
  "key24": "5yvuVK1JQochivngBGUiakXtN85HtNXDnQRrPTEiqdhLcNpiexjyA5pBe13HNcdDvNcfhf7oHUpktm3dVFeu433j",
  "key25": "4YMMfjTfPZhPz61cBeNga6XyhR9zTHcS1G5qtLnFADzLDKv8LVQrduiSBbnHBWYuoxgy6tqyy4tBgSjgx8AhUBer",
  "key26": "2zbLjN2ThsGcb847uZ9QCpUicJWwYMiqmBYtSqXPdSDnUAAfxS1sAf3Rd7N6umv6mBvNnie7MBtzsdvhNSBTodB5",
  "key27": "2fzU82jFdh7ZRm394CSEjfnBYA7NhnbJEQUeu4v8MjnULsCpW27j9KeXBNGGyyB2VNkZz76gRTtFKtHRSMzUnqh9",
  "key28": "5onANtoUNuzN9q2qC4DE4LqAF76f2CnCguULdYd72o6dr7Mn6RvJT7vpQmiooTF72CVMNfBLYeD3UVnjDp5eUV4n",
  "key29": "3pN19F8frHsD1ByLTWhBKqa9g5aMSMC3iqtsqitYGgfCCTTaB4UydQGgEB9vWroT3xCP8zcUn1w8Ejpxsyr4sGWm",
  "key30": "5UxNc3pJMBTY72YJjv4yCjijtuhVZfJpmRSkwwEBNCEzZedt4W9bWF1PvdBgN2BgKQEayum58NmP2PkpzkKobTq4",
  "key31": "35ERPKQCi3PDESRFs3o6MaGy3amP5sk3z1NtEz6xky5ESjFCbX8RtK2VZz18uFr7hNCj9UQPPxQcb5D4rfFq1RqV"
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
