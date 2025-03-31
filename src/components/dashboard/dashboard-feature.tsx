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
    "2Q4PMEnDB52v4L66GpppygWctURRHoLcVpiwG111C5yueEDbFRJnKtzBKWcTGM96eQxqrF3w7tAxoyB2bB1QiLwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WTqUTLgRX1B92hTKrYun6iVigUdytvYmZNYJ74J5inzqBnfbn4uVzgX63Kf7hgmx1JKrcXkGPkfDY672Y55ybxu",
  "key1": "E6yFoVEM2CSehpGy5pLa2w1RSMPiH4ujYaox6hgGcoJ65WiH4FhmrpZ8bEg6h6NZgYwVjySXGDT4ncjfaGtdeeS",
  "key2": "5DdTtAMRdGzRyV2NWYJKNfvptwGPiUwoEz7hkhqxYvMWFob3GsqutVaK8r1JqJJegqU9gecpr1jHTDqVC4vW3xZm",
  "key3": "2suoFfN5csu97GBDNiPBp3aj6Bej4HUUXnfmphrRwrPyTqysdgQnivPAMXjc1c3sirBVb5AeXPW7aBBjxpW2puAf",
  "key4": "4ZLMSPuc1PxSyGPtmZKysku7F12jfLpEf91iQJ7nRJyHUFAyTRa2q6TLAdS9DJF2YeiygEVV4toDhnoBvYVZwPMU",
  "key5": "2EDEUb1zdgHsTzvoHsAJNSkQPbeWAciSbjaMhXtByKpmbu2YqVYp2pLFAwL6PNeJ2KtXAQ5aNkLb2wU4mAu7wPAr",
  "key6": "5pYNhPGbyj1kbgpvvMZmPK2GAg1j6Yo2X8ExMfvRsgarzqao5x71Re7z4iSbdL6XbbVKqBKTvBJPQ8QNwxord1xf",
  "key7": "2M1xi1VvfdwfsoXZUj42R7eANiJqbd3GcPityWRurUzXMhyB6j3s5uozAJWRNBuWRQHgtpyDajog5xTjbfVu1wGs",
  "key8": "4YpiPhK7ZbwjG8AL4TPmVgEhwpSv8ZErnK8tgupAp7UAJoyBZkySKRJFbkGCGLJWMUbH8CNiXFGKR7m8kZUtqnXs",
  "key9": "hm5e3UFA8FfHwvAYHVrhpqM7XkgunvVE8R8GRA1sqBFmKmgmdxsnATbtaUWxWhjoFL6wXT2VRFuZaZ1Em1r9vLj",
  "key10": "2cDH6zH4sTxMqJ1vAmu1pMAsqB9tvKpQiKJ4dce3YF5CVDnFRt2RxXputDg6GAtz6uHBejKkqp5kV3qdtgS6RVs8",
  "key11": "4TTJRKT3HeTtjzRVSMXikHzsZUEMuXzYq6jqan8NV2YPvtPWMhN6CSW9j7QuHSdW13vVL5hhsmQANgN6LrFSVSGH",
  "key12": "HBmQyA9nFG5uCx3bRB7kbpqBXaTW7cWzPadUEVBipndspAcPZVp8adGWS1WGaiVMk1mGtaX4CJBHDtFBVpswC5k",
  "key13": "41zH5o3b1fDctaoaA7XyyygACqAgza5LfkMUTcwwERbcL8iKHhUociSGpE78TwwZii1HPf9GgNKW6iZEtrv2aXZM",
  "key14": "QDSRj5EkzArxfa8rPe2fXVgjE4sedKaWttYeoVc8YaBRFXT6gxnvUixiRrezpUCT6eMEapwJanQSz6YJy4yuo7e",
  "key15": "3fkqHPmfdzi4vkpXGK5y16Sa7SgqvuH9AApZmLp7i2mN6uuSSZjDM7jxpbTZu5T1TG5E7bdyRYYAH7VRoU5J4Q4k",
  "key16": "3DBJ4uJZxpTQ17XGGMkjUB1ZT5W3A463GFwDxGXxP1tRs1gi5E6wmTztrpqsXasswFQrSK4WUBVHYyz2JjeQPWng",
  "key17": "3Ffv2yRPtfVzVwEyv43EfgDufdJ2VPKPLngF6iNjGBtPwd2GgJGJkRwzsyH8YJ1rsKHJijzkRmyaEyp1xhRPGUip",
  "key18": "5SS7cFHi7Ey2Y2gfJ9tHrF6Nw2fDajk6AvWLx9zehgKRDMZBvuH9oS2imvq497PLJb7KajErWxWQq1eRMibgkePz",
  "key19": "31xmCc5vUXnKVTSLgGzab7WWtr5Aj8fSBZwPKh9jNEr87UTFiWD13Gjv4qxobX8G7TLzehzJgRUvT1z5MRuqK8FN",
  "key20": "ccntsXgPPijJQiqpoQBWTgoKG9mexVpCBf1fJe92bMKcZe4k5FVuZwb8cG82sExGG5YEmVPr6BHwrDAUJb7Kxbk",
  "key21": "JbNikZ5gcxinA9DhHj69AUK4xXH4ow9Hu6c9WYXCyJF1XcMRpv9Pj7fausA8gDWecJzHMZLz7fyPj2rYJuCpB9s",
  "key22": "5s9CHQdkBb5QPHyh187SP5mNKrzyhVjdAvgKzqKaVHhGpX16Sa9vPaDDarHFhfhpZCuaJj9RUGptqPV4PQrVF62E",
  "key23": "5kjspfsfr7bNTTDcKmschNVmfkkwMYL2uZ9drEsFKJy274cyBQ24CE5bmShXfBj7imnxptMM4zeSSrd81YLTgsD4",
  "key24": "2Yx7PPkZJQiTFWYkzmQPAm8ZD55Giae8rdMuWpGNPLuKJDFquoJUFVMwauXZ11LcnYrDZruHedKPutKBWabLQCrX",
  "key25": "Lify73QXMN8UPHbE74zuM1pU8uAK2ZyJWogH6cV48fHCmQcR8fAG1pxccPWvcBecNukKvMiBZu1UZ34Y1fTSqRH",
  "key26": "eDHPecLjFTXTzKABSTacUzESabBQWmwfimrbftEXw92EcuvzXpS8uRCQReGdRHHfRZNd8oJmDXuQEMYGakrAxic",
  "key27": "2yKzutfcZ22XMPTZ7UZx1Pd73fAaLqgjdzikfsWPLc5X8UuTGvXtfs3Yys1o7pNLPR9aNNatuHKiLRHpKkaf1wTX",
  "key28": "5R4Rs5KUBRnx9iP4NfCku442x2ELC4ogVWeqTWsRZNZo656iyw6XWoDLQwN9Fna48RKbEUWqNhUVotWKY8XZpucf",
  "key29": "49irKXBsGCuHs5YnQ62bM8c1wnFhENJ38fBKAgYJNVAwhcQmVJYZkMMTDMjVW8v5Qv5QNa6qxPhyrfJmMbjquHZr",
  "key30": "2DsNbPd1xPZnWymusKT7hroRYS3UcKzBuV6hqDHGWtvHpERQHRjW5cNeuxbngDeM8hQovz4tV2PFDUFpPie5K6bz",
  "key31": "3iUQJFnyZvSLTkAwrMe3uyHA5xAFuc5Qc46KvGGFsEbZ4wt6iDbihAbNYvPwGbiGVZdL6jUV8J5Di5oEG5i4FVvF",
  "key32": "4qxYMecz3CS7Q6KZeTkaChDJ2dz7oEn2tEhnJd8NqS5vTSNXRStC4cwovrQfU36iyZTw33iUhWXF9xnbqkTJpRKz",
  "key33": "3bvgKM1F7xo3ZNLoc7uCUv1t2kgyoPZepmygawyB6zVkRfvGwP2XFnoezLuiYNQ4oCetAHqg1KHHvWoauoQmhRHL",
  "key34": "3bbZxsnzCzPDTbNrYJzZZyjh5UEiajbhhGARqgLH6Qq4TZKqdc2ewcJ2AKfJ6yiXJ2AtCVcATwXEN2MM4XhxJHaB",
  "key35": "2Cyt2n5BgVKt85iaoYxqjVApzL5r8ADNg8cMoULt1yMwEPZZyuEEbtWtBrMzsayvHDyTw9JxBaJLkF3kWXCcFVAw",
  "key36": "2DZJxy3ee5gd7aewf3DiKxnAtKtfSEnZcQ8M7qMkzPXeTf16FYcaDzUiTV4cXU8TScUm8FvdmxnwfFuHAqJLo6qV"
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
