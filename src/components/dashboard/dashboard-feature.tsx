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
    "3xviZE4f13FNjksKirYoH2was6YZquPWYPjCBKLRTyQ9FxhnKVEGVphYjuLqM9xY1gd6W2xFXTpYPB2Xb9MYDgsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gxHCu9xgPoXGdMw9hSsxBY1Y3YsZ4Nu6fpNB4JpcX1cEcMdVHLY32Art1o1QZ6qUWSdJ91txQKEgCaGpwsx9quv",
  "key1": "tBARftCwCc1MytUxmFFLWt1GWModSsZ4VPVzT35MPBE3WGxYe3Fopv4Q7DsUy28bD7d6Q4M61covAqRSfo1tEr7",
  "key2": "2mmNJPZYbZcA5LpbDWEyAjNcLDr3kazKX6GaTD2SYnsVjcTj8m1nigoK9dRcCUTFvYNTTg8FLp3PXD6GHkZVgcrC",
  "key3": "43VfbR7pYqVwkSAoErdbs8Q8y74xC5zAzeYAnue2x4LAZRQ9jc1vpMkBbbwZ7jXfRRA1SZBXhT93hwtxsB7XnGT3",
  "key4": "s4Jkgw6WNzsGkXMfqtsmpgaYXLVWPu9oRoEPKb1y6KKH9YwvZ9UeT3i93EFjZXgikeHbKtJ51qgKBvuL5hwCnSM",
  "key5": "5wAeHM1w2B5kxHbMeowywULW1c18vdN6Tc5du65pdyAE35gDMfynpo4QZWkJMxfJkqccYBcURPNaCuGH98JvPWqk",
  "key6": "2Tr3x9wiHv97WXRc7amVb8Ynr62wKAzSiFJwZkkMYcqnkXGopsh7uawfn1RsGWW72EZ9ECJgc5YnCJcJfW22MUBN",
  "key7": "2GefcvYTkzCnPyQA8QC6x4NY98NBwomqchJ52h9Y7w257L4LSyGeJYuMJSHSQDRHo964rseE9bDruewLpR6s5zdz",
  "key8": "4YKrEuTxUoz8pqHR9w6Dqy9rnx751QNUK4QT3X9zDgteXKKQnNk9Jk4TkeKoAnaCoGj5Z2B3pjRgyHXUbTYsVYpc",
  "key9": "hpH3a71bqesGgsdNeN5oaUWV6ghEJYQPgNT41WevUZFTEQtyNiHY4jVXEQ24jWjuaCQRMtuoukx44M4zrJCMt6a",
  "key10": "5sAbRMoXdbrSg7x754Ktpk1r3FtbnXMXpw43TXCDCySghGmo5oWcmNqbBbsJHCGrJ7kY4HGeU5MfYn25zATodcof",
  "key11": "5kFcU64XtyHQ3D7wJVKneZ3e3KkXYjnk4eYDe9yizBqPY2JTeushNUp1yMine7LVmw1WRGBqLadRsppnqZCnuE1g",
  "key12": "3bWoQLJyeobG5QNwzLfGKEEzrALQxMz18vAMmiASPQrg2zS9QotWikUyq7G1QHeiB43k9p1HiWTeza5tVbmUknSa",
  "key13": "42LVG5MWqD2hLY64CKyU25WNL8bbUzuF9LRbVPh4NJ2zeZTdbqFL6oGoHy2u3m5mtGhtF6TXuwstDghhhKsEN6XP",
  "key14": "6rSpdVjBofv1BBdVtGXFPjxKCT4NLtkEPijHVnpi9raZVobPC88t6W3FjR534FcsDiEMAvu3z9LeoJgsTv93cPF",
  "key15": "3G1EJQpLmUQ5zYKA6iaoWYWUh3v1tKhFPFDyxjdbdmzxbhn7MZMr2NzWdFeLZnFA2znNWcpRstoZ9tkqB2XvSnPm",
  "key16": "MGASq6AP4cs99ks7XUnT8wscaLMEdcFc7k4ZZysZmBoo1iPRH7PrWzBbZHrCezzbW9ZcY1cNyYT1QRsQEDdbHJB",
  "key17": "3njrivnaqd5XL4s2Dd3y3R8HrBsr4FeT7Eo8D6qQ9FhUgQ4TWiPNGy4QoxZG9GHqiNLzpLL6WsEjeX9LzoZRXCEM",
  "key18": "5wxSCg8ayVbwf9BrnoYJbyzgmVtmSR4vMhQ9a4DStUpNt6HxvtqUy7GbPzZhsbjs13pNjzZsWAtT9okXyKmkwQR7",
  "key19": "5vvBYgivCaUmaiyE5FWgGz57RmnegYJz9vpYESJQs32f588yz7nsj2WndjpXztF483Et5w5rY4zQfS72dqQATKwL",
  "key20": "jFNjcKYdqeF9qLzTBXFmpKxyPC5LBQhjcE1QbknnHUykMLSVLEMcBqCxRgCk1cjFAFprLYVE3uM1Nh3xcHFnZiB",
  "key21": "3eTQDE8JTwMpnwoNdAZ9GCFmSg838We2P62YB4w7rxpVMLH9F6EGn29nWozHmmBdawREDVDStHsRJAstGgtEc2dS",
  "key22": "32oGbmzUhqzuHmHoTub4oeWscr7NS3ngkcmQsBiGetTAiW2Hs7pkbhEJ1DQxWRnvGCtJr6L3Fuze6BHjmCtKjpF2",
  "key23": "2uLXws8EefDtJQosvEUPSUg9NpsJoX5DFS6BBBeAkCfY5qRQZYKLBtXEsh5frH8MQkqhSXYzb5uhFQ6VpAwVGLF6",
  "key24": "5WpqAg9vcLppmyeoDBFPJxY25LgkNpzxgufGTDXb6kbvAmC1QLffBBmVsf7sC8cNyhhEYpokdK2nqYSFAqGUvW8X"
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
