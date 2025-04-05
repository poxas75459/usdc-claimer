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
    "K1WifQ8DNn7FaRyQLCJaiRamHBvi1PPBqLLwT7UxKB35WLwkTK13KrUeta3HdJr5KBq9SjMXsMvRbtavhya1ZJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wd8zsZPGUxFYpHRiUUWj7676eSGYpBp3n6Db8bATzuy5p1iqUfXjDvh1rU6qK8XJqndmmEUdAmhbLY7KF6q2eU5",
  "key1": "51f4LyD7nVKQKnYRPxd5DBtmK2z4UGd92zBUTdDhXf2X8YoBjmGZyUWEzNZkbiWweD7tbgUCGzDhzY7e5vx8TEUD",
  "key2": "RJP9L5fg7zKipg4CuGwJzto7euDVVQP6CKX39hak4JEqYyNpsXHAVR7vwwYEHbEgYizAYqdXcvB1kncFXVE7om3",
  "key3": "581x9rPkxbWdrGQ1uujAUexPBWfauKZRuVjhiJXcFboR6ENnY36dgUwEofNAq6NukP82Z3k4EDVEKB61eeGQhnev",
  "key4": "4aEZ8jPWAHmSJMha8TQbxVpsh6LencAAN7FjbWRFqpscewsNRjijeS57FNhTrqA7bYxwppFgpLzHJjVwhpwUNvEA",
  "key5": "5d3owbg5J1RiFZnVVgHSZKufb8figQ1WJeSpY8xatqFu8jZbyj2mjjcN7MNpbEFFTaLpyedbkU5S4JMzEbqndhxN",
  "key6": "2vRCXvGmUAWsq1PXciMbTGsVH6Djj5rgFycKmEpCfGxPuGsG1NfWM44FU8ya9jgRpmtoBnquhSKvcDhFKWF2V7GS",
  "key7": "3qYHyg1zZS4E9VGcPjoT7pZ5GyHvi35K3xttvVJ9HSAm8QFSpXe4VkxukwLYSpcAz1GeZekiJ3L9fkwNCTBryWdy",
  "key8": "gDAZkowEmVosjfkJBYYzAt2Bqsb1bstpz47EXc8BWGXsm1v1jY3T64nRBqDwYZttYam1asRBhHbuqRNrpU7DGbx",
  "key9": "4gnNFZ5BmMGtd2CtA9SvGiDdE9MHNDXcMe9yZiQQ8oH5EjP1UBgVpwWS2ZttrMDYPBXLb6jEsTFPz6DRPSCMzJe7",
  "key10": "4LFJYWcrA44zwEthJRHD6mBDN4UNxqPPcy9f94dzWZ2dSL9fYhVF5cBzGnVW4TovTBUAyEegScoedBr9brDoQ71W",
  "key11": "3G3EvLAxBfGRzWLGMrHri3KxtVbwLyb21BCDpdeo1dthjBxt3RFFAN8LxmJWPUN6vBKqtMz1NTzGB9HWjgtGcCx5",
  "key12": "3Sb6VJArXXjkWtuXNTnZA61GXgrKLqSsigSg36kqpTZghXJnwAs7MdSY5dY3w3PAi4vcT6rRWiNTVurb5oKKdPA6",
  "key13": "32JFusH12Qv2AuoYn7f4xaNAGsvcRxngo4roRv71hgrkZMb1kddLsZ3FUVohiZS4DPww9Z4dmBpJVKXv2ZSmPk5o",
  "key14": "2egNbQmKPyhoPBcQiAtiyA1SD1Lv7jDLR4DNiJeucTwBnuJ2MpSo5CTrvonuF1PqhcUJEH5ibqFxwJpPVvMiTw1x",
  "key15": "3Y8XRaYKnMqMhnEVNDH1dM1VHSfPu2uC9mghXhppRUE9TGyQrii8hBad3YmM7McpwtPYB4Rjeo4kt6io8vUEyiWL",
  "key16": "5N8cfLgjrCbAUV5SQciwffjojpzxHqqrn8GBj9LnSeosh3ENDcrpxyjVAm4MiKp4uWPWUEaQGxEvRhF5fmLVsicZ",
  "key17": "vFmtApPZMMPXGEseN1xCnWaU2sCVJ8gksrSNS79SSNrAPNJU7Prmr9XDpqQRtT1mn1QCS9zGFU5YidYXGFpHTEh",
  "key18": "3dvB3teaTBofsQXnLtq1g3HZY1cbizr7cuK3S3s3JXdCZfa7tPZMauf2viFEtECakbjr3rojcANRwFTB3cRgKHtW",
  "key19": "2JudTMmGqkPF2ZNc9y5WY38492kyrfjkBY2HRrAS5AJjQT5sbfgVuXJHWMB8ku7KWjtk2g1Zqjtjst8uweqvAerC",
  "key20": "4J8vfZfqvU9jWX7sJoTMc9eMDUqnbxabKfTZCNbyQH5xqqvN8G5pnNgGBpg1MdSJyiYFtCbpTzNTfW5GzroNZjts",
  "key21": "Y6Zr6JPXzUXeLeJAb5SvCD5P8M8JTdwY2xa1nyR5Bi4F4BFyiKdYc999qYY333ZX5n3V2xbafi9tLgjyNTDJPTi",
  "key22": "3kedTUxGqvhCe8VXw67XmYgMpbxbezTgmC3C68MoxPwLtbWG9wtoqgyTzeKkjtdfNtDVP64rsLioJenEFyf3YKY",
  "key23": "5JZsZLiz6vTZZ9RDNTziqtBcEB5iQ6ySSuGwWwLgdfnR9XoHnveDggXQHHoLpv8GWTR4BspjRyxDWMMuSFY77io8",
  "key24": "GQABeqDxxNRgqpKJruYEu5Qy1pX3QA8redBsjwvD46scTNn5C4Jyv8jDsFjdC594qPLSXWPrhsQLjyoTmWtfkb6",
  "key25": "2FP9G1nWaPGPFDcAcrcuQusXrs6kdaPU6go2WoF42v4fSrQtn8u5JEy1zWeXxnGHqZStqbccyjQ4ZXNNR5niyyej",
  "key26": "263WBMseHvRjQm3m3VTzd2YgnxKTZUGAGNjtdcFViX2DCmS7FMkAAB7ddhKrsogymyRjwkXhcYsd6WuBoi5o27wX",
  "key27": "3jpyNZDTWQaL4yPf9o1YQoQAvRvAsPmuzJpf7c7CdM1iY1eLjSoj1KYaY3ggAhCr2CYhKEtgMkFoPN5WRuFMuq9k",
  "key28": "58e6pciToTejQ5tumWCePmp4zvq2gaH8SG99XJf1cHNFrNxx4b2VqVhzLUcS5gu1XAfAd2W2HAsTwoAwfMuLe1eX",
  "key29": "3AJ5WYHxR7tez9t46f9RCn7Nq4nMtoHiwUq15boRwwyJewAsvxLu3g5o6oEvjGqqfjKrbZyCaSB8vHQ4Kz2Dv2Pv",
  "key30": "4XFoPKXcpRbskfVrT8iZgWMminPw4RwhFxDteRsPXNgRBXj4udaczUEJuRGJ81Rj8vXaRTr99mf3dmhdneCNirR5",
  "key31": "5Co4tgsvcMnFbi3rA1UtKsY8Sv7UwHNmDz3vcq8chSb6LJk9gkCr2XJbjakRrQLCJnK1ipJjUsp9YUDdECo35C8Q",
  "key32": "23pT8wUjC3dKBGKnJw9whumdLjM3RpbMg3G3NjKgkGNpddwGcKGH5T9n75QFHWdJrPABw8JW5SokBSQVg2yU4LQK",
  "key33": "2i16YyWC7RCSUXPnyKuPvVQEaftLnwehDEgSoqrF36Rz2Dnfp7pVyDrPVpWJxYXRsmbBKefYSqNojwAfNUVtcgjz",
  "key34": "488xyJ49L6wMiMutui2zNd7xrhE8SN72Znx7bmfXuXLEA8sWgW3EArBVtvfrEtHaZbpcvYegXeqrVLc9qfNDayuj",
  "key35": "ZKPdDKggSjW8DLB7bcAwXraM9Ky6PHWLnEmXNcoejiAkGNjwqy2wREYpT6ReuxBS3wEeLLNk3e5tcPqvxifPKQ9",
  "key36": "2fovx2WvDwvbmfsSRFhqaq434zbyN7jKWkizFzDezb5mgQDZwqX1WDNLKLJuACRdA5Q3EodXGFieAN5QrSocXEBH",
  "key37": "24DFGke1MBje9cv3VoRZBDfFo7jzD1NxXuBegh3YmwshdV2KnU6tQtBBjLSzGkbmwRenj8cSw8LBBrZHcYnwkAYV",
  "key38": "64AdNqBYQhHZU2WmTDMsR7W1avfazeYrA2BKNv3YWKDy172MFDzMJxcaZ28N6YrqLJo1fwJ96CQEz52JbM4cyFey",
  "key39": "56XMSVKzSzfuqJysa3eoq4RdqCceXheT8DngjgKy8pZ9XXnUp6BRMEmhN33NRkoVWre8KfTDg8muD1QcSk97SGA1",
  "key40": "xkXiUmjQ377A28y5f7FxnYftcYDHS7rLdn84uXs2RqapUaixbHsFFws2FWLmt4hmSKMRHssjcsXdAmZeaa16yea",
  "key41": "2rypZwj7t79ksxKEzZf77N4x2NWC2XKvqnTncPgBe5yRcVE26rNG3pUXMmFCooYKGGevYSBFSXekikVu5ruS57i3",
  "key42": "4t99hQndYjrRGvM4bVLDSj524uzB1QHsP5zCmLJhi3PxQytjVUz9Dz6hBs6QWQwPCadGgTRcBNUoyHDURC8wemm4",
  "key43": "5MVPoREChKCLVvffWDzip3ipvsMDkMQmdTvQ5YBJLwg9ejq1cacxkEof9hjZaCLGSUyRYpfH57i2vBveg1Lf1suZ",
  "key44": "4HMv4CjMBjxvwHFRaP96ks6zTYPsbpKdiTgH3M8WjRdbiG31hQSjNGtY9VGoqELSh3iUs8oKJoqkmbRdd22oW8pB",
  "key45": "LqjZyjmPqJeFMWfhVfWQA4B7ncb49sMTaUWDiZjY8hGfLvPa5vbXYDd311MfZLdiq9eTeRkUF3VS7ppT4fNZmJW",
  "key46": "2d3aZiyrDxha4edXPtLgbgGNKK8BFFM4RC9gHPhhHhErC3W3CA1YqQT4QLStB3wxQP14kRoUpQneVQytE2Kcnxjp",
  "key47": "4KjtPoUvYJVmLxM5vaZ1JShfmChTEYEPSthJkP3D4KNj41JDAPMeNZxb4Uo7J5p7zZ9S2SVT2zohxQ9RwiKrCH2c",
  "key48": "3p2AE2omToQ443k4zjAdQj2d9WNJ5Y94QGU99z5dDtLdAUcRRGp6oRpUfnXY74RZYkiHYKXcTjmLLSRokKwb1Q4S",
  "key49": "3rHqQKojRfqmB7XjLRU7xMtikt36THZpfrwoN6Q62bJgGDzWQej5LPVzkqJ1c6tcRbLbbKhbQvWkPgG2vCGoysrb"
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
