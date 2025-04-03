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
    "4qDK9xTv9ggD1ezcoujF6bBjAqonULTw2rZGcZ7gQLh3deWNiF8EZo9nevsQKmK6Cs9k1xJAP9v7XGuCjQ6ugfvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CaMRgzaZGYitwYYirF5Uw14sb4zVojZsQmguL7iZGuUCJZzHbqEoVJBtJ5tWdyt9zZvqnoW5MjCVT7DJHh71mpG",
  "key1": "27Re6ay1jRXZAXTqd5sjAHcAMF5ZxyFnPd8J84fuu4iH3jePBS4Tr6JfpQv1np6zoVHKUY86vpND5GhGL831gakY",
  "key2": "kyyp6HUGkM5RwMGJAKUPWuyaKFrWQuRw98yndZCy4ECJpKR816vJCdNM9XV5RXuyQ8PKMpYGAY2w141zh5wAUH3",
  "key3": "3f2pzPW6tN36Px3UjForpZrd6wJMFgcJn1tjgR28tRJDZ6E8gbHdKJpzo44EFxHCpmEpZbHLNd46yTvmYaZccDVm",
  "key4": "3iVbp1k7HjSmvU4d3b5xTH2wAJbV1ihhm3phka5WgvTGdoQ9GvsZiRZWpJ1SxjF9hhgWnbQTmPD42DXDJ9ed44y7",
  "key5": "5SdgdM5pMfErUjU2eMNtjGpBDccjQKnLSEUWE8XQdR2sWra52P43PMhXpp18PueFn4fWcQRG3TvHVFmBGKHRewhn",
  "key6": "4E8qKepM8auFabW2n94CLxk5H5XvLs6y7Qzqm9DUwXzP24xCYcbsxjs7STwAycJc3mSmGerqNBqVhvEhtPqHgB5c",
  "key7": "5myx27rT5xKBAzAXGTuKeLLXg3EwCYJ8tmc56dFhegFRiAgSRoBAMvc46rMoRfZwyGVwKyunWsfAi4QrcVRbrVw3",
  "key8": "27ghWmtkh6Myj6MAYqd5aRzNAEKpkCpFx1o7aGpqS8SvwPdgKM8Axggjv5WXvhfGCy1kScmpdXPKfiTYfzsfFM2q",
  "key9": "iBkfNAHYHZ3Ca2ixQkYG8aryebdBbPYF92BybXkgNaKsz9BwGY7QswhF57cqLtvagP7z2AveTW1JuBUr2kYohUS",
  "key10": "3R7HNxX5TzNfjGQ3xg5ZGznfyoc6VJ4GkFWz8P9YeXw8wifpnqYxF9hKJy6Xr7WAXFsmh55TnLPpVHSjwxhGEsht",
  "key11": "5YYs8BecZeKgT1y4NasmDboFCKwKZ2Mo8ahW1Dq1oE4SDv7FHF1Ave1FhJQqHsT4VkA85VVecb6tUNmZHzLHLM9c",
  "key12": "CFhKxi34FKStEJG9EQM2xb83UQFcyvf3hQBdUN1mavzSV4xi1enFvDtwdCE5mihePjyV5jhpzXZc93eCuXV6N7h",
  "key13": "2uoS9vUSgV3GQsgtXQyoBjuHuskVCwoWcH1WLWcUDQvGNAUmptYvCtdx6cVPevsZkk6Bnine1mfyQp9DDS24bgTG",
  "key14": "3FMBJAwXdHpcNU8aFV7M5epwW2PpjdK82KvCyEZGbhpJW6Gw5ie129x2DeEnAq1gFd8td7sGen6D4NLQydpP1ZNX",
  "key15": "5K9bEQPxVuAdGQ4k9ujWBfVHE3NiKJgnFtWbrhQFPb4iqnKC3mLULsNGEPBJ9qWxhbErNYSKzqWMZu3TLCBWnkwp",
  "key16": "3o9bYrMcXD1mBzbCFQXonZtKHq3oXVG6u8dyWqbZq5MxR4GCriXgnxhh75BLdnGhJCobJZdqhC89nUoU493Y2vre",
  "key17": "5PPRQ7ZmYH34z8rskCMqgyZ85Nuq55PgsZXvtEohZTjDzZ6hDWVWBqxhzaCpKFC8GqNzKV5cdUyQt6LYWuLMwzCg",
  "key18": "AMBX4BR3TVZz6VNuQ81eU28sm5batDThjtvmpiTVVYzxxugJDuKXMsC4BKtsrintvcDux7vr2YTSmJaaa2f5Jd6",
  "key19": "5GJ7PbwGL4c8Mc6b8dV67uUmCSnBgjrTdRnaAdyKjbUkvqwd5gTbHpeXmgbbd8aJPwDCSBfyKPmRF7pzfDLRmFNA",
  "key20": "3ZAzWhLbfNLX9a2XSmTnUyREiSBVQtkGhjkZBDpq73NjFQ7V2Hffvgz8mZafbUquVfqWD1G6c7v3V5cMG7iS41Aq",
  "key21": "2R5bPTrz7Jp9DVZGBu42AL1yzMFg3d3zwug4DgdbiHEKnjzwnf1mhFk48xebrdKDvXNLEdpy7oRm91zeFe8mZidu",
  "key22": "4xo71vZpSqBJTvdFHfkugBhbU7wUnsFGLB3Sf1VqE44pkcibj4aZTdC7SNqMjc6nRPk4m8xRWjEzNwJpBHz8cbUB",
  "key23": "2CEdEaMMVFUGn3gVSCYDVnf4y7joFAdcpYrHxaxiVhgDkog71f698PCQAbj4BpwqSXbFHegHHNfgxyWAPVRuHjuR",
  "key24": "4v6FqnNAQaphSe5SUkzBCngfeQrKW7n2yNR7nZnwqCcYacJYYYNiiNioGF1KhPd8SJGw2qFhxPeYPAUFMfSXN3cd",
  "key25": "3Eu6Fz63z5EPnKXCoA6n4YtkWZLmp4mgnbVexPVXrScaA56gyn9oWiRaYaAZdAkDevbBBSDvLoMr9DDb58XXoc9j",
  "key26": "4j12uUicbhrp4EFYGmsnakAuXvxFhWPZCi6RzXrXQy7AojwAvcSVbqBxQSFBNrzbHfM3X3iPpFWWboBp7poBdRH",
  "key27": "3JzCKzBds3KfRVVwY32ABgALZF3Heqw1qLMwuXSjujYkDdvpBVdL9b3TRjpiFFGiwmZdEUTHzLdJteLv1cxGcG6b",
  "key28": "2kiM3wiKgQ6RGaRyWzPvRFPjPHfqys69zt8ykJZ2qr1CVgCEf4LB8rfJN7NA9BsDVAJkA8cC4JKUZ4jPoArQ3Fzd",
  "key29": "2mBtcDkLxpWbLAfcNnkQ6vXuXkoeft1PKrBbJBmfAfrAhmt2K6gFbvq8HK82Ce3kYCHH3QJ5x4FEGi8mdnss6br",
  "key30": "5BfhXrVgV8BmFx2gV3DcPc2ZX9B5vsRN7vKaf7H6hQQk1uuPnNJLMSHqJAUHA2EtVwYYmqFCfbyp6SoTHWCpXQU",
  "key31": "5xbMgmSZx36NqpP9wNq3poQW2HpqxbriuddvTgyRTdW2ffXH3V34bYgczeWFMqLP1GTG75csSc1WVJnVVR6F4DPQ",
  "key32": "3tJJ62aA1nGNTv3HSdT3BkQWbg3ET1nUi1piCZbwxd8cvZqPBR8cr2VkeuXSNUeruKkKKQFeVZcURsX74cr8sYEs",
  "key33": "3ZDj6og4aB3Vgg4kCNjpiri5EiThqimWnPBEfhQjC6ndB7osYnj1Qpt3ZSLvvTA7VCuiLuT9swUhHJL6esVEeapj",
  "key34": "3L37peNXQkZP9FYLE6wzUjTciHumkX3rF9mRgifceqk2Hiq6YGZZmjWsUmsdAi3Cf9HMSAnQBnRqqdSS1q4A9FZT",
  "key35": "5qVu9DPxMDzFfxFLGyX7CWmCfHuhjn9vC449cGzb48r4Hew3bvHG2KjvriP91mnM27yCnaEa2udWpF2w9uwSsTsR",
  "key36": "9t6z17aGPVa6RWAUQfQFxQATGTyEotza5gkogDVtzABiRa22tna7mCTbBegvPqrY2PRUZH8ab8gYiudUMyRtvP9",
  "key37": "4pB9TDqWBk4amUm6CvBSs9kTeBh5uAaTCndgix8HWR68rK2gs8RtdTZYvVV1161pUaekZGBSVzoqfjQbzwHjv68H",
  "key38": "345wdyk4P6wcKh9NNd7szjA8Y5mHsLNvJPgi22KDPk4RRbjx3LwxiibXotV8zU6ear7TUZdw194D2FxNaDV7NQTF",
  "key39": "2g8hKyqDDtz5hXxVb7SBWLuFzUqjTa4uZAY7f663NjzFNQsgG7C6CxbfjtiDwm6uq3QkXcovL8KL9kv7HrZFqr7Y",
  "key40": "h2PKgCXyTM2LmmqQ7Y3iQbLR8DpmrdNa7bLy811NMrFKY2G3Xuc1RS4mvpc2B8A6eK2yjDMBGtwpsxKTjGQn9Zo",
  "key41": "2QkqxRR8L9gbJJADJ1eqyhwaehcEht93JE2kfaV3mug4FeAHhc3pERJ1Q24AuGogRJtrWcqc4byP6oajDDfmSA7c"
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
