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
    "5sxPXbUbEC3JvsXz8d51S9eezoFDdbx8NigsGxAbfBsXPzxrJijH8YfPmJXWSJYqScpV7esc7oawsd5UGxjSv3G2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3idcVQCUj1sErbjN3YRAoPJhJ3GWMVRsrRyQbVmg1qz4Pf7t74tR9EPnBMUoVSuGpvitZbr2MqYz8uJbWr3ND78M",
  "key1": "4jXH2n7gmyyPBCwCa2VZnkDqN3Jnqrm595LGWeNQWxPrjJZkoCteyvBBGK1fVQnQJ9X4r9p1kiex6DJ7VF6o22a9",
  "key2": "5sXtJa4KHbcwF1SQe4KBQaDnatB6RDCXErSBUwTGDQLf4WXw9CPMLBkw7tqtTdMXB5rrJU6uDGz1xRUdgtSpgWCn",
  "key3": "2RKXnopHE1yBPZvo9NHxVpys3xiS1P2Qd1bGxEbuw2n18j9QmvhFYa3Acf9DG1tquU84Mrp7vp8VJW1Pn7Wodo3c",
  "key4": "38cXrikYiZadtMyP3ZyXzZ6vS8L59DpzFrMKoc4j4DmzYiQvDUUnGDnYsbwQUGTDiwfMcnD9J5SaJyQ18LiigVT3",
  "key5": "2CwP3NXBLNEVRUMe7Zm1wW9J87ZDnrC5WDvzsoAhpkw5FaL3vDdgskpTJSu5WqB5sxipG1HHovpcsiYKnzx31nSg",
  "key6": "4HUyQ62zwfww3JgWtF36m6HrvRKk9n6i7ue2FhfLXJUh11kNoaW2jHvtC9WZ9d7E9LxWAwMHkoKuq9yLxz3pDLNS",
  "key7": "4cwt9wuSfXUbvhWNbaLALwypFPYFzmiRtywtAwbsau9L3arE9fEgdoydMY6waEERZ2rwrGRfKjKNGFCYQ8TKWvjG",
  "key8": "2xRqkxCNBwkWqPVgmMbNfbx4qwu6jbm7ofXqV3ki75XfnbYsU2sLdpPMhnBNBEHRgZGJTMoWfWYNoWwLFaK4tyXg",
  "key9": "3AwCViGbBMJWyUNaLr5HAfFzKjZt7k7c5ZUXciZo1v3c9WpvtZCVCz2GcjSRJpKU9djzKXV1EYyVQYs8ZXraqiRC",
  "key10": "3bdT6D1qF5g7SkV1BQoVcDdNCP5Vsqqp93LEk6oKkKzf7dspc8FBdHDHqGTzTq3G9WfQ54zZyEPRYysMPVKeHi2j",
  "key11": "2ga38BkWdCK1oP7c8yEoQfYAUTYzgaubezLfbBxACifG2p2CE27u8LJJzYtpR8bv1Ry986HUNU9ssSzRp9MbPCeh",
  "key12": "3e4XYVWTQNoeuzHk9MkWUem2S4TpxCZktUaChBG6ZTns4LdugUwLUZeiytKVK8tXbuuNBpgWSbQeQ2ia4okSPaF",
  "key13": "4a7XLA4YpDm8qfeuPBycAKqWCECmFtgVLSLU3Tw77iSq4AXpvRKreNd1Vd68PY5oxHizpfeLdjDmUPinMBnDq43L",
  "key14": "3V7yitz1zMR2TLhf34VBeUoKymDjPXYjqvwqUGLv87yqZTQx3bv7Kajp7ENBDLe9vBHC8FjTV6pg2r2oH4LSDfUD",
  "key15": "4MhD8FbrQ6KWFHm1QyqYzwZKDvJT9adhGMGNQV2FPGEqbRQzuxbKQgG957GudA3WvgEWjnX43ZvJ6VYuLv1m3KY4",
  "key16": "3JKpV18wBbty8Qe73GCbPpsiLd3oNqrG935aNznEBYHVYgdsPf11FmBrk5W6ukiungRy4JvExZkhouk9Zu7smeXy",
  "key17": "5bLBEyxpjZTKLYhRgVooyw5U2qVsatGRRKaAipJJ65ZSt9Mt4NNPspZZAzgVMJa7E6JbbhAsALqoRe2HMFif6ffp",
  "key18": "3NatFZ1bFgL53PkUwXCmNRjJiJWJ1AiVyaUpeBr7qZELoPv3Dt6MQhUzutY4Z8SQNhmBnBbZBLBsubzEUTTYXfZ2",
  "key19": "3P1cAYLwWqG6qZSQ71m6V1sMf5vG9u57z3xAc2UQwy3yep9LeLEncKSWcZzbFfTfGUAq9aHmX4DFurBXx2DuPGWZ",
  "key20": "5umx8fiwrJNDp5FDpuV7TkWdcSpr4D4rHcot3BGyDfihN4EdZQdMZt22FeWe7G44aEjwLmtmq9Fxv5bnT7RpuLFX",
  "key21": "aZYCMSuYTfWpYriEwg29avyy5aiTrqSCpGg7hUZQWbXre27QT77myQSriogAFFe6SBCzDi3hfaDiTxDPPP6FnGw",
  "key22": "HkWZGfHo8Dz8GyHfidTj6xQw7t25BKz65KVg7auE7NfApU4KH2LpvWkzqzVoaZsfTEt3k5jFk62btxzDf6FBfP3",
  "key23": "rZXqp9Y61B2hzqsiaAd8jWqeawNmc7HmQ2S5YdKrahLX8A2y3ZsxxuonTvy1TxUyzb5GeWGegsgtZ9BQ6FmuXjk",
  "key24": "43qsU2YxAYa542pkwCpgnc8FgRnjpMZoH97XYh7N26vGVXZnbA9nK6GxJR1zeg3bNxFdeYPwc4L56xo9sRhJEMsh",
  "key25": "5qNJDaf9Lm36uH7gKpuuzF35qiUNh3fvStCqebEdqEjdVgGGcLzFP6RRi7z7tbFrMVhhu5etjedrAGoMV2pNduMp",
  "key26": "LmL4m4s3G7Wip2BQWEcHF83RZSjxRa4UjkRBLEA2WkuM6wbgpezF3GSt5v7LsZXQivW7Kj5nVY7yxoj7YqF6c5h",
  "key27": "2Mr3y1NQgHX7FgN2jJKEDFruRKvgEYaACgq94q7at797LuFrYqxt2asSKFZSeZ1dEgSNpR2cTV2cCuMCzETibW8o",
  "key28": "3zLVaTVYBAhc8A7umATMcFGVj95v8Xwj9fPJLebyfbMSreyju6HtGmaKf6xNJmgKXaspJu6zeECYm2qkgYCZH5vh",
  "key29": "4Hvskck82b7LMbTCR6wxvSY1yyfqQQFncVkmbKPew6VY1fsg5vbWwP5JebPneqqxMw6m76H1wDm9ewoJd9AobbiF",
  "key30": "SiDqhBr46obEjq2MCr16eK5z4m52tosxFsbkxvzfqTE5tmm1X5bQgpwcWRj4VMNzF9J3gD4YEZJbqvAJFhPMQP6",
  "key31": "612bV7qEJuF5KJd1XwQEWyfAztrmZ1EcNViyQhbri2Na9x5rHygZFBuDV8aFoYV4ifSDimN4TZwt18CrKbLCXoxA",
  "key32": "2qS5oNyyxJGi4wPk7QzVhXLwjiuedmJb7g7CvEDDLvZuivHi566UNPpXnKTE2XosnA5FLHRb1u97X3J91r1jq2H8",
  "key33": "2WfZ6M6EWopwY33Gxskg2dBXf2t75hZKxvGxoAnzfx6gi7848wWkJMHxVdXJPs9VJmU6QviSFsW4EwPsME33Ggbn",
  "key34": "4HKiUWhFj14FPYUFcEcXtcjVzw2vFuWpFVj55CUpPoahjcGEcvEAnRruSig6y8wERUegcezULcFNfaPufmfoBh9r",
  "key35": "MdgqWNLgyCVoFpJCGEVUxnmmtutyDhKhM8j7MbyBoSRoBnKQfsoBb9S1sT7sQ4B3YQk22wAWzJe5HKXUimMXMsp",
  "key36": "4kwEyDp5nz81nYhB7CjQ5gPMSS3cQBFzhsK7aQLxvTmP2J5aMSpSJk2cmEDFntoHwCAxa3G7zVs6nQoiuSDnq8sb",
  "key37": "kFTHcKHUaPCWu89ppwbLMGkaQ9qNpF99HnUqwT5MvfLFfkMdhHw5T5ZnmVtGB1TR619udXYQ79PDnjjDdjqiBhM",
  "key38": "5J9mpr8EZSNhhh37YQv7FEAM4n57NUZq6C4fLqvBygAThC9LrbU1R4rdCW6tFbJkThkY2Vorc3zCr3VbeWJXanH4",
  "key39": "52HNPLP4c1XLc3fVYsTLoJHJnD2Ui8zpnYzsYmD8PLT83GZHp2s1K9pvA5yaPtKiLea7E5jdXUkGLgU7GqrDEDDx",
  "key40": "FmZrbju32oPzSJT4mS9gsddmiT44r7eZ9m27HY4CJFXPpuxN1xZH4UjEoJph557KFNhWo5jh7fs8iqXpBuH6NhE"
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
