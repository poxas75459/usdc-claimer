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
    "RPQq93wdc3Mf6fzQJbfqbwfs7QNG6N9gp3iNcbRaafkyn7yTvWJTzteoFwkr9Lkidy1ruTgxcRHtGT9bLqPadLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G7Ss5aoTfkVSahEaFGzGkoA32HeS96by1qZjPLzedaqeQvpNw1X9xkCfzTRi8Hf78cve3rMY5JvALhiczxLPS58",
  "key1": "jw9zKyGnrWfaW2YdvAsWzx9jL6PmALDacu1rnAweorsPfft3Etb3wrM8hJKRAkGFSriEnNY1DHLeXdLXfHpUjkS",
  "key2": "4GKtEcnSc8879i9gmut3Yzki8QKv3fwsJi9t1LurddHqafvBbggGoCH3vTxxhU4bUo6tvJV9jtsEPDGieGb3zFJ8",
  "key3": "5eYyQM6NxRM6FxmHz6oTKuEPaEhYi4XGtiT7hXdhpw2MqFwBfXLr6ERd44dBEYMjmCt8R8KA8i9TbU3v2P8RwMHZ",
  "key4": "4hiLGJLBFxN6UbeD7uTzF7WifSFiqjsv1tXbZtk65zM7rdkBifyvALhb6a9t941ryM8mWtNgcPBmM1JWvaueK5n4",
  "key5": "63t1KCJFemBwm6tqtDPCVG2UU9ca4aYoGvmcwvsVYcYXs15r8cfBquw2Khy3jUxkxeyA5dT3GePYyXz3FHXNYtHy",
  "key6": "5n45Cj9VXHbku1X9MN9mfQy1ABsso1NKLKtnmSJszJsuCRNXvF3QCUDP422oBTwNc5hVPwxyrpzU5hjeGnSbKWbU",
  "key7": "4N9EXUkgjRscuvbPGWrPWZfZHUP4FgqFr1sqWzM3HWdYAMZcrZJYdJnGmshHQN8c6zhgUF2732pfo1PzuK1by9ww",
  "key8": "2vZ9rQVdhEdPHXj4xbYAFfH63PMGHctoLs7d43T3cfgZN1h1F3AcWZQP1ZW4KQxUbofvVfME4CavFLV9E6gkFwP",
  "key9": "22JDe8qAL6kXcRBr818pyxnXXLJTZr5UwPAPzW6fqkppWuCfqGUmQhVoawBXinhN2BftaxapK9PcieX9SDDx5A6C",
  "key10": "5HqcjEnd9Xa9vkTiZiKyo21KGiaxYmbdxUCyy98JuwLUANRAqkMYwVv7vS4vFfWg19LeKQfv7kKKhu8RkFgbDfVJ",
  "key11": "56mRgC14957yWABxAk4wnV1Zv8hDLzG37PJtArdFEDmCufzfFPsLCVkwGpDdKnUs2VePHoe8iynpU1aiTaJxcHa8",
  "key12": "3EfE1v9T7YHSo72mTSDnRKKuFoYjhiK5XsLRcEB1QjNhfh3FK6bJiZg4bkmPKu82B9q3GrZpg4oSwzVNgKUWZ8dY",
  "key13": "3oWzcSNszYbTF8Yf26gPS1PujkVxBDeneoNggzG9wm3WQsGWgTEFvJ4sDE3u2MExG972a9UwPDmJZkoBuf1Y9ne",
  "key14": "4iJxSd4Gy8gftuQrrPKKamNiPfAFGEQxAroaEFYMzL9F4UjzVzs82UNEkNFFZu3wfS5AQEYDxF145WXLb9rNTY8d",
  "key15": "aTmV4apzXJc4CHnZMtxJFv5a9iyG3w9mmQ2AZ7tFHuSk4NxEPtvPXGbihFWVxcbBRjhn5hUiDeVqrajFoaBEaXo",
  "key16": "25qukH9x7Wgh4Xoz3b3muysJZ2wKJWZWTMABw1c4JMLf5owAGcei5Br4FdKM18fcnWdqn4NZHsrPjv1sS6i8PVmt",
  "key17": "3xgDASvc5utn2M1cLjcPASXRpkb2U4G1VVLyXhwJH3UX1UmmGYHtJD4UnADaXvSt2m1ExRiTJzHqPCTw6MCxm7gE",
  "key18": "5gH4CiEtWEMUTXmwEatT973AxME3AC7c7tDf1Rv3EKJ9SBqRjWfVkpHNCQpsrt1cTzhxafbt1VmEcq7MXYuytmHc",
  "key19": "2xGAfqy9rietxZzWVhgBamkCV96mWw9y2o3zYqKT6VQtNEecBhfBGvfR6UEN3i6RETvGyohdGsVHygu6XAf9JPES",
  "key20": "3iZ1S7AwXZKTesALwQEocS7hPsbKcp5Bw4hhJeYTqf1wxWVWKXYqJGpjNerN4wZSTANCZVng7XQjpTZKWWFVuNrf",
  "key21": "5AJVbPHhGw834Hh31x5mGPjNsdeGhyerjVfSr3ixMa7EkzBqKfXkR2eDhEznBpSu6H1QxvzetLKdqBvSPUNs2ViA",
  "key22": "3oN7EjFJVwk1VR4LiMgUfjnGAjZa6eysXRg7XRBJra8PsmMGZddLL2vo8V5TphZn4xfm1nvrhZhRGtDSvnM861nz",
  "key23": "47qA3SHm8mfTs366LwMTx2UxUvhmAycxk4VrSNVV6o2MjWqQWyaQATJnBacXidKobpoQxJgcbaYbjGXoSpCTjt69",
  "key24": "5gDrV7h845mVEsAL6DpkCfV7ik71pS2LZyr9Po5niJWzTbsF8g6AoPHVizfiXin2G27vNer3ymXcKZfcirr7Msxw",
  "key25": "3aGTbVto1awJLzqRwEN695rCNizb8a8USpa9J2w4wfsFi4fyBGajmqrHQwENMZjzr8QjN2qu1amzPtRLcsi4tkaP",
  "key26": "3EY51bv4hnCEKVreky6EsFKs3hVHoWYTTX4VEGLhG9grECQFVs1N7EX26CiH3qWJr2kw7fj1HpahjW6CfHTYveuw",
  "key27": "5xc6WosscX5rT6Kp4iuEmLAhajfXXum5ve4e6uQLm7BxfvTRRWKtpQR7n9jbJ44ncM6DNS4dJvRYTwrehsTtDWD6",
  "key28": "kWNge7s2thioSv9ffD2QpkPiDvboDbQMXzbWyvX1LynqGojQNqaCEAitfe73uEjCgzjeqVi4c2W1wdDNAQpwxos",
  "key29": "3aUDw1zqNr2yXacsB6gPdCR1crfRFyQsTpPYPGS1nGxKrj1XGxUiJLhZTVGJZSX8rNjMi9D5UkHQv8yUgA3GkjVS",
  "key30": "2RerCaYBZwsBMuiRJQ8tHzYgUW78kjT4r5RN9pRayhvJyxhNbb2knnDDYjod2g6rDeFJLbcVeo4k4y2BMEDZA5Qo",
  "key31": "59417jNDwd9yJ7gEvq4mLgvKJ5fMJAiTsn5tDr5aX1ijLVMS5jgEAJCnagtezTcoiEKBQSWNv2BiqCx9EAwK9BTS",
  "key32": "2F4ekkteBNS4ipsdhgfh7CWhyo5Xhjx7c54cHt825NeKf1wrgNwwskWzJ36gETvmZ5kGyS7Gw1FL5sxJygsugbFW",
  "key33": "3r6VpXPdUVMLGF8dcH6hMQLdsAoEB2vo32gNFaZpYoevVhJVjiDJ54xw3HUMFrpm4KfbFPGoiJaA7Ss26xQTSQfR",
  "key34": "5h7k84iakt9krgcNFsWVocJegdhHoFyAfendeTHdBVc4VaFhGvJzDQ5ScQHfa5GkYyFdaG6DV6mjn2dWfrC2y3am"
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
