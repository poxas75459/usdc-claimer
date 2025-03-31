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
    "4stAetJDTief75whewjeojJ1VkCrNRD9p9UdYM2LpDh5KBDKDFgnDLxTCJGvvnftqDxrshjK1nfQ7NQpHESWfZyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42DHQpBaPFKNXZMjYJPPY6aSyUVmaMxPmofR97T11NtyAFRkQgZ579E8vz5nzkMpLT221PyoNmCpjq4ZwKKHssaW",
  "key1": "R84gtVpCD3UoqFAZ4gMmbyqqG3K6J3cs3f7qDff45JA2qU7tDan5jKW7zbgB4bQEDh4eNfn6U3jgMxFCvYnkjqm",
  "key2": "65Ygut1NoSEqZdyL2Skuiwsj9bow9fJFab6JtdfHbMZtS8UDaZBrZ6RqxNFUbTzYfUJM5L3GdBR29PW45z47gV2f",
  "key3": "2ZQZB6GKX4DPdnFrDe2c9Jh56nm7i2KrAm8D2p9P7bCjypXA3aQRsKXa4KLsZ91zzbtVHicSkq7b1kbauU4fQ4FT",
  "key4": "5zK6tqwEkPpYgSaSt2KgqJk4BQS42sXHaRxL8eYefZKLdG3m2p4iT6qNF27dCVNHRoNBTy6BB8e5bAyDE1yTo8G6",
  "key5": "3mZsUoQLXfyRGbS7yFemKSmySWoq727aEUtNzMSkDNKvQL8V6RBTbisF9sXMSMEpdct9ajSPJKyhg6QQBCKgQq44",
  "key6": "5KKskMC5SRzAPVfGcjzScZ8sxbdfsouMcgv54qsWbD58zcWBaYL2jbcpxEN9vJcYVQ5LvZ18YcjBkvxGkzL4QWEZ",
  "key7": "2Vks4b8RA1cmd2YTSHizHeMcNE7rXkjwHNdZDnN5zWTePCJhA5Sn1is6CDzrGHWMR2nquQ5g5fE6Taz7pboFCcX3",
  "key8": "3iiZ13eTynxLEd9LSeGzpFWdcQFK8zPv8aCbrEkntbaBY8gEMMupLvZYCGijQ8gteW2sT4fQgR8UvtyDwe2n7wRu",
  "key9": "37MND6bCvQ61UoQ35DkGffYEKhmvhW3SKofkTQ2CBHovePM2ypPxCgqxwNBN5oYnAKqVJX5PnRdA2Kkzf5K6cZs8",
  "key10": "HS7M1iD6spUP2hTgZJTUdwfzsxi4ruF54PdRXTpkW2xCzd3CaUbtBKSYhiB2Jcdhwfja8ykjLiupWRW9FLjR2Z5",
  "key11": "3uCJUUrCrehb2MVrBc1e9boZ8P5HgyidBErgmq5XHby6h4twswBfWRUPxw8Bv9dqQp2EyaiaxHPnotvnEjz9EE5N",
  "key12": "XP75DU9RDeEQyUU15oKDMFHf8DP87zzUSuNh8ZpLZYUokjRfUghHAraDEzZ6eBDiRpjsQPZGuiPaUF4LsR8kjhb",
  "key13": "3bGUkwPPmgmLXeuR2w1NXGCD3C9PY1Qvp8wLXDgMLKsKDSA9d5xSQcvubTeTqvzMemFYWnxDvgdAKWdT1epszQsa",
  "key14": "4TBDnH9n2kDF2NP52tj3kH2KxSKu9sqpGCRGS8LDezPNNJNBpu6gUHGH37hu9fU5RqyMyxf88EgREjetM4RfhqiX",
  "key15": "3tWMoTH8GWXWAVLvSXWuqwcV8nsAob5Xc67kp8gghUX4szEyQ5eudZQYasbBwYhcGKpzH3hWRyhicwCF2hHgRahu",
  "key16": "582skrbuBYT7MGyzTWWa85n96ZAR6RPiM9p3jjooVuUfGsTesBHqUsqbdGbiCsTXxDDSDZTVW8gH6DTdtWttzNPq",
  "key17": "4o6cRnWgWYFft2mvuiiqnHHmBvmvnvAmU1huio5vHawRTypo8WhcR1gPmTrcVTxThxLp4cUSTyXog22aHb2z2hWq",
  "key18": "2nYMoXEEfqzNANAAsagP1UVPdL1TSTEPVHaiNhNS2PQgBE2uWXXjJucYxvCfKV7MDG38dExRxtRT59cDAhxkUKZY",
  "key19": "36MJyb4smGwbTbfySupvAUziq971jCfWCAF8eykD6TcMT1ykw6yxs2oexs3wiAu98xqkH9cpj2ykAf2jeAyEtA3X",
  "key20": "3X4x2pYoVDYKWo7uqLz6o8eVarSvvEZ6fWM9UaAWAYwtDTLr88wzQNfGFimTYQ8hNy9JCFyXRctpzBd3ujmfkvJZ",
  "key21": "5BvctqvkZTbYr3w65mPNcdQG5oKLCyF4JRtCege7z34LJSE5mG8eVxzNLpKTZMDTGbaUgXbyTpq1sCAJgUGxt1v9",
  "key22": "fMdXNiQ4xZRoN1v775wEmENd9CFQS7eYG9RtTD4NYMsK8TWP33VaYddMEFnykR9KePH7FQ1YDkn9soGj9iUJxds",
  "key23": "qgnrSAU15ixxfTcPMTsN9KvG5tDouKbWPR9wipBAT1FoPunyx259CKGWH9ZCYh41veceV9px353CJihFL4yWWpV",
  "key24": "2Qa9hULScWSWtnjnTLfZEYEbGrwtNmg1rPBcAoXwfyxRj8k1TQ7Vpz5DN15WUq56FxQvdZ5Hwu74oxx7q8ATd3wT",
  "key25": "3qiTSz2i76ycS9MTJvE8i7PXrxxwCuQdZNtq3D7nVWntAsSZT3oKKCabkfWDmXrzEmdKBm5LD9zPTzMDKVSQPMnh",
  "key26": "3jzSwHULeb7k13JqwxsMdUQ5o7HemQe4aKZb6ZWjutu6u6xshzfTLV19GuG9qrBzUjweSXzr7USHLUdmcJu6VmdR",
  "key27": "5SNTzQqZMtxUXjHVqj4dwP2BKnv2r8jrWpKmUQB2e6veBHA8TNc1q3oBUVHEZLUAdGT1UNinTvWsRw1Er5sGSNzK",
  "key28": "a9MaaCc2t7MZZ8no6ANExCCuKU6d13M6f6JAgtosLSiMRNWDKQFF2eSqKstKn3EMcTvAVxsCMnusQPN69EZQ5yM",
  "key29": "5sfBJCyL5YmNuMiP2syqcGb5TthP2kZYdsejseehwz7sJ8msyaPw9yZ71HzxWMnJAupbSjUrbRYDJWbLrg6U3Wsi",
  "key30": "4TqoUAs7tk2VkufVAA7km3TBzqTjeG7SAjkDL31425HPi7pBpiMh1EPaNJqsyqBEmDPBG7PqsC1qW31vF6GMPFki",
  "key31": "aTQ9zGTeEvbSg7TFHEQ2xiWef59nuYcRAZadheXgxKNDUit5ningqqViVr8BXx2YuqtrvzWgSaJN9XdJi9VvkbQ",
  "key32": "51bEv39HFpiLq3hm8iakGWJBVkd6Mcu3eD9sTwLs8qGNjpRDqw6DtX8FSNhA53jjEAUUy8JtyxuSTiCqBL5HqqZd",
  "key33": "4vGunBSeemah6dVodPgBAnA9hdm3FuoAowNEQ4QYaXCYvGBpzQPcitYc47XgYfHqxtnnwcsBD7nwuJ1edBww9Swd",
  "key34": "4TUTMsshQZJVYgjwTusRVpxt2fUW9c6mZtXtiueLPF1NPGqKHHg5reHv7MaiVKouEuotBhVBc21rxuYoYxeXZy1b",
  "key35": "23kd4fP7jEv9U9FzAGpsVQwraNtrMA4betpPr4RmYguqFnDxUSdSVFtQPZ1oQ2JoGwRQXUBcg99NaeewU35QhMZ9",
  "key36": "4u5DLeqLPhotYYd413dNnYB7NWqJQjQDwi8qauTtBMiU9fqteT4sW2DnkyHoTabgLzMYtoX2WdhMe3p4eT45f8e6",
  "key37": "2yfLszt6My51cDzzEu9BjbXDi2ZEgUg9KM3y5Cwq2vgKqHAd8a5PmvV7a575dAGbcbMotdd1DFriFX77JJXCWkxz",
  "key38": "3FG3uASum3bftVHBf1kzFa8wm6PUP1pEN6YMBDQKdwpDqyeDKtGwFvdXiC3RQQLdajNiofPxS5RfveBkF8YiZkeg",
  "key39": "958SULogjL8c3gsm3bL6urFGxLsafe1wvt2sR2VqBG1Tyh8MsKPqWWCycndUCTL3FQidmnzkZYXk1SDhvw6XKqL",
  "key40": "RK4UdXKXGUydJ7mEnJsepv2YEMpjNYrDG3G5ZSBgcAzoAVyDi7ynF8xnsqyc3JR47fhycvnkL9eVuqCGs1saatw",
  "key41": "BjuwTdMHgTmW3cLpntbp5NB41yj9TVzbjh2bdFkHxiiFyvnNWRDnChdetY9cR8oHVFakL2sMKT3D4c5zL2hBEvP",
  "key42": "3HqJVvDdUoEeF71iwTDvBQFvV3LpcCWGRQMSkXVupBZDiHFPpvpgL7WSrGLsxt1npeCpsmQVoHtKvfCXJAFWTC78",
  "key43": "3Legwx57Sck2giTMbPYrKC2i4KocYpQ1efLmjfVnoVe86XXAGbTyLcSLTteu9D9cphRcSJca6eJVq3eNzmSU6gMi"
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
