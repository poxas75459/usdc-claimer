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
    "ptqD5Z4FUcYJSKesNB3kXsaAVpwpV66ZSzhSVuxkKkX3kbNNG8PqNio1waGL4iqRQx3aiqv2mg8ZmpaLb97AQWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kEbqcaLwBFj8mo43KsB67kYHdnppTMbXzsCaXBmaFGKm6riv7NdtFABkYkCL4Df6yEm6mcxEjoG1w3joDpNm1nT",
  "key1": "2XtK6GEpVg3YY4iEus7KGJwRaVHeTY17uVcPmga3N4yxcsrExeUrRYfPeYpU8gmUqpDaaHDV4j61H1WR2qP6iwYR",
  "key2": "3gWpLHutAZhGCQSrH7pCU5tXNoaeUPkjUFVGvUCFguy8ppg5gxUCx2WFCFUqjvcZmxYXofimfqtTCdQXJfBKavPq",
  "key3": "4nSQzTz5agvnTRVeNTdvjZpXHdbkXfxA7dUeJb2feU2xRu1tAbaaUNdJeVJtychYUnhZ6dKQPARwxyWhSqjDNRe5",
  "key4": "2fsCf7siTuUTYNDtowLxPQcTCeukei6owtpDPg4MnatfCpmcUR5fBfBFXFPGv4AHfG5yKTzgKTkHozQoUJ7bk5xv",
  "key5": "4NpGQHvWm1VkTHFuPUd6GicHfRTqDutw3huJYTQPJHW5NaETqrUeDgLicMPLSQnYkGa6GKNWff1prykAQ8ujNdQi",
  "key6": "aiweoYW8sZzjM2D7FcQ7u6Hsn13jvbWGbnhaZHihnyfZzN8QzrEwkhc2eCtqfycfEX9hnV8Y7gCNLYC8QbqQ2pL",
  "key7": "24nrS9tseypNDRq2qTZHsypYftmcPEHxpA2uHirv2t3qYjeJb2MoYkdGSmXn4uL5MxBQgjLNWpiQj6TmAaW55ZZF",
  "key8": "2979LeSwkQhbbbPHjRreEJJyZVy5L34NH2VsygDT7AFzrzJMzrheJkd8wS8GUTgzKRhSwKgzM4StQCn2tZS3Tibe",
  "key9": "3p3x3jajtt1WxsamYNzvYP9fj2kFrre3rqYQqHa3HGdXztxTDMMu5i12F4u8vqxfNW1ZvGskeywgzfvtouRr4npa",
  "key10": "23WHd5Vz3KjnMpP82RV32J2gqnipGt6y71rHtcuNWeoCmoqPuN73Njsp1JUSfRn7VBJVeiQVBoS1YRr6x1R45YCp",
  "key11": "U7rgcV7e9B7p1VXNhfUDM28wuQvhYenaQU1AwzDD9wpbYnUpAAC8zUwGi8Yua3icmUYkpUMDYtBWJni26Xvx3fG",
  "key12": "WKUszbwHJZw5vcMLCYaR5s51UfT3XFEaQDuA8oR3QnGSzLPJzrDWcMRQxJ1sxrwq2KhEaR5r84mmfiVe9uoah5x",
  "key13": "4gtLK7T47wi4broU2ur3GeTdxN6y9hzed65vJGyMMRY7SWd4rchdkTdYZo7Gp9jCtNRpuioJzpB4X8whT3WV8Frv",
  "key14": "3sewfKEuYUPkYEYE5zwDJ85RBo8edoA78QVo2uVRsvsGQwSGUfCSm4oi93xMerDDFhcgufKXGRY73nnUcu9RTC2Q",
  "key15": "3Pu5NTsyDdGmw14zUU7vMif6Pnf8vfWFrPkaVu6GAnhTASbTPGFrsCiEmMdtVzCcKka265PEKzcffkxYrGSH2kNc",
  "key16": "2JqeZeovucCeNLaMF5cD6o5Boj3CjmKqecbw2ShzrHMGkBB8YuKYsvn8A7mwceLL3D453KbZr9H61ZhkuARAVfLV",
  "key17": "5MFQmbTmtVUGaTNzBdKr3pxA6n2YWh1cfKhZUth5fLgJsUjuLYRXmZFzcvK4i8c9YARYJu4to2tEaRtcojH9uyig",
  "key18": "2M4BS6CPnv3xp6RB59GHmorQS6N9zRaghTWK9KunyvDrTv6JZH7py1myV4NptJCRWCBwsxu5tLkBCc5BVrzKihYo",
  "key19": "2QSokJhGrgH4LU52FVnimz4HFBGoJcYYw1bn8u8zxxXbofoff229Dv41z69uvDHfy9jcao6KLEcFS45zz5S9Xb5t",
  "key20": "jWNEusjuj41XE6VmbVT5iEFe5hgR9n2HuFcY2sw2aohRAC7Dz2eSRKbV2F1d4sYuce764UHD5zgGAoJRY1bhYAd",
  "key21": "4ugJm2rv6GJTZmjeL5DwoMa3KRVaSRL7Ar8thuzQNtANdM5Xgi7X7oUsf5mrNk7s77N2VueUFmPsPXTAnhiGCT1E",
  "key22": "LsnFYsHgAngq9mjzpkaWoQeB5fkBEUszVH2AtUzbLSkRMiLiAtHiJcSg7UVib9GNQjmBvfZxYwz93BWW2hpwb7e",
  "key23": "5qySj66EFmgdFFThQqQugnQ6JRxirUSjgmfMFPkxqz3SDXWCG1LczjJuqAyAk2fmxowfhz9aW8EaTCuZefRajUda",
  "key24": "kME3YrCAa7fhFaphRwGaH66PuMvpXLwiwi5115jiVWmW8HX5i6s1uy71b78FhNJ2hhhCG5RqBYM7Yu8bC1Vgrnn",
  "key25": "5WQd4fakR5H6QuvovoxJiNBcTso6As6PkiZV9geiRxtqKk2eiQhNMhr4hRXab8rvtphe6fpeWKHxJKYANhcbPSZu"
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
