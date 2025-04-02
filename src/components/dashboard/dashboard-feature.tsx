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
    "pDqV7UWr8ciMR97AhGwgUP4x2pJiikL1dMTb4Y2v79Q5NccchPPixAJVcvLEnHDYxvWi2dUVsyrEsRKbiPkxVqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Q4ESEpfcGT7YkrSRFB4w9E2eozHTH5GaUtyM8u9aZp1QZm2MFTLpk4dXRvJqGpM8aKZr9eSWYBTqcpEZYytQPD",
  "key1": "51mKJuNZtNGMq6kHj1M5dRSGaueYq6kb1bd8L4hGJocmqPgGdeZvmXgXN2AXwBwFYbDu3pAC2qknE1WUAZvMUjB1",
  "key2": "5cmzkt5hZ3gWfXehviPXJ3U5asEmw4PPw4viX5HkqoyweFNmhCWKcxscuwqSD8sLXR4njAaMoX3nuUfiddgW5iLk",
  "key3": "5YD5CsutSsFjVmtMptZStpuLyNLNrrW7aYaMQXLAxGWdsH6ap4HgwKyXinD7xSVHmh3yWpxPjpCFuKnsKnBXHtC5",
  "key4": "2T6fgm8wUy5DKqEpTnmFrmDf4964SwhTmeumNqbMp2oGURB7uSHFHvvf9AMCGNYj6KUjVwGHRWLdueNnNqVN4Egy",
  "key5": "344rzbzXqc6d5wxtEJL9PdpDn8Q4Xg6knqKVR2mNuX3f8F7MnDMvuYa3XZdwTpCq6D5JRASRbXxDBmMhBfF7XSXc",
  "key6": "5FYTdUAHtJwm4YWfKNGQsf6L6PfxL6CXncBmLxXHkGffmnuqwQgaZLq2mDJz7RitZUDJZjuZtkrB2vDreSD8tWg",
  "key7": "5xyYtcCeNHciP34co4jJKqrzwvHdCqKnk3PvDBKafcM7UMcMgwhbY1yp5JReCaCDWHZBSEkFUhZMA4Z1zRyHwEzY",
  "key8": "39LTuKY1tDPe29nbyZbZYhVe2aSAuEaRy6x8ybAfuKvM536fnquFscxAvUXqZdPKpnz24GPJFV67uyEtNvHQQYZ5",
  "key9": "5Q5FXQ3GwZZz18eLXNvWjv3SVMBVeah99DrDy9fGuJjGCrwi3EXXSge2GgJvY3FxMo7iZcXnfeufHYe8TcWvEwBF",
  "key10": "32AU5oygKw5FsN94nTTAfSCUNnmCrbkQYdgm5vG3rPbbtKHEJVLGaUR7ivhfU1ikamyn4ARfK8RyyBjsrsnSd1rn",
  "key11": "23VvSrDnhcvbUouKcgB582B9x7s1rD6ZyAxLAtQiBidnfN1h6xA9d31Crz4Xyf7m9Fp5fXKMDw7bk8wnFqpMHG3G",
  "key12": "441VNMMydjRNb8rEfpjsvrFZQUNCc9rN9Uv5moTqCjCoTXmU5LAk3PKPWtT23VRkzmG74uA6NvkWJPjUwQka4dDy",
  "key13": "5HpcBM8Kc28raimPpahXqbZZNRzWryTadFgLYX2ErXefJtkz7Zpje3nL3tccw9Gu9SiZHsEZ6NUkFCQMZM7Lp6qF",
  "key14": "FA1KRuBqVnh4vATE1PibK6WUrViQKTt7xP3f7fmLzEUWnamAucKeFjmxaUbdv7a4HXerMQcp7Zky5NPZTKgABQ7",
  "key15": "33Dn79nApZfTYcGBqYjRenMjaAP34eSBwSfWoV5DPzzEUX5zzFCY43p9hKm6gQAVXCyN3LfTAgNzHZMHCD1RMCNf",
  "key16": "2V1ZfhqRFiuUc7oBJHDfHyYWZQCyp4kRaUt6zqsNnLbL7umzp9iKvpSULcSbYEvWsCUXt6E21CizLRkHopparge4",
  "key17": "3gCV1dstRUzV4kBN2VQGA4s7AgEsHncGNPZTAX8DMfWGXMR9sgS6m7XufuXk1Ri3Fiv371mSi65NAqDFiJuubw67",
  "key18": "4CKx73jJCpSK3LRQgp8ob3n6Udh8B7xk38VuEQDRHfNYqxXiEFKwaREHsUPfdrJKktbHLTyivQ2KEewfXdZRXgRo",
  "key19": "5twfaom9f2QXwHBeQwjD1bxEHUrLumVB3RNtfYZFH9DdXqT4JvYfrZMVPPxadDRqTxmhZCcVRfK6YZi4fdMULg3X",
  "key20": "9ioiRFzL3HBJd7VXreAyv4KwCJ3UtxLL5qkW8vKbaoLXWgtGeC7YawxgQJUugcGVs1HxAMN9mfsRxA3Ktu5FZxj",
  "key21": "naDEgha37uNTFYPACtLGuBMkx7hLDNghuAXPs6WM9DYtr4fUvjnaZPRyxu241rWuJFWv9pE1PMprkbEzeVZvntv",
  "key22": "5FVNdEsHxzitUsQQehdiWkhbTh2QJUMtNS2tzwk3Ky8v7Ek5KNynAfLyi2pt7vwBew7P7LpGjV728nN5n9xWte5f",
  "key23": "26A5YSxisTPQcbNMo1ptvBGwG36U97EUxGbiHJjJDYVesSwwmUP1RFvwbR42iPG5U6NZiEkuGRQBHrLCSUKV3oqz",
  "key24": "4YKWw99pwWCJd4UhKk1TZRGuhX6zTPF2dB9q9aD2V3MEVk78WHwsycw4A8qLVxyQeQ69o6rG9vH4dY2d8x5k15xZ",
  "key25": "h51xpvA9vvKLenaWGGKZcYAt6E2Hy8QmRgWAi1DqnXzgjtqNBYLQsrdEco1pzRSBVTaw589E15veuDQTmDvsCTu",
  "key26": "3DUwDaubvTprNogmfVaPca6C5jgD61MzQAMzi91XWUQ2AtufHVqQydHxM7jwZZGFWA9HKLe8HEj54dyoePLL1C47",
  "key27": "79Uq5BrVaE4NWRPbqELsAqnAmJErn8M3C1zAcr6BZFjv6qawZmrjuiXtXZWeR87zzwYC3mdbQahmtJjmjkiLesx",
  "key28": "4my4TXmdoNNtnTGe1vUKcDRHrwpPakXyUj56Pz9wdiRiZXNsUSabA1AxmAdUQgDbnLnUMUWdcVUchitCfyTWdBke",
  "key29": "4Eq8DGj33vdUdA3BCRDZqNxn4HazW7jxzHzqGKwxQErvpWEgvem7CvCBvEoe9SYA1Q4x3qgtpdkscmeB5LAVhyn1",
  "key30": "2QuxqnrNzRrqPCd3rKGQgX4Dvvkyd5oikmVcou69pwDaNtQtq69Rxeb2WqKeMvnPZ2p6ENTRd7mUXQeWZUwxd2yn",
  "key31": "5kDQHVX9VYHMFhW2tvuVWoJQCU5GV3qD9Z27DVb2ZmHtbmirwFJYvfLY5LagP4e7rZnpQLnbZPizgCLpjaexAHVy",
  "key32": "57KKzEv5KV2NnDGnXCN3BrjTAtM5a2JtZK9o62rA8Ph3Q6uCMe3LDLafX6AzFNCuhh5rspgdD2ZYAFPLGuL5bovo",
  "key33": "2diW4trm25ma76wbXC5kybgNwLoQewVCqUh9mFBKUVWg6JWRnY67h6pwpEnw71gMXjqUiJmdqXAeNekL8CQ8Ui34",
  "key34": "3TnAp7GjPWaRE9vs5osWcVmztr1Gx1atuFFAK2aVC4VnvTWCszszeQ3uXJBz6WZup4APRxtC17sXhNkrSxufigBC",
  "key35": "3wuFHvBWFR2D2wPDHNNfcmFZYHDWw5TKkezrozyxGWe5WB3c3uxttBzWNJStPZeBsnSxZ1ciN5MaMuJFnxSmEJCc",
  "key36": "JSi2JP78E2sPPbKuPP15Ukj1myfvvxqnXmx5GtdUYH8DWj8S9x79e3QjtytUBywXWGxfwgn7BW2gqg1mADpU3er",
  "key37": "3FgMLVGr63Mqh7tZ2fraUX27yfhwzAPSUzozvbVVKJKNPL5ZdoV2HeZR7vBTB2iePhnc7oLsDVZw3wXFwEupgDBm",
  "key38": "2YTRqJV2CpnksU3AWLKgQxtWLSGQ2kufhNoC1SECwLFJoanbN7wuzon9cQEGHyzdWLEe3NpR3TARbBAxjVCQeu8h",
  "key39": "rsTSUAHeTvvs9Yz5LUTu2WKuy7JQoikqfxu3PF9q9J2LbynYEeEMd93dgJ3HpoThHE8psQKuXv6AbSpr1cKrnNA",
  "key40": "3Tosuuc2rV6snRYBEjTwN6xnVzDSmkkxWA5pbCwrcyuoRwcpjcAQu2tfFuy7DXV5cTFn4jVwgQdYBAiTPw42qQ7T",
  "key41": "NwEcsSPcr8zXZW92NV9uvVqdac8ybokGHkofvGpnY4b8CLTAPgD1S3SZHpUdphwRgxtR7osJEfY2vnvuvhd7Tuu",
  "key42": "22TXebpp7SvuC2MRAEga5Uvz4K5swGdTKyXxf2frHggGhNZPiddXyHMxMqwJxYXJGV2fQGLFEC15mLopoQR6gfF8",
  "key43": "4HLCq3bXPycucg1Skx9GhaCDDCyKfdQmdRCoWHaNd3g2BnRQ2cPfd2Wg3phz1fhCzryfmkyMzxG2ar2MgzBo4gi7",
  "key44": "UfHHA7bqMQGSgmkXCd6jqTiGQiZ61ct4KRkrKqnfHek1u94bMGXZL8By6PUfS8ZExfBnwDGehaMshKPQE8NWod8"
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
