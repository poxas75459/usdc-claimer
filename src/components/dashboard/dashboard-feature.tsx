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
    "374eJF7JBkxGRmoL5ibDsbSSVDPS5Nmmq8QU8vQ4xPLktx34hWPuYXecCbqrTdt2Mdvca43Nxih9Tp5htGZrovLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yGfq2BRpu1raWmgEqW9Tz3mUxCR7hLiYpDSS8w6Ty8gbVe3UaKssuGVJawFjM3fWvBVFQjEizfNYUuxQA8H8prD",
  "key1": "55dEyji37VNAmUfazdHjGq2TsY8WTcA7CtGGca2F86YqaGCtzYrNUhMGMaMCND3ma9YU9tAwUav1CobCw9anohiw",
  "key2": "QtEofVZyBV3gfWeDtPjUdapJK81Mb5ziBNH3787ZCCxKFTyX4pqAHebCzmJ1G16u8Pp6CASWfMD86hdsXRW6fuu",
  "key3": "5GJaNvhFNpAg5S9xi7CJg9BpZNEnfCkjHZHJfW2qjLRu8acMqfUBLCrAXQfSBkomFa6tWk62Krz8yqnhPR1fg66p",
  "key4": "3sRGAgg4BeYa7gfqE25PS3zMU3ouSfPkwwVA2c3ZDdPNqAWcnGoR43xcnrs7Upj9FXnEiQGqUUPkUp2HMUVEDDqQ",
  "key5": "66t1nHG8pgCgxmbLXiAw56X4aPrh4eWmzUsQUKfn1y2yt5oeq9iWrGa8HeLvLLhEH23zaQt5acjqJaXrVQkBTiXp",
  "key6": "P8s7zvsAHUYSM35oYxXic3PNJ1t1jkp1vqtFvZkzAZGiFwzDGdneuxSBCRMYZP7Lmrs2jxTtmzkZMyqDpP2RShM",
  "key7": "4TP8LUg49gqZSTJS4dQPMEB7FCve79ffbJTB8U3541zhD3GLV7rayrmnEAX5tSDA5qePZyoSXSmvNJy5pH2buMTW",
  "key8": "5aH5FoQDWtuztGwf5zHQPH8cmrBQSjkB3DCpHpVTLr7QGiFmik3PtsoAHVZaRGvojam8pDy3ve7CrRYX6pXGVZre",
  "key9": "1bEzq4havkrLzPACzm1BttvrVWBvzwWwhHZkkqXkLJomwfaDGy4X3cx88n4tfZg3MWxnDAg87Ug9MrMBi7vBHmv",
  "key10": "482yYB7mSDSNu2MGAiex4wZj3c2X3beXkR6Bx8KeC6pzNJgigSpDuHdszr64i1G9GgD5pYJcWimAcxqTNytVHt2X",
  "key11": "qqsAccgKSnzGXoBLdqxLmctR1XXhoNPWAvxdNNxbHCVtXju1KvGXxYHBnkL2fm5zs8hmHgS77RGQnV199SdJ5u5",
  "key12": "329YCPAZCMhrxNtngaC9s8bEaVBqDDB4NLV3s1kyAiy1upaNLUbTdf5aeYSDmDwQLKFV6JU4vKfXEffwqmGaYf83",
  "key13": "4UDQ1kBEgG71L3nwwcQM8HsapbW48KQ9getvtD8ivhwZLZETbpNqVC5DmpphWs7DKmXdMcptYNqfMJoWhuMnTdvh",
  "key14": "5f5FkQdFuGDXGpvxKQANp1PiiFcr1wDA5mScT7y7E1RwEpzfnpzxnS7F3KLFMFuZkA2hJx4VsYU4gtG5EJGYjG2R",
  "key15": "4T7ZoE7V5Na1XuwJUV6gSCTwVeGXdg3reXvJCdENuuSBDdkszXT3VZZq8M2N6GXV34NAoCM2b63vrkcUy2MiGu4b",
  "key16": "61eS19kSMhErVptjG2LuafaTsN6Ukr96YQHUrUGdcnmYBz9qc5BzkfYMWDmUKYnqs3wvmDkHh7ExJvJysU1r4ZDE",
  "key17": "5UfDr4AHKYFtQxd3seruY5evXg5bhXG4KGVWeCYSmB8zEv4zJsQ42bKVxDHdNEXTyLQaEt17m9vyMLwU9km76xHm",
  "key18": "3avdej1QY93gE4uSbwFdWNijAEB1SrU4aBgH5n8WxJBg64BgxV85XvqvKKhVxowWVVYW7aQbJZCwZzafnGK3NuQC",
  "key19": "5a9k3aYjNpMRZgjcAFSgWjquG51HkyQZxWCZMAZKyt5CZ8BeHURS8HPh4uLK2ryQBCveRjZDdkEQfzULDk5dzYDt",
  "key20": "obCekTBFCjLKsFavc8vhwT23QWEsnq1Zi3V7gEk4xdah33ZpxqoY1QuH9E5jtmgM8Jk3nSEzTQ4Gjd3Uq6W7RRm",
  "key21": "o7GTgV6vACbejPdsUpHx2HMhexYwvnz9apBuJBHr28aT2kRio1ikaLnRKMt1TqfKsDAWY4vRkyTSz9qb3joBKEo",
  "key22": "4vafaxRdEihMe6f2ZLYpM5fRzgeeT4am2thbLgKAx1716QwRBhaKbxHLrF28cycznrX4uRtyDhcZcDSf185i33HZ",
  "key23": "4j6cDNzxBvFwpneAAZoNHpHd3APxdY3Y7aqHL7stKvZQejAn5TpWs5XAQV74fiWuBE71VarFBatjxLb3fTZFJJis",
  "key24": "5Y8YGsTE1QeF9U8Euj17UvVJH8FkH2uXBuJfLM1itsxDApGRLrkJRNZsT9qBigrGqtR218dxmT1Yz77CjvCygEGh",
  "key25": "q8ZM6K7hE9twNET1nqkuVrTJeR53bFnGw4Ygw46SuWGNshrcQoju4QexSsXmCMq8MdqX1MFV9SA3aBAsDD5b5gg",
  "key26": "39q7RfdRNRaELvrQ4S3BvRtxxjHEcdSymoSsWVWTATKsL8cWE6FUVd4BhYHzsGQEgDdfp5RarFHiFxvrbEWVXtyf",
  "key27": "GEERLVHuphKML5MKfPvfpULFzFs8JKFgXRrcdZofzhbh5fcm2u8WaghKubwE9cXFrh46BGm5ugQjigyRULCXwxP",
  "key28": "3HkXhfYMnXnz2kN2K52cTeMGBkDwAMKGZ2jXiJqg2BQT8mjQzdj83VtLaDJZxJeUwvvBska5BjJt1y1JkDnLdixA",
  "key29": "Le9z4wmdXEtPzjbTvSwoJ8YC2DNYGMma99Ezihc9qeH2viF1MgBguX4PpBF5Jg2MU4QnpcQcWaoz7BH3dHCZji4",
  "key30": "57T2L9eVvP7J26t4YEbKyUGb95LFrY7nnHKEoQJnG2H47yMgSW5VTD2hZR3ZhksR5Tzt3KEo5sd3m3B1oH8C1PNv",
  "key31": "hxGMHud38gCuoUiajGvgu562LEahNzHLXoVh8ZdHrsVTrZTDcZJdKxRyjjESAxLfyR4yguAvHgpsvF86MfHDrT5",
  "key32": "2Fw4UKcmGe5shPbUvauYCKCoRUWMNgxuUE6dU62CoPxFiNzk1SpS2iaVY7iyfeh4nS5VFFnFRH6Y1SzYYDwmU4Vb",
  "key33": "5p6u2qCWR2BBg8ppwkggTuGopvhKbgqEgDJKpKbp1BAnnu8AWUTT45qs2zJf7N9KEWticwANUoakWmdG9shfmanS",
  "key34": "5Fi45GuHwKfKdQgWes4Z27o6uUmo26AkuWJsUkMwJ2vgUsqRTwY1MzXCF7FUTMwdoaw7wUn6ayAXzY24Wvj8xzmu",
  "key35": "4WhhMmwDE4iaksMKnQfBQtwwP4UsCpf1h5K5YSNJ3j4mWShujer9UDYawMad2JwBtRbb4XPG6MfmqpB9DvPLinCE"
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
