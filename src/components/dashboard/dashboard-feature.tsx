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
    "121wzJbzvNtbxzYDx9dKC2UBb3EyNrRtDJBospPp9DsrbTjLGiwZzNiwBKRtNRKDFLMHcy3CC1avoeSZhq4izWcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AY5XTDo9EjVzxWUyBNBNPMg6hKoH1mGxq3n5sW9c3VgSdpEVcW3MJRnQ5eMKeiBgUsWmdWfxbh1tiAsksLvmXkM",
  "key1": "pY5aqaHtAykHmfErU9neK9KxpmDMXchBjBGABFuKC3HrbC1e7rkPUVrJTSuvnT6sDUFXxvCbMNNMbq4vQmsYoM3",
  "key2": "34sVP4Xom2CsSpvN2by4juZBWTQgU3dmENpV4CoDseXvYGBPrmokbhEsumFhdSa6TNxAK8y3szWB2Cc9HK9vCehv",
  "key3": "5D9t26E2kRLZjLN8gQx8Azttkaken73aCfu6vGWxQ5DuEw5dsXh3dSGnow3LzLPeepxo8MEbnhWA5mqAGd2PRMrQ",
  "key4": "5CbbzzinJdwLANqxuCwZWVT9Nrd76hNMAG4XwW7SjVYcjVnY3sH724PNNfYfT9wj7cDgnkqiNrVqWK12Mi38MScH",
  "key5": "4nDw3DDpngyWFCsVwwGCUy9AhBYHfEkYhWVEUyEevQKi7sm9d7nhJFzdraZGPEJi8TK6mTRf4YnK7i4o7v2W4RPz",
  "key6": "27noM4iY8hPecnJtnW9Ac18cgaysEb8X3H99aiKoTaR6VMdDmve55pG6PTzS9gGhNNJVAnJ73HqNXRoqWFFPcycG",
  "key7": "fuJkSTCxn1JCB3CJTBJWR4WezNLmtcxJE3T7gJViFyUzWrzfGxoKMo9n2nVB9HNhRsgjscUoS1nCMUsfGesrQ4A",
  "key8": "3pr1eWKkNEQT4Dv4tCXYEXLP7ZmtoeRmyZedHjBuKLQLeDUQs4K59UHXqC93jzb5ZXYF8Y9pwBQn6h2SMY7ygu9Q",
  "key9": "55Dw7BGVqFhA1jn15VV2PsvjKRgFa3Qrnu6Q1xK4rM2Fstjyct3e21caq5yEe44SCQXPhd3csfShb5Vy1Uvsa88g",
  "key10": "4VqPbdJJyDvqVh8upxoKgFXL1hdwZYE9yZJ2mXyN85Bo45vwqE6MXLgrVPvgz7dbmrxeXQAaFLVMXpJ1fjVTQTFZ",
  "key11": "2kicWmW8cdQjgfoZkNg4JarBVJ8Uwki1TcuDPpDqZz2RuzWHYHid1G2o2emAnvfccqKGMkhhJfpNHXs2o4s49zrw",
  "key12": "3J6Qicd2gdQQpHtRNVHPnn5XmgTQWsdyFh89N3vUAwmMu9ijzJYc1QtCvP9LTvfvHLohxAwh6W4XodRkZYrcB9CB",
  "key13": "3q7Sefik81ho97d52BSukVxY1rBSzZWqzoqENxx8kqxLFJVCSX8andqFrBBHK6Ex2WJVieyYphtYwjdYBhG1BfTD",
  "key14": "3diDFdScB3rLxb7V1DwppFUDwNBqcKh6CyamkMzpaATJsHzqk6FYxQnmZuc8Fe31egswiSaL8tzz36rNEbvgjg8P",
  "key15": "4sydWuU4TLYTj3sFcwSjQ3YAbSW8EviQyFLzBBKuy1Cy2oWWuW52bQYRTJQ5NKUTfapMexvPSu5qBumfkdFJw9dg",
  "key16": "49y2d4k8Pp77PcdhjTS7yJLHNjbEQ2uEHGVhPmuuUyiPbwcugdqPFM7vkq8rRGJVHXdfBpmsoGvMSCSwp5r6Eh4D",
  "key17": "oKi8ctBaMcyht34dGuSDJEtzMExskmCpmHjsRm8bu3Vs8DwGocQcF4sdQr4fTNGyFGSzMAcpzRkP5bfzFcTLsSJ",
  "key18": "8w7PogHxb1nVh6TcndMsTHfWq7AEG7sXG3v7MSoZS9jbZaFrFYJ3ikNMM5bkcw8NTXp3YJWaUepoenVQyvMQK34",
  "key19": "2tgYqLQnU6SCdoJvnkQDg1MmFGkwVbSLFkrhX7M35a5wC3ZUsDUHYrGEsmiDvvDvSLd7drek3uTDwy2xw2GmNzrb",
  "key20": "hAtEsdvFezCbphMnrBn8Je2iTRdWHF7SSbeWHDmvgt759iEAPf2xdrgxR9TTgwdck4WNsNZd9kgC6nasd4HpogD",
  "key21": "5iHirAV6F2yWJBXBnysUSm2wQTDzS2y3PtsJtNiS3xjXxTufAcKRoiwZm4aFg8a5jv8HJQigYKKgddfje8nqPRFB",
  "key22": "2K79h2dTbL3h3rxwdGd6665aSwvSmYb2EjLKyeGp2DvXf9qp8Wj2o2aoTmMfGna8tnLmrBABcN3dNjDWFaaTTZru",
  "key23": "4Lt6p65GScnKTkoyPTSUZwXNFSznGLmoECKQiqMbBJV8wMPX3GmzQyE9Seepgtq9xPe8W9Qff9VGRM5vdCMd6kkf",
  "key24": "5mtkbHnfednrQdDHnVXirW6PA3mfV8QQCLdNQbG3bmxFCJcXU4uirsSMMmW3Z6htmbhyERVmzC96HnkQSJHtAGtL",
  "key25": "5eHmMPChRbk4VLccexs4Eo67oq6eeA5UmofzQfLDP8Nk6rVhGLYXFESUE4eqDEL7n1fjnEF46aLqQLfnfvCSghBr",
  "key26": "4QT44Wyo1zQrnSwaWhWeKyUgR6hz1gwU7w2Tp8agupK7ABLS8oVC3ppeGfjw73UHXvtfpbA3paTzKgzoid1K2sTi",
  "key27": "66MJUxJGsiRuxr81EmGTWjVmVUWJLR7Y259WZWKRv2YDNiM365gRZUY8Fc212421KG421azLaAHHozsuvuV17dJc",
  "key28": "4V2oWP6UWwdWE3VW3WALmPYSoEfzNjwBxiHhfrLMbE5XBqrYYoyt7iPgn98tfWzxqnrFrJgqx1WDft4y7dFFY7fv",
  "key29": "3XWg8fFGRrBxCXCEseoyhWpP2q4WFysZhY84iQgfKYvHwtLtcti95TCdqxpVY4CTTS6TH7VosC35twaDnnNXV5Ei",
  "key30": "Bevn75ff7qcEdVS7AWYKTm7gcxbe1NK1Ctzz8GuhwbR5jL9HdcMACYkF8CQRiEqrxiREXa5JR7k95RMZL9zhehs",
  "key31": "FvJN9ySCku49CF9RQfJBwx3RAaRd3waPPPZwfFi77unme8fCNKeu9iGN6onqmWYNEWKQRMvWQuVYhgtC4jshe1v",
  "key32": "33msFHGuhBVFi7FNWHPURAxP36xdm7mGZCbTXzKpmPAXAjUSKq7VyXCWLDCqmStPownQtHVS1jreCekm5obSv8eN",
  "key33": "2zKHrjWNink82ZGM3KXdHbP7149gSiynyeUcsAfZbGU1PwtzLrbCQQsagoLUr3kTzB6TUcth1fB6MuAzynerKjFf",
  "key34": "2udgUG9CBrkFwQyGwzWtvuLQtcnXt1zRbwqy82iWE7CZNfMBy3UcnGpoDKm3f7iePkmiosASHZjFPBuQcyg4SST2",
  "key35": "16nzXCDWGKFhFw2eUQD8eZFKvtrjbxECQZBZFFvEuC4keKwDh1hLMPBD3UwxcuiVoMhBQxxbXAugVxcCD2oZ5Ac",
  "key36": "5U2wBzWULUYvFZ9tYLYHTeaRwKt73cEiRgm1i4xtfenstUNEQ8apvLwzNRu6QNpjVFGUDDP47PNUCqDWRU5xo3WP",
  "key37": "5QBsM8V86XcHhRgMGS8JLExgCwnSZuY6GNRcNd5DR8PeDUsb4hmFHsk96WrVvqVDPMXQDG7UNdkk6B1S7y4q8YZk",
  "key38": "KxiJPmTgL8BZVxtm7f8ogca2j9ZGaLPdvYw5iJhZbEkW7xgxTeAc1NKFvwEWvqbMENrE3mTzQHcvuwRhL67YqvZ",
  "key39": "FKGiyYTHtyK7mNAwn2tq4rZLzH3Um6yYGukALWxV9B6RVh9CWrtuVDAkwYRgyRJ1d7DkctDBRHSh8xj9GKVFT3e",
  "key40": "2eBe42pNgX42sw9QBJe7UzWzQpYDDVmakzmaxaHf6VYy2voEMkBt9PLgcDSqSWncc1fF1Y4T1HhKRBo5ydiqiDLS",
  "key41": "3chVZRRiAtYB239kHbozp7bQnzDgM2dauLnqc7GTZVEvE6NiRwYvX56XE4PdqE4D4XK95p5gXBg7juP4nTZXN3mH",
  "key42": "4pvLn3eiVYrSH92VE7TSQuRF4RZ2ZGQWb2FZJDa2TQGNXAeChosqYC2vuRTriB7D8SSnkNk5vsskXSQMtFqp7RcR",
  "key43": "4eTZSWGSNSvwGeUUnDFkqdV6cLp15v6vQP2eJBfCnLMEVG8bMq1259AUSs8C162kbibewpMzSjrjmrFULjgcBnpH",
  "key44": "4ub6TQKzwXgMCWTUgDZ9VS1JNW43FxLkPLvMS4KKJ78CCD6NemTGHcw5JyUsimfTa11utfWswDfdG74asgGAyLix",
  "key45": "m54Eaecbsisi1EHGprAUJCCj2vbL8WbBkvVZvHsmDyWrGWxWpYhKuAUh83tsrZ4RcCYDYxgQyE4T2HpTbmZMoU9",
  "key46": "2WbQ4dd6ho7CTQx9AHoVzr1KkefMbRwCeooHFEfps4RNcihAnosP4TC2XxEu3BEQ52QTGgH4BQkxpnHgajURFB1L",
  "key47": "66P6UNGDDau9pwaKLk293vzhyZmAEC34qXUNTWbxaQ6vhd4UkJ4FbaesZW4Xvr9AFgfVKwuyZwv8y8gSb1HQAbqY",
  "key48": "cWoXdUSG8xiA2z9cp9QnrZqtkf6Pa74driwsbV7d9exMhcUKXi8kZFD7zosUKqHdGR7EpsZSqzHnt23fDY1h4mH",
  "key49": "5rYE9cWuRnj19x1zqEnhG1yFeW9kWBVd7sc1KJHbEneW3GwKgEkWfRAcU7KN3Rr7BK6WCPVHszoUcmeb2gB4sLpg"
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
