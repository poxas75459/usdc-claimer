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
    "59E6irBqbSUNr3qeYnMx7bwqS6weTEbVTynNtVzfW8ZWWmY2pebS8Byd8cv14qbfwcHjC5Zr8NSoi7P51hzaXSrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FEhDomhwmfu3YNH7jKejuhbUHAX5siKCxhfN9UQknE582wwzHx6sTBuwZXa64bsDXbTUF5xDXpkcz44yGABoQKX",
  "key1": "4uYKbFahfBWrtBatezqA2MN2iUm1uxB4G1MZEyBQf2v8VkjJWdkPNcddFjXXpFkFDwecyQUkq1xEwDRwkzeLZ7DW",
  "key2": "2Z2RwBX2xPuVV1ciC5S9BW4C7ZXS9VcUig3Dj6JmBYy9jbhkbVRqD8R1bkQ8KBDXUVYrN3Qf1swyZccjjPt36AMT",
  "key3": "3EPCYkZUN6FX6bLc1XDTb2MZgyaVsiXh7N3vw9FkQuW963AeXLt3xu5ESVe1LCcf2gBzzXCTuSaP4MRBCV5wY1me",
  "key4": "3TSEdP7phhJWUfCmnBb6GpL7YEE6d2p3tTBsfD3HsXFTSaDPyLYbGo3Tq7BA6KErvs8r3asFJ5oEYKynNymQE5uU",
  "key5": "xdXLSHCeHCJjNUoNNPcAQLS6ScViZF9MfK7KRUUqCqxXGkMpR8b8SjaYtSGveiMjkYK9rhMBqWrD55K5xdf5SKK",
  "key6": "26r7CBZ9q9R9hpuRvCamkg67mtsYWUXx5HQxM8nXdtAxZxyyCSGuDvs7BKfpiuKRwKAvFxq7NKFgWcrgv4FRtXqm",
  "key7": "4R5aokPhucFKQKzMvTQwNg8R9petcggpNKEfLZpGKFE35oPP9Fysdvr46s3bvjRmATyXGojR55CKMqn59aGRZBke",
  "key8": "4icGkqteF3s8Y4SiKnbEFhnDY1kFSPskRqQcyaSu6vyKCLyjhtL6QM8LHkX6MRZtWYGANyqVGktF9fenpzx86DzY",
  "key9": "yiXPCQWFseBeKNitZ62oAYg32CmpdzrvU1PSPg8WHE16jWPtAzFNMYAB7y8RhXh7c3hHdZrT9UH11d1j1j18doq",
  "key10": "2Noia76KDJgoWDpKhrBsqnkfPfRTFCQyrePXg2jyQoyVitbvWBX2FDSgQQZqGF91NqBJoGn28tHGqytu1EGQxnvy",
  "key11": "2kv7diQkfQFD84qdBDPCfRh3CiFvu149zgE79eKDnsytDBCPC7QdUqsGCVmYAga6SRtfAVu7u57Db4romEjfPJqP",
  "key12": "5gkjgYVVq4kW9SvenLJAEgKUxF1jbX4kTjjatKB8xkKb2PWfo3sceyBagGUPnaL62vjVPkk3uRHCiHtPsX3jizzH",
  "key13": "2XjTkvrrFz3nmgGMoWJzT5YwbUbVNLZjfbEKQsR1swmD8xT98pBr8XXJrBaawgSdzSy9HYu1X7moRybhCo6fKpRM",
  "key14": "3xAQiuKdi53rbTCPm8TGxZ58bP5qsH94ivzoaVx7Rabk8mQCy1s5XiLoAHnCgD8frSDjaRUoMgpXDQeuMy8jPE6d",
  "key15": "J6zxhhLn3BaSvDNDSac5RRCeR7iorY6ffzPYqrgXFQ8kxn8xDJs6YvvQwUkgeLsYwxQSMjGDcReuREGh4mpDE7r",
  "key16": "4tRpYZkjArk7eQ9hoyy7YWtwAUSAKoRRACSPTwokYk1LbUcQGKccK59MxCgubaix7QRosRf3sBVTUNDDQ5ZRh4n4",
  "key17": "57BHT6seHDfXdaeNQUu4PLRBehSB6KQuELFiCqWiVGz6DHYxyboNYMMbu3uQrH4BRFf17btjRxJJKhY8C6fGf6es",
  "key18": "iaqeGS862BLHRkPTJ8xiy1mUrz7YT3KJXGVksypsgsSpgRsGrNr5pkRtfXTvYBinVUHoNJQEi17QW9aoTJ2Yz3B",
  "key19": "3dWdinjE2P1BL9dU1XMVUXQMiP7rmA22a8Z7pGuSL5bCxDW7Uw4fJHbybbKVVuqYoL3cjVnrYys6HudpPV59oJWA",
  "key20": "5XSLrqZ1d3AVocvPxVSYMDMHbt2G7yaoAE1bcwjjMtKpksxXPavHPy1dLu19nfUk5KaQoPZYvN1Dw3KqnmF9AedY",
  "key21": "4trwVLzfLDuXppFD6A7kyLqxYpgoAiyK5r3F16CMfrf8EAvwrp1XMNmBgEvhSGdSuZJ8kvF9LcmWcXfHxidcksJc",
  "key22": "3SqsJGz3Cu8HWR5DtjXKMiEynv1tuqEHs9tJS2u3eB4tWv9PCaTVChSM7xjCwRK5AE5vsxiTC3t8tvAoYeJ7JCgg",
  "key23": "2sJfHVfysR3v9usaU8j6fVd82YW4JLBJd6pFCUqmwLUETJaTBbPDSaWa9mhB1h9xNb6pgyTDZtQGKtzBUdEXj7ez",
  "key24": "3KmqBWm7NidhcmbQVgyrVWm8ecreWBTYyBqemtDq32VJ659MwB3mupLwDMH3YYkMyKVx6DpBhbJg5QaPh9AZSimh",
  "key25": "EsjuCTbSUvZJfZrW5PEmiKdjWcY9N4jXTqUtr2gMoNaaSgyjhw41S3diqfrcwSqahXDnp6dwoaq5y7Yw4hQt3z1",
  "key26": "2aPJxm8ZcPc6gE1qYsi4dZdcXzbHLCVhHWYsPm6hfGwZS611egzr2qtpSahPWgZgQpBfD32QrfiaG2mKhLA6RDji",
  "key27": "2HA7opkmfuZxxECf4MdVCUCdGwgRqXTdSmmA9eA1ynN7yTbwwFjKj9q49pNP9VmSphEmvgQvRkGNeA4Qt6CNjiRX",
  "key28": "5u25h8ZwubgQyti7QBJbvVMgx3VVLVLCWNyqYAUai4p9qrXZ3st7Vr7EYDQH2xbHWkmnk43Vn8MnrBpcfsTmFiR1",
  "key29": "32syoBHdTintGHdEEN5AddBnCzXbHgyKMfk1tiXdBbm1VAhdoU2ct1dVqL1NwRwi1M71zwah4yR82LKbxcTCFo81",
  "key30": "39YWCf8anVkziDSvkoCCWtcmEaLu2emKhR2MDUSuZiKsyrM924iLb6QsUnL5mNGjZnwk3sui4uXKch4JxWMWKWqa",
  "key31": "4ummfqD3ikq8Q1XtuhTifAeXTyakF1TEyWuUAPFf6kZ1cFa7G4NkfDtmAv6f3524u4aZCKL3pBFJXhYZYaGGz2VJ",
  "key32": "3YNUeje1Suigd7hhc3tv8CrNrjgTHHvJz556HtFM1KtdccndjZgJbXRyXHU3zmutypWsS6f9MCpBjshKKrmyvFFd",
  "key33": "4xw1RdPdTUFdQFbFBuuBLjLmMb9EhHrJjjv2ueB38vMmXnn2DjdWdQ3LPxYceAd3qP7oMGc3hDEDjdPFV5Zkf8jx",
  "key34": "2sWePTJnjn2FkM6FqSYYdBEyLu5Qc7dLVXEgb7LaCb9T6mropjrEAtZmc5JrTmtXEW6B2EUnQ11zY64HbVnB3N5M",
  "key35": "3AmticEJVPNWeGQnD6y4LUnE3tqqbHbv8QSSuAgZM1vpZEhvZNGbKbNeao7mZ3XwTg6upZEvvwG9smiW28xYKU2p",
  "key36": "4jcBTohp7M54JdPmsV4teYvmHHNwXsXyFAnVccqfmzhLmVq4GJg1Lt5c3XoqJGipB7w63LHqPmmhxWgtQwNwQ93r",
  "key37": "3uEtTPQbM1wo2Y5MsVdUGUJMkxQFgrgwap5KQAnD46uhLTKgP62oVxX1TaQYFz11qiVcTT7UsjgEHShXrZCpHBr7",
  "key38": "2pkuFtk8N6YoSpC26KHDuNp5DNSQWxGEEDbBkAAbyLsopXWoq7V1VAamytyJT493a5JgLydD5SKMovpoe65bV9sg",
  "key39": "39YWk5XLNnccD1Uw4QsvMr53jveWR9aEidAmtZB8CVRdY4FodhuQDMuzEaHLHqW7XdwpPjgWTEanoQpRk4D6evuZ",
  "key40": "TTRuZ4cpCzqCd5uj24GtwstUBER6kq8BxcuTRHnKrYQC7CpprTUSd7ssq7oinDw6V93Cggs7bPhdiGUiWbZGEVy",
  "key41": "5bdJjcXUdh5poGAYRMdP5e1WPYQjtVSvNKEmYTc2uAtzopuHEQB58oDw8SLTRNWkSJ1KcjAMSxDxnQW2dpr7yL6D",
  "key42": "T49jhzGGxWqmJsGDc45oYAq1MfbM8CgGLGUPQTaYk34XdmUysiKE9xqNiijNgWKnRx1RDt8sv8mE9ZFaAJtv8jr",
  "key43": "67PDnsQ1udAzZHdNUAn1G5qqQB2mtfxHnRW5dtiPsiPdPFeCfJyK5UYtFL8rLhwkwS9zrgpGLtgkkX1ZWzRtTtMf",
  "key44": "3yGmitA8KcJ8y61yVXyKM9Xzw5k5Zd66Xo7bDuXcfjXHCeR3ToFcQ53j6pHWMpFKtobM6LeW2WLQcJLHchRWLj6j",
  "key45": "2ddtyb2bXXXKUuvn4Yb84Ctq2XY4fiK6p5HrC4fLZEg4DGQg5G1CjjC62W2dv9s97N1s6nTSHX4FkS1mtVDo2xJj",
  "key46": "4mCA889CP9rwBB2gzSXPFWD9qx9feGZC9senuPmwqm1Vs4XNCqNXq5kqEf62LfozLyAS4zcZt5kHVWwXRBsos3Q7",
  "key47": "4d1Dwxev3PszTyiabsv1y7D3rwfsk1nfyAw9eQRyYh3YMaEd5Ndk4pSHcLuHWKXZ72b9zFnfS68YmV3Ej1uPSgdV",
  "key48": "2hZiJubwa5P9KgchZMQoaGPJxyygE5GqpEcRQuEGHEuuu1B8gY5tYnrvBR2sKrkkEVRALeGXsnmhqAUYo7MaVTcU"
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
