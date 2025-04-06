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
    "zmAe1UgDQ4vCheh7AcU6ivjWznVZzj1zMZnScosqrEgL1upzH2QcAHGLhwJ3Dtx2Aq1uGV28B5szoFsxrcvwaD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Xtt8hB3uQpo2m1a7z8wHZVDnrQUVEwceKjScJunVaRHn4J7RAsuuBiU1VZGihUw3SBByG6XVBWAcpXxi35sPVJ",
  "key1": "3WpvXU4eByeTFLFHu3MreewKYVBPce7prYRma3PxzBHD8RzfzuDgKQjroetF8f6TminKHCkYQFmyVDaM6U4wJVnX",
  "key2": "3kFFt1yi6tmK2c8LuL5fUdCnh27RJp8ZMcEx4YnH4Jfmqs5SYqdMszyRwoLaLaubUvxuS5fXwNUT4u24BvrBzRFP",
  "key3": "3DGmufZerAn2mamEfvos3J9CdtYcbcXd7Q6j83UrmLq2KCRZpg8PKsKfmwS3tWjqT58c6XqK3sCfNppwCd5Rb2h6",
  "key4": "3YrVBw5d7mcqn2fbXg6E1uqpHmfWLk8bMbyZxshtiN74xMLgdxzpfYkjDdQ6VhFD5eCnALQST8EjiESq9DFvjDwb",
  "key5": "op8jdbrt8tqSmh5jjjhc5Vuq88JdTNsFNMuwb9sudtFvBw1sAX91Fjp7Fv2jm7THGNwwqhAzJC33pMuPADrrvFY",
  "key6": "3u9oGnaQaPS2crXU1L8Xi6cTBDvZbKnNDXu9oMtneyiGzmVAPb7iskkWxQBs84G7JkobrHiU4FG9Syp9gJJ6yeXt",
  "key7": "4gu4v6FiwFswsFSJ9Gxg1uwiCFy8J4WQCFKACKMU4HJSWxzyND4UMJZexNqMK279NqHuA7Ft9NCFxJN7FfaA8rqP",
  "key8": "5WP6kKXLT8XUJAu2dxNbAGoAksEaGPE6zVZ5e3hxXk5hgYrsm1NbDimeGvkYpq1La6gL1fshEjHBiQwXjFqPSjMt",
  "key9": "2X2LF7A8jEMVNqFeuQDV5NHv12XkkkUSU2rVXwdU18B83jCxg7xM6V1XrqyDe8KqwCMG5jjqKzvmXtQfekVHA2UB",
  "key10": "3bqxEWZ8ebUcBb1TgBmiKQ53epQVKJZZ7M8tipf1JgSDWii9LHeGmjxwZGX9YdjL4XGBDfA7MQ6Pz1z9wNZvYwwi",
  "key11": "5oJUwjJdkttCTerYPeYsL4d2s5DWkDdAaDKKdF7e4JuUmvhRAxDkrbVpV1NgNFt4HX56vHWwovdCaFNUmij2NLaY",
  "key12": "Nu69xyxPpmXiE8kepeDSoZqVQ6btQcBKbX51skNz7Dhao6Mt7t4dWaZVwTPpGU5tKSSrL7w2RnAuPhbKph7qfvC",
  "key13": "2UAD3W8FnBRGZK7Q9SQGAhzkbhSxkxmggCzVUfNN33aGz96nH38BevKixDoeK2WadVUKajMoP9mAVe5famwZ8Utc",
  "key14": "42R7utwFft8exAeNCUs7DE9W2n5p8EuJggsgt9YHjsjoEq8q4QRZdJbnZV1mASgUtgjmAYnNpGefuUjWeZUSZoH9",
  "key15": "a1hL3CAtTqiMehoQCEoxguc4akuiZPY2LfeuZcVr6dSzxr1cEjuqEdtmTGoEEgKPCYh6iJ8KS42js4MoTnErbgw",
  "key16": "5f7QxpGMZbRcRkUqef9sb3hEVZiQuS4nCv4FhH9bAgahm3pwbSviYDMPJL8FBucRp8yxAdrnaGgPxQ1DTPU3uzqj",
  "key17": "4m7gvbNd1nAgXfcNSQAZ1FcgXdBm6Bme8qXicXDza5N5d5Efa7DykTgH5am4JMMXYgkePEwEQVpESuwVjYZfSk7B",
  "key18": "2e7ccxmoyhqjCZm9n7wPVsQjbisSu6rkQox2BcKp43KvJtKTTXdhqXndUFL3hZ3rWkQcvz3qsw2qFA5mCSsHaTKW",
  "key19": "5DiQb2GMWGu9JXcJNZTiqBuYvtGU8hSATBCWTKJoCd9maTxTwuCpg7Rsb4Ek5nqr5VLHo3mab76VWSkRGYb6smdU",
  "key20": "49FTKnBqBjXirMe5drF4e484smd82Jxjacr5pAsNMURRftBfuSNZGercVnYqDTYobpmzAKwJHPu7GVE84ky4zNZr",
  "key21": "4mdQvvUC6NpzPT3XdFgwJE7rJPzAer3hNx2UxsyW9NqdsnJys57mc4kdux66tGdgizmLyQegUEJcYPsJjmvPkpjB",
  "key22": "39E3Gm2coTwA98CCjJqH7q3T1q9LLr4qEWZjhG4sRhhj98Rtm8JgLQe6KJPqu3zkbdJrHBPCUVXb3az8LPz28wH8",
  "key23": "Mq1fz1hkGep8Fykwh7JV36tNRfXnjqmVTnvm4Ners9JtDTFCyP8xATFmPMXRFRMHKDQf6H6877hsaMYGU8kEFTS",
  "key24": "5AYXiBoc382iFGbqiA1WzhNWH4BvZnGRVRdS4y5wc3GpDbzQHxKEAT8ErdhQSZLx1GWU3bHMfmrLM5vousm9wBfa",
  "key25": "5MC54SAqMRokNPhi561Yu25JG6FjHQxJNPPhEodWKuXfSHsCL9P992tTFDfXq9dbg4zWW9h3T9GzmbbdnX6Zu5Bc",
  "key26": "5224DVtkEzkUoYmbuUf9bpGdhPQnTTfx57CtPj8wCDk7KfwAWaB35andXbhw5jViki3aHD1VqQaDV2jM6p8wQLEE",
  "key27": "2p1QEQeN9CA9tduAn8M9ZuECmmN5Td2LDCsakCAEFmuNsrA6BEejZhFaLcDgr2t9H4oDt4WLgdezMtMFrSCdMRTH",
  "key28": "43J97dWL3jBsF5HrnrGW2q1Krtz5arkK3dp2c1k4FkF53nsSwrwts8Xd6NrNE38KjCECfp2hkiBcPiZjLrfDhwJi",
  "key29": "4VieAAQnTnCqM83Bbez9FpFs6e1Lgvqk9Ki1UZbBqoszWRfczurZqSiGC221YJUn46wksQWcEjvf117diJzZ9GLC",
  "key30": "Ch7mXrggQD7W6qMow7Wp9wMdXRi34pAtw5MZL11d23ySdh2hjhS3xBNdzqBCAs13dny3rx9ikvioC295VhMF9bg",
  "key31": "2KraHfaAB92w5SP1cM2qM4VYQqy9e4uwtccq3aiCABuRfJXACq1oN2y671uY2LowcmgUVjys274rBYZGok1HbgaZ",
  "key32": "2eDetYf8W1H5spSsquzJ7Z711ECeGGpVThmYMhPWcL7iPX58bA9Fcx6fGnt85J5VjH4aqWz2iTRo3Rwsqve1Pxg8",
  "key33": "3NxVXreXzgKmnRcHyiA8vCkQzYtYt8cquvEjwergfrzN4rYhLmSptbGx5FCr1AqsHmQwhWLd6uG3EPVaLokBmU96",
  "key34": "5NsTn5cMmUf71Kn9i91QfkWqKnS3d5oYf7V6njvnWuRKBtiCop6hDt8V7csnQXgytoKi7oyCqcG4nrkEbpUdn4ZZ",
  "key35": "5xmMREhdyjYigM7kazxNURPSoFsBbRfVg1dsHQmeRswKhc5St1gnagLqioGGUx6PZRJCywMxv8TW5NK16sL8mib3",
  "key36": "jcgFZYEwTuBKPDLPELCaB36iYrAxqRq8SHYc2H7cbRP97hPT42kPdfz9gSYjHWafyccEpdBSiX89BJwLkBmwDf3",
  "key37": "3kDHsFTTyjZnYWgj3kv1bmQZ73Yvf99k5VbB8jtb7mgPRdzhsdTe2M9E8QQdsvpFY8xC89FC79jt17qhaRBetqpd",
  "key38": "CNK6ZGXX7ieuhcnWFnncNgMuaM9gRYH6x8rkrTWYgJbJrtvHcDYUX7ahqbs5rHF9nLPqZ2p9faX9EQ48Bz7XFEe",
  "key39": "3BwuPL24cVA1igat9xazy85CdXwVG4UFXGTaFjf4iyCAycWvuvHD27DMNYawXzLkp3VjKmqEt3bPqLu5Nd8pC23g",
  "key40": "3Wjhtpvz1uMearXN8HxPZNR98DCJtcoWRRBLSEuoJFKrjoVaZjqKaGL8yLeCY5e7gZgkfhUf2SVT6dx61pBwjyzw",
  "key41": "3u2XjvEXCzJqCSkg7TVMjjWvEg4iS25sqajikWFrcfHinpM3pNsJkrKUhEQ1Xr8EmwcKGTkNjY2k78kkxHcKrjv5",
  "key42": "4akmxa43kF7CETnHyJz6pMWW89ikQLv9amxwRSkxAakv5oYa9sMYj4faTpWjGDGZbe6GY5grnKrBuuCrBVmQ3y95",
  "key43": "248D3dvjVuQbXCtWN1mBEQsoTcbKBmhRiSMkm1BEaSXBNe7aB1GpgCeGyxXRo9ygrLFyoHFyWJkUxh6ziPn33a8W",
  "key44": "4xvBceSo8STNF8xKvBsvSyrznMdtFVKVm4jxXxMAZccHDMXmuu6hw7xenpp6e2fcCpGfokdUcP1UT9jEfXa2od8X",
  "key45": "48UA6vWuTnyBYfJseXge6GmVYa3q2febrDkVSgy5eeuTqiT4w8wYXh6AywZpuUswdVNwtZCuLUZMsuaxh2Saag8A",
  "key46": "2VH4JaZA4azkFAjfaSum22wR5FqALT7z2MBPmW9AXnUozEWQQSWLNS74Jtvfbb2UkkNmb3jGhfXpszBTqU2VTa6i",
  "key47": "5fT6qFDyujVn9xPmtKHLm6bycjquWeAF8eCtsnzbHXfpPwszehjX9VxfG9fyGxWogWnF1MSxGQEm86K1kHVx5AF7"
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
