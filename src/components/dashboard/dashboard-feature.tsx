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
    "dmdaps18Wa3yz7xacnrM8rZd9n4J4uYPNjcZHZ2cZUNUZ56CeH39bCytgxzNk8fgNeKDe2Sy64qf1qnkG8TtFS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8QREYjtzXonTguJhWWuS9bLwDTxzcRQ4hQ9wUKqYHXZQM7MuHq7czWZoa4MW3AHqNnwTf9hqDLpMwCi8ipUsRNk",
  "key1": "4nkwpHQBTyeLSBmTM4toCaPj9SnVhfsStbkVZf5g8Q85DqkNG3Mge39KDSuBB5s3vWa42f8Ar7GQ6bPDHzsGryxq",
  "key2": "rdUYxpp6DoH4cAnS9D1ihHWQyvh9rahQU1RoPwmYH5R9bJgVmpun4nLCavuy5bwdoZBZFWgRQJA6DYnwvV3qGnZ",
  "key3": "4mQjHUE3HEzeyDavDR6xzp5JtdeAoe4gJ5gWc2wziDonQYV4sd664tKjMPjkHXm3tkxyR2wvsZnVCEatEb3SFRor",
  "key4": "3bLSPug1BU9qna675LEXjmDew1na55MLT2uVdeSDVNt8prpkkhUedRjwj54xFGdtNQgyPciAf8t3u85tkkCvc5F",
  "key5": "5PQdJribLA1KXRSHftcVQfVFtPkhoPbgi2Ltm14A8Gkrcr4hm8FfVp2JGpdJq7bCjPQwfTqYRdDE3sYeacq6V3su",
  "key6": "5yvintMftHVBzjCziut8KgnhJrcBzqVPaiz11RdmqCbnomspqaUhXEhg88BztsNmkkytmiCCQsojDBLPsa4wKJAu",
  "key7": "J9j5Qbu8xCNb9Zi6cMUJohKHpqx2q5p48rHfWupssqooZUiR3mrQhSLvsnew21NEddqRnR2nQuqwjTBCsA63ETW",
  "key8": "4FusPpxxqXQ6Di6BBTeWu7xjBhbPa4fMoLjkEBPWmpfuZrh649PaDvF4c7eGFhFkGsb1kigMEqYQfXL8xyGxBLTC",
  "key9": "5Q4G99AzsSMSqCfsmahGfYDc5vRQhj9yBK4jRTPSwcWnFPMgEXjkwuU8t8Rv5nePKSPgp2RUFHT5Nd4ToJfQbUPL",
  "key10": "3xcdWS1Hjgz6QS25gUYiK9GMu8aYiZ7XdjLbhWheuVZg1XLyFjznauta9U3rhZMmLyimF7bDpqgRnHS53gR7ujbV",
  "key11": "2WerNXwiXrqkNbHepzNDp5enS9Aspotqdk5JFgn1K5C2ugKnkd5AiA6sdMJgumeSJMsMkZGiwk62Wacrzg8S6oR6",
  "key12": "4rCJgXqUxVavPNtZEbUzXwTZtr5JryvuYcieyziPZCb5MvN91oaPGL3Z1NqftSgnANnwh4DXobH8afYyfiweYHC",
  "key13": "2KGmVNBCJhHDj4TiMwaa9yowQktNjH489zdbhGgkVJn6jDHrRXzDnmQucHatrCBHeFoXdeX1u81c7vTbW5on3FW7",
  "key14": "WR4GtqtgNvieqQ4Z6HKN9FCkfRCg8Chh75zkeRogduD4kjfECXb5iG4f4iUjUUeJkyVtkXeg2QWjtKpLgfdsYp8",
  "key15": "5zRqmX15utwPdN3Vjdcj5xqxsgP1AvAuJSPpWhPWBu6M6WytXqmS5AdNmfKhBhpZyCDdNsBi7pZK4pCoVTxWp3Co",
  "key16": "5zae88gDJYN9f27eHLW6xUSjYyjKDaxDTgEoUmL3Uajxd4jjcM7p7YBjFtZNFarA1SH8Ka7VuFuLMSY7nJsF26At",
  "key17": "3sfVmqugE5M1kYahtd7ux2qNxzSEThhYqzZYjLBLmPtZKPbPQ1nxiKWZdFX4UiQ34gjdhNm2tjF95mfQiB9VGgF4",
  "key18": "54nHcRQSYLZGhz4y1oWgjPexqpFMuFnZMRsVzaLM6HhcKfmGibmXTvsDorbJ3TNbzaxtv6c84TmjyY2Sa8EfzZ9S",
  "key19": "F41vjmCDEjzGBNKFLESzv1Tb6cDbuiziGaTqj8X9FEGNoUMkWGGLLmjwafYhUVpHFLNzqLkDJQ2ZAFEBPTRxiPx",
  "key20": "4xBZVVi5gvQtHnuUbBnsFDqSXjP5aymzCWNXF8Lj7NAtd184boKb4HRHCmy4bp5unkS8wFNH1dMmqbXg6zjbnMsV",
  "key21": "246qmyHvBykAfGzYTqGJzCxG2xKm5p4dMZAFMHitqYevaqPZPaw1TnWB6h2UxjY7q7wzVzB3C1zy5JWg5fXNzvET",
  "key22": "5qJr3BwbkXEJunVyU6i2MtnSMqwJnet1aunk6tDNPX5FynMLFHPxm4gGoRqzMmJRUwns4d6Xc8XACgjFkKdht33D",
  "key23": "xVYErMvQiwAWCSaGRT19yrKvrZzQA4NHzEjA7gha4uMo1jxmkMKNXpdWAbtR4wLwDL92yW61ZpcS9s8DzdgEKYv",
  "key24": "5S1JziuBmHPY6DokZhe1vJsFNCuP8Cgz3GRZ6KG6PejKDmVY9ZmpdfHory6v3tFrSss3s4NAW5MmZf9fbyi7aa19",
  "key25": "2dGJCZo6GvUsu2xi6QQfbSbeLfKqwJykqUVRZMHLCXVTNMoPSj9jb1wtDCP2bijY5roTbYv4q2uxVngkuzRf53KE",
  "key26": "2Wnvnygm2G7aHTERRNXCWDjkS7WWLuSkYAqjZ5MES9TJJuLtJNzjoS6ux2W5yMcPUvH4Vn2Uz86SdVYvho6dUP4u",
  "key27": "5KCe9VxyKBWdyDACah9jYmrxRzZzVLwKC3C2ARZG1FDiRKREXKXpz8dnhL1mRKWdTVr2VRaNpjyWAkM45mjQd5QK",
  "key28": "MooomXiy8rV9gJAbUMfSqYcT5wP7MR7XWw1b8Qn6PCqxo1FxWJMx5q7HBNCPZYJ3YAQpTwdUrHmts79exBQ8FfK",
  "key29": "4uczdeCjSAUMNpeV3GNhompABK6va5m7SAk4ZGpa1bCcaoe8cfaXyZ3MyDg6RxaEcwvezvdQxYU1jsYV1bf9CzUh",
  "key30": "hYHWyJkP2AKZ8Jeu3f9aRShWLZFY8kS7fDJuV5gNuLS28CdnKA8SVJVmwFcMuhskZJm1agDcYVT5YDLUswzy9Uc",
  "key31": "3iPgbW2Qvi2HaCK5cmMBGfA688AKwzxakEjcQpbK92FkGVW5i4V5Ph892R8TZ7v3VBmFfsce5sgW3QTqMekoKZE",
  "key32": "1NoCrGpRCjFuSy34jPKRtbV2GJ11ANciwEhjQayYSvx1UBo7UzQhUdxQmL1yG64EYnqWTYwhLDsW5tjChfvYqGX",
  "key33": "HULhP4BvETYoLSQVayS6MMExtXVVgbnoDXa4hS2wmEiR87jHSrbUL48KGpaUaTXgrmkvzEAd6wFizDJTe9zS6gV",
  "key34": "2cnpozszAMTuXtmbJnNWasGzef2i6DuUoF7gGqLEZPT44izbcnNeFYTQD9t866tCTvgSW1sEtkuP7xuC6ZqR9jWo",
  "key35": "4c1gfBV6WaoRhfpWbV8YMg7ph2iYw9VRyMKL6MWFfF5L2fLT8AQTQFLRUGsn9dFssx28xdd1QR86SmAwA9k6wdtR",
  "key36": "8KEfeA1CVMYJmk3WKLg43puvrmM3gTADjPYV3U2jRoUTKYNE5RAEtusTqVQmRD6Gmw2SJ9xmfBmNUbnThxC8AE5",
  "key37": "5zKqGFpkPbrQZcxqNNJtVa8pQginxB8rMYhKdG7pbsrktYQp2swp4p8Fr73mHJePS5tsTF4TbCffrFwgDGeLbYEo",
  "key38": "2verBxTqpZkiEBEzzcLYZuPwxZZ4By7YVXZtyyCvXQTFHCfhuGT17rhvTgzpZNohpCBRBYRe6s6W5TEsSNFJMJ8c",
  "key39": "4R5rfhb4ipjPkzJdhTaveR9tCDcjbSJ5yzviF2eeEuomWfKTiTFRsnVqrX73NbAZ61fitXJz6LziknhDn21uTaAL"
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
