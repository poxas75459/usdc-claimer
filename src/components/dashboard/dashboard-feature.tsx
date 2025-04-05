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
    "Kx6D4DQfhxKy2vD2WyrZNBpmNQREohRtyzQLVkjvU2DGRBPm6552suFu6ZYZAxLvShvsG7BqELnWsx1DDtsrBmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hAn364jpMCH4CsaiPPup9YSuehf1Q1wwgGZdwKrrkx1W5Hi7RtQV5Weyh2oTLhgbq7rzvd9iBq9C3hvUzDL7Yig",
  "key1": "44ijHafbncqKfyf1RphStYDnC3mvXjKrSzCXjfAtRew5uZ5QPtaY143pCz13627nCSGggPbB5umrU7RZ5uqQhuyb",
  "key2": "5c1yzLvNhtZbyutuuEk9Z7xD46jMfNv3cVr59pqeoSdajyvs7v38a6bb7tnAPvSa5AC6pVCR5uMg4SWXmhQyP61f",
  "key3": "5hJ8DEbHKGSHCPPTn1ME15SJr1Uyj9EvMDFKgHpsWhdU5KZ1i1unrsKLFumhTjRpD1cm1wHWVBLQb2Jqotxo8q7o",
  "key4": "2TKVmx9Pg5eAPzMqBKsABVYA6npRqNykNdBKY5YZKXScwo4LUhRJq2UQxjLze8QSf3x4hS76vspFnvhygRcY5JP8",
  "key5": "UxPWJzityeA4aYbFPN4BPS1i5uaHauUAc8NvGWmhMPCzS1Dc4bKKaE72Cnub5d1V23pb75qZA8GZRKHXjNgpZYw",
  "key6": "5EAeDpt3Z8E6uwtAgVD9seLbzrnHtMUFxL2aSq5gGzKXJct8UYWyAYxVRQh95YigeEK9KRYKAqxkqDzQPrCzU2xB",
  "key7": "5Z8XpGTRY4qBmYZZLFSjskztueY2RHhggwwxtBmeBxBStMJtPxAmFpFQMaqVuKC4ZhPH44zUzvSJx1mwd3xh789u",
  "key8": "4NfzuSgyP9sDxRSWu1eoQW6YisNZsThUxxcN4P9VnQJxjqjVxL5co9yGNr1UEPZVqWzEZDYABZMjQFXW98pNCB9J",
  "key9": "6751GzRaT9HPR1LXNPYyseUSv9fyfWhseSdWbgDDvGL9AjweHwyHGTuA6QxK5NAWMqqDSCfLUWdsekWBFKofaVNy",
  "key10": "5Qcgu3vM5zc4vR1eBnDtxSShbkYTZhqRQ48tmB2Fd5oKDLdb7jekDqEaN5o9bBF94B76K5gKLVqZwv97CzTEZKRi",
  "key11": "4tcxyBHX8wpTH5uGj6kfZSnoTbMF242mApiodKXh6vhsdH6HWQjt4nFDiuwywcMrTAigKvkk99bGobtU4iTCcJYT",
  "key12": "21EmPLLWZYVTJqPn5sTXNWeNMH9xAF5sXdksyHBY8vCa9uxQuTiRuV1JzSJgtscuE4tACWFq3t5QaPuhBYm7awtq",
  "key13": "3D1jV71pRmiUYxGfwHfLqJZXryDY6ksCiP7CpMoHkmjF5ofne8uVMMQTRF99mBywhCqeQgzvhFJc3D66ijZzTuZV",
  "key14": "2pLX2TH23ZK3KztCYfe9LLeZRXtSUK8D9n1eY5iGqRS3a8J7LfoPDYrFAKMhLm1EWYWVUjnbLnAE9WyH6jKkfdWj",
  "key15": "zJh2bnsNHz1ZombKh9qwYxQnZzx4UUogE5v2XxqpJ6dc8sgCxQBrxPtwWQM6gxSsdzUKsUkffeZZLh3LH7hQAQL",
  "key16": "4GUyPhvRa2yTUj2L7wj5vw1WLKgw8E2GL3PMpeU4531gTwGaihcRSZGGvbfjgPuhfBa7DpmkoHV1beGN7z9sU6dw",
  "key17": "3LqBpdfRJ3hHnbWcAGfJyPSLmGpt71yZPZzePgnB4itPvPCc3yadppvXxjEvAZokMTL3FEu8Un8jTjDVEP1Duc2w",
  "key18": "3uZtVQVh8dPj1jDqMCLviuYdR5xyC32ScyP5hZwKhVkT41dZJh3R1kqEiqQoLFbircNBN6eNNkajdQpBDdwGCZsN",
  "key19": "5ZRWn9ooBiQjSscqFqPustWGRsDVQymx1GA9YHAsgWVeG2jN8Fp1w9qvMuyCENKXSSdH2m2mVFXarQ8NYG1egNNH",
  "key20": "3nCqsf3q2C14JwwcWduXUa1myvUBTByRmoeCtjEc7yVAUriVUZj6uktdfWVb1k3erDc5Wpqwa81NYwdwHUDiVKsx",
  "key21": "55qWi9aYfcEFiv2og79AXxFwxJYMGxYU9FHGQVR3iAFXNszwUR9Gyyu9Eo9RuELkHNxsmrBTQdoxaQ6pmz4mkfeS",
  "key22": "2GvEsXGDgdwnzFKL6dR52eb5xvVLsrLhBSbxVimvPqi4joGGBc6NZReVbMscxiKi2A7NTw59wtYmnxdkTED7xRQ9",
  "key23": "5RKvuVXVWqJVq5qaPShqmDMKRJjVSbhYHSSneyL8sKTmQQrGCKeze2rVZKe8Xo1a7rCgPrptpRszsNBzzn49ewtE",
  "key24": "3oNKvK8P2HnupKmmK26eewhB9WA4jwaLi2GkhoC7zQRUmHT7n26jzyzkAK42qC4p3aV3gcdQLhD8CjN8PJnvcECa",
  "key25": "QSHswoQTmJaenjRkQEACyPcP8aJLxdG25iizVu1TThkUmDytneg8c3x592fv77ae66QTrr9jdEHvFoM3YioHrAf",
  "key26": "3gp34YSioG7CDXERUA5zF7yrv4iJacSfgg6m1f18oNQ1K1FxqcUJsP2UXegCMVnyewYWqbftc3MQvj483QCMEqgy",
  "key27": "39ATesW1SZu2Q5snsingcHHqr11iNMTbhujAr2K6bTV2fAU8Rx8pDWokc2rAuiEVs5i5R7uimiadjxzQU83sVZkm",
  "key28": "4hvJfiMCa6ycwYUqmbqV88bEwWfSSSGPzcNC7skVCnDZKBXzUzJwBKH8ShyHrPj4DM3M3Co5BafjS568uZMirEGD",
  "key29": "4SXYK5bx2aHhMtVW3XpZUWkWsBiUUAwUxZLDgvbNSUD3WXt6mvRh9jdDQP68rkqrGL17YWfmn3LgvvAUYEgNLbjy",
  "key30": "3PGGYvtXf3GRbcBZ212BuBGpb65KEvwhScwX9bAZxdAoQtoSYwhr1adBwSBqFGQsdvKCs7mbYqYbKFoutD4o3SDX",
  "key31": "27yrovaTj386RkKk2spJnvgNfuHzJjm5bUgvCHrx6oW2tQREUG8g9CA5gvoJkoavtmhjAPeWZqYiND1CpAgEQBHB",
  "key32": "5abgGErtU6iR6MS9ZZgUZ4X63BUbUk1b2bU6i2BMoGvhm3wbyCShyqJgNGzF62rMv6hNLJWYMen4HzbsMgBVJTZN",
  "key33": "hR98VmqpD7XBA3Nkfa9BzygyKy5gDKgbPAjLHm53bDXHtK9AmRRxo7SzvV7CP9DEE7oT4YnbjxX4KLACaihmGje",
  "key34": "2kb4z7xwHp8jx7sCv98U7iFaD7AWJU3N2KdLDSGoAqF2akfy5biJ12f4eP8g3ahH16ExQNi9oXHcAp62N5En5bCy",
  "key35": "294wVnZWa3jXiEbtdSPz2XDBFxr3fUa7KV7Cf33P3THU2rBs57fYwX7j8C8wk8xx5xjWEZT7YZfxEP8JubBH2b58",
  "key36": "39pE3XYQCnXhPLYRgaqajURKNQGP1j6S6RkJUNZJvCDMagMDi2pXEmuRWgXWDFbPMCp8mW1Ly2dSwio4GRcnq1gp",
  "key37": "36c28dg6ErVpCShsc6Vps36gJLBBdh8j8pcwYST4pLj1wk69rmssA9omP7RGQPiYT4BmQkREC6NSAtspktkMBABC",
  "key38": "25961GRLvvLwMufH4oBmpjykrfMWSCZcM5hKvoRWLgTZoLbnPPiLRaacHzuDvgtSJQCZGYKHUUNPrSu4trq8GSqh",
  "key39": "59x5zSggRnqcV1Jgkc7Uu7ea8XZCNkTV196aUVEcZFNTY18JhCQBMxGZdzENhtKjEvqHFMXkoth2wL4YLq4GLes",
  "key40": "2baSYnqrBEQ89XB64nTv7hyjuni4z1oncHGyok56Hq8VcUTcuJvPVLKXiEFWmHpGULBd71n6TH4QjuKVCeU5bDwB",
  "key41": "2tWKctLvPgUspufNRNybLURiQBRE4G1EcXj5GgvNsn1GrpdGGruc96SGp4xHPQC3ck3oKRpbCb19LK45EVQ8aFUx",
  "key42": "2ZVje4n92XF2HNbr4kMhWy8w93AeWr92qyX7EZzZS7T6qT7hyMyn2HHuWxGxKcD6EJeqTY25meiDmkbDpV5CByBL",
  "key43": "2DBDdGybfZu4beRPJnds921vexYa6NYdnxmUSrUKkgb8UzxS4G6oxP1qTPxyKVN3mTbWwLNMB4xPHX9WBBhWEWPT",
  "key44": "2A5FD9B1HrwWskBCYSXcmt5uwKQeZo6d3bhtH3N1BeeXRtvbjB2btweufMXj2vAyKc3utuUytRAvgsoGcdBDnJzY",
  "key45": "sbWyGCDjav1xV2rJhGVmyuLaaSGkTonNNh3rZET1sct7z8WFv4nvvFK8nky3jBoo2RxjnxZzkWE7pcsKDjC7MmC",
  "key46": "2ZoZN7doxgpRuigtKWturSnZytJ8Jqqu7KBLBS6wK9ePUrM1u6MctzTQj2acFQfowij2zBStEUdAA8JuGgZZN4ru"
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
