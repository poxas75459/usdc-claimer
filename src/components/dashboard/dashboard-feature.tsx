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
    "2khApgLuCEnxX3ZLhby1LUXy9MWZcE1aZRtdnKjh9LW27voYZAscdAmZkoSoptUVmipvuGHKQJS8f4RAqaj9QcLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EG9wwaAHFiA7aCroF5q8waiL7D4NByfWzU1zypE3dfhHm2C75roPWsiiVFuE1YLCrxptcVKiQgofZg3pEcpfTXN",
  "key1": "5ehDAiE1YjPcT8sPgf8fPL8M1zbRD9BLbDFTyzyNz5BA8d56uPhLBSc1xj55vJjC4puS7SmSni6t2MbR7QXBuraa",
  "key2": "3kGptMD36Ms7ALpWy7p8bQCHe7uLN3D5vjThw2QX8TjoVqsZ2CvYQMTCwx5Dt6zBXJgj5mfLvJkisU1VCAuZC5zq",
  "key3": "52wLdVNgQrot5si79i9dCA8SdNTrvixYpbSbhsVzQKw5ytCuWzCj17pM5AfN2uXTKkuvhwA5GSJXk3aeicuTwWWC",
  "key4": "2xQ1dUAwcVXPaqWAqY2ticv2g7x2UzQcPP7jtEHTJLF7o6VvJzvJM4KhA6Lgr8i2bnpZkMwuQn53hgjZAjuboPyK",
  "key5": "569dvqj4QYvsrwEsawH6dbTe8p73nGosNuAYdsqcXvei6RifFkMXC5FUjWCxRzfmkHZQH9hjurkd9FSMSX8fsFU4",
  "key6": "5N4N5sL71DNJSRYf668a9jc9nDqPH9UP8fxQWhv7UxvdN33TqYyUv3MbuZwrs5NikiihGpxJ644eHKuuMtb17aSn",
  "key7": "3RMp7caq663LbbDLwxzYDXi3SgNe452TE3Rhar6iCHrSJgBzR5B2A3wtNtisXWGCokybh4iJkaYKHqNYJW6aGCz5",
  "key8": "3hx9S8WVaduumMBKN4hp2bBNbpwtpPSKqfpo9N1RTGBPPERwtsuTELqNsx6QQp59evG5d4LZAZZTzNG5Jcq5xBC9",
  "key9": "2viTqd5Wr5qJou24b8Ljp9Lo1WU7CuiJY6cyfWi65ohaeuF8cv6aD37n1rjfdiCfNo5czn98hPexsb3uwV4cwVLq",
  "key10": "tQg6th2xEdXo2VcUNwDSKSEcP82feE4NapkU5T4eAqWy38ax5CY1XqRcYytAXqYe4YHr8WXLvAafx7keNEHVw6a",
  "key11": "41iAi3zHm113gMcqmC3UyKUxwe34RBHGeGJaVyRGUfno2Zyb2LZzZ3BUgNQp5yH1Zyu7M9RuwrYWJBapSD1Ld1Sa",
  "key12": "5KzHTZhFv2djRg7JURi2iyubU1VA3h31r8G5KZD5hrCVZyKgRneNBYYzdXYpyB3DX7ws1bgzuMqBii8TA6T5sUyV",
  "key13": "5EiM8N1HYSssx3sqtfJ2HrmuVN9mfCGA2418vJ7vQrHyCHj8YAyJHJoyS5PCwR56SY1T6jZm8EVbszGYR2WU7HVz",
  "key14": "5j22XXTeuVKFGA3voBczej5aLg83ysNCqdnau5D5DtcoNpn1pGiZ8x1Y3QWTRzjT2caRYV8KDURy8hTTTfKMEUqP",
  "key15": "4uQCHC4fdvkDoX3JUtQe1qZeP7LUKJb5ZqqW8jCjpW2hVzyyxwtQR9SFa5CbaufjPBjshtabYFkFeP1XJjKngyTf",
  "key16": "3ECzhwLks8VjzeCgdsjQR9PvdQdV6oJ5bYGBatgxMNw6XLq3gp4DWC11nTqBe2o5naFAeudkLFKVmuPNwLXz8N7j",
  "key17": "2RLNFzaCUwYWK98X3Fv4ugNJoiBj8SmKNhr9TQhjqJiy8Ka7pq1H7TMpn9mKfX8mdgs3pByhvXPXHb9W8APQp4na",
  "key18": "5cigqR2H7UtDt27ZXKJq74TeRswqcZahPdGvcYida4dZaA3qjKNEYis4hbEkPU3QBC7kBwMqV2gtfDh5RgZHbyKK",
  "key19": "83xnfTPNpthx59PkVrXpNCbZ83RzpQzbBVi3Azuqx4zBnhcNvPPDZm1X7U9ASuBzNADjUsEuEG2gRScTPJaZF3w",
  "key20": "2rmqngLbu6F7dGQptGU216WZZLGwNXEwtCUJshkgyqThEzCVC8o5JrfrRRq9VdCc9ZaSePNvwXcsyhFCytrKMrxq",
  "key21": "2xew4Qz56kuiEA6Bdb8WzoUqiM68iyeZZyKqx7jvvBLVWkfdU11BzGRvhdDWJuW9FjZTpMC6QRFM9vFVUg1nH8vQ",
  "key22": "5by8qPP3xvBEAPqN6zb1vbvrubZREj5TYRdYrMRK6mnju36hfFN5WVVggK3nKhhDgfvf7ijXDaVSKRV53dX7W9eb",
  "key23": "fK4p5KpBaVgTQzW5DiaEogNSodULy3FKT4U7BznWKBqVXtZGfEPfZSm1ipn4Lcbb9P71kJMcGswy2csnqAGfRtT",
  "key24": "2wa6ATQJWmyA8T2s3VjmGgWm381tYef1Hckmj5k8vk3xQ66Z9HUx5SUQKFHuUTzvDYRcd4wB1wooXi4sWW6TpLc5",
  "key25": "315AssCUvNJruFMJ7R3sr2Abck7WV2bHNGMbEYAE4f3CD82YqpR2kNT3Lrso7S2qBowtqDHwnL6b9SP788K5Wy8v",
  "key26": "4qqubo2Y3Vz9ridJRRQkMTZ8wYdCGF9FH1SQRJYko62agCTMg8WrkK8CwMJEixNCD5pep9CDPn851cuFAhX2RBhw",
  "key27": "231j2667WtrUgH7crwE4RdqgyV6j9WZGdtVdNz4gVBmZRwB3X44foGTHyJr5it41RmKC9iyBHcXuu6nvxshdtss3",
  "key28": "5DftB2xeDfETt5rL7vsku7FmKmkStrWJw3orLAVKRGGgXVMVGs4Rw6Z2QY1cuoqoin8dZhbPEXchFcc1VGqeA8PW",
  "key29": "4jNNkXcSyyo1B7k9DwpqCK6n6T9vH3seL4Xd7wT1YuF5Uixk8Z6Jd5CstoDMHpu7BFdEnGHc9i8Z59gSpLZFdZkr",
  "key30": "43uBbrxRCPBdBbQWRRbAXtv1QLQ1n4du4ibaf2z5Pk4HR7ZSAaX3cJJHbN8p8v23wfvTVjChabaUXbfU9wXrUAcu",
  "key31": "4aNgqy7mZhjPN8o5cKHP6CnTN6vEPnGAeMXUhvznumgwJMRHrMFgJBZ2fcmNtJPgKE1EH6Vvav8yd8bfJtfB4kKi",
  "key32": "28VNods3nPrPjwsVAH8cECKb6tnzoQNPrGMMWSHBxSjr7X8o9R1LvCj39SjzAPj7Qd9dH73cqWWAdQ4xkywfRbP6",
  "key33": "Gu5eAJKQRKCdetRmhzq2ULmXJUg647qAH2wnbD5L8Hkh99W7EM1PfGEML2dcxXNhopM5YaUHUqtJCUiQ2UjLjRB"
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
