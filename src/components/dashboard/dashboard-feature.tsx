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
    "3J62J9piZ9pWrn2318EqyB6joZHYaUbQt7px7BejNcpSxQzXDoemgx4Zn9htAePZ2BJUQbp6JpUu8KCSZS4N9cgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hNfceRnrh3BFxWRhvTDUfXVLbHijbGmF9AVx4NYPxGCSubSPGgBW848iQxnNEeN92qXBsuvDT6vSVppRTP95T3u",
  "key1": "Zd7Wyuf4GiKBGcBk5DimfLJFiAQcRE7MLLfgnGvPacY5TxXKXj3Mug4Bz6rey5DtznkXL4z2Z2p39HfW2CqQdoy",
  "key2": "2V8aZRQvr3LkA848LCRimfNAEAbLcqWtQNP6W3RSWD9HcAz8fg7cFmfcKxFdcgnxJVK93TyGCSLLkfvEnP9mHh3R",
  "key3": "4o6dgq9YfjXypuHHKdsPJxP5Xvk2FGuUV1K2Zx6YbNzyzVLpRAQ5Z4HrXbCJExKnwasy7ZYkSY2DvcBpsRenifwy",
  "key4": "5JHLrPWymupLrDRUtnh1n3T72GqWzRwb28ixyoiJuhB9pAaG9aXehfvB6kc15EUheCRFkU5iaPNv27Tt18EbN49X",
  "key5": "61uhYmEQ7MKDVzeePs48MuhucVuuvcnANxUQyACMhYmAcxLD8fPgqhQgZvci7jwRXpFc64yuMJ8BKkgU7DSExzfC",
  "key6": "jHQpbzg8huyqTe3Y9ECaboS5Ro317XmztMNourwL7nHmwUriafAatNVcGPf9v68QyejZ7VeAtb2HcfE1fkjqJki",
  "key7": "64hFJr1kUbWWDWePRRrYaFifrgGNxjnwwxhjvtZzmV78MvJZ3RGBLq5wAkRdQZYubEsE3oPYpKuZ3qJ7eFkVbWb8",
  "key8": "5iyWuTXRPJmiz8oHAVN2Rncs5jnhfb5opbwVjasCJgmUMwNzd6VhULpZMxR4DcJj16ibPkcCU84TscAb6aoYZUME",
  "key9": "2ssY3fNUdMzTbcbvrd4AjH9UEkVJ9vtBtxbxjwy49iKSqCXacRzcBcCcoq76Pb94N4nCHJ11THMcJAwUFYZqVk2H",
  "key10": "4kCdtUoUXGBeN26eQ6wM218NvtvycoZYZnUSuJUxGr1oLQ2APCuS3NcKcCPyjyGCDKNbCiqfwzUoTeG5M95b6LN1",
  "key11": "2jKi2SdKvR4SEhXvmPNkSPzfdL8vvCvk17awYSo4ZkpuK8JA8CR4ezPmsSfVw279qsQqaLFVRYsXg13YnZ76Z4St",
  "key12": "2nUgUHgGxHAxRhz3pQj7p2sD8Qpx68gYMQtbiKPaAFW2XDugkpg5wtgJ8Nd1t4pgkAV9yTjtppQfd67j5GR36P9w",
  "key13": "2oYjs31Tvhwd8XxUL6HTAe32Hi2y4UzTnnLuPd6bSjtj7eSdRBdFkyAtVKyhbUfbHWaFESJcJMHHTR5Pg818Vam7",
  "key14": "5HVovWydGhsaMhYitjiQmcYshgi1izD9R5EJdCNFoG93kYBH8xZZs2WDcYjo6QUv1azwitoNvxeVDnZ3hJtn8xm2",
  "key15": "5YMhdrRF37gksX5D1L1AgrhhAiXLiFXqNxRRX8iU9p8nDjebCbkRk4xktaDJ5KnCDnzkJTS1HYAH4T41VhArV7U3",
  "key16": "4LCzeHKBf7ihsAVHHPedHeNvTM9UgCtR4EHAjFtXVn6FT3cQJDeCrDydCdh13b9Qtj8nG1Mx42ngsZsXLY5onxHQ",
  "key17": "2azTJp1vqRnM6kP5fkgFuNDATaHtuACMZvu5udYqvqazWSXQzRzPcERKrKzhdsD6Dgu4uqiUApPUoaFi81LKPwK6",
  "key18": "3ETmGhi3qEJJeUFnCnz6t4FGC8UGXiM3SuNSYjKq7VoDU1Nx5sXMAxSXHsMBtRvXQE5k1JkAnghJmaWKsjT5MZ6z",
  "key19": "5iKSG3byCLU7bqU21McQgxD9BuSs46iFuMpFrVeQbXcZB7Q5gyLqWVAr7UEEEPNUDwK1WHi3E6VvBUq4sqaV31By",
  "key20": "44pi2FH2K1WGUFGcySptixoBRD68Zu9VLzmKcnCQDo515dutW82Mr1RmnfJRidJ23RWUGuaVL2C5smuN5g3hv1Dt",
  "key21": "2DQDmi7V7wNPyHUNikQvcmbyqFR16b9jo7VvVGWNaBgCZgZykvX19dDThQoUpbtroGe3p5h1TgbduMnA7iLFhY5W",
  "key22": "4AexknvUWDAqLCVwYqYGhxkqPfwMT89gmfsyuRKQE6DJFYXqxeNKhRByaoBAjAAZWhJNeK2syP9dREXTLm9CDcvp",
  "key23": "2cUDuH6MDXP8dFjkDWShNFbstXkPgBhR7arwFm7DPH7duKEGrQd9qkocRY7zNpRZAtY3VhqvEdPYtYrcHJCfv4rB",
  "key24": "3QhDeCyrJf14AcUiYx4fhRSaYCfktiFKca8DNYmCKyks6o81NgUCxuCe14cHgo6QKeSwYi67YBBXBAdphijghpLy",
  "key25": "2BxrLSvq3cVb5ci8nQHKjXqnPVzgxwUbVzaJHBAT9NmFPX5C6FobZJsiCWgifZQAifE1sBoHscHe7BrJ95rkkiJi",
  "key26": "59uvvonJ3XMh1DgoBavixuLEBAHkm9UgjLsacMcrLjnmc6jLp5vjYRKCgNFaPWryNqdy2o6btMqmFQwrGhrN2QGM",
  "key27": "2VhgAQ6SscrJvAaka4P38mgFBXXeQK1KtHn3GmmkQ2necoVxcVfqEHXFJ2KVexDYFP75iJm3ZmfU6LZcGK8SVQwS",
  "key28": "4y4muGJFxS7zCfUxUUk83JRTDZgFTdQrA3GXDZBTUJ9nwUP5GCxZ6jNmwc4uHUsn9YGu6L9ppNwcYZcyZcNLLbCy",
  "key29": "5kjxA1zTmQujuPYdLzGvfJYUWUtTLh6KMZ8SJwyunLVNa226NrJ19yyateWRXiEZ9JpDshXMTBj7KMP5y84KL2w5",
  "key30": "4WyiEnoptubyo1wvMso9Ri79QeiymzNmHaRAuHR8kBc7uc3NNnYVD5tQ4WdCxDuM3X9hyt9HAV8iyVLkZQfzVbnd",
  "key31": "4BSWZfUpCGDmC6DDNfiuMgkuu3W9TLNCQ7rJrs2tZST1Am76qWbSBKtX5XPDmZaLUFnSphXKNH6SjQb55k16iNvi",
  "key32": "32MDatnkZ4eaaoYjjy1iP9SKUpcPSGuVBc17baAyDzHrEzLFJAEv3iJ3tyGHKrefd7cpMCPMbSpPQj3TgmxqWaag",
  "key33": "3ufmXtoE5YUxrZ6oinoufVMSE7g9uLXsXtcB3UhyksrfKDQJwHyUb2Qv73JdBErv1ezMFYJYjJvkQMMRVfHYh5Ps",
  "key34": "5JpqWz24rPc9ACPKNU5NjqoBSih7roLyjo2yqvah3fNv6n57u6ifakbt3ngTVutnDS2mfvjG4bVr8NmfyHKBFbij",
  "key35": "renpB3ZJD9b3Q211MXPjcs4pRJbwPSHVGQWpvvMU6ZyQrUgWL4UDogAtsjVweTKGU6NyvK3TDUjqUyVGM3Sxgmx",
  "key36": "5RcX86EiU6HounueTLBSdwRXYD4t3mm51c6NrrLPhrdrNxjEWtEY8hqT318h474Mq1YSVVRgLJkakVnwU4R2CAUq",
  "key37": "mEwwJg6Xc1WEnQQMK76ZhCC69sLqEd65X9DNrVGpZRJA3rcammSgi9Knf5Y7h7KnpGHy2qDjdE62BbCqpHtaF4M",
  "key38": "26ckW56qpVPEQppcNCqvyGER8D1M5YuEqqJG1xvdZdHzbH24T4v4qnMY921CBsRwqQNuAvuYgPfLf5z37B87QUL7",
  "key39": "5BqMVa83zGAMajMZqcPErNXVQhmjEscYqbLA7wa5PxcsmQz6t4ph75jFRVzwAdH8m9iukJRLFSxjuQpTeM2SkqVT",
  "key40": "39gmLJCW8uxVPd2P64H6anV5JwJoQ5BsKHAPWK23b4kXbHqrfLmCrBKYrfRT5PvdfKF7PmcjVTGwjA39izZXQmvt",
  "key41": "5fDF1oHaVMJXZkHue5x51RKPbuZsntZVsvJsnp7CwdkSfWeUXNBXvWcdeMvmQ11djusmEapTGyucp1vuo5BQY2vo",
  "key42": "8eyM9rs2A2a8PdrGafoRf2d2baBE9HauVeX4npFndGCUW4XA3vEPCA5a7QhAF6wJF3Gm213BxEv8kvSTKZCE9tY",
  "key43": "38LBLn2LUasBokMvVg8HTGJmFrgm2s8942vAG8e29GZ1SJ9rWaB1RqQKkg3gCoXgUtVvLchRrAcLh9nPu7Ly4tri",
  "key44": "5yz7dSXmjXYd7xUKQm5rMGut8k9dMx8SBg4fG1A3A2PkHHpdGpj4viy1f1hgPeqWq5uaMNfEBwkaoUNfYfLarN5e"
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
