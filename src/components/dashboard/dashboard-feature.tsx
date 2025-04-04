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
    "63L5fCjydDDu4kyjAo3mWJ2bwcvnGZ3uJr4Fs26WN8SPVaxLujbPzCwju9PuC9pjFV5PGfJ5UM3hpp5dW8WToeLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i2Uexr8kCtjqpXrBBQSNQGXBQBMFg2NxTthJrb8h4t97Dac21bN9YwygHrUECTig491Xsudz89e6g9iErw81hpC",
  "key1": "5XHmJZsvrUkLZDwz5iMv1as4qSN6txCEAuDspsUS4tZxgBagwChLvqVw78uxNMgEAGYnKdKVXXRkrfzjoBgmKexN",
  "key2": "5FynMQ2ngMDvj4Y6N5eSfDLX52UQvGADTXn2GBiU8CXCorqv9YDUkEnxfFYboZT6Rm8zAcV8XdESgCi4BF4nxV8r",
  "key3": "4rWEbtMiuKe9P4khF1eYDDLjC75sxeaZ75yJrEvh9C519k52BpMVpQyQqtJNSkCYCs9dGJVMW51p55bBYk3xve7Y",
  "key4": "2yxMaaf3WDkCRxszA1K25vqpKVCAqKzxTb6TVdedeMfwV9nz7LafMoeC7p4cYzwE43dA3Ts9y3xYXAQcfze7HGSY",
  "key5": "4gTmkXsyNE64VAWdj8gscztz1oMXHvUjD2DMGrcVoWU9zpPhxP2R4x1X91swY7kmC31wYkgRYS15JMxEMmKtVf9v",
  "key6": "5Jn5N1Kzq9NUmS7paLeKtxRS552CrcwnhDAwgztjaBeyf5UHwdTHM9FXFpn7FSpRqMkzMtcZ4QzRq8aWsvY3WZNP",
  "key7": "5QGr1uhu5M9RMnoXjdzbcDA9Kv3mWLYvswKLrPjDz4hMKLhbuoEdAEtWL1wU1FWPzRV8UZQjgwCtGtv5FJXKfBfm",
  "key8": "48HJthBR1PAxNKWbBvfRM3gLdG7njZJ3qcJGLcx2BvF3415drHQKq7S4tpHxyDYx1zayZSEyb932KhKaHon4bhsS",
  "key9": "3E1t5Ewh1YgZWDqrg2ZVxpqDpRGJBp7Xb1Wgi2nCRadnFDburteQaNDS7S3hZEoZTnxdMfnvMqaZ3piFnTGPbLH6",
  "key10": "3fz8RCGajRj9hxHpq5Rrz5XZr2JCnUDdBRm6XQjYeF5YEV3SV5gjswegGTvdtPWdFeVq3L7mgyFqyAVZDatmQFo4",
  "key11": "4Gh2faVdr7UZsqfD4j7bCKHNo8A6rUinAAyPYHr9KRkGB3bcX3iZudSB6ixwmaWkUjuoMGKrTDgE6kDfVdBsZX3Q",
  "key12": "3gaKBwYzmJsV7Wm2orrmihUUzhPEZCsVeS48EKmtgPhaURfCY1J6GxZM4oFkV99NrxjyqSGJDaW9vgVbZjy2MtXS",
  "key13": "57KjToJ5M8VntjkgKcboxxuVvjNdcn2Z2cXkSqWNocCHsiQggZDNFMuLDiV2w2gkCw3gdjpKogzE9SRJvdArKYnu",
  "key14": "4jx2Vt938GqdbkpfzRCX8RLy2toHPGQeuwbmdPk4YkBG8e15KHEUDysjLNwEVZHVEqfvh8LvwHV2RZ3RzZNaZeeZ",
  "key15": "5ovJBZWzcBvEhZHu9j5zneev36gAGj4upZkA8MpxjatuurtyzbsnTQGXwhVYZKcSfrREruUAgAYFrRuoaGfENxXb",
  "key16": "2SQoFRdLgrUhmZpW3juzKG9XAnuZutAuR4DaLUxriVxxhimueKg9NNYwDc69s3RSJfeFcdrT8zyyYfHmrJLxtVNw",
  "key17": "5JUa7sm9NzeCsT5eF8uQNYXcw1R4gEbXiRiPp7HNRkrPVejhuUKTRzVy2b7dyi35ijTdB9ApQZDtWp4ZwoF9SGU8",
  "key18": "FjRamb4ACjTeW8h8X58eRAwJx1Wcdhf7TRxpT1b2E4xmVAV8awcs5LbvnhuSCuAhLpMeMKbhYchYrLFA7QZWgan",
  "key19": "4ETWUL7wwZjJszGGMDiPyhUPoBR8Enrmarnt5Rq47wwd34k5YiwvqRxpP5YJRTWyjMBA16B75RCrZPpHRt9C228z",
  "key20": "WqHgYhxy97egxQcPniUvmb58PX1uU8A4uu4KPmv3EmJbU4w7RriTqCunBPbjBxq15oGW187kg5Swq8YmYbduNLr",
  "key21": "2sd8KaeirXyMcLmqVrQ5m46DLmVodgdn6XSRjzVENTZqkLZrb2x9EYpB6ioN1t9xEZQQWja25q195eKWTTHwDnp",
  "key22": "5NoZeheTvg8K9GhME8ibRZqSBup1CeDVE1TtYQWFkwEJQeX4NwK94ZKAWJEgLYMtHjaPoKvmag34M46XX2mRZse3",
  "key23": "22vEYCN3SARZmip6W1SepLH6PGRdiNQSY5bm1ZpgFUdHU5dvCbF33prXgshK1m6yB8J3jpXBNP2irrpFRsa4KNE7",
  "key24": "39qYAjhrYaktK769i8EPJ3E9th9ZcJqAUo4aAuFGk8xzwtudsTa5d7PmsaMGPybJrKS84mJsBkQeE15jeBaETR7V",
  "key25": "5rByA8khw2tupGkxisSkVged1k9JoExkqfXpiJpbqDL1c3Y5MTyLSY1jP96LbpMPAuLz2jWWmnfvrjACTgmbzNnx",
  "key26": "3W1PX34UCt21wG3HdXMX2iBeX2YsCqujWpNQnjHzsn4ftPJhP1aUzD7vu2z1wF3w1FnWyi3oxZz2Ut6Zu9Bb6zYU",
  "key27": "QAaiLe8JLBX65gtoLJTpe7fSJAqBQV6yw2KkjXSvqDueAF7mLovNxanQ6MnbeTxVF7p3Z4wPkCHotd9uBJCuNzE",
  "key28": "2m4irA9QD4Yj5kMKw4SpkYdaGt2yiFEkY13wzDBFtK6zwM6myeGpdAM1udABCWaWv4MwQ9fehnqRTt7ajjeQ9TD4",
  "key29": "4QkvKrorSgRMj2FPioW6HFnZdC6AjPKfHYcSwjsBTa5YE864NbsGP1xRbvGEkTAwcQAuKtaMexbmnETF12UEz1x5",
  "key30": "2P99yp9fVx1JWiNGPL3tvymPiB2XzJ6g1ikBWjEJUJoDNstR9RrYrV5zQsiJviztTRjkSysYDKZPScLYYQbUAZk7",
  "key31": "2jSeGur7Frso6dkqjqSbRNKncqQQ1H763QnVh6HUuYNuDVHqZaqN4ZcHvbGsDKMffyMhif5375a4J6RursSoDieQ"
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
