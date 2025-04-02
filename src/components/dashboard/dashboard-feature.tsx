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
    "2b1xRVeFq4gFWnR6GcDgW44nFAY7eLp89JWTFdXLqi5QkxEGENhn1XRUkj8iahfqJ6D6RRKNkAjrfhsUaGGT2NME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ShNdw61ku7wvUZeHFhwaX4ta5MJewxFCukqmyrDc8cKoFM2xFY3hTiqUbB72e74oGcPrL43QNXnwCqBkaussrqn",
  "key1": "4eoy8bEiLMbhTHZhLB3cqNFprQJpsNwn2zsrmWmHoaf7ozY5vqenv2hHkc5xD1yygGpscCTvqsrCaJ9j2Th7BjJV",
  "key2": "38mG23PSycJYCDTxBCaPGz64TRdSsajoW3ZVNBZrFJK4qxvqoQGZ2rmK8YvCfbv5CL3wFtzabR8YWNByheSMFftZ",
  "key3": "5AUi2qNBwiviZtiwdU1RKz7FcajX7ke4Y57Et48tpHchV2ehfLp4cU2JFuVA8XfKPJeehhXox2bWA9jfoDqWaYnM",
  "key4": "27QAjhcZaw8LpKERdERMkejFur7ww5ieSdJVdRX4Pw5SqiH8vbs6RQefdJgFyHFdtazbWj5sKwwGHs3VDsGrwX1j",
  "key5": "6CXoMx9LjXR9cu4A96nbqPvsjMfreSCkQjtUnnBQojbt5vSQ3iWTwCKmf5vtuyow55Q7XheG8yLXjey9MGMXoxL",
  "key6": "4hxzozjstvb8YXCS6ABP8XQp9khhxedwpvZBrstMPbqGQqMK7NLsJEAZyQ7dnujgSiZFAdDVBTYunENorpQiyJQ",
  "key7": "ANeUtGWNuWHCzwxySoeoGmPiqh7X5c3xVAr2ByDK1sspGMNgm9Jnqc553b2LBgWAwvTnXg3zmHwDmzmzTiiGL2f",
  "key8": "BMTZq4kCCqEE1UfyWRxTZttkkxdCH2W5LMTnXP62ThVaVVR1iuWUFfmZ5jQwARJTviTdBYq9s8F49D3p63AHBvS",
  "key9": "4zcijNLuCE9udWm4D27MnAonDMHLiqXKSeKLq2btieJdRYz4ExiEe1dJ9wbrcbTVn6q8UWBn9KK8bJMw7NZz6Emo",
  "key10": "3BfKrUqNkmK7aPwLuMThgAZyj9UvPCm2jLhxg4YJJE5XF6rup3m1mqbfcqKAeq8qWDHAnrN8WsZ5HnAgSZqF1PEN",
  "key11": "SosEX2uswRTD8EdKBKrNTktgT8Qsf2aDuFoAXee1B89AcmMngHGuWf9S18CwFGsCB69kbZt92RBc3LzUWzc9ex7",
  "key12": "3ziWk8CE9QpLFs5hZb471oPfAe4Zwy7G5wYHGnxNAokSUx9WqpMwhLL3GRawSgnwRsJdAp4RAqhzxBeMCnCPHsWW",
  "key13": "54C1j81gepnuFbpUfK9fvD1YPjRSxXZ534GEUNvL4FnYoVVs4a8cNWiS7P3wEfcMwFRJQJaJbSpDm4xm4i2zY9SA",
  "key14": "3jphYDWv2CEw7P4QDixFNo6HgW52yhR9tzqSvzjgYsJLVirm2PHP66hfVJaQaLzAhvzFGES4fwT84wXzn2Loxv98",
  "key15": "3wyKpsR79SkKQTEvK1YRhGLYCAjEFGiPztRG79Dqw5KZ3QbUfLmAaSBsK5kKJSFAQue2KSoqz1VS8wRnhg9Tm61e",
  "key16": "4o9Em5Fg9kcogaGmkWpRWoY6ji3Rm6mtGtqKvFhz3zRpkb7QjeDHnPd39xstcEmuHMK1judwuwB7Sx2mR9ypJCpv",
  "key17": "45ZTxT6dA72BymzKHngwhJEuz6SRWHQtMZWFw4MMarThCWVr5YpBFTAwwEQvdy1CZEvdLLtrbWQeYhr4Mpx95Xzx",
  "key18": "3AtH587H5eBxJDntkAZtNTWtZKCi77Ls45vg5hAKfahrPDKZ3r5X6kvQa42i2sMPWQKBP6GZgZsF5ZxeWTSYBJ2p",
  "key19": "2u7GFSEAmv1Hh9KmtrEYFPA8aQPWwc5UPrBMPwg9xo7HtPZkWt1gCYSQyNVfwLWeqFh1Q6S9HHq2aeMKaWH1AZLY",
  "key20": "2GYecRPpbpPPWr7YWnUninhsJzUqLv5JEsZfZPtLMKknMzpgcsstpgxe38okZ5jdqHXoUYcCcHfsdG4HFcGAQSH6",
  "key21": "MQu2VzJMsfGTekEYpcdiqnkeqSgZnjxSqbUdxaKWD2xcsb8hUkqaRXkFAACrEfWyUvdg5HmwyT2WipmhxV31HoC",
  "key22": "2M3g2F7RLsxa7iNQpNqUdxVYm9LdPuuHa5N9VnjR81HLdHhp1coqEHnCfvvmRT9o221RaTp4QQnVKLZXkfUJb17t",
  "key23": "52FMDKjuT1KABfxZVNrYseGDi2BqpWN6r97cvwxuCJ23BjjX9BNkG7E66ib6cVthZTRCpTLHsUKzUwBtD67krjva",
  "key24": "33gnM1bNcVX5tmyMzWnqQdthB792x3LTnSDShrMytDqgosPCKwgZKmsx4pEjT6bjhe9JcmebZv46pxh4TAHBCnak",
  "key25": "2nN5Wa8LGxjXLAPZ99oBE61GwWTjGvd2bAnxYRoRjnWK7k6H1xUFJfzvyaj3ePmSExAhLDQ9Fvi6gjJriMa4HcWh",
  "key26": "2uEc6Dqp34NGTUA12s4WVvbE4gVazng9H9aZPyBTyFXKyVtWgNfavZ6eLDwhH8XtsZLkWhugYcwLrqhRZX5j56wR",
  "key27": "3xrKiEAzyDrStqRvH9XgWN6mw6Jjm69wpj4e1qouNbGyNGmLGL81CrrgKEX1qJWRkC1DF6YKpmtHU4yLdDha8hem",
  "key28": "3svgQxEpjj7qocrWrE7me17UvmWngGK3wHFEZXpU8UWybEF4SayGS8QurE2NUpTv6gDkZPnchfvmikGh2EdWEjAg",
  "key29": "4HCvRbZs9ASbeCcLF5XufVHsun71vaDbQMuVe8B2SoZmUXiMwRSuBgyTQ1TEmSzycjDMx1kq7KdNhk5wdxTVFZZT",
  "key30": "3P7sM6GM2md7r75CDniekeZ8voEkZTfCiDkdAMXo6uNxM9K17H64iG1XjSoDbWYZCzAdAfPEyxhG145SXgMKmgU4",
  "key31": "2keHwRkrdpoWAWaonD9jri2i2SoBVGMC5xDLGMEtZa6UqCe6eJJirb8qq35LZpThCP4tAS4o8tW6xqw79TL7d7zc",
  "key32": "3WnwWz2gyntEqVThQqsJFJgMC4Uzz7DaLMTfUbzGFVqL6gbK6DbZvdzNdFeSkqJzMiYgXiAcM6DWjcWGNRa4ZNyw",
  "key33": "5kbniuwdrC2YcFwo7MomhU66HVfKnCn1Q3XJZD8SUQezE6ge41nqkSf24HBcCf67sQdSAKaj9Vm1G2eUVFAvnebb",
  "key34": "VRsfWUp1CkQPQ1J8fvZzbBgue6UkEThGVEyfMCtjzebJwmtg4WDnv3mo8QpsBXLVoJA1bdcKXVCempiJnUZ5Saf",
  "key35": "4Ev6pAH7fTMS8iqdJ69jYnq789zhFFweBVtzVacYePbgv6mXKDgaa7f2mdqZ1uYKPQhVRBNhDxFcGxFtvpidrCet",
  "key36": "2cCqG6J5mdKhUw4XCok22hsumdmiMVR82jegcsbfCZdbyWYMgYG5WcU8dNhWRUo7B4BKs5V6kTWCehU3yguZ3L3h",
  "key37": "4QoxVhHk3E7A7qkoRQeBJFEixQrSNdqhUaM6ZATyS5vHuoAEP3GHzd6nPajNe5F6RaRvG9husRsSDZ8kEw6CRKzU",
  "key38": "4dd2mH4oeoTKRssgxjw6Eo33Hegov2xg17HjD8ZwbD6iktnK4AvLsFKHJuggDAi3jnNVvnn67mVDdgAJFH9Q1wTV",
  "key39": "4YLeqbXJ2m8FVwfmB6iKC5vLBSE4gqJoAUPsnXLFrStQTLxoASNS3a7AfEVHYnbL5xJWc2zg8jS4aFhFmGA3JW3f",
  "key40": "4bJwppUTKVYCMYsfyf457aHPLSte6Si1An8exEjbUaCocEBUJeoaYRnBxNDMze2fjzotSSnJmc2P2r82AY2tCit6",
  "key41": "3bqyUbJAJgcypGz2BC2S5jSiCsdSTWHrZ4J5dKVYTiAJ1RiaSgKvXkNQb8p8pMiJzM8qFCfiDNg5nVD716pGCkZ",
  "key42": "JnLUxBQzCH66ZWb5QU3BXPCg17cs81xKxT1dbNhV3Z9S2V1KptUxxuR2Md94LfrnZCjjUuU4JegY4sZLfXrXNFY",
  "key43": "3sDmzseHVxetQ3gZMXPHuYxHSkcFX6ByDghkhL3moS2PnJSfcK4uNQrh7Brds7V89HpiqMqg166wAsVkaZtVm8yU",
  "key44": "2qdifp6iHBcZom5vtNgkhyHdrDk2zxmbndMfBeRgAKtfjrQsTTR9aZt7fCFjchFKHJR7MacDSmUgJJ3yCMv8MsrL",
  "key45": "5LnEBujKxyEGqjQA3mR1MKLf3AQyfRj7EhSRVjJew8h7UToBMdG3E4PeLXXemcgSDCUQTHANpPyFadjX2mcbH5Qz",
  "key46": "3Ay3D9GggG26RdjMdJTFkJF8wPuQG3SmPe7cgK9JpThxtzwi4BSQrmWT6ntPhhjedwzc8ZFSRcdrXDEkk75Rmvct"
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
