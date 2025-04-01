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
    "sYNxTWmpzTw8Jph7s87DnS9Jhp7GgRrD34BsQXz8UVViamoeBsfFFaX6rxMbxuEFzn3n7tTnxRXFmrUW4u5M6eR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35HDK3pzFEfQPErCduQzGtmGKAgjL4nHACGxb4a8EbA6nA7HUxxuHpeBrH7Kxnk6kAhU71aggmRptwzHucDw6dSN",
  "key1": "RucLXtY7j6PYyuCPtYKaSWU9JAyyGDoJWiJQYY8mDj6VyBUEjHk9p1wNPDo6jfh6eCuatKBUUqoqW76HGDKTCcN",
  "key2": "WKPd5ibMqH1HmGjGWkfoTZy6tjt3XsrgDdP5kvAFFTTyQ1PH5mhjsKFaB6hV5JFG56cTsTPPh2W6MkqGmmWsc4r",
  "key3": "4jLaUikEboN4ApRahbMUZ44Ajnt6HUHd1vFpkiyaiiH1sjA3pBqoRWjcoiLMcxAZiB9dsUarjgUkx2MHyHgnvdx9",
  "key4": "3vWoWKyVixFJrZpky7H3i5cNJc8Uf2RMuVoMya7G87WqP5bfRqgYBM6oGv8WC2KbpSPNB3AFNgBsFtso1X3MmeNP",
  "key5": "44WoEcSGeL9cFqhWaaVztygMrWXSsM41raqfABLZFjwRsFFr3XK7ehnVAFWUD9zNNo9uxUHWNaH8e4Zx9eVBgKbN",
  "key6": "5skRWgHx2tSRfbLEnYfzYvkVxM3nVt6DFX8WVZEyNieA63DwzQLuXr8cdJQMjMJQmKGBz33AV5n3Lgje264SQnVR",
  "key7": "SdqQJBPbZ3BS2xzHu8e2CGqPVMKfJC4L5TiUh79qRPnkXbLciLR3KFfDXfdSYDB5e3k19hCeU69rSEeeMGcdHGc",
  "key8": "4ahSmVezaXGX7eiS3aMKXmmRyf6oDUdsdGzqYq3T68Xm1aV7KhzBMkLdcAkxYZ8VS7eYp5cswxj3UwqHraDtLvkE",
  "key9": "5w4RebydzpxbEyifjyrUQtbiiqaugyqCFvzzskKq6yLgAedwnL5yP8bkHTwpVmrfkmNucZqqPjej9dM2rs2kymcA",
  "key10": "5of2qyURwS1bMrmgGzZcj66ey7Yp8LgykttHa5V57VgNfxTj849RCRDzuLVvES9sTiv3246vmH6yvmSfA2ErvrmW",
  "key11": "2DckaQJKCAtnptGKji4vxeQDuR1TuidFAJdAU1XgMBLFTH9peAyfdsojRGCTr4gLF38rrFrNqqoNuK8FYZLM2k6t",
  "key12": "4oPia5GEmztKNeEE1hChoKVwAmegep9oE6vLwGyga15Eh8UvR9misXcsMopgZo84fUChJ7peFjLTYShSJStih5SE",
  "key13": "3ZiU9DRQVvHJgTpHZbSdMHjGxjwd3nwqTes1wR5PZNs4MVhfQt6a86cxEsJiKtQh1xi82i2tK3YN4QcmRz7HrejB",
  "key14": "368Xi1MAx2rM7RAvLid1L6ZQzp4QpqeYZTwc8QX5mVfSM5Xybsd26iXGdptte7FBHi9sCiE57GWB3gnJrr2bwEY6",
  "key15": "4QnU5jRqPkKq41Wux7R3XFEMDnNYBcN76xiQX4Z9tpZpogSmTW4zQg8cr186o8ULBcnqMEh4ooHYr83S4SLRWWNY",
  "key16": "3Nih98m1GX4pprk5LkXJdrr13iCf2pMYdqD4iDEZZvwK6kAFDWL93GqcmskuiozV4sGjgZfSMzpikHCTrkKTerb6",
  "key17": "5qrBzJY1HhCB6HuDeCztAeKBoiuU1UbTs9JXqcu7JuTvCZG6vrKdZkXvX1h2DKg8LtxTnQby2oU5ewYmUCvRLcGZ",
  "key18": "5tioaYWiAU7HhvpHqKBDZKqfRjHJP31SpY85sPZNzRx4NRaz7Y2q5xEkgJX73NSEWKGKTH8P7CqpwWQKKPLmjjsQ",
  "key19": "izkRJW5TSr6XVxJ7QPuEML6eo31RxqKAge2UKr6yFu54egXHijHVs6PJ8UCx3zuT8dXHAnc5JwZ3muv9gEURETz",
  "key20": "51XzeSAyX9otxxRNdq1k2G1KfifUPrmEopjsDVE18K1NTKUrXQYmBFo9U3237beQk3p3YTdduHdF7FmqMsVvpnns",
  "key21": "3NtU1AA2mhn5zG5epTaupRMuY5unAtNygkc8MTVbLf6h5ZYWXFLu4UJ9b3GguP3mNQeULRhvXis9mcYWeZeL3BHL",
  "key22": "4E89tzhXqdLKirHiBToZd2RVdN4q72aa9CTse7sb4xf9StE2RLJ7nP9TJ19CJEoHMYZ3sD9kbfriAgzDGgS5RvCS",
  "key23": "2so7RZt74sPGtQqebdTQKVMvjgZadfxZEWnz28mvWyHFxj7X81zt3qJ9SxEs7KCurLncq7c8XqtNjgkpGnLdikuN",
  "key24": "jDCGXGQeWSSkbszWEtL9AUdUQeMvcxwRGWHNwngxPL2TNLs65XWe8AVtuSPS1HbaW4W3KZ6fVC5cjzZ3JFtrpxK",
  "key25": "5YLpyYBsChV4osvwqUnDTLZpJCKrnhz5Yffszi82HzH33b8vPyPAj9FCoSv5r1v1UK7xVAV7ShLc14TTjFXBn2Zr",
  "key26": "48X4T76YimDJKh8GTxhe9EwZRVo1oigQHS6Re4QnMQ4e53LcyJkEkqr2ngjfMi6PaCpPWoxXAsST9VKEg6CCphMg",
  "key27": "sWUrfFhpdN81iJMRD1p3QXNHWw7BcftRxAba3toHZwKa1PcRyd8d3iwgJU5iKPjAx2CPfDNpA1avgF6Yz3XzcBy",
  "key28": "5ZuCydhhTdTZvm1WiG1rrcsbim2SkrK1AQ5Zgmfi8b4vxCzQLHag8qDjUv7GVzdVAfthXUtfrFFpAWzhrSt9Y5ot",
  "key29": "3dcrHubVHdJuvhhithEQ6h1NYCqhgGGdQJepp1SmTWkn36ym4s8tqYBSSYKVYBvQD4J1K2JXWgmZcErdPEJtMdKN",
  "key30": "4u7s4AT6nmDoAJcZjQS97BgG8LXdcGrGwCUUDznargr94gW7YtBZaGT2XNL8c2Vj7hyXHtC3cAZvPJrf9PLvqzKW",
  "key31": "26yYmNH3mKXW75kBKCEKe5LjDahnUYv4DtUoEApgvhT5rcU3Zj4Uz4eBNEHSEB2BX5buEGrxGgr6zme3wsSUze2k",
  "key32": "3GyDJJvY9BniuFdehspGsJTLnxZQBNie1vU7oZ5juE8UumvjhKqve7E3rCBaR46TukEgo2ru7Q46i5s5nsuJi8qF",
  "key33": "HVitK3jKPJSiLN7QrtuZzzssuReehCsmoeTxXQC6Z1oNCBVkjuTWEbqKWdUsqhgGeZwp97p4EVDL7RnpB4agUDZ",
  "key34": "WrgX58oeGaWR23XUe6Uta1rNg6G2TT54RK6t1Xnfx9PTLjbQnzW2j24ztoyCSsmL1Sby5SYY5ReNnnXhS8UKgbW",
  "key35": "3MeTzVTpWq2uuGz9MTu2gkDjDYFTCyhVWfgCN8KR8wvpe1iH7ZjDAGw9crghWSC4Ddx1PNyJLQRdTkxGDdtUaipT",
  "key36": "5VSnwuK5jrdGaoCg4w6ccY83u2S9RU7QFXs6LZY7W2sj3Q2ZDNhwEUsUTCkU9FwRZ9vXnFPqxCjchntgfjwfkf8i",
  "key37": "3i7QMpHMfvqpniahc3RfCbHcypV9FFBGr3XNz2LbABHxToKD4B7Z2mNz5gh8p1GbsUj3t6NKUK1h1B7f5M7wzjfR",
  "key38": "3PTztir6vPdpGcv9hymauxapaWofMNc5PEDqrfxbqpeuwCVLTyQtzHnbeY238fhHPaCMdY7kKCB2GNntdZMscXfQ",
  "key39": "5HG8vc4zYAAXnScZLCnAw6iatdfnA3peMLPA9ACc6d89zYJNZW1USx9SGBhJ2GaP4uNrfn2Wqz2Y3cDjXXdbuKt2",
  "key40": "58Y5m1qq2hapG7Ktavyvex6U9WAVLeJQ8XFoKgm7YTg3woUmBZtd18pWD1y3mE9Zstmjg5fcJyikTWtKo5nnrZcV",
  "key41": "hACqGLzzy1rA5NjE4n1bu5uwdk4W7N35ZTtYCjGf6uGmXK2Y1Ph6sY5sJ7wxERakM3BYjkVHUy82kn6MHLgFBcS",
  "key42": "cupn9d1QEuk4AZTEcovX1KxwP6T2Y8gfBUPwcoz8SFxHcZzgkVRdenuCp4HTXxh7UJ3grbE33y1ADnT57AE1Hcu",
  "key43": "2S7T3C9GTot7L7Y2F5w3FHdg1smbcaM1LpDzpXdrjoo4AbMrPJtdE3GfTayyerPkb4RsP3yQvy97KmGxUDYChARF",
  "key44": "2W4Z5xcQe1ghczLTeozRJXprad2z96ruFdL8wXWKzSQFVmJyYNz4UsQNhVL2UxxsGWqfdftTP6dmTbtMkcqzTAHq",
  "key45": "4SkZkL3r7ug6ZKLXY9DBknQSH5ymbXvjEjXSUB8rnELF6EDNREsMGqH32vTDo3MSB3tk4eb6ugf7YUsVuduyLRxS",
  "key46": "21xDnfLT2g2tSJi6AwXXBqosGStMi1UVfRtvgQzfQo47pduZHV3QwwbRL2FjRwetAMQqNiDSMEffYV86yf6qw1o3",
  "key47": "5TtxdeKnVpdw8GrD1LJxfC6hdPPn6mfLEmefMnn7oypBBBAhHZemjJxDQprzgVuR489vwZ2rosdpcHSvcrEEYTQb",
  "key48": "5KviVw8bpNkTVEkq5CyjsgX5QBSK6HhRcsT6cAtis9HpoSd6Db67awfnwesjbzkWxEhBSgj3FS2dvjeUj3zy86KC",
  "key49": "dsYjfpFYSGGN1qUWJQNAAe7CFYL6Ekzunmkf23oZgTpQJe3QQ5PhPfV5PAESscFoifVPUzo6RGMLXq9k7dssfUJ"
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
