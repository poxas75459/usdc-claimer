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
    "4phd6YAguiwUaT8EYX9fzHRTspxaaPJkzrsM1LqaLWMLRQQoZDjtUhHfm2WdP2J3JK6HBuFQrT8Z27cu33bDthWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jGzZ2nKy4kdKnPJnN7F3rTz6uyYa5YCRub4TutWrxrUz2gcvH2VBf9g2mNsB4hgEhzxPRwxpT4ChCstbhhMNVmf",
  "key1": "3wbM4p2HkuszhPFTiagCNY8nwPHdQD8f8FrkYkDPkFZtCcq6pSsoqxzAGbZpX3Y7rj3gsDjREBVUBEVwA8dYngG5",
  "key2": "4Ew1FThd9bkJHWE3Lhm9pK3sXTJLVcPTCf8uGVJ567DgtnU34yM4xqMGZLpSSCy87HnWvNCQ4wUPytxzd6aC6a6P",
  "key3": "49Y8t1iD78d3zQbpwgSQdHg2zxw1xX4hUNrHCQQt9GRfzoeJmtdwv5PKh1NMCr8ErhGUVsjuC2513KkKH33WscM4",
  "key4": "7zc9qqZPjHf4jPxYWDVvNo7w6z3TwXPkDcWRNJYae7ykHmRuRBdRiujExiZkwAJPkyje8ADDXuVtdRu7P3e3RmT",
  "key5": "3jWkd5t8HkqDHdcqq5upN2GJhLi3GwvELQ1zEHe3AK5d6G6J18r6SXJG63Nnh6mJr62YPzsvW8M4QvsczHKwGbYh",
  "key6": "4UkbNAvosENob1HVejwcFcxpye5AJ82EFLYkAuB64vHosvwGJyv3H9HKDsUKiHrUe3vt7fqk4offH1XvUWRTLynY",
  "key7": "2uyMAk4jbHRwLRTBCU1C8sjhaF64VKbJREMBFiYbU3ZFXFcer86g7RTPixoRcLwRguYZw8wdcu1t11hzMrZdcvbg",
  "key8": "H4LZV48xntGiiPybft54nTnscr6K1ckwSoVePTpjpMuATL6SmshRTwpFrPo4Bmh7QiKRXavkHad366Hc1FEmyfg",
  "key9": "4zUsvV3ehta5Gj7rHubQCyP6hj1g3UFvCHVB7fkc6ofREwCWdPw9WPWXxYywR8x2TGJBxApKBVp3ph2FefDKVLF5",
  "key10": "3zNhMD8XEH6iY2E4WS7DBGadfPE4dgcBEo3NwJNvkHMVjZXWP7XQQYKSgwdRSUP2qNpzPx6bJTR3qUjsbR8Vj4XB",
  "key11": "4QgD8cgG2hQykUY6GKP1DaZtSbJwtnJM2PaoGvZCpT1RNc26bHSnbgfTP2oAmRcjACgvmAbnfY4mxdewhUMUsMi8",
  "key12": "594cFAuBoCvvV1zfCTSLncohJTNjvaNdRfSYgLYpk97su663uu17wjMDWL3gVyqrR2ionHCHKHbqkBMNYJhRcPhR",
  "key13": "3CKEAkfiJvHEbL42to3JdDqaua288efZmTZEiNw6K9PX3qt339F4MsLvLybUMFQsn1MZZ1iaGosPBdGCBHnAeQJN",
  "key14": "591cAduq63Hh2d6HpS9FEjCB6KoEFWub7fJvC2F4BWttY2oN7acjkzup5Cyy1XVgUcDoonzHpid1Q9wvtU3dpvaB",
  "key15": "5bep3TyYCyLEscVY9vMs7Fp3QW9V6KGxQmzncBC6y2pjGjEZLKhgDT4TLCH5W31vqoBsVktr3knY7swo4weqktRB",
  "key16": "saEcqShSvAaNc44nCmP95ddMwDSuTPW3hZEtyQkXgE5HVTyjkSE5XjL2ZMUyE3vvrx3ipWx328SbF4qQC38oZzA",
  "key17": "2tdeCnb8841bC8DJoRZ83UXojn2L34V5qCe3PzdYh9oxMzM181WXjytuGPobN7GVoA3inwCPuDSBwmTMd3GoW95J",
  "key18": "2ktuZiLpbvT4R98BNF8TTXEjqPiFCFwbaodawSyRUKhKF12Fiws1UAAjzbUS9fPSQqZdTyvQaRrSbB7GYyNGkikB",
  "key19": "3oJc6sscWw27KEPYHU8PjMfWCJBr6J5WJCTqztSu1g8maaiS6SYPR4XTn7nHYNYDZY8jzioLxV9HPhupFgw3pJhC",
  "key20": "2g44WwG3tPPh6vtUvBduvbAdMHsJFDTrwgaj56VqVh9tCATVVvi75H1zRh11jTKBXR84di5JJgHP9BaguPrJwd2i",
  "key21": "2yu1CLkEFhWMaKQbmVMWSF5uZNCjT47sVGYfa7k5JVhJ8JMndgiAN9Jv1rcW6aoNokPkYsxUtCmxvNW1Jfo1Np3y",
  "key22": "45BJuMk6qCHALgRDKjeeV94YRyZ9NwX4uQiBWVD9nByKKP9otCNsebCjErnaJewtsdfXbq3vPcAraxqtzdVjQxD",
  "key23": "3u9QPQDd2nV2yGxwJD152vgEwoSyyjnzKd9ZiA7qNBs2DUxxxyyYWCYJ9BwuuciVexdVUdQHRkDeSLJeYDRkpw9y",
  "key24": "5SvFwjqDFYsMAHn2FyySUdABMT99En8a22VU8m7sVqt21Lrsw54bDTrrc73afquSZHwmLbjnho58DJn6si9na3Nh",
  "key25": "KGFkG2bBMPv8Pg4EsJKuFyFiE2EPqAWpEkog2Euk21gz9ZREsn1RrSbgcq9FALkvAK2MTsYyEQT5TZGGMANqwZc",
  "key26": "3hsZe7e1S2F1ivFV1DDjGWXfaLkrHb7m6umQVuvgi2MURvydxghduRkgHcLiqV6ffd3cB5XGzi2WcSKfgnUa18L8",
  "key27": "2jiXP4dicVH77Zh65NPqreqvm7UhzyNvs647UyBk5Ar87ziS1QBC45amQ8gD8mnz6c3npyat2efPbEXQMbMgjcne",
  "key28": "4nnu4s7NTe3mYesT9mkmrKSUpdZgPh7ApkX247ckn8pRDJFy3cmwYoy83UBnjkGPpQRi9dVeZCSA1mP32nrHpmp1",
  "key29": "5tMJSrHFHjoAyCYzaNmZ64YvnY7GFFcbQayBVNaB9NQNW39ZUEw7yWSGMt47V7kDpxUECdEntEsBkkNtFPcjsH9F",
  "key30": "2Rtjdqs5qxyisnN4UDAX68ULPz4qtoj5zLnaUnd3isrKfNz3RSXg5LAauUUG3CJTU3UiBxsgg1ddoydGURxeQzWG",
  "key31": "9wLCbnY7MtrM6XCqp77Epg3CuLpCUTnLNTgMTFnF1FjfrW134LycceZr6chQgEmU5ZjXYiDYqp9YX63pWNDqQP4",
  "key32": "2VKgDXvYxJL4BCeMiTxu1TVwf2GiEztbQY7EbnFrN5aaGez9aq7EGoBQJTfQVh25gU3ZQVUoTfLHyRjJvD9eRQw6",
  "key33": "26abXgohEDcyKT7MKRPg9epn3mbGUK9s8MDbuLzXJCTHzane9GC8XuJ83DGQuZujmHfstCqRptEYn3sBYr5q5vG4",
  "key34": "3NLZfRo7EnDpP9cvX5m8YfyMuvBb4aNZZGAXRR6Pm9qEBqRKwbBnPCZiGM1FE5SgBW3YKwHYJfrdGetMnivi4h2m",
  "key35": "2htZE2dh7wCeabDCfniA7QLbcDSSub6XbPBqrJQxqGnQ7bZBR2DE9Ru1sQkmPQrzwS6hZEDVRNPhP8w2jWNqwtpy"
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
