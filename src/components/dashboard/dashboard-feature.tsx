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
    "5UeojWJuKSCNq6qP3yZnybzJGKmRWqheQL93hTYoFGCBSHgXzECwzhxLvn2iVzBthJtK4sySMn41wJ4UxcYWNnFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qfYnCmFpNdi7RAnr5UEmHEn8ssKuKfbzSr92UgwEKGwK1WvW8Ki5F4fvqcUaoRYYnruAGZq4ozEJUHRR3568xC9",
  "key1": "2Nugi2rH12D3uXbuPnfYVEtArGSrzSZGidNfbBwnBPKw9Z7gX8NDNmWW23UdpEa8xHQEhyMgKGPgA8ermJQGdrJn",
  "key2": "288hz4uwGfVa9FZrhQtVgbVBRB9D6gDhTTNv2wNhmZyiKEXam6s8827QGDA3ZEkjtJRSGq82UbyX9xJdunjAE9u7",
  "key3": "5GhP6AnBUG6uHR1B1ixRaMXvEUQD9hydZQnczcHKMDwPPAwLvhXcsyzJFWtcrD9ANfmCmu2My773ZGBXC6y7o5Hs",
  "key4": "5RcQax3vuUeQKyS6m1drcpvMJuyhJL7QEKVr6qpWrbexBjCAzuLKX7e1oyh8JqJqmurCQFf5syrBaUd7psYGE9mc",
  "key5": "zvjkM2mqVY7si2yLnrzKQ9oVSbipiLcNguqpF7v3GafgqhFMDHVGF6YtvPiHLxDkc5qPTBNvTTVW3VtBxeQTHxC",
  "key6": "5zWVA2todRLyFk4P2iMzpMkWihd5xpPqEtVkcxYSgYgW7Nsvnyo4Fn4EgfCsnqd1FL3uXjkvQS4FVAJ6HmydPeUD",
  "key7": "2tNLS7KHTLEjGb7KDbFVETFRUQo3MF9QqHubcZzYMJ2zG4FQ2C2ZkSpNYmtBv9hWWhq6p6SbHC3LbsGtnFCMWrV",
  "key8": "54r85AU6H7zLKxtTeh53xxnmCFaw7mf8X4QbzAsbJ3iMRjxSibNnNQhHKVw2oeG4BZbjLaouHpVzuVbiVjXqKuAW",
  "key9": "2ezpSFPPV9h3Ey4ZZnTcWuuPZMLW3Vhnt6JwUNdMiwspzuXtjhJ2iAZJ7DUwf2WKchhNkx3bv4wt2LKqixVyhwMa",
  "key10": "46QsqrAeZVvkxv17W5KzrQREh2dQoc9nquqAMVNE5uVJTh1NtYvca58JzVAcjNqGypYvbjzT2RpZW2MFxh9ivUCq",
  "key11": "3c65gaVyqvtPioKu6CCEe2PvnGLGaEDsV6EaMzRzbwWyvrFqHM7k3wfjPWdX3oTSREbfxsdtRKYZH9m7Lkou6xRn",
  "key12": "2NsscDQUGF7wCBy8jX9ZzL3JZLcDs4dbX5cV1aMCCebCaiRgMwE7rX63AEPBAihQu5n3ALKCcp3BJeCn3RRUiPTz",
  "key13": "3Lkp2dWdRxUb22gjsCjyqn1gnmjnF4wLJDk4ttv9yq3jGnoqfMdkWhyx9j7rXqUp2CnAtu8WTn1sf6XNi5SVG13K",
  "key14": "4XhTxYS5LSDcYqCrMqYhFRjLoFN5oqQsV48bkL6PQCrAsrszuLnWFFcBVpph8eKPwno2u1oQcDMTmpUYi5H2Z2gn",
  "key15": "46z2kmvdUWfYsEBUUQ744Pzn7rW6tvFMXAWtyMPBoRa9XnDmjy1cjM69GgvKHAfnV8ihcdvKE7r4gMgR11BbXGHU",
  "key16": "4WwZZRNDNuhBPuxpYTzAQr9GWg4vDkJRhPCupbo8GXCuQC7iKSRe1QabWoXKU9Cvcww6jVF5vPGn91rc479dHJwW",
  "key17": "61W1eWb2k5yPKMUy1MKRkb4YALvHNHegijwYfwovN8Tma85QAU1VFjvXRdD9EuJsZXZg2ZAeyepFXcpRWhmtziM1",
  "key18": "3DzaMa3nPp2nqMgSWMoturf82gzmRUAiKfsqNmhMitzeZt3bmbehfC8jJmW6rDCZKhJ5rFaZvAGm251VspF4n6Ag",
  "key19": "4L3hb9xUJ1NzN6FSbahmaxU18b42bJtPnE1xE7hJf15egLvqiTJfJyxbVTMpL9pDsNSXQaHsvkKtTBgdd1yn8bf4",
  "key20": "3Kp7HAF6s9uaJybcLrQppmt4j39ZBVhS4uCgL4ti6Th5AE5bk28qUG2tR7jT9LvnJpZkUXroeABDCCqevy1vzSpQ",
  "key21": "2XJJXyWD3TNYweGMmy91rNY5hMNd933stHwWnTw74iHagJYHxzGobZACHhAgEwf1E7dUvT4rrgSAqheTKQCyiaHf",
  "key22": "2boqG4EC78B7X3SSgngrb5K4KxPyx3jwfz7rQGzmxkJgU63YDtoKjM2KZoagR5VVKj2S68LxKpgHYuEmbbafuAgX",
  "key23": "pmnT5jPtQR7ZAS6Pf1JphcR6UdBESRKLnduA28pNa1JwXDP6AwukVMHPyLYkkTABXq11T1GBDxuU8E3MWFxNXgG",
  "key24": "4BhaESxQwaGbZUSW5Fs33Y5tuFnwWgW5PRQK9m3YNRf3vudSuKXPXVKV6mdnAh6N4hfJGR987dQP9LSZZz45zSxT",
  "key25": "Qs7dUKXk3up7cJkmgzmcAcwZpzEGTnu83rHELudrxTyW6ohLdh7Z7JgD3dHGC1TmErAiziazCMbetB5zgu7FjUV",
  "key26": "4PYJEX3P5EntWhitFCaWt36YBcjpkyrULaaRCVTEgomFkwBXCcsZ9w1tRLofi25AN41KX6aiqQJXmwS5cUmUFYLz",
  "key27": "4Mjzs6WYf6w6uc985JR5Pc8pCEGgVLcD7rNPcTXJRxagMEoS9cmjr85TJUvhhcR4mucx3ASb1BU824VRG6PTPLb4",
  "key28": "5uxJz2ix24svACjt2L7jd6gPmzGXrgLreDcmXRV5y5eDL9APkg24b1XyGTY6TRLsqh5oFsyWmTFN5Y4ykPm4SCk4",
  "key29": "4z6i5DCMaPT9LHa7G6cEZdMtGUD1oi5ojmGTpmdLShGd5N63sr47yRR9uEqe7xrCjH4Gp1WiQnrm3tZZxx6EoNZ5",
  "key30": "4qUH4RgKFtnr79hAjegx6wyLvwG4gB8qi7nnqnhs4vaUKZehPgT8Axnbn9uLAwXsx3qud4J2pHgL1T8EvzTjH1Rh",
  "key31": "4MwapJnSYdxyDsHmb1sjJK4Wz89NKb1i2QmBbqjK4AvvAvd16SARV3mPGw16NneW8FcG3NCVuCKtTdDmGrKvpGzd",
  "key32": "27LJL1rYTJcCCwKLPKLHVA8R4krGNLaRRbbEg6HUK2aoXHZoYWDKPW3K4PfbFtG7HPoTNk3XhBpkuBWmtXkP95z9",
  "key33": "2dD92k3aok31qos4yGQDzHJZh3fGKqTjNL6MUARSr6WwLa9veUW6dhUxXhbtswcmPmedn7jFCPHQpZYw6ftMotUh",
  "key34": "QUDZJ48sKDiEB2uQjLEbE2t1xyHgBSXBP1Ggjrsab5dk77MPQomhKGWNBTCzXjKJi1b2De2Ju9gVCVtuezWfof3"
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
