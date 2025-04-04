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
    "495R4VzQc7YF4JZzUki9QaanyuGaBCthcRmgGzuADeFjErUecEDfdXEBgaPzoqXUq2BsGFyuNgiZNpovWunPaRzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jrVCsXLPhSChMp9rn45ix88XNqXyemKs1SyN6QNQghCgryugqRx3iiVMdCe6JRaYZ124Sn8wJgW4sSJuVWaL4GZ",
  "key1": "64agYEyn83q6Y489U86LrKTK26GR9jBhWzhXNZP8fVZ2mJvgH5VYnT19VhgTg1zLgfWxALK59mFki7yd8752pCeR",
  "key2": "492AQo4g8FHyNVNRSZdwzFomUQnokwMA8QwjoYz62cfBH8435meySWtDkA1fQ9BwX2UrbBMZpqTvhgjZWZFhVteq",
  "key3": "5uTeHwnX8GNJkyUp8QaGouAJBXhuEccJtw9K4eact34fANLrvFTUJdoNE37jzCoTzDaYe4ur3wmGApfieeyis96C",
  "key4": "3SB4vVTGdVXw92xNGnBym2hAUy7rztnEnAjjByWptFkNnnVSCxTiMXwPWn3uAS9XvBPmUJbRgNavLq4J2v8ZPnN3",
  "key5": "4RqF2C2Uo6ChndyQWy3LD9jq4UH6VLGr5DqhBhZQemT8aon4Nb3UBojyiyGKs3BAnmcyi52YsLTC5MmyjvEUj5sk",
  "key6": "2rXtTjY2w2jp3Dpe32tMNrRPSQYqKmYx3xvbjDHwbvpMj3zUYtL8bmGKJw1upFqVWkWQPQiRJyRLY42Wbu7orusm",
  "key7": "3YWFc8iDG3Z4nc88QKVXPwuJZh2xvwWYMQf64SpWjZG2p32PfMVkE7HfdaAWziVkSRVJP5o8G7t99vvP8tc3WTxd",
  "key8": "6xnsxwp1oZDp5uLkn6rHE9Evbp9xx8K9NBhCeELK6jSni4hkz5GrNGQkhff9dCBQprbALeb2GaqH8bwGEm4KGda",
  "key9": "67iHpwfKnYGAp8WER3szN5wZxvAFpGGKnuEVzWvF6eWc3XgnvTLEJcgbqqDcHSFUGLKgZfvJbx6yhApTMQxPZkzA",
  "key10": "4Ht7tYzA5Wu9fYYTpdCkBHMt4msCfnprXDCtNS76tz7dfLRFJ5E9QgdqX9p3p7MnD1RVSHiq6tm6gk3Yyp5FbCCS",
  "key11": "5cBRvooHPi86pbTn2D9paUudrCbUZNLXpoV5vmQ5mXWycJVLPLtKYnKpm5fw7zaJHVBULPPie1tQLPx4Qq6ipFg7",
  "key12": "46cJG4NmJfhppH3bsjacNWNyPZWue6eTFjaqqSWnqtvnM2nShUjEVuk88f6rTLuKYsASkVrnE3ZauxcD2zdGeGWA",
  "key13": "3kbD7vQgyoZWXzWp8hGCVor1CVhtD4QfJbnfka8MA7cfiaMiFKuTWX2ofzMRmtaPZ7nfSK5bNKaVcRJDTNc5J1GW",
  "key14": "cbTMq9hnQscFwcYG85hrFSfutzEUqnyBq3jE83SAvdWJauRqDNxySa7XYdXcjV8w1XRV6Dw3j2EyKQPNtQYa9rF",
  "key15": "2uWQPJGve5YSUVuTPhq2RbYUvaNtJvMpYN181Kwd1RkKejomhj81MgYvdpAfgH3TrXTDshkg6kzpuTZN9SkcALs2",
  "key16": "2UUiVuEWVQVqjmdGt4osUiCpwBqLpTgm6pinxPA2HfU12y7MidKum7KXHvuPFsDUGA3D5ZgfLVbhXihG4CkxHAzJ",
  "key17": "3rBBoLs2QgGFqdZciPUt68aS1LQRHY7otN4RGvzR9YiSYXsnNg1SdwqaBLybbvhUVm9sTm7n8gWY9SqVL7iPW1GF",
  "key18": "543yTEtwkzNXzKH5XWL9XmhRicnz8WFF6ByyKGHpZeRwD9x3SQF8uX9UkpZ9Ho1oBkjQJ23PRgD2GHg3ut1hL4SA",
  "key19": "3k1TF4Rbp4feNDk5W7dwY7Qyw612iHJ1JH94XuGxUEtJwMQmTxfsWqXcZUcfk7HRiishzDXXs3aqxfSZpxhER6Cz",
  "key20": "36pZqizQQq88KSYVehg1HWsyDnwKb3ytg38bb5eSm3qk4YKb1ECd9evrcdUKN3x5SycWkgxyiHrjw7gz3fEgdqLs",
  "key21": "2pRx1KDhstoMNeQVzobhf1vzVgd57KGtehhYyGR9yZYcUcVZ95Ugt1d6aK1Rfs33eWfRqJDcBGMe83GRwqwGYPkf",
  "key22": "5k2TSVjHLEz4wNDnAmvhj2UmCeNm7G3gJkGXiNMRYeGjDzUX9PHbtUVgLrN8TuEiRzBR5RhApTKDMYqSG8fUgeh4",
  "key23": "4bk2SfKRVUG8Cgwr1namJBpCtVAD5b656g9WiC1K6K2UrUNCyL472RN4MjVDe3NuQuCjjKyeE2Fna2861V43THLn",
  "key24": "51qcxmkmnmxVHD4WyPHndWqCVaRFEeLqGakEKcr1hAc83kHpXkEKXbPgqrchAfyR6uG4mUzcxNvfQ4sCkHekNdu7",
  "key25": "2NLoXejjZGkYGgHuVTB8LJkLrhzAV6y2MbmV5yFNV4iPkdNwnkuqsBt34ATafusa5Qceya6u7TnkGWeQTgCFk7Y5",
  "key26": "3EDVyZXLw5Q65simQFUQcTt1ru9MrKn57HxZWDna5HxR53W8hhHtu19pSo4rhZKRAUbTmNMAYeeXvTJxj18gb7ic",
  "key27": "3h6iNQXaLGGnEdSQ9RjhUmi8DDXyubwWFxEmZGkLaDNEEL3P9pNM6gGuL1bN5PCZVk8D7ZDvQvbhdJCjbDYUVPWb",
  "key28": "5ofMdUWedUzNGzYReUzjqbvBGjUzkrB5t6W1BBKDcx7KmjkXciuUacKuYiUPH4DRuTN8iC4hLtgGz4kUkVEn8zxb",
  "key29": "QrpHe7xnFsi5TNGXRKL4QxQDfVLH3a2BXRtsCzh514rLkqNky6NLkPq9zfRkiUjp1mDZz2Ua1VrQbnPuP37naS7",
  "key30": "2AxJUUPzFZxoXEW85Nf5PhySg4JZ71M5svaC9VkeCR4zKD7sP4ZjtS7366bVLF2WcpmjRc4c3vdba9MFq3jcQMim",
  "key31": "3M1k7umNvnTsML8WbaB5eE7MCrbzr3eTyLUK4sHX2geFEFBffq7USmFxkeEZaYA8Kox98GyHAAZDkXxmtLBczwk7",
  "key32": "25ywQCm7hpJcAySjQnu1ms3knNXUqdauKHUZ4r6yZFwwdqDn6oFgkFg2FZziiEA1vyWt5g3tDmjPkCvZdcWCXisw",
  "key33": "2cNNjvjGMkbiwKKLxWAgpUnyfbqk6tepcHgWM1iuamTPhC3UzxYKt3BqXp2nZ6Ax2e5QnfzAnsTVcZLfSaMeMXPz",
  "key34": "5SbJSYeinHYYFLzhepBr6KBWVsdEfsDGYpd8em1Z51TGZxiZ1cExhoLqMRgk8WGbGuwbnDRJ7UixbHFkG9rdaRcV",
  "key35": "2yJhRBCqMsoLr2qHAmg2VU1sUy3fDHtq9bCcg4PdgW4XvrBGR9pXJwZVtjkJcSQz19daijJ5XzBZRSy2hP8n4y4r",
  "key36": "Q7eUKAWboA5Hbn6wnvD2pkBQHLCp8AnzBKqe87D6BZDo5gbNm57sGgHxrhAfPRbc8exr6gtqLL45c2fSMQG7iXw",
  "key37": "iBZADmjqwZ9RR3AJ1YeCh7GJvXXTPt9XoybXMFbhHoVPSqQam4V8xefb2UjfbaCBExQfmbkHXayEAm6rFpe3CSw",
  "key38": "42rkHGE9Jouve2acruUbjHG1vyhXfUfRoMx52SXzCNkjFjoHEHL15UoHpnehZTNCBT8efZ4myzzwDnfzQsbiDB6n"
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
