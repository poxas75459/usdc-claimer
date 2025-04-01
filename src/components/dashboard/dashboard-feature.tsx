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
    "5u3GW7MRpNjMMf4PQ6HRuZu2r9NrxSTTQkKETiYnt7ejAhzEQZAZm1LjTravbQabh7YcMFfLgFjtAxkkUiXrjM9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e7NwPi5GAUBLzioeqzTnRWCNFbV1y1ahkY4aM1ZS74grSXmHpz1zBfDPLSq4jJ6LwvNd9HWrxGAUtybEMo9WTZC",
  "key1": "41A2ipjWWS8zDWXNKfu9jkAAf7ySXUoz5H977BRit6EZJmKrmiT6Lg5ARYnr2VgcjorXZFqtDGcQE5EzUc9gE89f",
  "key2": "4MDGvPTp2isPVVLrfmFoHVgge5Erur7ZC7fRdsTNDETfHocGLYspRKjcvN8J9K3WLbceQfUAmyc2By6MwLYuLx8h",
  "key3": "4Ut1tgAw3VmArVtHptm5NLZuwCr5BnAiW7gFh2kudAV2wZpDBvvdMn5SWVn2FciDqj9fiXQGEHtreFFkZaoyX6vp",
  "key4": "mxF9AMwbX3LcHf52EdmJeLcsRMc9piyrGFBiehKt3GU5RjLeeqhYHSA31Lk9zsDsoZQTuQmy2BtQ5v72Db3i6Sj",
  "key5": "4BjpvG26dkV9igZrTtsbz7kaLSvWgPgg4yqHG6EgbnktUUQnHZpBxLNp3hPPZLVPNk21u6kU5Lc6sJaYvY5jPbMK",
  "key6": "4GLBYqTY2YtPY54q278xsWWkQm8QGWkx6o3BEvo4rc3udL2u2gVTGDAHRNsf9rQRouvunK2ri53U81xw6sbwP9wQ",
  "key7": "5ZTn9HGqypVos3En1kwgtwpRHLpX83VUmb82dZD8GA3UL7BPEXTXmdELu3ajDgfkqFtnyZifjmdr2ks41Zj6JJZg",
  "key8": "ExDpP4xiGrenie5T1YZq4MRDDHt1otCzAvsGtWN1UfQt617boF2iChhPZ8x6GHb1AhQ9UJkhTdwYHrzr56Qf84p",
  "key9": "38FzJKnSmohhW2TG42qmoQhDniLxC7uB9CoiVTm7NafbBfd1wmYr9CBvfXQ1hW1WcYtzRnJxo8jAQgGe19yFY8Bp",
  "key10": "5rf9KAR5PPCXGMd2Rx9CP7yjwyyNiMWJLAszEjG71tDNbJqLx44kB7JDJpM3xjjigVRbtt6dYLBjY3Qz3YpSyEXT",
  "key11": "cRipqC4mkSdZ8L6nG5z1gAav8uGLjR82o37V2GBHR5SoSrb2UMseEatphBUiA5cqvUVNtRDdLcueug6NPFDLgqj",
  "key12": "2GP1gkkCvdeY4MhsXNAE5BiKkX6SEhnDLQM76dAR9F2sBd9AoutFWCXUbasvDR5ys4pAgGmgxLfzw4iBpVr3XMqW",
  "key13": "dJVmk6L8JeosbeDeoKM3aaJmAZ1Sjpv2ZcMwGJjZ8w7RMA8toqGA81yTw6g2Z92xpuzVfHmBdDFTsc7fpsuyD2x",
  "key14": "428gNxpf5YW7wbY1B1xDf6v5AdR5z8JHip5o3ToRauLpJCgsWZnffD2WyUNKzDiQVFUHWyTNHDcSwTgAagwrsXZ1",
  "key15": "26UARBBGAmkcAjCUGoheKYCq1bouqJuzaL1M8CLr7hVYW4i4Mto8ErvSeLjUVSqSe8ZmbRZWcWk2SwyeaxDAJjPq",
  "key16": "4tBydqxMCx4GH8PLCPkci8zegyCSXeVjscr7asHhcBZKsZfe3bYKek25LVm1v4ZNTLntm2wTcfzD8H62xG1qNhuq",
  "key17": "28WfixDRvZyYwT7uj3mc4g3JF3cYUPeMBAR3ukkQiJ5o6QGVSQjBBEPnkixBeQD2xx4tqFMSCUmneysFdNXW9xan",
  "key18": "2yYp3cipnftXy1Gexkh99aZ5HUXeJ1daMC9bH5J26ghHqUKUj3zRuYsGnwYSdSoroyHrNc82x8HcqtY29pBPaJJj",
  "key19": "skE9wx9Pg3Em8oUQUuq7Vj732McyoJReUYUZ5dx58Ph9gdRKXmVAJiW3Tg1apGk2JFBTFjNeuNpUqQLL6kmSiv3",
  "key20": "5rqjfm6xAJLsQc6FZYSYuWiziyBqNujWiG9yh9c9eavLbD5cn7MkawqcEQNV9Ju3LA2teZh96MnW1osuEzEeiFUn",
  "key21": "2Qdyn8JkQ6Z8tFyx1jYDcMRfzVA6ZeTNMBC5GH1vEbHk3cscSUvqZ3UCujpHyRka5AmSYMCWuqSd8jcGFCRibZHd",
  "key22": "3arhx8TZKmk2cc1L9HdirqUSShF9svRhdD5MWLA6AZemohKY12inF8AfqkaaPRqb389v3Wz3Bao2G8rnCLqBLKgn",
  "key23": "4A2oiWcZWYLp7buZRjTC922RCGrGr9HQPURbvEbpq82M5EYdJPnGvUDF3fAEZSSpTUG2XNfQVU2eY2mat5GhnQmp",
  "key24": "6614L1wenmFnz6rjtSfWe9XCLfoK5qcc4sBgPrt7LexaP9uwxhB6wXVoprfHDycVHC1sPwJTw8xEBHgVeXc9Smi3",
  "key25": "32uVhuVKM3TRfAv2DwHcgFFVMLFMQWqFxE6vUvNnTMNbH7vz8URRNXUJttGeqMNyUguFp7HQfVmTsxS1c9ApARxX",
  "key26": "633Kd28pZYCfhd5dMRdZjYXmbNk5UNQbYFWJbYHzLCFxtkk8GqmkbCkCnVLEArFUyqUhgLVNC4RChGEEd3sLkTFs",
  "key27": "45SeraBJBuTXRKkaHeVf55LC1XgvdhbqeZWCPC1v7hT7QtPZ5WESkTUhLdyGiPyVSmY2iBQfbsgBR1b8Xhc87iNW",
  "key28": "2jCZTWtUzvsgSXzcKA3ECkEo7gyqhXGo7T2jaHEjJQo4bfxT7RA3RgyKQUwibaAK9CYZbYr2YenZp4yBT3tvyU7k",
  "key29": "2kpkXtLMGoQ7qqsKizbbvvogWGLV5tXUj4ePYkoFhGXw3quM3omPnbtz2v54aifRv7qco5SfLD3GRxetzygEL6Vy",
  "key30": "4dh1nAURNHMi5jX8MFNUfEPqT5dhZFfBntJvjZcwXarrwX88WkEvNm39cGXRPRkonYYYkrPfFMqNyEhJQPpkLab5",
  "key31": "3Un47jrhhXEfr9SpwgFq7aV7SSGYD1ERSEzhXDJvdCNoTrcAZhiT6V1yvstbCbf3fiM3tEGFCKQDQy9PZVtJtax",
  "key32": "5kCHXWyxs58c5YtyfTnPmLG4qB1w758zFZooGw66PS3J6BDGwy2tBiqN7WSD3P9EVpH3EdjJDYnS4SQnFNkUsEkM",
  "key33": "4UDjQuqVcQ9waGUDQQLqZx5RUCFSZLjaUBXhbUEUDg4tF9G2fmDJWa6vbxzzwMQJc3JQH4Parg384SnBqpvbar9K",
  "key34": "2x2RNvnMUqwL8NyDKaJoCexD4DXxwYkmHLRNatSXa69aKDXyhQRVv4v2ocfMKQ4wPUu7cgPVpMUAqTmqM9d91P2y",
  "key35": "4qB8fpURq19XXF3sW2LPCrCKyvXQw341cmM9NmcST1dfuXb5kso2L6WYkGKbT7cxGM7AmP7CLtcaaiA64HAeW3Aw",
  "key36": "2tYpj8GhJhDRraeSBbkoqn5wyTDhrSCq6eabCANpQe2m9wuBGEiWDj3ecpCvENeBRqEcq8BvaTbmvzcDZyotMuRL",
  "key37": "5TuMD1PeZ3LFHNvEsGFDbTxZq7JZurBUeD54hfRt7K5HQ16WSedZZmUHKsMPGjy7FJ5bXVUg7eJmvrKCgDUmBSZc",
  "key38": "4eiWfbpyLvfsMJuvHbzjGVd9kywK12wRnjtGkiJV8HZ6fsSrJNfL32LX75Cq2mM8iqnHNgQHjAxhuUht75Tka1V",
  "key39": "2fbsHU4JD6yPB5XmgbNwRoLucWSFeBPFdWHVWmmaQ5qjFYLRYv2DxkeozcamSJwgSVnaA71yFKRVNZJxXbVNxXrM",
  "key40": "2sTEsykKa1PfzHRz25azxDLEarRkmbdUtJ6xYNXwFk3mYbMPpi3Fg5jc5WCdZWeE4Un2WCi9eknJm8935kX5Y5AK",
  "key41": "2kycYR7Ezvzv67pcXxGHW6mTtuWhefqVTbbcHPbhmsgDK9NvzHUePKET3BeFCcPsyjGccHmvtv3hFVpsQ6bcvbiZ",
  "key42": "2EUrwJ7D1da94iTp58XXfGZb86mCm4fiAPjTNUDVWsExvNpAge8HyZyX55jBLU6XzXawrgTB4g7sHC77hDkU8Sh9",
  "key43": "24HFPnE9DyvtwygfHTnPUgU5QLSQJ7CTHrENy2o4b3xjYYi983vy3UnRXG6uT81Tb9pj94omkB9f4uJHysDjdY4g",
  "key44": "4sqLgLxfmJmzxmUWeAzfYCftFSmLnEVQ3VtUGAoHpUq4PZNaVVYnPEEVZgdpzTvMJnEY78GysRESJsg5oL82RqVQ",
  "key45": "54Chpodx4DvhDRsUFASii4mrcDFntN8hvGV4QDwpFZp8d2Aq9jyJ2F4ReYWUUGpKNc5eK6iruFgH4n9Uwd8f3mDP",
  "key46": "4cTkjW1W2fTy7v6Cdz38wL2tDKDoFzMgmu6pR6S4hGvuzfKWUUu7dSx4cdCyw69XyAv5beNPXmKjoDhN5gUc6495",
  "key47": "5Gh9f73T3KrQgohzkYSWdbabzquhf9jaSvqkZ82jAkA2DP2HmgREmDdnMG6psFoZxkzPsEgTxQhGGvm3r1S7UzcE",
  "key48": "64RyZbVHgU5zmWyXXRCCWsy8TBULg8ooDydacP1CpoUHdQZzPZTQT2rDYdSwUB9m5TQnTdkjD8E7DziWp5aaD8Bs"
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
