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
    "4zBzwnBf4f7B2UrvXGt7sKv8Nd1DAUxcSZGg7TM21ypB9U6KAXGxwdiDxPUSeyEiWMtCAAhPLpKDdWuHRvaRLBnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w9Kkg7XH7vPjCC3mQVh8hLMpLKaDs35ZKLqkvtZAGXKjKxbrKwFXCeKjcYgoWrnBzBYapi9A3touNAZXs95Xag",
  "key1": "4cXaDRVEoW27rq7RXoQQMfYekroabhxhE2ygojcoh33fFhvFXepwQ1GWTrTzXQEKEvPgoLqWcXkFQ92EztmQZGv7",
  "key2": "4G123phFy472MMV6Qremvh16fkQXaSETAu2FKAMwA8oA2LLEaU5hTVv6E17koqWn64gsCDtCt9GmUj9mWomC6DeT",
  "key3": "2EJQ4aNz2xUxL4ULy7z9fiyVkCRZEJDXSTkStzDYEVqZmqPqe6PJPbpcQH8c8cTupVkVKTG2pkWSsSc1zPrFbnsQ",
  "key4": "2upUFhgEvbqQtXyHRLNDQ5bHM442i7uYjzBvrtwuchXgt2My96Pc6j2YzNUYhpquXa6LFUv54nz2Pf8yF1KZ8JYU",
  "key5": "3hhfYwhvnPGCjKxeWpqNQoX84Gy3CujRAHtSuXgMKAF6X6KqNjdroPjeZXefFhgkSEutczmJEBo9p22VxNLtmUS7",
  "key6": "4KuYTDoN62tCvpWb7keTgsVbZZikbEuksu9fsgnJ6dVAhxsSaZNwenbm1hWvTBuWEAz18j412XzcvAKtbKWCt1Yh",
  "key7": "L6xD5EaMGZr8iZTuA91wxc6pz9bfEXQvFnxePfM3hTFWyZ3tUFYGk1u4Q5nzcbTKU5CYtyuREbudiBqvvfuw3zu",
  "key8": "4fibWNR2YZtDzp6P64B53CfkSrPzbc9Tse6YPc4G661H6evLf5ZQkmFmK5PATMptSQXUHKv2RvQek5HFTG4mTM7F",
  "key9": "3UPYUAhxeRvCemNhhiwK5XZnQtdmN4m53HME8gzgNWh1iv2EBebJCd29hrLHM83Wx6LroHkkUZjHDH4SRWebeSz9",
  "key10": "sE11iZozAt8RkzWgRcy9aKRMqLNXUk48mcqJNpV9oFCJdgFNtw2RdTCLZc7MPGqn8Z4PxLLsbizbC5wrZ4Z7qmw",
  "key11": "31J1Rjjb26TnTtcRiNEjgeeMGt9NczVz5mWiLSCHMehzdni36WWp7oUVwAZtVXcvnPYnqU4YxVyGqAAbtbnJu2fV",
  "key12": "5BFYXHzZArTELDwya2fBW8vaShCoCVVQQUdwPprpqZt4LcNbAYAahqHxncpjBTf5XkDmJMpWxDxBac1iQAkyDi93",
  "key13": "mgkd11wbG2dkkk4MBu3vKqf6krT8XqxeYuW2k6PgDFDa5gTKndQvfWRVxzfa3pcWQd8FMgZ3EHZCt5pJ9yEd4CL",
  "key14": "5CTYan6L2XdExJPZtZ6jQZ7ibzveN3vGxLE3CDPkpwKQ3iRUyTW2XoNVMk2gT2rTeLYvVChwYPcVgyMwTAVYpkrY",
  "key15": "5tWHQX6PfegghunPkWAcrpto2RkxZaNgeNpRKeeZRUcGLUNoqThE2z794svtaiQ1pfLsBY4W5UHjq31nKPFMeor6",
  "key16": "mkHVahomR7LVb36VrwLu3q1MjdzqqGo4gGj1CjGebDkchJnhKBXXA1B7Cv2S1fevgrAtL4pNzcFc9xVFaJQ2UGf",
  "key17": "3nrxwwtYyupM5jzhXsRoiy3w1Zn2j9PaJZ8YhPxSpbjNfeSngMYFVKDUvRtbb9JgozBywmfpBfmNwPza9ikkYP64",
  "key18": "4VqFn1RtUCreiJLMWB7bfss2z1p4AyK97KJrgfRsKL4Gcpv9a5HC8YF1fePnkJFxQZJB8RVjcaeYUMMcYQLcXm4H",
  "key19": "CNDcn1ZZnQ7mScXAMRKC9kxphH9DrvKpSf2RQBqJweze74ckXiGfF4wyFwCQFCyo4XKQedejgsnCjNg3wwev9Dd",
  "key20": "Q1Mp54PQdd846M9GGuCD7DAqnBrS3t9zT79yrkiCDvtK9uR6Hn6tLPu17KH2QMACNzmZUyxDJGCnT9YD4MpCumq",
  "key21": "45x9koFrYZz9ftWsFuQMsNPhAZAnvVgg3VoAU9dikYfrfhyjRDDn2cVjbjc8tLD1tbf14Tf5Ah2M7zqZdwqAXhzP",
  "key22": "2oZQjLvRggwF5wyktnWhD6tJK2yxuBrCREqn8Ejsq3DMKAavfmrE66kd9MkPbk4DMKrBNnkiUTDMfzY9NnjnfnVC",
  "key23": "23F8dkYWY5L5XaErg46ti1HfkoTiWdxfUtuycFB4ytrNWwLT1KQAPCVm3qrQBMdiRs77mbH4dA9ki5CbWjZnqN7W",
  "key24": "3huoTKuK4EDC4cG3pPLkDhGCZGVwkF7bytRaVKgkvyLzHrmwA5jXfJTAWTvxJhn1cz9ZaWXeLVq5Go74rpNAN2RL"
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
