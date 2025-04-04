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
    "628FMZi53EkuEdMot8EuvPBtLtDHYvXwNyfaMwBUSZTsKuM6XdgHXs1V1gu7vqgiWcFEWZg4RfoVdssPrAHfrzWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BQQcmsyRQomNWWRaYw7V6nZG1RMyEAWygct4HXaqjx55TDnhSNJ22MjrkuhHhfQJuYUqvN67og1buknh2t82Czn",
  "key1": "3g6xqRBRuAnTuEkgG3doWjMd3oCXpQtqESpjbCgusky5BwsXkuE3aQ7GSzU9ien3p3axmSaNfJxBzqP4CHXvLaAL",
  "key2": "TxCRrZfx1VpR3GfsGVzMH5xXXcXPdYV36nLDsYtWtNbBcemx7DMbaz9R6Ff3GNK5WDs7yz4vUptDjm4yfW4L8jQ",
  "key3": "4HzwTr9FjC7JqPxsT518nUPjF6x3zsGcu284dnn3F9WhufGjM5FB15MZFDs5RNdj6eVJgg8HVm1KK3Rn6YJcdX7P",
  "key4": "3y5kutJTWbUDrVw32ZY875oMgcC1RZbQp8r1BsYQH33ng5NekMcn3mqTev9TskUF52Q3QWKozwKpXgmCa16o4BKr",
  "key5": "4LaV4mpZfdVp6AVRjWMQXzfXLKgWaw7Pb76FpyMmutSiswL1v73UHsgE5x6Pv2k27TUU4BuHX7HFcfFJP2A12mmJ",
  "key6": "3c8wLCr3Q5kzVe8Hf7Z9L98pdNooYjgPhNPc1fMysmBcz4JsEy8HbKfuLNU4ditNpbSotKw8Aps5cNn6u6bwvAU2",
  "key7": "5TPhM9B9yTD3iMfusPHsU7qXnmXUmgDMfUpTKsXkazeGnsH5vQRVS6NogN2zXzyZ7xidvDcwPV8FV96Qr37JtLMP",
  "key8": "nvGLL1MMmDeb5NGPk6PyaiimsNCC4zPM5kfvAiVW7k3PtHczAxMSyM5xjbW3DBELa6g9pmhkuHMxtkhRMJCYA9D",
  "key9": "3TSEMZA5R8W9BykkyySk62Gg8dnkbYv2Lch8oK9NvvJP8c8uU6o6PyxyiwqXcUJJoRsrV9L94ZL2ijio4gwDzDHi",
  "key10": "5UEZLDN7yHYf55yHHN3AY5CZmq7Lbfgzm2oxL8bwXekm9qhjaj68Xk3B2i6KHhzHTkuk1ra6VNgY7LPXmc9AHBps",
  "key11": "5Qw2HbisnSjniEzrUcnsUNoXGMQvpxHwwH7sw5RDnmC5L2e8EpsaqNPZzgopk4S8hiq9jvWs63QRDYhtB2KVYfH8",
  "key12": "5DWKywh2Ury6KnwXSecGXfHFEuMaww6y7bLYQ3EoGEmmk5tFJLokBeDfA1FpQ6yX6tRvhPv4c9ViVNjrLnDYQ4QN",
  "key13": "4E8QmP5t9xXE5R1K1EuXbUNtqMmStf9KXoWtrU3YXFascnkjgxAkrqYd9QucqJ3NXmLv4xvLFKUh4DFUxSFHpaNS",
  "key14": "2ZDYEtLzTRoChWrKmauuajbtYQmc2CJXRf3DboXhwWrqiwvMKPSfie6vt83ouUZeNnmNngrf8jPqvG51T8EMtdpx",
  "key15": "UUfJi8iYK69LZJ6kW8TihQNzT6AdUEqZRiFNEqQcQxfx7jwANqPLn9ZdUztrzEKVYEWXBwkH28ozdT8Mqkq8rvk",
  "key16": "AF9rtjZki6c5q1yxQsoh66S55MuY3iaM4kv5PCefpZcFBHmsB4UyAzASEXw1mUyK7KtHfaNvhTsrUsGBwGMp25C",
  "key17": "hzAecbPL6q2gNeQKFnfXUwEwMf25Nw6PuBJuFP7ofTkTQwB2WDQTRnEiLT8MU6wDsbuw4s4uBshNA1oNjCZZswf",
  "key18": "5KYsdeGxkF2RvNij5XSuK41NEgzD4jRjkiALMGEJHHXEWENiFxuX2dsC4zhSv42wEzE1eCD87j7izfRNpKaazt7C",
  "key19": "2UjFtwbHW976vadvhfkdw8heo3vTET6zvKfJzLsQcVC4Ha9i23BW5296mw2VVZ6AjAyTGKjpUaasRye35tsx7NHU",
  "key20": "4tzkPViWnSLpuQZ4HJEj5Fsxm17TKGcQzoCf37VS1tTAs8HTFFfKCeykL7GkUgigPFZBxP9PoBhmvibcbcY1M9xn",
  "key21": "2R3wtH26qNQ96Pw198cztaEPKhm1LEwaoKSB6rfpQiYUwf9BWpwAknzvwXdbcu6npa57NHnv1Gya4FywLJvaABrc",
  "key22": "2r1HfX5GpjTvs3qh7SJ4TN6tPuxJVNqWeWcQqbj2z1gi28SQQHaQYTEcfaMj5mXzj5M37B5ARwu7fjVbff6LG3ZV",
  "key23": "bcawKF2kWtQ92ZZiZu5SWX2Szcu7Y6Nxz7JndAVqy5h9wPDTfgFDTUuhGivE9yEyqNaBuV4WpbGv6zjDYK8DgrU",
  "key24": "2T6dpACmYmNsJun7YgnrD6rS5rRPH2Ujo9yB99QMVHW8A9gkS484YNjiUvCHctEtJbuNJgrJWs7zSu9zE6PAEQvL",
  "key25": "3Xn44z1iEnFvkJcvYvaBBPue4us6TWK6DVvbCDJf5prV7zZFnXrhowHduSZkJsVRnhKgu2Mrtw1hCFDbJW8sStuC",
  "key26": "5Xssk9JabYSfCCru8mREkcfiNW3H2EqVXrTpf8S8MLNETUphpLQHsJMcCE8qx8QAusi1XJKZyoTi5mFsxWGAM1BC",
  "key27": "4jrdJ6ayar9cf7UcapC8aePcrNFjxjBKsS2ZQQyq5YZWbTH2XfopJpW8Qhs6w7TJqhSrAMjDGYSs1efq2m3iV7YS",
  "key28": "4gycofZCGXotVAHvM9ry3fSDDshyWoH6EWNWmXQRVVwyWTWQsMUy3fGWLQgAxuXbPKthNv7ZrcnW2Z6fU54D3WKQ",
  "key29": "2VmyWA9T8zYgfvXP4fHHXFiaxpGghf7ahwkXkwfNQAAnmFmrXNQRGrjxhebntdsMcqbivfch7EAVG19iCfC2yyeX",
  "key30": "4DhhezSvskZJo87uXVZSFk5UMFgg4QcQxpg1r5ov5d74LnmwfbKFjjRq7ecx5EkBbuiFvKLiMo3R6CgJ1sqL16K3",
  "key31": "2PMtfEzaHsn4Zxu1tXyGhzshJ68gVjPLYYdAnT5xHxQdA96qo3adq5cqPkbEv3mzwFL5srr94MqBSXYDuZxf4wFX",
  "key32": "928ondZP5i3bgLoDZoW8D8E7uAQ9nWDfDAMMBc2GDV74Q96c7AdyddWwmr4JS2s6qD8ddAxyRSi7X1LcATx967b",
  "key33": "2hvghZEu6gBNLhtft15tExfjMNcKjXj6DUDSkjEFvkJBAMQyoJQWXk7KC7yhhYCHV4JKdyPxAc5LhJN1f3uWtrY2",
  "key34": "4KZr6eWPetXJRb7VyTQxvbv5Duo8FUu3CZxYFFmQhgeMBo25AtQK3ge3mi4M3gvmPkoxuNYir1za9B57KrbHmKyw",
  "key35": "5ZryA3M6Aa96iGn48rV4ZEZZkqLE4G4AuHLmZUTDCzhGxoyMxAoKxsFiUkzntGfbJi2zFKe2L2JxJP52vQ52w9VN",
  "key36": "5UyX13bvhkqkgrF8GK4S5PGKkXUVKj3VEyb9pqHbW9gkDC9geC6Wn4fR7g6WXg3csinRddaA3EYNNo6PxBLPzfLd"
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
