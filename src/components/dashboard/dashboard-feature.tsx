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
    "2TdMAyGWLuWGieKJTJjpmQgVBukALyMVx3cWxfBwsx2q24bYowA9fSTrLc93Q5V9sQe7SymHp4wkDMya3PP67d2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aubDbP4eawGD4x8DpctqMmRnsULn3iKsNn8zoRw57b3BC3tJGcFrJbP7uYFh3M9yQWMpJc8ZEiZ2RiiW7bJF1Nq",
  "key1": "kfwrdXhFGsNm7XA7rJrcrgKF59KuNxb3aeDzTZwgU67HJSAfxLVASDAvGpiZsjz4p57afzozkBpZNpXuXg1ij28",
  "key2": "3nVQWURTMDbUPdnn46Kt1UYtEADnxiALuYFALn5fDTDaCPbYoMXoUieCzcFM3ji64ktPx4MzRajK25LcQekxLVZA",
  "key3": "3w969eqV2GHEZwMYrCV75B67LjEULsoBH4bLz87yecPg8arRHiDkpyL8WywFDVYvNM6Lpzf1qgvdKvSrGk5rwc9P",
  "key4": "3cYBGmqRaJAiPaTxHvZ1NRaRL6WDDWUDfyWQaep6xiy6u8hj7JPdT4aD4gis511LkkVsMziNN11TZgmU6pmwkTzP",
  "key5": "4inCE1Rtkj3Jwpm3uZUmcvQYJ14ydJ6kM2ND39u8FCGQLnquez48EaAvcf5iMQByuv6drgedEG4UuF8jqrxrpa1Y",
  "key6": "5Z5HYjgoJaFXxvkNAFm75sci6UY1HnCeZDSYrxi1RgTvRuAuYPWoryDQuirSFbH4iNq25brWekNNf5bBEdLQBY7k",
  "key7": "3GAppU8aa1gsXCkP1dG7wQ52RcRUgjMz6busmPPyYmTVQeSQ6cTGwXG1ZfVXdJNBcnVPPtUvo74qWhmxeV4nD6VT",
  "key8": "46yLp6TJCZRTmJ3LYXdtANkBJNxgwu8nnNPUcRcshwDD2psEaxD3yvJVtQNck8zBHTpzWB4shtYu7DxgJBWoN7Gb",
  "key9": "3sgfpWg7LZgW5P3pTAEKeBmQz1YABNF9PFpCM7Pz6nRXoGedc3nbxvuLpBMDRJoNTy54VJAVpsrHwndT9XAL3X2x",
  "key10": "22hVJYvB4ZbFHuM2jEY9L8fxcqGBwmVEfpBWSKgnXsxDZ3bZYhEGmfvkzKoK6wipDLJovaJXoZwmv6NSznxTymp9",
  "key11": "62VLYYenWQKwFFhNPj1QCeZE7QWYUvmxDtueeT8L85v5wBUpEEWSKS21DJES3h9QMzRmK7htgwwty96nbReREksG",
  "key12": "34GSqKw237RNqXnEeMtas1sj2xFch3P8GkndQ6LtjrwV9GwpCzE1VqBug1a9WoqYpo3ivPgCV8PBSv9csg5gZ94u",
  "key13": "4dy38VSTkNa8jghdWxHzm2gwWqGPZpTQZArSsN56xs4Yh16QUYxVr7tYppR99Kng8nyqtpCb8WjxnKPnm5B4931G",
  "key14": "4fMRandtQg3YPRwWZwwBdVaoeWdPNz4PJjYr3rP8w2S4kyhshbbpDZPfoT8ZoHA6Vg5KEeUEBAo4fUB2pfWKeoei",
  "key15": "4EVaVJbsYHGgSBtpNaxGUNxCaY2QrfWBZC7RZZkr1R9aBEz9AFyTmur6sDBdWAwptfHs5uVuX9Y6puZg8hJZ4ZHi",
  "key16": "3JQRUA8BPxxTWtyoHxv8iSdYJzi9cW87s6rhGCqrzCTufHxtQFuGqWBUJsa52J2yMSJQk9x3ReQmjnY5Wojhp1WY",
  "key17": "51YDA3RrCRXQeJHmCHPrJqUq7RXjBhTVbvkNZcjogPRGXgr1oerxh78uGt4vzPAr88KccMbxUNPSzft3rSV9HdXB",
  "key18": "3bMWxPzBBuMQRh7oadWXzCZXfid6gW43RdhtF83NtL2nfAgVpqL3tLiGvu9xkufGuKwN8ZGFZTh2dV6asUr6WDrS",
  "key19": "2WpKaRSAE7NDMSHnMgvu1N8pybBs42Tn4xFsMVUxbWXSpVBcEDbKEMAsQZ7AptkBnLysgt2bWZe19dzucdz9DZa",
  "key20": "21c9VMe8F4y7DYgikih5sVFhP7q7E4TFGWThLZZ58ge4YorT6YVzv8oD6tfYYL8BaV4bFodShy76vWUPP3ea2MtP",
  "key21": "3zcbTXZ4fPKz8yyqc5ZKibJSuWzxq2wgfsQQggkGFkjNgutWXViriUu4vQbjCYnYgLvc9H5o2QV7iZ2mr3vKnHLP",
  "key22": "3qzHbr8YNGdzJm1nFbcGuYfJbQsyZR6azsQ6jSmHFvmJwpdsw39iuqyyJzwf4jVyVE7ctyzemue8kwu4mjyy1pk3",
  "key23": "3ZtDejnGhpBukGEqRfzXEK3yHURaYy5tfSzXjNxWsSh7mRbPad4jXUY75cK8WwpAKRRUzYEcMWUMHfGDspaY9wUJ",
  "key24": "3DUUujs6zrU8rfXpL4ZZ9HA3wLuEG5SZHrAboF5y4pq4yDx2RsebyGM6imdhk2jjLSLKvHkcKv5UATHDefiqxwXD",
  "key25": "3eD7f5EFjdmX495yKpL4YB7JoULMuiZD12KcJ8GND2zsebkf1qKqoWxqNS3VDHauy9uEBp5LGyUMNHq2t3hx8CRU",
  "key26": "4UwhD3TD6Ai4KoTmMQg8ttswJ7pio7gA2TnPRRtDy4aaLQxdgKMmmmgrWAGDRGo96dhsqEwVZQBpXrCsMvLanQHD",
  "key27": "2GMoxFVX4rmD9snRCbDM4AW3fSvERcL9iTKBwa3qZJRyDURMq3rRdQgGRXX1zZdRW5mxLeNStfGD3sCsAxgiKtFV",
  "key28": "gwPzQMfUogpxHP9rrw6TjM8fckdWUsL3b4uCEjjnMEc4LWqqJCXppd4CBaa4s5aJ1barZix9P4yV1UESy322Bhn",
  "key29": "2AxBEgShvUjq1y6S8kSqj2ArrLBZ3VxvcoHeaHFD2fGdDHEHEimiRoYAW79aUgZXo7ppsq1QGNdL9WmzE8psKX48",
  "key30": "2nBfb2wnuJ1KMDtXagZpK3qBSCAcoL3c2umqVXviubhGYuUPG87RiRY2c6YnM7JNBdLqmymyzQW23kYh5ofUVnsV",
  "key31": "49CEZv8eCaXAAFXRfpx1fec9QauUDa2CH1YG6DDNgskdu4YJuzopUxKAUZQSpyZ1ARZPYmgP9XNTciRmwLdmnYV9",
  "key32": "3rLhAv9KZPbpfUcb7kJtTnJJYpTWqhdSBQoGEofoUbR8KVNpQWe4K8K9jujR8xCCWk52Xag8keyaZszvMbQz8Rx7",
  "key33": "B1kxqEUpa2SECrjd6o46cwiniKBVFhXFWt5kMK3YfqdyMyAgMa2uyQzesFouC7jBm4bnhy9E5wqf8m4Lvm9uXmg",
  "key34": "4Wtj28ZSjyC8BeXFRwYxf9CTn3dhMhcCnQESwgv4FMDL4JULwLoVEfuDCdmdwqUtFdHXdNcmq6MKabkSvriA2CwT",
  "key35": "3tphXvkkNN7apf39NwNEJHiempPJW3LYDUXgUxLwELvXFmgjkHvqggQD7KWJVURSuPRuaqJTVh6eY9xpNjyzVAPi",
  "key36": "5FqB13hQrzPbGbLwGxmQmYikHBmQti7msvyiJFvyQsB7Mfvti3pad1cSMpekmLpDUCToVhv4KJQhQwJNH6VZJUVM",
  "key37": "3kRyPCAMuFHipMWR4yMB9PPAeojWpRUpFYr2HXfR3HqWbZJwMYdkxd4UzTjmdbpVViXsjF8ueF8QJBYtegHoa8C3",
  "key38": "51wRsyMy7zkZkzxRRTMQWwQSXV1t4rGwuKetzxss3azNmseDJtuzbNTqk7WqaaYALyaAZDy21CZHykGp6C9vAmmg",
  "key39": "5R5FQqzyyjXbhxeDToRdh1D5hwAnDPgB4ZWz8ByzXhyFVMds81p4duAJ94qAhYJDrJCAKPqXp7EgVrF2cCiKCbL5",
  "key40": "Fa1yyD2zbQxoCACK51vHYCeQ8XRyjEn5GQRUWbEdsyJoYKoRoBRmQQy7fz8mjHRSNdBEQN5gCN5D6dphMSDgy4v",
  "key41": "2SWX2TFExSbvD1gJhbU8dSmRcBSd9GYtWmgpDfHNYeBMe453FySYcn7RYSBuonJuQyzqT7yYFxAhCzhaBDjQDoXQ",
  "key42": "3QYxHc3ZZjq4xqtY3mEsN77SjgVbZHGombdacZBGf19qwDCifiHucYjwvd4M71KZv1Uys2gHD3W9fuYCGWXFKD6u",
  "key43": "57nYiZKwwLja2hBqwEno4wf9cC6a4M6F2m5cKdqp5RBVdCtQFZjrux9ijHTehMGvihbzFkV86ExCeS8UoTC7qSB3",
  "key44": "85Db9HGJpQKFkVwpzzMNEDP2aMxP6KRVKnG9PxaQkUYewE3wwXquVez4yu411irUNCxxTVYRBGQDsXPsr2qkMqU"
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
