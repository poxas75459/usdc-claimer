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
    "4g5gPuKWaER8EHD7CdNhFFxupvU9Favio3QBW1s6Xfuy2vhriM11vjdzF2b6Vdt5MT4MuBtbdNx7LMhFRDUXYnze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MyDnw24ga2p8S66inYRKBhQbz7ieaHbD2Q2tyUX16xy73etM2MR5U9ayt8ekP5w9ZBF3EmkdM6Ta9NaPzCVvQus",
  "key1": "y2LE5AzJEP3PkAS8fBxefR9r2CcR8FFhnqXFbu9MvXdFcZQsE6BKvVF4G3LnpiyTrJouRjSibbjoXkZjAhBWKeT",
  "key2": "4hT68qChyCMFrtwQHE1Sx363yshA8AsJtD4R9VY6Zo7eZoWK9rZ7MADWS7QqJ3bbeudg6Hxfiqvn3nWXjSc2fR7S",
  "key3": "3mPeLNT5PDBbEzGeF9H8aVb8gvrzZdZthMEKsvrMeFTTPdS7MEEx9BAc2Kz4frsuNhjfxRR4kUbd6EfXtxfVrSdE",
  "key4": "4jrLwmYH936Pu6jgQ425dALi34RwNZJGom3ejwaJ624dUdu7YSyXnWBhPCv8kSzCKTVQSzwPaKAHr2JjPkHVP9CZ",
  "key5": "3evMsvXLBw6DupEaTuexNGUSshcPW8CygZmANkGovDzy5WyQ7immaXMk9gc3XwprZJ4hQ392A9Tmng8XmtbPKqU6",
  "key6": "2JepWFRZqgccLGEjS9UXDqkT3JKVPB3ENmjAPLqjwtaUZy9A3jHqSQQitmaEbECyxrjhiAMvjJh86QaM9qGWyDkm",
  "key7": "34ZVr4bm7okAktZHLD3JGRTUyzBpnu9eA7AtxDyYNtxqvcPiSo38to6X6ED6G4tqCy2qD5eFxztqdX54vDLdU8MA",
  "key8": "4wt36imAcwXf6Y9WXdRikrj1du9c2jPkewWuHweWoNUnfvFizpfAqCPxQ6Ks9wjYeuUFeqbGhuJ15Yxjca78c6VN",
  "key9": "4Qixc3L8AiyefAQQwQSpQMn8YnZWfCGwhJ8URmmMTmV1p1WCvNZY11cM6JszeB4NyBeFbsGUXKiwCWw38pXUhZUV",
  "key10": "2AekkP1qta5gEfnDrxNNmErpiUhb41nNeKzM1XA424Hb4UC18xHKkdCaFNS6HzUkvDjezwatNTiac8xZ8tRb9YK",
  "key11": "4AxV8TNPHiWaAFoqdnoCzRc3fPJMavszwicYbNVBGkWLzD2GB74vxYDmhtfrPDayA5Km3hhbr7FSKcQbKRwACnxQ",
  "key12": "5Uf3ZaKmQFmMCQPupcndswGt1PZ1NpUyyovi2MrwaVguM9CfAR5FNDAZN8tmhzV3JNKJYCWsmUybJyfuKwEvbBps",
  "key13": "4AFKYxTWFAShnTwMCsZa2XMvEErmT7fnCchLpx8KKRx32CY4oU7PRCSB3Uj7sP7ZQbMJzWjhmkFQHWvkNcoS2edC",
  "key14": "2iGQPqGxBkWMFH8Tj9ncz7TAW7D6GVSDtXmVpincM81VH7tLK7ND6jVqE5nCHXE3dCEoXQ81aHK47qyADgDp2M4D",
  "key15": "2sLy8tX9AJVhH21uUsckQoJ9yQLdUmVp6BywchuXv5jrgk19mHfzgrh5vVcxmzGCBrngJ5RwGqFWkTMuaJsMEWnM",
  "key16": "2oLv8K2Bf9rcWXyuhc8t7cgFufgpG2GKnvy3H8jRTc5XftdNGgyZigH87PHDXVNPAFpfUagQafqrQ1EVDVLb6Ng",
  "key17": "5VKpAUqdTFATE6gVDMkgxgBps1WZob9LvrfjTuc1sd27ngXgyf3P12MVM1JzPHaar3VvTXpFFirrVSpseuxynRYk",
  "key18": "4yA6A1P4xovFN7VmZJTMZaBrWetMHMKaFgzQqve1JGYkZcrsmz5YZnfm3PJQc14gaXN56hQJxQi5uKGwrEjRBP3",
  "key19": "76pYDRHH5tjfiWRQDVBWLc17wygFNQ2mncnFPpc1agFpu34ne5udEB1JE89GokXGXKW3pJZWPAmUHhorEuJXByh",
  "key20": "4TvzNPJKN8QhQ2Fdwtui454J9ev2XCFv9BFw533j4CqmbuqQDhpeA2d9vGd2Kp3NEepZnG9QgBVCYMqUVMA95qqo",
  "key21": "2jva9x8gahSbNqehGcFV4oHscFYxGv1v3CovrtapgtsWpH8ctkALkiPuK5dEZzAJuE6B7qRfbURvoYCLwAzkWmvG",
  "key22": "4GTm9f3x4m7sbLrF5q8b75AyZp7brMh2RB1XYh1h9TAQbQJZk3MSUwtRnRDAo4zDfHczvMxYMHsgAeov3JqEtFFt",
  "key23": "3MogU65gZ1YrNcNM7WydFz8he5mT9Zn1BLtqRPF8Cqqzv6veqcvXx2BXdv3K3SahYBp5gnFW5oYCX5vtVX5QsDS2",
  "key24": "eTZkJE2VFtqdcUaU96e7szeTi4R6mMSGtoHpvpeKdrXMfaznzPhuyEZ3riEzSzv8epBCCkrrBGmHS7TtgTcms6L",
  "key25": "3baLqmFy6QXQDWVj3accYV5LqjHWrKoZYk9YxcZ6WzJyC2HeVMQfAXHFRmRa7rg8KxNTRDib6S9vKbwW8KiXsGfF",
  "key26": "2Xsw5TE9RXjNR5PytUEDxd9ZrpHk8p7Fvqqkcedj9WnwJ9omrHiotZMboYsStdCdjExiRNej94vzZbub4QWJ1sk",
  "key27": "34XH33XyAd7XMBAwVgc2FQkWt12v6Sj7fU2ZuAtzWQRTGJ5KgGgCUdPu4iNYeFFBSvC5VU1P4NEeRxYwti3Cj8Kf",
  "key28": "4m3tknfQPmduEAKRrt6XcvZ1t11WetaqHMxZ3dihCeK6mguWpNx3BDQ9CbRsgHDA43tvVqNqwe3BWhX64seWcv1X",
  "key29": "3HHsZaMB7iubnaKRY2M6woHbGhpekcpg5FJxv4dD3nY9xW9EPBPh5kGZ1F5qWZV2N7wjbgvTN7wz1fgG2yWD2a8R",
  "key30": "4C4iyKDtwqV5dd8Cf3BmSHDcnGyq91MMobRUJd2moAwUKzmzwogMiBbkk1dabb4RmpTS9jgiZCJYUKhtDTTyiQAi",
  "key31": "2dxk8sgrEbQ7nicxog17wu4xsoTqHuuziNMTnPi8kwK68tLu88hPW9u58roLKxhCAFdwN4rQspvPzj45oBfHrT5n",
  "key32": "3BRmVtWca6g8C4ZQhSrvPm1VgyoXVACBn76AFWghng75ndS98cw9JB9XfV8unQVYBJtmergpn5odxT3efnTQ4Cde",
  "key33": "5mtTHZkCHY8uxzfYxnvEonCRTi6e8svRvr9SKVgQ9WRLMW2tyX6Hn6jWYAGQ9qXncQJHRX59HQhiBhgVgeBZJuVc",
  "key34": "qfZuypeBd7pJCBKYFALc2Lp3kuSCcN5b1nMX156pop37WrqahFhKLeGCjyN5EoEpwChbzQ93qiWVwF9t58grQ5x",
  "key35": "3wggCbenm2Bfb7SqvjPs7PZwa8H7Ss69mWVWsds7ScKQTYU1rv5RkiJwBC9dc5gVkPZGqU4v4y6FHLVJffbKWfnJ",
  "key36": "3J5Uii4FyZhrAJBBRjqSxuEvyhnY4FeRf9y8hLH4Y1TdBEpd8hxC1VNKACCzpfh92QxwnjAbxj15XuCPZUdAvuWS",
  "key37": "3yfbgDDB8KJM3g2LqdopF3X92VWttuBMNJrfRaAFQkrZD17tfkincCkqumCtDhDRWB7g1QpYRSvLydhPmVTPJBT8",
  "key38": "57gV9C85zPK7toGPoVHQdu9EiMAmqZF7BGWf2t4tQBbM1Un8Gg8tnipNzkBrNpMVdVCzMLGD9F2v1ymFthp3eZ8n",
  "key39": "2VCrqqKbo1NURbFvsrssxpeuR2XBnbbUh4Rzd3MxxDK6wQ8aDKPspBBj3rRrEmUEJrT3RuRBRf8PsWsXTsSDFm9Z",
  "key40": "5xGeSGNx6cHqU6raTc6dYF1FbwJi18VRoL9qqdSyUokjYJmLt4N7YJps5U4M1dBp2XKLEmyNhq9kWZxzcbcjHV97",
  "key41": "4wiveCQmFaHDWB1nm1TgkNq3TTbwuG8eqppTN17nr8DVLXWY8ATKeasTvvW86dpGCLSdRDQjvkoEihivXWNabGsG",
  "key42": "2qpFR1nv3DvTxHBaquc7GjBkaLbPb8LMDZJhXePBXAkbVdx68mExooGJKG3Nu4CxvpnE3EzmHYchquVWo19ibXRo",
  "key43": "2nrqu6fjC47cCRQyTE6C18eHkeTj2xQ2YWPFCvAeQvh3NUzXYjyFzGSGmwrZFVCHpZLs9iSwefUjwhxgHxrmuKBU",
  "key44": "RVJNk4HeqvNWZgGZaGEVvihHTHdhJTBPVjZcHzLZuHese2xNPQCf1v4xdH5yoiacAdLRt3cyJJgwygvadbRg7PJ",
  "key45": "2MyyxJ5cnuMWQ44VTbComunDw7QVkJqMAfudxoaqRYbGqwXYbBq2cd6be7FYDUHN3ae2rbz8BeQaZKEfwbMwSiZn"
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
