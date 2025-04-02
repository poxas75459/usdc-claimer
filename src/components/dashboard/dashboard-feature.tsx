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
    "5TJkeNRRNJo6QZ8ZBmmMER4dX64jab2ELMxqeAhvMJXqJcnUcPaKmcYH6zy9dkJKZqe1ywaBzSm3rTkt387B4ASY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iuBSeNVe6AHyjMCfRhheFAbHDBfZA3GFCToLAPSE4TMsiFCDxQ8V6XEYwWvFwjYzPLcpZ1tNa6N2dSKNboqKpBG",
  "key1": "3toZ2FtVtA8Sj9xKtDP683u5icp21DbHFXwDq14sAT3fnSiAqmXFcCkPjw2z3nRP7u3MmMGA1DnCRTSQtTAVL9xU",
  "key2": "JVVPgfPJrPaqKVSMe6AQtMdcCFuAyCV4CmTjcJLrDMavPT9eBd3Lg7YhM5viPeDQzHykxtFJXbSsXBTzsRhQdv3",
  "key3": "4X1FrYRmddesZsBSfDJ69poeXDZLRU6k8wcT21sLk4dftCtQAvteu4MPgS1df9pNjfMjYcuaEsd39n5vtuigqXjA",
  "key4": "5Lmq23z5NV5At8cBEMsbk51QfyQanTTk1saXt1RZ4Reddn1YJKHQXKBQawBwpbetCLZwouZgKUFgXmAZBLQoauxL",
  "key5": "22soEzRxr9FU26xVznCZoVWNxjamGyMPg7H4K1vxYKKQrGPU8wnEhLoUD9gMggXETKqQPxRKN7H5psswq8SxGur3",
  "key6": "2jwtAjMyTdK4KLMN9zHUSwPw59ok5dAVTGUpTKQsNJxyRsGFw1FKniCKhJVSh7L1npnvfn6jP9Z7b9P91mpXPnoM",
  "key7": "3wYZNZu61ie6HBMQ7P1XzGJMqn2Gf7BE6CqaAUv174LhGueMw5xXMK2dcWAS5NFe3gPPSM5mBLxzmwpZDxmmzXB3",
  "key8": "5h8oy2SztpmtF4dXm6yhmSmBZLZ3W8jVGtmwCf74aqnmrsZV1Aw66WDAQD4xZJGXq1juYjqvj8yz5QhPGNBuNugb",
  "key9": "gUxv3gRbxXSCWSyGAHXPobdzWaPv1fYaXZTGvmQBYu9FdPTw3ppshJJYXKknnKytDGHYhNH1Stohhz6nPuW4f81",
  "key10": "5PQKQ7ucfHVXY2nJdyss65hktLMsSwHaudVLuegvWY4848CxU3KNfdeFhN7EmqZGRLaZGF1cHZBPhV79YNnihpBt",
  "key11": "4uHAhz76egfr2WeUV7uK7me52XJgTLjDf5TosbHV9zTvEhE3KQoe2tYoBa9KEPsTM59HRRQSEbj8YVA4Rc4vzwur",
  "key12": "aARjDqtpCTMhKYrF8Lg7jd9NdQ3cgy8cdtHFa1ATCCmbsztLaqNaeTCrFNHtGvz7WCh46x8S9a6PzTDxpy3EViy",
  "key13": "5wDPXRM8ztj3PZdArdEzaLCwjjWnTP88p2D3bc2pamNyKTkrMrVzDZ6dPcaL5FnUwDcMobTPoSynf8AGhik8TvA2",
  "key14": "2TYWQcea5nVyUqW6reSmrxfAPvnjuAS2etqr1Gh2RJDVDSZgY6yzMeY9jz2B12CzyfjUZYugCsMz4ABULfc2iQXf",
  "key15": "63Rm5Ae4LrCnykoFjB4fGxjPEGHeQf2wB11TtjghTRH7XeGnnTho3HSXdGVqPLhzP9PHFcCk5qxoNMGS4SwV3uAA",
  "key16": "SBRzDVf4urKyDxtEDdxL9ze17LVkRD6MGe4qBEXFPk1AvwystrVmZRu8Qp3RUWxdt43M8ec9Xqn9xhgEF2XjPvT",
  "key17": "4CjpPiAeCe8oN7SZkV1b9iiML4afcm3UknzdA8ySQXrv6F61Hpo7CofPXZYsbhsEuVf6x67a4MCHRpQYb3SyWZT",
  "key18": "4a9wecwPusFGFpLZYoiyVLpvR1rjpa1dSdrRmc3VTsTmGpeV2VBuqQhRvkqir2wiwVzzzta4XRjU4ZGdzdD4grCM",
  "key19": "4oFuxvQaj5Mdt3UxM6GyQ7ydwMpdhEoh66S8DEwNfNadfBTWtbKuYYWnQxGUnxv6aSpkicgzD7xLPJNB212F2CY5",
  "key20": "91dMtpR1UFzgR2FwQRwUnFCo1QSYJAgLj2MoQZpM48tDcv8XPo3AQjcZbrfYsMRsj5EJMz6S7TZF4rd3m5SC8RG",
  "key21": "5fFPNfENw6vq4r6QLSVYg83PF3CobZBnwAgND7zxz6dUhQPqMZTPUtURjgXnxwKpthBPmehNWZ6ZZwXo4khvfQ24",
  "key22": "xjBkRd5rZiE2ZJXD8mcMaMwKnSg5XVWGAyKb7cDVFnru2epH9iDribXiDssG8W1KoFt2QtgKaMnQQKzGdbVhoFN",
  "key23": "4DpTTsR2FfuuttS27hFckXJJAhdcVvm3LRAx18ZuzUwo7LZZY72TVT9kTry7MouC8PRghnPupfont4qsizFES1fg",
  "key24": "4uXmCsbhouovcDqCw1ExCJGcro9qSZWmqaHZv8mSmFH6Qtnz37NtjQFvQXEBov9wswvE3pYaGEGnrReg6svnFkiA",
  "key25": "3aeK9SHjpmUfnsWaWBQgMXc1wLVTCUSwpvHfAn9uADTGpjU5t291zTfPio8H4Mv3qMSRFMGPBUGYYmM34Bisbk1K",
  "key26": "DguKh2UrFsYwLnmMRPLfW5CZdurS3FCRkadZGZxahnYCYU5jWLzjnGmb3WWojAvtTufUHf7JKArEYS9pdyMDDev",
  "key27": "4hBpfMycQCzVZNwJEE9XcdeqzrfPk6tYcFjgh2yifcXhaTwfJCNAAD9Ex5GN3QjJx9jwjETm7RJFBdZ1nwAkm9Tz",
  "key28": "X2kzMP11mhP26YpM2w8xBirjk7MjtfWXT1SrPJDSfCHuVPLkS8oSVFrrR7ahkrXw199Y9DS2tegtNzUmvKwQzxy",
  "key29": "3yyhrQBfYvSNgd6oV8puyyVetgaGrtfhhyNfN2ze3abm7CBMjsuzxDzoGndKWcX5pJc5axHzL5oZ5Erh2PZE5SKN",
  "key30": "oyXNrfM8gcwSfLdJ8d7szaJRPJT8sc3q84R7rkDjfwdXrFXJ4YzGpz1Be82R1HKTV7NL48yntVQGTHWKpX9Kpu5",
  "key31": "3qH21cDW9vBtQHgSrsptsySt9HAV8GExAMcBp3T4ciDTyHFoFcCdSHxM77yAh7zV4xbJ9MYweWVDdg34wd8ViNiX",
  "key32": "3tnrxo9aoy7tLe4HToWv7zT5iKv2NkMJYBTeudASnvUhVSAht983e6w3CdosvbZuX8CYhCzj8uznXY3zWDey8dHK",
  "key33": "62bhy5kLtDKuGeKD4SWRZp4UHXS9x61v8st2UWReyaZHfMSHiqMDVp9TBpoHHizJNQzepwHCWnBaHpva2xD9E1E6",
  "key34": "4wjvDwFrGaxp7Q9FdtYVCwzzpnNb8nM7axZRDv9bvW2WZaryjW1cz1YtqAjBrpzjuTM44FQTGcMdpQdFE3z87Qtx",
  "key35": "5PV8c7ADjJhrUSxgYgzrq6r5uNgW5XSRZztLdKLt5jaCr3ovtgDFuy2y64cNgUNoqhbnqc4csXe1XdTaB9CULen2",
  "key36": "5S2WJBRXbNQv8wtLUArh1bUmUmMKyvqBMUPbuLL3YpE7eCbdix4ohdGRDwYHXSYzDwMiq5yqmb9m5FMhcijgi6bR",
  "key37": "2Upr57zkLcGLXqX2b3HPN85rpBi8hWzmNmasXTBnioySVJ4wFBm5cv6nE87c8LQFQ9EihJFiTiivCHJecRBhRjfx",
  "key38": "3ESkuxKkfcFQB2VJWhrzV7V2Fok4VkZyiqJZUPQ9mvV1Z6n2BetVsGJXtTQD8gU6oYBDbTcZLrxNB5JU6PBh4An7",
  "key39": "smd8wqFpyjuypabMSMUvyXGGMy4ntQY5fcJ8iW1kVTzDVJ3zHFk4bGwty72PPWAGrqTzegcKufYEsF1GopxkFFn",
  "key40": "21yZPhzxTxYwhNRvjg57tqrCwwjJJeXRFDxd8M9LcZ7P1ao2U4GbHDZ9GSiZWoBZAx6TyTHreUHc2rEJtiwAMvXn",
  "key41": "34tqQT2uWEELFNewtsPjP6yxVBVua97cKp2bvrCMXXDgXkUj2DBGL8JrsUuG8FVByfy7JjqG9dmLiAhrqgesCGqv",
  "key42": "3DS44n2vRpBA55dNdDFdLQU82MSQndqmAMZFu6oVLsQ2wns4PnXMdC4ukzzHn5vWQ4Qe3Hs8WrXGuD7XrDHUdfSu",
  "key43": "61Gp6dp3rBr23ZmCw8ThraAs5t7kQEEJ53V26yfqmWzXjDExVXefoVKc6jFc2a8wx3hwq7dK6j7o52DSbQMGWBYj",
  "key44": "54EGo51ta4WkLdjrNMHtPuXkjL5P2KqTZ3EBjPwR4W49LrVFYJuCtTrc3YsfUDs5nCLQHChzqemX4eZbBQ7BPN8C",
  "key45": "571n8NqqC8KyuRPPwuzuTHNTQRssxNA9gh6NH21qtPXryS8LdvAKPBciaPYnTKGYNR1SX7ipNAc8aq7eDoo3aMx1",
  "key46": "3jdHcT8oYh8RuaSypiFgCrngCJF1Pz1ACfxsVagziKDsvDJkkBY7wMhKWD3G7bp2aw34sinJ8KmTjSEYrxgBLa9j"
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
