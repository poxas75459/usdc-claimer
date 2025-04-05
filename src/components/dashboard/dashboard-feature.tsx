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
    "22khpU1u51VY9qquy1bUtBJT2Mx8nLGpdfCjyqzCH3nKiB6pdmeKFKn2Ckev94MnoDcZYxmvcu9Gv5MXU5ZJp1zt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o59E6tqQ164anZis3k9EJxV3WKiEeo3EKkL1WG9ipvuL2DekXz6PNagrLCYrE9k96CHvuXG2RZLvcGS1GD75uvj",
  "key1": "5WHagFnTpHme7DKt5SshqvhCwxSdNqxQc9nu7TpYUZEFVisDNvN7Ve7rYVhinosZpMZ224TcERtSXabvXPrabSav",
  "key2": "3CyctooCQnuLjnUy6xTA5hBRz6mmvVNm9DdwSL7J69x1L4pEjyFm3ZV1kPJKBQAzTJyb9CVXP8Rh1MC28be8zEdY",
  "key3": "2Z8B1s4rXVbAmTSD6s4eW4SoP9rXyV9eBGjGbGMX4hUZ3hpCA7nYzfCufrYLmLbMKapRf8mtdPiK8gAYrabTACSw",
  "key4": "4pcE5i3dJmBPTdwBQMYVy2yraun2rxdbeP7BC9Y3MjXavXRUNDwfmWprCvZvU2oBqntMyNtZtVttEXrnRsLbyAoZ",
  "key5": "USfWX9iEF6aTCkrwgKE8eEuMD69Yu1bGbmWMNCYgChGAFCs4oPE7DnBXZGdtqrSNMaFRhye5wwa2RKvfzj6rhDX",
  "key6": "4r3skBMn8KUB6xZbBxHdFZa2GjLa8RUrE4dfi42jFWu7vpMG6zVVsyUh8UvDn7vYYXmXtdibDjWEG2ebGmjE569T",
  "key7": "5aRZAeSCwq7Q9QXdydzggBiLuwaFt57rVE9RKnv6hoHTP5vwfMGpcyY5yJLHC2XCyEFEkfDybvjJpRNhA6Fwtddg",
  "key8": "3LpGVhr2VhK87jVZ6tMXeW4FQpLP3VDsuNKjfQTQhR7c2pUFe4FbMa6hmFQFj6bKrU3ytMH4fnMGmSJktDt93WrY",
  "key9": "3Q7XAij9X3q6os2jHH3aVi3BY6t9Yph7JW399BWEX5YKeRfUBA64fmaYm1o34PCnDVkRbL44e9ttoA9N3PBzt1kK",
  "key10": "4zxemefuqTHHdu3RPYgvk3p13hJ9GRbuxFbaCwZxm8P1oJFsmpiJJQx5ruY8BQxdzcgKxBV2uCdtjmcEx96v2JaL",
  "key11": "3jhJMVTw3WpHVet3saYNLr6DRAoqoe1M3LJU6Y8N6Mba78w2D7ZMABXo4k2LYcwKg1wYrYG3ibbsxe9X4ASRphqq",
  "key12": "3BdHWBeiMMtxAEZQEZGV12iqdttXt6cfVTQq1YEVEaYmWtnsgEti3VaeTntjs4aR1d1CNDensF6pPegRFUt3p88K",
  "key13": "2pSeAyqf5hcNrptr3igqnTTQJHj1hHr3nypJPmYbVxSVtDx9LnVQThxGn32pX4fgFrDysjPj2k6Tx7JHBPRjrw7G",
  "key14": "5fcwcp2dC5sPjjTCMFHXSnaY8imsBjiHQ6zWNBRHiZfWXWMExKYcYTEBXtQEstKw9EWTK1o7RA3nEn4Zszqyxdo2",
  "key15": "5pewLc8w23wjBiMKqoyboCwuU2SGAH9HEHN4JMD9FL78Fgw4bjcMzt1BYkN8JiJgdW9GV5kM1tuNwtryFD1gdY3y",
  "key16": "4spmQ4D1jfrJzW7QFDnP1k57TdCzTTevgVALHGuFqJdGdspfntXzSbfhyhV1jRYeqUYNPopxqGUaYS7gVLBrab6B",
  "key17": "63WENyPh4MBHPVZPHVdDcNXcKgwXgK8X2bkVGuNWqVRyQjZXsQQZhnUDzq5StckpfDFng8daaDYm9wzapVKSuBgu",
  "key18": "3euik6E81LHhhVNUTgoBYf3KLcghfL4ydwiobKQw717YQV66BKZ4u1aoLavK9sRmQnv7f7xCqCnsEpwvkdJsyium",
  "key19": "2LgYZ7tyXY5rUPnYdcLSeuWpdgs1E8YHPCKgM62o5xYvb7aM1L5amBCbhxV8GWPUd29VRFv1vca6GZciKmDRLYzi",
  "key20": "tkRY1eELd6h1adeBA3Gdtae5JqZ5vazEGgQUH6NCKC598Hy4XCnbjwppHhVm1XZcCHeA55tfQWjz22HfGfJ8J3X",
  "key21": "JAJBP3MBnYGaZqNR4Mw8Xvu8cUS5V4apz51GY1ukAGWxxz9veeQakJc9rqrAhdUNdVNFHSK5ModVHn1ugchCwzM",
  "key22": "4g7mKnDQTVst5dvVCNeVSuhPdQvPZWhoQ35PKshFg4RKKQxprMeaASWbNDwjHzE1gFKSAqkzMZj8ZQHgRPzXpezS",
  "key23": "3C2eRu2PLGXPZ1wtJ3orhDLRAWsjfm1NgjQSe4ZNfYaU9gTDtFG3acHieppE94oxVsNS4rYSL8e5fXxQTowiUEes",
  "key24": "24GsVuRA6BxLou1twPusQpR3gDt8F3GKkPd2uXMqHqa7AAXm9fUPb5DMUzqDV7TVMzw44X6tQx9ztWhbFYqpQ7UQ",
  "key25": "5mJRBu3Z9DDhzCijiQVBVTb5ZKBkY97RmFEfExXGC3jFj7tjkL5UjCpoGUBcgz5W6WfAdWjUQZD5NfjFC1uQSXqs",
  "key26": "2MVTFGRWd1HW74SL1arJ6vfHV2GNU54ad52oAnJqLupM7U1K6prJ4ZkeE9unEo7kfyVzayH19LSK43YTWUVHat7X",
  "key27": "331vXar9fSu2xwQWXwGuikZa2L5qHStv6EjvfZTjEgkEnk4a8dc7QzwqGTZp2WMLJEgtjLEAcXWZUwNmsRnibw7c",
  "key28": "5Un6JFf73vvV8GotLWjVFc4ucsiKHpqgrKd1iFxqyAfdA4qJ1EkoJFr3j6avqttX4ZP6oQXQEsXGxD2rJtWk4x5R",
  "key29": "3a86zr952bECpQ4bR69M5DSpUNv4LfCpbzXdgRNEAd8cEFT55MzUUwtw1AJzhjNgaKPEzfNqomHpREQUQxZBYX2Y",
  "key30": "56LHgdbaEx6Pjbfuie4wUZtUkHKvH6geYYxJSCxgQiiSgfaveWzkzAZ8TSaVEkqAb25NE56SToXkB5SCVRSTQTnL",
  "key31": "4qhWDGRzo51bcHtUXpLDV5GVLVzKSAUhNbRTrCjBYDToJ7YxHBBxdRsKg1jrKxk84xucqDgozdBCN9SfxWRGN3bW",
  "key32": "BAexRn1bSbGDLDT6d2DJBZUPYcPFDSAgW4nboNy54SiqKYP8WihG6XcvdCc5jVQbShMkrvDgNcm5U8TV7qMATex",
  "key33": "5KqfYT4622Vw53PPFSgMmmKAyXpV3pCf1wS8s7jpryRGJiBLLgbFY41GMzH4Ah3PdQ2VpR6XnUeH5AjKqviSxWK4",
  "key34": "5G6RFkfu9pDByrcBoZbEazw1FFWqX7KRTFQ1M9B8FAVYEtmyfPHTVEV2SZ4TmRZXBPJqce2mmfMFe7jk7VzFPSnc",
  "key35": "47WPb2oULvqXh5HsYur43f4583RmKq6CcvXdMWYt9QKzsUrjnUDiKZiH4ucewxGhSW6ugTzsecuGkemkhXzLdbBs",
  "key36": "5ViS25wWNkwFjB5iQkGqd6uny2LcpKB8ZgZcX9PMiMHheCYUHJ5DgTaSzM2bA1w7nuPYJW71dc55sbHPmE4NsTXT",
  "key37": "TAUwCbNakqWeRwRtQX2suTtnxb8g3NAmE6DmX3cxVtDmGCrAdaf8WFHzzroAr5NHfa2vfcGZYKUzorMSoYkgDoz",
  "key38": "efLHpgcL7NuuEE13vjRXaBcgB9As3dBPLcNqvWVDTy8iHRNNyd7E31bqhg4nxKSi4tQK5cHUCxygBoYdBiUNkH2",
  "key39": "2bSyMS16Nf7EZe6MfFjqMVbPgnjjjLuCzVKbBsEQ3HDxAtbLSTt8sA39sqLkk3m2n8rVJSNtHgJnoL4aZKZ6y1Hi",
  "key40": "4pN8SHziebKh1EskBAo9R2MqMWtg1fHDgvVfT99xck8DCrvtqK8ou4Uuz48Lz5CzqDppaLcUWjJMqSdQwbCKJuZD",
  "key41": "4X6sYor75wv9dp6SqFpS6nBx1B3Kot9Ke3mA55GQXDixtJJuisVgeHej5J132evkqkLUvH8tgWC94HnQyfkZsLER",
  "key42": "2uwpgebfaBDUPhNQnpsqPVzp9XqejYdGdnDecraHmKxHkm6CRnBmFHQnY6HoCM1iZeRVM5pKE3Qg7F39d17gNYoF",
  "key43": "n57mii7opmiMdMgGVn4A3SjsaK9K9TEio9xAak9oDUG6UShhDBjxBLqkbqR3sBQ6sQqcQt7ZUpLdvubWmJCKvfd",
  "key44": "5rfwPZQ4TFGfp7rB1bH2QEfz89JR5aXBwqRCxDHsFeKQSw7QwUC93gKmSZbC5t3xx7fnqDdJpabYVUS9HgjueDk",
  "key45": "62jJVo9GRqqxzG2rbHBv2WoFMQKVhzLB6nQzffSGejLsJxBZGsAMi9GJaxXbJPbicXjUcaGAGWRK2VWZuZbXVtgt",
  "key46": "2enARUFTnKB5XJjSyMtGkJ62cNQ5kzm82E78o8wTKMk3BmzAZk5MfrNUAoGNgq1qW7E7MowKbHHGJWSbZ4kiRky9",
  "key47": "3yPrmPcEhocseyjr2PeGRw989frmbuDxw7YXCvGg2FHovpErjaRM9sMVsts7bSxzHy4oqNEW6b2uAwiN5YYGMPsg"
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
