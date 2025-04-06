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
    "56HZUJ6XRXiFtkCbTK911bM9yMHBj2yN1TC7jM6izssdJv1hNBn6HGskb45rY4C3jABEauvnHtQQ8GVAjnLrYZkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MNdWnV4jkHdmp5wcwXrFsQvTsWS9VnT9xhWGfjoMtWAXU9RDWoKfwR613bvcS3i3fmsd57M9Fatrc6VAivwCSQn",
  "key1": "5YkDEkQ9ut6fd9QxwsgzBRah7iRTrsQLTWsR81NT1B7L2w6CUjkJtf4V9qx5wJM8SU976hX6it5m2xyCuaKfjyNF",
  "key2": "4qvgHzQ6cVyQv4dBzBHTtxx66tuAFKL3hrBKVpjakd1CiwTAcmFNPuWi5JsQxUohQ7UaH2ZdaHaGYiWFxE5MLAcM",
  "key3": "3CyMWCTWwk9j5bPL4SbGcWq8Qqpk7i3N8K8kVgTD8UF2Hm3HdbNvqmRTVGq5c4yxjA5LJ12NtykotR7cjnQ7gHCV",
  "key4": "2KxCALNRtrmCukHdpCFVUaHkSGuKn9mN3X7Uda3Lk4EKXuGiRGnvpXPzHK3WKdkXky5BUiNgW1WFac6vq65A88Zp",
  "key5": "4tmWfpEoXav9MCuDf6WPRz7vtzQhdgybybK8TyUKpJFMwthxkmaYJLGNyAKX9aWr4mavHXhvF16Prm6wNUeDDJp1",
  "key6": "Hgovj95UjDFHAnFx4zzPRLmvVm56JWykuXmYtaGkQK7e4McxLJj3G1zwze44LP2ckc4Ya9eKWoAPP4SxbmZe79w",
  "key7": "4KZEu2SJjdYGcj1kTpFSnBHpjgn9bEHwD1VWjEj2PqwEQHuJ7ZVwTpkDp53BYdebj1ixtgy6MSsn6prunecfGNAt",
  "key8": "npEL4gxZJaC4as2vUD1P9sAZRpUQh64Rnmts46hDbyhhS25MYvwRK5x3S7MDuxLwLVwP54vTZHJHNi32s3rAqc1",
  "key9": "4fcNbHehjoW5wSMocK1D7fNGWKg7WNdFc2D6srZQCxJ5JTjXDwA39CUGDSbXF53spnYk5hQhdtzAa8fxyXZykKmZ",
  "key10": "EfQzhdjFGQPZU4eNUg4gLPTR45VWvqavCrdr2SUc2RmyyJNMUJ5TDfLpLUHBgNmHS3kcXVwi7rF7XYTnwqhSzhC",
  "key11": "pKb8HMAfPkvYHgHByzF4tBaJ7kFSkhjsZHzpGMgRx5Z3ZQbpC3AssgfXPdraDwb3FqdG1pa8mW2X12KKN1sJZc5",
  "key12": "5WmzzjdjFejvNcbsuEYiuzXKS9tB4Q515fBzuvhVbDXW9DQHn3qaS7jgj2yeN4DifGaa1615R8Bazxa7MBiKmifZ",
  "key13": "4QWfUMzUeMGDTWeMmxsDxq5MfAt4ZA2DMkXDP5bBoaxbU5HsP89CSDkV75vTz9H3pTnYGzFGPtweTUMsD2uWbQog",
  "key14": "2j54PVr7dD2eJbZmTdsh1EZVM4YX9xQDjseLd8PYQg7nZsgp4KvYuxcTRUchHtpjKWtDS9CRKMpGDmEpqMAUvAY2",
  "key15": "3uXEYLzUQyCi5fFYuSkSUYbdHJxVbqaSXGiVaexpuC8bJgA6kLWxeQ675gsHgwLCrDjVXb1CdJuzVQagGjiJLqoT",
  "key16": "4uXyaKtfWBy6C21QiZQoM1KEYqoHEhJtkNyYLmP7duGcrHxAr4K2C7e8zTGejYr8QwTJSUJdoBoJwvJNVRunjPhB",
  "key17": "3RJ5ZzRd64Bh66o8zRnGFWEs99J441qDant5AonAGNcHUaK5t29qu8w87aNQHfMQbrk5cP52RM42EpUux8VYUuXW",
  "key18": "5v6ZuG3BzDTwq9vLLQEwM1SL1ocjkErskhSUZUzFkibGvbrYfCMJiuL8d6Zf9qSJfa1hzSFm4CzpbhvTZe8GXRxj",
  "key19": "3cSXVD7SPMZc37YuLgWEhxCQepTyEBfc3QjzEfEjYQr1aczWxv5u7kMEBTZBZ4FtUBseqbiUeCwVSHeP4LGeoWdx",
  "key20": "5MXatxzezHdGA33e5D7uCN11WDWQxJ1GsSGv9nCP8DCdvwWBmR6LaP3LfHdteRVum1xACfPjEXPgfxRJUSVPUroC",
  "key21": "5WuJPN3z23ZfXn9ZoHhwgYhrR2n9m4yrgH5QTXNeRBbL5hZxuyuJ51KTUvZokieKFUUN6iPmR3vufGtYtcpSz1Yy",
  "key22": "yduZ4g8VsdxHFDaCruFQfPgionewoj5zKkkjvV9ppkNbiRdQw3Xg5oaZPuByUEHJy9jb1C1F2YW9dvCnc7nUzdh",
  "key23": "5NDXhEF3QmrHuQLgkENZEg4GRHhdvQm5fqiWfLjyXc2Pa2KCunwgNbCsVZo5LUdfts7coDMUua9iNmz4786wmufg",
  "key24": "335Z6QW64NAPg3UT11qEkyrKePNqpmGe4gtc2MR7jLwGb9bRGrpWppnSVPJcD76DHWeHvr3Yc97c3dTF3L3u545Q",
  "key25": "4ALEnvVUsq3866yu3hzF8dTYHLTfri7iriRRuUt458AwwNcfzB5V8LLQBSfj6Xjn6LAg9rNE2x7mmm1FcPCRKryW",
  "key26": "5N6MvKTLPrkUqpthyR8vMZ1AWzRR2WuT3cL4oh9dSRDFny4k1HeQnASmpFhodDQTMSRtCgTqqVC4kdCBzptkBph",
  "key27": "ChmFsxx1v7JXvzZ3e93s5cJ774BXab1a1mZnPnCKaEeKQHmJSxUHFkCHe53EAFE6acqMCuSLnxukYW5LBd2Uhgc",
  "key28": "33NBTKM2Gs6AGZALSfc34vZDnxD99MEcMyRn9K5gmmpSetxignFHW8eiMQMEqmLG9puV5fN37GJuyafyF9KufJqh",
  "key29": "4d7shMGHJ8vKKuMLiGJjEiUuzX8TdUCPKciktZfYgtyf2GNaDNyeFSgaVyxrQQTCgiHU4KxJXmnuENoaSwh1pgLh",
  "key30": "3Lp37scVq8Afxxd1aZvGYztrvBypkxLuMmSXoE3ySwAYBgrTu7hYTtb23uJYnFFjjipUFiYwyny6PymcfNECA96c",
  "key31": "2Lmb1RPYccfJVCyqieQ81FYNRz26ZBJ7CnEaiBbU1VsXDoKv2rkGBvgFN7SzxCcbaNv8TnwsSQwocATMSyqGMD6H",
  "key32": "2GqpXfax1U5oX7dqUYqdYkadmfotxFUcXFv6Crgov2e2GyEHf38YiZPsxDQdQ6Ryjj7zbhUufap7J8XRjkk421fk",
  "key33": "5oHZCfUxnpNNPup8JCp4bxZ89x9EkUaQdUVxSJGVX3ZQQNbrs1cVZ5es9g6VaLjsebAEcrtkkJsg9u4FxmJinXJy",
  "key34": "bBa6QfbQapk3cbvsAb6v7A2MUsnBDZUa3cg7UL4GU86J5huT8tNa7EycoCWA1DHd8qCD8zrPebeNuEB2V1iTq5H",
  "key35": "4G947sBsKbg7onBvNmWi3wfd2TH7qQF6aHKUVqpQXz7HojxhbT66fsqi3XgxiZBDNhyGFJkNn227cdReVFXsCUhG",
  "key36": "RRoBqypkQgBrMFA3BLQCSeKdjQvqcc2nSumyFsickVp3rKqu5PAKS1U3mPt8W2tsTRzY1dgHKfTSnJzNX8Lebv7",
  "key37": "3Yi14ZgJcouVcfxmN8kxULWCDZC6ngYrLAw84EAsPienwKoHsKK9LKn5t1nhERaXCTjcE5EsCUaxyTJanng3uxTD"
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
