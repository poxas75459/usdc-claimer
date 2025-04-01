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
    "2kpVz9n2sCARi5yjGVegV6ZjnMm6fZznFPL9XMupS5MoycEKBddAmSGyX6hfS21j8geiHix8xDpYqvVfM8RyXjy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zuKy2N78HpCQP4wpRt31TgVmSjVnNsYk7SbLHF1K41ZvN1Z9fDwakHNPYnwdLbzdyGeUyAeoGghif7SoPQr1Wnr",
  "key1": "2d7AezL4s5LGc6JRFt1Ag39VQdZFkxBPMzn25LpqFNBDYqBxejdwEYNnDWKQA6Bvf1GSghZVs2hChgVtFEfvMzMS",
  "key2": "3VhHyzPfcyeAZYvM4VaQBXKPaGJjSRe6Kw37xc5qPgXVRf9AhE6ZwrBWjvuXxNkW2efcNxbVTop6z79GeDZ2WQiS",
  "key3": "4KiwiUYbnnz1i5V7K8m3YEFF26Lj8rWG6WNTkTnPJ8wddtjD1ApX5Gwijz2VEzCVJEBhfqSH2JFkkNN7eXiMxTMc",
  "key4": "3dvUfcQgGjN55CTvJg52NpwoFsCLXm8mfx45vmVEqrh981HV1bf7wr5VVbEtLf8XWAz8nTZX2w7H7UZtY173XasJ",
  "key5": "BEQmGDHFVwYsPCbEmMy9KuYmihHqwYgH3unn1KyQjyXaKrtuQZogyaAP36mkPikjJE5q1yR52eWQ1Y38883FF9W",
  "key6": "skkvhS7LPJgcNTqoKBia7jkKha5nMyytu3THw26uJ2Xept5b6vYZe4sHBYX1UPTScrFhaGrdENBuCfqVYX9ejVb",
  "key7": "2RXffHPjmAZzFDxWB3g99iX8mbYhgxjb12v9fdWkWSydsJTp5YkpuKZ1LpSFj4uC1SzWLrWYtiiP54jgD3qckYgS",
  "key8": "4GfKfWEra1m4e4EfXEJLJKVBRDRR3ckhkCL22H7gJ9HPxuYcg6r9LrdpnLSnUy3bwNduJT4PeMCGuh8aaDMoemVS",
  "key9": "cE4cetj3YZV72yrKL4EZD3qXddeEZzKwDRZdhnugUJCzrXmYkQT2FoFJfy84egxrJc4UAzFpoSk9E41kKEGBDyh",
  "key10": "yXNN3PkeWs4irXicKBy1pBin9787yBx6Yy6dRwjce2E1xPiknXhFxvG3SrE1bRCfUbASg5hjfY8p8MfyQipkBRA",
  "key11": "ipWauDjdkVPCkPeXFLTKq2KgrrNQQD31nPZp4gDxEs3pbnpSfjgyiQPzpx8iY8zM4p5QKG73oU7wJkwJ4jxjxyn",
  "key12": "3fLjfu5Nt11MJdaa9qaFeHy69LYdtRhFNQjY3aXRL7NgKaaVMAnFrCCofTc2NvNEj734hqdHT9ZJfdvTfqnCvfeu",
  "key13": "5ULsZyZuxNcivgPV974woVsXEZ1YoyS4tLa3iPxwaYThwHug7SkL2V1wcUGadthRwzV97h3o5MHyUyacEDtAwpxc",
  "key14": "5wyfMVVrX8gPca6Vyh7TCuXy3Hq5f4t8nZWGLLLRg83pdpy8rtJP89ZXp8pyYJRa3N3zrn7RbhvebfLCBktnnBX4",
  "key15": "st5PfTyQqdQF9qNmcj59HNJYPRMkLoRKTVJU9fLHRxixuS41NwT4EikUfFLbX2ajofHc35ZgF1t2hX54CKEs7Em",
  "key16": "t1pKbNcs2pNERXXarBt7dBqTyfeVBBYCSq76i5CmNBTWQaTuq4RQbN7Nf4SvVVqpatGxCNmVKdusptVM6Vbufc5",
  "key17": "2ryDTrzPVfAapNSjzXX1Ab7VQ5jhekJ9TRtcFELTWNJNcyRe9WqCa8r7eGNt7EKLXbefJYUbUcK2gME5D5w1gBiV",
  "key18": "4cHaJcGRCMEu21EwsAsYwaatUyDRQwcvtwxwWHZKuYapt7Wfx9GVRub3sXqmvPvoU3FMJ2RgAWyVKgwnnYFDmBLf",
  "key19": "4fQ8JG78zSo3YF4jAY3WAC6owWG2op2636nGr4NYUwJDXyWRfUrr2CnTk7VbRbiPmZJ8gATbBSZbY4DTgfkmoLfR",
  "key20": "474EANAyqhAQCkjakExcjVaJdoU9Q3WCtcturgw6Q3BdUqbaTJR9ftfjpQ9awcLgbH4N3XpfqjfZRZ2TgbauqePK",
  "key21": "32PKXadsGdL7syxUKZVbzFV1tydLebGXUM1HB9EsK7u7xieofuZqEuu3xEUPfzhQtB1EvXv2HQAxf973U4VWjifb",
  "key22": "g7cVxwZZtG52sixTKkA384bLCdachXUhsiHNSZGNfCKvG6V2Mp7ELW2ZuKUAg571mh3Y3TsC4sPTDqbBRDeBf2t",
  "key23": "EWLSoYmXCPTQegVo5RMa9mKJApSxBLFo2buhMDHQtvJuJ2FFmbG9Zez8oJKuYQ2ywatpE8RiMgD1GSfRsrL5JjJ",
  "key24": "494Z1tUe3P14N1HL92kxQXni3hoTr959L9Y6XJzqnVfMgW4mJhDTxFqVrfQTPkpE1HkmQef7ibLuRQqofkQXQLgZ",
  "key25": "5upLX4sLruaf6nVaukR1E7KYCkSH2uXGzBvG1LBAmy7fteZ8suE3YguEEevVhkmn31motmNJj4nq1HvC5fBbPyDt",
  "key26": "4uoE8AooaeacS8w7P5HUwJy7JMUZf9LU9yuPnvQiYDENUhS9sU2L2tmNXN6uj84gsxC1bv1EkZgLcNgsMQ9wVZmJ",
  "key27": "3h72jVUVHn34erk5kSQCY3CQkUxmz4932iCMBPndFiM69bE6hsjseYxuWFyeWeZgW5DM1RS5Tft2hXH2LVu5UNnH",
  "key28": "3okPDZ1GfdYKPnJjESFW66Fq6Eb8nh68gV3V7TR7FAKzvXMeVjWvjS3V5apvHChVnpX96i7CktYDHCYzmFLXgvqp",
  "key29": "4XFHSqewZAXdpAS41mL4XDnKR5Ej7WfB1sgZZRCxigsrC8yDYj33xtDU5kgW6CwiWoGAcanX186D337YHpfukhs8",
  "key30": "48vtovbg79pZCucQCD3m3JMMEL3PCmZMPuV8rhSxYc2fF65N6gLFhJQh6Gb9EQzXKhPS2NtTQVnU3y3s4pw7gpkb",
  "key31": "3eeLnnEcyoZdAwb46MYUN1WCWso1DPGDFm11ZVX3Qsa7Q1rMJGDjmFGHeRbkLpo4dsek3NA5SpvRr52JMTV7up2u",
  "key32": "4HTjG1zGBxmLqFBg4xz6s2yFwS49FaagfdSMjmgTXowF21XHT2XiUqx6RwUcuAk5bBvsD2Nh3t9fj6E6tgk35scf",
  "key33": "2YbPApzSZtq6Q2Gf9YUrBM8JTMBEwxntLRkLAdcTGseAF2hC2xqaXbXjZq4wt2miZAYYeNXjNzBwCoGCUXwe6Vad",
  "key34": "5k8BQ2hnqVhBNM5DGuP37o8uY8qubYpxFEW1UmnpHpyqhxFCZhCxSRmF5VsR9rJ7ngYFtPDstjrrSRogPjVHmn1a",
  "key35": "JBiGShATK3fYjqwBiErE4i4yfRRALLxJrvsgNBfaHmvyDo283vCkAxsy65eAMNiysUiA2EfbtefyfLk4jAhPDiW",
  "key36": "2xwE5a455BLYxmGjP5QRk82PLnVHY2YRvF1TYnfmKahzUYWDtTxCmxmxu59UUxhSmEGntHTDQNJxeWqmhiKbKDMJ",
  "key37": "5VZ1JbutoJ4xmnjYzUcsbrecjCRCvYMmaLwA5AeNbi3BhtE2rp3edgDja5vLMaq9CnYASZBRtkdxPjgkjLDz7yQX"
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
