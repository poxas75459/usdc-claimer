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
    "3kcnr4AQorddDoYkzgcrmvgL3EiNBDY3VznpcarRTmyU5EHQmwRsmxgxiFHkfKG8ZG8M2RpocchaLwdQYj4LKmX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56LDrJdxUPNA1qh1qqnzTDasoQ2AKTFEaKZ9aC2VtdjUW2opzMKRiCT6LnrYTW8CKavFgESc61FrH5VCdUeqy9bU",
  "key1": "3CyMpSgtpzUrFNHEKq13BFEntDcjpPu4AQXbRxmiqFtdHxHaGB6kT36FdMzKHbN1oDa8DDv4DrBstHnvbACKcXFs",
  "key2": "36Tp836pVvVtAk5GAUAps3n7ADhVndhnWx4ThbJeGVBdzrPBCrV9vjjBRKu7qrix1EvqGUAP33f8hb2Xk427zaLJ",
  "key3": "22447BCCD1gxuEBsynGwUgw3Y9xUozWe2KzibnobEbJSGbdY8SfcHga9bMT6VL7WV7H7EN87k2eTnryFnivPnHzb",
  "key4": "3AQnhKCo8SmEEivWism2am7nzpjEKNzbkbNdPdi6XYtQrGWH8HDB3tyEjMoNarvbNY3cQREtVPApTDZjoHKnRg5K",
  "key5": "3VzZrfPinvQGJjyytiDgUygnKBzHGTiX2QZLRDZyCybZF7uVk1q1uecdzXA67STjFyibdm2opwQGwu1RVVpvjUhz",
  "key6": "3sk6WNwn4M9zmea5BRhAJi5NSwZt473Ybo4FS9wCzPs3z26hz7VvpSnE3Zy1GEQHcjij6SdirPRpExgTSrzPz4ay",
  "key7": "4Uj76RGSzdTEULw8XutNyam6QtBFn3WnE2x5CFUni1AcWqBcNW47X8MpqdGBQ9JMih6oDXnWELNG6ZPPWrhb4dQz",
  "key8": "4Te7gMfQSyedTQh6t8Lc6Zzkb8yFA9UfVksSKdaseL4Ssy3CHR5zfAaHhq77Z755inZFhQ2wKhTgYQyRrZUifaYr",
  "key9": "32Ly8GHZZHkhpHyRSFZ8Rd5t5TCEeEV56PN83f3mMcx3q8NKgL787p2vmF5QdmAiFU6gsgU9kXB5PryhxK92u7cp",
  "key10": "3qcmKyyQ5ui6mK4Gdq3tQbAVV1ouz46udj3Z44QmybsYBU9Xuemq2DHosAtJLPWW8Msgy21t9hxRfaVRef4bAtnX",
  "key11": "LqELVibmhNrfRL9ZmiXLYsrdka3ktMXjM5vAouMYEGvmUmBjkdUKQXWUYH4SEyUvN9rQKESzXK7KVrdf6RG7AwU",
  "key12": "2wkSLnBRCQb7FkhCu9YqU4nti1m7vYE1F23x28JQthfGUXRmeTpAnUX5emgcAAKsYra9Txw8xYwL5qCaTbEi7u7h",
  "key13": "3oy1EuEqytTLEfzStKYDa8Yas5eAwaLSxSwQbctCButKzwxsR8bxLUCJGkw9FaHJAJ5amg4kzVhASussNHvF1oJw",
  "key14": "LnS2m7vQSBW3hpVsvUjMNHAAYousYPhTEhvKH2qnK898yDVhLxhHm3zh34sGyCe3Q5uicQ6KkWVcuKgbBREQBUx",
  "key15": "4SedhqBU7qQRzNCP296Pv3GLm5eEqwjsHPhG42k22QQgLRWzRmDdReC8AzB7zDugYp3ySGqoLoFMfHqmT9x1rtfc",
  "key16": "39Gpcf8idY7ooWH3F12muDaihpzMmgQniNXcqr4cN1QLEweJd1UgnVnQNVAkyqtn57MuKKN6h5wUapsJPoCdAEyg",
  "key17": "496d4TkGmtuantvkpX6Dd4YcA1RAAoCZjrHuiucMDGVF29sFQ37YbCsBnjrbuRNtMes5j39vsy43VJb27K4hDFBG",
  "key18": "2y2fbfRy4y8shy2QPXfth23bP6m5DnMEiBzARtymwn4mxz4ivuMBJG4reRQbnAr2sJ5WopSdZB1MMancDrAhAeBh",
  "key19": "4tf7RHwWt193Sd1vbK4hwUEoJL7foGkjP985Lvv9KJdsUd7Nfzy7Naad9a52pHuGHMWv4wLNJRwBqoH41e6gx4H5",
  "key20": "3b632qHZ37B9GcyxJJQLGWEUm4qfmW9vU2uRo97LEYVWBRiTBHcVYxPZgJt3pfH5ygLprvFrnuMKQY3pCeoNNP38",
  "key21": "2NyzJWUf8sLYGtznsnJzk6ctxWhzxcMKoewGFhat76XMfPCdNML56twFfn6ZiuKsCLouzaPXyygHRP4ktY8gymSH",
  "key22": "2rgPtgLWisZKdzvbLDQV7KMMLwKKjXNmh9QGvx3heydBw5G7SQ7ojwb8jB5k8n8cjB6AeLazM1AqnLdqjDKkLR3B",
  "key23": "3ar9ga1aqu7eZBzMFHm9ioC4eD2c58H9QAqLoKm12SeAnw55Pr7MTXa7Mwi3ks1i682dwaMmqEEmPM2tUxCvTQdJ",
  "key24": "tk9opdaoWUKjU9DaNZKkXpCiQkMejtiWF5vAujmYoQguRMH4zmKEyJBfRtnYYDWqEoGFwR8QoQXrPo199e4E5mV",
  "key25": "26mTs27175Q8AHyviLoLDzFVkAsDzPxAUwsnGEgFN8MrWnoy9Cr4Gm2agMu9YNudDcTmitw5oLn2MvGrXrHaBmPw",
  "key26": "2VNB23n5vUp9rBMsDKN7rcpn8re2hBmTbV2HL3jsb1ZAH6YpNdmbJmy1e6E1VwqKsmwT2mHjm8vAHcgDVkTwKNHM",
  "key27": "5p5yCRe2XGh39TCRGresq5xtKaDj1cA3U4gt1uR7Rqih72CPH21yod7VfLKwC1MH3vqgaviEdKaJ1mcemZrSakYU",
  "key28": "5rQJtpbw9cDQsbBBVXi6AdFMrUqCkbGDTKytmqc222igD9SvUt9YXLMdUDZwzfS9U2WZ5YhDgh7g4aC4VrUfX5QC",
  "key29": "4T44ttjqZuxXUJuaHGjPGnxiezq4cStq3AqPF7XMgEE7yBcVcteDsk5vXYHcJ2kLRLRhEVF2homrTvJ69wSisCN1",
  "key30": "21qhYptKVr1Dz1WRX7KBpDT6ShrcLhmFinn5onoPEo29HwmdPUfkmpfxKA21pnxwQsBa2CCKBczW3GbE8iUxmvsV",
  "key31": "PETHLbdhfBCvzW8gxGcA2ioCHbEebVbYvg89RA8sGoZpuUzPA3ZKCJm28zaLZCXhqt3bTu6diWEZYACShpXDnKy",
  "key32": "22EHmxBiRvuJHeaiADmUMtAmsuju1hakyTwsuYnip11QUCSp4EJmGt9G33XHYegUEYBNNHMV9RrrsMDWXzBeFYaa",
  "key33": "3b6VqxjUNwvSfpTrCAwhmW5QcRTunvvQZrh6Kyppni2fi9L6C6EmgVQF8L73CD5vp8r9SuuXBYRDNMGmLizhPmtC",
  "key34": "5NQFCf9XWqLM9XAbywd1xKYgXQpT2ZYVUdbEWSB4SM1pNdHgzbyu9moDexipS6HNgXfHfP5Z4fN4vmjCWGMeq8k7",
  "key35": "2YWTH9n5zmQaayD2FbdV89TPUSdLDyYdzjn9uMPvKSBGyTJGQGxkvzSfhEN6BuKAaP4A4cUap6DtZ5kc5VCZyL4k",
  "key36": "4YvxLpeFg5Bg8S5zC6uMHE4LyNUdZ1vLtVRS4fWcKkjqj516AAJAL3XK4icBtxM36G9QBeF4ynyQ9feeMg6UXgg7"
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
