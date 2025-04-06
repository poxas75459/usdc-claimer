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
    "4iUhJs9mqBf7aadsDnzLTaaGRtSfFoG5fSVHWoR63qBDUs82oaY5e4dYasvcb77bmqmquy3jW2R1L6chauyC9bfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N4W7CHtZyUnT8jtZ62SuS7pv6a5iPwM8TrDP8zv5cXEYY29whBkBsVDd4VFno31XMevUd18MEtjAM9Q5abnr7m5",
  "key1": "4deNbn1KS3VGq8TpC7VpGPgXGyKSKxSGuCdWnjwb3NK5KF1c15pvHbLUuub9yrVzxNZdmxgzpo4Bjm7Mmc1hPWLj",
  "key2": "v8TPdst4ofG1Y3PTpmtxNBum9AZA7UAjfZBWiNCosrFfSHTcmyXjEw9vE7Atc9CP3DP4KWz9bFUd7F4ME5xPSW4",
  "key3": "tSyteR4jLrDCbv2RH7o3PNCTQcwrNtN7PjCzQ8Hf88DbUt94bMr4dUg9rb5gK4RNvHnGUSQ5SCctA1X1dCPPMXS",
  "key4": "uXfYUiGMVkhtjDkdeyT7iFTjW7jKnkL8wPvvcBVfjvxpqtiL2QTtCZGsGBV2ThHhfknadkgbPtxQhGXAGVfRypm",
  "key5": "34QPnhBWJxqJowdiFkgq5Yyq9wMoZrJ78RKnRJrnVcWyPfG8PAP3vidUEvHHmS5ZcMWzjozKR7gLSYury9zZ267C",
  "key6": "51cWceqhPtv92ts5usLBbqet2Ns1PNBc3mq2iNJJNoRJKcxH88yTyGX4MesquRhApWohELBeyoB2C1oapZdeRmR1",
  "key7": "fh7XrF6mg7NW1FaskhbTnRkZrk7TufibSnW7Syk8y5opP76o5rUfEnCKBwSMdjPx8TfuSzrsaDMD7TNxy6tWq86",
  "key8": "5X7jPkJq5tkeXJYEw9F9xXPmoCndAaAKzEQHQ9PBaFZn46xn5xrGMBQ3KGv5AkF6s14qm3sWUHNS7xqNBU2drYd3",
  "key9": "45AEPQLWrbHVeetXByE8JTtTwhF2F9g8zfKQKYoPmESBadRT5nnZsyPeCeznq2CLeuKaq9B1HzBgELuXRts5DgM1",
  "key10": "GFSQgfFFVg9NXNHBZTaFcYxRM3z93UkXmUGYRN9R4gdNEM7zZg4WzSa1Jc6W39wzdBnvzEnkqhkKzuXvgnRAs62",
  "key11": "4eAJRaAvzqSA4T76ghzuWsJ9SHX5megyW9tN8K1KXAceBidsGhY4enxhYTiQWhJqZfYHbDbL11r4q9AZtXgHTBdw",
  "key12": "HQ1GepxtiEwntQd8aFpSFnnbQa3NUtPQ69k7pTAMqKHpPVNrn6kn27hFkruV79jEJBFW2Cb7PwaTKuJr5YkUx1K",
  "key13": "3NAD6fUAzoQXvdTBPvKm3APeWD4MAgaNY3mMRA8gwFTpDRDgZV39qPLRys73yMNyyfhjFmoRBg83NUcXfpiJv3Ax",
  "key14": "2937Zj2TCn9yVS2DA7FpeKd7m7xPPXWD5DQnxpdCzPC8g2HqU1cc7TfrrzknJPUhTdCkauQTQBfo2u6bAxyNT2Mq",
  "key15": "3EcZ667BnD83jy19hf7q7Dd8EaMsEHPMqGPuuMiwEcB5HLNSQvSdfaygHjuTu5h1AEVFtqGmwjz5YnaSib8FWdGB",
  "key16": "z3DzmvLXE78U1DAgwqnrVFrt7SXyBFevrtCCcuewUDckNzV1vJLsoNYkmEqXTFpsneWm9g6oZVByeRpT2uxeqRg",
  "key17": "w4a3ZNUape3E4HtiaHAZDKwDFAiUeG38nMo9kKYkmeFiM7E99bfhZJLZqwJ9bT42Fb53ePJFHtLrwCPSw766QeT",
  "key18": "CovoyfCcV7p4kPJAwvmTUKtTvyANFkB9czLBbk8hygrHPotffXwgFw94VQunMLa1xp3CUgarSEdh9A6LBSyVR9Z",
  "key19": "45kFGPfj16W4zEX482GKS5rexW66WQtP8mA27msiB5tEWW33o12a6bGSvQAbyaU5K7sNACtUpKTkVEiXnU5M7uJj",
  "key20": "2Ut7bdqT63QWJkfrdubrA1XrZhfyZrL7tNyyg7rE414TX9qsXcw7zm4JxYxWSCNqxme8bJgZ2YqYxz2XUGKm8W3c",
  "key21": "5SZv9Niac1pU5F8GGSgfznadgFGZskAVQKpfeUT1iAfMUxDDMycCYjvNSTwbuHwGqaRA1xiqiGHFe3m46SQ5dhzx",
  "key22": "2pcdosocnqneDKftdiTMoCPuSDa3R3NsifBePGNsvZ4yvvsjtLNPVqzVrRWLZg1GjudNs84ZFLzdSneZnygQh5xc",
  "key23": "2LsK398W7LtBsajyz2NFz7mVQfhiCkZZRUa97kFMgJfciUVV2adHSLLkmD5CaNjLUyX24rdyeGVbpJ3tsGKRWrv4",
  "key24": "5mBPF6o4Mr3g8oZHKARhuK1maXTFecfsRnZkkTD51yaf2xofbBJwcSNRcx8jw49nng8bfMLZv1kzLzvr3yheYZwL",
  "key25": "65VCQJA4Fn1A2ks2frX5nEsUj9KzpKp2G5Fw1C3VrbGZeV2phbEL41aZMwWnu3WfrU3gxcMBj4wejFBKzPabSV2G",
  "key26": "24e1Jp1D4vNEzppBUq41pxAWAyUJzktFBgiEUdDqKW4cC2nCE7i2kzhdpdSLNqM4DN4ZhbmNWG3CrxNbHpu8djv2",
  "key27": "PVp4CzsGMA1XxB5eHsP2nekXM7p1srxg7e9z6h7fLW9X8zkhRS6cLWRyTeJMxVLpTSqxyCzQXeuEfCiwbcMXpfF",
  "key28": "3dfAaV51iJZprs82FovQvaSJtdUsYw7K6hUnBWWGgDyWm9Ef8bJJmWLGK7QLQ3pSuS5JQqm7RjgAUWQAgZpqBHyz",
  "key29": "2EukJwen1imn1vUxV69d5GPkhXkZj3fkaiEUu7ZVcPeYxfBU6ZtbvSxDqKP5QjtvbYJNemcUtAc66Z8HLqrfw84E",
  "key30": "43mneWxpFQ7Q5rbmpGqv2dosPUGLpc7UpKczLP4Q93i31PgxmiEg4rsfL2VZKShxejiyxDia1f3VR5qvb55amtRw",
  "key31": "2HQnUQhvEZqAcQaXVgA7Pa6rz6RkJhoWL1pt38nZxdnByZLBehV9ZcXt3QfvvVzVSLvxLs8GPfxiYuGvP7nH2jeM",
  "key32": "48Xb4hYdhHSjQpng1gs6eSrhaWCqEM9GRbAfmZG3frbr8SeEhiNteGHm6Lc1nR5336RaWiVZ1kve48J8oaxGf4LB",
  "key33": "n5wta2nhqWq6ZDPpRDVMBpYZWYWerstG2K28Jr5XEggTgbC84qsLSXz7bSpKtkRYMzp3twhkDBTfUGT5gp4ah2r",
  "key34": "5W9m58R6EFbfwDVkwPAUqJ7cwAsSXyH7sGZQq7o2KhWE2vPUpg4HvJfmegh3QBQUhL9ovukxEjSLX1SUDD1rjsqa",
  "key35": "2c2i6EYhJfCsZPpyWVdVgjaeE8owpZsLLmrZAPNvqyAQEVcVgKutF4VgRGkQzm3XCBPdYp8417UmTkn9DQTHZdv2",
  "key36": "59WmaqKH1vGAbkFGBT7pUuQdhcam721MXFk3e4RgiyQDiar5Bip4znaRiPR5n3jNAKPeZUq2qvsTuUNW9YY1qctN",
  "key37": "3ry4dvcRWuhXHzYcMcj436WH2WEhtp1eF8QBXuR76aJrXyxZ9H3wy9YWSgpfPzVH5M9Vt5Jm9y89xPqUDmkgwVsd",
  "key38": "5auZippYQPpdn85psrUon9MkhbfDUigsEyb2zfpTGr43GXCQ16XjhEQ53bcTRoJjqqnprXQJxW7UJ8U3ZTHCTBqj",
  "key39": "3b6unNv4tuEbQh8uPYg4hwwEHKYNZiXjqwgtKM2nX2GBxzGW7an5eyAKHRQzF2RHE2xPQcyb137c7kbXFFUhsmmb"
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
