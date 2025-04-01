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
    "5h718jE9xRUrcHQHKVs6Rk7h6R9pUbKxPG9WWMAUdVSr5rMpBDR9eQDVGxjT3cUbbUzrxqeXrBkixPu3MdT7iqCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ahbjK9RpRd1f7jgyrAcKWN4bUbk8QNqEEUYNhXLgKSWN2pyxD9fWVme7iSV1VESbytq4bBV1Ur4aYrAR7kUn9hy",
  "key1": "5SkgfgiRe3hVQNS55dMT8pZZN5kcM72L6arpTdhSswxwbUkKrwj1cwnrrZPZwASApxhpjmZZ3oqFGsya7f5yXs7B",
  "key2": "3TrurMNQrYQap8aw1YfizSpYNVcUirfVKc5zRjKuN8rHccmdTXdM3apYRDFmMY7D5AjGe9ycsiMaEHhrBoyfJszB",
  "key3": "38bcnBaC335Lh38r46da5kzxCwZDuSDmXwZeZQWsWXN1AqYMweiMzsqYteioJeWYfVSrp7A1ihiQKWMYvbgdkUVv",
  "key4": "4Gmfk5KWfo88s2c6spSmfJ3Z3pnQRABQJfvRzCcywwymEeQ7rvkUnDbTbo46oA963gZJX71LrerhPLSHrD4Dj8GW",
  "key5": "2dbuWRgNCdQGvSEbutGmaNXoobyupQhkNvxW1Jw75Lk3b7aDSB1sBUCdXxdBSjGLi9z3ekMj92k8ynXWTyYxJ6T6",
  "key6": "MWEU5X8KGuHZ3PfVzW4soH1uPZPyYXemicqogdWi7bkUZxLprzUv72BpESE5JjMVBTUzMdoZX369Pf1x7P2kfrz",
  "key7": "5DhDruxdzCGiyk3B4Fx4caqxE5FLXqS99FydW4ZnKrPeUFdSrRK5rxfhsttm4pGoqmG5mQMhyavVUJXG2XqigvP8",
  "key8": "4Z6NSyAzHha7TNzsNq12hqTxWVRSRWWSMpT4zDnw1kouTNppuXuBe7kmPM4VfM6bn9NG9VjCxoGdoev4pTa2UjBK",
  "key9": "6Q2odyY1iaza5UBvVJuDQxLs8ZTCn596VSdLYsJWJ7KMN4sTGFcZXbJCbSnskdkJU9V7DCpNgc9EUVTS4VhFRkY",
  "key10": "4aPCjJSbKJ3J8NetuFh6wmn9A3GEN84p5m8qvz7ns11ZD2vwGh1xrc95JZezkC1WdFMESTTXqyv8rmVGiyjuzH5J",
  "key11": "2DPqGmjS5Zug3QYBhc2Vs7Wpr9cg7KcPyZG5qcrB4stUViko5YcrHA9b3FYHxyGb4p4n14uqjw2GAPCi47g7DJuC",
  "key12": "5iMVzbEg6kUs3ynzEWtAfXez4pLzG3TnK3d8ukpf15pVJuh3vPuejtNM87sAGF3sSUK4tdzFkRyHt5e1ysEiYTqL",
  "key13": "5KkJ6Qi456taUCpCtL1wirnc4psFfuAsocaykbpfUJPiVJr9ejrg6DLw9MGzp2xyBy1BXEtHqGxQk1zxreZUdozv",
  "key14": "5W9HWBSyuawdbk752jGK1Fzn7J7wNAojNV1eCYPT5VNH7Z48VKk5jvWY9ASeYreT19djv45iftr2ppGyYLPUZnYD",
  "key15": "WhnuAcLeCoVbigHi1whYiWFJwuRBV6YDdNGpVETU1VEcm2JnqkUvtKmrnGHsb4aL4iDauTFAuyYoNKDJZwUPnSd",
  "key16": "3QF8tcDAYhGwriK7YrDdqhQp7APMS5Tj4pZUqJVU8WHAz4X5neL39KZkC79hcx9poYXXKbdaU3qcstomYP7mxbjC",
  "key17": "4JFkNuFZNUL9DXoseJe7RpKx6ummXSBhzU24WbFNFbC3sRsGXNTQg99xm7XASJkG737wF9Cb84pTHVCwfFVdoytb",
  "key18": "48H8ysYbw7yMNTDwGhY5dGVNfuvZmt913ouj7GvbYp59ZLpTrP7KENMYkEhzzBi8GTjULjKuqkghBP2RSfSS8pXL",
  "key19": "3gy2rwKDjVFft9s28uHvkGbDgeYzvCbEnMzPR1LQgKFYYgeUiVU32pFQVxfF3d5qoHSe3sDqrZrhFqDTeQtndEmj",
  "key20": "4GrQHV6fmyddMgZCyoLg1yGoc1s4EhMfc8VLypqKEVCzgsXWRbVb2M39UPFhMdxRW2dnjy6RdoZpB9D4uXBuomci",
  "key21": "3YnS6C3uL1onDsX1RTbYHJvnyrrVdHCLUUh13bLsD4HDxNskkap8eZi3YPMMbFipC2kJAqEXEBt37oiR6L4S8hgH",
  "key22": "4LaR5iLzcHQKeHeWnoRR42HL5RbcSmUZKEdEAjSAVrZSuJVr6SBAdCB4acktgphjFwAvhVkPhdMEdkVdSPdbhk2d",
  "key23": "2imaQGJSkWGPgdj8EMwJ7Q6b4TiKyKLzaK7knPn9b4MB7Tky5S4DaqPApqA64wpt3ThWXFjPb3E9mu1GnyvCrt2b",
  "key24": "5Tr51KAgBA77T5U2QAwig1nLQyuswrjtStx7rH83jBqqracHeTSLbHkX9WhE3j5MZtHCVp3gEq23cJ9B3gS6mKKg",
  "key25": "3VqFWF6q89z3zzUwJGwpy3oEE12TEqtJBq3PWgceeDi94vv9Q1SuTPT6bjMZWss28TGpUh2kpWbTDHNiU5sgWuJw",
  "key26": "42acnJ8HmChbvxEW5ZdkwMVpie9KJruFB3HDX7DBHurJzdPqFr9PnoMFgFtzpuJ2JZweV4gXa4qUtC57ZzkBfTJq"
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
