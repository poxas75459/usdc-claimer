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
    "3bDvXQX7Sna4nF4VigjUXg5JugxVb3ad65wpVjFpPwe9GEZbgopUG7WqWGmUxPTRqDjCb47YdZvnVWdKc7PCHTYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u5HrFDVXRSf58xrTR8VQuWUA6k6gJuoTPUd1CgUxWUnaDoTL5SMbJAzXA5bEgP6JCbXWhGvMT8KVXNPv2uZyXVh",
  "key1": "3iThv9bZru5h9oFfTB3JqFUQ4FuJhpx8qC36foQGKhqhJTNbqWjHd2atfqYBzXbMwjX1Ya6sXNP9evk9zNpsmixC",
  "key2": "591Eh8FdT1cxq3hG74BtSfpoqDjSDqPAgQUA33zguix8h2T2uV7QxVFbvxHKb5fQUCsG9k9CSrkrd4EbBYNbYBbX",
  "key3": "3cg7kTgNwDpLsk2Q7xG5dUgu63hM89UmnKiwT4yqk4zNkvQLAG4maA44JRnx7ZHp9THt1ebVjt2K94mMMwE9kKav",
  "key4": "48Sqqp3oEtYFdp3ucksZ1VyXoz1w9u2L8axY9fg9rNfvCXuzRNTq1iiEEhxAmd2sUpncDsGtHY1KFPnu4GQQ5Tzc",
  "key5": "3Vy4mxyXtAebhN7MrQ6qqHFn5ZKRDjHQdpPog43oFxrhKq9KPvn7urLAVfBCjxH5BBfbUeAh2aa2FYXYL939CGvD",
  "key6": "ixDbnHe8Togk9r9FpNCs4o5TZVzEJSqTEYpsHa8ms7TxZsimgFu5KtbXzQZAixdfsLRDFmzwfTC3mnw6ZXLojut",
  "key7": "3ht6V6c1KDAqSuqLQrk1SUQQYvmg3sWbCPwbKPGwQZhiK8AmscHbnvPKAB6myx8X3imi1LPNM6A2NYQNmB7EeKCB",
  "key8": "5iATbzvZ48natA5i4RnqbmfY4E2ATneRY9Nfqar8rN8He6vdxweSDAqgtCxeochueqNRp1RkTbsbjzeMafhwoysK",
  "key9": "4zGg5EgkGdvBDGowE6mY64cfp6xHh6VrG22nNjDg6vTFmQV7bo45xupdqeBF9ek1oRf1itR7SGcgTrppeHgFcppR",
  "key10": "29iDfACfncox5kWC2gzzZ9jEyFabP4RDkR8JiA5aCijE5XFJyXYwnaktGqniwJ6QH1tSAX2cPkriX1vQSwh8hvyc",
  "key11": "5uXmxpX4rDnbcrztJrErr5Xu1yoemR514Jjueuy7vR8KAjixjcgGVFkmrRkHsNvru2fRWGtvFNJiKSfVNNCBMbBD",
  "key12": "2xDzjL4RbEY3xix1ZQuXHGfRQiTiskmqqy81g78MP2JDHGQSRBtPL3VgSEYAPLUBYpZChi9CPoRfC7J3yXdvFqcX",
  "key13": "4SbEDpf7rXANxVArHjNpGMYi7skWNqhyqTw91K8Qm4npCssDbTG882zvGdu8vhWUmVibN3WR6bJmuVPiUpAeXZs",
  "key14": "SAiM136wKd9ifKthENzA6qgBQSU49fWswpFw3riJq9QHUhpakFg8mQNtzpmmNMuaLxu6coybMUfuVMcwzT2Jd77",
  "key15": "2G3a44V3xcXkBqq8zgva41MZDGSS3D2i57VhXePtYVk81u7CaGdeodWJaopjfPRF4LroHv9Cdzo1mL2eVfZZAWXM",
  "key16": "43CM5mi4FMpPvRiUFV3iJdJUcZAGAGkWVAJNxzRWwH7QNUcXmtnt4Nu9FFkzyCcvmEdF8cPyKbZWVcXJ24xdHSDZ",
  "key17": "5trbZ4p9vGMtHWRFoNhM5dFHfrukui2BBJsj36R52cxpGYcbZGxW8vjR5o3R8hGf36K1XU2JYfCoN9KeDjPpheyz",
  "key18": "3M6C1yQba9vhSBDxAAJ56XFfRHq97WVWskMJgE5YLKJxZYxtkxJFLsvTiryNGxNabcR4kcJHQJRZMThRGmnpPx7V",
  "key19": "5fBbLGJ2QvRJfxET81spfPPsVwRqpxEpmiTZ7YXuyJYoRmQg5bFP6N51XjPx6aH74fUaERhuyMFKNV1ukc5ThabN",
  "key20": "488MFk8oXXzFafi11gWTvF5QoX6iTsz1DnCevHyCjV9sLXB88a9JWiJmV7FYjodBRwZmJ3TTnwRhuz6vf79aEoax",
  "key21": "4ipVZDXmYqwVbYpFmRGk5BVVWvxrLAuu55Lb7DUmFrvpDdmg7USkBDQjEMUfG31TRHApHffGoL96iFmByFzJamjt",
  "key22": "3L1M9sn251S58ggJWECFKbRoRinRTaw8AFNj9maMYi1uoXb3PAxBvV562XCuks3cEoxsvTqcKCrLmJZZp2xotK6s",
  "key23": "5vM85hpdgqEEsG6WGoAiVb1nskEkEFRSgQd62e9BBhPbRoQPFiup71psnaxKdwio7jW6ruzaHoNnBp8gBmZyeynr",
  "key24": "4d59XpfKY7v1fa6WsPrZ96GyLH2uTJ9PBxXVNac2t8RuwRmSdkw3LVzbH8NfYNdwoBHi9pBPWjJk385ZMcbYrKQh",
  "key25": "4RoMYfrmAM61HWXoYGFCo9Rj1V9qNk3qBnqsjKUCp4A8ETBYmp8KBvbrNeuGjg3PcQ1NHpySNkwK6cXQS2EsZ2qo",
  "key26": "5SSQNtderTYYXdousoXxd2WjNVQm7ZkTbAb2SpCqbhK5NyvwjFpY3dJ4NFJpgDVTvsuJgfUMY77QMatSZpqtYajj",
  "key27": "F43VKeKyr8nETfzTG1un7uj3jDH8vwrYsZZUq54sfsRDBb566QE1gKjB6F7otdL1Avq265vUC98ZAhjrbvZZQ1Y",
  "key28": "4yJAt8j8fr9RC5YSRZYDGgMyJ48QSgDhoEH6Gkt4qsUcSfNuj4R6HHkGeVf74TABeC7VjMhcd9P93eqa1ZAvJYZv",
  "key29": "2beoMG55YAoDbwbDhjotY5CC7QYjgacLwa22zsnqgzQGdf88TkxNUktuFwp754Vi2aQzKuBfGmUYnQDgN5i6SYzj",
  "key30": "24J1PnZToBMuAwX6oUnuHTErTShW5Qf9xzin7YEe3u4yt994xPrm8EyMDZbbCCr1TCMun9TSVKbwGSyfJDtAPJMm"
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
