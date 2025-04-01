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
    "5NU1p41egvYaFB9uMZSp3S1zv8voHqNtsuDgvru3gNbEnazavaGiF8ajNSXV7jNZ9ANEWTyuY69Gv97DNHVfj5dh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nYoXYDUBTEYuWw5FmrEuE7YaRHbfj9E99FMALw7mcQUA4VJXZgADSr8fzVUV4tyiu4iPLjCZ8G6s1bWWS7Wxyur",
  "key1": "DUyi59q4JJ2YVJNxr8Qwhziu5c8vTBY5CcQ6HbtMi1gVqeH8te5aFmsgyZXv9eRoFcXSbZdwnDrHDRzKTYPrWjN",
  "key2": "5tEm8vPdafvg16RMayUfGV8qteCsaVXjRbV4B3efqZVXwtCaQynuuumK8Z7pX6rmfoe1qTkeMeqJAF7He7atQwYS",
  "key3": "2zKxSkCrosPzzb8BSMEMFYZE8hC3yN5g1B5QQsQ6TkqnR4KpbQYxLFVLdxhEPU5nqT7Dmc1rmuHJK41KDXybRDsy",
  "key4": "xv2wxfTAmwFciDLR9BrQHQqaLqftT7Wiu8evEGKp8zFvGUG4gwnc7B63jmCv1ok2dXPk8N2YbGx9QKFwMsrKWnm",
  "key5": "2NeiJ2KVLRsanPQTtKM8JBDaLjeJUVv2o7hqiRDXUwhTJYfPAyzsN6cq18yeqdWKAho1pLyaZgKBwisU7iptpcGe",
  "key6": "HRJA9DMWJakHKxseUj3YXXFYukVa15oMWeMxcgJFMS8KXFiJKa525QMhskYdCg91TN7LzkP8sdho3RffgKK3M2W",
  "key7": "3CMGWq3ArYdyjZnE7RKzwsaeBisiuADTn1kDtGj7rQjPEzoSx7iTrxozjKweXai92MR5QH8CUybkNaUCa7WZpPUP",
  "key8": "WGaJYVuaCLGy1RG7k79bRCwvxDR4SGzYXpmQxBtV3Javog1UcZMGD8u8GbvVE2QXjx5r43QFYyXUwhUhdXC6Www",
  "key9": "31R9ybyZTZNca1yNmvEibtKZeLPUjnLvzqvx9XpHwFK92BB9PtjT9ZNneAfRbwYAQaEzjQussULYXJeV2RPnczeH",
  "key10": "5s2LPrFsM1fUnaZrmF7uk8SWSHdShVGWCxSoqoNGPg8XKZcwbMz1naaVWzXLZgkd2BQuKoGH43czmkxGp5ofDD7n",
  "key11": "4kKqXJ4yCC1xwAeukf1Y85sysqdvRBihyEpUedQGim8qzaVUCs5BqqLy5eZLa9HmPBi5nvW3E74LVkvcUNDoLx4x",
  "key12": "59EfdEXUotCYoU9NtbyxgMaH4mySGm9jG5YvV6P33k5EsjjxDKSDVesPKiY56pZo7L2J18mEcNFdsks2DSoPiV4s",
  "key13": "qf2LCZjyg5ohiTobQEGSxZfWYBsT8PdZcjYM1YheDsEMXPpJ9T9ve35LJ7gxFxiGXZeC8DZi1qunxmPGzegWzso",
  "key14": "5UoYJymqf3dLqrXW2DYoS1xwLshmE8AUEZCXd37peKnMXipDrreWBCSqw7bgCsGVmkrmecGupYJLZjMf4y9tD9iw",
  "key15": "3sY5V65nDZkUBKiKfdM5tLjp8hL9iSnugAorvx2PCiyevJyQam3rHsGkqS1mPx3jo5dkRypuc8mzFLADUv86FWG9",
  "key16": "5W8jMaHhdmdWSrH9kyRbPpBnWaYweHYSogooGXYBkALBRcK6WSMNTMpZYovXWiY8eH4oa37MRKUyJKhz5nXA86eA",
  "key17": "5gAY1YSow7veEcwxqsBA9Aeieqa22Fh4BWBrdRyopZByYwnJguXjcVfGJrE3S5upEyPcmbfgy6kgsQsMAHWtNs7r",
  "key18": "44euTeNt3uqPJBc5WteGkwbUaqCeQ3J4T5hJrKYGkW3Xcyn9xmGMEAPSMbR79TkEErDLur7X97g1hNMY899iSw6i",
  "key19": "2UZc1ev9XbYKrsDZxk3XiMvExHXMFRaxgjwdptWid7n3af1ZhgT5DyFhfbbDCZ9A658i5eTcAXcKEjQQrwsxNbTn",
  "key20": "4rrTwTaWt6xAsHwJyj5Wj9X4keCSyupSeUHi8CwXtMWjf8dgVJuR4Qip2ssuCMkxGkGhDCBytoyrjPxAMAZuRcEc",
  "key21": "12NBiyBcrXdC1ztSLSXnukJta2iZnEDR1mDyJzp7ofKEb2ShPt2dY8a98tpYK7LomZU96xvmm9bXkvQB5HLUav7",
  "key22": "4xDZgVBecz2DRWndE1jo3FtRisSXH9mJYiqERaTkshSVXewPcMixbKwwYTcZWFzNCscFKVXg3tkDaNJFvymhj36Z",
  "key23": "57aMM88D5LUuYLTDGULxRUinxKUR7PvPZUsHwv4CyXXSaUgg3uzgoWN3gnpUZnixtQk49AZMptGUf7WbaWP3ux14",
  "key24": "2w8dMpKe82LGpeQLDj43sVh35HhtXVMCzb2HSbY1dtJLfeTzavAec89iziFGiw8KnkAx4o32t85EbJCMSRUy9tA8",
  "key25": "4NuaDw23EqQXywpPGdBG5LeKvh4TkSA6w2kA5bjNYh8826bupG7YcwGnEPFdFyGdwh47WWuyxBYem3kUbA16bVuw",
  "key26": "4YZ2L9QnGfHxEBMT9gj55SnZ12RdHkR6NQRnaHuwFt9MgmcgEwfWBrHr6id5FMFbRQDzqvPbKuhgEcNwdEBsaYa5",
  "key27": "twvAT7XfwSgz2uNa7dGzmYYGsRQ3X2JUjYT71wCjhc5gtTck7dQx6QBjRnyquKqcRz3Dfai3o5LgQnNmD3LrXwg",
  "key28": "2ZQcr3qyXev8oqVdiw6P1zceFqAmtZKmJR9BmERwXt2mDB9qFzxQRi6Ctov7gV4UTSFnMTC248q9mGrN1wavRMcK",
  "key29": "3UUWERXhQPu5tmrjeSxBq7Jt4P9EkNqaxZN8ksuhbCyeoJg39RLz98F4ZfvWKCMe96tjUA24yAeYjEi5iFxBHJsB",
  "key30": "4gdtyEU6EJ7EhrSqSYt7pR2PmcQY43NvrVGrFU6MLabJFCoCuWHwKDP87zVgxmviMz4Xhkzv7jdXw6ZUQfCjy1hz",
  "key31": "4oERAZx8VCMDVL4oykh7uLEvtxu4HZSbvnqLz49gdSm3qC6N7wm8CLzBrv8Yd4dEPFBAbSnGzYD86kiTdZfU2aWd",
  "key32": "3TWvFMeTQNfu8skenGkkfAn1J3u1KWswnnfdfqWN8snzqxF7DU3fDHLXNXA5b5EpemyBwnFM2RvqoHoMwLZkjZ1o",
  "key33": "2sWKHMf2hK6etg33fP7yKp59Cz8qEmJQTKFpAxCGFAdYoEm91w2HxQbphucq1kAwjtk9o9171T9pPQDNCS9th3cC",
  "key34": "5tC1GY5jfPWw7jzccsi1Rs2MyT8XCWsdn2B7sYhGnrX8H6CbpYKF2jBTZyPuwkvU6bXXiyVk34SDNpaa6JR5rEhy",
  "key35": "puMmHGtEWQ1XHFFGZZMTcU6b7ZFoSfG6sN5hVgikGqw36KYyJFVvn2hin2LZZvXLjUkk5owYXTQqP4kPoSs6qSd",
  "key36": "4cDmKRcRK4svBnveD3YqyXgqyBCXNY8XraHDLyBhvASSJ6UxfmyGqfJFYN5bfmmX2PhpH69uhgh9nkYZiW7S2RQ6",
  "key37": "46QUnMudfwhWuMeryGoxcX1tgPAHdXyGB1jp1LUtGbrFZQkvwLoLZAP6GpQp2DS3VDipARXpuw8tQojSV6FHjMsV",
  "key38": "39p2t98GeX8Xqupmr4cwisiPMTGMrmDHS6EpJzEVk4JZ31KdWBVEpwfT16qys7rQfvgPTPxF5rLr65YxUsvig2ao",
  "key39": "3fbPKekPycMthsJdGyfiAH5fVfY6HDMsu45WnKrciFJrHZdRbAnFHPjUtoHvHr6thhdzr9SgNfA8cu3GxhTVKcsu",
  "key40": "2ZppRQdUhq75U1F7s7dN6VAzQP3UE6UAuNGMGPPxXUXhCMN9gZanv8gkS8d8C7Xo5JMk87NYHiTshkuzSymnWgqj",
  "key41": "8AHEcG9ei2GcmHExt1Q2cTBHuPoJczLb9KofKS3otToA2VWqNJ3cktLE39BkK71NZvFoBZaXpoz4DMV9gqohMjP"
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
