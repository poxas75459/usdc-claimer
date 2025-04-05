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
    "4Vrc2Lo9kBwuQfPkkqEUgMoxhxqR2x9FvxSwf2JrKeuCDrKKGtGbmdNhcSToN7uxMWRYuhH3Dx15ZoYxxgG65gxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wem1PX8ZBXRSNKFVMdYE9gm5j3BDQZbRSN5J1EHXyncrt2avQPu1oM68NcWd6Q6fgMEU6SDHiATBFU16oRJP3Ni",
  "key1": "4ebZKeQrWnKBtJYDvznDYPq964dgayeMxRqf651W7UFxUYrAweT56aJrTVXFkdyszC1oeVvEsMn5Kd5iUADcSgsG",
  "key2": "5A3TiPsV8kc2juZmNnXhFL6FDPLcDcRfM86BJJEL1h3vKqoWXuaoCbqsJQmxJP8G4njffntpvqfcw3t41PFVBPjC",
  "key3": "3Ksavx53S9GLGLe6noUAcbp3UNKXsBd5Q6jedvedyFBLvdbRo6M5WUNLirVyjndXymSTbWcWofZGFJFtWt2CN6S3",
  "key4": "4hdUDehhaBXm1fMJsdsA9Yc6F6dc2RYQ8c2KDfu9eeP7DwxPvrbfNBG6FhxpgyTNqF7toqajFMEHXRwHmyAcTDnD",
  "key5": "zKxW6r6ubqzJwinNygDrRAZSLUXKeC6o7STi2KYkSGwwy9imu26qH8J87Pac7fhSzzegeugfLdFfwaNqEtQgqse",
  "key6": "35CGd3zawiuC6m4e1AzwSoJQDvUE6jG5mHNu4z95ZumGt9abQMjXrStTWPYy3r5JN6Wybn74X9v6EXoydvE5fXvB",
  "key7": "276sxMkS4V6dXRsaAK8Zut1r3zNJRmLXTAPQemhzYsPQ68A4xZ7PevxeBety6oBVPPv3NMHHQnPXtsuyZMx2qxCx",
  "key8": "3hdD8zT1FEsWhJ5G8xxHfSRYqEwV5NMkxveap8q9Don4JKNNwQRjJ4Fo6gbkSr9qUJYhtMeParPoR24fKUj9tSac",
  "key9": "25Ds3D3VSCoApmNJUhYPkFbUhhopBRvYoV8CxRsSDjfxXy9T5QUudeuAN8hsYa55VDm1oKjhRPq3JYKbJMibKhTD",
  "key10": "7zTMs2AFRonVoc6ofk5UNei6JJ3B8AYSMnwfVJcJBmvLTjFNZkWjvAUP2U2LSXMQfqUUqSWH3VmfbTH1UaUwg1b",
  "key11": "5v2tbvMfUujShxPcNt7T13VooycEJbfmEqEF9fCcLgmMYUhyytCEx9khwtuiTNUCaAPTzTzZoQmF3KJmSCeAQP7F",
  "key12": "uZGNTQd3Ak7iVyC8Fgc8Sf4qPHNneUZ9FduCr435eJaf4cwWeSCSfMuHnWYZBwfNmb2mzJarLrzDyZNoEuFfQC3",
  "key13": "ijANTdNSSnpsub21snZ5CxM5zFRCakAAMRp6oeFwn7Rt5ieFc97qRU8uZj3B3hM1btPum6pqFEiL753Bew3Rs7m",
  "key14": "44BvX7g36WPNYDZ48ExQw4vyj2agxSKBy18kvbid8xPsagko1BWyeqEB2wSb9x53xpvzLS9SNGXrwH5Y3igbKMqp",
  "key15": "2uwwUkrj4SyrqLnU6xQuQ3nT6cmkrkvv4p1BW86nSwjFvMM5Jm7YDTRyjzohLSVTZ5HDZtJYeNtZgoHaNMjRyFBM",
  "key16": "4H1V24jv4xKdgXCYj8DSnquRoaY74e1j1dSXVSUmBHffFqmtMWaJCFGFa7XbrDgMMuXBEaDwSMrHBaCkFacCdgDd",
  "key17": "3BmYZP7tNY2rznbRyPbCjBpyNgjLQdzmaC51L7nWz5HyE3H1n7GJxtsFBLHbfi5WrFiMTNofMjwJxPL7bsnrk1b8",
  "key18": "5729hytQCWDCEMP1NgsZTiSHxRsLBETH24oHNWK2Gng9zbxMnKnLCgB9hY2UXUM6H974AG841M3ki5UCRyyiM8Gh",
  "key19": "3kQtxvgHgAKNj25kCtXLMGXNiahSW11GPCwzsufooZF2oH9GzZ9UEJMB7GxNovNEzWVejbeS8FTFxhujpKjG9WpF",
  "key20": "34t7m7B7fJizcsiQvsGYT7YgpMqBeQYwkQ2qXZ9PpbR8tRPudFt7Y35dZdE24bNCyB1S4wfzjESdCH4WkkmKJiiM",
  "key21": "5Ms5U3CiZwS9jGLiJZG3bvKE4Ru52XQXzuUaQRkg57WfTmjTdhihZCyNEhryQHEYjUdt5MKgT7sNQJqh7AxYsAmm",
  "key22": "3aCntTvaNc61ZPGhMVGTc7nBrr83qpS7NMdH3gcaXf1yohU1TwwYik3Qo5NCWzUDMMMf3FaVxEQJeCqFeEt89h7M",
  "key23": "4g7Xor7wVsWNFdVfBangp8VecqXqg721RBDijzayQXB25tcjfxWve6R4kgF6LALVchL6yKVpEybATDSN82zUVmJv",
  "key24": "3ZKwbC8WpS9Lzj25rb3Cwxq9iNVzc3YdK96jkn77XoUWuM6tWAVnDAhZ3vsdamYNKwNU2dSpzZdvWuQdAJ8KGijt",
  "key25": "4myPgRgNQwkTikBe2Z9tQUcmfAhr3wc46vtrgfE4k6AmgJrRgnRW1qbvjFhW6rixYLrVinKHtEsWdNMQ4BUD8gUo",
  "key26": "4yW85kaJXy7BsCqLib2HQouoFMb5DPz14jgD3UFkS3s8iBSa1wJWhAiYBGGqNTMLby6R7K8BDzoKjZ6Ac7t7PeiC",
  "key27": "3djiYNEtMFmiGytgPn7gxA6UF6RS4RGuKztm2VkeEPixJSqJtRow2hdZDsaDTAsAbBQBmnYa19svRiHUNSbtjvXW",
  "key28": "kjZGaFUVLQcKkQJ4k17NKMoGpj4srt1wZwAYy1JDRXcxFxbrYUHeMy2XXjokbNV4ppTKrGVTvFZ81qTS93BmzLx",
  "key29": "4K2wcWFh1cijjAnF7TTYRGWirEbdjHTRcwtbyVE2oiwhfA8jmWaXJ9TcvPR9zhfaQ4gW423wYHbjCXL5hPpWKStV",
  "key30": "4m6kZR7MajwYAxb7AaYQiwG8amZAvMACQ6urWi7MvW2iCH3pwiQKdLw7pywDee7EGxar2mmEnuyySBt26Kt5qHSs",
  "key31": "3ZrzwbSSS9YM9fxqoDkB2u5mx3wBxBvDSKpE7RHM8GqDaGrbU1n86u97o9Nw76rgybyg8RMGSfAFdC8nNmUuu5w4",
  "key32": "4jCy2UxcHFuWfDmgGpKEiM7FzVNiKnAveUYNidhwKvaTnPZ9tnPZed5ELPthBgst9X5Cs6sDtTSAkbh8EKYsLzqz",
  "key33": "5sWuWysBaiCU4uKC26Xm6HzLxUhEaAYnWrbaoTYy1AAjVSSMs8osfxDUDBKiSi5PZUandkBqdZBkByqrS65X5Xaj",
  "key34": "29k5SBEVvkzVTdhvpCazCMSHgvcutssrhZoRtDmNekZstmmANLNtbPVvxAwEeCCaLer6CzuA83xEpAyxETVyng9N",
  "key35": "5QWQgjQq9mfcQcNvJ5FKgR8Kg5N4Jaabvt8UqEsyunD4YYMwtrUHV7dLr4RniKcHzwifjeA1Ykc6poasJ9XZD6dZ",
  "key36": "5rTrgxKJaVrzNmnjYc6yuRSgpF6GCJMGbEgB39SBby5aDg51FiQuSTgBzboVz1w3njBRUPhBKAxsSs9imwnRbM3m",
  "key37": "5EtHLFq4v61NYk8mSi7d8G2AAnrUGDcpUfrzmQbkVicGFzH9Dh4GyZmZ1uueKroDUG17S3sbrrtDo37kt3ZuDSEH",
  "key38": "2D9Y2Znw2dQ7vMgsbwDVPTJZ76kKCqHTArhKTPU1bF1amztncyRavJEsYRkaVwgt3kWpYxb582QzYHDyr6ZjvYDb",
  "key39": "45sCspoBNtK7xfQ2nDBnkzh4gnMDV3272Tu9113cndNYHeJM7MJfhUhwARh9Aj6Ehs6bN6jdpmiUhg6t3N9CkMTB",
  "key40": "2qrNxQ4bywB4s3caeNzT21dvc9TE347Mcj8CKPNCDM2sWqa625FPsDCiTy4td2u5XeeuZY244DxcQoJim53Z4vBD",
  "key41": "4biRHoUnf9M3Hq7xDEBEbTm22B8JyHBiffovQnCuSG1UXbRujgUk2NvUAd7MAuy6wPQL9gH8uH379b6PM5Tur6KX",
  "key42": "4XaR6W9ASceC4NaxMZabzu79rUTi6FCxYXCFArZvdEEJvS99SRdF8FEe33FEnimzX9SEHARsgHqHiEkJTkRSqBxv",
  "key43": "53GukLJHeYrncnHE6imdo13NAfKrj3Xot5Qkf4pwVh9YW2ZrCyt8u22Ma7q5tUKDBSSJ7JbdnKp1PJubhYvfZR2k",
  "key44": "2uuAvZZ1KofUY9rh1a7Ecx6xPrUn1HUprgtdUzKGen8cYBU7Nm7g6s9gKNvRzsphhcqAWmPCxXm2Z1H2BS3t2AaH",
  "key45": "4r1KFQTWkGbNfr6GuD3iQzGjLDnETUZLGNcToU1w9z24bjQAt2RqqptKeYSnhhiDvEZtyXHERBHutf5ACVVqp8bh",
  "key46": "5nd4KXQkFHsGuR1CcXiGueXQVSKmrv1a6EkE3TtzmxqbDvLJBfEjpGBu2n5f9KAfsQcUt321JjcFTV5rt2XH8Eyj",
  "key47": "5Yri7BgaGUaGRi3WeAudQyQp5fmwQVBU9G8DYYhHki2hyhaGuSwT8ZB3MYFPuJ28m9gbJueQe9WBJLSRFG4ZaqNQ",
  "key48": "3xL71J5oiRrGyTQTqPC95g2DdErQN4cUuo8uTjbmnP3wHz2995o6gP3JDAm5NYSq6Pby5PaVWU58i8qypriH67ZC",
  "key49": "4jEFuXdiS5pHvL9YNKXi5Pv3XJKY2SJ4NgoWxFakEdCWLLezyeMtpNAvA5bWmckukTzhaV4cBuV7LRAbNNJWTjL4"
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
