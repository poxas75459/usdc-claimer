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
    "ghN3drH5esG549WfoFDyp6epqsqfu7RncZQTDhFR2kBiknnJRxEbKPw7rpLNTHnnmmW3h7hjqhyiM7Vi841tSQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JHrcTFJK9iaLJUZH8t7XeSBa8iq2YwpVwic1827daCYE83eQifuSgtWbRZ6vTrM2NYjaAP1c16Vc8p3ThCdewzV",
  "key1": "2JWaQAq8EdLKezDoxyy7TqNGkBz9gtzNfCezkcd2ZNoQ2VsHKCKBPfr9DgvuAzDPR74kp9G8wWMoDBzsoUsJqkcL",
  "key2": "4AW2Aha7BZdmzN8fvpAyQUHcnRFRfEnVhvwZ1au9xMjeHnD9g5k4Am8MJrdXAAZhbsoVxpCebrtgMRgqYwWbk6ad",
  "key3": "2j831AkfRSZASwB7wsam1ZrtELQzkvLhuJBNcGSJokLvSyP1Jg2H6snwSfi9XGPrAEKhs63wRL5S1TMj1iziTvy3",
  "key4": "2XRM91maHQFFGqQZTUpmq8oA8DYhF5k2d296gTaMQYtX7iVp8VAXArU7AmAMqLeniNGs9EDNuqV4aDSprFFobKwN",
  "key5": "4KkdYXPZiAwmRFU6MZxGi2AR3uD1tXvGwD1ipwaRDuHmXdJyA4uTUUzzMLQX65R9Vu8NLMCMp9N9f3to7iggnW6N",
  "key6": "48Bg7bQEmapuaBwqSbn4XwAB7etwPZY272fpxRdtnfvBShht7Yj1ScsDRgzh6dFCYrfS14zqZFjpqxapEDkh1bhD",
  "key7": "2LfBVVdG4knSL7pUNjpq3LozTL4V5vsWRupEfz11zP1HMQpSbUH1cR1MTjX95SYfu9S9z23a2KkfF4i8DcGYiUun",
  "key8": "4QghTrEGSAynNYGtD5enQkspoyeMfGpcXTNmbPzjJd7xcyEKMUYGHHErvznMxTj9FLZh8JJCZ171pdcHJLbV85Ge",
  "key9": "5FENfNTFxoEHQcYVDqXpHZoRL4F8mseP3HxPjoWABdBp9nUnUEgEJJGCvgWxiGGMXxEUmZZb3Jwh4DzRda7MMuwi",
  "key10": "2ZVfqZtSvRV4D6isWa6tDXcERMjg91KxKLUN7ZkFokkeP1FYb64FBGXa8g4tQn4dE1iPxouTuJHAoNoiAabHsMXR",
  "key11": "2rogNy7BZUJW21KTR2PmageXzjypvLsy1oXTD2hT5WVVkyxAJc8S7WrZ2MKe88cxSfrhVnbw4CQG2Jdo3Fu3viDB",
  "key12": "5CwvNFAFPhtttiwZk7XTbiTLdEjVVDxzXLJExzbkwEsqatC8X3SzUVz43dp8sdcWJE848GAhBpAvnBxPxxkopvtF",
  "key13": "4DwV57YPBuyDxrNB4RD4Ejye8ra2UQ5od6RfF9RvdFvFxXZifDL8rt3rb18JMWdcTLAY3GVBjJcKWhEw8ySusqaW",
  "key14": "23Ff4ZTZEms3PLeoj5Tka54A54aJEWkjbPq8knzxWGhWyT7eHDEL3jtqw2rxSGxAx5myESobuCXPGW2KzhXbcmUv",
  "key15": "2FdZh7zfFk251HuraXyFYiHQd5Mj9H1M6ggk2RqMynxkQELXUSVJz68YJeWnYyFzpe4FQZK8biGQxVc6EgE9Bffi",
  "key16": "2VGizbteBv57sjiWw1ch5KLbncPNdVnCmErpPGABxcKr8jC8Zpk98jkrW9oHKwgeLjJnfcxHwJRP7zEekPZVCeta",
  "key17": "2saVzjvUQTAZ2hBBjssKYgGQBDW6roETuVrWw4gdiRNTsj8dg5942Jn9FTJBahmEdJeXfW6MkKHttoewriPfcZo6",
  "key18": "4kXETzWSrxuCvDr7F2tWp9dDw2c6suoH8mbBmgBTuGvubfjeRe7mahKVfqpz9ro9Sicw1keeH52jcZ8GrvQBzjgm",
  "key19": "1gq1eacsSits1emA9BDbDrRWizPFaDVcXYmBsHJa87c84A8wrSq3L2ZJy9CXp8pL5Aft4FxmoXhURjfEPNeLJ3F",
  "key20": "5wGaoH4JYKk1DGRTLhX9kzaB8MYdrC2RC6biUo7KRUHphEMSFxWrjZeEYUicewg9ZVuahEnAXpAucMsenyzCuPLs",
  "key21": "5W1HYPHM88zbTXVgzfasrAK12xupNWrnCvKVLJfLYMSy7FfhFLJCJCWHYhqFXeQ4tbKSgFAcu7CTCugdagawixyP",
  "key22": "5QUwZMsxGNe7dt6gELip61hbYLjVHQkMstYCfvXU6Qj3P4UQS9U1a1V8CsNAowQ58nBSGYfU244uWkyCJg6iause",
  "key23": "Vtpqq6vTjiwKDTRbx8W8zxb6St7yXUywJciWVzKHrPmPHAxeMLanuws7koRt21npAGtr3cfjjRTQQ3X7U5edJLC",
  "key24": "h6jkXozL5dURCeEZkXxPSLQFydFwnFKTRZbYFoBeEvQLCjnwiVwSAThsY65g2YgstFZWzi7ReHkxodtZFMqUU6N",
  "key25": "5F5YFzrSEkCKLX5LAqkM8HMbDo5SjgdKvVUn8M2d4xZa2egDiWir7aAn3dgieg5yqmKhsRwo53DSG14xouFsR9kt"
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
