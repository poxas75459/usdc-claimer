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
    "5uiQNJM8Az7yio1p4JVfGmZJcQhtUb2WV7e3JPe3xS9HqLyCVfjpgEVdmGrX6fXRWxR1nu3gr1RnhnsygzBGHQEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R3zj5hmFfw8X9gDnBJK1wfkkXwhqzwgZcPMPxkw91XQRsLqLFzjRR4NqxfZjR9aYkCWid3KSDeCGG8xrJffmk9u",
  "key1": "4kFSNtnFepUnovniVEZDDBA7ktpK2QqpcJpAv9j4sJ32KBj4QozULdY4HWFL3UCopZazvdADnwtjfBiaYSAU1HNt",
  "key2": "3ZMwdVN4hnjLnL4AJagMJiJhtiUZ3mi436GJixbjDhS17awcFxqdhrTEvNKnH1sYpwNP3w5o1L6HywN6fpuVhj6",
  "key3": "2kPeC4wVRe8dDgwZRMNGUk4MZaC7PB2sVfZKpM2d25F91NzuafdFXu4FKtpu6WWqTpQdWzDzC4JpmSyR1eSmPhkv",
  "key4": "17MAxc7WNGx3kr6A53EexhguHRvDJ2kMCr1Pa5GntNZzHTQuJQHCNC7mzokXJRHE45KcTVCAtZG6HVgygZt4ye7",
  "key5": "KdgqvykzGcR57RR6hwM8uM58RvcGV3YqqWoBKGy4VGQczkRHnKxm16ekk36mUqgyJBTWv6nUUGqJtZn1rco2KBC",
  "key6": "nenVkWnnxWc5EczABD5nCLuuyZdw9eNqsj8eMLyKZbSNXnHCBMeEgLxxpFzE8TSe4tjq7sFEJZSgpeYfPugNwSy",
  "key7": "2StuAJLD8U6by6KUbPGg38n19yggUJDVMB3tn2ugbp7psWMpmxTeQr3muHBYaJuXTdfuhVPr4cWyvXwniiyBfwp3",
  "key8": "3yYDUVkkU1F8Sqch9bbHNLLzZJqiRPCMLZb5ZiaHpgXuEuVZLXEKsjii84YR4rYkTQZogKCxvgGGM7E8GrHcMspD",
  "key9": "3LtawM1v6BxqXgAkvsdgSiYzfatN1JHNT2VB3Hez8hNCCH1qQ8RZSVMwiUvAJjLjFzVyuvf9Lzo5jnz24dgVgEUU",
  "key10": "47nxLSGm7wbozjar62pv2iywLHhx3ye6QUFzn2xRRbe2zaCrra92A1K98c7Xy3YDabJBGPKPznk8QtCFX1gdbcM2",
  "key11": "3hhw6dQLA2WNbXCQDcmzvco3Z1Q5DdkY4gN41bA8nFojeT4sDUZDJm4Qo1DgRs2EKPZdAdzshTZeo2JiGdrBQTyc",
  "key12": "3WCEX3Vps8oemHr9yfRh5ChnaQqwKVoR6U9tF8ugRinqv4aJZJyKmsk8GVdpx7fWUtmUv3YsgbgnstQxC5S9EZD6",
  "key13": "3iFhnX3gRVLSUuUTqEP8udmcy3AVsQkmX39xCmwvhNyxrL6gkfiAsT3oNGMna4y2SWnXFK1wMLGu6cqvmWwUaVgf",
  "key14": "24PMrdJwPb99YypcLQ8zZF1DeFCYRQWnDC9Fn8QxcNwQxzPfTF1Q7V17vv9R5msAgeagCHewyevwCttnxEwx8rgF",
  "key15": "5dV2qoQ35V7iyHRVgjcQ1AhLZ9WSkAmKv4dMyGGWpkojVfCH3tZfNB4Y3ZGWwE6BkbwMPmKJj573JXpZFLeVFCGT",
  "key16": "3sdUhGmJP1HK9dqmA9ZY5BBCQG3RCWjxTJyp3nhQjHqDnhejqLxXWWKbt6B53G3re17qfxDosytQF3PEfcVCh72x",
  "key17": "23PA3Nhpm9vXov9ABQVLYtWxdtLYUtyo1ZMkR7HKpYEY11VQxxSHcmMeGGGymrSy15aMLagUxGqZjjg1uuww83vL",
  "key18": "64pSm5k1KDrE7YViFsJpgF9TN1oAXn1fFXpvSDktfyFGYx1vybYb5biRCQLLQhCq75s13pB6GM82jKz54aMjFF2i",
  "key19": "2yV97SUFckF534hU4mxWgFEZkmSrn921q4KHN2JabLx1WB6NsD7iZMqAEsGeWgteRKVtrNMQWGGvmurLFrbcSsc4",
  "key20": "47e7ikYpa8YTCX5Acb6HqkmTxDRUrKYLt7GXVUFN6z6sSLSQSKqCAC85z3ifPb9ANGBWxYsymJxozW72xBKo4sot",
  "key21": "S2wMJq6PxvEfZcwxLRuf6iH768hW5GRu3W9L3wyEooXrf4MYuTr9Z5md9K8bK8iSQ92KD3b64bjZjpspBC83pDH",
  "key22": "28UCCjedox5ZJAf9r9haYvbc8SG4BqjxCrnv5BB3jxn2PJREF8wDiT5UQeVCRz5mmsMSJNpARAP6RLf3JNcdNnNB",
  "key23": "Gi2MGTn7g3bND7Aqb2UPqM7Ni6A69s7xnGwExdXRTDYZee7Fr5M5vs8yKSzrTRdCCxFsh8o8ot8Z4kpbaHd4Emj",
  "key24": "4HRPL59Kis3vLCRWFhvSz3g13ffRwEQZREG644nq672uwDTN2A8SsBHLL96E5ogTLXTtdEk6fLDjX9nLBRaGAUEc",
  "key25": "3v9t867LnPN13GTRZHiYcK8dNstyHdzAt42ughaesAd4XJj8DqibVmqAVWPrnNL9bmWhRevBkbn7Re6BRTnpniSC",
  "key26": "4xXqRmJRGs3nzbY6BNU7YAVPB7bGFP16YJnrHqmvPVP5RNRBUiFRpdQhKRejiDasAKUAfpbS68eZGVGuVJdVojCX",
  "key27": "2JYiVPvuGc5h9ttzekdYcmMFGuWM4C9FHvdkTgjyzt9RGBVEenAQ2VSdYZ5aG7WjPPpBLGFdXENZwTVb5R7eKerY",
  "key28": "zNM6ncuVtyxu4wHAiYWv9KTvKNkJFBc9Shh2wHjiNqsYpyURzJsJfizQdgdQHq5JxZBzirKUb46iidXUXUcjqmf",
  "key29": "5hhtargDBRB4e6Pm6bnFNKpQjWz1qCCy24ZkscHweaynj4G4pBJbLc94Y3UgA2FHaZHT9CshtZagxjmc5bHENKVj",
  "key30": "2tTgqnpo9XrcUms6ra5uemtezGLU6N1n6cBhw9G1Dm6EDnUYd4EGgAD85bCHS4Bc7z7qWM6Xn6SZwipsa9649Fp4",
  "key31": "5sFcG5Uth41arj71ximCfmyK5mbgb6eo5iWtEhcQ4vrncUUd3EnoMVnuPV3yLisgih4MoZpkFr1xCNZNppjdup3z",
  "key32": "4LAY9VQVUcWzBukZySh99moQW68eLTSW3Av7pasUY8hY27Hxd5cmAafkana9Spg397cs3gFrjX61fsrG1iszxyY7",
  "key33": "2CEPG6F4pwfRCnmuezQUAUB4mXWRQPJPmuinAv9wrGea78JDsvaLDCG3pvuBboANDZph62FNpoF1PAeuD46udhm8",
  "key34": "2uwifFjXhUgtVh164RcKGTSuE374yr2ZF85GkUBA9hVq1Wgk7ikBDeegCt3u2jiYQ8HvPsbqjpVRjLG3vJoz35Ay",
  "key35": "2pxTVkRMWNQhTKSDVyzip91xKy6BZPue1mFfpBrq9sC3hPcjorRio29osi1ZViv1oJVnhpcTtVdFY5Z1xF9Gdsc3",
  "key36": "3AYpwcDp7xnX9RgyhnB48jgosMd3Ss7JpyEi1CuKCNfY2y8hXzheNXAdHknsaYFNaPDENnq3Y8GewZtWn2swRk7y",
  "key37": "3yW2Kwdy6TYkqjopbvTja21odqx6cJmcHLGg4tkmFEgo9kss6S9U77aKdAwPUf4crizNJYGnBHrsnFGN3YB899kt",
  "key38": "2eEeLX8V7giPDpPTRkP35cCHLKufJKvdh6QnYEe5tmLxhuzpp2xNKL85MvTRrgBf68tYpT8UmhnNmaTmuVjfByge",
  "key39": "3e66cKg9ZR84U5ArVkdBe7h5zz5KdMCywacEWm6tySY6YRW6nzPjGAgDL8cV6vmYf2TXuLjFrh6F1yjZ5u8vmhMc",
  "key40": "45EQnUSbzjG2D8tsTvqvSgt6Lg8v7LByNL8Z94EzQbVVsKNfJoEnYgD4Mdk2R175RKbngyWdfG43AnQNJc1U2ooj",
  "key41": "4RrKjyPNykK6HdbN4kz3AQEkgVEgdkYXDrjFCudBqHnPAp6P1PXENURXjHeUyx4esGQJTgZE8E9L2iEGcRG5SquR",
  "key42": "2PEZAV5zZUhyPjVkVa4RhVFzpy7VYL4ac5TtZqHHgk49Ayn9kH9CLhBSUqrKR3zPAW9ZwWZGDSqzUaSGSUo4sywf",
  "key43": "HA8fCaiuNpibSSomZNsGTvtjYVMEwiz7HDX4jkLZefin3PYm9L57Cojxiw9jnW2SVCukyvNkiffd6eyLJRrURmB",
  "key44": "Nn6fvJBqMTfR7QHY7koivAVDPNBgGUiqsxJcAQqrbRVZLioU1aw8WHLgivR2RiFUf1h1cEfUm9dZXSN5qGA7e1x",
  "key45": "2ZgmCyy3mE1AfSbypjsLgF7sJfUC9oi5XWjPV7hMTeUw6suvdfY1KCWAW3quk3F5xEhypk3oxD1tf6eET4ShXQt",
  "key46": "4i2ywQjA2MBLQaovAwMA5BCbvXtC5V6RChAqY29bA51DWuTWfGAZnJzPsQG26N1BXzaUw922MkvtQhaeoQoEYb6c",
  "key47": "23hHsBcso31A8HYjFxppK3psDrzxm7jV1qs524szQHQ6UoPgmbtaG2AphGeCX1sG6p4ugj9oBTdaCe1vPhJkYXiu",
  "key48": "2BNH1QtqPQ752KjAP5UbpwBdHgCtNeDp3FdmHJNKVGCdRoiFTZ86Xzu81hEdne7XQw1V7wBozeNQ33nNYAfh3J9E",
  "key49": "4KekYuaNa2X2xCMGru4xt3BnbGkK6XDdMXMFWxPnRpUZvRJsE7iWv9WoyR1AnM8sugksJS5jEirdrRT9MWn7H5zE"
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
