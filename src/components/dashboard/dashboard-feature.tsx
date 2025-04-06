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
    "23D3jyhpGc5zVNcWTkvV1djCeKEpMvksVKUuhzmeVZ2jj3sfP69cL96Nw1bTV5TD2ayUiYoD3pdxThKftexU26aw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VQVBjJ6F3P774oY3gQm1WcnMfJwVTf1Kji5z5kwKWRzXXPxAF9kTZK4XNprswLs8kWUUmxzJLKNiiPR7p7Vgsff",
  "key1": "guaS7A6MZNbHvqUKS4JLpr14pgS3nX2DV8NwUF7n9HqyqhUUwwryz5ApS3LVTDT77SDxnLKXCd5Rg2ahsA98pc1",
  "key2": "34gUB4yiDTNNDD8pRo7Hw7skjh2gVxxrTyFmmMgDjeN1WY44RTdFoppNWQHYPMV2vix8fdFBDD2ugSpYj9WR11mb",
  "key3": "5ZB6eKMieiw1mtCjFLDJ33VMsff5cyvGEgmnDFx6GuFTaQyutKiiBjXDgtnqVk7twja5pPSicdaNqfYkNizmE4aa",
  "key4": "2ypoZACRRNsTqiFvkWkbF5HQFEqwcZQkvKT5bdaNEKXL4qqrrDU1KN1JWtuLomySJaHtuvhzYdgdLPY5fjbTPzvn",
  "key5": "3xBNbdsck6TrBH5vi9iWMGVEg71heF1ciyTXTTvBftPYxMXSxFYoLFCCW98nkGpARmq3FdbniC56Fg1CQ672paGC",
  "key6": "4FUFMHMqS5sRoC7jMq9NA5YtgECoD3SYgi65heBfEre5niDWkjjYfvL4m1cvXC7gEpAGEGUhFeRtXaYB32PEijgu",
  "key7": "3wiPbqUFwxSCK4uNUwekzPYA4LpKFNGTkKAHz2Ru9VpC4HNLMNxH3w9SQGXdeXnw63t95Hfg2imKV4TTqVW4pgpW",
  "key8": "4NueJu33kQcsQd6MNAoozJpHuMtLLLQP2U5iCh6n4XY3fNgfALLmWMDSZiLpsSHB6RHZBkFdgRDeLwJpQQyknH6v",
  "key9": "3aQw7WDVfFubCb5zDngktvK4yYLw39bziB8wGW4dcksZTa5vXxJvWe7XTXoz4VYh9YtoRr8FCV2UZVBUraPhFqGX",
  "key10": "3VcTu7sVBMwJHqHfcCZmEWRnW24nkd2nF9XtGq7MR8dQRRseJBvSY5WKrPHYLeLg4Rz4MJUzwEykKvJtCZaZffNu",
  "key11": "5Eo8Huq865UGFC6v4jrVFFd3zyfwGkpQgbMpGQ1u5UAxenDUHrxPqhyzELXYc6tT4FBbXQEzkzkuWGSxMcRwsiPH",
  "key12": "3K3DmqyuxWvGtb51swtyjUDDd35kPk7mnJMUMVdN8fzTYmd7osubz6EQZYLV6VKXJdN5eVSaLb1fyiy6rSeCxyrG",
  "key13": "4JaHHf8cdXa5yi18VtDshwXjSwpzxQ2YMhCzTC4NL1Y656Pe2ty4wUY3EgWekrgjCNGqzCpnAvV4au3NhRHqSyQN",
  "key14": "3jw43NmdDjtxiKE2pSWEgVRgUdcpLL7dw4Fo5kG5sAjmDVKXTfh1QWyB2AfP7YjYqrouSumW6fUuSXGVB2FVUXQm",
  "key15": "2C21MkfNDfHtv8tLvRm59cz8tes8pgcZg9CAEK3WffQxQ4SWwCnnCu6v1DUjLNoPoj1MaAHt1etgmrWhm9xhPfdp",
  "key16": "58Lnxic3QNMpx2e4Z9ik1aYu3uJpM4UHYFR5yDJ13L1Ypw1gzdSjeDv1H5XzzcLrUGcf2ZHHK9diaPnpxk9sELpd",
  "key17": "3NJN3R1dhnTEjffopmfZxFw5GsSiDA2mDaQwkxgs3GmipcFF9CbRV3zqr6yQRGJybzBQbPoNUY5vU8eEACZFm422",
  "key18": "3tWpQVTQ58DQjbDzkDNa2Wby9x6kzFUw5rcgYKC93mr9tmtk9BdetLKPtZxF58xYjF6HbTBQUbBnTx4KefP5vuDJ",
  "key19": "2yB7RcEnjKjGPk6ChrGTk17YY7RUUusQTx3QSTqCRAXankNtYiD3NHkNvstUaTysLc37xUzv4ferGdpbeqyZo4dZ",
  "key20": "Jv9S4Q5CthmPBimsyzo9C6rLK3QTkjz2TEXKFj8SU1wAcVa4xtwA9jpvg6wmV3ykN76Qv7DthhXosUVNUNbswvW",
  "key21": "4iSBWdXGDTfXkPNU8XFNWC1WUSvmNaFPL5bxsocRcpoQP3ErKBnaz6gQ6soRDyC1ny28sq11TzJXpfLqF8HUJ4Yq",
  "key22": "5PbudHY7mGhFcwKwHcuXx5XGPDokSxfSJPFFiVE2STDvbskHVCszmvWiqQ2ErzBpPf1bWW8hUbVfy7p8Ak4EnSgA",
  "key23": "qgewQYRTWYK8HeknNc1fU7sTTfBP1nmdQF5awvSa1CsmLEsCvPSWyB7S9fQ598YB9WTY1e9uqdURoh4xDCSzxrY",
  "key24": "4wofQ5C1GhHYjJv429fF8dUWYiWY2QytUvSmZaq4SGCu5rwPRBSFkP97k3AGXdaqDx5ZQqXJbs62HwrkE1yHtn7Q",
  "key25": "3S5Mz2mRbPKg9x71LQQmoh4NsasSrTxjU3TB6Nc4cRGANRraLn1oE6nQscosayjNtBXTpEePx6fJiowvfxcGLRNm",
  "key26": "BUbskoejyZ5uVQo14sBW3AeNJ8xpSJUZQpt6wvyxH3K7V5b3yy3fCiuyFyaPSHzHMCdetC424w8M9fLnCWQzTS6",
  "key27": "4PopCkm32383zHV24RzfNgKvaTdRGHWvVqPRcHQvTYmumizX7nQsRfd5fqXQz7x2yEP7YwVA5CsnPgfYWtkpaW1N",
  "key28": "2qQKFj2sKGvxgi8tzzZMB16m54by1gkzDEdv5GLfnCif21DuWdjBEE8z96rp3YmcEQcnEA6EU979cDbhky9jfv6a",
  "key29": "2DAvPrh5jQAazSZSZadHiLQ35N9ccwCKLje3a8KMQ4rLs9Mv31whTZiVDaazkKnjiv7jSEMNXUNQkW8jLkjcpo9j",
  "key30": "3f6zS4LGFnTd2rbgyZ5YxeeDdGhQMmVn59oCUobdBLvY8J49eqpAa4x6BuF5aPFgaceNMTyyKDK9PpdGkbLQd1cx",
  "key31": "39Mcsys25ji58bjPjmwtTL6rbfgfCnoxTFi2cifQdZGVoWg77CPw8EAJsaL8zffbwTWPptaxQBp8KQryEB4UcPSg",
  "key32": "3mtq1Y7jixTSv4LacMZzJBJZvwQjnLN494MaG1WxMiZTWQVj1DaZDEs6Hkku6pbg1UEW8N1kKAx6tgMGjbhxChcw",
  "key33": "NdnfKGiYd6omhvKVufiTAuNKSidnxF7uSLxuXJTLJ1uCENYnA8jpdE6XDP7jNDGnsMy5c9Y4K4h8QAaJxqNRuGy",
  "key34": "3dFdfFUdMkpnhzGt3aEiuTxoaGy1mq2A5R9vBcTbgytT5MbZeefHBRQ4hqksbucYZWJBUucc4xeVK2cWJ22wSTiz",
  "key35": "hAZ5kbPWBBxjMyVBW9Kz5ND5egqU9jEGkKALbpqpiSgC8vw6scpGdNyuq4mZq6A6F3dLRDrfFQcfjHUnDdmfoZi",
  "key36": "61boQPiN8Mqr7gdZZyTVGYsHQJ1QrrR9R7f54HChR3S4qjDxPBRxsCkHgG73mt1vxv6MQ1z3Nsja1YiQ6MWBAgDF",
  "key37": "2gnnhA3iUkAf1MgGKVQsdkXrDe9FauUwZNQV5cwkJDs6JBx9RXSshYsqy1L4pPPWBvyMB7wjf6ZKRDoNEVSZAgzT"
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
