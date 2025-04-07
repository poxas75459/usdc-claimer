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
    "3tHxdNxKMXgj2HsJvA5FFbMR4rgymZzDPDPop5CnX1jGqfhiyf1DWxeqX2VjwH9N1zNQFHmkPHKBEkBoEi4vvy1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GnCFUb8c2MYifmWc55WGsQKcVBPgMvgfUUDfNWjTYGgfbStAAR8MZfAn2j3FzbX8JFzputBSSQQTmbZd9LerN5V",
  "key1": "5RrNjeMmBDd1W6UeAQiKpDuLizqG24CB5CFgPCEiXNoqyUjk2cJKr4gcnGBwSr1bZwP4SxVRvmPBpcv8QBS4AiwC",
  "key2": "5YGMm8ciWznsTmMLGiJo58UiPJ5PHYy4rZUQY2VufosKTMMeMD3dScKqqhAQiXAbdNu48vFdqQ4VHFtuHny9rRc3",
  "key3": "o3Tnvi3jfUBLyiiScVzoQ9anM1SjDtmuryvp6saicUUS5avHcVPeKqoAG9FQJBt1cNS86BsY5vfahQyh654iyQf",
  "key4": "5V6NJJMJMUffWKR1QLbTHau52m41PnuWfDvUA4TaYaH78ML2BHZBvR3vRwbiRmdxmJtWZ4wXtdS4X2Zsmuw1zBvh",
  "key5": "5HwSesHgx5RcdiWj5ZH7BZmPtibGuGB8h7UGmHdvUNHdGraPqWR5kbaLFRzjVymXZRnp2RkPCRxMEAZVSKbNA9L1",
  "key6": "3yydDXSxq8J6HAvddkXstTHHrVe49jKUwY2BsZoMWJfwVXAsSRkmSwQvrUfPs6ryesWcRafoU13CyufsmyeGjK2T",
  "key7": "5ajq2X9hkVaKyVCm95LyLcMqtgzRztgFs1wwtGMnQR9CtraX8Wq6nZP7UcQwP8ppD2Fm5ZcfnK9jvWWepZeeKRmv",
  "key8": "4tDcv6e5C5oxV7BbGMzWwU6JvMoR719R3MAMiUZdQiZDuN1cQkaA5qNJ8MTkjqmqBb7cLw6HXRbpQJXJpKkxAtoY",
  "key9": "29Ur2uzx7tmVZwAqqkCxbau4R71rP1wPjGDTcbLxb2R1t7B64isSP4tvPQhNVMg37cMy3g8Xh3Teu5CecL6WXefB",
  "key10": "3cuydq7guMG2A91zurLYz4Y6WBD3qNMK2qo7GH5JEwXYTuMZJ8sNTycwZPSQkV4ECxfJxAXuXAzC6s9LcJvS2c63",
  "key11": "5QXhqs7VkbJ5V6NTkJxGUziuq4XUW3sH9FVR1fj6ysJ1G98ZYeKAk3RvU4ojcwEdN2XE9fex22dKYTTV4HiTLRNZ",
  "key12": "3mhtXRP4K9c6vrMTSgWew7sA57fnxRZeAEfydZuVxDC97F8JT9r7CSQG1TjEw2H4y8nZADCcZTMfRXGSWbKtKyK",
  "key13": "5v65ucCuXSKcjaFkVv4WuzgYnPGHE2ASad9ehDr6h3ztes4MJP4HboNd6jVdRGP9Eu1wZJeF6menVmaixGHPFjeC",
  "key14": "3KMPUxuxsQDeFqtgNxo3uyyDtFJPxqNh8G6NWJRp5w6TDQageq8Ttff63rKfyoXze2KRDBsrHKHHv5TVkBCyPw5s",
  "key15": "3zFctxMJREPu8ET31kzwgL8x4nENJoVemte8bYyQpgDND5egwhYo6Qmpq3vatfFnDa33qqW9fEE5ZEWStKagNU3L",
  "key16": "5kZWhr2GUc1zE7z6KLowfVdx1Pf735QqonrVyzkHoUuzVaFRVrUgnARSEszn4keWrMpfMm6fqGnX8UYsHDk3ovxs",
  "key17": "4EBrA1sEyMFUPbukqp5YZMg27J6G11pWNCyhaSTReEiUxG66iLUVUeoiBvLaprzPGNG1fvojBe8BdjxKi4ceeh8D",
  "key18": "2nbf6erQRqzHNDMea3P5GQTHrXUV71LrbDtnaNEJs94UFJB2FVKt8fgW9ck94naXBzC2nLaQkYmFKDg93TiPU66t",
  "key19": "2P1zcmFjtr7VCEEWXGDe6bBJ4miqMi4ZFofvxsUPH4eBhneBfhSP6pfgUBkFA6KK9NwAa4uwRMMuZir7ayS8P3iW",
  "key20": "3ZcYzyfqc6XttbNLPo2xNhqgZ45HiUghxFv5VZyFjYdz9unNm383xR4KTvz1tx71djwU3Tb4CGjyiqBhLoRJtyxr",
  "key21": "5FC3Uhv2z6LJ8358a1uMidGQatJKy4W13ikU6mwDbnAejSnnQp9ZdbGcrhkXnSam4614ZXJYwTGYZNtNMRb74YjE",
  "key22": "4mctdc4fJXQfcyrqVHNXhw42LfhRr5ZrAsqf9N1NuKxcYbUQDovWmRiC3d9828wDdGhddEgciC2MQieiQhJcNrum",
  "key23": "4fNK5YWtKMnLqkye4coKVipfXsKSkrTjCobyZR2xUcfjFFmyD6hyMvgsabgg9AKLZK1iYbitcCvu5cJPeNiwk4JW",
  "key24": "5N4U6pDBBuvgq8UC6GpzzCxR2cYpnDUnk77drXwTC4ZUHJft5jcJqHiVszZzAuZ38dnxtL26wAzqfm6g2tvV76NH",
  "key25": "54oiUL9h7DXePD5YawwUqRxR322SR3HCcdL2TaU7qcsE1ou4haXX34aNPjSCCdcDQXrB5P5FP1WtQawkb5nSbSDy",
  "key26": "2v7K3tG63HwGqgQckSjmJdH2VfswZkpzAW99cnN45G9P593N9dPWfbJsjdSRCCKZMVcmxV6cscmLPDMeKfyqDvvK",
  "key27": "4gVVPz4HYmYWu6VQ5SxE3SzbqfKN2x1XwULLbyJqwv42ToqQDHnP6CeFDrbVceqVrcutmzQcndmnjixg3Afhx29y",
  "key28": "5M6QYqUW7BiBzuEVnXuu1pY728vBjrCsbLSSJdx64pbq1hE5PyWkjDs6uUrnHwKLepTMw43mzcFyWGoEbY8B1Gax",
  "key29": "4BC65iqitoboqumtNS32Nfmyjh83iR3gcyhkrqgSuhjFzwXH2tkqzzqGH3dG2oSJTVTNAPGRPM7EAD8X1JQYLmLg",
  "key30": "27sNNZXkJoFsZCGZ64McBFceM8s1ybfd3uELnEBLkJkN178HwaQuHhZf1BiamxSTk6VGnrNiUJmeNYR87XvrwaWD",
  "key31": "5S5LXdqvocHEvUe3Gefyfs2ut8f42V13nu3Bt1sLvNA7vM6X3nYZC5UgyuUBhyLz83YhoqxgUzTR9axfTgQhPWp9",
  "key32": "23Q5GpZNGT8LfWLqLDMc94vXBgjh5tAX1T6j2g7bSVHSpj3xUFfVqvvSMdZ4yWwLZnLMAFz7h4yYwG4vRubZN3Hs",
  "key33": "49Fy67J2XqYoc8XRPtrDZZ7sJjn4bNfmZDtGtPhEVft3a97CPA3BVHD8kDJLky6ctt7pLGYwtcRtWWhrGpmvRd9",
  "key34": "2bWWuz2vta5P8AUi9UtPhgWeL3rSPzxzo9kkkLeJALRVNiXUYwPeFZc7UYijXzmiCBix7NcmkrRDY2EQ9gUdL8Nv",
  "key35": "5h9wqvyKTbHtKxAsdScDY9Sjq3BLLXaqxJ9L1XQGqzt74j7GPr3fbB5b6hJyXJjGznjpfhc4vgU3dZvQF4juSZY4",
  "key36": "9yhxQYaPSrbPPDNmkMWWxhPtD6AGznTquYRt39hLZiSEBVvqVE43NXogmrqtUKyYNP7wnRkzVHtSi5v9WNBJv6T",
  "key37": "2tQcdgfPTBf4F2oJAgFz8kp93ac4FPDQUCQnnaeCP3H5TVJb7fC5xabhr4jzQt6GgypjSG1YPaYYmF1L9MXkH4o4",
  "key38": "4VmeS7BkUxkm2sr35jYm6QG8LUy4vJCjAgK56NH5p1nEtsofCsLjmKZUzAQtB4XGJzWQNEieLR3uBhr4t7v35EbK",
  "key39": "2Ldcr2gDUAX1bcnjNcLmJCQN4jmNkU6pXD6CXKYQmYGK4CJE9zcbXAndDM1D7DrfAMuJNSZmb388M35MzNxutKKV",
  "key40": "vYvkNbqN9YixL74ruuJm8efpU9bH86WyQu6yjS6yneq3CKrNgpxWaGoQob8uxYPKmY92iaLLJH35iwKnvUEZvnr",
  "key41": "2cVQH9AAhiTbnYNrSNPivb1w4zxFid78WKNv2XyAQobTt7YxQKx8m8mv31YVHZBZDxhTGs8ZyrT566dhhUytBJ5C",
  "key42": "Rco1EeFK1PRsa8zG4YA5PUf8CFHZbCXjSNLtP8DDDiqqvvqPbX91eUyvgXJuSYZYz2jhPW8vHVNqGft9HH1P8dP",
  "key43": "4D4M94Ckrnxj36eE1NrG5kP1Dcvr9oozx8hHfQJzyjq34cUyUBnqnJqMczLebWC5d37U5VFcM16pscuzLyQrmwMQ",
  "key44": "5GQBbd9CJe7vBgxVsWD2FAH73n5nsjSrLzBnPo8zRoLrhj92FDVMcCUFKp9RN8s92UnpcVLiXS7ZkgMZpZkhEfxz"
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
