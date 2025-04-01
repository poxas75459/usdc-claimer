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
    "4LoUZ6kpbwsDqxo9H98wcoggxHdEug8x7qeW3gtL9yriRU3ze7Quf7GHh8d74bXUHufNMWPx4g2Q5kQyHnCpSmU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6vXD2AV6HbcaLLmDHRaKtoBvkTztdwJwG29igxEwoYWcyZNx4H9oZAZcwgxdGcPPd4h774iASKNQMVGXc15mMCe",
  "key1": "AxSHk8EnT3nwjpGcYfQH9BR1FNoHDNKQ15HK4fxGJZn8byzsCrb6bQDakjkSAQQK3sH7QYk7gwcoSyLr3MKNmZM",
  "key2": "4jWAHorPZo4kFTgbtXn87wNSunvQM1XQEGqMqzuCYTvABFesYjsD6BupEhahX2GEkHDubKFK9X1a7ZniqsVBXxM8",
  "key3": "5Jrnagggm5BfTZkJuV1cWbhN8m5j1byTvUn99zHvHrKhLBCGxLaCHPbfsHkHpzEZbq86cKsPmysSBDmMqSEbKsfQ",
  "key4": "4v5JNPLdCCMVxJi2vE7HX1rfDDL3wbEBtwVUJZ1DyEfPs8dKDzHKSbWVzpzXB6GALGvsycuUwUNN8J7QSzexErg6",
  "key5": "3t6eYqnZBYPng7Mi4K53DzQiHERW9CMVC45Fv26TV59Mb1myzCGsBLdnYPGZCKx537zLLXdXRx3HsTmmKem3ZoP1",
  "key6": "4ZRDuYtsN4f9LN62Ezzzi3yq8Cn5Gnp33UTUx6fCu1PpGKNdwrb8TqFJmqes5LtLsLVStzG2CqEXoHK1prpCRwB4",
  "key7": "5eDamm1M2sPG8FuR7UvpS3r6q3uHA1xpFoLtMhD2C9Losa3ohVJ3mBZdReYM412SokSYmxrTrmVWxsxZooUFsNZf",
  "key8": "cKQJp5RA8ywH1bxFvsy7NrV6q66o4pSb5e6tXA19h2NskZfpSuekCvUrrKhkd8PcFPMXLiLFBRcbz4BL5f9htep",
  "key9": "5zoY2T7y9ExWKLTwZnxTo9jjJFZb7vEPGWd5EKvv5bV9JptZD8BYYDqciZp4TtkszBAewGAjhGFguNVmnVvjBdMr",
  "key10": "5mpbBCK1pDqVhpBN6UdKgJyhBZ147pKajtgoXfT2GWN3AowJLXN7KBG2cry2LcCPXE2ZE7bezYnVJunTPfzeQ4Ko",
  "key11": "3jP9UmgdtFfsowkdrnZL4aEwCrdV7g7pxpooofm6M2Yvqo6o5X8oqyKHwiA5i2zcNQeXhGkd6kMMCoB5kBuQwCFf",
  "key12": "4uEKYpdeBMsmMR6HsB6SjJfnK9jHZpG8KfRVXJGVYSEuweMYpSk3Cw6gmeTUAYAYXnb82oZABxVgHWiX2AvdvX8c",
  "key13": "5n3wiNx5qMJND1xqb7LjgJiSz55UhBVYWvEf8GzB4Fi1BBban7HETYjqxSQ9PAsCJmnBjkDEmasfD72J17JntZV8",
  "key14": "2nhT9vfRu12yix3N6XP8bZLFXW6jdGWswaDBuPwGSmp8qZnRBi2CPzgU4QfgoGakCL5gJoH1D63tgYU5N7qsGdsr",
  "key15": "5aFb4pZvdXM1FMfsLUpmdDZftnR6yfMkV6xKZeU8ouHMRUEgDGRpRzHfa7kuH4XBio7CsZjF95hUUrSj45GcPQb5",
  "key16": "5JqU2VT1zxT91a3PX3KBGTUAunAjVc7pTyAxXDKef52jh1jJ5naVoXvWkVs23L8ZjAHzQmKS6zBAaoToMQP4iQSq",
  "key17": "2ua2dKyQgJGLs3xQncRgW3cV8X2iaouHyRgaZozw2KnVbeXKr8rfH6oBDgqu7wYhbdtWBeuPJhWgSYfcXFDD8M3r",
  "key18": "5fvptaJtydmx3H1M8eikn4tiAYq2gJwXYvJhfjfhRCuQCvczJNEGBELbTbbEfWokjk3fLa7Jnp2YLuETRmdoNEDa",
  "key19": "4eZhhdPQbBBSGwKhvKGaCfPqRqinve1kD1AusgDVDkdTtPfJTQuoQtk29JntVZyzBE4ydafhT4y7whefZJcX8LvH",
  "key20": "31BMWL3qXfdzUJBeqGo1bL71QBRm1zTRnENXDp5Aor9xr5CnSRtGNGJm228q43yWeZc9VbGgv2oAA2qSmw9Zog2c",
  "key21": "4xpG4nyiuZ4nFSi9UgGWFgAw9ifBGjJ6o61ksZWL57QxXX16L4WcHPwHbvJYs6hqNr2k78R4iJ8vSs2gaG1R589J",
  "key22": "4J7xvXEozxywXci6ChJsNnGxQWsG2w9veNDFztrQEJLtUrvW2sRPZ4bXkA6k7dgew9hWmBNQ61jCeigaJwKZyfC4",
  "key23": "27HeFJQJeorvNNzWv5STbawehYpjPZCHVV5Ydfyn6LSwUkSM8RjPqWapE2EdJTQtzVhVnJnhN6KLyGcbBuD8Jyp1",
  "key24": "3CvVM2GYXF8G21MsCKDJS3qv64nqpSBV6Jysww5zmoyEDMMXkWKtHNzs9hz57yEubqF8sFyp7YrrGeWf3TnPmaTQ",
  "key25": "4hmDFPKshMiYCya1GxPSRiNeVJ72i3M8FuHT9x3MTa87yyp6Fc4zBEVhxCxcDUpTdVq6KxRDwJ4vxSYpdwhqkU3i",
  "key26": "YfWSA1pmMt36V3VGE6U2fvBbL8jXJDjbekjae5YuwXpQtsHH5dp4VA5tkKKfwrgXgxf9GW5edfFBuqeryKdfa87",
  "key27": "49vvHowuTQmKyx11RFohKZZssKK5snTmGeyuakkeZ2aXwCFXgtTNGDnSM5GbMaLp5SVbvXTsqnGoQtRvpLttY5dP",
  "key28": "xWq9awJWx7QRXLxjcQ6xHvFHFGtnqEbRqLJbPWemnMXHxodddgWopawQE8oUYy11vFLoixCqmHTBVBR7YcgdTYa",
  "key29": "3UYwLiujVbJnkQPfvRVfACbti66Mrh2GLY5N1DWVasXWWgkpKGvNFH7RgYdVKyi6MhG9u86nEgG3YVQBXjN9JexL",
  "key30": "5rJRf26T2PLGV5zzBuh8XEdhhmdM4U89AHjqNbd1tJ33BWzNNUMApriCMfhehNL8PA6BLGk3628GUEdsQBY1X3Co",
  "key31": "5ieYbFdrti2CHfEG2QVZoCtK73TAdL8cqg6KLHpAzZzSQRwy9VcyiHHkFLby3CjGsi9KBGm3nCqtU1cipefxBBV",
  "key32": "2pGmVuUP2gMbMs8TpoxjzvSS7MLontuFaXyh8uGgw87RgrQDVfT2j1hwbsuTpoz3daUCu6yVQEEWWrKruMXQqmFm"
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
