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
    "57qAyazuturroYAbbxSD15iGHzdKmvt2JmVNJAH4uhSPnWg6QxH6iuxGgaM9rRRHJTtLeqXK39r197VBGxa9GQjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4THomWqhweRnYJoY76ZfwuJDWHzZaXcv5VTLFevrL5KjZFY1qGjeoEQHJBbNxNS2xJ3H66jGA9BXFsgvcjSwjGBd",
  "key1": "4wCA6GMFBTovduM4t9FoFjQX4WJUNwbaW168pME2rqYgBTBiPyYmATrJHB2JtHwkPHFj1TZCj1ZjNZmLBgsBjSCN",
  "key2": "5KVLAuZBdtnGRqbnE6AV9WxFTA8S4xDD89wdyABoJZ9Hbpny5V5vCed3h1spaUh2VGdocBq9zrJ88nQBaJeHEPSE",
  "key3": "2MB24X2YYnDvZXBUae6ggoQhj91AcKwdE7dsH9ocUef9Vq9ggec5roJtv3JEs8oqdo9MQGMC2N45hZhBebomK7tK",
  "key4": "3cpnAsRxXT9m7ym2MN4VtM1gFCxeMQ4nakkEFTuecJ4m3mLdpSCqnDFyYaTDGjJovwEB6b1LniH7iRWhn2o8TYuL",
  "key5": "55E2PPPAYbeodcoMj6hPpgKSAFy6sZfNAQ5K2jud55jjGatY8jsE3UzXXE5uwCQvFJyce4j24izvFTVLdamMioFq",
  "key6": "5AXSiPUYkVLSW7pFweCSQraE5yUXYokU4AGEsQMZuHxZTogfv6rjBwMXv2ne9GLWaMSfXA5rvV3V2m6Hs6vSuhR",
  "key7": "2vuNxfACFrEvE59zJ5C1dynRh3yoXPYjVkUgSujmckiUJCGzkKd14WXjH9qaVk3gLyWhtXa9WQijvMmnz71HosAr",
  "key8": "23QdmZKTdXQrgmUeWDj99TB5wrufZ9erFZf2C52z8nVzmST5vLFpeL4U2NVgYW15JRNPLqNXbWHCjyn6Eos5rgve",
  "key9": "53dQvXr956NmjNp3QHXLT2PAWYWX8yLfGaFJNDvM1KERzXgEfqKJ6CXGFmeFWSW5HVs16rENy5BwUiPf7X1Hx3vE",
  "key10": "zsnxBam5WEgs2JytBnW8nUZMJyqfqoC49NvuWi3Wge6hphfvdnDnq8E3rgeMyJ4ckuUEikJ2oPS6qoZFa8n9FkD",
  "key11": "4RzmXKMT1vBeZBF6wFiQyRfUqojkmg6qWGNEjMHaj7reaAHK5JzonsPAXeh3Qeo1c9mMN4ztSSb7mPQP3ppHLXLc",
  "key12": "4QY3XDiSM4Lj9KiS4eCKSDsTLt41x1dKXWEtu2Bo7vtWSVwBswkbS75m4tv8i3CiWUNceyDm2FgT6m1z9SGdDeNQ",
  "key13": "5M3HWqjejqJ3qTi9ngm3NjbAuGvHcUDRDsThfWzWUJQVwQ9ZNAr473Qhh9zrwdDw5MGdWtYyzLrP6SwsDMcqPgte",
  "key14": "24mSZx2n1Z57keToSpPQVQhpz1CNJuKRGh8h8zYoix8XvVpRZ1V16K6YePTmbvgjNdtDjp47guSg3vuycjUNGPdP",
  "key15": "26xWp6z9FW79NCqZ1Tw1Y1ATghofPRjkvCmFHSEWB4r4VwDbJ4QmYzW3whxuM7UeARHErFnYYoZc3KmxDqyQifDY",
  "key16": "4R7sGpawCvYVUySdfhktcnQEpszeM7g3vkmByEwhEa2mQBxNz4QFtNRh5KzfzPVBrHcVaypQbXECxWoEh8yb37aL",
  "key17": "4UcGqgMUMi1WeSWCrKncoL3GJGCFjr38Lwq4osYmagBYsSbrm3jqbc3ZiEwqD7gmAWc3rh3ka1twnRVY7Q3QHmGX",
  "key18": "33afFuG9JDa8hCPgR8GD7CmDiqixfwCCosHwuHuNV2u4iXYGouS7xuCco3BPM9dmZ97uBG6gngDVTePJZfkYx5q5",
  "key19": "326RS7FAmk5x4vFdpcNH1oMpe51xX2C2MyCJJrA51TJdwWn6jewwkLXLbj8zHAkCkFPMAeGh4GNHm8N1H3XJ8ybr",
  "key20": "2HnErz1MiW5gySxShuqMqXMe3D8Vi6gkXU4EX8sMTA4f4pBPk5jogTKjXdX8VNA91176zAEjT3LXyLqE5aeK28De",
  "key21": "5eDGgaedJ91rJzn5JPeyjmBfhip5N84YxFbiNE8PaLMnRaWr8JFfdLVMMVa5tbtF4BH2QCcio9eTdnU6XCdgm6Df",
  "key22": "4wBRYv2hjYCha8BeRyQgmbiLPNEsqvqq9Eh53bgoEk1VxRqNkLVv1wuswnJCtNS1e98GXRpP3ZPo9rUpB9tpZYVe",
  "key23": "32i93aD8PVBNYvxQ5n2DzerMoTrKjvC4Kc8cNre5amQz4xTxy5HuNjfEX5bYf9XoDfLNrWQkezgYS8MqoWqFRBBa",
  "key24": "4SPWQ9jZnhmfKDHxxRHgste6doDy8X4LQXaMSbo9NJ1iYzyNcTBFx2AN1RasAiyzm4Aq9m46UpaMkXwBmYaZeDkm",
  "key25": "qKH2mrsmN1fCDP2TuvvKQFBR9n8DVMLkL1B18GxWZeMp17pGoGUhNah9QJFy9LFyESspt2AhcUDYS5eXtVb7xLC",
  "key26": "4AUJtBL3v3frM6iX4RmNhoZxKepnmYmp2JyFfE2yWvYgQmZZWE8Tk2z6eVGuzHrJJqF98bkFTHsEqUDfcM6253Wk",
  "key27": "d1AT6b8b9dggpst4CLdveBZgCX3ZCVRzV2CppviBtyrjDRMahXLtWhD88f2MKLEvxcvvF736qj4Qeiga8wUwjjh",
  "key28": "35CZxiNZWyJDYn6FeBXL5iBz9DYBASB4R367EJVriHrGAJYJTuqM3jSjuUpuhNfacbCPSTeXDt9FDdmy6pDMyTUE",
  "key29": "2eZN4abpRsNKDCb6gRMMpyQZm1oAr6z9U4KAmwiCAzt1XLxCCXU8oUSf7i7HrSHsLKgmuEL7JkxUm5bfJJKX4UAT",
  "key30": "iE8S6rTWvuCyDWrwA4TDPRGbaSHWFqUhy6KXjbgiRGXU6mAfAT7rRMfRYKb2SWogykffiNZsh2TQAHqfmnMBaTy",
  "key31": "2tTW7qcaZqdJbc5joUGKsU3UE2DhBYbet7ETcr5ayFrjEn5SABsvC89AkRNyJ74n7CNpekQsA4spM2jLMpRDJQSN",
  "key32": "2PNUJjw3S7bxSDVkCAwLtVva4mQU7s5mVTHY5VDurNSk5NJDRyaV5xN7VygnEPQ3zxdUTgJhdTuqCUAC1qA7zwuU",
  "key33": "2GrqHSnmR1SnTsrj3oWQTfZemQD8ZoFUhNo9Vr6ZdwcNJuhXjKW6b2hM59k1tqdFBwM56rqegFEuxxLkVEab5qGR",
  "key34": "2FuJeiP2546gf1u1VScyNQp8kgDbB7jREfoZaus2GXXfh1jeHmTWWVXhxxDyt2UyBaQLamvts9ERsnxNxKCwXbxH",
  "key35": "QuSR8hizuSvFBQVfC9W7qg3cN2bavHwk7XmbjpXdEexpxzSxmvtfkvydDpyQoS9jwSFN2T6x7oHCTHeRpdLnnaa",
  "key36": "4hrTjm8BiJSAi2EEze5jGYjNdHueysXdbdpLVgGHpwBX2Mw9h2ALmN8mghEQGFnh3LYg8fsd8qrsFvVbqPFTdkR3",
  "key37": "5CJnjYinEnUVDAWFyt3DdXggmn2voWeidn94qa6VwrMZY7SXax7WddPPU7LnsR4bwkn8cH9jMKwd9as1L15jHUTL",
  "key38": "65cVHZxeE8RxMLefeJjN7cg489oMpZwSLjAEirpCZfg2yRLpvqqpBVD3grNJ2PQnqa1keeHkD2bLpKoMHbGtxeHW",
  "key39": "axdMnJc7wtVjypKXvLPZweNro4CmZzmfT8dfoP6L2GAHRn2DAnM37K3sWbdgHoawnsyje4a5t3LURHqPfyWWjZr",
  "key40": "2CDmtBCuJCoaviGBirp1YHGkb2KnXrjnku4GhQnKXUcxkr7R1uREbHKbbyTiXeAF1o6kGj5AgNVDLoPWC9AGHEzc",
  "key41": "4pkLSjitT4JdqUXA5aEuyzzDqJrBYh2Qz267bVwygYLPCWYDAhs65xrCddF6qKbrwE68pw9hu6w4jDen5hP6pQ7a",
  "key42": "4BbESniFd3HM9pJRJocNjdCgJ2T63ZtAjhQYkPMxy5dfLawkQtxPdRRUj3Fyc5rzDVpW4LhzyUYxf5qQzUTDNQZC",
  "key43": "4QoT737iE3FLp9HmgMM5RunjMwMicAbJoxgypNxuRyVgpAUTsqXUsoYE5UScXGv2ZNG4NfKAKeL8j35b8Kt8tgpt",
  "key44": "2L7iNkUAw4xxp7BaVFbHe6uHBzpLPspQQd3iQJM9jPxG3BhXiYxiaQMkLkQRztkbx65eTXEUyRxf1ShrXooGW97Q",
  "key45": "225VQc4UFB5eAEiTu3V4ifsVyoZX8Vws9GGc2AjiPeErx5oi3ZRYM1bzrXa4uQsN58FPEuEtndo9NB7FEqoMocqX",
  "key46": "4hxKmjfbby3meVaGEEw5BTYkentUzJaPrPibJCCyDMD44y9dB37LPDqdd6HS2bZ3apm4nvF39PVwotCk1x5gbSbU",
  "key47": "5MjZCUWd9YfY37jfnQ352zGS68SjqBYCiUfRDiEQCQ9LBQeWdWFHPvYfQyH4UDauvyMhnkc5KSnHyeuDBPLxkFvB",
  "key48": "41eQ4nbtJDBPDB8eS7LG9NC4UAdgreDg8WjSpKsRtgnHBWuWtK3d1LTNfGYCU5zNfuyhSqfZBKgjoCRBqjn7nyc5",
  "key49": "5QficbD7gYtJAFna4wDnjCEsK8f7TQmjJPkQ4wZZzMFoYZN3z92x3VaVUCU4BcCwSV6eRNVoyVamcXJUnevC5JBi"
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
