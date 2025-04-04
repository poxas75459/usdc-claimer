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
    "5P8fphiB7EiTLdbSRqNhfyLqVSDEtTxmXuP4dYYPZRoGtMdTSmkbh6SnwHYkiFcAnoSVSpY2kGozSXwpLYqTNU1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wVn8tUPswXTyD24Lpbizwuc6X1jcayBmRuS5DCovb7a7m6SFVYCjy7c8kcQEc171Xi8hieTLjCQpHtVCKDsAw3n",
  "key1": "5L56hkVzCDdhCdmPVXS7i1xwfud4vJVMYPHGhwcmWbTgzeeUnniJepupGJxUhwj8hkrWemrfjMEJGiYDEikVeGby",
  "key2": "3gG62tSg9mUBUgknri4QDzhGsZx97yw2SZ1EuuTfCLekToN1U3u7z79UCqCmp93V7sRH2wmBiGYakjWfenGoifgg",
  "key3": "5ExMe8Ff9u8T51J4KMMWzruNKCzDmXywGvjzx8aKYHFjR42qTMZEnq2bVgSZ6dk6kSsbtjYRHs5pRvTHhxC7winr",
  "key4": "3R6jtkYaEE65TrRZQSvakNew6YNpe4uR8raT5m3pDharGfWDMUfhgnE8MYS8Jk1g8e7uMaLzmTMgxVpD8o29mNvp",
  "key5": "5LNpg6x3XGxWRZwNycZS4FCrXLMjqK1gJ72nSSmdbCYwNHATdzo4wa3pJzbV13itDag9uK48CAN12upmZfrQXFnN",
  "key6": "5cyAsWd3i9xvqpn1BvGvWKqjiCn3DU8xm2aJjo2srXCKXEdktRAzwBP3Y2sWu9z6zZLSfkfhbHkfpXt4HEWtEBFL",
  "key7": "4D8RqZmhbvsLdSSG7gafVBTiRcgA9PU5Vf7MHzLVZJSpPCqmF9iskrhSXBeAyShs6gJe5GvQnsV2jEtznJCiiJrC",
  "key8": "2zHnfDqQn2jHPJpaHbkDB26LNi9SjT5eVHtL1HQfG39kW6SnJu6AMUrrp8Pdmxenb3m1BVhcVWGwwWc7EVkr2ByF",
  "key9": "2V6n8ysEAuKnVp7itathxYVreJyWR9a3jD4LG2QY4C93LeFTCW2YgdiKyXB4BCcyTXXd3epwehDBJnnPBph26qEf",
  "key10": "5xrTyU9mBmxbUfpU4yYhduGroqfc632Aje8rcWqkSmRU3YzH2qwLqSkdsgzpCFHxMwxrh6kViYXYqU91dCChDa4e",
  "key11": "2VWnE1yCnUa5FXZb3tGwSEMBZ2WU53SQ2zxqtYseT4fSkiWMkrdE5gUHrW1noFWJVjkJgabLFPUTuX88GEtgycFf",
  "key12": "1sLHXyZB6kQTSdkPjXo7VUGw5PVnZHF6SrUDJPZS6vWK8oNzwBcRC2RqAUsCr2SYSjivvExgVDffxawUo1mQVCx",
  "key13": "4J9m1upEp9fra22DUFfLGE9DNgFvD1edZwQLDAacHA3472gYAhugVNeRTgU15zmfmJ1tftzekvzRGVUjtSMY1qPe",
  "key14": "3f9r1PPbV7NRn1sYg2sHFzZ6pt7CZHTh5Z6wvcKsAuDq87SLCf7BSPXsWb1gSZN23cYfjYi8GvRXtDPFoF2Td7Jv",
  "key15": "4ybWoVer5oXqGoev3MQBTJE7TtZncaUfb8mNueRZqtEKhKeMxnSDVmxvikR7Uajt72Herc7q82dfqBCKXX29oBRD",
  "key16": "3vtP46Lri1J7BrqsEJkACba1S5E3LUwVUbwoa4yHfqnMXQaQ4tYYyFyma8g5jiS5tNtbBbqhDRtHYWEHsL8LbbZM",
  "key17": "4vMQLxdDTeSh7ue6QT4iMX3DaRkRrrNKunvY6B8pGqBgNFC1pNbSzDx7AUWrVgipUimiYU7sQwLeBUQZs8C2wGau",
  "key18": "5KrWhaX2W7YUfXVJFdR5qEFFCamvKpxZwxbKAkSwn5faAqBqiHSsYYAtTnCpyayjeSrV8UWQqQ32BpfYdQxgDyn7",
  "key19": "3hspczQxDKzYWhyUDJF6T2kVETRoRH42nhXQLZzvY7sEvGvLVnawf3vp9M9DFwL5R8DFxQ5t32KjScpPjQ1DgrM",
  "key20": "4QoWLdgEBv8Pou9piS2CNmUpozmGeno8gTY7pBvic7gdSQkcNBsRiy1i61a9QSA9Up9X7z4DtJ5NrBJ4FwtS68os",
  "key21": "3wuSwzRebNraeCKCCncf7bH97XgRjjS6mvvkVJPdpn3RGfbKJTRQNFYjq5sx4qfsRmMay26a4Mvgs2WkZRqtT9VJ",
  "key22": "tNEnz1AZYFWD7gvGKD4sp9fuy4s1shkRracBKtqztgzqTTGTQpDpJp7C8EU43Hr6euJFwXQcfCUU1vTMPXcHobk",
  "key23": "4MKUAPa1b5gTMrWNj83JtLTghMpkHMc2cMWmXtS4SDMHtSMvoxxNnvDoJxAEXdqz7bUsvCnaqBSkgQCQWiSdaEqL",
  "key24": "5rXZ3X3rnyhjioEa9a4yP78CcRgNnWTaFi8DSAhy3nCFjS2g6e5XypdtpKu93QFeDFKzNW1ULo2tuXwhXg2Wmb8U",
  "key25": "2hSQGHqTsJcEcy5NmiwtpxKG8CvHqSMUaUaHmHNd87uv7Lq1NB7c1sxaGrpcnPA1kraWevkt5HN2p73KNjyiYCMU",
  "key26": "AmehPkbfCGiTEViDCkgWCsLC9whQ6f7ZoQEztub8Hp4ND3zEzfXVMYuA93neRGQQ3EwvY5tPU4FJSTqvptfUvCQ",
  "key27": "8xKLVj8iKDjtNXukPCr4373BEQaQtWZeAkSPiDwMsbx8qorBcigxvv7p9W5c5RsFeaWh9QtDgiCTuvoR7fP1ts6",
  "key28": "2EkUhTxWH6mY7MPDVFZSuUdma3gRXKj8hXN3wGkHkoXE5BsQPv9rnZe1ocAAKocrgu7M59NsyLg1XnCw3TRAQrsX",
  "key29": "USbvn1GQy5rvAdJwa6s9b9BznvuMvHUL4zoPvrBFJS645C8zPZDVyEesfK6a2iomnn1cjdNNrdyRNFWXFhhxTMg",
  "key30": "3psqdMnecw7Ph42BFxmHe43iCy6QkLhNgFnzt5D2gPCxPiVpCaKQbPmb6TgugFH3ccmXFrQKoANsSpWoFq4eeSEg",
  "key31": "2PcvNj4cqqHi9pDuLV4yDsgbGinwLQTfZYnfwUjnYMwYQvBqvxoKiVEF4AKNgKJsCGjTNMybsgkkY26RTKxiYDaz",
  "key32": "2JkP5BonjxWQ7xseUDrvj6KXWHuJepsgvkt9gtW59XsQXh5PpEprR2jfrngg5jwSBGaHd8ft6ip37rHDS1sp8YUv",
  "key33": "5VBWXeJWdRJaJP8kS7KNyiZacw4P5sRLRhSq11phURxig8bKq3STHHpSV16fnbbpfmZMci1awWeGewmDRJfNXzFo",
  "key34": "4fF8u7t8AMbJifsMEshuVBLrw369sPj5MrHGQxbzp7e6ZFmEuh97QpnJoUKpHsBBSaASR4fmS6DeWxtxi9oCCY1L",
  "key35": "5in31Yb3L94qboffjbRcCLaJcnV6sXhpB4yRLixs3c5uq6EdTaLt3kbDE81SayyLo4KHtP9qZd3n9YSLShgWYKix",
  "key36": "2JRM3jyhZbTbzrG9qZcbXNudWmPBnL9nErFHRxtVvDxtZrARv49xFQZp5Gq9er3r4ixSW1AgbRWUVWbMTUPhFxuW",
  "key37": "638Q6GRrdCgoBBPokhHiMBFsXjMkC7QhZLthGs4A6zRL9SpcjqBYDb6DKFGHemQ76TpVNdpedHTPyiVsm7iejyBa",
  "key38": "3HtaBWWB6PeAHroNR44DDhLLMETLcDFimMURmXNadiDGjjMtWLuBTWpm5BTUT6FjMbDEZMCLWBmj4fLfRMVarNwQ",
  "key39": "2QsN5qthxwM4SZkxVzU5WL6UR2P3hJs6YPkXuixzu2Pp1DYZsqEsYT8Ev7Jas2EkUA4izH1EmtNKxaPr1jEGCNK",
  "key40": "7GoxZrym1yUfaNu6BAdKNnQQSZf9EAn8RY8BedQVmBubStH6Qaa93KWebxGE2AZo3XizK9C8RxUMgL6ADCNuLed",
  "key41": "4PF7zDKw85Y54GyLKExjMMxhcNha9TznEWaoq14NmZmKoPuKpuEtnQwD2JdzCQwwo9EAycBTv6VLoBnKNhQ3JApt",
  "key42": "4uEzWnsAhcHj44nQk427RbawPytsijG1AUGuHL42mGtxY4BWtgc3opShvSBx1KjfeDNG86Yyv5mFtYw4j8vyT8oE",
  "key43": "678NLu9BqiuSmRbiPqNVHJeyJBKi7DFh3V9VRiFfyaZwAnhWCpg1ET46jKqgkUbf8erfFPHNhBH5PwgcJxLdhx8J",
  "key44": "5DsxaiWWBthypaqSSBnhmY3akaMedE9YjEv8jocX1wDtQSNskvzRVe3UW9GVpxYf9n3sRg8CY8DaNMw1ghQqGA2e",
  "key45": "4HUvbqtPPFwD72is8WN2DaFNs3XiC9EPpygtGpjW1TD5sDVFa8cFceseC7S34wnJ7JXjr7jLD9zR4hrwNAfzPWgo",
  "key46": "QJFSLmEYf9MYrfzpPxpA27EkvfQRH1PuiSLXtoHe5J1miDVR8RgRjdgTTJ1q9pgwFouUqLr2QEiHdQKELRXxWia",
  "key47": "5h2bHmLcsKpWx6r15UKUTVn6HTLjBf5igrkbWXcVyi4SCJVSixWERZ2FDTyU6pVPNuSZm7c1Bk6PDvpC1AHngFDo",
  "key48": "3gacEM1PPuj9iWgHU4MmVh2zqCAPTpzGYtPg4rumETxr847wchJ7zufjX4nowGguMScV4fNjTZQDHuwXVpcEdYk5",
  "key49": "GQSBK2vkDNGxDErEYpduurGgQZVn1cDSG9okwZMfuyYEeVhdKgqxMdipgLLg7in1m4KhmAiG6JnbRqbWk38CzrA"
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
