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
    "52Yg13YYsa9ehfKs9TpErnzxtyHVaJJewwX3QTHfsC4MhB7N3CBZon91oNdC7UoVvkSFbGtPwJGomr5xa1mPkjWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f8Yb1xRuB4KgMFN7vkDZwHEjwqwhERJcQhjSnr36W4zUoYj2RCxaYdPyXhNp7pCAcAHzTBniKT5V1PTsuzZcEEd",
  "key1": "6V5ZKb7PguGRV1BiYSBxFq46pgotZpBvT85tDu6MyvjJrbQr91QhMULMtdbtQJN521usi4GvxrJX8DZcNL3uUr6",
  "key2": "5FBZpK6JdSCAmWSfQDg6FWYatCW8reEBCVbRyEmCyo6aJW3KyRpX61dRvQD71srvvN4DMW28twCAyVunvvwTPsm2",
  "key3": "56jSPZJSDXZMXm4Sq94j4TPNpaHjyspmWMkzN9dTCFscg5Lb7dDnvqc8ZGVDdRjxuwj6apDyxRofVdyK5pAFPQgZ",
  "key4": "WMiJ6smLrFNfRwSctEdZCyWv6ZKymrW7VRtC1JTY1NckMfydwnitcScY9y3hw2paJEkntffJyVprc28mQxPbHqW",
  "key5": "4duCNXWTVXdPBaLC45BiPxrwZNoddaLqxDJTHFRJ1zGJYfCZb8HXxR5twAGreWbJLx23Cpv1GJyBzimiRUPk1kGq",
  "key6": "52ZWF7spARUcdXqY9ywyuWLWQ63qnHkjwJquiu24FCKdzdLhyRioQpNDDqCA3Q1qrzkDG9QL4UKmzrhxVZgzgnQ",
  "key7": "2ESaDarMSCbbRxusf5ScbmVRkfkRFih1oZUzj5yCx7LtXjD6ViRdM7ne3iqDQfNWXGX5jkRfLaUZ69MYiXJjs4GZ",
  "key8": "41x7LSEwNSNkoyk3rUokD8pgw9q4DsnFZCw9mekJNu1VVa7kP59sAMpYuUoavLtotSHwh4EW8misdqBrUwrV5PrH",
  "key9": "5GnMVdFP2C8v5GZ9rdFaszHRc74WvWALrH9n4qVeiZUQLRNriVBUPxNAuJJNLyWoyC5giQhqJpswuaSzwRaf6w6R",
  "key10": "52wqXMHzaFYu8EiGkzYfA9o5mVBVzgJNAvsgyHrNf1dK2poK21fvc5MmjPSmBRok6SBGsPg3K7oDoQhGfxNoaJcY",
  "key11": "RGEYjE7mUTP1RdEGVfrjjUrgPUJvu4EBLkgksVw6nQLx1XSJzvV6GtufQwX6df1khfREikcjpbp2pJrX9P5Jmm7",
  "key12": "4xpbptP9XodukK4A5c4WhLav7rg1s7JV1safVbyq1ZcbWpH5B2SxFK58Z9eBT1JJCscvPuqT2Yg8RPep9D7rVY6Y",
  "key13": "tCKPYudz92CFSE956Rnaogy4mfSRC1sZFU22G1kRc2aWhmVLuK6v8GvhzNWbom1XdEon9iTFq4QubPBjw7eUq1P",
  "key14": "4Nus9MrYvDCQaHhrYQfXk4H9HMuiBeGojSMQv8zunGQqrpHD2JAupDCjsWLiaNtD8zJ4F8dq8mfmHFTXsmEVPJyH",
  "key15": "3VWJyHeeMmae2MdzU1noSQdv9ecHoFma7RKM3LrRezZWSxnrpcx5XXtczTxEZCbciYNLfihS3F8cE7qZBzebSakx",
  "key16": "bcvrWcTJNcxaUJzvZboKWMiDZa5fKeZoYt7NJmjjgv128XQTn1Xbt1v24t6KSvst7fC8p5CGX9kcGZgrmojbr1n",
  "key17": "4DYjF4LE3aCW9ZCjiTM75q58bXGvBC2tH5Xw1v3u5PLhKZuK8LtpbPewajSUmnQ99XXQnCjG4npSYxQuMiLZS7df",
  "key18": "2ecdZNiQmy5fdwhmouBTV2swGd8ye2tRJPZBcby43Tw6DXEu4ACLG3uPkKWkbhHPT3w7oLTPZ79VxmU1DnNWoTWX",
  "key19": "5jLWAK5k6AtDnnbFABAiDLGGQTytSRXeSaFC1PJjdoHY2AufU7ipDrNp1EAcJcHzM7J92RHk6DiaBjkXcDq8TpwV",
  "key20": "446krwTN9MU3imofP6U3sPGfXE4RnnHAcxmDmD7gsa26SxSPZScUjAjBJuNwnaPVeN99zo1bQxmPVbd6XjjabYnr",
  "key21": "4CZSGVfbmcBX3KkdUoxVzBsyxM8dhwyHZFu8KajG6MNA7FzwN4Yiqn7wHCcu3udHirkdHyKURt8Fhz4QxiWtFfTr",
  "key22": "285HxDByeudtqfCBLR26ZtJCp9B37sQhBJxZMvuxyWCsjKPDi2xP3F2ypwCcUBYyLxNTzz6qApTzZY83Zb2V8198",
  "key23": "5UUjyKBazWj3whWNJR4jaqcZHi5eZH918nJNuYaQJkeBM821EvTYWH6ezt9vRhXiG4fCVEv6CVzA9RcRHtnNtbTr",
  "key24": "5RFr4MogprUsXjkqUDxYE7UdPyhMWTLAPDi29ZBFbyQHjSuX46qT4yFuXB7C1Kp7E8v8Md4KkWZAHx9G6eBhKr46",
  "key25": "4eMzTgEZxDr2KkmFXRey5K9SWeyVYzM3zcqBan3E7uiPmWUFzfDnv7MyP8RZhZSeXN9XrW5GARr68BV5urVYPV4j",
  "key26": "3bxesNMwdfx8hqa2CwmgviqxGA3VPf9U8xgLPoy9C8QHsj1SmpVBjH8V8kZvihCYYxCqNk1XwRmkF8e439yY6erB",
  "key27": "NQ5A342PXwi5W6jkibGHdawdrJhza4MJu7gSyC6g4zMMUdEByUWmQx94QnscbohXt9vfsyPHyXKRuMoLmpofHn8",
  "key28": "2EVSRkPSvmtGWmq4mu8WopEDHHdow5kCKyJdK4zPiZ1aNZQaazGQUhJMYEVAncQTSXabni6Lqf3yrm4kRoWSyZba",
  "key29": "4ciH4zHdiqWSur94QW5siTUNbkR2Q2BuE6BSiYJ5GuWynTCqGD86upFgWn3PKU7gkf6LXpSL1kybUry1yvRgDa6a"
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
