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
    "4xnx29xV1Tdp1FeMg9MnHGwZRZcaJmjnre7DrKzvnbJAQCLyH9AZL1vSKgYjZm7PcFVGvZdH7NVuGhcSysSyyZmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MZgwyUnZPN9pvDM3gk7heui1PKXQWGg5EsTfvq1m2BtjiEPeuP9t6yNVK7CTr7EvXFEGHtzv3km7yWykpbk9yd8",
  "key1": "5QcivH7h5RjrM9XNyRTrBDzQ17dwPN5Rg865sh7SjWAoiHuTBqR45b54gYCgBXbKZtmXvfCHsN3zDNdacPv39j4Q",
  "key2": "2mRoaAYD2aJeo94udwqv6rruhaTwtisQhrNKPWmUiuNj3K2njsm4kmfUSkTJwgRpzawBb4yvVYYcbvh9yiS2Fek7",
  "key3": "5tLGdkTZcLkL4TeSwwNfbQVTTckwA5nwEJt5gTq7GBX9PQdKDXcdVx4Zh5PhjPAL14iufaogW2iKT5x6cMfDMAY4",
  "key4": "3Bf5nKxh688NCkCpo99fdERvch4yB47UKnrGnwHCpXFN3VN7T1uSdQc1i9KbikW3kYETknKPKaMNyyVpn2cKdrdN",
  "key5": "1223kLwfrmiq4pYXVnw4iFs95Zai8DBhUGEByDA1wDzf5Pjs2xtVbtB81t2m9RuZv46UmPpyStr1nqeZoLSHQsmU",
  "key6": "3eKt4pKkpigtswxw8eRFaXmCjEt7z2NwSx4CE1ADBk1FbJMwrYjGjktxzSCHoft4ro2y1AxtxX2ai9J7nHPBKqNL",
  "key7": "3fe6q7m5ziEu891AKCgG2KrFKL16dyJvu24ipSynGUq9rHtkzTLrHKTLAUoHKGyug3gPZxN3jhUhMmxALsEpBP3F",
  "key8": "5WPnX7Mh6DSPoCEnz2ywgno2CUVkqfKeHtYD3YyQsZALrSetYnxNeQNoB78T3fqzz5mPjkWYZjDS4MyFeVmzM4p",
  "key9": "2WraFtDqXCbNxxrp59nZ4guhym7szsTwD8MVbDPLF5mcYhM5Ntj8aC75GNTnccDfBFFbek2Fo93sprJS1L79GUAE",
  "key10": "4DtyMZsK51qsirnU9sJo8VWeTQFoe3YEQTPfAG2urRbUmySzFBPqhfns1Vdj44jyL1uZHUoVe8MTp8xV1bU1WQEv",
  "key11": "5HJefm9Ansa7SE6EeeE3ea5dkU8Sh7LaNAQJAEW1mB6FETptvTEVbPtQwgz9xHLQiAS7BYBoiE2watxYUjJ3Tz7u",
  "key12": "46zy9LHWzeBAzJ7R2vR3DxjWmkUB8JQdynbdJApX4Qkj67x89NbtjxtxpFQN5GT62KKVKSrp7yDrg9LaizyemknR",
  "key13": "5K4Hpa2gvgUKzJ3LjXXPW6LWZ3jyUAyP4pw6zobX41kHTsafzVmSmVkbwsHox6QT87XsCcKzmm69eBSdEq2pKwq8",
  "key14": "3CcXrGXZgD87dxAdxhsMsLdzAE8ZqWtWGggarTRWPbsF5KpXzcgWneR13YouEc8kjGhs2gh1Kxiyrr7QUBN7tooP",
  "key15": "D3mNGtttjVMvUeVzvKYz2j1jyyusxcQSVDw5eJbgKUBMNbWMpahukyFwbRTUMHSYPPQ9N5dbovmLrmhDGJnaqZN",
  "key16": "3TQ4Z5PfaGYQoa3QhFAG4DpM67jj3fcXAYtXkgefcpU57FRLj5BwyoiPkTxDexnvrxZqJSc6on1bSVS2qTHkehHf",
  "key17": "5RUyuLaDgNtpFTNCHgXUA33LchDV3w9YQRnpufJK1MwcKotDUWq1Pn5PxtPAMrL8b5xgMMNMyF5ik9rnKhcxkaBA",
  "key18": "2pfWKCf1WhGD1AXFdyvrFuEA1A7amS3gz9zLB5SgjDvfLuU9NPVrMeCaFB9vtRmwpUGUK8yfSLmxcjbvTLRAcHaS",
  "key19": "BKajw8ewWwacvKeeso67renEuv67LcKFpVDwiJCUiwJGfCk6uLi89avQgz29LAqY5JK61Agcuee24t8pwLNQNw5",
  "key20": "EK2tvme9ZtYDJGc7iyCtG1UxcxJ1ozqM6efdi8FBgY6LkHQXDENPDQX5CD2rWkmb7WVDTJBMMtwrV1KS3f72Trw",
  "key21": "4DArfgzZDL8RQPQYGPsyHN6BXtkVSEnKuHoPiuGxAY88deYBq85Wedd4ouCKgbTNahoTW6ij62Ngd12PW1xZRzBg",
  "key22": "3yPPUun8JrzWshM3PdheZWxr3rHrhHDBrve9CtckUnVCbP93U1pany65Dn18QBAVECLAwhDw42hEsUXR4TzsS3tV",
  "key23": "2QbmBkYeshGdW3vshTeSWQPuw3C6qHWuS1US8M9UKTmBsbvX2LEdNyoW6AnoA3zDLwY9LchNeF4536Zw5g5bv98h",
  "key24": "2UWVxabyVztSyHejXwgb9um3RACmR3HZxj6Q3pDERa8HPqFEyuPPuFuA6dWzdSka2rXyBYKJGGhxweJkXehrfHQ9",
  "key25": "3haS9bN9NGoU8Z3UTUCz8CcvAeZDTBkTf7ViQqLaFWYuuUnfaRvmQUdUHoP2Ag3o1NxxkkHhS4xfvT9HCmR92APF",
  "key26": "3n8nGXZtVjjAVc52FGsQDnp8PC5XEknp2cHEY6GrXXkBUuYGAoymigqf5At2YPf3UX1ofPrmwQyMLfyz4NKbwu7n",
  "key27": "6CJFH4cXeCb73UzNrhzTX2MwqPg2qa4vxmTD8e76qLc2qPf7GbiGVBaafNECwcEWWkJSA7UaeN8X5aqiWjyi3FH",
  "key28": "34wQQ3SwBrCLfEVjFyN5CM1Tw6WZTFa3mFEuLB1zS2pVCY5RkSEoQARaaDSNUCyTDQbA2YUoKZLKByLcGEUD4eTh",
  "key29": "L7hPM2AkeZs9HcGjvHnecuoJvzxWLtvLM3iwJCcojvbiDMBNtyEe9ZEyNU7KdGkRWh7QFBLbM9oWBWXeXLJc7oH",
  "key30": "3gJ6hnXmPdvg3Z8As4GQSwvvoMsg4Tuxi98HrEJ5kvtrsvNrAJNZBymCWuLWeNxNQJHcZXHMGeKrKrcbyUuaFy1Z",
  "key31": "2oc9Ydr7jQzGrvm6wHd5xuSeEh2a2tQjgQ6YGrzZNubr9fDckvTEb4rANoTofL1HN4K32NYrMTEV6XasJFaMBqfQ"
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
