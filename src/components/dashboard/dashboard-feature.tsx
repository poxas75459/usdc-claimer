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
    "2EPMr4xBgiKnordfNWVuoNkEUdb95ZH9xMUapYxmcbohjzjN55cfwGiRuMushYVGnCEAsrbntXgKkzJidAHm4M5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jric59bstP9R57rBwEFSkmLCyy8FRBwAEThank8XjbnH3uynTXLbQzyiwVebzySnjgdSgbLkhR8dCNV7nFHgGTZ",
  "key1": "WKCz4aytmUbYBHep5u1axNtfaaj42tK6ixuoLcYFBGdxz1wnKHR8jAkVy7N6VxAVd3tXuZHeymBEGieP6pfCDLU",
  "key2": "2RE2eLzjDusMrCPn5N6BQnU8Jy6BgvPiEkgePoBguHbVcmSDhzdioeF9KGtDzLeBr6NjHZCM6YxsKqw3XhgdDPQ2",
  "key3": "1cyypZo6x6qY2yXu7tyVMSUAG2JhKC2ZaZMpGtYrvpZ5tKv5UTGMVLsj2dFKUtcAV5KNUs2VU6cHkPB3eNztxEj",
  "key4": "4TaixmqTKaGGHydSzrnKwi1P9FZoXcTJPNzVTHKwm48u5Pu3W6b3w4G9tBXSnGcRP6yJsKW6HbZ7fcNKdFyGPPqS",
  "key5": "26GcUc3qZAvASTNZTBeDz5MvQq1wbPWkKzDxL9wiuVgnCCiQWvHCT86sZ2h97bvUJPUEPq9MPeb4Cf1JeuPkciAA",
  "key6": "2N3m5EXiAyUjqWRVKAEeNqPoYyzSS1P8WqRak4rNZiWViiaApr29MRqorwtyZojoQjCJkVGd362aWTJZuiFPpu1Q",
  "key7": "5komvACcG2kHiuFTRhdkGhCAxEaco8Li47YEbsBHhVY3izimUGiGsjhkMemEc8QcAwWop7GdUbwiKa8AgGHJ9GSq",
  "key8": "4zzvY3QG2fo1khJsuLsYDLhV6L1F47hJo9Fprn7G7g3fckJZzBzQ5QBCQYzDK4DQMFF4FkSKynkYn856EwAgUc3Y",
  "key9": "2WGuAKhV1A1fCobBQvTsb5Uhvae8zy3E1KxDeUnig7xmuDcpRCSXw3ZsttYQBbS9QQ781e8BqumxGtEfkMeU8A1C",
  "key10": "3wbZ3kAV1x95QxLmNWq4Exeuwbw5HxMzWhxWBK8sTNDJnVFAizW62ghvtzrMELzbqQXdA8Vgt77imdAytUvE9CSf",
  "key11": "33pcT1SU8aJcXNLvZah5w5esDiVMQ23T3s4AeFRUyuw1XdqmtMDfqCrUju3pgz2pu6nEkCcstQC3bfTZmnwBCutu",
  "key12": "2H3NmXjCoDVZdGjvkt659zQBPC4fpQbaKdTKrotwt6dtbDxjpLnBgNqPv126p7jdi2CegMtB3nXYY7ACMEJJy6A7",
  "key13": "4aWwWwTdnRDNx6oDFD7CbBctaLorTZ6HU2WCJKdmPNyyhcKwcdq9RckAPaUqmAyFgiaFqHHwmst7SvFfsFJBpe7r",
  "key14": "2uTYntuGtoxMwGThw6ELisjZvMdy7Qu4MS9vNKcPMv583PfYrapahcjKM2MpYi3fKApKy9jBjg7nWBRCo1YdWsUZ",
  "key15": "22mYE6cPDWcYh4z46df9y6mMFgDtKjoDGej5V3hVfNYDZGVqvSpYEYdA18s7fHQWJZ9NdewWUPVdv6jYCBTy1RcZ",
  "key16": "d8L5xVs5SPmt4fpsN5LtJwHDsqWYTmgRM2XuCHys74Q4Tk2Jr9beCMR3TnFAUuNJmvDFB1GV1W4xBrVbWPUPPkN",
  "key17": "7hFqa2vVKmNUS3aiUETLNEMATnFsZqGQ7vkJjxz3uHKJLNUhQfnNUVu4fZnpEuNaUc5VWipWsBwjRcxLfH3jiFW",
  "key18": "5QB2xC88wqjDaobSck1H8MqbbgUEp5aXrTBUaaan2uPrT4bbRyxtL8potp2z55u7EsH9WNayPbzTbBY5x37ZjofR",
  "key19": "w8jvwpuAzTNviyRK3mnqr9nfb328Kth982aVSQKWkXjtPSiB5yJeC6xD7xFNCrZvnvwVsjSrSQqutRptF9v1rFo",
  "key20": "3mrRhf12AUazHAhbThHHBGC7kjN2TTMtw3acpBNQFS3zwA7X1RVsfCW77jELrfLzKRCGm2HRnQR8NHrv7K1WmRDo",
  "key21": "3cosTbipPKrM3koeMsM8QS6qUWGzodXE4UyE7MDc7v87rukoJMETDY4agwQJkaU1HE5M9jvR6csTbMk3H5pgKGsF",
  "key22": "671LxHncaKeiZJnVFeCvzdkTCMZcmogFcYaaD2kvMRcZ53ZUaogWMBQXDY42gpV3p5o37RcTgufuFFPYAd6VzDNn",
  "key23": "3FTYHA7iaMMEpK7RG1uLr3r4FYT3UjgHUrvCLrnVq76CGmqx41Z5bHfnXEFeviVBXwv7eevi2JoRQzhhnT1fJF83",
  "key24": "4tPAm9tpEp6LEDoNLdhou91UDceVTbTdFspoeNoCaavDdz62xzq6W1Y14pUCTMAcv7g8c4hKkdQzPQWzsBcuzkfN",
  "key25": "2zXjZvydV1FqBQmeSKiUvUXv9ssbrZvfMULv4ZwgDPzHgioR3AcmtLAyvyGMS7fbQggRomnzQGLifhiKViUSEbu5",
  "key26": "2EXFG2HjS3WfvYxYvL5rx2Mt54fLuya3G69UyPX4BAd5HtMdDFAgWceFyLRcs3Pdgbkq398kd6XJjr5dEvkDMCMp",
  "key27": "2s4cvXUer74oF11kLovcT4sy7VNFNpVM1eP6xDCRNbfgZeu4qCJse5uarTVGWV4moaDygh7G2tRYPHAseDSH8hXw",
  "key28": "56HSwzLvr2bHJuTAmA8SVYd13ponL298duDmDJdbPAcnsomaLVR6TtYzKrowqV6oVEVT4Q2csEDJgtKiwVfWCzyq",
  "key29": "3HqnPq3RknAGmAYongGL2q6gCECVDZWBKQYZ9VLurFLJjXCZN8D4Zt4PjYqzeruYSqGezLvGGJVshXpwMdq5frH6",
  "key30": "2h1cbtis2x1DdAppMi66sEqZbjEgi9Lsbxd6XMXT2rG1gpDkrhfwTFd1z7N6WKBXLSmgDxRiLpsEQVDYAEUEwZh1",
  "key31": "4LUUHpPGqPTAbjfkp7ucWtgfq1cKeyShiFgXGBGz13rnrN7g252n5W3xUyaUq36M818XzSNaqRVWrCTWb6WQ9MYb",
  "key32": "N7v2vt2CPeDYdAJk6nVXP6eBKkvC42CpHZ8J3q33QWXg8jbHkwFH25U9jE64fxrucmxZgN4t88ZH9PaQabMbwmD",
  "key33": "4wH5xoyjweASq6dKs4vnjHwWqo5PK532z3ZxzyuarHiY5iEVrXfpXUvS9KKEYs4uVumqXyCJK7T2dtEz6GdKRqbh",
  "key34": "94pZLmvujBntNiQ2k3NPHNFUzxdX962XCJcNeYDWxCNCsAc6sCGQ58ipoJfdDoA29PmZeiK8xFdNztw9B7hpBJn"
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
