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
    "66znGWSV4j1ejz5N4rA1Md4bYWynfKMJMVDpggm8NdDTL8Pp222iVFHrrZYAWojKwmXubNLz1LQtb5WwuiTmVzBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45AFyigxXrreREmvnx4SB1B1Xc96FELwaan4kPKJj4oUSoFHMwMoJhfg87XmGumpBEajLSu2VFEYCPiMi9fvR6QZ",
  "key1": "nHj2XjTeBftmYpS1jSFU3VQzx64ssND9WuSuitLaZXwYn3sJF6jTJqDXECEnE7wEx2DntGuNBAFj5iYjEiENMrE",
  "key2": "2ZyjTHT2ENxsFqC8eFP5hzFAvzuKPQ7zL8jDQYLvB4oon8eoKo51ScrNr8c5dzZ8jWoVbQwqjkDWuyWeRkkXzrN1",
  "key3": "4q7h4vDmgrummr3W18Fnm7tfPf9osav2Sk4A1jsJuGaGPknnZ7aF9M67Z3NbNQDFAC4iHtA5BApTFs5Ef3uR8sz1",
  "key4": "4bc3qmtgnxgH3UDHGSM3TktyXvYbhCoBY1pvzUFf5Bx1M4K3gy7VTptDsKR3nF7zpBgeN14ZTruVsEwLwrNE5SHy",
  "key5": "FzRVCQbdLpXzgBX3Jm7r7s8vGsp7HejF7BYeN95rz4h5VovXFJ1EY7FvMHhYn6ujtJVBbxnMHAPvq8UAv19MaRt",
  "key6": "4P5iyQ8UAfVRYC8TaViU1QcbjGpwbqoVzdhCrDP44MTtLNsPwJERxKpUarcoEFP9ymeMT1D3xndgRcmZwP3vyrFi",
  "key7": "5hjJcmGBRd3SeqwbSHoyf62g1T1groPR6aYm7RyBvAWe4bfC5jPwv2xaf2hpu2ShvxCPTwXUBHYd1Y7ZTYXpWvNR",
  "key8": "62EjqEHu5Y2md8bFFJ8TMAXsgjfkRKnPjvsEXv3FbbZervruzbNZ4gYw3PBaXsRFuApczEr5tGuceuC9kTnC4WAv",
  "key9": "5KgqoD57uXyvkis5t8H9KY5f7c4KWBEB8jkP4a3fcEqkQM6mkopRz167rwJSNaJgwKpBVKsg9p78N3fhXcMGNJdB",
  "key10": "5apZj5iVAj7ZSjZ4Db7KC8YTvDrZA2pzgVqxCB3rUriNxvz8edhVWfdiJRTVaotzcP3gwmz1pYp21Et2rZaZyn4V",
  "key11": "2gKLUS4yhcpWVScmbnTXoW6PASeFi66Wa2BbeCmGVPbufU8aEHGBNQwTssDTWsebUmeTFnr2u1ikvTTr7EmitbMo",
  "key12": "444HbrzZSomzpi4umjVy41rpD7RwTGcvU8EA2NmEyrrjix5wLjpWaayxnWRs3H4Gy1qsEVeKE3T1HVhXStGRtowV",
  "key13": "15uNcQ3djgTRvZshpAcPratiG4zU6QeFj2rePsFbeafJniYHRGZpyoCAePoX56Xo6BhBAGwUoxMfMtrwbmfcSsk",
  "key14": "4gjsdFVYQgsS57mhAgtPqoHfciDgnqRQzihibGbHLZpdGyHSqngjy9Nmv5WZ5piaG1GqpqBJiTFks6Jec5FHqepW",
  "key15": "3QyoLdKNRAtrN7jVYbKJVvBs3McUC4Qmmxn8GsgN9DuS6x2joiuM1kxXTihXJpCyCVHd9Mjwwr1SbCegFTLHTCtc",
  "key16": "243s7Nz9Sd1CZyj2RRCxT6hHiik8LKu5JMwiYqh5v5rk5ctBcNwuhrw3Dzb7wYF4M2dNrkg1E9SdSuVXD9a9SVCK",
  "key17": "1yiijooR6dCT9H83463zyLD1jsSb34FcqU79gY7ekkuxDv6rXYqV7ejq8QHoui5EvjPX7XXoKEMwb5ABM4jGb2S",
  "key18": "GaakzVZYZuVR44hZbouZiP7UiPgBPJTTcHazu1uUyrgTcqCTbF4ziDA5Exur3SM8VNswCkgVZAAvm7xF7o3af7r",
  "key19": "HYfFsNGAY3yH15wRGt6tNdvtUPzGMpYYmPPH3Bji37RNJbH67xJAu9bQ4LXV1uVEPe3FL8JbMeUnA8UzN4yTRg5",
  "key20": "w34Q9Bs5w7oQffbZBpNB58i3za8vVmYv8TXXWe3Pusx8m8ZanZUYa3B1edhzVLP7h99HJ6JZsUHJAB9aZDMeufJ",
  "key21": "4ZKKDTzZsbyYQMZfqYxy5JRg2bFGLXs2jGanvG7Uioi8cEjXh2k8NqHU4YEmDZkjfsibiy3dyQLsDyBSsvrJoVJC",
  "key22": "4dA15pNKsdPHKyqk2yFbqVahbWLKYgedewXi8bhjA7QuohjH5di1TG35joExqKCQiCiKXVnLNJ6uLb7Y6S3qJpGr",
  "key23": "3LzMCvRQ5JBqgUXypM3r984W3GxYJ4FmGti7h6y7LE1douFQ2rzqeoDKTTHUyYjPP4kue9anhghSa2zbMXWNZATU",
  "key24": "4bcUyB1VQFvDb21uZxUHbLoPyVuhYF5xc1xKKEWDn4jujBj9jmPYAoZfyoVmej4VEw6JgjwWm5JXH9TgFG533Qge",
  "key25": "3j14FnknmZBXEj1fDaaXYkd2qHMn2T1uc2AfK9XkxUkxo4xyNkQ1eCdR27J9ntbRSUGWaUDfGjnAjVyLsfAJDwFo",
  "key26": "5kCpJeSVB9RjxQWEhXi5tJ5a2UkLY1NJqSjYLh85y4UuGkcnZzE7YS3wDN9KUGzZ7iAS7Vpq4zMNWxuWVbgeu4FQ",
  "key27": "kuy8kxjSSp5dHmc65eHN5NXg72PwzXysk86qNxj2suUChC8PMDSDDWaT1QvQ3YWDxAF6px8N8XNgAUrdDFVb5kF",
  "key28": "3JQVQyvQWmNb4uPd1vBcWkrpTssLfD5Ef7AWzaVNuhwL9SPQpiy4z3AoXZpXkZ4fWrcAsGizYuyczQ8B2mthrSha",
  "key29": "3YVpCjWzL1AeFTVzfsn6RtG4W8xbJhenmh7ZqreyyVQkY8d4JqQzE3r8fwefH8fTCxhiUh6cN4zuhqM7MVbfFvTi",
  "key30": "5eaEvowQoSQimNSsVka4WdofxSNoP3RZxaJgnLnS9mFnrVBAmbwSRW9b9yfNsG1kzxGQmJSMRg1pqLhTUx27jjJU",
  "key31": "5fgBJMnv4vFw7XK7RHN1P9Tfj8hVsCPHcJAYF8zHi5838fssKbMDhmnPTZTBzg8Du7ZpeBpPmaidnam7hMmuELdH",
  "key32": "57HWcE5njGZt9pC2zDYrYz1umXV9amAM7RVBXktwtvaxJYwtbbrATWKHbTnjzA3c3S9gmEWCMDQArwQzpa4kkLSh",
  "key33": "5ewnxZrQr1i3Udu3LukLNtRjmJ3UaiFuQTMdJoungty7F5iyEdpRYaojAeATch7JWgBKdXf1BGMR61tvDQkcPF5X",
  "key34": "435dRpAceGVi9L8ZjDc9zpvmWrCGnQMpuheuSH55jitkLQbgrYo4Yr1J9g4DeSdZrEbecron7yTVeaQN9BCjDPjP",
  "key35": "bXRHdGAxjAJRjB3ajA348GrCqiLQ9YQ5ByiZgymfi4vmxa43YXbm75unWKYmrx7V2s2ncQxRB8EqWnCYbsHk1pL",
  "key36": "Lao5paF3b3UuYyW4a1cgLF2sQRoW5hLN1cJk9U5tjcbnPaa7Sddt8S1Y9iBZfEUGKgBtkS4eNKDJUwAKzuVB32D",
  "key37": "2SyWpi9D4Za5tT1W3QS78kZQqgsVy4NCrsaMXN9ZkSQKiR1GGSWYeo6Ex3nuwGgg4nxfVwwwhryE5fWFed1nDwsL",
  "key38": "3NnDKiXeqRtd99J7wJDkeSWa62GD7sYCiJq5mq4kXDaeZ5fK2UF75eywf89WxSyAvqCPSzi45eE2wYJ5M5YhepWL",
  "key39": "63CBsB8CiQYCyBLjoZUBhA6HpzjdrNV6MgTkD8sstkRNLVcaK79gt55kYAN6gpDmbBmmdo18u8Lw5iCeUY1VCPp",
  "key40": "4qFHLJkw9GiCMQPUoBhqLfRFfBDk5HQ3umKdaQqaZuS4eDGv1W4kcMzx5inuwGHbMsm75jqbmB71MiLwnuLKB34H",
  "key41": "5ePbf8E8DTCH8E7525nQkA1nRVGYYi6zqgwdHVoMRSHebtgUDrDkpdnbT5i5a98ZK76VcjrAFAaik7y6dWn5MqmH",
  "key42": "61xyTeVb9TzaTcb4NCtcTXh2JEm8q5AHQ6wTLXoRtpqfZiQFMvLiHNhYJMrNRrBJJdoXm5GSjNuiw8YH56R4bmSG"
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
