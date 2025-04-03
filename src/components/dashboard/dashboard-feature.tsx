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
    "3CF8UwL54m7LJqQJsGorr8ndvXYshxbo75DjxjVRtUmatSESwMv5D4UjCTWq8hPz9ysRBwrZW3d2joQjX8osBQZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xoBWpfEu775ZsD7d4E77rUtvheabuDeo99U2E7qzgxmkHSEx7UvBxmC4NAksGQBaEeZHqQSQgwZJjPDWzLvnYzX",
  "key1": "56xgQLDtfEGMPAQaSCm4mE25hEv7P15Xj8QBevWmBZSztbwhW7XGSPHVnsdDWKRhJTaXSmJSJCkkbx5KCWWxeFf1",
  "key2": "3Xqxuv44fyocUHSKa32JaXeQuETomcQfpfUiT3qGM4K3fN5MCnLHA9iHQ2poasy1Nr7t7LcSsUnTinfTzr2P7RsP",
  "key3": "524iBsxoUrWEip2QM6GvQwy8oq8aNSVncAYJc6X1B943XmkVwbNHgGpofdjhft7qwFMEiaPcxaQ5bpxnzkYGDPbX",
  "key4": "3AAyTGJyiBU21NhMW4Wu8orfcek4czEE45ar5FxpEy4UZc6k33PYNjfwGDJuauSCEMoRF3n6HuRtdibSCDEyvt4o",
  "key5": "5uQ1e1gTQ9BTNaVFV12cokXm9WnGkE8TVV9WyvfxAq7X4bcrcYjcBz7Qu3qyFF4CS9x2ALKrjCmoYAdWSzA89qHB",
  "key6": "2m4nCTfVJbETXpVS4ERTEYUKt4Ns9XYhCQU1uoNiRr1Lri4Bp3BMaDbDRTppynowqZDq9F4gSDdXbWFhDexxFNKx",
  "key7": "5DtahZoFeVJfqrLwYmXfpr5xWCqRSomLrFENx1yWkjsHYorKmyGFj8RinhwGY1x2QYc3rGe2DcjqqMzRnvfd3pFL",
  "key8": "2MuW5WL9YZCtZZgsDxEeXbrvnBwB4odhSBHUGrNGYAez8ysF37Yw4v48F65tGxUdAfxBNeRshRcmMLygpHvRpgtX",
  "key9": "39PmmdGAmig5P1QmAmxa5vydZQP8xm97GnwAAzstNUF1QxbnoyLPWbY8DexR7fUpccuXN3BNDjUhHkwaoq2x4BKK",
  "key10": "4dEF7cWi4XmwDrcZGUFZutd4bqws1hUZ42XRyko76jKwXaTBTQaJLHMnrgoru4iX43X2RhLHk65N6bcB6vHB4uzv",
  "key11": "3Mee5wucuN61VWsYDcXBWoWSWgveWVmGYcCpLskR5J9g6CxZPngSGZF8vCjpaNnodMozpzkAv623jk26TTkthUiY",
  "key12": "2ChcAXtE43XrCcY2N8HvrwrZmkdA4VGBgSuLYaNoCE48ukgaprQvesB5j3cZwx7DjQispb2mHCdr7gUv4o8xt3bC",
  "key13": "5yjXrb2iY8srCquhRGYT3QQi2gFLrxLXiHayUc5KvJE8JUqNhFyhg992y99HjiXb3t17HqnMVptbS2KCMejVybni",
  "key14": "5Ktz8C8wwNdqMvRPRtjy4EbyEADEU61ytmP4mWc3jESMiNUKzpV9kcRsC6azUdSRRnBFS63H82ZuHpYmNA5m2Sm5",
  "key15": "4g2Q1mApessSpBDw4KwypH6zg3qnzUtp7bMvYakvEhnvtHsF23DVFhp8cs4a8FSeiTyyvd931mTMXTQLBx8fpeBg",
  "key16": "5wMn8yqjQkcbty3HcLyu1SsBVzcLeDs8FM53TFH3RTSUFjcNLfduew21PMqA2NTd1tsdGZbwNDNgHmydS1L3xTtb",
  "key17": "5cWnfwjsgJ9tMpMDw8QdhucAnkhcNUGjShb65cw3aUPru6WKZwk9gwxmWfWogfKTUKiU9F4vvgQ9y1Q5W1U7kdWh",
  "key18": "gDv9Z9NXExNk1G7CgasGzCDS3BszKuz6YRRr49aZbo8nbjeEfNS7ZgqpdePuqigHc1e7HeMg7m4pNGzUWsUjiTo",
  "key19": "5WHggULqa4M59U51Uf3FquryCUrjirUBL6CvYmVqwrJgkxipm6yspEvb9fUhg9iXsg9d916Yb6jiPjpis8Q2R9pr",
  "key20": "5rgshvDZ7nL4aB2xywQXxDBpeHjAsZ6pTM2vQhPYzvTuUX3ssUGrMZVFN54AWtYddreiJ58HTNjDooLDG4vkCXn8",
  "key21": "5FjqTxg12UQL9hqSuTxkkiwwg6ty1zsXrFhn1XDz63kMyTztyzvqgWQiAmhFjjcP57t8swq3P6HA9dfvUGr2YfH2",
  "key22": "26U5j86799vSNmq1JHkudPqq5BQ592wkLR7L6TvYs9gmGvAPJVgm26ysjxvrzKih7oNyHT7mJ8LpwcaCtaKHy2LV",
  "key23": "gjT71TMw9igfiJCDnBBCPPXY7tPzsVhNCqiAaNYCDCSAtzKUgmJQ7DwYBtxHeo29VqxuN8K8gjVK3dAe1Ve6Bfc",
  "key24": "VUs72UVF3DVW8kQCa9JeHFUbH8Dqc7QXoD5nN9g2f2i7o1rfJXAF1PsGsZKmLbohpS5DQgCrfdPUe7aqdDshvRi",
  "key25": "mXDGNkQ8BiCb9YvSDdJhHHaCAMPJuiYCXZiKk6cvr5eXTmse2FPSAs4nc5m1Sb9RtdePoNzQ79ncv3tkUVyAwQt",
  "key26": "3KM1cNoMztHHpHJ2FFfubG4j9iXJxbh19HowYc2jVu7L5kobBBEby5ZEJLsYU7mJeF7j5DMxGUoHc68AZJRj3T6Z",
  "key27": "kHm8MzGivbPQY71M4NKPeNGuRFg7HWWBoptpi1QycNiPccM8PPu7yT3HCoiTVCNRJtzq9Dqr6rKnBrQ5jWZgE4w",
  "key28": "29hX7xpXALREp7rVs8SgaRThVrNcmVhY8JAWjsUU1CjXaNvNz8PApYzDoQeUkvqT8ey3LgoWy3DL4sseiA8he914",
  "key29": "5dhjq19q5eTB9YyPxhqJFSv4rzSL6TUsMnKreDcwkHJVjZE13kQaUJJwLt3CmV9wy1wd4GynsjZPkj6VsizxrKVq",
  "key30": "32sXt1Fm7yLjCUJyxUM9dvdUPPC7GVGRFd3Q8TtofGUQZv34Vgk76zy8ZknbywjLJ7b1NRK2Vdjd1Swnh3JB2ipW",
  "key31": "5wDFetoeyLitsQ6YhyeeuwZZMgWNj81HSHvdNyrQs4h3dFHrUvHxd4yBhqoTNKBpaXn31J31Snf6YnegRkLgT1TR",
  "key32": "zyEu7mhqYtNrU5T433XY5hbSWxKBvyp5cFooGECHk7eVn1TiYqqvee8dMPUze2mUfMBQsNqCP77gEsdUi1BnXoL",
  "key33": "4sjAEUfnkXxp7M1Ld8frLVvzHEWMFwB41FeXC8YKtFQo28ZCZDTHLTvoS3BmHx95KjqxNo4iRkRzTk3CBs3RfTku",
  "key34": "5x1MR34kgvHDtvUxvQUH1KJ7Ejeb9UGasAjzmucW62CWjj33chL6xXJkTiTzyZWQEHxkBipjVqxgyY1aXSjGxf8p",
  "key35": "4rvVwgrED9Xirts6jJMpredgQRZnRmANm45aErn8JS6p7vQjJrkMT61bFsoicpbaz78EqSTtWSxzvW18BuMuTBiY",
  "key36": "mzKQX8GKVvyorTvqs4MzGvXG1Lvkh4JhvtJeA2pTTGNjwMDwFKgt2vcZvfRRqFagMrXynYi6prv4W5jxzQfzaDJ",
  "key37": "3tB8G2iFgHSe5JHtP3Qme4rumRScd4PaHQP2bWWm1Ku7VxFeMLZp49AevrTP94BcvS7ZDxENPyRc5tqB9N3Yr5M1",
  "key38": "3B3CLZvZ3fMoaTBvMKfQZebFU2F7uYWChWnjCc7pcS8ECr8qLemvJwewnvUwv9Dhp1mxLW36G64ZQeZswkKyk9Ey",
  "key39": "2QDYe1k7QieapHfHGkycHRDLkcPreJVKPjGAd7cLNnqFp3QtUCWK6Q1kxwKgHmGsAn8YcHCvod6xFu6J7fNBWKsS",
  "key40": "55hs4hoCHfkKoRNokvrtt9ErPpRcxrD8aiUNEoyTvmjsV1QZrmP25govaBckqNGKiX9fQNMigoFMBaW3Di8pf2v3",
  "key41": "3akFkpu4S29o4F8dTUNRAAJGPprQiHNekkvArQjuyJxTf4RMfnuVc6YyEyiXPvKD5fWfVrW2JN8cKfgdjM14mF42",
  "key42": "4Uqyg4QgkkxUdhAyfcUGWN5rAkAtW5Zwa3ojM81o9PqkRuccMZgfUkm9S2EoVottAsJqGqxrk9DxKTUoSGuEDTEK",
  "key43": "2Qjqr9qrKi1BZnqvDQRxNnAC8gBBak9MGbg9mzakEBSFxu7n3gGb8tFaoyGMipvvk9GkkDdckTSbC6MaYaWC37LB",
  "key44": "5p2CdhLngfaj92uQXkTuZpFPX5j8VDuEUUn1MRiS66AFCMXyo1gbSPa1xs4a5NyWaqb1tCLwiFg84kHvBWm1oohM"
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
