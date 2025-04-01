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
    "46qU1yoXHbDUgKvYij9ohBj8M2Aar1KnAEhKL46RnkZNMChf6rSb2iL1MYV7kLqR8c6qUHZJPrEjEbc3yjMV4Lbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "599dXQkqmFxtUmvTpSYooFAX7DQoHhUi6LtNMsKPVCzRcHQbTeo8JAS3ZcGXKDZ7C4gJKAaKCm3YScA5gjRufNeL",
  "key1": "4d37Kmrxzx6uopnEfh3Hgpb8MLvVSu6rAoeq2sdokAS9bQhoN8QHTC12zcYWXYtrk7eZDf1bX2U8qs1F2cpBppFA",
  "key2": "5yXPF7x9gJKLX97QScDpZBpdqnHq5QCpdHc6W5uEJNKT7kc2x3NRgvS1jsDRGHeZdpGYw2s3drfC5SVdpV731E6J",
  "key3": "2XGCDvsvZSpCMtD7NUNrS9ALBVGDNuY5yQSU1CeBtG43PxBjbAkLaAen6Pkb652hmeDea6HcBGwDrguoMvLxNb7c",
  "key4": "5kY8Dqg9cZJP1grUDMX34R4y3yotCX3BT6uCzHeBGsPsKxap5zbXXemsp7QyAQE4uA7shfNhFLDXM5JeffpqxrrP",
  "key5": "63YSusfYJgusDbegF8A2JbnFoTZX65mPgsUCQgU5yZiKXPQgkgJGxtHt7zotZP7JHbX7rL2y7TxP8hB28rjhe88n",
  "key6": "4zMuVWpJ1KFgWgfd7sSkaktb5i6eWmfiyzNAnAviY4bGA4CMd7cukjdQsJDXbFWz1xPSj9RTo8fG5j8k2dyZmN8E",
  "key7": "4d7mGF7r66KPA6nwEMszohLjtTGQoDUAntBNxUVbrTBHHv2V1HbY2ALZNDCnPBPLWtb5DhECpXBTN25rKu9bdGx6",
  "key8": "4w9sjJZWnushLCUFsEMmJ33yr7z9bt9ptibnA1GsYj4UVqfzmqAivnEa6onW1beZq1QsmsQ5RzxF5BiPe7kfPE8c",
  "key9": "3vWmMJVkxgzwstZWZx1XrJhSw1uZmj9rhvbJ7cWsN6HPNx63rGJuT8mQ2icjo9X4mNwpXo6YG8nVQh3AWVHC9xpr",
  "key10": "531ahqNMXgJK1As8ccW2948kv3v9uRKfMvKwAyNvS7SWiFKJMP5waqhTaknG7nyYyreQdgPEPtZTiEi88t5aRSJe",
  "key11": "WXD6Rzibe3ZxXujmYf37nvc2XNj5aozUNofqssjAdM6XURXweCC4gFQxTcEYppxk2ocTpu8gKTyBsf7LVDAKw4y",
  "key12": "3nkkwzvtTmdT6BB6kMsDpDPaRdsHnUYYbpL7Ww6SiQqduEh7AaQf82hQVcZBYotmAC8NkUUYd49VZfppmugRX4bh",
  "key13": "2a2URmaejGZPgkLPNQm44FpEwPgGUufcrH8bXVKnhG5KLbVZp5Ck6iB31QsXTj1B85xQ5iqax98CvAu2SKFGCSWf",
  "key14": "5hZz6boUBfPfQ4j4BBNdYbuMYm3bH8gwLT3gK64WPg1MXrp4BdzNRgxi5njjQq97yueurPHNozbC8hDTPihY7mMC",
  "key15": "45awf5kJe5JqprwiR8SdHW12FAyTHykzWEbZDe8nS6SmQtqJvebz42QczQz64ofxxVKo7ugoG1wV4ufooUk2Ch7k",
  "key16": "61RF2yzHV17TbxjcsLqusiMhme4t3c4so8iiKcP4NmgV2taTLz7rLNVTbEoGqEFb8VxvEXgM14EAp98gtqh5nnDy",
  "key17": "4XmPtLTtd6CKfVMUnBbUXUtZh6YhF2LyqdKpurX6bC8eW5gEF8gHyApikjBqYDVsWUYNVpWDk7Wy8E8ERBpxHpXu",
  "key18": "4Uj14dQPLfiybAeog1j12RAVys2GWoX2bAXK13njeou9HN9azwHjmhM51B6tKEnnbZjdPX9apJMjZZb49oY6mciw",
  "key19": "3zgK2iHKZLQop9Ud7yWFXDEquDhW7WW3Wr1mXDPUFdsbPyXQE2Y92B3T4skLRx3bCUEf5N7dT5bk29amMBXCGbGB",
  "key20": "Jy35C5CpdtMgDgUpSDsv95JD7cTo4DdFoWVkVboJuqNMPWC7nJLjNUgcY4vNdc3pw4YEiwnZnkMrKZT1EJwZ9tc",
  "key21": "3tshYhUytKZyAAjhkBdcnQxtv2YUiQe3qPCe4HXN66AJuyfCwnPy7sMVUpzh9wApsZBbhPwhPbwRzmE2nprEX5Z6",
  "key22": "5A158X5ann6FLaBGMF6X5LnJTFmpfYLacUBsfiPWq9oFEUVvwXcVrQsW4FozrkDJYtbzJsD4YtrUA2XKt2catmhM",
  "key23": "55joKMDBmrrFDmjLuAf9zJpB6Gj8W9dpBGYMXX59pisQJAZNsNVAuL8fX6Hge5UpBDh4Uf4ELiiLFr6QagxMaquD",
  "key24": "NgDpF4AQpt1GSxEhRzjitTU5ic88dLJAUXndQsnq4FCMXLdRCEXGPXDk7DcjxyES1gt36z9XG3txSKNXmz8GkV9",
  "key25": "ceJMTsjANt4RGTL1C3yZTk1gjbZktHKeQBXoAkKAHkzbafsCBoYt2ZkhfDmXFV6y7kcEXCxDZUwcFkLeXLAbx9c",
  "key26": "oGP65Ub7RyAbcYCXsPDpp2pXruFTwHScQup5siKeZSiQ3e4y6BE7WPpSBn2PVLHVKGUHzxPZs2EovQH5X8CY1yG",
  "key27": "kExyuqFn1YD15LdBxz2j73xeVUKvSTeNc4FvoCCrFPzFGEo93WNwWVuo8cvB6U2JhXZvpXedCD3TzCGXJpjrsRe",
  "key28": "51PGp6eS5S2XzzFAefTJPhNTdC8DQAtw3ZaLBfiY4PFXANE8AwbZbruS67WZ7UjnqK81tcbjpasyc6pUYBhBRgL3"
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
