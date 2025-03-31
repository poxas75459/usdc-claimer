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
    "4RFM4CCkBdzdyubD8Hng7GkQ8jMErWZzeCAZC1s5xsMUj1LXk2WyRtxkze5XATgfWCEMvWuBMrxbQvff3BiNCPqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aAqbL9B7FonXkmHX5qHTuzwr5Zth3CYNcQn9qMuvMRWxRb7dbT45AUyRgwhqu79zAzMmiBhQ96khVJWMRRfWx2X",
  "key1": "2wXYnUnYexUTUMcYYojTaiT2pbkGkXHAMJtX2DjbpMj9Sn26KR6ZqJP6wsy2poDgtNMYxWpY2UoT6fXCawPiV7ih",
  "key2": "37fCJw3mpn93LimgA4fKYrhLmFiYuxy8WFcS4uQeYEEHGD2DVXpS2XzUZPGs3veTm26ujNMhwA9qkrzvxKepmZiC",
  "key3": "3dT2UqiW2eRe5z1Q2XWmhq6dsAFkF3WTFyUDpQoe44FREeo9eYBWNzALPZgrwfCCt45Mh64tpmi1HnKDgfAoDY1C",
  "key4": "4NvY1aSKRKcPn8AvMDaA8ArsZBmYrZBV4EfSUKA97jqKrtkfYy9dEqcavNwFc8UFUNGRHyGf4eASUHTqYAeQm8Rm",
  "key5": "rS1jF2dccGkewfBE6vqwjahsYBtrdSLKVuxMWDoPK3psNhPZARVj4Wnv83XvSDyHKCAMrg7eTb1eUzkxq1M2YNP",
  "key6": "hh6zSMjUajknfPd6aEBMGUD6Bcgv64LL8F3TSBEHANpfrmsvkTWUCA8AUnUdF6Xh5N7LL56bM9DQTbyg74RgePi",
  "key7": "a6BEKt3MRhDiLEk8PGjDo9EG9hSS7Cz9KgfLzGivZHEC4n2btaccLsRR8JwpL2L41kGcTavSrWwLyD4EYp24wu9",
  "key8": "4o5qAPXj9KmggxZ7AQBxFmiC3yymPjhWScsA5AsLkJVFCeZRxaXdVUdC6YmsSD1mpKdQVgBt5LapLwLLNEcJWkrE",
  "key9": "boNZcdap5GopmiGuY7C8k1oYTxveHufHzCMMJo1kUZxwD51oA9si8EWJzup8LJpLKhaypiYMZHxnXqE9akGoXsh",
  "key10": "5BE93bQQHBVvTZMLrAWWyQn3uoweqh29anokPFMhZ9nUpLZ8gMxBhMpTXkkhnu4qbkc94ZP5yAAKnVVgLJAQiGvw",
  "key11": "5XBNy5NWhWRAA5m1Hz17vgb8duEYLfi3Uda3kdzZpkZBnqgDXmPNmfWWiF86oKhK3LrVxwupZKEcXL3RafT8V9eg",
  "key12": "4ZavHXrzpMzGhQVHacxsHdtJD56m7hGkMSVztyDQUW7WmyKg8qwHAESUzjkqKmZjrd1QotUJAYV4p9sZbJn456ua",
  "key13": "5dYrcmUyKuJmFPe35brApJqDbsevPixRGhRVceAeS9mZP87dTBYSDLZuzs5Di73LWTWKQJdPNDdcZfwKkHc5pSAs",
  "key14": "1Y6P2KEPGdRUE1TyFaaEXiH8v7TJ5hPWe9BS5N7FHdLv8Aj1MBVwEiLv2kQzG37LLNYvXc1RVZ1XsXBXM87B9Rf",
  "key15": "2pYGhenazec8bqHRFFcqaAMoLCiieZwRR8oTBPC548dwvACcCoiVowVifSNuRYGriBJDXTSWKEQBQZJpH65qjax7",
  "key16": "ZWbtuYx81YDv8wSoDTT8Qvgv6RVL4xuNRWfwAD5GpZJ2PoT24c523RddAU8oPZEQis66LeRzwT6ponzf4dkNqis",
  "key17": "HVW1BVUvUf5J9HnkpHPhji2SwTmQhrK1unGnMNKQX5Rfi8gJpr8omsqBVF8XkCcBSrCWEZEFHeDD7Uv7iUxTHGU",
  "key18": "RF9ooFp333B5XGWLmb9oZ4GmeN8eyKHccJaX2x2t9hQQDgsYeKhQVp6LwjauYysMeLKmhQAQusrd9Bay3ia94mZ",
  "key19": "2fKAFATpeVCMUMGCQn5yqdHVMig7qqGG86TUcTuuAnyKPJoX4SDCyckekTMmDydhAiRPh14jcrAqdmtoXQ2vik6R",
  "key20": "2AHMLgY9brtDhdmDcym2ori6RbeskBhT9F7nn6zJANs62wbUEsEr5pirHdCSSKupbgKQMdjE6XuGqJnmH2PqSx14",
  "key21": "5w8WDmKCPs3L6Fa52hCqmZzYE42f82dX4LNDsUeMcdkjDAjjBoPqPK27inY9q3CmEAoQuqZMk5VzNZFpHz5ujEF3",
  "key22": "4AVtsieocbVAmpGcNo6Bhwg5UoxngxySdQXjd5FhWD7QLL1cmUN1BNMvMJXvGowyNxjeFcr2P988sEKTbsXbrgUj",
  "key23": "3PvNKL7PwvuQJivJT8MYVhVterdg45nm7yEgmTpCQD73TSfe4WZrQpVF4Y3cZr9EYyRDRFbzCVuT9PeYZEFStuQT",
  "key24": "2WCE55f9R3cj4iS6WBR5JZiiHn6Fh9JwSBcL5HiFjXQaK4WNJz6KrBSEA54ZbXHe9KvWqW2686mUr37qNJDQzJsb",
  "key25": "5bs7vvdW3Y85f85PYxmhPWa1ftdYeCEpqBcPx6fgUUSJD53AEKMudNFr8yTvDE3cy33GMnzuZ9mtt2wnAiEs9JYk",
  "key26": "Q9Lg5d6VKSJV9dyXXBHKo3L3beH3PUX6nBmaUnuNqnx4bQsgRTAmjVzS8RqwY2EXxmDTHAAD7cFpmxet3SCeTF7",
  "key27": "4fAWAFbWpVxcPKYmgKVmAo2EDFuRiP3Z1L9kiMyFxLrpSwSieMvKW9tLFyKRtVAmbKrcCmjmXxNmTHBd6k8Nv6sM",
  "key28": "3PdmDt2deP76NtCj2dyG9Ua4kUFbpRVrzxFzuYt6pv8TTVvdHVWEDhFf9Ng4Tt6ckkPpTErPvmbVyvBHpRqH8jGX",
  "key29": "2L5ni764w8uBnSSk5qbcRPViZoeYPTnEQr8MzHHW9EoVQKsvLNnAxe2pMZgZcrn4FAEV5JbDJ8AgHnYvKkSEDtc2",
  "key30": "eCgVzxTJLQ3scvKY6vAdVaxwo2d69YVnCvzbLZVBwDh7pLUBWeF8J4ypEK2JqMCuzUAXkPYvMNnGWqcZkiguWgd",
  "key31": "3XFT4cCnXM8GNh8pKkGmMyBgFnYCT1Jpvuho5fy6RamNJYmsgjoHwrPXLDCj7XN5pnY9LVRZjGXLU2a7cpuczvdz",
  "key32": "3nV59auYS7emhx71KNvN1fpkJ2jckCYVvP3cGoFTphzT9w8qcaeSwbSCR7Ug7PQPEWDyswnibF7GaSNeCURuqm7v",
  "key33": "22cyRJszpNMutmZ8FxvqS8yR8dUvchkRqqoGsovveWg1nk6PTWNRT567T4EY77h8pXb8Bre5DbJbgUEai14uDo6u",
  "key34": "4ZUeTHGRBKzFbUmbhPD91sBwr4LFxnfFcKsXQmNo65jXAkDaoQ99VkJPQf7fypbvmcho3J2RnrDm7NKPU7zGZbPf"
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
