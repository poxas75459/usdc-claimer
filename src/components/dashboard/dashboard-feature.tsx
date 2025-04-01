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
    "3hEmnumUi88twsyGP2nCJhqVCRhLh5Tj4ff1qft3cxVBP3kJpPsHV4SS8YFEvuRMJ1ecrTeRe2UY5Pgk4bJEQi8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hutZ2wG1woxgULs3xQvo1ES75vQky6m1WERycQAdLqmwVWtAbJLDk8BAnbj9m8LXYNjXNQL1oYRncD66iVWQUxt",
  "key1": "5bwqz2LrC34gcX4gij3zxrq7zeS6m1YxhzDAKY7sriWZ4V7hGmT6gaYo2HZ61qDsHXa6Hrh98P6Qrc9dSYku99uv",
  "key2": "5GKk9qxec9GGMDoncMdcxQZbUYj9SCpUtsBh4kq66QuzLz2ekkEz6fUQbLmYvCByWd7Lqde1Y5DwhGJ5HrVuqyQP",
  "key3": "feQXRimgms6qaN1VZFNwm7qeoJ5mmbW7WFmDgDWBHxnfzXmeVhwL1ZHv8ox5HzhdFFTZarUDQqvHHWFj9oCsNSJ",
  "key4": "4VvdpDunAC6bRhGgzQTd95aQgx1sDsu8h4fW64odb42koxhjAYh3QUPK5d85XEVSnCYeX9YBV7qhkV5nj5P9fymM",
  "key5": "3ha9cH8AF4yGZftpDRnhAShFthbWzy7yXCEbGmbvqNSrk3KmBAFb1oFCMgXUfdw1TTRcL8M8DW42G6uhoieuu2jL",
  "key6": "H6MNYfxX1qQ8zBouHQk5iLRb7YEyEKHmh9TMPvdwN7aKU6ZbVceCzsEKxKGausg7JaCzysuF2hNTcwLgNTLPyMW",
  "key7": "3H4uXb7bbnufapokFgg2nRTR1s3Hosxdpm7x3XWmQcTKPfmdZDqXXrbexZ4xy9odyGeyjrkFEiHXttnarmN4tGRg",
  "key8": "5yMWeYGZDLTDvXfFaZxcFuABKkxTkQqkHb2qubHJHPthjm1Eo6kpwcGJKeVzbmXfu5jEwC5wKG1BBFrn9iKBaoD4",
  "key9": "3jJCQfX7NJLcKGTmTUqsd2nnxrbkVcNHdHRzcsurFEiX1ofaWwCUdwPVq1WxJyqpoY7dnJqJPpZkMo1M1ZpnM54p",
  "key10": "5mNCdtzFNvXZCepb6LBwfAXHRuh7PG8Ntn1rBg21zQWAB1rQtmDWar6BLLhpFpYB1bGpQKLLZZpAjUXDN1Mwxg58",
  "key11": "2dKi69skJgbCY8SnMHMF4zBwnQZjWpGtHoMFZf6tCdSyEGcR25ismGio5rp5qfmYT9yRU6BS7DGBLqwAMrR9MQWF",
  "key12": "4yTTdkJ3HUiDDnbYbEoYDvkawK2176TqaRuSjFnKcj39jQwKB97RsaDZB5sTuAN13quJ6UhPkQ7THxNkEfmGD6XH",
  "key13": "F122QX2Ne9M8gnBXVShdbifzsGqpqCGJeb4cwmiUMYwXaNAYQ1S8geix9GMTEgCfkBxFaex3iFdPdJu7bZ6YH6Y",
  "key14": "3pDULvs6eYGDoXzaXCsJEYUWuohDXWCZuhpS512nG6yGxKUjL2CKe9nMjJCZZ2tG1oBYUYWwM4sMwJfmWA7cvJA4",
  "key15": "4dXuWb1sxr82isnhzo7wdQYaXcG3AhyzECnDSdCgjZeX8YEjWa6Q75h1f4WU4jh9ox47UYn7BYpxoPsZtkSG1326",
  "key16": "3DTnCuSscz7cJM6ntmtwTvsig1xAMPhbBL9TPvhQPrzmXiT8nbHqoAk5YAQRvRJZ15FGKQBkxqYi3RN98Ao5db7S",
  "key17": "xBu8LWfX8MsLFSSBEanMGo5JkGzwuMW3w8mGVdV1WmdYaZzwjcDrb2n8DT4BgvnyPuEkgJmLhLZcGVDpwFnaFst",
  "key18": "2m5Wzi74oWawKz41c71GGWDrNSrWs9E6n8TkMX67jgXaEewyc6oBcUmZK1PLJ83fWDf95SQQRzZL4xB1LYVjZUKe",
  "key19": "5o7TBy3Kdhmu6GeivbREWdJZQSczqdeTSt8bKH9DhdaZSic1neVX2whQp7k4vzanWP7PTz1Lb2WLg99Ms2W8vepS",
  "key20": "K6cmWqShDMbUFHuGKip6kQJW3xQ8phepL3fk8iUTTwxWxZa88LuzxYNdrjuyvoFpUmpTGHCn13F3MTsru83KKE9",
  "key21": "2itLAXgE1tEXifZfZwPrNSUh2PhEqJumMhdNR7C6tEqsjpFt4s1mdph7Xd5tr9EMiSsCcHpZVpQqWSy5r3NZkDKD",
  "key22": "5P9VZxFj9mnSRBp82Z5zthAGKKZrDn642XqLXxBhRqCaoFR5eTbHKLjhpko9gFNP2GUnrht6GNVHehNhi5eumi8A",
  "key23": "4Cu4i44eFpWpQ91SxK31WfujswGNgWr5JKGC3m8TRruX2wtvmCtEJrYfy8tywhnJ7FYoDdGUthYVkYwX6NDD3Nuz",
  "key24": "54C7FoDH33P2jm4ZewiZPv5MFbCAuKVt2ZafVwLBAd1sWh1FmoVmTHw3j7SDK4bNJwthhJ14ye1R88Gr6HoGiawC",
  "key25": "sQvxGLZBtSihBVKyhYLpsevb1b71kFhcwdfi1xxccYaTJoxcTKQ6z4ekWynvjavfY7x9MQfdDMggmheMPtCdfUs",
  "key26": "58CgnN7cTrVvDyGwRqRQRBkzCRizj1MZXvE6YAfwxwMTsizTN9Mpz5frXax5S4szf6otqSSy6zHjKMD2i4gWH7A6",
  "key27": "4RdTQiqota5PRHh7FTG6q5Yip3sk2pWc91mNyQ3L7yN97LTFwMYCkxB1LYMMWLJcSrmJ47LrusHkzSyuXA7KUp6t",
  "key28": "3EN481MHzYKor1jRskngGy96a8G8v4UFUMGm9VRiRFwxb1WnLtddTurCwXpZRawQbwuh3xHVNidQVdsFc8RjaPq",
  "key29": "38S9pzbNNmQYFipBkbyWcdPr2QCVd8GQCLLfYP8KpkdqZ85rPBK9WMSBuL4Uc5diXVTqNqjRewYZRQ2DtmGNivik",
  "key30": "3kmyHBkxnx6XTLMPYiNZcGHTzuUfsFLV5xDxkuXAN8rNYg9f9b5Pf2wWsTv3VXGeKMU56q4vXDaGeqmTT6apyKLH",
  "key31": "2nfFxQXNsucr4rL6d21YDo9rxwVRGgnVGWnDfAAGvX1ALhxi7f4mzccj6q48GqY6EN4H6iVdFFHmXYh9PV1VNYS2",
  "key32": "ujtRPq38sttULKQV2bwA7P6zU9hFtHuyh4xMQe75aRZXo2KPFD7yXrYVEiwn4U8uPqzBUWNbaHZW5aecXtAwNjR",
  "key33": "U6VWd6inMY4SCJjCFmA5H17Lakvx83dkcbJkqWdEto3MMxn8WWodyL2oPz5PBdpGzm8dS5UFijScNpTbrfgex35",
  "key34": "2N5CGMH2RvL6zi7MYM5kNUctY5YERbWwgCtAe34pTgYeV5aWwCrMB4Cd2nsb233YYpsUk6YLNeF7tiB2TESTJV6m",
  "key35": "3dwtdfYR8RRrfvR6h1QcE28Go6DTdGF9NQy3rMQDDxgaPGhd86KnKYn2JthXCFuu5NTkGzapwUdhM9yxRczBzyvN",
  "key36": "SeQv1Xg2fn4kdq6fVeFBUU2cjCzredhEew5tKHJzh8FSgM3KusnQe1qpMJeuBhUUQwyUUAYy7WrjSz7MAXKsWyG",
  "key37": "3zKoRKHusrURRkeFWwSDYjvGCbxNszCmn45u7bdt2wdV3oA4Lopzkz8Zwp4VP19SAYsww8kfxPsig4qx3f58sxJL",
  "key38": "Z8gUUtKSjPs5ut8be8SWP3i2rJhcrTCJjbpvKSsbXgiSFgWMUtTVaCnthKCYifpDNCTvHfQkY6AUjCLbTWpDDwM",
  "key39": "AgEjD7KWaFAQbF3atnW39U3vHUxAL3bXbJS5QuCXS86YrCjARPYdnwgA65AoeKzZjF8fDgfRGiKq4iqexzFVVPw",
  "key40": "35MyjRHBh2urTqvRaBpSe3qfybMhHQ2bRF9R8xuGf1aHoYksBZdgzd1fgADWVtz8gBr9q2RRFbRora9VSQgXM1QB",
  "key41": "3ZHiuuL71vXSWEUdb63mvDfdagBizW2TDwsakdsqNkZRX8btufQaf5yXWT5JgC5aAAcBanue4fnaW8Uuj2a6j5Jo",
  "key42": "2dkZeaW6KExGTuswSyFfLybkFL7tsVMdZuhrMXnMCdK41gtz69edFYmjJJeewWMiNdMx1nWcL5Gai1FFhAKUdPG2",
  "key43": "4EoSuQHnUT59TofMTcc1LqreSmXzmjachtac7xn21MFAhUutnFkvfJemmz2xPSTiqYftAGzAbzmi8LaT5i7RoEQG",
  "key44": "4fzDviEgNRZ76P9MY6P4Fg7VsDA28juR5ALp37kJSfqqAG3Hyvy6VLzVcTEE6PNfCFdmUSWpMZEHF4PSi5c3bWxB",
  "key45": "3ubnRAzGzCqQfRW3KMCGpFpPEgX5v5Quo4chRByCWsAwjkUmdDBeDrezXQPxdCVDkmAKwoJdon3ygQhfosLFk6Tw",
  "key46": "2X4iWNxawNFLQmridCX9XgVS8TbAHaJ7SspxhLmf3UVXvnAgLo8jPUpJgYNfLH1dbCuoicpTbd4LcdXNGxV7LsV9",
  "key47": "5FnmfTR1eLjrQu1ddwt5vSTcMwwduLqgYoyT9RftM7NgBEcVuzx14C68aAXUd7bQwXmANrT3vr5LCRDddoAoiU9T"
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
