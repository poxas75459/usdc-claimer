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
    "42kwm3LcQyYUdLCTw4xJdy7vjevaNwc4Ey2eW4N3pfQTZdiVjEiLxM6a5JPCQYXZfpEoCqSja2JFLymQkYTDQmae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hsMyYjPRrV53oeb55MMg6rXngG8giYQ97piQf2Usdoq9J1cHFcWiy5yucVNtigJ4mJqYWaiab6EHViducAXebL6",
  "key1": "31a7bmzq5dL4onjEgZL9AhfQZ5h1niNH4xeYsUB1BXGct6f3XcyEZNumzDMkiCTyRxwWBfYtomjbjoRWxXzjXNQV",
  "key2": "5muaCfhcWBQdiSDRfR7MrbpfZZAak9cYTM4Q5MqUJ7PjLmarjgKZoZP2hQszUkJXrCzpZEm579i4dUYAweHDuCpZ",
  "key3": "3V9SvnctaTSrEF2SPoCQCcxAYiNgBsq8osPN19NGD9t6LtnB2dTML5Tpp1dor2jmsvMP2CPPfdaG8zWnk1XyAFAQ",
  "key4": "iLmpFrXTTu9Wkrf5mnryS4JQTawfbZT4syybX8Eth9SAvcRS9dWjhvPoCQ2CcY6S7g5rddrHXY1uDSaJPAaAzkV",
  "key5": "4KFPqrLMqcxKAH9agqWbHyECAp1SFkSfuKQ5FUW1a6XbC1aXTAcXcXArWqH3iwU58LN1jodUQvPTQ2zcy8DDwiDV",
  "key6": "58tSF59ehvQBrwKrASrVmGGxfAvX4QJv1QMAeW1kWSxdBJCvRt7r2XWGMfgcaxh1tGeznjxniRJgAiBdmKgyJEwX",
  "key7": "2wLiNZbJZSpEMjfkdx3bK6rRwBmGP5GqtgDaRGF25pP1zbYtvBudAskc6Byhk5eoLL9fiaXyWhgBiy1aLrXzaSid",
  "key8": "5mbQFss2VDpDmPH1uHJqksMbRnUq5Fv1NKMQSnPnVEAxBKro5iRjwSa2eKZCoyypH4N2EQ7TihajXXUbxTtnSZGv",
  "key9": "4je7EiyjLMAArRo1wqA9KgG6gRuoXHap6mMHZULbv3KwA6UYtMwQ6vbABQr41vvyBaw6jJ5Ads1kCSpsPb5K52Gq",
  "key10": "4CrN6NrXvfZePxMuXdL3o2qkm35oHBXo1eYVwkD1gdYvJtKiCGrD2ehoZ5xJGSPs3Xwv6oTCP1QZhpZasJxnFdDR",
  "key11": "4kfn7G5G941jBi5gAisdSic766dWm6N763rfZdZSLqHWa8tuJfPepwevQTWoZf7TTKn5XHn7PMfdfygfdek7W4cW",
  "key12": "3a92ZsX9QAJwSnPHvwjwYJcfDQw4Gj7pNFPaZRHXccHEJV5JVrJ1SSNtzGo2Hw9L3sFmyZx8XNmXL7e8WqKM8Dtg",
  "key13": "2HNDGVQjHjrt5LizVxAriAALRm8JGyqYqNCqFJ1otyihBy96mK27Q5G7LmqqdWn59GbcsbfijegtYjt5TxqneEAU",
  "key14": "4MQNKjFs1mCt7LquJV4fhREEgS22JnsChFjwADepdN6HpdVeMCDz8J2txfcBGsDDbrmfkwuSKhDLr2Wdc4v5LNGZ",
  "key15": "3jB6GSR86MpSx1cWKFFff8mqtTDxdpxk3DfWKDBcPc75T7yKVdbL92BRfNCmFUiLvaiHstaaB8Fs3urMV4qJCsQn",
  "key16": "4qcu8Bn3cchGmd6hhU8x6bsRpq8P6GXvKzn4M1tn3v9HXrnZmqiYhWfKP6B9FfmYdZVZvup81GWDSRYpr7FCBKBc",
  "key17": "bzktJyvEV2oifWSHamdLig3JQMthcQXDw6fX6WTFqDD3YsKAQPqh2Q5fxGU7KU4nBezviBAbwXYYUVS6xrhekvR",
  "key18": "3tCFaVMnZ7LjcrTpwtx1okaqahtoXqe5T5x2HsF5HtU9R82npLdqLNAb4JSY4GwqdabtEM1tyeobKapvezhE3A6j",
  "key19": "4AMd6dDZNnYyXMNZysPnq7HDmEk4KuAmaVQ8h7RRbLH5qbJxubkH6JqmLzVzAAoCT6eWqZ6RP7zKqCokpPRbxBF5",
  "key20": "5kNNdNqbriZrG1KFhPAGjvmpd3jsWtr2eZkcuW8GjTpjw6rXUUVN4kUhwRUigPFpjGrT8v612vPbSXraVu8B6YQe",
  "key21": "2W7dQkfpRguchgA221ZZu1zFJnWs4RU7qw75K55b792JBB6SbbauVAkWGdY7B5VLnxHfku3ywzQJZcW5bGLxCEpb",
  "key22": "3fdv7DN5k5vqkhmRbdU8AaL3UdrCnUbDSjbG62L4ms1u1kpS9K894exdERpmpqcRP3hxUipbbnbaDG3nPSPvwPSZ",
  "key23": "5BQRS8RAsXCyQTRR4Z9APgmMBfn1AhxNMiBDpguPJmUE4LabAjwywSL39tddS7P1yyY6EkVTMeAu7bhg8LhUcQE4",
  "key24": "5NcsKMLEE7c2Lg3gj5YE1nt8cHaDbeEPzspQyYE8CpRTDGKoqYAHuJ3BFqaFNRq4wgjmRaPtXKYbBmM5mgN5P7p5",
  "key25": "2nGGvRJ75gwHogqKg9n5PkyLYYAf9pR48XYsidgikK6bzGZBaYopudNXh9G9aJbSaqNahVhMwXceXmWjrtsTPX1m",
  "key26": "5TA7uRB8qWt7fiPGyvdFY9WDnnqqFDmMe212PKbyCDAZjzSxfU9qiC4brqrG2pUbXdbQYNhH7LAd8eVFK6af4dT5",
  "key27": "4ZhKRmezr5ihYRdCEATy7Hyok3R7o4AAHEuN65zDUZecBAouPCNkQP2scUMYHTgWF1EEkUfMU3Yi4on8kDvVfydD",
  "key28": "2C8YCnbq5bb1Kcf6aZB1qSneY9TAYecwBq2UnadXj62CzkqfvWUMYpwtYv2EP95bVTu4ztc5ofnAngYgZ5MKCvhZ",
  "key29": "26SWQyAJogo6X6PLg4MSfZpUJqXXJhK3CyHRhB2ACoNzAYqcn6PgRimfAgnQy59SnExxgyp9u9s3g4U3Ey7GJPBK",
  "key30": "5ogAPYxrhVDAPP8h6uFKBTqKzhFSZb4LeK1jW3NZUYb3J5bkmrPkUPM48nsLzkDWaY3f447w2QdWA6aozRqEpyL5",
  "key31": "5PJ66SCdhAHpg54BuJHbuU6HyVD3fubFHG8PRrSCNDZHpPA2FkcRFi4WUk7RYL1XNq2bU6scw7HVWQxk7C9yyqn2",
  "key32": "5n1YUnGjRf7WdSqa2uuNUu8yY2FTm6gBWktZekBfiRpPcMgAysvo8FdrnpYNaaErwYhz7MBzTANYvkhXEC2Sv8uX",
  "key33": "2ikh6936JEJbGFqFrzuhGitKUXCooKqgmYK7Erdnb283kaAKZaqZVwt9mks1Zb73tzNP4m32Fyh3wj8UnGLjKanP",
  "key34": "5b6Vmz6ystodGatAoG1L6tJeg4i2hoCZMgoj5UiT2SVvWCgECVo4sdng6fFQ21Cz2Gp8bpPEt32UrEJTRNR3eTEa",
  "key35": "2syqY5fJsBN11Z1rm9ubQCZDYPsXL4PtesMrBXu7NkXobzGVxVA3kuFwzg7DmRVd53vn2NBLx8NXynH4tJvriuq5",
  "key36": "4jUUhXHGp2GLKHnHGpze6gKt8qKw8XJWJXKTrpNmbfgP8zsW5Swtm7GsJPQMgQYWpcLEHXmyJDYBrMKU2ZzMEz1N"
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
