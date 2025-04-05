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
    "yZcDUnYs4bknAmfe9eGBbQRN5rpwjTjemJKZH7gPbuQYsjUnWY4YyQBUkkrSmbAebDrMBomub1cpkcGdgFfixb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cu7z8jacX9PtnQbfbmkN5s2bdur37TqqDuhvFt2U2XukAfWtTuHDvfofnf9r9Qbu1VHuND8FSsFv3ionaGNDyuL",
  "key1": "2adrLUsm2LPngqg5WWinFSFS5RMDecwudN1zPEGoyhntdgfroNZz4AUFzzmzN9Va33G8RhKVz6NhcpssfLrgdwwR",
  "key2": "Hm5ooCuZt8tZPZe3AcFMjVHbReCt3VghE1MeZ4WbAHWXdSr9Sp9a5Dwk7WbM7HAPrepZJEdBuEtaUwKfoQaGUrd",
  "key3": "7qe3Cy15EP6ncVuPetKZ4FfArXccP7w5FwGysqsqJ2Ddwm7ZXgA1m6j7tAVToEtb8Yg5wuNSqdEPg8Jswyc3saf",
  "key4": "4KUWx8YVx4wrqoteGbvdi9tPhCEJZz48eJbTBba9eiRgyUN1HdbHHvj3TWfsZRNFJRuQGXThhsS11phGoMzge9YH",
  "key5": "KXy9qqoTXfgyoAah41GUcERWhxzVDYTgNr7xmDW9A3DDRTmF6P4NiRGHUiQLnUWao7PzhekscyeBbX65sbbzrMD",
  "key6": "MPP5aGVoErDazQBkAkk48vYuiv2Qkb7e7YtpsXmxYyiqUzX6ReHqxqCcUPNwPboxaREJSqn3wrXfGteGaQNAW12",
  "key7": "2kdC3ux6rMArTiC3vvHfD8gqxRrgWc2dEnKt4RvanFpm8Soo5CYmvxBGxsNkLJneMEunmgxVD6gKWFofLisaF1Ya",
  "key8": "4S1tJAG7bFYqjf9FtVtXrodkHSkPXrdtiHte2tKaGrgdankP1rcaUJUdADKmTVhYxjQGjaevhYZ7M1C8fR5rzjzD",
  "key9": "nqhfmaEe62Qn5QnaCjbjWDt4xjmbMPSwJGwbonRP5WfEctotWKNV1dA2kfpBeu83S4hQ1ovjjKGw5i5MD4gTo3W",
  "key10": "5zzR7TZkDtUTV3P6ieM2HsN9PDGDqzhF1VyD1HRnhFy9HddmjWMwDNY1e2zgd1A7mHBWLSs3EWu6cEBkHpiCSjmP",
  "key11": "5ygYp8msMkWSpAMhV7xGwL4heaqmUb8pC8vP4rvMF1E6rZj3e2hoNDR1t4gyA28TQPpduynm1xPVuqQ2F1qhwoYo",
  "key12": "2UUsj36ia7AdCNt5K5qsAgRfnAK4NsV7Qo9FSfvQpaznY4JwMSHcsbeG3CZswmn7wXWgLa4LgocKKkbTq2U5aeHx",
  "key13": "RU5BfUXQu4R2Y8axo23E2LvwC2sUvYvXRKCx7KdpxLXe9vjEUkYSg8iXUEzuVeeLqAaEBahhHXxTdH7u3Wa7ATn",
  "key14": "KBoNwix9tyBUfmW8PxdAZjYQd54Y2Sb9V7GKG4VjRuuSg7gtV1UBE1LWk1EgXHHDFaUP7wMtktg8c7TTEYHBcha",
  "key15": "GKm5WSoAPG9X3c4sFDo74TRfZGpBPH1pMqrfpDQdwSGPczjFWhEQR53fXFu3BZurFShgZ9nHwSPimmLiCt32MaA",
  "key16": "5txPksKQX9fgyuaAU3V91smJNfV4hNq5RVukMjvSvFWJHwkYxGFz7BeG1QFQ9jeT2Lxr8nDqAR5WdkqhNNBbGUTb",
  "key17": "5Ws9KfNVK68BAtktoohM9T7eHVNjnQr64J9jB3q4wFBLxdcs5Mm9mE2Vrazm4GeTPRt1XMSt9ayWQVtCP1UDUKqA",
  "key18": "5XQY4BpieFEvT6WmpUJhPmPqd84daeWixoe8VWZ1kce7xjrAT4jhE4UrS9y9jXxuRGcw5sfRMfddKDakwXEaFUvJ",
  "key19": "3vuXmSU4UG2EokFQZ3wysB1C2h4RhWwZibWNvaiad7LsVikiVB2vmFt4hgAQVEQFYhTk514zQKjNUezwqp1WGxT1",
  "key20": "Zhz7uxE94Lda3bQeuFtQdHBGKPrVD9f5gAkaDTzcDcgrGKjhyruT1eyj2h6LrSrirAM8A9fd7ukqzEf4rkyGbk1",
  "key21": "jEhXnwBzjnRnGzKxXbs88f6pBgm9C7S1gX91yj2jLi34kEwvZxft9u8FbegmHZJ8bg5UppDgWMG1o9nNySXmNy1",
  "key22": "aYFVxf5YTpyVBVNT7SLvcDoqnu4vxToWPT3tQkALHPKPZuiTUFSwdufezpiGD1xXRYTuwEvsgi7GHUB92gWaUn5",
  "key23": "3grNZPhyz2WofhwJu3LGv5e9bjH8r667zKoGkCrap4UAXfg9REX8giNXDVNug4Fx6qBYsSKPyz79rHXhmDkXkd4n",
  "key24": "3mFbUBnUA1dmaW8USQbSEfgdQ6PgMeenBLrzWQysZGQKZ5X691eoCTCA11e9rso3D8MvmjALf26HarSmspx7R3WK",
  "key25": "sibsgtcPSmBso8W9Zgnw7TenMT7i2qfmNEiLuUmhtXdWtefjCTkSDhKQvFayMWfQoCzwcAfDmVtHmokbt7WDRKQ",
  "key26": "49N8BjskgzbPTSw6VmQN6v7E52VBhNyQJhhKtJ8V4EoTK8BP5iJJMRbG2T9jdDYfoEnRRmVge2qT5xY375Ti5T7c",
  "key27": "1gERX49MELxqqd8LEkHr23ASaeKR3Nr1hd3RHmuvRC3YMfuTub5UFYcsAZykJhRcnH3BXDwmZdxn5Nq6fxasWpd",
  "key28": "3U1Hrdcnj7bFJDn4hh9bmPPudjzecCqtro4p7PGHzxDE6rT1DPDLhmxsitzUogFyJRTxapyoQbHzXKrQijcbLyQR",
  "key29": "5G59gRqKsAHvYahctYRFPyMHrxUzxGKPnhWpteedkpz5SEEzpwnBXYem1AzQ6An5z1GdeiYgKG2GiSXyjA9aHpKE",
  "key30": "3yaQxEBu3H3BZnc16672LhL5xHRfTxCcjFhATJ8j56hvv8guah6946cVMapkPHXmtQLEV7b1Avwenf77zXRv74Q8",
  "key31": "29EkKj3yY6MHCr1Y7X99oN6xJ3uTxn7U7ckMfkUeMkiTee7gR9HNsMwVh4ft82bzgZzsMXfizMRF2jpjDgyQ853a",
  "key32": "tuE9q4bNsorJzm1YdY8C9kZwjEcUvYESeJcgGFft6cpMNa2NXvASAVVVL7X4u8vQtpbPK2oN8CFWG5yLKsBC3Cy",
  "key33": "47mGSbXtvafXLWhoEBTuXraqWkGCCpxcN1cYaJKTQokJzWThXpsGeBGmYF1kSd4hc5EY2XqGLbUQzeDFtp2BX6F5",
  "key34": "2UGuuTvrQSeoizbKaHHrxZFn8GiRhCMjGchNugGHWiUJj1ePwFhT77UqhFKwMKYtPf82C6Bf7ZvM2UZeuZAudmYN",
  "key35": "t8BWiiAPnxsqthjxDMXDKsveLshNXZkEhM9aPzpJHhgWX6VncsQSfCN5Cy9hVDzJGXf2PQWXxNoKALooXW6hndL",
  "key36": "3Qn7cWjZuCYvJxVeabjzCWL611PSt6T1DwwzxpuJB6fAmWspJQ8wMEsGYGY2Zmfa1cBLLab1eEwpneoQH41wmE9G",
  "key37": "2ZeJanvMUvqUg1NNRSMssaw9Nsg37XeybDWAu2tSitYYq9LHesoEnFP9ZR6h6jsgW7AASoNbej9b4HSvnDp8LrBF",
  "key38": "5jsB8B2nsuQy7YJoVC14ArnX2Hm7uypH1tM8DfJRpXoMDHbyKdfemvCAm3SBS3HuUh4NkzZRbEZFK78rzpmzWq28",
  "key39": "5RFUdJ2zY6LLgUaSxgEedjJu5zs4sVPT6y2SGR9g6xzYntuivjkbdjBuZjBYnaUtf3y4Udw3VxjW638BxpNs5qYH",
  "key40": "4P3ApFgN24vA2HxaXXCv3ys7dBz7DNUVDSvAyapKGuMr1ziha6FmTW75JSNGJTDrSovfu8kqistZF8jonoznt8N6",
  "key41": "5vbQPzu8tSLTt7iug9Vy2Q2L67UfJu1Xdg7mxBN4AvGTxXaqPFvyXr985PSM4YGJ3RwuhCCfvHwaFURC6cNwvw3k",
  "key42": "58V3SAg7wezazmDG3NeMzGe5K5NLCSHsUb1b2tDwG67oPfMrRzK9RHKnhZinpfMkoZnpCrfAXnzfs1yPmWehrDEX",
  "key43": "3aJ8cKbcrW1HrUKQPLWfNYUpR8aLAspexuaNq6AVRuWUjLjMJBudAEJTkQHsoKm8zt9CFUV2RHNs5NctzXuH1y3a",
  "key44": "58eevdxgpBdz1sQtiqFuruEd7cjCj3MPdjX1foR6EfBdayXzykc3KG7KbmMy2ANjqB1vP5nrFFr8uK5ppTXFGrRy"
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
