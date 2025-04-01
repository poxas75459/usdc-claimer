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
    "wkVbsEyvxoqjhpqb8WdxGkTXD5Rsov5ob1XLCiew1XhLw57dLQSrBHmi2XtQt67nCWwfvS9jUvR1G583j3dciK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CJG5KPuXmD7hWd2VHMCNhLya8oQ7dMrqC94EeDcPviQk5EBZbUYyxNbhaFBJBWPagH535FeYaZ6HLPn3jECdPY7",
  "key1": "53HvvcgZqyrnsVKkiQBxsnW4b7q3S5PRLeguzxiEwWu2SM95StjExTSybAHtXK8iKAUwzwpqsE2XxeWqMFckxULV",
  "key2": "mXVZ3TDzqhamgTmNrsMdXrmkvavgbHDbXKU237ARf8yYokVbqTDghH3r3Qzrjcdq1ssdozeKQgv4cr6Kmt4iP1Z",
  "key3": "3KUJERw3BAJqfGmHsbFB22Qy8z3i83GX11YRnihTtzaCEsT1HMp1DSjtBYuqeZzr3dvMjrrUVnS6htrwZd9JMrtg",
  "key4": "35a5t71aZFHWYpm97ztFXTRwcz8Bi8Xg9TLjwCXsfCqvt2gDPYYHct6Cj1pHwsdQaXqwVTeBMug2Aqe6nTtf1JVL",
  "key5": "57UmQUaBFUFhfH8zx7xZV2drhqJRc91yUws7xZuDB4XjDUmkyBH2duJ5dwkE4PArDE4xAF8kPDErPeQaydG2yo6h",
  "key6": "3x27T9vhdaZA1xpDRXfD7cpAcp3veKEU79cLLMiTbUH7RiZafv8hn4nAuBW5tZ3ABfZT1kpo9noUjinurxZBK24e",
  "key7": "ATukrqMhNrRuoN3pkKzRavY2Cdod3EHEy96hMVZDThUrbpHS32uNy3R7nAUFNXFMKThipDNHKg4EfA416kgBALw",
  "key8": "4BfFohFhpqxtyziGyXqjXsgxUNiVqh3d3zbT4DdMVg4mPAKGw74G7XYCKqS4QvgDxDtMrFdTMHJWwBFt51kgP5a6",
  "key9": "aAws32hpP8DW2SFNBEenVJ7fDTCnxgMy2FBTTp4eTBGNUVqjhFjZJyo6BS2b9r2PBQn2KMrmpAQPryJ8eeraKBH",
  "key10": "QMv8mP9T6fuZ5AwFiLz59mxkCaVgVwa6NXWz8HQ5TonT6w2CJfBTTxhG2so1MkeZLJJRzTEUbMQ1V5Bz6ZZGRhK",
  "key11": "2dhUQnpU29Jj4jDwfwyHJKnYfW6v8jHP6b9BHy4ShrhS48iXCVAeMn7J8wUh6xzSJX4bGaAon4RJ2C12pU3j9D8J",
  "key12": "5jFKn1LszNgajUXqsnpVXroH8waG2VppJ1okJJzFd9sbg2MzCZ2FLfrzvmJP3aqQqBBDq2C9rGwMkTD1hewpEjnX",
  "key13": "3EqdAhZ7qTp3EFSzjZccdv4baL8UpEb6q8hx478kkZE7JkuD1Fs1fKLS4XmhQPK6KHQ6rdbVrRV2Z69mdWk4YJej",
  "key14": "3FpUh4J5GvTPUwceg44HEi5A6snQtANWfJ39riFuhEk3cm69w3hxqZh784zLHxFXWwPqckRUiwSrRjgYFyTXsEJK",
  "key15": "3scgKPah2nTn1mTN7pJNeFvcoAo6jnuFVEEHK1QGcNW2MqEJXQLwkDjxChsQv9N1vZioFbuir8hZTmNCSKMte4Dt",
  "key16": "3iN7iiu3aWcafhbMFdAXmkd7oVTQhCkoH2SkvLTbP6oWumzDEhu8uWiSutyM7RexE5TiNayyUzc8yeKT6Pq8ZpkQ",
  "key17": "45HZAUfZti6aPRvKFno2EcQjo8Ja42SWR2xAUWvwArsY95hzWNXikg6X6KmbttHXPuSZViZNY2Qpip6RELcSvr3r",
  "key18": "5gAGvRAoMoHQks53Sja9z17vvxptprjBEMzPWsynUiRLgzdNKou1WTL7jYuQFrt17hwqMwAXV6phcuABhrt4vRAG",
  "key19": "4ecqWxXawiDcCzMq2b3f1LWoApQhbNeVy3Uzj4xvQkdYcf1koGgyiRWFFsK221RwEcr9ggD3rRzknoM6ajuxKmGd",
  "key20": "FV3WW8EKY1ZFxX1C9L1Wx92E8UakAzkkcmh8mnhZxMZ2NW7pwDHf946M7NtXmCNLCPqu2WSZjC8xqWQmNked9tL",
  "key21": "4wJ2p7nmFRLCr9964KEpWGa4ynFYM9jSEUGtm2hutjBFXbWU1mDxz6Aee52XfjGq7eUQVrXsBdQk4feKhLT31Vub",
  "key22": "2P4kf8As3HrTdtRUQCUEjds2MAfFdrUzV3Nrdof9uPxKwTTGPwdMCYpBfiZNApLtmqJp1a7Cnfod9nbqdWTZsYrr",
  "key23": "4TSGfDpkpmrjGYbPutaXC5GqoDLfcRopCHobEbxFfZ3f6E2Y4jfzuVGjR8UwpXwC7C6DfDoZhNZV8Kb84iXyV6yF",
  "key24": "ssaXTKn2dqCtASQQTuHZmUdtHTvGgDPYoq9nVKehHd4iMxsCosUocVsv98Q3naYdhNr6NZwt7X3YGdeprYy2Dzo",
  "key25": "cKP6USNCPNPsEjwXZrVJ8j2Bqef7j9p9vSSpgX4Ev9tFLfRtiCdGKMggxxSTZuAWZLHcZcjcFTwKrqdqdrZpw6w",
  "key26": "5icUdkQtH8Xmts7t15Fz9KwpYfH2hkMpUAsvboiGp7nJcPskjXPcasgygNrfdhjE3ajvkVNqmXESbW8KWVKvWtE",
  "key27": "2moCX6xTaiHgkxcqsZahEw3ys23DLh522KvZuYzMoRCkuEBZg5k28N4tpG1JgJZQgy3LCWjCQYYzevK8eqwevw4T",
  "key28": "39tgJmmfHfxzTUu2BMFg1gwn2Uujxj3a19B23dBhfn6D7poVL42kopF1pTH8p2Xz1awFo76tu4RcsQR695M8t9aK",
  "key29": "3kdN6x7DYKrD4njetFz33TEJwZpoSCRSQRZWT8Kz61kbMZj4rEVc7RA5phY1Nk2SNiqBXoZyXHmVDKj9KrQBqcUy"
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
