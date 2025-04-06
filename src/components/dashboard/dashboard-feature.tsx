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
    "5kk3U9LiDSoqXHA7Z6dhUhkhcPAeMZY3w3RW2VsUDvmL5E4b7kSdLvdyvqJcf6HPEsBiEkYSumEwt8jSeqihsmfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x6ufq6cSsTBfucW866gfpjjpFD8iGvsPpRJ9kpXqDLiKQecpucGNrJzNgrhDLRrwWc6Xqu5sE3KANA68rpoXAKK",
  "key1": "XSaK4yGwafQHBKmJWsbgxB4XFc1cVezjCkCw6p457qx9PKFrS9jY1JWWKJfVFDBhJsPD8Yr53YqZLmECZfCeKFe",
  "key2": "2dQTxcHGUWNcJhzZND7RAvqGbqezyNhyD8vk9gFT6SUVW7gPH35qAbgm1yQmjTDdWjo1cXX7AqxrXcZRSSS8qcDy",
  "key3": "5gzndMzyrzN5PJpDaohsUPSs4sFfdxupx5eiy46EKEQZQUjnAXvxLdTy6NgZ1ZyFxqAR2VVr9X5gpb5XqZ1DH5xF",
  "key4": "5DGvqCA1oHYW8Af8DzYf1MyxMA1Y3JmKmeqFrxYafuWW74x4n9PcuSWr4FaCXtrJjH7rcw6VaBL2TS8GATBFy66E",
  "key5": "Di1o7mLNxcY5Ub2b51ncLmQTWCzmBXuNgz1RTyQQJN1SRfLbyjXSypgpqVZfRRcU8jiP9FuMjVxjDGLDHdnpCuY",
  "key6": "3qwQiGVE5dTBEFHYvhXCY4SkZHKSyEMpbMWKDctpf5vUDiVgDargYyrxjTKDvn2VrdWCDFx4y7N2RXmghmDcoSLK",
  "key7": "5DcqRcfUqJinWBT6RgB8GgkHCnYudn4vg3Rzn96xRBKptwkWhfFbUyR5ToghdwqdQCBNU28daTy3jPdUsW9RssaU",
  "key8": "i4o9QxWnpFV4TXvkjRHGwwswF4mKfhsqaoRtWEcs3buquiunpQsUzayFscDQDmMMVrXu2EqUmVevg5MGCeXWf2s",
  "key9": "2FESitrx2tU8kisV56F8durNAxNbwLKzBYzaabXyjWWTN1kcqQevZJCUbLQKRVgRukjFKAJ9Y4yMCochkT22DhJC",
  "key10": "2nRYmisT6VMtQKU5oAvf9KWjRxexq87ENYxd7KpfQXwHRGufRzwU5JJGRb3QmHM4zxR4n4toy2BqTwAMhALgjTPz",
  "key11": "EeoLjv3YmTE3MHso7NzfE868jHrrDBCScwyDs65MnSgD1RAyW7KVMnDcPb4wGd2ZDBv8uUiKfoZx1U45et1tdbV",
  "key12": "2L24P92fi9dnTEjuaejqmYfSHgCjjj9Ac7packvWnrj4jaWgSicQX9t6Nizyfn7iLPdUd8jREzTf3kbotpzNz681",
  "key13": "4Zk93XSbbvToZ6pKki2RCz3JMCrAihUDNmCC9PCwFfAzukmZo4sF8DWC5jGZ99DhBKm3CXF1TAcCtpvJKBZqQjmf",
  "key14": "3PT7avFDp4Bgp6voY6GQerWqXg3hVXoWQMLNr6UCC31AQrCQAyGYTEpsHqBvduzKtdP7fX8ZmMeHfdhSrS2S4J7p",
  "key15": "5p3uRoSdhk76fErR3S31SMVaQ3qN3dm3M3wWX6CXJ1bk5qVxZe98FU9Bfq89xNnChpFG8H6EFjt9kWv6WoVgsPLS",
  "key16": "hAX3S7bpGJ6JfvFPkQyscHUjPfAA4sskSbw4Kip6mnM3knXQPTAhDw37DQj5cBWa4aPueYAbRcBi8cqqM5Ut5n7",
  "key17": "3MXoCHLDQqvBnvwDAcvscV86ohLXzH9d9vNCwgVuqFtq4sLHAb3w9gqE87J7CHmjj53Qvg1shh5YuKD6JUTMKMQk",
  "key18": "5XdyUR1Xq4qRVmTHu2jyGyQaAqVgJrR4myvp7NdUEijzEEtJTYKoc6bPh9ZPfFMNAeDHyE2PmSSb8n9HihAKPVwD",
  "key19": "4qa5qnnN37MmJD8BQkmBvRbQbjPx5jMrPtFJCyqGgE2z35tornirpEoNmHJhhzhYnpxm73p28m3exfuc9JGc1Dfu",
  "key20": "e8apEheZWXKQxT99YfgHsg9cVcVtkVfGU9hfsXDvzV92pofwCDMe3XBH5GyvPSeRSzY74vVxwyn9fJnFiZ2dgCL",
  "key21": "3t2ysXmxfAfQGkN33rGnxabMX69pjaH3ADzWUwks4BbxHwCfKkNBjHmNzFaahbngFTdoFshMdpVfKpL2m1izoTe5",
  "key22": "3Kat9SB63yaa5LUZWoqi8zg5eSvr12dzrB1KKv8XkEgxhPecdzKicadmmRPacsNEnjZDsrYZ7wkaiXe7k4QyZEbJ",
  "key23": "5FktVstXofVqXt1niBxgyZGpGY7SqUwmtWTSw7W5DsqZKMwUkMhCMj5nZmWQ41gJk9cXGdDSqypwK2ysHb1fsTEy",
  "key24": "5ydsDfL5E5xLA5gU253whkFKjvBbNbvRWEiuFDdauVeq94LSFbfgcKDRTctkurpeZayFYjNqjdNgYSHCvzR1p99w",
  "key25": "NXeZifqLu67aNtPBTm5vCUKTmHgLAaRdCUHaDf98P9o1BX6JBK7gXRSsgxyagvGMhxEBwofk3jGLyhL8sjtCX74",
  "key26": "4Ath9bo1JVVLUhMiuCwLJnD5UTYNfUvBiNHpSRVpbpVtEej2o7z3HpfD2A8cdwi24QfFLKCLYEtUWSwSMBTk6wA2",
  "key27": "7You5xD3DwXUzu3ZnzAGSZnyoBoF2pZ8nCPDMf63EnkPCsNVUa5yfkKBBbHyLdU6ugCc2Y1HigHGQqzrt9uYoPJ",
  "key28": "3zELYTojLxsz35rkn6wvbxkj8355bMiVEg8dtTmDLXEYxXQB6vHDAPQSaMZsGgzxnVZf43LbNeQrBumGxby8V8oN",
  "key29": "3HeuHhmCTiC9KyFY8msuPZQ6PfVLMYsvq4CDw3yRDQA9KorqmYAd8pYZtYK1CXtX4czSSrjqCmdoZTex3uiep6yp",
  "key30": "5ecsQQp8NPfxzBcpZM6fWb9zbbZ5Q5Dur9j3dJfG214crrDikmykghofFXawFs299cXLXm4Z2YSEKvtdfEEz7eZu",
  "key31": "5FuvcnwTqj7haa65qGe5mgPMJ9783FkjSo7Cvm2wL6SEGtf23iAjy4N9CVg9tFVSEGFaZhd7icJvYLJngSCYTKdB"
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
