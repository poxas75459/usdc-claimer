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
    "56JBMgcoKFz2bP8gnxzSSeaipcNf1hK1WrgoaWVEqquEE8hF7vVBrigsfyQUKwkeekCz6cgK2wnLsxynjBfDYYDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hP1oMbHoktGWzkJmRu2oZPBCpeDqAuvAPXAYrgsKxa818NtqYddZYZmAR9qYkGrTrYGh9gfF5Kh2o8P3Ve5LEEd",
  "key1": "3rYvPFAEUbxAtYCith84GfKg8QDndcjjnuzbcATWtcKF2q9ziHvxmRbNHowvbcL5U79CiSZR9z2eZzAE5x1QYPND",
  "key2": "2X4NNX5M98iCecsBdxh2hovwWqvWpXW6JHc8T2iQ5QQhme4Rwb3xqv4HtDWxRXfYGA6gX8GF2q4ctyUmdLuSTaaM",
  "key3": "3iJ4WqtD1nxwjosJiCWDAKtS1jK7qhztXnpF8ugActh5uhesfby9gmc9NECsYiXvQRUNeKRvpuYd4GDcrRhwPVAu",
  "key4": "3edcuwa28U7LatpDGbHULZGH74uszdzQu6ZkPQqvzbSUnWXPqWoWJa3g3XMucWfWdE7ehTH2QRFXpsBYaaoKBSPX",
  "key5": "5ne24xCdnwJoM8NtJGvntfsWQz3X363VNQR6Yh2EGBG9eTTgdtgPtx2t2cbgFuYYds5HYFG3xknrnmPoQrpCfARL",
  "key6": "1wUthu2cfFN5n5SL9a4myFH2HgrLzozmmAixztGpFjiJ88hTAuWWaSCLdQWWmGLLa479bsCzev4efCqxczD2s2W",
  "key7": "4mmnQeLxpw31DzUWvMj89oTxnYkc3aBVzQ216TqaAeZ55H2jLNawF5GwAou4xdWU2D1WnEgziSAXku6WVVBDSFLv",
  "key8": "5PCD5m2kwAGMmKTiycCwwnrgXRUCqQnZXy6WyyzAKKdcsZqqjLqsJGQux7HvPHw5BEPi176e7CmbAtWEfmfmNvnq",
  "key9": "41ZAbvfqAaRx4TJqdfgXyBWU4DEMGqxEanpcXKrurTEc4SFtM9qU5ZfmUXty6kovnyq7ogGjHewCXrXfAUEN4EbV",
  "key10": "3by6tLpM97Wt9g5D4Vtm15aKho1gtAew9XZN7LgQ4tEF5fZ1hxa5SoCjywCT7NSchPCyBxwmDV5zkZvZ4fNZWcuM",
  "key11": "3jPZR7Ab9bzzWB8kzsbY7A6TiLJ45XxTeyf8q884vBPK8vQoJ9b6uLngYi7ZiDtZpQwpqcQsxpsu7p8dhjDwCG7",
  "key12": "4eHjSm8ASqD2qxuANiJdK3seMuLxpiAtgriNdUwPDUYyCri4A1LASLmN248kedYSzSukPYx4PacJnVrA38Beenu",
  "key13": "3iq1GGwC1EKcHLwwrYDTT782XMpgs3HECXW6x4cL1VZaUU3LHvszZEtTHvjtL6iGGApkHunB1A4psA9pA4KQCaJ3",
  "key14": "52udK6WZisTk3iU5v1Hn2YqVMr8cvWryWnGJ9F49HstNkRZ2b3fFT84o635o2kFv86x3v6TC8NsNm25RNt2goP4y",
  "key15": "44MYor9SCyKCyVhrLjFqmN5jjXCWu6CGyXwm7rXJfR6CoNbSZ6rE1ZcDSn4mcAyh95VZAR55Vm1j3aFTXnEAYuTy",
  "key16": "nifQam5HDvX96zPcNcSF1oa2QN5ENsu25utKCpSM47BZ3CqeaNuX1HAqiWmsjJrKkY9YhsygN8c7FEPdFAtwLzX",
  "key17": "4e3AReiLf1QdnLK9mfYbxgnRBSaUH7Vstiysn7a3u3NZ9QniscotMkF3KYUVByQpVx32SkJyEXc4otTEuaaCWda3",
  "key18": "5mvrp9uVBw7Q8zoJqLfWcuw7A6SM75jLV68MogHCHnkMMZp4RDVZSsVrdBzPeHYSKHMBr484GYbmMxRZEYfrJMU5",
  "key19": "2fWkR2mxugYdCoEr8pefuttmnokUqpgyWkS9sCCiaKFKgCdZuy1JK3EqHxJR1kTkMjSphejZJq4JerfM4HRWxF8s",
  "key20": "4rNTwwZP7ZXkq339RFweDnNbb72BMfVj1JZ6aW59xtiXQTVAQNPwwfqcbhQ3aVzyYCfsbL5BJt1s4Yxf2zMHNykY",
  "key21": "67bxRJQtUGfzwqfPjqXAvXymyKqtmLXgEkdPDHH8DdzBHdV6WFNWzKt1tkxRZRhihEbDtVUXqXfCcddG8Jh6adYj",
  "key22": "4cqvrnPHFz4n9WXRmsRdBY8EeaP3aEXPSHkypFxFApqycLdZ5yMobN5xda3Ji5F44ieSdLEWZYXNG8Xfe3FtDRx4",
  "key23": "3hSGmpmWCu8s7vTWZ7xTJEHYpuYzTJ7KmWvKRysrWbHChEwxERWbLDK1aLcaZzd1tDJ7HSDkLJjCdQHsR3Jese4Q",
  "key24": "2DaQxNQgyupHhcSbErtQ1uM16URKdMJMHh6NzTuW1PjNfy3EmyfHMZmSakaBjhWXvESvYoaXqYwqtMxM1At2gHV8",
  "key25": "BXKj9HthiAt2uw1us7QqYou7HLeG32fQtiAesBMj8nnwTv6YdEVznd11zhvKuVV37bZWn7YQDtXCf3u1LztfqG3",
  "key26": "38gJknxwWHiBQvkxStrsYekufiPRHWQVcQNFQp3FyLZcQYictUE3PVovz9GeHQAJnyTLhKYSTSdEA4LgjAuF361",
  "key27": "ii2UPULp86B1J3iMEsHzQxf8NDtjon74aGj7JSjg5qCBoBMWr9wtp2z1SSzx26bhzg1p3fz789GMREucQ3GGE4M",
  "key28": "KXoVHv5M5RUpJfjfbAY4xrn3QV7eYV2m7CXWi7wVZu9jeKyvnT4TAskTuQhwyzw9FrMWCPmz5tQLDyrUs5iQFnF",
  "key29": "5M92X2xG32hyEjM6hZv56dob9276CQTaRKXYN4E1iFmej4m4DyjBKGr2hHt6kNUy4oDgtmU2hadV3vmXrCCuRKf1",
  "key30": "4hh66t1jwBdQTaNrtqmkgeqXG1J7WvP7u6En547XXn7sWxHW6SWhhSB8e5AZpJzVgHLejMmgk7j1xP1qGevshna5",
  "key31": "4zg7W4Guf7LwUBx9DBHMzkrgLJpahfS7Nnd1prhR6hQiaVDukXa15vD3NZArRSQZhNMMcpTo6LcRsFPiXk52maXJ",
  "key32": "57K9VkfRGTNLbAbv7PDvC1JWMaTDjw9CB1UtSg8HQjyo5wtER9ULgpvdQYFoK88b4QGvwWjyx5LRvmvpZWrVU1gj",
  "key33": "3FkJpBmRUsaLLNVej7Lj8mu5wiDsJRvoT3En17HLdyD4TmTEmkPWF1rWgVm1xRBfgdvH1EZxdg6u3AsvRXWjRNr7",
  "key34": "4cU6QyHac8GECckFk4u3rj1r5B3W816FhL9k4Ta4EXuEeybqgJoJ5Uubq1CC8QaBu7g5DNF6tY2hHeT4HbqaHthg",
  "key35": "fDGvN4rJ97eD3iKhQNB7WcPD7ZmkALmPKHv4GVaaf1oDNQRqW3dc2Rpf2v3HHRYRBzLJRuEgGXBdAF4bdnUp3Bv",
  "key36": "HwST4zaMTon6i4EHQ62Fy6HJtqMv4gmkz9QSnh1pXew1YKbPAVEwLN4EJ53S5bVYaKCuCRf7mhFUiEqrEfLK9Lc",
  "key37": "2mGFwqYCMqrSBmn6YkLwvs4diHMM9kEJz9Z838NxgPXPVWqvQSWiM9rfTFD3iAFf7cFNETBKnZYnweUcTH9ukqcT",
  "key38": "5yYqH4fMv32UKTzcxRJxia13apG18SkpaHiTDVTZ2D7Yx337czXUi7d9mxmgD8Q7ipf2tkShadZjxNSw5Aq9Tmb9",
  "key39": "2iWbB6waoSQMg3N9PD7cgejMenntZKDFRU8ArnLvEuCTpgS8dE4oNWig87675x1QJWApuCcNWbfFXWyWGzBgPv1N",
  "key40": "5KWNwC1K7RLkSTrhGjLU57qpeFtvSsAZ2xCH2GsbSTmJRTxBWKWgvkeMEcQYYGTvgd82dU2L3dZxxFMvdqsYAfQq",
  "key41": "MDjWDMnXEW2D8zwSZ1eYQzMLAitCtdLTjuuAzSREGezuahZ3nezx9gvEy7pKxJsYFhPcKXBZwA1oeDoqrmssrEJ",
  "key42": "533hkwy2tFRTsi1VmaMXrncn7ydS47FqEdwpaysryWGg4P6d7N7mrYba8TJLAEfP4pnhqB8U1d4WJarRrCjfqNqZ",
  "key43": "4oQLuJoCfuJJeGgepcwFubS9e1sLgKVMYxbJUieTiLQXCM61A5AwAMdpCcsLCaf6t688dHrpUTvSpx6nehxJwXKY",
  "key44": "581Hd6H1H466Hf4GvfrCg1DCiCJNjFuSXw12taN84PzGGZvUCJFTfuMVP3t47QdgjVthhp7nPDbqD1BoZrgQM1Cz",
  "key45": "4X3QwZdLHiExRmzzEL4bkDonrkz4ZTdC3P3pzAPzVbsukUbdiTW4LatrFw5FcA8BLhWdEsMy999asCtSza2VKW9b",
  "key46": "KkfBofWJiyQ88g5A3tfdc83ZyUGhvsAsj2NmnaUvNf9zPx92yBQBCFBvS5j5CMNrNxjCyxobXmpJwzo1N8ADUxT",
  "key47": "5GiL3cTRaE1TaNqJ8nvLoRbMSV3fDJcYeLLW9E1pxaYrcv6kUGSLdR6wmmZBGRrD6fCKfYomuwwo4cBBKyMHGm58"
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
