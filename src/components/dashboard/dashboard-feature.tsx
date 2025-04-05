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
    "3kW5Yq1TugVmnPBjtTi772MHd6fqeZQcC73pXBdhRS5unUs1sSfBtiN5EiWhA9yLGEL4qJM9KroCh1rLYGYZDmm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "77Fis29GYqhx27xXUtMARP4TdSeTt6B3k7sNC7XgBeKVFHeSS7mj6aiapLH1kw58wPYJxy5VVzdVuuGm13vFhfV",
  "key1": "h1vpGBEBP9hguXUebZKHBw574RErbT5Kb4aJnMpMCrGLP44GzhfNSjvn3z7RttUr1MwpfH1PHMirc3if9C9afY5",
  "key2": "4GSfhBoyoj1KYfhGf1N7N2ZC7MW4rrzJckzwhhvVHdSuJHgV594jA6p4bx6gTmsthpU2knwkvv9UrAwNDtaWaFp8",
  "key3": "2drpewNB38uQBiCgp2aiAKEsYFt7FsonvhQ1ME6zkg6VU8bYN4k1vwfb4R1ty3oAoh8zvRx64czxDQkQQBFHNzjV",
  "key4": "5fRvtMrqZXYNwovtTzJFrHfcMkrtAbtu8h6iGW5gEbKw1G8WxNCLMZm7Yvaw6woF6Us5D26Szfu4gNEzU3SPj5rb",
  "key5": "4P8DupcAZRsXphi3d9gfJQRYKfRS2C4pjvRzhsxfyAXrPCkdtmnWbW8tMSpa6EQJpx4yYJz8nkGnKpAP4Q6CDEVz",
  "key6": "2ptxgXfwqmYoXYo2uBwjBqeCdqqbCDbTVfpdz93LenQUdGmFoFzQG4qHxA6Dcg1WYNEmQsSA1fpH5YfPQ42v5cFY",
  "key7": "5B95U2NeV4XNkxUeiGQ46rwuLkxcwXVToKxrvhD7Whqu4ygoBqnNYVZKtx71mRC5XTWBxgCYwpWkmbnAg9auQrYR",
  "key8": "5Qhcp7xstjSBQ8qY3CWjpnbhyHDpKuY1iVDGYaMLgXnfG28a6T3HsiHcUquUjFCsZBRm8anhewxNBt6iRvgPTj43",
  "key9": "4AorWUQfkG5TngKurVvicqxT6HKQZ1y46F5hBQjXb8F5c2LPzb121174vJ7tvUSGB9DQa8b9s8AqywScGM6b7bGx",
  "key10": "5kSQT8kqr7u1jZf3JM1X9XMDguhfsmopY6qjqZLJhoLFJ5utFw2cdnjwgVbbJPTKRSdHY181VVg8Ayt4uq99k9sy",
  "key11": "bx9W7A7ZexzCy1cHbJxQcCWT8C8QgyeLhzFtUrVtPXwQGz7G79fQ54VagNE4iLPDtD671SrQU6yscxMTwoNyApc",
  "key12": "38TYX8RNhSUzZpo15rUwzMLECaraWKRRiBX7GarGUqt1R1fiP3b2gsDZR6C5KVVD755JLNsUoF9CXj48NeeKSqhh",
  "key13": "3wnhu1Vt9EEuqR7oruNynMG18mZj5Yk8xHimTAJiHu1VjbvCwZrHxC3JuGaNKwmPmaz3rzyoDAEWpUmzdmxPUyu",
  "key14": "3uc4t3fcDTLkKEdcgn3jT4dmEgnEM1Z4RFhfwWdbphz3RVVNeT3XwoK4xt9PZUhmv6UV636XfVpfkSMgiw6MphXy",
  "key15": "4JZwc4ztyMQCdEdt2VaGhaoWYW27h1wD8oxnB6EANgdpdkE4QTiWiChdVyLLRLPbe1zdx2q1ueWU9ApfMSWpeM4N",
  "key16": "5PqKzGLYR8wV8aZ9X2U1sun13dScPy1dmPGYhY9pLU4Qqha4PnPgGCERMr8T5toU22eAVsmA1jDnG4z5Ce6Vwuuy",
  "key17": "3UL5ZxQNHj6UjCn686Btxy2bf3ahQR1gCKSjWwwssNXd8w6E6nZAbT8sCVNKymPaZNj5WH72cAyYPHhn9Vfz6EsA",
  "key18": "qruRL44UM8SdJmU3NxDSDEetNmSNG3DnCTr7tP2cGebVPPMrutCPUqYa6efw146XTbt7rQ5fnXrWVQDm2YUUN55",
  "key19": "7JjfW4Yo7qEJYERu9ZKn6hkCPzAdymDsJDnYe4fmmgDzWce3cuTsxPYjHREFXh9fBCBGtzSfmYVD3JDCxbSgPoH",
  "key20": "3RzGzT4XbH6i9PzEPAjaoCmtKndAi4FpDCqNYLaTGcrYCkFRHW8zCdDmTSjCSh2obPtKuhwgnwb9rrc1535tfNvD",
  "key21": "4i595p3PThywASAX4oyapJ9ziKtrv8vD3W5BtcPEK9azMmJtWk2JgSfZCguQE2ypLFro4XEKjcXPX8jLpBQCm4YX",
  "key22": "63koenwnBesSZC3tb1AKUAsNZE8PzMxM5WM9WkyH6DpECUVYmDDXLRhj7SBjwcY3MStwDcPpesMwvyFAw9be3uKh",
  "key23": "5gGNmfaRXiZKiyqSVf11e7JH5dgqrmpYzMadcACxatFsBd3aCUiDoJQ1AM6C677sx7kdx8wmhHDivkbWTrnhcpv4",
  "key24": "LioBVefA6BwrwiwDxq8p82jaK4iMyvWwNB3biSA5RsBDiVx6CCzxyu4jcSc56HkV4X7WRiDeUoN8MuwpowMnvog",
  "key25": "57ywuReCo2jzKBjDoKFmHZb5T84fAuXfmwqcEidcoRaLE7zZ77MkPGJ8vSjtqtsE3gXtbrAzzAvDyaF3CfwKzhJc",
  "key26": "pXeFinUHoAFu6YtsZioPKzEA81EY8YL3VT5RX1et5HQRbiqwKKLr1htWKthYSeJUPp5GyZ7ieB4ajaa619XRvYt",
  "key27": "5SQdweQ4eoXXxXGZ4bTe3MX7oDN4FaN3vWFJXzsK2rfUkKimMSfTTh6i7RgFpqKHqCLUivSqKWhMxZ3hWtuzF23p",
  "key28": "rXjZa48SsM1BPcnXVHFkMFxaCcRVNyA8TUeCHi3vmZT9VwcewgotgyQmUHwJEeh1fXmhQXzgcAqmuJuXL23vr27",
  "key29": "67WCUbjigdbDSNh5R5P4cRctCBtT4knXiTPtqceWubdZz2EXnsjgNawhqgzwpdcwChaccoLiVXNeKqSYoEtXskR",
  "key30": "3EV5yxTKE42ZH654Y3NAwoQJr3ummXpWq95dpJntZ7jJyNrfeLSLz9ERcfKsUaTVdZFg58VPwn3qMMmL1USe64XX",
  "key31": "44BoVvkzs8cSwAt63VGhLwJLuk3aPsvqEN9FiPz3VeKycBtYQVm7MYEQE7PMsUnB8YxJhrh3gyijUrdgSbHUfn3D",
  "key32": "2BQF68ufyRjJGq1nVsymH7SF21FxXcheijAayd5BBMVqTTAmubVM8jL4JJj2vMnH5PovyQcKPUWKuxZxisHo3MGd",
  "key33": "9AGdZX9UoUaXTWKWmiH4XPSKCRTp4w2zUEwzvKxE2H5xFKPJKwcB5JdzpxWrg91E8HeYWUnFfLyEKhDu5vivVV5",
  "key34": "3LWC1B4ZtDK6vQRt2ddR6UeRB7T92U6ESuRJmdceZXL1MXXiW1QjWNcofBswzMc1p5Y2CQLZfQaYukBgWwE6cE88",
  "key35": "24pVFy7ka8geAtCGQSeTATiUL2T1D8EJdak6cRwxJWpVYEanHAv7nKdqv7jGV4tcPM5kAUyTAib1rkTEJgEF7k5k",
  "key36": "49kt4xLeeNkZ5qaGeUathjFeG4cn4FAdomTZU2LC4PqtERsLMKQa9hn44W6feVCYWMUqYvWnEtyTh3auc1Soiw1o",
  "key37": "4CGXejpqG9NzexW3S9boY3CeufoPB5tX27k1X17ZbXdYzbokFuV2KF25rQnz6SHTWrgSHmd15cyJrp4gBng5xivC",
  "key38": "4a6o1UkG6LoPxDUMHH6USg12uQPbyj8QTaNq25JjXanM7dpNa62BMLmqi46UXJZmtsjhihmEeg1feZEztQubQdVZ",
  "key39": "41uHGP24XNo2ZAYxPGHqv7MdppfrgkABRtv47u3JbQH7ehV3RAysyHXA4vsz2mjULiaZyCxAQQr1EKb3AR5FwHGj",
  "key40": "4sjUJ4gCx9C2zHeibJM2GU8KPhBTUtuRD9da4fnoJRA1CcDD7SqybBZuBg7xbNh5ZnitsBabaNxEF42voroWVAGx",
  "key41": "65doihQX4JVH9mSYQW9Xzm7QehqDRvHUgdjrJSrkjUfTQtcxf2ME55t22Jqh5sPhqetNNXTX3kjtL5hj8cjoNbSE",
  "key42": "5tcPEEugn9JLQvLXbDrsedfjuEpVMjKzYLnSyZHhCxyMd2b6wgE26CBPbECs2zM3fNfqnTyBB9ARJ4YXiiQJwkHw"
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
