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
    "2ptqwZxaA3cVxig77jeghhopCCHC6muRVakyDFp2R3nSH2HN4ih4viDRzveitAhjfwuQB1oTacqbv5cpvDuSaGsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1hjqBsf8VEe7V3pZJynaTRa6BtFkdZYRsSHa5d2EbEsz9gcBhwNhtNM7ELmRxMG5hHysSj6pGpE4GYYvcTAA3iY",
  "key1": "3kDw7VTzM1EXVCb7zqAxSqA1ZEyA1eFoQYbv1UcDG7Bdxa44RT5pWALiethXSYUSvZMWnis1rbPHvkR8m6ZGmuxz",
  "key2": "4XuKVRD2JkWwznVCJYSAPFF1MSv1pho4pnyRkeaRuZ64NXxkpGwWPFTwpe5DzBAKXo5GiTa4hmPNiyEG52if2rLR",
  "key3": "LpvUuwxbV6EAjovByBcJ6WRPuvDzLdr4hJn6opdTfYEwAGgJZvnan9YUVZxjYcFkoQtLtmNusC79rWWLkuNyRjT",
  "key4": "4PRChdwLM8rWZ3jyeYTBLXfycL3bbK9fmkjy3P31jPcedq2YnTd6cLZPyV1nnRzyK6PLfEMyNMznMoPcHy8o8e8P",
  "key5": "2Pc2mDtjSEcxAVPYsQQfuSX5AoiCDyw5vJLM68jr6cR4Fqz6C2ZPgKan21bJHmW6Wu9nrVBhHhJW4TVMUzHHDsfp",
  "key6": "5wun1fLLXCSmoRVPkoNdjT9LPbGY4JgTMt1ritZrBVn96CYERzznbbYDbjHjyuiopfzQaXYUScsBMsbJfd3ZbijY",
  "key7": "3iPYZ9rYRkJf4khKvvhp68vWqPtm3TFxABRhi3QpG3g2RTHyf1RvJjkkB1VfaDrQKeQt1d1Mi1TNWqWR2LX41Apd",
  "key8": "5eUahwidgQcwGft4Wh3zXMfdzCNeSDK1ANdt7vcLYHFawzprjyrEebMneSNsWYvGfcLSjfwZx3eyDfnziUrzJKWF",
  "key9": "sfQc3sTjY4iChSzfAYMXH9M3upB2YsUdsSiRhQYnV7XSrkFBrYeVHofiynSYVCQkqezGyhchgfHpsuzEFYiLcyi",
  "key10": "pM7PAfuapfabMFXADA3cPipp5741FJedbFdLoqLPJc29cPbG8zahmrn9hNuLq6f7sHu9wxGb5RjswevV9DxNpJw",
  "key11": "48YAUXaWKw9C1oXgwk6bAAthiymvuHcR8qXVChiHiTnk53reGsLwkkqDXBKD5d2UvGvKyjnic4oqcVEHC1NCAmMw",
  "key12": "HwVdQ5W3bnk9Tffc1Vp8si7qPeSArGcB3s6FRz5i1YX9RcdX8BeBnwJksdLWv1m2urNqvSJq7HgBvyRXA3Xfr37",
  "key13": "5TXmZ2wRRtgsGtTWLBbujeohWKVCtuCN67XgyXR75qpHSYj1tLVYXnZr7UwF1VTqtet1AmTZpPdKXYditHxpwNvA",
  "key14": "4GUtnc4KR7gqEhsaTwZC3nBhgndhKve7tiQDUFhAF2Kew43iitjimoFGhTt8aVVhoKXcjVfg8oT892qR9XjzwzoQ",
  "key15": "4EM2AC3aKArdBDBragFvoRzHuDUfCjL2u6dzVfQGupPQ6QaZjWmxudmrqQuDCsNmssTznyDepLP8jkKke6Z9KNj",
  "key16": "avcLZT3TWc7Q9DYm7Ds5s6qwKMqjuouWoncQr56n96u3zErtzLDPieJr8eAVdupojDRtmVrX19s8oYwoVi74NEh",
  "key17": "337uvUJ4JAx6JEpUntaiPMdhxPybgCBKhiMZLABWoqmPkNQuaAxrTcxMSp1AtpAEb3LkrTEG1hFxr6VCjzfpxa9K",
  "key18": "4vBbeq3ipPmZUNE8e7ZP2b9Stswh6tZNTiNYQPgEhs5Xysn2UEW7bqqF9DauPXDutXyV6NTt4Zv7vrh7BRzq1dvz",
  "key19": "5nzrGZyXL3ePjiLAwpujfJ3UcyL4waEiKBKQyDotjPj7GHgPMvtKh7fhPQGhhoHEoFr9JRyMUdTynxvjycp4Uboi",
  "key20": "4WQDpeRBLZ6HHrSR9RbLGvmM15aqKV3sXW4a6YTc9Ks57HyaGyrV4EtvyUFJACKyg7MjpVqJ6PXLUdTSRwwXNyVL",
  "key21": "2WAz7MwzT4mNEuwYqLLWZdww9dG8RZ67BVwPAZJg4q46M6KzJoVQJgkkb9w5MCyvwqLrRHRjY5Lfjtk8X3jeLZG4",
  "key22": "4tDevtHS9ZgYmAGY3z84PgDJ7Y72AQFfzk3KCaC3VRJdHqnRvPcvk7hkwBBaxKb9n3B7D1H8JKdUakhKzvMq4cBq",
  "key23": "42VMFumsPJcyb72CscQDdJdXbWBbZ1YZCkiEurWdY3NLCJmAVB1TKWtsK4RQaL7SLiZsMWqLKnvvQLDUCM2NFFme",
  "key24": "2yyzphpZ4QAdpspa6uX9DujHT4aQ3LBNjZyccFvjokKL1GMKebwWJQqeCQFm2dfqixCxVkcNBwrq41mEbGx2BWjx",
  "key25": "56sFJbWj9Q1MDXcfFGDzE1i2PrZ23RGgFaSC9U8euSTP1xuvRKViPx3UExNqyK61yDSMAsPQEjf2NKRuU1JHCSBP",
  "key26": "2mh3smvu4KrzPczDYETrPbgpf1gxEL3XFi9JUTTTHLLDcN8jGT1h8X1cyGK2WSwjgDtoARMXpPA9u4UkcYhwjLEe",
  "key27": "4BdoPS7CxgMeDdjtFHXafffDyyKZL5LRDHmtRXM6TnGsmAqL48D7gnYVjERyD3CwAFYo1mTvJzaFM7ey7f1asuAs",
  "key28": "4qmCH6jTNeVKdLHc7dwgV8Vsxv9Ab17tXEHMb2Ldvta1sUMBFdFgVY5MLmqihMDi5S62qZZh2tsNXWTc7k13YQDh",
  "key29": "2Hy2NFwMENWLVDT34RC2vyKViqFz2kymYvpDCi7T9WERuFfPBJgkaCNU36MceTWZgpyfLP1FipG6NgsqSMKDp8Y5",
  "key30": "65qTwa4PtAVNEdJ7UWbsAbWDrEGbGUSjs7ThXR7N4AXPnqLv22u7i8K4igcoaQ86oHXwKwFKcWFHexAMeQSiCf1z",
  "key31": "4Er6Naf9B9dEECFoQTVhsrjmj6wE3aUR4Yf8GetXv1D1QB4bCBq3RFfMbkyciRtJhiJ13EPTX3KJaY96ZXTDXRc8",
  "key32": "41bL8NniogvYGBpCqqY5N4vZPZV9QKuKdqbTTKMn4ubPZY5vpePVZQuqbqEMzmoQSLBKUCumZR8LEL6ZdPxGBrnR",
  "key33": "4c7P9zFhJci7ZTfMxhJHryXwFdtKZr6p8PdugeDGu4txer4mu1UV8DS61vKsnMuEQP4H92cqfj3Mc6SRi4im1vkx"
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
