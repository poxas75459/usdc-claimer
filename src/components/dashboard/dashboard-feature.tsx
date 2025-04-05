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
    "5iY2RKbPDs4ZucsUNEAML1vaFom6YxatHNCf3h94w5uRcczwSHwcLUhpCBWLa5Y3DKrsZLVzPVBZnDapWxn9xDcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B3Q7jjSNdUTDFzZbTLiiTv7xNxnA61814daS3h4WLfauj5mHQGQjaXSQhEZ44EE849ErSuqpUzZrMxqDyAhDYj8",
  "key1": "kS6j935B1GLqmG5ojPdbd8iJ89ePxhicRGMruh2s7b2HQSUThVogJFAFCQvqZMmGFVQ1Wx2fj2ngiP8m1bbk1Y9",
  "key2": "4BCsTwgeNfSxhX46stUw5icZqcThW3SnRWDHaE8ziZtxz2XfSJ4U5H2BGd9eGkF1dfrw5SkXAJQrqWsDzvda7zKZ",
  "key3": "6478akB4zfEbJjPJiCgkmxGGx3EEbUiUCjSKo1m45hzfpMWxnVUCRM9GB9yxGoxcAiQV8Ej4Ge3hpQMUVMdESqve",
  "key4": "3pVE8aFyveJZnTa8H8mZBFP5e1cepN2uysyusn84MTdnvvywaM3FhjggJ5nhFYZ2uWgBeHz1tVLZvwLMwvPzagKf",
  "key5": "4ZiYj7oHoKweaLNPwJEd12FUnZstMHDUNDfDBoJKQbRfcUJcZvYVDhRABLEKPZLwe1H6rvxfx8FS5eywrQ4oEobi",
  "key6": "3HMpRpWVVTv7yHJpwdzgryJa1n8mqvNFiNFypN91CXEHSs9j2UwKke6fHtHLJ2frjZwcgZxiXov3fshSW29qQFj8",
  "key7": "tzqhEAeFo6fgKECRy11nKzC1hZAPRGkqZd7Z965uWNYaWAQBdTqSxvBSkU67gxMKEzhUzmnhih2QY1CDA95TcEr",
  "key8": "4Vajd5wsrYikkyR8CigeYgZXoKjhN1KkaNtvLKWH7mzJdPiosafUbPe5qy3Xgc58ze7RcEjw2ahj1itMDwJZYSyc",
  "key9": "1yXNFQNNoR6juTVqcBgJ8MDXc4Uk6bUEWVzFmw76fGGdgoZF1kF2ZHFK5c7a2eeDe14twHvs7rePtAkLFZYo95W",
  "key10": "41tyHnqArGZ6dXeYRmUnZRSEmpf6hYyis8w28tgDGnL25VGH9oALPsDjqawW1vqz25NYLkekEHgrtafCPf9WNgLK",
  "key11": "2tiHkmEJmAUCDq6rbgb9WQxzN4QwaHTpdJv7JBmhc4GDYGJVPP2EzTUWcGisd2vY4i8LKBDgD5ipTQYgpxjx5Jo5",
  "key12": "3uX1W5it7FivBkzC8FGHumQZKdoi6aj3CRRDv4fv88FVybyQ54xMEi8H7oCMKFjABTGutMb194c8AYMQdZnQu8Ls",
  "key13": "3wF4LAZ5dwpU5ZFDwNXdwJCXYt5HLtjmartdahMCsZUpqfXKgVFApQHDhnMhX6M4mD9MY6isNQisNrjqsB5ij6Hs",
  "key14": "5YNMHZKcuQXDvYghxNhf5titQsB91rTvUQw43YZUE6DfyUjfMbwGmvmAcQkSvDgt88mUhcsL32KVUQzXDEwYZz4C",
  "key15": "5v5rN2XhsxExLQYuJ32x2f1EwQ6gwhHkCE272Hk2hFAem3WW4VTBeEN29K2jS1cyUAzNi8hYta2EgAesA7jRsaAL",
  "key16": "2A7UheBTgrugoUtnQ5LfCiUoUjTg2qa4hM1SAxh51VQuTjDcTLF6tBZQZ89gNrjJPY6P6RXiE4rhznj5DW86UFin",
  "key17": "5SpidZMgmNp8idRqt2L3icmzhrQFe3ZsiAWQs46Vua5JER6yX8NexvxSYtxhPawAbEMiz8BJcyXC5wuYwSrRxF61",
  "key18": "65zz8pgJ9cgxWQU3JKDL9BNv7UXG8ASWXUJisKWdv2tdD8BzAoPjdSmceeMsTySwV8h7v3AQcwwSidnP3AYyWSQS",
  "key19": "2NXhdUtDDoJ4DJswowsM5mdyWSTk8MFX51si2Sa6nqr9pMwtdvf9rRtpmshCjmGpZ9MLYc6LgQtiF6Qus26egAYV",
  "key20": "59drSG4RL6AvaVBagcnsaDrLHfsUEWW6yNRYjxVYNEzLLfB43gpmnRmgTcQiokV8Biza9v6Q7WFgXHKgGdQ11z6E",
  "key21": "33pdaJSzvGc8Tvye9nBY3qLqaNh3hTC2Bx2qxY482Vh1yGpfT4q7dhDGuZ3ushFkkZnKnTZ1qM79CdvP7WdEEs3Y",
  "key22": "UmauRYJRJsAXygnmT24SHw1Csjn1XeS4FJc4WKxSTE4cJZtZ7GKX7TtWQJx7UXJ3RL34RvyfysRHFuJ422PK2yF",
  "key23": "2Qfx9EXgf72fxuNSS7tFjRrk5wwDbA1KJiayehy7JdCi1Vwx1VNPMPwXbKmXa33oeDwn94337NbHe1zaTwu7BU5L",
  "key24": "4ozC3fCXSeUBWLkJ5vqsmrN13ahe9RDy1oWUTacUpzYf32HHwLbqXLaLD3XByxyaEdrGCUJHSzy6Q6GkBjEH3cE9",
  "key25": "2oABaqUFygnSpvDPoVXMsNxq1WbTDbhWhXpa6VZfLh8xUgZoNFtT8LwTRPSrAwMFy2mvmtGvFXbR1bNadRgKL2uP",
  "key26": "67SduaX2zDy4LF1hQzuZNmk6kEJPVWH1ujFmqEotedS5f9ho8zD6UsQNn2LPaARJhSVgmCrDc9Pb1Xxaq5wbVu2K",
  "key27": "4m6SFCBgh2H1wYVoBRFanRskLz28FuPg3Jc2FxkCw9aRhQPqupYdd5AoYoQX1NU9pLeX7U5vQYL3SZ56kQ23V3Fn",
  "key28": "3xjiteSNMBSpxw1yrQfu2Dmfx22DUdSdg2PQ8sqbaC6YqdQXtwdUjSZkmsCphaMT8DbZkDAeKytR7pBd2y2rQJJc",
  "key29": "tRkGXFL8sy9D99vbmp4ET5GVskVi7yvYjX6vMh4cWRcm9P8ebqAqprYGbQEaBh9ZngQhzUm5Z144DYx4b7Ryump",
  "key30": "3SLt2MWR4JiDR9wwWVcyseCZnkES388NA4wFXXHPrxoXnsvrJ2YjsWSUJxgXsp2k4aWd1bD7AHP7rvSVd9gMkVYN",
  "key31": "5fTLDinJm3GumdWYMqKvc1hDLvmF2NNvzYTU9Wkwq6JauRuCQhPwtLzgR7ztAoodfECz3qxudASatYjUi3g44ef4",
  "key32": "31JAkS2P9YNT1UoiNps9thPkMfMqqeQYWBJWjjqrLq3FXJ68tiS19mDiWZYxZ1RrvawCaeYf3iUwCz4QpGu8zB5y",
  "key33": "3BnB79hqnHgdsmEcqMXuMZqF9Yna8gYfs3Y5qonbYGYAeDJwMVFEboaF3kWVGnkcogRFvUTshzk3aZAzuFV81ozU",
  "key34": "4tjHRmYnoWHMyZvc6Eb1qoHK1WmxQXkPBkqc2rGiCUSbKZ67C6SAtEMo2MKG2Pj7eHwWxsD9TJx5vVXiJdSEXVgr",
  "key35": "4azXb5C9Uq5X12d2QXmGDwbxWbCY4Pe5pYaawJKDA2CJykRhbofDfVWmDSMaa4L1MDD1bYXr5Q698DHMv4dq3DFm",
  "key36": "2AYB9ZwKGPcKti3VFuqv59Uy63VkFy5rYSxshoypQjtM3vq9D4vUgh2uA9xQddPhPvioux9iGgZMxPPikS5Ka2Kc",
  "key37": "3L9c37zgnYfZ1nSe56sYrJPkP2rcU23JDGNNVSnU49dMy4LnNcn1j71rSjL3o5fKMCL5251tgafzz8Sn5FKTs1Ke",
  "key38": "4zbMbUoucV66G6X6s4r8MtZFBg8YeHe3XorZ8siS7cNBzuF6GQraS7gHiNrimKTSam3kjo7z3A57XPXWdrkNKjrn",
  "key39": "48r7UkekjyNN6SuyVHDKztMxYtZdLpxCJjrySDg83uvPSyAvKJF3CCdk67CZLuRQYwCAiRuNx75ubrHRCxzWGb4d",
  "key40": "64w53szJsy7UWXzg2H2Uuv4Uu4Q4VrPCTNR5dVQZQzPyEZzNPPuoRo8qNAq3W7HksmQPwX13teJLZvw1jeLg6Ro2",
  "key41": "qg62JYm59MR4sQQv9khBxNeiNRftAKvPHswSByfXZW3euSe1ccfvACLgL3c4Bracm5yiF1bXM2nyn2rPUcce1cb",
  "key42": "5ym8NiKN76rsDSVjJS7tjjcazyRAeTynT3rBcqL8Se7rHpAbbugzGofPJHhwEj7nWXvSM79Dm96ddmCzzbHdEPoF",
  "key43": "4ezZyXrY9Fo6po3G2MqbAgEeumV3YqH6u2CCr4LxeduW9SG7mH2vuDAeSH1aThgZd2PoCWDVN6xB2QGLVq2urc4E",
  "key44": "2ygsyvHEdLMUY1gsYSYNzeoQseKLbfy5PMxtyt7KLoJo3CtdEqsHNcY5oY498xemQdhL7N3tKjKrNTH99xtxc1H2",
  "key45": "GsTotjXANLvThCNP6cEcNScvo9PMwWDfq8W5qvwHR2v787siggxgCZHmb5ibDkjaQRsZ6MK7hY4u9kQ4VyCEy1x",
  "key46": "5Dp1PobpsLTEevy22dnXfXfmHocatP8sWXxWDaFWYnxB25m75oXvNvXduCRsKfF6QqKQSHWnW3HYhGc7pQN9Cg41",
  "key47": "3RnPXbk8NrEkMLxcyBC7AFToWcwvriAMxaQQbuBdfnRKDxbKqxmBKQ9G7mYq4kZeYyrA88wHyx7YZ7qpkvmBg2Yj"
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
