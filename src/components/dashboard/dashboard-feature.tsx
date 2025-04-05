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
    "2FsX57LNtCAgZd2ACiEGKWxMbQrkKhpY1SGnfTM9dYktwoUGerb7vfumKUheer4FeZzkUNsjNhDCD47ameg7zXnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PLwsWYtSAgg2UdUos9E9oSV641fnyZgBBJuNA3hbrzo1jtquun78TzJgc6xK6Zkh428PnWGz12K63anZZxG41ML",
  "key1": "2Cb7fbujgyR479hTScWCTTyfRaUhrVHb8b92En9iTEqNs98myJpiF9vdnHwNJZJGnTAdKiEEKbBBFGZFNpgqNZY3",
  "key2": "4ZpF4nfo9LhNGpC4h9dFiQwjEykyzspWjfHJyR72Ymv5PBLQcx9KC4PCo9M6SSpU9yZaQ2WfNhRTt68hE4qCPyNr",
  "key3": "QyfvGzumPhN3f2tAADTbgyngCreMPRJKViXUdMaYkXzobH3FoAwM222Ls5LhBuMrggnQmvhAjAiwFtX76VapHpG",
  "key4": "5JajtvxkVNjrNbixEWndnAMwxJR6c9uXPS832u9AVNnBCynGeEtXuGroAyLPRfzYuhqu1t3HwqmgL7FAhXkqYQAN",
  "key5": "5SQULxqxv9aVaEY7xwu5Wi71NFVCoirdDJ78EQhSU3w18vPf8xW83QrHfbpKajZRrZTCW3sudKVgebKvS4gpncZy",
  "key6": "2F4nEkG1vz4pMb2u12vo9CGoWG2g8YnxBPxQgwzwJh4acKm7sd5Fhw8BZeFTEFeJc2hunnrQjN3b17kAFezvdcBW",
  "key7": "2Nh85umcwKox3FcbbRJ7UAkvWvhrgtHJ5RH58MLM9Ut3mr5yzokpHfLqPjGZUS65AnCYM1ApHsBbrYiEd14b76m4",
  "key8": "hrgcGWwA8fmaxfyturFkeG1Wtvmm7VdoxUmuYBBjPJXaU6i4VbAZMJH7axDvpNzdVFSihPzc2AtUFQSsPUnWria",
  "key9": "5YSRDr2xt27eHpp26eMQX4G4iwt7oBKQ7BLPExWVC96KmrGs2PQXBvEz8e8TF5erErw89ucFo3FL3LGkttF9n2CX",
  "key10": "2tGBhXqyMTatWyYnbky4dugytxwzAukf7sDzvmv7gNsyaKmishnhMYPjgZkUTNRw55TbycKpsijzb2J34k6thomL",
  "key11": "2cTihQSgt3qSyou3big86KWNLCfCf6UD8zMFAHMsupKuQY1Pd73xHn8W6cmhuMJCWtS48n7DMmYHcKFHifHPZA5E",
  "key12": "P2aq4Ao4pGXKmpif8nwnNAPR6S498MRmvw1FXbBVE2xMoqCH5twLEeYTLFALujqyJeZLHburiHkc3aR7HoC5HxT",
  "key13": "2i1nGq6vRs9mYRkL9h3FAj8wqkLNvkxc3DGkEpkRdirMVLkVikqETnG7DZP42CrK2cDxGuZah445NtbHFa5fKWe6",
  "key14": "3XNXCBcZwFjvSRt4qCPurjwDAgNu6gWdDQsyF1Ds4xf5i4hUrcaYJeyUCKKKUUvsdKWKSqZxyPBbohTzLV14wTrk",
  "key15": "47pUrcnnmiH7mjoH8MJ1AHw6WRk21jHX3c4mPsqZ3V1fChUNG5TybzgSYEoC4LTAHDx1hssTLXrwuqeHuZrKcKa3",
  "key16": "33mehj2t6VbdH9ziWmtKpoUM4y7hphmFEUH9xFMvtsZeceDVMxkenUdGETU62ucP7M5xSWRssyNtYjZqUrQWrG6c",
  "key17": "4dGGCucB5yTL9auiokD9upcNVMPFn6cXaxy3NFRsr1etFKWCeAXdEy31dVrL6F6CRiN6nVLFV8HfcRrFfifc57Nz",
  "key18": "2zCYzoU5MhK72SW1hZ3k4KpHfVWQLrf48VoQbHhPzNXTEspcGPZKR2cLm7vVDQdvNZF61Zr6jwpaXox7UbXXi5Tx",
  "key19": "5wXgUm7k6htiRR6qP7MrAA12xrBaaGqZuoi7ssARgbgSviKsMgarCQiDE6xym6xNzYMUpB5u8scKt4yz6zqj5FCT",
  "key20": "2Cfpi1gk7mStfmZwBssnqt2XQPJwbvx1qNmXPq6Kn4DHWyyvJds1pQT8YLyscNXY4EFFZk7kcmFk2AtP4QPtAkXD",
  "key21": "48VtyLv4ZVA82pLpawqhC51BxwvGq2VsywD3niaAEBeZa6rbbK45jNScehum316yWg7ZkqrCFCWwfARmDwgfDcKG",
  "key22": "2eMdvzmwjJ49mNkKekQf8atwxZtxPHfyp3GWvgiy2kTqwjsxUAadyhJTCRUKNtgBkB7Q6H2eBxdS5qeBZ9niH7DU",
  "key23": "3ssvUEgbzHcrDwC6SwcGi6jCrTHQRJp9pz4qAoLdV6jfaonezvLevhUdgfB7uexXhTUmbxfzgZfUncpwuUsWktVx",
  "key24": "4Rnrx4fxjYB1kKJwLQY7ynYyyGDNKG1TJ7CYa3fi5owmMpHWQtQ6MG3HPKkfH4Ef2umRPQtZ7DZHubUejStxLzDq",
  "key25": "P5Chk9FyqNS9QNH8iZAF4YjuNCiZkEXVWnSCFTnqGA5KBCA6qYFzv3kLWahTBjB53iTA4dmEav7pbhoXvfokaxG",
  "key26": "4gGWuJJBaJpiJM9BSdrwuJDYaFkkJ4rGnMA5gRu9bAYVKRrCufsVvJjdwHLFQFgcM57MX9UbZvj7jHQdog8UDaV2",
  "key27": "SKCV15K2ZZTZVaoNgxrgyy1ri338vUPncyngrDwwg77JiumQDn2JtYrmx9ecCGbySJ4WMUrYy1s8KsPxAsktQg8",
  "key28": "4tEijTD88pCNHLcNXh32cxEeiLEj7r3CxRbZfkeB6cgRWuJBAJ3KS3JJMgzHAFEN5BrP6DpAEqxk9mT7mcsB34nx",
  "key29": "2ihWu5rBXmMBNJX3CjYpnLyNTfQCyepV2M2cQaE3HZUCK7PYLM725Crzpzcvr4bb1XKrnsWf8u6XQpGNXoubD4wf",
  "key30": "2Hj9omKaCTZJ3oGMpQJcriXnPzWig9tQcmdiuKtUTYe9aXtoaSrCzTs2RMj7x579aFvd9gn4aqVPGjhm5diFEXAG",
  "key31": "37adM4Xsr3FGVzxL6VWmcc7YHssQgBcg49J1hJNJtqrdgSDk9HejehCvXwh3fp581yUFph1Ddy7SYGzyxjqz1T3E",
  "key32": "3fbYDkygFqc2yF2CKJ2yrKrCPpDF1ESRohqbrsWqQxtGN7sC2J3PUsa4y6fickdiykmH3RzW2qnu2EB75HQjQaxV",
  "key33": "4WiZJfJM6PNXdG4mhxDn82ZwvggHWEt8FA5AGcepma7SY5Z6s3Zq2TGM7C9y8X1cj65dFwZw7Mh4XBGKzs1KtaHY",
  "key34": "5iE4ZMUB1m9QbbRxKnGDXo2eVxPwTGimJESePyoXXWpyryATzZE4YRsKzwLPmHYaX4GeMbshYJQ2AMfCGQTRWEUk",
  "key35": "5KnWen8hAwgbZwjNVCxsEVCN2eC9VrvpcxN1vxSAdK7UTvX6KQgTG3FmC9dtZNJoYWPzfNpjHxNUJiQqNxU1FzsY",
  "key36": "5kVR4DKzJkn7Hsc1NuhKTNxhjvY78JH9qfzojkhn5LKK6yNrBmArX3gGhmazFwnx1BtCbCbBMYkujD8xa4r2XkjM",
  "key37": "5scW8VeDhVewvTPVLhnLyrG8iNqjr4x1ND7wiauwcPJvzEd7b8dC3SvKw8CV5GXxurheVFSN3orqGfr786BWaAeg",
  "key38": "3RKEiyW6PHhLVM8WWnvSXBN3VvsAnAN6Dhwzu72BVhM1VFj8hmxsxQEkUzoY8ojP6EcizTPDkQWZF4XaUZvAqzDw",
  "key39": "27t9M5BhL7bZ5tg1DUXqqY4bHi8T2mcGD9sDZ5H9mYGBKym9HmQAjyf1rSCUwxrvtzDgtq9eE2NYmNVVQFLbW5x8",
  "key40": "4HsQycgnwMm8GY86cxw8s1jKyv5VXsDrri4XZsXC67RKvdF4rSYwj5LD3hBHkGMSxfo6XoD1xMmWsXVv4HLaXFAY",
  "key41": "3rMj2tjRZCEeZU5MN8NPLNiM2dGDHWrrCv4EJ1BwhxA6GzNM3aryNhvkb9XoygPZdCjqEVC8qC1iYjtq4tNpnTFx",
  "key42": "3utYYbNTnEFkZ4VVYpgH9vFWZ8RHV9QDnGNH2giCD1wDfLd3Xhex21xBQaN5wPi4kpsN62y3AU6FBrAsCN2QiPfk",
  "key43": "4nFxmy1AGpaQgevuQG7gzxKiaJDvsT4WGe3bxAnejRu2JjvdwmrpCh2jVcFuyMgyyQ3mUFhgwffsthKWjjAx6cnW",
  "key44": "2yX75g3DyoYEsgqsX8VNvAiVKXk2rZASD3msCXw8KgC4Y8jeALdvYkVWk9SxtzTfYHy8kKhcc6jpDFz1NtjrcKsY",
  "key45": "36EKwiQLSQrZyUxygkiTzTcZw4T8PcP2QMFELeUxKBsNRy4hFGMNwQPtRWLWngykXj4q17QqEfPnw135BMBHjPg7",
  "key46": "4vf92EkfBUWa9jTcho3yE4DPuWKs4w6qZhWQozp5rxMkLiwytdyigPmvcUMRr8QRiS5AYk8e7sCNavsyqbPWnL55",
  "key47": "3R2KsEZYsaCtuetgxhPjQxQS6Lfq7Kq5DvH7xQpeca9WrZuRiFgWmA1n9kCYPzadV7Y4zobGaw3Us9WZRw2tnPFY",
  "key48": "2Ar4TLm4caZPsfhy2KQAfCf3FXKWiQNGu3cJwSfwks5uZzL5TQ1oTqiwS7z8uL71aNotHsTRnUkWYqsrfqddAK4G",
  "key49": "5fV1HaAHLmU93vJsW5EbWk8FjAVEJ582uzQi3weeWB9wCjpYy8W56QN9SCm9qYfCvPcHkJz9Db9oWx1dPS48kdQG"
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
