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
    "4iicUFUmGdwSdHSwioS7ok4Tg2gNrnsv73vGuz1bGNJbFaG3tdXxnyCFbW5qaMt5qvogK1XW8CjQjtC4ycwoJ3q1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y1seXV8L6ngZLcBr2ZxpriyQbnbXkWb19MLpwtQXpxs18LziRzxpKTEyYqH99rb1V6yp2e8R5ArQeMYHoNCnaiS",
  "key1": "46ViqLVcmhDVi4aMhYTzt1optq4qHseSDREDZqakkoDCPpD8DbB3BiQnr9rX1sSe6YWPG79Sw3zvCcpxH5ZyfzrV",
  "key2": "5gUysvSXaRngzKtQW9z2L3jK1qzdcLfPpxvmHBzrt53xisb2wTmN5v9wKYLTBu5hCrSXZnShWQVVZGpPVoaroYNM",
  "key3": "J3kCAeNnNy18QFxgKESf4yBTd5md2fTqBdKEbUr22cjvNQU1xtqr8ytFhgfmwUwpyUzh7TGXLSZCvNPBTKBfefy",
  "key4": "3Kq1uXmABmiQbDZAJMaisGnHoNqsoerqYupTpyh3hd3vHAm6P5sUMet9Y919HzbkZeF9Us6DiTwBg2FTM2nBKfR5",
  "key5": "2GCBrJDtVMk8NoqA7a9e67yYiFjzjznf2acF9HMWu8XpjCoGhX7m4ztbHTrY3AtUvDVMuyyDpJb7vCKiF6DzuHSQ",
  "key6": "2oDwH3Jy5WimKsiaHxD17C1fEfRHfuBqLtseFTu5RXCkjj8DSqBQ8pDvPfa9mtqNYF3Vim6vk12NubQ8iLu7gTip",
  "key7": "5UKq47Mq9k3vabuyxNCZkSFjGYZVgTENyvAZLvkrmPyBbVqkbReDQKvKwRHa1K47kZKHFFfWsc7pDU3xSvqNFPi9",
  "key8": "98hw2U4EhHpdDJHW9BmFtuTxDRB4eUDzHf7RBxDvbcPrkaTKLvypbm9TBWFbLmdPKpqyZ4cnm6HtYP9HvxLR1pU",
  "key9": "3ozy1FjeJYZhTkNpUoVMujk9kpZisf4NbyDvE53XBcNcSF2KrjmRkzk7244EF54fRFyKoCftquh3fmZeEqiDpcND",
  "key10": "UmPhs72rMAKaHW8MTKLjNbR2PJg2iwKtCcPeF286USxzT7uscd5rtMjz72ZWzywNfxCufcmUkrPujTZwet3cXho",
  "key11": "2RXuXmQAWvgrVjaBegd6UgBR1ufbevmeBtMidGCaqmh3JGV4Uts9nFbjUrMtF92WoZMy3AVdi6SZjrts7YRrGvC8",
  "key12": "giHRhHuL648M8NAfkbYShxv3xMbYVFsaiHGGXbTvYDJbEPmk1STqaiZR4RnYi9xmqAYdUBd26vfQqesStUPXQKT",
  "key13": "4czpBCFVe57f68SygQqA37zZZnAiCpKqDji8m3JVkD5s8GXMcz7H48AeBPXFFoAUUE1MUXq8cQsvXfbJQ6qEWxcJ",
  "key14": "5mfhnHU2DNPB44v2X2KWRyBJoAphdYxzLWSusGM7Nw71ydem3dhxedFfxpFF8EhtL72yj4ggnmqgM4bRoSW9SJUe",
  "key15": "5HUCXgZRhkYeHJsw8sGYKb4H9ypDC4x38a8yYPZHZbyG9YoaGSRGxG2EPREkZ6jj2m7nwMmi6FpFEiortR24ZNsX",
  "key16": "57Kp4UWm6mUQv2NjvtBtTTGdXBSkMcpbYVvJmM7obj7fMvazq8AYKA2AcH9bUuGdbVSZTt5A2DnuHthoy19vk3sc",
  "key17": "2qp67CYnpkWYACqoBNbk3TPPfxfb9CYbxpnmLgiEffiYTgXBtTN7Vs8ztV3isfcA2SbEpaDSjFNLaLyoT7pgj3cd",
  "key18": "226hJT1Za8hbB2AEAeyQ8uW6Dfj9gY9EKe2uhq1vMN2fcQsgD9muT6obmWaAkWU3ktWSFEx6R6KSxYvFwUBbW4ug",
  "key19": "66FScZ6JooVHWjJX2coeWS58SsDdGf7yUjgM1xfLtHyJE8jWFfv3ryW6eDYwbxjRzNySkQuNjUziwyFMxh4Bmhma",
  "key20": "3AfoGCmtixk4wYU1QbexZPrr31ZF67NuL5BbRYtwyXMekGrTMXRPQtgtxK3Lc3S5Mea1cK34D6goMu6TKK4EhhLY",
  "key21": "4aV2LU6VeU1v7RPgAfj4HLS17XViyXTaa1LV1RQkF5KX44DVAZWxmNJiRdxg5Ksbtc5TX92YFtrdvJFLjfnqRdmD",
  "key22": "SmanP6nU9hdpRxzJq7G8dH63GX3716FRGoVPDxx1YnsjcAwvwumJ1E4PRhEkAk7ncxHuTG28ciuxCiENoRT8Uot",
  "key23": "jgD7MC8H3hxZSiRmcR3wUyB5Ws6nB2ngJf7jksqJ1w1q39cwZTh2TESp4GEDLxUzQzU9c7BZFjkixn7vGnCqWVQ",
  "key24": "5E4SdZ77YAP88CTu5CGkzbVi7WLThXDWS33cbgZNqrRCAQT4VSwNZ9b4Erm23puGb8Woe3ndYZSk9ywnmNL854S7",
  "key25": "jot83ZiztwkpSG5SHBHZJYmjK1cWmzPbXcLW8PXRGMdrCLYYy5bCvSRGpLMCG361WQJ7PjPbogEckXg54NcLgve",
  "key26": "5ATV8yuEssLzPBHvd95kWnQG8b24rJ1o8S3Tn7TdjBQ2gkts53W8fEffFi5xrWMrQsydr4xWHVHbWSkk5nrfA7vF",
  "key27": "3oaaWt3F8x1h7b61s4ZhXKFh9iTa31AStgiLEtUZcMU6KnS2ZZzVaHqhaDdeWf3wsSRYo2UuzTBUGsi5NbHunHx",
  "key28": "2uFGTqf9zZzNFjEPumS72DEFph79EZKPALgeA2b4ukgmEpLW6F13SyRvLb7mCAdfWhoLkxvKy1a6z2a7wc5tdHS4",
  "key29": "61vEhmJycRsn3f3tdE6yt3wxmKXzNxLVscj9vZKNmVMauo8d79TSWjcPFN7KQ7EhqriaFRaE5UHia1BQ2FnToJto",
  "key30": "LG26a1uqyC8JMFT4ZNU3Sh3YUG99HLX1XqGVDX6MenBWD5TJSSkpR1D1CKLzrXjZCDXPj8hBiDPXP7EHASZeaQP",
  "key31": "4epBkVyDSWYXWRh2J38Q5usAfvMVMTmq8P4McnGJ7dSbwYMxUCi6RQN8PXTXteam1p877RALK1X7B7mSEa7YvSz5",
  "key32": "4MotuM1zxDBBbPKU76hLbUAxUdexj1DeqNgNAgcgERAUKsT6BbEU56Xuh9ud3HMuYXxAsiAzg1jfAUKziwjHoLom",
  "key33": "2QwYV2hU5HwH8jHugHK3vUE3Wo31oG8SwtVjqydbGx7KFgcvaoru3EBkQCSmF9vmsqseWPjKStFgTyuQTVGnhPWV",
  "key34": "5y5zYnTDnJxceZ8LtZsCfRHGAivmQyTKUNbbEE9Xov8TYN8hh9FFkeqmQqWe5KWqSw6TirxAvFbug7Vx2t1RFpUc",
  "key35": "5RMmVu5gBE3dYfVNRmoiWe4EeCXqwU2tUk76LBnkw8zr96gHa3ygew6sqMnEsBXoMUMz1geg7LuTwfMjbZbjMuHD",
  "key36": "358WUY9DpTVbMwAoihmZs8oHgk7SyLcQNUorPg1Dvw8iqPGUM3W5jvSoQMeWTj8UKUZn7U29zKuhC75daHobPE87",
  "key37": "5hLu8SiZvqc3p2RbWFkU1bhNHDfYb2pEhZYo3yeCgm3XwV7xVLfBwJwUktcpBmF37ZdnaJnDV49eC25sQ4fnRtNH",
  "key38": "4Y6ukLF53sYuyEENryZ86LNxQZiWuqR2CkGfvAumQeEPUyWJnxx69EByqWM6d5i4fmtCeDrcLPrnPesRj7G1DpVp",
  "key39": "4ELSsvRrk8EUNYF13f4aGF6NmpB3ENC5y4tfzZrXiAf4NrKyEyfjbqnZFig5mZXva3We3c4JU7Aa8Y5TapcXcfnm"
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
