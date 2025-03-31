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
    "4AcJHz8pWVndXX5cvdDX5qMPE6rG9SRLVuyXEsUB5JHXKJCXTeAXhFTHkwDh3QdHM55uWQBykciX86mphVujfkQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qy3ehYd4yL62ck2fXqN4qurVjajjuhu9kDyTfF5Wc6cKz8HhvYvExK8MSEukUrSskB1Mz9omh31JUt2H6S3Dk4t",
  "key1": "25VB1k7cGMn4oWXVTqRxsq2VA4GA3hAJkaiKGzFMosq56dzRrJJrLQrXUmii3ndbMbBcYAHNXXR2dHGQ4ZLyrVDy",
  "key2": "4Ex5BJsjPdc7GPfdNFf71PErdsb2zNJKdCQbsDAJysxMo7s1Rkx9jQRHrmoPZ5oQNeUqsXVAJsVFe4BpgwsgwDLM",
  "key3": "2gBbNDBTBV1dBEhZ3ZMrpmMC2ePfpNy1YUF4ckuiTFaPMsDtyYcSCKZAuReGHqcy1peGt7hXxjuRJFW38v833SBx",
  "key4": "2XPvCoJNpSRmhgnUzyQB3zpoeLkv1ih4h3Wq81741QUy89rEuBTcJypYck7LwUo8aqd39WWEsnJek1wF7G5uEp8n",
  "key5": "5hCpzXxK8ANh7VNc7rrkJsMsm2HgZnvkmr8WgutMmLwr3kWvATiPR9SCTYRF6pt8DnGQAMEW5kLdpERF6PMtdZVR",
  "key6": "c16BR1ypq97HnqjqpSo5aDuzJfQeV65X8DqQfK9aB8qzYoKKbkw2iLtqgzws3mQG3kRWyX1bX6SMk9Th9CGYReZ",
  "key7": "58uHsRurzB8dmtfNGa7Ca2nh6sNbvmaJRFtEyvy2H1tYfjnc1imbT2U9HQTfoMnB4dmajFcM6rJcUeVNAM5QdwQx",
  "key8": "5pC1J1mXB8a511EB55kCDFRRrGEY8tpMG7chGMKi67C8BmqSvRuniWkYE2db4t7sK699sKjEsbbTGuagNgFiBVnB",
  "key9": "vzB2LELDbMSiunVf8gh7H4r9ajqAywmJ42zfCT9BrMTm828ZfXjfYJQy79HJn8GNW2UWFtAS5DRFhYqyuz9Zj2e",
  "key10": "2gzcbeNsspTNi82xamho1ee7wTnephFnfJHTwTPv1dK1HrUgGZwbcJfzMw34TykGfTMEapYhSH4DxVW7kx9ZdxtN",
  "key11": "2N48K7p2ta1oFwD8qa8grC9nfG5Cw5k4ou6s71sPDNM6QgZZ56nNYUtX58cmRZbDD4cqsWQ9Q2B6roiTE7KaNZxg",
  "key12": "5fmir3G3xnmWXouMxEdt5XmtYDq8mt4kbjXwUucpn1otC2aubhcpzomWYNxPtuatLrBLWXoY1L1gUHVmXxu2h9Tt",
  "key13": "4nGEVtJurJcXUEdD9NoB6MiENPcAr7APjW9wooRrYmijDCrkfvvDc9coDRSJYjdA3escot8WCMFYsYTeCVHV4kua",
  "key14": "hvF4YbUgvHqSqx8FeEejoQA9tPnS9MBDvArFJoESoAE6713mj3rnPMuWbYHYp6cVKTSFqJtVYmmTnL5Gnsy5SDX",
  "key15": "2AunFiBCvkvD1VwHGYJ7iw33JbFsfzxSrKoEQm4MnDz1hvDgfZr6BiB9N9mGFY6Z2CHmvzqHXfHkvhCxhBUbFZLf",
  "key16": "35n3GzUEFJAYAXK7M4E2F5JaRjY844QXYCNb3UgPiQ4FNWfAGJ7Cq61x69MKWCFQWaU5JkF8g3Fq4AsV2Zd7zR1V",
  "key17": "5afNPURZD13u5RsxawL77fSVgW6YkisTEJbJKCMgApBzyU4WtnPK5VSPU8NhYSnbc7mYcMtwFFuDUiKCkBjbCNpM",
  "key18": "4V5bXWjJJLK53NUN7S2Grh7B2mFFzYh5q4VyjCUw9SHdbzyhGmuRTd3Sg7N3oBByf9Evxg2sb9RrV4FmhdCMcZ6r",
  "key19": "xpCy2fSLJzbfRYKWqfZTcRCd9bqz2Cybz6d2zdJJYW3hhZZKNkmUYXQc2YzEXKzNzhRFJw8LNM3eE74vhQyzRxF",
  "key20": "4ugSfpKA6ZL9U2u8wbGbsb6HTy44EKFSJtpD3d1AWC2thro5MvKRsEDjdu6iXKTikTBxJm2Y76y52s8touinyHRr",
  "key21": "5ek8fP4LJhQqiJ6t7e4ghpx2VpuSykDgsHX2Q9mCPgac7DeZWyrCtpfgnDmz4p4TJrntgYS7biFrpS7TBRgKdoyP",
  "key22": "46i2Q7LLmeSVcF3RiSCjfw51mDoF1ZpimumnfhpE8BA261xSsDwdmjZkXvGMp9xsmbX1pPJtPMneuxsCrXCfjnXo",
  "key23": "4Nkbw9WZSkZw12E5UYo7k87pQSLaEo82RtJLxBQ64gYvpSrmxdmpjuakbNR4CiNiEp29PXDwGhyVPEXpfhTbwokP",
  "key24": "3fzwqAERxzdBa1ghd68x7RhCqJYhFcEDj1uq37effpsFXyPRiowAdqNEwCPnDzrQrFfaogvxQhm9McWzC2D9r3o2",
  "key25": "KPwn1cbzit7sw69ngnTamCr2UJmuKQrD37aEjQY83Kb3G5PLoDfUinaU8CjAyrKx2s1sWmH6E3Su8v8ErkevTKq",
  "key26": "ASW7C45u1FJjhWE3LTJGnqHUXDqKQMehhrm4GjjwpsVrSuS1F4zMSwDJexsLsXm8F7wiaRTqfKTmxFzfh57qLo2",
  "key27": "5M1SjRBQKBNSHwAVLnGUWM7fkmZxToFhApcnQzPtotxMR3yj6u7Cri69GUqSLNrX9SgwhEzVx8upkU1QLF5L8LjU",
  "key28": "3N8b3iDU2869RM8vhXvLG8RF2zQcZomgdGZw5kV8MEngpHPgdGKDxhhoK79HTAcSsHH7JJEzVvQHxyz4Srx7meTR",
  "key29": "5SyXAtdsgeRZhvoMVXZrBk34cd4emXNSskuaVCnVDqpUv3T2D87jS95aKVEbmoNfNcrJguroXCsYWDgatjSfGHxe",
  "key30": "37H1V6iYT8Ae5QjcUbyMNqKG4sA3spBRHSdsGdK4TyiYhookNLHG1NDRZxeNzyqVxwaBTkUgSGfdsWkEyhhFzSVf",
  "key31": "3q4qrPk1eLeCWEz4vYhJhxqvjYRtTX2ZBvCKwQJzwpcZoiVBr18dRCRdU3ep9LBYAmVNn7tX8vSKzcAkfrv4bvXn"
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
