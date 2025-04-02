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
    "394MBpdei9LFhby8b9CHy5kNeUSVaUsqxegRmXLANLA4GPHYJN3KZU6ZWoQQjmH5PGBjfXW75Ke4HeDefh1ZFT26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a93puCwhsEMKwNrGQMaamLu8e9Mu2Cwq673VzFynYrQN9koXAJBYkShD1BG5DYJCRLzUHe8J6KqmYBSqb2z18kP",
  "key1": "2KBSWxiNFX81rXCWBmxJU1hHenqjaoyyZR32gU5YsrjN6yRxaUzRFgV6B1oiY9L2naUEwfrRf3N783ssyiaror84",
  "key2": "4fbvvRJCV4utBEj9KDcnsUv5DWvHr8WaXMCBhWKY4yzWpESHgCf7P1X87eDKUbz2K9zU5Su7qPwqgokVnz7Gi58q",
  "key3": "3k4BSnt8gWbdxWeaiXM8fcuJyHR9SRMG9xXLAZCUMvzVtq2Eg5qnqCwMu3quaUEBQmiXGNth8hnw82HCyvsSB3cU",
  "key4": "4cfgDATkjm9QfNnTcTzvBh6N6GamQDKwxswbH23PSkpTZZeLHLH1AUdXGo71vc1rDcAqZs4t1cBHkVTg265CMUoQ",
  "key5": "2v46pcdoUit6SvzABCwJsNmJC5rroUHK6N72gvhPeF8HXx6uQ9PZzbtRV8h4PjYtX7ZjaTkEYzZNJj4eBi9BneTc",
  "key6": "4yhLyAjg7aKEq1xjYF1P8M6JzLMTEzhYDWep6ajqBVGr6QTUXwPipjWn8TNNyYp6tEyFJWV4ZMP6HpxU3k1ghWkR",
  "key7": "3AqAz1kv6qeFTHTMd2ztNizXZ2qTfF5hJrVG7qf7RYVaZp3P9s9dg3XSq8UZSYZ4MJno2VWxJzrqMJH3ua2p2VMB",
  "key8": "4q2mDafBqyaQcHJ5R6KDyaB2FUK7qCZkZuMzqrKRLiVtm2Pz7ufZ2feeZVyJDNSCrS8i9iiLg1yfxcXSHw5WgXjx",
  "key9": "3bMFtuGAfeeBrUZD6EYrZhT6jL6TWaUJioP9t8SyWqfwFsLzizUr8HPUpjeGehqv6tGGb2WfU9tBvUTWFWwkLxZn",
  "key10": "5CAJBt2RfRWgJvDRfdLAuPHBxmyUDkmQtV3nonVM5tHY8zi9b6zgEpKBVHFptgseAJ25xsWUE3e1j6NFMgHH1noz",
  "key11": "5nFdqC2jPPNvqxBEM49nS4ZiJKHgtaXJjkVZSNSkscw2UxUg3Qs58pfimp7mqSFHw9boYZ38BnDpf9bhLVTuEmhV",
  "key12": "26i2Gq8RannejvCSskJAJ9ETFCE7oLxZLy287V9ZQscynQNQJ81arrgCUn2fAuutGiUP9c91jD2ZinGtEbGRD9uc",
  "key13": "3NqLpFyEQzounWh6NiZVWCH4nXkYsYPkNAvTGCqy2Zn5kYjEYYhzvWb2JorsSfN3jc1zHQ7LFsPVEEHBoCan5hfr",
  "key14": "4EXgwdyh51AjqpYn8r5EojyfCTuytj11LMN4pXet7NeaTCZHLE4A58jA5daz3cEN1DJbSdCvNLsKWBF1q3AafhJd",
  "key15": "2mP8aRejCicvCKBVe73B9BsPEtNQYvrfAoxf4DxKXjTKVisw64gW4oDv8z35DfVLKQvLEYDX77tr9PdZdsGYSgdS",
  "key16": "xkfJ8xfgqMr3uXiuHPAvWf1dvX1VqrrPUm4doZqRzPsXMNb88PGQs8BjWwFuJ8NuA68F3je7GcVrcAS6jjUujNd",
  "key17": "4NySK8PGpBdRih5vdCcUox6Cug8jAVtGw3uEhgAa5vqrX66XdSwKMmm5iyFRbUNH9K3tG2DxJuu9AWw3XxCWutTf",
  "key18": "2KgcF6ZMBrrL4Zd5eBDMx3PgaKsJbCJ6y1kYfjZvE5CXQcntrxhMUtXBU11UqDVyVs8dbgDcgagRY3PgAYdqPFP1",
  "key19": "4Zvm99hgAsyG6E3N4yn5wmbjLfNGjjKifrcxFCeLftWFwfHAcx7a46SDDtH8ytiaHuqy6gWKqCCtCzWk18CpEuVt",
  "key20": "9UjizWu91FKzvWQh6PPH9PvioCT3AUzdQfXZnR7ZFs9JJ8KjeCmdr5DwVidstc6Exi6Z2Zrxut5KEjREKkGAemW",
  "key21": "67ZDfU8KGt38iMq4CKpxEXXyMXC6b2FNJ8UjwSThgsyDMqS6sZonBoH7m3oYq2B4N8LkZYm2NBjmxEaFgZfkUd1q",
  "key22": "4hpPAP8JTtWtbfoeXUgSrHUaAXJeTh9E42ByVKBQEGuA5rYaaZajJUUwkH3MUnNYEoiJChyBgoAAjqhDKjTLTDX1",
  "key23": "32rsUNmSNhGvnbxMP2STg3HHb1Mf4RpXphghBbwRD8Penm98usBC6HZjqrrVrLjvxkzRPajd8L4zbidD8XQoesgJ",
  "key24": "42dM2Zog7r9UYWDpA8t5tYorWYmxiRD2PtKjhLqxu1i34qhwm2WQYAyAJPpvA8WBj24kfvuPuyLUfyE1ut9oMfFU",
  "key25": "3GZBVqjyrnb19884VaSWBi8QurYKyqSMwjqDf5GTy2hcDZjJ2Zw6ToJ5oiQawDGFQXtzi2dcxUjWVo681ME9CDgL",
  "key26": "4uTfaojsEzbrXWMfNYgsm9UVGUWiZpypAFoa9ZLh2xDkPgxdq13SrDRqFFPvfpte8vUcVfX7fHn4NMcyzBM4WCcJ",
  "key27": "3cs6ZEjRvH7VVXgTFDLW2mDmNqzRY6iBJ2g7X2rjJaPb5oxXXFQRr3wVqHCEPgBWeAdoosGquPP43Gouq672EdWc",
  "key28": "UQQHJBtbMttxHjXP9jeTqot87fB6msWMG67ER8ocEPbbhjSuQqsYQeGoUpJi9KXwmkuuYnVNiGXt42MvBN3xrEX",
  "key29": "2xeMWrSZ3p3LxJee9pBPc8tNsxCXoRhdv1zJkXvx2Q3CUpViMAnrfvdeoX97mgrK4evSCTmhGDBpCrMLCqk1mwQv",
  "key30": "JrzBXo2hR5PVkXqwaE2R2XzwzdbbwVtcsufbyaqN1AbctyL1Tpp7i7BRDLnjspeb8WTaDW3sj7tULe3AKcYpBf6",
  "key31": "45rGZP6qKcKGUccwHQJ25xKKbgfa4UMpM7hviXR1DySTwYznzVYFJABbaggJF3jtbyAoSM1fmi8ntkVgfsdXvR8N",
  "key32": "tt5BtwAdsJduP4soWEsp1pzS4MaQZMZc2vRHn8uZDXpyFsCeGxECLymhgubSgJ9TypFD33UmZQPufWPioVyvVBa",
  "key33": "4ciyhTb6mRB4G3sz2xmxhYd8x6xcjULSdnmwXQvEYTRaKAF1RCZeaYoHHEBvsBJCwYncYzLCaQ7N6LYcwyNB4JBX",
  "key34": "3C2qeyH9qwuBP4C4UF31ozp5duPEefQuuBRXFLuj2Wz17bhWoYz266wxfhT7KJD8FWgMiXwbRNCggECPyEiEiQL6",
  "key35": "2o2EUEtzAybEAxyNsX5J6mAACCVSLvUzLherHw1iCz8T14PXY689tonipiyfXm5GKfi72qtaSPF4HvLwzy9zfQxD",
  "key36": "46STivtpT9aGZEG3jdQoTFXqZq9FJ1DiF3Y5AX3TE1wzN8QGUWcefbShgqkUbkay2BHmNuYyCE4f7TBZxycea7nd",
  "key37": "2abzfgKZktSRjgbJFEgMaKm6zFhaFbwNqE6RAxHGxUTdpdGEDXXo66bcc6SvtsbZpVj7y6tkDE8oLKxBCKBdRmMF",
  "key38": "43F5XN8SZKaEf1ZGhhMKgvxAx1eoY9vtpnZQuhH7f7L5DcbG5LKaKCcpMSJC9wtduAdRbTWtBmi9kjQs6QD7bgsg",
  "key39": "3u7DCtU7monujjWpTxzH3UZmYLEY4NSdNvvwUe1V4faNrFU1vRYtf2n6y1sKQ5vcDT8oGwihPVnqtY2Tu2bjFAdF",
  "key40": "4JtHxin5Gqvo12t6JUe8SrdWhpiBee9dUyLnb5DbaXiNqPcY8TYqGC1t5KDj7pNa6uwHkgDusQNMcuSYsFi5RHXz",
  "key41": "4Gib57MEJeH3Qk5ggQFMfKSPpj1cKxDpAW2LiJ94PG9KhBndGNMgvDaiBePUXm7CbCDysUaE5ztTbawZuXaqsQ5p",
  "key42": "3cJdqccn69FiQrj1tZ21eaZEcpSZSUcSXi6xEwsJSBxk3s72xXpQ3C9VmQCsj9n1JFEd9kmVwX33mQ39qStWNy6q",
  "key43": "3BdeVqhd1ZcroNwTC3BL935TShW9tWquGsQK9ipPHKBngXJfmmxhMLtR8a8eVMczkvU6sjUcaqZNNpJPoFi8auPy",
  "key44": "Rsg5cPz7mQMZ1nAGhbgSgARo2sPrwvBazgeAcm8wsZTYHnXHWbRqs3K3jBBftSGDDVgFyynYArb2DuQnCBW29Kj",
  "key45": "2ieM63hp3LdXN9EoQwrtwVYiKRXp84Nko3cTZjCjMFUUSiEgm56GSu4dEBHrLKfXYKSJNAFSLZmPvKDYvhQrGzCi",
  "key46": "5HzkihG3TjDNML1cerocHA8hFwXNq45R6dJmCtMhnRmzzqWjovbs9jwsKHq86Cu8AugbQt47pDJ3hfFbdV1MJBsw",
  "key47": "53eQCxkdchDVh6ddBmQDrgRTJhjedBdGuKL2ZHwFRPvGHJV3WttTh1uh26R9eCBYQo5dU7PBZ1BgZmpg1LnkVH56",
  "key48": "BeZZcG8Cy1eqYuqymPbPeuGAT6sk5PzMzmPayYZzPAqFiJfpLMZzLdmLk3DkMNDc1QYvBbNXhGUwCKTdcReVG1H",
  "key49": "5s3qeEF6S3FNezkG6tgEbvyF2ArDfHQpSBNAV64Etfk9foFZaUnse8sv35grTEyCJywDFaAPgXbLtMdqez5GiGpu"
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
