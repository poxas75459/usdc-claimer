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
    "5tpKVujy5teej4CaGBNsWr6wernZBJHyWnLkzAmJW3rQfwx1fBhcuvWYx4QpesywnSuYRXHbE5KcMGfLThsCCqZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65DBRvo6yR6ThKxN2djTSPVrGRuPrt4TAUDrdXhjjL9N4BFZnfwfdDSZpoVVp18kF8PCTLvty1n6LgwT8v64CTmk",
  "key1": "66ZXz9wjLfLpCrsiMmxpkF3nB2CSUkMkPXaBCxD8DGXJEMe5aMmWnqMyweqxnPo6wwCn8Z3BjFgM2djpEYZ7p84H",
  "key2": "3X3LxcopE8dKdCErSQohgkUBbyfo3s4FF9EQLQDLHup5Q311qUitY9zVewmpZMtf7BdGLebordQybdJZZYp7nCxB",
  "key3": "4ntaQC7Ac9ExpP555F6QNTc2U3NiHGMoaLTv8Z8zVAPKkSxjwmkGogRCENtzm87Y49ytMpUR7BYFQ9mxMa4Ljj3X",
  "key4": "59NcTPocf5tUuxKbBLw5nEqDvSdiLYcqfNGZTMCMhGjft4tQNpD6UxRnJXdwb5PpD1fT7uynZrnHi6WeEPijhKrx",
  "key5": "4oyozjynYBhprX69ePmwCnVCQYpoYZesMqrDs2xhc3WuBM5BUnzpbuiMTSTHcZXba2EtLy6t8TXULCSidw5vyPby",
  "key6": "3h44Rm3wVwwi1Wm56m3rGuTxAKyoqkxTYbN7uxoUqbQcivLijKs9AFxT17CE9ahncNN6G7WQWQwEnbiMHbmsG8pu",
  "key7": "4teZrR9jNMDg42dv6E19o963FXiw5TowyVshfwBJhxozyo9GjKj2a3Zoh8XBrxrYxC38mv85YciCzbrV4xkwZVxs",
  "key8": "YKi8LY2SWMo1PA79QKNujRjWe4TkGXFjGjwnNupP2TArvZky6xikFbrmzgChF6CuTm8ZrD86S1jvDAYt6i5SqeX",
  "key9": "4G7SkqDtVstyCBdMLpW4vP5Dam8i3xrEeBfdgoNEa5SdB2q8ScrcajnHbd1beb62ThMsQCQMPWu9NnweHvyrc5pB",
  "key10": "AmDi76HCxZ5pf9q53ENAXtpn8oxsMj1XP1oJkDcpFsMWpdxEZHRPQk9GZxXvKe5A968M3AYdPf7ESQxAfXj1iJk",
  "key11": "4dnc8u5NcfqkJFSDdsiJpH731dsJw2VQ3xHNq1R8gt9McWLWrJBRuXmL8vsCirP6eH8uRnvkToPV9fe8TncKx4a7",
  "key12": "2VKSeUGC8bgj3Y29rcHpoHa1PtSZEdstyf2irW9sWLaB51WxvSpcmU2oVwurNLyJWp9xzMU2JDEFRKknKjCAe2MC",
  "key13": "41PHBKUerVs9kZfLe9UMrUiqm1wBERYVFMEf3V1DLyc5XXJH7MxbzVRes42xeDKCUxsMDkTYsJegPaWC56jiKc7P",
  "key14": "2U8fqgMpmNBPpjMyugW2WtH6yEvtywPmTDXNY9LUQQi3w1f29EFL4wFKbmdpqeQ2HVY6btsWDDgZkmjrcQBu1oES",
  "key15": "3Lno1b9crvRe6cXN5qDLtGjjDxnG4LY4AyZqcCvukg6TussujiAHEVufyfZKLh3CHV2w79iUp6QnmEe3S463ojFv",
  "key16": "3QaCMJyMpm4FJBwEDdFufChrD745jcxrzby8vNuSvgHqzbqsKd162kdxuJMfB6HrhcyH1XdzCQSzk3uUxQZbjxJo",
  "key17": "4SSK1iXzzg1rQXXUdLMkjmWSgZKz1qVWQ99zJu5ukQNDBZykLzByXCsFZXgFevEkHqnbvCfA1MSdPBYPBr6ssskh",
  "key18": "29gh5JWeLQArPXjKLDsTK18CieQ4X6esJPuwyNGAeKdUMLFXPQar8VJvKmcEm78ccCpqMNShL2VEGSajHvkK7fC8",
  "key19": "5oD6LzaVMe528N5EVLm41KEFjyBoX48d7MW4yLfLArcnGkEvVH5q1Bp54Z4jQefMsq21smmqcPc4HFn94PHybYrR",
  "key20": "2ey8omFCXoYF1zdvtVijakeqrx2ei98z9woVzzFXQftRe6Kqbc1rX9gkPmwdAQyAMWtceXv34ZMRbkTBdS14roBg",
  "key21": "9cyaL3hid5dGETcbL2LWufFWs2aoipCS5FeFCDQEnHCPneCtghy1QGLAtKAWybKwi5mr6Pt73pFSuyYhWJsmo1y",
  "key22": "rBpE2AF7mHo8KMMVgRMV5ngesi9Afg5kAnXezNhcvDdJZthcctC5v5549dsiYbX9CLS8TJo4rRrT72fz74rhZAo",
  "key23": "tS5MasUU3jrrfmWQdtbPSEDTRMaJGTrSViJHhCuSMa6thV5T6njGMZGBjX21Q9QtU1FLnyCrdybX1uov2UuSBnj",
  "key24": "TAyQuiVUTVz7oZKPtBb4Kew34gTsNZgoZ34FMBLcFQKTP57KFvgJf3m62WG28yTXnLzy5ZDAPb6j5qGGzMBUNZX",
  "key25": "4hLUSxmuBXPoRFoy4aLAATsA2zJ8SvUhb8xnFLqd8t6Q5P6f2PRacbwhcW2euAAMDaQvzrHzBmhYUBd7WGpq68G5",
  "key26": "1m2SXD8irxEjtTPQNq8qrcmuQywb5NGK1ZW3DSayASxhxgq2mCaiX43y5PkLMdiwqYWfP1yuJzyEFUfqNxrdDZG",
  "key27": "48jJykQ92az4pCQYxHXtSTko9wWT1hCgLQy2xUw8gkhmQBKj7NeLMiKHUnmabwZ4KpyPhH1ddLCd1SytvQammoUx",
  "key28": "3jKcakMQeYEyKppzqVLZpcf9JhdaqheF9XJb4szeYjnQCwVBoorgXL7sHZM8XfBxWPZrTJbEyXdc3o6be3Cify69",
  "key29": "4V7fXLVK4CkJ8PTX4DkxdWfVdpjDWPyjVD5rwYiAqYQDwwpdQ35WR2UyDSQ1dJBYjqqqANrkGwvKTeRJBi6Yj6ry",
  "key30": "5Uh3FacSHXkWj52hYab6VKP5z1J2HSWV7WxJRsrehWoDWwibgRmc9AyRDTFHtUB99s8VA9S184AdHBu9rt2AtCMQ",
  "key31": "5tCLjFxioATRcKHpcGMeMnn8BN4EeemxHFfFoq8xiJsKnwqvrDwUvjesofmvnLDDrHLBXHtXPEwUw8Ymw7AxxEdi",
  "key32": "5SuDAyJ3hv4HkvvJVxPuPTSYMmzXv6YhX3YntqSwZuup2CqfpVY49io5nHxEWurKDojY3oASPWjGFnbzSntAp2kQ",
  "key33": "5d1zsKw2BKceTeAMxqKiR51fstHsipCEXa4FQtKQzocoHXN3XBrWYLG3LiFbksYGdGaW3Y5SyR5Ag3M7EH2iQV9s",
  "key34": "31LxgyZvbSEb3sd6Ryqi9SXZua77zvEZVDuVi9aon7tzFUfN644n3wPLSeswKBKQb2GpzwF76y2RNJ3rD6TTa82c",
  "key35": "dDDN917M8Wkazk7kubuqR65DTJvqQTNX9NszatoJqydBeNdW7M4CVL96hq43kw2uzxbKiYF3d8PwfV45St27qdh",
  "key36": "4he7p2DSsD2rDRH1w844Gyq8fJe3ig6FgdohVkXyNsdV8BNHBzKyEum4sY2LyGGw8cbnA3C8zSmB1AgbwmeJMwXN",
  "key37": "5hZmwXy8kZuum8Rhrsd4KynZi4VEGBy24tDDK2uvtiG3C3gpRd2M5H6YhG27wasNTL5mxinQsoJWi3mouK3mVRGs",
  "key38": "34YEd7VUJJrAkapoKw6rYXX9teR8iHhkGs2sSWpRj8XFh91TVtq2RXkAfTAyibjKthFNcs37TKL4hUzwJsxQoemi",
  "key39": "2TWsByFApk6WHUYh7zbh2omdpqfwAxjtEM5omo7o1niN3z7P2mtYeNxofGMdihPhfiq5NNnFeDY5mvmBszTimqng",
  "key40": "5qSUzLcpZw1ZDHzceF73VV4FB6ywLKoNSnC2vYk97xHVvwoqWHMFFAE3Nt73FbyN7EDGrqgqtWFDYr9pZqYix9c9",
  "key41": "3aYuQa4K4KHxgozyCDMcE9P9sPpErsNcU6AtzEWni3uLVr1j9pemCWT861y84d2nzfZVxvE98kmZZuAGjcMRdMQ9",
  "key42": "4Kzw1qCGBWiBrnqgvasXm7wiKQLx9W6UJAdjMzLPDxDRPwitw7spPHVL1Kf4aqcQd3gUABRER6ef2msNmdU56F7p",
  "key43": "2FEHWd2AZY6R6P5byuvKtFhe4cJE5eBY7BPZ6uXaJGViiYWLG7TT6NTDNH5Gy9DdSiFoE7Go47mQXC7BVVVCvTPX",
  "key44": "5GSVswxUUizvtE3GYDwLH56EFzmfMha1vZJXW7ZsBmxKg3eKkQFAjBDxDXw3RoqTReXg7V6PDuHRvEGX9h22djV1",
  "key45": "43PJHjDvyGtqUnRTPJvbAFaHLpaq3TEM1qXuEa8XQuRHEEtE7estE431JSfwGsLsq7qhEy4q6sfUBGCREzySfsaZ",
  "key46": "28FmkrfuFS3JNTi6zwciMpGuRZ866SNY74u6sfgEcVQK9Exqh9JvVyL9d3cXWiHjrp16AxdTy26AnobUP12XF2aq"
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
