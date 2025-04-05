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
    "2zVUAyEurxH4sVDwxoufjQLpQZmKcNK9SZMGF8RbjzyRVnJmfxXgMajMrpgqNdJa1nqncyyrctJLYxKx9p6L9MjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54vaB2kChheQ46jWe1xp3TdwQiPtki781sm1C8QMCn91sVvBRkRqyNdnwLNGJJq1s63QVkEC816o4HjUqKDhf2jX",
  "key1": "7KYytDme88cF75RawGkcbKjgh9G5dFkAEhEtUqPFyhUCq8fR1gvpbqVBrkQibjZHJJeyNaRcKQ7TXtfuWB7yThX",
  "key2": "4DbdcaeQtNfk1NNFPXKyXYu8yDjTm5aY71kGS63heUq7nP5BGK7jRiNKSGR9MJGkeQueK4ofer8EXU9577CPcHgB",
  "key3": "5JgHMdHiiVReyn8nGJFEHRPSLFVfuNvo2yPqpKk5EHVsFp4B7atFg4nC3p3ksZnst4bbvH8hUPLmx3fAnCKpH75T",
  "key4": "9HDKR8QRQNjNjak5LTnxrc81pZx8wB9qm2Wq77xkxLSqVnja64baVcKKPgoi3by9DRZ1YYMJPPRYveWnwd8p6TL",
  "key5": "2z9GGa163i6tNBCLh44mZk7EiEQggLXhiQkHxUxtbkBVy3GnQJ7iGwxe1cD1BPDFTHzFgnA4f3skovwgaHoNrntG",
  "key6": "38ff5dmbrjLjDg2qPckNfcfea3DDuGP19Vgfs2kPEFSxu5frJRfuimwmpq6aRALEAtbVhtaZbzLxn5qvVQV6xug2",
  "key7": "53hVuXfUThs5Z6PBzGGqVSwVFq3M6rz238G9fDYBfT11JztwSKQG8ehsLLAaXUeGfDzJ3jw6PtXGt3sWCu6WGc3R",
  "key8": "tppoFsm3jXS8ZwwE5meZyo8Q5AwhQ4H8upHi4ZnGpFjDuDRU6sQQgh9rzWFyqgSYXqMyMrxsNUUxw3477EkJCwr",
  "key9": "4ctTWzF4uHEeYox8YqhsD2VY7c1jgjgb9jnDJUzcdRJWqUA7H3CNvdnV6MZdKL8hAtDi9EGsAdBCAExGP2jysx5f",
  "key10": "Mu2bcJdVtdWzq2BFaT54vo6KiERZkGcvhbeyCFdDf9BsF49qZyQaim8GcFv9zQP4YuPWzo2T6NZfgc88LkwJBuX",
  "key11": "3mt8t3C6Hj1EEZksHrFTrF6EHF67HZyruHmtG6u2CwfTMoC3NVDd1VK8wF7BdhqHyEDFopvqZR1AYWjqztMd159x",
  "key12": "2KoqjtpuDKJV1PvvbKjeB9KriknbyNHDLuaQubnts5yfzzCKYSaoaJfjyyoDEc95zgNaonmDYrVgQ2g1ZpkSyuPb",
  "key13": "53cidcCkuBYCpqmUooz5hAh56wBHrAqCjnVFwU4SBerivZXFPFae3NXP4qQT7C9xRP3Jpi4N4o8RrHoKqqaRticw",
  "key14": "67q2DGvsgscLR4KvnXaMpf396FEPpW3TX5MQAR8MXVWqy8JsdETi36ModqJQR6xi9TkZzwaK75T27Vvunzj5vFWj",
  "key15": "3LK3mrThXmFjeVTK1qKxnvPpwVZot89QMxDNwcNrUas9kvsrLjdqmpivznABEKoRqb1SSs38nkHtaCjSUTpXm25t",
  "key16": "5HjF9zmMA3m5gXE4QpGUedJaPYgM9B3qvx4D5WTu32xU2REtJ9uC6Mfsrx9YeRv2z969tNMJRYRNF6VDF7UGHXjy",
  "key17": "4xovKtQoCkawyhocZhpNvGb2QCvrkkjpgiftT74sVHTJdK4S5L1UnVvDba5hJz8TKa8g8n9v3xKJz3gjGyua5HMx",
  "key18": "5yYTStw4EjQh27j3pB1ZC9PU92n6b89WXS5zYi1eZMVFKgUMGmtrKPA3NzDWYBH9ZR8hXgm9F1TR6LYSmMeGemz7",
  "key19": "yCJXARRjMHG8JqdpKSDnKC1gdQCKuUdaurZsazy2XjqFyFvd2cFJiZRGLhDz9fbxR92hhPBv6TuBc1c7U9Sc2Dr",
  "key20": "27h84E1t74dKLh9cnsK8M5vcJ1JA5MtL7UNZkBts65ntwDjPSTXP4ZgsQz61EGiMyz8MCVPWrUbEMhAV481fxtEh",
  "key21": "2cqwMxcWvWyyftUeXououPaohuvvEn9Le1bxtgNuatD1wwsbJz7HWb6t94YhD5DpsAWLQMvQZiALkoBuJwGGe71v",
  "key22": "2UfWy8zv7D6BmLsRrBgaxia1CRYc9g9NgLqoYeXWUoFPw4fNFGS9NJqcRq9Aryt65jAk4N2PvcgjocUW6wLMEVpp",
  "key23": "4Wsy41k85WxK1RDFnDeK6EB9UTCNkHFp3iZZKW2hZ89ZkVMn9d2Mk4HiaJxu9sk15CEszBCvQJmj39Z3XxDMECQA",
  "key24": "28NYQmFvojd19utVeCnAJBKog5r6evHovmAg7LU2Dzty8Qak4Jv5MvXL1n7bNhMjFAtk7Uy3wCMfLouAWsT56vw9",
  "key25": "4d9jfbt6WVr9YBynY6Vw2XqggSNq4HoRCZYZ2qeQ6uTaUG6FkFjX22D8YpmNeQdoxN6sPa2g15BDajZKvgSsJ16m",
  "key26": "5RiFusP4gr74LWYfyYVihEuYELp4rjF7Xg9CnK5ZSgevt3RXfExNBiQ1Gaa2QUH8uRNApm5YhYnNWmtrf6Fguh62",
  "key27": "3s8GjdPGi4HNV1jKEWGUPAEvDZCEu67HH6AYAZ5FtMP3Je4vVudcTvihKuwT4enwXutFXa2xxFmfupkZYfhUjw94",
  "key28": "29fnrz8adfs2ANWd41tsQsMr7CWvuiRubGx16qoNAkrynTuNwJReESpvwZ7qxta741UyYPaAGeja6jpYRUeTu5ER",
  "key29": "35ehC439qrUzKYNL6a21XNubDQmS6g3hhh6BfQGNSa3u5fnxLYw6cUqKCTmTk4DmnKa6HRWm2DYPJZtkoL7ojdEn",
  "key30": "3c2EMRecwoMUxQRWiqhx5Lmm7tBX6gFAVtfrVL8SpLQsqZZMs9dbZ9p9tMvRvxbmE8am8S6CkeQBezqXJBGsogQN",
  "key31": "kvtQvWPeTRFvxCjkdZBUaboMaJWuRK3BGHEZoB5V7WaPJ172EG6CpWcWaY8yGXyve1oDLq6d9FDRZ8HrEa72q9E",
  "key32": "2ufpQP2ANvXru8wzx4ePkvTLLZusgCdDyqcqwBkNLjvKZ9amFiAubBxqugkV5gXK6qdPvYjsM2rHokSxFjyWSY11",
  "key33": "3ZUqKXgk2k5VEu11136aASU8yLPsDgsnyqExt5rbctMbdmMZfk3ZEh2sarNa8Y5sNjDCZ2yWyTRNJaQEQxj7c46W",
  "key34": "4FHixDL8YPHsbxcFUAcKaxDSaKndQzRiq24ngdnwGBuJ66WXK3ApkwyVJmJfaQ3d7tB27Gjrjsfe6DYHioi49zrS",
  "key35": "4dKqFuPebPe4sxWobgHV8oJjmiFRyHJR4yLKbShtXLpGzpJ7v3XRakcU7RVQaEzrTsr2NA8vd76cGBaHoJ4S7mCH",
  "key36": "2qGj8hB6xoWKYKjfrutCd2VP5U1FvZ2GbxtfyZZoQhQLnUT8XGCpjH2d4KYLJEfMxP19Eo1Tx5d8MGrEjgLhYzYx",
  "key37": "M5aC4AgdtkjruuMQFwtGNrHKxRuHkYGyFus5f3Yhia83XjbUVN2i6BsketPdxnaypBba2vQJLzaHih5gG1CEJ9z",
  "key38": "1pZQPeEeq2SqKHFQyywyuX2F1MYAdE53KHjd5wx9CV1hY3WHG2W6yvXn5dV2S8VG9WnvcpekjfuMuiiL5FSX6iG",
  "key39": "34HY2TtxFcmG3ag96JGwK7s6ZECBjQu3EnuwpunMbV7rJqVa6u2QWJEzjCQqgt6vkoKfQEvnYy7rUdoU8mtZ8LMQ",
  "key40": "2Thad1GPSeiANbVUji3R6XvHpDPr4yugEQmte6Q91Lrn9Tpk87R2g7ABnMgQWwNWgpQc3g2XMT7cNHzuTwq9uCxF",
  "key41": "39b51RvH8ddyFM998vW86kX9J4WVLMQ6zXQ2ygDgSmk8QNUgekjhhEqV6hipmWjuEQ33Stwsor6d8G4DLg6BeFkE",
  "key42": "HAejR7bmGtkdFm4i3u9zeD9rTNs7nzvqaLfvXfn1KmpUtzL2ZaYtWNREYhKPemfMnAU86DntaMyCSdDeZgPYkPM",
  "key43": "5DVPLzrSyG7SBTrDaER7j34sAAUsbJW6ViGqeSdxQoVx7cHTkFht51mkWoJ1Np8cCHBik8a5EEoUmNKCy7MiAFMm",
  "key44": "3yZEXoQ1dMFii1CH8t3TirXsybApbtrfiN3HGsrHmywrwPuTyeUaH3JbQHWeE4f8eHyB35qtirxiwtpTd5HYfho7",
  "key45": "5kfmejx3PthgKnWNEQMZLeja8hpoVxMmsUiheMGSrskCoc9DMkpoLY7GHQMiRQaB3xTRnQ29fE3L9JuJLuGm8WoC",
  "key46": "53ehtfeqcQiy149NwG9Eh7gRNXfKU5itWygDQcHLzL9DqdNgSjbt8cs2irciVYMFvPuWFKVisRaxJCxSfA1wcMVA"
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
