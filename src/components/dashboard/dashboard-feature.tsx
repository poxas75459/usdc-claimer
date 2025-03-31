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
    "3cHH1fewoVkZptTK9RGseKo9R56DiMCFJUqweumgZsmTX8j1iZ3TJN3DGNu31kPJUzk7u6kXF1zWi7GHQiAZGXQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FZHBCv3iCaSov8ECK7u8cTHRbB6RK7zqNDj6gEnRZk4eMkkzuXLoqMJUc3FxeWYUk4ezEf6GJFg3vapFqf3MHSD",
  "key1": "63gUiMsgneoiY7DmMsssLYSq2wWKw5w1dCLo2NHRMHvgF1vtvjH3rBExL4xQpnYWruoxoqyX2ZbB1h7X2RoiuJ4w",
  "key2": "5UwK2nAq5sHzUur2mKc76XEgTcANDywcHS7Nw58vhqPR1sD62NWqJ68wNXGSDdJQqQ6YnGAGtdRQd43rhYrQwM8B",
  "key3": "3JNZV43VbTNLMjXAMPDTmKYfXdneYwH3qNTpU8Uy6r5PDzCMa9N8QhyRkkdWyheFmw8tMDGsjvDBcjJ8XGu6REgK",
  "key4": "Cr7VSUAZvNuW1CLD1Z6x5Hd3Mb6xFuSXSfKipGobuJdw9JErjK3kJcaHZK6yJjGa8qugghNskZ4mgbrcvKXHtCq",
  "key5": "52Y7pe5jWyYoyNiTokcyMi7NMStXrd6oPoeerxp2X82JzDQQ3vmjxnpy82BsjsMBqmJKphzkoRK1MvsBpRKBFLVW",
  "key6": "HtDxWRn45cHknJvg8r8KernWo3NUhSYRY4krq1kyD1S2rBS5LVjrXtc8tnBEn2hE11cjtzSHFL9r2UFg2vRCAA6",
  "key7": "2Sj6YqoR38WeBz84BmDGyyKeFWxrcyrGiuzUpvqZyDafHHnt4MTqikLVLppANx63AyEocCxGKjcEios1JurCDQFX",
  "key8": "379nppKaw6kDPjQt1gDV9NSDU3PQDfNnUh796pFcE9LzEoAkpFPDvubh283n373YpA3t1BhgpmAdvRrvPGVSs7Nh",
  "key9": "KpoyGseF66edfijM8hnzMeagXAyZ8MpdBxYXAMEBYL7ZJzhKTMAYvvLhW1PXYTntijrV67Z3mB3vzs8wJ4ipePn",
  "key10": "3tnoyBSVmyK5JjsZWMRi8SxCsX2KuMghPQwErMezVynDDSfpHHceNqiE4E5HqjVC7ephnbhg4doymJwbrUvU3ahN",
  "key11": "2QATP3BJBKCHjTEpP59S4Uhae8aemppmjBRGC5sZoJPaACYKZwin732ADaZ6sGAutrrkoxPBMMHXhkQSPUAyFNhx",
  "key12": "VJGzaSyfJd7XGkDa148RGBCyPwQZ7y1jLVTv6bwxRiTtS9jQa1THgnL3RRNah8ycm3RenWPp8iyLFzR2bXkdDJj",
  "key13": "5Y71Y2vza3SYXEtTTJEG99K8SHBUaqwGK67tMuAd3mvgT3UUgeAPXcmS2sfJretNLxP5MMUL2pYhhUt93JcEbvyM",
  "key14": "2sCPSq5AfVW2Ecjw7iNpzkiwPH9EvnTruWtWg6QDbg9VGxFwuiGKR91fE8dQbgz2T884ayLf5ePswjmhQ3S3XLcb",
  "key15": "3WUSYn9gwD6d4HHZGrQJs1rhCsDxmKt3Ay3ZYG9yiVRWyteC2893APtRU9nxwJZZwTViqK3frKFsfqcFU6ZgeV3d",
  "key16": "5dKvNG7prwFiSQd5gpDaRKbF9D265ECqK5do7cGaqBrzimd7fZpccwG7gkUKBQcsQa4QLKzFJbsymHXjtaByP7e4",
  "key17": "3zQRQPLCRsoDSos2EYW1gDRy3qEeoUgzknzPm6BX37JPxQG7Xcaw5cVaG86WfEZiHg2R8qLedZaMkFumj4eZm7YK",
  "key18": "64pzL6LTBnQ85UV15BeE24HfcdrubYYKqMq4tyaA9Y49WooLrbyfGV6MF7vb8ucyVZc3w9ezzf9z9DoiktsmcsD4",
  "key19": "5yaNMn6ZS3uWMSTwbKgys2yhxzeDcB58mVNzx1HKqxwTkG1pa9ggHTjPgSnW8CUCy8fhrnoHNdrAxR7opFBjob5Q",
  "key20": "4nnZ52WmFnu21nvzMrqjEfqvEHHs617pjKcPsRhy2BHBT8Ujr5XkCMzaf3GFb8JckC9GYh2uh3yfRozcZ2wzVNKQ",
  "key21": "5QyEQceXEfTnDT8VaCRztJxHWEvem3i6ZxrgrQYW9sBQECz3j83Drc4BKPncaChaLQYaoej1KtPkt9LgrjAb7zvv",
  "key22": "4nocV8PSdjCyWygxyB7PFLZQk4JT357mrwhooYzjuCGfAWC2g74UuAP5bHANwcPitjzaUqHcqjZmX1KkMKuGtnmP",
  "key23": "44Ax7NbVajcACax74UroiHgVq4hjhxbKWwA6JmDGceKCRS8SnuDNtF8gWZhztpCaoH94YQLoBrXxTLVLtG4SKA6m",
  "key24": "2JMHFR2GKTyRxEhdchYcpBwRPKzkiFtVqX6hA8ZNrs6FupQL1xJMs8WcLoA3Vfmgg6JLCoLd3oa4mx9ErLJH2nQa",
  "key25": "5txZ7RefeEn2UD5dfidkHTb7mV7WgHzK2y3rQDoKJ43NvTf2ZQobuQxS24zAwk8q8maEvAghGs3Z45qXinSVJo6X",
  "key26": "r6TLMEKbA96DcnD7DmBBtPEFARXH4m2Ux8m73LMjs1pCueRpUNWoWVAdKED9p7KBW6czz6kGyyQFuBTyCrLCYSY",
  "key27": "5Qru91hx3GpLvsaDjxwCairv5eCk63VqwVn9mkqh8GYQsaYjmd5BB6uR5MHPPsNWeCrCU1CsCa6edK9vXYz2pXaQ",
  "key28": "37DZXPo9R5CBD6qxso4nGGS5VB6d5BA98zJYraB5YLHHPWFJ4ZQFEWWfAGWPfXuRaXPZbjnwiTFKhJvnqcxkZWFU",
  "key29": "5q5q658YKtoskfSnQYKXfkLe3oBKeuWvpbDGgyLqmZsoHDD5BvtBZkXdzhYuKgAUwEt5gKg5n3uZy22HMp6EgoCm",
  "key30": "4wHj58mYEBWh8AWQM55AhSLTpzLRs6N4Z4mESHqLe18vCuLdSLCqFiEe52W5oQUfw7MbrZB3CU2G5PrWTpjBDXLX",
  "key31": "5VBSMG7C7WfwnVkHyRFPcuCUDP2xRv1Z5SJ23NGxehaDcKBcuRduoSNKxzySQarWzEKwqRhKf3aruLemg3RSKCSF",
  "key32": "3s6XdcX1rBJE93zpCDtpmwwLVH43APCvNuMD2SRhMmCkLgz4t7CQhCt7quBLBnfdgUK7QhhYvQTZNmkLCwhgxFsK",
  "key33": "5cYnkSWJm4ZSxo7AoA8BdQ5V9okFnJUrcR6njYrpRmbfJsNMqhPwjVKWJBb57YmVWT8MnubVyFSC4SHieCKVtiCt",
  "key34": "2EmNjB92hvZkYUUi8ky6RPV6MysFmh1XcLsKrQV5VMVwt9PXzsdLgsDf1ACaEnoEKbwowc9JG5f1hTDf41QZaor6",
  "key35": "43XA8tMU4N9zx6aKpFWVbZ6UwM2kaf9XCTAbVFgF52xBMxdtknyUHm84afknzeCgHbBShKbeTK6p2KgfkmkYfioz",
  "key36": "4ruwSWtaUimKdvetHo6VdrTFkfuWCFGFAwBL6BginCNPeBqeCPiL9D3XWzWfqRd9M5Ush1z5Mt6LhAPApVvuam3T",
  "key37": "5j6ub7HCy776F7DDWSSxqxq36DnxLaEJqs4iQpS15nKH8iTYTVgj4z1YwtpJbXxCtQNcHxJwP6ZFWRNAHVf5QrXV",
  "key38": "4TE1vbVUkLfpta6AttPr75iepyiK6GR9LEURamtmaKAchC4pr4uG2er9fEzunJB4amSXFfDiiq64XHmpjbXCFiBR",
  "key39": "4NohNpiY96yEs6UGaXHgRmhKhPTX9WCNuWTvgLMKtJBNw6j8yEGfQTgPY41BVbGUVKwLBg6g2b6G9LXw7BtZXrPD",
  "key40": "AcE3kiYjbYw1PcBvRW5zgimA24neXnTZ3u8Uf89miLEkeP8meFbk69B9eDNbiEXJLWe2aEJRin3GmTksgygR9jt",
  "key41": "2ex9g6ntGMQ59RJwVk9Q5RVhH4PmPREHnNx1yKkdTTY1zsEcimsm681FwR8mvkdn1V5FdFKp6G6yzy7qCWiKTYrf",
  "key42": "5T4sZJF7VgxR3epg9RewU4weKBgoWAfjSSN9atoQ3qvZrY9jkigZrTR9Mearkbu8dzjJ4jqFMk1qBMXtfhPqA7x4",
  "key43": "25nEKsSVcZdXRv1W2nR2ZGmkskfzknqHAFfzM8KDpiES5f5GEKxVWbxtLbCMynbL9mM4M5thzU4biEyg58SppPSr",
  "key44": "4sgUEzimuD6WtRvodi1wxXZ5v4LVFL8RSdC7X5FDFfibxvuVC2tFK7bFYhAQQFYyJRM9TH4NgGNxePFBwWSd7Nvs",
  "key45": "4Q8XiBC3WbShCPzQ7zxLVSisjqCZ3sE1ZrHGpnUKnzhzo422iXmKxicqcY9ryubhqo3KVso6LrjZ5J49NG7cRqgQ",
  "key46": "2Z9ohSW2VsxxXoZXWJsh7Y4mya76ehp9RVvbVPB3qxeBh4eh1UBrDoxVN71qj5SC8aZ8r5nJcY34oG9mqeCCsJEJ",
  "key47": "DscJMYgyyhnYgZJw8zWHaQZRZzBD3v72wgEf7pd7awjdZ54sZRTsr3K6TLcRcmQWDJm48xwAjjFCPmaYGvWzqjp",
  "key48": "5zzmowyF3CBmxchcZ8cjVkxC1oseVBKTzyPpW3zqBscpWjHVZDsHBRcfywtNPQWRENxfoJNJdEgVuSppRgT5NENV"
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
