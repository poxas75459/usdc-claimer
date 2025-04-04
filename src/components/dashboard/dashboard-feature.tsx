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
    "27UDrG4Ls6d4FvBzYHgYV7qXrTQ7mggtdb9XfRe1gtDA91zZCV2XTbvatG9Sxw28SNG94UtpAspa5HecbYZyZJtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VkbCbnWeP1ZgmfvYDMyorBg3jAX7LzprHVvDxDQ8oSqU9EBbtB4HYm3F5AdcVyZGsSQ48uGEjy3wXaYdZrqKMf3",
  "key1": "27q9NcULaae5xCoFRZqycmYmpnzYMqbAze9e6nZjwtkYpnzvDHFUhamK2P2jGNN7NU5gqLbZPXP8dAB2NH9kP7xc",
  "key2": "5F7mRATwb5JMrBMFgS5Desdvxb7Rc9jFn76rC2mcRshs5atboGNwdabg5zPcSz1xXA5zvdGyLvMZmUoSiVoyw3P5",
  "key3": "c3HDz2GQLHB2PoF72kzxo9sAt6ptQPhTo7PRFQMxLaSQ13sPa9QhMn716AyDvThSTSnMsc57wja8cKh38qYfWoP",
  "key4": "2GoXqwLvz4wU6v7uBQmQmmSmtTWHEg64GwE2RUMki7TEEeMWZFqmwbWDeKjXDJa2ZGMryQPwwYPZvYzMqeYzvKFd",
  "key5": "2qfKrc4bC7EijhLbZjpztJfWRW35bC36EPK1MxFzPnw1oFRZqgBzBAbnRnLjvCCtKSj4zCisNWbPwDM3843N7EWE",
  "key6": "2KJ21k8GENzvTN2m5kzDP8viFdUzTDDXH9FSZtm5TLWZqnfbutPvrsWueyxTK6pavA37wKxbZzVEyCxaJdK18agb",
  "key7": "34jgpCo3s1kJCskBsx9zR9hThbq6UUSKj3SkNxwd3XavjRwm1TtFLYNgPtKMNiH6ZVGJnUs3aGG8GwchfK2BVZ65",
  "key8": "qTYmMWYVn8kWv5G8jxCbvd7fkrPTmziKTq6pVdyVkFCxbgyooKw2xVtj77rrtAa64FfB6gZwDfE2Weo5kPnxY83",
  "key9": "4VjCtg6faa5dRvtNWCtZ56ASjCFbi5LN3vQGm4XywZkvGWyu2UcN6p8YjfNg15G5fmVVqh9cZHfztnpRotVF3SC5",
  "key10": "4kkPfWMoE7HQKjk14A8hKBZEdJDi9gLCWiECY3FYuSXwmaKuvzZ4ZhShJZbNCeZidSFX4TsoeWsTZzeKFmd54dC8",
  "key11": "2w6BReDsAzm5wvbEGgGnZnWtg8BD25ju9oug5q9NmUY3zBFFbDgGbRMZCtKW5NTZWjfUeqxHGRGUpuvqGQP6BNcN",
  "key12": "e52N8YLte2gPA9U7iVBDKogFyhaMePRRArcoGJRLRDRULYhhMVdUANybaAKr4fB9aw6NufYywwq4JwYTBZkHZRW",
  "key13": "3DJQK4ArGxQKUUPwETTNYPKddyA3ujtUmqocHfDoCAz5P7nec3P5BcCixYAxS4a8FzFbLAeFLDuAVSmTyw8QgFsk",
  "key14": "5Zp1Mpp3hf3AfnyKLhhE4FoDhRMUwFKR3NafvWkmqtDCMQ2MNWijUwMiVbGipsaH9ZGfycP2x1WCJsrXenrQhY5T",
  "key15": "3VkPVrAqqfVSDbcTCejJTrYb2K9m4yDMmoTvtVGhTwRfieSfFGyyh1kzZfvbb1cJ3ZYVxninRratBVsumQy3twkk",
  "key16": "5ayWXqUeyk9H5ooMLNBsFXe7UXh9QWtJjHy9h8KpQwUJsQfoV6KsStZ7Z6WncPoNLZw1xE6LcsGKfrSbpnNS2YgR",
  "key17": "2KTSb4TK1u5Y1dCEm7HBpytP29RV64QJty5YGRy2Sgft4PKWsJS715PqN5eywYtTD3jap2xFqx2LMY2MtAcL5iZC",
  "key18": "3822HBePBqS9jEZTWtTFSecUxfpuG3HU2Jd6pabnZiAkACHVJ5NjdbckTh2KvmrJT7WVBn4TDxu3T6N27fXrPAKw",
  "key19": "3C1y8HvoSnpbsc7y7wejKVNQLum3ohh3QeCicHVu3en5HrGBq5Ek9LYiqigqx9W5tohzfCHMrE4HLDPqBzxb9iZs",
  "key20": "5bNqcfq2UUSUgvk8pGmG5PC1bxBYa6N7kATY6fCcDZjnj8qUd9cNnF5by9MJK4WhSUQ82frDnX59JiHhUFZ14DRX",
  "key21": "5LhjP4rz1gwXsSpCYZ5AiTDzUuRwhLiYPvrTqXZZK1ahUbQGkx5AycnZdtwAo2iLPi26e8vSurCppB1wWjjWmNpL",
  "key22": "25enZz1szS82Xou3SLocRuXfevviN7uW9YCrZ5knxXQmeNVwJV7kt4JqNnVbnbk6gLyjnaVAfqxrQ2PsWDuN5qbc",
  "key23": "3EAjKnxnErGjvW6a96ZraeDmNtC7NePvvt3GRduT9NuiCvbU9aLn5B9ADePucijJGdMxCQ3c56eWVsXmUj2Wbzz9",
  "key24": "4rLqnyShjC5r9zXi1rkkvw3sy8rCR6sFvG5JK4jALjSuucDgFUq6uMozFxJ7GpAkNZx6CzQs5uCQnUFs8oKzx6Hx",
  "key25": "4trXrmRUNGYbV5UK3MczLZWSLEYmV1Vw2VxNhHzXeKV4venn51AD25ECL1KWYT36xQUpfeU8TT8kAppMvBBFtdUZ",
  "key26": "2yeNe5fKAhuxpjQNJ2vvZMNEGk2pe7newqLX584dS9pffDVWdRhC6uefn7RR3avb2LPmJL7utqXB2TcswM6SSpez",
  "key27": "4A82TTEt2oobVXAXM9w5s4f747wW8r64TdcSe6cNMB1scBBRiakHf1W9Dzs5y6t4RuZKRpC9hNvwNprkZsA1feP9"
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
