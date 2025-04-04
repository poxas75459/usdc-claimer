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
    "3aoNk9aJqAVPNssARkeQen624tqZCK2iQJEC8BFuAD6AheMcVFp6V1eQgazNTVCjxh5Kg9kMR9KXVK8RsUqkwbuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oQQqNLSZJFJcjM2XodCm2TxKrEohXUB7Hv4Y4jzXHKGKL4U8JL5QbRDHmNA9f4hHD1jrYSbp9CWrUtoE9hDRVmU",
  "key1": "SsDhjDrBAxBgoVv1gDfCz9egSFysiheXXKFUMVtH4hH3TWPxEDS841hCs2M8hJkgWaUbxQx5t6YEVCKFoWaPZeH",
  "key2": "tPCwEp5JYXUAy3jEZrQ7UEviShmJwGpgquj8pHDU2r8mEQCsrSWT23APXAayMJNJduGBzQqXFJ8ixP69Dw3jTNi",
  "key3": "3a3sWCTMpUUXkKxL7JJ3z19Jb6i37KJobb8Ph2CKS5oC7PLori8CNoYRYfi8GEECy5MekQtvJVebDtn4EMn1tWjx",
  "key4": "Fy82FcsQMFyU3JRCx8qx3t4DWQXjRL4SrXPUGtPZSAjK338KXLj6S7g3haxy2KFTHqRFUCFibSSWFzg3SLnQWY2",
  "key5": "3VZofTRMbM2gXGojDabvZizfTuMAhwfkN6SJt3hmBQ4wSvLs4t4bA8t7sDPwwWJsbZySoJPyb37kSJcm3o3MK1HW",
  "key6": "346j6Gry29ssYbjhZQGVpeNpqNdkqGwNvFmbZPq5SobNSgdLW85TnyE4MqM1XqwHz8WKPL9eKgxVuBNiboN3cL8F",
  "key7": "2Ht2GX4z8UDbtdPouMDDsdFgLEJwpULDHDPC7AD6pLSbUAiArqaLHnbjs54TJjHpZZusD4z9yZ9gtEDSmb5zfzNN",
  "key8": "Xw8yTHHG2cWSzaKJmSL8jdHmczkXppyFcDH3XFsUAiCdSPHmqTu4Cvb3Qn5TgCyhwgVimLe5bxkrXFUSnWEdbnm",
  "key9": "4Tm7Y5NLTkbo2S2uNjXawbzJSdPpZCyDGPGuQ9gRqQxhpyxF78PzugCBsk3aCRhsidUn8GXvzBn3aipkryYtqQzg",
  "key10": "3UTdZMruU6d5UT7M1FKhxMUQRgAXAEhjmesTKLkFVbDCfKGmcKtdShuExHMmqrM9zRemmxGCwwaiJ6tVBBMSMJXm",
  "key11": "4C8ukPZ1NsJY1bFYZ9zS8Qi5ACy9KwpYhdis3vnf6rH8zUdrofRjn6CbfjhHMb4RRw7CFWU67LYARuzHhEJZcHYi",
  "key12": "4ymFjSGx9Hp4s6ZDtg1AFibjcLXVyBm294WCPq9JEaPT4wYRB3rt5PPczNFE7q23U9JNm7di9YQt7Mo4fcWstyKV",
  "key13": "2UFM1C7TeaG1UFYSjvimFxQdZUapfvDa4zpqDZtpsTP2fviGszxvEoVCHWQr7NhB3WjPDnith8Bu2nHN5G9EPpjm",
  "key14": "4Tzcg8L5fEck7Kmb4sFqoJ8GMFzQD1GXenBHYDJQZRHE8583E7jwpSUfagesFTWdx8j1rUAH1vR5pyAb38TfFyBW",
  "key15": "2FpfhnBVVh3m1csuCje3NeCN2ssa7L3DgyywrpEqcsG7RqyTmKtCTwgqQxaP9AExVoy52xEYbcjsgy6g4BXbE8fg",
  "key16": "3iZBbU4SN2S8ya1g3HgVuYH7HJ8BaXurVtYS6ciKFXC7k7MEzhMidjoWccSzGM7NEsyCMWQD6DSprpSze7rcnzdg",
  "key17": "Kiaqhubhhh5XWSjZQpanmXGPEhZ8HH9iw5iPCxgc2tXN6R8zwGyFRqhG3c7yLT8DRyhrjZywC9nfBhChRkiaPaZ",
  "key18": "zv8iCDSZxmaF7bPsY6nxTBW6FXkAueBXqPXKeKHK6VrJPi6KcdenRYLDZGd5HVFwD72dbn8NKEQsnxkVd3HvLir",
  "key19": "5JjKA5PRxvombRsqrJWHa7nwaov8z8CmMywr4axy5sJ57sqcEmo4YstMCFcGQP37xoRyPJsGGKX4E6RNAZdCVP9m",
  "key20": "4tQHqYbiJK1PgjyHB2kozJ4V9oLDQdQvWuKfWeDYL8359yE58Cjj3mLs8oRCkRB9gR93ciWY3qiog1GLx2yc8pve",
  "key21": "iWCHxgRUsJWXhRe7gU4oW75PiPG4GjKSCw2BSZ15H3rno4k9QgpeaPh9sVkstN4Hpo3Vtmogti332RkEqPQB2Un",
  "key22": "4PbMFXfAuJ37ZhZBzsJv44MZzpatfb5meMaWxDZgNXJJM6EyvDwbefmDBdAUZLj1EdaKLCNutaGMgcfodj9EfKS8",
  "key23": "4GdVW8kagmxx9DN6hcBvTzoR1dAbfZsCwpVwHUn6aJQ7mRPQqALkmLCCt1LmrtQqfZbm9idZhsftnJ81SPqEn8FQ",
  "key24": "jmjz1F2sFMsZDVyDTFE5iidoanfhjEHHsgy25en8nWdoGYCYnRfoirPEBGvhhf82uNaHGYybpaUPfhkijTW64C5",
  "key25": "HezfjBoUEsqdCvMPr1xzcupAKJGD2RYbvsfm9GL3rvS1vSunT2d3GAkA5N2ynmxaWWQw3Yy2iyUGQpf3YnkpzWt",
  "key26": "v7fmwN8zff4TkuYQn15E7jPC3RocWHysDevUntfgify9houaUWdnSpuiVLpyu8pZpSWjYJ6e7PHAfuyodqTTHS5",
  "key27": "5ShLKt7dfFn45SWQCNPiXDxYVFHQvHDugMSSqeHmz4WYyFE52ViHtR6zhudcsZbqUDr9LWhtLk9YhmkG7dCQBnaJ",
  "key28": "4bzzhWy6s46UhXf6nwtLxRgm8F5Eg7F91PJBLUMVMi7rgC7JurLGxkwSWx9UVavRWNhLsumrnRwLQKvbUoQggYYN",
  "key29": "5TkkxSQk1bujwgyaT6eqRgsapgdmD127AC33NqKjHVYAyjtepFNNuDzy8iQWymkjD3QCndn6wc52cpLveCf6G2FH",
  "key30": "5uLJwM5gtvZ6iu9JeBf1cXwk398rtmFRuasTkRLZigicR75j32NSDzKhTJbku47hVAeXon17bLv5v5WaYyVXRn6t",
  "key31": "3r4DYZ8sZ1T8usfR2Cb9eVxbbR7aD6yWZJYtt4y9Ne9E7ZN6WqgB3hPTT3wtmhzfg9eZeu8zWsGKRJhFMv9AuRiQ",
  "key32": "52wQUE2oQQyQ4XMiaXgf8WfoxUwpfJa5aZe7MoPe1AYTBzSZoPtoh8xkzQg2Wk739EC5ZXFHcmrRSNLPpgaM5KUH",
  "key33": "5xcoeAJoLQuEAxZ7LMUQMaD5XKQwsaYZFbJFGmJKueaPdoMvPabv2vyywJq3kJjLmkEMgErHoMMbjNzYbo6K2Vj3"
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
