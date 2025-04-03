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
    "5Nb76QkarvTtc3PLiuxRsku7LY2vngmCKWrWwtPCue9HABVco6htz3W7g3P2eLUUBgpwEHzicSrySygpxujZBsxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2owb1wpDLYmhYWRcrhtB1A774PMvszXeHFjDJ5kkCwbpVgjD7j5Ji9S66gNL3gGhVrc2dXndkN51CmMa84VvpdHg",
  "key1": "4kBmPV7hZiGrj7VERbDvPhVN43GxXYPRFY5sGSofDq9Nb1GEq1ynVVnVgVzgZ5ZfrQthwRNmtVB67W5vuP7w2Q8p",
  "key2": "3qLMR8quNCtDbRQyoeQ3KFxkxEu1r3XwQULy6tz9qujbGtq5HzExW2Ae8LAWKamkXM5dLSdApLh9nFsQca57UcRN",
  "key3": "8K3rCqzmacq2s3FyLKbSka3NbnmZKbTJPHnuWxqUqdcqzbNjxkn5XwSHKH8CafUumD1ExGxi5wMbW63iZ9SzLtz",
  "key4": "5mSpfuU3NmpYtDpPwdi2BSiEeA8uhVsoDGs9oyzyJYj6wNdPoRkHhF73LEv6PkRFn8MPvByeBkCh3QE6Pg3YwyoM",
  "key5": "3hoXKwTXKNrdvED4w7Li6jGGi3mnr6GfXHjEcCB6QqvYu34S5CYZzbfBbi9H5pph1LYdV892ZGVpsEyfhocGNAi2",
  "key6": "3HSDRWgDZJgvFZxNKg1E1ss4SZMnaM5Joq7EnsjQwFKUevbZKTPQWaciDJkXc1CzqR3MdY6NWZkUZ3o5LJWEW9v1",
  "key7": "4Vp5kCW92nwtNXzxGuNdM7gFTsahDYqgzfhbhiJtvufjb2Jz1i9aoUF7oSQHdSRz6nXvZET6JJ4g2G9D94UNjWGP",
  "key8": "z4sfW3vDCcySTZhP26NAFTMXWj8bsX6X7S3bNKo56n5HspvDhZ4MhjqhVmXMokpJVZsTkrwETRJLvn7hPB5d7Fv",
  "key9": "5YQTz8TS4S7wWqu6gH4t5NgRZaqJ7XP9DBUYtWdZMaqnrpMkEJXK6eZQUZcvphPwGxa5S5boJHaADvDPSX7z7R6F",
  "key10": "55ZKvYKviGNb4ZMkeAPHKEfG4WpM8BQRoAjmerVtK2ALFtZnJrWyPdE2vAzS75wagw9UCDgQbRhJX1PsvVKdE9it",
  "key11": "2Z9HqJ79RBFNTDbjnumRehkTi9nVMS87kizez8X147U7DAGfPe5GtFo1rwusapVVEJ8nj7iowRLNNVMWYai7h2LR",
  "key12": "3aMctbCivKsFtU7i59kCCDmpHJgEu4xqztfFNr3nqrptuasGh7tLndCskSc7M1GAFxKbHi4M9L7mJFA6DLprn4uK",
  "key13": "3dY4zuG3JaeD5WGVjunHceJojv5AszE9Ai8DTxQdvHdRxD9XsSax6nvhjPnSHbpxD3dYsArGRF5DxHbGhsCHM1zu",
  "key14": "7nuFHqWBXqhiij9Z1WSjfFCoxzESnW4N8zdwGgxbpsDiZuWcs9bhM8Vk3EmAhhpctERBjZN62REzHVid2t5YGZq",
  "key15": "5yrdsEYy1mWTMYa2RRWXCBRpnyM5GKbbVkcGtEUW5sCqW3brgt4bWeYkdVBkxJ1DLnXb7skFJPRjk82bBAFBuJpg",
  "key16": "3rZ6TX9jrAa9SfkNNpBxULn3rN2pwUT986D5BiXJsHVwjLuaT5FpoMzbnEaWiBg71zD4RGm2yL8r6ud1h4eRY67P",
  "key17": "5jor1qj3wpxfBP8CaHvxUVtfLnD882gdBnao8a7786qwLV1bUZKE43U55wYdMZ2E4aiAYgUZEykACvtubHZ1AAxS",
  "key18": "2uPfY3j1f3ar9N3aDUKLLbwLUbbnfWH1eTdKYmrtGeWNuVrzpUphhYRn4QWp9jNzxJSZ4n4M8TkYf3bkeYBbNog4",
  "key19": "34yqiH2JyVze9QrwvsQETyRBq4VKaqW3QxkckGikaW2cWF6Jx7nLx6PxAXoB6oS71wzcxhtk3tuRgWRSUNmb3dga",
  "key20": "3tm1qwTAQ3A9ynReHJQVJ9JYwWbvBEdYGdJkLW36rVAMjH1C6uFyPZ6Cy59w9xuU3SNo8Bbz2ezby2o2xQWRQ85K",
  "key21": "4fnvTUYBTKidQz4Nb5gQBPwWtp57wvZDnqg21CuvS8hSfEE4ovczEuH2SkJeLb3a2AgSGxSCxfaUVx2WFaUCtM5L",
  "key22": "EtnLTzNZMvuTisViWtamvZH7Q2qoZmafsJozRokwzkCGX7YPp2PXh9LJbUyh8k8iSGq8FwjS7haWZ29LjDe8ijT",
  "key23": "4HvcDvECyJbaDMxRZz6PRXvUtHQjFBHauNPL6sFfaa7xz56mbGDjgQL8T3N2T88kzkAkEpWVuXe3E2C5SXvRdpsn",
  "key24": "3QPvQUqEQfVnciFAdCS2GWefaNdZk6AdqnBSKidaQ5ifn7TgZ957x49dH3nizo9CYij1vVnymPd1kYvc5egaAFD8"
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
