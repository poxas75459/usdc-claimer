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
    "5j94vUWXC4mDTdiLmQw9bcTmu96VV2A1wZr2EUDE59vVn86JBKTdV5KZAqMKBXS7YF11BKPj5gW2tiTPrQaNBpnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ujq2cWX3UHz6BqyZy6wyUyoEp1wwEe9HFHLCfDzBwVz9kMWRwQY8ux92EjTaQLjo4d2idWSwsHgwoeADR6mt2YC",
  "key1": "5K1TWhq4hsFsRggLPdtQPw1PeA9HbeiS9KCF99QK1y8MKAPVdu6jEkBfXVSEfkcPPD8py5kDLsL3TPN2aN3uu71z",
  "key2": "3F6ojyEaWTAxETt8ubETnv6FNf7Zo5DeVJCUr3yDT5HsiNVwrhvFWDKMjFzzUb82pXf1jLkmvtjwYjfe9hssUnCm",
  "key3": "3RhAyv5kLSibGpbBBDXUbx8hhuvm4CpkJXK6CpmKhczDTKwSqG1VwDh7TwJ3eBsyujf2R7W53itGi4E2a4nhoseC",
  "key4": "XsX3BoAhSq18k1BncytEJSnn61G6PWVUh7H6iVXK6wEnt5TShMWYbrpHJXK28T1bf6rRaT4gsiEy7Gso2Ux17gt",
  "key5": "4okVZCQuBPsybtznHSV5WBVTrKmmpbDYvT9gyWTVHD8qPApN7DzUT3f3SNMtuJeranPbTnThrf2ASkxozdn5cuqt",
  "key6": "2BnLZaWvz9mntZxXWpeoqCXuUGs5jN2Jzrabjwtkh53YeH1GTYGJvZ5nPUdx8QV8h4u4Ac2MYXqujZPUi1jmteDw",
  "key7": "4hGGiJ6KAkZQpMYi1KKDZgXNiK9Uj6eu4rtTYTD2pWZ8UahFAGxnyxKrkGkju5JznSaSqSxxAkciMQbJ2i5FBxgh",
  "key8": "5rVMzQyhRDFNgH13aKFStetaVm4exRjywWzBeMEC3d8yr8VV14b713mgFbB8FKUNzufx1i419fn7GtewDVSboSbJ",
  "key9": "64PkCogot7XXLjg8ceKF8LQM24eivyEoE7KUGZ978YxKfGCGVhnzfvcgwKERW2ZM1qR3ZAWnPtwXtqDhLVjDiRNw",
  "key10": "2h6rPiVHt6Vi2P6N5ccftTJvGwADoeVdY8rm6R11bRvLzxHTuG17t3RvoSKTaJtcydU5xhBxvXNKd6DeCv8h2iec",
  "key11": "4WUMRkXQVbxAodc8DSGj5rhKDj7hs3M5NMJkdKKmRCXDGBZ3mGwXRAuyxPwVJq2YnanTEg3SzTnFDvfSWbQ2iumj",
  "key12": "4wYRav84V4hFDpLL6CaM3AT3t8gNnxnwm8UJke6FSFgSTJFXy6MUBWVNsscGexSL7fNvedSsrLTVTM7TBi6Ehsyo",
  "key13": "3qiW3HyXdVZT7UQkpUAyMzYkGAM4eyUi9F5n3yDWMVNEQXEhQdSZaRuHKLAfEf3caP5PZSeUFjTznvayKucsC9Qc",
  "key14": "4PETFqd6GjvKNCKUNAzzXQtV5fcCcavFngLeLRe1ZgnHuCH7xiS9feJz1v2s51aqp2d99bj3CLzZei8LNrHSepAp",
  "key15": "qSk5Yu4e9AupipgPF4ZUW5K3oveiMSrzj8528PnF97VbMrapyDwoQoj4ADA4XeEXFfp283YovCRCwgmY1hKHvGE",
  "key16": "2EJSupnBh1puTQXWR11XjU7bv9Bdi1hgj5q5EMmd9r6Z2v2u6SHukKqjCzyFbXWzsgNKwta74LPGDmNxkx2AQT19",
  "key17": "5PXspahanWNSjJtCqVJ8tJz4vJcAS3NXnWbcQtiUawyCeKigxZPzjq9drKTRWCRj7hNoAPcnPnhgPuj4MPztNUD3",
  "key18": "5mHrJHUpprD4t6S9ipEYrpK2HSrT4nvNNYjKbxDJLJ4z5uJDZcRujNWex7B3NyUxnwUznbJw8kcnsJP7gHow2rkV",
  "key19": "e5J1uetozG8WUQ3uTeL3ScZdcajNyebUfkt3g1tBcP6inbKT37aujo6kojuDvcc4eBgHe9MPiDF2MwWd8s6wvJf",
  "key20": "ytATx2srAo6JQhQoKxacU1KbPnWd4p35Jtj9y524kqHwjWgyCjjYyqUpswkCckzkZCE46ibGsh39JNWbTDtXJxy",
  "key21": "5kBK9XVvTd9RfiVgEQWHUDHSapdG6E433PdBh2CFvBpuUZNJ3XnTLNdgH9ZEQSkuRUnpDsRCruJrmvAG3imKUh4T",
  "key22": "xri9BLb7VeH7EVUSuypgVdWxeiHuLBH2JeXtzCKmafHZET35MPTYac4ZCaNQw8gr5Z5DabzyHqiV7q1wnCtTaTx",
  "key23": "3URV3erFsocGaRipFg22TG1nVWpGqMpNsagLqSxgmHGa3BbGijo8u8AhGLa55i2XLDN2CQoAstWSZ5kfDDiuHPoL",
  "key24": "65emd2KzHw1MTPybj2aU33BP9bMogFvzsymoudkELo2gZv9gBmaxTSKNTp2zTHkVevK47LiqpHc7i2cS9syvpu82",
  "key25": "5zv2t9EPS91rFUgTNPezAJNgNn52EschBaBe1Qn1d62UYqvt9yYcigmhcnGhDM4ivHwivK9Ez2TzHbFfcPg7fouX",
  "key26": "Hhu1NGhb9yJJRUd4ERQmyWJXcQJpH5bBiwwwp1fZ8gdNta5ZJFM8L6Bks8cn6hfiD7JsS6xw4uEEYdN5htGuekK",
  "key27": "2bB8fWbwPD72Hwxd9ajosrWdwEDrt2TYP35bNh2sett2578hfLGhx3jtq68aTm9Nj38gJLW24PDD7G22Ef5niKVP",
  "key28": "5ZiKo3yMTLfTSvYZxe5KUeTd1oMewSpUgJpSnWiasSjVjXTPsQxLkjh9xJsKCR2jjEUgsb7Y3WNQgwwCu5i47Mtt",
  "key29": "5cK6WV4abWyAZEN2y8fXeDQxAtTWRsA1ktMnjHokSxtTC1JCU4NL9EK777do1yiuxtSaLa7E8LZyCaVejFKyQ3jf",
  "key30": "2a8CV7iKamg8y27Le4oFM9HsD2QaphMr9V3AHmXSjZRde2zUEfBHvfvZwYkcybMEeYJ25pvuZWEtUck2TeabxswS"
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
