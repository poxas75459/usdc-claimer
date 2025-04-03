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
    "2jj5CWGGTEhS5J9XwZz4tkMPDqjJSMAEPgcWX7K4QdUYaXj8tigc8i4mYC4rG2eB7Qsts4qZWzZRWkc3LDqWMWKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xys2WVbNgzgwsDoqVG2QzjAWQiL61qVF35JJWVqkUNbQQFs5UasM1dMEnqNn9twgmLWa3QwfJ6bmnqAdgodWat4",
  "key1": "5t1HTUjTtFuRsR3qppURHGVvbv9vnwpFbPzvxVAB7kG54TsEiqsw8WVXGstKBPN2X912fF3BgViobUkESS7JjcfJ",
  "key2": "7u6uFwegJ8M8GzJC2ZepYSwD1ynGkPjGy8WRdNifpBnb4VnQaZVF9y37xiiTLi1z8ddkLpf8X7rw12ktb2EFog8",
  "key3": "67RHbN1722XFeQrqeUnAff3AnBZ82EPYt1FtibGYPeKZo8riu4T3TK1qhqojJf9hhZ3AHrRMrPaHPBx7UCdiohUK",
  "key4": "5H8agR2eNDFYsD1Sc3ALJUS2ZGmouNUVWe4MpqTBWMsgjHT9WBQNsPpVBRgziMd1JS2SYBkyMhq8JBqgbV6B6mF3",
  "key5": "2WdBe5NHwJbuhxFtRN7rpPMDJAW7QYTgkR9MFqbsHAEp62JLiUVoJ7ghiWrd6eATq24oNzjsmgdvCHDxdTBY6JfX",
  "key6": "eDmLmTq2TySwiFqkPeRxUyyAKa4wjxercPVQawxUWj6cwpSrvZu6e1H1chHFVLSdsvRrEyXfKTKbrcuQPfQPy3s",
  "key7": "7wMKUdZojFqBYVgmqacXBHUA77VDoYQmMT5MDoBBypJrRHb9iSJU5zGGbNgNoWRpaQJxpCDdr8DwAhxgYpEGccU",
  "key8": "5ebzzv1TsChiQtP8vL4rQWHU6FYRwRrQ5eeVqaqKf8QKiQwcxTk3GsrHKRDvjgeLjZqgWZApcGHZ4gTds4DZXT3S",
  "key9": "2PuywSZtBLULZn5NSauxwxJXHsNVyCvNJa3poMVyPnNgqpv3qTCBz9D8vBQf8hKLsjiZVeXccejJdNoQh5GdNNUZ",
  "key10": "3KMXtPg58f26usdo3FuNvUqZPK1PXGz8x4rVcCpw2jLzXDXBh3bTXa253FBeXuR9PsTN67DwFA94AyWRrnNiQNY2",
  "key11": "4pra8r4ZTrpe4S8TZjTYDwzFWLxYNsDvGQYZUufx4KLTD2tapjqzZLYAr6MRB1vv5x3aHkuo73j2ZLe9RShunzKm",
  "key12": "2VXWGYzN1iHbbzBSB6dFGE5eEnMjiyy9d7JWFnfjibQNeQtngp9cLmnx2toZA694xGTd4LXBxW3FNPXxqwsghiz5",
  "key13": "3Yika3wqafuWH6u5YGjM9mimbHPCgM8x9r3DqecFdi1YXYUpjkiWP8izouKTVzmMtXASK7M2DucKnVSKty39Yw3i",
  "key14": "2LcJbodqyMwg6paycrF2Nuyxwhe8FMVwqvzJuSLXyE6FrSsAXwsfPY3PERG57DUBQYyuSue2uahm95AyPwZQVMqQ",
  "key15": "3fEmRsaFnSA7QdRNNcwf31SmBW41FHHxHFeAjkx5eAHRiHKzimZp6hjYp5enHtfDmjEFZ8Bq8vTzoHdpvDR7rw3x",
  "key16": "4tzaQvDVmPYqFRktkhwjmXG4LC6GAwDxt2hcnfbi2QfRM8r3ue6YCf93EPFno8n2HZWNc1YbvyTcVLpRtTBG3UL4",
  "key17": "51xdsP6W9HuXBd7Z4767Dkd1Ub4jLU667mzoBKqVsoSyx8wcZSMHjhmUFmw5YDUhLisGD2kYrEusGSx8DTNZkYFX",
  "key18": "4ardk5H1BWwXW4hi8VukPhdiAP2tJumoNMQCZH8b8gWQNLujJxp91x92ei2DTHqrovV44t9MZNrdeijyBQev2tZm",
  "key19": "4AbbxPZJBR7hgNaj8FEWAiKGJaquArpf5TR2WSxpbdRBgdUR2SJKtFaN7gmZ4ZS8BFApaBffLnb6LRBHfWyRJsXN",
  "key20": "a92Bc3BwbqbQvXMVC13XUeFWxzs95jHh3gYsRi7x2mK8dgDoQKLrDP3TArcTecNbTPbmec3821fYv3Pd6Bv7Lw1",
  "key21": "37mADJxxyXGjgx362ridBQqPZyYpQfUreXY1nUhzzBASbujAJaQpGJJBmAzVpzEgCGvpo3RLjv9aJs2w1hoWLQhP",
  "key22": "5woGSyAHnmZ258BuPWE3KNyAdWyYxL7Y7da3qwrAxuGDvwpLHSNTHYb75ZwM1HYgDCi2ihtdTFV3MvWnQM7FLzeM",
  "key23": "2yfdesScZrh5j5jiRMgBnfEVmh1qQoo2mNjnbpC2ZzUpsRpi5PSZMEwX54yvNp6tbpQ53tC4hPj4Q9dWyydnJzBB",
  "key24": "3P1mZznMbRzNx4eM7kP1NaDKnj7h4YH4RVNU5HCmUrnHGyKdCQxXfuuPZe4g9Q2rPex81UBJsSEYxy3iKTfpdgmF",
  "key25": "5VwxdHVRamK6dF46f7XfhYqnjdkxi5eeJLxxgVwDqekEDZQGR1K1XhNfXQnh1nYJnHafRNvNwMR9LxKJ9Vr3KzUB",
  "key26": "RZAzsVJcGfNuBTsa7aFTEh1pKWcURH1psmxWdZ8ZgUoDYU6D3Agv1aj8KmJqnyaEYByJjWfNaxqy8GVBtykZ7sg",
  "key27": "42TMb8Z4zFn7o8p5NZZCRAVLpjciD55xK5bkgCK9barLm339Tsp6p2mg7eH6j2kWrkJRLQF9tuyjK1Tmv65Y6HZu",
  "key28": "5hWjiFhHMgmsAHJPse6fwp9qRK5qVQmAhu161k9vv333acnEX8uq15zWWrteZigEjGsjvYW7ZdivMbqLbELhgF6x",
  "key29": "fw9DFew19D8mWHKjqdwzhL9MSbmeYG7uhGQuozGtJKS437m5A21JPhSkka6nnB3fzUaSXYVErGFCsP9ZboAtryp",
  "key30": "4EHTdBBdzzpQvoMUtiq9XqRJKH7FGR7MRGgpZiaAepgm7QGopdQueHn93TEEf94YZyK2RbCiaNH2SdHmgNRCw3GA"
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
