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
    "bWJAn4Dq99VfxERvnRWSfR9D8mqfmMG1ZjAtuLDRxyn1P89eXua1tE3qRoMDyJiMLS6BrcpYCLpnA5mqRyMeeLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qGoqNJi2BDWB8gvfe1hDpwTdQsmEt4GgAJ1fRSTvCqyAjrYX38eWPTBJrKRMa6hXKfggQJ4g5wr9AcT1LZkTtqi",
  "key1": "2Bw3XtgHQpevwxjSYS5EZKfac2KjmBDkiwPQoYuvRinVstsSg82Rm381sRufYmaZFRnzeyVAPpU83xCKQ4LkUSiH",
  "key2": "64xUQ837UyL1eqKTQwK6r2HMrCLoiafYQXmFK8dNKqs7UsfBpjntwmFnnrbPrA6Nt7nuHATJBJEidDTBBEXFYrG6",
  "key3": "3Ed1m9tu4tXqTAC3DMHYm1FUHmUC8Q9z54d5aaZzjaZip3VyBG9dJSxYpZS4FbYrcPyqK55GNbdfHwuVQTwLZaro",
  "key4": "iVHqwFQwT9NqjnCuQnre8Dk7X8ax6x8wsFw57sCvkYrUbaWTW33ugJCbjxTabbj1wradzc3WfNfaJw5zXMEyAZh",
  "key5": "22hNThYwtEYbre1DNami4WeWnGWjbpCwZgsV51adjjjJ1bZ7MbapWdU4pU3tZB9oD1p3jb79AtijfuFrLWVrCkF8",
  "key6": "5dzB9DV6UXYscWJDFkcZ3nNLVzP5jXq1w2vGuztEahBrPiQ8FowKNuhBCfbkbdY3HCoWL5Bm35vK8byUBcecLym6",
  "key7": "3mo5G5HAHM75735egDkihrE2G9iGZWFMtL2mYykuBK4C5Vd5by6B1AidsxW81QcLRe7Qpt1SG1SgvHS9KYW9iUKC",
  "key8": "2tfbtvautbwx8eEq3x2mWCkixnvkfR3uHzsUgXSiom5qXL8hXnArwum14qhFrg3NKHoQ3Pm52ACZJZRWR1kt821C",
  "key9": "22PrquFVC17jMT3p7t8pvGquzZadMKU2yiE8rFiqxdN4QzFhKz7k1jAnTypSeWxVMD36RufyXvHX7U7YNXCEzpf7",
  "key10": "3g1f7gJmu3SneaRvRRvscmnEfMvFaQyQ4YYoiqg23kGm8BX1pTDsKzxuAfPbMBLFp7AbSStiH2EQcaHSNsf5THsk",
  "key11": "28EgJNuaYd9sf4DRogx26JaTuS6bhNW9bqptGSr3jinMYEf2PhB1JEkVLgXt2phyfzLu8Lzi6uTuZkG4GwtFG62y",
  "key12": "3UVWxhEjkVRitVjhCc3VzMc9165zPaxUd7bMUuskQbmHBahdRZRiSkYWi8Hon3Lw1KG9Sh1gbbbE53mQUw6JxZer",
  "key13": "3Hm231txo3b9TyJyKUZm5oz1bUhc978BG6xLddmqyvmnJ486N4qYZWKaCGo6ZReiT4r272ogP5nqWmpS59TLxpDb",
  "key14": "N2RrHB4res6LbSEXo5zsYHh6ECrw5oi2vEHjxE1sdwiyZWZwJT5Y6qGzHRSmh4hfEBmqpocYNzjUQJLkUXqbNya",
  "key15": "2L75iRvh78411W26zJZXRZfmhPaXxdbjbZVVTMsz7pXdhUiS2ePJY5iYWokg4QxZU6y4KDdq9seEkHmc5CdZbLjg",
  "key16": "3zStVD4hGQ9WptVuPqtVcD37u6RkaLc8i51YqxLosQGbmAurV8BtSTFjuDSY9R6dGv4dBy1Gq58bNprMSuwNcFGx",
  "key17": "k2dNAVrNpLCmNTBEaqbzLHyzT2cqNMRAWKSNMUuqfbW6Wao11N9nujNkERKon9CFLAaX1oUd6ZfEqdPckpF3w4F",
  "key18": "4g6xqQ4T567NsQHa5Na6RaDVQuU7NDarNzVRXog4EVxUgAQXracCi2Nr4LzvFzT7GC2xDGxck7p476XhmEVthoWB",
  "key19": "3fJ441RZNfzMGUuXiTCDhNJkzRbr8yX7756nisK7LEPM7dBS9kVcJmA6GVyoQUVsharW4X3Pps2hesDKeDomBdPx",
  "key20": "2dvggnepS7aW4aZzTyWBJJUhMmEAn76DRNAze6oSJqnCu66j8GYjwizbLfMHDNkjsKttfUERLLCMnSKXUm1A7cJM",
  "key21": "2Xr2VySEJUNSME5ffCTXWrqskq36hefhkw7GHwpqRSKzpiKVAJW13GuhmvXxf8Gbrn7zdUfGb5phz8h1tjy9xCjx",
  "key22": "5x4cNsUvd8JGcpnsforsbj17y44oeDeztLJxkRu6q9ic1nqbDant3dJvGaFNifMZfjkTjWnHvGTrehXEPtgEoa8k",
  "key23": "47pb6zns5Y8XVmapAGbjY68ny5WMJHkFAv2cG38bssyr2yGqV3S7GCuqfEauCtEPCs9KichEAX568SpcRmGdm7vW",
  "key24": "5nsoTsgzBW1mS1aKEcaAsmaL4HTqtTftLGF2Xvo9Exxnpkhaacchv5pw6GJExkUdDdGRWsrDdJ7GBa6G1SHZjvDg",
  "key25": "5CFyPeRdfExmyfN1K88bughmpo4HwFzmC12xCmXAp4LabQQNa7sQi3x7CYcA3U7pDVGb45NT5YyGX8WiV41wiEHg",
  "key26": "25iNuZ4j9bokWh5VLYCFiYqBbeBvoBif5S7G8KiPkQNMPcShtSzYJVaP6LGSWZRtKW6xatnCcdUJKBH261byFGV7",
  "key27": "61FMt82A6G3NecBto1zWCr1nJYdABUD1RcSawBLKVy9vcdxrXWnh8SQvmF6PwnFtCi4GC15euvBL2bzxmrsA8CEi",
  "key28": "5GMChwvVwf9n7mnnwGTTFFeBf5T2N3KCyDBNtnZr6DgrM2nK84sm5uew7HQ2uZyzrDiHsJfPcN76Z7KsDx1yZX76",
  "key29": "4QzsWFRvEkKivTxmSAudqqip3aHJ1u8ggZWabAuaHSMWVYUvy7gmXucQ5q7NpZKeHyo5XdDYjpA2Ky8gL2dPfxtc",
  "key30": "2wY7jGR9gyVaMu37qJvD5uBDE5PL7Aor77WqasK7aHYVtwmCD8JwdoNFmDi16N9nQbS1ZQAAGC5cTb4VpC2TajAr",
  "key31": "3dVnxBDZ7RRLjhNyHcg8BUZCK3xnkF6vG3cdAwKnJzoqy6pT91MHC7JSMQnd3CuhM1jD3KcbwR5r2gzoV6bsTjL",
  "key32": "41omnLmPtPS6BwsCHXbGXYVbRpTZGXwGRY2e7NFtRTqaNnqmFiW6Ps174i9xhehjQJRy3ZD15QyCbochXL8FyF6L",
  "key33": "PPHsb4y24YStbSwKSRE7z5J7WqcKD26RwPWDTGhRVwWCzd6aqrQAqZE8yK4LvrG4tyExDrvkUqvNgGvRJLpih1v",
  "key34": "pWYv6qd7NEHdH1Q8yWdtrxmGcFtASC5auozzTsRifr6asox9Kta9vSvMHWMahTaMSGy4U8pS17rcfnYNSCnuKir",
  "key35": "4rDsddzveqBYnKPmw65RB7DBkJNxZc4yMpvAu9PAxpLNoXFb4LYKNTRPTUrset6mVYHrnDRMNgiP9DbZ8EBTacac",
  "key36": "5mLJ53vPmW2qk1dVGGapoK2BPmDX1TnPHRcVDnXCm26H6nfpNSWQJu3K6J7maZ1vL9zYq1JQdnSqTTqvRDQspAEy",
  "key37": "61UgFSh1FFnb7wSEneixQ4aRogkW16XUV1b5bj7b2tfqJRFsmAvgNRrfWbfxGPBckfVoqrbtCkBgDGPiU8E3cqAG",
  "key38": "4cqau7nptLD3uEV7k8TtkpUZGkYDrWjnaUCJKYcRVKyFaRW8PgGQLHijfkD2UBMTbhCPttk32PuadGwQFLBxSX2r"
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
