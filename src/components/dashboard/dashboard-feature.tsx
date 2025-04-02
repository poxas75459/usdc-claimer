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
    "2inJ4VTM87a8934RDTNVfvy99pfam1q1ZmnkSfNLdtxzGgssq6QuxK3KcTnoT7RWXQwmWra8Ti7TvCSTtT734Bkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VZ1zh9nVXiAuhmGCjoFQQ3NbgT7MP8f1WDzw11HFtjzNn34KAWHM92bUvd3ZBnadMz62t2mKpmXaBoMcT6UAoar",
  "key1": "5cJFwiHHDRq1RmFJ6Ch4QhDwXbzpJu3yA3aVLDDrYQ5QMNnahvYmsYNwhA5H49x9jFbraKonbJfCu1YftnSKzbbP",
  "key2": "ykf2niuNqEF8XxBJDAbGhEdy4sGvhCYpVXM7pQxvgr4rLasWfA19mbTVdH43Q1uoLK5VZXmBLRk4XrBviDbTAG8",
  "key3": "4jDtVxwkioBRuc9tDEe4kEHKPoeBvDaUpAYf8z19aYzvsqre9beEuyafgcpVRgLsSSbevcBvqxtvcETgiaRgwdf6",
  "key4": "2GPR1uzD2XT3PxCj6iWFqcmb5J9Vc52oo4PcYjhaRJzqHMWDk11dyTTcLig6Sv6AWCYqM8NRedQuxTeJsUyNKMgX",
  "key5": "3okVXYThpXBw6s19jsMTc6rmu6FC7vwswE7G8ThfCCYg7s9AKxG2dgDKP8xHRgLCTcAUGCbci2Axf3arPcZZRuaH",
  "key6": "2PkA4gKb4wndJdw6C4yqEjeE61N36duUTLZtL2ux97VFiyTQ6NNqWc6zDBgkajLPcNhVBzUJBG3G1qVLKZe7shCN",
  "key7": "2uSbSVtc5sDoni4WAFjQjgwYgQXwPCveaVQNf8wtgFf7VVMsxT5e4QbbwBimG9cquB5CRFtWpyrAMcRGS6TgcLrr",
  "key8": "4xhWM2LUSRkHiBBoAdY1RLPkj8gUK7jjxxULjEN9mpWMTaMvSNGPByR6QXhyFcerCehTcXMdGmEjEFCyCYgikexq",
  "key9": "LwR2QPkKioZgW9TuLHBbJuW84EVWwrTo7qBTdQD1nEPUrvhZwLgYSRM1bUnCHKtaRcVFBGCzK8NJVrkeKZfhPAm",
  "key10": "2pmFcnXeiu5jbrFxMdz6QworKaZYbf5vuzC1jzYtF7QErprm9GA2jcxfnckLvXXKSLHtBurKaWPMqZRkpP4G83xV",
  "key11": "5PT9JjF7mPxtX791yRYWUATR13JSeNRqVzia3T68wKT3DijCBb3pQTcjU5vdeZwG7AycixVR9kEDx3btcKSw5YxU",
  "key12": "4dxis7f75ha3iaBUsMu8j9hXXybn1FYbjqEGXkJ6goVp7WH8ueHaKJHTV8iL111MoDHEW9VVZsMvB3tr99pRQ4Gs",
  "key13": "5o24X23zeQSFLT7PE6XSeQaEBaVEP1mAghwk4Gud1pr5sV6gc5w4H2p53CzGeyHtScP8NurWHvWz23Ma2Vt3dhU9",
  "key14": "my5wP4ionFW3oJU4imCm79sYivfw11JJyA3dYoq9sg5SHj5ywW8SkYzt1cHKtneu1D6CMb9mTZf12JKFqPW8u2c",
  "key15": "4NqzSrxeefSVDCJsshgJAGjfsdiWBQQWHZJayePwgWj2LJ8eumuLMAMcKQvbqXnQXmWEoedU869YMDtStPd66nLR",
  "key16": "5d1eKNEpepLCkixkRXAqV9rWr72egQ2FtVhFS2zAtsQiHcgsZYMg3jVHFBhGCBheHG2A9DvwTBoDszQz6Yd2Y7NT",
  "key17": "2WzusnByDoFSrBH3czUBzZ6erhvLNSFzvzuAsiQ5KZ4ukP7DctpXDgMVaMQkLEowZjS88oQsKas39vCPMg2HfKmX",
  "key18": "4fA6xKwus7UUBrKwwGJRbc5B9kr3wh9yBgDxoTQjZN4HoMbpkeMhsq2H2GEh1bU3jKGHeGruga3GXjuNeGb12QPA",
  "key19": "2parPGC9JQetE8kF4Gy5Szxzx1EdHEYb5EvCZjhXheBhMhp3rosGwLKJDFNrBRu789D3NrgHaHUZRGn5uQWed7oD",
  "key20": "2NYzHLjevJ6HFurvo6QMrG7XaDq6tkkMXx6A7cxD3zFywkeUubkSas23a9PtyEFKzLkfY7xHJDfNFs4utuBVtb2D",
  "key21": "2pTApGkVoNei4J6T5Qggew9iWf63AwdwQuXgW41u4k9Rec6WK5KuXF9SYUxtsszda9YbocB9nvuVRaX9bU9UTJ9J",
  "key22": "5AAZLXJzTSLsZRe8CPE1wazbt5hcBV2ZjpMzsbGME5rTVmiEwibxftLnQDopWGysp3MJr55UPExEaVjZ4RbsSSVJ",
  "key23": "2FARZ4yUNsA4GTSqX4orpjyDe2GwhnqcQ8ACCcTsYDZ7x9Rv4hnPx9QUmUew7HAMgPfW6XDdnzuPHiQv5FMq1FpN",
  "key24": "2brgdfnTZMwqRzRM7FcfTh2tkUkfuh6bX6ujfcdZ6BTFnrreKsr55kSXB3YMBxa7oLPZTSsPdbUGJuJEtbv9cxAd",
  "key25": "38YaK7aqA2RwmMCWD6z8axFM8eNnsJrgTXqrz8AVFcaxrWAnpU9Fyai7yBWPYCaKyig8QtVXvwpkP6Q4XdpTgVih",
  "key26": "2mngtTvrRVJxkXkjAo5GC4zoDjsp3ssJf3Qxqncv4sTh5se44i27aa9a7N7HFwP2VJFrxiXXLZd1T5ax6NUHnYti",
  "key27": "QybiGxEbK6tNYUESxK5xA4GNidMCkrkCLhxxKYJ4rMFk9fmM9C4U1CJa2pEMWnsJSBiP9U3KEKTmGxuvubLmK5G",
  "key28": "3URjmzPNucGq3LXrf27TWW3FRj2dqpg8VYLRSGUd9sKQwxdcJppKUDCx1dQf5CAr9bp6X35m7Hr5csJG3nGVgwo3",
  "key29": "mC2AjexnvXW5mSCtTjbQtgK1i1g37de94pznrSLpSnXwCyWVBRouX3CXnrWaK1yrV2PtNiwW8XBAfQBhKsgP1nW",
  "key30": "3uXGXuoo3iDJBNBph5wFjqNmSWjFTjaLz6tUjKC1Tfg6GYQuenfQMYLUY6JzuUH3f6uWaanUSmPXbPpsMFfWrNSh",
  "key31": "gUi5JMXm4dh1L8BTupM1y4eViuoZGM73vQ6eF1pdFxF6RYgfJWcBqSU9TDhvciuPhELHn9n7ikfwY8kMC1rev39",
  "key32": "P1C4imtoj9bXAuQhEjQkMtjzZr2u8GNzgSEv45pR4E5LUwtP2EPXCQsZZ6ksZboUXdq3g1kcA8BPJCp9jCFgiy6",
  "key33": "5M2H5sFUZkov7prbdknss7UgwSPUeqVGYn2wF45t19gDV3nQrZuRJQYMwjxfeKLLwHhhY5kzrvCFUBXtgq1cX91v",
  "key34": "3dVqjueBdYyui7KQDrAGMtBy5uyFtdi4w1dVuXGCcjqQVGLS66diPj1NnfYpnUXL2GtqMqW7gPiGACooLeepeV31",
  "key35": "4BZtFUWPewiS4Ju7S1EjqTvd7v4wbJyaFc31Tav7RuaK6DQz24viu4N1wFB9R2PezW7DiVr2xi4MqGaYJyQFxRbe",
  "key36": "3wN1oBrbtG7GDvPP7nAtmPLkAtWEtotb7ADKrbjGRCfPzY3PhNRPWodppPYkxDHHQBGfjrkmxJPYGYZ38ULEsAhR",
  "key37": "4Xb6eQoXkLrFWiH4f7a3Yiyt4TYw27Ad8DY6XW28Pe6trs2vcvrwdxJXhMjMgVEXJF7Nga41kShumscDkMUxtnX7",
  "key38": "4nLnzJ2S25ipfZvHJqBgEVa8BkAmshQHxzYf8F7eEUzureGjCRd6x1W2TmCPvtTnW3ihdLFMx9j275D7tkGVHMNg",
  "key39": "2mkmCSqwT5Hii13Rm7PYFgT2LxSHjitW1Y4K4m4UZ83cKzmroRAnhzJF8ZGuZFb6REMcWkJg2nKWoSAb4PPA3PBf",
  "key40": "mYksY93rBkRQxwQiqYirvrCzkEDn8hoUUK85nGJyBFvx36xkz21sYcZ9FYj15wYEYFArfkUWwum7G9A7S33hxHg",
  "key41": "S9cjKn57QW2YEY86fCPQczhg859gEtTWmHRFibeud15ZkT8C287ZAghXwoJoeUuvu2QBQvRsBt6ozSmyC9kr8VW",
  "key42": "2WpJTyMFoc7epdvJgarjTQUn8wEnY4272gAMCjW9hTraJfuLeEXeR5vDgzf2MgWL3m8z1u5Ryo2JQTLmJ8GzQMFj",
  "key43": "3YQBd2umKNBxYjjnBcUc3NNsFvAhjMRmKWbXK9NdBL1KkwRYgviYWE6AiEhk3nTA5r14vZX9zKGUmaGXdeMMcqBL",
  "key44": "36jtXjfxmWMgGqmsnMihw7n1MDeKPYRFz1Vu9QWQa9VQJHZkjQ7Aj96DeTEnwTTWUJZquvM1ED2hJ4DyCca8Rphx",
  "key45": "4p6Yb4FhmwRcDKteoa28nAmU2J8XYicvt4m8PTdQcXH7TEht7BB9C1wjHuaTA5dzHTciji4qQMFLExsLk6uUa1TT",
  "key46": "45h8QbCVFrNaaLJN4GtyMV7YbEZEfA3PKLYWsysz9epFtNkouxuKNDwtN8R7AzQbaDVZzanPyCsKux1rQEPjfZxS",
  "key47": "4DYjuRp2Y1zKfbfuFsQeRcYhBrcpHHE6d1AqJShE8MoW6pURJxJYSmmMtP2RsFZMHZuu8vgHB9XNro8C8de824VU",
  "key48": "2zhf8sMdccG6xo3vFd3uLbJAbtB848NUpANERyiG2KZ7dVHXx8riyTjtWsrhicWfCYcDXytnsCd9QNwfyY8cG4WN"
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
