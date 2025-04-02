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
    "2c6NbkWbrXa7XWt1ZYgMuL64wdzLaxSbWzAWiRcj4qYagwba9am9PMAua3Xzx4RuNYEM51Xy38droUeFYB3W7aod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ANBYPEUhS3zRWBzaCsfwoVUdtXxNtj5DPJ6NVwzDVjsTzRioreBULDZsrANJf5eHwGSZioEzJqYSZDLMdrGMja5",
  "key1": "46DkCNX2rHFvSshCgzDtHshzvyHumLZk5qykLi7qoUgT4qBXYmqPj3BQ5af1P32nGsczMonFvLAkpb7z4GimM6X4",
  "key2": "5YeiEicdhmqsqygVU3pKkCYovTYUrGiBzwcxjCo8XpSMVLDi6mcrMMbmvm86sU8sLgbeB7zn5DK2Q5nHzxronj6Z",
  "key3": "44YsQVcUKrk9sMHXpAxvUYkcTMEsUUrs7bVDqoq38yPSDKhqUfr5zpSYNK3yfbu1A7quopeLyyyRXTPdoC11dPZa",
  "key4": "65hwTcGZwxSCEXBgg5c6MeQMtUdcJ5Tzzbz4cNK83dbesUA6sziL59QcrwnrxHno7LmXhEQFZbue5Z83gVe3qtRU",
  "key5": "5XJspLLBPQyjohBRTi2dyJUpCfZD6GKWv7eQL9oKqVC23rqKEv1rLdBzwqTLee4HwGkH4TSGkRyWwUTsyv5m6xfn",
  "key6": "4NM345tNJun2Jx3P241YvUTtxJSW9AD8iN7Ug8UhhFEtHiVY9nwmQzitNizAWwH1L4WaLDuKF4tDZSbF2n455X1H",
  "key7": "wFEEmgjof4qi6kXYYH9153j5eGVnQkmt7FM7mRtqtQM1RkDzHZCFWxY8uREpeHrAAXYySY8hcU7rN1JhrVZh5g3",
  "key8": "5x749q2qDW6fZpMGrLpibJ7i5VjHf1ukY7NKNXcpzLA81SSbv66iU73kdk879DV7Qkv2G916gTz6A68tgHaJkNju",
  "key9": "3EMxXcFQXsq1Zr8th5PGZsgZ2UgxqdPU1gdoeaaPovfBGX7u9komqFoXRnPFxxzXFymQB9ha8CnFvmnq8iMiD4B6",
  "key10": "2jRd6GTTsKGSuET7D4JPa5RjUU3v5AbqYKtzsFQtkffFApqEqfZKKTQqwHYafCtggfYshgoyar2it611gxkADFPE",
  "key11": "2qDytFadJxipCCYWTWipWQ6YtUvTphTmCCg4U7RJ4LZe7vTjTXWdh9dNGrVQDwQi1s61rsgPq57oowSRUWN9SEjg",
  "key12": "sPFspY7mE9n3ja11piE8J7wwWzyJDo1xA7jpA6AfkWna1tqhqtUzhXz4wqR9PTyP3heVkAsu1gYXTKNrfT4Yp3G",
  "key13": "2t4CFSM2Ep37uk8iujq1PCZ3Rnsy5Z6XQjALVyTnHu5crajGuL6AdFJcDFbgiKsCoaRcjEFpuE6mUSrhHjhazuuN",
  "key14": "foho23ZhmoLSkx8FGae8jtntbtjW7BJ7f9JdafPiuc2uC6PbXqsAWGebC4LpoFKh7Qp6Rmo5ENy5Z3CPNaWeNqS",
  "key15": "BxpVzQcWCbCgTtLmU7PSXWscrAbWnGp3isfeAAVVkRsw7Zd333dJv8UzpCJBred3JcAzTjf3HJsDcBBgeu7Dz4G",
  "key16": "3Na3AQaRFvkbRSb4sh5GLkqrfcpVgricQTcpWZVHinATBQbHZQxWdEJuFywD7pHWLPtiz9Nf5Tjc3gPfg4GMYgbu",
  "key17": "FPWUvwqDQQoQEvvs1tjS1E6Rm8mbyxWxVA6Si3eFFyApc3edxoyTrGjZbUk2HpNerd5p6GKfXadKDC5RgNLka8t",
  "key18": "AdkLFQZHpTW9NzzCChect9s5XJxqFxNWMnWEn3gTCzN8ApfPZFckgCdAbRBWcwHffweuD55ycF5TzTwWGVPdrLY",
  "key19": "3JuH4ymwbuzs9JYSJSvmvKjiLF2vi6WjMyKD3KFYd2A1J8KvDuUDRDsXJdftUnou6qjne5TymKjGgjpQKKW8dPmB",
  "key20": "5JnAVNypjL9nm7ya4i97bTsxLhHgaYtFT8y7JGcLfdtP88toDr2Qycfd7u4qz3eLPNr87V1cdKSr1pc2rvGGfDfa",
  "key21": "5VtU8B8izw4181EH7CLqJG5Pz9fuQopUaQ1rj4GupdGK8uoXFe4Y4JCJgDP9cM5aoAe55Hxdkp14YPp38zVLT6bX",
  "key22": "55PkWYVhfaNLQ4B9R17oTZ3TEoiR9wag8DdUv5RKBgHgE4zuE7m4ugQ8frM32PoxwRUb8VmTr8GxE5xK2irPaFpL",
  "key23": "4ktb5sGxS1D3upH9WfqWzkWXJkHjEte2cQoAUWYDDiHAEUQedD8ryhxnPkzZcBRfMGXv4qck3SteifEoKjAdsYuN",
  "key24": "24Nz7o56kf4RDPA5QzzBQgXLUcuj68Hcd7xBNYaUi9oBhyNzhGxbZUNaJuxpQAupnWt37uWXGD4pqLmGtSoY6ubY",
  "key25": "5Pc9fexfTtTXd6iksbkdrs33N5dY82Hc5HhVnW72JH5WXqfD6HcSizBpUmi8FpfSUqyXartZTUvRd7jXxwX5MRBq",
  "key26": "4PSu3yXmgXRQ19fqFnBhHTPJfxdGamU8iZRiCUMDkGPtThFs7CAJqYZGYL7cYti4apf9u19CtccLj9EgUZh3t3gz",
  "key27": "4jNMo2yv76cGmqqvbeT3oK5BUeiBRxTPkhXJauRaZGaAoBJ9hYp4iwQzYVcShWqCBxxjecRAbhq7XY3hiQZeSdmV",
  "key28": "4NuUQkeT4wuohBWBanz9TDNHFSva8MDJhn1ZakJbthcqwujFYnCbr1anepcfrZScGq6cJp8nKvV3KbG2uuQyMYMU",
  "key29": "4i2LgvWFvRm7kiAVGEEXzNCqefBjBkXBDZwmDwSx9Hen6Eob4VAMM7YyMTy6necdq1wfgdRf1BaCQ8d9gJo7zrap",
  "key30": "4bpfTbV3CLG4fUMAFVoRRgXtMQ59k6Bkv2S1L22PbUzCqH4Xj2SDFJYix6WRUkHnBKjjD9hyK1XbvG4tPoLmVpnY",
  "key31": "2f1Rgj54KeDbAi1nS2v2cuPGa3cf6iYe6xumP1Smi96QHHCBe1xBXWtaq1B8KdPaksJbdFmbH8qCtanqyf3fg9er",
  "key32": "5oZJgHYosyzxYLd9Fgk1hABCvDC2keELPhChsMQjdPM9MwTEjGN8g1ciRBSFsfemjd96uJWb2P4UgoddivZizNxb",
  "key33": "4bSrQZcfkKamLpc5i7vCSXiE9cCWNDvAn9QZnGk8ySatg7CjJh1prb2kSU7CnKvv7dSQiYCQ2QvwemmrHKzm1fxE",
  "key34": "37Kr3beDJMQg62PiD5ndBf7r35BdrWHLtwqYaWZVjtaBSKXTBthRhUUGZ8yJSBvMP89NUtdqWHiWHSdyQmM4KJU7",
  "key35": "58VdDR4w44BJNurbb3S1DJYxzaXYhjKHtMdwAgRVHJpLChee6XXMm5GbuXTdZr6jmYGCcSxFsEvqEGEeyTgP8xwj",
  "key36": "3y6ZBHeaHhLdNGc1uHj89abuCWnwnLC35E1RueGjFbQWGgygdbJm5mHo3K7bD6GSVW6KvrbhRVnM5LDf1svdo2nq",
  "key37": "aLLAv9VJVPKBUeyeovesAj6g6tpsLg6xJzKLsCdzSEjhJAssubrGEywa3Ln6XXUZHJX4KsE8S5uCVakoLey8bZj",
  "key38": "4YAqMaXSjPosWqmWn4YfFmnLV9ZBBPUxSTBLLDgbgrzQG3n8Xoyaw2YQg4jqbDrbpfiZDKDA5X9FQ4obc2aBFvhm",
  "key39": "3VET7ZKdkEZhAW22NpBfdiWLDJY7m4LMkXXNpvg3ecTxSs1sy8zUnhK2G6vm6H8SuCHUVPVq7RjeeNPtm2eP9Nd5",
  "key40": "5zhfDcZy6F4LuLax5vDnPRsRo1Wede12BPqs4v3qappXJZVBrTAUaBEakmJXjfH2124yC4zXwqX9Q2kcnQU6kRbW",
  "key41": "39jTQdtHtE2KWbB3Ta32nbq93xW5Wa9cFpe6iuJXF3FPnqperdisznWAxT76UmZaEASZbd1sr7yFeMz9Ca66x4YF",
  "key42": "eLXcd3gBPM9MBr71JkaVPXSCgHJMH4wasv8C9Cf3Qw2t6uTkUmVZHYubRPy4mZHDTeYnVPRJYsw3FUBH1DNd98v",
  "key43": "bLwDusrjHAQuJrBRJUU7vD4yTeb7FYtqDU54w3CMfy39Yy7yLSrBvJ34B4fCft7PZeKJ9Sj99asH2TJp3jg78VU",
  "key44": "3bMSHUFMtKH1umXGxYiRpyvENCrHYVKodtQr7dKjUPQ48BonBTVtTWUNTypAUgka6njGByLGyHrjjE1nuwRdQQh9",
  "key45": "3eSuA4caJ4VtHuLBTPG3Vocn4SrXYimTmJyBG72UKH6g7xRrpGTGXjagoQF3yfLYEKFRcVPLsVbMJMhNJ4TDbGF4",
  "key46": "3b1U7XKDtfNvLo5H7CRKoXcdvVpLJ3cgeUj965nLDrHrWMsbmuucAyJHvQA4FG4E8L3QTbc5kJzPSx6SQ1aC4nvy",
  "key47": "4fgSta4tT7kukNce7ni6CX7T28pMMU5JMALfeSEb9UZVXySSbt7vBCQ8bEFaU7SW9dW5jVsJFQpgHff54katcAzs"
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
