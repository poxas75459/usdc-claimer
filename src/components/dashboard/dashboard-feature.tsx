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
    "27pKYXFp7qXExNgcZ9ZKHXuXHbbwXD1wjtY1fcXcZgtXoeDi8hHbT6Sg45TvoSXfptEz5PaxyJUjH9WYLKJPZ3d8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9nvdZp3kVq9Qr2MhutSbHsGyb7vPYAm7cfjvo1wbEtHTSTDgG46cd5wMVzeGmo2ncjxQwbrMVh2cuwLZfoefuE5",
  "key1": "4MRcAjnRCQnd1RdBBQRFhuqZFPyjkfnwQsCT1mydjZyH1xrs5WadqVaY1z5Njp2B8Yw4EqsCaw1FVMKMTxXDUmTf",
  "key2": "gqsinD61KuZ3AC8Vxx7U7REaEEbQwChg8nqswiuwN6hNdmbwdqx7ENUV97tXDirxqBbyhiGeZk1jFbkLowWXnxQ",
  "key3": "2jAthCreF71atF9WzMRWMmzxDHimTde8gdiNdnvL7fqoNvM5G3RHxoGsgfaYGkvP16Ukxy5vN8DP4KYGucmTKaqw",
  "key4": "9raowMZpGBeA6HFR1mZ7Xwizv1GSJ5eUJZiSrgoiAEXWNUqvhAudQk6AB6cw8RbtR5hL4ZA9jvptUxVFdbUrFzf",
  "key5": "3szGdfuGnKFtEmHR1K2QJaSpukunvSVXLcrbZKn13PACdR4dEf753hjqABzkiQtsumJVFqyt8WcbKPASUQrfLKfh",
  "key6": "2r5jS3dcGXVwAVCmnqnaUgabFfqn49KyJfkoqRnK11eATLXXeMib3TU68Tbdusxqp2LXo9eeNp4dUss1mErjgr8K",
  "key7": "3K4BgsNthhxx4SrayWGRxuA2vpVwCdo16gs88TLnXKyCUUGAgGtFD4BkcZnq3szrp9ie8EPR3pQLjTGRQj4rWEJ9",
  "key8": "4ChSpH6mXyPtS114mAFV7Dy5FMKRb4pcTzncMLm2Gxu2PhSL6Yqq9GasqDt22Qgq5j39WV9TdGFT857rtDR1r8wA",
  "key9": "3SPvSZUHdEZFHq4ANVet9JAEASLa4Xe28YyFfQbMm5pymoqrfvzKcjSAy4ZDhY3DAEYDg4K5M7mjugSyVEFWJ2rU",
  "key10": "5WQSsPRtkdzFcqfTybY3ssUTcHxPWPvoqpbNksLNYqdhGUDCGXHzBmi9hECyHHZRMEosYGPnHD1TnhdG2x7Cda7E",
  "key11": "4Zvjh6TwnTLeZi5wPGf3rtsfpyQtpJ9f5BxWL7YJQuCEkPvYraHzuaW9XFBB636Pu3UGhjwRkyRNgy62JNtgjACV",
  "key12": "2zAx7vExzZ68nrSwE8bCPjTP7Hcrd81APjEjkWMzrQ1aAFBZqPagy6MCbUSS9htdsiUeN95kycYdZUQryhU1wofq",
  "key13": "5kBiUUWa2hWZLvPvPuf27CVKCu8fDzw1pyx26bym3jZEaPjqjF8xYNPYB3zaKYaLvCnXzXgp1kqk3cD8GyRVscq8",
  "key14": "394J1t7C3zzwwiGS3hVeStYaBRNCUxVFCWdh9wovuCsuvGRurGAJNsWfujMD7r1DYLGTQTUT8XuLNrvsnZhzs5qB",
  "key15": "2QVsMkXXsU3XUDAtsokNNyLhXyYQqM4V81xhRhTRkU2skNfnUMh5UQpzbMZtTvYvBnBYPwYu73hjYivoapM9Wnnu",
  "key16": "4sDb1hKdrUWy5AZJrTj4dYfky1FzQwYwWC7BfoVPKRka9cswqNn9Z6ZrZPHCDimLwsPmH8NzYM8WeLCMG2rZ1DWY",
  "key17": "67Ca8FnPDEtYwoDpfKE1r3Y1xWj5oftB9TJ28N1ubtEJHhuDdpSm7BcJ4roWMovHhjZhxNdaW3FK5W9yMR1jectv",
  "key18": "4uygTMTjFoUiibdk9K25LsgZvyreqhFowu6HVdp9myWhDvPiZytHWjSDzd6hcYE4HCWpQoCwpkni84WoYG4xtnS9",
  "key19": "36KenpLmwBNxg4VNAuDjsrnTAATQjkS7nCRrUd1ZRniPokp2Sxsu1CQj2KJSewzaWbCeiJP6h6v7vMkswi86o6B8",
  "key20": "tBVHFsZCG9KjMVYeXn4Vg7uGCvT4CQSigWHDGVbajMEvx79uhPWF9KS2dK8xVofBKuJ1ZRcNkqDzy8pW2TKRi4s",
  "key21": "JiR6RzQgsZxwr8cjH55xA2SGLEEFScTR25ZmL1DzCq3NPQq9qrAcd78miMxMx8FjmBiN6uemj6urxxbsXDFn8gz",
  "key22": "4hioujhdhoWhxeK2HAN4QkBqJRWJtQxK5n75K2qtDrAe4g3uKJ45XR425AU9fyeyRJLKLuARG1W2ySKk8jF4m1CY",
  "key23": "3BUhbMjijvT8qMuDcAn6et3bpebdcGoGQ6kJKctwBAQSGK84G4n1W4aLXjnQ3E7HM2R5DWoLq54oU2545ViJy2AT",
  "key24": "3oV4rB2B2qQYtPg3X971UwDN7fsAZuzKqFfgKsetYNspyRgALfQA5ExdxksLk1vyNwSYsNPnM28HU3W8axDZ4a7G",
  "key25": "2n3Y92bVE2sy51Lpmmct2wvthiVZMuUrFPpFV6rhbSvK2xAKnbSoav58Gtn1WXd22xEYVRTLuyjwnpuRTu1njxGZ",
  "key26": "3pK7eRFgymeBAYmtPEb8DUMVaNzvstMLzbNsAfnMzjabU2MFaoUwqptt5gNJe4ytvueSDgP4d2hcpEc86pnHutmd",
  "key27": "2p17u6WGdfq7MyZiMNKAiTHQsyPXfLWsu5EHBi5yGgnHKWAgQK3oRr9ctKqb9jRwrR1xTSN1734F2Bs1P6K1CkHU",
  "key28": "sByLWGThhMrdGyLoFMVeNB778SEexCXKkZ5neZ8QF51jdQmSLMF8QcwYUvLgvNUHE7gTRgzAascmEZuGhma4Rt9",
  "key29": "vjU6vurPc4yohyLRN5h76Qi4zZvA6B7AhvzrhRGDMH4W1cHiCzjK1iWvnFzCFqD4BrYEDdiPfhbK2y7tQDJEH9E",
  "key30": "2BuU58pNaq4gnbpqw3HKHKwm4iteRvnEHoy2VeXBqdCxkLY1pUpoAj27gaepy1JKGm7y6PFtyDQKxdyAjySPfqrV",
  "key31": "3VGLuyRdXNYPpAHpYxXjAQc53fJPBh6swPBrA8zUg3mFWfkpaPY4EVowdb7ox7GWXJhD55sR9FGdizwXTpoeuyge",
  "key32": "3PK1jPH92bDD2tQua9s1d9FPPh4VEaAXg8hC9AMrtXhYJg33teAaajYHcj3TDT7fT1EcPCHGaJwDm7YvRXK5aWZP",
  "key33": "22vBeNoTi8LEjHrAsfCuU6daUo4jLgAfC4nHEv9WBTwiKEku7G3cECDJTXhJXBRYX1KutT553F7qHHxEDQarLrwT",
  "key34": "62omdDnuh1cxt5DDpfKVovN2ZpJuyT5pxpyJyZo5vkFS5p3nhjKoDPCc59WNZZApw3sSAqQpFyMZHCGtcCeWPFQ",
  "key35": "UK1UdMSFXCBiXYitNjtsatdbHHj3gpLMsoxyMdfUqQR5kWtMp55nts7ZtuBgHeQePHjFrCGvPc3aWecrsiTzbGo",
  "key36": "3Q5VUsfvBxPYYKhxdCNBcf3KcJECfjkrjcwXR9QZMaCckekSaVWipAZBX42g8E1JdFTkrjpahp8e2FvpTzgL37Fw",
  "key37": "wUmbav2x1p1GXUx6Z4SeqyoBdn5uDGypddzpbsdz2YTdPgAr54EwvBM5jHQQLLtBxL4E5F4hDMDunwP6TDMfeki",
  "key38": "5Trm6jtXyDiozTeTevGbp3ZFUpJgDYnPEX8PzF87UC7Uvn8xZAS9B6nghyVRvHUXReVHn2jvZCRBc6tNcMGUMCGW",
  "key39": "3YWSw989LKrUGWaMfRHVuXRuDytMGKj4mysyoHPCJDt4qWdrnMyoc5DBy8pKHXvNeRZ8PuA431Z2gweSkajhtZQT",
  "key40": "M8PzrdKnZz3L8ndJSzvpjkuQZsNmj9mm3ZLqneor2wDKQAsx6XreBdLjSzqB6RzyBmXukpUVJPnzTKhpqouinMX",
  "key41": "JYZkCga6RuuK4obcpy2NyzxioTosPLmqJcEaeERvZqi6HKpGg5DECwExypUhAHvki8Bsgk7ab6suha8p41Du68n",
  "key42": "3i46GMs1ynTrCeT5W3dfN72tKzxtX8N5og1Lms6RCR8BGpRhafhhbeD6FVLbPwFqhKxR9tcgVMeCxvtHgxRHWEvC",
  "key43": "24EHda7XBwKJ7ECahXP9hxdxtrYpBWmCkXwKRAitYNcJ8WBotsLeNK6vNBNRYNW8zaJW7RukendXiC51G53G6hcX",
  "key44": "31Qpwd1qPwjM3gTN9tmuGqYFd1cpR4an7JGMYVDkqmrVjT27esV457sMkMEgpiowXHaUkNFQCsZ5t885Xncu9QbF",
  "key45": "523SQStWdwcjvhw92RNVd4diXarg6UkKq2kx4HfMrrjzMpUubsaf93z7xQXDc5V75GKhRj4KKGgBPAH9LvX6wmZm",
  "key46": "bLKY8bit7SPbYarUKoxgiz1QkAxx4TBPRc5Z9NCKtpidDTiqqApZ8Wm8UfBUbfzU75XKRBBCGVDdsqwNgvq5NFQ",
  "key47": "415A8KfdshLpWkKC9r9ytQodBjxQmUjiYzJ4oM4VCxCnvLttkKYzaqNjEcrTJc6EZbvjNnRJtmpNTsTpBZbvtdhT",
  "key48": "4ZAh822WkQ2V5HkDk7LuoQ4LUVHXiBjXsYH69G4iMnVadneERmd1uoBxNQkUTaz4xMgMA96EQ7B7iG4cAzLdarnM",
  "key49": "R8GoG3f6T62YCjDuMNKtxKuBsPrgrkSYyUAgcVu3NLe1zPGjuUFaJ7bxooS3UbzD8vAA6ASuBUm2XpoaKgYnPkH"
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
