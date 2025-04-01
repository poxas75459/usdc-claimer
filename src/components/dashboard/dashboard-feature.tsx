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
    "5CxX9xyh1pUspG7qAAEvj57PEr7E2mRpej3bKZkLdCeoz2mG3EmmMhkz7xSjJFadXfCrvHzvPJ4yrUjmP535dGf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62oM835fs8MvJaxehMVFfZFsUQCoYSDf385rKVycwbhexKZigqXq8ebrmsZqeFyHRVUAmX7PKKqUasjZMfobvzuP",
  "key1": "Kur9RSbTZ3aSEWj1KsWrqQv2WDU4aAaipcyKRauzXqyqgYa9YgiAXX4Dv3q1NtmaaVZTcgeXjjJhWtnjrqw4t6A",
  "key2": "3QS7KdEt2GLrK3zTb8cYSoobrUwV4srGkWsmxDNK3PTDA5pGzi5BXjYFu5Fu4ssj6bQZQgD61iHJsxAA1rPzgymU",
  "key3": "4DnoqcsuxehD7Ly4XGcip644WeCfwHVoXYsyQkgwEYVsqfqcDHNH2ipNTaV9LKofhqdW4PtrVNxNPBsH9rxH93Ao",
  "key4": "5eeKxxWM25EzmPXfCK8atyymU1Yd4FU5jT9Yg6oq7wqBxr9RWYFuzibTDmZr8Yr8gCDmwCtqEFBsAF5WzWQmcKt",
  "key5": "4EDEynM34zqoK2pfaGgxrRcvRFapJTZbzSRuyVC6VjFWdfZ1T5nNfc9zMmPZ5J2W4KgQ9mJK4WtJPabqY2dfiNyC",
  "key6": "5atqv9cBTaT6YpWv5KDBRq84iXoHBgHTGxqujDxpb5pmZepc3YMZEYXYVxDSW842g8qyzzN5MB7tZqNuoSvdsney",
  "key7": "61ndj6gsfezPz8SYzBzGw3YrZ7qUzSqZMqjJzskCw6mZmhUiTjXKAfD5YWy44n49wjxq2YpGCmEL4GCZtCY9UWen",
  "key8": "5e7LfHKFgKHNdXs3U8By159kfmGKhaRLATS32MtBsbzsBQvHo12oEy4SYB6tSybNW9jocwjbr5XJuPNCPXCCjwed",
  "key9": "4jnMLAw6metejzbdWn7QaubDraQ4fZi8htK9NoiyLPB7rHKMGqzuQdPNKumTtBhv3q9RdyjLqumRVv3cirUEH5i",
  "key10": "3k9BsrfjApHB8Y6TR7Jb22ttNxwCEToYpLxpAxQrxZKE9EvjBfuHS3i9v1VETzFr9fDtD4yYTgEoDf3jw5dD9Uv8",
  "key11": "3Ajx2HnxUN9fdV3wcMhw3mi3Lp6F3CbAnHBw1rmNoLmKzD7mCuyjGx3VASkWXagj7phLTgjP9JKiqJKqZZyUFJUM",
  "key12": "2A4Xi8BYEifm5QfBCqHC7bw1iBnxMYB6ZrVCmuLKQisJEvkjj21Z93TA4m5iZLYD9WFvj2pmtRvTfUHwcWurGZgS",
  "key13": "3qvmDHCyA4CSVmGHfH2tayFcYAyWyGGLshyn8JPjLEsM6aiebWZitVMm8YV3cPHRMRHWRGEeteZaHSAeGT5ALR5q",
  "key14": "32fgqn8ST2j6jNF9BEq3tV1Gci3oYSRcboL8tQXVB27jNbrsisLGCnnGqbdk3vpc4UAe1xhinf29fpwa3qAzmAnr",
  "key15": "39hVWFwQ3djHshtwffLFy4jX8UnUGtyax7TdfQEMt5GAD9E4ynZ2kQxYpA58BPzw6uNKJebajEGUSNTpemc2AzFS",
  "key16": "2RnKwXmknnDyXKK5R2w48i5aYsJGxppWXyPiiGpP7RKQrnKrgrLnhGtTeunKUSrbsgkTDahrw94XbzGPG4q3Wgxa",
  "key17": "5FXEbDMaa7NvJfKpyHDCW66NQK1syPK5J2rYYYJN9WyonTgmAUQXevznu22fBSAd56eprkg6zm9LrY7ME57YkeAz",
  "key18": "3VhhKzn5cBxhyZUcHtBCe8TzzWq9a3tfEv3QghAbcv7xADp3KtP1Uvg9Xg8XU4hzDJymcANGoS8mLVerix9Znn8g",
  "key19": "XmteVhimbRTMtWELtLRDaLHuUhgR2W1sWs9aftweQAUULhpiCecQ7tAbGvdg4DBHV3KyMygrKxhq7FeQW1DsWEx",
  "key20": "4yerRg2mYZXJYCN2CSNvMqtDed3cszJBwkUYtS3KryJCCmdxvkQjJzi9CRjxaP81MGBUAi3aAkLwv9mo9sWHBkPX",
  "key21": "2aBN7xhud8P9jiQ771J9kepofuu5nnsCaobzxtnFMRvEoP6MhEayksmDEMeC3on3s6fztxPVb74Lukw9CEPVbxeh",
  "key22": "WvFVdW5zfj1MCZUy3797rUNcXPQva6kZou22uUbttq8J61aVJ9uUe7HU5jAnTPpTtPydQMDTSvpqZ1vNuw8Q7Xy",
  "key23": "DM736dR5qCJRzDwhqjaRJdskHWhwESoeJ9mELkikPiKKU4AfhQqpKRosiqdsTjkd6pUPQG5umSZwyN39RunWq7u",
  "key24": "2CqjYjq8zSyhPkt2R1zwduc9XXxuLRqnYMWd21su8cBaoLeMKmiGrAqHMKBNmmMvU3wzd2JM4NoPCGnGcWsty9oG",
  "key25": "4AsHFjJxeKRo7WxwJvZnBVAYw99fbxpwFVxyVZZmA3BC8fGYv9jGPp9mjH8PP5UwuFGemuCvDnWE66wVuFniMNP2",
  "key26": "63fcqdzhDcYMqYrfxCRpVMpzADhmyGm41yUts5WXhF9TfRoHvL63MsKaFYzoeXwyoCdDY8oqCaDf68Vi1tTT313g",
  "key27": "3RgJDDCsdzxmXDfKykPoMzLdcirNnRSc3Y7EXgKBtjvqEfzNXVhE8LhXzwfKSCURwEwAaQWrqg2Fkfvc53wHLyNP",
  "key28": "2gST7GWE9Dzdq1mypnDMEGwASZUBghLrmMXjTAvVmMEJFhcGqqi2eKyXVU8ZVxUwDRwSAy1UrBarGSdXHxHs2cwh",
  "key29": "2KT3jGDxJx5ctbXDbhK7og5JrL6v4xM4UjXo2GXLCKqb5c6jsbCJcCG4YAbgx1uLNtVePjwUt8v8vQzGQDXCx9iY",
  "key30": "5ZXzDcdSH1X1Jkx1RD3CepsanjDJPya4KQMg6PeUAskJEuxrUqtQ7wTt8XsgKjcjBFZrH2fehoWTEDv1knbTHfzy",
  "key31": "5mNtoWvYa6knutn7r3Bi4Ygudw9qg8h6nqdNomXZTirosTAdcXqLNhqqtXcoBd2nELxz6WmZJFN6G67tx9VLxt1h",
  "key32": "4SaFpmwwbvbbkwVkTWjzjhEpEZT3AnT72QB7cxrGwM8uyPWe9G2BGCyiJJ1cs2DsPtSoAAh7d7YRyJ92rnQGfrXX",
  "key33": "2dfS3uMZAP29UQ1mmspeuFujataKWWUn8bsmPUpooUr7NCtTDBw3bwKKu7ayo7w7rgHK6trQEM6gihXtPU9Ed52L",
  "key34": "3swJWWoMSUZqJ6h4uLqHH9YvN3dakukr4GLZYPNew7wb7CPXBczPhuS8uECZ3ygbjRCpAZ1osasd4ko8DPY6zVcL",
  "key35": "3zEPTmEQatT6EqNNiVKooxFYpwzckGfr1nsrXoCrWcoq7tEPsPk9CnPm3bBgfh87jYqcYHV4ABV2D8e4sJg2CcwW",
  "key36": "2raejmnEQrPEnmsAYbX4qEdHs9p85DHjewhCV9a618rGNYLhVNAKQFwizMSDuoijHkUwfR4X3jgf7xUPpWMfwUxC",
  "key37": "2fnGGT8zouqPArCo2e3WrFmhQLcG3fKk6iwsruYDjS3FkTknQQBag7YHaHgVN4ktqxmxgz1T95WRcp6wiHWDrx2y",
  "key38": "3MSYNRxLozCovNYx1f1HgPyYuWD5k2SFE7aZmPmJGg377enpruVM7kD66MskJ1bYNdabQHnLrdnzGFwNJnowzQQC",
  "key39": "42gvFNABJES9XkXFgkPPAgV8PoWwkX4Kpc3snqSZr19VGTY1NB4e6sXML44R27oD5BiBLo18wN1RMJYER62345ie",
  "key40": "2PwMJTNWRSR7C66NNopDY8dF8dBMBEiRiQwiuxqiL8i5wQhv5NAgAoTkzao1KxDQY1qeoma6MKj1VTCwWheakWje"
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
