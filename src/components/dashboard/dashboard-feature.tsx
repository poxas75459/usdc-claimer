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
    "5jnk81ubkWnesgg1Fpz51JUGppkS6qYNAWWJVVc4a23Nzv8n3z2yZXmwfgaYyGuqmCjkiykf8d4cjqhp7mF3dmNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZVppFJrucVMMtKm8jpijAKacwmJK5shg69yYj5fjQoao8AxQtniFgtaKqPgQ2rTTDSmkUiBo3FgDCSM4bABrPyJ",
  "key1": "4RUNQoLQRN4hAXdf43FYt92mktKW95mYXzDMSZQ5niKFmtSwiHszfUGZJ67QTjdxdSyHwrj5tLJTjMnthuVHD6xu",
  "key2": "5pPVoomA9aopL27BsP9oq4ZA8uSqs1UzeRh6imP452rDSqrqWQY8NUT5CRA6SmoB85bzty3ZHkDwA1EYhEexwB2j",
  "key3": "4wxYGea148iVSjpu91uLdsBxNw3vHK5KYU3xKupRmjqencK8jBLpM7zcw8UqtAtuP4JEpGqhCZNx7y9oxLL848iC",
  "key4": "2A9FTxTzhYUY6k9y7qpWZDrJ9uxG9sSXizjyUwYZaTr1hHygp1fUwdfUBSEnkkT9fyUkoMeKTGBGkpdke3xDsQbT",
  "key5": "YvZir1yekgJFCYNXb2AKSF2M18N1dqNBwRVeb6W7JFh2T8DB4xBKz6mWXB5gZFiCf1busngngRfe4bJnU5Q5mYh",
  "key6": "2LkSEvJ4iFZJew7NE464yTALFHYpiq8xstRfMjAviM2kCE7sTzwp61xYbe7sxfL6zhpWU4mqdHwqYePwNTPsdKED",
  "key7": "4ZEfFpwv9wS8bjC1eKiGxD9aph6w17PtnmwbDttMYW6eA7hEAkjdSYzXqbBg3HkhPw8aKdFu47tLX9Xo2HhcvT1n",
  "key8": "3NSFtjWNSF1bRsjws66LxwUXqwadKyK3kQQqyPtxqML5r5Dk7GNj2ossyfqgxKT7CMBNR5FLoG9eBUWaAvnoUeMG",
  "key9": "5auKnRsbtnLme43SY1HuwcWk1jw4iVipn8JUaoZRJesykbDvhKcLkZ6nV3eSqzYhdNUoQZ3F8LXMMnYmkh22Phy4",
  "key10": "YqMa74YYfUwQ6pvLSHLRy1MeccYGYRS9tsPwRxVPPzfGgRyH9qiMdANSh8PjRTKZVJBhEGC7DR5SnYwpUi8TSMs",
  "key11": "5871TPKSbWVKNByDgvJr24pWmkyYqbbZHcJXxd2PVsMGmjFYNNzCuBLbi8E4eVAswBXaq3e1SL8iB3nvYwxb1pUm",
  "key12": "4Rra8xZrHKCDBLaL6rmnZJ1m2owzvQmaJDS29LPMDVH4eC6pq6N2NoKMiqtz2tYjXV7pYtf52yEgsoRdMsxJx91R",
  "key13": "5SpHgLXjUkrCf5DCnsKirncQYgGbokqDej8ge57cmSTmJuQRRwEtYYV4V6sgQ5AYsJqV15yR13aChy489NFyRMn7",
  "key14": "KPutWsuWLb9EXDYREG9tRJiPRMFfp9WVUpxvCjXWtG4WAoG9rtNUMSLLyDptF1yioxs4U3kdGonGRdxhirTbAoK",
  "key15": "21BRF2iZiPVQToWmdGHL2RC9xAAtyPHq7dEqQ7BvARDMVSakotMMo4hAdVFCJJ7jiewtjj7pzhYJ3eVMwNfJgXEi",
  "key16": "5cG8QjZZ6fXtVq81Vr52hh2RHXuEYXoDBH6XVDuYNrnGAR6cin714xpqAdQBTSGMo3g8m65FaXbWCKP89QyExNLx",
  "key17": "62ngXCJgMEiLPkqDFALmkVJg3imiSSHNZq1d96cZfvdFfgBXrUcsVtVpJQCpAnZyXfhWizL652VDDzXoLeu4TBUs",
  "key18": "3uxqvytQ2WejPrBRfKVffgH4tyzoBte5gfpcm8awerY53UbnYffDz3gdVi2NGTEvTkLT6bEjj12QE5Cho5zwXwDw",
  "key19": "3bYKb1C76WSLLEmDBSfTE142LqdMWuY9ikMDcjWUeKcFstdXmszVs2cimLPKe1kjekvKmwVBBf8mwcSzTC9TAbys",
  "key20": "4mcXVkjdUfE55gUdzqx77w2aRTeu3nNuX33qRgcFh2LpJBhff2dRY9FcP8DhNmxNBawoikPADd7gVdmgpe9ME9yu",
  "key21": "62QWkaaRG7C1WwVAfmbMBhUsqN2Gi6CEz9r5GCBc1AbJnBaj2QoVdGMyMszEHvK8XKw9dS1xYQvmvULSqHyhUtJY",
  "key22": "2ASsvxGMoPz3NGuKb7JX6kboGSctnGJnq37cVHNxiuzf8SmKwV2GWtekoGHTL93AfRLErMNJuXRkogZ36uQqcQcs",
  "key23": "2AihRc2LLibRFTo83jgEs1wyyPNur47vsV1rLXh4s8mghzeHVRKFjkShSuxua6XsxmZxEWGgG1yrAdLxzNLUqSAg",
  "key24": "53ZMMkrK1aqg1ijJYBxMtjzLf3kh1bMepdnXUMd5aV3n3rLCMFoGCwN2hE1RB9n7yLd6iqaK1FecGYwQggzzbHZa",
  "key25": "2VYmBWciT2y1hMsNYy7wamHfncGZfujEbUwTUBw267rapCj7vD7kDnUd7YBjpkrdDMXVEXaHG6bR1WgpxpX6WkhG",
  "key26": "2XKZmHvehf1KcuM5aXatQJDTFwEcBwFBoo881fcy4WTpVkGgXqoCCCMc7xhEQrRtq1Ljv5NvPAHZNdiEjdNc8Gu7",
  "key27": "2p5Xx6n7iR7mQ1Zyq6XRJ27kFhrKrhSBR8bDVDcBBAVphF29VnG9DD6jPc4KZi6VG9Aah36FuUQjKwhtp66q2orf",
  "key28": "4KpqE7eSTeLsPwWT3RGj1cYBQh2n8z1tRFWL6iiaTLzicrcoJUbDB4xbhJmyjKxRPd5f86d5abihzxdD2wq4PAjK"
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
