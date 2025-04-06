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
    "4gkdv52SLTdXWJVMkrSJevuaM4kwPVHmwYdkcKKd7BwWBSAVVwUE1qT1iRxAHF1wKCXPmUj2iKcjutFPK1m8Nop2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pQxkWSBzzQweXi1TU5RPKG1DWfyK326dQiyXhjdrYjgZdERP9stPp1q2CQStCLmazATEpLjdCWQS72HKezzVVSt",
  "key1": "33gGstRtZkGoRvhj8sn48CEB1rkxHF23afzva1J7eRjRour2hSPoLeE4r27bb2THPvaCDmaVuqunwZHJs6BnnJAF",
  "key2": "3v8WCymaJpgKJ1zc9LPiXcG9GbC5PrarPsiMyp3rm52umDvaH885mTyt8ALow9WPC4wVjmuzE1KLSDqLQwPeGsrM",
  "key3": "4jdWbJA6yC8Eb7CzfJKeAy1oJDzZ8AoMTUaUUVq9TSkaZmmEaqXvTifY2uu4S1TkwgWGqitpMqsHfxSgQqXZ23w2",
  "key4": "4TSaEncixz1kLyBUmpBWfyEGoi7JrK8SUWzPrkbJnGBJtwPgP7FwAxzNC1EuGMVWFtRP9peLQs2SWp4qG4yENNux",
  "key5": "5eWZY1VA4VWALig8cUqcgAxJKAmCYkL6xMgyEBqjKPS8cnxCUdApSgtm5Xke3Nq94uF4TNn4j3RRzXcpamjqATwt",
  "key6": "29SxDdYC2JoyVrec1Nb65Kdsgi4jgZg3oWRmhQo2ePrP8Rnc2WSipoN9dm4J72dHqQe7gYWr4p3wH7dKdM4s7DHm",
  "key7": "5LDSj9abYPFGJp49EGfu9sgr1Q37Mc4c9tgoquSspJH8L7txJVNUhRLpLPACePEEWeDvqBBA4cLyX2dwb2JWNgim",
  "key8": "52vLoV8dtE699n6Pbc4hGkgJXydbS1EaojXLbugc4N6D3pGvksQvoNGgCggMkunPUiXb1p37R2XpDpc6Ns6TeV5p",
  "key9": "1oyMKGedTTeS5iiHHXCgjuSERS5VXz3ig21PD4XvtAcfPRNoAX3pPCPntZgAqacL7kofpEAr7AS12Qb8hqnijVf",
  "key10": "5FJB53rpYKZXoSEiNzdjCKpQzJp3KNsrJtE9HmR352mU7SCFKe7K5CBud2LRCP1BB5iFfRPrcfKiZ3Gdoc6WNvtN",
  "key11": "5bpoYsY9jJtRyKrsXwb2uzf6Uia6thjtmSpHsGPoyReKYDJXieCQeKJVRBNPxrsbVVqWELYhcBpXeLBAJCVYHgJp",
  "key12": "3DtTXUoKAhCGiCbPCV7Ugvw3GvL9cLstfz5ZuzEP7K22py6dPRMUib67yDahc7eUBvGMP4EEHN4cjmW9Gr6VNGd2",
  "key13": "5hzbcoTHE8cDpWCKRKkEw23tFLrds387Ma6yWp2Cv2ibpN56PSNChQAgrDDMhUenqF4oNEKThj81HqPaQgPvmAeP",
  "key14": "5njKbZSirPr771xxfCEKYfCBRaH4o65hj2hSRZzPSJ7vhG9PH8r6PKcZeNykcb2vaNyTDdEGfrsn1VX8dKLdvMLz",
  "key15": "4z1SSkN4FeGrjRzRKxHmjMMhGXoTMSg2q5ULM6774U9Hxnzxgjpky4v7XVxUeSLoZi23hnpt7uC3nBM4h11JCYCL",
  "key16": "5fmB1pX3jB5XCw2WYNe7oUrtMdTcCgD3zZX42nLKF6ULN4DNuExf9kQhuDivFqoiXH8kb3kSDFDNcbxgB42nEw7P",
  "key17": "HyNHLnrPWTo9qg4UnT2M2P5YNqhgB2PoGVybrCTAhPuYxmYYHvQGfYk7cnnjgbxwSR7aX9Retkeyb2gCrw9vUhg",
  "key18": "48QYErcoXUhCYC6u6jGbRPKLVuUgCzysc3K2a4N3mqUZYeP3aBc3CZvrzdMycz68TWE8nHXBk6gJGJj7wB8EC4Rm",
  "key19": "4pWMUVvFhmgqYikVdB7yLiWhWDQgLX7sD6JqgomTW78ddjRA5A5ZbrNUMJxFNvCZSTZXHNQwhAVdFdC3VdjbZ57x",
  "key20": "CzWqprfGW5gAdMHibuSwHXTCr88wpQk5YkZxDGJ4rFjqr2LfEN9kxk2hZUnwQni7YGHzX5dkZfwUsQVUVzZ7Uig",
  "key21": "5q7YrJH6M7UVi2PohwQzLgEbhfZBzwYooPjZX9pcEc4fXZLJZCNQ4vCWanyCf9mCBoshXPEwez5BGAkhCW6tQHTL",
  "key22": "4gXDiMxSKuYdbv9wQ7r5o2TfSmsGamEqiJm2ZCUgBd358py48RYmjPtLfD6ADQfKkHnErH9cbAoNJCHKfHnJztzG",
  "key23": "5rShuNPkdbixniEdHwsdGbX61XU4Nu512JhTAfzhg1eT1mD5ytpntof3UHNJ1r8j6hpuUFYQUxEhARHjoDgxH8TL",
  "key24": "5ouwirAkaJrmkhkmyYQRQaMPgFX4QSek1pjNU3Lqih4QmyrBuEteV4PEcjgaAEtf4wXtBBLcqhGDkG5PniUVRJJR",
  "key25": "2Bzg4SksRC33RPjkgQSiL8vg3iEQwvaSfC5MVesKYUS7cugXhMZwUMX6USpeMDnM7Yp79v8D6YKitGmMctDcdydF",
  "key26": "5om8nDrzqqb9Mxawx7ze1yQrFRYS4KPqeCFQL8DXjFMFp8RwrTXABKd1Wv8d7KbarggYgktpEvDwkcJ8NGfLJ4HE",
  "key27": "3j3B2dR3ZsMcYtvp1irsjvCXykvqTJ9zv3GQvRnmdujfQEGCnZzzMWE8axbUL1MS25Roznwd9EpuLfhHazdRCwwH",
  "key28": "3ByZiD6oi4oE8qZ1cadKyGgCvWAoZfcwogHgmq5k43PSeLap7aqznWNWukpbRKoXMoMcw867YU2Zz4YooGKTTM2X",
  "key29": "4kHKvjtJQAnnMsPqnTTLFdx7exM1kFtW5BiAEQkFMPWkgqo6CncaKRrg9kqfzpJ8vPCuK2A1Y4NLj5BAK7vzXLnK",
  "key30": "5cPaqENDFqua5X6ikofYtNkYYAKH1yj4f4fW2EdZEuShxSqzrjphYyKenQCA3WtFUumZ54YZzBmCgUmcvcQm3cUE",
  "key31": "2TPCGALvHUedkLw5mdXYE66nEbi19EBaDNjHQ4AmVebPxtpVv9WUKX3xHo6hu5KFVTQjwSMMDTSPw5M6S7w2akoa",
  "key32": "2DZvVhetbF2ZZVbVizPnsWwEwRrXPoyQS9tkP2WvkmmENZurmV5aGvsSrXtueTkqTCevnoVSzBDLLWRUuEP1cM3K",
  "key33": "2hoDwqtvfyTywY1eH3UPjKsHvZHu8d7cbdc6n5Y1rmJvYfnfoce7qULoPQyJ3JpsHP7LuasbfrCEUUagXWvvkJqL",
  "key34": "4jmNLjxTwbm58yDD7Ud9QsBqdQbSAYm27xa6UvpEYp2zFFh1STMQvgbpXKDHqHQ9jA3yxmjS9xfkEzu78XkZUN2P",
  "key35": "4s2jrgFwapb4LDCxkvNQp1AiUhsuDno7Ms6ngXV9da9tHCrYbxhbGRxRFH2DDE5Ko3msGV3SY8YwFXn2QZub1S1w",
  "key36": "5iyT81zVUPkZrsKSH48nWH69xaZs82gDiKHY73GrgpbF8kviAizv9E7NhPidGTxaLFwRVupqK71PG3UoeqCTGeA4",
  "key37": "3JyrEDAgbT6JGEfm6zngP1fJ6HCGjdHrtx8uNamqCQEZp2zzoZwcxvHuYpHWgqCBLHdMuxVqs5gNYwZiUqAtqKYp",
  "key38": "27i23Cu2k9Em632YFd5WiA4qkGpY9UKXUyzC8eYAF1QQRqdC8vJWuFJsgNn2P2xePUkRW8MPMz5PZTVomQbUShMC",
  "key39": "3uZ7VifbasePVLHMnipA4Viy9cMNfnZrbK7i7UMnPT4zQ8j46ZiWGFaqubJocznm8GcWTbrPWmGqL8gnfGxwGoxG",
  "key40": "2vEXKuWUCj2KUSGgWC1GykReZ4xKnrc3rK7nbcPNfj6y54JZD3JFbGAgmjmpiEEkRvRPcypny21mDyzkzhgmmyHq"
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
