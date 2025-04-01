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
    "3epRy4jE4JV3nfWEzftEGitT8Qs4ea5XSAPcn1c8XnUnPrAaWabWxKm7niew1cSZ2BhLEbQmgXMNsojo9Qp9wz4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oEfdfpgqnPwx8dFpwaseK8hCZg33FhXc9nYRxdX1EvkSAABmmtBpftxp4afZhmLFQ26UNYnWigeWmTzR3SvnAPC",
  "key1": "2RpPtKgkwdYYyQMxXAVm4xJ1tWu49z71Rh9Z3KAEHCc1bhojC8uK6EnJDrxW67ersWBGRVprqTmA5T3K4au2Y6b8",
  "key2": "VEG2Djttvk1TtL5BJ85Lzcx28uPbeVa9DEqNRvzwYZYX6bVWapVGrpc2VdJxtchNBLisZn2vsTrPy4SJvKaFwvv",
  "key3": "5huEL3Pp2CA9CuzyDV2bh8Te1WhTPFfgBknYxxme613GtGKoy2xmKKB9VF2MHQMLbGEJAqev7jhEqnBnYn7T5aiy",
  "key4": "KsKXZ81t6Rv24fiNxjpcarsfrBx1KM5U9kEyG54FpwaLcZjHBLCL3tqNhhDLyiA1WhK1VjuVxhoDLwZNDs8azi4",
  "key5": "3MS5nZzM9eMCAPRcsVcVBEnzTfgvb5c91vAajqgCYqszKRYYkyccNtLgLTDAZWbSYA5SdEeR6J8ekKeNoB2jspaY",
  "key6": "3Qw1ANUnDP1z9EzkdK6zx7wKNhdUK4CDDsgPHGMzsdLw5PfAU9JZE7Lu45LRgyAELRHHiSx8PJJSCMbdDi31MpBJ",
  "key7": "2tdQ1t11Ms7c8PbvmkA714Sq9jFFJHSiCSjPkHhZUeSTrhDD2MAyyzvehnwapdsbW9GcGByZs8EgJ6CFPs6HEH43",
  "key8": "4p9zvQmtTjqYEMApkVFEYTdtFZgy57uSwscPDnQXFHDaiFNvrmjZVp5bUQX8eKgiGPWHvdWdXACAVcdUUhr785oX",
  "key9": "3U6LgWJ2WxUQ1xeHmakDiE6dWfBAMZiaURfLtpUPTkuzjdVd3jPKeBvesKoTHMeWvrtVWDff7S3wvBc2bbqcUAM1",
  "key10": "5ZNjXGrWEEG4kPDpSYT5PebLxGUZo94JMPuthGF9r9qfHDAgMj1ibcxMAqxPerX7p83LAA6oWVEndheSR4YhNrUc",
  "key11": "3KttDJJrB4Uo22bvX7A3DdfqwDyu7P8K53etJb84idE1M2Z5phVbMeaFLqW85A2jkkmwJseMZL7EomJzRdF1sf64",
  "key12": "4eRirWve5keQhWUz89f6M3i53jDNTGDYh2u6TTiAbGvw9a1sXdCDoWd7qQSnpbQ2vfuCU1rifZbfGQkdN1ATP36a",
  "key13": "3Sprz3YZ28QxSHv6SSAqGcpJVMH113Z5378TpgiSHZYAGQNzCGvLMmsFDALtA4w3XMnS1JYoXwfvfv1c9usuvZFw",
  "key14": "3vPTFqHK6qjfMUDdieBkfJEioG48RWM92gz9PZrG99KqLfrCm2k8PmG45LjvZ1rBFwiDNvLNTHaHanWqqMDCkBQ4",
  "key15": "bfgDCHZF1cTJgHTG4qTHRuadonoxA3VCxh7MrmSKAb2mYEKK3rkEuKzgXBydgbm8ExHp7Nchn4aHktVbgjk6UU8",
  "key16": "55f327QW5WLVDmV6yPZUimrhytua7HLy4HayE9dJZPxHDFfd6AMZhhCyEmQq6jhstcQZruaFWy8kitQtXS9DRDxJ",
  "key17": "5MnDvakXNoEMnv5gpXNXALnKFZj72EWHa8YoeNyf8LH7LMQcukipJJBRRwgcB44XDNGUyDA998iGE9gB5mz5PLqW",
  "key18": "3FY9pfPs6m9G5WT5Q4M7XkqHmEyzHMqBBG2jQ4j6cRhpuepbPN6zcprD7qqLkS5mmYahVBRDXGo8X9qyMTsVcwvJ",
  "key19": "3VpurHpTzeAjRnUTJRoMs3DjWtgruWqEAcQTdiRiQ27QYsc1DV7mEFDRASgn132GWvW3Mfwn2nhZNbZCBbkB5RqJ",
  "key20": "JU6SnWuxP6ztDhK5TicBKF8xLNkfpUQ4VyAeJYGMtFBMD2kWWkkKb4WXkVSYqAjHgSyt2FrkoQj8f4bpfPLbNoE",
  "key21": "PhHznEn4eQWLc6t3t3EgsMURhMwYhArn4FoRLFSVBcm4Z1k3uyTGoKUmDJcfMtjToa7BLndMv5wyqeLqEHepdNm",
  "key22": "3mKC9So9GfSFHis3vThkMxA5kbdY7Jz2Bwkbv5jt6TNvN9tEEbcyoq4CcXtSfkf1cY5ohaMuEYvrfGC9Xk2VLLa5",
  "key23": "3ynCZE7x5QRY7cWaTC846rnmGkXq9sX8vFa281WwZ7WxYGjiYhv3JSzXVVjV3n1F9JvjbDjadDDs93MZ6rspZagR",
  "key24": "4UqnsxW3cDTppuAKKbjymwjZdfoYcmEXiAyfd23peXJizoHyVkAofkngGnSnw9fpL3HZysPMHGAugQFRVv5n56t3",
  "key25": "3XsnDsaTFRtRYv6z255EFwcKLP5Q5Mo71G5NtmZ54hNrixyQJoK5hNgPvHzXeRjcNph5ssGgCHu1hKXbjAV7vEQF",
  "key26": "5MGr4Nr9YQvNbtQuJmgz94KjGyDVWg2jPCY8LMvxpCvFEd7bzggyszFx1zjGDUuMNz8jdMDUsJNBn13L56nxfGdz",
  "key27": "4mafrtXwACqHFGrhavpvDmzG7y2gCanEz5dfiVmwqHy3eXniyXsgWWyZdbuGJZfjsxnPz7RrPios9n6Qs47xtGYR",
  "key28": "3hvoEDQQZXDNhGVxyHDrpwd4p2ZtYo9G44ZktJe1DX5ffxboFca5Jhsy33WMqsfVz6wS23V7u24RJwkANGxAvyc2",
  "key29": "3Lqu4g3mPbeF3i1j5BkbeRRTH5TrWQw54piVJngdFJ7XEeJFxzjCidfX17tU6RapG9jJn35wgpaZRLkK3jtVyBAR",
  "key30": "2AQcsj3ppe7m2fxzym5Lq34Mrj7d8vmsHSjRzBibSwvXN4Rg39fz9xRvKmbJXTyDR33CkfbzSFmwf4k3cNUc7Qzs",
  "key31": "2hxTZSs246DPZLMBusPW6qv1mQFWsL2FkwQgErWbasAJivs7bUJ9Kxy2da99tSj35NPMSbfxGMqJcsonSZ5fKh6u",
  "key32": "VLt6qwMN8WudqTK1hFyxCjSrW9o1PBh5ZpLjgHWum5hMt3ZfrxvGv2sUJHRffMq3jTHNSrnUo7RBJM5ftfXLEU3",
  "key33": "2Nu2D79qq5XiebTJyN7bdkCoGXGk17LYQPoPJf6VCj5XxLZeJjUvWM9dgAeKdAsEe2ZPE9o837XdVMoFKdPTH7VY",
  "key34": "3d5sNtvxA2mREJmk2syUmCBkxREA8Wwvz4f7x7M5WW5MEkpwpwSszGKWo4og1n92ymxEt32BfcToJMbdf45gprhY",
  "key35": "54PCbZJcKy83ypKUc6EPd9dQFrHcztYMbuA1zZcw5Hy9ZnShZaVHQyrviUEjspa9ty77gKmdCPaHfNkzZNdypS2d",
  "key36": "6HqWeuDg5A5LwKJWB3931U7N2VK7u5iuRTvBB4pNURdhLHixbWNnmayp4PCUnmmX4Wb6grVuf3W9YMVCTcnfAPC",
  "key37": "4PCeVi9cBowCvb1aqasgkCT7N6FiQNR3eeKetHdommNVzJicwzxab7peMshQWc6Re3xCrzCTosJsUABsLYJVjehT",
  "key38": "3qRhP7iDp3pP9inECew58NywNwZRz6m9Rbs5dJauUGb5ih95Wbu5vxtmqwSHAn5JvD9oXwsJN7eay1gFbjmxN6K5",
  "key39": "2HTFfRXbeANT28iQVtwMUinE3YtCZDXGUNc54Ya9erErzpYEJvrN4As6RzU4K6VgyyZjsiRWxr8T97AxCp2ddadS",
  "key40": "5QMiJR6rRq7wfmxtUWGYWPGULJo74KCQV6aLzcSJ8Nfu5ECZfmLSuqXnmTRpshySfeXhkQPyFNvzGY3U8dp4LAnA",
  "key41": "2MDWBnbeMvoqYGGwhFBKeKwB2XTQ5GgNt51LZ72fFMprughhG3sBdpTRdm5T1v1J26bJfif9thgX5QFQ7ujF8qc4",
  "key42": "sJLESbSQbibxpMdQTESSmkXhMo1WWPLvJVRzbEb4XXU3KB8K3qHDzo2p3xHHbMdDXMMfkcrm7tQsR5R1qGBxk7Q",
  "key43": "vAcWLNnCyxf4cdXxKwsCtPLQ28qtVEabGL83apSPcon3dskHcbD2Y4VfYacNsQiXv3QcCJVeyNqVAQtPBKgK6XR",
  "key44": "5VTPNq1TPpavDemdQiynHxHedyt9vkgtYsBNGtPf4AMcg8yKHTZsRDRwdozLi85xx98E8Qt4jiVdXHuMdHLQhgfY",
  "key45": "2SyAYvnq86dicHBkWMzvieQaNrkUzARf5epukemWVZGsm8BEcJUzhWHuR2tQHLLi4JYBRoAa893UXKYRpecopZh2"
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
