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
    "w5h3ryzAzg8fSMVXddoXshXfbvejFhWs7ip5LmdVCBBvC3pHUK7rv6Yjc1mPwRyWwmNhZVYS6US6CHJy8zF4SVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S3PotrGCFin69Vvgy3jdtZ1unkeLyB77snoWnBnPBvk7bQ2hBFXcYWY23XiM5zgS9nLTCrWwfESFNyjKJr5T4op",
  "key1": "3yzrrKHyhxGqRpQ1PLesKu4iA3RaCtKJbDr5G7zD6EDkQKyT587yUSsQgRZvY6VodcBtSBRvwoYfKx7LshqpoPcE",
  "key2": "4x4zT5UZPCSyerDjfcnLU6bLE2SHxkLJysyYhBtpCeTqNp9e6r8ceQG1qpktEXBrw3onHp5qLV8AcngnXx1ZnXXp",
  "key3": "2Z2gf2FsW8HcZ3MNJDXbeXnZyvg3LXrdqEJk7KDrZBzcgUEyQdWx3hCcbcMsayuTjQMrpV5MxuPVTGhPs7HzNHb4",
  "key4": "R6gbzVVtAaWQ4PhJtyi329JHcoinE2ZMVno25e1pvGyDC4TPgJHCCxWgTx62aE6ThHHiGyq5gr4dEJyVgeAMHjx",
  "key5": "4SqjpxigZMXfgJdY395soMGvMYTtCCbuou5PbVSnAj563vYb6DYvWuUp5h4bECFwjH7y6nHv46wF8Ww3fQqCH5j",
  "key6": "2evU72NQaTmuZXLmpxDupkRAFgdiXipJPdUyJhRasCYHBtLtS7Gx66CrZSm5wVEBkEYLw3GHrW1oiB6MV2EUfvwZ",
  "key7": "4Ei3V8ZpcCzoK4qLzSn2wqcuUNXuH6hta6D1yQxgMHRhXRmyYyBomZxzNPmqfBztEunr5hA4qKEjDjtEHFyqUjNP",
  "key8": "3cbiMvZpzxbAw7CDCi7BLFYUh3fvcso69Dup4i6UfwvLXrVp9499vGLhQkuWBVdFtCp2aa5MRKchfzyckx1cYWmk",
  "key9": "B7pFjcP5ZEXi3cEJkchQPAcWpJ8H5iWkDSezB6shVmWHZdDrNkZRbVw49WLLnt5j5HQo9W7L2ANp8ucuoKAkgTA",
  "key10": "4QCaRReiGbLuaVbitk66WWnHU3v6b7qsxj8gNNYnfRnsZk8jma148kNrrAbZ4G2sHjoqJ53bytRhVqjeDDdiw3eA",
  "key11": "5vNTgLEALQESsB1y1kqnaYWp344eo9Sp1TjYQYxobXrVWBVd4N2reqMrSZDZudaX1CGZeYBp1f9vxpN2G1DtQVdL",
  "key12": "B6BGVgHK3Mzya5ETDxEmSCoqswwZLYP6DLFzUzMBpyPJoEFCVFTTMKC392G6Skb7ptobtq3gR1fwZWfzC4RRPUR",
  "key13": "KYBgRxNwwpvXn9S4ZK12aTgxBQKR82TMbNRMUKBgNkDAzpPf1u8ora3GL872MB5RE1NPgFE14GiML7cX3LQqE5P",
  "key14": "2WUw7vhYHQs8pvKXNnsdGcinDYY45k4AJc2z9JgKbfa1p3YPSYbWBJRx4gqJwi6JJGaKXx1pirCPSKNBytMEUFc5",
  "key15": "mdzM1FTETGU26JeCFZzmwZm4PmnHLKNqpHiey6zHThuyz5f6U5w1xouhbBJYRGWKx74nifiWcb8Rb3gpHEZv3JX",
  "key16": "5QgpUrStd3JDYnbubqFv2GYfMKoqUQGuFiwecoxSMDeMrwthBesSRGfAJTw5v5teUsrWHnCwpVM3TEHdZW2h1Q9i",
  "key17": "41JQkU5vKbdKh515eXYuF4ekbkPM2DxPKgonids7TrDJfjrcLhiMAbGou9oYfxpat6RpWS41sJac3st5KpTGcZrB",
  "key18": "2nUmvbjRuFpLpQzY3jfnyc3NjwSSqa2AaXSLsdhFWQjDkWiAjAJrC7ptMjhxbkK4Z4JW6QZHEJZ17NqumD454QfK",
  "key19": "5MBccaSAz1NFxphjTCTL53iLR2uyehYiEvnXemgr23AcTQssTPxqFK72LMhCp4LZREy7MBn9CGg3nxU9P8rCYTwT",
  "key20": "5qYnyS6CwhNZNvnPMZBCTmdpjMxMwJmbh94pEgEzzG6NnF4hDdGfbeioYDru8UJ2ydxqUCU2CxXqLwe6AU1mC5Xd",
  "key21": "J78xE6QLLRBfKFdj4kPqMxGRTYFG5h8w4HEmE8s972wKmw9Y4VSeYD8j7Wj9254QYeByB76fw2KWTdVEipwi3U8",
  "key22": "2FkLD84Hti37n4MDNBpYMmAcU7aoMFbjgZSwYdqNSMi5QoAbnnibsvSGNdSXaEckdp6EnbjNumdN1ZKwDF9isfVK",
  "key23": "56nvUNbUvKK1cvVYA5pQ1vG8akwnvYovAVFZmLQ8CuJXGfkSwfbWKMbRxC8pRf8UWQmfq5ZtUTKPCyCuZ2Yi9M8",
  "key24": "2HkrUbpsRsbJb4S9NaRBBHkuhhLAtVfemZW9mTFkbFJA2BjjHGCxiXfGJ9JWyUhFUSwwa9bzWrQbVk3PLdQ7Fv73",
  "key25": "5M2E7TSFxpc3zypbbXr5mhJ6h9gCLY6kAZyuVRWkwATyT8ZXeTQRB2vBzWSyzw6Viou83P3usm25LzkDcAcMkgPz",
  "key26": "5Xq5rvRUD6qGmmrDorQDsdw2CsJ7fG1LDXxmURAi26cuDwSb95N1FmPNK8YFgAEHzh4rqXu7aRF8tHTT5fF45fMU",
  "key27": "58hSM8VwLXQs3C9MFvZfCus2W8rjtTv7AWU7nM3pRP3CYeHn8hvVGLNBC59xz3xQzTTNCi2pQuzD2GgysFNmqUPc",
  "key28": "4hyKdcqM97RJzmx9rD1cNB5ecQDTkqqcq3MX2WQdCY68ua9c4PsYYWAMsTxNRGrjxkqrv76awrRUYBGPhV1zp1ZH",
  "key29": "57ZspgJKTW64ZMUFLPUpNNb9VJwZ7aDqGe7JJhBZ1qQo4T2TZn4kh994811tqDiihVDusRRgKdghNkQxtQ89cGGu",
  "key30": "2t1ZyrppUJYKNvmyjkhDY3X3kADmDtNfzKwe2cvrxmM76kEAvYbso7vaGZgfVmdaaniCKwF8CA46vkbBWVGrETay",
  "key31": "2bjz8JoQHwdvQWGGSKr6fiFC9FDnaHeog8K6d1DTcp3YPsyF8Vq2vUziHCUoeTVjNcJ894BNYjPLHAKeYhg1Jr6k",
  "key32": "4BhxJ9PUyMw6JncMAwDF9jySq14qr47aGatURS9GYFnnHgMzrU7AANLNWKqboDU4DRWsGvQDM1cwLVpk7ViALB4c",
  "key33": "5awy3X2wyKprYcnja6greWpg2pnee5eSSibh1JQqf992ZWENryuXcwjv2jxNnefmXUAcfBwBQ9CmQ4NpWoNrCg7f",
  "key34": "5sNHCdEF6XQbodWF1eiTZvzKsiDaqGxoTcbu4V1zTem6MHqFDAsPCpnmrgj3ppkBv9zZcfNgaSEVj6toESp4qZUT",
  "key35": "4s8U8VF6Jmiq9Un7omWAzH3Ue8YTyNShcYn9j165Ndp993aQGELuZ7Fm5ADeqbqJFgjFhwQKdnQjsfSALxTk7bfw",
  "key36": "KxkhK1FvELEoMycNLWDst2fYqnumZoVjK1qL6WDjU5hJkKE49am13mjW86FkByxeFgc4cHYpJ1yBVMdfTuEWRfe",
  "key37": "5hE9UWrreZS9ezwix42hAufNmrDaQegXYHHgtEw1t1cTFQoZLxgdYTrephNHiTzWQeMxFDsVKpzr7Lpc7SjBA2Ln",
  "key38": "pGLCa9i3CQQwa9g7N56sbDkCKmUcAsRRkBehyCvDBRJnWipE9dXDBbqZVACZQAXMnrXhKPcoV762M9VhXB2KSpd",
  "key39": "3ojcfzsEmDLeskHd9gVj69YfqbegmQdMLG21Au5AcNns7TuNyyTiJQgh9XPAjboeuk91fP3au5oq1ZyGmcRwgU2H",
  "key40": "4v9fMFAVYyfHjwMdQarGYtVJK4Ub4w9V1eRFksh2PhXvFdEStfkPSz8qQtuWJBzJewygvab68VRczq34TA7JWbsp",
  "key41": "5PbKgyu6JmyG643useE2JngqQwq7HJwMKRLsGzYvxcu5zezTuTrRsGRREefAbxDZFdcG8j62X7ichiP2Q5BMEDYa"
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
