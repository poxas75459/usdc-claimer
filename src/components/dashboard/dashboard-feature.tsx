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
    "4prVfe6hs2iuzSb7UjrM6A31KLUn5MoSxBnZincYfuoTUcTmRgGR2D1k8wMZfuSUnqJuFyCAdzYzXPwpLJh72Zgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U8TgS6QzbCaGCKNq7qRqqkf8pCMoP9KpB1uuRTwxcFf8Gm5oJt5jJ3FDWcHDL8RL5tfBrZJkJqrHCvXqZdDBzD2",
  "key1": "2AJeD9vZkCUbL1sMrssjmUyvs8mskvxkeHuFhZCQpK9gygJsG67Hr6Wf3XvMegJhspQBSV1gLtAqM3rZsnyDp4gi",
  "key2": "62UNN6uHRodmUYAcbii5MPv4dbSBPQG7EcqJpuyXJKoSrUzF5enxAKCBpnoprPQhMZqnaxGiWcNRMWRyqWpgcWbd",
  "key3": "bQh56NegDWKVkun7By7WgeGz55ZBHE9q7iWMhRak1y2mvvqnDwzzqx4W9T7xC8V5tALcsncUVhGrRJUpaygd5JV",
  "key4": "4VKYa13PENi1XxZeVytv6cMRLoxwKWt9JjaqCe5EXTppVoiPd6nAYbpXAdFeHctErrkLvyZwZr1EbqPQPkewURqQ",
  "key5": "24Zg1jFjp3HsRHSqfsWtb4nRhwwuwocgfJSnN4gP9VfMK2ErxSqbrw3JjYrWk1E7TYSkcxfWk8KLeroPbALeDJxF",
  "key6": "4vahMuGQydV6oewb7Tb7UZEynWbgB77U3H4C72ZzK4w2Qc8xoKWipHbUaeusSHwqGUFWzdEgSJ6KDFxER8wTwmxt",
  "key7": "2w3rddvFHB2wnpXdPPN1oGVwDfVqEPMYvSQsK12ZRXSH9RNGT5uApHUEMrK184jAbCyd5tnynGRBHh84P4cTo8cT",
  "key8": "4DkjGYZH81cmVZTMwat4Nywr1qoqsRGNBxZHKdHYFcH2xFq9xR8bSGWePaZQfEw5yFT7wyvkBT97gCcGQEbcQrsE",
  "key9": "3GTXKq8jjT95efGuePrr1v7VHAxP62mLPmeGNtybXWaYwtHqBECZX1ViU7aEcCbJZVcSarS6yNn6iqz5gQKpaViq",
  "key10": "4bL2oeRjV1hwajehAorbwDseruePskYjq6BKuaGp21Wci816RVKNbx5Md8rNeEfdWGYrk6frupc6Nyz33jEEbMtF",
  "key11": "3ruppQcR4vuKN8ocx8M55TPMQ9yZ1jcbUv6kPkhqcz8KmhxaxKs6Xnfnemy3amXLtcsiKxRXJxzxHVHM4xBBwKEW",
  "key12": "3aNSPoRPHuQJeBq7JCN6rgAQBJDEq6boXGCk9VD6WT5EqzbtN33GGT4Pxvv3Pw8j5srLcdYotiyi9GXFKFYSX956",
  "key13": "5LGCepYYUVJ1qRNcFSNiPfvQvZqYYeSoYPE64Z5MQMGaVVMg9mzSJ81WyowAZvp1Tdk8dGzPGLbefSpkCpatjqGS",
  "key14": "4pfrgUAx7virkmrVpUDbGt8imriseaT6zXhcNr12pcMqerKJ4hLdNRgmRGZTtN2hgGMdTAzALcbiqxeJwGypjLsE",
  "key15": "2ofooD27ErtZGEepu9VBVw2qMX9tN2F9STuPjYLUBwuNf8ihuSjUd1tXT6NsBxAsxNLsQEknscKzvAFHTiYvgZAq",
  "key16": "5B3ApR69FNAjREEVxZrHje2hxaLDLbEjC3FxRkVy6fcD63yWp2ds2AignzqtxJu5QJtgELckSh2ZZfrx5497TN1G",
  "key17": "8o6gxnMjuzp9pZVcBdmJe7S6GdgEhDFHfbqMs668Y4GJ9cymFKcvuAvMcNXos3rveJaGJKTPXjYg9YfsFXNGk9z",
  "key18": "47uCFuHAWTNEwq2Ucb7u6QKiuzKz3anfpfRdNgVseZEt5QPhsptKHbpyq9e8ebrqEzsixKVtVEtUUxy8vMhxmp4V",
  "key19": "4vRn4XhccS2iM1Tnakk3eYJW5bRvC1JJZjSRidDxsGieWe5sMqt8jbhDyEkYPLWscGyTJA25pyddEcuiWqWZecVs",
  "key20": "3ChSE7zVc29sgWsXsUgDHNn4TF2Tbrz7EcSXfTUP1DYEtmdApt3x7BZnqJcNrGwaYzwrmp3m3B8tTLF7VZTQc4yg",
  "key21": "4Pr7ZgyNPw4D5RAkrpvuipzMq9KXPqRXWiSyV2ivut3dGp88azfx9XeoQe8TWkMQiiJ78JiUggrQ7zHBebV1T9JF",
  "key22": "21LeatinfVs8rtBJ4mkmELKRA5gXqTXa1GtHmNxwV9ZwkgFUpM4heapSVKes7EAiBUinVcwyBit6Ls73Pgesukcu",
  "key23": "3Wg8C2TpbwYp1ANaEtWeeD6o1HM13p9gmk9NsKKwibkmGfmpm3jLosJMttMVeKc51xpBeGxs4FMvpUEXGQ2PUZma",
  "key24": "9gktrTmpEEYcSYDrjynXvcxTAYXdKBx5RnUoAXPBj5YFudViQh8Hn1sb2pETLDXfEE6yM2MQBvZryUH3fWgHAGG",
  "key25": "5PL2UvUGkU49rQFfEGTFaKpxePjBrBQ9fwniDU69VNgdLnt4KA4QaYV7eZAvMYLKPeKvjAxFqiuDCH8u7t2e59EM",
  "key26": "PkwxtXGQ1FcwrA4KGKPx6QJQrGYZfp91REsqEsFSRZATzvWe6b6Tw8NvCigTavmRPUgAhSPHCyFZHpxFCkq1CsN",
  "key27": "5N4mF8VgKLqgUPuTsp94HHCu8nf3jUMbWQqEHDPSbX8zQrihZJv9FYSbdDsjBxLCwSpGSpEenPk34QYkWeY89Fdk",
  "key28": "5ce4L7MjXKcxxQVX2Dsg3Ri3dHS7GVUsshy2p1hqk1otmvBPWLmNw77ioBLuSmEKrafG9PptA4tJ3fc47kcdQSgH",
  "key29": "3ccpQhPSXayL2szVpH3AHoDD9FJiqrHuC3eG6rc2jE7aMpLeAC4tGXeSpKt8stpUFtWJhtgKEGnCZe5KnD4X7gCJ",
  "key30": "3gLVr19SjHBiktfrxdVJeWr9ztTSTBVMbu2KV8GQ5JRpKFMSTgb2XH1MYUQDZvQs9V4GcAbLNgJvzxQq6vPExwEE",
  "key31": "3Cc6FgVMdJ6VQZxyQhX9gDhQWbbz38C1L5xnsK2ckz9BJysjo4qgACSEsLtPE57cteH5oT1VMgkGDxVRn8jZVCQz",
  "key32": "4uo4goNGvq4wntSwTpJ54Ce8Y5fEoj3F1SjbjsCqgCVFeLXTX2pKWg27Y4kQsEncztcSXh57EnGvcyJP6GKB8JQB",
  "key33": "4ZVACkUoEyTyeHiNMkYuqsv78Ao65eZGbepiGtLvNc2yvQjYpSq9ds5K1eNML28AUwewo59NW329UCYBecgbmtnA",
  "key34": "8ncJZYMJMrF2raN4peEXdYFio5oADoXXWSZR6VMPZDnwUK4FdrAsWgzjU8wMG3hYhB2QLMqMp8xEX2qY6NXWZZv",
  "key35": "2UQDQ3Y62ebEGNRrRg94bZJ3JZLDswWh1fVmXmpareMS9JRdTmzxbaLasHqDeHBwHpgKwbT5CvjdA9q8kLnB6Amt",
  "key36": "3QEVctmzPb17N3kaj9sBVEcqZ12ncYxVyhyh9meuSRE56SR5Bcv8uM43WcA87nJKdgPwuSCrMSZiJx1Nh8Sa9rWn"
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
