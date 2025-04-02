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
    "3EtJ5AqCh5EaWpuNbyW5qCkuzgTmr9MajCAmw3jsaE54u6TbteD4mCCoLKPunQhjcecn2AHRYsih5x2nV9ftyH3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zSGDa2rKk1dYmYcff2SLmbXsiVSgngBrfVxTDBuLCZQZerVGjrYguDmzkmiutqkFBDPvrtmp9G86NLQxBkkKknQ",
  "key1": "QpfvjurC3uHoK5wU7pALw4Y4Wp1J3igqKee82bkmw69oehxYRUJAwTH7LF4nsXTdeHtyzoGTfoGEkBYYgM6SE6D",
  "key2": "26cCQUVvHjZrMLEeTKNantdHmE3YBvFvd2BbzvARUZrcscnFAkp6EAmv9G9zyVy8KNoky3NUfUFRhYbZLo349wnn",
  "key3": "3dVxGtR7QWvM39BxZRdeDcA7Xs4pbeMRFWpMxaj8PwgHX7nHWXQet3vahi718E28JZ5Y8cBNuP5sSpAtbRzEnP7k",
  "key4": "3npuZnHk1aZ6Es84xrs2W1KYpaKDNraaD3RgRjCTejS5RD3cKDGMYSz5QGQwZEXAX4FiMjdQnDw4TxfLEhAbEhW9",
  "key5": "54PKcj97i72rdsHs5q3m4uZCkWByDmcFC2vdFUcDtWCzYFwBdP2waDrPx8wf7r5TA4ChHVz9jPMfPqSR9JrU7RBj",
  "key6": "3SeFpFUfuRUAGexhQTXgj9v5wC4PjWB2R7jTKfrViqoksx2AnWS25JaUpSG5hiQs6uBeTM2Cu4PUVarjXGDHkv9",
  "key7": "3wHh458hoXj2CgxdaF6ujPaAGJKhfut9Tin1z9uhSQHhXLdqRumLEjZZZqz9xvFTtrPCwJC24pJB6hWvVDJVrsey",
  "key8": "4LXgd2jP5sfoZQhQGk2oAACR7bSvErpqqDQFR8ULWdxFWResGCzSUWG9BmRL5RHGDLRzNZjYsLtaWMeLfMZwAcyQ",
  "key9": "21iGjLE6R2g7z5wjQEqLxvcgkp7aagT1UuQ9TxRhaTrko5xc3YTSkvPztC39fMePDF4ArCiKRExi8mtm7xgafL7Q",
  "key10": "2y27kVhrq18c5GqnfAh6GUA8cv9ZUNjxMhNUzx9NvU7oN9VGUGvbUY974y8Ns5S6cSTc1JyAu3DgoMdDukpS7L1A",
  "key11": "2J5iv9LHx9zyk2Lgb7Hq4p5KcMXV5D9oT5d3VMDHAqPJ7irex1LeW4a34LmPDrw1tm44sWKKAw5Db2XijtnQeyd8",
  "key12": "2wsVzDCpTaPYY6YagetEwWtQokeAxzK5QqDUgUupgKpjBRAzaLrYyUW8QEWtnrjcMCZyzXrVRGQhESp89khvUjKc",
  "key13": "4nv6VNphGkUKqwyNKZLNzCAtDkMArJSegEZPuVLohsUTG1G2NTuSDhdh8zKvdGGH9YRNjZk2t5jR8yj3nRv814GS",
  "key14": "26zvySurevu6j3UDcL3qTN2FDWn9niYYHYXMHSyyMFmzpRY9sN29YJNthyTjGVbaypZSFsZHneHx28U9Rr6Z2GTE",
  "key15": "cyzTKk8h51oNjvp3cke8Pimahhi579uqAPKbQJgmE99pYEGM8QsNVf8cBEbUsEgscfrcQ1WJkV9DTkxWB6YAzh4",
  "key16": "KvsGV5Par35nsJdH7iFx49xVCgjKn2FdSAgTQVSmAe96hEPxLB9qPmNUYdiPSSXtN4LBH7D4i267dJMYpk2AdoX",
  "key17": "36dLtWTVSsYRqUdx8cNdxb7Z3GyyB5Vpafra8nVqd787T8E7iWFmBuG3ZXnjnPvcWasVXRjPRs7BoTzVULVS7SDa",
  "key18": "39CJxkCdbSsd2GkLyimkAKxco6mwVt9RAwpH9onCQ3yUjy34bVxsRbJ2iutjG7HdeZz6pnS2SaZVHsnjXFUbRQQ3",
  "key19": "3E2JUcD1XrMixHVrGVZwwWDtxxeDffjp5itrJ67Z91bC58RTHNtjK1xwdF7oAB4aFiELP9NDwVpB8GryeP3oR9pP",
  "key20": "3vn3hzPCKRwuWV1uSoVTYW3FvtoaHWLqxc7CGJn9q9YiTcct6fPnRNCLAinVWj4fb1e5VHgdrMGn2rHJWTuHDdHS",
  "key21": "3fveokTxtqfPPKfRFMCgPBzR2orkxxuMwsLvZMNQeBEJq3regVEvBVDQyuEbaFAhivFQsGwhEv3MXXbhkureVtZD",
  "key22": "4bQtY9odtLdR4Z8fBrrrjEhdycnmFsEqDAmwGy1xZZMUr3VwN6EU6RbCymMiJuo5Q8FFNoUgngjoY96mHy6Y3KLu",
  "key23": "7KMHT1YiwHSuMrcd6GV4esWB5vc9itWRtwRPKuuCZnCzeJuE98MqdLVzmtMDFAPo9aHwT2xqs7TNdFqb9CdLPAJ",
  "key24": "3f9gG8TnJJmFba56P3sM5iRWrc6RRBnFN3E3MpBRtLf9MJrb5CxJdVqMESCaqtQYz7kJfBcvnMoB5HV8eS3kHJZ8"
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
