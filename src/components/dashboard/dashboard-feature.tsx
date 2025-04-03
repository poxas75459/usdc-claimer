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
    "2DJQVsX3NiJ2271DLxGJ8xTbZRCXcmxex6527PtNN8LAtq8YQJ3MNiwNSHJGiVw9w7dy9HHWymHprMHyzEphr4Lc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aoqUReeFGKy5JoFnS4ytpp2KK2csR7GPbDZxzaWGUAfAmDo6DzeHAwHgN4zKMcoPAuopZo7oJUPzsRq2aqsw3rQ",
  "key1": "4q2RRMBd2JzPWS6PTb3TftjACGHn3SLJkCgEghPrqiRFQF8CutrQrbvSAL1h3pvpEEtrDb4wKHtZCgWPenxWV6Sg",
  "key2": "43ZZqXGCDn7DqA6mGa784yP5jcGX4yeSWne4uAVwmLFrtWpvBnxX6VxE9jN8Nsuzr285LPWX1KTpu8Prf9a9urCP",
  "key3": "4gr11qovE3ktYrhCWxfh4rcgDre1VtE4d4xGhmP1aujx5a5L5JmSE6k8vdqMy2L77ZBExmqUEKNBinyna8dCSrK1",
  "key4": "4jABVeaVMvUUw96e3XPTk26vyVELgGpdF7GGpEKsoAHiyC7TWqauhwCpcZ9SN44XHBoxfRBa2wJxYvz55vZFgK6f",
  "key5": "2Hd5X76TyzF94s3VwqucNRk519VT2VTkhDrbmRFE9Zxgrupd9xftpVhQFrin5SpoBKYuQu9WzLNyS3XGUNBZthMX",
  "key6": "54ifktxkkRf5cuqQwbA8onULtfGzhxgySNfzPEsG93GQpcx94Mxj9vRrceLE8Mz58zYzNCbhNscNJgmsF4YmSuxA",
  "key7": "2ev7GeR7xCo6SRTwGKhQmUnftfqG89PTKS6tSRTRshZXrtmdBmkYNA9X6dxfyMoBaFC1V6w6qqZ2didiPUR3Xy29",
  "key8": "4JRCMzGr6tCrJoomsqYLQx57PFLWnsWBp5u1VYfNAo1RPDaQGs6w4tgJu1dTdtAxuUSD3uiU1Fqxrgyp3vFsKP4H",
  "key9": "2c55LhYCDnaZGx21iad1evWPNXEN1X6A5e3F9fARjYnRSyx8DCbreLCAVVYQ7dEikZ5SYeK6pcwHMCtTt2igZris",
  "key10": "5V5M5XhywpDaCPyj5F6QCpf5wF7658ueaKj8PTaCLWaTB1pj7rutCUbwJiS31b6iQAvHRWEsT8VZcgaE6H9GBZQU",
  "key11": "541oUeHPp3D8EFAMiFKvVdBud2tS4irZxwM8GD8FRoZveoynSvdTfqiQZyJoGSRT7JNAJTdBfAH1QsfXbRCWxYhd",
  "key12": "3feggd2n7BMyPc1Jh6QQLrWmCnPnYNGyrS8gMgJFihjjsaexBme1hWNQcQqZtG6QmW9iGqNRWKYjYYuaSkup31k6",
  "key13": "4vrjup1gq7dUqXUCmCYTyXR3yeWKKUdCYmQRXCikiLVjHobRreZaiyBDV8eV268asChu1Sgdwc4PQSzmMi9yrTNw",
  "key14": "vn9ECKoGjCawYpjQJdyiBWVGjuVCbQZUuW1qJrunCWR7mmPT1Y8tjYzq1sKySFE5rkcH5CVuFXVJ65qmJrVEBMB",
  "key15": "252sn49f9icazEta41sjV3pZ8ZMpBX5SWpJsQsRb5XgC8iy1KtVLbSB1ufUErthYenJDvCVVCHrN34HZebxKJnA2",
  "key16": "4yYHrSa6SHg3dyRehGjfhG6tdhwZ3CS5ReRL2WnadQFFCwDVWJMrgeBLjTwnrb4MKyMakxZL54mtTTSUrwmmCQBN",
  "key17": "3G2Lac34vaLWNkeg8oPjmuek3uTTLc6qjLi8o67Zjac8yyKBs6qXoUhYVbM2yGH9cXCrZZa8cxGcVZ8YDFk3SrU5",
  "key18": "5hhk1NNnGkcontMBGrbB26MNsEnwCgGzFybdihr7CDjKU5UG1jhu7VeADjS12XfcDS6CGyiyikRz5ePijukzbSPR",
  "key19": "24pPTHxD72nzBhBN3b6CMsFHVXMifHZpSKk6KY1Z3rT9AKbjjNZM7APQQrFV9EGwzDNzvkAVkKRdmjwGXMyjjEoq",
  "key20": "3GfcvUdi31XD42EaVugdteyvan8CJYPe5UhhzzYAHFL1bFY9QmoinMuMQEnKj7xwFyBMX6onDzq1UaC3aRineYTH",
  "key21": "2cXqauCvrHU2QQZ5fAkWvATiVCZYXj4R84YuEvhtZ5AyRLmKM9RSufvoQiHBvZ7A5UkcZhmqbCY7BT1iNhEiXvEf",
  "key22": "px67A9EZFT5B6ct9FHZ1WvSSmAwW3Lx8Rq7Q94XAJkzG8PG3WQogpLKDtFqmekaG6uUu8gBdiskWJJDvcPpamEn",
  "key23": "5PAPVGa6kQ5vpjG1rVBYAJqWgqgSqTBX5brbNC9wQ9JiP5YS6tW1NFu81NKdBYZr6ivkKq54hM5dH1NkBWs47t8K",
  "key24": "3wfU2Gn9tscBfdJoKStxyMFqmRicAF6CCb5NdkMh84RUzFccbbvjCSSM6mLuXf2YRKb546WnHK4NfRoTrcqjyyWz",
  "key25": "2QAAe6u2ErqttAJdtfKKNbhE4oVYF7jPd79hev9sDPHg7aD1X8qoYRFy79K28Lbjex7vb7fE9i1vWKaHUPewwt7h",
  "key26": "YGpB8Ak57i4KtcWKPkQ2BQSq59bbAkQkt2DkusdGNS2xVrNcVH262EwUKZjwdZJmyXG4sS7XohKb6B8uESU3pbG",
  "key27": "4Jp8bnsCBzg4yb6HywnJaP1aFGA8vAEVWA88QeMTpmenEXqJiSmKR5UdF4dvR237HkH3nRrrbdpdKLUxQo5SsMrJ"
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
