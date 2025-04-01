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
    "1ZaJY4w2jgC1Fn6z44aHcMPtwJPNXUgwh7ms2UU5DfBNpxUmECv3eus53PDw9XTeXu5jT1Utm61ETyxCSL4HXAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CkAqbJsZrnaeZqKz94h1kYcWpN7g5Hv5nGSc7WwZQMahPt3VZWeiXYax6USZnFidc2Xsetefg2WFYf1D2DCjEUB",
  "key1": "6b3H11hB16h1NCu6gzngqLiPxFStPNXiY3oLPuRCM4rejxUsK3j7XeSuvcAGRGS67tg52XQALsYdoQcFt14eyrk",
  "key2": "4ncqy9ajGVKhNCqPvN19kqfaaYQLvTezsX2EauE8hqDB8GRYLDdZv6eDY9dMPxA78apP7P9bYFbmjvNeWABS7u5Q",
  "key3": "4Civ4m4ckb7e4Ymp1NZr6ae5cH44fJemjhqcku3bAS1defr9boNDPSr3mNR1PemdD6NgGELNpquorcSFB8Ad9oF2",
  "key4": "4jezMmEijLfd6atYphXZPUyJhfTPh3GeuSySPq5sDVEPsTfJYihysX63MXKom1KueCU7RJWD9ehsXUCHY1ZXpZh",
  "key5": "FPnJji39ju1rrnjLwBdkg8f6VaRT5d1ytVUr1pMFDW9bt4Zt7CBMtE5X2xNZjmLu2DN9fLCfuRLaH4Aw6B4gXwb",
  "key6": "5A8b8HiEd2ivYovAxguXJBirRamkKqH83VfkLz6DWcUrK9CLyWV8F9hTcjf9bhsywhY8pnLUsKovLnsy9xbALoRq",
  "key7": "3mF4uKWkrr2bKZBn2akinp12bXta7K9s4EcuyH2qcsYeUA3hBQNWFD1y1fUb98gFn3Hj3ZeWczkw9tkjeH6kkTjf",
  "key8": "5cytAeKawwxqsWWEyyhAJwQ6u3p16pLHRUpyBTxVCFvMqeYk4GELZSzjnpYE4AxZ7LbmaYKHuv6bdtjytTXaRo8B",
  "key9": "2eF31AYcoyQ4WGijerkVj6GajdEs9qFm93aBeUum8ovV9ySRRGK7h6dgTs6aTUyRnk5SdsYgxRpeTqrLn9tdbZW5",
  "key10": "5tziWNyurfhC2JuS2TfvKBkfT8fBtmzZ5yJocFvmcCUWZjtcePrfhLzGc3Rd1efTgk8eYvzvJmYRwZqZoJ3q271h",
  "key11": "59t4a199XsnDa6gJFK7p4BQnguFdP5G7WCYN38HMeg4Uis1Wk49WsrBU99tFPWPZLYYTRrzvYNqXDC7ztrK3RKDR",
  "key12": "4qiE8uzFLaStNnWbxY4m3uUDkAjebAQGrKpztubZXLQHka7EdZJdsj1YYCtkLNU7he28HcxSRsRss7tQqeqhXjfZ",
  "key13": "2d6TX7mTtLrk6g7ATCRWH7ZofcuTqvu4x8LQwucxuDLiK49DSUrPicimu4XCR5uBV49AFgPaPWSHCSPqjZbjapJi",
  "key14": "5u7LJckT8Q61DVP9hrzFHgQUzSnXWvdu6VXjn24kV1xaoCuPsjnoHGPB1XeJMKEnfavWwqMoJDWxkGXtmC8wHV5m",
  "key15": "23G1yFtoUYvVsiCkD42JCZhiWjRRZqK12bAkMaAgcWAQ17W749jU4kDB17e3BueUPu6k5XnwEhhsGgoMGGUcWuBD",
  "key16": "6p2P29XQ4wU2QAuV2qYTkn9KfeixdVQ9UMAaXcxmip7dRDt68fB1x7rEfhi5TKcemP5SjDebzYWjSJKesf5uoor",
  "key17": "s85WDQPVz8iCUwSiuSnFagX3hZPRpiJnE6F92BtvHxnZy2E1z5HpQyVbLLibJp8S4vu68SanB8LC4m7QHdCdMD6",
  "key18": "4tyHo3Qc8z7C4h2zo2ovpM5tKvTqjGKYgzzxUEcEK5goMPv1EC6EBmhJvauSo2wE8XfiZELotCxC58cUNcnFAVED",
  "key19": "2t8KhCFYfhbTL4ZVKQCKkEY6SqkVXNLsLY3SQCPRxvFynBQBkXs2WEYpXukKAT78vuyGvpNBt6psXcx1CV6kzE2j",
  "key20": "5FRLPUbXgHjeoPRZK8ffCK7mDEPaQH2Mh5CxokUQ4mHJ44V8rYPVh27J15P1TMdtVejSp9BN5jh5JXTjbW3JyRoK",
  "key21": "4j6fmtiLotL7XBSiFP2qvCnSBq2L7bvHRRvUNpZs3pNtiRTP6iQwc41KppRU5axcAxERsJfzaDe8TGqsYTfkF7y3",
  "key22": "4soTDxrbPrPKmBdeqKGE1csb6vRGagDSAXCuexGyPmfSrm6tErMAuhJqLhV9xDg15ceFALW8ELyeUVjmHySB2YLH",
  "key23": "3UPwuFmC3ieviF1sN4Ad221fnxG8PPpordR786VXEzB9pTYva6mUzxcK8dkFjhwEgafvA6UyjBAbm12fTsrkMGwd",
  "key24": "VaR9KefCxM6gu4UkyLnkCkAojr53bVVQNh8fWTndXLeYDkNme1YXENG1emD9D8H7M5Uvk5U2UHgzCw4okriGBMB",
  "key25": "38yeGX5DeVryYqtqpHoUEhifbMqd1MfPkGZK71ZB4CLwe55T7Mu2i19HvFfmRAnTWpZ4qX7gQuZPt2bvGyr9ovSb",
  "key26": "5wz4P3ZqytuUvZHqGMsZcBs9JWc8K4m8MtnGtrahQ6aGA9zUQ3jzvRQLefBBJi5sgvRcmcSwYyPEGEYjoSe1S64k",
  "key27": "u31LQMPWgkoAGvPL3v8p5V46RbGs1A2kCTSAz9QoGSkmWxnV4QwMUHmgJdQUoXFuLUQ2KYcBX7PN4HxshLrZETb",
  "key28": "5jP9Ys3CMXNrPuyVYdjv6ZybWyKci3aHEGf2iLEGepLA196xQBA3J8ksdPjx1yMe9rC6DWybwmsEwa2AkbukR6d9",
  "key29": "hay3Hf2TAkQgCqDsFQNvCwDYAoho7cW1pbppS7R8HEpJbUvjtqLVYgJ73RKBM21yxSSWSLfw8J4r1hZ3RvupSix"
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
