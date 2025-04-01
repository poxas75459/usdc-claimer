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
    "28fUks8HDQYaKdY2RrxA6kL71UGbRwonc5bx4ATYdzbzi9faCPTC6Wip79g1wFohxwiExk2Nv83bjswnQJxVTeNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52T2BC2rmscXMr4YiJVQFbXWasviVbiUsDcwtarN5zQ5hu6iqxGVHQ4q6XzHD1gBX6xSb9EivPHBAyqPniqtagNP",
  "key1": "3wUjjpTV385LFchH1Nj12TTQKP4vSpm7MnJ7S6ttL95P7AhBj6uMSuaz6YTrPSJDEnrMpB6fX8gRy6mqmpP6Yyac",
  "key2": "5wD31i59SwJzrzYCQ5KufhWy4boY9dLh6ixbPHsfqD46YdY9rendxd3R3fig2cdb2PQw6eqjwH2EmybcVqn1KbJs",
  "key3": "Tqqev1rjHqCv9cDt9GpuNJwACf6ajczrvAse6cEqRiXzxtJ2y3zpLaEsPNLGpss6fuURwgDk1skQnbURGvM1nXj",
  "key4": "mVceVk1sLgSvGLcfV8xwRWrETQoasQSK6aKoi9e9qBjoA3SAKsYkHNBSXYMRwGmW21nqJkNBqWrT3fmJwB53bwT",
  "key5": "4CVQFmBK6tENFEKFzDfeRRKV9r5ZnhNdasmhUUD96ztaRpKw8Tovgg4fXkQLrChXFW9YF1g4Bm9nbvcgLcmWceap",
  "key6": "5Fc9ZRSQMnfyfRokx6qbtQZyzpqPEsucijgg1PcvLWdcpMCqzCSRz6gqrLD1qSknByAKdCKuPvBC5UWdN8hFkgmu",
  "key7": "4dhPpz31EqYNfrhZEsUDrDm9kAoyMRzzKimQKzSYWhhfAwdqcsLccnL6UJsChozLrJHikqExSpLsdHhknREfpgfr",
  "key8": "5nHPUBheu6Bu7H2fgwVF9xtrtt3tfsFjJUx5GaGgnEV8HP43JAMjTC7rHNwuH3A4nS3TVXtTK8VrcSu4mPATK99E",
  "key9": "2SF1QWAFjeDkUqJPavbDcEn1rsEvif2N1JgULfxtAWUw6pbY8vAr3Xy1ioBEd4TPqBr7FS2vB2CwAYEgGbQXHgMd",
  "key10": "3sQDdEwtz7VRQU1vJMsbbVENMPLZgvsXUJxf8k9MUbj6nDTA14d9aqjMooqy6FEx8KJCKoMuhVb5GwkDHG6LRNk5",
  "key11": "sGgX6GQaxMT4kwgSJrpHTeWdZg2nzXbwTUY9DgjbURFj3UdGKnF7KNRhHvPLGXWmndrk9izF6y96kUEcKy6Wbas",
  "key12": "jC4UmxFaWC7jYerJkBwcx6aqrsZCuQgNriFTY37mzF5BYyJUKiCjTjnh6Ptc9tqk234Z7NgZf9aEbSXj7LxA1mz",
  "key13": "58vt2NgC3VoEqShTRMASThWkPtdpyfL9pCMLRubE4f5nt2HKbwGYA9BbNMtycgJwjf1tC9CP2NFZs6MDGrgCKoTQ",
  "key14": "4aLDhiBR8XDknVFcj7a8Lh9krnAHMWdigpNpCmexVKgYkdr4tgZxLiQX34WYtbp3t27TLynRvWjxVKHrT9LaD39t",
  "key15": "2KGMsQugSB7jxDvreed5GMVvkBKRuECpEsFDkum5xCNG5yRYRMHHSgPQDm6WmwwwAymfXEVmWtWkbYDwvgqj7YeW",
  "key16": "jPpstMe5uAAQsrkkXNenoPaKQHFAhJxcPtb5N4ixEv9A7BuynYAaLub8QQ3JuxraZaYhSNbirjckQN1xEnCMH7A",
  "key17": "2BWD4STMsKnyQsbGe7WuAbrmT74a2RAw7tfSH8ALbRxMk5J627j2pzZTqUwZMFt3xroWTyMrPwAdQpiKX2WxHP4F",
  "key18": "2ij6fdBztpvc5B7TxP5XjmQdNTQDJoR5nEDEikf4mkgUiQLhK7esjc1rT2DUyWRMar33NXqhVKVpz9U3n79iKzSS",
  "key19": "vwfPE3L1VVSUmHhpseikCNbiiKEYARnrLB9TYSjp424pRVQHJfZLn4t6qcEMiQz1cEDkBfxvcXUy8NwufAed2cA",
  "key20": "jyGvyWcQxUYr9jrsVGJEYAXKA9zTzDPXdQSmf218StCPh3ehLV1XVCjxra49sTtbfLAZsDYngD1pNmdW73oXV1W",
  "key21": "38ZDYmwHLESTUb3FhieonyPDU943Uwe4UNWxqXDH65DauK9uo2dW3kBCCYxwMsf3v4mgGGvVFZyCYwS3AbVwdW23",
  "key22": "4DNf9ciGpKdjos2mPnurncejy87NMaV9v3wRpEj1XXgYfDceAWy12fBs548HySUWK8tVBSSp3Qs8Fvd4mdqMokFK",
  "key23": "az5Fad7uTifnDZetK1rXvzyhbUEg5KeNrDqB7E4oTJfccqvVH53QVnVWe11Afte1qRDLdnsDADhpUEoSF4ru3ok",
  "key24": "juRCXKGbcUUHUsC67jREfcKwukXGh6J1MK4wnJuDfYgzm8jnZhntqDaqWRmPQHoXiqLjJSnwsF4wfYutnX6jNvz",
  "key25": "2PNDLeDtHUHMK7jqM5BQodkTzG3QFDdeKrJMebqbjEk5yPrqbE23A3mWRfa1WjDpjGX5osfZrFXAWR8Mt2YeJW3N",
  "key26": "rPf8MFL3o4DZCQautLo1KvH3fmnWXAzPHPHpBxBEYjsL214sPnHsRee6C16jQ2bZjkP5jHWvnYkTQ8tzWMKRWz2",
  "key27": "3SsjzDi9CPSb6Zzh6WzCN6qfsDeprAvcdfT6LQPeLZMaKWWnXA13h3rC4qTdhdyiTrhxvrm7R2UjnL7GRs1jMArV",
  "key28": "2mGNC89rkgu2M1ahUct3YsZet4fCrnb5dzV6LST4wGWBNinjWookgogiWthuDU8VAgWhD5HiHhu9AcESRPFHs2yk",
  "key29": "Hwx4y1abS4LhoWW4LdehMtdXNJvSW6EyawYjts1S4TKDX3BeKpVxDokrjUmC3yW26DK7T53UPA6RK5m4wUQYXLC",
  "key30": "25T5Yfw8ZmKLmEg88PwbBpkkkifCuAtahns5J8b8CWH5NKyF4PpXswAUMozu3VXqLRivgzAzcv8zDLBFDWwriXX6",
  "key31": "3dw9vjEf2hqrsw6rbLC7ARJ6PSSxjLktoYjZjQufMWuAyocmYQGUjkHvpQV4AEnfww21SnuzFiD6knyXWLpQv5QL",
  "key32": "4z3jdQ7fRP1rpaanf8Brsa24uRdf5XBNZBAkQtRJdj11k1Q3iEMoB4M8RbM3ha82KpsU6WZxtPekzKxDrcx487aK",
  "key33": "ekpTFdYRaajjbTmupzsRFViAXA48BTgnoLfAegPfbyG6kRurHyaonqEfYkjAcr1ijYSodKcuNV22cBLd8jg39t5",
  "key34": "5Q5BBQqG6ACoB17WZ4Bxy6vdBYLFFRjmV6xgj8JVdnJLzFSFtemXHk3y3rcvqosHD1q37aRiFpp57rnDwNgrAEdj",
  "key35": "3C4dgTtPEf7b7p1DEnjAUXZcbF9SVJMKTsiqHquTb3THvabNGzddKK24zusJDVHHFtKZcX8zfk1rXq3CmJcbnYzv",
  "key36": "5r29xgVD9gut6GfcRsapUvCkPAKCpcbMB3E5G2JHx76ts7EBo7RFNPyfE9zBTUKLgVLTrWvJSMTKYPfbs4KwQXdA",
  "key37": "w9KsVxesqvMgQQ4vwHuF6DUqULqBo5JukgTpYusSfSm5N6vP7wLp3N8q9ahcDRQUtj1wnxuejw2zfc3911qRNPb",
  "key38": "4Pkk9BJ3JStneQJk9YN3oCuBh5jbiJKWaq8CsjMrVZKo4xuGVu6JdJpbwbVaUVfLhFGX5CKdEY4EKwxJbD2QZM4S",
  "key39": "3epMinPxGNJGzGrbZLEkZHsgue9vmCLc4s2yTpxo7nuPutn4uFZV7GszyeX9VefWCdnEw8UgLhgUWNAuukEwhYfc",
  "key40": "4iZBWaSvwuNNHMqXyrPLVbnD3TcyLaDcASghujHGGEF5c4qa39PKZ2j4V9TSEf7f8FkT6HStnfpP4SqCUAw16dun",
  "key41": "5938zV4Eww8ZhvKmXvgF3UJgwy3RPsj8YYnDQViU3EABChYG5UgQi7J5uzH1vLLybMWRMULnA6qxaUayXRvo9WiJ",
  "key42": "3ynGT43DtZN4wwq59WGTg1Lq6q3MP1pNnp7J5KgRz64xUSWUf9EhGhrDtLuLkgbMQBHMx1gMnvzGftXXYgNbpgwE",
  "key43": "4FGTLHdc13x7gDFZjDNqRA4io7E8pLskaNwb8369P9zEWhXjta2ZEKSMVEiw1GYvUkjBT9ZCEq3u1NnVYoDxUppx",
  "key44": "5mEjZ537YygHp9vSHwNJ4AZUnbD8jbo76ViBFThQcadDk6Qt9QQXJJcYCLnmmrA2ucquneYQpgdtAgJsm817dbu4",
  "key45": "5i4T9GGjKew5Jchpynq8GPiW9vXW5M2cRpT1VQbnaxHwH1wgf4QNZqL3CVx3FibyEW9km2m1GDgg3s9GErokNCSd"
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
