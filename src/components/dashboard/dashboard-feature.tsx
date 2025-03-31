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
    "2WReGAqEYskot6DudkVZWd2WZvGYQhGFnVbXRkgHAKJrF5gBTdvNJCBiRRjQeJFiLHTSC2avvCvKjZooiuUfwbPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mPynb9nf2VJZc2NXpwVymhTBCjE3JKLdsEv5JUywoqLk287udtRKojEQaqGupYF4vbCYHEW3eGNbkz3Tpg9fz5X",
  "key1": "5vpcvLvArWYUudzmauNntbkKekZbc16A6p3Rmod43RAe36pKMZ31PBv7Vs75z37XJAY1njWoN5EgD9DWTMFcUM7S",
  "key2": "5Rd81kkKvmmtv3QZVrt6q2wUdqUdhNWmzoFzz59EeT2qkMLm3R1vyDpZthbDpTcpe4gVA4DYhTZVDpogXZ7s6oQm",
  "key3": "xhrGWUoDDRd2Eyg8uSxhA2M38bq7Y1FS7iwmhCRu7RX37pGV9xkqEbM1LJN33NyRYEJtAa1916xVHB2H8sdtGas",
  "key4": "618xjBCb7eXvhY1DTjjpWiFhQDqeaMSG9Vc9pQTV3FaZJ9K9sbUw7WLzcrKj8ZNxMZLMVsB7xQdctS77asbScYij",
  "key5": "5PiuBzEK7wd8ctsbhu4gTzTFSfMCNhPHFTRBCCBBRG2wKfFW3fMsLzdNZQ1c4jJXjdKACNGDWMYxrrxNtANQxudA",
  "key6": "54gRsjHhvSZ3vDhFGSwaDEHGyFSUzVNGdnAKhhTAdJSGQn8GDRHQPobSbbGXBDf36rfDjR28VUXMAd7cnG5Q24zi",
  "key7": "3kknZguYPDe1X82piYgZHEFA6htzzNCpBTgMtynR2Cv7gpCcRqmmuoFa2fnTmirwmE7JVaNr38TuouLcrgViN8tF",
  "key8": "cNsrDojgeb4GxvNLdyyJFhpqwF4QUTRXSCNLL4nSD9wohhBHseWkgwhYsQMiDQVSdrv6jc4zYSyyQL3Fm82V9CY",
  "key9": "3SmjPwR73PhJs5yCvpbmru6iynTSHUW1VPcMXDLWkHJdKdGiAn1ZdKkrPLve5u4HdejWcMbg1UGS7NNoes5g16VV",
  "key10": "33f84JZForpbWAGKKaKVRXxS97pHBbCmV15jM5qqUnZfGUWVk4scmaqFqC9adcVQYmTw8wNyjQ2VLoGXgAW41fWN",
  "key11": "62W6Vb4U9F3xBu9duGh72uXNTSJ7agtMszYePPLJC1ZzndQhYfbTmqd9ZyKpVUiiiEiFBRDRp5N3BVz7D9Kb1fMY",
  "key12": "2B7S8PhFHjvUfYXxFTA6XpLzvg8BkTgZYP6SyrG2Exjrq9pfLw2dvQa4QUWKgXTeLxV85nnuYd795QjZ4uoJgHu5",
  "key13": "2zwVGKJ4D1dUgqwFB5hecSAAvG2Rfs5DXiUutgJnW8RoEhCdRRjFf3kVSDFRG98Rfhiez5wNvTqDXZZrQKCmscvR",
  "key14": "64KgU6KjSJQkrkLXkJtPyceBfFj12SrUHmZEpee2qYSVYZkqGLXSW7doh9wQJAeu3odqpZWp44EsrnohpzJLWeoF",
  "key15": "tWph4qZGBUWgRKwATiRWUY46uaVSerpMeWQ2MWcjvFJ4RLGR7H5ugvd88NxtrUodeZMkYVjhgZkP7U7YDdVvTXy",
  "key16": "5SB3PJzGXV7e688ahmogwDbu2DfpgSRZLbCRjnp88Tkz2V3RM31wTh6PDaYpujhN9oeiDsNqrrWuHL7rs1QMF78T",
  "key17": "46oteEtVvobrFzwaPU6eixf2DJ4s2yMa1Zou87abot5fhgWiYs96CabWHjqfjXFr74XZ9p8anoPZZktdSYi3G6hm",
  "key18": "2Pwmwg3YAMVu87uBwTDe6bhh9YkH2GQx6MNRtpwjDa5G7iGYDsUTSJjrmpzZS82TfGxaABjCt5EQGvBYoB8V3skW",
  "key19": "2x4yHnDgFVoyZYkS9wUn4gdNycVjfKtDvr7JHQddwVa6fCSyDPQgdicq3CAonHzriZYKV2YDEGAutXVmd9QhVVbM",
  "key20": "4wbEmmzV1KfpM826rLeAqWcEvJB52ckoUpPo5WUiKuBYt6FGgfJ1g2xQErX28sHkYw53roxB9a9UREh5MVES5y43",
  "key21": "2Fj9dooVF4k5Ja5PwtowLSAz2WGeQASis9Ctm5vXvrSiBXWaQkgdRKMTGzQFbqXPdRoZW4tHJWDXVApVNWUYhJHK",
  "key22": "uqseSW8JPo1fCJvc25wXbPQ528jE75oJ9vMeS7DkyAg2KEc6BYFKVciLRQ4aK15DURoQANNcBEJsYS5v7DvrXJw",
  "key23": "4XYCLZydHE778eo3RqpoDLzxmUUMA5FWfospaAiW5YXM9fMruYfUvMGCJaufsFeArw97LnSCV46hbucmATENNb1n",
  "key24": "2ES4vmXhjYGbicSMsCzYpZBubFCa7nm1pwnECpbvq1JNQ71TpinDvrEsa7ue8TJayJTw7Qy814H67guNgrw4uyK6",
  "key25": "HwKp23zcwLQfesAZPWt1NCUHeqfn9KEgc6ABGgDXW1ajLiMmUV1QzreR5sNm53wN21uiCr1p6kSWLgJwp4w3FsD",
  "key26": "4UdAyLGKJQ9eLRCFjxtFnj3uNCP4jG8wvJmMLDPM1Uh8n7QhjvufpZHWB9B2YUCaGDLKBozvwEPACNrpSdsoH4iz",
  "key27": "21fTCmY8WvLM6LyQwBMGdDBTFwYTuxFib8V3RQTNpa7tmi4XF7VRews5TF3feTjVVddUDfH4JzynV4N31PpqSKEf",
  "key28": "5uFZbB6QhuAELuQgbwdN1PXxiUAGiWpTXfrVx2twJAq4KaMkvxJWWA3eK42whcnrLWp3vohpUo4W1MhEejd3dMfo",
  "key29": "4Pud6TdNdRKC6Hv5rMmhkhVzsm7L3FCV5rmBess8cG2RwgSSPuTKPXdbVgs1ygPuM5JUU9G5vFNkBPzXaPSNvkVa",
  "key30": "5WEQkkfQY1FDkYRtsopuqz8nFWrugoTbQX1LELG9e2AupKeSyMrGAFmo825d5skPbScA7kLimKAJpFTUbwDmy3WM"
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
