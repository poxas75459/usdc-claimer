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
    "5WJ5YKhffRXYec64PNmkKKXWs4pCJ7WW14YLN4eaxtX5zZ45Sz9hkXqfYit2qy9rwyCWPxRwDDsygoFgPk9Kunv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YKtA7AJYY2ohUpKJ74BeQonnhhpkuaybV9dTysULN8HKLqWi4DYbUKSKa3eKzKmSpRAn7hTw19b6Vr2M9SZEu19",
  "key1": "FLbNPTyNCNd4mn1mH9ghDyqxrPtaYSya8XcggzrPNQXsc6Hg3Cn8iCY9uGrHnaYEz9papvDBHQwDF2751KrFUaL",
  "key2": "4p3NBJ3vhZhhhAa9keqYToXVVDHdfrBJNTvZwuQQDhFF5HCANHxj6e3jbjQinCkHcL6QDrE2AyDwpvKuvMVNcMbW",
  "key3": "26nZ8MY58j1csLTHYt2GShKUj3L4V2BSrD3oVEPJukEiaxDwNztHUFTDZkTuDErXRKfimdoVzD2KDZABnJWRLUq1",
  "key4": "2dmq2JwN97bwYMhmFSYAHeQAMwDQBqHgG9WTDcmZNzSw2aiNjijJncF3QbhMHDjypszgzUcJWoTMTQLKXjr59C4A",
  "key5": "2yhq6X63SkAdrHQW1KoDMNc3nsGrjbZ7kwkYQvxLWXjDgpTdJe9btWxLyBpzDx6rbDqF2b2uTdFbZ5QnjHGn9FHe",
  "key6": "14rnQ1jGgk8JreZ2MBdooC4zgYqByFetbvZj2ebo61C5HXj66hPTxVpAzhRvpCsrAHHCi4HVLj6St117KzoDyoR",
  "key7": "UMX2gJoihEcVsDJT1znm61NBwMHbPHQvqawRcXmk2mhVQ8Nu1RGKtRRdGwcnWE7Y2TYJeEv22onDCosr2N8tgpR",
  "key8": "45MEFx4G5nbZq3SeYujXYYcrwR1rokNf2QekxModoc7bEDFJRMefPqWaVewW3nPmhzVqckC66wQgjzDPa6RsP1U",
  "key9": "2Qa9BFRhpwz4qGX7WggkDQbMgXpemDm4PUVkM3kD7opDYHXKrNZ2wjDEXsbGMun19Bk1fjocfy8t87s4GG49WBau",
  "key10": "41RwdYtcXGLtswPvExrfEeXtci2pqAcgH2gDrxVgGA2cyiX9usNuHpLtfgAFeXj4PcXqCEe9TBAPuHVmmhBvw8oK",
  "key11": "SbfKu2M7yDmTs2hRNZiro8yepQ5wqsXMBGQs9pVhJohrveHRxFyzDFaD9mQBH5AA1vVLcPqvzLgNJRJF9myYKVT",
  "key12": "4cEsaa5VgdvpLL4B3XQgPPcgB7vnsvYTAP6sdokExt8cnWzRM2HDYnvKKtnytsFXpsaCfS1LE5Z4ehVkxvBDiDMu",
  "key13": "4uMHXr5eqACT7ANHZ4wuAZq8Vsq7GDBXQPMuK38jtoSrGM8K8wjnZFLpiEimmSKi9Y8frgyuXdWB8pKp1gznA6wM",
  "key14": "2Z2MXCxWRKY1M91PKaBwt2AMUnj6da87CDf1hG9fj8Q9JBhGtca2seoqr8qR9H3Pt53mjgnZEY4mGamp11Pe6XD3",
  "key15": "4SWV4k2z76G5XEcADkKfugPNxFEFMwmjcANoDEtL5jhEszb1MBm1niisRPe6MafgFLPDQxsWzNHUx276u5YfbqTe",
  "key16": "4YUQjBN3LsJEUURxFMx4fJbhuxvh1pW3X5HWZwtEfHsthAk7CTkx1XszynhgsXVHVE4DL54XjRsyMh6dbdHh5pT8",
  "key17": "4hcHf8DH95vRQrEyAgxJijhTrJemXJNws2ppqZdEUZySWZXMZx5CriarUhs9PaupLm7TFMe6mR1AYRZHbmeGmUWz",
  "key18": "3B6EHT9ifQqbsA88GnpUEYs6Qgym2cnUcbiNea5TyhzRR3i4rqUjH2GpRkeugWHAChvm9MdbnryySv7RxHm5Coa1",
  "key19": "rtxHKfi4QLXU5JRtpm2xQwfCoywSxi4H596Bc5bCFbuEKrmpJL8bQTvh1Q9pMtQfqZT18BCD9cwMgV8mDaY3Z2Z",
  "key20": "3M2gyTdUcjgLUt6Nj6cBXQWRMMbh3buA5re22M6UZNgVXKJug8qRkMsmDbQXyqcvfAJKwNF3hGdh14YyBfRh9xx4",
  "key21": "45kXZWt7jHf2YQufxPzeDAm7CJpGFDhMfmuwY5JQTnduWEcJwJV53QzFaxXbWXvdBQPZW1wHYBFGVYUDeoarRNgZ",
  "key22": "3NgPgoH6WRTjyvX7ffeUkTFdNgvHcxTsEnMqThhFC6RHGusYZiNGnzkERVxjsHcxMPfCLusDAEq8q6tbgGSXbDKW",
  "key23": "daVD4766Egsmg52qitphiGA2SKeMqfLeYWtwv5nefn9wFqC1qzGHBwYT4Ev3kzpxH7nFvJTVfxqp2vyJLJskBze",
  "key24": "4MVpDwTBwXrsrvATTP148iWn4RD9XwZfPhFGzBjbfAwSMJNSqyn1u7K4VzvqTy5NZ75LDzv54FxTyK4hdZwGJLBH",
  "key25": "4rxkEc8RJXn4D25hVxRD1LbnvJ8pg53jYpMh5mKKf2zLePZAcWrmUn1EYtvDscnJgNimZ5WfCVVpnHyvArKuyB7Y",
  "key26": "48ww3E7iwcfkDA74fcjirP6AMXNodfoU6CoCSSi6YApUHV3GVDywEgS1hYcv1XBgRzTMm7c2FTkcEd1FQySLSZWk",
  "key27": "2sAhJBfGH7pxFZu5BUcBsmWVfUjguSpNLRQNwHgpiudsXaajijR7CigFuNrFzipWkdQ3srH9xTzYniJ9zACFqtky",
  "key28": "67QkCmX5TpKTtwRD6FaiktonUHf5kJXqVDkoqSUbMa3p6Ax4WcHMAVJqwPeawdzCMn2qEeV9vCAoGDGBcEGfk7BT",
  "key29": "29xgHK1tM9PZPZibeQSxYfo7aZeN2Z9XiEHudtYuv8KDTo9WCJFBPChC1HDL5K4DJW1MVStMyYVbjxgJGYCKnktt",
  "key30": "i6LkXAujGpPgV4voBaLx7wte6LzHFastLLq99BqoJsRZuGGuAAHmGxyfpUKwKSxKshAta8NaMmfK1NNCiMPom4K",
  "key31": "4XtM8ui7z1BDAwooNXC7hLdkCoQFnpA8ShZJ96eEdgSBifmEGEnKnHtuW8ZGnbXj2Tk9p534ukMtd2ACD8LmdHi5",
  "key32": "5WE1Vq33KS21SNQUru3Z4qBpk1fuPJkQvR1niou2JzFB2NTwzZcQdRuZizjjqjPv8PH6sxHhcwewg9LiUCLCj7kL",
  "key33": "4C4z1vAUqvsCvRgxQBAmFdHW67vJYccAJidK8N2VwCP6Q3QnjgyRwgcT7nWeec4s23xwhrv1knQtUXu9M4e4x7Ti",
  "key34": "3hSn37oVBh58i7qpxN3iphqAkBSQVZbTWX94PG71wL1vs2VNH7xs1FD4EoVoxJexjqnxRtCuzKVfVmwRzGd8DZ1T",
  "key35": "3Eaya46RrKapSTbARX1UgbE86BoySFvNSphz9JenHDYQKmkXVH4k2RoZiUoa5PQ3bVqhw5r2tVBBSqUtzHkqwPqU",
  "key36": "5H13WwRx4wHEpzBF7riKvG49fDwd9RGWW9V4uKu6X1ZFJzRek7rAJapsq68FC4kSEV5faBDxHEwoRkBB2cRYiDts",
  "key37": "3wmgWLLTWzjj9U8FrwoMRLycF84EZKGtExDdaNqpyn238gq8NYpVnmn2HtPK2rb7NCZuKkndtKVdeqBtSwi5GvWU",
  "key38": "21VA1R9VvMV5MGTSE5Z6Y7TL4TRX1cKhRJRSZsb4hepJ82HUiqnqkNVSawzz5bvKow2S7priJSLuEBx65cZNR5RG",
  "key39": "teJradL9TWdM9RHauGR7NYrWXQCMVrmx7Vov4YFExRbUFT5HvaYmsZGEBmsQqUNY9B6n22G6qRZfh1LgZsh9oJ9"
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
