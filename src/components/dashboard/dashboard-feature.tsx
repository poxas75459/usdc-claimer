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
    "2Qm4KeiiXY4FEc8jy3Un1xeitTkydoZF5DxDBqZBjt4YpjrjsFBfEc8SGSj7vWk8sVJxZRxNpcwJLQEV998uEwCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aqrxTddp6c4NMFgJFV5bT5w4kWqQysjRWHXqWsmnD6CfkyPVrLYvvKqXJvmXUTAJXowE24JBRNe7Poo2hUYhKjF",
  "key1": "3USRgVANZs7mJYCbNvjX5Y58Qxu4zn6AiKo4yjQs7ijJGvRyAo9BnLKBGkPsDgnk3HmpUQq15YjuvsmRJXTtaPzd",
  "key2": "498wv9HAMLCytsdJUoyQeCaaxUbeNQEWBsY3yzTQWGaf21xHgcg2f6GcdxDLL6tE2GLnnsiqYRmKhRAszTSRkGuV",
  "key3": "Xoxrb6f2UepjTAQVrH2jYo85oBPwgt9s1nQmuxjXq2ZmybJXSbQoAsNTQqKPQCv4XmHp8AcgKEwi9vkEidDyxb7",
  "key4": "2GHXYYKaYvn23c8yZc5ocBN8kLJiLjYdTnf8R2iBnoXFV12xRQawh5LxYFxAuhDE2iFe8BToRdKPbyFumdzdfd5G",
  "key5": "rwihuhqNcJMC4LankLz8xrysnkb1Df4UbcrJHrKTbg1ti4c8GD1vjS1FXGbJ2hTkQQTgwVNZfqbtvsR7M6Ueji7",
  "key6": "5SCt3Zhcb7D6XbJCY4AEz76sQ6T4tTiNQ6We5N64TRqyzPr7brdbEYJ3Q4PNuaCkqTSvTe2Mz2aARSJ5xeukmPjx",
  "key7": "v6FeShsWiHUDMp51Ts772CsMrgVhAnhKZSxUZMmsGhKQeg1qhksnWiRp4mjw3y3hucoYyF5h2Qih1yzwN2zAJgs",
  "key8": "5cd2JfMAx6bGgBX79s8sfaZ5svZdMdv18oWfxnVWETyBBSHcYzKyHfsHiWr7fuD1yLdSqjNpXesie2az2CcmQM2t",
  "key9": "DwPXRCwtLkpTLCwSQPEkFZUMxwTsY6fNJkEFfT7oJE1V5XweSuPofHR5daSAJGcU5b1RfiQAgPFaVhPzVaxTpHQ",
  "key10": "5WuPfMngjD2UURUxgrPVorEQzjkMygVqpxUZybY5nhPfissGEY37Dcphjs6DFyQx8U2RL63fsUi4Tp6NUuNBRpFG",
  "key11": "5GnutPDUtJPdL8gy6gxhWUogYE9X5Pp5GRoZ7bt69zXmegnSuBqwiVZEcNXz4SDkX1Shm34kYhWfYofwHyg6fZqa",
  "key12": "4eaZRJdX5JbT6riDUM6PD7Yw4w4z5cMxDokCAtSevhBfGPnGHHxR2SpN3JM7GajmJQ6wGCkWQtEnwyB8hKwVPj3C",
  "key13": "36RMMxSC1mCTnX6r4b85fS7pCiSG6kCvTTrZM1kY2yQcCH42fzfDXeo96vmyWgB58BPDWdrM4kr6Hx6c5Dd9T8VY",
  "key14": "WchSRbJGiedgjS8uiYG4na7N2WbBKKLvUrku9GxKK9XHnn9tFxCV1zrDwS2DDXHTyeUnqbq7jb8Zersko94h7fa",
  "key15": "3ZX7bBRZxtMi5LG9KiSfGR8MtkF15PPBh4AacKfhg83Ca1Eag3Xo39pHALtSHiPtLXAKAPVPAUaPFEK8cADxydJo",
  "key16": "4jbMCpLim7LXXfaEhtK3LrfzC7iSbLn6XdMm4Ps9mzwXQBCKX4Jee6Xe8AJUbwMq8vgFcn21uvephRPncFbigbZq",
  "key17": "5egywhFqWUgmd7GhsrNtbJztPuDwVNVqLs1S7LAAd9sQEB4BRofGtY1iSjiKVTRDmR3BNqxFhYSASoSwKCUwX6jR",
  "key18": "3u8TfAT3G3p3Z1QrRQdfiyFwUL6LghCVZTudo9tJdRdmgKsAHEWpNpuxkutJCXsDUFhZfdb9VZY3cSuj5VwyMzP9",
  "key19": "3VnbVDYW5txCbJP6pYSxj3JGq9wY5N3pFNmE4HLxjdtFDF4btTXbPiAumbKNLjHqxNuaBwnMAb7BX2Hv1upv1tvG",
  "key20": "4Z5mXKPt6tcTa9oC9ML7qzQFftVL6mVCZuu8effnSo5MxMejA85PL5fqMCXa5xeZcmUXMXwwcX5FVHrj1yTsZNb5",
  "key21": "45SgeV2Jjjb2z3SK4W2LTfshKVMe3fbYnN5AzZUsJgGLBzE77rBiRaG9wwQSm8ksh6AKFcrf7LgBmfYtPJshnYwa",
  "key22": "no9cEzaokkxcrfuJ2FTcCgEZX9zRETAKJWTgbDkZ8J8wgA4TKX66ckfKdiytQx2sqGYQG1UbjVW6iLQJFSPYN8Q",
  "key23": "3bSxHfsid7zX1oKo7urMPeCL8RtbvogyphBBAH2jyW2wpZRRcotJXr7eAUbvpQvrZbRTmNK7Pz3uBee1QUghsRtC",
  "key24": "cQXVTkGvHjueiV6TPkkEUesSXmFUsJkM7heFufrLNxXQf18gwWicMpLyfUFzLCXKEPtSg353DenxPqBSqf8PZ2a",
  "key25": "2AuWSydwK5eRNer4eUm3DfoXPo1pVrXK3bUJr9uEoxDAWjq8ud29NGoCbn2y7vREAboF7KFdAagdzNnixXCqm2k1",
  "key26": "dZzi8VuR24hjcv9ncJGbXGUFLFKz7agMhW9wo1LPegERwtJ6APq4KSjc9e71Bt3yJayV5fK7D61gmH7pQHMJS8W",
  "key27": "3N2pXAXXp7RHDqpCi73CSR7jJJ1e1SiQ9np1ei6URyp2ykK15SZ8nzPHhQr5wbrZLAdqzjaKwrLGnWy2RjS7D9Pk",
  "key28": "2YEet1Q79BotENZ6WeUPUH46XJJrK4vC8UzwwypX6rcBmQfsTZwUvKXiT2ck52s2v767DjTeiH5wUFC4fNGBbMwM",
  "key29": "4UuqSh7zzNhPStH74xMhURMgKMq4kbmqbJe2Q44XUDU5sfDZGERcnx1QRJBiCBHGHAwrkUDYbpzYpzs4qh9c7KuN",
  "key30": "22eTwCZgTgdjKXhtBSvtBSSM49Qzc777uKpi3TLGzkAR6q1E3mpsLwEhXPifRjaeJYVnfKUVbiYy5kUipPPh9XZA",
  "key31": "9FRRDhRe3emnN4DYSej67YQSxkyY9C1GsvYkbzUgNqEr2sPWAPRGgDMJcjW6fVAqX7JmzmJ2PtPcsA8RzGwX9Mq",
  "key32": "55zXyh6R54hffBJcKsaD8hm9nB3aUQPCbhWVoPE6CeXXbAWBaJCaU1R72zdXGPt6ctzKJTYFCAwSnwKW1s2LiUQS",
  "key33": "3z1QwgCfGLSh44j17ooFQMVJ4aWLd4mETxZKeAqPVWG8X3nghPmq33oL1pFnHws5oXvpPCZAgpJ2ovQyqkmVgMsX",
  "key34": "4SddLi2yjizg6vGKsNyKSS3tG339EoS2HQJmjx2T616nmeBEdYkEGuyQGdnWC3mJhe2qVmdzZb9BUfzMGkM9ZtTU",
  "key35": "rGQCHRSZAGYg7TWvvP4B5SrYaYbYfTmNy3gj9jaGsMzaw8KuxcnG6uGs67jHitLSDMeid34KxSPNu2toy7c1PzJ",
  "key36": "2RvS1ERzm3W4i76no2smEUz9afNk4KcWxtg3vBnD83WT5uM5zSf99vxjHkmYAT6VtziBD9prXtcHjwXPPKePrXsg",
  "key37": "4NJjWYxVFSVophTY6dxhQW4Zkk2D2qhCwaMAujCVXauMC7dbHFcQreUuCZjXrf5JsrJnV1UgZtS1749NJ2PTTVbF",
  "key38": "2Xg91TLr51xkMmMSfG59oy6Lt9Myk4hEZWFA8eiUhXKHgELRmXs5DKje8G67kCmMDm2kJU1wXHuXYy6AszHhXfCY"
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
