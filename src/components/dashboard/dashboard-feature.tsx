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
    "3CjbM8xpoLD588Tc7vchkdT1mcjpSgLh1yzsHQj1f6XW7dH2ESPHosJwy6YGkPihbcy5bEtdbz9X3Ci1mSvSEZC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k1CxQExnUn7jfXG5dDCKwUUF5NDqQHauY5DkVVeTArgTC2pUAncKM5ezTjDk2A49BtZmPZRs68LNumDJavZwscr",
  "key1": "5f32RnvkrW61n6jhBpRXHn2FaNm6PpK4TJj2jR4FRGt1CNt53zQ4yErey5WTYwztxhrHvgmiF1MMjz33upqb7qNb",
  "key2": "JtL6tiJBXPAfNqCwwhNbxCYeEC3zVsQtpKgqvPW3oD4jE6p3ZVgiUifEwBCoZTYRJdXJ2nS5iHzeZVDDpEMCLPB",
  "key3": "iZQMsqzV2yKuy2EV1rC7ajP3q8ZmxppobLS63Cq6wLU777Vd7drNpjiWUfARvjEunbnPVX7MeyLJT5vWhjobjCL",
  "key4": "4JBpHTxZjQRbkwsh2FiJRkneKHa6TTm4B7tQU1HvwHnZNZhvQcQ8iA5RE6JutQmfwfmp6NZcygwfQxHpxsdTvFwX",
  "key5": "2w5EPPHTpX8Kr2vRBcabHk9YPt1Kp5TqBYbpDE5nxQYnpHh2G1DixvW4RxY8cJu69aAg5nrxQrnKGD9VTwFEFYSa",
  "key6": "g9kwbwh4UczZwGn2dyjkWMs6juy5SwJjuB9xQ1m7xkZ68Q4gqLsPiGju4ZXX8rTFNYT5rG7XtH2EoKHaLRfyHPQ",
  "key7": "56pnvgzvEPwjmniBRR83TpyDhD4GdUUEf5iMcC4GGuKC95GHn7ZamnwjnaFtKLoSrb5Q3wFTs2GhguQcK3jk4o66",
  "key8": "32C9JQ5xtVRqcEiyZ9dcJL26VrXrC3Q74sS2WAGBit8i3jTRMEGjUy22EdaCP8ssJdwyAXdLXn3yrGqTuwjuQXtA",
  "key9": "38H6Awcz8ZBFfapEnCnRHnRhoUtCakbsKm1nxHu9kATz98KXA3YGdfwcvTZGhZGrTLTwYLxYi5pMndX1ifCD6tSf",
  "key10": "1nm4BGCnHVdrHiM8oJKtQWSMHm3UBPqo3pQiSoD1Xsey4TpEKi7STLQumbK9m6HpHkF35beVN8FF4H9jBYQLuCP",
  "key11": "4SaKfanPA8R4TPkUiA9XSzuhXDB4SmEYUckGETbNhRAtui4qHxSZaR199WxbHj6W7GsdYx6goXFivACXviz2xJXP",
  "key12": "4LkxmQEEvwyNTJ6uXiSaHuSBzs5MKT5Z7aJtTXzDhVbW8iUVrtdd7XDXHqji53U4rCWquLuD54EQY4M7V2jzwix3",
  "key13": "4iwkjXtu4EK5x4zq32qriKwZVSPp7GdN1iG7cDkG5Tr16uobHtuPeAe3fjVZpyHCrC2aYaXtP6Bng7fRKsFEQfZr",
  "key14": "SY9QRhmfJ8F4ZjD1EPzxE84NWNE9XEjsRtzT9mZWavPgRv8iBGAqr4ALZGE3wZ8NVphsvybJgkq4NeqYNsdN7Fp",
  "key15": "tZWkSSkoiM1jejQFX7bq9gt6AZaK97q3edBkm3ov7D3mCM2JtJDDRmMKVzs9YPSFjRG4i9Tm6yujnqTMFJQAnTG",
  "key16": "2NFk7qpynRrZzk4uYWGjikRFkS76bJkpwSPn2hESXMZ1fqkkTr3KjfZpqLSRb8qBN96sDYLZfhvDqxPL28FonCo5",
  "key17": "4LtT7Rg99CKPWwJ3gUZqej3SuezRssy7xG1oYcjYkFjqYvYAkHk5rLyVsDrE7ECphWWe5JTRPxNzLkjaoZ4xXu3",
  "key18": "24i1VcMghDuLbq2M4idpvc5EXRLNG1iHs6NTATpmRRj8vZpuGRB583tEKg2X8gwAFstXFFqTjuPW42Pc9B84mEtG",
  "key19": "3NLhDDya5gfiK1egYQXqT2acNfXm2ZXFuubdwdVxymw4GqGBarZ8MUQSnYjdzoZYEQvzwVyBbDLBUDoduUMTgBgf",
  "key20": "5MrNobAsqhRmzLm2XVqD32UEwBDZ81rqq6XX468fnbV3WTEnSnw56idx7yPuXus3W8gQN4CmTPqJQwuTunRwx1PY",
  "key21": "SjUeNM2yqze4yizco5c82ZWNdgUVqjoXYcaxH32qkFUzTpfX6y3TPrBT1QRuXLc68QqoaLPiDhVs61FuXe5zH1c",
  "key22": "4L9kq8DSCGenRRX9WzsTJLojmWECcEsP7YnyXWZeHEpreD77xV7J8kxbPcsRqPdT2jcvydvtyYz7WAq9FjrWEqma",
  "key23": "5BUjd7AvJeam3fdL3gm9jdBfrK9mHnmYfdAgh89545sEcLvM7E2cKiE5mcvMHxf3Hqm5NmacpjvtKcthaWTPqFwv",
  "key24": "2bg9r7cv7P2JAGJckeJbb6C33CU5BVBpSDEGgpRzFyqKbrqx519bmiMkrSmJqvc2DdhDXXYZvueNd3aK546Pa77m",
  "key25": "2RWJxGdDgo7iugkXpxBQMdJFjbjGjJHbYuiFbvpdeaTo4U3kXouJs57dqJjRduEeHV7rcJMLrv3niz51Y8uGtSBR",
  "key26": "4sa12HiiykeyTJzaf6bcvY1kJmPrsB6C8NRf1YcwVFbD4zdiHCEfWZRdG42yUfLXkRBUJpVhuovKLhcHaJ65qfDC",
  "key27": "5iUZArT44YvNKueHQz1hb136sL7RmMbKA4wt2mQdQKHRb1rqZGaArmw7bSpbgmUobchJ1z2ZWkokvsdimXn98Qy4",
  "key28": "3r5prGDoZrdmqy5mzdjRJQ1R8gr1D5fuuADCjN8s7piKb2GBF45cfPoaJnejLy9xG1azPxeBmscTdQcB5iigMbSA",
  "key29": "2H3fWkjYWi7pFMeBCua34qgSPYc5h7gQ2QsTc1UeAjZX82J1nwRT8D35Q7RmVudDuswWiaaDTi8d7J5suKbebxnt",
  "key30": "4kkwXGUouvLvVPKN7zR84C26KAS6U95XExNw4hY9VYu5MXcGGiFq3xSSgiNopyLT12DSnMAVGrnYRKoGyaHkqQ8K",
  "key31": "3B2LUn2buSxVmVja5w3fCSQBKXB8WFJDMNVYTYmn3UwFNbLFR9mWMCbPwD9hqZqv7L7LnM7A36c8ZaK4dHFcBo8L",
  "key32": "5E8D1xeGiHuHskaNLY6kMbUbk5j3xoZuqR48T5MxjDdz71fjvXQ2WK61HD7idqtP8xHoXKJb9e48iDt8zZinVk4o",
  "key33": "45Aaj8Fu5gFbpmKMM4zSRSkJurqwVKUM6GT6MzxjzuD5PeZ5dZ27dPQzvQk8Y2Jpmz4CUxoP6t42gNpQjUXiVSje",
  "key34": "3nyCFm17158BqwNPTfaDaBb1meUcSKvvm2WAQNv8hoMg7cdDrhzCN2GuCAn5z5vouRxgtK3pxkcT9zKFjd4wbDB6",
  "key35": "4AoXNfXyrGa7cZPK33QW4m4CtvBzpX4P9kTQy2UTuAxVKHxwnSCyLZEbcjHcSa6qP5rWv9yk1RdHQeTKis7pqytb",
  "key36": "45mroFiqQbr94qrELzyXwZkZGvGbYbxrUraCPEJ2FzBtbJYLJj9f1idPQsKrCkF6f252X1ScaoQYjZTWDCL69337",
  "key37": "65Tbdx7FbaT5eVgerNnu61Y114j66iAShwZZNgjKqLT9PFmkWGvcQvTTkWsT63EJDyaS3pPzMrfEkLRgJ71AqSe6",
  "key38": "4Gvz3epNV7uRpRyHZyEzaouNt58J9Fe6h9pGJg6vQ1gn9gtw8EDKHaYsxUUfGeMkrb6VPpzwxx9dZXm3f7LA7MqH"
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
