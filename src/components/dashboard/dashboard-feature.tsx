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
    "5L3CkBG5kA1isFQiFtDJMAe4rtLpY96KncFv3YZ9rAhdhSJgBiu6b3L2fm877iruinVrFXgaeTt7QNmFUeisccEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d5pmWGv5Qav3TkkoMbNa2drmSRfjynE55xt3cVgxtEV43vnpFNEBFqBJpyWhqhNncXYg4ECvoFnd3VmK5z7WXhu",
  "key1": "2icQtNZ9fsG7hv1tcivxTZXVeMVopHKz3rzeXyYxSDBKyXGkfCcM44XCYAbJBWUF3YCZMHkNqQsrWzUTVSRdbxbN",
  "key2": "NA7XHncfXUV73jvD74Bcz31gnkJeP9PJw1TtHi12uBsnSiryfqKVktwFaZMMScv4HK39KFSXydgXRxajAeDcY2r",
  "key3": "5U4G62w2XcULnT8SLkWpeJdjFsqzVfWHBQJ1MDR8bGbY6qPUt2yEuXUG1N2AGrsz2SzMeCvcZjQmTVo9XLqjvfc8",
  "key4": "37Cp54QJckqU4oDyMN4UpMt2iXfRYscAU33FS5WeQMPqGU7YvzMHQ7ZzsEmSPu52Qv7wdHQZ4RJAKSUq6HpLZghV",
  "key5": "4cdggBQ6usutTbp1QS4qKA9GjN2hfZv8VXjaa5BLEkat8VUBca9SnD2stjeB2cFh38zZrKcgxF8zDe8BdimX7nzd",
  "key6": "4GbgSVmipVprw2WGJ4rvSME5rTNKXWsWWhoxE7hkrTBfMbLVi9izBriKFvcnsWifGnPB8maEa4AeP6KuaZvBkHS4",
  "key7": "uX8cXqCQgRwe28nHMuurW1qZJMBwD5amAnwGSukfLCU3DWhvPcofC3LNw5FYmSSwqmqhrbZLfWH5NNEwrKZQcq2",
  "key8": "5SwePeVoW8ZNQwihnQcwH7YETvidcXNEEJNsochGwhxY3EBQ3qyN5aVeStKgyxBw3Ny2rBrrtyt9iJ7yGFHxz1WM",
  "key9": "3ZWHkvNc5Jgovc3DRPj5pAGh8kUjtNJ7xdA8qbXCRxy1RwNn4TDE3Pd5fp4EgSxuAPqNG2YmX1ggTTmRAvKoyxoM",
  "key10": "3VmNL9MY7J9etjXAssxLntPfbMChniP9uFpeRfq2e69xKstHPTfSmB8Qj4VvwhhTNRqCsxdKEGa3mMXYX6Q7g1Zp",
  "key11": "2s6jg1X9BZiN5LixParJd85LKQLXEMGwcijbfQaVaDdsyQ1SirenbQKYnTrAxPnbjb4KjGz7cvoQMbF7gWuV2Vzr",
  "key12": "3zcygx5jLCvxmwccNi24kFbBgVEUp6vWa7o1AZEd8fM9ii5Q6uiNbHjkoM4XdpBKBKr51Ec3faShQFjk1DHouFtR",
  "key13": "RduQsE7KW15xkLZ8ANoUB5eyGiifu3XZUAZwvqrM7o9bxaniZHk6emaNiTQQEGTkf6Y3jz1e3LeRpMFhhXqcq2v",
  "key14": "2vYojYKG7fJd5X2r5LFSsM9ufYwzL7JYcy3NfWX7a2EX2YWcYTzW9hTgPUeVKRgU7TAZLBF44Dv1s7w2FD5FQXUQ",
  "key15": "4ZbWupjbhdteSKY59penavBuoz7mcNnhPPhhaqmpg3iV1YY6t5AKL3zPSFqoWReZRPGatSFNqGJsVBA456uUhiar",
  "key16": "5tjLrp1EAYzZuHpEUsSsBkPrs7pakx1tHK8AVHQ7DAtUgbizVNGZSKSZYBYtuNtfUbnDJJFataNusQMtkMxKuppF",
  "key17": "62JZkffizrwgqmFd82zFzXx2tj8yNyy8e735efvmNHHvnGc8imLHzoYgCbesBRwRgbSjfm21ggVUJKYk6D3Lgvc8",
  "key18": "GEXxm9JkqWfJq6di2QxfiYPNZSAiqom9cvWjhEowotKu5fgpX5yhXcM7opR5SbU8c8ujgqTJivjne7aKKjgCA4R",
  "key19": "4PekBLpZgqRTmckc7x66oYsgWxLjxxeqPnBpKvgZwyjw1ENZ6o2e5k2JDfc1XNL9epW8ufyeM11zi6FFEL1SgRLq",
  "key20": "QEqW8hfwN4ABTM9xFR3W1EinRWqvHT6vAXpwXywDwe99Rk7S2YdGBkMrMGHdsYD6Buz97FM7SQeDDyaymDcZpQH",
  "key21": "62KuA164yy2vHpTBwsLth7rzBBU7hYPAB2kaqAyyiy6bLMRdacMKLhZXXXogCUR5uiutcYgZSA55g6zLeYzARxPM",
  "key22": "j7sMYsamUSEEfLHnRnWGe7gC8zv92EtKPZwGrtqeSkYEr9MQiAdGemuBgWPKHR9zKtHHKpju7gidXHCHCyrbgn4",
  "key23": "3zYdTsYbr5uSe5e6cJSeDw27NZ4is9MgTRB2eagGNXQqHBye5djckahCpiFTqbSBfhCHnDfveCCcEKebrZtzh5Sa",
  "key24": "V4eB4vKy4EXSQ5ymMXxK2J1t3ZWPVeABvzEyHi23yyVtesm2K6S3HMU6fpaFL7Xa8zhfmoChq9uDKHV6zJEzCMo",
  "key25": "5P78K39JK8vSRsWwsMbbFBFhBGPqigPMUnCwYz2g5VBnZut7qJPrAVGbqyGVEkJ8J8MstXkMxKg7TxQ96pMzUjj4",
  "key26": "2PNgasuMoaDTdotHb4jGDpH53iG41Dagi7EYy3JJSddWRELt5BuwxRQRyu75vJqkT8Pot3avFj91u3uNpCz7skWc",
  "key27": "f4knAshH5EUADdY9R3t5pgVSHzgujMBFYMVmwESazx9GWjktp3B1ueqFVLppMbo5yMeiSeUVtQuXcULx9LDozWt",
  "key28": "3HUPjAKfCZTX8CPw8zKgWCxqFqe9gtFMCdTQ3GLojwS62bJe7n9g7YRHecBsUfvu4tW2dFk6kzXUgrBezKF2R4tE",
  "key29": "5s2zriAQNSjUTD2MWHsTjotNimCHSPeWSMhmv12a6HdZZZCD69C8bPCJniUFdTgXsNW87j15szChqxyzyHLpYnTA",
  "key30": "GcF5VqwaYpYhrGswuHZoFUzHcaTJNjvGHp8dCrpRZEbFNxr2ba9AghcciS2KinfVz8cK33tsDa3HJWwEacgFm7q",
  "key31": "5CuJnP5LFnNC5yyr9z4xDJrxrMwRCcdqKqwjywfcxYmSHUDnxAbDuYdptnohfowUiVT3fkMbJiTBM57VaqbTYyAL",
  "key32": "3GtqmUGoPiW2qoCMRWpsbeWBDSQVGQPVTq5wFohynNHB8vidvRo8BP37cboN9XHfbR5neRb2fpyvTCQA9BALpviU",
  "key33": "3w8xNPFnYQ9dRX1QLhgBUWxz3i1ps7LAMJJp5uts9yXuAaBqTN8nPq5uDW3ny8j4tEMaEGxQca9C1JTTuC5DsNTF"
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
