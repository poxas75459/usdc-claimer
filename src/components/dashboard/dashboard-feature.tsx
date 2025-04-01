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
    "5Az24mpTTLxeoGvnnxYehTnUxrHX3Nege8Abm5Vkd2DowA7LgmHBj5Dop5b77skbT1PM639Cyng2vdeuLVBaWVFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wjkeMSnsS2yHPGXFJZXUXbnD3pKiUtfVwHZ34TwcEQF58Nhm6QzDtf4eui1uzJdeAe6KJtrvFjbpm1rTsMhkDR9",
  "key1": "3uvPNKGT4awXoHd8bXVBMxhF7v3XEBrTMqKKgMT4vD2saBQD8oGMPkKpyq8JJmrSQoJGmpL3jGr8WDCaEuApmvEX",
  "key2": "4e85zdeXHsKfCAbqZCHpjG8ifRb3PpDDLsAn8HZUKnBb9xWM8jkkrgdib5GoAu4mKuBjRHczwyRaqMhT9wNvypYH",
  "key3": "46hq5TyA3gY4RwT8Ajk4XNpSSEXUSY4cFdebXaAXevDeZJQDuahHCCj4bUbPxJswXrexhqP7641GiiJCpv6adyj1",
  "key4": "52yeMhR3zwPnBuQgxH8vM9T6Cg1ZHqw7UiTHFkdujcz21RgqWPCvfyPMhuaofdLkZjDQFTg2ANNGptpSikfDSshg",
  "key5": "3jPGuMJ4BRxPBek53Bt3ZixGGj6oiSh7a8CrGedHW5QXzzcoQq3fLVQ11qc9rAcTh6o6aHApoYCbKvczeyNE8Zmx",
  "key6": "5mmxY1Bct12xA5g1CNNMcfkNVBVNR8yNH175TiYrtgmPC71XZMYQ12J2SDXp3fPG8Y6jUAzxAwFbTFofkv9Z5no",
  "key7": "5iVGQeVoFvfZm5DMGeJsodiDrmAZKSLt2ErWSjMuYd9JRKWKz3RVbwHpBUzLTHgferZ2apBKC9AcMHqD9ZeDpj7u",
  "key8": "8mnYq8nddCyRcLzN8Z3MY1Y3MfCvfY37xiUWMcmGPjcAHrLbDhM4ptDsemcHwabJydmFS4TcSgssymZShUPqMEB",
  "key9": "4kCwUTpZBuPCFMBH2LdWi6oC2a9hfEjcKGzL8Cir5Kg6oaD4bS3WMTU4QmQcWGoDoTWoEyL2x1oyM6MD7Pw1XaYu",
  "key10": "t1MhWAc7PfdtjpZrR7qSj4mQ27uura81QbXLx1M4946a7twG1b9EK2zXzSmnMo6EBduVon3WR4wF5dqa3uLT6cE",
  "key11": "2Bfha9iTm2Ga3fTaLcSxUx9ZgVvbezMgvjqNsm7McYLSbmsW49NiuGZMzQ9ChkiYSrRnv3ujX7CuJnCWSroTiDkt",
  "key12": "4HiysN3VzkPpBat9uARkXKwTuZt15a3Yx6Fd6EaYftRAZ2WuXXkbeiQq347zwVB1F8ZtQqDWea4Rp1jEBHjpDMsT",
  "key13": "63M6RESZMpJdaNxG3PdxkhsKWKRZb4YThjbNqsi6LG7F36ghqBHWym3DdodsmZZbMJRqiQgSCfgVGZabmRcYTPx4",
  "key14": "T8GGTApaysdeHCurgpcFKVVVwD1vqZ46t7tRz4o3ZMnLAJkMcwbDSZoYVfXetvkvGsJkhdGrDVLB2Ya2BicFtJq",
  "key15": "XsA3FoC5ixyJQfHDoRWiPprCW8xoWK9B72Pqd2nGDo7Uwvf7suSxnQTCMc8U7ARRLCTus3GbQj2CaYRYcCooPfb",
  "key16": "5d66RDLGbyzi6SxvJYiV1p3pzd5r7kUuXQ2ZKNbkNRG9XduP1pSApP9RYKHxbDnMXQxfQ4R1bCw5DiBQaNKkkqpJ",
  "key17": "pQxxGtP7bGb3xpH2smq3XFdWp8WGMUkhhY3gcHVBR5nhGUKXuZDrzw8As7D9WFdNPYhi5bJPEhQhXTFrKg4YGee",
  "key18": "2v3Cm2aaQc5WCB73jhz7mv4RZFZxiPd3ZTPPBpjiKAffbHetAEABmjcfooc5KWBTGL1HBSA2jTWassSiESp5eVuY",
  "key19": "5VhjyPjez1nUZbP7H6xAe9BuonaPpom36aLAXGVx1Td9SDQz1YcD4PwPQdHrKS3Q8kkoXq8NxqzaMhmurQq9Kp2D",
  "key20": "2vYx9dDxMT9E3QwYpDf22arAzkhUW65RNRv3SLMYQUQs7kmBMo2JFfm3QvhaLyyFsMw3abic8Zm882DnyJvU3Ciu",
  "key21": "3SEp49sw8ACmBNRTTccNhskPmhcPyzHijMjzP7NEftBZN42Xopg5pr4v8x9aSVscXcXKDx73d279EwbTPq4A8QGz",
  "key22": "4TAM1wmtoP6rWS9eusGYve84DHDZnMWTS3YJTnqNadCKS1FJcwsZN8zKogzzgcuZoCZ6YBYLsTCBmXdeRYXbCGG3",
  "key23": "2ehzMxxNgAzznDT2iP5S1mjs1Qaw6maVvV5jFyjT5rYWpUz3QY2cV36UqNTLg6fmVvRYd16YkgBeQw9cdF3zFVsv",
  "key24": "58ywCVdwhKkX5FSwmRa14PAkeT9DyCwvJdtehuWz1t3wKfbMeKW8tQa7rdb2ewi8iRD3dzAgRtFPC2rgDYHMHRbH",
  "key25": "5xLmdfKLd6mzSFeKm5FcUCfZQ9T54jHpuRfc1goRZcQ4tnUMA4bL71AsjviKcesb31aTUazgtSgMmjDCibNNgVCJ",
  "key26": "5xohokbesyk2arnQgyYBcJJAVuXQiTfib4xEntDsK2jKodpqaFhMpdvN8bNqG57tK5yt5TMWCNFCosf7ok6Yy9v4",
  "key27": "5ST2P2RYf991Ti4ugpr96mLQH5T1QjtJd1JMktuLKfRZ5XWLZZ8tyc8SFUhpnzSZJ1eNfsJ9QiEpNdyDjvK8NMgn",
  "key28": "37HusXDzPuWqwst39sYZqj9Fn7DK98ABHEFdrBwSPbdaU6ZTr7DFhg9Mx4T3RVQiVTFjFLm3btJzY6v5A64UGJzc",
  "key29": "3UZNTJ7dZ4FTiu8usVk1f2So4LtVSjRST7fmw6uvGZHfhMJYZNwGcWUNChHhxL6YU2jVE16uk61X9qJqiiS6BXRi",
  "key30": "3ScN6vXVToX5M3HCKnrMUw3QDjQD6gu6YrJA4rxgiwHmq7UkEyjvsuPBH9sbPgRjNEbmKPazeXY2aHnViMQdVUu3",
  "key31": "2MoVDpQf3gczbEJo4yqk28UwRxkUPQKkSxiJcthFVVzhj5NYX1E5fjjbStE3x3TPEGG78Ja3yNQe4wLnCwPDbQMd",
  "key32": "3g2xKtjdh7cHQWF3MTJfWGuSqEMjwvBR1xj9L2N8fPx84s5zrV4Ydf3DG7jUqmm243iPHy6mqTuEdAQuzbnEH8G1",
  "key33": "4hAN2V5eJvFjALn9ZqPK8eFqW7aJn153B5yfbw5FBamu5mUwF8nBkUb9La4ghhC2nYaTkLkPqdQ26jmFDnmqmX6N",
  "key34": "3i7z4jQAbh3EERL3Z9YDLddWW2qUtTD2AU1vPvEbBswNqFH5agEBFrNpnJ4B8NbbkjxC9j9QQki91w1ECcTfKRXG",
  "key35": "5BWqwr54c27PHM1k9G2mcmZs9ttY1vPir8VxhojaHLpyWzvKiSf5FAKnXGMLjt4WAbLJMXBXj52dgp732ec1QcSt",
  "key36": "23NS9CgZUs2p2gcSZsTfh74wxE9wpkArvSnB7vyyYEnrMmVQP1uEnbqMUjS2UatjeZRMK2TiQK2DychwruJL1z2E",
  "key37": "4Xr3UDbxcUXZgX9G9Ct7cf5A5xBoUWxmXG6GTXh6yHpTARoj2oVYK1qhV7PNwmuva4EeAh5UMnnXTX67rcKnXLa8",
  "key38": "4SZYqXX9zJCSkRiTgfcfSYqumWq81EJbLzSqcaPbkr52P7HUCxJ7fc41DzdLckCSNXdniXcdrsMHuEWErwLKxuHE",
  "key39": "5aRJEouK46NfM46c76byMv5NaGWvu97YA72VusycLYBLviRcXuMGzjYFZDsP7kVxDHh7C8jhGH1xyJybAhzJ1vFB",
  "key40": "3eRwzgdg1EyeBnbUW4excyrMZc33xjRKCtQLibbiQus2PNCytrX1fGHBW5BMLtnTyPtCh79qesUit1tbsY9FAFU6"
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
