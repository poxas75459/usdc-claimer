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
    "4wF7trDiCQhWYuAkAZRxM733ofRUWWMXy9JYt74xbkW1qzjSbRNKwweYwAfpVpCB2QskBUVg7NJ5Fer2CEizDSFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xXDSNwCFTNeJ9AzUFPZb7JLv2RwGAgpVsx8TbHkzsEc5qBQSuJabTqNm1oFrAeMX6XyVhUWL3BnRBjD91bmCGgV",
  "key1": "3EXp3Bmi7u4ULzpwxJfDpiKJs1QcsvJwEpZdPrHtayr2qNLJm1YVDwx5tHdNxC3vzpJ3yMvTA6d2RAZ6XFcPeCYL",
  "key2": "2LobxMGZNsRU49jmQ6EK3Muajgdmb2HtJN4wz6zKEv32wwzGhd9FeWYgvzmewz3K2XigMFhipHgtKEwugGuACpUD",
  "key3": "izZ7pk2jKszaeo3QBDtRAX2yMgc2LWu5PSBPWuTEaKZ3k4W8LCGuJxNCXwnykgUsGYis2H3DhVnFozv1kwRcw37",
  "key4": "5VzGuYNJjYk1w57qZwcHGz2yEsrjE5EdQCffVSTVKPsHqV6UsiSWv8xmQBfXR1GBRGgA6UuFdiSdUcYZ6shc8nRj",
  "key5": "4Hbqnvhbo36iZkPTLfTPDWR6YZadFrmUrmL9cJwtUwE6fwn8NinsxcMME8PB2ryqpVyLcJyYCKsf36hCvNkf3FA2",
  "key6": "3pv9JQzsdbCXSUT9WYDEQbHAWt5Qg55BrxDjWVsZEWyLvRSKHVV6DgZ7arFigQUmzxggBVUHodqQvwFdfuWsBaXG",
  "key7": "2R9431xiq38ZPyrSXQ1pHZrbPE3GufywzTcp4RrNDh7yYaBnvuJJmAfyG3pq23tcvZ6SS6SXYxk8aC7pTy8c4cuJ",
  "key8": "2q3s4vxZDWpGPnTYVBbuDSKWBYthZDQHN4SkbfYTuixUShgE3SxVsSa11n3JgzaHkKaZxTpv3TxfBQo9MrGXHrN8",
  "key9": "3CMUc3QeJkRWyzsAfTgswjQaXZDS7oTQJR8RS2jr1i959CYQBgnrt4kY47eUT8MwmLR49nkUtDArEdqNG4kquVSH",
  "key10": "5k6MQwfqiMtgcB5gPgdhR5QPgPhyQ3JhGEMnb39V7D6mZ4QgidD46qhGRMvhcNpazqCiRzw1ZH2Y4Q9GHAf6cgXF",
  "key11": "5Pwce1UusGyES33ADuECC5vL63bpMob83kF1V8UqgbLPxufaFe4LfUanWqeKo9LZfKWvgsTdUJC2Y9HyKRoS8RHq",
  "key12": "5g5cahGHSRfyvwXruu73jZC8GErZamDX9J3P55MxpgNaHehY6d6vsU38teskhfUqoA4gx9cj6JbhUBkyeabe3WPC",
  "key13": "gyeZNUuXrfVvgFnx4YDcz2xYJm4tNSSyK5QiyGvpCrRk1Zhc8ko1g3zJyRDAeWrFxSNhVXXxdmZ4NkwwqkPwPAm",
  "key14": "MawDrWTgkGnTtCB1ekBQvJ7inSPdk8APdQL7j4HrpAWZHMgC1XYW5j9LBnDmD8cotDewJWJZgkhxywLB28RLZEk",
  "key15": "2MXHDzMfhXtyyE6c14Ku8nZgddRSrqCMhS8ZsXGgKPvfsGExnQiPpcd4ux8UT2zCCLx9xdf82cKEswTYTby2bnce",
  "key16": "PoGnPm9av192W6SirD664zkYe2tYP2g9CiR6CQZ9ddo9fyJUTGAUuRgMqEYVGavJNHgHZkMTicFsZaSYVdzLegA",
  "key17": "YSNRh49QsodNEV87ybRVVrUvEekgC8Hnn6nmbH8xRcWajiBTGBxMzUG2NQ3tycd1cBkeax7H3f9vGqPTWyKwFL5",
  "key18": "4r1xDvGDcgL8nRLtC28hqpkCV5mzpTkYjMTyoSCB7AKJGHgXYE4ToqcpzRPQtYTeQJiKrPAZfHxKyTVuU6zoSbYs",
  "key19": "34vSHGh8ictqniShnAgcUKhcsmwZzxcbuqGbwVXgHDFCd8UHfejfNgUYm7eYkgdPip4bTBUkfLubr9Su9bVzmfi5",
  "key20": "4Dap8P2L1LBTyzkdZgnNcD3XJjgpquiiUZGfYvVuNoHZ3kgFAxvDJ8pSgZX55nNModN4HgKFQf5tXkVi7oheuwjR",
  "key21": "45o8GG3STmN9MARMf5FwsTE4fmVDnstnzvbiRXKagYyy57eWWufvfyMSNKbFpRTtM2t2AZvwp93f7hUEzjR93ofM",
  "key22": "5gD1Q6JigQBBwrqtUk6riEMHoryt4ukdjbSYad2u1a3a9F2oUUtswEN2eUHdNJkfmpWjPs7zU5zPhb7C2znyNYKh",
  "key23": "3LVMbmjGZDjYRf3BxYNAnBjjdDjrHrLUBb5vXknMVXF4LyfiCDZfPCzh2hZo99tPFkhQqRQZmSQAEiUDA1Uis5VQ",
  "key24": "4af1p4izXhCn9HiaoAgMFBSHnca138MDk1Q21Nf3MMDiyhocihtTX82GCFTbaeocotjtHbPKUCMkmzL4QyQM8bo6",
  "key25": "3bh1xJ8npRwP7RgKZ2RHFt7Gs2L6QKacwThwU78guoFJUJmjeRD3RNuNyoeCpQMRbH58f4SUHe6NeDdatMDWbZiU",
  "key26": "4yiP3rasXjadyeVDXm1dqQQksimhu9Mpq6Mi4iu9VKngUhGEAnV7gaLLPmoprj6DUumKBpg9jFiptodzcFrV5Hva",
  "key27": "3ri1yUGcLytHVVwjUPdDrUffCpBiWNc1HhcyMYWz6xxhLs2itbfaEhPeWNcVGxceTYbDGrEQZfyPJfopidWqcKGm",
  "key28": "3bYFUJw7UHvpX1jWu41f1TMMJbpUMEL9BwSiECfjAwkFQUKWwZdjFnSxjmE9oHWttLvkWdsLHTVM8eXeoGX6ZEZG",
  "key29": "4YYZRD9inC5roqovdpsywG4bGML73qw2KbQD5fs3jGwvdg4DdC5Jx5eN5FqxZ9A7y6TYhAQeUc8cZ261zfFpTNhB",
  "key30": "Sy7dMLFsqVTFbZEhgdGgc7uwam6ibj3tXdtL3gX7cPPjaTay2urVnRsvhehPmLMbhQFbpeKMroQ3KgjUWifieYG",
  "key31": "5QzvpyBsByyJPcdqouCzbGxagfs7NW65msCsueSNzkNCjbRiG5sn2HmRYUabDZxbKzwETjdQhhDjsnfRPjNicPMu",
  "key32": "2XNCQoDFLDG3FNTWcntN8prHcTDJNbbg3ATjgrVKWPhybCKZCmyXg8JFzrmumwjLytR48mcRgHA9vxV5EQKJUqNj",
  "key33": "bY9ynMzLyaK9fmwwm18KdGKRRnwUoXUbkZeXockdRhjfvqbSEKeexZ46fMLpeGJPn7nwzTJr6WrXFLwHY3bzZsw",
  "key34": "5pAt4eirD3YY2ZfCjNgrNZkyTWkX8NNymGFBefDjqz9H2f7MiuPLsgBCyKu9hJb5EUcJCVFfj7Fc4svVniWphGhU",
  "key35": "5ATDQaUh5XMDitMZTjCiTtWyo3fhJFzgAqBnaEfFgVEMx3FJEiwfd7NaCKLBerid6Btdvw9iVYjAPBFNzSciASN8",
  "key36": "5EG5AFuokZZong8oAEc67CLRBAwVLGc4nRv8ixwrihxUcyDfFmtKjabSy8usg6z38poReM75pjrvuoLDosy9mSs8",
  "key37": "5GRetAtKcnveWhmkWzuEycEqMX6LLsjVUsBSgY6X1umLZkSHE64ic6YjdpJ2imanPyLJWi42kFeRa3tKv324Dtur",
  "key38": "3oacn55kPjGpnmNY3gn7P8T9pmho9AcoQz26NdgkK8Jt15ayQqXp5UET6uGR4Bw4dUUng4nVfisPThwVsEavoaig",
  "key39": "2BMUfubBrWRe9JqAmXqJQA9LysG1V5pY95HY4wTPBvbFcuX1EeK4SzSfKseVSrk5oKxVbEXfigwXDogMALEE52T6",
  "key40": "4CvCHwCNZUEoXWpCfh84hPJJDuEppB2zo9MLaptqVf57GsZJc8GjxoNpDn5JREgqb2QaNW1B24TJLHCR6XsTkSm",
  "key41": "2nd9T98etZau1naeaYjhRK2vYPLsXWXewyPQGJUJZQtKEp6NV8mpR7jEsCPSL2NC3XKo5BN9Mzyx4HYo4VPmaeTm",
  "key42": "4BaUsxgduVCQt1J1tuz4p7RQQc7pTxcWjp51uLMjC6fLDynFFGC2zZ2pamVS3n9XTyH18znrVLRm9mMP8LqGeSQg",
  "key43": "46iAH9KAEhiJX2CZtEJsaR54woZnPB84njT4apGCGeB86R83mHdPk2dYTMmXebTySZxZac6h66R1kDYPAaGBrg5M",
  "key44": "2XnGER1WkzrBJSRHFAY29cyxNmeXcSTUHhhBvG2qAXUyqfUjojKoVj89Rrho2B4a9pgHaEd7jVgyJdYUpSTZyD8M",
  "key45": "5TBVjsbYzmEGBCTzUpBYDN8rqBcK9ZxPNnrUXAyTp2YDzr1TMrXPu9UyDiXrT3fAXB2DnSGmo7T8i7VJjz8vdvEF",
  "key46": "ZsEuSdZCYQFa23M8hTwosVdyRypzj4TTssuqj84752pAZTgN6kevp92T5E7F2NUatB5ssR7RdY4DrPp3idwF8w5"
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
