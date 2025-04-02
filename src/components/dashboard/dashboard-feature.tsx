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
    "4cPUk2LNfndbFZSw4yWd1uzq6tZ9L9DzBgctJom44BVbCZRxo5yb42jyfQJj6YWbVQALfANF5QeNHdp7Zr89iC1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M2nHkifPRyWN9qR29v7nSo3VLfuGcHjGsT2jgGtJQMTJBwD6B2unZXPyPrRFEK6ii54UHHKxCprRgQKBF84VJjo",
  "key1": "39gSXAueALXG3Tdbo4qYSqLocrZPuYXYKookjoMnzN4LjqXQZ6jRAQ9TCqH4kWThLK2Lf7AkyQDMBM7NWkPzxZsA",
  "key2": "2qQqv6iqS4f2gSQnLiBymd49vsCAwRiP41CNPUqo2EZJefDoq4pFgbYXXWp7sGdy1WnV6TmxRwk9N6iEYRfVsoJJ",
  "key3": "218xohuWZm2Uihztjh3toeS9nhfi2fom9G7VVZTts7yijnTJ8gMbPiaZjnBzWxSnEtZbQfgQnP7FYLipLB88ayHx",
  "key4": "2kiLK2aZbYXExognfk5J52BggRgfBw3EsVmjSDBYCJFA2B6nFnVAbDmsLqPwATvjKfsf91DgqqaBafdpzGQr1Dkb",
  "key5": "2z1EJCWxytYcS7tzuaDRPE6iEPMcLocGA6GaDHvS6FbrtDtnZFQguz9L8iBBYSAGQDKd7B4s3a6jNfm1MHGLuck8",
  "key6": "T9XTsgwaKoKV5GqiHPVTeqCnLSNis8xv4p9J5vpUvA83nbEbbK8TCpCQ1UyfPQY7BdScniKp3AeBhVDDVHkCQya",
  "key7": "gqSZemdxBLFLMwSwofxY1yGcEX4zDkPGSPsc53aoYbqXqawaY41C3yE4KBiPj5GJDsdWoJr7tTnWnv9uGnpb7FJ",
  "key8": "4JrT8nwviCd32XiWrcrXEvQVg9cqgKAijGQme5NUbEsp8HjLf4av9CvdEYPoyXyfbVpG3vWms3DprQRBc9eDY7kD",
  "key9": "SZgg9XcqK8V5ZtFXbKhoxDNkXxyMK259BqaRj9ELjK41bP1ysQEf3iefksotvATMdyHjQaTZphEBv6AV46KTEVV",
  "key10": "4k7WVCSpe7bxQGJQnDptzmZD6fBXt42tLFyBzYzfN1vWk4C4PFA6GuUJA6bQNBHyoHQmwge2bAnswzZs2TPb9xmk",
  "key11": "4A8U3NSyezim9Hc79qcxRB2g6Rbfdub6mzzjnyxzo6CXNKkYaNzWcsJuGwZHRmMqnuGBRa1iVLXcxNg9KT5JBfmC",
  "key12": "26Ls1vH7W7hb9n7q7kATbFBurxcQc2UzkPa3qFvitRAZhwNQQj4rYLFj9zXdtvHRzAVWLrDdSqtt1miPo4Np6TMz",
  "key13": "4Xo7ipbqDYGktc6CqSZTaoXNSxKdQZRsuCtvPyxhqUgA6jCBjem7c7NPjozJ87kp9rpuK9LxdQPJHZiVXdJWhaKy",
  "key14": "4rCUmkLte2ZKseNwyMgAZytPoWEe4NosvBvteKXjcsAznwPdVAG9RTaQQ8A1XpfEg7FCFyLQVrWbecrMQTPvUUyM",
  "key15": "5mBbZrmmgi6JX34XVxz31vFYotwCtx3keHEMkRKwDWwHnh4j5cD8zG9tk8hp1aDbu1wWRYit4nmcSKXKN5uvsm4y",
  "key16": "244YUMnXXfw9SreWKy9m6banBiRB7F5pUUi9Y3vX8ug8C24f3FiHtFe2w3rvbahRAHKastkoPwRAVQYgsA38WWkL",
  "key17": "v3tKCkeysk5tAsYtKwFP3XYkMXHG3amUe3dDLH4Ta7upyCPU2Doaxu9Mgttm5KbY4n6kDMb7rMRNGtviMVZPPGh",
  "key18": "29kDicLENsd6jhsCuMAJQRVy1iQ1LbZTBdaWmS3Mrnii35C99NEik3r93e6sdqCmTdFRuHFq3bYQBcKwS4W8iupi",
  "key19": "3wv7GbUrMwLvrijoNtLQmGTiAi7K8xAG4f1YVFMQoq3kYvkexbnAmREC75LqtDbideBuSX6pJ3kVfeyNnDZYS19T",
  "key20": "2rE8gvxQfFoYHoZSbUtpigALhhK274kWk3HHNhtMqZfZzeMuTCnu7B3iu6MTMcscWe7jXdJyG2xiuU41HewVxgrU",
  "key21": "2RHyRXcyDMVwqfd9KcHPyNfGED1pXaG8Vs53Nw1zQ4Evt1aGuzKDX2uGbsk9qofAtLCF95YGSY79NdjXwCRSzzJz",
  "key22": "5bErPYizjGk2iQw8rBkozHxwet6BvKUtBFyvZUNFNhEHWPjfifYJL8dRHHkdWz5PNwR894183kYoGuvZfF26qDpM",
  "key23": "5sdhokzbzV3hGBYWPBG2ArvenW4Ts4kLULsFWqCHcokJp4mXxBMphZudN2xgwcnEPDNvHvFEFfEnH1z1YihiEaRJ",
  "key24": "3yrtHusfZo99hgfyBc9NpFHTg3Z7XnzJMNmEkjaygJABmvoKQkMKK1MrDVFGyDxHVeZjjMFAAbCKyHFgdR8y5Ktn",
  "key25": "mHBbwVTBFkpQdJZGoVB4HHBVopKsWNsoKBXyvQt4U3ywS7pE7HHW9zbKZyHkQLj2NR8LJq2wuCkTT2ESLmuUABc",
  "key26": "5qfVZUUzTu1JZHK4qNxudfF2jUy9ahLgYZ1VoimyR96aXEGsrZMe7E7uY7WosidTkNAgrr6LSUEnhvudCSphxADy",
  "key27": "2VdiLQAkHL64CRRqF7T1mAtYRWGJbpir333Cqp7RmK2n1fkNmhXosTeac3PPT9FhLekcCzr6nutn97qHg6qjwjJS",
  "key28": "4ecMJSnXMEN8zvZHsEPVNDk3QZyHXiH644pVk51vrCDxGu2YGjqgQSo91aukhddYW5MiCSRpH259vdeiwKrFJMA3",
  "key29": "5LBWk25GYDqKHZ8bauHNckKjdfnjggzjDQQXfqiCq9V2E1WDfE7cjzG3ESsq59yVw9tJCHsR2j1n8TRt4uRDnR43",
  "key30": "37rn2YGPxh3QtTwVASLU6LLR8SNjRySd1puyKsE3b66uULF93aZcF4PtzzsQwXMDi3xij5Mnq1T3X1VFM63PQhqv",
  "key31": "5eM76YF45Um3S1qu8tbBod6BzwHPJJnjNzsRrPXpGs1FuuBkrvcVZbFfnJBANsVvyPmnnu5aFXCXSig15JPKAYXx",
  "key32": "jhy9cvhE9Dwc8te3dia7DGP5DLVPCsMpZ3DFUZPGnWV5cLphRPLm5HJo7BNGYVqfzDN8w5Lbb9Wsx5x1ufxZphG",
  "key33": "4drh4QPiUkKZUk7DkUVej8dmE62v4rnBFNmZw9KQyZqF4A6HE9ATFdhqXibkJru3MLWEHkdizrJUzKcYHbzZQaLM",
  "key34": "4Nt5oyYmrEAPm81eLuPBGcZs6a4oUCBJokzQf97pkYteRTbbns1qHqaESe3D1xH4qkDfbYJaYNrMt4ywSGGuEqam",
  "key35": "5nu8v9UiZrPYf1M6ubfA2szNdqyvD8Jtjf3NQaCTNni4Jn2K1Fd6gsynETnEFm12AEesVE3gekRU59GRhXgYyDif",
  "key36": "k4SAgaNb9PwLh2PwqgxonBzXMMPSPs6akatTWrab8dPHSTLmWt9Genv3whjgnC63quN7LrjUDAQZseamR7w5eSj",
  "key37": "4c5nN7ZtiJDRfPjz7TL6JPQGYWkagVnovt37DAhVMnH4mRFy1rkeUmVLpB1mzxsZX6sRZFSkuBciCqkS6QPptjXx",
  "key38": "4AN9rVFyPsULLaMPheq8K94k434V1b9qJpTDtg9UBPcUK7ztpM5a3FMyprbEphvAgQhThHcoXc4y7trJm4wYPsZ"
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
