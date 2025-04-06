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
    "2Md6nGhCW312iwRSVE759j8P9HoDT6LKHsskjVkCMkQ5p6o49jEME7FQVj5GXH17bzCagcKSGhmYon5ti8VSCV7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4apWf8xJPddZCUB5boLBJKmVzKcGyEfxgUhMPWT9bEg5yyeFsoUCVMoyfsTsQWLb4THc8AK5CUwMTCnD9jfKp3aS",
  "key1": "3AhB1nqAr6xKFFA4g9gBXaSiRg1hicMhQwGsGTqaQRPff9kfAqyvb1bD4RizNCFKa53xUJM2TssN5vzSKJV7zj9i",
  "key2": "4ZHKzFfVZAQbG6BsAeM1S56vZ3WGob4XR4RDhSRRA3jNBEhyVK7YLekee9fqkztVqivbXMR6LqKjpRQyYC9NLMsQ",
  "key3": "3LJXPDBLKCaWnEQWnyQf77JF7fxiKFmRUERRMqbPQk3eTc5FM1AUT3ktYVtgxViwFnS6eo3JeShQFnSpQ46FRCvT",
  "key4": "32cxK3vn5TtzFP2ema9RRnXaMpFaNuTomDmFFr4XTLicU21t6d2JqaTEw6kAuyv9bpyNakgLYbCsFVqEuSgcUJzM",
  "key5": "4MAt1GsjoLdqwUnZrvzt4RctZmfoAe63YRUjFf3Y6qFtUuVWZKrrb6rxZYfQ4LqDnQzzS6Zman92vXoqPTnfnKWT",
  "key6": "2Np1EerZyuovMRQLASebKzHgzLcZmR2AWLMcUXQEfuGjLEqcdogNBd6DLQcVST9ZhyDLU69bgGADsNC8cpgaEiUM",
  "key7": "3jtKQxeRzfNCEnWif422RqqP8knwKN8m2y84MHqxRpNRV6eXPZqE3M4uAiMihq65Cmt7aFNjXTwfxPdp34wZZeBa",
  "key8": "5SwkTWtxsBBxP6XAjhH1n3FUuN29phdLrEd2LV9tzgKZicfQzhauebXZnKzx6fNkJsY1RSwb5MwF7QcimXZBjwCt",
  "key9": "2Q7YPhBCVuJx7veb7vZ6D6V2i17uNE3funuqjYCLTXGgvjGvu7SYcUorehZJJEdCTpYmiidc1U46N1ch4r9pYPvP",
  "key10": "4jq5eHKb7fcpZsoaeAWpVhoCEysPjGKfbtJzwEsEXeYfaXveuQgCjzAVh1uHgDpV9hHd2ZP9Sor2sBAXh6cyFURB",
  "key11": "2d6t9VPJPE99VsEif691pBynrJztbz9edNijzQYnCd2amb3LjWPSsFF64a2FbFy8TWiqVV2Y3mLbVCo7XVvTjJUT",
  "key12": "7TYEtCYzqX6rHCtmo1SuM664SwBeKnnxRzEFhEqGEoB7EurJ3YFMkzBZdCR4XYhvuPqNF6tF7gQ7T3yKfdxKvTa",
  "key13": "2GTCoATSswgV2iKQbgFR1b531yDeZoA5JtiAgcXUaGwUFEwjNmJrHrtUzaQASdPj3H1LLoFpqYuz2LrViFAL8LPF",
  "key14": "4u7JRM6sT8FiqLD7JiYqyL6WcUgEKkP2mKZ6Q6ydPj2S6TKryvJxwFNJgdku7q7SfLNWhNV1NYWeD1PYkyV4HZZf",
  "key15": "5DLvELS9dGc2rsDtZAHjGY4mivw5v8EQ31yT7mNJvc9aoK9eZ1HjKcmsg8haUVhVKPJybcJZ5odyc1zzppF3x87n",
  "key16": "5FP6orWuPsWkCog4kXForRLbZHzNVft6CKhfhmWxG2umb5nxgqAE9C17iDBmTWuQBoBpkrzWUnAzbNMFriNca9Jn",
  "key17": "2o1CKfhW6Mjr4yzeorfkK1RGZxQZkvgC5G1KfMR6RKc4jvAFfpE4RsxF4dA1D2X955QjyJxXTBJJMpiaNSgUBoSW",
  "key18": "5PdLgcfb7g5UJJgScw2RjKNkt8bRqv9759pQj7iAmeH7zsFQjbLcGYrTfC7d86JrJorvQ3w3jNddrSNhW2dCnN7p",
  "key19": "4jWw5yuhCiPRqwAhVWKgFEiuFKsMeGvSNjUxR7DEN8RjjMnUYH9CDDy7H2BfNrtjxNTEeC9xBA7b8tPGrr5K53Pg",
  "key20": "2j12oE1TuE68r9LT6Dv8iKg5gLTEsNhHu8r9m31XMeUbJC9vKbcgEA6Kjch4AD68LLePBaqVuwnAYyc2uN2WvdYa",
  "key21": "5wnDWsqcSSYM6VQKXKyb3WQ2RfEm8h1XrxLcDnTxoSJxBgGL7nNy6MGn247TUjZBS3rf4KHzZNrJ5LvNFrZcvaf4",
  "key22": "3B8aQUz2HrwqFAcu6KhtnVyN7mK8Y5tRhE4yC4fN9jFa5yjUPNuMtcvR3dWDsweNzmFVVceYXtCKx9A459sVGxwp",
  "key23": "gqPVsQWjHm591nwkRmDRRF9Yf9EQCXiGpadBdTuAxTngC1jkmqytkT6zRFoQvkkFCsqT2QrsRmekLGLwXTYRx4A",
  "key24": "2zQrQ4Gdp9s5HV2Ur1khKMnLeR6u23woFscqdwnicjqmFJrtEDF67SPyf7thVp82iHQuVuM9mU8uHu1xjm7XXZ9U",
  "key25": "4TXkyCuQknSaZVidLp7jT4N5bxZU4aospxPc6a6rZ96Hdo4fNhz19yN7Fd62kYNngGymmf685ExeTUnMN4LWeWsA",
  "key26": "5a3NtV4tZpDXHRAUV4p1p4aRCphWbJ881BdrRKsJJQBh4mgXhUpzFe4xdksFYQAQ4eCq2bzX363P3Y574tCABBTi",
  "key27": "AhKjwrZnfPstZH4HXWs7yR4b7BibG3pQex6RvBddq4NZ48gP52p547thn8sZvGErVC8wXu2CYWsbHTSm8VNkVhJ",
  "key28": "2Vg7Vg2xZ29XZAcNaUZEH9xxcwU8geQQRCSKJEPDHvVrSrpknhX4XdkUftTDFUmAaoXwzXaQHoBTGeELqQ9d6Y6q",
  "key29": "2jfVzauBvHXF5PpHhqq8BmaDVKCXombJkrT19uZkkJFsdLBPvVnaQCUSoPYMVFP6aZsoL34WCJYSH1JvYDwTbccU"
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
