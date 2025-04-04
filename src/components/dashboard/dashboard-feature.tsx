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
    "2ffhnaygfEbQ4uP5cTEf25Py9F28kn4C6b1yhCHYujtTnccgvNGwvsu5vpMSNNc8VUyaiXDeGfC3sc8dzoarPVUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WxzryF6hSFmEZb2cGR8t399J3nmqg9KwHKqQNktZrks5S8DAq5vS5mWom2sxRukmB6JMzhk914WQ2UfPfpisVo",
  "key1": "5mmtiyX8UDxxZU81M7kPJCA6BLVLyAQMxfdQoAybeZiVzCv8u5qe6s6zSsTn4TYwYwxpXXMHMyo7tWbkyXyjg9U8",
  "key2": "5rnHSerDJ3tuH5iuo25waj9RRncJTXtBiGgewrZqjYutxd5obSeFgXe2yAKaPxhoKAv4Wf76Fvnw87TNCM8FhNti",
  "key3": "5xocvbWTwhVBTu3BXuUTxwxf2SZTNMzj2rDqzMq18HPT8fEDPyYtsp3sBftgyVpTSKY6M8JPTWqHgH6dfbkexxC5",
  "key4": "3eVvLiL56FABGyW15qr1hLZsPDNLpykfP113oSB1PiMtvBPEPwsbMEnu2qQuQu5toYeSQiGjiPfYLKZc9Wzd5eaD",
  "key5": "42q1BkzzRenD5RL2xR9FvYjbXEpFURn7RHpwVxvHgrdxTGeZLTVtdhue8AvZbwXnSzLuxRwLBNzseuKGU21DnvKA",
  "key6": "2xnSWSQTVsFchpo8ayWSnnR8r7wYxy1G8sqWKUbDYcDtGJe4CD82ruw2dz6k8fKeVT8eorJUasAZcVYxVP3A4YMW",
  "key7": "4yzxjmWFT6UdiGoCJXyJWpH44cnEi1r54yuGCnerPAS8ioUWhYLxUewK6wVRbrrmU52FWjzYDZEeC5pb7Ycbss1u",
  "key8": "2KM83vpvqJU33xPpm5uC2qUPJAsSQEjPnV2DnJsxXy1w3uTFEQEmXgkuEovgMBrdMnn8W3nC5rCUAnjnq1FHPWg4",
  "key9": "5W2d6BxZGV6FYQkU1HTf4NfB3jysGYYnsVStvuPgCCYJ1vwCgaHN2TzaGJ8X3BqeREBTNWTygMCGSXp4YarxgEH",
  "key10": "4EHWewoG3bfy6BqCyVvrmUvwWwTVya1axJKMEhXBdmHf1Ub9GCj8s9neCrtVYEYUTJqYvMdxKgyjDBWo3TM2tRUL",
  "key11": "4bknjBJvqdu4idHPz9VE1r1pV74kFrfcMaCSiZtZ2GsEW9wJwrBinTBV8c593Q9SoaFUCMANVQssWwxg1RCbbTU2",
  "key12": "45pnkBfMgqfKFfw3bopgwevBpcN6kKT7G8Jr6jkK9A4xnT2TNzYpT7WBHRCfyEF3tcHattdVneyaMBFnAC7RGyVE",
  "key13": "2AFk2CeqUCaEJec9JGqnkK2jSnZfJ3EMXwige7sp2JQrWrpdJ1TV6qp7cqgqHHnzbWvws2H7i9KGCWj6NEeQM49c",
  "key14": "4yWUpGd5VJoZLsqQFUzNATxvCz6oRKjqCGcqPoibYf1ttWt7XDendQXqBJTqhzqeebii4Bwjpc9Yz1YCxtpF4PkY",
  "key15": "4uW9xznLMPdSQ8digreNtnmLsjCU5w8XJCv7TiydAmoVgfhiukBaiTsP6dgp32kyqC3NHT5rcJEWFkrSntU1gfzT",
  "key16": "xUygCd2Lv1J9whd531vh6uVvrjMonkWriNh6u9BRsYMhYL8QdVfh1zy4wCJ5wEiZn3b3DxMnG9YQE5N4YLinkTi",
  "key17": "5GUyGhEKmGSHFRkPTmt7jrHVFLm1fKWTVa9Vn8yaN58axU6FZCr8wDJpTT9XcCHJL8XmgbhDs2itgzWyiXTTkyMr",
  "key18": "2fCU86Be2SVDUaidujhtjzeYqzqpunUtx7yxtKwhLBezhmXeRovU26ezFKZVCHKVg7AFZ4irdBRzB3RFPhScCRSQ",
  "key19": "4KJRAF4HmtKnU4MVdkxpJnnfGQEXYcYvmyyoiqJn2t6oc6eDy9jGZW4QZ2N58mm6yWHUEAwRmWQq7JEkSHQTn94a",
  "key20": "2KhUoWjVLn6yeQTkEqzpSMSiheW5Kp5AQdb8uMue6hQxWvMB6sF55Kwk6wVLzTBYDToDemqzapSEwHfmezHJwPSH",
  "key21": "3cwPi4KSQKHftNvGAGkfB4cxffKANfd32HxvqXNSAjCrxfmm6xAPutdx28EjemctKt8Wpm2GNvnPHJ7nk18TxBo",
  "key22": "47m9TroTyRMZ6jsr4apEi7mTQ3mLopSfgeLKw8ohQHrwUp9wpa7EvZsTwsKychTz4cSXsaWkJXegpFeh6fExtU9f",
  "key23": "4fcb3p6c86HZzbN9W8p3Rv3Xcn9uegun2E3es1E3mShbKRdTF7SHKBmCCrmqC75s3BAT77851TpptqQkE6h68knZ",
  "key24": "99UwhEkuiyi6hb4reEUC6MFuWKwdsKiq7LwFJ566yudgg2Evez3BcGBGZ51dfnnbzhpBJ9hiix2z45Jwh1SDi4D",
  "key25": "625Zx96TBc88Eub7tV5p19H2axpi3Hn5tk9qndSxodbZRddPs9adQDUmh3VnktGbPzh6hSAJ1Wn6Jb7wHwrTm6fG",
  "key26": "3y4GSwzsa7APC4eMEcuAvSvS7ZC7x2ksUR6EBAMBh91Bwi9JNcmGFMuSYKG3YSA22CmzLXLAZ3thbbZR1joqG8rq",
  "key27": "4odWi1cwZzc9quuU6MCr2n4hCZsChWBKyM5dZHQvUM2gAQ5mBoe4a23HGfZbKTJdtcRy9WumR9ZxYMFp81GWyM7g",
  "key28": "26fdCrB2bZhAzcpdXcazmLQcfQBxuNQnPWvccAg49k7ruGpoTHRy5ws16j3Ukq1ggc2MbT1v4MsL7qRkrWaovfdE",
  "key29": "5uWUoqY1NguC2a7uhGjMUUNh72VjAWipeFuGa7odewjA67jrkjCts3uceuBNGqtgomx3iynwJxAv4aGehB6FMdrk",
  "key30": "5svZJm4WYjLMiV83scbJUCgb2zLu2tx46Lm53Mo9RJzKCpf8vA5DgK2CsppBxA8e2FovR1KdnbrazeSUu5ZFS9M",
  "key31": "4i21TSGpJ1A7f2r9pyDNaArDdk7ZwS43JCUeMQpsbVctjwm8PwXx2pHdVFLWjVps835STuj61fEVEc8xWNuzJ4Qz",
  "key32": "5wgfpQKhVscxVfCfDKuuvSkCc41HfwTBzGe7EbNJaN3SHPfiesQiib7K6N47tW2KrbeTggeUfHUqP4aD2nP79Npe",
  "key33": "5SNcnA87KEW84M7BQT1ohU832NqHWfBZ5n9YeEkyKEjHzPgt3CSix33NatE1kWjnrok3JYk4Jp5m4uqy49DHGQuJ",
  "key34": "MUkQdRpUn9ZaZ3ot2d2iumXZ9jNig75hf2spd4Zf2teM3V4SNJS35DdmQbrhqfSugoe8PzyMoWEiL6PGG3fEwyU",
  "key35": "3PpmXuExwwkLYXHZqjdz7Vab5MqJ2QoSDoNwDEsXZJBpekjELAx3us8GqtrRUVNVqya8Ty2G2ZCxi8TcXy8SWgnd",
  "key36": "mujoGRfdBuWBoYpeNpV858YthyvNWDcUeQiHTJQryqgrLK6Gz2SigCyv4ALbUXbZ2cECzvKqVqiKpiHfvz5JeVp"
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
