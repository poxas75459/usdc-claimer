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
    "4T8cq9PURPYtCYm7MxcnEm7iUYibNyfMN3meTbvf3TemEjSUkHFnjJngjjc9gDyWz55wJMEQcjAEw2R7S767Kxeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SqCxcvqwwdJnSNSo1YJJfT7dTP9pCJjMrEi1WFNDR4W1s4mhFZEHjQ3yhRpseUofNzrAuiMuUTjk4f5v9MWfBNv",
  "key1": "2JLj8Qp1JaSBk4Y1SJg7GdJu9FgDfwATyFxkzpUie1PaiQP7dVxRqDCW8jJyUNqqD3if1U26U9G98YzAxnKQKCsd",
  "key2": "2YWsqKrJ6TjoJJav8sCCMP76Layo8BTzU3Ug7AiQA6nnDRzbvjPf9U9ARrwjYbcZmYniE2Rsoze4hxHLxQCjwg2f",
  "key3": "4YMtKT7JcdBk8kscDtWdjhEQUFTuGX6MGGapwezJgNLyYySKSwu25gCj2k92hyLC5SkPhoKweUBVwDi6HehoFhWB",
  "key4": "2Pi1zz36aDLGxMAFUFwW1yLVUHU1vF1mH2Tw1EmFnCUjEd5Z5z6nJM8HpLXTAVALk8SwHHvMhhQHXkyCovTrsRTM",
  "key5": "xywni8vrQNpaqh5GmnmnQQa5gNLkygD5BfBA1UQKYVdNBpfmAAtbPao14oAgGCVBNLfXN3nVbUZtgZHQmiVP5N5",
  "key6": "22Lu3m4w9qzsqRC7sjEQqQSX5Za7mqW7XrXXWT1zfM6MCRQi6Xout1YdmETGbStvkPf7L3igMVUeKgco3T757XY8",
  "key7": "2xGQBntbqASnBqt2hEq7BgjaCDJhcrKGk8GMqGxduAXHRbx6XcSXsp4NjdUrbJd9vgyCZV7gX36nQ3qNnnKx98tX",
  "key8": "25zWwxNdYCQyFEUTzssJgAWZb1qhVsVQJt7oebVzeyniCBXCf1fUzV19zNy2S56yePcwqrUF95DtovEBqvwZ1MmG",
  "key9": "3i5YuudfdNr6rer6nswwz5Xy3XjWYErtELpdF4sxSnw6mBNCAnmwe6myYLWFJ8JWLLdGjFbuCwF7Rc79wS5UNZgu",
  "key10": "3ZnXLhBzyNeANKHPR4Xa1RCBQRDS9dJMVW7N8NJF76Coj9NHaoopsPjdJa7u5rxnHX6cfUNGsW6RBvJygxy7V6ox",
  "key11": "21swNRrxkobD4QfMcuYKitiq6bTb2w53fJQ8Ds4csorf73QYGPP7FJHwRRx1WJrmcLtR8uYk7F24EDMPJN5jmapf",
  "key12": "3ZMYho48rU7mbtf7cgcHFB2kivzK4VcmPF6Uh1YoAy8PUkhcm4NFQYsKKC3DaTnRdL59kdBNvmFdrczNfXDiP48u",
  "key13": "3c7K7EemxDqwfziYYUUsGJ7fN3PZDgw71oaYs9KCVdxwas771L1LHso2F1TXuGHMnDToN7UXHTuMck2zZ6pnJZFf",
  "key14": "3jYpUXyxMEaGpfvVbuY66Zzs1NYAMmq99BGz4sFTxmBfQnJdoFtA7N6JsedvEcJ8noA1y8W1iAj44rqgRKXnmdvX",
  "key15": "41VpSojRNnqhPRk21dfRdi4YfpVTieLF3TgkWrX2RpY7iqVXRSUMTT2kAERZEQPDoy9Tb7ruX6ny7kG7Kxsh7csD",
  "key16": "Tvx6gScCChVEqX7jivD2hwze8C1U8JFWnk1aZhZeM5oAqeHLy6PSSkWFfuEYDhpkjhKpeNp4ueMu7vbNYUu8Rac",
  "key17": "Kiy3LHQx5PFeLkLBFbVGNdbCgRCrtL9FmgPH4HdXt3qCN25JFPnkecynXcovBzTxQtXQVPCW1Dpjx76x1ztMCst",
  "key18": "3GngT6f7AJduKR3v2zDqN1S4tJtWKRkbN5sNd9HbQTctWyi1w3W1isp6KrBrhNZaC7nucSxGDpS2bZ9DJdHQrZiC",
  "key19": "3ZuJCestr5BDGnWg7DZfrhM6t9roLfFsmqPAQif32xwc4ALyUxqM8g1iGAdpCQMnFSPfd5uK47m9u6CSQVx9w53D",
  "key20": "5ZX57bUFetrv9VErzTmjnjduYjFN8okLqUgtzc5Wdb5kB2aH82j7CAd7XLtZuos4iUwKAK24awSDXjnHnNFCqm99",
  "key21": "2K3pxrfYCLWNenkzbCfZheZ6rSPtKCpAJDHGJumtf4rrQNPrw8pi6syFHX6aCa2fWNtgwprzLzamx4SZ9JKB6hKm",
  "key22": "5EysXkDgcmR2Fbqheyh5fiwWbozFWwgkUUcQu48RA714TBWCFFEYXSAEY8irLHSXUDGKnur8Xp2LfJEHtFcLdDuL",
  "key23": "ed9m6W3uMrwbmddiVLtM7wwvPPxw6nThaKsiRweU7Wa2Grjo6UhseBoEC3rezFkzGEbKeGH1FhKpaedcVMy19Wv",
  "key24": "3xCiZgfX1EArrRSvT4M8A6gbUdetNpKFHhdruZGkxWxj9stahWcBjksh9nRxRigA2bzwVGj4nA4QcNStpoyrCAHg",
  "key25": "5z33wyrgk85M8rPSyvZGspTVXhaooRBCE62xtpMkhHNdvzuSsE5mfc359gbznZWN6GMC37ZEPojvxhZUnmisqkAa",
  "key26": "5LfstcHZYdjBfdxb2wh1maZPcGZuJDN5wFMHjT1s2dw3dbWYWnJFedHqRs8MPwkvddqooxmyvzrQFZHCDSMRqfmj",
  "key27": "5evGExu6AnsrvPCZGphN1B7FwYjnHXPKLzfQpNMoDDdMigB37b6ie8gwS5UDgY7Z3nGhNgC9iM1ny1vB94AnA946",
  "key28": "3GdeZQgQjUod2G9ntvVpqhmBXoXzkqRcxmYo9ikq9K5NqrE3dR8Y4FxYyG7yRQW6MYScaRzWBHaBWtW3JVGumNLh",
  "key29": "4hw7DKAXL9SEQ4h8xq668DjAv16NBD9g3c3P2bd1r9oZidj2tNrWhtM9NBPLEeNrtHo3byPkGUSLDqWs6yMqzY4u",
  "key30": "kVXVa4NzMcju9q3cEeytpX9qbYKDyJoRFTPq9XPcqCsNKXWPbyWMhpdY58atB5ynhZkDA9TjeaaR58uwZJUH7HC",
  "key31": "3xHZPgDfGiaeGgxofxPNuFGsjFEaSKF4JCAZtDWKQ4Cc72M4mvi568bY8h3cCveeg9Lub6R6wZvCNFLurULk41nx"
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
