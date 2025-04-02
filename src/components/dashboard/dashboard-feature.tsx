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
    "4mhHWrgMaTXVAoP1S4WUg1vGFKftwfsX3VHcGCdeDrNXKP23SEQZC55pfrc21dx7sVZycft3yAo3LJYJQpH5cNSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nEZXMR76492bYYga474jBC3M9TEw8HxxKmUbBkrnEUiuaQxRoLevwEbPZU1LwwLs8TZ6oUj5K6459Pcpam3wQU5",
  "key1": "T9ajqfMq37W4yp9dWUz9dujb6uKtQuexsTDSAGgYqm7phzHhAuusdx5KksjkTY11HFiTb7WgW4taguT7g2rnY6L",
  "key2": "DyXvTQAqz2iqTjShyXHVvNkUb7nmaZVactfWRCTmpqQyrk9NCduLsPZGFhZRXPYcsYzqtPYrJmV3GQanbarCeFz",
  "key3": "2gexEXRPu3m6jHMeP25873KAY8hQxJfKc5fNuuWVSBaRE3bTwuT3gQkwC7hNXWhoAy4n4BKmwrHB8y8Z42AcmehQ",
  "key4": "59uxp8Aa26JrsCFsUy5iGiwoMGGFEE2XQbXJyQC1vk9RqyNr4WDv4RUSLncvFq5KmpW29gd5wRUaRfkgNYbtuEJM",
  "key5": "4Ts7vs15JMGpTiSF1PMPT3GN4Mhk6MJ8VR2BaqgsWcLAY7X7eCnRrEUimbbGBkmtGfFXTv5NuRbkpQj4FTQGcQJL",
  "key6": "5Jae5ziEY62375HEtzfpZYfcUyMCvAizsExcYtgUdQrod2KcSZa4tF19Szw9YE6F4hEV19qDQzQhMt5i5GsUAQ9S",
  "key7": "5q4u5Rmwfh4LiAaRMy59NM4W7gnFMDPDWQwZpcbHEUv9yeLFkVutqMBG8nXfkBRh3gyP83cmjGmEHQcPRPiNc7hQ",
  "key8": "ANwr2YYSm1T6Pjzubf9k4xXmYF2Jy4D8Rhz2BNQvANdosp8RHnQGU5wppNebbHFm5H8PLPQymgQFzJcHdS2kmBR",
  "key9": "266q5vDJ6qW3M71KVkMS6AoPgmU72WU6weUEDAmete8f7WsgbHs9snTLtPKup7BEry69fpeqEYoSVDghGVArCcFq",
  "key10": "5jvbg5DGcLd4VhxcM7PHkkcgYEEV8tNrvNJF4C2VbYgGgfXuqF4K1cbAyaszxY5gg2Fx3JBX44qr4g5okwWR9YgB",
  "key11": "3rN57gmos18Y5ZUoe3XajXEfAYLycMxKT5uqRHXg7Rc3zW9E9fA2MhuaybBvXr7YiZbfg4YSByoUwpWwvoeaXajF",
  "key12": "4KX9xS5cSq41B68PenLg4DrGxxGzDewhu5tkort4kf9G6rHRopLWRC8F9GacFuVpWxYr4jCVKTMhkaw1ZhUTQg8P",
  "key13": "5udQyWu6mMm58cbu6LCxcHtX4NokymvwkfgeLZs2mFbv791RNfeiCmKtPXeG3tDyNriZ2U4mJsMXTMuxiq3TeRSC",
  "key14": "3W63oiZxjARrtd7dsiyWsiv4wDy72gG3gT4cvn7xisYB8qQXSimoQzpTcwpkthMP8NecywDnyMcm1wExBegKGoAR",
  "key15": "2o14uJivD3VxcEZZ5uKhihSLLxize5VWrq4h9ks7UVNWBbftKHJyE5DWKp9YvZPwFmUhxCv8Tq9T67JNShzYi6x7",
  "key16": "3NRjnA833yYyxwGHT56YwqXkqcUtdzLnkqiV54kiQQPa9CgLwuxJVY9queSruDXzejdgcSBMEeurBMQp8ci3y9Ey",
  "key17": "U8Rdgjv9DyYWfZs5Qx9Bb6VVMzE5J5V337ymqWLxw3bFiUbs8W9B3YsQtzbR5Y7mSDtqtKoFyE7KBVav2hda8av",
  "key18": "2sawrDN7qJ4Mu8nWgCWfCd9d9AVoH5Vros3pUg1NapdLJYaKmkA1NmMWNEsitTvHSQaDzs925Uu4PQZbs9gxNFaf",
  "key19": "LoNJrMWYprWYH7GR3F9N3wzK78NRBd1e7d6uvhmwmjcd57WTetFjnNQK6ptQ3LDsVU5kv3H7Dx2TEyiWyiDRpFC",
  "key20": "Mvkoazm59dq1gyyfDJJDMjTSqHyWkwe73p1YvDZASurKrYryhhgtGuh6bPmGGemBJRVX7ADp7gRnZbH9ieenRpM",
  "key21": "2xJW2Dv3gxQidWGmJYZK8UrM2ACFjAzqZJ9T1Fb2QRpfQWh21r11QrmpW3JmLoBN6zNZLywj7CQw2afKng6Wnqqr",
  "key22": "3YBEGpWZcaJwq37sNiKuzSLBTSp7XCD6qDKV5EqY2GfKxNwzxSEWaKDVfjGe4oyZFffyaqNEaAATnXfVBuWVGqPo",
  "key23": "5G8xS6DCEhTVA9bZvqey9ctfv6kucVZtKjYrMhsX1hjZAJFfKdWMyyYpE8GydHSi7YtWtCmPEEmLBxV7BLg1TQPD",
  "key24": "4LEGuWPxgxacEovqXsimvGQBoHJVpwUnRTHJZB6KYGEvcZauVUyNT9Xo4Xa47hfdfsJhosmjCCjGwqd65gh1DsD3",
  "key25": "5rCpcT62TZo1g96Q2odabVd9KXFDggKEz5yUDBoTXCJFTwdtruVENbPrzQ9UHvVyX7s8RXYLbtMcdryq1wmytywN",
  "key26": "3rEjQT5XCqZXrT1kWarFCY2si9DAadsnNw1uceLfQY6afkmJZa5hkCqD4h8fCtoTf9M7Xd9LmFA8jzsyxW826Wph",
  "key27": "5jNHGobz4o5AddEQjGJeyu4NHUocSAsdQDeKgro4dwMP6HWFpbunV269sQek9c7u8m3JNz34JzfeLfe3SZbHNWVb",
  "key28": "3zAroCSbzTLCURDsEqtvGgsQn4M2EqzE4Cu1d3jFTTW6g4S5zU6p3pCZpyTFk3uoeHH6p3nFAuhaPdMFhgJX7EuT",
  "key29": "5bj6g9z9FcHxjcUzbHsjgC7QPjfDrNvycEcKcGkUwqx15bu9sUw4k7CAsLTbQfSEuzRnrKZRLFPr9zV9bHzjSkPC",
  "key30": "23XDYr8zVJtHBJeLG6K1A3gRznuJpHpgKg3cC3dCL1RwTnkkrWCHyUmCpoH63Ln3GyLiYeyiNVd6pVGQJ3PATWNQ",
  "key31": "24HNkcKW57Csxso2846HLk9BL1j7w6bai38KNBh4nmg4REnNc4LB2covUjrqrCmqQ5k9KyNYPZo6tu7L8uxXnHaF",
  "key32": "5EdWnno73tYNShijFqwYAbdbqfXcvY4UUfcP24PJ8xJFEQr1eZC74u3NRQc4ngRB5WnQDo9dwWFwEoZWmkW9L47b",
  "key33": "3hC7cKAroJcpSTwwLyW68dyuU4wCzgegPMDQ7ovRgKUPw5QATwhEb8esjBXWayYcGtFMWTFihnQj1UxVEhmZ365D",
  "key34": "QPJ1BYG5sHqq6M5VqS8tZnmJqmu1rzwiSmobPN841pJGHS1k63qRRCE5ujXxVQNiTPKuiQoctqtomnmj2DJQdjJ",
  "key35": "5PPND3CfY599hWToZ3zmhfar4RD8cAYerVmrrSsWmBdFXk1pQXgArPXD66nTrM5Vgi54ip624NT9xp65WXjfMmnC",
  "key36": "3Ge7TznKGF1f8pxYBqqpQHY5ibVDrsCQV9Uc8oLcRH1cZjVu3hQKoFAGgKVc1keKZFHn7Be74fRZDkjPrq31XhVs",
  "key37": "3UF746ebwkrn3ioBt53teXsiviSzhEH1pdYQRGZ5mBt9YXDVfxHDRRbZcKBqqKNDMfuJFKurPQ46c3WwNq9xFTJ2",
  "key38": "58463We3oWbQY6Ufk4ePQWHdTWS9KeT2SYn9AcsJGQDZXTyTGG3cvBUe1RAYBeiUUqP6zU8Y39gkNx9WtQHz3yPL",
  "key39": "4z8C2R93fUzzBi7SwFSgXAKQTTg9m5Qoy1trwJX1ZTbjZYBzKUgkUW75weAZxo1Ft2NHdAkZNNrWtB18DP4nspfv",
  "key40": "4MUvFdtYKkSf9DZxTdkZ72rWY5wiPz9wVimpGy3Wo1t1jrPU6Q9nnuz27aJ8Wp7YztuEUxAPEpHW1B5RQBMCjKHu",
  "key41": "2Z4epvJ118Y3KMGsd9NmnrHUQwUnJcVDmkDdXqepwKXAdz6h6ZGx8Eg68BMXFTbNJtxrD3Xvjo49MdgJoFBE28ju",
  "key42": "28SsXbBb4ZaSadW4sSXjeCZGR44q8UXiQdxC8boXdLPse9zSvkrPFHpdRHct7CnViM3WNa3Y4fiuvsenYdNgzAiz",
  "key43": "3c6ExBUf6p61qaXKjyDTrHikFrHsa542zQwJLh8FqJuQsw3VSmaShwinzerXUQfDRAh9ENmredWGVKAx5KrzzABM",
  "key44": "5nBCvNv7QA5kx1BofNPhX44Qk4CSbrgroDNFtcf5Z9QxHXzFdJnmdikMMDuY2ZHrrETpBGYzxWdnnVdG4kjdWQ2d",
  "key45": "4KF5MTCocx3jdgADujBiJ8DLq2Y6q6AqG5vNLJQvHTcAEYC1zcsjkw3ryemUBweVfevhiNkwnGcJC1VqyZgVKjXL",
  "key46": "3o3s9Y3mJSMwE2VeqYQwyMpxjCHdqQK9i6tdgVfaSWwAVcNcTUTi2kdG5Z46D1Jfs59kySnWGN3nypG5KBBisZnx",
  "key47": "2Z7cDgtGULKMCbATyy9HrPGfTY4Gcteg9TtxVh3GTnZz7NfZs6LvbXwYxtNjFzoZif1f7R1ohLc2cRFmwATtJN2g",
  "key48": "JhVzmM7KpZEJfyhDiuMVY1PCu1uvfNxCDfrBnDNMeKhrxj1mzj3bY8GDtzkf3zo4KVbv67eSdBEZLMSDzp4UJPW",
  "key49": "3DBi2RLaAG4SQtyd7D51ZHAafHNNnmWPvuWZC5nQbtXq3smnX1ZueUTWYy8LfkThx4Geri6bed1dLV6ir87jhBLB"
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
