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
    "3SG9bDViBsqPw2TMNgp1t4rDCXe2nu1UfXPb5L45gDVoYzcqUGAfJvvNZufPcqDwR1RLNdxNTNMxjn4WmScvUJBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58n93Y8THJRsAGTx8aWWDMZd6XkTNHcYWkEPFb8JPpDvJ2d1JW43nfximGnfLB4pLhLo6gYbP47y8U5h6C1Lk2fx",
  "key1": "5ECYV5VjHae4s5S9S6xGJTk2PT8LEQD8XTpMppxjHdhJvm7n3veCQqgH9CCMNYcn3U8b75sfGSks5aEMZTeqXPnd",
  "key2": "2ZPHbhK31MSog1scEQ2Noh5pURDQM2cRS5xGyVSCWTomsuJ8pfmgttuA2WomFzWZg5pK5oqL69Y1FxaNa8GSjH9R",
  "key3": "4bBpDQUEXj9r69MJH7v4cK5pbQRvAWu9Qjo24TXeLHqLFKP6Bt3mdZnHC9uCuYGghXDcXcLbKoXWV21ZzmVG2bXT",
  "key4": "32rEmZa963vENpeMCw4YDKFuxDaukvaQqRF5fdU9izx4vXG9sqD9LufatP5UTHqHQvfCASTfFz8J5UvKdJb2bfB4",
  "key5": "5ptGbXCV8ubad1cBrHy18WGFcKAssar5rXZhajh5SGZpnSz7CQqW7P9pF8DuBZz3AHiZa7uL91Z4S7PNVgLH8Rta",
  "key6": "4rNAu98q3BArqbSmwr4i4iKiB5z7HC8P7zRWphVYfCKUNqNTDGbfTJUjN5PKe6sAZRQ2GafXGrLEQqAKGG3vHAh1",
  "key7": "3brACXZPneMPBGzBvqqzB87ZhrXSFFoEa4DPjrWucWVmcKGJWDwAYZnnykkkoq5MCa7RHqv3zFirSZyQDRMLpf4f",
  "key8": "2v2KD9aBgxcRLuVnNYNXdvU1AE9P675Fzdt9H933Nf1kE4nidNZmC5NkjMWbgar47xJpw9cjcyMpi5qiH3FUwiPh",
  "key9": "5Ksf4NVukJfQmF5xYaUraqrwYgMVZbnZswevQWLpxbJZ6LRywNNWmuYGozdmkbb2dy3jVNijMd9p5QctfER9vmi",
  "key10": "31ZVt8HEeTJM7Jjr2y4pcLDq7f1T9LKt5Mrj3nWg5EpMAnw77o1KxtVDQLvXjcLA3Hx6rhedE9oaADygJU4LVitV",
  "key11": "2TT7LhRGkC2AgvmKmfxTPyvPdXqyoFvm6XW83BTdtpFQGp7pmmwiDPzS6tP7t63ZDFAEHDkf2U32PFALiHWqospi",
  "key12": "DoHoLpUZoxkDoAo7AEhw4HC6zj5SicoijipAPX8HEg6vUw6LFwKs1Bt383RbjvmQ5m2i2Rv1h4X9Lagq6bLQSP8",
  "key13": "3qmg9sxrf7RVpVNdfUK6cniTDmdaQYUEdoWNpbaUF7qbTYSfELU1TMPzRL3kdBdrSF5FTjCK7ZUdwywqcPuDvxax",
  "key14": "4EaKVzCCgaZB9e3KukNR7pw5Grn6pYAhdFh2Lqzc9Ud7cq7n2CWzWMCYSphymf2YDAgP8fZj2v8cp55LpVmNd2GS",
  "key15": "tLjrTTpNVYxmjt9ZNS596uSLGW5t9VeJu3yfgoPxnTb2MbnDnt2cyLLTP4xwxdU8WRTcJpcBfVQEcrk5QM7D3Ni",
  "key16": "2gprHgzfPuccGaLu3rXR4ruzsLM5tT9xKHnfgiExMpEBbA4AdYmzVHEDFuhm6Guc7xQ5sssM9Wsov3NyEe5nVjcm",
  "key17": "4R8ZMj3dG8jkd5pRb2U2WLGMgNZehKjXJ8V2V6CnJcpZpn5f9HTegkKfVyRq8MgfnPqBwMPV11CwuC6AqM7YWPX4",
  "key18": "C8re25werYvBzq8GNnEcf1EwmudEKnEN6fMmy6t6LxnmgZe1ivFPKSXDurZrkoo9NpukpntWCrVbQjLgMVeS9zE",
  "key19": "2zMjcbRpDXeCPbjWdEzXtKyKXPhmR6GWZNFpRGukdKFPMWrvzFY3Mjrvhcx4Yu9AqLzVEBqiU2D5yVYqtGGdAFJK",
  "key20": "46sucG4x2von1tdPxchdE3Yo2YRBuYjo1sfH6ANj8GUHXa5mintek33zCUhZcS6RtivGXFgMSSiXktsRJRL1haCC",
  "key21": "5KvibejqHRo6G2CDzZGu3yjPqikksZvA8ojNVqiMheiXwErJZ77PYhJfeemxRvKVRBMLQSBvZBNxgCXnye7zSJuf",
  "key22": "3MbYqqqKnpxcHSkYx8775mqjoFAQgcUWjDi6db2p2ocQDppSiLHeoxjWYEwxjhH6iLbQnvfTAkKXWs1r6ckHAMq6",
  "key23": "2EEtckGMS8GX6j5PBfEP6pcWwPqfJvCcXjxuEzj76918vR1dGFQRM7suyVnRPcMvP1yBMCKsgM1cF9VgWdrgXmsg",
  "key24": "4hcW34KZxPwcgicWZcBXnxdE41fgHkGxhUTRQQWWsMoahT2Kz5KgWvwzpM7c76thubvCmSF7geEvKCdcFVuSxyxo",
  "key25": "CHU2W9qcYiTPLAQkFmHaEuQheVdxi7H8W5SLCD6qFdovGKFsas2KQirTozqCoiS9Eq3F6tj3kEkQLTofvSAdBzd",
  "key26": "2qM1pNBfiy7hJDkQynkv6Ycx7iHpMTw66c6zJ46W9261AAeJYGZHEv2hZcBK4wZu4vJnU47UNcmCWe68bZ6QQkxg",
  "key27": "bh1ej5NZbVUhqYxKgP5Mo12PY8Nz4Wm8PjoWhVyWL81QcfDVk3bQHgdSMy1EjtxBRmKCfwU1JuE4LK1rFm7e5p6",
  "key28": "5MjjNMADUKTGEVfJcbopif6LQWgkfkLQwCunac8xxzMyionwtnsijaQAyDWkPoccSLS4CiynmnPfMV6qCgQPFGEu",
  "key29": "4greMJ7WB1hRjo9fUMoGe2bnPYuH7HpVz53jDMHusS4rGpxCwEYNQd35Y783rm46nEXhLdyn6tZu5iHu3dV7D3Xc",
  "key30": "384FMQhv3kwQW7wpby71SngxA9WyDssZwHdYAju173TYTSo5s8foukxH7nZPrYRwK8T8JghpUrYxAniHvx5XfWeL",
  "key31": "4v92jBRVkE4Jou5y1gCriG5cRC8N4byc7aWmcwhzj9coc4cP3URci43q9CMhZe19xo5kEKtahqDYnc9H5DbyAKr7",
  "key32": "4u4zyQMryY9x9Cto7t9NP9SjW5WiK4mTMGXTsxZvqdU8VWwQQ4KjYeivEoJFfUmAQTwYQrnhUU9oX5L9LdgGRk8V",
  "key33": "32yGyaGXzxFSjMVgqdWHcRAbxN2PT6tWc6dQGfzH2Xc2DRJJyrEX9URgT9MwAsiA2gT8d87gzoNaEazvLV1D9i1W",
  "key34": "5wM84pfRN1QupiphKj6wVCbnhZeVH3vZXqi89Mi6xJepcZDyTnmPtRiptXJst4Jifgiz4wrzg13k9G7cngwRPMbB",
  "key35": "Nh2kPhVn3Bm1yF6UCcLJh16pktFJxxn2ngwfVPpvbgKPx3btWqfovCinfSfKo7fK65yo2SaiiVWCmBjNP4uE3BW",
  "key36": "46NBUse3yoAnmg6uEeknoEjKT2XaAtA7uibs19iXsJQTa7gAeCdZK1tHpuFA4yY4RDt5SEyGB5tbrXQEVpk3Z6V7",
  "key37": "5GBv57J6SB3V4TXh8LMpa46PBUWP224TGJT1FNYj7FAU6kAXZ7PE1PsLz8q8cRRLJQ3QkzReq3Bmfo1yqR5awmMp",
  "key38": "5PELf8YT8akAQqQk7WgH1vKePNxwrRXWaosUvUTDYwh7LpNAE9Ebj16AeAbJ1RHrMDyKDhkEnk93D3CxiA6dHwrk",
  "key39": "3e2UQLxnwUntHB72bzDQcd8aEdLdSjEBbgFdzAzig2nc5ZVZCBsk4xbnC8zmj2LvdMgmQL41thD4fMr5ttNzuprG",
  "key40": "3n2BZcLv4N2d9Am7SRibJotA1v5YuT8AfDvCfSuCKxjoNygMHwA1S6gTPHatVSMAb7kKQhTzajK4N8KbLEB93zzG",
  "key41": "5qwm6WphEb7DxbJJap83rt4hTQ3CCaUwi2h3m8LrFBAD3WBXCk6E4yVXUS3nKuW2HFV27um3HFzguC8Swgv3Cabx",
  "key42": "4D947x2p7QCJXFKJPc2whrfekCuAXXxUqNMuHx4SWkAq3iK1q6KAGutk9BmdUBaAJ2aAUc8DgLFMMr3giYpubHuK",
  "key43": "5LNxRb4Z3hxondV4gGES1ampkGFJ99pk3zc17mcNUb1biz9wz89zHcbpjMEEVEoUjUY9QVFfDS9CLPDifts46rZs",
  "key44": "4bKyaM8RVX7Z5swN1Wa6XxKXR49vMVNQZiYu9DkAY7TtPebm5usPHnp1JqMwSSX42Bpf3KZwwJP6XCHPz2Tg1w1R",
  "key45": "4qucHJh9U2dBYb6Pg4bKmjfacgBiq5rmSwp2AijDFVEQP32quW2Gx3dHvdXKrDQf2f8xMPeqqUFBqgA1XjHpnPih",
  "key46": "nUU8hXtGeE4k2LyeJkaM4QjZg8MLzA4uzCzdNVn4yfm8QbAN6r8wZHd5ihwrs7F1c55TywGvrRMpmDkoNU2xgzL",
  "key47": "2eAdFNptGg2FtsQhc46y9LPi1JC244vC8ZNGveuHSqTCebgTHcdsvbkspmS1Y2YedQhLKS2haNrsgAVaWTYjN1yi"
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
