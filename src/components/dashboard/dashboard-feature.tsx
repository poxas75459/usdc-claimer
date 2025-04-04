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
    "f7vq8jDiTiBtaLpcECCnL3R6EQACoaKbxwt6ZqSmC4c6uFBXdAeN3EKVP2f7NVGuo3RozbZfUspVJKUgEiEq5e4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vy9HTAAgeLt1gVR3vK8igs1j6BgwM3obj5xXjjoHgR6HSgPCujCT2PD8Gy7wo1LLtC7A9gnK6FZCcY8to36CWHD",
  "key1": "3drbJpkLCWz3iWLje362x6tSyjJ8yQqhTDwRFGjeKthyRcWUSTp8KQSd2UDvuUm9s1WCWdZNzK1pBvXcyrVubma7",
  "key2": "74hv853Hp7TFahtBxxfGp2TPChs3Ujm7VWCTo7WiMA3f5wMFFsTSXmfZhPy78k8fU4sDPDru9ybb55NrStZsmuA",
  "key3": "4GrCy8hvF2vMEAku3E1b6a9H8ejkZdX8pocbsLkRBQYe6fWz9NoNooo6WXeon3sk8PX8ZVhiMHKPRyJU3CzXXK7P",
  "key4": "2UkYttwFrrtTNvP8Ebg9ixodyRoUL5U1AMRYEMnCZauaTdAnCSUifTmcVKbX3XMkVVFTg1t6MGQNrxwAVPqQRwtB",
  "key5": "4exkt2AD5Nu21trcnmST9vmYaqSRVPSbuMdVtcrPSDsx1LFdCwneC1bgHXeT17mhkCMAf4ynYgb4gTLfAQCeNvDC",
  "key6": "swp2zGffkV6224EhbhyjcwNGgdn1Ft5EdMcokyQH2RAayF445DHWDnEznq8G91M9ikdT1xPQTaVcKo7ZChf3KtP",
  "key7": "gk2pNuZjW73rqGEsYT8iCS3722HDvjkZigZhtmDAy2u1PwKdm1pRvTXFmNFMVsY9iXnBWNfyRS7ZAiPUyaxpa2c",
  "key8": "4a5LgdUxTcn9hhk7uXYUHpNg6WrSkgiSLNWTZYBF677EhD2dSeVX9pjwrw1hNfQioVrFQezzEn4hQcYgSfPdtcD5",
  "key9": "431JTaqTf8Qvo6HXCmJwZQYVRNwn7wwhqCimqMyYVf4EAbcVmT3M9KzkFjLgD4m9FfUh7XsaZ7hemmmeCmhF25jd",
  "key10": "29NBJatHuS9QZyDf7vzhkVDY15CaKFcGddgB3eM9agjhWm3QrCH2YNTWLc61WLevxnXYwn1h8WenovKYszTQM6qZ",
  "key11": "4zzXezpvaf9wLGuTjcj3TMskCFJgRATDvFft5nBK5CzE8Z8HBcJojyC11MQ6Wog54XHuLwZGK42zfyvVTqjyar2u",
  "key12": "i6rUYVAUhawiZxpC4ApMqohJSDRxXAqXdipGTQtApA1Wo1Q194MVtYNW1nwmbs5WdHMx3uYzsyq7AUD43sMZL1e",
  "key13": "2yQvQozLFpR5gPJRDScvpTnGsLJYmM9SZWSUdFVPXRFFbq7cVkjX6dXd6vRSCAVD5qNK6dgeGuvUQSFM3zYGmNti",
  "key14": "4dE8EnP9fsc3ZmsuQ9zjybYD5kyd55DcNGeVbUA11e47pBNR6KtqTWqPzX2zcvVyCuPEcU4PxtnqanxPmjsZcK4a",
  "key15": "4VEJF6igvMQhogsouQBpTh1D95HYW4uGLSAb3J1G1nvXFssQM1mhogtei8D9zomEU21QdTj9CF388WgL7bFyqXQh",
  "key16": "d7YoNFQgiA9kr3Myd2xFDNwGcZj6KV8bv6gYxJxo9Cn6h2CypnTMeBfTJVbnRvKFrQJtsLg5gpfBAgaXGtbad68",
  "key17": "2ievQ3aNjVnoQLZbReRYfhph5pasJLxHkYbRMzaPYgPkKUBZjA5eLchJR2r1pSWtbFZdNq21NU2Axn7Pit6uVA4e",
  "key18": "36BtYKJWpy4m9gDnu3UDeiuEJWkpqgsQBMEBFiFYWK49uJdC1VNqsqKGu6fE6p5t7yxBPov3Jo6nSYMcTEMPeChA",
  "key19": "665emf22RYnYNgiNux3iUfxNZNxdoEhSHTaoumz3fZU1QQJfveRU2LyvzrrjSuBCRorKEkYrXZHkdnzBp9mH6bqC",
  "key20": "5m4feznCrcYxtHobwzeE9JL3RVZ3M2bfgBqNGeVttoVK8YYssvQMXRDp38WDKYMiFwJx223HoP6mwVEjS2B8GwnN",
  "key21": "3RzTx8iqKTmfwH6mWKr4Z2kaqxUBeSVHB27b9k5mqcaCWg9kkf4oqShD3yrcGzdLX5G9p6SJT6Mv7wRAnUsVhWTw",
  "key22": "3GTH46DXRoEKJYQcZNWwGtAcxq3LMY9X2H6nHN6u6Y5tbgankdQeg7P8SAxK4f8JhDNwHwcXoBnqcH6nFwkDi6KV",
  "key23": "x58qiTG8aWfNqJoMUeokYzgw4nFqaYo9LwcDFNE1RvejMUdQ3Cnc5hSzw7QaFdLxTuWSywvtPfNfbERoP4iP38a",
  "key24": "2mcYZE4bnSHWkn1dQAg6dwQ7CtabhmDMMKdzo4X5Pxxfz5QZVxdVSsNeRMCMyyJbDUWLCo3EobdG4awstTKch7yx",
  "key25": "3RQNpBBQqrBhRyK5d25d81f3QM3R8WhyUwLEDwomygxQUeygR9Nv2AMjhEJrLqHAK8mpnKxuZyWtwr6vkskxVLv4",
  "key26": "5brTrCDMvEXF3t7vXrbP1ZkfSFY5QXqgTN1FTFfKMnVpQismW7zHsakKjdUkGFQEgwDdMhdA3hNmV4KqCuQvEDor",
  "key27": "3CcgR8nJMXMKUfPQ4ApSViNDbVWg31CXHTsnThrpuQQcjNMdNJ1Nqfzba998UjnpYkiixWuAqa85R3ovdn3QtPW3",
  "key28": "2cHusx9zt9vhJoPE7pK1Z4cePfYWGceh9hvd4jcU6C3wT1DqRjKw2D71hqen8A7g8WXGd2jNushYE8Mf2dxANNpj",
  "key29": "2BTeHDETFgSJzzb6hUJCYYM1QGn1YtBi3wx1JucBXW6QVnmumLqE4Y1ifgBNm3ktyLJcZvdxeTF6ibek47xe4Qtu",
  "key30": "3qFpMBe2uT6Lyb71ApL71etSBJsrJywt5epS8yUtERzWViuNyn3ucDzRCpZP7a2tsQ4yxovqVhEv8piy1uAmujwo",
  "key31": "3VNKuZ8waLqHnRjixwCsrkjyPTshNWzQG2VQG4GcSSr3yh8BHhTCiX3ahAXNPoEy3NiCdxymvuqPABfFf6qvDiaL",
  "key32": "32FDP6YD1AJYkRLNXuLFqd5cRBCs6yUSsfHS8naWixov4fPvX8Tr9isLcsnccCrFFR5M2x3B7xjE7RDJK2hoMwSS",
  "key33": "3EA7uTRkBLUPNzXGiVpmCkReg9HoTftB81DALRFb5M5AvWhkbyS3we7ivUreC2F7zyGmGiFd6WwwueNTmRxGZpbT",
  "key34": "5SvgwwfqDqaGTyFt4kMk1UNKEw5odBr3y7VYADei9ncYmTDmdTgZto9XGyXhNtASnwUKdpSB3HXRR4rGuX6rFT9w",
  "key35": "oizYyEoQywcEUHXQ3SjrsMVKiTznuZaGtS7kJXKW1hPFnrRBqYGhU1dcaWNY4E5jUxA7LRUx5cSzN91v2pRJ9hg",
  "key36": "4Ht3DfJXmMq2FhPEPcQWTLKFPV6eRpZ5979An7s75MoKh1pcfUsxw84PhXgGHG5bYsFBdrbvjgYfWxB3tYxPrEM8",
  "key37": "5MdbXYzo5QBhzRsoXhtDC5GpwQWmgWRUxKKGBQGmJQusgyEDiaDLqiyteNMNuiQ6syXkP4eTTk5BuqUDiCuRnQD2",
  "key38": "2h9RUxyGDbyCsvzj79BBQSgiJn7CuWyAXeGnFGCKAkvD1SVbHYQQG6eg1WDoVbYdRq1aD3ChoKeL7tj5RdxUbDup",
  "key39": "5Cf2GyAAL2M4dz2NDpLmwEV3VEE54ys2ZPb18pNtNzt3AjMNmYHXuGeWDh1xH5ec8VULbjuoywj2e5Pgq7MWuhon"
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
