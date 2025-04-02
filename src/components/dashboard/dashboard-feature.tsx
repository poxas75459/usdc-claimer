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
    "5P8g26xLjAxDcjnz4kPqBhxK9JYYLopUbs9EUQqW12XNx3DFFMweyVjE3gNbFuScSWZCweZ5FwzDCrB5vGzkUonp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cZ8tPpw26ASvtNHwWk8Zf1tmgPaCRcBy8uRJzcAFGPS3gqE7tcMFHYvbr5UicLyjpo5BsaKxUQD4sgCDM4UZFGS",
  "key1": "2UGvxpt5zeHEMGFC19XqYbhFwDPPJnL3hFxzRXKgCDGTejegsvn3KKuto7H8KVK86rbc2dad3NVxH1PFHP8i3ukQ",
  "key2": "5J8iwGXiERxNfizhm2k8x8AJ27porxxMzq4WvXWpXBUMu1xYAYVfLscbDsTQ9cxe8WETtL1XeWh7xGWnp16gutYM",
  "key3": "4oWg9Yj6yMTk9xUL6KjjcEaBVMWBqBohCpcyLSPUBfZ1XDFGZJT1wcScU7cLqeH1JjC7nNCHyEKcYDRmAWwM6df2",
  "key4": "2qXbgmE8PdKQsEModuFtDx3KyZcYCR5EQa329CJXgPV2AMyiyGjoJdzx4GZGXCkWZHY542XmSAC4fJtVswkyaCp7",
  "key5": "66MN7ooxnuouFQoExEoCHzw9ZqM2j3N3MKqxsQqCcE5Btj1SHg6mN3R6XB77sTWuqYbDAtnhCQUA1ueMb2B4bfmJ",
  "key6": "U1vf1mscys23kfXEVXRy3StCnRfa2Zy21J2wX4s1o7fwJ3hr4Gq9KAWXqyWVqytfBsTpNM2AWmdG7cpdyqk1Wqs",
  "key7": "5NQgNUkUqs1swTryPpFtQEp9um3t8u1WuHPXyqmdwTCHLe7vQK69KHTWbvv3FhRsk7M5xYPPozA5sXGvgi7L8Jhb",
  "key8": "3WMu4JWM65WBjB88b6CqG2iFbhScsANp1eC7mXjcqPghs2944GBuHRGpBEuBQySv3mZKxZHoLaZ8KpZ7vbpy7Wun",
  "key9": "tAD1vWPvV1S6xtabpq8SyRQ89vqkLkUMdmFqrSfHZ9AJFtybthHWHbhgzWMt7GQDqTwxKnG6gpoUww6jTZgPfZi",
  "key10": "9668hBGg8xGSjwB9Lf6xmBmPAq2LkW1f4WcAV2112Segtn8wY9VDexP7cryz4Zch9rQYT7U5ENA7XV96Z41KvxF",
  "key11": "2Tj5RwbR8hNre6gav6U1Anqs9XfG5GH99pZWGeUfXCdP1WQ1kSc4TwqBo8wn8LQYP4ytgbSbrk81EqkvXkv6Yt5b",
  "key12": "2FThXXW5HU621eFEeYXr1jWtCTB5JZMdb1bqhRYHmgCfe41kvx2in49qtvHA2GcMV7Qv51QmPgUi6PVyAHcZZTuc",
  "key13": "4UasxzFGokgaicoK1E7bcC1d7dShcHPocouCuuLMEfNKW8ukvLFGWDp4QBRHUDjbhJhmh428sJ3vGDAfC6JkuNMY",
  "key14": "V9F2yg4HeLDcP56Jw4soA3jSuifvCGBWL3FwZTRjmppKiye8M8kL3hR2fP7BjdAM2jQGLin9LDU1GCoZb7utyBr",
  "key15": "4zrZV2GcjuVAGwcd5pDfv2FuzzUbyfHoeuCnHxEG4BGsj6pnwb8L5CcbFZJBQFUxmYpFBHfmf9JY8KWDJKSVrm1g",
  "key16": "yStDsJRjDUk5PJNzfZm6sJAV4Ju52SShZmGwEmq21mk124yioQwQebeBGotH4iEG8tZVdseA6jzATTYmSTX7JsQ",
  "key17": "4N9mnXV5saN1CHSKwAQaVnHhCZti4JBpeDbyuJM3jLnBoviXbKZSztDnhyxcYQ59LBGfSfC4m5quGFeG2e8zbT8S",
  "key18": "25VXvBmz6nBP5Ef4LzpNWVuRbdt1pG3RgP3cB2USpPbnsQBqBZpA9mW53FYrP2ogqJL1EcUu3LBo8K46u9vpSMY2",
  "key19": "4dUAfaGWM8Ts3jmgLoXw3wneDZYbf9Y2mkivc32EGwNEnYw3NVjf1zLrir9KBrHDbCAK1cfhq7srKUwWbArNrSWj",
  "key20": "3qi48xNviGDZEksYGrze4t2aDZmo1S3dMCKqKQqhNkUsmyMPsJiJSQS4Xtbe9gpE89PE2cgDLKBqCJqfUTcXDAGE",
  "key21": "SrdsKSNGyZ8yRCbTQKJKjcYSzUDBY6ZaNTYThVNRCpRupQoaPEG2NzVCxWBA77aDxkHd5KsS41FqwS7MradMopr",
  "key22": "59DoiQbdinWwMRZtzRyp9RQrQHVtsRSSwMRAEZBmt3nsZ4Rtac8cUSVedPHFAn5LhyTX1qt981eTFvtLVLnAENWr",
  "key23": "5Qx1tL53rgd669hqmmynorwfyjP3W6yaTDxqH9XeZzGrAkBhHiiTCjWLwTsBJMzvEccrjvu8LSax2wiBWuBVX8Ea",
  "key24": "2xijSGVNJPKGZam4DCznhaxXmoiPeh2GNLxLuHSHYAL3as4GSKXfUusvYnxbtfHpBmnXzUkX7nDg5THeXfrerZjt",
  "key25": "79vQahFEfDEn2n1e3RKw1AurQUw87RgrmWFU5xvf7ZMVNX8zEKAfccY6xMn95CojhtmdPeBnUqExb1YdekADAD2",
  "key26": "42o7Nt7PfcQ9x7CKRWjF23SiKJjSm6X9WWDfXjQKvJYCWn9y99MTzCGDZEAwRx3R2NdHUdn3W3GGoomfKVuWTuQP",
  "key27": "52TwGWV1YQiaV3y8XAgvprJxGfBg8zd8ZhCwtksF9dBR7YZYFbr6wHj4tJP1Muic2MN5GLQgyGJEaXdt5HH5zRiw",
  "key28": "5AgeuPmYQvRYM7RCjTpoia8gsGtGsiQdJ7RTfKsdepcUAEtEAHCZdVGtU1bbBNyeLxoYvqmy9euNb2Kx7T3F3Qoa"
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
