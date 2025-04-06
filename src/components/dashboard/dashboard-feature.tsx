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
    "4h6ha1gnppzNPMwdnevUC8YqAe6QiSu11hRV1hG8v5QCMM6KTo15Fs4XAF2hT2iTLWsTGSFYW2Lz9RtNNeqoqWKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mJTWqVbTYHocE545wEdXiykC3Xv74uq3Uw6Zk552LNditPYjKUoCsjYH6H4MdzCUckwXabf34jN7iHEaqRKUpk4",
  "key1": "wc5nbcUwmhw6oKofmTN4hAtqkcunTndkNRvo5eRYSYf2iAus8dyq9F3DojF62iiAz3H31Ha9VNbRtcsTwEfsbQf",
  "key2": "ZvquXTLaPwuMaYUjrzcpuPCHWJfNs9uPzTFD5xvjpemCwyx2P2oiGtnsQkkncVr7cq4dd4GCLjtjvWgWgxKrJ4Y",
  "key3": "51Wo28qJHWYCAsbMg1jcbfZ4AanypwfcDPyZYmmaBfgqp5M5vyD3yErj3iHFtdPnVHjXAb9Q5xhd9pTe9XF4MCwY",
  "key4": "5wiwdBu8zWZJ9bhKLgxHoDB2Jq4DVrGb1Yahzkyn9h7X67M5aAhucGn9Yo58EWMiYVU4qLik6BdCWCgvDQJjKgBc",
  "key5": "42Y1fmKeCih2ThihdcyM2sSFCVafCxJ3HR9JN1bcQhcvysC8jgGPrkA3s1vHLQM2acnQtmhfBcicD15xc15miHr8",
  "key6": "3AJcZCiXTwahPgKK4ZpArmdkGpqg8SqFJLTku2DTRPjNDzzm88tHmGAZATYErCuFffL1CRuefhrVGd3STdmLiXqq",
  "key7": "Wt8K3fYcbxSSRbr4FaT7D6KqWbaJ4X2qoN4WPwA8Ko7sHCKi9ANhRyHpt6RNy2fD1idqaEyasca12RsqgrrpMCp",
  "key8": "2KmDWEGJAPuNiuHJ6wkP2xuUgUfBVs271MyTg1LPQevYVDariqptSgYc8NAAwzqEUB88iExVfuL1AV4utjcU3iY",
  "key9": "4RP74BZdaN5aPWSAm4Z1gVup1928FNMuybLrbYJNuMbPUaTzzChgm4jXsuw7FSgVEMeYzbSV5oUR4zo6M2JvEL3N",
  "key10": "4uZikA3dShgXNSbFQbQZvvqtnbi6aGL9X1pJmpJpKhCoQZdvWhqBtL8fKd6YRayoPVcVzsXWUnBqccoGU5VM8n7C",
  "key11": "2ukgd3Y597WkyPEUtMvQ1VPv9HAxqu8uRhKBLD5rgwRzfbgAMikrjNLbxh2NKC5xriDpLLBbZXV1TfZJgLgJD8r2",
  "key12": "Xr1JyqbLWPMY9brAgJEduEKNLHU8c6A8wWpGjgmt4YDWdo4CwoGSWJ7rfEvyr9qP5QgnrEFqRnZqWYpsHztR9Ku",
  "key13": "5i1SaRA36Xmm8AySBCUWQQx5u6EtJhHsSxff65Bk7u6NjafXK6LZssUVnbxgsUrDhXttaJLtvdtJeB31pSqLutCo",
  "key14": "4GJniXYSeN251T64ASmPP32D3mpNV3dcAwz6T9rfZYv8ecVALps57kKhe2mQDwitwkU2m3gfnfqm6wCscX7GPZw9",
  "key15": "5PChKEFLLQthLLKXBgr28xSWp3r3oWYHoB1yvs8tgcn7WRusG9RnMozhDVt6MySWk19jwD4x8SrRNfNSs3grzDBD",
  "key16": "2ZMfF9RMgL88JNY4whjzYqK32QQ9Rz6bs1wMZeKsGVKVPPbf5ARaEAL1s6t4twySS8h6D8A7eBUwZhXiJ9igpkU",
  "key17": "4EWFDM717yjhoPTqM6ogobvULBzpHiJ97KT6CmqbMt8ry3SjcFbcoBeJ9gUJ7Dhieu25HxwvRW44sXYzeZaB5Jin",
  "key18": "4fhwryvf3HMGcpULJrhpuqH2yDKb271PizsKc7QaSLRzb9ZxrH9CAL5tjqwksS48DJbRKDkhmE51YStvXG2oPAYY",
  "key19": "wcCGPKYRmYF1Bett2PCwjGLFPmjm4RAC6oELkpqBC7zPzfemaXnCthVTxiojqkGnYPSxQrB8Hc6KTs6qaZLTNSu",
  "key20": "4fC5bD9YbHCHaBS3Fug9U8bvwqi3zngoN2hzVDW72bfvrNayRD92XzRNJJph3YYrEDPnQ1ZVKCgKMg5bLetKR5JC",
  "key21": "5pEDmB92Z14eARofHg3e8Vhmo7nZdvDkQg6sLHTUT57Mn2HypR75NA1cfYFdGd7Ev62mcB6tSm4XWJkYYk4nx7jD",
  "key22": "MVcCsuPXdVm526xQDSJtYPvs4DytbVH7bGKqWMeupTiciHUtkkNUUcyUdRcnvARCXrhkT6UxDhW2eSWRWjXAnCS",
  "key23": "C24a7V65zLEgFmxDjFtS3qsNEhL2skFcB25VzfvQhvCAUSE1As3FWqWDFjptw6UFL5gLRUQGLBkjWMeTKyhmgCa",
  "key24": "4hQ3RFJzuugW2nv5FQ3e54dc3vh1meBgK6o75AHPySzrNC5dhboSZT7kfcprVSPCawKswhafXRm3rwunWuhbircE",
  "key25": "4Ngzp78P7Wkk1b5wPbqPMEZ7CAxawthBHWjsPh8PZCEp2QDcgWnB9btM9iwremui27KKXiYotBJ2tdARVZdiQNQP",
  "key26": "bijogKbkxymgRq64FyG6GRALmhVCZLDCe9PWiRoW1h7fBNbcf6gCYWZT6bMinAkNceLC8tseJZWu9WDFLATM9Tq",
  "key27": "2yCRmZmwgBRdq1FkAi8ThJy8VKRmWt3PSApcTZAycQKVRwrQqmmUmKdPYnic4hUdmCnEPTcB4brdFahTxXHY8r3T",
  "key28": "57c7KtjAb3rMgmWB77i3eh6EPX9JsKBZi4EARL9xL4UXpjHNPjCXQLW97wF1JPycAvthMRED41oSM1e8Wu8RsGhB",
  "key29": "5a6zDiK7Li62wMMq8mJbeWQ2deJXLm7CXhvqqJ697CJnZb4JCkQTfi7bjCJYu69rkxsLJBMfGeQi35NoES1fZQv4",
  "key30": "2xiWReg7Jrv9TgJbBnLZnqFxJ7LvYSErUuiamhP2NbDSYrjNwZ2Wi5RapnUr8oJHJhnfg1q6LTAuBUMq5YeurYfe",
  "key31": "3t6vKPCxg22J55SCKtUogVgwGkhA2aGKFvqvDi4r8mgY2F1cWPnt6iQBW6syWHDSsXgr2wXsVuDbKNFc2Xkwa4d2",
  "key32": "4u77v42GTNGzgXXhGcUaGyzGWAJBGfpPNrUHARob7NVEa1rfyY7Xjx6aaomhDNXeTnvwdnx9rrNQ4Wyp4m8maEAX",
  "key33": "2BYrbkEMjfbQRB3Lq1jfpKMooZZX6K3e9nUNkVNJNdJN3qr5LPrLcKYLrezmHh4B9bP5AWnX6KTpiujmprXtfBEh",
  "key34": "2SVo7CgHnzZAdB4Ba3Samr7dVoTwTTEkjVvrD4aaZNRLJRyavStsvQwYpu8pYuYxdTRhiJwADJAY9s4DVu7uMTMK",
  "key35": "5bUuGdDxJ6FmQhPrQTRxgUqhi3iwGPZWendTMKW3A8jKAUPnZatbMbCLfV9Sfsx5dTBEn5Xy7gFzRGzXd755fwrk",
  "key36": "3J2i2dXSq4n5dWJxmD8YP9dWUPHtREaX5HAW8PunGnF6ZB9sVtFMpQZxC8B8Kc9wBWpaUaRE4Lqt6Zuo9Xcyh7QX",
  "key37": "2QhaamErrq8bJX7qVDQvhA3p4hCthRiYVziwYtFtNNnLgxi3pXQMEctDk3GGu6395ducKVVjH5nUdRisrnjzk1dz",
  "key38": "SaKXYQh3wHvTzxzQBgm28jcbNJqS1wRz4zdGvYZvixYHgaFnGPCB7S45JrJkSbLn6TGi5TS9HN5cyZmjMHXSFFo",
  "key39": "54skqferZyQx7eCRqFms5W8Bn8vkQjruzXtHNYboeRmaJ1Lx3eXvDTmBpbHEFga8WG26kdA7u8nJpi5gbNiL55im",
  "key40": "Y7z96CUxM8vy9NzzHdjdRifSiUWpjRREXfRGp2RnAeFugN7Ld7tkotgYgbPKiGmXP5MGKeuT5APdzMqknKFagJU",
  "key41": "3SbQ4A65ap2c8pAmrFATAAM8pwk4fQPsp9EpEEbaB9WMxCWjqPR7SPadfChhcP7zkuivjBUo4HL7yAQRQXWs54Yz",
  "key42": "32AL8TE6C2fhTHDM15MWSm2FeVdTWfC9LRFCnNktpnU7eawdLdxMwBuYdAogAGXyARNz1bSxBFG8M4A6D7Sc4eLo"
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
