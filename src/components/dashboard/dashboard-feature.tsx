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
    "5ErEq5XJirX8gQBjWgVgeqNh56QiuzMHZAQqMfbBAGTJLHDhCh3XcNk427wvctzsEZAvJE1eok3Vh7Ld4BCPUNQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bqgCYrG982nHEASuFwetbdshDMFpZGqQo3abGfbsKstEn9yzkapctrnjB863PhpjU63JT4QBq3LenYJr8qQAYYB",
  "key1": "5wEf7nHu2SvZSZfKwQGCepBXxK5YgZWpNydWhbPWEi3hEAZ9GtunxoDfePz2sX5rm4bWsYfR4u65YNuEMq8jzwUU",
  "key2": "5DFyUid2Nr9KicXcTr4F6XxpQ57EiD4Yq84PnPnFME1n7PSv5QVSyCSBcivYNqK9A6xnjXrBaJpnS9YierXMXUyu",
  "key3": "3CLcs8prKd5DLtBxDDbzHtg7Aa5iSSYi3JbtBva3JQpDSvCpdYAPcNimkmTiGVM2FsjTFpBVP9LH71hmjjrNzvQV",
  "key4": "5RX6veouLGbNCxvCnmxS3JjuJQLSkjHgeQJ7ZqRmMoDuZZbghBmpuGj4YavitHNxeMNWVTV1mi95QhbKhrCHeHN3",
  "key5": "3cpj9rHyEgHu5vgJM3NUkoLgkU9qb9Dc9JHzKufGMa8ZzvefHy7xnaZGePfLHZ4Rvb9wwzsZyaWPTJxBMWzi6d2X",
  "key6": "wo37VwKbHpLmkoqFctdJeBW2yESzkrJStCGgRKYFf87vnWa5WVosaKzX1LTr7RvqGwKjRwVx24RwKResJJeDm1X",
  "key7": "rHWM2FoskXyp1ehpRhgz9f6qLqP3yAQ5atzLNHkhCrbjxW6yDj3HgNu8C8redS8qju1rrByeHQdFUBuVByJGVyU",
  "key8": "4yNtMTJ6rK3xjFjMSCt6h6g3ataTakLpdWbtVptK4C6wGaZyMBZMkyTraw5NBVqPsEZSXGTDkXwpCCCpSzKCfDw8",
  "key9": "27TUJALyAUC8qsqD5fwJm7y6ZpoiF7A8bQh54fmvQvCB17QGa7g1JddyLnvsY5idLHdzKBbtN1XS5aS6awfQvfxW",
  "key10": "4jDGeyMkhMN4gxuzAbdBtN6nxES8KbX8F8Zsqo1HfywqWcVh3RTzjTpQXAQdyJYB758Ny1MxmogqmTZNBoA6MQoe",
  "key11": "Ai5ysDEAi8x864W7CAbyxk2ZAnhp8m1GDUkvMAGvnN3NRXj17BG33KLnznU68szNyfy2pXJU9cZuhFbNsyxBtoa",
  "key12": "wytSNajLzkLfSp1mfCia23j352gsni6YhawaASudSp9qaT7yo6ckg17Hu8xf96MckqFrKWANEfeSLxaSXRLVhSk",
  "key13": "exxaEVrx8GX7M6iABgTHS1wYJ7xmL1dyfEZJH96Bifo2AaVrcZpdaFy81wQtmNkE1f2YCgLwsncAzLkGHgEeojc",
  "key14": "36mLuFNxeskR2ZsCxvG1bVfxzC5RTnjLpDpAHYgsvqkR5ZHJkPAZFNq1ZxaYuUore8jqNGGRsZ1pPDMaZDTMR4NT",
  "key15": "45xrnhHS74hvoPDVNM1re3kfZoAAo3XydATewWM9dczBdN9fFwbC6n5JMU3vegoqiEyQAh11SjJ6GM9DyKzTE1NJ",
  "key16": "4nAYghaeoNpiV3Gn9ATkA2zkHHNtCUhV6hDxRxXMUykYgWJRvWSbXEiLhHcwneoaoMtDWFoPBMEkTXBdWasTYPoL",
  "key17": "2TtTRQ7dLp3zUn7M7PiRtq13DVsbqjBtgxAu2CdcDd9Nevyyit1H8cXzdcdCzhKETEgPEi3G1VkuuSY8WBYhZSJe",
  "key18": "2HbJLL9MZ6CBJcKrdZ3P8nYxfG2dS44UL8R6cRmPopAVDBQ349EHVwctHovLtAfoh3DvocMBWh7iPbgyZ6UUNnvw",
  "key19": "2kPTAXsRTWnwqaArGyQQFvCAJWzN8fLv6z6CFPQQuYLDDW2eoA71uNHZgMTykMUU25Brktk9SjfgutTXHoBXZ7sY",
  "key20": "4iRK2d9aXtjptSuWykCxUSB6KQSvUEpFB2uz1UHsaZRAzJQcP8LjyC65LyeogqdTzDDnm7MaiQkFdz65o4iDQVus",
  "key21": "61bFdGgQ5SexmotY4Bm29uoPqQoqsMuZCzcvo3DeyuheHxGuoQCiineyQ4wigvKEwrfakiTdHjuqQGk4XEPyRgLL",
  "key22": "3qJTXaBxUjwoRdLXU1B67xi6wyRJSNgBmSVeoDbqnkzNwsJdr6g94GBFQM4ZHXSum976CbsD5wwsBJHB9WoExd9B",
  "key23": "5yFDkFe9Cpfik7dqFTLYUDRWmkhV3hkGfzYhMBo9auXhygDP83JGp926tpcMALzggNUuSxX8YUHmuDpY1WPGpKyB",
  "key24": "3KNFLoymAeZxJwX8aqJCdw3MWgrbXqewQZpAs2JYY9ouKAVYKwa3n3NjYCvFDYwmx4gdcDHLDdyCQRNE9MxoR66y",
  "key25": "2d8J6aESuKenjyX4SEhgPztiqv9RrpQzc1Bfy8fstQdn9oka3CCsB7xxG6GcjzwzyANWbA69z9PBUs454tHZY1Jj",
  "key26": "26XXUUkfFwmbGPSHxZh7q3QLYqhCHWHFiF7XHJ9h4Nhr1UBd5gpzs4FKHS3NtNtdj1MbkzkAehSSQGVp3KEdZzy4",
  "key27": "JVaGPDo4KQP5CudGBt83rugi7vENrKFkmdmRtVTNedU4L5NeXTqG4pMbBmACWwYggTpcgtx3xLtuw1ugYyyQdYU",
  "key28": "Y9Mg2xCbyKhdX2dHY5EUAqkrVfns1peyKK1GNP7SPcihayGp7CA6MCrXdELCzdcW4sCQXQWCDzye5GkpwJ4KJEV",
  "key29": "2Z4uHMdN8AVfZfPDPHX4JRS23z3uLtYWirdZmb7LFkVdWoa5TW8TwfFDwikuuG2A2mD3xPQJXUxkhKnVCqAiYXW2",
  "key30": "4NwCKz8yXDG4f1DkJ3tTXR2zYKfuw95Y61tSUS5iDZzNiJLS2HUECt5kgWziHjeoNBUy8htcP5kpGkiaptTxaooi",
  "key31": "34kqEFAgyEUAzesi5SbphKwYKhuqpe51p4TMv6NmkfeUeQrWggueRtX6w2RfTnXFEUPQGaJAFUVNrncAcgXXVkq4",
  "key32": "4BEGKQMpSAeRA7pwHKNaGunCzS4ZAn4t1a3HVwtusCc2PvYDVykgkEKyq9ixKnp8Ehap2dfTNBH97zfeUFL2Ve5m",
  "key33": "5Yavg8S9jdfsraFTScyJ32awh7KnxuzaW7PgjR1GukQdvuUrgH3Zmt8YBDpqhrVwa2CzJbXQFeq4djG1tSJz2TZk",
  "key34": "2rGkEB2ia4fZgFAdkUom7s1qnNgsgfAHrvXFK4sffpfZ8qtsCjcN1L2jEK68rzRLxZo7WyjPeNUu5DbJzRbjZVsk",
  "key35": "3t5m45rbLSo3oCPaRRXx9YU5hQwarMUJCGJecLoFKpUR5DTNd4APKCDA6RDQKtgddMRHYJucGoMHgeSbLFFP3wsU",
  "key36": "2xbPv7pzdsxp4wz349Agqp383YZQieXe9XAJVocoyCiUKQjR28RVbBBXfGmQX1tdque7CzpxzPVsAKyeR1oERk1F",
  "key37": "3Bo5eoGhrf2jPax2F6kkZiRsBRdMiTr9j3Swx65hXJN1r5N3BdErGGxyWfmN9Bih561adKH2qfXmNA3bjhwTgPgT",
  "key38": "4AK9aWcmK7T5DtmZvmT2QLiyQdkuQPi5RTQFbjyBbVpZNJCVVLjrsNEZhngThPHjbciwXHMvva2z8ZY3AY5HzSNZ",
  "key39": "5XF7awvgsk2QyXxXzsTCSNMyKvZ7jSqY4oAoTBH76MifRZ31ThVccihyJbtMsmPMSsBuxckJfHACtXbpASqybo5f",
  "key40": "5E6S7wCfLgg88NtcrW7vZu57b1q7CBDxo8dtwyJmq8N8JX7a1PrU1pATLnbFMfkkYjsAcTQPQmLT5BNQNA55dypR",
  "key41": "3iEnGGaF9FF55Eo6LAckKHNd1pQ6eh9BrsUhxCvDGA89VKdMwFU9AEsCtXtXJGwoCa1Nh2LhY9m7P9YMZqa1Uw5E",
  "key42": "23ESoEV1eXbPg3UMMZSBjojFAmMeahCCBiJHcoRRdTZEDGgLEUv1KuQcZHT9r5HwR5rDFbfrmycKXMaSdEv1dGgb",
  "key43": "4oSvX1SDQL3yiWSH6HhfMQ9iAGbmb27CC6nm11pJXSpTf7qNbreo4mKdabrABhN6P5tbb3BXYZcQfhPkFCoFmJe8",
  "key44": "2L39tE8rtDkkfQj8Lzh2i9AeC2ufheU51Utrjpueg74mgboyqgCN7rAQhFaNERZ8dRo3fJSU3PMSTXhm4j7xMwEu"
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
