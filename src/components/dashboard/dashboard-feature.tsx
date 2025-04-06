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
    "2T11oE5Y1oYBYsa6NFLt9ENYa7YnBVJjRq4AX353vU4CNHQob2EzG5Htw6KKD9iw3Ha3nYrXVBaUTCC6f4kE3nFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c3MunGiFhJUzDTMF4wPuNhBqpDgfPWkUFGFVC7xYQMBMg9kAkn3SqwXuacUHwtxygrSUyUitS3hXCYBVaYuediF",
  "key1": "AK4kFmtyg9V7btsmhdBf8bJLpvbuMx9sANfcEZBK2sBUs5gZ5V7UXScRLoxNTKJvcsfUUzgGYCV12nKG91xEX47",
  "key2": "5jFE242ZRRZEgFLrcM8zckdeqhp1LswJsbednQGdEDRsJKTSSJT9a4mvE6pCR8acLkfq99KTaPMsM53QYWkYyT1B",
  "key3": "sqtwwrbTRPJRMYa87WWDxzF9rnYAZ43PVsUPR9BMZWRHuP7EbycpDyhQzn6ur8VZuNMRKngMj5r5nyxXHUqVLxQ",
  "key4": "DMJFam6WiX75C6A3oGvdBZEwXyuraxV8NV8Js8ewA4sn3mmFGXo5jjHiK9AAAJjYC2CM61CipFpLZNRTzf5uTbP",
  "key5": "4vdkbAc1jo9161sZkGzFDh5fERqBc1bmaCA88jqyRWqbpcQfRokgr2MiTe2kjNRGAq6guxw8p6Zv4RVBTzVT4yAb",
  "key6": "BVDnWdEg31mmctm6PiPAxHsRcCvMQ5s16uJQWQ3L143SPeQiURZH8yCvZpCB3qaYAFQMAn1tLiiaDySCTHQr6xA",
  "key7": "2uzyyS1Ym7rggf5vo9hq3ocEWcgH2bJi2jK5ewwK9eUp7DmD4dKrVN9hj5JW8V8F57yeKqFEwAQ488nAEWd3dEJS",
  "key8": "27X7McVFwa8gmTDEp79p1B1vkwNk3U5mLTXeWUJFwuLy1nptnAefvL3dCPMMHtwtm9q9cwugbv1GNYFZqZ5VfoVs",
  "key9": "bzbtBfpfFmwe5t2VMMvAw9WnamzJnXpPt1GPR1Rv2RxTe8AKCA9XRvP8bP1vXdbU1FKQRdRnzy1Up7yj6mqXREA",
  "key10": "4ZasTwTiZuZPZuA9CCxvtreoWBtNTs4D29B1UDPaXTj4okqyLhfUNbq5mxcLsC4jzBYeuGgS4PHKnqRUA1ap1wC8",
  "key11": "3YE8KHn5RaiwyrNyCp34UKUMncYdVCy4sZVtqGKNcnR6gxaMJNdymaXz3wzUXNzQNCxKPgZJ46NPaxJfnw2aF4mp",
  "key12": "2JWpw4NfcjqPT7havuTfUYN6eEQ6FNVZrnFwzf2R3o7ovmDLcNA8otL7Bwj5rDLZfL9cbeFLwogKsa8t8bJWyq1k",
  "key13": "5LEukyCUHBDPSk4io1Ggy2PH5U81Pkb5jW9AYJKmXfgJmRAnhjVfUFUp5T51rR9N2dhowBVdZbCFrzzRHDPzGAKd",
  "key14": "4teN2mHLbvX6T5zpQQkG24b1qjowYaV18gqMFnjESxMNWdZr9o8CAhbBprPtxkgSwte87fEpmjYXLW1JhNeXj79H",
  "key15": "5tKVUEkRAuX6PuV5GqzGT8kizJAqE2UnvmN5ryCDPFRomuk3cfSSgfPST7ZVXzGyB42fnrhdqJ8e8Pan4rHnqwCs",
  "key16": "5ajuTPLMjzK8JR4Jh1WdfJ9iZ5UjTDWGMfQYSWRYXGovyH6P9jgPXGZtDLgS3m7p5cuRcFhp1ykmX64jasQ3B8WX",
  "key17": "5bXPm4GMtFk18RZMrMsXc6aE2RtW1pPsfWdCn4hHja2USx6uuBc9d9EL2Vgjz3XjPjiSyTb2f4gBtt8RN2i2brsZ",
  "key18": "sX8LsuRCP97CSd83fHGzRByD9RtB5Ug8169TTLxeSjUVYeSsdSXHySyxFuMpW8W8aYjjvLvBcyMbUKizMvPkqJt",
  "key19": "29dhxB7uoYnDa5yP2AX9rxcVQgBtDerxQhp1RXFxVfN8Pupi6BQZ8h5dnZ7LPhiR2LX1PZEfAXgqW6k5dqFAaig4",
  "key20": "gHr8Bmr8WjxySzrvhdPbaAeXZDY6WJwSEVNWk6VHrSJJxs9dcNNZsdXupULNzVj4rbygaRmNCrgc2hmi5s45eKL",
  "key21": "4U6Zs9aCgo1Rt9yV8m29FhoDFzqzJp6aEo1zK4rGW7mXN8gsLvimxPiZhZQ28VocMxqrh52H6qJxBcqdH2HfrpeB",
  "key22": "3s8uC9peJYqiWTwaZaxpDsipVcWfAVZ665T77zgtErNMqt86feJKHNeUaXYC3nTncmJdzXYD2AMBA2mWUCwhjp6b",
  "key23": "4nGsdAqMmfbPLiQ7TMeZDJGPLsBNqhQ2ccbh9rGikMVgn8uKwV7CZ5MqtiML99N746a52h66f5BQkNTDvn8RkNt5",
  "key24": "AodgHX9qjkRCF1MmfWFoe3e6qEWkFHaiUhC377rPfcn1mUaho1dBguqG3yHtucQKJr63yUUHqPMFSnz1c13VcXS",
  "key25": "23WQTs4XhWSy1XqZCp9HknRAUGTD6o14o6hevUCRTLivSzTwH3cLEQ7q7NS4NKhcQDtjFAFieA4n3o9mcsc2i5Th",
  "key26": "4bohdcSKZEiVuYwtvX1bJJu3sVjYVBKjWsda9aTgJLt77wCn83FN2CEUeufQXaQUiHJLqm644gU2aTFBuwd7A4nw",
  "key27": "vsKxGS3JKaeN5pC56zV2j6f4khQy5tRy4ZTko1Nie3TD74AGt92oM7xZUdgtrqsPABvWjsXqNaVi77yEorPz4Bf",
  "key28": "5K1ZatZKUn6299u6TGQJcdN5XUBKa5YpaxsqfCYfLE2nDc6BR35GqUSLDCoKPWFYMZcnZWxZvboCcywq4d2Gq9iP",
  "key29": "4Hgx86gQRQXKAH1udd8MoEndZkFN8omwmbGiF3EYqAsqYCkhP49gHSwEfSmNKVrQr1gUsfAXQ81eApJNjqunVXtd",
  "key30": "mgwcBMZ53zbWjxFvLGFSL5qEGadCUK1ZSXhsD9sZUMWAQLegYY5CVSqzfDZ6VGW4KD6kgeE1tYtVGXKzLwwt7YB",
  "key31": "2SWyfc6vaSEnyXVMLAEVN3icC15T6dfpC28g6EciGiV16vN13TV1rkouGUJP7SixBpNehPwzVUvqRgxtYG7QrK3k",
  "key32": "UGUTMHoiR24h1hMiNWmayhmKa5nywDV7Z1cJkqmQrbn3F2DX5kqbkqTFJV2gZguTCtbTemBvudoaXo18eSaBgxb",
  "key33": "46Rwk84smtbL2a4R5PcuC2GWRiudz5v5mqCmHwB2GKVD5TuE1H3QVJDKL2jP5wemJKK7beU59PFffYGTmKauzn9K",
  "key34": "2LCgHQqFR3W6hanmhACo815akrP7rsrtNLiZtRfiUDgGo7BSoTDqnEZrLL7GcN8kyiioXsrP1scenJAJpobei18R",
  "key35": "3D7a9uEhuD8jR95Djspa9HBoo6rpc4DWCLR3UCyvLw36wMEHAmwhPKFiMvMTpc1dSP8cqg9siWQMajZYhM2kaVPa",
  "key36": "KBoL1HLUzM4QQZoJdUehkEkuVUYqdHvr4Vinpn1Xb7GwAosUe7Q1cz3r1RJsi2pXJReNBnAvoPwnpfQEW4dSL3L",
  "key37": "32DLEq2sK4UvN6N7f7VekJCphVThG9dVgZyEevRu29BZU4urBFJnBWeKMQ95r123UL9nF5EAezQ86ovwd89nd6M3",
  "key38": "5HTQyGrp3KfKyTNap6e8XzAptsauj6qXcsDpv35UKdYaA54qD2GZeYKA9JWaENJiGVvK5uE33oz878REryt2jCdF",
  "key39": "3uNVbfjcTgiau71YkcfHBgijLC5yk6zjY5VXhstFFZHmFMZDU4ABrQBJbizmteMKLyDosqFcerhLdY1YAaPmoR9M",
  "key40": "4auTLwzMp64AtT8y3xbUrmDfB9Da9RjZGFwYTh56Xkd4Mazd6GiBKUoWaueF16cJhjshngvdwZJjDye4uMVNNJG3"
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
