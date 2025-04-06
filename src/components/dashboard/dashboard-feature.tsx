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
    "3nx3ZAjYrrQqCaBjWXtP6fK5rTzFHgFfhsz2Wm575jEqB8jXaSbUuW4rcKpTXtBP5Pyrg8n2suhDKbBmKEJUxQUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hbXLG4jJe6Dzb9YHgSSU6mD3zesREQSSHSLvij7udBJirMerRn86r43i5uE4xwzQqXNeQgj4nxy219QAgyZL2sN",
  "key1": "2ZstaVhF3P3871FfXVrCiK2qjocWau1Rs2kXgMoc6tLFW8HrdnRU6ZVLvmHTvVo9XNWjhw2xPuNiwoZeqxm9WejD",
  "key2": "3cPDmfYowHERNf69yPSwq9kfMzFaD9UpyZbqPVPntqXmneQi5oRJTRo9yV9j6La4foBw6CoMbY3VvGswyXuZoSCk",
  "key3": "3iZKxwDQtyMsNE8Hwj1FMwnTq6fhjdpkeXDJmJ85ZVWLMJBzzxjQ6JzL7AezuuWvN172MFxJcZnXo2gYL5ApLyzM",
  "key4": "DgjnUKT73sLKcaT8WSsG2Y4R5wB9jCs3FwwueMeFresc1UTUUDYqW7FoENvoTBTnY4Add3Tb7YGqES5RZtUwiTp",
  "key5": "5uiiRab57yk3x9Sqv3juDD8mczi9L5sH9tee2SHKqYxZcTWyhTWP6FLRSrwN7hgiNMAUu7t6yXwdiB3jGRmwBfre",
  "key6": "hxERpZ9ycpBBpyg9xbB93QB5j93M22LvbWgYiA4dXyYn5RVR5X5SdCzBa1TGUHSRfpsXYdvauNmjukyQznehU84",
  "key7": "42Kp67hKJbxRbnPKVco9jsf4dpxvLdXHDrRDk1tMPQxRLqP4ydXmwE9J8LcZz5q516182Rw1NbwVSV7iKpmXUNEj",
  "key8": "32ZfzxQKPfvSVvYovQf11Q5KXD6Pao7jk9W5hJ284grNBQH6M3u3DngE6v7SytVesGYkaYiSn9XoQqbK51Pyvrwc",
  "key9": "5fQJTcWj5iAFdrZEsrBQDHiAZHPzUV5Jkp4xUpHZRwPzhvYrkFcH82nus5tMtNkDLduiDRtVvqqqFotCivUpNQUR",
  "key10": "2pRT7AyWq7ruUxZ1xQgcDRf3xcb6WUc4RrBpmdvJ4wNAEqFU7M9SfcNxr5VWfFYMJJrK15tBKouxVcwjwVdZh6hC",
  "key11": "3kSeYJrr2ttNFKxvAsbLpe2Amjdb7167ee9U1zQRvrKjgQMRzdr6aDGwxs2AJYMWyyKKkWKU6mV2HdFkRpY8bWDc",
  "key12": "3ZnY179Ruoa8LtWq85hEcDWVs6oaG16XRVJUEWuaK3TmaQpniKZLkKoaYYiaLwvqPUkdzUP3uizgobvFKqKWyp55",
  "key13": "5E9Lm9EP6AixYP7uvzuTGFDZ1drrL1C5Kra7cWMP9jhWQeQ6Wvx5y9EqT39MEW7suYBB2pjfTDG73ZX13A8XtRWd",
  "key14": "5bzkRBv7xQCjwUNnfGQtYJFvSrHVCX86d1Zgu7XzPZouhRQAdzRXuuRxKXaBDjATTwEHYkhQ1hKoZ1qv2MRxXTvy",
  "key15": "ANDqJokQrppUC7DHLzWkXYDZrR4weRxzQC38FhvnVcakJfvs8sma6rwqtHV1MKyZnwbBNWVnhDsHSX7UZJvhrRx",
  "key16": "9WUJJv5ypGF7Cs9rKfuasKWKQqr1FfEw7DFJ65sbvUxMRWLsAwDJZWBbmKpM8B72WoXZre2dC7h9yjd9zYNfGuG",
  "key17": "3CB1ciRWTqEWWdxBgXd9ucuTC1HTeEUs523FgWerBjh8AQ2BPvRe5e3MAQnF864FgB54xmb2WWwRzjKoyUggepmC",
  "key18": "3hJfZQqHySKg2AUAV6gyk7qesucnsuFcL1yzr972QZx9xKS4oxAZZXjXZbCZfeVzsbG7JUxF5oc3jjBkLhM8QAbd",
  "key19": "2JxeWcen4TnNNRuNqtSFWQJxY6rEXzQUdHRmEAVfm3nCymsucMXZpGqo2q8yWnuUg1Gig43YPfgAsUiPM7h5gQES",
  "key20": "2obxM95nagYNJ32nCAaLcu3TZeVCvxduhJi2fZp4CBdLpr4hhPPoodNNRcdZX3jyhTR3tGz1S6KThyT7oRZ8J6Hb",
  "key21": "5ztGM2jWckSF73hUuvrXGMT3nWdyphJ9rLp97fbsTi8Z1TwLho8UtB9wfX2cQ86tMy9CvF2ohNjCAQGJzZX5HcBy",
  "key22": "2a3aNR2zNfbg6tsWMH6ArjBH53SAfcqaxG5qXcNvbKcTtaqNC2Bpf2nrQiid3nBh6VQ1ttWiiB8RuQGTo2Ed1zS2",
  "key23": "tiquxTfUPFkHjLyY2q5bWmczjdSxHjwzvY3oKSSKrMcxQnhPKuSybNFyatj6RTExHKoPYYrDpBnCU9uNRg6JTDX",
  "key24": "5dNWdH2EKv8qq6ye1ptoSMES6hiqusGrZ1CA1j8vtKBHfyGDoskqbWVAUmJQMPautNQPuNzZRHFgm55uisKp8sPS",
  "key25": "LVMY2Vk1hWeSRYcwjWNAS9tUnYMwb8UXzP4Tf7ubxcFSfYdLQSTXLN2QA3gFxMRuTrTgswPufdH3GBurr4s1ieS",
  "key26": "3dHgkMM1hoRRfXKcyjjY8pvSq5NFBLzmsgMS5Ci3xUzscBBUQBWysSTaexo1NPZ4c8BX76x7fNEvGeS3pbMEZi25",
  "key27": "56FuQSCJ8iVA75oSFpwh2CQht3nRvofVtK3AT1RENfukrxxemW4u6uqwLiXUJXfw1VH6bmW8BWmsnR22LrWocVGW",
  "key28": "414xtvYM97at3pVxmRTdntYyfbGTfebrsRzj5CAUCnt7K7FNmnrXNS4NcUrMyF9Vsu4UXCP4PmEBxEuVwmJT25s6",
  "key29": "snPBmaJZJC7NaGBGBU2JXbms7yxcMTEh37qtRr4ngMp3bZt8ZVSjfaeLPCEBZTspaY56Aub4bNVc32nVGBAZHJy",
  "key30": "66SxsdVCVAA93UeBiEdq5DBFuQ9N4RtiwTUTHcA7QZeCyGQYKzPef3K3GVNGqSuMggRmvYcjQLg5G9k7UoJBhPQC",
  "key31": "hqSsbiitwGBo6E1rq9S21GbmkCMYRNQNCZ82wvrXHRY93qny5QsbYuAVYo7KK7b8aKy8XopHaZTQQkpSWn41ucg",
  "key32": "3skXX3kxkdYYvZtJt8PtA2fa2n93fwSbRLZruqDDEfu1PgEXpuqo4a5SMyuYhDUKGDLyEHa9WC1U5mHvW9KAFDtu",
  "key33": "2nLKayL7amvaUdgrjeJPSnNU4aEUKFAj1ypa1S1HZquHy1n4ZRcKbcNQEy6mgS48EemyHoyC6mQWME66wqKP5jyM",
  "key34": "3FrpiofymfjCexWpABFNaTAw8bZq9QKGzRVJvL36fG89kKiadz4Pi2eP6BRAexkF5JXQw5yY9WQ4EuJbKcU2Sc2T",
  "key35": "2nd19t1HaWPxQv3BWdz2unJhU1G46REXWofcJ4NxvmeTcjq51adVowtHWs3rD6eZ5XWQ5gDwvi67aukdTHzWDsBq",
  "key36": "5qzc7MBzWdJcRbM6zfxdBXPMqjj6nhpgjL1y38TDAiZjXBmYf69Q74VTTevhXKHjUw9hnQdGoVS9HEhNbVoTzKoX",
  "key37": "2VPF1H4FBLRXDz9gsGDwwa7wxi52rhL23swpmXRoXvzYmcYr8JxdGZVgBEYd6htQs33rKpiXe2DJSaHNLN8k7B8W",
  "key38": "U67o5DHeYUszMKtvErmPffecuTcmQBCBd9f5fE5KPvSEq36wpgHyUNint6n8ZXvXPsDzt4Rv397RqTLVLWmMub1",
  "key39": "4J8VJ3twbN1o6hTBnEkbsqzPVZqRWyjXr4ohPd3VAcJCng9v1zdXn8542yJqr4RernRdbJMirmmxQz9PYDpqCZp4"
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
