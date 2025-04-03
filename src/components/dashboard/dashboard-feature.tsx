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
    "67TcGeYmYDGoEEw33x5r194NnbUAN1T6VkNicXpkKLAwNj7Pt6QbhAP7DnBvDfMLQ7AULRQfXEZiZ8Y9wf4yB95Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35kQ4RYYYpuJzjh3wEfBcRo6e4zPz1ddL3j4ks8p7XZVqQdxjjoVDXgRSKh6Bd7yvazEkyDxuHUsxcdpoP5TJXjC",
  "key1": "28mdQzUFBfZso8Co68qkLyiUMa6j1EmXa5kmyaK6CM4hoJqjd57wHZMyAsDZu8LcM989NxR9279iqKvwUMzXq6T6",
  "key2": "dyoRtHrsQvuGutAdWXhHdu7CzAZJ86eiS8gwgQ1oqyGq5HRmZDEVGQUFRo3DidnxjFnJjnkb9Vg7sUk6ZuzZJiW",
  "key3": "63FjeoN6yomQTE4cWtUcrf7SpHr63G6S6aAbDRmY3b4vgch95JjcHw843kSuhV81YuQy1UzAEyvJeR2SMYa8BY9w",
  "key4": "4L5D5XPqPAhkABh72447x3jkFVDWjvE7niPE4ep6uxjncoU4PE3KBvQXJiFr91itBEJpmQdzM3uxbw7rPuR7D3vM",
  "key5": "5VqqiTk9e2Cm2rENn2B2r42n8KLfcWWpQiqkKpiQWbdwDyVXB1ixNbzby34fueCKEKZX8NjNn2gdpuxCz3hzebYD",
  "key6": "5v6VYRSKbT5uFYwGVERDGFkJw8GXZbKujB7bBLXphVdm2sVCKBjM5ixF3nz5v48HJ8sAdN5fmS6d7ciC3VDhbg2Y",
  "key7": "3VDR2cgD8A8A16nPAHCyHJXAGjGtidNrhL9mxd7KZxS5NauFQ3hYmYmQzbYCqppsX3PmtbD95QuBweByfBCpU4rx",
  "key8": "4ckoPeCwU82Ta4veM1DwDdAUkDYuXJCys4HsfutM7LtcPfwCRUj4VuB67Qtkx2Fy4EqN7E6dyfAtc1wM1jQos2sr",
  "key9": "2uhA5E4NL2tQZMKTTrf6eySgVegfa36UtGL7KHDZN3qkYa8JjBLw9dBqgbFnU1iMGoGYw8yAJRkWt9a5CfeYswWc",
  "key10": "621QuWVCpwDnWfvCi9jabJ3wM7vYEW6XprUGk5qcCJUjLPmCsAsdCnw1cjN2Jg4y8rvKtqX76atBJUuPuBUGXY7A",
  "key11": "XuFQ4jZek6nzADKisnhoWonZDQiRfzFco93dzJyn8m5jpozeXybxHFKmc5rRyCWgaFdZ6meSuM7MbScfnCxTZdu",
  "key12": "35fQNrxrXBB4qZDxWSKMioZZGtss59eqqQ7Nce7NYaquBytqAtRyuN1KBfmPLxpcQfksc4U3SFewBhxDoL3nNqgm",
  "key13": "239DcjNNGRrez5FyiC33t3s9kjKMKeRg2fYLePE4QwxV5doejcwZvbMy6yjLi7AwD1YcgfUM4ei4tqWGNmV7Nrao",
  "key14": "4GXmHu1CFWGEcsk9ijJgVaT4nXpKAT4oNH5ZXbeqibNMtsNysAp546z7yYyvBCspGZGKWLYzrBbp58aqgdQYgDdn",
  "key15": "2oWaHUsL5SjXDJRUhGKwRvewtdLB17E1h5LNaHxomWTj9xrpdAA9AvHo2DxsEZYNqh9fhJSPRWHCdg6Kc6KJnRAb",
  "key16": "5KGr3bPsq4VmzMSEwqW7TcwuZyYECvYJs4PSA85eD4TxXqBBV9t9ficVt4J8xenNgF2oC3hFEapopiQYRTLrhgdt",
  "key17": "62bc1soAH9Ktt2DCZfRwi7q8Y9wwocTVwduqyEYcUoF2siewHadhwLyewhLJdAbUms7vNgvqmbSMQ41CbSqELaef",
  "key18": "zs8dgHedLaSVFSDAsTJvoTRsV65Qqxn5RcuToL5siTpkwvWaV4uXGoMzPdVxoVd4zNs2ELv9v2zfXwu9JXHPtEf",
  "key19": "4uYsD67nPGJHsYAn9SY5spJmEPxaidhRaUoDzXBT4Pg3gWsb7JKeweM8P7MMBfP2eGi6hC7WDwBJRUJtsrfydZhz",
  "key20": "2kg85HP1eRqny7yr1kK4fpp9NpudoHsUDxUbPQ1yshFduQqx1LYyNDa5ZSP22NKT3u1mH46JwLn9ejoPnLm5RDLc",
  "key21": "5K1MC7KvZs7Rmqw9Tp7HDZiZgWj8bjs5cRKJdZD4sRt1EaaGvLYSNmG9rU1rHyG7GK8o2a5k2EF2ocXruUCSipjc",
  "key22": "5zX8zftRUwtxeWmC5XwJLevGwYYK1yp7KZCJyo3Fg4ayQXEJB2FCq5Vps68Gq1KR3PkQxidxB3q3FpR8c7s6Dct2",
  "key23": "5igAENMaJ4kmo4xyVAy5J3vuuidb7YQ2o3Pb8nJopo4REZ3CdURuV3UZq4x2Z5nS7CFUUdfSTxKgDFsQABWUZwXM",
  "key24": "24z5WaXAXv9FDxfZ5cUkofAXLyauPEX1awi8eDf4hwoNqQVjHtYfXEM7pRPRwfKX2DPuhmcLGgiqwNWkU5gdeCHm",
  "key25": "3enJtakPMnm7HLNnLgBBDyfMfj6GQnWEUPhWbpaqBqpMSzzojaYp9BS2WRks7oRKS2Na4H19naKFC75V5JDCz9xa",
  "key26": "4m1v9XuekigJqnkEV9EE8PPMoNDkB5KZ62v1rFW1v5M2zxNAUPbXLF1RPD3cuvv9M2BzsfD5a2wSSwPpzUa2veEH",
  "key27": "5QTp8GcwJyepDKnW5CX4rSJpzGzCUTdYovB5oDTzXr52eCNVTZNjPnSGTLuiCKcabGY6GrfVessLorciRdktHsLd",
  "key28": "4uo6bAF6iiG2Zfgd3LNFAREeRfkinRcCTdPYUj7HmyoritcMs5Noo9VqrPeNYReJ6xNKqRRTm21KZaxnpJX8Ct7u",
  "key29": "25W4VzVAEVdyQ2pHHbW5CHCLvrCxsst36UdxtLNZhR28S33eArprgNoo5FDxyeyWrqeThmZYyZzrsSEkz5eFsjME",
  "key30": "2kTBZDPUdz12JJfYDF4tZNSMY3dyz3ecGPuEoUMzCpCsX36AgMxqNRZmWcPsoGwmYew4qtcnSj7E4iw7eUQrEaTh",
  "key31": "2trbUGE1VwNRHcttZswvceosvQoWEXx1XUW6e3PFixebMrN6oU7HWFgpWqoM5CdrgrP7WL2amQAjmjt1nA7He3Bh",
  "key32": "4a9r16wNJt3yuuUJ2U3UWFn9TYFtAMY1TfVuGzWUnwBXhQ55y9iVS861GzBmn694UtJUzGHa3jJ9ugBnSjPLieeZ",
  "key33": "4wNWJAALXFjqN6zzoA9hzFt2Yd1ytiJA4Mhsi8LWVkUkFbkKYdnq1RErvLDeRHEnWoqo3DWUu8PSnikjttca1Hza",
  "key34": "646C5Zf6kgMoM2KmNBtSKfmPZzNm5w2QiN9VVw5zPJXntNdzCtAZiqRRmkzHbPH9V88S5bzF2iKoJNYTCvkopYXg",
  "key35": "4QsnGQig9aUL53S23uNB1t3RwKEqGND4QUhZLFdnRbWEsvBgG2TCBfwXsxtvFBEjHdyVNLbVWFLQcPdZJJX9DEyt",
  "key36": "3rfPSmbH62cxcECcj5d8aVb4esYXmow9CzfbyT1b8aev6MvTNq75NgYmGc5owPvq7pqv89yiGW7YJGpyDZn6n8Gb",
  "key37": "5pAaJ6CY3a8uqhYBqvAG5c7QS5FQBb9poaW6HvKhBwxyGLBiJWbR3nKDrbCpRZix7mhwD16zHRxMocLzWafADprq",
  "key38": "3bfhgwiwaiS5msZUnoSJN4FHZeZYSVWK1BN3LkXL1p29x6BcnyF1HuxHmCQiU2HdcewAVb4wPQWEyHY4pbLWqZPY",
  "key39": "63wZ7eRA9EK7JFme9ffKiKGvYCFHrx9gUd2fuMFR4wdWwWY7Rha6v6p6qxWwYm9Vnggzh5j6PdMsMNfQBzSgp2Nu",
  "key40": "2mQQSZpQLySRY1i8zWYVc6LFbdH6xsq2bp4M1cb1Ec7NWvVNtHbQPUzqvqxFffmME5XPzMakShJhEDtjvtrpvecg",
  "key41": "5Pa9TGp3H4gpYw5tZGSPySPcoC5RwNRuaY1G8tmghhFMXTTRCWqyXrkvYcEutSskPp9823URoQMBo4td3Kpsg6nQ",
  "key42": "RzT1xHGmguJH4or6rbaENqv3UGMisw5TAwqcnS7ixSfzyMze5jip611fUhNGdqh6kaeBxWD7Y7shgNbS4T76p2c",
  "key43": "4imLWM4fX6cPFGijMEXRk4jwiSH5QaCYwHrpw87YPPvD5Bpz7i2CLBdsnanCiJfLqqbYqqdRNjg8xWCWErDpdr28",
  "key44": "4zKXDBYPqbxP29Lqx2BgTJmhhD8G7egEWF18c7weaGdPtigkW3QV4ztxT9mT4XwaAhvdgpxQVp8ewUjouPMyMC1J",
  "key45": "55WKuoVqgFvipbgSwQivoF5WKvDytisp7e9Xcm2eRP9AHX5gGw7F6sKs5dirRamxT3b7s5ttAFCz5Bm3FFnysB1U",
  "key46": "45Tmvt4bt5Mz4nEC56my5WCwaTZXhwFy1MYax7qJxKanzKpSEdAYWngbTCzuMEhpyZh94EfjYbjAMCc7atfLwy9t",
  "key47": "VRtybRBDJrLVhSU7q7vMeTJEba6vCzuWiqvgSnbxb8mzGYqJGakJb5n7XALLpvN9zUjx67aJAcFwN2FRdtQjLkU",
  "key48": "5ETn3ATVrsNvBSDetnGv86uLKaP4vpKCVs3jpEErsCxYT7tMVhnuvF7tRdQxq2SpfeSuqZmCJj4e5iCXBGX9dJcn"
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
