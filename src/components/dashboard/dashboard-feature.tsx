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
    "5ndtSWKQXFvGu8E2TWK4B5CoG9gqZqRDWmQ57qtyo8AYKk6brHHmaCyXqdpt7rjRts2NFMkpC3XyZ293F96Chqkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61qdnLnKHSb1tVp7EeJtMVzGqzQYL5sgHJt6JQgWfK82GeercKwhCmLhRuuRck98n1y8dxPgadrqjUPwkLouBgpQ",
  "key1": "9R4UfXPCgBbSDpAVhsuk3tUmhLK5j57hPnLVCjJhAt1JjnnCWqSurKCDY5B6kETbt18RBrkhSncsdJDwhJdKtyY",
  "key2": "5oLN2ZVZmkHwjczv91g9sb9ci1LuSvs1isAeppVgC765s4W26WQsEkR7N5pNGJAVuExJF9TR6qqkGmBUhRp53iRW",
  "key3": "4at8ppAgvEYxJC1QJEDT1hG6cVPGqZUXuudxbePUEuec1Cxo3R2BMrAra1bM7nY3SLvcU5P9djQudfX9UUPnK6kb",
  "key4": "2WecDXs8qtcn1yj8KvqQgdHoQBpTaNFArQpU8mNjy6T3sEykaxaqH7d8wuJg2WLE3EWC4GdcPmGTwCuuh1ckzr7n",
  "key5": "4FrcwLsHjBt1RXDrFpKUdZSaQf1zbhmXGafixhpGHFno73ZvCgoTgi9xfD7epq4MEPq5RfQm8z8sf8k3iqrJRSXb",
  "key6": "4SMxf4JdVPCQ78yv38pSPwpAghTPyp8fNtEgA5GnkdiHZ1H6Tty1EwYqcSFtL7oWzcgoNpD6VSjNy5XT4MWrTniN",
  "key7": "3MK1fGjX1WygQV1tsdXWV1b6qTjUpwhrVrijht7hfShBq2xp7SPtgw2HeLdVUtTv7LFYRR2VPDkgxjwT8CMKiS4q",
  "key8": "3w3xgDVzhoMDY3bHg3RXGMEHcCnraC1MQQL4MCTPNkN3MjpbjUiLcL1ndGymRdU7TNjkjN4QTAkw3DLayqt9nb2e",
  "key9": "3XnMzwQhWF8GydQiMmX1jbb5R8sT8H7TjhLYJYa2krmV4D7rwek763cpgiRXUZiVKeAAJv3LT6Pp6sVpQDpXoFL7",
  "key10": "2e468tSrbzYT3at6USA28NmQYwC1X4yNx8X7dXHoouEPtaBCa24C4QBNaGmg4V3ZcPn5edefbpG8Nz86gDTbHWHP",
  "key11": "3atP3M39fToJ7dCA3jWb3Y3jkDZ3krP337h1v6BquxQrhUegCoLrbpwYQpW8BWXKA78WNkRvka8rgDD4LfUwtDbL",
  "key12": "5gaxy9MxrqgYSb1fzPSXXjKqmj4eajym6vRWRaPmbLDu4AFvakXKbg66z2whpEzGNYU6affmd7FvaP1X2XDZ265Q",
  "key13": "3YRFnATYjPJDY1XLaAuRFZDGNrjKZauJKYHPLSLZDkwBHyvRcMgYWutidR9f9SdkC1gxYEgf7ss2oR9zmKqp34Cg",
  "key14": "3qVnm49uWvR7JAxqGkv8PKcsRzcc58wX8sQ1fq7ABQnHQNzvEb5Smb5V5UoWG7dcoV73Wpkjt5rcSvLMpRcbkBJh",
  "key15": "5rT7FPjAGTt1csaRxdWsnjsxFu3S58HJwh1PmZpNevzAcRqGKMRYUu4AR7XqBndK8Qf4BrzVBBqFuKRSoPu631FD",
  "key16": "2TZyNTjRnKd7ev8bdcNjzos6w7WfKMCXMota8FwMT7oen1UWuUvbcMqnQZXoi1Srem5d7BJHHCbUbFhXHPvR2ZJS",
  "key17": "5LSg2CgSXvKRGqtyLmkK8yhDzBzzB2JUbHG1wATabLC9XhMR7FmBn6DsM19kijrrvLJEU82efeQXUu9nNSAHm6sU",
  "key18": "uRjzrVHBRF7e5BTNDukf1cwU16CwzN5E2jep28WJYdN6EnoYVuPUkQYNmVMxmDWurmgwffa5jeJqSzE6FMz5GAe",
  "key19": "4XHUQRAREKHqsTZwiugJASHbU8Fo4zHNkifEY5HN6mchXWTs4LsGrYsy91c4cL4b9WqyU4TiS9nQpdFJTqTZRHXP",
  "key20": "63ccLAg4Et42SUBS3KDhAqTnn3JPiv5RPbTgX6AJF3TFQELEY7qmkx3DViyTQdfwg8NEVfKgLHffo9RRQC5YTmpx",
  "key21": "64YzhHEamsaTcxPsqp6rRDUrpSwPo4tKURJfcmahVxqaHYpmZrprUrMf6xjKcMC5NwK3L3r4obxj9UGYTZdTT8Jk",
  "key22": "4izQGmuAAeiP9VXtSy9ZemCDpgt1f5FgivUpA5xz9gcHkDxUqkCfT1t44sfgHFG6YhrjKn7qntkNH2v1FLY7SyAp",
  "key23": "2YVJC6wmaTV633kzWYY2d4Vw5qoUENi9cwa9SRQZQphjERem1anKneGHPeq3vfL38PRx6JQfRxTficmcaLoiPFUz",
  "key24": "3T6i6TKSLTycs7cHxc3YD1ETefe2Jtt2M7DcQZmCK6hQCbxT721q4uitcvmM1DkvGkpd796ScS92HJwqXd6pSCPp",
  "key25": "3oFfqUD1uCFmgRf6p6HmGx3WPqPaEC8UZqeRYoJmvuGYRdL47yMTQQFrMqE5rVrhZ1N7Z7cjWEqC89FWQx9j39xN",
  "key26": "3DZk8sMVJ93QvbH9f36dEaS1spanSNxBhRFrZmyAvvzpH7FN2q9xMfyyRw2XoCbSpvNaTuKXSQ9tp6wzzqWvXU45",
  "key27": "55C9WKtFdhqVGwrnzn1TwRyCa1K2bc3Sbz9dQSZLXMd4hjRhR8thtmKzCH8H4zbxmrV9TbTvQj9nMZC4eXgCfysJ",
  "key28": "4rEmwnkEeuYgAEbsgcaoSRskBYii3dAP2LGAGrZF85nTCv2sLsjR5DVGfzakn3PL6DdbRYjC6neMVLyF3Mj5yEci",
  "key29": "41Xg9eadXaWd5cVzg4ANrJFqLee5T2Rku1R3DLYPZwzHmGfemg5es4h5W61sft8W1ewHmpgoruPE8eRzskt1qUyd",
  "key30": "4ceCttuvSzSKxM8JEPtJD5fqz5W7v4CNfXqBvMmBDakwRGiLhDDc1UUCXaF5frJdRPz8X2V9t2m4ge3EXuiHQpzg",
  "key31": "2PmonvbAEak8waDp3DHeegseHZebJFGyU1utVTP7uPQNzuDoTe6nYFGMGXqqxa6voia7CR9Nrvx7KUbyUn51fzP8",
  "key32": "5pvjm3hj9zJNfqejLN7CBMZD8PeDDp9W4zuNQLWQgCJYrg4FSfW65RwWixPa6wFzLV1a45X1wr4VD6WYJX3UuqiY",
  "key33": "5S59gK1N7z1JrZ9geUvsbR9oVBYphby6tM965nzpnJKvrgYRDYbcaHkkZoptrKM334J6npZ5dHdhrydtha3NANv2",
  "key34": "5YAQPdYRVVxTtoHvtLEUGCG87MrvQiq3jDD3XeaR3JxZ1HFN2o1j9kGKDpy5nqStb35h1ewszUARwq6J1fMEdEHZ",
  "key35": "4fecxZME5dBv85x1rj6nkwrvWBRH1He3MEgmYA3cHt7U44u6SDLk13xGMzEkvhdVRxLN5X4yHUCsZejhuUGwLofR"
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
