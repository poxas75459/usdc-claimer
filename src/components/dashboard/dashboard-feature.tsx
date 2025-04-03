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
    "276JXNi4LGTbVMNqdCXv8niNJDWeRW46GmtkBspQk2q81PqyowyzGXYsHVFPfTCQG3qb2HpC41ByyMQKVPDyqhgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P7kLv7913vnKKnA2mYM2APdR7Rhj7Q98nPZp8V4GQaDea27e21qhCGLRoMYsix4Ks72r1rfYJk1Anhe11zRFM4R",
  "key1": "3wAn7UBZBFg9NfK6CcwUp8rtKTb31mngu3bKj3gymBfLDiYPA7bhouC8RD6xrKZxJi3MU98Vfxnw2YpxH7YuKhhw",
  "key2": "3WS6DQosDWwjUU4LJEe38rmRqWbKQMMiQoZs2i6kGdfJyutRjQBEW6eBeVbzD1b7x5qawKrHanjCPUUz3hSnGyHF",
  "key3": "2xdmLQnrfpC2BK7Hv5wCdKyVZtwXhXmUvkPc4WCzb2wnq77mZN4YcD7PbvFRkUQtfB72Zs9H2bx9qpg3CN7tinmd",
  "key4": "2wvu59GhCn4PLUAd8wRq7jLwvw69CMxCCq1MY7Xmo6zUBhZ9n85WAzxCApV8iHVrm9u7mdzJujzVbk6Po7doNzhX",
  "key5": "3M7jWagZNTmr2Mu7s7CTy4mRQFqzYWvxvWB7JLouyc1Xae4SuuMSF3E3LLu3G8xKcj4Khqund32d99qk8a8yUD6u",
  "key6": "4ZVYVHG9Z6cmXyQLnhwmDVZJxGwGz82GpvW9C5q5fizVLR6bUA27cTopHAaEB6vspeGjbSn6Ls4mSyn3UtiRdNsf",
  "key7": "46ZhNJcoa9FkK7ssmWD7krLaDxKQHuKagh5bRGCep7P42YwVcCLbvTeBv4d75vq5UQai3md2AaFs8nu3emcH8eSy",
  "key8": "H2WvXKivES4UkeZ8ENXHXYPMnd94noX5jZ7VGjDVzdCpUyVFzsLVLaKZKNGDcXySFwYEHMjyWXjmSRdR2BSNHSt",
  "key9": "G7KJkZCT4RKkC9NfMJZDu64PeUZ39WCRH9CC8eqT7GXFNhy6vZpWjjr18zNJB59KopbwD1KPQyMcTYFYhR7kFFY",
  "key10": "2g6ABZLV64ZhyUztJheGJf7BEskZc9YBWscaYyhTe2UGMvvN4RQXvr4iwgoct8nDchYXwpx6KJFxdHhxS5zGYTcG",
  "key11": "3VDSQsmhJEmxPybZDRLXJcokRq3Lkq7x4FS7TgeZXJJx44RCMusMrTD5yFH6s1mDJANma8UuSypYsT9VxsyasvP1",
  "key12": "3Pb29Q8ZbVz3XEJT6tFCFH9ww4ngCbo5fhdsDmRnY93gXt66P7qk5cjJ4iYbTCSPynvitWfdADuSvZZ6daXPLcxy",
  "key13": "Z2PFE1mb1DexnD2oevAzdMibah1oD7hUR8nWW6KYNzq4hnLzHw9rRDPav6gAoumtEgGcLSZuhQjkAH3CUvEAUVZ",
  "key14": "QtVhUDVPkvRgBATLMaLiGb6zaLj9hwci3uM1uajfWJVKvAJCCKQLgE9UcFb9BixqRfckMtGDkWQG5eNpZBac1mC",
  "key15": "2gfM9Z4fBFyNbK3Rap4c3CKA9ep51edbxzhtAGGtQkBYXMvXUSbdYMYC2uwtXtPaKZh7thimkZaq9KFqh9mxEUF9",
  "key16": "5MvzWxpV1gkgJSg9A3jneXJye1zy28snFL9NNuSACaYw67b8fZ6AwbgLUUjvQwiK6aesKVofsu6d8cKheRYCF8Vv",
  "key17": "5dqLVAjiwcKSwNVqXo2Cj7ziYftgWeED8xM2S5RLxSbyxLnLKx3UeBtDjpXWa7dekfG5bmi9VLwx3pF6zdK9f8vr",
  "key18": "VR4rZTMd5TxRFbJR75SLNeZtVAudDWTmsgCUDHjGHiTUAq92pF3rJjiemysHrQwgCra59qQo8CXL2auK6VuFAeZ",
  "key19": "4nK1kgR3hQQkphYaSkFCNGjA17CYFm3o8FXcpxYq276KubWxdAgL922zQvMeagvqtt3vnc8eFoaoqDovhGgSQY9F",
  "key20": "3XaVXDCcbHaYJVh2i56juWQeaL7L5Khj7Tqebk7PnqtMfp8BofeAsYwjcDjM9mAgXv5e2EUgVsVpSTnjyBHTRSYd",
  "key21": "32snXdXjvn4z4AaHeiFVtAiKAUoGq2fVmXyBdB4Re6rgvheWZmGGvA2148AcLparHgAexk9ny7xYRvTNnwVLNdHt",
  "key22": "32QR8qPm8YxSmeLZ9mqddCPm4aeptGFmv5EMuE7CC9y99Uv7Crva4UQh266Vgx6MssYHTkxnBD7CAe5dSSyYa5mj",
  "key23": "2tKkbRMG6KQpuGZhSS5hGYGbqQCgz1uRFMDGzo8njsPkFcUvQMmhZzfKDDinhLdM1SaPdscSyuZjrn3t7f4N7MWh",
  "key24": "HcwotLkMCG472n52erEWAQEPiBmptBb4rX4YANwUMft4phRhidzWyLjm3ZQX7X5rGJvHzP5QahxtWuFZAQR7UyA",
  "key25": "41DYJN8Smgq76ZHKXyUd3kBMzHiaPTigNV2KhHLguq9nrf7LBSM5VuPrJKR1b7yrirYueH3JGksXj2t1HFPgvQ8M",
  "key26": "eS1Jzoxcz4hU1GzuHM8z5RjJt37J82TgNK316JZHxo7tJbrXnTE77oRfaQrzenQkaMgyKXPBLWdq3zGtDMy4Vsc",
  "key27": "TeWwQqqhitJLnq7vjKXKq5fBPmS5LZbDZk1EDDmKA1sAYi2baQ2gds9Gw9xJcX3aDgEa31MfiJQVrCqTiDTAEvq",
  "key28": "3TJUqbDzTCucRfy3DdAR9wjv5YKzjFmEQRa1VSkQLLm7Exxnj9rscPv8ysfMA1H8cQ2qxGGVDrriQtcy6fQGFLUw",
  "key29": "1qsL6b3J48gj9NNJ42BpAfJnHeETkVqsH6uS5evVPkB8gp1VyEqs59vAvJ2fvfYr7hRXCgth6Faz5KAweNby3w8",
  "key30": "4BMxirMx4DjfiE8CPGHcLncVRLzdTAuz5nBxAaNWwYt9DNc752xQGe6jysAHTuHQRjsuzFSfUHtZosRv3ymVNBU9",
  "key31": "2XuTji6FECV5dq89HGsxmQ6W7WpepAu2bNBkKo176fveeW3QzmcZZtPioDM6MpTXLAYPjCLPTFNsppNFDLfRHvQD",
  "key32": "FqYou1myjCv2gX8eogqgd3Ad73fsmUcYer2U9iFauMatjNeXsJY9oBfApDrVv6yFkQobwzGKs24jwbnkatb6GRC",
  "key33": "iNxztHTAwWGPebCg1Do2wo37k3LdDdTV93h1Jq6xjqM61483q5YVuHsqu8Jo6YCvDxW5LWhAzkFAFVRAcPUGCsm",
  "key34": "5ZVtTX8zbfidPmoqDUvTzzuzdNr7JjC66C91gq9mcJyFYbGtdHMAsMD2Ge4uspZAky59cUjs5PWNobwiRxUJUMPd",
  "key35": "fRpHLsuDc34ksymxTztTWXFdJ8XrAYJV9Za1vWaUmkgWR1sgTKKkyrQf7un2HBaXVtd1YQMgZfv71SGaVBHdcG9",
  "key36": "2aQsHi39wEoDNFdHdYfiu9cBwjegNeFF7xrsZKELZxVamKCMxrJo9bs2egGggHCEYXE6pgKtxSjFnMqLS9DHe2Gb",
  "key37": "wyyVMQct65uK2PMgjvCweNWCDWkj53Bc9W5fwmWakSXTUxGgc11PHSarALMcSRGzn7f5Eo5DkSiUrZ6oMFTfrc5",
  "key38": "3gkZEbBWW4Kg5NjW84315bVHeEC5U8w7YMvxhu8QQjV9parjVmkou8y11xyiYWk7cd73kKLvHc3AnSFm25B7cB5M",
  "key39": "2jEMwShaQu6kvcPLWajVLTBJote2NXaz66MWZfhA9veiNzzV2bKEyadL6tJfJR6wp1ginMWPTqxoD2Z2DnkNaqdn",
  "key40": "cLYm8zjWyXfmGkB3STv16pwUcmGsfMjLx6J3BcgJfRXvisRs3bLCByS2ibo6xK5qhwfxFMKjUpg5Di5tVSzb8dB"
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
