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
    "DxYagP8B1k7oaLVzRpfjQXjnbQrQRjhozbojh44tPa6DuCLzJr4nAMoMByXZfoBvKFCMJMYVRuJ5k6L1DUhVnzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YFpcPJeHqX6HzNzZGbBoUHKyQHbWMhN7QgtUfTjQBTRxdabUgVBB2Z6iXpgh9WKeCk2jbATUaJywHFmvQFLgr6M",
  "key1": "wPvkhiG6aAkcuT6mpUNYcCf2bXK4d3XJ4DhiyaVrNDNbCuCyUGomkD9j54QBXdrXfX5szdsXRdCJYjda2wFCMjS",
  "key2": "2bTSxvVhuUdN2qeFisXFPQAJuBUnSwUFMxu1FmWcmDj79WFxpnxsRWmJUp8vsNuAGvocxsq11mA3mZyD7UPsJy8b",
  "key3": "rM8QgSyZths49SbfJ6aY7NpYDXENLi6bnT9ekaim79fTHFYXmD2xcaE8mzgYNsMDynZNZEmYfDCBM6oNb5PXQXp",
  "key4": "4rFxc123EKPuEKa4LJ2xqDYPPxqrNoYoxv6eN9qoACq7UPW42VVA6ey5VVywShbAC3cDVjQFzvZ2Y4QaWpiCamiq",
  "key5": "5dBESTn6Am4v4LwbT1j8AjmQPa8BBLYx4Yu11NDkjTqd98Hrk8yc2WSfpT22iVzcyDvpE73oufMHTkXyrisWdnXu",
  "key6": "49eQKPdEGveuY2wQL8PyWxd6bs5ibFJuG6tUZwJb1RPZZ3P8MmMqGwWSUT7q9hnWaPzPQC8J9e4gyZzysWkDgNWo",
  "key7": "2vqBcefy55HED4AhqtsFxpuFXhMzqzxxzrs8WmSidXKykjFJFz3s7DJV1iAb55AyABPyYppPPCtt7K6kq7zXQWAH",
  "key8": "vcFL1hMDaaWvuffo7ubzUNoBzRcKD4s2bGw8LhS2kgMV3xyFUSf2Zn1avu8ayDXy5anVBiTgYRuYw6pRuDUD52w",
  "key9": "5N7y1g8HcsvQY4pGrxvkm4b6ajAQFP1Lj6wwVCmoBYKz4hWv4gDkyne1yH8u8xnrWN5V97e1TiZY3rGQa86YrrpA",
  "key10": "65SayPcdwfoeYFRUxZzQXT1WEMe26DwUJk9jBFj2TTRiB6pU7CrZdidU8JPNmYAyWsG5tF1BvXKfjF6ahAsHxXZJ",
  "key11": "juVqKrUTg8PEdUD8Bwe3zjnDBWvBSBRNCaiBX5pfShuhU3RsroqdRdndkXhMtowoUqP1eybQ7ZWCz1ZVm8ogWnj",
  "key12": "24L86raqynwmJhhcmtCUtNhBextqh49UFtAk87U58iPSeRUU8Qfw3Q4hsFAG6kBjDcde53WWrjPedurAXjwbwWaE",
  "key13": "4vNnbmiZUat47EeZH37sDPHprcYKf7QvnPHgoHwNdaaGvt1yUAPSu6gD3cnDQmNv7n4MD4LwP2fN9Fwi48ZcLrte",
  "key14": "3HZMxgJddMeZTG9tPDoWEdRptxc3adkQRJzJhi3fKAonTfjMmnKW4FfZZg8mPbEuRwMXhh38oRMDBcaeRLRyt7fb",
  "key15": "2WirFUfwWh99H9sGMEXrPqW4WPvprzUrSYhNdyxyBq1pWdUHpks9uQiLK4sk5QjrdwWeEp5yhdvrHcCjgGpfHDkj",
  "key16": "2uiHBu47YiCaGEW2AaPizM4qzSmsNwoMnJ5PYA2kmcU76XUw43smvzGf3stbVi5uA4zTCrDnGHzXjTy82w14o8d6",
  "key17": "5CFv5SNDu3VXYFRUTNP53Yzx1drb9rLe1rqNrx7tcjyKpi1bmXNsBiECMH8sbv4AKftShhpns2zR6ZDTXQGh1Gmu",
  "key18": "5o8cUwf7t5PdgR47BBCgoyN67JucW5UkRHWicoN8L93tNf4yQkNqhHEnTnDnbxxtgw8G3V2Xmc7gvFn9SYDTbjeb",
  "key19": "Qs8VZergAfaBq8jRAbpN3bnUi1NhZGXEVmiKErqcCqUL7Ej3GqQi7ALmpk6BeKkoXJw4jYQPEcL6eNvSsSMwRPc",
  "key20": "4QCqHL81KycxMD7oyKxCGvw9eZ2Zmaj6oE3w3gMyN3SquBpC9qeMFYitQiGmsgEoYx3BuqT1cTe183fvMrUD5nme",
  "key21": "2L8K4ssUemXZDRAQgXhnKXPZHsn7rNHTCeuGutaMJKKXYXfnBwZrkuqQ7caxcF9LCeikhwmJobVbkJnwYdan5KPA",
  "key22": "3fV2fkFX5vBeYj24iSa2X3y5Nq9SW5vhKwQ5kjC2QdUCc42v9vVhfn6KrJqu8mpa1c4MKMGbNdedLEPutBFStH4z",
  "key23": "VRu8QUQ5SLkHz1ewqKGmt7WtW7js33U4HRvfEsMXPbSuLyDzQyEsbvQQA81Vfg3NkqbL22u7JV9zuhZraM24d4S",
  "key24": "5F797DB5ZJf6owcRciKq9T8y7w1c579hrjrVLLgJxGykW8ATQg2E1bzinKpBJ3PzUua5pojkULVCM3FvBrppXBNS",
  "key25": "H5SvvKXfKdEYFBXaFgs7uUvLQaMQVKUAjgxRUKnQ6eMLoQJa9N8bdZte8UXFqpf1AJuFffFbJ14X4cyQxL9XCzf",
  "key26": "5irTLKX1FjZBaXRdu6L2qymzkNn5GDoD6mS2JNdgaENtroqvxGiJK8SBqTKdXNkJv1JU1WyUohEayiLshfXyGjq",
  "key27": "27kN5Eu6cddW7YSHwGGG93yvoFfw28mjnxBqkADA8RRSFBNDbrg1V2UJEMNuJcttmTcyeUqNtaBp6ehMit9MB33E",
  "key28": "57Hma95pv3fUY8HMRENgeT4JdPAmakHMmpMdZRdmueAYqozpaGcNy3TMDuxPMpexfSxqMvuhjAvqJfra8Uhza9MV",
  "key29": "hgDiUhmE3s5nM1tE86G3HvRHP5L1Ky5FKeTeg5YMwmqYkwvqoAPZtukTmWotbtXtsTgmsrgp2YU4LyCxyvABTV2",
  "key30": "4xJEdEAzYBFcQUETUpWdk2JJqbMWNZWbKdanZ3Exb7gMTJHLJRdv8MqUJbSMFNCsanHWz4A6okn37YTJAiGY3zKC",
  "key31": "4GXDiMoMShAvmzZ3r5xSZPhvYTFoNHE7FEyg4RJWqDeneU6Z5MoyM9wcVTnTGSy1uA3kearTHBdEYRrJZnem3mBS",
  "key32": "2u9dcf8mju8szo9WUkwpHajq9JthVE3iEpeBV3Uaor1gZYE3uD8wSt8XM64QF2N36rHuQuUSHizqHv5GzpBv4yae",
  "key33": "4Ho2LwBKZxXeatPkz6ZQxuKLdLmzkhhWfA45pXM63i2ULDfKiMJ6XZRMTmq9EhesLHgyFSdfCCsoi1TjSAPwSDUV",
  "key34": "4oMhSH5SxKhp5ZYNEkvm4JkbqGCQFGUMkX3yJdJcCh75AuzeZ98J9QVAJjXhU717dmaCffamcAa5x4qpp7FmSLvc",
  "key35": "3JyXdE973xGd3mRLergnvPsjQjpzeVHaeZRBtu55Yvu7KsHFg8utdVW6PUUmUndN3cycwbVo75a7r2KWAUwWCh8d",
  "key36": "4xmipojnte3qzS3EhLPkrQhXAbVDhHkmCkwqkxaSXYSfKqMifaT2QcXKf8XviGhUW2bfTQSvubEzHqjUFUZnUg5X",
  "key37": "4wpWnNY8GZeaoRc3t6DwUmaa4DLGAECkJ1Rp7s7HWNViePa2Uo92K1k6ZvJ8pbprZhxsb24FkJ3kQE6LSeMton4z",
  "key38": "3tQvvkN73NApr7iNvpmeJr83gbLXeLZKE7wytPRY6EvxJo5DAFvscQmgTWf2xx3ZGywM6ifCJNPaHgeSJHcEhXUG",
  "key39": "4qkN6fqQq8HHdXCds6HbLkgZ6P2W73UWHhTxaWAZURK5v7BYSgyVphPKRtRYmcNg1njaGuGFMzXn4z626qCNsxfe",
  "key40": "5XLvMCtfyNgYMUqH4WeUzwaufTsKeii4eLU4abcg73kkzLJSvt1PgSNwS85XdC15qn9jCVsSEuK2FKb6xo8xLQEA",
  "key41": "2tvMfzG3syMqQfdTuhR9FNo931bLurrWEGBQoien7HBGfRmbkh5bDLQZbpbuh9Z3GEodMqSrJ3gjYx79ZsNx6n9t"
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
