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
    "5VaSbDeZHxWqVQHhxTE9uveW4NCEvSLYjEfP7bwdBVgPDC7khvxNaHr67zmK1WoZ3Zyvqdy2PMRR3cBigQEoDiQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31oSHvwLFmKautSN9wa1VUWAJeVfPQzsAJ3zf26xfwLZSxnsXNPE3ygr3hF6xTbmvY9gMVqDAZHdyFy8k7jKxY5n",
  "key1": "55TGW6exSX2yQLm8jU9beaUo8gpfFopS81XyhRHH6viW1SToyzgzzykDGPXDavauhsWXNLHsAyS2jqSwhtpxSYDx",
  "key2": "4mxMeUZ9S3zqkzJvqVcAupPgKCCRHwn7UnMK79h39ojmxbuuYKYLuMr1EtqJntZevsgRn4RLvqGvKvgy5iYJjfhZ",
  "key3": "3Cpv6bhT3ZJvw1uCwm5VTQC2onPJwnfEzarvSmgojQfaHnc1LbhcJQAUm4W1QjmQFHjLEmrCcQ89zJ5GsVzm6qSK",
  "key4": "5DpNYdFrU9E52aehaorwzToG5e4CpFYAxAj7yyyG7mbVMHAE3Ris9U27WKWy4PA6vUt82CWQGS7aZHZYX3wAW6qm",
  "key5": "5f1wamZUVte1VyoMQeLqcMetiDUQD3Pau4RNvqoaFGTPCE6fuw9Smqb4yUzgKYcLpedn1nxDxcUfxqp1ue84xSEk",
  "key6": "Y8vUXtziXQrnZMn29jKuNV1FjRm6oQC8SUc3g1H5mpCPmwUbETFGWpRDjWKT7PrirE4R553zUCVkYyqVB5tmzdQ",
  "key7": "4ohHvBmzUWEgJf99bSqcTQgrdCz2V4sFggf6t75vao8R2Um3dBPWaNfbkMKUJe5ZVu3dEdUZ6cJHySY4azFQZuVA",
  "key8": "2yXCVBKRf6NMxeRKFvuZin7pBQRRh7pkP4oNQX3Dx79783hJSy61n6qbR63LDj6BSXGHRCnZjNFcAF6hvGazaWgM",
  "key9": "2HTLsz5NNhU3sb7EDvLjLBuBrFJPBnnhX2kpPBSs7E2y5NkzTHSL9MKUdDSnGdWkhqCuEyaGTXVfRFfybCBZ5pr4",
  "key10": "4sFxeMaijAXkEBcYyBipNFnLuxqkZ4NRaZr72tYYkS4sJDBiXipkVLsb8NSjoxzxwADQbmNaJTcphSHkXodjGkzK",
  "key11": "5DEBLuwsohoJZbnAJ3WnWc6622SXbu11kYXxRGDZx3ceGMJdC21gdBQZRebPxVUUYQxA7H3bHCakZ6j2rNXhpvEe",
  "key12": "254GtWuvorPjt2tgPjTyNoo6NrC8G9AGXrhdkBCZpc8JTADmUvx8TVTbmYJtxe9zgTurrvPkbsqb6b4zjukbccJP",
  "key13": "yHbxDyDqiHkBRjTp9oAneo1pU7uzrEjgjgtjbfA5dBUGLCwNB3MbomeDwvboQ6WU41iawDgc8UXbsecMCyB5nhs",
  "key14": "5PDjF8dZ1TfFMeK2SK3MHzZ2gJKqRXbNEkW3zXXHEJM2uExnMFGn1ZsTnwbsCvErb3e9tP5LBFdNziEAMjJaMCCz",
  "key15": "56xCkPVBTX6HpAm228xgnVjVTBj2Hd4eD47EA2uVzFwNxv81RCcL6Y5qGQwtBFEqAuKgGah6rWT9Fue3GmNsjPEk",
  "key16": "2f7GLLAYjfbHRVCHmYdQsQ836QcgjPUHJsd77QmwmFbVLCipHdVhGR8Due2MZvVeTF5M2SFPrxP1M7FJ2bnm8VJX",
  "key17": "5A61zrYaAodNdeHc5vJS3aNxPQPiHe6ot4zxA1draChxq5i7X8xNzkYCK1vX22f2Kq1DRpt8Y1YmcN6KUgoLFGc8",
  "key18": "2Rr5bFN1TBWYFsfKFDQ4vkW4bD5ZtAPHTZB4iJqCGjJTMVb5x7HKWoeo4Xp8Bm4utBjWRZjgXymyHQnSvjtW5Yfh",
  "key19": "nzEmqoT7GxmbUYWXMeb6CK9fMQExSw4F2esN5TyfcTaKZcJ7JeWWoQbi2o6FimKcmCymbPNQjnATBf7jxhWQKPP",
  "key20": "JJdfjRLfhA9TdQwWe4ijTVeRcaZ1wngyUfr4soajxAnVyWEThzhZa43yjzxinpKyNXvDCui2VCYp4y7DKDWNAPP",
  "key21": "4gx8JHXseHy8Hbs3yecunMcm9yW3eDbZH2xowiiPryK4Tcwz6nMVnturn4t4muFSProu6X5P5z7ifWX7GSii6gjj",
  "key22": "5SfZbpQYfyCEBgWpYdgZjBXZ1aWXYsrNmYrfKWJMsTVfmh5KNK1hKa5wKWH2aHoeSpu84iFgm1PHu5NaEVLch4mb",
  "key23": "My89K1orW9maCcW7N4GyrQKEhqaxZjoTZs74LCsJB8nj82Mmn6Ta3wdxAfZ47NfWuRyR3ekwKAD7nTBiRJ7Bjt2",
  "key24": "56H2u21piv8GA3q8P7qhu8oRuQQMqnpAasSyMkXZaMnjGXvz5k7NgqK7TZUGsVwxj3Mse7ZxpBBsGhCjDqC2GoUd",
  "key25": "26MEmneZnUmw21skFfFuW7wgNfubRdyVPwpKu84th74cjw19f4HFsiBGd2fLHwc67UuRsiba4YimdvyCpDM32zFq"
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
