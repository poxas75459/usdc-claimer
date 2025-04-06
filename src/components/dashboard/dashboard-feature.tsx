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
    "3z64tRrzN7HKXsMB7SXSgEfzpef8HrABR8g1uoFhtcYV41VH4gGVAp7MtSuf7sUaJAiySKbjLtdETwxKGYLi6NwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LKTuRwu87Hjh3x3VwKQAQFi5FA5kBSsNsZhue2ZSvU9LM1KS4SeyE8rwDikBSMMqfFqp154PUj1B3Wozee6KKng",
  "key1": "2YDwm4sdBkQ9c9og9rXfhQaQ1xpXnFtVHJZ2B2ZDAxmR6DvPZZ1ztLPKtSLDV3bGzAEXPw5K8pK73pQVBY76R1ma",
  "key2": "N3HkaUeDHyhW4cc4qV2H3sDmpeUuKwhuhcGS8fsZkFmf6vjonZEHLxuXooSjirvBP3TvxXRUkQhr7GEfvQUUNqo",
  "key3": "5U8SjVmqzHGsihmW2L8M5fgAnRoPou1FdeYcB4bHF7EB1w29sgKifXweUgaGwdcY6Vr6QsPctt5S8nwUr68VThqi",
  "key4": "FP44rxSbn4DFz7KDKYEA5upyHJpboDHMKJ4vPNKBJWHkJjuH9ThG4Pq4ftzdjaPzAxE5N7bHuaA5zoZxMqtKne6",
  "key5": "uQy9JiEbSMUh5R2vUyCUsjfUtP7FcChttcBwjXPSZuWqNYWyyZfS3rgDXzYsS3qjLwqbNHDufYbBmAuZsg8W3cC",
  "key6": "2RFvZPiW5Y2XnxTseFJSYY68bk2tSzJcSTfHijP34FVG6XLGYP73YR8ocZMPUhYZ2vZvDYDrVuWTh2rYtLot1ioz",
  "key7": "62dYZmWXedVNQ98YwVp26Dcha9Pa7XNTko6VU3HFFB6EyfbNku5UaAw9rbi25Y3TXnARvbKHjT9zeUzZQye7avV3",
  "key8": "EX8oTzhCpuaqAmmbTsYoNvUdfKDxuy1nWdGtYtTGzUbeo6tU5yY5K4QWxuYs1x2EBMwKYkAED7QjhLRzPaPyvGj",
  "key9": "ZCZGYcopGzzufqBNTDCiCLrtivzSWd2oqu3hmekhwALLV5NLazbYxWW36ENrZWqo7WesJkc5psYC5p9cfKDwPSz",
  "key10": "29wEJso268Gx34BgwTu2R89VJawWHJEFtReuqPaM9KMjWiAxBxZmfMBzzb8e5C9KtafyFoKiCuFrQkE4z8jPLjF2",
  "key11": "2s2cnTZzQTUfCx5ChHW2h46ujw86cgjLsjGRewRQ3QARB4HFGa1Z6tEmgZKWgsoLf3vDCMNKcXe4Vd6pG5yXJjwN",
  "key12": "R578DJqTWpeqeqbx9BDn42HR9bLnXpGEDiXfXj2fxMEL9BwdJWynsf8L3xhc3bannhLAzoSSikCxX4BUwMnG75b",
  "key13": "2RhFVcbuTkKLxzR4toxQzjPxFuLXiSwqZrF5onUidvVXj2A6PscM1fjEmzXjUh5PqTjWRRbF7H2btTxNmwUmyE7J",
  "key14": "253UjjtZ2ERsFYSrqGFctB9RNh3s1nRtKrYPSzdrCB8G1MegxX2fPcwDrjNTBuNTrzwfYtk9eVPYQEg3oGgd9fh9",
  "key15": "5VApd3CS4zkZdVRrB25yVc3RtFudPnzH5Yg5JiVDrw7PWN1yQpuYvaaGRvMKMycMbkpfgLPHHQ1LyxgbRL4CNSXP",
  "key16": "57W2nTxPdWu6CQUwgcZxwHkaZsCGhgnDfzpvkwfNC9cL4N4uckPRxTssXK8FAdi1ncoQbYJJgymA7asArE5gsMua",
  "key17": "2E9drK4HGpU9fMq9AEQVFmnoZceMKwhyEXnSwvrEEjwtza2Ciu3oNi6LT3sEsZpqCzDwv984iboTzRsMMc9jFn1g",
  "key18": "jqdufdFEzVYRVyfmAvdimy72k35bDo1gH87sKteS6igtBpmGCyW5e4KjDxusq1JT352mVy22CCbe6YFQCv7DswD",
  "key19": "2EgbaUwN2NUDGL1bsbaHNwmMgSs3yNLg2RfDN6vMSyPf9soRc4SUdK2pVG1za7VYq6NgamCqWddYUCE4FtZLPtab",
  "key20": "2qQ5M82odFxCFV5ta1VDkaSHEDPA7LaBWog1W1vorEnUQcG7YxEooy6LhHJp859gysFJjL7EQWmxJN5QViRimvnT",
  "key21": "4yoiya9Hv8fc632WJgirk3qydFxaxXsuVVCMs83tdb33ZM6AryWo7Ey5HyHHm895SviQeMMUFN51Sq2QNP1z4KEd",
  "key22": "3j47mBJ8f1wsJCGThqgYbeLzKvVKhQJLhByc3KfXE2GppcTGvNMYxGmorKAvdCQNrBweXhGEnV6vP8FjuxpNpiQ7",
  "key23": "2BRv2fnm7WKR7gkQihTVYuzBtQfc5aJi1qnWEh8Af3XcNARiXCGChfW3ujLY3SuYvyLJYp4s8PMx7yZroUcA5bUk",
  "key24": "4uwUD5wu3CR9wkQe4m3TRcNTcaHNGBjtxsKHNH8r2ped8C4gz8N19821BuhPHWnraapGJZsVWtwbqym98nWZfD3Z",
  "key25": "3YqVvJGs8oxmEfD7JdP6HowMtBQKtZCq2vGF95RSvsZRj7GaYfzRzsVKbJH2NBiXisjMRXwZhMJSJuKEYXrtdRJr",
  "key26": "2yzoPcjzuL8Ux7GwSYyuwCoNcGcHTxrmMji8KtvjeyzVvajHFZMMZJpofjfq722gPdwkEsNMbBcZKbDeZATcjsC4",
  "key27": "AQYAnzHY8EVLKpviFTUEST2G2nWDtJvHWmxjRXcYKY45JEeWqJwGLiwCzz4wXCZp2Rpq5Ditq4y9wFMbb1Ztbtd",
  "key28": "5YeAhj7T5fNkQJphtiCSWuNioxKP3vdBy4f2vi3h9wAGWNGqHbnBhiHLKMMn3tmaTQeY2MzVpcYE7Mk7WqXw9GYR",
  "key29": "4cTgcn5MZAMUenitq3j4WFYqDgCokmGckNV8GU4PimeAt2rGAE9HWWFqz6SfVsG9NZCJ8Eu2hncaTaqubVMopHgv",
  "key30": "5npjPPDDNZw1rCZgYdkf2Rty37xT6CwaScGXXpLqTfXmCCdJvAiGZk6tcN2cZFz6CvD6arvVNQix5A7irmeq9NZG",
  "key31": "5Xc965kigHLHXJ84u2J1srZ6GymFnkVWfTrpyyD2pF9CZJiWnL26iLnF4oTeZxu5pabPgvqrzJQcGoGNYr5KbpRE",
  "key32": "255QeH6Dft6ab21UNKYfkV4M5SGsMav6ff4xSnVBYbdfKdk3CBLgmFccpxK5XjpwKWwK1prHjGCtQpkykiBK3isv",
  "key33": "miyJjPjRAGVH1RkpxtvErhLP3opt3XMLtyp34dAELbhQQtAQx7gUE6CWUXpNjN8uLcot5V6AUULzrRtkTJkKyQt",
  "key34": "63PojypiLpRGpdNhWroncFbXSD2zJmhzcBiATd14aK4YviGRpVVKNVfMAEAZJK45ELdkDPLSAFBXdhfJPqnCqCcQ",
  "key35": "Hi3tZhTrHiFPWag1JXR7dZJtn9jvi2WD4YBJACwPQt9bHu8i9srZTwo2bnenUHHac7aZ5VHksiXKvs2GusFJZJk",
  "key36": "hzBfmzTHZfQmaH5PzsHQjAYszphRzwiB6FwFkNVvTFCgEbRLe3RRTP7zTEU8q3goGdNV1hRo5fb84GUDDw5uFEs",
  "key37": "YU3o8Yh4Wuefhh6YQ4zU8xs5PneACexi2DFVQq4CZbsVNSmmB3J2AgZQeWyQm1MToM4sHBAMyFt8deWYEj6r1CE",
  "key38": "2a6CYmx12xcMNuMuWa5P8aHvpjNo1SL3p4G2RFH16e4PbuvrdC2PXFxHnZLYqAnXcHjFJkXP4Yuvpysfn1SiHZMX",
  "key39": "SVdzHMF6oJkFrVFeHB4E77SbNwBFhZbvUMyo6SoBHRPsjygZfwhRbof6nVSN287JCkN9vatoP94NBqG2mXFVnD6",
  "key40": "2W5WLAjvDu4QeXmayLGJ5u6D5y9DH6ievcxdvhN1udZxXB15ESP7CiiMW8yTTZU7oeGREHPraVkScgbDfC8tvpKZ",
  "key41": "u32f7D3eSz467MshG24tYnqwui5dtdjeSPcxkHZqiWZ6gSrd7WYNVAo61b5zrWePuFSk4GCZmHeEJkUNGLDjw1C",
  "key42": "4gBmKT7WWobU6PUU4HdpNE8t73xoh1huj7yut1yidqDgG67wsS1TYoUqmofAqQHr669KNifAFrmihpSjGWniG94K",
  "key43": "5oUD3n9fmYy8iURwZKWJJdfrNU1JYNiBAwqtZjR8pBEFRjkXorD8KnoAQWk4Ex6YaA5QALYQpEksBoRPMXK73SAQ",
  "key44": "WacZTs3Ti9urANhxZ1SEpGWvt1YH6nq8iGHQ8H6dTSzf2JYeBvAvjyKKXwwB6xyVzHETpgTxeLutyiXrzqzTpv1",
  "key45": "4wWe4RnZRLNDVsBYe2uHQfUHrjDbqffzW6Mq9Z9mjK1jckWvxMKA4iLyzYbyFEKovq3HVKe3zjJzumDR9t5jju5Z",
  "key46": "5syJwLpShZgLiD1eroKUg9SPo9PpscY2ZKGBCczpFr7uEs1zj5uMkVDCrdcbkWXs9hN3UpT6yiyHtQaYJRSX7eVN",
  "key47": "4chsHTKLSv2Qvr9nLtGdRRmJhWHwqXgKFCZgjp8TRmuyd4EXjodPZt7kyP9taijNjp6GqF22JxvXojUQwENGnF11"
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
