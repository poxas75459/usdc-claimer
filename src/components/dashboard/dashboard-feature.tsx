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
    "5frg4s6sB3XPj9aRRTDBMsd1cANDguSVcdzBhf32b5VW2oPpxemMbg2Gk7BFecCv56tnfpPHBc5WPwB689uWCGnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21FTPsAbFybG1BmWMizf3ytmdSLKsTW4wQwYWWNwGT8wtYbNfuDVYVXM4kVSpNTvynbRgsinP6NF7bqxVdDGYhMM",
  "key1": "5dJ21PmadaF4o5SvEBXz6T1ZuFu97pYG8PnaryA7FAisBu35iRrHFdGJs3Setguw3xXQvsTYSJ1xvoWVrT3eBpKy",
  "key2": "ZnbVA8BNYfScZcsgKU9qy4hJFcxTGJMxFHsbZgnwCwMyUX1HbUPyQok4xfMnXdMavss84gqH1ryB3xpL64LbrDf",
  "key3": "41gW9pRgpp8igp8xkmNAbW5yyms2UT9ZYc1fHvHRrMWbJ7mpmF1bwWSNrtQShchTUgkwUppA3GMcrNS9XnLDVKRv",
  "key4": "3wZanWpNTbfkUobfRsMSRTz7Z767wbNmUxYdAMyBDfzjSCefYDcbb4B834xdWnwo1QXADnNtEyLBwJAx7XN8FZXH",
  "key5": "3mZ3HXdNkWQR9jLebuXN5YGiiY8cd8GxbxuHSfLrhjQFWdJiUXZkjDboryDV9TaZhPBEBbjtqFz4VCWDr4rmZyG6",
  "key6": "54HeCgzSuaQkLt1wzHi5MnWDxF1F9BYnPNZ1PLALiUQvUXYRznut1P7Vy9d74361gQ7b9RNjsbTgLjHkqieyKA3h",
  "key7": "SheYDCYfgrntyFEK4U4vLgfYqsgiEgbYdfS2kKW1EQbXUtn7F9hpw9WBkZrDtaaGpRrb7QKWfXCSGAeURXjGuV3",
  "key8": "kWgiexco7cDczS9s8tox1SZYiRDzJ5KzRLjycdEN4u1x4vDnhkmBzrA9h3wdM4LnsCr3XpwJoQFv6KMZnsqZm4T",
  "key9": "YzWz37TtwEk7MMF6zWwoNyoPPPr88NDTFeTFMTrC8d55yfwHt2mXjsj5AqmEM8xWXB8jpLKpXcnWcwdcm6mnt3n",
  "key10": "5PX7sSWnWE1DJQvbvcQEjWTtvjhNMNmq7S5XzfpX7AeHjcBvRUP6Cb7jXEUug5AgrPpiQQVva4NJCg7EBBfB7paH",
  "key11": "42atKz4Qx2F8gESdoBX6p9ocPkwTrhb61uns33tenT95357TeC7Q92SZDDK8mc6h5jgcH5EonpQsxsUdVJRJBxZU",
  "key12": "4KfbUtYbSkPDTnr3Kme6QGf3BdRZ6A6k1Lx8W2QzsHu8SYHV8c3QBGhTmyPUrUMt43g9LEKUQ9AHJtgD9BFpVJjr",
  "key13": "492kFhuTVB6pLXMFfZxfXCVgpqcyu4LB7oijr4Sgv7Wie4csbRhNEWGEBierVa7RxYeELPmxV6W5eYkVEaAamfeK",
  "key14": "4STrFNAv9DMtSHUM8uz4wEw16ubhXWys3HAzvDEeXKZVDZAxKwApnFpjCuAQrhjQzJ17CHtKKpofNtzCW1aN6Yx2",
  "key15": "31nYLxeYqjiY21PJdxe9QcoLn3kVVkD4C7YsAw9iwyximwHMw9XzR1kqjsnKLLJw8oGDUxg4y2CDLVUtWXAcqSN2",
  "key16": "2yGX7Ni85HZ7mmaHpfdSu252eJMTqK5h3ho4HF7rJp8JgqDYfYZkLuV13bAoAV4EyvqWHhWSxxWr6Qq5CQaTfw53",
  "key17": "4TXeSqhyWNwrHRS5SikjuXQWdTaHHs785MX86gmQwmsCBQjiNnWthy87tYC7HcaHmQjX68LVwNP1hnwkpuVoAkLV",
  "key18": "M9qc5YsHyBSyoMWTU9KAssAa53DmSuzzQSAhvZW65DvuH4UzBR9Xmrz7iZncauBi9jHR6tuUmjdEFbtdDxJnTcB",
  "key19": "4x2DCawSxwk38T73pfQVS72Dp1p5wNG8JXyTAb4oQqKZtpH6tRvKYN88x3nmHK5fT4UU34fvr5aC6vUwC7w3isUw",
  "key20": "4g6WEdtJgNU5GvnTh8pF3LZXazR2xo8PqZUgSH4Z3r9fqzSd2kKenL5wUAcLK2crf164m1xBd9oJgG6HTjgYUAhF",
  "key21": "59F63KXTd7xg7VeeKPQaKTyYNdWAxiKBEHtEkamK8jWWzzJqNGW62CYjhRNP4GW9JPtwKhekTmnfWYkqz7cDy5KT",
  "key22": "57uq1vfYbDXcNzYUWbYHqNPwiD2pEXFLTLD6GSB2Z5iarVr5BCGCR1JPPcF4TjVsGbapFshkLntzd6vY5zV8inGS",
  "key23": "317bgXT8Qy3LvD8BmZtzwE9ajXVooM4PZi4MhngPFBuM9EkdTcPuqWKudU9CdD4omvNApvvorZt2xdKpf8tMj1A3",
  "key24": "3bpAfxjdAXikWEDJF6PbxGHZ272D8DnLbE9otPPe5wvCJxnufYACyjSzEez2o3gnZRz5jMb5GrZ7qUispyf2keW4",
  "key25": "3hRPtE3hDE3B85QeaQwMQzy2mRCr8YQ31Mm1uCFRixZWtwCW8qEGBCnbe8AwnkYrdJuwcvSCjiBa7RJ2Z1g31WYY",
  "key26": "2Qo84mk38piWDGEnkKUT8Rr6aypSfZ1gL6eoNQyffqgczzB5k4Jcx9NVNxB8CQu2sk9RKHGe2C6ALHRPscaH3q1J",
  "key27": "4anaGBE8svS1gfPkj5irT3atA2qLQuthHGy8nNEszj1uKCfcmP552pWd7B6bfKzgbbFazemarJTRTtSEnC7yb8rm",
  "key28": "z6NNpfgiFDLSpLDXGumYiNpTC8jtxQkzvyx9RgdqrWpB48cmtzPLBvrszc4msJpHtLc8yNoGJy4b4K38XT8ufCm",
  "key29": "3hJT2oKhPZpjtfDYAFcb6uMWSSuU1fTUCnEZcBTL4jyehfdcu1yKR5NBYeTLiiqontsQjdoEkXebfobiQrWYjoGE",
  "key30": "4jDrB4sTd61G4rskf8avDQy8EQZr33VwzSYMVZWNteg3gBewRKJ3efk5gwvWTrSGC3BLei6LyyFJgwhFw2rowUkd",
  "key31": "4mHSvr79jCX3rtksDodGVSNoFAMpV9MPiH3UaMqAV8GCsVegKQAHuS3nJMbTLQzQrPCv82ky1ckQsFK3JcFDuzQV",
  "key32": "3Lh2r9p1yTEZV2cme1STFt5hirmFnZkcnujMXF82YZd1GNUXZkEJDETHzdWdiwTczgkTLUaPWAbB7QSJ5XCxSQda",
  "key33": "3tttmkvxcQXAsTcjduUvGwK6mLpbW3WQkUs3N2mBWrsJiZq9xy3TF4dC1hY3mqDKthjGexo8BBVZVaDcLd4TtphM",
  "key34": "5jvNkKnk79xgpM5wYuPg5VpmXMzmwQoqp26p7pwex5SWGqyQN9NATXhjj87YH63gnkP6DTgjJZLw86vi2qww2ZcP",
  "key35": "4waSkEimpBnStGWkvNqemfcjygDTkXNxpLRS7dpXpBJU93vZPqVa1tsghQ841yA2ZoFKtA3hQds5xYd7Bh3Ynanx",
  "key36": "3MniSVjtjfUiswnfMbG33RyamyKvD1tW7SJg7Yj1KgVfXNU4x63warjvG8CPJz6STPkPBXh8WbAayDARe83v9RPA",
  "key37": "4D2nkgemjoZ8dDZbVJKM6druUrChiFjWtn4V8fdMn4hphYkVDiEgfwF3X4MWxfSdH3Cu3UkUEKzUjMoon4QR1HdQ",
  "key38": "5pEvS5XgkbsEVRycv3PiJXfQgFxQchuGJaC38NLu3eSyXSX8uFPdbCZpPgVDkKmn9xtBneEzQ79HbXzwA96rBi2d",
  "key39": "468ia51e3nE89oqQySydUXLZqFki2yVVBV7meg5aptFcvNgBqPbUZ3JaUZ7JWsREAG3ovcd4WF81LWKf2qqYXf5Z"
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
