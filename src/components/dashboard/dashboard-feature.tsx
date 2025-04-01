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
    "3afAPCD5jSie7oswhdrwytcoMx9YGxH4qFwFpSMKwgnvLkmZGe3nthkdMU5aa3DLy6aTdsgnJXwnMX7qNNZu7Km6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yXkxuTz7sqq4x9wdTyWz6bWBEydCVbSVdnHvf5kiZFA1VHdRvj3Ghgg1jo9JbM1T9TmVvqLPYvydon6TPC4oQKZ",
  "key1": "21WfQpUmw3ZY2eLsan4g1o1r3b6nKspBhRxKGpfcY7EiNDKwHt7wi8XmtNDEDFXeMj4NNNsKarSuw79JSGhkvNEL",
  "key2": "w2pG6nZu7tNFygh4M918dBFz5BEbymUZpSHP1Su8MFGYU2sAGk7yKdmcMobjTgQ9eUbWBjN7JHmc29LVgmb31BD",
  "key3": "3yKbt4RodfAJk33rMcydpKP7GSr6SPURuA9Dwtg821sM4a8FrqY6r8iKYiXbPpFfaEPP2sQDrVxPuJXPW2V4jSv3",
  "key4": "3bgA7qFB45XzekpP5w7jujjHadFRNizFbTP7jAAwk7tCF9xtywR2o6nVsSaxtkCucvvVNZJmDy6o3LmGXbapKDU3",
  "key5": "5tNkNWSDujrEDrBaWVUXxWMzaUrykjDdso2dwGVrrWZCPwkwvG65JucJiiimsDPuEyL9UqEtaaQ3wpHLChQGo5e3",
  "key6": "5EtuURQbiZ4bQ9NwKU7vGz5SE8WhsTz6hnqxUbKpxecfKYmKHxzbBaZNghzU4rmKGPFM5aotZs2owTpQgeqoH5KT",
  "key7": "BVFPK89gdqFzmyiSBxH8wpxZ2mX3EqHvkrhDApAN6G1aZu8Dbxr4YHVUpxMqT3EMQ9qoT7PSkyEQXtAByBjUH4o",
  "key8": "4egUBzavu5jnrLsMsXdANTkwjhK6NfM9SQJ3rVX7mjXtqqDafFVYgBYXc7Z3LtpBTFHpHMYdfRCxnmW7hUpFJBM7",
  "key9": "5EzzjfMRt8G2C1q2VfySvhM6vnQsLhUKNfaJeWoT8BwjKq2HyABpqmQccMKxxkGiYgTAyDu8iDxwAakvqXQBKrCs",
  "key10": "3Gaxk9NfSj5zyqjguXgXx8gDryaig5DTA9jEB61sAhy4x4PJAbbeAUqcuhKdu1yMmaYJgcwLAYCb6CcYF9GQCaR5",
  "key11": "4ehgN9YTYhU1L8wvuc7a7nFLPSWAGV1eB48gqqycnbxSPV6Tcr3XHFhu5XjJFXYMvphgu6HPy6ZrwS7uc6X458cu",
  "key12": "2zZARXgQirrBQPHsv9W6RpFB9GfkW1z8rEfJJkobMjMJkJ7zhNXpXThiHZkGxWLJijE4SorHaHk4Yj7a9avD4zmk",
  "key13": "5vfCUkULDWph3RHDq6WjsqsUySFKYpxJxtRjFEzmXS7qpPvex16KGZpY9sSW8UwEcyj8m1pa9cah8f6dfqqrruG2",
  "key14": "2EmFEDZ3XAMEHnj47o49BvbPjsS2opEyg7eyUpqxYELngDyWDKCawvNr6Cpm3kYXx43EZnWYrAKwSqKMmP6wPkoQ",
  "key15": "fj8bk96mo9KWURaDbPUkQZU11ww4sbYdT2bK6CE9hZSBYexcc8oAhuyPTfcgBZgmn5YWRGpgpTBtnBuHawDuYkr",
  "key16": "5SFgSjWFAudBHZ5fvB92fnfZPxrXMv3CFEJjVtYjdTa9ap9arirDqxgWS6A6ggzAQVBLXcStu1iyGAV5RekD5dRE",
  "key17": "4LoVgkF2emBNfTzuAPMcMtAu6KETrWPJStaUn5AA5M4Xgx2PgsFHd5MHH1gkXZebfdofpoUVx5zS5x1djXPGenCy",
  "key18": "6kH3gWNBEERDv5zvNkR7gPTUEryVHVLPAdSbLjPyEiaLjsnuTN5UHJpSUXdCxKA29hmRPAh45a5UeqwynJS53Em",
  "key19": "kZyMECkbxjwAFVJbuQCNFn5fhQHzQAoVCtVsRGoJCSRPkyVremKuPSQaDKu9sRR6TZK3vUr1u7oTws6n37ktR3i",
  "key20": "29mjfYp1uLQeyRTu4Sv2kz68f7T2q5gorAcw6Hp4Pj1zFgNBGNuWPoV2aBPHkf2zv7wo1bJQeAYhEZDWzZyhzNbp",
  "key21": "Ljt4PaYd9hsJJaHYXGXB2v7cB4fHH9ki2C2GhPXL8CNBAif94WKRTDiVJpAeRiiQSY5ZZe5vp2M5r7nZe7JXxCM",
  "key22": "2F9aJqFNUrCSZXwV7aC96wU4zvqhJDkKbj7BJCgpqeUjoQqBSqP4Xb87xvmRy43tn7QyjJ4jTVxMZTZ9hDLazFcV",
  "key23": "4oGM12vTV8tmbSksrBzPCAdriFT6JKSDAZaQGQmhxVceNZ5wRk3SgSsuaWqwCQsuMFV1rJV8JbCF76ob3G2y9aBg",
  "key24": "4Lp3bmmP1g3V8xcJYN3K8boHTVfjURS3YNiR5xhMMdu75egCPS2wjNBbrXVD7diSwtGty23uxS4w6oQzqwB7pDxA",
  "key25": "4aRjPw2zwKehvHLwUFSexu2uSXjQm5TdwauGnRh4obkJ6touzHpAo5pnvWh56DLqPkF7vJUkajq5AP8voC5h7H2w",
  "key26": "3snrcPHTVkFpgNQnU2TSzBLJFoF2VBqzRW5dnwqccAEVZJVvkFUqYiuGNGPGsU2b7WaPFRmS2uNNXpGtmCe1mKeH",
  "key27": "3A8MwecoQreSUoStxVay3ziuG2ahHPayfE1eiJs7arJfUKPwtL1v2EGQudMvUL8fK7FAHAV4dNWi2h42bfppGH3f",
  "key28": "3XbhJNX72fqUPDTd8gKma77FHjCG8hQC8wycP9tjVWyFPUFnLe9MN7JexpgeYmFrEZ9gBfiYXuMFXxvbqeMrRxVF",
  "key29": "2sNR9jCZ2Xk1PR8v7iUTxxJrwTEQWDaAmuy2fmbrnGpgQ51SfiQg26vhH6zMxojW9et1e7WLjPF3PzLMopshuxAD",
  "key30": "2pfxjRCKDoppqkQezcTjWif8CifF5zPZyzsM2Ep5kdMMLywpShTSaAJ9MQVWHUZkjMWSssKfSjjZThAcPJnJNG7x",
  "key31": "3vEgZ9cUdeCRc7RxVPj76RTkje4o2eDDkvwzsrS65HJhoicmt2RQvyQN28vqTfnS6SmAni6imMjav4FwhgCtWsF9",
  "key32": "5FvRqJRi6kRHrjYcafowVBU5XPeL7DAhuwZqCNVJhVgmJt7UZSNwiy3a9RAaQSPt8xjf2sAciTwBDMvfF8ZeHWSD",
  "key33": "4wacyGLSNhfJb5z1ugc1dycnJdgQgcB5QS3APyfFXnV5zGxSynR6KfRhrERAvwHkV8LTJ8zWTnbiGk4YMRfHRQwa",
  "key34": "4bz3aEGfE3tVGo43CCTw4MjDs8QvkdfZrx7eRj7rxoHw5dAWWcvpNNkhDjXDVSiSt2haDTo4ERUZFvvTGpqRgbn6"
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
