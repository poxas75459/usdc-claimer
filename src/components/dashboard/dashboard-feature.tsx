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
    "3JHkzA7e7oNiHjypxi5gyjSnbQSPU1183BqpAjfAbP9zJjBoDkxaAEXqBCtkwX4seemQanasjGeeMiDEiAjGgpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ACFxKDzJnggoBDDtkxmPLwYRz8jzdjExWiZYw1KqL7TUBvgEpbm6aS5XzNfcFAtpsAMfHH2LvoDBqYxETbEPe2t",
  "key1": "3DNo6rK8WckJ6nVYwBXmbVD9ybVZ1bZJ5NfKt8oGVmcJA7nRSSjfNYUvZM1FS92hRNXddtbAVaSMcvudcLd46KbC",
  "key2": "pSGgsXrgvExDEndyxxJ7pRd6JQ1N8hD8oNHQwySejwo3B3hGWj3sowxHmAiRh54LCVy6pVuvpFzaNr66yY587zL",
  "key3": "4h6YPLM7ffvnCK4QGgRMFRJHvvsvJ3MVLdtYN6qnpnoJrEPGjCr5sRhRtkdPcsjBEX4ExwToSKMnbrNoCF3n1up",
  "key4": "Wry3UysrRZ4R65iKBHREkNQ2rKBB8qBZ3MmRe661THEfVE5PoW2mdFf9PW1RhK6foDGhrX3mHT3smbt8AcwEvdQ",
  "key5": "3xUNy5nvJvcv87nk8yQRmcCrYfrPKLYCdJxzqHgsoj1GHMVgYhKEeHa7efL4z7kf8SVYnEoscKKRQbUbpAiRBMM3",
  "key6": "5rLTiuXADf68jo7CJ5N3KUz4MpTpb4a4vsHReuAMnPNjtuLm6bz6HD79t9LhbuAYzpbKNhq5zq6pyoJRh5yWdsEL",
  "key7": "5f3F2qbVMDBfhnLnD9MdP3QgbN3GZtCtDPB4Nknuq8fVAQbv1dtny9WwcVP59DvcwUqBtTUQS2i7bfozdS2PFimA",
  "key8": "3CdKTqPK99Pt4JdT7tzoqPYNxmyzCCMkKJEBU2oUCR3RFoHEccjHsZVk3GLB4Hqau282diqxZYzA4jt9t3Kv9G7V",
  "key9": "664ZAGKaEFDbyM4gDyiq6pK3WFzQvnRjzaBFTA84ZsARscsz4kWtbyx49DmWtGBezvgyrop4HHuryfmUJvBzgoM",
  "key10": "3idymxgp43U8an9NGhovNNFt732ZaL6K6DsQz72RFvK3hvPo9NJ9e6C6SJxJgEvf6UwNPCh8kA9CtHXddGjmB1CU",
  "key11": "5ppoUuciAXqwyKqPxzJsBw5e3Hfqcu98F64MLMZGYsCzbKdn1nHKr75KZSeL72QcXXj5kQMyjtQvThEb5HsVz5PR",
  "key12": "5omtSKLpucdwb2z1BtBPmGRSDrVtXb558mrE7KL85ZGUfSgerZ7oUtUjBfFxu981Pkz6AB2U3ZDU5nhDNramo8UX",
  "key13": "8X2fKN9i2hdTcjbdQVYAoUKPRrxq7VhoBtuB5QdUbCiQPbaethTuKQfVCVkR33cBQT2USQ7YQZ1hNncz3VxVm8K",
  "key14": "5URVDsc8hg5j8TxJdPtrySDjpXD1hoGE9CQuxsYNJABWAWajDFvLb1pRMaqwxLbBq82MPP4NfE8NJYn1Z1jfAr8X",
  "key15": "5iSabwQxJNqkfvKZ3QyDMENeTxeLw2sGcLxgBXTYJLjVyaZ4BKZMa5ayFbi5q3XEnMMefHHSgLp242cv5KHu3X13",
  "key16": "5KpJMx6XXePwfq4H93Uu5YidBbUSJvxWrqfqaMPp3x2u2UqJDVjH8Zrghc8pV3pn463W8zaBQhaFg7vP66qN5Hec",
  "key17": "256r3A1JeE65Hgs2kFvrvfdG9MHXx6c4iGmXAodH9DMeYSAj4wRfctVrKWzP898eHQWotyBdH7LJ8m4XMB4hQDs4",
  "key18": "5UGcmsxGcogu9JjaqFG2xdLsz5xbCwztfcFB5FYvJPuAKnRArom9zdRp7WTJDSe6j3uxLkEqRaXPZzRuHw6Dhvre",
  "key19": "Q8C1GQTmkTC3RBerKmpjyrdNwhmrFmNVCWAoGzVe8A5CM62TffypzaACRgGh2r4oVyHyMMnWWwiaYJLTcs1cwgj",
  "key20": "3YZoTXGKccpYv4tvY27NCGuVPDNaNhV1NS1PEbTow28sko881VwmcMW5z5Laayd2pYVJmveb2w9nPSr9uFSvmMXs",
  "key21": "pDGMmW2aSSTctHYBEekkJNSiWb2bjGXrNNah9SUHfH7mKaeUN91iEAqvG8geVGYFYVKKNQrsDNNjrvRUNH5JMWX",
  "key22": "2GQRpqkA7aNHLyEHH6Bawrdd1u4GYfTjUZA3uhLMNmRBW56JBT6UJu51EpWBnhwPttDoh4RUHheJJVhDBHBgEXkS",
  "key23": "5iC8ZbogFFJFpmkK726jj6QtBFqz5TthXQ3AeFto9vdWx22SzW3DM1XiGVsQRfWxDURtbXB9tTaAkyZiLH26taoT",
  "key24": "42gYn7viJJjGHWptQEFFraoS2hwEPhtDimJJ1PhE72Ge77QQk7xE2Xj9bw85Xwfmidq7BhR2598dRLuk9YokBXHQ",
  "key25": "3dw9GcmFJhtQ9849hVfL6DbvVnikMMSjy8opNedwxNNppJBTyRQZH9E9AsDMLgjBM4Edd9xsf5KPwrbn68ayfLVL",
  "key26": "4EtHYnFHyUQdqCuUSBVR9QCMUPybNn6FYuFbe89p1gGmGjFF7t6ftzihYjbBw8xM7AgCR1AswBhEdpjdCXrqThvi",
  "key27": "3gzfQjxC6XNdx7MrbRYY82bzptMdayAJLzQ9qKpKcfAQ5ZAWh1JBJuhtVyJAZB4hpBqCUBEyXqD57nRQbUJgtGGW",
  "key28": "3zxA7VMLhMzjGTq2C3DdHYTpsu2MxQGtMyNME3Dxo3vRKE62MUvnwTF4aarUNJYJjXSEDEU4CBwA8635X4KV7Sst",
  "key29": "3oHRtFH4Rv5x8u6gAL4Yfuvr4xvQTHLE9BmUSYUPRJKV4EcRAKCisKmnKtEKc2cti4okd7d5hCpU6yeKWGdCopqB",
  "key30": "2TGdGLFaXs7hpZAVWFeJ61ttGERzuTwEjPHegmkzmZCNF82MQjEWhJkDyjuTV7v7gCByHbm7VpFN7E8VhZd8KFgK",
  "key31": "44gQyHcajD2Vpv57eDeRwW7vVevzC8derCgVYA8sV9RzhJBf1gA6R6xsoapgzNnW2s8SRsrTs96Hf8Eo6vLhnppK",
  "key32": "2RRoWBEuBcdfbw6geLEzYv3XMuqE9KmzbLHsFkjixKVBmf1GQooM2S7sRpHDQcv95PHYFaXvthmCiCMFx9HccDXT",
  "key33": "2Db3SBEJQ4BevFoMDQrZScp3JzmxURxb8Pwzqm9cBw9D2LYi6LwaGTj9xg7AwiBg4nWVRoP1gLKTMhLtQXf454vJ",
  "key34": "4hU1qqoybeQU2huiGEzePLmRUx6e5RUkuEJCLtcZF2TkLdys92Bz48DMJdxpE4dvSqs7YdHDHgXBZg4iGVmyFX1v",
  "key35": "2g6AcJ4poeJboPU5B8b4sivZXwQCaktktzcEPHwVepauBz99pRe5e7mrZZTNX8vgopaD2sUazasGJ1mBYhXErfXP",
  "key36": "3Tz11AyCJEM4SSjUtdVFRFks6PmUfj5BGrLLH81dYLGdYEX5jhXZhqKKkuAxjBooc2ZLg7tUwLxs6xbhYgZfXPgK",
  "key37": "4RPQM1133rvCXzhrGc9DpLeyP3JwNnoEd4ciYiXyb6KAo44i8kmDeyrMg2VyzPEanM3JJgfZ4Dz3CprzG8GVLUJ3",
  "key38": "4R1VktsvG8x5PEfioRZb1VXRxGE7yeTnaCBbuLbV2HSgW84iXLsK9PCyzvndZZ5CwWdXWmPALQVh3jjq2upLSHGM",
  "key39": "xUNyyHDSZ1N5nhddwdY84nRiadADzSPrxYLemx8X2U1LBop1KrYsrPZqCMCCNRStt2gz2vbuoeVsMLkjdQWpK5n"
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
