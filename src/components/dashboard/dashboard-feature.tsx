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
    "3CibRFBpwrMFsijZ8LqbBhgNhyNn5Q8n2iMDuwEZWddV2ywJdiHwzXR55ufNKTeBmMoGK2YqfZrmqvwWeZcGyFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48TfythGyjxbsqrgSUjAgTAtMFpK2ppzQH98WHJuapwi1itgPweM1yC66tHmnmSTYuksR4ENmgMsiLW3Hax2jgRA",
  "key1": "3phC9a5Jh4QPRXRftpiuy6E6bGTPwJbJYkB3a8fW17W4PqHMoXQMEDRnch6JHivbwHaPofmE4VR9teBUYnCHAxXF",
  "key2": "GJbeJWbTFCai3mvNYPHyFRAAikyvk3UodHU8FPq1nDkE8nKRSFeaaGMfauGyMbeqWkvsgQTxtovszioBWTxtxmi",
  "key3": "54nEmpwHp1qycxrkGB145qbgWZ1o9KtW6Mz9UBHh26XxoFk8USsfwg6j7RQYHTXVm9KGf3wB6f2hzbbv9CtB6JcV",
  "key4": "2zSoqjj5Tmy69bTX8bnarcXBWvxQZdCjwB514ZJEprChMR3hdEhTsf4w8XkhrGU2cfM94JimrMgPfKTq2BY1rLKo",
  "key5": "5YQHbjj1KRV9D6yH9hHchsbqU9iGWD7w1LnAf9dbkgKYeXu6Y9NdDaia1ofhDCg9pUD2DrCc8NhL1XJZfkNM9pwr",
  "key6": "5qdM6GY7Z5uW7QdZu2whDZ7dg385Uup8NK1T3NNaXAiHi3RbEYFYzCRPAfKL6RaAodXz11KxZF59G8Apiqdreik2",
  "key7": "LmJYT75aKs6mX1eCS5yYaRUoakUnZ4BaSAAwQa8Hwev5jDBLfXeJKj7KRvSrhzdf55MLPhqtV2zDS9UWc7pfMBZ",
  "key8": "2uJEZcdCi795vaKr35mMhh2ufwmqodFrkVzVzEWFSapNxaYQCcyd9sTydwLmgNL5snmX3Jehc2GSzTndBJs1oNsv",
  "key9": "5wW3GFFwPpQbZfa9TfVogjvV2342GTUyXYYwAVhSGB6dD1tGiapBXxkJh2HTiJTcSWmXdjnviJaPFG1KvMcU3HKE",
  "key10": "535Ssff5D3EX33E9b27hHwfB6fB4ULAHSf8GqgWfu7dpRZ4bXeRqfvLv5HU4URhHzAH48Gz8SuB27PBpNZuciSDW",
  "key11": "4A1nnhF8wgXjuCjikBWq7s7SgxNiFM32BBa64RDpzPXyMMzwgdvxjiP4mJPqZmMcvMhLAxzxR3ftCbuUECiZKPgx",
  "key12": "5frcWuwYRRotMbXKh4eLRAPfhAimKNvTkwAS9HE7m6wh9BcqDoc2EFMEYjuywHpZM318VAFbYh74hzejNPVNGczY",
  "key13": "5XFmfAUQFMuuBj7xCruqbfTkUFPkTPz4oTHzKyYWBA9cFy7SnMEDfLbTEo2eTMBoiogHAYSQYYSdaAYKeLrg8Xrj",
  "key14": "65sZ5K2fRNTtWFr3fLhkX2gkhhmQbkDmvRAbTPPmHgcZgSxQaq7MroZmbzxSJm1jnAfaShoMi1R9PgSdTgEjdoG9",
  "key15": "5bi6SzNF3QNfiw9XkGPatSk3GDcNToYqW8fxP4pRSxv3KYyaG19TvWtp4aKfPwEwAQoMKxsJrusULQpAN2xv6Tk9",
  "key16": "23AESAmCywrvCngmQK2bXhjSiJgCQg6253V33iZEYYRV6gPZCcdxEQQMpNJmvAZ5FKRAqRcTP4u7CrSmvo5Ses8W",
  "key17": "2ysq4DnE4KdHYtSW8McYZ6TZsmAPw53Zhsn5Cz8rjJc9558Uj8A3RAyDDpwPfvEVSkfTnmF7vz3Bd6gprbYDzQ9X",
  "key18": "U3vp5ENHKJRBmQDktEkHGZDRp2cmVtcZ8CQJfrxRUc87MQriPS6o58kMSs3FbGD98c2vjqzhq8tbVaZXcUuFrQR",
  "key19": "H6WCG5MQZWCiyEm2HVUqGwUjm8bURqtjFPEB2b9gC711MKuK99GhbYvPw8qY6RapFxafL7GXQDQ8Uam7jSHNQx7",
  "key20": "4HjLfraN3FBuGPwccHaJ9b86eLKhMbSz2WBCb43tbPaLng8qM3s9kPuCbMoqbc3XBjFcRyGRe9G8ozmhTwsUarvT",
  "key21": "52gBgNP7oWuUj5rw6tsnniBHESWKvFWpHujtn3b3MFs7Se9iDRUWJ6Gu1dRNQPd1Uo4L7G7xMgQiw27N9qwXQP9e",
  "key22": "5RSyJq1yVmWX3eHt6LespUkX6RdcQJArbBkFvQUmN65yDwx5JY7LamWQvP4czKG4AW5pSu8qw2siA76jiJoR6NZa",
  "key23": "3vjJayxH3d2kwnnPcTsogPUtc7KVjx6B3fZgAjpiLaYPiwhfEgUSyodrVMTG16iWMQPFKMQ8NNCfwoBbukSBnZer",
  "key24": "4BsW66FLhBSLkU17wgyTjVviD3bqWJr1g3QkJbSNDsnxZTUZbjjjAKH9aCvTukTRzizPp8ifNuZPGuaekQUJkFBf",
  "key25": "4rTC1Si4FrSqxGoSoApdgkHrGo9CheW5bwDtXsnYPHhG39YFSEZU5zk4P7mPR6YngmUgFQq6MWxZaSKSCUiY4p3c",
  "key26": "2T26RSX3CbgzZDXYA4rXAqnkws9WejLzS4HbzUDYoHgWqyVda6shXnd5u9VEHmhiArHHPgqtkuoSZuP57gw2x1br",
  "key27": "5Y2akqRrKqvG32WE1oAXxnfLBd4sTvLJ8RQnfHiyeuaqH8wn2PeFP9LibkDqePGvaoTuKx9PBdwwXTnrqjfrBQxW",
  "key28": "2Pxmy7LxGes2J8QSpXoeQPuZTQZphYDYUaWpYsLeaKgetLrJLjadJu6XZYVy8Umr5QupdwBjrATjmeg3ZQqQJ7qg",
  "key29": "3jN9RCr2S2QdZbuLC1knBZDVzDwi9caVbSBMBGMHiPqYnudpwv9nCR1sxcYo8AS2jpzmKGmjVnsUNrZEVuUj3gyp",
  "key30": "64dGNwbHK7TEUfAK9P6K4eHfAoptJQbwtfgG7UqPitoM3t4e1nEYtFK5fN4mnDhGR16CoUwhh1NqN1mb3Szvm48j",
  "key31": "24n63zUk8FqYoVGA9c4mbzTJZN2BTXNUkMzsPwjzp4QV8WeQpgEzoEeGbjnrMwRS93ELY7sZXYt39p2NgBLQMuYQ",
  "key32": "3cPnzwUAUHc5c6jmAcyjswbymydj12iZQD3xmCop8ZcrekacYLX9y9tn4Kk9gTJyhj2kHcKT8YhiieMsDksWceHS",
  "key33": "A4z1J1dG1yNuCRifHys8xP8e8yo18QKEiXPZB3ujcsSqhmtBsg1tZQsPgjYjh32JhrfJbmda69j7R4ZW7mzBf8p"
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
