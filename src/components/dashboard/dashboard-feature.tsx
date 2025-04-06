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
    "41q9szdymYSennA2FStxSqLhoBjt3ECKewVGvGirDDEgAurVEbZmhAgMJa5Wa6MSK3rdNawhvmbxNRYsDLATMfaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NoSbSquZVrxQyRX4ETcVvsHBCpf4afHteZNZRsVFWcZgQZC2HgmT5NZQvrEW4hSHXENBYqKfD39HXejVXZU9HFS",
  "key1": "4ixx57Aq4WKXuRizPfx4yvAfmRCxrrGLCyS9vrpJUDFWaezYVWqhCgwS85ug9nGYQvNGNCygBd3aFCvUZpwQ1Vbf",
  "key2": "39MPcGj74CZRnK6SBCUwRLAdtcrJc5eFfW7ksab8VCF9qixR431VpSfFr6HCZANinv2WfxHfxwW6BjxWhcA4Xtbu",
  "key3": "moJwztenX75SmhoJn4R2xKJ9CdBJtXsffjLHdoTjhvGvQb7CH676Yo3P5BEPTvDLUAhdE7fTMKJDgrZaeACBMqJ",
  "key4": "5dHJ2HrcHEmC4xCjoAhEeKyNTKXwEgM5ohDrZoB1SnNRhBNgj52W2sxjcHJPuXY71jNpbG2TMdMZttE4ZMHvDQkh",
  "key5": "3htP8LeqD47dHFqRbiE2QGuK84HvpFvg1Fmu9MAw2E7q9tFJqdRe5KNpLUtywERwDD69BPsRre9SGxjdc48hWyG7",
  "key6": "5Lk6AC1ZRAWEqGoqfTga2DrHRgy1i1Xp3boeSLmLNFKAFadFTR8V84RcKVM4VKr6xRzJSp7q479Kz9s2gJm1QnxV",
  "key7": "3Bp9SdVKmZZexZ1gk4yeZGwLxiTfHv9aLCyDBw7iFq2nJKTiyQQLzPVqtmDyNiMUt5zLZwVfz3LmVbn81SzueHx5",
  "key8": "3yU2SfDBwQHY1KMfqkTHZVryG8AEPK51fHe86uEuR6op9TAat7QeH8zLvDPh9Sx1SExHk3k4qiqSkzEPZy5mJGWR",
  "key9": "52UU8os8sEZcQ7C1cTY5Cc7oGqNjrK9WtKCRyBEVxieDsCguLyU9EeTnKPWevMsnc8U8pB5CEDcuGuYuyYiJJjcU",
  "key10": "51BgEgsMngV7tGKcyhmgWxPrfWHTXAU77nW8NukuNQq34RW7AYwKE2BnWiK8c19QZcN7QcN3Dkxf9kLLDh2Gu6Ev",
  "key11": "5XjzEYLsd6L1JyTQ4L1CBipoVhgby3vXGvYDGANGQufoxRKh2TEMDWfh2nQMXYMARE2PSnbzYRU8UCpPnwPxEJhG",
  "key12": "3MMAdwC343NnxbFs63P77uE5KTYqNdtFM9a6z7CuVYNcMr1czjBt2mji9ZtZdtTr7DFxDLitpFW5Fozy35FL29VD",
  "key13": "4s2qLGYMqPg6LiV8kgzhcDTLKNXa8qrrzfxzFr2f1eP4o1biagNzLdB4STF2xQZneHjTXg7cqRecZa5dEGjyE2yQ",
  "key14": "53rQTEoyucA3pT8WsmDWve4nNxo15DbNJoUQ2eFQ9kW4ytdpd2XbWUph7REZQfzusbSoQJinpZZAg8UAhF4HF6AV",
  "key15": "2KHgm1nc2LaGuHL3g2eWeQDucFHdVcLGneFsmooiU8xqDneEroC2QwAZBCUuiXiaQjnDgH9RUebDJqrfZjfw4ghk",
  "key16": "5Sh6CoyRPh4cKXqCpkL5wRTaExcWomAjJFn9KhB8HJjMUJCugJzna7HiXT82vSq6vgEm8LrrrpHewjUWtpbnYdSe",
  "key17": "62muDwVnBGwu23L3EBTKfp8qxmiLRbjmVCncYPsxuvVyCeuHZboE2zyjXMGVM8qvvW4cMyzyuvjg8ekv5j3wdrtP",
  "key18": "2UqobSCDwW4kz9MKvJcfMQk5ZttGdeoyErYgcqZpCBv2QuuWJuqoz5Xf4stk7K5UTMcZHwDRDv7AnYXyUY4bCqGn",
  "key19": "Zttkgsyz3yTdV4pwC4cymBFwhguJgLWk3vWrqBpp3grbEpFbFpDLQYRsGLXaDe1DkxMuyQ81UufvUxdUB9DgCty",
  "key20": "2QQGHPjzq2MvbuzJr2eX9C5GGuUCdMnRYDQcTJyBbzs8vGFnCkfhZfTq92F3uokXSPJfQoGs2bYQKLgrmtBqvHPc",
  "key21": "3U2XXjxzGdK5Mk95XZfsogBb4g9c9oMHcfBf8rmhr5gHMqvZPoM6JHz1Rm6qkP142YydjivS2hPq56w9ZQS4kaTx",
  "key22": "Px7ReTAsJVkC5QrKQnjdLqHVE9Nr8zhHwXxb4PXpzAywSmhXfeZdD1QL4YGxBozC96gQVXynry8EsAC4gPNFBoW",
  "key23": "5XgxyVHSxb9dFhQ1MNgVjFta58p89FKzXJA8JYUJggmKRncRNcT5zRHg8ufRpzXn7WgCEZGFGaSRuQYUFrzvht3R",
  "key24": "2EVU8mmCRK9qHKji4VksYdTrdq8FHrT5Gx3fzVpaQNtnGEYSXPVZQbBCdA6QCxU8PEjqM5B9JL4agLUFBDk3KEUp",
  "key25": "NGGG9oCYKu6sZjVc1MKASiFFEo6MPSzR6BgBGdQX3taH5FB7iC1Cx5qSR5Y5K9bqBtbsDDELHW6p6Cn8mYfKeY4",
  "key26": "3hcsTc6pz6aTLLq31LTvKYxSXjn69ryLDg4gfaykkv6e3Z5SnRm8XPXXbjmo3Myt9FXbF6EobZYHdoPtQBAJd9ZD",
  "key27": "3KgqfZ2uAdgrdZNZ68CqqtJ5dBMNTPUT2UhtvfS6ddpYggV8v4JiqyDmQhei6x2bsz2vjdQKRmFo3uo27AtJQ97A",
  "key28": "dTy3F7XSR82evSyE1Gj6jCtZJoVQwmZGrgmD6JzitM9hBPkKW6Hr8wz4YMrEyGyMYTLKRuHKDVNymjREJYdNucH",
  "key29": "3mxMADfornCcupRiLC1YxzGzWpXruiRH6m2uwL9w8ve2vXPeMPhtAPs7JBdyGCmc9bAJS6iDTzbMwFRroBTLF8ay",
  "key30": "2o45mybpvfqsnLyPkq85bMdfbcSWy2ZMERzxY6dshKP32tNmjAURhmRLrTV1rXkQMttujBzinoqd6pWLpMfLQ8b6",
  "key31": "2g5jABozzMjTArGzZ8fvXQqde2Uj4bEopwiqDL5A5yB4ghWYZPVXqRzZ5J1EG5hAQdcZCRk9CbWZjhoiXFwWWJiG",
  "key32": "2dCDSGxSQFLNBHdQXmyV1eo8vXvnzjXpdi32Sydso4U4a3Cw4zZf4XAvt22kb6sTwm71Y26TN6J7L5iW8mBRQUzG",
  "key33": "3LSvokoVWUr61ngh77oJLqRTmQTMdVMeAXZkqQYxJSvC8VBSosk4KjmZLUr8tgj5pcZJ2v7ochVu3uDHydc3JjNS"
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
