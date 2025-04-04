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
    "5Jd7pY65LerjKgHRd4j35rYX8Nr2i4Tyvq56JvDRr5VsgHAiUDi63yhbUB3gCsg8hwfhm7S6Zeox1gKwFFX6QsJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CLU4ZEMsFsheT6eFo9PzRyM5x8zFhysRQRZw9LnJnAMW8pnhin9CubMbtBezZMcbe2U13hkh5GesJpuyDuTvSfV",
  "key1": "x7YfhDNBpnW8EB1H1GunxeBqjm9hW5CUYYwHfBG1H5Y6tBCcajNt5CZMuEbYBAuWEbJxAS9VzZdcZB27Z8jNPeg",
  "key2": "3YDepNojqr8Tt2HsJkZ1g1UT1aPwewZtsDnLSP3uN9BtfgzdGcz6CgXe4ekNC3cA5JdWwQoD6hNvhtn1r73zpP7t",
  "key3": "WYAcKN3VbedHhB3ind9R4kFfZnpmP4cKLdiHLZFCRxxsgZsGvoWhk553zgXH2KeMkBicFd85HLuWKfiWQ2QJ6xt",
  "key4": "2nq6evSBnJVo8Le5ACYiyA9LwbXC5PEoM62QE3W6Pqv4dgNMzkyJk22XYG4Py6fS7s97aYfk964oU3RuXyNjtWur",
  "key5": "4R7sqHTGcD8gTNzVuZ8RSoeKSG2R8FdULKwFwfyZqWxKoz28o2wfvQcAeNjTgrN15nw3zTC9rGg3AMxqT6yh7nwx",
  "key6": "ZHvNCALLnKaPQXG7gFBwo7ATNcGcfQpzfHcCLwz52yMJmpGnTPYnAedBLXbuWumPAShD52CWw56vCniZvLE8Hs7",
  "key7": "3RvaFAmJND34LV49TSuYwyzMk4Ufc3FazYhiyibJovG2uwG3duHAqqR1iHJWTS3cg38DoHsHb7BkTYwjedfiaRAG",
  "key8": "5SS9qAMcNk5QfJQCFEWMPwUJtixQam6Syba3DRYsF1tJDURAkfthXYQRoExAHoz8a6ohTWPjM9w8u9PBh1Rj8fxB",
  "key9": "27yPQCtB6HdyqNVX4LHHW452AWizsKBSH6hR7Jg5mxJ418AomHGaf5rDjNAe3eMaTwRhYVBFDBMLg8Q4wRc3Xfq4",
  "key10": "3drq4MG4riME4fgzU3M7zjavY4WVB6HFeEwKXtVctfVjxrM4mTEQoWjSJDkPLUpcwJbyunNLhG1svdPHMmzbRxfC",
  "key11": "34hz9SkQ2kxQPuTuY6LFBAdbyuVSR6wdoQ3KUUTFLSCC6RrhKpXy9eu66QTrjXJ7U7MDcRcj3NAE6T6zYf2ou99T",
  "key12": "3XYuHDjppo6K1utZUTkJ65T9VnPiRHFxLPUGNmyizUEVzpdFTUzb3jAXjk89epc3am8n11DdkojLdKT9YG69Wjok",
  "key13": "2WF7eyMqjxekvwsPgXDVCN8U2Lwnt72AK7qZj8R642sZMxgFnWXXZN3sri3UzxVBAEBmaBVqieyTTYHfEScuBo6a",
  "key14": "5yXMSZpyLYqkQP5K6f5joYaKgZzVzVyLvhn6n4u41y4Z7HuKsGEyJRmoKJLM7T8GKy13D38wUbR5qdr5jAtho2ay",
  "key15": "wFZR1L9v1QqyiV1xi4fpECgBaf87mkF7gFkWfLntW9jevY42odxhQuYscs5WSXAHzoSE2UJ9YuhdtnTQWLcW42d",
  "key16": "5vGBpF7kmZGatyyb1G4iJMGtcJjAphm6DHkr85Nf7XbYQLVKnVFAC83G9WWM8SYVSy4AAxtQManUjbBTq9QHKeW",
  "key17": "2mHfUQ74Xyp4HqrPkHALGCN45kKi8LLCwdV2LVGKbCsaofS7yx2Rh5bmbXkUAGcodNSGusXUVZ438BpAJ5EogBbS",
  "key18": "3sX5srpbcbEeQFdh7LRbuFpXPsFJikT5sAGebfhXBWkXKa1aDLEDyGav4XbayfVogHWTKgsq8FzKJajt5DHjDn6w",
  "key19": "kNvWzog7MTH4dseK4jpCUDH51WZmAYo8smwm5bPEHjdZWm5H1rWLeyY9jEz2ume5LZquxgD178NLZSSCPVmzwyB",
  "key20": "5VPVamsPqsYXcGNBKEuGUJXQLtezqyHZBUv5F2dfq3cB2hy14eeESCRw5yQhMwPTqXNsdu4xbDJY98Rp3WkTQ8An",
  "key21": "WNzAFndRtXYK8aexK1S6dA9tUK8DfMBLenvVff8rJb7yDKDA8XgsBABqodAPFimDkCVmewnRQ2rx6neo4ajyHGP",
  "key22": "4KP631WzPD15MmAzSp6NvsFxWocjTuZCqWJrC9VB8t7wVyi9AE5s15rL5jRSmR9EZVfpCmTSRdomifyXZCqmsCtt",
  "key23": "4icPqHAUxmMKRwgnCq7hVEXzHqxHbkYeKHtHs2x2v4DLia2ZyH8eePNSXwxWJQ5VBb4uigNVysgKC7unU8cjCgSK",
  "key24": "PyGUnrNiKn1S2vz678Yg7iJ6573mX7JU1u1vD1tk9WridYQmtvm14r9RL13oPSPNbnyJ6fYyLdNmcgi3b5NHjCk",
  "key25": "2QNAdGsoHWTmMvTWaaBpmWMJuFeyS1di9xUyCRqbLFibPtWkkTu8UMTKa2iA3c5koAmuzK7S1KfN8c3w69jKeF75",
  "key26": "2Ncswhk2xpix4TuDbENcZj6yNwJ5wCXsWhXZ6ajVU1HdGsbLqsEtbER96vVSuNW2vTysaDhTDHR1ktq98sVQz4y4",
  "key27": "4KsSZk157xYJs2qikezPiiAE35ebDRQzBPScej1dpP3c2zsVv4o8mXmSq8Q2DY77qNPuDxHaTDcVYrdEwQMZTMyt",
  "key28": "Z4CNkCrvhBGMKB5scBUy7659gTY48Ka4QSUN8pkGGQyNWHcRdhng8JPELJ2mvyV7uTEJ2Eqv5k5ANCaeGNz9KJT",
  "key29": "4C98Uz4Fv2EUDQ2Ch5XJswxd173GvjRmGTXk3W21CCo7igjjnHDsRCag5Y9RVQuaP62cb8uFXm4rjBGjXMZehUJE",
  "key30": "3VFUTcH3piLfkMEyE5Fes4fYG4vBLRYLmBEdd2hjjXd3xd7PUavZCiUmJxipTdYnTkzykW3NH1GeDkj8gcp16GoY",
  "key31": "2dXb1tuoDW8PgbHfG94PMyznc8ihtgFeJpDDJdrqkd29bVdTj59Uc8YV4fT9jDrpbxZQYRPxkPjzWx8cnbppXgdV",
  "key32": "FGPMUhryefyheX8193mrhvMtfvnkbicz2abyss77exr6ke5defGrtEvWw1cxox7qJHXDfxUWn841j4xUboPtfVZ",
  "key33": "3J2VQBLcHVp2gB7MnRXckUfWa3ie98GPQHsER81hYmvBgMbRDJ7z38ZVEmzhUd2wrQCRHV8srYW7QW66FPRXZ2YP",
  "key34": "3dY437mavMLkhpG3JQbyEGALGgjgV7ZNNiYefbBTVHdzU4izM2Kkahw6J93oiLGVuV4yHShio4n6jmx5o1zr5ZSp",
  "key35": "oq78NapTQsUy7nvLWtGHtYsY82F98fkLd6HDTSAKK5yWQxSPmknNy4xwSfCndMXTTo5kFGtKHEuZr6zHU3gPSCF",
  "key36": "5h7Q7pSLZcAZLMRQrDt5Mhhst6MMtTp3nqBJkZBSj6AXhqLkzs6dBw14efMGx1uvVBGj4QnVpRafNfZv43VPi75A",
  "key37": "1u8PCioAZBEXxmtdv2AsCT2edxR1qgqHptsKfDh8RDARYqdCLhfJATQ6XuASGuDnQArCB7f4LJvSzc6u3dDuYLT",
  "key38": "2Vtf5f9Z6R88Nr8mtmMUSxrdkC8fkRSg3VdLfVbRVNoCEk51iLnzEuZ5gbScc87xoNTCcEZLaiW5AY6KovP6CDCB",
  "key39": "2xsfxdsc8D4dfLKEqQGN22j9Q9KHePpyunJDm5b6i9mKrSYKzxvar9GxMVTH1UWpMXZHYA46popE5MUDRhnVg75C",
  "key40": "3TYB6CtV7XpVR3gFpuo5UC6oQuDPzgioJCAafL2aMhohV7hYQXhpsFSbgNspAPx1AyX6oL5NA5qcMnuEJxrEurzL",
  "key41": "41kTKZ5aVhTvsTDhY2iVBqDNpyoJez2tNeFCyzxGwE7UDrcycWLgLYa8Du7La8sRf8qKvYQ1GpaUEKK4E6QHoqNL",
  "key42": "BWQMLwdxHbTRkbMZZ4gQSbKfhjmNwenjvWqq65EUSk9CgJLVVk7MpwK4sY5HwvbToXYi5qBCF68UNubKDbj7Mo3",
  "key43": "mPhU2xsSj2sdZPr6DV7bbMHHx4583UTrSwEb8unYBzjCTavDc93r9vfnZJQGvFaFxRQzrUakife7fNWBwb1RFb9",
  "key44": "4MVnKknExEuAxfC59NNGQU91KhYafQL1L7PQSFN7skXpihVBLAzSUj6fp5gr4u6N64Wo8PYe7QzxNVeUKttuYs8c",
  "key45": "nN6ot7GAM1JeCECpe8SrMUC6kUQ9yDsBfYTyKTJZnZ1h8MFW7yscpwS6Z3973XXMqTGsU7ZEVq6DujP7ZqQS1W4"
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
