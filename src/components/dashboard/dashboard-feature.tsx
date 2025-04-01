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
    "3agoDrNGz4xk6PYdUXBtoXt4RMxNjQDwAn4ZHU6QqSNW7FFigZZvgJScwHQUMbFnaapo3ptsP6jKnyjBufZTk4Cr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1VwyauV4nBZ7cagEz8LVabFjSiuBnp8YA3WzDZTfKjxfUcWkE9VonyKRXrhWPcimshmjFog1iuFRdo1J7cxD4U3",
  "key1": "jvR8wUNZmY2vewAwzDE49v7hh6F2Uv4Bri8jtoBjjMsxfSK1BoPakjRonxDArELmfdzAg6JFbr5MsSZbw49aSQ8",
  "key2": "4gMJz1gUVLBaTgqapQFtoe4p2UqosNZGaRE8VzHSN4rFRMPzzqFx3NFp51JVJaSyQ1SwJZfiChgsHkt7zvWjnmHD",
  "key3": "r6xKP9YZjHdGKxis95kz741J4sH5mTkT3bv98L6MNzm7WSbbKJtQP9cVLEJrvp5vaAfZgbPWLhsFKLTSy33chTB",
  "key4": "3WxzACDgdvjAt8otYwXxSczcDWpvCV14J6bMjrwe6HoAUcbyuz5k7orQiGxH4gX4irAmNQf838c5xNrBFCZQZEFp",
  "key5": "64zYod4xUST5ux1o6ULf71hS1PDQ9ECSge5EVEfawKqretohEswA8zwjMKwoKhCF2ZDfAMh8uYYPpbpS21W68Hhv",
  "key6": "3GzCNdVrzUAzsTUZBmFkxst5AsosegaoMXMpiCJcqtpLmtMEzAiKaZbAogCQQTLSskYATN2nLxmtWjsroRtJeYnp",
  "key7": "iDT2iuNog31dgmAwbaBGCNA3t5Z9gzrFu2AN2x4ExWq9GmWbXxGwffH25NPsHjSZQ1YzvDqH2svxxK7YRsgvAcV",
  "key8": "GihzquUEP5BQF4p84Ea6NqjPWxe5ErhpatyqyegBKK5B19H8AULCndDcNiVYy4Y1hD6S6k62mnU5trxios4if5W",
  "key9": "4ydoogU1X9PPK7vf4oMFuAB4QoaL9yRG3NYRGgXoH2JReKvedeJFob74h45jjX1pKhWqFygA6ya4CiVBRRkFqYYB",
  "key10": "38XTJnifS9yQeoF1AGcY8mcGLSrNF1MUhxB1EZRnmDPvZeAWgnrDpAtgeHEY6ZRTczL3mh915fzCncrYHsjtDmJU",
  "key11": "MGgwDKqBHegwLbS8t1ihd4fx3j2KPM3BdjzMCrJu4fotHpQALTMHhUB6v6mH4GYdrUxJFrn3LdttCPkpsArujUo",
  "key12": "KPgsG87EQDahWbViDozaUTLozBGJMx8uTyRmnJ9ynDpLRJ9oWJexEEmR8NtYYDEA1QjQ54rA1bzSdgev9hVeLYU",
  "key13": "52x5T1oB6gu7vsrgvUYJ2iHnJ4kV1aYU9TKt5jg5sn2FQELcwCUJL43jFCBeD9XFVYs6J8cJQMP8Xk4YjH68NhGX",
  "key14": "679haQsHteFMgbMZCW8gKJ4BcjvGePHnuJtAmhNuuEzRsBoWXQReaZQyQALufxXimQ4wnUankbWiWXKbrvCLPm7U",
  "key15": "4opmBzPgV8mSkg9LoGCdvwuseQfHFW72XciAf1uE2NciR1KaHMWSd1xGa8sxZd26trQ3GyLdcMVdSY8VDxAPDmrV",
  "key16": "24vPZ12VNjH5e6WQkw7MuaGd7Qur9LJUE3fhc3JV1wnNLTZmA8c8mJX3bnsysrvSNhzFHDrQYwUJ9oThQj7uqq8M",
  "key17": "4Qeuu1bUP7xKArniHAPmZ9RdHp757FwVgmZMcUPTrxgBepgkYfdynv5oFVRQgiyfbhcsaeTMP14SbwcuvJMhrFqW",
  "key18": "4BbKYDpC6qb61f9MUXcgucpUD1gMaXb7JrjM4vPX4pnXpjMSH9w4L17NKAZbqqyLjfz7eXVkPS5Kud5RmJgVDMgW",
  "key19": "3mdjKrQfizoAN8CFTm2eC58Dp7nUG3vhp6bt3YCVZH4ypRMryD1Vi3F8Lm68xJTATuPHAWzF7yNVjc5HvvBLmj74",
  "key20": "49vGqgtcybqxr1kS25eWJCEqUGsLHYyfXcUsDA7R7FHqn7hrAFXN1GVxMxxT1RJY8sAS29S7sorEPymUJrBD7C1k",
  "key21": "3MZog3oGZ8ymtx3u22QDRhwww5pq8fUD7owWuUE47qXWZdTbqr7wcBrrLbo9Qw2UYj3U4dMoycxsiPfFnCZo23K2",
  "key22": "32hr7d2QF6GwKgHX2qjEpexRsoNKAsNEjtPcvYzR4ovJrzZ8XXsAheADS7n5EX3NhBskzD1E9yj5AXCW2UUkJs1W",
  "key23": "5u3d3c5QFTBv8ZqLtRQvVCjeP2WaBmEjSYZ5niQDtuHSdChf58cju9BzYEzy4Y4yD37FYAbuqbZfDVUqMoniQ4ep",
  "key24": "5rSHqNwavfLCQJTfmZ9yFWeKWjD3KhJiMb4wUSjTQB6nN3YvZzobDBZfyR9Yf3BXXZ3mrmYZeRwhj6oCHQQDEdGV",
  "key25": "3JT1Rtmvpedbp6vFTjjCp1wAdLWEX5C7XobYFvLWWXF1xP4AGuerg6MwadTyrghyqRfsx5aETLUZF2jMr5wc8k4d"
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
