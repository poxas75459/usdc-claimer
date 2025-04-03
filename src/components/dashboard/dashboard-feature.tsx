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
    "291NJbkcMEq2LGsASymhen98VvZePRhfeiuB3yWmRhS7evgn4mY7F1t5yh1eHGpekvvne21Sku1qpqNkyzJaNbGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gYeVGDkAKCmveHmexK2hGz3WwBYpAqJaipqYuVS8vDHcUsW8yqxPx3gMTKDYewTRtRGxXueF2AsKUmVv1FuLkb7",
  "key1": "3hWmrSHCsTBzjY62kphAGvqfXfE6KQ6pvfiUGzH35SvmGcRwtLNdH1s6vbNwodUUVdKngrGmQPdKvosTdas18J7V",
  "key2": "m4X9qt21xjR5iHDSKVjunJ7mmVmMHAGEY3Dc6ZhFCLSDurDFyxVPnZujx5CHsqabiF1GesP2F9ZeD4HkPYnVTW6",
  "key3": "2K8KKyxQSuHV7718Mfe8UZ3XYTEjvkjjHUH7ijY3jwo5xp4ZtGUyxp7odFBwVCsMiZZbxurrJ2ukdfmKeJBGT7cT",
  "key4": "5Lm11RUhvnZpqZaQetqdiCMxM9B9yEGhYUmbBpRrJzesRGkYkX54US7NMgRRoxG5h5y6NYeHUka54rMiYwomGcxR",
  "key5": "5sYCsJczu4AgXmGLJ1Q942J82kNfNPhhsumBGREgnjjCakxAh4e8MvwASkztXK6J1C2Xo4S9B47JFWVUAj79jpTm",
  "key6": "2LP69hes4gsjJSat2jq8scX5CcVcrzwCAGYgW3wabwwaUE4TmF553QMvHMjqR5dDMeqC3fE739PLxju8MJ6LWDTW",
  "key7": "2Nw5TwcaRroqoeYPaJGxzSyNqLDn3H8qCfsBzwT5TTpGBTqsPRQHgeoLYupbqzExkRrNGuUK4Vpsb558T8fP46Ny",
  "key8": "5CUcYTzQnTsMzhaYurWyoWgPJkBqHdzrsU9aCTRTH2a418cAtWx2TD8SQ8Vupu7HLR7qWNbdnFUF7n9G3yrNt6X8",
  "key9": "4nCZGiXbnsE96djzRmaHKvxjzq1TCro743rCyFAJynaGoxSpmHCz4FXcXPo6Qa4vLtRVeC5eea478hPZcovzCFAw",
  "key10": "5ePbWxzHcHtGMjVbPmXqXwgaDmCpssJYU3f7e2tbiEjj8L51eQFZpzfpg4PG55zX3Ny2V57ANjvNpDemXRCotWTY",
  "key11": "2LHkqmDZGMzuEXaa416K8VxjiHt2VVciBgjSqLTnMC53S7FxmvKFbq8sNSxZAtdnh8Eg3tCDhre7uDkde4Cd6ZP7",
  "key12": "GoFR4d3MPtkBLmX1WCcKUxihREE3jUnRmT4MPKb75sLS68TVMfHRcHtwbXSnoc3Fv2uQDGXE1PLLccQEEygmKdq",
  "key13": "iMziABvcUUMXpqv14WWRqGxt6uqCJPHZ9qr6EJKb8m6Mfp2qFqxymhukHSacPmBTWCQ3MURLtnE52AMRjn9skgR",
  "key14": "4H3m1n9orr41kLyvUCcf5ixwwbH2s3CzPUyE89HHSeN6YxDJG3t4YRuG8SnAjbjRoJwmAAHqEnfWCWwFjHHem5XU",
  "key15": "3DoMPL5uQ5idEjcnfYhUG6BFhuWtPbWuiohy6H9uaAifLq8mcXrPMz35H3zgrZWd1iUE7rFY8sYSHoQnbF3MEFjr",
  "key16": "4HVsLbwn6JqEUmZqB9n8g2VwGyJepf8ZntVRVsU3HUxm93XxkduopQDpi22w5cvhMKgWfzPoBnZ1dQicfrSgvPfk",
  "key17": "61hEkazeqDeVxah2UJ97pXQDsqrF5yEAJQTnk4HPQ3qVy92DM6GzgiXsubUgZfZR4LS6StBNgBuFPLW7CPRLYNWA",
  "key18": "3NaEAH7vfpUcLAAf186izd623CLsMfrXVSFDSHEc9rw4JJirR9ASeh3GyWu8KPZ75DUq2f1P7HFZAFzWMjtVPw2A",
  "key19": "QeYsne9GAviUkWCLysPtCwr8oVBSGfA8Dof24xqzHA9KxhZufEuQsGyqxkHaKG8wbL8oUm1GqQp2dfCdmM5AeGQ",
  "key20": "3Fu8iJ8JkBSfne3gtAprpqMMgKko8hRRN7F4ZSRYosZ6XpdcN7nfXUpNNR2ayBY6h4ofP8Hu5FyG2Y3MivfSiRF2",
  "key21": "2E5QFfBmEyyft2kz8iwxotf9reoz5TvRobi4DzQr7JMhj9Mxzntzsta77d2da66NJKYAGKAK3hB1oNk8pNo1VFqG",
  "key22": "ebYf8PeLxu4g7mbzaXtJsyPeie9oDqwoX8Yi6xXgKHSbmDzeX6WQrsCt32bi18iRVSc9mvBXRerTMVrhhTy4QDx",
  "key23": "3paSpQ81T4vjAU1gGY4fsogU7bCProb3mEChLGabYXWxg7u1wjqeZfN7htLCHyjBq5NS9FnvBpMMcEVz81erjzHN",
  "key24": "222599GjXpk9sU7wESGTs28NeCSSJM4STE8Jaxgsh2kfyMXvRc2BfmMy2uCHhhRTWZr6uiYjEo4jJWX8mPrCrRKS",
  "key25": "5HzfsfyWv2uN9Ki7xJme5syn76LL7dRrXbRHQfYpVhLcMvHtXqvDMqp8UDz3XbpJzjCWoa8zyg7YMw4nnBf1d57"
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
