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
    "2chvPQXJLFaLouQEWrbbPNiUGC5JbuuaG3JBu8ztGhWHtbS73V6dB5i3hqx6bP7PrSNsP5bdKwyKYxeTG1RsJ852"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ydkkuEVm2JzzDMdTfPeHfbkoXDgZXEAHDEaRGHzVVoqTGp9oMSYPb9ZeBu8wkYEXtB75Vxa4vQmneu3mcj4py2z",
  "key1": "5ia5VFKUwb2PFcE3vSiy9sUpq3rxCZpWgPoZGuL16QyFSSkTG4ke83iRxd8thsRaimk6bh13ooa3KTsxPFpgHpM4",
  "key2": "EDTaNmoVCpSjuQHfUC2ZxBYbm56RZXaXuuGA99zPREYzqF8m8knFt6pccAA1bHqXoJzuYJ6rpjGVAiQJjFdJNfu",
  "key3": "5bCQVzBjW1M8XUuzbN5eT3KucxMgtYGmnsDqCgtpoNi28Dhhid59AGT2xxV4e3DUDyW1nfJRzfnLPnD6cBhuyy5M",
  "key4": "2GDSPSdwpTXxMKWBDZk22zBzruZTA4TC4a6ChW6kuWpsppSet2kmJ3BJfzo2hQQQgHfa13zEET2JCQwREUdHSukm",
  "key5": "33xQmy4ckvbXxRLk5x3RUPFHaPJdScNKLqx5kqY3ncPXcKKZEnmtTmhrMubsnm7SJdJixqkH7D3xJFDfFKU3FmPY",
  "key6": "3jYN4RwDqkRj9M2aUrXtfYSXWMBj7QbCs6zF9sa9jdSxovQZ7oaR2PrtkvfPQq695kj5eUpT8amjcV9wXwWWDM7F",
  "key7": "5MBTufgYYU6caTxD9p3tnWAHzQurx7GyG4cK731e37C863v6ZzQWYxQ87ornCBWAWxd8389Cy3vdXaUYbA2hGdE",
  "key8": "3X7Y5r2CHb6cu64DUV5ZjAp5UomMj1iA6Hu9MQw8FVGGk3FdtRCMFGgLh71fTMb2Ko8nK8UgzgVPcNjKFL5MvZDe",
  "key9": "2VRd6APbB8hr8Dp7cwWp5K9uvVY9bPpmidefndV6azDgZZXyZn2Q1bqVverNNLedw7qL2h2zMzr5i1ZmEVm5W9LZ",
  "key10": "44jAebNAbx8jgtaf2TAozcZpeAit7nSkCyFeoxuF8ciG6bWzACpUj3s3cZN9wQ3ks4JXkh6vaGaGSSAFWG5RMNNF",
  "key11": "32GLupfK4ufzt67gzCfexq6ButBDyMH2AsCU9H7GY3Q7jvt9MLWMTjCXhg3LFasTQHgH7p7FoquVf8vxeFy59iHR",
  "key12": "j62YdKTyqbf5zrFncTKp6Afzcnja2YQiTD6KXg6vNoRhrCj3UJKwpjr9WvktsgPA2Bk5Utyfgt7tvx5dB1EpQk2",
  "key13": "3sXRg1nEbWG9G4Efnjg5dLa971XRVPMdCts3inc5wcx1Xe7Mrcwgip9msWN76cgvbe2opYs62QBsL4bFJXPEa2Mr",
  "key14": "22qtzUojDTcsZNau33n3SK7LYbYPf76cLHV5kQhuVjVRSgZjT6pojPHRuCjzx7THAHmSji2qJGXYZBkwnAQUjJcB",
  "key15": "2CNDHobY7iBksrw4HfycVnr9FehH1nGUy6Y5SwbejBTWAm4i9wjkdMaZnS7dztHQHaZ5KzHxUcpA8gk1mtgJ4fcM",
  "key16": "2fHYQdeesAzuGFFHsBuYTVXRFfj73k2JyYsqKaJT4PUpE7pVJmE1EA3pgarypx1BRY9yqvaMtRV2PF89T2abcSCk",
  "key17": "MeUEvQpHuMciPnqF946B1euvjMLSLNzvg6Zg99dgAtE7T38ANQkzYPjpiYDo4jU6EeDzKz7aiCRYnXLFMKVUanh",
  "key18": "4o9SZjM7f5AFTtLUzfnAWdHaaGjD2Fx8tSjRtW75gvckJtqJddhuDt9pZ8r5vvW4scE2BK7wK6o1ra7XudYzGjiz",
  "key19": "86nkXRkBqDrTPhiDF9aPWU6RWQiwuzKhagqeUFiyxo4DtxCkDXbrCihmu328jdi8JH82fBk9cbeGwrFEWCnu5UK",
  "key20": "5BzPCersCZBVNDu3x6KDKMUuNUAXtB3qzaJqftzMgbYUQsTXWnKAHhxenYCzwZy4gJxCJ9k987qurTo8UX9vht8z",
  "key21": "i8jzNqZYxXatTjBLbwJGKUNGa6FMcyAsWjxUnHCfNxdm11HbUrybK4GUwbnu3oMKse8FUfxtaHHhzT3jMqufkqs",
  "key22": "5G7grX6h8AEvGTYFdZgFfp7N7rCVaWNmRdehABpyLuzPVjkLqhBv1dCm9W4mbUmmT8PxZCxRc3va7dkS5WL5oCwR",
  "key23": "2BsjHEcmvNtTtHitmDUJZhCbEa42R6NNDj2LvYv11PTdVYjLqWF3XPrDGrKKGQEn2EhsmPtQrc24pq7km6GEao2F",
  "key24": "4hgXUcWnZcb17Suk2nFWELhLZzJojNukPvcgdWM8n1R2HNRB5Rv4mBiUmReYn4YQQcUTUDZjfKvGGQgPZEdy2Qmn",
  "key25": "3NZdmFrwNVujTeQHaTi93je711ZUckhX55x4ryx6UoRdob8DMR9PVj752UHakFR8aKZcjcPw9aGfLRhbm8cAn37J",
  "key26": "4GQ5icY9MdERDfE4ekBDygFJ2JmaPELC2oRTw9apiEMKpxBQz26ivQTDie2FxUTn3gmk6QjpHDJiy1kDFupeY6yL",
  "key27": "4g7UYtPrRjZqZRGs3JH4diQwdJ4jV2nwwQFyMDQXnVeJJio8CyZAhWxRpuz4vGwXjEm9jvuFxb6acqSuSNYC6abA",
  "key28": "5pLDSuE11wL4VhGDEWW7r3MzVwej2gmpXSVYccx35Ltr8RbR9pD82xG4kSGvPNXyZwBZ7GyjtV63qonLYbtEMBgg",
  "key29": "KSxNUHeJm94T2wfr6JHa1L3JUK8YujKTkdV2aqvr9Ktjz2E72csg3esXGfKox93Cj7yuv2fe3iKbuSijKriSpCr",
  "key30": "3JynCSKKSAV4E7M5ApPsv2Bfwg5DcpKReQeevubD9P4gmvQ4AZ6EZfBE8N9xtAzcT4BazjmDcBFxjgM89ujHo73T",
  "key31": "55MfrrWW53TXHF6w1wrw5QWhdwvL34f2LVPSGa1zj4RqptUokeuV9MJsvUnc2FFbT4rNbaa9o5JVCmnMZ2R6zrwD",
  "key32": "4VLNxw82W4vhqdwFNS7v4B57NPd5JX2kQpG1RdZLDnEx8Z5gNEtEet7zvNnP6ssUWU6w2vmSz8en4Hvg58hwKhjw",
  "key33": "23UoAX3r4wUARZn5x1fN4Axh5WVGdhSzgcQYkuu5Qyk4co3epTZZSXdPQKvpMK9iVmpDC43y1KkGLcFiJjX6KFhj",
  "key34": "3LYA3Th4HKVdMNaESwjmWPWgzconePaDkVeKkmY8dM1mPcRFWtWz92ZeX1YtzgacMiSpG4Rdt1LQzMDj5nbZwueS",
  "key35": "2YcYvZ4Htsy9TiJJSL2kGZCmsGmNossPG5tGZU5bYfsNYpaL7rZmQwsRVv3Avz4f2eYPE9uq6qmh2o1A3VTDzPwm",
  "key36": "2AeyjRKbwnPoRtZsVDQN8CEjtuZFX3PNNdoPMkaHWjjAttMDaPYacjnPfPy6i78EawUoXse3h6VSa1TJgcv68k9z",
  "key37": "4S2pP3JiR8s7sdhDrLuyDxLFjX3d5rwVoUGJjSyzf4J9kQUBLQxZSSbxEt6qMvRNUDtzhWZCpKU6VumFpNVgYG9R",
  "key38": "2WAo3xfepqSB4mD3yqUV5z2n4kgv6uoGzj18yEqxEWDqkpdEbyhg49tA8mFRejfUYWRBoU9FJuHoFCBTk873eS6s",
  "key39": "2rXPMutfW4vmMnDQQGXEnXZvhVJSam1pmpAPVMAmfdpNiApc5AKoNgP7Nt2QkQjKhtjbyzUrpttjJPfbQgbHVvAY",
  "key40": "7NPj8ycrzGuh1UqL8H67JaxgE387HXeJyzJ4qzCNMoa6t8ZhcopCN3sfqJt9fXuH8UW5X4ZUWXNKKjSYEFz2GEL",
  "key41": "2BpWiGKJMkEJSitDAq48gCSjGjRd7VyQ2XYbrvyzzWFjAZA3KnvScmQ5z2q89r4vcbnLggq5RXAZmSHmrehY4976",
  "key42": "3Jjm3qb7P1ycBgZD9KMsz8Bb2a6jfYxMT3VSdV8EDFeQjH5HKhpQew6keYML6Sm4FqGd5C5RwGN3FVm7tRQi8YUq",
  "key43": "4iut66YghY3ztbG8AqTP8bqQGLAiJ6PsArSqWd2QofQQN582z9M4iZyCd1aTrYpyPLvB77yCyESaEaAmGh239ve3",
  "key44": "4E5MeuAMqzfSjk445yHYkWpEAWNaX7j3Q5M4DRbixTFXzHrhH8VncrRk4KCqujnAsd3h8QqGgkfoEwnPcK6p52g6"
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
