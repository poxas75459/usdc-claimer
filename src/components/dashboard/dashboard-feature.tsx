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
    "dRKixh4mFEwujwWCmsayawp2HwE643K33i1CRtZuoZmHKBoP7QCJbSnbRfaUmCKgpLH7tEmC2HZodDA4R2Wgjut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SBtHZDPjen6AdecJKhMjJgp5FGU3yNFRgpJLa2PpembM4mk9UJdUWbfKs43NJXqviksJWH3nDeercNTo4xKMzH5",
  "key1": "3JuZ4oqea2Dz12yQ3AsDFhhxp7TSzBCcD3yQP3y4QDX4kuSK5GEEbTfbjCN8t7cfxxVt2bNZzWnp1ncRkmt9Pjjv",
  "key2": "GxWdx2VDxYj9wZuXfbpBe1G6fjZ6FpyqmcRNL5H8rmRsSG7kqysSzLFhi7My5biyfpsEBcDucFTdNEFKmMjFpno",
  "key3": "2cvSR7xi6FaKFmgEovtSftNxzAY6tp8X7JD1DDcxU1qUwjXX9RjTcgQZUkQdHgGDQS3nMxZerxGoZ8MDEPwaGvcG",
  "key4": "491zJ5qcRXFnb2Gb3xDRXzW2Z8DvRyD9zoDuDMAAjnVpNLVdxBRw9ZzzCK1xfoh5NUXfo2KXCp4CH1nMFEBUWphX",
  "key5": "3iEXtDitTquCbkXn8ttXcEeAZYUi5j4HRsrEpJbjNGhzEjpgHrneyEjiBKbokRUnd4ZU82qyQSCpeLc13hLZFfUu",
  "key6": "2GKkVuxe4irktLbMJQsvns8JHV84SHjQ1SAcKAg8RdkGzndVhQgyhptMSEfz61ejRELhZCr88rK6pGhtZgdgun6k",
  "key7": "348SJjUZiNAcyVqRzn9gWZjpHLvGWC941EU2hiULPwnw1hh8icfkq6Bb1MnZiZS5VwJNcFWURPBruQUJPuMoMHFi",
  "key8": "3VEHGSvEJP5xgUQLePpqZr1n6pKLesJohycR95efcyjZWkQPY9BeiLsGBtcAZsXcnkTihTY7rtPJ21jXduvMXKcu",
  "key9": "5KHD2gnQfuo5NMDuArRxUXdTPnZSDQ4WcwpGsRjzyCiudzkJuUHJU2p9UcQz2XJkqrkGYXiSHUs1hZALQSD6wU18",
  "key10": "2fgsAPRscWDTXoiDrJxE6LpNSK8vkpmBnbeexvSErLzr9XhgxLV1mTjGCptg5BzbMgL5eKaXYFkJGrBpRhkYvFMx",
  "key11": "3xp6yRMwcEr1NvckyvZnnwDRYrEFZzjirNKmQzxZwZMMNksw9SeNzoMsyGMKop35p5jBWSLNzUrNTYSMifnEEPd4",
  "key12": "2H3MWDDw336DsTJj3nB1yAAWTVS1fK2c5sFPFdyvieiQFgLHVLa8Cv4C7K5xcGYdsaqTVaZ9QRNjLf5S4qeiSUBS",
  "key13": "oaczYJaDqyiBeaGBJDRzhtpMcqqFCkbp5WePnwyL4u6wEynj6LXuozpNskgrH98gEGGaE5TJx5Xkn8AnjyhPQZQ",
  "key14": "32K81EDivE3o4MtxsKCcKctTBbp1fQwMcLstEtwFLPvLmrJrB116R86uD83C4cKr5p7aei7RBtA1hQaG63vFpuKq",
  "key15": "eM3ZwjVytX8a9T5FhiNsNC2J1gF3D7r94b3ezPopkiX4vTSGG96nkDypxKBdf9W3vEAoJGpSpzWrdMx9EmJZdht",
  "key16": "3izYGEdgpbMGxN8KX6rpa3JgST41sstf6y4AyeR2DhtLGwQWR8ucVpHn4FSSFdxw31gfqivYvQx5vjMScrsBp5yk",
  "key17": "32XWgCYUyctN3qv58KxJ6UV3r57P2jnnvBvAvPL49Xx3nHmbriz2k6kbTCNNELa4WL886G9mQLeAgqZXCaopjaCj",
  "key18": "RhWVMV1f2W5dYHbBb7fHrAT5mpLLGZkbVPonpV6bF1rnAEanpeZ99FVtfvTN38ahwomK5BZo6vSkLwJrE9Xw48z",
  "key19": "5hysBTY7DsHYoKoycyxtxT28cS3VYyEFriymShL8FcKR7ccAph7pJr7WD3Wq7TJv23kU34HmRNZ72ptfoLrsBNvE",
  "key20": "3mfuqpdmnWcv2QZutjMUNgkWb6Znk4Fek72uK6hRojbNh2yoEbFc5eUNAwbAP2t6AK4guiVsdJiweFVM5rM5n4zL",
  "key21": "3121rYegTeBXhp4uEnMytpmWzaZg5v4hiRQZfKtrTE5tQ1WRhsK99WxsRzdne9wPFFLv144S4wGEsFSYaJtqrUYu",
  "key22": "5fbWts7jWXmcVFbfAkWXwT2BhUj9mgLhDKUZ7eEXbmUQibXqfiKLUrGo32PveZF96eWH5ToocGL1aV3nHdDkrXyn",
  "key23": "4wPsUEsU6A9BmcDVW8YX4wfXs3Eq9pPvZSMciwCnT8CvawkanPKDUagD3mYY3GY4oaU4iuyKr84Ps2nveruk8Q5x",
  "key24": "635rqv8ZepwvQRBPMZcdbkfddG36u789cfMsVj3W7RneSGwKZ3fEemkQtuRuYUMXtY6z4Q9QTL7NdZkKZQUmjAEB",
  "key25": "4M9Q9q6qRoo6cfHo5hcuK6bihXYeqQo91xE4iV7xvAX5L6tYadFPSgVVLvBCDF8EBhLE2NRXDHMKuwutwWG1AnSN",
  "key26": "64Bgg9ttbsRUBwaYkgmWC9RYRtQAejSXaZDTYzj37k2Ur6XavgSHutCGdtwGDZym7vJftx4ZJZxK2LcwtJC6vmby",
  "key27": "wvQAa5bQku2xN7Fafh8XG4aAe3GvKdEA97RZhx24mF1hxAbfMeNxB9vabo8YBcgxxZRFZCKroDqHsrVYg9Qywgt",
  "key28": "3j9xSLUGJUcCkJC5PQuVn2CtgcdprZuQBJQnug8TuDxT1NdrJJvJHK4Bphg4YJS1gn8LXLjprjofCdWNSdmTqNcH",
  "key29": "55N58RoTVgBqZBM2caNWTESxhTA2LdcjeCmweZ7pATWEPdPSSddpmNyYf1TzUwJVPR9gv2fkB8fpjjSrad1JTxs4",
  "key30": "59jBFxKvi8vHsfcLLXbdU2SSqCWJ6USfMLBYARSLm4o38qStkEGgoniZbNFhEtuErwSC1aS2R1XKpTWKaZ69vJGb",
  "key31": "4rwP3viPG2X7wBHivVpVMTWBsBhvquidbrqBMch9go8phU6x3mk6DmqBc4ETgYwKXGBZtTMQG7C5UzibdzgH48Ne",
  "key32": "38jJ8pfcVzuipLt1Zt53Bewj2GZRjD7ki6znCgQF993ieqQMxEk8peMwJ125ShEDBMoQhqrWgZGmor6mB68uCP3g",
  "key33": "4H7B2mihnJahTLujkayc53gBTp5iPb3oeu21fqVEEax5M5HSxNaT7gDkc65MSKuiC9XeiENNjLRy2er2BR38Xvh6",
  "key34": "2S2DnU9D8LCuAJx1cyuZ4dpPbYk4zWnHpZqVNu2zQU6pEwFJgtgC6EoJN8c8tEPcxXxqwRowdjiFqXEXufQZjGvq",
  "key35": "YZ8YCA71ruMmBe7R8Wtt1pLFrsfLu7Dgq1VLoxu2xrpGTmhPXxAAa6BzaJqW9hWqm4zvnm63SQLYmribMFshF6a",
  "key36": "uhpADg3XcD9SJNnGjgYGzSStsssMmkiGRJ93Zyn6x4yWfcTfztpwnzDBPQRNNvYP6GBVrjzckrxGEJc8cz6khix",
  "key37": "2wEiktN6HYNqduHGpBwZU36UVNfhss8gxsDw7vUfzBs8pmRFnWwnuRGepg6EBSJddELx1NTC6SaKSZkMNoi3j33Y",
  "key38": "5D3yjrvRJXcKoxox7V1CnArbZ1H1yVBrovtxbc37mBuiu1kmjQP9gYtKh21WKX2dgJQ8H6JeMSyqta6GJ8Pqj748",
  "key39": "5dVEDfNA4gCXVhE9gy71rzffcFBnrZDsJNkPbVedxpsUoeiu2zQU2QBz1Rzt9B3WXzSFvXwzzfpJHaET1SwehMsb",
  "key40": "5LuzcMu7zjV3v7YRMPvfCueswDwZoNciZNybtnPquAGgxca6F1EnB5jHq3jnNnDZNDvnLTkcV2FcMF3tkcWwRDru",
  "key41": "4FJD4CVWP4jPD94BjsoSqHhSmXa8bDqoSvaBePxG65rzCEkVVtvZL4ogNMhMDHoZXmdQz4aR7UfViAN8tLEJLLzZ",
  "key42": "4gGVXZM48mf7yvfkmB2C2LNBhCZ6SXri2cx5ZUhQ4aL6Jr5ehZtaiSRpX9Z776hBvQAC4WaaJzrjbkk3RaVFaZMd",
  "key43": "2hq61inj1VcFH5e9xw7fGGVp6Kc7rRo9MhURqdZApnjcozV9PcoWNjPro6J26zmUBAuNNUBMdQ3ivB1BwNtmXsGq",
  "key44": "3a7zqQdhmic1U3n3mLCpaFqKSTaqEKnhvHR5yvxsmLUkxbDsW2n83ziHYFUHSdx1kVnWWpTzivkCNmmXzLkrtitJ",
  "key45": "4Xa3LZAa5z21MjHEPPwDtPkgQy7soLqUf9LWqLuzMSq1KE7AuowbYfvFU9mMp7LcrpWPiX3SYptBf3TPj8huk1f5",
  "key46": "E1Q9SSLVve5c2pAJkM44WLFDmJUyJVt1RPtF7YsGGC2zwTcmFGPC3M2bZqzveDGxqif8BXVJZbF1iP7FHwWSoG3",
  "key47": "NyE4yrWxdRt2sA14F7RjVbhrzK7TCAyEyBDMD5bMfc45eR2HH7v5kpVu62e2svuAtnd77GpUVR5W8F5Ws5H8uEF",
  "key48": "4MZwu1Sz5szNxpfgmbteTmzis3wEuGHEfumdan6NVy7SK5GBsHge8Kyzwkmd3SDUAzUBQwkqjE3Y9X4fr9wjnmju"
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
