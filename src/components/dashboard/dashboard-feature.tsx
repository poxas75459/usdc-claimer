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
    "59UextGCZVtBGURdZTTM8WskWGCgKXr57rPhjSC2XqbXMEJmJGMa1q9mK5vbGyLKnRiGdAshopsHnJxfMbdS6nBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JZ39hoxcHhxLhD5oHmXdeVsbuNYLEkdoS6a8dvjprQK47bajkacmZzPe64JueBwgEeM5pSQTYzJLBEU51Rmahpk",
  "key1": "xsTatsKhZhKQdvpjEhrjhzkGTyD7awZBJ2Li7jon2ZVAbDCwAFBCevboPWYUcKPHZj7QUCXrD1jamSAevAWxqDu",
  "key2": "4J9h89LHhaM6Lmipt7454Tw59srQAYRhanDC98hB2vfoLTD2zQkCT3gzbzD8Hbso6m6Q5hYr8TjpsbqFpwwvQz8F",
  "key3": "5UvYuuxd9BVrNKX6evmpcgrTeUp53aj94iyMnUSyBLTMc17iHP3W94efUnVDnkeo5HVj7M8EMCAga9rEG3Nt25h3",
  "key4": "2wa69GPXbHvLAsEHFL1gPDaKwW5otUAgDSmM6vEn4rd9bj3wT9jrTiC5VfaCg3UpAwxGZvyWuE9nP9yLdqucag7d",
  "key5": "2Ph3yma5ABZysPHnZxToLaPRKDfgQMdnVRBQ5ZhHimwvLJFKwDWn7PKZnuQhYG5CA5wYTitJ1VBi42muEavui3qv",
  "key6": "5N7q5tab8rxGAkVUmmnQ1UhLg9LRFscTm7RzscYmuD1z7G7GXnAZrEGwXHKPGHrg3LQhBGBTQ5PyYomeoqgkFxpY",
  "key7": "59xM8nCMAmgrr9RXzEpf5RZo4675Pv3Jmbv2eCwRRsNThB5bGwW61ddtZN6Zuxt6hTXi6wFBZrebCAmUDc1Hrrpd",
  "key8": "m7NxdA6MvDFNi9mDTqsA3UWPcoMF5fUrxBCkjAReSgoAVLYzE7VLn64hfLay5L1eqX8DtVJCke39aUM79VpYuSV",
  "key9": "4V9wdNebwy5rnE8x7p1KioXnmrkRXsThDBfqDsugMosxbxDcAddH29YrimggeAn4xV9Chjdu4DzRcyDfkgdGr8xL",
  "key10": "3DrQscdDSHpPUb8X18KjqFgYxhkEsviYJna6GtytiMTLvyJG2jKAmithn7FGEZejj2HVQrFFLRDgdeea7CBzzRqY",
  "key11": "2uUAHxserRnDTVBoKhk1M3zGPyLgxoYw1jV9HspadWJBiRKu4a4tZT1yNkyWWxxdqu26FTHkNLEbBZba4UjhorzL",
  "key12": "4yMXdP78NFHzUNjSfBvzgvsUpaGntXWAz8HD2Xe5xUn4bP5hifuRhtkcd18tVisRqSZLDETYz3HfY4uv25DH6iRE",
  "key13": "4wQdm9c5njQHFFE8gZXCWYjJHj1fcMdAtSJ9U2DHpL7hJE7KFhgyiE5rxHqM9CxGPMVFBa7H87SZaQ15Cj4nPuSp",
  "key14": "3TTxQHsrWTvAuxsatH62Nqm7bPe8LaNBeRVyRvCCS43kBAyWGMv8vR9hS78mpSCj3EigJaHcxZBANDo3ug1y1sBK",
  "key15": "5gFUzd3bTY8LBrFENU9Hjh7YcmeFVzssTZHUDQHxT63XygUsraK3g3nfCH9a7KVZ2ZvjRz8Fe88gqe8b59M5yxfN",
  "key16": "3LWcvawboQ6NH3kEvdGELxxw72B58gVArtdonUQPTF89zUqd2UN59iVWkG3uqKw5szV4v5G7NowvAfm3TEkaYx7s",
  "key17": "HEJeZPdsPWMubXMenJ4i4aevAy6w3Ju7AuXLHoVALXauq32ukC4iJcfemfVgYHag5aFBUfAWMtP5e9GVnd1yBxQ",
  "key18": "5JAKhy4yso4JTcQmauQ1PcjSiLH1pKej6zbRQXYQZYTbuaH1UVL6Fdn6N87QG12s8S1Uta9PfYghALWuT643ybSG",
  "key19": "5xjqp15Fawk6Tue6ZgbM319FgezbLsmn6byiSPwy5ijPQ65jxnf9HjiovRtnNKppprP9GxrUGxWF8aaoEQsJHD9K",
  "key20": "31zaXeAeTEZ47H7a2vJ44DS82X6HZkqJS3dukhKnrNDmdSpekA26FbvS8GmEfH7TpbhquhD3yVSkaXucxitcGDvE",
  "key21": "56tbtU18CRZyG1MGXMQq4W59oEhpwFZA1BkRsMXJArAw8QBuLAqLmkLrGGRsMa2T2A4nndpGX32qqwe5rFmXaBQu",
  "key22": "5aeq1UMNDTrWMGoBxgDKgzcqzsz6xgYPKqjkFbyJSsZk1xffemGEWY1MppTWWoE4yTVFkCf974YvpeSSJaV3nSqb",
  "key23": "39MrjEeenZrkJtRaE3TJe4tjg1NfLFBS2WLoRr2LE4s8rFoTf2PR9d1vhr5kC7jF15Fg4V7kKruyDhzzD2NPMKTZ",
  "key24": "3EwBu6NrNjjqP3GANxP2dxkzkuAuAcD7FMEdGVVqipBfjyNhpLkdxXcveTAzQEULMTvdk7sNprM48pRQYsLFFiz4",
  "key25": "4cJz2WyP9YXjYVg3N8mPpfaKeJPpofyViZnjfGsGv588Do1q8cxEi63pUBD9YW769CTQASHqKkLpv14zL6zaqY2f",
  "key26": "GXmwYv6o7EWRenu6U1aMHojHovAGr8Aqn5Gtu6CGCq8RhBv3Fq5vNcBoPo6gMKkbso3UPQka38mqAiHANynWofa",
  "key27": "29sXF5BBHcAjASKh3i2C2WxT7GJciQz9jPcqMzV6aExU265VZmdbG45X5vjGeU9sVtPBHFx67EzywLXhcPPo4WqZ",
  "key28": "2bmCPkTVGHG3YP3qauCtH9ZgfdFsubHQ3tCGVKcFTuequQsaueJjYRWXssiaVZ6QLtBpgYYxHCHWthqujVrumzNt",
  "key29": "2VEjUErD8LDW7d1Csguonavxqtmtn6fmcc9Fzc8JufnVgKN3VyrL3nM6zdURhPdtmkCDqnTUuVXajH1MmVNEYwYV",
  "key30": "2hkKKqGNs4SPgPXespveLKTi9hj94UJ8jf8ZEQhxfxH5QkbukgyMMWf6YaeB7PK8RxC7vRhRPCR3HeYkPiModK8c",
  "key31": "5AjERSHWAXxhWpuc9hZmuMnYdHyWLCi6hATXC8oL3i7SB6GFE22hPFqQvYeLaVotsw1Zbi9sdfneTPkposXjTYGn",
  "key32": "MxF63i7ozwfAnyhDXfcoDBUqXiRZUF6BbzFewQs8fJrJ1qUqeqqJmU7KhuYe6jrvMy5zYyDjjp6GTrucVvp1hFa",
  "key33": "4bbumGPGzCGxSh4ZEXTGawjsRjfRfah6GnqnfRVsmWmeddnBgvZQHJNdQusoMUMFde6mi1phviMygm2og25qfwbu",
  "key34": "dnsqkHA45dNoX2ZLyFpjpXLLn91auArejFfitFi5HcfXBUygy3enV98sUBNvSe9bDHWqQoX6N5cydce9WTTShbT",
  "key35": "5T2KMREgBzX1QmvpoAbh8GB6wizxEkRWdN3RQEJZiFNRQKVpnxf9drY74voQnBzs28WTUDpvQU1D2X1AP1cSsvnq",
  "key36": "36SwysHSw82JVeJNLfnAHnCyS7ERWcRMZE324WaepL4Vij4m8EfSm2nXD18HLdH7rwenvgkzZ7UmWrcbeTJMAa4A",
  "key37": "WzpmJyicno2DJErH92GKF8cMEtqkKBbwXDswrWe4nR3x56Rgk86yJiQtff7BhuWDDmavhCqTWrLgjsavdV5dNni",
  "key38": "pMvjGbHP1Qg5ZscDCQ81VRsgeojAWY3r5gitYAqTw2hSwxnReG1635JeHbyowSv5ctsqoR4hTpqAXf1RjmFgbNM",
  "key39": "4G2Vm7Ye96wnWQGiomxp6jA1zqxQ1jsvnWr6zbp2m9xopkAgjVnr6chNupSoaMkdwqKE5siNgoeZwZAMwZU7HfUz",
  "key40": "5UwVf23Yqi5z5WLMe928ixZNZaSRodsVodtMt4D2nE6frN9QY4TYTaGNY8VDF9HtWtsYfB5zYSJnmV23qAh5QPb6",
  "key41": "5c1dQ744HxCykNaEw1RyhtGoryUMmAeHivyqL4C5zKEk5GGAEm5WkXM3ExxA4L1CtQveo7RHAX53yvVceSXH3i9J"
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
