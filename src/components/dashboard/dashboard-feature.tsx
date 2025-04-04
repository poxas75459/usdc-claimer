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
    "47VUYjP12qt238mYEpqEBFZQ9N1F3x2aohYfAMbELSgpNe1hLBDR3BBxST3u49Qj9u1P4XbW76yZjh5UD2TFzKyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iwxvRr7Z7Kh7jcaxDN6W4RBZC665Cm8j1iXYNusPVrVC5JQqR97RrWzHdQ1aqCP2e64E45fpSzmZkCdFFk8En9i",
  "key1": "UeTUw4hdWUbNwkVTh4vbX1o1rZMGPfbuXomNPuWnwQXVaYA7GUPDoeFPY52egDHuUXZkwbntitrEaZXWZJtqfXL",
  "key2": "3tD7phBTXqzjncCbJDqVz6xRuoFWEBKV2y3daYRGVVSaLkMhu7VvDo1HN5j2vXPDiEhDjh1viJXnR1EQzhEL8v8w",
  "key3": "2Ax7dgCkJ9QmzxH6ASBacHQWB3Xnk4iF8n7uQjYWEwQCyNaEz3GiQ3iyZmUksALDEiAJtbKbhAHwPy3Jnw1XUpSi",
  "key4": "2f8sDMYqYv1hS35wCX2DkcVXoBDKnMD5p3MeP1bvjA1ao4hUfiWqVFWjcrUQHWABoo6YRTjB2YxytRHeum2bYHzp",
  "key5": "29hByfYn6UnJFxCtJFnggR7VFRA5tW1Q8aK9Z5M6MUoj4vat2fLaX3bJaeznMH6CS9tY7VzMQeCRZQgKEwzz9jZg",
  "key6": "55NZYg2QPbdXN3dUjbp14q82AZ2V2upg9he9ZsNXfnkkmnewhpabq8RrtjXgtVTizcUfEgissx696FqVeMgDarbC",
  "key7": "4LwqvxQdE1PhA4jG3hkcNLpLCt7HmoQQ8xrjTGxgsERzr7gz7QSvWm8djzouASS66q4xuKcw1ZeuFedR8gzjfbmV",
  "key8": "3Hu8au1LedanTi5j5aKVEzQoLF36f1umvRbcxi1mnaDJ6JfAyGz3shtVcscUc3KFyh2nyxZNFLv6YDUxRexHMEm6",
  "key9": "3qmyJjE2oND5ftQBDfg6CXF9dVbJLJER7WW1EKYAwrde7vBF9kL6uKfC3QFJCrB3fujxoZiknsCmm5pJ5HkHHryc",
  "key10": "4uSPGnEXKNkATundznTfeZmWaU1t9gNbd8P44bvjyJDaDf1cozCURjNzuaeUvUWKeVuRBj98J8LcznvkxjNCquCH",
  "key11": "4U5eXpy2LyYH61D2bi71E34myDXHB26CGRvmKMnRFtfxd4un4ahj5ZZ9A6cgKMdrGd54vUakYoTi4FBjqXrGazXZ",
  "key12": "2xkHikeRcWMVxJLc678JVw9Fqa1kVykfzsznjJwZtdKpC86grNBtuE3aF7zmpcwnZroruEhXSA1P8JPCeqx2XDzX",
  "key13": "3Pkmor3XAH2Fn3g2fpqcq25HESGvihxnC4Y5tP1mERDJ7mPWvuwtcj1pw1xojDLq9ensat2XYZjYqUu1wqwg7kuB",
  "key14": "FJr3JEW33btNJHFfrHi9RyW7bqQUFJmsK6yZxxxm8JmA3pvb6LYBCtwiodU4zgXLhqpwctmtpNg9YmrKAkVMutB",
  "key15": "5dPbJJDN5faZma2jmio42EQnb4YzpeM2jMTjAJaxFg7SRAmfwgsiU8i1QWjPPCzXogEBMUCQjKjHH6C3F9iANzUf",
  "key16": "2oJHmxFtuqxXJfU76v8dBq6gcu2a6mZ5LWDBaKtMkZ5CzW3LxUrcBrpabBhPZEqEArcWX3YoCAZQEERuymt9t96n",
  "key17": "2QdXkZTTbC6ypmpZEoFzRhAUUxtPCKZNoRniyUnEw2zqRkK7fjX2MAp5sMhZ2VdQhjR1TPYDBKNUS1ZPqGcHRWjs",
  "key18": "3G9E7tR7gK4fM3xM9syDHDgRJ8EzWYsAqU2g6ZXTs8HDh5EyMxCA6ZHQfJzL8qrpxeKLNKmAoVgRhjpWiVoEC38Y",
  "key19": "Q1dtQ7Wx1xH5aiBk8UEuuH8LgFKrMfbqtQUX58R35tunFFSvip4qBcdzuswqBCKci3pWo9S4iU5SSbjcnEdBqgm",
  "key20": "gBCtvEXZaCa21NvgEnCNtdXKbnmTHVwEgbgHrXaBF9ZZTKMMr3X1m7fZnNBvBiW2PoEsaBAFC6d1whjDGogzsG1",
  "key21": "4RBbkaVXF25aRzSdw5WUMuaiBtsUw8rGi4bqiVook2cvC11Punfn4sBcmpQQ6wWa7BTsugkYEi6vLvuvwokzWooP",
  "key22": "25FxyQADYccAhW1Wvxxaxx4tma3HkSS1xc9qR2Ei4U8MDWAStPaEV8ppiGWWGExHWomxeJ2hB9VnzuagxLoiy66a",
  "key23": "YgHTRpsCkx9hRe6MypzbzBAAGGAC84VYxU3WC1PDPoDEiMMKnqMtkYHZU5NzinZvj5WZpQ77Ka9GUGxAf9VowDL",
  "key24": "wuKT5LYZukNy7CSqLwoXkx2zpgE9UPcTHsgyTbMAWGoqKdiT4X12dCn9kw1nuXNd9WhPaTY6hjSirZ18pG4NLD8",
  "key25": "Ret1n2CQjHXLauYxkeXTR35Phvr1VRqFGSzT9GLSyPhJau4ZACxtvYziPyPcAz8VMJVANFtCPf5YaWkPyWBMYhW",
  "key26": "3KonrQRrrwpBV98d2bDEsECYsBKZq84ufmP5xrYSDFBr6hN8Ks5syfkoDep1TibZhCGdHe44jEzHaqV5fDTcxBdC",
  "key27": "4FgZCrxab1YoLggxkbZBre5gVdW972tq9LyUYJGXbvjdiPq79T3MShGwKLuMsEEsz4sikfyG31EHkAts4MqJUc5B",
  "key28": "XMJCnrtqsXESFGKaea8EBXQv4aexFk8QJkZy8M9QHaWpjbhpBAz5RwKD5vUsrVfvrj6BNGtRDdP1vgTrW6ABATq",
  "key29": "4uy92bjZjTzPZTV4vP3ZwN92rsv8SgPsbg6UwQdqpn7F6SnyubfiVFkwxR6ZGLiEyPSYv7wViDkRp1za1Qe5gcai",
  "key30": "5vaigMAW7RjqqC9yoPaw5WvaJN1Y26Ga2TRfwe4L5C3Ru6QxZm4HY72V88Sby32oKx6ZdhkfyCjAnou2QPXLWe6e",
  "key31": "2UCh6rUZKyuMbnkCYmnvb3mZ1TMQZkgUYnMRyUigmuCmEBDRZGe3moPdLxRcwPu1jwVcE199P4FmDrCetTFYhXVU",
  "key32": "gEmxYisecGDALCrLWJFee1tcpML3cm93VypHwtdiZLQPpinmFJnurBYtEWVDo3BaZ9DnSaGMbhJQhCJPRnjAt3h",
  "key33": "YqQBXbkUxN1fsMDojVCYgL5yJfnetpVNhXgzDY2BNPwDqZvfaCPkJUgWWYdFwvSnYig44E4HiTNCPhEB4b9PhnR",
  "key34": "4qfYk2FLoMJs3bkAem28Txq7bKc6RzJBBUD5svaip76XJdyCGneHxtBQb7nC8PGJ6UM7z5Va7RPfvVrkWbA5vYz1",
  "key35": "55TjhJPDQ2b3z4118yXwFNcuNUGWRSvunW7xsZzZCw33ofYCENiL5JcKsZVkm4wbsbtPMst8dK6vdH1koACbksU4",
  "key36": "sjpurKT42uQhj8W6G446vbCgC6amUgLCX7BviED83XLEnQmdj4P4fU5MvqRczdemgGMKKMhMYidHvxHsnxAQvag"
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
