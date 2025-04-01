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
    "2joM86ht77H4CeoQYGczuKoKbYVqn1x22vRMUwHtp75cVMauCSESgDsJUitAAd7fWcTxxSxMMwkcco9sr5Yath3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JigYrC3ZnoTovdq2xCcuqN4Wf8eZPRCnJbPoS2xNLgbbkabTciGXHDpEJX9Twjvf9fULTbxugeWHmaxEXYDeHJa",
  "key1": "3ZgZRCjCE9sWTcr687CjnuLyThoJF2fMXXM4vTWrHozELbbpe1pJKqHhVdNtkH2FVMeaSYeSGnMg9dV2JeXJspM5",
  "key2": "ZkQRAxDW8SPsFeQoaE78J8eHG9AJu6dBPPca3UE2kdavaeAsgu7KkHeZiUe5rkpzmnkQTBqKrd7s2foVSpo3bKE",
  "key3": "3jb9Efqz4YBNp8Dj93BZY4ruoeWcYgtSfBXdi6QtGxMA2ZmbZuLDRGdjdWb14jw9wfGS66qhEu78Li6ARseTZtPt",
  "key4": "3TYhCTZVPf52RbzCWvxcXsf5otXZiBsUSkNr2FmCmSceKKP6ZoP9PLgozHC3VqCxSDjZ8AATY8692eCAZ8Wt2uFK",
  "key5": "L6QTDi7Rd8iaxRCiFD3isKa9TUYS5QsoFmsepbGKGKs3HKPZhUmgKfvNqqzPtAVm4HtYpFcCfzkf6CXF5gW713x",
  "key6": "47uQZLguDWeG9ERKTPNhZn4kgc3nJ6zqi4FtfuvoMmuVkGfG51f3XCdrU7SQ7URk4C5GGyyZYzU2CiKFJSsTHEvX",
  "key7": "3t21sM46Q1f5z89YU9AKmP6WyAkJsy4E38netds1xMV89YdnzKm3fGasDqNevm2p4WeoWpwZuVnVXBRLryn1c4hQ",
  "key8": "4kxwbrwTPBRYHwKbeRCsQQ3xSXmnGDhMV356fEi7dMA8ekUDq6ssrPwNRPod1yRLHDeqFsQmA9u3ZzJfdfwwDBJF",
  "key9": "4Qb7jzJ7xj2mjPptFkcwdqMYgdtAHBiqAg3P8nYNkvcR5LBJVowgcgpxwijh2ipdkEDDTyT1ANw6C21L4ofDn8PA",
  "key10": "4EMBhxu367jmq7MSHE2kE1xrdhhGDdVL1o1q6Ec9vFeFreDdMbmxxadr232Hkse1zYkxcD3pn3EFyRTQu4PLuaVY",
  "key11": "3EKVM33xXYEf45ZYZ2asqXQrnFzN4PqP3o9uwhirbLnQ9kH5BffbU35EHRSiqCyxzasru8kTEWkNp7KgRwg8ti7Q",
  "key12": "5oCt7eCNS5RSwjVecSKrnoeSAZ4MNvjK2tUehkYtZ9YLGBpLeG64AhKLgsofZtMAHiEZTbtUGmTT8v1yKgMiFCdd",
  "key13": "5pLN7LsDKi9iCsZW9sDzAKaseAAPegqPqD7AYwFgsz86FYWzc5erUq7STkrVYRRvmyhd2HFkjXqYgfAK6GRKq5hz",
  "key14": "3z7QukMdZeBXPkSoCchtXZw5ABP5CJiTRbhyerkvuWiFcH84hCy9LVHTxXLKmJKQxn99vmGXkrgQ9VNdRqy64dEd",
  "key15": "3X6yGhwzB8CvYCCJTDGgPHmAdn3cusPfRqvJ1Gi4SsxUcNMzZDLoU7DvE5S3QVX7NkqqhdLJid82e83qYj9p54eA",
  "key16": "5mvdYfkfFnzeRNFrpv6Kg1kzggsrdfYRsRs3sNLTb59GG4aJ8KJcGkoCehRARpJA8bpj2ceDZKM36yStPMSGPWv3",
  "key17": "5MxgG1w98RkRUDykaTdFut6A2AQi3CL1oeQNZAK1HdyhmFXt4nqDEpDJ6Z7HbbXs85vZTEwus2oouCbDsDhP2WJp",
  "key18": "61auNtGdQEzQweQBAcrbJANVoFH5EZxmRMj2BckmNfPyDVqcLFWGdYTH54bBkBDqVVk2uDgU1E1BUxLrDdYJ3UM4",
  "key19": "3uqBJwoeoR3sXRhkD8DXKN8hBKCp8YTuC2mGqSucNnwu675ZFFARiTHQ1JErAktYew2SHb5SjGoEX2ybnoRZqiB5",
  "key20": "4g5dKmxY5dYjF24pF1P9UDWfBKmLmYhPgsNSjT5U2rW79BtGHu46bHWYJZhLa6bkhkH9A1dTgTv81CfMmYo8Wx7P",
  "key21": "67oSKiMzkQ4VPoU2ciZznZh4Ka61Bk4rEJsYG16FiXAXSMumDEKBzjzjmg1nHfgcxXvsLihY7B6JG7gBf7GHxuZp",
  "key22": "4wRe9eA4x1JSqgC6BtqxdxrCVTcCKmWZN5G9TZYYdhc4gyzkYd2sYKuapZPGaXhwtuU3GWtk8pPvEBpjpKBM2bjD",
  "key23": "3yP27HMFcXdpZ2ajnEgbe5dcYQnVZwPfevzW8jkDdQV4vYLnWSjo7yTV7CNkPku5tHCsrZDvmkgLLGP8mtZSXtYo",
  "key24": "4d3JdZGSynigLVdgdzjEJfsHxcbLaPe4bLHdcKKfpD9NsCSe8X9wu7CPbjFbg1zmfx1Ah4N6MaP2Kc9Yx4AxG5Wa",
  "key25": "2vaBwiKJLrmjXch3WGhsbF4iHHViPnyZbc5Z8ZB4wYg9C6JXPtkZG7arnvaDaP15zqk9Wo1eCFCsDX8zG7qrZvjN",
  "key26": "3GQB4cXB8n1Jo5bn3w9KwHWM5GxVMd9fvkAnepnxmtyzrv6N2mPumg821zAfoef1fHBRF8dvdAChXJoHqiwWjJ46",
  "key27": "3oSrNhdKehtod6pq8rzztks9ZLtyQEjeDizKPxRCXSWG4vNA2gRDDmndfrPGwzB4iJgwCg6pMXdHNzgbt4WeR6nG",
  "key28": "3mqeamJhPMF8z9ECiZ5BV627b3pN3axTZecAzBpCRbNa46KWycB4RrB3NKMYxHss11MrrqSbGBNKNssrcDjpWi5U"
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
