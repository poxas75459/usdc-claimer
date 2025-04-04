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
    "wXqo786hbkNUt3FEN7XYEX89L6JqinM5rTiXT2JdG26ZiyQGZvHDFSoL9NXB4xm7doPRWXcsjW8DGjhSdNCYD6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ioqnCJxmJ4fs1qa6vBYjhpCjL4sCorXu1BP3FsdtaW5ArQpXHAgQhWDQKixfg7ES4DhjzdgwTKuwfzahETNQKz3",
  "key1": "4NhFkChe1VYoD6Jy7s5rz8GpyGWEdBNJF6pdWnKesCq15wSdDUmDFkHRD4coBDjNBmKYpnmSr2paCLf9dnMUGQFg",
  "key2": "5RfnuwLiRqd1BhDbpFc6kAGfLfz2HQ8sFJMRvpKzHKrFjnKivgjtTyxNvqKzWzvJMVASMF9dnYv3MWfuBDKYuKxY",
  "key3": "3zpsjiMZ9sK9yvq3M6mLXF66hQiTWu9VC8QnzaJRqzGGbyVMrVTBrUQzhwFJRSFX6efVCGGppwEfmy3nQYDmHyUF",
  "key4": "2bWnyZESTM9zuG2yhikMY98sRPPbTeCWCJZZcr7cwsZkhbLRPdWKDzGBZdSSHfTMZJdyhKB6vFqGHEFZE5LuZbMi",
  "key5": "3shxRrYtsPnYAXiwjhjoZZxf82Xmo68uNxkunSF8nPEV3SNUAABVgRtEEjV82pJ7scz5XCVEvsSx4iZGxKJWbqe5",
  "key6": "2zZA7YmkzkiaSRmAm6JhUyYjXLVHgoxbNLTM5RHrfeNF9JC6iQ3JkH9gChgxp2bJR1SHJUyYTSVFT7jTtAqpXp9Y",
  "key7": "5pzuHN65nQP75NeAaVwbHYmqWVKSwYK7aEX6tkj1PfM2iEeMnnyCyE8A4VkK1enEQmXRv9tTB4WyQeynGS9poW7S",
  "key8": "3denPYKu3DLvgQSno3MoFW3Avktx8Mehio8N71J3iykTjojSYyYZvL8AeRTv9xKCqR3cZhJwgurxv7rkzJLctBFa",
  "key9": "2QHHnxCAUnv1PyQFKeG6qvTywBdwm9KeHXjEfeiHCFeoiSHeC5mp5n81keVAeEHTspBJfrycVYYEyHfeMjKbvchR",
  "key10": "4WnirZTY5ttBXAfhkpc7C1JaLcwjrESX9XjdabbUMGMXGovYCVEt7fRifkG9EJwcnCM8MF7qt4JwohRKozv4Nzf1",
  "key11": "q2cZ2gP5g9jyS1i2zqAVXFazaX4QYCmgY5fSL13idy44boxbc3jCr1m3NmBuMoT7obvhGsh9RmTYqd4G6hxfUko",
  "key12": "2jY8kaB4UzfMWyk7D1rjVKjRGqcbPscd5KWAiEqQCvZyx9W1BZ7caj2T4L5r1RJq8PAYR9wLq3K1DGtx9MrfMbSj",
  "key13": "5Ypke3RjDkRkZ2EDpjCMRLHi1mff7SFcaMZ5ZXcyTGtf6RxrmNdm97VJ6YWHd7QJzNLUiJpKYZ2KKnsM5MdDvgxv",
  "key14": "5bHfMRqebbQFNhAob2LTzozaJTHLe5HPJSFi3hj6p1C6hskJUSzqYYhidWAYKy8v3HnF3iRh5vsm9Ske1RMHdYNp",
  "key15": "59YNSAMSjoLJBCzRqhayPf59WeSkVV5PVbUQ2bh3uuJxrneW2YByNsV9ZiBkpLnbVzkJXr4S116hSqpugn4FKckJ",
  "key16": "4SAipChkzYw1GSHLLYiWUnw1qH8ydRXG2uvsQNP2NHgrGpwARuCM4uyk3hoDermMmxSXb3kT6aGxC7q2ZpQ1x6bU",
  "key17": "DvNkADm7yJa4zzqeixJJtcMNdQ5cBQWsTKEyF1U75GP8KY7PL4jZ7BeXeZDtAbVLJn3UjTQKxz9wYouzb6jZHBs",
  "key18": "5KmWDKiZuURaSJwnbKS5CrmxPcTbCDrpuFqUnMphWsr36XxY2DSRLQPwoyVnmSc5o7ytidyLP6YAg5DSSpc4sAUC",
  "key19": "3tynD9PaqS8thFSVJi2FrLFnZESq3oZGQuq6EAnN8nKm1i5HyaX4no3mD5MHzBXxXRrwo2o3R17BpUjwKHLxuECb",
  "key20": "3qjR4vauFHjoYdLiofwhKTjGuLsbVzfMvtomvoCfEmxk2QSjwh3reU3NmHWHLqn8TzBhVqh7v5BQs9oSanfEw2M4",
  "key21": "3sQDHHSMCmgbWSZ36aM5CrucuQb1zXT5yc9Zym6p9AJ9C4dHTu4X659fxECBjXu3atAZM7HDVUAgAishBfxZTrZ3",
  "key22": "5Dzpjr8KFgwdkiatpc4wsCdZLo234ScXu156nRidQkXkv6Ph3AqywZG3zrXfeoq4iBLXg3gMnvoQhzHvsXSmknjG",
  "key23": "3q5JdRcCGr2D5sGisg2pqZ3VqmjmzRpUACKJ1G3LknQBLjifZLo6J59qJUgYTtSxieVrcqizyFVbV4FbG3T3F14J",
  "key24": "4tP1ECAYyN1QNpYXqH3eChjBgA5BJrT33nReLtAaj58N7EzUSg7cE9dztXTG6osPwCDVjRezz7rJUwidh4LCNSaQ",
  "key25": "2ydgpWVEB6fMvGuPwSNpZoAxFB1cAdU3iT1LXawBYhNPuAqvV46mMp8ztypmFJtxyzaJ3KsdpnizSk1tyESqdaDN",
  "key26": "3sznHsM39cgnbxV42Sb2GkfiV6fywS5Ux7yy2BLP7umNy8aJB3XQ38BeyQNfbRVF7jmER7Z1QJVbSz7JNLdvvTUE",
  "key27": "55ufymTKe8kbDaZ9SSK6WxKC8dDq9ShB3VWsG7zpxtz1hTUPekfgUs7TSHq1PRfNmhSWZmf2SYL3XYRKzB6LgEU",
  "key28": "3pbDpawCA9hnnEizsPpPv9LeKGpKBFoqJSjakbGvH3iHqo3zdHDaCiDafBBARhN93sp4p75JS9MSM4eXnsKipVii",
  "key29": "2rommdrCUWw8h3iNZwVS8DNb1TdEfMqicvbr3aDbqb2prMcBbyhVGLXxRYwK3677AdZguPy83kegkh9t1NKHvQpE",
  "key30": "4bQDiFGhNWN4ZUaaqUDTy9YD7Uw4ZY3qvjjB7hCU9hTW4prg3hDNCgUY9fsJdtRj2W4L8jDqCmnVbDYXesnETYCi",
  "key31": "5ThB7xayCxqXw65CKoZw57Sq8o8gfYX2NCyhQCjG3eQfzpg1nDYoi3NvyyU8hLqchp4PyXSZjbPTvoVxqC2YdAy6",
  "key32": "2E6wLpKQJNtAGXaSqYjhTMJzcbC28NmiXtKAcx7DRXw7yqU5V71F9hcY3at4C8ZRe4a9EFQ1XWGFd8YvYjDEXgUR",
  "key33": "4jDw7cGsj1gACADNpxRvwqE8mAhW71TQkp3oxffoRoi1L5EKVQe2ugXSFLboTkiaGAW6g4NnSyEZK275kZ5yfJux",
  "key34": "5YcGDtuo2b9ZVQ8Fx6QdA76D4aQQC2AjTJfrdWZiWLBAaSRZS4Fn5spQEWP9zkZjnbGwG6emL6mavLov4FbGR8Th",
  "key35": "4fiDxSqW5J1MsSyna69Hu3Pj81yaHYDdJptrhw6c3CT7eCQXEiyoTtGmv163W1aRuy6HsPjNt6owiNesoQrtBPVX",
  "key36": "3L4RDh7MUFN36TNXuDJdUTrMQ2vBA5FpP2CcDvFRkUYzAVJMcPbyGZPZjq1oLqJz4S5uLj4yVGZM9wKajCRcsoxx",
  "key37": "6CCbPKbTK8cvKDFfWs8dvC2STHvyM3p7Low5aFpbxEKhh8XvTKdNAfVopEAWqFgg3Y3kZQtEF9gb3kEdFXZGJ6j",
  "key38": "4cceZFRMs9nAfk2ookY9aNReW6SgZvUjA9ebF9rwa6W8H8RDphow4e2fgi5QiKt7WZEs9U26yEPuNhJL323cPfCJ",
  "key39": "3Vv6BoRck2SkmkWfF26NmXZi2iPLXAqR9Hqshbxjby55JFLe8xy8qNErxtNRanBSptu9BcZnc7j1hhGZDFjBkyYk",
  "key40": "M7iKQHG1XD9gHWehssf8LWQAfkYHBFhM3iCGhgYH5JxjDedQX46R8wjLnp3i1eG2UrPq3fNU5swrvaqLVNDqJqt",
  "key41": "2tyezLLvKGTiSXtnribkB2L5EDzaKNehMT8eJ9hbXPheWLBEbweXusfeyU6uygyfKYeCoSt9YCrVgR2dM1Ytzsu3",
  "key42": "eDzecN5y33Z2cG9tXJe3BgCgM2dHzXAZtP8d5gojdBd7J8bjhRN44E9Brjj4vKqky6DbpBfsF6MNbN6vw83n4vv",
  "key43": "4KQp3Wjk3yiSrvmtZq22WdHqHNwj8qyfz2Hwezmn99mNoJX9fuCFEvLbkR4fY2vxLDVQjUvF4TfjiDZz42YrgT7K",
  "key44": "398CsEnzGMbaKweEbB79bad84hTm7cTNT73VoJKWJjY31sNgXqUHNsxDMDZ1iLZj6g3xk4QgpDYAKujQrzQ2ppFT",
  "key45": "3mHc8ASnjzRyqFHaDWPYgHgNvk1A9q5Phi8fKCnmEVnNA5bMCrmVLeU5EoPgDXWNm6srG4RaxjEN9EKTeEJCcN4r",
  "key46": "5Ai6CgzCyeeCaHSNFuG8wqY2Pk6bzHRY6qKsP2TMK34fQ16PLCt77uKbLDzUWYDbk2pU5pqoxbyCg8sWTQMfo6yx",
  "key47": "2MYgPsRWJNFaXvLwdEoYdCXK6QQQzRBBju6RMTFvuj6D7UHWygjRB4T2Zpu9tdpRukQrjhRJuz3saPdhtawPtu59",
  "key48": "49DVEoUmCJKyb2sw4C2uCtRKWzPTTVbNfDdmXgV3LuuAXXe6ggXM8QkxJF4GXBc6SwcB4vjZcz6ECGjyKa6gK7j",
  "key49": "5gpWC3cvGA49DhCRsEbJUp6ihXAkLUs2qj9iqCY6bczBoKnTxXR3EwEygd56En37R7C9wzarWrbWq9hv34agPNUw"
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
