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
    "MzftKVWUcpngm73Piu3hgkRQkUL2w8pDbUugXqWvf5EY9vvKGA3zSbi4UKBWiC5mQ4LJJDUin3mG4FkCuYvpWv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f6fmEJksJcdf2iXfgSzpLzZT2tT3zE42piwzyi7CURoG7dike8wbMPp2YKsA442YesiHUor7BjZE5nxRewww1zo",
  "key1": "3Uuq2KZvxdi2NMhWqsve3E6vQ6Dnrb25RcEP9dcciACZKNfJBGbAU71RpzdUnhKdJPmkXy69LXbTFkPnBKzy35Tt",
  "key2": "2RamN7kJjedrX4nZbkPKtnfsoiEpvdb6qzZcL1bxYTSAZHGXcfUrFpQcXBXsFPtqhzoPZTRo9DKiTwWkvxgcYEnv",
  "key3": "FDQxiooUsbkgWrMczdHTXua3nYUatXTULqwPqHpHAYc1vDV3oYrGHVbYjaMPkDtfw1vVSGjDz7CqZpVMxVCqVMr",
  "key4": "4cGwCtmmy5BSAyGfZe1ST5dUYTs1nCo7MD1jghyEZR3Ny3v9vJKJKUpVWP6QQrEJ3kCLF8BYoTSMUjHccLs8AFy2",
  "key5": "CFjCeYVgKN23bp5wq78ctHERe83urJUcieKB4qcVWbLVQ1a6pZgqv4z5ezSJrtZtryTCCqcJwEHyLVQEU6hsacz",
  "key6": "3j4gSLQPBuY1yeSv96PjXRGrhTRLFKsVQnMYwFqZcvMeCqYyfm7JE3xPjK8d8vcadT4cPwkTsvPsqhYGMcny5dmn",
  "key7": "4ofj3H8F8XkP2tVq7WacFgToZTTBV6gns7Gvt7aWEXy4r7ZeD4BHNZS79ymUgog4YHzbKA2CFMAJsiKdGXfrcjqV",
  "key8": "5RKamYUTu3T8epjgV48VAUEDhtkXZfCJDPnHpvjQweqWPo81jVpBTedjLuDgDRzbPQHTqEy2TM3ooD7AzHXcHYkt",
  "key9": "4QCPeCVxxfLYnq5ARGFGEC9385XPdL9dH8vMr5DHzeS7RRUaKfShzJ1xRqXBpUJ6XrdU6hNmMCNsVLXU3fKgqTzZ",
  "key10": "3x2ViPe1GVLexZzSFrsnXk5t9qYGPpu6PApb5tDjE8WWLbGUuhXqbGuxoaFxbaAwpqcQuDxBu7LwMMxm7Ko2BEqf",
  "key11": "3jshYZxyHbqJ2EqUAnqZ6d8mfEnZb9LtZDv7YnaJuGBpQT77SoY5Wu8xVRQpszzjy1C6cbQyFAWWF4YXX95ugvKF",
  "key12": "ngbB2YBnuDyMdnapVb89QiCftseeGtr3hens962p1z4BmzrtHnTWFCCNGawdmfWU6v8qwTGvmLbQefQJaeErXop",
  "key13": "3cTi9bxjXtRXt6ww5SxKiMCZ9HcpXeppdCEjbbP4BWCyWcjewGVjrPk5TThNRBMYZzQDnJ1jSvLVsPvbeMdqxnXx",
  "key14": "4AFCFeuN7JCDeG67bFUcaSYktroBBQF87HWciPYBprmco3imqhhNL8hnceQy6PTikqGkqqXq2hNcwpyYGiN5rK5",
  "key15": "2ZABUfU2XBdBd3MAY9YN1zpTDxwRF47uDnR4L98ATun1WxAUxLJFDYMCukXpffQn1sCBYcHuwNFhkUZTGdCxDR3W",
  "key16": "4aDJZt37wtXV28627fVdZLj3fG6FZKeCGkD5dGEXDxQcBLRjwbHp5xMLBbZSryunksqC5svSz5CrxpSBoyVzmL1S",
  "key17": "5wbje24L1fkoB8HCHKwpn6ugms2rTQurYC2LgpFViPXu7cSw2xNzWB9DfLTs8gArpKRB7nrD8jsVRxc1xCbZtPqg",
  "key18": "3nA8av13DZ351R8SLmvJwmkpqFX2SPYtYm98e86UDobmgZ2Gthm8G3pvX1mEffvjDW2mkHNd4cSW8rtpRpTKTC2G",
  "key19": "4vK3jWGM7aHmr7zmgmEcaTbnxkMRKZGfFBcz4sS6Ugw1wgrH5mLwcLL7uqvXcaGnoTXT5wzjttMjhPeqGgTQjyhR",
  "key20": "2bDSJERE635EJM2wwV51kRNeaUx5QDSd6QKs8J5MZEZdhqdWjLaaV4cvW7brZs36JRf9KLZLqUBfccqR6WDLLDBx",
  "key21": "4SqHwZWfMrKSdpLJn4KzpeHUrwU67FAawH23eQgiDnEVfqnaW9BMokmBvUYD5C5QiEZiMShEhFitP92AW57SScsG",
  "key22": "259kEGoVjKeGtfjyxSVA7saJGiTEJ1vsUqqbZLrkbbo1QkU8bqGzixWVjBXsJma2e48aVGRqVxjRQKDySrSunSYe",
  "key23": "4SXstqhmEoPy21cedW2AeP99DzxXomQkak1Qt2xzUTUnrinGrNqa51iJpuomcWSpitDbaQ3Hq9m3TdspQreorPM3",
  "key24": "44q9dMvwahMP6dfRKJt23hLyoS3tGKCYjwEm7J2UZ92d2UMHcPuoQawsupXGT4Kgd42CfM4bRxT3LEnswdwxE4y4",
  "key25": "npWRFLCbnrDp6a1wn4RWdLQxvgAZ6JJcezypSmFJgZiEAZgc6EdGdY6tjixo2DfTwnkMgizSsT5Gp5dq2J1UyWX",
  "key26": "2sm2gThuev18d5h1ZkVmda5FqXXxy33a78gjA1rfGiRUcRpjn8QizWY2c2GsQYdMHnqbjdLkvdia6y7Zk4FwBDzF",
  "key27": "3Nxr4RzJEzvbrDbb4a6HN7FjNhPjyn7JbYugJUrRiUk3Gn6fzssG1GPYDPrYFk3FFtVhTMBRVbxfTtuNK1G4GDG5",
  "key28": "4od15sYVzM37UpbL51iFbukoHJH5Hu1DPEpJKLWR9bK4nHQSFcsoNhNef5ewSBN9HsbiRxGkSBNcipfnJYYBwtHz",
  "key29": "2ELHArDSWY1FTBMYFguA8dU3cKK7Xh5UMqdDSPgfbe6LnaRAwRtBacV9yyFRcAjewcvoKzWZdqhEwfDGhmtsyBMM",
  "key30": "422BdT7JtpoY9KDbHnm85y1AVJMFLyjW5LNAZzmsAN98d73pNYA7CsPqW5s7HbJViBfZ2FMvPSp7FWf5RL2qYXMe",
  "key31": "5Vzxq7HPLLqQiXWYbwzXrk4L4SZQzTZgz4BB3XiVTviDCFRDUCqZaPwN6YxLCjKLLyi93G6Ne3AxaKUhTByWvbiT",
  "key32": "1WkpYjoigyUQda8azCPUTe5Lk3M3w3B7sD6BuYEFfGXEsrVC13UGFviWSFdZR1jf3LSpcDkfo6rFTAX11dQhKmf",
  "key33": "2abf5Hcdp1SyuJnQaXjRQu62jBUaq7EtmKM68zbdKuCpuFJEHciRQf2NeCHVJLaqhpa3DKq4SHi5q2kgi522Gcka",
  "key34": "3WCWPp4hirSrbXQfTGAFFXVsbFFgkJ1pmtuXXFaj8rtDiXEfnBfAzADyTf8LK9ReDptB4HGh1GK3fCLRxPNUecQR",
  "key35": "2QuChXCvrAVqX7DnRzg6qqz5Kp3SrRorVquAT9PtDsxcmqTv6sNphykCzQ35ZEZTpWsKnPuxrqorpSpDsNJMPwcU",
  "key36": "67MXjsDKTDpRVJorJzUiJfxTWVjiNEK4ACksKXKtGesbAsHJVsbX7bKXjVKkSxgV5rTXnkGSCNxYr3QaC4hM5DzH",
  "key37": "4vYoHdnN1JJ7xUEgBSXkMyGnPtf8vyPDVwYmhB3gRQHebxocafNc4jWkmeLPRFZMmJbvLNCFE8iwaWnxiX5vd78F",
  "key38": "4TsexdSWvGfrziPdVYTta8j9GmtsJCm9Z9BAvs6D55T1QuqjevMLQEqKu9E7HrXA859dLHLncnJz64grsyZdyE1r",
  "key39": "62Us4QLrx8WdRztcrB2twSmHCNf18Gx1Lr61xyDCsHGeNmQRvT864R35L6vEqrfzNUpW15r4vi6w47iDweXMmajr",
  "key40": "2ESaegVAcRjmXSpubFZx5rjuLEKgoMnbnLEGt5F4HSgA9X36XpYJ9eBKnTjHq91B8cWTwwNSrDhvAKnYudgV1sBR",
  "key41": "5x3AJqCNEJNxD44qkam3b1jaZiFhrdZsJkmEtkzwH1FERXgpNNi1jWrm1y5UtGki4AXGsYCdraHoSFjDx7TQreYC"
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
