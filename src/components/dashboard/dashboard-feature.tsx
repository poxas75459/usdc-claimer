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
    "2rf4LG3DTpy2JdsS7LJ1XEpzXcitEsZg6AAaRvkKTSMRKKGmsCsRwSEs1XekFDC5oNfYQyuvAmVvR6tp4XXPPLMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qZVEAWNNNe16Rm53mKABv1DxuG1W6ugTN1euCN9rKyoJ752rqq7LHRd4vFhscbSfPbK9UQwyxXR7U3NKFxETmN8",
  "key1": "3She1xpZ6T4SnrfQR9m45xVoRaKoXRaPXiPFQaHNRi5Ujos6hFVMKX7x9hZBqEGKEmC16vPQPqaPoJXHqeyAttJT",
  "key2": "VXuKRMEwW7WparEUNNpchSA7q8GyDrhKkvsxbYUbLyHxad6cutVMpQPjdqe6GxEnQ3Y43jx2myGk6efakXohXse",
  "key3": "2qicBgkimrtpozrDRNKKqLjGE67yCHXPHh7CPNF3YGuHavVgAjwGhF3NF5EaoF1rK8Vjo5vHJAqab3s9BXxFbDGc",
  "key4": "4yZT23ozWCAwPA9TFkK4rp6QtFkQtWRpd1PmjmoogBdQRUe3bEtTk6swuNZi537h8iQ8Xw1eyFRTjCeL6NR2Rby2",
  "key5": "kxqU6MPz3a5o9Vdb7mX89JXNe3KG8aXZr1cjhLKNdJT8vTfHdf3QMyN7von3FNKMf9sKbrQabWfCoqR4yvdh4GF",
  "key6": "5g7vwS3hMFnu52SuYLHoxKgUitdgFjcBCZLFDdCZAR6nH9XsuzvwQvcPxqawED6YRHjGmLZxwxsredwFV6pEYanE",
  "key7": "2xEPerpxR2wDHYZ5se6E6bnp9emxzoxYC94dKGVj9SkGU2QsMMUxcootEddxU2eUyxsshzRcmxbQDRrJPifFv3nr",
  "key8": "3qmgQUmcpAZmUEAXAUHeofGxhCLDu6wvnH8ycwi3JDZ4zgVBFZT2gYMxYaUQ5dQC7XnrUDzwnZhL4WRDECmthSQE",
  "key9": "34r3VRTA55KXhq3VLbttuvEKU2Sk2TZoogDvKtjfspBZH3kx6e9rg3iSZcSC8KLdkP3R9r4bQgFCymG8fDXKfTvz",
  "key10": "3hEPHZwiDZng9tnxDJ4aVCwYCayGkmSEjBcwMzTNJpp8ZUnL67bGwhaHnwGyu4RxfM4BU6oF2PiAcqEuTjNTWCEz",
  "key11": "oB2SBRn98Do8Qwc8DtqckBiT8pS7hyJ3kxw2jQVp1wbumij1EiDaHgTE9p8MA372uzMwG86hoGAZZUwAQRv5s3F",
  "key12": "2Uja6gyXQQhzsrLzymJZhfKBcpLrMSxJHaatiU5LKmrQTEf5FM23FoYYJDPUNF9Wqoo11qqqbaVxF1Mv6nKTVwk2",
  "key13": "YhkXK1R3RwX6gBPux9EHoogAR7weVvPKJHBUmXYV6NVeQw8NpJpZbzCrpr31sGWA6Zz7sy5mXWaJz9H3n8t7wZk",
  "key14": "3Gh6z4JKo8baxACBpkntypa5smN3b2cV3WCSzSqQwrTKomiw2sm3pmCnv1TXGGcvLC1w481DFVD4wnTLH9BLEhbT",
  "key15": "w28Ud4MuCicXcCNayLtR3RViT9DvKUUb5PsUJ3q6AiULvLQXw93TUCo43SZM8v2dwBmbRxhVGtvS2NkDv46p7ar",
  "key16": "5vuKD7hz1EXGotUnLGgS8GuHNdsRz1MidjRAr6Tqmp6mFB6v2fPpQDSpA68Q2QKGLQAe2KpeKd2F1wRYGoMDqrvd",
  "key17": "5JRASsVDAqE5emmP3JCdPW7Cj6Ppf8AUC3acveopx85uERKMiP3W92wUCAsjkKGhweKRXBdbUn6mgb9Xvxvn5s9a",
  "key18": "4n1VSipLGwPihCcXG7nKYLNkiuKqfFM1h6qBhrwBL2hYLNdASx7RyDkWFaS3VwQxG9aAkN5xT3aPVj6NfGq6MZ3W",
  "key19": "3voGoE4PXxRVE9gzCzxLrMmCBRsNZnU2UfJL37JmjecpSf3EqgrMd87ut2H5q1eTC794fqqYRxEb2vXNrbrh6R5f",
  "key20": "MbcD5UQKdEUahoxkLfRYzDgX5VH9GrU8nfBUTEnT3HSdwHkE1QugwqNKZzyhsZwjf9Rzh69p4VGkoGKzJgdiPHJ",
  "key21": "qTCMAiSVHGw77dVVHUmxyjQPyo93ddCzRJSNNyVDtV23797zpYqxAMAp4nKSvQCYKHSUEuLH3rePfYQMfb6mreC",
  "key22": "5agUz4zvL8TkwwfkphD8teex9PgedTao5ejjwr9GvdhfT7VLVktSyedB42P8vDyvTfnDXv4GWiq4fpNLHePxZsZM",
  "key23": "3wMoZok1VbjwnHm6Hk8DXxPbwEhnp7MhAbnhuEp1QD3XYUvR2yNyi1EQdK95NVTtTefK98N41ntRTomPZQbGCWfK",
  "key24": "63KCxSfPnevFzNjToXEesNnaXB7zVf1YBnY5tbpiJX9zsBq3Rz6W1w8vUf8RjqznKGmGp9qLfpjHGSbHxN1mZmCF",
  "key25": "9fBfCy7jhHXQNjFGy79418EckpkxNQrq7GUdofz2QJCs4sR1tuhD5SyA8EqqwYhZD7Fzo6m381a8ZQc4d6X9ebq",
  "key26": "qSPhUTzPCGsEkbeqvAoLRqfUZkQSueWPAJ7qLpUF5nqgBei7rvxKLUTpVmraHLYqbXdQZE4K9rdJsyftfpeGwtj",
  "key27": "K5JtnrSQhpQjeU2zac2qnMYSYq2KD7WTtuUdccbLotyH9NMN7LD8jc9PsqFXF1wo8thFAAjQBMDNpYW2f8qK8ax",
  "key28": "2zqH64UrkKwtUUx26Ctyw1y9U9U2pwXAHa8KHuMmJXL9kvzusxH1DmRordJJsn268JWo9D6HWWQ2R3tcituU7Q13",
  "key29": "2ACpGcTkPpWWxhu1aKMP7VWWJoLybrsLWoRX9kakwE1AvkGCvEfBErBun9YSBVnMGd8VWmKF3Azz1y4q7ATd2DKr",
  "key30": "2KZzTZD1tkuQWLipNrrLiTd17ssvj7dAEJ9hsuViEhTmeHAS9DaMG1DFCEjDFZ9pF7oN9ypGMDXcFL1qYikwVJXJ",
  "key31": "3RNytZKdccdczUswg4PbMjeaZ62AjdyuNaQ4MWxXBAtseat9z5d3vQzSyN5GXNQDnyFFfaGe1C2NvZtC2VL3m5uo",
  "key32": "4E4i3Jzap9pZZpv7AstRrs5pKN5uZUSuhryvx6frirKtqrSHHKq6aeqr6pesLVce3gXzP3YxxohY2qZy4FxCPSLP",
  "key33": "4RE1cY2N5stgKXcjsmSxK9t9UkzruimiCfBwDeqqEigFushjPBh2pbkKFDeCErjDm4Sq8vHCU9yQqJkxjnUtmM92",
  "key34": "5tsRcMhJvnotGnnRxW9nunaikkA8XGESc8cDpN1qEQY4tpUfGTAtEkFJHHF8GCAPtN1NeLgaacoyHDtqp5ygQ4Gk",
  "key35": "aphEHc9MsoHs9b2vs5igZJpFY4hccjWVdBesgqSiVhekTamKmaYmmVfmCrChyktpuXk2JXjsK3sK4KP8TYWWqJh",
  "key36": "3xbsNVWAsbEV1jun1CiR3TCuw9fqSH42673wMKJ6osJuUTpd4w2aypJQk2nvPVeEectiJaqHpkedrb6XR4LCKNte",
  "key37": "5AZoftDP7LYtxQJLZWpmxUqZWzNgBf2894zmd95jxSTRpnUZzt75qKM7SZEK6K1DvhFt8CqUXSm1x1FkF9TPLW1i",
  "key38": "kN1Q9mWrLmRR7fZ77msVHHCpPSWnaS7MNBU3set3742veE3mB1nxWGHXHckGFoZboBfDkur5CSMuuQrxTBtdd1D"
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
