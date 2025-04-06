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
    "2R2D1VfcHjMLhC5xjcTfn2t8kK25QSKn15iWoSqGD7vJsggPKhjjU5LgRqVQpMp4r5xs3y7PbsyUa3zWfGdbES2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "74Eac1RgC59ye6hEqgzZr5VAy9zpsCbXL128se8xrxQiH1QFdMhUzFav4JzB4k43BuxsPufW8TMCC4D4s325XRf",
  "key1": "yurcPgkFwfHEFpTMagf9NVJZ5aohN64bWLsBc8vevVzK8FJDNoXv8pxRYpNMbWWRc82r7sJgtQvGgCfAnEXebsy",
  "key2": "5JpPpJy5F7AwWEXDk48Xkt3uvjTW2TcKRJmyoZaB15uZJF81LMubXF8BUq9ANgqVMA6jW5Tp4V6byRXY4pqwygsN",
  "key3": "2LJJZp8NZ3XY937bBsBQMbPL56rXH8PDhNxEvVzsrr3fUXifVGxMSQVt1YMzo7PrZev2KutApAULtHNiwhMQMEHW",
  "key4": "D6cr2RfENVXcUZzwDc9HnJEDEYJh5zV1uBsh7vQkLdq8czEPc7QVEsu2aX8XUfDP7VPtb8fiB5ank2MtcabYgU6",
  "key5": "5qpNmVvqMCUuiirW2QaTppLARot63GjKxVvYTF6xGWKPsLt4RXRmPjEBZYo3q18WvNPHs26oNoLVuTA22uLDpc5a",
  "key6": "4PGwdDoNoPXmx1gCmJR3vAuNKQcFjZq2U7RjYw34qM7cPrkcse2jmuFgEMhuwJ3nqv4LiSmEp5VMgRvtYUwYGHgu",
  "key7": "65MpHPeQZ4XJKvtiQNi4qnid2qcqJDisZYmnVLFiuZ3V3jNZSpsS7FTLLMGmq96FnvhQ2opVzcR46Qvht8TBG5VW",
  "key8": "3FxhmBkyuetcqvK8d9iRG4m4NuDu1F1V9f5y34KKCKDNv2gwMU48TpWpX1MgQY23RZke813mHGMBJDVRFMN3DJMX",
  "key9": "3zmXcRVK5XrNBjKJo33FWsMG14PWZQj6kwYjzJpVQRioQaRpwoV3q9j2GAVVfMutbQd3psYXJDfYmDKqxKtX4qtr",
  "key10": "54fawDHBEchKwZJ71cS9FkoXkVU2nxFVreCtPypHZRYiEphZc6u6wctFCrcrgomD4WdX9ZRiuGgUy2oxBQsfYEjW",
  "key11": "3z6hKCxZoh5iy9ZEkQ4pHufy9zg1Y8Ssvke3vwkHAxLFVkqMxjsCSjeACcJXvQkRbnn6T3fYP2AMStVqNXstH3ay",
  "key12": "2sG65jeythAA4tFR7YfzRjVBMSMSbrcm5qLx7rpUyj8Pd7XTFXH9sgHR5urDHLkTY1Jfo3XQ3dNe7Exbyk1D4Abd",
  "key13": "5LTNr3Kamb3PohXhSkWKcbPCVaUHkHsUEzQF6EeVCAdUQguF4NXk4DXf2KyuaVmH6n9hx6Jeio194yCwKe6EoqgD",
  "key14": "2FkeTccWdN78Ctmxheavat7dnvmgnpXFnkYjwzmWFX3Q1xf3GKQX9ah1zmER98UKSrkdox78n7R5iQE1VTyCFZnK",
  "key15": "kDKHaQHU8162EmRntHGdyjMUq4BptKoCz7Poz8Rrtq897i7qiV5JYvWcAr6itGMRi7gWR148geAmsAxP59j3cwe",
  "key16": "LDR4zQ1spKTNrP36XSRKWsQgYGmEZ27t2eKqGJmWSkyFL6vHMsWK3LLXrip1CadRC791LHNY1fyrB65SWQfjjef",
  "key17": "4VHTBm5LoefFZrPgcQgYNfrFhi1W4kALdVEGsT6DxWcjTKyFHFg7h5t1G62RXUowh1SXvJif9RZcMqrjCCBq2CqD",
  "key18": "5Ec7gPQLFTsiTq6WzUfSRwfyZSDdXncMHbnmvNuU6KYrkJyMF4VZ48w4N2eQa7ujdGEPNw2Jrhxt613pXv9N1yBQ",
  "key19": "2b9hdjbRjeLnSTKJCkKYMwWYcBQFZQZM4pZsGFkewM6K8RvpSdRcrw75JFLgvxrvtJGx1AVBXr2TbkwtHjuZXxDk",
  "key20": "4tkav6Xm47fbJwbMtPihzYhLpZpE5bKKcNeu8qcjvt1AHzquzX585ZzxALvvBx2r7Jh6JrP8omysjkaahnUFTFPA",
  "key21": "4N7RiLA6H2TCVVsWhVR2rLED2pdR5xGdv88DAKt73qUiU81CLHDULbDdboAU2KRn7JMViiMm3do2tYD7BxjdKXws",
  "key22": "4UYWYR1ZR51fFcn9UX7GuNxM5ypdmr2itFAut3PAcivUN7reonHsSxpryQ9ZUfa95a998mjYtwKjx6NguQEcHVcV",
  "key23": "5njqdQokfsCJbxyWnvqxxzJnMrwRQPCMkP41YHQKLrVSoFq2QKn1UiL4dqb2s6486BmfcxBaKAeJ5LSkMWz11UHa",
  "key24": "5fU2Q551niP5TtqjdYYZqqbfseEsWvU4ux2hsHSoYfsZnjiQDEKni3a2BZfQF6P5jc1mXiNx1HEfKEf6Ymjj9QAG",
  "key25": "213uBv6zZpcM7R2rq6Vo6kq2Nn4a37NiWV77SoYPWGMyvtDBGoYwVdgukciJ7S4HL8CdC6drAjJ7H5aMJ3nzGiBW",
  "key26": "4acQWTD8TTszu4QNz9sDCqcst5cK6rvH6YYxXXxvotwoYy3NiHe2aDXAXW3gMetBDWJir6hUHRjgVJ2i68r2eJZa",
  "key27": "4GBecvH9YtnCanXenfRBUK3zQXqfNYh7vMTyYPwUuNXZLi2ygQALeP82r1VwKkNiu3HJ3fYoE25FyXNs2cFhVnfC",
  "key28": "2ETd55vuaeji8SgjL6f8xbisHTUUHQubg9Wd7yynZtdTtGdrqXrWoo5rvyqXoBsDJTDnBftM3paxLhn9DKxe97dw",
  "key29": "3Lpgpp15aPApC3iw8A7MuzcnHGxv31kj9deQv6S1QeGZZ5vfTZYoPThi7ae6UnUGyNo3Brq9vNVpo8QzN1jjCBxJ",
  "key30": "4guyGrVjHwn1cHxEjK6gwoGd5YptZFGKJSx7qcEAE4JBmTe4w5ksZ5Sz1vX4uTzssKvYN3GXqNEV5ekKwRMTYXza",
  "key31": "45GNUDPJr5UqgGyWEptzisVftaB197ra1VQMVcrRCmxdnm7iANAukD3iPWoXRyNfoqZToNfocECftgLSnffqLhhP",
  "key32": "23PSPbqTFyfsvbxX1kcMCYhAsagGjKc36bcU2v4RLiZZLPpe14KJRX4TdEs8GduNF5FvTJJJm4zyCtVz1zAh5BXV",
  "key33": "pfNdVY7ZG2e8mQJKDFw9kw5i7bVbT7QLRyf3xDFJPJwVHW9mq4PDqf2mWd7MJU6FBpYAv415u7EAnCNXm5Ve9h3",
  "key34": "3rFuhBvkReDW5XPkmmjmZ1tTUzCEZdUQRPDgte2NEcZkZiUuC2KUpH28ABYHvFdM1ukDTdwv7ajWJVZPUSiidkys",
  "key35": "RJPXP7V4NCDJfSStXvKUaJfFfgQiVqgsvmn88oZsNqMtbE5htiotQ5FuND2DQm9CSrP7EiTkZpRUxzHgzbD7qV4",
  "key36": "4yYVjF5kxPx8tPjLNfkPm9ZPjGhe3pTqmCMFWjfuWDo2WkgKNNLeyMFwGYhrC85iM1oZBof6wguf49QiP3PJm7iY",
  "key37": "2us4DesQu4ov9iPczvgGJSFJXTd6mkfWNqhQEtHdXHsSPvLS5U5c3oQXxqPcGPdnKVgEv5739H6Du6wGWX1SLyBJ",
  "key38": "4a83yTXAANgsrgHanCsDdNSwRVzmFyYUQyQYk2XH3QjgDsEwXRf8JVuHpRiHF1Pu15wMxgkFk8JHhrbFKkbVTdgS",
  "key39": "2pC5bxXD2Re7nDDTak3kV2T11Q7UvZeeKxpc69Dt5JE15DWdWUz6rZU4ruLMNrGmJLcN5ajoR2kganZWEE5y5sPv",
  "key40": "2PKZ7v98ZtaYhYmmzAbxADDEdPofNQQZ749DofpU5LTEYqcQrb57AMPajjDRFnLgu9Wf7rx1FyaTWCAe2pD9bT1F",
  "key41": "CavGT7ZFy9yLhKsXWEJCU6QmvqQDVoEzScLJeHwjBh5RYcRcPkVEGG5MzU8usoESLYh1CmSC8YxcGcRBpCpJaW7",
  "key42": "3o3JmCMGGrTJejryCPC47qBsc3A8jGcX3x3DXHJBJVADqjLTRhKvZ5HR4n2bSRpbKSrK7inKoqBKX6vVYpEofyu6",
  "key43": "2ABzACTyAhCSrfM7PFybtXF34AC9KNyXrqeU6z2eSpu3h9aGaAjPAmJq3hCjyoxLJd58sQybTUBKYcZbjgiD2K6j",
  "key44": "3uXuAHhvDHrdnWmZZbiazSewmkt5uH97MSUo7wrtDfmD94LQnwhdMsPihBFHueArWLdcCmFMbAeZxJDngnxiZR9U",
  "key45": "5TVmXbh7WERsCTjB4AU7Qkduse2Q8SapPYN1jhMcqnqkkFj85y3RcDJPyXh1q5hjsHW8LJavWrHcHrPvnSj1y11Y",
  "key46": "g8QtHF8GqSKq6iz4bZqphr8KkSmTjJnrmd6GN5zJp43GPizQmy8FGCvvv9qqngiyJXAXJPXqPHu5vb3iyZopkP8",
  "key47": "3FKQqgvtcJR8L73CVVE1GNdVRgkbon3xch41B82nnG5CUc4SsayiUHBjFycxGMJFWEUKAfEV35qzuDiMvWSboVz5"
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
