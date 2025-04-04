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
    "ZqHgwoe1jddXm51KwGXSiaaB9zeo2BPuwP7xCmDi3SeYuJegmgxqiXsm9eh1q4kExeVWGoNHrETqj7TjQcpPYEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pK7zW3gJZWMWc35iUSYZrSsRJEKZdt9tth4PLXWBQsbGsn58MFjrNHDe7VwSUb1nFm7NXdJfDaH5CKgFGUfnfEG",
  "key1": "4ZHrJdkAL7AsHocy2GB8G95QipMTDXrpiH42ZMoGvSDDsgGd72kXUeftbeWWXg6vBwZobNSpF8B7pqmEGk3YHif2",
  "key2": "47aFpnYff3k16oANeEiLqbxDGPLsbXUh6vBzCuZm4GFV4zFTTiRcWbfVHfaxja4FVWTxNXnuMmYw8qkXW79VuYrg",
  "key3": "43YWk3e9j1KGqxd5URFkqeiwGVpVSCJw3iAuJafcsFdbouPsn8YF2vJkfSmFa5EMb4FCLQfWAttoQEkjp7m3moT3",
  "key4": "3AqKi4j6VnB3eF8Zb5HCZYhV7rVhq4esDAa4ChqAzU1AMZ9cJXc8pqTn9UJgFbm93NVAJaa7ozc9GNeRujpAFBqN",
  "key5": "3yspPb7iJbbqzbie86La2mMCks71gPpHPhaJVXX3u2BiW9HQfnG4vrXG1qMvRMsuM2LzVs8F6CYyNBxaxDFU4oup",
  "key6": "55AujXGxKYQTjZrvm6bnQ2zNPU1sVhY6SoaX4WzeZmAEKc77RY6Lz9QcShLtdguvkKCNHJGhbyLSmb86gXcppZyN",
  "key7": "5FFQAqpBXccUMQ1LhZJqaU498Q7cCS6tjGKTDjhKewsBqQ5TScK1mxXiGfWkRUfaMg48F5dSiHvcUQW9aJNSW6YJ",
  "key8": "2XJKQTiH72y7VamQgFf5NC5qwUXg7E2rJGsPGdPsMjfjCFtmgUDnpAeK7bpHWzF4HcowiY1vynzRVko4KsqpyJyf",
  "key9": "4LVMNy4KokHBaS3T8k36yYGUWHcab8aimkEoUrzD8q1RxGMwWMdREdh364yVuwstY7iwrRiZx4eWafgqtzvQ41Q7",
  "key10": "zMjgRaEDrBbZEMz241CnKomDWfuUZhSmAvaKqQF7Z5n6Sw9jfF9u6bDEtqrYS3PdpTfjGCZ4d1FP3xYp7zGDS8A",
  "key11": "4xFhc3k5FAeY2irwZMk9m25KGnD569ZAxW3dF5iJH96PXWBphPVArse8cv6ggyqjo6sWEDiTLrijyEu3MPmQbFHA",
  "key12": "53277SaS12Vtq3g8uE9ic2s1jxb5zhpD1ibG4SdX32M5zxzeF7s1ADFD3cLSqfqGEchNdAeoUvS2aCVqfFxMhXad",
  "key13": "sjtdJyjcanoNYuT5jVFV31maD7myWNZ5MAbTEsi9h3sGkNKkaTbEp8vmSbgyjaXhAuGwe3yz5GFriiS6chpLGHN",
  "key14": "2gQAP3YvNn6JDoadgTC2uPusSmDdVm6vCJJC5LARqutoHWA3qzba4VcB9LtgCFcfMtsc4Hzm9gaRYdCVW1DEybFm",
  "key15": "3H7WsPMY16RiktcrC9QTd7eGbSbcWkVqk7WKUeaVz8jgLe31TqASeoUd4U8wzMpaQjyKtooC5iox8GbwZefY6qo",
  "key16": "3Tod7amcBHtk2EkRwPXvaTw8ErKmx6xFe8XzcdYiDZYWn6Q3xNmTzxLBfmaEpZeymMMZLGkdnhH56TTyewjZht4b",
  "key17": "3x3m5WKC9tCqeaLgceVezWi39e5LBbsGRvxsYVuHR8f6hhxLCRmcfkXg2UFpek3JL6uBFy8pes9oCA8TaHx9VX7B",
  "key18": "UNAFpqxvJma7PRfFpEtsbuBh2TUpkMb1cZRbyx74KDpdCndHmVZ9JhU2SDSRV4i5ntu2x93549NRfKws5dRFEfY",
  "key19": "2eBFuRrg6aWXqAd61cH8KtogXjVfmxNNRH2qHW8aZzMy3jtjWetjSd8vQiV3FVrr8sLrqvxZ4Yr2zAWhgdHo7ahK",
  "key20": "2wSwvCvA7rhp79MYBdasxaz32RANAYcAC7nSLMNb7HrLKcoGxGJPCeptZTnVAMr9qrhUs7xwxS7x5k6nNWo9EiUk",
  "key21": "5BxJHM6PCrh2mhrwPAm263YXxxZHNoAczbM1J3f78uUa1gBSRxMyM5e24BDhXfkLcP6cpbWDSs22gEXz4VBoVHEA",
  "key22": "52B7oL2tgS651xCT1kiDjrNsvnPyeJEzAGHaGZm4KERbauM8VAnZnGYMvTYrfWBNuDNZQdiTWS9pAy4neK7pRVjz",
  "key23": "3ovdLS34yq4B4vCRhLCrqPqf74chp6HgkM8iB4BfRT1HGEFjmLxEJjnRNhgnMWZEAVZV2FRj8kpgdMSadsUMY8RC",
  "key24": "yGmyFTyDYEUGjhWPm1Z7JL3wsP6HgivKsWjDRFydvu3mZCesP9wqWvTU3mArkkoLFUnEFnqXUnkFsJCoztYvH5W",
  "key25": "4Ggh5UZHhdUvvptQmpKaSwSE3axeBXqhQSGUXWGuhzVwbWyKGu7UrdYZZEnPzmJcvthk2JXUHEjmPFmSewLD2pdT",
  "key26": "2agop5cUjKZmoNChtbVCDRSdp37ABiin1BjMoP6ar49n4Jzh6fsxu2aX37mT4du4yCC4BN2CcQTe6zg14qaG1oE8",
  "key27": "BfmYBrW7kBjqUdWzBSW21DvAaUx1rSf48795Ly8VmgppxySighRJW8jMt76NqzYaq6octskA4LTAgXgGMVMoNbU",
  "key28": "2HrKSTqi33RbNU92VkFA9mrvHqAmD4NeVQjqQiFH5JHeZPL1hMR8DXBrAn5AYxSh4vAi2h6huGJJtaEd74LNh5JC",
  "key29": "2kJx3YoYsM6YEPWuJLZPPF4VHqHjARotXJRL9MEaUNQTcQXhbMjZoG6YQ9PCoyisCTEEKyMazadCMbpubJ784cZA",
  "key30": "xeojEMBGvYtnXY9Rb3Kg3EuXgwTPjAzvoGEoHLVpZ4k7iaJQ6tBE9d26hM4RLkihfeHQrryUX4xkHHUBHHuvvv8",
  "key31": "5gagm4nrMW9a3oTVbNgd5FWBfQ2WYLh9WmqDPEhpQtD7LsoZyRpEs39V8cBS9EUWvB2eXZY1QE17AixtGQmuGAWy",
  "key32": "ttPZGf5XNQ7gufwvX87sQrFiFSYqgoZsgMnqQjg5Z98D1hRtCBDWjBmCprw5e9yvRSGqrAswB8N2qQVSysnYuV4",
  "key33": "3ojic6xk5SXLBGvUnCkf8e4mHb9Gk5piQmdqdQAwRb87baxau2V51oQ66DKcAhhE1EjDo537cJZnBAK1LWdGzocX",
  "key34": "3gaXo7YVSRuciG4CkJTzBob5CgKKtAFGehXcUSBroCZqWq4eQfZXc1aJgwongm9ZEofoqva8LwPAFB7fjYRX9LMc",
  "key35": "2ieGiVfyRX3SZaGmPu5WhfthG9sSWv1n2SsFP5chUNFEECynWgErcqB35ZXsAgykhuUM4SngbfnRwqbeFVsRSuR9",
  "key36": "dTqgGiivAbHPtH5ApeeJtkwU1hNUGsawNbibKhYEjAzhRXCXF5QkJ3TTbiaesqhSzNUU3svi8FvsH3w8pdCv6BD",
  "key37": "3qtny21VhDDrziESsiCWWcoBeaJV4VLyCAjhHJi7euXcttWPAP6ysxY46dZ7GtRSi4X8JVU3HXppxsuLUUELTwf",
  "key38": "38vxX15NGuntH5tTRUxnQcerWeN9YoR4Xpx9C3HqvAA7mNE1Fj1WceyXADkyszQUCKup8Wj8ShZqSUkfrJ6HVeCG",
  "key39": "Lyp4bopg4bEyrkM1siXqbhnf7TvjiCpNBrEwZ1Jh6q8pxa5bagYM5aTp7pQWfBLcX4Gke8VXwaM2sBGmfnrjEnb",
  "key40": "5uHmUUCbvmCFM2L5VrVp8t34H2wYXScGCK2Xb9VBHKWKRrxqo9K1ddrDQeME3yjshyjnRcRQ5XkSWmLNVEjknCU8",
  "key41": "3TVPUHrjs33zL38VmERYKWPmAo5Y5zs6j8anpV9YrckjnmBtJWiEvnx8rwf84KfUx4TG3Ain18rmu4eEoeuwNk6F",
  "key42": "2qfGU6CMrDojhUgaiDR4WDLEJCiF94zL8boF9G9w9oBuYwTNv6j3t5kUuXmSUazbpEgbhqAjqiF1GvZX3HzT37a9",
  "key43": "BhZvnxYREqbcufBxeyQ2Fd9RkyH2a2ZndUJPJk2wQm2mghi8hjrBKxAjMRyisUoCZuw7NXM9mDBaayD1jKALBjf",
  "key44": "5mNzjtRzUFRvZSbj59UfyjdETpkyHY8YQicQ2qiToKRcH5sw2nHGe1TyWUWyQx6eJvsfQrR661hkzdj9bfVfAEet",
  "key45": "VXuidFqNejCYKWddMp9VK1nDKLZN2fjQzuRg4FvU89JmNrmSJsWuUPPuncRhxhhq3vc8CgENmz515xQRap7iFx2",
  "key46": "3Q1AcqBJZ4xr3bK5sf8xwv1i1tmtWYyeYEgAPXhdbM4nDwihvvib9KETagv7tFhvNT3D8jCqxBKxdWX9rBoTKkpp",
  "key47": "PspKqyvDeYy9v94JK1JbjiGutkSVDp6LTZzWYUJZemzQjn2FuJP4UyVkMKs6vpCbJkKdqdWBc9QsrN7RYXrUXS6",
  "key48": "3eePoKeiiUGp9qGNNShzkm1pqAtJmxLfsbGqZBnqgE6pcEfUKy8VwqeDp3WUVUUGxYutukQwU9wonAf4oi321ceS",
  "key49": "2X3B8g1fzFs5aQXAGt68qthNnCokBfMhVdsE8ZzMtTDbwHfwj8VCWdsawy3jhpAERN6Uy5bF1FAwQZS94KjzPt6o"
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
