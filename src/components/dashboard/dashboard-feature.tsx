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
    "SBjzDeXuhN7vSFN4ThW3fb1X37v9KtEKPt7i6r9stpTejiX5k7iNvgv6dCC6GNaGpe5eYb2Ze3bwrVqRGv5o8P2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D7sLip2ND73JXf95LEKweHHaLSZEpxY85Gyca1bNoFy3wf6nHNvtB1eH15YWaWmgx5knLHapeZ7Qcrp1bwSi5hD",
  "key1": "PFvUypGM1B7ShXysQ7ebm2y38D8YWPiUcdABNztcbFyuPo3R4CbVn3L7Ey4TxzghHyZxzF18m9hR2xA2wdbeAfC",
  "key2": "neAhhuQSMajQ6cNZfTZyG5zVcHQcehh9YCuneFnaDbuxArgvsMP26vdyr5V9byutRMaZ2SV3T2bLYQNU9MLr97s",
  "key3": "429HussF2Xw9RFpcAjf3egbqe38n6NrywfXdUbcgHy17jSv2ikLrJn3x1aWWMKUTvfZsgkHV8PYto6PK53fDpMu8",
  "key4": "2TtwWdfezCnsgNxtjM6QxUGWJtffPJtB6FUZaJtD4hAjKXyZ5MKKhAE5vFVP3M2atH9jgpEawvCxi3eX9FCNHc59",
  "key5": "2U1dRsgjRbKKqLUkj6vyYn66wxt6cHNGWc862WzDrEGPCEsrxvh9cjFoiYRjhUSpxaPvE5VJoZxnsF9Ch15Nqokr",
  "key6": "2MiEUDWjKMwpM2Rx9zFUVB8pT3P5sLjXwrcSdbYbDrFJ37BxgDJGJ9fuUH4znLozKEffkcjX5ecR2vS8QyomKUnv",
  "key7": "2tHx4Nt8DopxmawNa8NH9ys4SdCS4GKD9PP7YVq556AHkE9hV42B9J3Kve6bwYMh8i7bGuCMFYvb7k7A8WhWt9nt",
  "key8": "5mbzvnf9CXevz6M7SXsdtkkBmdj9xTmxqyhE6rXZnLCCMzfvozia5ydc3XPMi4rrVrZbHBjR6jYCRiHcnCcWxrq3",
  "key9": "67SGeXA8yucZGsA8YGy7y9zDhfjB5p3VujBUSXkcSAmGj57yFRXhYEfBCrtrGdNCJjwCUSkDyjhpQD1NLx4kS8KN",
  "key10": "5hmxqzmws5iJY3NBEQQSvUqHvA4rCHcH1GSYEXQfW1VoAZAfXy4K5bGo315V2PbpeuX7XjJeS74JkF8g6wwbGbSo",
  "key11": "4sSNJc2sqciaEjoiee6LZdPoSstLTBetamoPZv2t5ZkFQRWiKJU7ZhMHEUoLn9vBPcd6pNCj87bWQF9XEuM28Fqx",
  "key12": "5g6K8PrzWTnL9EAXUZK4GvjHLy1YPjsxKkwqmKNa7VzxtkDmpNTtXmuWLtqJLDURbDRSeYXm8kXhxcWd5VrES3aW",
  "key13": "56oCA1sX2mV5uxCZ4MK4FEvkmMLdRTXA4ssjWAsJT63nMqzh7GSVk35HoaVX3Nv2P5v4aHRTH6HVvcimbAUEdvTv",
  "key14": "UFrYJQyN32SZeC8iKFk586JdjhtW9YZc9bDTfYEe2YPSKoiwZkL4YCQ7KzjvVYA3svGnsJJL2QDA5JNrckkzYo1",
  "key15": "3K4J6YU7LzcmFQrVSKAoggbCkDF3KMPGmg6SNm48wFu9ZBUBLfGoh12RZhEW8ctQdXw5BHkQHEtXPLcbZiDBqPRw",
  "key16": "641j83Xq52tYiL6mggthpfpepfA48EUGgkTeLfDrc7ovBncQwrjDgy1K75BPfK1e8mERoNp8Tw72DnojAfv9gvXh",
  "key17": "5imo2RX6cCZRgE7zowaKzZVpUW2reNM7prdPSUFYF4vy4nqv9cC3cEKEMDV7qDfLWkPJBxLafkpteQJDh1yPvUHq",
  "key18": "1oHE5u61BZNv9cKaqXh2vPKREFTJVyHL3P3nkryr73a9ehFxmgtwNGSUPsxS1mkdWhKsVgwS4NU7PJEtjCEb4h8",
  "key19": "5X9UCTprHn86vg34uA4ZgoVsgF7ga8qxuozoMnuDUBGuso7qdAgmgY5mWYyCqwak5KkxxBqqNeapC3usgnVF1Gyf",
  "key20": "3Zo6j2zNEVsmWoEmLzJF8FD19xm9pUCsoAvgfcu9FN34B7cwhdjg4Sqfh1nwrTgMbehZxAizuub4cvEUGf3YuBAK",
  "key21": "iZvueoxMdgvhVZ7iDRnFFDhFgxHWuXnZwyrPQusmF7YHMMCfcnJs43F2RbdA8d9X5yFyMwkuwDrsb4YDvGPs1yq",
  "key22": "26ktzYLmsH5fzULjHkE2rtwZ678o9H5uRuixXeBJyvordQFMCHyFejvFtkmWkNashqcAyY6hj6E4YDXxeLroLNpo",
  "key23": "54ca6NEwmssVkPbxMPiq4QGFifVC49eigP76H9BoJoMTdCSNvbES6bnM85wr2RzvWrpGr4AviETmkhd5wspHUNGK",
  "key24": "5hSFKuPAgMr2Xr4tZo5xzjKSeYqki1sHb6UDzYZrrWTE1pWS7EP1SGdkRxhQQp82Ty7bbN2ePFMt7Q5uvi1a6yeP",
  "key25": "37Teo7VsXkZ2BM5kWUKqcXZFJbzFA224Rr2WSbKZynovGmZEh9cUw5qbQFjWm58L4FUkkhPtDpHBjhQzgzdK5WPW",
  "key26": "4APNJJv6VwXgKSfn5p5U7WftwdDuye8CUQUPNetv1GKG6AEBU97KSndSibVzznef9swvTA9obkRjVahkEAP6RsN4",
  "key27": "3YZY7RYQf2qVzyJZHkTX5pbnTBTttNUvg4tvwV2QsXDuF5d8VJb7QYEB3KDZrDCMM4EmQpVRs4U6YsA2LYFhaXGr",
  "key28": "5wEJuDGp3GoLtjh35WU7gtJSEjH2JLNB4U5W1NAnrpepBvCGHYNSEBP52mRMUXzWKwCpEA2SFAkbNahDs9Uw7SH4"
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
