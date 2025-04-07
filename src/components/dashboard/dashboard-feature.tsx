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
    "1kyf31WgbGhwaeNYLudCSHYBprSMSPNfQDofub5Mfer3jkrkopZzh2CPXqNcAXecGBUT7BndA1GgM8xv8rESebn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FA3Thn1AxDBgRgMsUkA7uMxE3VHRPngL4qDnfgvhENjMSHhyFY68vEa1BfzbBStikMQEfveWY68Rf7Ph8xQ2tv",
  "key1": "5VKA6nUfGsJsqtTCJ7LNUrfRscFpQLg5Ct8CZJhWiYbPX5ani5UZnvE3ujEgpxwQdLRSDxz73hEykuxA3Wofxugu",
  "key2": "fT1vNtYVf6PTmEPU8rfHAatYzDUkaHpg64bPPQAjGrrZZsN2aoRpg31LHM2uUnAoeipGWabmGhzzXUbJi5aB8Xn",
  "key3": "5shHCVm3KeE3kgzLrbvYWGNTrr8ULQqW3v1BPrULqQnW8yQjVQSc76hQUGzQ8xK36own9k2kvZKcUdJoMtFWLZ7f",
  "key4": "4yNHXZGKtcJNJg5x1RwqYqRudiM8z2qmwnJKpSuyJv2n9wtx7ESDKZMjhxNvAGJzqSgrug5eqTd2eJMMzrdy48Jx",
  "key5": "dKDU5JjZmsqnhLPb8C4mphsYA9DmvZfY2b4bPC9H1BA4gtVVPSFhLySrJdtKvS6imTgMekGXXHrDrm4amUpB5sE",
  "key6": "2vyy7v6yFEUsWEgkRtgAoGmdR4Q8fDivCBkddrAS5kuKXiizu8jja9EZVTpTQcSKfcgEWbL2ZMjGEgrevxZyfjBq",
  "key7": "2wxL91i1JXnBuW4fTn2QbeKDd4UW8x5VhactYyuWZz2r3xhHwgCVdYQGxjB7ULHtBjuhF4SE8Tsgc719rwcW5gHP",
  "key8": "5TycVeHiWhUERYR4Zu36tTUsCK3XgRc9R1Z8Z67EUCzWkqQrYTayE1qY3r7ehPSA1XadBqqdrz5Hm3hAHEA8wHjb",
  "key9": "3UuabT5mDZfonTtNVpWtDDtY1qVUPUcvAhPtkhSY3CgPjdTFYAQhZL6Jzc3b6DmfAUksBuP23VRv45CPYjkbXVgX",
  "key10": "4EyMYx1C6h7WhqZxJdkojwHDEMWkMSwz8Lrnw2Ad983eu5ohH49NvKjibPW3mvDSeLqgSaggKC555LLBMTg18grP",
  "key11": "2SiCq6ms3ZwpXJYaYDcg7CevNsfGJDd2t6CyDRMFtAzCA32oY4vBKrLNvchP93dCDDBZpbbPiHevJ4NGBn5tox2P",
  "key12": "39nQ8Fd8WDbmWburKEBneF5R7EsJDsfaW67xmVriNhffY16KqAtjMJB14yDmWN5QdkzLrdfkx4XYeGjSJRk2GEf4",
  "key13": "2kX1A4KRdW1LDF9dqNkvGaK4nbzqz9z6LH331mb4kwePqAyuAaRxQ2vfUnoXvLgc76N2VN9w98qjiUfBxJbZBWof",
  "key14": "2Wj6fqBnr4UvPHwdzpvjU3vvkgnBVtbQEDEWpnqCoQgT6guYBF6gdhe2NbDNgb89fjMgRfYEBunU81bTiPPX6VaY",
  "key15": "qTWi7u62JPTmpmmZrwGFgV37k5sBpRhW1AXwi6UQaBb6h5jivmSt4WhU34rq31LaZ9ZXDBPJrZgwkMQkQyz8LLa",
  "key16": "4sfCjSrmtHv9664Kqy4K8GLNFjXybwLtXPdBDtZ8a9Q4xGz91tmJE58b8EHZXfGHbgBeV6EDzQ9MMV9nbJEUJk8w",
  "key17": "4ebSUMLziNo6yaVg51rnQMPNGAfcVQ7dcfZLy2zTAhFuPc9KpNeq14z9u1cz3w1ZrXLbDo9U8VF874aQ9fnXTszT",
  "key18": "3qcKXBphmRpQBm5pfExuUq4M5oozzHgjwANXB3oPhnxEFi8pecxTCxUV1rYb5nKqVKfNAi9z5ouxs9p2p18Uc6n2",
  "key19": "2GFH7QS44C7ftN43UEaTAMghUFuKaYHH5Cx3fBoRGKpXYGp3zss8T4vLwkQBR7BvoQysWv4AYE2mPiWJBQ4hpvB5",
  "key20": "4gtDHVqeB5dz1UE3N8hQN1EWSdLT7gbvBFZYbcMXx5kcJgQr12yJ8vF7E2whebMuzM8AhsBRz3ysXvM7aNELAjLa",
  "key21": "tUtsMxyWKinZ7dyiUoWXz4hSNNneBHnsuyHo7MrVJZPq3hrE8AK4Yh1BAmehKRoJ72QwY7qcLSN28DK6C38J8bT",
  "key22": "4d1BoLmdY2J4i1xeYj1hkPUWFHZBpQtF6kUcBMJmqmW4fzwWHnZg9HrMrNqfct5CCabz94DyhNdmTeNnYrF9wHq",
  "key23": "pnApw7cbNGuagmu1sLaHgNyHbK1R6gdUCNe5W944SwMeCgygqMPq627oaqPYSYhLYgGXaBQPnFNznsWfwco653o",
  "key24": "3jdFdaH9UvkvEqvTmULffxLFYdo8dpVDTjBpr4MvPiTpqvnfLS32Q3tyiqbVXSKdHuV8vNfqqBqE2kLKFEirabgZ",
  "key25": "qbwJAAGHAynTgMtDj8LASSpVB8vQjdYnXQ3Ug18ZbePjkFS8zLpQnnaiQDwRjGCjVc4CXHVqpYbM2nx8m2Fr7wP",
  "key26": "3Suu3gf32CDgkg7k2gEwHU8wvdrr6zZiA83s8qotLYDgznPC3jSYGwShQ18Kpy3rgZVkK9R5cMhzh4U5JPtroS4X",
  "key27": "4mSJsM7Ebodv7b6RtbHe9pFfCuztQ65SMxPzRZnarTujAkYWppfyGQxSbVHAJniZidxQqTiUe8UsM5c3FtxVaESY",
  "key28": "iYNmzUJpJVZS9nrDZjJXjsTUNdBc378FAcpy2MPXz2Wm5nq5KkLiN3UbdQmqHfJ37x8gZjtiVTn2cWxNkpUHLmi",
  "key29": "4xdNUgD2MsF3FHy1AegSNZ77CTgTvqpfPiVFGP4Poe1p697fhxup2mBtxfzgP7iRQS9L6f1MsNskxvFg9awyNV9W",
  "key30": "3j6nat2ahDyx5HJbJphqnNXTTThgK9SCJe12EtSx6DVbHdaXSc8g8stX1NBDXw9nfcLEBjFjzo6chfPcanVmW2XV",
  "key31": "3qd8hDduTQwaB4CpbdgPYB59wxFWz14DKvh47SUuBwmL6d9N2ZGzHqpNaF8eAspksTdgpk8pZZb32BTkWni6HhNK",
  "key32": "46ejFGdoy1qdZMnwVdRnaR2ca2jt7rFfwUuQ8WZbRgYxQqTPj2YzmyJU7ybKPpuPvhuXTvQebQoV49rbSDYXcGu4",
  "key33": "XqxH9kigVm4isux8ZfTWSnc9fpzGwiPta2vwTbaQtsVyuotuWyPERz9iDnGNkxzG8LV1hhU3DfSbyunHE5h2g4z",
  "key34": "4ik2Hx5VvYu5DnnggdM4qJ4AuZCytExRU5zZuTe1Z8RECbaSxvgA3722SsjbExoX914aoe8KbMyuQtxmaKoM29u3",
  "key35": "4AphQyaCEpuR91RcHRh3Tg9scgLYyx9mAnYSLHozxCJevPx9ho32tzbrqwhVrzCnRALdwLJxpi5SdD1sTAR5JZsY",
  "key36": "5zWZ7sKSLb6nSC9B5kreoNxJS7JBhbBpJU8E8oMtxBzST4YxNmdHBzB6bzEMtMvBnpha2pKSFop2KYmAHennrDD1",
  "key37": "4XdpD2uV3jNP8zYgGSDpfH679ST85fQTbo3J6ncSpqsEeSeg94sURsLk3vwh5q6uDqu76bf6V5h1NEsFenHQ3Rdk",
  "key38": "2qhRJTzbVDT136NgebinQmiathuKzH5qh9VMKV8hzwxKumWSn3KRRs5cUFrJ7neLDG9i12ffnNaEUhfYrrMSi45G",
  "key39": "QKZFHMHxJxhJU4a2tKcQ2Tn45PnvQcqTdPheqM7n9m3VfktiHjyJakbcVcRZpAQ5ieyM6qTLtXegeDa52VYd62u",
  "key40": "5dYegZdSdyqVnG7HQ7gzbcya4vmJH287hFR7kR1a7KCHCroprndtR1ZkmGNEjj68qhKWPUSGi7V32CsW9KrsgSrQ",
  "key41": "5wHAm8hmrLa4CssLWVMwPpQnxzGpU7NcotBNAyoaR8mUmTwk5nP1PQYKgPGwLjabwMv4gDRK6Mq18se4p5JbYam2",
  "key42": "3wzhGpdLJ4Mp3FtUG7mu9FvrjdFPPPLdosYPL15Q22m2jLCooAtrtofqj69qsey6c3pW41cC99eiQFhBpnqcYGQn",
  "key43": "2Z6nngBHqT6ebjEXx1WAP4UxE3S9hUszrHH14LoyqJAufyACe7CKToRy2VfHvdGxsr1QEok8WbWWy8x9soSVMtKH",
  "key44": "54Ja4LNodQMntMkUmFWSDRSyipnq9d8pWKnQygYRr7GGJXhmer4ALKifogPPuron3LLMf77VqWubJdymmfwJwEUf",
  "key45": "5JK2pHWzgbvmXeiP6aF6fSgzjkFz9mZsBr75opQJQgU9n8T7jo1F76jpT8Mbs7cbJ8p8nto1CQvbesgsYgmfKC61",
  "key46": "2hMDbZ8EF4jK1a6HJau8tgCHEUDgt6hNdr3biKSF3fSVBiqYUK9C3mvgkTZNrQBx3eX7j945efqBK3agmL43vU9D",
  "key47": "5r1X2WD4RiWGewn5mScNH1qWi4oR5uAWCya8MjCPcfBKdPsn31X3rDi69pzLYDcJrXsZfVQNXb29BAfX5rwwUm67"
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
