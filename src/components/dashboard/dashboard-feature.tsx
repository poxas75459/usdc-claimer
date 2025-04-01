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
    "5noxqiQenAJCU1AHUjNYKmTxvGWzZPayufmagKfCMGNNTjKMHKEqqnp8mSBcwDtyM84J6Dq95SBtL6UDsUSiQfzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oobF8oQjWKoryb898QWe9RarGTygZMZiPujo1peRVq9ZeBgGw4jeKa3s1J87Rt4r3DWkUZWYJMKX7HgMJQxSJ2p",
  "key1": "v14x9V5Ehk4fgBcLBzwLCBe9kDqdT42uzFRAJhrpPzJtwssgs2amTuqXtYiw1Ly6M8i1F2bkW9QuaoVmjuambVd",
  "key2": "2TA6ufo1CEUtVnHY9gF1jYC1EZRd2YdXFREKY6mcQuqqzDDF1phZFfZovWqvn5xyPFLL8iLgJRb6vTHJbUx2hSBk",
  "key3": "2grLMSw6dwCDCQ6bTTeXMNiY3jDFncHKXedxXq39hfTgQBEq2GRu9MsnU5pw4HSmTfPaMoU9jSC6muNrSfVPMNgh",
  "key4": "5x94TBbeCrc229VLf4BV33aVnxqn68CHwoktpdovqVESBNj7m7Q7Fr9GovJcEAiM3YoT8AwfYrBf11CWgWuYeDtR",
  "key5": "59CGx8ZJKsHu7ujm5eUvryP6CPb7XxoYZ7NrgV3qtUZD62pzjSH33TWBMgEFCHKzZ278U9A9eYLt6uh8SixyXXxu",
  "key6": "2gLbX2yifHY8VMXAj7waFjEez9iM6nDB7mgAMukFXDWE7u8qoQ5hpsNvKms291qQiD974amxDwqKLYsXQwEJxk2U",
  "key7": "2nBdRyig86gF9N5s5u4dY2F6q3ayJuuP9vSPr88PRajBdSz3UcYVCgBhAmg1hS3Ue2ULyJhMvxHF7XeabMuaDReY",
  "key8": "3hnrf68UXpwJ6mATsFfro9Rb5zUmjuf372xpDyfccGt7btq6LCmNTB7ve6YKnaSm1ict9QdqsBTpxkC21qvc6Y5X",
  "key9": "7D51h25BkxxNULgsG7XdBdn8cv8NHQZYsCzSAf5gaARjSqJXa3V3WEuh36T7ph44y82geZHMPB7mTMGxHqRHLFN",
  "key10": "5nGoX2aWzVUFwDM4iyohinmqYQwuvyV382VVSGXL3VyGUz17R88sBmuyfFTXjYMveRpkUWAJ7itWXdDj7CLjA2AX",
  "key11": "CnDm3DxC2Ne9SWX3nnFWU5S67vt7MUCFujWtoimXVB9RxF2oXG9BGEWDdgMCkwYmqGQ87D7ZxBhWb9XCnShQtHA",
  "key12": "WjY42pBezGFbiVpeQGBV9yNhADZGjUDemvdtWu9BWZk6hrpCqXiivp1b7mXmkprycBr34RK2Uxf66dv7kPRyz6B",
  "key13": "3euR7sBGqPd3RCd3BZ189njVqMJNTeMKhS5cYUNogf8mLfZhs6jDgXM5rJWBmbwf5pXPtrK7D7GktXXMXmTBoaeD",
  "key14": "5GL5AvYZwyU7nDYujw7dGcLoi7hwexU9QoLYjwyvFq9cCTWwowy8eybg4FEf7gHenegnevhtrpofXgNrASrqJADh",
  "key15": "4LJwDfaafXAnZQMKALy6hFTtbjqdCWd13FyxGr5yEpWSGCEJiJiQJwL3kiPbyaoiV8GbipLMZ7XLsdviQsAtwRWW",
  "key16": "52MoJ6rGYFPP6EcTUBmcusKPGFz8cSyf3o6WnoyhvUicntKNJPkZqfRZRenmDHAAr6cxMqh5DfbCNmn1NRdV2b3n",
  "key17": "cwUUeXBFi3b7k7nZjtPkcLRVgyic6wfS2R3xv9KD2f5Akji9uh7SRH2Kq5ZBB3qHsbMzUqEr4Rj9bX2nvnz52BW",
  "key18": "2mrHZY9CJRCGz7eEW6uDMxWEkFwJKiLb2r8nzmUEzFoiZJtwons4etFH3NKg3LputvbtEww4MQJGyDV9AA917Gdd",
  "key19": "3KS7XoyEfXFTX1myYqHjPsk7SZ48BtQuS34vhMXo9KHn8ZxfkdbD7fgKqR9RwxB8Wr84rkUVxL4bUuYjranZaW4c",
  "key20": "2uJdLf6iVmt8dLVirsqngp3WRzxPzL5MzQusJQSms821dj79QsAB94oHhr3DNZ6cSqmFHm8g1cdNRJ7biHkDt1J7",
  "key21": "41BTmx8HB8Pf8ZRBbnJVedCu9Qwq6Lex5ckvB6tmHV6UZZD8koVZTxEaeXcqRuD7KHz4v4TN26j9b7zLoc1tsiQp",
  "key22": "5S6QKfhUHSFGrUc8ehGf9e225KbHQjMB3QJ3G5j7mYwMyraA2uYn7haLdza3sU7woBZ1nXKqmPbZznPvmgfdwKZE",
  "key23": "5RxFtSYTbm9r6GmRvmp4Ss8tJNJVPwUdBm3eEFdSkCax5mQ3JYHUeWEpJZzYe74kvb255Rr1Tu5ijrdEcLrTt23x",
  "key24": "vSFmkfczdKqoFsJqcnurZ3vhtog45cHYiDJHz1H3Xvp7oEVvtXej4DYnMSS5bWZfXN5wcsaEmUbJvft3bpE6QYA",
  "key25": "4f7LQ5AKNGGYjeUEwzQQaY9vPZafBaJzCLr3dmQBJJwBFSiZXF25yTwB87ViPmk4Jy3s7Mrs9qWZwxFMkNmjnNVJ",
  "key26": "5nGTC6isFp9ocsBkNJ6xUYmYtPm4hiwZxLBUPaaC95drywuH7zgj1qchihxt82N35KyGVURCvRuNusDpxjsaaSZx",
  "key27": "3CdgZJ6yb8YdddJF1vi3haim5di4xfH2a8cxXkaUXomHKuP7vPM8HkoqGXXgDC7YThmB4gqXz8ojry2G8eED7vWV",
  "key28": "2VkcK1iFhtEZ6rpEhsw8bCZWZvfGCqikqhg3h5TrgG9GhmhLezFGc4vNHnRMt6MZcVU3R3VW4sFSqspzMQskipvP",
  "key29": "kKP8WCNVWjQyhPQdvtCN1BvTLxzajDuxyFeeNg6jA7U7qkNmz7i2nEh4bSKu5VtypTJxZkqi1A8NCSqNznwaUfL",
  "key30": "gpPYkAvRsbUxg8Ag1iE8Zh8RfQ9zH3cHrATGn4u3TB5z4CP2a97RfNX6Sy4HgmzMtZ3N4YqTYnds3ZZMrhAsPMN",
  "key31": "5KXgziiP4oGEbN7abKDjoMsXRsZ7GpSR9WjvFvKh5aPiAVRsycmWeyUDav7NApHXxaeLuPjtoAtjjwnK3Rdto24m",
  "key32": "3HZccaUkVcViCN5jGhi8tJas4DKUJA3UHDMHXFPpA6H6V4cwphQCEp7kDsGFZY74yfQw5TsujF9pDZZvJaCFmm4s"
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
