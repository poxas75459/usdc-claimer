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
    "33DRH9KWngKaRhnMabgVMiF9u62cxaRg4Ndkb1Zg2ScPJuMb9fb8WVtbrjrQbyYVkdNt3FVirGKaaihSzFDFw7AD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HBDZbd8QpXJZgdfv8PuwuhT8jaqUbjNtiKdGuF7yBKY3WwFJWUhhhDvWMFCLUPndettXmPrk4F68C1b1uy6BPBD",
  "key1": "2afbTWbD9VKYuyFmUL73i7Y15uD2yzpHvRj4YUG92C3wNjJjk5Q9dTGjaD22M4NQ91UxnYobSpTQ8Toi9uvU8oER",
  "key2": "4iZMPno6L5G97EbXw5nyuMNeFADTcLTsGXbJ5jNGVbRXowwXunzHa84CueVXMjFaK9GusqqYxG3s6mZzPv8wUD7m",
  "key3": "3sgZdHfgLmrRreJ9fBKWbgt9rxS2pu1gpNdC3pN22uoqdi9q1YRR6q6TCQQt9b4orWZJxABWvQr15tLvoP45JQSS",
  "key4": "2PgSuEome7xR9K7hpJoCYFSfg3v83tEhcRt88P8WWAKnxTE8B2ZXSN1MiaP2XGxQtvcQsJVZBgMK7oL3mLixpWAC",
  "key5": "27P8Srn6TmaJoGph8KEhUSVZELhvwdGLug4CR6rarpTSQLMBPD1AeoK5zB2D7mYXJtKtckC1A3STCvSem9gT2WCa",
  "key6": "52LJqjeHthdccLQcpQPNpiegkaQyaSyrEvvuw8tQ9yEnW2JACvbyuzb4vWpsapGgFi9XEqbWUJ2jTtmYzKnRcSPg",
  "key7": "4oUGthL6aDPwKifc2YZkmgCJ1APiciwA19zygrtc1aBSaTMQ97nSzgU8siBind7ChoqU3ABgwMV19uApzcUzQS1c",
  "key8": "2EJjHL8ELJQYyLhrAV7BmYbRWkC5A3YyEtsB9cx6hcjfcpUK9qsKW8RxieWJ9tmxB5XS3BQXeNqkmVrcYjVdTqYU",
  "key9": "442JGhhim7kRnrva26ijpKfv1VaqGY1rxxUkuhBhS17b3TYQ28fGUdJBPHR3nBqadiYhBnTDEJsPJ8kFHTDREZdx",
  "key10": "2Uq6TGACCWd85jvdqPY2aagB65GJKMPxK2x5dqMRpAh1MsnqZ5W5XQEiL4ory4dXvZEhUDQv85VpmRvy3LbbUu2a",
  "key11": "2rjtbon5qhmV47ikw9CG8rTnnuf3SneYJKNEgGbsZYriSg9rqs59Az7kvqEKdC8a7KvycNAdEpx3ab1Q57bugNYf",
  "key12": "TxQp7nZTRsFLoPqg9Tfjezr4JbqyRsZErhFt9UjPYvmqx95C5iDnuGyvSBxvNssq7hjmmFmJYwUxEbXyJXgjuRp",
  "key13": "5eQ59VieP61uzCymze5Jgp14xsCuJtmA26Lr9v5N22tEZKvM9mxZd3PPTLiFjrKjyyULooFBcxTAL8gGZ8FKMaiT",
  "key14": "5KmS1eFtALu6TMNNCUouYWFcBdNZSCYgCEhtSD2SLrPtj9LTgpM5QVpXTpXruAiXfR7EqNdqPAQtUASQGorNC85S",
  "key15": "3UCX19MT5MmnJhiT3cfbji1k5GmHVfvu77QqoHtPL1h9vmycwyD7gkR6hNZYmTQaBZUGpjKpPZvtbm818PidHyhh",
  "key16": "5ctGqJJogcP7BTWMknxdDfdQAo1QYSQ8NxwMVLcRyiVDt2QwSjdfK5fSjHfmVKajjwzU41rJ3nGiKwCauXXge8um",
  "key17": "2Ldj8X94BeCoVDgmHFews5BcVWpNdCLdgtL1uCFDLGtp5ivGmD5XLYQ4v1z74djL6LFYjCh6f8QNTGmtRKZcbAaP",
  "key18": "4bKbi2uRDJi2PXyUw3FoigkNFGFj2nR3M3QW8a2MPuDRGAjMvzrSEjyQnERLhy1s6hcQBHgAiKNNDkZLp6uwq6h3",
  "key19": "Y2DQ1C6BaXPQyZCV1dahszaPVDvApnqp6kFJambhCsmVhSnX3jepzh7YnN6E5NSv7wGugNxYBE8p5hffVMeBEAk",
  "key20": "3mv1YcnYhbb3K72mE2JPzHTxEV1oQi7BetVEMkL1X2Xwg2NG1twvhzf9y9jzZp4eyE3kcgtKEZAnD3EQfAMXv13q",
  "key21": "5YpXMjcwnkNoF84U77hQYNGsVxBg898Y37v1YHM9nUDtkyaLasSpxi4AsxqV6sKj6sonAq5kHGb77ptmEcwV7VCN",
  "key22": "3TijVVDk3dRwVYyq2ewCoBsSYUM7BNHEfXUDoeLKvN7Jm8ZPUTZrjfKGKuNDTLujFVMeAUmY1C5oWT5FBBahr2mU",
  "key23": "5oMtToZHGNi7oBobq5ht75SHC6ZzWVfKayhyNXJwvQVyD3jTVXofRzmRXt75zxHewQFjp1dtkeVa1KMAkcXZN248",
  "key24": "5XVD1jAibDo3nSS2zFmQic13Yv6fyErj47zuCaA6hJtMtd4Vo8EACjSoreZ1NWitG6xKBzo6HHYRWgCwLFutsDDC",
  "key25": "4JjrVWTYJWn9uvxZfP7FuuqSBzTN8K4AVVewZxLstWJcv65NwsrkUVH37oNZSnNdeshBo7t9s7kUQV1JWdWMrVbi",
  "key26": "3hQP76E87RMRekpczx67yCuV8QKxUPZxS9HMGxudhUe8C5k1PyuKARLr1ksiNfNRRSCJDVyDcPjJ5hbeeFCizJfW",
  "key27": "3GsqwDtizimeRzTGFxnbRhePro6V8651vcwiNuPSPQgVBhEotCeVUAnamZkooiVMQkF1AQXxWoUUbcH5h7JTJP75",
  "key28": "2Fjhrkud1xFA7T67YKWGinjyVX9xqziV7aYMJRtSozdvpaaSB9rPEG1WqAaWFbYwgmBYjv4BK2ELpsW7QUVZrCdi",
  "key29": "5sFAbgV4ShdQjLqV3XpC9k8ENsCYoRyrEgNqF5d4DY9mRpdzi7qviXDMTTQvRy4kWk9uU3iPHzN5ULoPJ1TGdtr2",
  "key30": "5XW3DJHSxq8ck1BumTC3VNqj6PYfRPbu9aGPemGCcgCCLrFd1rUedqZEZECgduc8Qdr4cofhFfp5HELLMXuW3USm",
  "key31": "499pwcCrDg6ZjiULGra4FNoodgnztj3mAZfgUH2CJ3wbjvWQ5ZZuy2f2DZCz8LRDh5mUvDaVMmyW5a3ZkwoGxKQJ",
  "key32": "38dnUMHuMdnJPxFP6rPefKUP98VjZ2mYaXYnjb3KeXkv61gEkW2QmwBp9h3ENWP6Ku4GnEWqFAckWZcoDyCUPpoi",
  "key33": "31oq1kkJXSHdj6fYo9PcjPrJj5yNvDKPyPSro7BTSGiQQSJYchrTtm9qg7LasBFuJaaAigzQCajUNFhBUo7XaTbU",
  "key34": "2HTCDQm97aaqPowcBenmZC9pvVQzNYSeFUVUzueaqo4ZXUHF42TeEtcAcDoaUL4Jo41PStjWQJu1p4nKQZ6g2MRc",
  "key35": "5QgfpZ5c8HEKCph4spjXtHG9NjpWvyLoV4tJX8csZPvtEdEu8NecrHrbn2HzJ2ToJ1Qzgu88kwB7kWA95E49jBW7",
  "key36": "3nck9xMbBHVFPXEvui6K7dryDjvo7ntpaPj4teGGDjMGTME91BNbtteD5mcWJpNoR8JC7ajLe7iKCo3D6q6VfL2m",
  "key37": "61fQHgsfiRqsDETVgNxseZEQwS693oGp8pZ1NTYRypcRyUXTyTbHpU1JazZqp1X2JpufekkKN9yF1JC75e2RAPuE",
  "key38": "29ofMB3fTptfkbG2USQPTY4i6bPMv9hF92ETzZo6BghDDSE293xgayaqWTqEufzY6cnMSS6FL4JL7eYUFzdt29E5"
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
