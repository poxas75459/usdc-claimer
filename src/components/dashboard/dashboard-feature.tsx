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
    "3gbtZByX1AhAVnVzohFTp1oSkNSiDGdZYiAsiDX4pfaH6PmMn91iK43SPgbYpPQoL1aYYPURanShFyL3s2uxMp7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YHu4Tp69bAjp4G3t68BTQXbSCyb4XNCFFqDJoz7AUWkd7c6CXugkLHWXtYtKiKC4Ki2QUNdBzJhHPK9jFsFCw8c",
  "key1": "3nqLn4BYnQYoCm6m2xcrwwbWizQgHs5nkiXDKtq7Zwm5NcuaKjpC4nmpXcyU5DQx9V3CTezZPd89hGL9dqPNWjDc",
  "key2": "5uqZX4uc4sawFidzngBSmkHie1pKQdpzo9QmivM5L6iGQ44assBVeZamGTo7jG78FD39TPdm3BmzyQyxVYYEJg9Z",
  "key3": "64xRRFyFW9wY17uxyc4WFnYucuE28Yn8LKNe9SijR55Li22t7eP2PPcNSzjiEwrwWzpZnnLVeDQs2k4PCNqpAZpi",
  "key4": "5Ld2XEJRsZU2YdWUrEpNJgndhicgoGrEy4NXkn2M5x5iiFsfu2PqcAAYSbR17t2F4zgNHBNJ4oDm9qQ7rXJHEPkv",
  "key5": "2Jwn6jBBhS44qENcjMNHqd6GVt4aKhWRg3H2dosV1LNT1LMG3HhcMauVkPHywswrJgmjVBaMvNRKubm2hyQBXWTi",
  "key6": "3DgPP5DAWPA6EEnPpHmKyLh1hpgFRhDrpL1g9CoH63c7sQ1a5thnsjbppUYoQWeNMmbgbyDyeMh2sNEwmfA69rAJ",
  "key7": "231ZzyhjmAfVBDKG8KbMzXPoGJ8SVPLYPuFkKANumgkYFuTVPmnemzKr5ctE8rQDP3DScYC13UihW1PbKEYXGXYZ",
  "key8": "5LMwm1UMPXu8wen9gzo3Minc7srpSWseU5BaW6mkwG2KnV6YhmfzS8fCsmRc6oPsvWkZGmEzoixzP69Dri7Rnvib",
  "key9": "5CTpVYAeHKQCzEXSQHuqwAJw9dQyMJdzgUbAaVgsMxkFH6cz6Fv8F8YnCGgDD7JkSFUsLqZk7VM5jZv8vn4kaQNg",
  "key10": "3wNssHv9Qq8rcmoDy9SKvuAL2f5RBFgyfwydVep3refvnqWBQnpzWfXpQqZ5WcoWzRRxGy35UwwoyzHg7BshXy1n",
  "key11": "5FrwaH8ccHw1N4AMeBKpcXhYt4D63nXHb4h5dFqg3mULCUdvQmHZLejoAJgcBYiQfQyjoq5Z223qQ3fkY3VtQ245",
  "key12": "3rJv4QKuZxMHsQBZzZQvEDMrgxdBVUHbyGX7UdM19ZzBeQxuTtYgYW3krKHhKF4TjsCc5p6NdAVuMGCApF6tgiYf",
  "key13": "4XzJVZwvFyjRLCCKScK5yDTtXMBdS1JkhFDFNaMMvyCBnbB5CTz7eG39wP3C7YmEPwci2gPuxvfkpPVCwQfbbPZo",
  "key14": "223ueoC85UCqZRa61hfbRMNkYuSMrQqKzCjUE5QRwiYNVBhReL98a3SEmaRoZpQNXuBPQ4fcNxk3iQPrX5SQqrn9",
  "key15": "5sBgzwbAcarbND6dTvQN62ZGnAY9zkLtopz64XgT28wPboYwxQDSvLVuJKCT4ZeFYb6e57EeSz7bGcMNS929yiU7",
  "key16": "SXT8Rn7NFEW4w1fM9hrDKwHBua8RcafmrZk7GWTXpdebXCyduH6MfEX2yW83KCNj1P9EvjPjSwKN1L4nvTcMxHe",
  "key17": "UyQ1qCMTjhV2RMmfuXwJTUoxRRXW8jaVmwY7cLR5hF76rsV68wQETXDX7UiongPLnG96kwRpP7ta2MVgd46Jt2f",
  "key18": "4Y286Anhabi2p4FMpnDqRVQaWJWxsWtNmzbDegVeGpxmPsKgfBb44tNkRFv8Q7dccguicYxzqcGZZH6VBnRyrRYw",
  "key19": "5hHgwQa1iKvYn91kc4atFAmgfZAeqCC4ibtNn8pCKnapvBZAhvJ6bKhjapa8oEz1q5qkjcNq1RgTjtS9NSruZ6Sw",
  "key20": "2JbYoeVtNtNnFpNwnhywXRw2DbFeEzsoKHcoz6wXDYTyEgEyVRXe7TuosB6tUJEVyVq3VxjUat7w8ANAodTUziPo",
  "key21": "5HTZk3w9a3VnwrK3g6XbcvmHvySdDEZZNJfr15Zj8B7vvf6hz9r2BqYQWt79SrE7uThVkJzzUHRAjRimBcHpZnJD",
  "key22": "QLRHrx7XVLjKbEAwdox2BKa2GLR5vy8tGzkFnzfTQ5uMogvsy69w9kPwcR5yTWk7U4ApXZcpibMnREfX4tKRCqY",
  "key23": "2bZSboqEwmXaNySYrv94vn6xoppTVUu2PiQeojLmHWcVZZuoczraYACN5hzU9XHfB1m9qScnDbtnex3A6UpcdWfS",
  "key24": "ryGHWHiWiqiN4EqG4Rk3N7PMen97WBJRaGJQ2xCLPXhzpp8YPGRMvt21qC8K7Pjkj31ioJ5BqTuCAJqN5ato6tU",
  "key25": "5TgVYbwbMCcUhZYkzqzTHn4KTd819vLZP6VrDdu8Z1233JorDDQnHkrwQvdUGDQEnvrKWmaZ8P5PcidTxdYfoNWW",
  "key26": "33RSCjrKrzsqXoDGVpyBqJCVH97LLAh3pyjU9NMVEhf49myPXf41j8mNDCWMzGxaW715tg6JcS7SboXVqxmKC2GT",
  "key27": "3s6KFPRKCVyiqxRfnVgDnC6ssrnmwSBJRyy3MRtPP3LfymPYZp8BWxm8mABt7aT8yVm5qx2cnczFGysde3N94MaF",
  "key28": "4LPDpqkFwFPiuHKZRch8BGcHJ7Sb6TZCk6q7prt26cAmNqSSCteXLk2MGv45Mq1NTjCoggsvpU8yFYZmKZyJvJZo",
  "key29": "PuBAxiYY1YihFwK5LEtmbcNVuAfF8RGVZd4miooaQ15MnUEqdRkYZn4A2oTe3qZeYwy53HyouMH3Z1kjPSqCUoX",
  "key30": "39cjemv8TYPgZnQF47mFDxY9LGkG8G2h5U1X6SDb7eD8TGQvGkjvKZHpk5d9JVVtijecq1ht9Q2VrL8vaQ7YueHj",
  "key31": "4kPabXoMgGQd7zXyroDD894kNHTVkDb1GpvdrSiVb8gZKM6U1jLYjeBTxT7pj6aCtcWK6fP5tKoJMWYjYrMoJ182",
  "key32": "5929mfk55YhgXanBiMvAaV1SFUyih4B93eKZ4mViWaKB8As9jLd4e8Zi9iuV9pYYfAG7zot84jduEZdhCKrVxmTP",
  "key33": "2yBvm7LbNkjwUqzqUDkV9EQGWnw6s4W9mRYM29ekRV45xb24J4Hs5dYKFd7FaBn9VQ3Hs3qujZFLcoraz4UT6HVE",
  "key34": "4Kz1oAWxnDRH7scnp3sDzx8xYAjhKZ2f9WkiYx9yzTG2SaLYo2AwqLDf6nbeJEeKZf5oxvGbbk6PPJe9p1naUHET",
  "key35": "4fnotqrCEgAeWoc1QhygFroT4hcPi7nazRAWHgTczDgo4cJkhD3GQK4n2bUg3rUZBL3wKZ5HYLQ1KqeDTBDpKmrE",
  "key36": "5pe52WNQwYYJqL6iG1kU8f8SC6ZmtArZ4mJwrcaEbPFRkqd6yD5hqPRjWmXfRYWpqe7ZP1FZ21d7siLYbDSoU5H6",
  "key37": "5EHV8zEzrnDeMbMy4u1tEsk2gC24ZFmftd96ajWYFUA8PDnPaCi6Htr8r4QYuDKhCQTnzrmANd9K7dM5rYcoTJ2H",
  "key38": "4yHbnocjtwAFm3dESDoraY7vjbm5Z8ZR3L3vWnSM22PXrz4qebSEmsF1XTGWTYHbtQ9io5DCDTydJCM2mLBzeWWW",
  "key39": "5qti2A1WeNX3QCnXXbM3YvhbhgSxi8gg9cosdu1ejNxuxkC1ZBY4RRCp2gYLvN99PBYDqhVpCL2ngAeAmYx1fWza",
  "key40": "4jgQLR2DwvKnRFuyCn774XeXhHd8AoWMjy5USGh4vFgYmXi5c9BTE1GhdJ8kKgpACeqe5dKbDWeyTx6X9vFeccq6",
  "key41": "4Wo8Z2PFubtE3iAx7aRaZd9SWVygxb7Qf6M3oYEVnU7GEPiXDnU1TMxWuj3iTx3sCvK9FViSZSUvPBZ6H6of9mcE",
  "key42": "31pPf93M2s96nPEfBeCuT6HFRVqdijkjpJG4GYQtnTbRstq7JVzWujrD6eVz6b6EveSYdQdc2Fq76Du46s16VWAu",
  "key43": "2YTrAEuGj1euFdfuLtgCY4hnk6KkBF5VoEC6i8H9612GYWEyuAUhdKaiHCZGneJpCcWBKoSgAygRJ7hNP9rnsj43"
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
