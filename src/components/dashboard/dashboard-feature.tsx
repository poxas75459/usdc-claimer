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
    "2Fg1rPiFqyLWy89i7pWNTNFAFByRMJZh4KHex266nw2xnD8y7cmnowtaK5AGdfGgExQFPKXwLsxvbEQp55ZbUfpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KRmTEhx7FvVE7z1cxFXciDfVtgBGvGHqNTvLeHqxet1GdxmXeVYWpmtaWZ9Gj1Mr5GfFRdtay2tNFwRpMjREa9c",
  "key1": "TKLApejUrgmwNi8HVxwnpaQ5oy6aHkphYm3Wt3S7zsh1L3oAR3gG6xds7ubYqLiDvayAxpyRzpaXV2ieK5tHaoi",
  "key2": "3rsEEvow5UYfodYoMqUWxYbsh7ZoCD9qcWmPAX34x9YRHwFTHu5KKuzBC5rXc73RevKegU6NGdZ7ATd5CyGbHjah",
  "key3": "2rnU5TvqT1etJ3f7bG1DTQDdrMNqN2D6PGZV7uL3KhbTrBnt7kYdBW9Riea15NGynive4b2jSuDk9wcDHsUiweTB",
  "key4": "3fNTiULrDHuJ6N2WqXyjyfbssEZgJpfKrhTGZUd1CKkkrhN8NLiZ8giXCYBrJQVVF9zicKC8vNs7RX881RGX8bi7",
  "key5": "5t6EWSynHXYCCX4YVVyQ3QuS5S1D4h8m5sUmdNHGFDRduxmzu96cKvtVGQ2jKd4mQWasD79SAN39sXPxeEurPr23",
  "key6": "5HDBipaGVPTDsuR8bi1Av1yJ8LPkY362DWQfWywpNCHHtycRqZU4YANJoWonwag1uSECpbPNzaxucw2d2anRJ19K",
  "key7": "4HGxn5d2WGP5rSCq8H8ncT3R8EJcmQNfMrNJTygzXwK9YH4cJAC1ivrQyXrkgF24qgcokA6u4yvFeqs7S5KGf2gd",
  "key8": "2S7gGDo6o3FfhaAftAizcSh6adjW5WuVsBhMvM9J9oXaih6VZMvg8dk3Trk4DkCda2HznQuzYPNAp3ZPFUk1xM3G",
  "key9": "5RQC22pHiApenGipYwKMo5aLSLXyiDN3BkNaz4gLWdLy3iYRBaxbaNbwTxJrQa7JcDebztJSc24ZXLR287B4za4U",
  "key10": "4Qs3jNYJqf2Ju3a9CL88UU9JrjeLWfemfvL27dGBQWy8J1otjRsTNN3ansMdByq9UZhU97M7wigz1kprCffaagMP",
  "key11": "DoRbb2nKVRmwzJe9QqTGnpmS6PtBpM9zUa3pepJB8GmKUpks8Yeiwb4NRihEJKoRETxNNyMpS1qrzcXabpQx9QP",
  "key12": "5uWC4V3D169apeK8bPhpu6MEycupZCNjazNP7uhjVHkhHBp4VUP8p7bFpgfQ6sTKMDNNKNfmHYJ8VUNtvJo1osfC",
  "key13": "5LgumyPRpggFaq33hmi7X5yf6uVxAH7x3sasg9Y8q95Ew5KebLhFiPwBmsw97vYd2upFAD6ZZwaKYGkdZtNb9W7v",
  "key14": "32TN3zefNervJkoVdgHdeJjUfo8zhpMYhra4xTCDT1ajfB45AzXNdYUW5nZb63U8JAUnXgxjogRgXtJMEK9kHWGD",
  "key15": "wM3xyUu5R5bfvTnM9Nu8WB1N4281YYsQ9DYXv6SkruGTVVVdvgvtvBXd32j2Piibw4PRT95c8bdnDqN4vXWAoHj",
  "key16": "2S5Rt2yeBkQr4TWTXh1JijFCkPH1U3jcSCNEJrvuQeu8wwb3Ei7Lhtx16KqcnVsJT6hRvNN58EgyWpHHAc1E6nnw",
  "key17": "45rX53u9CWqDCfKSKqw6JGLQGAS68QkYpahJUvWp7tbPr1hY9GwRTSN7ynJMF7A2EZTPGBFALiZ8zfDBH33SovqE",
  "key18": "4Aaf8F3d2WkQhjedvwtbKdkVHas9LpCE4L4M4Fb13n6MZJTkvhQRCW3LjqGasnveHuVpDKWSYjmoUqBEacToV7EA",
  "key19": "gaf5tu31iZKE4WrEiWow4FrU3TsDnNFiCExWAn99rxhNmQhKhzenuCTDYgFDqoHbWzyZfvmkPtd8NQ48e3jxSoU",
  "key20": "FCTLcuMoMDCUpvTwrE4t9V89CyK1wXbDhFPGP7EL4FvoVKz36eb9rKo5EfoBbGSDQVmDhMpMAE4iaJhXi6Zm34h",
  "key21": "4LxaeeH3nsF59xZzCTG5jiQB9iFnaHWaA8zLE7yoFtRpfGzxn856FQgFGRswxFAwSxUHDxroHfqZ2BnTuN49xFTB",
  "key22": "4giqNSu5CHLiVaiqwAVSvm7XSXMnhgjfWK9EP9AyfvgoWveM9YroexHd8rdBokxN5MhoDzFhHD5eBtWYPaycYxJS",
  "key23": "529SQcKbjdvgGDxc7FrQW1X68Z1sgTs2RyKKFmn483fFFyygu4dzWCaEWLNX4R4JSh4QbhxnyPEWTFwM7XfLqKKh",
  "key24": "Bo2bfEeqsXPjn9JNoCLB95F43oxDHD1eE5kR93vjsqcy7y23VJ7P7bXvtgLehqaUZfbpR63RpssgJajbJ6uCA1F",
  "key25": "4dL9VbKJocigJfX4XqDNpSiu9Cripa4iY9XK44KJ2C44ofnnoeq6yY2wNvza6Vbtc6DAMdXZAKy64RKsEch5L2Qq",
  "key26": "rvqsn9BborfcqPmT4tpUowdiDES2o12eqEqR2WRnx92utVouMxEoMVfD9WZqBZveFUULf9wJzxyv7kGJHSUfAs9",
  "key27": "139NsZKreFhD57rXSKTDuCym4EfV6X7hcftARzZp9dGtGPDNcafxnt7iHthuAYvkxwWTx4tSWDQfYrVRc4oXHE5",
  "key28": "wcfoK9XUrDFZ5YdqUDxH9tRMWoFFPhj9mzkTozVkkrMxFXX5ZceA6Ba2Km9tkduUrjCsXoUStyHtgANhEvYoaD8",
  "key29": "KA8eaSoHG1pQZdVievLqFRt6U5Wg23Nd32VqHkRADTYcAS9neCdyixKJYfssZNuFwnc824Sp5oVQAdnKoVc55Xq",
  "key30": "3vxhtWUGbZenec3S1TCzdgVDR8fMZHUxCSnoPfKwowYDEL6WECuvhZg4Fi2RqkCsaKb9mGM3mVvYLWRZzjDPpbVF",
  "key31": "5wNy5RkswJFQsYT7Gi6EzuG7ztehCgVPueUtAfCQrek7AJwzq8EjfDqYRwirw24D33j2am23o5BXKcGQd8rb4x5n",
  "key32": "3CZpXA1Wg6zbcsXDG3vgY41RNACiVxVJCvigV6byRa6vh9e1siAv2kD5zKsAnVn89epwGjLSdnEsnD6kCzZtP3HD",
  "key33": "4iRwNcXbmHcnVZP8FxhHfMqZJBuE4pCPpRayXPgs4Tk7N53Hegy6YYM5WtEfyNSzEqgbGMuNjrsRWMb7VhRWNRLV",
  "key34": "26PyHmf2CjZgpNSoBi7fp9ubNUpoPQFJ1GDdVqVJwmgFcUHVZrHT6Kr3keafvnRkPNR1xsXwoYqsog19BFQ4zt4n",
  "key35": "5Q6HRFiweujcoTLpYD954wTakE6yCk3kTk778xXbfJJVgCH7C9KYgh6tJensK534RzctXwaWoN4TMCo7LRbjyULS",
  "key36": "4oGTszZSEoje6JDBmdtZ7q4h2BH8TzReSBotvZRJ3mSdLSVrJVLQD2Gmue7gNczLqWVbNKC9hbvr35fZEDmjDmbK"
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
