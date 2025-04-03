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
    "46QtQpbLZjKgjkz74mfk9TXJ47yP6Dy4om59ZUCV5BDUMMy2vJFyHG1WTLasKPoFCTzJEzaZMATtCJuTp3MRjV5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vN3Jv5yykwnTDco2r5ZTqWt16c6YTZrF1ZaNdP94p9GpaJ7fpm3Ezr8pUYieNPFcwzDVssG9YwtMzRYuS5CtTiv",
  "key1": "4BpkhNRBVSsZ1r9YmcZUg9yrzsz6mJoQ1Ub5jZNBXXrBRBRKdwpiMHtvt5xfTtTLKv5msXQorsXw3EgdCmuMEcZx",
  "key2": "3SmZinnw8bfuZpuQtg7XgPruN84oqtoDc4hofoKvGQAB8N4y4e6mGQ2v6VyS9dk2MgAMbibGTj3zHeBDELX6Ynt1",
  "key3": "4BucXaYEFXrPbKevRkWBEnSNGH1G9doapbJWepfB4njY8CYhZdNB1pBZ25dZQMs5SPEaMGB4rwZHW26uJPvVDKQP",
  "key4": "4vkMYxjuHFCXSYeSdBdQgw8tPYJuUimfeiukzeQY9n6PQ4DGga8v9bPd7JC1FjQ9sJKmQpWnkwHsaoszrD9gv7Q4",
  "key5": "5GdJSXdfPBs6KVc17fsYcfEuQNyqRd31nhTChVtQFXD8NoR3iDnzKNS8qhKu12PSVcPz8iwovhfCKLabgXd1XphB",
  "key6": "2LpGNa66ynSwwSZ9BMHFsFDLeXpPiKZePCTPLVPECLbXzHEn57rBEPGfGcMRcDZxcDWUPLqRiHA5oMJWZwHgKGW2",
  "key7": "5NJW8F1e7Ko11C1Cd6qdty7nic9ZsNTdYegz58Z3EyYYRaCYbh9M2NLWdka7Zy9UoiswfgrzZKqnKQZo6tfUuUCf",
  "key8": "77vWwFRdipeeENYQrnHkMfbhPbGhBvJRnmT5naniTdwXPvbMKCDKfXP7TKJV9B1vWm97wrC5RdX6j1ftQLEtpUr",
  "key9": "4MQQzmswFwVYvhjVHBjq6WcuAVfeH99WwygUL5oGcZMRNGZBuf6FNyxipLWjCTJ9YLX5GiupSzEcj8u49eTaLXfw",
  "key10": "3xjeAVaryMi7auZrWkpa2tncPRustTq7sASFRHvz9Yc1cwdY1Rf9UQdVxQUZfuq8XLRvg7Yp4bJVWMS5UcVBVVei",
  "key11": "5mxmDJ8j2wv5mBu11Zbidg11A4grJQNbdZQNEQvm2kmTmM81nobbABYTcHEWXwthkSZmidNzjnFnf5afxpPwpwyT",
  "key12": "2NL8YnvgyL9C1bxfHYRbLg5BABQjNYygDuB9fnf7kFtHPk7RoNm3YjsTYzmAyskq5sXo1W3Vfbx6nimKedEvyCyv",
  "key13": "58t2BKCZzgiu5KMbyM24ujXopEDrfeetSN8b9Xmc7oVCYs3QRrsMo3XcUkfhRezPh21bpsoYQwDvWJsbUvZnCjgg",
  "key14": "5B3cWisSuhGASnxpDArFpSvdT4y4pQWAkqnrzQp5H4kVxgSX8JsbJne7VKt8ia9MoGQGDB4JQFVPgdfBtBV6mSpt",
  "key15": "3QrkYYBwh5fzL4fwjKXkXTi8fc85wYMApUBmcsLYMcJDeiQu3eXbNJYpzsj8u5dDXgf137q5rozoYYYqCBfY9chd",
  "key16": "3JPxpquDGXjoY8yDavALWYrR1V7z9rJi2jH521h7uwpsNij1sFyNj7yeiMg9JFi96r2nrFrubKYgvffw9bUxJ1Kx",
  "key17": "2oAMprF6YbCb7CqMuMaeQZzXGDyQm5nR8mR5vKaAQt6Rh1gv9gQWYih3FvRGyNh5KvnpbwKN1sgPqZXLyTeMFfan",
  "key18": "4sZKhCX61sde4V4V2uejkFtxQ3e9JwX5gfGBMAKPbc9PB3L7BMfcoXCLP98mZPUohN3p2R1byj3eaR9wYcmBP7hT",
  "key19": "NhmDqrZ9x4G5HrFTJNMQxYVsNkierUq9xv6XoTuWDSpdqqe2zqrWH2X31UadZYJ2sc9AAC1qr7yNRatTNrZH1qs",
  "key20": "5uCNQBTrscMeWY2fEJJQDxkasMLwX8WGLobUJyUu7XyW4KbFMUkaW4D6dv29adt7fPQTpjzrbhZSf3K26jvxs5d8",
  "key21": "61mnjKBBrVKEnXbUpu2ggDRGvsvekZ7QxMB3g3Ud8WRDPwQKxQrRmZjLWRstMjbxRqWS8ohf7iVcY828FLPdyqwd",
  "key22": "5R1PVQ6KQ7cFibJXSBmwW66LzKDsSZMQeMvcW6YWuXxxurxJtrsTbzbnKk9rn7vQUZ8XMoRXxQ27op5XEkoJEdD",
  "key23": "2q2XouUyQPXPoFKWKFKQGuU36QXG1THd7ZNcPHFHYnppcMhRg1MkPGq8Mi7CiNfrxNXHs3GrFopEwXD2QXSM6Y9V",
  "key24": "38fM91PA29N2tpPYZnRTNyvtgX4bES6yRSUKaH9JSJ1uxELuNKMBRdaYLLasRaTrFXvWx981EY28DDFzYDEer4qj",
  "key25": "5RvACNR9CN6Skr73Q76mXF4kEJe2eBefXGUVYF4Efj4kDa93BWQJmTdbVprgQ5WkMNA168tUTGxefnjEbuajpNsy",
  "key26": "5hPt2fogJdX7QuLJ5gUEVRB8i27AQJHWQbzM9qMgvKqCRKAg1R97DUa39Xoqqoa8LxjjF3UCLfPDMzjzvAPckDVy",
  "key27": "657V6vbWoh7sToDnRLbbg9y4gPCNnXnReTeNMLsVFy2noJG4twr2a4tUUJc1LG4JunBv3xJU18Z24XstC8bUpD87",
  "key28": "4MbDrfaGKNVqnkKVMRyrqwGcAfN8gviYzfBx2PzXMUNzuGSRL7PvXQY6XPPCqyjdWwKkbtvoW6xLTFj5mHjghwSU"
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
