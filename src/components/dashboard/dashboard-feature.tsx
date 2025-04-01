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
    "2jTBQQKfwn2zUDVj2shaaf1Lk5QREBFNcLWYu5LehdE4pikgoJJtxFbWQapMNgJBce6Ya69nCaNL5v6MBctQeQwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HiqXNJqpT3jV94DZXZuTifx3qysPhLyTtCKDkWgZbnHuH7D7PUfQ9icsqksAV7pTzih5SEfWR5Q3K4aF8mUNZF1",
  "key1": "4Cq1bLxYPCWwmQzxTyWYzziH7hPCPC1isuJTXHd834kPpYDDmKFbQnRM1HUzuGuZJvGzS1QYdoQR1EXRRhzCPdyE",
  "key2": "4Xhn6UbNKmKENr8ijFUnQizygaC4wWxQzT349VKt6wnHrtEQnDLyZcxYjzbAKPEbWN3qyk3VUgYPi7PuRk3kXFVG",
  "key3": "4fHQbfFmSaRXeg1zEFMxTrNz4DdKPhNigZQWQe2qxBJXJVwYWKr5CDNRCmyTBDoWTpE873gFwMysJ6c7Xk8jsYmC",
  "key4": "p8vBi2PSQrizbGSoKg9WRXYJTnwVGDCq8xdHA4ttaZCBS2KjcneQuVepRPcapT576zJ5W85y9HGEupAthTG3Jj1",
  "key5": "4hzk2tsCFfhZdKhQSyW7KP37qQBEhPXgBKyrhabrfBVh6qbSKb5kxXhETC5bWv1KXJzo8xPVRrMWNVJSUbsd5cPR",
  "key6": "W2aK1BRnW8sNutjoGCSsHwAZsNX9MDEVSvC9mbiV8PbsRGFMoFusTareiTf6eepmPWcvqAZHk6v5KNQmuF52ihw",
  "key7": "MMzzMM8gSBvWe8pWZTktEqfFx6mN7XxzukUuLf49vvr6zuWdgBuyWPTw9tDEsMEPhSooVnP7RCrnv2JXbAT6tBH",
  "key8": "5xgfyRsFf9VNrrgkhjKkQpQbWk1hTZdrgzA1Jsn4c3u2ETD18Xqj5ddXCxvAXPBwnTN1TqTpVAzf1i3Z4DVYnVfn",
  "key9": "4xkm5SYhSm4h9Wi7eLikVLcyrzbKRtm9vVme6pJQuzNPHPhECQ2JH2QwWYF7iJjLtvwyn9wypK9VVK1w8MWNoWTy",
  "key10": "SVrGe4aY1VDZbrcCm8s3BHaZxtckV6ggu1HW3phh3KsqiMEJDPSU1sSaY2wuTP6vxNPmwAqjsETbdJemQ8j83CH",
  "key11": "3qMwx75hRokYmb52mDBSNuybwXjMB2pRTxVFybP9vc28GUnGcK6ZNgqScRAV9wKmp8csRTwYZLNRKgTrc8rf6ygF",
  "key12": "3jVP5nub3KpD8nGGVsu4LnbjrB3PRpGRAkASzen8dBMu6J34N8ddoJ4skcbMpQQJy3erGHF8UrCM9G9AE11x8kHZ",
  "key13": "4JG9pexti546CrFhM7LygniKpo2SLjPLEHKfNwVkRyPJPKqfrb7igXmXDidecmqLXuTnjZdF9R2sUfH7syQhJtwh",
  "key14": "4Cm3jpXBD1kcnMAmX4RUpsr7p7RAMtuz3LKu9hmk55q7qjSdb4e2BALu9THWxpsq66PqCrhriGXibPhNiAi1WS4m",
  "key15": "4yj37SpzWoHtLddecfZXVStFxwUNcd3SQgsHi2bgQpogY17ycyPoKdNWZiZmeHvurYrG1q9F8T8yeThDSzz4xYCG",
  "key16": "4BNhTpumq96U2rL8hZR3muFdysxDqo4AQxXtqDFxjYfLUJwCtg68tVvcDQ72F5YXG7Jt3SSPKwpqcmUGqjVsLinG",
  "key17": "3BKHqCEjE27AYNNBNJWtwPeLg3nZhDn4ZNN85WG3YGgHhFs7PWjwQ89Wca5sDJezip9WWj61FPfh3D84brtvy3kP",
  "key18": "2yg19h7BuQ9J46Ltni6wyzzGZYCGQ9oDcoWjyHvXQfP2kZDLzfN2HsxvrZ6Wt894Up54YuTjnWjMj6Ma4tGCnPQS",
  "key19": "3FwsNnxvNQ8kk5GANHtynQMiGFpf7bx6hiEAJ6kPUZ8U445mJUiTsNVL5FYKvgdpkZbcQctn7doMHj8wvZW34ox4",
  "key20": "2YbqxS4oGtDV24U5Mo7kdaKkBLXbE8VTJTMPRUbZG2mPgcWtysFHtTbJ3hEpNRLoeTV3WGRKhsxoTLWDGqcPnbtW",
  "key21": "5WZoGyMA8FhAqHuJWaWWPoHoLBVXbVQUbxspUVxGdvP6D7HSUPrWa5ijNvrMmqxyDA32yBkeUaqz1nk1roiVsbUN",
  "key22": "5phiH3vrnrAD7f3V88jYddKTeibir1NZi2spQr8SdePbghTovqZq8Qv4yepzfpJmiqWpboR3XH99dtunUepCXgA5",
  "key23": "2udLkS4yRkUJjonBBtVZ6yPaQyg1i8Qe1hYYTTmSPNkUbXFvrEgawgJpmQ2ajxB3yaoVdniVXLUpdQB7KtDwURKD",
  "key24": "4mx2BRSib3brC3HjEF13QmLUqDdWKe1tWYw31zLXjqGFiLk9Dt8x8sgaNRkjBfV7tJATU2d6DQ94HvDkAzU7Smig",
  "key25": "2wDvu2bMx8k9TvM7rFaW2qn72GuWvP5xukty8SShHMZ8nakVq7E8P1eRsFN4f37pGHVsavHWdHXfuk8VUTtveMjL",
  "key26": "3iFz3aYhhrNMLMmkWLyHmXa8arv85LZZuMwnSk5jQzX5roh5YHzWGxAGuZyko8YwWtvv3srbDbbNwqtP8nBLjcWn",
  "key27": "5wLK1DEiBGK7oSMkJZcKiZRxufi46v14LTibZjCJMHZd1yHgdV6qfFytZRjFC97RnBQJNmtJfTCbLbZaddm2rTGx",
  "key28": "3n1BNZFjyzDbKherAtuQYFeTvwNRggM26ydTQ8h4RsGq9kcT2FSFYPsdbjmHVH6gvkzrT9hsdKoG5yrY4RQBC1rY",
  "key29": "291Kyzw2F3hynMqYy83ywHQ2ka2Waidm8zjizPqeDrFi4EQdgsryEiwBPdZmSPAnkkvFMQVgKbmxEFim8WbKMvEj",
  "key30": "Jegssgr72J2Yj4b2ZZRPKgiJVroj7Za5yvNRFNLRtNM3XmAicGPvLP4uUhLxW38KFZHNAffbAzVs8pWm1oLWDWg",
  "key31": "3XKtCcndeUzPEwWpnxtn9ecsMSuXpDyutzenDjAQ7FYguWj2bPmSH3rd8V932GvDz4vWhivNVJpGwnE6aMExTTfK",
  "key32": "QW6vsLKrygiaLfjHGUkhMrx74AdWiQKJwXL7sM1qh4RrogPewTsN9oUNxn5DrhdgCgV76hdaqcSL5HkneW1U3CA",
  "key33": "99XaE52JBjSacGQxKyEuf4X6kXW7pGwgSzga45aZEcJiNnUZ1UfTHDTgCQQKP5Lr9pvP9ApAmMZDPrBmYH92gau",
  "key34": "3AP2PFuPa8hXHTztW8kmFRT2pQJkWJfyZ4nVzEUJgbW81hCWXFZaCpMM9uqwUiN2o8MhwKegah9hwiMnRi6VL41E",
  "key35": "aEtSzfF6ooDh66j9YSLWwLz6eVEx6PmdvAYprMBjLcbW5tKSM7ZHt6HzmLw3Yjoiigg15KUTWp8ywatxZqzEWf3",
  "key36": "5LV5pteRHALQsbBoYmoXw71Xbnj7hQr1KESDrU5d1TZZvukqpaamT79KXAoThKou41Kq5HEZY9cjWnBVaKyWpkaK",
  "key37": "4rqUQcUXJhsitdbvxsfWAAfzD7XMXav8UK8V9vAE3KMap8oftyBYsdBZREHfUC6pcQpVs83EXdN4YFqpfeuNvG7U",
  "key38": "4iDjwBq8f4aH3CamHVrDudZhMw4i1b3qe9hTkyWY6T511tpBfV1qGHRyFYQ3NqGDGktFQ8psNGh2Ayx7CYDj6eCg",
  "key39": "59FiigVsFzwQNUGZknFuA9GCWRTrPXq8mPykksBGUG2L7wuqmoTY4rW8kEeP715NitSam4dPdXuTUxeoQT3LvcS8",
  "key40": "2x9wpap4R9yYnJnhkq1EAKCu6zXRjg49EkFvGrg54xeXssDfa9QU3Ujpjryg1iMnbgyKT6gxYXJwtpYFKmZo63Zn",
  "key41": "e1NNkW2ECjLLw2apDjquqLKn2yCyJVe8ryK8TgLN5SxdFZ8rs89qtuXX7eSJd2qyxvVWrrediB3om87a5tXknk1",
  "key42": "5mJm8p3yFAibtGJYA9U8bzA3ysWHaKybYqRzBC5N6MUDqBc8Bkibx5k5EioGNjv8rngF1AuvfLvpinx63Z86MLKN"
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
