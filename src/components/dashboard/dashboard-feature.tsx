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
    "ZAAoQHFwpWJqC1BXJcUgLDGzn76tWnHZsbw5vQF9yMX5rS3UmzwyKqVRZzvdQRyc1fvRB1EySKFXxG4QABuFoqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TZaBK83GaXpVKELs6wkhv2h2C5G8z2JPfoKHjv6U4H1grDSbuecAXnePZmk2MyR71EAGZ4mDwzumVg8d5umsztb",
  "key1": "4epkHs7bivwLGjdJb8f7vC8sGi11Q2x3VWGCVEy774aL4Js3mpQHF6HntPeiMjbKE9J2NJib6ucPCVBQrWhfjRkA",
  "key2": "5mCiXnQkpRQXUWbC7Ark5sq1JxFYDiDEWW63GssheMVZwwHSV54kGkfHA5HZqYg2wkoBaN9yWczEhf6YY4nLzTsV",
  "key3": "2QtX9XfSKxCCds4Hmkx15mtdo7eh7BPqQxZbQPgVE1ghLQnYoQ2criDD5p7Pf568mAzSdkBtiy1MUckSxocFeTvj",
  "key4": "aHfWnf84ir8N4Wr9cxLyfHErFX49XA7KQAbomFWyTM5TaC5Xkzh1hiNpH83VpnyUApLmubQpEV5GYjjE6mLCo42",
  "key5": "443HehHP14znhTgtdufXr7tNFoVT9G4EW1nN2QiKuFdTurmCakPdmiwis9gHn7rijjmJTR9szo5byFnBxiFJReaG",
  "key6": "2qyW6f8z7w63ukTSWy5DNP3dffw5cv2PFttyy1j5PqowtyCyRE5XpZHkzQX6vARHzp3VvjXnb5gjqNnUgGvnF5bY",
  "key7": "wpjG4vjzdzgPhYSS9DZyvPYefNJRNo9Bvunjqg4HNvzHSWzNsAzgrWZ4AKYFazBSioTFS9qgTB6CuMrtig8y3Jt",
  "key8": "3PH9FN6CmS5LYjDFCDpEWPk2HDBuWZf4jywZULSvZHTUG49sYa3Hd2nJjJyo2cMRHZi5Xs5MKvyfSfKzNQBdbGge",
  "key9": "u5U3onPDHhxvBSJksVFuDZaytzFS2EcYXAuo4UjcY7Q6AtBy23WNhFTnD7tCtamaA9GVvsuw7LgFzxmshLGegfd",
  "key10": "2bfT92jT64Udn1GToAm2LZU6eTGowF6FmEnRsEkcv2Xw798vPrJsReW3xvk6UpuUA5Z286VdFGW5zkYUWDWh3Qf4",
  "key11": "4ir48RZQt1pAxWos954dx51KgwAxfXa9KXMQmi9mg225W2tRzEJPR8w4kj2QUtsLduxSFZ1v6gq9hokS5fDLoowZ",
  "key12": "bxG7yTf18KYMH3VbKxHXozLn9Q2uMouxsfQC2mUw4CLDSonig8458EVJBmRW3ueM6qSmbJCs5ShxL24W6cyka9L",
  "key13": "5wkt3X1EqRQjn5uiybFe9YqveHN4PtN9M6XQcZMzDBujfdvgyLtoiTpxCmX5KcC2uHKkC9fW3KXpNScgpiyZS17U",
  "key14": "vphaQg4DNAr3gjERV9mzd8FDcyUpiKZVMF6sAzdt4CUJB9YrUiHyEWqo9kskJwkBZqXgiCfowAqQovhqwJW1HZH",
  "key15": "5rNjBm3JBm3HcLbdg2XhN4KvKzxfCp6YeMTBzN9h4YLtpgdDg3AKBL3dCE6NK3QcMKz5yLgf1zqmQgcNrEPgYoTK",
  "key16": "4G4Niu8RKKKLavs2oW33nCqDmSS7ciP7z91NRfoeueUHFS5W15mLr9aWdTsoNbWE4VMeBfnwF81M7ssANH61PHvb",
  "key17": "VDLHnzrD5hNTYJZJaF8M85GbPGsdwYwe95APXhhyrqTaWZkXjdY3j1GbcLGEou1VD1WkUzJFLw46LpfkKc1QFek",
  "key18": "5X4Cc92CnLeq9onG2j2j2owf93W7eYFmYuM1wFeVqwAgGF4wWn23MmXuj5FXnjtGQgM85zNhqGHn1zbV7NHKousC",
  "key19": "ubrcTQh1DAHMJdNvxMKrtnfoN3mea93F2opB93ZDePgQVTXBvVGrdiz3RQ2d1R2Cb12GA7HHX2ySGmgs5B7Ppjh",
  "key20": "aBqHGNeZQFJJjQYXqFuGXp9NZtJMD2RCjaGY5VRkoB5ffUMEV8zRFaq7C3ftWUmqEdn9WYMDy977b4h9iz3Psvc",
  "key21": "26Z153set5PP15UTzWhpfMLqwyPi8p1sC7xyVfrvRVtDe9xqeheoBNkSDkkWSMYwBVD5jYexaoJYV8jiXLznmUHx",
  "key22": "2exFQ9mJnCWtjapm9sWgqMHNa8TCyU7MCXoPiggL4ZCdzSEDwoKk2XsqsApwCumzbrnGrHTxCfttEMvm7LCCdo5m",
  "key23": "FMboHUEHHgtUtJHFWv7F147D4V7CU4JscKphsUBNwmfhMWxZdWfugBq4GNznth5eJaWqNQb9D6VJQpWLXrYZb2a",
  "key24": "2kQx9QGjgzf2s8gwa6cxADvfHZPq7LjrKSCBAZVJmCzwWQyvyBvji6erkkfzPT3QGZL4VMnbWkzGHNiHZEVX451k",
  "key25": "4AcbJdUV1fhPuww2NxCoyaavq4tKnXuUEWqpXXUDZ3SBY6bz1QTfYKEZMLAhTsnL2rswb8W6eTtcvNRWe4Jc255z",
  "key26": "7JxVoiDUyPsVxiXRaxWm4uXtcyF6uP7CkmK8szq3GFmNCgvyBMvdPh2fv1tiSgpVvRZcpyt2fNXBRqLkrwUcJf7",
  "key27": "2KgR5bzGz9pL8GNPizVCHftsPihJtAp5uSC1K98k7XLqtdToraKfVHivHQJZmjhMix9Giv86MD7uKAc4vV3UA93J",
  "key28": "64U788nUD1nR85eSSnKNjdLNJR2ZNKjLPwWV1KMcQYUQ7XqBidBZSVNsPQ7XLwYPiQapgjwuXB5ZgQykB8uL6gDt"
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
