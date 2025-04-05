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
    "5Ljv8gfecsJo547bNX54ArTzJpm8BswheaJKWg5G62Vmy417VPc9moCYvi1xa6Rp8X9LiMsR58un9Q1GLx9kw3T9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45nn8TgV8m1LEYHb6nm41MA8JNozh2gnyywHLiZByr6uPu2Ckh3NaaBmxcaXohzNxuPWpQSXYWwvPqr2Zpx8zA5o",
  "key1": "3Bvqo8wCPam2xgrNESVQHeJxRmnAeU2LSbMcDE3VcvnxMfovW9vVunc4CugUcn6bumn3v7WDgRNNMr5C4UByoTEf",
  "key2": "kM5pyfM25DcwJSzn4TrypLTGNSg4xyvobSgJX9f7KnMgueGbt2t8iVgWzGzsyfr2e593LrsWwPyDELiwWsYbKh2",
  "key3": "5kibPxLrdns6BbmJakJCR4WjH7himud6YERXd2sswRq62Z2m2u57AtC8RqTEFkrHKDDAiwdPMsa3Lzg2Rcw8mggo",
  "key4": "utUpwPH6yLzCDVJXQvHhLWyTKcDSfL1HtBAgATS7VvQGnfrvBmbFWVpuHd5q3L7FW8gv9XqWHUSdvhfsqTW9TgW",
  "key5": "3qWSeWzBX2AN3fVkCn5oERt3nsangfdHtQ2R9F2mXw27kQxwDN8KmnQdKz8WpPKiNrFs9NgMzo4D76Bc18fpvveB",
  "key6": "2gdTNCeQRdrMbhZ4SjSHnkYd2HGqshuyagKXxJt7tQuiTTiaNCwfUAxgw3PtPc3jDZmVAU4WME9zU9Z8RmK6MkAS",
  "key7": "5sQ2Ney96164xa2DVMWSYkYfBAecNLiLPAD8AD7171pcAspUR2HiYWzeEm6X32DPZfGtmCRAEEVGyTgy8CFRtTMs",
  "key8": "3Dit5htG9VDBUTDad8Th6itwPkoDQghdJ3bXwT442auny1Kh1U5SBsMtpXxYtcc3WYZyC9LgwwARz6GnR4yjLoio",
  "key9": "3LFpGCYbBnCqi4Dh1XRHJ1NejRrtpeeMbAnkehDEeiHJ2ezzHkB9bxrH9QqXnWpPNC1kYFCScB6AtNUtKKtCUcMX",
  "key10": "5Qpzq6YG1zQBLaaRhGg5eekWmRSa3BvdTjEJVo18ounCgXvhFTbvr6DGE9GtHFjy3StqU7usB4jxHYvLiaCekP8M",
  "key11": "2FTGHGE7F851b4VWjEtM6Sa94FAWyDxord2JqWoac4AGc6L2nTKm8h8quk25qkbS6CS2Hv32auwXJEgukYU1bFV1",
  "key12": "3QFmHLrEE2s5KmsqcShomVMEaQJzm2YCBb4Es5w1tXJpMAMhSiuE1A356tn895g7RCqSm2U7geGGVVEewPisSnXH",
  "key13": "vSB7aDXWi5GHpyGA8CwcqXGuyrWr5VJLZjXFzA4aUEqK2C6BdTy9JeMTuBNN8rQCifkbMWLkrTFxoaVukPg1gX5",
  "key14": "47j4oHNRL1kxo3kTTKp7h4gGXGrqCcgq7wKTMyfKMAiyPSoPcAAEQS14A27xe2fDYU9dXjT2yFVT3p4Seh9uJm8t",
  "key15": "4pRKLUGwHaxruo9iZViz9xF9Ha9gxDFSydU3LVqfppAFwRhdf1Bskpfqm4JuHp7H6dmHRkBHTqPatt55ni3tUf5a",
  "key16": "61LvXkKv1cnrtNXpWY593MPQjQuW7nAhAqiDLMhKyUR4kmCbgPVvBpmCMgAJyLVvt3LqdCrLSMrTrMkVq9SzJ3Nu",
  "key17": "2Qq5fDE8U3XnYmFE3j4mVL65KkSxqzZmTnbr1Ti4cdSeQ8juCkuBEDschLTpt7CXTvaiKqbm2xkpxmn8rM8sAhAi",
  "key18": "oLBuWR8jgPZmuzigVKKbVojeTuBzbKQ3w67Uywfesh5wQGfHP8NSXj4rH5NUaL5nQsLJwEvbkgxfnS47cgEcUNj",
  "key19": "27esu5SxRgsxiV82okcVQD5kvf8b1tRqNUW4ki8WZxP43Ng6Zm7TN8wmjdcaX1PzzWwYUp9uCJcoyXVKHYCzFMEH",
  "key20": "127A68Lqj27XrtD6oQoocFSmGNwjuHJ58ixPMsCVCCBTEoetan5oiUswCmv3LM6df8F4Y6MbWWsXbZ7UFFtmsW7h",
  "key21": "26hoKw8jnXLiJkAYhfmQqa9Wr2DCtRv9YFehbbQzf1K6QB58udCs2xZkrBCUXpzu8gEd4Rf3AtLS7tyA2ANFsYRQ",
  "key22": "51aiJ2umLroDhLWZxrhUAseaK8pxUD7zmAc5Ze5nnCXzhC2J3VBFY8oTMSDZX6W9Smgjp1rZUov1gbiSHYtBkmEv",
  "key23": "2xnLwGScgAZmV57Uw3cayKG41ocKKcJUVWjBTQ4WbBLBgbsQ3KpAzDgpwdogb1mbPqWY54DY9PGUpMKuebhafoTo",
  "key24": "5Cq2y27eHJNnfVmdct21cAsskjLCWzULfnLwEfXnpdq6iXutAG62qbkKuEoceBqEX9synFFWuFeMGi7mPcg5ih2W",
  "key25": "1SYcihV3av8wLixujCPMH7AHGur6PjgqCPYJ1v1PhrAgDXziFwWxrANVVPj9i9XaDbA3wN89zTWENKKqrrDCURr",
  "key26": "5cjPnQbvxZT8bg6jJdWqxd8HTMrYViTJWwqPJ3G9icJQYQSeN8Nhrk8MoLZTLWRaA7fEyB5BrPV86bL2htwwWcZH",
  "key27": "4WSAsxfxnGRpfedCKxGSKo2hTEC21cVYuBcVv6ZJRs3DZXJqBECV8QkS345jCj92Fv7fgy6bo1Si6UJets4oDi4g",
  "key28": "3ycC85rErSffTy8yRMiXN48LCSwxR7Q1rLKMqPr4AqQn7187cgwyPXbGkamJLY4TsFmLY1FcvvbhRX1gNADPj8CM",
  "key29": "4TQH5wSt6pdSNjrW2qHAkE3h1QjvEMuCdCEq6DWyxzfRjfv4qkGLSM8nWpAfNLRXJM3NE4Pkau67s6FJRy9TQNKo",
  "key30": "2akPDfziHW3ETtbT1GREkTgZce6sCpTYY4AFLSPP9yRnmTu14v78Hmvp9EqkrSiCrUd7vMobR6oU8AxXcfuQwNUV",
  "key31": "cEbUiRyqh7HJMthLCiEvPdGvzHp5vcjN9QLayL3Hq9To4qwtdCdHXPJqDjRg3aTZcpiHB9bmsFP2NMQYz1BSoZM",
  "key32": "5XbsPByvhGmZGoM7wmg8vBKbciwskU6w845S8Vn7RAGxMmsoUt8V4s99KfWLxqc1RDjXsAehUsBCDeysPJM8YJoW",
  "key33": "noo2w1EWERXYWCCndeboJsA3MmfRW4RxFz9fCGYAiLfxvLuCjozqeMAaETERZMVW521LurDTpYaGP464J4E8JyQ",
  "key34": "3LfoM8YSCwozzrQdy8VC9gznv13N5w9cXe5bvZC3EKWDL9bhyRo1HwyPxy8HaJn2SKCKnoDEva8YYkYiDMfqXEmi",
  "key35": "3SvMHfdNVXphXqCatwcAzJLVin3g7FUK8wWGJVuxRbzAZ5iAdCf84D7z8vFYX1ksmg7YdEMofTV99RBN6zYqsEuK",
  "key36": "3AQXKU75ih48ovkDff4QmzVa4QKhNkknFFVgHr4aGBMrEYDjAQeRfauNbojuMWoUY9EC9op69twQuRkiUggeojHW",
  "key37": "36UEBrXtreZbJVqU7utY8JPZt2rttMi8piJxTuwzcZuRqdUBSnBxoSa5XJ2kmyYnnYWSL5X824hNtGQb1bKddfkE",
  "key38": "3MTAfJUdPxLYx2mzP8BfrMEUaq6PW8deKV2Uc7RivNtDzPjjEnnrpiBn4mVPZwQyq9mJaSbhtHT9f7wV7FQahZYt",
  "key39": "3wkZfDfJZ8KKq2A8fcCBtYaXGBmbD6vMnyTGHAKBeHdMtaaCXXqp43aKcfBPqFFvDwoYhokanUm5FxtDQfyHEwES",
  "key40": "46f55U1RFTBV6NEhReN8evhGhPRC3x7ZMe4X2Y8ZNpdwNoZk6CmUV2op9BQ6kYqzvyLAAaQWVMWyACQK1xqjg3FH"
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
