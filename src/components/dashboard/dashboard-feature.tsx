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
    "2zuLKyt1AjjWDjuntVCvhm1uB2biT9cMyeSADbuQ4cK6MMnxGSZFnFXAmqCvpLud2fY5rkvSJyAzv6Bk8BwATWM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21fQR6HJLsv3afxXkTNyW21toBVTdjEeVKp87jiJY4ktAszfBdX7Ei6TFrEqtTsvcDYrFJiHW3BKLVpZLK3GEAm2",
  "key1": "ghrzg1qPAz2shka7bf7mFkj4nsxfJ3adyPLcyLkdKA2ksE9pSdoMw4dppEfqwcMVMsiLWAcRMQuVybNS1Le3b3d",
  "key2": "4VK1HCg8nVZT8f6C4AYT3wKY7gv71SHK9yxTrmQLawjYpo3HbHLJNMn4Hgc6f44HZxSwvQbzwWPzENvZXoZr8E44",
  "key3": "3ZNYxVp8o7GiqAgLPiYbGdK4HJTFAZLRsbH9BRj3Eumgx7TaSFeFfgyNzek4qFD5ifL1v9d9P7mjr9io9edqQT64",
  "key4": "3PzoShWhEQeK8vS4g4FcuxYPqYmA1KHYqZm3W1H39XAmHjXGTFmGgA4oXBTkpvgY1N5kkMEEzhfCfnu4VDWoTRZV",
  "key5": "2XSUBkDGMQUdZRy7SRPnq6a7o2oSR8h7Fh8TU1LCfosQs3AX3UEpuiA67u9sEuUe5DaBJpgQ41cSqneta9MHB4wJ",
  "key6": "5Qy7uQpdBZEHVArNQY7NS1ocm8aTiBkkSRBLobaPcgMdPmRW9tZxL1Si1U9fjkftNzegVVuLAUpsm1FkvccEj7ki",
  "key7": "5tqzU1MRcSG8as6wPCN8rn4TGJiWCUBhTpBP2pNStEFJDNTkbTsX4AWqyQC3X5p7KpTKe6ZeG7eshrwf9zKdLPQk",
  "key8": "2EjPCWwhS3tr76AK3JBpcjyeWmnxPWnAkSUnKNQixVBZVyq8ywqiR9icA4Q9jYYVEgPHDmoPwnsQC1eZ8TiP2Zu8",
  "key9": "4yvYCr7dYvNcpMKw7L1PLhREhBUsoxBsod6q4YJ4MEQkmsysuXdVA46ESc27okdfJgDipMTGZ1iPa5Ey5omcyoQy",
  "key10": "2rJvt66fowuBHVyBuS6Lv6jBSJRNhXSfFQcuNSvqBSogDJJ1V2MSDVnixkLp4XaU3BiqTxkHrYbfoqqv8HwYZsJr",
  "key11": "4T4oVQ4Hvt3gWBvrNWoRjtq4GLspcRt5BWUvCSzJKrTKbG9iwngDfMe73pLZ5jrxMvaTuC1Lg2xydJULu5XbycNb",
  "key12": "411z3YJKQxhuiM8kvn7D6211vfV6Y9ZUUWnzAWfzfBuThNRYsiPoX2PAy7xdoNzUkQoYYEPFbs2TAv5YUm27FD14",
  "key13": "9RnWMxfjUcNGHKzVRwiF33pkwLjKwxUJw8Agdbmoi32vAZ4HmDbf51gQUuu2ePozYDaQymfwyiw9FQrKiwSGb8z",
  "key14": "3CFDv3xaNhpknb8upMTdmVAeBAcoqGDQvyZCxatZJ88RaKexVxensLN2M8thsJrRXPE2R9VGKgW67n7giSvtkSyx",
  "key15": "5YLyHVj6pbscMD9F3i7uLKX743TP2sULMakqd5XVxqco8yeMFdDbQPQDyLZN8o94KiHc7u78YJ9pDwjbjL1KXeFr",
  "key16": "5yPJuVBwZKQiejrqUJFb9TVmA4zaBA2McYHBdJY3mxF3HJn3fxYSgdpwG68hoheqHAx4uHF3iNhViVaYECeTzrhf",
  "key17": "5KWWpfQj2baCu9HUWoiGsprekqXKwLDfAStqpGcBGgdiRQjtLGmsNbyp8hxTBdUXJ9DMrgwpCPSCoC8ohxwfb27y",
  "key18": "5GL6dMrHYnX7y3K6gUQiG4Kjvf71kQCB992ZHD8fevcMW7mFN4MRaFShHubYRAsuukinYvfyiTNe6qdBy1oPNrVb",
  "key19": "2EXDKXozxDG3GcNn6QmAchPic8cystYTVudomwCcJ71pwj9EmrRapmZwKnnD3poGkBMat2zeWGBc7dt9VLFV3wNZ",
  "key20": "4Nn4a7iDbB4rbPjVmHR5iiumxDnRE5rz7Hj52jH4iA9DDAwDsy631e8Pk6qKZFZ4cHYBqStnGeaRoNiBF6Bje68F",
  "key21": "37e9DgixAe94kFTV3TvSUgWnYWSu89da1k5YFu3YovHQpLqydonNjespM9xHF54LuoLLpgfxwk11p13p5SQbGUAS",
  "key22": "4cn6DHrQ2mLcQugyzygQUFdGKWSfxBK5CMTY4xJG5NotMenaLjX2StoB3FCxshJwb3AHC2ix1nSzypbbVTZCQdQv",
  "key23": "RS7x4KaguGurL8MQfZPzjzLn9Hv7PLdMzBtAcj5cKf83yrsZP96NHhREwuYHyDcWYjHicjkTQ7KUPDCdi2X9zPy",
  "key24": "FofGMTutTeaVXXhL6JkyLgj4ngVz596jh8NCy1Rp6shf64EzK16iAsdydfaTiLDzSHery2vgQszWEUXSH3BehgQ",
  "key25": "2PCFjiYRV2AyMZR4cRkm9vQV8PXAyxsZbbXzhJuTF6HRoUgvP38ktza1NfAbYHP9A3V4g47WpBscXwtucouzbYbN",
  "key26": "5yzBEJfv3xp4dUV4satzx3baG7hE2ctt4ZF2k8cJwxpTW8RZc1c6bbJA6USgcA4d44g8mWp4AC82dEcdPe13J1Pe",
  "key27": "3U6MypkkWWtowDSWEaB5D7dWsTiFViPNeTbRrp5vrmbxfma5bgXgPqmtjCPteYVhAymFVfciD181fUfGxUdBNPBd",
  "key28": "2st5CAXkaVCakJ92vMGBdH87cTL4yuWx1Lg8JxHG6hXuA9RkJMwTvVSruHaBnhNdHsuZLJSq5BDiCznGWwFuj4GW",
  "key29": "3JZr5s9YXoVXjvnuAVqd2Dtype5oRi6ScmSMeRD2hiA2J7ukZpzWM2ALpKnSmbEeEDuz3MiXMTw5xnS2W6LKtbK2",
  "key30": "BRVnAz4BmGKgHj2st3MN21HrAwwQUk6C3KXBruo3FneiLaUWRm6rgSLYcuKT7AcG4jdxVJKHCWy5iXAhVVs8DwA",
  "key31": "4dgYd6CoGtfc3JL3KTRD7A8Fn6jzmupid2YPX3VN15WY1J4Hr2idRfRxqKUfuwhNTCgmLXv5zAqAmtGG4MkEVJTk",
  "key32": "4TyDqXwnjVQJN3ZCQtPL5FUtq1x5XeuFxd44k3rhULiDT4RVjNqJNPMA2j6nS9YkFzDCE9LD2ZJkjtszCrExVBge",
  "key33": "5Ed7gWa7MfFG8H5YV4o93uDmwtWvsF6L3417Q19dTpzHTGgT8QL9SxZ3mbypAn74fBextB5pdXeea9JrZ4pjm4EW",
  "key34": "52kLMrG6Yxv1gWRC4FARfZ85tqBkuBUFqR2kVPBpEsjd9677GWM5pmeV1krg9xHvy1kjTGEZcptmXTt9HoHPAWvd",
  "key35": "25qtiPWKJd4L5mKMXtzQVMCLKAzs4xrsvvaJtge4TW23QZC1Jq95P3iMW6FuTxGkd9RQ9kknzkqz4creo454hFFn",
  "key36": "3sVKp8HfUmNAgSPRt86R2rqBaNvAb4chzqE4Pij3TR6DyLA1yGfUYTwF5gEgRynLjb36LHLT6kJtRoJPft5AkvkC",
  "key37": "38m93nwAYNZfw1Nqfsk7B3dDFURDsCkWYALC7L7ktqGeEWqvLTvCkdSdagt9gsNpQEKXDg8RFn8h562unwSLF3jh"
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
