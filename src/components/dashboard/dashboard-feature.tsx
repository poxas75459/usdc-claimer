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
    "2zuXCEn2qFsbcd5zrBv5fFbCAd1xowthQ1UvFg6VQGKGsTk6LtXCM8YMaj7frTJZTcTNmzYr2JxPyKrEMicWwAXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hUv18i2a4TfaBgxD9NvjgvFqcCBc184CzVBb5zhiGyZTBvVtPdgLoCB1rqAsYjacgBcHCK2Hwg6GkitDcrH43Ee",
  "key1": "oMqFhkg2d7WS1SL6y44vXehrDzGrWc29ZRAJ9mXz6fGwo1HMn9pNh3ADrSXzmqnERCN5Hc3XC3hsrdPH9Nu4Rov",
  "key2": "6W1kc4H7ZZcCbKyxjj4cxhx2icbpyzPHrzbYmwd6ZxfBVEyCmL9Yj4gTbxAmyi4MM3dtToqPWqu9rAPTzcoxL2s",
  "key3": "4w8kEBcymv9GiBZ7ZFPmMFJNrxtpDsa1QnHBv8MT1q6cxfto8kgfbiynip9sYsU8LsouCeYjf6vS3M9YzSuo3H4M",
  "key4": "5LkLJH9VBd5ckWGJGsHskkameSwvtw4SnFF5Y7y8E7RAhRQmjtgf5CgTrffjX1cKzRYs4veFnrEEdEdpzXXdbrhq",
  "key5": "nETGNzmLfUaYZmMhzbE6ZbYYBMf3C2ejh5ohZ7HmqqrcAXHU9ASXQfoU4vbWTZFKngwKpN8w8aJMVRiGe6hBpVF",
  "key6": "3TzxWrmfyuzgvMm3ZjE3iHq4Ys1mZq1vz5veUJc9t7e1CabkmSnjkADzzec9pTWntf3BSDwVZ4Vg1z63WjwwzzrG",
  "key7": "4ZgHSCUNkZCpMhD7kmkPbtKvdGn2fNivvZuf8tVFqmZNZKAJZkwHRWKMZnsbVwv9JoL2jwt8NBRFeqBdimNa6PN6",
  "key8": "616LgR2jEgXUbpNksqb4Sq1tL8pbCnBRAvgAGsLi1NbFQr4NRtNt6N9t2hxRqHfssKcTvdt5UfRZpuVVtRa1YbkH",
  "key9": "2zzocEqVBveQAzMeWRge4LJheW3nH5pjN5g2iMAzRbko8A7uuxUJVNj3ZK8xuRN9zo6NtHUMYQo9cF8yi9wvG1CW",
  "key10": "4wryM4ooqYNjMX9Nz4T5RCmGu8KvpEoam2A61h5p8e5JpFfR4y7bwXEMGbmtx5H5VNHRFzK3EcVAP2Th2yobRyoJ",
  "key11": "2Zj5h2YwSvjh4fjDikapZrgzBvGYc6M7LH8fHBerketvSRWu3ZKh2bZNwyw6xXNasHhFNsmsMuFz81MuTPaApM2t",
  "key12": "3p7TaUCpwBQXNCKtQ5uZryX12jC13yRXErU2DwLHjmgxD4jNu3RSUHC7TAbwHeBPB18pkGtcd9h11gjUysEDrgop",
  "key13": "5gWeU8dEyi9gJnsMsVRM3pLRaTB7gakq17jcv3xSMc1ow62dxQVhXMyts6dRKnWjoJqci6W71f7psKsPZUmYToXZ",
  "key14": "2y7uZZQtuEyFHLkWWDBLQq2v69bxWM5ztGZx8PbVpHLqU7GX6jX3tSSxt52k4TwKFz4ww8xG1jVdPsPAdErw9qd4",
  "key15": "4YhisLNAxfKvUA4mC1mv5W5FcERWYFPhu5RSrStz3C6NeMeGZdxXkiKofJwmLavJG7egmZGG9f7CiiQVxDgQrz7M",
  "key16": "5tnM8FLqKuWeMrKoT2Tvr9oQxbqKWijkJHBsgvCdnx96oMvMRbZFoxPsNboqZz9x6L2Hzdm6wmNRDYSWSjdhZWcC",
  "key17": "21myKfuQvVPobcfz4gmF7iobfoeZ7fMXTXqF2P7QNnYQTJHiDJBZDkXbuPLuZzWU9Av17R5csxSpneCNS6a67dKU",
  "key18": "34ak5eM1f2gUntNrCzGankZCCo3W5CC49LBPASm8cLT1bE4jYXWu4fy6Veve4vANTktC3jVboz87NESt8qUyCCrs",
  "key19": "5CCkCqM3HfPfMatHzm4EWW1wDBoSCDmQrEWhgxVYK3uWAotoFV31i7kJPR16YT7zGHc5ZFzGb26bzyi5hojRi1q1",
  "key20": "sPFHXgdCfkGWEAtw3hYN8Ustp5wifyyUuboooNUmoVLzF2Q5nZ7KA8HXDtnDKtQDT4QLoq3eucRpZpATzdDQtFD",
  "key21": "3nL9D9r22shgM6CUHQmhBQC7XsQYB3shoKruNbvRGCxxTpmzdBJiYmekwuU1gL5c7crTguc6KqH3udwvLKKXR7bc",
  "key22": "uSfGAPcfBnA8mdYJ2tSa1UYKsG5thXBj1Ao9ggdNSJ75hKC36BC6a1npfqSojdCpcQJodWamT3L54eArvGdWpzD",
  "key23": "4ju5Vj5E1Z5dMxZCvbK4Un4QkJwZVzzqNmh7VQY1rmJZKrrpqf7qJiQhPTGMDuALu17PbbD36mv8Ch7P6cjuejQb",
  "key24": "my3LF5DX3UMdivFfmVW71L2QedNqpviyhfR2GTuDEMWW4bNhz49NfG6VuCyqk7d4iiqXrHxjoLmUzvKDvaYujLU",
  "key25": "4ctnfkia3UY2Z6esuwZUnXywbfMd91xxUQwrdTnQsoQ7dcbc2VfTQReuCMF1XaKecLri3irvZapFsa455xqYGWM8",
  "key26": "hV9d7gbhY6J131K7gs3GFtMgTC2B6KU9xetkdGmtC3H8tA14W9EoUJXsNHb2RBy4ABxnQAWHojPWAs731J1si5q",
  "key27": "3LEaquLcaMmaxzvUm6Jvk7CNaf6X9shXQdpxSNv97QsYUX5Pbb168HgYwuLf8wXz4Br1MVgKmJYiQZviQUEY6bMT",
  "key28": "4xGELkEdVHS9Xp48NqKsWVoHc2777RXJmN8aoZWMy9CyRZAUUtDFuDhbyY5P2QzS4poeCjgyrHXjnpAtpVSr6sfS",
  "key29": "33C1BkAkHQYovDRAF3ektcotALmENiUMu99U7BY7tw5YN2bVdU5caLLQDwgXiuwzaq55BaoGBDXYbcxjWKj9ULmt",
  "key30": "3hHPzxzhcjvSPckB6xzMwW9Qtmy3geDsg7REjdum2W6SqP14x4HLbRVefJEHyxb9aVNubC3nXPojGNUUqTdeWfvm",
  "key31": "5Dnmje8dxivB6mvCdbmWsycMpbG1oYn5rtpGvPcrXvWbvu5pDtT55XHSf7GbK6vXSk5o6DihX2H2mESrKeuuGoH",
  "key32": "4gT4EX7ePPSJCunNgkVUaFYZL9Jjz8X8h3w69rGKcvz1ACPP8GbpTSPaXgPnSXT8M35mMhJccEKBMMRC6fTP4keJ",
  "key33": "1279CepXoRC9oauUm9fscJBhPd8xjcEqCqav3CKZhcAbLDM6Jgw5c94sF3fqbjbyZyswqcxh8hfweMSTEXfqZo7c",
  "key34": "2v7XS8aEeZVc4y13Ep6NWqWkNnmrncuZ2LVVj8aMsWMxPURBB3tcgyARdP8P1r3T5idv8nHFLa5fGzWEACJMCeSx",
  "key35": "5K2x5GtSgHHGC6rLsPhmU4NEipCV64PiAcbDnnT9rNdGdDzrtVs5MGxy2mAxMebKfh13Kw9Tn6q5uDkGhv4fLTHb",
  "key36": "y22UAKK9EhpgkaWAQjwX7YWiZxaWmJBtrWVTSCiab1d79NP4QxT5ovbse36vEvCTMhgwW6p5TpiGRbKoNHCL3M1",
  "key37": "2gY4Z6jqXGp8fQpQ2HHNv8AgP1w6LGZaSoYEnj7S3N48RCWuXpXo5VjKA99qScfgW8NA7S1DQUWketgcCKZPLvxE",
  "key38": "3b1YcE3sT3PXiffLMAmLnXP6YxmLJYzTvLsa9UUnYyHH6kW6ZbMN2bt4wd8ytFXrfsbv45gktsSpfU7yhjCVujxd",
  "key39": "4HyfnBctNWEHUdXLVrgvrKhxs9PwTSArxivePSnQderEvQ1k1GE87mtLA8rEVEQpRve3Ajs34DfpRHdNZn3QaSXk",
  "key40": "3EKLDoyWxzY5uQ56QysTAy6zgDMAsjEmWT2SradmCyz1xpSoJzPe78QUAsqJMRXnFmddNuS8dfkiiAE3gFtUUoEj",
  "key41": "8fUGXLNKsrheVfr6hA5MLGAmanmQYFnBMxf64vdeqhd7rB9GckNK4UBa6BRWTzJ5LRwEnGXn5F9VYBdqiLzAR8M",
  "key42": "34dQTXjpWWsPpWaEvmB4tDF1sFHYxpth5hiY73K4LrHMmMMNVG2Xu6iFCFehbmbMr8QoLcqiu9BLfEs7oygjxb5g",
  "key43": "9WVJYBfQj5qJ2svVpH3QD3nitGhTM3JLVAFTzVuVvS1oS72RNVtAnWRUTLX4eq7XWobRAcwm4oMiVr3zsRhnRyV",
  "key44": "3xGdJHE1LKYB7JbNCNbN6b1Lxvh6img88fuBkokMvnDohmdWRnqhUkQT1Jq12N7GtEuzJgXKoYuxHCWLeEFb74rs",
  "key45": "5orC1qebh8XJb9UKFd2fF2qaRHuMiECN7X93pYFN85aPv3CiqyPSfVrsAoGgESsKxbxDAYr2457VXL7VnnzY5xBp",
  "key46": "33Lo75gucqjkhtjuFUv2h8P9ULq2FoYsZswYRaxWMcaYhJNajCaeHU7nyxiJG8H1uTAiQk824CHP2CcGzFV5Cn9K",
  "key47": "4LZa92X4joVnSaVUFYEcja4jUaQctmKqBooYfwuKfT2DTsa4gVqehLqr7j2Qwu2qMbHzqgTRd8RpwBd19usbUhv",
  "key48": "57J64CUxsKuakjHPgqYQ7KJN6fM3TCMv8kFiUmzSMA3y9cYTjA2EwZXiHmuScUCWdsDP8ymDJfbJeSvF5nA9sL13",
  "key49": "5mP6kJ3o6asybn6CrvT4ThGHyiLaoew1T5waZZJXSKwtWUQSmQaWeEQN73ZM4vDk4VDBNJ8BZxzAntnTFp25SsbM"
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
