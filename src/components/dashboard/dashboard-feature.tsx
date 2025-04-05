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
    "4Aqpj2weakXsx2AjtCHnxmGAcmUVUgqyXhUkuKKwuMkANV2JUAJc5MoL71RrtnBv1p9DEdUVNAmvz41Wn7Jiiyfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DAL1cGmux8mDv2KEdyK5JMxE4U22HCS8hYw6MaTv7WbN3RTjC5M9qJt1KugCDjh7kBw5Nww7tdwGiY6DrGr6diF",
  "key1": "4Hp2fK26QHjGAoGcPfkhBGNnXYzBYaZikvm9GzBNoURLtAq8H1GibU19tXgVmT6SW6P3zsnX6ZznAd8oxFDQt9qT",
  "key2": "5tSrLttyS7LFx4PMW1WzeW3WmFJvq2Kq9CvpJzNiXqsuAiom4ZrtPuvJFfn3TJ64RdXGsD2BN8GdJ4mufQ4QeoxF",
  "key3": "2o7pAXnLn97ySTuEUtfvEPQKDAUvQSr1paPYVcfxUkJ6EpV5XbM9f6xNB7rrdF6z9UAAw3rcvn7tPMzbKzWfRFJr",
  "key4": "4ZxX1a6ZWaoUivGrxjgas5X478VtgGSATv51cAzk2NmiWuddq5nV45VopBi5MAvdzqXB6JT8Cwrm4ci3uoRUqW4s",
  "key5": "5vRfdbEMXeXi9rALkUQhoaE19f6YfkU6YiVkcV4wwajB5uVnr9KnAjJboXEzXC4TPk7BHBwwwrZc95aZxLPwXuv8",
  "key6": "4FifpjrYx1z1X2pcBWpqRBX51ich9FjyTEh8a3Nwvg7ZCeyojqpGCucSTWJ3kzzaNpWS7hfEjXgP8J2U4VQDA6J5",
  "key7": "2C9J12DaeSenPw9z75pFjhFHoSSAhLYRSFjvV2TcTkMNput9zNtLpnM19gpvSjRub3ckQ7xmBv6WKGFri11NoEz6",
  "key8": "2YPZCudGaFENMSB47ejcvtT2pnmetjUsauj2PuugbzEvznBkjuNHTGsHef3VfaVUwG1EDqJx5rK8rtADj6WqVa7G",
  "key9": "3fvC6q8TzxtDyFufdtNCKMD5WPm2D8BUjgTzFUseMNrxnzWE2vZ9o4uH2tYQwhWvdpDfd5WzFuiYagZHA5NzXR2N",
  "key10": "46LPhptxhokY6aVjVH445NNXCc2U2oySLAp3nQFNdUiHgUeKnVzDFgRu7Q67AFCXH4kHMqmXv337eYcpUQWNfxma",
  "key11": "4WeecHd7YRLKAHhjxWi7FxEzhBr6q249XFfECA46GjqPc9dmH8iHwmGV7GowUxgCJHAUX4F5NfVxuyHmEEd9arkw",
  "key12": "yqbqdhSgZCQGBXKXLuopCrzq4HctAQ3vqQworwm1cnWFYEbJ8Jkz1WpwesZvCWtoYZTh53HMjHEJGgW4ZDydkBK",
  "key13": "3Gfh9W8Vm9bvE8Z6vxfa1QbvbvwvsM8VnfSa9p8XZ8CMcefzPrUnAW63Zpo84uHK7Qjs6yVwvVXv4RD2z9Biuc19",
  "key14": "WqXR2pn1X9KvWxWQfFa7dbXqTSm6BNqpN78NUt6w6U5pT9yvCVHf1GNfUDprWmNPGJGpRvvt61dkAFMSHhVT6xD",
  "key15": "3yjHg7nnkdCV3aDspt3NgmcV1KmDy4MGJ8SN76kCWbru2FsKJszPtRqiAfwetJBccmU1Tb7GJbpsDmyDi7fhwurF",
  "key16": "3XcUd35aHPwBUBPr4Z21SkXAXU4N926heKwKCsCPh7AvbYMtcGQXJ7s8r3Ge8T8yqVrVCVbW6zBYZ3sHWTdVp2pa",
  "key17": "3Mgg57LqyvfQKDWMQywsSPXtrBGpkJyiMy68iiFbBpWnA7jJBzUm8KdSmQA9ZUuoRdU8QciFsEEeUAm9APL3aX8u",
  "key18": "2Ar35UZG1Yufssungmk8hpe6T8GbWEzG3Aecy6GqQj6DNVTT3iDzPKqeXzyD1onu4EBSyDcp84cd6Y3JbLEYvvK9",
  "key19": "512JYDymzU7rd2Vid7grB27FMmT9ibgL8KyEcBAa22yi4pjbhHMKbqDPeL4chssJS6XXndE912C1dcAxwP4YseWP",
  "key20": "2CU5zT31BsWBzkN24MkErrtLYzCAy4i9e16w9At5GQFfpD5913Qyq9H96dPTsRcav6rDocWUGpUcNyYeo2iVpZiG",
  "key21": "4aoYgpz3ZtQbqjw5ydmtZnVZto6inEj7XBVYypXAXswRbp9evuAxvkN4WF4oUmqtt9vQpBGzvWXP9kcsya3Smei6",
  "key22": "ERU7RiGCPnjkLH51JZLqLpWya6TkXDkrJrhDqioMRzpThRd6petUz55KeTpSeyowuat66S3i5UC1uBpvVjij8SZ",
  "key23": "43e92JKqczmYkfQsFZ3YgcUt84jSDEYMK37JEK9Sdu5KmRNaBXAXyNTg2E3qpXhsrJndoPfAa2YhAw4pSm8z8TWd",
  "key24": "4MU6jVP7SXNQ1uu3hCLq6SWaQu8KTjoj61AzqBunW2pfyQJoGYoZJWv5F8giBnhzjoohnz4f1sYevGCpR7B5iJzu",
  "key25": "2A9D5FoVxq5dARmgmHfSkh6edpeNLDmNYFTCo6MEyUjTgSupRsVqDwv8ERU677ebYDREKUaL5fMZC1WN2Wpe3DNW",
  "key26": "3FX4jX9ZRStyD87mExWtiGQZqaoh3byrBar8WrFQdMoHoZhBuVM9fwDyucVDiNbEeppUDUx8ExWmuKG6n9kHuoD4",
  "key27": "5kX5BCDpMcWbw714c9hyDaRqEcNXyzTvybXnaDJhQh89zsgJQEuSgfQZe9JLbndVke2ESsSA1FHqBTG2v8SKaDdT",
  "key28": "4w79sre6cNkxArqyG7MjzkbKz9hDU9ULGz9NLKHNbchbZDx8W76H244LT7v6VkipToSy6KWxuc3ChXXoeqyF1wKK",
  "key29": "2uwHNZXVzow99pStSm2LFoSJx675jbjYf9w6fiXptDFzXrHCfi1Fbscn3PpUCkBVZzspN2hG1JijGfhXi1RzjmVy",
  "key30": "nZaabDWimdz2SzYaJMa1MyT8hnVCfB4rZ4LHoJn4sXWbqVuJ3RKwddC697BK7BZ5D2ui6N3vqWMY2b189T8EuKb",
  "key31": "cu4m1urQfqYjGXS2MB5rjWFPwNyTRQHVSUgcX2Z4ApPJXiV3M9zp2GeUGXFGZ2Awrduqk6s7kd3hi7Yxb7bCH8p",
  "key32": "3iyqYwD7VMt8S4nD4upRDtdxgWXuFKjC27QmBJLATN6YPbY9CF5kke7Lvgw2Bva14imXDj7yfVTGfAJ6pQbGtajw",
  "key33": "3Xq3yq9VMQMQcbDQgkJWr1M1s3LbnYZsQAGuvwZZCyMYCsNXWPa1VyHn5rEK97K5DGP5jbRm5pkxxYLsbPLzhWwg",
  "key34": "BKpe1dUMrMibJ5e4hLWkCVmJFSoVUZqRSAvNE5Kah65FbX5aABPKwBCQCVyyxm6biqLVTcVT7KPn8V15RkBaE5c",
  "key35": "3DxC6AWhXa6PnfE44WYweE3hTuMT39wUyu6qijafNmKJkkJK4vLwoxqP81WMozWa9iJZ5ubE3WaayKRVRTHjh9E2",
  "key36": "ndMx9bKJkKjKP361ERet4dMKD4eh54eBeK77YrFHoNAzPcPDeuGCmj8wDchrGo4zBkqiJjFZ43FVjF3qfaFKjbh",
  "key37": "5r9GfEJvzkfqeLnH1fpJLbLjhqe4Q2M4fs2oiJ8SSFCJq8ev6nBNEYe1sLzFY8nnzHFRjBjGdeL67usvj9UU9VXn",
  "key38": "4RdWb8egx5yJ9dQ9hRuVARXEe2Po2hnzWnF4KG8HP1Efd3t92L6uhw9dNkm9nKy7MwR5ZgCrT3X2CsruM5NQJbQZ"
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
