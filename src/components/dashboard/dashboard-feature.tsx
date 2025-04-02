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
    "34jVxkGUXYqYQKde2rDHG5zf7Q9VvaUBFdPUbTx2CS8po5e8LqTQbjeooTYo93Gkz8bAayGBvp4ApwEav7fL59nK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XjGuARac5amKE71NYmTLjzDETJoWW9dYhdaNHFBZVKwCNCfsz3ukHUuBGBt4bFCfGBhTCoTPxm31m3DtYftGLuE",
  "key1": "5iZELN5w8XH4gfkgLXGguzCKVx1YKTChsz8Wh6TydZRcBa18hPz3JfDhhe4hbfkvGfwwa2UH4MkADA5jiZZnR5wz",
  "key2": "LTVS3pQjQTSzDVxRqgi6LcgL3ccvJKCBEv5MgDD66eNTt9YEqGh6rhD4eNve62ZXkP9p7bRRns4QzLcNi8Frmv4",
  "key3": "3nsqJzQfsLFzQwbwgxjhSdMVZuxkjvnvg4c1D6VGiBnyGRBP7cSh6ijwb6puXNefmiuB4SeHizyNC4opVADWFSGS",
  "key4": "pR73wYyC7YcpvEhVzKtQQ9LEFgiCfAVQsUcfVok3krNkuzkVsG3j7kkXeuPcJ3AcsYXP41JmHihPjY5nQqe8VYN",
  "key5": "qY9v8MoqCXoCZgnfEMqmQ3d1QqkAVbLbVKRKJXTNs2ZGfzVhZDaov1tevqqYv2hLsRW2Jpnq1iFwJBwT9BWja69",
  "key6": "2Fk3kRsVd2tyRzNuVQZnSw7j9vMV4iqAUTRG4p2tZK9gfW4mqPx6D33vDeT2Tr5dZDYeof23SsVqVio43QQ9RdB7",
  "key7": "3m2A1BFow44jpK5VbJLbPr252FqyVixpyDPK19rPMALWyhF1g1qtCbBmF9imYbhVcHD2xefYid1Khs4esrpuEXjV",
  "key8": "55SnUi85Y8B2gWZZq77W7LqbkfkN1SGRS4nzceeHqjVuLt6czocmbMvTef4kiBxYXvu9yZJEWUAHGrbZL8nfzs5S",
  "key9": "2oh9HuUuVvzJr8GEhRsJNkbX2n5LByQq5j4Qe9UAbhTw9rv8qA3mQNgDoc9eGgMUiP1QQC1qU6g9nAZs2EkkKkiD",
  "key10": "3YJ5HJMfwXgenHAkQQrCx2mq3uJkZyCtpFWZtzp7GzyAgJSboUQ7ky7weAKHcSLcvCv5CrdK4hwWDkdRTk6ZHjcC",
  "key11": "51SNm5GQPnUsPR5v6sC2wwpBi9GD8rZMWvVkuvcR7jM2Z9FWJEu64rvQE1od6snVJLePEFNQxLuNSrpxv2mrFLma",
  "key12": "27j5tCdsGEM2aLHpgnwW5Yp2E9ceCH4e2zLCWViWxTznBLxZ85S26idP1N3nHJWV34o1bd5qTJVGNiYuYSsqH24s",
  "key13": "3PwpLjRpwNiSzpgipbjapeFRKogvCU54TA5rr1tQzvxV7U9zjgKYmBp93cWchjzxH8JvVSDnSw24DmxxC6ueqBtB",
  "key14": "2DXiGAADVsLBff5XrjCfZZtgnyoKSnxdu8o2jKK9qqVRiBLmnJU7cqKqgQkjfrF7WeTY7Ap31ykPr3ZtYZjj4sHc",
  "key15": "33j9pexiXwrCv5BNnuv52Z67ko2He3qtwf1QDRFzWWtPR2TBwjPgr9iETBEhEJYyvXgBu7fZNUGVz1coXxug7acQ",
  "key16": "43zrYzY1qarzTs8ewFGjuSZu6KVvYn8DA7yCPFYZ1NNGbgVPruhSheQK1wg8Y3jAxyuYpozNsnCnWtJTaED6Vc5q",
  "key17": "J8yixLveeuk273NmjXpET5ByVMz9hrPG8VmSyxHah1LPgZCrq42rDTh2RDdddS3PPQgMy25nPXiBt2XSkooxV2e",
  "key18": "3cCtUioCdoXmviqWy9JTbzEDCeAfDthf6yK65g1fXfTerx8xkbTghsdYTMG9FE43RNDFLhXVjSUAnqxXgBrhDNCG",
  "key19": "4EAJWajWepoqLVMwyDKL5cH15M51zjmBKUWoUcsie8P4TtUQkStjPVZXcfomtGYuUUNLhsN2hzFmeELM862CyNVj",
  "key20": "22Hrzu5G2CAtFYxkTWZXcoG3JDBbarbieDwtRw52b4BiKyuHMey2nXhVbmesB4LPp83wbGd67YFye5JeLLdyWFN8",
  "key21": "4uWTkjtgsB4YxD6Da54GrGs6D9SkLTHRwVG4FhFPScByEDoQT8EJnvTZ3L8tTo7e3PyRnTek9DrYVFgXKxCx2rs7",
  "key22": "4bxgNCTA9C2YF7ZtbDiAZjot3tJ9EUjTrjhpY6jKoFYpjwRdB91vmqico3LAzM41RDaEVibC934rigP1bwZbHy1V",
  "key23": "3FACWZcJqNjekwyKcFNe7wULzuBwmFMsUgQYSzLybYQvfeF25puEZ57ReSTgxu54k5deE8HBcX5pCSvvxoTzZQBe",
  "key24": "313tPBLS7f1AWg6b9a4992VUtd1mXDndWdTLv6AxKZBwBxKFayxN2mhchroMDDVpgbNjiRCX8LVpWZdJBVqPF2PT",
  "key25": "5x9ZApMAgUTRMkj4VqtAFyCkHjj3mcCjEFBmQ9BDdhsL6YAFUm7w56CS3aPLLTfDEFf1oVJ5cLBjTAKpkckAwTjX",
  "key26": "FTFB1KqcLgRzEssZUzZ1MVRvxmuP6dTmXtGYJvebh171m37XiJ5fPQeNRxDMJ4qisuGsXrukWVtJjYKt3wXLMkV",
  "key27": "9vTwZ9t4VEGYVXEC32P4ezV1JqfhHJocbnBktKR5BmgbgLibhrpHvsisvYZ8pVG6QpNwR8cia1nB7QYr6ao3BKG",
  "key28": "4MWGgtRYwqypyRpB5iDhYd4kM6R6LS7VCkWYXSA21xM6EWDqAGRB3mj1PUSNiKjdf5S1PHBsXwM7uFgpj8jbroBg",
  "key29": "3NJTxpK7f9rPiBvSBWxL4nWiMkWKbzyyCicTX2b27TcztzYVDtbxsgQAVLUg9nd8uvRJeDijnhmXh8xvr6Jncpve",
  "key30": "45csjVm6m2JUCC6y2iecN2SVHDFDRfWBPDAzA3Nys3g1GDazPYxuGmr1PquZ67p2uHRHJLd4zCdCZDAyV1pTV3Dw",
  "key31": "4WkNuJp6yXArp1BZQXT7e7KLDgjjvxs8sAbFCQafc2udMoAj9T3FDy2HmiQovwBwLtE59VoLNdZKaQiDWx1u1HYK",
  "key32": "2J58QFzhgQVNusUptwQqeckfieN5JmXyQSmW4WuvXTRr7X4EYSBt4yA64uviScxNNj6GSXPB4oqM9P4MH1MfvMt3",
  "key33": "5ymaiNAWK1UtT3E8dvUUMzqxPo33dh3HeRtTZjuexGS4BvHuwVWZZ1omgdtz7b5W7S7V7XxAW67cdjBLVj5q4tQi",
  "key34": "2TxpJ3b2Dsz1qN9jV28hJ7REZmhXS6wdssgK4ahQ93NGsKDjJg6kTwWwt9bTFHDSQRBkaYpfv9b5bwzMt34L1vEs",
  "key35": "tNYSGTKYRbKs9mKnA5yvxuQ2hbS4LYgP7e65HqsHJiGgH5X9LjAGoxtyc2jKuNU1nMR3mi2bs3o1UMcxvtemnpw",
  "key36": "3oTPRYpsm4nwkBfstuLw3C8a58escEpyw9Nb5wiJXWZx4SvuRGoa2rc9iuqnRUt6ZapeQcMBveK8rEHhwdnk3XU",
  "key37": "5QxRkemeCDgYSdWFCvPr75aHWgcTuwafmNrCLnXrTyJ65zdSnBhYjGMbZmvkMZ4JtueBcj6ZMXaxjJHARECLv385",
  "key38": "3aRCt9yxFsLaKvDWv4bozhNNqgDvqfpsCfXyN1bT9VNppyiemsUcSnZgo1KQMbMGzvEgU7BpYWdXaRJjYfzAnzMH",
  "key39": "nD3E4Xk21wBVz7gdycB331VhpUxdCTpztjbiQ1rMoU9y9CqRwiYZ2jcNwVgJzAjj1PX9pAHWjHmBhah7j3rEpxF",
  "key40": "KWb95vGpRa7Hb6guJ37TxaDdybmswA5RVknxTPfLGyByxfjV9ksCGdUXe5d2SVN4wFS42BkefKP3XGKNoRK6ovx",
  "key41": "4eMmdzCj5AQXdMb2nsCnU36hzXZAbcbNSvtNNb6h7koqQdJafhFkTYy5a1KaqGfxgJYxnVxc1f5jRAegNRhNN46f",
  "key42": "2obmqjvWpRH8Kavay4Z9Hiw99DvUNX1kqVHLV34MXoXKyCtbbXUHjPMMzrpeRi2uSLk2uYmiAiUXYdEdgvPET1Xb",
  "key43": "4tzoxVQKY8LPso1GKDNSXW4ACz8E5Ss1k3UGPx6Rj3MA2d9UKaSq9MA8NX1QeGQ5NfjWMavDcFUHGqpSRXPsUsX"
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
