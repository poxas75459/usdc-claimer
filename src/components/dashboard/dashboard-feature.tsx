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
    "2BRuogFbeAFMEbRnEZRCEoqpuhyoqVsssfjZHn5utiThMDMVAKo3gLD2BtNAW9w8nRyp8eYpoKfFhxNz7arqiG7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ULaZSjkxiWGsxL31eKkXNnGD8wxbnWD3EUkNdJSDz5erzXC98WwsFLjP2fpFzdvvhzDMnqGfnpgPJbTExBrvF7F",
  "key1": "29QYANp8LBPa8SjQso1X55aguKiEjc21dj6cNPbD6apVu3EAaAy6gPeXJMyoeYHXSByf3ndCQa4tYHYz3X5m2nrG",
  "key2": "6LdBHnTVwhnHioaK2mqPridy4mAaBNUHTCJtdDmez8VLdL5QSjXJiKXTtFUvDmbouHk17tPmRa9gF3oMWXz6moE",
  "key3": "3Pkz7X3hxx2YcHJPmjK8R9idE9eu4Y1FSitfe4aeZsDoDCg46ERDecLQoA8duva6vgtPuaZNjAxBdrEPaVKjjjxb",
  "key4": "37pDe9jrGvqHLVFAF1UkKUtetxywArgyMTTnJ1pHkYmLtHRU9oWtNDhX34jAoCKJwBcJqDC8VeZ4n3BrinvB7JWK",
  "key5": "4sfifBa3BjfDmw5yU39mFxPFBfqtaK3DQZkbwTTX9eT5whzbku8Cp1dci98eMLGJgmwGX5jLMwJg9XTX4pwDi8Hn",
  "key6": "4zSJBrhSyQ7U9dhjgdFBZLFehuM7MXdYsip2CU8Rucx5KUh3T4FMhDmEVMvxNK3qkT9S5cvXWviMeQGPg6Qz1zYp",
  "key7": "2S8YLMcqtvBr5yc5NqbmcpEomMLwsxRVh97Xxp5qvEK3Kyo4UsmVsJago4UcAwu6Dz7TbvHKsBSqK6gbLSP79vcn",
  "key8": "5kBjd9ERxxcEtoZV2muYsEWDWaDRyxadnpWe1yaritCMrWTi4do6AbJKbsqZsSmBuABdaGBzAkY4CUZx3GmvPo3X",
  "key9": "58wPxz3ZAv3TKrtAbUjKPEjQFqCDAiGwDNhctJ9gZYXZw4hDvSDR1hcb7vCUKKpkErwjxXXfQ5ryy6VAkpAK5mVT",
  "key10": "3HtydpJczXvkuh9zrXheUKgRthrNqZfiYJWkUdW71bxSp9jdbD1W9ThbmRNaBjz8G3B9PPppuPLtv3ZHuFNABfFF",
  "key11": "2r3PAaDbcL9o4Wcxf24ePPY6CeEj4JK8EVjhkPce6JMrgn4CYGfJxvUsEUperPAjTD2jBPkAMe87CKUd12iSK43C",
  "key12": "61SYQuLdRmtfCL5R8MyN1GAzvnQxEwq49g56CTYJXgi6px4VyfneKey56H7wodPxAnQv9HyufA4WTY5Qx6iSdN1E",
  "key13": "3jGzouuM7dSmagVBK5gFkEaeKRAgHRppoH48PuVzsZ8bUhX6NJ4TeL6axFBCs619Q76JTbUS8ERPMnbk2ThgMp5i",
  "key14": "5NGF3GqpxrGvQYdHod1vibuWUAu3Z8URCo16Uh33ZLkvQvMV9jdrEj79k6zPrKunjKAc7pKfCGiiLJwgy3BcU2v1",
  "key15": "3f2StdsfKtLdAxb2Ka9wFC1UYWsaWugBNo6EY5iPYUG5YJyBy8PgYvhhqwLSirM4Tn9xzFyMKsVVXoweiUyYzemd",
  "key16": "27xrBtDdraGD8X5kMwfi6GHgbamthsBV1TtqCNwvjGCdfFuTUh8vn5vgTU8Nzatc46qf7qSqaRETkioSzn5UdkJV",
  "key17": "FdiRnkGp4kr4uZnH9LtgK5PPNeaiEXVAutZRKWPfkFqyLkL3gxqnwtfuXF299EF4LcHnEmqpNkrYAC2P38xNzUp",
  "key18": "H6wiwXYzqnJm8McgnmF4iGwW7B15azKJej6u5u566JoRsQW9KLZqq1kBhbKWDcoRtPs5RwK7L1tL3XzEZdAmtsW",
  "key19": "5XnMXKKXyuyUwkJwnHD8hBJiPrwgFSvfuFybjq4C91dcf4YXNA2ED4FBBHbBMYye3gZyhMo7pCjL6GCBAGvPkNXR",
  "key20": "3kTmTxYYnepaVzi9VU21fk7sCuLWB9pcMuwA9UDjbnB6xH8MzYvYV4sJxZiXKYfqk9Dq5VpL552KjVoV697EsXoV",
  "key21": "BpwKcS3LyjpceAH768nB97swDf21c77r2KKv1yuwL87gqoDtGjarp5d1Kipb9St84PKDia42ynsyZWb7gENqwGr",
  "key22": "48imQPzeBUBWz5socxqECSX53nw3FdNz4PoeF3TWd7p58rjPt76bM2P9YjwW7JcLaNtfDLdgYcY4tNFppoGCCCtj",
  "key23": "2QGcGWexvRRPffu1EnkcmBQpWANYMugAA3Stqboh9QAeJqCbVpZTFhepzMDAUaWQJpJa7uttL233Abmfrfevsvhs",
  "key24": "E88t37gb8jZ5gKWFLtwcoSU1NTWX8e75YvL8nXEpapSbmV25Zu8edifQ7Ko6cVE6dAVUfWSoPz4R5hQJY4Fkk8k",
  "key25": "shKQUW1r6j3gR4Eog8hRZMGM9wDZFZ9gGu5RJyRZiMt1GWSZo5HW1AfpVRDqM7NnN2NT1YxxkdSFyWnJZTbzs9p",
  "key26": "4uBrNbaL8344CxEQmaD9Qn86GLv55XzYiDByVoDqbzoiwiJ8qG29yvJdxX8caWBoDohw3qs8YrVJRJQzjzxaa7nt",
  "key27": "4h5JnurFPkZ8URaUvFBVVkmx53acAUqWgpKtfr5YMXfn2zkM3N6jQEVHDVj4fNQMKkUELMEdKmiqhfAvF5J8aeXV",
  "key28": "4nMKXQCAwetST8939NtfEBdn2RCWnAcHgneAXbFMiEMuVQDTZ3RFngYUv3313nU2asrLzKqtCQQrh2VtDvyLWb9X",
  "key29": "2bRaNsLqKru1JmTSfRwQ9iiYRPbtLDpgaSMM6HQZHQS1BqA3j14SNW6K8dddHBgFRYDA93n9DMhxjXhS76BJWXGR",
  "key30": "2dTqxzSi3aQGNXByQrRsXjV3XfHNFab5UCRfMuq2KoGiJuAQRF9p5de7HjHyj9fDbHPHRMC3s5UVUH7SV7BaPfZt",
  "key31": "4CNoy24sVP7qVSrcrnDhuDpGcsdqosEHcL7h1cmvnv5SXAtzecWUYs2u6xTJXX1Ep8DX8TWf4JuRDHQnKgSFT4Z8",
  "key32": "z8n8VA2j8J1XLxQZLd6dYpC4vtMaftQmvkQTEKRX7VTfPVv5EBc7SFnBnFB69YGuojpiph6pY2eiPV5xGWBHDc2",
  "key33": "2VTd3tq2vM1HmxaiPNZ1ivdKNB2A3ghYAKjjfupkFXc1SVUGN6mGjKpjdRGZKDThWCxZVPxvveWEE3vmpbTjwBnB",
  "key34": "62zLwAqFnSxbxdfUFqYwuuFa6dN7BhpQfkrPqFiLe2sFwv5GsJuZAAXL4zUkFdGVwZV8cAye5kkiXmCFdPweHdjU",
  "key35": "3geYjBeJmWZGSi9LuDNyP5TkCpJ1PUyqZx9Y3HU5nEyjyjQm34y2DE5bA2m8tzL6YSJLZxENbx9jZQYcE665peum",
  "key36": "2sfrrUcZSwTXq4sytLxUCf7PSSPkKnvBhmndL8pTMN2MQNsjRoxhewNE7m29vPLmU4xti72T9GG28wNz2oV6JKse",
  "key37": "3JYTswENfDEdfzFjUmBYZGyNioSsfnxy5FAGXGVn8pcw2gnqd1N8qGeM7cfkoVeTc5q2fVZmyTV22wUYBgounmAJ",
  "key38": "3ioZZQrjKFaWq25Nn8M3SCfqayVmi9HpJiMUnmcVMEipofSrTMQZM9yHi3FXtVVFvbQRnkRvw9vnH9aT2vvBp1W6",
  "key39": "WyttssiEoiTZ8QVmxQdMX3KuJY4FnLUGDGjcLu6si8r43WzRxr2358CtpQjbPwEkspA2o6mjSSi4a2u4jBUmKVy",
  "key40": "39Nc5gmTLkQct6mc2GhtwuAV663psCkm1RePnbm798D9DkXA5DtgHUsCzLDLpmQ4zm7evBynC8TscXHUPLbwByYr",
  "key41": "387VCmjfP5Pr1T3V6uNdSN6mjPGPSW9UGrUR5S5jHf7CPEq96BDxkPjeJtpbkPxvqRSAVmsyeypFd1CQ7JmpdYpN",
  "key42": "AnDBaiHgoLgrtPjwRbY9aJ5sHN4tVtLPR9qtUeMSVN2yWhvTmu477GqyyNp2mawJsdsx93E7sZBebfXPaiQsBE5",
  "key43": "5VwoTrb1xYsRm4t7i42UH4oLdxU8WB7RFgbFqzgX5gh4HXg2qgYjFXkbq585PHN8CK9RdMaiyKcgqWa8HXGAU4zH",
  "key44": "2xpCzjgqHENYqFU4K4ngZGDfZ9yCAoNGzavVf8YyFHTBKFTVLoruyxYFvroikeXYaxV28mVcwCkDC7Udf8KmzY8x",
  "key45": "2Ti5wzaztkEj2c6uSf5ja3Fs1QRkUeBUE2qgkD6jF1bsz71UqoQNRcrHb5UBMi5cKMWBxDeaxaPg1MnjJph3RjHC",
  "key46": "2KAtd2p7GZ5DqSTS8VJhS5pmpX6Gp5yd4gma1v8XsgMs2RViTpriSfDFYnkgdARy8D2N9PsRmJe2jPXnaNir2wNy"
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
