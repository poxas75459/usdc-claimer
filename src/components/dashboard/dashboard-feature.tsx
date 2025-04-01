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
    "4m4mcd33MGhu7iMU4Xhid6ZiY7556Zhf2a5kLFErWgwF5HfMvSYwxvANnmnAayhH1SVAZm6maHuUW6r3CW5d8SPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gz8VNhDabfecG3Rj9urU6WTjzpNH5JTAjYhDdTwPXBzTMbwbQhZYKuo9Dj9gzgteHs8wqcKrqn9T8XoEH6EB2gQ",
  "key1": "3uh2VHfkkZVxUwP6AcsmU9czjH1efV7X4Zq1rHDR7JM8Q2YGpVG4kCCeWGjn8jFDqcMLdiAafPnCA1GhR8D9vA5Z",
  "key2": "4erjuAQiCjmaRHfhsXMeqG2tArH29MMRCyv3qu12qeMZhG7GSXB52WRRoczRxvGfbxn58xnnSmMuhk8Pc9HyAxam",
  "key3": "4KTdbSAN57KJ4Nkk7axgsLQRuQRCPUrzbrjessn4ATmBRYbhC6emZGNwdkRw8PhXy4ig7qzqsqDXrYVSuiH9TgZy",
  "key4": "5JjLPvJkwfx4LwxXpZ5BGVuwG4ReSwJiEKfRioVKaVUr2289CvPSVYGRkSY1qExfrwb6JPLAy34GWq73FkKEf985",
  "key5": "4oSMXU8yk7mDRswi1HMsvcDXGvA2Ycv4YUahXSycLE4CcooHuhXbQuC78cwS7j6mkdKizCsdg8N5tumFRi6ebmxz",
  "key6": "3bDkePfJXV49gKMqMjQWXxitSVNpgxcT2N2JdSp7L2v8w7CJakBmeDM2uM3xPeHLWWCCYxGkihFhSfCo8k9mXSd8",
  "key7": "3Ypz1ZMzsemgNt33suPScT4Zf8oSRAUB9xyd8R2sS2LnP1ovWhSzE63krLNYH2wp9wTmgSwSDyjp4EFsiWaRnoNc",
  "key8": "xLxJ4twSMrTW7qH8eGs4yFSoFqgN5mrnjVTSLATPQysAUAwjjN2L9Fwq9Je9PG6VdbLRUSnfXpMXDy8ZPLzAmq9",
  "key9": "5adXunCoc81KAfH1sWrUHhQQdv7AqqZ2L94cHFtTbdfi8WSocD9cNFwCT9APUzCGDE9nYCgvvx1igRwG3JVUsptG",
  "key10": "2jnySq1HSfsR4LZwyRfdZkN3AcV1c32a5si6Dkp7os48ZCNdYrU6vEjCXT4M9EZYYYnCidsFG51x6S1U57SpjMcg",
  "key11": "3QdhPm1QCE7GxZw7kdiR9cHCXNNCQMTq6RRCzNQDiRovD7apgttRz9EzPqjus65GWDTsEuizJb6owPtg9nAq9Nra",
  "key12": "5pqyDFSRnd18XyXeJTpxjMZqEh7FcR87y6UWjUTfCvFeYfhZjPxHcxkEEw4E8TksRz3UA9rTwwvqwJHpXpL8PMyN",
  "key13": "3A9kVtZDCFn8UgQrEbHsHiXgDh9GytXU8vCiaDBZpDnpC2Ufq8kMBf1aN7dkMmEWPxr4KXg8RzP9idMSXrHKQNaC",
  "key14": "4ZSymqTV65aC5c2pgr9uXp1p9F4j8E3tc4bhHbFY1jjB2WtiQ6om2W1vQjwB2NGpKS9FXDgHBtYJo4J4P4dBNC2M",
  "key15": "Mdn3rfrm5PNDakQuaYZypiLX3oHRVN7JNje7Ubt42z1vtqEyzRiEGh96UoAzCUoeyjgGbM6kT9jM6wo2nrfAaYC",
  "key16": "gZY1w68qXB7W156BYWkLcibdrWST6gMHYZ8i4Yr19BCb1YYq7nkhAdH7sCMMUCC75mLQr7mGyfDETnWkEEmmpAP",
  "key17": "44iBZHFYzVP2w2qXmmMdW1cHPbVaM7JhtVMFk1SHv8vPfiX7Wk4sBGATvB3yiZcL1X49kP7mkpXsBxxCfnxGff7z",
  "key18": "5R5QFT46qdkegELw3wY3UWE7ADx6GRSaG5WktEKT3zAuTAKKgygQpd8zDC1JFuZ9VmCf48CFi82HJeL7axgqMLxo",
  "key19": "3Bh747dadZBQDbxmSpJCHCWHoY9edKNw3tePoNDNE5zyBaVnDdCMcKniNCjHzHceehvHipyp3nis5A6unj48k8o3",
  "key20": "373zMWp6ThsdwnDBq6XCW1dfPhqG3zgRmVNkpk9f8xjJyit5NMd98vVa2M6dANDaazQE8e5Y5D45uiXRHgTyit1P",
  "key21": "2AJ28QKn3GuJrqzurZn9sY33CKHPyjUSHoafFE1PX5FW8vHjCzPuRy8cLsgzv521TKd8gEboE1U3ncVmdAZniSEh",
  "key22": "5fttXMJ4V7zftp42ivtcmDdDAEKPTnHs5WPFEEYMsiwvpHTf4aYcMJ4PLeQECq3jMueZ3EYvqM9P7iTJrhMjBaAG",
  "key23": "4yJ28JXBRXex8jb9TMdbiC5h1VE353FpQ4gUEtEfD5fgrLNom1p7gNjxXwBfnv1YCT5kEG7s6xYCgUxJ7TgZ1R74",
  "key24": "hTLtU2fabo5y9cYnZZS7yVxiChbbXBAzBwhZWbHh2AbwiPJyBpzqym7FMpVFNLEMs3QsSY5YHrKojpVuihpweCq",
  "key25": "4urK7XdzNpQQ3DefAQQNdC6Eaz9gVc4CAZWzBpQfrKgoxSvBetpVwU6vVmJvXyd3sr63VwtHXQJ4WDMpUPAMRRtR",
  "key26": "cK2w5iPPEsXbXaMiUHUFSC7cqhuekAqZdcn4oRF2FvsmZyamcq6zBUnnGDMLuVWYaWpRRiEgeNMtPLjVfA8VTmm",
  "key27": "63pktaGAKjo2CCqeMoEU9AGahUATT7gq5BM2HEiWGce5JfBi3wcXzy95YppFh5RpnX3tKLRk2GbFomnunNEDz1ir",
  "key28": "2AEyqVF9HubDnkBaVZutQnVajK1tCJnN8dpaT4dmdGktu2krfz3ecgfZ7sPMSABWtENcmELy86b5vSQcTZcpYEeB",
  "key29": "2v3WdRsWzYPweywvFiEiRUZqeXw7rSwwVkmWSDqij4go6u8uTxizdi8pEMzLDpyHBhdiu5Q8Q6zCLeWam7UAYKZf",
  "key30": "2oEuMZc3tGzjoRR12FX3EtuxtoWxHhYJ45P9dnCFs2uNzLi8h32Uasz1ey1kVfHtGPkLMP7dthsA6pTS9w8Yxn84",
  "key31": "3wi6rW577NPaXTmuWHBbiYpuPDoFtAuXs4j3aEp5dzUZnyb362CD3vpoEEw9iuLQ223AbmkCkLd6uaEnJQDokDHv",
  "key32": "2RjcbR8Tur82PZ9RZaCZQHJpnukvttWQfv4YtyuUUv4AMy86XVHLD1pchPBfzskW6aEPnj1AK5FiY18wJiquA7oW",
  "key33": "5zCBJWtRNrV9VRWjc39tjyDD7isteATxERGYX7qrJTEwV2uzhCtDVAjUnwef3ytaFeKU6XKsTp1Qy42U15TofM2v",
  "key34": "66FoSLiEj156ZzXCZfAGLnRS2pf9Rw2zmphQF3uhmFWRQCeXMo2CsKFZf3AFPVy6QhDY3qc75MmYQZw1eajXWyyg",
  "key35": "36gyoH9iApaiwwZus94x152KwkVzfn75N7jepGHwC5VDsqXps4fgakP9Zg6pQ87d3wVrgAVnTSZRZCyg73wDnJjL",
  "key36": "3dVHKCamoSMe2e99N9cKCwVrkuky3iYQ1G9aqeaXghdGvcDs2xcQ4RdoyoDCtaUbhqHkEaSkv8W3KfPeP6mscSHU",
  "key37": "4j75cHZbAio6EQJPkHxJxYPv6dTfGRmUWquFpqDYtYc86iuSHwqA3Lh9xXGev5rSwtVXa2Ab1BtjYgYoNo91rfxX",
  "key38": "3B2YMHuLzVhAWJL6QPwC2Wd9BP1LQDmawGp4GNwsijacgkUXx33mSi669VjAG2642KAfqKLkbFSY7bWUZusuzfiJ",
  "key39": "2YdNWtg4xdggMr439h1mHf79QE5xNM5wYzp8B2oS2b6e7syBTiyjUEBRykzq99BBd1G85m3yi35cdCbf2CJWLiGS",
  "key40": "4TpPYLPLiUApBR1KTSNiDZBGvme7b8KcnwCTrFk3AEw2pkijaVEqRR1V4MPGVg3iw135UVa1Ju8zihUTTEKKfuPQ",
  "key41": "2oyHrEfZTaokqQrkN6NHgggWvmpgiC2P1LatrjncUbEsCGC23HUd6ap5EFAi8EzDFmhNzevmjEWLT3ADLxnnbbPs",
  "key42": "iiMoiABqoeYWuBZVN4zBFmb2g36aWcUhVfVvAKSheqDaQQ5XyXu54DkMeruZLASsjMXJzmzfxKxVr6UKdDh32TX",
  "key43": "3Kk8n4nraKB7BxXbfkUqyKkmRzc88TXWCiGiHJmyDjnDdezbEqWYcLtPDSEzKxHYchKiCk5dcodtkHoXCUKGWeNk",
  "key44": "46jdi3kMj72Qo6qNeZ2FgihkwrrpG8eoaCzba34kCyPnAeGT33TaYsCbftPQCsbormSqobaLMjfZ8ESoSoUhcLWm",
  "key45": "34TJH1MGXVeTyFX1R2T2kdCThLmSuiGUZwzgvsPNcXjyV4rSZUgUXWYNQUjjVDM8BgLJdGjYPbqNhsuxqVPcBdYH"
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
