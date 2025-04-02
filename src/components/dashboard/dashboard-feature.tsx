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
    "2oqXJ8xzS72D4Ru1uwqbKrVtw7jenXBsgEeeYNbkQXzXhHSM8wWrtXB1HcEcuQjGN3vJqo4KTS1bP1ne3AG9MsBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hE1B8LVLnd3iBnSYxQMKuhSjZqju199VpBqpM1ecZMNMKa56MP1cFxRDzpFeeGRpFzQDWL54RXNjcSd46FtE3N",
  "key1": "GG3xYKneQert7qpzXs65Kne8ovDdTNQAT9Qqr7Gi9kmFWd74pBK3CUpJH4nhDcbXUg9kYaWJ9ppgBvZJJ2QiP9o",
  "key2": "3ZMqBvX96L1QJmu7h4G4VWBkdWA5GhaPQEQkNVgN9ZUBrkhoc7YbWCR141FJHLZaMBChaBQycE27urWnu1sbTXi7",
  "key3": "2bG9KQmYhLmHjmTUgLaq2mUNjfeHvi5V7uZaeYx7Hya5AisgwZ3yA31fjakozYjf7vXNaKoLZzn4JzF6NQMBwm5y",
  "key4": "3qee1jp3CNKmd1qRo6GnoHq8HkHrHuCD27mLK8dzfJGKEdUw8Dc7TBw7e7VbJyWpgKxPxYpW1JfGnHDjHcFakobY",
  "key5": "24N3x5gvU4fmuXFkMbK9wp55Ndut9cgkHPdDwvtpUbJQDMhaN51CUL2npeb9RY79wJUB5UHPVVVEyo3vhWbm4EDy",
  "key6": "38zECGQP8AmFNrCHQsoPC8zURsXBykYwHEuuXZGyCgpttmzszpGhyntUmSYEEhiZvgqQ6pRrFSDLscHZeMMH8XVg",
  "key7": "2RPZnMmNoQeThWYqn8Si25W7MijaDPUuCkkaSVgJrynkzEghRL9ZQh8toDhhhs5g25RMR1M4Lr2Fjb3pFweYQH4z",
  "key8": "tA4dGFTSMG65tVRLmhmBGZeXmCHHfEt9JaLCvy8R39Ee5udHK5UkEnh4iM7WkkoS2qtRXxHQYAKn7gKhxCP4bfo",
  "key9": "nMzDUuqUgfkbfE1izFF1L1bm4uXRfjoegX6ZsMWy2Cih1TVm84Jv5GRRCpgKBwv2sb4gAbp765s3dz3SxTLjmii",
  "key10": "5pm9zUqa7FZQ9JAgKgAiovwevV92TeRYmQ82j1iFQujFaWGhtqXBHuUZ6h1WESS9sSaoWLHz6KmiTAi6kWH9HcRW",
  "key11": "wvgoeqN4XvAMVwUYLEXiv4BhqQSLaU8rhiAMiibxZtPxfxD7b6dJA2HVHVeoQ8a8dhs5BCmrj4T643YEUYzwpbf",
  "key12": "5Kk9QiUPTATccXjyKsEBvwCNrngcLNb5DWuVnKNMswy2Rjr3wfHMsew4VDXHfjbu6mKv6iYUUyUF2y3dMMBXCQRF",
  "key13": "2z9ZZbX1Q6UvB2ZrhdWpgPjBiAH2AhPu29ejBwhfSPY8q6mJEqvouP9YUvGxRNCaXAMoYEpNWkGgErLFBuS8BFUP",
  "key14": "3Ln6yvF6LxVoozwy5xmHozFV8WfT86ogFfPGbZJy582R3MEcJrQmE57NzPX275Ne3wsm7jJuYNFTKeJtRwmpvRLJ",
  "key15": "2HcuBi7nyRtBKkuRwo6o4dhbEUXpkp4yEyZ2NrbNZtRWUrpbYN41p1MTajhAV99WDjV9ABKsyCkxAd9B8rxMb7eD",
  "key16": "2UyJUS2wyqtPApsmLvvECX22L2YoxuBWTf2BdvGumGVf798t8PNqTk7WSkBRsjsjeS88QrDTXHetEE2JLRp5gfDF",
  "key17": "4tCXZFXkWXdJ4WJZu5xZR6xEQyGyU8qSezVRSaoHKfQtUA56HjQq5VxuzVaHJKjhEaEjCDMrVcPcd3aL1RYc6jsN",
  "key18": "38z8LxysNotNuN8y967U3X2FaT1hs7nxJVFNykDhVut19Bq1GLqRcoCp5QriqgfcesYVw1w6vZKHhC9b14ZVwUBU",
  "key19": "3KQrkZpJ7VzCAhHEur47bCHKvV23umoAs9QGerhG1acddqQ3F2EagiwS3z2yc7cV91mPTwrwGxcL2sW9iaA1Enwb",
  "key20": "44jVLf7sMFTcYCMtAgMLTcEx2jMMUqzxURpTMqxsv5eJVMqkt25aKJ8YZrZ6kNWKyAN4Y7GtwpeHDTRDUYv8hKWJ",
  "key21": "5DMfKgeLAji29RMYD9VLYC9KBma8wuUBKvZ3E4E9jkWsArFKCEuYfEHXLLUfUvM95GrCYG4pEg2AQ81KcP4mrZ3Y",
  "key22": "4NaDcbSZYQX4mn5iA6cueoK25NShdYnfcia6aTTHSPscATz2UHyuF6gZ8XniZUjSNrW96Puwv6B1Gkqrpu1vRSsy",
  "key23": "26G67o4NSSYkH7RsNctSZhxCumk4K113vF7ZkW2F4ZAFezp2LQWitxSgZzWg4DeZwyDb8QJ12p852qNT5rTzt8tQ",
  "key24": "2g1FgRNHbufkN8HDcHXd9viUnxT6PkRiZ1hFg6AJpxmqYi5MRsajBoqJLiV1YmxMn9MvvorCuZnh678T8EJwDuvU",
  "key25": "4H2Jgb43Eum1Wj5TvN69k4QJS3xdYzcQFTXWYG87nov7pjLm6xmhSgPizrXP38RueNq9LvNGyrTym3NJKg5GyxSB",
  "key26": "4MuJk3GDAYjzrNPGfbHVCxYYATn6hePZnwGKjnhyzy4bCyw9j87NxUrfuFVQD8DiVr1TzmUAmpK41Xwvg9eabyvV",
  "key27": "4GbEe1z5nMaemPpQP3xHhX9zWsptD8w8KqvL9MP2qjBZf4p9XPtgnr3BApa7V33XWET2dtrd6YTYWwKYfAHFxLE3",
  "key28": "59KcmpQXEBZELPtrKKrnHBwNdCFcyRA8mjXBnNh6Y6y261sBiftfz1TbdPm4N1DxYzqu781yERduPsYYpi4qhe2b",
  "key29": "3wZThhk5EX2vCpR4fqJNS7fyY1smC3ur7vbg4jmuPKqy7vxpxivovP6A8DaAhV2GegQe1FJZFRWnK6JVujNYNnNw",
  "key30": "dSqdFtWhojf9tdDAg7KgXG2ZQUV5bovDz5bHFbhkF9ASmoiqq44i7ty6Ss7pW4mnqgJFcuHX9eyVm74V3bowxBG"
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
