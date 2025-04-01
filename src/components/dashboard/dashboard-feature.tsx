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
    "5NbgLgks7tZ95SSmfiFP2N3QRQ35eypDowLbA4yaApoMLyKxcAgFG4ne4CVUjQ65yH5AuUHNQtxoACZqX2t25zPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42aAw72doUZKbLL7Mrfn6vMQfFJgsd5tHjD3nsQHpT6tzfJSfdCwu3eZxRvi9ZHDwssZe7gD2XedcVKn26Hj5GwG",
  "key1": "b7Y1kKCGkkTepiDHaNXACCPpgAoZ5Axvixa5XiTNWAUS8eEHGE7g91FPBfXqJ8nHKCU7RHkvdN7VuyaePxjtP3S",
  "key2": "46QZViWrTeQbb8jn4SD3oLDN22SzN63LJPdC32xdrwL1PY4ZtudL9eDCfEprPZkKSJSeSkPcFa8upwF8YS6LzBpF",
  "key3": "3HteRDhAjfVmWfGdBVJVHVm8rrUpdBwsZPeo6v8R78b4dchusqs4zcijehZAejzbDUY38WeyzEdSaVoYSPQQxAA4",
  "key4": "28xFys92pN5S7dHN2a2qhMeQdfG4wG5tE7UbteyPvRjDSEi6NsdsvuYXu6Wnzc4oefWbZ9WhxShCst1ZHt73Bkvb",
  "key5": "2BDFhJoZ4baWzcswk1dfGvmMGY6ANMhPGMw2MqXrosofugfZcw9Takhpjf5AkwRvJzWHv1y3EB1QG5J3prMR66pG",
  "key6": "FGWFaAxXPZXWn3kEamJfBW5N3HRkkENxz2jn8M5YM5r9xh3DU7mymR8wxGKBAxa3ihDNTNk4g8YkU9XRuf1btgz",
  "key7": "5RnRSHpQV1f9LRouNrxnKn1B2ekQB46DwnKgdQqw91v4GPGh8m6HBn1jAeUiLVMYYqiqnFeTtuGq6cSf9hrYiTdE",
  "key8": "4ddSgteEALJy2kKRkUqR13mbBjNGyeJQfJB1XbRDwKpncLBAtN42ip5m6LJCSM9qHqudFcyPj6HhVFzfBZrJGqMA",
  "key9": "3sBXX4ykn847nhwGnycDJb5AyG75WNeiL5MvaLq89ZGZwpqr7vKFh5kcxykBBJstJTyXyi3NKY382rg7nUFjmjpB",
  "key10": "35kuga9Sxq5TLDCwH3ub1t1KNwQXLeUCiHo5xT13Wwa4REx2WjjZNyjaDsaqzeQxbN4zzFsMqizciDHWv6RnQE91",
  "key11": "2EFZ8Tn17NY7Udt56fb6PDg6hvzh2HwspNCuPqF2bVYMFPEb2RJUn7xBaGjUe7ZiyYJpMauNKMPXPHEip5tk44RW",
  "key12": "4NMsvTigdBt1xcoh75Q9SbPXDNPnY9GGmWNzjdR4UWbSXgjVK4qY21cLF7NqWKdWZjKwZDxRtzsGLxH1vjbwmj4N",
  "key13": "4J2JdrK2MwEKKcSTVBV82grxifKRsQiJ1rL4epTDrRf7dPEMUg523AymXMFEheF6ndY2dAWhkyNDzKtjrLi8J28g",
  "key14": "kKrFYYQXcs1j6MxzGkDFGwpVjsrjEx1o9b6vLAr2ZgnuHCk6uVsSFDxiaoiJTDbagq8u2fQCQHVWQDAECSHL2Ka",
  "key15": "4VS2Mo5kYX3n7gDum4bYQ9SoTqsSwYXzzu5Yp76igSPC2oFmxz4pTvpZAWiUP4yNUvCteXHGPSMvvECaoHwHJy2r",
  "key16": "4UqZxkLdkDHET7etw1JJ39FzMXd4eMZrC4UaC8kvX2UtUeCz7dTsS9UCnUxbssPg2uB8WkHPjZWNqSFrAVFgCtoe",
  "key17": "3Y1jx5ohbvCuqqGXD2Gp46vKkNkJpF4pz715t6pyL9zxnrc5KcQtB7N6sFWrd9MhDEWAnfWqNA6w9wzXCp2WuwRL",
  "key18": "zpG3vd23ruBXH2APpWHx5paBybes7KgfHRfD2yQdrje1EZCPsszmpLVcmtgXj4vpbazWmaFTA17PwpoNTWXX7mW",
  "key19": "4KoxLKf6QdYT3Jo7PvEuvHmF5qAK4gykeBrt1o6LaE9NgdbJPxDTYouCcEXnrfQ5SG4BEhPgoaA5VKS3cxGTMaF6",
  "key20": "ADZyFTsQ3iExzgNNhUm4eNk4MJEKF4G6Pvwqd6FxTFDmXw9oooeHniWxfoXjT9K1Gi2hkV9tf6tTzpjvSYYcTBS",
  "key21": "2FC5pzSnwvkUvSvUZaCK8cp21CwvfYCtS6aDqizMVQyNXocW9p6bMzjZpnFDKXRu937Bgmwtosz9ytXCQpkBasZK",
  "key22": "4V1ZwCgqa5rQJxvTmMmawPXLMa8cuaAqqahpq5jvM7upD47TPps4YjCyU2nPkkqu85Bh2MzsgiMX5WFvxq4ME6om",
  "key23": "2vLVbA8sn6uYXMFAuYTMFiGopcqraZ1Nrj84TCaM1kvnxrGjyntcpZzYMX856DRkFasmM6FpmyMFczAKnztNZCuT",
  "key24": "XL3QU5q5QY2cEK7NoZKLYmMupAH6VaGcPnvCpZyrNjxZmLyMnSezehF7BkGfVJKgSEBhd14Wm3PFH3q8ESaiM9R",
  "key25": "2dNix8mqtv9xc9ySrsYBX59uhsFQTos8BpbdZLsQ9dmRFvZ24m4pGuL47hB7JKNWX43bVhmT6mw6x3fL2uaCE5ti",
  "key26": "GDTVKcF265jvk1ZTVxZeDhsxfihoe2zFaTectJ2uJvFVJimCD3YMua1fse7izbqypGAtiSJWzmkEPtfqY5nxgrs",
  "key27": "4Gub7Ranv7yoeT4VLJVvqTuPSaGJ42oQVSX32zVkPxGwy1hz1DkzRqfmEh2iJGK2ZKk79s3WUosXGyhQ7eJHofSP",
  "key28": "uFwyWUEmnviDTTUECWXLcU5hPc5dYuuHg78YtJLAUJ8x6RKzQo2XkZXJ6gLeJggg9TWL5cxSpcqAGCbCghzHLPw",
  "key29": "25NgYVyUtxZ6qB5yQDYrpmfevQuCaM3eJvNAub615rfd16NsvRrH6HXeTQ24yW5k5SDHs8KM6NXp7doPPw331kEB",
  "key30": "2xRBPBSqknaC7pzQv53pnME7BWNbSvVTD1c5KkvsFXdWazG1CYu5P3SDPvdeqoCEvxLtg31Yz9WBESqTYsHS8Ydu",
  "key31": "2e9pKmwEoRPdbAe1xTq5o5W2ESMhyJkrktbQGGcN1gNVEwPxwcjtsg1MV6H8DnjNnJWM19xjE78fBb5S2RupaShn",
  "key32": "9HhRE3L3bAMPYYKyWkGF7beVRuYbUfjhPuE29c8isdEHzdQXAbhdm73YEPjJSJucgv28KZx695ZSeVcFnfhjVnX",
  "key33": "T4UB3no9noh7DnNe4ayjpydDRYyzWnfCvzGA8x9ADfAHWRQqpkqurtjGxavqVoytXMeX2AcBohtLndH3fL3gUCD",
  "key34": "2NzjYZGHSpAU4y5dfFAEKZ7QDEFLA5G7LGqRzPV9ZpZvkrGwvTUqyGUuzqhT6U2oiJwpkSE8TFuyFoN2tgytHtco",
  "key35": "4S36EQQqYy1AczGM4j78RyNtZyCQq7d8QXb3ymBsqsAJ2p5mdVLXBmWgac5JDjmb6fb4CMPyiJUZqMmneTPnMCLW",
  "key36": "4pGueeeFUkjFVgre9MjWwEcwNcGggA7GJ49LP1Jj7yVHwXy5XWbnXeapHKJzDv5ACVJgVvecD44Pn9HxAx8cqf7J",
  "key37": "2b5xyxqQri986L6qY38cnxDt5N1vBBTqcvBWDRPkgfwnbxz6E3qWcrL7wNqbEzwPsYpnYaBKteamrrU5zRYcdSUo",
  "key38": "3vCCy5JtCSUX98ysVByQV3QbxH2w5MFWZB5Pa4VScR2SpXiWgG19JBdVS9rMCkwND6ePfK38k5cKXhyvZ4vpzzmt",
  "key39": "2d1D5NdCzBHroUSFG71siitAQsR8c5RqtQ1RutRJrbQZFgzQ2oFT6LAVSF5mhS9JtEJYe6PTWXnwz9tXYe848g7z",
  "key40": "3Jj6XhkMXUGC3ncNkA1YuBhwo89KnHTQ25kJUm3cAGgWajYe2xywuDc7xM59tUF7Y3hfuHNNUCu1zPrjGPkHYzKC",
  "key41": "2CmV6vufK2DKQhtF3ypitcDjkif3SRmP6m47wrta5riT6TsHdHEBtUjmKoGXeN7RwEWMdBk5Lwb1wB6mRLsqeVVz",
  "key42": "2YD96E5JsARSZJy5YZA23sS86AQ6M8KF6hapswfT3ZpVoe5oGAKVTbNynCkZXWjZAV3cqLMmYwAcToakNce4NXda",
  "key43": "37Wqis5PpY1H6e8QRMtom3arVvXpsqKEbSr4QUpgf7vAbsU733UZysEwNCacfCAiLCWjo7R9jnTY3eShuHXPCWdF",
  "key44": "4BgKXt6KKcXwoKFbKa8oRQKztrzmnUZgS7g3kAqVeyLbJHREHox3Jwv2ugGoBfuKsq26XKqrVHXq5c2GfJEuD9Ud",
  "key45": "bUrXRhHmFumyaCbH2jowQCGeMqRDtqe38xyvKWTvD7GFWF6EpMM7UfMewBGoAexT1nk2UsotcYH7cYiAymvPjvg",
  "key46": "2tzkNfiumziSY2xDnjJFx2kEMjKwtWkZV2UXDdTBrdbQnFEHDgs11LNdrzwPhMaEB1w2nPYj474rHCELg5t79HXy",
  "key47": "44Co7q2STzTQEcLDCEdhUEesQ9GiWPHXacmPsmtL4sznVj7SNAtqFJrC1DbivTjaGyHWAS11bWHWXCmfsg7XQcY8"
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
