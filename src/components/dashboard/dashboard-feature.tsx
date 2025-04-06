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
    "44xRLiJbnDxWDHV1dv8JNuCSKEhH1Gt4UiVHRnWbJVqhn2HtwbYTxitBk6jLoiAZ5RxTm6tck6X1N1Ws5STEWpUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iJD4EYdd1iEs8Wus9Ga5Yn1xQVv7sZJZemwCo7xsNvQYYADGD2gdM3MABcTRfrbZWXs3uKpoqiPPmXKjJmwndGE",
  "key1": "5ZU7NiVkbzTQAUBDrxS79AP8cKNo1H55fhUEywPUpN64eoy5SZMxkbwzmDEHa8LtadCKa2QCH5RFMSM7MxQfb5zm",
  "key2": "3fDwLnz3LEra96J6wbDSdG3qv8xmJBc3q9aNKZpQGgTgiRCfVWkqQbz3nz3qWCxQuYQEW15o7J9zopK1fa2MepM",
  "key3": "2iiVz6dbxngriCBigEGzAawdLatrYKBRaqHmQJ6wtWHf5CkXxsLrN84ykjXX99Q1up6jBzDAf8AwdBbi7K8oJ4YB",
  "key4": "2XmbfCqnMEe3AigsXX5CVfT7rZXFL6kcB7nAKfstPnnpm6KBvphA1orPvzetNL9oSyfWttHsFgjVPAMGRB9GkVMW",
  "key5": "2hC9rXvGZKSBdaCegkycRAp4GT5MErcfYenxiGtP4uEFxR1fH79mpDWu1cjEhXoMG5J25y6fAugzYH9HmwhR29NQ",
  "key6": "2NyCckUfwZB2E8yaSM8eueYVppuzL35bHTnbLwGob5BpW5XS7qEDP5ePvuPQe2ehKUdBPoNgVSFr24LW3LfXLLMC",
  "key7": "4XohrJWXQDdJmW3DF44x94LV4i4F6HGLKCntwuf5JS7p3ij5A6jKPZwbAvmw7uhyoHExfbMU3ov4VPb7YmLifjEh",
  "key8": "4Ra9cexnrZw8ZVyJzZepCtKfFfWCvCsfrDNGzU2NW5M3CBL8bPmm8SSXPjrRG98rE6KbD372EMVfEjnQDjk4nYMN",
  "key9": "5TavTAQN6nEo4262odt5tRWSqXAhFa5cCu3UhQDjqVCWURP7K8qwqNQk9Bjx2Z5yGCRyveqR4bDZWnfPn8FJ6nfW",
  "key10": "5Se4dMJtszqUpchRX8DmsxkSW3uwyMpZ5WL5zxK8BmNkSNeTipDj4abYPMkhEvbgicSknkXjzd5Po6CH8qsEu8XR",
  "key11": "2RSRsqtnoLMacwo2KVKuqvyy3jF8QwDzSUkUtrPf39yVS4mSdXXMt5iNpx8MDacwzu9tFJL3Lt3pHWwP52wTuoFW",
  "key12": "C2nopryGmALyNdGcywr43AzcEF4PCCDK6Y3bsYbvfFtaGQzjEfo11LnydJrWWwPWj9cjk53hFsaoHH43TSpqSf5",
  "key13": "3svUewmb1otQzEdURC2RYZFmmzEjMaTHJi62ELSvJm1c1Q7LYiXjLXedPm7qmASmEH1BPY4ERhvNAphBZRBhMyqt",
  "key14": "2SszvAQ5Cs3XgCp3Rcz4ZkvipF4N5JfExenJ9vC8wjyQeonqixzAicS7QXu8dgVq9NbbgdnMXPjcnvaR5iq46MNe",
  "key15": "3cCVaht4fXQamx9BWg3y93JBeF3e2afDi1aThMDYBwkXwRKWxph4a8etfL1pZvxUhdQS1zF59ArzU3Ym6PsF9rSR",
  "key16": "PZ4uq1B67hBVR67QiYJoNcDLvfSRbAiHY1KjUYDK9kKjSNpQAyzCArGnkTwKhVCCAZc56yxS8RydY4wLTRGGNSS",
  "key17": "4hSwfg6Lto9XamXX6obgsB2ZGC1miD86mSXe9euShCagPuSbsyZKK11ZvpG5M3FiHkbZPwHaNbisSwqFMm6z3CFo",
  "key18": "5eS8J2bVzQG79htTMcUj58eRGA9XpTXrfhj6SrY41wPx5q3jd56nGLrumAoFyQv74mCGmcEWc8A1s6SAppxS4ga4",
  "key19": "5aPk8dQcKmSfVj8zD7d4cGXbrGeQuRxGuAVQmRbp62Wpe4qNK8jB7ThbnuEbuZhhcFd9VxU7RKfAEfN2E3ttEYuT",
  "key20": "5yTvR8GCAaVQnNivx2wQBcZSpuP8m6oqeafxCHXaGZdd8UrxoMrLmvYAqpYkBD6RzhpcWtUDRgmkVRgYF6r4iZDw",
  "key21": "4n2Y996TBk15ZLxazQtkWvnG7aFbHt8mSoymy1vy3pMvUK71HNQqzUjyKkZCBEzfuCNuDcZQnGdKbaxEVKp4RtUn",
  "key22": "SNH6bsRuuRW9efNrveakfhuLVoo3oxUvN17eh3i9majMq2E4u7Y9Lp1CJSUCfPaTcKJg1A3vZP1YN3KXUmZgEAC",
  "key23": "4hXgWX7iu47oiua7iuU7D2qnTSZ4xaMxmUPMnB7MQNmx6hwe924qMJHSvVDrorcvTwHf14U6xvHBiGfDvBBsZW4u",
  "key24": "ujHs2F4GSHQU8oTDvAWUadpiCsJjBFVA5WPhcD5YMFDZmJeTuihhPo2o5CdJNg2GQhRNGG6g1ub6aUiVFRWKnRH",
  "key25": "4sYW4g7zMY2mNXQBuAU3V9KDLmTK7YUdTS5oN4u8RmfCC4NZpQBEj5qg7LjaDLFBgXcM8eSaYT5tynHRNPfFvGVC",
  "key26": "3RTSAEH5BZ36v84x7kqJXHr8FBrSxBS5VozNKGMCFYYjvnkaU2mTyH55AQXjne8RPGyvGRnsPBNQjByh1AmDRA37",
  "key27": "5jCTRA2vWiYuj2nAZWeTLeDRSS59ep9jJyu4NiwH6n11H1183JyX9YLxxAwXqaQ3sMN9XvAWQXuoKbvE293vsrMV",
  "key28": "2TmcqsS3pukEjDgmCR2okixiViyRcMtjZAwfZrAjD4eiGMQ41QGAaH3hsnuMuBEojrLhEY4gSJ43jpbWgUpJ81yU",
  "key29": "4dSJN1SdDuFiARQvdgMFjPosz8LWsLnxJTJQhX3Nb4D1MvFpdB5YjABkn4DVTnFv8KRooYQk57y7a9T9HctjLMvB",
  "key30": "5M48U25PSqrRZFyxdB75iZS1BAqwDJfNUy3RimZgdFyNbTsUpnZRKzD53sDqmWkin3kALxiZBLbPpCXAqfQooKEg",
  "key31": "4enXq9RTM7wS6ck33PhYsmVJkkFQawE6ZjLXbHjaHUSXBuDRFEjVErtWzwhXsqwbBufscir9aPkPjn43kni28AaJ",
  "key32": "2Ghg1nEqgC2T5XvHe7HDS2aippkWXBNRbdVG3DSpynpGV8xHY3dH5kWyW3wfHFwfCMT6YMsJMmUhmca2C8CBCX65",
  "key33": "2BH1VesnqwhxnwwmHk3P7t3UNLJgwSrBzoJx6HR6qnBKiNJvd9AjniJ3jDNboCNDxEAG8Q5YKuXysTYxWBbHbMJd",
  "key34": "juqQuqnMs6B7FtqQz5AvS3AHoManjX6okd8kMi6NFfHoUrmx1xDR5xvPEiMSCnVTJveLcYFWMT9XDaia9yfz3bs",
  "key35": "65MayDkLs5fS4kTa9Qc8fkLPPwDUhaccTGM4qScSMEJWaGzvUrnBh5AHjE61QA4yYCQR5Y51icrQHWAsFg7DMiS1",
  "key36": "27XBf36zBm5AAZHdphnSidGu5Hx55cB8h4XLRtyiDmsA2eAYR7p2dbatL8bHR9chRzDqq4hpKuyLH8ZGhrXAZuds",
  "key37": "5hWuLw3wkWWVvvDqhfQPsEw74EJbBmrZHW4JbaJLumo2yvnfVjHzNjbBJkGRCYfoyxzPLpdh3yHJBftqcSReDcoW",
  "key38": "3jL3JiQP8biL2yDMZvU5vZ7iETteoMHvAYL4bPjEehV3T9vqTVLNxhLWhmqMXcXRZinTiBuCK2HK3qnq6B82f8zv",
  "key39": "2msT5z2KUMqxeUTejuWqHFtL28kMGm6C617hyBHwnc2VCbGHFAxuvicnpRCeY22dpSTKJC8Te6swsadx95V1V694",
  "key40": "3R9ZejL18TXe5VE4MN2yPDneXysnnZu57nX1fzmLc1UC76vSYsSmQhXz9PeiDk3a2wRoN7MQkTgHNcKZPJXTJfNn"
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
