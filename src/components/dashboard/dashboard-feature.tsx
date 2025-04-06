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
    "Ab43sx5jwfo9PSbBxXzcMwpHL1jLipMbnXr7DXXgyqoTKVDMoATpA5mpk2xhDCCGMexRcTB1fXxrcZurekRp2vw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fRGvgGpL8pVjp7EpVYfLpNUZpwWdkNfVN5dTDe6byLvgZ1nvQUA5qgEEgrrZ85CTZAuznQoFsYEZRwguiJMVDQy",
  "key1": "3duAG1iESbb8TNR3bfw2NHi99GbdeVZP8S7MBKcoXetdZyHK4KWvS3DLN3m8b5893AQR9ANGaXVr7amW6Dp4CgKn",
  "key2": "3SBRf62Pdf1U7Qo8hyXfKE6FMUQthA8LFd6MaXFfDTwrZNAomis5V6EtgA4J8byw7tNJ79SfmaKzbTWSkdJ5Xqth",
  "key3": "3vwiC1bNpk7gjfxfF2ufwgYQrQLFxvEbvCL5rzct4Gtui628ViqL5LpVSoVpsgJhnp5CAu5oksmoBCyDozzacm7P",
  "key4": "5BWbpmWnHmb5vsSfxyAFQcACLk55vUVSCA1AwPH4dzMYeRFbFuv9z7nkvHyX4zVqDevYpS8DLn6yQx7J1QANntHB",
  "key5": "X352BJN37DGSZWDZEr5v2XerrTL2khVhP41WerAz71GATThF2aLqkhBtUiCzBrH4ybNEajWk9yBJwTbFNdjWFFn",
  "key6": "5qkF1EYonYiTWi8UsK8FtKDAtatYA7mgz1ycjvrPBgFQg1FbwKQ5FDngcSUbXShTpQenEdh6CyQuhdfhKAT6QGKg",
  "key7": "U6maAhKdqzZnSPqrq2co24DKsAet8vgT657ThAfKNqgx7JHrw5boNBDFgMBkNqS7kVyYitrmn2EhV5qpc1RkEuH",
  "key8": "33APqNzwHp4hfd5MRHSC5UHc55N3ZxgP8Lyxsqqvub4veR5R5fUXt3zunGdWWBtPVCMisL8ZbMC4dKPQ1YzLEPmK",
  "key9": "5vBExJ8DBiiZ8arNbadQ4SDMv6pLkAKTqykNB2Y16vtMoiUURaSY4BNksEEM9HHPXtn74ndg9gy1zae7LSUh97v3",
  "key10": "3CkMAJBoZ69MCu4ht7yahzhRTsdJdvaPMC4ZrPcFQrSBABAxg1UCuiyyd2w4N4j6yi5QnXiVuYRXX5UK796WUai5",
  "key11": "3H7x8iaXp6VD6nGMajT6T3C9b7nzzfErHoJixZNVdfebcyECSBoS1Vu6c6EEdFVidtWPXEjQtuMq7dDHgpVUryDV",
  "key12": "66DMYoyyYd59pdNrXhXkckG6ddH5zKx4Man85YqoRt1xsiBiZWiaXocRqAd2JSH74d1oZhEcgYtYvB33PGM53r8P",
  "key13": "29i5fJJv44Q4GHQAM2G42EBo8rF2DFxA1W36bHWbsDyBbDb2jV9eQ1TE3ocHjpeFaQa5h3q6vjBV7pVyKPpFGj9i",
  "key14": "5a97rg8kfQmCw3MyWiYvkPiqQFxUWMQ4DFTXwsWQ8s1ZMM6pKGtdktQZLQWMMhLmbvYR5GyR1i2aR1kD4eX4iLE8",
  "key15": "4AaFyTRnfw8BGuEcpbo7yiA6brsN3RizBrWdvEwCrtoECxsUDEZ3RuiUCsUenaRQXRYhd88VfGBhxqsFJaCJgjC6",
  "key16": "6hMJJcysbmpwm2BpKsqS5wcxFmW59rXPCtg31dQqiBhiVCpz3pSqV9dLxoxaLEcNDX1tPMkVLx66CstX8AYJfad",
  "key17": "4YRnqsiXzdy3wAsXHA6jhRbczBumYZroDfJSNeJf8f15krrmBT5XYYNMRjLJxSy7RUMyLt435Ud2pPDF5CPXca61",
  "key18": "yvWQZQ86G9LA1TWwoNA5w5uTVvsQdyS3JJYwrsU6FAYpGkQ5GcgfdoSXMMBSdsetonDjSPFnhQSFBF9NiAVtd8E",
  "key19": "Lr3Awokp6ZGd7BDQE51VJGdXhXQTNdh6DSQ3gxMrM8g3AxJhGUBw2CWtjbbddLJtGqW2pf3GRr5hZfqm82Vu3BZ",
  "key20": "2tPguEupgiB3kMWRpysPQSCZBPs3hYZA86iwwhf7aqkgztpdt3UyCWfNxJfVyTvMfABFtqBmFtJKjPBwdUeQ2pm9",
  "key21": "3LW1zgEgGLEYLfehs31iMknuW9mKgKjvnQKZ2LqwH1YdtDXzFD2ekHsxjhNWuFeBpzeT6Goxx3UnLaHnAaxCNqCx",
  "key22": "4jGYtP8Zza37pgCScZ3s13qbecsfmjepFh5s8DvsCWRcwC7cyuBgoRMM6nptBpMJAxtZx8Rw4eTnBwJmi5K87Go8",
  "key23": "4ShuuqQjdvqrfFQBBrwzWo9TDemGH65F6i6cUWqiMqzwXRXcLAroE53vPUccXiyJESUWYVrcZBhVhCzi15u5hAcj",
  "key24": "2ZCeJYYBVQkVNdkozbbAoE89cMth93r19ZzJq1DnATSSvshD7hpzxyrT8WyDKG1cUo7QhEtNecp8adYzVRxtg58G",
  "key25": "2VpHXa4VzPbYh5cKvaHFchgj7PaEdYoZcVazw45BFHj3QmMDMPNNg8QnM6WXMVvqhagKN2E6jst68wRD7FwuAnJC",
  "key26": "2BqtNmvqAhcDrL36mdYbYGQ1RjZz5jcdgNKMeiVqHw2JCBt5arznX2GxDdHi3UPKKU34nj44ZGxc5NX4sXFbbuRL",
  "key27": "5VGPAdqctJoK4ZydggnnVF47axobkkTzqGdYpxzzhaqouYgFUToGGEAJ7SMpyTwixm2tkdkEkVbxkcuHAGe5uoaC",
  "key28": "2a5u9c9ajzr59FQJQ1X1A6vmdwCqQVNFhS8aPVrakYW6C6Mk79MgXmFSKq84Q6xyNphEVroWsc9XRfcyMQwscYqh",
  "key29": "f1MkoJq9q8bfJjHp9RafV6JaELiRBn2ShwBwAsdi52cJbqLNLnbS35VbKcLySpDZpLgua5qHapxfH3RG9kHANkz",
  "key30": "4WuTkcYK8qxnojeU2kftHefCf2UhbaUHyShkBQTQn2rCAACxxE12Aizsr2ZBXEf4rx1Yt7tPQCzKKoUxX167AUFT",
  "key31": "ZM4XdVCTpTmH4ozQWzera8WzCQXFxakdSM1U3j6yCyV2J8b1kEKcu3z4JCyAj6wbBDTQmwLneXFgx4L7bMGiACF",
  "key32": "5gHk7rYnGGrDjKZi9sRV9bExEkbNqxfv9PVr6NyCiMQRRRLncovpfFcaLmPi8LRCVEiS1jVvvQskaVzfxkyhQMP9",
  "key33": "5hbcd7Nw7JeTiHJuLHqWCyFwdj9oRshk9VpaxfihJXA8NFhuBCc9Lc9A4MmZv7eZP3tnDW7JMCDEz2j7ByToYEHc",
  "key34": "sLfCpCRtBJAPu981MyRxt8ZzkM3452tNgAVU9xfyYxqSTFdz3gpTLoZ6WHdSpUEqGHeyrRnLg2d8x1xGr99DtH4",
  "key35": "3P54D85SEULLAcDKAS21uuVyqmJmnBSiHUGQULPyiaA9oXBAFhLEZCJR3UXmT4KZp5PqzVeCm5ofL2qdLc2effrT",
  "key36": "5WPCDJQpU6H2EYi83Dy1wHNGZ8bZaE5yXtScxXkuXBuAXVHitZGKivQV5cwrbdjSQHpRq7yxG2L9VxLb7i9h4X4N",
  "key37": "UXEAWHREDVC1wCbjb2NLZCXmwyyHL4yWinuEk5TEMNT7mg3QKVSji81DQxzyp2aiX5RfwDSVSbXXeMuWriHMCtz",
  "key38": "TPePYBscpGwx4dHoHAWKK7L4sbDx1xkTj48DnbUAxZvWdnEZqv2BNvbqKiphrfkMmFfeEPUJQF5MLUYE4n1D1hS",
  "key39": "5iKiqx767Ap6T84mtnUdZtkTd4Kzi7td4ZkXztpCn1nsuB4ZhjYLHxbFF6JnLJoAm2YQXfCJWy5w1AXbMnyB9Bkn",
  "key40": "38h37NV8TVHfqvpik52g4eSJNaJjaSabsaJtdF7xwTRhaEi4xwuGUVNkj6JuWgoroMQfnWV5dVmfJF9NTw6GfoCq",
  "key41": "5ngZfzdn4bVY7A48RXANi6sZG7RBRYEiwMeFE8GtpKTF1DHSmNeWY3QaW7sdzfKsgbej8S4DYx5pFU1wxBFbP5dk",
  "key42": "4UFsbBnCr7FerhnRLA9RZ5RUYf2N4SjUiNZsRw4zMuC5FGHihNjjzcTYrDBCH7cftLyKiy3eczcDSeXiKWJSEGcU"
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
