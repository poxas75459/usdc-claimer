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
    "5sxAsi9FNgQ24CHBK9svxdcfycjciTE9n3r3d5yTwEthDEquPTF66J3NpyUchR4xk6A6FiMQaGENqsdrv6tQZetG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e74ALdR71E1Yhnhu9Cq6mzW6qtLc8GsjZMaAT7YemNKsDdMR4D8rtyd1Xs1LQXzC7yg9dupmMWmvE9B465G6gvE",
  "key1": "r5hwx1qbsrLFeDXreUPa1ow5WJLThnF3Vdaw6CQwGy4Wb6qFKwwLfogs7GLPy4RNkJUiPJHDttKDmWksatfxhBn",
  "key2": "3bfR75RJ1eQahaPpBo5xWRMhnfM1UmCSZkMJ7SaGZCSQWTC1U6PLQa2qJw52aiC4aq9N5MyoUX7nDotVgALtz7ju",
  "key3": "5w7vmBYa9ZTMnGfber8MUkP7z7b1xRLZ7HBmSg5JidPAya1896Gx7Y6bWG3XBnNy5j73ZABxCY4Dt22Zz1d6QpA1",
  "key4": "4qsxB6jiYPzWdrND49EFFTLnn27cQ2quM2ygBUBNkrgG15bq5mE8o7TtZcXrj8wu6JmUDMJgxUiZSs8wWUZmwMxb",
  "key5": "4BogAZRFUyAArpZxPGmeCpuCKsZeNtyGUenXbfuhgSViCPTXrFmNnKkD8vKoahq6GCcNbxKpVAvprb6YjL9preX1",
  "key6": "ZHtnowYusM1LZ2EwPapz4XvNBCfBDYB7S9GGfNW6oehWgi3TuumgsPeoY73q29tRwChu11icS4qmu8TfAyuk1Am",
  "key7": "5a2a8ygz5Vi6z9JdK77RJSAmysBE36uF7emMwGoaiGMsaJ7waCRb5jyJZF8HKJAY7U6bJ9FtXNcb5brLU4yFBHyR",
  "key8": "2e3fwwZj1FUUURSZEPikncRGhbW2BwRGgnZ1Y3bdum91tQ83NhsFai6xPxysN2LYPuaGRE4j1M995TaDs57nY5Eb",
  "key9": "45GQq3SKjcAoXq4671yARScp5TQd6LsoUwtGYEaXvc3TvtXgTP4RN9VKGA6VjaiThfHd9kF2B5rLM4cQdevhN7P6",
  "key10": "3TnZFL4wcK2Wet1ALsHEL4LCGWu3gRRis9T47DcYLyPFQ7b5jdmD8UHcTQWZnQKfo3JRybkaoJiWnn9grtMtwHzP",
  "key11": "2jwfQuaXeyx1DEFPYxbrxsLfq7CjwoZRwSBjNDSBnH4ZzVuRQE955gsKudXPcKHKi2VM7ARjAWGiSiuK5HLo4nrS",
  "key12": "3Qor1pukMyG8KNtiC2vPThemu4EwCoLGzH8iBQHiVpvKGW7JRSakUPxKcxsyMHdJs1FP8WgMhCudKzMrsTHnHYhp",
  "key13": "3N3nTVGGN6BzYrRH4CLqGWWYw51ue3sCLR9f1PaSZJm9Y52sWSihVLexpBfaF2XGydapcbPwnVMA7QJ7aHJpYKid",
  "key14": "shu1LTSMnxJm6LTy4NmXSGmgDjZLksyAogbMBpgaMKwvgsKrpaDPCHExSXNwFBjnBCzoaAbHKo1ZqKMpab9jFQU",
  "key15": "3qsBpR26QgSdbJ1iuFCVCZbXKY5NxXgmxDdEXRdfkYfkT73G32vEDNu73CCbBy2i5TGDgUZVE5meVBZzEvJz5ubw",
  "key16": "4urif4Sm5FjRsGnsR731iLoUkhmXzanMFctKrETc9PkUrfrNm1JKWHABB3NhGx5aKReQGr4LSUc2kReEds99EXjt",
  "key17": "39odSbnfzP7wD62bhH2ba596XMHZZpau7Yf2X6fq5aKmjs4V1tVcAqpc2vzSFwB7w7NBrnPSz25F8yZGBXUMv86t",
  "key18": "2WRFektx3KqMoKgBey7FfzGA9KnFqi8Y2RSkEFYUFFECaypF3TtjPRB1LKA4GnxhTPzLAmKpmbBveqgm2hN9DPyA",
  "key19": "26Wqyx2yoZ2Mv3kFBwrBRUNcSUCGzHWiahNLPZagGnVFnrSumrzHSbhwGTt5XejhTsQtdEvHB6vhEY5nNhx8S8Kd",
  "key20": "2Rd9rRxpeDsdZaDnXBrXFKqgiarE5bhyKXEHGzoDZjtVU1JSZuCbA7cFt9x4set4gnq89ZEZiVeqLt9FktHCfx3q",
  "key21": "5Gry2oBF3vZ7ZY91mHk9bTRKpwBGqdS7wXatEqsNzVPhfKQwaeMMbg5cj1ZsTkr5ZdvU14FYJivcA3y4zTudZ6du",
  "key22": "d3G5BkiVseNSMRNXie9dwYp6usjCPHMiaxKRmgGARp6T5uoZHVqqT3sVxBqCeV7oLGaPpNKgwvA4Enggn1BK7S5",
  "key23": "4vrQXCyc7m3ZhuHfWuN6LTtX7ZxXBn1Kmv7Hi7NE6F9FdJtXKWLdJD5xBG7hdSreBMFXV9R1cHMPuXv6Lqsac3sw",
  "key24": "S2pgEtnPemjmSx6QPFJRMg3PrA1mLWbAGQSBG1kst1sDgzRJn1cH1v8fnq8wGZcpQR9DjoEWJPbjLSSo219Hm7h",
  "key25": "5XGVEunuymN5ijePEX7wu1bwRoMv3SsUNVgisJVaep9kL5PR2dHChjxFTGxXsyvUY5n9TmoLt777B5XjvtqwtQdb",
  "key26": "2sju6S8N9y9RWvN81NMAGyFvff6KUScBaGrX1GtGKY8xJPwjPhuTxUdMpxPVW2QxufcPALwDaQMxx3rMrbCDzjXo",
  "key27": "3Pzjp1cSzG5tsZ7eDAuGYcF9yhBbojzgv8zdqX5mpaDQ9p56NAtSeFuPfuVbogCwCFKa7yApxVy2pFczBmsVYdEG",
  "key28": "5xcxPXrCEsoAVemi2m9P5c7jD21A1XquAAsu8gQUwtniZiBmRVYt8VBx1hqsQ3NAtu9wPFE69E4e7Mq4wmruaCGH",
  "key29": "4tjAu19XbeBnqAejdQnHaLQfNhqELqEbQryg3PcNbeDDYtyRiBB7pwnDKSRJXDaKv741L3NkaGBt6S2Cuio4e9PU",
  "key30": "3nbGGXBSs8CbvS8rmN3X6E9Zoqr5opMUsREWpc7RAor9cxAYNDxk6DPSsCPNmWqjvn68bsXr9AVDXU1BrWYdpQFZ",
  "key31": "5tHSEzBfB5vY1KiuFj45VNtrN1hCqnDZcXWkNTk5GDztXKfyA8JLLAY7GCTNJBh9owfRVhLMbaJndLm5Rafhccwx",
  "key32": "41hog2bu7FgrWf3XzscTuEBWEURSoMoU5TMLED1zCxS8BnubKwuTNZSFAqYMsQW2e44jAV3NWiFHLunnnUi1gPg",
  "key33": "5kYGBrjK77tMKc9QN23i1R5Dz8EDsHjmJSRdPjcegTVToFa8vrMVSQfvvgaUcZZAQq1bCRgJC4Hc8UADXRHMpjWz",
  "key34": "324GaJhnGjVLTQb4L2LuoDqKvPTNnSAW9QVQEZ3QBMxczzFT4EsGhXMbgPTZEuHMD2xKxBydA5ojQCqyFhHWYh46",
  "key35": "2AQNkKsmwTHFW9zLjGkkTsgB5bULw2fYDboaPAZumoXLetJzxdr5ewUd81z1iw4KgeEH6wFVRZ6eyAgYsHcVDeTr",
  "key36": "4s6T2RwipbGZ1nSV2DJfTsG2NLcaLJhvmQ9BWge2bRXkQzbVfeEJ54UZ2qWgX3gwUtXNwbWKah3k4S2Av1QgDDKy",
  "key37": "2X7SSbN3MsgvKihATvSZVAffB1EqfPyR9h2dWY1iS83RJECjGXFWF6JpeiKPzrT4cWo1J7ELUrd74t2WhPVkhwsH",
  "key38": "37No78Nghuz8htr3NKJjEBSG43iThNvaySN5vpWYhZ7wRahx6DhA4h9kCLukcLEewjSYBY3jATzSsLHnHACZEabz",
  "key39": "5X6jE2pLHKSzq5nYnJZtxr1iL1E9vTZPkLoEzVZfKt1dz94WjDrg1yYyYW8TzfGrosvN6mNK2L3rcpv6464yGLM5",
  "key40": "4QKyhpprQnspfv2H5tSRHJS8HQvBxnNuzXyaU4Mep7vXCmA5Y3L6k9zro1x1AkZnX3F97eeRLrZdF3hp2sXpDkXD",
  "key41": "4nKzzAVuXrh1fpoyeXHrUiQuCJ76SvS2khEuqGbMVaK6vToEEsi7XVXqYe5DvMhqFuR7J7W2tuWk2RsF7fRkDMBH",
  "key42": "4EZrjYonVhRTmpyZzjTW5scF8atQKWJV8b4X4Ez6BNqYATF5AQmHXHAwzdEasQWF81wQHb27hWbJCs7z4nKirfJy",
  "key43": "E7dHjM3jxmNhaH9cHAEFLNUwUBnit84RxPt3Sg3srLkRCzckWacwEQjRAEt1y9Bhpjac6q61uGoNuwSxHed7CkT"
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
