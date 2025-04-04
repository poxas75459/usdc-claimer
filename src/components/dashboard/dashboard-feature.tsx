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
    "4vXB2mftw39hdJfuwhm1DxHr8Tdag248UrirLatMjmNjqeHs2SCPwrb1zWkC7G1iKYf2mRpBWtVWRrUv9JWo2UYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CxVvPa58TSEdpA1tKCBqtnmjVcDwVPyoQRoMZyWF71JpDiBrgBYNjFuPwF7AxWd68fvzgPhNktRanU92wbsNpBZ",
  "key1": "2yzUoyAs7BxffCA5mcnxo2Xytz4QfytfssAoYmsiukeCnyNeNou61zkbXcktrAaXivrbJvW9PXdvbBLrQZzyEAsR",
  "key2": "3JWa9XM7jzcHVNrEdZZADEAcDjQM465cfyMaMetCkxsnRjzAnzGJsro3MeeJfGMMaq948UkbinkCsm2PhR7SLWy3",
  "key3": "21wHNp3unDkPE1JCRdVA9gvE9PJXYB9QwF2QEdaf6Stt9dA8NGVmfjZbP1WfkTNNMUjhypZAe9XDiUB4EKwAR4F3",
  "key4": "2RGH8Qgz7pPeaAqqEggMWttbmyiRbgBGBcqrj6qrPsFNVKLm8EE1GCtvG8L2hTViDzP3su2ZWbTDjNp2rZmFc1kN",
  "key5": "5T358prXqMJBG9tjL2DPAnJDpGCVcPNmmLqTyqKBaVdVnyPVCUhjd5eCnYhuCBMF6CZqetMC3aXVDQRE1WbcWN7w",
  "key6": "PoSCcytChYdhVF1y6NosL3fRuy2ib7kTeeKixgKJ48RbkrcZostzh221TqLj1NxkrTkSY9Vn79cMXRJYcv5VLSh",
  "key7": "66qd6STU8qGC7AYHG196Cszy53EVga1M5gQiWYAoRjn5MLrpm9gxBDeoR4BvGNq3GqTEYm3QQSXYpzU5zsSLWchD",
  "key8": "2rNrxdg5PMMCoLm4wrBJf9s78TtGmAgP3UAqo4zGeQUBjsgTKv9M897Pat94oFqSr1kw6BFxxUYAkxZVH7RqhLz5",
  "key9": "5chvhqXdDUjc4KUzjkXnvRA8FzaNDmAoDyRcATUw3WEqPuXUJFKaPepgNVHhbsnQGJMrE2dbVwDn2jpCpHPe2pAF",
  "key10": "2cfo21vZFUHVxHP56ajMZ7XMzkahSdZXCTZvTqCW81XjCLceDf1m6rnyVZpxvQ4F3N1n4Vz7ZojtT6YqGGxeprir",
  "key11": "222uSAm21Q4skPghapni5dtASnMDsgYDRadM9w9XXZLtvXTELyZHhpdLTKdBM1XDcGdSWZJDNQAFCb5wddYYMque",
  "key12": "3RX7wBusyJknHufimGARgHpkukMGnDB7ysm2b3Kq4p8fJMiyjHymN6L7mU6x1ePZxn9KPeXjN7L5LEQDZXrYWZCt",
  "key13": "5K8vz3RL4pNjutNuM5azuKxL7nXZbNbdB51FcksY1guMx1uFgPZtCZBVPBWin7mPumFS8XQdaHvtsPPrTssbVP5W",
  "key14": "phKGt5Go15Pne7vV4PtDZkFRkyzF3Jf2RKgGgSm3NowxGfjBdBVkoz97Q8WvnVt8Wy9WyCwTNyzptPSuW9icrxK",
  "key15": "qbkRnJ27QLtQjXy5xWzyNoeBT6f7AZADrwMBB1cuUos71YNP4hm83uxNj1jjSMEpTTJ3K1AGmzbHcZ6vost8bqy",
  "key16": "3PfQshwDo2cDjVMoCFvwFAG7Jx8DNZgAXbuaJakJSCcJS3ksMDUqJ9uAiJoasKPMcPpHCuN8xDTMPbWYXWCWynXP",
  "key17": "2rBVoZhWUjQ76GasT2TbmJhzkR6C4WznxQUHzaqBktmS2gkwGN743ao194EMEzNyTXNrva2JZgLn5q7gfMZnpGyc",
  "key18": "5c4bodJHspbUjqC1p38J6B4BvB3RGNtBfWJY37ZCyvW3SstBRdhu5sUNiqpmj8MvDvNTtn7QeJ7M7hqcXcPNYdLZ",
  "key19": "wNXi6gygE7CjCgPyhPR6WanpSaNhLzza4zXYTrd4Ka2pXj83dPy96bhHwwqthAiVgxbCVGcs59arwMzRWER2xDr",
  "key20": "3hqX7yjFckkKC9QEqJ2XtMmc7RgJ5Ld2RKSYwpY149QkhyAzCYnDDt22WT7GsSuaqEmhdicajwcgxKz5NWCLhLDJ",
  "key21": "3ggS9Fuk2EXm6tYj2fG6HUwRhJuLAHCs4mGPHkVbQAYqFdMkPKNT7R6d9kNHpXTQi44jrFbGiT5qc22UKxJo2bK3",
  "key22": "37w6twcYwBgHsDcdxxmbXFHLCVx99mxfhZTfyPmjgWCDCatgFQLoky1YDtZVwJH8Kz5SdzoVJnP5m6VN4UTxQtGn",
  "key23": "3UiEDUuxx2FdLkpGwHoR7WzpWjcaHAABHaAi8vqbBU7mCEDGw96cuERSUC21n8QfRh9grwoWAPgcBoMFj5TpGcv1",
  "key24": "hgEB5Bc7Fy4FWXShyWmNZGXUdxhejjQ7AdyCJJzZ3mir6KeYppLpdwZz8rzAqwhxBzSvoG6AMz9hZbSM7RN3sBk",
  "key25": "8CShECEq3Czmrfny25fXtpfXNi5R91yJd5Y1YMAxDjUKWCq6Y8hrozdt1c2cCifaLN1MGVVxgz8rYKmyQD68JBt",
  "key26": "2zrBj34LkyXmnZMsRJgZqLb2MvBa7X6o7seXRG5xbxCtewgbKRxBhkLqqPrdzrYzTuTDPnuq3u6KHGDu6mXQLi9t",
  "key27": "34uS1BWKbNa1yN4B3TohsfYqURGjpYjWfenKz68Laipu7KzFs3mRyFAf5Cc1iTVfnK6nkKVCRjBiTyAnihCjgHdY",
  "key28": "5udQrhd3FLzCpsH53KCBVEWJ75NMkKLFHbD4x4PWvLksdpbm1kkL185WDJu5CMHiGdNX6F5cp6JCDeX35zzBVKsy",
  "key29": "4TF8LxH9ksYjaC2MCeZ2tjvSXFSf47hZma69JMm9cUxMWbNFX9pYd9iRq8XpSt1A4bB17KZsTUj1zUazdrJf98f6",
  "key30": "4LEhSYovq2iwUVZBkCvV5JP23Pk7DNXuyiHKrCZhsbmaU5Sa7xt2v21Hhv3mdZimHga6yn6m3JP3RqfDhfsbs3iP",
  "key31": "qdQZAYn1XKn6Lid8c3SNtkmTSKNAGiwWyKWLHTkfjKWZN7C6HXNd88tnME84div1AxjFdEZm8TKa1pspM51rHYP",
  "key32": "2C7X7vg3F8BVEcKtyoycaZRH7R4CBTxKbWsjkYev1Hd2ChLRrCaUA2dysGqBAE2MDcL2PM8mzrV2TLWpFKdAXzi7",
  "key33": "2hpMQJd3CHGgkoqPksgPiH1zVZYuk7TfiebxTbkv9ub88rvVaoB6wVxtrVp4TVUBKGyB8nK5ispLkzSGf3Pv2RpV",
  "key34": "pbhUZBiqBq8hV4N8nLdXvWMbHP33LVVtVuTVwri8r2haWsPdrS2Tj67zKUx6kWwKVeELaRWCzCddZn2TeM9Lqfu",
  "key35": "2i3FUAh8HawrZijDTUYCMKZuwkdk1caBEogwxMWWcZG3mVmQtrDzytcT6bx9rQLNfybWGZ2JdLHv9U2coLeqxyC8",
  "key36": "QFYhgHzPUEsWYKCNBXvDgAhg6j7r4rZtKqPokvmu1KoNfNtXdWWnyvXaph5jg95pzwiBVHJAnH98yTZ1kWkHCgJ",
  "key37": "35wLtHJPY5N4Ra9QYgFvF1Z3FX3jNuHsyrd7cdksngWq1NsbyGdHtZbbHM65vdkwovBBQre4fJRDB7b3SceGbX48"
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
