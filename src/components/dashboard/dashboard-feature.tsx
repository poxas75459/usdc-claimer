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
    "45grART6hQyBFNQsfvFcrzwchWeEehmPuPW2aMgzw7zLRGSm9VYpK5ifKvbQTgkUEias1cYJDzkBpvVXzMs8e9Ua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AqeVzdnQkbFFEdVzLNTsZnr6U5RmP4ttmPAQ3PfDcYk99vLm5e9Lqg5c8et4Zp7pWSr9qvnp5pzNYmu89VBRAMJ",
  "key1": "3mBwd9EVx7uNQQL1vTe9eeYM4oj86MbeJP8vByXh7tEH6zsjSc35Xo7ieu5bmMhHm6vN3CPn4wSPBbodshD7vKrB",
  "key2": "28mGePUtYJJ5iyJw511kcUKnJGXZJvMM1SjozE74TYMeF3D2LM1VUCH36ZDKyYh9qzW6uDXXneR7XrXjjrHbiYud",
  "key3": "5aTY5DKMhhKAktAWCutWrbeEhVoB8punzc1cLy6fh8ANjguJCkbPNDaSokVPbDugNXMU6SenJdnpBFTo497a514o",
  "key4": "2cDwquv7L85qeAs3ZwamJGHN6CubDfBqzFKWtiAB24osR5JywNmu8gmQkgdoKxsXZj8LJupGrnWJswYxSx3yJ1r5",
  "key5": "4W9N1yps1LuENG9xYwMQmLhzKXVeQ8MEgJp9kCDc9h3o9xJtT75uiQ9PmGdrhmUAyJuw9BHiwVTPv9WYMWiQtCB",
  "key6": "kaWvYaAE2te2mr8hmheRofmRCQk5jZ79xcGtkEYoeu6HQv6W9Ucu1ETL29qfDjUvffuGeK6CNeuKLAxmxiQ5iEf",
  "key7": "7rkxySjkgHS9DPJaJZBTvyBCYrhZX9Lga1J5iCiQQgjHpaGddhWu9E4MiER1bjWwyriayGr6ZkV9fLexpFotQzo",
  "key8": "2LV2BZZedNvE8rC1gzFvLy8t8YzCx8Yh8hgvQtQeKxsqMM4SqNAavTUfMH12APsGXHjdEDT3pUNQkuAyqNcAphmu",
  "key9": "5i7u3kuNGTDZQPQfwcs3DLrEUe4czoX5D9jEDEq2ivVvjxYe2MBx7aTnGX3Gsqs39y9hSa1TPxEBcpZQbcDPLVug",
  "key10": "5TqNEU7VxrbiwRp2McqCnWJnsEPEKuwPsFxy2Mkx2yATTSxBkQM6Je5mdp26aWgDXEhLSVLWfpKz1BpnMNfh7qzW",
  "key11": "34dbKdLnPs75R5nHk4oJ8k9B622EpfeVUZkkQQLqqs69uS1rDhJ4PVufmgQfqT5w3FgPWinW4NSAvRNG7S88xKJj",
  "key12": "61dvR6bdikLk1eLQg5C9zWHEE2N7qGkCAbPA99Dyfmkb1B7a5cFCt9adkU87PxMEWgbqVeBz5kdQ5PmCYTKnJddg",
  "key13": "37P8MVBD4wmRgRAervhjeq1P6x3qhL6YmPYQWpVJpYwbGCofZoMmLy1Re89BfzQQEeePGvBi65zZgB6tjDrW6hxG",
  "key14": "67UArxmMK36TWGo3aAqLmmwZTzyPnbZBUX7PAt1TcRYJr9fUN74rvHiKu9LnA5SE1PgRnyaWvyYqXyzycRWczy1R",
  "key15": "biWaPXQgpFpi6VpLxEMRhAw3LqN9hsFUGW96ZtrGiEGwkHBd1XswPEY7xxoXSZtDgWhjs3osK37oNUaDpZDztFY",
  "key16": "3Y3CYuT6jo2NQ4hLbZ326W8eMxdtHzGdV1J2P9xZt1ZDeuiXdR8B3oSnDMHC1WNDkbGvv9hP3cJexo8bgYDmZJVd",
  "key17": "ZDLsW1LeaV3pZ4txEDyf2mo2y8cvYx3BH2TZsakcsmRU12N3kzGmEX3Ga7YkD4cympcsCyGgQ5FeE4VTLrkPgqX",
  "key18": "3xHYejUiuZayVPLgMvcsXwgXHkcqJMSs1q5PG1fvKrU12GS53L8h2tFHRU9gtmiPVYnbMzkEU99gNVYzjfGWn4CN",
  "key19": "3qArircSTyGTWw6Zwfu5C4p7vuju79eVeLbfUmRcjH5U6hoFoJ3ZCLT9V2XuFSWbw18xas8J9DAFPiypZ7wtyYq9",
  "key20": "4SNxcRXW6PWFsAH7oWYw7fqcySgY4xmbuHJib1pRDwmyjrQCFoigeK6BuEUiLZhgcoihy373VyRg6bMcTrDPWnwx",
  "key21": "55z9xetfBiQA1dUTkHXhMWVjmYG84n5SnV5LTyTnpjxa1z88WUPGYEUqEz9CBXWc2WJQ4ooU5NrHuvj6yDc3FSgF",
  "key22": "51GaxB3sVGAuJXhVJ39pnsNsPiT2jTYDGvTTNbWZWKDNmNPBxoxqj558xw2MzKujmhN8n3KK84YNkBjuXKHJRahD",
  "key23": "4SiQvUWw7UKoid2exaMd9Jo6yh1AkkJJvqDZYrGXsGtACkpobEugYJMYxmJAHHfAotPQ6srDWZ5bdV5m1eCKp6CN",
  "key24": "2S3oLKnrDGtWnHzufqUKuWmKmaA1qUw9JszqrBnpcrWeogHzmmjdxrTPcLUuhA7A8LRzzE11BTPxxXy61ENLmM7z",
  "key25": "2xDdLWvoQUPZMFQHbTMdJGHPZKNb7k3GJSWLS4xMAz5iwSKPjGCKAn2cMj8XNZ3AEmefJMKHMeoA3M6ytNQrzGhb",
  "key26": "22FHEDKJAcvRKDKepYzEcLP9MTcYgMpErszYSfXY2BniJnASNvUG2pjgqAvNt9aRBF3o6BBoKkaPiXejZ38yvsvf",
  "key27": "dMeT5XjKkkhFM7kih8KcBXHJQtDP3gYbvnJWCyHnf997KaFswVVkvYJLhXFdKqAJtj1kMDDPyeJJxJcg8jDWgAY",
  "key28": "2ppw6eU2nPxbp2ypTgQsMF1QqaNjuCEe4jHP2KVk8gbULMpWqdR4tiZXvDGP5nNQntygyrK64411pU7pjvR2k2mA",
  "key29": "59cpixzspNmX1do56LGhrYYkwthUfU7w5PLGJEQD9vVJT62kPcZgxox9dghiDhCQBifnYscs57kZYWNLH8ZyHcKD",
  "key30": "4KJEJ3rmf13GHh2tBQGbz5PEjM575b1cWdqeccuV5PvcgP4Ecab5jc77mPpqZmeyFS2XdWH8YAqvgK8ChQoMcDSf",
  "key31": "2VRkvwN1K6LprpoenDuC6ghjS6iTfW7Pp7RdPnwydJueB5DpHyVFBTGohSqwunZf7Y13bU4npTPyMFr6gEBT3oLu"
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
