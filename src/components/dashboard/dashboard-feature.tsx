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
    "3YqWauAnJqhMWZoBWxXfGLNseuPnQpJn1mhTSp48MQTpdvByANqWJBQPP9ED1cp5Nj4zxgNkpm3o9b6YN7D8oYje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63With8a1fepe6fe8BH5QHxu8Cp9zXpfYpkCV6ZEj49iX1c3KTq8w6RpkutyjFM9UMY8Hbayb1fwMcpjGtSpDR6b",
  "key1": "3z6JsbQamF97HNhPM7QHUqquiCSRwADfEqVcC9wF7zTnw2UPqYLUWPtqqAEqe6oNUWKqkgejT2GCGVgD2HCsA3Pz",
  "key2": "kquTVi77yLfBwCQGoia1rKZTF1PgE9sLjVSqVGG17tn6f8tnbKbaUegCNnLgg4LNBeA4fuGymGNcfTvVkWaJPNB",
  "key3": "4g1FcoNhEW5oo5QNJzV3xNJxC17wkFFZeCxN3Vnnt6g7TDMMtqgmxs9ZeqRRgEpehjB3Vqdi3PP83vPGmj5XuGTD",
  "key4": "5rDK11ds2mHBTg3PSDbUifwW481G9wFh4xYUKH5EcMGUpcR4fVXdwKYbRt1hs6gYxpfKyvxzZzadvLNkKx6CYaow",
  "key5": "4yFv47ZQxpnDrZCPwWUuV3cxZuRyQyww7AUohFAbiExpXCJ8fVWVVH85ZEh1a5ZYo5yiPDv595isqhy8LyS1ipeV",
  "key6": "QcrZc5EbF4HpEw8CLYS8iaVSp4uXu5vgSuLSQAzUxVW1w8Le1ok8J6ziHf8zJeJ723zxTWYxim2bCd9NaJVwBxx",
  "key7": "5rit8AG927HsXXdLf93WQfW9yVA75Gcg1seLv3ajdXzrSwG41oSgS5p2N6B8mkuTSAXybh1BK8HA1ffCRjWToZZX",
  "key8": "4NQQq91LQv6vnTVk58z3tL68fXX6V4quEkNHTfAmheFcJkbkXJ2q3XiSUmmNbJ4jqfuRFtYCgkKJYMrpTSLnn9EG",
  "key9": "64FLXmNwHX4susdYnA5ZsnSGvhGqhKnQWREv2Mvq71EzE8HN52kKKBD411MK9immjynFheDSUBHEkaZQLHirnQ9i",
  "key10": "4B7C1mQBGWXciWzqxR6LU2D8d4t2f4VSHdyozHTSotKC3F1bXhCyBrZqwb78cyuePAq9vEhgPQAy13FssfQaTUHx",
  "key11": "62qW6ewtttGxw7tv22RBE7Uk6WCBuHHBLHEThm5ighfJ7e4RsUBUkfBHzovQGGGzgQFZ66hbmtu2fcoEHxZPetMk",
  "key12": "4mAYfWp9ma3pSkjYekFiS5V3J5uBXyi7jTFHKYZ3AkBKtoC3ktYZtLwLtWdHBHLfeJKiVY3PCztB3ZhX3LJpCR5z",
  "key13": "4ZnpfNYrZeCvbTWFeobL2JBtZAKm1Esc3ct8qyM2aKWm7rZwh7PHc9urf3Btqrev4F2Rmxe3PnHKXsDVyWVjHGms",
  "key14": "23McPc6GGs1kXVdvNrF2Ap15jXjNf1btTzwMc2isiD2BeSHf9Shm4yNvHdSoat62KLeSXDRmMyG5hkXhW3B9gEQo",
  "key15": "j5Nrcg4AMxfo7buvqiCDgpRBXbT1poqEGq4ZgEmgJAQ67RWZUEXJ6wByBSUh4cSrej3vqUYz4x8G2zK1H1y3QbW",
  "key16": "4f4Hwqdthi6WPbYPkG2AKFB8JzcT9Mx9WHatHUP2b6rPxdFF94Va9T1Uh7WGSRWSEQUdcZhN6ZjoDundos5V1tk5",
  "key17": "5xmPkT74f4oRSmQyw6bSMFY1f71gCFndSRQop9dPdk6xjGo5HFvS4swrdqkUH9JpNU9bx3L7deKfmuv3Xrn68sN4",
  "key18": "LN8jchQYqtV8piwGC5dPXBGQYhCAqUKdQ4P1CbL1G2qrKbpNw3ab1o7QFMZtsRKgqPMrQAqs9iEozqyEpboFR2B",
  "key19": "3j3hrhAghrY2HQ4UWE82N6XLzdqsL1J7psNE6y4pjzzDFc3En5FpvygYCJYzmHYz3gqPbYyvD2Bb4tWLaSzkCWPD",
  "key20": "5vGwEPHWQgthNuQf6Fc3JLzh67Sqo7KowArJhNNPfxHfvgom9BW6zaaEm5qq6MsdAgmFSvVbdRk3nckU7ivaWSw2",
  "key21": "4iCEL5X73nJiuajaYd3prw8QontL64eFHwXpS845ibnLeFw2FfkbjrNicdMmERtsfa3GW3NeYtoydsRJ2EKfjfif",
  "key22": "5epTzkhGvaifjWhRnSwCc91ZMiBppt9yGRwJABcZkSLLKD43pjNi9wgEEko8Thzv5RFWQaHsjwb9aHgmipftpr7",
  "key23": "2VaemfsaxDFXKCzgSing6XWaPBx333hHGn5mzJobFBJENHcQxSSpZqZEzuHLs2Jh1UWGNZE8caH2qtg7HWPHnv1H",
  "key24": "3pWs3mCT2zdxi2Db4toFvpaTouHpEAruh4RkvWgWgi9zCXJ9KyLSmYsfdqp6qQHC1FqZVoqGGLZureLBEUZnnysB",
  "key25": "2emx43ut5uPCdppDyDoaWX4CsProJV4NCQu95b5UewJJ5WWzJt69CmbnkJTN4W15NBvLKEUznrfmU1aKRRZvMVjj",
  "key26": "2XXrGZhtZoXzSfeb9R7Fw8zocthUVLRNeyeh5BzVQ2aPqDSQfFaJ1QzR2QEJ44NmPCrDFNoTrM1CzGnckpWLjCxA",
  "key27": "xZnMCAH4DqiRdnBXjTqWTBUUCGyByR3YxLiyzzvhXBRaCBiQ1DEh2FnN2XpkSAUrNSYH4DFwnPs69mc7wWeat4s",
  "key28": "5qK8NNbBY2DyF4YCC8gTgJpgDtzkfbBXbUAUGuomNn8BdD6SpBMT8YcAZT9Gdd76vjmwd6oQUmcBU9v9XkxzPECj",
  "key29": "4B5bj5TGTiaK9GT7v72zhJ5hXmkEZnhPD35ssJZUi6fEmXDc5Fvpvvcr1aCQrsTLuSyUzjiWnB65arw6fQJPuc85",
  "key30": "4JH7HmU2GC9VzFuEGzWDvA957actFCgjRYsKhj8FYbqgitAk9yp4SWbi8Wtnv2JejxMzNHmtR3FCL36wbJnDr3mE",
  "key31": "TPr8VAesUstzu9G1Ja7GR8cU5eborFm5nsJ6bi2CwCHhfiEjUmEK1W2SpMAyC6gwcUfcvHh8CvA3s5RG3BGLEWY",
  "key32": "29ryzi53wAdRCNsi5Bxr71Vww4fFBsFsfVtupfTs1CwdXSh7phYqNtdJLQDyVrRopK1DvFWMJPn3hh6sb27EGhfv",
  "key33": "4CVdEGfKL7MVVz2pGsMhKBXmQoPWfe3emqmzz2rL39gWqAaniRy4BnTCigDbohrUXzRsZkG67gRXt7A63SCovoNb",
  "key34": "5zNmc4YDEf2fZFdRjVQsJcDNQpqfJmor9btxLajvL74L9tAae5TYVS7oFRTQYWYfXwaXRocWGXHUpFYVPyACsLSp",
  "key35": "2bbMD8xzoEgaqsVNanKNoo5ALW5HpVEz9MSp7i2oMWFJSZqymyNHjYRhtCpG1fUEBNTscDVeUriP6bmskZk7qnMr",
  "key36": "44AmU4EU2rv2dgVDwbjH4aZRS1gMdBBCdWrQkK3jDSr3WX89uxEh3RasR3vUY2aeSFHJTmGknKGmAArHMuYY3RDL"
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
