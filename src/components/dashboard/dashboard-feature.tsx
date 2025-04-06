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
    "5L3xVttw8BnEwrRYjo2x5q32d24quP38JfnX6zAVv5X1TNAwPD7RJdXW3VdfqoxHhV7TihF6489beAPds6DqGtRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Xjemc5QesKkzbZrQdUbAGT39RekHA9RGKyGnWPsWJAkrKmBLZQYxDLMFyvupeYuwnoiCHPW8Gp1vtxLqj8CfKW",
  "key1": "66uuHpiSipvzMEkZL6zP1Ar9NWR7FGboHoLoB6Q8A9frGre1NZcTgqQ3d3wJ5pRTyCTWa9HhrKQgosk7iWAhtMgT",
  "key2": "4XArPdESCVdcAZxBAW2i2WEwvLDeVyP77xN66cd3uyEs6M4LJNhWa3NsooKu9XW48wWS42HFeyQABJGt6SEqULLX",
  "key3": "4dK8gmKBDc8aGE9G24hRMhM8BKgdjpTYwuxeVyw9PDvphDTxcUNz9seV6k2RPYz8FV2LbTH15svFz8p3LdwViX9S",
  "key4": "Z179bwvgmkas6hNaFxUJDHhVGufaGq34LGqq38eHaXYtBGuVe7fnuzTLjeAcseJzCaPQmZq4iUbo3jDyfggcspX",
  "key5": "3juGhmHEKgNzN4yuLbL8kNEjQi1tq54mzydrHvN3aiopo5jiNurhd2TYBwjCVrV4n5F1MsRaiwRKnodLEk4ck5tT",
  "key6": "5LSuQXqfsCsMz5mwCM55FEbsnhJ4t7zYBEqwZN8UhiUZAo9p2TVyKRE1gGsCDbJV2B6KDuh3cEXjsFgEBdoRxPoN",
  "key7": "JLtWH1eje49AxkyzN5kVyQ337EZZgSFPeMsuif6ZYvgLCEy6pWsC2aBkxe9Z3ybthD6EEiTs2rbiZTsXzAViQLz",
  "key8": "3uTq1PfATPQUy7LByARoMCPtcVF8YjgYkFC9B75juS4wwesEQp47RNgchF3rYZD2kT6sCUvBeX9wSF9NcBwzZgM5",
  "key9": "4AnBXRESsGYjf9KJz2H5dZrTpdZxJZ26uPFwnPtABMMWytpggnogimaiZCaMSuCMGjwnRTczsuSFTMSovzsPjjX3",
  "key10": "4CrXoME8omk4mp6juA1iSdV7PvT146MndUAm5YpfsB1r3JvM12EGUSjMaCTAbEvvAH6ENv61ppmUaWXz8jxPa7Vi",
  "key11": "5BndbvnkwEqfwER9wsiw464hdSp9b1JPJNQdF8az9v6y3Zi9hUjPG8CouEBejqCperNYMFPgQac3J39pSSu3qtTe",
  "key12": "3VMyD4nkicGuPoviKzu4tb2Fajzch5qXwtj42JqkcxDsM72XNDTYeUUQgyn7ZHWqFHjxw7xsQ53aHEpLgRgsh13D",
  "key13": "4E6YcAjB5hccMp37L5xxMw3rbFxgDGbWX3wZA4ffJQ1pLDyigZ2gGBD5q3C9WrtvAMMMfHVRiDguW6cew6Vmkryv",
  "key14": "5saRbBVjfmruYffQVuyQhcAoeBDDRihCwCw5hbnNhGjooLHVXavsgo8YgPvGmnCaPXVKwhRZ435wgvk8qYA2dgJb",
  "key15": "31ivdYzDcYENSeCs2SmwHAq1PvN1a7VntsPpKBLwpK3CRHUTXU2vpcJirZ3gYfAnz2S8wuCWaKWYergk5haQnHZj",
  "key16": "teacqzSrS98xmy9mSTahnC8stx5bZk1pb9D1oHiBEByrJV6hKTyYXzwRsXszvAtC54fbW74BBzLdsuqBK49eD5i",
  "key17": "45RSb3jnE4618ETowvPC2RTJmrLkEiHGAD3AtD8N8TjGTdFTC2nB3Ym54BeZSodqNpjLthpwPNxT6XwUgYsUsNc7",
  "key18": "35SG6hXbBqsM8C5f6prVqgLauq473arbaTM1CfMKD6XzjXe7SgKvSUZTBzwopcXFiQRHmx6ULbycXxGYyuYz1v71",
  "key19": "5G4EebbWgJhAB2JY29KzqTzxhtfotwqRCcha8XP2i5gjVkuZDhzsTaBJPRVxzGwjBbVFR2ad6Xb8U6sgscBp6yi2",
  "key20": "5zBxPa3HSMspY2gQMeW42QKvGVGsDn5LJuK9ZtbVr6mgV2QtUwgzoXCkhZxLHtqcrXSk9LCpUBpZG8CDbGTFVENi",
  "key21": "4wasafEHkBkXhdnp39jJipk97zyY7zrjDpDhdyZvhuFMd1bdvRuPw8VcEHqCuxfEHnSENDfQ7VyGn69LVXfDF5Tk",
  "key22": "2vh6gFEby4id2LVHtzrCMs4aM8yihZDEo9eGDP76Vc62BvonqTexoCqfEF8CUgYPE71UasReqSUifoYF5cArpu7a",
  "key23": "3g7Ntu5pavCWdcU16r3kAAkrKVRuKPSpUjp8uYxZVQAenfJvtkA83UMYuyPf2EZ3HUdhNuvCsdkVpZQxcG4b7V2Y",
  "key24": "56N5HZDcdBJz4jkXCqhysLnCPNE3hzZFhDZFYg6o4WssC5kLAa4iSXNSHr782Coqx16Nd123n6TGvcqLi5idv27",
  "key25": "5aAZNqzuU4keQ8knDNxrsQuEHmPPtr7x9dxx2CW1EsCcnPaVv9cyuwWubPU2ZhHiafdqd8FbRCtWYGNmHz7kTKsY",
  "key26": "tmik3kFoJeVMtCa8XxmqQBweLVcTb1xiPJVKTJsBYS2BYYEJZdym9ZU7Zd9NpgNyuu1X75LT6QMT3Kjyd9smpu4",
  "key27": "4RixS4xCmQeGhovN13WDiJUVXnb3sYULA7T1YSGvwKRd9ZNZNmxE7ku1bWG7x3rc5aDR7hweVW8e3dhwSJ9iJ44y",
  "key28": "4F2tCzs6kk3mABNCZCQFnZ5hVNDGFMqfCZtLQnJXMA76nFd1zwqRfqVJoLLquU27T6gND2kSwiRyqiuaFQh8JVtj",
  "key29": "3oPZEZXAp9JkG6Etq9zbJUXpXeu5ejDCJi9vKUXxgSv6iRibQAKiGRTMxKopH7yjcwHwJkbrhw2RKyqNkNHiwgW5",
  "key30": "45CofCHLiH8cHAfiJ1Qzf1JGdBR2sKD3fBqGtUAdHt6NzUxwu2QVUMWG6f2rw3yd8wapos9Ubw2xppDyUZ3Th637",
  "key31": "2zAPM7DZGfjw212kJYr7zoMKHsNVuS8TPqU7fYWyUxP7SP3amyXrxLqJUn8WuAPc2G73qPUUVuQdCNekSmXtWDdX",
  "key32": "3YCk3E49HiKerJ3uk7fgtduyepaJNtJHAtK8u5F5vCoTXRCCfDzdgFi7u3gpiLrUE5t9AZMoDngcJy5RcPehfDzT",
  "key33": "4mrAzHBHPmCcia793dqHSrVtECJXLN2sbhr85VhfghYgjBQQjxWyzXAWmanB3pR88MVjjf594W9qNsJGvRStTnQv",
  "key34": "2ee3mqjGCfKHHn5PvvMM5Yzg1ZxNn1Yv9iXuDguwzfpjcciyoinM6aYtj5iHcfpdFyAJsjNyv3LF5uDAAW4qUsun",
  "key35": "4VprMFvmdj29CLdM7C1r6B2UmCpBSvStxZktndrxtLfYsKXK8HXyL1EDkM7HumurH3vdHgsNdykFeueV2aDhKM8X",
  "key36": "5wGEvZaWu98iVKXaJSc7Ab56RVwjZ3HEc16LMyrby4Z73z83nT217vaHcCVM2A2Ehg9Lyq9KksfiwiSXgrCVKVhk",
  "key37": "2XKskZ6n3XLDBvk2qcbHFMjZ2BpvQNoYF8jMuhB7iarmwdJKWWmQw88fSNmEJijq4vn3J16tQF5huHB9L2Vbv4Bm",
  "key38": "2Q7gWX9SamCzjstrjr8BKDjWdrnoQciCFjETtsdN9LuryN4rD7TPVXpBFYrtY8ZUF94Dyhai9N4SVwHGnWLsanTY",
  "key39": "sfL2SqKon175mAhjDQUf61wN1NhYyDkUxxiH2p2EejPTExrFng7BexqcEZvaovnCF9rkAD1cE9uzps8jGNi729o",
  "key40": "4nPTM3KCwrV7633LuhojR3uNWDMJjJENH5WzA6z4qke17j7sKf1KbU3PmhRDNPNMUySMS38xz4eJ31xKKgD3NTY5",
  "key41": "2AXqPWgXiSjoVAYjycdhZhEmQCfSEytgvXsCiRjfy1ZA5RhN5sAQrocbXghJZCF6JovJwTy2Adyhj4ErbFToDFj5"
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
