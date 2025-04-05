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
    "Ga672kp5inKu1BmFw3Xrzub9ryT2UrC33eGK4BwgrD4iwqs6WXAEqmsmtaRzpWYAV5YVyKC7uTQifpw2TBjcETp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EGXxeVzkZW8a1b87b45FqMVsrcypbu5nVm8YZQu4dmbB7zR2bYtqTJXHPVSHCUVzNoZeigPFQRx5wnRckSBSpx4",
  "key1": "3yeBxKdY4md7nEuomzrJJ2yFEhUJW9ndNmqG41rKsrNjWZsf6xk3pkg5enSNw15xm2jrkb1MsWMLRXJEDc4H5QT7",
  "key2": "326AyXyMjF1VQ9PusQxnXqCC5bx1RCgutkLbXDLwkfW1RknLSwiNd1sN8REecN9vC8RwuyPg6eZ2ktVwwqymdZop",
  "key3": "5YRA8HyiL2VWN7EDx1KG3eeNHFQLjyPY3nvmzk7s3UjH4rJaTPet7oPtRjfFn1Ss4sir8RVs1KVjZFywHjEPQ3bV",
  "key4": "XxHNuhniHVt4KAamQw4v7B8Hr9p1CCjL1XSUov6fRr4s8i62S7mKv948TFpsmSWbKDbRPX5uyG7n5PjRvkuDa1S",
  "key5": "3Y5eFWzd1gFRaicU6xrDWss3NfCDy9aTc8Ye5LCrRCHJ8q7gJddnGgFSn6MgH6Zmc8ntyDfuRRLBxG76KbcT9QK4",
  "key6": "4vxcJSUsgRSBQjrP6URpoWWtKY28EEGcx1Jc9gEJTfULCJ7g8KA9oNzwQJYh87FkayV9Vgi73ZJy1uweJxGWSQBg",
  "key7": "25zjNo6hpnqiumQfiFLF6hrrXpP9nUN2cPKz3UU1wynqfxbP6dHz7nfLzGZaEhDJiDeUew8xcuYQV27p4kiPgZ2g",
  "key8": "4YsKpVaZ9PEJLihLJGaFwiNqVH5qgv4v4SgXFtBMXq5mx5ZNDGC3SgnQMPhSXW3HGMwYD8L6HbwfLWuXh9ZysCKg",
  "key9": "5JbhERr1i6cY7sEumo6AKQ3iBqGe2wHoNNGx1YH43tWTU4BriV3A74ZvGvDXtnxN6Lj8nWBzWqzAKx5RboPGgqyZ",
  "key10": "ELvmHRaB5jBayosNrSCj7KHR5rACNbR6ELsNsUSJt6ayKhUUEFPpuzA2uKaNQ9EAzQba7GVViM3eHxuAC12TRLD",
  "key11": "5bk5LQx6tQSswBrLC8ud1Ea33EsXLwVavKoPoEdHFjUCKqhTsgwyZ9W5fTebCxUxEN2fpetfptiyBpquRV4X7iB1",
  "key12": "2dMuBMTKVcVdvR3hGpT98HyPzaiJjC4v19W6JUvjuJRAJ1uz35Sj9vEx7ETLfXkJz8NHFRxxceHWYwa1mTbCEipa",
  "key13": "4zgF9BUh6nqCRSEpqoqDTDzfbafL8cYPo5UHousNzGasTHNxZozftBJPTVBEbVGuaLN2T85vfbKsRErHzHKVqJAL",
  "key14": "5j9UF5T9XSLqP5AMgraCDo4yVfSWhgXBtcdZqmJpmRNjJTEDPt1LAkPqjwZrZBpP5ATouyo8xePHjXxEkd2g2e23",
  "key15": "5qzaNmeeg5xhHKuTCaFALu2sUsuDb9UJYQvtkqZeJiTg2KRsMuCJDdyrcqiVYKrUFi2unv4JhMkzjXS1GQJCzv69",
  "key16": "a1WAqs4XkDdABqCVbDD8S1tRTYVogSghUEEkHF64qyx7AtpFRVUyCZVUdZWfMK7r9pja77YpS3vfMFta6m8yTAB",
  "key17": "5LY11AZ1tG1D3d3BPcjjPTRTcELXuyh6KgiQfqJFDrNcBih1ytEPA8eYfaiRXPuKPKY3VGaHSD9PhdTH5MyFb8c5",
  "key18": "4KbVRyeiD3X4zdiNmcGcLsAmmC7LZsnWbQFhuoSbkBWCRe6iAH9sXnEHxPJdgdkPW8eEbkDCsPM7bm2utaRyrvTN",
  "key19": "5MSmq7SCvWKPYkFMTEJkLcpTU7v3g9LyTBRbFd56c2KHsRG1rmACRth5YmS1vCn1tRRsYg7ApNWcSHc8ewhPVJEa",
  "key20": "2xA6YJZB9mwbEgNzspRFpwmkBQoiPdtBzfA3RTkvS2ai1CEHBxP2UEMEmdU1Y357UpuhqowfkDcgzAMq4VWVLs24",
  "key21": "5sVfDPZh8aLHiMbxUWoTCnkxunR8GtCZ2LpQjsTWY5JnTR6seGkRT1GXxr3wcAxFRiijR3ashoGYfvJVMNyFEQhB",
  "key22": "5bvTbN2Ykwnv53NS584BG78eXHt3VRm9HzMCfGS7LvqpC3trnDsZRfVgAXxdamX16xjyjthbfghiyMRtUzaAdNYn",
  "key23": "rF4LAREZPPH7m3a4QNxyUuvtSZdpDHvEaczwTFFsyJ1ZY6kT9CmFjGMPQ6n2qryKbwTNSrqZVYaG8q2wnwzjVNu",
  "key24": "2vQpsgbGq2gdUZHGVaWN6NvzFPULrbcsVU6E4qi5vkwEkur6TuNERwfUTQjPY4Hr7isyiup958vwUiYYAm2HW5BX",
  "key25": "t6wS97Wp4DHABbN2ZXvstTMZZtTSqxgftTaW5Dw7hdknEshzCMbrZas3Pu5Hed1VyQqmU5Ryeir7jVUPZrrDoPu",
  "key26": "3iX33oFZ4ftNWxDJeopk5YcxJcu3jKBjdRQy2kdVqt4GmhhnWtPvhytSBttdNMbCUseiJ9DDy2AidMf7YteNCSt8",
  "key27": "4zqzLKQdme6Xn7dNyVhiBtQRNHptypt65MhMkkjx7MLwmKpC2jVvirK1rhFCgoPkt47MPZ6iKcCPJWfd7k2GGypy",
  "key28": "29g27g8v8gpc96hoVrBMPVp7saeF86fCD36qUCjYV7XNeLb64yT1PdzS7LcgiohXeBQfAHNBs15pV1TZUBQ317S9",
  "key29": "2M1tzqRT3ZwMkPR9csQDr78Xzr5yEoQEoZceEmTBxkai4WaUbYdDe7AjijHQCWR3Kap4M613HF3CDZ77zrF3of9Q",
  "key30": "3PnuATLJoGnoDdvWq5KzVbK33eJjpCwFe6CydGgEqdAjrCRn2jpPZoa8jpjhCPqs1YjdRbwiUxTSn1Mu8ZfANpbq",
  "key31": "2rHa5wc9GL6ZETUCdh57FCvaFYpPYkiB6d84eaZ7HStYQpWXSCxRxuo9A7939Bvh2FEBBUNQQc24DkUfSAm8GAXC",
  "key32": "joWKypF3K4mY9g1XCteRX2TQopLApyL2AxKjJtiEd7sy8whq1tDMZVrk5fq1Rq3ErAZY969ipVXPyWKtRKLwJm3",
  "key33": "2jYNRm88jZLnnk6V2tFJZpMRRVLprwLVpf9A3K9iTq2XCyKahBddspCEjztT1ZTTeXCGoE8yJh4nCxeHtKiySZn8",
  "key34": "3Xz6BRHGaAtgAw86ws7xHqfofWa6w7phgMY7fmhfTYKBrgjUpWWyWBujFCm64JCmjSGiPxeCiU6SEfRYsMVoT7Ln",
  "key35": "54kiScktQb4U6q8ejNEnrC7BS747DZXEQrsGCwFN71Zut1Q3St1HXji9vBheofDVgYJ338nyUqHG6HJ8mBMLqGuz",
  "key36": "2L3SjS6qPoSic8vhwEikekRig3ysNUB3QnFbMEPwwhLHKbCnPtRAdRm1ybKLcRu2ZEuDVcMhYitL5s1HGjJuXiNx",
  "key37": "2oYYy5pdk3ZijUi1sRKyDMBoNzUfg6GYSYeUDZ7Jz2X3UEtzk4qjqamc5pnA4jYJEH3L3ZeE83CKS3u1RSU2KDi7",
  "key38": "T4SAVxt4kMfCUY365V7UnsR1gQuPP1HqJ3r5wa6hdVHNgmKNqncJoXvVVW5635PPi4spTtGu9pa7wK6THToBnvv",
  "key39": "468wwfUaQK9dZSfuFgTbU9Tmiqe3DNCA38b1zsZkRfUAYme3SaxS71Pog15e9tgnJ51FfgNLu6yYdcJHvZuo3TUY",
  "key40": "5WxX47V3piEvckQgFXvYJWZg6uTzThFhj3pw75CC9YzT9FNVxbw26KPBLJS8YmEuZSvJqQvnd8qsEqTNwpGPtfbi",
  "key41": "4nivj8mpk9YpMKzrU7uSaxkZTqaajJZspgVSkNp5h8dzRAgKfjkRwWnvDWeeGSBurbpKWg9mVYFzZybZbqNYkBf5"
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
