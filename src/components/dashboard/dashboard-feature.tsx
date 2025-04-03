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
    "65VqzwJkrVrNAsAkUyi7mCBvGwZogM9YVjPbe9AANfbWwvYrZHuq144HgShYo5xA8s9szVLHyb5WvMDJMWvV9572"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24zQRT4UDcd2o5SBygneYifBejB767BUuhBGhArZxDVk8yf5tiee6kaF2hLrytknY5VoKpLos9v9YYGX37x9T2Ha",
  "key1": "4izZszdR7wNnGHXJfPn5quUqKpDkYyQENpAfw8bkK97b3GzTkTucewYfkngqLi4uP2bEeyzzEa9PNeKV1T4FB3qY",
  "key2": "PPVGA9wZCwogPoCZTuWEz7B4xd5EMpZjo2Wjjfuis542o6wb29e1wuCVRKECmUTY6PGmH839RBf6Y1tzjn6auEn",
  "key3": "HQCqicKyt1Ed5KFGYE3Ekh38NGGu9P8JWpp1gjPnaXNEk8mV3yjHunNnQXqfmqXJh9dq9maQTLAmxusoyR9iHL8",
  "key4": "5PRf4RC4n22objXRk2w1xLTT1qhwynAwj62GjeupU8AQMdwieqJ4JGXq3Lojrq6qTALnFwHWmBFTK1TLxL2eXnrQ",
  "key5": "xfor1eNxnZQbisdih7n6WRTWYLc35VpkaT5P7SeovnkkBBz4263ZKkygDr6PAbjaxce6VHf4QpR1NUhREjsqzQS",
  "key6": "5DaPuq3tY1HuaFV91hadjQ9H5hSz15q8P9uLuonWMVzT1trpLhkF1ZLjqBhdfVnM38mhweRebZGoL7PiK4dywgSY",
  "key7": "4g6vyMdA9DcvJK21UCgEyF6WPGyssDGet87z1wHJEWb987KQGqnYCjyCntUY7WHuj2CYncxF7oTjnRJMLYe572Kt",
  "key8": "3QNLJtQWMCR8q9yX9oPYc47W1zVf3XuEcWwZD9kbuZmaPbGrr1igQhuU2K7ELjd4NrpMAJ1PpJ9prVEF9AFnXZDC",
  "key9": "66CWcx9sYR25UTmFRRf98KNBc5biYtj7x1N48EbqSVLLEu4vkqPVHeFyPoa5DYqqHuEFdKJSNHub7fjuWsEcquud",
  "key10": "anYL4KRS5k3A4f7CGQFoVqY6GtcN3ffkaoN5HSEm2XwciGtLjDndVGH8diq5nUs15nCgk8z6ZaTDcv6WtAg2YJe",
  "key11": "Y15SUo5s6PubmfoUKkzmawrxFjz3bYz8kfZygc725pjdXSbDkLRHqajd4dhS8qBWp1UR2RSZLUekaGaDnwaLcxz",
  "key12": "3P9Czywyu84ctCka8oxMZyqptp9N7qitaHaGQ8TdGk4HtT8FDQgeEDyX1s39bGTsuP8uMXpRwEYhSFGKMkYFGXfa",
  "key13": "55EprH7e1qdHmtXKHr57AyYLXjcbhAiLu12t5Z5EoASdX5J41Gun35qrfeh8JVKiGuoR6CEgZog4UmnfvFmsKLh8",
  "key14": "5A1iXCmdrCm4m1kVvTiP5VBqi5MvQu1c3pqRtGFKNDkch2haNeRRWp74pDuytksSQNrQrtZRbyA1mX81rnd6imhb",
  "key15": "4ragsZa53PmJwX8pVRwMamCUXSmPjWjjBGHNMxBQCDDySdCFodpGkzgED8ZwNxMkm9wrnX7exWDRbtHfc37JLi9m",
  "key16": "29b8QcJ8q9N7neX24ugwEERwJkE6TDSQPtdqwbVCSp7JNus4r5vNih5nStckdwX8hD318VYwNsYe9dsPpEHjZtQ6",
  "key17": "2ggEjJdNjuiUB85ojpeDCsjan4cRWtA4wbSviZQvJt7U9ktB8VuHeCcrsQgGJDnex1PgamQDWE9NkrifNjZieGcS",
  "key18": "2JdFzW7HW2LB3fcSaSzFyh7qTbZFWCua1A9Sp7DNjfZuhCyZNvntBwRYjvcwqJ27F1m5M79cizfjR7nWKiWSn6UE",
  "key19": "2hpFJZFT3GA3Ab9R2j3fPpfa2rjssxGAZ8TzFp4aJ9eCMwjNdGcKpvaPRWBMNRZXUXfALp4KpryFrXwc7uRckU76",
  "key20": "3u3u3x5LfdZUhGcv8xxbUw6fYB2kXtkfYR4FyuwEP4hz477A5kMK2bpX7bQzz1Rw6HzVJPF7reCXJpX9GwXpvjbT",
  "key21": "2KUJHFaqn9MjGW1uH4JP5yPENFi1vWbeAD2ptSgTteY1w7ZtMPJqg7K1tWhxGnug8ou6ja5Tve1kqJ91Z6EkbJCm",
  "key22": "4GRteouLpwvp2fHqjo3Awphfgp5DkqfAogn8VgnEHEtZm4XgEr8RxsX2gtMo2ZVQVt6MCCxLVw3MNmMKMZ4VvQnz",
  "key23": "4spatLxH1jnRwmYrSpRYRuey8J3mDVEY3V9SfHR9Zq7eRJdpVpua1heZx2bXBsQNEN1qMxLCYgeQK92ohQETRxAE",
  "key24": "eq1nikES97sEFLMbrDH9RLQuMhsCLuUvvpDh9wiXeY9Hp7LxSTC9GEWpkvzjqzR5t13f7nZu1Bkou9kuPuwNnpD",
  "key25": "4CcsN7dk3EDtREdksxW5sXJMz6eMatZraJS5uJZi51Z11movFMtDCUtaMF4BLDAnJ8HCLhfoyFwMPoyr6QiBpPyN",
  "key26": "3EdbAi5QYp3bQM5iAzEXCVaHGxdYt8rUni1UESzsJn35YxK6CzYi3PY7z92gLcNhtbxj5RR8BmAQBjBXjJVPBTTL",
  "key27": "27Et1vf3QaCno3SyKjUvyCoan23JagPcQrEnE965rKcYtisKmPst9TyJzheK6JvcTPAgAriJFdQqroVacxav8cD4",
  "key28": "46bsErc5fGjHeUhqfaf6QjtkkgJs2Q6Hi2TprVbA9yhLcUPwSk6i6w7EtQXftrNqDa2rCHVd5faA52ncvPuuR2y2",
  "key29": "66PWpkUKzRppf7z95xmf5zoZwgpaiv7hD33ff9TBaCyJMWMLb5Yp1rqqEpWPaKbu6j5KikiuWqNrtjhEKKeMnoKm",
  "key30": "536xEQ5cmTgCKTYY8d9Y1nczLdNe8njvBFGBCV9PNc7Ube72MTMrBAukHCBV81AaH8wXfVBAmdtpt5CgDkcqRnPG",
  "key31": "5D3on8WKZoq4MbDptwWE4K2UzwfWNMgYX6DdBbNgzEx7sGDrV56yTmNSSEcaRaxG9SADUsx6vqZBWNoUu3gyqidM",
  "key32": "3GpGSmdW7VuacwfFHvsiE2YhzgMPVmJhaagjijgCnWKxdAnS1kDrnoJdtHuTZndAeVXrPDAqNSwBcrADwvTfj6pd",
  "key33": "2ujMxTUXpfdGVRhzxH5D9SjimCkj6AFSNpCXqeYZHjvdT816eVTqaTXCvfQysGeFRMKXwB9u1qEy4CKRSRdp2A7V",
  "key34": "5Jwn4k1P4XRbrFTZ3DZo9Yx3mpqDpkbwEXqun2AjT8SJjpixnzkiNxv4BQo18KaAjD2yYktt1mLdKrd5xKnp7NTR",
  "key35": "3NNDrFan3sCcT6pR8sL5kGmUEFzEbvZ9LRJNodSE5XFiGkjRTCsHQoHoFoiohcwWXhrtT2x3VvoWpitcrkuMyj6L",
  "key36": "obk6HuRSU7KRuJmAFFaJA9we1jZepNwgWgNVTMqw3gGXZjChiEAT6PrV9SE73gw4W6ESCVKvSwcqTE8GCqBjR7V",
  "key37": "67JammK78U6EosfPLm5mV6Wjcwdve84Xsfy5XbYNkfVt3uUw4YNq24DA2jd5Fjgg4buWyAQJHgoXgBoR6y5pV33H",
  "key38": "8NoNoppE7JKNgr54LAuR33EMviGg9fhBqZ3PqMHqGg8rtWGkZdsSLXJP2zAjiWsU1MSpE15vXtqKX7mwKayVcDo",
  "key39": "59bwF9S8ABbWJ1sFvG88PR5vPu5EeqTu4vqd5cVLM9WupxSjKrZfLVYtSHdK1rA86rzwYK18h5G3eaeifwi25jLL",
  "key40": "25U8z9qWkkDxC7w79z6f7NzTwsBvpJJGh4siD9KwhLXJHeezmmnbXmGga9FmSMukD1tkQn3tXoB5sX5NCSgTY3uN",
  "key41": "2DmMwicyeF6xUQQ53T1d7MKc8jqTj9jBHsL9Y4B7b4SXi2gRDEht5VLEiq7PcmpS2jVHVcsdp9Qk4kegm2h29Nnt"
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
