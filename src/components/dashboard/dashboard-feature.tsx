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
    "4FUPVDY7Fr5HgWwidfScRdqmSqGJQ6CD5kGWr1QNbJ8H8Smv1gDBfeaHsAjzg787XCvEz69HVSVDCi7DV6CUk7B5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G8zJG3h1bD1cctUvxqZj8gPMp3inrQEpoBAcvGwu2L1iXq7jZ7QKLZwsJETsE9hj4diHFwMPg2APNRGTYXvc6Su",
  "key1": "5kaoS3HRZTKTBHH2ZuAwkZzxjAavW3U3sFbTi8BeGrcLzbMp5W7AUF3JkK7WCyENentgLoyvZPYVb4EKagcXRtsQ",
  "key2": "53WJbeEgtmMEJHh92tujULzdtkp4Esd3Tmi7Rcxe5zA8R8qgy9somdaBVotwyY5ih2QeAkBiP3U5kDyyqvVVWiSm",
  "key3": "5yZbYYGFwjMSJhF55spnR7HuxFp1gSVhFb1rCQahohGHuzx2TbDaJAv17zUTrHUmAYvBCiUou8kejiBafPVYTk4V",
  "key4": "bupUfZem8SkuHYTh1KjVoMdgYA67kmjeoW76pZpJ24mASxrRyUHSwWiJyCUHvgYfe8w3AXii4tsyHxXtr2LsPBH",
  "key5": "5bYCCX7uuvTikQN51ATsogp1KXB7LXrFtDd8fWw3YRSgqw6SgjRcMNA7KoVBcg4wnpfujfF8UvWRZLM1e6UuivWm",
  "key6": "5SiL5XnNYzJsAbXXzAZg9c8gPdbjJXcSQmMt4g3M1NZfF91ussvgYmQvPaM4MeRoiZeJWVZ9bTKPri9fhLA56qAo",
  "key7": "2khEEYKgRcZNJyrhfr7arAyX82woS1rKfX16JY4LMtVDrx86xbasUoNmXekxYsEEnSEVv4tmgTxjRYZyJ9idSNMt",
  "key8": "4DNF9qrJTYVC1CHvFkoEtW97PXajJKQZkWs3NSEZTBAFw1a7m8jDm9xsCsfCYAHyGbY4tT2UojkymbzShHMwZyX1",
  "key9": "dujG47CjCD51xQXeyYx4d51wmDbCVUyVxP6NqyfdgbU5jisC2gRvpe5bo7yWDAWjsKvVX5edoBiWHAnPx6dvXg3",
  "key10": "4aW3qMxeezCCB3n771D5aJkPm55D4iMUeUT6evffrGrLoYGXedpQ3fUNP27UYEu6dkhNLX7Lwwdz27LWQzko9CNV",
  "key11": "iivrnoKeMX5Ee3yMG6n4tuxPQa4WJxwGhknZRuQNsk6JmdEeqUUNXeY9wbRGgqHv3LQ5mZEhqGEzbU5e6n5WC9y",
  "key12": "R3NN2dSnBjwx7dyGX98HXKGz8ZS536a19FHEP9zPCcivWWsTZrJLUnX4D6vd2waApsHhgULRZBLmR5BDWGYa3Z1",
  "key13": "4ynPfXYWxAX2nKpQBS8SPGHeWrT4EyX81dxLUsvYqFmus1udJ5ThrMfH51i2LyBWjGNcbV5bNzaY4WUzXyXY8kdw",
  "key14": "4LAvYopRmkSYPizGcSZQb4Vis6TUgfRhBc9xFsT2Uzd7quLwkxny4k1FNsFmJcYCB65WAxXQTYeHe1zRW92MUSZA",
  "key15": "2VENNXiV7ubSnLQSwf8Ak75m6M8QKNEH7GNkztAP8Au3MqtbHDmtNopep1wbRkbe7yoLaV44TW3UPDF6cGWHTco6",
  "key16": "33Vin9o7cYJXX6zTVFR1Yd3AuEgdQvT6sgECpoKgt6TrEjMsx6BZekSBZ2n9AsFPSykqzgaJpPPuPM4Gt2sd7zie",
  "key17": "54F6GjQWhfQ5KUjpyxE8QZe2MkPkQdDmg3wiQq3oZyfjoM1fqqNcQDr5Vpwwv3rC3heMU4Y4dtXEZxVej8sUeXS6",
  "key18": "SaVrjstdNjr4zora2jgAiZHwNgvrfKNVaLgZVoKXPGysJ68Gp4mNk6MVYCcbaB1ry1qZX3k43SEnJ26TNWC4dKH",
  "key19": "4gzJxGsyzBtju1ahuTLmvtwyKqP6XbUeuLvc9YQi452tQ44HzUiexCJHcnG7Jqoa9hLYVWHt4s2wGX346Ri2PMUn",
  "key20": "5ZJx81L54YZdLuvgBi9UPoA1o1cZqYFHjJeBR1pQHic5KTKtFbtCYsEGwcDGAQNWKor8Uif1f6WiQ8VNxpa8M6EM",
  "key21": "5WDrkKgMGJvRufHQxsYqEY1JBUAmWqjtuUHCc5LhG2CHVVwc1cNEGQj3SAan3KPvrvSwbfFuUjvMn15BUo23aHga",
  "key22": "2MtixrRcqiWrbKty5mBRcWxdZP9ycFHramgWPiicjd9bD4CdnxK2ZhFWKB2LLzDB2FRHNReP6Dtk7wvW7jtM2r8w",
  "key23": "F7fU1UNgsU5NTt9zkEkUPetoCGYXHkEK9vUZ8PDKLsyQPvj9oZSK8f4SvJteLevR2ZxMYR4cSahFEn4pX8hduTz",
  "key24": "4LFce7jsiAAhN9QxGvW8M4KLzqfwkGSChvkJpei2223DLG9wTZ96UxbXUAsj4jZPHqAMbRZgLYeaD9pEiVsuUbKr",
  "key25": "3F65prjFjEcsH97btmJkxW44fSKgYhJ5i9Wdcb8ded6zApabMdjGvSqnxHPtWn3n7X3wdsxjdqooQwkXCEUd2K4A",
  "key26": "4dSQLayKNYzKDo3tHo5bLxF2tzV6jux57oB1L4U4Ax6YvWienN3x2KK8xT9KKBWKMErV1kbbxPhDynbeVQEiTgnN",
  "key27": "5ru17qJH914phCcK2MiYoYCJZB7u2BuuuMqDYkRumZ33A4sy5bHHQufbkwdzgVsXY6MqsmG7TRHDTSQF5YFa3m7M",
  "key28": "29t25kU2S67YEzfZdK6wQqK44WbA66Buxu9FvPHq3EoomQayUvy9vsSg3gHHfj8JuTrxmKfAwJNGexbYCpas29pW",
  "key29": "8y5BPFDAaP6G7ZxzQ8kbFoHBhiuBnoRtjQ9wqyq5RmG3jWZAQTnZsRhpwdBNFa97ujjwQc6RDb1xsKRwAnGWKDE",
  "key30": "SBDLfV3dFwF6had1QK4YNta35oGspEuTNJ6dcBRgLwVkv9vPk2zCgfAHGYXiDnanb9b3XPtzqBgp7FqnyGSm7s8",
  "key31": "2s8Q1nBEKqp4QS3dwozbxwUfd9qhXPiyjf3vJwy1EQt3nNLMMbPd63vDgm81QXbn5baJvC7hrqkdtWnCBwPS4Rai",
  "key32": "3Hyw29svaYoY2tEUEHS1b3QzaEtoNgyGWfQnhXjY1k2sgo4GGQq68qePTnr9DTdLuKqcE1FvGBKjX71jzoyukoLP",
  "key33": "4PppeXL9kjN7F1Yi48nvMT8j643Jcqy8eVSxUMUFTgHRb5ocxS5AJMunKv1ddmmP3TXAbEmRM9xYixrZmCtJzzp5",
  "key34": "3duoU7GLgJ6636jjDxUedyZbQjP7NhGbpqc3yN5qemAkj2PRysabakAzLua1yruEyevmaubunyPYZHCXb78h7oMy",
  "key35": "4Vu2ngM9CU72YhXupBLiKaQC68EMmCadmZmYQ3B41WTXbYv9KtgbLEr3DsjZp9MkNyB9Npg9sNhAXvFjkWyCq9kP",
  "key36": "55HR8ALiJm5KgdwKUQMQ4QQ5DjterNvkPBqAWSCmV4hvxmk9M318RUf7uWFbhbg5wzg5y7p7uAR26um56TfXc2rf",
  "key37": "25AnMbri8VTnEY4UF6L86zn1SjjneoAZAkfDjmQSwgyQdsuPXVwhxQZkWpS8QGhmj91tpT4voiWjef1y3Svsm9Hy",
  "key38": "4wV13LW34tXQCG9zgnFoQL8xXkHHiRKmTXWqKauU7vndx7aKLWrTwJemQejdNQvV15RCDFQEyUVizzjHsyTKb2oz",
  "key39": "3jkfEcCD2KV6CAtCAGswNBk3XRsJZN75JAgxZetVqPS4ZdAzTQswEwKPTNFX8sn6kk6THUgQD7m99yaV7R2g6Fwf"
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
