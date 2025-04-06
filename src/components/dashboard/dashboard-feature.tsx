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
    "5Z1h84wBLX1D4amZgqHRbjU8g9sGUfAmXjaz9ppspymJ7U3YsfcMECWRUMgRki8TGKFq4CVupL5AA3Tne33ungjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PbpFwAu728RNbfi77CKMKnxVScErLt8Xo2m4PPfnMqdYMUC43xqNAN8wihF3snqPjgFFtEKPKsPHnhCwVxTE1sq",
  "key1": "5mFXiizCEuMLJ7W4b5B8nt9VuybR5MLUGD4gWJckz3wqzzK9rQmFTTFtiVbsfAQxLQDkcswqevj6JeDnP4h7bQSF",
  "key2": "2Y775KZheD6BrfZdQJ7yAi6qxNqWLKXMEv8QwkbsY5BZzWUSABxQzLYNFnJgYAyq37mkhrCowVDim1utnHwX5tSZ",
  "key3": "UnJPkDUEvJamgTmLQfd4jS3kSALC1FebzLNS4zT3CnKHknrSJ7Gng8ZtZSrq5x84koSw1vgJ7Ak5Y4DdxFJgfHS",
  "key4": "4tcsKWD2TL7AP6GZidLVSdj1mk5dKuiDrLhq9Z7ovqGDSvsY4xKQt58wWsfo6nc34rzCmxUBFZbkHyxKHSiobgUd",
  "key5": "2jbv7cWSWCH1Hyo8xDShJFGwqGpfQ91doCkNBdNMnqABvVkYgy6tqqFDf4igSjuPrNSsoTFREBbF21ZchQmkYHEo",
  "key6": "4UwjxKAEBgyCmimqLP81UiapuRpbRgN8pGopNyiDDEAZag3Q1n2ACFUKq57q5qLD9kTBqz8Bv3c4vzqX7z7WuxBD",
  "key7": "4GD4xntmGQGjjb5Vgv2GBiMyjY4cjoNiVLhKapYt8W98FFqex4bCHhdXXdkmJ9n2VUQiknRJBDWJBHPBEovwiDXT",
  "key8": "2tpHwMpbCBn1d5JR8sF4ax2WwBeEC2xearqrNbkPXKCYWjrq5X5vQ15kQyy414CmNCJ4N4SxWgJ3x2cUZzfyZKWX",
  "key9": "4ZmGxZKVAyjVcfdotRSYvnRz24hCUnpKc1fMqX2FbKVfPpQn6XVusVi6SWgXb8mXhQFvkZ8CNHnbxhkpMALo7Qwb",
  "key10": "3mY3zE5CGunNx2HLYsKRDU6i8Vqexfa1CRd6vtSMfpboJcfdoMWpgGgYqp2Hh61aELUsmBBMm9xCwx3GYE1QWz5n",
  "key11": "4ViKuWmpwtJgyLn1ZdfhAeBPbXixkF7FvJNRAjqjKTnW6N9Cq4SCQQxu5or935gzYxpKNADSDXehgQDscKnXFR1R",
  "key12": "iAN6Eqfb7HT9Lnp6VDdpLUDqTPW3u6HJr6TVAFcwyYSQXJtGTsaRo4fzN3pd8gY8nHiRHhrcP7PPm9FSaNieJEk",
  "key13": "2SiS9cvwAAbWwP9AAc8Sw4fMqQwsab71PggMcG8BAxxihnibK7oYsmdQGh6E3GAKhQoXjXSpysnaTq46Vh358aKE",
  "key14": "4RVASGWfTEUfeBgorzdVJDDGtnbGXymG7aEVetAD8zQihxTopNGHAFszJ779d4iUAoDCCYsuGsk3Mnz9khpvbjCC",
  "key15": "4L8PHDuA9cNTMDHZenPdzfNk6wsQE9YaKo2EpG6msNqEPXuCShgNtvcsnPA47wQHe9xQoz3u9J9uTXS2jitTaecs",
  "key16": "3p11YhpYeTp72CvLxrLPdPX5CuabM8PrVXdkTYf2QPAK7rKNgEgXndjRGjxqdeQSgMrk8QEPRRCEDixmUFBJqseV",
  "key17": "2dVMgr4yKuDhCPxa9gqhEjbcchA3k4QF5X4h6SFcyvqd7UnKaGkhEgJNWHV8ySDHBj6E2LtP8Q6QTbyGjbeyoDnC",
  "key18": "3aSCF6STWqEjUstrX4rvqGXiMJnhndkuJnDeb5WoausKYwU82TXnnsnwvWCCWn727Y52hZVXSzJwqQATuBL1TQHC",
  "key19": "JAunahrjR8FpryNyjbqn4YNmGe73etRDBLQ6c3BKFHRtqLAQBit7eoLVpKmFxtnMjnEX9Xo5td1erjokBLtzbGj",
  "key20": "28pfpn2sEFFg1oYGKz7Q8aTEiYwQvfyqimsHFRDg9NifWkwFrxPmrQM5EPvK6AMQQuC9gUfhAbEJhyzueVu6RSo5",
  "key21": "4SvUyL4TdXypmLg7PGJzrJ7q3W5zaNCH8k2eiaZchDRtGa3WcZwv3u96hWVtdZCptiHzM7Tu8K4eFt9MpB2JgXky",
  "key22": "4v8cmS6C8J51oEgKqeiM7CTq6oPP2hfBpiscKS7vtywwczRNQy14vm3UK13b3v4o4YQV8NSrandd6N8kkCCWXja",
  "key23": "3Lim9rmyQ2cYHCq8wstXJ8atfdQR6ymiF3orWBcxAAeTFr1vSWDmpkk9e7rwqAgd4QyURi1YzTDuiPyUC1cPXB3v",
  "key24": "5LEwkyMsVWNzYCRtGrCPMwi8E6nwimkUSR3mgtrUEseUhKmpnNbTm1SiT4iFqEqrK52K3hJ9nnAStuzbEcxiyQVi",
  "key25": "4GBwctcoxLrVdmt17MTTYerTZHLDFfgSepEnbQZn43wmC7oDyW7vLhXBvcEKpMsW7nMGKkoVmHWtLRzPoinASzfk",
  "key26": "2puacanh6P2BwTQXKjERrpEvzg2KKyrWPjkZLBJvuZ25PFHEQRVuws2gczeMX9ryy17dSnZu2TMW1m3k4DTuZqDj",
  "key27": "2ZfGZv389fS99gS9tmjC7TDJhSynfCgnz3L4MkwGA5p4rnsFf6ksp6xRXE6KT9e8jrqtMoNbvtpVmDVnDoeGDnU3",
  "key28": "2MdtpRkad5UpPxaNbpdGe2Cq7dhGsVC3fCeAawSFGv8BGwvRj5x6JUjp7vH4cLHAMNEHwxEyBeKmXAfnu4tzvtZ",
  "key29": "47gQf69RS5XQ9Lk5o6WLcTt4SLw5twdFnCa78nzR4NbaPf9KikDEZiyesx7jfSo9dFpZz9KuyCiF2PBGc4F4mwNc",
  "key30": "4xtRFPiK3wRoqGAbRjnpAgpayCcSbGqL1L36sn1axJddDsuLfvKpnZE9R7opGmL8HMBRUxmLBvAHAz2rY4UkTtqC",
  "key31": "4LeiNs4pCWq1PaQbcq6x2QXf8pMQVUowdMwqmS6oeJDJFZtbo2G4cQAQcxVcXZKMCKr2igNJVEHZjG7wN3bNEyqp",
  "key32": "mNakcMuAfCV7FF7k1id7eLxngCcfQEW87f3ZncQbRHmw5MBwexEKJT7zcXS11XYgNQ8KWFXF9C9bfMc9PSvQZjb",
  "key33": "5yUvoKECEMz8SteRPTCgiiCHRJVZ9e1Pcn9vv7CeU1Sois1LNnoWdhijFFbi33PU5k1kLpp1HuZEPGW4gJYWV3fK",
  "key34": "7LZpsAnsF3HNRNVNvW6trWQZkTbi9YwgnXtvj4G1hvoLyrvTrAs9gquiimVxamC6sBtBLKkkJm6DvN4ZegfnuBa",
  "key35": "3iqWJJvF7yVE5zwyyvLNrX11QMP22sz5L8xQTjSrxUkMQgU1UQyEfXrDDAU2THm9jQJJFXKZUp5ZNNsvRpYXauWG",
  "key36": "3YLPBuorRrLskFdsY5bGRA4XDxqchvxZLE7Tq39K36T1RDbvMYd7hEmyGUjqfnmWYs9XCZrGTEH16L2tSpPHSbKF",
  "key37": "4NHAv4zYHnpzYUznZUhPfW14iK74WPjb4vw47dVWnKddrqZzyHtuEHx9UVjifav32NXGvgkGTHqakoFfpYtM5ojD",
  "key38": "3J8eGu5fBFK3i56PwpyNEGQXZqTNPYs6unQFQzUcJJ7dHtWXRUabd8zesPTR5PurDpwodgjCHt8qD84xCU8zqwkw",
  "key39": "26YQ2GMDmdH2V7aBu1zWUFmpRSHmnxAGbcX1Lm3XAgX35ZWc8UaSLwKm3uuYYXEBatqYLPrkBd1C6BkNV7XUzjiX",
  "key40": "2gSpixe4yWBwj2jMTxzK1tJNnf8nfu7bQRmjFHCK7GqVd8QMcxwLTSQWeiYDsUMrg1kvN4zwfHFzwG3DoL7r6Ke9",
  "key41": "un5rzrsJuQ5x9TPZd9nmuw8TKVsxmUEgTLKBtygAaHoSN5EpifHwNWVQGXmuU9iwUHadv8Pa6mfuan8tnXVWUJC",
  "key42": "2z8qUxAatoQRMCF7aJRn7QtJ5ck2eLpoQn1k5iTYVqgW57T6rBtTmdxQFGuuRcTw8qrV8VsCTDt8aEecnAEmjU5s",
  "key43": "64jcaa47JvspsFXFJK9d8hVuqKhP31Ct5qd2UTJUqQM2QHV1EuFab9MZZEcbr2KAmLYy3DJ6h1qvH72yGzovMvzN",
  "key44": "3ef9Sxzb1zeEzE5YjcGpN7s5iXabLptCuaxKf4aHocqgUKqTM5cmaxNc9J6EcFGKV4rxhSTPbCNizPvUGTRsQVF4",
  "key45": "3W2d7tTEcP37qGbppujH312gHwkXbWEMiMmEBoc5fbTWtTnARGtjBnQAeUWjVQnunsjtdBQG1nTW8szpTMVhT1XX"
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
