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
    "2ZgnweTYQhYgmVbYPFCJ5FoTa15d8UCqc7riivqb6KMAxNZxXeYJZJohLSpMFW1KJtERgVLPFEbpAyZovuqU3AvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DfdPVu3Ta5dxfM2LzgX4HCqwFHF3Sia7ZGVXPfJxHYmNjMwDTEtjoTy3jQiykcCdghxt19Ge4QEBobj5AUtF3X3",
  "key1": "kUgqpDHmxa3XQkZoyguxRQYc52XWvpw84acG8kv18QSiVbiwxSFvRXXrGH1TZjzaFNj1M5Yw68yyaosTSgEKgi8",
  "key2": "2uepRaZGHf7SbFv4mGsRUZjzztiEN8T6cAT5FNfyovZwdGgt4MepSePr4wRmGSH4NnePT81qpskpK3AFh7vahYfh",
  "key3": "5suq7fYbKdueo761ftoTVn9NZxRvW8dMF8RtNvN76LcCwBcJDLahL5rj94uyVV2AerYhoqvAcA4i4Lu5m45giRqG",
  "key4": "aFpGBaQbwQA9wULdo1TNpFXfkjWAkwHLcc38m4JzwmybKJmRirt1vFLyuKBtF1mKrP4aEkExfECkWEBgeHkd6SD",
  "key5": "tNS9XJiqwsezD1idNuy8n8nKcTChj9PM6z5m3FFXMsJ4PyV2Vd9Su5Z2JVJAygFuQoWgc3orXkvNP6jpamQkbNB",
  "key6": "2wcDPSnn7ZzAtjUjWWCw2ELheAoFsRYxVUrgADxockgM2DmPnRShYQeAJwX1Fa1j3KVuoDmJcuu9N8FwXwQkKs5G",
  "key7": "LtZcaEpjygGRshAAb4RxMTxXMtt7Cu5RXXAky3NYTr7uQPDmLiQm3d5yTyRwW2iw7NQHACEKV7F3TZrmQjtwC16",
  "key8": "4YgqeUwEq15RHLeox5pWt7uNETDN68iWNZv38bZaEcy5UhdeJFnsxJCBkSmS9Qvr72cgpRoTeiVRSNank4NiyHdv",
  "key9": "2Kv1cuD2sXk8u3p2oNiEVzBNVkjyva1iNJTuoxjPGaeZRpSVEnjpBYGzewwjmS9wWeDJ5B78WAj8V7xT6FP4iwtY",
  "key10": "3Gd3Pz1M65ikTpvm59VMYEwgdow98m6quHfez13iKDiTnjaat1gLDEb49UwN2YnfR3AZc6WqzT6TJyueqFyUMyna",
  "key11": "3WkxH8d7Fu1vN34Y4YmWCdpo6nyJHQ8DVmECeLBFbj4FZkC1hkZmffHU6D14LfqmNbdtJmQ9E8DHBbMR3j9E7QGV",
  "key12": "4LbVhWCUE781T1iwx1vxHYSWRaGS1h4ZjUXMh5vbDWeKjRGUpYmHA6hYNcMzYc7vMWXPAwXhRoGCypdk1nwDQ9FW",
  "key13": "3UWpZpQmjA676fGNpYGEahWDG2dHWUDtp6D5N4EHPDfNEWsyL47Jt6TcQ6vKgYqyhdPPyqmSSfZ8V2bKpAm3ce2n",
  "key14": "A8ccPuPH5WH3GNcE7V62xcsgYJqXxNFv7iJYEp9oQ8Hn7osKDoVqZahdoUFPNDAKYrjVoYw7QSdtd1zZPbCN3Rt",
  "key15": "2uphnHkRJ9EBLMhnnmShuwUtXL213gKk8pBjfy9YQ11TQJdPRpEei4ndGh1ztKse19oG7v5sXTHqSACCp5bsMcWF",
  "key16": "ey3hmFpcDNdX36uyenBtmx1wDXA3goQ9zaxzyPbu38McNFPcwhpxdbFyNXEsxuum2SPJnz1TE82ptidLP56ymVB",
  "key17": "3oaCzYHzFPtZpAJMH6HW16Y7Za2jrPLYu7dQk9PLAFCkkm5eiPGMTdeCMYHNBaypKX8XZNzfvPvYPJfm8oveVJ4W",
  "key18": "4vi1iPu2eKee3gN9rqsAxHzQwdYqEUMNdf9eHg5Kjp1vDXrQG1T85Axc9uE3YmLtoS5tduvEoEHeYZ48dSo7Q9eJ",
  "key19": "5RoC5iiqQLdH9T8sbsM8CAXCZzqpvhy3PrwTmSyzDwzwdPURfRt4E4dtaRwVRfBxqtPgTM6dEGnLMNEczYFWeiVp",
  "key20": "3WkcY7mW1bcneadkHCBX34NaTA6W8E7aVP7b1yoHnZQk3fS4kEnwap69rXjaxrhz1HyNM42TV7eUa2Q8MKs7qR34",
  "key21": "26i3Pp77t6RB2tWe6heDTL6VGZhgag5oAW1DYm9eQVsm8kjpEyxMwtEGejZHGJYex1VWWL6J1ynkqJfFAKuTqfcq",
  "key22": "4RcPFrGTrJ8qwhKufVy6nMGjxQbasPj98fqq7W627QFxvuJQDYMhh2TjmigH1joimyxLcT6bsyQToFmiog9VMdYh",
  "key23": "4djjZZh8P4dd9ioLP7W4c6HKsFtitan6Te7UT65qGL5tQ4hTkgQSfgtZWy9EJndGtz9gkJSnj1k5gLGDJQbssvnH",
  "key24": "5f7yhaMkj6KgKSayrp9wjNBgdEcgV8c3FN3A9Dq8QReyAhuy5J4y9eRYD8GFPBW8fMy3iZGtjTzGfMe4fW25Jtbw",
  "key25": "AjSS5NATFRwp58BT7p4W7BDXUrZ8SaiLxudhBGsMLLYS8PGaoXjz4AeVYXLuFPjaWZNCccmSHALGsZpB6yFnDhy",
  "key26": "4HAchiaoVYsMzmaFurEwdeyBkBJRMmFPXXUghyUkw49uvXkhWtAhPDdN269scgVxJSHR4NEKoZAJx5ygi9xfvRxp",
  "key27": "W3ktCXzMkpQKbm3VqzSMhHnKZoHZw1ovmWu6LhNkfBEkvHtMZhPrMGpNHCbGsmQ6JpRnng53r8zoAKrpi1BU5Xp",
  "key28": "TsG7FKjT8bpAaAvqay8ynKz6idYBxGGcHPPBfGD2LJZ7FEKiMgyn53XYKfSxD1vQpnGktf3ZaJaAgLeJbSLXxtQ"
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
