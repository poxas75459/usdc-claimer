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
    "EwQFxPtr8wHKN3ojNEF2UTW1DVXEkciWh16bEPnB2mwXLGyiRFxvgWyifmjHyuHpf1XmxuBkz98Qq1xr7aM8Xne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QaTaa8roWjFZZ6fC1twojYfPxpoF9mmVCsUdoNjaRAvu7AWpxNmdg4dnuUAL8VFd7oyweuqTmQXEd1znBNSHhEC",
  "key1": "64GU3e6AvvGpCoNZADm6AVKeGzAMuvwBRw7FPZaTCNabDgxYMQ5TX8xwKQwGzA8fPfk3s7Z5eEX6qceMwaDjwGrz",
  "key2": "2bK3DgDHDPn9BCr47DHYNZLrkVRH4jL38Zh4sVGRPmSRMnrgNj28RciNn2gX6pYQLPt1png9F84t8Kfg4yrTWuKw",
  "key3": "3Jw1ck4HxdEDKAN6yHPtCTbyN46EBQYJ2L3XA4vmYPzfNcYFWUJm8S6GRALbMNPdyCiiBXhSwwobB6EmViFAreYN",
  "key4": "619NLRjgMYdB6Zj1qzoCUjE57y3AA68G2jx4tsBhwinWtGt7WnVwjyEfHjBmfEpEqHUZDQdm7bbYbE8WmoXpjB48",
  "key5": "3acCvc62rFD5aexa4rSsRzpBVoAcj37vSgphCGF6RLXS1V6esPkpCf2kny9QyLiCw6HdMbQMJaPk7T3h3t2EumRP",
  "key6": "21Cj6qg2eXrCobExU5eR64ZGkho37u1HcPZF9C3A3x1N6C4J7mvpAWpruxPXrjb59FcitYnz78MuHmk3XCAeHcax",
  "key7": "wuqZqEnzY9XLEtLoJqbRNkuQRCsHVXLD7Wf1Qd6jSGpuh3GPcS1eiNksKzkDHtNyCjWBzfMrebRJazbaDkxqaeQ",
  "key8": "45igRM8BySSLMATpC7tJhhyX352ZP6acipSPKJyrfSB5QzCnjExDq91MYUjHPrn1EnPwGYo94zuevg4PGqStf5Qc",
  "key9": "64ok8Sa7JEYNWxf8HoQKhv4r9qczy2Q7i5z6VRyT3gnkbDTLfVJWjxdnAEo9dnDaZUuDMFW8wobczWdhovTv7TM3",
  "key10": "4Skru8BsDwaDcgFM7nq53aUviGkxz1ZYRYwPEqLYn7wM7TyQi1NiJXo5nWCiwkztyP3urGfjgUSQYy5pAhkmcKaw",
  "key11": "21X2jYHA16rxyuy3zLEJMNNGi7Nahz5GFJQCWvewMMYPcC571edWuzP7hkNYuW4Uwof6aYKWQcspWJZFV1gaJM9r",
  "key12": "3aTojfgxND4fJ8ZEUdZrMQfPm6khLsgB4ZHcU3nuJp4mPgz55yvFJyAA7tGm2JNaBc1y25RoaDbrf1v9gMWH55hB",
  "key13": "2d5KEHVwYRgtEop7L6x5bL1QiyUwTwciMASHupzvgUoX7iQkPKA1vQJ5Qa96eEM4wDMwr4t5MiktukGWCR5sGyxT",
  "key14": "9ukg2n8e1sZAZYcYgZRFwBBYAPhGzVWnxVi1fBCERKeZwwpDgvuKjSCha1zFZrvpabDqU7GCN7NQ1qNKG1AorEX",
  "key15": "5rQPhr6ixj6jhGMo37EA8mAwZciqnWNo7LHLarxcAG4VAxsmvsd3fEJ3YJhu2YQYynQygNhNijMedcu3juWNwhv2",
  "key16": "4d4CQbqGwzTALu19gp2nMtSBnjCsq5gLZXSDN5jZRrqsnt48VqZr2djdqHHTS9AsnyLPJFsyBikMGEsHAum3djzc",
  "key17": "3V88oxwZJQnoLEt7tnN149t7516bvYLg1LpZ4UyJRqKfTZEQxQVXusqqWkkaCgkuuQqqMCVoTWauXSmPQ4L1Sf7J",
  "key18": "FnphwTVZgEt8PYdWF82rvZrkNmULWByo3gbcsASFN8pBt9jdUrv8mB6piFJge7reJpuYJ4pTEeh8gFy1DzE3QU3",
  "key19": "3GVUVdMdBQYGkZ1sJikXEGYAo9TvQdHALe6qaPfMd5SgkVptq6zt883DiYz89pSL1Nhu7jzQDY7fPB6KjU6d3b8q",
  "key20": "5UZ1qUuiC8HVssyBFFcymAvA5UDSx25ovcYf5wFdwnVE4GnWQNrw63n81QwKAAEcg7SeDCav5j4eLGj4tNEXmkHa",
  "key21": "3kVYMY38YRNotmPZGhTZHxCsdRQCk4Ni8pW5o7JhF6zmqgu9jJuS1Mxw6mG2cfjQ2b8iM9KyZCcbzRFwVqshQiok",
  "key22": "4SCqmkrUeTrjRJrE1qYbjEJLyoQx9eCrLjUTbF7YDpqmZ1mFYYosKQdddofFNigPimR1pukTfDjgufTNDace33bS",
  "key23": "316WSBowc6Ago5x1hYnsvgaGW9o8o24LLj8Yz1vU7CAoezipyPqmeAdDu8oLbyo8hCB7BJXZM6bSSFsX16Umtwo4",
  "key24": "2wMLUU6CuutjTQ11HrBpsyowgQj5pB4UazC1VutWTQqPKE3qsqXka1iYLjH27ryydGnTRA64iw998mF26CSgVdp",
  "key25": "3yW5Zi9XLzLzBw4GTWssSauVNre1FEi5AzRHD4eDBgKAa4nLDnsa5ZgH4J8YcHkKggk7rGcsBu9QJ8gQGLVH7wVF",
  "key26": "2tjNdQH18tYAusd8F5eHR3y3tMHaAYqNH4k1ATuTKg2DUeYcy7DF3axEVu7U5hRZcyNbn2MrzSp2rMp2UHcCidDA",
  "key27": "1E47sanKm2Ef9wDaznU2Jo4KYn7cCzDvZsA4dHh91ytgfibCFQzMEShiqbwaZcJwcALBM9k33TpTeKvVxiLqT7y",
  "key28": "524QQYa5Gbbjr1WhDCD3hZBzy1Z5Y92scwxK9dRJLs1NZL5RWmizBqrXa8yyyb1w97K6XTbTtqYX4Aw6jcxmryrU",
  "key29": "3T7isQxgW4mAgcaxaRVaBrzn7J7vKej8sTnAq8ZEWZuVN4z1pSS1YToxYkcpw3oMCrjBbHFMAQa9eLtu1RPK8Y1V",
  "key30": "5DvLk8RBF8Ekv6mb1SgmKDqgcJsLDNZN7yKCGPURuonuRkTkCVrE7tFEUro7uPaHtNCSziFdQHJifczQTsQdzdgG",
  "key31": "fKZZYSP8FU4RKWjgbRbohR3xhayXJc3Pfy3rD3KBsoha3YhhWLVZGBxw4AUMS8MpgrVqgYAyB3RNqEc2xjfBhC6"
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
