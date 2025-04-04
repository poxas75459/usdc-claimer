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
    "wSYJPc7Gub5Xi1Bk61Mcm3DxHohJC1oZH7jpdHzH72EzE9CGG73YEJi4B26jd9Xv4oH3EsitBsZuri2DVsC3X6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LB489HvEBCMGBriHb9WNagaXNKHWr89CTDHYF5xQxS2Xarhjce1vXyErDBBP9zy61q1RgdeFfpJooKjFV5EAfpu",
  "key1": "LyvusHedhsfBpBoKYB1ubWJFPcXwDMjPu9RYsbr7fqwbfEWyyhQCCN96jKBGXAcHqfiFHT5cCiQ1xyG1gqzoR45",
  "key2": "2rtJc7XcRwoXh2xdVgVyRekCV5KuepvMSbJsFrhR67X9tQ6YRfT72uUpAhkUSBPF7u3T8EQoWqAqeBywkmqVcMdj",
  "key3": "3qNLFh1uj9kUakMWsv1ZdH6xNhT6XwUA24JFYCQtfKsgwVQoYwn9QnFePppPmLu6AND9cqYYkC7XfXQDwgA4YHzY",
  "key4": "4SuupXrfcTV8w3x7eSqf7t1Bq4E7QRo34p6ZuVWru4b8sUKMKJjDQU7HybpCNjGuKLLdHcSGUm4LwdKY7KjnmdbY",
  "key5": "4DpNYg4HiXMSfvLCkaPrzF9b7t6PUimJRNdiniPehZ92qUpBHUMTPFTY3FfwqS1gaDZtwsg92mY9RV2ASq2TFqog",
  "key6": "2j1Sc7J3Aeu9sKBFimYNCuRnMqNEwJLmP2jxaG9mrPn726K6b4RXRDvZ9e3RnSTDfGw4rqWUHwJoM4coqCVCLRH",
  "key7": "3jZgKYockiUiHWgdhaaLxkv9Vvs5oT4VfaERnVsqGtpiFSump5RUywj2Hw7JAggvnME5EnerLxjgy3278JoQn3EC",
  "key8": "3DMJkcopTuGHg5u8UyJNXG4djXnLELUxK8WMG54Nqov5zqcC7YkY3LiuhNTf96cpizYgJA3hzo18CBcWGMLzhLNz",
  "key9": "2bSzs3YpRMb8kT9CP1FTbkKaL6i2fxodChGC1J6L4qG9YyqxpWDVfQkBdaxLPiffPE1SbLRfZpLvw437uocDRZoh",
  "key10": "ZXgNrMCx1j5HTYQLcecMXVZctwgvfabVYmv6q32NTVRgbgsYjS1fAGAsaTRCRdnQVfHgStXDF3YyHTBsu3WUY5P",
  "key11": "4P6ikhHcSoqfF8MLMwkWqGBbNdaeFxpjT4Fi7eJoytNrGwn78iwRNcJDH3Kyp4ujpTwV6uwufVe9v9oWiRoCvxz7",
  "key12": "1hFEFHnAy3yjAaitBi7Y5QhHejGnCsF6jCwBnvJKymTXY8o1iFNtcAUpbhJPKefEJUmnYjgzdoobknoxeCtoW6M",
  "key13": "2xDktaiBU66NQb2iCMCKLsJcnGwzXJAkqun5oH19L2aXRTeN8eaVGBB7CVy1LvFBSE6Emex32dVy2PWieNXTDFUN",
  "key14": "5imK1ZaBmvW3zTfcMc21eQYJC3LcDZezabzYUCL5xUetggBsCje7E14xCmdxAkdz5cPFAQ6NRpwHHf1WZM5WeNxY",
  "key15": "67XKH5NjtLiwpBEZ3keRGyLu6ump1fXrAis9mCSbnotm4Q162718P9mVNFeHTjtnHMCKRVx86vq2ddZ7zNa2JTos",
  "key16": "4J2Wtosj2CYSRXGoizx9zv9xyJzLTfFEaiakFjoWQxzco5KnQwNM3bxXzbUhjo9kukJmr1s1cZoJu3Y9dwDYUYkv",
  "key17": "4RhfaKCbDJsKTFNXLxsbq5mhKymh8ak4QGhjGUX9FtSgTRq8aY4rhEC5LXDQXeW4nEXTzsaZwhAsu6aXkrZN9b4y",
  "key18": "2DQpi4CqDq1dNmmPo634vWGMehKojENR9DTNrqAhGJJBwZaN7qbANENSCvwiKShkWCZVyYawzrvygJ56VewqGhH1",
  "key19": "hWeCqQvQvczvZpjV6ff7grMzKpT9SaMS6LLZwCjEMwjyfuaNuoiGYuWqv7a2tGtiCLFoZWm8VwmMuVA83BKJNjR",
  "key20": "4AUrx3rSqZjUymXQEPP2397JrC41cdkcaqi9S911NDYZdKDjEqcNdM2WpzFjjKTDLQCLvkmrbvCUae5e3mXNp5V5",
  "key21": "2xYmuMEBRyUAB15nS7TEbCz9BPzr3PvW1yxeB1pVNKpeFydSWK4pWh81bN1kXQvE1T6y2NNBZ8DDSYP8fYYQSUSC",
  "key22": "2oDKUNVe5jzpH4LC12EXTXsrnJW5XUi9U2rwMjsfJapEw2HZbGpszWc83rrAi3pMt1bmQkKUJFQLHy743c2mTAK4",
  "key23": "5u5FjU6VCeHxj1GKRf8k8qgijgNpQWFGtcVhySZEXvaFchNGdjKK3rR6Nat47NVKEDQWUAxTzy3hpFzRc9ikcrrG",
  "key24": "4XRoB9PJAn1VCcDxzc4TEs7YtvtaLiLj66MiYvSXYFdkZfaqQ5gMsRJpVddcDbCWzsa2JvDpaojwHRck4UQ3jVJi",
  "key25": "3dG9ktnnc7JpesyP6PdW3h7NWRjbMTwZd94v4UD7wkyMDWevRi3WFB6HaFjMoYRfWwHCtUjYTTrBzm4orctnVLia",
  "key26": "3mCbFNgxeCucYSmyc3TdvGBfDYej58MS6D8C3Z1WSoU29L4CYnmhbDFRSjgnBtnCgaeci3GoVDEJL5WJ6YC8pD25",
  "key27": "Mnf25BmsEVpSQ2DACYXrF2N6ocne2C2y5FSnhAtZFdBFwZjHeSSvZ2iWw8z6ZrPKZafWWg5xQ35v6DvrmyEPQTC",
  "key28": "4RrSWyniGrBz1t3NkKw3Pz2KWi8dTkNNydf1tk8LmjG3YbpzQbsBLS1Sb9CuBQzn8ZxubttAFMgpXye7aW4vTYhD",
  "key29": "61dkqaJ7KLFCnjRMSBytAXyye6kT4xmYeBq7xhoKx9362p7xfdvJph4wiF1bUEe1QctWySCABhFT97GAi6t3qzn9",
  "key30": "8DUVxkJcnQkcXBX3ybr8odr7ig73npHkdR7LDtwkCuyz3CbE8TEaG4HW51xsqhboNWkXMTvTrhzqTSZyhLezotC",
  "key31": "5qPBCoz9i2yXUsfow6DSkrpDqqb2Z9NR6h5ADyBR4KZV9cK2LtTqJdS8V1zjBcyrFJWa5VYqPMNZCrCBKmfPJCxn",
  "key32": "3Qx18poRLKvDmqoyoatFEsiPDak4sECt5vVvfBqTmi7x5CmdXE4hxwVRMe9hKpLZWaoKDvyLZGhKcN24Q5TdyfYc",
  "key33": "mwjdf2oJefeJWfMtsWTjvEmGiTVUvWN6m2zESigDLPToRjfCPRJUUqqnYSFuWkSySBogNtAaP1Kx1duu73Z7oCX",
  "key34": "ZxoR4ZmFRQh5GGo5H5ZhRE9NeinJPVYsUWPbS9Vr98xcBwYbZdPMfj7TQ4aiTvis3pzNQ4Mx911FfpGhm6ujYfG",
  "key35": "4hrZ1mGZNZzvfMNv32GpswsPC2u9Ggvr8ZQmcJp3bWXdXtTYStNej1FQaL5cGF9UrLzBHmiiqRYBUPhiqYsGJjAq",
  "key36": "3LaNm8ptq1TXpKVTR6ZXpELqCPEgkg1LCsR8F7HcD4z3vHezq5ZjcLYatta1xNMGkKMQQSVoNWa77QkHyVPD1TzZ",
  "key37": "2LHSHWYzeoF6iWLRcp7qUMkJvnWKqwFRwq7GS1QFiP5F9ZhcxKGmmLSf3J4xFBzWDGXgJhRrJ2HjaUw5Fok9yid5",
  "key38": "5CCWWBRKQKZBBedSsn2gpb2qmNwNUuaeVJBGhRARUnx2QihJevMrCp3T95KYSXTrk8qUme2NLz7NhPy79QzvSENj",
  "key39": "4fbupSmdt9j5XAXkuHZTacVM72fyNzUEk9XNanReu4bGNUgNtqje8nVzdbpvAjTuyfTWVeufC11fBQqsCsHUQy2p",
  "key40": "YSToYTxUjAz1SU2PpqGJsFNjgJTcUoPzWrQ7TbBqyriWNjXMxaHnSUBQ9EU9mhRhwAkhz5f1TfJqCuntbJy9TA5",
  "key41": "4YNbLLGy4MG3V4yZ93JG1GJ1ivcNHMMgsgXcEFiEYSnzmi36UKN3gREDwRLk4Ry8XFpycnBdpEx8v8dsX3n2xkvg"
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
