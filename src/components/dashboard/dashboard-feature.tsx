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
    "679K2mXo1kYwokc7VRWBJFa8gmUg42k4HbTjCP17qVaanFgnbSSmPhgmZ6Ruib7PdJRTYH693n1DaSVmd71HeLNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nEwo1mQwVRBqr6REWzaYP5zrmes3j1AHgnzzhTVBXRTjDtKewUSaiAARH2zMT84cRtoxsXuq6qhGCa4G7m4gEYq",
  "key1": "3MTjCv7P9ieFEZaZPoC4gy5STgTrbn8McQKNbDuXeNJr9ifxRFBGVjjbtGRqCRCJE6kfgAanAVAAtjr3cUsuC5bA",
  "key2": "3edq9A5mp2cQmYWrnfepYEHdivjAdBHQDh6dbN5Zetks7bTab4fpheC2edVffYVbYgGnewQ3GqRuH5LGHWeEdGZx",
  "key3": "dRDUUcpUwAfQcPj4TUXf21Lw3b1GBmFVpczyvYaAjc8PoJEJNX5ZKRPZBPUgHhGbQCYkCBwXc8wV3xoptt4vR6i",
  "key4": "oLQhRKNoh3jcx9qQK65CZ3FgJqLXPET7FtUEXYCtZ7ML1TPrKPiectv8hJFTDUjsq6cYgJ9UZxGnsEERdLNuQwZ",
  "key5": "5586tHt922At3ULgBKhAAeqwoMbAJpKRZy8ZYqSztfWgQBuh83y5p5iFBvFiMX7vfRdvDgNHUs7XvPL8neTFooQq",
  "key6": "vucywmFvRuov9pCqNdGjUTPh3Ysksg7eyJwhygUaPCyHKUNhU9Pgbq5aoXWPHEYuw8ptdshnMiX8wPWGxmjePnm",
  "key7": "3qSxFRmKGrmCKrktF25h74cCVdnuQzy1Nz4L2qnrJySwh9aqyUfw8wAq1pLiD4wTtWzbvYtXbVk8TdVYsGgtJ6jC",
  "key8": "5m8Mgwk2meqV8Rj5Du69fP2sPzFir2YDH1TJ79VevKrLqR9Ae5mGqZgTHWbEBmxkBXAcWS2beZorg6pT77Aqb5Xm",
  "key9": "58gviEJcrrJjvv6oxpbg4mtvBrLoEJ5vW98Lurk2G9Phq4gqHMm83r6oyYAKat6sRwjojGzWpTz9Qq1A95ayWYEW",
  "key10": "2SgQnC2sf4a29mgy8GhWETwzrhGYJhFesENqeTEYihzrUxDuU1dwYCzHjfwsSoPaoLQXWm7qCrsdMV3fxWotMMwq",
  "key11": "567fUXk3GPt5UogHfwYd5q451V5BDyQTDqBGeWqsLXHEFmBxVL1uV69pZUh1SEQJsAR8Snc7Cy3CqGcuMkPbdDL1",
  "key12": "gHXdHYAFw5n6jSMaZFXSgyuniRh3nFmywaFgtsgHkK2VbnukopkJqzY8snQ6yggK47Be1XmSCjJ6DYEn7b7SVbk",
  "key13": "38DTFJeA2TvgZGfyJLEnm8bNxew2HJk4YAMgvwpwCX65QbyqGP1BjcsKfB2sQmsBRvFU77KX7ajuHJyfjFp9MQS6",
  "key14": "5N7m4c1zwMghxB6CzFvvGrkP1AY2LkeAUndM9JBqkgMWkhreNWSHZRWMgxGAqzmeBpZF9D8wu7Szsaednboe9bLs",
  "key15": "th1HefRMJB3poQ1Qit1Mmjbufvz5r6P2s19KcUbBhK3b4VvLLwuh59AJaLSw715X67tAy4ZHoEgcYX5GszMdU8N",
  "key16": "5EVrg3mqUkF1yAvrF1acdbdGXeJLZLbSNNHhBYJaHyNKmBfKM59zqBLUeSN393dmc6KRbXreevGY8MEZVSMgn1ZK",
  "key17": "27AMLeCAqyVSTHk4NVZZnjPzbczQSVnD28cAFxHtY1RK49LU1B4Q9jUvYGtQ4jS1wCqNEZSaCnHeRFaFnGQdrFz8",
  "key18": "5yBbgXEK9MDCWkiPfeRQg9JiTZ42GeqXhzvjZhuFtBwxHXPwSoJt32h8P2tXBNyoFsLxTdF9WMsGPNg3Ez8JMtrD",
  "key19": "2wcQ6vAGvhpAJTyRcnbCeqyYavbioA62aiXW6wYWA7NnPVbBHQshREmEU59rDcvN4gZa1ySBoaXwGBH33WeDfsCQ",
  "key20": "347Q8Q3P3ALGa7mjYwGvKka2fRX4tcwNvx3VPPY68pMdZir9AqtYRCEsihMNuP5o6X4C3Up4XKyyLEDdyMfZzknu",
  "key21": "2SZ2R5jLcxYFN8Yp8Nf4kXo3YzGwKoEZRXYCNa8e4HR8raAa17FkR95rAHtj3PsBWqWCRtaym9BNrUcuwGKbgR9E",
  "key22": "4ewaWc253inxiNrTL6Ekuh9YTGS1CEPf6Taf2TdUKnTFJbkWaihqwinKBriAXykErwePCpbJLmDP9iyCkgvqnju2",
  "key23": "2DdMaRrrrVMFEVfX8Xgdp1vXgCuzuNZ8kS6NBvjrRBPemXjqbdkjHPRwtFaEGeL1WT2x1UwdypBn3e8DZRzptCjn",
  "key24": "5PebLLHpNQsBYkWEaGfG6132Btn61KfraEh5uwuVZU8HeMCfhaV3vCRGo8s53gGoxGAMgpRgs41pqN6qmt48RFQJ",
  "key25": "2CMUci6zoPrkrhW6KuNtmbSKdQ7v16tVvVRYMb3q3B8tzieijvehYHcKzYwcZdoiJYexsorVHBDDUMgy3NgzRhtr",
  "key26": "Nm313Vqv2tYdEay8oBdGzuJ6ksudJgvxqwP93PfiEyKbusJjykNZfGaFwghQUbE1itPdXjuxQfam7aFs5F61XFU",
  "key27": "3NznQQ2tUBYxcyXk17fSctUAvp9dE9pWPNujnVWbGtX75tmMpJXAbWFkpFFRshUDFAgvkVCnTX7qAKLzW7zoE81r"
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
