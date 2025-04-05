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
    "4paQ6kkvkchw3EmVU6Ytw8HPvmpqAeSTzVxk2xMV8Ri9varzYquGXGa7dtQTXC3n3HakPQWxDZULTeK5KqbQcd3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g9Nr8GoVHeYMkTgGkK5K6NRkAmshirHD8ZWnKFZgqxL8xoE1JftYAS1RgDUoegg5Cg6e5d9HvYfucGqp3ctWs5i",
  "key1": "M336tKAWqscJCePKMk43LysRWpAoBU6jj7YriV1fvgkehQJ9EQgKNLxg5h9tHMqRpYV6pJBYaJLvLTWCZBCt7jN",
  "key2": "5EiMtddwwdkkP7qA8uQkUS4Kq2VFB65VbGxzHvZ9cYYo8bYwvyUgDkSKSYzP6bheXj34bFfgTAD5UnceaFkU2Mv3",
  "key3": "4Z7UG5bEiUiC7rRL2u1D9RKEfakY8BYiEA2rCPYsQANaLN8gS7jnUwfkqgYY3oG7ktBAU8tszWPEGfbAPUtQz4y7",
  "key4": "5WPhzN3WoZGHHNFfacaP3VAAmDMdciD5sYpbFMkMmozYhUfZ6UcUZcHf3p3fM9eNVzcWMdQA4QqLwZjLajXBNv7g",
  "key5": "qK6r7rGfpbye67fzKtmviceMUW1sGv4SfWwEPxA72hoho25ngPm6xrrD5n8cG3b6ADAdHHCc2KtSBvrhwhtWSsu",
  "key6": "4qti7z4Tcd9sGHgWyz6ZkrCMYFrRYHXWUzQyRThyQ1QfbSE88A5WzxEsnprdAv8yf9MSss11JnWLN25fBzyTXLzv",
  "key7": "3m37LL66wq7eXU2ZTXqmSnS7yyBHraGtpn5G27tCXNJH9PCc3aHSvhZRxze9BxRsjb4hzS8oEt7kPJyHaHuaov3y",
  "key8": "2QTMFYUc7cSJKPk3JnTtvNdg7X3Qb9AyT87YwkBN93tz43hKCPeogELWtfPZs8eqqwqD9TtqfCz44cd9gwhmvmUb",
  "key9": "4MPCJant6izfCbcLH3xNSEME4rU8smeJTo99eazxom76cqtgysaGNk4jjaHNfpsWtUgTpaenMybPXhRTg38weFL1",
  "key10": "4e6YeaHEJzeVwc3hTumngDGMRiPX96Dkh4t8de6vvHGShNbff2oVU4Li8GKnTcBXhCKKn8FyuMYDKYTuqM5jSQuS",
  "key11": "4YwjTmRCYe4No3hGnCnVsxh9WqbXsEpPf8KwTNFZuqJ4Jq2CsxF42ecZvUm3P5p3ht8MKvyW3zmbxiovDccmEqqy",
  "key12": "5QFmkhY8PZRF26iuLWHaBoJNwkmQt9JT7NzYG2ZPT4iGWSnpfWg4efn3ZmpJFTvqwuvKP4bSiVAxHabSKAMUSsGG",
  "key13": "2MAozrcWKt7mxP8wCStG9mKVfijoNUjBUjDptocXqVn9hpMqk82WY3wurXBnLwkmjb5k4EVyDkYtfXhEahdqDVQy",
  "key14": "4WfwtAphgTVBRMfn2dDxuUJWEiZ1Vu8SXjjrKd5i8VKQVCj7PxJTv2mNyrZumm4nL4T7TQFhYB6CU8Fivq2ZccC5",
  "key15": "26c94ZUTn4mGpsMw4Ljg7Ts5oh293Y5aiP3YW5fowDqUN32NKgPpQB9ZweUB8mnNia2mcpdt4AZsA3DqDKg26Kya",
  "key16": "e8KkakQVnVMKVpLcrsg3tApJ8fJDjetscDZMaWbiTxGjEytjwwVywj8NquTjSy5niDCuYSkdZG6gwEaXcqEF8UT",
  "key17": "3sBRn51hjhsiTzvBjbgGCoTGcF3c86v77fag4p7vH9A6A6bms6RZYSrTQovuaqgFPV7kbDdKW7qmqkmD4Hi6Nxe1",
  "key18": "3R4A8QsYS9xgx5Egguvuj4cmWZwiYfzMN2Xr7WvQXLiGVdxnXhii5brKFMZAt72UsNTG8aSc7swHqoRaNizSCd94",
  "key19": "2udwpfHzMGskmcZAkD7Zgsepjcau5U52GYEERmePqgt6jfrBXzhioLmR5vEUrHK1NuL7C59UzvcGgRwWorFzFNiU",
  "key20": "2uZ6zmkRdxFzNEuEocKeKJpLq2csb8CZGZfKQvWYa161pTZLzskrt1uE6hpeXYKwSsfhGiFW8XL2BnuUJ1N2iLHY",
  "key21": "2kQ1KX6ucB7PHy1cZqD5iiCSL26pFsXKgrKAvzZmcb4RpTCu3wnaYh6xCanvnZYypyGbpvsC57TWsq2Npp61wXLs",
  "key22": "63NnfadZ7zEhFDid7GCjjz7ZZS7cgshp9bKp7k27Yjji559SpMjXZqA8iCjUZAHHouoxCttkH4rx1Y98xHRNK8kV",
  "key23": "2CnZW59v4J2AB1jpvuJnpmKzC8eyseG11z8WWeXVpH4uV7XZd2WhZxn268dRaHSND4A1s56budniygjgzs1xjDEF",
  "key24": "2BQRaMcH3nQRujkD9DyZnKTAAqdQwvk51fQnPEWXyoMP5M9ARbz4utSniLghdNxNVW8WbJ837ELz7BuEETBeY24Y",
  "key25": "2TJfNkj5hPpUS4R86ceUXYsvaxQy6GVvYjocbGsarygDEQZoZMxduy5XwnR4ga32tpChF6NeYtq4ic3Q1SZN6HWy",
  "key26": "5Agg9qR4dwaCDwk2EZEybNjrvuoCDEBpzYRHM23xXC83gL1RXm55gQrviDZ8LqaijpM62J1YnxdcznrnYUyQGkK1",
  "key27": "5dgwvsuYq8n3NEH49Qeic3nfFkZpioCp5nYfybcXufvrtBDw9ucgQa3cA6dEQyn3Zy3Wy7pGN2jEJBjhGMQo7TvS",
  "key28": "5XeYDaKicbJrvHbAFHpYqzKdnaJMSH9ZjRkB7TXi2VsqaR5R7t23ptguRfYb1RqrsVm8VG9BTcoWFNaJx4s9tAix",
  "key29": "4hSR7NsyymUZNPt5pjReras7HJ1Y1psCwvyounaaChFruCAiWLSHY2eq7KTCQgfW5JW4FPK3WVjnqRTKyTS6xGCJ",
  "key30": "4jFZ1bTTLp3AnrVFEARRNEvehaJJwst1HCAPqpL4rkKreoeuAaY27pXVm5QoR6ZomLTM7XMXgyCxkrn7EdoWW2EW",
  "key31": "46VE11EjhhXFG6cQLyXgsTqRe5HbJZ3euCtJTBXypA2RvTmhjCYijk8UmyPxSKXEFqv2MBVjMdYqRzQcc6uDWch1",
  "key32": "3m3U2zD99sRMeEwvPeBqozjBLhxuugETsfTkvzWBY1aywytWyrYnRw3YvnN4kYn6FjYWUja3QJ971hp9Btt7EBVm",
  "key33": "35KPXpjchZb7hpL69tEpmoWeNbanMfCde77d963ZpHyV9P8Qmx6HSoikuwvmKQ67v3kjvC6v3ZxvYWoyVP3vbryT",
  "key34": "2DTReDyFn6GrvgHKBmaeSJa6zBYCkbuz9V4sqCvPANQ72oSNU4m82DGVkWff7KUy9BmhXkRvN7vGxLomfVvyAcVo",
  "key35": "3K6PiDGum4fb4qZecT4pwjmh2UJPFPc7oAUcx6iKxr127aB1Hf8pZs2nTpu3Ktzhb3EG59X7CRtayHx4mYMUgYJB",
  "key36": "3VMQRyc9U5TBRM3CEZuPBF5UigJ2GBhsSZZ2dDHwkithfBZJkRWgX9XVFWhEEJzcBX8KgzsGYVtzRHTxexDUkYQq",
  "key37": "HfoQDVpfnw2UhS5WAPAdSYhdZv2BoiphcidSb1u38p6Fni4Yxcaw4Tvo7KLy7p53DrLwYJM36EyNiTFmMGdV47h",
  "key38": "5EL6qzkEZwyyzJsiH1J6iJbq9Vvhu6FCC9VKJohjvj246rjtMhdFdVi5zKf34THpTtRxGMdBhZFNvritNzceB3tw",
  "key39": "3kuBcXq61aMq3G6mXai9npabhT9T1r4DKc2CSBGk98Q2QQGrbnueyKVtWvnVaqfHFArrjx4gJBhYbGXTmYDKg9hz",
  "key40": "54MzvQ5w6PRuk6DWxR52duZ3aMjRfQPk5zfuQqZaRnreEe9kFqxUevwSoQ1PAXvgJNkG7AhsBHU7ANGTBErSS36a",
  "key41": "WfAcM7p5o8bW8GjMTaXPzn7vYEgMff2pPPn3kUfW2Gf4nAFrkDTupjXYHwVTotXk9aHRUL9XXrswqLuzmKMZtLX",
  "key42": "4PVJFFsS1qM2tBZAw5RRU6FHC6isK4Gb9AjFNUVs1NzXNbzEbMj3q1r5mLstuuM6nxLfz9vBnRRTgzCD5LSd4rvC",
  "key43": "3x1pzpToLhm2zoJ62YsnSZkzx3QoBLVFUJHnb4FqJfyEQCsg3Zz7GQty81P6xh5fRRPqYAQJg6e993xTTnG9jZ4w",
  "key44": "4ve8BgjRqyDANMNYsgeFtvXRLKXTb4z17SnDVv6yJyP9B4yVGBTuKTgY5rXjMcePYWH6ncTLbvAg6pZznxqu2pri",
  "key45": "babAKzXZRAeXmXm1Yg7rLwCZB6bkdLwSmuzdyECZKAhtPzncCTB1QxNuP4xVAgnpnbsduL21Rz8gHQGhrGRtxEx",
  "key46": "E1QxBTdhvoH6JWhyyAebecZeRbuC5D5fGBKbQ286UGx6roNSuYTcr2w9Gi3i4KDxg3mQ6BptU5UTYmthS3mNavL",
  "key47": "4uAShRJXLKcC1VKr1o6UdpCoTEEvY6cXv4FRSAVM5D7KffGhXVdTY4Ms7QrMi6dRw9P5oUqDGYwLGQvJAywbS2Hh"
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
