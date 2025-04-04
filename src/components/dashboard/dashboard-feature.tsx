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
    "2wYUV25y1pMhZA4vrLeNApgiYkQE75DC5EVpyhGw6fWLKykACcQhKzpGK2CBKMe8hns7cMLM9fohX9vgLf89oRdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oJ27LNyaqEwQrS8mB19wjDwLMExeMnnfQBXgjZQgKv3jNYRBmx3NZdm39MH9M5h6WBXyb2Nixabw2jbt9pYoCLf",
  "key1": "MrAMYEYaqwRptSCWfE4wSoz2hzNfM6BzNwmdoEKCZ536CTUoJ2vtA3uyjcgfX3UWUTXarmRLbW4SjBuWP7ed8xc",
  "key2": "2Suh1kMRuHpbxMSdn4bNsRzecTf6VhrNmf1iJAeqr6VsiUHmagjTVPeEirnmJpnWF8cpeUgFMEyJCUs5vumPFoPh",
  "key3": "3L1w42mHkN5Nbqsb6yrxEvgF16mHCMKJguaRH57bkLe9DAYFk3rDK14hND63n87vFe9CWivsHMZKa8W9ySueFLMB",
  "key4": "4YqxiRz5zXo3yE1HKJmH2hATAFhG7CJi2mwvYnwQ7cNHrPHY3tyWDYhqfX3PrmgwdUw7C3psfSQrHvPgWvUV5akp",
  "key5": "5tf4Jp1DEwsUfZH1zK8VQHSvsNBYZ5T3sDpbvUGgDgsnM6L394Ynfg2mSdZTo4ytWidRRdeH47qXdRAzEujZE9x2",
  "key6": "2SqQ1oCGdzSVnJGXmMGHDmzZCKmav7RqwfwuBwaxLuTiEhKsAAd5YaqT2RSCKR2xdyXEU5oa9Y4tc3HgAv5h3UEv",
  "key7": "2RBoEhME7k9cEdy3rAXF3abk16R6XFXxZQTnHtmg33jbp32hSySVBfarWhAKygrfQARTE7jFySR7QZmtt66XQLRU",
  "key8": "2eQhnmf559XMQnnwaD5WaCViv3jYPeFdPyp3GNr39hWSrgKiSu1es8iEJWyDn8XEKVdYuEG81b7iMijp4QeKx1kH",
  "key9": "8noPWWSxKKfnq9Ld6E6C9epMyHtj2p6rfqNdhdPHEpQTdEVPrbGjASD1VaHmc6Vg2dKbS7tBPu1pATh6bRiuxNK",
  "key10": "2ibLetj85tiscGjL8CyjnLCmQuckdpDy17yh1STRW5h7C4QaS2CZVyxA6hUCBUUJ1umJVzsEXtMo3TUDK7zVXeCJ",
  "key11": "4hmoxCr7ZRu1pB3PZZcZ46gF9ddT3J3Yv8QaprufVDAjP7KxT5nqbq6SYDNQJCYP6pMgVqESp6MXo9kWsjHmcJeF",
  "key12": "QYbAt5L6zLSQsqkauudUy2AcuF7Yg86TehRsZJtZY8r3EvDUpzxrtLNmuprBAmfpVUjj82Kwdy7tzFf5oHgK8XK",
  "key13": "5frnMRUkjEmfRck9j4dKbdmd88uuEhi4cuk1AMheBBkwAg6uQWgHhyncsmyMs4hAJgskQSYtnaL67XCpbshg8zf8",
  "key14": "365StakckN7Lgrv2i8Pe7wxMnMkVM8cNUmNDCE3rHYiWL7sUaBrmw3VPn8hjAUv3Apo9RgAyAKTBgvAQa5WzxC6H",
  "key15": "5yuyoQDPjknyVpUm5T8tJb6dDc8KBnWWF6LKqonQ5Ln3Q1KKuyhm6GS2uTTpNsKhF91sAFkSyZU2UPUHH6kEpB5d",
  "key16": "24mBV2qcqPizN7LQ85hyC3QCpnXWGAgKECEhW7Yau8GibgvqkMLpSvmtuehHtUzqooK6Pk7mSjERTziWL8hKuGvA",
  "key17": "5ZpYCv3XeZ784KgQwCAB4E9bowcarMLQXD3mZfEnqum82XAvtifSR2M9nXhcoQGnRed3NhxJYUMkgxpf3djjhatA",
  "key18": "58RqxWgVD5DfK5y4m4FLo9Q8tYqJ1Dzip1FLuXzRufKtnnzaxkq48kmHp4WbDbqENmksQBPLHUTv6FvMvkvGddRb",
  "key19": "2ZhG6ZukqpL4d2HZe1GY3dWTt8jKhVNSKE4DQktztXeDVstGYPyoeJ6XuLa8cGqei4EJj1KYX2U6wNdfyvBiQUUQ",
  "key20": "5HNi6gQTttTr3shwXu8aptpohvR1fXQgtJk2zT2qTjCfATXS3v4V8s5dHE1qbuKpyufZ1EmYQTiC69TZpZGAtNkj",
  "key21": "26nEX6kNt9d824zn7KCNnCeBrLRiFLoAkUCgGUggoKNM8coZbDQv6C14wUcHZKu9kR4csQVAgMKEt1Qhq3jFY4iH",
  "key22": "mj2m7rGGMt2WuekcV3HWMkEuYPwJF8dt2cB5K2hLeJ3sNCtYJSgkuCdyrjMPGzxXQjD3qXC7fjHFuMzWLt6ujC8",
  "key23": "26ZvPmZggeVR7bR4JRCHFGY1kYBHHN7yWPJ8HxcEZwGmBDE37Fgm8QyZoBbU6UUuMT8qonoaCGxDNBJayuHG6ZtR",
  "key24": "cqeqYyKo2X3gyMz5uBcwCBGTCUnZcC6gPNsuxScXSVhZVg64XefNUQHpLrdL5syuWNjQaCt4Wh5HDwMtfSSQB7p",
  "key25": "3iYtRoG6DrsMpmk8V8pNVZFTwZCHu5G5f3sHJHawuKYxkUnxnjxihgWfkPnpo9KDUjg3WAfBLXA3bhhwbDgg8xnT",
  "key26": "644W2UbLFjZhKdcFrgbAF8YLA2apoA4Dkqn7vnDJWXGe5jSbUUnNMNTts8nE6X16bNTjAimD9z9vWRMWCQt83qyL",
  "key27": "3fB24VT4Fjw4xbrTHgaND7un1SSwMy5Fgbknj5Q8mox2yxNRhGfoUhPb4hrtBgFEvcs1SaKCQw9bF2iEKfu3QDWF",
  "key28": "4mC3A1sTamNibYXNugfi5V9hs6owu4eD3prhxgjBvfS97jeFjp9YJiPtw3mSSAYjSp7X5y7zEFGq5zVY9pcSHUYk",
  "key29": "58X2dwR1rKresWc4AkjcD8S9jQuGgRKRaSojkegTuyDjAZyd7DewrE9AvgzWoqXpVu5uhdVCGnxSQW2CeAmTEk27",
  "key30": "5nFjfvKvvirBumLEzbGcW6CdjbV7gYt8oBEcENFLrf5KFP3BKhzDEn5g3obUAYMMnrCN7ZqyWMazFSZfemneSwkE",
  "key31": "QHjz5At4ZtdFSrvamcDjLF4CTb4mbb8Y1iztK64kobPAcfit2YVbqJxPuc1R8uu7NWXD5i9poN4Zz6P2JpxWteG",
  "key32": "2duxdUEBoz6R4dL7RCXoZsN1MziKepna6tr7W9gf3rCRgSUeAuCME152o6tBdPz42oV3UABoqjvwt7Ropgj2t3eT",
  "key33": "55LdaGwawFvRJEJZcQfDMoekuLQxP1vNtGU3gK99XCsk5GN4NGvu4UxpX1WuTsJA7B1cY8o2qiT3DHKoVMUEHKz6",
  "key34": "giiPSLqzgta7eA1GMw5BEU7CCx6MLuxFN4vUheHFspJY8KNAatKDVjKdvzHw8Mv9Qy7Wgn1xnbNHwC5GGJvqaWW",
  "key35": "61wnQ5qWyhSPzd1U6FLeJduwQ3gCjjF1VeURWUTLKqJQRTse6pKCT7QXRUPiDHjofoBFVavUPJabPwCQX8MFwHQK",
  "key36": "4Evg49HLLN9jQVy7qm4jwTCVVhhAwu42n1ZXb2hWQYbBy7YZGUEG7TX6z1jNj69GAhCDS162vfYZbRwBzeFWdB4d",
  "key37": "5cfcALSJydebQKr4d8TPTfHpLTFsWQuwJ8dzbLkHmkRaJXnzFbh3Vnogb3JnD4hYo4UcEbX1QNmQgLTV62Mt2kST",
  "key38": "3KrMfpxhQXfuW7kf2z4xf1xukNG5fXi57zcn4wbgF6dUNwzTaBVmtRA1nNWYqyhqYebzkbJFg8R53SDJm5pbmqMW",
  "key39": "2qwVhMANqf5uvYbkspYfip1f1fBtbTef2QJTeCERyeXojR5VYBgUQ5Ad8QsxnMBvyBrtChiTHJ9xassnx4g7H1jK"
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
