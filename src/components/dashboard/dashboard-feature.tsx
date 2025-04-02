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
    "4Ndc6fys8tU8FXdm3bf3uDu3C6vqpJPqxYFEYCPWYug1DsxqG9YPBV9ZejYVsiKvFwsXpXSDRdXxpQpevELi4q99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gn7qYo5aQD5Regj127a1eRE5zS6xgLMnLf11Mxz9YZ8tkoWtErKoXv7YFaXADLo9qADXKskgCv31C252TF1UnMz",
  "key1": "Xorjhf6jwqiU3WqThCsnvmzFJm1w4jgkfinNUTLbRnusmurqxHJhA4MP1a7zBzR9Z7bPnX9aadYx4EJTKXbZL15",
  "key2": "4PzKzfxwLfDYa4aEQeU9B4xQk9Mt2qpJrJMza7uy3kwdfu72969PGYyM1F8m3pxzBer5U3UvMnCg3MvG7uZ6urJ7",
  "key3": "5Vax6bKvtQgihYUwZtyoGNvcC8CWYfPULKaqsAXPPpJnu43NHVYvasA315Dw5G22oUkDsJdctDMcRc3qzG6yTrdG",
  "key4": "59dejbMJPbvLj65eXV6Bh6sYNzHmFtCEe6nHPJNWQaJA2MLMr1PWEVHzLVjoMDB9kfj13sx31YodxbKr2qxhhaEh",
  "key5": "2ftQbyZRQ66HXSuEF4KSDFCNFfTEvcNYVYFiLdsCkLjSr4ry8ryfP1sYJqKXYN94DTXTKzUYB5hUZ82QEbcCCGNR",
  "key6": "5C9a7RDTa4ZzRXoAK6ZQcF3FsEL58UwtoKWAdtmz4NS3ER4e9JndgGiBf526fQ9SBA4qPBJL4eM2TuFxxbJXxsgc",
  "key7": "5mURkuhz68w7cDFzAPV4j1HVsr2M7PK1aJAFQXtshmVxq1Ky9xxbN2rEP8dXkcw3ALevRDZAKwEfAXNQCzRdcPMb",
  "key8": "3eFCWeKEX1rLZ57v7B9s7adiadChn1zimm9WKdAyfmyxmibZBJ2FipcdEPC7yUveErW1fU1inBki4PPAMav1KvY9",
  "key9": "aPhXW6daLTnF4bK2ZztuUjgzq4T4KVNVFctrtAfe5Miw161Do996WJVKwZQF81RUbfSyb2j1BycTRfshZCVfoeU",
  "key10": "5EKSiqWTa1X6Z9pHPLbXxVZe2JSK6zMNQdTwyEsjvdJTEWzx9jiwmh4h2o9fKviM6Mb7S3cXKZhSFbGaaiqCLtSo",
  "key11": "2PBrzFCmCrsasBv7PvhAuHCre6mntGBMcAQF6Vjx26QEV5c5tD7EeR8br5wkPaBVDXD22cWXouyS7noDvm19KE8a",
  "key12": "3sFAFQnUsk1bp2TukugpFPYWsSJiXLWRRfYzYwEqUpE7nTYZrftyPYrjr89Gb75Q7UGTysEPTR2mk1UirrLfpJNZ",
  "key13": "LH29vrDo8vUxP7K4gTEnF4Neo9DWLBBpWgw82t5iqrExbUFHoCQZgPhQG17gRMA8qqEEKbnrAw6i5aQ68ddjLz7",
  "key14": "7K4BVKnZBKREE6AC92HJ8KwHedjUQgEBj8mF7gAzxBdG9Nh81PwdEJdRCrLCf1kGQpBQCtgSqTskZwhjZkNAeP7",
  "key15": "4Y92qzvSh8RY2SctJzr42qeiRn9Atpix7pEFPeFyPSk2fCpbdyzLkpjBD1Q8x9uAKZJv5651Lg5hdQp41HLR9Pvi",
  "key16": "32nrMeKDwdrmk1FaijLaCZawzFjaD8eMDuatTWKicQg1j78uQAKUvmZ9SL3t31yFhjKtSbHEpHHvxhD4WJ3R8F7y",
  "key17": "3nt1Pw9tpL2iTUWoDojXmj5rUVKAm623Hndbcg8SadLbQwXe7guBkAmR6TSbnbamXG4EKqPxcdP6ZSjiS6TEeee8",
  "key18": "4kJD4GMtpXSvirAWFcUYvs4dmjvoRPvYRPaRXpArAepb8HP6GS3ufJy1tbacKSnpF24ggqghtwjhjTg7et9mnNAZ",
  "key19": "ABvX3CitvmjgxS9EZRguDiQHVn1vhkzJ3BnriXg3FftKX3ikcgBH6JXNBMvXaoELDvT8nLYstA5BJzSy1BipR7p",
  "key20": "rHVqM2ZMeg7AUsnYPio13zEgaVavepZqc3gMz6JqPvHK2HQF8g8j2y8DAGzDT4uutXtPxL44Djipz479LAQdH6B",
  "key21": "24P22ALPV7YScgHmmYkBudmzM3jL3xLKSmueFnjdxvHuNrguH27ZrPSaasAguDpTnCY1Coknyk1JKb3i8qyoKPsX",
  "key22": "4E4aD9afqby6VeXs6DQ1XN251J3kqs7YiZUjjkcx3iUpQcTJRhAv5uAjKEcUVJY3ubC4K5H6Rbxb7X97eZcSyiKM",
  "key23": "44i7KpNiYWWxCKhTG5eN6UyzvgAZkHCnfwfzVcUt5aTRbDqtcKCrzLAK1gJYGTfV5MF9KwQ4yB5NqYCTpmQBTAzm",
  "key24": "3d2A4jWkst3zC5yPvFQrZKWnPjjgs4KRURJhm8AGCrjJtEcdhjwRKmbZp31hKGmqf2E5RMDRKrkhUQRzxzbwk2CZ",
  "key25": "aW5Luw1TgUnvbRApzKspdPXae6rmdFkC5UF6opqRfRYYGM249cdqRFDTRzdVuk1uDmTcutedVKoW4h96tVZKpG8",
  "key26": "5r5Tuu6PSdkB9QWCJXvLi3na4xjffsJ9ZC74DwyDJKqz9kZgJ3j7bqJPMEsyUQNpLG6Ka3A68zJb85hGL6mbxkCj",
  "key27": "4PgkwMAP3gNFAsT7Pn9si4kyrbJsmLLy2EWLteHScDaTGWxAMJuiqxEKXffDoY4P1SzjaaiPPK79Z6s18uH5UaQr",
  "key28": "2gEks8nFVX4tNdBFFHS3qKVbEJX4kCUpyRd3a9CQqZK7YDuYVjYtg3g1pSoc5ba4mCsrSqxVqPxXdQTvVXonwu93",
  "key29": "2HURGAXGhy6NHGGW84GTqfEJbmqHSbibGFpw5Fgx7bHzXbDwyLJu5PV87tzkygjBosHXE6W4KRXWrptDAbVqKXBE",
  "key30": "61NxUd5NCLk4Aff3aofwaAUo4S5kwXdMawLrYrrugb5zvKE9C8fpFZxzqrufegxdFWSr2pkHa8bUhTvwuvtrx1Bj",
  "key31": "23aNg6eBxFLfRSUk6eCxY18Ln6W8qV9xQxTWaQJ8XiRwepNWp57J6B7cQW64uz5mmpuRqxDDcbdAUbi4ru2XbpS6",
  "key32": "2GcKdgZU1j7SBXWbYTfpNRaCa6qrtHo3PoR31VK9WCepWUFmwM2hHoffLa1pym6oyoJvNvXKmbgAcoCMybpHXfWY",
  "key33": "4SXRC48S1JB2EsprX8QfkG9hc84xKfm6HbgZQh6jYeYFvq7QFwRt7Nwr5oR2ufq9FUc1AJfYYEsGPfrxdr5Kp9Zk",
  "key34": "2MB66rkHeaAwCHWuWjoikkNWKVqzeEPfEaHNw9Bvg3xcqjtJjh5CY3LWKyhZFmmGYZFDTRVMfYFx2ratkghRx7bP",
  "key35": "5trfP3MQPDPCFExexeSYnzr2X6c1A7ycQCuHuxzzZ7uwseBuuzcxe4nwZuvWdsc6J3EChU63mjMUjRkKQiia1FJa",
  "key36": "3a52AqaZ7s1oT54GnPDcfE1o3DhkD89bVitG2rPfgxw94spsc71mNbrgSWSHReAchmcnSWpPKaN347Wnp8rBEMqJ",
  "key37": "448bJW2s9UgfezsAPGdsMrWUEJg6833cmTS4aKLLJJaiCrgUJPRTD1RxQXN3RZBb2DSqmsikxtEcTHtV1ZbJaYbJ",
  "key38": "4E8UxzoGxQ2a6WiZqhiFyxqMYasDtSHSVNBchQSQHPqSRwhiKxoq3CWLrHUzJScVdbxtm3S7hAn5V9KFfxmKkfN4",
  "key39": "5KTrdmi8cMdMeFZPfPU3KTnr6CNWJjc1grnpme4n3asnLnWsSsjhGSxszaK6KWY5xg18R8XXKqFsCqV63air46mF",
  "key40": "47CJyopumBZCoHj9ZWot8oV6XtM76D23yKDUzhzBjD2k2b7VNQ8aWQSJqqLqTUGofWHYjh2b8jTi4k1ZRUgAZHQ3"
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
