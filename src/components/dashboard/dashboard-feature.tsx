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
    "P89vAMYMJK3otr5kfyToHmt9zxCqTjbGYSgGS1n5hsUAb4fwY9d3jRNQhW22XTJeYp8sDLttkcX7KFHqWir1e8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Quv3Z9pRos4gjifjGWx8EbX2THhuYBDnKuJRBnJ5mK52d4FsRSkh7bzaFYEFVmjBpXD64Qg58giS9JE1oLfkdA6",
  "key1": "4c4Z6wGxdGR7Ebchn1bxkGuT4n3PtbNG4hXTrQfWFAGY7SxUnZAvwGgGEpp97T9kj9e72CvSKAhv1qJ8PEAZoaX6",
  "key2": "4J1PASPzZ2vHQHf4hbjuM1F4nwHTV8V4B9UyKuoCXzeACNnCgMUhfMCYcsXUfkFP3fAmUWtw51wk9rpbpinm4CzX",
  "key3": "5q7hJq89HHWRYjW55gT3qRUpVXgE26sEkzGXmod6YePYd7Si5aGBqN1W77Suhxt4ZnGVWFfRzL3XWcGSPtAhtkcr",
  "key4": "sZvdkWGLYvyDBipuLc22JtzcTbA9sJuDZoeq6nXG7XagrqLUCzSFTQo5zRR1L9GakcySbxYWjeBryyGTvz3htHJ",
  "key5": "2atSAGtVizu6adGiyKNgo3QrN5x5BWWoaFpmBQoszRSgrBWuPAQL8HsYAWeD6AyArdopogWBhb9gbKeTe7Sonn2o",
  "key6": "33sZpYcFLmUgdMq8BbbD5QnuoQsMysFqz899xmC9qWwhHMhRdnRhp2pXwXaxQEmc74kLxSHjMJVd5ad36pQtB8tM",
  "key7": "7KAzronCv7pEcj56WpVb1WnCGcftpomx1U966Tw53BWAW2UhRZ2KKqMBKFBa5c8zx2qAgDZZihHP2Bp5tgvfWxb",
  "key8": "2NiBBYghBhs1FBd8LBgwf88a26s38qQwngpNbM94czxSV676g98W9CvBeZP8WDfrQrZt9c2f7HLoGVbrsWNzNR9G",
  "key9": "6172RZs9ZxsrgV8Z4bvowBQhF4qmfFx7KtD26kRPCGHfC3G2tMeSVZ9FNuMXoqGP9cXCbr897s9hc1R5PHR9HYSV",
  "key10": "5jqwntVqsUs4uPPqC1wHYT6c6mtHFKyzQG8wHX8QdPTLePjT95yN1R4ALKB89ucuGgi4ZyecMenWaciCFUTbYdz5",
  "key11": "15Pkh9BgHtxC4udLw9w6TeVY5Xutr3KPAYQwZSHECeSNkvqzCPC31dAzfXRQnAfvQLKHfR9hKwxqA9cW5jkSASE",
  "key12": "5yYuwu5CFW3Ed4Mh3pJpMjZazxVmRhEaS84rLrWreJQzibLNaHKHsEGxMAp3XQBwHBFBiUGbpWhwibcudQrbD3hU",
  "key13": "3degojEZpckHD2p9qazdLFo7CwNGakaWzDjXXVVtFXTM8gBwhekwE1L7K7LFNzuWVnFyXAeiUa7gHosEwgYh3Gy7",
  "key14": "5ihVCEenDxvbYcJTkspSfRDpDTgpiJAdN4ki7FLiCPSHf85MqDS3wBRmw7uZTQ1Lw2WuhEqoBhvdP8fV8rtM3euM",
  "key15": "4sq5ekshSFvdbXFGv8difqmprShHcUK2pTKZZAQ6LgATouo1swmrCXHBp6jHQEJYjxG7jD7D9muz7jhwD2HGz1Tx",
  "key16": "2Sewh4vNH5WkJ4msHg9DVMcFesqGybQCLaZnbEggdfk1E6hE8nok6dukZFB7HqWc18KF1JDPLgpLLzdcDECkUh95",
  "key17": "3UeFbQfoUsta3Fnq4mi1wnBRDBdXaTrdqppqM4ZPD9FjME1SaTKRTvx1Q1wm914q2seJqaVnjV51HD5gww9NePsS",
  "key18": "2zJ4Jyd47CzBHEpGnifRo2whD56LigA4iktgSYzdU9PK5uSfp6Bqsxd1pETqRhfqhG9rA4sr6sM8WnF63NhkC61u",
  "key19": "2sJcXMcNTD2UTJoVA8qQ6PYpBJj8TxwYbiRYNRD8Fs8XGNgXCA1K8HHuQKoDDeBPjuLsozXMKaUsm5WRuHWi9RZz",
  "key20": "59qNd56XagPfw1w5Xhiv5EmB7v7E5yyckZMuHP8rEHbidVGJJ17RVeu6Bfp7ck5Lz95NSYZ1xzSqXbyCiLuqeTvo",
  "key21": "52vBnmNL2vBYEU8gSejX5XnhmNPFy4Ryx4wZxmBhHpFzBp1tKxy1uYZWQJ5qf27yjjFfMtETT2bTxKnVfLyqNuVP",
  "key22": "LGgwLwX4eamzTMQHyT4Hc3oddh64GsH49cEctNszS7hzvjnbU3EdLbRob7Hmnfg2pHjrzZWe2g17f48EgphWToF",
  "key23": "62MWVG48YfVXEUExpzRaT6S3kpLGgeo2rjSPc8uZBoUanfQf3v6iB4NZL1nSa9K6fQNKBiYXhHHzfbnTLYsTgedv",
  "key24": "5CzpKw2AA6tCS2RMNHQJYrBFNQh9sGpPL38yD4DBMCEu7MXF3xKMaKAPifHoeJcwmMnku3MmWz4rk88A1Thxdwz9",
  "key25": "zHAXuBXHDmGuGLUnLUVMKxyFx3GJRWgJAVsHrUryomHCGcYFcJzQB1u9tNmKF1zcc1uZweHRmqmwzJeYvAMJf6j",
  "key26": "3VPEJqG2h6oq7MhFAHtUEwcLKxxgchvVZTfCQQXYBgtnXnwWVqzHcMxjPYFNsrAMFrLqxsfoqh9HbjoeXzcyKUAv",
  "key27": "5hEAWn5CmTYENujRC1K5qB81TuZjyxnVrfJKLS3KV84fiCoXVyAASPDhEeXPAfTZe5sfAwdp5GvpeLdhrvNyZi9m",
  "key28": "jZYRYgMQVhC76eYeQDEb649LciTCYLHCJLW6GKfeY86LSGqSVaFdV5tnTMiS27AMR1xjo6Ne6RG7WTH3NmRbD1K",
  "key29": "5c3SKMHLaPCa8THeJnxCik5qJrcFj6Wj1UxYtShULp45C43acwouNosgYq8F6VMAue8f9Vt48vG4yVVfVQCpW2ca",
  "key30": "27y5YNdZpW6czRw56KGW8EJMcXULDAFtFpqL2G8gkPfjuJBeAuuGnNA9E6mFFPtaSa9bDVWKxpWSdfy6QGCcQ4sA",
  "key31": "e7BBNdAFdGXGuZMeREwfBX4zYMQY77qPZ5eygSn612KqvUPAHuuHr9Tk29Y7ugC8BB8BqLTERCAv8geV1WCmEMw",
  "key32": "46Fswo3hPxWzYyj98h8GLKgN5H1AUjrAwCddXLpEjxmnuWT8UddbjC8679fF9EwJEgBxWW8WZMsoNuFkkeFbUxcz",
  "key33": "4CX6JqyhtGv6CGGH8p6YkiJEtqKjtV2oKuoER7e9xynx72Ny2TkRe3gCFTqSL7rSYyahhZhxX175ZLok1k2W9DWF",
  "key34": "8D4JgXTeprnBqELv2YbpgttqNm1Rzgz7nnnQD6JfUUm1XqPK22yvX2Pgdke3RNeAn4ciPNt9XNmyYz2jh7QLT19",
  "key35": "2hyeLBpKwURTLSutVdWXfWjEwrYUF2CmNabpg6HKNb7kTLLQH4P3ok8LH22JWtBxe8CJcZaDxv5vePeP3ndhbgui",
  "key36": "58VNavz9aNsfMEK9XUZeBCcpsCdNzHEh6wwTHkRZAHtTe3LHhmQWUEN2omgBMFioW4hocBc7LVcBNkWMeFSehAPD",
  "key37": "4TGkhsjTPQHDDEoaPXYFRgr4HG38eu3G23rDhSuJxiMgJ14QmW8vsJtcLtChGxSmU3w21HHsSYAjCjs5jbmUYfpF",
  "key38": "59StZxrUZpRVD79UD7TVbJ6T1iUtdb5GCzR881RhgR27pSB1Fko2bCyPgcjSnti39ohXnoBE8Rj7tAYNv3prBH5P",
  "key39": "5pmx2VrK9r4c7pj8S2Cpqo2Rsj7FKh3Ppo1TAFNaYmEEWsU1wg3US9xe8PXBPcWXwZsjqgCg91pyAvjfHafiqvBi",
  "key40": "2Fxinv3myzjmkiEhVhHZ4t5gMXwHMt6CeyzjpsSifN4zxeFiLB4RRND2bkdjkZj5LUZZQxpoQn8QaKRgYjgNo5dx",
  "key41": "65HgRdzf9BzdRhKgK2fHv7WXiUH38242RABcAo8Gbw2t2aEvG8agDGRiL9J3PkgSPPT7iJYEzjXHj5J7Wo622uPg",
  "key42": "32SZsHsgCGFaJgpx4rioxPCBrJzZqMv6FYayatsWsDg3xjbPrYsysPfXWiW145hCGFcY5hcmRqqd4aA9aL1ndk9A",
  "key43": "4HiqxK4424RCQY4Dgqhfa7B1YLrtj4MHsHXARfCrMXYAYvtyqaaoMqyjCc4xCiMYQC8c4HHz5HFXPsHSfA5FtqWi"
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
