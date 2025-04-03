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
    "4GAUj7VC5xNWxQrhmkL61WCP7cx5ZX64FfwrjHzCZBWTGuJd1JnVS3xRoygiwh8tVUkYXYMLMnVxdSbrtqZZ6WxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47BoDD4i8bamfvS4t9YfsmxMn29oYEooVS2DzfuEE92n49bX8AjyQPbCV1m3gQfsjnz2f2BQQHftfSfFW8t2SmtF",
  "key1": "spaJ4G5VjNG6gbAHtV8KCX3JpVgwahrLCdeD9eYV7RU9jbZ5eBhH5AFcyZxJEGsM9N9byif2u4se7s546Fw9ZFJ",
  "key2": "3qLhdWXQVwkAvFuxguL8TAxsSpEkoLBhX6KCJF6YzQUAac4pFdk8hxup1gvAXcCWacB3KEZuPxKUeGkeE38HkWfj",
  "key3": "34ibyMHrkBP5xDRpyHwH1UpWAgb9eLu8fGSaigazpN3YpQzf7ZuzBvrZHhLujvrcnzFEma6fd187zFvQJQ5TTnxE",
  "key4": "45xNdhEXuTsdLTxYradSd7SDgRx1yQf6HbsDCCaRe1nE7WPzV7pbarKbPoa5PZAURHD7k7TCD4hSJLhH71bUG3j8",
  "key5": "3WAhfCrgJW25EmQtpVJcL5wLnguRreLVcAbcWC8rM3GSi2Lhg5pAtbna9mzsWHLpJr2mfbWY5BedbQQg4wtDUSUz",
  "key6": "4fKnvZLMn7fJgXDMzfvSyBvGraE29x27jaMn1zjXWRTLH9HEZhBFs8j3fQi1FLkAg6gtE3tokxqFfTXaFKsDBQdo",
  "key7": "2VAGXvsPtMtmb3mMWzsfEocBk6M1ArWBFVKeZs4jjpGXmax1GMzyWkmJQRK9PNtm7HuhBcnib4CBfFdDn8CFVJXw",
  "key8": "2ovaTbx7G4jmnxVVfxz1Z1rUXAT63AFr8zMBBeVWT2Zih3phfdP5yTRNTwzxoMznc6Y4myJ9CQjYjFnTHZ6vGGA2",
  "key9": "4d8PvZ7EcqAArDZ6PMHAgspzhozGTqcqYbZLzYG9dk4z3S6QrU79P2Fu3uqRUP2VvuDQk9Upyov9TBHtsecbvmEb",
  "key10": "4GbeJD3c9NyB299XY581KvjciLnFS1MfGxdP3R92hEbds5Rz5VKz81bN6gSHQvxbGwre7ikBMxFNwVwojGWzqZGA",
  "key11": "3XgRNsrvoxGY96K9MtppP3txrnKegZBvsuT329zHRR9gob1WtFtnAJS3vwiZsxWGwB2t5PrPa3zpgmnzNLiQpRvX",
  "key12": "3EABH8EWyNC7GE444pLu6VodUmsZ3jqhDBqcfFAV7rWAVWncPdLJWyQGLC5xgi2EHiFNdJcH6oNbDg7uwB3WQsrG",
  "key13": "3dPeKqup1E6TbnukBH5C6Y6buoULJas4mMjtSSXHxd27HWeN3fae888votdNc7i321WEW6JCxDE5hDAemzYBWoye",
  "key14": "26AsmW9aeTMVk1FnSa23E3enYTeQbPB5BAVXZL9FZh7fK4updRrbqpW4GjVtAoJ36piFnHDox2idJWedzNNoLPf2",
  "key15": "52LJfLwDrevUvGewHEXn3e3tAfx6k2i5i955i4piXRn5jbsTJ9tu3TtvVKRCC4SsxeSwvXXnC5gHkVHAGRVM5x9b",
  "key16": "39jAYdU4VQQFqAgd61vxeZqt1YXgucedFgKAd5GG1XiV4i1WgjDXfsiTQuZnqAv5cWSQmczc3F6BtWWt3HQDAnQX",
  "key17": "3RZijCQyuABiA4xB2uLwRq3CNxgfZtWCo9Y3GKt1e6WJfZUUkGLVhLhUxb3JMwpoRuTyN1GhSjUihwPDeeokEB8b",
  "key18": "4x9AFBbGT7yWKoJVMjk9EwNMyoCnwyrPSzoxGKNm5pE5a2muCbesR5NhHaedqRMaJEjnNWUuUhbURfZqYn1U2r22",
  "key19": "kbbsTCA6CtFF75BCtccbbpwVTBk96GhFRTFxtuMS6ebuZ3DrSzL8KuVY8iNKE6Hv1pvawwyoa14HT1X8arwsjLb",
  "key20": "4uSJb8JpMU1vYu4TG5BDrq66ihPj5ath5ykfcjk6eJw2hCA85kvkvGbP2kMa1YasfzpbNPnUcvu5SZH747pVuehR",
  "key21": "57ZC7i5zGADyd3K28SV16jxXyAvmQQpzvLbqsxdCePHQZfPr8HRrMgW9Ac1sTftdikNLBABrFtReBr5i4XRFpDnW",
  "key22": "yfdksLGk6MAnzmYFNMVBjFVYNz6T88cCcPWsw7mAGzWvaGH3694FQwuuGMgGtQ9R3Yc1fdGgmRZgG6kuEuzAi6e",
  "key23": "4mj2n4QPqLi9PbMiyEfymmLGVuWiB2CBNyPsMKJoKmpBKPhHMJNd83cqFV7ScwPEcsVa53w8ewXLE3kEcLCGijMT",
  "key24": "4sUTh9E5VSXoikYFKTcRuk5BMg7vwp5cYyPrxd3as7rqZtopGow5ZLdn4hdTej7YiX6po3kVm9RPTj1WayYTF2T7",
  "key25": "2Q7Zi63hthxnTdx9aJs3Qk2WcLqeR7hRKsS8BSVNvwCMJSbq3BDGnLfuYKbJtj862e3GgK2DkaAHqoK5vdLMgFQp",
  "key26": "3uR4cr91sS5Zm39DqfY2FiWBKB5SZ2B5dC3FMk75JVhunaPEvfAiRsVRXMqqKmVcucBFcJfgcQp8fM3HJon7Kvjb",
  "key27": "3AJoxo1qcS3xKJz7ykz1ZcxYM6G8XgFW9z6YV1JBhHfdAFvjLdnm3Yisgm8WD2KSYqGDVQNtEGKgEtMojnGPWZR2",
  "key28": "64ucPn4c1ECLk533UgebKefznGwpoa4rS7EgehT4EB19okf7KW35E54W41mYWBkRW3D6fXSAi53eSERrzZvjMeqA",
  "key29": "46yeP7ezPsZgsVLzCnJv22WcGw4otoZeu8dA3iXUH7TLyGbfLCarWEwG66KJ2mydcAKUeQ9rrETm9hUGpfw7toyv",
  "key30": "3XaQWc6CZpVvQS98fV7zJkEMY251HgdJPbQY31HjSwUswBo87SMQyf7egeF7RWJxkhTTuQbjxEpyksC3s1ppyoAw",
  "key31": "49ACJAQVUYNSAi4WgmRKmy4zFKRsansvLCggsPD7UhvMzibtp9EVGGUZKhucWWnrncMX7K1ZrCRNrgtixmvVyNCn",
  "key32": "3aJmUUxLraECNe7qosanMkcuYPKgujLnhtmXFDsLhz8MjY7uYn4EkXqDK3ufea5fGFYR5ov2h4PhtKH7rsfTLd2a",
  "key33": "h4Bcm85g6b4gjsgujq1enGhzLXDtKiv14aaEyA1F1XA8a5P8NAwzzFDxwbzxbQKfUBsaffQpogTGT47LBHbovZs",
  "key34": "5uh7xWboXuwxw4Pi2ut9FLk7gYasPwxtRtmTZ36ZZz8ePvmwgSMGUBQJ7S7cQToKkyd43QCSGMNPfdRnHmoPzWpM",
  "key35": "52ceZPDZcMGpFm5bvf3ruZ5UvadthWkSdNVE2J4ioAC1PuxD7CWD8p6WGTAYbc3WoSftauvQtLDquC1qXwbtzY4P"
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
