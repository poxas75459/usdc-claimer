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
    "3uBbS8MtUZSc6YmrPXB7S8hRTdTtA8nvi7QjuRBqduxwxrjcWc9mMby9Z2oqCzexdxqjkhmato3dGRbrYizAbkvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2226f4nWQ42dFT8csmjBuA3KjzvZ2xZL8ABgpGs32Pa1xYaLH1D9TnM9C4ANTfFZzp3vo6XHP3XyoW4iGGXkz68m",
  "key1": "4kmLumzs4yf6AKg9F3NhndeMEhdd1mTEmENTpvSqP8woDpmehpktVq8kRHpbFXu8YPvhrhEYMBFkQ1mHn4YgtYgf",
  "key2": "2EMsQ95UZkpqUy6tKNeN3pGkBH16M2AsqywvTMkCaUATSsxj8m1v8Dipr4w1e2qgn9ViLxdoGvVu5xbaeYRno3br",
  "key3": "3KVXswSrU9ekuT4sgGpv8nZ6GgpD3oidvyFvC1TkUFFvqYRJZ3QxRQLjpehjvXubzGX7V6zD2Gy5rT58QWBzD2tb",
  "key4": "2ZqMPziZC8gXtE4uK8tsKZbAruYM2jYNC5wSdGEe962HZAqhLEnAdhG7WuZSA4XzentxcFjW6LU1yvtDuBzN7oVJ",
  "key5": "41BDYARTpzVgkCn4HiwRmZpRRMVxPXk4n9ivsbhbETFnkWRAZapkYRC9FtbYFqLmYQP8u1mFLC51FrXdw869JZ2b",
  "key6": "3fB4NXcThMXo1JyBCLxbE787KvpFZnXfXNshU1m5RrMgTrg7b8vankXFrRZa17KSeUK1wJQ193x9NntZYDmKwVU4",
  "key7": "bg7cVokfjTqm7YZAB3fGKJYXGmX9fd8J7s1Mb3TPEabP1CxMihnXF1nDLkujNxnbseT4kXuMp1c6Lfr9mfMZf9T",
  "key8": "3cy3UgVzQA9MzsNAfGFGPWCzkdv5Ni7HLR9i75oRGfHmMLoWJLjkYtDgB8NzpzZhQhSzPN6U12vbJFzJfheQDfic",
  "key9": "3NTgKz92wD3dxn4ynqU73xkFaWYuGGex6LzXDnBszDbgGAxHRhdj9amr6vfkv1xJbaPxvJGncAyRbzHJwcchp8yp",
  "key10": "3MAKRfthF43tDweDUKFU4mV8sDfZjx4zCWDgx3jKoQvHkD8Ex17J4kWrww4UbVfZ4KT5fsXrNtJi1vwnguVHHNE",
  "key11": "3mcEdECNz6yfvRkxhFXMNWiypRznbBe4Qcv5pvP5QLb9GVgutQdQCStxpKDRCnR9N6FQCMscGANchoVAjRSfetPC",
  "key12": "2Xrn3X9Bt45XxY9CBnoPGXweb6eE831S5ssV4Hmz6xdP2TWnQwYiXVu1FjSTbZWgzPdCdQD8iJko7VxCxd4YrYQq",
  "key13": "2nhZ8h5KVYCGW3o6QH2ddSeTDQJjqEZBw7fcSBkVPa1NzSEYTAf6WoCWBdNYRrh3dppnJ5LuzFEBpDJHVR5MQAwu",
  "key14": "5uorwFCpfyqVdwJa5JGTx4LcGiwKsV9vYxtiDiX4FLRshSfZgUbsxB3d3u61pxbsq2WQZ4inNebk8LvKbq3RndPu",
  "key15": "2mpwcPLkEegqumJ8KytpKywZF41aMDxUrYJNNnRsFKtfJe1MBhFa1scCvFW6WxVZd2gs4m2kF6TG9N9pGBNJbsKo",
  "key16": "4mNUC9XfNtgB9dQzZraWigrNZK8bp5T1WXXBStNtC4xYVG6o7Kb9XNQSkv4eZHLgDekRmLFug5LNYYppzMkJyqFn",
  "key17": "5wKpe2CUw4NSXqT11dyac1etgvA7UCKJBJeBTA8z6sRs5c7hEHb4DcA5mn6EFo6j2QVsqY9zvsRNdP2DFka3vvtv",
  "key18": "cSZgdF3SSGoZ6iaNM94bhVy5xopmozkGBTSudQ1bbNUkPHLqLKiJBWf4ZCV2YSuPMkv2h3P9oKEjhnxxAEXwgCm",
  "key19": "2pFjrCH65mQsRvuCxhCUPk2goYrvvotDnJsu8d3V5ZvGawJh6s6edxuCyHkRLRLetAAPja47XKzAvAphdP53wcrT",
  "key20": "4P4yaBxTvoiGjq9nWCFEsVrxkfyXmmvh5crRrEappgn4ZhNwVhJsqfZ65GYpDctzixKYCaQ5yAnTWKTeBqN5tBtc",
  "key21": "4eLrAHgGdhEr6V2qfgSKbopyxc3yeEpKPZHGZK1Gv54hNSDH8JvurU1ngqfbRtvHoZwZDr1mHbRKywVcAXw8rChm",
  "key22": "kWM7LiQcWMGSmyNEasHjm5CEfauTtEG4bD1sy26AqnxwjcuSPdKw3BYPL2XhGcpe8s9KSVL548g1RM9LkUAkua9",
  "key23": "56cgXHPRnCYgszCup5sZBHBYFXLa5Wkkb1cLXUsMaCtMvPttLZ5o5izaXtjUBsd1tCKZ7Y4yBQb5tFtAC7FbUQkH",
  "key24": "2YViR68mNJCu3J8jn1FTsCeJsxhaGYuLGcXMojcQHCdt2b4LTcuk7CihF9qqVR529VTXyJmgaeYj22Z13MM3mZFq",
  "key25": "3bUoJjGt1RYyxbNCFQrSPA3g9hA2aMs7sxxtRevww3YamMr1rwAFuRKMavLzoFvbtfy7VEG5KrZs28vfe4ergmFD",
  "key26": "2WeYDaydeH8EAutod5FvfkpfXuy9Sn78SZEoao3gP61Sj7dvJbH4d322DEqUeafNsM73BJa23T3uhBDfQEQin4QN",
  "key27": "59xgKnJCLNdYfu5hKsNsNkdfaYV4WKRTiEL32AiMC2utCzF8gBZvNwze3d6K4SHFoKAGZukCgMbrRyLQzsnvQUKQ",
  "key28": "5rHsTZxtDficPmqh4mZTBUySoCkkm37noP29zg2gWiwJKAb5p4JXqHapsD2SaTMngzeoYkwDJg4onHu2Y4FPJsuK",
  "key29": "3fYhH2YG5QAk3EZrf9CMGNGgKPecSCKsaE2Pn65mdeVwkXLjigkFtjzprRjVYQT68Dx4bwki7zMfzfoUF5Cpa9pT",
  "key30": "2dwWSpiWYwta5rhz6XK6RnLZucKuPqkqCmj1FkLPEjKMAydqfP8rcQnuSs7WyE1TZSDBsmnCMeAfqYT1inT6h8rz",
  "key31": "4SFgdgzp9M4LMLSX4F4e8gpgCtt5RfyA7gg9YWTLeu6DEkWs7bt1NdDcGqfxXGSqqPSpAYbpF4ibwY5gNAeZVNu8",
  "key32": "2taAc3LJjAk6N7K6GMPyCh3wcTeZkyb8QhWaRySXXHWuDEMbmpdTB6XAP6UAYsh9w5cEjgCejTYCyraArLhJabQE",
  "key33": "DDorAAjM7DchWg39TBnw1H1ajVX14McsFq59fG67MkBUS1Px3fTqzD9DumnUZCg5SBbgt7L9eGNtfATyD2hTur1",
  "key34": "4GBDr8aas7R2aBnGKLNSpumcaL6xaX9E7yUcuEWZKKvbM5GiBAwYTFv1FgED3YP8fx7faNpP7BoLVrJJx1bccPwy",
  "key35": "wuuBZH7JTZurWKUApUuUxEC4rorawFoPjCTdEGFifXzakv1wKRkdEQSWxm3gcNJJJcUDpMbkNtSsnNJ6Y4sqmHF",
  "key36": "4tFoTkX8qt4aXu3ABY1ez8kusioKTb1aosCbqzNJXxgmVA4QCy6jyBGyWiEAbBVRqkALXMuRZmbbGTw6QuaU9UeN",
  "key37": "3WFms5w7kfUxXDnUN4Kbe3DgE4AnJ7n4EMgCN5FWjwCr8JAGJ3GWiisBQFZaZButmaRVUhTWgcbJH8qwqtDMZ9C2",
  "key38": "tTLvhiPRFxnZFDe4Xe4HWoAi7j4yUvUEYAt3GhTtJwXnuq9TAGKqWaBLDXHNUCboxCDRQCUuzBCoquatcyjFLEE",
  "key39": "4AUW66QkR1hmQ7ySqVr1xDMmqP3tYUJofrvss8qbGgSjjSM3E3KJ1pE6NcofTemusHmm9sjfEWQ8jMfCMqWuw2ez",
  "key40": "3rVtcWbfaSkWoLjAw4BrPtTe1kD1S4TNkcFsynxpz8Biq1DhyFHMbSpUPE4Wf25hgAY4ioGWsdHGo3TLh3CKDEjr",
  "key41": "5zDs81FaG8FRaz6dPdYTvB4ACC52maAMm5CS9CfE7qh5RBtQFdNDbgNQZgjcLvGB3ykRvnrZxsaVHQU8YZXtqwQT",
  "key42": "4GidSgkJPHu2VQH742PwNPkZuxA7esNXtwKb3Rtx4FgydUaKGwQ1kEF2NLiHefc542cNRzhf5JsSAdPznLEzP13j",
  "key43": "f34QwJ75MadxqubR3KNRu1QhkbWz9Cmr6rVmhB2UfC9wwx8VpdUKxfem5uvh4ace73c7bMinwkvbCQyXwSkE4h8",
  "key44": "4xcwKWH6ksFYRNj5RHAnHfBQNWJAgMkXpUCd75dHQ2XpEr8SeppKp4v8RaVJgHJnb3dPQb8N3zasddy6ZzrPUWE9",
  "key45": "2EJJBAjxAatNV1EPxTkQWfebxL8aMhA29DAZ1RfxqeEv23iSG5VsGrqEoCJJ9wVgoCifNMJEZb8PgDhuEBa9VngA",
  "key46": "4KFjVUcMfefoMDQfYbdne8WK68SXfXUhyPgYVsTXkcEeSx7D8UMVxKA131prGPmzN6KwCaV8qB4iK7uKzug859uU",
  "key47": "3rEWAJNmwFSPzPPiVcYcbhzKCyHc1uqhzhT5wsnZh4PUaRUYnJb34cYu3kdtERiKhNUwr6jnWX7cTpiJ7r1VfnhT"
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
