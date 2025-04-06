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
    "3So45zz69BZDRbHVPFqKrxXkdHwHHgwPL2sBDykAoeP4ZJ96ybxyiKj7EHZw5fqP9ouCTK3oEUbJ2FQ9mt5yeHCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ikAVBHkxSEHVsj3rHt1FFWsha1mzpkPZ9xT4smvha1M5dYjhNc8wUmVQfnP5b8APkWgjGM8gk1hBTjJKkRZyHrE",
  "key1": "5PTS7NPiifejnGRftrwvn8zgvkPE54CiYDnbp58bjNir8PhJ1hCfFAcfFK4bsx2WHgjRfTgxCY8f4uJz8ANuFaCk",
  "key2": "4MLFkZe9rm4X2Rq4iLw9GKpQ3BNG5A8WcG3StHxcrE78jLL17zDBJjSpysE2VhELvd2ZVZ1Z5frGLs25LviftJm6",
  "key3": "5YxyozfZqXdGzzz7kNkuMiHqyR7iLyUjALaLkHvty4GRnj1ZoA8Qdv93MMkwuqp3t9GJ66c1pbYXqvQ213HuWCpv",
  "key4": "2xxvV9SttU3peviqe2vZ7GHgto6X8egdcrjCE5pSe7X6XEeYHFn2rSgpeP1TabyrhZRw3ZnC3U8G6sQk7S9GnhpZ",
  "key5": "3upGNA6oHB5yR2eySu8dnDUWeqKoZ5ZDRcjQLUbqtEhBNBkp4Jo27uPmnNv4tYZuRvTcjjERaHc5eFLPJqZ7SHpz",
  "key6": "2DaT1J178QL3Kdjxp1AxLCjphJHcqLrwYKGM14YG51XJyjUrYUTjvuXoZ4sE6VaQxF7WeEiw5EiakRtUCUXwxADc",
  "key7": "612QhnnhRM4r4DcM7H7GABPa6rxqv1vnSKty3KHtq8JMogUqdFPZG17pZAwUdMpsU6W6Kt5gDNGA9q3nrX85D5x",
  "key8": "2ymVjLMbRGaFj9PrEQn8nBVFeDzfaaVJaURBRmvghmKmaqWVtppZFGxYvnohsQVpfyFWuweEES7uz7EmBi4eQnRB",
  "key9": "5AKqRzj8powFHxDmoJxUk6tcmgfcpo6vNAb5uJCoocECwFmm2f9uxxPeYgfs17aaqGBHsb6WkmP3cfeRjayM4ZS7",
  "key10": "4Wesk7VjosatgpuNLWUT4smFQyFu5rGnMdc7T8q3LT5DDzS7mMHgGrSFDv16oFSDvq8MUAu4HEagNrqMFJGZUwdS",
  "key11": "5gizUgb383TMbqfpMj4WnuK7G9oYhjfeJDsGGEoABu2NoR6okys54ViUVrk5aq1mUr64qzv6Dqnf61yWApvqdQD8",
  "key12": "4PFcAKqhj7UhM8iMuW4zroTmrmbVsoGvcrdWEC6sRSGxyEVTtWUhDYchDMxwGvb7UdRKY8UdE4n3vnu4Axt33nyW",
  "key13": "vGSy2jQD3cJtJwxndThbNsBRLnXA52is5MZmxqaBm6BHuWL5CGQr8rCQRfdA43axGGSGAcoUGVAhctRZLBNUfsk",
  "key14": "5UsSqxocG1xcYE9vC4c7KbZ7LwgDq4TWTgyRXjRb9ZPxxm3J6xX7KparXqWi6Qoo94EBF2GwNN9MWBdCcKgJ3mtB",
  "key15": "5qGPPALNh7m5MQSihz33Vd1cU7zyUBn4xEYnmfpwW8Qs7ZH296LHnPHtVZkDSz95VBBDHordtN477P9sJTw9zvQV",
  "key16": "5afLAcY8h1s7fr2vtULtbtvTPXM9k2SCt2DVXdqFo1kaFzzEwX9y7TxywhAr59QBStcjFmQ3JiCT397FEQt8WZ8s",
  "key17": "3FpzLusHGh2LxHKg687bFdug1iNPJoLH2zxE7Jtoc1ie27YXMhGApsHE68Sx4ew1CCeL4RgfNaGrQEhzKKmXAmK3",
  "key18": "2aUPyJh51U6NoF3ReZVRaTYe86dtoxoAYC5MfW2HYHvtRfj1gM3Czod7WMAb27NKeBzKUoK8daEWMsFPpNEYAZG5",
  "key19": "5zuwhyy9MLAcDRumgZ9CbLoqEsciynL9unBszzVRiXyzk66TNzbT5qTPM96TVf7maP1dDUp1QB2vez3gJLknrUqa",
  "key20": "5zRbbjz9YzddZRaKon6mgo8GPwAJGT1UVgNb44So8HhqDA6ew1FYToCNUYguneb7hDmhJ4uCGvLueARpsqTwWPBq",
  "key21": "5CmcPpk27PUgURyJy9qZ52LYVT7Krng6RTVBsYtD25BJq3CRJtN8NhUTZNsUtmfuwa7VTxGUXTyuzcG4kke2JjAZ",
  "key22": "5zdsYYqtteAez1yNNUfJv1V9vnqDMkFMmnnKh27dFuF5kqacRVbfwzkaUashshqzKNA715TiSoghQiiEEtpt62AJ",
  "key23": "4j4bgroFfLNmA3Eip5REbAB3YoQ4i5Ycc5K464FC3Y1tyrBLK621A5FfUQywQ3UU5wc5dVm74Q47BUyQkRiyWgxZ",
  "key24": "H3pwacwZyztPzr3qR9Q71SqiQJyz3tiAvdfzD5T5BMsu27aByPYXni55sCsWppqwYD56Brp5zVwAHrq8wcaNv9s",
  "key25": "4tF8NGqvk5dDggVTiUfUDUhcx42M2hpC8NpTQZW5YNcRoMqgZ4pzs7QNga5MGSvBjevduFcJQytdsc2qnHnXc7M8",
  "key26": "qDMyryiQTeKBpBMFWTfFwDpQ9awrm62r3v3outCxzCZPXmov9x1K7ZrMoZqamiQTHcwipDWQD73my6TC5ccicNR",
  "key27": "2ysGEAQtusPEf7VDaWxou1Aw54sgjg8cJnpSxQ3qvisTMHGJAVvCP5iSXTQhdo1QjtfJUp1p5j1BFAySbbkzVSZF",
  "key28": "4e71X12WCbqL1dgosUnoZZPpzNqsqVT2xsYXLmgRD3VozJKXBR2Q59esrQrBorVq3zAnvsThkYC6Rem9hswArzvr",
  "key29": "js18ymxYHUUnJSKB7jMHyjpwuWMK4jferUJj4VpwR6mcVfNHz6JXNUC5KimA9TiMwto8np2kf8cuy6sQvNjexZK",
  "key30": "4xCnv1juTX21cJoBMeVJLAKXaozfqEgMix58F858NQZK3BvGZpTXVu5X9xy99W8zz7z25V2EzMURc4NMMRZLcQTc",
  "key31": "3PxntE2EGNqQVZLTVZLCVfuwhpsvuVa9Cpgy7dMvZLapsiQX1sdgnCT4cVoMdZP1NccX8dHkqa1A4jPqbyv35Sfj",
  "key32": "5w6pSaG7ZgxUD3ZrukBbdgRecVgY1Gy97RLv8VMneD5yqqeKCE8WmoKNhZzvWFK4pnjdgEPs36wpZW3EALz8GP9J",
  "key33": "7FZHT6wYoYwbYVpgM5n6kok8Kne9vQijtpkZPEuVa8HKz9kb8Wrp3azUDetYmWiACUVPcMoDkgby5g7i3oP4pB5",
  "key34": "45aA3DtdvVq821hogqfkBjB2QhHSHTJUXH9oEhYLpyBZv9AaspN2ZNCsTVwKUSYJATsRhHgU79jD2jsAyVJAUQRu",
  "key35": "4x8pvSWhAuG4kcKfipoWZ1vi85xZjj15dyTuwYTpqF8LbntkqUxbwZ71TcH3Hz38MWsgRyo8RwU96he8SXnvhAha"
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
