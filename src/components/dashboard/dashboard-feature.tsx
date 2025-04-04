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
    "5eoKuNJ6Pi3VuSo7n25LkV6GoyC2Zxk5k91asP1BYmfSE8mWoTe4XbjsdGPqdhgzATYKk2CRRW2JZsg1LU38bB8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zC1bYCLoSDpTQxWWCB9eay5UMeFnE3fXwYH1qfDJzFtLCP9hMuHsGhhFUM5UDkRVycsnVseHXAdT9MQGQXLz7y1",
  "key1": "53f4YFnAJcS6MBL2ZgpFE7Gk2WxJ55JXtBJtm5PDKfe6k3RrDatitroQD5jBgn5WkTa1aFGqZGK899Tdb1rHUUJt",
  "key2": "5xPtgWuzZRr5xJLCf6Q6idstTWTtPXckRkHzjNV9Xi6vnj6cdknHw226odzZQSWxoGLmdC3n4Rcxx8N4NQtdJWAB",
  "key3": "2Xg8BjT4LozHYMM46XzuHQEf6xuVnkea51xPShUJUHCY6J4GJGGTdMY4scS7NS2mUMmQgDoSYKBpCe1wdrrmi7tt",
  "key4": "vD97aPZMpGEkx8wCuEGE6DHzpVUYrctifmdzUhEjf4BoZmpy5LpJDsZ3wgNtv8bzzmFkUSH3vuA6JNWyYtbvxSU",
  "key5": "26guMZHX8x6EhyzSJgrXGXP9HWyR9x7Nw444CkXoxDParMXcx8W7vjBxH91g7xRh8CksZ6rqyGU3y61M4EYJATXY",
  "key6": "3eCnzkEfTH2KPLWHQBRQWCSmRM2NdYAT4BZ2x7uPRZX75tKNJnUk9x6vJo8tfoGVeDHGLDaWWPq3VGag6qGPgX5A",
  "key7": "pHY7y4vXxDke4Qk5A7zyzt1vKx2UbVQyDrLKdRD7J4ZobHWiMczJ9ifDAyYbBskamFyHNHLV7WQKc6pgpJVdq7R",
  "key8": "59CHhEebg3hhHDKYuXDb4J1fZjmyk8RpKTWB5D8u7wGq8Cnfz8RgRANPGkcic4SPYVhgzXQ9dNqrPRqkN9VdCJKz",
  "key9": "3hgHAfSG33kZUKEZGftr49wg9TDjnrKLLeZNNKQzxvVAo3JFMmcdFDr8RVYp2uaVzqrxVgPpJFq3hJQiwgF8CfRN",
  "key10": "SbURjCpMfpeQpXzHH7GTys2jWFx2rFCGWRbiyB9WCS7tiA7yxGHaHmnU2v3aRESY54DsfvEC9SnvmnCCCKb1cBh",
  "key11": "2NysA4drh5w6C41m6BeW5XmPeUesMx7BbVDLSmdoCbGSScwz5fTCxdEUMvj1x7dbugw6JTG9yYTkTvcsB2GxUQTG",
  "key12": "3FdNZCN7AEGMaUr8PpEN7eueN8j6DK8Af6bX6rPAv1rEkLTeqmTDyVn7eiptyvSASsVcLHChTx6H8VHtFJ31c7iY",
  "key13": "2uZ4y5q1U2Quo9XaoeD8CXczV3mG8pBiYcEmQbZAHCQdUcbRbn2SpRx3EfBD4qjBzBzvzTJyfDa1nzCL1XXSGyFR",
  "key14": "4PR47J3Xmb9gDhzfMfTEmWXSsVBrfoB5h9ucABo4P1s8mNGA4TfYvTi9K9N9H2g9BWTMMh96qWztrBNiDdbf26Vx",
  "key15": "PYgQq1xrbJhD26Pk6ZZYoikKfHWVtwccLWUe4CRUyfmd3YQrGWn2BxFzH1NjG7Woy7bCjnwAh2MpUXr7FCtCmk1",
  "key16": "2Ri93FuV25LZY9NBdkUF1fWFybBLboq4k3utiUJ9Hq4AUGs8hvu7uHcj7RiuT8Rn5YhCBaT9CQ7MkkqZNMGnvmXH",
  "key17": "4fwFHF1HtiVKKDzf79XG9YMrn5NfWinjRnk9uweYesC8886NVumPPHfHMoRKBEkWXc6B4Exijim3nesZ6eH2WA39",
  "key18": "5J7dHVLnS92bwmaCi3sMKUnqeMPNZxvpVFZEGYuKB8cp7WoSx1qTecMFubR2YXK5ii15uDx1P3bwvAXRXkqXTM1z",
  "key19": "2Q9zqptT7Srz9P7eXFXmqYcsa92dy4aPVY1ZnreddupvVX3pDJPywZ2JicfShNfhnEddChafVjn1tLnEEUTzkhzU",
  "key20": "wCgpqH88BCuNLmfvaed2Gb4PjzbMG977hX8S6WgRLUjtFasvhUb1gePEqx3ayoCp4V3oJSCHJ88Qr4p3zLf4qNa",
  "key21": "62Jk1mRbLviJWErjEr8qbvay5DVds2ESuGd75xzi4QmCagBGwGZKqdHCczx3xbjCGJTQUppc3HufqL2Xv171WzAx",
  "key22": "63iMasnFkiMZoqW11hvwwCaBpdyhhZAe9Rd1euxZqmqRAyA57Me72S4eNYXw5tRCgJA83vSwgqpTWbqA4hi62moY",
  "key23": "2Ap9B9NU7WuS2PSPsWkGXpbzzKJ1FjX1wEbJVzZrWghDuy1zi6MePw3qqDrf9BsuzrhDg4aLFqt43AUfujvWL6bG",
  "key24": "3jNcYNKB9uqUM8ohaqhKRbbU11WKGFJPgV6AVMybSixz1KdCUk4gun4AJxv6AFgF5mNEJPoLkHfdwpCfnDnZb6eS",
  "key25": "5L169EU1mfaiXPZxG6nqVUmN5UCtripcC4nWT4YT4MMbNRP1QqgXB9WgatKcqduRN5pzsrNC4RNoEkCo7YhuQnCs",
  "key26": "2utVdquikrHzfW5MUHD1x1ffNQ6Pe9pdMaUCEhYTeyGkvmFet8CCbm24GLp1s6U3Bw9zEjxQu3kFWNvRWRsb6xPX",
  "key27": "5xAdRoc93nTa3bkV2p3XRPE31rYMaU1EqAYj9rK99ZSmejmmdFToYQqggoP7VM9JYJxiQygXLhB8cSa6XzQw9DAz",
  "key28": "4nbmSEfDhSy5BV3MQNHc28tHAJPDRQrLQ2qxkQRVdNxdg9a7DkkXS9zEKFGngXugKJQEbVgRFuPWuzfGwLjJ8YbR"
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
