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
    "58DRSLyQHbiP2FqMgHZRUUHQRmojnyXaXusCuUrmAiJvxNjKXJsyQ8UZXiSLwTW1DPdrwddc8ZNWtRPtTM38rnhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FAEyXWpR5fX4Ucqg3Gu4NHPA2bCtLoRtAJJXMTQGnDs5AP58bHrWeSKznpR4aLHvYCMXTMQuQKCp7LnGzEFv5pi",
  "key1": "3HvUuQ2FKfV4wbnQ7LmXn3kERRkgNgKYxFYkY4mbE1vvYWjTf1xvSyCwpoczyrkeQyCk2yrbifNQ3dDM7E4nhsQb",
  "key2": "Fpz5e8CVPGXPcnZHdnYqYxbT5qp4PbbeES9qoeasQ2tzSmSpnm4scjfL4EXBSy3wBZsEqoKFeXVgQCZn2UAJV4m",
  "key3": "wsGgd5upjG8c6oPHi9VkhogPP5MekohhjokCToPssdjNXGZutC6mrFJu7t9uVmT69BjANgWunvbjqfWf6FF97DS",
  "key4": "36JspSbud7ftbo8QiUdn1YTmXsm9heAChKHWzX21CzQVXwwT3FNxRtnEDUrknDxZdrUXbQrYGoWoz4CAWuc1sG3m",
  "key5": "2FSKLqaDxPQHZExA495nCfuxHuHCfgyXnka3JWUoPUgzpmsBajCm7YoShPXaG1rZShRbR5EApyr5a3nnng9Nz9bU",
  "key6": "4JH9viVKsBPE6QA8kWvD7XKEHDCoUuBJne69Sw4MV79V7WnwSJ5a1rXtxaYg5rL74dH393xtQVVhHXv6qiDCVCy2",
  "key7": "3x7A4U7ps5Fy2VwRLkNTxtjqgTa81wMUQ4ibx6FBExW9ftAf2CvRHEXU88Q5xon7YHPf48VLDuP39PN9X6BnesmC",
  "key8": "3PupC1KxXp91mzFyHxQgoD6AvW4LbuZmLjwRLUtEoKNfK4iay3zZFJWDa29hUkg1eHkXs5UNJh162XUaGWQRFeKj",
  "key9": "3FsmQeo15wCPPg4hNYaJYh1eb7z7r9cuMFr15MNLzzX8AfwWP1Mye2xrLuhuuFtgAasXgR31GyyQZJkgHhS81kT7",
  "key10": "3D75NGEh38PNUuFhvdvGz472TiNkpDDRJV8kNW8BRsbcMhi6Se1T19FQK8YMfjmLbrrVCtfkz2yodmDH9YYfMQTi",
  "key11": "4dVSRRtHnbSzwBrJnMAKfN8i8MJLJsdZi7eqcpXV72CnUdT5spb69ktdswk7U2DnGs5Tdx1Vsosasninqn8zbpKd",
  "key12": "569TBPZGhAkeWtnouKfaaAJyGgCh6AS7n6ck9q72EQNhvMmdp1JEKr6YGeRERBc8LEvNA1Akay1aRBkpVrKG3wqW",
  "key13": "4vFVBE1gp8S5xZKfXZxA2De9aP17VngdjC43Ftji7FspHodsXLZYyjKTr2fKa9nG1Rx5UKMqTw5p7N17xyDivaSQ",
  "key14": "BN9cgBsLSXEqVmFAHkiKr1mshsaNVCeZN9ZwfumBf2DW2rUT9qTdsR5SUHSX2NbtcxTMkXZFKsCEJqSuL26jAct",
  "key15": "352wBvc411zrmQWC4TahnTj97UroqppTWjnAj47JocAR4hinzUH4xgwxcxryXMwMJzS6jFK4osfbEyGD8nTHDWnF",
  "key16": "Ehqm8Z3eCgrjHF1vWhhNjaqAmmQivBhhAnKNQrBcCw6txiTdZm8q25WeJpr7FWaW3n8daRPmB1Gdj1X8CofLN6d",
  "key17": "4SkiASdq4YhL8GvJEkqZu8iTExXbW9xiEJmPKQKuhG6rD9TC5UeeujPCaRzxRfSKGKFEUMtYVgvFYHH228DM4Apt",
  "key18": "2FgQRLLKF7nRDxm57vem4WhsJzFBjpFr7NmujjCSwLPXmcvjL1nsffVtcfZStB9fN1RKBvaTqwLkFGq6i2Cq99ZZ",
  "key19": "5iFDs21fpBZsppymsSVUcYSCpwvQuNExvrDzk2Fr2tyWrx8wYNwPsx4rn3vCBX2C1ZjhpxR2h2C86ReGSH7ArJhu",
  "key20": "26nzk5WvLqEAeXRRooCqcfj5q4wxrsXZ7Y1BckDN7AyrKFG1psJwRitTT1XhGM78k4j8xtooZzTg52nmWXoMdmtU",
  "key21": "2JRGZePpNrp5jax6gDoQ19rLEUxpXK5PEdoeffdWgoDrVWe31sE68RHj4NLxbm4gBS1YNUCzYb8gNhpnR8wsbwZH",
  "key22": "4EdFm9YJ3oaFJUYQniXNnisPAJVLkSACFUcgs3V4DuWr7EtMvGFHsSfuELbUWvDAa6J7jjrrwoARHJQamNHpAdJm",
  "key23": "5uC8UB34WG8qeMF7KUc743XiDWS5aoiysJwJFH45xGK5NsiQTeyDV3B1LWwbAEQChsQvBnoNoqgxM4XtFyesktpR",
  "key24": "4Udc4VAJUUACD3z9aVBzpoauAapeZDBBHgwUa3P5goBXApCPzampT5QCyXVHMC8P54baUTymQoLj3KkaH9Snnfp5",
  "key25": "4MYRUWCmAC8KdL66Qt7B57o7AmHeJ8cvAQcmFySztf9w6kDrEyfmZs25Hoaxf2pFVNDHSAENQJ5T46AFHU5gPpyP",
  "key26": "3kZ7iRQzFGSjhA3SftUPFHeYAo3FkX4EwxPzYAA21YiPsuDAmGaKZTwZeXEGypF27JfcohPtHEApK5RkzE4JJPbc",
  "key27": "aPdZqmZDNo7GC1YmUE3QcMdsuf7tAu5bBSjeQsHZh4W9u2kgn8t1iMbp4BbZFbqpxggroMhKDo8qzYM2rkA4FjP",
  "key28": "3hd5WX79gpwttV4j18HcAXpWA38KyxrqeRk3Y84HQFFwhUaREEaJY92kzgm99EdodkVL4jZrtYto4PuxyL3T2Kw3",
  "key29": "sXVLi9bkfZ9FrgBpnXJY9PQiRCX7VGRQvFoWp3FEsXcLJ4z7VM22CQMj2EhWVPAWGYv9HYuHHjxeNKiUnXLno8B",
  "key30": "2G3XYiv6Q5nxyA1PD2Jcy4L1TMFrCWjCnfL7DCYTnyMb5upQmrwTHSknPZoNDk3Ay12D9nMWzSZWCxwmjVo1UF8c",
  "key31": "zbnHs4Mx9Ny3SfJEzhjcKZjgBW5yf9DrQJSCGXWofFamZsBXK966qfuT3ttX9X4wvHEnH1PLtVRS59cktZUEa5e",
  "key32": "5UU3dyiN67iH3x17esq6EBVAXs9131CtFe1VmjD3aKxEtT79iwPuuN8dBYDkBLy3WpBB9h9PemTFoZQJf2ssn2np",
  "key33": "2Eu7DPC79PWdzfRKrB8z73MHqMfxHcUeQBkM8VdCYc4gV5yfkiT858dLdmfk1GgxarEH5VVVKkg6Upc4z7hrRivw",
  "key34": "2xVc3m2sRMRPfMXoBmSkbcYVvW4xbpQ6PpWYEkPFJDPTzFPqj5D865oQ9GA46UTd9nC8a5dWXwzPodmUuVZzLmNN",
  "key35": "4LDVECVyTFqzMwsFaumrYvZsuHXSRuRtWrbDqF7QYdMWyD2jrd9rkHsSkbdT6JgxhzUL2iXjqxUjHsAWq1o6xVa3"
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
