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
    "63xLsAPcUvaxTZi1kjQKBEJy4tH5aJ8Yyf8x2QTYtzBLV8vxkitZa7CCE84nbU2sAyYrvH6QSTpjtdtJJ9HsjxnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bf7At8RYSAEGwVkn4H7tma3ucAd2M5kRUvmBtnVXh9EPvdzW3jsWbaAaLvJEebW9Fx5cKHYbANfeuPPxcyKDxeV",
  "key1": "dcqQr7JWAQ719iQEbKFwZNfYAQEwvHwu1GmZuxpMmBPCKA2ZXrDVVrrwds4cZKCnpNDsVUsrJ9r24u3B89qahEM",
  "key2": "4DqwanvouxVLjeE22MxhD52QNTJKjDyXxJ8dnjPc7m97fD91CEMG1R5NqGAEYLxhup4iQ6GVqJJgqBUhhLEHXCVM",
  "key3": "L2ZzkhadiUMwr6nXtdq3ZZLkWyLcsTgCsqxk8J6nGGbWCTyiRe1gkagb6UWn7W26v9cnShvkhCM66DkTinuiRbp",
  "key4": "2tPHoVhLhfSm3XHAkSw3KBSjeU1SiiJhtBFHGTrzHfXaD14qzGdjKfX5SKfc5B64L3MpEfoomA7jNKM3zQkafEkc",
  "key5": "TN6Wnfm2tbo9t27KxgBSN7hcXotsgJu1FXy1ES9T6gkEQp74GKsskcasxBvBwJnme2e5HT5jdNJXkfvFM1jxMxr",
  "key6": "JJEuovLtBdRQUieYP4S9zXqvJGJYHBng3kfnDKLVigPwHvfykLK3urY6sWVbLJH8JLuMmmtnsyEBNPpTADK1czs",
  "key7": "55oZu5UPonn8RrieUZ6UeGQ2QscYxQPwxe13YQjN1oRgH76RJCesodeUZtDoQr1od6xBZ3hPSvbsYMYx8cvstQnN",
  "key8": "mJPnwf9Dry2xoTCpfTGqbxnbqa7SsmU1NVDT7KPrGp6qWuceT6DLYXfYLMA7igfSQZmpdiw34R1M211ZKsEfJrV",
  "key9": "3fsVfMmM5w2yB4XhuLhfhqYbrtxXKAEFReR5MZ7bb4JPX62yt1aEbV6AZ8i6LVZZKtdDWwbdADfkZbEgX1G3sJXt",
  "key10": "xahgimYE4KT4zGNYQecewjZj2dwrBgzaHSKCW1GZ6PHEpZYfgTg33XGyRhzCdJPm6D5WfqWJUcUECUJpz2Xf6mt",
  "key11": "5a6smTByWYQEJwzJSze1miwks9knThuJG1AqSHsgvb1DALCrG57cARcppGfA8ovkA4mkjiuRQa7f3G5kjG4yFuBN",
  "key12": "7qiFSsLwsnUPG7JGULvPttAvX7nbH2CK7VmYNKQZFe1tXaKtEpoYRdSFpXuSXJutG5wYsosYd99cN8Px6CNLTpA",
  "key13": "xMfqYLhKjmeSTVVrtRNJWAuNm7i3DQG2LHJTHYRamcwamcmtDWr5TSkUH63dvZQbMPobT718YRWWikfEvz3KYGC",
  "key14": "517c5Sj3kN52pWFkowH6GKNx5dKhcxmQAhLyCi752RWXYkiXDGh76vBZuoqwTZ9iQh24fSTGFvKjx61Z6sFq8Yj3",
  "key15": "4k1UhR1hwhRCrmKe1JxGoNJiX8RduagaNzZmBhkz9gppMbRU56kWPWFTPTSk2vWtV1gHJBB1uMxwxWts2xYkUCtP",
  "key16": "3YQ3AMmXXYd2twHYhS8PQYw3eggResuzio3Z58P4Vr8yzMi2zxRNDh8YZvqycnnhCiUbqhikFusW4P2eufufyWYP",
  "key17": "24ZQ3TrEDvRx3BifzJboipV4MWxU3xMHuhUYYhDieKJ4tpmvTEGQTo8Nz61KSdhv44api8eb2p1ZyTbbHhNz4xdG",
  "key18": "4CucmhTZxAktSK6WX8fSWjBkiLtysMWBSfKi4uQtevT56gsHmQn2xaqeJP2fX29b65QeuvwxfSLo8ksqKKvRwP7u",
  "key19": "dGopo1FJCreNwdZfT3hpELTNNEA3BtHaLSmLw4xF89tnQsZLxyTxKMxyYtdLDzTZDDr63SnA49JoYxAXjhqc7MQ",
  "key20": "4tfFGJ7EGCSy8tRm3mZscmwk98AoiG33JZBTpDXWcD7xH9cH2gVZYFmDQkWu2WhVEQzRaQibn8wXcqPgBpGutDY1",
  "key21": "2dPkzZbkiabjEVUvsJCU7WrqkSzgrsuhLEaJXfNJ2CjVDLgEySHG8RUHUACJgm7McbBoRaSQKeN6aPPQaiQvaT5y",
  "key22": "62seMpCpsW4QGWdSKEEE1kL7u7yRts6ejNnKuCxbnx8B5P5ECYZuDzyCcZKS4DkQr5deorYmBXjHpgs3bWoXBNXF",
  "key23": "5exUsd5SiZXj4HgJM5RLaZFWeMZ1dUHrL8hZQnKaopAKQo4jzVwJQ1kcG8qf9J7M25PCJ5FnCcZ9SmcVz5jQezy7",
  "key24": "5F8iGTFmRDYXLr6aP1B4GkoijkWj9wEkF7kmh8GKvPo5TS5KtUcGNWWqbDcCneU7btfgtaoXD2t3PycTJFuNwwet",
  "key25": "5ueZ1FJ25VFTgXDVEBNxB5mWS48MLEHkUJq9HjrhSGW4N7JySrgzWnBoBiAbQLFSAaEMVA2XtE5QeDoBF4vLEu1L",
  "key26": "4rQMFTzL6docy2Q7UFExhp8VGW9wJfTdpZ21w96auaS3UkzRUR1APgkVo8rCeHvYojRPT6xRc9dPD3SRXksKdKDy",
  "key27": "52acgzZdbVyt7o8i4CKATdZ1537sRjR7kxh6orPz1zYXiKUcyMT5i6X2dPEz8GrJPpqo9aHQHCaCgvUYA2wqWxFd",
  "key28": "iN7hX33U37RiFfNvxHY8taiGmtKpnDfq8U5yX9Mr3NBGxqnc4qj5bmA8L1rNZpAxBZMeuyggTYojDgkos3EsbjA",
  "key29": "4vJEqTMcrn5HV2sPUJLCvmoVCQ2vYLRmx7cy2LA2YPQF3kLY8RjPEqQKpQQf8Wxph7Rmu3FtQZ3tYj8scCzs2NXf",
  "key30": "47dt2VYH2hw3YNXadkSj936ip1WgevCVTE8Lpf8rkA3sMnJXrViK4sB45TVSVfbC2jk2bHb4NPp5J5mY6paCpE8v",
  "key31": "32ikHNqver7LMBSyMKgWak5y1o1VZ79U5hBMFwdmHBNrHrv3FtBscjssXUfKyToji7mMjx24yuspSVJ1jmhF9Q9N",
  "key32": "47w52zsYJX9Lw1XXa1LHz5pXEsXxZnu4axa5vYhyZ79Sfe7wUSqmXEVcSfRy1JACGK3bn95sqDTN68fu5DkRqKnx",
  "key33": "7ioY4EC939Bxah55TzV9yYXYJrsqpSU9FVV3WeiB6uQrVstRUkTT1e4JRa4fmyqUo4SKcRMTNio6Kh3hPDJRj2K",
  "key34": "3tGnzcUhKg4uV9XstcfN6Kye2cmamkQzE13VoRWhiJ4VYbFY33xY4yNZpx2KqNHisWbCuQi96FvfMbQmR34BSTam",
  "key35": "2YKqbwnVUfaB8g6p2mFaGcNCaiNGdLdGYQ8GDsaxBNTotmh1bgcoJbDmjcxfz8bxN6QSwQEqfCgN4P6bzhCpkdsu",
  "key36": "2wzarYJpDTAyzmgqbiejT4xhPxVeJE6wDgdEHnddhzvdcEB4NBwUCZduTpNMPpRdL5RV6UAWzKvU9Nbb9NLDnMRU",
  "key37": "5PsZPbCmB8hq4VTXa5GVZtzst5Yt2TUy5pGPSPX45xgdi6BbnUz3x6zgGhwVeCQLTtFKjHeAa2hv1A22xA8hrztf",
  "key38": "3eaMfQeQcgd4euifKFdeXLbJjPzrrMi8mnkyKQ1MSjuHmcQz3VvZe2Up8niNyHMs1jF8nVzH3EKSibyZEmGyienk",
  "key39": "447hnHTAUfWYfN9xhK4YcgUzsmEGzXH1jVjTDTQoYoMquTaBkgvx8AtpXpi77W3r5KuxjJ8oxqvfgWhXniJzCgoQ",
  "key40": "3Y9zRd2kZCKtTQKxmxhkozjBZGaqqdbSQ5s75RL6VB67oUsep9ENJksrDAF1Z6CL64FitwMDsns4iPsaC1Y63TAv",
  "key41": "2799BTDXWaHUsva8WzVbdPG3yBePtngt3wt9uDoK1xRTT6v6ShYH7Djs4TbsKMpo155xRoPcohgpR7f8ZWXo9YHy",
  "key42": "3WQ5PDuRm5bq5wQkD12hiWboTEF1GXZPo6f5DSyV41epCaske81sLoDhDrcv7XYnm3N6Xw72czJz5qQbjHT5ZaZy",
  "key43": "5B44q8tA11kxfjpAABi8kQegbaz7B1v8Whobi4qR1Rm6YyBnX32N24ZWSWrbbnCm5gkyggxP5rPcYFxDykMvRrH",
  "key44": "4dGifuetyHUzm5xho6k3E6BPTrr3nNnaEXNofYtrEYTWsaYYPm2jWZeYcpPTVgDcYLcXjdc1fZ7SfgRVRNKkk3Aq",
  "key45": "4F2W5oN6PYEGPMXn6toFAPmzetksn8T9r2NoXbm4vMcJsp7CACbWSqbxoQpVd7NuP6Ltcjd9Sy8BbDzGY44ec4vA",
  "key46": "5cKeNvJQRWZohe1HbgfGQyJY5DaukZ6Xo6xc3aJq7xeiGuyNhW4MLGwapCNpkb1Uk9m4Lk7NKm6GJQvsmC1ChLLL",
  "key47": "sQDNsDdA2ngdMEyYzod47Kw4UycpxmCfpx9GQqLP4LnWwGH2SdPJpSKWk8etZVeE2XcmQj6rYWyGgHNsFMgfTqC",
  "key48": "DkjzLzz3RGjv8adH2UAydyNYTcFZ6D5m9CJnP6xEHLyWhkHnHnUqsZRxEouAvgJRFa4jFawngQWQH7X8z43H7oS"
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
