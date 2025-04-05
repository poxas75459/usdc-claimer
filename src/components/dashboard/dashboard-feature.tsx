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
    "5LNmCsBEmdt6spWimB3xgu8FTSQaxRX1RqaFwXFyikBBSsprMAUEfW1SoEyEKSVpuprD9tkwN3tyijxweySPCTiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pLwGKZu2P6aP11AdthA5xjSZeouHyThGWkUdbMbhDWgZn9chMmGGN2Hf4eCjyW7mdcaHtVs6D9gZFtTgkxgimzb",
  "key1": "5uqhGzuXp8Za4UbD7J8Xc5zUrvFqbvGmWNtGJmvD2c2r5eg5F5X22NvQL2rB5xY54AmafZeQ7aNrZVcET5XT8npS",
  "key2": "5JcnCBpF8fN6a5zAjteDgASknbaBXQr91JBQE71pn7hRm4aPuZtm6KDs5ehdTwQqn7e7a4seGCbBN7J1dibu1c3J",
  "key3": "2f3ffJvToMvYgB8sneagoKQeLbEoUo9Yg1xV3MwWJnZfmTcG33N8LctGXN1T1RExSvAD4ZZi7cRS7Pe7cCjNUpPM",
  "key4": "2nt6TGAnvyicaPZsMG18VWWkgKuxMwadpufMvwqJ9HF1P67CGTJg1UqwfsnuvDaVkhPfzQ3cqGETtgVHEB3u4qkB",
  "key5": "5NqapBxUcAfWtbP6GqPyWDfr9Sn3aCVDYTaND87LXd5C6WgMUy2X8k4W9PnezbHheaYdLFE9sXBXvGAXjpUnKVbh",
  "key6": "2xnkSirzUEMAKT6FG6yUbBPf6EzLHsAd8gK64hUkduaKJuA2HL8RE6yu17LsHcUHPj4NnpiJt4CKUvst4c2nUhBf",
  "key7": "48Mf7EdhKPVcryJZt4t45L9q264GaPZAzk5fDYZhF3N4CbDk5LwP5pPt33W6QY1XjDFuv3kCnwWoZQ131JXGWWFy",
  "key8": "2hU3Ep7nGKDfwXwPWhTz36BxaT2R955FHvZV5wF9xPerqpHT3LKeauXWGpSLvnsYqdNwAT5ZawkKAtueMoJ8GgQL",
  "key9": "4uwzugmj9cXsSfaLnzxyWbNH3VC6yQP8SBUh8ManyLTKE7vBCA1QYTLFCDNrQXqf34vt9d59YeCsz1A4qbLew7Ud",
  "key10": "2GC1FACgZvMTXN7gYJjwQRAnEvcEka8NZcpTUZ1nogRU1TXJdfKjycQzLcrBeGfTug8rCgZEJcS9CmfTxxaUSkA7",
  "key11": "5EAGX9eai5Pj64SoTzXqwZvDnyb4QVjGiqzpgh6DtMaQz5aigzTpgayZrisdTAZgJ34BAVHwE56qL3cQFywRNTnX",
  "key12": "53bSnVns6bH2tjg3ABb4seh64FKdcptC9FDBhTifA6bM7VuSjGSoHBUzGjtXw19szT8EY2NNjjuGb6GuhaoXoZ5X",
  "key13": "2WwatjMYMrCVNFRy371K5ae7aJyrzejAUDEcBf2dFSkm5FpaiKAFY6zhKP4tb741oEe4CrduxSu4ksLWpX7Zw3SG",
  "key14": "42ciu9CVp9Rx4HKSg3wx2dnUa6rGsuFPjSiSrVQFwtvc29aZPBAJsd7EbzpDzDSaFHVqsmvrdLNf3JfkRcGJ6R8P",
  "key15": "4g981RH86KdijGZAuaYQNf5TSKhTFoyRb3mx4j6nqUiKQSZkeLNrD9B1RQBAfPmh8v257UnziZeFTG5DZuKv1FEA",
  "key16": "sqknYXW5M48hMxTbxWrJNpE95qczH2ogbb9jaLH9WcbPSKDat7fSHxoeF48uLjDvFxJThjezdJabNqrXNpvaHdv",
  "key17": "VDozNQknmyFZwvCxEHhvELSrpH6fuibibcnhTUwhPTii5apieDuP6K4W4cRd83kWHv8yjMDpkUTwwYUXAq7MeRP",
  "key18": "3w6HLWbCjFs6mijSMBP22hdbJKGY2LVFQDWs59kWA5qLiTeKD436cGpmUoQLrw7wyyo9ctnxQZvzjAJYyWH5JBMD",
  "key19": "5kaTpjC5Dv6zuHsuERiJ1SjszEqjfmFgiEUba84TXKmK5Jm19oDgZMa9hKLDCkGqQdd1nsZmmHypgYFvERNYHJa5",
  "key20": "4CsYu5zekNtcUeTXDAiaENMMHfkc1F5pydehoXVFskezrPT3XdXzS45vtK1KyDuHoHrqWFdAKrs7gh2dVivZQRYd",
  "key21": "3CgvMRr1bypFTzhuvBo8Hbp5HwssnkeKiX5LEGb7CthzG8TNo8MgAvenxTPY6LEDKNJdzsXN5kWyBUeND74fuBvL",
  "key22": "5f2crthFMQwsVFsAm4wKYzWB54jFfSn586bNviM21c1MXQfJkQ9zJMzhekQbHQv4cba3nqdE8LaTcuinVTQcsahn",
  "key23": "2Vq9qLXuK1aJcXyXUfGGYpPKig5uCSMeShvVU5KuoWn1Z8DwyHrvkVFW36EbDS6i6j2fYr4EAcAAu9J3JXaMFUVv",
  "key24": "5TvdCVfg4dgSA7B5u7dZNL2ygG6KDNGkk5Qnwry2c6mDiAuuBwjXFBGwGuqiEN9Qq2e7b6obUskYD8WKXNa5J9iu",
  "key25": "ATyApx1d9c72Bz1bL7eh3XsLLFcrwnd4R4jpqWkcxCys4gPVAUxehnSb2BKZi291U9AHWUQ1Sw8r5KFwQzZLYcQ",
  "key26": "3Y7488u69CQTBpyiGRWcT1HXFfQ4XcSgUk6dSe51gbaF9MqXJEAL5RW31MyR3asvzwcfndmTKjN5LisuRrLqGoWm",
  "key27": "315f2ag6Wn3TWWB3w1HZqp8redFNDbNFvDVPjLpgS9qsVkUZghLbmPccZHTJPp3m5QBHqkKbY42fRM4mwx25VypV",
  "key28": "47ncDXnXYDk415TNbqZurvX3u8oJBo3jdet4HedNE1fHmuKPczYdJr9yDwMS8MstSt3WcZo2kpHgYiqcjU6EvjNn",
  "key29": "PquzDUXdnBTw7EkCKNXyJZJocfmJYLAQ4CssagZCk5XJJGUcxjhwZtYabfJF9ZN5NpXen6t2kjNMDVWFDrmVeCd",
  "key30": "3wfJn5QkBUuvNr9ypFHKzrGpSBDp4bTKwaNvVUe22L2dUFe5P2EgXpbTEfvEfFsR6WdCqF19wcfu88iqJJTdPwnW",
  "key31": "3yUuLYoUsFRV74yJHTHn3GQNcY3u4fXKG9ZxjxGUzbMgBM3whHktfYP8gwRh3w6JwqvNGf9oi1JQkehHkLQVhRVj",
  "key32": "46954mcfQY3XhwaU9Vn6wmsVSFiU5HwXox9ufPyrW66hnq1mJMJMciveiDhi3nN1tth5FRauxdrhGonvURXasYY7",
  "key33": "3BHSogoQE6WYGqDeEQcHHxuvPxNhik2EEFfkLvfXSkPWPr7sdELVfRpbKuqdu2meyqxJXca9X2tTWwkqGvcyeTNS",
  "key34": "5YgSzRvHWaP8wmh4QbfJJhy3hscwK64BcYL3EhxW8hu1NcW7JcnCNq9X2HgsUJwP2ckeNjyxYhzbWHv4tJqiv9ye",
  "key35": "3A5MbRUu9MrntskWXsZb9bomf45rDp1uCPFLTLGGCttF9X7QfmambFPZ68HYNTfqs5FUD8wbbtmYU3VSoUURMM5E",
  "key36": "2bK7qv1WvapDNnnPi98Eg3v3SJaGEpf5BGKvqwNgKWrnfL2zNV3uKxCUj3fMVrAs9MTti6S29Rke2RWa8UwGkHEr",
  "key37": "4UVZeUto4SexSYTDtDaKJ5ySXPXz5TiBX5df7dooq3AfSQg1tgTNeksrTsbfyKx4hZn1tjZpsuAfCzD7ugP7cndG",
  "key38": "5CUi8r4vbqXgZJntNAhg7mXUTKNg5Mos9D3zzAv23ycS2TUFCtsHLDcjiCHbbtWkfPKZwh1bTLdkKR4t1SPUGb57",
  "key39": "3CVvZGRD3nWa1xbNBfCZ3vK7bPDvkA4gZCy2qsStzCr1fFiEjWu5AEtnTqagiaDHoytoPQiffq8SxBjhkpbgCP63",
  "key40": "44pbnL1vquSk2RtLWV8Eouee5xgs2MwtAH3gKiENdqGD81FqHqoqdaNVXEC5v8ZYpPHvEKHausU7jFvyDrmUxZoF",
  "key41": "3L7eLhbLLxT9S31ZDcRqKHTnYiF4s7f9cqZAP6dJgY9zFPguDZncckaMahBbJoVQKKjy4ccwumEqikhyQ7NDiAsc",
  "key42": "4888xtts16YwfB9Z3iAniXw98FbbzfXjk9qfAq8q4HGivigVKZBWtETsihvW4acpTRTg6duMgA4WUq4AYDm2iGa6",
  "key43": "5ktbL4dctpA78Agrp8ddVYxMRLoL6co3ofWRvQtmjpnWpw5H6mcxE5NwgLpRoeVBiQ7dvJf6F7VxD1d4nm1bSDmZ",
  "key44": "i4oTKavxeTbuM3AB8TZre98mgWqGmUFG9iKuqciePW57WX7zoiaMvwWjgfKvtsdsWU2aJP2PLQAeXAQbwpeC5wx",
  "key45": "42REye81Di8bTseBWWw3Me4Nj6o6dJmy3MmAvk2K1fJE137jnb58t8FijaLa7KnxZXNbRrmnZwQoDkAr6LEWwynz",
  "key46": "2xJ2y1QgqeN57t8QJdwTdjp471B6mwY3J1MxKKvpuWcoeEqmCfhJJZnd2PHmASnFH8Jp2UxumZJDr1fxqAUtxKoZ",
  "key47": "jXL2bDBXqz6VqqBZY8ppkjdY9QHwh5MTZ2mnP9fQwmHHw75aTffBhiRRwNWj6xLXwCz9Aj3tTBkDg92qAF3Qqn5"
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
