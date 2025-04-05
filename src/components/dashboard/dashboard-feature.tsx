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
    "67SHmPtHwQdSRcbjmKVSThBKtdBZqX4w7KNNSuj1tzzFRSKKJsRKQXP1UkUBqEPboJ1D4oGSCEAHWLcvQdzFmdEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZLbpdgP4ZATDXMZv5gphZCgJhBCyFZ5kEUnJxvRzMKHZ1pENoURoT7R5ej6WemJfUgV1QVYjSQWoHYcYFSCzeb2",
  "key1": "4GqXuy859cFLu2sAXAhmkA1tpGFvbA3AsAXB7LYmpunUqXL2xRNN7efoEvVCArVNTZeFU7xxRHpWBzRfRcDVnGyb",
  "key2": "625ondzr54Zdi4wrZNh7cXMmSuXUX9ak5rKMRBgXGQynE9naRajLGvso7NKxw1XXyzNoKhoWvUbCcqvQBhfWEtNK",
  "key3": "4FxtJgUnEcYtmreJ17rBxWTRu4mYnGBSVbxzM7ruRyB6KzUUcd5XiTWL5DBkC9tUcL8trpqY8SYUarzA2qdfZL4E",
  "key4": "DdXF92Aa7BocfkXscaRpHjnouURqtKoDtMTwZETSvcZPx9yJVwp8SJtnGGWiECgSBmERn42zpejEHB6HFC3AARJ",
  "key5": "2Xfuys6trN7oN8szc1y4DAYGJC3bU4nTZuykZ8M9Jk3wqJL8iwnaozJ6s7zTH6jSJLvMJcqaG6U1gTLi7MRyrnBK",
  "key6": "8REiBbAvmEjKVpz4M2uidvdvEuSbTDTqD2m5sjtRg6yWFBuNHqcBzchwLpz7uPCQ3veDHwd995U5cdUGcyFeQDv",
  "key7": "2w2VbgF3rnhH9SYXKBe2aXaLpYtt6TPfPD5TzPBQipaLECVG5HAWF2qvGvSrus2X2krRT4f2gmrrDN7xEvc5sjar",
  "key8": "4xcyRKabXFiRbV2hSnQx7LEGCpTUUPusybUFhLbFcQcpaJJmZRDWZcHdRSZ868Zht29vyuzVqnWW1bk1jVar9h1y",
  "key9": "5bpxwtT5PGQ7ASPqvye6GR8ooWWAdiXdsuTWAkn1osnaUA2GbrAKhWkoqLESjJHDGDiVsvbD2gAt15tua5XpXvPq",
  "key10": "3zP9u5qU2M72mn64UjZdHkd1F3Ki86oR7cK6eyLEoirVDTCtRGd7xEWBGBQt4oGdDWshSuscAWzddfSFV26zCKLu",
  "key11": "dUZiKKCVbmQMNWWnn49y9Ab5q5gb1LCWVK2XW7BXGhYAHakXxZEuoGJnEfSvX3RHskBJH3F89EmP6YApYsB5Sfa",
  "key12": "5XZrwjJxtnHTDB2AAKrBoCgiJUN8kY7DyaAf8xd4HSWVYKhfcdKzSSGAz4NYvybaJS7nceA6azwtMpoNYKawGR8m",
  "key13": "5zLeHwWAUMzUaoCxJpaeJVqXvZrgTPGQhMUYrBwuP4q58jQiPSTJmiJyLsT47w7gwBeE2DwsWb7Ltm97nxUkoJc2",
  "key14": "4G7Co8KNngtRCeMeHmqcLpB8mwMcQvLHg4RHEqKYPZPu4u2JJMBurhypYusqRXmtAtQxBLi2s8ZzVt28kUxbjq1G",
  "key15": "5n3RF9cRf3JGsjvFJh8R4i9UrbQyDYtrDSpLM7LgDuYHLgNNeKY7JibHfUa6Yc6DrXc7Bmc9KCpGwr6F5xMQd9N9",
  "key16": "4nJj5netZJ6F8JfLf4DGeFe2jRA9BNwxvzJYrDUuUnE6T7vssm4MsvZGoGePKm547vndWti9htVDqvYfMnhcunpg",
  "key17": "5yWEVfkQMBRTGig7RRhNpTyaTop4qLEAYoHnirn26CvinT4LX73wZKum9KjR4Viw22Tq92oN5JiPVvpEksRmUcQD",
  "key18": "e4MJnnMbNnJYk2r9H7T2oVjn43Eg1ySdenpBapJAxzn7yJ4W4FTbcfebA6gQd5heHhYpNtnTX1cJXZaBmXVytkS",
  "key19": "4LNqK2h6f9z1FNAhh7rnvYQkwXd9G8hrmKFZT7vVS5DiYxjgmQt5YQtJEK3A5sZRaCFB6zDTnGKit9LjWfyLC9mU",
  "key20": "2i2ZT3hzYVZQf7UMNLuPbXoNh7iD7JrfzQYTKvGtXJMGs7jjnbiGcwHYjtgTFCSCfmNXfbbWyLHzPR6REXAg8xrc",
  "key21": "4LAQFbQFCtnFvhTLwFHkMqtHyF1evN5BJSz87NzYzGcMfSiEQfPQsGFsUyDpvdUxRD2CNcjDMfdxHjEhGgxxrknh",
  "key22": "3uNBekpYUwfQnrwSAWRCQuVYGosVHthqu9Kf9YB3TmbDpSnk3QEWerfgnCmMu2XZFmNYUZyMxHt1x8doUjvr2nmV",
  "key23": "g79TJ4n2XKT2QbmpsfvCYLas9RnJS2BtRLFXiFpVWd37LL8VUA11PfLQj5WRcUP2WXUodQyxgBCTXRQbpFcpQPk",
  "key24": "5YDZ8uj4g8HX6FLeujT82TvhWfKAmdui852jfv7kN1Mq8Xr12wbsghNcS33pwBxuZtDFtDq5xG6wLyXP2eD7n3p6",
  "key25": "YjbtsCgqYhe6XLijgj6fqsyRFoDypmGsacMFDvHtfRtHYKtp99guCvG2gdr73Bm8MViS66Mi7vpDkmttv6ERCXB",
  "key26": "5g5Akgrexd7gq2f3h8hNfeavTgzg8Sv1kMfM7MKNYZWgavaZQMsYPKkUDWE4ntKRWabu13rdtzZTejh3o9gRhZvr",
  "key27": "4Co33egvQFRXnWsWo5yHGbzrLfbFD3q9TaWiqCPq7ZGXzFuhV7qsr7Dbxa4XZSjqE76au3Cy57AcY58jy7wzLFEj",
  "key28": "2Shs41YaYxvVvt6LrbazarYF1St7LnM2gpzWHQU1vBx92rAZPzGVwKK6DzWXqkuuGZSNxhf2DLTdbf1awXGdMxtK",
  "key29": "5zqUjEp8W8NWAazsEp55NaN8pwGbzLaNvkt7z26BqQjviBYd33vSK797Wm57QvgXJomoh2aYJVaaSsVv21LqJDXF",
  "key30": "2ME1u2X6DtXvqH2c3Tt6eLv9emGn8aV3AXA71TYne1biTyWNTvbkQJiVWMKVLXT1wUUxGdsW4kusLyMo6t1DfmAP",
  "key31": "5rZwfMauvUh1qvzgMUe7DZQ4ZwYF7nVRWVdbJEpxRSpKA34QirGXBrKM2ppZiSYicj9TidoVBr5j1yy7vB5oRP4M",
  "key32": "3iwhht5QHLV3soC3Q6vxnev7gTUozfryFeB7e8CB6nvx7WcQkjUPk1NuJoZVStJbcBv1bj3K1dPFBU5sGTgXoKvZ",
  "key33": "42xw7XsX5ZDoFYxxNjRs8HAzLioo9bqt95zBu4E6J2UYpG9DXg2Zi1KtqNXhDTz17bUwwqiFYVpwMU1TrY4LPaDL",
  "key34": "8LfXrZpARFfeSGv4ZrJALS6Qy4eYiiCqde5H4a9aBDALj313hjkkWBr9K7NeNsgyiLykuNnfRUnuLXgsV2Ruu9H",
  "key35": "65Tn6zY1LNMxoZbSFxrLfQoA5wtZLFmYrVZT79MPq7ELRsNss7ytvWea7FMgWyKKcErWrX56Hn6qh624A3FYT9kD",
  "key36": "5rZpV3Mb3AWUR3LywLyNVRXWY9TNLFfC2MC5eZnMi9rnKK1rwMPSbUEz5WJrUp6dUg553qTQT9dcpLWN6UCAaPiX"
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
