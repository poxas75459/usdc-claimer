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
    "2YvMpb7L1SnNfTN5T1zGQ3N1XF9nGd4cV7AmBi6jZcvtny1TqbQgq33dd8iK5zQAT2oXh8h1Z51W2dLEZoSJ9MJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RDxiNEGqUAh3SbBTHDpsLDJBrdgyTSN2snqeKD4PPTcLXc93AMz6xdya3VW2DuLK5HBztc7HmrhuZNpDopgPptP",
  "key1": "vaXBz4EJsYvn5PWDqTQr7JTe684WMTBDEXtj96Z9euKX4i4tmfomyvwAENAiQaxh3DKN4XP2kAjisLtMUjirazi",
  "key2": "4p5T8LyoUkWa9nWmVJjSB5Zkh5yFtArKxyMphmmjBWp8h772zqUaeyh1mhw45qGm9AsmnW5Hz8Bn8CJtoma9btQS",
  "key3": "44WuqJtpt6B71WZBjXWHowLaTvog9ft5BLDMFnvTmbHVTrVs3vP2P2qbnJ9Y2H7MLVMfbagzmoD4AaDFeRLQ7Rbb",
  "key4": "4BKPxsBqovwjVbzRQmhVDmeqgVmY1ReFBM5X13GusHjadPXPb3o1FYHsWJjMVt6FBg555icKQoSdZGd2PKhp8Zam",
  "key5": "4uxnfEXVP3bNCdXtDwxjLZyzt7gKEJ1qNm6t4YkcNNYgSCC5cp1WHkhLmh8nNYisfjEZQRqQbsMUbVdypZEU7gZh",
  "key6": "5AVR6tGaHZnctnNtYNgu561orfvBK2Zya1iHkNeTmEfBeDFJsMbhak7gin6davNRGLwycyvNZaUs9teiWmic7qbH",
  "key7": "3U3dfHw6budXFvADZcdjdgKy6sBtQ4iu1mB5i49FK8Q1GRsF5UvZxEo3f4xpMJDyvgMiRVVH7pC7EvFZC8pgYGAK",
  "key8": "mg8uiKceBPAdKQ9282aHQBwvBThuu7UR1edGzP7nvU7QGBWL3JF5q2wkXfCMJyCDx9zWinnDT4MUaZTSxjU4ZMz",
  "key9": "2hMF6EEGScLWKfWigp2AbkaAKAPamw8aUV6YhGRjeKvzqd5ebcztZcAFrqabBCsZCfAfGr2NCd7R6acLTkA3Jrsx",
  "key10": "3QwVNuiBt9guSJodvhdfzUPUYGGXD6vhNpB48nkpsR1vFxwFb3gJimjdkzH4TTf3vq32EkEQnLxHyaX3VpHEDUg",
  "key11": "2V6mutZcXc93jQpqfaEJAoXftQYD2fojUKFnEYcwi42FmNpBc7A4Pi5gYcZ8KvTJMMXvS11BFGdvHDnjjKgvwyNo",
  "key12": "4ULcTs8TXkZyGmBDvNVJfbGo5Fos4nZKjeiJcUb6Qysz9WMuZn1p6moxCQ51sWARsaTDADbrR7WFGtswdcDNNsuo",
  "key13": "3SNVTKCd5e3ovQ1fvUxxF2DZXY5kKDbXtHTQe26G4pceGxYWhyiR8JrTiSNA36CtBrGKMwJQZe8optpHcRKtx85Y",
  "key14": "4mAQ6ttYhLQhBfnVi2mWj3efBanNzD1Xr21d5DFdMd1V2KeVJHZh4PJ1d9TTgCZMsUjUHbvZLRYpSR2CB7VvNAEv",
  "key15": "4DNiU6K8waSVgEHqwwRXWbc1UeXB66dbqDuniQre4rMiVH6CgVAfHs9963z7JmEnjmP8paA5s5FndiBCEF3Umcrn",
  "key16": "3ZkFzMU4ueiZRzYdHhMP7uo64pqEBTTK2qoyVMzQhoSRiKmKtH8xVYbExEbZums8wacGRy3Ps6fFpmEZ2AkNG33G",
  "key17": "4LdGAtwtBkaGbdK13Frygzd8G8kywrGy4ejov2ypB8JePCGaQ7VbeCjb8GYL5pTJ5LjRXGGBt21YdREDzR5nnPsR",
  "key18": "37Xtj9wDXvsPkNaf4mbJyegrnNKVjx8xWGqssChfDzcANRLmRxXQhf13Y8b38n4JhLYWnnpjgg1k8LQhHUaELCeQ",
  "key19": "eD5dF9P8Cs3uWkPy9CAo3ihk4ugKUdHKxvcDhGEybke7HFm12fCt5BqmU23sh84UpRwSst9hWCZqd2y2DTkWVTk",
  "key20": "33ZkTZtMosomxfyccAfA5xDvSFjARDEwDQ86zbfTH5LziFVAABvxhnJWQ6MpdSMSWcA6FNgj3Xxb25upgXBkd8dr",
  "key21": "qnRhkcwoPCGvdntZYoYhmdXHMKT2KqbdCJTZb6dozihHLovcxwJ9iiSWZLmZEk3fL3Rbmce1FF7Rdzmb3mUSv21",
  "key22": "5A8XmarDSaGPDcPe8YAgqsQdRUJw98kXLx8b7zXG7HVpCMYjwWQBM4ZjQbqPMZxU9Tn3coY1rEDUe7kPdHghb5k6",
  "key23": "uoDbYWZDE8tvmBN94m1dBUxoAzJwJqBTorDiHT2PrWdcufC9jGCh4kFVx5XUvVYBRJt4CTerePmJV7WKvh72Ek6",
  "key24": "3qbt3sBWS6AmyrEDbsU6ZvtdtDxTCvUZQvEaF3Am57SHhFURrbjJV2yXRPEkReugMphWCzximfcgiaGrEzGbFdCh",
  "key25": "LiJJs9oYDww3yPnnjRaFQUsGBBoWFap9RVTUA61kJuZqf1KdZssA8ycCARCzVpGbDtG6EFspthoevzFNjb3aAU1",
  "key26": "63WUNBSkgLMcwbdvZXCoNHN8haWNdT44irzPoEcMsMabMcGYQoQuoYiwYWUCcUMdDQbvRYbUKgfAELf2R1YQTJHs",
  "key27": "2xKbU19WX5LR9sE2cLNG8JKGjTKyLpHojP8kLeBfADShpfuCM9GMKNwH5JGFUmvjrPV8mdKDBAwwsn3LvHMC3oSX",
  "key28": "q58aG8YacDt7b9HHWCS3ScUs1Ygk8BLTarc4i7SkLB8Ckk22Sy9Qiw1tYAo93BKDvULXhCbHu4Ti8nYGBgzP4UG",
  "key29": "38enW24L6sDKHSx6WVzgFqt1KrMpxizHgFXoZe1Jsuoeoak16mWXAsDXaAF2Gn6QmCsAaLg214cuEoLvQNASWRyg",
  "key30": "5yV8wKPswixgtWaw5QPbRutb7kG7HmP1KQdXtZtmx2QMjZiCi8nTyJAWXWb3aQRtfAZhL75dcoFAsiYvb6tNbLgp",
  "key31": "4J4xoaDcsGvMJcagJLpB1HhSDc8T19eqnMHz2t2GbNP3D2eydyqWCDpFk6bJrJ2erzeLrSmUeRhHB8z1GWXVowYM",
  "key32": "MGfZghv16ngrbY7sudp7ToW9Mt4E5Y6abfZ18VHEFrzSyqyJi698NcnpzKo1tH2maon7ZQaNVDXfXBDcDPUnwEc",
  "key33": "YRwNpXvXnw4piD3uybwkqmDPaqbji1VbqGZH1YVEpCy73DTo7dCtNEXQE3pS3mJ1dSW9J2NAehe22oKQF2VCN53",
  "key34": "3bmYfd8hcZFYw3ArggUja5SYT82VshtadPJ9m3BN95DXzDQNp9EA81Ah9yDjyLeMCiAeaycTbAu6byN4eh87ZuV5"
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
