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
    "3DJPP6AaRizXMyoDPNMyFkr3zLCsxAn6yUdiCCam5H45S5njazLNdKfpe68CZroxVQAwTweT97ct6mNubmqFfV5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KaWHU1Tn4ZRWZfrivNYNBvjTpZfPzecrm9URuXLo6boAmt8JYwzUb6n9ocEPnkmqbdrTShyBYh7vPR9HPH7Phqo",
  "key1": "64g3cjwHfZ835mb5Ezs5dq4a9NyYUr8UUtjJxNhv3C2QD5AGCrbXiUTdiiTj56xN1h6pczrsDM2NUL1YonhzBQ5q",
  "key2": "3GnPnz8gwjnptpJ9BJeCANajXAKbWHGosccjxcLx2xBCtzWg8LeEK1S6W6R2qBw3L6fndgJfwungzvt1wpf1UQXe",
  "key3": "vhxUqMtR5MgHBfV5LoJZhmRGbXzgfKrdj5yNu31qdZCCz1hTAoFvAnN8nB4hssH8kAxZ2fKtYwgekkoF39VLp9w",
  "key4": "5C6aJe5HehBMSoVnCK3FDzfy5bu8LVfTXYbwdvyKDAjJga1vwfLhYtJR5B6PyNGjgPkYZPsLFfGbyp8KHbw29xW5",
  "key5": "3JrE7hcUv9LhDH3j24oWrQBGPhVX1drdPKJ7r5jUmQX57JSpgXMCDEZ6H7miLUXxkBcpmkfEcSdnAZfe2BwwauTC",
  "key6": "4cYTi1S9kSXRitVQryxABD5ENX1goz1g76hpfcjyKbtAFrdWUzR7f4sYjZ4itM7ZSETpRsCREpt67d4KhaCQUVzM",
  "key7": "2qKduPwLkESHEyh1ayu2kmWTDeB1s53LfX67yus4kssCxvjCFT1DMoJp6DZkR5C2sYpH2BtfrHQEMPTFUBcL45TF",
  "key8": "Tw3GWGUfgf19hnwT3CZQxBNJ4txZr7Umv73qFrJuTwUJDfRb5N4joUHoT8XvVQaGVCqCLPuhkBPJDNcwQizudkj",
  "key9": "4bvfz2yzERscb8wPkfXPcWcgPpCUxXBUUEBnFNm1Cppn5vsxCRFmNrxDa4g2yv86HqgCUejgehvwE25MvQzoKGeW",
  "key10": "5uJofDfMf7P5EN54BZ67bJww4LiKEzB3fuuPDG1biN3jTTqnzHnBg6mfz1StJqgfDwktDJDNBQ6yYocnuBUtetPz",
  "key11": "5sBU6UvL6fGbFXg74LKMLXC6NXfrGS4GHCqxWgMnANu8wZsPEfjV7Z1Wzbxt87rcZMES7dJB19qgJvMhmm28dftN",
  "key12": "5tbXqZAEJ5vLKmC6kr5JqoUSdCxstwiWpXDd9AjCSEnM2NWGZ1MDKVCU8NtH7mCf6rjQv9Tuwea9BZJTr7ZqqYds",
  "key13": "3Pn8Xr61ZGKySCoqzJPNZueDiVXviTsYY51MT2pvXTX8ntoWrYLHpnRHFsHZhemPJ4bA7k6ywKNvsM1ZMoXAgDT2",
  "key14": "37CTBrsGhin36c1R3em8yWe4uUZwsJZrZr2xQxRN7CuWMDp3b1SwxhMz2zK3Bgd5T1R8UHp4jS5pmdBKMXfkqF1f",
  "key15": "2DmYagbDUBhRNC8CvwVjj5L7WmBoB92ELfbag55baFHpuhBZpacYjafuxqs52VnpibBQ9swkdJFa3Q5Qg7MLQ9Hy",
  "key16": "5E2s14zsAmzAuyeRubq8GhcZtW5vNVPUDirvw4pzRncw2NWQmeUs54TiJ5kcozJQ8HJUKKGWwr9uBMmxTfTVFxBT",
  "key17": "5qXfGbsZEr2ZbnxCq8i78TQCLidxZKn9Cshz7zaaYkC454pbfHfgPX13brUpjt4JfRhf6WhPD3zzRqeSPw9XhsvZ",
  "key18": "4LpNf9yXjFGjcFPaiQyGB7qc74nkQ6YqdxsmMTKnkoubKGQ4VqKsVmMVCf9T7qmaV3H8JFySCBGBm6F9kQCvJrL6",
  "key19": "2AKFanXn4ACRtZ8Nx2xTvnnx6BFVCcRELxC16a5taQTrkrQw3rKe1V3wCiU8M5UUGxywt5iUQkeecn2dvkjVVK3V",
  "key20": "5YnTioPy6oAVeSnup6kZLWLALM2ydDadgzoQcTfnP2KYQzJtiEuyRJucbnpsW8X3CqTEpiAaCYJKj6VPb9dFr1mt",
  "key21": "9fwSJu6X1PPhGSbG1b4o5r9qoxikce6Py5cUBX9JfK8cncP9XmgPHKCRGHNLfmn4WHD1YpJSTjjKKafZnBFJsBE",
  "key22": "44kSsjUcgsNzFM1JPUH7PJ61NfAoYooHaxg47XUuDHw81VXShxoHrnyp2Xfe5hKCWwzPKcUhNB3rSwgPKWe1sxtf",
  "key23": "5iqK2wnSr5J1soePMM3ksL9GKg39Nmb4hzr2QVT4o85iU8tWzYqBU7cGYtT8oDgv5RGcPDgcz9EfazY864XmNyoq",
  "key24": "4rrEDFpo9z2BGS1Ldr367tsfGweQKt24cMMTSBoXsXWxkTS2Stffh3ijoxA13FqPMpAxQHMoZZq1deLt6LeM8deD",
  "key25": "32bEMzLPdQ6XXJ6usiQZERe2ixKnFUCYBpaXiePQ7scPxxsVB86Z7trS6nn33PgYCjwb1n7oA8bkHHY4ouAjjAJV",
  "key26": "ZPiXLA4BCfcwihu4UZF9a1hMdz87yL1ayndwg6hjs3zGs82GWWrT4pdoFtB14aTPXECnkrvjgCoVMZX7yeEWfk8",
  "key27": "5crNL6d384op1RhUN7KQTeFGSWvvb1zdSb9fZ6KEKFCeVB6mNQfNkY8n1G7xenVfA6LmkeHbQ9X9CAQSwRfZLWnc",
  "key28": "sAMSZyfpQipAwotT1wG6xGh6aYvGoJnNoepVLaxcypyqDhW51KDyxj8vGYTtLiJVYu8NUx9qfpwKwqF4iEXvV86",
  "key29": "4RJWGm9HawCKvT6e4EHjRow8HX5LxdXAcRjVhNmE5rmCFqC6ka8mt945u9P4QoEnofDcLiYxSCNL9DrUzjRwiZgx",
  "key30": "7PL56BSu647ckUjPg9Ypq9LpWKYgb4ugsoCCYxaMDi1qjKwZD82kH8s5jXJuR4KABZTxzykHqHmHMXDut8WbYwB",
  "key31": "pCySu6yEAdGrkdxRToVKCvKHRGePSmxhQqZ1Tt5nR9ssgSxTshH9GTXxmMgEieeYNBMeJEeXJevUkMef8GTzVcT",
  "key32": "2dZtbJ9UkKxsKK5srPn6SroQWcv99iiJYJXvy8cortdq8igNUaXCUR6n98EY4iXhyxWLzAqbEL37xBxJmEEAdP42",
  "key33": "3b2BLPS7u8kKYE36A2ARW5BtgVRtqRbhvz9WAyefoBdu73x6RoTtGEHAwWRo18SX3t3fMi5cFLs2RqugPW2KgLok",
  "key34": "2DhSBH26xRTzbAbauwa9JcsLoHzZYQbhriJrJZ26nVbHajHjBDAigNvvKHhVjjQke3F5Kcux9YZdCkEa63L7QSqL",
  "key35": "3rn6ZDttoZZkdsjnP7ZsUgQXzneNbwtzTcirMeRpcM5LTGEoykRGdL6B1cLJmpiibn6C2jvv8rBqNA3KA6ieDnmm",
  "key36": "4oTYvvhdSkRoheE18ixVLgCUWMkBWGx9KjmWiWB2Du64rxYGPEYhETb46y5qGBL5AYFXtDjLPUesZK28LcGTkMeE",
  "key37": "4jDYAq2o8myd7kyvfMZoXdMk5LyZHVm4QmhHrtZrwe8bw1KUepdN8KSXUvQuKkHszCr2vx9BFzLVLxyzJfA2ha5W",
  "key38": "2vjeibBeZkPmihc2H4JNGKx6bezjtrPRFRKLwQmr2ia7BDHx9ZuxAAbMVCyZS6fF5woGBUo5rAW4qq78vJVEhUKY",
  "key39": "5PcpNfBLiW4AseYKdrSTDApNrjRCN9qGQTqcuhZgRj8Fx2g8Vz2EA48ZG1JgrATURMoCw2SbwcdTqdRkz7jqA5nD",
  "key40": "48TKckpvqv9QTKJuidedBoSxaKvZPeU7K8jGKfhPxVRT9HjWbszf9ZBddq6HDPJWrh4SjwXHpCJDCYsS2EVAKB4E"
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
