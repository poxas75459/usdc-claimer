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
    "3g6jA4vwf44TARam7CFihCt1GFndqFKTmQetVh2WycuvKVqxKZR5JeeMy8S1TSAaUzmUiaL8nD3YeHHmZJdAhn39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43SRjZ1FmRv2LnjSckfAwdDh3iJTCpBBEv7Wd36N2XHTTrEgSa9xXv98NHXa5zmsDtr4wLT3mMRpjjmywaa33F4H",
  "key1": "2tvad2jQPMtmnuhKCCHpu9wuTcMCKvSdmkDnxKYL4a97CXSRAACnE5aEofghsC5HVRGcPcZrM9ZeJ6XWRd7giYNT",
  "key2": "4BvMbV9D2Pjwm1azrdN2eRHDJtzoowWKEvxDYFCfvXmx7DfbMoa7ZReqqdoKDPCWkkbkYQmPPpYZaWJu5PhuCiLH",
  "key3": "59RcZPDyaAzRfcbAdHXBTSJxotNQwjoBDC8mM3qHoEGhqBGVhYAk5TwLLKeBgqfoeMUg3uzmpBfvZZsHKFqsZpoC",
  "key4": "2JEQQa5vq6pTS26LAowM3ESMSf3fUkTRmF6SeFKSnoCtQjNsELNWRTCtom54o337i3VRmA736LfqSqyMrAWtu8Zg",
  "key5": "3f76LZgMUzgATvBTVQQYUCrzPtvjQdxjv6yisMFomMG7FH2oMxxp9Mb3oDyegmTvbxWjnixdunLyr5paB3bwyjCm",
  "key6": "NRWs1Ts8EiwjsyorhmUB7PGVdoc7PyXujBvrs6LiP9qvqzxwB78t7x5JDMcmSujngXRVMJWCMnLq1S3ox2KAN3K",
  "key7": "5EypaG6vF5Cknen9HgokPTZYZK3wxrxAG1zD2fssCzAteJ9uaZQU25LKrx1q5MbChmghJbd6AumgSFGQzH7UBD3W",
  "key8": "5F1xdjjx7DfQZbohkyAZxJohZykZeZtLzduKMHd3RUbNE9kwvhQd5wBogFgDz5KmWR6hMijtjwxWBjRdZmq84qyS",
  "key9": "HMRS9PDqoZUFFPVfxbrcUnrEnW8N5379PrHWtYU6bVtGegEuwDTutXi6523D2X1piKkqB59qMRZzVjswAz31PdQ",
  "key10": "2s1sMCuAcegH99S5uted9BcKv18nwxqjdhrFiqAaf9yEwn1tG5WzMrzbjz7bCyC8Wqk2qg53qLDdjhMoEP9nYHyy",
  "key11": "3czTNYsJ8SQM6ZLPWaEeeDFyXAmuyzQdHSX7uca3B3p98K2eTgbfPnZMSR3ziNQbKVq59HfsKL1uNzugmb4mq3Y4",
  "key12": "574vuSskRQBespWbrDoCs5gbk8NpsMy2CcUW78iXox6oFz565hFxgcQRVXwXVqJRvPRsbytxnTj9veTnjvyvbb8j",
  "key13": "3GsnzsNo4d3GXKsGNWzpTUh7yyFBFALGYc3Jt5niBJyUZWPr19teKjiHQeKhtWzeCgye7mCwCFNBHueojmDLkUQ8",
  "key14": "5QeJ15woenvoraTPfvhmV42B6N8HNq7Wh2C4p21K3zMhVPaW4rnF4fddD294LQrq9ZoZe3HzeKFNw8xSPzHjbM5s",
  "key15": "23Nt1QExTKiPtAwJyaWoj4MTRewYW4AYbTQEEy5T3JoGPqawxL1sdDxUzwCwLuvEnQCtDWRMWgyeLDpRSr1R67dj",
  "key16": "65eCfu7bToAmNvndnotoEEFAtanaHCZWaXvyCaEz8Ka14YXqFAp7NuxbzThLgt7mYmjBLMUpAiEC5AbFDKTR3v39",
  "key17": "woUYDiEmt6NijNPxj6ERrjmRckcnPD4XLbzGJzS6WnFqqifEyvZffhE4UpakfWnLUAgfGLsZ9iQhqJfnJcjiAS1",
  "key18": "4rRedxLLUhjqEQpqLMbGTF171WqZzYmjeHSoK73NnYe2R4nbD981SE5HMq4TPqsrSPwDDznb6wUEUFaqDhzTjRoR",
  "key19": "39u2QwrR2WYi1bo4xX8nAv1StKomvC4oqhvFMVeX2BSLsSB4JTh3XKhe7wGoRot1jBncngF2GfE7hgzTqFzVKuy9",
  "key20": "cHPGRPshHLrCfhi5wQKyJ87HpwdS8u9LgNmLpm41fMVXdeGZpNDRWMGaYCuC2n2quUnaqX1JbhBBfjzi44XcHun",
  "key21": "4yyQHaCKwegsqsePyQSWdRRysVgCxSpF5rvD9r3QaYuz4w92S7rnAsLyGJAoUEiW71pjVkEcvJoGirk25d4vx78c",
  "key22": "uEnb6pGJyTa3Rnmpg9tmpxMc5gArbiqVVL64K4edgTcDv7o1woSvtfc3ccDj36jpNTtLBv8GQSTHhaXoTavqsvS",
  "key23": "4Ab2RTkp1F8qeFGM8gcPuBofxPoMh5wPGoGg7JgeEvRQtdXMcCDoxGvWBnGVrh3E34a9ov75u6oMrCBy9vvL5q73",
  "key24": "fpduJhuvWknTsPAAMwcVaWc1S1QHzkpkMDGmbc5ku4Yt4ekSDXTke8fYGAZwtErZs1k93eDU9j5NQTXA7HtQjkz",
  "key25": "4xY1QYWYycAdvggfzZiU2tTfmrtmpSE6yB9k1MZCjUi2Zv5ZqrRJU3GiEndgXmA2VX6qkC1C5sFfwW28PvcAWaa6",
  "key26": "4Qd7zSa2PkbvSavTDcrY5SeajijhSfJtqcTvuGCGQuatdXuJRyAbiVa68gyBFgYmaRNYg81o2u85pCBXurhjH8Xw",
  "key27": "4FdBW4H1roXNTu16WAkSwhWifXDehRwbxwWrBLvVjdtY1L4BsJELN2P4i1dYrASy5FsxL8eaZsGG9HxrEVNHY5P8",
  "key28": "66PbeVK8T59vYBt5CWNCUwt8g6F48Bswq7EHsb8EGzk2D1yFTLbXszCkyuLMLkW3roUMKS6S9e4bfpiKfVmJt2ka",
  "key29": "4XHYE7H9EPM46pygjWsMY9F29L88Yy5CDnZzJ46K2r4uALJiWWbpGGVWPZXZjosw1PqjNS3oDyPLQdxQxSfL9mzH",
  "key30": "5sXeCJJRDLo9P1bGn1itzyBQRJUkuatWFFjViYmYMEvKx7JLtdUBSTPYzpZxYmptgaJeG5bLNiYqk9SrC67iK59H",
  "key31": "5y9PAUy3HxjXuLwEjdL5ZywgZXjNaZkuy1YB4ZLJYALBmgaBQPQ9jUyqnPUe5xUYyhDczDRWRVfhyA2MtEycrnwM",
  "key32": "n9cW9feAxMN6ucPwy4mGX3Zj2PqscLoZTjMxB3ycFoyeSnYjuhuwd1apAiwWQw9Tuymz2k32pPSSZznxGqtonsg",
  "key33": "4J2YLJfrej58NCtBF1UXqmjGcbyL4uxHiuBc3HW7nmN4vq5sZV3fYwZjq69QvkNnFpRLTRk7QTkuUSuvRfjknXu4",
  "key34": "3zxY1Y8Y2JSa6ximRU9smVyHNppGfLmbvCMP6ARRxeNwYNYJR6rbxugxZPNq79rJ7LWuzGnBiFstZrqQrQGs1RUX",
  "key35": "5oFB3tqmyvLmerBV2HtTPspm2FP6JLn7EwnGe24F6VkDFDxqftJEa4pqh3KcHitLxGfpNSGavCUSzCdrW9u7cRWu",
  "key36": "c7SQ6iRArXUdRdzT93FsSJXATrgSuUcr4AAembxdy13L38kibPL6jo2uWmHK9uXDDvchmebzVmodx1scdP9zfpL",
  "key37": "4BkRjTdJe3eBweSdPfDGGU3CHhnRGXUTRbycVjWiuw3Hdnr9WbrT4L5FNYUPp7MXvP9JV4LYtQUnBfHJFXGxZ9nY",
  "key38": "37UKzw3GeEztYgCmM3sgBXYQBNht3ooGhYCVyVtnPTnZM1naksEeHCKbKxhQRkVXKfW4FvgvqnxXixXeTwR3YsRJ",
  "key39": "3x5PTjpVnnzgE24igvkYojiNjdbYXjqP6UYVizxgcFSCj1SZPQNdKLksNgYppj7ZeCo4v2N2HWhH4PHwoH4SrfvG",
  "key40": "5J1NqsfAvetr1PcPk2pD8XrKdHNSeSiC4CrSD6CJR6ZJkUG8dsS9AhoHyYjkaEP5erVBQdJvd1sZ1b8m3P4wdEZX",
  "key41": "5619XnxVG8sniEYsEUhLKJYj26FqtdJzZZnhb2TFvNk2iSdoMkhDypFoDP1rqcCoquMd1CiAA3FFxMonVbGuiZda"
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
