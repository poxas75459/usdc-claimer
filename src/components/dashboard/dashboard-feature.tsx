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
    "42cYZmgYtwiFcCxjJUnsGrg7sjKaBFmbKz2q7dfKGjzcv5tuP6QchamLLv7hMymVqHoy1L2h3zPAmHTWEqxyY76a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BkjkfQtXRNUzjuWAtbtC2CpqDSYwBfoWBbYoZ96QynLCcEVJwCdDsEm5dBjGZxMuKnHiWEfcUdPcXRsUWsrBzjU",
  "key1": "5ZmLvZnKgdzMALYbcC18TungVA7J4UNuFoApTDBveh2YvCfXbpuioKSKrNNt3LFhAYf1ixZ6BXkKE9UptNx9YgBZ",
  "key2": "pA9awkiVyH9pewGFr7AMjkookjkbF9YWTpuyRCheKCdo9LZqhFhAMh7wiJ9Ks3H5usGVceMiJjosdKp7b2h1ZoH",
  "key3": "5H7tw8BCZLhxKFRGKzdVPnx3gMYK68WtQq6k9Miq1EnCKuuWeSDrx2mAYpaBjkFRk4KbMUNRomUzp3iTvyttiekm",
  "key4": "AktCUzTGWDHZHGik3joHM4AwZi86V65pECPXJEDxNFNry9yzLCogoVDrfdHj2w5u2eLw6DYGAa3fb7tXAXRQbjQ",
  "key5": "5gF2K8WTqharCQTqiEQ498mdFhaFobBBikoMcN2Eyv9ZLC7wvsMsJrMnWupKyNu9raiKvA8pmu5h4KLRt8hVoG5S",
  "key6": "5EgUx7CF4iNw59NYR5VekZHu2bEzwQ34d8cjv24dcmZfx8v9txWzD4twY6f6TGuK3VVM9xNWdDDwDN8gKseCubPg",
  "key7": "33ZeofBP1iQ2znCZDiUDougfGvreykfHaHfHy79BifYwfHt2dhKD3nKhAWCLvS9GmZxEt8McfZSkC6wfzZ1j85RT",
  "key8": "4EsCohiGYENugeUUZHsgwueNnHcm9Ct852uKrKus932cYAzTp1fzXEjrfEtwY8CcRN4kr7a9Rs25pVAZEHQ7o5iD",
  "key9": "sAeKKQ5wnVoyoUWBQMqVQ3h1tmFw2Crxpzy9DGD3cYw1ggo3B1PvT2rgvZSkLBqMozvXRpPjGJqPc21esfnZ1S7",
  "key10": "2kSSoE2EaGEZy3QMbypy9Nj3gongtsyy1xCzfYQ2NLGb6tHSM8zjGLXeTTJxzeyaTVeHA5ZU2GxpWoB2METAGPnE",
  "key11": "3YAp6F17U9Ch3hHtJfqEUBuPU8UnTeGwNXgykPHTuLSf35CMDkJmHVDUHqABhypVeSmSYwrVFsacFsVp6GgKFS6f",
  "key12": "4ZqNfhJWeVfd813WxJ1Mj3fqPCEsHmBxnNgRWUPHXVGe1iruAGUcktW1CcRJ3Eo1YoG28XV48b1fFPQQz36b1qGz",
  "key13": "2PEEb56d5PhRW5xL2wm5mwQPakYki8b8Z5tSLsW2rycCXAAwmft41eNRqWF84LuDLcxRh3ezM6wKM8YoKt1YaP8G",
  "key14": "3dt4B73XeaYiQtr3bJiaZGBf93nSpU4WZJyvcnX11DLzbja4CwRRsgnmRdc4QDHX9YMDCv7WTJNFHQMwjFC1WK6j",
  "key15": "4LCw9jExvit2aPPBhQSmjS9Q5GBcr6M5DXikTYsphamP1gahFF67VDE3EhzACYym8kGrHpS8WBcWHWuT8KTLmRcz",
  "key16": "21noJ88wvbh6yAyDQ4Vyc9kgx11uaFAj3Dxi6MNHVzm7UjScynT77mMLn6Nj6tLQMPheXXUm6tQFiTyTWCzMtvKV",
  "key17": "SAR5HBWCWjwkcq3PwSqJQ3VGSpKX5EVzQPUDdbP1GHLcC5iCHDdSzmSytSVp5pKEekpbwq5q4R25KaSy3EqESEn",
  "key18": "2wNx3ZD46mbGi3JoaGd78mJS3k3gndjNvGx6dHgp33Pc8rXuCGZipEAZSWwiSJe3GXDrkU9zUwJyzvHBkiG6jbFY",
  "key19": "hnVWcdHvG1d9FHn1HRzMUSSehke1WFg9KRBaWxmtoZPmVF1MWdnvgR6Fykigjaxx6ycDBtux8BE94Az6RKw2uaS",
  "key20": "2SBEoNfRTBcZzuC8vDGNzjHJrJNJWNR1bhxKarcASSyhmuwrwHQY5dq2ivNVT6QER71yamHusSwqJJorgYgSTpKs",
  "key21": "4WbHVBkx2X2tMTU1oZtTeLi4BS8ih5Hh7oz2DQQP9duzzoN8eET5eQvzCoDWUGm6BRQdEEzLePyYd86V7qtEXu57",
  "key22": "5wkyACewku8BFTAoQLdEqifnT8vB1hqFLyrR8Sa9YyjF9ddfpLZeBCP5cdMVgzpiBt6hdrorgvJPNn5jeKXARC3J",
  "key23": "5ZTsS2fByZsKKqBMEBaivNonvSwhqHHAmuCBsdHatHW3UiqgW17F4Jhcw5uZXsb5Hbsg34YD4eSWeAnkcwsLTHEm",
  "key24": "5yDUd1kEy6tfsBnt2ToTdMV8N6jnLv78dj5av9YH48rAYoprH8oGF9PdUgT5NBimAEEtLtuzDq2Frsk8aFjQa9hf",
  "key25": "4caquGNQniHzukG35jmv7USwcNEUkgYvwTnDNHNMp6ndVqYhGP3DbxkQJ9X5kSG32E4w5sfqGrfJ6z2JUY7wRqNE",
  "key26": "2BvogSKJicHCeiktdfD5BTgaQwerM4kH4RR7eqBg5rqhZXL3ykNGGX1LXweyveStDJGDeoc3M4HThwX3U42ziUak",
  "key27": "5aH7T7LyDeD4SqQ73AAzBmoMguQrFD9cLtb2X1m7EbrV8vC5JWL1t9Ba7XHDZSW5X4vKk4RBYeCduByLFhi95dsb",
  "key28": "5QjyfW5Y9ffgxviR7zgrEF5acKVc9DXgBhCHuvZdn9rysLr93tTbRnJNWvc9q1n8aUwf9yJM6m1cQ8VUrojAmvgy",
  "key29": "8tNQFwnmkbCUf7EvaB58jm9msticshwXWQWrMZHHcuYqTVvtri3raWHwvEGkz59G8LhgFDbZ9NEDhzCFAkkAFEa",
  "key30": "FcjYwwNmumFJbU14L5o12ezhHjuEijsfhzVb8vMJjjz7gbiGnUfjBuKSDfdEoiEWUzb2CvEriwb4hXH6CikHcQt",
  "key31": "5XYC8sVG9v6E1FJ1ewSjdancYfAnJLxeiU8yruqkVvzNfFkC8yzAtHP3Wy1yi74XAUFvS13v4AFYbUNSXRijsPin",
  "key32": "iFDAtFiA249eZcwGtJrUExCJjUT9CT5ZvbgmMJ4HzTpWWJsc7vuqoyd622WTGB6rpNBf2ZmKfrwxzzpZv162Uo8",
  "key33": "3A64EW76u41K7dXyGCKPrXSv4TSDasPYzUQ6wwRZxJGN4oHeGvMjdDHTWp1rN75iGG66UWi8w4Pys6iamZavsARV",
  "key34": "Hx5H56ZA6MuehBoTq4sZq3hykKU21r4nvNgtow4X3FECJ6axkt9wmQhawgs4WJgaEf13BcZL4m79sGS7RLPgRSW",
  "key35": "3AX1bRp8GTbozTbFSPyEHM5sVMX8mH8SmcAPHAktv1t6PxpdsGAg2njeSHr5vDdvZSEkezmkjpjz6u3MJzghxSGn",
  "key36": "5NE3UHkQrBtVqrUJNnrxh7aa44eidNdvL1fwkgMG4hEGWbmTwgDE6GGuHrFm9okmBFnUMvaHgb9DoqdNqDGMWmRv",
  "key37": "2M6x7eXgLKTzBpFci2AK65VgS3y5AJdWgHTZTXsACWpQCw7U3mHSkyU9uLZuEaqDNsF4EfKSyZSJYVAZFZM2o374",
  "key38": "5HMpurt7RN6rZoNDF3CrS4B2yDAjj8QzmzS6Vit4BU3cxZ9osZBUHLYQVZDDdnkpEXuCV7wC6KkSuNhN4Af8NfQY",
  "key39": "3EKwSzGy2f4V3gpFNnWp7hPFLjMo1DKUEHA5UYmEcQhuUKgUTZjjQZgqJC7qGgjxTZXqnYv9bWbEUBQJGXpxMrgT",
  "key40": "5u82DFuyGZ6PnWPRZFoMt6VsxXt2uhgC7pXs3SmFRXHFfXfqT8EPv3Bom5tSkDqxuxFLN6ubjQKaDVFw3v36V43s",
  "key41": "3UZ9JVV25Vnf6xc6aAYx6VHv2dozrYEwNjf3a5BNwqtR313T2o2ReAVxaG5JUEfJZGpQiV2otWpuACvkYUq7RX9w",
  "key42": "5U6dfsYXrrZz88LSMHZ6R9vRmuvG4WJ7uMsqE3DDqUAhBH7oRwzwKxYxbzEE7hnEe4fMSa7qVTWy3E6QkEsXvQMB",
  "key43": "64i7oJQjdyWXZKaqXSEV4aYzMNhnG47NgGqoWD8pShFu83VV4kAXpP1bBEX9ZMDkKVHe3kE8Mhcyw2wuvKVuQyGa",
  "key44": "4b7Tq6oAZ8iNECJ6pLCaEWTe4V39e9fV2eWmPnhgvoMmEmtHgHPsbBsiRNG51oKheAKAreT6NLGBKLz6qdmWCkCf",
  "key45": "ryEPt6aiuLCWU5vsMqcUy753twRGzX6dRj8rDqefJi7yZghD1VJgYjoiUWWNHygajjWZ7swzptRv2voR3FPmhcq",
  "key46": "2FFRjkbkShjqRzwqMkcPMZGtZJyaFyjfmt9nPmSMztzbyo4sU4zWn2kaefgegbEyzssJL6YTQosq3DdFiY2Lr7gf"
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
