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
    "65Zt1UuR2Ys9XJPCbZbHXxxeL21hecktNLSqvzHdL9n9S8ojYRMcSE9WkkLwMT2Lw7W1bAMD8HLVu1aa1heFw5TN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qH2vJejPX4rMviKFhcFxKicj3AAzMkNTY3vVULTsBdLGKczpTeqj8EEcfDBJCjsJEnBRsKkq9ebuqKLsKcALvsz",
  "key1": "3Kcx65qrpzM4UFb49GRTEVZVfZnZaWFF5C6yuHG22Z86ZrWBTx1UxCJpLBpn3JgUgnAEcZ9Z8vaU5FJTS6poaJQB",
  "key2": "4kfxz9GXA4v7xmoA5KdxYveN9oxxAqCBJdrtPRp6ypGAdd9pt39efJm5SYDqoaxooKw479E4rUSwTpR71W5NbwHe",
  "key3": "5RzJpzXuEF59vTkXXAvN4kfjdpvVh2vvko5q75nJeFsYGCZXkVJsXsyiHvgoamu1j8YHadtBCSNo9ob4vZ37UPex",
  "key4": "yZY8sNW3aa4FBYupG9dzoQ8FNX8xccfFrM8dzruQweqFg58NBmdwvgv6EskvvfZELUoGXbf4E3kuKwk339CDkHr",
  "key5": "5xag8nu9fRumwYGjyeXoNFfSm58pdMBJccynfCry2Xvej6vsx1bpmLwKLBvJtDkvxNQQvN4MVd3Rg817FsY4Bs29",
  "key6": "23atVF9pnGXBPdyjDPgBQxfcxcXFKyQm3tGtqHhETvAvL5fcXZPA4XCJZ7Ld1TcF3T82Kjqe6G7W2MVEciZnpzfu",
  "key7": "5LGNQdGm68wfRzkkxG6aUd1kpScTpFHRNeApQv3ZsoNzGb7q1yB1cZNZCgZQJzme8Vw11KCGhXKfzvEtBvr2gxbk",
  "key8": "56BjfgyuhinpZcZQYzhv1NzRP29dSaUgWgBb2tFPNYQyEzKi6TLP2EStebAzSvD7wuabAXFDDocU84AtsGkLqH3T",
  "key9": "59qMXxxntwWjCztgvdXkGeZPYDKPH2L5Mxmm6EsfUPNqU9E7K6SY9UHuKnLNgcinJ3PXkAdQvkQtWaaLZ4eh8gLz",
  "key10": "5EaSEiVXXetPYTqdzjoA82d8zH2WPEmYqDhk44TpN7otHejtd8hoauReZM9Ew7xP1SFh536r4DNqPxidkoHdP81i",
  "key11": "YEK4vYAJuC9qdXmArW9w22Pd7mHPT6YAPpKKgYQSfxGcokiz2boWL4CTdVNbL9NYqwZuzqWpB4CEV96fehvX4v8",
  "key12": "5BQhSNFgMkWVABkyLt4jqUfdKMUKVcoFBdEFShKLBbYWRyH3ThfN4D3NCXab7bppFuxFXi9WXRimoqgnZBxXTo8W",
  "key13": "4XFrihKKtyUdC9N1nhngDiixeLeThtToa7LrpKQXvAda55ppS2ZEGPFvKkEW1jeytTgdJiqurJPXG6qV4ENM4ZhZ",
  "key14": "rFR38q1FDmF4TkeRJJZVVJtmGdbnFfSY8FMNGgMXdLCMMsm4r35z2sAqVG25sN7ZDPFVkkP3RHHnoQ4rYVmL2mE",
  "key15": "5inNemT2z6uTGbqePozcEi1yzQkUvBA8Q4JpPPKvkw36vmJRUK4J2gVFNjEp2gRAVyihxrDcGncvqfj8BwAc4cfV",
  "key16": "4BEFQEC56bkF4RjNydp5yKszZESDwmg968g46BArvTQmtBzewZqdJFYFKx6F2k416Vb8M45i4yrByvamqshHAs4s",
  "key17": "4XwSQkz6o9QxqbXM16Q5wt2BmSSXcVy4wZ6vSo5mcUaYfyGtYC1uoywgTk34KsRdeLN641mRSia5pfnpHrQRZ6Gu",
  "key18": "4CfK1GWF6AJftdi3w8o1WPRe8mYCjD84CokpKEUDuEg1NcD9nx3xumX5YYxgagsZ9D1hbBV1qVhYMD67SPxUa5uA",
  "key19": "4HkmaYE9S2dSvYheBVrF7dbkW15JJvvScRt2LQAgNZPaka38eqxW4hhQWhTkqr9h1rjx2daeR6Xv6gJotJad63uu",
  "key20": "5y7cWPHUAnxu1vsT9tzh7KkDgzeA4VxNWbAyykzXr4ut9Z8mUWRWrKucxKhWyiZeBGXHRd2vk5yyjbjbPnibrUvx",
  "key21": "2NnmUZcKds7LH93hKmzjNoWASh7n8aoct5oD9qAhV4EpTBXVysEu45c3HT4v5hpfyacFVNCtfHyyPrHxrZLQwZ2R",
  "key22": "4ots3nq2Px69WWxbAdx37PQV3ScQ1hhXSuBQubvY6p7ZFeCWEMewjZzXMPBhHwerKoXU58BzDaYMJcfXAPitSz6s",
  "key23": "3dYFMpBLgv8G8rG6MNcQauo6Gfn9JYAvd8PgbHyVJxYv7MDuJx6ZxpzziGSUeWFoAh1xuRyonzeveMufKJbH3uFz",
  "key24": "4FfnNA3hbyEW5ysDAg8DeiSdEDi8jD9b6HZ1U6KeabRzmoZBQnUfLyrtDURsA1kDd4yjqBBHZqJwEcENhVjMhU4p",
  "key25": "3yf67pEQz5M1ABCQzmmPYaEFUM3nZYhCBtoefBAH77k2NmSWb1xL1w1bUGLEt8f2juRs7Epes1MpuGbFZQua53Ue",
  "key26": "5ZPfD2qjKnC6nRu7zjjPMiYUDEUwKXsA86PqHdPTvkNr8JzAoLyqcHiCdBaP1gNJsKYMZtD4QRA6va3fo9TPgxaW",
  "key27": "4GN2QefEzhdxrfKskYpEhLZv6J1cnD4aA5fcx7c3UWoGjhFKV94PGfoFr1wXSmWtFgKuJQosGQ6tZggJdT57jBYx",
  "key28": "3STiNDjyxgKUdb71Fw55SAtZBbNKnB7vgZu2Qrg7q9u56z9ovHWbTcWTwfMLUnthCaLtgEHbxZ1sLAJhB5SvLF2t",
  "key29": "3jcFM1pLYgxrVXj6FDCuge2GjhF8BGed6wQf3ub9Hk7yLDtceg4fF1UFTSESAWmaFinfWnZ1fh5sznN9TmN4d7Fn",
  "key30": "3FxrLZXdx82G35dCZ1PQrmJtpyL7YcThpZ7hQZrLVGhgiSDpYmmbQArUzJmpsHb6xNgkYL19N8tuDenW1ifcdcH8",
  "key31": "2tonCErtyHaJ8UWDaMs38iiLTC7KMJuUHQoN16oBK3pkcmBruLRrVMo149H7fHRJPLmKnFWouhG5tr4Dks7LJg9X",
  "key32": "2YpmZg3Hfh8NKod8tRvdVjroqKisZ6q19HY6gmuxTgHc8ryfj34WrcSWXGR7DoUXF32i4harzYwCqhUUvSdyHKRK",
  "key33": "azSfiULkNWpgUxSKdyceP1QpuRdvC6PE4Yn4mSeMCwyhzqdvs37PJc2bX3PtxnnRiS93iDs2vHFiCV8HqsYrCkP",
  "key34": "539eu2wMzwdLRG6rGEirBpisdPXk8NMAxfDaR2Hh7oCEXbK8eoEsFmPrfLKuUxLrywjJmyJY2iA6VBYPQzDePycz",
  "key35": "2RPjBwBcajrcMuTqa18gyRDdjVmUHKEq8AapJijpviAh4e9wzweaadB7L6RsFLdmBMZWmM4u6PbYHhFPTiefHnwa",
  "key36": "5ABFuLGrboCXGQcH7ECwSvXEiLnFZLXAJo3g8nQYk9JDU4NFsirSD2UrtKoVxQ5Jk5MxCTTk7QPxTR28b9BLd5q9",
  "key37": "45C2iUf5MhQXWUw9gLEzzc2pK5eQATzpBC25sxEtjbUzYsQiLy4BSRuR1H6sMhNyoym5sq4EsE2qF83WH3ZgdRZt",
  "key38": "5tj1UjDyhRz8bF3yzBDgxUtpJjtvabe2ACA4Re46L8Z52iguAcT3XoCFosb7N9ApAwwt61Kb9FzqyLv3rvpAT2ux",
  "key39": "3CqhH4drt7LaiM9EWghvbq1SfW1YjZJLeLzNEdngB7uVYLpcS44LfUsboj2rLGCTfPbTuvs8weQrLrqzc6Jrk8sh",
  "key40": "KqoQDg85HL1GTbmyewNJyPWsTSS8nFHzinL68ug5P4bC2XENzVR78pt6wvsDMykhrAvnbQ35rTKY4ek1cdmyrta",
  "key41": "VnZLR1uN3jMpaVw496CRPexPmui6VJoV4FG3v6s7vTbW88fzib7bbad3Jpbvn9w6zKrpXXb1v3pNZUapGs6fbcx",
  "key42": "2SsgzW8DntfQjdh6zqT6gnJ6qQ3xGwysnmtKkbWiyEr3p8FFyM56fY7wZ4Fc4v98MTDziL8HuVVkkBh3TkmmCsvU",
  "key43": "2EdHZAVa46HzCH3emgCDC1ehBW8QoVNT7X7GGAZx8RL1es17ZF958wYtYntCg7mSWBbBLaHGwBaiW3HZVBdVwkzC",
  "key44": "kLjwBj9TeAR9izgm7DUPDZgC41CY5iBrZEobbNkrTXMfJNj5B9vEEPWP1QuzKbBhRc2YowHTp5SvGgNZqKAkV5z",
  "key45": "3nBhEccos2oar5RdbiyKKnPatAPbDVT2kzuM6NWdt4CPCKCBbEiKpt4T5DBiNe8vMuibG9srGnCD39sqAB5i9KwF",
  "key46": "63jGQFuuHJgaFpv3MgKc8r4UR6L4X61mkaa6hiwYokDhFLRZZvWGpoQzUq3BdRj6QXGi2942akEenje4gboZrtta",
  "key47": "57RXqcgxUkN12Xn1MpnZDHVDigT2aVvfPUn8x926EHYciTjESqJfx2UiaZ4Vobn9vKvWfDmj8ELovm3PHby9SafV",
  "key48": "4zZcvdrDs54M48Kybpj9XpJ5zPvzHW9T61nJWX2UGWDT2mdaFRweYTtf92pS5Wg51MmWn63ZRtmtdeNdpyc6QHu6",
  "key49": "3xWVkrdGtGKoHsVuGLMw8LGoi3ZJ8Y2oxw2KTPzSEwNFX1Wu6ud4VCeBi4wja6y9j6E2f67nxQ377cQrrPqG8VQv"
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
