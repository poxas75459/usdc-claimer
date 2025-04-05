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
    "2XexwsEnRyGprpjgMFXWN7ycZ3SQeM1C4qzr4Ac9rTko67KAbm3TVgfBxuHZq42vPT7xvNo3jmdTP9tGvfRQViiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tjVsngdmdTAW5x7uj1R1BfuqPck9qckppBEgemSKPGGxxPnfkeFQ2BaYM4C4nYhCLDM6wsq2cQ2vfkg9jgvcWKp",
  "key1": "4oFb7ezjmdhQcchfbxzANCRbxTUUuLgkPca4Y2oKm1nTgtGF3ZszYzzvHSrQxPNEeAvmyQ3NKjsYEKjN17dvyPiD",
  "key2": "3w44GL2eBgprAgBzcrTmxFJUkLC7HUwoGAH1eJvSTuzjv9rXgBia53Nrq7spLZZtTxcrgQtezXXFvxG1fCQUWdnr",
  "key3": "3F8XbJkNRF5h8eh4egbbZJR48aKnRK3o5gJ3bTeRaRUXwV3QAsvG9uARt2PH1Pn15n2kxAybxabxkHq1yx9mVJuM",
  "key4": "45YwZduWnUsWL6JMMr4T93PPWk9KwumJnYE3VH1agjZtd6i1wvQP1aij1fSoZXaXxYmkhXSzvN3eiGpy4LRWSKvz",
  "key5": "5xqZ9Sr6CcC8xxicLggWBE3ajWnjrqhn8JPoVA8nB7jVJYqsk8ziHEEuhgzKU6W3mpfzKK1YQFwnTdTeH9J6YVZx",
  "key6": "DNKxg7A3R7a9g8Ye7pqiTPksuC4eYbgZ9uV6CTD823pktS1mJTNDfvuBJSk6MDJMd81w2sMnNtLKbmLJW2AxWy3",
  "key7": "3qYgPPwHKn3XNSPVU9UxeWxGorTYxzTm6WqxBWUBUvWeJYaaBU7TyC7BPNJTRpUgLPatUzh7SbYigvj4ZLsKSZAE",
  "key8": "4hZVyuQ1xxePynviv61Ctv3sXibdZmgc2Xp9HZnnnSrdBDiSHrgeVC1J6TLUxpXVzJCm2AF9hw3HgmnnoE8TpqE3",
  "key9": "4GjU91aENmWLZuU1XBxV15Ed6a4PphPezjdG9JytCR2mxxSJ1jtUfrivhZ6sb9P9XvJ5fnzuXSYaBqp2fCD54SLJ",
  "key10": "qBcw8RCtv4oc8oS7uwoLBK1ZLUVBPcE2roi7TJPozSNTDAuo7bz3zyrApf35CDmHobMHHiqvSTCkGgoKmFrKGUv",
  "key11": "5Fh5Tc2sYZrigmp2cy3gYt4r9ZPMLMadUtNH6bRDhrrFxM2NDnePjobZjH8E3EJq9mcW3eGDTxRJAWDSEF6eFxjL",
  "key12": "4DDi8rA3pLYzSYx6LnUDCy3WFmBq1EXsBThU4ymdVEgKsn8ZDE2cY6TcZvbQLM1vF2tEWLjz981MNrFK56GDJYw1",
  "key13": "4rxoFLGFhYqt1jHa6sHP78xy8PrJCMnPcuCXdTsMmxuEuwnew81chGLjQNKdtAWfykiiTiVwRqCyQEpJKW4ycfad",
  "key14": "2VbrrHSPJgjwHigZXToTy19LFSEjqEB6HYBnY2EpeyVdARzStpJHkxsVorcnukrwB9MV1j8BVMm1BaM3CDLM1i2d",
  "key15": "4wwWgzWxnztNwCLcfBGfb489PpjWyvEZg7jnsKnqrCeH3oZPPUx6q492bQ62bbQNeaH7WhhSGopP5CnW3HijCWTb",
  "key16": "41Ti479HcHR4JPHqcQCRCr562cw1K2k9Y7nECo25hP1eXiK9Zcho3cUTXW65sJALYQXtAur4HgBm2iMxjVkKr7cL",
  "key17": "4KUwDc9zX3jHX25Ct9yyxcPNt26gZe4AdhUxbTAEeWYvunfRyEyKCL9PopqydLFRrMDPEqq5T5TBstLkP3S6mdWP",
  "key18": "2fmsApTXNswZD2U5zB6iqMQyazuuP9nuHfbuzyAXQeWTQ2NzE1tVZtVTNx52PTBVdfsAieB5WTJqTFyJWuXMJTHC",
  "key19": "2J4Q7WvT1qvwEKnX7UtZpzFaGa5SjACQ9pYNh6NZ4VVhjpUyrwQHsgH5YTnnudrBa4VX9KPWJvk3qLwoMjAPr32d",
  "key20": "eYH9CbswvHEBfKLRxeHQiUnQdW4jMte8waygstscbntL7daF7YA4nsMD7WfVW3rpcz3hicAFP8jqK9wfrJ4M6iu",
  "key21": "3xn9rvn8KjFkcw2hSPBvwjUkMqinVQX9n9hMPwYcxr1udMFe9KkvwPf7Kep9kaftJmDxszPEvQ36sgUUpUKc5pJP",
  "key22": "3Tfn7EWmuf884uvNJ3cWKHVwTTwFz5XRNrBPJutRvhKj3JqCZbbVsYe9CkGFKb59nGYFzaewF5F2ZHg52uKQHTnk",
  "key23": "XBUWEFLak87XCTuZU5wYR4SJ4soH7ACZszpGQixa1eAigrBDrkBBK1XaN4kzz1sfBFiU5SuKALpdCYJeu6xAwec",
  "key24": "35TyPYJxpoE8G6S8ZzpiQn17pSfjwmcZPL5hptimzbgRxjXZRqdspXq7cgRn6BMmTTBUh9zF5LwswQ75AtCcUAvj"
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
