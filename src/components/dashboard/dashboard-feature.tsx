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
    "FWDXW6qsKDfo6TgqLetfhAYxd7XevvRs4Ta2YYdmyw2shA4h3mqSRLbQSW9ksApJYS6rtVQi6xjCZ38NHhd6qvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31QUNgoDJxcvTbYFvQs2bsPSj6NTxcBQMKXAVLwgzm5AQ64avETRq9rrjJRomjVu5X2SAAC7pw56s7CdPvrVErBd",
  "key1": "1KJohCcMcKM8sDxUP8ui7S6oL5xYyFBhCkWgHABvr1Cc3BN8cu5ksjMEiGgtVDNVGaB9TJiisey4QTYffBYb757",
  "key2": "5Xwc9LKAbDLqhJLqxGj7dic9GpExNTAEikjbVT1394X9Q4t744zqmrxzSLMDZB7x8gv6UJu4ow7jsJaRPrjbnwg5",
  "key3": "3zqADPSX6UMoLZQpWVynuMDCL9MwS2wuZYie97s2Pyk4XxJhfAtzJqmtmnaGFJ3Bwfmp9m9GVXvWJ7y8uxpJKz65",
  "key4": "2zos8A6Kzt7X5zPDotSypAjd7tMfeGpiK6349hVYmfLK3CpxEbHBptuW9s8YP7XpuiqwVwFuVuEwsJ9c7sjbTpKf",
  "key5": "4APVnpsjbdX8vFjCsikJv9yMTmGyzuG5KgGAMA9S1ipMekXZEvLxUNtmmp9nZ2ZCp2x8DUn1osusgYeGie9vZ17k",
  "key6": "4ezyxkNa1Lk6345gtjsapxYzvvZHwyeW9qwjsedvK8ahvEu3FGH9eVcM42aRFKzWAHkbU5y5eZUhwi3C7hFo9yL2",
  "key7": "4n3MMTDk3oqoJtFTDMr2bjuQGpUBcRYCn26sPYu36kAfh6iLk3dt5u54Wd5dmjKddAc2nmTrJ1v3jteu2JYJszxV",
  "key8": "4SGpYe7CvntqsNxEQrHPY6sdvRkUUNt7xTRtRcksTuEBu3TjiSQbyXp3caXaikaHeSF3sm3Qt5AjNF57p2uA8Lr3",
  "key9": "44kAP6aukL28SiCbbKyfF4YEd2t1uQyT6EvcQMMUPZzWihXoRcY3fHGnN8Q4vQ4RoGrSMp2i649eijs8kJFo5Ku7",
  "key10": "5vDyNpEmuaW3nUieGowVzMy4f5YK5znvSSbx1dgVDLLuMmTbcKmQ5s8ehNPn8hvsTKBwE7UVF6tKFALByAo37Nsj",
  "key11": "5yoHBziXbfPEm2j8FXVVuwffbsKyFLUJ9L219B2o8DrHFjyt6BsQnnUg19cxZZyBGJSv62iYmGaNpMsxffkJF6rw",
  "key12": "2iJc4BnrxHNJAWVGVvKNqpcTDC3EZT5LMQHVTXf4ZA3g6a5qm6cWdByNW5RYNd4ib4q1XZc4quhgJ8AMjffQaHXE",
  "key13": "5GbdUs3PiWDw1vTkNqP3bzUsktXtZZrjUwurKepJ9HQzKXwbgrRMxwUnB5P7XTTxo3q2UE3heTiRU63FuNv7Z11w",
  "key14": "528TpG737pmxeswqwWRSNcVFBojND4wcwKendKtoYMRxWyTSBfKjooTKdxfkfwLMQwcXDkZDgeaUVnNPcVxqYptv",
  "key15": "4z5Gjxrpw1MT5iCRobMborV9mv5hKKnyUQ1ZE1PktdNtjmWfjLavaKrujYki3NKdS21Utw4Vnf4AagKmcpWDJ5bt",
  "key16": "5G8vXa5nXLvLMKMGPzcnqd8wPGiSMfQgZ4LFAiRPXy6to2eEc5pBs4WGnQoQP1QKLLW6k3WGhLcndWdqAnqmfrLv",
  "key17": "4P48MytCdQJaV5EzJci5AzascRHEnf2i5zQ8hydpHEwPPs5eubvB7BxhwjQDeZhkpy4T8Xzq2H6bi2kAg7WMQKAk",
  "key18": "4qb5Dj8e6SAFbX7ZpAx73fmgGp5WHzLKin5Q522v9FCPpbJNunknXkvbi5TCGp6igqsv1MaWftJP8PNim3Ya4rtm",
  "key19": "5Q2H6PZRXe3SeHUaq3mHTaMocvf47sgg1i6inBNcdd1N4jQuftCeWeyGyUVr8eeQTkaKwukrPQx9HGbRtzqHT9rY",
  "key20": "3JRUkjzXNmApD4t4LoCeX6q71v7YYT9wNUaxbZU6zTCNi3wvqwXikPSF4aegEcf5zSjCYxe5onEN1rypttVgHsSp",
  "key21": "mYWjXfP4d6ZKsdHPKSmeMPjnypkv1PCXXz1aZh4JuwXgXRxjZABMLCHKvRSXQdjff3Py8Pmd56v4RJvF7YArqup",
  "key22": "5RmKnanbDLzjcdRqe8hMG41N433B6Q4yxAcSqQZhNoAEJmMtxGaAhDdLNyGKtEo7dRwRaxkom5VxM6VeoC6VQAGm",
  "key23": "5xSGcNi3TncfJ6sssBSMQqvsEg2irqEUryfVmWnbJPASdfXMVZ1RRsMStrsWmoBB1gzhCjBt4HBnePWTijVrUBA3",
  "key24": "4cZwu15uJwSQTPEVuAkBrQtwjGhYkJ6BgEk75xmzTvmDxHUHgVCzfRAAJyunkz8DSxzPSFGmT4YWcDwM6sBsTpzj",
  "key25": "5ipXAeReEgoHYtaWemNVZjKpSkRFkmvja5PVb9TAqCiSQsFz7EGxRMKpBeDSGxZx9C1Y3ryoDBogaGnjr1ERsNPT",
  "key26": "jXW1bW7GTApGB68JKMPavBgJLKgAythUB3hwHbe2sQnkvvx9CAUHBQ6F4o3iFssHNbbVTku7LxoiQjGm7QyNaTV",
  "key27": "2DTzmof1AyQACAFnBLQdsgKWr3jwfqpTJ2uiH5NE9MnYBYipUGGeuT1JFohmWwPscyUtKjod25d6Vms3irBxh61i",
  "key28": "4S5TeKkFenMyHMCRQVLDg8PWCASNBEPmowBBCpeykv3Pumgn8xXhQrgeg7Jk2oM7KENMjz5J2inPZfaT7Phckfvn",
  "key29": "5XEos5RsHwauWbaYijnwXZsK5kZzX9jnSvuvzixNGW34uHFnk6TMnah7Nq5Ng3hiP9YJ4dUKq8nAG3XZwPmpceEr",
  "key30": "3xpW1dBF3M9L7N7CG1jtcMdKjqCu3FiH7bhSiRKny4vMKp1kHuDwwSaS9NHWzmC6iCdX21HCCRHvXXayRRShQL25",
  "key31": "4vYfMHii7cZLZeFkm1oPzvieH7nu1q9SSGmEmDMLmqbXJcmQkUEtDFJzXrmWygbpNxX5GVV7AMbFS6LrEEDQBy67",
  "key32": "2Fc9YETndscAZhneHK2ri8yCchGQM7eLeyWa6LTTzybiq12rDVJohKLSs3zbCWrFJdQisz3t7D3q6uATf65GZqf2",
  "key33": "5ZxchkmiWr7AoxusbvDi4FhsP5puwcrpKcx6oG7AfWiYKiBZfsWLQNdkK4EQk2TfGwwwgq173HsaK91C48NX2kTi",
  "key34": "5EeUzwasjfVE5JhmqBDWwtH7dZnKHFipVEssMEc7Vze5LdX85skqMgTK83QL7Lyp4Mi5Hg9WVBXJdRJwoowwqNbd",
  "key35": "5SeKe3kBGgXJsAzy1Svdes98Gg18VSSuscfAzZnAJ3Lqgk1NYM2rZzRh4pozSqcEnbmJcmTruhPiDy9EaV6oDb2c",
  "key36": "57p1vENshbMabRtSteVq4rW6brs7LtZ7FZbtAPh7vqDb9V5dgG46VmtpP8bJnPVhwR1wWZw9P6YcMwjsGSNBREzx",
  "key37": "3DciLqoMpq6KYKiewqEqptFksSEpSE8pn1dhR2FrbbXiiW5SHqd2BDKvqbx4UmKigs6ZbbDJBPrNPpH4UNbVAsp1",
  "key38": "5YKWSRa1YzsGBWkgK7D1hXNw3zSQ5SDSM49MTeJHU8r3WCEs5gz3yPk56QngPozcUgTZvXpeNxUbkNrWc9264oh9",
  "key39": "32JhfCEpUx8tDUQESKCQft9RaNt4ACSErDcP8dvombxRt99hvBcXZbxPCB1pBLN2NuELMytuQEureFiV9sE9JPu9",
  "key40": "RPGcjczacsri5VFt8RKnfxGx5MbZHcwdYW895MW7qgkBV3UYkX1qaSg5gTNByKgwoZpN3tizW7VaeGqMNyEdopm",
  "key41": "3rdRQhBq5hRiM12DeyQKzncGft2XBt8ftp6kgHHC2x4hN3xSap3HRPKSAX1SV5jqSx2KAmMkXvsnrCHmSwWpa1on",
  "key42": "5XbyByLYPE3vkcr6Z7QEbcRumgxrMD8gNpJYVLLQxiPnTxFpHDXwLLRxzBNYvRKia1wKiJReZP5EenshvGtNLTVy",
  "key43": "4eL4sarS5g5SQVQoGdEUZTHjbjVYQop4QvsEgheT1YNGdFmaEcfE6vbDHqoXV7nzbKE3jwZcLxWFLz3h82WcS85N",
  "key44": "f2TdupN9Gb3tEPMBXTuQZ3aSo1GfUVaMuVeRjmcNTxZgvqAP4TJ5XAB2C9MXjprqjkSCkM8LgQwvMZjVhdBykkS",
  "key45": "T4Rqo3TAPXbburYN23PJRbMRuhybP6hABvAkeBvK56vSH7QDM97BuQH8n2213V81FKej8gcmSXpc8FjwMMqLjfv",
  "key46": "4bL4sxuorJggx6DSRmLw3rq7MqKXwNXGpSRuixy7KEq9F6hKs8vKd6Uhbty7Wo7y5G2CjY5Cw6hW2mgV2rDvDES7",
  "key47": "2ZHBtWNXvbSz8GbQQDzcfGwKsVzJcxo82aLkvjjyAw9kssyVUFdDhJoZCaDUCzSin6aEVHLUuoH6cwSSu955bMfG",
  "key48": "39k3T85CvTWdrBBES62yVzTs7GgSJTX8vxyz6u9aQrHRwXX5c8sTs7QdEeEBCPrZw7ofXo26DWBtu4m3MCt75ass"
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
