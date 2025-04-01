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
    "61wyi7KNEJqG1VGig6sfcTSFbWqwaJ8ezi6FbUQ6uAP337rnAk1YcDY2tBtEW5PXB4baKwUJMg4RsPJfEAgtxjtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HfW6KPEkaCCcV8R1fAYi1qhSJsYrD5HjwAfaYBky2tKsJvQbyc9Rq4WoWGF5kZb7Q1f7JwtKUtRNfh9ojRTFtKC",
  "key1": "5co9JJ3xMNaATTNrsWdZYscZxoqPP2yyTRDRHauQsEG4ZYsqrurj6Ygpi2iW3NzX2NJFQpLBxntnXXAmeeUkXCu8",
  "key2": "4LsjmbeQAMCwZKqLQFki4CKFJEhzX2C9F2nw7HEG28qmffVLHV1ncNicF4VwQYy77DHewxkxSnHQE8tZMMCfovmd",
  "key3": "4J7EQ2A8XtoGyZZDjH9qJZs7THLjNwQmSRJcNUwJLuNw6mU7gB9KM6MybwRnXUF5eHQxv8Tet9XdL4pXgnpWnhfY",
  "key4": "SDKHmhBPEVNqzNevbntGtVcsZgTqwSScrQFYGg3w88ddkAGBHdiV8PP2TQ5D4CnERLWy6zdDJs6X4CPrA1JCpeV",
  "key5": "48rrCGJFVarqpjmuNoeT2yDndYyVXcuMeuUqEazNPNTcGib4YGbhDkZxegKKbe9eemLXMhe1D9Math2XM5TYugWQ",
  "key6": "4i2DQBXTQfc2BK7S48vem29R4vDPugMRLk8EbCqJQrT5LWYSpuvWSHsVDT2zAeoTqkbQxZvj2N4ySyWnxEU3sJYx",
  "key7": "2TE59iHdN2uy2gvPDaTSJghufQmpDp4oQ8Zxyx7va4ZQmksoqR1AMWXE69CeJhm3QciP2A6JkxVX9WUjo3qEdp2r",
  "key8": "LLLJU35AybaFtuf99RcHG6wNqiHNqmBSn8nYsArbcv72mvJKabgfoW2VDiBGKe2xJYSeShpJn6df8SwXje7WRy5",
  "key9": "4iR1HL7P2LAJmzH22Y5Qsmiqwf9hm9EFjFraJGoWwTKTBhJPXs6yqHRUsWmesG7ZhxnXFnTeEx9mdvX9oKxmydN6",
  "key10": "2oDC7vEjfqGPKX6MmEtgKK8rYnmd7qhvaycwngtQNK5MPTQD4tdNkQmKjxwwmkgmanWwBRGKLHogPvMzFMZ2zEVJ",
  "key11": "2GqaDMuBYaJ92T27oKfYMtutMKurz6wJtnAVCzjBi1VP93o3SyZK6JF4oAoWzi4Hdfbr15QoF2U6Wy6u6nG3T9kZ",
  "key12": "3Pa5CPJqkfm1rDYDnDFXCcgG6Pj2Ph78wpebYkNHKBDAJ4g9cZeX8qS5wajHMTpSy38zhMaVmid6DuXuYGE2T6Qi",
  "key13": "4qhkmSYyvoX5miE7JiMMyCLRqrzcFJTWdKpRvhpqSvpdyAHFSapciqtxRjZ8RBtbDqPJUxsm4KvsZ9Xf1Tr5zHCS",
  "key14": "XJniYgrQzv7BY85yMVdn7QVK47WEuQbxa3U48RYQ6grwUXRCgVqQ2oC3RCYfufFxUMe7nhFoCnZh5XWGR8q8tAk",
  "key15": "2QDL4z4vsfVhZQxkwqeLikVmXxJJqHQoNtbgNyNPLRtc9wyj4PcYrE8DDYA9Gxd5BhWN65ZXt3x5yQ7N3Gw5mL1S",
  "key16": "Rjvke42LxPxkBwt341A9umAEG1qnz2PgMgyfbdsMkhY6t6wEFvSUctko644VmSLKHxF8w2hbsMbRjyof6TQGXVT",
  "key17": "3cUavwNv6BZ51nzi66RWmzSrWchZTeY245VXm53KgEX3Mf7TNxJ9vYVtHnCeb1qUYjm4vPiLzvt95A2NdQQaD8gM",
  "key18": "3TyEL2gGdUo4Q9pUzs5ZksMaapPmk3ZXpDXz5vsWvBsQC3pbBaiy7gkxemARfX8UhAuHKWkt2efQDHkNUwu8QWFm",
  "key19": "4M3vbFKsHNBCUZqBibyEuwSVkA5ZiYqinpJfMo5ZooKQoSkuwFxMoaGjMK6LHZo1fk5Lw8CsXDYjW3jCosPtbhmi",
  "key20": "4Tfvv7zYz3GZxDwGpC6FQxW6WtniyJhNBhVDz5JeGT1SGnNsDpE7qh1SpJcFZayz65wbmckqwTGkj2J3W1ujo5s2",
  "key21": "3kMKYV6vensXqTTuqVLmuNMyzNdSN5xj6JBdSSPmsfggt2Fcg3s5T9YJ3KvQVfh7QjBi2U2QCMzgqwt81SJtdNVo",
  "key22": "4z6csS3rvdsC8SLRrnhMDsTBP4NhyQ41QyWpEo1YRyoD1A9rkN8aJ9S73sJTHKx8Z7RmYoz3Q6UCmegALoyg8jSX",
  "key23": "222MioQ2g5D9tMXoZUXN1zzavMHnq3C2tkZgQikcEz9CYXDaikJomKjqq5zgmVE5dV9BMTkZtW1YhABMkH5GjPca",
  "key24": "3XbGmrgRS7TsifsbNhNKYRwioRLvaXSSsR5ucn8cn8DRDEpeyrrUNzov3SysUrRiLDjfisTbadBdTZWNEwHn9XJz",
  "key25": "2j8qCTaw6pGoFZ8dzQtKVySrVPNQc8EoNaV9eggG5JwPFMEDSzAy5Vjuaw2bNEJ4mbgtH1yCk5NRrZXWzgfaMjAv",
  "key26": "3iFfSrxPM1N2sBi6puFcFHQTzMEMrTn7VgFQprgZoZ65ETKV2836NqwuFJ7PPL3CECfJrReexUmmeDpt3dTg3YQs",
  "key27": "4AvwYsvmW29CCpFLPpPwF4WMNVp9X5Nj7TeLwwQjNRdyuH9WFS4hCM76AYBRPBChMz5Cu4sLjcAcS4A6sjgX1ST9",
  "key28": "37WV7feVMTvzmFTTtF1xco8J9ZP9ahCG6hLhFA8AqbfGosmUj2g6AYdPAxLc4ZaymQzMjUMDsErMr4FYZSeRWX6L",
  "key29": "4bfjcX4TX7QrigV2K6MGP981D4UARtq8pTaEg6ENuQcUX4bmYHx1tVUFPRinNjWceA4ziXuKjRLr3SMVfy6VRNut",
  "key30": "45uxgVtQ6QWSpU19b4eiwsK65qSpL65ZRud3rSRzeurMWNMsxueENZ8JSuMvr6h83vk7oD7JwNxqnFp6Ye4KrbBt",
  "key31": "5TJc4rVjS6RDgTh3uAnJKsgrH7Fcykteaz6X72nT4ghx1u7uAcvuiMxg9yV9Zhsy8D6GCZfFraYQYEAp5szCCZFe",
  "key32": "2CQvKWMqWYzEPfSErJswGfnDnSeb1yeoBnJLi859ENJ3ds1QQEJGiCQUu9auFkkiKX7kdBsSoQdd9YFoWQZRAuaW",
  "key33": "5SAvzakDRdDN8dosEYp5ivKbbPhSV9dC68pv68jd2apaR8LN3jnXmYgDWTSxx4pwK8JLKgARj6i2gRt1dFqMMP63",
  "key34": "46vod3TkSzi1goMY1hqNi3mHFfrhTvyVVUdGzrvQ8KSKAYBFJxDMj1sJUtWwo5tAKxoNAG5G4xPjpaaLpTz28xV",
  "key35": "21JwtSxeAkXbf75cdG66nuZ8QMbjAHBPxckMVS3GMT8J6TFjG4spmJvkaTWCKoz1NuxWNaR147yNRxQDHe4nFEYp",
  "key36": "cTnceL18ngar3X1SGUQsBYP4S5hbJF4PsuFzz99u2DPJ5xQr1YfBFQjttmhhy2j4A68wtNWiXPUXe42qd7uUP8Q",
  "key37": "aesWHG323UKXzeQygqprXvPNteEGLfKUNVuzvD5bhq7GMWfcTUjtb5JK6pKHcRJxYdekbAqENad21GowQe33CLp",
  "key38": "vcUHeob22QgFbdfByd1rVFKQsNVdpEoaYyRZ7e5jsNV1udJvwEhG87H8DQZxKMMRp65HtSpfGnzUaB6XQp2ox3D",
  "key39": "mNZ9MPVDwmWnwQ3ma5JmcEzkdiSGeLRqXDMVfh8yLEumtPJFd6mu9UfYoiHXRDnMnxJhUzzgaPSR2pPFLogKrjw",
  "key40": "4cMEom4bXaAwHePJzXyThdcY8C62i3oZGfFeGJNGAqVm7s8ifiWksbcunWDv5yTNmZCPtbZYXTpVLbkuESGUjSE",
  "key41": "63ymDjiq7H1LSbX1TqR3fSpkHSgrynmdFVKCU9aKpXx3pAXYWSUPN7nYnrkpVXGFK1Yes8fVZYca9b5ks5auc1wP",
  "key42": "jSp3ACmc8sACeANqrZ93GLQSX1z3sRtB8D83KLcLyUUTFGE7EwuvUeLm9g63CYHtdUGJpTB7VN9BRrQeR9Pf2Jc",
  "key43": "2oV5PrznozFKEBUcCxYoiXApdYhP2BKRxpsXneb4JzMLk9e2sg6e2gSaWi9s5Y66wagNoD3N1rpM4VHbEzB2My7L"
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
