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
    "3y4rmM8s9PpFvnaNW5xpGGs96vTz5oQn1cBbUwf6DdUEUcohiAjzYF8KKXhdQT4RPf4BYyKtAxMYxXFvB7ipKpLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4namJhtUngzgvK1Z6Q5Ms9cyUd32zhwzp6Frz7GWk57wCf91euHtwGpnh4zzRqMsW2sb31MYoYKL84PisGnG2Y3A",
  "key1": "4XzAX5k5DAJAXVyw2wyS5En73xe6btANxfkLuJaRed65JKRm8gQFa3oEXCDjEA8bw8uPn36SdaUKcZPBCiaYSxMp",
  "key2": "49tXvJc9hH8wwSpTGAEfYFmrWXsh9t5jwMJvo2MhTi22n6JZHYPYhSYHqN5fWvZ1kGTAxrbDwvjPDzuooccih2pY",
  "key3": "41ABw6FGBTYRoo46T9xs79vdMGrvNcnd3SHX2TQXN2wvKKcdstFNwmwPm4Pp5KQyUPmqZeDwdEzQ7EcQqtYjup8N",
  "key4": "2kjiULHAFYzKQV5mWLsY3Hom9Mp6weQ4ptgfupPEXaoFxHHR1vkiu3Dzn9DoewV3ifs6gq4d2FLvT5dKTj9VcKXm",
  "key5": "5fybmVu2g4spzRgrPHrFxnD7iSoRu6U4E9LFi25fhB5ptSEcjpFHYDRkot98A5gH7nLuvpwpVsyiQQZhTM9WZmsb",
  "key6": "8SCGHdC9qEwodcK6mZcQD1Vozg4P6TUsPbDC5QA2eVJgPpCwuPoL8zyB29mXZwnDoLGpsfgSMnPNG26xpDKoefa",
  "key7": "wnZfgPwh8PTb4A5iT3dn84rZ6devVzAa25zuzEeDkyQ8928sUwkZ3am9tqJq7j9kb5e4858VqFLDiTnF6Lkz1SU",
  "key8": "2khB6EMZqTGjdKGQdajXq2uEcWkQVCVBNHqX8B55hr7XzExfU2JomZKdZRo9xdLpeQZvf6kzWcaDRUfBYxtyqE25",
  "key9": "4CN1aNeoJmFDzFypRnRqKTyqfuHZHU2i3UtrGFxESq13YSoQe6fkLyemqcwsfQG427QXGkDFLiENLaoEDQPm4Wyc",
  "key10": "L12yavxX64S1GgtFGNs5XMfUKszuS6GJeoCo8PgPVQfKDazHXNBBqgf2PFRT8et98TYLmze9HphTxXD6AAzqtej",
  "key11": "YsETs7aQsoRPPFv8VGxzJxi6APFY6C9QDbsviV3QYnq8sYxR6pcgg1E4cCcQDKDHowpXrB4cqGQyT2VQ7xEUqRU",
  "key12": "4wpVSCbeGvdScov6Fy39qztwVv7y9TMtmgvq5AGDYq1PWdjw1HcwEkZJTxkEjPf4Wu6o9wffdPpnFG5PzH6GZCBg",
  "key13": "65nxBepCos2K6pFJB2fCgXiYY11EknvtvfeQjiErGmtwFCJqLksLibCqPjzvvwzjfGQYxkg689SMYfMaU2rFW9tJ",
  "key14": "3pxoD1rPQPvexemwgwnTfFxqwgdaNXKqViHMMvNFFpRX42fPVSFjPsHHADYKAffTSWLntiJxou9fVeM4hnsoQtjo",
  "key15": "41wXBJscJDUrLHmNumxzsX8siJWHMRVEPzsM4RFZBp2qJoJqu7RiemSoW1HC2oe7DLahREuAyPmjJHqLkmD4QSiQ",
  "key16": "56XbTfT9ABqXt3Xm25FeLVckqi5GoTdNJJzXqanZosJZdvyDGS9irp5NPkkf7WBwvb6LbmsedU1FNRAikBTnthfp",
  "key17": "2xV8uhzFt87875qGGfy3yY9yVQZGKs6phpcTmpKizgHqMWCytrSjTXndGfa4RpjM2xLHZsL3DM2eGoaXzxpuU8L8",
  "key18": "3gK856pRbobr6J25XbWH1DYRYRdTfW5zXxsFU61EJsgEKNJYdapHdfmunED9ZBRFLTfiNH5JdBRRxhNzjakSgKYx",
  "key19": "4zw2T977HML8LCv6buy8bj7F8y8HazTZoS44w6oFMuKMLjDz2AgzGYk5QNZwmb5z4YXzcEigEP4DwxLqug6dqHJ4",
  "key20": "wqiCAS5TBCvRcj4dtVK24pbMqK7EvSXHcJqWdqe9y9zKcot9643avr8JHAg51YgKv6n3iAoooE2KEbYiiDTDGKX",
  "key21": "2qTtDpeDW9UDf8r3KUtQB4kvvSErxp3U51SHkPzMS31QxN9UdXH5boHJ5iDQEFHX2VM6KvsuUwZF684WqtqN87Cp",
  "key22": "3yDuNhuZNAeAoGR2oaNAgojq6WY5GwphYhv7JL33X5pSs3sSa7PUUmwD2sCKmaxGn8rRrC54W7uJqYVsjJppM3Ct",
  "key23": "4DvYMKfr8LgsqrxMoxnkVBsWPTaaNjTvkhpXUqKMtmmkK6qY78Hbs5aRG5eQ6KGkFMmgnLV9vPNAxd1xbKLQQL7r",
  "key24": "4wmrJpR4k37SXGtvKMuyuGvzDLp7kC7ukQAJmm8GouyAjA7i39XCFrcUuNBqawUk5Y2QfQfcCrpbyB2aWriLJGYH",
  "key25": "5vGjNNsGsrUPrKxpZJQtvXRTsVf48B2zJuYNv8W6qqa9Z6ZVgkFAZFUxzqYckV36opK8KyewKZu4XwfoZfmN8qDC",
  "key26": "2p5EeyN7QfEZ9GURma86LtbxonGg7JF6NVmjGAdr5xuXFDopW432dmU6cgSetRngBXqUC1xHwsjidT5fRdFifCq1",
  "key27": "Wu1gP7RzEeEyJRK9xKfn17Nimp3YjaNsmXY51L55pdNLSKhSaovSj6KKHDRe5Po1DveLX9Vir7rfsPTbXeUEY7f",
  "key28": "vAAJcLDwRRT1QqPoBkXL9uaxPgrp36WGX9NPom1DZEBQjLzmpB32XDX5kH8cFgKK66CTLhZv5bVAo8tHr8orPUD",
  "key29": "4PCe6yVhBQCx4AxzY3BfqjXHkTeiMcMQ1SNGro1CHSBShLASUamuE8vvnaUdKgytWXDwagPfoVvYWfazMBuH3g1L",
  "key30": "5wTPngpHCMwo7dM8CrCPPZJmkJrzyaRzKM2URs4D3rGEhzh5VT3yh78a8hQVUvXedwgZFTT1ctk6CKeCcxrn2ZMq",
  "key31": "3fQqdiJX3udmYZJP9BfGXRPCJWVtdHLz8D5hJs7xDKdKaAounSZ8SfzQot5iEjzaLYeg8Qw5CZ6K87nzgoNhSYYv",
  "key32": "R4EZqxkoXAoW6k6E71SbQeDirF74VqkkStzcLoMAvu16XBhrCTELPXj3kwW16UbQ9bCGhsn6kfzHjbsTofonhXN",
  "key33": "4siXnosKV9oxfj3y9squbFFcaVNKMD3Yk8gVout5e1JuhZhmhwGq8MTC9FZtpstFPTTzUuW6mQncHUZDZdLc4ian"
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
