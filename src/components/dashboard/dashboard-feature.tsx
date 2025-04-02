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
    "4zitdZVC4Hub6pr71yeCgQXeCv4yGJk4XAUDGbHem31SJHXRaJtrwGx6xxbTJwxii1mLGKfR6CQFTeACtanN3axS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65caBXSygu8BNMqD4vCv5jTfCoMf5M9DzaoLVH3anLu5RRAh5pDuWAXmCbfcWBVxxWTV3pkJFvVKLr86MgSTs781",
  "key1": "22Y2XYN3FpnDGV6fU73SojjRNSdwuZzhKJxtk5XmZEyVndyCcKwpEHL94tk7FB7bhmPxQriKak7piTfijWozqFnA",
  "key2": "KJgFPemHVscS9zTYn8hHBSQX6mPE2F3W3VsiiXRrxyxY1tPLtpmiTqhepr9D5fAByEdrq5mi5kxcx33G58W8rXX",
  "key3": "SjRJoUqojRMeCRpz2pzxYnzjKNMmX2Uss6SGWX8CNaZn1HNg6EWjFeq7SsWtND9hCojqL2jPCtNkZ3tN3Rd1SCp",
  "key4": "3p3nLPZNnff7keTWS6HnSgtw2tfC7hDuz1t9zms1Et9QiL9dD4M4HoRPtYbRLTTYiYrp356MmrW7jEEAYx6juC2Z",
  "key5": "zFsSAxo5T1FTDGe5qs12hWRRqE4jUGndJX7qfeLe5NGHdtqCZup6HDNfUFebrWMLpM9ZvfXNC6dsMBj2VL6sUTm",
  "key6": "35GmLBB3eHqNbUaX1eL2jX1Cdd1n5taFvrBzZAkdeLZnqrGAurmvMVwn5vtA5uqBD4bppur22ZUfPCfpjodJPkUT",
  "key7": "54q9QcytnaaQTvhZjAKobJhvhH46ZBqFbQ4qNT5get6WDRooeTaEcUUF3kHziGyk8L6VyQkVi7fnptva8zz7LSmm",
  "key8": "4YK9bdt6VZeKjGiyyJH3YS2NJ6S9VU9ZEGc3zRNzomW1TvJSDNzZM5eaEY2jvEGKXSuwgTd3Yj5SW1QNZEHMLpfZ",
  "key9": "65f88Ki5KjQPhYFzcZp1UbTgvcGC8U31GHaKBMkrMRNQDfwyqASDFk7igUb9eJUK1bVPVm3bq2RM5qj7UiQ4z2Q7",
  "key10": "vGQe2Bh4X8JVTWytmpU3sjokWsBe2GrcbyMGcJpfM9FTFFYq2X3vDisTsjaH1GcpxJUmTHbwQZANk7NHmpi2fTw",
  "key11": "3gvxUEpeRU7Ygyv3RJKyVKMUETLMbHK4XYJZbpaLgwfkAywees38fgNLyrSjg4q47hDmhGMqwNZDavg8n8XThyFz",
  "key12": "2MkC2pEvFrog41EzUYxM7jydBn4dbLJrvADc5qq3AbAznijfHFDiisvnEchiPSN7CEMi1gin32s1uygGQvuFfURL",
  "key13": "29nT9nUTLy2MnhanACUSyzAR2A98zGLzCRX1HCZUL43rt8w8DbxJgnbLKR8m4XcpGUfXdkG4UZdwBdGYvatdTYCM",
  "key14": "3JmkMYTwu2DbztPmm2D4VhQ1UtUkBmnyZFCQRVitZ3sATyQeHGes1xeTCvYRkbjL9NC7tBKHHRp2yves3hQGmVAn",
  "key15": "2v9SDDyD9zD45hUBz1E4nzM7gidhPArePPEFHaFHBokbosa4bxLitHCYCiZV3TJC2rj7HaJjLMihbzDAyu9KfEr3",
  "key16": "XG2hY5RhwjVSHCjQJQejwhT4nUtoE6HqYHmK9tRPCLEtAdarutCJfmqXwgLHubGc27kYL6Hj7ogbujSDoPW3PPs",
  "key17": "2b7h8r1teqkzmijNTHHRkypLZwe2PqER3ATYoG8SVBfFHrjzQx3cLT83JoRkJL38QXhzFAacZFXk35PKUKGigWx1",
  "key18": "FKNVPMPofUQtsqx5TonmaTSAzcBAdZT1joS9DQWw3ESEgXrSYJaaipwsFp1sRj32MyhKrvyKW1sjEML88FGnhFj",
  "key19": "PZeotnwEdyNKT9Twu4cR9QnCpSR1nu1iUr9WQrQn43kRqtdc3s6oyg9bHc3fQJchUn4fdTUpcMpQaMF6jDa8LFW",
  "key20": "37E5or5eo2Mht7EU8XXKPx839VnFDAcBzeuoEtxgpEDthtSjcmXZuEbPZqSfqaeM53vjq15vnNLUGsx8a84Vbhi7",
  "key21": "41VeXMgYEukWfs1x7djony1edCZAJpuRS11LMQSe558VEpe4uLWyHxY7K8Zj9GU3dRgXNGGosVuTUikkrtpuQX3u",
  "key22": "5qyy93gKKiBRjfG2sU34WobEVR1j2tBmNkcJuyHj152d4AXMYEPih7VjqH2g4kEGt28c6gYakg1nZzJxgvcsY3GT",
  "key23": "5RhweWpdn2DFY2MrcL8stMiottkj1vo2x54uJnnTzGW8niD5b6s5MHkKaAZcL2EgM4HHUVJoLd42vRgnBV3ospui",
  "key24": "UWQKmT32PjyGM5QbhrgGqW1uk6FHQw8oUSzY5Lq7wxa6pNcRnUT34fsgRexCxaLzWVyBpPHX3WCdzKupx8MUHbU",
  "key25": "2HmDSFFKr6PLs8jR18cqBfD33ygaUhDkR1xyLkp1uvcdqzXcxTc4MsaJR7U1sRcprszjY12QAqFRrPutMj1qm8Cr",
  "key26": "5QZxVCngLVGJYXerTTMcc7TNRdhA753S2yHxJhhSjajm4iQiZiKRdPXGXBvhASUZ46tYfLmNdsdLRJnzd16M7k5j",
  "key27": "5ZqjJKPjN6j32ufFxmYMfWEN8bJHFnYkoekSZibUueJgqhaNkQU1bGfMz7i96NGVnnSQh63AusPNaHCwncdi1B6V",
  "key28": "5sRmskvPdATzr7QGCt7wXw6Q7NoGMqi2nFxehhZmydPdBLZoMEpEz7AAe9MMHSkAfznfT2UwwyyLNMbLfKzcW6FK",
  "key29": "5KY3BjMLdPBBbNiY7bak2J5qZ8xArhEHyqNYNAANvto23Yi6b13zsYr29QM7LVPYKyP52s3GbFfYsyKRKmWpsduo",
  "key30": "kpfFVavbw6XLHKNRponnaWNX3GKDQrTTmDzHEda55N4beXJ5MRgi5X26oExF9D3kVKVfT1UQavopfoRthz6qjsx",
  "key31": "5Hce4GMjHK2sT14KfBjGtQ1J4UFnfCRuJdX31MoNSFtXxzNqj3JbV8WevUX3He6ieCECrYkJSenv6gr8ycr9WcNG",
  "key32": "2fDgwqKkctNSdPVwzLcB6JaWoxU56EVpACHyDUVxtD9jRscjYGGPc6vrZJBcHL7tZw6gJzQy9wzHWASfagiHkNrq",
  "key33": "tnQAkbbxcrThdut5wy4MSSgurdt3PHqc3Wb4CyUR1hu6wzpVtCpoaMKy5fDfaKeBcQXx5di9zwtJkmZJvzD93Va",
  "key34": "tknpDgdchy6ZvoLUn5tkDWeR3xwF2UAY67bMfL63M4o6pSfbPUDHsSQyqms6iWy7UY6ozgj4NGZrUVBhtHU1uvb",
  "key35": "5JhAbZ5oE3x36j4TuF3gszZuN3pPSkpRVM4DG28GNFfNq24Q7wp4RRAwxq3VxGwrVrEDb7rw1sodYbXbf1uHsrcq",
  "key36": "4yDLoiZb9PuEKeo7j3i84YwxfiEiZ2K8o72tduzgsoYPAmPYN9z981v1bmcG3nmeG6DyXbfNdywCTHT3HpQgY5sn",
  "key37": "nZA1ZBEcfMfunbtV1ZmJWCopacUo1Ubv2QvkDgcUpDvgaenikuRYK25kYtzghVbfCsdQ26Z28E2XamkRHe4D67v",
  "key38": "3VDxwjQG6KKczmbdrHqHCUD5AxMbT4rktq6UzsG1EGhU4p3MTvWW8F6swawiT3whmfJ22sBE5hhsxH7zHKGRts6S",
  "key39": "4MK5vsTZti4HUcr4dYqzm44xqdcm2rZjBRcpd9wwTmiwuq3etJ8mKFzUyhZmkkg5Wd9i3BQoyciSTBTi2AizRvJP",
  "key40": "3vGaf1S4VTGqJrRLBMt7WRXZ1z4cesh5uE87QzYq7N3LFoS5xZhmryRYnZPqgTqycyPMMCi1kosYNVAQMG6qkKy3",
  "key41": "4gSiB63Y3UHMDNbQcyDXjX73nn2MJJUq4utMYiGwVFDJk4kNBveEahsgJDxVxfVk5C89z7Jj1MfjGZQNQqyGQRtw",
  "key42": "A8bNYu8SyhReeXBBW3fMDquq6LeDoWSTX2MHozyk8vasQUhx62jStAbit2RHeUSUM1vioqd4PsZYiZQpiHsH9yN",
  "key43": "2AzonxU1KH8u6w5czHtorbxuEDUs1T4qXCH2j4PL4WaaGaZE2W3LYFNv5U2bah8CCUAjoNksiVUxUwXaiqFJ6XLH",
  "key44": "4ggKNrhk3L9d1MJcrz8bPnSBkmNzdiv69ehHPFUsYvx8jBG2vG9sGBaHYzc16AtQNXWYKBD487duSLvQVkuBXKGN"
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
