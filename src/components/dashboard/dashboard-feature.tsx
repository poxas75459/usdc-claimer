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
    "qZnSnnAvhGgi7GaGqSAPhshMYSn2py1x88LpXUVpx524nuUREm2bXMg1r38yft1GjP1tPSXMLAPxEoV8sBD56Kj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6v5KLS3r9nomyeoc8pZbR7bp2BvBNyjPkRSXp1xQtHuEU7DJ2eYXSK2NBCCpGsC2p7xdDUG8bVCMhatGuEVVsx9",
  "key1": "9wNPz74UztqAr6k1zAGqKxCtbfLX94VmwNbiTUHhM27wib4kStGaNVBqTrLur4GMat7tm4guZA3JJ2ns5Vv2EqJ",
  "key2": "yUNntQFDF2zyyXKCeaZ6uvMdYbguQv5U5STfpC6J68Q4AJnEzTbGXThQ7tHb31WBiZNkEBSaytgjsyV8rkUesRP",
  "key3": "5wNJE5njQicQXfc35KEW63u9xLhVpRuXFVEwSakMisy63oKt6gbWtQJhArbZUY4VTPjemSesHk9xpop4JSHYBxyp",
  "key4": "Cdas8nS4ijhe5HqC72KjC5HdnpNKk8PcxxdpiVcby59wozhihMTXVdy4443M6Uf8NczMbt4opnuDy8CceoCocS4",
  "key5": "WakCkzZRvxHC9bVz1cfKBcdEd9yJrCtrT1Z8nNMaebvoYey4yecQY6njCpDGnGBKsGj4vxtGH2MfVh6YAsoPGHR",
  "key6": "4GngAPYr1YXudQYHZsGfMijvm57u35iQ12wqoWHaK1QN288AdH1BYYbjdr76fkAwVp1dZN5hBE8ebJXPzSmsXL6p",
  "key7": "i3tpbaQ3C2HxicafgkH1x5gEA2shuc9j3qvExGj1gaJw9YthTowf2msbkwi4PMx6Q2ks348J8n923k7tNama49C",
  "key8": "4pWcKCtjFzQam7C9eiw4qUCAkYiPqtLmUZX2tw2zQzxgWHWnCotwBiEB3doELDVoWXJoatPYF51HKH8QYvJjVfp7",
  "key9": "5hBfxXjXuvPXb9MPN3YBkC1t8p3BPopSQsqdquG4REGkibvNEPCEB3PwbN9v6RPkeveSSyHGnzbFsxd4zdGYvASb",
  "key10": "4KNoQEX6ti9kLrkF8putsMEqjDvjYK9DFrfAdQVoM3c4EKCcPtPwqHAaPUzGRr1GdrgGytEZgT13JGXCAx4w7mt6",
  "key11": "5b19vqBaerd6VWUMMxsTRhuLGXVgiyiw7rHPhym85AwKHrZuqDxfht6aS3ACA7TzPiyzCCfyJ3KxE5FwUXhz8oKc",
  "key12": "4teYf1Lod8FwGVnWRxcpmQ6qUfRmuX6eyzaeW4TbTpMxJLhQzsmYAeVaj7hm1jH3c7M7gh7ZKVBgoCDczDkcW3Bo",
  "key13": "3jszcL7ZK6bA8kLgUNem73baSj1kZ2BPGhjYLkap12XhvMpGTFuXYtYDQ1e6PqFZhHXzAsN1nDvoswvHkKnWNbj2",
  "key14": "3qDYeHa9UTrtncQh6dgwHiuE5eU41HTFKcqzTNqH2PNvb2ok9HnDxLYCzFA4RZg7uLuqbk2hJ1wk8j1LLhG9jvH8",
  "key15": "5j9mck1t5531q6cwwSn5UmhCBDX2HAra7e3opWKqsWZesf7re4HriLJf5cY8t6Z9x1GTSK3J9QXJEjSTB4T6ff92",
  "key16": "2HeRoRFb8Hx5NuPbG4j1eBguF4QWdonn7caej1fLKx5nswiHeJKZhKD22VMJZkUFsXnYnTL5pgbKyUBMCfqcjZ3j",
  "key17": "3oRaySgFUKzBBLNVTUheH8X46L5RiTXKGLRXDcZpGdn2VvmJ8pabqCSsbDiKPjhW3E7dEyp6FD9uksxh4La5VR7K",
  "key18": "irRXdhRrV6WM3yGjh9LSnN8CZW5AWhCj6LHic9WMfY9xo8SMxaWoJHxcPk4Vbou7n1uefDJvt3XKGwYotnTajhc",
  "key19": "2m5wLMpGLYVmQ7vdyPFsDWwv4AenbUdd8d7Lh6FvSfsGrUrApa1XsvJMRg531BDZVcmUVmcCTtGdVL3X7WEimXEr",
  "key20": "3nFF82BMjsXfKXrKQjYfuakQp4qKZGKg3DxAmmMTtro2tEyg8YVNQEz6u69uqfNxtBXfhPdDxWbWrAE2fey98Xgc",
  "key21": "3eSekCwLJkfFYAQNA9GLSETskPuUxe4Zvv7nGDoeEvDWknMkoXrTZX3P8HfE1A8789L4qRHaMBXXsadjW7iVCobZ",
  "key22": "KFuon9gFpi4ppMgV6vd8sShk2Z84CJDGWG2YeWsaLztziC5k2YBf1UmM1S4XkfVnnvwwUtXsrwbfGo6iTknFKAT",
  "key23": "5JDDYTxuvmzoMLqnLqkv3C7zVSpBSEtRSfbUxGhb1yAoS1HnvXWUWNaL49fW4GEYhtvxAc71htBbeXUNLi2xarXA",
  "key24": "3EKsVexCriAJrkxxacECPNrkWziruLBxFJrffkZcdcqZwCANayr9KpUKdNv4keTZcKfjxWrjYbNTdq6vtCngVEFn",
  "key25": "vEMvseZoymEYd71EFtUMU5u2G8wddxvBwyBW4hraBuXCsy2NnSKoPbpM8h4ywrsa7bbq5z83EAQQ4G4eqkXx8k6",
  "key26": "2s2dYAu3VZovpDaf8rJbBFM6cLAL5R7BM64ZRXBVtpvaWY6XPxaiguH4bwUoaUp5s69yd8gopZ6DodWwcA3hw2MS",
  "key27": "AtsKXFUKYFtdKSXUA4EKsPJenvyfVwpZVMNZhnDZ8unCY5bVHFC3KQJHeu2ztMJ5zJ64WBmSDKKQoMvzmoTtp7C",
  "key28": "3uYZi92nTyF3WHe2Uzv9zsXRNTFSyFQU3tFxexbe9fsVsg2tGDLmxkFYbPwJufXKDpiMQgHiNGYGzKJr1QwTtbt3",
  "key29": "hBLnja1DiuuCrTPHLRwGAooNM4wCqapCYNcBu1qja4PHeqoKuDVEVBPLcSLQ3t9hPAn1A6JpFPib6aYPyqJkcrj",
  "key30": "SkL7VQYGHrqoj5m9zsVaXeGxGVFy5QEieK9CthF4STvHh7J7tAqU28124x8FoZz9ASxCLXMbeazhvLkTPbc8iLp",
  "key31": "3J2ktNeNysre4FfwwYLEWcnqyMBZRiK6kzuqdFtAwNZjgcUErhwB7fpSJBhZnZKBrCoFtEfMZMba14uQDBBGJPsT",
  "key32": "2sAHzP3uQTbZzDUWNJnPJv1btKJhF7yViyDLLRDycvqojVt2x6syJKdzLiPFSTo9tdBvQZtpqKBi2iZXLjALLx5t",
  "key33": "suzMw4ZQRTXUupNqraGPxs4W8XaJ9fgQA1nkdBoUhsGRTSGQwgUUbRWtFxNV6eoY7mJk7Et5faTRsRhj6S7obNr",
  "key34": "2D4gmHY8w8zQEJ92pUAFTQGUFFYcEhsY4jSr1iCLmyNsk482wx6MhmD23zodaTMkcfVsJUuf1pkc8cwgcTFv2R3b",
  "key35": "36Sp23kETqKuZV4g5LQTEJjBcEQAAc6K27TCk6mqFY5wxYYsidzoQs6EUaL316UGURtEWbqzbFs6T3DnunoMDPtW",
  "key36": "Zafx1LVxufookRYud8eXajXiw2LAeGYyaEGBqgrD8VFdKDTAnMnjsifR5SEocEnt7niXMFZ7sA8ENAEeBavUD95",
  "key37": "4icpuKydmAph74Y2EhQN7R3HyJAkzWeHB4N5jqP6GRxb4T3RzuFiUTVPf6WANEDS1AqPDFwgpPeTvbUpPDFR8d2",
  "key38": "3QR4yNXmsgMr9NMXyoS8KB3Uak2ncxfWbRULoaUp9V4E1UFV1kf35wMTFancim4v9cyV8SDoC6xCvKiAKcAgk6Kn",
  "key39": "54juaZqA6zvUPnCwLxeNJr8G2RDbXanUeotc5HGySQg6Af7dURCR3ahknQX9P5ppqWk9gsTKKcWXrxvGKqhuEJAU",
  "key40": "58bCR4V111H6r49AvpsHr3pY8shBQyFAN5GyceXSp4EkBzMZACjSNmCnG13xkmW77Z9phFnRF6mWs1XXYKbm7MhP",
  "key41": "2w8cF6RvQ3H8UzUJiUaXG96zbXFPd4N8qzGmE53TZKabaLcN3hArUzHo5P92y1AcEUXxReCDEfSyremRP9YdTWHx"
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
