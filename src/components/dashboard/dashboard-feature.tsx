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
    "3C3nn78jP8gidVP4Xxh8qtjJnrF3JuPsXZzW8qoGgybmcb3hCEouQ1v3FhpbeKSCde8RcR8emxDbbn4PmnsJHD9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67AURikBkGmYmPY7xVySXTgH7pJy8uXharmEeUFWefVXJarqSkWpRjEo9TvpQ9TDWQmHLwk8TyaA8q1rGcUv5ky4",
  "key1": "nWZfH7Y2yMQwijcgqu5udVmn7pJAKYwwR4HHGE9bkHgW4RrmgCXubnFQsXYMPbqG8bJom6JWnt7Xb9Eb9uLY5aZ",
  "key2": "527BEdQa7c8dBm3mZNkTHVCbQJYMoXbv7Rn9PzEW7fjc521yPiumQWKiQkhdXHDJRnLNCBoVKioCwenWoKhgqvkf",
  "key3": "3omVNHv61pyjd4dNtY7pWrRmEX7BJHX1ccjxL7rLiJmAi7pB3ge13FNsJ7LnYyNhaPPBQDEKpAAZWffPv7FKX1ZH",
  "key4": "2FBUf6Fa4XbBqagQoFaxr7pn77CSrGM5eo5JoLFwtU7V7D9gQeYb4TXkircd4pUVkc4tVwznUeiPC1rQGHjV4EqM",
  "key5": "4m8P4Jd33uykohFmrvYLkzzNDq1vDFkN4JxtCBzitYwdAEAho1xQ8965dk5BtBMMGddPk8UXMZtYHeRwVfvUiLBX",
  "key6": "66K7fe2fLruqsQP9edrRdaxqXb3kBPLmZWQ5fyAYQiLVr5EYTgjgVYKWrfGoDmVAvxHtcn67Wq1DZPdgue49oHQw",
  "key7": "4ghhicza21AF22xLeSUyC79bUpFPRTW2fYYDNxcTu69G7DTV1HbgYmrciUa3eW9TARouBRp9HNo8iFqP3cKc373K",
  "key8": "k7i9yUzF1wmqPRLniSrx6y1gLGza58rKnjKNao1EJ9X6jMGnqzNMXyRtmsJLXb2AUW5S6cJZptradRGvskMWkt2",
  "key9": "5N7VMdRDKzw2VmfWF6FstVkGeKDXYvJHEUE3ctRFHqXXWia3tgFgyrGMfqk4pDGyGxtB22ctUfkntwxkQuKAypyJ",
  "key10": "5RV6MmSxd2HRC1RJZCm2gazjjy5ANKYdX2iGSYhWs4kzcPKEkZMpBzGeaeoZPMVuqnd3CBNhtWVKxJKAwMD8ent2",
  "key11": "BD1jXy1F21oAiWaYGxxQ1MYiZs7uaRhQocCm9NSuyGkrbMbiDGyZBrvJxeT9bzz6sc9VqG7uUFgNHDSVnABZXmJ",
  "key12": "2CFE4MaDsPQ8Xjy75A2jMyFDbo7KaimMfbfoN9FCYVViNcoqT7exHm1UQ6Q3twZPhrKfApPigmnJL3mHXLsaYrwW",
  "key13": "5WXJ54cKV8GX1DTZKRMhbsv3NXCkDP1H9Hix4AmJfRFyuHAbetdJ1jK7Jq3Lz1K7caoojkv6TjkyQFj4zcLhA7jR",
  "key14": "jRkxqpry9atFEnVUCkYsDb7Tz2Ajr2m7aKw5hD4t6J4wEmmkUfQknvqrreQuqaYMUBS4Zr5eeWjB8afafrLjXX2",
  "key15": "29o8MbVfsh4bJPfScfBLvpnGSjvRX6sTUdJe5A89U2y3wStLWhYaATBn4h8n7v9mEqeUybD3zU4kT8pErr7nsFEQ",
  "key16": "nMBHvCTbygrQf2e7G2EYgTgxdc2NEeM6qHLBP9HFR71NJQ8qtsS449DZ2X7z4gRfGX6bcAHo9YHJhnf8K5VsGyg",
  "key17": "2pshi2HkB3sYHwCUXiQRVNFXCNAx7Yz9F35NBjPcGj2orsY4gy7gNHQfDqyZXfZdhP16eubhN1oBe9nBPkSWqNK7",
  "key18": "5ca8LfgZk82STk9u2hoRi8LT9xC5jVWAr99PUWtAtPNTs7b2aoBYk78FyjdcewDs1La9LuxjY16eG5DNxFoqhBu",
  "key19": "3A8LNsdsUQGGRNjPrrDt8jtpHUrjTTXrvHmYQfZKUdyArxJJstdqiENhQJDtxniMZ2Lwm3gSRbdBBMSWTuwSSz6q",
  "key20": "4VQKaD8QvUPmjQxqJ7okThbg1A6eWEXZCAPT1DMV3pWojFih8jRfdh9yRVGBubyMmrW3QBYJGVMoJyiUr2hSTWhD",
  "key21": "ESwQuz9Fj9EtJj9fBizRbeBxAAbvfFpGfHHFZFAL7VBWuhkm5sJdrZdYd7Zaz57Duxw25KBNyf36cxNNGvMSm5y",
  "key22": "2R8JaF4kkA4EFsGLrWrntgSASUdjA8XyYv7cxdyPnG3r6CEBrnfk13QpduZ7fyGAe6LAm3AKV3Eve9Pma3bK5piR",
  "key23": "3gnsUsvucPvp9JvyVrpGvM2rxJTv7LiPa1bVmx4zZrYdCP7eQ95YG1nK3KS3GVo8w7rBHQoJcKezBvb5jQJ3XJua",
  "key24": "362s25s832E6WkfdegefUW7dAb4fpixfAny5FEmb8wDJgHXM89m5c8vd4cmKH1LZJiugKGzJXpHxz6g3nQPgNsJZ",
  "key25": "2oLkfo7JcLseRrPmZB5RHJWjyyL5DwDd2LSBTbMYiBP8HhoopaYhcYZMcUn1XtwfG7ApsWqrJL4kydH6EMwS9Jqa",
  "key26": "662cUt2VDFXJg4qqpKruVn9SETvUwbKw4K3KT8PnYZWNauZ9pa6M8HEBJJcNmpp89u9regW6DrXJNQYN5w4ycY57",
  "key27": "2tzMhA197xPEHutEYBWEuNpF5pAAnG69DhjEsxuz8vzLpfF31qC6YUymL98ztRHevSsTtD9PYiYokySiWVmg3Fpo",
  "key28": "2z5vvKXLEY2cR3RtwKKPqvWCmpe1xmxzMBCmrXp66WHzA8E1datgwwgTkyn7HCtB7utRX5D6BDaZkz5AMkiac4kT",
  "key29": "3Fdv3xvGVVTnbnceeWdCXbTk4soHYuwVggPDp55w8AD5tHmaTN2Ltznk7BD3g6xhejSKY3NWwAw2WG2uRi6sVWBS",
  "key30": "4iR1sKDvuVe1evLt96YBpubtwCpqkTCMmb9i3tBfAqKYUuNVA6LgMzTZFRwxNC1eSHDWoofnJKraU6UKxMB6z4Bg",
  "key31": "4k6NMzJEyvEizyqqxDkn2KDjoeGNTJVowFdGA5KB3pY75xRrKgotxrLpXymcLJrv6HGk85qEREpH1V6pGAxcqwm3",
  "key32": "2KNefh7wokwZ19eqbgAqn1zo2npvBpYtbthZ9GrRDEs4QjwwnHsrqnfiWFeDKR75bzZJgcVdG6YxevXAYff7n3oV",
  "key33": "47x3cRUA4JDiJVsS6Z8ofCH4XvGzf3SV4uaR94vG12NKA87EbCmi3fHSgfuXzWNsfz62LNarjTLvSHsL1aaGMAKr",
  "key34": "3LWfceg3jLNV5CLEvcLPzA7kErvE9AznsJtMCBD6Aoj4vxHGthehdi9c6UZYY6BCZwA1SoSWh4cvsH6vuVP9iNSZ",
  "key35": "3j1AvjkR7yNb3EghiQG2ZhRXtTwkbxLHfWfnDPdALYt6HEFMykLT5LSK1QaWcEVYPNSbUtSYpsrDwt41rgXjNHzw",
  "key36": "5VuYvJCihiZuKdc9SAKijDhrePcNVgnBRt8BMebEi7HoV8B4MLCApdeppkfivfeQNDWCEZ7M5a4FiUSbc9kpfYhr"
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
