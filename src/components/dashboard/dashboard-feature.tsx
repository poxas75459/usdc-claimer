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
    "5zuzQugnc1cem7GP9hMUXSuFwzEjr9vfB9Rz4edmzhTTfMxmbJ6FAYfDSEdUuqKktL9xNL8AzCs3npsmLLWaUwnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LJSphvVsKfkBFzg566FTS1AJpEEaK7UXBxrtcnacq9hMHLqjxGLfCLDK3bxAWNyzkGehoFWpTCzJGPCjz5R5Qoj",
  "key1": "49T2YUQXjeG2i4YJkKCLSXRNEhNwR1mmftZLZaSw9mqEbszYxepg4oiGxEfFXEByoQTByZ86Ksz9rL7pMWdrCoHw",
  "key2": "45VUqsyRuJXbVAKxuUNZLK7h5WjjvpGm66C6fKZwHUno2xNjrcHq8f881R1fVpApbpthpweUG3rcjXGs9uNf99ZN",
  "key3": "5PTPoCV3So2tYoyG8aiSLs4kX1u2YUfHtADbBcXtyb6MUyYPbBauFomGaS3hf6p9PNG5kBCmJ8mfFgr7ad4nuqq7",
  "key4": "2qRLxaaVjmN28mtcnzGBZVSwnp7DJ1ZS9QvCkMLpDGUaAf4LvjhpWiGrotEGGxaYEvZGGqS3aVgWCZHFKfvFbpPT",
  "key5": "2761Xrg9fW5bLtfcaubx2QCqeUu7tkeWnxzM9pBZbMhmp28gxQUuD98nJuFJtwZxsE5ywHBX3VtL5i7scCJWbp5V",
  "key6": "2kPrdactD16wLoSrfxEiAUZZjCibArSPdi9SrjFmsVjAagaYrR1tCJoDJihaARY69hoHA5fQYTYEHXdwHnsVpHzx",
  "key7": "6vUi7CzFLK6yp6LeVmS1X2uz2pVmAtPLygUmXsebugFtzUcdybkRhLDnvz7A2wCKzLbzNWkKa7YMtduvckq7rU1",
  "key8": "36eqsqX7UfHmGdkx7fZj4SKof5YwWepPtF3WsHb3ga4RYGX7zfG51pYvtfFP2chDDYAjX78JpgrJGPbCTQRBxx7B",
  "key9": "hLGZmKrZhn9nL3mi1AbhttUDXhVZBLPrL4LkezpXPPjgEnX6PzekWpUc7Cj8QmfwSceSrwt8dNbjpacDc4YQf2Y",
  "key10": "2nrC4KSRFVzuALzc6u8UMxqCMMy5y8XrHugRJeVuNhPPqeVrDghAvDUZXs79k1ARgqDbh9dcAcjVMstkwJeAg4T8",
  "key11": "3znmhi5Cy8xEARJAsjnu48YWY2Lyzcmon4cHdQcFc83yutKfeg6Y73QponejPZGLEcgorMqqgw3yxjkvUSaeYezx",
  "key12": "62FcEKft13Pdu6quZ6h2feSFNkaN9aZc1C4QovHyKpUnvUHMxhAyoAqV8ALccBkGtUK7KGW86WPho8cbiHAXDh9L",
  "key13": "4d87sB6kmVJttrSg9PvZV5uzVgCb1YaKZ9LvhhASFE9AziqfCa2QbKDsvU3DajGdmF1HRWAShdvFEZjP9u44o8dS",
  "key14": "3dZAuNxj3BUgG5jGZK65gHnAUM9bc8MFA7Yry7ZdQB2RGMjWiJSeiBVtyDkWEpF8kZLWGFRAT51oVmCZ2jr4AQSK",
  "key15": "4JuK3irRpEyEC4wtg5d1F5of6bsXkRTwcHS6g1rWkXc4KqPZP89aR11kyavUqXY3nXsbrDNyxHvKYrZ31zGsS2bQ",
  "key16": "4iCPssdpJwx49N91yQANGyG39zDA4dQi9GA6XCJQ2awBxBiaL3W7pQVL5tCEv4eWaXF34bkzSnvM2141XuV8TD9B",
  "key17": "rU3jax1SoM9NUo55Uar75Hpi4cwXFp74UDeZkcFfwj5wYpA32gcJkZo6sJMk8c38UPJbZrvTmcnhNu6eQe3wPUq",
  "key18": "3zS2qF79grdPw6Lcu88RHE4Lunjij5dPbKwxEte5oepQXvBUhbwCmjAYQXdotRaYqHqS2utf9m6YtC9wVkxomYtq",
  "key19": "3R514ShZDz79FiukU4DMPPbwxv61LCBEqabC2QQhFJYydp9z6MMhqAsYS8eiv3ahcpiRauBDu7aK3DDDGdgfVbEq",
  "key20": "2AzyKG561xP1emERJnqNnHnWqtuKNgFEjgjrUTYSbTg6gNCEFQXvf5SNZc7Y9nEjAv9U6nKj5p5pN7RKv3ZjMneM",
  "key21": "5tx5NLPa57GgdM6RPj9bq8nMNWJauXt2BfoF9mbNsyJ4fYEcSGCtmGkiu9KCSVrGheyTQ2iqQ4gNJrJ827DLyyuW",
  "key22": "48coxgzBMq1FXmZaB3raEUsgwp8kyM14We3FTpMgiH9bEuDF8Tm2eaJVJMDUbVMvgTxNfdXrZ4z9jvk6ZnWjW7UR",
  "key23": "4SmutyxMnTS8392XgmPJhDM7LwJDXGNjd6FmSDvBQq727aKx8BcgfVEm2CkiJ7AWedFJ6UC84D7kwYnnGWH1mKnd",
  "key24": "3uuudvDaAMbUJFhRHDTwRH7Ho5zFpcDEj6zS6agw6ZcFLpsMJS79tFAGC8y21vvznRrCri43Fr823YpfKyY8MYoY",
  "key25": "4qgAEMWWv8n7PqYPabYKA2uF83uoknqps2HBAec7xeCb2WAexRyTPZZ5q1pQt1WJ5cfmkCsFhwV7NNMnZtnPEkUp",
  "key26": "4sAuxazQg3PStCmiC4fLvRgEHbPiUtkwt61Q9nBnoMDwa7hVqbaytXDHTzdZTqtwdBzTfo573ngcCyQgSqCpWeKz",
  "key27": "52FB6Np16DH3fVAfusDJAZthUr3sk3iXwZH212epyyScRjHefD6CinowFNjBLc37vwXxXV6B5H2KDXE4q5q2bjtZ",
  "key28": "3CEwGqjZLDDTJ7fWcHbpp4McqjwvjbC4Zqwr8YhEhTiGcJsLPXqFweZzhjcAwR9Jx1J6eKEJWjxirSRdYXtM63EC",
  "key29": "2dCLTt2scvPBeDtHUhxBiVXexiM8HqErMbfUvuLc3eX4bfikiKLP7TmuSWCrfrDnK9s61t71oX3G2rFsksJoRuCz",
  "key30": "3A27cmxwg5q6nR7MqSiRyG9m2tahsqTfviUgLz2RV8WN4xAWit3fYzmjMQ5T4Kk36pnAyVyuCJjByaMk7WsxwoqT"
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
