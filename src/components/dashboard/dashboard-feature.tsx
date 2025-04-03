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
    "3BS5ssiNm3QPPTMSwEyoJyc25zferwuWPvmEvQrUgYx1qsp5f6ZXFnjUj2dhzWSPoGgK9oqLQwhxbJ14hner8hAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57R68qf2HUYPBJ98vgvgP9FMXLB15KJbrAqmpBwTXh3MjQmnoSCVQpKcXQ2FnyTtUt7rz7G1eqbB7XtZVhUJibhV",
  "key1": "21xKz76ifk8VhVwKo1mYrrYUCF99smDvU5NUUyhe8dLmrFtq4WiJoDkDR5P3CdfEK3XExCNTavSyks8V1YPGtAd5",
  "key2": "2aKAnLNYRoba9EntNaLezmsNKY7YVVLWWhnPqYT8euop34iF3fPwqrWecUDd4mAAfjd2q8mie6Ejmb3YkftU4w65",
  "key3": "2qWXKfiPvHRysgSUN2911Qg7wzsmg233KphDbSFHdBiwnS5cZnCRFoKSQrdBVYVQr6qDVGe5WwecP7QsQBMeRpbB",
  "key4": "3M5D3PUXAp8QSxnj1DRr47m1pGHAMLBfFzybLN34YvSjBeX5rfBP8KNLLUzhrQrBR54saANndhjLTLHBjDD1iNCg",
  "key5": "5kHYLzAYiGy8jAVpdcZ9TeMvEcJ7zfKb4TcEEdfRpvEw6Cvj4q6neERzqx2T8DAYDF8TDrPmnjR875qrwTtYVhMV",
  "key6": "3mMrUgrHLdLDVKUJV2YPzi8fPiiZtqr6EwtasbDag8WyKHxtog8CFhz5tzLeGz9SP1xFSPtzhJURapW3oi1fRDwG",
  "key7": "7ubTpj7FyXudmb7tQrASJtpc82EE5hHiEv3Br4XkGw4tTZ9RxY3oPZxJ7Gti8MFhDV37yzBgRC6fyMuGa1xFkCp",
  "key8": "3tvPx8tJ5m4dfWMafM2RCuwHCw466N3ZMZrmVgbaBrYqrEVRxqVdkRMr36o7DurU8LmgrZ4G8LQVGLVzc2nyXK2M",
  "key9": "3DsnzWXgTo6df37Z331LmhrPFYunSX2UAr5YR99rk4LGfvPaxHhzBDcXabhkMAvNFSTEwNQEyypWuTi8AHjyPMLX",
  "key10": "5SzR6jGe8o3p7vra183fXBLiWkgBUdrK8X5CA3yqRoq2DhqhQ7N2Syw8tSuFvVXMKdXcTdsTepje4AGzyaZLcpEB",
  "key11": "4C2UvzZ4ddeMRmQKvS1WCDunTqUZXSSS2vCNJ6gRqdjmwbaKKMxKB4qEX3tK5M2YxzSHeXgAFwHdTeqNb6rwvBGz",
  "key12": "2zmBoDTqskiQhas6dM8skiu6RxXYzU3oSwpx3wk8mWvqXubHkV3SB2pswqHb8XNvGfpN6CYnFe5xoFCvw8kz8sPQ",
  "key13": "5cQHDH9GVG6HzgYwZ5MKcebDbA9sjr3L57QJi46yMQ5zvibecZoZLFLX4X92Pg45Ri2Ux92aDiwuSFmPcmuNS7EQ",
  "key14": "2iz5pc5eFgShRZnSwSfe52w8nRBAHbALASPU5duzjBUG5FQeUF7zzi1AzSJRsHejm4125dmkTS5Heg89JpCnuDRA",
  "key15": "Jdbxx7pXG3ZG6ipMAor4LS3UGNNYPLzXLJ9QNnmgQ1QeD2KBHAkirvioqXkg7LZTVv7ckj5FYzBRmweoX41bCvu",
  "key16": "5i9sycsXL3CnzHuggsute6M5sVBubEsG4YdPeTePFhn49tvudoU5gbUDkby2HdTy6ymSSWMdxNZfxHZivC9q1LBN",
  "key17": "5yUVoyBm7xK9J2YXtGbhRoySfitxHWpgNT9FBz1avKCV2JapMUEAFSZ1aMLGBbZWRgfLiRnonTswZRT66Vjc5U2k",
  "key18": "63HohxqLe5bs15ju7tRw8sa9BMXggcbLBJECAtkUeAtVgFka4uUannj5moVVcXieiC8W9dEtVLnskCEaDVdnge5h",
  "key19": "49ngxdSzQEgidH8mC4crPN6yLzNbQUQ3uKgRpPGoPciRCNgotWgbsJ7TnQRvBkNPLVnZcWuWWKNH5Bd7uxpgcSdw",
  "key20": "3BMhoaYyU4QTZnC2CkxBLpQyNSCoGcZcoHwrg6Go3Juozi6Ej1p9Fx2pZkTK1ZMu552mvUP6kkfvp7V1BcJVZ1k6",
  "key21": "D2iaF7rrNjGnFscyp49UT4GzXe9gYowMk9tkykbuRZkg6Ae5JHScsYGBERNgUFjcjh5YSqqNg3m24iLYNLqZexb",
  "key22": "56hAyFDGyj3VFeNHCyX9cCi3DBoVfWxJpnbPMdpR7eNCW5y2dbJAXFN1zt74X3JQPmRwFzjCGGejTZ1XLEm9r8Yq",
  "key23": "5NG4hJbqCxV9qQQBy4tW3RF4muvoxdosSWAdapicrQGtyuE76G1Z9WE2WmDsoGdvckWEm1QKyktUUN77V19sfnns",
  "key24": "2HxJ6TwzqVshEADb6JuwQYNqnp9dvih2U1untboJwSghyAd1xqPxs9U9wBjfXhag24tY923SZLDmJ7rrAdTdPoLs",
  "key25": "GvmcPxYTCVZLLE48piiH5KDMXJbSyfMjapt81bBTwXTMv4u82pFUhH67aqmUuSHkpAxRZ9hd8Ykwmhy8x6w5WEP",
  "key26": "2CBU1Q9tchSWnXn2Cpkt6j6SgbpoJm3Q98noW2Ru6e5XJ4Fxdx6Ljf8AHrDrxCRXVcZgTJkCR5vX68xb1YrayQCC",
  "key27": "5JGsW9dwuN2JoxMRdMiMs4ns8Z92dpwKuQ7jgEfcfzQ8DGnor51xMek8Hmv2m3haHsaDwFZRERQLTWp2pA8vi7Xn",
  "key28": "5zUfwNDJWkeQVtym3dKM4r7X2wbXAFhgLZw6JMAftrybui5Jkqz9LRiWx64fChyZgJD4B6py5YjyQzTVNKTecn33",
  "key29": "4GYiUA1ePLQiGZwzEhYQJBCvRPHiUwZk6EHRRX7F3wbuqrRbxcBr9YDZJeh7YBisXhYewdu7VuH392bQPyfLWBPN",
  "key30": "4wXA53jy97e94wTh2Y37LRtBaLuMtdjkgRY5P5uKSfVSWz4YnvP65kuBCHEY4Th7XzFqd4Z13UPMQWtYgerdbCFU",
  "key31": "5StK5cKLVF1gyBot2w8ZBNeBg5Ds8XHfQmpTFkjfMYFBcBXC1RvrZf6Lx462mYgjwJv23o7EUPFW8LBfdEAc2p6q",
  "key32": "2xWiiSpy4y6HocfuJXPRqSGJjU5fqnvidakLbWoZBiRA9LGWc1bhRV3bFiLyEezmbDszLXvfSkb9ojaCB2p7tCL1",
  "key33": "2FFRAH2HvC4nXHw6xmknKFhBf2mjodGX522RfvqxSsEnyUYeP1aP9P57yCvZZTiMY5HXKuCL87U4hXm6cZtoey3E",
  "key34": "3YS4CkrzBTFtzPW7iWFYEmUu81hjZFipFRyB8GWqmnKMLwow3g1UBuhtYbDnCsq6eGWkLVZtnHPjaj84TYAehFRK",
  "key35": "3Tm3JAiZowH6HGQC7zVEtmCmGcuNkht9vys3ZeoEXgRjzHhGqgFhagCoHrv2oyZVJD9noWsMDFK2wnQCN3QQAKwD",
  "key36": "Jdxmdyc14cGUNTo1bgyzcyLbx5MnEwiL1BiuE8xBfiEXKTM2PCxgqiKHvnT9MMtBKFE9sKcQQWRcmaHaL3TpCRR",
  "key37": "3e1V8uYkPuDnz8we8QXkSMe2db7WaqkCK39w8yW9VM4fa5o7dDeLJKmiSkonfYUvNAvbCCDxoFMh9VmYi7ej1RkV",
  "key38": "6tansUwk7SPMjwf72QFUttqhMjkwSw8Tcq7XBKLbhBUqNq5dZ8gTFVmFA3mVmkj4ggJ3kxJrUtXnRNKodw6Pb5M",
  "key39": "2ZJc9VrFbjJY96eX3RNeEvJJbbF2BFGjZ3uVyK1aYNm8fawtfMfapvZyir5Q3E7NPaXaaQk7BCwNxs8ie56XxrxW",
  "key40": "kRE9o5h1CnGEP3CdjoQbgeVW5wwWtq1ev2xyfgpT3jjqmE7cMUJWJM8zoNUE9iGH7Hujcx4fCzStZb4ktDonkyW",
  "key41": "5bG94ZRkQShUoioTi4LYVjY7sU93uccK7XRUhm1um3ArmZwRzwmagE31xuNhmfkWhrkdARuV1a8RLQ9itd3Mk5qs"
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
