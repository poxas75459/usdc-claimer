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
    "5hEWLD1ZWkCrmcXK37i63LeuSQeivDafaiHf8ssvmuHGL6MEbrmcZaUQSiH4AtnE9prdC5jLvwtA9EtMBbMfmsM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1TLv71ckdj8FVBkcZSqdq4zhZs1P4sKpAjEzj3AJcZYfHBAmBkwKZCaxcK57AVbYsqMXwk3mTdW2dseSS1zAw83",
  "key1": "jE4zULuEEho7gUxoHz1zoJMN9TrJyu7zgf1TqVa8SkWvk24LDamUQPkRpszFpCxdPQLWmZHLzsn2RzXTddWcoK4",
  "key2": "pKxE5TqAF6cYRU3SVwYtCYxvwmJyeVS11cS8NkaPPXoQLquJstsUHXUL1mThH5EZKYUAghx9VKsvUEV53WgtUUV",
  "key3": "pzFZUcvNhcgXFvbG47s31iUr7p3NFnzz2ZBCRuXX5qwQQDUkvQ7LWHemQJKxQrkMFWQVkFjVuJU7y1BqDVK5sRZ",
  "key4": "2RLPV7rWHjCCGgBZDD77yE4eJNKnZTjHap41WU2gSzfUHZpX4JZeSayDZfw6CwY8HPr66D5rsr3Ld73cKirFoJx6",
  "key5": "4WKHfE5hHizW7GqGpaXCbpGAxgH6yHn7ECPPjGtrgivUhwVVvrF43L7KQPo6NRe6RXigWoea7ZrLHA9ft833ndEX",
  "key6": "3My2pxGV1sL1B3aYjKKRCnwzDw4Ucjs2YbWB5AGKBUNMHBoH1h3DDg7VS9b86JD8FvzXWps6iEQSUhHoi4yTVLvv",
  "key7": "2ZP8P6TeFT3SCkqu56YnJKrmUHUJcEy1Sb4ufGnphAfzxbec1gGM8VnnTygBKoNjfff2mpbkH91dQbZKE4GXwbqa",
  "key8": "522V1QDQdPjWiSLSEW9jtZoeFmV1QfzP6RxmrZFB9eLumhwBDXdhwHVFG4S2LnXpc4iUTAehEWXsnL74geCMynMe",
  "key9": "43DykxNAcY5bNftetwtGqDWgvwsCPx1kiwnuVmz5vMqYv581cFEveyF1PcKidg37vwZHTHFHfsRgVjPWEBCcVeQY",
  "key10": "2sygGQXbs7pG8ezAscdqzdvzQXR12aTG6fKYn1Ru8a9VfD2MEbmtmXN8ErD1crLj2ishcVLmtP7aFHgYsyBXEEM2",
  "key11": "4GfbqGuHcTP4JPMeMzvbQkJCWyj9oYZybQTGwp8rJYfUdh2a7tr2bvUZwQZLA67rN4QQV62CBDGVxJQV7YP9gSWT",
  "key12": "4q3F5ZKtz8obGzpNzACkMjLUDZAWj2NL9V2nq1mDRpNhvxS84gTm5c2PUC4qJkE9rhfYZzLA3mpJ434tdTcmZVuS",
  "key13": "YLKgG4nC2qXkneAV1cJGn8NH2ba7K6B7toLMRJeFe5iRTFxFifPG43Z5vmmo2XM885keg7viJAvhVSM8dedSmkJ",
  "key14": "3mwwZkQnsBP25EpSfMYkZ8LPJN9jM4fdcNc5Pu1QzGywP2o8dJ4BCNrsHQqtRRR694Qtim7cKGf6yhwgQ37quibg",
  "key15": "peLaqEjf49kf8P46GKqwgEioWxFDNHny6G7q1LZSmEKHVYybyxp2mguUha8ZM6xVJewL65hno9g3bgPGfcxMx7Y",
  "key16": "3Q8Mt1mWj9iPWoM8AzCyQQDHHSofZejxFQ43W8LHh2AfPdLaeWq9qDHM3NPpphtg7EiMh8ZvLR8xvR34WR78MpFR",
  "key17": "tgWGPW3DUS4cfiBfjmh3yib9VeSKfxcafa6954qXWtLgaDEyKj1RJAoFfSgvc9sWoCvQLVVJ9Bb8bwaz4oGFycr",
  "key18": "58EDAArLGS8kLQLpKAn7TTJfJmxty1QxbgNLmNUcqbzxivrzpZXSHGz2yvjLkGgWjtP6xmfGSWinWoCdSi9gQBox",
  "key19": "4Kc5zAtHSybZPSw5YohBmdayQMpaLWjJN9oMFewGu3F9ET9V2ZbUofAYghpNewdjFK1Bt8jhNqsjvbLg6ybhe118",
  "key20": "3vm6u2isPNrAZFbmykuSy2uQ8SaJ6SbMLb6aN54mWMrfjA5QxgoPmccHFYFHtKCvsvKesqQ488aUVt1sMY1Y9Vuc",
  "key21": "5UbKQrP9Xa6HuYgUpf5QVyNKu8Jj7McUBP7MD14pRBLNJJU9Fq3NqYM38UPVE2upqiAhhUTNxoszsAraisgoqciw",
  "key22": "4jYrUYqpKZrEnXUYC88Attds4hzcqybe3twKGwkvc6qr9rYEkw2L29GS9PbxNDsV6AmSQJgPJN1d63wmpBLoo31V",
  "key23": "2wBTnfeRYke2xtpaiyUy4roPBxUm2KbaVx78GLgrouvSjquUFmDTXR6fqRMNVNZa13tWfywf1YncYGW1dtEbAvbF",
  "key24": "22yA8dzTnFpJakfDjELATYjbM7QiuLkANptLTW1k9oubFvQW4PcGeBZr7zwkHZjSNxJmzF9QEVztAcG3LFURVj5d",
  "key25": "4mTUTNPSmKnAqggcazqD8g9auJHgFdXJigiczbnekDqh1QHrTMyYxNUM1ZMcsovmDWFnsUDkoR6mV8UyBPUHxCR6",
  "key26": "2m2ThBbDCGZ16CUwHBz5gYkCmkQShr18SEftXSCt92UEMwGS9EycMykxCsMg9mn5jVKfNaVGeXKpMgbZtLd7Tgjt",
  "key27": "2XY93ubs41rSTogRzHbrx8tMsYiz5KZVwwzwos9wA5HxeipcDUpzByRDkQwB2EsiojHGMVf9FNkTMwY81TreQ58A",
  "key28": "2ukHw6eHr4xgviT8iV7boBTkbzD7xTcYZuwX4fiPhaoA35E8B7CaFJXzApKPSjxmqLJ9N3NcpjKvxgCpEyZpYhQ4",
  "key29": "2CQokyspsmkhKyykkdQNfKEUJrQEJiGW7AHnHZnoyaBbLnsDaSapi5wvo7kDsDDD3hAWTYPaWk3r3TwJG8aBUmWL",
  "key30": "4ZAaS6hqpu6RC2Q8Xxh6aEBWSNWM7JiU5hGKkxusy5Mn4ff3FkvqqFz7FSf4WsrR8CW1z4ddZZ6R1pwhrFjTBfz9",
  "key31": "3ADhjKc13nw98oTK81ZuwaUAyzUj5JZNpQVhGrqCgMpCks1xKB49SyJm3Q3cmrXzZvNYQUnwM6j7u6ncPJkBDffD",
  "key32": "2tCsfqZ5quWqYPcrq9M1BHGYaikcmS48mxxK6GfCurTQfUd8TPMjPE4AhfEcQd1ebDbUsNErYeBZczBUuejcKhy6",
  "key33": "3DU2CVyBaFnLspig6MCFRWE9USLYZXRVWeQqLbyW5mDXaSt7tYQvcGy3zMer6dBBG25g91hR6ddTqAPDA3oKqJqQ",
  "key34": "3uQMsLAFu5Da9fZjDUN5XTBR9cBCPCqCdKqkq16y66TZ3zsA6gQvYg7pefb3VSAP1HMpsTzdi6Ar9pwVgrNP8Yci",
  "key35": "3x5Z6rqnRTofm8fueGjxrJpqpoTXEzyeJqGvxcCA49NqoMjUE5PziqfVZBzeDFPkm2894SCF9c6nunLUJoFCCKUb",
  "key36": "53AYch3zvqSCxkdJXRJJZkh345K4RkA9HLaf6CV6KL6o5yUia38CaVmQgg5NKLWPnVTciatyBBciAvBcwT1YYWhn",
  "key37": "4am9rTZeHoPuz388bPPRYBKXEuQoRzZ7ESciz2A1ps1kf5qSVewTdd7YCgft79Re2CYVhRMcPgnhKbSH6g1d1P6J"
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
