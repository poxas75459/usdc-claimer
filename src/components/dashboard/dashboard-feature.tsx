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
    "4ATDJ84SYpJAkXU4fHumKbsmbEfwZcq6eWpVUC4GW1CCRntacJq89gSWDas9Usf2iuiTHjKG1nsnWA6VBGJM49oS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FfKxBdybzsB9dnojKQHJRT74k1uaqdXctifY57HpihcPBFsL6qb3aNM6R4wBU3tCFHPMyavHh36bd9edahqppfY",
  "key1": "54Lg4DjAKinEKPgeMwj52Ztai3V2etKMGxKMWk77H9hn7tZXzwUgA4KuSBhZoFiptq6p6TsdoaM39BKEQvwLpb4Q",
  "key2": "3PaiV44kzVmaKw9pTxDXaZzTWsUi3fSAzP5BQv2cCF85PkqaBz1yPw3n8UEYUcCGaefMNXxPNp6skFhPpCr4aXPp",
  "key3": "apPWPDxnJ9xPsb25drxMUuhtbgU5Sqhte1i1mFELErMdxunSyPzLvNK36NTQ1oMJs6UXtLhhTLayiZw7t1rQsAH",
  "key4": "4XLHVLa73h7yjxEkTjstxnpbvbL1gbewEEJzwHxnFaqLu38KxwqjKFwBr1Ts6M9Ztjeym6ntjJxQGgTrUodgZegQ",
  "key5": "4896fWk5hVvmvz4Tq8e2odaJZwWmt65ojZmkVEbKJD34AfnRTT7qn94M4Stg6CETRovQWdnYyApx17PFvoDTvG5n",
  "key6": "24LEaqmjHVrc3cPQwWZ1dMS1PCjdy57FteAkf47ykfyVptRnvrKBV712Lmw1n5P9qEj23Q3aHAA6zh25D9qTQYwV",
  "key7": "77KoG7v8mSqGuPya1FWfpsx9kzANB1PNrU6VcEaVrvnpspnsbaNxnsyWearaV16quVNHsHgyuLNhK84WGQf9PcY",
  "key8": "3nfHnFrYy9xdPWE9nkTcVjziLRVUrZzNHMh6Hj4vidcBm5jM9stkfJ11p91MipEsYwXomn5huVtuwn2ngVJ5a1Lf",
  "key9": "f5G54NaLogNrWzCzSALfRJmVqsiumoUzqcsSy1rVtfQD8KtPKpCLqec9vr8McTqx1FfRFCBiLhSd38yLiwJUKjU",
  "key10": "2Kspn826nu4kAfeKKpfTGY4FrsxStBppmvpFbHxT1Ncq3jT5i64Ns113Dy5ptfMDrYCHpvaUujdAw29e4zQLZsvh",
  "key11": "57WkugYuWmekhibUMZan69gACyqHfFCTwY6BZN7zufBjivmxMhuwr5qMUjAiPqDDp91neHM1i3yD3yzcGgTRuvg8",
  "key12": "JPrSaTeWPUwcH9NL9fzBd4VvmjhR73thHcHwvbM8csjVQT41fN1jUkQRCSJqTLtVcWeSXaaVCyTpQRSo4tu1zXB",
  "key13": "wGPZrwhcuSjcbHMsBaJuCsQgXu3q8TFukfq9uJXWhEZerwuKHnpZG1nMcEzBaBPeXWJH3bdNt9kqpoxJb63WEqU",
  "key14": "2pVoCGCWeSEehVG4tpjNDdkX4E4E7m1YAH58JVc865j9EUERaj13EAAivqRAmnpFjqnrWMLDiaWuSTjyxS6Fr2dJ",
  "key15": "3CrTVaCv4LXJXMQZsWfCxEhDa1VBuEJuHDbXQFU1fPxHmtbannxy3ER4rs8Js2qMLeneZN5iXfUsTefSw7LeENsj",
  "key16": "2HNhi222H4mJkGa3RBeFUA8BSpH2GShcYj6sdG2LFQXPx7beMgdTq6wqLzZpa1rV3CH94ExcEFRnARjBLUA7uuwh",
  "key17": "5Wz7cZ5xzmCpvimrjJ5niY67YaHLApAzaX2eD3sH8KnTm9ndDZRHeSKAvsZsDNzpimngdo4j1R4Fvss1JYnVBBJs",
  "key18": "5rqNVK9H5e2JTUYtK5wbwryNj6FozKoheL4cB1foSiq27EUuH7kwiGnGqxymwQyUZe4fkwo2Sc3bnbNeKZKXQygq",
  "key19": "3Q5iDYSMDLT9xAew5WR2ZF76pKbPbVLDFk88KWudfmHaQG4wB3hD8RChnAGCV4r4YiLuJLnVf6ed2bKQLYdnApEf",
  "key20": "4vMHjHe2eZdsSpHSjVksRkLmg5FM3qSUXZkZUkqZbg74iqExgSZeeUYRXuSDUSixGJPi5aipewJUMWu5z3hzHVuH",
  "key21": "66e8FhQPjozKWP4gPs22XgvEWWo65iR6uxFa8jNCbLjKnAUXwkmnCHtY1CRiBVJrEnSdhP2rtvnbyQxDwMckXDpK",
  "key22": "41JoNoofe5HrjEciq3Ej9FZh3soo891moeLdaVjMsxzt5tUUKnxHdsPviwfktsSUzGMJzCkRbWnW8JwSvLg8JRdJ",
  "key23": "2CAntRQdKK4DVWx3kbudKaafJtiEAeiUPGsYUy8yssLqV8zb9aFhbrm3Z81N8Ce2G7SiGZHJKc6cye3zgoaQcwn5",
  "key24": "RA8emLqsYoA9QT17ErMYfirNo9Ryz8wEvvxzLRwpKG3ND8rTpLVmHCYJ6aL3hJZVXBz2YXfh1nSVfooLUEZzezs",
  "key25": "2Bu1E2iL4rq2ybFtHM4MXuLGSbsGkyxmpJndpnJyc2S6crVE7CBhJtV3n3me2fLV2CDYqW2Pjj9NM267pme7dvd9",
  "key26": "4uC4KNzaXUYAxMTL5CT63NahuwwdYj36yTzrcygW196fcRbPu3eqLCidkA93C1gXSSkGJBraEJMjw99zQzirRjv2",
  "key27": "3f2iEtiUBUwvfuSvyhN3BGqYk1TVCQb6tKLWP19z5NkT6vhChTmr46Uq6qrBYWBhzhsM8rqrpvnxxx9Hdvtvzweh",
  "key28": "4WY5gSdpaL5RRD1VZrSKHMU5Sk7Mz51AbJr2JKsmV4gGnaez2Y6CdzmUG9YjqtkwVBpfTPJfbUi6t4qjYp9xYL91",
  "key29": "5BFCVSkJP9qw5evRqHTK2HGvo65XchBETZSnjVitKn4tWjUop4oSKEcPzvuiQegxWRyLowPk51U3wiRTBBW3scYw",
  "key30": "5eKpSoavNbwJWTGpr3GbD8fkem9zrqmt69kuRtoHj3G4L2ax8qrESdsQ8UM2j6yn761HM898TzDTCyx3JmFrgVGW",
  "key31": "3oLkGkmGGz7T5pgZS6nLPJSi44mNdLNr1ymNTxcSrAnniBUHV8KY1LNmk6m714yZeXYsmd9HiMxiWbrKQQvtCQkk",
  "key32": "27u9SZB9hnRjEx5Z9ojmMHvaP66BzZ5To5BBRWxV7kqQY4oPyuMFky37XEbUNVsxy2rpfTVSxHjaMJWmoZcbWoY5",
  "key33": "299ZWLNXiwVw6TPyJ2qKDMUJQzAJTud3rkzDk4k32wFB6kHtd5fVNpDFsfHDkzpvjpAiU7SXbGQEoWayxEUNjsmZ"
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
