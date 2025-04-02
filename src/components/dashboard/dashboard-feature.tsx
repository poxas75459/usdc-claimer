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
    "2mfp8pgvhqWkrTwYEhZt7zL6KEGekU19fyxudQZa5ynR7o8YMs3wt3vJuUUu7WFxEnvs7Ycj13ASMzvWCg9TQhVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6365mN6uWEKRaXjN6mLDRmFrcf8WektH4vnr4jREkZHGUXpeJ34fkKMUmfCqMQevTJGPYMxDYJkBKxrZuNGrH3bh",
  "key1": "4L78Qzbn4suY9YVck1kbuxFdsiZF9TkB3N1wmBaD2kkgDJntr1jZ41Tg1jJ2sDreou3s2BEgh39RqoTk8bdo5MEB",
  "key2": "3g3aps5vLrx7AvJ2sZe1mzGBk3bkVJzU4fsGsqEuT53fwXVyuRQf9EhyX654j7PrSfxp6FDcLdvjHPQ29Ebo8heD",
  "key3": "3DMxB8fwFnvp4B1j7vDNf2hvKoWsAtU18xsP857f3wj3CVWe7hdBNTJgfuyteKX3iW5Kfy6uYALbL7oXqjb1TDsH",
  "key4": "5nTGLMSLZ2kZyF4FezZpgo3Yr9S9pYeC3EhGCyx3uw1Us12M7PNdMK7YwzkW9N7iiiDwwBiwG1b3EmGYVetpV2Nm",
  "key5": "XKfx3rFx6onjzsNMVvesZiQXaWC8Y6SqTqmgy3MBXaQsRyLBmrTY4pLhKxqSMmcYmYbqwCnZGuuJcRcYABEVWk2",
  "key6": "4Lr4bwTfC7LgzChHFroNFrp72wgoPaF223hyP4J3rERyfbptYY5mfzgeSGwezuBmz5khL8EAwQ7dbE3crKkU7HVo",
  "key7": "44pWmgXu12AJmMQrfAMZD45pW2oDiF8GLCzYZeMzckC9xVJbFmkPgD1t5xEgtTZwkbP2mcj2eYKAqHYc4TcQKaVW",
  "key8": "5bi2d9RzePtuonCRbSF7pVmJEvKUTUkGJw7yew1CzRsw7yQBHjtParYfspajifotfR9XcvXw1Ab7v7MmafG3Dwiz",
  "key9": "2UooGNN9xvTUhjRz1r4TcZcg4kHXSbSfn4Q82LWuugQFWtZTtE5Yg4nhKJN5nRntUFobW1n8vkSn1hUpzwbCSRDu",
  "key10": "2ec6ERXs44jDWnM9D4xn2QTwu7siwmcz4mNjnRc67adwDyJzmFsKZyZxWM5Yj1bR56F2gGGCAxG193ruytqVrpXJ",
  "key11": "4B4cTBbnmhw3WWYWMUJjprPFXtR7dd7YvsSUvEpJg78gSM8JdxEmFEddUA9gTLBv3dFJz2VY6vjbz4HKGcmkEDjn",
  "key12": "5qjkiXLECXuDnCvGhUeT5TqxeQAyV97RUWGDWsF9DD6wQUPUHpeJbFZhzEM2fdiZsNsXwsgDXuioqmCMtEVJ6LoV",
  "key13": "stxrqC1DDD23gtw3zdmynVX6Joof15h8T4m8biK3y5Lg8UiXPdNDTLSL3qBzJZafRxteiVCHks8zRinK5B1L3Le",
  "key14": "4EhmSN3KLG1GEKHrTPCmsLRe1mgEJMaAZezAgdS25DzUXL3kxSzLETkQaT3Sd9nNuvXhR5Eq3iELsUoW9bs1Ncgv",
  "key15": "5KZM2KPx5bhSVMuzJHtTzYaMfsQXy5onctXZcwduFP6Hfp3ZRJtA95YaDbsZpHNnU5ABv4zHdQWCTRvwHHUuCvsj",
  "key16": "2AxqyynPZZQ9gasF9FFFw6tFcoVXhZkKQGhZRjxfzWdguiWP5sjRadWJRVwtUGRR12Nx9HqRYN4xQvtt69Cj4CAA",
  "key17": "3yyDop97UfW4FxQasWkZS2dqKZ7hDKUdaQufuzD2ZKB5SnPqqctekwEUeWJtcLx47cT3GsAodN69Aqugn2AHpFzF",
  "key18": "ooU1Wg8keBJ7U6NpXfSkosMLxABEMFRon7TSpP25wt6kGRk67foBUKjgzDWqwktpu9fJaxwQToodDqR6df6CBSH",
  "key19": "3595AFVK1qZNqmyxSxZ9dYyj3UxhoAev63hr3uJg2tQGSaTRzakc4pZBspf5esMr9WGrP3oLjBg5ofJm2SsF6LfR",
  "key20": "WmfiTunKT8DbtEaY523LHdGomwKpb6K9bYN1MXKa6biXvWddpYLvbRPWGRTvmYbPq7VpDDq5hmv5nVCuANLNhhf",
  "key21": "3UCmkLvCx8pR6ZAfWSnEt1MsqsAnfb8BHRNz9CtAst9Mn2tjVxPfeXDGLjmd85j8TkyaHvCsVT4MBpzuJW89EsEA",
  "key22": "3RhPVMv2uzJFpbqPP7ppe5NCUnHHbjWvg6WdTe2Uq8DaMru5ZFfT7xsqQEi3TibGosMd7oJM1WNKgkFwf9Wv1Dqm",
  "key23": "35UyWpVPCmx3kRCfmULootQuxpipomz8LpmKQpKyTTnijhudxXyTeVUpRXAB5PbQksmjwSSAKftiaydsHQqx7dhA",
  "key24": "5kzMNZykESYuVWXo7GkKHTzKhmjBvgqrpNxiWYj19rYX3jbfp4oge3YjYz8yMPQnN3QV6n4fwqyYhG2aAFAWinFo",
  "key25": "29xhSAyb9Lax2ooAUKXDUvYgu3dsrH65u1eVgo79rHyGtQNTA6Uy95JqphLCdjG6SvWFjT7iYtZZc41huZyjLLHg",
  "key26": "4aQbHx48qvmreAPpdTZupJpvPwvReyWvMLMHzyyUfu14QD2UdmVTLzCH3zbBqnGBrqn93N2N4bke2N4tBbPEk1b6",
  "key27": "5QdFpz3pawJ2eU7Gykxn58iuYqsR7gLRLVpqzhwCCo7mNshcsedB4P4oaz2u5XUP2UqRDpiSyrcq37DuVcE6VM87",
  "key28": "4Wh4tnndMsJK3F7wT8Eta5UBzwja16D1wwsREDNv98DmH6gsw2y8dFhYuswH9tVaqZuBo9WBQJWGJB8TNhqQ6ts8",
  "key29": "36c6V4NaFDVqecQNtFmnd8XFsj9h8SazLawMHnVVcDDBJcU2oJe1UG2kVdCSBmn4RhwW9YzVZs5rLumNa2KdWp3v",
  "key30": "2qr2FvHcXE7fwHniDkmMz6J6h1ce194kpySoN7FZy7wQDapmDYkBZtsixuQwfLRjGkhVjCTVmyPyopFMxXoo6hgX",
  "key31": "8Df66wz9Wv4DJnzn52Cqo8JHZf6FhHsNXEQhBStv2ZSd5p81iWWJUQAnc22qYGuDir61LaJ2s73qJrkRt6t7a9z",
  "key32": "3nK8W36TkM3M3iF6PqK9hPCi35Ng9iM7m9MCy2fdaSJQjL1HCDsktcEo9RaMComudQRFnwv98RYEsqUbEgSMWRkA",
  "key33": "3BzCHnXw75o41vuagHryvtPjWBU9r8vMDps5TjRg697tWmXpzTifgAQgjnZjNHfNe4jyEkeRLeSSg3dc7EB1AgGc",
  "key34": "2asYcRNqQqHmkkh2GsxRthVkhqAAP7ktBoBCJsBNayU4LNUuD6TkZH9i514CoSLcZnrvUSx67umWgYMa9xRG7yQL",
  "key35": "sCqq2PyFjPocmwEfyZGjtyfQpfpnwQMh6bzTgSqfsMV9StngVX5qtAK475a5j5BUjUQZb4qkKJbRB1qmT6KgJiD",
  "key36": "Whvf5dgVWitPo9Md2aSR7d6HYhpqDkimMZUfqhfTw43pBmyfHVPu9vznEqcH7FzqYAG9pM9FoonZxfhhNCYuczu",
  "key37": "kYhrpS89GtbXmWsuvzVNtfvDhuLHVKqvYZVskvDTkX4ZNbun9JgmmVPiwKz31uL5XpVeE54E2w5zEZKBwcEMVbK",
  "key38": "4GiQHaLuwUPxxKn278Ep89LKTxBLgMAtjnmuMQq5MZoNVXbcEXht2tDa4tLrWKafFjCFgMc653nh7nd2hYK41qVj",
  "key39": "51JiaymQSsXecrgiwSS4wFizET4UvrXsbUsqjgPWh4vB3NA7GjhmogbriJ16k7ugbaAAPwSWWj2xgpvmmUWEEbyL",
  "key40": "3BWBFZuEx6hmnNCQ7jYH1h5UvsQqS8Qv2xjP5soL6HmD4simtMxibfErDQQRjHfBaA2t84H2HPbwKs1cw7HN24Lf",
  "key41": "2iuwyRTsUQDD8NmxYzwPdPcMPHwwL5hyv9H7WVMd8nMsi3CsuMQBaHuSxGAZ9xeRt4bBa1a9RQLLwNrPxSW75Bge",
  "key42": "2PeKh45uJRmScoVKrAfEFk45P2Zu7Xm9HZ8gYfiZQVjCKjVgEK4YRpo6hbMQjLUDXPoGQYT49KNKsa9qtAY2uCcN",
  "key43": "apNea6rLfCjNfHWnuYpCu6H6ie6SyYvSNuiPJii5cKTSeXo7f3SpmtPU2dn7fkaBtpDyNHncGFajDjfs3abd9Jt"
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
