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
    "2m6Z3VWFw8LVSQeN1fjW5BApkLfGrGJBEKNQdqDc1Yb3Fi3Jz7atPxRLaYR7ZHiEaBBbdBien8ipxtZ1EKbfZsCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LHRRUeyw6vLomPagEP9YnhAWQLquBt69GusDZrieP7oFAKMYFGhMkH2H81vKQMWCS3AKqnYkkCGoevSdMFyoiEF",
  "key1": "5CvwonmWxUZVvQ5TkbhSgsdsHf52RtFo1FTX6G1sRsRMqc2Z2xWCWfTgjE4L8ckDaSXYsDgsZahNjaQnCsMKPTwG",
  "key2": "2KkcYK1Lc1ggoo3Q31LGNLyqN36Ue4DFbFMeZRFjesjsJvEVkfikCpvrMwnf3eCzsLnGSvAfUPFag9eGxUbwC5nS",
  "key3": "5SRdihX57y1qGWkqtR74a4cicvtX4t9DHTZsmPmftTRVQi48wHLb6Fci4Q8RXwHWHJvwzWnkAwmXHGuLPhWjM5pu",
  "key4": "3MU1XD5V8CkfCAt1q3pZJZMpM6DyS8hacQqHpzXgMRbCdiGAGpvDy6XkXA2HHDxnXxk7wwSVuTgsRUYptfEoe8bA",
  "key5": "1zx6mSxUFsWwoGHXozhYKsh1HELJTmJwAcHX1vUMkx6Eyy6hmRBc1tfDr7csTZbBpvmJhMtqcYN4eazkJ5VF5ta",
  "key6": "meHPZz2nUo4rBXQbtrXavv1HaYzTjaCEkvqm21SujYC9kTbcS3HgVaaU8Zh4YnGy4fFz1XbeY6H46wzuG5cmtR1",
  "key7": "5QU2h6rCymfQv8iTgHiFjAwyrNHwJuMg1by7L1amYur5er1Hhdcvx56Q5ruWoeRGWWABHVdKw5u9JZTChKTa8LT3",
  "key8": "vvSCFKbLCcGzAH6UZ8JGh8C3yD5tY6Ut2U281BV5eCzfT55axosKwmwZoeu16SkRjkRbwgW3zkB88dPSLzQUuiv",
  "key9": "siVSkfTni5qUikTrCK8V91suMQGvqmJnweApqBzTBkTFmgrQGYzE699GrAJQx4KhyeJ2JKLUiWnhYPH1m2a5CkZ",
  "key10": "3ia2qcMYjK82d5TvA3yKXwxS7BJAwcf8v65GqWuzesQF2sZufHFTZroFkEK9fsHtwhL6h99YS2U9M8AxBspV9nWS",
  "key11": "4RGrPBJCnMVvynQm51hLfxZTmcWCtF4wotkp9Hpugau5gGbLYLkCKczgXUMT3mrKfYeQ1pZNCBiVbwuDwDBJ7a9g",
  "key12": "5KGXmsRZpHHf6tx75E5KJbEZDoaEkm6oREATzh3c54qP5zMkNrxdLEVsjQvNjZsxhGhs3pn6ew8oiE2vSuUvd9MP",
  "key13": "4QSJtsJvWRzSBPYDLehfUoVoXBDMCRkaKGHnGKHeXtEShtmLV4SjCgMnSKJuHESxVzR5D25YAQsBSgqQEKyi5uAX",
  "key14": "4hCNG13U1srMf5mJBdW56HxFUaVQ583fsmWBB7oBBVqoJJMeP5SPA2XhgqPaNdHmxrMR5QBS1fTf7sfYTSa9kwu4",
  "key15": "2GBoWxfZiG9icvhZcvBpT4n8nZ1RK7jm5uB791Xh3KUUVmK9UPYsLRowjEpo13ijWaEAANfMHz94ANkjvWsL9VeR",
  "key16": "wKchMzugLTBjSeQ1e3WC1deGYemTLz3LaN592FzXvsbWHbTj1zDrf9ajJx5UELC423t1XookXzBv3oCygnD1xxE",
  "key17": "4r88FDKiLF78XtsAFdZZgQcexXVzY3fHoxXLanqY6uuenxLQMNtCNsLEjqFJNJdzxFRbX6QgmwTFBCDwpbUacAGb",
  "key18": "5Tsa9VWFJuj58a6LkcTFyPcfCktdD84CgWmJTqRHHi9H8APr27YNkcLVpjx7cFHt539AeTc14gbDxVxEfKg2doyw",
  "key19": "3Fqt2FVvL84WHJ4FHgbVNQ3DkMZE45S4Mq8ico897nYyH93V9Sn3NY6VcLMnadbffyhzVMHuGSwBVtYuXuFYmdSC",
  "key20": "4Vnqppzudyz9XABt8fYjdj3B1QvVSm81ec3af3gE2TUSGgK9ShDXxnvG8qRDdxXtvHtkqdeUvizmPjiQrq2ouVRd",
  "key21": "3p7BrZ4dhiwqeMnpHHDJoScg6fPRo6UHovpu9tXTwa8hf48NS7wEWaJeRgHdDntKEvVWajb2Dau6pNHAbWC7rqQt",
  "key22": "3VqjbGefiWDcYCta4ZFA9cG24Bh9mAeaiizFDn5XqnSyDTnHHcpBxA5qVhMVgS22cCRaBYcKQNoC79GUYt5bizY6",
  "key23": "4sBtMbkTDyv4Lr2XfFKkZLT18mRDcRJ2FbFY8uJGAgjCS6DhzFq9hML3itTNNTo6rw2Pyy5bBWcNNmXaDSbRtLYq",
  "key24": "2gsAr9vCJ3mdjALfxdLSKS6KspyHZG5RmZKE19dnLtwpDAStVmhevSRYoFaPcgRCAS2JQn3BFYgXkraHCEu2erHX"
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
