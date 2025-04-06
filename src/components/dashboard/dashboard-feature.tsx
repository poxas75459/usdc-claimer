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
    "26VHRqbG5e8Ce3tNYb98Z11dMbVE6vPNfqaFtNKttRZTzbjpz3vrbHzz8kDdcMV3zuE9eS21az1S312ypVRSpEns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dw2kzSJUQuWYC46yUDere92ACG9N3m82GrEifPBYWtNxSJn4mAPgDLtvaFXdG5zKAEMXE9EMipThUM3ueFTBvtV",
  "key1": "4RUV2c6q6czvAYZcvr226HcbwTv5P34SZvMaXNPR1TsuyHX6Yi6ksVW5ouQEZBLEiWYpTibT41qmxGCA7auB4LR5",
  "key2": "5zUwQAyHx3KRuazPnWhrrChuQB4YaMZJ82rk2L8xC3Dbdpp3ZJcgRbYezfL4bk7jRD4WJcV4UvCa4uj4i3xTTiQU",
  "key3": "2EsjpU8cn57TwKf2a9f81Yoq1PFvcgRLbjWZj1FpWufcHUSAaE7fRNndhtvtXy4rxqBsm1vnWchgX3SbSLFGrQgo",
  "key4": "3xNJxvhEHT7h5j7QTSvW9Ky3jHtBSM4ZLKKSEFdYZeCSpz683zzDNpdEUw9fmYUroaNvbjVAse9bNHiporkNmGUr",
  "key5": "4RCLXHjAhAdNmhDvBnTSZUwyVDRnoLAPpU9YHrcTaRfLJp4GsFtQiUZWwFx9wm7RkbijZitjmqMgvZhj8jChXFdj",
  "key6": "C9Pyy4tvNAdjPt8UcPdMZBQHFkrc7atQgieuUL9626xngufQkkzZ6b1jwWc4rEFoXD4KKUg6jqZgYBhPfqXghvY",
  "key7": "Ewzu2VfaPtJLA8iuGvPsmFc3aaQ5yjVfnVisxiCBMy8dh7NrVxfnsM5gZaskqpV3DVVm85dbVTGkfmcqQHCcsDf",
  "key8": "57C9UY7Jm73LKY3v8bLL2HebArQZhm75K3KDvuNMi84U1GtT1yw9GGi7iU9nN4sBPTD5euysLfgUyLtk5RfajuvM",
  "key9": "o9S5Ts7YH2JMZDaMAQoY9ZGopBXnWUZo1JuD6TreiWda5AZYXstqkcBYLjJte1WbpJ5jumB4D2BSFx1VxJiQQQK",
  "key10": "YbyGwSZLmSpfK5Y4ZJV3oQWxhFZQ8qnpibWYcvRUzURH8J3kCesjYoY4SAgaxv8J5VSdBzNrMFyWWYurhrb2X4L",
  "key11": "2cNAo5cwxmFQoGwLHCnQBFmtWpqy4KEC3GqngL7umxGn5UCCywniA3j31n2LZzkkhEgjK8As6YEMnDr1HvTFym34",
  "key12": "5o47aT6WDnD3n2rfrUvWa56ko9yg3fH9t9DF13MM8EM46SbuN53uMCfpEuots66wE8HkfxYv882oV2peTaQskUsZ",
  "key13": "2zG8eyQvmdCdae4Uo1zXmFVgDArZAtnqmmd3xYFGZfPRMjuh2M8Kxrzc2Njtk7Z47xnxgQUagvb5zgrNtFjiCSYr",
  "key14": "V3ry8VqVd1oh4tZcQF9jiZ5T1L9ksaXrW3GnuQF6PVd3zaN6vNXDNmXWW7rty22Ampz46DFiDhsLkJpE4TuXKyc",
  "key15": "59KKs2WUJqbnAVY8D6WveCYeZJXLSRnvvohM5b7cASgtcGr36YNiEaLnNgksfhAYDXBnMjKumL8X3bhY4WTGdXqM",
  "key16": "63iErY8fAUZWRUNFMtFFdUhqYpQbXW2S7LCnhaLJC2FBGjpG6H1dfdu1hD8pFvPk3y36bQ1CELiHj3eLE6YhKaCg",
  "key17": "46R7T8TwCEaHt2KBdQvASnJKPV7wrWN5evg9zLj1xPDpVRdbZ1959r13D8TfLDkP3NA7kE1Va4Wv7WV26U7tY7qy",
  "key18": "2gQACfBgXYzUHFQaVaXxdkiGp2BVKFW16suS44bUN5C2BS7KBoRC1BGrD2cpTeC1kJvgrtKGRfuiEa7EMQByDepa",
  "key19": "5YNj8TbDBWq5f25fsLpC6DwvkCjXUB1Ss9znzTN4REGJR19GkQ5ouxuLTBRYw2Rm85sXg19XP84aqVDC15vCH2Hg",
  "key20": "2TGUtjoP1yRA43e5wtgCgGVaCEreChFdyZHNqa3ehPnybtLHjikbMMVh8LivysDH9VRXAaVk3ft9r88Wb6q43GUV",
  "key21": "sjtLaofRtrF9xpPJ14bnN4M2BEkqXtReaobQwsCcc3nEnNqpAeTr8cWXSTUMfkBfTZ9EbZxwoZTudAoSp6io8J3",
  "key22": "z7x6V7xK665qUC7LVLDJ9Ff4Xcc8yMc2mCwDqnCs3yyYza8cvHcBtim3jxKjrPeTzvSskzMytNHiD9La4JYRbQ6",
  "key23": "3VHnKWAPwgDRnmhNK4rHbSs9SvwoEsJ2oPiRxJpc18LRQMHEtSMFyCbVxA4z44NVKyuTUzMK4e6fYRa9DR8fR7pR",
  "key24": "3HYx3xsNBWK2su6Ce3iu7FjyLEWYLoVVxC9xF2SS8yjRbEwThoK1t8usLYh1L3LSdupHUoBeXgarZ6EyTfRRP5Zf",
  "key25": "56kL9eHLpUURGSkB2mqYWkr8ikqYdaZCH2mVv71YT5F77bj2w6Wuk5R29kB2ELeWMVksvG8ja9EgRin69rxVR7oa",
  "key26": "jDms8yYr516B2h9BosnG9oaf3jfsM8uDytbX36E11XX8XvV2XhNk1BpGQGS8FepVABxXqF3HfJxhApGPY1gxNUT",
  "key27": "4LNwhsE88De3GHLDJMqyBwqfWJqGjGBsvud1cnk2Q7nGFbabxCS7LFTvGjvLNJeSqcYL8qty64w4rkUkYjvRbn24",
  "key28": "2VFutYjpnqqMZUjFcK2CF78x713jqchLYgpqfxKXVVGUuHa5ARFeJY4NZdwmPTy2c1eaLp2Zk8DZrExsDC4NFef5",
  "key29": "4iDGTJfvfav4WvPg2RHkT9FyiTYoJDccxUDMJxFuNk73jA9eE2qbWZSS9xAXJReaGr8eAHGZ2jzrtNJ2sVZNJPAk",
  "key30": "2uVDZ9GvzW2hcrV2fwf7DdPjceonCB53QEJNtxYfkUDkSR22P7g9sNGYnwfj9tph9MdHVsiL5tm4b8ViUuF9imNY",
  "key31": "3hrvMSHBVgaAtcKMXeXvZmwxLRCZKwqjt8g5ees97wa8ErbDNQNuKMQkcZM3DbLtaJVpB4euRNNdNDTxNhPsQQte",
  "key32": "4t3dNbrcnjFgLS5H382cdQUB9EYXpkms277epBrchEKZnHeRDv67dNvAU3V1qRcE71fQfgkaQMNh9QtTfM533pAG",
  "key33": "3hBcJoi8cZHQae9UKwYLveCedhbxg3gWQqvcQd8zKmEb8epbguh1gZFu62oJ8aEdEDtbqkmgQrGujheJbCnjLQpb",
  "key34": "33NvJB1wwztPKtoQ7NEK4eSPxtTsDHyEqwKYoRfB6Sy4SMSfQxyUNX9qbPG9xQvJJW4n5bYg24DE1CCgNZxpGVRh",
  "key35": "1vXVNuK8jemJj5E61iAcksKhC6B4zAup1tiS6hfL1xuWww5HKjog6M5iRo7612PhpWxiNnofwyUXisia8H2x8mo",
  "key36": "61hnD4TKZyARuUnFrPE4Q9YvrVc8sz9KLVU3yeLGyo8gBoAShyYUcutN4z72CAyvxNTMuUpPRUFeX6D2HDuxHKaN",
  "key37": "4YT5E83VL6EsQCzu3zr8QwNoXzxDQU1Viy2HLzMpFzC2hU4uvNm8HwvFNioz5ZSrkDgmX4YUauDcYsjd1VHGC3tz",
  "key38": "3WAnAE9LfTgJT2jEDXgDuTQ9y8nnbbXAFR8kj8MThy9PCwarKjFJ8uSDJejS8G6ahcaVNQ7m5FJYXUhyMwEY252E",
  "key39": "2o1kh58YV9cyh1ZS6df95uDnm9Eo13jkWYthUGZXM2cS5hHc5FrSCGX717LzXPGhPDN4monGfRnqwE8QRjoUFojb",
  "key40": "37VPa78reugn9TxCsxp5kzQfJkintWZkfu7rwckyoARQYj6bQpCVD1fqNC3uJcn1yfpvNvYePTfYLw6nC9NmgNSr",
  "key41": "5N8tBC8CrH6Qe8beVoDT1kZjbLbsVJZzDwut7ZBLnhLgdv1kLYsoTVyLQeYoXk7ozuEGigY7nc97AqGaFX3j1cN",
  "key42": "67pf3CL9V3MJuVTYXSkQivcgM5Rt1hAWEWpPMCkm6YyjCAyjsp48HzZoVag7pUTNdXd3TANgFM5nyrAdGQUfCcWk",
  "key43": "5adxVcDEMT16n2jh9o6n4pKq5re4SzhWTWSgrL1onvL29U1jRwPX6fbFEK57b6qCi2oov99DzBvZ8tsvBqrgtk6g",
  "key44": "tYBZKcvVYuUEqFCFC5n4t8piNLMJfTM6DRddNrb5ubqE9FoU9FqRvAms8BBng9BATVuQpoE2u5tvBWd2YLZQy6M"
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
