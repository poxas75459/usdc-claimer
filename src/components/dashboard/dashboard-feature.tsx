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
    "3dptnDa3yjMZeaASKDatbVaNfxa8jzYsW1NkF4CdzzFqzZ5aMaT9W9Y3kqJPGFe4WhCpJnMJcLKBWNMdeSvw2kJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JFooEgD3kzRRPC8iWaiKznxuDgK39vKHu3KLfAQYyhKcjB9EFX5NcLTZxyXhLTySKN9QF9k3A3H2Ha21xBnarGi",
  "key1": "2kmFYgwzybsZkuJtTe3xWvkPhAGUcBjKHwtH49UBe8xTLdp27VtGcuDR43KS1fnCfTQUFADZs8fh4Zfto7LtttCG",
  "key2": "63GitPQLY19yEUHpViH5HS7SWAU4UQNTgqiFRyAkknCBQFUUbepUsxPMEWJPiRaEjnndaSZYgfL6HRKiNDaH34cV",
  "key3": "2jCm6Tmqsq819FRTureox5JYpg31FgxwLsHKWWobEyFKPzsaq1GMkTBLVDmsTNBfYuH7aEGwpa41Kj5WSng6vwi",
  "key4": "3eUjE8KobWBNoRytPH7xXU3WYG49aZQ9q3XAZrYvuRNugKAk4MnYkQb3vszoFh9dL3g9VV37E3Mg39saoyAKJNfT",
  "key5": "3LnmSQSNjgQ9PUfGEgb9XxdjJ46bfsJgEfGFQebnonvEeyQe8f72w4aeMikad9udivTfFUWErWKx46p3dyWauwxV",
  "key6": "3RdRFCowiak8MPhs4qbyChB6uzNt5VYPtC3kwxjMFzJSWPso2WGZMzCWqLfvD91jYUms7UoxZFxXjeF1qEvBs9Pv",
  "key7": "2S2hGKVFW4NCt66MysWEr4RX1MmKcsyhJQktj61opN3bymw8DwKK44xLf25LzetRe6h2pGJqhZ8YAb1R5cKEAuE6",
  "key8": "3nrCK58XukNV9TiA5boY4AxmTHUfwW6K2k7kn2Ev2WsDvafpQUr6gzkdY67BhkwtsJUdvuo2heoL1te31RzWX67J",
  "key9": "5j3dpmzzQyEkiFhXGcErh5JdbQkaWgbHSPUXU7h3jhP853CkxM4p6Ccq4fALzD3K71tPXoz6jVE3BmHM27861t3F",
  "key10": "2urva9xMCy4zwLqeEaMpig9RhwA3p76QyCE6wZddNeLZ2xS3xf12BT8hZCrGYY2uZJA2KYo4Vgs77YehCp5Bud2q",
  "key11": "37psYbTjWNh2vDeWfH7xE8mtJFHPzXw4YQhFmjAa4hrTdHd619GD2PaTmz9BKTvTGhoCuA5E4yREeymBCkjLNk4j",
  "key12": "4Y5B7FND8VMvGNGtWsGaT5bDKkYXUBWVeWgBYhwLMnBpcw5qnW4ghT7RqTQKqZtB4pH1KE8i4rjZgMUcBYQjfxn",
  "key13": "4FuuqGkYh7vt3SbEmJByDYoRXoJY5PjCUdhmcZnbCdzVFksdKXcDKCsyPwcLD6wTKbva7f6o2De28x7Uusjx1kce",
  "key14": "5yZAiqTaAqN3iPkMqAdSRCyzRXJ86byKfeWM7kscjjfqMRTKoj5hkbrugwqkNa26eip3N5x1pA2rEWYJScjKzKqX",
  "key15": "3uCjJSLrwaNYaUojQUVLVYouHTZ9UjkxNQADswFyMKpfDY4MFmY6y95xcUqoq3TSk3AxUbZKSsmELjn7A32mTybV",
  "key16": "4mgHNHtFkaaW7whaUSnbbim4k1WaDVr4PrCkjMQa8PbFKXqE24JBhiJDbJqhDngKu1CzpeBbgKZLaKG9AsHX6sjS",
  "key17": "24VxAhKD9WU2xERa4XNrtj7Tx85EnKUsBt8p1psfSDuAWvUydTCd5psLsQsTFwqAmqBTwaj1KuFkf1sfazsf6znR",
  "key18": "61RBduQZYkSmKHu7fWLsDb42GXUCbUoQtGShfcYJxQAQ9bey1x9PEd5H1p5pQQLgRkL9pZ6pgjLhNQrZWSRNRiiu",
  "key19": "2EnsDuWk1oP83GZh667oZjxb8nbzq1rH7ixhmQkeTqSpJD3srgxoE4pVWDv6pbcEW9M1pL8Axz1C7iEEs78YyUMw",
  "key20": "53mxCDjcEWVxdoBh6xdESGrhi7ZY5mK6qt7jr9t92ZycjR2H8p7YqJSvbV4sCniwzdhGrzwyzKjqinG6f9Y55CAX",
  "key21": "3ADZEfVQc4E5sa2tA5fHg8DFHbqb5mvS2SYGPHYyujmSFFFiRaCC2DFMiUpyXrhgrJAiUhRjEvmLZBnRjKNXRUfN",
  "key22": "3s9GezzoT2hYmHSNCeT1EBWFEVrVLWda4kKX6T8AGpz2UStj4q2NadrmSPLVsg4guxv4fVwhZHctg9uAs8xRPFtn",
  "key23": "4532pguov53dufHxb44pey7BoYDeoXWt8nopnzmpZjpR9XdC9hdHbheXQFPjUK4NVyfFpM2Sta2zoqTTZAJsPbc",
  "key24": "32RJKhCa7PW16fyPGk76PpvrnNq3pwkCxtCHMSD2JoEx1LHP3LKZkT4XAV63oQVkioNCjQ1sbHUmb1qVJCsMNtJQ",
  "key25": "32xxBWg3kKQDdEdekCyXcysguSk4nkACbgLpqMp3LVeMc9CixJ7VQdLEuEAUsDDpeFoTz3AaAkUz2Y2NAGRHXu2k",
  "key26": "48CGvTZ1Z2QG1vEjDq7tqXJn68NXJyKsoby3qzhBmWLy6Ym3H2AY9ZZnxuveTSHRYLUmehyyL7URTEnCZ7tyz7gz",
  "key27": "5KE3kNbhCocsSEiTkVVtAQ8ngSCUbLPS5iqVCrjtgt3EqApoYzGQCorhGnHyVjf55Q9hTzfgowXE57pzvhs28qjD",
  "key28": "5KxtwjaxCvc5aKjNFsKp5gVTp8nSM3uhN6S1zf6hocct4RKkC8iG3k7qqSsWP22yERM22keuk9hKtx5Je9vYXkmz",
  "key29": "2trPfnBo13BBkhsWBC3uhymojmsHkTZRuzSiXpeFLHortAhLhwjf6yVzy1RpKAYja8XU8T5jDQqfrdGPYaBznaQc"
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
