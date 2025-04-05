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
    "2f7VfgW4SPmPmdfz5rSF8pYetr5BsJ7nqWBAfyaWrFWUP1LTtkX8YdjubeMu6xeYptevoHotMwzxi5qo21wUtxwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KW1svse2YnmF21iH6nuuKxFQG5UyW5tfdhmkJHifCGGu64pSECYkr67heKK5UseWyah7Z8gj1GtjUTNJqqpBrT7",
  "key1": "MGK7evnpjPPxmSTjUa2suJvscw44MxLBbsQ1qyVNjn4BQuVTRYtR2JQnzTuUxqaLm8yu4xxgkR3u1WQbUyg49gi",
  "key2": "25988ZNTtKSbxdoM8uPioTYuSe8UFUp2889sGcmFjrCLQaMTmF5xvApxbRWqr2gAfRbzy8HdN5KDNLiBzFX6sWHi",
  "key3": "5YAycz5N28wyUL8K9mTxA2F8DQFvXPKD1Ki1oKZSvsizH9buraz9knRHKcrWj5h2JPDufmvpFY94v9pxHQ54WogH",
  "key4": "2HdCAcX8WCMLHSaRQUgQMdRVqF5DPMBSHnJGCjV4pnYQ5G94JCiRSdVo6DLYC3DM8NTPLEHLDwc1QSWRNrugmh2Z",
  "key5": "3kjrSfq3Nx3Z8TB56RZnSoXkYGnMYj4cMfByjwbAgEuwuwGXAbFKxsDaeU3HQ8TD5PtnF8eR3CBVbV9h2VmkZJGi",
  "key6": "qH3WAAkU1Kp7NrucBVMbPLAWMrTQ7tkmf1n2ZmQTDZoEMdVwi5DkkXnp7a5h2AcJMqdDemWbWdLLQZPdynLDMD2",
  "key7": "3QAWXnjLxLgZKvPcX5wPnVJVkJhXvbZaETz2RnUeHBzY61aoBQhJ9ToAT69PaJVTjEHUAqzbrtwvUcGGGX9qGMTF",
  "key8": "3ZxsnK1pXdBw1xEmLrsADD4f2dG3WDi4inQa75Bpt5HwaugZYFhdTokACr9AZ7iYpzQknnkbSBWzCRX5Y1VHBBt5",
  "key9": "2D5Myj2y8chcKkbsDWgmtSs73dDiCz5iUKjLqio5bCiW8XM6R6bJuEKUof9FQwdJJW5eP4FkbmaoqgyfPF6G8FmM",
  "key10": "2XqCPX6wKUL2pLSuGSRBMHhNVS3EvJTfuBPW6qVGPXAXvvXbbGucbmF3AV3omW4P6koc9sTaXbVs1R1dYbAUpjUR",
  "key11": "2NmP7Ub4BoJyY5qN1MSs93SzhSeYJQdbWxTCLDAhCMHHasAx96z5C99mTYyHwvuZYgeKqA6vsdzBK3ShJDZraN6g",
  "key12": "4SdBGPP9Ckize6THyXXhRLGNKq74FpCpFxNcXXYBSQcBCmJznybR6gMgRTp4F6h5ENNib8sYSyRk2P3YEDuT9sP7",
  "key13": "5QmHBQAKQvEGwU5BgBbaVAEvAn6RMtsv2SPyD7Ku53e53gYqLa7qz8QXtZSEGv6YLuyVZ4AisMWBFEdVqheXYrNi",
  "key14": "2Na4J3QtBFWoBKMmcHaxD4Y3KacXH5xriXuqcwNc77yr1woe14skbwKnBXSVTmgoapXExV2Xg425rEzKsKFcco7u",
  "key15": "5F1MhmiupGWjc3Nkwaaz3XbLk1oBJ7CvFauhhd8xAuog2DR4NaFGYGEUwAsTDFttcoAybQ5KiDEqoXL83RCYNMwc",
  "key16": "41RD77gfXc1NUkWsqnPYhDfC5z4Vtv2TwMioBuyDcJVHQwUCdGzNgm3vGqS4NfFK4eXnJwtsNgTzY2nZtQSPjX72",
  "key17": "2TujYTS7R3YABv6uqgkdAm2BtkXnhxj6hA94p93RZT74DCvDJHeWcoNHPQMchsDu3BJa7XHWTC9mPNKAVhZAPJSG",
  "key18": "67bCK6CmNCgEYLmqzqQxDC29KS2BLxkKcdQc7yTxzQkrUf2rnYFbRitoh783piA3PapcxUqoTQndcnn6pRjcgW9z",
  "key19": "2WMmJ94pEJ7s7Yq94YbVrUthMoiFueA6GRzyaE7nyeJooE3KaLuCs33ey3ZqZkT7Kifh4EECa1VSLpQC31jVEJbp",
  "key20": "3vthj3kEEFHvWQ3RkxC47y6yhYm3gMh4MoSspDSyPhAPhZ182jfMwHFadRTuGNk1eZWMktYGM7uTr6LKbFnExutu",
  "key21": "2QUV9qTZBuXkHRfbg116GfUH5dd6kYhQaxu5sw7CHkzND4rEDXPCaKC2uGeNkvXFmRTQTUQPa3jFq57sELWwXgQC",
  "key22": "L6kAzdgBdzUWK5yA929ek5dT36W4QiGj5xweMeWFpwx7bR9sKW1MZQTwWLCQfwtjM8dNXZSKi6ucwcWs8fuuL6B",
  "key23": "58hzQNDX2HTBJwV8YYX8B8XnJusijTaa75v433DmYRfxhSGsEZ3bMxZcRSeTHyvFHLqVXVDPocMezM4PMsHCkHdw",
  "key24": "ZZCYiqDvQZv1N93qjGituFunDuN5FrJV287YotUoWk8tAK9tzWarjsBSgwv7y3YusErZqyPkQFo2vdV1jfgvJJf",
  "key25": "wEYSA4s8MP7fsDNBZfH69pkDPa5pehCFYCFNguZhe1vzopcUTC7H65dXEZknCfRgoaaEE829eHx8VcBZM9upnxT",
  "key26": "5MaBwnZXJjSaYi8fzLKwL6DkACyDMFghSH4VuVXVGq7M1kMPPcudwVTp1Aj6LYPy1JWorS7LuQ1rKBE1onefaSkN",
  "key27": "2aG22cnmZ9GpcaEWbm9J7UvT8Cgn6YHPdUnF7G5a5JbPWvbzabZxmAKXENtimRvzDsnFvv4MfKZcewanApWsgrer",
  "key28": "56zSf43jA6QHGuYkY1Cqp5chDKYBJRpAHNphFmC1Y5o9PJ2VxMRaXzy9vrATms4KSwXkmfBrfWSQRuCvTyXL699B",
  "key29": "3pukHY7e4953Fr6EvaWaZG41akzxYmqbF4o7feTXxQ5xWVNwsvhdsoCNC9jENCd9SMQCDrCcME3HDM4qVCqiAB13",
  "key30": "47XiB2VKarCfJAAtLkK1mUqxUaQdFuoVLd7qFcUvumGuiFH4M9xLT7LLXK4ZdeHASLHrDxYA6XnUAMNx48DEpNTb",
  "key31": "4yT9DPKzJSHTXkso66RvsZ4wKxoJUahUgAn5kVrdR4smwcp6whockeSUXV1ACqQBVj3L8RwuxXEaq5vAD4oBD7Sq",
  "key32": "3X7SVgYqVoFVfHScjCSVY8K2QGSyVbf5ybkc9VUCGV1Gicx3T6riYSzBdZXrgELEbGZ8Uw8mXvUWPFNX6gMgSgLS",
  "key33": "Pf3VqApqi5RNQ9aYuLRUZ8pmUBtcDdt8hisHDYbFZJPUmaWryW2ZfHpQBnC5wHX5xnJAy8ZAANraVRbhCrfTHZu",
  "key34": "ir8uJHP6Rs4auhbQtUFsJFaM4fpSJCB3riaZpiaQ3azw8gWq3MCh3hDs2M72WsVnsjEr89QkvcmSqhtkw1ZfGsU",
  "key35": "9KRSDoGmGy9Z3ot5pTVFL9oRMzJZT89vWBWwd34nSrefzxhtwadmmon3iAiawkCG6pvxFzDyqBgDt3pwzVHzncp",
  "key36": "4DTZq2Mn2xEooYL5Tm8Rgygh6Y6BGyzfiHdMNcEWaGsrgfHVnTQkhDzKeX6Ua9bW9WXZTpYhvRG8AvSs1azwvENW",
  "key37": "2ddrYxRJcjWNyEq5TpSaK6ikt7Bv6R1CQDn18bETeKPagHvcpKVRN8s7ejCJQxZtZ6t7ufZJvzftCEiaqFj1Fg8S",
  "key38": "3qYERHod25WKs4rtZFXNW15fu1WuChw7RpBJGiXpmwJArKA5vJCj5n1aEVccZAwHiBNjwPQGEXqWaPkGVNTje787",
  "key39": "65wWszMrZ3b1S31qXxBS9nYqQJj57JTjdq4cs6FP9Wg5ZBhSbvZM69MXLxxFTwsh29XYyRJsY7ALQ9SV99ijSQeb",
  "key40": "5J98Ee2M6U192ZnL5GUihoPs7DW1pjjnj93yCjU9SBuWL4eqEDrBe9A38DfNGhP57B87PyTYzWPoioeaBuTg9SMB",
  "key41": "44E5i3axbMzE5qc7Ajbs9jNXxWUJoUSMBzGj55qXaVvLr1skcv6bbiAt83fWH7JJ5fZe8ynYgcXQNxm9kHTtgKga",
  "key42": "4riiT9xRYSdZgatYtW1mZYAnfJfMdfYtH4fJMnqGWRuVddxaALgBdkwVK5a2WpsmsGmKK8kwAfaokfUnwFKTrS1v",
  "key43": "NDwnFqsc7WenwFPU9ucpkwQfGcLDbXjnsHTsE2tVxW7x93iYqnqzfzx3Hokr6mhZczkwv3ZYZoQJmLe6AxBBXqa"
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
