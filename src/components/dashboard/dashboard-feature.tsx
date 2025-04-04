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
    "623i2L1aUiYzZPQRxtf4FmzyjCEcc6rqTbNbUfRHdPxh7ep6W7LBrx8HzrcADqsAznzwZTUDGBsYnh8stoe9WAkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u25HNpyMQL5U8Ae1gSkb7nh4FS3RCvMMJbj8vHU2CyAGfatFRowEyDxLwJXkMPsAK9ggaJYN58sWH8zVJ5mgS1m",
  "key1": "4RzKSKh5Cw5saLg8BK1dsEyQyNKebfYtcjb5BKEb7YT366csfGs8QicJiBUeBQZZmn2YePW69sxCqVNmcGyCt4W6",
  "key2": "za2oEL4or1ZtaGRcuvxCoUL7ZSF5dpJuhrXjhCT2KwUPfaC1vFHDuZTXgMEEaoBvkwTRU1N3kgYqPpcVfGedqtg",
  "key3": "TrFzgKz2Dh4zmPVa8jiUuAZyRQcrdddvHnGTEQ7JdTn1rg48f94oX4sqjpbYr51jqQEsua58ZrzqTCoVMCAiN1N",
  "key4": "6WBYKikLq13pibPM4a8BQMRF8mzYVvB8EnKLiu8AvrKxbFu3GTk2eej9Cmi2gUa17r3vbe4GXJ7sbgkqJ71U2nj",
  "key5": "35gJyUd3rrLGMi8XpvGRhStiEqxreWd3z2MwUswNmaTZFS5RvDCKLPmJe2eABiVR3nD8BWm22qQVoY6RjRhQWtc1",
  "key6": "5AsCCsp1GmjzJZmVp4VT8rzd2Zrpu1Vr97UrLgE8YXJh2JpB4n7yrJn8MmyGYbcPt8TZxvygDyGAHAWbHGjXzM4c",
  "key7": "2e5kiKUR1veJ74ukRVt6SF7po46SnNc9ayEurronZVf1w2iECYFGRKD8FDSRCQjmjAVJJaTuDjVQqzdcrNZesFgW",
  "key8": "5aV8edaBx87oVuuHTXHXu8yRSGA44JDUvWzm7rHT79MvaLdw47Tvner9zeiTWfGmCe9ShpymzYmME8RAU9wcKVfN",
  "key9": "4vVhGfkZPKLMt34iZ9vWUQkgMw8J3FhjyKkYpSiJjvx4kAGmdRXYJ2rWE386f6FUrLi3GXTguyJFTQHDfdW6ovLX",
  "key10": "5ScRMoq3zBn1wYwLiaGPqSvVTiVZPyUPCA5xiCohsApfCZZYvd9ASSC9e7b1m84tcZ1J79FXvzDWpHwDdhKwPCfw",
  "key11": "46LTaU9aowQNGASi25C3hYxZs3BD4BJgq3o8CjzBJenU65yPjuzQdhWiakJJxVEEjB6FNPm67fSqC7gBYxckFGha",
  "key12": "2tQ7QMKzfrPYL2feT7HJTLWgi4Tyt1J6DMqCcgEBHHjYkiBmpVdvtexgSZeBXmJEnb5reU2yku7N4LVmb8RM8WNx",
  "key13": "4kN8LqCDkon3jvqGDjobnR5qe7oU1tZjgfynLooZ6FnAbYKVm4cTEBUySv12mQKBMSycJqGCq1u5nnWkd1ehyiT8",
  "key14": "5WbHeMw27MWebMHbC8E89A1wG8FAdtx5U87CFHvo96nAaYBprJiLm5CENcyc18hHMxyrzAhFFoWZ699AKmiZt8Pz",
  "key15": "4bHswoaAwANN4FmdqmdbApe4GEfuSCCzH3CK5PaAKV2GANR6qzK1TXgVwAkcuyHC5FhP8qmD47aU3FN8JruUJyfA",
  "key16": "5PhRijnzNoGZHTKLiPctQfof5nqP9tTh8CibYyCfQuDiSGK62AgRUgUihoZJtmZ9JPucLoR899YJNRfZ5UTktR6H",
  "key17": "61Vi6Di86hAsihySEBLvnZeZzrcFydQqMr5RvdDyada6biePsAfvAExiNxk32wVqimH5wvRdxMtyB2srU6tcPTXr",
  "key18": "WAtLZmu3QKdr4W9nkoWgixDDpubK6TKdYXmS4ttEAf6xwGraBMDZ7mQR2wYs4H3LWs16htmG3zuZR9AZWTNB6rY",
  "key19": "64oHEQ9KGuPAJroZcc7vidnkSUdRYr9yPFXDpZAtp2XCZ9yeDwnpDWoyMsZ5cgXaj2RDajExWKpC8MzzGaQoBeBG",
  "key20": "5k6rwNFzdJ1zAjxhazzqBR6HNenXVwiWUQKJnd1ecNjj9zc7gRU3oXvkM3LGVo376qvPpPCCGSM1k9xrD1UnKtz2",
  "key21": "2U4bCob9LxLwNDgucEyyW6DLscbNnitb5heDSKz8btD28Vvj7GPv7dGXMCadyWngRM6gB7guGrAqsnsfhMEbWUd7",
  "key22": "3tiLH8juP3pf2pdAxxJMLfqyEKBLAgoVARgYG23Y9Tg9QiYVzi9wWAfT3r2xcitnJQpnAcKJb8qF5R76Shiit5wR",
  "key23": "4xj7Won2CoQFA3jHxqgj9NzewQZw5c2s7WqsrkR57rCE3cts33fRrsvL39mauYtVuK6h6WGZDzyKf6NTkk4Cz5ZC",
  "key24": "2Ui8vGoq8x9KQjHHvVLiZhZvwb1a29VQzqLLER44ZwrorV1KyM4yYSLDD6amMYJsipPJmycuMbnfpwWJ3XPj55cz",
  "key25": "5m5bL75zRp7CZbDXKUDsznamTy4pe1J4D9TVSUF6YQboVZyT4fHMuMshMJdV3QKPKGJ4tMxesXKGszJ6Pm9QSRvh",
  "key26": "3cfbJTwqqn94QbVJcGbC738BTUoHpr3m4i9pd14REGX5t2zAJwyS4TCeuvJopZrMsfg114eDU81s9mjkVtGHQMQN",
  "key27": "2SscVuHhyp6dHv1CH8hvCdjDbWWa8NJmjvjDo9en54tQ6Gt8dNeH9Xo6YVEocjcvCxddfiC6Dq9rFeGCTNfrobRG",
  "key28": "57YcZN4nq1kyeYiCU7vfLZva9cu2J7UmvsK5xrff2A7FaEHLzfdcv5TJBsVxrW5BYtV6B2HPzW1JV5BzG8Zm4gJt",
  "key29": "5XtaTMyi4k82DvLLD7snxdnSD284HVKjSxiwBNE9VgUVZm34NgeCv6gmKnYMe7XNCzK92Zq24AbMEZ15hnTNYuRi"
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
