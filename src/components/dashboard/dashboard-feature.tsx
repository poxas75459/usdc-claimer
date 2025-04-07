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
    "3xD8J8dT6wVLBfxN5pgXrFzojfdqFcgupsP5i2BLaYRUZ1ih3Ba9GEjYK1Qs2esEFfZE6sXPZTFffxminS1kYkjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4od6g7XvKoZJroA2KjJoGXD6ywx1j9pEyP3Bheef91KbKmmc8Y8r6AiWwv23K7GLK8bEUmZ5jBfz37a5Cyt5Co8G",
  "key1": "2NqbeSHdPEUeXsL9NtpqtVaCcWWBSnhRxv7AWCW7HYZK7TeWwppv47pkcWWowB5L1LEnt9eHAN9nQwY4yJAqPGfE",
  "key2": "qFL5LBYbJTiWAnquyn92XdbVLTaDzjYmWyJDDM2vbn2Ss23tPPnmVin668bCReFN1YvguCwHHSkNDG4hmNeMVuS",
  "key3": "5oxQApY1MgnCgpgs14bhQyyZxk4XAdyXokd8MF4uxm7QK4ve9NG4CdywAn5wyw1jgJaFBoecJWW9NWCsQAAm4oGR",
  "key4": "2Wc96g5XGyuJidgQaLcgGAENrKHsyz3jzGYRFatF61baFXPY5xgFEbRzHo3vU7xwCsi6QG6ndYzN2CrJWtW7r77c",
  "key5": "4Kt5Wh1xzstR5pNiJ25k65AtJoefWRiRTVAzmYMqr2oJ6f6NU5adZcVWB5XNbskMqmgWphzmAge7N57U68mEuSiF",
  "key6": "PWdGfxyjAFehAQ7azStta2wVkootNLnyVUP1xmDf6XsNt6U9jd82HJfVSpAfTEJAxoPD91Z8ddwEEXfhd4ZEHke",
  "key7": "3oGygqiqQypLTbyuXyWa799HWZJAiAqYXbmechqtatjAZZ18u4sAKrge4qcVeV7azrM6cKJQjXTTPGQbHXnsBGNv",
  "key8": "3ttwhpqbxeJj11d3N6Ddc8NpDcM1acPC3M9tgph5KNzfgRsASeF1t7VwjQJfizQZ4PyLmS8PoeNxKoLcwGpXXRcq",
  "key9": "55qix1KHyvmUtpzj5HoXiXBXyYNmmUfpwCH96VNhwSqXbEK1rw6c6GLTN3zJLYd8KNMUMfXtwm362Kshi5TPF9qn",
  "key10": "4d9Pjz74APkSUJg4hVAsw1ghhbL19p3NT1SCzvNzbHNQ9PSbMBdwwj948GNBvAqnFtRAFXD1yjh5LCVYYXLS8SRT",
  "key11": "4rzxZJ5NiS6vXJHCrrcem4HVqaTLtXjD319td9MUijwp2RinU1rg7ZEzfKmx3KN15wkXCbvMQLJpbudPDZu2Sq2g",
  "key12": "AhLiqzmjBW5XQwgeHo1MK2nYJtLZdPrbTKu1goR4ivxG5gM6fxUjxbtaH7tGahktebAzTEquQQhujk9ayxJ16gp",
  "key13": "22iFJ6GgFeVSRnHMBQDJU6qpnmT2Rq2P7WsyBihuDU3AaogSK3cDPYUKeDmrKQSJVKfFrPHzp1JyHb45nPr9cmiD",
  "key14": "21RnDS6yrX11EhZNoSVheZr8AtwCJtt3vbYEuUqJ9uG6psLxw23KLxpeRiQpim6c1nELWc24wq28yxQXTADKjVWt",
  "key15": "2i8ncabZoTENjJ1hfSjn9jAfPYXffwNHYeAGfyBMr21xZtuDbEoMmKtEUbTqxajEBXSy65EGX1U9akv71oUbW2WF",
  "key16": "4XuzApjJZuYM5EyTVyb5vTXppkgDyf5Mtq79Urdz9t4t5if213tCfr7KJjQpMkXF2dsK4E5N1pY4wWGW6mTPHS7n",
  "key17": "4YU3RGULYbHQjNfr4vH9zDSg4EpJvRWCFizXBeu5yaxGuVdSGkSvXBgYz5mYaaSMDsdetkYw78DGB9o5sPuDqUA6",
  "key18": "fjEGd9Vfxo92vf5QnNQ8hkiWghSXwq88aVhsnQXvZF9Y64KHFufFrZyE5MgeZG6NSYbSta53ZCRMAtEY5hzpqRu",
  "key19": "2sE8KDs3eFZ32MVxWqX65QGTJPbQvVEBeYkLKnufT41gStV7D51WTPXaT9bdkefUQyjMbBD4PnBtZ2WPkN9bee1o",
  "key20": "26rqPukpnyS4o9eyk99P1peqJtTBJkr2vABgY6beFN3uytwRgWsaRvFRDu3MqLbqotedNtjgKKTjWFWRDFs6w1AR",
  "key21": "5T2RTAUaNXAxJ58VW9Kyjug1S4kHLWdwEqDPPxHvVeqHo2LPpXPEtmxiRcfGX18wF8AP3A8LE7PeXWh5RJUcrLty",
  "key22": "3a94TJVdzU8fm6ZMZBjFHVtBFCZUC2bfvMqaVfvsQxzxVYYrbvdB8mmLWQMHReskvgpLyUcfrnSuEi2hEborRc9g",
  "key23": "3FVki4PsKdBs8vbSvgKs2eQtJUkJpDm6o3GQD16jci241ERn3wggQ4fpxAmtCf8rhqTXF7UP4E578shTtkx7gcLK",
  "key24": "5ZoLZgRLEsApGDdkr95HB8V4Nq33XstVhX9ErxK8FmTPt3UjtLhRLWYsRX7Ve5s8BB2aoHJwYjHqfqbp8z7jt38s",
  "key25": "5FAXbAXsmvkENvawF2nd1vVmqKWNdfCTVANqCpiBXaEH3zE7iEwGE7q9u9yjMPVPPeXzHhpcCLBeRrHxDjR3Xz9F",
  "key26": "27bWvhKrMuqVHkc5ZsJoMXpXiLsXM6LEb6YT41KHkn1p4zsMuymUohzDLUfeykA2SVR5osyex9PhDLDcpWoLkhLw",
  "key27": "491wmSb2hwjMCoAvYSmv5xKSHWiAovKWHTZzmUjUocQcWGSp5D3ZAGkyfn3VAH5UQjDNRAtVNG2DVdyCYGJYJcS7",
  "key28": "3t4CZFqPdZz6a2RVxQgyTcneNuCVuLWordxqpHmq7PmzA4C7ybG2QEtin6a914yno6TCTqBNDMe4SzJK2xUtQ2TC",
  "key29": "4rifhafby8widya8ehMrZMiUyUSdgdpbNMEFPasAhbhRFw1SAGnjSVcSUrAmAErJUyBbzX1HDUqgn2Hbm9uccd8m",
  "key30": "4nBKxFydxm9fadW8udWGQ9R6hbDfM74g9EeanckvE1S6V89eu3qopgnMgEsmyjzuSAwvUL8ZKQXDzFaUHoC5gFZf",
  "key31": "45WZfacQUR8iu1jcLCnNtPCpDf4PsgBSpDipKozMGf7SNshP4ibKkv1BzVMFYzaFusthTF2oFJpetysNyc42EQCh",
  "key32": "T9rArKsLq29sHHNXrJtt1Cmw87nrf9Wb9R6edkAVMJGufKd5zbTHiCohNPTyaQyF4Nng9aFc9xjZh79n5Y1Yesx",
  "key33": "3edJjhJh4bRwRoy5eoWVnVHHBergyBVxHD1umYyYmvRFYAe4kLKhQjcBp1EDCWgkq7Y9m9MeTZGsd4xFi8J5GSi3",
  "key34": "577YZzm9Di2euZvNsP18wPHEsa4wohNX8uttGEyQbNeKgq2BGtGtrvTwuohTSp29t5AHcccdW7NVoHgaHfRpxZdM",
  "key35": "3tHWhhTqVeh9rxkuRrxNrZMixC4GaMMrhqJQQ5WbY2UJdzA2DN4heMWYwBzzKbFvgoRTDuTLcqEi2a7vyFLCunpM",
  "key36": "56sb141rGG1T1gXefBkhxNCDMqU8tuGdwt9QvbwA7fHZtJw1TCmHduMUTZHW25YUF3JHGt3v2coBzu7cWYpTgJeb",
  "key37": "5zFM2dtAN7LcH6mojWqZCQpFjhxfSmpteJUW2So4hU4wUg6s9K7nSoVDb2DZMgcb4a63mNjoAHvSuG4f8cPvKPSA",
  "key38": "2H1UyeCjTHjW1v4X61B9UEc1t9bjBub7Ao6a9CDpzSh9zvcrFWvqUiNpkF18HLmB4r945VfE6QhBhv37BmtLXbxf",
  "key39": "6W3zT5AT9W8TYZ3jKv5zwbhhSvkZBoGGwZpCD74LdrQujN2jf5JDwmkDqEaucSSEr2NsNUbVm1nMvMwf8XuBQw9",
  "key40": "5n4yVsc6hYHANckRpiSQirDCyydR7j7L5CUnK2bNWgNPeCrHzJaKd6LkgBy3ZWesKHfkoFsgAWBMd6vDiQ23qJw8",
  "key41": "4B6shZNuvSKKsj64MQ4CqjcMFDtZ2ynNreECquMkS1Sq68TmZBuKVAC6rSyUGEfMSexf9BNxXDsgKmqhArHz7xZN",
  "key42": "4acuiC56yosuCu21b5vxpgpmjTNfeH4nHjQ4uo3yBhDAecLWKsynGFfMNeKyFQoRqVp3c4oD7KMkuXW2uL9HFHLs",
  "key43": "2nGGFRBb5CcJ6QSEGhx62xsoLfrrXZqi6BfDWtR5Hf19r1TnQz1iwfHaC3ufHMg8JjtEqmT3a1qki1Cuc6AGRyD9",
  "key44": "44Yfd7j4SL5BCJRcXYyzp9VVSryFs4hvdJ1LoxpRxyv3HmaMMvQ1y8jBVLJgmr6amBs7QvyPm5BHceU7avdPmgZv",
  "key45": "ZZ9mZfQhuALBQBmQH1XsmRujUiJhKPaDd6PvZpSpLTTv9FW1UAQ1Z5ZB1RyeGVDk7KTLiZeJo9uuaYJh81YVpr3",
  "key46": "5gDx5wmUUPwSSjQkGAp1tySFxFA2ZYii2yubE628WtqRqMC5bMoSYrjVdcLiUn2A21XKngWH3rnZE5SGHicdNAg2"
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
