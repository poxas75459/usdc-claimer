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
    "62WqZpLBJuegwGisgLwy5dAFuPxxmpvrZYDzGJHGBPC4aZHueQxpDdG7ENjaXgJNhgPcLqTgEw8Y1LiK6QRmtgaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LVnBSrXWH4r4m4N7iK5qJKFSDAjHiUvQ8nia7T7kv2eaoLC59qEoRp8ij6WRbN7pfeAbCZ5LqggyuU2CRSrPG2h",
  "key1": "gbXLvHgkun5p5c1tcAdNdZ7tjdMK1AmqgWDXLsp4yDNj4WZcgXP9TYeWqsKmwaLFMqaSuL8uXVFShtnQy8vMGAo",
  "key2": "MdpDaFhhWkvEoLskkghjW8daaMb1ivTnX4pftj8iQbAwaFxQa9PFTviDdLwQge6XiseWsyXDF71TcT3LVgSaVJt",
  "key3": "whtRkxBcFnzE7fFu1D5JEibCzHfQNmiQ6sUEmjmPtxo2bv4ktxFkPV6AZxf2LY871GwusoCkp88UoXF3Yf7At5K",
  "key4": "2juN3SKvGJwcc9PcQHg4t8esJAVvZJMcZ9tUyWgYjyhftjXBvtgyzGpB7Bo1z74njMs6Z9TUgiWNUZ8ynbE6gqph",
  "key5": "4xY3q1ApzphVZdEdgnDJcjj52QS6KkujoT8Jx9ySP6prTR9Z8iYmXaMJJnqj7Le2rmUQsRFz1mS6QB3Rn2GjTV78",
  "key6": "4UAqWntd54MygyPhudyUhrnTVRZr6DWLFd66skB8yLJAKSmXEUW8urv1w4AvjrWdjhvPR2aDqL6WKpihRxt4vh6n",
  "key7": "4TNbMgzgpW2oA1sDi813QFxbmobbZuz6GBEyc1k9KRZG3euEGLhdNBpeifrRRo8vSbQhM7oun9qEvd7QEoNnkLre",
  "key8": "3HbADpxw8Ei3M7fuPpayATuJvm9dLA9LHt6vqd4eGBoT3uU1Eyya2k3y1APX1pEXiyGuY7ZqJd5MprP4Bc55AsH6",
  "key9": "2Nk3vEDPjyTV6Y145qvgtCXJfZgxmP43VCiYEBQKNweJDQc12pyEhHyuUChVcGq77yDs6E3eBY8eZsnQX9NxqjGt",
  "key10": "tAbcp4reeimDAUssNZJVTvfYJKJXVzs18rJFhziWnjdQWec5m7QHED7aawduERcxgnP8ppr8ogTTjob8bhKRBsP",
  "key11": "2DUTuWHdHL34VSsZ64uydYsjVvW3Jnrri8UmE8g3Te5HkKGmkZ23eGmm71ALo7uw5X2PmuEA3KhHkM9prvHjdXKK",
  "key12": "bJznGApCy9iBgcGspizBc88NQXRWRkHonKaB4iagQV5tUT5WmHDNWnLj4u8Tc2qNaBpZqjFWPgCKE7N7UyCTzJN",
  "key13": "4KDFPc5gfkqDPoXKHk643KKHJnqodu1wEX3JqZE1U72VmAF7bi5pV6b47u4cfttS7n1vwsCNpii5d6NEh2PVkhgC",
  "key14": "2ypg1G48QG8hnmSbJxPJpcEmKWJRv8HiWDxSxikzRsgUfuhFLKJkFT5pUZXmXUTxh5Lq1oBixS8U9qNaGUDCyskh",
  "key15": "31jzd9GFaujVXSTNiQagA7NgwXe6aphEZN1puqfkWbrSW54o85myMCMBQ1jsWGmdKHKPobBLmYEwWrfjXmPCuM7d",
  "key16": "Vjn66oAy11WqQzbZqvrb4PWNeqxAAe8S6JoYLUiygFEQ5CZbxdoXfKpfdxb59FXZyVwZ8VJWCQZi4tULfyPPdk2",
  "key17": "5oRFKnqvtr8pED9DpEf1YT136jH7TsmkYq6Xpnx9pXJJQMm8Frg49T4XuMh2xBbsYpPAVqHjoQgvWetfBhV3hGVu",
  "key18": "2oECbcdj8aqsaEDuccMxYUrv7HyGCAzsqWy4qRkdzJBpqkpwVu1W3QAj7CpijzokkzktheYQTACuAyj8S8Zwv8Li",
  "key19": "5GFX2Ht7dLZGXsN4zZZbPbKXyN4ZZcD3Bgz5QzeXexn2MT5e71bf4F8AJfQDHSY6G23vXpFGRbXoAtAn9zScD1P",
  "key20": "5Z58YY6FRZfeKXuBRASLwhvLTQXPcaPMkNvmv3EsH3YPJhqwQ11cGuxbYVrqBjmNXpXirKuLpLxtkLP5GoKd8d3S",
  "key21": "44wDCVJ8ZiSq1oP6fQwuEhKJTie5A3ToJJCVsFetTQuYShZ3JkhvUibmAzvxG2kwEyFW1gL3pci1uemEHPmWoZsX",
  "key22": "pvX8VwURn6kYSWfeDx2eSHqzADgCmdBmUZ87ytCUWFWb2zEn6Sy5o61TpJcU7Uce3m7J1HTDNx3WWT4KpRg8nFs",
  "key23": "4VUtQneZ6Axpf4yDSqaNqaFrsdCCo2cys6cLUvLBr8GvnexMXp8Du6QyodESteA9pMrNpACQtCeUHXbghZP5nbHd",
  "key24": "2Q2xpPDgBVBkoZ8HtZUTkUNu342Xg9gVEDVMxZ8GjM17rdzXmpNqNfFZitM136rSaJHrKsRrZL4EmcFHtaehrQo6",
  "key25": "1c4oJh6LspCz3n6gL1cxvoTtaPq6M2KcP5KaeKvuT3bvJ4hLe1khmmE8wvNKVVPF5ULdRhPfGqiwNXsEGE1sBv5",
  "key26": "S7vS3Enom3xPyqK1EA3Ey3u81nQY4x77v3KzFWQiAJ5MhkofHVqQGvJrYAmgQM5DFMN9W3Tkc4SoEzoHT2XeGSn",
  "key27": "gMwnvstizFknSiE1QcwXTYmUFnL8akTw4vBEKXALLYfynP7ntQbhhwwFtBsWFk6XrJL989byFzqGaHM5wffE6AE",
  "key28": "5vLreLVSA77EaNqUmLJioiGDJhoi2BwoxRjJSx5Tr5YTvy1a5pLsHeeqdUk6F3p3pFG7WxNFZEzHSbdEcEUizHqU",
  "key29": "5ghz8a9PRM6jrApdND5mjWX1P9EwZrdhLCF5pHYyRTQ6dGE5Lo5GWaYBMuyN2q4Ws3D1rvTowQLDxBstWKqR3cNr",
  "key30": "5nnFxDG9aSzCbiUEXodR41PMVdGNgXAb1HQmuiUxmrs9Eh1jMBQKKUUFY21daBrCcff8B3nW2xUDUjHLa66ZBoqN",
  "key31": "3w13rrStEkYbGwVvrF1wB8oaX8MpBiTvc4KBxtDdToKmUPjWfBMrS7GKyMbMaSeThNHPQqQ3wMQHqkpMpm8gL3Wy",
  "key32": "3oQmLnoSV43SN1KvNd19wCmNTS1Qh5kxK2yMZjV9ABrvoxYXw1W4MC5y4jmS8nHCbf4YwBL3tbX23o9pYtMxmcf5",
  "key33": "UEVzHJWKzCbQpnbf3vgEXoH9ECJzF5SsVvHn8fsy6BbPF9wLAHiTb6ENPuzoMEF51FfdbErfLEQLinGhX8HW5yg",
  "key34": "srneR4WcSLw24uXgiB1GmH6FwuJrqhzXfcgZta8jc7Sxq6BSfUet9N1Bkb1Cuy7Vs178MmBZ9eRaJNfsmxXWaBS",
  "key35": "5Bg6yErscUEr3DZnnRyMMbPKJDP4hW6fny26JEgxG4zc2aw73D3YNpmR9SFjCj6yX2D513xCtdd1iCAGAJydZdjo",
  "key36": "4J2GZVNokgE4KVyh1FkQuDnzHwY9uu6xkJM5csfznc7ZiKH3TUX89rDb4V6YiQ5o5Qiy1mcXHQWSxbaP1mprqo5R",
  "key37": "bPeggyvCLkXyiQa7keK4j5D7Sed96DsosnRA5RKdTgaiHXpThRSoxAn491o1VPSeDak3UNPWpPTjrrLpX1zkACE",
  "key38": "3N5Rmcb46nHZztFY6mMbt3xYweRJC3PoKrj1PAW2pHeijfYiJiUTfjeZ1GQeqHVJSEtJQnvy5XWifcmdiyyG68ts",
  "key39": "3DvL8QUQpzMfexe11MFxuA8uN6thDBevw3cwTs261Eqnd3spULziLvopfgN62QAqhmnQ6QV74DD7W4UTFzMiouLV",
  "key40": "28ynipnvpZ7sgtMshPKNGPwCBVoxGLvS4ftGzpDQEEM375cckJSceihgGj3x6EM5zYUpUDrFyLTu85Q8ATb934UM",
  "key41": "4MRBAe7CxEJ8pFLPJpa18K2bN7hdTQyWzatYjenpgAf7GQGKyjKYUZDaH1Eqsr1mxfp6voTTvoUE1fGBU2NJzsd4",
  "key42": "4oqm1JDCsrAQoEXFpey1VwHfK74fgosnBLrc8eBeSNXMaKsA9HZWTiaERFeFnL92MXTCqUip46tQrcWQVzML2LS1",
  "key43": "5y8azd3mPX91X2RPQbUgrkTHWawcFNsfF53KT7orrwYujFxhiFEBnUUrvj1DDxqcscfhdMNnyLfZdR8Lrv6VcUNL",
  "key44": "pjYWD2N54aX7BKg3rcPXDxsyY8inAFzTptk99qgiTbknVkZbtSvDZzWrWaFb6uCsNxNGf4X1zmPqEJLrW5NkkJs",
  "key45": "5Wnh6VpdJ5MTnKSmhzm4Wtbsn7ZKrU8zu5tcaYP8MNaARkL1nNuJYu2Asdh6bWDc6qLSHNu5it73SgSoXUcVo3vA",
  "key46": "2ERJ4P7qmqyGT6FBWZbB2V4sv6LArhHARAs381GUbsh6apyrn6Q56H6xByqe6d13ihQreEtorjXa2ugzk3aFuftC",
  "key47": "33pPjvfEWBh7kaCkbkcaLAme8HnCCJuN3F7zUVvGQjjnuXxphAL4JtraPBGxNKNGfYmMCXb3JucQFqbLSRPepyno"
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
