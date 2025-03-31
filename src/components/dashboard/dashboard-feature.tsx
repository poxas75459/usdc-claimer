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
    "GemtkBD6T8nsFzYzP1hfFF58qdjsuLFipzdNcyWEH7JueaPvfThQ4Y3r2zWmXvCW6tywfthsajgvdaVn4myvLcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gKmbeQADDjPAw1MLXWT7iMZrrcCxbRSe38CQVY4PzrQVr8BYpXYEcLEybKGk87VupbowoyqT4Q2FaVXG6yfcAH2",
  "key1": "2RMpgoGZApP6vMxurMPYafEkrytEVX2UEN6mLyiXBjmrF6ZGh8MU5RHdyrWt4YEJqCHLkg6fvyyZzKMFePk82Xme",
  "key2": "3RzXTwQQh6zX434s3GSKeTiE9iEsvKVFnTQNwJqUfVgBwxhbEoFtzEgKfNJ9YEwKPLCE67bqq2tGJK5cDZnF26z4",
  "key3": "3fUxhPij9Kt1BsEZaTumA1Bv36351EVjBN4CYn45KfbLzHYfvnebVHvMeyTy3dTBaLE9eP1kLy5nrahNASddywqA",
  "key4": "2vwS1UgW2dFMd3DxBjG5pK2KXoL1ytZUdyV7XcJYyYGRZmnYTcUQHrx7Gcdk8vD1moLJ7yJhCKrub6yUnpgoWMQh",
  "key5": "4VGM5WRFr6peTx7u9BZWUaW8hSeNuR7ycxb5Bk2M5p7c1kxm55bfHzxvpnypMydtbKafygJX2ihs3Taahk82rE61",
  "key6": "5ffum4RRzZsA5YRN8n4eDP5AeoS3mhHBRzmUKRqD4Q6TJRsY1AhXFGLuW8RePWYNg9TP18eTKCzVdNJi18hZEzcz",
  "key7": "5DUy6MjXwueg3YCUcUwcv6UDvQGZxqTHFtsjZRzQrHxH4Rmo8tLdbar9PhM3VWDntjG9iN6V6LqwUXsmPfeDJvB",
  "key8": "4qrkjPDBtAhUHcuVAw27kuxQWzaTm51djDaGFTHxLB3FPkjUyGHPUnbhmBHfY44AAYKiaxEWpEHGzMGvcL23CMUU",
  "key9": "4vhA6mbxfaVJvj77k375PpEhc28mDAvBQunVpeXbYR2FTQQFKPV1NEtMHwpT17zCZzD1eByKTY7PfkUcuvpcwCq7",
  "key10": "3ybVj49tGW17uN6MjiXu5Bt3w16EVZxxKbYbYmmpcrct9asEDrkwyNG9eWpEdmkNRiiq9YKZ6F5TpCxrXENLVDBn",
  "key11": "5HvYDsrYJAbm3cdE2Mr4cysC634Th7SBW9UJYGPJRbhgffKAxwYnhnCdAAdkofzQyekxSCtKGeYzp5PeESqtt12D",
  "key12": "4Jm73Tuz3qUJXN5zWNh5s4YoC7EKCG5mg77r2Nn8UuRVL7G8ghFUApxr3bzavqjtwRRbwwgVnbjxNKQQ4Kgah5jW",
  "key13": "4nvR4YH5ttr68iLFZS1gXX1dQbyuvfCX1vbgccj9SRCjHsNc2FmiEjyroF3tJDhv28rB4mFHf5hyd4JDkkM4Pwea",
  "key14": "gFaQRWcpq69DRdjUXiApi6HjChebey2cCCgtXviiYAXmVamHzHGjFCuYkvPxKLhnexFVALyj3dCsvfb4eF9G47M",
  "key15": "5yd39e8yop87PzSP1QmphbV6vMcbDvHNYoWm2cJDx9hodtceRWu6HwDgEU7iTfA2i55xNXaydEfVo3GGWYATyTE",
  "key16": "38P1H4mLzm88rupXDQrTSaSRfYKVfjM8xE3Cghi63JsnF8C3PAM6sP8NR3kEK3gBebS9q7aWRiYxEtcsXM5vZzms",
  "key17": "4WR2edzZweP2hqyMNWKiUioop29jTUmvVMWW7EJD8iDnn8nnvNu33sr4iJemYgfTfbfqk1QFkoZ9LPDeAcN8Tyf5",
  "key18": "R3F5jZZerR4L44kSyXxuyN8kMXfFBdNYbrUaKAgzjtqux9kvNFa8Rw6qGvYNQd382AqR57DXp5fjxwnyewCoLP6",
  "key19": "3FhNDCxZtbbvsGjLEM9JxKAqQEVDNRUrvh5TEiNLJgwnPshtQyfGDDkHbxhREp6PBkDhPwcrWMPi1eQzRuJWqWyp",
  "key20": "2VcBogxvcKCgBZorp8EW4MgVin4QcUPzfAtX8DMGoRmMAoPvGQk8mzD8fLnoHAYnHD5HUTMiGKmXZBKDKjYmjuMS",
  "key21": "KRuQcPNpLeLpg9R8Zg1BL3QR9z19kLimf6LDCXKFSWtGuB41CEhi5E9hGYuTAKLuuTuv1X3QtFQeij3gSnwm8VA",
  "key22": "4pjXZBWMSuG9125t7V7JFVTmD1nEUWRoqpwCJbbVR5zM12JxYgtyUUx7CVPqvHFu12KJt6X2dK8K3DZLuEL2F6Jt",
  "key23": "3WATAyWYzRq4N7oi8zNLZgcxh5k926hadQUvLv3LFRT4wi5gLq7BuGfAHvqRnrYPuZrFvYfnSdDtjxBkyjxoLyk2",
  "key24": "3QF7E3CemAnKRgHXc3HKSt5TnMxEHwh8bCaeCHX59FnPP1GaEafXFjx2JL554LDU37DQfHDtQWiJuouc2NZ5e3wg",
  "key25": "5k2RDzcPPqcECYk5gybA5JSKHb9ErmuNqJAC3u2vZiUAhRy6hdm7dvCvaTuNmGoMGDA47TKb1oDd7H6aC1NmgbE6",
  "key26": "3J91X6x5bCozL658sdvYktykeWMwsUME6rca8mtvY8MSah241Drhty6jP7coqgRJ1R71KkHt26RwTYnAHuBMYP8e",
  "key27": "4YHcfMFaFgtTR5v1X8dbXPyBEwsP84eoK2AYqavz6iHHNaMskxXseVeP5UisidDwPMHuqAWomU3dQJH1sqVbuP2x",
  "key28": "D59CL2RZtnkoC3ioVKwN4P4hhiu4a3B6sj4J9NmeB9SsbRMzuxYQ2FJs7v1BcUGnKW3BLqgMvuS8aekGUFQVnh3",
  "key29": "3VswoRgrUoPHeaCgrXvaExfkUSii7CusV1ckRX7Nd66gfqmLwD5LiKZiSTQwpjEEHDMYvcWG5SJz6N5UdLVnMXLF",
  "key30": "48Ryg7ssu8wefKHdx3fiYgfL3KTTHJYaGUaTiK5we2usREwvWtw94ucFyV8xcTNPawbGUS32tcfR1VDfD9wDQmSs",
  "key31": "2uobqSPJyVavBrWzHvF5HziB5DnWQm99mT81Yo5yLQhw1UhVVWiSCbVuzVVrt5mojQWznuP23MvVrfrrqb218oEW",
  "key32": "2Vy2EHDWNtthd7jKT2LQgcQuDbbKc7FCpzPbycSWqHYjTb4Q2LE5dBCJm6F2UtGnp63oUDus3oxpycxRsyoowQvC",
  "key33": "37jkPzAcwMMHg4w76HiTbt7gVfkrs2xBR7u3oa4uJ3TVX2fYCWXgqC9NefivFaTYAZgknLUxrBUfHTwx9YjysVpN",
  "key34": "3zbj5vZkUAy9Mzi9XQWXdh2wvaWWcVTLh91D78UqSyRK9bL1kBSF2QdEy6rQ74A2jQPoshUQsWynk8Mzzp5Uv6nx",
  "key35": "4w7jDup2Fkrj3z1uCe1M3NvQaRdEwuqL7jn8qSZUMiZPDQDKHZ14QLZ3WonuxxjoRzN65tKyh2KVPcQNteXX2wKY",
  "key36": "4TTXamgiCmT6TgRuFHhKA5syAj9n3Cvh88nowUH3xdYDsK37Z7WdjzkvTa8wP7PsLvknY3a1y5MpvUKLpcszjVGT",
  "key37": "5n57nQb7VELJDZ13hPg3uqVPv9WpLxYe4wHrX9LGFoj419uMfBDdnEXqzTn8j64Miv2hDQ3RbS7yxwrZwJv7X4Ws",
  "key38": "5Wb6DFnrkB5gzvFYJtRXV8QPMjZaYFHUfHioFzRgSRBW4fi6p54s3BVLs9rRR5kQ9WaTfZWsPrdWPMBnHWA8Lq2P",
  "key39": "67MDyBn9Nisbuon6ijE3zP1qTaJMHRyri8h2ufT9csAyw4TrNsBjug1f7AAJF9DwoB9K9wvisjYNkRPE3nPWRyep",
  "key40": "29R8Fvxf3STqEfopBHUk8SyMMko1dEyW18oSxbSfaiytEpbyMYgv93Z43c1hCi1HFkNtLdPkfcBkPkokLvYTKTPq"
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
