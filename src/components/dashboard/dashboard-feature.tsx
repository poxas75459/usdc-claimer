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
    "4cuwYKhYKx8yz9ppatnhdpudCWpckhab1Kei7mgiMJ923Z9HP98KNsx84Nz7bdQAuHs6QPfL6yPHqj43J4FphNtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XppkpvvcePB2x5fuMgUtvBMD19b3N3t8CRtBvSoRk4MKyNrv8HqBodPYTyqeden5Hny1Z7fBUH8ecQD2A9N9JDn",
  "key1": "2vpN2cfpTntTfuKvYWJHGFq9ALYtReczYUdWtuKyMmjxuSWsWWf7MMgXpiq53UMrCZFjxzveFhyGY4Ax9YbsUXMb",
  "key2": "38UsTL31ZPC9y56CFcMZptcQCeYZFvZ2YsLXAoscjWBgNPFR7KMdaR8XuxVPeys7pEFP99j5cPBgw5G1YbecLPHj",
  "key3": "UYSKxTGjeW6oW47X9wgVJguBv7SYS94WX53G4ndLuUriC4vqGBrh3vWu3swsfNgqzU1TL9tZTAdc2dPSX86sPjE",
  "key4": "5HjZQP467dtUjmEGnxHuXRzRbGJ3dfK9Xp7XnK9C3GtiMXXmm5eTnayfTdMzMJfsUCagXXSLjQHsmncXtj6apFYb",
  "key5": "waBBD9K7jfGuSEZT9MVYgiguEfbpSytDPwqHYiP72bPyLUdzWWec7psGrCCTkbxDUxYkSg5EZGthsqdHrcFEkPG",
  "key6": "2RCL8kA3LizyZKCcBWremXtQgTyfRXgne9sboYgDjR9zGV9ATFPMVb8SCWkMZXvgSGeiAM4zCQBPEEzvhZKgLPK5",
  "key7": "4KdDjaXbCfXRpYsqV1FcxhDbjzjqDGrGuZKeEtfeBiBcYoJPP4mbgUAKm9gRQfGeRUp1HG1jRK4NJMQL1FivPit8",
  "key8": "4Uhs8YkMLXWZEcDi7BRJtK6Gy3W1hH9swsYAUenAKncGLk71aCBWiqX7nzCBcciUTogv9m24D1eoHws822uBBhsx",
  "key9": "97fPg2b7n4ejG6yGfcaGEmHxPPChvTkDxNYKpfV1c67p4V4pNfKr52PShVq5NCoxqR6mEXoe56cggQGasFuZKMy",
  "key10": "VokJfbQ8GETZb5CDtWdhKpZshdaAiaG2i9FdE2F8WA4U27tQD8mBzinZ1SzsHAAX8wvpFk7NoYBoTyZi9tfwApn",
  "key11": "5GHWzyXXvTM8dG1sYgoxZgwtu3d8gf37BbD9WWUT2v3BdPwUW5SAjQJqZ9ecM2fXShe1VgWyr7kYdLpkWqDjcCbC",
  "key12": "5aTKo5s2qzZpbssd68f89aycu4M7uWAcRcWeBE8sGmYZDWE3mZgVzoDv95mzSRuj5mS5yEebawVpnUj6YncLmh3B",
  "key13": "3BrF1dQFyUj6b6YWqBetJqatqmtVasKggxencFRwwBEDhkFBfAyVMwDX6MLvzJgxfpjzGoCDph6oKZqEDSTZQkSM",
  "key14": "3Gk53k45ReQQeU6se8bTUjNP1oihpxR3diWSxXjqyTTQtB2ZcR7jdyAqRtKKKAXMDZgHpRb1wdZmMjp5kkGKp5gk",
  "key15": "4csMNqqavUozr1PLfh9ttieo5amFsRJirEuF3coEbezo8XC43cNNHqUR9A9zuowJ1MVAs4AxrqzCE4dtj8tos3ML",
  "key16": "5dg35ZcD1ts3kQm4tVWimWBANCMoYWSeb1YfYwJQhN1RbMg6gTmNmwUkGWAZub3PcZvJHfMoBRPndxf2BsGLsg79",
  "key17": "z7DMKSYfmtfy4449ZYagvJC9NqEfFVskzLWVXhpFPHm262zoQEhEeMhvjqgjJzvdTUiZ75qb2sKyHBKkx7SSnUj",
  "key18": "2RV8qkVKRVjcrxr8cGYUBApMvpYjDuMihFnSkCMogHc8w6MZ4hkE6cmynpreah1wYWfQt21bXr91KARf8QRuFGm2",
  "key19": "2KXaitU93HFWaW17QFZ3ziYgQPvTB7qsAX1taavgB3inp417AaBGB13gsoCC815KvvyaHxcSBK2rfG14Typ6oeMR",
  "key20": "4J6dDHugzqiGnbSkUJ6cxSZpYTx4kLe6YMFEDgKP68mxgmGiCRSbQx1VpetX7QTNbVNDVhfjLbP8K1gzypKKEP5b",
  "key21": "4R2gFBcPyH1fFeeaf3JFgr8EvtgKazu95Q2qy2eWgSbwrdtyTMauN87kaV8m6uKJdiH4G9EQqtY7NvN1A3a347C2",
  "key22": "2wo9nzfy2zinyBSEHhPP7Hh3k423hucC1YsGNawZmUjWyfjZAGfsKRpVWrYa9SnXfkxzvz22jwGYw6rqNsA3rVtV",
  "key23": "45Nz5cDPWxBWNRYwmnJLKeF4dBhcj3V5yAiR4pW1FKRgkgiPoSHpkHfjJ3zSBeS8zRxHoLFiECHx2hkFEy3g3K7g",
  "key24": "3KJJn6NvMLJUXjBkzwS85BphwQk3bb93DM6KVrWhjxNw78TjVtuEYMTEYgc3Y87dPk2aSX56pUfFRyuSBbx1LGnQ",
  "key25": "553XHJ6T97nL5uAX1dGMGxGjK5cmZTmYBwk6JcTbnpy7t2SWvRcHF3s29iQGZWzN66fg7NKJxHErmWsqjDhFtbGz",
  "key26": "2kv6BoNKszD8j1NfcqfrPEMauf9EfMJTFgYDsbysVV42H1nMXsST9975mvmpFKsWdkJ8DegZk9Dw15RBQ9mnTWxf",
  "key27": "4D1WgZG92zDdRd2QsVshZ67uFkBJtroknEAQMLzf3EnzgCZqk4V9fTm5v2XYnSkRdmvMVQHAYRFtQdSyMWomgJRn",
  "key28": "5QUfebsHmd781uenzHMixrXBSK8Jt8SizYZPH8irsEs6QEWccwiD4YeLh4PdGs4JKk1e3g1hYXkxi1ZX3PUAFcMN",
  "key29": "5gY9RfMA2AAQgRrZ6HzZnFLHHRpXG6A4fEbahkgoFZUCmce84Mr85z5Z1RuffzDxUPe8Zxdw6XS9iUFgZrXSDmZR",
  "key30": "3DWpjTd7pAxPctXwQzso22YYwkynf6JpTFxsoaggzaGK18VCAK5jwy6vpi6dHeHSP66HZibgCQaYsovDhvAGqBQS",
  "key31": "42S9DtAfBKbfXK97gk64BWxUFyNmUWNK4UDR6gTdW6QCq1ZTYExv3VjNDzp2qceaP9r752RhpJuQCaz7hANye7c",
  "key32": "BHwzxSUUtVRaUmSjhrGJDfjLGVxzs2NUaF5pktgLVSWTPYC1kLpQRnJK2tNgz5anBeajv2SwwZmipQVJXB6oxKf",
  "key33": "3KrfeqVhRbvWiir5NuS12wQFQtyoic6sdcPc8vJnhjXk2CDUEn6T8V8DZQYuTvbZVGnZQ1eW4DQKroPu8D7pSG2h"
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
