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
    "VeKyXXMz14LB3LNEjy4872kDbuUQHuJdmkQ6xHrXGJTuu9Ay8BYHKSnNKWzLQUfsW5LnF3QjUNDf4TAKgLH56v1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VuqBpfTdK4xQg2sywhLBxYLCYjh2s5eeDUzJ5gBzmdmii38Rhgwbc64jEYyNTSAP8oSNcHRQ53brgrdfBMjDdPd",
  "key1": "3Q81Gjc8LGUtoYJVakAQRNq9Rm8LcQ6RhBGENGrnDTW1VJKF55HPgMzaWkKUqzhRw1hcSdATVvz1MAsnVrSKFyYK",
  "key2": "4RyERnU8t91FGKSLDggs9uYZLRFjroZhqwZczW19ShCYFzXjmHGKmCgS3Wb3narsUHeBcQeX6Ki23qe9wC7hEE1U",
  "key3": "4qJyHhcKRzkHViH39kjo1mnQp9jUuJSVYa61SLSYZLeYiXxULaC8GgznYGeFm199GzPSuSdQBSFePJt6kwM1Ue2T",
  "key4": "2WdVrZFPJpjh67EWUVLVV8SCHYUN1wefwcfW9AVcPhDbHBZgvr5CCHdVDXiE4m6kPrnocVQmKRQAFcVwdUuNi1Fu",
  "key5": "4TCeXNBS2iofjLarjDkxg83fKmrmahxo5kGUWP7SSgtpeG5darGBw5VNKuVhzQJGQ5TuMWPJ1YiT4W9u3dkDs3Br",
  "key6": "5NQ71GvGhF76fTFFAdvZ47fDGWJtsdEiUt8gSTvmKa9MztnBf5P9NNiqo3qe7WnNs71PyjEguwVeM5iYidr4yT9G",
  "key7": "KCuaFtgDF6nnQYrANyQBFcqey4qKCqsecd23mB2xWnoZJGeiEsgaknyoufWRVSxZEv4r9kX8iJWRfxN8BWhJoL3",
  "key8": "2kmWB9rk8UdWTnUHJuzx68c3ag98yp1DnV5Kxpqj3BUmHvJXWkfZipMMT1sC5pATHjdMz1684nFHpRu8vpYcMe6y",
  "key9": "3eSg4Zraqima9bSuKKZs7tkHz5daVtZpLDSMgvsyQKnntJNrXA5jQR7mZQ1WkPkHreQ1hrt5RUoNrdpmRTKTzBwh",
  "key10": "fsPA8LJHxopzB4BrjtaCgwBv4VFpdXfuVq1vfBYZZwThXptaC5N2MKiEG2fu5r2XxZqE13gEuf3sKMde3Pb45fF",
  "key11": "51ptHEnrThrkvRSyAuPScH79ZYN8cBW77rhK3VnAuQzG8yBYfPc3Uk725zftSvREiyqEGuzPe9pWBjJNGpJ8Dfwe",
  "key12": "26PRXWk9VdDdaJNqSzEy9BiFNWjzfMnyS5XQMUGB9T24BAyqocyvJ6BYRDcXm35L8d3XvrZRqkPLzw8ZtVAsXDBv",
  "key13": "32ArydjiCJ2nqnj3FHj1gfDshbdjuPwfD6EVxRq9NvBWXavAgBeZNtkrwUKhGdZ6KnvRGurXnDsdQS82KScC9qLd",
  "key14": "5ckwATVqZEmj5f8CqETNtjMXhMs4zPQQfHeyxeh7Q7T5hHv84nAxtGmXGBygd9vzepr9QqMc12TzetuWzHiM566c",
  "key15": "4K7B3HZdPsn9PUgeTTW4yizxAZCAN3D7bmjoLNH4ovY6wbibPLgr8g25VYV2rnDiuBSL46cGZFXnghxcBzT6R24v",
  "key16": "n3Zugg9zDex41XYLB4TBvjQYNU1KNTsfrqpwSA2mxeyQCRBP2N1aW1xtTSibBFXyhU1MUTXxME6EiSVcKM2hG8P",
  "key17": "3ogGtAA3CBjWRWthZiLg7oWED9iSAoeFTuSnSK9fRN5AqD1axJGV73wteHsA5cAvUKz3JaEmrv8zoKsGLvz9ASo9",
  "key18": "EVRmgP7GtK6TnbiZGWz35edmHSPbyxZHTftUFqsWFtB3nmhN99nLHSuNyrV455BP7zdBWJZE4G7TeaNM4VHHYcB",
  "key19": "34WfBBjSRvq2TvNw2xRKM1csoBkNKMVcuSPRKUq1RSGDaFkFusrB1oyq4XnpkbVNYzbx6PmySF7UK7ozdSJTJEs8",
  "key20": "5Qis147pcV3NK1Yt4W91TFiFmmc9ecWgUDyuS9x2w3Pyz61ZZacki3zPhV7aFu3JMQaU5Vc3J7tuFLbz2KqFsdyz",
  "key21": "35VVLFa7FLttr3TWRC2bDkjKDBWXi6xNwRoCNNrrTeef8kgYfrYYLWW752iouoyArCFSHUb7VhNchTPs6JeugMBp",
  "key22": "3uKAWkpjWNkRXbpwmrzVvN4riV3rEKJfe3pUAsWEgss55dPLEdvTgwALAAjfcgGeryy58nZyUBx1Lsarosubb4FM",
  "key23": "3VJQ2zALAwFsywScXCXYid2rkNJHJT2xSwzzU14bTqXzCsf9Bpyhbqnyna4DMv4yf5fn2vSXcimYo1d3vAqbhTzD",
  "key24": "2XovNVpLrWAoFzj9xxNqaA39UvEM8JG62FKfpJjaUixsd8yeuVqm1MRjxfjg8RC6xwykDh9RySyFUp1z24bX13LH",
  "key25": "hZHT8JqnFLjcUaT3Ws3xgPBh6rPgasV2PALGLToZxD1AJKPRkaCdqdGbBNPsGFie5779XAWieTWYxd9NTG16iC8",
  "key26": "5nu8n1W6k79qctLSHZkEYuEq4tyCHXy6VUJbYGXS6AJFaKggWXbWPaWjdxAGPs82LATf7SUwAKoHT1f1vVnmRUwe",
  "key27": "5GudPqo2F5TYax8ExB5C85Xs1Yumm7GEa4WPki3seYniXWuYtZgmBSMP976ptojBBKXGXxYFaf1e8mcHuEBzbXVb",
  "key28": "amYmFmRkzHcCh2U1bJXE4iu86xJFPVajpSe16QjuNNNasobj3sMFeMdA654XVEmvdmzXbC3wFdNUjBkprqycNRf",
  "key29": "33jLRx5pgAbKdvgt82F98HhKyqADrHQky53kgfgCbKK4KjmRgFAAZsj9x5yzE3LSdGUbMSy2G9aUVTjM9pimrRdu",
  "key30": "hCfrRgYGqAPJBSeN3zGApKVGhHkqjW2LqmyjUiJnwAhq53jFyL4LZK17amFqrt9b2TMtuRZx95yJJyHMngTfz8F",
  "key31": "32R6V7Tm582xsDnkaeoy47Z5VRkGhnXL6uMvwwMFLC4STE6jLdos4rF3VQUt5t5ZKRdDoUuwhM2sGXMih3jXHsHN",
  "key32": "5ak7RjbiJVcWZ7q47ATZuFwW4azhTjLqGKWfBMSoYSEMAgpEY4UrmzwNFfj5bN9MFYwkeGLw5wU23fa1Enqyoe8j",
  "key33": "3E58EHHdGTDSciyEoy8nCXVyY7GYkTDAo7G6AQKgSGJikoCYwiYmayjY4bAfWMeydDghzURaH5w4P7QwHyYeZmiS",
  "key34": "64vKdQncXVUR4TDNroCRPMqM49jpgrK4PoixHn7D7eYgcuH79YBkz7P5jRdYafKDjMUA1RQTHTUxT626WrW9Jrbv",
  "key35": "5Z4LBRBG3QENc1oa34P3QGkH3hAXPDE36Exu3wUm9Nt3vxg6K8eSMmHj2yiUutiF4TFJ6CmWpMrNsiVNTZhq6VJB",
  "key36": "uDbazStzgjnrdU83wYKQnZjcWnfL5m3sAakzCrBJ3bi4MosYpS7wseQpJcCTZGmmxnfgQj8mkMfQjEAyB1eEbUt",
  "key37": "2HnrKsKa5Jwpxxnf5C4xqab3gpD3Xd6hP6YPESJhZrJ11qFSfFLFmFpT8JudtUE7NBMPA435QXUhXPkAif3k3qbT",
  "key38": "3qJ4FLyMfvDiVE1CbeBgbui64iEcGqR4hJHqqmvxzXyXV8k2ALUR6BEs9efzjuiL9uFWHwsxN31gowBcji87rhco",
  "key39": "2APnKg4yGHQMKwutqNqkbHLpyUpaGGq1uvHksyzVFeqBaqEjHJ1joj72ikGQUcYM8DPvnzmFznAUWLh1u3RVkth7",
  "key40": "X6PDSNwo9jHebB3mZdmtU4BoK43dsE7MjET5j6BRdM4XX1CtGofJpcnULP4HWmB4aZwHSyV95h4A864HwfvVeUp",
  "key41": "NFvcy4vvCvQDFpvfVEksbESEUM4qYhcDZ3ZPe95X6dLv7NLkD59Gf5JLqrDnH2JXY1gS36MY7sBHtqbqdEgD5Ss",
  "key42": "Y1h66BarSdGAmkRHMRgkMrk3f7rRCUiXpBHttTDMnDtV198wFhqx7seyefh1gcV36hxcxTJM8fT2XbytAHeKjLB"
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
