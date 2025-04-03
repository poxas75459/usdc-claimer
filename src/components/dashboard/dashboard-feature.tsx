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
    "4vCaNuM1jqWtY1KvXmn5QZBEFnTEDsfHthLun3KH5KeQQ5PuJbozgG5x9Gr4hiHoKZsbukV5Ade2ZvYee53CFyY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xkrf3Y41cq9NecQJtwmqxNigcRLdyxSp2PLvxXgziE5EvoUanaUEedPTL6dCBgPYXjK8HVehLoJwvepq3tHp55f",
  "key1": "WUwMdnHEGzjUxyhhn4b1fjqdu8jmgWXQYNxDEi3GpuwinMyYhC4Cqyh5fkSgvPMQkjXYVjix95sK3LSNajAHBzu",
  "key2": "2UKTX5Jg8ET81YLQsKURZoakf2ifp4ytQCsk3viUtxXTqmNNewYP2QrB4wqBpMHm2SQAtjP2j4fM5DuDgxcFJtGB",
  "key3": "vpijRLk1iq9WiLsN5ogGUVTFVwKiAVJTHv7UgGWJhauboT9DNSeZUorNCUxeCQwLpGLGpwkbghaSJwGKrFKqgZ6",
  "key4": "4No1XPZfRFk9TJR2o4KdHdY8pEx6k2h8hpSamkeSaha3grN4eX3VYdJqcE1dU8LNH5dJvGjQXhkBjPZXSi7bMLzZ",
  "key5": "3kxEwu27XdcGHk1WrJrPzJd6J1ypfnx6FrCmR3VrymSXcx5pMPXRo72hLHpiuUiP8GfJtuxpmLLSCbRZc9VpbznL",
  "key6": "26h8zoq5VkkAbPFxLiv6tHRQEcuySLS1Xfyx8EpFmD7cGwuikSMHb1BqRZrNDFpDbaRe5J4KzeZ6KWmKecQkQf4T",
  "key7": "4th8zMrDB8KNcixXAdZJLCBieSnFhidPmwofSnK3XKkvhTcVTbC6sQUFfiv9w7PFLznYD9KBTeW61CLMGykYQ7Y8",
  "key8": "5g7MNaTBr5nPUjabn2Ai2ZejBYXUXK3Pg8ttJfcravRZW3JZvrvbLZU6oUmi6ZJfV3PFh3Wm6Rr6FbWySiyLacex",
  "key9": "4nnWWjedwevKTBfjn8fhvBzYi5pDpUKr4BiJoSvjyozmwHE1vWxrF39tPEoPYMYcqKwtmpcqJHmvJvqLW6BT77eK",
  "key10": "QCzLhA29F7MrmhuVSVpq7QT8sdum6RnP3jMGfjH4uxjvBpVNg8SeVLcRNnjsfQ2Z6877G69JK2duZRz474FXaUo",
  "key11": "3QdcwCFW5h41eatqUMozD8o5HGs6A8xVxSHCuJBUesD4VKfnXNCRZP1cmeHpTA5KbsRTDX7tpiC6Dnwr7eEsdSv7",
  "key12": "2K98kopgHhm22znN7gVNfk6dYmq7RBrtt7SkwJZFw6TGwdLDnQLgMkMh4fGQkK5L4AkP65TnFFLPX3opBSpJYWas",
  "key13": "5x1K67BDFfHp1ggfMHNpAbEfm74mFtqhtZ7M8RMUx7aq8ak9et261VkJPwfGNLrFuCATYDg7QDXGoqyiQDQD8hNy",
  "key14": "FYyyxqYQsbkddpPpchVdG287oHk1syKr2uCynozNBpry2jb2QGey4RDYGDyGGu8FQ8fSGdpZfbpco34HFLWsfwm",
  "key15": "4ZuKfV6WeS4xWxWYoz8aVuXR5aDQgxo79PZk2RaL4iMoCQ55Si2NrwQPtjhPZYUAvBx5KeNECReYXaPq8Xpxh3od",
  "key16": "fk7m9C9QKzuDVHAx8DgJcCaAgDRNKiw96A7a1JZ6c1JSN2VM8MRzHBrtCSZvKq6bDhkCXPFcCBTGne6h82M4yRK",
  "key17": "45mFfKfEbxyC4e7N2cL9duSbZGsYT1RppZdhKYfvZnBkBucNSbwu4tqTPe7ghKbVD3fw3fmo1xUsMBuVu7yfvonp",
  "key18": "4QZzQ31wDzvbAx6U1omS4gSKSfykwoAgmaHmZUcZmrxPigfAUtsnJqjWrBsa7tEdU3qfBe7b83Y549L6yGp98pRc",
  "key19": "3y41Wp6hGvuT1VWx8AMjwfeo7jyq1v9CZF7Du3Hetfd46qKdHGyKb5YggKJhRqjhwdLX8F9sBTXFhVxUQJ4JioQ9",
  "key20": "n5weYemqamFZz4Rpw57dSze3VNcjyck1KhAFcSUWwx4V4RFAU8xMFkeaqyhFTnQQ5Ub77YKryDb4hcfP8yDTRfg",
  "key21": "2G5oXkGcL5wt6AN1ooZmauKCt2zFUE3iWPANuFkkmH92i9YTHm846vKY8KZXF1Nb3cssQbxdo8zzLQUoxU2jMzgq",
  "key22": "2zeuJgtyG77D8YruaP3RFUhMGhcPRFrR3AjyBcyPMjooMqHtuYJy8qtUpc9oKSyWJhvVwANPw8XA3yi6zFFLeeim",
  "key23": "2y9m7rz2ciPFYSZUVLCHYCn6AdYJJGuikkF6kaGJsAMkhtDakVkzGbGyMVYQLhUy21iSDutyNuauprePbZu1mVSp",
  "key24": "4Wyemxsjf1D2Jbr1GiqH9xrkXMpzFuABoCskkAFsyiiw8qkuyCHs23KaYSRw7CKL8R81jFFsqCtH8iSUxR2k48rS"
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
