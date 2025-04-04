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
    "s11Co3bxs6zmCHptuUhrEDGypSDYbWdYk9YzntNSvznJtfx39AZigQWWQHNM8rAP7g1PyCAP8qvbZehwMZ3J6cq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KJ8S44XAyWQpY4pubpTZbmq8kiiqaWxGBffnhHAGtb5qwaghjrejdsmiD22e7uiDYj8qKJt2DdRUBur19whx5gr",
  "key1": "2XC7kHNEDn127NrAUqEScvf2ipSyuHRRvfmk6Akg6coQmFfP38k64jDnLdZRK8kB24i1dCa5NdehCCUh4E5LBuwm",
  "key2": "3MdJbT4CEFpb2HY48HAEDmKQfidBBGqtMgBo6nFH9gUAQ2LpdvkhtFU2JnqaQ94vrVnUsV2LX73ruamSgFk2cBGd",
  "key3": "2m7NsWJ5dAT4qnYLscaRHthPAtDAWoGGP1gJbC4syY9rgRU2PvuaWFDrEPjLjUa7eotCgci7cZM3qaLUn4r7QMSG",
  "key4": "3CEMmrJPrb8q9nuDSS1hw8HiLyuUi1LKpTcFWwjVav3g2uXH5dCc8x3VgHCZeH3WxhDd4cB1Dk1Lq8LJmCrw6rex",
  "key5": "5B72McfUKVKNG3up7quvTW43ea6f17BPHLmSYKXyoGmHSZPNL7g6A9CER85spVYuQbMbrPJ8WRGpvr3W3iFW5tuR",
  "key6": "nwG7zS9RBJE3vwc3Ln6MfiRHRNriVezMj3RZhP5kc3zoF7mEhyAMmkfRKStcMuVpgpsCETXJttTnaSNPSb2SjXD",
  "key7": "4qBkXFqLx5SAiuMcCDRwt36Smp5XKNL3DS6kMbTTj6LFAPjD9FxCvMQCyRYJmJDcM8E8uvwoAWUEWSubjJHENJyE",
  "key8": "5qFPEUD98SZY4hqxQVSTWLqe2wARBj6pemy89CgHWoVNGf1zfpsjP7DwQdGyKuXYFgPSHa1CRaGNZ7FtdUhFU91P",
  "key9": "3WHaAGh1oncN5Cq1Jz2oVN2VYLK5Eu3kbWEWQB53aziNEA7p39evQH3pXGYe4MjH9Q4uusQo3R7JYnGo9djK9uYK",
  "key10": "5v3fRhRSwYk4oov2Gkvo1JH1DfzugkYgUjZS7sYaSAiDZ3yfNs25FytW256K11UvKV8Xn6ffWnpnGCyDyyq5QV5R",
  "key11": "3rqpu1evDui4iGiTNmXJxGtUCLQ4xRCr7owZXWaEieWBkFQDcf1Ajfbxite2QGWeXKCiX9b78ooSpyH9peyKFhoD",
  "key12": "4LfxcmbQ7PCEtqdJxwpU1LbtWyn7bgzU42b7vkJL2wSDP2MKBQE4jEMdGSbdmdE2Nb3JaPuH6C9tGbN54TruhZdc",
  "key13": "3vbwdGnUW2tQ7wGQ7dMWBK6rV96nrPP6HUMeJuAfN9ejBBh8P9Vk2zGLAemAbPgutx16YaviFmjELSFJ2U2FmAJk",
  "key14": "6i1DVTTzm26hMKkgLeeFumAhVvVSutxYn1yVYV9BufgCi2bPwcEsaFBPqH2Rqn8ox65yBTDZFrAzN2cYWToYTZe",
  "key15": "2ZRurqHWPBhZD55maDNFjsrJR8HsUiDnBYnMnuZ4w2ERM4MJ7RQC5gfUXL6aP64Z71f6T1PjHEVQsJN2qes2A52a",
  "key16": "4EpohrrgGr4Vt4z7fqNLXZ8LS6C42AoVB78Yobu4qeow7duJX9xG5adPZUPfdMpEKFEnXGR6YC8MYnBAQ85Ex84B",
  "key17": "GAVcpKwEkuD3jmJH8Gdz76bgYfSkzcEAfAZQxWVXcD6txXDaF2psjjQmafr6btnZtN84rs1rZv9dCb61DoTWmLQ",
  "key18": "4we97icnzJAQ3CAto7xFg6c7TV1YGAq52EQ7jVzFNP8Tp7s2GKQdGQJsw8QFK3YkTNU2CmskU9jmDxBaEkxhLSLH",
  "key19": "392UMUVYZNLceaRQcayfraMjTGVijCnb2ZTLjM6Feo1Zh6LMgTZJc8WzDAdxquugiN4kVK49jrKUx4MZoWqz9zGg",
  "key20": "21rwqjmkqRoLr337Gu2B6igwDiFdjJHLtA8kBkCymHiXWqiEWR4og5YTW2NYzpBSUukfuxZQbfNy2WgpQdE4hMYf",
  "key21": "UrPSgyhJrqQJPCLGsRmi6mJfoSCehccQBEBQ3j8B177GqymWtjxomsmNG8n9nhfRYnkCtFGt3c6CP84LKHLrXRr",
  "key22": "5xWqhqBCYrxaCH8EwLZzLecW9aS24uQPdRqnMSq2sdDLCNNBZw3paKZN9dx2wy8Ci8Ro2g5ajqPrCvKHQpnBfdn5",
  "key23": "3mQpSqN7vLswmTmhjmXJrpBBEoMag7YsfJsSvcFJe5Cxj5voXohxft2ebpa7ZzQPdHetxrNoxTdEHopfU9oFhAyd",
  "key24": "3J1ukSUXV7LNm1HfyFvxdd2hwq4xkKQxUBicwbJcyY15Y7BbitURDn4cSnTLVbadBhQoRsgYqLfLmaR9q7yzzBS",
  "key25": "61VPA4twpWTRSwYSR35nopMP5Gpw14qvmGQwPGTyJJWVuTrFtbLzXaTTkcyzQ3chk7Mw6a6TdWG5YEzeikqt8rLC",
  "key26": "5VRS5akLsiqBu7eSnXzRaeDKifzAgPnDpYYM8unwKMBbefMtRiRgpF7RXyA58EpssYexruR6YeTaRTUaLa6hCa9E",
  "key27": "4gvadz626UncKQQC4NWJGtnYkAV1GMLTFtCYQEUjF5rwurG9eFr8MP1aognXAd2DExUfzdXJv1J9jtmKFgKbrb4f",
  "key28": "DjiHrri1dNVDNRZnJQvsqmteacDwW6fg96RSHhm4cEC1aNeLLxoteoe7nTQgCNnAtXvBDW5R6wHo1hsa1dCtLQM",
  "key29": "3MmrHuEBoUc22ZDk2Dfjjfg6civWEsraJBVZKMvxuK8HRLczuDijx2ixcggkB39uj8ST5VrupH5rbMe2Sks2mbnx",
  "key30": "5uoS1QL9oZFz9tjvC2T8y6q6agXM11wDs6549hEEFSTHGm8k4vj9JND3ZGcm2unAj1ahi4fWBjkrkgYJqHqgEg3f",
  "key31": "2rfHHVERFwg6dsWsNNMeoSUTb3mbBQu18vehoc1axMpa5TDGykeN54rbTeF7ycQmb7XyvdFmhNX64LPgmMitQUdL",
  "key32": "2mcN7uzGryQ2LEYMLkHHPn3TSBhqsz1WYu5KAfqv5QRgVk1AN4NKB8pft2ggfnzZb4Wvogwz6davKpnobBY6FXhx",
  "key33": "2QvQ6vNbKwzgVwLHyZhsCPS5YeWEpZCUR5MDKw9oyXQtnLLb4ixG1Njt84K5i1Vm8Gf1o5TdhFgEADybbBE3sRsf",
  "key34": "28W786AeuwovuYnvqKvjMR9Aq3cQohE9KUEPinxh9jCkaomazvYBTuoiT497nWZYovQmkXgUXgxPWjErBQLUT5Mb",
  "key35": "4j7mGf4UvfRzECRLwuACh1se9EAJy6bHURbhdrPPin8XWE493hbwVfcvYYNdNPSg8H1QJtjPc7VboNKZfpdZPNyz",
  "key36": "3yTB72VE6viPELhkcuhjmmdT2YE9vBv3fMf2Z3PFgJ7eN758GUVvCJA4vcczru9DRsyATjAF9ogaRhCF96qkLCf6",
  "key37": "2vPNw1Wx7S87WchTD8FNCwdZBKPT3oSeDHPRTqUTKZCe1gPmcG2QwB375XvE8JHnVuoK51NmAkv8Y3mCCiUp45t4",
  "key38": "tQxf6zME9SiZr7PLMRNWV7KnCgEeUY3DBzDLu5pHFpyBnARn6TT1cJaP4XbeGHWNS6Lftrz3D7hKcM7f2nmkfE3",
  "key39": "48pSr3P94yEAaRjHQZZwzzGp1hP9bw8U4DYkctTuqZi9DM4fM5Cn6xE66WLSpCvTvcywQwjmgKyxbzxMAnja4wFX",
  "key40": "4WfCd9TL9kFFgBbeJ87h2VcQ1PG21dekWT1YPbydLbDwbu3AW6wZ2WuqbKybDjbzH7daQwGhrKjw7Q3ZeUJtGypv"
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
