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
    "2W2vxY8Vn75MKyFyhwX5AaxLUmXZKoeDP5ucBFnvnXnCDG53QdEJSvANavXeS279Vm4uk9eHez9EkU6EyJGsv3gv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3at7Nd4HKQCfBLbzwgYWvEtNRgcW9JQEcdnM2uKTJLX1bjLoxzEZ7kVEiS765dQbzjgPruqfTYs6RE8H6B2NwHy2",
  "key1": "5omxT5atxJsG54t28FmRR8FAi4EBRwVUd7q7TADX4s7CHqB6dVtEW8xyogYxaYMevdaMGB5N2NRdeehDMtQ9HkiA",
  "key2": "55R6pzmK3T3mezMt274KykMn4PGZCRqg5yfbGXBnR91brNxTDZizbMucQUyoiFEsnLLhJ28BL9DAFCwbcTSGrXaa",
  "key3": "28HkgdVLbKjLXgT66vQwAu9E6aKd39yhiW1v9dwby2VQfy7XRjmQRZGQFRkzDgYr6HBfmVqoRicM9ZQmftG7o2xt",
  "key4": "4umP6zzHzj5mq4TmKiK8pYKt4H1YsQRnRMEbY8cWUAecWaVqXrAALjtH1721NzL9z3pR3TZ3b9rsRMkHaKGgfNZ",
  "key5": "4LsqewX7XeSCeBVU51xSj6xXyswVqGWusxFhtjPMvu8zCPLJtGBCLagx12Dt4KSB8QzGPLq49g5G2CMTjTjB8M3x",
  "key6": "XgeXzmx1ExTgQJsHsVRYtpxGsK2FfNkHSMui2XSxjvSAsjepAUXBucjK1mqukFmHZVDBfZVpgZngU8XmtVzDYrN",
  "key7": "2BXPktVmtGLze3zgPaqcCW7efQCcirxTWgFUDKUW2FCMw6vwDf5RyPaguGhuUeUAH7pwxEQjFbj2ZsGXb6jhvUxq",
  "key8": "5smB5QP722mdTxcMZ21X4RC5uUTz7KTqcDFJE6YrJUs5UDeb2uqpFYYi5bsPy2yCBpDaoVCek8AkSgYHVXUEczPm",
  "key9": "Eok9E59FJeUx6oZgYTkxheYYu82EDtUrx7PYx5wy3XXseQWHiJ9DJRY4EamgKohNkmt33KHhFUmmjm7svojiB9P",
  "key10": "k6UfrX17b2MWaaURqXbDhyWDhQZdoqXuWFByQ4sqKze1vHG8FiN6D7YsEeFnsWBrk3MiaTF6Aq8vRuHX9sS2rUR",
  "key11": "Vf3iXnmGYsQLarFZ6xYn3LccQjdjzFRLQxTixGE5iKYr5KVjtNq8LUv1pmoeQM451murnUtEEejXV8iH86bcM5j",
  "key12": "3dsA9t43JX4oxqRCnPQChcNkrv5AsFvLzEANYNpiPAJBzrkGXLPJZKZAZrbApjwDXT71rrWs6rLGTjZZfCU7HimK",
  "key13": "4V115poHvbmqzmrbiTLEAf2k6Ra1MXRppeY346WftDwpSRFUj95TfqCC687Z6sXM6QA9vY6KArfZgkU2Ct9ig8ts",
  "key14": "5Ysw3LkbYRTmJ3rgvpp6Cf4VQf5hevmohropGiHYyp4ZGShN1pLYhK4REb5znAH3opzvJ96QAVdFwZXhjPNpNBjM",
  "key15": "59TnPG8p6J9phPabyKcDGKDsCFLaGZT1XwTqGsDfnWF2ffbVBeDnzwaCo1qyk2idtLmVQDxtqyuhPKcJXeXu9hkq",
  "key16": "3mDhbzJYrUpTmbF9dRbEHJfYL3pwSHzaNWUB7KjHmQzVKX3BBQSCFwdCrBjNtdK362NWKWZzMqb21sXYY2XP8Sn7",
  "key17": "hTFXaREnF8sx4mYTrTwvMDsPtFeRYhGV4uFaiVdFuGrWFuuQ4A6Q9GhAfZZvC8e3ZENamzC8Be739YhiTKvtGP9",
  "key18": "2qiNm97JTvUZ8GUgrntkeMJK51kSJn7cV3LWbWHacnkaYjxg2Yq1BqXyvBKjo3CGqgXNtNEQqcu797LuTN4Kn8ed",
  "key19": "55BoTacyZ9ECY7Aj2FZDrEZqDvhxANsC75HqPoFyr5t8mEoRTDawYucuKJYdtexHEaLvC5SKbqhpCQNMqFXiyLPY",
  "key20": "qwSRCVUU1GqM7m2gvWrJ5CXut9tVkmAjwzHPe4dUDAN4WLKkruHsTKrrTRb7B3WaTNUG4EWVNj3g8At3m6Duxw5",
  "key21": "2bGggHd9xaKKtmCkfBou2wipUBpGeU9ztRSb6xkycggxW68wdranTXuLk6z5jXSkT55YXSFMn6qNR7LUsecFpEY9",
  "key22": "yW52iEaeNr5T61MF2RZJ25pw7e1JrRqf841rkzKppYoBBzPdt6XHA1vqSX4qRLgd6YGexNVKPQU5W5FoxThCJjV",
  "key23": "49ZAP5UURaUFbiqoWupNy6GfE37viZrXL6sunWDpMgz3DEZLASE4qWEb37HGZzhsZ3P9Z9LmdofoZq2iPr8eEfwe",
  "key24": "5L75EcQeUfKN9KoQVAjyYufGoWkx5EjVrQazNW9FyN9fvjEH9dWYw4pu1aMdKvMPRfdFj8ScuRmPUhe5bNLdQm7V",
  "key25": "42VXm5KMATV8hmM4LhYcJdwiZTLfh8m6UTG5n98o7XrjnTBbN7WrFwHFaWRGDxSeASwU1K4MtRipbXYfzjrjQgUW",
  "key26": "4aJCqZdRn87be5TLJevAJ84xXwwjtTjvnz6ScUxcZC7uZa8qzZ7JxEvDi8Zzw1gBNVKGH61Jgrnwrv1xjyzwFyJt",
  "key27": "2mq9YJkXzhXx7MUZn1LotZ9iJqqkVm8p8iQRyzkrQ76iNBL4ep5kGXmMDbKTTJ8jZu6c1vYR1AnzZpTcKaqzr3Nb",
  "key28": "43JoZM5GT7PeTPK1E9HF8D8mQpm5ecXb7dSs58YBcfxSSetja5R4MJp4F9x44L2rBtTmicJgsPQXoX8zeVqoQJqH",
  "key29": "323VtVh5Qr1EdWhBmCfKw6HV6poRPVo71Xvw8omD8XkS1M4FqvBbuTCwQREp7C3Eevq69tZTXPr9CGo4KPUD4gZA",
  "key30": "5wYkY9wwvg2ArgiFcC7uUiyNW99PgbUJ1iJkCE7xi65LoRKUrEVh6Ufv6MFQL5js5iWLJmfmsEpUnAVBEdE2tRCN",
  "key31": "AYCy32MGE4F3VN8bFTfX1uXFjyUj2bNHjG9ZCdosgmxA3PoMaPbga5j8KUX6xCPCpkRjrhS6UMbggbHADkqaMAU",
  "key32": "xbp3u9ajEL3vtXCNBkU57Y7k5EGcJ8QyBjy68h2nxVGLZpD3EwcMD1uWEihqQ63Vc9Yek5m6xqW6dcLdHXr2HZr",
  "key33": "9CbJUcmwm1yTTeTqXn8JhC1b6qdSTsaB4zRiu2odZjf4CBYRTii4ts1jkNiJuk8muRj7wbXyM4xDm8xj1QyoZ2S",
  "key34": "3kUAJexqWXqtd52ps7LSaPmCnNcYVydnqUJdEPNgRLRB84xcrCR3vQPY2Yoh1xg3cAB4J2YSdhUFpEbiEUeSNDhg",
  "key35": "3MszYM7FVn9ArF9CMANZCVk6fhAb5bgFbR8prXFU7xuZFn9EX2wWapovUpC328h2ZEMnzHGnJHMsbCgLEd73LnB5",
  "key36": "w7GSkmdSBdAX6Q94ncCoZk6vSsSVqghChtL34eganJmeMbP2xMLCohCtKR4LiX6HmrJL4usysvASY4Q31VCpfct",
  "key37": "5M6WZyuuRB15my8ecaZDLnjvLyPFYNkCBX8Xrz1HDdwuHCPr3waonuyvmwDxJ3dJSVbqGKh1thvVdMCQSzhci8wX",
  "key38": "2rPGeCbGnFo9YiU1QEZ8qyFfpkceGvE6VKGVyo7CkkmrfzGCv5bKNe8FLL1KKNP7t8DnVCrVNjfd7NKtXoccZe7Z",
  "key39": "2MektdmFjrpcsYs4UN2V3fftGFpktpLMJrjKPm6ZfQmFwpPQB2BLP3nMYXmzcaNorZuxocrRzvfiwPb51Vu2WoqB",
  "key40": "hrwBWSJJ8rZaFneTDe6iCts3eBbMkiMpMwnaySBG7gDe5JueRqrDXh7x5EGdAuTzf7akzekbxs1J99amBChmXsY",
  "key41": "2931Aq8AwXoesKSt8xJGSiTUeR66AMNM1kQph63qZgv5hxjySicfB4td8jhgrciR83iSE8eGxwYYfj3u92RLuFbY",
  "key42": "3RHmkLkJwLoBwxuPu9Nh5xv5frpu749wo9osVAHPhXTZ6Vhcyb3Lj7nqPgFT4yyuKrEMqxuvBReemiMUhDoWySLt",
  "key43": "65Z9a1GBmspdHbNRudQdZ1H34WwzJpr8vCt6eNTNwPh9GKnXqa47Kxiev9gVg1dbGBEB8gu3NE16LGB9bsfE7HV2",
  "key44": "CuBsRRPTxRzY6NxwZPE8QUVR8bWJc9KpkLD6W4aG6eoqDyiUsnzmqiJq1wvgAFqwmeqbYkqt2vPBRwAeMLgDbWt",
  "key45": "28RnaaP8C7uAw6Pd9Hm6JLyWQi4QmfaLEcmfvJmTBAnQS6pcTBPhdcbaxAcPF9vHq7YnKXgN28YkR9khYw1BTuZ1",
  "key46": "3hrUoncxUbyMs8PxVL14GdsRSPzZ3PeZ6oryKssprnkgcyJNBdZFHeZTDEfrusCN4Ftm4SXhztK4tySAM79ZrEAj"
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
