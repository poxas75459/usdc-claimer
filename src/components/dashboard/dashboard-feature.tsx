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
    "2puJMtPJrFawNXQfuWVZEU7Sz8qsqYTZpjgw2B9BEc2uAsbB91VvfS4zu2KQ7JrbS9dZ1dP3i7KKD5dudLQC7yoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vJXSwDciz76TnvfcFVKmvHRqP8rX1Stbw5XfjhM1JbSsgYPBaGzUkgKeJT5dHWUAz9LTb4jTwgKr6YrBeRZaUNj",
  "key1": "5gsaQNVFvnUEKEJ1LNz29eZbCNYbVUYKYJQ5im3J39kdf98MqrHPSGiSBJGiPJxKx5WokzGHMfWV9N25W2xZefgb",
  "key2": "47mqrq8idb2DoDo58m1BBBXi5b9spsRXZsn1LXxFJntHb7FcDqgvpLFfDvhZEhRZi4i3webss5jJ2hDbGQJzc2Zg",
  "key3": "4DmbpEahigNUjqLU2frAkuphRzCpuA9rJ1JFk15QVKKSiMpHAZTKX5ZTZkAb9L72ZjsAnt9WwzGjsr2zTsPwfHFE",
  "key4": "5uvUqjKE9jPE92wRR5mwzpJWcJJqboZUW4CueVm7SkAXTQk2FPY285YSA5DVPJzMPNVPHhM14WwFTDa4fFobXV1g",
  "key5": "jRwePcLtaCZ5QH4fHUUxDSG7aXxdGPZVnsyKZwJnMU3uD4a7f9rgVC2fJNV45QSpXJSwHaNqJFZZvcNByqsuAtj",
  "key6": "4Sh1YEdoj7mqbpQhMdBN6SwJALD1ZBbNrhDMoMXENKZiG5kL6ujf58wS6cxJbUdb1eni7e1dtbzkhCd5jsVRX2jp",
  "key7": "4YNuwfLH1GdP2SZPnqW1JR14W7xUkpEYyQjbDKfAixuyHBbBm7WzVtii6Py7bLjTGpAhS62gN6nASUk1wnxZqtpg",
  "key8": "3tMB46YWCZ2Loscv1uTiQh8gCMYLc1P8oUsrrtYCjhQcj98VTWD69a8CNk9JeoRUD5fVhNJQuuZVdYQKtaKb8E2U",
  "key9": "joRXWswHASg1wM1T5YygXUAxPH5xva2Z8MvziEZZqZtCSZkHe4r9jUbgDdjbfnNQY7tdBmZuUxqeDHHsn285yLX",
  "key10": "4GqsYdQUzJ7mt2W4wfgMVmW7Ncq4921VHfqAaEaKc5myjSE2DzPCvub7nLRCbRF8QoWD75u2wKmfbXG3wbAQth5Q",
  "key11": "5mk8MQSBoUyVECLw6vCbFUkta7H8AFXrAeNVefuFqkmDPZKhTghsijncQLETVLnLhhAgR9vL71kmyEfVvPqhh9xS",
  "key12": "5WkAjapSuq8gQxT7vWtoNCAmyizHDbBAPvL6pqWR18ARn9CkzcsSszuqYYzDq8G3t9n3Y5iPwVKqLXYHXnwLjzca",
  "key13": "27qn9wm5msY7cNFrDJP5Fgph9RQyAEieBQri6pppRuUJbiKrX9SZGb467cS4PSb3symFJhA6HSCaWc1KBREj8Zri",
  "key14": "2GP1yqZyckARyQzTFYQBphX4U6PXhpi2iH3SZY1LpCkwknaD63RD5wRZ3Q3wfdH3UdvYoutx5RXRQZYQKrgW2Jg9",
  "key15": "3hhWhTwqBe7dERBhXyqLxBmmejKBKk22xtHWxTeSuHSuZPxcAcC5Hp77Gw9h9w8ZWAZJ1FdRZ4Dt1hSnaJWiYH9d",
  "key16": "2GjUnGYqxHqFo3XV9JJ6Do2jb1zUiLLHxkr2FK9CQg5sYt7EcyXUWWk3TBYvg5qaN6TrX8USWyic5RsAZHw5x9hH",
  "key17": "4P6o9J7ww3mrc8kVAzvdUFDpgVuCFQYFmtEu3jVE7LaqbLE2yRbQPzHcUmiwWDNcoCeyUUfKPMkd6vSd9P42WEx",
  "key18": "2Z3qWV5yqMEA8teh2ZWNsp4RDcxtm7Qdc3AvMWXLz97vuYgBtnqQBWQYb3Qg2AcoeTtnQe37xR7ugD9ubNpWXggb",
  "key19": "3mshv5nH7oMeRfvRLpuPoMjyMS3Nsbgxicu5q8Bw5chM2C7xPa5QAiyXfpkjBPVTgwaYunPv58TV56xBb4Kjj9wk",
  "key20": "5ZAJXTGpAk5ZJ6s7ZpGyYJpgoR4VYQG9Gf2sWasR6eHcdRT42vZnsu8kgiortjkRgSuxuh2uhodSyRipaLndLcMv",
  "key21": "5EEji4zUYSu6FuGfZjSWDmbx7FMLawAq5YEpts17ySdDW2iEFumXuQAW7seiKeyYNkVA2Rd8CvFHx8ympiUWZm2x",
  "key22": "3VeDPJBs1iuaKdsNWGYaSqt5BRBW86xTdTTqLXA7pZLV3KhCcXA8cPm1im4GayDcDjE9Poms8okFaEpKXd3XWszv",
  "key23": "2B3WcVjgwhae6yBdxjUCEBzKypR3j4E776vkEx4JmyhLDwu28NqoD1ZB2Ztyc7RrQ4q1hpheWjkfc7agvS9734Lr",
  "key24": "3R3GGtWir4bDVP3NCn6buyaAncusmojpciewQeMkZ1zNt5eeTmJbtHNYBrmthYLSdtkW6GFajN8UYikjWK9HE5zw",
  "key25": "2SrFA9YjDvkEukUgNngcQrTsbM3PbPYu1CMCHEhr8z7zNfcE51vzhB6kMFYT8qPfbtCiz1i7CKKrCFKJQrpypzMZ",
  "key26": "63T81SMXf7jYw88by3JMzCgcEoFh4aa27gd89SJVxtxqgR29agKkoJuU4uwjtDC7RXufmwvdSqvX3MJLcGJ692xD",
  "key27": "3eeWjfeNug89RSHXZgz7vjBNw5UDcvdRmDNwTTSLfuKedKMKJvZoD3RduQeQznmNLeZ2u7rTC3zSmRJhZEKyHsv2",
  "key28": "4yiXYj3CKD6VsS3FKemJwRvSeKFmM9GJWu7jfpB6w8hHwUAAfNhSayzwEX9RYjX5vw37HG5zifPAmnGepefYM7MP",
  "key29": "271dUsFMXz42dJ5K8NX9xRKm3iJ3H6X7goFquvky1K4zoHte2ZLM3pjNSjR6hqec9NM7Py2VMSTmyQvWRsHcjXNm",
  "key30": "4sPD35QYeVocNatjZ3F7yXrJwEzsQXt3f99hMe7qDhGM17JoX5pPdwypMN2LNiTwKgida3YyY35fw6iyo44Ezjfz",
  "key31": "2GgbERAJ2QMJUnDnmSUBVBp389wKY2yje21Q67SQDHzN7SR6oKrzATqX8XVcLsfGnxJPBR4bbi2hJ7taL1yPawKe",
  "key32": "631yafbccbVMzUtEZCKNcmSfvHLApL283PbGZmKYcgUdHwNDQJMrQf14AuP8VNjb6nb7qn7C2u3DteJTKjs3BHmB",
  "key33": "65W18tJkj8NVAq5WXxmHCwp7Wu3AzZajsfdofeD5dpoDo1oxiLPh45G2QuVdbNkvjau1GhJZCUnL6kd7wcfdo4fB",
  "key34": "3jiY8bUjRyxx7FGZrzk5syYVk6FS9KvfczDwRpi8YdaeCfRvEN917NUEpgtuzA9ZiX7KD6KfnAQb3EAPg8tjTein",
  "key35": "2VP7hDfrFBwRy2nMi5vBCZMtyLA7rMi9dHF67i54RVHZ1TbRsgAgvqscRAz3DddpXkphrX4qXfsoiQpwuaYh96k3",
  "key36": "5wMMCqNkQfgtRz1U7CakyfpjKwEH2xMnZ1kjSnYSQA8eqB6GmqeTyydnJa5atfAJsbg5j8bgFA8M4T7pyUptSGf3",
  "key37": "2psZ9GhMrHYkXToasWyS2kbN2PkWzkrmmhRiKn6wwe27GkGHt7ZV5GXvo2EQJdainhDm9j5oijqbft7qsa9oSXjo",
  "key38": "XfMpoXMXHV8F8NCW6d5tnpyMhkdnFHPu4Q6uithYiXZAbAHhT4FfKUUtdzfTRJHZBJvXwoBVE3z8ajYpWdhP8CN",
  "key39": "3rxmCQS2QZwywJxjUKNZ44Pwwo3SyX6oTyp5xamAeLiDtwyjxu144Arc52bzeUnoCNLqjN9EvmJz1bVGmm6YsNsf",
  "key40": "5AfALDN7dA2DoMfqP11MbdSntEnPrTYy6GuQVUdVjdPUCZXTueYL6XzahTpJVkQTSCivyuiaMRTaJHK4ABzCDwTZ",
  "key41": "2cassPRX1xWW3GNRghQfCR1L8CwynmtRdxjgEpHy8GUMNc2F79KibTZ2MRwuXEMTVrdf3bPHhcVxrWyyRBj5Fhz9",
  "key42": "3iZJVNFmtvxVZw7j7dAw7CJhp4GMZC4Hr3D1KCSBRJxmbpmkAQFTgukMgxDbqVUYZUvz4KYgqKWTGic63kiFMacW",
  "key43": "414Ewhr2PxgAJDQUzDZQMgNEYW4avacAENyFm4AhvguHfVDCzNtX2qfPrQSbqTv8qbrXr46MjY9YmUCShnpbKwUD",
  "key44": "5vP5woE15FPQmRvtdxeNBZAbyBcjsXJXn4JDcyAzUThMp7eHLiY58JDxiXKiGM7JYtHBpKkWpUkGyf83kY2EmyCc",
  "key45": "5HfP5rebQRytcVPh1wkGT5Z349n5xaXoqoUTw2CCy1zrHfB7S9AtdCnuTUCuR1LNsatevjRFj99MXnDWXFN5g7cd",
  "key46": "3PERtViQMcwNTNToTtVgkS7XdUjWTasy9Q1ACMfzUrrdUMZ6ow2u27uAqxJQK4pfF6VFEFpz7uQAivaZs41jqxJi",
  "key47": "3uJt4A7udZaWT9B3yM7xeQrquXQ5y3agMXPMA9rjtVnCkqvF8ajVtBmFEFE4k1wTQYzJHbe5RWhnMw65xzRqM9rX"
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
