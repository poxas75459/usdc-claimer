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
    "2K7kaZcjM3Y88VnHaueYCih2dD6YGENobaZHMM38622imUNPtEpjhL1QQDJrPGg8BihvfSiVBY3w9KbUZGdkUV92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jnq7pfae96WU5RVgMaJqzZZWGMGoyEpJXDqzjiKsUQvvtHpQuzP1J528vFF19XcNwxTRR5nfZaUnGXhPSK8hZ7z",
  "key1": "53fCDe36MgnCYeFDTbd1GmuStDwPHXe8i19Cvxy5LZU1bKs4thsqtDjVDB7TusgiBsQ3nHLoXixxbPqaWC3KE4DR",
  "key2": "6ovTjiwrUm2XrWAsWBK3w3YMTokyEDLbMZo65zkUVvbq2t5NQkKRKyotfvsXKTEfLnpvWfGjicuYNhV7LSYwNno",
  "key3": "2oRwaT7wC1SLNAh9nEa1nZAi8c8bo7HLTLN9vhJZm59fiqERR8TJbudPax3gKP9c3GX8stfVhFyykwrL4hzhXNLX",
  "key4": "5vpmx3XeCQrPtM9ork76HfAi4xKNpKycUSRcUgexfZagv6df6h9ujds22jpN9ueoMEg5uykF3CDLsgvrdqmkDWRF",
  "key5": "4EDKbZVgjSkj9BvqWVTNSqocv9uueaqhzDGwzD2C2fhsjWx3ThXdcWkjEsjsmnhAPovf6B74TxQ7RLjLWi3wyyqL",
  "key6": "4DD9SNFzb6W3ZC1nBMPTcYhB2sjfRRx4DGkL1L3aXHcVep1Z4ghQWtLZKpGFSehhJrZqVckYH58qQBmy8bRyYtH1",
  "key7": "cjV4U6X17Lp84P1ok3zSFZ9djd1hQK7vSpjyku2s2QHf73EfS3KoydJo5RFjJNuXPgdEfmK1oJTdtj2KqXhLhsd",
  "key8": "3Q2DHV1gfVN7UP7nPMSZYEDgYVJtp1nTPZ6QFTqJxbe9CHNDj1jxpBsZSuumRWbUUm8p4v7e9GAXxNYwZtMyZE6J",
  "key9": "vaHh1r8R3ygK2ZvkF94dB4MGLKDyTjHxd5fL53rtUkvE8Gv1FBQPauHXChEE3gam8f9615JPeNutcGcPNDVEoga",
  "key10": "3fKvaL81VtvUVSbBC71AzsUdpcjGwhPD2M79T3sZSpBL1UB3fQZGWagJjFUfeixi8e5cZ6FsuidPfcgsDhQCnGkH",
  "key11": "4uii3sKaJLdnmUoHqX8ZSytawFa6UcnEHPKBDmhieL3NEjDib7Gc16X2ifvJ1si2zzhWbyH4hHZCp6io9LTuSYEb",
  "key12": "3B8Y5cbr9JLYhe2BaNhUrwcfNyA7jN9TsGPPag3WZKeX4rrZ9cedT5mSXzfdiy2WnW6e6kPubh4pPZXYsUHnpG2y",
  "key13": "5QuqcUXkVbUpmgC4kgzg356QtZZ5SK2JooZnTupBzKujCqJjtd3hd5Vnc4aMA54TKFEf4VQupQPgbvubyXfGoETu",
  "key14": "2nRGG3mWDUPqeqsPMNg46C5zv2qUwusegbAXpKvjCKkT6pGR2rEUZRA6ThzmfMP55r8tzc1hgRucuobDQj6FU9i",
  "key15": "29f21ZojVdjBLnGchPg1yrYi9GPU8xy8RWFrB9woH6MDPfMW1PEPiHydnQfiTC2w2YBFPfy2QBLBQTng18FLBEaU",
  "key16": "2iwn92tV3sAw3dyxQqctJRbh1eMcYrMGSKnTxYouprbX9e8iXUzKUNy1Z9Y4bcvGrHTG3Kyo6kTJsbQtg126NRt1",
  "key17": "4Zi9YB1aRKeziH1akMbM9hhTrYVBGAnu8MhVctt5rMfdtVYRxvoJ8mzDs8a2F18Gt6r7VWnt5UBmuRfFnbpcFq4a",
  "key18": "2agYZ12pDF1ofYzwbhMGVbdi9M7RUMxXSLTS4Zfmi1Ky6egwXhLQzG9QBGv7KLkeFokYGdffgKQHJojkYyxgCnqm",
  "key19": "2imVooyzBe6Dq8Jr7JfgQr4tur9JzkFL66pJ9eVN54Fbi5rqN1T5cD74f6wxK14RLSD8uprFg1ZpcDYteSrqhwDp",
  "key20": "3t9m7ySVd5ptFxE26nZjHZpB6kyKaaDZdq7APBFp3jTeaFozf3JZmTFEn6mzKKogUeXWGJ6o1WpUxQev3EjHRbk2",
  "key21": "4i276J71Zzb89vgQFCrHLjTzCt9vsLe1jvuAXuaZT6xixGuaSw81SSWnWCz1Qkpr8Nc5SX2CsyRAn4oPU3wdAy3Y",
  "key22": "3VUZkeRd5xrciUs8fNY7mGe1vN9vtSBq7ass6542ptC7yPvYfUMLjnB3Wst5WWuFbFRPVwzUA63JVT2DK3zmapta",
  "key23": "BZNbkqDZpoEj7Pjmvw83s5U8xDgLdqKhYC5XYzRyGFqhUgDwLVHN38yxv6AjmNCwkdWqbnL4osAJRstgWeXapfW",
  "key24": "35SBWdh8kuYrmiBfr6svWFEgbdEXqS3TfR6fc9phsugUMmAdKzA4Vsk9GunAHwEnghsNtnMtMSe8kSGbcX38a27t",
  "key25": "zB3GBVTewHuyZsKsU1XawUyZGniqWsriYYAmmZvFn2i89aLgg5R3tWwMi4bCQuUfzcw6iDMa7BGMBNcx1uTuVEQ"
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
