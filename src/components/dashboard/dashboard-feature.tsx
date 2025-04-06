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
    "49CFCHYsVwMZzPbPP5nExXHhYuXmJdH25itjivQk3KnRhSTT1Uc629tgfThytfvpynQCGkq3BiGCQKCUHWyPvLGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aLaKj8Y2573wY3dj8NJGkZxcMeFvqKJXCJmXGscKMEUHCFWTz2gEBTs1RZLv7VVY3mMyav2rFbz9H82U1wZcNwd",
  "key1": "3KiVq85F87tsCd2vMMUFku78BRQ9WW2uokkDetph7pXgLF2uK9imm1g7TcS7aUgHrQPGmCvmhpc15ycLuJb6abXM",
  "key2": "3sdu5ob489iNx3Q464nbK7VbVs2ojnf32myxQqeDzgjftp1GgBry6t2ViyknqY6Uym383sYXyuMBstvk3b2DctqL",
  "key3": "rA7CqQwxYbSMC4TA59cbFyovkKBC7KBpgZe65ZS2ErE2eViBW5fkkfvUWAxTmb2mTkbkSvfpgxr1X6d3ZfYxoxJ",
  "key4": "49tRpgC88YNhhHs8s3r1uuVyNP81VKqxRPkvxK5H1GQvW9bYeHGFocwTzH13FhTpWSCvvd8TAkAbAkDFkhGhsMBj",
  "key5": "sZCXEFmFxqXs4fuyxbjb477ZwAL8QtAxXPfFG5pBKJWiT4oe3Q328J4hZ9HtGQp7VMRGyv6Xpi2wpHQE3zaZVCF",
  "key6": "4LxHsvxdTZaFti5r55Cb4yWNbei24Me5SpUus4fjUArUCipbn5Vgv5hCW38LrPEGuNuYxYFTiTheCMGtbCeKkpVd",
  "key7": "2XSzu35d9qP6MxrdfLtpedDqNLvwxQ5Lz839ecGXDvTkJLTAgCDnV229JxA4bKd7eCWRXsv1dnaQDrBUo9UxHR9A",
  "key8": "2uNBwzhtD2aBEwNaR6CQVykMuRCqs4vt3sKTEdMW289NzvhzdKDhF6y23iH17YnpzuTXtcyrasPS6ZFCYZ6ge4ph",
  "key9": "3ThtFLz4ueFhq4sverb9YMaBRsBBgg37buAus4iFmRs1rnrkCufeULajxWWMP55MoyXqTgioKkV7QRkB8EXpdA9",
  "key10": "66vYWCUGjqZXxyyDKiqX65UotqrcaQVwNkAsqDSBhU8DUK9MDDuCtxGuDtha9mZVzU5s6tTtheDwhg4HXE3NMCZ1",
  "key11": "5P24Mdjgbq9Qdw7muWzVdEfTuzivHzdkB7a6fogvYg3wAtucb5wUvGDtdTBT2u8XDzWFn7uyDsqMT3kaiHVK4qFu",
  "key12": "3n3AZnDjPC9QTcWLLz8nsLcHbuiUdQ54GUQyGrEZX4pbLtYdUvtK8RF4xJ3D85X6R2ihNrxyafX3Vnv5dmByYho8",
  "key13": "39G52WvLrRhqxKTVoQUKGp3bBsC6GgyPwmo5CCbftfYkgm9pAZRsMuXG3S7nKK2FVdmHRUQZy4UkqXmYghV6jDsD",
  "key14": "2YuAJ1iJonPz2sRLDbsut9aJk3caXEBBzgPzXtmuqz9fhCgdPYGG3HMeEDyhQGgiyo4Q8aEk16Nts4Mkgka1gEzF",
  "key15": "4qj7KDzG7C5CJxmd1ZN75EToB8BHhANcvGkgRXQQXhup2NPj2M5REiehg962zg1PD6uWdSdSHKoyV9miDTqYeZeS",
  "key16": "5Wu2hNWor1bNqPAwBQjV9TPfqqy7u9dqP3oWcji5v1oKdrVfNwsHQ8KZyhfRUY8LGo17ySkZhtp1iGJ6iMtF2yWh",
  "key17": "hVGnr1AuzC2stjMYWQJXyDAE36SeJrGhaRaC7PDbN4BY6FkQ2xoSomrURieQ5gRLejyxmHfZdis9eRTan3oWQ55",
  "key18": "35d2NjeZUySBg5CUy2RpvMuvxEqBkFGr7jQ2heZoZ51FcSuKbtjUdUug32qCqRkR3yytMrB1beRpfW8JXVY2m1dj",
  "key19": "2E3rRtXw1PRVzt6g1J8WHKRYWMRR85isEB8bpecyNBv1dyzpWcZBU3APa9LGLyXnwN2jUzjeSGHxzqbkmxgV5tdw",
  "key20": "57SWWHqJfM3usb3a2fcfT23vMWzqfqafPFsNkpL66BUc1bQjBbCS2xUeZpiSqzirRMJiccQrbNggQeqKWmpAk39F",
  "key21": "24FUQJtGzBErMMrDgt98s5f6wq8cdFZ9npiwV4og9LMzQV8ojuDBkAGbNcR7ayeuCEPC34w4VquGakL7nAvDHFFP",
  "key22": "5394pDfjWyBiSJ6goQFGR4KDmwV195PsmmStRoNg3qXcr2xxHFbWgoRRn9USb22Ffn6yUuU1kT6BNMqwWcXWYngp",
  "key23": "4YCEELTKPB77hE6Z1uyBcCSVq8pRVxLMJDHeeQD2pQSxER1gXMVyAGfgxBnSyhVALXQNoaFuRYTZN3PpBWoYuppk",
  "key24": "3gxdmWKA6NSBDGh5SABgm4epHsgMQjw6mvVkyCoi5oVUu9gxifAX3vWdjcQfkr9TYd5rKaX5SHd6xxyRApp687uN",
  "key25": "3heiLm3cM6WdPnbkFLD8Tnjc8hft5WnmDzdh5xEr86NXSoKgkyXPsPFFmRWkfNTVEQ8tBXiC2522SHd1hxSZ9EEi",
  "key26": "2fXDuM417pdJTXWJwZRV9NkGeSsFzGTYc4LQySKTPJsEtTyVAvTrJKEPUbjZo48YUbTAXkDNi3VfiK41Ws8pW46o",
  "key27": "4w7egDxqTPCqfYuznND6LoQ97RCUQZFAXuQ5dMUosqzgSswr94v1SjTMZ9YuFtcTNXaXkCeyy8D76trBvvdLWzUB",
  "key28": "4Y9NBGqL2sUMnkTxqbtVvkQWjRnFMqy7sdUrjNQMimPxqaKVgC2oAMp2r721ZrtTwGKE4Dxn8VAAanNGV6wP7o6j",
  "key29": "5up4GwrwZ8vqRUNytnrV3pV9Gecp1jiYLJNaWuj4sriLfwBR2LojcJavP71NqbE1CWg2VRF3M2zKsAaYPhUR61Mr",
  "key30": "4h6avGa8hc7oRjRx8ukUA7ToaYPm4hog7h46ctqXiKyQMaQAb8dGgddHti6yMja9n7Evh2TjwFvfTjHC5Yu4jCjS",
  "key31": "2qon96KHeUPSfqu79R52Zd3tx5QSmWM8tzViPvQtPWtEsBj8m6FjsK7Zfd9UWsvLktN9vKssxnyPzjyQLQ9yV9mq",
  "key32": "537Whxx9Xa3T2TyzzRF16TWix77ac8VXDbtegvS5B3z7Q9TbfLfLcpMDPUGUzV2FVXyi6ecbQRngfgzCeesxBtf4",
  "key33": "5HmzaUnoiUMf9wQY2SraccAH7Tz11BsDncCSmf4zgGRQW3AyvvUZCXpnXswv7H39JaVGWfLBbswgHHaNXKtWAitw"
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
