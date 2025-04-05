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
    "ojTgfh245FdGnAsMpD9BjSAAsL38cKWZ7U1aVzHPmz8jx3sq5G7YQy2CpdW56kPfzJ76jdSxPxPWuM6wmGfvuYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yVx1PGgUeMm95kSQyqzi9X5NhRwstcdSrNHzPAsL62xnU3jCJh7aeo2pHFjcr7iuHL7kUoi6cELNVTKX2ZYs1Rp",
  "key1": "3ujeZeV7PKDHRMjidxqoyrFDgEWLhYBZG5Ko56J7sTw1XAYHgjmKJB7SvWMo2fiWBhE3t9dGuCphDAELJCvHNG1j",
  "key2": "47mzRkKZAjacQH72a9FCqSBUGChQ1We35UThTXgPxUdf8Hf59pgSPa4fmXiRUSNB2xmhsZF44EJV9sZ6CwJwDnBe",
  "key3": "5ermXBV8Uyy6wnztaFKiy76oRssQnYcompgg1WYZ25MHD5wrwTGhh2wV4tY5fewqJyQMuaNVBbua368Ks9Kc1i4S",
  "key4": "4z8diFmnmSYmcyaUrFPRU1YHmPFrchRSKMYfnv4gbVyEEuJ9yjxz9wr1TPCpRM9VJB1eXpohUA6Yc3SpofPuJCvf",
  "key5": "2fMq9i7JPaftAxAztsviZDMd7nJxDUNNytGVZ5hmiWVRKCQkErrKr9mGm3B54L7GsTHgRakXbFAcWnwVdAhPNubE",
  "key6": "Dtf9pxZQnSHcTWVdA8Awk39K4Yvz3zeTwhhkoYe1UYGXsZqKgbVyZZFqLM4djtTwNTnoeG1sHvcSNctaDA4bHjQ",
  "key7": "4xdErVVviYvkMJpS1Nt4dvZjpSHuhLCkfGBqTivTDMBtV3LjF52CSdd3rpwdKoaHaJHM1LikAGoJXAwP7Jhf1Q2H",
  "key8": "3w81ehs4hTAQ8vcPVKyKeMg2zSAc1peDKuA317KoKSRgufXsyBfPr8ZnPtsYJ2L8Lfxro4jmmfrv6rMxDNZHweC8",
  "key9": "W49pLzQBemoLkr8R9QMcwX7Be2uEmCU12dpTPsoD5XCaUbAfNVEtpD1u7uiBCUvi2bBxWbVjnHF4DaRHJPvDhL4",
  "key10": "39dyyDANaCuVeij3hmo9v3oVx3vzntYp52pWR3GqKEedtEuBrKiYVb4CAS9yBSdmpeqFjGBXWh8xQuriz9iQrfT1",
  "key11": "5ryh4GLmsr54bttKxkhDBsfxKDeX7dUgsQYjQ8uSMPWCQo9Houx4eUppDLDxPV8csBWiovpw5EWqPAoVPUaxNtLh",
  "key12": "299GCkNKyihfPGgnGez3CJnzTyu5WEad1pAZWhGwqNs8ncTaoESA1q9uxsNJmsJaTF1DbbSUeouhD1nT38zLS2V4",
  "key13": "2ot2iAx6mXpaUr14q1AL3tzpLuh8JXeBv8k8MySbytd1CbTUhxThWNdkcS5vsrWzgXAans7DLxQWraCxhZ8beXSu",
  "key14": "3LJHbdb3ahEfqqrX2jY79Zp63Q71LQoqg4WGfb5XEbTYZxRnVSSR2irn7aybpj9TETA7DGC2ycmRCvRjLQg3wTJ3",
  "key15": "484YRjXMmtTVjjCByBLUnsQDj25j13ad1oYgQFxZjnyjJNeBj77T9DLQFtzkqzQxboExSyiPbWPWZnYAzaJ6q9gh",
  "key16": "2sLK2NUPCQJrecbCkLVzKb3BKP2EMrr2YefKKVYSPn1Fm4mkwgyFTn1ss3x8wsTagc82uqHdSbhCCcdbeRYvJ17q",
  "key17": "4JRUDmEzgH7pvz9ZFRPqkRD3pv8EKoZ4fWvdUtNzNHRKYdnT9FgBTuBy8VTmkzd22AhgcztqzQukF3Tq2HcNrSZr",
  "key18": "4JvWT6JX3mABK8ZuKpG8rCPg3bYGJGoE2bjWS3ULZwZyLqztZqvmqYGuhMbsc5SGUWisj3HYqRSHzm1cSJRGYdZ3",
  "key19": "33kbqreVufPAY4HAs1RmXsFu5db2vPV7bK8dC9bxqRdyKVy4yyzspTSceEPv6r2PGSA5XcVc3a5p4JMrwd9waLHp",
  "key20": "2dQfy8nYHwnm7zqYJyr1gDb9QhhvyZxPiAWjDQWwJfmXFiNux1i1YMP5Jdr89KZqwYfjWxVNHwXx8Fww2YSU3V2A",
  "key21": "4kb1cKEuJENxfzD4po29BL5hqJjAhi1PtkBaVeoc2HoApbRyuU3awxBeu3ZYiTK85x7FP9NSbU7Dor92WVyav6t1",
  "key22": "5u3EbjHcgCD9fcXRJDV6bw4etpUKr4dHgDLXg5K4DZnsjYF7AECmVQ5M9MCTpeugxHGT9GRBBwjfXNv41MYRV2fJ",
  "key23": "oXPzgEiWFRrrBA6LHg1Yy2QwZt9mVdxSsWaWCdfDf9pXX25f1BuTcUhfZcUKzC1UatVMcd5x5bTUThoftdVH2mn",
  "key24": "3tKRXosNGaFk9QMCNevutMR1ucyGbkyc6VXLB3WNsSvhqLt4BRNHW1xtS28RKkhwCNPbdZ8E1YkBzLJu47rwcg7K",
  "key25": "2ErkQDo8qcMKmPyqb3mf3E8AErT8n2NcYyUen6CtLZ3XFjNCaK42xE98ESDWh3dCfQVaziz2yguHoaZd4LtWpWVG",
  "key26": "4gCr9LfyxVLHqnCFpt8aQTMxDux3XUG5hvxqRzHMKmXD7HgRFWN9i8ZJQg4Ua5Bjtv6krCA1261EZrm1g2gistwz",
  "key27": "3nhoKuuDL2smaLNenb8YjYkxEnPNrBFvAkn1p4aMhHkdgi1pVfBrvENHF9obbrENLXmNpQmir7ntiq5bn3AMRUE7",
  "key28": "5u4BwKzndpC1geZmFy13QvRL7Csc4Eb2jhPqdv3qv1gSqyx4xbgVd3ugXQFvD2CYmqmJnkLuv4CDUiFxBdgAxDy1",
  "key29": "55geMgcamjvCVnWhFwQiojiEDkRkwwomcUN4kVRHHxn8vqpiyjVtrgzeWxxcRgyQpuuU9fvxC1snTwjhiQK3wL87",
  "key30": "3R6tLoBeLAM9hsMRwC6oTMHhntKuE1Kj5vcHsKzrjQvmUNuxU99BFoBTwTDVnn144Ghr47RLcPPqkToqqwUxPM4C"
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
