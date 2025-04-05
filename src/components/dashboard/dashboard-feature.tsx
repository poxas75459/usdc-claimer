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
    "2vvs9f4nKQK2SSFFYQ4WJoAv2f4FeiSCsjXTp3LyTzGVFSCMpz5HK1rN6v9xAvbVT62Vkgf3iHZzet3oPk6hkj2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mVHX9R2y8U9b1GDXGZCvy9vFWHaJPgSZb6m5eRhmq59f9Yu5S7LGhdAEhCFPibvT7JfR46dustMWbMkbC3mn4Da",
  "key1": "5aH2XcnqLnT24uWLjhXCtNfmbHFiTdCouiciprhEt2mSb7kxqoQjYuVPwkFZdEQnjR4awehauCtVPPb8RpuB9eM9",
  "key2": "2dZRGUXnnC4mSFeT5kBTa6rE1t486G28MhzqmnHcUkTfR6oFD5i8X1swg9VU4tDLp9z6x7X3RrrkhfWAao8FTqTj",
  "key3": "46bwm1QQGjeA4zY9a1Zc375ZZHQNnewjkLHsDiDdQLQx2KNCzaX5VsHZjKhaY92ifeaft27M3VkN5y4NzHwvDkqm",
  "key4": "4JQw6HuXzAbW51UfucAw3y5rtMuNopZnTgL6XWFqtQh9tjLjsyoYd6F2RxWx4y1nHUTukdqz1EbKQGpkTkvznzaY",
  "key5": "5jvZHmhsgNWwNrQDbj56Z1QgxwVKtCTnafcVkqqJP5VkGc51zs6bGBHa8MGBj6CnERPiXTKn6kyzr53JSM53Uex8",
  "key6": "2guebFevhMX24MM3zWJQ1ZigHFwJ9L2JEPQnP4ndaJXbYZwjP2kWRsnDq2W37th3B5FXi3TVVeXuLTBfGdPLAcF4",
  "key7": "5p3E262przpX2my7ue3vJ6MAgxB1BGHkXsbvYc6R5XwvpX6wNL9xgS7VUuF9ndB33EXbrDP7wXghdUCtyFEK8g6Z",
  "key8": "2vbZ2wsqtFCo6J5HFDLK8trjCoDBavw61RN66nCkdvncZvhxHNPxh9oRdvrZTD8jj8sGJDvocjzuGkaPXyZJiN4B",
  "key9": "26Niwfk6XUd3r7he3yfhqWfPGJtsgTqf8uWfHxdKVHiaNQDwnJ1dCiLA14PKttPMtZ89ZpRrgTyDy6JJ7EnP84oj",
  "key10": "3FRbEqxN25B8ejdTHwDsowcWcZ3fwmhAghsmBNoiif3EtgXoc5L5UkJpCszBiEcn1NTnMHFF5AvSiSBfhd2cdvmm",
  "key11": "3C265TEvSgpFPV37Y5MEfXck8mebhLNrXY1Lo71dVsYEiRL57pbvEVsJQpWdDngeiMBGjBBZg4nzQ8jzhoZ5iDnm",
  "key12": "Qy42pkYroD1Uig2FD6MdEEZFoNHAEHsVDsD9g4rjGXRFXXaWEbRZZdiyr1XVrv7AGNqvMy8T7YNsWngMTKxA5XF",
  "key13": "5s8D1wARD5Lme4JN5i2Pt4hYDUEj3QAhsxe6BRfvbXuMy9py2NSwzWfhK6Sradw5U9f929GbaGbB8yUkemuLTyuY",
  "key14": "9kqdx7hZovPZyXDK9k3ygDG4nroiSmSt6HrLCdwirxzMuphj3LwgAtx6SBcxUPFKEw8qafAVbfFfKUt8oQWCuSh",
  "key15": "21EzUpAtanmCXGKynhSas1AEE23kPmGusAPvkWtxqhr62PNWTuTQAX9w97mfEgcekVfFs7YjpGV9swRFcrtQSHQY",
  "key16": "5Zg1qWUdEpCKKWzJBhgTJAQYCXVKmTaaTHa2My2ABg72FTcQBKc1qGt8KhkPiFsjwuHFKnTRQcEJihUnEQUt2TmV",
  "key17": "2eXVGxZPoNnA7Zk3W9XXLK5QQ22rZvhk3jYTgMcUFLrZYMNzSbu2BLwXn49cVv448eA27WzmDHVqwdFyU2A4SiRC",
  "key18": "45XLkQjfeBxhLfhri4jpQubTwwLHqwcd5BHNA53YihT6t9y7Sj7XqrvLJZTNL2MHLF7u4uV762Cvr4NmktMLMGFU",
  "key19": "4GvB8XQgpoejRaucSefV1mj1mwLDEffj7KU5CStHQJDoAo1BjXVhBTncpPJPavqdnpA41ZDnJ9PSwYDmpN5Q81wy",
  "key20": "2jfXM2FfPxEaoJ2hahtETxcDZmfkgAWS9z4ia83Z5DTMT4W2xmTYLyJhhmBdqFDvZtX49vXaRLkredVVwVo4SfjV",
  "key21": "5u7HFEXj2Qds68p8rX6zJZ2BrBtGMLxdkVuGC4H4TxQYaVSSeJdxcbjoFXmV3ohmaaeg9DRTD6e4GboYXWXvYpsH",
  "key22": "3wsxHurQCKpwmJRqthPpCgx4iNHCnscqGCARoviNzCHCaMi8sZG7vyudDSC8gtiE9u3WcWXPZoFzKWgMk1TjpzH2",
  "key23": "5tdHZx4XHzNkjmBJ6QaRbxR1Ln9VyEoP4eayVmtW7ZXYQQhbcTEZYfnUYe5AjdPoBmUx3KnNvbrZmjuNBcdv1c14",
  "key24": "51faAhpF26yF5EU7Ax1mdZm8dK4Fj82SfGUrFRrcuaWaP7JaVoWe8Z1mH845zift86ceoFLjtnkdz2X1rRgYwojQ",
  "key25": "Bpp44NoesWk4wsCbwgrHDHG5h18hXTuawMds5HZGbdEPNTipRhCViF9qGMuyWeGzT7uhaTGnQW2bqN16nx8P48U",
  "key26": "3QYA8c13MovAsTyokFmjDnAEkmqmdQt4VAnhY5ZgxmCvCdn4jCp9twexuL6ZXH4QdaGpFuHDGVb3kwSNEBixZMPk",
  "key27": "4XaNbNHTA6doRnbXRZ43txNnvyU9JmGz1DjnwievLpLGHaNoFQTqq8JiBXEoyTiPxk8Zmw5ESSTSFB5DVfZ5bibH",
  "key28": "4Mpio9Vqw2fk7auBWmXDag8y1yGuoWEAjzsb3Fe2ddcUBa4hk1PBGxBo75BnrDkZhKEVSx9nY9ehHfj2j6wNpTci",
  "key29": "46NFfJLLMxhhfELxTMw9avbXdouiSssx7KNVZfU681pTaG1mbkfdk8Hgh8SCqLW85N4FD5qpQz48Lta34xKnY3EF",
  "key30": "H3SfgsKTji5rd8cotxe5FB5pVNnzzidM1zcVkqYne9zex5KC6gPynuYtw9ziGBiRjwcdfBFcsk6o4GbiCTCQSjF",
  "key31": "35kzYz6c9cm9L72jdH4cTWLuYWPPkqTDMpaae2tbiEaSReeA6ySt5XzF7ZudCk2gQMA6v8ZZyEitefCGaiXaKJm8",
  "key32": "Pppjfw24ManENWc2M3iQmRcS1bfWHnVHw4nsG9UoZ53XfMAiufqxq9hd2KM96PZTqggStfZi3R1XaVcrHmLfmj9",
  "key33": "3H5A34X5ESkUrejMAwrJLUKm2cVqjiTvYh8GknSBwXgY54qmKkYdecTEpLKv6BymLGnPyJmL8WooVuKrq3Awz5cQ",
  "key34": "5gZKC7TbzA3GxGYZZvNYUepQfKd7PzroANRcZWv3QuMU3WjpQvudgatsESKV6TUNvCpmrjpRtKAQsUVoaCDeb9Dh",
  "key35": "4WcvrFy8CEqm6pnT8m1TGMv1Bqxczcdu17Xh19ZtU55RfhdfwvtM3jUTq2TC8f3cHNHN3jjjS9aWAUVNVzrHvcha",
  "key36": "3Hc8PxPza1YD6C6nZLmynpqUVNFExZV9t915GYB4vg9E9v8rMch6KtrTPYV7XsMpzqgDfiJAMAnpeFnu5ZsV7Rf",
  "key37": "4uCZFAa3BWzNea3zi4HYCewZwDgN3Usubw3Z1fbuwom9vrFQCcAxtrQKE1avjmvJxyAGjDQQWTCojAS4ZC2444FR",
  "key38": "K9AFyJd7duwPejDDYQ2V4ZhUgnzX2yCSdC5FTJKUhgkNqQBbsGpXAmepdQLW5Qj5hia51NZB4dpyv9QFcCZJdLA",
  "key39": "4ydrJaBeH8jwns9w8RoWF6DFYvdBEMPnCAkgJrJTyExFTLgtRZDgEmfyVasbTWqZKi5W8C8k3HPpfP4oHpiAEeP3",
  "key40": "xPX4iw3JpAiHdzzJ3UCP7SgSfgWTMmnZoSLEDkxpEaNNjRQpN7o6JA6eGHdJi9iKK2yMbdVQ5aA84F7P5t5cxak",
  "key41": "TpM3GGtiqCsDtKCyPBNedGqSAHrNofwuTjrVpCLFzytoQ71tajBtY3qw57a2FHRYMZFEyyRLFpVdSMYrQfk1gRU",
  "key42": "55uaDS1dmaf5W8isHm8VAE8wNnAv9MHSvkoTr6bsZCQxWq7zFDTsFZqoUkYYVYXS2M2CnuYPbscb6tL4JpKp4ZJU"
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
