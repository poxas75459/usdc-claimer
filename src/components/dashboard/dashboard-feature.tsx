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
    "4yVX88TpCB6497cp3wPW6T1YebE1iafDDTgcDdjKAn2XFfS3Crnhx9UGkSaTRUvyHTRhDAsLcWgs2NndfeVrAJkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FtZPRjmyafp6nVQPFUcCncj4kZ3UkCQZiHbgvX7NABm58gfCokrThkMCqXTVyFoFqoGg2Q1p2qmL1MReyLm7eeU",
  "key1": "5qVMg1mstdmrTwabMjdfTPWqc1t1SEK3kUfEVoUoZY7tFkrnUhd8YySdZJFz7Dk6GW3gfhBXR6YmDiDyVMm6vaUm",
  "key2": "2rnfrCJg41BXUGo5EDRXL1GNid7wsNgRJtfEYLjYWoZmRea4Mo2qYEJW9rNBXQc9oAmTing1NyrdA76ukBe61xW",
  "key3": "4uyZGZpdCr1QPxxnjhjBERibxc1PYszjWzSrMB12Zf4kfg6uDxMcz3opeUCATGw7RwKivpjgp5Z8f24TU6nWfELn",
  "key4": "53rQ2EHf5Noa6N7iupQHUMgFW1Rvq1s8nzXteNFYpKGCSeERUeSe3FNwEQRoHw4ecz4feErYXUt62PeAvwrhv3KW",
  "key5": "5oCmSShghy7KFpHVPxdAhcCxLScecskSSkiMNm59KtwNFzu8BgNKkhXMdnVV4Nu84AYJ4sg77sSXqajfr2yxosMq",
  "key6": "3PVVNoqveD9CXTsjw4RQ91s6b6kq8M13yU7xWEknfKewVKFH4nqHuZxXXVRuDwYxUyiW7VC2UfnmHwCRKiy9TqY8",
  "key7": "2CtchabWDcL4z9dYCSidDSxVMWA7Riz6MDZT3YBtYbKhE9Wka2H5AU97GBdudzpCFdd1wkLvfribSGUdfeBz363W",
  "key8": "jumuQ4doTMx7U6QWvFiYYf5Zg4Nm2ixgRrwgaSewA1hrXcfRBV6KLfPMtjUHuu8ay42vbU8qPFpaoVUMBTsrQ95",
  "key9": "fZ7cMGSWRXWxJuTuTDmaSnPWXq1jubekiCcMcRmtuLw3ctDF9yZnpwCpxP2SUpMi6gfGNjSiBdGVKkqzTbawug1",
  "key10": "4oAwp1p2LthGS7RuZXxGTsxSZ5PgUq9FNNcSAGqM6QVFyge4Dq7aZDHa96zA1jKcyY5Du3hbjkXuG9HEBPYsFLF5",
  "key11": "238rdZgjbZXchXbff4xNw24V8a89zaz1hBjNbTi5LYpvE2h39R3GtNfN8DHhQuLTfGYg8UtXyYGhv2YjVHaVqUTC",
  "key12": "2ZUnAnbh7QpKMCpQ3oEuWu762GCPbD5vHAy4mBBYpnB1hss4KiW96a2a3hsZFgJWpUKd5Q7bwhKaoA2Kd5mTPkEJ",
  "key13": "3ax6g8dTnfCHPbvckxpfdb21kdWJaZWbgye6vnt7Jb8f7exdP3oEDu1EtEAdqxhs8W6yeAi2qLtxBwzBxR8k9bdj",
  "key14": "2RgEKpKBdYq5xsksVVfJGUTCUsAZU5iD6jcwQArK9V7quWtW1V9bXoRRXVUkuDvUcu3ycFUhbWvADCgvZVErrpvW",
  "key15": "5LEMV7BA7UFoqq3mgPYYop5LLR4ScSfaGzfYMTvXczSuYJfaWSgvS5gbouCJyjgJZLjSANseAVfJCspkyuzcSChX",
  "key16": "5bW9nn5WeiS1t7Puv18kme2rbhqPr8agETLuhzonTdZ63pePmRhECyDn3UURSX1G3qkL5hsrCbWjMqvpkUdw9CKy",
  "key17": "4kg8W9tp11UwsDTCv7c6C2teG71GdAJP6y4FVg8owKWhdGZhY6kXTXAb8Mwc6LTv1gVY466WFxmVNRrbevzZHJQW",
  "key18": "4FroE9dydexowxZ7ggUbupjZX2iwLunSgVSraBCvVNoStkBF9TjVA8sMJ3xdiMrQo3KSYMAtMLW3bmGxYuzf7WZQ",
  "key19": "5CMkzrjegdiPMykzJmPTdAwgSyy3n9iRNuq3tkuHzE7gibShjHpCncqL3Ewb4y92Cscw1LsUQfs5fJJcRbEFSv5Z",
  "key20": "2ebq3AVJ84n7PUvUQXmdcjqvKBtVr7yMbbNQyN97QyjjmQP34QdMqVQYza15i1TkrmiE7VBm59DUnLVGmiHX6RA",
  "key21": "5HAuyTfWoaCEcEu7NHqnAEnptX88yD9Gd4VN5TWfh6DAEHjfdkio7L1gHAQMn86jv3cxB6JJELdZqvxqqa9fDTGt",
  "key22": "3MTv9ebYMFwA817S3YE4P9Z2Agry9HwxNWAkBGbT2uQsTfZydKpTEnM4biwzKXFh7C75QojnVDHST4G72zQnEmQK",
  "key23": "5uwrKHyq43bRodqfBWhXkUFRU7zDzZDAGYfKHRqHtN4ruDRdwiVpFCKxBm4Cbo2xAF2wHjaEUW8REWQbnEuZAAAx",
  "key24": "2hTjeGDLQAPiyUJLJk5aLDvMNSMxWTbejwbuQdKmnHx2BUZKUwfvg4XyBzWd97Gin1hrvmFF7iBizudDYrbsw2Rn",
  "key25": "4v2dmcHAzkR1SQL3h8qdNSBNm8GY3D9hfyuHKD127S1xKtH15sDoLFNG7fXt9WqJSL7S8JbshyuRie6BtpGW2JA3",
  "key26": "566w6ipAFjWZwh7nJd3mfXJcd3W2Si7QLZaYsyUF2kQipoNCEeih3yDd76aekZjXmqeWjUPy1Najj7nfP4WeDbEg",
  "key27": "3WFjZBBmn9JNuYc4cjb8MtqsYsiTXARcxeiptSMhzfs7TVF2Nn2UBi2kQVsGoPPVgs8dmrLxQsQjojkNQPPtqHza",
  "key28": "4vrc25huBWoLYeK2162c5SYtfrng5PkARfekwAZjRCj3JKSUAasgZTCva2v9oFbNDNQvRE5YbRiN5kbnfYyeksVe",
  "key29": "2rCumx65ebUJpHj18PwD6utY1MWoDGMR7SA7t6hCxpB1CFcEx5q8Bea5duAs6Gi8pYYLUH8M3jd5LuomM9wUnLFk",
  "key30": "fFphfKYACwxxRUHeW5tSntLdMGGuX3vQzeQBWxNyKDpBS6DoGiyH4Uc6DhWseq3BcC32UqbEAX8aZikCnNvHiRM",
  "key31": "4oemSYBkme1TMmekn4yE3sAiu56KsYsDm31ed4Vy5nxoBgFdSr6dNJMdCgeKXz4yeP1JKjniZyLXir65Hbcet7qZ",
  "key32": "4UQKCvphRK6D9HL998bPUcpfLeD6RJMJimRdY35ZAzZB2BWrknx5dvK9mEVNPBhpst5WBdZAUXD5DGW7UTTTZurB",
  "key33": "5XHq4dmNaEW4m4967MnXnT6SjKXntgExe5nvRjJxCZ6QHrVpnTxNB5cBJBaXHRFfRUts3bhuAKtStjxuZKmgaQKZ",
  "key34": "4fwEMYajEWzrqfieE82rR9gdxw7Tu4kEYKSGeaisr3Z4qFyMtNTbpQovktfv78bCQuPJADnqpYzVEKcFBRbN1foA",
  "key35": "5csZy929KzCqYWDFzjhYqemHQb96A1z8F5MAoSkpLNLRkaXpSxWyowvUscJW66vU4vUsUJcK4xjSHoRfM3BNw64M",
  "key36": "52uBiXFEcJYUNXedCxcuFUEMMKSBn2xDDuU5unUz35sFPzi3RaxWzBj5DhwPbb3QJpPRQSqwx78k5p7NLx8bSVTS",
  "key37": "5bf56qBU1qijknUrShQqCVrdUMPiXJ6MbhdngXjLoFvsiqvMLELeiLLM8M2gvMrc8jrWHJr3AqHx7K3fdKRRhg5y",
  "key38": "3hQnmypsJEyEZuNDKHCzfme7Bg6YVfcVD1QJhFgeBrSeLyMQi8thky2FJeFtdLiwf5gYV7t5VZ328Tsug7XXiCkt",
  "key39": "2ArTR1EoBnrjXjGWZoNSNq6PgUYnNcPb3foVwQoei9Hr53JiX4b6iU98Bypd8zhooENLvkCbEevLmccp3eb5QRzn",
  "key40": "4eATcsQAfscYZAQWDsq1GBK6YvE7fcx9iBsJEnCEwCfQiW5WmEpu2pFQGcAY8MVyWE9cT7DUtbLcYixigUGMsETq",
  "key41": "4nnV9yTZgaVFRyiBnHHcFFwWnRrzhvH6yGn3Z8bUEnCixPDTmKE5ruU56oSytTAk1qtBwFpeLywh7zAUbmfEsMh3",
  "key42": "2JerTaNedkx7jBNmazrRxorHD8LX7MVN6u8aBFbe18hpSpqyeNkmZoZ3azYqZXKVAH4kREVRKaawqR3oo4j1B7rA"
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
