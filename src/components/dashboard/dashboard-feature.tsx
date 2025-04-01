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
    "616PCMA34jwUsZ674D9Euu7E5z3i9uPtCBj3nZv4tZD7Pd9N2pKoJYdP9nZCCf2XgQjkffa4QHswJhVMeC3En2NQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YDcY47ZNb7t7gieevqLE1FHpG9xTtYTnNkByzncRUCLNVMtjZ1EeTe4GBuhUTuuDaxo3GMxnNBbeQY9vzQUhAbt",
  "key1": "5z5qGCrVyt8vxikEMQqNrPGZPmzhhQ9rjZEZ3Hris3Gw5a4iKxXKhQfgghDM7eCorvi32Tg9T2xLir8C2qmrimRh",
  "key2": "3MYWXcBQgqkgDvPXnMaJRPUk6xqDmn4eaLcsFaBNpcLxZ2X4uwuH65vUd9X6XMRb7oMUP2dFuMcrt6NGK4rYkJsK",
  "key3": "4WXDcWixUrz9MpXURsrru83EpUBqieiBnqnhw4r2WBhzhJ1rxVaFqddQmX35oLSNXn18AwNp1UHWMZuLxVynatAQ",
  "key4": "2NbgdKW8QXbji5uZcZ4ExXAFHL8cX6yzcejw8DjQe4R5M2q7N44V2dvioWFhw3W87omxZi7ToHwEtpQ7XiyMz246",
  "key5": "27j2KAbUp2NjDY9BPsiqF7QRdQCychWmHYpkBDHPMVKdPAtaJ7aw2wAG4ZdKRLqwqwrN5oun19thte3mwQsT7Lxt",
  "key6": "3Nx7LXWnewW68VQ6EHBgy4foXCoB5JpSskXHq75fGEFdsteezV1epbxKNpZKC7ExauMCX13jujhZuYAUuTtnsmn5",
  "key7": "2oGmmEst5eWXigVGeJ9uXUfSkWUbyxx2DPUo5bBBzcpdXVz4LnXpXUM9N9kb5ZVtKz3inJCZPwd5BeyBZMjEs4kz",
  "key8": "d95L8G4APqQ1HeSVC11MkMehgQLWmNi6coBGQiqZaLpsgYHniUDfEGfQZ7YjMWhVEMFwsHjNdRdhtj47YTVji1a",
  "key9": "29v4JHX6XWvccHeDZ8RPmT1ma9Q379uaoQVnZ3sAYr649G5Enx4X3DVRZgQA9nrnSExJHMTnQ3B9AmRE7Vvusb9A",
  "key10": "2Wiw7dqFdq2cvQKj5prdrPKBJC9WguKhgXHNv6up8M1vzHFK5TkRra19LqDfZ5FScchYyBhttwxwNcrJVY8iFjMt",
  "key11": "FPTqxF4jf86q9bztCayhMUeuAsanSquqt5nT8S3vbKZcjua8gBvyFhRx3qbok6zxxBbhbVmf8fgjLYH6H3TMh25",
  "key12": "48WSXqE8seBpeoct9Towrn4tNEsvHpf65owZtzxDkhuKSGGxD3tpHXa7ByDNvE7Szi2NwRqgXjcdNjjBvMhA8FSA",
  "key13": "48rdgBW3CVtS6ht7f87v8yU16TZz7osfmXfD8oVe1revDf7MAgwrpDddhAtBHVpswKXnzB7vHjtrzv2uPLFjw8D3",
  "key14": "4Pif9mNd2qbX8SdkLokxEtCf1VUGbVn1WYvakqtC4DzvKGjWkjbghPTKFGR1BZaiq8PtYkuWCy8HzVe8XpRw4mV5",
  "key15": "3P7KL8f5g1r8H6HU8X89e1am9RtvAoPjnFUfxMyrZtGHNYqLC8nRxEsKvHVjjRidErS83vdzqABvLxpiWCGhnM7N",
  "key16": "PEwLhpJVMEmuZZr1iFVFyFiZSBjiHk22UDEbQiu9qeqh4L6gSBQv95DHB4kuqGYHoFCJcqbuMkDMTpyFPWjJobv",
  "key17": "4xLvRaEjxS5H9EWr15hQtgiMhTyD2bWnbUeEhwcFtCtG24i33uda9VvY7wzQ89aBm7boSiwVHXSHph6caa49X2Q1",
  "key18": "4jAQYs5uwRcn5bh8HGm9DF1DvrUgpYSxDg6FMYk2799WQmTbFdrjAZ1eHZjHJMtytTkQixko1fsJxn58aWyqyMgQ",
  "key19": "5xqKcVyHopR8Xkv1S7PZHfBERfUg9DQ5ABp1FJzWAVK7kvRavyTeDbDpbuDjQrETsZ2AT66e7Tcc4C6g8ZrAKpB4",
  "key20": "33ExWmqQbpgVy56EHsfwrfB5BcoqxnSLPZaosvaBFJbVR6oHKKDdz8iWdfaBNG84379US6LXM9mdhq2bCTw8L7KS",
  "key21": "yxyyFFsURwu5QvU9ct7qwmU9jTaiT5xbYmfkfGr7DhohoLjXvbau6jAgQzxRqDTYk99tadYKZt5RyxKy1ineUEG",
  "key22": "62NcJ4BqtFGSNouRGGmVrbvmvJ5kcXKZHFjn4MGUkZXLY6Gagwo198yiF3CF1nBNbsfZbsUZsZ5V1Q9v2Es4kChF",
  "key23": "2DDzGTSUndc4sstF6AoVhHACt3ESs49wTXpT9UgoihbL1GJCmDdsD2HJVSgPQ5X1LBHupQ9mtDWD3Ki5ebVZzgGz",
  "key24": "3U1YnsMQ2xXFGUXBsyuFCsfFi3RmrA94yEv7t8qcQRtAguBrjRK6TrDtd1vJniBd2pCU9VDqWxvF4RWgw6AWB34V",
  "key25": "2rJn6K7WBgd58kCfwEELAXDv8vFHNmGjkMhsksAnVxUx5WbYs5nCN5bgRurGY4mXskwhGQ7rmmZpHhEEmddBDc3J",
  "key26": "3XxrGgGw9aKWkPWAKJ8SpLYk7kqybjY3HEQ3s4ySA37GJhe6igdZ18yXZfSaxeDu7egNQdeKBcBAR2NnoXhGBJVw",
  "key27": "2ZhYwwNoFE176teDDNNUvHXdtjKR5hSb85N6WKLBkJM5CEGjNE3EVnwDhSBn6j42VUBVeHv3Nkwi8VmhUf3ac2jf",
  "key28": "xCxDUuAe2E45cQJvs8kd11T51peT3dGiXedXEpjf4Qk8dFyzPwmMdyD3SL5C85bLmFFNXo2diaWCBPxyWjBRerG",
  "key29": "tTFMMYAY8Gjm1YQmW9nFttPpF7AYxTnF7rmgdFXM14HXnhnY2ksZbTUk6XtR7si1hd1nk5mM6piAK9dJMmuhLTy",
  "key30": "4iWwa76v17jFKdsyNbtLJRRgEjej2qhCo25LMhcvqzVjVgrqLBgsWxyWZzsWo2fJrNurr2Mw7F8k4YSBdws7JvrM",
  "key31": "2Kebk1XodMYXNh1A45rakxm3kL2p5T66jusCQSK2N7BZFDAyUfK5zyHs6dtR12hGb2aCoJw3TRUR6Mz2NbSxse6e",
  "key32": "5QZby3kk7YEr7sa6KZUAepY3i5vohK4RirSVjYZKV1vXA4z1gkCe2wAJKDXdPXSx2tjJcAy35aBwgZeTkv2zcJSK",
  "key33": "5V1c4D6drvUknxGcefL4MzNMYPkuB25tPLayJWn7dBvtbkwtYXCbDx3RJ3Piew8RA75seLPRwVByaS9SJwqzqUTr",
  "key34": "67VWzKckwGCxAQ8ivYsanxpu8iDLPyPtVEjUsENFVVpErHZrBy8vipBZHjrHXUDboBtwt4Hz1eGqtugD8xSKZ8BN",
  "key35": "58nZgnRA1U8vxLVWXUoCzV4EZNLTbfBopRhkBU74jvAL53N9cbqSoargqW6rQuBZyvoLZZp6NWyGBD2gecqWTcKG",
  "key36": "53Ti8JHTbgd32FeNT88hFFS1pMvj8eC46BmZ93mgpABAf4mp1j7SFWyaKdPHp9nJ2AN9vBoURqrJ5N1nCDJsBqV6",
  "key37": "4MEDVNGsio6GmTd36MwHZC4SEXtSgQmZZrnXx6L3rfHwmFbJNzuwXM72Gpz9SQJwBnLXcx6sUxxKxwR8eczkmASE",
  "key38": "3idFggJD7pyGA79Ed5bq1sTAhwY9EaLWG1Mm41iewMgDeNZUA7wfdkS7qL75sLtZNdpgWYMASqKCZ8bgYtwygYEn"
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
