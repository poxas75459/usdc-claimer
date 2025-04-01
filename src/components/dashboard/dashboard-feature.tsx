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
    "Gc5tvFKCBXZ8N4azS8fYgoShJHMxACcWDKHizQDhjo68mCLCC4zVoZkyMwzt3jtxLxHWNM9BivqXJyZdESdofvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37fqBFU1t8rxwRQKetMMPPLYT2eLfSMEatWrsQXh3EGwMBUZeEh9WLZCuHPkGHn3zBozUQbwCKWMbCMky7nvc2qc",
  "key1": "5v5oCNQ9V7jegzW7DP38NzYJg11CryQhFtJfrGnvaqXqAv6Qa94YKz4VrNautWkjJXaK5mRJVF2UhjM1ce7F5sGF",
  "key2": "49ZLjbidoYMHBUKTCB2t2rAWKDeFyomTqdo7K4Kjz5y2GfQ1Yae3Zg33faV6xjuQZmVMf93JxoR3F6tRhyeV6D8P",
  "key3": "3AVFqKb8JkhSQDbug548AHebbwZegBPQDVjKGeeeR8BhT2ggmyMuZVctYM8uBSJwxp9pSBRX3cAZLBN8GcJojZVb",
  "key4": "5yxNB4TpTD949c7rU3DiH6ikJu8NuWLKGuNErwTKZLKinAt3zadVVdSs3JSyE5d6s4PFvhcshKY8wageEEKQdxac",
  "key5": "48r4WmhhWZ9DrYFcXTy5CfPfLS9wyHhGfzgKwskyCVRbQmD9796MYhRBnesMLJt1tLf3c6Gg3JUf1SPttHYYVyDt",
  "key6": "2Ti3yzsxjyJLkGNbTuxF3zSyBESvrssEh51CXzX47NxUiECgQALYVJyXLUTAGUhV5Yukq9GTaAMsvXs5oGD8gGoP",
  "key7": "24Zs67sBcc6kZ85UC53TixzbyFkpdfAg72arihcFNXs8SSj6LE9VjBumY4tQKwByDEEDRQs3osinba28mfNwSCNe",
  "key8": "4Jz3mmqhR2muRRLf8Jp4uWjVsv4VNcTd9L1vH7uNoAwcbJoEJrPSQqBj5qYQ22merinHwnLNwYaVbiNvdriscQvR",
  "key9": "5b9GjFtDcAxMtSpwMM1GTyLJc1Z6f7LzsDabPtLqSm3UDivQtrzYY9EUKuYSAzyGwty3CiQgmYWzVoM5GcU1AfVp",
  "key10": "3SQVJZKoxfJLUhJT3xdivYeAqpjPEa19fSN9dzbDHiSpLvt5A6pgDnS6uATGyGwQ7d8FCQvqPXXxria4UqzFB9wv",
  "key11": "4L7494kroiDyWiRh3pGn2LvD3pUTiSXf1nAgNreuN76FdrFmrFcC39xG4zCjrutVrBhH1884pSbWkeCeZxA5Qgx2",
  "key12": "4eB63EKZXrzqLDC8JPZP3LrZVemFwYZCdSC3gRGieC8m4WnLevbLrCwdwdL8HC1ZX2rhtzBMjM9npPbyaLVRqKJT",
  "key13": "2kHHsh2K5bDCNdV13csUDCXVe4FgfHnxLE1uoM2T1WSowHt44yzm6dyDbyDrV8ZTEYZwx858Y9JJHqKB5wm9LM6f",
  "key14": "3T2hSX8kbhU2BWuXTdsFh2cZa53gQ3ykT6ENqfbupMtqyF9ptjmQtNzprqB6diBdFrVENmDU66mgX8fj2sKfeCsu",
  "key15": "4HKKVfMuGdaognbBvftxbVUmarEF1YZasbsQ5truNSQM7bY751RUKz6cxXjYhhoXcsRETZLJ8xH8uqzwDit7nzTt",
  "key16": "27AdxmRWeL11yhecLTCS6zDRZ61ca1qJz1B8K2Ht6eYZYRbyWpWkYq3P7X9Q1xhptfvbHNWajKqtjhpwJL49RC6d",
  "key17": "5o2957ZGNXjCKgKin2QLVs2z9CbAHJyV21BUub1JPrLNnjDJ5RcjyjFoT836GYQY1qsDDqtH5PaLNmzoq1RWRu28",
  "key18": "2rTFjchec3vL7AFixS3X53wP2V26ZDZtoKtYPYL7fsV4Hq532zKacXd3AJWTA9k4MH5K5TiafuMMvdvb9oXT3Ta7",
  "key19": "2oTFEqJVnXMu2tPXrYxVt3pN9o1mUgQHheZCo14CEufSJAuFsPMj9CKoHbb4QXmdWRRHrNjdFyHmb5qmk5iiXF7C",
  "key20": "57qRuWPzpEzZutQ32wy3zSXpszEeXGTYLsNq5bCRw2XjeXvXQDAkgBE8xBrs4NeksKyky6L1KdADuiwnYkaHkEhF",
  "key21": "5AgVZJMjdvvhwppYbAnyaxKYs3BtSbXKV2ooyzawDm19uvtywHwqsqntUgQrAYKo6ze5k7TnFmdTF4hW9dqw9BdB",
  "key22": "44KoCa5SroUCNoUTqxYBJ3WGQvKY9gP4amUQPaytmsZUQbV88XbtbXpSEavihKJK1RiEZBY8HMkjgMgWkevjZj6Z",
  "key23": "3vVmCjvGW4rtKKzrxLxP8LMBk4CoVGPAXuoA7zRJwc1svfFM4SNMu49B7hoVm8ovdzu86irJj7d8doNj8a5sF8dk",
  "key24": "67ZQFdGPtVhXiZThVRgtR7SWy88YJUCVTGa1PC9ukBfaCezG5cjuWGiHVGjLJMdREXLTGWknBbjtJXEoydso6xLa",
  "key25": "P8PtuMMxDSS2CtJdxfG2bAVtVeDR7SFRcghdiYNnhPL8t8wGVcvsnweyUdt879Y4bxb6AFhEosea7MtnNGYqQKp",
  "key26": "2DTh3DbZniAuEA8p1Wg2iV4UVtc5M3yAFC7ZXXqhrFvHQBViNcjRkuFepxvJ8rNx23KchEZ5dQ2V9ke4mNCVPBb",
  "key27": "5RasYfe1CCVmhMM7yPQbzAiY5AFwVojRXx88aALDUA6kSrreTYtRmx1UahDqc1FbjX7rzkt2qHMAZBa7TWqJS8vE",
  "key28": "28g4BNV8wp3TNL8wXd9A2XHW9ykztbBFtfNaP1Pu4tKEDGs1kc7Fwx4RkrRWJq2vDcrhEzDdnkKtuNJsZgw8M7av",
  "key29": "5nVJyXTGCCF3VmFmReGg6692h3zbrx6ad8Kk9ETXtyiPfqJDhg5aizTAfo1PYgpMPYCEzDpUKujNcsyVdMEpAoua",
  "key30": "3ZNGQWs7c51aNkvWT89uJHNK5N4hGi7rSccVWP6mQstnLQJfN5U1kxrS5bfpyoW47bxZp4XFuWjLLPM5efVGDvYi",
  "key31": "2C7xn9eyakagN9Gy4DyYHgxtyGnN512gteW5BXaiXS6SGurWGZD3W1XuLvvqqcmJQXNnCkyHgnFPX78cceeW1QJ1",
  "key32": "Nor5GvogycmgdCxhLDgzcqov4y4dgTmtMQGaHXMS6Q6hsWPYype9MZKog144KsUY2so7mU7A5JmvhBEGxvuQRyb",
  "key33": "2ZrmiQzuhNRe7uepb914opc14zDpcVTuHCTRtEQYQ6tLU3xVUbKLaqgeWi4EHRzq1SSF42iMk9nynsnYwUUCnD6x",
  "key34": "36rmpFew4gnjTWBW94K76xQsaKrbZ1ZDkzvPfwnZuKk6UHBKgYCECyG7fv5KZzBxY9Z8eGrXJ9zZ8wPnQLC4TSd8",
  "key35": "tbq2qo2Xd89sU1QoAJxeYdfufUfjHDhvQkXcmoXeckwtxDfBVPYFDhxNDiAi9kEEsLYREceg9mcWkWE9DxDvyDv",
  "key36": "4fX7DSYbcXd9TFBYv1Nq1F9M3kc5wspDci9wrprRmR7id4asdGtrxuXGxXXRAY2okmuKrbyJ5FXyFZcLrVHA9T1a",
  "key37": "3Zg1J54vhMML1P7RBn9WDFSFaGjG8icmcxnMdRvA3yXoSgTCMRMZLJz4ALpF8KYpr6peW9voXbvFWX1ZNpcefF2f",
  "key38": "25E1h2PaBiCRJ2yvxAro65pJ17BCdz7P6pA318ybXgiPxhNc4kvw8TdSXLU8GhMUSxTtL3oxbsWRg7Qq3gHdzKwK",
  "key39": "61gCrzvghS21txHHy1H4vsXFHGkD3ujdeLkQP5HJEoh6kX4DKoDTzExti36oHUfF5e4c3jqY2gS4Y9wHAgWgZcph",
  "key40": "svRHaPZcqrLaKPFxqn8TTU1QTBuF9SjK9FMWnd9qKGqJhgPtE8j6xF8RwQmiLMUnD6dDwPViEZFztDv65H45i2J",
  "key41": "5qzPd9SpUFub7S9e6Q41cVzacVQPDTTNHQYodN3vvNuJLTHbUNaE9jKRHLm7nXJLqeEXJ8UmRkogv2m1aJRUZjcA",
  "key42": "1qUVCbdWKRA6qh1V6kVMSY7XktwY3zzUYMMTX9qz3XBPapLE4ZFxNnhTPataum9gBKPLHgXj9pVkkBCmyFpYXsv",
  "key43": "4UErYVqkUwN9cFJhg8Zmkin2JnEiz7ewQz9zf5eHnqCRTurHBkL5vvxgcMJZHCKjhMBQV5VuDGqEYK5dQWxTwx8e",
  "key44": "35w9J6HuvwnUWJBDFcuZyZJv3dGhLg656XNSkoGUFob4ph6LSzd2cA5BiSq5WRwBAfm2mDLioGus9tJgqU9qnKL2"
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
