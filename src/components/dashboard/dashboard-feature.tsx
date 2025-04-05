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
    "2NMqpkHHGj7X21pTZ7ojvgiM3J7nzadcmPPV6fRvJEad5EyQJ97LfuR6r9A64Jx4D99DMLW62vej9hEg7UtubAo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mQyVardbMofCmGA7epnodQwswriprqDtgRuFYjxRURyW5X7CemjeDL6wfs8Fg6pthgTdB5gcUovTEEMvknRuu8G",
  "key1": "23DFYPHTKkWjkRonJcXT7o6QJLDaRcDy9VyTLTUyBfgcpitnFLG3KqvvSW8kD4STSYXmmND94p6XDqbeYfxyfXFf",
  "key2": "4PWcRZrJhsMuptYRgst9KqQh8ffj88TsF4RgcSEoG9ka4nbLmAy1at65kgReVGbPw4beMU7QzsNZKZkmbiNynNFe",
  "key3": "5zNDhxG5F4mrBYuB5byyRfDDWoiUGVYE2EYWnj496KerxJ7S9zZWzmkZ6JFW9UGu2QfA4WEiBCYeBUXv7Awfsqzh",
  "key4": "42bte3cjSiQ6GLFqYjXiUnsYGfsSmwZbLSwwLtsrcbNVNbbtFPj2k713v3APcGupWSNEkTnUNoXPrtAjwoYjA92",
  "key5": "5Lb8BPY7AcK31Nh8h24zkua6YoSzk9Gzzriq3No2xiLaQv5fAoPXDz62ZKCyigTwYu7DJvat3LU2HBE5qVYMqq9N",
  "key6": "4ahFUKwBzMYNy9EVRuYwWdEczfiBtkic4Np1HwaZrdLoMRGpeLZ4emFAwb1tKtfkCMYtDxU1ufcLGBso2aXsG5T5",
  "key7": "4zHdffaAqb2BcFPUC9JobCgVBjmYZLnau9c7agY1CrBRwoXbz9eP4S47Wz47jHY4Cfd2xLnPgbc3M4crCtZ1Di9g",
  "key8": "2wjitVLF2Uzmgn19LddHRUcS75dskksxCBTUuw8A7ZTbQVNL3XrfNBExYWbVTFd3zmWaN8SXSifha4955jihKyVo",
  "key9": "416AipwfHuK7dEoQDFKeWqyHU9aqDvzvLyViudwFBnbPSWYfpuGJMkr5uqfYy4jkPR5M9dGb1PFHGpwi56bALoi4",
  "key10": "3Ub1ZqS3gwqRRw1sS8pNv5syHUgDkfcTa4EPG551QTV2hnu8su4NrXXBLkRjGGB8Pn2cikX9ftpXCiNkf7B74SKf",
  "key11": "5RM8XMKcT3gBPGqmj3Kz9fLbJvimtitWqydpnzspWTURSHq4tP2aiHtPTeH2JZV2fEVVwutoWg2E2hiSkyhti2gH",
  "key12": "zwE2tyjBEdQURGfaggFo7uN19kXZdm87gisMVpLcXfjVpMV1nN9uoCoVmnsa6XhknJ9qy1fZBqkWUjmGsJsbtdi",
  "key13": "5YhLKXwDkXRAnYCdJ25KCs6bc482THhHGmcGKbKYXfTE5RKg3Hn9MDWmuPDBwenPxpXTe29S3vLQoGPMY9Q9zN2z",
  "key14": "3cqBKDisrkAUesxBTfR1x4DJ1KkLnPAFToBAdsMSqS8HgRJCdeePNGzjLGfdHM7V5QoU8EBESnDR4RNLXRyhkMaw",
  "key15": "jvSvwBzxenKPCCMqNeBpeYj5LMMrN8ARHYEvGLexMdRznSSRj3gxdRUCDFFvB3xjZzfayafbHzmuiMd2AEPYhF9",
  "key16": "31yBFBWPBUYatJF7vsedzM8TsQbNLpisSwzHWx2hFicPEdRXwG96UgYoi3YMMYZ3p4mBqNPLc987q9P5HbtQ9pwm",
  "key17": "4Ry7mvtbUbBcuAnkYXiUcFpojQEsDNtxPJ6JaKatsX2MYmnZsQc93bbmvwvog5GLXhXYrc4U1Ec8WRiitjtP4wZf",
  "key18": "3at8AVoVTHSN7NjZpg8HXP1DziVdYu1SaBHmdJDHoqDWaZp6DUR8WJiAQxAzmdCxMJwSorkWWYpW7g219tP8LLYZ",
  "key19": "5y7LcwPFd9ysgoUWbLfhYK6tVeQQQ5FxrRwh45XgZRXivsccuqJ8c1FxT8n4s4TnM5HU4KmJNZm5YSgsp26KTrHK",
  "key20": "5DTvG8oxyLXjYf2KTnyKrUekfDzc7aY4VrqdjPLzbvcNaLrc7THoBahyrYkxbBSV6tNBx8nVdrKhh4q5qcCfz58L",
  "key21": "4m8QPHDaEjSXSAEJxfWXVkk9FQ7sRzgsoEteZjbP9NAeXSUmjcy5YNqX3JbYk1hB1qBf6755GYmVypjDvKLAJciY",
  "key22": "5QqVPcGBponpi4UzAZwME2qgAGkGba9BedBZ3uPmg8ND2g5NdLh3gbjjBCUjQyNLYw7K4kvKAEPWfYuanK1SUQyB",
  "key23": "fRvpcPk9dw6pxnQTCP8EXgKWD51Cn3uLo8qtNyNPxjQQR76Xw2KEYsXSDp1i5b7ZsGJW9WL1RdKFQekBdWHjJ7D",
  "key24": "2eduzxosE9ATdLHK9Ek5kaYC5i8QzYVXz6K1GapcCaVYgLbYXuCzV8Yq1HgbHGgDLJ8cgSdwHfCisd4qQYo2E6e",
  "key25": "3FtFM3CJf3a637GxXUVSGwK2dvdp93MjUU7fJJq7jUWEhxFtchbDMFSAvr7rotwmBmiW6WZsHEnkMj67P8Scn5o5",
  "key26": "3uhsUxaDANbwEs4dC8VApL9MrGMpzEc86W6De3qZ2VGtegs5JHte2LKEhfLtzLEsqF6To7UXMT8aw7DcVudFGCFu",
  "key27": "kYKLAMXmxXEJ8eZatLoKhzDpUsMCQBqFTj1rEhYzZd9vmo2C9p1m1nx77b4H8TxmVe9mQkcNoLzpMejMuBb56nJ",
  "key28": "P3chzu1X8XehFoik8CchxWqGYHWK7gWHZZgg2Ak5xJ1jRjQ7qYc1pcGi2e6ChsMQKUFRfioXsvzZV8pRVksyhwg",
  "key29": "3jp54ACgUHGgfeXAxh6Ptjxz4UfVKCRThPTvWTTJryFBKuHVdaQLsFmEGzGrKdRgt5zyV3Q1cFDWUuJnndQU6LFF",
  "key30": "3XfD6LevxowPKMNw9yiFFeb2iihKPLKfUyuDYnujSFyPLvti52yZB6Eh2fEpjKTNi4FasGk7i59nUZTv6r73MUpE",
  "key31": "5uoTqjw8UJAedewvLQnJtYDaGvoRG49KuMPZkwwvRhnPyVS3qTrehb3NmMMbtuqr7o56qp5THAMTGbQeKyYbCrRQ"
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
