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
    "4rmp3oxeqgrZkCSMJyPkzsTYHSc34arrAUq7RHbCH3gXNF96gMbKFCNsD81cMjXpjAQBvECkewmfTmMBT1pfJKxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H5ZYLDpRGFa1fChbtqenhSyNrvuA96eTiLekS6Hiuz4hVuw8HJrqfbjMkRdBJCCoSPbVSzWo1hu14sHajk6HgLZ",
  "key1": "5E1M1jSepXqN3vL72w1M4dnDkVxoJti3cKz4ZHbEqaXcxkpirqWtrBTdDbY3T2fk2jb1t4CXMDomUjmKk1DTZnNU",
  "key2": "2yGXmfk9CmvK6dfJY7B8JXhJL2f1J9sduSaFtncXYvGKReA6N99k5pun9mJTbXzowCt9DiZiY2jFhWhTEwyd8dic",
  "key3": "5McmS6xwtxNMNh2Q46txzjj442SijWKc5PrH9TDenRLmQpXLxidws2uYfXMbAQdnjcdphNWXmfa7bqwJAhkFG7EX",
  "key4": "41En3Z4VW9TbknKRsnRmTHMhbxjeGZBFS9wrMMPvKTfqkbxCLNPQYVZ2YtBm4bgTja2r2WhmiuBV1ZUfGSNtDKfX",
  "key5": "3h2tbjaFZ5Bi46wawXK2GMt7ruxucgL3RHoXa3AxqktHN66MWYpdS2v5148MQTvygo44DcC8Gf4Y3JPohkfDSogV",
  "key6": "42KjSpjg49xAV9d8ANTCtn5zEfFxjYrBcXJyzU1xuGbQGV8PbCtgqDmKkjagngSuRVBGZY3ZMR5W68ZTuHYFqE6j",
  "key7": "2okeZdif2tGwGcm837rELzE3jmx2B5RgmuK7NzL2YpR3hKkjBKRUAkR6FYUhPzinMxiEyKRPvkC8UGLnr1SqdZFg",
  "key8": "39iQPux8qY6YQFr8ai5z8H4Lw1W7PGR4LqfJ54pdDbnFgXf63Gfbei6z5h2q1wRQLhE6DmjVDJBQqhz47SSRVxA7",
  "key9": "2JU81hPyXdfbMxWXNyV7HvQiLyiz7jBWeABV7j2Xate8CCXqM29wzvxXpxb2NuVfoGYL12wocqwaHYnaRauQH99b",
  "key10": "4ngEB2kmBdDLJZLTmUpt6QToRF2WGwm9njtBGAusCTpAbjct5vH4SNnuvBqkdFiX6tYJGCSfh9RhPafK4dE7BBu",
  "key11": "2hZKhiDWfiVecoofF63nHuvf872ro7trTsV9pwyZhyD3HHpGz32Y6BaTcwPqT25HycxB74bpBFHDxeHSwC9FRXNj",
  "key12": "2gBCULMimBsUtCH8Bd65Q9ZfDibYMC6wcJeYrNdLJE8p6qr8mxsyFS4j4hamqxB4tXBTj6uivaQQCgktLKZSvwqn",
  "key13": "65BwbCACwRYxbPapCT1oeYq3yHTkVLtHCsgMgE2k2RcUGPZH1Retj57BDHt1Z8jXdEMX2Ks8fzakBTTdGS8J4jZB",
  "key14": "ufCAYuTPyupWW4SaFW4MMTvXgchAHuek9U4HkN6MajBPzasptd9KJnkEFF8mys8J1mJZMVgrCoRmGJZxYSXebhu",
  "key15": "57hCFr4j26xnF61pmCzL4v5agC76V1X4Ddmnu9wRP48A3b1bKZV2DG2UtMfiwogpiUQ8z15acj25NjYHJWhWospF",
  "key16": "33SdJX4Ljbva2cnavrx3dQrA7uoTBFfGFdTtiC7hjsQ73iC5nNRWari1Mo6kZPRZmXtfKq9TkVTibZgLX3c6Neti",
  "key17": "3L6MqRcLXy9jMuJKcgbYa9fouDij6oRpBvukMerKqKvwQmtPTyDAmWo6yjh6u5jJEtKrwBKWMycGq8U9cN8Y8L8V",
  "key18": "45DRx15cEWPR66zRDZ6nijZNMdEQNtWHSm8ux37VfWYk6a9am18j31sZQ5LinsU6s8APFQfsJhvx5EdtbBguiq4N",
  "key19": "dZtvE6Ryn1DwEcaa1K2yYvJF7T91VeVgEQ9TN8btiuFENLJqkzs7qVRSK93YoMLjK4WjyKPNT2xtXkwdwu5szhY",
  "key20": "gY94ruWm3PEq6X8pubKmMXTYBwydxHWwmK4rqRAFJiqyEwGBiBNATWAyoQ66M7ghNqRzuSYyqDsnwdu9Xr8A3dv",
  "key21": "3g5A9pU4HHEy9t74raUZ4SC1WPBA9MWbyFAi2t9dXF5J3JF7uFYMamiM3aWjT1T5abHnQsQNcSvBB1bQ6doxwMA1",
  "key22": "dWJ8EGvwEu82G9BqaLThr1ZswmrLUN5uy5qTuGBcRKvkzMsFDT8pS7DYTL95yRvycCV9L6LHyW5whqnvU8N5FJq",
  "key23": "3b8kmsGzaxuzZmfcHGt1oGszTud8gkkqMhDx3R3QuVHBeNtUBRf3PCvXYgCLdexhLjKDeSdNCM3uXXem8Sjp5NMa",
  "key24": "31Nfd8nPxJCVAP7Sh5QGNAVXyAdh8MnaLTeUBNp2HrZdr7BnQMs7kB3WpGn3g9Xtxdwh1dXkUazc7MFwTysksenN",
  "key25": "3Sq17DWfcJmk9t9YpMQ3H3wPhjphTqWDCPQQdi7A8K8NE5DYQtSQF24AAywgkXNAnB7p332FtUfLTAzWjyMDRegK",
  "key26": "m1xMtpKTji1j2eKjnzgVbbTSkZr5wXW2dprUHqALTEKiSM1vtDHBApTGAdmKUB2BB4E3MfxYxeCV12pmbkzFWtK",
  "key27": "2ddc3QLiUtyupEfHSVZ2fJuQGZUeHhtDZEc9SKCAwZmewreHcB1r5pDZCnPoSmqMm3DXu7faDLoCbXG31dgswp7p",
  "key28": "4weMWxrzUZLADEb7NcvPLc6zeNWVCYinXe1x3VdtewTr8rJRXjGezdEjPTfxUMbZpmXgrtvz86BFsxQPd2wMBWHf",
  "key29": "bYvdsXRFhdF2iB1ExxMh3rZbbijTFuGxLXJE9Te8huxjKtEaQGwUF7RrKfqszW63M95W4oF1tjxZcBeJ4Smfvqt",
  "key30": "KTYoEjECCnMHHY2kwYwgbMMnY991gRXkbM8Nw69s13g56UtW5B1cbMTHbNwNmDhYwd13HL22MCFstsq8nGQXAx3",
  "key31": "5Nm5s32SkwmeRU4RkoCAw6E5m1wLhXehKmAQp43NxfoZzgYwbmKE5A6PRpYKoF1ZVUk9osyeh8Q5PN92nH2Ct9C1",
  "key32": "5xanaW78FhT89VokjExWKtyUKFtBgesVtTtSq6GqbVnHVc8L5bnHNCz4ppnVxjPi21YrBwP2AECvGECK8WA6hAXm",
  "key33": "54UnjZvRyGr5DCH66rkiY2ktWRcrwFCA9GmJuaGxE6jiLJyBdSPoEpUTd6Cx3w8sQVdCYTchVkungXyxFBUtUufw",
  "key34": "5omSRXCyj8kHZT2zCvLJdxH1YsMKVZhxJbjpjPQpyU7e1SyQLSPnCdxdXRQx43h1y3rsQNPKErmJgjqVYKUTuGnw",
  "key35": "3VofDtjPzyrAp2z7hqbuDi5fRpP1761j6umChC5CrXkrLsfbCaTMjnf3GpPjvAZLHXMd1ZUW6v2ZdAkUEU7WwtgD",
  "key36": "5GaAAsWn8MfAyXKD7zZKSgYEHonrzsF4dJrozpa3UYdCEa4sdKpvth6pyNECX6xfGfXF9JtKBbZeMwyXUWvUagAD",
  "key37": "3c11nhs4PggKBbNsdk4tqak7Se8ddkVH1wdDTsVtHdxuNFMwr7xUX2wbKGMd7Tp1bTMxQ3BdECDsnzomqQz7NtcF",
  "key38": "2MBTyYLXYPeQixyVURXgoaVV8sKZfnu6iBV38dEkeCAQFYqW6obmjZP3H47vGnszNPqBMpKWwuYgMt9TURTzCNbD",
  "key39": "5RyFXyN8oEp63U89LnABVnPk5pMkiMWv5X5z5R8Rn1CgkEzR39DTqwdNna8iYpDGKsM6jjb9iRoaq8bLmRYcJDxd",
  "key40": "4iEt43UBRURc8bzZjF6hNJFEzSydF68xipNB4k2aX7AdWk5jd1cDE5eoLhRF9rQvNmah9Ctn2wk6nkqCmHzrs1HM",
  "key41": "5Nuy19yNSGVfkJFAfedJtB6doYr1ajMcNMuPX9C1LBAoEFLtUJ3tCRTWVNBH3csjDUVvTENULAb1VqpUUZE3MZDM",
  "key42": "4hrToYkiy77BJcjouDDJo78VM5vFLSngymG4ZZ1TLt3Lc9w3t52ArgWeWmxnGx54MFpEPBHY2RaaGDX7H3m6BMKb",
  "key43": "2rKNPzf3xqWGCcdwHHbKfPkEwUxucKXmkjFF7ddopiQdhuC4wDAppcchz7jFeqiMWKC3tMJGpCLNSqz2F6pn3xbH"
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
