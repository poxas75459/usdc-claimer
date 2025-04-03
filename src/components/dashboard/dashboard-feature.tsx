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
    "3YZbS9PQ4bXT9vBL6SZEhUeVvpbXr6SmuXRihRcw7fPd5ztqaMR42ZHTdqd8nFspXvV8sEybAEmJ8N8ZDaFk3oqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oR8A28t9bcc33cpNtWeNSVpAn3ueiFCcnJN1J2kWFBGTvPDPGJVFcirBdQXRJjc8rBccB6WxDbgQYb4zTggHxEi",
  "key1": "4seXG92VFe57wy1YTPKX3tj3414ReYAjqwsuqXVtrprKYjWZaG3eAZJPpa4UPhxUgY7J319AMyiPUWiaMiB5RE8F",
  "key2": "5F6prE2Xw4ERDL6iFDs5dpcUBebHdLoP3n4FGcwcq49Hg3d1CRj1xkoYAnqrWxF2nuqug5dNPbWwjSFYNVhposAx",
  "key3": "5ZM1fLEQ9DJmLeaYvWC1tBMXh98Lj2dDhCSQtes4UiBniDmnYgHVB3iapBmnKyDksK32zTLvEUaedbHM5PrTSuSy",
  "key4": "64FJeo6BXnppY616wiMr2cSiyi8rxXS1JVSb3ofWgZRhrjPpecwYZJPrQKh2NCTth3bvqGAo38eEX7bDsDC5pPKG",
  "key5": "5wByR23vZzpYtYXNdbhCcYDgcxtk14nUaFxFjqGhsoREhZvuWH55mtcrr6T7GYDHFeGZ5psszLGQLpW4kG9CS3VV",
  "key6": "65mFJzNoceuFwrawTKck7exh6Ny4q1Tb9Pa3cHvQrQJg4pDAA8aHvrQtbMYV728NSkUEzkgUQTbJNAJtsteApmbZ",
  "key7": "95XZSTTRaKL9j3Mg6eNF29tZFBDBdYof6CmQ96qvRn5PA6KBn6Q6PZfeU9GejgrgiXVLXSGyci6H7gbiPDwv6HY",
  "key8": "3zzgaFvepC2EENLfFfVE83yCVENw6pGEBYc8eAzASbDkSzMudZZvkh8vNtVS1P2R5denxtEuL1Z6QqsP2rkx3Hmi",
  "key9": "5sPb4HJup89T1vnDmr3fmsfV93RqhKSSzufAoFkbTzmZStjmmDREdyRDajtPybwK5g9sUcNYS7JUe4xnjHCbnQ5C",
  "key10": "3zLpfC8Vxmu2WBmZ94CRyWLXGC6wSYFnQXs8ZXMwUpvoa5JWEXVdbY967o9j632zYTHLGuPkCLKdV1hMV8jkM3mN",
  "key11": "4FMUqU1biyUi9ytPesdNWfPn3LRyGLKFcNcRcnKMySHw5EvV9q5u7nD1VW7wUAEKQGnZEJpjgHfrSbCg8iJLvc7U",
  "key12": "xUKX6wY26qSdGmkBBPLcpHcRLLjqaCGwy8QFfbBCSjvCxefRDD5nBCbQkmfe99DqTWLmbi4JgokcZ7G9Bpd239B",
  "key13": "5kuPZjJNeYN1PCK11hvkv92QVkMPk2TYYSv2b1sGeSqEX7QttqHS8cWGvfyjsoUSjPiBrRfAWujm3DRXdxTuNq2n",
  "key14": "3LT2BA5UBzK19cUj8xjJBT8eiY25U5xbT82wZYo2Co3ZRX6yEZSiYy8AVobYdcoSQSddvXnopbKWaZe6UXSHjyBj",
  "key15": "62sNYB6aQTd1bntRngJXYSiAXZApvL4nHp6uyLotbt4Eu3UMcHQLjkQArkHmxo5vKiZxakpsEXjP6uYmLYTJUeYA",
  "key16": "dST834ff1aY9WD9EqFKE7PX5DJ5n1r3CMYjfKTsgNyMZQyw9SgCSemDEEA6ZbcQB6npeUQdQDg2Qt8AmHX9S6Qr",
  "key17": "avw2CcjRBU8uUHgoqqHKiQ52N2KX7qHj1x8xgos1KeepQUtpZhAbEtB1HsqLVXNt8XQmd3rynwX1ht3prmZDf7P",
  "key18": "zKY7AxqkBRJv7pQYTpYbjuUcYoyLiueqdDytRpSt5zRSssaZ8A1MWLNRhGcaLyBudiNRag2FVFWaziC5w1aXJCL",
  "key19": "3KgcJULrunUumZ5cTe9gKQRUCs2FR53dQ8Mi2Vg5MMjXFfi76GTvFLhE28mwsph5ckpRwX9JyzrHUzwfMsWn5gC3",
  "key20": "2sa1qRk64Rkqmvfujmq8hEY67zTJuqs5Wvfx6NK6VdtoSNjCX1FKCDTitbrTA6bDj3uvXbHvHFvFiks9G21DgySV",
  "key21": "1o5s6Hx4zuSB586FyYHvzRKqgrPiyzQNsWmujEgWrVdKNbGRNTHQy4jBYswRa7fB77JwE6LJ1gSiksxS8u41gK9",
  "key22": "5ojFpMv3yThEWwdUyP64cJjqSzw1MmNrDtwrUy6cn6hpZUxUYFkpSHkd8Ah9dhFqC8JtyWnuyy1cNiZJjBLgfcRN",
  "key23": "3NCUBmWzHFh5Wbj5oDhQ4Ehz7YbZnvk26sXUcdGu5seFptWsEcbPkVQL7wJo4ZTv261mpvDsAFHpKpsALbV3K6U7",
  "key24": "44u5ZtQMpGMV7n8cTf5aGJrGDfggfrjYELZD4tQ6tnxQgnHMDXJSwZ3CnXpBdje2QsJgN28KHQvZr6SHbCqwGbu3",
  "key25": "4uoiJPQKjcgnwoghgYpmGhWuMehqCXTGgx4gnqekUL94sbjEFnfEHm3Xy9GgrVGyw1GKbqKumCzmZhjazs8pyVH9",
  "key26": "64441imuPZya9WYpUToZnbKtArcAgwYRbAqmNG4gEj9bCWtS1E6kbRFDQFLsCEDmp72n4jkNmxqc3PkMAtcrr1L4",
  "key27": "4VKZ1aZfVsAafCG8mvCAQhfiWL4Ew5Zy9MntnE3t1Fvs4KFLS7JMpMm1ZuCsGWusK4R2CaMNB6ugESdfZEFYXif8",
  "key28": "4LYHUMpRMzudMWzkbMUPg8XwbcjrTin3Ex8N11rQC8SwbgQ2vnth57didrMnmbw9Vs3MvgFwYzo598K291da9L2L",
  "key29": "62CgYLwePomt2Tkq7FRoCzjzmpHfNPPNUcq7vxEzHbZWFt1Hbxi6yWQgMVxjfJzvk1XjBM7jA73kTfCwN7DbTjcg",
  "key30": "3YEui6LYkeXP2WpH76ufPEjS5wELTzEWmK1XFuXnddVYS9JXeXKbsVnRYbNf5eG7zFXkFgBRGj3Dfe3kj49uSgqg",
  "key31": "3N9uioiisgQSASMRHtT13NE7wWDTwENvoDCsJzXEA3grJ1CnvYKGJUshqawDHj5WAcEUeMHoadEFERkkcinnWqyQ",
  "key32": "bH76f3PfsRr9AuDr3DkUqxd4zGdWpkuRyQegZDVdKMKyjoMm6Snrm5f5wfoKFcBWVkhKR8kASQUhP7uFhSmDair",
  "key33": "fsKxAfpbr815mVVsj97p64GkSUH4DdXyHHQ9rLiBin41dLDxYcu8wL6paHNHowZetMZd4VeWW4UFjs4hzgAZt8K",
  "key34": "3BkiaDLBoTVxivZ6pALsNdn8WNmC2BWH3pjTMBYWaUTMNmvhn24QgccvDnhQ7t2spGpUXeK8qsZd12PbLUQvS6yU",
  "key35": "32p14DUR3GYsFvs6GuAqktNYrZeFyq3YGobDWT5V5pMZjHJJakrAgJgpnvboj3EXaooHGCupYSBC4kez9rG31dNe",
  "key36": "2wUXePvygqdou9WeDKijWFQJtDbn2nG1fBKq5CJyVUhmvU4SqfBnMkAjM3XT3FdzMMYvoFTo9uErPF9ra4JrZTDi",
  "key37": "5ngELfJPNseN7p7qet3rNowwN2vVQWA6AguVyKB2BvLM3xCLGEkTTczYwjZvTxXN16QoXMYEjJCYwyyocjNLCND9",
  "key38": "5HcsLqhU4wzPpWAVJfBFynjnFU66MWo9DggDdzYYLfUkkSzdL76W1mXQ57R5zGZzd4stMpHHjXvWe9kcbwBCoQPp"
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
