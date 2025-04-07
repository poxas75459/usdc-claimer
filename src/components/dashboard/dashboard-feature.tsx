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
    "28p1CTjKsvsyVmZVDcF6mWmiRwep28iS1tUVaMk9Ljx4DnwfLKS7W8mNkGoewBupnLdMDGGLSzhvQnmHQWcJLwRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hCqXfRpWhXXoRsggRxGxJiRFHmS1Vi4e74yTekpS1x36HWWUAAKoPDfakc6C7bwcggj9DZkjiiRNTuKZVJ4n8Zu",
  "key1": "2pNrMfLmRAEC3Ye9GUNVJtHzTsJGBieZVY2Y81bDyD3MD93U8rT6iRjbRqh6wAFjXHBeKkJsjpUjzMhm9RaVFANa",
  "key2": "TsNhcLKjrjS7tpNZmpsTRp1BXbUSTQgQckHhJ43K6yzSyvw643geTJfiHV39Rnr3XgeFBKz8d6ByMie6xsj61LP",
  "key3": "47ZzQcAwBYFXnt3BFjnWsag9C1qJVYpdG3iF5S7AsNkB3vfaozdyohfYC4R5zBFJgSZ17uYsooY93GfG2NAKNGar",
  "key4": "532MueefwHkrzhsUaPLqJEuWuGxqh4uMTVc4W3Hdc7uSAp3L3XRdH5F9uf5YeCFMZXihgJfpUyyvSFCeGchHESPD",
  "key5": "4x54ykdKxBwKX38qpD9KqP3XZarTEZVHpDMEy9BmZ4M8UyuuHeUiiZcKX3nMaL9HTiWQCjMAUfDgjjYwYst485Vv",
  "key6": "2idHuhS6xPKYYcMoAwKPjVXnJ2CaXiaVRiSChKUPFAUUh2eoDxrJqHaBSvpWMZdWigagLy3dMo3L8jZmFWjqrxJ6",
  "key7": "4MQjJLPKwXa6FQqDG3XovudqPQv26jNMWHJK4uY8FvHZqeq5gfgvYXeqLh867JmzkuPEqn5qF7TadF9JBiSDjqLV",
  "key8": "472fxG2RDB6E95L1xMAZnYENsripvZpUxKEX2Ua9cMkq5NCakF179qCez6ktDG4i5tqTZp7uZF8wtKVNLzcmpUfx",
  "key9": "59JTY4S81VWH4MuKJtX4cskT6qCRXmqy1h9kxCd3J5iyaPJD6dLpASmgPKydkGvy4vKE55Vb7Xj2iFkDSBw4q5nH",
  "key10": "48Ffz69DDUzbcgqqiZmVSLw7WLy7d9E558ffgm4GwUPk7Jq2Lj7vTgvdg5cTW6AQc9jpzfitVs2THAUNpJnyspgC",
  "key11": "2kg7jFo9Nz8WaLUUYfjKkhqeRhdfhTyCEhdTsd2kUDYAFyq7qK2Pknb7ieVoLNziQMX58nSZNRbnoUVMmVJM3hzK",
  "key12": "gZkp9yWax59Y4ge3PvxriRySWfquZCypMwbkRDVNfAG7JTrct3VUDgxsozZyFg1naX8VCksTio6qJ796jS57rvt",
  "key13": "2ntJJZTZSg9gYN1UVC9HnBVUU7j3kKuFLJzmx5vhYG8g3zE7qodX21goHBMm49Cja89So6j1pT4z8vRZaVuHL778",
  "key14": "5SdotVJmbrGSjcvaHG7C8iWAYNGDXppoV9kEef3E83ea7L6DMCWSGDwd99NQtd5giPqMCpiLAoHGGP22ramRMANo",
  "key15": "24wVC2D9epyJiNc7vZpcKdcvWuRfxPpuVzkN8wzAKTYW3Z29MgqLW83a8Fa7aKfRBE5pr8zv4eJDJHwLCStSG2XN",
  "key16": "4fh1X8qc7WgKssvnbbqKojtBCogQw46uScoJBdVW4qEumF5LeemsZmhzizZMycQ8EyL3fZhnGmrM4TjnXyM1tiNe",
  "key17": "4WPsJywgVRzdLaTDDfZcJ87bqMsAFuGJiHUcYqGXSLs4C7ngCoPQDeoRTZnAnw3bbCXPwokWDWaViNmamcUqUjtJ",
  "key18": "2FAwHDe7BjJGEULx2mjN8VFm1HU5B5DSrN7nzky8GbQCQUWJ98Lo9caeDieLbfXGvuUaC698e4KfR6N2XqEcE6ZK",
  "key19": "36NY6MybeXMxfTLcMfvYVTCo7wrcjQFko5WGdZanJfvDMsvwfmbDoxYMCphqkYUvjcQgqgFTJ6wt5XV3zzPaadJ1",
  "key20": "2rKbUbpK5XDVDFWduq7q5SdmbfWgtYqdL83RW5kQ41PtP27UjW83wB8x8xqD9UtTETGGuPRmZJjTNTGuDRyhvDwc",
  "key21": "61gk6oiWpQGfTmeHzKZuqh6pdyawcnTgaawatvMD27pcFsmSLHWKLcbpdPZcf9E6kWUAN4Xtf9jHUBbckL43rwo1",
  "key22": "4hxRyhCXZv66c1ioQuKLFMfHZRuiGpgjJq13B3AmeSnsCFYDEiJsjVc4DbHaGvMfy4qyBsE2diK1fXR7z5q2SBNo",
  "key23": "3jeUh3XYPiJzkZfQtSSGKGdNRXyRv3DmNdDuo7a7GdAbDG96vuE5hk5mJkTKBrrr57skR9ecBLYFbxy2hcBxPWbi",
  "key24": "5N69pFC37EKhTK4kNHH9j5Xqf5rE22F9MazYUiwMJW1u7KBueofWBKyihvQsoDbCPwSjSZeB6xmgJqfVnhGNTDfW",
  "key25": "223uK9wUzhSPngMo14HkzoYs61tpD5cY35dU8fqJg7ggNNAEoDSzAjHyK7chvzevxbqNSuvfGXhWuDrxvLzphUsU",
  "key26": "5r3SWEbENPtN2BdJNAhMAdbcvg38tjB8MdbLdJHE7fgK7e1Y6B1k2ABBcmM8mcn4VCfhhaD3qo9L3zQdRxKR1XUn",
  "key27": "3xx2XdR5rSUQ2dLeAmRnc7Ndq6vARZt5ykYbjMqX3GwhRWX4fDajZGnfA6qV9z4JUWmfoiqWm85zfRymobfCGDTE",
  "key28": "x5Y3fT99LRK3nSSGbExHpuZDqv1z8nwtYpK9wqpNzvmtmWyNwRvURvBZXvyMYASta3EnWkfLfEAnyhEvhg9jhSF",
  "key29": "5ig3QSYhv5zRZJe23UCLwNk4oXn5eEaDzpzP8vHgP8EN2fQg7dd6yQ1VAGWqCQjfpTecGNSvXpoTQWaTS9R5C6rH",
  "key30": "3BzmUBaqc46fkCJiEXtthtaY8wLLCjnzNkL45JH84t134kPLMh6h7p4b2nvEPSmPg7d3pTqzPTEDsdo2qSxPNze4",
  "key31": "3Wc2tFcvb5vvMJvVxxVTZeLLoo27fmiqBnJUz46N1FK9xwNDrq5JML3SgCEgXhRQ4fj7beGYsx5D3pWv3rufq5t4",
  "key32": "4Muu4BEJDqjRv5fRD8BTYWUqWoiHoXaGa3TtdX4LrpLX4brYEa7mkveKhAddCiKCKrPCw6kb2x8REvk1PJ9Z9y9a",
  "key33": "4KZkr4dtndpL5nZB7mFj6Kc2i1LYqcetZCj8FMYih2LiUKtN64GfB4K8Cf1hP4geo8uWFrQ6Ac79bknAtVGRYYuc",
  "key34": "YBATuWUifc7Y1h45sr4MYdJQ6Av6otzLCcKU6AqF4Ean3n4p4BjFyoRUv6Pszad17HJyqnyQSn89qzh6inxduXJ"
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
