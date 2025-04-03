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
    "3X6Zv3q6oKJbbSttAYXRAT6TyytYtB1qZeShq2APr5vNKi6c7T7kbbXu9V7Gvfqsi9JKZYmEhh1CywdGSWgrftdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UwyZGF6wokvJhiqSTUnWthgquWQJrRXTvmUcXmBGC5j9YMP8yHdxTxocDRK7joBWSn3UcTae71M1wCuBsXo7j4y",
  "key1": "27t7z885CHAYQdWQGSzMQX3bKf6gcJWoRLQhQSmoLuE4TBFRhnrtHZWBbPEs41P5fSETWjJFxFERgcFSusE2wDUv",
  "key2": "2L1cttYxRUMh1R6NZSQtZidZTAnGZkaJLtgeVMNb4cFJobEvYTs5MT4VFmQV2nK37EYrVPvV8aZsVUTN4HAaDWig",
  "key3": "WE75HwgsXBQqtsmuHP2g7ZTRs2FDm6TiSNB8GPMdzG2UK9e9Jn5ThPhowK4L2Gjer75V6pu5VFy24UL1gXFdJpG",
  "key4": "46JRW94BYsFaeerfht6f66eL9M5NGnMVDq2C3iSMAR88MjtVfBtW5h6UwyF1jj2Dm2xg6UoyiBdvzxheWj7ReBEz",
  "key5": "26CivJUW1YvV6Jv4P33JyCARHahLzcfzKWKiH57yWLJowpvoJJKqN4iWQ9T5dzb78sizMDdK2UQrxG2rnuANEPD2",
  "key6": "63bhP6bcAhXt5GgQZhPJ75m2JMuqXSGeBPg73NFtyuEaG8Lx99nBopw93fhvQjPRgW75BZFTVAu8tZEcpdGJijcM",
  "key7": "383wxmKii3eDygyVYRqdX2jkgiCRWViprgLEQWybvpjFp6Dn8UeKPxxBK5BNJ7KTERJk4WgXAKYVasVpgLjrQNcj",
  "key8": "2zHhgTZfAVGq3Tnu2XYv5E1ECpnSdZsErcB4J6jxGFMABzP7RyAwkYMMZpe9rXxzvAYs5VFTukYwWoZNPr5DGn2H",
  "key9": "onCPEhtqqXMNhEjqza4Yv4R43ujD7mEpXQAk6mkAbVNTGYZZf81TzB7eUCbjzpCAXStc1R6zvHvDMdqydtTJRCq",
  "key10": "5h9Fv6LqgfHhZw3gQS5XZ57uuLBCdRRCdrVMu3S4G3WctQsTrLixPcbc3SwJHVXEaHQmAjL5fos4agRERmbFwbjT",
  "key11": "568WdacHRbhKcEdjhcZFZXeYYRj9vQYPJmsUYdVbCqg5MMiMxPUf6MpeNU6ZVTDNi3yxfDR9ktaMxXxG9neeQebQ",
  "key12": "5EqWYMi1hmergD7gQLbAJd6UMdY5e3BqNiHseN9jQ6ieMvcogHaK6TmpcbGhf97d7XfqUz2JxCGR5m2tCSEtfNAA",
  "key13": "3umUyY5MoqABstDE3mJDex7fqCQRvkot61uSvaTDvK6PVxhxJZqneRG9qhkSDbgL594osjAw2XYGVsfYQEmnPYHu",
  "key14": "53Dma8DpweNhmEvgUzdPMTPyfPPoSJPY51LZ8srrwhVDaTDayzzqXTVDrfAazqjxbtwEk2WcyWiFpzzRCmL3WtCB",
  "key15": "3CQy2gbEyZAHX5nbTQr9b9CdmiwN7uqRBwN3HidhorSo3W6DV8Kojy4VrqDQsnYPwg98V1QRnj6383EKVKmPyPqt",
  "key16": "4kbPvswu5RJCWPHvvRPLSH4UpemsaVBiyh59h3Z8Cd57z3GTfDFX5wuwqiEVdmdaZX8s4Lyf35aSiTeXWbsB4f5c",
  "key17": "4e3DHmXWV2uDTLyYxi9NqKDnejmXhoXqTRP9cz1r4qL97gLQ2J14K3imaJhKE2YBac3ubjFMC2JT2Z3SdzF9pVtk",
  "key18": "gc5M41UfcmguAf3H8nheZxJSiTazcj45qE5Umh56DNyVoEaV4RTpoa1DagegqP9CZvXj9YPtJbxfdRNkVmekxSh",
  "key19": "7KcLTiQ3fxW2hbefDfPTXKqqczQLSk7wPZHTUfn8W6TrtmFs75AbxU1mVETFifNTwgV3zHiFhhdDvjmNn7gYrha",
  "key20": "4dgzsgwcLHH3TaoF682jqozuU4KppZPUhJ7f4M5LBafncPUJixpMYRG7rzSzryQB2QQEGzqX9BTHTg4KgeopSNrP",
  "key21": "NE9U5YHAiH4UEBnm68huNXoPsfPayiN2kfA3uehd4mCz9hyy4n5koYmBSe9EfqBrwxAPf55cHFmbtfYKkPPoCYL",
  "key22": "5M9T66zMng2xPsdV7cf9LmRUQRZDfmBQeoiZZVHeaDE7b6heYQSMewqBP7acVtA528Re66t97p9ZfULJ8fjLp9JP",
  "key23": "2jpik86MT8Ri2XQToVFmTr96uMgatevXSME9QHdKKiXsDjbTbXtrrnnmpf41cAfBhh32ptZS2y1pHjfk5zcATwoz",
  "key24": "2LP5gxN6skQu6DBPWHnMKSppGUJfPRfxD6QYVtXrz86CGmgw2T6b2fRWzM9Kf1JHZ22kcyQypkjVHCFQWZoqC7QV",
  "key25": "3qyFsAgWbr2j3LBHJjo6cRHWtZkoiqHAYGM3NQdcPp7Neg2nDc9M55beBv3RXwr8XD2oK2vRksBvWR6MiTcr6Sub",
  "key26": "55viuziV8fnyGBbpxy8wZUb2SLcQfBG99ctjH4sMq5rG561FdDsGuE87Mk3dCAb8j3TwpxWcmXb3JAMAEVDjtYkJ",
  "key27": "38dww3iD4emPSTDv3na15dygW7kSagXvEfLYCWV3jwMBj6SGx5HnbMPza6KJWkYqXVpSLSRjCi9C5VntssXYzDJE",
  "key28": "3BbdXT2jZFj7pb9YW1Ws4GEdj3SFExhAWdQHZVdqF6TukUmutTT98rBxwoi96oZYxpbDS5Jjd6qPoE26UZaDASsy",
  "key29": "23msBAdbm5Tpu1JXvUX978vmbzXKPeXmYBpvYkwwq1fXo7nFqVyKHKzKXQauEsDK3tS6vSyspSwGMrRM79HKfP2Z",
  "key30": "3AQcmyHdSZT9Z14aGSZZqC6gp8z2RgJrzdvYhCdYQzHqv26c3R9dTUV97nJctg1rQtpUdcn3sGtACkgTbmzBPzTe",
  "key31": "49fngbioBiWxfxYKCfuUBD25c74RYqoks2Ko6u9PBFjfLqkGPXtJtvgN5koLbf1vXhpkcDW9oDzFbXewoi6K9EQ7",
  "key32": "k7ZCDmUR4iKxh5UHMSHXsq61EPBadTYoh1shTAZ8eYPcDbPqpSrwSXZcJW6aVxFpbzfFCWn7aJM9ZiUN1fj9T9g",
  "key33": "4ciRyxmYreakqyLT8h7tRxcTfNvdmf3yJb2PFRrbR9rzmvDcoeiKdMtYdyzG69YhAeCrbfsdTVWYRfHdx234Mh1x",
  "key34": "3RpavKx5Wd8MSnWtfuxqdRxUN3Eq3JjNqotEX6UU1ZsUqBntGAajmXpQXKo6TZv7CRnKLBuxN7ucu9TKVntBiiQ3",
  "key35": "34dFr9K6mHfMff1eJ4cvdxnmqR7YRc8UnX32MJ324UARm9ZteFvhQza3yeHs2xVJfp4C62TnHTTHcFroLxyH55E7",
  "key36": "rGhVwXNwRq8HPwCv2mYgZLzcJ6YF8qLuAvoTm1SuioqC1aQxof8TRx1SR6dyWRoMpkr8mSpWeP9hR1d14ttVNSm",
  "key37": "4WTXXCAA5S4xX7z4fLep2yCSJW3fe9u6CEda25aocdtVSdzmwJnSDwHXQb2noM5MbuDtDEosy3tmgspXiNkn6jeA",
  "key38": "3R4isVzyxVvFcoFeD4jurHonc7QqXGJ9YswcTpZUL2bwDkdENBAyxDXb8hLErPs4xdCnj8EL55G7uxoMt7GEYHS",
  "key39": "3oAVyXBTobmZvNBveUXeQbNjAg4vGg8ijFjrV5ph41AdvXyjkK2cVw4gjxYHArv9SpCSkxdcMxvWWy4Z44NHBJjH",
  "key40": "xKCW1MhSvyA2HM31f9uoRA2wgRneV2KRkFLNQngDYkFm7pr5j98kkswB4EjUKZvEV1PucrMb5LT3kqhA4KBRaj7",
  "key41": "5W8mV5WqeSAT6EJZ5Zrjad59MM2RK6qdECSKgGbzy1EfUGxAKE9Tsu7hEV8xFwjDdBZyx6TYyf11X6MmwSB9sRk6",
  "key42": "31ZrC4FH2LyH3vCj9bt4NuVaEBsy3vaH5pk81x56Jxr9g6iHcgoM48WneS2kkY597QFgH1jSux6K5jUKZxGS7hig",
  "key43": "2yuzsgTZL9BT73rqYUiqW9Fofw1kCos122jWCZiQZHHGn6onxmB93PfEXGXSpzEg6hWAyofJiqhuCbCbg52SfGJT"
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
