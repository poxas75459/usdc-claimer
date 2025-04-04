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
    "3emaudoiGvTgst4BCemF8fSqgeVjRf2ryeHuZBTfeyQ61NnoEKCyCFMk8GgUa97W4zSmEVvM7ZRha8WoDDFNNVt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gZWnQTaam5L5rqEBLWvGKyvNi6iqcuDkqUri1pT2KnDHGYhVMGGDy791YJn3Ew8f3UxTDPYUTRqN1UzuNTFrT9F",
  "key1": "2DtU94yYcd5i94PSVqELthXYxZbCRfSMxumCaQwjbUVGYYH65sWM7uCVVtxAHEbcJEBbFejZ2raQwfJMszxNpYZD",
  "key2": "4o4bA8TzrBw7q4T6hR9JUQefb7w6LNgxhtXUstRd8Ur3XQdH3wzQxYYzmF2LLPgaq6ZcBoV9Abu7nUiNUsrxgUh7",
  "key3": "5ryffbfTc5MyugeHPEFGU9CAAXQWZBEYAebbN5suVARyyXrhDJtM8RMz6WYFJn5S9QJHL4fwtoxBcLVDCT3TCs2r",
  "key4": "2bxj97EjUYcRJy8vdDqmrc83GrJqJQA2ZJTzo62oSdLQCfjwpmxsxkdb1RApwaX8aKRxxQoXgMndRoZMmjAH9Lt2",
  "key5": "2rLuTjKLaqwti3jQHkGM8yE748UUiRY5S8aUZGP86BF52QfAs5BXmzEiKR4CvHjTRqeGEpVTdPSWvAkshzPor3K",
  "key6": "2RCGHWobUG17pGpkzjWAw4obF6ckRzc2AKFv1hMnpjQsc2KsyVgdV8qe3igx1KPD6zy8inVB9xDxVUEHagczy2j3",
  "key7": "h25KPCSPcZoJFHcKVCdgFzZh6PecjexLqVVLtsRLubDok5viyeBM11Nsj72r2k57hrY9BLxUwAZo8KBDKXowsgs",
  "key8": "3iFpxCGtW6MxTRjsHyijGWaapGQ55rBci9drcXHfTALpCRh7udkJxqkRCbsQCXgQt3VrckrbKiESGAb2QwNSLvsH",
  "key9": "3puGdUoy4258Esh6uANXakbKw3hYWpdNyo1jGarQVLc8rnpn4FJtgDfkZ3Rt2tYV129R2JmPNC54oNYnVoL9X76a",
  "key10": "2sYJhRnxg7iW7PzGDvd6uEzHc99iKbnuX8t3j3BJG4q4hK1gGjMFVzdSCTFoo5Y5X7u1dtFCNYfVazWikpVeqDCJ",
  "key11": "3aRgQsTHHF2hqKbmxjjKTXNS7qhq3TqNMBEtTubv5LaKT3hDybpSBpViCx3zSDthtcUUPQC1V3TWgRjPU8gEM7re",
  "key12": "21A6AcSvfP16xPZiiJ2SDnxgtJf5nkzYkYydmBpPktC6f73AoC6JnQZfYK7YRMs3s7NMTEQpXfaRsW32KQzzLuSA",
  "key13": "5ZTxohk1nn1FMs2MppzGg9tfah2kpHtHnMCqv3zt1FsSCbqYrXr69HNgBiBvu4NCnZRKo8MbNCxamNc9g28uFKwv",
  "key14": "xC4XKdppAEGkR9R26dh7quLYKtJ9WRaFnTEf5jFutwy9XZXjyHyzK6pCcByqRxAo38tZQnj8rnENzSJaiegei1T",
  "key15": "5n1LotBm1wfznH6n4kpruuCfD5W3aoYXRtmaoRYbYnCUShd6AzSMnnhNLgvQsdkP1zkokhHiDKrnscmpJEDrkYKH",
  "key16": "5n6D5z4g4zzL5ibFRM3ECwk2FGKHgKKuN7GQj49eyZDo6LPWkXeav1iMBAWN1LD8jyhWEHdKtFWRhTKfJFuYoi4E",
  "key17": "3BnVVPNyKoJZLdcVKPpE15c3c2jF6FWBdetMuiuvNbzDFSX78quwbyDk3zqEEMwyQuNs1H6bbjctRra8ve4AzLF8",
  "key18": "3g2PNcM1QqV4mwhZc6EVS7sJSJBBcPA7ZdGv3oLVewNQLf8aqJRkEjxF2NSWrEk3xu8Mzn7f8WxgUTeDXLfYEJxK",
  "key19": "7yri6nxJYYzgqVsVHPJy8nHBtZKUMgkmxLedT1heCzYKU1LCzSMKu47gmWdZewBANK4M1dnd6AjuzmdyAp6Kc91",
  "key20": "38WG1Tp77CEPQvQzC1xR9TkFeUNzd5CBWKkeCNpMMdo8PFiHToehfwGDRfj5B8jAqcx4624E3uQPXRGpXQ1Eejco",
  "key21": "2VkYYf6KVDgzvxGQgNHdiQr22hEE9Z2SZ3vpByBZTQDxNk3pTZGTMLT8f77NuaPqJTtmjYyX9hpt99VejM5DaXtB",
  "key22": "3DQ5eWmJecryQCggYXuWQEptYUxj7byxCQqQhe9QtsnHRXsG62C1GNSxCtwh8w3Sm4fFjozwE7B21cBrYHQuzWRx",
  "key23": "23x222AoYxdFUtwfWxfqBnGmh25KahUxzMXJAv769iwX2ZNbSepwKYct4YnziQ3fPLv9ZyV9gtzRRDkPtxYAUZ7y",
  "key24": "4L2jMv7qqiF2q2c3JqszMJ4HNBLEyCeQcJmTt7bCqnVQosJ2QNtuHxKMSnsKVazwZocoGWfoMNw53jsjiDyjEQTC",
  "key25": "srZBB6xUaVxdzPfLmSx1oSd3gBSUx7H6LmUga4zJzswtfJCaJYjx1nbVMCGHRbircpdHXyyxK1UAxMjCcQkLYxh",
  "key26": "5rCgmGz1AW1UJG9CupY11Jg3E4iKp5xwZ25EpSm1ouWp82hoYUDP5A3mearTbbu9uypVSEkpiHqAtayh9abVxguh",
  "key27": "537nD6gsSzWHuUQRANqWB4EnKBmcjsVLXaQkD5HE2xXBKq78h1juNa48QyzSmqf722dT6T9BMpr1cchJMc6hMZh3",
  "key28": "4Ku3jC1RgVgLgbdcJDWKA5spZ9qocrQj1YpjFdAzbMMv44k8uj1yUnJb4URkcPkkMHwYKQTKB1zdDDbMZguK2tM6",
  "key29": "5A1mAQ8bfvAhpZsrPKCUjermrkgF7ex6AQwLN7wvUChexofuhBHMVoKmBMzqpLWuzmU5iFgoTa8CSUBkpz38ica5",
  "key30": "41NCnYGJEGDeGaoQTxut4ssLsQAkxDaiz3qpvhnqEdbya2aVicKSq2CHTzUZqyCbkuQ4jvF2L8BixWrRo9LXXHUf",
  "key31": "5TcRQbWsjaLDa1hpRgaj1bwWKhvyCA536QQQVUzvzYMaVcx6swafyC6QrGp2bXtKAfoD3cQHMm5PDcs6dH5wKtnn",
  "key32": "63dDgfn9FqA9jjpkKQz9BVPwQ6JFeCY3nqpFHr6KwYj4XB11VaL4BLiEaEuU7yis91nNwGRhRbWXm9orAYo85EjU",
  "key33": "3ZzriszEJvhWz2YS3szZsTWi1cXHjfiF1qwxTUA3MTPMzYVpq5RfbyFntCL2aLKrTUw9Gmnh2vYt2JmsL7NCLFhh",
  "key34": "5axRwLz7hPCFQkthZE1ZRLvanrBFAv8mPGPLcu5dyqNyNGdignFzqHcbzgoYT18ZCXQ5npt5TLbbiQRM5S6pcTV8",
  "key35": "3nxHp9qbuGBFVCADM2FtDfvYx1AAodGGc3zdGWSzgbNTYhMuQ84JJi9ST5aumCzmRYXqxbaWZYW3gHwvtF4Arq7X",
  "key36": "3z3LHW1U61tuY9DeFakkHqJF1Vgyo4X36anV2QYRSfJPvvFxFgVawWGtQHBRH2nmk9cJcwkLN3HBvABeBzzUS3i9",
  "key37": "4n831wWLeBgjSCMSyW6321u26S1fV4QNHdyeb5jUjcE7mpMzE2fxhVuXdQUXU7CaU4MGYYdsVQrmyfPWbcuxFUrz",
  "key38": "2n94ofHaUnDTkDMvJndLGH4jv3fifMfDtYSFFTvdK9gjwSfPUPGToDwyT7ivax9RSfsJcyq7Mw576ckZRbgSDzgG",
  "key39": "4c1JQVDVGXs18f5hHVvNLbcEjBD1xC3kAvQpZ4RUqCv6dLuwpBJ7p71wsj5FupeXv8MW2L8pWVf2hPeb8RvVAhUt"
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
