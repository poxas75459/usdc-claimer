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
    "4aZwDbNLaGuRvwxNxYkSvDQ1ktiBD5xTjae3Fiqdd24ZmtLzLLcrm8vseqbQedx9HSDk6CrE9CsHRBiYu9iKW59F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KCGyzx6bKJGhAzFsJoseh8jFE1k3sYh3MaB8quqkGh2NWocFCNEfMU6j2wowGoDNwiKgT99e2qUiyR5ajFJmwku",
  "key1": "33G25raJ5Brk1NgyDnXZmAzMicSojnSiLYdHH6d6psHZD9dtpJNHFHvRYnwich1DGHWoVt5y9jzE2hS8hrzvoiTR",
  "key2": "2wqiNUXiag2myGhU9NzBmGjsknyaBVj9Yt7dpdB2DpEksGjGFeetXV8k1TNhAeJantDVAz5FTnEGDYzRRMzmuyte",
  "key3": "3dfbocN2tDws3jJhpiC6nqU9wH7zY8QXwvnyMLtoEByzqpyZPhMHHonswSesrY3hJRoqvHQ8RPDedCatCLVNA3HS",
  "key4": "2dkXupc2UsD5gWrmjreiVCyR5kpeqz9dtAYtYvZ4bYQTBDerNL9GLjzadjfZnRz8QvMGeHUJmtWP3LaEWN5ThZpu",
  "key5": "5p3JVXsVqwzsMwY6BpXm7ZZuWrmVXmEDfNE15GR7EnPjqhkAjD34vf6nFVcG1ePTJtp2VPNrP5SK5EuLE22TFMjD",
  "key6": "YRjr5vjGGS6JVs1ZdeKe4H8YjFnqgfGiqXWyCHFimHpza4uRJ4EsvvQb4ukB2giotE3BZKMFCQGtRydAd1aXF5E",
  "key7": "2FqpyZTWg6PtJvwWZyExUMRuzhkYmQ6Fce3po2rmAks8Za5uwgwnLXrN3j8UxHa2gqe4HG8ppftiZzUey7vhz7B3",
  "key8": "Pxb6EZfExyxwRnC1R1CFvmkqqyvNdBfdeqHPVJ6hkPUgDoKBd32drot4Gnc3Hm81BfLtRXZPXYTJaZgTnTAtBTm",
  "key9": "2Y2fXydMWvSVnZKY4HbDLtPckBwNrGmZGmqh1ZBzH8Ee8w7v8jzqUDzxZjtyninyrt39fEQFmeYdGE657CP2v7d4",
  "key10": "3TGETAZQu94JngybS74QYnRdyp8fy8wwTqEDpzXLWsy16pYSqHLCFmeLU3zGptvufyuyAtsHCfzTTbnPMg8sFy8D",
  "key11": "3c9FEZSbGNnoXnLy1HiSMSAZdrYG5q24XHiHrhKqReWHYnNWtB4cZfEktSdhoy8bnnKuT8gKjLZSxYiD7XHGAjwN",
  "key12": "2VoL25A9hmZsmZtseqmivaa3b1J7Pf3BzFHS1YJa6jky5q8YMUJpJtyeCXeWzJCbArvQFPbACennfJmrq9TPC915",
  "key13": "67pwAsZNeX6HDxvV3LbtBm5AP99t5dJYFFHCN2FRkmYxadBW8L5fxHaLc1oHsmEsXSyHWqbNdF7mXDtjf9jx1Xwq",
  "key14": "2RZbvHmBq6pd92PfZqjyXxEnrYq5bonknti95o8EemCrrNtucUk3Pe3HMzPHiuVJPKBubz9tDwFMdaQuFeuT5o2r",
  "key15": "32HfU1DHp1qov18fRrp2CySw9U4Z9diFGWz34rhHaq8nDP1L1U6mQ25ZUBvYMxxpNUg7ofQtsmadb4zaJDMAjzuf",
  "key16": "2o8PwYswrMB7sKw2LpmBHKL5azTdZYW91wAiyJdB32GwvKrGgB4kGMPkiEQ5ceUggwXkngktA6NaaWW5mi8TbzAg",
  "key17": "4YroBctCSkwQPej6tFEhUHjT1fx4y9Cb9mKwYfmxee5SVk91xmtJFzTt63LtJ1CRoXkhSSXZWCRjtXkoLPUZEEeP",
  "key18": "2tyHSdRevs5VjLAA4vM12YdUCXjr95a6btFH5M1Y9TjjgTGoQ4iYvVjXTx6anM7Anex4qg438JymJU4DE7MqTBfL",
  "key19": "3AfB3fHBDywXTHhSDJXuB6xd2wkgHhuEZjLMTBGMA4j3c8o9BiNKh8JgYUH5VwK36nzJpy3vweGizB8JnowNccWU",
  "key20": "51F56gHjHnnya6d1G4ikjaF63SFDqkxLXmqfsThWaFHZhJpzs54775VpGyjK4um6MHKNHsHSmmAJ5dHirCUw3ADj",
  "key21": "VuP7mVGxsWyWZ2NdYk7tSGmryB55pZprTHVd65qgaD1AZpxyEn4u9nvSQGgHNKrxdaFn9gJN1qvghKMN7jF9gwM",
  "key22": "2He2vqQUDvG7BbMAzuyp5cgABCHodRt3UmrXCLX24mZRLGy7jDMDS2TaBPXyHrAs3ize7C8NQh2U13hzQvpwwoh1",
  "key23": "51ZT8ktypGq44AmggJARoFXEwMNM6Gb693AkFbCDy94KX78L5CGMchKacYxz6jhNDY1YR4rn3Kcmy6okxs4aGMLy",
  "key24": "4wUXAuqJcAPdiEaG5XhgFXCf5pieN2PR14zwHhTVczWVVPcsjBCpu4FhFqk9rHBhGYunvAQbmG6n9hL6CGQBohXe",
  "key25": "3Npw4ExFu2Fbb5P1J7r7wK5gmuVoCPPxemEHMQarcgEhK2MdkDUTXBuZ7kgdBuk5RcYw91jx3P8KPR2orejmRaiP",
  "key26": "5TewsDMwVuzncqonKDJisz4g4dFvP9bxR84hfgtnJqc1FV5oift6TD8D4i1F4kCbZWd9SeVwd5YBYCuaC51yeMvK",
  "key27": "2JkP2vsrALhBEvcxos12VjFNKd88qcDMAJAuPfjXTtpJ9dVWXj9jjc7uUC62aVZ6TfWnEGEXZzpmdLZvUczJrdhG",
  "key28": "CuN5ryMCkt8yZV6Ck2htDVD8qhKxwjBv5mpbCLri9jsZbMNBcP3UucScF1X2rmh7uNYLTTf6KXxR1a2FgHB6PB5",
  "key29": "2QUAs4TBKPc6ta8GRsu2azmxgnpaEhFBYkZumtBTgoAxvNo7FkZc24eN6YGWn8tbbqUc5X15h81CefoLKwD9aNBH",
  "key30": "58hEGXkk3Fjo8SVviV7C6LZTobw4qskKuVKUD2K79VDVNaHtAfywhMNS1qCCUbSWA2DnjdvcmrgqZtB9weUKdqh9",
  "key31": "66gpohmw3TBuuT6nv9qzXLW6AFJnUv8di7oq49vwAXBrUSbELxbSuA4gQ1WU8diDe5RZZPWbTq88v9wyLpR1jKi5",
  "key32": "3eaVTCRGzzZVspwMAr2NW9RkTMDFo5bHxx1qt3ikd7FnkAQNyRd2LaxoeKRwafjoWDzu71S51wswdvhc38Wh83Xe",
  "key33": "2724Ta5eJF1GxP6nJ231uTxzwEDXq4ZYgBCvbaEj5yYDJz3ZAcUEM3ciZhTWsyH5QhtBPM68eMFng7gnynDmzgtB",
  "key34": "3vkqM16D4nAbnLeSid6iDC3cyBF6eNWrHvWxU7dsrG9sSKnx1mfu6SoaLXgqKaUdxaJH1aQLMDgyxFGzWWJaBK4k",
  "key35": "5Q6oU5gJCnrKuJqHGxervut5yqpDDft9mA6Y7oTdUeBpLpQJRC4wD5PoSKmtvfkHdTCetyVqiC3Rjc3gcWMjovyj",
  "key36": "5d6dfaQ3yNDffpxiDGHGZCadjoCLK6VdSawnr4SLZbUq7nyFaAu2dgLQSg17wj4QjFaHcMffiFDLHsgysEztiTZg",
  "key37": "2ByT4JfHSAgWWPHBfMV9auYwMxEgwQH4wc9mohRhkWu3PBoV6FGa3XPmhUYji9ScztK9CXk89isV4zADc9XWQymX",
  "key38": "48zPDKJvtn4BYTbwxdF4Zjcfi2a2vfN1b2FWkQnfSMEsfpCwPjJN7TwV9tsyfANBgzFLmttJnC8XfozXb1bU62wU",
  "key39": "PFVyZTSsJxER4kYZRAWVT67YRf8tdVufkbrUkrdP5ypgCJAnGAroo4eznfGvdKK8UthYpNiNaYMfSu1b9ZJaMMo",
  "key40": "qiobnYhhaDkKmfwD97eFmyBqBBBenfKiSF11QX2B22rhVUHkMxMMQcUmbFMZCUxffYW3yeny95o15eKbcDmttMv",
  "key41": "26Jk4qKekyJvm3hF7hTHRWxP6qERrL59H3qKeyE7UxaHuc5pxkLe3buB3aT6KCAX4Ybrp5WmQsfisK2rMamnFpHW",
  "key42": "HQmtWeBxFccWq5oLbyVn92z8UpXbSmu3NPPNrY6dWodZXp5vULXUK6oGMXzBk7DtJExofgd7pGsz86XWmcf2pU5",
  "key43": "4svTcyPkvh7NkhtuKqAEi8mHmy33dgkdPEBUz9nZW9z6QRSr8SdK7ThA77XdakCdAQ43bFNQbVMzA5s2JcLaabEA",
  "key44": "2b6377vryC5tMuFiC5SBKh5H9ghouDhY3ANRo5Ai591uNHcuG4xTC6bMCojhZetEfRGX67q2edX6VGGBTyadhEgq",
  "key45": "3PiqUNraoZp1KRamEUEvPP5G7MEz46gbrzyr9bnti8UZYDmVE96iZuqJhzSPp3pP5iRyYkm3XXPw1meZE6WGypeW",
  "key46": "2NrFTEhAkQmiLqtjsFytmBjgEL57Mwk2iqqu2dWiA5eqV2wgcdAXfBDuJYrQUbWXnEGWDQNzXV7EZpSju8cxpSdH",
  "key47": "3tPKZp77gnTbGjRrVrvEkhE1rwnvDjZ3nx8u5qKkmTNPUR4fejvTxvHhYXZ5YZZntY81mVjRimX4qrxEB6485VsG",
  "key48": "4eaPnrcoBCMsqivDgthWmywoFE4pbc4LeFZ3y33a9b4FKujqYtrifxSr7xpXX6A6QWmXdWphWUiPQb5TjK3kHP8X"
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
