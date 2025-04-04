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
    "2YyEPnjHuAREdUsRKzhXyeZ9e7HHdw48qRbzz1s9E4moqGHs3Vu652S9tK6NZLSsJHLrh71gq89h5YHjSttah8mW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Pv833PicPfFB9qrayy99Lu1BLTKdd1M4Ag6XUUDrCUAYVGLyuMPJMMiQCbgmmeLpXxXHsJ9TLtzNpJKJwpRxvs",
  "key1": "QTCWbPLRiJjnFHGsx1nsTx1xAixUMqd9fWjRUmv9ZsyW6FdEbVTNPzA4tkhQEpt5GxNzKXoYLPVUzLDVnn3cngQ",
  "key2": "4F2Lwue8LGgwYBwS5M7VPumvor1pwQmEjVeKMx4B71KBAztRWMKS9JoKDd61BdCx1rBczuFHuqPz2KJ1VaS1Yeu5",
  "key3": "5GufVPUZkuoA5iVzHgRU6tthWz6EiPX8Av11KFafmPywLEKGJjcTeb6BczvwYH2TvkXhrvV5nxCKtU8Evm1g2AZ5",
  "key4": "3Y7EVxKy9drxjk4AdqRNWRSwBZhcejuurpGJ7Lv4Zy4nSUdYC8a9audSWLXeNbzsPNb1R9KQsqvApHkNCJ7ub4Ni",
  "key5": "65rQ2TTmHNwBWn4HRq9PDvjDJLjdPao8UH89yp5VmVt83WDuLJRkB2rmRkTBjPioRCakwJK6yaop6CEYBmEKzK5b",
  "key6": "25NM5wCJNS7jgFLfqBJTUqJ6jL2DvMWaRV3U3AgG7wRV6USN2yuwBWPFAcZEg6kQjj7CfYjRp1GYSqyvSEBeiSWU",
  "key7": "2ogfFPrVms6pqf3oH5opHftKu1Q95L6hsYQcK6NHgdKn721Kt5ugtEzgQHSVxCHFoJJRaf7mT56GUVgpaLDtNPz4",
  "key8": "QfLoaVq9dvNAiCBzEoXbiQaGDj4nxD24xhBes7krdMcSZD3Ux4vU1X5Ug4RwNwzvDjL5uqDavk2V4TEwHZ8aLLV",
  "key9": "3Cmb7BopfvcpGEaa25YXw489bG7vhNujtFLELDioy6NJVfkFdLNM2QRNjJNGppB6gCjs4dZ3iJEibnsPCqPguGZT",
  "key10": "2XwXhPMcDR2MgmSNtULvbXP1up9hV9nXXZR7wrB2WjLMGFvdEUkU2mJP5QEkVAMuh8Kzj82H9BxcbSJsQWc5WMmQ",
  "key11": "3KMDAQ36AYrka6ktWvfT4Z6Y36sXYWXbEoHw6jfEZyPCFDsskHzkCb1vtFNi2hkxxSUgt5MvyaNeHKBZnf1ufWeA",
  "key12": "4jCxVqEnKzarwrmGWdZECAukfimLsaDTyEQmdTdKbjupHXQFLrRQxczq6QAyoxENjsBjbXvdq8XMxnu3xCk9VAM6",
  "key13": "JSqjxpCgVvFiZmNLdUXuY4EG5Xx1FgENdpArGC2aWFvKEZtb5QsLyqZXcqJuj82cgNc5MnVAV6bKVHU3rpYY17w",
  "key14": "2faDNgwKoo8xfCDkBbHBVCAvtezPKPf6q15NXmkptED9Vdowfdo9TYzQNsh3MAwgT92RBQZBEPgS3YG1iYw7p9V",
  "key15": "3K2CsTEpRMPr35CeCwRkh64jZPPzRS48FZG1xnxEYcgoiU6mHUijAheMpn2gNDn52UfhyZS4EJjuyXqxzHGJCv9C",
  "key16": "5HHbL4MEZZSbKR2pSYKkdoa8sEtTJNCaoZkTeUS9n2arCXVas4LoT2T9egHAmTkEhztzGDgrra4NoCDZcCGDcwN4",
  "key17": "45FvsLUUsg3dgGCoGf89c5eKTfr6w85RcMm8CZFVqtYUCiCiS3NimZ67VKD6QEbhQJoKNA6LgQVM5doSqwjCruBJ",
  "key18": "2eXDhJdnbSJycbFhAPfaTpuBRyDYCCBSzaZf1EaWfcMkkFUSRxqjHYdduFZe4ok4qGhaY7kxqMKJh78H7JaboM7n",
  "key19": "2MSnBM7GuwCvUAaK3dnrAUSCJFmZsDibwJAQwHZmrdWVEscLcQEcjhqXqXWnxbKrkZV3b89bJMTQ3YTX4u9dvBhk",
  "key20": "22YsNE8kMxeVSBxGuU86at35JkFcG2619zb3pSBD9sKRP6ZdRpjxAptZghUSPrQeWTN46ds8LNSjsv27jQgXvW7B",
  "key21": "26LLBVEK9gP9gbh7e8Gy756Z8vMPB7a28TkZdJxtofJwin3xKk8AVUVooQQbzCXJJvLU4u2HUHMYGPYo9AMMfyHD",
  "key22": "5iWiVfqos9MypBZh4ySeAqjRhmc1u9JzgWgDPSMaKDX8D9J9PqiNZX9hAgztRJ3m3Vf5AKKTCHtfdgHL9zGruPBM",
  "key23": "3yBvzxFeH7QPhKYqRM1XyqRABmsb1G261NMSn8x5FzNZsVahxSUiNetHBGwfdXZCKEQhHRUZdaiHj7rKZq2pMN6c",
  "key24": "2eYsf9wPUPAi1GbF8oHNbYTVWEC3GEiBxjsaBvyvNqMTR8zbVmUsWwx7xh5pZBiGPbsZJA3bqa3JNbhuP5Cxfj6K",
  "key25": "4zwwym5QNKuYxvbBSGrY67tvVSPDZW4hP8P5o1cLo8uHwD9GmPZN7UycmE1pPLWGkSeR5DeZvpzjwCUYKyMvRndD",
  "key26": "5efYJvHAHGA98TWSFye4sARZy7HLLgufX8YfbZgpjdYJoRpuG7HtCPNSoQL5m8fQvfEYVqbzD2ziJyDp5tZNCZan",
  "key27": "A69LA5e1vvn26f76BXuUWfr74REtJKstGPsPedZ1JnqeENmHFx13mkvbU5v5WEBzujwRydigcFiZVK6X1DcH8Tq",
  "key28": "4pb95r4BXShUCaiNgME9TxpZF1QrJJpsSbuirCixViHpeqLdrXvjKaXyoFx5F3M2mEy7Jc1YfdSD5bqSBkwbshwy",
  "key29": "5bjP8g6efbSE877PNzK1PV6LLMv4gLUXoYDqb6jH8AVFxPj7Yb2X7DACt347ZqpmM3UYWLFBhAJmrZtkPvRnJwXu",
  "key30": "5ahVBYuhWqPrh9ShHae5xJSMKLzPv7f8xBiFvZe8gF5hFNRftbs11N62pnmzopGQgu2j88HXJh1rP9dSkB7DAuod",
  "key31": "25r1eKxKQPW2iCiH3LyHWGGrAafWhgeeKwwH7LhRKqi424fR6g26hTX3GR6ro9mkrj85KrP6Wi2GLywMrSkjK6Zm",
  "key32": "MiqBjb4XGhmNkS56sik5Lo9v1Xqi9FviRdz17y8KWRUQ8h3xGXEfwo4shQUBZqvUrpUGvrELheNdLn3bqkBeDoA",
  "key33": "4kRdLgKnw6ciHrq7ytEJaZM274aRSQxdfr17vMeU2KGfPrbbz3Gp6oRTtKcnyixT3zPyASAHU9osrt623ba2xonF",
  "key34": "5oMAJXVQG6RRfEybCW3LuoY67WsA44HEzLELhQh9mVdQLtcUownkw42mmAK5DvyFuMajLaCKwPpQDaQXyrkZgq4b",
  "key35": "3enDkByx5YYBb6thU6tEeMHzXXeiLxeNwYUGLaVDVBSEVtFPPwcZSfEmDcPBcEoXtaNrSDsp652DCenjNWy6rimo",
  "key36": "5zU2ZFJH2UVbFv6xDM99uFqiiFGsksCKVwcQyDHiCFP1y9QomV5CNiv7jEXFoig6BHAe7XyDgudQ6CzKeAWdTSjs",
  "key37": "5vm7Xgg1jcWUXFw7VgBGU39mSAnFg5vTuTAJeVAyNnerVmYWQrZStugSZKDfwizDxsgwyTcGfjJksjz4sQkV9QN8",
  "key38": "4pEWzRUqf8vUGweF7NgHfWx2RiCJVpDFLVbCtxT73rFdZNefVsNCc2ag8hNzjUv92QbqnstgaC29kFsyBivHsBBJ",
  "key39": "4x2gnYpRFDXeucqAnmSCaiqpMwaVnhm42VFipk6PywsuUQwhS1CP3JT4u56rbw21REi3XFL5wcLTiFfxVLZgh2TT",
  "key40": "1pFCBYAe7v4ecZDJpcdQfQvCa4UDNHrSfxH3sKuSGLypDGWzE67VM9oh2kYBbGdJowFku6dsKQosqEuo7TkGtf4",
  "key41": "4fZhXkqDeBLCgRxBMefBheXmsmyizCobEN9k9aDGW9K7k8tUiNMKDykPQF1dFEbxPHKctWqaWjuPtqsgVn7GCXdc",
  "key42": "49Jair1n79rmye6bu3QxfRLBvnA21cTg7Uaa7ZvhgwQsvQ8KRYr9kXeW4p3h4D8rH5nJ7ydxMNuRUepeBXhZ9tVp",
  "key43": "4vweL2tEQt3RWMivJN855HTQxK4hMLY5U3NaZNgBYABqp2XxdoFVVdKLZA8AmkexRxP6CJshhY8MEx89YeyzNPcr",
  "key44": "5dsdNWfcovbXQfgYSiSFVvhpabVm3BRk7jZju5xwzudeaAfQnfDGuv1b7pN3LSrrepSxXX9hAYgayu8GAXhjJxgy",
  "key45": "55DJyfzGNKom4U8fuqWdxBpSqCsrHVSwpGczPJvwSR8A4ATgUAD5fxEkvY5uLcgLgdAHpWck369sr7KXDeiBN3Rv",
  "key46": "WjK6v3UDoAbvLHCS56MFoKFVAq15eggKtdXnws6YP1A6SaCLndwyXYxDR7SzEr1U8W4xL8i39WMBQJZtypHmSLj",
  "key47": "5FoVkMVUe6bo1uwaYaAgiNq2YbzsCQRZVMpvDcYAp5YMJgyKA218GXqTnnbtNCRB39HeQb2DW16fRsZB2YTkaQNN",
  "key48": "vZpGrWqNyb74hAuNMFBAZQ4XPF1T13CwoXMYJjBAToRyMYYb1m1RPaAnS5nBH8SHzdRm3KExfUiyWo8i6ifi2wh"
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
