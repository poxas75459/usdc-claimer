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
    "4Zv1dsYopo5xxfPDPD2iuvb96GMd5ixCoBoiqCnsnQpxfxWt1zAQJHFjgyNU6mV1C99MKzyFn3iHQdQGWoxcUFzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gyq1ZbAPMxSQamUNiWEFft26mJ1tVdiZDvxs9BUH8hHVnjvQwtbGaA8PZiDMmaitzAX3kUFaP7bnTkueCJoBJJZ",
  "key1": "4826xX6QxLRLabEcUqPLxb8x7MZCE9mRw3w5nhfdJUz6NUbkyVfXFCiwDdLhhNAWP3tRZa7oeRiytsSkuAgyivbs",
  "key2": "5cB4cNNxYu1fETwUEnc4NqZrRkmg8ckvStENwDfMLvN1XzuLa6zftKnEB8aK2acTzq4138pP8epynaiXe8wagkEh",
  "key3": "3esAx9hdEte7R3xnCXnroGHHPAw2C8ruvWQkA4FCoWUzGFX3orME8gUSjBwjXMTrNuaAzcQ6wpJEH2qu29APfSpj",
  "key4": "4bvs7AF6pQ1qxnCTdkkxejfPcKJdAFXckCS7eP6VUtAecBPWqJFxZaCVNoBGnK4kMVkm2JBmE6UXrwLqnUp7fmdr",
  "key5": "4ZeQ6iSKFkY5B7CNsVHXsF4gWwv1W3eH4zUA3UPM4XPoxzD4jJuEkbPDV9X287d114mceRfRRb2qGD9GB3vUgC88",
  "key6": "55wW8jSuytgsh2xNuG4xR3K1y2ZAiTpVk89ruBQZiuy8EmNY2USpptoKidy8XHLNuVZE6uPLvSDM6ukk3JEucagB",
  "key7": "3c2MKdTSV4rnLcytpTfEcmtHa786xkchwHd4qjmovpJuMh9StmNUUCEHhTAz4y4GEjZx5nDEyx2sRA5R5pneJYY2",
  "key8": "MAgBH3PvLd1SKe5z1kMHrX9847GZWrSZBgA8qNyC7znxy124V1f5XfS6REwHpfPgYFqj3h8d2NJQPrJ2t8YXTFx",
  "key9": "2HU5pWeontam6eFPWKUWw51TKEefTmkXfoi5yWVUZb13Qf2o9kjo95rV38898Y8Vb4kFjkjPofUdyo1TTabiAaEr",
  "key10": "2jvJQkqCSbBbVqDKrGiBemjjYShFE8k9LdorBJKij7zXMWPxQ37oKJ1ZoDvezY1ZU9XTZW9atjacWvDyUnL5MRcw",
  "key11": "4oivTF3XohytA37XJAaLw2LmGYsTjyEqwVNZibC6grtYpPq35dZnarrZ3L7u5YgYJCqtQ9r1BFeNwM14QUENWogt",
  "key12": "aDXdNAa6wamoqnuLn1eX2W7MLXVbLQHP8dnaFeNN59uU7ujVqNNhrVLYEMGjz9SGuQkLHnCryG6kLSvTPwnESHJ",
  "key13": "2Ruhz6kgFUKLgAVv8KskPF6ukXquxjmppZ1CL9WyUphwmJL96jBnSryQQhhZJ7jecakgMNcmivXnrJoLUqTMutMc",
  "key14": "3sZaWUKPPyNwzF3AVM8BAccBrWQvQAp4guiWMgD2SGWeBKwEuZVveJ8uEZvnurUK32R2wEep32UYuA249hRqNHiX",
  "key15": "Fj8ppYNg7Cqv4nnyNM5mEH8kmtHqXw4VqAGZ6aXmTa6W2K1D6PPze6mfCKsEbG493vKKWkWBC1rznVBz2sN8xSF",
  "key16": "5YET3RguFaSBP1hayF9ABAbgs8hsLfyj31hYB7RrBW3nSrshvLn1nuXJ48tGTy6mYPJeDvhceNet8AuVBZTsAWjT",
  "key17": "2JgT8Hwu23DKrLAuNiYGR8uYY6EJYJDwERfBUWexsrdewdtskQVytqSsYR7fjZrHdMfonfhVKAJMZHomRGRBp7KK",
  "key18": "4NT3PFvThrc4yi4ApvtL5ULLX3315TtMEE87grFcZiY6NooWTvcykm25ruESaR3ExKoTVHQ9jnycCwwA3TMELAVj",
  "key19": "251Tjk3EKcSoPSpaYNTLd1nLo9JD99P8rDRow66M7jszUwkJmanFxoU9Bnz7ULk9ZPYnD99x6fxMskeQfBFhg59s",
  "key20": "3pgxtYkTjRaHLZH2ibrZndauvf3CX5izzs4QNzUWYXz6s2YteaDwFmn8Qv7vaMa6JDuBcY7szW22takrE2pH1kqi",
  "key21": "5rPpmB2ejRC9H9xdcQbWWktdN5K2ZbQfMHpfkuiF6PAfq4AAZ4dB32UVaqvNTeQ9detEAWrix1oJK7eehDvTaNrP",
  "key22": "515eMGrL2PZM7VqV6UemeRzPwRn1wfc7ihuKX8m8Les29spMEaYyuSsemduTMe5D2gEFEN1u84izefR5EBd4aKZL",
  "key23": "2qCGpy1BmWKHyjncrTeNkqPaf8pnZapNXYVuSti3aFGaogJRr5jkY1XnSk4E9uBB6V3VroKw6jeEWLdKUzaraH7C",
  "key24": "2DjtgVVxPjnHifbecyGG2VfQER2k5GAoEJqPe1czBrKpBPd7qB6rAuA3cEMspV3bZaUyQvobQwzn5rWPZc6wAxXC",
  "key25": "3vVNDGP1qCGCVr6pmCirqneVdFe9e63rtiYQQbjVXnjaYvPtLM4WCmmpuDQnRmTvXNz6WotoJ1giH4XzQQx9LLQ8",
  "key26": "4giQkRqSDansaDTsD89nRcskdXRp8qeN8nyjKwoquj6hzbDUG6P6Mf74ceEfVh5zTo5Yyat8saBvSHSP47BPDNwA",
  "key27": "4HHLcC3RT4jcogHiCLBjXGcvTUGBvj7CfFQNcTzZPjY7PXJeKbJ1yba2GqkAhiEqsx83AugzZTAYNF6iGnP2p9Np",
  "key28": "2LbA9RSwWTBaZuw4Xy6zPJAA9RgaSgD2uYGzLndeJeMdo6vSX1v2n7YE11Fq9728Ltvwz7b9RpDwcPRarDYayV8F",
  "key29": "3Mr9HSMpcc5gGFXFBcArmDvHnn3MvE61BTPm8SrGLdQKwkha6LExMhxiXLyaAJfvs7s6MrNfxALfZkJjPQRpKvDe",
  "key30": "43Ftq9HhLj9p9RyPhyaX1zyhn7wZhFqiQeepucPtEfDdqvmqeTLS3DTycxeEhFbGB4xLwNtiCW4gxGU81iTuWWjt",
  "key31": "4pn9sqpwoSrP4PNoXTVKHxk1KCLsyRBrgFmbA4pQnbAAfYwRRk1AsAFfU9PPEDmkqndwCa54yuzF7oBC6XuZybwj",
  "key32": "5HmJ16hvuGHbnbvHi9xRsRjyJi1N4PUvybZ65eU4Ps4D8ynK8PDLXBWt2vrxFoeTfGe9NBdNz2svHYRyfvxdn9EQ",
  "key33": "5M5sqKdp2i3jBsLQ3E3VLULzyE8dvtmdJWLDnYdfPY7Sc8zTBAv6BkcsAcK1vZawyVv6XbhysUPht4DX1duBZ14Z",
  "key34": "5Kn9j4PZRgEWoYQvcYAbdmsx3ivF8D3Xs3dusDVJJchT9MAvSHHKFJ5Mi5Vqg5r92PVqm8p33vgF2oVtRteuvHgR",
  "key35": "5MrCuJtidHJVtAQrn4x11erHwn5jTpo1FMhP6sxujxFh8vgbK9CQArfoHsWZc7ekQfbtrhHVhp8MXjaBCQBHLb3k",
  "key36": "66JazUuosXV8gY8vsKFsZXf2dQuyWnDcanKoSLdLDruP9eLuPVX9P1ALj3hQd6KpLTVNkxpFo5AijdrKCJ6b7f9w",
  "key37": "5zXFqkPZTP3VqBArZZUTGAsvvQgQ4CgAXHvWxQN8P2D24Mz99CYr8Cjt5qvPBR8x1uazAWA7PXR5E4PwtB8eAwZc",
  "key38": "qRYZtkn5uJCdiC6FNEjRr2ctnru8TG8MvQwCAuh8nCnSAaiU8a29xKTR9r158AZLQCYiZkj42MQQbdmWvw1rBV9",
  "key39": "43oadL1CCppp3P2kmN4inTJgnsEsiZR51SFnUNh3uFDmTmQ3X9JDgW46fUaU1WzA4zHksJyonVNTX9g8CeHV7bHV"
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
