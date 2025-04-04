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
    "2L9UyqBNPGDC4fbyJDvqMDTQ6mJVuRaicPktssMvRwropvz3oPniHrPUMYpxswrChmPPWRt222xge1qk3nYfzsXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gnTNgU46y8zW5faUwwFzkpWfg85Zafs2yErEqW8oEVLtgr6ut2fmmW2gJW4MAG54kt9DdWsjA8gi1GrkwKSCKU9",
  "key1": "HF1CeCWQSYieMUdw2aPPXvr6bsWUvXjQNGRRLrs1Km6SdVyNpc56DZDEBDqe7jksAtjMHiL27KoJ9bNPhk1N5h3",
  "key2": "5xd1evWKYJNUQiJydCHVVjjv1N9EcVEQvT3akkf4mpu55tF5DtFZkCAPVDHaTK1kDb8RBaiWGbYZy2GrNQ688LKc",
  "key3": "62Q7r2ZJujRRCkbR2W5i5MVQ7UvGnDNuDUEt2wC2xExDW3bMvA4mrtqwDEcYUUAkeWFTcvb7akNY6DPvXgmMgRRy",
  "key4": "3gYJm9oRojwdppnZ97gmnM7A3fKhjbb8wswRaVU1U6vPAfHTYH5WyMhSaxfrwaZ3ecqSGjiMu2TGrTjwEizTivWQ",
  "key5": "5urEmxSmaLjKRiyYpTDiwnGCh4yJrTnqN3hAmWnjPsJNiA2GV4DGy4XFrzkoTDKHxnUhA76s2qnaiyERexj8ELnz",
  "key6": "2htjBdH3yUG8B3U973vsYGVtW256TGbvUT3FP8gAttWz5rYTEckds74N8qtQe8J7GbFTEPTvzahFkegKUpQRndkY",
  "key7": "2bXn8JPtDyNvuZuzeUEhqugNGqZXKbyMkayX3VYxJ9QJVG53wxamfvnfWGoxdBGUXVBKe9m7g3BvcEApEXYRugvr",
  "key8": "3uc3wGmjHHsvJWzCYRyuHRyYzphgk2xaSwxtzzjnh3fBV2keEuEDTjKG4ksECeNY6sd29Astx3LgjFivfr2vpV3x",
  "key9": "2tC9HJ1gaxUTP5RPnjAmFmYYJVtduGi1pLz2k2mmnMvrq99wK6UyFQfiXiCMQCobebaPKegT57msKq6UdAjiDriv",
  "key10": "2KSJi1XykRe9EzwDKTTZt3fjmeVA42wVdmvi7rpNon21i1y7NUMSL8HremTo1GgcvqLHG8vPPB4wKvqJxWUUazJV",
  "key11": "52QrszaX9i958K8vUdj3PHtwgwJL9YCQXWKRK17Tq8xSWcRVQrkKe1xEhTBtQwtYtWGkacFEFvvPBcrpG6qwkSb6",
  "key12": "3t5gbJL5LYtMTmYDJYWEQjiojGE4F9jid3tyRQtRMkSYp3TsKwyRErkd5xwPd75YTfdN51BvShr5UAE1jCiephWo",
  "key13": "4tJzqo8bhFf5cXMCUQjPEM89WF8bHYbe921dUaL1PT6A1hmUnmzZnTPVBpnLQJPRmBDJGaK6RYdYXpxR1k4YSuQR",
  "key14": "5cW4VRnxjRegVCAfakyihVJvZJG5wMAsCBW15iaV62Wnksef42SR274YpXZS3kvizu7CVB3DFGd5gEZprDAAJdbQ",
  "key15": "4WvWNTsVPq9x2RYMn18LsntALQ6ci87Kt8cAHjZqTNmci5fYuTTtu5D3ovaBEpnqU6MtJCkUZDzoNKyFbhkofUc5",
  "key16": "4bHvEtvdWGEjdLqtbUPLNBa5TKCZqbCjoJg6AEcsua32RkjA18QJnYmFxn51DKvGeEb8FE6BmzpLHE2CNTQuxWBH",
  "key17": "2PJpZAWBejhUkLC1HR96vNsQ9bMaX4feoc4ZBC1wCQHsaegg89v3NQW7gb2x3AN7UiFPbB9KL689YHDzLP2MKYJd",
  "key18": "4yL7RBihG5U8H6bR9Vqv529JowCXekcK963F3bAbeXAgV7zKuRxkAwFF5T828gCt33YporniKR2zgKru7jnqJMcE",
  "key19": "61NuttYX2MtnFhKuFGNWFJpu3zC2bMBDXH9HtcXnajUXaKcnvVWqy8JHAUgtjeBoim58ohHg8pXfLoG87dff3Dq6",
  "key20": "sFmhCgwP5W1pySWfAsBNACQ2WGpRroqJArXGvYMDpD3DrqKBPJrAxKPXMXZKiM2UoGAuEkxcmAAN3oJA45LkPoE",
  "key21": "4n5YDjgCQW7ekuXga5SSD2A16sdH4uhujfFFuvYAm4fqTXe2pqNC9yKXMCvbiFHU5zTD2dEM7iqzayRind13kEZc",
  "key22": "3aUHnzdRoimkgCPqoMo9pZNffHmJk3AYfEw8mB142YFv5EzjmEQwogNnMcpuwVHi3ig3NaotXZSE6ipkVUPmPWnn",
  "key23": "2aVc9ix8n9MAiZPoYK8bRa2ecxk7wNrgbXgBEjgHsFSPeX3HHvCMXEAq3puSvZGFET1vJnfYbvTjrZgYFNYBMqMa",
  "key24": "4ivsKenL1dRumDVzRZ2jgxqXzgdMPNkeRiZ1BeFe3JWUCen2AdXTiPbzCDLdLxHZ4ERd7gT3jaNNgeCWQ5uCrSqG",
  "key25": "ZmhbP6CTZsf7HyGWvy1Fow1SArkAYcmxEdt71PGcm6yG22JY1hUefhCBE9JDnHwevrY6zUfK43K8fnjPaFvQN88",
  "key26": "5uLj2n7FPnQMZ6v7BgNNZuF6hHCeHxxcg9wUv53TRZhj8mrkCMTESkCHbjDuZpZk55y4uJCPLwMihTdvmRhkauBZ",
  "key27": "4VVSAZqY9EYQ8ePeZn8hZiFnwpcaEvZUTrEmdM7L96UpweYx1QfKFviGst2TYcxdWFVTJo7qQwVBVAynMD8X2RvR",
  "key28": "3EgbcRAGwgRHVxWcT5g58nuKLxHp9ua3CybPAeyrrxvLrEqLiBVVFWikotuix5UGcSP3VDraUjhmZzDsPqR92S1R",
  "key29": "5UXvZ4W1vDhC44LjT5L2MTCz3mrus4FmtY9ACmtrieKc8v1Zio53z9ZUBnhJBsByCpd2XMLqobTP3Z53ztR5bwc",
  "key30": "4WGedeR3WxJ42Xm1RgNEzTDAHRLy2NPfoexj84Yji7tmsudaFQXUFzDGL9r7p6twpPnwPuHeWiuGHty7QfKaLLqX",
  "key31": "64qG34gGtPcAiMqxFGNUH9ZTJu9EP72onPAG36K8sqQnekGpxYG993jqfFizcUeTVFpSxjUuYizjcEq8NqnVTusK",
  "key32": "4pCTzDTaGN3bSF7ticTpKVztfow88WSXKFmqDDgvzTsqAbaWMwGnwbc6QfDJtxsHiu1YLYYg3zzDFGa1hggwsqpA",
  "key33": "4YuqHCocdYiKLmTg9bZk5qQC3bjntt1rKxmDxMCMnVdYGHuTGJpiFVA8wGWgSNfL9XEDim8zp757vDz33gMwweUg",
  "key34": "61TP3sZnfBBzTZHqtAerM77iMMWCsoQgDUMnidacSbZmcVik2WLqmtNNnJkHdj25dWVJoKSTzhoWPY9qfZnysYAm",
  "key35": "2LicKm8WrYzYRLJYwbE6z5hKuwS2m8pr3ZxyuhjWea8Tp1Y1yH2nqysbLwgHaVqcyHevnNmo1mT2Cuo95BSTFW8r",
  "key36": "5JUvxLLokw2iP5U4KjC6TavxmeR63Bcrhtb3VSre4Dct3iZ76D1nYjaoCJ4othygxU3UzWoKPkyeWtmHU7sLgfRd",
  "key37": "5L4QQQwApQdEENCbFxumUD43wcXsFatWqPdZ6MyCvaKfTxu4KiCr8Pqkr3PM4cBTJBiFfLB5oBg98KH4jDaMFG5B",
  "key38": "4Xqejz7mQXVcjs1aF9SyTVqNG6ADq1pymCGG5iFjT5f5SS8RvjNHhttEKMDWtZDQV1XpQ4xcMyAipNb31SJZAVqu",
  "key39": "669fPLh7JA33Sq2NyfnAUKthicEUNCDXSK2N32C1kuQWMA4CD2BKddBegBKLFNdvYmon5u7U2gq1MWKXyQfWJJxF",
  "key40": "65JVuz9NaF81rrJpVgSMesLqJULGo1TDDoH3SJ6hRU9d5LdVk9eruauieApTTciGpd61c6rBD4zbBZ76EvF7K9bX",
  "key41": "23yz71sh5B6rsHciaAJ1vcxZRXZDP86ysd36cEZYmsAwpcBpfkr5Q91P4yLNaYW3dxHGLgjHfNtX3NAcjzsbemAK",
  "key42": "4VBVcUZSY1hFE3QboX1hJw8XY2qq2CB2mQ9UHQ15jKNzev9LPXGEVTwRRN78WXM2Ufu8psENcrZU32AVReMVHatG",
  "key43": "4kRjRTip1SdfNVGbw86FPELsZyG7rY2P25mQPmd7kjKwz2LZbTWYRPArZ7ACn2znBfD1YJFQkrbZEo2KnSVzCzXZ",
  "key44": "5LVyrkiRhDNj2uzmioXQeezQarQEaiXTvVJqmDtFK77X1tQejJ4TU93oZtvU56wFVSDkHzvge4v7fa2ef8WYnVUQ",
  "key45": "3Y9faM9FMZt7ereG2iL72rXA58p4G9w7jxaZuhdFvUK5WYfPNT4hqz4pDwgnwmzNdzR8u1Dj6Eg7W1nN1rcnnbqS",
  "key46": "wTPW2RAcR63i5ReKjgbyG4Nw4ixBdEDBwwz6E9CVaZdK8Y5B7BMojr9eWmWfSUQkHZeVSNFTrxPKmJYkEJtwvY8"
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
