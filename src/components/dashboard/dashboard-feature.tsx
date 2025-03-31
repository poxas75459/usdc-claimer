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
    "5oDpfGMT4rKVzoMFyjsBUurXohAkLn28H7gwYoTNkUrn2mAgXDt4RtAmvJVrC6N9cBXF1ckt3xpJ4qQ854QKEwjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uUvGhodztF1aCq3v8zbP9wrR2mnwwqmWemLfzCLYzZ4jUdiXfMKYtxCZYYcpdCLcSn31Y1Qu7WvnWwujs6gn5QG",
  "key1": "4Nus8P9bkHbUAZMij7SmwrEiD64vcPUkQHRr58rhNP9ajyGKBTtGwdqJasBuKn7QfxQkyesBefwEMR3CQALQEpEF",
  "key2": "5uYsqBSwc46uimemahbF9eFFH5pRnmfxUDYJ3yAVpAjNN2uSJZZjVqMJvoGdHb64hozfYenrvhoHXN2KKKjJnFoM",
  "key3": "3ZQ8mQUDMN4RmWNqbTFLqpzztsgoeF7LvbWrcDU54pEjgeDT5Cd9eF6usLVRLCfTWZWJnrViETdc6CtMVtYyzAAD",
  "key4": "3eW3VwGLfwynhNk8Xw4yRYvcYggck2qBKPu7cfNhTFn9PijHFgAfzseBPJ1kbgEqnggAFiLqs3eYpcUzkzLJmtET",
  "key5": "3u4EJL7yGUBNNEi9u3HkKpJbaeyQN6Vr5VQeQQiHBYo334kypbwZttJSWvN3CDoLzYrjYWx7JcYCDjuUjZuZpXW",
  "key6": "4CaHPTKjuYCVHDWj2GvWrp9eVTYSobyPK3x1fJpnsk8asiWhRdc6Ascgkc1kSa1AdtJ4WcgNQqYpJALCSgkcaskz",
  "key7": "2ctsoAwv1Fu17jRfKh226uDDHUCoJ5SiBgmpisWGYuw9yz8ZB5kCj928nFbZKx4JBqYa4tpFjakWojtaExWmdtDQ",
  "key8": "QYPtLyhRQmm6ZLmwqHqoSULEp129d5JovXKTkHrNGwz3hPBSMg26UaiDKmECUHBq2QGmzbA9KBnMJ7u2FxMmFkM",
  "key9": "5ihhR9d2Pa6HDnpiVt1R2xJYKSYRf84wSkmUR81RSn4peU8Wtqjfv6Tw3apkrbZsPznwazCG1TPSPFakLXPhS9RC",
  "key10": "4GNTeWWaDr2yMot2rF1U8xSEsDTKEGhGyLsgw3oQpqhcXmZP9w92TUXwzZpVJD2Z8pUW8NQgyQLXcMh9zQb19aUV",
  "key11": "67VEhXk9i1VMD9T2HJDaCJbCtU7G97WJf9H8VsYKb2iTjJVDGCHE5X9KqqNvVFrMprCjLGd3C5SNsATNVA6mWs7q",
  "key12": "3SAo6SxP8oKFjWhveQvVvEH287MqJDVcPPJdGM3zo11R44FwqwX1uwqLt71tGyrc9nVUwPcCNrDpkPGbvksZwAU1",
  "key13": "63rTvDP61emyPyGvXTUeEyYupqWq33w2qgjpwtPEbmVc5yE3TEjDWYod4gzSJqATitrhpyNfLd33cQRVpqunsbDP",
  "key14": "hyWtqB8thLJdai3qhLAtEtibeDyrL6bVcXiwSNj59S2uib6zWEvnEFrNMbA5zLbZBMh75x16faXxKv1DEvoghKa",
  "key15": "4TVpE8hKusiUTN5ia4tqRAvrg996AW66AJGnyv6Ru91rBv3RG3PnTZhGGftFGQ5tHQMeT895DSPccCDVsWSyvV1z",
  "key16": "3QxD4HWC4aAq3pC1T7YWQKrYCCZ77ETmXPfypgKDwAqMdEhYWFjWkRdBbRA8ogoWeN1qPKLATkdD5qNKiXZg7UUm",
  "key17": "3yU93RZvSB4cTYv1rfG16mAj23JkdYuYLWGgFWG4xTwRFKf6UrR6QiDggixC7YK9LFhw89wTWDSKKrtnbYhhdQDw",
  "key18": "2omhXfYkKK2Pcyn5AVAPsoTtAMx4eFyWkLDYR3BsXBy9Ym6ukc9cTVq6Nj2wJU6X9s5oEeHnUVjgF9CZAGr5947n",
  "key19": "5h8Fiq1PucHXLRjHHcVUpNeCpsZhF1HFFgKesejtaRVpnayyqfykZQStk69mwnmxwEETprPCJS6amtweQktjiki4",
  "key20": "5tounqrqsKvD1c8hphaUNmqfPPv5j8DvH4MNB1TnKCmhF4fgjmujUMkb5AbtD814PAjPYKLzrpVKGVFC48KLzYqS",
  "key21": "3P13C8yniAuD9Ap6X852GmmCfVQ3RHKK7Mm41i7CvBn7g2EuYNK7p5j9ojF6XEGNBbEb3eo62Z3AxePB4fGeieJM",
  "key22": "5vX6byCVsRwsAUDQNbeRz3Y2dqaxxLjrbj5QsnyBgM71Qn8eJM8GR4udCs27HKvZECUqmct9MZ6yYqUTvg18ym9Z",
  "key23": "31t27XD1kDzCAHMJgHXLECvQAry6gkiN5p7QabMEXw7hqDLZSTWNGhnUko4RWSQ56iEXcs9CKtftoChiGijYeZJ3",
  "key24": "22HsMdJKeKKxbRHy3kV6b8EDGM3kih1moLZQXbCq6g2NBBt5uzN4wFGoCdG9BQ6ztt1RbMtsKrzgyhasiMbCddmB",
  "key25": "3Mo741Vz815nhEnDUYSm6id283qssPSzXhrSoCd9KdBgziZL4T9vmjfaRCrN2ZcMVFnWnVEWPz9ZqeQZGEPPVb9E",
  "key26": "3JHvEiriFk3BLTMYggJ77DguwrHYWAsqJSXoaJHAk6cheX5oUxhL981WMorVHq8NMuWxxjysgUcVTxmqFgN22MhY",
  "key27": "t4QM4ugy4R9VSnTRCm8fPC7nm5rfi1Kd2TvX8LQ61D1PTPsX3dg3vMJFv6Aku3fR5zpByLXJS1hicHDChVSvbV1",
  "key28": "2dxERxa3tPrBdycH31b4rtPQGdGCpPQJcZM2Tw6rPQigGMs3FjuqxPB1jXE17T51QYtJCrU5rHxcgExRHzzsybRY",
  "key29": "5WwR49JEQxyTvkzR3qGdZEZUn4gYXWwJsPrfGiowrRCdeCfV4dWQzh1b3rp4RQAE6KqF8qHfgBp4A5dSS5LQFETe",
  "key30": "2kvuaaBwBTQMXdKwKFEeqez2xKpjvpTMFYYxQSiQ6xHD47BjFXQ4cr5bQRHbt2apxtqJasYnXaFAqbt9qv9p5kKo",
  "key31": "332szhYmPQXFJHu6fBXr3AYj2Kw3Nr2G8hebZ9eEYFukJXrcb7SHqnEWqRqwi7DQgNLVP4jrvbfPwR1XM9fczXf4",
  "key32": "3yFS9V9MetNjNEgw53NKeJZc2HqSM5EgSmX4nKnvhE9kCJSa2s1qkmf1QjzcmRrKqnaWQCwzqr23AUgy8A77VLLp",
  "key33": "5ENgbp2Vkam2PdAwnP9L7XaHhWXBQRBWvc3CLJAzK9XPKSNKwy5mUWMndcBXR7qAqVCwVLRguxAi74VkodBXREZS",
  "key34": "43Re4PcXskoHVTPm9vkFJEXZJvmmFRY8eoRB8hQSXQD9f3rPangLc4BnYhMVLnSwc1GB3R3m6yKPiFg5TYxLDbJh",
  "key35": "5Nnp25v9FAG15haVKez2xhbQwLa2LdxbnZZe1zZUKu6CDJB1gr7E6JhFPGKbHopNXNWL8YT65MHK3P5aWeqk4or8",
  "key36": "2G1MgA68auvdQiKFaPf83bAjMLhL1C2X8ugoVkEdNmVUSAeTNPwfbsMYKYinJLb5NsrrBKtZdwJuBFQPwoKS3zLs",
  "key37": "3XeCmaVxQQHE21NFdefchXSXqsF3rzG5ZsZwBiEBHwTF5AEUk3oyXkJUUxvAP65FubT2jFoTfhApJ7RW82gdTiyt",
  "key38": "YkpndoJ6FnuXS54x65RR2JJUgkhUojYb73zh23pWkvjvbaE6C1Z2Xck4872FaywiUDHpSvf5rNJWwb3Fs1saRsU",
  "key39": "4cP1Ri6ZUbvrmhL6GhaDEmCtLTtFDnVSQRd8LdeCxSbWQ2cvyyjKWz8YENN8H3UwFbjAZmLd3cdVnxDJhp4CgdbF"
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
