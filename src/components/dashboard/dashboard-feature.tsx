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
    "LS84KfPniXMcFti6hbh4oqwTwFHtMXzV6Mzf7kEEDmGJiMHF6vpSnRiE8hdB8tB4hRhx22hQzzEAxM3vcgStCMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3he1fPUHvoCEXm4oxpuWCCGvseqZ4TbTt98xnY8DnfNwNyxrK9eyi9XTz4xGj7h3PpJZs7mEQ72qodFPxtbXw9Xa",
  "key1": "DRnQmTrQT4iox8gGHFee2nRacRcbL8gC8EQMNgWDHozaWAAjJWyiuPT5JjWZVs2dJHN5y4wFZCb2uCuFDCVgZPb",
  "key2": "2LH6ht6Aau1bmtd6brrCamQ9myZUMxCbhKYLR4aC6Bp4c1PvGR4gAm3DMK5M51djvvoAYPppEpp1gi8mHP4WaazQ",
  "key3": "3DgAbrZAuB6HWHnpfwHyXWYAUd9bsMNEWq6jNevwQ8AXzRoaM4dhwKcB2JqXCBPjdXwyib9kn8QqryoAge8QCs9y",
  "key4": "5XbPe2YZj7wuejPR5A3PCmSoiWM24c9Vskx6ymVLGQZpa3f1mWCXBdmGLm7ubuu1Wiy3ZveT7iTW2CAHYWKHMtfe",
  "key5": "2GXygw14zTP736YTVWw8ujTSp62kp2iqWD1PxmifZ9HGMB2auiecZpzfwB4HVcZrw5hXyxgMTs2JpwQ7JTXTrUUD",
  "key6": "n8BknwxWGLCYFgrcdRJH96o5g23zTizxhLP6FmNHo9vGkNLWSzDRy6ApTJucZZZCzQoi7Rkkt8RMMLGjuqS7sfw",
  "key7": "3tRMXbdc1zBvwxD8bp4jWzZRedGCK2REwYqTNrmbc3pQ7u4kgSp7tarpeYkuWGqvsxqnurnZoTiyoMzFcJJ26Kqp",
  "key8": "4zn5veCKH9NhGhdsPTY4ZnBkCfHosF2LkjGU8fmoXBdcBVnHzYktbp8X5zQJQGnXCgpqkaKtpXxEaGucjoLJse8X",
  "key9": "vSuiWVo7Q8BgjWwzgWYVY2G7cikLwswrHFiVtPjgdZGruPiujjWquYZYeu883T9nWVYRKc6hec4P2gM9dV9nCVp",
  "key10": "5aKmxWazGNzJ2WHBZWkxxw2rupuPZ6nnrjjg9TU2ogR9s5PuvqLB7bXsuCgab4gJStsMSy5wdtpcUfe5KBu8NgDf",
  "key11": "2enifpiHkkaxAZ4qhHpAfrXAfeFsDGPxnfUKLD93ibfh7BSX57YHvW2NabpdgZiuxTUCh85zuBwUcrmRMZfhGsVM",
  "key12": "57ZFSC7DRrGnPrKTX9yXK1J99mXU53rEQ25xaZKKvuhpPnWbJieb8EYnPR2rD1yuWiJsbx7Pz5KdtpyHHqKr16x1",
  "key13": "5zrALPH8cAKNdgV2R9tpzoGCApaGy7NZ61RbfE94URd44Wwbm87Ym2knLpTtMwZhM1Vbq6AMBEkm3uP4q8QSDgK2",
  "key14": "1YQq88zsKhf8BMYDhtAnbzpJYYpA9UcU1nFGqgnVT7c9e9jF9txLJzfxfF9K9cr3A1wFzUTNmWTfc6qdAdtw77b",
  "key15": "5LHeiUbQ9g9eGLsnHgKj9zZtfddMXwDcTiY9xNkJK69ebqXqVGxox6JVguFBbFCsfYMgETowdnXrP2nfyp9yar2U",
  "key16": "2QWunc5zSHqfSQcn75yZqmxZEu8RskDR81K8cbGDej1EJ4mtXyjfycH7shmWvm1LUrStGgmMevtKRcEGwWL9ANjL",
  "key17": "i7rnjSSW2cKwheR1J9JhEzVvn9MUorLV9RG8jtPyuyX52cnj8SqrmZx4aiHe5yWxAg8qcTbpaTyHGZHZ2jLMKBC",
  "key18": "5h79WYrk93CFbA1LGefst8RUV377hAZjT4zHMo7hkm25nG3PFPWaza1irJAenBr7YAvv357kV8P9iAuk9USu5pXZ",
  "key19": "2hCKT2S2zAYZ6m7Rs94fQAb6McDggL2y6ergQ53d15zJuFfFYzrMnqFBjMwyRAYM7TDDzgrpXVCV5jVGirg2TEYr",
  "key20": "64jXhM1bHFfEXdwsk2SWSh3FMxScThL8GSMDAFiv5i6HnLvmoubJy4sQfokMK9uEpu6wKDFgwMJEf7gwo99oGS5i",
  "key21": "5g2WSfLfe44SDrGKAtYR5LuFqmKLE5X7M43G6aN485u7C7rGAApZJbWNe558BEN8hRa5gJAuzvPXmeiWHrFCdNBD",
  "key22": "hV8LhnUwtGeHgi5TZuC31G391GSVDyvY5CcEwFxw3PxiU7NXmJUtJjGimuyzdcANCb6P4s1jGmhLCffkJm1NVCf",
  "key23": "67nHbQHr4wYw5r6VZZF3TgeSiKstjRJQgHGVcG19vBwVSrJQudzbUr8yXsG25JuvgNNAZpgQupDuZpZFejAGi5WT",
  "key24": "4f288pt2E2eZWUVrWvUzUzXqem4LeRjMz4envsZ3WPzctyJzDPPKaxNTDYHSsSJYW5RPvH9MZH5BQ8bD4ycnwbsq",
  "key25": "MfaNctNYmgnGsTENqTkh8ViyKVhLdA9dtK3AL6vGAqLXff5oUeYRxi8wqGWPcs36oZZL5oHSuHgAnDtkbBD7ngw",
  "key26": "5XVntAVY1Sswokim5W1cFNDJ7cfVsZg8UdErxeq2yqhfcTXWK35EWrPDP6YVGETbcRUFjynSFx1wA2XgXvvXkxFZ",
  "key27": "5GCYJHvFxyx59rA2GcXYUD1rsQ3FhMMpRFND9XDpiV6LFdLg1YNqatFj7MFuRHJ2cYbqSu84BmRrh2SdBzhXTybb",
  "key28": "5jcrNa2jfUAJsWZ8dvSmYh5K96PeNQ3ecVsn58rurZBHFMPCzYUHeTsyHZ7RV77WTSnaGiWefJauDDVfW8EKsqKj",
  "key29": "4hkchLHtsCgfYvTyNNh19BCRhdv271WdSsHAFHwaXXNgAZNxVQUh2roxqZ8kVw63nuPyAiLmL7VUZWPswYhwMqpu",
  "key30": "4eVw1NAqMhJpWWUMfPXuQncx8svASoR39VZLau3Sxdva1HfxoWKRAx5XrE7FNmF3J1GzFsPGHU81mR6udVQUwTDT",
  "key31": "2gDck7TBif14CSrkxmeghL3yxn27zqBr37FvHiGXYCSj2YonXKs1AybsfzF39NDTekQMnDLhWU1R8Mi5vqm5kcQX",
  "key32": "3bpP6ogkWHQVyGMyrgUJrVzYUz5jEVWN6boN4S7R1wSURkQbzuW8rbYWSmrUhZ6xCpfT8gfeBw1n4HAmWjRdoKMW",
  "key33": "3BbxDwr8uwHh1mKnBjSMDALphUbtHp8qhgpHpmtRGb278Z1DEqUWHdb6dAUgAFNKTJvAbu2VsfCpg6UKXHBD6gAg",
  "key34": "2VatmTDChPVrzQ2G5Xb6AknHHhnEr8GYkXSjxYKKdFV4eXMkyhPu7UpToP4qSxFbaURF9EgRtKTh2tSdqg8EjYih"
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
