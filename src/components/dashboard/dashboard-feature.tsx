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
    "2QrEmtd6VU5ygHvsUuHZLDuebLi689bLrteAsV5X9Xo2yb4BaxvvsZgGW4e8kLhJkUseXV9kwPZwT2d6AqYmaRzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B23k2pM3BiDFM6nTEd63Zpncxq69vi6MRUKWksoBtzNcXFvgDcgiYmz7AtmNL1cg5H5DgmNQg394tzyvVXDmn24",
  "key1": "5utpZQ1oyG7xBpFTkfnp4wdMLweD8zYSdLfmsFuDPfyJZrrR19G241HwZqGLq5Rq3exdJ4FaYz6TaEAp2HWBSX7B",
  "key2": "VZFvU6r88cuvTE82U5HJ3B3bArrcnhNZqA8awT4CS8xmygwazXPrgWMgCgiexterQHBvRvxaZ5tBoxVUAArgnJ7",
  "key3": "634SETvKbtYVtcfsQrE1WcwT4Envrw772bsw4GbFzRVPGDvo6VGteJT2tu1cTqEsW9a5JD3bmZb7c6WHnEviChFX",
  "key4": "36ztXcijjA7c4DX3YFz7d8YSJSn2KusrXsigqtdeRHuivARycUnrpQi8bSidTrf5oPc9v8Mct9DVqArsBW21CBHL",
  "key5": "5gPN5RyNyka1sLT8RFjBRjHyCEgCfpEF5iXsqQLDvcxFicU6zqvbgHRgZARvWzB28AyAQU79B79y5VhngFQ6sHLB",
  "key6": "2usmCshb3RxeFKSiJdFrN233C5b9Y9MuASne3gexBy3ukcxkWtxor83mLHLQpVQo7dYLaC43P53jqLRq8V5VckvR",
  "key7": "5rvEFJHTiNL4Fzd4ZsRTcJKDkVj4bz6wVf4fWYrjgnBTwQkdAqbeSJHa836bceHCDhhy8oFzy76Ae5W3HoK6zZak",
  "key8": "2N6FtAmXzf36HJwh2Vq76pBb9PGHwzhmLHZByR4GXyJXQKcxYKkfTGQCvs1RLTisxqmh2QeuBVM11zdN85kr2bcV",
  "key9": "34dp1FtakjGVvXcbPooNLfgEhzpxuawUTXEbbyZhmyZdBebBhSjbXmbNXAxrhTAjkuBntzE5kTBoN5ML9vmpfYV6",
  "key10": "5j17GE6JEzT9CCJFLgNrqTXQYN5AyTobxMHexA3EuDp6yWEDGLoHCAvjcvojfzNMPv48SzmkbHQNqyBEvaPD9hbT",
  "key11": "4gm4MyKdeRkbcmWmeKTbrXFdAaCJ686QDFrXS3K72aRteBxi57zBxziu84GYoxwnJ37F8fPPSFhas8DtQzZ8wide",
  "key12": "8K3mMGHKHwSMahNhchbvpq6nMdj8FzamSDKTLrdUtvP2xD9LfT3j7Nazb4Gte3voqUQrt9iCTw2NeWfSvVWPdpC",
  "key13": "n9t8VkUWtm9CBPoFusUvYWr6hdctjhyxdrXZkCHTty3QeNWuvYQdY5oLbJDB9WX7Mfmy7Qvkr71RfadJKobAcmm",
  "key14": "2SYLJysjXVUR88XDyFKeADv1vjW62fkxqDKawPec9F2gJuGumyMGP1xNx9pjgrZQ8Xvk5pMYffG5TBt31tmeUaNs",
  "key15": "2zaVNBBdY7bYoheGBKC6Aaj1ysEWmg1rMrqfhyKxujty5oje3bm5MF8oGipcSRLw7XUvKhU1hpbACn7VQbvxzm8F",
  "key16": "bZWMgAa89azSoV2GPpYJf9nnn7UT7qcFdCxRxNzrk7kp5Nuwisn8j9fBDKts24pTZT1d9TUhikqRQ9U5fsohCBF",
  "key17": "53DRQvTKpvb4RJfXJGNdFnsfKaKbSLkQ2Pj5VUyRMzsuDfxRtmKA9yzxVhAUsCBHbbJDiZ48scEc6Yk9bFvp5qAd",
  "key18": "27mCdUNtTmy3GEqBkMHCf7wgwwbjVgfhY4EkZ2wDJ1ceRmGkHXBcdFpQqkHFTKuCRAWwbDYKnrfMdcL3nTFMiuyv",
  "key19": "3dWDNe3EZXJCCGTTPVtfG4zPHPoVJPK8HGRo1xT6Rr3GgPsKPgRPxdEbdYvmuFbdDPWBMYXQhnTU5gVB2zHaYRp3",
  "key20": "5JLSeDqnmJXqKP9LpEJNHhU5eBATx2So2uc3wyTBy1Mp1vuHjkMSdLXHRpt8EcbopEeCBQHdj6kiqvewyQX5xj3t",
  "key21": "hmz5aj71C6dJPzkAQcBaKMh7RyRR5cvXznCMVk9GiZtQUQN1pTnSyWoag87oZSjdR9JcarmcPrvk7tB2e2A5eZT",
  "key22": "4woFFsCM1CRf9GWB97E8VjCFnBqrSSw9VUPbfP1yq5hH9dYeRQf1c5o5wf92Smw9nBPEbPudMNyuaydhG3VF7k8U",
  "key23": "4dZKVC3KEbTB1oY5geGmFtrs2oNmXiPtBa2GvhRPvekhnAYUedxo6k6eCfcd9FdEQju9qEXazqWJ9qretuF7iGre",
  "key24": "5NCfEpASeNJfUifuVthVpF4FGVFxH5GihcuvVwNgyH8UYGqUjnncV79re6MLRbuUtZXFv2JK1PjqLtYqhKRfHML2",
  "key25": "5ahPZcvVSxBfHeaEEXa5RCfxpf4sw7bUGQ24TDf7M55UkUMzj3AEiHi3W6Q7Hz13RvWkxxCWQcLw67tTG5j5ksnC",
  "key26": "3L5wQ5U5nhdUAUpEAZFCCFFj9YQDw1b4ZMDvNFiV4ve1Hs9LYf99Vt4Qz9kzs4pRVS6zE4c2q4XE69fJpnzGH5Up",
  "key27": "64AswaD4aCgHL5bNt1L1HEZdfQsZ3tkwmWZc9KVi6eo2sPwXdHGLckAgrHGWDJwveFb1JoLxWdsRbpH5KbvrPvaz",
  "key28": "JkP96YUH2nXtC33beyLkbKNNbvtcjRo7t4GsrEpGtF188msJWCRU3rSJwkmf2FkxaFq5AV3uE8c7STt3kvmuxwq",
  "key29": "2oj4EGircRHr5w3kYmZWzBseSvRAY7Vv7fEUgWGRrwqw4pgvWmN8gbnaNv6BsxKc8E6pjRPMKhcVzEkD1jxB1A2s",
  "key30": "3sHQ61EDUhmonWrpShmiuwHkBqTmF1X6h4KvN8vreXewm7QW3QFHTYTzcwRHyT6TU4ffFzMZpKPSKCcX5ucFBuDF",
  "key31": "38d89crimR8pz2UQFAzhK9oRdfMrgba3Ewvyo1Re8rzDgVQTTjGZk8BnGciyRnvaNq4jaGgU3ToitxxeWEY54eRU",
  "key32": "39qZy4DtoY8p4Y9A5aFyaiCC4djyjoY8LqEw4EB8pKFZdqf73zyWKJC4RFnzVSKbr7g5dsRKUVsJ55WeUkzD5hyu",
  "key33": "3GQ6JMFwvQCsdrB4DvcypjrZL1t14Rgd3nzzsUrnCyMND6PUz3WZdBSGa8A8UxGQNQFEXuAYeUV64K1uEyUjYk8C",
  "key34": "RaQtv5DtFP6hD9Yqne4VMpv9SByTVENdHwWMUVE5iizvkr2o8Ls4uwuVcAYsSuSzdnHKsyeXDPzcKv6efBbkMbS",
  "key35": "ruHFN9EkTvzdWAUJsryn9enjdJNL7VNQhxsFbsMCw3bHceGATUQDmqEEgRw4wPxf19iEBJ15f9xDtGvT1UirBo9",
  "key36": "2ySJub1vEFz8KapAKaBAB6u2pZ8ts6p8HywDTtBY3rzrnwahE8uCK95NXznp9gNN35a2nWPBPx6j5wqxAtYVSbPP",
  "key37": "Y1BtUsRxP2RkEW2Kxup5UCaXVfnvE4nZDJcNsfibR8FYnHc9Q3jDUeWi6vhkYLPNt9stswHWyGaggq47HgSBPJP",
  "key38": "4Xs2UmLNKy3S65G8gBKZr5343JWmVruWvKMHw65no5XnbnCQbTHd25zB2fWWAKUE9xkfGS9CQ8UjKwda6g7r46WK",
  "key39": "2JFgHZopDYWkiXbTBc8XLXZMRRE4AmuotxpfPeWByZFPcDDNYNL2rM2VjF493RwmDfkuu683KCZRC8Su1tmgb9zW",
  "key40": "wem4nsPrwQfmdjCgerX6ZLu3WFfrrCfXfycNnVZUbXcNsug7tisGnKg8oeV7j3aTFhvU6BjDr74Qi2v1UiUhveY"
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
