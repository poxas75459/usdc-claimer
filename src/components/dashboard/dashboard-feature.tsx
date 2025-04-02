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
    "AZ63gqpM3VhuZdebueenwQjym3gWeKBTTEw5d8Uumm2WDR8zgQdAGPMguciRLQ2ngn3DmgxyT6CR1RcrQFsuNpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N511nvYZqwYjqRpmkvXjWs6hobcg5BtxjNqCZxPndCcySuBPux5vpjnqwjqjc4iT29AjcmtGCQCAEiaBuBLf2rx",
  "key1": "3DrwFm28Y3b4AUMgUA5eaPFdFmGmgy4qbKsQkFfgMjwE7DTPofthgZ2MVMxT12wR2M6p7hsqzwiHEvLst5U5aQa3",
  "key2": "4yokL5fDpijPPKrgK1uxGMbrhQiP1ix6Q4HGsK8dpfvHg8aSm1aVzLofyijSukogTEjP6t8mhnk4oYoDAsvFVfnr",
  "key3": "36731bhTMg7wTYeJVXKKfgbwwAn1r9RgiwpjqihXx8CkCgzBZf25sqkJfQ5T3EVwqG8wqquC5wtnjSx94vFoPgDe",
  "key4": "3jsU7FdxwuLxMQczFfsRUrRC8FhdyxqSZHqrJugd8sSofNbxvftiXGC6SiPMFzcA5SYWVrVLZahSZgXuuTnAfeJJ",
  "key5": "4RV6fD9be5VV9y3xzMfwgFJq6X7VqxCSomKJVDbpDs4essnYnxjgaSRav3mfgqKCQ99r1TqxmwpXrenR7TG1sb89",
  "key6": "57rN2Q9MJWAaRoqMHGwVNybQsgm5GTK5xtY9nQdH54UmYsGy96pAWaUDpXBE7VUeFhicNxtxqMZ8eEZqf44kMYUB",
  "key7": "4imYmGFoApSpgYFg2CHHkFCMhzzunFxKN1Xs9nALvYMfKPXkCLNbqLkPE5k1z6LL9646Uh4ymKLM9Jm4QmPW5UQa",
  "key8": "4fqhyd2w4qyhSCg9oSFYnoFoViffj6nCyjcLoAd4aHup5VxbAcF1TNWVazWr1wHApSi9a3g7aXm2oV2TwQsvqpZ6",
  "key9": "2A56VRH69QMgRNA4B6nLQBraqMCRQwGWTUoSx8ghkLcYktJxeZn5riVX3wmYHuP7DcAMMhmTrKtHtcfuA7JMLWUL",
  "key10": "2zS5taKvUHRUkqSKmaZTE8bND5uNK4UMKxnkhwLMViBXE4nRA83zgbLM23E6ZkZpt6xC8HeGJSwbcJB7KhYRSnKP",
  "key11": "29YFKkiUo5iXqXqcVqiXs9FVvf8TmVZSSpiooEr1VmrjXnwsjjxRmoUq5UQ2UXhPAnn5SsdWBUvr76vu7E43Zv2D",
  "key12": "XNmyWkTKK4ZyZ7CnbKwwYLpN1z7JduUqK2aGLhhZg4pCAdTpcCSCqCXZrTDTScvzHXqGoEH7ZXvsajYSSXo1cgG",
  "key13": "AQ6VtQBAsyY4qXfVcKEGwuqFUQVpEbAZcqftxCkB1g3iNzNCmpgw6dALZGd2tSuMHUxLGztfxGASp2XaCGdnWJa",
  "key14": "3NCuC1FsyLBEucDgFofPpah9CfpviDaGQ4xKj1xfF5DNd5VuMqgSBZEKMsCm913JSuRayac3QRfe5opBKv5CEcwz",
  "key15": "4BY2CkVA4X2DjzCyZ6TXrfWHrkX79zR9duYY5c8AxNjW1Pcy5vtesX17cBt2DZcTT3kmKwVn7GKdpeizssMnJLRs",
  "key16": "5aH2p5RvEhEPxVvVX81nRPRaDFg5u1xUcuTBCbK8jvcXUNNWoihgznEc6Y5Dse1AVXvCEFKJvibKbnFAod1tck6j",
  "key17": "1rardhdq2P8LwfcVEKegrHvBgn6NNskwobq4K6CC1bibS3e7k9haP1yW4sL5YSS6U94Mg8SJqnbdU9brjNgeYPA",
  "key18": "vv12yvrvLjA1rsE3D8m86H2EYq5HKHkCdkV8wre3xPZwzLyA9G3ZWBgd4NcgSsy1ZCjnYJjEfncXYPMvpiKWirY",
  "key19": "aiJf5zAdEcwuiSAJpawH2gn8V6ze4bZckSSo8SH8Tw6dVhHmbgERuPBGazvHkAZd4MqzTSaa8tXyKznKu8KVb3H",
  "key20": "4bjjczRZJ5gdgVADyFG6XT1LudkzcTT7fLKZqv1oY7WbuKLoq9T5goSPBt2GhqkR8yQdD1ueRFsoLYoysemXK34i",
  "key21": "5ZFv2R3ih9zs2KvAxr41nEEJWcAXAdTtXHv1g6eJ9jG4X998tLm7hAippPAQWXR5F3n34vw5DdkcAmSyoHvXgJLF",
  "key22": "fkv7RhmTbSNZrxwi62Z8HZcAHjg2aoF3LCAXyFbCBLnXf35o49kVJLFgL2mmNwoERfCZvXJevhxF1J9hHQ9Tw6n",
  "key23": "B3wDcsaNX2q1nQ9nGyzossXHXrrhAujXTpmiS9BM7gWQ8G9jWSn6oFSQsStMY17pE2tFP5z1HZuCqZTs99pqyTJ",
  "key24": "5ihiMcsboqMr2ngKNZj4h5P9Jq12xZMkPsyyPdLmULnHcakrcApt9PeVNVPommbngN3HPQdW2PBrhAdavF4fX83u",
  "key25": "379PsRWjRDuoNnMhpWpW2xVbeTew1EenezJAdpmQbZbqGwu6bNPUXFCurr8FDAU2a3nLQhUDgPku1VnJfhLjA8VF",
  "key26": "3vgEHhyoM6vsoAXSxpbHzypuJVMEr8wckP83N6VQurJZttHsg4zQRTwmKiav3i5yjjY1iyiu1WWTnFJUH4or7ZEb",
  "key27": "HBq2iPtxssh5e1cHsy8NCnYjGWw2QUWoYWJTbSAzx7iHjbwsbKFX3GfQpB6TdkEaUScjvZMLsUb1vdhbnTviaRn",
  "key28": "4s6ZiSgKtVnYDPhfMpxGdXN1HtzrEKqbfCW3CEuM2iiph7V8V7fUUPHAG2mAbbVWfoNxQ5NYKrLPerEAMKrWJ8Dg",
  "key29": "34oL3RvUt5y55qd6k9zWy69TyH4Aoa4gb8Gnxb68DKp5Zd7xT7sVJiCH1dUgb1AsxGeB6suC4Rp1xaGkKQQMNoG1",
  "key30": "4sFdh46x5MMyhCQGPtAdPBDVSDxaF4S9MrCJ5iYNczfSEYaZmWePmVBUca3rGeceKsj4TdcSo2b6geQS2vSDax9k",
  "key31": "2QBbYZzEktVxfjC4udBt98bhsgUdgD74HLSTX72Szcz2ahfjNZtigF52qquQMgoi9B13msUEm8y2TpBjR8m31G6K",
  "key32": "2eYQdqr72hHdkuzYuKhpabU4546fggK6SbMrG3ewoG8fHoh7SUEaFEAZCtAYaS5DHVduEhiiiDEkBBP2z6FnLQau",
  "key33": "4q9z7onEhfU9YzoiVcLwWcfaK4NhLDQxXKGJFLZJ9E3WVYAaDm4UJvt2M6BQvq5uZ1h4Azy57imgg8dDpZswSLdu",
  "key34": "4czZd2d2pjmrBWYBQPwC4JWwqUMHMiJTuYa2g32L5hjG6okTAhAHLS88cqN4R6dcphRFVndrAWKMv1LGnJTrAL5L",
  "key35": "fz54CDzNLpPQzEZsmRRyLxvJQZFhugAq1qGWS5zf25qz8BJGYa5Tdq2GV93u9hfJDQCP7F7qAQkSjCp39nvGejA",
  "key36": "91UuXh1JarZu9ih2CvsEWtJZ4TwfYVMLQZ9Vw7aMs1qvqepizKxu6FTcAgWcXsRccGTcEhTeePK5zmtcYwkoizv",
  "key37": "3rBMeKQBA43dc9iQAUKeUsZtAdDndrtWnsu2rtGLSfsHW1nY9iVqmfh9S8XE3aYkPVRfFSK57Qmn5W3yzMYq48T8",
  "key38": "4wbjEAGDs8jHKtmF8i4e9c2LPp5xZVVtMcqVjAS7nBYbknv6XbNRaxEG4UJCR5kgs3qi6SpZdx45iJKoj9fkH8HH",
  "key39": "5gb1SfAX7ZvY2rPESAAzF7ioRzp83ASoTKoyWwZCSyNiazkJvYYZ2aSbUMgTxcypjesTp3Cv198t6rwqzKWTR7fe"
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
