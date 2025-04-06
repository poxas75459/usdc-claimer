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
    "32WKNv3we6HsQrAnpxSDenLve87pqxpGT5xNmtLCFMrnWDqvBhVGY3mxuh618TLYWLoqtcGhMfJarMVRixxHa8jj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q1c83A2y2yHCdytUuLCumq92W2PZwKNZmSVz3ForenLJ4JT46Deui1mCYAQ5THW66bFTUXqzGARz1wbzAaddnD7",
  "key1": "su7KN5goUnHpej9SuHEJ3YjVgP5Kpxz9Phy287MW4JRuN9PQUv511QhWgw6VbBTFPXpvncSjvqnq5tz8AvPzyCM",
  "key2": "5Y3RtGPSYQWXufhZXv4WZx53P7FhA38q1Lw4UAhFK368stcgB48fQFTG9BQ5ReKiKrw2VgC9RNsB9yNba368Le75",
  "key3": "4qdzAxkeeyPB5nHh9qpTJjXq6uZqVmkfxAe4SPRLVj9cmShSw9bwgh7zuZBz94QvNt3FAuGvb4iogAAeyorFfEJj",
  "key4": "4qzXKQHmtDBJFc4daqcYBh5tGtVaaZ62Vioc6CXDTSR8QsV3qpxXdZxKb6ztQ6SLXc1bha41b6isv5TX73XRmAh1",
  "key5": "2tmLssnyADyJjabhEaaca3tKxgwuAbJKnvAksX3s1PfpR7wXBtmTuXR9ahKhK1WBBriafEuZAvmnpA2i2LDUz3j4",
  "key6": "2XGW1hHdtY9BejwkgZivP1WUxLX5ThKaB9hdTdgzYgMoBnEwHYpW7YCRSyPkv9VUisXHYaGhrEWWkNmM2cxzHzP1",
  "key7": "5wZapRdMB7CYXT53UBt4QUY4Tc1JVeEgugNT49d4bYpBeamRDUoqgoRaW8dQVGmvS4CgNoUaBFow9e3JWMFdp1ND",
  "key8": "5tAaYipF59uaj9cUWXiKM9aNuAG78BDgr44jdnNGemkMrfRFfmjX1jqmzp6q2x2mZZsCkgJe7mewUB2Cwiuwsve1",
  "key9": "4Ay5wGBeo6ZSCDwcBTEcAm2H6Bc2R8mtdmSheA9Jr7KTxyB9FSFFZHwBy8PcSYd3dpFs9xTxJb2Yw5W6as1cwL24",
  "key10": "3jP8S5vmQNpdN7Z2J1a9sEp99xTnaGNBGfxAexisgtw4qGWtmYtWUCPxWN2B3aUY7sWzaokjkjt9AbVHCXtk93ty",
  "key11": "3R6yCbnr81TSXHqNPN1N46EPmkz4fdGBdwHTi3uHeE4Rmk1zh5P9ZcwpextGp984KxRcWERhqKBxtBaAWvjUBFGm",
  "key12": "5RxvzFPWfRyhq9ZGX55wzjYwZb9kK5qjybjvToF3h5eR7XqBAagSPojyfYACDvvQK8PJyxbBxcg2nzr8bAox5uim",
  "key13": "46eXCBu8YUom1gi5xe31PjhZMM2g15xHcncy9YBj62brJWjX67LWnqgtPmHDkxKQidN1FN2hGRjB7LZ9hmDkkLPu",
  "key14": "5QZkTvUTwq7wrYpdJCatJUcUhyJB5FEDmVqwLt6UEDCKrg29GDJ8wn2Y2G8GfWvr7UkAMtEBsA6euy14PCY1T5Lg",
  "key15": "4pYEhA4NGNPrDN6tABN94MJ4ACNBpNKbAsJfL3vsY6tT44NxkC2DtXm8qiP4zBGgm11PGTGrdKiAhBm2N3aHVQQU",
  "key16": "4svNrrFzviAtZPU39f5Bc2UyvRWsgNxktn2Hkn4GAyQSvVUwCD7dTFFMQDsGDijT7wT2CSW3jfq7saESkyX3zDVM",
  "key17": "7EzJoSGsM79H5Lj8Rbk3VrsiJeDRRukGP8t1b2yTiwD39bfqsyT8Jn8us9KmciKDyiR92o3sBRMFuHPkrZ24BhP",
  "key18": "3mbSU5TKnGUuTWCf5GBBb4UFEJD5mLejT5KaeFw7wTJPH22ANT7K5L8ZVB2TXPUoSxBA3uAgxegLLFro5SrAHqM8",
  "key19": "bVCoDAsBWi5FaUP23zW2fGUoBBbP5yH66To3pH9qqLpmrA4Vos2zKrUNCwqPp9SNHGKZq8vuhGhgNX8KpsuESmK",
  "key20": "5JpYs1z8q9qYyw6AHSN3tZR4V9X4FhVXvwhDCKHhUvgdQ2DeoduEAwGVAyHtyGuQdJQ7ii5cEnDpA69SYmzHUx8x",
  "key21": "59179z1M6ArRUHGN13kKFkjGgR274oXCq7XCQvxNyzDCyWg6hXekHofLEw2Vd4cK9xJ3iiTYPYd8yVe3mMfLsryx",
  "key22": "3DepJRMo2aaEhm4AfhV3RvPYhSte17fLHRtNzWCrZdE99eH1EnWN6Wau7xtBwJpk4zsjGkh6zDzS5s7Z3tVYiXWc",
  "key23": "4GPaW82kzA7VrF74NyKEDxWKLHgFhvHZQPSoybWQbfcFqCNT6TN1CG2kfgcotnmWUzU5KfkqWTcswsHNcxvn263q",
  "key24": "5GJY2n3hhG9qB8ezgE8ceveDXDpMR38rHvph8Xqg3RwXSQcGEUcjuM61xxZtcZBDYAwANrX8ZbDmUqPDyNhGbBCL",
  "key25": "2n9bFY2JhTNWuwp8ShJGoVhAHJCRxDkNpWE6TLsPYJW3dbtbHU7ySt8gSzyBmMZHthSfuov8KCZf6q6RYcTPGzoS",
  "key26": "47xWihkb127iooNQtk8fXHZUKXpYFJqPP7nuvPS2wKy7uLp6sEfSvSP9zdCqm7wBys8dUbHMb2BR1qAD5AgvC2hE",
  "key27": "DAjc48EA4Sqhq9czRYdLRk4PQZa8ivW3GbA8RSH9HpG5SQLaJFMeRiibRfbThy2rSkgk2mt6vawnuXCjccCNjqy",
  "key28": "4tt9kwcLjnAhgQbNJvLkQiQtcMF6gxGNBzdN9BMf8gW3rFQ98JTqdeHa8CAxnn2Gh78gBsPLgvuQPktFvDw54haB",
  "key29": "4QyatEqARP9TYXxZoQxffoAj6jbM6BHfNLZfGHmXpM9QJiN22ee9Ps9HsSCNBYbwz51kvEa4ihLjAmritGMhXfZA",
  "key30": "5Vjf6qSCZFVaCAMhehs6CnV3EGXFcKwfSveMTG9tPeMiEkybcTaks4LmRGx9NsxuKAHcHvDmFRp5ABwCvh9Noqde",
  "key31": "2LMLnTJ6A4VL6E8AfGCd11t7gqRRHvQtujn1P4BJUTzxaEXakKBVQ4ydgyEMFzT3361ucdkcMuMTPnmvG1PJnzyG",
  "key32": "44jP7nJzjw1y4yQxRcbt6yRoCFmPV14oSmUCkjF4uT3ymZZ7tKRWfmTLcTgysmaM9GHzikaudELmYSoUUhQEjYFg",
  "key33": "5eZkMUqCkx3RgwfepHuRsZBU9JLsAQvpinruXAjNzmTQGXkc1wjy97qzyUEiS12e6oXxhcYipNc5BLEy2kUq2niy",
  "key34": "7HSQ5JKRRVkXSurADmW2PEFEgjxp7J2JVxSoKdKr4hbJDEm6qcDScjbAPDPFNkyFC1rMF9onyAartAEPUykc5eq",
  "key35": "2EDqW8uFb476D57BnwjPsiKod3xcDkztCgEvEdirc8dZBpKLZ4R7x2QPRiWhmmpNgUFZoVFacqW7pdZZYDT7FDdJ",
  "key36": "4waU9azVDPwezc4NJHHW6H623iKMbrQdLubvYNBKS6XTzrNMKXWy5RzKz1CgTaVKTcCTngFD8Wj9VD5zosLiDJuK",
  "key37": "3gDd22QDDbFYqF6Y1zcPyDaVHSq57fsqgLiCEZ7jNx2SeTk8c6d1gGNcBjbdFZW6Nqxs3GxJDht7oygb4w18Hk1V",
  "key38": "3Qygszp35UWy1NuPbaP17Na1RY1m8cnwSk5NuLsfEb5qXMUt7YvwduUZ35sWqoHNmqYrD21hVEN5DSXiYZAXcQkA",
  "key39": "3AMhSn3K92qoidRRd8omdEM1HwbNUUtz5cNuCT4aCjfYNNXmMY3yehEPrbcnt54A5RzxNnJxEy2nYKo7oTavBdQ2",
  "key40": "4qomd8EYwyA8CMnjTo1LnzybHHFFhXBwKWKGRYZjQQJ2LVBGq3BZiMXqSS9XCJ63YqFRD1J7FsYhqPdC49weQK5H",
  "key41": "54gFebN1VnEvtdPFSwMmuuZvMJeD6kBXHJt1rMtKg2VRU1vpyq3UxUtet41KVKNYxC911sUh7yGvHzNB64MWA1Uu",
  "key42": "3AEjbt59TkeN1qWdiq9QxtLQBP53eRvVyUL1dNsUTXLVpC9h1KrkBnQgE4gCpd199j1g9hVX8hN4LzugRbTV5Zju",
  "key43": "RNjnZZnZpsSmJob34DYvHDEvXry97BZ9s2ytweR5vdCfvDs59PffQD5TbY78wdwBiQyDSLP2GNpVysZbUhNLcf7",
  "key44": "4tVQCL9pfoLoHfV5h2Eh2GcQtEcF7y31adNuuVeSWEsiUyKMWvyTHTcUJKw7vJYYEr4vFkFSHbFAHCGDBqdgdJQJ",
  "key45": "2qF9dKb8rCsc2ZWhAqrtWZybo9Ty7y5gZPo3XepUFV46jyjSsDkH6M5aEkFykgsScacKyc6QPoguGpxXUd3WnsXJ",
  "key46": "5G7EbTKfyBKCmxehyvHZFnmZy8dSBk2Sa95JwAmkjVWjnuMHA9u6fzKzfabVsamu6A5R6UpSujdQuuVg9GpNAnTL"
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
