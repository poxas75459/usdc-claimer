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
    "2QexR8oti53W6tZsZr3TtV4sTCRfBu5noSqXZXz7adXLZvapsFPpRrnWC6nxgnvvUENGy5E2HQTrJdsxHGivnzwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WdbWLXEKxPwG71XV7XdbSojFMBbWUveEeAi4da2Au2oecQVuYKze542oW1TQCJjMH2m6TjuZ5HL5JjPeBVgTRDT",
  "key1": "2cW3adQi6kXy6xajVafh313cK2YicbMrDbyTikjznfC3z74zbQtMiMQbombaqkt7wJPkQkK2hBjsPyry8p1mi6zE",
  "key2": "3HoSy5XKSrzBRpGNqXKgvLSPxJunGscoqvaLRWvXpdNHnqJtv7K6xpjePxnyXSnJyjtnhCQZCHzHuGAW6MRfEthk",
  "key3": "34eLz1BaKsZuqxEudmVuQXPzWbSmEFoWnjvXAW9nh2a8HF8wGkDgb1ZQuhDiEWTdRWXLULvF4e5KeweSniiUsjHV",
  "key4": "21BUSKGjS7i46ctn5EM53JSV1GwpgH2Z7VgiUQAXyoMoqPgz7SpJmbDnDArzpL4xLV7hJMe3VWT2hMzkWiWKCAaJ",
  "key5": "ZYNtR6q8yYL1GzvvqqWJwGLZX7uCgEtVs1VhsBn3G1nWiR9ni96NFF2jJ4qFxCnvNjhMQqevGfZ4oyqLQxwhd5J",
  "key6": "5mXfb1uAoDrWwLKRovgWEF1HxSWiLmcNS4p6GcRBGwuzbUy1hKzj8eLYsx2PJuQPE6cxjAU8KvZq8M21wGgfAfEm",
  "key7": "rTmes37U82hUkYQAHYvEB7dz5C2hosurgUt5UZLYNZNEvJUbgQXmZVMyqVGuW33g2z1WqRzwkxMRjRTwjaU1615",
  "key8": "6QM4avxzmkTc25aysewNNq3WbhvDTtnRjfo5tpBiuWDq17eeGup4qwcL87crhedtXgdbtHGfp4e5RKTySitnz7A",
  "key9": "61ZnGUX2Fc7kWb6jzYtTDCYfeyduK8guGsYnXc4BWnRb3EFDHxgdJEPpsNanpBmddsjzxLCLYD35125A5SQMetno",
  "key10": "5hsrYS5xqGfeUEMmePU3Bo32qwU9fzbhqzy5PquSxUY3je8Bv9RYDNyzchZC81QhjnNJh81AmuPMGZUCkiCB8cj2",
  "key11": "2MPaSfPgEs2u7U8REkMLCHAwApzVxk21S4mCfum21r2fiPP6VXMcaYN3ABSRhRhpdPyY8mup4kYyQeaaaweBdqF",
  "key12": "5EXY8rLX8pHSpDkvWVVL3tUxStn1YXAMdiVjAAMfohf6btJc1V8b81Qc8h31BFVB5ES3snN4kwBjRLJtjErsdiRY",
  "key13": "2ycYV6CBuephQDx8TkK8rG9zovWrNLZrKsdwgJJqQykGjKjJG4RzdPYyxnuebkf2JyBegXU1WVwoPGN2bBST82jA",
  "key14": "5kwZanji7PW8SgYzkUrNQmRsLnwCeEfdCTjZHCVUZ5w8vVbf87eL6NzBv8Q7aUdbywcNs2JodgfKS1JtEMiqfLSB",
  "key15": "2WhBgFpE3E5YZ7he74gmvpc84dTQHL3wqmAmtpSAzgD8aukBkEQekrd1AvV3FThzvHsK5Nj9bVymSkModTVocHhg",
  "key16": "4pYnPRwf6Bur6VyYJcAngm8DLth11DrQsNCHbTQAcZeTj51h33A7a4GJmHKrC1GroLQKHzFQnNRo1dqGmSwXimMv",
  "key17": "gi3TQLsdwnMRmiGS9Gxq15pJCxSd5kJoBKrX3yZaN8LzEwNKqzB9eZZENKrg8q4w4wAEH9UDbDPNypU3MdxcEGq",
  "key18": "3bvoXmQGiBJETevGNipfb6W77D1tadB1EXhdLrnn2dVtFsNAMe5Z3TS1t8jMeUwnB5ysALrxJ5g8sLX3uG4twBAv",
  "key19": "2c8t8g3FpimhhD8HJrjYkUCrJZWJvzgRiQgtAe33jygwtCxBr5mVzFb1AJa2R2Q682bX9ZkGEmQr7qHB2EuhQsbf",
  "key20": "NskTRgmGwnNC6NDuMjeUSfs5JBbRjV1GrNkER5oCebt7HewpejCBKpdi32L421sjxDdzGqjhjB9NCCLBPMQzqEF",
  "key21": "HuZ5qaAZrv6zc82Q2TWkzPn1b7s4Lgyhu62zTiqN5CWwq8Bxbyc3XfnafQGDZkFZRJB9eSrXV3FgEfv96xeAsmk",
  "key22": "2PibMAqZPcfPZhQ5QsyMhCnhU6c2UGk6QZKijqn1CXf8joc63EnraaE75ekSVKj5AtxzULGhFHH1soSTRA172U99",
  "key23": "3r387MRa2hrK4YuhDyF6vA6g5dwmdiEA7U71E2369mZ8HpACnyc1fUw9tuAjsaCF2z4QmDrgRM29jozjchMCdV5g",
  "key24": "5Mgce9Y9dApvzoykbjbK1m1d53khKPzMpGppvWEANMbgo2KJyoetcx7g1E8RWYDB6pXD7vUobFgLezY6Qyz2ubr4",
  "key25": "5KVSCVd73jjx3KG9bpjaJdvYiHDWMpEqTnCLbLNvm8dEL4rYNSStqjo4vQM2Sz2VJ4bkdATbDFdmC9zCukAwbtV6"
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
