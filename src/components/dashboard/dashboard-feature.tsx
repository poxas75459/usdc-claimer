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
    "5yGLYxAfvvHY9yDocEQKLdvhFrnzQf5BYS1tkVQhmexxPeyEFw6w8oYAfwNPnHQajtkUznWZDguS3eokX3jbLTHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33qwGqkvmMgbCmZQMu8hC9LBPD9rSXz91hToA8EdG5786Z92Mam4UCRCvEL31znTt7r4YePo17MewukhC9ePkKgc",
  "key1": "5wLLRQTpqaXFRfxzLWcR6qGrPjjgyZVvKVQUR2WtFfCptUhCpEBPSL7rSwAoMxm8bgYF99ytbA6MCkMx68ExtzvV",
  "key2": "4eGdekvbQ2NyoXKaNfRrJJL4d47b93tEfuqHNPRFqUtoCy7NsiVpwtUvhfGPcKusTXixTSZHdaptXEeRJnEeoC3j",
  "key3": "3sb6pk3Typ1fpW56YkMpTt56xGpKfb4SoYfdd6MRuJGMRif6W3R3UH4SmJcXi2SZH8f8BrSQmZMvEprgMJADXHau",
  "key4": "AgS5HLEg5VojVh8GsbLYrDJnUvBsNonkAfuJiKRwe7AetWmsG35SkwpMAZeo9c1y9gHqi7VjdnGViBNnFNr1ket",
  "key5": "45enQCpFEfbAQuRuui3ZVDpTScQ4asEfAuLrLFHdXsuNWEeNAaaZWq3t5UmtyHMvNV925VKXVAsqgANd6gvmW8sK",
  "key6": "3zGdnk9fiM3AtBZM7rQJcrnBYvdK3UJyS8pGPNiZ19gEA7uqnBePobAydTPm8vuUdexxtQChsYonXpuvVNePEuDU",
  "key7": "3TzCLnXraoXmrdKFpEnLnHDdhpA6Aa1vGQbzhzY3pEKohpP22ua4XS4ih6ZQrw9nuTi8CviJ3WVVVroKQ1ALp3WH",
  "key8": "2ZNDDoC5sJD3fXZJwno4dwucsoVGQ75aALk2UcjSqEg44L4AVx9TKs41BqRx5T9wNqHQcLrFAJpjJxCqpzQWSH8Z",
  "key9": "3bFAoRy2NKLUaZ4RZDdwoSR2Xvipi33AexLTZTJ2oMqH5pvuGcmQwckRbFHCXHVAX7WQdGveK8rHNF7YN9QdocvA",
  "key10": "2qoYjcpZPqZ3B97HpsNbvAirze1CtYXKoUdDt9KpsjqsBcQLyuHoNjty7ye3gojFPWGHR4fvXnZeqrEXi5WdWKtU",
  "key11": "5P6M1QUKmLiaPQ5GvNssupdKktYqQ2YYgR5g1UUBbrLUySk9yiDCmJnQVj8kBXVb98YvmK488y9ZQdFR1Y6KYiro",
  "key12": "3bPfi4qr1AeprruA2CyaPGYAve271LJ3XbKieCo7A6QpQ9XhwrLNmm5UFzcBuzCZGty1ZPLmNdQfQg9XYVqBCRuU",
  "key13": "22oC9h2v7m9iZzyHSYJjiyMFgSmG8SgctjavGs7wRzn4MPhEJ1sebx5JNXL7znLopB83piKtr7kd8LS9nnvyancz",
  "key14": "FwA2hPBr2hMr8WX4p2ASsG71zCHEyV5hrBFrgXvaSwBwNDQsvkWFoLfpK5U5ckV8AxHwx9Sf5ooff2Cg5xnimDv",
  "key15": "5hLX3XdM5Fjm8whsi2Wxqdz4GhigXws36rkWpdCn6HqU2EpNK1ySjGFS7LgVheFcHKLjcXRXcSjQS5PqBbquGVvo",
  "key16": "YMV4W241MBLKT23r8L7wKJUeVaTqirZCNSgzLwFDhTcMQjWL5oms9JC7KLMsjAcvVBZBrvNPyv614ZejR8WncrR",
  "key17": "67Qz5jkwb75sYJJwfMrQsFwTa87KM2ZfDt1hYepTGsz7pkme7NxrmELFDssVZiiWW3hp2z4mzj5F5ghmR12eqH16",
  "key18": "5VHuLvvZt8sv77MyB2e7yZ6oKoEFwLtaeyzufRmt3CFhFQfbbFBADCqQajYCpZRFyLmTaGSH8P9rBQ3tyyPwECXZ",
  "key19": "42tGUzetZTuB4XT1ygeXq1WeCK8tYFTkQRbPeWQcvknQneaxhp1DvGuDqQ1Lqxg98g23CE8zNqgyxqy2bhncyE4M",
  "key20": "rMECshtaPtFfQShjky8hnqsCGoBoJrpfc4VBhDL5m7nVb4beNgfjP9Y99HWHCg6H2K2UEMupEL6NBXBmcKPLXKE",
  "key21": "4Ru5h3cyS5rE7FRcLEKyXom2T63kE8jvnfzfbFWYRHE6oiFJZDdFt2LQAhhuWozK7bT4gFjEHuEQU9puf5dm5AHH",
  "key22": "2PuHjTWVgT2Mk2dWVsvwQDV64re6bUdAu2toYLXYBhK16o7uxMV6dvKc9jYTtyZV6DyPYaYdgYr2ekkc27BSVzAq",
  "key23": "41xppjStNTUCcxXhy4CiZeQw1sF7jvZZECqUar5uupeQnm5ZkFC5muFQ5jBCznLTqrZnMWQ8Pi1R8GmAcj5649aZ",
  "key24": "3aVLXTiBDLfg1kQwq5qXeVBgGdTKyj8UKjy38XbDToaSY3fumeN5Zssq2ZS4kLRqiHFti9Eny8cDCn25zzifo9cY",
  "key25": "5EtqjmbYF7L1FDYrxNpUssCiTBUVQ2UNnGDaDDDV76KsKpZR8PN9QFFDVm8QTyNzWNAay6ofdV22XNkM7xJj99JC",
  "key26": "3eNgaVYSR9QDEJhxgjhGtPtVjJzf9V9s8dxDcZnW3tF24WbyFuyPHRfbWLBS6CGQXvrSbZCjHXTJnEVBxhBF9dKe",
  "key27": "2vybq6WmU5XNiGMYj5fSPWmU6embvT7kbN2hhqsZXe8mB91B37X1tjAZSN3aEBahtmrV8W81o8UqQk5wdHmbjY4T",
  "key28": "3kvdS3Atch4zStkMZiQ1ovS3s9Ag5R5kZzEE7VzhxeDgkvTU4r7jRMMDjywy4UUycewkSXbEBfCWMoytRQhsDYCg",
  "key29": "46teC2QJEDrd7J9pZfrjUEaEro4tAUtk5Jj9HEBShbMCXfPTPiXqxfru8AfFhjndbwxCwNPuMkW65dgNba7WQqiR",
  "key30": "3VyMBBKd2aVbsrvA2zvvLeEdpDPLonCKEQMv4VVH3Bzyy8gZrW5c31nZGhEXTJYuSEip2tWoU3gUhAevNgSnUWCY",
  "key31": "3FNKjR31K6JbCtsVoo5QjDVGXXbotHNsvBSd39SJXNYBcPXD2znDugo1wvFb8WHKvzg7cLTeyh1RVM39URtfJ55R",
  "key32": "3Y7HsMnU3ebYGNDewXvjERcFpMr4r6rVyYMe1q8Q8qF1Wpzgt7cQWwmMEfNc22jvUNmowpxBCNSsmnizdFZCSbxa",
  "key33": "3EudgxVv6UhhuPd4BA8HbeDbreNHrMFnmjKG6YXgSYN6NTN9kiJZ9Pdc3e2WCGMM1g3t9bDVAbbEhkB7w8bYRyfa",
  "key34": "2pPHspZzD9RMv9mJVeW3zr8xz7PkwvqLSE6Gkgh6ZSjZxCa2SKaUTcsyxGPPAs595zFK9NMKjWaWXVBsEM7ASFTV",
  "key35": "3vtvSuucM19912hTzfMYURS6R6RPLvTV6aSEQLzAPgJDsfvjAZmv6vm3xFuzDyFyB7DPuLLhxaipcBz1k4ZJuBy3",
  "key36": "2DXcFYT5eehutdqH9xs43R8Cj1c8onhdzfYRGXtESeUP1BRcbWCLJMvDnzvYtfPQuJQUrNdzT9Gg6ceopmqQVtq1",
  "key37": "dti4oEbYhQTa1fwzDJzwCtRN8FLxkc9btpESBEBnTPHMvzUbt4QVPnc1rKVcrNC1VuCS7vL8VbhyZTKpGcsfQop",
  "key38": "5Yey3znk2uxVXNhf6KrjSocdz2M4fmFuhSemm8XZWRJn8DktHfsy7q3x4P4xhvmBXK39VEsq4QqQceGSJEbFrEUE",
  "key39": "2KpgqSER4TWa9jV6pFF8uS8Wk5RwTB4Gc2sMaTYC6fmFz4TERXYzTzLyHbUGGg9W181Rq9tAm5aizFbfEuTSGLm6",
  "key40": "3b9zh9XuateewrfAARjk92g2vbPGTFGAEWetwNSAVp9em6KeYrq1JdN1EvnJL6NCBsCS8W72LokhmW5soKEB4326",
  "key41": "3rVVuNqhb7uvqZpgNsWQej4ZzsYcRAqKV9iJMVWuRRB6mzNHsEAVURZrgDBKz1MQ2iEQiKfuiKFZ2GeSjFUfyxS5",
  "key42": "go8B86AqdzRj9d5pNbuZUWDcptupZdkZ7hcu8DgDiJwD9zj4AXwMWY8sxWqGJB41rp7LRCtBjiCvAgoT41ADji7",
  "key43": "WezfjbvUvYojpq7XpSSYrrvY8bTzNe99LcFkt54NiES2BZBwW8tfXU9RQGk6ncgmQMAxywB996NqsTh6HxHtwU1",
  "key44": "3b2fgZxsQctorbvs1P8DWk4mB4iiwqbLNDxPGwqnRRfgKPfTfZfaGGUYYqyd3VtfVNcAnC5kkNPfU7Y8McLQfj4t",
  "key45": "yjy43AwhFXvrtPhMY4UTupyzFZeMUypNQt36ackFs1bdvqgfuipssch5Y75BrTCP4ERTNorSDKJEUuamTPgn2Zj",
  "key46": "Ru3WPZoNLGiMRrKZ778gXn6pMfsrBTFzNi3BLLvM7e1YS48C9cFZrngFv4LCXERA5fxKFXk49YoPYv1ZsgSiYMj",
  "key47": "4DRwkuAJNthDwTYC3CVFGa3HFeDgfGhMXf3YaQc3KJEPgZaA3NsSR71sUmCUhetNvh7JduYF7UkYdZnXVvjWD1Tp",
  "key48": "2wBKkCNpiz63VPo2ddmhrzXHQfJidpPNY6QUo21dSQnUhmuiRpGfFfFy8TF7ua9YazFYdpJhgENLGnAMpUBa7TWW"
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
