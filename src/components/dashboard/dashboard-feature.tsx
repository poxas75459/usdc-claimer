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
    "4L3BPShcm5c7rLVyMnN9F36wjz7c55aDmsGEgujJSR1xZaTYbpFjcQGwacKdSekArTDvoZAnfWn3wVvCDDZq2a8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fgx7kZes7D7Qa7YUPijNMisMk12tPTA2b9s5od2b61DGa2GjyxWREbLBmHMwP7W6ARQQH8w36Ak3vu9a9dqS5CV",
  "key1": "21iZipeXD58q847JipwgN3BzDS2NC1JXdWcNBqvjAk68PVhgwQi6vNUgzBrwtrjjARcdw3kwbtUpXF2WXuFKZWGA",
  "key2": "2KQCc3A8JSaaWkxNBmCL11CkNV9oijt1VxDULtRwrBBUnQXiuGfhvqTh4V7ZeWwyX3qoWkKavtJ7PaMMNKLgC1Gd",
  "key3": "3yEmBSDNdgpRB7CW4xEfDqohTD66zcRwxwLL5SxSgs6c3C6dPY1ZkESHveH4nExFBLQAH2NMKmHihm7rNos5We3C",
  "key4": "5FeYNFE8qSD33HjmPcMz6Zv6TZthWBF81bj1N75g4UjZwRhaVzfZb75iCYkqb4J6RifaJsFN8CALgrh1xfrSMXFt",
  "key5": "4xZWMFVq5RwxMYhSSRn4vESfbDTLM7Mu6VsVWCXWGPUgxkbnqyiL7RWQbJWarQLmrfPsaSfnJjvEhE4SrcC8VdUY",
  "key6": "2YXuebDDZP96PqgN49TZ1kuhTnFnB3e1xZbJRRuy9yFoxJJn99fPibGDtvx2G9FTcSzWqcXd9trSrLWB4CNrTo8e",
  "key7": "2yncXJBCtW1Btn7jvXTSJn4MfZGReuDFuG3AWySQZvaefkmaMwYyYdCaJ9VwZ3hzAudvJ34VnRqddS8h1ZRudbjL",
  "key8": "33nfAA33oTob6AriEQACdxA5ZsbWZS36bs2yMBg658MW7kw8wLqEjzUS9Ux2KHGVmXv6vZaDaiwZmW44ZskYcnbc",
  "key9": "5MVKpeCG8tuacdsoeDL6Nak35zP2mvKZEUWAHTuaBUkTR7qsMBHXEtmvqc5Z6EtZ8evxr5KrcB5EyTPSPYfng8tr",
  "key10": "54G8zmzbLgADQgsjjGoPcxaa4aGteRrUaPwCczGaBz3nNKY2M6G8JATfVS1qCzm1rjHRFwSPpUaWonFZo8Z4suRp",
  "key11": "5EHjoDo266BCdUAiiyWGKoCVb9oDxjscLfEVXRtEgSocTZpJEkb8msuVVwUuD5H28ovburbL4c2U4ewt9Jdr3E4o",
  "key12": "39iuandcYJLtMKqfKgKf2NoFi2pVqyEGzC3YjoRhgE1Uy1oveQfFji7CXW1qS53Twow4b1sU82egAr4GqRVCcNxZ",
  "key13": "2D8zJkc2PPJvc8UfdL1o9y8fEmecYK3eL9RZ3TPdCCWJh5MmCkTCSwmxL64zd3bu46njRMQ87ZtpGE74Raz3bTCd",
  "key14": "2u5XxxGmAEJvjJUxm2k3FZuzW6Abu1XrztDEnP7pfCu7oZahXdVuadJZmaXfk6havqTsMoUNUSCPMLwMZ4nRtZSG",
  "key15": "5dwxFAjGeUq3Y7sfnn5Yog3pi4ai3PCZoK9s7K6op771ub8HmSbdwZzX713LodJc6Z5KNNxXn9bZbQRd56UXJ3ib",
  "key16": "5g96GkRBwYySzgGqQFoqSS7Jq9ZRGNNAhDZFugFa3tK7Rd4ud2xRRAY1HMiBePGWKcd1wL1ZQrk6Z8YrDN6Jd2B3",
  "key17": "2aPiBdfognEW2wQD8s8ApE6GwwcvYmYXkeafXDjxSfCkxH5FXUCsoUh3mRnGFnSFc3g5VaVbTvCqLnU2YjwrcZEr",
  "key18": "qK5t4rUQbLFcJKP7cQWEnBrspZGhhomYuPZnQiygtcPvktTokkrpMXdfd8GsibWvnH9MKZeJKKaQ9NVretPbxqz",
  "key19": "5nSHb1gX5Njkv2HCQ5dDBUZxNYEZ4LZji98VchThiTZTBggkGwJu76SKyi2QcKUZRaVyaju3CJV5nmnB67fnvkeX",
  "key20": "58GfboPq5wWR79FVfAn1MEmHBmV4NBoAYtjbAtEKckibts3gQbFVsd3f4KWF8cVFhByRhuEz6zLYkgkhV3PcxSLe",
  "key21": "2Uq613N2RZSTVHGgmJ4pxAJgQ4HYJj6Uw2aAuouoeiB1Zy3mzFZK5hRnctVS71m6FEtsKrLaErBf1GzL3MMmBRfG",
  "key22": "3aCfMgH95PKh3RC3L4HmiphsnAoYucXoKEvQBP3Y4bgk66e6G4oC7KUUvHR3r8wVTpPQJcMMqJB2DZsznVkURvbK",
  "key23": "r1BRTNLpUhMmGyqX54cmhst2oudTKHDxq7zT1CGii8T3eA5E5QUwngffxMUANtfXqebLjb1YMoEENbPAHqpTunh",
  "key24": "3QRJxDsUnxECEcH65siM5VXYPsLdzgijErzGbYnVXThV89LFGZUZbKYJoSXNdu4ZFHT7weshhnh1bjXdE3pu3ztb",
  "key25": "EopbvhwEsdBYVhjtke3FZFpvjaFhE5H8hoGcE7qH9tPpZryCWknjWpxUaXvCjQFmKyBuRt7uW2y17WmzxuPDx5g",
  "key26": "62Ce87kykxYK1fbxqw7SDeb23Wp3uY9UiGk6anvR4U8x9owJhnQsjgEzsXgjMhEQ3W88PzMG8rRcHqQs2Qz8uRY6",
  "key27": "3XACJKeQXJuPLAG8C69PxVFhgcQcaYgmB59m6JXgdtZjhLegVUGyReTwirtZkdA3xvsjDbtWtHXu1qLv4Z7RvLRx",
  "key28": "4neRjn1RSiLmLF2YX6rs86R3rM3snu8mhTmsX1X4rAYmUgriBoBP7sqm82aZf3UcJPkALYPVNxMoMwH6Szabes4Z",
  "key29": "2ET3pCdxo82xJfYaaEUJrdjFsv65qEEf2kjgL6horF2wayin9oEffjtoJo5PWpeWovQuhJRLx9YQ6MDCAdSqsqn3",
  "key30": "53xoq3PpSMZGodPhHGi1baWEjW2y7XBdUP6VYn4powqWAemsZJQ6ynkyVnDV6hgNbkMxbQSf9HZmx4LHawUHN4Wb",
  "key31": "2S5Er7LjgrXEDorvxi4D12yjjiu4hZfoM7ww6M55qD4CGtEcBqGWPFvFnA9UGwb4Hpb4naryaMZZeD57nD2fVfwR",
  "key32": "3M9QN2Cm32nNRrTMUazTJRR4BeQV2gpQ5vkfvPaNBpUrWbaVds6X9gkcJNzQybWPLeqsL8HB1MZKvXBfu8Zv7mwH",
  "key33": "49D2iHcsLWJsBowKT1Qc3j8KUgsXc8KWTdUnqCpA9nTWdjxfRvEHszrEMGWyBsgvPPETHYMGMUtJkBNvYtrpXGMh",
  "key34": "3NNfMDiW8kf58r27zKb1AnEaWhAWkVgKUGQRhjogmysJtd5yBiBfFExgdhPfNUWKDaEBWUNYMY56xpD7fyd2fMzh",
  "key35": "Y3GS5veuQFmDHPQWM3duV1wuBnSn4p4xu6n7e5ULiXRJzeqiBy5MVMGQyJZpMPwZ5VfA44XoiUxRDssvVjqN5Lh",
  "key36": "2PDcSN19fVbPLp3bgRRpQLWku6Li1AcJqTDRaEee9hJhRBfs7L5DSDtP9iWi6R6RwifooXZnMD7CUjCPAjMrBxLD",
  "key37": "5pkB8MRCULLRkbjypp8a6NQNaE8mCzbcWigUr9qycBGhc6NnGc8DEznckyrStvG1zY3MZppf8GMbuVsGDV9FTfRy",
  "key38": "663Tq7Q9exvWDpPFJt6D5wwdCahiK94fmG5WPgWREKzqt4HJxzvfAxNjRbbz1toukWQZo9U9hWFivxwYZ5c6zstn",
  "key39": "2tZtrGjmH9omRJQKLwNYbABZW8wRfBq2HbJ5QNPfXrzLEsoTbSNV4ZGrsVNte4P61GNdDy5QQsahV3nBA4Ui2tF4",
  "key40": "5YSamWQhZjqgK8Ajrr79mW7oAXVpY7c4NRoCLnpoq3mcEkcNRpySM9gF8EGWrP4ZmcGDwFXzHG962T8US77yVfX2",
  "key41": "8o7pRYjDLbsRAUffbbzqmZNXB6J67HziafCZdnv2nqHVsrzT5wyEyUR9tjrwgzFnuXcSN5ohihuaoYpiZ9CUw8Z",
  "key42": "2qDokkieeeJDAjxKnXT5gJkqMLcXZQp1zbQvzF1oUwTh5jBkfYkJacbT5iBgJXtPXbtQFZ8WoiKjdo9b836qSEXq",
  "key43": "scQV6KVmfYJHsmRm5wXRJSFRt3yDm7bmQiktvdSq3rviNdB4exCbP1g6pWyxEYZ5QBagEYE4r14YsNKPiSkFCbE",
  "key44": "5Xpdp8vQ1T6JEPXH8NVuAwbiXPBbg5TEqsBr9muGg4Aw2TzikDm7H9FT9p7qfZxFg95NntR9Jgjq7MX5CtZsd3RK",
  "key45": "2fcQFkBKAVxAwFSWnfP335osBnbjE2MRgpafbMR1wNGpJPWtJT14epqXVtnxDgegG3BNPrL5ApAUq9HiSpW26jpN"
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
