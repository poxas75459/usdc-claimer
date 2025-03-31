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
    "eCwZ1P8fkrD7ZrcdW7ChsP5N62CnZJT3y9Ambbi8ezohpCCKLCEmPGp6HrvJ6Hh9Ch3i6ufzccYmTmB3qcKEvLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yMxkApM5aUwvF2TZHJ29sDvBm7PzcueZUepD2v3KByXsbqFxMpF5CoKU4f2NChAebrWKYVxm5kvoHuesddo5Qe6",
  "key1": "3JnCqJVevfAmx8ybr5Zuex6CkDBVWYgNzgnDuchpV994GZ86V9gUqaM1s67sMny8gct5TiH9gHV3FBTzrRTwV5S4",
  "key2": "5hwNo8LxtBBQZrDLVyMACNLYERW8tfndAPK3RTC2XuX1uTtpnrbTvHV3zTfoEXfoMujFfBc99KotCk6ekwQZN9hv",
  "key3": "3q2ewCf4s2c48dEnZzw6snMwq4y8asVwUeaEG6XLxVGSxCtpeFeQW4vKKh9Dtr8XuJKwKhQbFKGmbHReSFBEFUVH",
  "key4": "XtNSTYGy3tc1bNU3DNwFMrKNTscDkDXnhjTHpyeLaZMDcN2jJ8maqQMR2uVdxYjagwp7Y8eZKgHn8VSUWrVnzRy",
  "key5": "3cBZV8bAkC67AvaYf7bZUeMjWt2pPUMQmR1UWxHBFFHBsn6aY2E85qMwVz8cuQNV1uaihTb6vy7qcHCpC5iQbp1W",
  "key6": "2gbVs3pVRnpZJZdHsDXNiH7mbz78rwHBbAnHm1iJHMicRHJs4pwZfLiiGSrHefa7sbk2w7rqofoXwtSUv92QcW7Z",
  "key7": "3WxbtREoAaxHuHthHK9XR6UWvG1fsdiojafvxTABcwW3JGTbygmNntkbC8QXu5DQ7etCQfvxQbEM4YhPU4DDUPxM",
  "key8": "5dppx1t1D9qW1zmEfiSdA9jDJXpcMThecybEaD4rp784YaAjFV5MVv4ug8j3R2EUtGUMJm8Rivobw6BZMTGi6Mmj",
  "key9": "Bx1brh37hX8zDsYQCJ5cFozFQFyVcRvcWShcqc6fi8T7n9yaAv9PY9Pr6PEh3SmgqDM6mssAHNSiQY6oeP9cJBM",
  "key10": "SBPq2gxoHi1aPj2QdoBwabREMi5CTmvt9wX952xYSz8hKsXiQPNBQbjY9h31TRfug9KBDwoiRNph7TgR8AkaDn3",
  "key11": "2LALShKcv8APeZiu1GRKw8dBk7mVFjUktMGZnK1HRJ9xC316Tm8mYtjm6z8m3gw7mEWiN41e86G8MwsNbjrw4LFh",
  "key12": "4NN5uGpZd2UzgdxV1U1KkyyDutEoeLpszaNp9Z9CYcViNbBoqn3XA3J1j7kmX5iopm7hh2oUMkWedaybwiniHdhm",
  "key13": "3ibj2cWdFSHpMPqvJEzho4ZTD818ChS23zz37nnphzbLERz3CAjEDmrQDMTsY4F84CYFiSVxupnxfNGhwzFAtDLb",
  "key14": "NWdFW5q9o1bPUm2Rf6gpDZ6YqesL3JX52UuqiU6CtsENwgUdHkTqphWHqH7db8DCwJDLS2JbhJmE1o7rEeZYTUu",
  "key15": "5mV2xamBycSFNiWbphnpnz1BRc6aWBnh8XYBLaQC4X75HcTZMW1ncJR46WqbheymP2A8vgfki8EgJzAYNauS15p1",
  "key16": "gGTWrpj7bBu7N1iCjQxcmUxoZxeo2ix8zop3kshHyeQwwtE6hm8Hv1KBWnhboPYD1gdxgUmHv2MXoXbn7LLTmoU",
  "key17": "5mwVawYSw7QPhSyXTDimkzRz8VGKJDH2kxQkHfa8EWFUL6iFePVYrMvK3gCXEaed5GHs3iB22XLiaCHwZdN3sPag",
  "key18": "5Pn6LrBksAW9C11TwjTUKFmyCD4bxU6y21E6r55zd9n4Q694Doqi2hZWjZA7tEAjjKq3QGUXr348mQfrZVTm9m4N",
  "key19": "49v19v6pc9A2MyfcVLwUauG12sm5KcwEjz2LM7DQbzokAkmeb42Yapkvvah3638sP9Eo9fMhAQKE1gXj1QDP2o1B",
  "key20": "CBFBAhHmBWYiybHmU61XdezsCkQTf5at7gG8aVVxXUDqCwJrrMUX8qiizx4bKxHr5RW2ZZtFCCJbj79LZGn2a7r",
  "key21": "49tDBEH18VfEGNqyZXy8YU3EMBqcDYK9UYrk98uzY1ojn6BRriAtYdDFNEEQw2hp4LpHZx48e9PXY6ZX8fCYwEsL",
  "key22": "8siXcifWrZoEftwvULzUNevTnpgsEcnRH9Y9Pk82JfvcpFwGLonQMgPb3Hh1WZk93ZQ7fXjGxTYCCdRZFKCKRcu",
  "key23": "4izGsNtLusPkvJBC3Uze7Gn3qVbHfhcNjpxwX1TcjRrHjMDxReZQD4eoauKDFC4Hit6AVSdtYUVjLxjTWWY1UzRU",
  "key24": "4pGrRzeugSkVTmEHGq6yoNjJGBmz7b49qfmwoiV5969owm64Ae32M2rZoKmzDbcauhpc2EKYQeW8HuABVhVMPjBb",
  "key25": "5F7Xvk2r7fQhRWckxyHfLH3qnbHbLjokKrTAY9ckJWDYCvrbsuRUsDky48C7qhFV2wxrDT5XF6CS6FjdpAy5VBWi",
  "key26": "2EpC68GKRcqUrTa6NhThXn1GnHykQu2Ro4wno4yvzRcX3NNgTmiuzfkSdhiAomK43925ur5krBgnPn897w7u5t8v",
  "key27": "57r1gGNRcuzPFnzHaUacnmBT5rXShDefW7d5k6kHVxYzwyDvs1uyiSa7WkY7XA5BDLhjpwSLCj8TmcGVBW6ZAAj",
  "key28": "3BfopZmtawvbTabS3s87ReQdBVSnsusQkXsYLWAjVQhDmCVb42mxzwK6DvjCdz8o1MCnQ8H5c1qqgwdGiRUizUpm",
  "key29": "3T49ckfECoqd9jXpJmQ6ZzM18jz2b3AmeSXFB13sUicGzt1LNGwiACw4WQKYxKawUKBq9nJdzBfg5vEd7PteyJhp",
  "key30": "4nTijCjr8o6xFhHstoAbrNkbHK6tMeUABYxtXKRRo8tuavWWYYJBDkX4ZCaqjJf1WaqUD1xsmbTSixP4yFP76Fj4",
  "key31": "5Mn786hzs7U5utmPrQVfU32Hummh13GXUmKbkrF7bajDaNdABJsLxLaXpjZrHQiYQVEw1TdK8UhsGobP8ugCtyco",
  "key32": "ohLEMCrPDetocmDVK9JEvb9SYqg4JRkjVCcu2ew7gFzT9N8WLaMrVFauof49UsuE6WdFkrM3rdQwdZNJ3tN7LTX",
  "key33": "499hN5RavU5q6yqMp6uqT7sm3oHQypMGvEwvffWTr65T36ojpdKySDRhgCT8zS2jYbVU9q3fLb6nJ1BqriFQTs4M",
  "key34": "2qUj2qhBrRpUtRdp4WeMsXsKpV9HeY2bCPU6AZ1SHZ1Ma3siCWpnRVRyxtqnbHYdLBKShhWiqn92f2DbEyB2UNVe",
  "key35": "5SnNTmHXvD9nJx1LSSJPUcDijWrHinuCYMreB19zs5pMuhktfaFEpiTNugjgAD3aB2EZ9TaBWseeQcdTpwFcYJRW"
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
