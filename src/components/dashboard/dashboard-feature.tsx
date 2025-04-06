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
    "5vbT94pMeKZofo72irBDgj5X5BUpajYyTXjGszbXpMSwq9pM6HkB7TXm9yh2tbUu1pNAT7XzzS7hGvu3z9kZE1yv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CmMDBsSPiHmcN7RGZpYTG8m9GMvKffPvAjgZJja4HSxambdGfo5q2NiG3GMmEbCzuWTmRxWRT6BeNkNykJboHgs",
  "key1": "2hgZCMAT84ochpwDKgFT6qCEnXWuA5Xd29DcqYEERZ95YtMswkzWiweaQJ2fzuWe3ZFWtoLHhdFqihzZcJCF3Cfc",
  "key2": "36ryt57aZehYP2rCYfrpdVoZAUC2N7JHdQdecPnkMz2dpxz72qi6RE12P5h2HPk1j72NHdFBfH4gj8ksi4FFAsoy",
  "key3": "2sWr8UU7q3ZprgzaggT2bLdTfKXEpHGcckHDk3gE5UCZKYU2Bvv35hzu2jJJSaYZ7ESFzo97fLsakwegHmGa9oeT",
  "key4": "243PHuELvugkvWdbgzs3C7WJZp2RoxAaTZ9AF2uCK9B2MFap5QLMKBD3NBSNqyfpCzgrJx2j3rKi2jHfcSAm8gDY",
  "key5": "61AaKBzMhBZGXdvfNK2XFZVyXCj7dNhd3ewVYbhcgSr66njqioBujmygs1S4DpFFVDGLNxSf9dGQ3gSaLz5wfT9",
  "key6": "4ZDKfBRy53MA3FW1eYMGtVcTcFFhcFNjo8sVDmNHhMiq49uEkP7KGyVzpd7K3HbkXndfSkH1iQFyJ3RHfYaPFfgA",
  "key7": "52wnTb8Bb5BE3s8nmQv6ArsCiXNZMWmeyKWpjnkni3FH1nspE81doyfa8gvroWidf1Y9zCzbXioPXKxsbbmnnFDF",
  "key8": "3McYP7P5XrZLLbQVq5MuQ8Emb86sWMDc3QN86hmmPhaQdCTm5ZishiVFUndGRKJzeTUDEVjWNdPPT8m4Xd3pofKo",
  "key9": "4N7EMMXc96Xfq6sqaYJ1UBcZDsABJ6p9rYUwoh8vGdVtxVioDtdWwQZqBhRji9T6Bdtu2J9JUUDYJF7BSo2R8J64",
  "key10": "25NgPC6K4hyvz3GDEUWFLzpMkaBuVcMy1mwPshfyqjezKAe4w5LubPVKVLR5wp9CTsEuQv1sgXtr4dCze5KzyhTs",
  "key11": "3Y1b4EGxSb5Kke9J15YXm4Hk2hTqw6w9BWs8wn9vFEb33KcNC7neMMRnMi7qeZ9F4JKqBKvw4iub8FnkVyNEr6YN",
  "key12": "2QFDoh8KqWKDkAqNf74uPGFrdhfkxSZdhbyyi92zfj7WGBfUmYevmCr8AjSPmkhFZtrRZHfRsTq818nGQF8nUghS",
  "key13": "nB2Q1uH9qNZU5JFuVwDaoia2gqxeu6SbyUbeCABKg8qmn998cuPoC4U5gsJFw7LKDbcd5P1MuK858xvKcVTou4s",
  "key14": "532XCkmdWExVSVMX9b75jo9y1Aif2R9B5RSfiPpDwtAmyMz32uFMHnJvAh2q1wG959TpxJvRSD1gf4irAqab5RSB",
  "key15": "3bkbkde8EMEr1nq69pzaBxpcuYbPQbZdVspntCeG8aVyrnJRNxp8HJ8VYkdNAkQo4sbbHHUPdtkgUSqjYjLbx5Kh",
  "key16": "3BHM6maPmSkZPwCDfdJRY4GvTqdkwoCrG3baXD1DRQARUzZ7oQK7VSHhiG9SDiDif6mhLj1iZjQrcJEYpannYd3S",
  "key17": "4dWuiLEYrtXCgzGaW6wBvhiyHij1JopEQEQ6m63DgW1g1Mpg3Pg6w6xKM4QSHkVxW3kUqiSEn7ZqJS4WnMFw1qgd",
  "key18": "4VghueqjCg6SZgYNmT1jv4Zm2bfeRafHmFAhTKGoSAZi7JhVLaLNCJCw8hkET5ugCRDeW3AZeXSpiJT89wjuvaqW",
  "key19": "5hLcAgMTmpL3RVjY6ZUxcFmNSmkNGUDyDg9gS5aEhQQkJGbcYnCUbksTbzRnCaw9EfyfmgjwMdqXhDFRfqkUE5Xc",
  "key20": "48miqVQFrskDDekqijGEwfp2tkC5JxpdRr38RWBGzvX92SwKhRo22EwRga8wL8CbTjQgauGzbmYGWbPVDuk7Jxsb",
  "key21": "2CwzcmWPcQFKXcKQpyFibsRPhwu385mtDFDaz9kwxVr1sZ8g2LtmSagLhbUGMaLFvtaypWkn8ck4HQQ86tyZErwb",
  "key22": "3GrMrhFXbNkjViQqp9uEaGKwCGhCHyhgzSjY7rhJzrGJUJMA4YsMajXR99SBu6ahKGgmnKuEWcWQt9aYUDTTkEo2",
  "key23": "4FUvS819o9PSCMTWHfT2HEQEim91QX8pkvRMYKpo3xuy1jrfaCQj8b28PJXAVV97E3JjYfg25zLaKQM8VTAEwVDo",
  "key24": "5u3eKp8PbcccCSQtjCKGAqwmvnBE2B5MXbM1xSR75hskiD4rR9bjc3sfFoGnw5YutJWwtFRRCwq4sAHknVKFjQeK",
  "key25": "3iW6fowvVjcTz5brJdKHgPmY12BvLkxm1u2851ihCsT9YUyZNodYqb6gi4TMggLZAVbxPgTyZpNewqJfLJBVNSdm",
  "key26": "21fxJop9JsLPQhT8kjSrL4atmy4TCVbwi6TbCZ26ZB9WJbrK7TdytBvnb6Kg3JuHXz2NjQgJvtToUUiqK8gTg5Ht",
  "key27": "G6zor6TtckJWT4PAbm3seozuRArTR1kCNAZznLLHFtyqiYTnxi7PfJomJ3StR4HzNuPbpfcEc97HjDqj1ETy1xT",
  "key28": "4QTDXCN2NAPhA7KqNea4z3qAAeMXnbCRY5nqp8FFqTkawPbMYBZXNhipRbupMzM95rbCjhYLDTetE3wzoCFbJvpZ",
  "key29": "4V9Btd3pukd2SjgZtWhXyQDtEbiHB2VxqYzV8t8AKPH5wsag9fjFiq4c3w8Pw2ttKi5nef6RGwErKDpJwUgmeeFt",
  "key30": "2wModVYZWr3MoSmzTVpg7iJq3g5rw1ty7ceunH6iVoHo7epL7v6axaLEsp574wxWqZZHxaxsGDrH65sziRvY5gSc",
  "key31": "33nNXNBk9KQVNS2Kr23eUZ8AY74ePxeMW5BzJVZSFaFvaAGn18yhWMGQ6u8AKJLMwMb3Ma329h1szjADxBXrSaR4",
  "key32": "2N5QggLnsFGaMGxQRbGP1paFiuVKStZTEbXBU7M2MT4ChMTqPnr7Zk6s57SHrYv3ccJxms4X6qQNaZyJJNqzKeGc",
  "key33": "5E3W6z3M46DoCsvaJppznwN2qZLgW6sobacQLgPLkmMeEdRnTczLmhdXinVxPoc5juxmrd6ERm5sbMJFfTN3xmt",
  "key34": "31C8mveZWqYxTQKurAnwFB4u5sDVXneKJJfB9edvyL4ixX8FkBUGWRC6BsmccdmWDJJrZ4GEthESEuSGmQENcTyY",
  "key35": "e8b7pSkQGJsk9xEGmoY44rChwmsRZYjpw49pUtmU9qKLFVdt5dHUPoxRViyUTiM9uQXYGpQXWM1M6wG3HTpn3x4",
  "key36": "4Vf3KzLZxMXfCx7oPb86XQxPVUZ3kitDsqkgV9uKgNE2X9jHpjFRKcBrKB3QRikBmfQCu1dqf8vBPX3fYkPfF16h",
  "key37": "4fKDXG9FcBU2hgQUyRamRnHYH7wjA8dPcWfZMASsmkdBJjzGDt428jqRJaTxebG4EnMdC9wBtRrQGNkLeVfoiDy6",
  "key38": "3LYBJi2Zq1yUKXSjtEv7Q6x7pptYhBprurYEpegsmq9hhwMkhtW5MdFhHu1ggNmAWYZ7h2WbYrAEeHSh9inyqpSw",
  "key39": "GqrBZjKtJgcRaRYpEe5Pib12qFRKvQFqraPNeiD2YeVHgU1d5kt751qQFsxVwgo1sz2KCuXnzN9tGhmVYEYjhW4"
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
