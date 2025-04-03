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
    "4NgpfVPoyLrFgdLBdjdB8Md5ivuP9Ynee7xSiM1KFw7jsDBb6LzdFX76Zz7ZGaijb4t8fsrf8Ero36z3aypV1X68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tpyPLG69E9eRNuhX3jbxARNv79R36yg7T6as8Hbn6499HSmfvngPyPGD79a6fDRDcW7zDnvrjMBdRZXmhiwUnMd",
  "key1": "3cqE2ioJ8JYBs1nyur2d4qbev3kPtCroGx1We7BB4xzeJ4Aa9yy5TE6brdbUq9XXRZ5XZn3x21ywMYTgSJTNzRSs",
  "key2": "559t6ZEtcwxV6ro1zn3GHvPVvapSwiKF9JpLV7yg98pc1Eu97rpDVHH3S5tkLcoUJwjD1UJ4fELskUf69DPUyne",
  "key3": "4jf2v3wc5y2Qdo2xrgLmNDWgTP3c2yYUKA3F6XWT2wz7sUTMpH1bVji34mimeoAYD3XeNshau7NXTdnr1SnkvZSF",
  "key4": "5sWkhBt9ki2s1vHFF7rXnUm6ke3uqxH9ETjBqSrqVqbUmWd9ndk2T6SdfZ3vGdyoZNVYZTS7ik8qn5eh3HZ4drFb",
  "key5": "3e9rTPoRTADAGj3NHfQScD6KF2BganNv48Fmc44G1gXJhhuvqpqqd5prr2AKCFe4RhZZeXh7eEd9L4ipu57nHMZL",
  "key6": "SgXnSyBiYmkpoPfpTWvAHb5atUdseCbRqWWttkMVKLweHnNzFDPGrQvxcYNNqqxkX55MwqjTgRE46K2m5U7BXcb",
  "key7": "4pEC53QAkbqLkYuDq8mLXDsMtUPfH9kxVUScf9b5rrUV2kY44tDTAsWqLt2XrFX8hgtEwQ3ex7aWGBwLZQWiL7D3",
  "key8": "5x5pD2VBroDYzf28MocR2NhikaxXN6MU4ESYDsH4u3C43zsDxcxmCdmt5UkrYiHrG2bCK8gt1oJ1ueQV4WMAMKrh",
  "key9": "33NQnscbi522E5rAQ8WaHyzua229jzkxQ9r7ps59hBNgLzn4T7hw5J3GnTLrfBUKDQPkWCPk8VUbHzK9MeEweZez",
  "key10": "4VAQuCpQqKrz9yixuG9eZ7zp38UeUhmeBUmv3nBGgHqQcLikVVBGT9jQZFefsrYUq8deTRjUAk3mTHuH9NmiBSR2",
  "key11": "3bevTPbe3ZteAmG6p2kxQmGJx85UvXZukLWQV4zBeWVJB1wKY7u8h8YjNAyWMfBwmBF29qGmnJNyj1FvRPcwWdYJ",
  "key12": "jDpbSe3KfhrBN5FVCwZrEvQx3Yahatv9oim3nNBvuLDZvsPcQHHZcja6iHiyXwxkpDB3oq2crbAsTfsrn1dnLkJ",
  "key13": "92bhuprCT8NmCLAUgQqiK3TqrJezzTwe3LUcGGg9jZ84NAJQzriyDHyyXc6hnK9UMLtWNtwCoPeEVWv7H4qknf9",
  "key14": "2FdYrvtveXbjNEW3aVcJcVFxR21eDqveyiMxLER8J8VjBvwrSff9heA3sAXNadjHZh32Htmdae1Qy47XwGxVLxJM",
  "key15": "5VckKPRgefGQqRUp6zfTAd6j9qW5MfsTtejXhLPC8wHCYCzxGYRMvueYisc5jw9jBxMRzADJmhDeGdRmZHHq2wV",
  "key16": "42QnhQNhaSHdphgy6F38AAkVTUTjmGRUnGM6JKYK6JLYRZAsXCFnoRyixxyhPAYqoErJY6ghZDaKefXvDfg9DuEh",
  "key17": "2YqB1hkqy1srHZ5ZvJfsM7Zofj96jWiZVqwokPJXQteHnHQzea8XRTgTZrGJKMoNhekZxpSDhiKVhHTAADkHaD2F",
  "key18": "2yUUevsyAkNYJKQDfNNe9eNefsGqnzHjefEPw96qodzfkcGcpbxsdhxEEYXBzoC3xC8uxwh61vFSLgkUF3a9xGMK",
  "key19": "2V7LfbMUsVoA7m7dd4rdKMRV5iubVupGEnSE3tYuUE1sddX7vVU4fGLKywaMWoeLSKXXqrzhCZY3ZRrBhHuJieFK",
  "key20": "5qE56zLkLfEzn6LejKdSHxFff4MGVBMUsadPr2JLfjwVhg7SJN91T9kfB1DoxvMrSnPTHUtV9DSR8HMRvgPP2ARk",
  "key21": "2TaSzq5fn8kdeAkLrgRRCY6JDWfWrT1d4zw2DduZT4B9DC1Z8chMNzYFmuFkDXuVxk9qEtvK14ADJDXqubuq9jyS",
  "key22": "3auJsrWPwBHmJZB39ng57h6o7NwYAiCfJGTyLwYV2ANCDvnCuk4KgncyKUuCAg5SrZjo1ktJYYDHzBR6ytF4p2br",
  "key23": "5ex4BejUbbR74R3q5s7K7cxtLzu1UMLfPrNhWNvGq8WeLCDBu5vZcETfnhphtsuD4X2Bvru1vHaqDFPhapHdGb3s",
  "key24": "24LteEdDQEyXhenSKVGR3CuKid4y7JbbtSdfCVzaVhTJ29S9oTzBAyj725W4FoJY2hpPc1UpVk2TBTqZ9xNMyky9",
  "key25": "29cgtWcjHghyUd26PQjdoZXokADP2GFxu9zEBDW6GPSbgm5pW5xkrQaD9hgNMN2checJ72PqYYk512hCycmn9CSG",
  "key26": "2TxV723sRno8HLncvjgdK2NByGnm4KdVmKCfhu9pYJKPJcdex54FVLwV3RXXw3sP7fJvvEMMpvnyzEnTK2Ke2AG7",
  "key27": "2d4teyURctcV2pminkEaU8M1yyEhJpRVQ58Ne57Sq6LJXA2VVreK9vUXQxqGU3Vpxe9y1bJBjK8xHnL51m143wAi",
  "key28": "5dQBKhsSNFStBvuVG9kVYBFfZuV1hoeoWXNaoFMBXgbu4EJjMY57YdR4p1BsXWf4tuBp8unzp9d2vFbSbn5YFgtj",
  "key29": "3EEsfyRbAQbdQHysNZj7wXYB8kbM8hAwV8UdTMcN685t63cT7o3P8Cgy79CNWuXUjo1vLSdGeNKY5G7FvPF5ouL5",
  "key30": "2gi3SiBUWf62j6oGurMHwvyLW786doHGw1bdsNFbR9sy7GpGVYU7MEWKyS5yxEh3caSmKvVis1ijfRkhM8ymB89r",
  "key31": "4jQggqoSjGwCkJzxQpHGpoFYrJsAQQxBVgWNTrxd1qy5SXpd2L5S5MvjiQ6YsxbYYosMkN7fHREtaYPof6YcypxZ",
  "key32": "464712pPaCvrwZAbhGrSppnJWgYFS3VSRT5SgP2PPFpjHniML7XrQR4yfDM7i4kn3QmGZyYHfry3MgWuEZTqtti7",
  "key33": "5GzBKWRrU2Vsxtoqf64dZrcpKxbhL8HS4n6mURjwjxBMQB795QHF7xkTX6dmeBcK1nxoUMtZ8gm4Xg46PwrZL1Yn",
  "key34": "48N3Kf7sZbm5JpgXUt1CcPxufWS3qjurQWdMeymamtiyHVkpHjMDvQQUdjqeUpZkHNT5JouE6G9ATeYNSeraqpbD"
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
