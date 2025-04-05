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
    "24fHFHXhBZv8xkXBfYMtpfousKKAL7wDVwrgeU4WdcPLwR4nMJM2HQjqSEbKXwXQA4xY7Qo5SiwtXj9rdVLNRSw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dbBB2aPgrmSNyAh8biRkMCPnbgtQqBqXsZbkq7yPZ29Rd7uPU98f3YnRqjFbdn1CtXVC2DWDiKRhawQpYsk9bmX",
  "key1": "rSkFF2y7wzwdBCkCqEF4M1ajTJ9CqW7vmaQ3Z3xskya5PCtc5CoYLsqbLESbwXkhi4DN1NCDkUn2USMQ5YHEiwK",
  "key2": "42ntPJZWXiYHQwZxHJ3XTvet4kpG3UKhuP4bdXA3oLc9qPLhZyL8PypZcQyTZCYnC1VvrsiYkGTyKU3dcvQiRQhc",
  "key3": "59f5yN5Aq87D4q63i6bLKfQwyWKWry1QJucfEiMuNe7XPS2PD7RSc6HDvGJrQqxGQFFeSJR6Na8VCgHyjNYUXy6t",
  "key4": "5NqP7f7sBLbGPqmr9ghyJew1sBABy9dvGGR3xP5y4U17rGggoPeXDMTDayowu7kpMxs2TaSSTjiM3dySMr5KPutS",
  "key5": "2PDzGqnHtVbMTYiFXWyYc2uXtorwtxFv2ojRq7LP3cXBCs4vfffvQ8REooN1WuYKvySDXDLfhXM3PFfmRqAkXo9g",
  "key6": "ceZrfzaPdP4u3NfBLqP8viSmEdsrewB4EEimgu2JNdRk3FjfQKRsTcb3XDJpGDHvuyAducihNepWQ9GEbKuaqfQ",
  "key7": "24Qchpd3Vnzk54sD4SJBXJ2PVw7Rkpn46P9KimGSKQ2zuVATESBMTMbiNTtw9M3TktkL8V9zbCyzpbAFExyGoGjD",
  "key8": "2tAwbM2UapYeprjBQk9qaNuthXptZoQN8ebzB3aHpqUr9bpiZMWBgrSgW5rTcpvJCcW2ASrrueRAgbp8nnLbx1vp",
  "key9": "3NrKUqzTrbTjp3UweJQs27iFLvL9YNyomAubqvUJWaGSzFchmzCw7ArAPXCnSEkeNPkXD5QudeWbB6qzXRkergsL",
  "key10": "37CrbU3SXy34hhRvYTUB55YxapPZE3HSBF2HQCZkQGiDPqY5tHfNC7M42h5ih11e6wNamPBGLjWt4csFcPKmMvUd",
  "key11": "5UgKEquvcKDV7xNSRDmSBTvgg45zUZj7CY3TWmWN4UCNALPtvsU8FhYmWLYT7KM6hFZgGX44BfniDFfctBPdPyH3",
  "key12": "3stHcDCJpfq9FZsKVRYbJwVEHrc6KR6DeyPCAvuo55xJ3kfefs4NhK5XeZ8nsR2Jey3qs6KVYXKMZJp5tRwFFthA",
  "key13": "2xbb5phQrMFXr3JhgehLf132yAzcFJjdXULtHqz5yeJRRpqvKM3cEdz7VDdavuGFnU6A3wVVd4oAXSk5wSRdh4Nx",
  "key14": "55GQw4gtPthJoACk3qJmPWeTZ5mE2F7W7LWGVQaerrQ9V3HDCAPx76ycXZD6nf2E8WV9GqToyKgwpSbk6LfqtMcq",
  "key15": "39Qx7hJnA555MRX96sA1dSB4tV4UX8KfiifDNo5rFLy3jTwLRewJmqvKX8eY57vhqaRspseAV2N6xyeBKDUUQUB4",
  "key16": "49JHMbi9kFTiiHSX5s2q14mgU1p1QMEu7LZ1oH8JVtDvHssuqoqgR3Sp4g3DWUcc96rpwwXaZkLZYuSvo5q1ofAs",
  "key17": "3znLzvXWY23TGWgcYs9WLSfZ9WWTZpeX9oY8nfS3fkexiNqfU7T3xfqzSLcUWbjECAdymo3tPX4PE7rFeh2XtL9G",
  "key18": "2EZyZDmcSWM3f7p1huD7y3YvuVdumXFPugcpcuZ3RVDzqJ1ZnWb4wrHsNnXqYRNstJukJofgi1Y2bcatQLs5LHsv",
  "key19": "3EWSaHRK7x9GdgYctNPviZey2meS8z64aajrrUuYHnvo1DzqCotHPbEtESPhXc7JEbnK3iQ3E344VJE962DASuNo",
  "key20": "2KYYyz7NyqmPE3WKuanqx9TSxuyDN7wbDmQX18fneCxffLatqA1qbYBd9Qb4UtH6sRKTLebuEW74uMdaBV7TN25V",
  "key21": "3fdBTYLHW2pabs8JRRW9NCjVgBx7axWhaXmanZZ1YHwNXG18PhzunaqNLTcfzSLe4tYDM4JKahCzUANfeJs7VpPc",
  "key22": "3PYJw3eLhtiW4Tgz8M4mGTf3uvWqpCtgmkYjJ5sgDv45GcLHfkC3hdS96irrC1rbwf3dSqFurphP62DbM9aDX2vg",
  "key23": "DH22UZr4LHAn7CAsR4T485a16D6ugRTDmSyWskbkbTTVaGZp1n7TkabuehMS7RcpwzbJNnkJddiAdK5ikz9FCwn",
  "key24": "66g5MPQp1SF1pRyymWEXywgTyePXrqV1WZLZUhFTZNrBVNZHinypFF8ketcVWLXNu6ymfAT4hxyP9yNNYDikLDPW",
  "key25": "2DxhHCBzda3yESf6W8d1RoMWzXWPqh19GXKKovzg3JHMCYp2g9H9UKv6sSP286reV11BDZPjY8QT9eHCk8uXEHcU",
  "key26": "25ggSzfwbfc2Swcm8vrJ4JknAnEVpDiS3XdRX3sqduS16JjFfRxrbopa2b8qX2pSTfLiv6DDsaLk96EkqjLZbwTu",
  "key27": "2bphhpQGRgceb2LJ3bQm8sJvDfu9awFkJnBFuMuYNwe9VAyqHymSXTKYc5H71C9ZMSZGVXuhvKroQ8NiTuiG7gDM",
  "key28": "4CEc7443V6Du26h1oEhE8chfnwHiAkTL575EXR5gQ3tuwrTfc6pirZVKbuMSiuFtMn3TU7jTrMWq7wwBKCnEBwnw",
  "key29": "5R4mYfWHq6AGyHqMpf6YjNkjznrJhtGceucvukyaqNLAD7L33rAvU6TJic1QWQeURKL1CoKz8P7bUyCVuynZnGhw",
  "key30": "2Ar9wwXnrReFJGP9SdD2YC6yFu4H21zNGw47d3BXndmNpZ5UMJdf5pP6yZwZRF8XrNnDt7TLB48TQqe76gqLc1Ui",
  "key31": "5yaJR5RyfKuFv6fdAiQowcukEeVGZ2p3faSGGH7yf6Nxb4RYTdRX7BkgQ4CKyrrq2hpEER9ojTCMagJxU4KVykvj",
  "key32": "3HeZ6M5xM3k6WmfzqDBfMLRbw1948xsE2wJSzHge72vcwNtSUjZzuAAkiH9udkNysixRpoEMtCS2dNo9EDTgXa5P",
  "key33": "wwCWci6jMXkCVbuFiUpB9L27DoMjXuMcBmKqJiL2vxdKXLZaMY7ncJsmjLaSzSFiMxuD9yRr3bqrki78AwsAnvF",
  "key34": "2x2ZNkzNwByx77TDqQqPag84JMtKv6p4k5mgux2ApH3J9GpwWXjjKmdBRDp7h7AVwCbAdzq95eanZ9PFiFSp6vBQ",
  "key35": "2ezDHQwSJsGpiFnXfxyts3g5Wryy2ubyByC1G6zSzJsuHirMEN5AYvhVtxstYm4b6hXhCBTF6WW6PpgwzpboYoNJ",
  "key36": "3uHb1hiBzjU84hUpk7TyV9FBBkVQtSBfGm8PkjLmGNfy1YpNZ2FLe9mDp3bnc6eYPcRBWoTqy9hP5XaoUV9dyjtq",
  "key37": "29Hii2qLJBtfhPEYHm7XuBsasf2WamX6EcsFTUvyFrGsGEHR8qQYiYiggNLq1Wrx2Yq4WfRyAb1MbWmNkhTq8a4E",
  "key38": "2jQWiGKrmZ28GUxNufgNjKtqeQ1Uw4sVrzmrzXfRCKrgNeSqnmjbXYxCce5TDx7wrP7u6twUeU272wtfrzYEaw77",
  "key39": "Lb3fSX2svH4Vx94mVNB2rVjrJoxgTskbG3MVn4t7AycUJ3AUXMQwvaZAmk2B5Rku9KoffWdocnyyHVmmCMBK2fL",
  "key40": "1aoeKQKZU5TbZkX16cW65tHUXFzABnTEEKuH8SukNfpChkqVuo51ra7RnJRsEA89pDmSui5m154YvATJFvzrWsF",
  "key41": "3fAxwpdjbJ24VQyfsrBT1BGNBsWFFPpn4NvpJz8kKxmAmNM7iNooW3F9AHiqXkqg4hp5scBN3f2mqFYeaDgaRUvT",
  "key42": "2ugJiSVUmRo8Z4nfXRwtsYwFRBwfYFp9t2CeEbaroXU59EoEqGozuWLA216UPaBoMcSt7zK6dJXrCC9oy1gd7BJz"
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
