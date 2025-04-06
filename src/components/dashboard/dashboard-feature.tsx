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
    "51FeSamnS5cBVPsZid8bfuibtLLVDwVVE6QvdU5zPuqbhNqiaSFj2vJB8BmcmjaBFZFSKCwcMHBKfXfXMfe1Ni9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WCiqikSMLgExTtVKrkvFKAZrgbM77X6M7Dp3YLEnTCK62NUfzueomZ9rvztqau43p64aH7R6iasv4rS9Lo3L8aT",
  "key1": "417zisssqmLMUYBqAYyBQUxvukjqf6nDrDjQtorELnDC1Ve12xEYC2f8yGVSxNxg1r8pRxBcig1v3h7en3zChrNi",
  "key2": "47UDne5sf8N3sHQAdLLYkCz3mwm3Umb62ZAKYq8ka9WsPZgq53fkNu3XjaHWyu8EWCf9rJxUmvwYbDWMZe6wLwCD",
  "key3": "8WDXuuVZB5UGxth8eu519Zom9WEjHWFgd3mCRjvQww3WcbWe6FAVY92kXBHZGAorJUgn3kqWeaMLS5ND218JmGp",
  "key4": "2cNS8z5G9yKUtSivfYRK9cSzsf98uah7WqHg3LJJmbV8Dd8JUGvXKKfvw2SBTzrC4XeXXpgnKnvKzrxK5Ke5A6g6",
  "key5": "apmiz3h7yEK8wJTrHEoPGtYDaeUiDkwfZJzwmZJWUrV86k2bNanwCuWNhSYBxXwUCGdWhNHY2fCjJWNeUGTgyqi",
  "key6": "2pgsmKRms57dyyR3mCHgbNKe2NRcWfSbeMKkhqRRk4oiCRsRxC6jKdMZ5hqTwuJx5bDQ4FE7sXj5Gygq9o7ftLSJ",
  "key7": "4DRGZrTnBG5FHMAgbtH4wque3Ber66LsrJ1k6PB3mUKnGzLVQQnQ7ScLLTnLPJwshsXUbv1UqDZgce12P6UgjZTy",
  "key8": "5JuyX4kiwDt1vn3MNzDvgvFnpAZu3fS1TnsYNNZAUY1uxHG6DbNuFKsnyz9q4ccr2Y5w77gVEGk1TuyvEewkvj2y",
  "key9": "3Vys2wWuJ5NpCXGdmDmRNvvmCcjGzy5NCPvHHRHU1swQEVFSsd1UZJ7izJT4GKtaaT4Xbn84dVJbn2MasKYiAMfS",
  "key10": "4AAiu97xEYoxZmSivPYb28CQcrhePn4a4b5Co3ryBNkP8ysusymTtjMu2UNMiyq2iys7MCAo4PorcYVBhmma5Gnw",
  "key11": "43Mqn868KZugE3VDpotdC5EVtMnKNHwVa114DGKhft8APSPf7f5Ri9NVVkfisaxDWYGhwdbMxdsGNGFmkbzWynQM",
  "key12": "4yAqhbd6Q2K7XUpsTQsLnZBGJXREaTVFtRZtu8KLs16s3ooFvUNzfSM3gnyB6fuznBiWyyfWD6DgPa1gL1A8dNnB",
  "key13": "4ZgQ5gbsehmtVq7UgF8pKpRP9WuH6crVLovCCiB2Q6NKHEzmTjBC2SpWTZpJo7YTe3zkiYGj19aozvvTTvihMjEU",
  "key14": "3muyH8kQ852cC4brPQwoM1TtkWRupMBcpUyPDc22BFRGxbXxJoeNfs5sCv4MHFQ5ZmNGV5sPzkCdR38BBKh3Njos",
  "key15": "bRrKNdTGCF5XMifsh5TrYjpdX5yTujCtnFYFGi4vcfCeubNLDg9RAsM88KzC3Lz2fd7823dPpVQYdBk9py99qUx",
  "key16": "2a3Y1u4wWjSzpHcRdfaptXWwBD1wSG5FNALNK8hxJJ4KMdBPYDMze6uMvjS5ThZ8hCgWHUovJFJhKU4C5WoRrip7",
  "key17": "HTH2c3SiDA6ZPqsuEzNz4uG6Pfpm3y1kWVeoobaJ95hFDSGKbtj4PuitPrBTFtksEfeoxUoHuFeeFLLpd1WWGJ2",
  "key18": "434ZiYRG4VmTYNJXM6jcHvyaQfkqGR4Yvnc8JrRcbxxGXsciggt6DhKNggnoc8kJiyzRnzf2FJrKCu9iXN49R3cP",
  "key19": "3ZhbGfzGevbNjj6yFfnr42nQNbpa97KJPWRgyUgq761abCYeShsqEZ7aVGD5LgKf1kXtb2GqbiHecyB21CzPpdYm",
  "key20": "2txpJqL7yGccm8MKYs6r7F22dyauLs4rDiMLB8Hs22TJh13BkdLSJMscdsRK28JQxXbSDizQQgCVSrjZvVy4hhAK",
  "key21": "65yQquP7BZMS3bdpye9XS5DVfkhw7WY45SskhtHvz6zRFa6opjy2ehwttgVpEtV6nj1QNozmxfQGkHza6giuCCyy",
  "key22": "4qpt5cqoKGrhYbGQKsgFiJwAAf4NWmdQXGdJgqx2smxsE5AX1US2NLxgT43vZqhdqp5EwvZL1yQCTGVTHwMteE9Y",
  "key23": "5Hgc3fp275G9D8ezxgfppoQ158uBRPpZkDfzgr42x1tUyxRWTYCVZDvZfEDwKyocQys87EqxJQ3ydTKiLuJR1Qq1",
  "key24": "5dB6akCgJ9QfEf58zab7Y7KQz2NPGfucmo6h9Cwi7hCz6Y8uk8CWgnqWjRGdBEfnFyLopQtUkGnmDTdGUtJxxmkb",
  "key25": "5EYEzByXnYfxyuCZeXMexfgw7NNcR2H3Fw8UZC6MoeP27WZxYGNSWMmP6oNXENseJpABtSqwVfHMHcubHBTLt9WN",
  "key26": "64kDeZ5aYNTGLXbE3MmwcVGZewEHESxktMEEgpbVqqtoR3reT5yJEduiDMrzJqcjGnEA6CoQck5aCK2be5FLVu4X",
  "key27": "3RMiRtquUx8HumX9qGTRRU9f84e34sKyxxdLPP5CpNLe2qbTbqWw2M9BRTPWQjXQ1fYR6mHnC35a6jEMHNUnmU7v",
  "key28": "3svqThAJwhHaswsxrKnEL3mnvgD4B7iPgMe5Z17kZjkjVpMTCWf73rUFNtSsZ57wQnHNw2fjt1JmYpno1GADLT6E",
  "key29": "2XcsJhGD8t9gCgJwwuzyjQtCaboLH9CZWx7EUUMsXo8Tons9ZSq5NsniBtMSw12UsCGr4VEC5zGvUuffzn9wk8qg",
  "key30": "2Q7Y3dicDxJjQmYCdt8ehWgQ311GHaxzX6oPkfheQotz3puQN7A8jeL8EfKDEXEurBWN6oUGCCHJWGre9aTxBRF6"
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
