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
    "3JHJQzR1rRZZHh8iHsGKcQJKFRmDtiRNfEGpaZxDSYULLsA36EozsFqqrnhy5yz5zuBktmEoFTsZyHbxzy8yuecd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zqiUE1jpifQFiGxHHjmtyzFtxzrRzuFJ8dnrwza532TZazyt8KEkg6dRRAJtjg418K4xtRUNzcAVyeuaPJWM2D4",
  "key1": "3umaBWAX53GpTPE8GP91PT5RdJnXiD8QsNmbbDtfJyp2mGZgor3XLSqCHJa3NmU8PJ4Mt2m2NGQBR3SBvcBLtLPU",
  "key2": "3ZhbF3zeQxuob2VnTDRuaFLcr1AZkcHPLV56UMiWZQQAKSGvmC4EMLd9eGReqiRZzSevcQerEgYUxpeMARr1H1X7",
  "key3": "tL4DgxrpCwHJEdFUgPr6T5sTQHAEbi3S75N7gsz9LsLFW4apKGLsBqmPPA3wEsKJXWYwEms5F4QeV3q3keHmV3C",
  "key4": "29C9sKUuqki7u7QA8apcYzE8yVFEEuDMcH3swfYtkKZVLzxjYQ1LTUSrWV17M9QpnhQ7WAZSnqDJ1HhkvYtPd1Gd",
  "key5": "SYjRAKGeEfyegH3anR8hJ9eMBXYToSrL26vYG2mn4Y1D1vZGCpdKzPyPbJsMW9vMBYukxmDs6L9Qzj4iRyjr9qb",
  "key6": "Cr7nQCx9Mdj1DZDyX1whvkRM3cPn2zBH7tXSiRafSuz4Wr1vKrxwZtJDp4V3JXxYyBNHGfqJR7JAsspVEwhQ3GN",
  "key7": "5ezhkMToCCvqMP2Tb3Ys4wKtoLnKGvevVHvyMtQUe9E6zjr6mCBUHWaceXNFEe11demKXERwbnVFDdEs4PwpLcgk",
  "key8": "2sUDWLgh7VmAUpLWen3ANgF4pb2wJkqjFfgxG5qpEk47FK2xgoSN3nYR6yDa1mdMtYuLatRcKERQLjLLRBZPAzyv",
  "key9": "epEZoBCDpyqf2w1GJfa8pnKxnmnzz3qxRYEwzLQzc3mc7e6TM8WLYqYWHm4HoZZuHWkmYLroUCRvec37BgzRY8S",
  "key10": "9L9vPFmpUqzuKSi3Ynaqh4BTBegsqQECF9W9a5T7uKRZW4Vj9zjFLDPupndqgdkUysx71byT2C1gtVzb6Qo589P",
  "key11": "2VESMqHUKfBbVo3osb55ka6YP69FDeD5ifXdzjtwYRJZL1Lo3jTibbNLEfMRetvVkA4e71CDuh8oZurEMoxNi7qu",
  "key12": "5SR5aRDK95XVS25vifsbjZY7vf25uM7kg488sJPv17EWfAH9TAFhyndwkJcujsTLTMu89dcHHtqkpcMScdPwyyaS",
  "key13": "5pBqv6crqZVcWJSC68EW7a1aLGzHgbiSosu3x6rU9UPNV983Si6suyatNSRJFRfyEf9rttjwin4WBcey4sPGjXM7",
  "key14": "5BXtYd9aTE2HnZKUbZnULEidC6m7EDA9D6eqUDMp2SEduRrTPN9fF43AtyCJCAaASr1rGRkxdVo2tZKymkVFw6yA",
  "key15": "515JUr5iyEf9xDbJzedtTge2hjf4pEb3G9qDrw3xQC5xUi9i2Y25hkxciRE3K2mxfV7mVKUWPogEjodWn1Edc1H3",
  "key16": "62ZAocXeEv7W9QGfygU6X8LDxh7NSu8jWteLqGXengkWWcFBMQh1UK9z2uZEv3BAPxdGxqPSuRHwCXbYdsYGXDMd",
  "key17": "5DJUaZaGe4RjMjqeDwu5UTgHFzXZuhr1Q7A6dUCULxwVVtsnvivNXoAPkDyFJQsq8rWo3Qct3pk2W7HLy3Lv6UiB",
  "key18": "5eE7TN8iMMtLYA9AczJH4ZwKmSA6rrejz9rsD4gGf44EZdEyErLHC4mRNF1oPfdjCoQ1t5XyYsh56NXrh3xokEFA",
  "key19": "2WVkf5W8PeNJzEmGGzy3pNtkxJE2yFPNkbMrEjpWEFTwpmHvaEyBgMz9cyJNw9fgwEZamJiPuAU5VRBHqgpL3gKS",
  "key20": "ajhEdbMq4YrWWn2YSSY2s6rzU1w2PgMu6B1Q2NeEN6gsm4LyD6cXuyVMEXpx45FxAXiZf6uQYPSRvqHWv8iq9Yu",
  "key21": "2nLSFvZRMSPt4XXdZ8Scnd4Pm7YqfQy42vZJabosLnVP7tLdmBtvmfy7LuhZqHwwH1m97CRZpK6t5QXWnXFbCEBy",
  "key22": "22mfGWooaPDDstKXVSdosihkLvhC7yRkKLsmqhDLeSw4Zt1jS5JZD35uvjZdYNL2Axu8HjrE3SJNNP3xkYckCA7T",
  "key23": "5zXy6ZdMnzoN3AfWZoT7uuMv3errtMaM31XnjbuUtLtP7XBmVYA4m233E5dm9un3eb9hXXstkcUC2PfHrqi16hHX",
  "key24": "3Jy88kzjZo83ae1x3UWhRb113kLFsHwLGnwydXS461mxghs9oKu5KqgpG3Njm9BgpUWSC6cNSwSNkztUfaLGPyQj",
  "key25": "5wZakVNHhTqVXDe4LJQpt7VoX1f8dWuQbJxqwAdxdyoXfumD9msws93nof7wUFxdRdQ5iPwFNbeNZpaJmGt1kspK",
  "key26": "5vbNCDKQyXgtJhXK2B3ucSLXHddPkHbQg37aJopAMpsEnjGHFr67NpWzaab5BWqovw8HCuhpoHwMdhczXEMcARrG"
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
