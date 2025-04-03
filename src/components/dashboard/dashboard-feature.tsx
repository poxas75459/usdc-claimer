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
    "3kcnNY8aPVAdvMsh7JMscvCJCKarNYMEaMhAkV9xR28UENizZGBv3sGhzW9WsaX2FXiHEgsXxnyCVFbk8viLHHUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x8kdQxigYtiEiLVhExUvt8B7cpdmBLxvtrfSWk3rsXSLwemmZ9YXrLWrJk5Bk2P6wYkQjuzycpPx7syCPStr7aV",
  "key1": "72ivzNBqV6Pd5XnAHiuuo4roLbDi9a1JpZ9bq2yYTwS4iLbfsN22mPvDNeNzNwQPrEkx1KM2v9XdEsTY1nDo1qp",
  "key2": "h7njYEE7kS62MDXCs2kvFfPY5sU1aw6WH94PA5xFqN9xvSykNhvEsX3orApozmQKDd7wr7Z6hztFckyGm7qJFHg",
  "key3": "rPBy3PDqLRFUhWdhcUyvLMFy2gketQFAnPYLY3FfxFLNFq2Fo2Je1nMWgq1UYLDebVm4onDurvuacnwASsQqijw",
  "key4": "Qu9CrGoWYEmaicktCfVhKdH8cA66nfjBiuk2udsGB2btAx4AK1rrwR8bGH34bmzhYm3Fo5MMfBdfQ3TDKKHURyF",
  "key5": "54NTKc2BeiPfFHxxvZy4WHUzrtwTJt8dz9EavX41U3LxsU5SdQNuw2eCtyZdAUune4bhYjBdTU74BuAADVRNyuat",
  "key6": "5dkCjVngSU2HVLmbkFJES6EhaC2NXoeAj3rgGoVXuJwtjX3pmxDA7JP5Qqi2qj5xVx7Q9w811Jy4B98ar8bAkptZ",
  "key7": "67A44xjz2dZ81pSqVozufTyZsW9QNkp7esbeYxb7UDEX4Bui7x5k626RsVdhpeScKpRbS58MXqQ1Pw8vjyjE4U3u",
  "key8": "5aLMVcZA8HChXCTbvw82JqgxdYXY3CcVN8WuKaKSApxaFqut1RtfdRjB9jQTtGzDYJM6bHBRtSaktYTE8qc1wu8z",
  "key9": "5M6hABWfD8mybS9opDJtuZrqLuw3ma43XXnKvK4u8yoJ2eVbAUimS6D4kA257LnfSPneEmpnxy5qeHktfZgovfnU",
  "key10": "4m4W6PQDMsR9ZxLFvtyLC1VAgieyxdSqfWLwEVGkouWgC7r31k7h9ZHtUo9KGuHbhMPuH1L89L34koetj74xfzyi",
  "key11": "3Fg1ykxDxvyfB2f5tnGW534fxLHKonAwJeHePYdjsRLPFgEcu5t11pY1oMX18SKPCGTaWmwVCqTGhfea8f5cRbMU",
  "key12": "2E4f4kviUFcnXMVE37V5Eir1Mk7YSt4xochUZ77BP7QiUHYWbv56r8Qap7yxZijbgkdNpQ6JBSoHGz3bGMMXiz5g",
  "key13": "PT7X73MWz7qYXoH3h81pgTVGYLPCj6DtPYUCjKA1MgxT7DvdkqDqbrGZjo4QXndWfZypErwWgHJEpNTrqgCm3MQ",
  "key14": "2E5qSvSsE871pHeAqxdzS4qFgnS4nXdYEdGcMm8Hx1J4tuktmWDwwFCPegXUJFgcdaNL9FQxNMKA6T8DJ2J4KtrQ",
  "key15": "5xeSnEibDKJf16EjnWz3iNiBWysrWESGjBqqK6GWZ4WXrJvnxL8fuQ54ekQ8tryJGnbb3gZ8DZpk6jxWbXj3GRZB",
  "key16": "3Gb3Fyno9m88Z4DZ9s2SZrxXj6NTXRzsZHuk5CQJkeUESpbB33aKhQCNdraSfDiucyRht2Qu75CKqifLQZKA8cLP",
  "key17": "4V7s7hrpTCLBx6QEHc2TnXTTHN2sj51nqc2JfsHAPUM92X4S5J5wxiavLA28JBYHvoeoNqzRMNWE9dJsbdRxKhda",
  "key18": "DwuLCkrp8Wk5C2JfKSxSU4KhysYWHKesCNunV3henZYj5QHdCV7ej2dCrGpbXERU7QnSMfN6jfb88aA7H6qquaY",
  "key19": "6564kXxgSCJ11xEBHQu5727eKf4DbBxJGX3rcT6iuDGnMopuRLPak4ozrWAgvGbs7FXYwUkoGUSAGemVDqAhhLBk",
  "key20": "2ZFteQdAzhN9tV1UhfGfNqxDKWkX2GSFsuX8452NN9z8bJQu7hRxbxr1uLDqrqD2RAKQVLRnGRxVvLBfhX1NrgbX",
  "key21": "PVM39YzbiwVuiadSNuShgM1HiH8y2wEar18WeszkH4ywTzGwcZRZry4oV648pq7432CijVYhvPrRCRfoyEFjYua",
  "key22": "5L922LkGN9NrfQxero4u7tq8QTMo91ffihERhejQePcBcVGFDcAetGLnyUnBVzNZJJ61L3gGqR3abS4hXeyPoH1j",
  "key23": "3cbb8bx9PMVfm93Z1C2EzwbQhzeQVgDNBpP8shDus3KYcjMg7BjDtCJ14BoQLj7NQUjjrqAouZEsa1jPrJJuor1s",
  "key24": "2Xn1JCVwrn1LZGU1UZULrrj2BuCG15GxHL1vqhhfNF3iChW8QotU5kcEo5Vi4mm4DAFebzdZb4YYSYyft8n5tJLc",
  "key25": "47zs8AEtsUgNaeZCSYchKBzdmtsMAnbuUzD8jQVVh5gw8rmdBuuGLJvpXJ8DpsHQob8ZcQBCu4cUa59VZX1NBitg",
  "key26": "3shMLWazgd2nUp3PJ9DQEpWAF4K1sxJvrEWX8xh6FrcSZSofguW79NdqEcgyjF47p5MW89LZyrKgf1DNZaRMUWVW",
  "key27": "3ARYbUcD32hRjujssqsjEkRaTuopfsbjTdhPiHWGCpgDSgGscpzPCHai1jsGW5x84ewqq2CZpnyrcYrWX76szCgi",
  "key28": "HSjrpKo7ZRJnEn9ynoppv7do984rE93UnTWZTxfEgJHFRbZXQq2BVrvnz9nwbzcnYGFantMUeW9gGcHQBL5qsrS",
  "key29": "4Zu8PmELKhG4KYh5nNk9bkqyrxdAr8o8hvkw96KogsPN6aUBcdMAqxBQaC7rV4hmTx7ajSsmBuPXMs3mPW3N1ALr",
  "key30": "4WFfWWGFkAx9tB1JsLDNh4MNuZmpcQ4jcQZnXK8S8nPp527QbwjH2ekUnfmCDcSZe85VjHesKtohtrjNfpVvFYJp",
  "key31": "pYF5h1xoentXoSScEbRnhJGeYjyJ6dWW28wRHeokYEYEMczMJG26nJdKkXRAjwgsuvaaxLGnZuf58658y2Aucpb",
  "key32": "3nLvqUxCKsXn3z8dLCgqf6kdNR5cDe49VTnWBJsiPobfgpfVmq6G5HFcKphN5n6hJnQbqUN52yv4swwR8PNt6Rf8",
  "key33": "21cc6deZZkFG9bCVuZJyFykrW5TEc7hwhsWeMzPEtDrNS23FKSMGkWz83R1chEtBugDwiwbqZhUAQS1dUfMCQpQd",
  "key34": "2m3sgdHx4AHJabRGtFkmcG6mRt1vJUVAMHWdtJvM757wdw3kuefLgMz4nS9WLBGK4ZQNSibPfFQTQRdcjix7JQhT",
  "key35": "2mX9WFkakVW7HwzwhmSqRAm5S8hFkmbuzhYbVMuukrfNRgoakCGgn9JWdXHCKwPqeZDj3p352fz5GLJYAzw9LZAy"
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
