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
    "26spMAvS6DuFARofRbXpZ2eKwCNiTGgTKp2pXJCM9Braof4wSUFQgTmQhfEM48j9HquCapySBwPgzouQLk4W57SF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SEAfrH5UR96J1intQwct4UWwggU1M9e7dHJb1tMb5zUgkznErYo36fYbfmKFXcC7iaftda2QzUMP14EVCT1Zrin",
  "key1": "4H4i6HGFY7ZJ2m3KZsewzKSkRSvQoduVEVB85Gvm8Q79x2SjeerZR3XtDkhRCDQv77JRwrYY4gHF2zCr9qRLE8FX",
  "key2": "KVRET2WeXsAY5j6JxvBgoC8aso9KFRXjr69KS45BcvnpvHQqzbsHeXQk8sNbVim5NUbx92pNMuseBJGYR1byyPC",
  "key3": "2X2q7d9BfYdHZuib72QYumuzKbGscWH6vmXwSoLzKLWXm7uTrNc2cx7zozG42ciYGrEcuE9GBiGAca8ZdM34LjdL",
  "key4": "3ynFpnw3QkrW82npQxUkC2qEJyxiCwjbgNWsZTkmA6p9kEwYbDLcjCmrenwyegLbPfHdbho92qVN7LqYyZT7YfFn",
  "key5": "5vooR22CFaccv5Q6cX6nT1bJGfXUFN1tevkxLEVmL1sxnjLti334w1JETtKXAWfA7QTvcq3ZpTgUQ2bgEkxS5vDY",
  "key6": "639zoHBEohGxKFaPVreQHNX8Tki8FajSqncNpTQSYv2JSeddsEoWnt4dhhQc1mGWHNYmf4hn8iLVSsuHhHZTkALZ",
  "key7": "2b38pkJojkdZwvb8JMJUUC3trRMJ5iLyFhcooyWpbi4n2XMVpZYpRWw31AYFKAH3C1qCmRkRHfrZzgZD3ZB3iHR9",
  "key8": "3rugkCK6XAM9Y92Mgch3jrqPmeKJtnYKvFQQLT9BjZzXAivCrkiyKbaB4geAa3rqyaCzo1Lf2PfxFKjtsj4qXnUN",
  "key9": "4rfUX66Tf2VE6ZSpe8wXe5shzfbkjbApzCr2GWVyaMdwFWhCJztLWUjHijSmZ2unyi54pwG8NyEGiK6w6gKSj5az",
  "key10": "3EzNS5W7WuGFeqnxHbu5eGEhA29KY7akQ8aY2uNDDv41kn4JCeTqCpbpEvaksJN9kjkNMXA1rQk6mF3kWXamM8Nm",
  "key11": "y8RWDhLmnvGqDjzUjxpDVSET6qM8RrTxxVfebzdpi3F31eQQUiB7NVsFhZgrTYZPFS6KDmWzZDT4dTJCyxZmXxa",
  "key12": "4QrRow4YcgmK8qq5inbnPVEVacLV2JtKFmJuByddHkJF7KRo5UMDqVwZZt6tLK23TsxopB8MzqVEaeYTjMJjKn4b",
  "key13": "4d6kVZzPEKpjBc11S1vUBdBVYsruCp1dGNwyAV6dKAhyJ9SqNHNKEhVQqyXfzD9foMk8hCuDkwKqJJNdDeXi2L58",
  "key14": "4v5ByUVTQ2pgMKyd9bjLtP4CKiJcSxaghYWG627NTrpL6Z8P5XPhGwM7Chj5uUQJqzhfaf88zcga5gL4K3gSWjCJ",
  "key15": "JSqG4uksM3xVjv15hCQrmuocHTQ9waZiVHFWpEb3m4TEtrfEEJZbspwV5d4QsfUT1M2U3konHhEq8xD7yXHVgN7",
  "key16": "3EBPVvfbfFKkkKaR5LdNsAbAAaL7MzjE2wQyAwMLoQjVhPLFQxku5UDpKGdr5Tarfcgz2PYWoU4RCXrx28DRjNFu",
  "key17": "2dtKNiwoza9EYxY1b47maKBWprsZQWHvne7sFCFTTXizcrokLX9AwAdwguqs1Ae1cUDFBB5NGedkBKQp5fwZJQy1",
  "key18": "5C2ip36Y9nFmrMVfc76fxxkYQkBx9KXrG1msNsjvNuV6WXGcapjpk6Rr4jSF1dxMCr4ykcYcPocfsh2ZAfQi8EQG",
  "key19": "3Zpy3b3bQMc8ZRPh4Pd2GiN2pxa1bZxdpdvVwvwaKCDTCJo2AHiWYh8d73qrMDNn6LJzdxTuyBYhjgKMAZtKXtJR",
  "key20": "3vJT3BUQtraKQSR3GTxQsSfZLXsKHZvfmyr7JVCaKJh8ydZpAej5mocY2ZvRzNknhg5ZTquB7GT8DEmxRejQfPKf",
  "key21": "fJFSLwEWV9JosvD8HSXxtVXStfC4LTjHSYM6QEZ2MDwawKaB2KZNJZjpMSEkdadMSfwfghtcmxGjH5ysPemzcyA",
  "key22": "481xoTTpYMAy6ReXWoEAkG8YvWJ9cirN877AuMgvHVqKiaSApEtgBq5LnBN5yTxveQ4FYoBG6oC77RaY9wstLvNG",
  "key23": "4u4VoZR34SmWazrYyhNwkujBwFEbGgRc4vDnufn98fQrKAxYCVuhBbtpxshXfHDTeLvbtgT57pGWWiqhhwS5VnE",
  "key24": "2K9XiHrz29oUJE6hzHpJ8gnASTe3sJ7PwHmiECsQen7a28SkYLx4PmaKpaCokxqprrH1robjwx6WLwXc8wA6CoVH",
  "key25": "3EsK3Sc195xR1aAZwQcQEAeDkZUStMhDr8PaZVypJBpmBzKbBN9R4vupEKuuz2HoJi1WWxiskTKU3Unun4nxnFmA",
  "key26": "2eaB2z63wgkkWhFGYDnfeEVFjikKv7BFoTsDG7atJprBb5DByw6VyPyiREaJdUqiWuHLZZydjvwUGPVQj6qfG4oN",
  "key27": "zzMepxHKvnBduAfzNSvj5JXk3UztxNHqZVJu58aF264qWDwxBVNupi7PyZMzoVMPh6ULSSqhBLtC72V1gB4fHjd",
  "key28": "3mYRWaHmeyRezEmQ5o43EKpGUripnGwkF6xf1RaCbzbEe7RFoM91Ez9VNhkfzHkR2dvv2T9aeokt1ZnftN311Zen",
  "key29": "yCUMYgjkz1DM9w6Dhzvd9Fimrd7mdaVydcm49uqo4av6ojRwp2gEra41r5NQ74Xji1UmuwszEZjC2cCMX41aZpU",
  "key30": "2VcoLcLAdXzYiRYKNs8bJezGihn4BHHE3xRM58E9qtnc3AwK88Nx5bDWXpSE5qoyZxrcxAYhv3bR8nzdtvkRjvkJ",
  "key31": "2qS6hyxVYBDgC93zy8bj35JSa4bk3iRz4igh4hVFN74hpeacNhVNpVrqj1dmz3A4MgJCfzUJdY3FMyZMLfpER2op",
  "key32": "2DvJK7aSCNdzoXm5Cbcy5BYeoCG4rmbyykRY2QxrZyke55y4nkW4ASVRU4d9DcvAtSJHLemSJrkZ9DFUuKFF5qjE",
  "key33": "4rhShSd7QxBiEPFYYVKJYPAPTfAG8Xxd8S1tFNQedhAh9D4jwRYDaydCRW4UdkfG7jeRqS3A2uStas6pjGn3L2c2",
  "key34": "bYPh44EX5MPNnEkwhcvDxhBAshNPz4ozeobPBaoV6Ckpi839rETERLgLQsXgDrzwQ566V9Yqd4SNgp7c5s2vgFm",
  "key35": "UkSPYfQshj2KhgUe6GMYrYTuWR8nPkz9WqxQvRr2wMbiLXv2fLDkG371FxNRUrXgQug4CEjNGMiur6hqgi7zmr3",
  "key36": "3zrCakG68cnShqbnxZPK6GUfcLDGJVoRZA81hwCJ3ecjiRiN1wQoiejXsjVABmnV6nbabomtLZkTnWevV4zDvyRL",
  "key37": "idCXXQadq7zgSj8yWTJBoeLZ41PbVED9M1a2TtqQH2zgaHMD94JKUKyQCiXjKVJzpWAx7nqPjG2Z5X11mC9Sb7h",
  "key38": "37dXdUrQ1rSgauhMcsZu5g2kMqRLX54k2woFeMA9ntwCoLqGJ1mzFQMpYj61AWGYdVvtytvXxUJJY8VY4enQ43Q1",
  "key39": "LgGWhTLTRpPneUbyHLCn4KWb3PM4e51Liutoz5GYp24EZzBtXqBs9dinJkdzaqbFmYEZ84Vu3bJg3Yb6g9m4SmD",
  "key40": "3aujZQuaLKgs2GSB8WBqwtnbbah2FFZEkJxXMfdXbJjt8bGWGSGj61QG4WHw8fQKYJqnXKjBgKfetpnprNUtoJGM",
  "key41": "4oZa24ubnBLMjnEPADaPeFgQ7YNMvC59G1m87YnhvGpa9M7LifbCxSqNKYtoQFUn4gR2GFSrf6EwfE7mJvrURXF9"
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
