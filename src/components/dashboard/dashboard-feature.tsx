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
    "2EqVRRZ1TcQyQ7rHZteK37ain7rqZx52i7ZdetP9wiVeALEj1ZBsAMYkxuYURQm2Wrg1TKSTz9GrEeWQZeGTtiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rcyWent2NfNZHuh7TBqQM37o1k2NMbEse96t7CMVrKWKvbNVW6Q8vkVUa9r7ghi1QuqQvm5bA4e4rJsKZavoT8v",
  "key1": "2vj2seCr4LRRbPECDVoDeu2hV4CYZgfoyWiavVQ4KZTuUpBkneJejuC3EyekJfzvGGbbEy1R2CdCMMB1rKvkS2uT",
  "key2": "hJrTAZrXp6xewNPu2Zg6aisVq4C5qMkukqzx6FFMwHWjgyx57F4LcVCEPLfWa3zr6m4F4nwsQT22pz2rxJSyGiU",
  "key3": "4A7tBkYuqZ2eWo9uErStPAcNHj1spPomYT8hevGpQTBMXgcU8QKVqxnh39qaN7THaPf2BQ5oFuhLt18o7PT8BDu9",
  "key4": "2fXAZgYpZLFi9iTMdWsyEd26TtwrjDTJ42x91RsuG5Wb2NyZDANRvGexAQAbTtJWwY1UKuBkqDyBFjzChGUZinTf",
  "key5": "dNELtXnfkt4wGpF4nfxGaRcj8sUSq6KASHicRNvJuUjQCXbRvnCrZht3C5cgnCrVPhSwQg2XDCVQ2tA6cDVj617",
  "key6": "L7E6sqw3r1FHtBcY3TK8dvFJaaZuWmdH5dYu4YDx7wcxtr4Fe8n5fsbBgSYDRt8G1pJ5xdKe3nkbkyFbLriaYan",
  "key7": "5RZ2Kkpz3SRzdB5PnTmuQAxGvPsfPZn3wzkJyRUjMjSZ8vtFZczbsZrEmaGZLtY5kYjmkPcfMk2K2ThUKuR81ZYn",
  "key8": "4DRN5UxD9CpyMAcJMPcWTQ9qB8aZVmDSHCTibbdSoq9TdgLwqCQhdj1CvHVDnZQQ83puCckVfJXzcNYoqEHw7tXh",
  "key9": "4iFfifGsq1CtY9xMeNCyFLaY3Mp3x5YAyA4vX5Dxi8UGPyggGeB1ifFCfKfYvheT2TZRq2jmvhW913MmHcWC5b9V",
  "key10": "3c27zvdUSx2oNwZgG3HKVYk8ASWyfrXzWoMXXzrryo2eojiXqXWB96fevFxNTXyJ2AJyvheFGJsP73NpHkhAbf94",
  "key11": "2u183TUwoZP8qKWo47rXrohD8ePKgXbY7He94iPXNisfA98caZ6ypfHdjDjguqHUBEUrS1QmDv9dNdrW8eCHZb9T",
  "key12": "1a7f37a7JWGSkk8yikiTWo6UJj4onuuepWReBErmXjicBDdSgRYUfmQtM9sFFuQYh336EhWHoHSVpt7r5UWNHiD",
  "key13": "2YU87nrte7nEFV29NLjg6m2t6tMt5f1jSYCGy3rHsjneGfmRGN4kcBefcXP8aGaBbe8AbSrgBmDemaouBUdJf5u6",
  "key14": "2vPQnTZjq2Ziiszja2gA4h2mQinW1qsSC4PyYC38gz2D3uxdZ4KeJtmpBerPXeufo7cP5UcK5oDsiWs9566gE7kT",
  "key15": "abKnKAHqy6DMq5atc8ZAgW7vbuhgkmDVJ12dNwQbL9n99ZpVruBkTLMnMLRhv161F5FWfxjgBawAEtvdbpqo9nx",
  "key16": "43Z6wkWTLJvaYkuRH63X2FHZDKe1QrzSZYwspriWyeyMD2eE27uydL6wGQ2ohWB3Kgm9paYtexiVA1ajhxFBcftu",
  "key17": "3QLdbZAWDjQ9QEuLBqJcMjJxjcjXaWjKQzrBqPx1iANBDRi355seXr9mUHTffKVm5CS6DecngqZ73bAbjVcYkXdY",
  "key18": "57FtRdfKE1R6abZrgoYj2ShJab29XkYwqg3PRVeRxJCkyzEXQ867XLQhictjA8XiniBKxz82PQQSrgZVqyTDA1ja",
  "key19": "45ky9G2qBeGCtc7tu22wWaDZXburEn6tQ5wWkApQui2KhdnYwBbPy2E3u1G8W5qkReSm6p7Xuh85NSMswcgua5yB",
  "key20": "5k5ZVjyJNcCajFJqgTMSLfDT1rkCWsXpqRaj47PszPC1o3wWioub8ZerQbKe4AxZSYaQJongPYtmuCz4dnkmnqBF",
  "key21": "4eqmZcSbHPLpeGAfqejNHy23eVa8X4mMAovNxuRAP6ESRDK767xnoJoJ8n4aKeZHATD7Rgziv8CN8fDMgDMpDLZA",
  "key22": "3MBXNKEbmCTtLQ4GsSTyyTvShFgHZXXcLiA9HmHzhu5A7nC534h9VGJ3WvEgZL2XzGpXiXyNAnAYNNvfY7USND5a",
  "key23": "WxXKyd2bx77oDqoTJ8ygUY3UGVk7ZD5E11TH9XcRRjv5FqEYTxbGxfZudTpVyVXdjhhBtEFfNdyPcB5TtPRi9Z3",
  "key24": "3azpdHrieLLBAD44dWvrUUhBVzeV9As47cA2NVLsVxWHZzdAkgHvtG6BsrpMcxxPZS86aLiXNYn3BomjCM1pJZxV",
  "key25": "3Q333wMpNmjJ6wzSD9hTujUjrGCz4RrYfRs8pTsYNQKQ9QSksPTAM9oRtoktKtkCnH7bN6E7Cecxy3woo1382jEm",
  "key26": "wemtxWGPnGN9mjQ8gNVpVPJiL5tY1x5xBb9KauMfnwZnhTxW2qC6z3PjmoudXcBg9hQvHLH9BrDDBS4WJ2Ajkcy",
  "key27": "5iweU83XvCkZzovdxGS3icXiVLdpXmwWQEXkhJX24TokRG2omG9Z9jezSSPUTrKQA6C6A5BdPeTk1iMKP5rLTN8N",
  "key28": "5Sfhya2L8eNsEt8BqknveVdRNSwiX1cYBjWHsBWWNxAeVDBQXQyaBVYt3KkTtNXHhPiD6nfffXpsDKX7mh3vgcXC",
  "key29": "6MWQz3iZQWQ8jYvyDeZUbYWvqdZZx9BzaDCAn6TnTDGkLb4a1oUE3M6WVS78wx4TaXDYnq98SMo9ZWmofdntKkN",
  "key30": "kJpsfz2NzkEumgT6EnuBSq623tfJyGJwp1m7dzRiTCUfvcYSJ3fjCFQPFRWVWX4K3859rUytSUCG7Js9Xq8n5Ga",
  "key31": "2JtCuMcEp1Hj7dKJrCzh2CESC8354H9WsxusisKNhoCYBkKTZdhaLsm9Vz4QDk2AUHYiGVqto6u8LEgiRArsT1Lv",
  "key32": "NgiZc2ou6UGeNB2d4JkuE3D3cDsj8vi2NKNqUn4VCkzf3wmfeALR79LfZPnj8FVeczc7wtqp8XoPeeWhkAzgDxJ",
  "key33": "5QkKL8RnEe3kJnk2WvbS4MecLXNVUnar55Y5pEiyDtCyfMPN3KyYMSN5hKogwygdek7Y7jxBbL8yiTybQcDfiZbK",
  "key34": "5urwWFkH9GmipHTvqmQkFaKLBt5edrnbhMUXioizkhSatpp32CY5sM7GHCbWrEy2n6FXTZyhEz7Lhe4WV1npAobF"
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
