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
    "3BWspb73pHciV6LRvbHWc9AfZh6zu8UAXXSc43q1AYD2EpoDnCZUHALQzkCnKzXwucmQS38CNemALBvSaKzQx31m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CYjYfBhqHWzQZ5o2KVUxacFJ8ajMrBCXXNGkg9ayiSFBmhTG956UXW5fWGENXVYW7rwL2whAhiwsYZihNfd7MZT",
  "key1": "3nM93NwhvR45zSc8zJZwXRKZ8LtRWLKHtFgbzrS72nzp4qNkkSwigL4mpW78mPPxS39vRakg5tfrXn81vFh382dW",
  "key2": "62xbrTfEKZTxEbYpsywHnL32LtLNcnuyChSEBpV6gDxhtamfsnF91prV6hqXwXdeuFtiWjCN6kgEr1z5bL5v1tB9",
  "key3": "2rnq5qTEQE4vNsxdgtghfrUJmWMy1ahCrYx1t2oGetmaAAGh8p6qfY9E7Ab9d2pgL38VYn168FUYijzEfus6Peus",
  "key4": "xJSYBx2192zKXDLiQswCwQfZYit39B3vWBrv4KnMn9EWNcSapF6WkSAyMuwvJEhjj9qVAjcDWoa1hmG5YR3rCv3",
  "key5": "qvi9Rr7KXLhot11jdLQW2qDPTUgmL2ycKgaQer4dxsQmjQDCWfnnsUbCmeoFNc8kGtWVVyvmruzumysSD7j56UL",
  "key6": "PVRieV934yjL1AFXQir2i78tR5yKd4YQF9bBN2ypsLA1726zdC7qhjSvWfS6ZaHe1oURpxfNFUTZPSSiaMEbr2y",
  "key7": "27AXbZ3pjFBCM3Us2ktVuWCQV6qAzbTTvkuHrqH4wpDRgoWRJcxZqSrPzevq24P9x9izeEG2nV9eNfQJtDyxxQhy",
  "key8": "3wYhgLqA6XYeG1BGJYUjphkE4652N2RwwYFmQ9Ld4YVXUF2ioRJUZoMD8tsWzGkoB6cGscbpeJeRHoXwk5BMcSWA",
  "key9": "4vS8eUHeBoAognDdMf7cVV2xeMFgjvcsPyNGN1YAscELSnvZvKUzhmvRDz2vmzWCpn2hQZua624NE5vEdoxDYmQy",
  "key10": "2oS7xefQ82YM6sBuH1hm1XfX8o6KjPisbfhbFFkmrFmVX1xbiyNdf2Tcf3dyeqQVgpRZ5dWC7oqkafDx76yJtWSW",
  "key11": "25D9FJUVY2kSF4xkssFjMNSqQRZufbypxpSTy5qC2nRhPCGr7bWYacjTWv2QeJRZnc3B5cfRVMsVux355mABXpTb",
  "key12": "2Rs6qYxWGqP7F3wU1VUHN3htXwmoGQf8wCagMsUotMfNmMW72m1qqMo4zswXVWQ1KkEZTHq9VvASQwcFn2WSDL7M",
  "key13": "4XBv25CmsH8gcHA7YCw6xVUpMMreg4ZZ85Ly9QJPY5grd1AquaPG7Mr7APkMBSwon2ij45J3ZSiFjqTzFbaZZgfD",
  "key14": "67MxYDiWtAupQsEB3WTqeAh48N1JuHJaAYL4YuiBVHcB95CUDsqvdmqsBa5M3eZVb2GnrQWmo24Go4o3oWUibsDK",
  "key15": "5paACZoho81B6oaGQ4k6krhPpuzPUC5jViyyTaid4PcFsmvJmkcqmfY4NdjonAcABMYWkXigUtWzKfpydxv14QvL",
  "key16": "1LdtGFejuhM3s9h51g9umuUExekdnAhkkHLzeoh9pnDWWAbBhY8Epcpw1CxVtSu3ZcMFnh47XY2aqKgBoQs1Ahv",
  "key17": "2wdYaWSknoDAAJA84i4SgDM2SbwoDbPvUN9diNY2EUYsrip3gyU89JyXtLaovjQopTn1vLheMAak9WXvtnr75sGu",
  "key18": "3QQQyru9HBMN9WWnPXZFnZqTixMEJ4pEZVJWHP734CXVgLruZAyrn5kpajRnkcnHR2urDpHY4mThsgzaeJ8PAnbg",
  "key19": "5WywY6pN3bAFvTpchuNWYCJms7Bpmc1ZD4cQyJmfVVivHuniTQCg5DRxbpX3AWZoMZrg5buKX45A12M2hrVfMMpe",
  "key20": "5q5sYxMJDUdFimU6hPq2GtWeg4CjjY3r85dZMVCHQgsTZWBtE6c4SBCMuajn3h4AcRq6SQuUneCGNg7eYnZWT6c",
  "key21": "xUoBZq5VY4z1m1pCgpshQ2bSP8KMTLDkrHryrCYsLvUC41EMjSHQHgZr52wiidRiobZDqVwiziAZZqkjrBBvt7N",
  "key22": "3xdud7BKRwrzPnr98eoXa1p514JSmQi3qiQWM5EPE4PVLFWzKx2oNwmgns2EVZbZijdF4z7bGp1JU3nwW6nzVSXv",
  "key23": "21qrtxpU8grPhXi9zK9F8ZpTL212swYhkDAhJ2z9eHTeFrZKMmZvj4Ek34kZqRu7UjzK4xqEkVkvmNcmKBHF3cWV",
  "key24": "3xjcBBwQ3yBWTQ6eTAMmAWESEY2sZm4accREJcP27JUL2gJZBajLAYawYhmuGypZwNZJMezeetQoEpuKig3dJY7d",
  "key25": "37ZKEmA6LTodwzAuCtMCF3fBaE5EQ2B6WeEhnk5p2R32WYetQCRAKcEw11jXPowzAD2TiY34RyTatAmoWB1UqkLw",
  "key26": "2pjAFEfd9ZsDyfuTDUjerw7gXct61Vu6M3FXdD17n2P9Az8D3BUFuynnMgmv7GoV4hP7KbKmKUjZzbb928KbkWm6",
  "key27": "2s2vZcJ2yZwZmtw3w6gU3vbx3ZQxp3XuUaP42se5EaPiSN3MeNiGykZ4mSSDVxephAXMEeCZBp62CpfogJGB96MC",
  "key28": "62Rvs6Mpw4D2oP3X26uMfPwPwSHiNT31pQaEPpyVaqiWCPBWyMC1qFvQuG9VGNBVHodG4pJSk2qbMRNLoYksiAAC",
  "key29": "4z8bfpMXZkf2TNngV16kURGFSVR9j9rX8kQ2TDWpChdfyVfB2Ez7AgT8d5m9GFM8iam7fhd3iqqNSzdzqtsBFcTv",
  "key30": "3FV7aTMWKR61sBLBZ5cGP3qQryvT4eekQqE4wtEagoCCD8UZDhm3dbtFcfgZKEjXn7cCczerNFfVcW4eaSY5Avuc",
  "key31": "gZRWWGWZvQGjEkuQVaa67av9FtCoh4YAWzMHx6jqyNkippExDxQ7ibR5TjGDwjmTK5o5R6dhugbqzLz9CZQwFM4",
  "key32": "5uT1ZhEyAbd9s6pCAAXb5kMzNUdtVpX5kpGjioY4iSgm8SFriYRNM8mhEMFE1sN69P4azNUXji91HzqSvvSpmajH",
  "key33": "4utHrQGXYoc3cw8eGjVYDetej7Zd5EGHdumrVgsk2GkzEyzUyb43LB5xfa3b8ySnStM2Syhkk7K6gZBuSF4cgac7",
  "key34": "3xHDqSNzVdX8Sjdq76CjtK3WL8jwBkMnDSNmzRjtE5ibbGzwxQVsArS5yKxGFk3q34KVFR3NxcBztYww5ve9ovfe",
  "key35": "4Umgw3LUjbqSaLJW5XE3FRb7QtGjigL3EaFh1iz7cHJV3v2vF12YjXCKKPY3yQwvxZsP8yiDjGFSpb1zR8tqjwuP",
  "key36": "5vbRpRi5KK5sVkAhv6Bzrg7r4Yv4n9a8LkFdHyP4RRuvcPHq1Eeqnea6p7pkAmkaxCYwzCm8EnwyHBscJ4Q79mGK"
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
