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
    "4ZcTFNajriSyZAU9hY5fHgMdgBrMVCiB1fpDQh53Ws4owXCvWxrJuJm6ZhRNcZ5Aehog9SQAhtha4L757pvJEqvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hkLdUCQGh2uNfcuTE9pK2oTyJnWMbY4sMgh42Qbx91R9Ans8ruvFp2wM1Tksx6qF5RBXgpP9bQCJK6omnBPaUqm",
  "key1": "rP1azDiFXDG4UjxeMkAfsVVkywutuc2JAovvVwegrZs8hbyDkCpePzzSi8NcA1MSmCGHmXRRB1DdDTfHW7J97WS",
  "key2": "2oUEeeSd2RGcr11xxTmhJr1RLWeRpd8d1NVb3gNfFJVNKrgqayngGE5UU8t2Jg1pC35V93Z1JxCZvghXcYds4LYn",
  "key3": "5PHn2Q9k6VWbnA8y7j5msC3xsmK7E7UBHKhwb3SZNfs5yn4BYezY5VyJ7zcNy4DgHFyca7eoamfNkkgYKoiR4DPJ",
  "key4": "5gcFQSCo1dPUfNy2U4UMYjvgRyxJCJhRrHMYTqeTE96bMMuXPNHeUTYFRy1vZWicQqN2fFwZSbwM1h4nJQH3XPof",
  "key5": "fxHkNGjfF5TXyHCnSHqn7cXj1zWGbpYH92dJ2mwcQ7Vf8Sq1wQs4xUxjXvjbv882DqAPW5qjgayRR3895Zf5TxS",
  "key6": "2jL5Yn9zd6TaSbXPSGpkv6yu6tGMzKG3T4Sz1QSZdTKfdzD2XKAjV3NF1rW91y1bkKQtnAMnkTKo1n71WmcYpGPM",
  "key7": "3BdrP3TUV2toGHH6Cg5gCrHwfQLpaZTtcyomoNyApPBkFGkm4iQon4CAqfBjw8vyGCJXpgrKhVzT5dVjD7SWTwgj",
  "key8": "4d5bZV8f7yqhenpba82kdxwSZezqzPf3KJXGqhr7Mg7pjYBCEzMqnZ5E5sGhGByQc4q55UKw5qH73NGD8B3iEmJm",
  "key9": "52SQTUpNEJqWQKChH8s1TYo9ocXgxbUz6TgnHXg8SAKqPBVk1th4AFqx9YaeAwVfvft9AHwwydKZRw5dtmt8x1gu",
  "key10": "5QM26tfoj1LcnSCePfgRQLCqio8YZ3xniDgnYQ9JzgzW5EZyq4vYtmWvhVDK9dGmToqPiemqwufXh3VN51tJjniY",
  "key11": "4RVngpPDxAYKLoR2WGZ1fY8KNc8mTzAq1AkkoHEGoVfBBntak7Lii9ZKNnvHSsUA5F6vQWzFe2t26TSMDJjXdhdy",
  "key12": "2HzFfLMZMHhPcnA2gVfXxsczvGa8PmsrCuBdUvZy31w3JjMHSH4UD2eYdUhUhCPF8fUiGhzdH2RGuTURX8sEWZac",
  "key13": "45CNpBD5gpcjWDQWYkmUfyhG19WdqiSHCK1TAnW6F6BNT5181YwyhNWr6SYx4k98TUkaQCAYhh8yivaXaZeR59Rk",
  "key14": "3mSK9bsXJhUDVApPZsk2bGEL2bF8Z5mhcR4f2vjTma1yC33g7hJqGCJbpDoeG8hd87Lb2tBp2drkJP2oNLGA4uco",
  "key15": "3bG86qyEGWYyQF37Zwia7haMbNvhUdChpRLChCe4zK1JgZZW6to9Y7BBuL76vGX7nS1ynR4UnKyYQuTBQ8jFJsEb",
  "key16": "2MB4VmekPQL3MBs1xxnkUSQgTw2BCLyzGnKAAHK4bByudiAVLKLSnbAXkGGwGXL9uutQ6tph17dD6BQ7CvsbnQnR",
  "key17": "Vg75qhq29ueEf7mFNDyjXH61RZAitE5zNLCnaA21oGEs6xJkhkBkjPiRqfdA8LCQqBmVmk9rH1xGLaRgHCr3rPi",
  "key18": "27DqryrvPvfdWmo3P2fVQ32hcYZcf676iEqFhvhYj1Vd1RxEXpPs9EVAwwDCKGSahkL92bBnUWD63ceMGgnFiFaB",
  "key19": "3zJ1JiY3idSN2wU5xxd5sLCQjDmjeMEuw3HU8g5JMHpa86KR49LiKiyCQw5AW89SWWkfAjv3rcNadoEvfjGoSMTv",
  "key20": "3sqQzQWRizyGDd79oFEUkCyV9wDyiFfha9jVtDaUjcBvtVGaD36pHPcCjcxVATdi53h2cxxjgU5hpw16Da86Mp81",
  "key21": "GaZqesQe5z6CL7mfNfsLPH17AcRiCiqGGsZu5x85BrnW4hrzX1FJ8WjzsRPs1MStKToP5pqQDRqFcymNUaZazQp",
  "key22": "2VH8eNgSVHYuJhGZaG1aL6y4yRTMDxeti4aRYWBbnqCAu9vnQMbaJ7LW6tS9bpCAu4FeUjVUYYCCwNZyzMDE8trn",
  "key23": "2LF3HPwJGGM6UAKsg8k3q7G9PsFhCaJLaqY2zQbZLygBDNACa37TnZ9WKQc1V6M8qir6UcZy81T5fcDQBBD5BEaj",
  "key24": "3zWq1AMyi33DQGTzH2tA3JHBwRGfBNDkiuvoMbRgNiL1aq8D2YFY3TzjNmjnQbS8pq7g8emdZRQTAGCUPzokvQEE",
  "key25": "bh9zYitJnJYM6QLA3GyM3z69JggzEfPQVx5LgWuXPFW44nTwTqWHTn9ieM5he2n3xQkiEbD9JN92B3Gu9WRKdP3",
  "key26": "2Go5VF4bZcaAP8bKBuBJoy8sD26rdsEShbhzuxUEon33sHfnbjt7jHKQqLufcYcTKvzTAiVYELzro5B2LnBMspxE",
  "key27": "4iDg35W13WN3yMonAtn9pddp2qeKXmzipkXYnmgHG2GJAhKVu2jRuWJJPuJ6Vt76DhZye8KQaebQQBn2gYGdQyGx",
  "key28": "471D7PzmyftqqVUpD51WAW7bG93dgR5J4Gy9bAEwDjimmuKkJ8AJ6MVgsofYCDaAncqeYCtKjaLLmXQubM3mZZLp",
  "key29": "416M2t6srwKuYhr8QYRiECBkobJ85mKsTaehFZhoHS86RiocfuHmN38kZucvQKL8ysauQLSASGkSyzZ6cfwbkmBX",
  "key30": "55vjuxXXftRJdjXvcQnMM1nTYMh9Uk56NFsh6sKXb27sxL3onqL44pdoDfv2N6DCLfLNC84ZFqCugz4D9JDnCFCr",
  "key31": "5MBJcfQRL3Hy9LVsZ23idWVJuiyZRJjQLPUpyG1kZUScyQET7HboLiyW72RmKq44g5cYrF2gKWoDdgntKXJHrVDT",
  "key32": "5WBnVXFgqFDmbyF4LW4wMU4TyNvpxQru9RvJpHCEYXqviQoKPs2d3EnZVdH65fAA5bE9pQxDrxR6SZjeM3dP6Niv",
  "key33": "5B7fMVkmv6ZTdUUfQmY7EyodAMf56rcfiKdF9Xjx7yAFq7713Ghw1Zbm9X8nj8akxtvAXyoSinEAbwXidV43SoDg"
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
