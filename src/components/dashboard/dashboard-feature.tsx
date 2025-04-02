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
    "3W4DAj3i4ApC4x2pziaXhEmMLbUv1qLm42RRjZm6x7JZYgSnJyJZxUc58cNfmSGm1zhTZPd7oe2g7AsahfzRL37r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xwHsHaTVeJhbG6QdHWdAdwvEDS6Tao7EjdxqwJ8WiBLveHvPkwpa5Sb4Zj3xH4afsEA6jfr4DGwCdGtY87hB49G",
  "key1": "4z7GYYbfya3G58KSii5vvd9se5vef2qojnwJ7gRZcpriXGTRfiCEdNjyCqNTz8Fan2SR2MceLdhJeqnodLPWXcjc",
  "key2": "bUMHNEtUo8JUHKwJKhKbnbxUBUyWmNQa1WZJUbpVjwey9jJay72sPiCZD7ZmJ1NdnuCs9tKvpKTCkRULV1gnb6P",
  "key3": "3pT2FgPp565WFnCUXi7kUHCG9cmiDae6rktghgFAHaDpTAG4jeopFRz5wiu45oaJ4rcxJ9N97JsznXbJ6bc3j69W",
  "key4": "4jxrcbEuMBTkBgNqYpncU7HYopuYXsifj1kherJcTD9Jgx8LPq3c8sdfQ4jz8BDFGMqgPa8VbVcAnAcgBhVbQ5ds",
  "key5": "4oyDPnUsBUKi5HN3sbhK8fdEacTrsvpQqUm2ttsQhgmpdVtNvRRVVsugrJFv8PXgkKcTxmup6mpeEkYUWsHZuXVP",
  "key6": "4U7iGDtJrZjUajW2ehmCvja4ynBKwB5NhKpNdrGqP1SUuJUp4neGrgaYindqL1fVzr1BiQUsjk7wgHCpCmbfFP7k",
  "key7": "dRTLer1g89VexDbQY5vNMqaAcGfcwnxBHoVZ7M6jaWgSNZ5Rc1xES2kbFazvod1NYnm7pShDob9SdjHrEy1UMu3",
  "key8": "2rExRMemmTuR5Xq4XPgK3Vgu7u68ugvoKXj31wjLF5fQKtfxM3U7K51kWyWrDPjTMDMkiaYDcJj3AtCEgpT2CQf4",
  "key9": "5xtbo4AbS8Tde8EcaEf65F84C1JzzvC6kBUnxZ13P2VRE5kdQTFqTskc8HG63xuUvBs3HfZTNWPGf4Mn7zpRZ5Tp",
  "key10": "4SXJPgTQcFFaPxDAKnfLP2BbBVXBnfTgvgDECmVxdFtwVF5Dpi4iJWgGs22xDqqAQBAoWnTeAQ6gYQhpByyBUyTz",
  "key11": "44J3Ws3oCfQm4xUsbWNXNW6pnEYT6Xuhr6XjVuqNEUxRFAvKkiFtekQVv6Bmxjw3qvHzsF9EyQxzKJ3jRcHdxUFT",
  "key12": "3iVwLdu9dJSYYbkxLuEij3yw7MtU7FyaBvJkmkdrm9CNkyVSK5rdu1XCZJwXsiHvpxfzFgeSEDMjmcY3tFz1MKWo",
  "key13": "oEkE3ZXguVbM5znUsodU71KmY6uq1WyVYP9bf1jNe8kgKWUMSBi6HxPsA6nPXmVhTitMibPTX4xiCB6z1AHjDru",
  "key14": "44xmXuCwT5Uq8bApvCRZUKTPJL1uELC7nqZodXS2FzSZDqVmPMtTzpioZkps3NVewKANsmFxT6TNGW8gbjwGZUku",
  "key15": "23AT9vEVHCy4dEc7HfXyWFdQQq6pcq1giacuCvEdUgUy82EsTcfFpcEv42rTbhuBPQDSRehhGnrRsaJUwHBEg7Rd",
  "key16": "2TDvdJQ5nVBMGRSJvRRAq8XA457AHLRhCA58XKtzRWhEhoQWaAMtLykDfQTGYrJByi3FuVNpDAN7GP3KWmGArekB",
  "key17": "5yo3hnKzifUx98yxiBhYcvSHkxwtcs44xj2QdkSfR4xcwBLJn4fkb9a8v96AHrY3PvrLjC9ZYCwdUgjETsWh9nwY",
  "key18": "E1zPgw39pqLD9qcPhrdQr1eQ1GNNyFkgi7wUgHEtUbqLZe5kN2UGaGq1YcFiJ6EPT7GTttHYAzRDdLvj58cAB9v",
  "key19": "3Pg5h1G9mHSTsmZZXFYF152yhLiyJSPHpBEXKyRMYbJEgRPjRR7afZyvZaBZijBF4nSQBc2huyKCkADKMUCzT7gx",
  "key20": "38u9rBrLFCyCJwBBpA3zcf2d4LKhYCYmR1ME4iRfzjjoM84xNCpMKYeTGfZ7VVHRhr71PZ7j8awFf4reMmbV4CdE",
  "key21": "3x8W2JP5DxkjVKj9XUATCMxQiroW9iVgSFLHmx1J3KPEV45jXi5p33nWLvQJ3eaLMcfhqDPGTciXi82ju5a3ZZv",
  "key22": "5i4H7fPHhWB6tJUQFKjN1D7quFB9gCieAkk7vH2GuHkmEzYD1yQMZ7ysx75uZCasLNDumMHLNsfZhuLNqXyNkkiT",
  "key23": "5PWP65J9itKGRuzSf4yHXrTsMgF5qje63PNq4R3iM4pB55P2nHtaYMKst5zAcfycq8ztu3nRM3a3d5Jo76Xc2rtj",
  "key24": "PDUFKv9MnKQUGDJGjDCBRe59mqSLUUkmnmmprjkbnoNqsDsTSbtua1BBS5uuSEZbAYDW7DfmLVHxasfZJUE8GiK",
  "key25": "2dSbN6szM6FsJfo73bk5FoPanLpxHpMRSgmACY4AFQ2TMME6Vyutxwe8PQngZSnPjCC1wVuEEBvSd46gBXN9wBw6",
  "key26": "4aMYif9LZJSFNgUsc8XJ4EdGVnA2W8AA6CdeiQ5eFtJAQaX1Qyv1jYjvoJkXn25By7pnTkNP64djNt1rFt6z1i9C",
  "key27": "2YJsPhF1Dryc3WqVR2Lz6gVjTLyo7Z4uoKrd6yGq591v9R82ABee9FwEjmdqUGaNw7JBPa3qrUA7sbaTm9qtuDyV",
  "key28": "xER6np1GC3sVH94wDA9S7HsTLikPKG9hMjMzX5XwzhAQYXMqX2tcD77pUZ9LK7ECSiedmPNAKJPVAZK9wYTVxHi",
  "key29": "2N2StZci2gFbVFm2F5xy2XDqwG79rYbWmUSF3FjQXiLZpkr16e7NaAR18fbtoAzZEAUtFdzH5fTYGniQjWWG9HaN",
  "key30": "f4HiC8eKsakvpwqTwfnWDPMUbrBiLPRM4jizVEV17iv5vNFzaDqLtDzpBV1fzoYbwFZug1BUJ7Uc9euF8PB2M41",
  "key31": "3HVkBQSCH2z2GYW2SHCYh9mau5QsEyc7iJhTK9jqZUCkN5mnpGxYbfVeqqcEscoE1dSjtFgtximACLx2CtLa8rXd",
  "key32": "5cBseGZBaYAHZ3Rp6bWVmmWjK8BxW8QB7ysvkwFLsUfszM9vdKiPB6VTj3Dwm312C3GjnB8NVqebF3j2M6cr8Hru",
  "key33": "3Sa8SmGdAgcjZasnQuZ4ubS6n1iiwMWHx93pZovrH5MwdZsrxSBpbGYhjE1FENX1q3VTypegYgBXj3km8t74nhvx",
  "key34": "4MCsvUAD6KYeEoRKSjvVgetUUUUBC1YqkuTccSaeYpMAfzohiBCDk9bgKk6d4Ubc2eDjEaGVfUNMMAEPzm8DED2d",
  "key35": "3LfddUTfTz1xRFreH4xzg8GqUoJVhtqUxunRNDh1TZBK1a7JkQXf92kFBLzJmt6dkmqbXkcdaV1UqsqEvExcHxyB",
  "key36": "XQXy3bsdX4uxx3sAMTBrnKuUQUzi7KzvVcsQcj8gkV83qnEWTmMfBfC1d2PmDEnYXuZ8vE6pH4Jx84vXyBXz1it",
  "key37": "53yX2ChV6zBfp7GaScommbCP6o48nANDBKgyHsFpC1KK25iUMHeCcdQYty7jirWgmgSEPNtHiDuhowuvKDqrMNsf",
  "key38": "3fxCFTpUYucdMSheuV3RpB3of19jnbL63PAwa24vrc7Hdv3a4FcXfgjmmpKYx4Er7C5prGT2MdR5XL8a6yKFymbb",
  "key39": "mqViZbUTCzjAtt87pSEqDWFxrM7KNGAxF33bsZXfgPLsd8ptXaAaZUeNpaJypWG8YYk1gLsmaYrs7i3qCQi4USN"
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
