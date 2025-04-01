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
    "9KLoQQEyTavsuo8GiFUGxG7a2U5u8epNaU4dpvrmEJ8szDKr87TnLFn4y11rWx8gcv6MUtRBTXqsFDE8xCahhXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mDBTTPrf31rV748yYEyoZip1S4VsigiGEX3wxNVaVezZJb77d6Qb7C2Qt3qRNWyrhbKcKJkqkBxuBQQMcLMeet7",
  "key1": "2xqtepWoLnUd1FuxzM9XfGNxPUCEwmfd11Qew7cSd2yxb8kxVd94h7MGZLsoGRoJ1BQtLcAdyhJCwnH8es9XWgAL",
  "key2": "3PWL6V5Xs9GSUYXjY3CL8f82ZsbXYCgqgXKxh99kKu1mJwJ5Xb7rVMcP8GX6kDJfudyJTdg7aaAiRhjvZCEPCEnY",
  "key3": "zpaQ9SVUGNYuaF2rtFtSWJePAyYm5ZyKboxWv7rPM11mKJM9M3NTLzGE4nunzToNLZ9svKbqgEBHTqLyxF9K2VX",
  "key4": "2JNVTBcf3amwVZCi5shSH5KJKMvrbn7inagfD111e2PPzBnBxgWxL4punDAjbqdyfsVWWZKjS3BHzuvJ3VG5ChnW",
  "key5": "wvhc9e9y6eu1bcF5cwP7NstKaPQeKnt5eYtD7QazNaC8q2ekqRLQa2DnnUdZtdM7ZHwdWP6bL73pjDXjcVAZWN5",
  "key6": "5a1Lo3jsJwLkkeKswTmFD3aVS8txwwLMTtUYBCDrt2b6Wn62FdHkQwxcVuE8rbKvy55BbCa3mdogXSazJoBSueu2",
  "key7": "4kRWEVL2V5Se3T6HgX9tBmH4RGiyKQDcQq2YZpojdNpLkNsXX6mMdtKEGCoksEU8YzgRNFHz5FHaoK5qkPFTbZih",
  "key8": "5f6jCeTMG99pj5kQ5YwheG4Hk76ozrXCunUfxTUoDHUvBu2fPJqND2fbXKmnwSJ1JNocaGG7MAkP8tGYVw3pTTHH",
  "key9": "4VSmCALes92YD8UK2qzQpehTja36MTgxKMHc1JyHGrswYwVNwG29f333pkUyDcfycTyjz3cYCdTfw3NEUrBA6bsR",
  "key10": "bcxDq2MBpLti41ajRhJdB495fWkM4vbaUJGxEphwCd3SJXPDRp4Xp9zKszoZNaZqPFKKh8UHp97o52BeYHv66ks",
  "key11": "4GJ6a6Mco5dEqUUztfyDiV4nXwG58Su1QKiX7ukxpitfQEaoMiZz9Wav6UcSCprpR46WwpcfLaK26o3PgH5AYfPW",
  "key12": "5uNuhyvHhuZxGNRhn2DMCUw3arGKy6Qt7acjjRTVLbV5tW9w2jLKz4CvBcYPwAfHmpqr7C971vAJBg8kamhEiu7",
  "key13": "2jYA8St1xZtinUVY3fz2qkhw3E3sjCKTV6nHeAzekcG3HAf47RpUzsv8zvpUTtkVoue88kjeAFS785SFt4rXZSKF",
  "key14": "66a3mM9unHhkFnkpdSvmdzfESmL7uw9SLFw8ZbttcdRcjqAa9DNVR37VCPW26WNVb8hBBKNjFsXWz9cL7WvweKdN",
  "key15": "3Q5Buyw5DP1fXM69ALhDFS64iPhxVxxUjtoPoiRg7Gvs86qSAop4kTrtbuA7wUoWnzP5DQQYEqAyrszHKNXKr8Ru",
  "key16": "gUuSfTbbR2bnrCTHYKDeT3xgbSKU6mu3orpqdcrwHUG9vxDnfU332gq8PBemyVRNwmdBx9bGCwkQnchmz12nqC9",
  "key17": "62FTYmr2uL8JKiCVnmKuP4RV6Zh4bNciJntvoTnc4FAyeDQmPFQETqvBjMbPp519qfHGQaXEQVveCY5chdpZfJKg",
  "key18": "5AyGvqfpFo822SmU8DEqzm6wttL7ACRQfgakqnZSDvwJo9orKS4KGT1s3SpHBpV7TornHT5eKYHUtE4WNpBEBCiA",
  "key19": "3oCxvjdTXhLr7FpTGrSYqPjihEqyEYLdagsrjj4m3mwQs1bteiikgdZ7z1kcLRuaz5szjDwm2KfyefoHzomRCkvZ",
  "key20": "5m4AfWXjJRvC4cxvWDBKerautizEZdihfEqr3ZD9mMoiKEGY1NEub9Rbs5sBeiF4ycmDXPuxtobna5dfhVk1h5Rb",
  "key21": "4SkVFCva5wSF4yv23K6z2ChfZwbMJGktcJhfehzG8Ehhd72fThSNRQ49TqcgksK5JrYaXsw7UfnieP7tnam4E1FQ",
  "key22": "2cBhTqSVu3iLBcFs9Ys9TRrGJRTLHdrwZZf5zxXBM75fNrqef9PAyJdKXDRkPKC4M8a6R72cdwWNSPiRX8oNnury",
  "key23": "3PTsUV8A8czbeYodPxPY9CLFexic2Gud8h29SVQr6YmFW5FvNMTFX9oqGG8QhFGUw7jFyHsF9KohpYV16Eyiuj6h",
  "key24": "4UtTbEczSeyCjHLhRqDyeq4DGeGLq6WSfnhimdQbNWyFSa1TaiEwCxGtqB8mktH1HrEXt8evb57nTDR9J8XJTT4N",
  "key25": "4UurP2UL1xux3wBp7XJY36pFfirK3nVzAn4hDXJqyB3Z6ucZaqcXJtF36wJ1QyZSJN5ttvePca3GM3KNZrw1wMtQ",
  "key26": "38W5PF4zTKuUxZKxowpMZvFea4XsJmTJL4qMFA9SM9sZmoGNVvDNE6BzDisQ852AAydu41dbRHqmC326epz1kyuz",
  "key27": "3Y9aug7MKohpVhwyNXZFVF4wSsB4iZNnSEbpT9CQtio4DBM6eiokThaTu9VERLFWPWRxtHMZzB2y7xRK6jvJt5ZV",
  "key28": "2icBVbBib3Lg3waiTrMUeFVfde1dWxr3h6win1vtZp2WKFYY72DkYRYJzS2DvxNFcxWypkD3t9mY5WK44B4mVf1Y",
  "key29": "2LFF4aXdCXpoS98NeuoGx2xUkkoeDdUKfaEjhY3DCYW8GTikKQxDRr2SMwXwFGNYYYLCRcbJ87wcKg9cBBHAskjX",
  "key30": "3JVYay14WcTQTYArgVU2bVRmkSGNhP2ucs3hJhpLryxkXkCZnELrrheo1gZ9xafsZRnp6TydmyoCeJg4xCwNzbuZ",
  "key31": "3qruzhLCbRxfJeNFJvyKjDEty1kQbyCrvHTQh33itj2bRLddaUeWmpnsrJ6CaU2hzk76VP6HVJnbbvJmMK8nvG6h",
  "key32": "4j2UYjuAaWLVyfiN88M8n6RDGt3ds1eM8bY3YkGgfMCV26PTQYPhNy717a9hamSiJPVYYxU8ogXVpVfY5Y9zfty9",
  "key33": "4QDxFT68ezyGwYhhYHCtgx7MZbxdmSzCQXGRx3dF5f1ytKibDKrhiuj6f7gKLbo3eqU1VuZP5AMqnArCmNeKkRfP",
  "key34": "21PpK8bLXFt53S8hF2yr5r9nzy55Kt1baxdCEEoHpHU4sL5CAJrCp1EdXNGVW3VCtHjgZKDBxz5e9QL4EbqdLsPp",
  "key35": "PDbApFdKs9Jrp3qyoyZkhWsPusiJvEi8nQNuJnqXVRgiMxf5YtRHTr71en3pXu6vzbhrpmJ7xMgyupir4SPCqCv",
  "key36": "vQdMpFi7f8QP6ko5iAdhMEweCa1KeofWnKKi679pzP3tZTGtZRTWG6txqdYM3ns9qNY7eVzd4RwT6ABbhqb2vCC",
  "key37": "4sgUFL2vEe9Z9JyVLGjUNm2s9rG5TBs83gEWcbaQfBqARPYDoJEFRksSkhpN2oHEpdXwUnc7SoRBizfkLKXfMjd4",
  "key38": "7gCbMUnhRBksSJFR5SPV9SvNdGAWSZMSdt3mzCmx8me3VGoHcg8P3eMjSfEfTqcHUkp8dDYpvJGdProv218BcDJ",
  "key39": "52pAiKeWYukAHnmsD4wHfNYW2icUh58D2NqFZf2YqtwaD4gVbYzKkaTV9FvCnij2DVfbWEwDL8Dr5QemKFc51if7",
  "key40": "44NwbPzrcvhXivaPbEbvd2EaatoYpRJuxmiof9mxCpaD5m8FSrNphARqmo4CEBeNVPmjN29CSiHHMRWuhNBrUiZa",
  "key41": "Sne74Vt6E6ZnFUY9hzhh3gF5USgmQR6gDj4d2xKTFXtWERypyS56sDRThLPWHZkiRG2VBLHk4Zc582heeNmdzxP",
  "key42": "4WCJgt8tuTZTpiMdYdh6CXRawX8purT11nDXumR3c2LpeiCc7p3AvJQx8WP3TtvB2mv83hrkCjzmqqriSXRULjVJ",
  "key43": "5LEKDRdgDecf3TkPE2DgheS25E998cVMtZk7dBR8bMHc6DMWE4RjY5FDraAhVi4iuB66AfZCrx8a9EgBbWtWmNA8"
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
