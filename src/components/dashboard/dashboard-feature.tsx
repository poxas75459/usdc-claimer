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
    "waNUiWUsRxdYXC4CA8mAeJNYCanaFpT8DkowQ23uJsxctV119iA8Jefc5NHrEBpBbfk2LsSZCg2WNfvRxKy34of"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ceBxB2vW75i6jPg8px12HNaqziNn2rsfZuDU96HgVNP64dzZkPhPaqCxkdy1tv8TNvRXTr4pECTc5e54fhh7WNR",
  "key1": "3TJwJ94eke1SWZ2LFfSFtKSMtiA82G34odGikfv8NyHyPR1JbjkQrBH4b8snHU1w5zBuqa5qcsA1tTbeYcusS1e8",
  "key2": "4YisBi3NdFZgQH3SAaT2aKUC67hiJXUpmwrXsgW1yD75G3cBXwaXFZfHA6Zznx8UyLf339iYSUPjJXXNDoxmb9PE",
  "key3": "23cXdfFeKWsvBNsAWmNebc86rVDUPzwJNL3ZKRB1WKGRJYwAG1VWuYrwjhU5WhSiSC8csqeEz73xKGrqNQffsD1j",
  "key4": "2dFgiTqB2BkXSSoX7PN4AhaqUjBG3vXa14W6eW3VvzJ1xUo3pmfy7DVypSuUTegvQh7YP2UYouLEHCNbPN5ZUH3B",
  "key5": "2yoK37BJC9hhxD23ZMYqy8YKhPwbgSY8vBUDeJp6jdy71MYaG9TEEpS4FJChuDrLeYeAGmKApuLUhXPtNXwPWvyd",
  "key6": "4FusoYK4AFfZg8SXToaS3j6nCkh2QXLkMVDNijXmXnLkViQbawUNwRf8PeqBoyzzAaMiq8iuxZuDsnnrB6SLFZov",
  "key7": "5RFJk9bd1ehVgDSvsYp3dU3DB6z6icpENb25KYnK9eSq4rbrQDnyzHMG5k5jjQPFic25s6L1jraNsrrc3sqjmVtB",
  "key8": "5rKhxryCPjFGXyNTEzWNsw9qzT3bSHwCtBQTouePzMbxEq42WGfQJpuNQpTNG8Aat7j3c37m1KaJ99v7vSmCHFv8",
  "key9": "1rsPpDD3bwJytV1kyZXMDoX8EBn6dbxxfRUFKG5Hmn1uGVkkoF7MhaQzoV6ATgweXqH6FUNoFejCk448NXUixCV",
  "key10": "2jiR83a91km9vKG6x8XS5LkMHSs859gfFQTKFaavqPZU47YRYnxchBG6g87LYJgPM1rsgdacWRRSFY47W7HzJ5Pm",
  "key11": "2575Ag6FT5xKADu153MCksBcw9v9sVv3qhvu26hn1Zeeni5iSUcFC2TigyKKzhuMS26eeec5MKA4dodCs31MEYvH",
  "key12": "62bJVC9NuDmy1CcnZUE7eF4UBQgBt2MrEHXKFfJAQFY6b9okbk5Xp6NtyNMdt6UqvSYWnBTiNi99upmihgu5fjHE",
  "key13": "2zXmegnQPChnnjeLHeVVQQgvHkJpaSQu8EMUDKsmyCtXAXvsqJv6j866J1V6jsdMW6UxtCpfMuaG87zYoXNDkhHx",
  "key14": "fV9Lm32RppK7htaCCJRcTvNhcwBs8H59GYEdQZnXeiNWLQPsYEPaN6uLCqBAMKp3H4HqZ2ah4D7rGRyBtewYuDS",
  "key15": "2Ys1RdAviimggD5VoTAUD7F9AHAzLVwBnCBaZxtoo8sg73wyrsypCrqbvuNtGW1wTYWwuxdTQ6nnQvEBYZVdjq3b",
  "key16": "3bRdDENokwvs3P1HiUm1m78QshGGRWF2FoEP3P2J7tB1kEYwZUAaLtdV9YBDaxrTggF9J63WVLQAJYKjUPvu9Dfv",
  "key17": "2KCy2Vs6VcjTS2ViuSpFDS1yupX23ih2gmtuTUMpf2pj1rgp6YBAmPGgwhin6YqDBGwkx2CyYZSG6yHXdLnaZhet",
  "key18": "2Gu8Nz7eaXf4PPFLBdq16muc1kWYf48AJpE6FmLgSPnZBK8VmxW76YjfTU7qqQxFNZdaQztFz6TfgfFZJcutYpEa",
  "key19": "3YKDUhoeZKejg8yEccSiRhEKhSNQEKg2rLgvQ84svUFb4f2vWdZEY1qpSGZnmwnroy88XUj96U946bYCZmc6fTZH",
  "key20": "SZndcDcmtGTtx2WV7ZBuSbPNUDHzySv8oM9jfLwHz58EnPnNbWSUjSdExqckegCpGKcV3CFFUueRmggpddwcGaK",
  "key21": "5djc36YJH2vfbp7m5ryro2qbFvdi8WWPpqi5FoE9tN3vW8eFGdqG2EihyEp6Nf8fbpBSBH31FtuRzotqr723G1LV",
  "key22": "3VevaDwaR6LCtc4rd6w6ehLBjAzyAd7LvuCybaAwnpcRBFpF9u26X7puM9gBT4X15finRK9k5j2bHosdG1zTNLko",
  "key23": "2N7CMBD2kdWNHK6Kz41izrvTHUUJBzYLgoPrwwFSzkkBpAPwrX2RCzVwF3uzuFZa1qC93YMDhsEsFU5iFcbZZBza",
  "key24": "5onbff6TSR41RamMyer6k9Cht8jvBepViseNLEyTNu5TFNFaVYSdcHtXQnpbEfUuZcvfoNbbgiRdqPbidAhexGqw",
  "key25": "4HAs78yEeobNpDT3MQmcerzoS4bLrzihcCvfoaBbPNcUYVGjLB9ZUKYQuegyMijPLv6n8tV9aqhbrvi5KaT48biM",
  "key26": "4DLaRyT9YVhZYoGRU1BYhHeUZNyM7K144h56igyy7XMj7MS8GUdPGqj45NYmLyW4Hmbck5VYDSDxqyfHH97JqEjS",
  "key27": "5iabJqsp8zLgpFtT2CWtD27w5oz34hbZQ64TpWPYFTijhsxDzxGKcXFr5YhsDWyyb6VV2rYXxoGCScaKmQ8xA8u7",
  "key28": "2j5FfPasYyK9YwefzGP84uD6YC2WMibA2Pgq8Rqys2V2uwYcCeJPrN7aCn2MK7vTm6v5hKJ4MWYJ7FJocwv332nA",
  "key29": "5kyMvxshyNsHv4jJto4rU9U4iydFAf9e9Q9hs3fSr1NaaNGJQN1YBp74vQ66ToCyj5QcTtRiczcB3kngwZjwWHHM",
  "key30": "tREhunCi6LuWAutbZMQrCByzfYsmiWtDQhyYGmBKVtFvn6GZGQxJNLVyWKAnhknj3Xv4tqwx8EgE5877j7tZEkN",
  "key31": "3ZAmLKcG6GyzR83jUSzVRjQqjdDf5fyaDBJniFkVsWYUYziHpNSRZ6KrMLmkHtqn9wF3bwerGCZsSr61aWcseTrJ",
  "key32": "2MnXA2fy1bo9tnxmGERnfFuSqWQ4JdWTEGEccZSJadFbQPVyue11CwG1tSwQGWjJSKx79ndKuLHDxh3QhLoxpjJv",
  "key33": "3uiaPqFa73vjgFF1AXdPNcc3vCsGxNADBcPevUYzgiJ6RVrXeeWswgvk9Bh8GyFJBciL6StaUvFv6nTY4PzxzycX",
  "key34": "5ssXdmBAZrRBxrSY5BUEYRoHo5Cn6vdBgmFzymHFRXbaMk4WoZmeDHM1u1WuiRuvZEsUR7YzSpLCHFb61DNYDr4f",
  "key35": "4gdjAUqoHAKssiToFiEyUXeN7LQkiEuUewMghKiEdxUia4PSwjjSv1abmBAncJUvEoXZHQFEyW8neRgxMPEi2Dde",
  "key36": "DfP3MN5MBzBpT6Q9cB6oBXr1ncHvapBcGtPKEi3RzpLVyoMdK1nAQRrepUYJPkm8opkuYpnok9q38xJqwCXZaxX",
  "key37": "5EWTJEoGmQ9LdR9SFQ1XrrWCf6YcNa5FPxHQSKX8zWRPHkDSYv5YbCmrdkzYeDoy21FMhbGziTh5sj3Q27cqHUqE",
  "key38": "5rKrfnHiJ3RPv8MW9SKhNVhpmV9cPC83hYbT7uKFN6xG6PM6u7yrHBrpezhe88ipfXQG3HdX9CmevGeXrTJGTZGH"
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
