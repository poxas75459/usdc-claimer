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
    "52bEDtJbVa95TxpyDbgDjNXhWyFkbAq5hAMZhjW3yLJSH8kpKNojm3mgt6VP47FGJraYfbv1jc5CNBMN211Vsxk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z8syMFL2e3HZ41fPBeir7ZyYm7REFymj4i7GmjPNmiK7zknfgv2HjamFtNWUZRqapzUTvyistVo1jqNiHqBSJ22",
  "key1": "3Si8TPrDN2kgJwVHsU3JD9DBgonhkXP3oap5wsMDkDGYxsdWPniUQysLtWTrBMfQ3pFhGUW8xsRmC4J3Q2Eaorbg",
  "key2": "5We4gKgxiAk7miHo7eLjMCgvFczdMaLtmVJo8bCKZhmoVkJQ3Fx8F4Ssy5vgJw2L7veQCqmJf1wBSbomGxHoeYQ6",
  "key3": "3X9yNL4ewocCaMArZvycc5RDyUAcjLMHhYuV9JTbyJKi5fdiaPNk3gRD1XtiSS7sHKrB2qNoNGzCupyqJaW7g6bX",
  "key4": "63qcEcKVcwK6ARGA4h2tioxj1fxcmnkLqAuQwgw8VSXG9qXzrYsQC9DTmPFrLsgfMEeYTVgZaZ9h3DtdbkkBnrWE",
  "key5": "4uphZkaKn25Ee6Wg1pyZX4zNm7ZLSd4UHmRmM8MfFHSmrQG22waZ3yz2KhBVHHgpJL7iXrco6WCJ6iERGxy8D3D4",
  "key6": "3SzM5TeziizGKwUvfKzcsHWuw5WrMKVcq9xR6sZzRXtfA8cF8Nh1RGXBLnKqHwTqXMjqaBbCFxWD67Vr5DKUqrkV",
  "key7": "5zApAZaLNPs5vb4yVFoP5nxWHyL5KXEvHe7CjQmfoSTRKBqmRUEG9QyPjCM3XDqaLucLqqewHiKxs1Ty5ezfbRx1",
  "key8": "43Gfba4LyR9isEN5CVgHrZd7MNeifK7tFMhbMLJDVSHYA5LGStkxNpPw5n4cAPaFuhZ9sfkrN1wynt9MCnxJUB36",
  "key9": "2TR2YWoW7HYkRzowQFMV4f2iGSvJkHvYNtnREbLh7T8xisf2v3MyRTmdQXYu3RvdFnLJ6FJBGiPs5VAo8RvwFYy5",
  "key10": "3tPtTjbnNDzvqhwKPNSrByJ8AXuRos24w7PfedaT2WuqUpgbBE2LdBCrUCiQQagkvJ6MZsfjvmkshFgghnkwiy18",
  "key11": "zNuxkEgXR3AmiV2G9Srv1Yop5zNHZfH2G4JjJJxPU63LAWXQZAgx4F6PuRNGY6rikXQRLAta91yBZ9u2qeMZcAL",
  "key12": "7ekczUpudc3BCDx9QxS357dvWw6bTBqYpyLcDoYSkWTiai2YLoP4D24TPfaRTBRQsSBo35w81zBgVGvzSLM7VZv",
  "key13": "3rCcgbogXqibVWeMo24fbHhbUHBdfxBBHyzq99et7gy8w6sgw9MWH45i1v6niBMyBFDTkzj4C8hWjXBNiQbjkZXs",
  "key14": "3pw3ML2Z9C3kqBoSQXNFH9CYrS43VGFvyd87v1GZMRWAvyRMZJFRstGxZubsM7FzpzzmpcYDtvLHRZYRodptDGDv",
  "key15": "4mDcdfJU7Ljz2hk1KenouzKqVZN1N6T7EFrYZr2mmvgknoJjzCXJH2ms1TDNw16YJXPVMWZjB5JMMwSWMBVTx1bK",
  "key16": "44mG2WiwesPSwv2vMo7SxeTbmeHmohJCDvfVPTRrtfuV4Ssw8VGus7Fj1xrZeCXT7FnwpvJBntQD9ArVXqfiUjtm",
  "key17": "5rjRqDrqXcMxu9j4SXWsKNYcDuTJdwEdoDMB7BPMm4RxB9kmBv3tRvhTy7MgxJ7kvNvDvrGLE9qp1XdxgRNt8WJ3",
  "key18": "2x2eFw5a7rPvrPQwVTbdT5xeDkRy7USnak49HGAuMpAGkmNGq2UEPS3b66B12hTL24r7whX9ZxSNZnDBnU7RpMo9",
  "key19": "5h2ohSHXqpXKgXfPSxGX834JrxtNcyZuvQB1E9n2G3Dk6q5nmM96R7YnPy8vtU3svijSncRMp9TwoVrMAMkyZB6X",
  "key20": "3UmxrJXMrNve9ygiHuL4i12f433ZzwYuhWutuxDFnZ6T1Qz3QsPM2s6nB6YxuounqmeARW4GQZLZuHf7pYAzcE26",
  "key21": "3XvsHZRWuKcVBLjJp66YqGndguhvYCYEDYpUW8CTtQMzQ2xJKoPPrgg4gEkF3zjPmQU2Gtr1mThPkhNNTUX18VHs",
  "key22": "4hgdBuWvm3249ejsPVXo2jBcpBanENW9TtjXXcdLTcWMx4zYecqcc9hPz6W7qRb2uBYwZCgR8snJ5FFPZ2K31tQN",
  "key23": "2Jj3evZ9d88bxrxWBo7i91e3oNWdv6uEHBpHTk3oYk2aBdmm7WaUDyxqqwHXkQsR98joN8THVMPUhWDRobuJTUAS",
  "key24": "5jHeTmD9UKxw8hgKWWuzDFyweMetkqfo39hb1iarf4UVme5fm1sSeEyXQk596fzGRagbP7ZxHASsmPDJyKBqyFWE",
  "key25": "3XovnwkVMW9bMcJwbHAG42BXHu6dVww8r1c2pFQ8wWeA4MaUJG7Rj4bA2Zv4CDTFKTWUUfws44qQchWLeRxdViM5",
  "key26": "5R1vbMr5jgzNHWqHEpVNFLWZk2cRhu8PFKffGcWRCPkzwat8A9cmjSEUT6wr9PdFjdEodUGWBtpeDLtqcm2rS8cs",
  "key27": "C99xHzH2SqLsdq9jRSnb5S7muxgBJAyQaiaAFmBauLNgdt2pLPK8y6uoty5juf2F4Pae3hb9e8wWq3YRX3Pod1r",
  "key28": "5yR4i7DVoHbMjN8Ey3z75JkFmiPXvscq7KNzNJ5AgWMsDzPnbAnHwsRTUowXHmUFuA5JrrDrCtjUCRgZt8tW128B",
  "key29": "2nMbPoLcfpPnkKT1P88aEFbdTaturucmSSZBF8KkZpAhionzbUtFv8fMPm9WDpXMpkGpr5wheAFZDuugikF6zsCP",
  "key30": "3o5yNZ8dg3YPWzGkw3rVCNBcT2ZTwrWhbTXPGEYqaYKNpUAnRLHTnQ5gjKuKAHfuAuDjtiu8cQ2fuAzcXnMFEYEX",
  "key31": "q9qefD24DyD5tw1RZmX4i9XUbn5YBHLQXGPdTohtcYQxmGayeTyfUH9QS4qoYJ6sjiiLndXQfsG9358m6t3Y8k1",
  "key32": "4FW5VMJVNsPTVo9VsBPHQ6pQESC7G1LMxtaphnDffyNdE2rwPyAXsRUs7hrzh7oGbX7dUp4f7YWcYn7Cnrxt4qy4",
  "key33": "3NHHZcYYKUCVkfSot7Cd3o6VV77FpPYRpfyLDucyoyXCNPsqZCLCG4n5tFVgULt9KmK2VXeDdM4VZ9JNkjgy6Kh8",
  "key34": "43J7D2zqU5Yh9FdG7jFB1otQqtpUdZ8NAK6CphDgNYmHGAVRKUy3jx73iR9RzAkq5LhNCWfCGDkDpaMkECnfAvTW",
  "key35": "2AsAiLvWrQrrfdFggnqy69dEZppha9W4d54ntnF9W5HEevLDdKSVAMJbf62QKc7y46NREJdgc5cdtiBUTH1ipMVR",
  "key36": "5iZfYo75NLWdNZ1SJriB6nSztiihNZrQgd3HXvCdeCVPQXVUAATox5e7PEfd3SZU5vUMB7qtd4DNNj7SqFfyN9gp",
  "key37": "57CBd9ZHm2gUP8RjDdRLm4ah8m7GfXpLZBPNczpvYRQyQ7K3n1F1yGmXaBuG5HBGwCbg55hB6jukXWhsMZAwhpRJ",
  "key38": "3zbUFnXTw5CGGK24C3KhNPkC7bwcDcR3EFyHUoBNWCaVVKxyPaqPKm7Zzydt4v4SMssVhi4CGSnM73exDfufPrJ7",
  "key39": "4VdgfyztWoyjDiwCvaXi8xpRHzzBmGpw5xpQ1CuDBcD4jBiMm47qx389gpUVZNWfCyUVKoA7wMaexeW8sstJMqNv"
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
