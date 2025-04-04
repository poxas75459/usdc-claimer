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
    "3KRQerSzwj4XihJRYfE66VgCVeNXbqu26D3EPpsK1GgpCdPkq1Ym3Ph8EchTtRLTR98iaToknTt2T4sATTEGcxgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xLWuiRtY16YifrhsHJZLwL28Vm8kmygpTxhKZ4DUW7YtXvLtZWTwuxX9KF7kFpTjVpYyUALXAH5V1Crp96ni4bB",
  "key1": "2QTgs7zSDQrp4zYSuMVv63qovsQd2Fip9ATkZ2ARq7DQWNTCk9B7EMskeLEQSMEmLi4dFqiLzrJ9zLFtEXQs569Q",
  "key2": "4QNNxiqv85pNaNiwjitngdpbVDFwGxkcvPy2sc925GHPaiUFPmEyzHUaxMXPpPigdEY8VZh4YDvNj3Eu7CVrmE16",
  "key3": "QJ3L6vdiShKfiY8SvCEEPuFLuT8mR6T3vTumSfDrhirV1vTYBTigizFU4hRpPtDtF2fV1xL2qujuuoqgpX5VsBD",
  "key4": "214YJmujHFUA91VXtwGoCZAC3M4KScg8t3m5koBp9GD5ETHghGyLEAczznbBiie9M47LQ6YoDhq2fdzT3HC7eET4",
  "key5": "5smWkAahVotSZs1X51SYRzzmXJGjujtYqHxQ1ivT96sWUtieQHGk2BEjJoWU45YKsg5C7SgHKyEpMN5ZaZra9gwS",
  "key6": "3CEMhsFGbc7Sg6To69g1UUiTNJVZSgT6Lvyab4gBeFGUQ5C4aThYSGJNckx31BFaVQdMNDEBEZLU2iw9VoSNhijD",
  "key7": "4SrLLG7eooe87DFcY7STnJA7Lxwy5g5qgcXeArx8Da7A3QeU5jgLhCHdL2RYQuBN72frSaS7tRQ64scBmy2fEb63",
  "key8": "2AHZzSuA32RLdWYDC3ZbKygpL47Pmr2g4iv7hrBNnxEdjzXzPy92G8aMzvTDp78Ucmk3S6qLH2sG1e1LDm4UTWtF",
  "key9": "HNMnUTLhB7GBQpLoiX7SnKxLkj7SoP3wvRih9zSjmcrdgzLSj1QbocHSSStdMCstSU2QiVbCM5dP44dkNze4ksU",
  "key10": "3xdGc6NCGhrRA5rvc9cThgdLQG8y2fkzy1sa18sfyEJ7DX1RrW1ui5Ap71XH6RTaTSCwptJJQ4geFyjMX9CPC5zA",
  "key11": "4EArA2i79wBrU5w8W6PJ9euuXBwyeMAymhgFPGrLVKivQCmX8uuqnr4M3UK4HaPDDZgayS4cTxQsFYz6yY5gZVpj",
  "key12": "431NRtZSdtbeqhGcxsJ1dePSERpsbnCZpPduC4FDTCrmqLt8xA3HDEE7uAeb44PyAWBwe991cDmpV7BNpPEWZcZ1",
  "key13": "5kMfzZN5uhAb92eu4ULkhXBBYpzkizmvkb3zr1Gho6wmy1S2Gif18W2iB3ouRJ9oSSpuTxyxNRgqMY5xyRymAJ5a",
  "key14": "3TakzjWB3RrGigafD64JU2Dnzi3NrUJWH8xTi6AQZ3yYVpLF6j7VFnUfjFoKTmivffeN9CXkpsEAMvWqJdhUyuNo",
  "key15": "5R5MczkoTVBbGZgCEeJpAY2icF8db3FSUxeeDpFeGv59DvGQziq6sUxVK18U17R5ZiYFwBRqYrv8UW3oGJ8p7d2L",
  "key16": "3yQBHbZkokJM2Ygxd567LSKreZa7hUdpyZV1tVEmV98S4zWH7WbpxDxPEdth8EmuYCYGFmYDF5Da2XyKi5dLt7QR",
  "key17": "4meASv8FZSiSAGb2jh3rVQUDZHT6vXkyDSMJbYDth1d939hFfcUS8TszHVHZkxCjjpomgwNC3vQ4w1erueNZCNMc",
  "key18": "t4FYkqryL3TCDDNusZfTHHniWWrYEkBfwZ69PAYCxBUE5L1fgc1nbbX7sjkFWvwaB7To2Ff9sFpFKdb6Ju22UNu",
  "key19": "3uxgESVFRBpww6WS9B8AgiayPbePWcHhxRgBxU6sAcBg68YAfz86cbV8fV2DHVk3FcjLmwvP7azYrZKX652gVioK",
  "key20": "3SDbzUCw5ooUQ6xojUKb29NJcM293siNonhqGFmxBQhmH3GdwKMChorhbwaDkC7RknA7J43S2rVpfLmWiMJTLJDu",
  "key21": "WkeuvotkNibjXitUjovn86aSvGPNxK8z7Qq1uDa9Kd49kwQgNDeyGXXwsDdvUq854Z8y2ycoxqZHen4s2B9Vy1Q",
  "key22": "3yL3VK9pbm7QRw1pwK6Xqctg3yfMFjJYHfNJALUdquhXA3SMDwcTB4oaZHzLHYTr1TfuRrC8fp2MJxvbxi2GjkUb",
  "key23": "495qgsnLvvqkWuQfDy4qcscsGh1MKqbGaBn3JCDv6qeJRwCQkveuAKRcThgBrD6PpdqKeiD6YhPkiaGTUPfL656a",
  "key24": "4myWmsEdFhzp3x9xBcg3EMHdxR7z6mwz3qTrQSR3iC2jyFYjKPKuRRczFg5Bqd3pZt2odtmqyU1YyVdg2kQZ3wSj",
  "key25": "VS2D9gJpFz4JW2Ud14wpxzqGppSGMV6LrZE45Ya6mzdjkg46CU7CyQwqZZVLpTGLKD7VSrb8exHEo4QfBgknYm1",
  "key26": "4pXq3qfdEqUabbaS6yEgRGGUPV9RgTsvoCf1iYuY9SYxv9xfM7rmHRfkvTS4eKpVN9YbJbdehBALwKHuFBcc1Yze",
  "key27": "668NRYEXN4qPSKPfn6aDmK5AAkiswHAizY9nFrisD2TrKWmme3hZukkSnCHsoFmQAtyncfKqZbsXkKJ9vKUBCW3M",
  "key28": "WuNXFVGibYKcASC9XBmKUVQspvbPPDr4mZALQv7EMqeLdcK8siCoT5zC6tY62Fb81R3eswdPfGi2EFWEzBRXhPx",
  "key29": "5NRF58HxzeiVvqaqGoKQxdMY7FMVGJoLBxtB6QjeN2TAdNAiuneFTcUSz2z2JRHTxyP2DfMhu1gBcKHonFknNXqo",
  "key30": "46H9c1XqCKQv4GewtgyLZvyKUZe5VyNUZZDe67rTNyCNVgyr2zwbefUUv5ZHUon3bMDcHWuRY5wEAd4Xcqiz9xcy",
  "key31": "4WCEQn2HBDtpyU7otESyrsD1KeCQc91BAzKG2FQqo5XX7ikY18Xc8TznEEXGkJ484NCjhV1VXXVQgSYghrzogkTb",
  "key32": "5TrDb971orbvVc55HPsfL1pGs9LZAPA24nZTY3gTA1q5tNKkmFT9JHQ4FaPmZjWUVCJTgqD3UWvGZjPyCwJybGeV",
  "key33": "5P2XfHGWHxZkJyPStZLZb8CARdPCXVdJNdJUoWVtuqaYXgQFGyo7TvaH3PVWcFTYBVmrwnBqQLwShH73AcvVaTuK",
  "key34": "3pkTS8pc1cie1aLzJc3f514jJetTiumJTKH4k7N8F6chjxn3fKnRwZC6d1neaN2qxVvSvhtCmYFiT4aoEfWPn48w",
  "key35": "4Gp8HoXLRxsaZahjnSaw1rkS8GmxZhravs6NEn7VMb8WF9VEn1pM2oNZ7pguHo3XLbYHGYADEuCi9faaKdPKnuAY",
  "key36": "4m6Z6Jx3VmTaTKJgtTtVme7chfzkxzPks4cxHnqK4PrKMctWPViTLtH8fUKTF179myeDKKbCJ5n27SnXRhnP6W8Q",
  "key37": "5GUjmHFP4RGwf6iBrwA147wHXGazQELXxZ1jKBdT1XRmVT323WE1e8qzAGZiNkkj2DURcAWSL27qSUTsvFMaWQka",
  "key38": "2EbsGmTnwtg1g51vWmexxqUzrC2MjPJUdC5R3wiWAsuZ6EuZd9fvabNW9EfsoukXEV5h6LrPBEUXJ1jfD1E8U9HX",
  "key39": "btpbmDhSmGft2PX92kdMCn66vogGviFKxzuRRyXffTRBdhuWcv61RqA7dRcXkCLsRpBjVM9MRwMBiVaoxUHT4XU",
  "key40": "5ao2jDK9mZk6TdvAX3anVebXy4YJdi4uMjGJqtofsdaG1nDvnYePNS3FG1d3y5WaM4PQNeKWFH8ig2XpGz9CSsvK",
  "key41": "5AVvyMMKnU7xhTMfXGMHf6ZHctgyfmKCfTwWmF79PxeqQBmXgUYtHFtEL3LdsV9c7ANE1ckUWgK6bco7Ux67nq4P"
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
