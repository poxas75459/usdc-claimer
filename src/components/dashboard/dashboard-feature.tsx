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
    "2XwcGEkp6bw8HGoqrJ7AKos9LPD4ywT2gvf9doaUrLqxo2fcC7Y3kkp6N3KBifsPumtNxjV1bjQpaAu9FZGLihha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xr1LoKriKKBvzAzDj97Zt16uoqGLEqaq4WgCr6oAfQiJBchGFovm6ChMtz6XHkq5cjKyASPwDUhCGFfagp5iiMc",
  "key1": "5VvxDCWG2DUU811YKUY6YNBfoWz5f57a2NTsM1DqZnZfoWhGbLU4tnNcn32pVqZSwTgkrT6JxPvYRfXtf9tPVJvo",
  "key2": "5dZjXqL25Ad5ikDTntqmD1LawgBw8Yjqqb1hYvyFC3GHPUZxJArGJrumvHfCzQyR1bs4ykfHVbggxPFEbkZ2Jt1h",
  "key3": "3TaTdLgd5LY4umraTmSPrSimWUQY9nmAED6pvLL698cpsNMX9pCd4zrnaU1guekhLc3BiFJD6GX3h4JKQZj9GcPg",
  "key4": "xHsNUkgZRMsATXo13pVdizBQHfcuUbntRyC2CYLrhZuAPmpwV8HyrRY78Wxw1VBKBeb1vzkLJAhL1jmWunMxFtR",
  "key5": "28Dphp7mMmL9YBpTpTb2XdwxbhSoneTW5f2XsXhi2cNwZMpeHWQif1W6LPyfkxdGeHEGctKtyxVkKyXa7rgDfbyu",
  "key6": "4nN2tSt1ETbSNnBYNtLzWA2mSqATQUtcQHZvtdo3JggBxxEodRUGcRAmNP7cuc7FPrYJebDv3vewy91mUR3CeqEm",
  "key7": "3R9nZ2cMLmwk9DsA8X6e4SqsytfVNqZdSZaMHwV5koM357PpWUaFnPG6TwyPNW4Ayfdt45mhS8YqXgMHm9ocyyQ",
  "key8": "4RxAXQTr9HMwcYYbGwHVi9dZAN2t7Kp8mDmSK9vTJ4Bc32C4Z3BFPSJ8B7FgdELPH5D33Aq9zK63S1Y9qVBFi1K5",
  "key9": "3TkYMeNcs31aTP1o9DVKwpiDUfEoAn1ouEijRa6MiGWzVxf9GopndxyedYHUEprFzMpvZXSUeRGZvBSnspLvk43M",
  "key10": "3MoHXffjbL1eQvNFPgCHSzux7w4prZT2vFncts3QgcejSeVX4nn1kmJ8KyUgdMiNBLqBd4s5J8R9hdWSPC8jFQ8j",
  "key11": "4yMttDTNE8dgKUmQCKCqN6GhVXAWLTt26Tq7rE5tf3smrFRffpdEurgQqkaTE5HcnMuvioA7cHF7sGm8PDSuLvT1",
  "key12": "2joZa1Wuh9eKsv9K9yXRos3mJeRjiXQQKoxvWZg6LbAE7MZPzwNsgGiTavs5g3HTSDAvyVX5wkphiZTJyNi6LVvh",
  "key13": "2ohJ8RqfikEp6hkAYAd1xwgXJCrYpuxh2rv2MdrhyzLZxLUY1BvNEicTqGrTYrFwhb1Ukmt6giBuzsQVPgvTK66J",
  "key14": "3xje5zxAwvFb4goGB42RsCpCNGLthiE9TL9SESdDRcwQSgVwqUbxsYJNPyqJrd2WYEEwQvs9WeEuDftsgBdCnsr5",
  "key15": "V2LWBu7o4X3CLSLFZKypx4YY6tBZEhoNDcupRd8GHNVPELEA1tecYPcBwp1ePAtDaJHQEeKLwQ4yf46uGJUDPyK",
  "key16": "2EGWNCmzEi9NM1r5Q93SSYZQzjJ622i1kWHEzUmP97uNzNmNQbhUnAdRNhogEioWX8Y7qvro5DeV9dsQXXSzebRk",
  "key17": "3oGpxmGD5g2CwYrkyuFzcGYzGzmvPCr5e7cAfEyXLYzmcrkYk7f3MbzL6j74PbAWVkYRqdC9FTYomMHfngjy7AdB",
  "key18": "42AzszzGD2K3uK8YQP73TBkuH7yAtsxzVHpKfo9MsXfvdWo9ezfTHfKwF3WzwVQQRc1p7RoLoor8vyU9aLgH2WRm",
  "key19": "8ua4mcGqwJJ54ZhgP7Koo4pdFJK56N86wGYN3Z7ECfE883kMX9HiL7gPhYusBjeLZz4dgBPUvRXyU1KY5dz7QwV",
  "key20": "4GDsgwMRtnwgEB1dvaeDbKyEUhjbFD7piUT3Lmo6v3z29x9DUZbSLsheQrsTURkS6CLhvuvSAXKHNN7srrBUA8zJ",
  "key21": "3Ck5yjNkMmRLbfGb5JjiyfLNdE8A83wx4dZ3WcY6yKrz7aLtidLVtjMkMYbvfDbXttxdTFZFXkaMM2ZYxm6npXHA",
  "key22": "49yY7XELk2LFjzRLV3gND2riQmFHK4f9q2215XGS2FHjqum9kK3ahQAiE87xqT77aowyAxu2hefFYtHFx4SFfS8q",
  "key23": "61DwJspUVBXDXyFo7hFbgGay9tK6qPQTruiSg51SKB6joETuiF1tCJducicZLafgjuyt8ZnbqXxbbGoRS6VaYYug",
  "key24": "4hgJGGgoWADxNRbM9VDCTdEpeFD8MrxfsmiYeHSmGxcS6jwrZkRNv5WQ1Luo9Xtuq1Jqw215muXiLi5CttKyPfR1",
  "key25": "2NxDMgURwvbmJsLS94q1Rs2aaTqTV6mEUkmzSKWftquMnKdRqx8EW3UGbBcodTbwfPHMRT6SKC5MmpLPoerjYjNw",
  "key26": "1TJNoVY64EaMXawVQvouRdxKmdzcCSuF1TmxeqWAX5VrmTvFcbEWsf3vvmSWWAj2NFEGCuFDf9qdH6TJ5wWqWFH",
  "key27": "3c2scaKDM67fXfGCz8ootid9DRxixa3iqpDeWSpSDv3J5fP91pmxJE5rkw4P9oe7xbJ9SVknV6hArZVLBVwjaqrY",
  "key28": "65rMDH6edv83hoWmdVHVtmZNtrQaidQ3kkQvxdye86cvo8K6oS5LfUCFti3Vn46DvF7emeSA3e7Mn4XJKat5YtpU",
  "key29": "2axPUPZEtwKscQuDFuPuJq22W5nVAHm3T5f1vRLJ41LWGzSYbGSJRispDdne9BQRioKWPGksL2MtsayX6GJERx3j",
  "key30": "4mUxctAGCRhQV4o7YdykgwgNgM45jeMrmnSPX1xGY3vHyTq8qmhE13kLd5meMaon2kL1AYVimxdG9JfyD4BeSX7S",
  "key31": "5dTda6c5BaDNYW3D9to3rZE1EVymdK5DwCVtKu881TxspDePVCaARv8ayTTHJobvDETLzLJVzSTJdmurMMS2zV9n",
  "key32": "qgLta6BUR7mCkKrGoDVsHAYnwJSmKZdaw2DLXaFodvf8PZDT9jNZvsNKwnqgqKSRURDHc2zFKMaqbHUhoSERaaJ",
  "key33": "56h2pDPDDrz2Z7fwVDEep5wdu1bkabxdPdhE34Unyf6asp58ZfYZtP4jaMcZCzKggrcyrqHc6L8pfpVxorXAhApz",
  "key34": "2K9mrEKfvXyuybtivpZ4LPgMuapLPgfFDRbqUYaACrbLrB6c16EaLs1d8vekgKg5rLKtXNL8pH8rpWWd6j1PcwdF",
  "key35": "5AkgqMsuLhfbn5NPi71di3B5m1wJaAdmiic2EQXbeoooRcR13hpgjBNMt1b8pe2dnUmjpYN4cw584zzykw6aGykM",
  "key36": "3PNA7Jy5E3usiSQZLVB1WFPgt2Se7f4xAExewDMwYqvJiFmNcRAfaSb3e8CS7ZuTCGiPapct5ycVrMyLixsN1MeF",
  "key37": "3XHcwBcc4fXzUW2pFofLJ5gvCS1a4hrxxNgx4B8sWkfAYHKgVgXobRhbjXWDV78nKfXe2EGuTd6NBdBoQLkig6bH",
  "key38": "5gaLWj8j2tURDJQtRDqM9eKRzabUYRY5H5tkuHZJYGcAuB6uDBPVKMiXoG14gUCDdCpdC8BGNVJP1M1QwrSHMdDk",
  "key39": "2dyL37NGPDQSScA8QKukomj9cPiiwLhKWpUpAnhCi11dfwemqxjqUqx3H3MYmS8QdiX8BLRibYXhVt5pMiaSTrcJ",
  "key40": "Lz5d2Jy5F797Gg2MFLkzkHeuaa5m3FZBkvDYqFd6T7NnLg8AK2JXPv1MTiBSGS25mPKmQpKHf6CxcDAUnQr2tn1",
  "key41": "39R7cRdBaAfRBC8rRMjaGw1fCqCk9dAn1qEiT8E8ivch7Jh7A5fn83CTTi71XKazhbSgJYCo3DTqM5sFYXotgG44",
  "key42": "jawEwGpVquyL5e48ep75Qh7He9YXqVJ8FhK9Y4dNDLcVtWHeWs1mSHDathzfKqggqJsGVb3gfnQmLdmXPkH9EZx"
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
