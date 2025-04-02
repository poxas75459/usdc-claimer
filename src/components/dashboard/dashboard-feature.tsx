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
    "uffT49XSiSyUbZy7kp6uqiY5rsZFpUZYgqb2zuFGSXh5VJDv7dw9FcxKQwoGTPVtMKMc3msZQ7upuS7tPbaxt45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZwFaf42zvEtcnTjtasnxNUtm4U5M2xFfiR5qFHASxDV7JMfvaSXMoHbkqyeGaxmUpE7r3U6KGpsNCWgGvk1uFV6",
  "key1": "5RfhXwM8uRLadHRKytDKF25PGLL8PXNtrF4ZpwvksDoqLU8CCW9qqhAue2Z7AzVtyTwpq2xnGr9kcxtjSS8S2LR5",
  "key2": "5UuWTWYFYKSunMJSvQRzdCQo3JxedDpNenKgsHpKNDbMHqDHrELe82e5hgLEQfoURu5LF7TzkJkofdgy3KHHY4Gw",
  "key3": "33Sv9KXVvaXzAnADUra5CKn5MDuAcUeZQ8qDDhecEtVXekRTqAjhKEDB9p8PZRVyDkid4fdoZ3v3jAZVo12oKmyy",
  "key4": "dzgS5e64EnYfVevjkcYVJeVh4PUr9yFhYGmPmHuA5RnC2VWTCxBE19ZPQT6ax4LZui7gDo1HvviBSNncC3LYy4y",
  "key5": "3RiWVKX9jRL6nZRsbTqTGVYNBjQFkyKWftR84osuYrky9rUMKy4XoXnQYbkZ3CbkVFjWUzWranGRRmT5nNqbXsoR",
  "key6": "5zYDVc1rWKVfRzFC4qhmavKCLiuYX7XFsehzXN95SdhZZ2U73HQASzDZZpV9CVMWwkmiB4zRxEXhr6kAdHcQd52L",
  "key7": "3H4cRAJH9YJji2dwKQDCXrPMFUgtucvajKiHXPv16WRVFCwpsA6QRuoLWpuSFcGa4WVaq9Yo6GhwCfdpmfgLgpqb",
  "key8": "4Pt5y4hBVRR5117uchg4ZBZYJUwUFG93vrXLv7Js1fpQE3i8XdV5SSG3jDE8nV5QrpLGZUNEu3yX4jzD2To8pm2C",
  "key9": "YBkB43pmr7uMK3piq7zdTQKdiZAzFuQFZtiRPTmFs52VRzDvzNJAzBaAPz6QnZGyFg5j99rJe2o4bqozra5Y9iz",
  "key10": "2oybSasyu8Bw3NkkQLENmeTN8AyFFyHJFhKNqvPbEpC29S9qK4MjoaF11QMo2D3jZqJGJpfmh4Rf6qy2HenMm9P5",
  "key11": "3xwBBfkxdMrURUYGid5HeKFcdEUuQjbHFUjzLKSfJn2bpNAssXQLru7JKkK45cST9CRqJhmQiBgmp5DaHtRZc4ni",
  "key12": "4GA8ipUbwmmEFJLKU1d4oR5S3rbHSfneocN6icU2rCe1Ho4FxFRXTLhXxFTUVmHGQbkeQUwK9MuHvu832d3SaLFk",
  "key13": "3T1DxF55RHt98voEiNzsuXXr53krTmiYNAz4ZZ3FdU6SvVLvrCbZteefwt3SYEg6yRdyuRXTo7YN3jjMkRdky51f",
  "key14": "4k6aaR59CX4AB7bKyeeRRuAgh5t58boCismLhxFJqjDeUmUr2FsKS4n9jGrhMEsKLmUTKpB6bGFnP2RBJSzHHAtL",
  "key15": "3nfxRVMdX3x4A6N8mnBgMoFdQX3oMYRJfsTq8zdD5VKuRGpbkXi7k6ipSa7KdhwQDqswaV6KWrJYZtR9TetxUjkU",
  "key16": "3YjiNXgpd4WTRty1wKdsh7B3v6FwDLiqtDxDQqFa5swyMMLkRV2WjxJiFN5o9m36ziwe6WxTw7hUHmB2ZXvnK8Xq",
  "key17": "3zrdAQYkkAUh12T3TAZYDnuiB2epPP6ELtzryxJZUjZgHcyGKvi8ejDwZS76hhB6mAnJ7fngvLXZQs22jU1qPURa",
  "key18": "5iHPbsPLQxzN3iqvgsvRXzqVqRapRnkVDXrTmd8WtdH3FRdd4FcjPUAcJAWcyZetwec3yqGWwnnRUacYaMpF6Gic",
  "key19": "2epgR3FReemBLtz5QYZEkU6L2f5P8ebejeZVFaCfyQrCkotAFAU27fa7fMi9i2LJtaoPJ9RVDxKwcRMLmtnXEG5J",
  "key20": "H5mm6fjK4izxx9erFMqCHVsNr77Sqq6P6hzghegowcw7nqMoDJf4XmHtcpfevtb9da79b1pQimi2iZXckeo5XQc",
  "key21": "4zo8JhYpyWQNmiBhgZYzgpDoxVfqqwu3ozYQShJuohcEMJB4k4vhpmn8jBJNiLneH1KbLiZNtFzNPpz7A4kq3xi",
  "key22": "45WMJFKid3e6haTyWu8SGYFCiubrHLN3i3qmpx1nbFDc9dE9ybQR9uK6QGuoVRnN1bHhgTLRqCCodkYuukWsFuxy",
  "key23": "2cKyuEMnThXSeuJHHXVyuVaT41QXEbYFc5bb9xn6N2yKbBiW8KPpaaikKthEU25wPS6waLK8cpVFWYwRytyYv8Gs",
  "key24": "2BLs1nsRoFUQPNe8X24MzJCHcTDte3qg6uuVaEMBWYz3hWcvSnRgfuzbBPYGgQ9S65fPTrJoqr7NgTt4QHAF7qdX",
  "key25": "33hjhCHF1fjNk2EL5HbFGvXqHoJxpJgPofknUi1Bgr4S2QoEMgHvmniWPYPrtHGjA4jDXjSxbzfS2oJTBmLJAX4p",
  "key26": "5DxcEh6S1ae7WVizq3GDRoRdAtMQxp2fB86htH3NjbMy7LzPFvuDLQ7hm9vxjWH1AUmS5ybAiHW2vCJgZpppPPDg",
  "key27": "2wnSuLfKnyRgiBTY8cQyZB9Rki8hdxAy5wKnBqx2pLojavP3UBsxJtdknzexcpbrT7DsvWtquAJ6umCaVyjpWbGp",
  "key28": "oqtxisGYFXtbLjrNTXfcAfExpLPTZ1SF8qjP9FmjwH2tLRKFCxckVEF921AeFbZWVF1iARcekDpWihSb9red4ou",
  "key29": "5mDtdLHEeMJSdHrBRut6WoSnFxR5ZvvgFn5XceE4B1k9neUTwxmEoD7TNZRgkcT5FGAn4yayZhCS1vKDD1XfWCDb",
  "key30": "484v4JsqCa8AxWS8sxNKnkQzWwKMGt6kbZoq48s2Ye8KKdS6XN6YZqFSFkePPaEsjHr2z43o84aHRAftMVhVkqNQ",
  "key31": "7oySrhKFtjVmycb8rMbJ1JGWzert5kbfg6gcfsTueSfszXPCgrmCNuWi1DJA4taF6YTkP7F75TDRP7e62KVNQSd",
  "key32": "3c1ZCCW4iHhdjyoxKcm11TGWMixKTQLkPVZAdh2iCYFAfD6Jfp4FoJyBg4gKKdAeRDVSq9A28JiSjpKHzb6Kr8fk",
  "key33": "1cvHDNhzVcvSHWN3P4aGRL2BPyy6FG86QX3vnJGbq7W4fH19TwHFtGBZW6ymB6EoXbyPEpzVMfXpYWZEGCcTHs1",
  "key34": "2xaFTVfvhZPBt7EGYjAAykQzAZf32HFgLzRmVrFG1G2H6hc1XVp5U1h5EiKDfER9L42dDRTzEJSS4PvCPp39mYus",
  "key35": "2jaPF2qtoLYWGUn64sExHc1xk8LSNs6g5AZdLLpM2zY9iUEDQ8uSTSyywuXDwWkDBrzAaEHpnC3PNnFtcP3ZcrH4",
  "key36": "agDP7ErXpk7YDZ4KDV46AZG8RbunbMa613xdbpF7jViNSSeZ5heNUjn2NGjfu1CsBCjJ8Giz2yN2KyuvjqPMD4u",
  "key37": "3W2coXaWzZwUadhQSms3UuaykkUzawz3NMH9S7LPAu3JHitAZRbetvFhx5Ca1ty857dzxGBvh7x3ZssgBMATfrjG",
  "key38": "2MMACjoDZozdmoST2PqByKFMKPxqBTndth2pef4BVdmTofyy4Ti6mLDqS99aRzYZoUWep1HnokpTF3cUXjcFqPNk",
  "key39": "2soExo9iUU2ppg7i6a4158QcpTrFVN5WmJz3DEYjvc2pwdQMhU6qCq5c1vHpDt5eaaUusv6AUALobZcwrbstesFc",
  "key40": "65YQ4ZxaK23uqm6mdQErAimRW5qfiHfGqQqCd63cGZQUyHjnpLjrbPnitNJW4UkJ5TwzjdWL4Tkhj9VvQA6Cjgfn",
  "key41": "LHv7Zrb5tnHFxrqXPNqcPHredvuhL9CFu61jYqhhyXc1fufsStZizhvgfTuacRBbFoAsMYRxYgWPn8ZchQt6wzo",
  "key42": "513E66LNhDNeH7PJdWbN9fDJpbFATr4JWQLHyei1fKi22nPqBYcph584xSK34puVw7L7QYXi9uteKLYuTWmLSDh1",
  "key43": "5JKt9voHs5K1hPyiFtpgU72gmyt6xphK52Xt8aPaWnTexZcLuKaZbTV7nzigPBtCZcbLiVxx5wAQBnFKUPGezqdP",
  "key44": "4CXkUCZsbJVPFcxFDsdLfxgR4MUTdNwnuaPKvWMAbMUtrr4bMw96SuTn36JwSyYvJe1wiDtqMMYjddpXMK8YhHLa",
  "key45": "3MZBaR3yRSXNTh5ZYjADPp3VBdzRvRHVQvSDLbtKq8vcaP3dC7XgZGs6CbEf7tGtpAHEvocB4ofY5K1ZrCsg6caF",
  "key46": "31SJMyJgmGQ1jjBbkRptPiR9SBjaAq64ZuKns2UDLre5mzV1BUeW22wvxpWEPVwuHoSnZD9ye9RMkbthZ1XR8y2j"
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
