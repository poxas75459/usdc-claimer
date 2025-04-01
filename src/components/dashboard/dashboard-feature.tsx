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
    "NsknnoDFUQZAUvjbxc8Ayb1gQwnc2tzszcLZtGDAWue17KpRQNSXMzV1jLEGB3i1qUmiZNDfwchQpVGf6eP1bof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dE5oFP4ZefEKHDHXDaDUhz5UwJJ1BJj9ZQzMqsgpKYRf2QUAPWZFcQz64kbhEsMoEsSNT6bQAN5MVzRs5t5cmk3",
  "key1": "4gGKeJ6Hzc7CocF3USXMtwnBDNWSFq7H3H3gdQAhdZhZbhzfNRoJ21REXmFZwEkcPavnmnuSo5yF16zGmDATPPt5",
  "key2": "FRBKzdQ9Nk39BWmgX6XR59LH4GzeNDT6nAPhLZe4Wr9CNi4J3xGF4xokGsVTzauFT2xoXi4qW3YGkrzxMFRsaqF",
  "key3": "2EnjmwCTXKiKeLbNbtEAfseopCQvfsbnZrwRrBxDaoWUFgn2BE6WB5ZdfZrxkD2H6vLKSzHGQnzuCSGFrezjqrTY",
  "key4": "3hPnRHNtxsW1D4prfwQuoDu1nZgrPhU6VJJZnXHZePUNMNPoey4ZXAMRLv95E7GH2RM6m6i8JsdNRrjMSjjuhh6Q",
  "key5": "3cG9JWFKyFdSm9qesAvLQqxGaaJ1Axnah1AWLX9gnt3pjWifQ7fBuLXF7Skx5LaXbMrqgDHBfsDwuvdbu2peUS9r",
  "key6": "39RNN8aKspbGaC2D4JfYzKBGCrs7n3wJ8KrpBtzwQ9oba4yQDeJWK55T3vaFiWRcMd5TCi7whLhuTHTbMJsx1mwo",
  "key7": "5PnCRKoZPeqDBiC9Rh7viYpgXm2BK54yvvMp2Vb3TtgTDE98EEeJ8BmgAMJdaPR7ip2PL48tgYdncGaDgVRPDdb4",
  "key8": "5gBzZPtXXotGrftEeu91UmdEEgSetc42iY7xaUzYGcPM1MvAhSuVYAJRFdKwKsmH7EEp4qNJYWTP7y9ciyq8Psm8",
  "key9": "4SkCcexYfCdsY5KzibUJHc91e8jjmj6AA8kDuHUyMYsZUPUYGCsKhKrCNMjuinbimGSKgWzBPWo4NxEGjHdnWfKC",
  "key10": "mWtgEdG18GEtZifaqdvMvaDvHdFXQbur7YZDGnqUmhsEgtAWgh4UsmcSsLqx8bt3hMU4XMatQZdbNyKpKhRf3UH",
  "key11": "5aYbBBZgesbrxdB7XY2KnbsMLTdTX9cQxBAa7jZTJhmJ81KSL6ofHzd8VBy2NCogrmcY5czN8WqWuizH3xfVDTPN",
  "key12": "2rFXh5DNxGp71JBsVhGmx8QZRMhHJg8wFkwvLNeR1Ugc3irwswo2yKK8fP2qom6cwv8cSTVkHavnkMiiirD7QLx4",
  "key13": "wZxnS1kUdxNqavBvXhCJyCKMSe5VeMA2SP8uMqnvg1QNKrarpy7rcSaCUKQH7cM3oqS2NCNCGL2ac4XafQCZKqK",
  "key14": "3LD1yrUcJwZUkpbjhAqwiXrNusDT1NmjVdgRPXkZc78aQML2KMBnJ6JxAScKkAsXG8HEjW7AttKqMD9DmKftkK4i",
  "key15": "2i1wVKApsbaF6maYfYLtsGdb3vENSvcyeSa5RYhhUcHDqkTRmrcf9EfPCPZBtiwEitZDCjP7Kf2rRtLonAz1NgDz",
  "key16": "5APn8AeHTtisiGekmzuypyomuQrDmMVGbkMYR5bXG6bqYMwwB28P8nDThF8WPPM9jNHCb1NQ76bCxRv8dK124Dx",
  "key17": "CfEvgwgQWqAjCW8fqmF7wb64z8AfMUmF9VDcxKG1cCRGq53dA3F5hBLaGKaHPD4rL8Jqbef1xEeEx5KKoPfTmVQ",
  "key18": "4GXwBnxHKKEV6UZ864DA48yCuw4HSaCQQU7CzwrTGKePpV7nQfhWDmfWE9NZaNLFfEr1RmcAp2WLi84GZk6DBrdC",
  "key19": "5A6KgLZXLpVhkSzALeFWweQqUzc9VYCrAo5F3WCNKPv3Bq4jRaPF6YisdmmWcKZfuSH6nUHgKY4XyenQEqQduK4C",
  "key20": "ACfAE5hqamByJ2fycJewVMpgMkicUT81AAxUN65VvkxUBgfAWGuii6HtNbwnUaRg3GYPC8bperbahXXhNeUcT7J",
  "key21": "5PprbKwvBfdyS4b7xcfKZfa4W4gP5DMfyDK8LHjsEpfAmAwgEETzXSumwLuUBgYS1CQQbVxdemXiufsD3z8g7wDP",
  "key22": "3xR2jJazFRZM31vgtHDfnbVeBVFLpeJ48sJz42JnnMsFmwaSZeaUyABcpauwSjmXWiKTGwxxaxwNBSsYiuyexTTH",
  "key23": "2VWC1NtcusCYeokfYS56e6TfW1e4ksnwKMX4AaMQirk394fJNsHMQnp4JMaSPMH8APNhsrFAQQudHXYJ4M9sEem6",
  "key24": "3EXum6QZYEVc5k9wLoPLwf2GorfxCGWh9VyekVcLAorwDntWzzqLLCqGhrAwquftDxmyAnaUME6MftAz7Njwgoqc",
  "key25": "5HHx2LyRHFtdxg7YZ24g6oji2GJukxY5QZ2985HMz2YnJZ5XEFv9ZzqEDjuuNUo86JK4oizjCkTaTZXQVrczksXL",
  "key26": "3bz1zjfAKz4azztBDe4bPypaincrYS6Fw4xDjEAbPw3KFVJ4cF2Mwf5PN8i339WHEfKcq4A9wikXiVUrGRzv7ohu",
  "key27": "3LfXjUap9pRZoW8C6FEhy8hN7DWqPHMs3vphkWurNLgqWCs2Q4xMfaAGEYmQfmKAcw2eeqrmcsRanrsJAa6wcr1t",
  "key28": "s8kj9qAWuZFxAsbR66KQyGTYNyMDB2Mjq6yPd8wFfHjGDYr423h2KSgjMz9ySNiBwZvxGsHdEyRTQetvWBdEwbv",
  "key29": "5zb4VNn5u8LHe6c2DyVXmBXhZ4K1Ux1tiE55JJkiMyGdaERiS6Xa9qwYRpjigiPk8oNGfw5gsxg7xhhCTTESvmFc",
  "key30": "NWgGf1hxsoDLixFpuDiHJsVmHP7HgRWAvvTQZaMcbEsKqi4vQxNac5Q39c5AvXowNMSoDPgcYudUdUPRR3wXCob",
  "key31": "4aptp6SZfoeQtrGEZRjt1WiTAfmUSBZ7kGJ627XnspAmqRFBM6NP12vcVsNEjCZ5e5dScVajyD3t9Nx7JCcvAoHy",
  "key32": "2wybyJ1bVdeTYHC95U4ZQKeEfKNuNQbyRXXrPBTtEtNf2SYui3zRrHTBt3GbBoA2WRCc4LmNpnQLDLSyV4EXfSjo",
  "key33": "396DU5g32yQqxiTuPPZykoEC4kLZTCUr9ASe7y33WnKjtSR9JqmssWiJ6ES7fx7shpeCaqQrBYsfGKAghCjawW3r",
  "key34": "3XrcbbeEKwEsBvS41RowCZ5qRvXZdzLQcJutJVudeVygNkkPKRFiQHyY9BifaDbz9bQr5PTDi87ynEecv7ngPGmz",
  "key35": "4a4wbzm8o8nAKPP7zysE4GYG9aT1pLwsXBk7AGQXY8eRUgBdoD9tDqJPoWw2UWGjSeLwLwfgcaAXLQHRBox1Qu52",
  "key36": "2yM8CipqcrYDXAwHXsBT8WEZeXFjnkZ38za7yvBSicYnnp3HAe3URnpJJaQGjwCi7pDBjJNFMs8xkF8J3m48GjJE",
  "key37": "4zhVxHb9X3Ss33X74pUeARqZZ183TNyM1ndDSnAoxBuS5e79DAVFfmu1FVNefrNZ69YHLZJFQWrva1kywisHjrLt",
  "key38": "3QYfARUNbrpm9fKGdLzz5bEzQq1TYL4i3J5YiRKX51iJfc23Vi82tAXqh4CGjLfMqNmLtyttA1WDE9JNfBPHuzd6"
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
