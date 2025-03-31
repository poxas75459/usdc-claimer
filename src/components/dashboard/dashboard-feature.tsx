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
    "231GJ2i5pDjoHkHJERFDFc6Qjr4YQxD6ZNeXsT8KjkVtuNhMnn4Xjfg4keCgkFfW8chNVTYKFopRcGccxJYozStF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3czfxu968ZK1ces4PxhUAPJZCVP9puezcyaJS1F78oRiacUVD9AnLR73AyvdZg2ZHi5X4ytPKFLTBaCC9nbMnXqv",
  "key1": "hWRaQvrVB1CMGJL7yQwmReKJpEEdR379WuN7sUaMm59CAxzkH2QeRpnk9ppVxyjA3Cc5R4AkpUPqtMAx6ivWDJT",
  "key2": "4u11Vhp62aheKrsTW7b9RHCqKAAeFYjAWbdmUqbRdxjmaK4bg3rjQrj2xdAfbQ3jBMeXcUdDhzHSkgsP8MMhUrtm",
  "key3": "2meJQMPYaFxQ6QdMwhRYjZQB2ZUtecGNyja3sf5gLhujaFgqcj7RL3M39sMZ4kFbVwELvcHMzEoHmXTDDmokczQG",
  "key4": "3SJa4NZ7MrPoHRCKgTPkEE2JbR5aoN1eqSrwGa8v5P4wCqjoNeoLxVyWwVc9Pi6V64iFGqT9s3fauaJaPYTUmrZH",
  "key5": "2Frn34FYFtPKHBjhrHsFCD1F7kbbM3jmVezAwTwq6MhFwHNPXpAYPqfQnme3WES2G5coZtGaf8z49Z7728G9bLL2",
  "key6": "3C5rsCLUnZe2QVGNAom6wtG1vsKo438k3148rhH8rmQhDhxV1ByF2u3uRsTCTPS5umzjAmkrwk5RztEgzEG6B9Dg",
  "key7": "4pHPDxDqqThBeCRVuF8KtcCxTS116bG3mDehqF3CAKTmonhigG3RoNDfKJkh4oTFKnTL1RPuWZ8yiBPeH8Jf8Ky3",
  "key8": "3S8gxxYa7SK9CmFbeFm8a5CoKazXz3Qudu3aWijTTqzqmUQVPbirza4LBd65ojcyPMWa6MD8gZbAMveWH6H6jtNy",
  "key9": "4hS5Et3FtNU33Y8rBRZKrQcNpppJYpkVsQfXYzap36ioJvw15hxXTocDzQBnb4cbZuubxczKDPr3HQoqPwP8LJvq",
  "key10": "pF6LRkvjxHZHJjo84qDUsg7PFfq8WP1H3EbqLDN4McvUDEPcb5eDH5RZysJUcCmk8CwL1TZRGaK3J45cfZ1rw4T",
  "key11": "nqLCJhSqX6rUY9DJW2W94x2wXNJZPUdpmZz2j7746CpvSKttXD17MKJr9L1sNgzFrX9yABsgy6UVHRPvUNCV8yD",
  "key12": "5mrq2RrV7n6SGCcDDxaSeUyXvbCnVhXLcyHZJfvapeTypBbEmgknRf5kdwJperZjio6SzU2884288FgdAwCCa5Sj",
  "key13": "ZmHGa2XUkqQNjqagJrPqUyyxssVuu1gMVXp5VRFDFeexTqpdhdp11ep2tcpE7Xfk1vfomLRZrTX3dQnGFAMZM8i",
  "key14": "63ecq3xWnDhFpFdqUdA2xxQ7w2HB18ePb5C2qHDmAYYoZHBXMpzbciGSnu3HUHcqpXL2yG1UGiXBi4d5H5539x1T",
  "key15": "2dFCJADCXvVSntdiCUxKUk4eWMdZ2i8htcuDtxMoYfriJp7HWj5g9M4LARVDYQUoon1eKTQXrW1zwpLaFUqr22ut",
  "key16": "3uVM7Ja5SAXvFvMLXyY8NQ6Sh7hGzXKPwrk4LuEsozpNrShFKX2iBeFnSLVmTQTpFPj4XHQ78eH2wpujeqkPyMZm",
  "key17": "GCgaonKKx1HeQngGYuZQXbH4MyHwZ7jFaN4CuJUNQrFf4B8YMcYhc4Q2oFE3yJiSppboJ7JxkUuSuXRTxMnAyvg",
  "key18": "4wSfrhvVYRLAPHEdzVZau3gWVFVaYY15ye9spjb9kmacURLMtmJip3h9k4SQVZKhNZwWcXM4TjG2GFE2uiiAiUdC",
  "key19": "5v316XHMVsM7943W9pGHJfmfjGhDHubi1KPaYFWxA8wrfrjvV9y16bPzVQMtsbyxYFvzNPjHUEjjFn15sTkEmuHH",
  "key20": "3hYPbmwJiUCeWEPvnrkXW5HDmMgs4pBXGxo5Gg9BTFaU4K4xyctkTEpKw4Eu7knSvvhtCEoUaNyqVZWeYk9cBNhw",
  "key21": "3FAWSgopGQTJmJgUBLoXkkVdvGKmHTLeHuuyjQqpUczjJbfHwKUdE5LJ2P1FRURi7QJRi61MEHzqSEaatNVC2thJ",
  "key22": "3dU1kPs1HZJSCQT2QbdgGcdPYdpzVkXSZszpgjwBpdg4iRQBo9wE94UQLjFDpg81hVcBk5fUHMex3NTfYgCpmmyY",
  "key23": "31sQygW1BnKWh2D4FhWCDewhPVA8LQA3wUAruS2byzyX13MpBzrh197ykEUz6YR8uNDcqGQxbmt23CipQtF3siap",
  "key24": "4MT3Tf6XEwWpX4pffwjTWxQfFqQXTwMz6mVJsN3V5QMekoh4GRSMLZXshvLNuYzbc2TbFKKaraVy6NjE7YUZ2ei9",
  "key25": "3v5RwkaJGnSE4Y2A9PzEYxnabHNVp4JSdeFyaMh9ue1fYb4nggwkQ6QZxFjSxdtRexhCWc5MouzVzy981TgyrXee",
  "key26": "nYWSpd28dMTvzMzSqwjTeCQX7RevVU1DrVuRAnBzNt6sNTAcYonJGjVtL4zypiggTJFRq1iRRjbEyrF9rro9uJg",
  "key27": "64nLh4y19kiEgXRJrM7nBkDpB8xUzNASseYdg3Lr23tgyy6doRkfqHCCa3dKyx91wEXqmGqmhB2FccRsniVnozQL",
  "key28": "2sSB2NL6uhVjjt3yCUNWxh56s9ZgSz5KCb2xidiLCYpfG1QVrSFR4FgRhyb91YCb4H1XgLnQR7kWnco99LtpmFfW",
  "key29": "wZR6RrDPVzZyojAJHGwBmg85BZuw5SxY4VMWcVrwDnYHitxm54wt19N2tHqWtyEyJMCAnVv9rCB5EFnmzJ93ngD",
  "key30": "66AeVUthikADRcv79JirT4LjhnBc8WiRLYTu8ze7VjiUqKkHaDs9SYZk6MgNYcsXqzAG1RD3n9ik9DXJK5Wib7MU",
  "key31": "2E94eux1ZWCGXQfXjsjzTvgw9a7G7BiC1oACcDzQGBjExYNoJURiVvBibtXj92Asi5ojuckqb3A8qNVbahEpuvPx",
  "key32": "yf3Sejg4vivU8ct3LBvN2DCErYSDRoV7sciWZ6u8R7MgNbLG2wMEbr936EnuE8muXBRUjTh9vRFpbvRX5fJ1qHi",
  "key33": "1ZyWY5nCgtmcByyGiJSV6NSsmePqT8D9HqsjgxycD9npBfJNErBnidHbyXE1H2Nirk3ixxVYXWjUiAk7UaxkTrG",
  "key34": "5ipHViyHQimuDuLHyhn9gdNFW1QGGM8gza2vvVf5vbYNLkRCBDfxYgNgqVCxtEK3W7Q4chH6E6EUPwFg5euhTMMA",
  "key35": "4nscLgmckEhV9yV4RNHMgoX3jujQKXv6gR9g3vGVkLXw676dPhVPmWao1iMqnis7biSBQwaR1sPREjDM8CYeXovk",
  "key36": "mNesPjSmzjp9fDpY2qiGNdQ46e4Fo6qebQNRj8ZdHFWBo1FKwYH5aog7x6ERuB1qgBsvUUrTTBn4jM32knfMXX3",
  "key37": "64FwWnSXn1wSzzfa4qfGWGWf5AM8J6WRWgw7i2UBW9rW1kyHVDFM7juZpu6zkJFvt7wDbii8PZJFB2QxKouszNRL",
  "key38": "365HdLXDXxgMQuMGmvH58huYqL7Sk38EZrGSrknTZoeUQG3t9QoCfp9EPa1ikz9fC2U4Qx71QkaigLycDYniWQjY",
  "key39": "L6UKJu84mKuCV8VeAbXNXMmz5UBevhGdD5NDoCG9y1EkHtAUQCrUX5bYAaf5ssxV9mpP1FNuhwXQa63dTehRwBT",
  "key40": "3Ab2i7CaCFCoqocTq3pJ5Wx8FEYiNYC5JKdqMhbLXDeM6ESu111iuryWwzNqvMDFdw2UfzT1PNMUSPkRDL8Zhdam"
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
