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
    "3Sa6pqpW4zrezGzyVxxtLvPEvUbTMYnYyde9ETP3NXpSBsWLjx2NxSi9wLwgRRPXaEi7tjRUANRQrpfYktjhpjDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KioifX9BQ1K84NGVidiUXDT6k2qGuVMVxFQiFd9eecCJSzo2B4ijbbUtrTXLWyZiSPYpD2wgpHNQNX2b4Y8B7Nu",
  "key1": "3HT2jCSkJFa1igs1xqJJtp3F95Vdw7ZbDQVbzjTVxMh51YuSRfS4dAbtDwycE96UgTNBhTCty5BGGxW5Ec98YgpC",
  "key2": "yMUmqyzXYjZuVUkmjK5f5RPJW9z16Dvpsj4ohCGsKgcj4zbzM97ekygcqKyL5PuiaRtZDv4ZzEt5n7DLjY5wL6P",
  "key3": "c53oowoH9pxsFCYEj9Ly7GiQJURqcXtsijG7gXUxU1hhzQWFc9xZV6Zmc473aYGpU2sBBwxonqgNr7EAaDBWa3J",
  "key4": "5QGfjozK52cU3YgNLQLti79frWZWk5bXNqSA5n8Gv4ra28knX8jWXwPCUT2ypyWHmafHYotjhafZLHmy8JsRv9Vk",
  "key5": "5T7Wd56GmCJuVDS1cJdC9tZ3t2Ln5JgQcVYCqejbaoJTY3Wm6MLWzo7ghmTmxN8JFN2aWLexutWBK2Jcb7Swhgdx",
  "key6": "3zkjq5hZFPeTkkg1roHhWJZe3toM8zC67Yd5Q9ssF499DPvfEtT7bP2KmCoJkBLB3U6yxurSbmBNHe7mALAAdGsv",
  "key7": "3uYn3TNEiY9az6LeWWingZLXH7psdtwdvFGyHdW8Nwpmobc4pd6iuGq1xfdZ6ExchF3EiqFERsavQZxPyQipo6DN",
  "key8": "41LTBC9n2o9Kkmun6bWRyocSKCK9Mrt2Adorcr1UteQ1WDktQAt7of85fqrzirw3bN2iNfeDpd4xBze6LzRDjGJ7",
  "key9": "4GcrGKiaqXZDN8kWWAdG7yPwZ6zKxGZ3E66MLtDht1QbMrjyv9fsRy6oEkQgBNuUNS1aXRJWwgGmf5XZwRMBko2Q",
  "key10": "4NekffRvw5sgzjBYky84t7cfQBijTpA3jotXZWAp6887F2Tty1NBPuHJnbvyLMdZKeLRufECNL7rCxMPougm7xfY",
  "key11": "5hat1tdoJ3NJ7snSJKGPvZemgAXQmzqArdfBPamimxCD4CLb9dNst6oBBLxPBpwLk4YFfjFEw84Vpjiw58kUPki4",
  "key12": "5pu6HN7NtFRrW38eX4fx4JjQG6tmSGduX96s9R7YhDtSwPB4x4UBZeYWxqxm364yZH22jgU1WgdNkCLkQzxMLGuA",
  "key13": "38qR7tFheF4wHLkriaRD4S5YFUB4qbtCGBtcqGF1gyCeHYPyLuhCLHuy17G9LLgMwF6DhYLhkwrxfq95ZpJWbcY3",
  "key14": "3SrcZ1dTQCEEhgiidhBmGFdLeEa4hySvYAYuHZFNC4nKoGSTjEJ3RQgDzGUDKc5JWo9kdyCczdYjY9nEKowjuvLt",
  "key15": "3CXkZYSuSjDMWTjoUCSpYsGWBbM7rJ7oNu7Y9qqWQ4VHpb31KJjATDWPjixJdmHbsVedEsZaViaXvxFjnkk4oXBf",
  "key16": "4dbqXLvLXuDTjSa2vKdMmMRqePcDRBeUaPqZiVRYcUzxCuV4aw5426BLNgLXnEBabHeLRnXKaoEt9CzFHGbHc8Qo",
  "key17": "3yiMKE8YqqLK9uTgy5GXFsHeTEF18y9HS8usJ7xg445P2i7yfXrBK7SBGSBEdBSxuM3bRBAeTNEmgCpFh7KnkBxR",
  "key18": "3YUPP1Ny2drHT2oCCRBGBS46WaHfHJ6VhJdBBtmS8ELrzWodrUbp49LqUo5HeX3KqKpmUaQwUZm3zV9bRGCFyjPV",
  "key19": "mQmzywgBvNDUzh1rjUyVTJPzrJFvajQezrVBuwGzmAK5Jbn2MfkaEzGM1nXfUUweoGGTc24UukkzGtY1FqxWXpE",
  "key20": "2Th31Xx3U1XnAwpso55kJfXz4cncUstbUotUciGAFs4c3g7AYpmZ2wT6ssoHNFMPtc3MF6rQZjJwvsrQwSx763dX",
  "key21": "4QFRWFiApf48tLze33DBkhJT2dpxPaBnAczqKSF3mm3U1SMxLtpqTusa13j6PCnbvrZzjsF8kbA3iNyydJ9ruLyv",
  "key22": "4FUbv9Gh1zZsGsxjEWhmirnGdhFXmy6JYqemPUSsWhX1i3QvBvGtsY6RG3ud2xQYFvG6Y2o5qzBMSDCHNF8zjb1h",
  "key23": "36N9ZyiG2e1R62nGjEbhid2D6aksYTmK4FdVWFxHXmv5eaiWq52tE3sTrcotaTAZQQNGCug2kGAk6Br56KToLaQS",
  "key24": "25b5d2whm4CbDEBNz2EtjBYjybnVw4vezXVp7jZxDyF5DxFvDBZMiGuZwQB6t6TC197WTCs53B65pKpimrxqnviu",
  "key25": "4KmaHDuUj9tsS1QYbFgsFCeT8vNEGxzm9dB44GQK4A7UK9jZVw36ugT3w9p5BsrBSfCiVyRGd8qiHrmccvsULCix",
  "key26": "5G5HoHrfR3F6oyExiq7sk2SbGNeNiskpXLx9WqC4c4eK1Acm2JzauXBDPTgvFxDS8CcD3pQg82ds8JZvvcKUwwtT",
  "key27": "3Lagk7Ugo7XnXnRqpknLuwydPR2H2DpLxRTPmVcb6wsLxh4MatmgohAQNzuAaRcHEAJYD3371iwyQCAGtrqpQejd",
  "key28": "2piGjf7LyG7p9iBgRMsBZKftSXmxnCpiWDpthvkgwYU6XcBSkDyRTGJvzggMTeKvXSjVwaygBnkUrYhMFcLM8k45",
  "key29": "3Ngp7LKXjwpkt2bnd3WhtQreQALG77KomCpQUY8JujEFt9YThLFR1vtrb7tfs6hTawqMZvYJ59qrqL1YJZU4VE38",
  "key30": "5Xdk1bsKcWtRtrFT6uPfWxQN4wzC7tEqwrBk6qzQVhfN1xj9SfytbZ51x42NFNhbRadcBMaVZ5rTtachSa9Jcdp6",
  "key31": "22NvxdXcEXFyekB6QRx8WyBbErpeSNWktjNPMfsLmt3gnzYKoGbg39HTSC3UKc8cim1jNQ95txbg67CgBsYKzDQ4",
  "key32": "8MPSyCipULVjrZhSSk9VAKmQ2KWwuF7Toaqgnv9hSc5yWuE3X3skVSdKCZNt9Af8fguvVH5JzijjSZq3ZJ6Y2y5",
  "key33": "28gjggGnEMjoq5qB3LZmwN2Mk2EuL7vXLwxfA2hbnsEh8G5xuTPTDrWMRFiveYi5zgZo496agGimgTBDiFXUYJcx",
  "key34": "2ucHRFZUcmSmyg1FzYK3hoRwEenCE6FgTExCrCBXzzLFNvs33A5MBP3VVPa4KYyr9Z4dTGGeLETydBDg8hB4iCqz",
  "key35": "3kthxeWmbcmMzzJsUhNvAkdvWU1a3yUki6j9QoT1TgvQWnQSvs8Jxp4gRnkRFbPaWvMbJS7pGFL2tEpHXZddZFXM",
  "key36": "s5xKdH41aDHCNtPY6aPVb5PFrRfv7VbLp9QfQmUraN2wPeaSBUKDPLmyrgAfJ4gDnQR2qkEWDAvVnFhcA3CFUqJ",
  "key37": "4WziXYwhxjEjdyRkR1TwUh8HnfcREmRUSYgGC3WkfeYU6ju9aXdgwc1GtKyjYEuSHQJn35JyCurd2DCissu6GKbZ",
  "key38": "433uUAuFejGU9HhVAwiLwEaewuTRVRQRgB3X2DmqoubcwqmCi4FV5uYdrdMqcNrNjYGgekYE9WDan2TZ9tbKGmPn",
  "key39": "47XAWigFtDrkrmtoMEhuSoHFnwZpymP2zSddPPZSixw72opq4vZk1GRRBy3v4Zc8PRCUez3h293Ls5oYPAsaTX4u",
  "key40": "5JpTtwrdwu2i9R7zzbUckZjktG9bPdgtypLc7pDkkDJj2BcSJMWj8gjQSkJv65zNaCnmgmCmhuM7eyGCiT9rM4eh",
  "key41": "xyCp8nbHR1HtyZiueqXU4Av7mFZV7RP9JJxbcDDs6o4oYtHA2nYqGZdQtMr2vdrRjNdJkJZWh5xvExodoWm1Zxs",
  "key42": "5kRpUbu8sXi8nbjS7mhyLTCTpvNn3v7zyWHpcZegvy8Ug14gbzf6eXeP9DtKuZZfSQ6TGi4apT7AuMpc8kASPFV2",
  "key43": "t2EvXMJsxYFy3LwSnaLv9avozdUtRCR9vJZN8PYnVrPWTJS54mpRc4zw5U6xinWB2vjdSFFMyETKQNWH7NB8san",
  "key44": "qvnRDmmrDWV4WE5rrPY6X7qZ44pKbW1Xh4BxQJZ3AW8w9JxpDhqwYdYUiMFX14anwZ9WtzJZijPXsFwAMHcLgnf"
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
