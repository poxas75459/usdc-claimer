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
    "5HJrK2LAgyNaFg5CTnQm7V1BQMCNYvN7VaKruQcmeTaHWoMiZumXwi5dGEa2naU8JS1AVrbPQqKegZxKQt9bWE5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j4o3jdoRPrdZEPyvTiXhvBegEFf3MLjXzBFQ8ueJw6BQ5zLdGoRpmmXVTvhVXKygM2H6wuXEjQFuzJ1DLV29GhL",
  "key1": "ojA2eehNQ64DfwRaXHWUadN96BAsQrnrNj6APNLMCmvrDSTPJs71HRafMD1xVEPYUd5zriKnJK4KFRbYtym2ANE",
  "key2": "ydWdMjYxMYMhcSzVxXjgfAnp3ph7VRK6a9Dr2KmgoH6JsRDbhcucMmP6E7UargHa3BgsAN7wXJ1N5xD16Dfu9LA",
  "key3": "4ZtwSoNTbpMhqctoJ83m9eN72SZC1RZ5dNyc3EdpwsKmKuRAWm6yjGKozg7KQAmTiQkj5SAH445fTQA4pBkHjQVG",
  "key4": "hzxJN7CkXxf9wgDh9zMHW2PviYYrpDur1LitEV12EHBeSBkc8gPneVDGZfDx5zv5SS5tuL4F6viG31ThSjwwi9o",
  "key5": "43T8ieRAQ8RNcSQxLECrJZDy2ZKBmGCecXfuJgSWPfb9tCGS3p6k5udhMAnu8f7qiZt8HjC8C6SXrZHYQvfDfgYH",
  "key6": "4PrKi1FzUAFSy3vZJne6N1tdRaYy4jptS3wDDskpprqaeeZh4n5hn3TEVJFD61ixAiuA1HtJFWtpfvuNx85yF8Pk",
  "key7": "5YXZ65yCUfqGnKh3sG8Cgp8DjJ8hhwRzoE1GhaHLbkJSQ1eDe9SLnADbaAL79HLhj64Z3FyiDuqeBmRz2h85JP4o",
  "key8": "534zhEVFxSqtfY2uvanrEbex1iYVHQd3xaEzpDogp7BD5H58mDmXF8gtu4sE9tKuLgq8X3Sgux3jPJ2itMkRAJnr",
  "key9": "iuLPB1AF2NE18x2JnTmXDVDwKAH2euCVyVtjGEuZehFxRQ6tKAQFZVSmR37jbiE1QysjBESrU6BHxufzsmvrtMj",
  "key10": "5CLVT7K6wPfCNE4gF57d3Nn1xDuu9p5CfdfPAKBCarQMaHv66Fp71iMCNKjJD4kpeLpuxJH42g6YhYHj6s5kMCas",
  "key11": "4EourpgPAAqQdRnJhDDs9Mo1LtPntzDdL98bSYwNJosbrzj3aBwxtFJHFotQW9WMyEVZTACcoBXNzgspTFsegNtZ",
  "key12": "2cMGUhXZEFSdWt1fm3Xi6LugTLAqXCGm9Q43YcCX8dj2MibrzyyR4Nf9noQoDUTfB3U38RqFV2Xb1EabPo5zHqQ",
  "key13": "5mNNWxkz5SMVDXAap6TPpJr6ZUazxxXvBWPjYGazLge6Jk6YgFeQsTrHVd4imJM4afiefKzdMWdfyYxGxbRDg47S",
  "key14": "4T8V2bom3iWrA1iJvRS2SNWm1eRzmfZFE79YR9mtP7SWvUKTZjikFCMo1BoXYMV5rTaYemWEEmxY7BFffaAdLS4n",
  "key15": "BFRhBMiakNtv7H62tecpifmEpRnh8jhgpRSeGC7MmvCz8tBHqUxwhR2Gm7T6BphVLo7zwzeVvKXLDKmiLobXhsV",
  "key16": "4cbJLjDoBnQbrCi4LbrTRcKdP1ircJHYBG6RKH45J7vT36DUF9LJCV73zJMeMveaAtRiSesLbbsZcLThnwgt3u7v",
  "key17": "egj9e7SB4pwZhTHXzuRaHJjRzYJvgNytVoNQZS6WP15JVsNkLe8MnP7yo7stnobsQWPSbdBgMsbjb65NoQn6uqU",
  "key18": "2HjTuNAnTVTQvzPEL4jFRrHxH8DJvwjqbb2Uvey8qsoL9fdsb9ZPgUGPTjycYD9ohrG4ZLDV4kPBcpn9NLL5Gp7b",
  "key19": "Bhd28Npa7QLaof7cFJsuceNWtCaB5xUCEFapz7Pp3fQQbrfj6WtFCMEBNnmdsipeCdA7RC6sEkMcrq4iXaeYZtU",
  "key20": "5G4Q5mfmihEVaaLuzxzmvC6htVroav3CfnZYHvSa3MNKatH9H7pRDt33rQpUcD2rnDSoSEwktTnmiA5aeSSDh3So",
  "key21": "4DK2mf8FLCbiQUukPnsk51ZRNVadajY6xgD52QZb1K9Fp5BPBdW3HXwNRWP1cN97wD84jh5QkLvTgeAyFacSvVPG",
  "key22": "2KW4XtDajNoNyq6aMF5tij3NLECmewaAi25MPUo444n7ZQDdechBcH6dMa3hfXPJNHc53Hhhmg24Gr7gs3cdo8fc",
  "key23": "4e15eaGtJkhBksxPXR7hpryksGvT4e5cdfWnRqGExSDHN98RRiKoMGdJtj1WHThkmKkH9L6DvTA9Mi6Vo4wjiG65",
  "key24": "65t615GemiuY5TsuQujwoRYuGHJrh3GQBC4drx39hS9GTQunJu7CRp4VjqJWmGsDtyqGXmUw4AXpJssBUEH49agJ",
  "key25": "KzE6mEzBQX7SWMDN3VUFRXqLVcB1XCifKBEns3YJPsrfTovZpcrVTqcyEvANHz3PYWKm54PLsxdrcBfdx7JANpw",
  "key26": "5qG6MjWCSS94jTnZmbFhJR6rTwbpTLQFfrGEdQDaCFVMqXyo8ZeZf7BYZjwaRGVF5vhqczXAtS81HKoE4t9HiRB2",
  "key27": "2SEWVSpRNpnYnjMUhnjNB2xSZm92JKHj6xuCt1VC5AcTEmXtbgG64Lm2bo9fa1yAD732RnszwvDpyptJdk5GWhej",
  "key28": "5rAGBoM23Zcw1a2sZRbuH5ZxJKpezPZHrNF71nq32v1Ko3ep8375GjthonGwihbczP9dhuuDTwAF8Bgtw93V36Zr"
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
