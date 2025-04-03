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
    "64hy1gR414TAwsPGzup7DiFx7XZGWEmqzN763YTGpC9heyv5fr5KUZVoBtoV7dZMBhAXVkMMfnWwBojVJ6ouohdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1uhqV4wQy4J5m7XamyoVfHKWvd7iXz5kXbrqQaWWMsEQTWH2nMAwumeZ2GmApNAQ5gRUWQ6Rd9CQzoZb1MtGGak",
  "key1": "2yFiMdj4QGPThywMFuXJaqaCr8i5SGn6RvC5wZBs9Qr4xVHvkFt1EfJEJfh9a95FLBiSYRNwi7qJVHR5bPbQNEJK",
  "key2": "4xdophmC3rNE42aERGv9LP6g9x4LBMXw56GhCafZJ4xaRHuDXxbdZU3aN8bFYwLzdRw6XEhwi3VfXsm8ztL7Nhg8",
  "key3": "26qYfUh7St1SSHd9h4YP6YajWQzGuyY49Fuw5mMKiuUfcRjacnuTnLGAMv4oSiiLSPS197CYfKuWAuALcvi7Hc2V",
  "key4": "21pLBYHSZWNQvpu2hBBCi495LedZZsy2A8Za7JTnfaRX7LQQDjjqcnqaa58TfhM5iLoDMZ6Qti5PN6HDCoKXU2A8",
  "key5": "5Ak4k9JBdAk8C8P1T5tX37BT9gSTK3TDKXkvYWDYjqiEpTaGtWcBA4gGRMJE6aQyaVbKZopMEGEx94ZdBUNfWhwA",
  "key6": "nwmdLFdu9kGt3QhPsy2CV1JSWKeEFQVrpihVrVGbnUZMuMVf3CN7oT1F47ZuvF1oGKDeFucZ6mH7ZB8L4a6yhpN",
  "key7": "397arx8L7GWgKrCzRZC8YXDuXWCWyWWJ4tJwYnvRPRa1HC1A9Tu82mUgvd6ckx1myjPW7hJm987mpgEmYBHBLAca",
  "key8": "22BkX1j3FaJrX7MHQBYQnHvd7VjZ4SN8QktZj6Xg8Uv9pvk6mzYytUtJKiQQvrbLPxD2M7p5tVYojGqKoBoxHb6t",
  "key9": "2qYwGQb3nR3wA2Jv4bSYxbW27SQ3j1obN3NYHDdzBcTnc7PaRNGsoE6jkVEGgdiYKRxuyuzxZY2dFTNF4BGZpG5f",
  "key10": "66ooCQohp5GHYDzMgDsxiWhAJyTxj2uvrktDSvybPurb56svwkE3vH4Yw1hPQ6Ce3bWU2T5eh2sCeLLRAQmPQ1Pt",
  "key11": "45mTNKqnhXMhvcnGFN5bYm5X7NdFtPwc3ZiVdKzE3wjzEcK93Eyv6ftVhdPWLGh9yVYn3nNs9BjPg2h2eg8ckqx4",
  "key12": "L1puNuU6zewJPdwWJQAEk65bXWHaqV5ycyksMTf39iacfpE51dpc7UYyywLEAm1pti1FiB2cERaC4zcDd3cKiKh",
  "key13": "4XXW6QBp9yrWvyJynRZaJ1dJLuP8AzteFKTAfefXCi2y6oQ6cikwNsWVsynxJkgXtXs2PaiCQ929vmewSYo6Q7YC",
  "key14": "44Ro6ma8zsxxQAUs1rY2LakPtKW9W2Bso4k67wN2ADC8BFia9sHyxGHUEP2kz1XPW6PPMEMWUderkXW4kJYmoVip",
  "key15": "54GRhT8iitUDLeTwE5gtQiGMM5sXybSXQpCXpQD2JUbynQmFJnbXh6GMv1Jyy4BsVCoiKXMNsgSXH2SSShbxtKn9",
  "key16": "2B4mw4CSH9EJG3KujS1HNwQAMUMw2ZtrRWd9VLSmA2PRAXAPEDysFABm493MXgM18Hiy9zDchw9YWL4mLnH8uUJs",
  "key17": "4hfALYJgMHDQTakpunJSCeMy9ZLvTbfcFvEKarcWe4hdQ8Dy7BnpGMPwngBokXQe7w5YNSxpYWZzdrShRRobnKfh",
  "key18": "5L8pKdoyFbWHB9DRAyea4aZNCxsfzDa5oTTzJxB3LMchyeNiJibWJeykg6Jp26qHywSRwxTbmwvVUNkA6gzqLgZu",
  "key19": "QGskBmMPL4JpwGNUnRnt2HFwLcnfSp92XGimxYuZqh1vqrpaej98wfxLfP5vtJF5kkivggDV8MjFSBRh6tmMTJt",
  "key20": "3DfYxrgSkcktbUMRjqU8vNMAEixvazFThxCPW3a52iriom5unqwjSvzFEr9q7NELEeu4ZYWsUwHyeNcZymAmscSm",
  "key21": "eDRnFnFy4bJ51zWQNmReeAuJrPC9DZ7pAecz8Z6twoESJWagRahea5FT6skCeGdzzrV69MpLwcrp2XsDujpVD8L",
  "key22": "5jwDRUAMkrips42SyRaBRdVbqBTAMekmX6T2bakK7VWNzxNZTW6VzqQqopJgedvCeT9msuxHuNkC6JQ1APgkQiSN",
  "key23": "2Y39VQaaNFRBqtEkGAKTEbNGuuLJufCBvCkgw2cU8c71c9qGTYwEj85ZeyhdssCVUbz8LN8rSxWY5BJ2BQzErcF1",
  "key24": "Exo7MQDxhG2NCDu878y3bLoaKRBxALEhQy8qKfqCtNyvN1RJdJZYTCzcYRuMwsQAfc7MpNR5Ad6xANg3t13rzTA",
  "key25": "4AxAaNXHkf9DcfHVGBmXFGhG6BBYhBah45dZMHvheokWtv6rnURTWRbcfso3UpiQR2huVyxgdTNVp4B2psPQVEiC",
  "key26": "5eiJxofoMpRo1DEfvpMcWdggVKui6AUUJxxoc4Vvyj9V5Mzma6mijHfGd8Wp7BFH5e33pEjTSq2cuxbArsXEduhq",
  "key27": "5vk183V7riU1XanpyN6DKbaCQhRCdm4U4jJ3RN7bk329wy2ZPrk1dkoSVkL95d4Tpa73JLACnckNhEJKAHWUod5H",
  "key28": "4uuXResSsWtEzYbQc5yDGv1nF4rmNswwivrzBuCG3uLZMcAcga49969ATsKBX5scuSEsyNo7UJKm53sqYeHqiecR",
  "key29": "eWZHDnoFyAyBxCVsms59WZAxmVisaJ12cr9ox13d5d89W1WLoPhjWn6i7GCMR8nMhGF13sEQPb2MHxkKokfYmRV",
  "key30": "54Cgzgqosq2ywJZjtNrFYF5gYDgBVH641vQj9r8ARedYmbL6QDZZuusALhEmJJNPCKmyssUh9gthqwBTAxNaB8in",
  "key31": "5xJXoGtXAPp4nmhZx7DhSmrzB295e85rVCWZ2PFQLi9stf6D6LZMDa895dSyH9REBYWDKRe7iokhySihxfgdwZbK",
  "key32": "31mQepp25hziZP2vz1qU1ZnQeeBrXzZSBmmxjHygz8vSYtoYhoZQt9dY4cqQyexGMTwLywb8bcJW8eJ1ZNNvRXwM",
  "key33": "4enHccK1RsecKAjK83PgsNAq8ymWXns8rBrn81Lct1R4mahw4uxJ8DNLaPhBYv4bsFjK1xK8pPgghgjNyRgF5P2D",
  "key34": "2hdfQtp5dfdbrKiQtVafaQTgt8fdfvT9WUdfcy6qq7QZUupsWMTjy5EpFHMmx5tJXsouFCL6WT6pEanLic7vuF73",
  "key35": "21cqkQjqJFRFqrSEuMshPHhvwNjumBZEEHEhCEyBEHhMqYrpKv773ApfyNtAzsuFc58Q6ZL8KmnFDuUZTtVk6Jmo",
  "key36": "qYw9Gc45K42PCUWZMdqmKJpDBM38m9rSTZnR4MA7H4FGymFZsiQsiJ7FkF6cPXEVniZPaEf9HjiWa8wAbsrRLKT",
  "key37": "3NZggcHWCgethKhHBFTtnrxDbXXj3auzVKntbLpXMBe9PFJHAj3HFYndTLUHynC83rCz8eRECddF52LK6KK5saWL",
  "key38": "mEnAUKVcvfpYQLJtQnJtrABEHaZmfZ7xUFurJXMdEY2xq6YmH6MEJDSfNVxUTju62HL4af1Q7xqShMqv9RuwxEB",
  "key39": "3RHkqjbn1GM3T4NXvzU6tmfuLUfanPS5neuGQY7tonRq6fsD1jxD1bNKBcbzqhePRyMgBVq5hV2U51ok1HVTCewo",
  "key40": "7Qmjm5XZRCjwMHzAdtBcR4jjbGrms15Xh9z6DyFqegBW3JREcocXLbh6CrLuWfhWY3jP6f3AriRV2ktwkcteMC6"
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
