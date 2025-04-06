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
    "2oHAMxqcmLfvCTBWSSvshAWF3i4oc7iTyPeLCFthrxveswb7Q8XiQXN49d2jh13nfxNcZTrMWnaPfWXj35t8hLv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N45VzvJUzSPjmBPEw3oS77j633SZXgCEgomzkTuH2zJ6MKNTachzTJdUfjWqNt5VEkrAG9TafDzS1GjKKRXTaW5",
  "key1": "3Ht9GyPWCQjgimz1Mka7qBUSCRFZouo8Zjm1hAcikdoRZEdPoLgAHTFV8cAppmMsnZUxNwbJxQmhJ9MKqKTkP1rB",
  "key2": "34kxjjbMRNixVbGLPbK8Yy7RV93BMpdvNDWVjhMCqfawUzV3mG7wJS4fmzoAcvcfXfEci2pAUJuFfMtYTJyAkiMZ",
  "key3": "52Boxtkdw8qtUBEJEpyaCTgNactzAY8dVepqaiSD9SPtKrcCjQHZew25PAno5dmBCptbPEUGwErR1ky2kkm21vtW",
  "key4": "46ZnZuUKnGvz2bJeoKiaenyn6sEVdaRUusCK9b874wbpy5ZqmGLEvwieNYvtojkShLostYzdsBoxhhFBJ4vQKLyv",
  "key5": "3bKsU2DUMD26srazeN9xZXbevW4SQ8PHEBFLUk6SnzEH2MmF5pw7ZvMWZoPxs9sAmh7AM1cXoGt9o5FxCByQtKEo",
  "key6": "4acagMri7qqCPQP9cUYLa8v7ZxFbwy2AXDwTVzmHvXTVzvh5UbeSWxhpZ7sY9mt9xDWk6WDA3vjLJ2Ybw7fBVXL1",
  "key7": "3XPVvijDZeYa5iC1NnQWwuJ7acPFUQVcN5RjQHTJkZPLuw41AwvXHVrgABHF3yia2SraMEpf8JwwWAKniTkYmf1r",
  "key8": "4mhebatrGyCJkrSeFCifd8z2w5bkyQXueZSbrk1i7yoXgV5KQE5c7NmcC2guF3H4WRebb8tsE8byrghTGaJKcLg3",
  "key9": "2Wd3HQ7PBPawBXy13pYxpNKKzUqwF7cDw2G7PDXLNEG37RjhhpKS4UHjZVHTb1F5tW33VDEVuscdbHLGJ2b9EGaE",
  "key10": "2rpep5szfrtLRBs26HYi8cY2mxJBt22Rf7SyFuhRie1b6Jp78JLRja2fJdMKVhVf5hAbY2Pa1YjBM84xeotQWiT8",
  "key11": "LSPwKWLfx6KTacHQneqX7ba57uMTJ92rgEuvgJTZCrmhioESW3TsqYFCcQPtqz6gH4ioerWZdN8BGsXAJrhjb3V",
  "key12": "2smk2fEwhcMPieNup8JbBvX9zsByuUi4pBvYkoZf9yjv579zpYF49bFQxrdJePiSBMx3wh4KcXmcXXBUNUoHbyCU",
  "key13": "5C4LMr434cteHEAd3UU2wFtPSxYg8Uc8BbaVUS6Z4twD2y87bJS6ByLAVHXdQdkGBMg2ewPbd7Y7A8AQdg1LsUqe",
  "key14": "2TT2JduZQXgNttbNCqD78AjhoyQzw34RqQtnfQ2sPyv743pPLonkMgcQ9PsziNvxPcoRHsPGWZshPCpnebTyjGLw",
  "key15": "5yZh9w31pnNxtPA8nG68LE72FLZLEC9RKsf3KmHzJk6PUeZHDobY2KbzxZCB6fYLwMVrxZ7cvNhGRRTiARYUqVTy",
  "key16": "3iR1bK8WDZZULBbCGSQsW5sfEvjG5Qf7XJgv3qgQn8EsjFAURTCPY6sVrUtBqZtNS3bexZcp1Tki19NdMd6gGvej",
  "key17": "2EBpyzyc6vRCgEQXrKEC8iNe3mkQTUxzNAsv7jv9fWxtchBuFqL7QPBZpypWKhsFh6KdRsdL6ZB72udCnNnTAmJc",
  "key18": "65Ha4UW1cyEME6yx3wGv12Keydpstu176kp1c5rNEkgiuqTBTbPBKvY7mzHyzguueDWAYAZhs6CwTaVMPADRasWc",
  "key19": "6MLuRoZADL6Watweiht4BXmGLRUctCxmqY9oxEq6SSFvP8AhNpTwtMBKtr6Ee7WXwxQidoCK8xis33kRi8kpSo8",
  "key20": "64GYxUfvUFWg7ZRkCjtzW5kp4HLmnfa8Y9QHJ81LuA4ZCRJcL3JdKd2nttCheLAd72DwmAdJZ48n752f3KoGAkGe",
  "key21": "4cBBQA2pNJU6QGZnQ2udEUzLzTvvTaxTmCAnjwfmwhzYuUdYH9R5YpEnsqW28hmaAqj1xFAM4wDpsbZz3QAu7ARG",
  "key22": "4GjyCsKR8Vmnz8pVDBRH8DpHFtEnLFWH3RUxeXvavkwEmVT3wReJosQo59f48chJ5zFw5ZH6Kpsax4xYRPwAiqpf",
  "key23": "5hjYxGJbCrww8Jmd9uaaKzEn5Rm2wG8nuB2Yh6fb6G8EyXW8GjuXccdVpBAtzF2ZfqtDaAkf7ykTivgb1zsAhoWy",
  "key24": "5vD14rw6sVFpnifkBHvUXRj9oSCSjjTBmppbPpgrinRuXxYtUcMWrStbSo6AYQEYApwVBJZntzSDbRfuNsoexxzr",
  "key25": "595FkbHjiDoFBuu6PnDKaE4yzFvAzAPB35FJsi5gSRNNL9hzf7JQFTY1aduMWy7KU6VJjLpnERxNdaakX2REZHnR",
  "key26": "5pR8Sb8XEtTMaWEAYVJiCeQs81WViuvuvMbkF7hgsNTMYb5WzLyHDZ3bUqz5FGDtypPHLRC76gax7N1bWvLp4y7x",
  "key27": "5btAJdRDoivUvDQQ34srkZiQKeVkbBPEwai8LJhVD4Lk3od6gw5ewQxU59ooDT9mfjTrxBZBBwbWMZp5QNL5aY8B",
  "key28": "UFznJg7m8qL5XyZJ64eom9QE4T3QCcNQBjwfFnqUFLxHEW8qJTPip7R3yxwQNC6jG4hfvVz8swRz672MU45XJCN",
  "key29": "2KDXNbbTb5GH4kKu7MuVTAQdKEs9qZ5AMpLBt5kbW62vVcH5EDtGC2sYj96WTwjcNwYBH6QFrXYH5eGH7GXdnxeD",
  "key30": "3sszZmbaHmwCVk7qdogvbYwnwTyZkN5MGPiQwozCKMatduibie8uUnbPHxekLxNfr1oTBrhtvhgeTqNiPZMWZxhz",
  "key31": "PAhZoJqJ6kiAKpCT5KRgiB4W5w2th3qErYeDs4qhtHtdCQrx3ZePcF7AmHgk6ZssRRAjMiq8juobWZBeGiu87vo",
  "key32": "3D1aiMMFT83b3QckSfEip1D7xwf6vs9MdGmm7eTSkFtKNF5MHeAYKztDVWroJpifyBAyniPYMYp6uC12VFbvE7xj",
  "key33": "5kidz8e9r5cMHvUHU47DL62jebnEVBgihk6rA8X1GrvGvDrFYBEpj1bUHQFnBajCaVASFMmrErdjn81erXc7M6jR",
  "key34": "3U9FGZJccGcdDRjqNvYNvGvMybb5oSiGuECwC6ETDsNYkucnrbHqzwhYLy3Cy3jvib3BAWshT1h19SdpeYVrYNSN",
  "key35": "hzz5N8dRNEir7XZS2tjVRBdTbbHLRDjkoP2UGAufhkBbj7vpUzMFLSSwQR8mapuRXs3tkiDCavE6TE8VS8z6tqP",
  "key36": "4SCw4ayVNT8tcdVHSbvugcgifFJ71kJu7apmvGpiyJgg8fneJTFWhLfXUwpD5jxN2HiSoQiRjiJ5NCJuw4JyHtyP",
  "key37": "4QLqR7bzATK95njcsyAmUcFmygN2xdVcqQ6CogaZkvkfLvhYeUtwxaR8SU8X8fCykyrwZAQRgdTwjzzL9fbQa2r4",
  "key38": "2oBVp1NwV1fXqyKu5pTLJqCRvDb9266AbCQu8Ubb4yC7V8DQBWQNKUKq6BkKPeim2RWNb8PthMsUkuw2pq9PmCkn",
  "key39": "3sMTcZZRhrAcK6hgT57a4QnKGpN6G8tPgcBNDkW8kmZxf9o8GYbETyTXzbKqVrT1Jjnn5WNZvbxFLjY6NkV2xXun",
  "key40": "5T97QbWWJmjfynWpUePHy6XkVMYLqM6Py5Jju3NNycJuYccmhrSjpjcSPoG46Yy1XpSjZ1g7LrHvPCyB4vugs8dD",
  "key41": "52RVQ2jgjVF2RuMrf5D3vtXJW3WHue5kynpKAPHEeidV7knqy357DctXPe3tHRUcpeD9skGiWKPazwxnE6RK8fwT",
  "key42": "55kb65KgwgazChTtBoWhJV3dkPozAADsgDhqKdxnWveyeQiuzC7LT6KKLPi2mxAGpwvZ1VZzSquvLX3tb2nc2ZBi"
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
