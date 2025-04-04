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
    "3kuZzZpVf6a8vgS1H4QN9hCX2rCcSTyBh2nqh4VqDSvvZCFsv8aegAVDDH5qgjkYrRZppcoFSoUvRgje9WJLTa7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PtCww7CCE6mxhkHT7a7K5fkQ1Gu6LuQTKuNZ5LFSvadqDQFsqsaY1MjWo4E18fXWVA2C2khtMoWxaNyHWzj8t2U",
  "key1": "7dFhA9dSkKjvnw9pWmXWASWBQW54ragKCt5REKVqusJVKYudzHzM8h4rpDLzD7m9DZwmJ2ovMXCQxygXgR4ZRFz",
  "key2": "5WUwjYNaLo9kWb4cnpws9yCuw7y4qstNsG55Z28VXmu7NCCQAeSZ5E6RZxHLDLaZZjZkwgPXqzLLGo5gpp5QBXvf",
  "key3": "3rZMnMBicoM7hn4z9hEiEL8X9gaJxPuGHtQyVHDjxNUVzpgqEhBsR1tNiqpnoyQeUsJv51b4PmBNrEeuC16NV5uh",
  "key4": "3qEHqVjBUPMhzsCmVW4gZWZThRgqSw2HTV2VgssP1765tqjqqcJGmTWBKA6JgTYQWkLGVPj8Uj61yk1aACk9LNxe",
  "key5": "2JHxKXUxFpbSJnRZ1q7bJVg7a6qz247SLFYqmTkXXiMKCxrXjokdR8mozdESJBsP2EbrsXwFQXDYRkmxmWoGsgMk",
  "key6": "3LUgWKjJKMRmJqWrWb1Z4Y868ieVAveYMFLpzJ2Epm4TPciF9zFG1KD2oeyogHzesv1158KWWLKkYtj6uqT2e9dr",
  "key7": "43JLsZNWk7qdhdFe9B1FhumsrvkKSwAngUktQVHdyRbh3tbQSXeLtPPVHoD9DDwAC4xF5RvfgNAR4Hhazv8oFNuk",
  "key8": "2VNgpF5NfiMygdX5DeoWArS3tLgydkxYjzRsCdQHHgcHF8MfT1kSuUr2jJVrvNUCz58YG9SCrgMMsCcomDY4SgA4",
  "key9": "3ztzodDJr8DyfmqzoXDB4FiUfFvj18aYAoAMsbpqGjaYYWP7MopxyHJmzMRZbAWhPRP96GGqDaNefgNegdLt2pqs",
  "key10": "4kVDQhqG33kFh266cW9NWTZiZ4Qtx6fkWe72YV4oQL8hqnT1dGUncsMPh4GKfeRyVN9g4u4viWbNUnS5RCVgoXa",
  "key11": "4KRTC8QU4HCvTUwKJ6EjeguzYuoKd3sgtRBEFr6kTNjqxLwFbZcFkWez1gfkgd68KwU5V9hXh9CTBH1zujCHw15S",
  "key12": "EUpUvJiwBU4iYJMiWgn2MTrUCaiuyFWqiSEmACWpjuxA1ri7jT6byGYNS8cS2QKoJB5YafLyHGCfhNC5BXMw329",
  "key13": "4F33sAybJyA14iGbDfhknhc4MVAY3j7nEgA6QNVajpcJCeURYSUF71SspcCXhetkMSNR7WALMZtwzBKiBpdgZw2c",
  "key14": "54sH43rJukwyfEBf5k1WgpyUPmpkz1t7H23Wbv1FJ8Uo7TvKYzbbd5umtVQbNWUTk82v2o5AYqTdz8o9Rnw2atVi",
  "key15": "34d5SoNpJvV24po9mTjjUpXs7J9oW52BvgCMXRb2F554z3uyZnoeS7esMmr59DMmeoKcwQEfPncWh8PiarG1cQo7",
  "key16": "4tVtJxAhJpbLrwLwuJyZep7r8FeZhikvHUgbcBGHwW4STFSA3v8TSSsfb1piqncP9yyjpm2SuLxeq7vxQUetC9Lr",
  "key17": "65xaH9Afv2V98QZq9wRjnEVw5sCcneyut1nosgqwKjt3oTm7FtQ47N92gZFNE3PgZEJSZDqxCHRLiDwv7wbiFgaQ",
  "key18": "5GMx2kGDZP4nJEdP6aDAtu13w21oBAgx1BJvo4TzR267Tn1LgmP5Fo5gkdkDVfGG9RrCji8i9aEit4EUGPLj7ama",
  "key19": "xr1bB4kzwQL3wYXaEi8BSWCzaGmdtScgSwohR8dS5UwFm63PkjYjwekrFYhPboG2P9M7YdNrnNz7XJ8rgMFEKgd",
  "key20": "3c8uiTjoiU3tmBGo4KhvW5vehskVDzYDDroxAWJ6jyu8mwDDjK6WXXDheJahMnYAgsWPaY9krZTGKj7PxJNzVxEB",
  "key21": "3bfLd4hAs7wEiBoAsu9yGciCk8qevJbVFo3W8Vc16hzP9k44AShtRQkuxXewjB7o11HyuojCedvt4KbaFkhXcj4M",
  "key22": "5mM7iag18vwuJwoiQ1MrrShg8WtfaS1XYiyxdkeQi7FLhjUbhH4ubMgvhmpDxdTWykmCeDDHAUL3sP1eZBCFxW5N",
  "key23": "4Rbo28oUUuCjEuxdejWM5vCHNgCxjtTc4JPMrQLVSZQkB1LjxpNX6jj2ANWcAgYCig1Gt1K9KFjTNuWvpETLxrB2",
  "key24": "3RMudbK8ZcJ9aqemf3Ws4o7AP6XhZctax3f2g8mGB7aVpq5egbXSS9ZVnfJgBLEeK9auiSaFfiwyYELkYnJ8by5h",
  "key25": "5L2UmqgcFQ2JSuDuMh3VCFuumzJcv9KgvMwSFd9Ddu1qN3JATou71PEEbL2V8LijXW2jFt29wH4KAnyZ6qjAZiEk",
  "key26": "535XUKnpj1W5SpR4XnUkozgx3fFYRc9Udrqf18Lu9FhYZp9uJe1jAoQpzasPeq9LfL4AY2AuCxYSyDqkv8H642yM",
  "key27": "5CJ4tQWRLHF4dPjABKLce48N4nJz9wNNY1xits5j9U7Yc25C7bnq4TuSTyhrXD5Un8J5JJtLNDnxTdCZ9sqUtNmy",
  "key28": "2PwZnxuMN1w5MkJwfyJvkFELrBL887rMFtd186jo7EpQo65SGXmULMUPaMPtzaWp3sxtL6LHyc8F9LeUCynFESVo",
  "key29": "5rShJJcRm95pe1QYfXxSZTcYDDuNpEjpHpuzp1WoNEv5CvoDLteap8Mgez74T4dHatU5SwyLEqy4eFrTCkBm5Whg",
  "key30": "LmuoYNRpJf13c6i6x57zkrf4xsmZvrqbybZQe339m2ac1fSN7c574fESFSZchnia8p64HwnWUPmABZtNX7Lt95K",
  "key31": "54AQRfJEfyoKVUzpUC5c2XN1ehoHpRxNQexr9qkMWWpdSbDRMK2x95mD7PCxzUyiPTdBJ6TZmf5HH3ZAAb2wZ5SS",
  "key32": "4cUqej8UBZhneKd1ohEvmeKBMhLt9hxvZYeMkRbiTcWMPoTFdZpPTef6x9wYNdByy19b498Q2eqcJme9xFZF29JP",
  "key33": "4zSzDzdPAX7jvJgXemZpsvkVQq78KHWGFYKeKdZutrT6uzHhjxYMaaoKQvPTK7SnUPbb1hKnwGi6XwjnVakvngvX",
  "key34": "MfA5j1ZoFweLbdT5Ft5tBLAjdFhUVrgAU71mCwka9xRwQjGqtaqiPE5td4XHDjeCvAyDjSyVRR6WgNbDzkpBQ2C",
  "key35": "5eGzh1H9CPh7vvLLscxVt2PDbZ4bVUd58LmV4kAinufWPAkaJCpL1ZSiXun47Uih5wHdGHTkAKRThvM5fuaZvaB9",
  "key36": "5wmwP3HpQN35oa48uVspzNUoZC6T8jtj3xCCT2hj7RhoCj1pGS1AwDNbbfJUtTg584f1dqtEiS5FhDL3mCwc2sHB"
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
