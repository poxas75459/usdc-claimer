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
    "2gH1RbzFmHsNyPBkDd2jUtcbS7kumN7DAnAG3mMq8r7g3FWEvAa3SX2HwKTyrdQZ1RVKTgBcxoPGhacymVdcFwgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YiFidshYxzYUACLF1aF5SFDcztac7ZP6RJHsys53NEuj6yBktuNw5e2vP5Mnbwu8oiRBKcsT4K21JBWNYzvSApT",
  "key1": "4txUpgG5u315M9FEWRNSvFL4ZUatDtTsoK5SN675ypFHzzyKGi76Riay6WLgYQn7KiV1tM4xt8mFYTLzDkWdWAe2",
  "key2": "2y2wyzPFrQMC2nKCRz3jxe9LixphSt6uMu1zykJEUFr4VrK8tfj4KhZvESb7SxR3f2jDsZmgVeSZWhgDREH4UznQ",
  "key3": "2tNCmcSLJhMjP2g7Q2961P2UYVqmn3T7bnsWE8Z6Cn9gcghF6WSTSmM6zzKs157dWQqgzcnVbaWXipPpnsGwRrSA",
  "key4": "33PaLkwPKbCXgbxdHPWhd54skbMhYeyw1CtDitEdj1g6D9rkdusxHfgFkgQS6ShAs5Fu123qCrVri35gvkDyirSk",
  "key5": "3fz5mKC9EM67oYEUFHfM1yo4HKXfyGowpcQXta6P7D2wk55smpWgMTxJUXE4kaG57sYdfU5h8GoxfdSpJxdtv9de",
  "key6": "4wErd9MNNbZXJAqWy4nMF9bKEaSgEbxk3oyDremRe4fdLe7NcpnU1PWpHQtZUifMQaiM1cxBHgfcDnb4PUbaGuN3",
  "key7": "XM59PmgK1Q2mTckkBeuWokwm4JcHE6X5KTgNKauX68rvH83xKt4yMTAyHMz5dRGEXm3cKWKvEBWocgYMdKsN25z",
  "key8": "2PwQSji4D1esDVjdqKUaJiNd56iGYAyoWxJri6G1CKmJtrSvXBxm3gyRdTJjrgxdMFzHua8nQ6M45HdpeSHQe9qw",
  "key9": "2h32NLSMYSjcjHmdeDuRrgWpQzTud4qLduv5JxGdaqVsqRaJgegH44uttVKoYKiid2beB5KgLPJH3SaoJ8LU7e2Z",
  "key10": "aXz9FfZ96Ye3a5GCGsKakKxWsKks2vuvc1L3akoboJJ9dzvKF1uyyv1GnRu3k95P2ywbShWJksggP5QcJ6oKw4Y",
  "key11": "2YK5ftS5d3FVHYcdSiMVZfvBYsVVruhbLWYq9RZQ6WetjPjJUfW7rqcMGeF126CyEW9EDA1W11KEFhNTotYq9FNn",
  "key12": "oT7cJoWwdaZChCQtwiLE29HFLVxZyEjJQbCYoFFVfSduWKmym1wzed5KcZsdNPCp9Nek1uz9ohoXEk1XGJK999g",
  "key13": "5khCj5Nyo9i8MAzaUtH3WRHCN8V8pNaeu9hPVB1n266GdhcaDqDqDjLtRvsmbLAXhH75wuKLfCE1ZwjXcXk2XHpF",
  "key14": "2iHHh2r5UkdA33Esyamx2q32oF4RnMnHKu1QabbLPpdkW3ijCNsKz2eRM9dKGu4wkWvLJx2uKutsaDFWKUoDUK4q",
  "key15": "65vZEWso2czEzMsmPijn5CRetUZE9RPjJo7nyFAtaP3L3V3f6SQreKFYk9JFDn3y4jhEfHFX5FodonvURog27iim",
  "key16": "2iGk4pE1rGj3yaM3z63DB2Weha9KC6shYsmvvMYTZKcwMCt3oXkCGCGyeAdLu8eJsevLptGNiiaFc4of7k4DTsMh",
  "key17": "3hKpqYFmTTDtj1CrD7CdyZ6Q4qnacEGenGton71aYmVZwGgUjZEmUxo5yaPc3iPoivSPBrQPaYcasK1dr9FWfdXS",
  "key18": "38FG3GFh1w9VNvpxyuMTRvDVedACAxSF2uvEW6CQtcAW9XQgqC8gTfWZM6Bo8mh8dkjCPx98fgKui7PzZsKUBbQv",
  "key19": "3DL9DwcG3X5PKmvMGzms9pQYKz7cmiJ1j98MSHm1e8rSsv2x8FWtNPAHkHJ4a9buw5iXwSP3QcxnR5zzqFKLfCs9",
  "key20": "2sscdSJimNuz2AnkZR8GwXWx9bt8Vogb5zxyPQDBDEy86umveUMakEpS34B15y1T3MnFfcXLXJNdbYUz8MkT1AoA",
  "key21": "3VNurtP2yBzAzLkAd488ijsthSwhjsGEEaBGUWUwnoGUkXsPmK4BFqG68cpGARRHFGqVDLwacMm4FHLv7EYBcY1p",
  "key22": "5pHhbijbwhsWp83krm2oNZxju7yeYLPDitTY5ey4TtQMUK4GsWuNaz6dPLGPu3tMvwhqLEwVGQPfB69MvVFtCxF7",
  "key23": "54MiiXdgWaXfWuVmkjasS59dySU16d1hCjNFUAcCof8SUkuhwsnk4WVSQjeAKDBLbQEMnLpfQsGmEBRAydq3jiFh",
  "key24": "2T9gvxRS4CHXs31rZkQfTKy7q8ktmPPKD7JG2p2NNkLxbRhHddZCyWsDoQAk7vAksjJwTfRcmzcDechqdchjeMdN",
  "key25": "3AN6hrZvsNULv2rpvfYj7etAuGJKqB8FM1g9yWKeovnhXKER1PrATjAbAuwYDFwYjSXY2PuPCGgptzQR9DJmjicc",
  "key26": "5bUoE9HCoqhYVJ5i1pxRb4hBV8Vj24Qe1ciNkvcjMUymcSgMGK1yiDQPsKU7Vr6Zrgskwm824hoMYxhK7o6gogJS",
  "key27": "MvAguLUn7JNW9MRU9JgqmkvFqD6xRjwzzuSaQzPNL2CKV1NPQiXt8vUef3tUQRyDJU1nwXRdfyySZEDVir6c8rp",
  "key28": "q4HAiRW31h71G7amYEEAcn6jPU9CLpbGbubxoQ4yhL8U4kvVLswZnfZj5vuG8ZU7erGAGFPTPcZ8dpYu74r8Qoq",
  "key29": "3kzxDGpe5o2QmemLhqvpq2ar9G3onv9hA5fy6JH3Jwxb2HqUuGZdCSxQBz9ih9vPZR4wXimbCY3JcPp47sjZZDmP",
  "key30": "JQjoL9PJYpLTynegRLh3A4VLa73QuLMKzMXpiccNtuoNvGbijXLjfFVAYr57WRPKG6fvhAGhoDnioSBp9jnNzTQ",
  "key31": "3ibvE9F4TVH59sYSzbyZq284jvJ1sAZDE1tm9P75krqk4TrTJj9KM86ST5E8x4G7LMiMsKwc5iSSYHDzW7tK8iRc",
  "key32": "qmvaCDzxJPRW5xjUGWc6CQeP7p22q5XTH1MHVRanKeMiQRGdhAkzwssqvKxALdwoamtzK6b9pnjZo79jYLpVFT2",
  "key33": "4pwXBz5DACgvQMsvxgzQBLX37zxvh39UASngHbFEVdh15CTktpQx6dGcbZhSP4SmXbX8tbLmk9ULZGewByvxhQYc",
  "key34": "UnvzLsYrsdCe3YoTrgsDzThAceFS3o81uTG8ZgRpy12zYsqHbaYrL56Gni69sxcWJxjaF4TDSRxkkyNCiV6MHPv",
  "key35": "EW2BDcRJ5kMgd37pCLT8P249FoQRPHXCpttKb9R1jLKTsCsUERABhoXz3ytMHFBWcLBmg8AVYeoidpZPCS9SxVn",
  "key36": "3BHTz74NLfZGjNwPwSkaNzZHQygAtukE8ajC2jfM4EhrQW9JpssSneP9UR2KCr6RQVyeKyUSgDUKd7UUwahYfJiH",
  "key37": "4PsQVZ4zA4xTGENHWfhT5Sd2Uxf57gfBr9ZftjPvoXKQaQX3zkJ8LBBgswuQqE73kpEozZNgxAoHRQqzfg8xtEnN",
  "key38": "2MU8Tw8Pj8z8DB5Ze2HxrZKVFGL2Da2WTNpymMfT7suSMtbcQZszvVp6xAjSFUqz8S4VdhEW4jYP5V88Yzuw7jp",
  "key39": "2BtmTF97oMfbKVV3aDWKhvVdo6ECDQcfjhdbemfACfaNLeQdhuBqEjgiHVSRiB8ropugGSHDnPzToMVX437oQmHC",
  "key40": "YnJA7PW3R9PPnLAJTpds8w3tdeXGogMD28hom9jv8jGFj6jtfojdyjmfEwdx7tmUpzTM2DbW7qbmpUGWBTJrt3T",
  "key41": "4sHQETq1GacMGmwSSbVNr9MqgYFUptkpTD1nsA7HSTcGcfh39YTNRqShhvyQhsRuXwagtJS8FopEkPb6gPD4XgxB",
  "key42": "RvPMwDu6fHwyX2mpQd2rYrwuPzCNWxdHQoSXeG7XRMJucWazQ14MH8V7QTLXkNnSzuf1sSMPVwMSu8aQBG71vY7"
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
