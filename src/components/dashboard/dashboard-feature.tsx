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
    "44eFwXQ8v6fhdyrSTc3Ut1Lay4n1cBzXZBxhj98RJu9sc9u1591P7FE5WNE1o4X7HQQvAAsMbT5M5Rzo1UhkbWtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gVPx8428oLUvz3wPxRVsSodJJMyeYH4mq8saDLzD52LkU9VPRoh1RkN2VbRs8pRkhSprrqxPpLe7tqsHsi48FoV",
  "key1": "ci2rGHP6TwxCNtqj1XjLUZiQUtnfb3gChnstzGpYnpabdaugCPnz7fTHLTNFBKBUzWmydJd5UMqqx1CFYhRZxkM",
  "key2": "4Gm2xbm6BUFCfJyBYThsomZ9VnUdSyic8qc9uhGzWZbzcEsSUESvgvspZfzA2sfhH5LQubKXQiM6MTCPTW59ku9A",
  "key3": "51rmbuoaPsEQK62nvywKerNxmMRGNvEFPt3P1oFBbQbwZa2J3n2zjWXgj3MeNZEbFKnzrjpcrTcnqN55jadieSve",
  "key4": "4Xjm9hrE2sEtuXVo3vqc9okqxUez61aQfWKW3LqiLGTjH2Fo5DGNvoRnbPxZKt7rtb8Pxa7hDKjKXJCRCNMs572M",
  "key5": "5ZYWJcv3e2bFKWeQkhW1bXtWaEjdkuHb5p4EDg3RxMvijHxuQiXU5sXaF6LejPYquAYYawZ3TJLYVYyow71Fw7Ry",
  "key6": "2zzJTa6e1KMJiJ28jRUGCbt7Yh8ZxABk7RdYKFDSiQ6M2i8UgkznTCYTRLWasLji54nGP7t4bkUY2kxo4XDR3GyZ",
  "key7": "4y1LiveW8S2VL6zoooVsZx5USEue7CsMnxKYpQ5SvEb96UfzS7yGJtyULSN6rNgZCHTExRn8MkwuUdb5t8QW7HFS",
  "key8": "3jyPrheU4WHKMnkLx9GATiSg6X5JqZ857BcDmatbrMVS1GSJCmQxeBiEaRXHxe1ZJ9eiug3s5Gjsucypg6xvvn9a",
  "key9": "5ywXrb8B4yQUCXtKggZg4crrFKykjAQ5B1TgHh8dwsxLgjFYavL2HcduZmfc8NXNsj1NDUjQhBqhHqT9yMYU7R9R",
  "key10": "2NdmfjMdS1QCRqNurU7Xi1NtJw5x953mk47HiQkPB5NWzCpBxHvTahqGjWjRLJZSCNoAt6YMJGEzeckhXxueh4gd",
  "key11": "M2M8S13Jm7QrKEoksUDpNTPtySM9hmUQTwrEYWtDaUNsoMw4S99csk9xWxoPAzGzoCpDGPfdowB5hxfxvpbHfXM",
  "key12": "rhoSnzv5XFzwCxRcVg8RxMw4MEayX27u7rC13AKyFLK3eJ7eFqvF7Un8yyhf1iUC9W69zz4pDyr4FR1q4vnzdGL",
  "key13": "4qNbdnUZx12281CeQRQtb7uj45YFZA2ZXLZ8u5dEscBLhMQWKqxPYPYjFJuapMrhrPvBdk7x7d8G339guJWmxSi8",
  "key14": "4nypTyPoWke9fQ2636W96eqYr9H82bjmUTkY5iG26cEED3RSsHUbCTGrB6YaUCt7BynNriZ4posV7fUz7whtgnPh",
  "key15": "27qyjNNgdcMiMX6F8FhwdcnWWDFB8yiC31NPH9US9semryPo5d1Yh83XAwVhFDRsoXDtTi5Wqoc2R5TwbqVYVDdZ",
  "key16": "5DcoMisMcyquxQYKWH6T9HcpvU1uweJShgkQRtBcpLH1UcoHoQ6Cqq6hkP5g8zTGUtzEibbgLMoAb1TLbnCTZSUQ",
  "key17": "2odKVQaZSTJ9SR53Rsu1rZURpkRxyRVKbqvu2gYYhh2R9CqCeVFrUhYZAwzA6tHkgDyw85SNbqkKbgqnsZ44oBVM",
  "key18": "5hoo96XdS9qRVd6PxMvmtDfC8QUf8jYf6EsZJpGN1cSyFjcaXCA57d53ZhhATHvxNyxYFqsKdPpRz6SS3KEoyg9z",
  "key19": "3ZXZkhrJysT9Vd7xJPibmkfsQ9AzeBe2tbH8WswWCzQdoaAwgn6vaFkwHiW4s6yWdc745tWfPitKphxoqEk68AJ3",
  "key20": "2bkE1g9MEqjueueoi8xRqCNA4qNg9WpQEGKFSUZzorfub8yyUmZj2CMcLGujHgEbkvvruteizgWLRCTsgRLA7hCp",
  "key21": "yuHkiL2eXgA8pXUU3XFPUsPd654jqakaH1avcvmXpEJB4xxHVJH2uXDruMoWR3tvMpKpDv5jC1aowxxZXAW9Nnt",
  "key22": "5iBuTATc4AEBgCkdZ84zwxCCpTne4uX63EJ64NngLr7EtBaZZoFeowshH1h6SB32KjswukY1QnTSFW8AUX6goxmh",
  "key23": "653o4ig5KrdfnRQvCCdiNVyC34qd4iN9JCEmLz3WZNMqDKuT5zAVRGRPHMR3J5FHXVf9btC12L2EcZmqXEgV99Gh",
  "key24": "9epCwVExxQSNUtFwadaAKFeNifmvK8E1z7QGVUnttettNM8KKeY1mEGRPnGLmd6ShFSFYrpf4aGDkpdzSzWWWV6",
  "key25": "cicnf2vzPFQcTNVcn8hbL5RGUr8qhVCQAARa4o2bBpvurcurLNzPtKABVy2UX6UfNPnesUQ8XYuqyDbbijpvtjV",
  "key26": "eqzuq368BBbqZ9BCVRQjwU7bk898itzcQ19K5eQr8GNq7pHVJ4qH4ewgf45mLh1FhjSup79284gcoHG1bSL1qNj",
  "key27": "4zSDVGyfQKAKRPn5nKoscq4Zeky4VQEkJ6AiJm5TnjgekScwqqeUSqKYiqGDXASU1urmvY781dcUwJnaFJkWwfQB",
  "key28": "37nTnvHYePmNUb5uCSs7DaisAizbpNWEaTpB3hfNzcXnJgFfFxDosV7oD28Ts7Z6v1ECa2KxRa2v3sYuy3jVcfDV",
  "key29": "3rCuKdyd6BMfvKkaekRdX2pQRSstgTbWCX5Fojz41BSzAie93A9Drk7R1K1o8b24XewrLUmrR4CoLwf8FCyN1ZQg",
  "key30": "5inkKZKnVzsXidhCn1zL22u8KhAPp8s5vRB41s5qVqmN1UETwFYx3wjWPom942EnVcn5V87tc9pgQ49auCr8Cvzw",
  "key31": "3ZZox7cnqsTGofq4SRnxtpQRDqKm4yaPe3GwQooKYkifhkF65d2fPPZQmfJXzqvgRwpBtHqWW39tVY5fMj7RcnxH",
  "key32": "4jKsqmMSBCpA8Cu4QiQCJKtvnH7PvHuYJ2uyrKpaA8TzSXR1FaKAsSe311aAurcRLpGXVmYbjJoUz6YBDkYtAUoz",
  "key33": "o7RcE7UvvVG4iidsCBHqnmbWEPSRkjS9jN4NcjGdAM9vCa38RdE4utusNF7piFvSLs8TMtJGc9hWXmb8V4DJEag",
  "key34": "3D2FRGL7ek4Zugg1w1MtX39RYFCjAkGvkwprs3ckWFHfKvpeAedNdcDVvL4NemT1CoxNLM2FCUgB3sDhwSCM7B8G",
  "key35": "5tq3bKnLFmHb21sT5Yh1o5fHZKF7373Ymsb2oNRzowQNzXUxpjoe8BVcdhHkxNPRct4o1vpkRqQpTqgS1yeaffiH",
  "key36": "3YW5V6TtQd8JuZqzCrkKCujwWfh8fxeZqZgem5vQH3wCVyxdGDmtDsadCKTH2P3LegjT2fMAccbRNjBjvVmrkcu1",
  "key37": "52Sonwyz5XPUoRG34Je6HPeebE3qcmdqGqqg5orsB4xBZV7ebsqhwd7WNWkHyRhHseEQEkwd139U9iN2V7R9BNbu",
  "key38": "9DaotHCzznshe725ASfH3WhsyCdyxrwsuv4GRBCpkrGfetXe5wS2CUcAeGi6hPcerk9iUnVgJwxa9tMequ94X6F",
  "key39": "3gsnyLCgwojFuSDBTWtSZJ2QPdin9DkvFnDEAGZcTkTSCdzb8CyuDGMbNa9GDKjdA9RF6nUknxMZRAwZRcqm74sW",
  "key40": "5JJDHTyvmXyYJsovgCMbexwcaAcX5MEDoSj7EAwHLmQ4D2F2gY5n6NV6oUHXdrevJ8dm2q3CWeVuGKPQWaXdVm4h",
  "key41": "5Md1wxcSR95YAksP9VAaQ2paBTs3pqhwZukFdzVMXHij2xVhLrUPXBMZeYXv5x9fqXkqgijU2QS96VciXMCakK7r",
  "key42": "3g5Zr7wVBpyXX9n9Gk3mQusCAELwhqw7ZGJAhquZ2VusPYG8D1Qrca5eStCVBoDEjfWg1Wf4k9s9w5M2aZZC5tov",
  "key43": "46eie9qR14kEtiPu4CBfuEyrtaNp2UTC8nfFfB7uKAnetrcQnpaKQVdy32xvahuEhgapuqP6wtWekyR4FyGizZPn",
  "key44": "4qzq1p5VUpnn1KsiNvGtnUGE3XD44dTgSdWXWSkrEQ71meBc13ntB4sVyffusNekaXEQiVPKYgXSsdcut9AGY4VX",
  "key45": "3j9kaPCmQq7MhMu2Er5gzmpUWd9oAdQvpWky5YyyDVkEeN1CdaCZauMvg2JdQD5AKpw1N5JpuBkhBnvSMyG9cYZ7",
  "key46": "53MykQ3pNKL8MHSUJxrXGC4AoXMkkfzcWeyWj3Jr9u9Gdzgpj8NN3asT3mvekJdADd7h7pjYi4uwW144rExpCKUq",
  "key47": "3DxPr8fFC8R8hMnTunk6HkkBE5Yqrq8NrNuQfMpPFHmWoLt9qvjsNZzkSEkcKNj7pF5wjeFNqTrTiwyyBGx133Ts",
  "key48": "2iNydRp2TLZHKi9uyCGkqsJpC1CZGu2MGoFnyKdZ2ECSe9KuEeQGdWQzrzY7M9CmQh3eud38TqNXFJctc9DLGyHd",
  "key49": "2WHDiFTNoLHptHu4SaW5D1WaXy3LAp1NPjnStFiR1T6uhRc7vqYs7sSyjsZsAC7ARmKdywDcrfcWqfMVbzt7SX2X"
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
