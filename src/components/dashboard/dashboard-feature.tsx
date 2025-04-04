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
    "4YDzNHNmtWh7Jz2SYjG9T4H3yBfFYP25C4TBYpC5pYBVaHCeUpzTzUp2nMAQ7zfPkATtwnwpjPv66ei3VR2FboDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wNAsqz3D3JYcbTE7JM8cjSjC3PmBDgCwzRVLXLJiYPJme6EqhZYFGdi5fCmx9fanCupKUN4z7swEmTodfaY547b",
  "key1": "3gPALm4iiZojct15iN5iymtGJN8CgCqCauzy8uU6kQDVEd9Y4uGU55fCRobPUUCuV98kqCujHpWKQebxaWmGtxUq",
  "key2": "4mfFqBt6LDscByzPPiyavSoDCgTMVmsFuz922MzEnTrmJTdMQengLWafgeofK3MCa9PYqPeuowQ3NJDTqVx4QBT3",
  "key3": "63vfyLb9pcYCPDVu95YviFA5K4VAF3aKmdiLJUcUBx1WissY9YxGP6kxY793eG15MRBkeeJtpDLED9XcDTRDaSgu",
  "key4": "erukvUQpYDRN3V5HWHuRFqE4XEHaL3EnqhLPsrqCid3AT9L1BE4TctbJ3WJS2dVKakjN7dvSMKxBVFxEvMAR1ya",
  "key5": "qw9JkCGgNDKsnE7RknmuzRkumsShQHQUXfRpnuTBY8tf5WtVuagAQUuKaoKyMJpSnjTcpcgR5N7wgfKpr2kJ5oT",
  "key6": "M1p94xkkpFhy9yhjuqK9Fqvn8sbEryjVrL8YaZEZ8aeRUoM6eAQG2CwX6ka3UEEqd8eRiWh3KcGECrgUUz2DNFb",
  "key7": "2Ui71P9v5jbSiamvv6K5U7nTo2yzHjkdF9Zb1ye74TomBhUR39W7myaYN2GaU5tntdGFKri1c9aNQ6F9pw1tNV4L",
  "key8": "xgoMXtz1B1Pgw96xzXFYfSBimCCcVBAvHzDirb6dyqf1trgCQpEre7XLP8PrGPX3FrceXXJxrWM9ZAQmawBKSs5",
  "key9": "5zXCeg161sMuaGQHrRck3W7kJH88d8WL8h1HzKUUE9HbZ8FkA8KK9mQ3eaHPoN6UrNNHSDMWc4XXdC73vxo53TNF",
  "key10": "3S3kGTM2xFzy24sHoTaZDfNruvdk4TkxKESDpQRL2YaiSc8yj5d32q6PPwwru4fA9qQTWFP1NsZ7X7oXPrnNXAsY",
  "key11": "r8guQwBAuqv3BJxP3FHhgL2eUGVMR5f7mV6iQx94aDDEGMs33kTsBXzdiQUpubv33vZaokimy4s57EYyK7TvmrW",
  "key12": "2jdRH1LmDuGFRwbJ68BevqRJTx6VqcSpjBWSk22cdeZ6KeZuhr3CkcZBCUtgQS2mmMLQsf2vkJp4Fi8xDu8Q3HRc",
  "key13": "3v1Ycj9uQyNv16oBtvqA2AMf9YTfN34An5PMeS9FDze8sfZu7WGWYr9teRTKyAaEFYMA8mkXHgAD2LUEHVAC5ZtV",
  "key14": "2PCtyrEfb1xUJoFBwmYGgWt6DPCyNiqEeWePYNyXkQPExhq7LGtQs9EuMkMq3rHSo18ToQHDhskfBNxfp5mPvvZr",
  "key15": "4CM2vQbuRosSUoJouFrUqpGMHWGzSqDiVkuHtFJMZNSS9Y1va41xi6UkKAzFxXP6oGfNKNZNNsVvPKnGvBBskj1A",
  "key16": "4Lvr1gW5ixGnSyDYXdjhEbtGbNSbmJ6YfoX4GWesmJiSdAVyijFKPNfzDwkTDLcYjHumBY5APpQMENfHxggU51gn",
  "key17": "2YtCoTr5byW2LzuQeBXrr8yqxRakk1QBsJibrGBLVNYvPzRGL8vfmjY3ofAdcEX7PmnaRpXf4RuwFVHdmXwCSu7i",
  "key18": "5s2EcoWZ1TKkZPkFR93AUAmJHnK87hagAkYnSWMGj9yizi2KEFL2tA7wys6CJU65JvxLynbJYw36Ubf5RFQFbCvS",
  "key19": "27uqwxWiMwmKHERVWbMh2EtDs7sh4iZafVSzm7gbNnQxYFKiKhSsZTdBQhF8CY9ghxydCdvVJCv3BgvegLp8YQ7K",
  "key20": "2HaDGPzfBngKG3nNuC5zYrWQzJnYigyUwRkDzp7Rp5sUD55WLYrcH5hHvtDDDM194mmdnVa2htMFpGVoPANyzz71",
  "key21": "2AosgQJ6QLNFY42WLCPA56u6MhBWZwNCNuRH8KtroWY593uaj7S75KS9JNCoGg6wXhKq7TBEggTKas8iyXia55tc",
  "key22": "3Kr2iNyHuFPH2ZfzcZPiPWiz7zqPaE8XdNuRnJV1m8jpLMo48Ufo2dcAikUzBvcyR8QSzqJjzS7myPJKxZ1gKzBj",
  "key23": "4pf6ht1ajzDr82oGsdLQ8QDE1KnAVoyPZ34SkuR8Dif52vMDFtrce5hgpDSPnhwnC8Cc4714RdEN3wBct1wqCQnM",
  "key24": "4YCei4CLjwa81hKPeYFY69scBzHjKv1cBnxRHySPxVxz6aBTnU5fByMVpFZA9ovUwds66GrPpkdFbi8yNHyYv4gt",
  "key25": "561KKZEWQwFQbSZH5jrKemntLbmnzjGijzdGWALgNKs1WgsNYm7vnxkuvC6girSCV4M7xrAjYm3QR63J8hKLz8Th",
  "key26": "5cTcqF4gyvY2fN4P3Bo7MNM4dRHE1UBcFryzjKEYX92wRLbkQcHbjeKCqtqF5gytp1DraDYsY9QorwuF1TMDvQR4",
  "key27": "5jsA2wtZuqVM5DeppzTqua4Pxya7AGoXNYjP4yuWq5GKDbe8YgTEeAEpmZXHgsCa5bkBN2TJ1bzaagnaTbq3W5no",
  "key28": "23t4ZokRvFUzHyYAW3zEz3snvPQcW2RWXBCgek23GpuaoZ1xcZqtyou2mALmJPRZqX2ttAwvwQeKp2bh1DYo241N",
  "key29": "4nskEqSRHZomswzZJXPjcoqACeMy8Uw6Hj3bUivgSmaSBfMDVLDjATsEEZuLAvn5kiBniejTvgXqmu2GcVxAU9hu",
  "key30": "2g6EGX4uH8r3Rk8j6kJrkRVCwUWeHqCEWMN3eoYJqY34NtQp8V8svRX8QJ2R2g2FvbpkiHrNmTiP155K74SmmzHt",
  "key31": "4cmsX7ZTKSqSPB5HmoVg9Qup83EApKM6BXLfkRfpxgFttYAo81LFWZBDxTMSVSAydB7BbgdrtBJyvM9FY81yrMNy",
  "key32": "5FE7CCg3q6dSyuDSJKDcjvuXhi4h6htJuPU3JXvbDgXwNMABRxC7BuM5Lkp6svxegZVr6F3AZug1vFZGm9WyCt76",
  "key33": "4VgrSvjDvor5UzZwzHd6t5igKhg9HzVptwcohhXtumCWhscJtxkngpYpVSEzsyxxgYBBDeha9PYz2yp1257XAfqG",
  "key34": "49ZGpxNS3M5bhD2hHYScVu37fDz7N7yvRnJkdQN5M2n8eaUNtZEEvUKiAbDcidGqu8RnjrpVfaiSsyDwGkGXmmaS",
  "key35": "472Xt5tPASjrvTjBgpVxVeRyZgqLZjvPvt4eGgVDLWsNbdkKK136wTYaNHfzs7CiKnKg6cUCJgaGToJuwNkaQDYm",
  "key36": "2feyEzg85wrM3bh1oM1uA1wJagnNwjjVnZ1EN1HTHoZHG9eUnofqPWAKHo4ocn9HcdcSRi8Z2FwTV1VnWYNM8Eyo",
  "key37": "2DNwjBWd7mTXPiydBjLoZS1pqBLHKoxnHLFMu1HRNjreuuYKa8sDQStn4ugYwjhk12L8zsgz3b2ABUzWD7xnHz3T",
  "key38": "34C2c8ciByUiWfV5bFqbzMZ8L2g8Dwphkxb5okjUqzL8i5VJrE8bS4PwtR6nHoLZvKXjAACaTB3ZAxxpT1x7MUwa",
  "key39": "4FqGAMW8vCRjFMcWascCG8NUsoSvsDUCXB5JiRNU46aGqhZrCZ45iupbPPvkiUYYWH5PUESEDConNg5xZb97gKAd",
  "key40": "5UScdq8cu3V5NvcSBaMmJozmns8TYPwgJ3mFFnTz1VvuSo7ood9mwKCdFopCSSL562HZ4Du6i4BZpBMViqZbqVe9"
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
