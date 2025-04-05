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
    "5a2fi1BgR5XEPgWVyFniEeY7LzAsyU6WzomGkXvL9Dou774NnrEgBkw82yPWfT4wSpu6hVKfi8pP4JfBhppjNwYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GFWr5nHk6QQRLHeUAVSvq2bs5cuGwn8SXE611hvbu7EJmPYfWNrA43cefGBMgGGB8h1qGKuk1C7PVNgpZtgdHTS",
  "key1": "2tTD7hz3YBAb8PaD3FFexzvGVSCQP62Z4kbTVAPsRcwyH88ezvsRuEmJpEzDypb3hNA4PRTfWiCevFenyvFbhTFw",
  "key2": "39cK1jNGMo1nosHgrRqLh6WbgVAQaGYHZfMRmkLHvrUQf2FwbnGFtjnPFs4QQwFExKa6emr21tDJbS8hTdghh9aF",
  "key3": "5JveJdLoETSXM6TnBiPBJWaNCVC31WcUWQohGRPrdKWUfVFsVfnC3e9dC2d8aMpqJoskBRVHYDKH8m5K5g2PHK8s",
  "key4": "5enBpz7HFGKCCYxFj5T1bS6axaYYCvV7RBFT8GaPMfrXrmFYHuefjzxYQFWN1R9y8s3Db2JmdBDAymMf3EVmDSb1",
  "key5": "64rBxXwrGPhxPk99kM7s78muELeF1T2ANvEUtmZdwtyZpv5UfbDGxXTt768AFsDxUsd33QQg39mkdCZbGRMcFcfZ",
  "key6": "52mJipdzTU6DJBkaTVCsVYj3WDcJGx6qSgNozp4oNaEmiNEJYMwS5GKFXTYzjpduGAjwPsHkS7TcnbGi3HHadjQ8",
  "key7": "3DgwUh1J63mkHinryVxu7AsiTVr8PSsKpxcKYCbAgJihw21xqyoLfM9sssGhfGyK2bvUpdwTj3u49FXkStXRhpoP",
  "key8": "4TCfezUbWpKCj23X1YhPxWUqAGtcb9dayy9ShEsZi7dWsHTHumbzq2CPHSyj5mPJbcXBLRM5FuR4j5P1ry6tYSZC",
  "key9": "2wffRFW2ANAARwxzvAzorUTabsrG7ruCJvfpWk6SGZrNoNiKRBD8BGtFHHAyycr7yyvsTPBPqGv3wMCjQAxmXrT",
  "key10": "2NsbfJBPULhSxxwwpGCVdoWLaMoxKshmvU8R6Rm3ktvVkut4oEbQ5Q1nzkbF6KvgXSKEmz5k6y5UDtEKnXpNf84P",
  "key11": "XrXgP3myjo4KhbaH2DRUH6w2iDJLZjAQh9FEWS9yuyogPHqRNgF9af4Rw8YmMt5ytSfQstgdrVJwhV8KzSg3tfk",
  "key12": "5PYe6qBYKvdmWEq5NfxZDybJonSqG7aB9EWog8B7vJ7sNjdaheutqimuHgSn8ZgtPj2cvchEx6QprTsjh52ZFNhC",
  "key13": "4wP3jdxiUVAohqvukFnAfEC281Q4Hekw3xf5Ptkpx9oSYSs5oHiXeXuzSCF2GinbYafad4aakCJJo8jFaX6L81p",
  "key14": "D1VUwzLU1CJcCv8LckK5JNbcAYy5qBcUSfVnxnZxaxGLbSME2vjR7haYUvdnc68Uy33FPpdxqDssbN1afzqTPya",
  "key15": "2btL6DJNrhj4bkhfo5r7cVPpcDmG7ZV8uxsgkQVpV5YfYrN41PNiff95P4J6EBV9EDtZjSJukYHaESaUSoSpcV3",
  "key16": "4SRmKQLGB1bZGorJPTZeGvHMw1spkcwyjP8uuV3Dr6PdUynPUxcKcCZnrmo8hdQaQWk81rEUW4nrFbBREhfBKjMN",
  "key17": "4bMdpbuWy4yNysWkNJd9q4LxP3LhVmRqEx9VDYhMfeiMVzpYyfevfw2EfQg5fDJ2PzBxqW6R3bbo9D9azjLW89ES",
  "key18": "v366S8V6rqw2LBZC17SB7TF16A74dhkKdv969CKb37UjJWFjUXg2gLJwD1fUSaMKrhtw3nVBpZhbxAYvtj5mj5W",
  "key19": "23gfjph2qME3nEyB8un4RxfWuh2yDzdY7jmFNdsFKTJmAeyGWRTg4sxFAQCMGMwgX3pHxRfG4cr6w5p35Q9KPbnE",
  "key20": "42EFPpswDDGEuPKbiZHHZnWY4MwAk3BW5ECtr4vuzDCTCxuDCG5EnC4nJcHR1oZ48k8kpFXZ4CUDPUiANXCD78R2",
  "key21": "65JP8PowHw12kKecSnq533FJXSq8528PCti9EtXLvJzLy9wK6jCUXaHndomSA6WUhx8okwtqg3Z5zyc2yCVUtepD",
  "key22": "YhBB8i5DACBT7SHGbfeJwoACTQC93uxZr1Ju5feyDnuD7AyXDmUTDGWYVXPJaCDFgwaV3GKZA54CEMoAJ1PLN2K",
  "key23": "3hpSaF4wHHqbUAUeVXbVTk8in2K77CwTt2dTBNLu9Ru4yAxCMuJiwpohV1z8cR7gkNJFLX2R6sxrmJo2Gv9spv9s",
  "key24": "3aUWav55uxcJtcfxmQt113MXxACpePAW21XeKvHdmDRJUrPun2TZdJXWrRRrpEbeTLctkK1HF3iAH78qp98GYmLK",
  "key25": "5q5RQgwc6agRHvNgSu4A5ZJDBZ8dZcrzTQDMGkY3ePTYKtST18xse9Akac9HPjBo885zfRprqp9GMjWJMd3HC4Pj",
  "key26": "3V6JBXc16dAiQb4dg5EHZzMD85nMxGteXvbz7npCsM6ffCtS3vf6tDyvFdEyKXq1oJGw9qk6HW5Y7mihvn2Ahsuc",
  "key27": "4dkKW6FUozQX2i3CVRN9xwytjz1fbbmbDpVB2S9kFsMsAfTXHtqHYAJLyzvKZr7tPyX32VPYUGj3Wqo9joRKwnTb",
  "key28": "59YZKrUJ3YhbsmdV7BncZCjX4SXk1BrZDJfRHrkgCKsST2fPjTvBnQrnZVakAhoQjwvVg7rDWw8pAnKLfiNEbk3A",
  "key29": "2iyvYa7mkdkJXqUwvPh4FtSwY36LUB86nVmWNvwZiukou4QEhNzAzMqpTStb7zXsK2KR6WmEmbkTJMjjLX7HBDsS",
  "key30": "eR4v3PmFFtd669mNSS68xsNeRd3R6TgaqwoPxQ41zuRCjzxJy3c8Pt84jJmbzpcRqtbnAde9cQBWEBEuWEPbY8N",
  "key31": "4CcEzFPevxP6eVDWTg7Zk3XPNdE9c59hfYwwAQgn6hZqzWUQhNxAZXVjiKLzUBew5C4bVkavHT5jgTZobaLFryNU",
  "key32": "2dEP6uAN7aS2ishpefYFYgwmsBMNTjiYTFxpyT4L3LRLuWFXwbzLdtMQM7uZTHEqjeR7DxFofNV1dRaojjTUWucK",
  "key33": "4H7K1TDXW8jHaSeUPJWiHq4nhBEBZsHMZnCa2LpQn1KQXGJDBu4g6proKpCpJ8oeGeXV4mxHndFsZuyJQzt7963u",
  "key34": "4pnnrwCvxo7MeP8UEDJhQe1HvMqsPgUgvtyb1SrKdzwVGynZ2gJcKhSGyDdvjRqWaAnjQRiiXgYiBJkTMFTznnrd",
  "key35": "4fUumjijTDBzAWi39RehVuhtiK2VMoRZq6QHq6ScoWCnyYB286jYhzbMWdqqPDFiFACcdhhJSiKZKaKBYYcoHy6Z",
  "key36": "gYarRkyHSBRsymZGAQPaT7qSZw9jSBHL3Tq2R8h86dxJ3tTV8owCWiG7jcF3DLXgZSvDHhvKVrQrkMXzdq8WVo6",
  "key37": "28JG7AotBg8kH7WzBP1PxEBbGBYTwJvYqddMC8Rddjz5EWnA2AxtEnWVNXdffJe9RKEQJKB6MyRxzVWt4utpBuJL",
  "key38": "4EhHaMeriYaKYeFENec1ut4rTH12wgjH2AELYyCqdCJQEFcVjCjLfJGqQSruY9M9LmibG4ygx9M3feCL65VRGmyV",
  "key39": "2LQJ2LsbLJvtibubWo6qCrXqhw6oMYXDJwrUTQdyBaXecS13egTQcomRS9kh3bvFnRx8Lv2suRupTc7pBhCqaX3D",
  "key40": "5iRyGfEJw7Dk1TkGdDVXW9jcGfL5ZYCMXEU3nKVnAwm7z1hmrc395EDCPzEufUiz8jDAG1GoJT4BiKWW8KccimVA",
  "key41": "4SK6pTKuVX7NbyDSoRUtzjQGBx2D71RR4i4LjTE4L8AzARJQSq1R8YU1zCfkouK5CoiRNPAYGs98AFDgvtum58ZK",
  "key42": "2NdbbpcNwMLUx9fEguhyW82BxVCEbU1TbXkh8gR1MxF8Yb6rLmcwQ37XRzwyzvvyGRXU8hxu4mJrTmma3YwLfoit",
  "key43": "3WBJRpkWEWPNT5qkJvCqejANAbGdmHcAA4reQgkAZBf46CPrE6rftDiXaJ6XVXAWCRyqw2HfuS3ZxYXPuxu6u2si",
  "key44": "SMbj5bB2UNANz6sBF8R21MLzYLGbANzukPNBMayaAkiRqPYHKkC9hkYU1BUQmue2iDNpB1YJyzJwJ7BSUAno3i3",
  "key45": "53APyuvEahD4eQSFPR4k4Tvjn8vqGbHbCWAdXJ88ooN8KQG3MckwjkTnU5Xb876j5nAaHzFLALt99oWWe9Ao5u1L",
  "key46": "25eAQwu564VoeGMpWGL2mig2dQyvTgS9Vtg1Vdt96Nugu7X1VbMjrCAoTBPhNdqbrWenDWkpNrg8GJDfwYRzxhdr",
  "key47": "3fvbhnDx8noHEXQTnVmL9bXTyzKAGKwLCcTcFDE4SXXpt6i5kqds3aZBJe1KEgmhipEGQNRd1DBJsmARxxZJHvC8",
  "key48": "34VCe4DRBmnNEz2qydY4N5GdjaVTWdKy1PHtWLwxYVQmisRRrtYqEHTRBG6kRxCzmmA37K9EWPhAtN96MoVSoG5f"
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
