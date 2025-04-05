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
    "3jhTowV51GVU6gjM1cpCX2YJuwmz1G7qLuHJ5tE7fzBqCGCF5pHsX4PNerS9WcT1cjwjx1spDqwifoKjwXpvL1RN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "933aemhfHcLSwdETzKXF8aSUf9YpTbeCiVwwz6zXe32FXaGdf36voyNhdz2r18Tp1drwAiDjr7hNdMp1VaMh1nn",
  "key1": "3rx8F3mLeRV4kMdEEYpLAVDNAhtjZnRaTJdMnQV5m9k59kzNajnywPS7qWEaj6yXsaHcAMkuzDHi5TkSzaMjkQus",
  "key2": "58senZFLSdL8rjBawFnYZPJgSxYgeSGd4y7L5JqszX3rogvrHjgbueFSNiJPEHAzajCGLcQJu3kfM9QEobfM5EDu",
  "key3": "2athrfyeAHxkow32v4d1QLUPdfhM2Ltqo8q6vV5HrHdEQhkm8CUzb84v3Z4GK4dgUVj6gamnLi8naKJxQcN2dvcK",
  "key4": "4krXtMxWWZNci2gPJV6DtRjcyW2THttDgsLdJBgXA57WrGicKXNzHzj4Xc612ZkcXRDHrHs6gTHMK2vj1oM2tp78",
  "key5": "29TW7JEV6hCvW2boJiAuQtMB7MeWtbjaJjT7o31TV6dwYNGZgxvTUU5YjKDRUtUNYwat2m1HQcY1W2TuSXjee7uo",
  "key6": "EHuQphFZfn67a7t5ERt14ySwSZ8FkUm5krxPuqLeDFUN22yG2cpgJaPEmtJL2BG2dzZK6DP2fd6pk7rYbRmPEBw",
  "key7": "3J6cRuY3goBViyhELJVBHwyNcdnFh1R9W3aUzwArLMiJ4ET3vBMxSJNyjT1nQNaPwcuqC8ALYVWtCbXEEVb41QEZ",
  "key8": "NVPAT1Yhk8VeNs3heuutXJtsZwMEDTWRwi6hgevZ6BKLjRHKiPLqfq9U6deG3RoEGDBbNRLSVDkQgjaWX2v1Vax",
  "key9": "2jvZXMsYg9Xdf6SswoXfj2hH5Ut8RLSs9xqqKNgp9wBNQwpEJzYf4r7fZEZjXjcWid6KVFTf1gfnptVQsFpnSbby",
  "key10": "5KdEbfBCn7Pnb2QW8BF3kA81gThE1JFVdiRJV9fCQRNE4PZM3EkVjUFhW3tN1g5Zv4Ha9uPthvqx98RMrx2wcTFS",
  "key11": "37YNRCRTGUuR9A7YKfX65h7gRuBkUhnfwQtLGWUhnmqBVJ6kUpm8UT5mn5dovUYypGFJamsD6sPWAmHdH5QTo4i8",
  "key12": "67NCaMGNPQzzCzXjitPU5aB73QUYX41bo3cGSJCc57MXjnyvp7cQxiXfw2jsV74tXM5JLJiCmvKWd1K76fgRdRvd",
  "key13": "3mwGHija6PiucPomcidwQCzzHiLamuuscbFWAhsSCEPuGAWo7RLvWeRaYrLPkEQdRddXWi9dzt3J2NDYWVdWRL1T",
  "key14": "4mb1FskhqD2Q6Hsueh8oPU3TQVvCbKwiHR167TvyuLXKXqv6Vqra6gUpFtdQrCCCqZnLuaoPCY5x8aanRahyoCZr",
  "key15": "3RTwGkL2xhbevkSeDBx96wxYL6FjxWnKQfqwLVNb2A3QjMaAwHEBY9z65yrJBnAkotZT4ydkH2PNrvXAWh8RyCeQ",
  "key16": "5VLWNyimuwgTPWJEGvrQA43dKMAZ9fqNXVXv3HcCjF32SLnp9f6H8HHZCH4d6fQny5YfQABtNvrze4vyvTNY128L",
  "key17": "5t1r492bqwRq7y435W2SV5HiPxQV7xD5hHggBmd6NC4XXsq2jXtnK89Bg5sB8GrFPrp8QajV65Q6ZX6miPdibYVa",
  "key18": "2wMjxMCBKzf5N1PDaHrcWvmxLPJTtdSAe9wxK97YehadwNmCNLTc5auQyjd3iTsqVJNDWT4MVRFjbATLSgEdzreG",
  "key19": "5gPkGfnDYyQRidXwAtfK8kzQ7QWB42vcM4CHumeCgFRcDrJZtfmv4hpyNX5zmD7kGddjC4AjbBC6C2bh2YPytakB",
  "key20": "DJSTMj5YVuRKYeGMD6Qb4JaREMHJchwods1FyXchfwQVjRqYjAK319xEaXGoymQE3Cg3eaVDi7Ea8Fo2X6vp3Ee",
  "key21": "5V75kS1vP9JsKCy5WvLJV6aXg6vxZ7pP4FcRGy1U1rUUTwKWdPmBjDoiLi4s7n9xKzWWUM6KPEr1JuLwGWWt8AVp",
  "key22": "5JXDn3keratNcoRkScdjVcacq1JPoXNZw5KKz1bPsnPHutfA5equsnjHbFZYMSmdAghtHZ7g8BJmcZo75eQYcXpQ",
  "key23": "5bb9nwyhoJ4UbKmFy2AMqPijXyDAD4VBGNr6eosziB8KYFbMhHvbhSqH8oVQRMC3yH54bhXAgYksdoJuBW8anEHv",
  "key24": "FA1KZPZsgVimWykixa5PbUuFnVXJ4G9PKsKUeRou4bQ7qnvNAX2uKgZ8jp7WcgQ6s1hSECjcrqaCgNqXN89ZJEi",
  "key25": "4tok6FJfMwHAamFUXibNjuMoTqo7x1v61Vg4VeFpEC9bbRaq4bfRDVPceogefQw3G96jhFTthfrfF2tHaR4hVCh9",
  "key26": "3VTeYD2WRGMHJgdHzUqH1Ba7oL5UqdDU3LGpHnQtnRM8FmXDJnxHJQtXthsAXXNZJv77tiVZNbyNxXP63CJ9soLc",
  "key27": "29Whaw425BgncEnJ8XVWxNzykhaz6ck2CqvX147SXWuvhXYtCpdJdRjBVcX6W7qNSHoFGPmi9FF3STAV1nSkRMG2",
  "key28": "2urzj89zePFPCv3yvQqrkhUmPDf7xtP8SYpTiV7UmWoxRc2FeZ7yrrBijKSp7gPmbP6ShhGoW5u9jxdmddBhKwrR",
  "key29": "2TxXYZwJKsSEXfHLqC4rsQNtahxnQD73fEQWY6csMnmXR81bk6qTsRBDq3KQXvTfwjcTfzpcX6kumv5ethkMiVid",
  "key30": "5819Rgk55Z3eMVEsJf1qVAzpVW3GqkH6HxvXwcyEXA8EgowT4zJErVR5ByvaghQRm2h3xRGAM3knUyrAMAUuvEVT",
  "key31": "5ZkWSRxWUP8ohHdhozgFRQjdibVAgMBi4tcmSsb2BAFyNsgvBeEDnFo9ZMy3s3UfBRAieUNbu3b3ZFDvjLmCVmxX",
  "key32": "2fq5hjPQeCVmBxamYEPS7pMp3hBvQpUiB2eqe1yj9TDDaShhVCtYVW7hACBPGPb8xjkPLLoqkCsMwTUYJvBfzz3V",
  "key33": "4chQt5zyhbaEkbe5bGLr74hBbvi46JKLMpEb4MZ8wjpG4xi8JRDkNWBELPrkfNkmT14ncopTPF2ZUbmzMjVGsGXw",
  "key34": "4MykQVGVn9gdj6GZTtXQPaGDKTcDXHimSMEr3gJMwk8E2BacDVHbEeCtNtqoa29vHFBb4MHDHmGpYfS27kJ9MeF",
  "key35": "38ob8EiPvWrAxuJ2UDo1vGAEXycUppqNdUB1jsuyP1eD256ReSMmLwWUeNZGAZHnetQYwqCDfQijNyF5WSYwWig3",
  "key36": "4h98BL1rmMhwHcgCLkp55nQmeLXd8qvAohN94w2T3zu21Yhuds5LUriKU7H2RLsyF3UcP2RqFqREjR6xhJuNpEWe",
  "key37": "4Wab2Lf1EzU3Cr4bJXd9XWtkCMyGUzxdjKL27MPjhvh8jXTHsC1wvqNPEFBqisWAtqDhiRGKjzD4w5PUpDHtM4DS",
  "key38": "5GMH6ED6Vd5G1AHSxgModFdA75WY5Dk7vRTDFpP6oxwtj31AFPFiVAEqe2oztRVGa4Bkef64hArGayaWapThskgH",
  "key39": "2BfbSKGeXK1GRoCmt3yzeUVXkoR4X3brpGFYmHQ9d7RoXriwmUPmyCwtJjJgQdfK9L1cnpD8tLdW8U9cEcyzxzoX",
  "key40": "4aVs3iscPK1At73LQy6dvfdTKGyt1rPwAsqvkuH9r83e3YnKQJrFxfMDk8HNMeDADX88QzvzXjw2xe6s8ZCcG2Pb",
  "key41": "3SQCn81doYFK3W9HLDUekgaJ2KPQFXPLXZpeV5JrYHCHv4LibrHDc94ZS4rbsYBg1gL22UYCQFrEPdaAQUqRsTL",
  "key42": "5HBKo5mokuVYAEnmgyS5SnSxwA5obcR3gGbATDrUfUeSBPLbXGZMUSDMrebWwB2W9wLqpqmxfAKCZ2EChYTBJN6q"
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
