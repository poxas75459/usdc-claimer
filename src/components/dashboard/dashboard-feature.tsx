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
    "4ZFAPu3Pf9naminT3Rg9CsAwysuCFkAsAyAAhXtYevkggEWfd4nv47M9NH1Ad5fFuxeyT2YzDy8kRqGwyXMG8VNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oeTaBdsie6KeH59yd7XBJsPqeRd7QrBQ76xjNeKU2bgBrw1iDTzBB1iGLEAab5svbc47JqJcwQEsLn1vDV8oayH",
  "key1": "vcN6Yqv5VajTXRsMRZteWtwMejfMD4dGX8uGGT5mL9LddjwhqNGNEiZMHvteBRzscY159AMmpwMcLztYoaCSBWd",
  "key2": "WzzH9vv4FeYTCR2mxLi19DNm8fb2QYzsQRWUzWmKisSZCkpPbtrAStzyBhcWMrxnb4EEtfbpF5teEvEGYybZvtV",
  "key3": "4aFrajWx2QkbgESNg3REdf8px5H29NETDuPVQxRetJydL3aYtHMFhx3cq6bDRWHXeHZyFvZ7HqxNhskuBpfswdKQ",
  "key4": "46kPEWv1WegDYULCs6H2Nsb4QoGqYj8k5yFypU3fR3mZmGSZJ2b6uGShZSzbVVR3Mh6ePAPhRyXLhgv2WBq59KTE",
  "key5": "dZHwN48etwHzVq4DbPq8JJDaiHwMrnrUHnFZNcZXbxgAuL5f4QMx84PjMCHRD1GDd4kSZnWFd52kwARMer11M9W",
  "key6": "65JXFSAgiz8zKcDPuWY4acZzae5uA1fdBucA42p5Npcv6wpNmFwDN83kNDRpQvt7CqprjNskTKCLf3TVWpJKRda8",
  "key7": "4j7NBC3XAWNNRcUQfNnQsVa6hs6X4SYBbyzBNhYnjq38JutcR9TPKoa144S5Tr9ARxLx38kVdDroPLYLWnKrCPHz",
  "key8": "2NuuJFGM5sTAm19faHBdSNUTUsSTvPhbW1Tw3Zo1p2JMrwZQK8sFzYsE6JGMR7sS9zUZ9e6PU2xvX9pQXABFsSKX",
  "key9": "24jvt6Tf9fua2GRJo3t2Boz5cY4njsHqjbW8o9CitYuZQ2Nuc2LCtNtZ6FmGp8HQjXcDhBXar4ZW9QTFmQxgaMTV",
  "key10": "5vJDjM9NhshbrwwpRZku3Rh1CD3ZKWe1ZFs61ZBf1prhJzjeoVN9W6heuL191zsKN68Rn7ki7cRWCQE4syqznwCV",
  "key11": "64pkeb6xuTsVr1GH1iCDQKsUf4kmRYVPJTWrX5WcSKwn7kTyyD3Bm32zurB7RgSnBA4RJo3uqXyJmDVTdJ2DqggG",
  "key12": "4v4ZiqPcy4nAYL9jujwtuHRfbrVYCfCgHkCkNdCXxxcjKvvw8pex7BG1GDCPGE6iRXi5xokf25615pQRqMGq4fTA",
  "key13": "3mkRi3DXeNKuazEH3teAYd7pk53zAAZtfPqndsXx7Fj8VQzj9GPSvfgN6vKVTknc35dR6E53Ly4DzAcm6uhjUbLm",
  "key14": "2jbVKRQ6xtdv8t9LmbgnjnVp4B1kR2QJCx7LNPsnUefQgC4pGHQRwtBbwTMausCicK5AWvzQ4dJu2K7V1o1Jd3Kq",
  "key15": "5GvnFLPTcrwUEeFpTrrzoQQANnMj1YUKGudewR2boLj86pfc57J7vab1J8zAYV5VUQhhiNJ4nvFiMnaGpVuLJLtC",
  "key16": "3RgFtTwtp7K1vo4Aj4C6tGJ64fQGnQoPX9v8NEdD5GW4D8hKsb87BBuk1ufeiEaC5xbWsxwSbVhvvKMenqSb2q5S",
  "key17": "4gweK6XWFL1W6Aar8CYMJpQNMtGFGw2GG3XzwGjydjVaVtVD5kJiER1y1ZxBw8GfmkG9sJMFkJ9D3NvywHted6y",
  "key18": "4rQfXmyM7ZmHcHMBUuXLxuNb5EbKUyS7uzoxiLvU3ksAQ4vyMqKcsEN3CYCehBqenZB52jncxnf2wiPq8JWFTSgz",
  "key19": "4Nty48MyEezcqsn5QJqQomUUsx1HmwtzHEL78F5f6cYdPXHMtFwgS4dnNRLn7HDhj2mQwZRuHLpbqCxNxuefQ68Z",
  "key20": "T6UvqsdwXNuKNqpryaMEzeK4nBCU4YTZiTRUn1Nq6iwTuP4BAfwzBKA9L4pKMd7G3iZacvKs8mQx7whTmELzUL5",
  "key21": "4fBTpMBTXvE2qDVL3T7CSwb4fmQr9wKsHtpMwTeTMP4FtpT8xqE8KxKQyM73sKgtDZaovQNqVcJFXkxyQS53mfn8",
  "key22": "3nowWm16efTN8sX7Hv1WrGtAdaCiHXw3U3Ucqy1uGsmNiKkf9nhN1zpCmne7v6R2uoKLxsJupRGBCepDxbBQ3qKi",
  "key23": "2uskXPx9TKFDV9FX7JvKcT7tK72UA5Jktovm1sVQVN8akha2GPwWe1uGaLJfhoVMZa3NqUKqCPRCmNh3R66aHK6E",
  "key24": "4GYfxppbyv5PTccsbD1vwr6RTzB86s7pGcnNhjasmYXfwih7wokt4jidjgAtRvpvgUqMpB3wHFxnehPseReteCQh",
  "key25": "4gR8PTQeodEapyCe1bosYxsWRJUCKqjvotivbCnYab4U75EbPEwfqZRX8SyTTT7GkukucehbinS4QcRRkxW5yKUz",
  "key26": "2YRiQhciydKkWbq8B9rpZJBaGADAHucFdxXrtn3mS3FQcbBhuaUM1UBDyfNyVa5CEnZP8Q9D4FvN2fUfp46zLXaa",
  "key27": "LEwVWfcQyTDEFgZ79v6T9V3GMPmoFBvPmmAPmLshPFJrGXDWXEsNv2u3oQh97E9k6RqpyfLP9Pqi7H7gVbHYpFY",
  "key28": "4E4FzAvZ1PdzkzDuNzQj5XiFJRyP5dskk5SU7htQ6w6DDX1i5yAzcKr3utYo36iN5SE1w6oYiWm5euEdorFjyTQc",
  "key29": "3ycYWr4aEY9vfLtiBt6XGXy88nUcDRBER6ZGJgnxFJxHXftECcboNSBif9y9q9kNuTkGy5eyTcKGgkwrMdn6gm8K",
  "key30": "4FCqp96EZSwDDvHYVtAQRgH5KqNsBWGrbuRwiB1WMttD16tFyCUbFKccjFZ8y9xV3v5BQRrPxe1voriwJqmcdBXk",
  "key31": "2LGuBEdPUP7VuC5EE1nxXS4Db8rEycinBP9Ex7adJVwct3S9jWgdBNCYaHVb2bJ3JBidD4BwZcEv4Uneox4Bnoeh",
  "key32": "3ti91D6fuGHhw5NFyMk3fYhGkVDQhsAMMvPMrdisvR3X5y2DxAo6vQZdgMuJAoKaspoMeyCzr2s3NqTuKyzUcCNT",
  "key33": "2ZYeFFXmRTmCtPDXv5YtMcuVegzYyJHjiZmUDNZyoPhxsEuHSMEut6P8kJiwLMr8265Nn2CrWG9ix2bupmaZkvSt",
  "key34": "9zwKWBzgrhGSAdDZE3x4rzdnAxxRyKavrQH1mziYc2Lmn6VgN73kxkUBztcviGunw646EvgymjCesjgzAKRqmVR",
  "key35": "4iCkLeSx5uYRcEsq3xibXQBrCfxtpKAN3kdeSMAZULL8TWgZvmtRVL5NHupPjJqdPGc2igKmLygwcpLtECexRRAi",
  "key36": "2Xnkgwy2HqdT65YhH9qp17mXAhEzbh4fcgb6Co4dZNcNYwBfJBAnTGs5Sn694fhikzvnun2YYMzpMGWpEgUJdnGt",
  "key37": "34KSFCSRu4m94iut2BzdxxRjXvENJQiSs7WdQVJLWDsEqmEodXedC7394ABTmqw8a7TWnQ9cTZLoaqY3tbF6mk7E",
  "key38": "3ehU8nQnC3UNt7gFaV1hUN8PFzRPW7ZqRusyoAGmZwgNrnStWDhn63uRbPPzFRqFj6eZDb8j5dH3rPxJa5BPSMzE",
  "key39": "FY37YUh2dfoHRTjF4L2cDWykPhy8jfrzn9bSFxABgG87qknGQof5Ke798KmdEmBWZ4ruAE1eFAGznqV2CkmBo1W",
  "key40": "4YSMVMDJ4jLjXPuqqu9Lg182fnhPj2DcsbgRPvjye12Tupjn2vPboFyxbZsQRJsnUCTrZfHVJxX5qJxrmp8kzL9b",
  "key41": "27X1P6dMoNKyosAfJ6KDaNyowLC1ZZRrWiAjrsPWHWnDhUmEtzDKZRFJQP7aAbBPCQ6zYbcUwvs4MbzwbBCVQhmH",
  "key42": "rQiTT1RyX6jStcAaXCyX9aVfkH3d7pTJmeLjLVMRGKY12Zfjgd5z1qw3pzatp9SKGZhh7KDLV2Nqq6HGzboz419",
  "key43": "GjbpB55KQqqgtSPiGT2fDXWx6H5Jx5xwvwMcU4qzGM8gxt3V8LYagAjp6VfyR6xo2Aj4rviu7A6qBewkiZru24F",
  "key44": "t3ytnzenwWYtm1hC8Q5HN7zi98gAqcRe7ugHrEGRAwq3d8XuyccDKjewHM9FP7kD8AAfbtkBcF36aZWB4SHqihm",
  "key45": "4youNPF61kwThueSjFkhFjTHDoXmSg8aZNbZcrxCoczqhZ4eN7zXnw2keSW6tqETDz3sqiT5SSeAQyV9WS8bHJLt",
  "key46": "Df9fmwVTqAH8PuwaQwRtcAHR9VFHCuBhJ7tmH7qJtxPHCii4Fy1VA7oX6g8W5QjWV4jBdru12Mo6W641UEZUKoq"
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
